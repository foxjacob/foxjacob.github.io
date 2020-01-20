SharkGame.Stats = {

    tabId: "stats",
    tabDiscovered: false,
    tabName: "岩洞",
    tabBg: "img/bg/bg-grotto.png",

    sceneImage: "img/events/misc/scene-grotto.png",

    recreateIncomeTable: null,

    discoverReq: {
        upgrade: [
            "statsDiscovery"
        ]
    },

    bannedDisposeCategories: [
        "special",
        "harmful"
    ],

    message: "岩洞是一个可以更好地追踪资源的地方。" +
        "</br></br>你也可以处理那些你不再需要的东西。" +
        "</br>处理专家将他们恢复到正常的，以前的生活。",

    init: function() {
        var s = SharkGame.Stats;
        // register tab
        SharkGame.Tabs[s.tabId] = {
            id: s.tabId,
            name: s.tabName,
            discovered: s.tabDiscovered,
            discoverReq: s.discoverReq,
            code: s
        };
        s.recreateIncomeTable = true;
    },

    switchTo: function() {
        var s = SharkGame.Stats;
        var content = $('#content');
        content.append($('<div>').attr("id", "tabMessage"));
        var statsContainer = $('<div>').attr("id", "statsContainer");
        content.append(statsContainer);
        statsContainer.append($('<div>').attr("id", "statsLeftContainer")
                .append($('<div>').attr("id", "incomeData"))
                .append($('<div>').attr("id", "disposeResource"))
        );
        statsContainer.append($('<div>').attr("id", "statsRightContainer")
                .append($('<div>').attr("id", "generalStats"))
        );

        statsContainer.append($('<div>').addClass("clear-fix"));
        var message = s.message;
        var tabMessageSel = $('#tabMessage');
        if(SharkGame.Settings.current.showTabImages) {
            message = "<img width=400 height=200 src='" + s.sceneImage + "' id='tabSceneImage'>" + message;
            tabMessageSel.css("background-image", "url('" + s.tabBg + "')");
        }
        tabMessageSel.html(message);

        var disposeSel = $('#disposeResource');
        disposeSel.append($('<h3>').html("处理"));
        s.createDisposeButtons();

        var table = s.createIncomeTable();
        var incomeDataSel = $('#incomeData');
        incomeDataSel.append($('<h3>').html("收入明细"));
        incomeDataSel.append($('<p>').html("(下面列出的是资源、每个资源的收入，以及从每件事物获得的总收入。)").addClass("medDesc"));
        incomeDataSel.append(table);

        var genStats = $('#generalStats');
        genStats.append($('<h3>').html("一般统计"));
        var firstTime = SharkGame.Main.isFirstTime();
        if(!firstTime) {
            genStats.append($('<p>').html("<span class='medDesc'>气候水平</span><br>" + SharkGame.Main.beautify(SharkGame.World.planetLevel)));
        }
        genStats.append($('<p>').html("自从你开始的时间:<br/><span id='gameTime' class='timeDisplay'></span>").addClass("medDesc"));
        if(!firstTime) {
            genStats.append($('<p>').html("自你从传送门进来的时间<br/><span id='runTime' class='timeDisplay'></span>").addClass("medDesc"));
        }
        genStats.append($('<h3>').html("获得的海洋资源总量"));
        if(!firstTime) {
            genStats.append($('<p>').html("给定的基本要素是整个游戏所获得的总能力，而不仅仅是这个世界。").addClass("medDesc"));
        }
        genStats.append(s.createTotalAmountTable());

        SharkGame.Main.createBuyButtons("rid");
    },

    update: function() {
        var m = SharkGame.Main;
        var s = SharkGame.Stats;

        s.updateDisposeButtons();
        s.updateIncomeTable();
        s.updateTotalAmountTable();
        if(s.recreateIncomeTable) {
            s.createIncomeTable();
            s.createTotalAmountTable();
            s.recreateIncomeTable = false;
        }

        // update run times
        var currTime = (new Date()).getTime();
        $('#gameTime').html(m.formatTime(currTime - SharkGame.timestampGameStart));
        $('#runTime').html(m.formatTime(currTime - SharkGame.timestampRunStart));
    },

    createDisposeButtons: function() {
        var r = SharkGame.Resources;
        var s = SharkGame.Stats;
        var m = SharkGame.Main;
        var buttonDiv = $('#disposeResource');
        $.each(SharkGame.ResourceTable, function(k, v) {
            if(r.getTotalResource(k) > 0 && s.bannedDisposeCategories.indexOf(r.getCategoryOfResource(k)) === -1) {
                SharkGame.Button.makeButton("dispose-" + k, "Dispose of " + r.getResourceName(k), buttonDiv, SharkGame.Stats.onDispose);
            }
        });
    },

    updateDisposeButtons: function() {
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        $.each(SharkGame.ResourceTable, function(k, v) {
            if(r.getTotalResource(k) > 0) {
                var button = $('#dispose-' + k);
                var resourceAmount = r.getResource(k);
                var amountToDispose = SharkGame.Settings.current.buyAmount;
                if(amountToDispose < 0) {
                    var max = resourceAmount;
                    var divisor = Math.floor(amountToDispose) * -1;
                    amountToDispose = Math.floor(max / divisor);
                }
                var forceSingular = amountToDispose === 1;
                var disableButton = (resourceAmount < amountToDispose) || (amountToDispose <= 0);
                var label = "销毁 " + m.beautify(amountToDispose) + " " + r.getResourceName(k, disableButton, forceSingular);
                if(amountToDispose <= 0) {
                    label = "Can't dispose any more " + r.getResourceName(k, disableButton, forceSingular);
                }

                button.html(label).prop("disabled", disableButton);
            }
        });
    },

    onDispose: function() {
        var r = SharkGame.Resources;
        var l = SharkGame.Log;
        var resourceName = ($(this).attr("id")).split("-")[1];
        var resourceAmount = r.getResource(resourceName);
        var amountToDispose = SharkGame.Settings.current.buyAmount;
        if(amountToDispose < 0) {
            var max = resourceAmount;
            var divisor = Math.floor(amountToDispose) * -1;
            amountToDispose = (max / divisor);
        }
        if(resourceAmount >= amountToDispose) {
            r.changeResource(resourceName, -amountToDispose);
            var category = SharkGame.ResourceCategories[r.getCategoryOfResource(resourceName)];
            var employmentPool = r.getBaseOfResource(resourceName);
            if(employmentPool) {
                r.changeResource(employmentPool, amountToDispose);
            }
            l.addMessage(SharkGame.choose(category.disposeMessage));
        } else {
            l.addMessage("Can't dispose that much! You don't have enough of it.");
        }
    },

    updateIncomeTable: function() {
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        $.each(SharkGame.ResourceTable, function(k, v) {
            if(r.getTotalResource(k) > 0 && SharkGame.ResourceTable[k].income) {
                var income = SharkGame.ResourceTable[k].income;
                $.each(income, function(incomeKey, incomeValue) {
                    var cell = $("#income-" + k + "-" + incomeKey);
                    var changeChar = incomeValue > 0 ? "+" : "";
                    cell.html("<span style='color: " + r.TOTAL_INCOME_COLOR + "'>" + changeChar + m.beautify(r.getProductAmountFromGeneratorResource(k, incomeKey)) + "/s</span>");
                });
            }
        });
    },

    updateTotalAmountTable: function() {
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        $.each(SharkGame.ResourceTable, function(k,v) {
            var totalResource = r.getTotalResource(k);
            if(totalResource > 0) {
                var cell = $("#totalAmount-" + k);
                cell.html(m.beautify(totalResource));
            }
        });
    },

    createIncomeTable: function() {
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        var w = SharkGame.World;
        var incomesTable = $("#incomeTable");
        if(incomesTable.length === 0) {
            incomesTable = $("<table>").attr("id", "incomeTable");
        } else {
            incomesTable.empty();
        }

        var specialMultiplierCol = null;
        var addSpecialMultiplier = false;
        if(r.getSpecialMultiplier() > 1) {
            addSpecialMultiplier = true;
        }

        var formatCounter = 0;

        $.each(SharkGame.ResourceTable, function(generatorName, generatorData) {
            if(r.getTotalResource(generatorName) > 0 && generatorData.income) {


                // if the resource has an income requiring any costs
                // and it isn't a forced income
                // do not display the resource's income if it requires a non-existent resource (looking at you, sponge)
                var validIncome = true;
                var income = generatorData.income;
                var row = $("<tr>");

                var numIncomes = 0;
                $.each(income, function(incomeResourceName, incomeResourceAmount) {
                    if(w.doesResourceExist(incomeResourceName) && r.getTotalResource(incomeResourceName) > 0) {
                        numIncomes++;
                    } else if(incomeResourceAmount < 0 && !generatorData.forceIncome) {
                        // non-existent cost! abort! ABORT
                        validIncome = false;
                    }
                });

                if(validIncome) {
                    var counter = 0;

                    var rowStyle = (formatCounter % 2 === 0) ? "evenRow" : "oddRow";
                    row.append($("<td>").html(r.getResourceName(generatorName)).attr("rowspan", numIncomes).addClass(rowStyle));

                    $.each(income, function(incomeKey, incomeValue) {
                        if(w.doesResourceExist(incomeKey) && r.getTotalResource(incomeKey) > 0) {
                            var changeChar = incomeValue > 0 ? "+" : "";
                            row.append($("<td>").html(r.getResourceName(incomeKey)).addClass(rowStyle));
                            row.append($("<td>").html("<span style='color: " + r.INCOME_COLOR + "'>" + changeChar + m.beautify(incomeValue) + "/s</span>").addClass(rowStyle));

                            // does this resource get a boost multiplier?
                            var boostMultiplier = w.worldResources[incomeKey].boostMultiplier;
                            if(boostMultiplier !== 1) {
                                row.append($("<td>").html("<span style='color: " + r.BOOST_MULTIPLIER_COLOR + "'>x" + m.beautify(boostMultiplier) + "</span>").addClass(rowStyle));
                            } else {
                                row.append($("<td>").addClass(rowStyle)); // empty cell
                            }

                            if(counter === 0) {
                                row.append($("<td>").attr("rowspan", numIncomes).html("<span style='color: " + r.UPGRADE_MULTIPLIER_COLOR + "'>x" + r.getMultiplier(generatorName) + "</span>").addClass(rowStyle));
                                // does this income get a world multiplier?
                                var worldMultiplier = w.getWorldIncomeMultiplier(generatorName);
                                if(worldMultiplier !== 1) {
                                    row.append($("<td>").attr("rowspan", numIncomes).html("<span style='color: " + r.WORLD_MULTIPLIER_COLOR + "'>x" + m.beautify(worldMultiplier) + "</span>").addClass(rowStyle));
                                } else {
                                    row.append($("<td>").attr("rowspan", numIncomes).addClass(rowStyle));
                                }
                                // does this income get an artifact multiplier?
                                var artifactMultiplier = w.getArtifactMultiplier(generatorName);
                                if(artifactMultiplier !== 1) {
                                    row.append($("<td>").attr("rowspan", numIncomes).html("<span style='color: " + r.ARTIFACT_MULTIPLIER_COLOR + "'>x" + m.beautify(artifactMultiplier) + "</span>").addClass(rowStyle));
                                } else {
                                    row.append($("<td>").attr("rowspan", numIncomes).addClass(rowStyle));
                                }
                            }
                            if(addSpecialMultiplier) {
                                specialMultiplierCol = $("<td>").html("<span class='essenceGlow'>x" + m.beautify(r.getSpecialMultiplier()) + "</span>").addClass("essenceGlow");
                                row.append(specialMultiplierCol);
                                addSpecialMultiplier = false;
                            }

                            row.append($("<td>").attr("id", "income-" + generatorName + "-" + incomeKey)
                                .html("<span style='color: " + r.TOTAL_INCOME_COLOR + "'>" + changeChar + m.beautify(r.getProductAmountFromGeneratorResource(generatorName, incomeKey)) + "/s</span>").addClass(rowStyle));

                            counter++;
                            incomesTable.append(row);
                            row = $("<tr>");
                        }

                    });

                    // throw away dangling values
                    row = null;
                    formatCounter++;
                }
            }
        });

        if(specialMultiplierCol) {
            var rowCount = incomesTable.find("tr").length;
            specialMultiplierCol.attr("rowspan", rowCount);
        }

        return incomesTable;
    },

    createTotalAmountTable: function() {
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        var totalAmountTable = $("#totalAmountTable");
        if(totalAmountTable.length === 0) {
            totalAmountTable = $("<table>").attr("id", "totalAmountTable");
        } else {
            totalAmountTable.empty();
        }

        $.each(SharkGame.ResourceTable, function(k, v) {
            if(r.getTotalResource(k) > 0) {
                var row = $('<tr>');

                row.append($('<td>').html(r.getResourceName(k)));
                row.append($('<td>').html(m.beautify(r.getTotalResource(k))).attr("id", "totalAmount-" + k));

                totalAmountTable.append(row);
            }
        });

        return totalAmountTable;
    }




};