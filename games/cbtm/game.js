/*! game-api - v0.21.2 - 2015-07-31 */
(function(e) {
    "use strict";
    function t() {}
    function n(e) {
        if (e = e || {},
        this.IS_MASTER = e.isMaster || !1, !this.IS_MASTER) throw Error("The DataStore can only be instantiated by the Master");
        this.dataStore = {}
    }
    function i(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.IS_STANDALONE = e.isStandalone,
        this.messenger = e.messenger,
        this.moduleReady = t || !1,
        this.appTimer = null,
        this.appDelayMin = 1e4,
        this.appDelayMax = 24e4,
        this.appError = !1,
        this.appTimerDelay = this.appDelayMax,
        this.appToken = null
    }
    function a(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.IS_STANDALONE = e.isStandalone,
        this.messenger = e.messenger,
        this.eventTracking = e.eventTracking,
        this.appToken = e.appToken,
        this.moduleReady = t || !1,
        this.isGamestate = !1,
        this.endpoint = null,
        this.spilStorageId = null,
        this.flushTimer = null,
        this.flushDelayMin = 500,
        this.flushDelayMax = 3e4,
        this.flushTimerDelay = this.flushDelayMin,
        this.gameState = {
            started: !1,
            userId: null,
            appId: null,
            dirtyKeys: []
        }
    }
    function s(e, t) {
        if (this.IS_MASTER = e && e.isMaster ? e.isMaster: !1, this.IS_SLAVE = !this.IS_MASTER, this.messenger = null, this.subscribers = {},
        this.moduleReady = t ? t: !1, this.data = e.data || null, this.gameState = "resume", !e || !e.messenger) throw Error("No messenger passed to the Game module instance");
        this.messenger = e.messenger,
        window.addEventListener ? window.addEventListener("message", this._performAction.bind(this), !1) : window.attachEvent && window.attachEvent("onmessage", this._performAction.bind(this)),
        this.IS_MASTER && this.messenger.subscribe("gameapi.game.adjustHeight", this.adjustHeight, this)
    }
    function r(e, t) {
        e = e || {},
        this.isMaster = e.isMaster,
        this.isStandalone = e.isStandalone,
        this.messenger = e.messenger,
        this.moduleReady = t ? t: !1
    }
    function o(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_STANDALONE = e.isStandalone,
        this.messenger = e.messenger,
        this.eventTracking = e.eventTracking,
        this.moduleReady = t ? t: !1,
        this.isAvailable = !1,
        this.locale = ""
    }
    function l(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_STANDALONE = e.isStandalone,
        this.messenger = e.messenger,
        this.eventTracking = e.eventTracking,
        this.moduleReady = t ? t: !1,
        this.isAvailable = !1
    }
    function p(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.moduleReady = t ? t: !1,
        this.messenger = e.messenger,
        this.data = e.data || null,
        this.eventTracking = e.eventTracking,
        this.initialHeight = e.initialHeight,
        this._setupMasterEvent()
    }
    function u(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.moduleReady = t ? t: !1,
        this.messenger = e.messenger,
        this.data = e.data || null,
        this.eventTracking = e.eventTracking,
        this.initialHeight = e.initialHeight,
        this._setupMasterEvent()
    }
    function d(e, t) {
        e = e || {},
        this.isMaster = e.isMaster,
        this.isStandalone = e.isStandalone,
        this.messenger = e.messenger,
        this.moduleReady = t ? t: !1,
        this.timeoutAfter = 500,
        this.timeout = !1,
        this.adRequested = !1,
        this._callbacks = {
            pause: !1,
            resume: !1
        }
    }
    function c(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.isStandalone = e.isStandalone,
        this.messenger = e.messenger,
        this.eventTracking = e.eventTracking,
        this.moduleReady = t ? t: !1,
        this.events = {
            GAME_START: "GAME_START",
            GAME_END: "GAME_END",
            GAME_PAUSE: "GAME_PAUSE",
            GAME_CONTINUE: "GAME_CONTINUE",
            GAME_MUTE: "GAME_MUTE",
            LEVEL_FAIL: "LEVEL_FAIL",
            LEVEL_COMPLETE: "LEVEL_COMPLETE"
        },
        this._setupEvents()
    }
    function h(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.IS_STANDALONE = e.isStandalone,
        this.data = e.data,
        this.messenger = e.messenger,
        this.moduleReady = t ? t: !1,
        this.gamePlayTracking = {
            started: !1,
            appid: null,
            host: null,
            timestamp: null
        },
        this.timeInGameTracking = {
            started: !1,
            appid: null,
            timestamp: null
        },
        this.isGamestate = !1
    }
    function g(e, t) {
        e = e || {},
        this.IS_MASTER = e.isMaster,
        this.IS_SLAVE = !this.IS_MASTER,
        this.IS_STANDALONE = e.isStandalone,
        this.moduleReady = t ? t: !1,
        this.messenger = e.messenger,
        this.components = e.components,
        this.data = e.data || null
    }
    function f(e) {
        var t = "string" == typeof e ? m(e) : e;
        t && (this.type = t.type, this.callbackId = t.callbackId, this.data = t.data)
    }
    function m(e) {
        var t, n, i, a = !1,
        s = [];
        if ("string" == typeof e && (s = e.split("|"), "gameapi" === s[0])) {
            s.shift(),
            t = s.shift(),
            i = parseInt(s.shift(), 10),
            n = s.join("|");
            try {
                a = {
                    type: t,
                    callbackId: i,
                    data: "" !== n ? JSON.parse(n) : ""
                }
            } catch(r) {}
        }
        return a
    }
    function y(e) {
        e = e || {},
        this.IS_MASTER = "boolean" == typeof e.isMaster ? e.isMaster: !1,
        this.IS_SLAVE = !this.IS_MASTER,
        this.api = e.api ? e.api: {},
        this._targets = e.targets ? e.targets: [],
        this._callbacks = [],
        this._channels = [],
        this.IS_MASTER && e.dataStore && (this.dataStore = e.dataStore),
        this._setupEventListener()
    }
    function v(e, n, d, h, g) {
        window.outerHeight - window.innerHeight,
        this.version = "0.21.2",
        this.isReady = !1,
        this._setRole(),
        this.__ = {},
        this.__.dataStore = this.IS_MASTER ? new e({
            isMaster: !0
        }) : null,
        this.__.messenger = new n({
            isMaster: this.IS_MASTER,
            api: this,
            targets: this._getTargets(),
            dataStore: this.__.dataStore
        }),
        this.__.components = new t;
        var f = this._addBasic({});
        this.__.EventTracking = new h(f, !1);
        var m = this._addComponents(f),
        y = this._addEventTracking(m),
        v = this._addInitialHeight(y);
        this.AppToken = new i(y, !1),
        this.GameState = new a(this._addAppToken(y), !1),
        this.Branding = new d(m, !1),
        this.GameBreak = new g(f, !1),
        this.Game = new s(f, !1),
        this.Score = new p(v, !1),
        this.Award = new u(v, !1),
        this.User = new o(y, !1),
        this.Friends = new l(y, !1),
        this.GameEvent = new c(y, !1),
        this.Localization = new r(y, !1)
    } (function(e) {
        if ("function" == typeof bootstrap) bootstrap("promise", e);
        else if ("object" == typeof exports && "object" == typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define(e);
        else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;
            ses.makeQ = e
        } else {
            if ("undefined" == typeof window && "undefined" == typeof self) throw Error("This environment was not anticipated by Q. Please file a bug.");
            var t = "undefined" != typeof window ? window: self,
            n = t.Q;
            t.Q = e(),
            t.Q.noConflict = function() {
                return t.Q = n,
                this
            }
        }
    })(function() {
        function e(e) {
            return function() {
                return Q.apply(e, arguments)
            }
        }
        function t(e) {
            return e === Object(e)
        }
        function n(e) {
            return "[object StopIteration]" === nt(e) || e instanceof J
        }
        function i(e, t) {
            if (F && t.stack && "object" == typeof e && null !== e && e.stack && -1 === e.stack.indexOf(it)) {
                for (var n = [], i = t; i; i = i.source) i.stack && n.unshift(i.stack);
                n.unshift(e.stack);
                var s = n.join("\n" + it + "\n");
                e.stack = a(s)
            }
        }
        function a(e) {
            for (var t = e.split("\n"), n = [], i = 0; t.length > i; ++i) {
                var a = t[i];
                o(a) || s(a) || !a || n.push(a)
            }
            return n.join("\n")
        }
        function s(e) {
            return - 1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
        }
        function r(e) {
            var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
            if (t) return [t[1], Number(t[2])];
            var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
            if (n) return [n[1], Number(n[2])];
            var i = /.*@(.+):(\d+)$/.exec(e);
            return i ? [i[1], Number(i[2])] : void 0
        }
        function o(e) {
            var t = r(e);
            if (!t) return ! 1;
            var n = t[0],
            i = t[1];
            return n === B && i >= V && lt >= i
        }
        function l() {
            if (F) try {
                throw Error()
            } catch(e) {
                var t = e.stack.split("\n"),
                n = t[0].indexOf("@") > 0 ? t[1] : t[2],
                i = r(n);
                if (!i) return;
                return B = i[0],
                i[1]
            }
        }
        function p(e, t, n) {
            return function() {
                return "undefined" != typeof console && "function" == typeof console.warn && console.warn(t + " is deprecated, use " + n + " instead.", Error("").stack),
                e.apply(e, arguments)
            }
        }
        function u(e) {
            return e instanceof g ? e: v(e) ? k(e) : I(e)
        }
        function d() {
            function e(e) {
                t = e,
                s.source = e,
                z(n,
                function(t, n) {
                    u.nextTick(function() {
                        e.promiseDispatch.apply(e, n)
                    })
                },
                void 0),
                n = void 0,
                i = void 0
            }
            var t, n = [],
            i = [],
            a = Z(d.prototype),
            s = Z(g.prototype);
            if (s.promiseDispatch = function(e, a, s) {
                var r = K(arguments);
                n ? (n.push(r), "when" === a && s[1] && i.push(s[1])) : u.nextTick(function() {
                    t.promiseDispatch.apply(t, r)
                })
            },
            s.valueOf = function() {
                if (n) return s;
                var e = m(t);
                return y(e) && (t = e),
                e
            },
            s.inspect = function() {
                return t ? t.inspect() : {
                    state: "pending"
                }
            },
            u.longStackSupport && F) try {
                throw Error()
            } catch(r) {
                s.stack = r.stack.substring(r.stack.indexOf("\n") + 1)
            }
            return a.promise = s,
            a.resolve = function(n) {
                t || e(u(n))
            },
            a.fulfill = function(n) {
                t || e(I(n))
            },
            a.reject = function(n) {
                t || e(E(n))
            },
            a.notify = function(e) {
                t || z(i,
                function(t, n) {
                    u.nextTick(function() {
                        n(e)
                    })
                },
                void 0)
            },
            a
        }
        function c(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function.");
            var t = d();
            try {
                e(t.resolve, t.reject, t.notify)
            } catch(n) {
                t.reject(n)
            }
            return t.promise
        }
        function h(e) {
            return c(function(t, n) {
                for (var i = 0,
                a = e.length; a > i; i++) u(e[i]).then(t, n)
            })
        }
        function g(e, t, n) {
            void 0 === t && (t = function(e) {
                return E(Error("Promise does not support operation: " + e))
            }),
            void 0 === n && (n = function() {
                return {
                    state: "unknown"
                }
            });
            var i = Z(g.prototype);
            if (i.promiseDispatch = function(n, a, s) {
                var r;
                try {
                    r = e[a] ? e[a].apply(i, s) : t.call(i, a, s)
                } catch(o) {
                    r = E(o)
                }
                n && n(r)
            },
            i.inspect = n, n) {
                var a = n();
                "rejected" === a.state && (i.exception = a.reason),
                i.valueOf = function() {
                    var e = n();
                    return "pending" === e.state || "rejected" === e.state ? i: e.value
                }
            }
            return i
        }
        function f(e, t, n, i) {
            return u(e).then(t, n, i)
        }
        function m(e) {
            if (y(e)) {
                var t = e.inspect();
                if ("fulfilled" === t.state) return t.value
            }
            return e
        }
        function y(e) {
            return e instanceof g
        }
        function v(e) {
            return t(e) && "function" == typeof e.then
        }
        function S(e) {
            return y(e) && "pending" === e.inspect().state
        }
        function _(e) {
            return ! y(e) || "fulfilled" === e.inspect().state
        }
        function A(e) {
            return y(e) && "rejected" === e.inspect().state
        }
        function T() {
            at.length = 0,
            st.length = 0,
            ot || (ot = !0)
        }
        function w(e, t) {
            ot && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() { - 1 !== Y(st, e) && (process.emit("unhandledRejection", t, e), rt.push(e))
            }), st.push(e), t && t.stack !== void 0 ? at.push(t.stack) : at.push("(no stack) " + t))
        }
        function b(e) {
            if (ot) {
                var t = Y(st, e); - 1 !== t && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() {
                    var n = Y(rt, e); - 1 !== n && (process.emit("rejectionHandled", at[t], e), rt.splice(n, 1))
                }), st.splice(t, 1), at.splice(t, 1))
            }
        }
        function E(e) {
            var t = g({
                when: function(t) {
                    return t && b(this),
                    t ? t(e) : this
                }
            },
            function() {
                return this
            },
            function() {
                return {
                    state: "rejected",
                    reason: e
                }
            });
            return w(t, e),
            t
        }
        function I(e) {
            return g({
                when: function() {
                    return e
                },
                get: function(t) {
                    return e[t]
                },
                set: function(t, n) {
                    e[t] = n
                },
                "delete": function(t) {
                    delete e[t]
                },
                post: function(t, n) {
                    return null === t || void 0 === t ? e.apply(void 0, n) : e[t].apply(e, n)
                },
                apply: function(t, n) {
                    return e.apply(t, n)
                },
                keys: function() {
                    return tt(e)
                }
            },
            void 0,
            function() {
                return {
                    state: "fulfilled",
                    value: e
                }
            })
        }
        function k(e) {
            var t = d();
            return u.nextTick(function() {
                try {
                    e.then(t.resolve, t.reject, t.notify)
                } catch(n) {
                    t.reject(n)
                }
            }),
            t.promise
        }
        function R(e) {
            return g({
                isDef: function() {}
            },
            function(t, n) {
                return N(e, t, n)
            },
            function() {
                return u(e).inspect()
            })
        }
        function M(e, t, n) {
            return u(e).spread(t, n)
        }
        function G(e) {
            return function() {
                function t(e, t) {
                    var r;
                    if ("undefined" == typeof StopIteration) {
                        try {
                            r = i[e](t)
                        } catch(o) {
                            return E(o)
                        }
                        return r.done ? u(r.value) : f(r.value, a, s)
                    }
                    try {
                        r = i[e](t)
                    } catch(o) {
                        return n(o) ? u(o.value) : E(o)
                    }
                    return f(r, a, s)
                }
                var i = e.apply(this, arguments),
                a = t.bind(t, "next"),
                s = t.bind(t, "throw");
                return a()
            }
        }
        function P(e) {
            u.done(u.async(e)())
        }
        function L(e) {
            throw new J(e)
        }
        function x(e) {
            return function() {
                return M([this, D(arguments)],
                function(t, n) {
                    return e.apply(t, n)
                })
            }
        }
        function N(e, t, n) {
            return u(e).dispatch(t, n)
        }
        function D(e) {
            return f(e,
            function(e) {
                var t = 0,
                n = d();
                return z(e,
                function(i, a, s) {
                    var r;
                    y(a) && "fulfilled" === (r = a.inspect()).state ? e[s] = r.value: (++t, f(a,
                    function(i) {
                        e[s] = i,
                        0 === --t && n.resolve(e)
                    },
                    n.reject,
                    function(e) {
                        n.notify({
                            index: s,
                            value: e
                        })
                    }))
                },
                void 0),
                0 === t && n.resolve(e),
                n.promise
            })
        }
        function O(e) {
            if (0 === e.length) return u.resolve();
            var t = u.defer(),
            n = 0;
            return z(e,
            function(i, a, s) {
                function r(e) {
                    t.resolve(e)
                }
                function o() {
                    n--,
                    0 === n && t.reject(Error("Can't get fulfillment value from any promise, all promises were rejected."))
                }
                function l(e) {
                    t.notify({
                        index: s,
                        value: e
                    })
                }
                var p = e[s];
                n++,
                f(p, r, o, l)
            },
            void 0),
            t.promise
        }
        function C(e) {
            return f(e,
            function(e) {
                return e = $(e, u),
                f(D($(e,
                function(e) {
                    return f(e, W, W)
                })),
                function() {
                    return e
                })
            })
        }
        function j(e) {
            return u(e).allSettled()
        }
        function U(e, t) {
            return u(e).then(void 0, void 0, t)
        }
        function H(e, t) {
            return u(e).nodeify(t)
        }
        var F = !1;
        try {
            throw Error()
        } catch(q) {
            F = !!q.stack
        }
        var B, J, V = l(),
        W = function() {},
        X = function() {
            function e() {
                for (var e, i; n.next;) n = n.next,
                e = n.task,
                n.task = void 0,
                i = n.domain,
                i && (n.domain = void 0, i.enter()),
                t(e, i);
                for (; o.length;) e = o.pop(),
                t(e);
                a = !1
            }
            function t(t, n) {
                try {
                    t()
                } catch(i) {
                    if (r) throw n && n.exit(),
                    setTimeout(e, 0),
                    n && n.enter(),
                    i;
                    setTimeout(function() {
                        throw i
                    },
                    0)
                }
                n && n.exit()
            }
            var n = {
                task: void 0,
                next: null
            },
            i = n,
            a = !1,
            s = void 0,
            r = !1,
            o = [];
            if (X = function(e) {
                i = i.next = {
                    task: e,
                    domain: r && process.domain,
                    next: null
                },
                a || (a = !0, s())
            },
            "object" == typeof process && "[object process]" == "" + process && process.nextTick) r = !0,
            s = function() {
                process.nextTick(e)
            };
            else if ("function" == typeof setImmediate) s = "undefined" != typeof window ? setImmediate.bind(window, e) : function() {
                setImmediate(e)
            };
            else if ("undefined" != typeof MessageChannel) {
                var l = new MessageChannel;
                l.port1.onmessage = function() {
                    s = p,
                    l.port1.onmessage = e,
                    e()
                };
                var p = function() {
                    l.port2.postMessage(0)
                };
                s = function() {
                    setTimeout(e, 0),
                    p()
                }
            } else s = function() {
                setTimeout(e, 0)
            };
            return X.runAfter = function(e) {
                o.push(e),
                a || (a = !0, s())
            },
            X
        } (),
        Q = Function.call,
        K = e(Array.prototype.slice),
        z = e(Array.prototype.reduce ||
        function(e, t) {
            var n = 0,
            i = this.length;
            if (1 === arguments.length) for (;;) {
                if (n in this) {
                    t = this[n++];
                    break
                }
                if (++n >= i) throw new TypeError
            }
            for (; i > n; n++) n in this && (t = e(t, this[n], n));
            return t
        }),
        Y = e(Array.prototype.indexOf ||
        function(e) {
            for (var t = 0; this.length > t; t++) if (this[t] === e) return t;
            return - 1
        }),
        $ = e(Array.prototype.map ||
        function(e, t) {
            var n = this,
            i = [];
            return z(n,
            function(a, s, r) {
                i.push(e.call(t, s, r, n))
            },
            void 0),
            i
        }),
        Z = Object.create ||
        function(e) {
            function t() {}
            return t.prototype = e,
            new t
        },
        et = e(Object.prototype.hasOwnProperty),
        tt = Object.keys ||
        function(e) {
            var t = [];
            for (var n in e) et(e, n) && t.push(n);
            return t
        },
        nt = e(Object.prototype.toString);
        J = "undefined" != typeof ReturnValue ? ReturnValue: function(e) {
            this.value = e
        };
        var it = "From previous event:";
        u.resolve = u,
        u.nextTick = X,
        u.longStackSupport = !1,
        "object" == typeof process && process && process.env && process.env.Q_DEBUG && (u.longStackSupport = !0),
        u.defer = d,
        d.prototype.makeNodeResolver = function() {
            var e = this;
            return function(t, n) {
                t ? e.reject(t) : arguments.length > 2 ? e.resolve(K(arguments, 1)) : e.resolve(n)
            }
        },
        u.Promise = c,
        u.promise = c,
        c.race = h,
        c.all = D,
        c.reject = E,
        c.resolve = u,
        u.passByCopy = function(e) {
            return e
        },
        g.prototype.passByCopy = function() {
            return this
        },
        u.join = function(e, t) {
            return u(e).join(t)
        },
        g.prototype.join = function(e) {
            return u([this, e]).spread(function(e, t) {
                if (e === t) return e;
                throw Error("Can't join: not the same: " + e + " " + t)
            })
        },
        u.race = h,
        g.prototype.race = function() {
            return this.then(u.race)
        },
        u.makePromise = g,
        g.prototype.toString = function() {
            return "[object Promise]"
        },
        g.prototype.then = function(e, t, n) {
            function a(t) {
                try {
                    return "function" == typeof e ? e(t) : t
                } catch(n) {
                    return E(n)
                }
            }
            function s(e) {
                if ("function" == typeof t) {
                    i(e, o);
                    try {
                        return t(e)
                    } catch(n) {
                        return E(n)
                    }
                }
                return E(e)
            }
            function r(e) {
                return "function" == typeof n ? n(e) : e
            }
            var o = this,
            l = d(),
            p = !1;
            return u.nextTick(function() {
                o.promiseDispatch(function(e) {
                    p || (p = !0, l.resolve(a(e)))
                },
                "when", [function(e) {
                    p || (p = !0, l.resolve(s(e)))
                }])
            }),
            o.promiseDispatch(void 0, "when", [void 0,
            function(e) {
                var t, n = !1;
                try {
                    t = r(e)
                } catch(i) {
                    if (n = !0, !u.onerror) throw i;
                    u.onerror(i)
                }
                n || l.notify(t)
            }]),
            l.promise
        },
        u.tap = function(e, t) {
            return u(e).tap(t)
        },
        g.prototype.tap = function(e) {
            return e = u(e),
            this.then(function(t) {
                return e.fcall(t).thenResolve(t)
            })
        },
        u.when = f,
        g.prototype.thenResolve = function(e) {
            return this.then(function() {
                return e
            })
        },
        u.thenResolve = function(e, t) {
            return u(e).thenResolve(t)
        },
        g.prototype.thenReject = function(e) {
            return this.then(function() {
                throw e
            })
        },
        u.thenReject = function(e, t) {
            return u(e).thenReject(t)
        },
        u.nearer = m,
        u.isPromise = y,
        u.isPromiseAlike = v,
        u.isPending = S,
        g.prototype.isPending = function() {
            return "pending" === this.inspect().state
        },
        u.isFulfilled = _,
        g.prototype.isFulfilled = function() {
            return "fulfilled" === this.inspect().state
        },
        u.isRejected = A,
        g.prototype.isRejected = function() {
            return "rejected" === this.inspect().state
        };
        var at = [],
        st = [],
        rt = [],
        ot = !0;
        u.resetUnhandledRejections = T,
        u.getUnhandledReasons = function() {
            return at.slice()
        },
        u.stopUnhandledRejectionTracking = function() {
            T(),
            ot = !1
        },
        T(),
        u.reject = E,
        u.fulfill = I,
        u.master = R,
        u.spread = M,
        g.prototype.spread = function(e, t) {
            return this.all().then(function(t) {
                return e.apply(void 0, t)
            },
            t)
        },
        u.async = G,
        u.spawn = P,
        u["return"] = L,
        u.promised = x,
        u.dispatch = N,
        g.prototype.dispatch = function(e, t) {
            var n = this,
            i = d();
            return u.nextTick(function() {
                n.promiseDispatch(i.resolve, e, t)
            }),
            i.promise
        },
        u.get = function(e, t) {
            return u(e).dispatch("get", [t])
        },
        g.prototype.get = function(e) {
            return this.dispatch("get", [e])
        },
        u.set = function(e, t, n) {
            return u(e).dispatch("set", [t, n])
        },
        g.prototype.set = function(e, t) {
            return this.dispatch("set", [e, t])
        },
        u.del = u["delete"] = function(e, t) {
            return u(e).dispatch("delete", [t])
        },
        g.prototype.del = g.prototype["delete"] = function(e) {
            return this.dispatch("delete", [e])
        },
        u.mapply = u.post = function(e, t, n) {
            return u(e).dispatch("post", [t, n])
        },
        g.prototype.mapply = g.prototype.post = function(e, t) {
            return this.dispatch("post", [e, t])
        },
        u.send = u.mcall = u.invoke = function(e, t) {
            return u(e).dispatch("post", [t, K(arguments, 2)])
        },
        g.prototype.send = g.prototype.mcall = g.prototype.invoke = function(e) {
            return this.dispatch("post", [e, K(arguments, 1)])
        },
        u.fapply = function(e, t) {
            return u(e).dispatch("apply", [void 0, t])
        },
        g.prototype.fapply = function(e) {
            return this.dispatch("apply", [void 0, e])
        },
        u["try"] = u.fcall = function(e) {
            return u(e).dispatch("apply", [void 0, K(arguments, 1)])
        },
        g.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, K(arguments)])
        },
        u.fbind = function(e) {
            var t = u(e),
            n = K(arguments, 1);
            return function() {
                return t.dispatch("apply", [this, n.concat(K(arguments))])
            }
        },
        g.prototype.fbind = function() {
            var e = this,
            t = K(arguments);
            return function() {
                return e.dispatch("apply", [this, t.concat(K(arguments))])
            }
        },
        u.keys = function(e) {
            return u(e).dispatch("keys", [])
        },
        g.prototype.keys = function() {
            return this.dispatch("keys", [])
        },
        u.all = D,
        g.prototype.all = function() {
            return D(this)
        },
        u.any = O,
        g.prototype.any = function() {
            return O(this)
        },
        u.allResolved = p(C, "allResolved", "allSettled"),
        g.prototype.allResolved = function() {
            return C(this)
        },
        u.allSettled = j,
        g.prototype.allSettled = function() {
            return this.then(function(e) {
                return D($(e,
                function(e) {
                    function t() {
                        return e.inspect()
                    }
                    return e = u(e),
                    e.then(t, t)
                }))
            })
        },
        u.fail = u["catch"] = function(e, t) {
            return u(e).then(void 0, t)
        },
        g.prototype.fail = g.prototype["catch"] = function(e) {
            return this.then(void 0, e)
        },
        u.progress = U,
        g.prototype.progress = function(e) {
            return this.then(void 0, void 0, e)
        },
        u.fin = u["finally"] = function(e, t) {
            return u(e)["finally"](t)
        },
        g.prototype.fin = g.prototype["finally"] = function(e) {
            return e = u(e),
            this.then(function(t) {
                return e.fcall().then(function() {
                    return t
                })
            },
            function(t) {
                return e.fcall().then(function() {
                    throw t
                })
            })
        },
        u.done = function(e, t, n, i) {
            return u(e).done(t, n, i)
        },
        g.prototype.done = function(e, t, n) {
            var a = function(e) {
                u.nextTick(function() {
                    if (i(e, s), !u.onerror) throw e;
                    u.onerror(e)
                })
            },
            s = e || t || n ? this.then(e, t, n) : this;
            "object" == typeof process && process && process.domain && (a = process.domain.bind(a)),
            s.then(void 0, a)
        },
        u.timeout = function(e, t, n) {
            return u(e).timeout(t, n)
        },
        g.prototype.timeout = function(e, t) {
            var n = d(),
            i = setTimeout(function() {
                t && "string" != typeof t || (t = Error(t || "Timed out after " + e + " ms"), t.code = "ETIMEDOUT"),
                n.reject(t)
            },
            e);
            return this.then(function(e) {
                clearTimeout(i),
                n.resolve(e)
            },
            function(e) {
                clearTimeout(i),
                n.reject(e)
            },
            n.notify),
            n.promise
        },
        u.delay = function(e, t) {
            return void 0 === t && (t = e, e = void 0),
            u(e).delay(t)
        },
        g.prototype.delay = function(e) {
            return this.then(function(t) {
                var n = d();
                return setTimeout(function() {
                    n.resolve(t)
                },
                e),
                n.promise
            })
        },
        u.nfapply = function(e, t) {
            return u(e).nfapply(t)
        },
        g.prototype.nfapply = function(e) {
            var t = d(),
            n = K(e);
            return n.push(t.makeNodeResolver()),
            this.fapply(n).fail(t.reject),
            t.promise
        },
        u.nfcall = function(e) {
            var t = K(arguments, 1);
            return u(e).nfapply(t)
        },
        g.prototype.nfcall = function() {
            var e = K(arguments),
            t = d();
            return e.push(t.makeNodeResolver()),
            this.fapply(e).fail(t.reject),
            t.promise
        },
        u.nfbind = u.denodeify = function(e) {
            var t = K(arguments, 1);
            return function() {
                var n = t.concat(K(arguments)),
                i = d();
                return n.push(i.makeNodeResolver()),
                u(e).fapply(n).fail(i.reject),
                i.promise
            }
        },
        g.prototype.nfbind = g.prototype.denodeify = function() {
            var e = K(arguments);
            return e.unshift(this),
            u.denodeify.apply(void 0, e)
        },
        u.nbind = function(e, t) {
            var n = K(arguments, 2);
            return function() {
                function i() {
                    return e.apply(t, arguments)
                }
                var a = n.concat(K(arguments)),
                s = d();
                return a.push(s.makeNodeResolver()),
                u(i).fapply(a).fail(s.reject),
                s.promise
            }
        },
        g.prototype.nbind = function() {
            var e = K(arguments, 0);
            return e.unshift(this),
            u.nbind.apply(void 0, e)
        },
        u.nmapply = u.npost = function(e, t, n) {
            return u(e).npost(t, n)
        },
        g.prototype.nmapply = g.prototype.npost = function(e, t) {
            var n = K(t || []),
            i = d();
            return n.push(i.makeNodeResolver()),
            this.dispatch("post", [e, n]).fail(i.reject),
            i.promise
        },
        u.nsend = u.nmcall = u.ninvoke = function(e, t) {
            var n = K(arguments, 2),
            i = d();
            return n.push(i.makeNodeResolver()),
            u(e).dispatch("post", [t, n]).fail(i.reject),
            i.promise
        },
        g.prototype.nsend = g.prototype.nmcall = g.prototype.ninvoke = function(e) {
            var t = K(arguments, 1),
            n = d();
            return t.push(n.makeNodeResolver()),
            this.dispatch("post", [e, t]).fail(n.reject),
            n.promise
        },
        u.nodeify = H,
        g.prototype.nodeify = function(e) {
            return e ? (this.then(function(t) {
                u.nextTick(function() {
                    e(null, t)
                })
            },
            function(t) {
                u.nextTick(function() {
                    e(t)
                })
            }), void 0) : this
        },
        u.noConflict = function() {
            throw Error("Q.noConflict only works when Q is used as a global")
        };
        var lt = l();
        return u
    }),
    function(e) {
        var t = "Promise" in e && "cast" in e.Promise && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && "spread" in e.Promise;
        t || (e.Promise = e.Q.promise, e.Promise.all = e.Q.all, e.Promise.timeout = e.Q.timeout, e.Q.stopUnhandledRejectionTracking())
    } (e !== void 0 ? e: this);
    var S = {
        timeout: 3e3
    };
    S.getGameConfig = function() {
        var t = e.Q.defer();
        return SpilGames(["JSLib"],
        function(e) {
            var n = e.get("current.game.integration.info");
            n ? t.resolve(n) : t.reject(Error("No data retrieved from JSLib"))
        }),
        t.promise.timeout(this.timeout)
    },
    S.getBrandingConfig = function(t) {
        var n = e.Q.defer(),
        i = "./configs",
        a = t.portal.siteId,
        s = t.portal.channelId,
        r = t.portal.applicationId,
        o = "en-EN",
        l = [i, s, a, r].join("/");
        return navigator && "undefined" != typeof navigator && (navigator.languages !== void 0 && navigator.languages[0] !== void 0 ? o = navigator.languages[0] : navigator.userLanguage !== void 0 && (o = navigator.userLanguage)),
        l = l + "?locale=" + o,
        SpilGames(["Net", "JSLib"],
        function(e, t) {
            e.send({
                url: l,
                type: "GET",
                dataType: "JSON"
            },
            function(e) {
                if (e && e.configar) window.postMessage(new f({
                    type: "success",
                    callbackId: null,
                    data: "log.configar.getBranding.success"
                }), "*"),
                n.resolve(e.configar);
                else {
                    var i = {};
                    try {
                        i = t.get("configar.data.cached") || i
                    } catch(a) {}
                    n.reject(i)
                }
            })
        }),
        n.promise.timeout(this.timeout)
    };
    var _ = {};
    _.argsToArray = function(e) {
        return e ? Array.prototype.slice.apply(e) : []
    },
    _.isA10 = function() {
        return /4399.com/.test(window.location.host)
    },
    _.disableKeys = function(e) {
        var t = e.keyCode; (8 === t || 9 === t || t >= 32 && 40 >= t || 46 === t) && e.preventDefault()
    },
    _.trackGA = function() {
        try {
            if ("www8.agame.com" === window.location.host) {
                var e = function(e, t, n, i, a, s, r) {
                    e.GoogleAnalyticsObject = a,
                    e[a] = e[a] ||
                    function() { (e[a].q = e[a].q || []).push(arguments)
                    },
                    e[a].l = 1 * new Date,
                    s = t.createElement(n),
                    r = t.getElementsByTagName(n)[0],
                    s.async = 1,
                    s.src = i,
                    r.parentNode.insertBefore(s, r)
                };
                e(window, document, "script", "", "ga"),
                ga("create", "UA-8223336-3", "auto"),
                ga("send", "pageview")
            }
        } catch(t) {}
    },
    _.getRole = function() {
        var e = "function" == typeof window.SpilGames,
        t = window.self !== window.top,
        n = null;
        if (_.isA10()) return window.onkeydown = this.disableKeys,
        {
            IS_MASTER: !0,
            IS_SLAVE: !0,
            IS_STANDALONE: !0
        };
        if (e) {
            var i = document.getElementById("#iframegame");
            switch (i) {
            case "null":
                n = {
                    IS_MASTER: !0,
                    IS_SLAVE: !0,
                    IS_STANDALONE: !1
                };
                break;
            default:
                n = {
                    IS_MASTER: !0,
                    IS_SLAVE: !1,
                    IS_STANDALONE: !1
                }
            }
        } else t ? (window.onkeydown = this.disableKeys, this.trackGA(), n = {
            IS_MASTER: !1,
            IS_SLAVE: !0,
            IS_STANDALONE: !1
        }) : (window.onkeydown = this.disableKeys, this.trackGA(), n = {
            IS_MASTER: !0,
            IS_SLAVE: !0,
            IS_STANDALONE: !0
        });
        return n
    },
    _.callConfigar = function(e, t) {
        var n, i, a = e.site || 500,
        s = e.channel || 100,
        r = e.id || null;
        window.XDomainRequest ? (n = new XDomainRequest, n.onload = function() {
            t(200, n.responseText)
        },
        n.onerror = function() {
            t(404, null)
        },
        n.onprogress = function() {}) : window.XMLHttpRequest ? (n = new XMLHttpRequest, n.onreadystatechange = function() {
            4 === n.readyState && t(n.status, n.responseText)
        }) : window.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLHTTP"), n.onreadystatechange = function() {
            4 === n.readyState && t(n.status, n.responseText)
        }),
        r && (i = ["./configs", s, a, r].join("/"), n.open("GET", i, !0), n.timeout = 3e3, n.ontimeout = function() {
            t(404, null)
        },
        n.send())
    },
    _.submitData = function(e, t, n) {
        var i, a = e || "",
        s = t || {},
        r = n ||
        function() {};
        window.XDomainRequest ? (i = new XDomainRequest, i.onload = function() {
            r(200, i.responseText)
        },
        i.onerror = function() {
            r(404, null)
        },
        i.onprogress = function() {},
        i.open("POST", a, !0)) : window.XMLHttpRequest ? (navigator.userAgent.match(/Trident\/7.0;.* rv:11/) ? i = this.getJSONP() : (i = new XMLHttpRequest, i.onreadystatechange = function() {
            4 === i.readyState && r(i.status, i.responseText)
        }), i.open("POST", a, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded")) : window.ActiveXObject && (i = new ActiveXObject("Microsoft.XMLHTTP"), i.onreadystatechange = function() {
            4 === i.readyState && r(i.status, i.responseText)
        },
        i.open("POST", a, !0)),
        i.timeout = 3e3,
        i.ontimeout = function() {
            r(404, null)
        }
        //,i.send(JSON.stringify(s))
    },
    _.getJSONP = function() {
        var e = "",
        t = "jsonpspilgames" + +new Date,
        n = {
            open: function(t, n) {
                t = null,
                e = n
            },
            onreadystatechange: function() {},
            setRequestHeader: function() {},
            set: function(e, t) {
                n.set[e] = t
            },
            send: function(i) {
                var a = n.set.callback || 0,
                s = n.set.data || 0; (i || a || s) && (e += /\?/.test(e) ? "&": "?", i && (e += s ? s + "=" + encodeURIComponent(i) : i, a && (e += "&")), a && (e += a + "=" + t));
                var r = document.createElement("script");
                r.src = e,
                document.getElementsByTagName("head")[0].appendChild(r)
            }
        };
        return window[t] = function() {
            n.onreadystatechange.apply(this, arguments)
        },
        n
    },
    _.xdr = function(e, t) {
        var n, i, a = e.url || "",
        s = (e.type || "GET").toUpperCase(),
        r = void 0 !== e.data ? e.data: {},
        o = e.headers || {},
        l = function() {
            t({
                isError: !0
            })
        },
        p = void 0 !== e.async ? e.async: !0;
        if (XMLHttpRequest) {
            if (n = new XMLHttpRequest, "withCredentials" in n) {
                n.open(s, a, p),
                n.onerror = l,
                n.onreadystatechange = function() {
                    4 === n.readyState && (n.status >= 200 && 400 > n.status ? t({
                        data: n.responseText,
                        status: n.status
                    }) : t({
                        isError: !0,
                        status: n.status
                    }))
                };
                for (i in o) o.hasOwnProperty(i) && n.setRequestHeader(i, o[i]);
                n.send(r)
            }
        } else if (XDomainRequest) {
            n = new XDomainRequest,
            n.open(s, a),
            n.onerror = l,
            n.onload = function() {
                t(n.responseText)
            };
            for (i in o) o.hasOwnProperty(i) && n.setRequestHeader(i, o[i]);
            n.send(r)
        } else t({
            isError: !0,
            message: "CORS not supported"
        })
    },
    _.log = function() {
        if (window.console && window.console.log) {
            var e = Array.prototype.slice.call(arguments);
            console.log.apply(console, e)
        }
    },
    _.getServiceEndpoint = function(e) {
        return "stg" === e ? "": ""
    },
    _.isWrapped = function() {
        return void 0 !== (window.PhoneGap || window.cordova || window.Cordova)
    },
    _.isArray = Array.isArray ||
    function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    },
    _._getQueryString = function() {
        return window.location.search
    },
    _._getPortalHost = function() {
        return window && window.location && window.location.hostname ? window.location.hostname: "unknown"
    },
    _.validateSchema = function(e, t) {
        for (var n in t) if (t.hasOwnProperty(n)) {
            if (!e.hasOwnProperty(n)) return {
                error: "Wrong argument passed: " + n
            };
            if (e.hasOwnProperty(n)) {
                var i = "object" == typeof e[n] ? e[n].type: e[n];
                if (t[n].constructor.name !== i) return {
                    error: "Wrong value type for " + n + ": expected " + e[n] + ", got " + t[n].constructor.name
                };
                var a = e[n] && e[n].values || [];
                if ( - 1 === a.indexOf(t[n])) return {
                    error: "Wrong value for " + n + ": expected " + a.join(" or ") + ", got " + t[n]
                }
            }
        }
        return {
            error: !1
        }
    };
    var A = {};
    A.getGameConfig = function() {
        return S.getGameConfig().
        catch(function() {
            return A.getLocalConfig()
        })
    },
    A.getBrandingConfig = function(e) {
        return new Promise(function(t) {
            return S.getBrandingConfig(e).then(t,
            function(e) {
                t(e),
                window.postMessage(new f({
                    type: "warning",
                    callbackId: null,
                    data: "log.configar.getBranding.failure"
                }), "*")
            })
        })
    },
    A.getLocalConfig = function(e) {
        e = e && Object.keys(e).length ? e: {
            portal: {},
            game: {},
            branding: {},
            user: {}
        };
        var t = {
            isLocal: e.isLocal || !1,
            game: {
                applicationId: e.portal.applicationId || "0",
                contentarId: e.portal.contentarId || "0",
                info: e.game.info || {},
                settings: e.game.objectSettings || {},
                properties: e.game.properties || {},
                features: {
                    achievements: e.game.achievements || !1,
                    gameSidePanel: e.game.gameSidePanel || !1,
                    highscores: e.game.highscores || !1,
                    recommendedGames: e.game.recommendedGames || !1
                }
            },
            user: {
                authenticated: e.portal.authenticated || !1,
                username: e.portal.username || "",
                appToken: e.user.appToken || "",
                userId: e.user.userId || ""
            },
            portal: {
                host: _._getPortalHost(),
                siteId: e.portal.siteId || 0,
                channelId: e.portal.channelId || 0,
                applicationId: e.portal.applicationId || "0",
                gamestate: e.portal.gamestate || !1,
                env: "stg" === e.portal.env ? "stg": "prd",
                spilStorageId: e.portal.spilStorageId || ""
            },
            branding: e.branding || {}
        };
        return t.branding.logo = t.branding.logo || {},
        t.branding.logo.url = t.branding.logo.url || !1,
        t.branding.logo.image = t.branding.logo.image || !1,
        t
    },
    A.configFromData = function(e) {
        var t = {
            game: {
                applicationId: e.id
            },
            user: {
                userId: e.userid ? e.userid: void 0,
                appToken: e.appToken ? e.appToken: void 0
            },
            portal: {
                applicationId: e.id,
                siteId: e.site ? e.site: 187,
                channelId: e.channel ? e.channel: 100,
                gamestate: e.gamestate ? e.gamestate: !1,
                env: "stg" === e.env ? "stg": "prd",
                spilStorageId: e.spilStorageId
            }
        };
        return t
    },
    A.setupStandaloneMode = function(e, t) {
        var n = {},
        i = {
            configar: {
                branding: {
                    main: {
                        label: "main",
                        image: "",
                        url: "",
                        style: "",
                        width: "202",
                        height: "50",
                        mime: "image/png",
                        type: "png",
                        handler: "newTab",
                        blacklisted: !0
                    },
                    logo: {
                        label: "logo",
                        image: "",
                        url: "",
                        style: "",
                        width: "202",
                        height: "50",
                        mime: "image/png",
                        type: "png",
                        handler: "newTab",
                        blacklisted: !1
                    },
                    more_games: {
                        label: "more_games",
                        image: null,
                        url: "",
                        style: "",
                        width: null,
                        height: null,
                        mime: null,
                        type: null,
                        handler: "newTab",
                        blacklisted: !1
                    },
                    splash_screen: {
                        label: "splash_screen",
                        image: "place_holder_string",
                        url: "",
                        style: "",
                        width: "0",
                        height: "0",
                        mime: "image/png",
                        type: "png",
                        handler: "newTab",
                        blacklisted: !1
                    }
                }
            }
        };
        n.JSLib = {
            memory: {},
            _channels: {},
            get: function(e) {
                return this.memory[e] ? this.memory[e] : !1
            },
            set: function(e, t) {
                return this.memory[e] = t,
                t
            },
            publish: function(e, t) {
                this._channels[e] && this._channels[e].forEach(function(e) {
                    try {
                        e.fn.call(this, t)
                    } catch(n) {}
                })
            },
            subscribe: function(e, t) {
                if ("function" != typeof t) throw Error("Callback has to be a function");
                if ("string" != typeof e) throw Error("Channel name has to be a string");
                this._channels[e] || (this._channels[e] = []),
                this._channels[e].push({
                    fn: t
                })
            }
        },
        n.Net = {
            send: function(e, t) {
                t.call(this, {})
            }
        },
        window.SpilGamesBootstrap = [],
        window.SpilGames = function() {
            var e = arguments;
            if (e[0] && "string" == typeof e[0]) n.JSLib.publish(e[0], e[1] || null);
            else if (e[0] && e[0] instanceof Array) {
                var t, i, a = [];
                for (t = 0, i = e[0].length; i > t; t++) a.push(n[e[0][t]]);
                e[1].apply(this, a)
            }
        },
        e && e.id ? _.callConfigar(e,
        function(n, a) {
            if (200 === n && "string" == typeof a && JSON.parse(a)) {
                var s = JSON.parse(a),
                r = A.configFromData(e);
                r.branding = s.configar && s.configar.branding ? s.configar.branding: i.configar.branding,
                t.call(this, r)
            } else t.call(this, {
                isLocal: !0,
                branding: i.configar.branding
            })
        }) : t.call(this, {
            isLocal: !0,
            branding: i.configar.branding
        })
    },
    A.getCachedConfig = function() {},
    t.prototype.newTab = function(e) {
       
    },
    t.prototype.moreGames = function(e) {
        var t = e.brandName || "a10";
        e.isStandalone ? this.newTab(e) : e.messenger && e.messenger.post && e.messenger.post("game.moregames", {
            branding: t
        })
    },
    t.prototype.displayOnTop = function(e) {
        if (e === void 0 || e.url === void 0 || "string" != typeof e.url || e.action === void 0 || "function" != typeof e.action) return e.callback !== void 0 || "function" == typeof e.callback ? (e.callback(), void 0) : void 0;
        var t = document.createElement("div"),
        n = e.url,
        i = e.action,
        a = e.callback;
        t.setAttribute("id", "spilgames-splash-screen-sample"),
        document.body.appendChild(t);
        var s = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return t.style.left = "0",
        t.style.top = "0",
        t.style.width = s + "px",
        t.style.height = r + "px",
        t.style.position = "absolute",
        t.style.zIndex = "10000",
        t.onclick = i,
        n && (t.style.background = "url('" + n + "') center center no-repeat #FFF"),
        window.setTimeout(function() {
            var e = document.getElementById("spilgames-splash-screen-sample");
            e.parentNode.removeChild(e),
            a && a()
        },
        2e3),
        t
    },
    n.prototype.get = function(e) {
        for (var t = this.dataStore,
        n = e.split("."), i = n.length, a = 0; i - 1 > a; a++) {
            if (!t[n[a]]) return null;
            t = t[n[a]]
        }
        return t[n[i - 1]] || null
    },
    n.prototype.put = function(e, t) {
        for (var n = this.dataStore,
        i = e.split("."), a = i.length, s = 0; a - 1 > s; s++) {
            var r = i[s];
            n[r] || (n[r] = {}),
            n = n[r]
        }
        n[i[a - 1]] = t
    },
    n.prototype.set = function(e, t) {
        this.put(e, t);
        var n = Date.parse(new Date);
        return this.notify({
            type: "new",
            key: e,
            current: t,
            previous: null,
            timestamp: n
        }),
        t
    },
    n.prototype.update = function(e, t) {
        var n, i, a = null;
        return this.get(e) ? (n = "update", a = this.get(e)) : n = "new",
        this.put(e, t),
        i = Date.parse(new Date),
        this.notify({
            type: n,
            key: e,
            current: t,
            previous: a,
            timestamp: i
        }),
        t
    },
    n.prototype.remove = function(e) {
        if (this.get(e)) {
            var t, n = this.get(e);
            return this.put(e, null),
            t = Date.parse(new Date),
            this.notify({
                type: "remove",
                key: e,
                current: null,
                previous: n,
                timestamp: t
            }),
            !0
        }
        return ! 1
    },
    n.prototype._setCache = function(e) {console.log(e)
        this.dataStore = e
    },
    n.prototype._getCache = function() {
        return this.dataStore
    },
    n.prototype.notify = function(e) {
        if (this.IS_MASTER) {
            var t = new f({
                type: "datachange",
                callbackId: null,
                data: e
            }).encode();
            return window.postMessage(t, "*"),
            t
        }
    },
    i.prototype.init = function(e) {
        e = e || {},
        this.data = e.data || this.data,
        this.data && this.data.game && this.data.user && (this.appId = this.data.game.applicationId || null, this.appToken = this.data.user.appToken || null),
        this._setupEvents(),
        (this.IS_SLAVE || this.IS_STANDALONE || _.isWrapped()) && this._scheduleRefresh()
    },
    i.prototype.getAppToken = function() {
        return this.appToken
    },
    i.prototype._setupEvents = function() {
        this.IS_MASTER ? this.messenger.subscribe("gameapi.apptoken.getAppToken", this._getAppToken, this) : this.messenger.subscribe("gameapi.apptoken.getAppTokenResponse", this._getAppTokenResponse, this)
    },
    i.prototype._retryAppToken = function(e) { (e || this.appTimerDelay !== this.appDelayMax) && (e && !this.appError && (this.appTimerDelay = this.appDelayMin, this.appError = !0), this._unschedule(), e ? this._increaseDelay() : this._resetDelay(), this._scheduleRefresh())
    },
    i.prototype._scheduleRefresh = function() {
        var e = this;
        null === this.appTimer && (this.appTimer = setInterval(function() {
            e._getAppToken()
        },
        this.appTimerDelay))
    },
    i.prototype._unschedule = function() {
        this.appTimer && clearTimeout(this.appTimer),
        this.appTimer = null
    },
    i.prototype._increaseDelay = function() {
        this.appTimerDelay = Math.min(2 * this.appTimerDelay, this.appDelayMax)
    },
    i.prototype._resetDelay = function() {
        this.appTimerDelay = this.appDelayMax
    },
    i.prototype._getAppToken = function() {
        var e = this.messenger;
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this.IS_MASTER || this.messenger._postMessage({},
        void 0, "gameapi.apptoken.getAppToken"),
        this.IS_MASTER && ("function" == typeof SpilGames ? SpilGames("api.account.getApplicationToken", {
            cache: !1,
            applicationId: this.appId
        },
        function(t) {
            t.error || !t.appAuth.token ? e._postMessage({},
            void 0, "gameapi.apptoken.getAppTokenResponse") : e._postMessage({
                appToken: t.appAuth.token,
                level: t.level
            },
            void 0, "gameapi.apptoken.getAppTokenResponse")
        }) : e._postMessage({},
        void 0, "gameapi.apptoken.getAppTokenResponse"))
    },
    i.prototype._getAppTokenResponse = function(e) {
        e.appToken ? (this.appToken = e.appToken, this._retryAppToken(!1)) : this._retryAppToken(!0)
    },
    a.prototype.init = function(e) {
        e = e || {},
        this.data = e.data || this.data,
        this.data && this.data.game && this.data.user && this.data.portal && (this.gameState.appId = this.data.game.applicationId || null, this.gameState.userId = this.data.user.userId || null, this.isGamestate = this.data.portal.gamestate || !1, this.endpoint = _.getServiceEndpoint(this.data.portal.env), this.spilStorageId = this.data.portal.spilStorageId),
        this.isGamestate && (this.IS_SLAVE || this.IS_STANDALONE || _.isWrapped()) && (this.listenStorageEvents(), this.preloadGameState())
    },
    a.prototype.listenStorageEvents = function() {
        var e = function(e) {
            this.onStorageEvent(e)
        }.bind(this);
        window.addEventListener("storage", e, !1)
    },
    a.prototype.flagDirtyKey = function(e) { - 1 === this.gameState.dirtyKeys.indexOf(e) && (this.gameState.dirtyKeys.push(e), this.scheduleSyncState())
    },
    a.prototype.unschedule = function() {
        this.flushTimer && clearTimeout(this.flushTimer),
        this.flushTimer = null
    },
    a.prototype.scheduleSyncState = function() {
        var e = this;
        null === this.flushTimer && (this.flushTimer = setInterval(function() {
            e.syncState()
        },
        this.flushTimerDelay))
    },
    a.prototype.increaseDelaySyncState = function() {
        this.flushTimerDelay = Math.min(2 * this.flushTimerDelay, this.flushDelayMax)
    },
    a.prototype.resetDelaySyncState = function() {
        this.flushTimerDelay = this.flushDelayMin
    },
    a.prototype.onStorageEvent = function(e) {
        e && e.url && e.url.indexOf("spilStorageId=" + this.spilStorageId) > 0 && this.flagDirtyKey(e.key)
    },
    a.prototype.preloadGameState = function() {
        var e = {
            url: this.endpoint + "/v1/gamestate/" + this.gameState.userId + "/" + this.gameState.appId,
            type: "GET",
            dataType: "JSON",
            headers: {
                "x-auth-token": this.appToken.getAppToken()
            }
        };
        _.xdr(e,
        function(e) {
            if (e.isError) _.log("GameAPIGameState failed preloading: " + e.status);
            else {
                var t = JSON.parse(e.data);
                if (t && t.gamestate) {
                    var n = t.gamestate,
                    i = 0,
                    a = null;
                    for (a in n) n.hasOwnProperty(a) && (window.localStorage[a] = n[a], i++);
                    _.log("GameAPIGameState preloaded: " + i + " keys")
                }
            }
        })
    },
    a.prototype.retrySyncState = function(e) {
        _.log(e),
        this.increaseDelaySyncState(),
        this.scheduleSyncState()
    },
    a.prototype.syncState = function() {
        if (this.unschedule(), !this.gameState.appId) return this.retrySyncState("GameAPIGameState.prototype.syncStat no appId");
        if (!this.gameState.userId) return this.retrySyncState("GameAPIGameState.prototype.syncState no userId");
        for (var e, t = this.gameState.appId,
        n = this.gameState.userId,
        i = this.gameState.dirtyKeys,
        a = {
            set: {},
            remove: []
        },
        s = 0, r = this, o = 0; i.length > o; o++) e = window.localStorage[i[o]],
        void 0 === e ? a.remove.push(i[o]) : (a.set[i[o]] = e, s = Math.max(e.length, s));
        if (i.length > 0) {
            var l = {
                url: this.endpoint + "/v1/gamestate/" + n + "/" + t,
                type: "POST",
                data: JSON.stringify(a),
                async: !0,
                headers: {
                    "x-auth-token": this.appToken.getAppToken()
                }
            };
            _.xdr(l,
            function(e) {
                e.isError ? r.retrySyncState("GameAPIGameState error syncing state") : (_.log("GameAPIGameState synced " + i.length + " keys"), r.resetDelaySyncState(), r.gameState.dirtyKeys = [])
            });
            var p = {
                numkeys: i.length,
                maxdatalength: s,
                userid: n
            };
            this.eventTracking.trackGameAPIEvent("gameState", p)
        }
        return ! 0
    },
    s.prototype.init = function(e) {
        this.data = e.data || null
    },
    s.prototype._performAction = function(e) {
        var t = new f(e.data || {}),
        n = this.messenger,
        i = this.subscribers || {};
        if (t && t.type && t.data) switch (t.type) {
        case "gameEvent":
            t.data[0] && i[t.data[0]] && i[t.data[0]].length > 0 ? i[t.data[0]].forEach(function(e) {
                e.call(this),
                n._postMessage([t.data[0], {
                    origin: "slave"
                },
                null], null, "gameState")
            }) : t.data[0] && t.data[1] && "slave" === t.data[1].origin && "function" == typeof SWFtoJS && SWFtoJS({
                call: t.data[0],
                params: {}
            });
            break;
        case "gameState":
            t.data[0] && t.data[1] && "slave" === t.data[1].origin && (this.gameState = t.data[0])
        }
    },
    s.prototype.on = function(e, t) {
        this.IS_SLAVE && (this.subscribers[e] || (this.subscribers[e] = []), this.subscribers[e].push(t))
    },
    s.prototype.emit = function(e) {
        if (!this.IS_MASTER) throw Error("Only the master environment can emit game events");
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        if (e === this.gameState) throw Error("The game is already in state: `" + e + "`");
        this.messenger._postMessage([e, {
            origin: "master"
        },
        null], null, "gameEvent")
    },
    s.prototype.isSiteLock = function() {
        var e = !0;
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        return this.data && this.data.portal && this.data.portal.siteId && 500 > this.data.portal.siteId && (e = !1),
        e
    },
    s.prototype.adjustHeight = function(e) {
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this.IS_MASTER ? "function" == typeof SpilGames && SpilGames.Events !== void 0 && "function" == typeof SpilGames.Events.publish && SpilGames.Events.publish("portal.adjustheight", {
            height: e,
            onsuccess: function() {}
        }) : (this.messenger._postMessage(e, void 0, "gameapi.game.adjustHeight"), this.messenger._postMessage(["log.gameapi.game.adjustHeight", {
            origin: "slave",
            height: e
        },
        null], null, "log"))
    },
    r.prototype.init = function() {},
    r.prototype.getLocalizedText = function() {
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        return key
    },
    o.prototype.init = function(e) {
        this._setLocale(e),
        this._setupEvents(),
        e && e.data && e.data.portal && e.data.portal.siteId && 500 > e.data.portal.siteId && "0" !== e.data.portal.siteId && (this.isAvailable = !0)
    },
    o.prototype._setupEvents = function() {
        this.IS_MASTER ? (this.messenger.subscribe("gameapi.user.forceAuthentication", this.forceAuthentication, this), this.messenger.subscribe("gameapi.user.getUser", this.getUser, this)) : this.messenger.subscribe("gameapi.user.getUserResponse", this._getUserResponse, this)
    },
    o.prototype.forceAuthentication = function() {
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this.IS_MASTER ? "function" == typeof SpilGames && SpilGames.Portal !== void 0 && "function" == typeof SpilGames.Portal.forceAuthentication && SpilGames.Portal.forceAuthentication({
            onsuccess: function() {}
        }) : (this.messenger._postMessage({},
        void 0, "gameapi.user.forceAuthentication"), this.messenger._postMessage(["log.gameapi.user.forceAuthentication", {
            origin: "slave"
        },
        null], null, "log"))
    },
    o.prototype.getUser = function(e) {
        var t = this.messenger;
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        if (this.IS_MASTER)"function" == typeof SpilGames ? SpilGames(["JSLib"],
        function(e) {
            e && "function" == typeof e ? e("api.user.getExtended",
            function(e) {
                t._postMessage(e, void 0, "gameapi.user.getUserResponse")
            }) : t._postMessage({
                userInfoExtended: {}
            },
            void 0, "gameapi.user.getUserResponse")
        }) : t._postMessage({
            userInfoExtended: {}
        },
        void 0, "gameapi.user.getUserResponse");
        else {
            if ("function" != typeof e) throw Error("The argument passed to the GameAPI.User.getUser method should be a function");
            this.usercallback = e,
            t._postMessage({},
            void 0, "gameapi.user.getUser"),
            t._postMessage(["log.gameapi.user.getUser", {
                origin: "slave",
                argumentType: typeof e
            },
            null], null, "log")
        }
    },
    o.prototype._getUserResponse = function(e) {
        var t = e.userInfoExtended || {},
        n = this._validateData(t),
        i = !1;
        "" === t.guid && (i = !0),
        this.eventTracking.trackGameAPIEvent("userGet", {
            guid: n.guid || "",
            fail: i
        }),
        this.usercallback(n)
    },
    o.prototype._validateData = function(e) {
        var t = {
            uid: e.uid || "",
            guid: e.guid || "",
            displayName: e.name || "",
            pic_square: e.avatarUrl || "",
            pic_square_large: e.avatarLargeUrl || "",
            gender: e.gender || "",
            age: e.age || "",
            birthday: e.birthdate || "",
            level: e.level || "",
            locale: this.locale || ""
        };
        return t
    },
    o.prototype._setLocale = function(e) {
        e && e.data && e.data.portal && e.data.portal.siteId && (this.locale = this._getLang(e.data.portal.siteId))
    },
    o.prototype._getLang = function(e) {
        for (var t = [{
            siteid: 1,
            lang: "nl-NL"
        },
        {
            siteid: 2,
            lang: "en-US"
        },
        {
            siteid: 5,
            lang: "de-DE"
        },
        {
            siteid: 11,
            lang: "fr-FR"
        },
        {
            siteid: 12,
            lang: "fr-FR"
        },
        {
            siteid: 15,
            lang: "it-IT"
        },
        {
            siteid: 16,
            lang: "pl-PL"
        },
        {
            siteid: 24,
            lang: "en-US"
        },
        {
            siteid: 25,
            lang: "nl-NL"
        },
        {
            siteid: 26,
            lang: "de-DE"
        },
        {
            siteid: 44,
            lang: "sv-SE"
        },
        {
            siteid: 50,
            lang: "pt-BR"
        },
        {
            siteid: 55,
            lang: "en-ID"
        },
        {
            siteid: 79,
            lang: "en-US"
        },
        {
            siteid: 86,
            lang: "es-ES"
        },
        {
            siteid: 87,
            lang: "pt-BR"
        },
        {
            siteid: 88,
            lang: "en-US"
        },
        {
            siteid: 90,
            lang: "en-US"
        },
        {
            siteid: 91,
            lang: "pt-BR"
        },
        {
            siteid: 92,
            lang: "en-GB"
        },
        {
            siteid: 93,
            lang: "nl-NL"
        },
        {
            siteid: 94,
            lang: "de-DE"
        },
        {
            siteid: 95,
            lang: "fr-FR"
        },
        {
            siteid: 96,
            lang: "es-ES"
        },
        {
            siteid: 97,
            lang: "es-ES"
        },
        {
            siteid: 98,
            lang: "pl-PL"
        },
        {
            siteid: 99,
            lang: "it-IT"
        },
        {
            siteid: 100,
            lang: "sv-SE"
        },
        {
            siteid: 101,
            lang: "pt-BR"
        },
        {
            siteid: 102,
            lang: "en-GB"
        },
        {
            siteid: 103,
            lang: "ru-RU"
        },
        {
            siteid: 104,
            lang: "ru-RU"
        },
        {
            siteid: 105,
            lang: "ru-RU"
        },
        {
            siteid: 106,
            lang: "it-IT"
        },
        {
            siteid: 107,
            lang: "en-GB"
        },
        {
            siteid: 108,
            lang: "sv-SE"
        },
        {
            siteid: 109,
            lang: "pl-PL"
        },
        {
            siteid: 115,
            lang: "en-GB"
        },
        {
            siteid: 116,
            lang: "tr-TR"
        },
        {
            siteid: 118,
            lang: "ms-MY"
        },
        {
            siteid: 119,
            lang: "en-GB"
        },
        {
            siteid: 120,
            lang: "jp-JP"
        },
        {
            siteid: 121,
            lang: "en-US"
        },
        {
            siteid: 122,
            lang: "es-ES"
        },
        {
            siteid: 123,
            lang: "en-US"
        },
        {
            siteid: 124,
            lang: "en-US"
        },
        {
            siteid: 125,
            lang: "AR"
        },
        {
            siteid: 126,
            lang: "en-US"
        },
        {
            siteid: 127,
            lang: "en-US"
        },
        {
            siteid: 128,
            lang: "nl-NL"
        },
        {
            siteid: 129,
            lang: "es-AR"
        },
        {
            siteid: 130,
            lang: "es-MX"
        },
        {
            siteid: 131,
            lang: "de-DE"
        },
        {
            siteid: 132,
            lang: "en-EN"
        },
        {
            siteid: 133,
            lang: "en-EN"
        },
        {
            siteid: 134,
            lang: "en-ID"
        },
        {
            siteid: 135,
            lang: "de-DE"
        },
        {
            siteid: 136,
            lang: "pl-PL"
        },
        {
            siteid: 137,
            lang: "en-EN"
        },
        {
            siteid: 138,
            lang: "it-IT"
        },
        {
            siteid: 139,
            lang: "uk-UA"
        },
        {
            siteid: 140,
            lang: "en-ID"
        },
        {
            siteid: 141,
            lang: "uk-UA"
        },
        {
            siteid: 142,
            lang: "ja-JP"
        },
        {
            siteid: 143,
            lang: "nl-NL"
        },
        {
            siteid: 144,
            lang: "en-US"
        },
        {
            siteid: 145,
            lang: "en-US"
        },
        {
            siteid: 146,
            lang: "en-US"
        },
        {
            siteid: 147,
            lang: "en-US"
        },
        {
            siteid: 148,
            lang: "en-US"
        },
        {
            siteid: 149,
            lang: "en-IN"
        },
        {
            siteid: 150,
            lang: "tr-TR"
        },
        {
            siteid: 151,
            lang: "de-DE"
        },
        {
            siteid: 152,
            lang: "ru-RU"
        },
        {
            siteid: 153,
            lang: "ru-RU"
        },
        {
            siteid: 154,
            lang: "ru-RU"
        },
        {
            siteid: 155,
            lang: "en-US"
        },
        {
            siteid: 156,
            lang: "tr-TR"
        },
        {
            siteid: 157,
            lang: "tr-TR"
        },
        {
            siteid: 158,
            lang: "tr-TR"
        },
        {
            siteid: 159,
            lang: "en-US"
        },
        {
            siteid: 160,
            lang: "en-US"
        },
        {
            siteid: 161,
            lang: "en-US"
        },
        {
            siteid: 162,
            lang: "en-US"
        },
        {
            siteid: 163,
            lang: "en-US"
        },
        {
            siteid: 164,
            lang: "en-US"
        },
        {
            siteid: 165,
            lang: "en-US"
        },
        {
            siteid: 166,
            lang: "en-US"
        },
        {
            siteid: 167,
            lang: "en-US"
        },
        {
            siteid: 168,
            lang: "en-US"
        },
        {
            siteid: 169,
            lang: "en-US"
        },
        {
            siteid: 170,
            lang: "en-US"
        },
        {
            siteid: 171,
            lang: "en-US"
        },
        {
            siteid: 172,
            lang: "en-US"
        },
        {
            siteid: 173,
            lang: "en-US"
        },
        {
            siteid: 174,
            lang: "en-US"
        },
        {
            siteid: 175,
            lang: "en-US"
        },
        {
            siteid: 176,
            lang: "en-US"
        },
        {
            siteid: 177,
            lang: "en-US"
        },
        {
            siteid: 178,
            lang: "en-US"
        },
        {
            siteid: 179,
            lang: "en-US"
        },
        {
            siteid: 180,
            lang: "en-UK"
        },
        {
            siteid: 181,
            lang: "nl-NL"
        },
        {
            siteid: 182,
            lang: "fr-FR"
        },
        {
            siteid: 183,
            lang: "de-DE"
        },
        {
            siteid: 184,
            lang: "en-US"
        },
        {
            siteid: 185,
            lang: "en-US"
        },
        {
            siteid: 186,
            lang: "en-EN"
        },
        {
            siteid: 187,
            lang: "en-EN"
        },
        {
            siteid: 188,
            lang: "en-EN"
        },
        {
            siteid: 189,
            lang: "en-EN"
        },
        {
            siteid: 190,
            lang: "en-EN"
        },
        {
            siteid: 191,
            lang: "en-US"
        },
        {
            siteid: 192,
            lang: "pt-BR"
        },
        {
            siteid: 193,
            lang: "en-US"
        },
        {
            siteid: 450,
            lang: "en-US"
        },
        {
            siteid: 451,
            lang: "nl-NL"
        },
        {
            siteid: 452,
            lang: "de-DE"
        },
        {
            siteid: 453,
            lang: "fr-FR"
        },
        {
            siteid: 454,
            lang: "es-ES"
        },
        {
            siteid: 455,
            lang: "it-IT"
        },
        {
            siteid: 456,
            lang: "en-GB"
        },
        {
            siteid: 457,
            lang: "en-ID"
        },
        {
            siteid: 458,
            lang: "es-AR"
        },
        {
            siteid: 459,
            lang: "es-LA"
        },
        {
            siteid: 460,
            lang: "es-MX"
        },
        {
            siteid: 461,
            lang: "jp-JP"
        },
        {
            siteid: 462,
            lang: "ms-MY"
        },
        {
            siteid: 463,
            lang: "pl-PL"
        },
        {
            siteid: 464,
            lang: "pt-BR"
        },
        {
            siteid: 465,
            lang: "pt-PT"
        },
        {
            siteid: 466,
            lang: "ru-RU"
        },
        {
            siteid: 467,
            lang: "sv-SE"
        },
        {
            siteid: 468,
            lang: "tr-TR"
        }], n = 0; t.length > n; n++) if (t[n].siteid === e) return t[n].lang;
        return ""
    },
    l.prototype.init = function(e) {
        this._setupEvents(),
        e && e.data && e.data.portal && e.data.portal.siteId && 500 > e.data.portal.siteId && "0" !== e.data.portal.siteId && (this.isAvailable = !0)
    },
    l.prototype._setupEvents = function() {
        this.IS_MASTER ? (this.messenger.subscribe("gameapi.friends.showInvite", this.showInvite, this), this.messenger.subscribe("gameapi.friends.getFriends", this.getFriends, this)) : this.messenger.subscribe("gameapi.friends.getFriendsResponse", this._getFriendsResponse, this)
    },
    l.prototype.showInvite = function() {
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this.IS_MASTER ? "function" == typeof SpilGames && SpilGames.Events !== void 0 && "function" == typeof SpilGames.Events.publish && SpilGames.Events.publish("invitefriends.request") : (this.messenger._postMessage({},
        void 0, "gameapi.friends.showInvite"), this.messenger._postMessage(["log.gameapi.friends.showInvite", {
            origin: "slave"
        },
        null], null, "log"), this.eventTracking.trackGameAPIEvent("friendsInvite", {
            guid: this.guid || ""
        }))
    },
    l.prototype.getFriends = function(e) {
        var t = this.messenger;
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        if (this.IS_MASTER) {
            if ("function" == typeof SpilGames) {
                var n = this;
                SpilGames(["JSLib"],
                function(e) {
                    e && "function" == typeof e ? e("api.user.getExtended",
                    function(e) {
                        e.userInfoExtended && "guest" !== e.userInfoExtended.name && e.userInfoExtended.guid ? (this.userGuid = e.userInfoExtended.guid, n._getFriendsFromPortal([], 1)) : t._postMessage({
                            friendList: {}
                        },
                        void 0, "gameapi.friends.getFriendsResponse")
                    }) : t._postMessage({
                        friendList: {}
                    },
                    void 0, "gameapi.friends.getFriendsResponse")
                })
            }
        } else "function" == typeof e && (this.friendscallback = e),
        t._postMessage({},
        void 0, "gameapi.friends.getFriends"),
        t._postMessage(["log.gameapi.friends.getFriends", {
            origin: "slave"
        },
        null], null, "log")
    },
    l.prototype._getFriendsFromPortal = function(e, t) {
        var n = this.messenger,
        i = e;
        if ("function" == typeof SpilGames) {
            var a = this;
            SpilGames("api.friend.list", {
                guid: this.userGuid,
                pageControl: {
                    page: t,
                    pageSize: 500
                }
            },
            function(e) {
                e.error ? n._postMessage(i, void 0, "gameapi.friends.getFriendsResponse") : (i = i.concat(e.friendList), e.pageControl && e.pageControl.totalPages > t ? a._getFriendsFromPortal(i, t + 1) : n._postMessage({
                    friendList: i
                },
                void 0, "gameapi.friends.getFriendsResponse"))
            })
        } else n._postMessage({
            friendList: e
        },
        void 0, "gameapi.friends.getFriendsResponse")
    },
    l.prototype._getFriendsResponse = function(e) {
        var t = this._validateData(e.friendList),
        n = !1;
        0 === t.length && (n = !0),
        this.eventTracking.trackGameAPIEvent("friendsGet", {
            guid: this.guid || "",
            fail: n
        }),
        this.friendscallback(t)
    },
    l.prototype._validateData = function(e) {
        for (var t = [], n = 0; e.length > n; n++) {
            var i = {
                uid: e[n].uid || "",
                guid: e[n].guid || "",
                displayName: e[n].name || "",
                pic_square: e[n].avatarUrl || "",
                pic_square_large: e[n].avatarLargeUrl || "",
                gender: e[n].gender || "",
                age: e[n].age || ""
            };
            t.push(i)
        }
        return t
    },
    p.prototype._setupMasterEvent = function() {
        this.IS_MASTER && this.messenger.subscribe("gameapi.score", this.submit, this)
    },
    p.prototype.submit = function(e) {
        // updateShare(e);  
        Play68.setRankingScoreDesc(e); 
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        if (this.IS_MASTER) {
            var t = !1,
            n = window.outerHeight - window.innerHeight;
            n === this.initialHeight && (t = !0),
            this.eventTracking.trackGameAPIEvent("scoreSubmit", {
                score: e,
                initialheight: this.initialHeight,
                submitheight: n,
                equals: t
            }),
            "function" == typeof SWFtoJS && SWFtoJS({
                call: "UPDATE_HIGHSCORE",
                params: {
                    score: e
                }
            })
        } else this.messenger._postMessage(e, void 0, "gameapi.score"),
        this.messenger._postMessage(["log.gameapi.score.submit", {
            origin: "slave",
            score: e
        },
        null], null, "log");
        return {
            success: !0,
            value: e
        }
    },
    u.prototype._setupMasterEvent = function() {
        this.IS_MASTER && this.messenger.subscribe("gameapi.award", this.submit, this)
    },
    u.prototype.submit = function(e) {
        var t = e.award || "";
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        if (this.IS_MASTER) {
            var n = !1;
            window.outerHeight - window.innerHeight === this.initialHeight && (n = !0),
            this.eventTracking.trackGameAPIEvent("awardSubmit", {
                award: t,
                initialheight: this.initialHeight,
                submitheight: window.outerHeight - window.innerHeight,
                equals: n
            })
        } else this.messenger._postMessage(e, void 0, "gameapi.award"),
        this.messenger._postMessage(["log.gameapi.award.submit", {
            origin: "slave",
            award: t
        },
        null], null, "log");
        return {
            success: !0,
            value: e.award
        }
    },
    d.prototype.init = function(e) {
        e = e || {},
        this.data = e.data || this.data,
        this._setupEvents()
    },
    d.prototype._setupEvents = function() {
        var e = this.messenger,
        t = this;
        this.isMaster ? (SpilGames(["JSLib"],
        function(n) {
            n.subscribe("ad.request.accepted",
            function(n) { ! 0 === n && t.adRequested && (t.adRequested = !1, SpilGames("game.ad.accepted", !0), e._postMessage(!0, void 0, "ad.request.accepted"))
            }),
            n.subscribe("ad.complete",
            function() {
                e._postMessage("", "", "ad.complete")
            })
        }), this.messenger.subscribe("gameapi.ad.request", this._setupAd, this), this.messenger.subscribe("game.ad.request", this._triggerAd, this), this.messenger.subscribe("game.force.break", this._forceGamebreak, this)) : (this.messenger.subscribe("ad.request.accepted", this._onAdAccepted, this), this.messenger.subscribe("ad.complete", this._onAdCompleted, this))
    },
    d.prototype._setupAd = function() {
        this.adRequested = !0
    },
    d.prototype._triggerAd = function() {
        SpilGames("game.ad.request")
    },
    d.prototype._forceGamebreak = function() {
        SpilGames("game.ad.accepted", !0)
    },
    d.prototype._runCallback = function(e) {
        this._callbacks[e] && (this._callbacks[e](), this._callbacks[e] = !1)
    },
    d.prototype.isAvailable = function() {
        var e = !1;
        return this.data && this.data.portal && this.data.portal.siteId && 500 > this.data.portal.siteId && (e = !0),
        e
    },
    d.prototype.reward = function(e, t) {
        if ("function" != typeof e) throw Error("pauseGame argument should be a function");
        if ("function" != typeof t) throw Error("resumeGame argument should be a function");
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        e(),
        this.isMaster ? t() : (this._callbacks.resume = t, this.messenger._postMessage(void 0, void 0, "game.force.break"))
    },
    d.prototype.request = function(e, t) {
        var n = this;
        if ("function" != typeof e) throw Error("pauseGame argument should be a function");
        if ("function" != typeof t) throw Error("resumeGame argument should be a function");
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this._callbacks.pause = e,
        this._callbacks.resume = t,
        this.isMaster || (this.messenger._postMessage(void 0, void 0, "gameapi.ad.request"), this.messenger._postMessage(["log.gameapi.ad.requested", {
            origin: "slave"
        },
        null], null, "log")),
        this.messenger._postMessage(void 0, void 0, "game.ad.request"),
        this.timeout = setTimeout(function() {
            n._requestTimeout()
        },
        this.timeoutAfter)
    },
    d.prototype._onAdAccepted = function(e) {
        var t = this.messenger;
        this.timeout && clearTimeout(this.timeout),
        !this.isMaster && e && (t._postMessage(["log.gameapi.ad.start", {
            origin: "slave"
        },
        null], null, "log"), this._runCallback("pause"))
    },
    d.prototype._onAdCompleted = function() {
        var e = this.messenger;
        this.isMaster || e._postMessage(["log.gameapi.ad.complete", {
            origin: "slave"
        },
        null], null, "log"),
        this._runCallback("resume")
    },
    d.prototype._requestTimeout = function() {
        this._onAdCompleted()
    },
    c.prototype._setupEvents = function() {
        this.IS_MASTER && this.messenger.subscribe("gameapi.gameevent", this.emit, this)
    },
    c.prototype._validateEvent = function(e) {
        var t = !1;
        return this.events[e] && this.events[e] !== void 0 && (t = !0),
        t
    },
    c.prototype.emit = function(e) {
        if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this._validateEvent(e) ? this.IS_MASTER ? "function" == typeof SWFtoJS && SWFtoJS({
            call: e
        }) : (this.messenger._postMessage(e, void 0, "gameapi.gameevent"), this.messenger._postMessage(["log.gameapi.gameevent.emit", {
            origin: "slave",
            evt: e
        },
        null], null, "log")) : this.IS_MASTER || this.messenger._postMessage(["log.gameapi.gameevent.emit", {
            origin: "slave"
        },
        null], null, "log")
    },
    h.prototype.init = function(e) {
        e = e || {},
        this.data = e.data || this.data;
        var t = this.data && this.data.game && this.data.game.applicationId ? this.data.game.applicationId: null,
        n = new Date,
        i = window.location.hostname;
        this.data && this.data.portal ? (this.isGamestate = this.data.portal.gamestate || !1, this.siteId = this.data.portal.siteId ? this.data.portal.siteId: null, this.channelId = this.data.portal.channelId ? this.data.portal.channelId: null) : (this.siteId = null, this.channelId = null),
        this.configureInternalTracking(t, n, i),
        this.isGamestate || (this.IS_SLAVE || this.IS_STANDALONE || _.isWrapped()) && this.startInternalTracking()
    },
    h.prototype._createEventObject = function(e, t, n) {
        return {
            eventCategory: e,
            eventAction: t,
            properties: n
        }
    },
    h.prototype._sendSETEvent = function(e, t, n) {
        return this.IS_STANDALONE ? _.submitData("", t, n) : this.messenger && this.messenger.post("tracker.event." + e, t, n),
        t
    },
    h.prototype.trackGamePlay = function(e) {
        if (!this.gamePlayTracking.started) return ! 1;
        var t = this.gamePlayTracking.appid,
        n = this.gamePlayTracking.timestamp,
        i = this.gamePlayTracking.host,
        a = this._createEventObject("game", "gameplay", {
            applicationId: t,
            start: n,
            host: i
        }),
        s = this.data.isLocal,
        r = !0,
        o = 0,
        l = 0;
        this.siteId && (o = parseInt(this.siteId, 10)),
        this.channelId && (l = parseInt(this.channelId, 10)),
        this.data && this.data.branding && this.data.branding.logo && this.data.branding.logo.image && (r = !1);
        var p = this._createEventObject("gameapi", "load", {
            siteid: o,
            appid: t,
            channelid: l,
            domainname: i,
            isstandalone: this.IS_STANDALONE,
            isfallbackconfig: s,
            iswhitelisted: r
        });
        return this._sendSETEvent("express", a, e),
        this._sendSETEvent("express", p,
        function() {}),
        a
    },
    h.prototype.trackTimeInGame = function(e) {
        if (!this.timeInGameTracking.started) return ! 1;
        var t = this.timeInGameTracking.appid,
        n = this.timeInGameTracking.timestamp,
        i = this._createEventObject("game", "heartbeat", {
            applicationId: t,
            start: n
        });
        return this._sendSETEvent("express", i, e),
        i
    },
    h.prototype.trackGameAPIEvent = function(e, t) {
        t.appid = this.gamePlayTracking.appid,
        t.domainname = this.gamePlayTracking.host,
        t.siteid = parseInt(this.siteId, 10),
        t.channelid = parseInt(this.channelId, 10);
        var n = this._createEventObject("gameapi", e, t);
        this._sendSETEvent("express", n,
        function() {})
    },
    h.prototype.configureInternalTracking = function(e, t, n) {
        return e ? (this.gamePlayTracking.appid = e, this.gamePlayTracking.timestamp = Date.parse(t), this.gamePlayTracking.host = n, this.timeInGameTracking.appid = e, this.timeInGameTracking.timestamp = Date.parse(t), void 0) : {
            error: "No application ID defined for this game"
        }
    },
    h.prototype.startInternalTracking = function() {
        var e = this,
        t = 6e4,
        n = function(e) {
            if (!e) throw "Could not save the time in game"
        };
        return this.moduleReady ? this.gamePlayTracking.appid ? (this.gamePlayTracking.started = !0, this.timeInGameTracking.started = !0, this.trackGamePlay(function(e) {
            if (!e) throw "Could not save the game play"
        }), this.trackTimeInGame(n), setInterval(function() {
            e.trackTimeInGame(n)
        },
        t), this.gamePlayTracking.started && this.timeInGameTracking.started) : {
            error: "No application ID defined for this game"
        }: {
            error: "This method cannot be called before the API is loaded"
        }
    },
    g.prototype.init = function(e) {
        var t;
        e = e || {},
        this.data = e.data || this.data,
        this.data && this.data.portal && this.data.portal.siteId && (t = this.data.portal.siteId, (t > 499 || 12 === t || 25 === t || 26 === t || 55 === t || 79 === t || 97 === t || 105 === t || 108 === t || 138 === t || 157 === t || 121 === t || 1 === t || 5 === t || 11 === t || 15 === t || 16 === t || 44 === t || 50 === t || 87 === t || 86 === t || 88 === t || 92 === t || 103 === t || 140 === t || 90 === t || 93 === t || 95 === t || 94 === t || 96 === t || 98 === t || 99 === t || 100 === t || 101 === t || 102 === t || 104 === t || 134 === t) && this.data.branding && this.data.branding.more_games && this.data.branding.more_games.handler && "moreGames" !== this.data.branding.more_games.handler && (this.data.branding.more_games.handler = "moreGames"))
    },
    g.prototype.getLogo = function(e) {
        if (!this.moduleReady) return {
            error: "This method cannot be called before the API is loaded"
        };
        var t = this.IS_MASTER ? "master": "slave";
        this.messenger._postMessage(["log.branding.getlogo", {
            origin: t
        },
        null], null, "log");
        var n, i, a = {
            type: {
                type: "String",
                values: ["png"]
            },
            width: "Number",
            height: "Number"
        };
        return n = this._getLink("logo"),
        e && "object" == typeof e && (i = _.validateSchema(a, e), i.error && (n.error = i.error)),
        n
    },
    g.prototype.getLink = function(e) {
        if (!e) return {
            error: "No link identifier provided"
        };
        var t = this.listLinks();
        if ( - 1 !== t.indexOf(e)) {
            var n = this.IS_MASTER ? "master": "slave";
            return this.messenger._postMessage(["log.branding.getlink", {
                origin: n,
                linkName: e
            },
            null], null, "log"),
            this._getLink(e)
        }
        return {
            error: "Invalid option: '" + e + "'",
            action: function() {}
        }
    },
    g.prototype._getLink = function(e) {
        if (!e) return {
            error: "No link identifier provided"
        };
        var t = this.data && this.data.branding ? this.data.branding: {};
        return t && t[e] ? {
            linkName: e,
            image: t[e].image || !1,
            action: this._executeHandler.bind(this, e)
        }: {
            error: "Invalid option: '" + e + "'",
            action: function() {}
        }
    },
    g.prototype._getGMLink = function(e) {
        var t = null;
        if (!e) return {
            error: "No link identifier provided"
        };
        var n = this.data && this.data.branding ? this.data.branding: {};
        return n && n[e] ? (t = this._tagUrl(n[e].url, e), {
            linkName: e,
            url: t
        }) : {
            error: "Invalid option: '" + e + "'",
            url: null
        }
    },
    g.prototype.getLinks = function() {
        var e = {},
        t = this.listLinks();
        if (0 === t.length) e = {
            more_games: {
                action: function() {}
            }
        };
        else for (var n = 0; t.length > n; n++) {
            var i = t[n];
            e[i] = this._getLink(i)
        }
        return e
    },
    g.prototype._executeHandler = function(e) {
        var t = this.data && this.data.branding ? this.data.branding: {},
        n = t[e],
        i = n.handler,
        a = this._tagUrl(n.url, e),
        s = this._getBrandName(t);
        if (n.url && n.url.length > 0 && i && this.components[i]) {
            var r = this.IS_MASTER ? "master": "slave";
            return this.messenger._postMessage(["log.branding.linkAction", {
                origin: r,
                linkName: e
            },
            null], null, "log"),
            this.components[i]({
                url: a,
                messenger: this.messenger,
                isStandalone: this.IS_STANDALONE,
                brandName: s
            })
        }
        return function() {}
    },
    g.prototype._getBrandName = function(e) {
        // var t = "a10";
        if (e && e.more_games && e.more_games.url) {
            _czc.push(["_trackEvent","open进入游戏","戳爆他们","","",""]);
            if(document.referrer)
                Play68.goHome();
            else
                play68_goHome();
            // var n = e.more_games.url;
            // t = n.replace(/(.*)www./, "").replace(/\..*/, "")
        }
        // return t
    },
    g.prototype.listLinks = function() {
        var e = [],
        t = this.data && this.data.branding ? this.data.branding: {},
        n = Object.keys(t);
        return e = n.filter(function(e) {
            return ! t[e].blacklisted
        })
    },
    g.prototype.getSplashScreen = function() {
        var e, t = this.IS_MASTER ? "master": "slave";
        if (this.data && this.data.branding && this.data.branding.splash_screen) {
            var n = !0;
            this.data.branding.splash_screen.image || this.data.branding.splash_screen.url || (n = !1),
            e = {
                show: n,
                action: this._getLink("splash_screen").action ||
                function() {}
            }
        } else e = {
            show: !0,
            action: function() {}
        };
        return this.messenger._postMessage(["log.branding.splashScreen", {
            origin: t
        },
        null], null, "log"),
        e
    },
    g.prototype.displaySplashScreen = function(e) {
        if ("function" != typeof e) throw Error("argument  passed to displaySplashScreen method should be a function");
        var t = this.IS_MASTER ? "master": "slave",
        n = this._getLink("logo").image;
        n && this.getSplashScreen().show ? ("master" !== t && this.messenger._postMessage(["log.branding.displaySplashScreen", {
            origin: t
        },
        null], null, "log"), this.components.displayOnTop({
            url: n,
            action: this.getSplashScreen().action,
            callback: e
        })) : e()
    },
    g.prototype._tagUrl = function(e, t) {
        var n, i, a, s = this.data && this.data.portal ? this.data.portal: {},
        r = this.data && this.data.game ? this.data.game: {},
        o = parseInt(s.siteId, 10);
        if ("string" != typeof e) throw Error("No url specified");
        return n = "string" == typeof t ? t: "logo",
        i = "brandedgames_" + (o > 0 && 500 > o ? "internal": "external"),
        a = ["utm_medium=" + i, "utm_campaign=" + r.applicationId, "utm_source=" + s.host, "utm_content=" + n].join("&"),
        e += e.indexOf("?") > -1 ? "&": "?",
        e + a
    },
    f.prototype.encode = function() {
        var e = ["gameapi", this.type, this.callbackId, this.data ? JSON.stringify(this.data) : ""].join("|");
        return e
    },
    y.prototype._postMessage = function(e, t, n) {
        var i, a;
        i = _.isArray(e) && "function" == typeof e[e.length - 1] ? this._callbacks.push(e.pop()) - 1 : t,
        a = new f({
            type: n || "jslib",
            callbackId: i,
            data: e
        }).encode();
        for (var s = 0; this._targets.length > s; s++) this._targets[s].postMessage(a, "*")
    },
    y.prototype._callJSLib = function() {
        SpilGames.apply(SpilGames, _.argsToArray(arguments))
    },
    y.prototype._setupEventListener = function() {
        window.addEventListener ? window.addEventListener("message", this._handleMessage.bind(this), !1) : window.attachEvent && window.attachEvent("onmessage", this._handleMessage.bind(this))
    },
    y.prototype._handleMessage = function(e) {
        var t, n, i, a, s = this,
        r = new f(e.data);
        if (r) if (t = r.type, n = r.callbackId, i = r.data, a = this._callbacks[n] || !1, this.IS_MASTER) switch (t) {
        case "jslib":
            "Array" === i.constructor.name && i.push(function(e) {
                s._postMessage(e, n)
            }),
            this._callJSLib.apply(this, i);
            break;
        case "ugapi":
            this._handleUGARequest(e);
            break;
        case "datachange":
            this._postMessage(i, null, "datachange");
            break;
        default:
            this.publish(t, i)
        } else this.IS_SLAVE && ("function" == typeof a ? (delete this._callbacks[n], a(i)) : "datachange" === t || "jslib" !== t && this.publish(t, i));
        return ! 1
    },
    y.prototype._handleUGARequest = function(e) {
        var t, n, i, a = this,
        s = new f(e.data);
        if (s) switch (t = s.data[0], n = s.callbackId, i = s.data[1] ? s.data[1] : null, t) {
        case "GameAPI.data":
            a._postMessage(this.dataStore._getCache(), n, "ugapi");
            break;
        case "GameAPI.isReady":
            a._postMessage({
                isready:
                this.api.isReady
            },
            n, "ugapi")
        }
    },
    y.prototype.post = function() {
        var e = _.argsToArray(arguments);
        return this.IS_SLAVE ? this._postMessage(e) : this._callJSLib.apply(this, e),
        this
    },
    y.prototype.publish = function(e, t) {
        return this._channels[e] && this._channels[e].forEach(function(e) {
            try {
                e.fn.call(e.ctx, t)
            } catch(n) {}
        }),
        this
    },
    y.prototype.subscribe = function(e, t, n) {
        if ("function" != typeof t) throw Error("Callback has to be a function");
        if ("string" != typeof e) throw Error("Channel name has to be a string");
        return this._channels[e] || (this._channels[e] = []),
        this._channels[e].push({
            fn: t,
            ctx: n
        }),
        this
    },
    y.prototype.unsubscribe = function(e, t) {
        return this._channels[e] && "function" == typeof t && (this._channels[e] = this._channels[e].filter(function(e) {
            return e.fn !== t
        })),
        this
    },
    y.prototype.subscribeOnce = function(e, t, n) {
        function i(n) {
            a.unsubscribe(e, i),
            t.call(this, n)
        }
        var a = this;
        return this.subscribe(e, i, n)
    },
    y.prototype.requestFromParent = function(e, t, n) {
        if (!this.IS_SLAVE) throw "You are the parent, stop talking to yourself";
        t = t || {},
        this._postMessage([e, t, n], null, "ugapi")
    },
    v.prototype._addBasic = function(e, t) {
        var n = t || {};
        return n.isMaster = this.IS_MASTER,
        n.isStandalone = this.IS_STANDALONE,
        n.messenger = this.__.messenger,
        n.data = null,
        n
    },
    v.prototype._addEventTracking = function(e) {
        var t = e || {};
        return t.eventTracking = this.__.EventTracking,
        t
    },
    v.prototype._addComponents = function(e) {
        var t = e || {};
        return t.components = this.__.components,
        t
    },
    v.prototype._addInitialHeight = function(e) {
        var t = e || {};
        return t.initialHeight = window.outerHeight - window.innerHeight,
        t
    },
    v.prototype._addAppToken = function(e) {
        var t = e || {};
        return t.appToken = this.AppToken,
        t
    },
    v.prototype._setRole = function() {
        var e = _.getRole();
        this.IS_MASTER = e.IS_MASTER,
        this.IS_SLAVE = e.IS_SLAVE,
        this.IS_STANDALONE = e.IS_STANDALONE
    },
    v.prototype._getTargets = function() {
        if (this.IS_STANDALONE) return [window];
        if (this.IS_MASTER) {
            for (var e = ["iframegame", "iframeGameState"], t = null, n = [], i = 0; e.length > i; i++) t = document.getElementById(e[i]),
            t && t.contentWindow && n.push(t.contentWindow);
            return n
        }
        return [window.parent]
    },
    v.prototype.loadAPI = function(e, t) {
        function i(t) {
            p.IS_MASTER && (t = a(t));
            var n = t.portal.gamestate || !1;
            return p.isReady = !0,
            p.Branding.moduleReady = !0,
            p.__.EventTracking.moduleReady = !0,
            p.GameState.moduleReady = !0,
            p.GameBreak.moduleReady = !0,
            p.Game.moduleReady = !0,
            p.Score.moduleReady = !0,
            p.Award.moduleReady = !0,
            p.User.moduleReady = !0,
            p.Friends.moduleReady = !0,
            p.GameEvent.moduleReady = !0,
            p.Localization.moduleReady = !0,
            p.AppToken.moduleReady = !0,
            (n || p.IS_MASTER) && p.AppToken.init({
                data: t
            }),
            p.__.EventTracking.init({
                data: t
            }),
            n && p.GameState.init({
                data: t
            }),
            n || (p.Branding.init({
                data: t
            }), p.Game.init({
                data: t
            }), p.GameBreak.init({
                data: t
            }), p.Friends.init({
                data: t
            }), p.User.init({
                data: t
            }), p.Localization.init({
                data: t
            })),
            p.__.messenger._postMessage(["log.gameapi.loadapi.finish", {
                origin: u,
                version: p.version
            },
            null], null, "log"),
            e(p)
        }
        function a(e) {
            var t = e.game || {},
            n = e.user || {},
            i = e.portal || {},
            a = e.branding || {};
            return A.getLocalConfig({
                game: t,
                user: n,
                portal: i,
                branding: a
            })
        }
        function s() {
            p.__.messenger.requestFromParent("GameAPI.data", {},
            function(e) {
                i(e)
            })
        }
        function r() {
            p.IS_STANDALONE = !0,
            p.IS_MASTER = !0,
            p.IS_SLAVE = !0,
            p.__.dataStore = new n({
                isMaster: !0
            }),
            t = t || null,
            A.setupStandaloneMode(t,
            function(e) {
                p.__.dataStore._setCache(a(e)),
                i(e)
            })
        }
        function o() {
            p.__.messenger.requestFromParent("GameAPI.isReady", {},
            function(e) {
                l && clearTimeout(l),
                e.isready ? s() : 5 > d ? (d++, setTimeout(o, 500)) : (_.log("GameAPI:checkMasterReady not ready but reached max wait"), s())
            })
        }
        var l, p = this,
        u = this.IS_MASTER ? "master": "slave",
        d = 0;
        if (t !== void 0 && t.id !== void 0 && "576742227280293562" === t.id && (window.onkeydown = null), "function" != typeof e) throw Error("argument passed to loadAPI method should be a function");
        return ! 0 === this.isReady ? (_.log("WARNING: Detected multiple executions of GameAPI.loadAPI(). This method should only be executed once per page load!"), e(p)) : (this.__.messenger._postMessage(["log.gameapi.loadapi.start", {
            origin: u,
            version: p.version,
            spildata: t
        },
        null], null, "log"), this.IS_STANDALONE ? r() : this.IS_MASTER ? A.getGameConfig().then(function(e) {
            A.getBrandingConfig(e).then(function(t) {
                e && !e.isError ? (e.branding = t.branding, p.__.dataStore._setCache(a(e))) : _.log("GameAPI gameConfig error: ", e.isError),
                i(e)
            })
        }) : t && t.gamestate ? i(A.configFromData(t)) : (l = setTimeout(r, 600), o()), void 0)
    };
    var T = new v(n, y, g, h, d);
    "function" == typeof define && define.amd && define("GameAPI", T),
    e.GameAPI = T
})(window),
function() {
    "use strict";
    function e(e) {
        e && (e.setTargetValueAtTime || (e.setTargetValueAtTime = e.setTargetAtTime))
    }
    window.hasOwnProperty("AudioContext") && (window.webkitAudioContext = AudioContext, AudioContext.prototype.hasOwnProperty("internal_createGain") || (AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain, AudioContext.prototype.createGain = function() {
        var t = this.internal_createGain();
        return e(t.gain),
        t
    }), AudioContext.prototype.hasOwnProperty("internal_createDelay") || (AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay, AudioContext.prototype.createDelay = function() {
        var t = this.internal_createDelay();
        return e(t.delayTime),
        t
    }), AudioContext.prototype.hasOwnProperty("internal_createBufferSource") || (AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource, AudioContext.prototype.createBufferSource = function() {
        var t = this.internal_createBufferSource();
        return t.noteOn || (t.noteOn = t.start),
        t.noteGrainOn || (t.noteGrainOn = t.start),
        t.noteOff || (t.noteOff = t.stop),
        e(t.playbackRate),
        t
    }), AudioContext.prototype.hasOwnProperty("internal_createDynamicsCompressor") || (AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor, AudioContext.prototype.createDynamicsCompressor = function() {
        var t = this.internal_createDynamicsCompressor();
        return e(t.threshold),
        e(t.knee),
        e(t.ratio),
        e(t.reduction),
        e(t.attack),
        e(t.release),
        t
    }), AudioContext.prototype.hasOwnProperty("internal_createBiquadFilter") || (AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter, AudioContext.prototype.createBiquadFilter = function() {
        var t = this.internal_createBiquadFilter();
        e(t.frequency),
        e(t.detune),
        e(t.Q),
        e(t.gain);
        for (var n = ["LOWPASS", "HIGHPASS", "BANDPASS", "LOWSHELF", "HIGHSHELF", "PEAKING", "NOTCH", "ALLPASS"], i = 0; n.length > i; ++i) {
            var a = n[i],
            s = a.toLowerCase();
            t.hasOwnProperty(a) || (t[a] = s)
        }
        return t
    }), AudioContext.prototype.hasOwnProperty("internal_createOscillator") || AudioContext.prototype.hasOwnProperty("createOscillator") && (AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator, AudioContext.prototype.createOscillator = function() {
        var t = this.internal_createOscillator();
        t.noteOn || (t.noteOn = t.start),
        t.noteOff || (t.noteOff = t.stop),
        e(t.frequency),
        e(t.detune);
        for (var n = ["SINE", "SQUARE", "SAWTOOTH", "TRIANGLE", "CUSTOM"], i = 0; n.length > i; ++i) {
            var a = n[i],
            s = a.toLowerCase();
            t.hasOwnProperty(a) || (t[a] = s)
        }
        return t.hasOwnProperty("setWaveTable") || (t.setWaveTable = t.setPeriodicTable),
        t
    }), AudioContext.prototype.hasOwnProperty("internal_createPanner") || (AudioContext.prototype.internal_createPanner = AudioContext.prototype.createPanner, AudioContext.prototype.createPanner = function() {
        var e = this.internal_createPanner(),
        t = {
            EQUALPOWER: "equalpower",
            HRTF: "HRTF",
            LINEAR_DISTANCE: "linear",
            INVERSE_DISTANCE: "inverse",
            EXPONENTIAL_DISTANCE: "exponential"
        };
        for (var n in t) {
            var i = t[n];
            e.hasOwnProperty(n) || (e[n] = i)
        }
        return e
    }), AudioContext.prototype.hasOwnProperty("createGainNode") || (AudioContext.prototype.createGainNode = AudioContext.prototype.createGain), AudioContext.prototype.hasOwnProperty("createDelayNode") || (AudioContext.prototype.createDelayNode = AudioContext.prototype.createDelay), AudioContext.prototype.hasOwnProperty("createJavaScriptNode") || (AudioContext.prototype.createJavaScriptNode = AudioContext.prototype.createScriptProcessor), AudioContext.prototype.hasOwnProperty("createWaveTable") || (AudioContext.prototype.createWaveTable = AudioContext.prototype.createPeriodicWave))
} ();