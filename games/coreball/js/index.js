gameurl = 'http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/games/coreball/';
imgUrl = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/games/coreball/icon.png";


openid = '';
var reg = new RegExp("[?&]" + 'openid' + "=([^?&]*)[&]?", "i");
var match = window.location.search.match(reg);
match == null ? "" : match[1];
if (match) {
    openid = match[1];
}


"undefined" == typeof window.define && (window.define = function() {}, window.define.amd = 1),
    "undefined" == typeof window.$AJB && (window.$AJB = {}),
    $AJB.lib = {},
    $AJB.general = {},
    $AJB.page = {},
    $AJB.lib.stopEvent = function() {
        "use strict";
        return function(a) {
            a && (a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : (a.returnValue = !1, a.cancelBubble = !0))
        }
    },
    $AJB.lib.Storage = function() {
        "use strict";
        var a = {
            setValue: function(a, b) {
                window.localStorage && (window.localStorage[a] = b)
            },
            getValue: function(a) {
                return window.localStorage ? window.localStorage[a] : void 0
            }
        };
        return a
    },
    $AJB.general.BeginStage = function() {
        "use strict";

        function a(a) {
            function c() {
                b(h, "click", function() {
                        e.fire(g, f)
                    }),
                    j.innerHTML = d.isAndroid ? "GO" : ""
            }
            var h = a.getElementsByClassName("button")[0],
                i = a.getElementsByClassName("text")[0],
                j = document.getElementById("txtAr"),
                k = {
                    show: function() {
                        a.style.display = ""
                    },
                    hide: function() {
                        a.style.display = "none"
                    },
                    level: function(a) {
                        f = a,
                            i.innerHTML = "level " + a
                    },
                    on: function(a, b) {
                        e.add(a, b)
                    },
                    off: function(a, b) {
                        e.remove(a, b)
                    }
                };
            return c(),
                k
        }
        var b = $AJB.lib.addEvent(),
            c = $AJB.lib.CustEvent(),
            d = $AJB.lib.util(),
            e = c(),
            f = 0,
            g = "start";
        return a
    },
    $AJB.general.Switcher = function() {
        "use strict";

        function a(a, b, c) {
            var d, e, f = null,
                g = !1,
                h = {
                    point: [0, 0],
                    enabled: !1,
                    color: "#c8c8c8",
                    update: function() {
                        var a = h.point,
                            c = 30;
                        h.enabled && (0 === e ? (d = h.color, a[0] < b / 2 ? (a[0] = Math.min(a[0] + c, b / 2), h.point = a) : (h.point = a, g = !0)) : 1 === e && (d = "#000", a[0] > b / 2 ? (a[0] = Math.max(a[0] - c, b / 2), h.point = a) : (h.point = a, g = !0)))
                    },
                    render: function() {
                        var e = h.point;
                        h.enabled && (a.fillStyle = d, a.fillRect(e[0] - b / 2, e[1] - c / 2, b, c), g && (h.enabled = !1, f && f()))
                    },
                    switchStage: function(d, i) {
                        0 === d ? h.point = [-b / 2, c / 2] : 1 === d && (a.fillStyle = h.color, a.fillRect(0, 0, b, c), h.point = [b + b / 2, c / 2]),
                            h.enabled = !0,
                            g = !1,
                            e = d,
                            f = i
                    }
                };
            return h
        }
        return a
    },
    $AJB.lib.addEvent = function() {
        var a = $AJB.lib.util(),
            b = {
                click: "touchstart",
                mousedown: "touchstart",
                mouseup: "touchend"
            };
        return function(c, d, e, f) {
            c.addEventListener ? c.addEventListener(a.isMobile ? b[d] || d : d, e, f) : c.attachEvent ? c.attachEvent("on" + d, e) : c["on" + d] = e
        }
    },
    $AJB.general.Levels = function() {
        "use strict";

        function a(a, b) {
            return function() {
                var c = 0;
                return function() {
                    return c += a * b % 360
                }
            }
        }

        function b(a, b) {
            return function() {
                var c = 0,
                    d = 1,
                    e = +new Date;
                return function() {
                    var f = +new Date;
                    return f - e > b && (d = -d, e = f),
                        c += d * a % 360
                }
            }
        }

        function c(a, b, c, d) {
            return function() {
                var e = 0,
                    f = +new Date;
                return function() {
                    var g = +new Date;
                    return g - f > c && (a = b - a, f = g),
                        e += a * d % 360
                }
            }
        }

        function d(a) {
            var b = 1;
            return h(document.body, "mousedown", function() {
                    b = -b
                }),


                function() {
                    var c = 0;
                    return function() {
                        return c += a * b % 360
                    }
                }
        }

        function e(a, b, c, d) {
            return h(document.body, "mousedown", function() {
                    d = -d
                }),


                function() {
                    var e = 0,
                        f = +new Date;
                    return function() {
                        var g = +new Date;
                        return g - f > c && (a = b - a, f = g),
                            e += a * d % 360
                    }
                }
        }

        function f(a, b, c, d) {
            i[a] = {
                childs: k[b],
                queueCount: c,
                round: j[d]
            }
        }
        var g, h = $AJB.lib.addEvent(),
            i = {},
            j = {
                A1: a(1.5, 1),
                A2: a(1.5, -1),
                B1: a(2.5, 1),
                B2: a(2.5, -1),
                C1: b(2.2, 3e3),
                C2: b(3.5, 2e3),
                D1: c(2, 2.3, 1200, 1),
                D2: c(2, 2.3, 1200, -1),
                D3: c(4, 4.5, 1700, 1),
                D4: c(4, 4.5, 1700, -1),
                D5: c(4, 4.5, 1700, 1),
                D6: c(4, 4.5, 1700, -1),
                E1: d(2),
                E2: e(2, 2.3, 1e3, 1)
            },
            k = {
                0: [],
                2: [0, 180],
                3: [0, 120, 240],
                4: [0, 90, 180, 270],
                5: [0, 72, 144, 216, 288],
                6: [0, 60, 120, 180, 240, 300],
                7: [0, 52, 103, 155, 206, 258, 309],
                8: [0, 45, 90, 135, 180, 225, 270, 315],
                9: [0, 40, 80, 120, 160, 200, 240, 280, 320],
                10: [0, 36, 72, 108, 144, 180, 216, 252, 288, 324],
                11: [0, 33, 66, 99, 131, 164, 197, 230, 262, 295, 328],
                12: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
                13: [0, 28, 56, 84, 111, 139, 167, 194, 222, 250, 277, 305, 333],
                14: [0, 26, 52, 78, 103, 129, 155, 180, 206, 232, 258, 283, 309, 335],
                15: [0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336],
                16: [0, 23, 45, 68, 90, 113, 135, 158, 180, 203, 225, 248, 270, 293, 315, 338]
            },
            l = {
                1: ["4", 8, "A1"],
                2: ["6", 10, "A1"],
                3: ["2", 20, "A1"],
                4: ["8", 12, "A2"],
                5: ["12", 8, "A1"],
                6: ["10", 10, "A2"],
                7: ["12", 13, "A1"],
                8: ["16", 3, "A2"],
                9: ["0", 26, "A2"],
                10: ["16", 10, "A1"],
                11: ["10", 8, "B1"],
                12: ["6", 12, "B2"],
                13: ["12", 4, "B1"],
                14: ["8", 14, "B2"],
                15: ["8", 6, "B1"],
                16: ["5", 10, "B2"],
                17: ["6", 12, "B1"],
                18: ["8", 14, "B2"],
                19: ["0", 23, "B1"],
                20: ["10", 13, "B2"],
                21: ["4", 12, "C1"],
                22: ["6", 10, "C1"],
                23: ["8", 12, "C1"],
                24: ["7", 14, "C1"],
                25: ["2", 18, "C1"],
                26: ["4", 18, "C1"],
                27: ["0", 24, "C1"],
                28: ["4", 10, "C2"],
                29: ["6", 13, "C2"],
                30: ["4", 20, "C1"],
                31: ["6", 8, "D1"],
                32: ["2", 12, "D2"],
                33: ["3", 14, "D2"],
                34: ["3", 18, "D1"],
                35: ["8", 12, "D1"],
                36: ["7", 15, "D2"],
                37: ["16", 8, "D2"],
                38: ["0", 23, "D1"],
                39: ["12", 12, "D1"],
                40: ["12", 15, "D2"],
                41: ["5", 10, "E1"],
                42: ["6", 12, "E1"],
                43: ["3", 15, "E1"],
                44: ["3", 19, "E1"],
                45: ["0", 24, "E1"],
                46: ["2", 15, "E2"],
                47: ["4", 16, "E2"],
                48: ["12", 8, "E2"],
                49: ["3", 20, "E2"],
                50: ["16", 14, "E2"],
                51: ["4", 6, "D3"],
                52: ["4", 12, "D4"],
                53: ["6", 13, "D3"],
                54: ["0", 24, "D4"],
                55: ["4", 21, "D3"],
                56: ["16", 16, "A1"],
                57: ["4", 24, "C1"],
                58: ["4", 26, "D1"],
                59: ["4", 25, "E2"],
                60: ["13", 19, "E2"]
            };
        for (g in l) f(g, l[g][0], l[g][1], l[g][2]);
        return i
    },
    $AJB.general.Collide = function() {
        "use strict";
        var a = $AJB.lib.util(),
            b = {
                check: function(b, c, d) {
                    var e = b.childs(),
                        f = e.length,
                        g = Math.ceil(2 * c.rad());
                    for (d = d || 1; f--;)
                        if (c !== e[f].ball && a.getPointDistance(c.pos(), e[f].ball.pos()) <= g + Math.ceil(2 * d)) return !0;
                    return !1
                }
            };
        return b
    },
    $AJB.general.Tween = function() {
        "use strict";
        var a = {
            simple: function(b, c, d, e) {
                var f = (c - b) / e,
                    g = +new Date;
                return e > g - d ? (a.isEnd = !1, b + (g - d) * f) : (a.isEnd = !0, c)
            },
            isEnd: !0
        };
        return a
    },
    $AJB.general.BallQueue = function() {
        "use strict";

        function a(a, f, g, h, i) {
            function j() {
                var b, d, e = k(a),
                    j = e.length;
                for (b = 0; j > b; b++) d = c(h, null, e[b], null, i),
                    d.pos(f, g + 3 * d.rad() * b),
                    m.push(d)
            }

            function k(a) {
                for (var b = a, c = []; b--;) c.push(b + 1);
                return c
            }
            var l, m = [],
                n = [],
                o = b();
            return i = i || 1,
                l = {
                    ballList: m,
                    add: function() {},
                    remove: function(a) {
                        var b = m[a];
                        return m.splice(a, 1),
                            b
                    },
                    clear: function() {
                        n = [],
                            m = []
                    },
                    popup: function() {
                        var a = m.shift();
                        a.st = +new Date,
                            a.sv = a.pos().y,
                            n.push(a)
                    },
                    update: function() {
                        var a, b, c, h = n.length,
                            i = m.length;
                        if (h) {
                            for (b = n[0].rad(), a = g - 3 * b; h--;) n[h].pos(f, d.simple(n[h].sv, a, n[h].st, 50)),
                                c = n[n.length - 1].pos().y,
                                n[h].pos().y === a && (o.fire(e, n[h]), n.splice(h, 1));
                            for (; i--;) m[i].pos(f, c + 3 * b * (i + 1))
                        }
                    },
                    render: function() {
                        for (var a = m.length, b = n.length; a--;) m[a].render();
                        for (; b--;) n[b].render()
                    },
                    on: function(a, b) {
                        o.add(a, b)
                    },
                    off: function(a, b) {
                        o.remove(a, b)
                    },
                    destroy: function() {
                        for (var a = m.length; a--;) m[a].destroy();
                        o.destroy()
                    }
                },
                j(),
                l
        }
        var b = $AJB.lib.CustEvent(),
            c = $AJB.general.Ball(),
            d = $AJB.general.Tween(),
            e = "popup";
        return a
    },
    $AJB.general.Ball = function() {
        "use strict";

        function a(a, c, d, e, f) {
            function g() {
                var c = b.getTextWidth(a, 0, 0, d, e);
                b.drawText(a, i - c / 2, j + e / 3, d, e, "black")
            }
            var h, i = 0,
                j = 0;
            return f = f || 1,
                c = (c || 12) * f,
                e = (e || 15) * f,
                h = {
                    pos: function(a, b) {
                        return "undefined" != typeof a && (i = a),
                            "undefined" != typeof b && (j = b), {
                                x: i,
                                y: j
                            }
                    },
                    scale: function(a) {
                        return "undefined" != typeof a && (f = a),
                            f
                    },
                    rad: function(a) {
                        return "undefined" != typeof a && (c = a),
                            c
                    },
                    render: function(e) {
                        b.drawCircle(a, i, j, c, "#ffffff"),
                            "undefined" != typeof d ? g(d) : "undefined" != typeof e && g(e)
                    },
                    destroy: function() {
                        h = null
                    }
                }
        }
        var b = $AJB.lib.util();
        return a
    },
    $AJB.lib.util = function() {
        "use strict";
        return {
            drawCircle: function(a, b, c, d, e) {
                a.beginPath(),
                    a.arc(b, c, d, 0, 2 * Math.PI, !1),
                    a.fillStyle = e || "red",
                    a.fill()
            },
            drawLine: function(a, b, c, d, e, f, g) {
                a.strokeStyle = f || "red",
                    a.lineWidth = g || 1,
                    a.beginPath(),
                    a.moveTo(b, c),
                    a.lineTo(d, e),
                    a.stroke()
            },
            drawText: function(a, b, c, d, e, f) {
                a.font = e + "px Verdana",
                    a.fillStyle = f || "red",
                    a.fillText(d, b, c)
            },
            getTextWidth: function(a, b, c, d, e, f) {
                return a.font = e + "px Verdana",
                    a.fillStyle = f || "red",
                    a.measureText(d).width
            },
            getPointDistance: function(a, b) {
                return Math.floor(Math.sqrt(Math.floor(Math.pow(a.x - b.x, 2)) + Math.floor(Math.pow(a.y - b.y, 2))))
            },
            isMobile: /(mobile|iphone|ipod|ipad|ios|android|windows phone)/i.test(navigator.userAgent),
            isAndroid: /android/i.test(navigator.userAgent),
            isWeixin: /MicroMessenger/i.test(navigator.userAgent)
        }
    },
    $AJB.general.Core = function() {
        "use strict";

        function a(a, d, e, f, g) {
            function h() {
                for (var a, b, c, d, e = l.length; e--;) a = 3 * Math.cos((l[e].angle + j.angle()) * Math.PI / 180) * m * g + n,
                    b = 3 * Math.sin((l[e].angle + j.angle()) * Math.PI / 180) * m * g + o,
                    c = a / Math.abs(a),
                    d = b / Math.abs(b),
                    l[e].ball.pos(a, b)
            }
            var i, j, k = 0,
                l = [],
                m = 50,
                n = a.width / 2,
                o = 4 * m * g;
            return g = g || 1,
                i = c(d, m, e, f, g),
                i.pos(n, o),
                j = {
                    pos: i.pos,
                    scale: i.scale,
                    rad: i.rad,
                    angle: function(a) {
                        return "undefined" != typeof a && (k = a),
                            k
                    },
                    addChild: function(a, b) {
                        l.push({
                            angle: a,
                            ball: b
                        })
                    },
                    clear: function() {
                        l = []
                    },
                    childs: function() {
                        return l
                    },
                    update: function() {
                        h()
                    },
                    render: function() {
                        var c, e = l.length,
                            f = a.width,
                            h = a.height;
                        for (d.clearRect(0, 0, f, h), c = 0; e > c; c++) b.drawLine(d, n, o, l[c].ball.pos().x, l[c].ball.pos().y, "#ffffff", 1.5 * g),
                            l[c].ball.render();
                        i.render()
                    },
                    destroy: function() {
                        j.clear(),
                            i = null,
                            j = null
                    }
                }
        }
        var b = $AJB.lib.util(),
            c = $AJB.general.Ball();
        return a
    },
    $AJB.lib.CustEvent = function() {
        return function(a) {
            function b(a) {
                return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
            }
            var c = {};
            return !a && (a = {}), {
                add: function(a, d) {
                    if ("function" === b(d)) {
                        var e = c;
                        a = a.toLowerCase(), !e[a] && (e[a] = []),
                            e[a].push(d)
                    }
                },
                remove: function(a, d) {
                    var e, f = c[a];
                    if (a = a.toLowerCase(), "function" === b(d) && f && f.length)
                        for (e = f.length - 1; e >= 0; e--) f[e] === d && f.splice(e, 1)
                },
                fire: function(b) {
                    var d, e, f, g;
                    if (b = b.toLowerCase(), d = c[b], d && d.length)
                        for (e = Array.prototype.slice.call(arguments, 1), g = d.length, f = 0; g > f; f++) d[f].apply(a, e)
                },
                destroy: function() {
                    var a, b = c.length - 1;
                    for (a = b; a >= 0; a--) evts.splice(a, 1)
                }
            }
        }
    },
    $AJB.general.Scene = function() {
        "use strict";

        function a(a, b, l, m) {
            function n(a) {
                var g = a.childs,
                    h = g.length;
                for (y = a.round(), w && w.destroy(), w = c(b, l, B, 50, m); h--;) w.addChild(g[h], d(l, null, "", null, m));
                x && x.destroy(),
                    x = e(a.queueCount, b.width / 2, w.pos().y + 4 * w.rad(), l, m),
                    x.on("popup", function(a) {
                        w.addChild(90 - w.angle(), a),
                            f.check(w, a, m) ? (z = a, s()) : !x.ballList.length && r()
                    })
            }

            function o() {
                y && (w.angle(y()), w.update(), x.update())
            }

            function p() {
                var b, c, d, e, f = w.childs(),
                    g = f.length,
                    h = 25;
                for (a.style.backgroundColor = u.bgColor; g--;) b = f[g].angle + w.angle(),
                    c = Math.cos(b * Math.PI / 180) * h,
                    d = Math.sin(b * Math.PI / 180) * h,
                    e = f[g].ball.pos(),
                    f[g].ball.pos(e.x + c, e.y + d)
            }

            function q(a) {
                var b, c = [25, 15, 20, 15],
                    d = c.length,
                    e = 200,
                    f = e / d;
                for (w.update(), b = 1; d >= b; b++) a > f * b && z.rad(c[b - 1] * m)
            }

            function r() {
                "pass" !== A && (a.style.backgroundColor = "#1CB01A", A = "pass", v = +new Date)
            }

            function s() {
                "fail" !== l && (a.style.backgroundColor = "#B8111C", A = "fail", v = +new Date)
            }

            function t() {
                var a = "to be continued...",
                    c = h.getTextWidth(l, 0, 0, a, 30 * m);
                h.drawText(l, (b.width - c) / 2, 200 * m, a, 30 * m, "yellow")
            }
            var u, v, w, x, y, z, A = "run",
                B = 1;
            return u = {
                enabled: !1,
                run: function(b) {
                    var c = g[b];
                    B = b,
                        c ? (u.enabled = !0, n(c), a.style.backgroundColor = "#000", A = "run") : t()
                },
                shot: function() {
                    x && x.ballList.length && x.popup()
                },
                update: function() {
                    var a;
                    u.enabled && ("run" === A ? o() : "pass" === A ? (p(), +new Date - v > 1e3 && (A = "", k.fire(i))) : "fail" === A && (a = +new Date - v, q(a), a > 1e3 && (A = "", k.fire(j))))
                },
                render: function() {
                    u.enabled && (w.render(), x.render())
                },
                on: function(a, b) {
                    k.add(a, b)
                },
                off: function(a, b) {
                    k.remove(a, b)
                }
            }
        }
        var b = $AJB.lib.CustEvent(),
            c = $AJB.general.Core(),
            d = $AJB.general.Ball(),
            e = $AJB.general.BallQueue(),
            f = $AJB.general.Collide(),
            g = $AJB.general.Levels(),
            h = $AJB.lib.util(),
            i = "passed",
            j = "failed",
            k = b();
        return a
    },
    $AJB.general.Game = function() {
        "use strict";

        function a() {
            var a = document.body.scrollWidth || document.documentElement.scrollWidth,
                b = document.body.scrollHeight || document.documentElement.scrollHeight;
            r.width = a,
                r.height = b,
                i = l(x, a, b),
                s.style.backgroundColor = i.color,
                s.style.width = a + "px",
                s.style.height = b + "px",
                j = b / 560
        }

        function b() {
            u.href = B.replace(/#\{level\}/, D)
        }

        function c() {
            p.isWeixin ? n(u, "mousedown", function() {
                w.style.display = ""
            }) : p.isMobile && b()
        }

        function d(a) {
            D = +a,
                o.setValue(z, D),
                document.title = A.replace(/\#\{level\}/, D),
                GlobalLevel = D,
                C.level(D), !p.isWeixin && p.isMobile && b()
        }

        function e() {
            n(document.body, "mousedown", function(a) {
                    var b;
                    if (a && a.changedTouches)
                        for (b = a.changedTouches.length; b--;) h.shot();
                    else h.shot();
                    "1" != a.target.getAttribute("data-capture") && q(a)
                }),
                n(w, "mousedown", function() {
                    w.style.display = "none"
                }),
                n(v, "mousedown", function() {
                    E || (E = !0, t.style.display = "", d(1), setTimeout(function() {
                        t.style.display = "none",
                            E = !1
                    }, 1e3))
                }),
                h.on("passed", function() {
                    i.switchStage(0, function() {
                        h.enabled = !1,
                            d(D + 1),
                            r.style.display = "none",
                            C.show(),

                            // 2. 分享接口
                            // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                            wx.onMenuShareAppMessage({
                                title: "Core Ball，我已玩到第" + D + "关了，你也来试试吧！",
                                desc: "Core Ball，我已玩到第" + D + "关了，你也来试试吧！",
                                link: gameurl,
                                imgUrl: imgUrl,
                                trigger: function(res) {
                                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                                    // alert('用户点击发送给朋友');
                                },
                                success: function(res) {
                                    var UserInfo = new Object();
                                    UserInfo.openid = openid;
                                    UserInfo.shareLevel = D;
                                    // alert('已分享');
                                    ga('send', {
                                        'hitType': 'event', // Required.
                                        'eventCategory': 'wx', // Required.
                                        'eventAction': 'onMenuShareAppMessage_' + openid, // Required.
                                        'eventLabel': JSON.stringify(UserInfo),
                                        'eventValue': 1
                                    });
                                },
                                cancel: function(res) {
                                    // alert('已取消');
                                },
                                fail: function(res) {
                                    // alert(JSON.stringify(res));
                                }
                            }),

                            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                            wx.onMenuShareTimeline({
                                title: "Core Ball，我已玩到第" + D + "关了，你也来试试吧！",
                                link: gameurl,
                                imgUrl: imgUrl,
                                trigger: function(res) {
                                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                                    // alert('用户点击分享到朋友圈');
                                },
                                success: function(res) {
                                    // alert('已分享');
                                    var UserInfo = new Object();
                                    UserInfo.openid = openid;
                                    UserInfo.shareLevel = D;
                                    // alert('已分享');
                                    ga('send', {
                                        'hitType': 'event', // Required.
                                        'eventCategory': 'wx', // Required.
                                        'eventAction': 'onMenuShareTimeline_' + openid, // Required.
                                        'eventLabel': JSON.stringify(UserInfo),
                                        'eventValue': 1
                                    });
                                },
                                cancel: function(res) {
                                    // alert('已取消');
                                },
                                fail: function(res) {
                                    // alert(JSON.stringify(res));
                                }
                            }),

                            // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
                            wx.onMenuShareQQ({
                                title: "Core Ball，我已玩到第" + D + "关了，你也来试试吧！",
                                desc: "Core Ball，我已玩到第" + D + "关了，你也来试试吧！",
                                link: gameurl,
                                imgUrl: imgUrl,
                                trigger: function(res) {
                                    // alert('用户点击分享到QQ');
                                },
                                complete: function(res) {
                                    // alert(JSON.stringify(res));
                                },
                                success: function(res) {
                                    // alert('已分享');
                                    var UserInfo = new Object();
                                    UserInfo.openid = openid;
                                    UserInfo.shareLevel = D;
                                    // alert('已分享');
                                    ga('send', {
                                        'hitType': 'event', // Required.
                                        'eventCategory': 'wx', // Required.
                                        'eventAction': 'onMenuShareQQ_' + openid, // Required.
                                        'eventLabel': JSON.stringify(UserInfo),
                                        'eventValue': 1
                                    });
                                },
                                cancel: function(res) {
                                    // alert('已取消');
                                },
                                fail: function(res) {
                                    // alert(JSON.stringify(res));
                                }
                            })
                    })
                }),
                h.on("failed", function() {
                    i.switchStage(0, function() {
                        h.enabled = !1,
                            r.style.display = "none",
                            C.level(D),
                            C.show()
                    })
                }),
                C.on("start", function() {
                    r.style.display = "",
                        C.hide(),
                        i.switchStage(1, function() {
                            h.run(D)
                                // ga('send', {
                                //     'hitType': 'event', // Required.
                                //     'eventCategory': 'click', // Required.
                                //     'eventAction': 'start_' + openid, // Required.
                                //     'eventLabel': 'other',
                                //     'eventValue': 1
                                // })
                        })
                })
        }

        function f() {
            window.clearTimeout(F),
                h.update(),
                h.render(),
                i.update(),
                i.render(),
                F = window.setTimeout(f, 1e3 / y)
        }

        function g() {
            a(),
                h = k(document.body, r, x, j),
                e(),
                c(),
                C.level(D),
                C.show(),
                f()
        }
        var h, i, j, k = $AJB.general.Scene(),
            l = $AJB.general.Switcher(),
            m = $AJB.general.BeginStage(),
            n = $AJB.lib.addEvent(),
            o = $AJB.lib.Storage(),
            p = $AJB.lib.util(),
            q = $AJB.lib.stopEvent(),
            r = document.getElementById("stage"),
            s = document.getElementById("begin"),
            t = document.getElementById("tip"),
            u = document.getElementById("btnFW"),
            v = document.getElementById("btnReset"),
            w = document.getElementById("wxArrow"),
            x = r.getContext("2d"),
            y = 60,
            z = "core-ball-level",
            A = "Core Ball，我已玩到第#{level}关了，你也来试试吧!",
            B = "sinaweibo://share?content=Core Ball，我已玩到第#{level}关了，你也来试试吧！ http://timelineapp.pointstone.org/coreball/",
            C = m(s),
            D = +o.getValue(z) || 1,
            E = !1,
            F = 0,
            G = {
                start: g,
                shareTitle: A,
                shareLevel: D
            };
        return G;
    },
    $AJB.page.index = function() {
        "use strict";
        var a = $AJB.general.Game();
        a.start();
        // var myShareTitle = a.shareTitle;
        // console.log(myShareTitle);
    },
    $AJB.page.index();

GlobalLevel = $AJB.general.Game().shareLevel;

var ajax = {};
ajax.x = function() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {}
    }
    return xhr;
};

ajax.send = function(url, callback, method, data, sync) {
    var x = ajax.x();
    x.open(method, url, sync);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
};

ajax.get = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
};

ajax.post = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), sync)
};

ajax.post('http://timelineapp.pointstone.org/ci/authorize/get_jssdk_info', {
    url: window.location.href
}, function(data) {
    // console.log(data);
    // alert(data);
    var jssdk_info_obj = JSON.parse(data);

    wx.config({
        debug: false,
        appId: jssdk_info_obj.appid,
        timestamp: jssdk_info_obj.timestamp,
        nonceStr: jssdk_info_obj.noncestr,
        signature: jssdk_info_obj.signature,
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });

    wx.ready(function() {

        // 2. 分享接口
        // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareAppMessage({
            title: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            desc: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            link: gameurl,
            imgUrl: imgUrl,
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                // alert('用户点击发送给朋友');
            },
            success: function(res) {
                var UserInfo = new Object();
                UserInfo.openid = openid;
                UserInfo.shareLevel = GlobalLevel;
                // alert('已分享');
                ga('send', {
                    'hitType': 'event', // Required.
                    'eventCategory': 'wx', // Required.
                    'eventAction': 'onMenuShareAppMessage_' + openid, // Required.
                    'eventLabel': JSON.stringify(UserInfo),
                    'eventValue': 1
                });
            },
            cancel: function(res) {
                // alert('已取消');
            },
            fail: function(res) {
                // alert(JSON.stringify(res));
            }
        });

        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareTimeline({
            title: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            link: gameurl,
            imgUrl: imgUrl,
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                // alert('用户点击分享到朋友圈');
            },
            success: function(res) {
                // alert('已分享');
                var UserInfo = new Object();
                UserInfo.openid = openid;
                UserInfo.shareLevel = GlobalLevel;
                // alert('已分享');
                ga('send', {
                    'hitType': 'event', // Required.
                    'eventCategory': 'wx', // Required.
                    'eventAction': 'onMenuShareTimeline_' + openid, // Required.
                    'eventLabel': JSON.stringify(UserInfo),
                    'eventValue': 1
                });
            },
            cancel: function(res) {
                // alert('已取消');
            },
            fail: function(res) {
                // alert(JSON.stringify(res));
            }
        });

        // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareQQ({
            title: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            desc: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            link: gameurl,
            imgUrl: imgUrl,
            trigger: function(res) {
                // alert('用户点击分享到QQ');
            },
            complete: function(res) {
                // alert(JSON.stringify(res));
            },
            success: function(res) {
                // alert('已分享');
                var UserInfo = new Object();
                UserInfo.openid = openid;
                UserInfo.shareLevel = GlobalLevel;
                // alert('已分享');
                ga('send', {
                    'hitType': 'event', // Required.
                    'eventCategory': 'wx', // Required.
                    'eventAction': 'onMenuShareQQ_' + openid, // Required.
                    'eventLabel': JSON.stringify(UserInfo),
                    'eventValue': 1
                });
            },
            cancel: function(res) {
                // alert('已取消');
            },
            fail: function(res) {
                // alert(JSON.stringify(res));
            }
        });

        // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareWeibo({
            title: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            desc: "Core Ball，我已玩到第" + GlobalLevel + "关了，你也来试试吧！",
            link: gameurl,
            imgUrl: imgUrl,
            trigger: function(res) {
                // alert('用户点击分享到微博');
            },
            complete: function(res) {
                // alert(JSON.stringify(res));
            },
            success: function(res) {
                // alert('已分享');
                var UserInfo = new Object();
                UserInfo.openid = openid;
                UserInfo.shareLevel = GlobalLevel;
                // alert('已分享');
                ga('send', {
                    'hitType': 'event', // Required.
                    'eventCategory': 'wx', // Required.
                    'eventAction': 'onMenuShareWeibo_' + openid, // Required.
                    'eventLabel': JSON.stringify(UserInfo),
                    'eventValue': 1
                });
            },
            cancel: function(res) {
                // alert('已取消');
            },
            fail: function(res) {
                // alert(JSON.stringify(res));
            }
        });

    });
});
