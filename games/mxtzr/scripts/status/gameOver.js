void
function(e, t) {
    function u() {
        // Play68.goHome()
    }

    function a() {
        Jyo.importScript(baseUrl + "scripts/status/startScreen.js")
    }

    function f() {
        // play68_submitScore(e._playmyscore);
    }
    var n = game.content,
        r = game.renderer,
        i = game.touch,
        s = game.mouse;
    var o = new Jyo.Status;
    o.load = function() {
        backgroundMusic.pause();
        backgroundMusic.src = "#";
        ih5game.setScore(score);
        document.getElementById("score1").innerHTML = score;
        document.getElementById("score2").innerHTML = "$" + score;
        document.getElementById("mxName").innerHTML = function() {
            switch (currentSelectPerson) {
                case 0:
                    return "冰冰";
                case 1:
                    return "晓明";
                case 2:
                    return "明泉"
            }
        }();
        document.getElementById("baifen").innerHTML = function() {
            var e = score / 5e4 * 100 | 0;
            return e >= 100 ? 100 : e
        }();
        ih5game.setShare({
            title: "明星投资人",
            desc: document.getElementById("mxName").innerHTML + "帮我在《明星投资人》游戏中获得了$" + score + "创业基金，击败了全国" + document.getElementById("baifen").innerHTML + "%的创业者.即将成为下一个马云！快来抢明星基金吧！"
        });
        var t = document.getElementById("mxName").innerHTML + "明星协助我获得" + score + "元创业资金，击败" + document.getElementById("baifen").innerHTML + "%的人,就此走向人生巅峰!";
        e._playmyscore = score; /*play68_submitScore(score);*/
        // Play68.setRankingScoreDesc(score);;
        setTimeout(function() {
            document.querySelector("#gameOverScreen .btnAward").addEventListener("touchstart", u, false);
            document.querySelector("#gameOverScreen .btnAward").addEventListener("mousedown", u, false);
            document.querySelector("#gameOverScreen .btnContinue").addEventListener("touchstart", a, false);
            document.querySelector("#gameOverScreen .btnContinue").addEventListener("mousedown", a, false);
            document.querySelector("#gameOverScreen .btnShare").addEventListener("touchstart", f, false);
            document.querySelector("#gameOverScreen .btnShare").addEventListener("mousedown", f, false)
        }, 500);
        document.getElementById("gameOverScreen").style.display = "block"
    };
    o.unload = function() {
        document.querySelector("#gameOverScreen .btnAward").removeEventListener("touchstart", u, false);
        document.querySelector("#gameOverScreen .btnAward").removeEventListener("mousedown", u, false);
        document.querySelector("#gameOverScreen .btnContinue").removeEventListener("touchstart", a, false);
        document.querySelector("#gameOverScreen .btnContinue").removeEventListener("mousedown", a, false);
        document.querySelector("#gameOverScreen .btnShare").removeEventListener("touchstart", f, false);
        document.querySelector("#gameOverScreen .btnShare").removeEventListener("mousedown", f, false);
        document.getElementById("gameOverScreen").style.display = "none"
    };
    game.useStatus(o)
}(window)