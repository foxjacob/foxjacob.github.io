var Main = {};
btGame.makePublisher(Main);
Main.width = 640;
Main.height = 1136;
Main.floorLine = 820;
Main.guideDistance = Main.width;
Main.debug = true;
Main.bjyFlag = false;
Main.minAngle = 5;
Main.maxAngle = 20;
Main.randomAngle = 2;
Main.fallingTime = 2500;
Main.speed = 1000;
Main.checkT = 0;
Main.visibleDistance = 250;
Main.maxScore = (window.localStorage && +localStorage["penguinMaxScore"]) || 0;
Main.gameTimes = (window.localStorage && +localStorage["gameTimes"]) || 0;
Main.nowScore = 0;
Main.remainCount = null;
Main.wordCount = null;
Main.fps = 40;
Main.user_balloon_id = 0;
Main.sendFlag = false;
Main.sendOverFlag = false;
Main.resultCode = 0;
Main.beginT = 0;
Main.gameT = 30 * 1000;
Main.rewardId = -1;
Main.eggArr = [];
Main.eggIndex = 0;
Main.eggMax = 8;
Main.firstFlag = true;
Main.checkTouch = false;
Main.RightWingRFlag = Main.rotationStep = 20;
var Resource; ~
function (b) {
    b.load = function () {
        if (b.queue != null) {
            return
        }
        b.queue = new createjs.LoadQueue(false);
        b.queue.addEventListener("progress",
		function (c) {
		    btGame.gameLoading(c.loaded)
		});
        b.queue.addEventListener("complete",
		function (c) {
		    Main.log("finish", c)
		});
        b.queue.addEventListener("error",
		function (c) {
		    btGame.gameLoading(0.1, c.text)
		});
        b.queue.loadFile("images/11.jpg");
        b.queue.loadFile("images/02.png");
        b.queue.loadFile("images/33.png");
        b.queue.loadFile("images/04.png");
        b.queue.loadFile("images/55.png");
        b.queue.loadFile("images/06.png");
        b.queue.loadFile("images/07.png");
        b.queue.loadFile("images/08.png");
        b.queue.loadFile("images/09.png");
        b.queue.loadFile("images/10.png");
        b.queue.loadFile("images/35.jpg");
        b.queue.loadFile("images/23.png");
        b.queue.loadFile("images/13.png");
        b.queue.loadFile("images/36.png");
        b.queue.loadFile("images/39.png");
        b.queue.loadFile("images/25.png");
        b.queue.loadFile("images/24.png");
        b.queue.loadFile("images/37.png");
        b.queue.loadFile("images/61.png");
        b.queue.loadFile("images/60.png");
        b.queue.loadFile("images/65.png")
    };
    b.get = function (c) {
        return b.queue.getResult(c)
    }
}(Resource || (Resource = {}));
Main.log = function () {
    Main.debug && console.log(arguments)
};
Main.startGame = function () {
    if (!Main.beginContainer) {
        Main.beginContainer = new createjs.Container()
    } else {
        Main.beginContainer.removeAllEventListeners();
        Main.beginContainer.removeAllChildren()
    }
    var d = Main.beginContainer;
    var h = new createjs.Bitmap(Resource.get("images/35.jpg"));
    d.addChild(h);
    var b = new createjs.Bitmap(Resource.get("images/06.png"));
    var c = b.getBounds();
    b.x = (Main.width - c.width) / 2;
    b.y = 370;
    b.cursor = "pointer";
    b.addEventListener("click",
	function () {
	    Main.getGameBeginMsg()
	});
    d.addChild(b);
    if (gamef.platType == PLAT_BJY || gamef.platType == PLAT_WX) {
        var f = new createjs.Bitmap(Resource.get("images/07.png"));
        f.x = b.x;
        f.y = b.y + 110;
        f.cursor = "pointer";
        f.addEventListener("click",
		function () {
		    torank()
		});
        d.addChild(f);
        var k = new createjs.Bitmap(Resource.get("images/09.png"));
        var c = k.getBounds();
        k.x = (Main.width - c.width) / 2;
        k.y = f.y + 110;
        k.cursor = "pointer";
        k.addEventListener("click",
		function () {
		    Main.showHongbao()
		});
        d.addChild(k)
    } else {
        var i = new createjs.Bitmap(Resource.get("images/61.png"));
        i.x = b.x;
        i.y = b.y + 110;
        i.cursor = "pointer";
        i.addEventListener("click",
		function () {
		    Main.showGonglue()
		});
        d.addChild(i);
        var g = new createjs.Bitmap(Resource.get("images/60.png"));
        var c = g.getBounds();
        g.x = (Main.width - c.width) / 2;
        g.y = i.y + 110;
        g.cursor = "pointer";
        g.addEventListener("click",
		function () {
		    downLoadZhangDa()
		});
        d.addChild(g)
    }
    Main.addShareBtn(d, 20, 590 + 200);
    var j = new createjs.Bitmap(Resource.get("images/37.png"));
    j.x = 98;
    j.y = 292;
    Main.remainCountBg = j;
    d.addChild(j);
    var m = new createjs.Text("", "20px Arial Black", "#FFffff");
    m.x = j.x + 60;
    m.y = j.y + 20;
    m.text = "你的剩余\n游戏次数还";
    m.textAlign = "center";
    d.addChild(m);
    Main.remainCountTipsTxt = m;
    var m = new createjs.Text("", "20px Arial Black", "#FFffff");
    m.x = j.x + 20;
    m.y = j.y + 70;
    m.text = "有9次";
    d.addChild(m);
    Main.remainCountTxt = m;
    var m = new createjs.Text("", "24px Arial Black", "#FFffff");
    m.x = 422;
    m.y = 610;
    m.text = "";
    m.textBaseline = "middle";
    m.textAlign = "center";
    d.addChild(m);
    Main.wordCountTxt = m;
    Main.stage.addChild(d);
    var e = 300;
    var l = 400;
    Main.showTimes()
};
Main.getSharePercent = function (b) {
    if (b > 270) {
        return 99.99
    } else {
        if (b > 260) {
            return 99.97
        } else {
            if (b > 250) {
                return 99.96
            } else {
                if (b > 240) {
                    return 99.95
                } else {
                    if (b > 230) {
                        return 99.94
                    } else {
                        if (b > 220) {
                            return 99.93
                        } else {
                            if (b > 210) {
                                return 99.91
                            } else {
                                if (b > 200) {
                                    return 99.8
                                } else {
                                    if (b > 190) {
                                        return 99.5
                                    } else {
                                        if (b > 180) {
                                            return 99.3
                                        } else {
                                            if (b > 170) {
                                                return 99
                                            } else {
                                                if (b > 160) {
                                                    return 98
                                                } else {
                                                    if (b > 150) {
                                                        return 97
                                                    } else {
                                                        if (b > 140) {
                                                            return 96
                                                        } else {
                                                            if (b > 130) {
                                                                return 95
                                                            } else {
                                                                if (b > 120) {
                                                                    return 90
                                                                } else {
                                                                    if (b > 110) {
                                                                        return 85
                                                                    } else {
                                                                        if (b > 100) {
                                                                            return 80
                                                                        } else {
                                                                            if (b > 90) {
                                                                                return 70
                                                                            } else {
                                                                                if (b > 80) {
                                                                                    return 50
                                                                                } else {
                                                                                    if (b > 60) {
                                                                                        return 40
                                                                                    } else {
                                                                                        if (b > 50) {
                                                                                            return 30
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return 0
};
Main.addShareBtn = function (c, e, d) {
    if (gamef.platType != PLAT_BJY && gamef.platType != PLAT_WX) {
        return
    }
    var g = new createjs.Bitmap(Resource.get("images/10.png"));
    g.setTransform(e, d);
    g.cursor = "pointer";
    g.addEventListener("click",
	function () {
	    Main.showGonglue()
	});
    //if (Main.firstFlag == true) {
    //    gamef.shareData.content = "我参加了掌上大学圣诞母鸡活动，快来帮我增加体力拿奖品吧!"
    //} else {
    //    gamef.shareData.content = "靠，我让圣诞母鸡生了" + Main.nowScore + "个蛋," + "Ta没体力了，快来帮我一下！"
    //}
    c.addChild(g);
    var f = 205;
    if (Main.bjyFlag == true) {
        var h = 1;
        var b = false;
        if (L.os == "ios") {
            b = L.versionCheck("1.9.4")
        } else {
            if (L.os == "android") {
                b = L.versionCheck("1.9.3")
            }
        }
        if (!b) {
            var i = new createjs.Bitmap(Resource.get("images/36.png"));
            i.setTransform(e + h * f, d);
            i.addEventListener("click",
			function () {
			    var l = gamef.shareData;
			    gamef.share()
			});
            c.addChild(i);
            h++;
            var k = new createjs.Bitmap(Resource.get("images/39.png"));
            k.setTransform(e + h * f, d);
            k.addEventListener("click",
			function () {
			    var l = gamef.shareData;
			    L.share(l.content, l.content, l.link, l.imgurl, 1)
			});
            c.addChild(k)
        } else {
            h = 2;
            var j = new createjs.Bitmap(Resource.get("images/39.png"));
            j.setTransform(e + h * f, d);
            j.addEventListener("click",
			function () {
			    var l = gamef.shareData;
			    gamef.share()
			});
            c.addChild(j)
        }
    }
    if (gamef.platType == PLAT_WX) {
        h = 2;
        var j = new createjs.Bitmap(Resource.get("images/39.png"));
        j.setTransform(e + h * f, d);
        j.addEventListener("click",
		function () {
		    var l = gamef.shareData;
		    gamef.share()
		});
        c.addChild(j)
    }
};
Main.showGonglue = function () {
    JQMethod.game_Strategy()
};
Main.clearGonglue = function () {
    if (Main.gonglueContainer) {
        Main.gonglueContainer.removeAllEventListeners();
        Main.gonglueContainer.removeAllChildren()
    }
};
Main.getGameBeginMsg = function () {
    if (Main.sendFlag == true) {
        return
    }
    Main.sendFlag = true;
    this.resultCode = -1;
    this.sendOverFlag = -1;
    this.countNum = 0;
    var b = null;
    if (gamef.platType == PLAT_BJY) {
        b = "webgame/start?type=" + gamef.gameid
    } else {
        if (gamef.platType == PLAT_WX) {
            b = WXDOMAIN + "wxgame/start?type=" + gamef.gameid + "&open_id=" + gamef.open_id
        }
    }
    gamef.start(b, "GET", this.getGameBeginBack)
};
Main.getGameBeginBack = function (g, d, e) {
    var f = Main;
    var c = e;
    if (typeof e === "string") {
        c = JSON.parse(e)
    }
    Main.sendFlag = false;
    this.resultCode = c.status;
    if (c.status == 0) {
        f.user_balloon_id = c.userBallonInfo.user_balloon_id;
        if (Main.firstFlag == true) {
            Main.beginShowMovie()
        } else {
            Main.repiyerMovie()
        }
    } else {
        if (c.status == 2014) {
            toast("次数用完");
            try {
                JQMethod.messageBox_show(8)
            } catch (b) { }
        } else {
            if (c.status == 2) {
                toast("游戏不存在")
            } else {
                if (c.status == 2017) {
                    toast("用户不存在")
                } else {
                    toast("无法连接到网络，请检查网络设置后再试")
                }
            }
        }
    }
};
Main.checkBJY = function () {
    if (gamef.platType == PLAT_BJY) {
        Main.bjyFlag = true
    } else {
        Main.bjyFlag = false
    }
};
Main.beginShowMovie = function () {
    createjs.Tween.get(Main.beginContainer, {
        loop: false
    }).to({
        alpha: 0
    },
	300).call(function () {
	    Main.initGame()
	})
};
Main.repiyerMovie = function () {
    createjs.Tween.get(Main.endContainer, {
        loop: false
    }).to({
        y: -Main.height,
        alpha: 0
    },
	500, createjs.Ease.quintInOut).call(function () {
	    Main.endContainer.alpha = 1;
	    Main.endContainer.removeAllEventListeners();
	    Main.endContainer.removeAllChildren();
	    Main.reset.replay()
	})
};
// ih5game.setShare({
//     desc: "圣诞快乐~还没收到圣诞礼物的就赶快来玩吧！~"
// });
Main.endGame = function (b) {
    if (!Main.endContainer) {
        Main.endContainer = new createjs.Container();
        Main.stage.addChild(Main.endContainer)
    } else {
        Main.endContainer.removeAllEventListeners();
        Main.endContainer.removeAllChildren()
    }
    Main.firstFlag = false;
    var d = Main.endContainer;
    d.alpha = !0;
    var e = new createjs.Shape;
    e.graphics.beginFill("rgb(225, 152, 37").drawRect(0, 0, Main.width, Main.height);
    e.alpha = 0.4;
    d.addChild(e);
    var p = new createjs.Bitmap(Resource.get("images/23.png"));
    var c = p.getBounds();
    d.addChild(p);
    p.x = (Main.width - c.width) / 2;
    p.y = 50;
    var m = 0;
    var g = 180;
    var f = 700;
    var l = new createjs.Bitmap(Resource.get("images/13.png"));
    var c = l.getBounds();
    l.x = (Main.width - c.width) / 2;
    l.y = 700;
    l.addEventListener("click",
	function (r) {
	    r.preventDefault();
	    r.stopPropagation();
	    Main.firstFlag = false;
	    Main.getGameBeginMsg()
	});
    d.addChild(l);
    m++;
    Main.addShareBtn(d, 20, Main.height - 80);
    if (gamef.platType == PLAT_BJY || gamef.platType == PLAT_WX) {
        var k = new createjs.Bitmap(Resource.get("images/08.png"));
        k.x = l.x;
        k.y = l.y + 110;
        k.cursor = "pointer";
        k.addEventListener("click",
		function () {
		    try {
		        JQMethod.messageBox_show(7)
		    } catch (r) { }
		});
        d.addChild(k);
        var o = new createjs.Bitmap(Resource.get("images/09.png"));
        var c = o.getBounds();
        o.x = (Main.width - c.width) / 2;
        o.y = k.y + 110;
        o.cursor = "pointer";
        o.addEventListener("click",
		function () {
		    Main.showHongbao()
		});
        d.addChild(o)
    } else {
        var i = new createjs.Bitmap(Resource.get("images/61.png"));
        i.x = l.x;
        i.y = l.y + 110;
        i.cursor = "pointer";
        i.addEventListener("click",
		function () {
		    Main.showGonglue()
		});
        d.addChild(i);
        var h = new createjs.Bitmap(Resource.get("images/60.png"));
        var c = h.getBounds();
        h.x = (Main.width - c.width) / 2;
        h.y = i.y + 110;
        h.cursor = "pointer";
        h.addEventListener("click",
		function () {
		    downLoadZhangDa()
		});
        d.addChild(h)
    }
    var j = new createjs.Bitmap(Resource.get("images/37.png"));
    j.x = 98;
    j.y = 620;
    Main.remainCountBg = j;
    d.addChild(j);
    var q = new createjs.Text("", "20px Arial Black", "#FFffff");
    q.x = j.x + 60;
    q.y = j.y + 20;
    q.text = "你的剩余\n游戏次数还";
    q.textAlign = "center";
    d.addChild(q);
    Main.remainCountTipsTxt = q;
    var q = new createjs.Text("", "20px Arial Black", "#FFffff");
    q.x = j.x + 20;
    q.y = j.y + 70;
    q.text = "有0次";
    d.addChild(q);
    Main.remainCountTxt = q;
    var q = new createjs.Text("", "24px Arial Black", "#FFffff");
    q.x = 422;
    q.y = 942;
    q.text = "";
    d.addChild(q);
    q.textBaseline = "middle";
    q.textAlign = "center";
    Main.wordCountTxt = q;
    Main.showTimes();
    d.y = -Main.height;
    createjs.Tween.get(d, {
        loop: false
    }).wait(100).to({
        y: 0,
        alpha: 1
    },
	500, createjs.Ease.quintInOut);
    if (Main.bjyFlag) {
        gameOverTzCheck(Main.nowScore)
    }
    var q = new createjs.Text("", " bold 30px Arial Black", "#000000");
    q.x = 100;
    q.y = 390;
    var n = "我家母鸡下了" + Main.nowScore + "个蛋，给你当圣诞\n礼物也是极好的！";
    d.addChild(q);

    // ih5game.setShare({
    //     desc: "我家母鸡下了" + Main.nowScore + "个蛋，超过了" + Main.getSharePercent(Main.nowScore) + "%的网友，给你当圣诞礼物也是极好的！"
    // });
    if (Main.nowScore < 40) {
        n += "\n不过弱爆了，全国的小伙伴都把\n你超越了！"
    } else {
        if (Main.nowScore < 280) {
            n += "\n挤蛋能力超过全国" + Main.getSharePercent(Main.nowScore) + "%的网友！"
        } else {
            n += "\n小伙你下蛋太多了，由于你手速过快，系统运算不出来认为是作弊了！"
        }
    }
    q.text = n
};
Main.showHongbao = function () {
    JQMethod.game_Prize();
    if (gamef.platType == PLAT_BJY) { }
};
Main.showTimes = function () {
    if (Main.remainCountTxt) {
        Main.remainCountTxt.text = "有" + Main.remainCount + "次"
    }
    var b = true;
    if (Main.remainCount == null) {
        b = false
    }
    if (Main.remainCountTipsTxt) {
        Main.remainCountTipsTxt.visible = b
    }
    if (Main.remainCountTxt) {
        Main.remainCountTxt.visible = b
    }
    if (Main.remainCountBg) {
        Main.remainCountBg.visible = b
    }
    b = true;
    if (Main.wordCount == null) {
        b = false
    }
    if (Main.wordCountTxt) {
        Main.wordCountTxt.text = Main.wordCount;
        Main.wordCountTxt.visible = b
    }
};
Main.loadTime = function () {
    if (gamef.platType == PLAT_BJY) {
        var b = "webgame/times";
        gamef.requestServerData(b, "GET", Main.loadTimeBack, "type=" + gamef.gameid)
    } else {
        if (gamef.platType == PLAT_WX) {
            var b = WXDOMAIN + "wxgame/times";
            gamef.requestServerData(b, "GET", Main.loadTimeBack, "type=" + gamef.gameid + "&open_id=" + gamef.open_id)
        } else {
            Main.remainCount = null;
            Main.wordCount = null
        }
    }
};
Main.loadTimeBack = function (e, c, d) {
    var b = d;
    if (typeof d === "string") {
        b = JSON.parse(d)
    }
    Main.sendFlag = false;
    this.resultCode = b.status;
    if (b.status == 0) {
        Main.remainCount = b.userBallonInfo.remainCount;
        Main.wordCount = b.userBallonInfo.wordCount;
        gamef.myKey = b.userBallonInfo.key;
        gamef.setLinkUrl();
        Main.showTimes()
    } else {
        toast("无法连接到网络，请检查网络设置后再试")
    }
};
Main.addTimes = function () {
    if (gamef.key != null) {
        if (gamef.platType == PLAT_BJY) {
            gamef.requestServerData("webgame/click", "GET", Main.addTimesBack, "key=" + gamef.key)
        } else {
            if (gamef.platType == PLAT_WX) { }
        }
    }
};
Main.addTimesBack = function (d, b, c) { };
Main.initStage = function () {
    if (!this.stage) {
        Main.stage = new createjs.Stage("canvas")
    }
    if (IS_TOUCH = createjs.Touch.isSupported()) {
        createjs.Touch.enable(Main.stage, !0);
        Main.stage.mouseEnabled = !1
    }
    Main.stage.removeAllEventListeners();
    Main.stage.removeAllChildren();
    Main.stage.removeAllChildren();
    Main.stage.removeAllEventListeners();
    Main.stage.width = canvas.width = Main.width;
    Main.stage.height = canvas.height = Main.height;
    Main.checkBJY();
    Main.addTimes();
    Main.loadTime();
    createjs.Ticker.addEventListener("tick", this.stage);
    Resource.load();
    Resource.queue.addEventListener("complete",
	function () {
	    Main.startGame()
	})
};
eventCD = false;
Main.eventHandler = {
    stageClick: function (b) {
        if (!eventCD) {
            eventCD = true;
            setTimeout(function () {
                eventCD = false
            },
			500)
        }
    }
};
Main.initGame = function () {
    if (Main.beginContainer) {
        Main.beginContainer.removeAllEventListeners();
        Main.beginContainer.removeAllChildren();
        Main.beginContainer = null
    }
    Main.clearGonglue();
    Main.gonglueContainer = null;
    Main.sendFlag = false;
    Main.remainCountTxt = null;
    Main.wordCountTxt = null;
    Main.initGame = function () { };
    var c = new createjs.Bitmap(Resource.get("images/11.jpg"));
    Main.stage.addChild(c);
    Main.initEvent(c);
    createjs.Ticker.addEventListener("tick",
	function (l) {
	    Main.isPlaying && (Main.checkT -= parseInt(l.delta), Main.checkT < 0 && (Main.checkT = 300, t = (new Date).getTime(), t > (Main.gameT + Main.beginT) && (Main.isPlaying = false, setTimeout(Main.sendGameResult, 50)), Main.reset.showTime(t)), Main.checkTouch && Main.wingMovie())
	});
    Main.initEggs();
    var h = new createjs.Bitmap(Resource.get("images/55.png"));
    var b = h.getBounds();
    h.x = (Main.width - h.getBounds().width) / 2;
    h.y = 500;
    Main.bear = h;
    this.stage.addChild(h);
    var g = new createjs.Bitmap(Resource.get("images/33.png"));
    b = g.getBounds();
    this.bearFight = g;
    g.x = (Main.width - h.getBounds().width) / 2;
    g.y = 420;
    Main.bearFight = g;
    this.stage.addChild(g);
    var k = new createjs.Bitmap(Resource.get("images/02.png"));
    b = k.getBounds();
    this.leftWing = k;
    k.regX = b.width / 2;
    k.regY = b.height * 0.8;
    k.rotation = -30;
    this.stage.addChild(k);
    var f = new createjs.Bitmap(Resource.get("images/02.png"));
    this.rightWing = f;
    f.regX = b.width / 2;
    f.regY = b.height * 0.8;
    f.rotation = 30;
    this.stage.addChild(f);
    var d = new createjs.Container();
    d.setBounds(0, 0, 238, 56);
    var j = new createjs.Text("", "32px Arial Black", "#FFffff");
    j.x = 210;
    j.y = 15;
    d.addChild(j);
    timetext = new createjs.Text("", "40px Arial Black", "#FFffff");
    timetext.x = 325;
    timetext.y = 50;
    d.addChild(timetext);
    this.timetext = timetext;
    this.scoreText = j;
    this.score = d;
    this.stage.addChild(d);
    this.reset.score();
    d = top = j = null;
    Main.reset.replay();
    if (Main.gameTimes == 0) {
        var i = new createjs.Bitmap(Resource.get("images/25.png"));
        i.y = 200;
        var b = i.getBounds();
        i.regX = b.width / 2;
        i.x = Main.width / 2;
        i.regY = 0;
        Main.stage.addChild(i);
        var e = new createjs.Bitmap(Resource.get("images/24.png"));
        e.x = i.x;
        e.y = 200;
        Main.stage.addChild(e);
        Main.arrow = i;
        Main.hand = e;
        Main.guildMovie()
    }
    JQMethod.bg_color_orange()
};
Main.guildMovie = function () {
    if (Main.arrow) {
        createjs.Tween.get(Main.arrow).to({
            y: Main.height,
            scaleX: 1.5,
            scaleY: 1.5
        },
		0).to({
		    alpha: 0.4,
		    y: 100,
		    scaleX: 1,
		    scaleY: 1
		},
		1500).wait(300).call(Main.guildMovie)
    }
    if (Main.hand) {
        createjs.Tween.get(Main.hand).to({
            y: Main.height
        },
		0).to({
		    y: -200
		},
		1700)
    }
};
Main.clearHandMovie = function () {
    if (Main.arrow) {
        createjs.Tween.removeTweens(Main.arrow);
        createjs.Tween.removeTweens(Main.hand);
        Main.stage.removeChild(Main.arrow);
        Main.stage.removeChild(Main.hand);
        Main.hand = null;
        Main.arrow = null;
        Main.gameTimes += 1;
        try {
            localStorage["gameTimes"] = Main.gameTimes
        } catch (b) { }
    }
};
Main.initEvent = function (e) {
    var d = 0,
	c = 0,
	b = 0;
    e.on("mousedown",
	function (f) {
	    Main.isPlaying && (d = f.localY)
	});
    e.on("pressmove",
	function (f) {
	    Main.isPlaying && Main.prepareFight()
	});
    e.on("pressup",
	function (f) {
	    Main.isPlaying && Main.showHenFight(100) && 50 < d - f.localY && (c = (new Date).getTime(), 50 + b < c && (Main.addSocre(1), Main.ShowEggFly(), Main.clearHandMovie()), b = c)
	})
};
Main.wingMovie = function () {
    rightWing = Main.rightWing,
	leftWing = Main.leftWing,
	rightWing.rotation += Main.RightWingRFlag;
    rightWing.rotation < 15 && (Main.RightWingRFlag = Main.rotationStep, rightWing.rotation = 15) || rightWing.rotation > 30 && (Main.RightWingRFlag = -Main.rotationStep, rightWing.rotation = 30);
    leftWing.rotation = rightWing.rotation * -1
};
Main.prepareFight = function () {
    if (Main.checkTouch == false) {
        Main.bear.visible = !1,
		Main.bearFight.visible = !0;
        var c = Main.rightWing;
        var b = Main.leftWing;
        c.y = b.y = 820,
		b.x = 140,
		Main.checkTouch = true
    }
};
Main.showHenFight = function (b) {
    createjs.Tween.removeTweens(Main.bearFight);
    createjs.Tween.get(Main.bearFight).wait(b).call(Main.resetHen);
    return true
};
Main.resetHen = function () {
    Main.bear.visible = !0;
    Main.bearFight.visible = !1;
    var c = Main.rightWing;
    var b = Main.leftWing;
    c.x = 490;
    b.x = 150;
    c.y = b.y = 870;
    c.rotation = b.rotation = 0;
    Main.checkTouch = false
};
Main.ShowEggFly = function () {
    a = Main.eggArr[Main.eggIndex];
    a.visible = !0;
    createjs.Tween.get(a).to({
        y: 100,
        scaleX: 0.4,
        scaleY: 0.4
    },
	300).to({
	    visible: !1,
	    y: 550,
	    scaleX: 1,
	    scaleY: 1
	},
	0);
    0 < Main.eggIndex ? Main.eggIndex-- : Main.eggIndex = Main.eggMax - 1
};
Main.initEggs = function () {
    for (var b = 0; b < Main.eggMax; b++) {
        var c = new createjs.Bitmap(Resource.get("images/04.png"));
        c.regX = 50;
        c.regY = 68;
        c.x = 315;
        c.y = 550;
        Main.eggArr[b] = c;
        Main.stage.addChild(c);
        c.visible = !1
    }
};
Main.addSocre = function (b) {
    Main.nowScore += b;
    Main.reset.score(Main.nowScore)
};
Main.penguinOffsetX = 325;
Main.reset = {
    replay: function () {
        this.score();
        Main.isPlaying = true;
        Main.isQuiver = false;
        Main.beginT = (new Date).getTime();
        Main.guideMoveLength = 0;
        Main.guideMoveIndex = 1;
        Main.nowScore = 0;
        this.showTime();
        Main.checkT = 200;
        Main.resetHen()
    },
    score: function (b) {
        var c = Main.scoreText;
        c.text = "得分:" + (b || 0)
    },
    showTime: function (d) {
        var b = d || (new Date).getTime();
        var c = Main.timetext;
        b = Math.ceil((Main.beginT + Main.gameT - b) / 1000);
        b > 0 ? c.text = b : c.text = 0
    }
};
Main.isPlaying = false;
Main.isQuiver = false;
Main.sendGameResult = function () {
    Main.log("---------sendGameResult");
    if (Main.sendOverFlag == true) {
        return
    }
    Main.sendOverFlag = 1;
    Main.resultCode = -1;
    Main.countNum += 1;
    Main.sendOverFlag = true;
    Main.resetHen();
    var c = new Object();
    c.score = Main.nowScore;
    c.maxScore = Main.maxScore;
    // ih5game.setShare({
    //     desc: "我家母鸡下了" + Main.nowScore + "个蛋，给你当圣诞礼物也是极好的！"
    // });
    c.error_count = 0;
    var b = null;
    if (gamef.platType == PLAT_BJY) {
        b = "webgame/" + Main.user_balloon_id + "/end"
    } else {
        if (gamef.platType == PLAT_WX) {
            b = WXDOMAIN + "wxgame/" + Main.user_balloon_id + "/end"
        }
    }
    gamef.end(b, "GET", Main.sendGameResultBack, c)
};
Main.sendGameResultBack = function (f, c, d) {
    var e = Main;
    var b = d;
    if (typeof d === "string") {
        b = JSON.parse(d)
    }
    e.sendOverFlag = false;
    e.resultCode = b.status;
    if (b.status == 0) {
        Main.nowScore = b.userBallonInfo.now_count;
        Main.maxScore = b.userBallonInfo.max_count;
        Main.remainCount = b.userBallonInfo.remainCount;
        Main.wordCount = b.userBallonInfo.wordCount;
        gamef.myKey = b.userBallonInfo.key;
        Main.rewardId = b.userBallonInfo.rewardId;
        gamef.setLinkUrl();
        setTimeout(function () {
            Main.endGame(Main.nowScore)
        },
		100)
    } else {
        if (b.status == 2) {
            toast("游戏不存在")
        } else {
            if (b.status == 2017) {
                toast("用户不存在")
            } else {
                toast("无法连接到网络，请检查网络设置后再试")
            }
        }
        setTimeout(function () {
            Main.endGame(Main.nowScore)
        },
		100)
    }
};
btGame.resizePlayArea($("#container"), Main.width, Main.height, "center", "center");