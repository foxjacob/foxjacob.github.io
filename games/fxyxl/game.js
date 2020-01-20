var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time",
        pilotLevel: ["pilot level",
            51, 195, 0.95, 0.98
        ],
        score: ["score", 51, 256, 0.95, 0.98],
        missions: ["missions", 51, 315, 0.95, 0.98],
        completed: ["completed", 51, 346, 0.95, 0.98],
        newLevel: ["new pilot level", 325, 224, 1.2, 1.3],
        comment: ["great flying!", 328, 50, 0.7, 0.8],
        awesome: ["awesome!", 182, 97, 0.5, 0.6],
        youfail: ["You FAILED!", 184, 97, 0.5, 0.6],
        logbook: ["pilot logbook", 320, 54, 1.3, 1.5],
        select: ["select airplane", 320, 54, 0.8, 0.9],
        selectMap: ["select map", 320, 54, 0.8, 0.9],
        notenough: ["need more stars", 320, 54, 0.8, 0.9],
        selected: ["selected", 320, 334, 0.8, 0.9],
        start: ["",
            320, 234, 0.4, 0.4
        ],
        selectedMap: ["selected", 320, 347, 0.8, 0.9],
        nextlevel: ["next pilot level at", 320, 347, 0.8, 0.9],
        maxLvl: ["You've reached the max level!", 320, 141, 1, 1.1],
        nextlevelNumber: ["9999", 320, 135, 1.1, 1.3],
        nextlevelMission: ["next pilot level at ", 320, 141, 0.8, 0.9],
        letsGo: ["Let's go!", 290, 279, 0.7, 0.8],
        gameOver: ["Aww~ You ran out of lives!", 120, 157, 0.9, 1],
        accomplish: ["Mission Accomplished!", 320, 157, 0.9, 1],
        complete: ["Mission Complete", 320, 399, 1, 1.1],
        gameover: ["Game Over", 320, 399, 1, 1.1],
        fail: ["Mission Failed",
            320, 399, 1, 1.1
        ],
        pc1: ["Click left or right to move the plane.", 51, 142, 0.6, 0.7],
        pc2: ["You can also use the arrow keys.", 51, 180, 0.6, 0.7],
        mobile1: ["Tap left or right to move the plane", 101, 160, 0.6, 0.7],
        ufo1: ["Avoid the UFOs!", 51, 143, 0.6, 0.7],
        ufo2: ["Stay alive as long as you can!", 51, 177, 0.9, 1],
        tree1: ["Avoid the trees, go green!", 158, 144, 0.7, 0.8],
        tree2: ["Survive for 60 seconds.", 158, 183, 0.7, 0.8],
        ship1: ["The hot air balloons are heading left!", 48, 142, 0.7, 0.8],
        ship2: ["Survive for 60 seconds.", 48, 180, 0.7,
            0.8
        ],
        balloon1: ["Avoid slow moving hot air balloons!", 68, 144, 0.7, 0.8],
        balloon2: ["Survive for 60 seconds.", 68, 183, 0.7, 0.8],
        ring1: ["The rings are guiding us on the right path,", 47, 142, 0.68, 0.78],
        ring2: ["Fly through $ of them!", 48, 180, 0.68, 0.78],
        oil1: ["Our pilot headquarters is out of fuel,", 44, 146, 0.7, 0.8],
        oil2: ["collect $ drops of fuel within 1 minute!", 44, 182, 0.7, 0.8],
        star1: ["Look at those shiny stars,", 126, 145, 0.7, 0.8],
        star2: ["Can you collect $ of them?", 126, 180, 0.7, 0.8],
        pause: ["PAUSED", 320, 135, 2,
            2.1
        ]
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d =
                c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : g <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : g <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }*/
};
var MobileAdInGameHeader = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : g <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                g <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }*/
};
var MobileAdInGameFooter = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : g <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                g <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }*/
};
var MobileAdInGameEnd = {/*
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : g <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : g <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }*/
};
(function(b, c) {
    function d(b, f, q) {
        if (q === c && 1 === b.nodeType)
            if (q = "data-" + f.replace(sc, "-$1").toLowerCase(), q = b.getAttribute(q), "string" == typeof q) {
                try {
                    q = "true" === q ? !0 : "false" === q ? !1 : "null" === q ? null : +q + "" === q ? +q : tc.test(q) ? e.parseJSON(q) : q
                } catch (C) {}
                e.data(b, f, q)
            } else q = c;
        return q
    }

    function g(b) {
        for (var f in b)
            if (!("data" === f && e.isEmptyObject(b[f])) && "toJSON" !== f) return !1;
        return !0
    }

    function j() {
        return !1
    }

    function n() {
        return !0
    }

    function y(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function r(b,
        f) {
        do b = b[f]; while (b && 1 !== b.nodeType);
        return b
    }

    function z(b, f, q) {
        f = f || 0;
        if (e.isFunction(f)) return e.grep(b, function(b, u) {
            return !!f.call(b, u, b) === q
        });
        if (f.nodeType) return e.grep(b, function(b) {
            return b === f === q
        });
        if ("string" == typeof f) {
            var c = e.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(f)) return e.filter(f, c, !q);
            f = e.filter(f, c)
        }
        return e.grep(b, function(b) {
            return 0 <= e.inArray(b, f) === q
        })
    }

    function A(b) {
        var f = wb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; f.length;) b.createElement(f.pop());
        return b
    }

    function B(b, f) {
        if (1 === f.nodeType && e.hasData(b)) {
            var q, c, d;
            c = e._data(b);
            var s = e._data(f, c),
                m = c.events;
            if (m)
                for (q in delete s.handle, s.events = {}, m) {
                    c = 0;
                    for (d = m[q].length; c < d; c++) e.event.add(f, q, m[q][c])
                }
            s.data && (s.data = e.extend({}, s.data))
        }
    }

    function l(b, f) {
        var q;
        1 === f.nodeType && (f.clearAttributes && f.clearAttributes(), f.mergeAttributes && f.mergeAttributes(b), q = f.nodeName.toLowerCase(), "object" === q ? (f.parentNode && (f.outerHTML = b.outerHTML), e.support.html5Clone && b.innerHTML && !e.trim(f.innerHTML) &&
            (f.innerHTML = b.innerHTML)) : "input" === q && xb.test(b.type) ? (f.defaultChecked = f.checked = b.checked, f.value !== b.value && (f.value = b.value)) : "option" === q ? f.selected = b.defaultSelected : "input" === q || "textarea" === q ? f.defaultValue = b.defaultValue : "script" === q && f.text !== b.text && (f.text = b.text), f.removeAttribute(e.expando))
    }

    function p(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function t(b) {
        xb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function x(b, f) {
        if (f in b) return f;
        for (var q = f.charAt(0).toUpperCase() + f.slice(1), c = f, e = yb.length; e--;)
            if (f = yb[e] + q, f in b) return f;
        return c
    }

    function L(b, f) {
        return b = f || b, "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b)
    }

    function H(b, f) {
        for (var q, c, d = [], s = 0, m = b.length; s < m; s++) q = b[s], q.style && (d[s] = e._data(q, "olddisplay"), f ? (!d[s] && "none" === q.style.display && (q.style.display = ""), "" === q.style.display && L(q) && (d[s] = e._data(q, "olddisplay", K(q.nodeName)))) : (c = R(q, "display"), !d[s] && "none" !==
            c && e._data(q, "olddisplay", c)));
        for (s = 0; s < m; s++)
            if (q = b[s], q.style && (!f || "none" === q.style.display || "" === q.style.display)) q.style.display = f ? d[s] || "" : "none";
        return b
    }

    function E(b, f, q) {
        return (b = vc.exec(f)) ? Math.max(0, b[1] - (q || 0)) + (b[2] || "px") : f
    }

    function N(b, f, q, c) {
        f = q === (c ? "border" : "content") ? 4 : "width" === f ? 1 : 0;
        for (var d = 0; 4 > f; f += 2) "margin" === q && (d += e.css(b, q + fa[f], !0)), c ? ("content" === q && (d -= parseFloat(R(b, "padding" + fa[f])) || 0), "margin" !== q && (d -= parseFloat(R(b, "border" + fa[f] + "Width")) || 0)) : (d += parseFloat(R(b,
            "padding" + fa[f])) || 0, "padding" !== q && (d += parseFloat(R(b, "border" + fa[f] + "Width")) || 0));
        return d
    }

    function F(b, f, q) {
        var c = "width" === f ? b.offsetWidth : b.offsetHeight,
            d = !0,
            s = e.support.boxSizing && "border-box" === e.css(b, "boxSizing");
        if (0 >= c || null == c) {
            c = R(b, f);
            if (0 > c || null == c) c = b.style[f];
            if (za.test(c)) return c;
            d = s && (e.support.boxSizingReliable || c === b.style[f]);
            c = parseFloat(c) || 0
        }
        return c + N(b, f, q || (s ? "border" : "content"), d) + "px"
    }

    function K(b) {
        if (Ya[b]) return Ya[b];
        var f = e("<" + b + ">").appendTo(D.body),
            c = f.css("display");
        f.remove();
        if ("none" === c || "" === c) {
            ma = D.body.appendChild(ma || e.extend(D.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!na || !ma.createElement) na = (ma.contentWindow || ma.contentDocument).document, na.write("<!doctype html><html><body>"), na.close();
            f = na.body.appendChild(na.createElement(b));
            c = R(f, "display");
            D.body.removeChild(ma)
        }
        return Ya[b] = c, c
    }

    function O(b, f, c, C) {
        var d;
        if (e.isArray(f)) e.each(f, function(f, e) {
            c || wc.test(b) ? C(b, e) : O(b + "[" + ("object" == typeof e ? f : "") + "]", e, c, C)
        });
        else if (!c &&
            "object" === e.type(f))
            for (d in f) O(b + "[" + d + "]", f[d], c, C);
        else C(b, f)
    }

    function Aa(b) {
        return function(f, c) {
            "string" != typeof f && (c = f, f = "*");
            var C, d, s = f.toLowerCase().split(ga),
                m = 0,
                l = s.length;
            if (e.isFunction(c))
                for (; m < l; m++) C = s[m], (d = /^\+/.test(C)) && (C = C.substr(1) || "*"), C = b[C] = b[C] || [], C[d ? "unshift" : "push"](c)
        }
    }

    function oa(b, f, q, e, d, s) {
        d = d || f.dataTypes[0];
        s = s || {};
        s[d] = !0;
        var m;
        d = b[d];
        for (var l = 0, g = d ? d.length : 0, j = b === Za; l < g && (j || !m); l++) m = d[l](f, q, e), "string" == typeof m && (!j || s[m] ? m = c : (f.dataTypes.unshift(m),
            m = oa(b, f, q, e, m, s)));
        return (j || !m) && !s["*"] && (m = oa(b, f, q, e, "*", s)), m
    }

    function ta(b, f) {
        var q, C, d = e.ajaxSettings.flatOptions || {};
        for (q in f) f[q] !== c && ((d[q] ? b : C || (C = {}))[q] = f[q]);
        C && e.extend(!0, b, C)
    }

    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (u) {}
    }

    function Ab() {
        return setTimeout(function() {
            Ba = c
        }, 0), Ba = e.now()
    }

    function Bb(b, f, c) {
        var C, d = 0,
            s = Ca.length,
            m = e.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                for (var f = Ba || Ab(), f = Math.max(0, g.startTime + g.duration - f), c = 1 - (f / g.duration || 0), q =
                    0, e = g.tweens.length; q < e; q++) g.tweens[q].run(c);
                return m.notifyWith(b, [g, c, f]), 1 > c && e ? f : (m.resolveWith(b, [g]), !1)
            },
            g = m.promise({
                elem: b,
                props: e.extend({}, f),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: f,
                originalOptions: c,
                startTime: Ba || Ab(),
                duration: c.duration,
                tweens: [],
                createTween: function(f, c) {
                    var q = e.Tween(b, g.opts, f, c, g.opts.specialEasing[f] || g.opts.easing);
                    return g.tweens.push(q), q
                },
                stop: function(f) {
                    for (var c = 0, q = f ? g.tweens.length : 0; c < q; c++) g.tweens[c].run(1);
                    return f ? m.resolveWith(b, [g, f]) : m.rejectWith(b, [g, f]), this
                }
            });
        f = g.props;
        c = g.opts.specialEasing;
        var j, p, t, r;
        for (C in f)
            if (j = e.camelCase(C), p = c[j], t = f[C], e.isArray(t) && (p = t[1], t = f[C] = t[0]), C !== j && (f[j] = t, delete f[C]), (r = e.cssHooks[j]) && "expand" in r)
                for (C in t = r.expand(t), delete f[j], t) C in f || (f[C] = t[C], c[C] = p);
            else c[j] = p;
        for (; d < s; d++)
            if (C = Ca[d].call(g, b, f, g.opts)) return C;
        var n = g;
        e.each(f, function(b, u) {
            for (var f = (ua[b] || []).concat(ua["*"]), c = 0, q = f.length; c < q && !f[c].call(n, b, u); c++);
        });
        return e.isFunction(g.opts.start) && g.opts.start.call(b,
            g), e.fx.timer(e.extend(l, {
            anim: g,
            queue: g.opts.queue,
            elem: b
        })), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function T(b, f, c, e, d) {
        return new T.prototype.init(b, f, c, e, d)
    }

    function Da(b, f) {
        var c, e = {
                height: b
            },
            d = 0;
        for (f = f ? 1 : 0; 4 > d; d += 2 - f) c = fa[d], e["margin" + c] = e["padding" + c] = b;
        return f && (e.opacity = e.width = b), e
    }

    function Cb(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Ea, D = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac =
        b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        aa = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, f) {
            return new e.fn.init(b, f, Db)
        },
        Fa = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        ga = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, f) {
            return (f + "").toUpperCase()
        },
        Ga = function() {
            D.addEventListener ? (D.removeEventListener("DOMContentLoaded", Ga, !1), e.ready()) : "complete" === D.readyState && (D.detachEvent("onreadystatechange", Ga), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, f, q) {
            var C, d;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? C = [null, b, null] : C = Fc.exec(b);
                if (C && (C[1] || !f)) {
                    if (C[1]) return f = f instanceof e ? f[0] : f, d = f && f.nodeType ? f.ownerDocument || f : D, b = e.parseHTML(C[1], d, !0), Gb.test(C[1]) && e.isPlainObject(f) && this.attr.call(b, f, !0), e.merge(this, b);
                    if ((f = D.getElementById(C[2])) && f.parentNode) {
                        if (f.id !== C[2]) return q.find(b);
                        this.length = 1;
                        this[0] = f
                    }
                    return this.context = D, this.selector = b, this
                }
                return !f || f.jquery ? (f || q).find(b) : this.constructor(f).find(b)
            }
            return e.isFunction(b) ? q.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b,
                this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return aa.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, f, c) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === f ? b.selector = this.selector + (this.selector ? " " : "") + c : f && (b.selector = this.selector + "." + f + "(" + c + ")"), b
        },
        each: function(b, f) {
            return e.each(this, b, f)
        },
        ready: function(b) {
            return e.ready.promise().done(b),
                this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this, function(f, c) {
                return b.call(f, c, f)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b,
            f, q, C, d, s, m = arguments[0] || {},
            l = 1,
            g = arguments.length,
            j = !1;
        "boolean" == typeof m && (j = m, m = arguments[1] || {}, l = 2);
        "object" != typeof m && !e.isFunction(m) && (m = {});
        for (g === l && (m = this, --l); l < g; l++)
            if (null != (b = arguments[l]))
                for (f in b) q = m[f], C = b[f], m !== C && (j && C && (e.isPlainObject(C) || (d = e.isArray(C))) ? (d ? (d = !1, s = q && e.isArray(q) ? q : []) : s = q && e.isPlainObject(q) ? q : {}, m[f] = e.extend(j, s, C)) : C !== c && (m[f] = C));
        return m
    };
    e.extend({
        noConflict: function(u) {
            return b.$ === e && (b.$ = Bc), u && b.jQuery === e && (b.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++ : e.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!D.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Ea.resolveWith(D, [e]), e.fn.trigger && e(D).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b)) return !1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (f) {
                return !1
            }
            for (var q in b);
            return q === c || $a.call(b, q)
        },
        isEmptyObject: function(b) {
            for (var f in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, f, c) {
            var d;
            return !b || "string" != typeof b ? null : ("boolean" ==
                typeof f && (c = f, f = 0), f = f || D, (d = Gb.exec(b)) ? [f.createElement(d[1])] : (d = e.buildFragment([b], f, c ? null : []), e.merge([], (d.cacheable ? e.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(u) {
            if (!u || "string" != typeof u) return null;
            u = e.trim(u);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(u);
            if (Gc.test(u.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + u))();
            e.error("Invalid JSON: " + u)
        },
        parseXML: function(u) {
            var f, q;
            if (!u || "string" != typeof u) return null;
            try {
                b.DOMParser ?
                    (q = new DOMParser, f = q.parseFromString(u, "text/xml")) : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(u))
            } catch (d) {
                f = c
            }
            return (!f || !f.documentElement || f.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + u), f
        },
        noop: function() {},
        globalEval: function(u) {
            u && Dc.test(u) && (b.execScript || function(u) {
                b.eval.call(b, u)
            })(u)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, f) {
            return b.nodeName && b.nodeName.toLowerCase() === f.toLowerCase()
        },
        each: function(b, f, q) {
            var d, v = 0,
                s = b.length,
                m = s === c || e.isFunction(b);
            if (q)
                if (m)
                    for (d in b) {
                        if (!1 === f.apply(b[d], q)) break
                    } else
                        for (; v < s && !1 !== f.apply(b[v++], q););
                else if (m)
                for (d in b) {
                    if (!1 === f.call(b[d], d, b[d])) break
                } else
                    for (; v < s && !1 !== f.call(b[v], v, b[v++]););
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, f) {
            var c, d = f || [];
            return null != b && (c = e.type(b), null == b.length || "string" === c || "function" ===
                c || "regexp" === c || e.isWindow(b) ? Eb.call(d, b) : e.merge(d, b)), d
        },
        inArray: function(b, f, c) {
            var e;
            if (f) {
                if (Fb) return Fb.call(f, b, c);
                e = f.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                    if (c in f && f[c] === b) return c
            }
            return -1
        },
        merge: function(b, f) {
            var q = f.length,
                e = b.length,
                d = 0;
            if ("number" == typeof q)
                for (; d < q; d++) b[e++] = f[d];
            else
                for (; f[d] !== c;) b[e++] = f[d++];
            return b.length = e, b
        },
        grep: function(b, f, c) {
            var e, d = [],
                s = 0,
                m = b.length;
            for (c = !!c; s < m; s++) e = !!f(b[s], s), c !== e && d.push(b[s]);
            return d
        },
        map: function(b, f, q) {
            var d,
                v, s = [],
                m = 0,
                l = b.length;
            if (b instanceof e || l !== c && "number" == typeof l && (0 < l && b[0] && b[l - 1] || 0 === l || e.isArray(b)))
                for (; m < l; m++) d = f(b[m], m, q), null != d && (s[s.length] = d);
            else
                for (v in b) d = f(b[v], v, q), null != d && (s[s.length] = d);
            return s.concat.apply([], s)
        },
        guid: 1,
        proxy: function(b, f) {
            var q, d, v;
            return "string" == typeof f && (q = b[f], f = b, b = q), e.isFunction(b) ? (d = aa.call(arguments, 2), v = function() {
                return b.apply(f, d.concat(aa.call(arguments)))
            }, v.guid = b.guid = b.guid || e.guid++, v) : c
        },
        access: function(b, f, q, d, v, s, m) {
            var l, g =
                null == q,
                j = 0,
                p = b.length;
            if (q && "object" == typeof q) {
                for (j in q) e.access(b, f, j, q[j], 1, s, d);
                v = 1
            } else if (d !== c) {
                l = m === c && e.isFunction(d);
                g && (l ? (l = f, f = function(b, u, f) {
                    return l.call(e(b), f)
                }) : (f.call(b, d), f = null));
                if (f)
                    for (; j < p; j++) f(b[j], q, l ? d.call(b[j], j, f(b[j], q)) : d, m);
                v = 1
            }
            return v ? b : g ? f.call(b) : p ? f(b[0], q) : s
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(u) {
        if (!Ea)
            if (Ea = e.Deferred(), "complete" === D.readyState) setTimeout(e.ready, 1);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded",
            Ga, !1), b.addEventListener("load", e.ready, !1);
        else {
            D.attachEvent("onreadystatechange", Ga);
            b.attachEvent("onload", e.ready);
            var f = !1;
            try {
                f = null == b.frameElement && D.documentElement
            } catch (c) {}
            f && f.doScroll && function v() {
                if (!e.isReady) {
                    try {
                        f.doScroll("left")
                    } catch (b) {
                        return setTimeout(v, 50)
                    }
                    e.ready()
                }
            }()
        }
        return Ea.promise(u)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, f) {
        Hb["[object " + f + "]"] = f.toLowerCase()
    });
    Db = e(D);
    var Ib = {};
    e.Callbacks = function(b) {
        var f;
        if ("string" ==
            typeof b) {
            if (!(f = Ib[b])) {
                f = b;
                var q = Ib[f] = {};
                f = (e.each(f.split(ga), function(b, u) {
                    q[u] = !0
                }), q)
            }
        } else f = e.extend({}, b);
        b = f;
        var d, v, s, m, l, g, j = [],
            p = !b.once && [],
            t = function(f) {
                d = b.memory && f;
                v = !0;
                g = m || 0;
                m = 0;
                l = j.length;
                for (s = !0; j && g < l; g++)
                    if (!1 === j[g].apply(f[0], f[1]) && b.stopOnFalse) {
                        d = !1;
                        break
                    }
                s = !1;
                j && (p ? p.length && t(p.shift()) : d ? j = [] : r.disable())
            },
            r = {
                add: function() {
                    if (j) {
                        var f = j.length;
                        (function xc(f) {
                            e.each(f, function(f, c) {
                                var q = e.type(c);
                                "function" === q && (!b.unique || !r.has(c)) ? j.push(c) : c && c.length && "string" !==
                                    q && xc(c)
                            })
                        })(arguments);
                        s ? l = j.length : d && (m = f, t(d))
                    }
                    return this
                },
                remove: function() {
                    return j && e.each(arguments, function(b, u) {
                        for (var f; - 1 < (f = e.inArray(u, j, f));) j.splice(f, 1), s && (f <= l && l--, f <= g && g--)
                    }), this
                },
                has: function(b) {
                    return -1 < e.inArray(b, j)
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = p = d = c, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return p = c, d || r.disable(), this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(b, u) {
                    return u = u || [], u = [b, u.slice ? u.slice() : u], j && (!v || p) &&
                        (s ? p.push(u) : t(u)), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return r
    };
    e.extend({
        Deferred: function(b) {
            var f = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return v.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(u) {
                            e.each(f, function(f,
                                c) {
                                var q = c[0],
                                    d = b[f];
                                v[c[1]](e.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && e.isFunction(b.promise) ? b.promise().done(u.resolve).fail(u.reject).progress(u.notify) : u[q + "With"](this === v ? u : this, [b])
                                } : u[q])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? e.extend(b, d) : d
                    }
                },
                v = {};
            return d.pipe = d.then, e.each(f, function(b, u) {
                var e = u[2],
                    l = u[3];
                d[u[1]] = e.add;
                l && e.add(function() {
                    c = l
                }, f[b ^ 1][2].disable, f[2][2].lock);
                v[u[0]] = e.fire;
                v[u[0] + "With"] = e.fireWith
            }), d.promise(v), b && b.call(v, v), v
        },
        when: function(b) {
            var f = 0,
                c = aa.call(arguments),
                d = c.length,
                v = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                s = 1 === v ? b : e.Deferred(),
                m = function(b, u, f) {
                    return function(c) {
                        u[b] = this;
                        f[b] = 1 < arguments.length ? aa.call(arguments) : c;
                        f === l ? s.notifyWith(u, f) : --v || s.resolveWith(u, f)
                    }
                },
                l, g, j;
            if (1 < d) {
                l = Array(d);
                g = Array(d);
                for (j = Array(d); f < d; f++) c[f] && e.isFunction(c[f].promise) ? c[f].promise().done(m(f, j, c)).fail(s.reject).progress(m(f, g, l)) : --v
            }
            return v || s.resolveWith(j, c), s.promise()
        }
    });
    var Nc = e,
        bb, Q, Ha, ha, Ia, Ja, U, ia, Ka, cb,
        va, Jb, M = D.createElement("div");
    M.setAttribute("className", "t");
    M.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ha = M.getElementsByTagName("*");
    ha = M.getElementsByTagName("a")[0];
    ha.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ha || !Ha.length) bb = {};
    else {
        Ia = D.createElement("select");
        Ja = Ia.appendChild(D.createElement("option"));
        U = M.getElementsByTagName("input")[0];
        Q = {
            leadingWhitespace: 3 === M.firstChild.nodeType,
            tbody: !M.getElementsByTagName("tbody").length,
            htmlSerialize: !!M.getElementsByTagName("link").length,
            style: /top/.test(ha.getAttribute("style")),
            hrefNormalized: "/a" === ha.getAttribute("href"),
            opacity: /^0.5/.test(ha.style.opacity),
            cssFloat: !!ha.style.cssFloat,
            checkOn: "on" === U.value,
            optSelected: Ja.selected,
            getSetAttribute: "t" !== M.className,
            enctype: !!D.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === D.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        U.checked = !0;
        Q.noCloneChecked = U.cloneNode(!0).checked;
        Ia.disabled = !0;
        Q.optDisabled = !Ja.disabled;
        try {
            delete M.test
        } catch (Pd) {
            Q.deleteExpando = !1
        }!M.addEventListener && M.attachEvent && M.fireEvent && (M.attachEvent("onclick", Jb = function() {
            Q.noCloneEvent = !1
        }), M.cloneNode(!0).fireEvent("onclick"), M.detachEvent("onclick", Jb));
        U = D.createElement("input");
        U.value = "t";
        U.setAttribute("type", "radio");
        Q.radioValue = "t" === U.value;
        U.setAttribute("checked",
            "checked");
        U.setAttribute("name", "t");
        M.appendChild(U);
        ia = D.createDocumentFragment();
        ia.appendChild(M.lastChild);
        Q.checkClone = ia.cloneNode(!0).cloneNode(!0).lastChild.checked;
        Q.appendChecked = U.checked;
        ia.removeChild(U);
        ia.appendChild(M);
        if (M.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ka = "on" + cb, (va = Ka in M) || (M.setAttribute(Ka, "return;"), va = "function" == typeof M[Ka]), Q[cb + "Bubbles"] = va;
        bb = (e(function() {
            var u, f, c, e, d = D.getElementsByTagName("body")[0];
            d && (u = D.createElement("div"), u.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", d.insertBefore(u, d.firstChild), f = D.createElement("div"), u.appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = f.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", va = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", Q.reliableHiddenOffsets = va && 0 === c[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                Q.boxSizing = 4 === f.offsetWidth, Q.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop, b.getComputedStyle && (Q.pixelPosition = "1%" !== (b.getComputedStyle(f, null) || {}).top, Q.boxSizingReliable = "4px" === (b.getComputedStyle(f, null) || {
                    width: "4px"
                }).width, e = D.createElement("div"), e.style.cssText = f.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", f.style.width = "1px", f.appendChild(e), Q.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)),
                "undefined" != typeof f.style.zoom && (f.innerHTML = "", f.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", Q.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.style.overflow = "visible", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", Q.shrinkWrapBlocks = 3 !== f.offsetWidth, u.style.zoom = 1), d.removeChild(u))
        }), ia.removeChild(M), Ha = ha = Ia = Ja = U = ia = M = null, Q)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !g(b)
        },
        data: function(b, f, q, d) {
            if (e.acceptData(b)) {
                var v, s, m = e.expando,
                    l = "string" == typeof f,
                    g = b.nodeType,
                    j = g ? e.cache : b,
                    p = g ? b[m] : b[m] && m;
                if (p && j[p] && (d || j[p].data) || !(l && q === c)) {
                    p || (g ? b[m] = p = e.deletedIds.pop() || e.guid++ : p = m);
                    j[p] || (j[p] = {},
                        g || (j[p].toJSON = e.noop));
                    if ("object" == typeof f || "function" == typeof f) d ? j[p] = e.extend(j[p], f) : j[p].data = e.extend(j[p].data, f);
                    return v = j[p], d || (v.data || (v.data = {}), v = v.data), q !== c && (v[e.camelCase(f)] = q), l ? (s = v[f], null == s && (s = v[e.camelCase(f)])) : s = v, s
                }
            }
        },
        removeData: function(b, f, c) {
            if (e.acceptData(b)) {
                var d, v, s, m = b.nodeType,
                    l = m ? e.cache : b,
                    j = m ? b[e.expando] : e.expando;
                if (l[j]) {
                    if (f && (d = c ? l[j] : l[j].data)) {
                        e.isArray(f) || (f in d ? f = [f] : (f = e.camelCase(f), f in d ? f = [f] : f = f.split(" ")));
                        v = 0;
                        for (s = f.length; v < s; v++) delete d[f[v]];
                        if (!(c ? g : e.isEmptyObject)(d)) return
                    }
                    if (c || !(delete l[j].data, !g(l[j]))) m ? e.cleanData([b], !0) : e.support.deleteExpando || l != l.window ? delete l[j] : l[j] = null
                }
            }
        },
        _data: function(b, f, c) {
            return e.data(b, f, c, !0)
        },
        acceptData: function(b) {
            var f = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !f || !0 !== f && b.getAttribute("classid") === f
        }
    });
    e.fn.extend({
        data: function(b, f) {
            var q, C, v, s, m, l = this[0],
                g = 0,
                j = null;
            if (b === c) {
                if (this.length && (j = e.data(l), 1 === l.nodeType && !e._data(l, "parsedAttrs"))) {
                    v = l.attributes;
                    for (m = v.length; g <
                        m; g++) s = v[g].name, s.indexOf("data-") || (s = e.camelCase(s.substring(5)), d(l, s, j[s]));
                    e._data(l, "parsedAttrs", !0)
                }
                return j
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (q = b.split(".", 2), q[1] = q[1] ? "." + q[1] : "", C = q[1] + "!", e.access(this, function(f) {
                if (f === c) return j = this.triggerHandler("getData" + C, [q[0]]), j === c && l && (j = e.data(l, b), j = d(l, b, j)), j === c && q[1] ? this.data(q[0]) : j;
                q[1] = f;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + C, q);
                    e.data(this, b, f);
                    c.triggerHandler("changeData" +
                        C, q)
                })
            }, null, f, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, f, c) {
            var d;
            if (b) return f = (f || "fx") + "queue", d = e._data(b, f), c && (!d || e.isArray(c) ? d = e._data(b, f, e.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(b, f) {
            f = f || "fx";
            var c = e.queue(b, f),
                d = c.length,
                v = c.shift(),
                s = e._queueHooks(b, f),
                m = function() {
                    e.dequeue(b, f)
                };
            "inprogress" === v && (v = c.shift(), d--);
            v && ("fx" === f && c.unshift("inprogress"), delete s.stop, v.call(b, m, s));
            !d && s && s.empty.fire()
        },
        _queueHooks: function(b, f) {
            var c = f + "queueHooks";
            return e._data(b, c) || e._data(b, c, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, f + "queue", !0);
                    e.removeData(b, c, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(b, f) {
            var q = 2;
            return "string" != typeof b && (f = b, b = "fx", q--), arguments.length < q ? e.queue(this[0], b) : f === c ? this : this.each(function() {
                var c = e.queue(this, b, f);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this,
                    b)
            })
        },
        delay: function(b, f) {
            return b = e.fx ? e.fx.speeds[b] || b : b, f = f || "fx", this.queue(f, function(f, c) {
                var e = setTimeout(f, b);
                c.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, f) {
            var q, d = 1,
                v = e.Deferred(),
                s = this,
                m = this.length,
                l = function() {
                    --d || v.resolveWith(s, [s])
                };
            "string" != typeof b && (f = b, b = c);
            for (b = b || "fx"; m--;)(q = e._data(s[m], b + "queueHooks")) && q.empty && (d++, q.empty.add(l));
            return l(), v.promise(f)
        }
    });
    var ca, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, f) {
            return e.access(this, e.attr, b, f, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, f) {
            return e.access(this, e.prop, b, f, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (f) {}
                })
        },
        addClass: function(b) {
            var f, c, d, v, s, m, l;
            if (e.isFunction(b)) return this.each(function(f) {
                e(this).addClass(b.call(this, f, this.className))
            });
            if (b && "string" == typeof b) {
                f = b.split(ga);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (v = this[c], 1 === v.nodeType)
                        if (!v.className && 1 === f.length) v.className = b;
                        else {
                            s = " " + v.className + " ";
                            m = 0;
                            for (l = f.length; m < l; m++) 0 > s.indexOf(" " + f[m] + " ") && (s += f[m] + " ");
                            v.className = e.trim(s)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var f,
                q, d, v, s, m, l;
            if (e.isFunction(b)) return this.each(function(f) {
                e(this).removeClass(b.call(this, f, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                f = (b || "").split(ga);
                m = 0;
                for (l = this.length; m < l; m++)
                    if (d = this[m], 1 === d.nodeType && d.className) {
                        q = (" " + d.className + " ").replace(Mb, " ");
                        v = 0;
                        for (s = f.length; v < s; v++)
                            for (; 0 <= q.indexOf(" " + f[v] + " ");) q = q.replace(" " + f[v] + " ", " ");
                        d.className = b ? e.trim(q) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, f) {
            var c = typeof b,
                d = "boolean" == typeof f;
            return e.isFunction(b) ? this.each(function(c) {
                e(this).toggleClass(b.call(this,
                    c, this.className, f), f)
            }) : this.each(function() {
                if ("string" === c)
                    for (var v, s = 0, m = e(this), l = f, g = b.split(ga); v = g[s++];) l = d ? l : !m.hasClass(v), m[l ? "addClass" : "removeClass"](v);
                else if ("undefined" === c || "boolean" === c) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var f = 0, c = this.length; f < c; f++)
                if (1 === this[f].nodeType && 0 <= (" " + this[f].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var f, q, d, v = this[0];
            if (arguments.length) return d = e.isFunction(b), this.each(function(q) {
                var m, v = e(this);
                if (1 === this.nodeType && (d ? m = b.call(this, q, v.val()) : m = b, null == m ? m = "" : "number" == typeof m ? m += "" : e.isArray(m) && (m = e.map(m, function(b) {
                    return null == b ? "" : b + ""
                })), f = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !f || !("set" in f) || f.set(this, m, "value") === c)) this.value = m
            });
            if (v) return f = e.valHooks[v.type] || e.valHooks[v.nodeName.toLowerCase()], f && "get" in f && (q = f.get(v,
                "value")) !== c ? q : (q = v.value, "string" == typeof q ? q.replace(Oc, "") : null == q ? "" : q)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var f = b.attributes.value;
                    return !f || f.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var f, c, d = b.selectedIndex,
                        v = [],
                        s = b.options,
                        m = "select-one" === b.type;
                    if (0 > d) return null;
                    b = m ? d : 0;
                    for (c = m ? d + 1 : s.length; b < c; b++)
                        if (f = s[b], f.selected && (e.support.optDisabled ? !f.disabled : null === f.getAttribute("disabled")) && (!f.parentNode.disabled || !e.nodeName(f.parentNode, "optgroup"))) {
                            f = e(f).val();
                            if (m) return f;
                            v.push(f)
                        }
                    return m && !v.length && s.length ? e(s[d]).val() : v
                },
                set: function(b, f) {
                    var c = e.makeArray(f);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), c)
                    }), c.length || (b.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(b, f, q, d) {
            var v, s, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) {
                if (d && e.isFunction(e.fn[f])) return e(b)[f](q);
                if ("undefined" == typeof b.getAttribute) return e.prop(b, f, q);
                (d = 1 !== m || !e.isXMLDoc(b)) && (f = f.toLowerCase(), s = e.attrHooks[f] || (Nb.test(f) ? Kb :
                    ca));
                if (q !== c) {
                    if (null === q) {
                        e.removeAttr(b, f);
                        return
                    }
                    return s && "set" in s && d && (v = s.set(b, q, f)) !== c ? v : (b.setAttribute(f, q + ""), q)
                }
                return s && "get" in s && d && null !== (v = s.get(b, f)) ? v : (v = b.getAttribute(f), null === v ? c : v)
            }
        },
        removeAttr: function(b, f) {
            var c, d, v, s, m = 0;
            if (f && 1 === b.nodeType)
                for (d = f.split(ga); m < d.length; m++)(v = d[m]) && (c = e.propFix[v] || v, s = Nb.test(v), s || e.attr(b, v, ""), b.removeAttribute(Ob ? v : c), s && c in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, f) {
                    if (Pc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === f && e.nodeName(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", f), c && (b.value = c), f
                    }
                }
            },
            value: {
                get: function(b, f) {
                    return ca && e.nodeName(b, "button") ? ca.get(b, f) : f in b ? b.value : null
                },
                set: function(b, f, c) {
                    if (ca && e.nodeName(b, "button")) return ca.set(b, f, c);
                    b.value = f
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, f, q) {
            var d, v, s, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) return s = 1 !== m || !e.isXMLDoc(b), s && (f = e.propFix[f] || f, v = e.propHooks[f]), q !== c ? v && "set" in v && (d = v.set(b, q, f)) !== c ? d : b[f] = q : v && "get" in v && null !== (d = v.get(b, f)) ? d : b[f]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var f = b.getAttributeNode("tabindex");
                    return f && f.specified ? parseInt(f.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b,
            f) {
            var q, d = e.prop(b, f);
            return !0 === d || "boolean" != typeof d && (q = b.getAttributeNode(f)) && !1 !== q.nodeValue ? f.toLowerCase() : c
        },
        set: function(b, f, c) {
            var d;
            return !1 === f ? e.removeAttr(b, c) : (d = e.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase())), c
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ca = e.valHooks.button = {
        get: function(b, f) {
            var e;
            return e = b.getAttributeNode(f), e && (Lb[f] ? "" !== e.value : e.specified) ? e.value : c
        },
        set: function(b, f, c) {
            var e = b.getAttributeNode(c);
            return e || (e = D.createAttribute(c), b.setAttributeNode(e)),
                e.value = f + ""
        }
    }, e.each(["width", "height"], function(b, f) {
        e.attrHooks[f] = e.extend(e.attrHooks[f], {
            set: function(b, u) {
                if ("" === u) return b.setAttribute(f, "auto"), u
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ca.get,
        set: function(b, f, c) {
            "" === f && (f = "false");
            ca.set(b, f, c)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, f) {
        e.attrHooks[f] = e.extend(e.attrHooks[f], {
            get: function(b) {
                b = b.getAttribute(f, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, f) {
            return b.style.cssText = f + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, f) {
                if (e.isArray(f)) return b.checked = 0 <= e.inArray(e(b).val(), f)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function(b, f, d, C, v) {
            var s, m, l, g, j, p, t, r, n;
            if (!(3 === b.nodeType || 8 === b.nodeType || !f || !d || !(s = e._data(b)))) {
                d.handler && (t = d, d = t.handler, v = t.selector);
                d.guid || (d.guid = e.guid++);
                (l = s.events) || (s.events = l = {});
                (m = s.handle) || (s.handle = m = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(m.elem, arguments) : c
                }, m.elem = b);
                f = e.trim(Rb(f)).split(" ");
                for (s = 0; s < f.length; s++) {
                    g = Pb.exec(f[s]) || [];
                    j = g[1];
                    p = (g[2] || "").split(".").sort();
                    n = e.event.special[j] || {};
                    j = (v ? n.delegateType : n.bindType) || j;
                    n = e.event.special[j] || {};
                    g = e.extend({
                        type: j,
                        origType: g[1],
                        data: C,
                        handler: d,
                        guid: d.guid,
                        selector: v,
                        needsContext: v && e.expr.match.needsContext.test(v),
                        namespace: p.join(".")
                    }, t);
                    r = l[j];
                    if (!r && (r = l[j] = [], r.delegateCount = 0, !n.setup || !1 === n.setup.call(b, C, p, m))) b.addEventListener ? b.addEventListener(j, m, !1) : b.attachEvent && b.attachEvent("on" + j, m);
                    n.add && (n.add.call(b, g), g.handler.guid || (g.handler.guid = d.guid));
                    v ? r.splice(r.delegateCount++, 0, g) : r.push(g);
                    e.event.global[j] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, f, c, d, v) {
            var s, m, l, g, j, p, t, r, n, z, x = e.hasData(b) && e._data(b);
            if (x && (t = x.events)) {
                f = e.trim(Rb(f || "")).split(" ");
                for (s = 0; s < f.length; s++)
                    if (m = Pb.exec(f[s]) || [], l = g = m[1], m = m[2], l) {
                        r = e.event.special[l] || {};
                        l = (d ? r.delegateType : r.bindType) || l;
                        n = t[l] || [];
                        j = n.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (p = 0; p < n.length; p++) z = n[p], (v || g === z.origType) && (!c || c.guid === z.guid) && (!m || m.test(z.namespace)) && (!d || d === z.selector || "**" === d && z.selector) && (n.splice(p--, 1), z.selector && n.delegateCount--, r.remove && r.remove.call(b, z));
                        0 === n.length && j !== n.length && ((!r.teardown || !1 === r.teardown.call(b, m, x.handle)) && e.removeEvent(b,
                            l, x.handle), delete t[l])
                    } else
                        for (l in t) e.event.remove(b, l + f[s], c, d, !0);
                e.isEmptyObject(t) && (delete x.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(u, f, d, C) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var v, l, m, g, j, p, t, r = u.type || u;
                g = [];
                if (!Qb.test(r + e.event.triggered) && (0 <= r.indexOf("!") && (r = r.slice(0, -1), v = !0), 0 <= r.indexOf(".") && (g = r.split("."), r = g.shift(), g.sort()), d && !e.event.customEvent[r] || e.event.global[r]))
                    if (u = "object" == typeof u ? u[e.expando] ?
                        u : new e.Event(r, u) : new e.Event(r), u.type = r, u.isTrigger = !0, u.exclusive = v, u.namespace = g.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > r.indexOf(":") ? "on" + r : "", d) {
                        if (u.result = c, u.target || (u.target = d), f = null != f ? e.makeArray(f) : [], f.unshift(u), j = e.event.special[r] || {}, !(j.trigger && !1 === j.trigger.apply(d, f))) {
                            t = [
                                [d, j.bindType || r]
                            ];
                            if (!C && !j.noBubble && !e.isWindow(d)) {
                                l = j.delegateType || r;
                                v = Qb.test(l + r) ? d : d.parentNode;
                                for (m = d; v; v = v.parentNode) t.push([v, l]),
                                    m = v;
                                m === (d.ownerDocument || D) && t.push([m.defaultView || m.parentWindow || b, l])
                            }
                            for (l = 0; l < t.length && !u.isPropagationStopped(); l++) v = t[l][0], u.type = t[l][1], (p = (e._data(v, "events") || {})[u.type] && e._data(v, "handle")) && p.apply(v, f), (p = g && v[g]) && e.acceptData(v) && p.apply && !1 === p.apply(v, f) && u.preventDefault();
                            return u.type = r, !C && !u.isDefaultPrevented() && (!j._default || !1 === j._default.apply(d.ownerDocument, f)) && ("click" !== r || !e.nodeName(d, "a")) && e.acceptData(d) && g && d[r] && ("focus" !== r && "blur" !== r || 0 !== u.target.offsetWidth) &&
                                !e.isWindow(d) && (m = d[g], m && (d[g] = null), e.event.triggered = r, d[r](), e.event.triggered = c, m && (d[g] = m)), u.result
                        }
                    } else
                        for (l in d = e.cache, d) d[l].events && d[l].events[r] && e.event.trigger(u, f, d[l].handle.elem, !0)
            }
        },
        dispatch: function(u) {
            u = e.event.fix(u || b.event);
            var f, d, C, l, s, m, g = (e._data(this, "events") || {})[u.type] || [],
                j = g.delegateCount,
                p = aa.call(arguments),
                r = !u.exclusive && !u.namespace,
                t = e.event.special[u.type] || {},
                n = [];
            p[0] = u;
            u.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, u))) {
                if (j &&
                    (!u.button || "click" !== u.type))
                    for (d = u.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== u.type) {
                            l = {};
                            s = [];
                            for (f = 0; f < j; f++) C = g[f], m = C.selector, l[m] === c && (l[m] = C.needsContext ? 0 <= e(m, this).index(d) : e.find(m, this, null, [d]).length), l[m] && s.push(C);
                            s.length && n.push({
                                elem: d,
                                matches: s
                            })
                        }
                g.length > j && n.push({
                    elem: this,
                    matches: g.slice(j)
                });
                for (f = 0; f < n.length && !u.isPropagationStopped(); f++) {
                    l = n[f];
                    u.currentTarget = l.elem;
                    for (d = 0; d < l.matches.length && !u.isImmediatePropagationStopped(); d++)
                        if (C = l.matches[d],
                            r || !u.namespace && !C.namespace || u.namespace_re && u.namespace_re.test(C.namespace)) u.data = C.data, u.handleObj = C, C = ((e.event.special[C.origType] || {}).handle || C.handler).apply(l.elem, p), C !== c && (u.result = C, !1 === C && (u.preventDefault(), u.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, u), u.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, f) {
                return null == b.which && (b.which = null != f.charCode ? f.charCode : f.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, f) {
                var d, e, l, s = f.button,
                    m = f.fromElement;
                return null == b.pageX && null != f.clientX && (d = b.target.ownerDocument || D, e = d.documentElement, l = d.body, b.pageX = f.clientX + (e && e.scrollLeft || l && l.scrollLeft || 0) - (e && e.clientLeft ||
                    l && l.clientLeft || 0), b.pageY = f.clientY + (e && e.scrollTop || l && l.scrollTop || 0) - (e && e.clientTop || l && l.clientTop || 0)), !b.relatedTarget && m && (b.relatedTarget = m === b.target ? f.toElement : m), !b.which && s !== c && (b.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var f, c, d = b,
                l = e.event.fixHooks[b.type] || {},
                s = l.props ? this.props.concat(l.props) : this.props;
            b = e.Event(d);
            for (f = s.length; f;) c = s[--f], b[c] = d[c];
            return b.target || (b.target = d.srcElement || D), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, l.filter ? l.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, f, c) {
                    e.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(b, f) {
                    this.onbeforeunload === f && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, f, c, d) {
            b = e.extend(new e.Event, c, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, f) : e.event.dispatch.call(f, b);
            b.isDefaultPrevented() && c.preventDefault()
        }
    };
    e.event.handle =
        e.event.dispatch;
    e.removeEvent = D.removeEventListener ? function(b, f, c) {
        b.removeEventListener && b.removeEventListener(f, c, !1)
    } : function(b, f, c) {
        f = "on" + f;
        b.detachEvent && ("undefined" == typeof b[f] && (b[f] = null), b.detachEvent(f, c))
    };
    e.Event = function(b, f) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? n : j) : this.type = b, f && e.extend(this, f), this.timeStamp = b && b.timeStamp || e.now(),
            this[e.expando] = !0;
        else return new e.Event(b, f)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = n;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = n;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = n;
            this.stopPropagation()
        },
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, f) {
        e.event.special[b] = {
            delegateType: f,
            bindType: f,
            handle: function(b) {
                var c, u = b.relatedTarget,
                    d = b.handleObj;
                if (!u || u !== this && !e.contains(this, u)) b.type = d.origType, c = d.handler.apply(this, arguments), b.type = f;
                return c
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ?
                    b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) e.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), e.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var f = b.target;
            if (this !== f || b.isSimulated || b.isTrigger || "radio" !== f.type && "checkbox" !== f.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, f) {
        var c = 0,
            d = function(b) {
                e.event.simulate(f, b.target, e.event.fix(b), !0)
            };
        e.event.special[f] = {
            setup: function() {
                0 === c++ && D.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --c && D.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, f, d, l, v) {
            var s, m;
            if ("object" == typeof b) {
                "string" != typeof f && (d = d || f, f = c);
                for (m in b) this.on(m, f, d, b[m], v);
                return this
            }
            null == d && null == l ? (l = f, d = f = c) : null == l && ("string" == typeof f ? (l = d, d = c) : (l = d, d = f, f = c));
            if (!1 === l) l = j;
            else if (!l) return this;
            return 1 === v && (s = l, l = function(b) {
                return e().off(b), s.apply(this, arguments)
            }, l.guid = s.guid || (s.guid = e.guid++)), this.each(function() {
                e.event.add(this,
                    b, l, d, f)
            })
        },
        one: function(b, f, c, d) {
            return this.on(b, f, c, d, 1)
        },
        off: function(b, f, d) {
            var l, v;
            if (b && b.preventDefault && b.handleObj) return l = b.handleObj, e(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
            if ("object" == typeof b) {
                for (v in b) this.off(v, f, b[v]);
                return this
            }
            if (!1 === f || "function" == typeof f) d = f, f = c;
            return !1 === d && (d = j), this.each(function() {
                e.event.remove(this, b, d, f)
            })
        },
        bind: function(b, f, c) {
            return this.on(b, null, f, c)
        },
        unbind: function(b, f) {
            return this.off(b,
                null, f)
        },
        live: function(b, f, c) {
            return e(this.context).on(b, this.selector, f, c), this
        },
        die: function(b, f) {
            return e(this.context).off(b, this.selector || "**", f), this
        },
        delegate: function(b, f, c, d) {
            return this.on(f, b, c, d)
        },
        undelegate: function(b, f, c) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(f, b || "**", c)
        },
        trigger: function(b, f) {
            return this.each(function() {
                e.event.trigger(b, f, this)
            })
        },
        triggerHandler: function(b, f) {
            if (this[0]) return e.event.trigger(b, f, this[0], !0)
        },
        toggle: function(b) {
            var f = arguments,
                c =
                b.guid || e.guid++,
                d = 0,
                l = function(c) {
                    var q = (e._data(this, "lastToggle" + b.guid) || 0) % d;
                    return e._data(this, "lastToggle" + b.guid, q + 1), c.preventDefault(), f[q].apply(this, arguments) || !1
                };
            for (l.guid = c; d < f.length;) f[d++].guid = c;
            return this.click(l)
        },
        hover: function(b, f) {
            return this.mouseenter(b).mouseleave(f || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, f) {
            e.fn[f] = function(b, c) {
                return null == c && (c = b, b = null), 0 < arguments.length ? this.on(f, null, b, c) : this.trigger(f)
            };
            Tc.test(f) && (e.event.fixHooks[f] = e.event.keyHooks);
            Uc.test(f) && (e.event.fixHooks[f] = e.event.mouseHooks)
        });
    var Vc = b,
        I = function(b, f, c, d) {
            c = c || [];
            f = f || X;
            var e, l, m, g, j = f.nodeType;
            if (!b || "string" != typeof b) return c;
            if (1 !== j && 9 !== j) return [];
            m = La(f);
            if (!m && !d && (e = Wc.exec(b)))
                if (g = e[1])
                    if (9 === j) {
                        l = f.getElementById(g);
                        if (!l || !l.parentNode) return c;
                        if (l.id === g) return c.push(l), c
                    } else {
                        if (f.ownerDocument &&
                            (l = f.ownerDocument.getElementById(g)) && Sb(f, l) && l.id === g) return c.push(l), c
                    } else {
                if (e[2]) return pa.apply(c, qa.call(f.getElementsByTagName(b), 0)), c;
                if ((g = e[3]) && Tb && f.getElementsByClassName) return pa.apply(c, qa.call(f.getElementsByClassName(g), 0)), c
            }
            return eb(b.replace(Ma, "$1"), f, c, d, m)
        },
        wa = function(b) {
            return function(f) {
                return "input" === f.nodeName.toLowerCase() && f.type === b
            }
        },
        Ub = function(b) {
            return function(f) {
                var c = f.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && f.type === b
            }
        },
        ja = function(b) {
            return Y(function(f) {
                return f = +f, Y(function(c, d) {
                    for (var e, l = b([], c.length, f), m = l.length; m--;) c[e = l[m]] && (c[e] = !(d[e] = c[e]))
                })
            })
        },
        Na = function(b, f, c) {
            if (b === f) return c;
            for (b = b.nextSibling; b;) {
                if (b === f) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Pa = function(b, f) {
            var c, d, e, l, m, g, j;
            if (m = Vb[P][b]) return f ? 0 : m.slice(0);
            m = b;
            g = [];
            for (j = G.preFilter; m;) {
                if (!c || (d = Xc.exec(m))) d && (m = m.slice(d[0].length)), g.push(e = []);
                c = !1;
                if (d = Yc.exec(m)) e.push(c = new Wb(d.shift())), m = m.slice(c.length), c.type = d[0].replace(Ma, " ");
                for (l in G.filter)(d = Oa[l].exec(m)) &&
                    (!j[l] || (d = j[l](d, X, !0))) && (e.push(c = new Wb(d.shift())), m = m.slice(c.length), c.type = l, c.matches = d);
                if (!c) break
            }
            return f ? m.length : m ? I.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, f, c) {
            var d = f.dir,
                e = c && "parentNode" === f.dir,
                l = Zc++;
            return f.first ? function(f, c, q) {
                for (; f = f[d];)
                    if (e || 1 === f.nodeType) return b(f, c, q)
            } : function(f, c, q) {
                if (q)
                    for (; f = f[d];) {
                        if ((e || 1 === f.nodeType) && b(f, c, q)) return f
                    } else
                        for (var g, j = xa + " " + l + " ", p = j + fb; f = f[d];)
                            if (e || 1 === f.nodeType) {
                                if ((g = f[P]) === p) return f.sizset;
                                if ("string" == typeof g &&
                                    0 === g.indexOf(j)) {
                                    if (f.sizset) return f
                                } else {
                                    f[P] = p;
                                    if (b(f, c, q)) return f.sizset = !0, f;
                                    f.sizset = !1
                                }
                            }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(f, c, d) {
                for (var e = b.length; e--;)
                    if (!b[e](f, c, d)) return !1;
                return !0
            } : b[0]
        },
        Qa = function(b, f, c, d, e) {
            for (var l, m = [], g = 0, j = b.length, p = null != f; g < j; g++)
                if (l = b[g])
                    if (!c || c(l, d, e)) m.push(l), p && f.push(g);
            return m
        },
        ib = function(b, f, c, d, e, l) {
            return d && !d[P] && (d = ib(d)), e && !e[P] && (e = ib(e, l)), Y(function(l, g, s, j) {
                if (!l || !e) {
                    var p, t, r = [],
                        n = [],
                        z = g.length;
                    if (!(t = l)) {
                        t = f || "*";
                        var x =
                            s.nodeType ? [s] : s,
                            A = [];
                        p = 0;
                        for (var B = x.length; p < B; p++) I(t, x[p], A, l);
                        t = A
                    }
                    x = b && (l || !f) ? Qa(t, r, b, s, j) : t;
                    A = c ? e || (l ? b : z || d) ? [] : g : x;
                    c && c(x, A, s, j);
                    if (d) {
                        t = Qa(A, n);
                        d(t, [], s, j);
                        for (s = t.length; s--;)
                            if (p = t[s]) A[n[s]] = !(x[n[s]] = p)
                    }
                    if (l)
                        for (s = b && A.length; s--;) {
                            if (p = A[s]) l[r[s]] = !(g[r[s]] = p)
                        } else A = Qa(A === g ? A.splice(z, A.length) : A), e ? e(null, g, A, j) : pa.apply(g, A)
                }
            })
        },
        jb = function(b) {
            var f, c, d, e = b.length,
                l = G.relative[b[0].type];
            c = l || G.relative[" "];
            for (var m = l ? 1 : 0, g = gb(function(b) {
                return b === f
            }, c, !0), j = gb(function(b) {
                return -1 <
                    Xb.call(f, b)
            }, c, !0), p = [
                function(b, c, u) {
                    return !l && (u || c !== Ra) || ((f = c).nodeType ? g(b, c, u) : j(b, c, u))
                }
            ]; m < e; m++)
                if (c = G.relative[b[m].type]) p = [gb(hb(p), c)];
                else {
                    c = G.filter[b[m].type].apply(null, b[m].matches);
                    if (c[P]) {
                        for (d = ++m; d < e && !G.relative[b[d].type]; d++);
                        return ib(1 < m && hb(p), 1 < m && b.slice(0, m - 1).join("").replace(Ma, "$1"), c, m < d && jb(b.slice(m, d)), d < e && jb(b = b.slice(d)), d < e && b.join(""))
                    }
                    p.push(c)
                }
            return hb(p)
        },
        eb = function(b, f, c, d, e) {
            var l, m, g, j, p = Pa(b);
            if (!d && 1 === p.length) {
                m = p[0] = p[0].slice(0);
                if (2 < m.length &&
                    "ID" === (g = m[0]).type && 9 === f.nodeType && !e && G.relative[m[1].type]) {
                    f = G.find.ID(g.matches[0].replace(ka, ""), f, e)[0];
                    if (!f) return c;
                    b = b.slice(m.shift().length)
                }
                for (l = Oa.POS.test(b) ? -1 : m.length - 1; 0 <= l; l--) {
                    g = m[l];
                    if (G.relative[j = g.type]) break;
                    if (j = G.find[j])
                        if (d = j(g.matches[0].replace(ka, ""), kb.test(m[0].type) && f.parentNode || f, e)) {
                            m.splice(l, 1);
                            b = d.length && m.join("");
                            if (!b) return pa.apply(c, qa.call(d, 0)), c;
                            break
                        }
                }
            }
            return lb(b, p)(d, f, e, c, kb.test(b)), c
        },
        Yb = function() {},
        fb, mb, G, Sa, La, Sb, lb, nb, ya, Ra, Zb = !0,
        P = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        X = Vc.document,
        W = X.documentElement,
        xa = 0,
        Zc = 0,
        $c = [].pop,
        pa = [].push,
        qa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var f = 0, c = this.length; f < c; f++)
                if (this[f] === b) return f;
            return -1
        },
        Y = function(b, f) {
            return b[P] = null == f || f, b
        },
        ob = function() {
            var b = {},
                f = [];
            return Y(function(c, d) {
                return f.push(c) > G.cacheLength && delete b[f.shift()], b[c] = d
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ma = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ka = /\\(?!\\)/g,
        Oa = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        da = function(b) {
            var f = X.createElement("div");
            try {
                return b(f)
            } catch (c) {
                return !1
            } finally {}
        },
        dd = da(function(b) {
            return b.appendChild(X.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = da(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = da(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = da(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = da(function(b) {
            b.id = P + 0;
            b.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>";
            W.insertBefore(b, W.firstChild);
            var f = X.getElementsByName &&
                X.getElementsByName(P).length === 2 + X.getElementsByName(P + 0).length;
            return mb = !X.getElementById(P), W.removeChild(b), f
        });
    try {
        qa.call(W.childNodes, 0)[0].nodeType
    } catch (Qd) {
        qa = function(b) {
            for (var f, c = []; f = this[b]; b++) c.push(f);
            return c
        }
    }
    I.matches = function(b, f) {
        return I(b, null, null, f)
    };
    I.matchesSelector = function(b, f) {
        return 0 < I(f, null, null, [b]).length
    };
    Sa = I.getText = function(b) {
        var f, c = "",
            d = 0;
        if (f = b.nodeType)
            if (1 === f || 9 === f || 11 === f) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) c += Sa(b)
            } else {
                if (3 === f || 4 === f) return b.nodeValue
            } else
            for (; f = b[d]; d++) c += Sa(f);
        return c
    };
    La = I.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = I.contains = W.contains ? function(b, f) {
        var c = 9 === b.nodeType ? b.documentElement : b,
            d = f && f.parentNode;
        return b === d || !(!d || !(1 === d.nodeType && c.contains && c.contains(d)))
    } : W.compareDocumentPosition ? function(b, f) {
        return f && !!(b.compareDocumentPosition(f) & 16)
    } : function(b, f) {
        for (; f = f.parentNode;)
            if (f === b) return !0;
        return !1
    };
    I.attr = function(b, f) {
        var c, d = La(b);
        return d || (f = f.toLowerCase()), (c = G.attrHandle[f]) ? c(b) : d || fd ? b.getAttribute(f) : (c = b.getAttributeNode(f), c ? "boolean" == typeof b[f] ? b[f] ? f : null : c.specified ? c.value : null : null)
    };
    G = I.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Oa,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, f, c) {
                if ("undefined" !== typeof f.getElementById && !c) return (b = f.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, f, c) {
                if ("undefined" !== typeof f.getElementById && !c) return (f = f.getElementById(b)) ? f.id === b || "undefined" !== typeof f.getAttributeNode && f.getAttributeNode("id").value === b ? [f] : void 0 : []
            },
            TAG: dd ? function(b, f) {
                if ("undefined" !== typeof f.getElementsByTagName) return f.getElementsByTagName(b)
            } : function(b, f) {
                var c = f.getElementsByTagName(b);
                if ("*" === b) {
                    for (var d, e = [], l = 0; d = c[l]; l++) 1 === d.nodeType && e.push(d);
                    return e
                }
                return c
            },
            NAME: gd && function(b, f) {
                if ("undefined" !== typeof f.getElementsByName) return f.getElementsByName(name)
            },
            CLASS: Tb && function(b, f, c) {
                if ("undefined" !== typeof f.getElementsByClassName && !c) return f.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ka, ""), b[3] = (b[4] || b[5] || "").replace(ka, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || I.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && I.error(b[0]), b
            },
            PSEUDO: function(b) {
                var f, c;
                if (Oa.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (f = b[4]) ad.test(f) && (c = Pa(f, !0)) && (c = f.indexOf(")", f.length - c) - f.length) && (f = f.slice(0, c), b[0] = b[0].slice(0, c)), b[2] = f;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ka, ""),
                    function(f) {
                        return f.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ka, ""),
                    function(f) {
                        return (f = "undefined" !== typeof f.getAttributeNode &&
                            f.getAttributeNode("id")) && f.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ka, "").toLowerCase(), function(f) {
                    return f.nodeName && f.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var f = $b[P][b];
                return f || (f = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return f.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, f, c) {
                return function(d) {
                    d = I.attr(d, b);
                    return null == d ? "!=" === f : f ? (d += "", "=" ===
                        f ? d === c : "!=" === f ? d !== c : "^=" === f ? c && 0 === d.indexOf(c) : "*=" === f ? c && -1 < d.indexOf(c) : "$=" === f ? c && d.substr(d.length - c.length) === c : "~=" === f ? -1 < (" " + d + " ").indexOf(c) : "|=" === f ? d === c || d.substr(0, c.length + 1) === c + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, f;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) {
                        f = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (f++, b === c)); c = c.nextSibling);
                    }
                    return f -= e, f === d || 0 === f % d && 0 <= f / d
                } : function(c) {
                    var f = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; f = f.previousSibling;)
                                if (1 ===
                                    f.nodeType) return !1;
                            if ("first" === b) return !0;
                            f = c;
                        case "last":
                            for (; f = f.nextSibling;)
                                if (1 === f.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = G.pseudos[b] || G.setFilters[b.toLowerCase()] || I.error("unsupported pseudo: " + b);
                return e[P] ? e(c) : 1 < e.length ? (d = [b, b, "", c], G.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, d) {
                    for (var u, l = e(b, c), q = l.length; q--;) u = Xb.call(b, l[q]), b[u] = !(d[u] = l[q])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                    d = [],
                    e = lb(b.replace(Ma, "$1"));
                return e[P] ? Y(function(b, c, f, d) {
                    d = e(b, null, d, []);
                    for (var u = b.length; u--;)
                        if (f = d[u]) b[u] = !(c[u] = f)
                }) : function(b, u, l) {
                    return c[0] = b, e(c, null, l, d), !d.pop()
                }
            }),
            has: Y(function(b) {
                return function(c) {
                    return 0 < I(b, c).length
                }
            }),
            contains: Y(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Sa(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !G.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: wa("radio"),
            checkbox: wa("checkbox"),
            file: wa("file"),
            password: wa("password"),
            image: wa("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ja(function() {
                return [0]
            }),
            last: ja(function(b, c) {
                return [c - 1]
            }),
            eq: ja(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ja(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ja(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ja(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ja(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    nb = W.compareDocumentPosition ? function(b, c) {
        return b === c ? (ya = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return ya = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, l = [],
            g = [];
        d = b.parentNode;
        e = c.parentNode;
        var m = d;
        if (d === e) return Na(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; m;) l.unshift(m), m = m.parentNode;
        for (m = e; m;) g.unshift(m), m = m.parentNode;
        d = l.length;
        e = g.length;
        for (m = 0; m < d && m < e; m++)
            if (l[m] !== g[m]) return Na(l[m], g[m]);
        return m === d ? Na(b, g[m], -1) : Na(l[m], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !ya;
    I.uniqueSort = function(b) {
        var c, d = 1;
        ya = Zb;
        b.sort(nb);
        if (ya)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    I.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = I.compile = function(b, c) {
        var d, e = [],
            l = [],
            g = ac[P][b];
        if (!g) {
            c || (c = Pa(b));
            for (d = c.length; d--;) g = jb(c[d]), g[P] ? e.push(g) : l.push(g);
            var m = 0 < e.length,
                j = 0 < l.length,
                p = function(b, c, f, d, u) {
                    var q, g, s = [],
                        t = 0,
                        r = "0",
                        n = b && [],
                        z = null != u,
                        x = Ra,
                        A = b || j && G.find.TAG("*", u && c.parentNode || c),
                        B = xa += null == x ? 1 : Math.E;
                    for (z && (Ra = c !== X && c, fb = p.el); null != (u = A[r]); r++) {
                        if (j && u) {
                            for (q = 0; g = l[q]; q++)
                                if (g(u, c, f)) {
                                    d.push(u);
                                    break
                                }
                            z && (xa = B, fb =
                                ++p.el)
                        }
                        m && ((u = !g && u) && t--, b && n.push(u))
                    }
                    t += r;
                    if (m && r !== t) {
                        for (q = 0; g = e[q]; q++) g(n, s, c, f);
                        if (b) {
                            if (0 < t)
                                for (; r--;)!n[r] && !s[r] && (s[r] = $c.call(d));
                            s = Qa(s)
                        }
                        pa.apply(d, s);
                        z && !b && 0 < s.length && 1 < t + e.length && I.uniqueSort(d)
                    }
                    return z && (xa = B, Ra = x), n
                };
            d = (p.el = 0, m ? Y(p) : p);
            g = ac(b, d)
        }
        return g
    };
    if (X.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Ta = [":active", ":focus"],
            Ua = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector ||
            W.msMatchesSelector;
        da(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        da(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled",
                ":disabled")
        });
        Z = RegExp(Z.join("|"));
        eb = function(b, c, d, e, l) {
            if (!e && !l && (!Z || !Z.test(b))) {
                var g, m, j = !0,
                    p = P;
                m = c;
                g = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    g = Pa(b);
                    (j = c.getAttribute("id")) ? p = j.replace(id, "\\$&"): c.setAttribute("id", p);
                    p = "[id='" + p + "'] ";
                    for (m = g.length; m--;) g[m] = p + g[m].join("");
                    m = kb.test(b) && c.parentNode || c;
                    g = g.join(",")
                }
                if (g) try {
                    return pa.apply(d, qa.call(m.querySelectorAll(g), 0)), d
                } catch (t) {} finally {
                    j || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, e, l)
        };
        Ua &&
            (da(function(b) {
                cc = Ua.call(b, "div");
                try {
                    Ua.call(b, "[test!='']:sizzle"), Ta.push("!=", pb)
                } catch (c) {}
            }), Ta = RegExp(Ta.join("|")), I.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!La(b) && !Ta.test(c) && (!Z || !Z.test(c))) try {
                    var d = Ua.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (e) {}
                return 0 < I(c, null, null, [b]).length
            })
    }
    G.pseudos.nth = G.pseudos.eq;
    G.filters = Yb.prototype = G.pseudos;
    G.setFilters = new Yb;
    I.attr = e.attr;
    e.find = I;
    e.expr = I.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique =
        I.uniqueSort;
    e.text = I.getText;
    e.isXMLDoc = I.isXML;
    e.contains = I.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function(b) {
            var c, d, l, g, j, m, p = this;
            if ("string" != typeof b) return e(b).filter(function() {
                c = 0;
                for (d = p.length; c < d; c++)
                    if (e.contains(p[c], this)) return !0
            });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (l = m.length, e.find(b, this[c], m), 0 < c)
                    for (g = l; g < m.length; g++)
                        for (j =
                            0; j < l; j++)
                            if (m[j] === m[g]) {
                                m.splice(g--, 1);
                                break
                            }
            return m
        },
        has: function(b) {
            var c, d = e(b, this),
                l = d.length;
            return this.filter(function() {
                for (c = 0; c < l; c++)
                    if (e.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(z(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(z(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, l = 0, g = this.length,
                j = [], m = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; l < g; l++)
                for (d = this[l]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (m ? -1 < m.index(d) : e.find.matchesSelector(d, b)) {
                        j.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return j = 1 < j.length ? e.unique(j) : j, this.pushStack(j, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                l = e.merge(this.get(), d);
            return this.pushStack(y(d[0]) || y(l[0]) ? l : e.unique(l))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return r(b, "nextSibling")
        },
        prev: function(b) {
            return r(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, l) {
            var g = e.map(this, c, d);
            return kd.test(b) ||
                (l = d), l && "string" == typeof l && (g = e.filter(l, g)), g = 1 < this.length && !md[b] ? e.unique(g) : g, 1 < this.length && ld.test(b) && (g = g.reverse()), this.pushStack(g, b, aa.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, f, d) {
            var l = [];
            for (b = b[f]; b && 9 !== b.nodeType && (d === c || 1 !== b.nodeType || !e(b).is(d));) 1 === b.nodeType && l.push(b), b = b[f];
            return l
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = A(D),
        sb = hc.appendChild(D.createElement("div"));
    V.optgroup =
        V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    e.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this, function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(c) {
                e(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") ||
                    e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, l = 0; null != (d = this[l]); l++)
                if (!b || e.filter(b, [d]).length)!c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {},
                    l = 0,
                    u = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) &&
                    !V[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; l < u; l++) d = this[l] || {}, 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return y(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    l = d.html();
                d.replaceWith(b.call(this, c, l))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, f, d) {
            b = [].concat.apply([], b);
            var l, g, j, m = 0,
                p = b[0],
                t = [],
                r = this.length;
            if (!e.support.checkClone && 1 < r && "string" == typeof p && gc.test(p)) return this.each(function() {
                e(this).domManip(b, f, d)
            });
            if (e.isFunction(p)) return this.each(function(l) {
                var g = e(this);
                b[0] = p.call(this, l, f ? g.html() : c);
                g.domManip(b, f, d)
            });
            if (this[0]) {
                l = e.buildFragment(b, this, t);
                j = l.fragment;
                g = j.firstChild;
                1 === j.childNodes.length && (j = g);
                if (g) {
                    f = f && e.nodeName(g, "tr");
                    for (l = l.cacheable || r - 1; m < r; m++) d.call(f && e.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === l ? j : e.clone(j, !0, !0))
                }
                j = g = null;
                t.length && e.each(t, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, f, d) {
        var l, g, j, m = b[0];
        return f = f || D, f = !f.nodeType && f[0] || f, f = f.ownerDocument || f, 1 === b.length && "string" == typeof m && 512 > m.length && f === D && "<" === m.charAt(0) && !rd.test(m) && (e.support.checkClone || !gc.test(m)) && (e.support.html5Clone || !rb.test(m)) && (g = !0, l = e.fragments[m], j = l !== c), l || (l = f.createDocumentFragment(), e.clean(b, f, l, d), g && (e.fragments[m] = j && l)), {
            fragment: l,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var l, g = 0,
                j = [];
            d = e(d);
            var m = d.length;
            l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === m) return d[c](this[0]), this;
            for (; g < m; g++) l = (0 < g ? this.clone(!0) : this).get(), e(d[g])[c](l), j = j.concat(l);
            return this.pushStack(j, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var g, j, s, m;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName +
                ">") ? m = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(m = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, m);
                g = p(b);
                j = p(m);
                for (s = 0; g[s]; ++s) j[s] && l(g[s], j[s])
            }
            if (c && (B(b, m), d)) {
                g = p(b);
                j = p(m);
                for (s = 0; g[s]; ++s) B(g[s], j[s])
            }
            return m
        },
        clean: function(b, c, d, l) {
            var g, j, m, p, r, n, z, x = c === D && hc,
                B = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = D;
            for (g = 0; null != (m = b[g]); g++)
                if ("number" == typeof m && (m += ""), m) {
                    if ("string" ==
                        typeof m)
                        if (pd.test(m)) {
                            x = x || A(c);
                            n = c.createElement("div");
                            x.appendChild(n);
                            m = m.replace(ec, "<$1></$2>");
                            j = (fc.exec(m) || ["", ""])[1].toLowerCase();
                            p = V[j] || V._default;
                            r = p[0];
                            for (n.innerHTML = p[1] + m + p[2]; r--;) n = n.lastChild;
                            if (!e.support.tbody) {
                                r = od.test(m);
                                p = "table" === j && !r ? n.firstChild && n.firstChild.childNodes : "<table>" === p[1] && !r ? n.childNodes : [];
                                for (j = p.length - 1; 0 <= j; --j) e.nodeName(p[j], "tbody") && !p[j].childNodes.length && p[j].parentNode.removeChild(p[j])
                            }!e.support.leadingWhitespace && qb.test(m) && n.insertBefore(c.createTextNode(qb.exec(m)[0]),
                                n.firstChild);
                            m = n.childNodes;
                            n.parentNode.removeChild(n)
                        } else m = c.createTextNode(m);
                    m.nodeType ? B.push(m) : e.merge(B, m)
                }
            n && (m = n = x = null);
            if (!e.support.appendChecked)
                for (g = 0; null != (m = B[g]); g++) e.nodeName(m, "input") ? t(m) : "undefined" != typeof m.getElementsByTagName && e.grep(m.getElementsByTagName("input"), t);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return l ? l.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (g = 0; null != (m = B[g]); g++)
                    if (!e.nodeName(m, "script") || !b(m)) d.appendChild(m),
                        "undefined" != typeof m.getElementsByTagName && (z = e.grep(e.merge([], m.getElementsByTagName("script")), b), B.splice.apply(B, [g + 1, 0].concat(z)), g += z.length)
            }
            return B
        },
        cleanData: function(b, c) {
            for (var d, l, g, j, m = 0, p = e.expando, t = e.cache, r = e.support.deleteExpando, n = e.event.special; null != (g = b[m]); m++)
                if (c || e.acceptData(g))
                    if (d = (l = g[p]) && t[l]) {
                        if (d.events)
                            for (j in d.events) n[j] ? e.event.remove(g, j) : e.removeEvent(g, j, d.handle);
                        t[l] && (delete t[l], r ? delete g[p] : g.removeAttribute ? g.removeAttribute(p) : g[p] = null, e.deletedIds.push(l))
                    }
        }
    });
    var Va, ea;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Va = e.uaMatch(zc.userAgent);
    ea = {};
    Va.browser && (ea[Va.browser] = !0, ea.version = Va.version);
    ea.chrome ? ea.webkit = !0 : ea.webkit && (ea.safari = !0);
    e.browser = ea;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, l) {
            return l && l instanceof e && !(l instanceof b) && (l = b(l)), e.fn.init.call(this, d, l, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(D);
        return b
    };
    var R, ma, na, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Fa + ")(.*)$", "i"),
        za = RegExp("^(" + Fa + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Fa + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        fa = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this, function(b, d, f) {
                return f !== c ? e.style(b, d, f) : e.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : L(this)) ? e(this).show():
                    e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = R(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, l, g) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var j, p, m, t = e.camelCase(d),
                    r = b.style;
                d = e.cssProps[t] || (e.cssProps[t] = x(r, t));
                m = e.cssHooks[d] || e.cssHooks[t];
                if (l === c) return m && "get" in m && (j = m.get(b, !1, g)) !== c ? j : r[d];
                p = typeof l;
                "string" === p && (j = xd.exec(l)) && (l = (j[1] + 1) * j[2] + parseFloat(e.css(b, d)), p = "number");
                if (!(null == l || "number" === p && isNaN(l)))
                    if ("number" === p && !e.cssNumber[t] && (l += "px"), !m || !("set" in m) || (l = m.set(b, l, g)) !== c) try {
                        r[d] = l
                    } catch (n) {}
            }
        },
        css: function(b, d, l, g) {
            var j, p, m, t = e.camelCase(d);
            return d = e.cssProps[t] || (e.cssProps[t] = x(b.style, t)), m = e.cssHooks[d] || e.cssHooks[t], m && "get" in m && (j = m.get(b, !0, g)), j === c && (j = R(b, d)), "normal" === j && d in jc && (j = jc[d]), l || g !== c ? (p = parseFloat(j), l ||
                e.isNumeric(p) ? p || 0 : j) : j
        },
        swap: function(b, c, d) {
            var e, l = {};
            for (e in c) l[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = l[e];
            return d
        }
    });
    b.getComputedStyle ? R = function(c, d) {
        var l, g, j, p, m = b.getComputedStyle(c, null),
            t = c.style;
        return m && (l = m[d], "" === l && !e.contains(c.ownerDocument, c) && (l = e.style(c, d)), za.test(l) && ic.test(d) && (g = t.width, j = t.minWidth, p = t.maxWidth, t.minWidth = t.maxWidth = t.width = l, l = m.width, t.width = g, t.minWidth = j, t.maxWidth = p)), l
    } : D.documentElement.currentStyle && (R = function(b,
        c) {
        var d, e, l = b.currentStyle && b.currentStyle[c],
            g = b.style;
        return null == l && g && g[c] && (l = g[c]), za.test(l) && !vd.test(c) && (d = g.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : l, l = g.pixelLeft + "px", g.left = d, e && (b.runtimeStyle.left = e)), "" === l ? "auto" : l
    });
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, l) {
                if (d) return 0 === b.offsetWidth && wd.test(R(b, "display")) ? e.swap(b, yd, function() {
                    return F(b, c, l)
                }) : F(b, c, l)
            },
            set: function(b,
                d, l) {
                return E(b, d, l ? N(b, c, l, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                l = b.currentStyle,
                g = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                j = l && l.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(j.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), l && !l.filter))) d.filter =
                tb.test(j) ? j.replace(tb, g) : j + " " + g
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return R(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var l = R(b, c);
                        return za.test(l) ? e(b).position()[c] + "px" : l
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || R(b, "display"))
    }, e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    l = {};
                for (d = 0; 4 > d; d++) l[b + fa[d] + c] = e[d] || e[d - 2] || e[0];
                return l
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = E)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var l, g = [],
            j = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b, function() {
            j(this.name, this.value)
        });
        else
            for (l in b) O(l, b[l], d, j);
        return g.join("&").replace(Ad, "+")
    };
    var ra, la, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        la = yc.href
    } catch (Rd) {
        la = D.createElement("a"), la.href = "", la = la.href
    }
    ra = mc.exec(la.toLowerCase()) || [];
    e.fn.load = function(b, d, l) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var g, j, p, m = this,
            t = b.indexOf(" ");
        return 0 <= t && (g = b.slice(t, b.length), b = b.slice(0, t)), e.isFunction(d) ? (l = d, d = c) : d && "object" == typeof d && (j = "POST"), e.ajax({
            url: b,
            type: j,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                l && m.each(l, p || [b.responseText, c, b])
            }
        }).done(function(b) {
            p = arguments;
            m.html(g ? e("<div>").append(b.replace(Hd, "")).find(g) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(b, d) {
        e[d] = function(b, l, g, j) {
            return e.isFunction(l) && (j = j || g, g = l, l = c), e.ajax({
                type: d,
                url: b,
                data: l,
                success: g,
                dataType: j
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? ta(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), ta(b, c), b
        },
        ajaxSettings: {
            url: la,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ra[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Aa(Za),
        ajaxTransport: Aa(oc),
        ajax: function(b, d) {
            function l(b, d, f, p) {
                var u, r, q, s, z, E = d;
                if (2 !== F) {
                    F = 2;
                    t && clearTimeout(t);
                    m = c;
                    j = p || "";
                    J.readyState = 0 < b ? 4 : 0;
                    if (f) {
                        s = x;
                        p = J;
                        var H, S, ba, I, N = s.contents,
                            K = s.dataTypes,
                            M = s.responseFields;
                        for (S in M) S in f && (p[M[S]] = f[S]);
                        for (;
                            "*" === K[0];) K.shift(),
                            H === c && (H = s.mimeType || p.getResponseHeader("content-type"));
                        if (H)
                            for (S in N)
                                if (N[S] && N[S].test(H)) {
                                    K.unshift(S);
                                    break
                                }
                        if (K[0] in f) ba = K[0];
                        else {
                            for (S in f) {
                                if (!K[0] || s.converters[S + " " + K[0]]) {
                                    ba = S;
                                    break
                                }
                                I || (I = S)
                            }
                            ba = ba || I
                        }
                        s = f = ba ? (ba !== K[0] && K.unshift(ba), f[ba]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (x.ifModified && (z = J.getResponseHeader("Last-Modified"), z && (e.lastModified[g] = z), z = J.getResponseHeader("Etag"), z && (e.etag[g] = z)), 304 === b) E = "notmodified", u = !0;
                        else {
                            var G;
                            a: {
                                u = x;
                                r = s;
                                var O, E = u.dataTypes.slice();
                                f = E[0];
                                H = {};
                                S = 0;
                                u.dataFilter && (r = u.dataFilter(r, u.dataType));
                                if (E[1])
                                    for (G in u.converters) H[G.toLowerCase()] = u.converters[G];
                                for (; q = E[++S];)
                                    if ("*" !== q) {
                                        if ("*" !== f && f !== q) {
                                            G = H[f + " " + q] || H["* " + q];
                                            if (!G)
                                                for (O in H)
                                                    if (z = O.split(" "), z[1] === q && (G = H[f + " " + z[0]] || H["* " + z[0]])) {
                                                        !0 === G ? G = H[O] : !0 !== H[O] && (q = z[0], E.splice(S--, 0, q));
                                                        break
                                                    }
                                            if (!0 !== G)
                                                if (G && u["throws"]) r = G(r);
                                                else try {
                                                    r = G(r)
                                                } catch (P) {
                                                    G = {
                                                        state: "parsererror",
                                                        error: G ? P : "No conversion from " + f + " to " + q
                                                    };
                                                    break a
                                                }
                                        }
                                        f = q
                                    }
                                G = {
                                    state: "success",
                                    data: r
                                }
                            }
                            u =
                                G;
                            E = u.state;
                            r = u.data;
                            q = u.error;
                            u = !q
                        } else if (q = E, !E || b) E = "error", 0 > b && (b = 0);
                    J.status = b;
                    J.statusText = (d || E) + "";
                    u ? y.resolveWith(A, [r, E, J]) : y.rejectWith(A, [J, E, q]);
                    J.statusCode(D);
                    D = c;
                    n && B.trigger("ajax" + (u ? "Success" : "Error"), [J, x, u ? r : q]);
                    L.fireWith(A, [J, E]);
                    n && (B.trigger("ajaxComplete", [J, x]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var g, j, p, m, t, r, n, z, x = e.ajaxSetup({}, d),
                A = x.context || x,
                B = A !== x && (A.nodeType || A instanceof e) ? e(A) : e.event,
                y = e.Deferred(),
                L = e.Callbacks("once memory"),
                D = x.statusCode || {},
                E = {},
                H = {},
                F = 0,
                I = "canceled",
                J = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!F) {
                            var d = b.toLowerCase();
                            b = H[d] = H[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === F ? j : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === F) {
                            if (!p)
                                for (p = {}; d = Ed.exec(j);) p[d[1].toLowerCase()] = d[2];
                            d = p[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return F || (x.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || I, m && m.abort(b), l(0, b), this
                    }
                };
            y.promise(J);
            J.success = J.done;
            J.error = J.fail;
            J.complete = L.add;
            J.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > F)
                        for (c in b) D[c] = [D[c], b[c]];
                    else c = b[J.status], J.always(c)
                }
                return this
            };
            x.url = ((b || x.url) + "").replace(Dd, "").replace(Gd, ra[1] + "//");
            x.dataTypes = e.trim(x.dataType || "*").toLowerCase().split(ga);
            null == x.crossDomain && (r = mc.exec(x.url.toLowerCase()) || !1, x.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== ra.join(":") + (ra[3] ? "" : "http:" === ra[1] ? 80 : 443));
            x.data && x.processData && "string" != typeof x.data && (x.data = e.param(x.data,
                x.traditional));
            oa(Za, x, d, J);
            if (2 === F) return J;
            n = x.global;
            x.type = x.type.toUpperCase();
            x.hasContent = !Fd.test(x.type);
            n && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!x.hasContent && (x.data && (x.url += (lc.test(x.url) ? "&" : "?") + x.data, delete x.data), g = x.url, !1 === x.cache)) {
                r = e.now();
                var N = x.url.replace(Id, "$1_=" + r);
                x.url = N + (N === x.url ? (lc.test(x.url) ? "&" : "?") + "_=" + r : "")
            }(x.data && x.hasContent && !1 !== x.contentType || d.contentType) && J.setRequestHeader("Content-Type", x.contentType);
            x.ifModified && (g = g || x.url,
                e.lastModified[g] && J.setRequestHeader("If-Modified-Since", e.lastModified[g]), e.etag[g] && J.setRequestHeader("If-None-Match", e.etag[g]));
            J.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : x.accepts["*"]);
            for (z in x.headers) J.setRequestHeader(z, x.headers[z]);
            if (!x.beforeSend || !1 !== x.beforeSend.call(A, J, x) && 2 !== F) {
                I = "abort";
                for (z in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) J[z](x[z]);
                if (m = oa(oc, x, d, J)) {
                    J.readyState = 1;
                    n && B.trigger("ajaxSend", [J, x]);
                    x.async && 0 < x.timeout && (t = setTimeout(function() {
                        J.abort("timeout")
                    }, x.timeout));
                    try {
                        F = 1, m.send(E, l)
                    } catch (K) {
                        if (2 > F) l(-1, K);
                        else throw K;
                    }
                } else l(-1, "No Transport");
                return J
            }
            return J.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Wa = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, f, l) {
        var g, j, p, m = d.data,
            t = d.url,
            r = !1 !== d.jsonp,
            n = r && Wa.test(t),
            x = r && !n && "string" == typeof m && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(m);
        if ("jsonp" === d.dataTypes[0] || n || x) return g = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, j = b[g], n ? d.url = t.replace(Wa, "$1" + g) : x ? d.data = m.replace(Wa, "$1" + g) : r && (d.url += (Jd.test(t) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
            return p || e.error(g + " was not called"), p[0]
        }, d.dataTypes[0] = "json", b[g] = function() {
            p = arguments
        }, l.always(function() {
            b[g] =
                j;
            d[g] && (d.jsonpCallback = f.jsonpCallback, qc.push(g));
            p && e.isFunction(j) && j(p[0]);
            p = j = c
        }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e =
                D.head || D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function(l, g) {
                    d = D.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, l) {
                        if (l || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, l || g(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var sa, ub = b.ActiveXObject ? function() {
            for (var b in sa) sa[b](0,
                1)
        } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var f;
            return {
                send: function(l, g) {
                    var j, p, m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (p in d.xhrFields) m[p] =
                            d.xhrFields[p];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType);
                    !d.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (p in l) m.setRequestHeader(p, l[p])
                    } catch (t) {}
                    m.send(d.hasContent && d.data || null);
                    f = function(b, l) {
                        var p, t, r, q, s;
                        try {
                            if (f && (l || 4 === m.readyState))
                                if (f = c, j && (m.onreadystatechange = e.noop, ub && delete sa[j]), l) 4 !== m.readyState && m.abort();
                                else {
                                    p = m.status;
                                    r = m.getAllResponseHeaders();
                                    q = {};
                                    (s = m.responseXML) && s.documentElement && (q.xml = s);
                                    try {
                                        q.text =
                                            m.responseText
                                    } catch (n) {}
                                    try {
                                        t = m.statusText
                                    } catch (x) {
                                        t = ""
                                    }!p && d.isLocal && !d.crossDomain ? p = q.text ? 200 : 404 : 1223 === p && (p = 204)
                                }
                        } catch (z) {
                            l || g(-1, z)
                        }
                        q && g(p, t, q, r)
                    };
                    d.async ? 4 === m.readyState ? setTimeout(f, 0) : (j = ++Ld, ub && (sa || (sa = {}, e(b).unload(ub)), sa[j] = f), m.onreadystatechange = f) : f()
                },
                abort: function() {
                    f && f(0, 1)
                }
            }
        }
    });
    var Ba, Xa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Fa + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ca = [
            function(b, c, d) {
                var l, g, j, p, t, r, n = this,
                    x = b.style,
                    z = {},
                    A = [],
                    B = b.nodeType && L(b);
                d.queue ||
                    (t = e._queueHooks(b, "fx"), null == t.unqueued && (t.unqueued = 0, r = t.empty.fire, t.empty.fire = function() {
                        t.unqueued || r()
                    }), t.unqueued++, n.always(function() {
                        n.always(function() {
                            t.unqueued--;
                            e.queue(b, "fx").length || t.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [x.overflow, x.overflowX, x.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === K(b.nodeName) ? x.display = "inline-block" : x.zoom = 1));
                d.overflow && (x.overflow = "hidden",
                    e.support.shrinkWrapBlocks || n.done(function() {
                        x.overflow = d.overflow[0];
                        x.overflowX = d.overflow[1];
                        x.overflowY = d.overflow[2]
                    }));
                for (l in c) g = c[l], Md.exec(g) && (delete c[l], g !== (B ? "hide" : "show") && A.push(l));
                if (g = A.length) {
                    j = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                    B ? e(b).show() : n.done(function() {
                        e(b).hide()
                    });
                    n.done(function() {
                        var c;
                        e.removeData(b, "fxshow", !0);
                        for (c in z) e.style(b, c, z[c])
                    });
                    for (l = 0; l < g; l++) c = A[l], p = n.createTween(c, B ? j[c] : 0), z[c] = j[c] || e.style(b, c), c in j || (j[c] = p.start, B && (p.end = p.start,
                        p.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        ua = {
            "*": [
                function(b, c) {
                    var d, l, g = this.createTween(b, c),
                        j = Nd.exec(c),
                        p = g.cur(),
                        t = +p || 0,
                        r = 1,
                        n = 20;
                    if (j) {
                        d = +j[2];
                        l = j[3] || (e.cssNumber[b] ? "" : "px");
                        if ("px" !== l && t) {
                            t = e.css(g.elem, b, !0) || d || 1;
                            do r = r || ".5", t /= r, e.style(g.elem, b, t + l); while (r !== (r = g.cur() / p) && 1 !== r && --n)
                        }
                        g.unit = l;
                        g.start = t;
                        g.end = j[1] ? t + (j[1] + 1) * d : d
                    }
                    return g
                }
            ]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, l = 0, g = b.length; l < g; l++) d = b[l], ua[d] = ua[d] || [], ua[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ca.unshift(b) : Ca.push(b)
        }
    });
    e.Tween = T;
    T.prototype = {
        constructor: T,
        init: function(b, c, d, l, g, j) {
            this.elem = b;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = j || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = T.propHooks[this.prop];
            return b && b.get ? b.get(this) : T.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = T.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : T.propHooks._default.set(this), this
        }
    };
    T.prototype.init.prototype = T.prototype;
    T.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    T.propHooks.scrollTop = T.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(l, g, j) {
            return null == l || "boolean" == typeof l || !b && e.isFunction(l) && e.isFunction(g) ? d.apply(this, arguments) : this.animate(Da(c, !0), l, g, j)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(L).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, l) {
            var g = e.isEmptyObject(b),
                j = e.speed(c, d, l);
            c = function() {
                var c = Bb(this, e.extend({}, b), j);
                g && c.stop(!0)
            };
            return g || !1 === j.queue ? this.each(c) : this.queue(j.queue, c)
        },
        stop: function(b, d, l) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(l)
            };
            return "string" != typeof b && (l = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    f = e.timers,
                    j = e._data(this);
                if (d) j[d] && j[d].stop && g(j[d]);
                else
                    for (d in j) j[d] &&
                        j[d].stop && Od.test(d) && g(j[d]);
                for (d = f.length; d--;) f[d].elem === this && (null == b || f[d].queue === b) && (f[d].anim.stop(l), c = !1, f.splice(d, 1));
                (c || !l) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Da("show"),
        slideUp: Da("hide"),
        slideToggle: Da("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var l = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        l.duration = e.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in e.fx.speeds ? e.fx.speeds[l.duration] : e.fx.speeds._default;
        if (null == l.queue || !0 === l.queue) l.queue = "fx";
        return l.old = l.complete, l.complete = function() {
            e.isFunction(l.old) && l.old.call(this);
            l.queue && e.dequeue(this, l.queue)
        }, l
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = T.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Xa && (Xa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Xa);
        Xa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                e.offset.setOffset(this, b, c)
            });
        var d, l, g, j, p, m, t, r = {
                top: 0,
                left: 0
            },
            n = this[0],
            x = n && n.ownerDocument;
        if (x) return (l = x.body) === n ? e.offset.bodyOffset(n) : (d = x.documentElement, e.contains(d, n) ? ("undefined" != typeof n.getBoundingClientRect && (r = n.getBoundingClientRect()), g = Cb(x), j = d.clientTop || l.clientTop || 0, p = d.clientLeft || l.clientLeft || 0, m = g.pageYOffset || d.scrollTop, t = g.pageXOffset || d.scrollLeft, {
            top: r.top + m - j,
            left: r.left + t - p
        }) : r)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var l = e.css(b, "position");
            "static" === l && (b.style.position = "relative");
            var g = e(b),
                j = g.offset(),
                p = e.css(b, "top"),
                t = e.css(b, "left"),
                r = {},
                n = {},
                x, z;
            ("absolute" === l || "fixed" === l) && -1 < e.inArray("auto", [p, t]) ? (n = g.position(), x = n.top, z = n.left) : (x = parseFloat(p) || 0, z = parseFloat(t) || 0);
            e.isFunction(c) && (c = c.call(b, d, j));
            null !=
                c.top && (r.top = c.top - j.top + x);
            null != c.left && (r.left = c.left - j.left + z);
            "using" in c ? c.using.call(b, r) : g.css(r)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    l = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, l.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, l.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - l.top,
                    left: d.left - l.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || D.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent;
                return b || D.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var l = /Y/.test(d);
        e.fn[b] = function(g) {
            return e.access(this, function(b, g, j) {
                var p = Cb(b);
                if (j === c) return p ? d in p ? p[d] : p.document.documentElement[g] : b[g];
                p ? p.scrollTo(l ? e(p).scrollLeft() : j, l ? j : e(p).scrollTop()) : b[g] = j
            }, b, g, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        e.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(l, g) {
            e.fn[g] = function(g, j) {
                var p = arguments.length && (l || "boolean" != typeof g),
                    t = l || (!0 === g || !0 === j ? "margin" : "border");
                return e.access(this, function(d, f, l) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : l === c ? e.css(d, f, l, t) : e.style(d, f, l, t)
                }, d, p ? g : c, p, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return e
        })
})(window);
var portraitMode = !1,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 640,
    desktopHeight = 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {/*
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
                20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }*/
    };

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "),
            c = null, d = 0; d < b.length; d++) "Version/" == b[d].substr(0, 8) && (c = b[d]);
        var b = window.chrome,
            d = navigator.userAgent.indexOf("wv"),
            g = navigator.userAgent.indexOf("SamsungBrowser"); - 1 < navigator.userAgent.indexOf("Chrome") && null == c && -1 >= d && -1 >= g ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"), c.src = "media/graphics/orientate/scroll_down.png", c.style.height = "40%", c.style.width = "20%", c.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(),
            90 == Math.abs(window.orientation) && (c = document.body.offsetHeight, c < minHeight && (minHeight = c), c = portraitMode ? document.getElementById("orientate") : document.getElementById("game"), b = document.getElementById("tempdiv"), c = c.clientHeight + b.clientHeight, console.log(c + "," + minHeight), c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange", function() {
                0 == window.orientation && $("#scrollDown").hide();
                Math.abs(window.orientation);
                $("#scrollDown").show();
                0 == window.orientation &&
                    $("#scrollDown").hide()
            }), window.addEventListener("resize", function() {
                0 == window.orientation && $("#scrollDown").hide();
                if (90 == Math.abs(window.orientation)) {
                    var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
                        c = document.getElementById("tempdiv");
                    b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
                }
            })) : ($("#scrollDown").hide(), $("#tempdiv").hide())
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function(b) {
            b.preventDefault();
            return !1
        }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var g = c[d].split("=");
        if (decodeURIComponent(g[0]) == b) return decodeURIComponent(g[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var g in b) this.settings[g] = b[g];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            g;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var j = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", j, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", j, !0);
                    j("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (g in this.HTML5API) this[g] = this.HTML5API[g];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (g in this.FLASHAPI) this[g] = this.FLASHAPI[g];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            g, j = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var n = document.createElement("object");
            n.id = "jukebox-flashstream-" + this.id;
            n.setAttribute("type", "application/x-shockwave-flash");
            n.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            n.setAttribute("width", "0");
            n.setAttribute("height", "0");
            j.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            j.flashvars = b.join("&amp;");
            for (g in j) b = document.createElement("param"), b.setAttribute("name", g), b.setAttribute("value", j[g]), n.appendChild(b);
            c.outerHTML = n.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            j.play = !1;
            j.loop = !1;
            j.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (g in j) c.setAttribute(g, j[g]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                g;
            if (void 0 !== d[b]) g = d[b].start;
            else if ("number" === typeof b) {
                g = b;
                for (var j in d)
                    if (g >= d[j].start && g <=
                        d[j].end) {
                        b = j;
                        break
                    }
            }
            void 0 !== g && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(g))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, g, j = 0, n = c.length; j < n; j++)
                if (g = c[j].e, c[j].m.length && "object" === typeof c[j].m)
                    for (var y = 0, r = c[j].m.length; y < r; y++)
                        if (d = c[j].m[y], "" !== b.canPlayType(d)) {
                            this.codecs[g] = d;
                            break
                        } else this.codecs[g] || (this.codecs[g] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (z) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var g = this.__clones[d];
            if (null === g.isPlaying && g.origin === b) return g
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var j in c) d[j] = c[j];
            d.autoplay = !1;
            j = new jukebox.Player(d, b);
            j.isClone = !0;
            j.wasReady = !1;
            return this.__clones[j.id] = j
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var g = b[c],
                j = g.match(/\.([^\.]*)$/)[1];
            if (j && this.codecs[j]) return g
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        g = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (j) {
            g = !0
        }
    } else d = !1, g = !0; if (d) {
        var n = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        n.gain.value = 1;
        n.connect(c.destination)
    }
    var y = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = g;
        this._howls = []
    };
    y.prototype = {
        volume: function(b) {
            b =
                parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (n.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? n.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (n.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) &&
                    !1 === this._howls[c]._webAudio)
                    for (var g = 0; g < this._howls[c]._audioNode.length; g++) this._howls[c]._audioNode[g].muted = b
        }
    };
    var r = new y,
        y = null;
    if (!g) var y = new Audio,
        z = {
            mp3: !!y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!y.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/,
                ""),
            mp4: !!(y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var A = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        r._howls.push(this);
        this.load()
    };
    A.prototype = {
        load: function() {
            var d = this,
                j = null;
            if (!g) {
                for (var t = 0; t < d._urls.length; t++) {
                    var n, A;
                    if (d._format) n = d._format;
                    else if (A = d._urls[t].toLowerCase().split("?")[0], n =
                        (n = A.match(/.+\.([^?]+)(\?|$)/)) && 2 <= n.length ? n : A.match(/data\:audio\/([^?]+);/)) n = n[1];
                    else {
                        d.on("loaderror");
                        return
                    } if (z[n]) {
                        j = d._urls[t];
                        break
                    }
                }
                if (j) {
                    d._src = j;
                    if (d._webAudio) {
                        var y = j;
                        if (y in b) d._duration = b[y].duration, B(d);
                        else {
                            var E = new XMLHttpRequest;
                            E.open("GET", y, !0);
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                c.decodeAudioData(E.response, function(c) {
                                    c && (b[y] = c, B(d, c))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            E.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
                                    d.load())
                            };
                            try {
                                E.send()
                            } catch (N) {
                                E.onerror()
                            }
                        }
                    } else {
                        var F = new Audio;
                        d._audioNode.push(F);
                        F.src = j;
                        F._pos = 0;
                        F.preload = "auto";
                        F.volume = r._muted ? 0 : d._volume * r.volume();
                        b[j] = d;
                        var K = function() {
                            d._duration = Math.ceil(10 * F.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            F.removeEventListener("canplaythrough", K, !1)
                        };
                        F.addEventListener("canplaythrough", K, !1);
                        F.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, g) {
            var j = this;
            "function" === typeof d && (g = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!j._loaded) return j.on("load", function() {
                j.play(d, g)
            }), j;
            if (!j._sprite[d]) return "function" === typeof g && g(), j;
            j._inactiveNode(function(n) {
                n._sprite = d;
                var z = 0 < n._pos ? n._pos : j._sprite[d][0] / 1E3,
                    A = j._sprite[d][1] / 1E3 - n._pos,
                    B = !(!j._loop && !j._sprite[d][2]),
                    y = "string" === typeof g ? g :
                    Math.round(Date.now() * Math.random()) + "",
                    F, K = {
                        id: y,
                        sprite: d,
                        loop: B
                    };
                F = setTimeout(function() {
                    !j._webAudio && B && j.stop(K.id, K.timer).play(d, K.id);
                    j._webAudio && !B && (j._nodeById(K.id).paused = !0, j._nodeById(K.id)._pos = 0);
                    !j._webAudio && !B && j.stop(K.id, K.timer);
                    j.on("end", y)
                }, 1E3 * A);
                j._onendTimer.push(F);
                K.timer = j._onendTimer[j._onendTimer.length - 1];
                if (j._webAudio) {
                    F = j._sprite[d][0] / 1E3;
                    var O = j._sprite[d][1] / 1E3;
                    n.id = y;
                    n.paused = !1;
                    F = [B, F, O];
                    O = j._nodeById(y);
                    O.bufferSource = c.createBufferSource();
                    O.bufferSource.buffer =
                        b[j._src];
                    O.bufferSource.connect(O.panner);
                    O.bufferSource.loop = F[0];
                    F[0] && (O.bufferSource.loopStart = F[1], O.bufferSource.loopEnd = F[1] + F[2]);
                    O.bufferSource.playbackRate.value = j._rate;
                    j._playStart = c.currentTime;
                    n.gain.value = j._volume;
                    "undefined" === typeof n.bufferSource.start ? n.bufferSource.noteGrainOn(0, z, A) : n.bufferSource.start(0, z, A)
                } else if (4 === n.readyState) n.id = y, n.currentTime = z, n.muted = r._muted, n.volume = j._volume * r.volume(), setTimeout(function() {
                    n.play()
                }, 0);
                else {
                    j._clearEndTimer(F);
                    var Aa = d,
                        oa =
                        g,
                        ta = function() {
                            j.play(Aa, oa);
                            n.removeEventListener("canplaythrough", ta, !1)
                        };
                    n.addEventListener("canplaythrough", ta, !1);
                    return j
                }
                j.on("play");
                "function" === typeof g && g(y);
                return j
            });
            return j
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var g = b ? d._nodeById(b) : d._activeNode();
            if (g)
                if (g._pos = d.pos(null, b), d._webAudio) {
                    if (!g.bufferSource || g.paused) return d;
                    g.paused = !0;
                    "undefined" === typeof g.bufferSource.stop ? g.bufferSource.noteOff(0) :
                        g.bufferSource.stop(0)
                } else g.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var g = b ? d._nodeById(b) : d._activeNode();
            if (g)
                if (g._pos = 0, d._webAudio) {
                    if (!g.bufferSource || g.paused) return d;
                    g.paused = !0;
                    "undefined" === typeof g.bufferSource.stop ? g.bufferSource.noteOff(0) : g.bufferSource.stop(0)
                } else g.pause(), g.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                    c.mute(b)
                }),
                c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var g = c ? d._nodeById(c) : d._activeNode();
                g && (d._webAudio ? g.gain.value = b : g.volume =
                    b * r.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var g = this;
            if (!g._loaded) return g.on("load", function() {
                g.pos(b)
            }), "number" === typeof b ? g : g._pos || 0;
            b = parseFloat(b);
            var j = d ? g._nodeById(d) : g._activeNode();
            if (j) return 0 <= b ? (g.pause(d), j._pos = b, g.play(j._sprite, d), g) : g._webAudio ? j._pos + (c.currentTime - g._playStart) : j.currentTime;
            if (0 <= b) return g;
            for (j = 0; j < g._audioNode.length; j++)
                if (g._audioNode[j].paused && 4 === g._audioNode[j].readyState) return g._webAudio ? g._audioNode[j]._pos : g._audioNode[j].currentTime
        },
        pos3d: function(b, c, d, g) {
            var j = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!j._loaded) return j.on("play", function() {
                j.pos3d(b, c, d, g)
            }), j;
            if (0 <= b || 0 > b) {
                if (j._webAudio) {
                    var r = g ? j._nodeById(g) : j._activeNode();
                    r && (j._pos3d = [b, c, d], r.panner.setPosition(b, c, d))
                }
            } else return j._pos3d;
            return j
        },
        fade: function(b, c, d,
            g, j) {
            var r = this,
                n = Math.abs(b - c),
                z = b > c ? "down" : "up",
                n = n / 0.01,
                A = d / n;
            if (!r._loaded) return r.on("load", function() {
                r.fade(b, c, d, g, j)
            }), r;
            r.volume(b, j);
            for (var B = 1; B <= n; B++)(function() {
                var b = Math.round(1E3 * (r._volume + ("up" === z ? 0.01 : -0.01) * B)) / 1E3;
                setTimeout(function() {
                    r.volume(b, j);
                    b === c && g && g()
                }, A * B)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, g) {
            var j = this;
            return j.fade(j._volume, b, c, function() {
                d && d();
                j.pause(g);
                j.on("end")
            }, g)
        },
        _nodeById: function(b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var g;
                this._webAudio ? (g = this._setupAudioNode(),
                    b(g)) : (this.load(), g = this._audioNode[this._audioNode.length - 1], g.addEventListener("loadedmetadata", function() {
                    b(g)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(n);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var g = 0; g < d.length; g++) c ?
                    d[g].call(this, c) : d[g].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], g = c.toString(), j = 0; j < d.length; j++)
                if (g === d[j].toString()) {
                    d.splice(j, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = r._howls.indexOf(this);
            null !== c && 0 <= c && r._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var B = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length &&
            (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: r,
            Howl: A
        }
    });
    "undefined" !== typeof exports && (exports.Howler = r, exports.Howl = A);
    window.Howler = r;
    window.Howl = A
})();
(function(b) {
    Number.prototype.map = function(b, c, d, g) {
        return d + (g - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            g = function() {},
            j = function() {
                return d.apply(this instanceof g && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        g.prototype = this.prototype;
        j.prototype = new g;
        return j
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, g = b.length; d < g; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var g = c[d];
                if ("object" != typeof g || g instanceof HTMLElement || g instanceof ig.Class || null === g) b[d] = g;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = g instanceof Array ? [] : {};
                    ig.merge(b[d], g)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                g;
            for (g in b) c.push(g);
            c.sort();
            for (g = 0; g < c.length; g++) d.push(b[c[g]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var g = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + g] = b["moz" + g] = b["o" + g] = d : b["ms" + g] = b["moz" + g] = b["webkit" + g] = b["o" + g] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, g, j) {
            var p = ig.$new("canvas");
            p.width = b.width;
            p.height = b.height;
            var n = p.getContext("2d");
            ig.System.SCALE.CRISP(p, n);
            var x = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(n, "getImageDataHD");
            var y = b.width / x,
                H = b.height / x;
            p.width = Math.ceil(y);
            p.height = Math.ceil(H);
            n.drawImage(b, 0, 0, y, H);
            return 1 === x ? n.getImageData(c, d, g, j) : n.getImageDataHD(c, d, g, j)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                g = ig.$new("script");
            g.type = "text/javascript";
            g.src = d;
            g.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            g.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(g)
        },
        _execModules: function() {
            for (var b = !1, c =
                0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], g = !0, j = 0; j < d.requires.length; j++) {
                    var n = d.requires[j];
                    ig.modules[n] ? ig.modules[n].loaded || (g = !1) : (g = !1, ig._loadScript(n, d.name))
                }
                g && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    g = [];
                    n = ig._loadQueue[c].requires;
                    for (j = 0; j < n.length; j++) d = ig.modules[n[j]], (!d || !d.loaded) && g.push(n[j]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + g.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(g, j) {
            var n = c++;
            d[n] = !0;
            var y = function() {
                d[n] && (b.requestAnimationFrame(y, j), g())
            };
            b.requestAnimationFrame(y, j);
            return n
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var g = !1,
        j = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        n = 0;
    b.ig.Class = function() {};
    var y = function(b) {
        var c = this.prototype,
            d = {},
            g;
        for (g in b) "function" ==
            typeof b[g] && "function" == typeof c[g] && j.test(b[g]) ? (d[g] = c[g], c[g] = function(b, c) {
                return function() {
                    var g = this.parent;
                    this.parent = d[b];
                    var j = c.apply(this, arguments);
                    this.parent = g;
                    return j
                }
            }(g, b[g])) : c[g] = b[g]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!g) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var A = this.prototype;
        g = !0;
        var B = new this;
        g = !1;
        for (var l in c) B[l] = "function" == typeof c[l] && "function" == typeof A[l] && j.test(c[l]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = A[b];
                var g = c.apply(this, arguments);
                this.parent = d;
                return g
            }
        }(l, c[l]) : c[l];
        d.prototype = B;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = y;
        d.classId = B.classId = ++n;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                g = this.height * b,
                j = ig.$new("canvas");
            j.width = d;
            j.height = g;
            for (var n = j.getContext("2d"), y = n.getImageData(0, 0, d, g), r = 0; r < g; r++)
                for (var z = 0; z < d; z++) {
                    var A = 4 * (Math.floor(r / b) * this.width + Math.floor(z / b)),
                        B = 4 * (r * d + z);
                    y.data[B] = c.data[A];
                    y.data[B + 1] = c.data[A + 1];
                    y.data[B + 2] = c.data[A + 2];
                    y.data[B + 3] = c.data[A + 3]
                }
            n.putImageData(y, 0, 0);
            this.data = j
        },
        draw: function(b, c, d, g, j, n) {
            if (this.loaded) {
                var y = ig.system.scale;
                j = (j ? j : this.width) * y;
                n = (n ? n : this.height) * y;
                ig.system.context.drawImage(this.data,
                    d ? d * y : 0, g ? g * y : 0, j, n, ig.system.getDrawPos(b), ig.system.getDrawPos(c), j, n);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, g, j, n, y) {
            j = j ? j : g;
            if (this.loaded && !(g > this.width || j > this.height)) {
                var r = ig.system.scale,
                    z = Math.floor(g * r),
                    A = Math.floor(j * r),
                    B = n ? -1 : 1,
                    l = y ? -1 : 1;
                if (n || y) ig.system.context.save(), ig.system.context.scale(B, l);
                ig.system.context.drawImage(this.data, Math.floor(d * g) % this.width * r, Math.floor(d * g / this.width) * j * r, z, A, ig.system.getDrawPos(b) * B - (n ? z : 0), ig.system.getDrawPos(c) * l - (y ? A : 0), z, A);
                (n ||
                    y) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, g) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var j = this.height + this.lineSpacing, n = 0; n < b.length; n++) this.draw(b[n], c, d + n * j, g)
            } else {
                if (g == ig.Font.ALIGN.RIGHT || g == ig.Font.ALIGN.CENTER) n = this._widthForLine(b), c -= g == ig.Font.ALIGN.CENTER ? n / 2 : n;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (n = 0; n < b.length; n++) g = b.charCodeAt(n),
                    c += this._drawChar(g - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var g = ig.system.scale,
                j = this.widthMap[b] * g,
                n = (this.height - 2) * g;
            ig.system.context.drawImage(this.data, this.indices[b] * g, 0, j, n, ig.system.getDrawPos(c), ig.system.getDrawPos(d), j, n);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, g = 0, j = 0; j < b.width; j++) {
                var n = 4 * j + 3;
                127 < c.data[n] ? g++ : 128 > c.data[n] && g && (this.widthMap.push(g), this.indices.push(j - g), d++, g = 0)
            }
            this.widthMap.push(g);
            this.indices.push(j - g)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var g = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var j = new Audio(g);
                        j.load();
                        this.clips[b].push(j)
                    }
                return this.clips[b][0]
            }
            var n = new Audio(g);
            d && (n.addEventListener("canplaythrough", function r(c) {
                n.removeEventListener("canplaythrough", r, !1);
                d(b, !0, c)
            }, !1), n.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            n.preload = "auto";
            n.load();
            this.clips[b] = [n];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) j = new Audio(g), j.load(), this.clips[b].push(j);
            return n
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, g, j) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, g, j);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > c && window.focus(), ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                g = this;
            d.addEventListener("touchstart", function(b) {
                g.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                g.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                g.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                g.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "star",
            path: "media/audio/star2"
        }, {
            name: "ring",
            path: "media/audio/star"
        }, {
            name: "pillow",
            path: "media/audio/pillow2"
        }, {
            name: "click",
            path: "media/audio/click"
        }, {
            name: "flip",
            path: "media/audio/flip"
        }, {
            name: "words",
            path: "media/audio/ans"
        }, {
            name: "vacuum",
            path: "media/audio/vacuum2"
        }, {
            name: "ufo",
            path: "media/audio/ufo"
        }, {
            name: "score",
            path: "media/audio/score"
        }],
        debug: !1,
        init: function() {
            ig.ua.mobile ? (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >=
                this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) {
                    b.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ?
                this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0, ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(), this._unMuteBackgroundMusic(), this.bgmPlaying = !0)
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var g = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [g, c],
                onload: d
            }) : new Howl({
                urls: [g, c]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.ua.mobile ? (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted")
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted && (ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 1, this.debug &&
                console.log("BGM can play"))
        },
        focusBlurMute: function() {
            void 0 != ig.game && (ig.game.changeSound = !0);
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            void 0 != ig.game && (ig.game.changeSound = !0);
            this.forceMuted || this.unmute()
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0)
        },
        unmute: function() {
            this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1)
        },
        setupWindowHandler: function() {
            "true" ===
            getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b =
                    function(b) {
                        this.sfxSoundLoaded.push(this[b])
                    }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/bgm.*", "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            if (!this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() === this.prevTime) {
                        if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++, this.jukebox.player.getCurrentTime() >=
                            this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null
                    } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++)
        if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() {
    var b = getHiddenProp();
    return !b ? !1 : document[b]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function() {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, g, j, n, y) {
        ig.system = new ig.System(b, d, g, j, n || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(y || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, g) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!g;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var g = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = g.vel.x;
            this.vel.y = g.vel.y;
            this.accel.x = g.accel.x;
            this.accel.y = g.accel.y;
            this.health = g.health;
            this._killed = g._killed;
            this.standing = g.standing;
            this.type = g.type;
            this.checkAgainst = g.checkAgainst;
            this.collides = g.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, g) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, g);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, g) {
            return c ? (b + c * ig.system.tick).limit(-g, g) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-g, g)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var g = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -g : g, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -g / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, g / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var g = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var j = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, j = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, j, d == b ? -g : g, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, j = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, j, -g / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, g / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                g = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= g && g < this.height ? this.data[g][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, j) {
            this.parent(b, c);
            this.tiledef = j || ig.CollisionMap.defaultTileDef;
            for (var n in this.tiledef) n | 0 > this.lastSlope && (this.lastSlope = n | 0)
        },
        trace: function(b, c, j, n, y, r) {
            var z = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                A = Math.ceil(Math.max(Math.abs(j), Math.abs(n)) / this.tilesize);
            if (1 < A)
                for (var B = j / A, l = n / A, p = 0; p < A && (B || l) && !(this._traceStep(z,
                    b, c, B, l, y, r, j, n, p), b = z.pos.x, c = z.pos.y, z.collision.x && (j = B = 0), z.collision.y && (n = l = 0), z.collision.slope); p++);
            else this._traceStep(z, b, c, j, n, y, r, j, n, 0);
            return z
        },
        _traceStep: function(b, c, j, n, y, r, z, A, B, l) {
            b.pos.x += n;
            b.pos.y += y;
            var p = 0;
            if (n) {
                var t = 0 < n ? r : 0,
                    x = 0 > n ? this.tilesize : 0,
                    p = Math.max(Math.floor(j / this.tilesize), 0),
                    L = Math.min(Math.ceil((j + z) / this.tilesize), this.height);
                n = Math.floor((b.pos.x + t) / this.tilesize);
                var H = Math.floor((c + t) / this.tilesize);
                if (0 < l || n == H || 0 > H || H >= this.width) H = -1;
                if (0 <= n && n < this.width)
                    for (var E =
                        p; E < L && !(-1 != H && (p = this.data[E][H], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, j, A, B, r, z, H, E))); E++)
                        if (p = this.data[E][n], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, j, A, B, r, z, n, E)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = p;
                            c = b.pos.x = n * this.tilesize - t + x;
                            A = 0;
                            break
                        }
            }
            if (y) {
                t = 0 < y ? z : 0;
                y = 0 > y ? this.tilesize : 0;
                p = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                x = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                E = Math.floor((b.pos.y + t) / this.tilesize);
                L = Math.floor((j + t) / this.tilesize);
                if (0 < l || E == L || 0 > L || L >= this.height) L = -1;
                if (0 <= E && E < this.height)
                    for (n = p; n < x && !(-1 != L && (p = this.data[L][n], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, j, A, B, r, z, n, L))); n++)
                        if (p = this.data[E][n], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, j, A, B, r, z, n, E)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = p;
                            b.pos.y = E * this.tilesize - t + y;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, j, n, y, r, z, A, B, l) {
            var p = this.tiledef[c];
            if (!p) return !1;
            c = (p[2] -
                p[0]) * this.tilesize;
            var t = (p[3] - p[1]) * this.tilesize,
                x = p[4];
            z = j + y + (0 > t ? z : 0) - (B + p[0]) * this.tilesize;
            A = n + r + (0 < c ? A : 0) - (l + p[1]) * this.tilesize;
            if (0 < c * A - t * z) {
                if (0 > y * -t + r * c) return x;
                B = Math.sqrt(c * c + t * t);
                l = t / B;
                B = -c / B;
                var L = z * l + A * B,
                    p = l * L,
                    L = B * L;
                if (p * p + L * L >= y * y + r * r) return x || 0.5 > c * (A - r) - t * (z - y);
                b.pos.x = j + y - p;
                b.pos.y = n + r - L;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: l,
                    ny: B
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, j, n) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + j,
                    y: c + n
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                g = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var j = 0; j < g; j++) {
                this.preRenderedChunks[j] = [];
                for (var n = 0; n < d; n++) this.preRenderedChunks[j][n] = this.preRenderChunk(n, j, n == d - 1 ? b - n * this.chunkSize : this.chunkSize, j == g - 1 ?
                    c - j * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, g) {
            var j = d / this.tilesize / ig.system.scale + 1,
                n = g / this.tilesize / ig.system.scale + 1,
                y = b * this.chunkSize / ig.system.scale % this.tilesize,
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var z = ig.$new("canvas");
            z.width = d;
            z.height = g;
            z.retinaResolutionEnabled = !1;
            g = z.getContext("2d");
            ig.System.scaleMode(z, g);
            d = ig.system.context;
            ig.system.context = g;
            for (g = 0; g < j; g++)
                for (var A = 0; A < n; A++)
                    if (g + b < this.width && A + c < this.height) {
                        var B = this.data[A + c][g + b];
                        B && this.tiles.drawTile(g * this.tilesize - y, A * this.tilesize - r, B - 1, this.tilesize)
                    }
            ig.system.context = d;
            return z
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                g = Math.max(Math.floor(c / this.chunkSize), 0),
                j = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                n = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                y = this.preRenderedChunks[0].length,
                r = this.preRenderedChunks.length;
            this.repeat || (j = Math.min(j, y), n = Math.min(n, r));
            for (var z = 0; g < n; g++) {
                for (var A = 0, B = d; B < j; B++) {
                    var l = this.preRenderedChunks[g % r][B % y],
                        p = -b + B * this.chunkSize - A,
                        t = -c + g * this.chunkSize - z;
                    ig.system.context.drawImage(l, p, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(p, t, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && p + l.width < ig.system.realWidth && (A += this.chunkSize - l.width, j++)
                }
                this.repeat && l.height < this.chunkSize && t + l.height < ig.system.realHeight && (z += this.chunkSize - l.height, n++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                g = (this.scroll.y / this.tilesize).toInt(), j = this.scroll.x % this.tilesize, n = this.scroll.y % this.tilesize, y = -j - this.tilesize, j = ig.system.width + this.tilesize - j, r = ig.system.height + this.tilesize - n, z = -1, n = -n - this.tilesize; n < r; z++, n += this.tilesize) {
                var A = z + g;
                if (A >= this.height || 0 > A) {
                    if (!this.repeat) continue;
                    A = (A % this.height + this.height) % this.height
                }
                for (var B = -1, l = y; l < j; B++, l += this.tilesize) {
                    b = B + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[A][b])(c = this.anims[b -
                        1]) ? c.draw(l, n) : this.tiles.drawTile(l, n, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var g = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    g.anims = this.backgroundAnims[d.tilesetName] || {};
                    g.repeat = d.repeat;
                    g.distance = d.distance;
                    g.foreground = !!d.foreground;
                    g.preRender = !!d.preRender;
                    g.name = d.name;
                    this.backgroundMaps.push(g)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var g = this.entities[d];
                g instanceof b && !g._killed && c.push(g)
            }
            return c
        },
        spawnEntity: function(b, c, d, g) {
            var j = "string" === typeof b ? ig.global[b] : b;
            if (!j) throw "Can't spawn entity of type " + b;
            b = new j(c, d, g || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var g = {}, j = Math.floor(d.pos.y / this.cellSize), n = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, y = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < n; r++)
                        for (var z = j; z < y; z++)
                            if (b[r])
                                if (b[r][z]) {
                                    for (var A = b[r][z], B = 0; B < A.length; B++) d.touches(A[B]) && !g[A[B].id] && (g[A[B].id] = !0, ig.Entity.checkPair(d, A[B]));
                                    A.push(d)
                                } else b[r][z] = [d];
                else b[r] = {}, b[r][z] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bgIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/logo.png"),
        planeIm: new ig.Image("media/graphics/sprites/home-plane.png"),
        scarfIm: new ig.Image("media/graphics/sprites/home-scarf.png"),
        fanIm: new ig.Image("media/graphics/sprites/fan.png"),
        miniIm: new ig.Image("media/graphics/sprites/miniplane.png"),
        count: 0,
        init: function(b,
            c) {
            this.parent(b, c);
            ig.ua.mobile
            // && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
            this.ctx = ig.system.context;
            this.plane = {
                x: 158,
                task: "none",
                y: 150,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.02,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.logo = {
                scX: 1,
                scY: 1,
                twn: !1
            };
            this.scarf = {
                x: -40,
                task: "none",
                y: -37,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.fan = {
                x: 65,
                task: "none",
                y: -6,
                sc: 1,
                oriSc: 0.9,
                offX: [0, 0, 0, 0, 0],
                offY: [0, 1, 3, 3, 1],
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            }
        },
        textSet: function(b, c, d) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.font = c + "px tex";
            b.fillStyle = d
        },
        textDraw: function(b,
            c, d, g, j, n) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.save();
            var y = b.measureText("M").width * d;
            b.translate(j, n + y);
            b.scale(c, d);
            b.fillText(g, 0, 0);
            b.restore()
        },
        tinyTween: function(b, c, d) {
            if (b > c) return b -= d, b < c && (b = c), b;
            if (b < c) return b += d, b > c && (b = c), b;
            if (b == c) return b
        },
        tweenHolder: function(b, c, d, g) {
            !1 == this[b.targ][b.bol] ? (this[b.targ][b.inner] = this.tinyTween(this[b.targ][b.inner], c, g), this[b.targ][b.inner] == c && (this[b.targ][b.bol] = !0)) : (this[b.targ][b.inner] = this.tinyTween(this[b.targ][b.inner],
                d, g), this[b.targ][b.inner] == d && (this[b.targ][b.bol] = !1))
        },
        drawer: function(b, c, d, g, j, n, y, r, z, A, B, l, p, t) {
            try {
                var x = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
                null == p && (p = 0);
                null == t && (t = 0);
                null == r && (r = 1);
                null == z && (z = 1);
                null == B && (B = 1);
                var L = c.width / d * (j % d),
                    H = c.height / g * Math.floor(j / d),
                    E = c.width / d,
                    N = c.height / g,
                    F = c.width / d * r,
                    K = c.height / g * z;
                null == l || 0 == l ? (n = A ? n - F / 2 + p : n + p, y = A ? y - K / 2 + t : y + t, 0 < E && 0 < N && (x.globalAlpha = B, x.drawImage(c.data, L, H, E, N, n, y, F, K), x.globalAlpha = 1)) : (p = A ? -E / 2 + p : p || 0, t = A ? -N /
                    2 + t : t || 0, 0 < E && 0 < N && (x.save(), x.translate(n, y), x.scale(r, z), x.rotate(2 * Math.PI / 360 * l), x.globalAlpha = B, x.drawImage(c.data, L, H, E, N, p, t, E, N), x.restore()))
            } catch (O) {
                console.log(c)
            }
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()",
                100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            this.bgIm.draw(0, 0);
            1 < this.count ? (this.count = 0, this.plane.frame = (this.plane.frame + 1) % this.plane.frames.length, this.scarf.frame = (this.scarf.frame + 1) % this.scarf.frames.length, this.fan.frame = (this.fan.frame + 1) % this.fan.frames.length) :
                this.count++;
            this.tweenHolder({
                targ: "logo",
                inner: "scX",
                bol: "twn"
            }, 1, 0.98, 8E-4);
            this.tweenHolder({
                targ: "logo",
                inner: "scY",
                bol: "twn"
            }, 0.9, 0.98, 8E-4);
            this.drawer("game", this.logoIm, 1, 1, 0, 330, 230, this.logo.scX, this.logo.scY, !0);
            this.drawer("game", this.planeIm, 2, 2, this.plane.frames[this.plane.frame], this.plane.x, this.plane.y, this.plane.sc, this.plane.sc, !0);
            this.drawer("game", this.scarfIm, 6, 1, this.scarf.frames[this.scarf.frame], this.plane.x + this.scarf.x, this.plane.y + this.scarf.y + this.fan.offY[this.plane.frame],
                this.scarf.sc, this.scarf.sc, !0);
            this.drawer("game", this.fanIm, 4, 1, this.fan.frames[this.fan.frame], this.plane.x + this.fan.x, this.plane.y + this.fan.y + this.fan.offY[this.plane.frame], this.fan.sc, this.fan.sc, !0);
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(190, 384, 290, 18);
            this.ctx.fillStyle = "#c90d1e";
            this.ctx.fillRect(193, 387, 290 * this._drawStatus, 12);
            this.ctx.fillStyle = "#da1d2e";
            this.ctx.fillRect(193, 387, 290 * this._drawStatus, 6);
            this.ctx.fillStyle = "#f34947";
            this.ctx.fillRect(193, 387, 290 * this._drawStatus,
                2);
            this.drawer("game", this.miniIm, 4, 1, 3, 190 + 290 * this._drawStatus, 397, 0.8, 0.8, !0);
            this.textSet("game", 35, "white");
            this.textDraw("game", 1.3, 1.5, "loading", -230, -290)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, g) {
        var j = {},
            n = {},
            y = {},
            r = 0,
            z = !1,
            A = !1,
            B = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, g);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            B = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, g) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (g[b] = d[b]);
            else
                for (subprop in d[b]) g[b] || (g[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], g[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            r = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            A = !0;
            z = new ig.Timer;
            for (var d in c) this.initEnd(d, c, n);
            for (d in n) this.initStart(d, n, b, j), this.initDelta(d, y, b, n)
        };
        this.initDelta = function(b, c, d, g) {
            if ("object" !== typeof g[b]) c[b] = g[b] - d[b];
            else
                for (subprop in g[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], g[b])
        };
        this.propUpdate = function(b, c, d, g, j) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + g[b] * j : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], g[b], j)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!A) return !1;
            if (this.delay) {
                if (z.delta() < this.delay) return;
                this.delay = 0;
                z.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (z.delta() + r) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in y) this.propUpdate(property, b, j, y, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    B && B.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in j) this.propSet(property, j, b);
                    r = 0;
                    z.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, n);
                    ig.merge(d, j);
                    ig.merge(j, c);
                    ig.merge(n, d);
                    for (property in n) this.initDelta(property, y, b, n);
                    r = 0;
                    z.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            r += z.delta()
        };
        this.resume = function() {
            this.paused = !1;
            z.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                g = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            g || (g = 0.3);
            !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            g = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        g || (g = 0.3);
        !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / g) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            g = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        g || (g = 0.3);
        !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/bgm.mp3", "media/audio/bgm.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 13,
                        loop: !0
                    }
                },
                timeout: 1E3
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" ===
                typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c, d) {
            var g = this.size.x,
                j = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            null ==
                d && (this.pos.x += (g - this.size.x) / 2, this.pos.y += (j - this.size.y) / 2)
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, g) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * n);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height", this.size.y * n)
            } else n = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(n, y), $("#" + j.id).css("left", n + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" + j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            g ? $("#" + j.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + j.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle =
                "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (g) {
                    console.log(g)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, g) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * n);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height", this.size.y * n)
            } else n = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(n, y), $("#" + j.id).css("left", n + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" + j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            g ? $("#" + j.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + j.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 62,
            y: 45
        },
        zIndex: 750,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill())
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, g) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * n);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height", this.size.y * n)
            } else n = document.getElementById("game").offsetLeft, y = document.getElementById("game").offsetTop, $("#" + j.id).css("left", n + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" +
                j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            g ? $("#" + j.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + j.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y =
                this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var g = 0, j = 1; 48 >= j; j += 1) b.lineTo(0 + 800 * Math.cos(2 * j * Math.PI / 48), 0 + 800 * Math.sin(2 * j * Math.PI / 48)), g++, 2 == g && (g = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex,
                b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, g) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("width", this.size.x * multiplier);
            $("#" + j.id).css("height", this.size.y * multiplier);
            $("#" + j.id).css("position", "absolute");
            var n = w / 2 - destW / 2,
                y = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + j.id).css("left", this.pos.x), $("#" + j.id).css("top", this.pos.y)) : ($("#" + j.id).css("left", n + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier));
            g ? $("#" + j.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + j.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + j.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + j.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain").requires("impact.entity").defines(function() {
    EntityPlain = ig.Entity.extend({
        redraw: !1,
        clearColor: null,
        tweening: !1,
        which: 0,
        base: {
            x: 240,
            y: 0,
            sc: 1,
            oriSc: 1,
            scX: 1,
            scY: 1,
            alp: 1,
            rot: 0,
            textSize: 26,
            tweening: !1,
            frameCount: 0,
            frameTime: 1,
            frame: 0,
            frameX: 1,
            frameY: 1,
            frames: [0],
            tFrame: 1,
            loop: !1,
            ended: !1,
            cent: !0
        },
        stay: [],
        size: {
            x: 50,
            y: 50
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.ctx = ig.system.context)
        },
        ready: function() {
            this.parent();
            this.main = ig.game.getEntitiesByType(EntityPlainGame)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.sky = ig.game.getEntitiesByType(EntityPlainSky)[0];
            this.ground = ig.game.getEntitiesByType(EntityPlainGround)[0];
            this.tree = ig.game.getEntitiesByType(EntityPlainTree)[0];
            this.plane = ig.game.getEntitiesByType(EntityPlainPlane)[0];
            this.puffer = ig.game.getEntitiesByType(EntityPlainPuffer)[0];
            this.gui = ig.game.getEntitiesByType(EntityPlainGui)[0];
            this.gameBut = ig.game.getEntitiesByType(EntityPlainGameBut)
        },
        update: function() {
            this.parent()
        },
        soundLooper: function(b) {
            null ==
                this[this.sLoop[b].id + "sTimer"] && (this[this.sLoop[b].id + "sTimer"] = new ig.Timer, this[this.sLoop[b].id + "sTime"] = this.sLoop[b].duration, this.sounder(b));
            this[this.sLoop[b].id + "sTimer"].delta() > this[this.sLoop[b].id + "sTime"] && (this[b + "sTimer"].reset(), this.sounder(b))
        },
        soundLoopReset: function(b) {
            this[b + "sTimer"].reset()
        },
        sounder: function(b) {
            try {
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID[b])
            } catch (c) {
                console.log(c)
            }
        },
        pointXY: function() {
            this.pos.x = this.pointer.pos.x;
            this.pos.y = this.pointer.pos.y;
            console.log(this.pos.x, this.pos.y)
        },
        resetFrame: function(b) {
            this[b].ended = !1;
            this[b].frame = 0
        },
        runFrame: function(b) {
            !0 != this[b].ended && (!1 == this[b].loop && this[b].frame == this[b].frames.length - 1 ? (this[b].ended = !0, this.done(b)) : 1 < this[b].frames.length && this[b].frameTimer.delta() > this[b].frameTime && (this[b].frameTimer.reset(), this[b].frame = (this[b].frame + 1) % this[b].frames.length))
        },
        tweener: function(b, c, d, g, j) {
            var n = {};
            n[b] = c;
            null == j && (j = 0);
            null == g && (g = "none");
            this.tween("this" == b ? c : n, d, {
                delay: j,
                targ: b,
                seq: g,
                onComplete: function() {
                    null != g && this.tweenF(g, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        tweener2: function(b, c, d, g, j) {
            var n = {};
            n[b] = c;
            null == j && (j = 0);
            null == g && (g = "none");
            this.tween("this" == b ? c : n, d, {
                delay: j,
                targ: b,
                seq: g,
                onComplete: function() {
                    null != g && this.tweenF(g, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseIn
            }).start()
        },
        lookAt: function(b, c) {
            return Math.atan2(c.y + c.size.y / 2 - (b.y + this.size.y / 2), c.x + c.size.x / 2 - (b.x + this.size.x / 2))
        },
        sizer: function(b, c, d, g, j, n, y, r) {
            this.size.x =
                b.width / c * this.base.oriSc + (y || 0);
            this.size.y = b.height / d * this.base.oriSc + (r || 0);
            !0 == n ? (this.pos.x = g - this.size.x / 2, this.pos.y = j - this.size.y / 2) : (this.pos.x = g, this.pos.y = j)
        },
        pauseT: function() {
            this.pauseTweens()
        },
        unpauseT: function() {
            this.resumeTweens()
        },
        unpause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].unpause();
            this.unpauseT()
        },
        pause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].pause();
            this.pauseT()
        },
        tinyTween: function(b, c, d) {
            if (b > c) return b -=
                d, b < c && (b = c), b;
            if (b < c) return b += d, b > c && (b = c), b;
            if (b == c) return b
        },
        clearBg: function() {
            ig.system.bgcontext.clearRect(0, 0, ig.system.width, ig.system.height);
            ig.game.redrawEntities()
        },
        timitizer: function(b) {
            var c = {};
            c.secs = Math.floor(b);
            c.Millis = Math.floor(100 * b);
            c.ms = String(c.Millis % 100);
            c.s = String(c.secs % 60);
            c.m = String(Math.floor(c.secs / 60));
            c.s = 0 == c.s.length ? "00" : 1 == c.s.length ? "0" + c.s : Number(c.s) % 60;
            0 == c.m.length ? c.m = "00" : 1 == c.m.length && (c.m = "0" + c.m);
            0 == c.ms.length ? c.ms = "00" : 1 == c.ms.length && (c.ms = "0" +
                c.ms);
            c.tx = c.m + ":" + c.s + "." + c.ms;
            return c
        },
        centDraw: function(b, c, d, g) {
            this.drawer("game", b, 1, 1, 0, c, d, g, g, !0)
        },
        drawer: function(b, c, d, g, j, n, y, r, z, A, B, l, p, t) {
            try {
                var x = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
                null == p && (p = 0);
                null == t && (t = 0);
                null == r && (r = 1);
                null == z && (z = 1);
                null == B && (B = 1);
                var L = c.width / d * (j % d),
                    H = c.height / g * Math.floor(j / d),
                    E = c.width / d,
                    N = c.height / g,
                    F = c.width / d * r,
                    K = c.height / g * z;
                null == l || 0 == l ? (n = A ? n - F / 2 + p : n + p, y = A ? y - K / 2 + t : y + t, 0 < E && 0 < N && (x.globalAlpha = B, x.drawImage(c.data, L, H, E,
                    N, n, y, F, K), x.globalAlpha = 1)) : (p = A ? -E / 2 + p : p || 0, t = A ? -N / 2 + t : t || 0, 0 < E && 0 < N && (x.save(), x.translate(n, y), x.scale(r, z), x.rotate(2 * Math.PI / 360 * l), x.globalAlpha = B, x.drawImage(c.data, L, H, E, N, p, t, E, N), x.restore()))
            } catch (O) {
                console.log(c)
            }
        },
        drawerOld: function(b, c, d, g, j, n, y, r, z, A, B) {
            var l = ig.system.context;
            A = A || 0;
            B = B || 0;
            null == n && (n = 1);
            null == y && (y = 1);
            null == r && (r = 1);
            if (null != z) {
                d *= b.width / c;
                var p = b.width / c,
                    t = b.height;
                c = b.width / c * n;
                var x = b.height * y;
                l.save();
                l.translate(g, j);
                null != z && l.rotate(2 * Math.PI / 360 * z);
                l.scale(n,
                    y);
                l.globalAlpha = r;
                0 < p && 0 < t && (0 < c && 0 < x) && l.drawImage(b.data, d, 0, p, t, A, B, c, x);
                l.restore()
            }
        },
        textSet: function(b, c, d) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.font = c + "px tex";
            b.fillStyle = d
        },
        textLib: function(b, c, d) {
            d = d || 0;
            this.textDraw("game", _STRINGS.Game[b][3], _STRINGS.Game[b][4], _STRINGS.Game[b][0], (c || 0) + _STRINGS.Game[b][1] - this.ctx.measureText(_STRINGS.Game[b][0]).width / 2 * _STRINGS.Game[b][3], _STRINGS.Game[b][2] + d)
        },
        textLibLeft: function(b, c, d) {
            this.textDraw("game", _STRINGS.Game[b][3],
                _STRINGS.Game[b][4], _STRINGS.Game[b][0], (c || 0) + _STRINGS.Game[b][1], _STRINGS.Game[b][2] + (d || 0))
        },
        textW: function(b) {
            return this.ctx.measureText(b).width
        },
        textDraw: function(b, c, d, g, j, n) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.save();
            var y = b.measureText("M").width * d;
            b.translate(j, n + y);
            b.scale(c, d);
            b.fillText(g, 0, 0);
            b.restore()
        },
        shuffleArray: function(b) {
            for (var c = b.length, d, g; 0 < c;) g = Math.floor(Math.random() * c), c--, d = b[c], b[c] = b[g], b[g] = d;
            return b
        },
        getScore: function(b) {
            if (!this.checkNull(ig.game.storage) &&
                this.supports_local_storage()) switch (b) {
                case "score":
                    ig.game.storage.isSet(ig.game.scoreKey + ig.game.lvl) && void 0 != ig.game.storage.get(ig.game.scoreKey + ig.game.lvl) && (ig.game.rank = ig.game.storage.get(ig.game.scoreKey + ig.game.lvl));
                    break;
                case "tut":
                    return ig.game.storage.isSet(ig.game.tutKey) && void 0 != ig.game.storage.get(ig.game.tutKey) ? ig.game.storage.get(ig.game.tutKey) : !1
            } else return !1
        },
        setScore: function(b, c) {
            if (!this.checkNull(ig.game.storage) && this.supports_local_storage()) switch (b) {
                case "score":
                    ig.game.storage.set(ig.game.gameKey, {
                        star: ig.game.star,
                        lvl: ig.game.lvl,
                        mission: ig.game.mission,
                        map: ig.game.map,
                        player: ig.game.player,
                        nextLvl: ig.game.nextLvl,
                        seq: ig.game.seq
                    });
                    break;
                case "score2":
                    ig.game.storage.set(ig.game.gameKey, {
                        star: ig.game.star,
                        lvl: ig.game.lvl,
                        mission: ig.game.mission,
                        map: ig.game.map,
                        player: ig.game.player,
                        nextLvl: ig.game.nextLvl,
                        seq: ig.game.seq
                    });
                    break;
                case "rank":
                    if (ig.game.storage.isSet(ig.game.scoreKey + ig.game.lvl) && void 0 != ig.game.storage.get(ig.game.scoreKey + ig.game.lvl)) {
                        for (var d = ig.game.storage.get(ig.game.scoreKey +
                            ig.game.lvl), g = 0, j = 0; j < d.length; j++) void 0 != d[j] && d[j].score > c && g++;
                        if (0 < g || 4 > d.length) d.push({
                            score: c
                        }), d.sort(function(b, c) {
                            return b.score < c.score ? -1 : b.score > c.score ? 1 : 0
                        }), 3 < d.length && d.splice(3, 1), ig.game.storage.set(ig.game.scoreKey + ig.game.lvl, d)
                    } else d = [], d.push({
                        score: c
                    }), ig.game.storage.set(ig.game.scoreKey + ig.game.lvl, d);
                    break;
                case "tutOn":
                    ig.game.storage.isSet(ig.game.tutKey) && ig.game.storage.get(ig.game.tutKey);
                    ig.game.storage.set(ig.game.tutKey, !0);
                    break;
                case "tutOff":
                    ig.game.storage.isSet(ig.game.tutKey) &&
                        void 0 != ig.game.storage.get(ig.game.tutKey) ? ig.game.storage.set(ig.game.tutKey, !1) : ig.game.storage.set(ig.game.tutKey, !0)
            }
        },
        checkNull: function(b) {
            return null == b || void 0 == b ? !0 : !1
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return !1
            }
        },
        clicked: function() {
            this.click = !0;
            this.release = !1
        },
        released: function() {
            this.click = !1;
            this.release = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home-but").requires("game.entities.plain").defines(function() {
    EntityPlainHomeBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        playIm: new ig.AnimationSheet("media/graphics/sprites/play.png", 173, 123),
        moreIm: new ig.AnimationSheet("media/graphics/sprites/more.png", 62, 45),
        muteIm: new ig.AnimationSheet("media/graphics/sprites/sound.png", 50, 48),
        unmuteIm: new ig.AnimationSheet("media/graphics/sprites/mute.png",
            50, 48),
        tutIm: new ig.AnimationSheet("media/graphics/sprites/tut.png", 48, 47),
        setIm: new ig.AnimationSheet("media/graphics/sprites/setting.png", 44, 48),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(1, 1);
            this.currentAnim = this.anims.idle
        },
        clicked: function() {
            if (!this.locked) {
                this.setScale(0.85, 0.85);
                switch (this.seq) {
                    case 0:
                        ig.game.director.jumpTo(LevelMission);
                        break;
                    case 2:
                        !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2]), ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()) : (ig.soundHandler.mute(), ig.soundHandler.setForceMuted(!0), this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2])), ig.game.storage.set(ig.game.soundKey,
                            ig.soundHandler.muted)
                }
                this.sounder("click")
            }
        },
        oriStat: function() {
            this.setScale(1, 1);
            this.animSheet = this.closeIm;
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x = 245;
                    this.pos.y = 350;
                    this.animSheet = this.playIm;
                    break;
                case 1:
                    this.pos.x = 570;
                    this.pos.y = 423;
                    this.animSheet = this.moreIm;
                    break;
                case 2:
                    this.pos.x = 10;
                    this.pos.y = 10;
                    !0 == ig.soundHandler.muted ? (this.animSheet = this.unmuteIm, this.unmuteAni.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.unmuteAni.select = new ig.Animation(this.unmuteIm,
                        1, [1]), this.unmuteAni.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.animSheet = this.muteIm, this.muteAni.idle = new ig.Animation(this.muteIm, 1, [0]), this.muteAni.select = new ig.Animation(this.muteIm, 1, [1]), this.muteAni.grey = new ig.Animation(this.muteIm, 1, [2]));
                    break;
                case 3:
                    this.pos.x = 586;
                    this.pos.y = 7;
                    this.animSheet = this.tutIm;
                    break;
                case 4:
                    this.pos.x = 586, this.pos.y = 423, this.animSheet = this.setIm
            }
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), 2 == this.seq && !0 == ig.game.changeSound && (ig.game.changeSound = !1, !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm,
                1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2])), this.currentAnim = this.anims.idle), !this.locked && null != this.pointer && (this.pointer.hoveringItem == this && !this.pointer.firstClick) && (this.setScale(1, 1), this.currentAnim = this.anims.select))
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home").requires("game.entities.plain", "game.entities.plain-home-but", "game.entities.button-more-games").defines(function() {
    EntityPlainHome = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        bgIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/logo.png"),
        planeIm: new ig.Image("media/graphics/sprites/home-plane.png"),
        scarfIm: new ig.Image("media/graphics/sprites/home-scarf.png"),
        fanIm: new ig.Image("media/graphics/sprites/fan.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.spawner())
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.base = {
                x: 330,
                task: "none",
                y: 230,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.plane = {
                x: 158,
                task: "none",
                y: 150,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.02,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.scarf = {
                x: -40,
                task: "none",
                y: -37,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.fan = {
                x: 65,
                task: "none",
                y: -6,
                sc: 1,
                oriSc: 0.9,
                offX: [0,
                    0, 0, 0, 0
                ],
                offY: [0, 1, 3, 3, 1],
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            for (var b = 0; 3 > b; b++) ig.game.spawnEntity(EntityPlainHomeBut, -200, -200, {
                main: this,
                seq: b
            });
            _SETTINGS.MoreGames.Enabled && ig.game.spawnEntity(EntityButtonMoreGames, 570, 423, {
                main: this,
                seq: b
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "logo0":
                    this.tweener("base", {
                        scY: 0.9,
                        scX: 1
                    }, 0.6, "logo1");
                    break;
                case "logo1":
                    this.tweener("base", {
                        scY: 0.98,
                        scX: 0.98
                    }, 0.6, "logo0")
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), this.runFrame("plane"), this.runFrame("scarf"), this.runFrame("fan"))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.tweenF("logo0")
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.bgIm.draw(0, 0), this.drawer("game", this.logoIm, 1, 1, 0, this.base.x, this.base.y, this.base.scX, this.base.scY, !0), this.drawer("game",
                this.planeIm, 2, 2, this.plane.frames[this.plane.frame], this.plane.x, this.plane.y, this.plane.sc, this.plane.sc, !0), this.drawer("game", this.scarfIm, 6, 1, this.scarf.frames[this.scarf.frame], this.plane.x + this.scarf.x, this.plane.y + this.scarf.y + this.fan.offY[this.plane.frame], this.scarf.sc, this.scarf.sc, !0), this.drawer("game", this.fanIm, 4, 1, this.fan.frames[this.fan.frame], this.plane.x + this.fan.x, this.plane.y + this.fan.y + this.fan.offY[this.plane.frame], this.fan.sc, this.fan.sc, !0))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.plain-home").defines(function() {
    LevelHome = {
        entities: [{
            type: "EntityPlainHome",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-over-but").requires("game.entities.plain").defines(function() {
    EntityPlainOverBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        playIm: new ig.AnimationSheet("media/graphics/sprites/play.png", 173, 123),
        shopIm: new ig.AnimationSheet("media/graphics/sprites/selectPlane.png", 193.5, 92),
        mapIm: new ig.AnimationSheet("media/graphics/sprites/map.png", 506 / 3, 91),
        muteIm: new ig.AnimationSheet("media/graphics/sprites/sound.png",
            50, 48),
        unmuteIm: new ig.AnimationSheet("media/graphics/sprites/mute.png", 50, 48),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(1, 1);
            this.currentAnim = this.anims.idle
        },
        clicked: function() {
            if (!this.locked) {
                this.setScale(0.85, 0.85);
                switch (this.seq) {
                    case 0:
                        !1 == ig.game.afterFirstPlay ? ig.game.afterFirstPlay = !0 : ig.game.seq = (ig.game.seq + 1) % ig.game.theme.length;
                        ig.game.what =
                            ig.game.theme[ig.game.seq];
                        ig.game.director.jumpTo(LevelGame);
                        break;
                    case 1:
                        ig.game.oriNavi = "over";
                        ig.game.director.jumpTo(LevelShop);
                        break;
                    case 2:
                        !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2]), ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()) : (ig.soundHandler.mute(), ig.soundHandler.setForceMuted(!0), this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]),
                            this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2]));
                        ig.game.storage.set(ig.game.soundKey, ig.soundHandler.muted);
                        break;
                    case 3:
                        ig.game.oriNavi = "over", ig.game.director.jumpTo(LevelMap)
                }
                this.sounder("click")
            }
        },
        oriStat: function() {
            this.setScale(1, 1);
            this.animSheet = this.closeIm;
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x = 245;
                    this.pos.y = 300;
                    this.animSheet = this.playIm;
                    break;
                case 1:
                    this.pos.x = 232;
                    this.pos.y = 389;
                    this.animSheet = this.shopIm;
                    break;
                case 2:
                    this.pos.x = 10;
                    this.pos.y = 10;
                    !0 == ig.soundHandler.muted ? (this.animSheet = this.unmuteIm, this.unmuteAni.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.unmuteAni.select = new ig.Animation(this.unmuteIm, 1, [1]), this.unmuteAni.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.animSheet = this.muteIm, this.muteAni.idle = new ig.Animation(this.muteIm, 1, [0]), this.muteAni.select = new ig.Animation(this.muteIm, 1, [1]), this.muteAni.grey = new ig.Animation(this.muteIm, 1, [2]));
                    break;
                case 3:
                    this.pos.x =
                        0, this.pos.y = 400, this.animSheet = this.mapIm, this.kill()
            }
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height;
            this.oriY = this.pos.y;
            this.pos.y = -700
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), 2 == this.seq && !0 == ig.game.changeSound && (ig.game.changeSound = !1, !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2])), this.currentAnim = this.anims.idle), !0 == this.main.tweening ? this.pos.y = 2 == this.seq ? this.main.offY + this.oriY : this.main.offUp + this.oriY : null != this.pointer && this.pointer.hoveringItem == this && !this.pointer.firstClick && (this.setScale(1,
                1), this.currentAnim = this.anims.select))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-over").requires("game.entities.plain", "game.entities.plain-over-but").defines(function() {
    EntityPlainOver = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        offY: -700,
        offX: -700,
        offUp: 700,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        bgIm: new ig.Image("media/graphics/sprites/mission-bg.png"),
        fanIm: new ig.Image("media/graphics/sprites/fan.png"),
        planeIm: new ig.Image("media/graphics/sprites/home-plane.png"),
        scarfIm: new ig.Image("media/graphics/sprites/home-scarf.png"),
        speechIm: new ig.Image("media/graphics/sprites/speech.png"),
        cloudIm0: new ig.Image("media/graphics/sprites/cloud0.png"),
        cloudIm1: new ig.Image("media/graphics/sprites/cloud1.png"),
        cloudIm2: new ig.Image("media/graphics/sprites/cloud2.png"),
        levelIm: new ig.Image("media/graphics/sprites/level.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        sLoop: {
            score: {
                id: "score",
                duration: 0.08
            }
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b,
                c, d), this.oriStat(), this.spawner(), this.starText = ig.game.star, this.nextLvl = 1500 * ig.game.lvl + 150 * ig.game.lvl, this.tweening = !0)
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.cloud = {
                offY: 0
            };
            this.plane = {
                x: 118,
                task: "none",
                y: 290,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.02,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.scarf = {
                x: -40,
                task: "none",
                y: -37,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.fan = {
                x: 65,
                task: "none",
                y: -6,
                sc: 1,
                oriSc: 0.9,
                offX: [0, 0, 0, 0, 0],
                offY: [0, 1, 3, 3, 1],
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            for (var b = 0; 4 > b; b++) ig.game.spawnEntity(EntityPlainOverBut, -200, -200, {
                main: this,
                seq: b
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "cloud0":
                    this.tweener("cloud", {
                        offY: 5
                    }, 0.5, "cloud1");
                    break;
                case "cloud1":
                    this.tweener("cloud", {
                        offY: 0
                    }, 0.5, "cloud0");
                    break;
                case "starText1":
                    this.starText != ig.game.storage.get(ig.game.gameKey).star &&
                        (this.scoreTweening = !0, this.tweener("this", {
                            starText: ig.game.storage.get(ig.game.gameKey).star
                        }, 0.5, "starText2"));
                    break;
                case "starText2":
                    this.scoreTweening = !1;
                    this.starText != ig.game.storage.get(ig.game.gameKey).star && (ig.game.star = ig.game.storage.get(ig.game.gameKey).star);
                    break;
                case "textDown1":
                    this.tweening = !0;
                    this.tweener("this", {
                        offY: 0
                    }, 0.4, "textDown3");
                    break;
                case "textDown3":
                    this.tweenF("planeIn0");
                    this.tweenF("starText1");
                    break;
                case "planeIn0":
                    this.tweener("this", {
                        offX: 0
                    }, 0.5, "buttonUp0");
                    break;
                case "planeIn1":
                    this.tweener("this", {
                        offX: 0
                    }, 0.3);
                    this.tweenF("buttonUp0");
                    break;
                case "buttonUp0":
                    this.tweener("this", {
                        offUp: 0
                    }, 0.4, "buttonUp1");
                    break;
                case "buttonUp1":
                    this.tweening = !1
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), !0 == this.scoreTweening && this.soundLooper("score"), this.runFrame("plane"), this.runFrame("scarf"), this.runFrame("fan"))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.tweenF("cloud0");
            this.tweenF("starText1");
            this.tweenF("textDown1")
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.bgIm.draw(0, 0), this.cloudIm2.draw(48, 79 + this.cloud.offY), this.cloudIm1.draw(427, 81 + this.cloud.offY), this.cloudIm0.draw(439, 253 + this.cloud.offY), this.drawer("game", this.planeIm, 2, 2, this.plane.frames[this.plane.frame], this.plane.x + this.offX, this.plane.y, this.plane.sc, this.plane.sc, !0), this.drawer("game", this.scarfIm, 6, 1, this.scarf.frames[this.scarf.frame], this.plane.x + this.scarf.x + this.offX, this.plane.y + this.scarf.y + this.fan.offY[this.plane.frame], this.scarf.sc,
                this.scarf.sc, !0), this.drawer("game", this.fanIm, 4, 1, this.fan.frames[this.fan.frame], this.plane.x + this.fan.x + this.offX, this.plane.y + this.fan.y + this.fan.offY[this.plane.frame], this.fan.sc, this.fan.sc, !0), this.levelIm.draw(327 - this.levelIm.width / 2, 273 + this.offY - 60), this.drawer("game", this.starIm, 1, 1, 0, 320 - 1.3 * (this.ctx.measureText(Math.floor(this.starText)).width / 2) - 15 + 16, 168 + this.offY - 5 - 60, 0.9, 0.9, !0), this.textSet("game", 35, "white"), this.ctx.fillStyle = "#661408", this.textDraw("game", 0.9, 1, ig.game.lvl,
                326 - 0.9 * (this.ctx.measureText(ig.game.lvl).width / 2) + 2, 305 + this.offY - 60), this.ctx.fillStyle = "white", this.textDraw("game", 0.9, 1, ig.game.lvl, 326 - 0.9 * (this.ctx.measureText(ig.game.lvl).width / 2), 303 + this.offY - 60), this.ctx.fillStyle = "#10527B", this.textDraw("game", 1.2, 1.3, Math.floor(this.starText), 346 - 1.2 * (this.ctx.measureText(Math.floor(this.starText)).width / 2) + 3, 167 + this.offY - 5 - 60), this.ctx.fillStyle = "white", this.textDraw("game", 1.2, 1.3, Math.floor(this.starText), 346 - 1.2 * (this.ctx.measureText(Math.floor(this.starText)).width /
                2), 164 + this.offY - 5 - 60), this.ctx.fillStyle = "#10527B", this.textDraw("game", _STRINGS.Game.newLevel[3], _STRINGS.Game.newLevel[4], _STRINGS.Game.newLevel[0], _STRINGS.Game.newLevel[1] - 1.1 * (this.ctx.measureText(_STRINGS.Game.newLevel[0]).width / 2) + 3, _STRINGS.Game.newLevel[2] + 3 + this.offY - 60), this.ctx.fillStyle = "white", this.textDraw("game", _STRINGS.Game.newLevel[3], _STRINGS.Game.newLevel[4], _STRINGS.Game.newLevel[0], _STRINGS.Game.newLevel[1] - 1.1 * (this.ctx.measureText(_STRINGS.Game.newLevel[0]).width / 2), _STRINGS.Game.newLevel[2] +
                this.offY - 60))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.over").requires("impact.image", "game.entities.plain-over").defines(function() {
    LevelOver = {
        entities: [{
            type: "EntityPlainOver",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-mission-but").requires("game.entities.plain").defines(function() {
    EntityPlainMissionBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        playIm: new ig.AnimationSheet("media/graphics/sprites/play.png", 173, 123),
        shopIm: new ig.AnimationSheet("media/graphics/sprites/selectPlane.png", 193.5, 92),
        mapIm: new ig.AnimationSheet("media/graphics/sprites/map.png", 506 / 3, 91),
        muteIm: new ig.AnimationSheet("media/graphics/sprites/sound.png",
            50, 48),
        unmuteIm: new ig.AnimationSheet("media/graphics/sprites/mute.png", 50, 48),
        homeIm: new ig.AnimationSheet("media/graphics/sprites/home.png", 132, 86),
        retryIm: new ig.AnimationSheet("media/graphics/sprites/retry.png", 403 / 3 - 1, 85),
        bookIm: new ig.AnimationSheet("media/graphics/sprites/bookbut.png", 460 / 3, 88),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(1, 1);
            this.currentAnim =
                this.anims.idle
        },
        clicked: function() {
            if (!this.locked) {
                this.setScale(0.85, 0.85);
                switch (this.seq) {
                    case 0:
                        !1 == ig.game.afterFirstPlay ? ig.game.afterFirstPlay = !0 : ig.game.seq = (ig.game.seq + 1) % ig.game.theme.length;
                        ig.game.what = ig.game.theme[ig.game.seq];
                        ig.game.director.jumpTo(LevelGame);
                        break;
                    case 1:
                        ig.game.oriNavi = "mission";
                        ig.game.director.jumpTo(LevelShop);
                        break;
                    case 2:
                        !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey =
                            new ig.Animation(this.muteIm, 1, [2]), ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()) : (ig.soundHandler.mute(), ig.soundHandler.setForceMuted(!0), this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2]));
                        ig.game.storage.set(ig.game.soundKey, ig.soundHandler.muted);
                        break;
                    case 3:
                        ig.game.oriNavi = "mission";
                        ig.game.director.jumpTo(LevelMap);
                        break;
                    case 4:
                        ig.game.director.jumpTo(LevelHome);
                        break;
                    case 5:
                        ig.game.oriNavi = "mission";
                        ig.game.director.jumpTo(LevelBook);
                        break;
                    case 6:
                        ig.game.director.jumpTo(LevelGame)
                }
                this.sounder("click")
            }
        },
        oriStat: function() {
            this.setScale(1, 1);
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x = 242;
                    this.pos.y = 280;
                    this.animSheet = this.playIm;
                    break;
                case 1:
                    this.pos.x = 232;
                    this.pos.y = 369;
                    this.animSheet = this.shopIm;
                    break;
                case 2:
                    this.pos.x = 10;
                    this.pos.y = 10;
                    !0 == ig.soundHandler.muted ? (this.animSheet = this.unmuteIm, this.unmuteAni.idle = new ig.Animation(this.unmuteIm,
                        1, [0]), this.unmuteAni.select = new ig.Animation(this.unmuteIm, 1, [1]), this.unmuteAni.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.animSheet = this.muteIm, this.muteAni.idle = new ig.Animation(this.muteIm, 1, [0]), this.muteAni.select = new ig.Animation(this.muteIm, 1, [1]), this.muteAni.grey = new ig.Animation(this.muteIm, 1, [2]));
                    break;
                case 3:
                    this.pos.x = 0;
                    this.pos.y = 400;
                    this.animSheet = this.mapIm;
                    this.kill();
                    break;
                case 4:
                    this.pos.x = !1 == ig.game.afterFirstPlay ? 180 : 125;
                    this.pos.y = 162;
                    this.animSheet = this.homeIm;
                    break;
                case 5:
                    this.pos.x = !1 == ig.game.afterFirstPlay ? 320 - this.bookIm.width / 2 * this.scale.x + 55 : 320 - this.bookIm.width / 2 * this.scale.x;
                    this.pos.y = 160;
                    this.animSheet = this.bookIm;
                    ig.game.oriNavi = "mission";
                    break;
                case 6:
                    this.pos.x = !1 == ig.game.afterFirstPlay ? -376 : 376, this.pos.y = 163, this.animSheet = this.retryIm
            }
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            this.pos.x += 15;
            this.pos.y += 15;
            this.size.x = this.animSheet.width - 30;
            this.size.y = this.animSheet.height -
                30;
            this.offset.x = 15;
            this.offset.y = 15;
            this.oriY = this.pos.y;
            this.pos.y = -700
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), 2 == this.seq && !0 == ig.game.changeSound && (ig.game.changeSound = !1, !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm,
                1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2])), this.currentAnim = this.anims.idle), !0 == this.main.tweening ? this.pos.y = 4 == this.seq || 5 == this.seq || 6 == this.seq || 2 == this.seq ? this.main.offY + this.oriY : this.main.offUp + this.oriY : null != this.pointer && this.pointer.hoveringItem == this && !this.pointer.firstClick && (this.setScale(1, 1), this.currentAnim = this.anims.select))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-mission").requires("game.entities.plain", "game.entities.plain-mission-but").defines(function() {
    EntityPlainMission = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        offY: -700,
        offX: -700,
        offUp: 700,
        starText: 0,
        clue: 0,
        nextLvl: 0,
        ans: 10,
        ques: [],
        bgIm: new ig.Image("media/graphics/sprites/mission-bg.png"),
        fanIm: new ig.Image("media/graphics/sprites/fan.png"),
        planeIm: new ig.Image("media/graphics/sprites/home-plane.png"),
        scarfIm: new ig.Image("media/graphics/sprites/home-scarf.png"),
        speechIm: new ig.Image("media/graphics/sprites/speech.png"),
        cloudIm0: new ig.Image("media/graphics/sprites/cloud0.png"),
        cloudIm1: new ig.Image("media/graphics/sprites/cloud1.png"),
        cloudIm2: new ig.Image("media/graphics/sprites/cloud2.png"),
        levelIm: new ig.Image("media/graphics/sprites/level.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        sLoop: {
            score: {
                id: "score",
                duration: 0.08
            }
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b,
                c, d), this.oriStat(), this.spawner(), this.textSet("game", 35, "white"), _STRINGS.Game.nextlevelNumber[0] = this.nextLvl, _STRINGS.Game.nextlevelNumber[1] = 320 + this.ctx.measureText(_STRINGS.Game.nextlevelMission[0]).width / 2, this.starText = ig.game.star, this.nextLvl = 2500 * ig.game.lvl + 150 * ig.game.lvl, this.tweening = !0)
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.tweening = !0;
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.cloud = {
                offY: 0
            };
            this.plane = {
                x: 126,
                task: "none",
                y: 340,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.02,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.scarf = {
                x: -40,
                task: "none",
                y: -37,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.fan = {
                x: 65,
                task: "none",
                y: -6,
                sc: 1,
                oriSc: 0.9,
                offX: [0, 0, 0, 0, 0],
                offY: [0, 1, 3, 3, 1],
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            for (var b = 0; 7 > b; b++) ig.game.spawnEntity(EntityPlainMissionBut, -200, -200, {
                main: this,
                seq: b
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "cloud0":
                    this.tweener("cloud", {
                        offY: 5
                    }, 0.3, "cloud1");
                    break;
                case "cloud1":
                    this.tweener("cloud", {
                        offY: 0
                    }, 0.3, "cloud0");
                    break;
                case "textDown1":
                    this.tweener("this", {
                        offY: 0
                    }, 0.4, "textDown3");
                    break;
                case "textDown2":
                    this.tweener("this", {
                        offY: 0
                    }, 0.2, "textDown3");
                    break;
                case "textDown3":
                    this.sounder("flip");
                    this.tweenF("planeIn0");
                    this.tweenF("starText1");
                    break;
                case "planeIn0":
                    this.tweener("this", {
                        offX: 0
                    }, 0.5, "buttonUp0");
                    break;
                case "planeIn1":
                    this.tweener("this", {
                            offX: 0
                        },
                        0.3);
                    this.tweenF("buttonUp0");
                    break;
                case "buttonUp0":
                    this.sounder("flip");
                    this.tweener("this", {
                        offUp: 0
                    }, 0.4, "buttonUp1");
                    break;
                case "buttonUp1":
                    this.sounder("flip");
                    this.tweening = !1;
                    break;
                case "starText1":
                    this.starText != ig.game.storage.get(ig.game.gameKey).star && (this.scoreTweening = !0, this.tweener("this", {
                        starText: ig.game.storage.get(ig.game.gameKey).star
                    }, 0.5, "starText2"));
                    break;
                case "starText2":
                    this.scoreTweening = !1, this.starText != ig.game.storage.get(ig.game.gameKey).star && (ig.game.star = ig.game.storage.get(ig.game.gameKey).star)
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), !0 == this.scoreTweening && this.soundLooper("score"), this.runFrame("plane"), this.runFrame("scarf"), this.runFrame("fan"))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.tweenF("cloud0");
            this.tweenF("textDown1")
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.textSet("game", 35, "white"), this.bgIm.draw(0, 0), this.drawer("game", this.planeIm, 2, 2, this.plane.frames[this.plane.frame], this.plane.x + this.offX,
                this.plane.y, this.plane.sc, this.plane.sc, !0), this.drawer("game", this.scarfIm, 6, 1, this.scarf.frames[this.scarf.frame], this.plane.x + this.scarf.x + this.offX, this.plane.y + this.scarf.y + this.fan.offY[this.plane.frame], this.scarf.sc, this.scarf.sc, !0), this.drawer("game", this.fanIm, 4, 1, this.fan.frames[this.fan.frame], this.plane.x + this.fan.x + this.offX, this.plane.y + this.fan.y + this.fan.offY[this.plane.frame], this.fan.sc, this.fan.sc, !0), this.ctx.fillStyle = "#242A2D", this.cloudIm2.draw(36, 109 + this.cloud.offY), this.cloudIm1.draw(427,
                60 + this.cloud.offY), this.cloudIm0.draw(480, 250 + this.cloud.offY), this.drawer("game", this.starIm, 1, 1, 0, 320 - 1.3 * (this.ctx.measureText(Math.floor(this.starText)).width / 2) - 32 + 16, 90 + this.offY, 0.9, 0.9, !0), this.ctx.fillStyle = "white", this.textDraw("game", 1.3, 1.5, Math.floor(this.starText), 320 - 1.3 * (this.ctx.measureText(Math.floor(this.starText)).width / 2) + 20, 88 + this.offY), 20 > ig.game.lvl ? (this.ctx.fillStyle = "#14325D", this.textDraw("game", _STRINGS.Game.nextlevelNumber[3], _STRINGS.Game.nextlevelNumber[4], this.nextLvl,
                _STRINGS.Game.nextlevelMission[1] + this.ctx.measureText(_STRINGS.Game.nextlevelMission[0]).width / 2 * _STRINGS.Game.nextlevelMission[3] - this.ctx.measureText(this.nextLvl).width / 2, 135 + this.offY), this.textLib("nextlevelMission", -this.ctx.measureText(this.nextLvl).width / 2 * _STRINGS.Game.nextlevelNumber[3], this.offY)) : (this.ctx.fillStyle = "#14325D", this.textLib("maxLvl", 0, this.offY)))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.mission").requires("impact.image", "game.entities.plain-mission").defines(function() {
    LevelMission = {
        entities: [{
            type: "EntityPlainMission",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-book-but").requires("game.entities.plain").defines(function() {
    EntityPlainBookBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        backIm: new ig.AnimationSheet("media/graphics/sprites/back.png", 42, 55),
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(1, 1);
            this.currentAnim = this.anims.idle
        },
        clicked: function() {
            if (!this.locked) {
                this.setScale(0.85, 0.85);
                switch (ig.game.oriNavi) {
                    case "home":
                        ig.game.director.jumpTo(LevelHome);
                        break;
                    case "over":
                        ig.game.director.jumpTo(LevelOver);
                        break;
                    case "mission":
                        ig.game.director.jumpTo(LevelMission)
                }
                this.sounder("click")
            }
        },
        oriStat: function() {
            this.setScale(1, 1);
            this.animSheet = this.backIm;
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            this.pos.x = 23;
            this.pos.y = 500;
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim =
                this.anims.idle;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), !this.locked && null != this.pointer && (this.pointer.hoveringItem == this && !this.pointer.firstClick) && (this.setScale(1, 1), this.currentAnim = this.anims.select))
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.tweener("pos", {
                y: 416
            }, 0.3, "none", 0.5)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-book").requires("game.entities.plain", "game.entities.plain-book-but").defines(function() {
    EntityPlainBook = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        bgIm: new ig.Image("media/graphics/sprites/bookBg.png"),
        bookIm: new ig.Image("media/graphics/sprites/book.png"),
        wingRIm: new ig.Image("media/graphics/sprites/wing-r.png"),
        wingLIm: new ig.Image("media/graphics/sprites/wing-l.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.spawner(), this.level = ig.game.lvl, this.score = ig.game.star, this.mission = ig.game.mission)
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.title = {
                offY: -100
            };
            this.book = {
                offY: 600,
                line0: 600,
                line1: 600,
                line2: 600,
                starSc: 0,
                starAlp: 0
            };
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainBookBut, -200, -200, {
                main: this,
                seq: 0
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "book0":
                    this.tweener("book", {
                        offY: -50
                    }, 0.3, "book1");
                    break;
                case "book1":
                    this.tweener("book", {
                        offY: 0
                    }, 0.3);
                    this.tweener("book", {
                        line0: 0
                    }, 0.3, "none", 0.1);
                    this.tweener("book", {
                        line1: 0
                    }, 0.3, "none", 0.2);
                    this.tweener("book", {
                            line2: 0
                        },
                        0.3, "none", 0.3);
                    this.tweener("book", {}, 0.8, "book2");
                    break;
                case "book2":
                    this.book.starSc = 4;
                    this.tweener("book", {
                        starSc: 0.5,
                        starAlp: 1
                    }, 0.3, "book3");
                    this.sounder("flip");
                    break;
                case "book3":
                    this.tweener("book", {
                        starSc: 0.8
                    }, 0.3);
                    break;
                case "title0":
                    this.tweener("title", {
                        offY: 50
                    }, 0.3, "title1");
                    break;
                case "title1":
                    this.tweener("title", {
                        offY: 0
                    }, 0.3), this.tweenF("book1")
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.tweenF("title1")
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.bgIm.draw(0, 0), this.bookIm.draw(18, 119 + this.book.offY), this.textSet("game", 35, "white"), this.ctx.fillStyle = "#122149", this.textDraw("game", _STRINGS.Game.logbook[3], _STRINGS.Game.logbook[4], _STRINGS.Game.logbook[0], _STRINGS.Game.logbook[1] + 4 - this.ctx.measureText(_STRINGS.Game.logbook[0]).width / 2 * _STRINGS.Game.logbook[3], _STRINGS.Game.logbook[2] + 5 + this.title.offY), this.ctx.fillStyle = "white", this.textDraw("game", _STRINGS.Game.logbook[3], _STRINGS.Game.logbook[4], _STRINGS.Game.logbook[0],
                _STRINGS.Game.logbook[1] + 4 - this.ctx.measureText(_STRINGS.Game.logbook[0]).width / 2 * _STRINGS.Game.logbook[3], _STRINGS.Game.logbook[2] + this.title.offY), this.wingLIm.draw(302 - this.ctx.measureText(_STRINGS.Game.logbook[0]).width / 2 * _STRINGS.Game.logbook[3] - this.wingLIm.width, 44 + this.title.offY), this.wingRIm.draw(338 + this.ctx.measureText(_STRINGS.Game.logbook[0]).width / 2 * _STRINGS.Game.logbook[3], 44 + this.title.offY), this.ctx.fillStyle = "#242A2D", this.textDraw("game", _STRINGS.Game.pilotLevel[3], _STRINGS.Game.pilotLevel[4],
                _STRINGS.Game.pilotLevel[0], _STRINGS.Game.pilotLevel[1], _STRINGS.Game.pilotLevel[2] - 7 + this.book.line0), this.textDraw("game", _STRINGS.Game.score[3], _STRINGS.Game.score[4], _STRINGS.Game.score[0], _STRINGS.Game.score[1], _STRINGS.Game.score[2] - 7 + this.book.line1), this.textDraw("game", _STRINGS.Game.missions[3], _STRINGS.Game.missions[4], _STRINGS.Game.missions[0], _STRINGS.Game.missions[1], _STRINGS.Game.missions[2] - 7 + this.book.line2), this.textDraw("game", _STRINGS.Game.completed[3], _STRINGS.Game.completed[4],
                _STRINGS.Game.completed[0], _STRINGS.Game.completed[1], _STRINGS.Game.completed[2] - 7 + this.book.line2), this.textDraw("game", _STRINGS.Game.pilotLevel[3] + 0.2, _STRINGS.Game.pilotLevel[4] + 0.2, this.level, 277 - this.ctx.measureText(this.level).width * _STRINGS.Game.pilotLevel[3], 185 + this.book.line0), this.textDraw("game", _STRINGS.Game.pilotLevel[3] + 0.2, _STRINGS.Game.pilotLevel[4] + 0.2, this.score, 277 - this.ctx.measureText(this.score).width * _STRINGS.Game.pilotLevel[3], 243 + this.book.line1), this.textDraw("game", _STRINGS.Game.pilotLevel[3] +
                0.2, _STRINGS.Game.pilotLevel[4] + 0.2, this.mission, 277 - this.ctx.measureText(this.mission).width * _STRINGS.Game.pilotLevel[3], 336 + this.book.line2), this.drawer("game", this.starIm, 1, 1, 0, 277 - this.ctx.measureText(this.score).width * _STRINGS.Game.pilotLevel[3] - 25, 246 + this.book.line1, this.book.starSc, this.book.starSc, !0, this.book.starAlp))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.book").requires("impact.image", "game.entities.plain-book").defines(function() {
    LevelBook = {
        entities: [{
            type: "EntityPlainBook",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-shop-but").requires("game.entities.plain").defines(function() {
    EntityPlainShopBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        textColor: "white",
        leftIm: new ig.AnimationSheet("media/graphics/sprites/arrow-l.png", 194 / 3, 69),
        rightIm: new ig.AnimationSheet("media/graphics/sprites/arrow-r.png", 194 / 3, 69),
        backIm: new ig.AnimationSheet("media/graphics/sprites/back.png", 42, 55),
        buttonIm: new ig.AnimationSheet("media/graphics/sprites/button.png",
            635 / 3, 70),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(0.95, 0.95);
            2 != this.seq && (this.currentAnim = this.anims.idle)
        },
        clicked: function() {
            this.sounder("click");
            if (!this.locked) switch (this.setScale(0.85, 0.85), this.seq) {
                case 0:
                    if (!0 == this.main.tweening) break;
                    this.main.tweenF("left0");
                    break;
                case 1:
                    if (!0 == this.main.tweening) break;
                    this.main.tweenF("right0");
                    break;
                case 2:
                    if (!0 == this.main.tweening) break;
                    if (ig.game.star < Number(this.main.prices[this.main.which])) break;
                    ig.game.player = this.main.which;
                    ig.game.storage.set(ig.game.gameKey, {
                        star: ig.game.star,
                        lvl: ig.game.lvl,
                        mission: ig.game.mission,
                        map: ig.game.map,
                        player: ig.game.player,
                        nextLvl: ig.game.nextLvl,
                        seq: ig.game.seq
                    });
                    break;
                case 3:
                    switch (ig.game.oriNavi) {
                        case "home":
                            ig.game.director.jumpTo(LevelHome);
                            break;
                        case "over":
                            ig.game.director.jumpTo(LevelOver);
                            break;
                        case "mission":
                            ig.game.director.jumpTo(LevelMission)
                    }
            }
        },
        oriStat: function() {
            this.setScale(0.95, 0.95);
            this.animSheet = this.closeIm;
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x = 160 - this.leftIm.width;
                    this.pos.y = 184;
                    this.animSheet = this.leftIm;
                    break;
                case 1:
                    this.pos.x = 480;
                    this.pos.y = 184;
                    this.animSheet = this.rightIm;
                    break;
                case 2:
                    this.pos.x = 213;
                    this.pos.y = 387;
                    this.animSheet = this.buttonIm;
                    break;
                case 3:
                    this.pos.x = 9;
                    this.pos.y = 418;
                    this.animSheet = this.backIm;
                    break;
                case 4:
                    this.pos.x = 8, this.pos.y = 416, this.animSheet = this.setIm
            }
            this.addAnim("idle",
                1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), 2 == this.seq && (ig.game.star < Number(this.main.prices[this.main.which]) ? (this.textColor = "#4E515D", this.currentAnim = this.anims.grey) : (this.textColor = "white", this.currentAnim = this.anims.idle)), !this.locked && null != this.pointer && (this.pointer.hoveringItem ==
                this && !this.pointer.firstClick) && (this.setScale(1, 1), 2 != this.seq && (this.currentAnim = this.anims.select)))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent();
            !ig.global.wm && 2 == this.seq && (this.ctx.fillStyle = this.textColor, ig.game.star < Number(this.main.prices[this.main.which]) ? this.textDraw("game", _STRINGS.Game.notenough[3] * this.scale.x, _STRINGS.Game.notenough[4] * this.scale.y, _STRINGS.Game.notenough[0], this.pos.x + this.size.x /
                2 - this.ctx.measureText(_STRINGS.Game.notenough[0]).width / 2 * _STRINGS.Game.notenough[3] * this.scale.x, this.pos.y + this.size.y / 2 - 5) : this.textDraw("game", _STRINGS.Game.select[3] * this.scale.x, _STRINGS.Game.select[4] * this.scale.y, _STRINGS.Game.select[0], this.pos.x + this.size.x / 2 - this.ctx.measureText(_STRINGS.Game.select[0]).width / 2 * _STRINGS.Game.select[3] * this.scale.x, this.pos.y + this.size.y / 2 - 5))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-shop").requires("game.entities.plain", "game.entities.plain-shop-but").defines(function() {
    EntityPlainShop = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        prices: ["0000", 5E3, 1E4, 15E3],
        bgIm: new ig.Image("media/graphics/sprites/bookBg.png"),
        stageIm: new ig.Image("media/graphics/sprites/stage.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        planeIm0: new ig.Image("media/graphics/sprites/shop0.png"),
        planeIm1: new ig.Image("media/graphics/sprites/shop1.png"),
        planeIm2: new ig.Image("media/graphics/sprites/shop2.png"),
        planeIm3: new ig.Image("media/graphics/sprites/shop3.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.spawner(), ig.game.star = ig.game.storage.get(ig.game.gameKey).star)
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.plane = {
                offX: 0,
                alp: 1
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            for (var b = 0; 4 > b; b++) ig.game.spawnEntity(EntityPlainShopBut, -200, -200, {
                main: this,
                seq: b
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "left0":
                    this.tweening = !0;
                    this.tweener("plane", {
                        offX: -500
                    }, 0.3, "left1");
                    break;
                case "left1":
                    this.which = 0 == this.which ? 3 : this.which -
                        1;
                    this.plane.offX = 500;
                    this.tweener("plane", {
                        offX: 0
                    }, 0.3, "left2");
                    break;
                case "left2":
                    this.tweening = !1;
                    break;
                case "right0":
                    this.tweening = !0;
                    this.tweener("plane", {
                        offX: 500
                    }, 0.3, "right1");
                    break;
                case "right1":
                    this.which = (this.which + 1) % 4;
                    this.plane.offX = -500;
                    this.tweener("plane", {
                        offX: 0
                    }, 0.3, "right2");
                    break;
                case "right2":
                    this.tweening = !1
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.bgIm.draw(0, 0), this.stageIm.draw(163, 240), this.drawer("game", this.starIm, 1, 1, 0, this.plane.offX + 320 - 1 * (this.ctx.measureText(this.prices[this.which]).width / 2) - 32 + 20, 100, 0.8, 0.8, !0), this.drawer("game", this.starIm, 1, 1, 0, 33, 30, 0.6, 0.6, !0), this.textSet("game", 35, "white"), this.textDraw("game", 1, 1.1, this.prices[this.which], this.plane.offX + 320 - 1 * (this.ctx.measureText(this.prices[this.which]).width / 2) + 20, 98), this.textDraw("game", 0.7, 0.8, ig.game.star, 60 - 0.8 * (this.ctx.measureText(ig.game.star).width /
                2) + 20, 29), this.which == ig.game.player && !1 == this.tweening && (this.ctx.fillStyle = "#122149", this.ctx.fillRect(320 - this.ctx.measureText(_STRINGS.Game.selected[0]).width / 2 * _STRINGS.Game.selected[3] - 10, 321, this.ctx.measureText(_STRINGS.Game.selected[0]).width * _STRINGS.Game.selected[3] + 20, 30), this.ctx.fillStyle = "white", this.textLib("selected")), this.drawer("game", this["planeIm" + this.which], 1, 1, 0, this.plane.offX + 320, 309, 1, 1, !1, this.plane.alp, 0, -this["planeIm" + this.which].width / 2, -this["planeIm" + this.which].height))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.shop").requires("impact.image", "game.entities.plain-shop").defines(function() {
    LevelShop = {
        entities: [{
            type: "EntityPlainShop",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-map-but").requires("game.entities.plain").defines(function() {
    EntityPlainMapBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        textColor: "white",
        leftIm: new ig.AnimationSheet("media/graphics/sprites/arrow-l.png", 194 / 3, 69),
        rightIm: new ig.AnimationSheet("media/graphics/sprites/arrow-r.png", 194 / 3, 69),
        backIm: new ig.AnimationSheet("media/graphics/sprites/back.png", 42, 55),
        buttonIm: new ig.AnimationSheet("media/graphics/sprites/button.png",
            635 / 3, 70),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x, this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(0.95, 0.95);
            2 != this.seq && (this.currentAnim = this.anims.idle)
        },
        clicked: function() {
            this.sounder("click");
            if (!this.locked) switch (this.setScale(0.85, 0.85), this.seq) {
                case 0:
                    if (!0 == this.main.tweening) break;
                    this.main.tweenF("left0");
                    break;
                case 1:
                    if (!0 == this.main.tweening) break;
                    this.main.tweenF("right0");
                    break;
                case 2:
                    if (!0 == this.main.tweening) break;
                    if (ig.game.star < Number(this.main.prices[this.main.which])) break;
                    ig.game.map = this.main.which;
                    ig.game.storage.set(ig.game.gameKey, {
                        star: ig.game.star,
                        lvl: ig.game.lvl,
                        mission: ig.game.mission,
                        map: ig.game.map,
                        player: ig.game.player,
                        nextLvl: ig.game.nextLvl,
                        seq: ig.game.seq
                    });
                    break;
                case 3:
                    switch (ig.game.oriNavi) {
                        case "home":
                            ig.game.director.jumpTo(LevelHome);
                            break;
                        case "over":
                            ig.game.director.jumpTo(LevelOver);
                            break;
                        case "mission":
                            ig.game.director.jumpTo(LevelMission)
                    }
            }
        },
        oriStat: function() {
            this.setScale(0.95, 0.95);
            this.animSheet = this.closeIm;
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x = 160 - this.leftIm.width;
                    this.pos.y = 200;
                    this.animSheet = this.leftIm;
                    break;
                case 1:
                    this.pos.x = 480;
                    this.pos.y = 200;
                    this.animSheet = this.rightIm;
                    break;
                case 2:
                    this.pos.x = 213;
                    this.pos.y = 382;
                    this.animSheet = this.buttonIm;
                    break;
                case 3:
                    this.pos.x = 9;
                    this.pos.y = 418;
                    this.animSheet = this.backIm;
                    break;
                case 4:
                    this.pos.x = 8, this.pos.y = 416, this.animSheet = this.setIm
            }
            this.addAnim("idle",
                1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || (this.parent(), 2 == this.seq && (ig.game.star < Number(this.main.prices[this.main.which]) ? (this.textColor = "#4E515D", this.currentAnim = this.anims.grey) : (this.textColor = "white", this.currentAnim = this.anims.idle)), !this.locked && null != this.pointer && (this.pointer.hoveringItem ==
                this && !this.pointer.firstClick) && (this.setScale(1, 1), 2 != this.seq && (this.currentAnim = this.anims.select)))
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent();
            !ig.global.wm && 2 == this.seq && (this.ctx.fillStyle = this.textColor, ig.game.star < Number(this.main.prices[this.main.which]) ? this.textDraw("game", _STRINGS.Game.notenough[3] * this.scale.x, _STRINGS.Game.notenough[4] * this.scale.y, _STRINGS.Game.notenough[0], this.pos.x + this.size.x /
                2 - this.ctx.measureText(_STRINGS.Game.notenough[0]).width / 2 * _STRINGS.Game.notenough[3] * this.scale.x, this.pos.y + this.size.y / 2 - 5) : this.textDraw("game", _STRINGS.Game.selectMap[3] * this.scale.x, _STRINGS.Game.selectMap[4] * this.scale.y, _STRINGS.Game.selectMap[0], this.pos.x + this.size.x / 2 - this.ctx.measureText(_STRINGS.Game.selectMap[0]).width / 2 * _STRINGS.Game.selectMap[3] * this.scale.x, this.pos.y + this.size.y / 2 - 5))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-map").requires("game.entities.plain", "game.entities.plain-map-but").defines(function() {
    EntityPlainMap = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        prices: ["0000", 2500, 5E3, 1E4],
        bgIm: new ig.Image("media/graphics/sprites/bookBg.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        sceneIm0: new ig.Image("media/graphics/sprites/scene0.png"),
        sceneIm1: new ig.Image("media/graphics/sprites/scene1.png"),
        sceneIm2: new ig.Image("media/graphics/sprites/scene2.png"),
        sceneIm3: new ig.Image("media/graphics/sprites/scene3.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.spawner())
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.scene = {
                offX: 0,
                alp: 1
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            for (var b = 0; 4 > b; b++) ig.game.spawnEntity(EntityPlainMapBut, -200, -200, {
                main: this,
                seq: b
            })
        },
        tweenF: function(b) {
            switch (b) {
                case "left0":
                    this.tweening = !0;
                    this.tweener("scene", {
                        offX: -500
                    }, 0.3, "left1");
                    break;
                case "left1":
                    this.which = 0 == this.which ? 3 : this.which - 1;
                    this.scene.offX = 500;
                    this.tweener("scene", {
                        offX: 0
                    }, 0.3, "left2");
                    break;
                case "left2":
                    this.tweening = !1;
                    break;
                case "right0":
                    this.tweening = !0;
                    this.tweener("scene", {
                        offX: 500
                    }, 0.3, "right1");
                    break;
                case "right1":
                    this.which = (this.which + 1) % 4;
                    this.scene.offX = -500;
                    this.tweener("scene", {
                        offX: 0
                    }, 0.3, "right2");
                    break;
                case "right2":
                    this.tweening = !1
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.bgIm.draw(0, 0), this.drawer("game", this["sceneIm" + this.which], 1, 1, 0, this.scene.offX + 320 + 5, 374, 1, 1, !1, this.scene.alp,
                0, -this["sceneIm" + this.which].width / 2, -this["sceneIm" + this.which].height), this.drawer("game", this.starIm, 1, 1, 0, this.scene.offX + 320 - 1 * (this.ctx.measureText(this.prices[this.which]).width / 2) - 32 + 25, 75, 0.8, 0.8, !0), this.drawer("game", this.starIm, 1, 1, 0, 33, 30, 0.6, 0.6, !0), this.textSet("game", 35, "white"), this.textDraw("game", 1, 1.1, this.prices[this.which], this.scene.offX + 320 - 1 * (this.ctx.measureText(this.prices[this.which]).width / 2) + 25, 73), this.textDraw("game", 0.7, 0.8, ig.game.star, 60 - 0.8 * (this.ctx.measureText(ig.game.star).width /
                2) + 20, 29), this.which == ig.game.map && !1 == this.tweening && (this.ctx.fillStyle = "#122149", this.ctx.fillRect(320 - this.ctx.measureText(_STRINGS.Game.selectedMap[0]).width / 2 * _STRINGS.Game.selectedMap[3] - 10, 331, this.ctx.measureText(_STRINGS.Game.selectedMap[0]).width * _STRINGS.Game.selectedMap[3] + 20, 35), this.ctx.fillStyle = "white", this.textLib("selectedMap")))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.map").requires("impact.image", "game.entities.plain-map").defines(function() {
    LevelMap = {
        entities: [{
            type: "EntityPlainMap",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-sky").requires("game.entities.plain").defines(function() {
    EntityPlainSky = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        targL: 0,
        oriSpeed: 5.5,
        speed: 0,
        moveRight: !0,
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        which: 1,
        frame: 1,
        skyColour: ["#86cbf0", "#163066", "#9fdafd", "#f6ea73"],
        groundColour: ["#83c026", "#185356", "#eefbff", "#ffb52c"],
        bgIm0: new ig.Image("media/graphics/sprites/bg0.png"),
        bgIm1: new ig.Image("media/graphics/sprites/bg1.png"),
        bgIm2: new ig.Image("media/graphics/sprites/bg2.png"),
        bgIm3: new ig.Image("media/graphics/sprites/bg3.png"),
        shadeIm0: new ig.Image("media/graphics/sprites/shade0.png"),
        shadeIm1: new ig.Image("media/graphics/sprites/shade1.png"),
        shadeIm2: new ig.Image("media/graphics/sprites/shade2.png"),
        shadeIm3: new ig.Image("media/graphics/sprites/shade3.png"),
        ready: function() {
            this.parent()
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat())
        },
        oriStat: function() {
            this.x0 = 0;
            this.x1 = Math.floor(this.bgIm0.width / 3);
            this.x2 = Math.floor(2 * (this.bgIm0.width / 3));
            this.w = Math.floor(this.bgIm0.width / 3);
            this.base = {
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        tweenF: function() {},
        update: function() {
            if (!ig.global.wm && (this.parent(), !0 != this.main.gameOver && 0 < this.speed && !1 != this.main.clickable))
                for (var b = 0; 3 > b; b++)!0 == this.moveRight ? (this["x" + b] += this.speed, b == this.targL && -50 < this["x" + b] && (this["x" + (b + 2) % 3] = this["x" + b] - this.w, this.targL = (this.targL +
                    2) % 3)) : (b == this.targL && this["x" + (b + 2) % 3] + this.w < this.main.w + 50 && (this["x" + b] = this["x" + (b + 2) % 3] + this.w, this.targL = (this.targL + 1) % 3), this["x" + b] -= this.speed)
        },
        drawInit: function() {},
        draw: function() {
            this.parent();
            this.ctx.fillStyle = this.groundColour[this.main.which];
            this.ctx.fillRect(0, this.bgIm0.height, ig.system.width, ig.system.height - this.bgIm0.height);
            this.ctx.fillStyle = this.skyColour[this.main.which];
            this.ctx.fillRect(0, 0, ig.system.width, this.bgIm0.height);
            if (!ig.global.wm) {
                for (var b = 0; 3 > b; b++) this["x" +
                    b] > -this.w && this["x" + b] + this.w < this.main.w + this.w && this.drawer("game", this["bgIm" + this.main.which], 3, 1, b, this["x" + b], 0);
                this["shadeIm" + this.main.which].draw(0, this.bgIm0.height)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-ground").requires("game.entities.plain").defines(function() {
    EntityPlainGround = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        spawnNew: !0,
        itemPos: 320,
        score: 0,
        clue: 0,
        ans: 10,
        ques: [],
        rocks: [],
        showRing: !1,
        Ypos: [147, 140.0112, 137.25, 135.5028, 134.3328, 134, 147.20550400000002, 161.00297600000002, 173.76918400000005, 187.09990400000004, 200.95270400000004, 212.29078400000006, 224.91430400000007,
            237.2973760000001, 250.14678400000008, 260.6487040000001, 272.3245760000001, 283.7600000000001, 294.9549760000001, 305.27177600000016, 315.3755840000001, 326.48777600000017, 336.1389760000001, 346.16000000000014, 355.3719040000002, 365.4807040000002, 373.69878400000016, 383.3133760000002, 391.63337600000017, 400.73878400000024, 408.12070400000016, 416.7319040000002, 423.70198400000015, 431.3751040000002, 438.80777600000016, 446.4155840000002, 452.5495040000002, 459.6631040000002, 465.3851840000002, 471.6439040000002, 478.0087040000002,
            483.1067840000002, 488.65830400000016, 494.27430400000014, 498.74838400000016, 503.59270400000014, 508.1965760000001, 512.8091840000002, 516.4471040000001, 520.5655040000001, 524.0000000000001, 527.415776, 530.4109760000001, 533.3600000000001, 536.0685760000001, 538.5367040000001, 540.514784, 542.5303039999999, 544.402304, 545.756384, 547.134176, 548.1325760000001, 549.001184, 549.519104, 549.8935039999999, 550
        ],
        startY: [100, 100, 100, 100],
        hitSize: [0.01, 0.04, 0.07, 0.1, 0.12, 0.14, 0.18, 0.15, 0.1, 0.06, 0.01, -0.02, -0.05, 0.01, -0.02, -0.05, -0.1, 0.01],
        rockIm0: new ig.Image("media/graphics/sprites/rock0.png"),
        rockIm1: new ig.Image("media/graphics/sprites/rock1.png"),
        rockIm2: new ig.Image("media/graphics/sprites/rock2.png"),
        rockIm3: new ig.Image("media/graphics/sprites/rock3.png"),
        treeIm0: new ig.Image("media/graphics/sprites/tree0.png"),
        treeIm1: new ig.Image("media/graphics/sprites/tree1.png"),
        treeIm2: new ig.Image("media/graphics/sprites/tree2.png"),
        treeIm3: new ig.Image("media/graphics/sprites/tree3.png"),
        planeIm0: new ig.Image("media/graphics/sprites/plane0.png"),
        planeIm1: new ig.Image("media/graphics/sprites/plane1.png"),
        planeIm2: new ig.Image("media/graphics/sprites/plane2.png"),
        planeIm3: new ig.Image("media/graphics/sprites/plane3.png"),
        planeIm4: new ig.Image("media/graphics/sprites/plane4.png"),
        shadowIm0: new ig.Image("media/graphics/sprites/shadow0.png"),
        shadowIm1: new ig.Image("media/graphics/sprites/shadow0.png"),
        shadowIm2: new ig.Image("media/graphics/sprites/shadow0.png"),
        shadowIm3: new ig.Image("media/graphics/sprites/shadow0.png"),
        targetIm: new ig.Image("media/graphics/sprites/target.png"),
        boomIm: new ig.Image("media/graphics/sprites/kaboom.png"),
        starIm: new ig.Image("media/graphics/sprites/star.png"),
        heartIm: new ig.Image("media/graphics/sprites/heart.png"),
        ufoIm: new ig.Image("media/graphics/sprites/ufo.png"),
        lightIm: new ig.Image("media/graphics/sprites/ufolight.png"),
        shipIm: new ig.Image("media/graphics/sprites/ship.png"),
        frameIm: new ig.Image("media/graphics/sprites/frame.png"),
        balloonIm: new ig.Image("media/graphics/sprites/balloon.png"),
        ringIm: new ig.Image("media/graphics/sprites/ring.png"),
        oilIm: new ig.Image("media/graphics/sprites/oil.png"),
        oilSc: [1, 1.1009777777777778, 1.1527777777777777, 1.1983944444444445, 1.2408000000000001, 1.2799944444444444, 1.3139500000000002, 1.3469111111111112, 1.3766611111111113, 1.401727777777778, 1.4252444444444445, 1.4444444444444446, 1.461727777777778, 1.4758, 1.4866611111111112, 1.4939500000000001, 1.4985777777777778, 1.5, 1.3442666666666665, 1.1792666666666665, 1.041666666666666, 0.9048166666666662, 0.7775999999999994, 0.6666666666666661, 0.564266666666666, 0.47039999999999926,
            0.37499999999999933, 0.29481666666666584, 0.2281499999999994, 0.16334999999999944, 0.11759999999999948, 0.07259999999999955, 0.041666666666666075, 0.018149999999999666, 0.004816666666666691
        ],
        scarfIm: new ig.Image("media/graphics/sprites/scarf.png"),
        treeTall0: [141, 1369, 130, 101, 105, 97, 81, 38, 37],
        treeTall1: [153, 152, 150, 141, 52, 53],
        treeTall2: [119, 156, 165, 157, 157, 583, 48, 31, 59],
        treeTall3: [138, 125, 185, 109, 106, 106, 124, 50],
        treeWidth0: [134, 64, 68, 93, 54, 53, 70, 50, 55],
        treeWidth1: [94, 135, 83, 77, 68, 70],
        treeWidth2: [103, 80, 86,
            145, 80, 78, 56, 47, 85
        ],
        treeWidth3: [99, 101, 111, 106, 86, 32, 111, 51],
        treeVault: [7, 4, 5, 7],
        bigTree: [7, 4, 5, 7],
        treeMaxFrame: [9, 6, 9, 8],
        rockVault: [7, 6, 5, 9],
        smallRock: [4, 5, 3, 5],
        discard: [],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.main = d.main)
        },
        oriStat: function() {
            this.scarf = {
                x: 308,
                y: 74,
                offX: -3,
                offY: 0,
                show: !0,
                frameTime: 0.04,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 6,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.boom = {
                x: 320,
                y: 320,
                show: !1,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 4,
                frameY: 2,
                frames: [0, 1, 2, 3, 4, 5, 6],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.spawnTimer = new ig.Timer;
            this.spawnTime = 1.5;
            this.base = {
                x: 240,
                w: Math.floor(this["rockIm" + this.main.which].width / this.rockVault[this.main.which]),
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            for (var b = 0; 12 > b; b++)
                for (var c = 0; 6 > c; c++) this.rocks.unshift({
                    what: "rock",
                    speed: 0.05,
                    alp: 0,
                    show: !0,
                    which: 3 ==
                        Math.floor(10 * Math.random()) ? Math.floor(Math.random() * this.rockVault[this.main.which]) : Math.floor(Math.random() * this.smallRock[this.main.which]),
                    x: 1 == c % 2 ? 160 * b : 160 * b - 60,
                    startSc: 0,
                    sc: 0.5,
                    percent: c / 6,
                    oriSc: 1,
                    step: 0,
                    scSpeed: 0.01,
                    screenX: 0,
                    x0: 320,
                    y0: this.startY[this.main.which],
                    x1: 320,
                    y1: 190,
                    x2: 640,
                    y2: 550,
                    start: !0
                });
            switch (ig.game.what) {
                case "follow":
                    this.plane.spawnFrame();
                    this.plane.spawnLeaders();
                    this.spawnKnockers("star", 3);
                    this.spawnKnockers("tree", 8);
                    break;
                case "tree":
                    this.spawnKnockers("tree",
                        10 + Math.floor(ig.game.lvl / 5));
                    this.spawnKnockers("star", 3);
                    break;
                case "ufo":
                    this.main.heart = 10;
                    this.spawnKnockers("ufo", 10 + Math.floor(ig.game.lvl / 5));
                    this.spawnKnockers("star", 1);
                    break;
                case "ship":
                    this.main.heart = 10;
                    this.spawnKnockers("ship", 10 + Math.floor(ig.game.lvl / 5));
                    this.spawnKnockers("star", 1);
                    break;
                case "star":
                    this.main.howmany = 160 + 10 * Math.floor(ig.game.lvl / 5);
                    this.gui.tweenF("arrowFlash0");
                    this.spawnKnockers("star", 6);
                    break;
                case "balloon":
                    this.spawnKnockers("balloon", 10 + Math.floor(ig.game.lvl /
                        5));
                    this.spawnKnockers("star", 3);
                    break;
                case "heart":
                    this.spawnKnockers("heart", 15);
                    this.spawnKnockers("tree", 3);
                    break;
                case "oil":
                    this.main.howmany = 25 + 2 * Math.floor(ig.game.lvl / 5);
                    this.spawnKnockers("oil", 20 - Math.floor(ig.game.lvl / 5));
                    this.spawnKnockers("tree", 5);
                    break;
                case "ring":
                    this.main.howmany = 60 + 5 * Math.floor(ig.game.lvl / 5), this.gui.tweenF("arrowFlash0"), this.spawnKnockers("ring", 2)
            }
            this.indexSwap()
        },
        spawnKnockers: function(b, c) {
            this.amount = c;
            switch (b) {
                case "balloon":
                case "ufo":
                case "ship":
                case "tree":
                case "oil":
                    for (var d =
                        0; d < this.amount; d++) this.tempX = -400 + this.main.world.x + Math.floor(Math.random() * (this.main.w + 800)), this.posX = 0, this.posX = 0 > this.tempX ? 3 * this.sky.w + this.tempX : this.tempX > 3 * this.sky.w ? this.tempX % (3 * this.sky.w) : this.tempX, this.tempMoveX = "ufo" == b.what ? -3 + 6 * Math.random() : "balloon" == b.what ? -1 + 2 * Math.random() : "ship" == b.what ? -3 + 3 * Math.random() : 0, this.tempWhich = "tree" == b ? 3 == Math.floor(10 * Math.random()) ? Math.floor(Math.random() * this.treeVault[this.main.which]) : Math.floor(Math.random() * this.bigTree[this.main.which]) :
                        Math.floor(3 * Math.random()), this.rocks.push({
                            seq: d,
                            hitRectW: "tree" == b ? this[b + "Width" + this.main.which][this.tempWhich] : this[b + "Im"].width / 3,
                            hitRectH: "tree" == b ? this[b + "Tall" + this.main.which][this.tempWhich] : this[b + "Im"].height,
                            what: b,
                            alp: 0,
                            show: !0,
                            moveX: this.tempMoveX,
                            which: this.tempWhich,
                            hitted: !1,
                            lightAlp: 1 * Math.random(),
                            lightOn: !1,
                            start: !1,
                            x: this.posX,
                            startSc: 0,
                            sc: 0.5,
                            percent: d / this.amount,
                            oriSc: 1.3,
                            step: 0,
                            scSpeed: 0.01,
                            screenX: 0,
                            x0: 320,
                            y0: this.startY[this.main.which],
                            x1: 320,
                            y1: 190,
                            x2: 640,
                            y2: 550,
                            hitSc: 0.2,
                            hitSizeCount: 0,
                            hitIndex: 0
                        });
                    break;
                case "heart":
                    for (d = 0; d < this.amount; d++) this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 10 : 1 == this.tempSide ? this.tempX = this.itemPos - 20 : 2 == this.tempSide && (this.tempX = this.itemPos), this.itemPos = this.tempX = -400 + this.main.world.x + Math.floor(Math.random() * (this.main.w + 800)), this.posX = 0, this.posX = 0 > this.tempX ? 3 * this.sky.w + this.tempX : this.tempX > 3 * this.sky.w ? this.tempX % (3 * this.sky.w) : this.tempX, this.tempWhich = 0, this.rocks.push({
                        seq: d,
                        hitRectW: this.heartIm.width,
                        hitRectH: this.heartIm.height,
                        what: "heart",
                        alp: 0,
                        show: !0,
                        which: this.tempWhich,
                        hitted: !1,
                        x: this.posX,
                        startSc: 0,
                        sc: 0.5,
                        percent: d / this.amount,
                        start: !1,
                        oriSc: 0.9,
                        step: 0,
                        scSpeed: 0.01,
                        screenX: 0,
                        x0: 320,
                        y0: this.startY[this.main.which],
                        x1: 320,
                        y1: 190,
                        x2: 640,
                        y2: 550,
                        hitSc: 0.2,
                        hitSizeCount: 0,
                        hitIndex: 0
                    });
                    break;
                case "star":
                    for (d = 0; d < this.amount; d++) this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 10 : 1 == this.tempSide ? this.tempX = this.itemPos - 20 : 2 == this.tempSide &&
                        (this.tempX = this.itemPos), this.itemPos = this.tempX, this.posX = 0, this.posX = 0 > this.tempX ? 3 * this.sky.w + this.tempX : this.tempX > 3 * this.sky.w ? this.tempX % (3 * this.sky.w) : this.tempX, this.main.total++, this.tempWhich = 0, this.rocks.push({
                            seq: d,
                            hitRectW: this.heartIm.width,
                            hitRectH: this.heartIm.height,
                            what: "star",
                            straight: "star" == ig.game.what ? !0 : !1,
                            alp: 0,
                            show: !0,
                            which: this.tempWhich,
                            hitted: !1,
                            x: this.posX,
                            startSc: 0,
                            sc: 0.5,
                            percent: d / this.amount,
                            oriSc: 1,
                            step: 0,
                            scSpeed: 0.01,
                            screenX: 0,
                            x0: 320,
                            y0: this.startY[this.main.which] +
                                80,
                            x1: 320,
                            y1: 190,
                            x2: 640,
                            y2: 550,
                            hitSc: 0.2,
                            hitSizeCount: 0,
                            hitIndex: 0,
                            start: !1
                        });
                    break;
                case "ring":
                    for (d = 0; d < this.amount; d++) this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 20 : 1 == this.tempSide ? this.tempX = this.itemPos - 40 : 2 == this.tempSide && (this.tempX = this.itemPos), this.itemPos = this.tempX, this.posX = 0, this.posX = 0 > this.tempX ? 3 * this.sky.w + this.tempX : this.tempX > 3 * this.sky.w ? this.tempX % (3 * this.sky.w) : this.tempX, this.main.total++, this.tempWhich = 0, this.rocks.push({
                        seq: d,
                        hitRectW: this.heartIm.width,
                        hitRectH: this.ringIm.height,
                        what: "ring",
                        alp: 0,
                        show: !0,
                        which: 0,
                        hitted: !1,
                        x: this.posX,
                        startSc: 0,
                        sc: 0.5,
                        percent: d / this.amount,
                        start: !1,
                        oriSc: 1.2,
                        step: 0,
                        scSpeed: 0.01,
                        screenX: 0,
                        x0: 320,
                        y0: this.startY[this.main.which] + 180,
                        x1: 320,
                        y1: 250,
                        x2: 640,
                        y2: 500,
                        hitSc: 0.2,
                        hitSizeCount: 0,
                        hitIndex: 0
                    })
            }
        },
        reGenItem: function(b) {
            ("star" == b.what || "ring" == b.what) && 58 < this.main.gameTimer.delta() || (b.start = !0, b.hitted = !1, b.hitSizeCount = 0, b.hitIndex = 0, b.percent = 0, b.alp = 0, b.startSc = 0, b.step = 0, b.show = !0, b.lightAlp = 1, b.lightOn = !1,
                b.scSpeed = 0.01, "ufo" == b.what ? b.moveX = -3 + 6 * Math.random() : "balloon" == b.what ? b.moveX = -1 + 2 * Math.random() : "ship" == b.what && (b.moveX = -3 + 3 * Math.random()), "ring" == b.what && (b.which = 0, "ring" == ig.game.what && this.main.total++, this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 20 : 1 == this.tempSide ? this.tempX = this.itemPos - 40 : 2 == this.tempSide && (this.tempX = this.itemPos), this.itemPos = this.tempX), "rock" == b.what ? b.which = 3 == Math.floor(10 * Math.random()) ? Math.floor(Math.random() * this.rockVault[this.main.which]) :
                Math.floor(Math.random() * this.smallRock[this.main.which]) : ("tree" == b.what || "oil" == b.what || "heart" == b.what || "ufo" == b.what || "ship" == b.what || "balloon" == b.what ? this.tempX = -400 + this.main.world.x + Math.floor(Math.random() * (this.main.w + 800)) : "star" == b.what ? ("star" == ig.game.what && this.main.total++, !0 == b.straight ? (this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 20 : 1 == this.tempSide && (this.tempX = this.itemPos - 20), this.itemPos = this.tempX) : this.tempX = -400 + this.main.world.x + Math.floor(Math.random() *
                    (this.main.w + 800))) : (this.tempSide = Math.floor(2 * Math.random()), 0 == this.tempSide ? this.tempX = this.itemPos + 20 : 1 == this.tempSide && (this.tempX = this.itemPos - 20), this.itemPos = this.tempX), b.x = 0 > this.tempX ? 3 * this.sky.w + this.tempX : this.tempX > 3 * this.sky.w ? this.tempX % (3 * this.sky.w) : this.tempX), this.indexSwap())
        },
        offsetWorldPos: function(b) {
            b.screenX = this.main.world.x > 3 * this.sky.w - this.main.w ? b.x < this.main.w ? b.x + 3 * this.sky.w - this.main.world.x : b.x - this.main.world.x : 0 > this.main.world.x ? b.x > 3 * this.sky.w - this.main.w ?
                b.x - 3 * this.sky.w - this.main.world.x : b.x - this.main.world.x : b.x - this.main.world.x
        },
        renderPosition: function(b) {
            b.x0 = 100 + 440 * ((b.screenX + this.base.w / 2) / this.main.w);
            b.x1 = -300 + 1240 * ((b.screenX + this.base.w / 2) / this.main.w);
            b.x2 = -700 + 2040 * ((b.screenX + this.base.w / 2) / this.main.w);
            b.finalX = (1 - b.percent) * (1 - b.percent) * b.x0 + 2 * (1 - b.percent) * b.percent * b.x1 + b.percent * b.percent * b.x2;
            this.topPercent = 0.2;
            "ring" == b.what && 100 < b.finalX && 540 > b.finalX && (this.showRing = !0);
            "star" == b.what && 100 < b.finalX && 540 > b.finalX && (this.showRing = !0);
            b.percent < this.topPercent && (b.finalY = (1 - this.topPercent) * (1 - this.topPercent) * b.y0 + 2 * (1 - this.topPercent) * b.percent * b.y1 + this.topPercent * b.percent * b.y2);
            b.finalY = (1 - b.percent) * (1 - b.percent) * b.y0 + 2 * (1 - b.percent) * b.percent * b.y1 + b.percent * b.percent * b.y2;
            "ring" == b.what && (b.finalY *= 0.9)
        },
        fadeAlpha: function(b) {
            0.9 < b.percent ? 0 < b.alp && (b.alp -= 0.08, 0 > b.alp && (b.alp = 0)) : 1 > b.alp && (b.alp += 0.09, 1 < b.alp && (b.alp = 1))
        },
        poofInScale: function(b) {
            b.sc = (0.2 + b.finalY / this.main.h) * b.oriSc;
            "star" != b.what && ("ring" == b.what ?
                b.sc = 0.2 + b.percent * (b.oriSc - 0.2) : "ufo" == b.what ? 0.12 > b.percent && (b.sc = b.percent / 0.12 * (b.sc - 0.2) + 0.2) : "ship" == b.what ? 0.2 > b.percent && (b.sc *= b.percent / 0.2) : "tree" == b.what ? 0.12 > b.percent && (b.sc *= b.percent / 0.12) : 0.12 > b.percent && (b.sc = b.percent / 0.12 * (b.sc - 0.2) + 0.2))
        },
        processHitItem: function(b) {
            if (!1 != b.start && (this.hitPercent = "oil" == b.what ? this.plane.plane.percent + 0.05 : "ring" == b.what ? this.plane.plane.percent + 0.15 : this.plane.plane.percent, "frame" == b.what && (this.plane.frame.which = this.plane.abCheck(b) ? 0 : 1),
                b.percent < this.hitPercent && b.percent > this.hitPercent - 0.1 && this.plane.abCheck(b) && !1 == b.hitted)) switch (this.plane.plane.hitIndex = 0, b.hitted = !0, b.what) {
                case "tree":
                case "balloon":
                case "ufo":
                case "ship":
                    "ufo" == b.what ? this.sounder("ufo") : this.sounder("pillow");
                    "oil" != ig.game.what && "ring" != ig.game.what && "star" != ig.game.what && 0 < this.main.heart && (this.main.heart -= 1, 0 >= this.main.heart && (this.main.preGameOver = !0, this.main.gameOverTimer.reset(), this.main.gameTimer.pause()));
                    this.plane.plane.hitted = !0;
                    this.main.speedRevertTimer.reset();
                    this.main.zSpeed = this.main.hitSpeed;
                    this.boom.x = (b.finalX + 320) / 2;
                    this.boom.show = !0;
                    break;
                case "heart":
                    this.sounder("star");
                    this.main.heart += 1;
                    b.show = !1;
                    !1 == this.puffer.show && this.puffer.reGen(b, "heart");
                    break;
                case "star":
                    this.sounder("star");
                    b.show = !1;
                    this.main.star += 1;
                    this.puffer.reGen(b, "star");
                    break;
                case "ring":
                    this.sounder("star");
                    this.main.ring += 1;
                    b.which = 1;
                    break;
                case "oil":
                    this.sounder("vacuum"), this.gui.tweenF("movePlane"), this.puffer.reGen(b, "oil")
            }
        },
        hittedActions: function(b) {
            !0 == b.hitted &&
                ("oil" == b.what ? (b.hitIndex += 3, b.hitIndex < this.oilSc.length ? b.sc *= this.oilSc[b.hitIndex] : b.show = !1) : "ring" == b.what ? (b.hitIndex < this.hitSize.length - 12 && (b.hitIndex += 1), b.sc += 1.2 * this.hitSize[b.hitIndex], 10 < b.hitIndex && (b.alp -= 0.1, 0 > b.alp && (b.alp = 0))) : (b.hitIndex += 1, b.hitIndex < this.hitSize.length && (b.sc += this.hitSize[b.hitIndex])))
        },
        indexSwap: function() {
            this.rocks.sort(function(b, c) {
                return b.percent < c.percent ? -1 : b.percent > c.percent ? 1 : 0
            })
        },
        tweenF: function() {},
        done: function(b) {
            switch (b) {
                case "boom":
                    this.boom.show = !1, this.boom.ended = !1, this.boom.frame = 0
            }
        },
        behaviors: function(b) {
            switch (b.what) {
                case "balloon":
                case "ship":
                    this.ufoX = b.x + b.moveX;
                    b.x = 0 > this.ufoX ? 3 * this.sky.w + this.ufoX : this.ufoX > 3 * this.sky.w ? this.ufoX % (3 * this.sky.w) : this.ufoX;
                    break;
                case "leader":
                    b.x = this.plane.frame.x + b.leadX;
                    0 > b.x ? b.x += 3 * this.sky.w : b.x > 3 * this.sky.w && (b.x %= 3 * this.sky.w);
                    b.rot = 0 == b.which ? -30 < b.rot ? b.rot - 1 : -30 : 2 == b.which ? 30 > b.rot ? b.rot + 1 : 30 : -0.1 < b.rot && 0.1 > b.rot ? 0 : 0.8 * b.rot;
                    break;
                case "frame":
                    if (b.moveCount.delta() > b.moveTime)
                        if (b.moveCount.reset(),
                            1 == Math.floor(6 * Math.random())) {
                            b.moveTime = 3;
                            for (var c = b.moveX = 0; 3 > c; c++) this.plane["plane" + c].which = 1
                        } else if (b.moveTime = 3 + 3 * Math.random(), b.moveX = -2 + 4 * Math.random(), 0 > b.moveX)
                        for (c = 0; 3 > c; c++) this.plane["plane" + c].which = 0;
                    else if (0 < b.moveX)
                        for (c = 0; 3 > c; c++) this.plane["plane" + c].which = 2;
                    else
                        for (c = 0; 3 > c; c++) this.plane["plane" + c].which = 1;
                    this.ufoX = b.x + b.moveX;
                    b.x = 0 > this.ufoX ? 3 * this.sky.w + this.ufoX : this.ufoX > 3 * this.sky.w ? this.ufoX % (3 * this.sky.w) : this.ufoX;
                    break;
                case "ufo":
                    !0 == b.lightOn ? 1 > b.lightAlp ?
                        (b.lightAlp += 0.014, 1 < b.lightAlp && (b.lightAlp = 1)) : b.lightOn = !1 : 0 < b.lightAlp ? (b.lightAlp -= 0.014, 0 > b.lightAlp && (b.lightAlp = 0)) : b.lightOn = !0, this.ufoX = b.x + b.moveX, b.x = 0 > this.ufoX ? 3 * this.sky.w + this.ufoX : this.ufoX > 3 * this.sky.w ? this.ufoX % (3 * this.sky.w) : this.ufoX
            }
        },
        update: function() {
            if (!ig.global.wm && (this.parent(), this.showRing = !1, this.runFrame("scarf"), !0 == this.boom.show && this.runFrame("boom"), !0 != this.main.gameOver))
                if (!1 == this.main.gameStart)
                    for (var b = 0; b < this.rocks.length; b++) {
                        if ("rock" == this.rocks[b].what &&
                            (this.rocks[b].percent += 0.01 * this.main.zSpeed * ig.system.tick), "player" == this.rocks[b].what || "rock" == this.rocks[b].what) 1 < this.rocks[b].percent && this.reGenItem(this.rocks[b]), this.offsetWorldPos(this.rocks[b]), -100 < this.rocks[b].screenX && 740 > this.rocks[b].screenX + this.base.w && (this.renderPosition(this.rocks[b]), this.fadeAlpha(this.rocks[b]), this.poofInScale(this.rocks[b]))
                    } else if (!1 == this.main.gamePaused)
                        for (b = 0; b < this.rocks.length; b++) "player" != this.rocks[b].what && "frame" != this.rocks[b].what && "leader" !=
                            this.rocks[b].what && (this.rocks[b].percent += 0.01 * this.main.zSpeed * ig.system.tick), 1 < this.rocks[b].percent && this.reGenItem(this.rocks[b]), this.offsetWorldPos(this.rocks[b]), -100 < this.rocks[b].screenX && 740 > this.rocks[b].screenX + this.base.w && (this.behaviors(this.rocks[b]), this.renderPosition(this.rocks[b]), this.fadeAlpha(this.rocks[b]), this.poofInScale(this.rocks[b]), this.processHitItem(this.rocks[b]), this.hittedActions(this.rocks[b]))
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.oriStat(); - 1 < _STRINGS.Game[ig.game.what + "1"][0].indexOf("$") && (_STRINGS.Game[ig.game.what + "1"][0] = _STRINGS.Game[ig.game.what + "1"][0].slice(0, _STRINGS.Game[ig.game.what + "1"][0].indexOf("$")) + this.main.howmany + _STRINGS.Game[ig.game.what + "1"][0].slice(_STRINGS.Game[ig.game.what + "1"][0].indexOf("$") + 1)); - 1 < _STRINGS.Game[ig.game.what + "2"][0].indexOf("$") && (_STRINGS.Game[ig.game.what + "2"][0] = _STRINGS.Game[ig.game.what + "2"][0].slice(0, _STRINGS.Game[ig.game.what + "2"][0].indexOf("$")) + this.main.howmany + _STRINGS.Game[ig.game.what +
                "2"][0].slice(_STRINGS.Game[ig.game.what + "2"][0].indexOf("$") + 1))
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.drawer("game", this["shadowIm" + ig.game.player], 1, 1, 0, 320, this.plane.plane.finalY + 130 - Math.abs(0.2 * this.plane.plane.rot) - this["planeIm" + ig.game.player].height / 2, 0.87, 0.6, !0, "oil" == ig.game.what ? 0.2 : 0.9, this.plane.plane.rot);
                for (var b = 0; b < this.rocks.length; b++) {
                    if (!0 == this.rocks[b].start && !0 == this.rocks[b].show && -100 < this.rocks[b].screenX && 740 > this.rocks[b].screenX + this.base.w && -200 <
                        this.rocks[b].finalX && 840 > this.rocks[b].finalX + this.base.w) switch (this.rocks[b].what) {
                        case "balloon":
                        case "ufo":
                        case "ship":
                            "ufo" == this.rocks[b].what && this.drawer("game", this.lightIm, 1, 1, 0, this.rocks[b].finalX, this.rocks[b].finalY + 40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].lightAlp * this.rocks[b].alp, 0, -this.lightIm.width / 2 * this.rocks[b].sc, -this.lightIm.height * this.rocks[b].sc);
                            this.drawer("game", this[this.rocks[b].what + "Im"], 3, 1, this.rocks[b].which, this.rocks[b].finalX, this.rocks[b].finalY +
                                40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this[this.rocks[b].what + "Im"].width / 2 / 3 * this.rocks[b].sc, -this[this.rocks[b].what + "Im"].height * this.rocks[b].sc);
                            break;
                        case "rock":
                            this.drawer("game", this["rockIm" + this.main.which], this.rockVault[this.main.which], 1, this.rocks[b].which, this.rocks[b].finalX, this.rocks[b].finalY + 40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this["rockIm" + this.main.which].width / 2 / this.rockVault[this.main.which] * this.rocks[b].sc, -this["rockIm" +
                                this.main.which].height * this.rocks[b].sc);
                            break;
                        case "tree":
                            this.drawer("game", this["treeIm" + this.main.which], this.treeMaxFrame[this.main.which], 1, this.rocks[b].which, this.rocks[b].finalX, this.rocks[b].finalY + 40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this["treeIm" + this.main.which].width / 2 / this.treeVault[this.main.which] * this.rocks[b].sc, -this["treeIm" + this.main.which].height * this.rocks[b].sc);
                            break;
                        case "heart":
                            this.drawer("game", this.heartIm, 1, 1, 0, this.rocks[b].finalX, this.rocks[b].finalY +
                                40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this.heartIm.width / 2 * this.rocks[b].sc, -this.heartIm.height * this.rocks[b].sc);
                            break;
                        case "star":
                            this.drawer("game", this.starIm, 1, 1, 0, this.rocks[b].finalX, this.rocks[b].finalY - 5, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this.starIm.width / 2 * this.rocks[b].sc, -this.starIm.height * this.rocks[b].sc);
                            break;
                        case "leader":
                            this.drawer("game", this["planeIm" + this.rocks[b].num], 3, 1, this.rocks[b].which, this.rocks[b].finalX, this.rocks[b].finalY -
                                5, this.rocks[b].sc, this.rocks[b].sc, !0, this.rocks[b].alp, this.rocks[b].rot);
                            break;
                        case "oil":
                            this.drawer("game", this.oilIm, 1, 1, 0, this.rocks[b].finalX, this.rocks[b].finalY + 40, this.rocks[b].sc, this.rocks[b].sc, !1, this.rocks[b].alp, 0, -this.oilIm.width / 2 * this.rocks[b].sc, -(this.oilIm.height - 5) * this.rocks[b].sc);
                            break;
                        case "ring":
                            this.drawer("game", this.ringIm, 2, 1, this.rocks[b].which, this.rocks[b].finalX, this.rocks[b].finalY - 100, this.rocks[b].sc, this.rocks[b].sc, !0, this.rocks[b].alp, 0)
                    }
                    "player" == this.rocks[b].what &&
                        (!0 == this.puffer.show && this.puffer.drawPuff(), "oil" == ig.game.what && this.drawer("game", this.targetIm, 1, 1, 0, 320 - 0.05 * this.rocks[b].rot, this.plane.plane.finalY + 120 - this["planeIm" + ig.game.player].height / 2, 1, 1, !0, 0.9), this.drawer("game", this["planeIm" + ig.game.player], 3, 1, this.main.frame, 320 + this.rocks[b].rot, Math.abs(0.2 * this.rocks[b].rot) + this.rocks[b].fly + this.rocks[b].finalY - this["planeIm" + ig.game.player].height / 2 + this.plane.plane.flyOffY, this.rocks[b].finalSc, this.rocks[b].finalSc, !0, 1, this.rocks[b].rot,
                            0, this.plane.scarfY[ig.game.player]), this.drawer("game", this.scarfIm, this.scarf.frameX, this.scarf.frameY, this.scarf.frames[this.scarf.frame], this.scarf.x + this.plane.scarfX[ig.game.player] + this.rocks[b].rot, this.rocks[b].finalY - this.scarf.y + Math.abs(0.2 * this.rocks[b].rot) + this.rocks[b].fly + 2, 1, 1, !0, 1, 360 - this.rocks[b].rot, this.scarf.offX, this.scarf.offY), !0 == this.boom.show && this.drawer("game", this.boomIm, 4, 2, this.boom.frames[this.boom.frame], this.boom.x, this.boom.y, 1, 1, !0))
                }
                null != this.plane.frame &&
                    this.drawer("game", this.frameIm, 2, 1, this.plane.frame.which, this.plane.frame.finalX, this.plane.frame.finalY + 80, this.plane.frame.sc, this.plane.frame.sc, !0, 1, 0, 0, -this.frameIm.height * this.plane.frame.sc)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-tree").requires("game.entities.plain").defines(function() {
    EntityPlainTree = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        speed: 0,
        moveRight: !0,
        size: {
            x: 800,
            y: 600
        },
        which: 1,
        treeStorage: [],
        startY: [115, 115, 123, 130],
        treeTall0: [141, 1369, 130, 101, 105, 97, 81, 38, 37],
        treeTall1: [153, 152, 150, 141, 52, 53],
        treeTall2: [119, 156, 165, 157, 157, 583, 48, 31, 59],
        treeTall3: [138, 125, 185, 109, 106, 106, 124, 50],
        treeWidth0: [134, 64, 68, 93, 54, 53, 70, 50, 55],
        treeWidth1: [94, 135, 83, 77, 68, 70],
        treeWidth2: [103,
            80, 86, 145, 80, 78, 56, 47, 85
        ],
        treeWidth3: [99, 101, 111, 106, 86, 32, 111, 51],
        treeVault: [9, 6, 9, 8],
        bigTree: [7, 4, 5, 7],
        ready: function() {
            this.parent();
            for (var b = 0; b < this.treeStorage.length; b++) {
                this.treeStorage[b].percent = b / this.treeStorage.length;
                this.treeStorage[b].alp = 0;
                this.treeStorage[b].startSc = 0;
                this.treeStorage[b].step = 0;
                var c = -400 + this.main.world.x + Math.floor(Math.random() * (this.main.w + 800));
                this.treeStorage[b].x = 0 > c ? 3 * this.sky.w + c : c > 3 * this.sky.w ? c % (3 * this.sky.w) : c;
                this.ground.rocks.push(this.treeStorage[b])
            }
            this.ground.indexSwap()
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.main = d.main, this.oriStat(), this.spawnTrees())
        },
        spawnTrees: function() {
            for (var b = 0; 15 > b; b++) {
                var c = 3 == Math.floor(10 * Math.random()) ? Math.floor(Math.random() * this.treeVault[this.main.which]) : Math.floor(Math.random() * this.bigTree[this.main.which]);
                this.treeStorage.push({
                    seq: b,
                    hitRectW: this["treeWidth" + this.main.which][c],
                    hitRectH: this["treeTall" + this.main.which][c],
                    what: "tree",
                    alp: 0,
                    show: !0,
                    which: c,
                    x: 0,
                    startSc: 0,
                    sc: 0.5,
                    percent: 1 *
                        Math.random(),
                    oriSc: 1,
                    step: 0,
                    scSpeed: 0.01,
                    screenX: 0,
                    x0: 320,
                    y0: this.startY[this.main.which],
                    x1: 320,
                    y1: 190,
                    x2: 640,
                    y2: 550
                })
            }
        },
        oriStat: function() {
            this.spawnTimer = new ig.Timer;
            this.spawnTime = 1;
            this.base = {
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        tweenF: function() {},
        reGen: function(b) {
            b.percent = 0;
            b.alp = 0;
            b.startSc = 0;
            b.step = 0;
            var c = -400 + this.main.world.x + Math.floor(Math.random() * (this.main.w +
                800));
            b.x = 0 > c ? 3 * this.sky.w + c : c > 3 * this.sky.w ? c % (3 * this.sky.w) : c
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-plane").requires("game.entities.plain").defines(function() {
    EntityPlainPlane = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        scarfY: [1, 1, 12, 8],
        scarfX: [2, 2, 2, 3],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        tweening: "middle",
        score: 0,
        clue: 0,
        ans: 10,
        planes: [0, 1, 2, 3],
        oil: [],
        rotAngles: [0, 6.237000000000001, 9.333, 12.213000000000003, 14.448000000000004, 16.932000000000006, 19.07966666666667, 20.814666666666675, 22.698666666666675,
            24.103666666666676, 25.514666666666674, 26.798666666666673, 27.703666666666674, 28.548000000000005, 29.232000000000006, 29.637000000000008, 29.91466666666667, 30
        ],
        rotSpeed: 30,
        rotAngle: 45,
        iniSpeed: 2,
        hitSize: [0.02, 0.04, 0.07, 0.1, 0.12, 0.14, 0.18, 0.2, 0.18, 0.15, 0.1, 0.06, 0.01, -0.02, -0.05, -0.1, 0.01, 0.06, 0.01, -0.02, -0.05, -0.1],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.oriStat())
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 0,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawnLeaders: function() {
            this.planes.splice(ig.game.player, 1);
            this.plane0 = {
                what: "leader",
                num: this.planes[0],
                which: 1,
                percent: 0.5,
                x: this.frame.x - 50,
                leadX: -50,
                y: 130,
                oriSc: 0.8,
                sc: 1,
                alp: 1,
                rot: 0,
                screenX: 0,
                x0: 320,
                y0: this.ground.startY[this.main.which],
                x1: 320,
                y1: 190,
                x2: 640,
                y2: 550,
                show: !0
            };
            this.plane1 = {
                what: "leader",
                num: this.planes[1],
                which: 1,
                percent: 0.4,
                x: this.frame.x,
                leadX: 0,
                y: 130,
                oriSc: 0.9,
                sc: 1,
                alp: 1,
                rot: 0,
                screenX: 0,
                x0: 320,
                y0: this.ground.startY[this.main.which],
                x1: 320,
                y1: 190,
                x2: 640,
                y2: 550,
                show: !0
            };
            this.plane2 = {
                what: "leader",
                num: this.planes[2],
                which: 1,
                percent: 0.5,
                x: this.frame.x + 50,
                leadX: 50,
                y: 130,
                oriSc: 0.8,
                sc: 1,
                alp: 1,
                rot: 0,
                screenX: 0,
                x0: 320,
                y0: this.ground.startY[this.main.which],
                x1: 320,
                y1: 190,
                x2: 640,
                y2: 550,
                show: !0
            };
            this.ground.rocks.push(this.plane0);
            this.ground.rocks.push(this.plane1);
            this.ground.rocks.push(this.plane2)
        },
        spawnFrame: function() {
            this.frame = {
                moveCount: new ig.Timer,
                moveTime: 6,
                moveX: -2 + 4 * Math.random(),
                seq: 0,
                hitRectW: this.ground.frameIm.width / 3 - 40,
                hitRectH: 300,
                fixSc: 0.87,
                what: "frame",
                alp: 1,
                show: !0,
                which: 1,
                fly: 0,
                x: 280,
                startSc: 0,
                sc: 0.5,
                percent: 0.71,
                oriSc: 1,
                step: 0,
                scSpeed: 0.01,
                screenX: 0,
                x0: 320,
                y0: this.ground.startY[this.main.which],
                x1: 320,
                y1: 190,
                x2: 640,
                y2: 550,
                rot: 35,
                rotTarg: 0,
                turning: "left",
                hitIndex: 0
            };
            this.ground.rocks.push(this.frame)
        },
        abCheck: function(b) {
            var c, d, g, j, n, y, r;
            c = "tree" == b.what ? 0 : "oil" == b.what ? 130 : 80;
            j = 320 - (this.plane.hitRectW -
                c) / 2 * this.plane.fixSc;
            n = this.plane.finalY;
            y = (this.plane.hitRectW - c) * this.plane.fixSc;
            r = this.plane.hitRectH * this.plane.fixSc;
            c = b.finalX - b.hitRectW / 2 * b.sc;
            d = b.finalY - b.hitRectH / 2 * b.sc;
            g = b.hitRectW * b.sc;
            b = b.hitRectH * b.sc;
            return c + g > j && c < j + y && d + b > n && d < n + r ? !0 : !1
        },
        tweenF: function(b) {
            switch (b) {
                case "oil0":
                    this.tweening = !0;
                    this.tweener("base", {
                        sc: 30
                    }, 0.3, "oil2");
                    break;
                case "oil1":
                    this.tweener("base", {
                        sc: 0
                    }, 0.3, "oil2");
                    break;
                case "oil2":
                    this.tweening = !1;
                    break;
                case "swiftRight0":
                    if (!0 == ig.input.state("click")) break;
                    if ("right" != this.tweening) break;
                    this.tweener("plane", {
                        rot: this.rotAngle - 5
                    }, 1.5, "swiftRight1");
                    break;
                case "swiftRight1":
                    if (!0 == ig.input.state("click")) break;
                    if ("right" != this.tweening) break;
                    this.tweener("plane", {
                        rot: this.rotAngle
                    }, 1.5, "swiftRight0");
                    break;
                case "swiftLeft0":
                    if (!0 == ig.input.state("click")) break;
                    if ("left" != this.tweening) break;
                    this.tweener("plane", {
                        rot: -this.rotAngle - 5
                    }, 1.5, "swiftLeft1");
                    break;
                case "swiftLeft1":
                    if (!0 == ig.input.state("click")) break;
                    if ("left" != this.tweening) break;
                    this.tweener("plane", {
                        rot: -this.rotAngle
                    }, 1.5, "swiftLeft0");
                    break;
                case "swiftMiddle0":
                    if (!0 == ig.input.state("click")) break;
                    if ("middle" != this.tweening) break;
                    this.tweener("plane", {
                        rot: 4
                    }, 2.4, "swiftMiddle1");
                    break;
                case "swiftMiddle1":
                    if (!0 == ig.input.state("click")) break;
                    if ("middle" != this.tweening) break;
                    this.tweener("plane", {
                        rot: -4
                    }, 2.4, "swiftMiddle0");
                    break;
                case "startRot":
                    this.main.planeRot = !1;
                    break;
                case "flyUp":
                    this.tweener("plane", {
                        fly: -8,
                        plusRot: -2
                    }, 1.2, "flyDown");
                    break;
                case "flyDown":
                    this.tweener("plane", {
                            fly: 0,
                            plusRot: 2
                        },
                        1.2, "flyUp")
            }
        },
        update: function() {
            if (!ig.global.wm && (this.parent(), !0 == this.tweening && this.oil.push(this.base.sc), !0 == this.plane.hitted && (this.plane.hitIndex += 1, this.plane.finalSc = this.plane.hitIndex < this.hitSize.length ? this.plane.fixSc + 0.8 * this.hitSize[this.plane.hitIndex] : this.plane.fixSc), !0 == ig.input.state("right") || !0 == ig.input.state("left") || ig.ua.mobile)) {
                switch (this.plane.turning) {
                    case "left":
                        if ("left" == this.tweening) return;
                        for (var b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("swift") &&
                            this.tweens[b].stop();
                        this.tweening = "left";
                        this.tweener("plane", {
                            rot: -this.rotAngle
                        }, 1, "swiftLeft0");
                        break;
                    case "right":
                        if ("right" == this.tweening) return;
                        for (b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("swift") && this.tweens[b].stop();
                        this.tweening = "right";
                        this.tweener("plane", {
                            rot: this.rotAngle
                        }, 1, "swiftRight0");
                        break;
                    case "middle":
                        if ("middle" == this.tweening) return;
                        for (b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].targ.indexOf("plane") && -1 == this.tweens[b].seq.indexOf("fly") && this.tweens[b].stop();
                        this.tweening = "middle";
                        this.tweener("plane", {
                            rot: 0
                        }, 1, "swiftMiddle0")
                }
                this.rotSpeed -= 0.03;
                0.1 > this.rotSpeed && (this.rotSpeed = 0.1)
            }
        },
        middle: function() {
            if ("middle" != this.tweening) {
                for (var b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].targ.indexOf("plane") && -1 == this.tweens[b].seq.indexOf("fly") && this.tweens[b].stop();
                this.tweening = "middle";
                this.tweener("plane", {
                    rot: 0
                }, 1, "swiftMiddle0")
            }
        },
        ready: function() {
            this.parent();
            this.plane = {
                seq: 0,
                hitRectW: this.ground.planeIm0.width / 3 - 20,
                hitRectH: this.ground.planeIm0.height,
                fixSc: 0.87,
                what: "player",
                alp: 1,
                show: !0,
                which: 1,
                fly: 0,
                finalY: 291,
                finalX: 320,
                y: 291,
                x: 320,
                startSc: 0,
                sc: 0.5,
                percent: 0.72,
                oriSc: 1,
                step: 0,
                scSpeed: 0.01,
                screenX: 0,
                x0: 320,
                y0: this.ground.startY[this.main.which],
                x1: 320,
                y1: 190,
                x2: 640,
                y2: 550,
                rot: 0,
                rotTarg: 0,
                turning: "left",
                hitIndex: 0,
                plusRot: 0,
                flyOffX: 0,
                flyOffY: 0
            };
            this.ground.rocks.push(this.plane);
            this.ground.indexSwap();
            this.tweenF("flyUp")
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-puffer").requires("game.entities.plain").defines(function() {
    EntityPlainPuffer = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        show: !1,
        which: "star",
        h: 600,
        w: 800,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        score: 0,
        clue: 0,
        ans: 10,
        puff: [],
        rotSpeed: 30,
        rotAngle: 30,
        iniSpeed: 2,
        starPuffIm: new ig.Image("media/graphics/sprites/starpuff.png"),
        oilPuffIm: new ig.Image("media/graphics/sprites/oilpuff.png"),
        heartPuffIm: new ig.Image("media/graphics/sprites/heartpuff.png"),
        hitSize: [0.02, 0.04, 0.07, 0.1, 0.12, 0.14, 0.18, 0.2, 0.18, 0.15, 0.1, 0.06, 0.01, -0.02, -0.05, -0.1, 0.01, 0.06, 0.01, -0.02, -0.05, -0.1],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.spawner())
        },
        reGen: function(b, c) {
            this.which = c;
            for (var d = 0; 5 > d; d++) this.puff[d].x = b.finalX, this.puff[d].y = 420, this.puff[d].progress = 0, this.puff[d].y = b.finalY, this.puff[d].rot = Math.floor(360 * Math.random()), this.puff[d].alp = 0, this.puff[d].sc = 0, this.puff[d].speedX = 20 * (d / 5) - 10 + 4 * Math.random(), this.puff[d].speedY = -30 + 15 * Math.random(),
                this.puff[d].lastX = 0, this.puff[d].lastY = 0, this.puff[d].oriSc = 0.3 + 0.4 * Math.random(), this.show = !0
        },
        spawner: function() {
            for (var b = 0; 5 > b; b++) this.puff.push({
                x: 320,
                y: 320,
                rot: Math.floor(360 * Math.random()),
                alp: 0,
                show: !1,
                sc: 0,
                speedX: 20 * (b / 5) - 10 + 4 * Math.random(),
                speedY: -30 + 15 * Math.random(),
                progress: 0,
                lastX: 0,
                lastY: 0,
                oriSc: 0.6 + 0.4 * Math.random()
            })
        },
        tweenF: function() {},
        update: function() {
            if (!ig.global.wm && (this.parent(), !0 == this.show))
                for (var b = this.count = 0; b < this.puff.length; b++) this.puff[b].speedX *= 1.01, this.puff[b].speedY +=
                    1.05, this.puff[b].x += this.puff[b].speedX, this.puff[b].y += this.puff[b].speedY, this.puff[b].rot += 5, this.puff[b].progress += 1, 1 > this.puff[b].sc && (this.puff[b].sc += 0.1 + 0.01 * this.puff[b].sc), 25 < this.puff[b].progress ? (this.puff[b].alp -= 0.1, this.puff[b].sc -= 0.1 + 0.01 * this.puff[b].sc, 0 > this.puff[b].sc && (this.puff[b].sc = 0)) : this.puff[b].alp += 0.1, 30 < this.puff[b].progress && (this.puff[b].show = !1, this.count += 1), this.count == this.puff.length && (this.show = !1)
        },
        drawPuff: function() {
            for (var b = 0; b < this.puff.length; b++) 0 <
                this.puff[b].alp && this.drawer("game", this[this.which + "PuffIm"], 1, 1, 0, this.puff[b].x, this.puff[b].y, this.puff[b].sc * this.puff[b].oriSc, this.puff[b].sc * this.puff[b].oriSc, !0, this.puff[b].alp, this.puff[b].rot)
        },
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-gui").requires("game.entities.plain", "game.entities.plain-map-but").defines(function() {
    EntityPlainGui = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        greyAlp: 0,
        startSpeech: 0,
        h: 600,
        w: 800,
        showRead: !1,
        doneRead: !1,
        boardOn: !1,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        gamePaused: !1,
        gameOverSpeech: !1,
        overText: "complete",
        goodOffX: -700,
        goodJob: !1,
        fail: !1,
        text1: 0,
        text2: 0,
        text3: 0,
        finalText: 0,
        score1: 0,
        score2: 0,
        score3: 0,
        finalScore: 0,
        awesomeIm: new ig.Image("media/graphics/sprites/awesome.png"),
        speechIm: new ig.Image("media/graphics/sprites/speech.png"),
        fanIm: new ig.Image("media/graphics/sprites/fan.png"),
        planeIm: new ig.Image("media/graphics/sprites/home-plane.png"),
        scarfIm: new ig.Image("media/graphics/sprites/home-scarf.png"),
        starIm: new ig.Image("media/graphics/sprites/mission-star.png"),
        heartIm: new ig.Image("media/graphics/sprites/gui-heart.png"),
        ringIm: new ig.Image("media/graphics/sprites/gui-ring.png"),
        oilIm: new ig.Image("media/graphics/sprites/gui-oil.png"),
        fuelIm: new ig.Image("media/graphics/sprites/fuel.png"),
        baseIm: new ig.Image("media/graphics/sprites/fuelbase.png"),
        miniIm: new ig.Image("media/graphics/sprites/miniplane.png"),
        boardIm: new ig.Image("media/graphics/sprites/board.png"),
        wingRIm: new ig.Image("media/graphics/sprites/wing-r.png"),
        wingLIm: new ig.Image("media/graphics/sprites/wing-l.png"),
        leftIm: new ig.Image("media/graphics/sprites/arrow-l.png"),
        rightIm: new ig.Image("media/graphics/sprites/arrow-r.png"),
        sLoop: {
            score: {
                id: "score",
                duration: 0.08
            }
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c,
                d), this.oriStat())
        },
        genQues: function() {},
        pauseGame: function() {},
        resumeGame: function() {},
        oriStat: function() {
            this.overBoard = {
                offY: 0
            };
            this.arrow = {
                alp: 0
            };
            this.planeX = 290 * (this.main.collect / this.main.howmany) - 6;
            this.planeGui = {
                x: 535,
                y: 160,
                x2: 125,
                y2: 170,
                offX: -500,
                offY: -500,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.02,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.scarf = {
                x: -40,
                y: -37,
                x2: -40,
                y2: -37,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 3, 4, 5],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            };
            this.fan = {
                x: 65,
                y: -6,
                x2: 65,
                y2: -6,
                sc: 1,
                oriSc: 0.9,
                offX: [0, 0, 0, 0, 0],
                offY: [0, 1, 3, 3, 1],
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0, 1, 2, 2, 3],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "goodJob":
                    this.goodJob = !0;
                    this.tweener("this", {
                        goodOffX: 0
                    }, 0.3, "goodJob2");
                    break;
                case "goodJob2":
                    this.tweener("this", {
                        goodOffX: -700
                    }, 0.3, "goodJob3", 3);
                    break;
                case "goodJob3":
                    this.goodJob = !1;
                    break;
                case "fail":
                    this.fail = !0;
                    this.tweener("this", {
                        goodOffX: 0
                    }, 0.3, "fail2");
                    break;
                case "fail2":
                    this.tweener("this", {
                        goodOffX: -700
                    }, 0.3, "fail3", 3);
                    break;
                case "fail3":
                    this.fail = !1;
                    break;
                case "restart":
                    ig.game.director.jumpTo(LevelGame);
                    break;
                case "clickable":
                    this.main.clickable = !0;
                    break;
                case "arrowFlash0":
                    this.tweener("arrow", {
                            alp: 1
                        },
                        0.3, "arrowFlash1");
                    break;
                case "arrowFlash1":
                    this.tweener("arrow", {
                        alp: 0
                    }, 0.3, "arrowFlash0", 0.3);
                    break;
                case "tellMission0":
                    this.sounder("flip");
                    this.tweener("planeGui", {
                        offY: 50
                    }, 0.2, "tellMission1");
                    break;
                case "tellMission1":
                    this.showRead = !0;
                    this.tweener("planeGui", {
                        offY: -20
                    }, 0.3);
                    break;
                case "offMission0":
                    this.tweener("planeGui", {
                        offY: 50
                    }, 0.2, "offMission1");
                    break;
                case "offMission1":
                    this.sounder("flip");
                    this.tweener("planeGui", {
                        offY: -500
                    }, 0.3, "offMission2");
                    break;
                case "offMission2":
                    this.tweener("planeGui", {}, 0.3, "offMission3");
                    break;
                case "offMission3":
                    this.main.gameTimer.unpause();
                    this.main.gameStart = !0;
                    this.main.gamePaused = !1;
                    this.main.clickable = !0;
                    break;
                case "movePlane":
                    if (this.main.collect + 1 > this.main.howmany) break;
                    this.main.collect += 1;
                    !1 == this.main.preGameOver && this.main.collect >= this.main.howmany && (this.main.preGameOver = !0, this.main.gameOverTimer.reset(), this.main.gameTimer.pause());
                    for (b = 0; b < this.sky.tweens.length; b++) - 1 < this.sky.tweens[b].seq.indexOf("movePlane2") && this.sky.tweens[b].stop();
                    this.tweener("this", {
                        planeX: 290 * (this.main.collect / this.main.howmany) - 6
                    }, 0.5, "movePlane2");
                    break;
                case "gameOver0":
                    this.countScore();
                    this.sounder("flip");
                    this.overBoard.offY = -700;
                    this.tweener("overBoard", {
                        offY: 20
                    }, 0.3, "gameOver1");
                    this.main.middle();
                    break;
                case "gameOver1":
                    "fail" == this.overText ? (this.fail = !0, this.tweenF("fail")) : (this.goodJob = !0, this.tweenF("goodJob"));
                    this.tweener("overBoard", {
                        offY: -25
                    }, 0.3, "gameOver2");
                    break;
                case "gameOver2":
                    "fail" == this.overText ? this.tweenF("offBoard0") : (this.tweening = !1, 0 == this.score1 ? this.tweenF("score2") : (this.tweening = !0, this.tweener("this", {
                        text1: this.score1
                    }, 0.5, "score2")));
                    break;
                case "score2":
                    this.tweening = !1;
                    0 == this.score2 ? this.tweenF("score3") : (this.tweening = !0, this.tweener("this", {
                        text2: this.score2
                    }, 0.5, "score3"));
                    break;
                case "score3":
                    this.tweening = !1;
                    0 == this.score3 ? this.tweenF("score4") : (this.tweening = !0, this.tweener("this", {
                        text3: this.score3
                    }, 0.5, "score4"));
                    break;
                case "score4":
                    this.tweening = !0;
                    this.tweener("this", {
                        finalText: this.finalScore
                    }, 0.5, "offBoard0");
                    break;
                case "offBoard0":
                    this.tweening = !1;
                    this.tweener("overBoard", {
                        offY: 20
                    }, 0.3, "offBoard1", 2);
                    break;
                case "offBoard1":
                    this.tweener("overBoard", {
                        offY: -700
                    }, 0.3, "offBoard2");
                    break;
                case "offBoard2":
                    ig.game.plusScore > ig.game.nextLvl && 20 > ig.game.lvl ? (ig.game.lvl += 1, ig.game.nextLvl = 2500 * ig.game.lvl + 150 * ig.game.lvl, ig.game.storage.set(ig.game.gameKey, {
                            star: ig.game.plusScore,
                            lvl: ig.game.lvl,
                            mission: ig.game.mission,
                            map: ig.game.map,
                            player: ig.game.player,
                            nextLvl: 2500 * ig.game.lvl + 150 * ig.game.lvl,
                            seq: ig.game.seq
                        }),
                        ig.game.director.jumpTo(LevelOver)) : (ig.game.storage.set(ig.game.gameKey, {
                        star: ig.game.plusScore,
                        lvl: ig.game.lvl,
                        mission: ig.game.mission,
                        map: ig.game.map,
                        player: ig.game.player,
                        nextLvl: ig.game.nextLvl,
                        seq: ig.game.seq
                    }), ig.game.director.jumpTo(LevelMission)), this.setScore(ig.game.gameKey)
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), !0 == this.tweening && this.soundLooper("score"), !0 == this.main.gameOver && !1 == this.gameOverSpeech && (this.gameOverSpeech = !0, this.tweenF("gameOver0")))
        },
        countScore: function() {
            this.finalScore =
                Math.floor(ig.game.storage.get(ig.game.gameKey).star);
            switch (ig.game.what) {
                case "ufo":
                case "ship":
                case "balloon":
                    60 > this.main.gameTimer.delta() ? (this.overText = "fail", this.finalText = ig.game.storage.get(ig.game.gameKey).star) : (this.overText = "complete", this.score1 = 10 * this.main.heart, this.score2 = 5 * this.main.star, this.score3 = 500, this.finalScore = ig.game.storage.get(ig.game.gameKey).star + this.score1 + this.score2 + this.score3);
                    break;
                case "oil":
                    this.main.collect < this.main.howmany ? (this.overText = "fail", this.finalText =
                        ig.game.storage.get(ig.game.gameKey).star) : (this.overText = "complete", this.score1 = Math.floor(1E3 * ((60 - this.main.gameTimer.delta()) / 60)), this.score2 = 10 * this.main.star, this.score3 = 400, this.finalScore = ig.game.storage.get(ig.game.gameKey).star + this.score1 + this.score2 + this.score3);
                    break;
                case "ring":
                    this.main.ring < this.main.howmany ? (this.overText = "fail", this.finalText = ig.game.storage.get(ig.game.gameKey).star) : (this.overText = "complete", this.score1 = 800 * (this.main.ring / this.main.total), this.score3 = 200, this.finalScore =
                        ig.game.storage.get(ig.game.gameKey).star + this.score1 + this.score3);
                    break;
                case "star":
                    this.main.star < this.main.howmany ? (this.overText = "fail", this.finalText = ig.game.storage.get(ig.game.gameKey).star) : (this.overText = "complete", this.score1 = 800 * (this.main.star / this.main.total), this.score3 = 200, this.finalScore = ig.game.storage.get(ig.game.gameKey).star + this.score1 + this.score3);
                    break;
                case "tree":
                    60 > this.main.gameTimer.delta() ? (this.overText = "fail", this.finalText = ig.game.storage.get(ig.game.gameKey).star) :
                        (this.overText = "complete", this.score1 = 10 * this.main.heart, this.score2 = 5 * this.main.star, this.score3 = 500, this.finalScore = ig.game.storage.get(ig.game.gameKey).star + this.score1 + this.score2 + this.score3)
            }
            99999 < this.finalScore && (this.finalScore = 99999);
            ig.game.plusScore = Math.floor(this.finalScore);
            "fail" != this.overText && (ig.game.mission += 1);
            ig.game.storage.set(ig.game.gameKey, {
                star: ig.game.plusScore,
                lvl: ig.game.lvl,
                mission: ig.game.mission,
                map: ig.game.map,
                player: ig.game.player,
                nextLvl: ig.game.nextLvl,
                seq: ig.game.seq
            })
        },
        placeScore: function() {
            switch (ig.game.what) {
                case "ufo":
                case "ship":
                case "balloon":
                    this.whichScore("heart", 1);
                    this.whichScore("star", 2);
                    this.whichScore("final");
                    break;
                case "oil":
                    this.whichScore("time", 1);
                    this.whichScore("final");
                    break;
                case "ring":
                    this.whichScore("percent", 1);
                    this.whichScore("final");
                    break;
                case "star":
                    this.whichScore("percent", 1);
                    this.whichScore("final");
                    break;
                case "tree":
                    this.whichScore("heart", 1), this.whichScore("star", 2), this.whichScore("final")
            }
        },
        whichScore: function(b, c) {
            switch (b) {
                case "time":
                    1 ==
                        c ? (this.textDraw("game", 1.3, 1.3, this.timeGui.tx, 208, 172 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text1), 439 - 0.7 * this.textW("+" + Math.floor(this.text1)), 180 + this.overBoard.offY)) : (this.textDraw("game", 1.3, 1.3, this.timeGui.tx, 218, 245 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text2), 439 - 0.7 * this.textW("+" + Math.floor(this.text2)), 254 + this.overBoard.offY));
                    break;
                case "collect":
                    1 == c ? (this.centDraw(this[ig.game.what + "Im"], 232, 175 + this.overBoard.offY,
                        0.8), this.textDraw("game", 1.3, 1.3, this.main.collect + "/" + this.main.howmany, 271, 172 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text1), 439 - 0.7 * this.textW("+" + Math.floor(this.text1)), 180 + this.overBoard.offY)) : (this.centDraw(this[ig.game.what + "Im"], 231, 248 + this.overBoard.offY, 0.8), this.textDraw("game", 1.3, 1.3, this.main.collect + "/" + this.main.howmany, 271, 245 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text2), 439 - 0.7 * this.textW("+" + Math.floor(this.text2)),
                        254 + this.overBoard.offY));
                    break;
                case "percent":
                    1 == c ? (this.centDraw(this[ig.game.what + "Im"], 232, 175 + this.overBoard.offY, 0.8), this.textDraw("game", 1.1, 1.1, this.main[ig.game.what] + "/" + this.main.howmany, 261, 172 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text1), 439 - 0.7 * this.textW("+" + Math.floor(this.text1)), 180 + this.overBoard.offY)) : (this.centDraw(this[ig.game.what + "Im"], 231, 248 + this.overBoard.offY, 0.8), this.textDraw("game", 1.1, 1.1, this.main[ig.game.what] + "/" + this.main.howmany,
                        261, 245 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text2), 439 - 0.7 * this.textW("+" + Math.floor(this.text2)), 254 + this.overBoard.offY));
                    break;
                case "heart":
                    1 == c ? (this.centDraw(this.heartIm, 232, 175 + this.overBoard.offY, 1), this.textDraw("game", 1.3, 1.3, this.main.heart, 271, 172 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text1), 439 - 0.7 * this.textW("+" + Math.floor(this.text1)), 180 + this.overBoard.offY)) : (this.centDraw(this.heartIm, 231, 248 + this.overBoard.offY, 1),
                        this.textDraw("game", 1.3, 1.3, this.main.heart, 271, 245 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text2), 439 - 0.7 * this.textW("+" + Math.floor(this.text2)), 254 + this.overBoard.offY));
                    break;
                case "star":
                    1 == c ? (this.centDraw(this.starIm, 232, 175 + this.overBoard.offY, 0.8), this.textDraw("game", 1.3, 1.3, this.main.star, 271, 172 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text1), 439 - 0.7 * this.textW("+" + Math.floor(this.text1)), 180 + this.overBoard.offY)) : (this.centDraw(this.starIm,
                        231, 248 + this.overBoard.offY, 0.8), this.textDraw("game", 1.3, 1.3, this.main.star, 271, 245 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text2), 439 - 0.7 * this.textW("+" + Math.floor(this.text2)), 254 + this.overBoard.offY));
                    break;
                case "final":
                    this.centDraw(this.starIm, 225, 343 + this.overBoard.offY, 0.56), this.textDraw("game", 1.1, 1.1, Math.floor(this.finalText), 437 - 1.1 * this.textW(Math.floor(this.finalText)), 340 + this.overBoard.offY), this.textDraw("game", 0.7, 0.7, "+" + Math.floor(this.text3), 245,
                        341 + this.overBoard.offY)
            }
        },
        wingAndRect: function() {
            this.ctx.fillRect(320 - this.ctx.measureText(_STRINGS.Game[this.overText][0]).width / 2 * _STRINGS.Game[this.overText][3] - 15, _STRINGS.Game[this.overText][2] - 20 + this.overBoard.offY, this.ctx.measureText(_STRINGS.Game[this.overText][0]).width * _STRINGS.Game[this.overText][3] + 30, 45);
            this.ctx.fillStyle = "white";
            this.textLib(this.overText, 0, this.overBoard.offY);
            this.wingLIm.draw(302 - this.ctx.measureText(_STRINGS.Game[this.overText][0]).width / 2 * _STRINGS.Game[this.overText][3] -
                this.wingLIm.width, _STRINGS.Game[this.overText][2] - 12 + this.overBoard.offY);
            this.wingRIm.draw(338 + this.ctx.measureText(_STRINGS.Game[this.overText][0]).width / 2 * _STRINGS.Game[this.overText][3], _STRINGS.Game[this.overText][2] - 12 + this.overBoard.offY)
        },
        ready: function() {
            this.parent();
            this.tweenF("tellMission0")
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.textSet("game", 35, "white");
                this.textSet("game", 35, "white");
                this.ctx.fillStyle = "white";
                switch (ig.game.what) {
                    case "oil":
                        this.drawer("game", this.oilIm,
                            1, 1, 0, 39, 35, 0.8, 0.8, !0);
                        this.ctx.fillStyle = 1 == ig.game.map ? "white" : "#122149";
                        this.textDraw("game", 0.9, 1, this.main.collect + "/" + this.main.howmany, 62, 32);
                        this.timeGui = this.timitizer(60 - this.main.gameTimer.delta());
                        60 < this.main.gameTimer.delta() && (this.timeGui.tx = "0:00.00");
                        this.textDraw("game", 1.3, 1.3, this.timeGui.tx, 320 - 1.3 * this.textW(this.timeGui.tx / 2), 30);
                        break;
                    case "ufo":
                    case "ship":
                    case "tree":
                    case "balloon":
                        this.ctx.fillStyle = "rgba(18, 33, 73, 0.9)";
                        this.ctx.fillRect(190, 24, 290, 18);
                        this.ctx.fillStyle =
                            "#DA1D2E";
                        this.ctx.fillRect(193, 27, 290 * (this.main.gameTimer.delta() / this.main.gameTime), 12);
                        this.drawer("game", this.miniIm, 4, 1, ig.game.player, 190 + 290 * (this.main.gameTimer.delta() / this.main.gameTime), 37, 0.8, 0.8, !0);
                        this.drawer("game", this.heartIm, 1, 1, 0, 29, 32, 0.7, 0.7, !0);
                        this.ctx.fillStyle = 1 == ig.game.map ? "white" : "#122149";
                        this.textDraw("game", 0.9, 1, this.main.heart, 52, 29);
                        this.drawer("game", this.starIm, 1, 1, 0, 105, 32, 0.63, 0.63, !0);
                        this.textDraw("game", 0.9, 1, this.main.star, 126, 29);
                        break;
                    case "ring":
                        !1 ==
                            this.ground.showRing && !1 == this.main.gameOver && 58 >= this.main.gameTimer.delta() && (this.main.world.x > 270 + (this.ground.itemPos - 320) && this.main.world.x < 800 + (this.ground.itemPos - 320) ? this.drawer("game", this.leftIm, 3, 1, 0, 30, 240, 0.8, 0.8, !0, this.arrow.alp) : this.main.world.x < -400 + (this.ground.itemPos - 320) ? this.drawer("game", this.rightIm, 3, 1, 0, 610, 240, 0.8, 0.8, !0, this.arrow.alp) : this.main.world.x > 800 + (this.ground.itemPos - 320) && this.main.world.x < 1800 + (this.ground.itemPos - 320) && this.drawer("game", this.rightIm,
                                3, 1, 0, 610, 240, 0.8, 0.8, !0, this.arrow.alp));
                        this.ctx.fillStyle = "rgba(18, 33, 73, 0.9)";
                        this.ctx.fillRect(190, 24, 290, 18);
                        this.ctx.fillStyle = "#DA1D2E";
                        this.ctx.fillRect(193, 27, 290 * (this.main.gameTimer.delta() / this.main.gameTime), 12);
                        this.drawer("game", this.miniIm, 4, 1, ig.game.player, 190 + 290 * (this.main.gameTimer.delta() / this.main.gameTime), 37, 0.8, 0.8, !0);
                        this.drawer("game", this.ringIm, 1, 1, 0, 39, 35, 0.65, 0.65, !0);
                        this.ctx.fillStyle = 1 == ig.game.map ? "white" : "#122149";
                        this.textDraw("game", 0.9, 1, this.main.ring +
                            "/" + this.main.howmany, 72, 32);
                        break;
                    case "star":
                        !1 == this.ground.showRing && !1 == this.main.gameOver && 58 >= this.main.gameTimer.delta() && (270 < this.main.world.x && 1E3 > this.main.world.x ? this.drawer("game", this.leftIm, 3, 1, 0, 30, 240, 0.8, 0.8, !0, this.arrow.alp) : -200 > this.main.world.x ? this.drawer("game", this.rightIm, 3, 1, 0, 610, 240, 0.8, 0.8, !0, this.arrow.alp) : 1E3 < this.main.world.x && 1600 > this.main.world.x && this.drawer("game", this.rightIm, 3, 1, 0, 610, 240, 0.8, 0.8, !0, this.arrow.alp)), this.ctx.fillStyle = "rgba(18, 33, 73, 0.9)",
                            this.ctx.fillRect(190, 24, 290, 18), this.ctx.fillStyle = "#DA1D2E", this.ctx.fillRect(193, 27, 290 * (this.main.gameTimer.delta() / this.main.gameTime), 12), this.drawer("game", this.miniIm, 4, 1, ig.game.player, 190 + 290 * (this.main.gameTimer.delta() / this.main.gameTime), 37, 0.8, 0.8, !0), this.drawer("game", this.starIm, 1, 1, 0, 29, 34, 0.65, 0.65, !0), this.ctx.fillStyle = 1 == ig.game.map ? "white" : "#122149", this.textDraw("game", 0.9, 1, this.main.star + "/" + this.main.howmany, 52, 31)
                }!1 == this.main.gameStart && (this.runFrame("planeGui"), this.runFrame("scarf"),
                    this.runFrame("fan"), this.ctx.fillStyle = "#122149", this.ctx.fillRect(0, 111 + this.planeGui.offY, 640, 108), this.ctx.fillStyle = "white", !0 == ig.game.tutOn ? ig.ua.mobile ? this.textLibLeft("mobile1", 0, this.planeGui.offY) : (this.textLibLeft("pc1", 0, this.planeGui.offY), this.textLibLeft("pc2", 0, this.planeGui.offY)) : (this.textLibLeft(ig.game.what + "1", 0, this.planeGui.offY), this.textLibLeft(ig.game.what + "2", 0, this.planeGui.offY)), this.drawer("game", this.planeIm, 2, 2, this.planeGui.frames[this.planeGui.frame], this.planeGui.x,
                        this.planeGui.y + this.planeGui.offY, this.planeGui.sc, this.planeGui.sc, !0), this.drawer("game", this.scarfIm, 6, 1, this.scarf.frames[this.scarf.frame], this.planeGui.x + this.scarf.x, this.planeGui.y + this.scarf.y + this.fan.offY[this.planeGui.frame] + this.planeGui.offY, this.scarf.sc, this.scarf.sc, !0), this.drawer("game", this.fanIm, 4, 1, this.fan.frames[this.fan.frame], this.planeGui.x + this.fan.x, this.planeGui.y + this.fan.y + this.fan.offY[this.planeGui.frame] + this.planeGui.offY, this.fan.sc, this.fan.sc, !0), this.ctx.fillStyle =
                    1 == ig.game.map ? "white" : "#122149", this.textLib("start", 0, this.planeGui.offY));
                !0 == this.main.gameOver && (this.ctx.fillStyle = "#122149", this.drawer("game", this.boardIm, 1, 1, 0, 328, 262 + this.overBoard.offY, 1, 1, !0), this.placeScore(), this.wingAndRect());
                !0 == this.main.gamePaused && !0 == this.main.gameStart && (this.ctx.fillStyle = "rgba(23, 36, 56, " + this.greyAlp + ")", this.ctx.fillRect(0, 0, 640, 480), this.ctx.fillStyle = "white", this.textLib("pause"));
                this.goodJob && (this.runFrame("planeGui"), this.awesomeIm.draw(3 + this.goodOffX,
                    80 + this.fan.offY[this.planeGui.frame]), this.ctx.fillStyle = "#242A2D", this.textDraw("game", _STRINGS.Game.awesome[3], _STRINGS.Game.awesome[4], _STRINGS.Game.awesome[0], _STRINGS.Game.awesome[1] + this.goodOffX - 0.7 * (this.ctx.measureText(_STRINGS.Game.awesome[0]).width / 2) - 40, _STRINGS.Game.awesome[2] + this.fan.offY[this.planeGui.frame]));
                this.fail && (this.runFrame("planeGui"), this.awesomeIm.draw(3 + this.goodOffX, 80 + this.fan.offY[this.planeGui.frame]), this.ctx.fillStyle = "#242A2D", this.textDraw("game", _STRINGS.Game.youfail[3],
                    _STRINGS.Game.youfail[4], _STRINGS.Game.youfail[0], _STRINGS.Game.youfail[1] + this.goodOffX - 0.7 * (this.ctx.measureText(_STRINGS.Game.youfail[0]).width / 2) - 40, _STRINGS.Game.youfail[2] + this.fan.offY[this.planeGui.frame]))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game-but").requires("game.entities.plain").defines(function() {
    EntityPlainGameBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1E3,
        size: {
            x: 27,
            y: 27
        },
        locked: !1,
        offset: {
            x: 0,
            y: 0
        },
        pauseIm: new ig.AnimationSheet("media/graphics/sprites/pause.png", 46, 46),
        playIm: new ig.AnimationSheet("media/graphics/sprites/play.png", 173, 123),
        shopIm: new ig.AnimationSheet("media/graphics/sprites/shop.png", 349 / 3, 91),
        mapIm: new ig.AnimationSheet("media/graphics/sprites/map.png",
            506 / 3, 91),
        muteIm: new ig.AnimationSheet("media/graphics/sprites/sound.png", 50, 48),
        unmuteIm: new ig.AnimationSheet("media/graphics/sprites/mute.png", 50, 48),
        homeIm: new ig.AnimationSheet("media/graphics/sprites/home.png", 132, 86),
        retryIm: new ig.AnimationSheet("media/graphics/sprites/retry.png", 403 / 3 - 1, 85),
        bookIm: new ig.AnimationSheet("media/graphics/sprites/bookbut.png", 460 / 3, 88),
        muteAni: {},
        unmuteAni: {},
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.seq = d.seq, this.oriStat(), this.parent(this.pos.x,
                this.pos.y, d), this.spawner())
        },
        idle: function() {
            this.setScale(1, 1);
            this.currentAnim = this.anims.idle;
            !this.main.gamePaused && !0 == this.gui.doneRead && (this.main.clickable = !0);
            this.main.buttonHover = !1
        },
        clicked: function() {
            this.sounder("click");
            if (!this.locked) switch (this.setScale(0.85, 0.85), this.seq) {
                case 0:
                    if (!0 == this.main.gamePaused || !1 == this.main.gameStart || !0 == this.main.gameOver) break;
                    this.main.clickable = !1;
                    this.main.pauseGame();
                    for (var b = 0; b < this.gameBut.length; b++) 1 < this.gameBut[b].seq && (this.gameBut[b].pos.x =
                        this.gameBut[b].oriX);
                    this.gui.tweener("this", {
                        greyAlp: 0.5
                    }, 0.5);
                    break;
                case 1:
                    !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2]), ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()) : (ig.soundHandler.mute(), ig.soundHandler.setForceMuted(!0), this.anims.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey =
                        new ig.Animation(this.unmuteIm, 1, [2]));
                    ig.game.storage.set(ig.game.soundKey, ig.soundHandler.muted);
                    break;
                case 2:
                    ig.game.director.jumpTo(LevelHome);
                    break;
                case 3:
                    this.main.resumeGame();
                    this.gui.tweener("this", {
                        greyAlp: 0
                    }, 0.5, "clickable");
                    for (b = 0; b < this.gameBut.length; b++) 1 < this.gameBut[b].seq && (this.gameBut[b].pos.x = 900);
                    break;
                case 4:
                    this.gui.tweener("this", {
                        greyAlp: 0.95
                    }, 0.3, "restart")
            }
        },
        oriStat: function() {
            this.setScale(1, 1);
            this.base.x = this.pos.x;
            this.base.y = this.pos.y;
            switch (this.seq) {
                case 0:
                    this.pos.x =
                        586;
                    this.pos.y = 12;
                    this.animSheet = this.pauseIm;
                    break;
                case 1:
                    this.pos.x = 534;
                    this.pos.y = 10;
                    !0 == ig.soundHandler.muted ? (this.animSheet = this.unmuteIm, this.unmuteAni.idle = new ig.Animation(this.unmuteIm, 1, [0]), this.unmuteAni.select = new ig.Animation(this.unmuteIm, 1, [1]), this.unmuteAni.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.animSheet = this.muteIm, this.muteAni.idle = new ig.Animation(this.muteIm, 1, [0]), this.muteAni.select = new ig.Animation(this.muteIm, 1, [1]), this.muteAni.grey = new ig.Animation(this.muteIm,
                        1, [2]));
                    break;
                case 2:
                    this.pos.x = 121;
                    this.pos.y = 189;
                    this.animSheet = this.homeIm;
                    break;
                case 3:
                    this.pos.x = 236;
                    this.pos.y = 175;
                    this.animSheet = this.playIm;
                    break;
                case 4:
                    this.pos.x = 372, this.pos.y = 189, this.animSheet = this.retryIm
            }
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.addAnim("grey", 1, [2]);
            this.currentAnim = this.anims.idle;
            3 == this.seq ? (this.pos.x += 15, this.pos.y += 15, this.offset.x = 15, this.offset.y = 13, this.size.x = this.animSheet.width - 45, this.size.y = this.animSheet.height - 45) : 1 < this.seq ? (this.pos.x +=
                15, this.pos.y += 15, this.offset.x = 15, this.offset.y = 13, this.size.x = this.animSheet.width - 30, this.size.y = this.animSheet.height - 30) : (this.size.x = this.animSheet.width, this.size.y = this.animSheet.height);
            this.oriX = this.pos.x;
            1 < this.seq && (this.pos.x = 900)
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "clickable":
                    this.main.clickable = !0
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), 1 == this.seq && !0 == ig.game.changeSound && (ig.game.changeSound = !1, !0 == ig.soundHandler.muted ? (this.anims.idle = new ig.Animation(this.unmuteIm,
                1, [0]), this.anims.select = new ig.Animation(this.unmuteIm, 1, [1]), this.anims.grey = new ig.Animation(this.unmuteIm, 1, [2])) : (this.anims.idle = new ig.Animation(this.muteIm, 1, [0]), this.anims.select = new ig.Animation(this.muteIm, 1, [1]), this.anims.grey = new ig.Animation(this.muteIm, 1, [2])), this.currentAnim = this.anims.idle), !this.locked && null != this.pointer && (this.pointer.hoveringItem == this && !this.pointer.firstClick) && (this.main.buttonHover = !0, this.main.clickable = !1, this.setScale(1, 1), this.currentAnim = this.anims.select))
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game").requires("game.entities.plain", "game.entities.plain-sky", "game.entities.plain-ground", "game.entities.plain-tree", "game.entities.plain-plane", "game.entities.plain-puffer", "game.entities.plain-gui", "game.entities.plain-game-but").defines(function() {
    EntityPlainGame = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        buttonHover: !1,
        frame: 1,
        w: 640,
        heart: 10,
        gameStart: !1,
        star: 0,
        ring: 0,
        collect: 0,
        howmany: 30,
        total: 0,
        h: 480,
        ranks: [0, 0, 0, 0],
        size: {
            x: 800,
            y: 600
        },
        gameOver: !1,
        preGameOver: !1,
        gamePaused: !1,
        hitted: !1,
        which: 1,
        ground: 142,
        clickable: !1,
        groundSpeed: 0,
        groundOriSpeed: 5,
        speedChangeSpeed: 0.5,
        showAwesome: !1,
        mouseUp: !0,
        planeRot: !1,
        controller: "mouse",
        groundColour: ["#83c026", "#185356", "#eefbff", "#ffb52c"],
        bgIm0: new ig.Image("media/graphics/sprites/bg0.png"),
        bgIm1: new ig.Image("media/graphics/sprites/bg1.png"),
        bgIm2: new ig.Image("media/graphics/sprites/bg2.png"),
        bgIm3: new ig.Image("media/graphics/sprites/bg3.png"),
        shadeIm0: new ig.Image("media/graphics/sprites/shade0.png"),
        shadeIm1: new ig.Image("media/graphics/sprites/shade1.png"),
        shadeIm2: new ig.Image("media/graphics/sprites/shade2.png"),
        shadeIm3: new ig.Image("media/graphics/sprites/shade3.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.which = "ufo" == ig.game.what ? 1 : Math.floor(4 * Math.random()), ig.game.map = this.which, this.oriStat(), this.spawner(), ig.game.plusScore = 0)
        },
        pauseGame: function() {
            this.gamePaused = !0;
            this.gameTimer.pause()
        },
        resumeGame: function() {
            this.gamePaused = !1;
            this.gameTimer.unpause()
        },
        oriStat: function() {
            this.speedRevertTimer =
                new ig.Timer;
            this.speedRevertTime = 0.1;
            this.hitSpeed = 0;
            this.gameTimer = new ig.Timer;
            this.gameTime = 60;
            this.gameTimer.pause();
            this.gameOverTimer = new ig.Timer;
            "ring" == ig.game.what || "star" == ig.game.what ? (this.normalSpeed = 60 + ig.game.lvl, this.speedChangeSpeed = 0.3, this.speedBackSpeed = 0.5, this.groundOriSpeed = 8, this.keySpeed = 3) : "oil" == ig.game.what ? (this.normalSpeed = 38 + ig.game.lvl, this.speedChangeSpeed = 0.2, this.speedBackSpeed = 0.5, this.groundOriSpeed = 8, this.keySpeed = 6) : "balloon" == ig.game.what || "ship" == ig.game.what ||
                "ufo" == ig.game.what ? (this.normalSpeed = 38 + ig.game.lvl, this.speedChangeSpeed = 0.21, this.speedBackSpeed = 0.5, this.keySpeed = this.groundOriSpeed = 8) : "tree" == ig.game.what ? (this.normalSpeed = 42 + ig.game.lvl, this.speedChangeSpeed = 0.21, this.speedBackSpeed = 0.5, this.keySpeed = this.groundOriSpeed = 8) : (this.normalSpeed = 48 + ig.game.lvl, this.speedChangeSpeed = 0.3, this.speedBackSpeed = 0.5, this.groundOriSpeed = 8, this.keySpeed = 3);
            80 < this.normalSpeed && (this.normalSpeed = 80);
            this.zSpeed = this.normalSpeed;
            this.world = {
                x: 0,
                y: 0,
                z: 0,
                speed: -20
            };
            this.camera = {
                x: 0,
                y: 0,
                z: 0,
                distance: 10
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainSky, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainPuffer, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainGround, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainPlane, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainGui, 0, 0, {
                main: this
            });
            for (var b = 0; 5 > b; b++) ig.game.spawnEntity(EntityPlainGameBut, 0, 0, {
                main: this,
                seq: b
            })
        },
        tweenF: function() {},
        update: function() {
            ig.global.wm ||
                (this.parent(), !0 == this.preGameOver && !1 == this.gameOver && 0.1 < this.gameOverTimer.delta() && (this.gameOver = !0), !0 != this.gameOver && (this.gameTimer.delta() > this.gameTime && !1 == this.main.preGameOver && (this.gameTimer.pause(), this.main.preGameOver = !0, this.main.gameOverTimer.reset()), this.speedRevertTimer.delta() > this.speedRevertTime && (this.hitted = !1, this.zSpeed = this.normalSpeed), ig.ua.mobile ? this.oriControl() : this.controlWay2()))
        },
        controlWay2: function() {
            if (!0 == ig.input.state("click")) {
                for (var b = 0; b < this.plane.tweens.length; b++) - 1 <
                    this.plane.tweens[b].seq.indexOf("swift") && this.plane.tweens[b].stop();
                if (!1 == this.gui.doneRead && !0 == this.gui.showRead) {
                    if (!0 == this.buttonHover) return;
                    !0 == ig.input.released("click") && (!0 == ig.game.tutOn ? ig.game.tutOn = !1 : (this.gui.doneRead = !0, this.gui.tweenF("offMission0")))
                }!1 != this.clickable && (330 < this.pointer.pos.x ? (this.frame = 2, "right" != this.plane.plane.turning && (this.plane.rotIndex = 0, this.plane.rotSpeed = this.plane.iniSpeed, this.plane.plane.turning = "right"), this.pointX = 250 > this.pointer.pos.x ? 250 :
                    this.pointer.pos.x, this.groundSpeed = (this.pointX - 320) / 250 * this.groundOriSpeed, this.sky.speed = 0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick, this.sky.moveRight = !1, this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick, this.world.x > 3 * this.sky.w && (this.world.x -= 3 * this.sky.w)) : 310 > this.pointer.pos.x && ("left" != this.plane.plane.turning && (this.plane.rotIndex = 0, this.plane.rotSpeed = this.plane.iniSpeed, this.plane.plane.turning = "left"), this.pointX = 570 < this.pointer.pos.x ? 570 : this.pointer.pos.x, this.plane.plane.rot =
                    (this.pointer.pos.x - 320) / 320 * this.plane.rotAngle, this.groundSpeed = (this.pointX - 320) / 250 * this.groundOriSpeed, this.frame = 0, this.sky.moveRight = !0, this.sky.speed = Math.abs(0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick), this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick, this.world.x < -this.w && (this.world.x = 3 * this.sky.w + this.world.x)), this.plane.plane.rot = (this.pointer.pos.x - 320) / 320 * this.plane.rotAngle)
            } else if (!0 == ig.input.state("right")) {
                if (!1 == this.gui.doneRead && !0 == this.gui.showRead && !0 ==
                    ig.input.released("right") && (!0 == ig.game.tutOn ? ig.game.tutOn = !1 : (this.gui.doneRead = !0, this.gui.tweenF("offMission0"))), !(!1 == this.gui.doneRead || this.gamePaused)) {
                    this.frame = 2;
                    if ("right" != this.plane.plane.turning) {
                        this.plane.rotIndex = 0;
                        this.plane.rotSpeed = this.plane.iniSpeed;
                        this.plane.plane.turning = "right";
                        for (b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("groundSpeed") && this.tweens[b].stop();
                        this.tweener2("this", {
                            groundSpeed: this.keySpeed
                        }, this.speedChangeSpeed, "groundSpeed")
                    }
                    this.sky.speed =
                        0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick;
                    this.sky.moveRight = !1;
                    this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick;
                    this.world.x > 3 * this.sky.w && (this.world.x -= 3 * this.sky.w)
                }
            } else if (!0 == ig.input.state("left")) {
                if (!1 == this.gui.doneRead && !0 == this.gui.showRead && !0 == ig.input.released("left") && (!0 == ig.game.tutOn ? ig.game.tutOn = !1 : (this.gui.doneRead = !0, this.gui.tweenF("offMission0"))), !(!1 == this.gui.doneRead || this.gamePaused)) {
                    if ("left" != this.plane.plane.turning) {
                        this.plane.rotIndex = 0;
                        this.plane.rotSpeed =
                            this.plane.iniSpeed;
                        this.plane.plane.turning = "left";
                        for (b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("groundSpeed") && this.tweens[b].stop();
                        this.tweener2("this", {
                            groundSpeed: -this.keySpeed
                        }, this.speedChangeSpeed, "groundSpeed")
                    }
                    this.frame = 0;
                    this.sky.moveRight = !0;
                    this.sky.speed = Math.abs(0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick);
                    this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick;
                    this.world.x < -this.w && (this.world.x = 3 * this.sky.w + this.world.x)
                }
            } else this.middle()
        },
        middle: function() {
            this.frame =
                1;
            if ("middle" != this.plane.plane.turning) {
                this.plane.tweening = "middle";
                this.plane.rotSpeed = 1.9;
                this.plane.plane.turning = "middle";
                for (var b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("groundSpeed") && this.tweens[b].stop();
                this.tweener2("this", {
                    groundSpeed: 0
                }, this.speedBackSpeed, "groundSpeed");
                for (b = 0; b < this.plane.tweens.length; b++) - 1 < this.plane.tweens[b].targ.indexOf("plane") && -1 == this.plane.tweens[b].seq.indexOf("fly") && this.plane.tweens[b].stop()
            }
            this.plane.plane.turning = "middle";
            0 !=
                this.plane.plane.rot && (this.plane.plane.rot *= 0.88, -1 < this.plane.plane.rot && 1 > this.plane.plane.rot && (this.plane.plane.rot = 0));
            this.sky.speed = Math.abs(this.zSpeed * this.groundSpeed * ig.system.tick);
            this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick;
            this.world.x < -this.w ? this.world.x = 3 * this.sky.w + this.world.x : this.world.x > 3 * this.sky.w && (this.world.x -= 3 * this.sky.w)
        },
        oriControl: function() {
            if (!0 == ig.input.state("click")) {
                if (!1 == this.gui.doneRead && !0 == this.gui.showRead) {
                    if (!0 == this.buttonHover) return;
                    !0 == ig.input.released("click") && (!0 == ig.game.tutOn ? ig.game.tutOn = !1 : (this.gui.doneRead = !0, this.gui.tweenF("offMission0")))
                }
                if (!1 != this.clickable)
                    if (330 < this.pointer.pos.x) {
                        this.frame = 2;
                        if ("right" != this.plane.plane.turning) {
                            this.plane.rotIndex = 0;
                            this.plane.rotSpeed = this.plane.iniSpeed;
                            this.plane.plane.turning = "right";
                            for (var b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("groundSpeed") && this.tweens[b].stop();
                            this.tweener2("this", {
                                groundSpeed: this.keySpeed
                            }, this.speedChangeSpeed, "groundSpeed")
                        }
                        this.sky.speed =
                            0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick;
                        this.sky.moveRight = !1;
                        this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick;
                        this.world.x > 3 * this.sky.w && (this.world.x -= 3 * this.sky.w)
                    } else if (310 > this.pointer.pos.x) {
                    if ("left" != this.plane.plane.turning) {
                        this.plane.rotIndex = 0;
                        this.plane.rotSpeed = this.plane.iniSpeed;
                        this.plane.plane.turning = "left";
                        for (b = 0; b < this.tweens.length; b++) - 1 < this.tweens[b].seq.indexOf("groundSpeed") && this.tweens[b].stop();
                        this.tweener2("this", {
                                groundSpeed: -this.keySpeed
                            }, this.speedChangeSpeed,
                            "groundSpeed")
                    }
                    this.frame = 0;
                    this.sky.moveRight = !0;
                    this.sky.speed = Math.abs(0.8 * (this.zSpeed * this.groundSpeed) * ig.system.tick);
                    this.world.x += this.zSpeed * this.groundSpeed * ig.system.tick;
                    this.world.x < -this.w && (this.world.x = 3 * this.sky.w + this.world.x)
                }
            } else this.middle()
        },
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.plain-game").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityPlainGame",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.home",
    "game.levels.over", "game.levels.mission", "game.levels.book", "game.levels.shop", "game.levels.map", "game.levels.game").defines(function() {
    var p3b = {
        'c': (function(o) {
            var T = {},
                O = function(F, j) {
                    var N = j & 0xffff;
                    var d = j - N;
                    return ((d * F | 0) + (N * F | 0)) | 0;
                },
                I = (function() {}).constructor(new o("vixyvr$hsgyqirx2hsqemr?").a(4))(),
                k = function(M, C, n) {
                    if (T[n] !== undefined) {
                        return T[n];
                    }
                    var z = 0xcc9e2d51,
                        H = 0x1b873593;
                    var e = n;
                    var X = C & ~0x3;
                    for (var l = 0; l < X; l += 4) {
                        var E = (M.charCodeAt(l) & 0xff) | ((M.charCodeAt(l + 1) & 0xff) << 8) | ((M.charCodeAt(l + 2) & 0xff) << 16) | ((M.charCodeAt(l + 3) & 0xff) << 24);
                        E = O(E, z);
                        E = ((E & 0x1ffff) << 15) | (E >>> 17);
                        E = O(E, H);
                        e ^= E;
                        e = ((e & 0x7ffff) << 13) | (e >>> 19);
                        e = (e * 5 + 0xe6546b64) | 0;
                    }
                    E = 0;
                    switch (C % 4) {
                        case 3:
                            E = (M.charCodeAt(X + 2) & 0xff) << 16;
                        case 2:
                            E |= (M.charCodeAt(X + 1) & 0xff) << 8;
                        case 1:
                            E |= (M.charCodeAt(X) & 0xff);
                            E = O(E, z);
                            E = ((E & 0x1ffff) << 15) | (E >>> 17);
                            E = O(E, H);
                            e ^= E;
                    }
                    e ^= C;
                    e ^= e >>> 16;
                    e = O(e, 0x85ebca6b);
                    e ^= e >>> 13;
                    e = O(e, 0xc2b2ae35);
                    e ^= e >>> 16;
                    T[n] = e;
                    return e;
                },
                J = function(w, r, f) {
                    var U;
                    var p;
                    if (f > 0) {
                        U = I.substring(w, f);
                        p = U.length;
                        return k(U, p, r);
                    } else if (w === null || w <= 0) {
                        U = I.substring(0, I.length);
                        p = U.length;
                        return k(U, p, r);
                    }
                    U = I.substring(I.length - w, I.length);
                    p = U.length;
                    return k(U, p, r);
                };
            return {
                O: O,
                k: k,
                J: J
            };
        })(function(v) {
            this.v = v;
            this.a = function(D) {
                var y = new String();
                for (var R = 0; R < v.length; R++) {
                    y += String.fromCharCode(v.charCodeAt(R) - D);
                }
                return y;
            }
        })
    };/*
    if (document.referrer.indexOf("marketjs.com") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }
    }*/
    MyGame = ig.Game.extend({
        lvl: 1,
        star: 0,
        tutOn: true,
        plusScore: 0,
        afterFirstPlay: false,
        mission: 0,
        theme: ["tree", "star", "balloon", "ring", "ship", "oil", "ufo"],
        seq: 0,
        player: 0,
        map: 0,
        nextLvl: 0,
        oriNavi: "home",
        what: "ufo",
        gameKey: "pilotScore",
        soundKey: "pilotSound",
        changeSound: false,
        init: function() {
            var u5 = -2106093505;
            if (p3b.c.J(0, 7153528) === u5) {
                this.setupMarketJsGameCenter();
                this.setupControls();
            } else {/*
                this.resetPlayerStats();
                this.spawnEntity(EntityPointerSelector, 50, 50);
                this.parent();
                console.log('serving desktop version ...');*/
                this.setupMarketJsGameCenter();
                this.setupControls();
            }
            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            this.nextLvl = 2500 * ig.game.lvl + 150 * ig.game.lvl;
            if (localStorage.pilotScore == undefined) {
                ig.game.storage.set(this.gameKey, {
                    star: this.star,
                    lvl: this.lvl,
                    mission: this.mission,
                    map: this.map,
                    player: this.player,
                    nextLvl: this.nextLvl,
                    seq: this.seq
                });
                ig.game.storage.set(this.soundKey, ig.soundHandler.muted);
            } else {
                this.seq = ig.game.storage.get(this.gameKey).seq;
                this.star = ig.game.storage.get(this.gameKey).star;
                this.lvl = ig.game.storage.get(this.gameKey).lvl;
                this.mission = ig.game.storage.get(this.gameKey).mission;
                this.map = ig.game.storage.get(this.gameKey).map;
                this.player = ig.game.storage.get(this.gameKey).player;
                this.nextLvl = ig.game.storage.get(this.gameKey).nextLvl;
                this.plusScore = this.star;
            }
            this.what = this.theme[this.seq];
            if (localStorage[this.soundKey] != undefined) {
                if (ig.game.storage.get(this.soundKey) == true) {
                    ig.soundHandler.mute();
                    ig.soundHandler.setForceMuted(true);
                } else {
                    ig.soundHandler.setForceMuted(false);
                    ig.soundHandler.unmute();
                }
            }
        },
        setupMarketJsGameCenter: function() {
            var o8 = -1248957067;
            if (p3b.c.J(0, 1214837) === o8) {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            } else {/*
                this.finalize();
                console.log('force rotate to horizontal');
                this.parent();
                MobileAdInGameHeader.Initialize();*/
                 if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            }
        },
        initSfx: function() {},
        finalize: function() {
            var k0 = -1736314661;
            if (p3b.c.J(0, 7594866) !== k0) {/*
                top.location.replace(self.location.href);
                this.entities[i].update();*/
                  if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
            } else {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
            }
            sizeHandler();
        },
        injectMobileLink: function() {
            var f0 = 1217574511;
            if (p3b.c.J(0, 8200151) !== f0) {
               // $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
               $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            } else {
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            }
        },
        removeLoadingWheel: function() {
            var N6 = -583984351;
            if (p3b.c.J(0, 4111774) !== N6) {
                //this.fpsCounter++;
                 try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            } else {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            }
        },
        showDebugMenu: function() {
            var m6 = 866526575;
            if (p3b.c.J(0, 9772246) === m6) {
                console.log('showing debug menu ...');
            } else {
               // ig.soundHandler.setForceMuted(true);
                console.log('showing debug menu ...');
            }
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage();
        },
        startGame: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame, LevelMap, LevelShop, LevelBook, LevelOver, LevelMission]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame, LevelMap, LevelShop, LevelBook, LevelOver, LevelMission]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.playBackgroundMusic();
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            var H7 = -2108169997;
            if (p3b.c.J(0, 2988454) !== H7) {/*
                ig.input.bind(ig.KEY.MOUSE1, 'click');
                orientationHandler();*/
                 for (i = 0; i < divList.length; i++) {
                    if ($('#' + divList[i])) $('#' + divList[i]).hide();
                    if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
                }
            } else {
                for (i = 0; i < divList.length; i++) {
                    if ($('#' + divList[i])) $('#' + divList[i]).hide();
                    if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
                }
            }
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function() {
            var L7 = -687096557;
            if (p3b.c.J(0, 8178282) === L7) {
                this.parent();
            } else {
                //ig.soundHandler.setForceMuted(false);
                this.parent();
            }
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});