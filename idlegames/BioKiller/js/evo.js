/**
 * Created by chrisramsey on 1/4/15.
 */
evo = {

    //variables
    totalPoints: 0,
    multiplier: 0.1,
    time: 1,
    barWidth: 0,
    totalGerms: 0,
    experimentProgress: 0,
    experimentTime: 0,
    equipmentProgress: 0,
    equipmentTime: 0,
    contaminateWait: 0,
    canContaminateAfter: 300,
    contaminateChance: 1000,
    contaminateMessages: [],
    experimentsDisabled: false,
    equipmentDisabled: false,
    germX: [],
    germXanim: [],
    germY: [],
    germYanim: [],
    germs: [],
    germ: {},
    buttons: [],
    germInterval: null,
    experimentInterval: null,
    equipmentInterval: null,

    getButtons: function () {
        $('.actions .addMultiplier').each(function (key, val) {
            $(this).find('.cost').text($(this).data('cost'));
            $(this).find('.cost').digits();
            $(this).find('.add').text($(this).data('add'));

            if ($(this).has('.time').length) {
                $(this).find('.time').text(misc.secondsTimeSpanToHMS($(this).data('time')));
            }

            evo.buttons.push($(this).data('name'));
        });

        $('.actions .addEquipment').each(function (key, val) {
            $(this).find('.cost').text($(this).data('cost'));
            $(this).find('.cost').digits();
            $(this).find('.add').text($(this).data('add'));

            if ($(this).has('.time').length) {
                $(this).find('.time').text(misc.secondsTimeSpanToHMS($(this).data('time')));
            }

            evo.buttons.push($(this).data('name'));
        });
    },

    //set the state of the buttons based on how many points the user has
    setButtonStates: function () {
        evo.buttons.forEach(function (val, key, array) {
            //if is equipment
            if ($('.' + val).hasClass('addEquipment')) {
                //get cost of button
                var cost = parseFloat($('.addEquipment.' + val).data('cost'));

                if (evo.totalPoints < cost) {
                    //disable the button
                    $('.addEquipment.' + val).prop('disabled', true).css('opacity', '0.5');
                } else {
                    //enable the button

                    if ($('.addEquipment.' + val).hasClass('experiment') && evo.equipmentDisabled == true) {
                        $('.addEquipment.' + val).prop('disabled', true).css('opacity', '0.5');
                    } else {
                        $('.addEquipment.' + val).prop('disabled', false).css('opacity', '1');
                    }
                }
            } else { //everything else
                //get cost of button
                var cost = parseFloat($('.addMultiplier.' + val).data('cost'));

                if (evo.totalPoints < cost) {
                    //disable the button
                    $('.addMultiplier.' + val).prop('disabled', true).css('opacity', '0.5');
                } else {
                    //enable the button

                    if ($('.addMultiplier.' + val).hasClass('experiment') && evo.experimentsDisabled == true) {
                        $('.addMultiplier.' + val).prop('disabled', true).css('opacity', '0.5');
                    } else {
                        $('.addMultiplier.' + val).prop('disabled', false).css('opacity', '1');
                    }
                }
            }
        });
    },

    addMultiplier: function (button) {
        var clicked = '.' + button;

        $(clicked).prop('disabled', true);

        if ($(clicked).hasClass('experiment')) {
            evo.runExperiment(clicked);
            return true;
        }

        var add = parseFloat($(clicked).data('add'));
        var cost = parseFloat($(clicked).data('cost'));

        if (evo.totalPoints >= cost) {
            evo.multiplier = evo.roundIt(evo.multiplier + add);
            evo.totalPoints = evo.roundIt(evo.totalPoints - cost);

            $('.totalPoints').text(evo.totalPoints);
            $('.totalPoints').digits();
            $('.multiplier').text(evo.multiplier);
            $('.multiplier').digits();

            evo.increaseCost(clicked);
        } else {
            //fail purchase
            console.log('fail');
        }

        if ($(clicked).hasClass('reproduce')) {
            if ($(clicked).data('multiple')) {
                for (var i = 0; i <= $(clicked).data('multiple'); i++) {
                    evo.makeGerm();
                }
            } else {
                evo.makeGerm();
            }
        }
    },

    addEquipment: function(clicked) {
        console.log(clicked);

        evo.equipmentTime = $(clicked).data('time');
        evo.equipmentProgress = 0;
        $('.equipment').prop('disabled', true);
        evo.equipmentDisabled = true;

        evo.equipmentInterval = setInterval(function () {
           evo.equipmentProgress++;

            var percent = evo.equipmentProgress / evo.equipmentTime * 100;

            console.log(evo.equipmentTime);

            if (percent < 100) {
                $('.equipment.progress-bar').width(percent + '%');

                var showPercent = evo.roundIt(percent).toString();

                if (showPercent.indexOf('.') == -1) {
                    showPercent += '.00';
                }

                $('.equipment-percent').text(showPercent + '%');
            } else {
                clearInterval(evo.equipmentInterval);
                evo.equipmentDisabled = false;
                $('.equipment.progress-bar').width('0%');

                var add = parseFloat($(clicked).data('add'));
                var cost = parseFloat($(clicked).data('cost'));

                if (evo.totalPoints >= cost) {
                    evo.contaminateChance = evo.contaminateChance * add;
                    evo.totalPoints = evo.roundIt(evo.totalPoints - cost);

                    $('.totalPoints').text(evo.totalPoints);

                    evo.increaseCost(clicked);
                } else {
                    //fail purchase
                }

                evo.setButtonStates();
            }
        }, evo.time * 1000);
    },

    //increase the cost of the button purchase by 0.3%
    increaseCost: function (btn) {
        var oldCost = parseFloat($(btn).data('cost'));
        var newCost = evo.roundIt(oldCost + (oldCost * 0.3));

        $(btn).data('cost', newCost);
        $(btn + ' .cost').text(newCost);
        $(btn + ' .cost').digits();

        if (evo.totalPoints < newCost) {
            $(btn).prop('disabled', true).css('opacity', '0.5');
        } else {
            $(btn).prop('disabled', false);
        }
    },

    roundIt: function (num) {
        num = Math.round((num + 0.00001) * 100) / 100;
        return num;
    },

    makeGerm: function () {
        evo.totalGerms++;
        $('.totalGerms').text(evo.totalGerms);
        $('.totalGerms').digits();

        if (evo.totalGerms > 200) {
            thisTotal = 200;
        } else {
            thisTotal = evo.totalGerms;
        }

        (function() {
            var total = thisTotal,
                blobs = new Array(total),
                myfps = 60,
                updateTime = 1000 / myfps,
                mouse_pos = { x: 0, y: 0 },
                canvas = this.__canvas = new fabric.Canvas('evo-canvas', {
                    renderOnAddRemove: false,
                    selection: false
                }),
                maxx = canvas.width,
                maxy = canvas.height,
                msg, startTime, prevTime, ms, frames;

            //canvas.setBackgroundImage('../assets/bkg.jpg');
            fabric.Image.fromURL('images/germ.png', blobLoaded);

            canvas.on('mouse:move', function(options) {
                mouse_pos = canvas.getPointer(options.e);
            });

            function blobLoaded(img) {
                for (var i = 0; i < total; i++) {
                    var rotate = Math.random() * 360;

                    var img = new fabric.Image(img.getElement(), {
                        left: Math.random() * maxx,
                        top: Math.random() * maxy,
                        selectable: false,
                        scaleX: 0.5,
                        scaleY: 0.5,
                        angle: rotate
                    });
                    img.vx = 0;
                    img.vy = 0;
                    canvas.add(img);
                    blobs[i] = img;
                }
                animate();
            }

            function animate() {
                for (var i = 0; i < total; i++) {
                    var blob = blobs[i];
                    var dx = blob.left - mouse_pos.x;
                    var dy = blob.top - mouse_pos.y;
                    var vx = blob.vx;
                    var vy = blob.vy;

                    if (dx * dx + dy * dy <= 10000) {
                        vx += dx * 0.01;
                        vy += dy * 0.01;
                    }
                    vx *= 0.95;
                    vy *= 0.95;

                    vx += Math.random() - 0.5;
                    vy += Math.random() - 0.5;

                    var x = blob.left += vx;
                    var y = blob.top += vy;

                    if (x < 0 || x > maxx || y < 0 || y > maxy) {
                        var r = Math.atan2(y - maxy / 2, x - maxx / 2);
                        vx = -Math.cos(r);
                        vy = -Math.sin(r);
                    }

                    blob.vx = vx;
                    blob.vy = vy;
                }

                fabric.util.requestAnimFrame(animate, canvas.getElement());
                canvas.renderAll();
            }
        })();

        $('.canvas-container:eq(1)').unwrap();
        $('canvas:eq(1)').remove();

    },

    runExperiment: function (experiment) {
        evo.experimentTime = $(experiment).data('time');
        evo.experimentProgress = 0;
        $('.experiment').prop('disabled', true);
        evo.experimentsDisabled = true;

        evo.experimentInterval = setInterval(function () {
            evo.experimentProgress++;

            var percent = evo.experimentProgress / evo.experimentTime * 100;

            if (percent < 100) {
                $('.experiment.progress-bar').width(percent + '%');

                var showPercent = evo.roundIt(percent).toString();

                if (showPercent.indexOf('.') == -1) {
                    showPercent += '.00';
                }

                $('.experiment-percent').text(showPercent + '%');
            } else {
                clearInterval(evo.experimentInterval);
                evo.experimentsDisabled = false;
                $('.experiment.progress-bar').width('0%');

                var add = parseFloat($(experiment).data('add'));
                var cost = parseFloat($(experiment).data('cost'));

                if (evo.totalPoints >= cost) {
                    evo.multiplier = evo.multiplier + add;
                    evo.totalPoints = evo.totalPoints - cost;
                    evo.roundIt();

                    $('.totalPoints').text(evo.totalPoints);
                    $('.multiplier').text(evo.multiplier);

                    evo.increaseCost(experiment);
                } else {
                    //fail purchase
                }

                evo.setButtonStates();
            }
        }, evo.time * 1000);
    },

    start: function () {
        $('.start-modal').modal('show');

        //setup experiment tooltips
        $('.experiment').tooltip({
            placement: "right",
            title: "注意:你一次只能做一个实验……",

        });


        //get contaminate messages
        $.getJSON('data/contaminate.json').done(function(d) {
            $.each(d.msg, function(key, val) {
                evo.contaminateMessages.push(val);
            });
        })
    },

    addPoints: function () {
        evo.totalPoints = evo.totalPoints + 5000;
    },

    contaminate: function() {
        var msg = evo.contaminateMessages[Math.floor(Math.random() * evo.contaminateMessages.length )];

        $.growl({
            title: "Your lab's been contaminated!",
            message: msg
        }, {
            template: "<div data-growl='container' class='alert' role='alert'>\
                        <button type='button' class='close' data-growl='dismiss'>\
                        <span aria-hidden='true'>×</span>\
                        <span class='sr-only'>Close</span>\
                        </button>\
                        <span data-growl='icon'></span>\
                        <span class='growl-title' data-growl='title'></span><br />\
                        <span data-growl='message'></span>\
                        <a href='#' data-growl='url'></a>\
                        </div>",
            delay: 7000,
            placement: {
                from: "bottom",
                align: "right"
            },
            type: 'growl',
            animate: {
                enter: 'animated fadeInRight',
                exit: 'animated fadeOutRight'
            }
        });

        evo.totalGerms = Math.round(evo.totalGerms / 2);
        evo.multiplier = evo.roundIt(evo.multiplier / 1.2);
        evo.makeGerm();
    }
};