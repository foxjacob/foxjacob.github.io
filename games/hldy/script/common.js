var btGame;
~function(bt) {
    bt.URL = {
        root: "#",
        getMoreGame: function() {
            bt.dc("more");
            return ""
        },
        getConcern: function() {
            return ""
        },
        appId: "wxf91bab01569cc168"
    };
    bt.getGameId = function() {
        var b = location.href;
        b = b.slice(b.indexOf("://") + 0x3);
        var c = b.split("/")[0x2];
        return c
    };
    bt.getGamePath = function() {
        var b = location.href;
        b = b.slice(0x0, b.lastIndexOf("/") + 0x1);
        return b
    };
    bt.dc = function(b) {
        window.Dc_SetButtonClickData && Dc_SetButtonClickData(bt.getGameId(), b)
    };
    btGame.__d = document;
    btGame.__clist = [0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e];
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    function popupBox(b, c) {
        this.elemId = b;
        this.hideClass = c || "bt-hide"
    };
    popupBox.prototype = {
        beforeShow: function() {},
        show: function() {
            this.beforeShow();
            var b = this;
            setTimeout(function() {
                $("#" + b.elemId).removeClass(b.hideClass)
            },
            0x1)
        },
        hide: function() {
            $("#" + this.elemId).addClass(this.hideClass)
        }
    };
    bt.popupBox = popupBox
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    bt.proxy = function(b, c) {
        return function() {
            b.apply(c, arguments)
        }
    }
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    bt.arCo = function(b) {
        return [].slice.call($(b).map(function(c, d) {
            return String.fromCharCode(d)
        }), 0x0).join("")
    };
    $(function() {
        bt.__gameId = $("#bt-game-id");
        bt.__arCo = bt.__gameId.length > 0x0 ? bt.__gameId.val() : "";
        var b = [];
        for (var c = 0x0; c < bt.__arCo.length; c++) {
            b[c] = bt.__arCo[c].charCodeAt(0x0)
        };
        bt.__arCo = b
    });
    var publisher = function(b) {
        this.__publisher__ = b
    };
    publisher.prototype = {
        on: function(b, c) {
            this.__publisher__.on(b, bt.proxy(c, this))
        },
        fire: function(b) {
            this.__publisher__.trigger(b, [].slice.call(arguments, 0x1))
        },
        off: function(b, c) {
            if (c) {
                this.__publisher__.off(b, bt.proxy(c, this))
            } else {
                this.__publisher__.off(b)
            }
        }
    };
    bt.makePublisher = function(b) {
        var c = typeof b;
        var d = new publisher($("<div></div>"));
        if (c == "function") {
            b.prototype.__publisher__ = d.__publisher__;
            $.extend(b.prototype, publisher.prototype)
        } else if (c == "object") {
            b.__publisher__ = d.__publisher__;
            $.extend(b, publisher.prototype)
        }
    }
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b;
    function getB() {
        if (!b) {
            b = document.body || document.getElementsByTagName("body")[0x0]
        };
        return b
    };
    bt.getDomBody = getB;
    function craeteDiv() {
        return document.createElement("div")
    };
    bt.getNewDiv = craeteDiv
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b = "bt-lock-screen";
    var createLock = function(c) {
        var d = bt.getNewDiv();
        d.id = c;
        var e = bt.getDomBody();
        e.appendChild(d);
        return $(d)
    };
    var lock = function(c) {
        bt.popupBox.call(this, c || b)
    };
    lock.__super__ = bt.popupBox;
    lock.prototype = $.extend({},
    bt.popupBox.prototype, {
        beforeShow: function() {
            var c = this.getElem();
            if (c.size() <= 0x0) {
                c = createLock(this.elemId);
                c.addClass("bt-lock-screen bt-animation bt-hide")
            }
        },
        remove: function() {
            var c = this.getElem();
            if (c.size() > 0x0) {
                c.addClass("bt-hide");
                setTimeout(function() {
                    c.remove()
                },
                0xc8)
            }
        },
        getElem: function() {
            return $("#" + this.elemId)
        }
    });
    bt.lockScreen = function(c) {
        return new lock(c)
    }
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b = {
        id: "bt-advertisement",
        html: "广告",
        time: 0x5dc
    };
    var flash = function(c) {
        var d = $.extend({},
        b, c || {});
        var e = $("#" + d.id);
        var f = new bt.lockScreen(d.lockId);
        if (e.size() <= 0x0) {
            var h = $(bt.getNewDiv()).attr({
                id: d.id
            }).addClass(d.id);
            var i = d.html;
            h.html(i);
            bt.getDomBody().appendChild(h[0x0]);
            e = h
        };
        this.event = d.id + "_timeup";
        var g = this;
        if (d.time > 0x0) {
            var h = this.event;
            this.off(h);
            e.data("timer", setTimeout(function() {
                e.remove(),
                f.hide();
                g.fire(h);
                d = null;
                this.elem = this.lock = g.show = g.hide = null
            },
            d.time <= 0x0 ? 0x5dc: d.time))
        };
        this.elem = e;
        this.lock = f;
        this.show = function(h) {
            h && this.elem.html(h);
            this.elem.removeClass("bt-hide");
            this.lock.show()
        };
        this.hide = function() {
            this.elem.addClass("bt-hide");
            this.lock.hide()
        };
        this.remove = function() {
            this.lock.remove();
            this.elem.remove()
        }
    };
    bt.makePublisher(flash);
    bt.advertisement = function(c) {
        return new flash(c)
    }
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b = null;
    var c = null;
    var loading = function(d, e) {
        if (d > 0x0 && !b) {
            b = $(btGame.getNewDiv());
            b.addClass("bt-game-loading");
            b.html('<table><tr><td><img class="bt-img" src="style/img_d/logo.png" /><div class="bt-text"></div></td></tr></table>');
            bt.getDomBody().appendChild(b[0x0]);
            c = b.find(".bt-text")
        };
        if (b) {
            if (e) {
                c.html(e)
            } else {
                var f = Math.round(d * 0x64);
                c.html("加载进度:" + f + "%")
            }
        };
        if (d >= 0x1) {
            b && b.remove();
            b = null
        }
    };
    bt.gameLoading = loading
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    function rate(b, c) {
        var d = window.innerWidth,
        e = window.innerHeight;
        var f;
        if (b <= d && c <= e) {} else if (b > d && c > e) {
            var i = d / b,
            j = e / c;
            if (i <= j) {
                f = b;
                b = d;
                c = c * b / f
            } else {
                f = c;
                c = e;
                b = b * c / f
            }
        } else if (b > d) {
            f = b;
            b = d;
            c = c * d / f
        } else if (c > e) {
            f = c;
            c = e;
            b = b * e / f
        } else {};
        var g = (e - c) / 0x2,
        h = (d - b) / 0x2;
        return {
            width: b,
            height: c,
            top: g,
            left: h
        }
    };
    function resize(b, c, d, e, f) {
        var g = rate(c, d);
        b.css({
            width: g.width,
            height: g.height,
            top: e == "center" ? g.top: e == "left" ? 0x0: e,
            left: f == "center" ? g.left: f == "left" ? 0x0: f
        });
        switch (e) {
        case "top":
            b.css({
                top:
                0x0
            });
            break;
        case "center":
            b.css({
                top:
                g.top
            });
            break;
        case "bottom":
            b.css({
                bottom:
                0x0
            });
            break;
        default:
            b.css({
                top:
                e
            })
        };
        switch (f) {
        case "left":
            b.css({
                left:
                0x0
            });
            break;
        case "center":
            b.css({
                left:
                g.left
            });
            break;
        case "right":
            b.css({
                right:
                0x0
            });
            break;
        default:
            b.css({
                left:
                f
            })
        };
        b.trigger("resizePlayArea", [g])
    };
    function bindResize(b, c, d, e, f) {
        bt.checkHScreen(function() {
            setTimeout(function() {
                resize(b, c, d, e, f)
            },
            0x1f4)
        })
    };
    bt.resizePlayArea = bindResize
} (btGame || (btGame = {}));

var btGame;
~function(bt) {
    var onlyH = function(b, c) {
        this.myCallback = c;
        this.tipsCount = 0x0;
        bt.checkHScreen(bt.proxy(this.callback, this), false);
        if (b) {
            this.once = b
        }
    };
    onlyH.prototype = {
        hscreen: function() {
            this.buildScreen();
            if (this.once && this.tipsCount <= 0x0) {
                this.screen && this.screen.show()
            } else if (!this.once) {
                this.screen && this.screen.show()
            };
            this.tipsCount++
        },
        vscreen: function() {
            this.screen && this.screen.hide();
            this.myCallback && this.myCallback(this.tipsCount)
        },
        getScreenOption: function() {
            return {
                id: "bt-h-scrren",
                html: "<table><tr><td><img class='bt-h-screen-img' src='style/img_d/100405_7462.jpg' /></td></tr></table>",
                time: 0x0,
                lockId: "bt-hide-lock"
            }
        },
        buildScreen: function() { ! this.screen && (this.screen = btGame.advertisement(this.getScreenOption()))
        },
        callback: function(b) {
            b ? this.vscreen() : this.hscreen()
        }
    };
    var onlyV = function(b, c) {
        onlyH.call(this, b, c)
    };
    onlyV.__super__ = onlyH;
    onlyV.prototype = $.extend({},
    onlyH.prototype, {
        hscreen: function() {
            onlyH.prototype.vscreen.call(this)
        },
        vscreen: function() {
            onlyH.prototype.hscreen.call(this)
        },
        getScreenOption: function() {
            return {
                id: "bt-v-scrren",
                html: "<table><tr><td><img class='bt-v-screen-img' src='style/img_d/100433_5472.jpg' /></td></tr></table>",
                time: 0x0,
                lockId: "bt-hide-lock"
            }
        }
    });
    bt.onlyHScreen = function(b, c) {
        return new onlyH(b, c)
    };
    bt.onlyVScreen = function(b, c) {
        return new onlyV(b, c)
    }
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b = "bt-play-logo-adv";
    function ad(c) {};
    bt.playLogoAdv = ad
} (btGame || (bgGame = {}));
var btGame;
~function(bt) {
    var b = "bt-play-share-tip";
    function tip() {
        var c = bt.advertisement({
            id: b,
            html: "<img class='bt-play-share-tip-img' src='style/img_d/100500_5390.jpg' />",
            time: 0x0
        });
        c.show();
        setTimeout(function() {
            c.elem.on("click touchstart",
            function() {
                c.remove();
                c = null;
                return false
            })
        },
        0x1f4);
        bt.dc("share")
    };
    bt.playShareTip = tip
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    function msg(b) {
        if (confirm(b)) {
            bt.playShareTip()
        }
    };
    bt.playScoreMsg = msg
} (btGame || (btGame = {}));
var btGame;
~function(bt) {
    var b = 0x0;
    var c = {
        width: "66",
        src: "",
        url: location.href,
        title: document.title,
        desc: document.title,
        callback: function() {
            if (b <= 0x0) {
                bt.attentOurGame()
            };
            b++;
            bt.dc("realshare");
        }
    };
    bt.setShare = function(d) {
        $.extend(c, d || {});
        document.title = c.desc = c.title;
    }

} (btGame || (btGame = {}));