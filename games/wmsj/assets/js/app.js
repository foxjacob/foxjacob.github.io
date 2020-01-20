/*!
 * @overview: 主入口
 */
var myPlayScore = 0;
{
    
    function clickMore() {
        // Play68.goHome();
    }
    function dp_share() {
        // play68_submitScore(myPlayScore);
    }

    function dp_Ranking() {
        //ih5game.more();
    }
    function dp_submitScore(score) {
        if (score > 0) {
			// updateShare(score);
			// Play68.setRankingScoreDesc(score);
			myPlayScore = score;
        }
    }
}
(function() {
    function preloadimages(obj, cb) {
        var loaded = 0;
        var toload = 0;
        var images = obj instanceof Array ? [] : {};

        for (var i in obj) {
            toload++;
            images[i] = new Image();
            images[i].onload = load;
            images[i].onerror = load;
            images[i].onabort = load;
            images[i].src = obj[i];
        }

        function load() {
            if (++loaded >= toload) cb(images);
        }
    }

    var game = {
        $el: {
            "container": $("#game"),
            "view": $("#view"),
            "control": $("#control"),
            "index": $("#index"),
            "gameover": $("#gameover"),
            "score": $("#score")
        },

        init: function() {
            this._h = this.$el.container.height();
            this._w = this.$el.container.width();
            this._itemW = this._w / 4;
            this._vH = this._w / 4 * 10;

            this.d = 160;
            this.V = this._itemW / this.d;

            this.reset();
            this.initEvent();
            dp_submitScore(bar.score);
        },

        reset: function() {
            bar.score = 0;
            this.idxList = [];
            this._isOver = false;
            this._start = false;
        },
        initEvent: function() {
            var me = this;
            var tap = ( !! ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)) ? "touchstart" : "mousedown";
            var tapend = ( !! ('ontouchend' in window || window.DocumentTouch && document instanceof DocumentTouch)) ? "touchend" : "mouseup";

            document.body.addEventListener("touchmove", function(event) {
                event.preventDefault();
                event.stopPropagation();
            }, false);


            document.body.addEventListener("touchstart", function(event) {
                event.preventDefault();
                event.stopPropagation();
            }, false);
            // start
            $("#btn-start").on(tap, function(e) {
                e.preventDefault();
                e.stopPropagation();
                me.reset();
                me.$el.index.hide();
                me.$el.gameover.hide();
                bar.isGameStart = false;
                bar.score = 0;
                bar.radIndex = 0;
                
            });
			 $("#btn-more2").on(tap, function() {
               clickMore();
            });
            $("#btn-restart").on(tap, function(e) {
                e.preventDefault();
                e.stopPropagation();
                me.reset();
                me.$el.index.hide();
                me.$el.gameover.hide();
                bar.radIndex = 0;
                bar.isGameStart = false;
                bar.score = 0;
                bar.init();
             
            });
            // TODO : share
            $("#btn-share").on(tap, function() {
               dp_share();
            });
			 $("#btn-more").on(tap, function() {
               clickMore();
            });

            //记录一个状态 表示游戏已经开始了
            $("#game").on(tap, function() {
                if (bar.isShot) {
                    bar.isShot = true;
                    bar.run();
                    if (!bar.isGameStart) {
                        bar.isGameStart = true;
                    }
                }
            });
            $("#game").on(tapend, function() {
                if (bar.isShot) {
                    if (bar.isGameStart) {
                        bar.isShot = false;
                        bar.destore();
                    }
                }
            });
            bar.init();
        }
    }

    var imgList = ['assets/img/win.png', 'assets/img/fail_1.png', 'assets/img/fail_2.png', 'assets/img/fail_3.png', 'assets/img/apple.png', 'assets/img/apples.png', 'assets/img/bow.png', 'assets/img/arrow.png', 'assets/img/boyaa.png', 'assets/img/people.png', 'assets/img/logo.png', 'assets/img/retry.png', 'assets/img/share.png','assets/img/more.png', 'assets/img/start.png', 'assets/img/life.png'];
    preloadimages(imgList, function() {
        $("#by-loading").hide();
        game.init();
    });

})(window);