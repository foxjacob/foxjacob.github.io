!function(){

    window.egret = {};

    (function(b) {
        var d = function() {
            function b() {
                this._hashCode = b.hashCount++
            }
            Object.defineProperty(b.prototype, "hashCode", {
                get: function() {
                    return this._hashCode
                },
                enumerable: !0,
                configurable: !0
            });
            b.hashCount = 1;
            return b
        }();
        b.HashObject = d;
        d.prototype.__class__ = "egret.HashObject"
    })(egret);
    var __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a(e) {
                "undefined" === typeof e && (e = 300);
                b.call(this);
                this.objectPool = [];
                this._length = 0;
                1 > e && (e = 1);
                this.autoDisposeTime = e;
                this.frameCount = 0
            }
            __extends(a, b);
            a.prototype._checkFrame = function() {
                this.frameCount--;
                0 >= this.frameCount && this.dispose()
            };
            Object.defineProperty(a.prototype, "length", {
                get: function() {
                    return this._length
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.push = function(e) {
                var h = this.objectPool; - 1 == h.indexOf(e) && (h.push(e), this._length++, 0 == this.frameCount &&
                    (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
            };
            a.prototype.pop = function() {
                if (0 == this._length) return null;
                this._length--;
                return this.objectPool.pop()
            };
            a.prototype.dispose = function() {
                0 < this._length && (this.objectPool = [], this._length = 0);
                this.frameCount = 0;
                var e = a._callBackList,
                    h = e.indexOf(this); - 1 != h && e.splice(h, 1)
            };
            a._callBackList = [];
            return a
        }(b.HashObject);
        b.Recycler = d;
        d.prototype.__class__ = "egret.Recycler"
    })(egret);
    (function(b) {
        b.__START_TIME;
        b.getTimer = function() {
            return Date.now() - b.__START_TIME
        }
    })(egret);
    (function(b) {
        b.__callLaterFunctionList = [];
        b.__callLaterThisList = [];
        b.__callLaterArgsList = [];
        b.callLater = function(d, c) {
            for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
            b.__callLaterFunctionList.push(d);
            b.__callLaterThisList.push(c);
            b.__callLaterArgsList.push(a)
        }
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a, m) {
                "undefined" === typeof a && (a = !1);
                "undefined" === typeof m && (m = !1);
                c.call(this);
                this._eventPhase = 2;
                this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
                this.isNew = !0;
                this._type = e;
                this._bubbles = a;
                this._cancelable = m
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "type", {
                get: function() {
                    return this._type
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "bubbles", {
                get: function() {
                    return this._bubbles
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "cancelable", {
                get: function() {
                    return this._cancelable
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "eventPhase", {
                get: function() {
                    return this._eventPhase
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "currentTarget", {
                get: function() {
                    return this._currentTarget
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setCurrentTarget = function(e) {
                this._currentTarget = e
            };
            Object.defineProperty(a.prototype, "target", {
                get: function() {
                    return this._target
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.isDefaultPrevented = function() {
                return this._isDefaultPrevented
            };
            a.prototype.preventDefault = function() {
                this._cancelable && (this._isDefaultPrevented = !0)
            };
            a.prototype.stopPropagation = function() {
                this._bubbles && (this._isPropagationStopped = !0)
            };
            a.prototype.stopImmediatePropagation = function() {
                this._bubbles && (this._isPropagationImmediateStopped = !0)
            };
            a.prototype._reset = function() {
                this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped =
                    this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
            };
            a._dispatchByTarget = function(e, a, m, c, d, g) {
                "undefined" === typeof d && (d = !1);
                "undefined" === typeof g && (g = !1);
                var k = e.eventRecycler;
                k || (k = e.eventRecycler = new b.Recycler);
                var n = k.pop();
                n ? n._type = m : n = new e(m);
                n._bubbles = d;
                n._cancelable = g;
                if (c)
                    for (var p in c) n[p] = c[p], null !== n[p] && (c[p] = null);
                e = a.dispatchEvent(n);
                k.push(n);
                return e
            };
            a._getPropertyData = function(e) {
                var a = e._props;
                a || (a = e._props = {});
                return a
            };
            a.dispatchEvent = function(e, h, m, b) {
                "undefined" === typeof m && (m = !1);
                var c = a._getPropertyData(a);
                b && (c.data = b);
                a._dispatchByTarget(a, e, h, c, m)
            };
            a.ADDED_TO_STAGE = "addedToStage";
            a.REMOVED_FROM_STAGE = "removedFromStage";
            a.ADDED = "added";
            a.REMOVED = "removed";
            a.COMPLETE = "complete";
            a.ENTER_FRAME = "enterFrame";
            a.RENDER = "render";
            a.FINISH_RENDER = "finishRender";
            a.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
            a.LEAVE_STAGE = "leaveStage";
            a.RESIZE = "resize";
            a.CHANGE = "change";
            return a
        }(b.HashObject);
        b.Event =
            d;
        d.prototype.__class__ = "egret.Event"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a, m) {
                "undefined" === typeof a && (a = !1);
                "undefined" === typeof m && (m = !1);
                c.call(this, e, a, m)
            }
            __extends(a, c);
            a.dispatchIOErrorEvent = function(e) {
                b.Event._dispatchByTarget(a, e, a.IO_ERROR)
            };
            a.IO_ERROR = "ioError";
            return a
        }(b.Event);
        b.IOErrorEvent = d;
        d.prototype.__class__ = "egret.IOErrorEvent"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a, m, b, d, g, k, n, p, q) {
                "undefined" === typeof a && (a = !0);
                "undefined" === typeof m && (m = !0);
                "undefined" === typeof b && (b = 0);
                "undefined" === typeof d && (d = 0);
                "undefined" === typeof g && (g = 0);
                "undefined" === typeof k && (k = !1);
                "undefined" === typeof n && (n = !1);
                "undefined" === typeof q && (q = !1);
                c.call(this, e, a, m);
                this._localY = this._localX = this._stageY = this._stageX = 0;
                this.touchPointID = b;
                this._stageX = d;
                this._stageY = g;
                this.ctrlKey = k;
                this.altKey = n;
                this.touchDown = q
            }
            __extends(a, c);
            Object.defineProperty(a.prototype,
                "stageX", {
                    get: function() {
                        return this._stageX
                    },
                    enumerable: !0,
                    configurable: !0
                });
            Object.defineProperty(a.prototype, "stageY", {
                get: function() {
                    return this._stageY
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "localX", {
                get: function() {
                    return this._localX
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "localY", {
                get: function() {
                    return this._localY
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setCurrentTarget = function(e) {
                c.prototype._setCurrentTarget.call(this, e);
                e instanceof
                    b.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, b.Point.identity), this._localX = e.x, this._localY = e.y)
            };
            a.dispatchTouchEvent = function(e, h, m, c, d, g, k, n, p) {
                "undefined" === typeof m && (m = 0);
                "undefined" === typeof c && (c = 0);
                "undefined" === typeof d && (d = 0);
                "undefined" === typeof g && (g = !1);
                "undefined" === typeof k && (k = !1);
                "undefined" === typeof n && (n = !1);
                "undefined" === typeof p && (p = !1);
                var q = b.Event._getPropertyData(a);
                q.touchPointID = m;
                q._stageX = c;
                q._stageY = d;
                q.ctrlKey = g;
                q.altKey = k;
                q.shiftKey = n;
                q.touchDown =
                    p;
                b.Event._dispatchByTarget(a, e, h, q, !0, !0)
            };
            a.TOUCH_TAP = "touchTap";
            a.TOUCH_MOVE = "touchMove";
            a.TOUCH_BEGIN = "touchBegin";
            a.TOUCH_END = "touchEnd";
            a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
            a.TOUCH_ROLL_OUT = "touchRollOut";
            a.TOUCH_ROLL_OVER = "touchRollOver";
            a.TOUCH_OUT = "touchOut";
            a.TOUCH_OVER = "touchOver";
            return a
        }(b.Event);
        b.TouchEvent = d;
        d.prototype.__class__ = "egret.TouchEvent"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a, m) {
                "undefined" === typeof a && (a = !1);
                "undefined" === typeof m && (m = !1);
                c.call(this, e, a, m)
            }
            __extends(a, c);
            a.dispatchTimerEvent = function(e, h) {
                b.Event._dispatchByTarget(a, e, h)
            };
            a.TIMER = "timer";
            a.TIMER_COMPLETE = "timerComplete";
            return a
        }(b.Event);
        b.TimerEvent = d;
        d.prototype.__class__ = "egret.TimerEvent"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.CAPTURING_PHASE = 1;
            b.AT_TARGET = 2;
            b.BUBBLING_PHASE = 3;
            return b
        }();
        b.EventPhase = d;
        d.prototype.__class__ = "egret.EventPhase"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e) {
                "undefined" === typeof e && (e = null);
                c.call(this);
                this._eventTarget = e ? e : this
            }
            __extends(a, c);
            a.prototype.addEventListener = function(e, a, m, c, d) {
                "undefined" === typeof c && (c = !1);
                "undefined" === typeof d && (d = 0);
                "undefined" === typeof c && (c = !1);
                "undefined" === typeof d && (d = 0);
                a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
                c ? (this._captureEventsMap || (this._captureEventsMap = {}), c = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), c = this._eventsMap);
                var g = c[e];
                g || (g = c[e] = []);
                this._insertEventBin(g, a, m, d)
            };
            a.prototype._insertEventBin = function(e, a, m, b) {
                for (var c = -1, d = e.length, k = 0; k < d; k++) {
                    var n = e[k];
                    if (n.listener === a && n.thisObject === m) return !1; - 1 == c && n.priority < b && (c = k)
                }
                a = {
                    listener: a,
                    thisObject: m,
                    priority: b
                }; - 1 != c ? e.splice(c, 0, a) : e.push(a);
                return !0
            };
            a.prototype.removeEventListener = function(e, a, m, b) {
                "undefined" === typeof b && (b = !1);
                if (b = b ? this._captureEventsMap : this._eventsMap) {
                    var c = b[e];
                    c && (this._removeEventBin(c, a, m), 0 ==
                        c.length && delete b[e])
                }
            };
            a.prototype._removeEventBin = function(e, a, m) {
                for (var b = e.length, c = 0; c < b; c++) {
                    var d = e[c];
                    if (d.listener === a && d.thisObject === m) return e.splice(c, 1), !0
                }
                return !1
            };
            a.prototype.hasEventListener = function(e) {
                return this._eventsMap && this._eventsMap[e] || this._captureEventsMap && this._captureEventsMap[e]
            };
            a.prototype.willTrigger = function(e) {
                return this.hasEventListener(e)
            };
            a.prototype.dispatchEvent = function(e) {
                e._reset();
                e._target = this._eventTarget;
                e._setCurrentTarget(this._eventTarget);
                return this._notifyListener(e)
            };
            a.prototype._notifyListener = function(e) {
                var a = 1 == e._eventPhase ? this._captureEventsMap : this._eventsMap;
                if (!a) return !0;
                a = a[e.type];
                if (!a) return !0;
                for (var a = a.concat(), m = a.length, b = 0; b < m; b++) {
                    var c = a[b];
                    c.listener.call(c.thisObject, e);
                    if (e._isPropagationImmediateStopped) break
                }
                return !e.isDefaultPrevented()
            };
            a.prototype.dispatchEventWith = function(e, a, m) {
                "undefined" === typeof a && (a = !1);
                b.Event.dispatchEvent(this, e, a, m)
            };
            return a
        }(b.HashObject);
        b.EventDispatcher = d;
        d.prototype.__class__ =
            "egret.EventDispatcher"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this.reuseEvent = new b.Event("")
            }
            __extends(a, c);
            a.prototype.run = function() {
                b.Ticker.getInstance().run();
                b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
                b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
                this.touchContext.run()
            };
            a.prototype.renderLoop = function(e) {
                e = this.rendererContext;
                e.clearScreen();
                if (0 < b.__callLaterFunctionList.length) {
                    var a = b.__callLaterFunctionList;
                    b.__callLaterFunctionList =
                        [];
                    var m = b.__callLaterThisList;
                    b.__callLaterThisList = [];
                    var c = b.__callLaterArgsList;
                    b.__callLaterArgsList = []
                }
                this.dispatchEventWith(b.Event.RENDER);
                b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
                a && this.doCallLaterList(a, m, c);
                this.stage._updateTransform();
                this.dispatchEventWith(b.Event.FINISH_UPDATE_TRANSFORM);
                this.stage._draw(e);
                this.dispatchEventWith(b.Event.FINISH_RENDER)
            };
            a.prototype.broadcastEnterFrame = function(e) {
                e = this.reuseEvent;
                e._type = b.Event.ENTER_FRAME;
                this.dispatchEvent(e);
                for (var a = b.DisplayObject._enterFrameCallBackList.concat(), m = a.length, c = 0; c < m; c++) {
                    var d = a[c];
                    e._target = d.display;
                    e._setCurrentTarget(d.display);
                    d.listener.call(d.thisObject, e)
                }
                a = b.Recycler._callBackList;
                for (c = a.length - 1; 0 <= c; c--) a[c]._checkFrame()
            };
            a.prototype.broadcastRender = function() {
                var e = this.reuseEvent;
                e._type = b.Event.RENDER;
                for (var a = b.DisplayObject._renderCallBackList.concat(), m = a.length, c = 0; c < m; c++) {
                    var d = a[c];
                    e._target = d.display;
                    e._setCurrentTarget(d.display);
                    d.listener.call(d.thisObject,
                        e)
                }
            };
            a.prototype.doCallLaterList = function(e, a, b) {
                for (var c = e.length, d = 0; d < c; d++) {
                    var g = e[d];
                    null != g && g.apply(a[d], b[d])
                }
            };
            a.DEVICE_PC = "web";
            a.DEVICE_MOBILE = "native";
            return a
        }(b.EventDispatcher);
        b.MainContext = d;
        d.prototype.__class__ = "egret.MainContext"
    })(egret);
    var testDeviceType = function() {
        if (!this.navigator) return !0;
        var b = navigator.userAgent.toLowerCase();
        return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
    };
    egret.MainContext.instance = new egret.MainContext;
    egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
    (function(b) {
        var d = function() {
            function c() {
                this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
                this._maxDeltaTime = 500;
                this._totalDeltaTime = 0
            }
            c.getInstance = function() {
                null == c.instance && (c.instance = new c);
                return c.instance
            };
            c.prototype.run = function() {
                b.Ticker.getInstance().register(this.update, this);
                null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, b.MainContext.instance.stage.addChild(this._txt));
                var a =
                    b.MainContext.instance;
                a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
                a.addEventListener(b.Event.RENDER, this.onStartRender, this);
                a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
                a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
            };
            c.prototype.onEnterFrame = function(a) {
                this._lastTime = b.getTimer()
            };
            c.prototype.onStartRender = function(a) {
                a = b.getTimer();
                this._logicPerformanceCost = a - this._lastTime;
                this._lastTime = a
            };
            c.prototype.onFinishUpdateTransform =
                function(a) {
                    a = b.getTimer();
                    this._updateTransformPerformanceCost = a - this._lastTime;
                    this._lastTime = a
                };
            c.prototype.onFinishRender = function(a) {
                a = b.getTimer();
                this._renderPerformanceCost = a - this._lastTime;
                this._lastTime = a
            };
            c.prototype.update = function(a) {
                this._tick++;
                this._totalDeltaTime += a;
                if (this._totalDeltaTime >= this._maxDeltaTime) {
                    a = (this._preDrawCount - 1).toString();
                    var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
                        "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                    this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                    this._tick = this._totalDeltaTime = 0
                }
                this._preDrawCount = 0
            };
            c.prototype.onDrawImage = function() {
                this._preDrawCount++
            };
            return c
        }();
        b.Profiler = d;
        d.prototype.__class__ = "egret.Profiler"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.apply(this, arguments);
                this._timeScale = 1;
                this._paused = !1;
                this.callBackList = []
            }
            __extends(a, c);
            a.prototype.run = function() {
                b.__START_TIME = (new Date).getTime();
                b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
            };
            a.prototype.update = function(e) {
                var a = this.callBackList.concat(),
                    b = a.length;
                e *= this._timeScale;
                e *= this._timeScale;
                for (var c = 0; c < b; c++) {
                    var d = a[c];
                    d.listener.call(d.thisObject, e)
                }
            };
            a.prototype.register = function(e, a, b) {
                "undefined" ===
                    typeof b && (b = 0);
                this._insertEventBin(this.callBackList, e, a, b)
            };
            a.prototype.unregister = function(e, a) {
                this._removeEventBin(this.callBackList, e, a)
            };
            a.prototype.setTimeout = function(e, a, m) {
                for (var c = [], d = 0; d < arguments.length - 3; d++) c[d] = arguments[d + 3];
                b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
                b.setTimeout.apply(null, [e, a, m].concat(c))
            };
            a.prototype.setTimeScale = function(e) {
                this._timeScale = e
            };
            a.prototype.getTimeScale = function() {
                return this._timeScale
            };
            a.prototype.pause = function() {
                this._paused = !0
            };
            a.prototype.resume = function() {
                this._paused = !1
            };
            a.getInstance = function() {
                null == a.instance && (a.instance = new a);
                return a.instance
            };
            return a
        }(b.EventDispatcher);
        b.Ticker = d;
        d.prototype.__class__ = "egret.Ticker"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.LEFT = "left";
            b.RIGHT = "right";
            b.CENTER = "center";
            b.JUSTIFY = "justify";
            b.CONTENT_JUSTIFY = "contentJustify";
            return b
        }();
        b.HorizontalAlign = d;
        d.prototype.__class__ = "egret.HorizontalAlign"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.TOP = "top";
            b.BOTTOM = "bottom";
            b.MIDDLE = "middle";
            b.JUSTIFY = "justify";
            b.CONTENT_JUSTIFY = "contentJustify";
            return b
        }();
        b.VerticalAlign = d;
        d.prototype.__class__ = "egret.VerticalAlign"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a) {
                "undefined" === typeof a && (a = 0);
                c.call(this);
                this._currentCount = 0;
                this.delay = e;
                this.repeatCount = a
            }
            __extends(a, c);
            a.prototype.currentCount = function() {
                return this._currentCount
            };
            Object.defineProperty(a.prototype, "running", {
                get: function() {
                    return this._running
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.reset = function() {
                this.stop();
                this._currentCount = 0
            };
            a.prototype.start = function() {
                this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount =
                    0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
            };
            a.prototype.stop = function() {
                this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
            };
            a.prototype.onEnterFrame = function(e) {
                e = b.getTimer();
                e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
            };
            return a
        }(b.EventDispatcher);
        b.Timer = d;
        d.prototype.__class__ = "egret.Timer"
    })(egret);
    (function(b) {
        b.getQualifiedClassName = function(b) {
            b = b.prototype ? b.prototype : b.__proto__;
            if (b.hasOwnProperty("__class__")) return b.__class__;
            var c = b.constructor.toString(),
                a = c.indexOf("("),
                c = c.substring(9, a);
            return b.__class__ = c
        }
    })(egret);
    (function(b) {
        var d = {};
        b.getDefinitionByName = function(b) {
            if (!b) return null;
            var a = d[b];
            if (a) return a;
            for (var e = b.split("."), h = e.length, a = __global, m = 0; m < h; m++)
                if (a = a[e[m]], !a) return null;
            return d[b] = a
        }
    })(egret);
    var __global = __global || this;
    (function(b) {
        function d(e) {
            for (var a in c) {
                var b = c[a];
                b.delay -= e;
                0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete c[a])
            }
        }
        var c = {},
            a = 0;
        b.setTimeout = function(e, h, m) {
            for (var l = [], f = 0; f < arguments.length - 3; f++) l[f] = arguments[f + 3];
            l = {
                listener: e,
                thisObject: h,
                delay: m,
                params: l
            };
            0 == a && b.Ticker.getInstance().register(d, null);
            a++;
            c[a] = l;
            return a
        };
        b.clearTimeout = function(e) {
            delete c[e]
        }
    })(egret);
    (function(b) {
        b.hasDefinition = function(d) {
            return b.getDefinitionByName(d) ? !0 : !1
        }
    })(egret);
    (function(b) {
        b.toColorString = function(b) {
            if (isNaN(b) || 0 > b) b = 0;
            16777215 < b && (b = 16777215);
            for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
            return "#" + b
        }
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(e, a, b, d, f, g) {
                "undefined" === typeof e && (e = 1);
                "undefined" === typeof a && (a = 0);
                "undefined" === typeof b && (b = 0);
                "undefined" === typeof d && (d = 1);
                "undefined" === typeof f && (f = 0);
                "undefined" === typeof g && (g = 0);
                c.call(this);
                this.a = e;
                this.b = a;
                this.c = b;
                this.d = d;
                this.tx = f;
                this.ty = g
            }
            __extends(a, c);
            a.prototype.prepend = function(e, a, b, c, d, g) {
                var k = this.tx;
                if (1 != e || 0 != a || 0 != b || 1 != c) {
                    var n = this.a,
                        p = this.c;
                    this.a = n * e + this.b * b;
                    this.b = n * a + this.b * c;
                    this.c = p * e + this.d * b;
                    this.d = p * a + this.d *
                        c
                }
                this.tx = k * e + this.ty * b + d;
                this.ty = k * a + this.ty * c + g;
                return this
            };
            a.prototype.append = function(e, a, b, c, d, g) {
                var k = this.a,
                    n = this.b,
                    p = this.c,
                    q = this.d;
                this.a = e * k + a * p;
                this.b = e * n + a * q;
                this.c = b * k + c * p;
                this.d = b * n + c * q;
                this.tx = d * k + g * p + this.tx;
                this.ty = d * n + g * q + this.ty;
                return this
            };
            a.prototype.prependMatrix = function(e) {
                this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty);
                return this
            };
            a.prototype.appendMatrix = function(e) {
                this.append(e.a, e.b, e.c, e.d, e.tx, e.ty);
                return this
            };
            a.prototype.prependTransform = function(e, h, b, c, d, g, k, n, p) {
                if (d %
                    360) {
                    var q = d * a.DEG_TO_RAD;
                    d = Math.cos(q);
                    q = Math.sin(q)
                } else d = 1, q = 0; if (n || p) this.tx -= n, this.ty -= p;
                g || k ? (g *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.prepend(d * b, q * b, -q * c, d * c, 0, 0), this.prepend(Math.cos(k), Math.sin(k), -Math.sin(g), Math.cos(g), e, h)) : this.prepend(d * b, q * b, -q * c, d * c, e, h);
                return this
            };
            a.prototype.appendTransform = function(e, h, b, c, d, g, k, n, p) {
                if (d % 360) {
                    var q = d * a.DEG_TO_RAD;
                    d = Math.cos(q);
                    q = Math.sin(q)
                } else d = 1, q = 0;
                g || k ? (g *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.append(Math.cos(k), Math.sin(k), -Math.sin(g),
                    Math.cos(g), e, h), this.append(d * b, q * b, -q * c, d * c, 0, 0)) : this.append(d * b, q * b, -q * c, d * c, e, h);
                if (n || p) this.tx -= n * this.a + p * this.c, this.ty -= n * this.b + p * this.d;
                return this
            };
            a.prototype.rotate = function(e) {
                var a = Math.cos(e);
                e = Math.sin(e);
                var b = this.a,
                    c = this.c,
                    d = this.tx;
                this.a = b * a - this.b * e;
                this.b = b * e + this.b * a;
                this.c = c * a - this.d * e;
                this.d = c * e + this.d * a;
                this.tx = d * a - this.ty * e;
                this.ty = d * e + this.ty * a;
                return this
            };
            a.prototype.skew = function(e, h) {
                e *= a.DEG_TO_RAD;
                h *= a.DEG_TO_RAD;
                this.append(Math.cos(h), Math.sin(h), -Math.sin(e),
                    Math.cos(e), 0, 0);
                return this
            };
            a.prototype.scale = function(e, a) {
                this.a *= e;
                this.d *= a;
                this.c *= e;
                this.b *= a;
                this.tx *= e;
                this.ty *= a;
                return this
            };
            a.prototype.translate = function(e, a) {
                this.tx += e;
                this.ty += a;
                return this
            };
            a.prototype.identity = function() {
                this.a = this.d = 1;
                this.b = this.c = this.tx = this.ty = 0;
                return this
            };
            a.prototype.invert = function() {
                var e = this.a,
                    a = this.b,
                    b = this.c,
                    c = this.d,
                    d = this.tx,
                    g = e * c - a * b;
                this.a = c / g;
                this.b = -a / g;
                this.c = -b / g;
                this.d = e / g;
                this.tx = (b * this.ty - c * d) / g;
                this.ty = -(e * this.ty - a * d) / g;
                return this
            };
            a.transformCoords = function(e, a, c) {
                var d = b.Point.identity;
                d.x = e.a * a + e.c * c + e.tx;
                d.y = e.d * c + e.b * a + e.ty;
                return d
            };
            a.prototype.toArray = function(e) {
                this.array || (this.array = new Float32Array(9));
                e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] =
                    0);
                this.array[8] = 1;
                return this.array
            };
            a.identity = new a;
            a.DEG_TO_RAD = Math.PI / 180;
            return a
        }(b.HashObject);
        b.Matrix = d;
        d.prototype.__class__ = "egret.Matrix"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a(e, a) {
                "undefined" === typeof e && (e = 0);
                "undefined" === typeof a && (a = 0);
                b.call(this);
                this.x = e;
                this.y = a
            }
            __extends(a, b);
            a.prototype.clone = function() {
                return new a(this.x, this.y)
            };
            a.prototype.equals = function(e) {
                return this.x == e.x && this.y == e.y
            };
            a.distance = function(e, a) {
                return Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y))
            };
            a.identity = new a(0, 0);
            return a
        }(b.HashObject);
        b.Point = d;
        d.prototype.__class__ = "egret.Point"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a(e, a, m, d) {
                "undefined" === typeof e && (e = 0);
                "undefined" === typeof a && (a = 0);
                "undefined" === typeof m && (m = 0);
                "undefined" === typeof d && (d = 0);
                b.call(this);
                this.x = e;
                this.y = a;
                this.width = m;
                this.height = d
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(e) {
                    this.width = e - this.x
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(e) {
                    this.height =
                        e - this.y
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.initialize = function(e, a, b, c) {
                this.x = e;
                this.y = a;
                this.width = b;
                this.height = c;
                return this
            };
            a.prototype.contains = function(e, a) {
                return this.x <= e && this.x + this.width >= e && this.y <= a && this.y + this.height >= a
            };
            a.prototype.intersects = function(e) {
                return this.contains(e.x, e.y) || this.contains(e.x, e.bottom) || this.contains(e.right, e.y) || this.contains(e.right, e.bottom) ? !0 : !1
            };
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height)
            };
            a.prototype.containsPoint =
                function(e) {
                    return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
                };
            a.identity = new a(0, 0, 0, 0);
            return a
        }(b.HashObject);
        b.Rectangle = d;
        d.prototype.__class__ = "egret.Rectangle"
    })(egret);
    (function(b) {
        var d = function() {
            function c() {}
            c.fatal = function(a, e) {
                "undefined" === typeof e && (e = null);
                b.Logger.traceToConsole("Fatal", a, e);
                throw Error(b.Logger.getTraceCode("Fatal", a, e));
            };
            c.info = function(a, e) {
                "undefined" === typeof e && (e = null);
                b.Logger.traceToConsole("Info", a, e)
            };
            c.warning = function(a, e) {
                "undefined" === typeof e && (e = null);
                b.Logger.traceToConsole("Warning", a, e)
            };
            c.traceToConsole = function(a, e, h) {
                console.log(b.Logger.getTraceCode(a, e, h))
            };
            c.getTraceCode = function(a, e, h) {
                return "[" + a + "]" + e + ":" +
                    (null == h ? "" : h)
            };
            return c
        }();
        b.Logger = d;
        d.prototype.__class__ = "egret.Logger"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._isSupportDOMParser = this._xmlDict = this._parser = null;
                this._xmlDict = {};
                window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
            }
            __extends(a, c);
            a.getInstance = function() {
                a._instance || (a._instance = new a);
                return a._instance
            };
            a.prototype.parserXML = function(e) {
                for (var a = 0;
                     "\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
                0 != a && (e = e.substring(a, e.length));
                this._isSupportDOMParser ?
                    a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
                null == a && b.Logger.info("xml not found!");
                return a
            };
            a._instance = null;
            return a
        }(b.HashObject);
        b.SAXParser = d;
        d.prototype.__class__ = "egret.SAXParser"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(e) {
            function h() {
                e.call(this);
                this._designHeight = this._designWidth = 0;
                this._scaleY = this._scaleX = 1;
                var a = document.getElementById(h.canvas_name),
                    b = a.height;
                this._designWidth = a.width;
                this._designHeight = b
            }
            __extends(h, e);
            h.getInstance = function() {
                null == h.instance && (a.initialize(), h.instance = new h);
                return h.instance
            };
            h.prototype.setDesignSize = function(e, a, h) {
                this._designWidth = e;
                this._designHeight = a;
                h && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
                    this._setResolutionPolicy(h))
            };
            h.prototype._setResolutionPolicy = function(e) {
                this._resolutionPolicy = e;
                e.init(this);
                e._apply(this, this._designWidth, this._designHeight)
            };
            h.prototype.getScaleX = function() {
                return this._scaleX
            };
            h.prototype.getScaleY = function() {
                return this._scaleY
            };
            h.canvas_name = "gameCanvas";
            h.canvas_div_name = "gameDiv";
            return h
        }(b.HashObject);
        b.StageDelegate = d;
        d.prototype.__class__ = "egret.StageDelegate";
        var c = function() {
            function e(a, h) {
                this.setContainerStrategy(a);
                this.setContentStrategy(h)
            }
            e.prototype.init = function(e) {
                this._containerStrategy.init(e);
                this._contentStrategy.init(e)
            };
            e.prototype._apply = function(e, a, h) {
                this._containerStrategy._apply(e, a, h);
                this._contentStrategy._apply(e, a, h)
            };
            e.prototype.setContainerStrategy = function(e) {
                e instanceof a && (this._containerStrategy = e)
            };
            e.prototype.setContentStrategy = function(e) {
                e instanceof h && (this._contentStrategy = e)
            };
            return e
        }();
        b.ResolutionPolicy = c;
        c.prototype.__class__ = "egret.ResolutionPolicy";
        var a = function() {
            function a() {}
            a.initialize =
                function() {
                    a.EQUAL_TO_FRAME = new e
                };
            a.prototype.init = function(e) {};
            a.prototype._apply = function(e, a, h) {};
            a.prototype._setupContainer = function() {
                var e = document.body,
                    a;
                e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight =
                    a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
            };
            return a
        }();
        b.ContainerStrategy = a;
        a.prototype.__class__ = "egret.ContainerStrategy";
        var e = function(e) {
            function a() {
                e.apply(this, arguments)
            }
            __extends(a, e);
            a.prototype._apply = function(e) {
                this._setupContainer()
            };
            return a
        }(a);
        b.EqualToFrame = e;
        e.prototype.__class__ = "egret.EqualToFrame";
        var h = function() {
            function e() {}
            e.prototype.init = function(e) {};
            e.prototype._apply = function(e, a, h) {};
            return e
        }();
        b.ContentStrategy =
            h;
        h.prototype.__class__ = "egret.ContentStrategy";
        c = function(e) {
            function a(h) {
                "undefined" === typeof h && (h = 0);
                e.call(this);
                this.minWidth = h
            }
            __extends(a, e);
            a.prototype._apply = function(e, a, h) {
                a = document.getElementById(d.canvas_name);
                var b = document.getElementById(d.canvas_div_name),
                    c = document.documentElement.clientWidth,
                    m = document.documentElement.clientHeight,
                    l = m / h,
                    r = c / l,
                    s = 1;
                0 != this.minWidth && (s = Math.min(1, r / this.minWidth));
                a.width = r / s;
                a.height = h;
                a.style.width = c + "px";
                a.style.height = m * s + "px";
                b.style.width =
                    c + "px";
                b.style.height = m * s + "px";
                e._scaleX = l * s;
                e._scaleY = l * s
            };
            return a
        }(h);
        b.FixedHeight = c;
        c.prototype.__class__ = "egret.FixedHeight";
        c = function(e) {
            function a(h) {
                "undefined" === typeof h && (h = 0);
                e.call(this);
                this.minHeight = h
            }
            __extends(a, e);
            a.prototype._apply = function(e, a, h) {
                h = document.getElementById(d.canvas_name);
                var b = document.getElementById(d.canvas_div_name),
                    c = document.documentElement.clientWidth,
                    m = document.documentElement.clientHeight,
                    l = c / a,
                    r = m / l,
                    s = 1;
                0 != this.minHeight && (s = Math.min(1, r / this.minHeight));
                h.width = a;
                h.height = r / s;
                h.style.width = c * s + "px";
                h.style.height = m + "px";
                b.style.width = c * s + "px";
                b.style.height = m + "px";
                e._scaleX = l * s;
                e._scaleY = l * s
            };
            return a
        }(h);
        b.FixedWidth = c;
        c.prototype.__class__ = "egret.FixedWidth";
        c = function(e) {
            function a(h, b) {
                e.call(this);
                this.width = h;
                this.height = b
            }
            __extends(a, e);
            a.prototype._apply = function(e, a, h) {
                h = document.getElementById(d.canvas_name);
                var b = document.getElementById(d.canvas_div_name),
                    c = this.width,
                    m = this.height,
                    l = c / a;
                h.width = a;
                h.height = m / l;
                h.style.width = c + "px";
                h.style.height =
                    m + "px";
                b.style.width = c + "px";
                b.style.height = m + "px";
                e._scaleX = l;
                e._scaleY = l
            };
            return a
        }(h);
        b.FixedSize = c;
        c.prototype.__class__ = "egret.FixedSize";
        c = function(e) {
            function a() {
                e.call(this)
            }
            __extends(a, e);
            a.prototype._apply = function(e, a, h) {
                a = document.getElementById(d.canvas_name);
                a.style.width = a.width + "px";
                a.style.height = a.height + "px";
                e._scaleX = 1;
                e._scaleY = 1
            };
            return a
        }(h);
        b.NoScale = c;
        c.prototype.__class__ = "egret.NoScale"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._originalData = {};
                this._drawAreaList = []
            }
            __extends(a, c);
            a.getInstance = function() {
                null == a.instance && (a.instance = new a);
                return a.instance
            };
            a.prototype.addDrawArea = function(e) {
                this._drawAreaList.push(e)
            };
            a.prototype.clearDrawArea = function() {
                this._drawAreaList = []
            };
            a.prototype.drawImage = function(e, a, c, d, f, g, k, n, p, q) {
                k = k || 0;
                n = n || 0;
                var t = a._texture_to_render;
                if (null != t && 0 != g && 0 != f && 0 != p && 0 != q)
                    if (a._worldBounds) {
                        var r = this._originalData;
                        r.sourceX =
                            c;
                        r.sourceY = d;
                        r.sourceWidth = f;
                        r.sourceHeight = g;
                        r.destX = k;
                        r.destY = n;
                        r.destWidth = p;
                        r.destHeight = q;
                        for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
                            var v = s[u];
                            if (!this.ignoreRender(a, v, r.destX, r.destY)) {
                                if (0 != this._drawAreaList.length)
                                    if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
                                        if (a._worldBounds.x + r.destX < v.x || a._worldBounds.y + r.destY < v.y || a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height) {
                                            b.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
                                            break
                                        }
                                    } else {
                                        var x = a._worldTransform.a,
                                            y = a._worldTransform.d,
                                            w;
                                        a._worldBounds.x + r.destX < v.x && (w = (v.x - a._worldBounds.x) / x - r.destX, c += w / (p / f), f -= w / (p / f), p -= w, k += w);
                                        a._worldBounds.y + r.destY < v.y && (w = (v.y - a._worldBounds.y) / y - r.destY, d += w / (q / g), g -= w / (q / g), q -= w, n += w);
                                        a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + r.destX, f -= w / (p / f), p -= w);
                                        a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height -
                                            v.y - v.height) / y + r.destY, g -= w / (q / g), q -= w)
                                    }
                                e.drawImage(t, c, d, f, g, k, n, p, q)
                            }
                        }
                    } else e.drawImage(t, c, d, f, g, k, n, p, q)
            };
            a.prototype.ignoreRender = function(e, a, b, c) {
                var d = e._worldBounds;
                b *= e._worldTransform.a;
                c *= e._worldTransform.d;
                return d.x + d.width + b <= a.x || d.x + b >= a.x + a.width || d.y + d.height + c <= a.y || d.y + c >= a.y + a.height ? !0 : !1
            };
            a.prototype.getDrawAreaList = function() {
                var e;
                0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth,
                    b.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
                return e
            };
            return a
        }(b.HashObject);
        b.RenderFilter = d;
        d.prototype.__class__ = "egret.RenderFilter"
    })(egret);
    (function(b) {
        var d = function() {
            function c() {}
            c.mapClass = function(a, e, h) {
                "undefined" === typeof h && (h = "");
                a = this.getKey(a) + "#" + h;
                this.mapClassDic[a] = e
            };
            c.getKey = function(a) {
                return "string" == typeof a ? a : b.getQualifiedClassName(a)
            };
            c.mapValue = function(a, e, h) {
                "undefined" === typeof h && (h = "");
                a = this.getKey(a) + "#" + h;
                this.mapValueDic[a] = e
            };
            c.hasMapRule = function(a, e) {
                "undefined" === typeof e && (e = "");
                var h = this.getKey(a) + "#" + e;
                return this.mapValueDic[h] || this.mapClassDic[h] ? !0 : !1
            };
            c.getInstance = function(a, e) {
                "undefined" ===
                    typeof e && (e = "");
                var h = this.getKey(a) + "#" + e;
                if (this.mapValueDic[h]) return this.mapValueDic[h];
                var b = this.mapClassDic[h];
                if (b) return b = new b, this.mapValueDic[h] = b, delete this.mapClassDic[h], b;
                throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + h + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
            };
            c.mapClassDic = {};
            c.mapValueDic = {};
            return c
        }();
        b.Injector =
            d;
        d.prototype.__class__ = "egret.Injector"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.NORMAL = "normal";
            b.ADD = "add";
            b.LAYER = "layer";
            return b
        }();
        b.BlendMode = d;
        d.prototype.__class__ = "egret.BlendMode"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._sizeDirty = this._normalDirty = !0;
                this._parent = null;
                this._cacheAsBitmap = !1;
                this._y = this._x = 0;
                this._scaleY = this._scaleX = 1;
                this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
                this._visible = !0;
                this._rotation = 0;
                this._alpha = 1;
                this._skewY = this._skewX = 0;
                this._hasHeightSet = this._hasWidthSet = !1;
                this.worldAlpha = 1;
                this._rectH = this._rectW = 0;
                this._worldTransform = new b.Matrix;
                this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
            }
            __extends(a, c);
            a.prototype._setDirty = function() {
                this._normalDirty = !0
            };
            a.prototype.getDirty = function() {
                return this._normalDirty || this._sizeDirty
            };
            a.prototype._setParentSizeDirty = function() {
                !this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty()
            };
            a.prototype._setSizeDirty = function() {
                this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setParentSizeDirty())
            };
            a.prototype._clearDirty = function() {
                this._normalDirty = !1
            };
            a.prototype._clearSizeDirty = function() {
                this._sizeDirty = !1
            };
            Object.defineProperty(a.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._parentChanged = function(e) {
                this._parent = e
            };
            Object.defineProperty(a.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._x = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(),
                        this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "scaleX", {
                get: function() {
                    return this._scaleX
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "scaleY", {
                get: function() {
                    return this._scaleY
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype,
                "anchorOffsetX", {
                    get: function() {
                        return this._anchorOffsetX
                    },
                    set: function(e) {
                        b.NumberUtils.isNumber(e) && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
                    },
                    enumerable: !0,
                    configurable: !0
                });
            Object.defineProperty(a.prototype, "anchorOffsetY", {
                get: function() {
                    return this._anchorOffsetY
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "anchorX", {
                get: function() {
                    return this._anchorX
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "anchorY", {
                get: function() {
                    return this._anchorY
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "visible", {
                get: function() {
                    return this._visible
                },
                set: function(e) {
                    this._visible = e;
                    this._setSizeDirty()
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "rotation", {
                get: function() {
                    return this._rotation
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._rotation = e, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "alpha", {
                get: function() {
                    return this._alpha
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._alpha = e, this._setDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "skewX", {
                get: function() {
                    return this._skewX
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) &&
                    (this._skewX = e, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "skewY", {
                get: function() {
                    return this._skewY
                },
                set: function(e) {
                    b.NumberUtils.isNumber(e) && (this._skewY = e, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "touchEnabled", {
                get: function() {
                    return this._touchEnabled
                },
                set: function(e) {
                    this._touchEnabled = e
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "scrollRect", {
                get: function() {
                    return this._scrollRect
                },
                set: function(e) {
                    this._scrollRect = e;
                    this._setSizeDirty()
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "measuredWidth", {
                get: function() {
                    return this._measureBounds().width
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "measuredHeight", {
                get: function() {
                    return this._measureBounds().height
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "explicitWidth", {
                get: function() {
                    return this._explicitWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype,
                "explicitHeight", {
                    get: function() {
                        return this._explicitHeight
                    },
                    enumerable: !0,
                    configurable: !0
                });
            Object.defineProperty(a.prototype, "width", {
                get: function() {
                    return this._getSize(b.Rectangle.identity).width
                },
                set: function(e) {
                    this._setWidth(e)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "height", {
                get: function() {
                    return this._getSize(b.Rectangle.identity).height
                },
                set: function(e) {
                    this._setHeight(e)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setWidth = function(e) {
                this._setSizeDirty();
                this._explicitWidth = e;
                this._hasWidthSet = b.NumberUtils.isNumber(e)
            };
            a.prototype._setHeight = function(e) {
                this._setSizeDirty();
                this._explicitHeight = e;
                this._hasHeightSet = b.NumberUtils.isNumber(e)
            };
            a.prototype._draw = function(e) {
                if (this.visible && !this.drawCacheTexture(e)) {
                    e.setAlpha(this.worldAlpha, this.blendMode);
                    e.setTransform(this._worldTransform);
                    var a = this.mask || this._scrollRect;
                    a && e.pushMask(a);
                    this._render(e);
                    a && e.popMask()
                }
                this.destroyCacheBounds()
            };
            a.prototype.drawCacheTexture = function(e) {
                if (this._cacheAsBitmap) {
                    var a =
                            this._texture_to_render,
                        c = a._offsetX,
                        d = a._offsetY,
                        f = a._textureWidth,
                        a = a._textureHeight;
                    this._updateTransform();
                    e.setAlpha(this.worldAlpha, this.blendMode);
                    e.setTransform(this._worldTransform);
                    var g = b.MainContext.instance.rendererContext.texture_scale_factor;
                    b.RenderFilter.getInstance().drawImage(e, this, 0, 0, f * g, a * g, c, d, f, a);
                    return !0
                }
                return !1
            };
            a.prototype._updateTransform = function() {
                this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
                var e = this._getOffsetPoint();
                this._worldTransform.appendTransform(this._x,
                    this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e.x, e.y);
                this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
                this.worldAlpha = this._parent.worldAlpha * this._alpha
            };
            a.prototype._render = function(e) {};
            a.prototype.getBounds = function(e) {
                var a = this._measureBounds(),
                    c = this._hasWidthSet ? this._explicitWidth : a.width,
                    d = this._hasHeightSet ? this._explicitHeight : a.height,
                    f = a.x,
                    a = a.y,
                    g, k;
                0 != this._anchorX || 0 != this._anchorY ? (g = c * this._anchorX, k = d * this._anchorY) :
                    (g = this._anchorOffsetX, k = this._anchorOffsetY);
                this._cacheBounds.initialize(f - g, a - k, c, d);
                c = this._cacheBounds;
                e || (e = new b.Rectangle);
                return e.initialize(c.x, c.y, c.width, c.height)
            };
            a.prototype.destroyCacheBounds = function() {
                this._cacheBounds.x = 0;
                this._cacheBounds.y = 0;
                this._cacheBounds.width = 0;
                this._cacheBounds.height = 0
            };
            a.prototype._getConcatenatedMatrix = function() {
                for (var e = a.identityMatrixForGetConcatenated.identity(), h = this; null != h;) {
                    if (0 != h._anchorX || 0 != h._anchorY) {
                        var c = h._getSize(b.Rectangle.identity);
                        e.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, c.width * h._anchorX, c.height * h._anchorY)
                    } else e.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, h._anchorOffsetX, h._anchorOffsetY);
                    h = h._parent
                }
                return e
            };
            a.prototype.localToGlobal = function(e, a, c) {
                "undefined" === typeof e && (e = 0);
                "undefined" === typeof a && (a = 0);
                var d = this._getConcatenatedMatrix();
                d.append(1, 0, 0, 1, e, a);
                c || (c = new b.Point);
                c.x = d.tx;
                c.y = d.ty;
                return c
            };
            a.prototype.globalToLocal = function(e,
                                                 a, c) {
                "undefined" === typeof e && (e = 0);
                "undefined" === typeof a && (a = 0);
                var d = this._getConcatenatedMatrix();
                d.invert();
                d.append(1, 0, 0, 1, e, a);
                c || (c = new b.Point);
                c.x = d.tx;
                c.y = d.ty;
                return c
            };
            a.prototype.hitTest = function(e, a, c) {
                "undefined" === typeof c && (c = !1);
                if (!this.visible || !c && !this._touchEnabled) return null;
                c = this._getSize(b.Rectangle.identity);
                return 0 <= e && e < c.width && 0 <= a && a < c.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <=
                    e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this : null : this : null
            };
            a.prototype.hitTestPoint = function(e, a, c) {
                e = this.globalToLocal(e, a);
                return c ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), c = this._hitTestPointTexture, c.drawToTexture(this), 0 != c.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
            };
            a.prototype._getMatrix = function() {
                var e = b.Matrix.identity.identity(),
                    a = this._getOffsetPoint();
                e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a.x, a.y);
                return e
            };
            a.prototype._getSize = function(e) {
                return this._hasHeightSet && this._hasWidthSet ? e.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(b.Rectangle.identity)
            };
            a.prototype._measureSize = function(e) {
                this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW, e.height = this._rectH);
                return e
            };
            a.prototype._measureBounds = function() {
                return b.Rectangle.identity.initialize(0, 0, 0, 0)
            };
            a.prototype._getOffsetPoint = function() {
                var e = this._anchorOffsetX,
                    a = this._anchorOffsetY;
                if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity), e = this._anchorX * a.width, a = this._anchorY * a.height;
                var c = b.Point.identity;
                c.x = e;
                c.y = a;
                return c
            };
            a.prototype._onAddToStage = function() {
                this._stage = b.MainContext.instance.stage;
                b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
            };
            a.prototype._onRemoveFromStage =
                function() {
                    this._stage = null;
                    b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
                };
            Object.defineProperty(a.prototype, "stage", {
                get: function() {
                    return this._stage
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.addEventListener = function(e, h, m, d, f) {
                "undefined" === typeof d && (d = !1);
                "undefined" === typeof f && (f = 0);
                c.prototype.addEventListener.call(this, e, h, m, d, f);
                ((d = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, h, m, f)
            };
            a.prototype.removeEventListener =
                function(e, h, m, d) {
                    "undefined" === typeof d && (d = !1);
                    c.prototype.removeEventListener.call(this, e, h, m, d);
                    ((d = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, h, m)
                };
            a.prototype.dispatchEvent = function(e) {
                if (!e._bubbles) return c.prototype.dispatchEvent.call(this, e);
                for (var a = [], b = this; b;) a.unshift(b), b = b.parent;
                for (var d = a.length, b = d - 1, d = d - 2; 0 <= d; d--) a.push(a[d]);
                e._reset();
                this._dispatchPropagationEvent(e, a, b);
                return !e.isDefaultPrevented()
            };
            a.prototype._dispatchPropagationEvent = function(e, a, b) {
                for (var c = a.length, d = 0; d < c; d++) {
                    var g = a[d];
                    e._setCurrentTarget(g);
                    e._target = this;
                    e._eventPhase = d < b ? 1 : d == b ? 2 : 3;
                    g._notifyListener(e);
                    if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
                }
            };
            a.prototype.willTrigger = function(e) {
                for (var a = this; a;) {
                    if (a.hasEventListener(e)) return !0;
                    a = a._parent
                }
                return !1
            };
            Object.defineProperty(a.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(e) {
                    (this._cacheAsBitmap = e) ? (this.renderTexture ||
                        (this.renderTexture = new b.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
                },
                enumerable: !0,
                configurable: !0
            });
            a.getTransformBounds = function(e, a) {
                var b, c, d = e.width,
                    g = e.height,
                    k = d * a.a,
                    d = d * a.b,
                    n = g * a.c,
                    g = g * a.d,
                    p = a.tx,
                    q = a.ty,
                    t = p,
                    r = p,
                    s = q,
                    u = q;
                (b = k + p) < t ? t = b : b > r && (r = b);
                (b = k + n + p) < t ? t = b : b > r && (r = b);
                (b = n + p) < t ? t = b : b > r && (r = b);
                (c = d + q) < s ? s = c : c > u && (u = c);
                (c = d + g + q) < s ? s = c : c > u && (u = c);
                (c = g + q) < s ? s = c : c > u && (u = c);
                return e.initialize(t, s, r - t, u - s)
            };
            a.identityMatrixForGetConcatenated =
                new b.Matrix;
            a._enterFrameCallBackList = [];
            a._renderCallBackList = [];
            return a
        }(b.EventDispatcher);
        b.DisplayObject = d;
        d.prototype.__class__ = "egret.DisplayObject"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._touchChildren = !0;
                this._children = []
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "touchChildren", {
                get: function() {
                    return this._touchChildren
                },
                set: function(e) {
                    this._touchChildren = e
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "numChildren", {
                get: function() {
                    return this._children.length
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setChildIndex = function(e, a) {
                this.doSetChildIndex(e, a)
            };
            a.prototype.doSetChildIndex = function(e,
                                                   a) {
                var c = this._children.indexOf(e);
                0 > c && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
                this._children.splice(c, 1);
                0 > a || this._children.length <= a ? this._children.push(e) : this._children.splice(a, 0, e)
            };
            a.prototype.addChild = function(e) {
                var a = this.numChildren;
                e._parent == this && a--;
                return this._doAddChild(e, a)
            };
            a.prototype.addChildAt = function(e, a) {
                return this._doAddChild(e, a)
            };
            a.prototype._doAddChild = function(e, h, c) {
                "undefined" === typeof c && (c = !0);
                if (e == this) return e;
                if (0 > h || h > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
                    e;
                var d = e.parent;
                if (d == this) return this.doSetChildIndex(e, h), e;
                d && d.removeChild(e);
                this._children.splice(h, 0, e);
                e._parentChanged(this);
                c && e.dispatchEventWith(b.Event.ADDED, !0);
                if (this._stage)
                    for (e._onAddToStage(), h = a.__EVENT__ADD_TO_STAGE_LIST; 0 < h.length;) h.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
                e._setDirty();
                this._setSizeDirty();
                return e
            };
            a.prototype.removeChild = function(e) {
                e = this._children.indexOf(e);
                if (0 <= e) return this._doRemoveChild(e);
                b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
                return null
            };
            a.prototype.removeChildAt = function(e) {
                if (0 <= e && e < this._children.length) return this._doRemoveChild(e);
                b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
                return null
            };
            a.prototype._doRemoveChild = function(e, h) {
                "undefined" === typeof h && (h = !0);
                var c = this._children,
                    d = c[e];
                h && d.dispatchEventWith(b.Event.REMOVED, !0);
                if (this._stage) {
                    d._onRemoveFromStage();
                    for (var f = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) f.shift().dispatchEventWith(b.Event.REMOVED_FROM_STAGE)
                }
                d._parentChanged(null);
                c.splice(e, 1);
                this._setSizeDirty();
                return d
            };
            a.prototype.getChildAt = function(e) {
                if (0 <= e && e < this._children.length) return this._children[e];
                b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
                return null
            };
            a.prototype.contains = function(e) {
                for (; e;) {
                    if (e == this) return !0;
                    e = e._parent
                }
                return !1
            };
            a.prototype.swapChildrenAt = function(e, a) {
                0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
            };
            a.prototype.swapChildren = function(a, h) {
                var c = this._children.indexOf(a),
                    d = this._children.indexOf(h); - 1 == c || -1 == d ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(c, d)
            };
            a.prototype._swapChildrenAt = function(a, b) {
                if (a != b) {
                    var c = this._children,
                        d = c[a];
                    c[a] = c[b];
                    c[b] = d
                }
            };
            a.prototype.getChildIndex = function(a) {
                return this._children.indexOf(a)
            };
            a.prototype.removeChildren = function() {
                for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
            };
            a.prototype._updateTransform =
                function() {
                    if (this.visible) {
                        c.prototype._updateTransform.call(this);
                        for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._updateTransform()
                    }
                };
            a.prototype._render = function(a) {
                for (var b = 0, c = this._children.length; b < c; b++) this._children[b]._draw(a)
            };
            a.prototype._measureBounds = function() {
                for (var a = 0, h = 0, c = 0, d = 0, f = this._children.length, g = 0; g < f; g++) {
                    var k = this._children[g],
                        n;
                    if (k.visible && (n = b.DisplayObject.getTransformBounds(k._getSize(b.Rectangle.identity), k._getMatrix()))) {
                        var k = n.x,
                            p = n.y,
                            q =
                                n.width + n.x,
                            t = n.height + n.y;
                        if (k < a || 0 == g) a = k;
                        if (q > h || 0 == g) h = q;
                        if (p < c || 0 == g) c = p;
                        if (t > d || 0 == g) d = t
                    }
                }
                return b.Rectangle.identity.initialize(a, c, h - a, d - c)
            };
            a.prototype.hitTest = function(a, h, d) {
                "undefined" === typeof d && (d = !1);
                var l;
                if (!this.visible) return null;
                if (this._scrollRect) {
                    if (0 > a || 0 > h || a > this._scrollRect.width || h > this._scrollRect.height) return null
                } else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > h || h > this.mask.y + this.mask.height)) return null;
                for (var f = this._children, g =
                    this._touchChildren, k = f.length - 1; 0 <= k; k--) {
                    var n = f[k],
                        p = n,
                        q = p._getOffsetPoint(),
                        t = p._x,
                        r = p._y;
                    this._scrollRect && (t -= this._scrollRect.x, r -= this._scrollRect.y);
                    p = b.Matrix.identity.identity().prependTransform(t, r, p._scaleX, p._scaleY, p._rotation, 0, 0, q.x, q.y);
                    p.invert();
                    p = b.Matrix.transformCoords(p, a, h);
                    if (n = n.hitTest(p.x, p.y, !0)) {
                        if (n._touchEnabled && g) return n;
                        if (this._touchEnabled) return this;
                        null == l && (l = n)
                    }
                }
                return l ? l : c.prototype.hitTest.call(this, a, h, d)
            };
            a.prototype._onAddToStage = function() {
                c.prototype._onAddToStage.call(this);
                for (var a = this.numChildren, b = 0; b < a; b++) this._children[b]._onAddToStage()
            };
            a.prototype._onRemoveFromStage = function() {
                c.prototype._onRemoveFromStage.call(this);
                for (var a = this.numChildren, b = 0; b < a; b++) this._children[b]._onRemoveFromStage()
            };
            a.prototype.getChildByName = function(a) {
                for (var b = this._children, c = this.numChildren, d, f = 0; f < c; f++)
                    if (d = b[f], d.name == a) return d;
                return null
            };
            a.__EVENT__ADD_TO_STAGE_LIST = [];
            a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
            return a
        }(b.DisplayObject);
        b.DisplayObjectContainer = d;
        d.prototype.__class__ =
            "egret.DisplayObjectContainer"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a, b) {
                "undefined" === typeof a && (a = 480);
                "undefined" === typeof b && (b = 800);
                c.call(this);
                this.touchEnabled = !0;
                this._stage = this;
                this._stageWidth = a;
                this._stageHeight = b
            }
            __extends(a, c);
            a.prototype.invalidate = function() {
                a._invalidateRenderFlag = !0
            };
            Object.defineProperty(a.prototype, "scaleMode", {
                get: function() {
                    return this._scaleMode
                },
                set: function(a) {
                    if (this._scaleMode != a) {
                        this._scaleMode = a;
                        var h = {};
                        h[b.StageScaleMode.NO_SCALE] = new b.NoScale;
                        h[b.StageScaleMode.SHOW_ALL] =
                            new b.FixedWidth;
                        a = h[a];
                        if (!a) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
                        h = new b.EqualToFrame;
                        a = new b.ResolutionPolicy(h, a);
                        b.StageDelegate.getInstance()._setResolutionPolicy(a);
                        a = document.getElementById(b.StageDelegate.canvas_name);
                        this._stageWidth = a.width;
                        this._stageHeight = a.height;
                        this.dispatchEventWith(b.Event.RESIZE)
                    }
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "stageWidth", {
                get: function() {
                    return this._stageWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "stageHeight", {
                get: function() {
                    return this._stageHeight
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.hitTest = function(a, h) {
                if (!this.touchEnabled) return null;
                var c;
                if (!this.visible) return this;
                for (var d = this._children, f = d.length - 1; 0 <= f; f--) {
                    var g = c = d[f],
                        k = g._getOffsetPoint(),
                        g = b.Matrix.identity.identity().prependTransform(g.x, g.y, g.scaleX, g.scaleY, g.rotation, 0, 0, k.x, k.y);
                    g.invert();
                    g = b.Matrix.transformCoords(g, a, h);
                    if ((c = c.hitTest(g.x, g.y, !0)) && c.touchEnabled) return c
                }
                return this
            };
            a.prototype.getBounds = function(a) {
                a || (a = new b.Rectangle);
                return a.initialize(0, 0, this._stageWidth, this._stageHeight)
            };
            a.prototype._updateTransform = function() {
                for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._updateTransform()
            };
            a._invalidateRenderFlag = !1;
            return a
        }(b.DisplayObjectContainer);
        b.Stage = d;
        d.prototype.__class__ = "egret.Stage"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.NO_SCALE = "noScale";
            b.SHOW_ALL = "showAll";
            return b
        }();
        b.StageScaleMode = d;
        d.prototype.__class__ = "egret.StageScaleMode"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.REPEAT = "repeat";
            b.SCALE = "scale";
            return b
        }();
        b.BitmapFillMode = d;
        d.prototype.__class__ = "egret.BitmapFillMode"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                c.call(this);
                this.debug = !1;
                this.debugColor = 16711680;
                this.fillMode = "scale";
                a && (this._texture = a, this._setSizeDirty())
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "texture", {
                get: function() {
                    return this._texture
                },
                set: function(a) {
                    a != this._texture && (this._setSizeDirty(), this._texture = a)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._render = function(e) {
                var b = this._texture;
                b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : b._textureWidth,
                    this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
            };
            a._drawBitmap = function(e, h, c, d) {
                var f = d._texture_to_render;
                if (f) {
                    var g = f._textureWidth,
                        k = f._textureHeight;
                    if ("scale" == d.fillMode) {
                        var n = d.scale9Grid || f.scale9Grid;
                        if (n && g - n.width < h && k - n.height < c) a.drawScale9GridImage(e, d, n, h, c);
                        else {
                            var n = f._offsetX,
                                p = f._offsetY,
                                q = f._bitmapWidth || g,
                                t = f._bitmapHeight || k;
                            h /= g;
                            n = Math.round(n * h);
                            h = Math.round(q * h);
                            c /= k;
                            p = Math.round(p * c);
                            c = Math.round(t * c);
                            b.RenderFilter.getInstance().drawImage(e,
                                d, f._bitmapX, f._bitmapY, q, t, n, p, h, c)
                        }
                    } else a.drawRepeatImage(e, d, h, c)
                }
            };
            a.drawRepeatImage = function(a, h, c, d) {
                var f = h._texture_to_render;
                if (f)
                    for (var g = f._textureWidth, k = f._textureHeight, n = f._bitmapX, p = f._bitmapY, q = f._bitmapWidth || g, t = f._bitmapHeight || k, r = f._offsetX, f = f._offsetY, s = b.RenderFilter.getInstance(); r < c; r += g)
                        for (var u = f; u < d; u += k) {
                            var v = Math.min(q, c - r),
                                x = Math.min(t, d - u);
                            s.drawImage(a, h, n, p, q, t, r, u, v, x)
                        }
            };
            a.drawScale9GridImage = function(a, h, c, d, f) {
                var g = h._texture_to_render;
                if (g && c) {
                    var k = b.RenderFilter.getInstance(),
                        n = g._textureWidth,
                        p = g._textureHeight,
                        q = g._bitmapX,
                        t = g._bitmapY,
                        r = g._bitmapWidth || n,
                        s = g._bitmapHeight || p,
                        u = g._offsetX,
                        g = g._offsetY;
                    c = b.Rectangle.identity.initialize(c.x - Math.round(u), c.y - Math.round(u), c.width, c.height);
                    u = Math.round(u);
                    g = Math.round(g);
                    d -= n - r;
                    f -= p - s;
                    c.y == c.bottom && (c.bottom < s ? c.bottom++ : c.y--);
                    c.x == c.right && (c.right < r ? c.right++ : c.x--);
                    var n = q + c.x,
                        p = q + c.right,
                        v = r - c.right,
                        x = t + c.y,
                        y = t + c.bottom,
                        w = s - c.bottom,
                        z = u + c.x,
                        A = g + c.y,
                        s = f - (s - c.bottom),
                        r = d - (r - c.right);
                    k.drawImage(a, h, q, t, c.x, c.y, u, g,
                        c.x, c.y);
                    k.drawImage(a, h, n, t, c.width, c.y, z, g, r - c.x, c.y);
                    k.drawImage(a, h, p, t, v, c.y, u + r, g, d - r, c.y);
                    k.drawImage(a, h, q, x, c.x, c.height, u, A, c.x, s - c.y);
                    k.drawImage(a, h, n, x, c.width, c.height, z, A, r - c.x, s - c.y);
                    k.drawImage(a, h, p, x, v, c.height, u + r, A, d - r, s - c.y);
                    k.drawImage(a, h, q, y, c.x, w, u, g + s, c.x, f - s);
                    k.drawImage(a, h, n, y, c.width, w, z, g + s, r - c.x, f - s);
                    k.drawImage(a, h, p, y, v, w, u + r, g + s, d - r, f - s)
                }
            };
            a.prototype._measureBounds = function() {
                var a = this._texture;
                return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth,
                    a._textureHeight) : c.prototype._measureBounds.call(this)
            };
            a.debug = !1;
            return a
        }(b.DisplayObject);
        b.Bitmap = d;
        d.prototype.__class__ = "egret.Bitmap"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._text = "";
                this._textChanged = !1;
                this._bitmapPool = []
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(a) {
                    this._textChanged = !0;
                    this._text = a
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._updateTransform = function() {
                this.visible && (this._textChanged && this._renderText(), c.prototype._updateTransform.call(this))
            };
            a.prototype._renderText = function(a) {
                var c = a = 0;
                this._textChanged && this.removeChildren();
                for (var d = 0, l = this.text.length; d < l; d++) {
                    var f = this.text.charAt(d),
                        g = this.spriteSheet.getTexture(f);
                    if (null == g) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + f);
                    else {
                        var f = g._offsetX,
                            k = g._offsetY,
                            n = g._textureWidth;
                        if (this._textChanged) {
                            var p = this._bitmapPool[d];
                            p || (p = new b.Bitmap, this._bitmapPool.push(p));
                            p.texture = g;
                            this.addChild(p);
                            p.x = a
                        }
                        a += n + f;
                        k + g._textureHeight > c && (c = k + g._textureHeight)
                    }
                }
                this._textChanged = !1;
                return b.Rectangle.identity.initialize(0, 0, a, c)
            };
            a.prototype._measureBounds =
                function() {
                    return this._renderText(!0)
                };
            return a
        }(b.DisplayObjectContainer);
        b.BitmapText = d;
        d.prototype.__class__ = "egret.BitmapText"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {
                this.commandQueue = [];
            }
            b.prototype.beginFill = function(a, e) {};
            b.prototype._setStyle = function(a) {};
            b.prototype.drawRect = function(a, e, b, c) {};
            b.prototype.drawCircle = function(a, e, b) {};
            b.prototype.lineStyle = function(a, e, b, c, d, f, g, k) {};
            b.prototype.lineTo = function(a, e) {};
            b.prototype.curveTo = function(a, e, b, c) {};
            b.prototype.moveTo = function(a, e) {};
            b.prototype.clear = function() {};
            b.prototype.endFill = function() {};
            b.prototype._draw = function(a) {};
            return b;
        }();
        b.Graphics = d;
        d.prototype.__class__ = "egret.Graphics";

        (function(){
            var mb = function(b, a, e) {
                this.method = b;
                this.thisObject = a;
                this.args = e
            }
            mb.prototype.__class__ = "Command";
            return mb;
        })();

    })(egret);

    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c;
    };

    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this)
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "graphics", {
                get: function() {
                    this._graphics || (this._graphics = new b.Graphics);
                    return this._graphics
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._render = function(a) {
                this._graphics && this._graphics._draw(a)
            };
            return a
        }(b.DisplayObject);
        b.Shape = d;
        d.prototype.__class__ = "egret.Shape"
    })(egret);

    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };

    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this)
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "graphics", {
                get: function() {
                    this._graphics || (this._graphics = new b.Graphics);
                    return this._graphics
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._render = function(a) {
                this._graphics && this._graphics._draw(a);
                c.prototype._render.call(this, a)
            };
            return a
        }(b.DisplayObjectContainer);
        b.Sprite = d;
        d.prototype.__class__ = "egret.Sprite"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._fontFamily = "Arial";
                this._size = 30;
                this._textColorString = "#FFFFFF";
                this._textColor = 16777215;
                this._strokeColorString = "#000000";
                this._stroke = this._strokeColor = 0;
                this._textAlign = "left";
                this._verticalAlign = "top";
                this._numLines = this._lineSpacing = 0;
                this.measuredWidths = []
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(a) {
                    this._text != a && (this._setTextDirty(), this._text = a)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setTextDirty = function() {
                this._setSizeDirty()
            };
            Object.defineProperty(a.prototype, "fontFamily", {
                get: function() {
                    return this._fontFamily
                },
                set: function(a) {
                    this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "size", {
                get: function() {
                    return this._size
                },
                set: function(a) {
                    this._size != a && (this._setTextDirty(), this._size = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "italic", {
                get: function() {
                    return this._italic
                },
                set: function(a) {
                    this._italic != a && (this._setTextDirty(), this._italic = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "bold", {
                get: function() {
                    return this._bold
                },
                set: function(a) {
                    this._bold != a && (this._setTextDirty(), this._bold = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "textColor", {
                get: function() {
                    return this._textColor
                },
                set: function(a) {
                    this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = b.toColorString(a))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "strokeColor", {
                get: function() {
                    return this._strokeColor
                },
                set: function(a) {
                    this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = b.toColorString(a))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "stroke", {
                get: function() {
                    return this._stroke
                },
                set: function(a) {
                    this._stroke != a && (this._setTextDirty(), this._stroke = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "textAlign", {
                get: function() {
                    return this._textAlign
                },
                set: function(a) {
                    this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "verticalAlign", {
                get: function() {
                    return this._verticalAlign
                },
                set: function(a) {
                    this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "lineSpacing", {
                get: function() {
                    return this._lineSpacing
                },
                set: function(a) {
                    this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "numLines", {
                get: function() {
                    return this._numLines
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._render = function(a) {
                this.drawText(a, !1);
                this._clearDirty()
            };
            a.prototype._measureBounds = function() {
                return this.drawText(b.MainContext.instance.rendererContext, !0)
            };
            a.prototype.drawText = function(a, c) {
                var d = this.getTextLines(a);
                if (!d) return b.Rectangle.identity.initialize(0, 0, 0, 0);
                var l = d.length,
                    f = 0.5 * this._size,
                    g = this._size + this._lineSpacing,
                    k = l * g - this._lineSpacing;
                this._textHeight = k;
                var n = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY;
                if (this._hasHeightSet && k < n) {
                    var p = 0;
                    this._verticalAlign == b.VerticalAlign.MIDDLE ? p = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (p = 1);
                    f += p * (n - k)
                }
                var p = f = Math.round(f),
                    q = 0;
                this._textAlign == b.HorizontalAlign.CENTER ? q = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (q = 1);
                var t = this.measuredWidths,
                    r;
                r = this._hasWidthSet ? this._explicitWidth : this._textWidth;
                for (var s = Number.POSITIVE_INFINITY, u = 0; u < l; u++) {
                    var v = d[u],
                        x = Math.round((r - t[u]) * q);
                    x < s && (s = x);
                    !c && f < n && a.drawText(this, v, x, f, r);
                    f += g
                }
                return b.Rectangle.identity.initialize(s, p, r, k)
            };
            a.prototype.getTextLines = function(a) {
                var b = this.text ? this.text.toString() : "";
                if (!b) return null;
                var c = this.measuredWidths;
                c.length = 0;
                a.setupFont(this);
                var b = b.split(/(?:\r\n|\r|\n)/),
                    d = b.length,
                    f = 0;
                if (this._hasWidthSet)
                    for (var g = this._explicitWidth, k = 0; k < d; k++) {
                        var n = b[k],
                            p = a.measureText(n);
                        if (p > g) {
                            for (var q = "", t = 0, r = n.length, s = 0; s < r; s++) {
                                var u = n.charAt(s),
                                    p = a.measureText(u);
                                t + p > g && (0 == t ? (b.splice(k, 0, u), c[k] = p, f < p && (f = p), p = 0, u = "") : (b.splice(k, 0, q), c[k] = t, f < t && (f = t), q = "", t = 0), k++, d++);
                                t += p;
                                q += u
                            }
                            b[k] = q;
                            c[k] = t
                        } else c[k] = p, f < p && (f = p)
                    } else
                    for (k = 0; k < d; k++) n = b[k], p = a.measureText(n), c[k] = p, f < p && (f = p);
                this._textWidth = f;
                return b
            };
            return a
        }(b.DisplayObject);
        b.TextField = d;
        d.prototype.__class__ = "egret.TextField"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.DYNAMIC = "dynamic";
            b.INPUT = "input";
            return b
        }();
        b.TextFieldType = d;
        d.prototype.__class__ = "egret.TextFieldType"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                c.call(this);
                var b = a.bitmapData;
                this.bitmapData = b;
                this._textureMap = {};
                this._sourceWidth = b.width;
                this._sourceHeight = b.height;
                this._bitmapX = a._bitmapX - a._offsetX;
                this._bitmapY = a._bitmapY - a._offsetY
            }
            __extends(a, c);
            a.prototype.getTexture = function(a) {
                return this._textureMap[a]
            };
            a.prototype.createTexture = function(a, c, d, l, f, g, k, n, p) {
                "undefined" === typeof g && (g = 0);
                "undefined" === typeof k && (k = 0);
                "undefined" === typeof n && (n = g + l);
                "undefined" === typeof p && (p = k + f);
                var q =
                    new b.Texture;
                q._bitmapData = this.bitmapData;
                q._bitmapX = this._bitmapX + c;
                q._bitmapY = this._bitmapY + d;
                q._bitmapWidth = l;
                q._bitmapHeight = f;
                q._offsetX = g;
                q._offsetY = k;
                q._textureWidth = n;
                q._textureHeight = p;
                q._sourceWidth = this._sourceWidth;
                q._sourceHeight = this._sourceHeight;
                return this._textureMap[a] = q
            };
            return a
        }(b.HashObject);
        b.SpriteSheet = d;
        d.prototype.__class__ = "egret.SpriteSheet"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.apply(this, arguments);
                this._placeholderText = "";
                this._edFontSize = 14;
                this._textColor = 16711680;
                this._placeholderFontSize = 14;
                this._placeholderColor = 16776960;
                this._preY = this._preX = 0
            }
            __extends(a, c);
            a.prototype._onAddToStage = function() {
                c.prototype._onAddToStage.call(this);
                var a = this.localToGlobal(),
                    h = new b.StageText;
                h._open(a.x, a.y, this._explicitWidth, this._explicitHeight);
                this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
                this.stageText =
                    h
            };
            a.prototype.setText = function(a) {
                this.stageText._setText(a)
            };
            a.prototype.getText = function() {
                return this.stageText._getText()
            };
            a.prototype.setTextType = function(a) {
                this.stageText._setTextType(a)
            };
            a.prototype.getTextType = function() {
                return this.stageText._getTextType()
            };
            a.prototype.onMouseDownHandler = function(a) {};
            a.prototype._onRemoveFromStage = function() {
                this.stageText._remove()
            };
            a.prototype._measureBounds = function() {
                return b.Rectangle.identity
            };
            a.prototype.hitTest = function(a, b, c) {
                return null
            };
            return a
        }(b.DisplayObject);
        b.TextInput = d;
        d.prototype.__class__ = "egret.TextInput";
        d = function() {
            function b() {}
            b.prototype.editBoxEditingDidBegin = function(a) {};
            b.prototype.editBoxEditingDidEnd = function(a) {};
            b.prototype.editBoxTextChanged = function(a, e) {};
            b.prototype.editBoxReturn = function(a) {};
            return b
        }();
        b.TextInputDegelete = d;
        d.prototype.__class__ = "egret.TextInputDegelete"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a(a, h) {
                b.call(this, a);
                this.charList = this.parseConfig(h)
            }
            __extends(a, b);
            a.prototype.getTexture = function(a) {
                var b = this._textureMap[a];
                if (!b) {
                    b = this.charList[a];
                    if (!b) return null;
                    b = this.createTexture(a, b.x, b.y, b.width, b.height, b.offsetX, b.offsetY);
                    this._textureMap[a] = b
                }
                return b
            };
            a.prototype.parseConfig = function(a) {
                a = a.split("\r\n").join("\n");
                a = a.split("\n");
                for (var b = this.getConfigByKey(a[3], "count"), c = {}, d = 4; d < 4 + b; d++) {
                    var f = a[d],
                        g = String.fromCharCode(this.getConfigByKey(f,
                            "id")),
                        k = {};
                    c[g] = k;
                    k.x = this.getConfigByKey(f, "x");
                    k.y = this.getConfigByKey(f, "y");
                    k.width = this.getConfigByKey(f, "width");
                    k.height = this.getConfigByKey(f, "height");
                    k.offsetX = this.getConfigByKey(f, "xoffset");
                    k.offsetY = this.getConfigByKey(f, "yoffset")
                }
                return c
            };
            a.prototype.getConfigByKey = function(a, b) {
                for (var c = a.split(" "), d = 0, f = c.length; d < f; d++) {
                    var g = c[d];
                    if (b == g.substring(0, b.length)) return c = g.substring(b.length + 1), parseInt(c)
                }
                return 0
            };
            return a
        }(b.SpriteSheet);
        b.BitmapTextSpriteSheet = d;
        d.prototype.__class__ =
            "egret.BitmapTextSpriteSheet"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(a) {
            function e(e, d) {
                a.call(this);
                this.frameRate = 60;
                e instanceof c ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new c(e, d);
                this.delegate.setMovieClip(this)
            }
            __extends(e, a);
            e.prototype.gotoAndPlay = function(a) {
                this.delegate.gotoAndPlay(a)
            };
            e.prototype.gotoAndStop = function(a) {
                this.delegate.gotoAndStop(a)
            };
            e.prototype.stop =
                function() {
                    this.delegate.stop()
                };
            e.prototype.dispose = function() {
                this.delegate.dispose()
            };
            e.prototype.release = function() {
                b.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
                this.dispose()
            };
            e.prototype.getCurrentFrameIndex = function() {
                b.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
                return this.delegate._currentFrameIndex
            };
            e.prototype.getTotalFrame = function() {
                b.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
                return this.delegate._totalFrame
            };
            e.prototype.setInterval = function(a) {
                b.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
                this.frameRate = 60 / a
            };
            e.prototype.getIsPlaying = function() {
                b.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
                return this.delegate.isPlaying
            };
            return e
        }(b.DisplayObjectContainer);
        b.MovieClip = d;
        d.prototype.__class__ = "egret.MovieClip";
        var c = function() {
            function a(a, c) {
                this.data = a;
                this._currentFrameIndex = this._passTime =
                    this._totalFrame = 0;
                this._isPlaying = !1;
                this._frameData = a;
                this._spriteSheet = new b.SpriteSheet(c)
            }
            a.prototype.setMovieClip = function(a) {
                this.movieClip = a;
                this.bitmap = new b.Bitmap;
                this.movieClip.addChild(this.bitmap)
            };
            a.prototype.gotoAndPlay = function(a) {
                this.checkHasFrame(a);
                this._isPlaying = !0;
                this._currentFrameIndex = 0;
                this._currentFrameName = a;
                this._totalFrame = this._frameData.frames[a].totalFrame;
                this.playNextFrame();
                this._passTime = 0;
                b.Ticker.getInstance().register(this.update, this)
            };
            a.prototype.gotoAndStop =
                function(a) {
                    this.checkHasFrame(a);
                    this.stop();
                    this._currentFrameIndex = this._passTime = 0;
                    this._currentFrameName = a;
                    this._totalFrame = this._frameData.frames[a].totalFrame;
                    this.playNextFrame()
                };
            a.prototype.stop = function() {
                this._isPlaying = !1;
                b.Ticker.getInstance().unregister(this.update, this)
            };
            a.prototype.dispose = function() {};
            a.prototype.checkHasFrame = function(a) {
                void 0 == this._frameData.frames[a] && b.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
            };
            a.prototype.update = function(a) {
                for (var b =
                    1E3 / this.movieClip.frameRate, b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1), b--;
                this._passTime += a
            };
            a.prototype.playNextFrame = function(a) {
                "undefined" === typeof a && (a = !0);
                var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
                if (a) {
                    a = this.getTexture(b.res);
                    var c = this.bitmap;
                    c.x = b.x;
                    c.y = b.y;
                    c.texture = a
                }
                null != b.action && this.movieClip.dispatchEventWith(b.action);
                this._currentFrameIndex++;
                this._currentFrameIndex == this._totalFrame &&
                (this._currentFrameIndex = 0)
            };
            a.prototype.getTexture = function(a) {
                var b = this._frameData.res[a],
                    c = this._spriteSheet.getTexture(a);
                c || (c = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
                return c
            };
            return a
        }();
        b.DefaultMovieClipDelegate = c;
        c.prototype.__class__ = "egret.DefaultMovieClipDelegate"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this)
            }
            __extends(a, c);
            a.prototype._getText = function() {
                return this.inputElement.value
            };
            a.prototype._setText = function(a) {
                this.inputElement.value = a
            };
            a.prototype._setTextType = function(a) {
                this.inputElement.type = a
            };
            a.prototype._getTextType = function() {
                return this.inputElement.type
            };
            a.prototype._open = function(a, c, d, l) {
                "undefined" === typeof d && (d = 160);
                "undefined" === typeof l && (l = 21);
                var f = b.StageDelegate.getInstance().getScaleX(),
                    g = b.StageDelegate.getInstance().getScaleY(),
                    k = document.createElement("input");
                k.type = "text";
                k.style.fontSize = "20px";
                k.style.color = "#FFFFFF";
                k.style.borderStyle = "none";
                k.style.background = "none";
                k.style.width = d * f + "px";
                k.style.height = l * g + "px";
                k.style.outline = "medium";
                var n = b.Browser.getInstance().$new("div");
                n.style.position = "absolute";
                n.position.x = a * f;
                n.style.width = d * f + "px";
                n.style.height = l * g + "px";
                n.position.y = c * g;
                n.transforms();
                n.appendChild(k);
                a = b.Browser.getInstance().$("#StageDelegateDiv");
                a || (d = document.getElementById(b.StageDelegate.canvas_div_name),
                    l = d.clientHeight, d = d.clientWidth, a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", a.style.position = "absolute", a.style.width = d + "px", a.style.maxHeight = l + "px", a.style.margin = "0px", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.position.y = -l, a.transforms());
                a.appendChild(n);
                this.div = n;
                this.inputElement = k
            };
            a.prototype._remove = function() {
                var a = this.div;
                a && a.parentNode && a.parentNode.removeChild(a)
            };
            return a
        }(b.HashObject);
        b.StageText = d;
        d.prototype.__class__ = "egret.StageText"
    })(egret ||
            (egret = {}));
    (function(b) {
        var d = function() {
            function b() {}
            b.GET = "GET";
            b.POST = "POST";
            return b
        }();
        b.URLRequestMethod = d;
        d.prototype.__class__ = "egret.URLRequestMethod"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.BINARY = "binary";
            b.TEXT = "text";
            b.VARIABLES = "variables";
            b.TEXTURE = "texture";
            b.SOUND = "sound";
            return b
        }();
        b.URLLoaderDataFormat = d;
        d.prototype.__class__ = "egret.URLLoaderDataFormat"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a(a) {
                "undefined" === typeof a && (a = null);
                b.call(this);
                null !== a && this.decode(a)
            }
            __extends(a, b);
            a.prototype.decode = function(a) {
                this.variables || (this.variables = {});
                a = a.split("+").join(" ");
                for (var b, c = /[?&]?([^=]+)=([^&]*)/g; b = c.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
            };
            a.prototype.toString = function() {
                if (!this.variables) return "";
                var a = this.variables,
                    b = "",
                    c = !0,
                    d;
                for (d in a) c ? c = !1 : b += "&", b += d + "=" + a[d];
                return b
            };
            return a
        }(b.HashObject);
        b.URLVariables = d;
        d.prototype.__class__ = "egret.URLVariables"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                "undefined" === typeof a && (a = null);
                c.call(this);
                this.method = b.URLRequestMethod.GET;
                this.url = a
            }
            __extends(a, c);
            return a
        }(b.HashObject);
        b.URLRequest = d;
        d.prototype.__class__ = "egret.URLRequest"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                "undefined" === typeof a && (a = null);
                c.call(this);
                this.dataFormat = b.URLLoaderDataFormat.TEXT;
                a && this.load(a)
            }
            __extends(a, c);
            a.prototype.load = function(a) {
                this._request = a;
                this.data = null;
                b.MainContext.instance.netContext.proceed(this)
            };
            return a
        }(b.EventDispatcher);
        b.URLLoader = d;
        d.prototype.__class__ = "egret.URLLoader"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
            }
            __extends(a, c);
            Object.defineProperty(a.prototype, "textureWidth", {
                get: function() {
                    return this._textureWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "textureHeight", {
                get: function() {
                    return this._textureHeight
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "bitmapData", {
                get: function() {
                    return this._bitmapData
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setBitmapData = function(a) {
                var c = b.MainContext.instance.rendererContext.texture_scale_factor;
                this._bitmapData = a;
                this._sourceWidth = a.width;
                this._sourceHeight = a.height;
                this._textureWidth = this._sourceWidth * c;
                this._textureHeight = this._sourceHeight * c;
                this._bitmapWidth = this._textureWidth;
                this._bitmapHeight = this._textureHeight;
                this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
            };
            a.prototype.getPixel32 = function(a, b) {
                return this._bitmapData.getContext("2d").getImageData(a,
                    b, 1, 1).data
            };
            return a
        }(b.HashObject);
        b.Texture = d;
        d.prototype.__class__ = "egret.Texture"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._bitmapData = document.createElement("canvas");
                this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
            }
            __extends(a, c);
            a.prototype.drawToTexture = function(a) {
                var c = this._bitmapData,
                    d = a.getBounds(b.Rectangle.identity);
                c.width = d.width;
                c.height = d.height;
                a._worldTransform.identity();
                a.worldAlpha = 1;
                if (a instanceof b.DisplayObjectContainer) {
                    this._offsetX = d.x;
                    this._offsetY = d.y;
                    a._worldTransform.append(1, 0, 0, 1, -d.x, -d.y);
                    for (var c =
                        a._children, d = 0, l = c.length; d < l; d++) c[d]._updateTransform()
                }
                c = b.RenderFilter.getInstance();
                d = c._drawAreaList.concat();
                c._drawAreaList.length = 0;
                this.renderContext.clearScreen();
                this.webGLTexture = null;
                (l = a.mask || a._scrollRect) && this.renderContext.pushMask(l);
                a._render(this.renderContext);
                l && this.renderContext.popMask();
                c._drawAreaList = d;
                this._textureWidth = this._bitmapData.width;
                this._textureHeight = this._bitmapData.height;
                this._sourceWidth = this._textureWidth;
                this._sourceHeight = this._textureHeight
            };
            return a
        }(b.Texture);
        b.RenderTexture = d;
        d.prototype.__class__ = "egret.RenderTexture"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this.renderCost = 0;
                this.texture_scale_factor = 1
            }
            __extends(a, c);
            a.prototype.clearScreen = function() {};
            a.prototype.clearRect = function(a, b, c, d) {};
            a.prototype.drawImage = function(a, c, d, l, f, g, k, n, p) {
                b.Profiler.getInstance().onDrawImage()
            };
            a.prototype.setTransform = function(a) {};
            a.prototype.setAlpha = function(a, b) {};
            a.prototype.setupFont = function(a) {};
            a.prototype.measureText = function(a) {
                return 0
            };
            a.prototype.drawText = function(a, c, d, l, f) {
                b.Profiler.getInstance().onDrawImage()
            };
            a.prototype.strokeRect = function(a, b, c, d, f) {};
            a.prototype.pushMask = function(a) {};
            a.prototype.popMask = function() {};
            a.createRendererContext = function(a) {
                return null
            };
            return a
        }(b.HashObject);
        b.RendererContext = d;
        d.prototype.__class__ = "egret.RendererContext"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.MOUSE = "mouse";
            b.TOUCH = "touch";
            b.mode = "touch";
            return b
        }();
        b.InteractionMode = d;
        d.prototype.__class__ = "egret.InteractionMode"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this._currentTouchTarget = {};
                this.maxTouches = 2;
                this.touchDownTarget = {};
                this.lastTouchY = this.lastTouchX = -1
            }
            __extends(a, c);
            a.prototype.run = function() {};
            a.prototype.getTouchData = function(a, b, c) {
                var d = this._currentTouchTarget[a];
                null == d && (d = {}, this._currentTouchTarget[a] = d);
                d.stageX = b;
                d.stageY = c;
                d.identifier = a;
                return d
            };
            a.prototype.dispatchEvent = function(a, c) {
                b.TouchEvent.dispatchTouchEvent(c.target, a, c.identifier, c.stageX, c.stageY, !1, !1, !1, !0 ==
                    this.touchDownTarget[c.identifier])
            };
            a.prototype.onTouchBegan = function(a, c, d) {
                var l = b.MainContext.instance.stage.hitTest(a, c);
                l && (a = this.getTouchData(d, a, c), this.touchDownTarget[d] = !0, a.target = l, a.beginTarget = l, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a))
            };
            a.prototype.onTouchMove = function(a, c, d) {
                if (a != this.lastTouchX || c != this.lastTouchY) {
                    this.lastTouchX = a;
                    this.lastTouchY = c;
                    var l = b.MainContext.instance.stage.hitTest(a, c);
                    l && (a = this.getTouchData(d, a, c), a.target = l, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE,
                        a))
                }
            };
            a.prototype.onTouchEnd = function(a, c, d) {
                var l = b.MainContext.instance.stage.hitTest(a, c);
                l && (a = this.getTouchData(d, a, c), delete this.touchDownTarget[d], d = a.beginTarget, a.target = l, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), d == l ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
            };
            return a
        }(b.HashObject);
        b.TouchContext = d;
        d.prototype.__class__ = "egret.TouchContext"
    })(egret ||
            (egret = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.proceed = function(a) {};
            return a
        }(b.HashObject);
        b.NetContext = d;
        d.prototype.__class__ = "egret.NetContext"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this.frameRate = 60
            }
            __extends(a, b);
            a.prototype.executeMainLoop = function(a, b) {};
            return a
        }(b.HashObject);
        b.DeviceContext = d;
        d.prototype.__class__ = "egret.DeviceContext"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this.translate = this.isHD ? function(a) {
                    return "translate3d(" + a.x + "px, " + (a.y - b.MainContext.instance.stage.stageHeight) + "px, 0) "
                } : function(a) {
                    return "translate(" + a.x + "px, " + a.y + "px) "
                };
                this.rotate = this.isHD ? function(a) {
                    return "rotateZ(" + a + "deg) "
                } : function(a) {
                    return "rotate(" + a + "deg) "
                };
                this.ua = navigator.userAgent.toLowerCase();
                var a = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || this.ua.match(/chrome|safari/);
                a && 0 < a.length && (a = a[0], "micromessenger" == a && (this.type = "wechat"), this.type = a);
                this.type = "unknow";
                switch (this.type) {
                    case "firefox":
                        this.pfx = "Moz";
                        this.isHD = !0;
                        break;
                    case "chrome":
                    case "safari":
                        this.pfx = "webkit";
                        this.isHD = !0;
                        break;
                    case "opera":
                        this.pfx = "O";
                        this.isHD = !1;
                        break;
                    case "ie":
                        this.pfx = "ms";
                        this.isHD = !1;
                        break;
                    default:
                        this.pfx = "webkit", this.isHD = !0
                }
                this.trans = this.pfx + "Transform"
            }
            __extends(a, c);
            a.getInstance = function() {
                null == a.instance && (a.instance = new a);
                return a.instance
            };
            Object.defineProperty(a.prototype,
                "isMobile", {
                    get: function() {
                        b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
                        return b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE
                    },
                    enumerable: !0,
                    configurable: !0
                });
            a.prototype.$new = function(a) {
                return this.$(document.createElement(a))
            };
            a.prototype.$ = function(e) {
                var c = document;
                if (e = e instanceof HTMLElement ? e : c.querySelector(e)) e.find = e.find ||
                    this.$, e.hasClass = e.hasClass || function(a) {
                    return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
                }, e.addClass = e.addClass || function(a) {
                    this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                    return this
                }, e.removeClass = e.removeClass || function(a) {
                    this.hasClass(a) && (this.className = this.className.replace(a, ""));
                    return this
                }, e.remove = e.remove || function() {}, e.appendTo = e.appendTo || function(a) {
                    a.appendChild(this);
                    return this
                }, e.prependTo = e.prependTo || function(a) {
                    a.childNodes[0] ?
                        a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                    return this
                }, e.transforms = e.transforms || function() {
                    this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
                    return this
                }, e.position = e.position || {
                    x: 0,
                    y: 0
                }, e.rotation = e.rotation || 0, e.scale = e.scale || {
                    x: 1,
                    y: 1
                }, e.skew = e.skew || {
                    x: 0,
                    y: 0
                }, e.translates = function(a, e) {
                    this.position.x = a;
                    this.position.y = e - b.MainContext.instance.stage.stageHeight;
                    this.transforms();
                    return this
                }, e.rotate = function(a) {
                    this.rotation = a;
                    this.transforms();
                    return this
                }, e.resize = function(a, e) {
                    this.scale.x = a;
                    this.scale.y = e;
                    this.transforms();
                    return this
                }, e.setSkew = function(a, e) {
                    this.skew.x = a;
                    this.skew.y = e;
                    this.transforms();
                    return this
                };
                return e
            };
            a.prototype.scale = function(a) {
                return "scale(" + a.x + ", " + a.y + ") "
            };
            a.prototype.skew = function(a) {
                return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
            };
            return a
        }(b.HashObject);
        b.Browser = d;
        d.prototype.__class__ = "egret.Browser"
    })(egret);
    (function(b) {
        var d = function() {
            function c() {}
            c.parse = function(a) {
                a = b.SAXParser.getInstance().parserXML(a);
                if (!a || !a.childNodes) return null;
                for (var e = a.childNodes.length, d = !1, m = 0; m < e; m++) {
                    var l = a.childNodes[m];
                    if (1 == l.nodeType) {
                        d = !0;
                        break
                    }
                }
                return d ? c.parseNode(l) : null
            };
            c.parseNode = function(a) {
                if (!a || 1 != a.nodeType) return null;
                var e = {};
                e.localName = a.localName;
                e.name = a.nodeName;
                a.namespaceURI && (e.namespace = a.namespaceURI);
                a.prefix && (e.prefix = a.prefix);
                for (var b = a.attributes, d = b.length, l = 0; l < d; l++) {
                    var f = b[l],
                        g = f.name;
                    0 != g.indexOf("xmlns:") && (e["$" + g] = f.value)
                }
                b = a.childNodes;
                d = b.length;
                for (l = 0; l < d; l++)
                    if (f = c.parseNode(b[l])) e.children || (e.children = []), f.parent = e, e.children.push(f);!e.children && (a = a.textContent.trim()) && (e.text = a);
                return e
            };
            c.findChildren = function(a, e, b) {
                b ? b.length = 0 : b = [];
                c.findByPath(a, e, b);
                return b
            };
            c.findByPath = function(a, e, b) {
                var d = e.indexOf("."),
                    l; - 1 == d ? (l = e, d = !0) : (l = e.substring(0, d), e = e.substring(d + 1), d = !1);
                if (a = a.children)
                    for (var f = a.length, g = 0; g < f; g++) {
                        var k = a[g];
                        k.localName == l &&
                        (d ? b.push(k) : c.findByPath(k, e, b))
                    }
            };
            c.getAttributes = function(a, e) {
                e ? e.length = 0 : e = [];
                for (var b in a) "$" == b.charAt(0) && e.push(b.substring(1));
                return e
            };
            return c
        }();
        b.XML = d;
        d.prototype.__class__ = "egret.XML"
    })(egret);
    (function(b) {
        var d = function() {
            function a() {}
            a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
            a.BIG_ENDIAN = "BIG_ENDIAN";
            return a
        }();
        b.Endian = d;
        d.prototype.__class__ = "egret.Endian";
        var c = function() {
            function a() {
                this.length = this.position = 0;
                this._mode = "";
                this.maxlength = 0;
                this._endian = d.LITTLE_ENDIAN;
                this.isLittleEndian = !1;
                this._mode = "Typed array";
                this.maxlength = 4;
                this.arraybytes = new ArrayBuffer(this.maxlength);
                this.unalignedarraybytestemp = new ArrayBuffer(16);
                this.endian = a.DEFAULT_ENDIAN
            }
            Object.defineProperty(a.prototype,
                "endian", {
                    get: function() {
                        return this._endian
                    },
                    set: function(a) {
                        this._endian = a;
                        this.isLittleEndian = a == d.LITTLE_ENDIAN
                    },
                    enumerable: !0,
                    configurable: !0
                });
            a.prototype.ensureWriteableSpace = function(a) {
                this.ensureSpace(a + this.position)
            };
            a.prototype.setArrayBuffer = function(a) {
                this.ensureSpace(a.byteLength);
                this.length = a.byteLength;
                a = new Int8Array(a);
                (new Int8Array(this.arraybytes, 0, this.length)).set(a);
                this.position = 0
            };
            Object.defineProperty(a.prototype, "bytesAvailable", {
                get: function() {
                    return this.length - this.position
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.ensureSpace = function(a) {
                if (a > this.maxlength) {
                    a = a + 255 & -256;
                    var b = new ArrayBuffer(a),
                        c = new Uint8Array(this.arraybytes, 0, this.length);
                    (new Uint8Array(b, 0, this.length)).set(c);
                    this.arraybytes = b;
                    this.maxlength = a
                }
            };
            a.prototype.writeByte = function(a) {
                this.ensureWriteableSpace(1);
                (new Int8Array(this.arraybytes))[this.position++] = ~~a;
                this.position > this.length && (this.length = this.position)
            };
            a.prototype.readByte = function() {
                if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" +
                    this.position + ", Length=" + this.length;
                return (new Int8Array(this.arraybytes))[this.position++]
            };
            a.prototype.readBytes = function(a, b, c) {
                "undefined" === typeof b && (b = 0);
                "undefined" === typeof c && (c = 0);
                null == c && (c = a.length);
                a.ensureWriteableSpace(b + c);
                var d = new Int8Array(a.arraybytes),
                    f = new Int8Array(this.arraybytes);
                d.set(f.subarray(this.position, this.position + c), b);
                this.position += c;
                c + b > a.length && (a.length += c + b - a.length)
            };
            a.prototype.writeUnsignedByte = function(a) {
                this.ensureWriteableSpace(1);
                (new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
                this.position > this.length && (this.length = this.position)
            };
            a.prototype.readUnsignedByte = function() {
                if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
                return (new Uint8Array(this.arraybytes))[this.position++]
            };
            a.prototype.writeUnsignedShort = function(a) {
                this.ensureWriteableSpace(2);
                if (0 == (this.position & 1)) {
                    var b = new Uint16Array(this.arraybytes);
                    b[this.position >> 1] = ~~a & 65535
                } else b = new Uint16Array(this.unalignedarraybytestemp, 0, 1), b[0] = ~~a & 65535, a = new Uint8Array(this.arraybytes, this.position, 2), b = new Uint8Array(this.unalignedarraybytestemp, 0, 2), a.set(b);
                this.position += 2;
                this.position > this.length && (this.length = this.position)
            };
            a.prototype.readUTFBytes = function(a) {
                var b = "";
                a = this.position + a;
                for (var c = new DataView(this.arraybytes); this.position < a;) {
                    var d = c.getUint8(this.position++);
                    if (128 > d) {
                        if (0 == d) break;
                        b += String.fromCharCode(d)
                    } else if (224 > d) b += String.fromCharCode((d & 63) << 6 | c.getUint8(this.position++) & 127);
                    else if (240 > d) var f = c.getUint8(this.position++),
                        b = b + String.fromCharCode((d & 31) << 12 | (f & 127) << 6 | c.getUint8(this.position++) & 127);
                    else var f = c.getUint8(this.position++),
                            g = c.getUint8(this.position++),
                            b = b + String.fromCharCode((d & 15) << 18 | (f & 127) << 12 | g << 6 & 127 | c.getUint8(this.position++) & 127)
                }
                return b
            };
            a.prototype.readInt = function() {
                var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
                this.position += 4;
                return a
            };
            a.prototype.readShort = function() {
                var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
                this.position += 2;
                return a
            };
            a.prototype.readDouble = function() {
                var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
                this.position += 8;
                return a
            };
            a.prototype.readUnsignedShort = function() {
                if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
                if (0 == (this.position & 1)) {
                    var a = new Uint16Array(this.arraybytes),
                        b = this.position >> 1;
                    this.position += 2;
                    return a[b]
                }
                a = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
                b = new Uint8Array(this.arraybytes,
                    this.position, 2);
                (new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(b);
                this.position += 2;
                return a[0]
            };
            a.prototype.writeUnsignedInt = function(a) {
                this.ensureWriteableSpace(4);
                if (0 == (this.position & 3)) {
                    var b = new Uint32Array(this.arraybytes);
                    b[this.position >> 2] = ~~a & 4294967295
                } else b = new Uint32Array(this.unalignedarraybytestemp, 0, 1), b[0] = ~~a & 4294967295, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
                this.position += 4;
                this.position > this.length &&
                (this.length = this.position)
            };
            a.prototype.readUnsignedInt = function() {
                if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
                if (0 == (this.position & 3)) {
                    var a = new Uint32Array(this.arraybytes),
                        b = this.position >> 2;
                    this.position += 4;
                    return a[b]
                }
                a = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
                b = new Uint8Array(this.arraybytes, this.position, 4);
                (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
                this.position += 4;
                return a[0]
            };
            a.prototype.writeFloat =
                function(a) {
                    this.ensureWriteableSpace(4);
                    if (0 == (this.position & 3)) {
                        var b = new Float32Array(this.arraybytes);
                        b[this.position >> 2] = a
                    } else b = new Float32Array(this.unalignedarraybytestemp, 0, 1), b[0] = a, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
                    this.position += 4;
                    this.position > this.length && (this.length = this.position)
                };
            a.prototype.readFloat = function() {
                if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" +
                    this.length;
                if (0 == (this.position & 3)) {
                    var a = new Float32Array(this.arraybytes),
                        b = this.position >> 2;
                    this.position += 4;
                    return a[b]
                }
                a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
                b = new Uint8Array(this.arraybytes, this.position, 4);
                (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
                this.position += 4;
                return a[0]
            };
            a.DEFAULT_ENDIAN = d.BIG_ENDIAN;
            return a
        }();
        b.ByteArray = c;
        c.prototype.__class__ = "egret.ByteArray"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a, b, d) {
                c.call(this);
                this._target = null;
                this.loop = this.ignoreGlobalPause = this._useTicks = !1;
                this._actions = this._steps = this.pluginData = null;
                this.paused = !1;
                this.duration = 0;
                this._prevPos = -1;
                this.position = null;
                this._stepPosition = this._prevPosition = 0;
                this.passive = !1;
                this.initialize(a, b, d)
            }
            __extends(a, c);
            a.get = function(e, b, c, d) {
                "undefined" === typeof b && (b = null);
                "undefined" === typeof c && (c = null);
                "undefined" === typeof d && (d = !1);
                d && a.removeTweens(e);
                return new a(e, b, c)
            };
            a.removeTweens = function(e) {
                if (e.tween_count) {
                    for (var b = a._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == e && (b[c].paused = !0, b.splice(c, 1));
                    e.tween_count = 0
                }
            };
            a.tick = function(e, b) {
                "undefined" === typeof b && (b = !1);
                for (var c = a._tweens.concat(), d = c.length - 1; 0 <= d; d--) {
                    var f = c[d];
                    b && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : e)
                }
            };
            a._register = function(e, c) {
                var d = e._target,
                    l = a._tweens;
                if (c) d && (d.tween_count = d.tween_count ? d.tween_count + 1 : 1), l.push(e), a._inited || (b.Ticker.getInstance().register(a.tick, null),
                    a._inited = !0);
                else
                    for (d && d.tween_count--, d = l.length; d--;)
                        if (l[d] == e) {
                            l.splice(d, 1);
                            break
                        }
            };
            a.removeAllTweens = function() {
                for (var e = a._tweens, b = 0, c = e.length; b < c; b++) {
                    var d = e[b];
                    d.paused = !0;
                    d._target.tweenjs_count = 0
                }
                e.length = 0
            };
            a.prototype.initialize = function(e, b, c) {
                this._target = e;
                b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
                this.pluginData = c || {};
                this._curQueueProps = {};
                this._initQueueProps = {};
                this._steps = [];
                this._actions = [];
                b && b.paused ? this.paused = !0 : a._register(this, !0);
                b && null != b.position && this.setPosition(b.position, a.NONE)
            };
            a.prototype.setPosition = function(a, b) {
                "undefined" === typeof b && (b = 1);
                0 > a && (a = 0);
                var c = a,
                    d = !1;
                c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0));
                if (c == this._prevPos) return d;
                var f = this._prevPos;
                this.position = this._prevPos = c;
                this._prevPosition = a;
                if (this._target)
                    if (d) this._updateTargetProps(null, 1);
                    else if (0 < this._steps.length) {
                        for (var g =
                            0, k = this._steps.length; g < k && !(this._steps[g].t > c); g++);
                        g = this._steps[g - 1];
                        this._updateTargetProps(g, (this._stepPosition = c - g.t) / g.d)
                    }
                0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < f ? (f != this.duration && this._runActions(f, this.duration), this._runActions(0, c, !0)) : this._runActions(f, c));
                d && this.setPaused(!0);
                this.dispatchEventWith("change");
                return d
            };
            a.prototype._runActions = function(a, b, c) {
                "undefined" === typeof c && (c = !1);
                var d = a,
                    f = b,
                    g = -1,
                    k = this._actions.length,
                    n = 1;
                a > b && (d = b,
                    f = a, g = k, k = n = -1);
                for (;
                    (g += n) != k;) {
                    b = this._actions[g];
                    var p = b.t;
                    (p == f || p > d && p < f || c && p == a) && b.f.apply(b.o, b.p)
                }
            };
            a.prototype._updateTargetProps = function(e, b) {
                var c, d, f, g;
                if (e || 1 != b) {
                    if (this.passive = !!e.v) return;
                    e.e && (b = e.e(b, 0, 1, 1));
                    c = e.p0;
                    d = e.p1
                } else this.passive = !1, c = d = this._curQueueProps;
                for (var k in this._initQueueProps) {
                    null == (f = c[k]) && (c[k] = f = this._initQueueProps[k]);
                    null == (g = d[k]) && (d[k] = g = f);
                    f = f == g || 0 == b || 1 == b || "number" != typeof f ? 1 == b ? g : f : f + (g - f) * b;
                    var n = !1;
                    if (g = a._plugins[k])
                        for (var p = 0, q = g.length; p <
                            q; p++) {
                            var t = g[p].tween(this, k, f, c, d, b, !!e && c == d, !e);
                            t == a.IGNORE ? n = !0 : f = t
                        }
                    n || (this._target[k] = f)
                }
            };
            a.prototype.setPaused = function(e) {
                this.paused = e;
                a._register(this, !e);
                return this
            };
            a.prototype._cloneProps = function(a) {
                var b = {},
                    c;
                for (c in a) b[c] = a[c];
                return b
            };
            a.prototype._addStep = function(a) {
                0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
                return this
            };
            a.prototype._appendQueueProps = function(b) {
                var c, d, l, f, g, k;
                for (k in b)
                    if (void 0 === this._initQueueProps[k]) {
                        d = this._target[k];
                        if (c = a._plugins[k])
                            for (l =
                                     0, f = c.length; l < f; l++) d = c[l].init(this, k, d);
                        this._initQueueProps[k] = this._curQueueProps[k] = void 0 === d ? null : d
                    }
                for (k in b) {
                    d = this._curQueueProps[k];
                    if (c = a._plugins[k])
                        for (g = g || {}, l = 0, f = c.length; l < f; l++) c[l].step && c[l].step(this, k, d, b[k], g);
                    this._curQueueProps[k] = b[k]
                }
                g && this._appendQueueProps(g);
                return this._curQueueProps
            };
            a.prototype._addAction = function(a) {
                a.t = this.duration;
                this._actions.push(a);
                return this
            };
            a.prototype._set = function(a, b) {
                for (var c in a) b[c] = a[c]
            };
            a.prototype.wait = function(a, b) {
                if (null ==
                    a || 0 >= a) return this;
                var c = this._cloneProps(this._curQueueProps);
                return this._addStep({
                    d: a,
                    p0: c,
                    p1: c,
                    v: b
                })
            };
            a.prototype.to = function(a, b, c) {
                "undefined" === typeof c && (c = void 0);
                if (isNaN(b) || 0 > b) b = 0;
                return this._addStep({
                    d: b || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: c,
                    p1: this._cloneProps(this._appendQueueProps(a))
                })
            };
            a.prototype.call = function(a, b, c) {
                "undefined" === typeof b && (b = void 0);
                "undefined" === typeof c && (c = void 0);
                return this._addAction({
                    f: a,
                    p: c ? c : [],
                    o: b ? b : this._target
                })
            };
            a.prototype.set = function(a,
                                       b) {
                "undefined" === typeof b && (b = null);
                return this._addAction({
                    f: this._set,
                    o: this,
                    p: [a, b ? b : this._target]
                })
            };
            a.prototype.play = function(a) {
                a || (a = this);
                return this.call(a.setPaused, a, [!1])
            };
            a.prototype.pause = function(a) {
                a || (a = this);
                return this.call(a.setPaused, a, [!0])
            };
            a.prototype.tick = function(a) {
                this.paused || this.setPosition(this._prevPosition + a)
            };
            a.NONE = 0;
            a.LOOP = 1;
            a.REVERSE = 2;
            a._tweens = [];
            a.IGNORE = {};
            a._plugins = {};
            a._inited = !1;
            return a
        }(b.EventDispatcher);
        b.Tween = d;
        d.prototype.__class__ = "egret.Tween"
    })(egret ||
            (egret = {}));
    (function(b) {
        var d = function() {
            function c() {
                b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
            }
            c.get = function(a) {
                -1 > a && (a = -1);
                1 < a && (a = 1);
                return function(b) {
                    return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                }
            };
            c.getPowIn = function(a) {
                return function(b) {
                    return Math.pow(b, a)
                }
            };
            c.getPowOut = function(a) {
                return function(b) {
                    return 1 - Math.pow(1 - b, a)
                }
            };
            c.getPowInOut = function(a) {
                return function(b) {
                    return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
                }
            };
            c.sineIn = function(a) {
                return 1 - Math.cos(a *
                    Math.PI / 2)
            };
            c.sineOut = function(a) {
                return Math.sin(a * Math.PI / 2)
            };
            c.sineInOut = function(a) {
                return -0.5 * (Math.cos(Math.PI * a) - 1)
            };
            c.getBackIn = function(a) {
                return function(b) {
                    return b * b * ((a + 1) * b - a)
                }
            };
            c.getBackOut = function(a) {
                return function(b) {
                    b -= 1;
                    return b * b * ((a + 1) * b + a) + 1
                }
            };
            c.getBackInOut = function(a) {
                a *= 1.525;
                return function(b) {
                    return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                }
            };
            c.circIn = function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            };
            c.circOut = function(a) {
                return Math.sqrt(1 - a * a)
            };
            c.circInOut = function(a) {
                return 1 >
                    (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            };
            c.bounceIn = function(a) {
                return 1 - c.bounceOut(1 - a)
            };
            c.bounceOut = function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
            };
            c.bounceInOut = function(a) {
                return 0.5 > a ? 0.5 * c.bounceIn(2 * a) : 0.5 * c.bounceOut(2 * a - 1) + 0.5
            };
            c.getElasticIn = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var l = b / c * Math.asin(1 / a);
                    return -(a * Math.pow(2, 10 *
                        (d -= 1)) * Math.sin((d - l) * c / b))
                }
            };
            c.getElasticOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var l = b / c * Math.asin(1 / a);
                    return a * Math.pow(2, -10 * d) * Math.sin((d - l) * c / b) + 1
                }
            };
            c.getElasticInOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    var l = b / c * Math.asin(1 / a);
                    return 1 > (d *= 2) ? -0.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - l) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - l) * c / b) * 0.5 + 1
                }
            };
            c.quadIn = c.getPowIn(2);
            c.quadOut = c.getPowOut(2);
            c.quadInOut = c.getPowInOut(2);
            c.cubicIn = c.getPowIn(3);
            c.cubicOut = c.getPowOut(3);
            c.cubicInOut = c.getPowInOut(3);
            c.quartIn = c.getPowIn(4);
            c.quartOut = c.getPowOut(4);
            c.quartInOut = c.getPowInOut(4);
            c.quintIn = c.getPowIn(5);
            c.quintOut = c.getPowOut(5);
            c.quintInOut = c.getPowInOut(5);
            c.backIn = c.getBackIn(1.7);
            c.backOut = c.getBackOut(1.7);
            c.backInOut = c.getBackInOut(1.7);
            c.elasticIn = c.getElasticIn(1, 0.3);
            c.elasticOut = c.getElasticOut(1, 0.3);
            c.elasticInOut = c.getElasticInOut(1, 0.3 * 1.5);
            return c
        }();
        b.Ease = d;
        d.prototype.__class__ = "egret.Ease"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.prototype.play = function(a) {
                "undefined" === typeof a && (a = !1);
                var b = this.audio;
                b && (isNaN(b.duration) || (b.currentTime = 0), b.loop = a, b.play())
            };
            b.prototype.pause = function() {
                var a = this.audio;
                a && a.pause()
            };
            b.prototype.load = function() {
                var a = this.audio;
                a && a.load()
            };
            b.prototype.addEventListener = function(a, b) {
                this.audio && this.audio.addEventListener(a, b, !1)
            };
            b.prototype.removeEventListener = function(a, b) {
                this.audio && this.audio.removeEventListener(a, b, !1)
            };
            b.prototype.setVolume =
                function(a) {
                    var b = this.audio;
                    b && (b.volume = a)
                };
            b.prototype.getVolume = function() {
                return this.audio ? this.audio.volume : 0
            };
            return b
        }();
        b.Sound = d;
        d.prototype.__class__ = "egret.Sound"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.isNumber = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            return b
        }();
        b.NumberUtils = d;
        d.prototype.__class__ = "egret.NumberUtils"
    })(egret);
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        RES;
    (function(b) {
        var d = function(b) {
            function a(a, d, m) {
                "undefined" === typeof d && (d = !1);
                "undefined" === typeof m && (m = !1);
                b.call(this, a, d, m);
                this.itemsTotal = this.itemsLoaded = 0
            }
            __extends(a, b);
            a.dispatchResourceEvent = function(b, c, d, l, f, g) {
                "undefined" === typeof d && (d = "");
                "undefined" === typeof l && (l = null);
                "undefined" === typeof f && (f = 0);
                "undefined" === typeof g && (g = 0);
                var k = egret.Event._getPropertyData(a);
                k.groupName = d;
                k.resItem = l;
                k.itemsLoaded = f;
                k.itemsTotal = g;
                egret.Event._dispatchByTarget(a, b, c, k)
            };
            a.ITEM_LOAD_ERROR =
                "itemLoadError";
            a.CONFIG_COMPLETE = "configComplete";
            a.GROUP_PROGRESS = "groupProgress";
            a.GROUP_COMPLETE = "groupComplete";
            return a
        }(egret.Event);
        b.ResourceEvent = d;
        d.prototype.__class__ = "RES.ResourceEvent"
    })(RES || (RES = {}));
    (function(b) {
        var d = function() {
            function b(a, e, c) {
                this._loaded = !1;
                this.name = a;
                this.url = e;
                this.type = c
            }
            Object.defineProperty(b.prototype, "loaded", {
                get: function() {
                    return this.data ? this.data.loaded : this._loaded
                },
                set: function(a) {
                    this.data && (this.data.loaded = a);
                    this._loaded = a
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.toString = function() {
                return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
            };
            b.TYPE_XML = "xml";
            b.TYPE_IMAGE = "image";
            b.TYPE_BIN = "bin";
            b.TYPE_TEXT = "text";
            b.TYPE_JSON =
                "json";
            b.TYPE_SHEET = "sheet";
            b.TYPE_FONT = "font";
            b.TYPE_SOUND = "sound";
            return b
        }();
        b.ResourceItem = d;
        d.prototype.__class__ = "RES.ResourceItem"
    })(RES || (RES = {}));
    (function(b) {
        var d = function() {
            function c() {
                this.keyMap = {};
                this.groupDic = {}
            }
            c.prototype.getGroupByName = function(a) {
                var b = [];
                if (!this.groupDic[a]) return b;
                a = this.groupDic[a];
                for (var c = a.length, d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
                return b
            };
            c.prototype.getRawGroupByName = function(a) {
                return this.groupDic[a] ? this.groupDic[a] : []
            };
            c.prototype.createGroup = function(a, b, c) {
                "undefined" === typeof c && (c = !1);
                if (!c && this.groupDic[a] || !b || 0 == b.length) return !1;
                c = this.groupDic;
                for (var d = [], l = b.length, f = 0; f <
                    l; f++) {
                    var g = b[f],
                        k = c[g];
                    if (k)
                        for (var g = k.length, n = 0; n < g; n++) {
                            var p = k[n]; - 1 == d.indexOf(p) && d.push(p)
                        } else(p = this.keyMap[g]) && -1 == d.indexOf(p) && d.push(p)
                }
                if (0 == d.length) return !1;
                this.groupDic[a] = d;
                return !0
            };
            c.prototype.parseConfig = function(a, b) {
                if (a) {
                    var c = a.resources;
                    if (c)
                        for (var d = c.length, l = 0; l < d; l++) {
                            var f = c[l],
                                g = f.url;
                            g && -1 == g.indexOf("://") && (f.url = b + g);
                            this.addItemToKeyMap(f)
                        }
                    if (c = a.groups)
                        for (d = c.length, l = 0; l < d; l++) {
                            for (var g = c[l], k = [], n = g.keys.split(","), p = n.length, q = 0; q < p; q++) f = n[q].trim(), (f = this.keyMap[f]) && -1 == k.indexOf(f) && k.push(f);
                            this.groupDic[g.name] = k
                        }
                }
            };
            c.prototype.addItemToKeyMap = function(a) {
                this.keyMap[a.name] || (this.keyMap[a.name] = a);
                if (a.hasOwnProperty("subkeys")) {
                    var b = a.subkeys.split(",");
                    a.subkeys = b;
                    for (var c = b.length, d = 0; d < c; d++) {
                        var l = b[d];
                        null == this.keyMap[l] && (this.keyMap[l] = a)
                    }
                }
            };
            c.prototype.getName = function(a) {
                return (a = this.keyMap[a]) ? a.name : ""
            };
            c.prototype.getType = function(a) {
                return (a = this.keyMap[a]) ? a.type : ""
            };
            c.prototype.getRawResourceItem = function(a) {
                return this.keyMap[a]
            };
            c.prototype.getResourceItem = function(a) {
                return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
            };
            c.prototype.parseResourceItem = function(a) {
                var e = new b.ResourceItem(a.name, a.url, a.type);
                e.data = a;
                return e
            };
            return c
        }();
        b.ResourceConfig = d;
        d.prototype.__class__ = "RES.ResourceConfig"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this.thread = 2;
                this.loadingCount = 0;
                this.groupTotalDic = {};
                this.numLoadedDic = {};
                this.itemListDic = {};
                this.priorityQueue = {};
                this.lazyLoadList = [];
                this.analyzerDic = {};
                this.queueIndex = 0
            }
            __extends(a, c);
            a.prototype.isGroupInLoading = function(a) {
                return void 0 !== this.itemListDic[a]
            };
            a.prototype.loadGroup = function(a, c, d) {
                "undefined" === typeof d && (d = 0);
                if (!this.itemListDic[c] && c)
                    if (a && 0 != a.length) {
                        this.priorityQueue[d] ? this.priorityQueue[d].push(c) : this.priorityQueue[d] =
                            [c];
                        this.itemListDic[c] = a;
                        d = a.length;
                        for (var l = 0; l < d; l++) a[l].groupName = c;
                        this.groupTotalDic[c] = a.length;
                        this.numLoadedDic[c] = 0;
                        this.next()
                    } else a = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE), a.groupName = c, this.dispatchEvent(a)
            };
            a.prototype.loadItem = function(a) {
                this.lazyLoadList.push(a);
                a.groupName = "";
                this.next()
            };
            a.prototype.next = function() {
                for (; this.loadingCount < this.thread;) {
                    var a = this.getOneResourceItem();
                    if (!a) break;
                    this.loadingCount++;
                    if (a.loaded) this.onItemComplete(a);
                    else {
                        var c = this.analyzerDic[a.type];
                        c || (c = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
                        c.loadFile(a, this.onItemComplete, this)
                    }
                }
            };
            a.prototype.getOneResourceItem = function() {
                var a = Number.NEGATIVE_INFINITY,
                    b;
                for (b in this.priorityQueue) a = Math.max(a, b);
                a = this.priorityQueue[a];
                if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
                b = a.length;
                for (var c, d = 0; d < b; d++) {
                    this.queueIndex >= b && (this.queueIndex = 0);
                    c = this.itemListDic[a[this.queueIndex]];
                    if (0 < c.length) break;
                    this.queueIndex++
                }
                return 0 ==
                    c.length ? null : c.shift()
            };
            a.prototype.onItemComplete = function(a) {
                this.loadingCount--;
                var c = a.groupName;
                a.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, c, a);
                if (c) {
                    this.numLoadedDic[c]++;
                    var d = this.numLoadedDic[c],
                        l = this.groupTotalDic[c];
                    b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, c, a, d, l);
                    d == l && (this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], b.ResourceEvent.dispatchResourceEvent(this,
                        b.ResourceEvent.GROUP_COMPLETE, c))
                } else this.callBack.call(this.resInstance, a);
                this.next()
            };
            a.prototype.removeGroupName = function(a) {
                for (var b in this.priorityQueue) {
                    for (var c = this.priorityQueue[b], d = c.length, f = 0, g = !1, d = c.length, k = 0; k < d; k++) {
                        if (c[k] == a) {
                            c.splice(f, 1);
                            g = !0;
                            break
                        }
                        f++
                    }
                    if (g) {
                        0 == c.length && delete this.priorityQueue[b];
                        break
                    }
                }
            };
            return a
        }(egret.EventDispatcher);
        b.ResourceLoader = d;
        d.prototype.__class__ = "RES.ResourceLoader"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.loadFile = function(a, b, c) {};
            a.prototype.getRes = function(a) {};
            a.prototype.destroyRes = function(a) {
                return !1
            };
            a.getStringPrefix = function(a) {
                if (!a) return "";
                var b = a.indexOf(".");
                return -1 != b ? a.substring(0, b) : ""
            };
            a.getStringTail = function(a) {
                if (!a) return "";
                var b = a.indexOf(".");
                return -1 != b ? a.substring(b + 1) : ""
            };
            return a
        }(egret.HashObject);
        b.AnalyzerBase = d;
        d.prototype.__class__ = "RES.AnalyzerBase"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this.fileDic = {};
                this.resItemDic = [];
                this._dataFormat = egret.URLLoaderDataFormat.BINARY;
                this.recycler = new egret.Recycler
            }
            __extends(a, b);
            a.prototype.loadFile = function(a, b, c) {
                if (this.fileDic[a.name]) b.call(c, a);
                else {
                    var d = this.getLoader();
                    this.resItemDic[d.hashCode] = {
                        item: a,
                        func: b,
                        thisObject: c
                    };
                    d.load(new egret.URLRequest(a.url))
                }
            };
            a.prototype.getLoader = function() {
                var a = this.recycler.pop();
                a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE,
                    this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
                a.dataFormat = this._dataFormat;
                return a
            };
            a.prototype.onLoadFinish = function(a) {
                var b = a.target,
                    c = this.resItemDic[b.hashCode];
                delete this.resItemDic[b.hashCode];
                this.recycler.push(b);
                var d = c.item,
                    f = c.func;
                d.loaded = a.type == egret.Event.COMPLETE;
                d.loaded && this.analyzeData(d, b.data);
                f.call(c.thisObject, d)
            };
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                !this.fileDic[c] && b && (this.fileDic[c] = b)
            };
            a.prototype.getRes =
                function(a) {
                    return this.fileDic[a]
                };
            a.prototype.hasRes = function(a) {
                return null != this.getRes(a)
            };
            a.prototype.destroyRes = function(a) {
                return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
            };
            return a
        }(b.AnalyzerBase);
        b.BinAnalyzer = d;
        d.prototype.__class__ = "RES.BinAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
            }
            __extends(a, b);
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                !this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
            };
            return a
        }(b.BinAnalyzer);
        b.ImageAnalyzer = d;
        d.prototype.__class__ = "RES.ImageAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            __extends(a, b);
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                if (!this.fileDic[c] && b) try {
                    this.fileDic[c] = JSON.parse(b)
                } catch (d) {
                    egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                }
            };
            return a
        }(b.BinAnalyzer);
        b.JsonAnalyzer = d;
        d.prototype.__class__ = "RES.JsonAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            __extends(a, b);
            return a
        }(b.BinAnalyzer);
        b.TextAnalyzer = d;
        d.prototype.__class__ = "RES.TextAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this);
                this.sheetMap = {};
                this.textureMap = {};
                this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            __extends(a, c);
            a.prototype.getRes = function(a) {
                var c = this.fileDic[a];
                c || (c = this.textureMap[a]);
                !c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = b.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
                return c
            };
            a.prototype.onLoadFinish = function(a) {
                var b = a.target,
                    c = this.resItemDic[b.hashCode];
                delete this.resItemDic[b.hashCode];
                this.recycler.push(b);
                var d =
                        c.item,
                    f = c.func;
                d.loaded = a.type == egret.Event.COMPLETE;
                d.loaded && this.analyzeData(d, b.data);
                "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, f, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : f.call(c.thisObject, d)
            };
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                if (!this.fileDic[c] && b) {
                    var d;
                    if ("string" == typeof b) {
                        try {
                            d = JSON.parse(b)
                        } catch (f) {
                            egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                        }
                        d && (this.sheetMap[c] =
                            d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
                    } else d = this.sheetMap[c], delete this.sheetMap[c], b && (d = this.parseSpriteSheet(b, d), this.fileDic[c] = d)
                }
            };
            a.prototype.getRelativePath = function(a, b) {
                a = a.split("\\").join("/");
                var c = a.lastIndexOf("/");
                return a = -1 != c ? a.substring(0, c + 1) + b : b
            };
            a.prototype.parseSpriteSheet = function(a, b) {
                var c = b.frames;
                if (!c) return null;
                var d = new egret.SpriteSheet(a),
                    f = this.textureMap,
                    g;
                for (g in c) {
                    var k = c[g];
                    a = d.createTexture(g, k.x, k.y, k.w, k.h, k.offX, k.offY, k.sourceW, k.sourceH);
                    null == f[g] && (f[g] = a)
                }
                return d
            };
            return a
        }(b.BinAnalyzer);
        b.SheetAnalyzer = d;
        d.prototype.__class__ = "RES.SheetAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                if (!this.fileDic[c] && b) {
                    var d;
                    "string" == typeof b ? (d = b, this.sheetMap[c] = d, a.loaded = !1, a.url = this.getTexturePath(a.url, d)) : (d = this.sheetMap[c], delete this.sheetMap[c], b && (d = new egret.BitmapTextSpriteSheet(b, d), this.fileDic[c] = d))
                }
            };
            a.prototype.getTexturePath = function(a, b) {
                var c = "",
                    d = b.split("\n")[2],
                    f = d.indexOf('file="'); - 1 != f && (d = d.substring(f + 6), f = d.indexOf('"'), c = d.substring(0,
                    f));
                a = a.split("\\").join("/");
                f = a.lastIndexOf("/");
                return a = -1 != f ? a.substring(0, f + 1) + c : c
            };
            return a
        }(b.SheetAnalyzer);
        b.FontAnalyzer = d;
        d.prototype.__class__ = "RES.FontAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this._dataFormat = egret.URLLoaderDataFormat.SOUND
            }
            __extends(a, b);
            return a
        }(b.BinAnalyzer);
        b.SoundAnalyzer = d;
        d.prototype.__class__ = "RES.SoundAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(b) {
            function a() {
                b.call(this);
                this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            __extends(a, b);
            a.prototype.analyzeData = function(a, b) {
                var c = a.name;
                if (!this.fileDic[c] && b) try {
                    var d = egret.XML.parse(b);
                    this.fileDic[c] = d
                } catch (f) {}
            };
            return a
        }(b.BinAnalyzer);
        b.XMLAnalyzer = d;
        d.prototype.__class__ = "RES.XMLAnalyzer"
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        b.loadConfig = function(a, b, d) {
            "undefined" === typeof b && (b = "");
            "undefined" === typeof d && (d = "json");
            c.loadConfig(a, b, d)
        };
        b.loadGroup = function(a, b) {
            "undefined" === typeof b && (b = 0);
            c.loadGroup(a, b)
        };
        b.isGroupLoaded = function(a) {
            return c.isGroupLoaded(a)
        };
        b.getGroupByName = function(a) {
            return c.getGroupByName(a)
        };
        b.createGroup = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            return c.createGroup(a, b, d)
        };
        b.hasRes = function(a) {
            return c.hasRes(a)
        };
        b.getRes = function(a) {
            return c.getRes(a)
        };
        b.getResAsync =
            function(a, b, d) {
                c.getResAsync(a, b, d)
            };
        b.getResByUrl = function(a, b, d, m) {
            "undefined" === typeof m && (m = "");
            c.getResByUrl(a, b, d, m)
        };
        b.destroyRes = function(a) {
            return c.destroyRes(a)
        };
        b.setMaxLoadingThread = function(a) {
            c.setMaxLoadingThread(a)
        };
        b.addEventListener = function(a, b, d, m, l) {
            "undefined" === typeof m && (m = !1);
            "undefined" === typeof l && (l = 0);
            c.addEventListener(a, b, d, m, l)
        };
        b.removeEventListener = function(a, b, d, m) {
            "undefined" === typeof m && (m = !1);
            c.removeEventListener(a, b, d, m)
        };
        var d = function(a) {
            function c() {
                a.call(this);
                this.analyzerDic = {};
                this.configItemList = [];
                this.configComplete = this.callLaterFlag = !1;
                this.loadedGroups = [];
                this.groupNameList = [];
                this.asyncDic = {};
                this.init()
            }
            __extends(c, a);
            c.prototype.getAnalyzerByType = function(a) {
                var c = this.analyzerDic[a];
                c || (c = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
                return c
            };
            c.prototype.init = function() {
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
                egret.Injector.hasMapRule(b.AnalyzerBase,
                    b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, b.ResourceItem.TYPE_IMAGE);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase,
                    b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
                egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
                this.resConfig =
                    new b.ResourceConfig;
                this.resLoader = new b.ResourceLoader;
                this.resLoader.callBack = this.onResourceItemComp;
                this.resLoader.resInstance = this;
                this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
            };
            c.prototype.loadConfig = function(a, b, c) {
                "undefined" === typeof c && (c = "json");
                this.configItemList.push({
                    url: a,
                    resourceRoot: b,
                    type: c
                });
                this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
            };
            c.prototype.startLoadConfig = function() {
                this.callLaterFlag = !1;
                var a = this.configItemList;
                this.configItemList = [];
                this.loadingConfigList = a;
                for (var d = a.length, l = [], f = 0; f < d; f++) {
                    var g = a[f],
                        g = new b.ResourceItem(g.url, g.url, g.type);
                    l.push(g)
                }
                this.resLoader.loadGroup(l, c.GROUP_CONFIG, Number.MAX_VALUE)
            };
            c.prototype.isGroupLoaded = function(a) {
                return -1 != this.loadedGroups.indexOf(a)
            };
            c.prototype.getGroupByName = function(a) {
                return this.resConfig.getGroupByName(a)
            };
            c.prototype.loadGroup = function(a, b) {
                "undefined" === typeof b && (b = 0);
                if (-1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a))
                    if (this.configComplete) {
                        var c =
                            this.resConfig.getGroupByName(a);
                        this.resLoader.loadGroup(c, a, b)
                    } else this.groupNameList.push({
                        name: a,
                        priority: b
                    })
            };
            c.prototype.createGroup = function(a, b, c) {
                "undefined" === typeof c && (c = !1);
                if (c) {
                    var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
                }
                return this.resConfig.createGroup(a, b, c)
            };
            c.prototype.onGroupComp = function(a) {
                if (a.groupName == c.GROUP_CONFIG) {
                    a = this.loadingConfigList.length;
                    for (var d = 0; d < a; d++) {
                        var l = this.loadingConfigList[d],
                            f = this.getAnalyzerByType(l.type),
                            g = f.getRes(l.url);
                        f.destroyRes(l.url);
                        this.resConfig.parseConfig(g, l.resourceRoot)
                    }
                    this.configComplete = !0;
                    this.loadingConfigList = null;
                    b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                    l = this.groupNameList;
                    a = l.length;
                    for (d = 0; d < a; d++) f = l[d], this.loadGroup(f.name, f.priority);
                    this.groupNameList = []
                } else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
            };
            c.prototype.hasRes = function(a) {
                var c = this.resConfig.getType(a);
                return "" == c && (a = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(a),
                    "" == c) ? !1 : !0
            };
            c.prototype.getRes = function(a) {
                var c = this.resConfig.getType(a);
                return "" == c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(c), "" == c) ? null : this.getAnalyzerByType(c).getRes(a)
            };
            c.prototype.getResAsync = function(a, c, d) {
                var e = this.resConfig.getType(a),
                    g = this.resConfig.getName(a);
                if ("" == e && (g = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(g), "" == e)) {
                    c.call(d, null);
                    return
                }(e = this.getAnalyzerByType(e).getRes(a)) ? c.call(d, e) : (a = {
                    key: a,
                    compFunc: c,
                    thisObject: d
                }, this.asyncDic[g] ?
                    this.asyncDic[g].push(a) : (this.asyncDic[g] = [a], g = this.resConfig.getResourceItem(g), this.resLoader.loadItem(g)))
            };
            c.prototype.getResByUrl = function(a, c, d, e) {
                "undefined" === typeof e && (e = "");
                if (a) {
                    e || (e = this.getTypeByUrl(a));
                    var g = this.getAnalyzerByType(e).getRes(a);
                    g ? c.call(d, g) : (c = {
                        key: a,
                        compFunc: c,
                        thisObject: d
                    }, this.asyncDic[a] ? this.asyncDic[a].push(c) : (this.asyncDic[a] = [c], a = new b.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
                } else c.call(d, null)
            };
            c.prototype.getTypeByUrl = function(a) {
                (a = a.substr(a.lastIndexOf(".") +
                    1)) && (a = a.toLowerCase());
                switch (a) {
                    case b.ResourceItem.TYPE_XML:
                    case b.ResourceItem.TYPE_JSON:
                    case b.ResourceItem.TYPE_SHEET:
                        break;
                    case "png":
                    case "jpg":
                    case "gif":
                        a = b.ResourceItem.TYPE_IMAGE;
                        break;
                    case "fnt":
                        a = b.ResourceItem.TYPE_FONT;
                        break;
                    case "txt":
                        a = b.ResourceItem.TYPE_TEXT;
                        break;
                    case "mp3":
                    case "ogg":
                    case "mpeg":
                    case "wav":
                    case "m4a":
                    case "mp4":
                    case "aiff":
                    case "wma":
                    case "mid":
                        a = b.ResourceItem.TYPE_SOUND;
                        break;
                    default:
                        a = b.ResourceItem.TYPE_BIN
                }
                return a
            };
            c.prototype.onResourceItemComp = function(a) {
                var b =
                    this.asyncDic[a.name];
                delete this.asyncDic[a.name];
                a = this.getAnalyzerByType(a.type);
                for (var c = b.length, d = 0; d < c; d++) {
                    var e = b[d],
                        k = a.getRes(e.key);
                    e.compFunc.call(e.thisObject, k)
                }
            };
            c.prototype.destroyRes = function(a) {
                var b = this.resConfig.getRawGroupByName(a);
                if (b) {
                    var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
                    a = b.length;
                    for (var d = 0; d < a; d++) {
                        c = b[d];
                        c.loaded = !1;
                        var e = this.getAnalyzerByType(c.type);
                        e.destroyRes(c.name)
                    }
                    return !0
                }
                b = this.resConfig.getType(a);
                if ("" == b) return !1;
                c = this.resConfig.getRawResourceItem(a);
                c.loaded = !1;
                e = this.getAnalyzerByType(b);
                return e.destroyRes(a)
            };
            c.prototype.setMaxLoadingThread = function(a) {
                1 > a && (a = 1);
                this.resLoader.thread = a
            };
            c.GROUP_CONFIG = "RES__CONFIG";
            return c
        }(egret.EventDispatcher);
        d.prototype.__class__ = "Resource";
        var c = new d
    })(RES || (RES = {}));
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(b) {
                "undefined" === typeof b && (b = 60);
                c.call(this);
                this.frameRate = b;
                this._time = 0;
                60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
                a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
                    return window.setTimeout(a, 1E3 / b)
                });
                a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                    return window.clearTimeout(a)
                });
                a.instance = this;
                this.registerListener()
            }
            __extends(a, c);
            a.prototype.enterFrame = function() {
                var c = a.instance,
                    d = a._thisObject,
                    m = a._callback,
                    l = b.getTimer();
                m.call(d,
                    l - c._time);
                c._time = l;
                c._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame)
            };
            a.prototype.executeMainLoop = function(b, c) {
                a._callback = b;
                a._thisObject = c;
                this.enterFrame()
            };
            a.prototype.reset = function() {
                var c = a.instance;
                c._requestAnimationId && (c._time = b.getTimer(), a.cancelAnimationFrame.call(window, c._requestAnimationId), c.enterFrame())
            };
            a.prototype.registerListener = function() {
                var b = function() {
                        a.instance.reset()
                    },
                    c = function() {
                        document[d] || b()
                    };
                window.onfocus = b;
                window.onblur = function() {};
                var d, l;
                "undefined" !== typeof document.hidden ? (d = "hidden", l = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (d = "mozHidden", l = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (d = "msHidden", l = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (d = "webkitHidden", l = "webkitvisibilitychange");
                "onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", b, !1);
                d && l && document.addEventListener(l, c, !1)
            };
            return a
        }(b.DeviceContext);
        b.HTML5DeviceContext =
            d;
        d.prototype.__class__ = "egret.HTML5DeviceContext"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                this.canvas = a;
                this.canvasContext = a.getContext("2d");
                var b = this.canvasContext.setTransform,
                    d = this;
                this.canvasContext.setTransform = function(a, c, e, k, n, p) {
                    d._matrixA = a;
                    d._matrixB = c;
                    d._matrixC = e;
                    d._matrixD = k;
                    d._matrixTx = n;
                    d._matrixTy = p;
                    b.call(d.canvasContext, a, c, e, k, n, p)
                };
                this._matrixA = 1;
                this._matrixC = this._matrixB = 0;
                this._matrixD = 1;
                this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
                c.call(this)
            }
            __extends(a, c);
            a.prototype.clearScreen = function() {
                this.setTransform(b.Matrix.identity.identity());
                for (var a = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, d = a.length; c < d; c++) {
                    var l = a[c];
                    this.clearRect(l.x + this._transformTx, l.y + this._transformTy, l.width, l.height)
                }
                this.renderCost = 0
            };
            a.prototype.clearRect = function(a, b, c, d) {
                this.canvasContext.clearRect(a, b, c, d)
            };
            a.prototype.drawImage = function(a, d, m, l, f, g, k, n, p) {
                d /= b.MainContext.instance.rendererContext.texture_scale_factor;
                m /= b.MainContext.instance.rendererContext.texture_scale_factor;
                l /= b.MainContext.instance.rendererContext.texture_scale_factor;
                f /= b.MainContext.instance.rendererContext.texture_scale_factor;
                a = a._bitmapData;
                g += this._transformTx;
                k += this._transformTy;
                var q = b.getTimer();
                this.canvasContext.drawImage(a, d, m, l, f, g, k, n, p);
                c.prototype.drawImage.call(this, a, d, m, l, f, g, k, n, p);
                this.renderCost += b.getTimer() - q
            };
            a.prototype.setTransform = function(a) {
                1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx =
                    this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
            };
            a.prototype.setAlpha = function(a, c) {
                a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
                c ? (this.blendValue = c, this.canvasContext.globalCompositeOperation = c) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = b.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = b.BlendMode.NORMAL)
            };
            a.prototype.setupFont = function(a) {
                var b = this.canvasContext,
                    c = a.italic ? "italic " : "normal ",
                    c = c + (a.bold ? "bold " : "normal "),
                    c = c + (a.size + "px " + a.fontFamily);
                b.font = c;
                b.textAlign = "left";
                b.textBaseline = "middle"
            };
            a.prototype.measureText = function(a) {
                return this.canvasContext.measureText(a).width
            };
            a.prototype.drawText = function(a, b, d, l, f) {
                var g = a._strokeColorString,
                    k = a.stroke,
                    n = this.canvasContext;
                n.fillStyle = a._textColorString;
                n.strokeStyle = g;
                k && (n.lineWidth = 2 * k, n.strokeText(b, d + this._transformTx, l + this._transformTy,
                    f || 65535));
                n.fillText(b, d + this._transformTx, l + this._transformTy, f || 65535);
                c.prototype.drawText.call(this, a, b, d, l, f)
            };
            a.prototype.strokeRect = function(a, b, c, d, f) {
                this.canvasContext.strokeStyle = f;
                this.canvasContext.strokeRect(a, b, c, d)
            };
            a.prototype.pushMask = function(a) {
                this.canvasContext.save();
                this.canvasContext.beginPath();
                this.canvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
                this.canvasContext.clip();
                this.canvasContext.closePath()
            };
            a.prototype.popMask = function() {
                this.canvasContext.restore();
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
            };
            return a
        }(b.RendererContext);
        b.HTML5CanvasRenderer = d;
        d.prototype.__class__ = "egret.HTML5CanvasRenderer"
    })(egret);
    var egret_h5_graphics;
    (function(b) {
        b.beginFill = function(b, a) {
            "undefined" === typeof a && (a = 1);
            var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
            this.fillStyleColor = e;
            this.commandQueue.push(new d(this._setStyle, this, [e]))
        };
        b.drawRect = function(b, a, e, h) {
            this.commandQueue.push(new d(function(a, b, c, d) {
                var e = this.renderContext;
                this.canvasContext.beginPath();
                this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
                this.canvasContext.closePath()
            }, this, [b, a, e, h]));
            this._fill()
        };
        b.drawCircle = function(b, a, e) {
            this.commandQueue.push(new d(function(a,
                                                  b, c) {
                var d = this.renderContext;
                this.canvasContext.beginPath();
                this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
                this.canvasContext.closePath()
            }, this, [b, a, e]));
            this._fill()
        };
        b.lineStyle = function(b, a, e, h, m, l, f, g) {
            "undefined" === typeof b && (b = NaN);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof e && (e = 1);
            "undefined" === typeof h && (h = !1);
            "undefined" === typeof m && (m = "normal");
            "undefined" === typeof l && (l = null);
            "undefined" === typeof f && (f = null);
            "undefined" === typeof g && (g = 3);
            this.strokeStyleColor &&
            (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
            this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
            this.commandQueue.push(new d(function(a, b) {
                this.canvasContext.lineWidth = a;
                this.canvasContext.strokeStyle = b;
                this.canvasContext.beginPath()
            }, this, [b, a]));
            "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
            this.moveTo(this.lineX, this.lineY)
        };
        b.lineTo = function(b, a) {
            this.commandQueue.push(new d(function(a, b) {
                var c = this.renderContext;
                this.canvasContext.lineTo(c._transformTx +
                    a, c._transformTy + b)
            }, this, [b, a]));
            this.lineX = b;
            this.lineY = a
        };
        b.curveTo = function(b, a, e, h) {
            this.commandQueue.push(new d(function(a, b, c, d) {
                var e = this.renderContext;
                this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, c, d)
            }, this, [b, a, e, h]));
            this.lineX = e;
            this.lineY = h
        };
        b.moveTo = function(b, a) {
            this.commandQueue.push(new d(function(a, b) {
                var c = this.renderContext;
                this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
            }, this, [b, a]))
        };
        b.clear = function() {
            this.lineY = this.lineX = this.commandQueue.length =
                0;
            this.fillStyleColor = this.strokeStyleColor = null
        };
        b.createEndFillCommand = function() {
            this.endFillCommand || (this.endFillCommand = new d(function() {
                this.canvasContext.fill();
                this.canvasContext.closePath()
            }, this, null))
        };
        b.endFill = function() {
            null != this.fillStyleColor && this._fill();
            this.fillStyleColor = null
        };
        b._fill = function() {
            this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
        };
        b.createEndLineCommand = function() {
            this.endLineCommand || (this.endLineCommand = new d(function() {
                this.canvasContext.stroke();
                this.canvasContext.closePath()
            }, this, null))
        };
        b._draw = function(b) {
            this.renderContext = b;
            b = this.canvasContext = this.renderContext.canvasContext;
            b.save();
            var a = this.commandQueue.length;
            this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
            for (var d = 0; d < a; d++) {
                var h = this.commandQueue[d];
                h.method.apply(h.thisObject, h.args)
            }
            b.restore()
        };
        var d = function() {
            return function(b, a, d) {
                this.method =
                    b;
                this.thisObject = a;
                this.args = d
            }
        }();
        d.prototype.__class__ = "Command";
        b._setStyle = function(b) {
            this.canvasContext.fillStyle = b;
            this.canvasContext.beginPath()
        };
        b.init = function() {
            for (var c in b) egret.Graphics.prototype[c] = b[c];
            egret.RendererContext.createRendererContext = function(a) {
                return new egret.HTML5CanvasRenderer(a)
            }
        }
    })(egret_h5_graphics || (egret_h5_graphics = {}));
    egret_h5_graphics.init();
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                c.call(this);
                this.size = 2E3;
                this.vertSize = 6;
                this.contextLost = !1;
                this.glContextId = 0;
                this.currentBlendMode = "";
                this.currentBaseTexture = null;
                this.currentBatchSize = 0;
                this.maskList = [];
                this.maskDataFreeList = [];
                this.canvasContext = document.createElement("canvas").getContext("2d");
                console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
                this.canvas = a;
                a.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
                a.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
                this.projectionX = a.width / 2;
                this.projectionY = -a.height / 2;
                a = 6 * this.size;
                this.vertices = new Float32Array(4 * this.size * this.vertSize);
                this.indices = new Uint16Array(a);
                for (var d = 0, m = 0; d < a; d += 6, m += 4) this.indices[d + 0] = m + 0, this.indices[d + 1] = m + 1, this.indices[d + 2] = m + 2, this.indices[d + 3] = m + 0, this.indices[d + 4] = m + 2, this.indices[d + 5] = m + 3;
                this.initWebGL();
                this.shaderManager = new b.WebGLShaderManager(this.gl);
                this.worldTransform = new b.Matrix;
                this.initBlendMode();
                b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER,
                    this._draw, this);
                b.TextField.prototype._draw = function(a) {
                    this.getDirty() && (this.cacheAsBitmap = !0);
                    b.DisplayObject.prototype._draw.call(this, a)
                }
            }
            __extends(a, c);
            a.prototype.handleContextLost = function() {
                this.contextLost = !0
            };
            a.prototype.handleContextRestored = function() {
                this.initWebGL();
                this.shaderManager.setContext(this.gl);
                this.contextLost = !1
            };
            a.prototype.initWebGL = function() {
                for (var a = {
                    stencil: !0
                }, b, c = ["experimental-webgl", "webgl"], d = 0; d < c.length; d++) {
                    try {
                        b = this.canvas.getContext(c[d], a)
                    } catch (f) {}
                    if (b) break
                }
                if (!b) throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
                this.setContext(b)
            };
            a.prototype.setContext = function(a) {
                this.gl = a;
                a.id = this.glContextId++;
                this.vertexBuffer = a.createBuffer();
                this.indexBuffer = a.createBuffer();
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
                a.disable(a.DEPTH_TEST);
                a.disable(a.CULL_FACE);
                a.enable(a.BLEND);
                a.colorMask(!0, !0, !0, !0)
            };
            a.prototype.initBlendMode = function() {
                a.blendModesWebGL[b.BlendMode.NORMAL] =
                    [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
                a.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.DST_ALPHA]
            };
            a.prototype.start = function() {
                if (!this.contextLost) {
                    var a = this.gl;
                    a.activeTexture(a.TEXTURE0);
                    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                    var b = this.shaderManager.defaultShader;
                    a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                    var c = 4 * this.vertSize;
                    a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
                    a.vertexAttribPointer(b.aTextureCoord,
                        2, a.FLOAT, !1, c, 8);
                    a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
                }
            };
            a.prototype.clearScreen = function() {
                var a = this.gl;
                a.colorMask(!0, !0, !0, !0);
                for (var c = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, l = c.length; d < l; d++) {
                    var f = c[d];
                    a.viewport(f.x, f.y, f.width, f.height);
                    a.bindFramebuffer(a.FRAMEBUFFER, null);
                    a.clearColor(0, 0, 0, 0);
                    a.clear(a.COLOR_BUFFER_BIT)
                }
                this.renderCost = 0
            };
            a.prototype.setBlendMode = function(c) {
                c || (c = b.BlendMode.NORMAL);
                if (this.currentBlendMode != c) {
                    var d = a.blendModesWebGL[c];
                    d && (this.gl.blendFunc(d[0], d[1]), this.currentBlendMode = c)
                }
            };
            a.prototype.drawImage = function(a, c, d, l, f, g, k, n, p) {
                if (!this.contextLost) {
                    var q = b.MainContext.instance.rendererContext.texture_scale_factor;
                    c /= q;
                    d /= q;
                    l /= q;
                    f /= q;
                    this.createWebGLTexture(a);
                    if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(), this.currentBaseTexture = a.webGLTexture;
                    var t = this.worldTransform,
                        r = t.a,
                        s = t.b,
                        u = t.c,
                        v = t.d,
                        x = t.tx,
                        y = t.ty;
                    0 == g && 0 == k || t.append(1, 0, 0, 1, g, k);
                    1 == l / n && 1 == f / p || t.append(n / l,
                        0, 0, p / f, 0, 0);
                    g = t.a;
                    k = t.b;
                    n = t.c;
                    p = t.d;
                    var q = t.tx,
                        w = t.ty;
                    t.a = r;
                    t.b = s;
                    t.c = u;
                    t.d = v;
                    t.tx = x;
                    t.ty = y;
                    r = a._sourceWidth;
                    s = a._sourceHeight;
                    a = l;
                    t = f;
                    c /= r;
                    d /= s;
                    l /= r;
                    f /= s;
                    r = this.vertices;
                    s = 4 * this.currentBatchSize * this.vertSize;
                    u = this.worldAlpha;
                    r[s++] = q;
                    r[s++] = w;
                    r[s++] = c;
                    r[s++] = d;
                    r[s++] = u;
                    r[s++] = 16777215;
                    r[s++] = g * a + q;
                    r[s++] = k * a + w;
                    r[s++] = l + c;
                    r[s++] = d;
                    r[s++] = u;
                    r[s++] = 16777215;
                    r[s++] = g * a + n * t + q;
                    r[s++] = p * t + k * a + w;
                    r[s++] = l + c;
                    r[s++] = f + d;
                    r[s++] = u;
                    r[s++] = 16777215;
                    r[s++] = n * t + q;
                    r[s++] = p * t + w;
                    r[s++] = c;
                    r[s++] = f + d;
                    r[s++] = u;
                    r[s++] =
                        16777215;
                    this.currentBatchSize++
                }
            };
            a.prototype._draw = function() {
                if (0 != this.currentBatchSize && !this.contextLost) {
                    var a = b.getTimer();
                    this.start();
                    var c = this.gl;
                    c.bindTexture(c.TEXTURE_2D, this.currentBaseTexture);
                    var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    c.bufferSubData(c.ARRAY_BUFFER, 0, d);
                    c.drawElements(c.TRIANGLES, 6 * this.currentBatchSize, c.UNSIGNED_SHORT, 0);
                    this.currentBatchSize = 0;
                    this.renderCost += b.getTimer() - a;
                    b.Profiler.getInstance().onDrawImage()
                }
            };
            a.prototype.setTransform =
                function(a) {
                    var b = this.worldTransform;
                    b.a = a.a;
                    b.b = a.b;
                    b.c = a.c;
                    b.d = a.d;
                    b.tx = a.tx;
                    b.ty = a.ty
                };
            a.prototype.setAlpha = function(a, b) {
                this.worldAlpha = a;
                b && this.setBlendMode(b)
            };
            a.prototype.createWebGLTexture = function(a) {
                if (!a.webGLTexture) {
                    var b = this.gl;
                    a.webGLTexture = b.createTexture();
                    b.bindTexture(b.TEXTURE_2D, a.webGLTexture);
                    b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                    b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a._bitmapData);
                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                    b.bindTexture(b.TEXTURE_2D, null)
                }
            };
            a.prototype.pushMask = function(a) {
                this._draw();
                var b = this.gl;
                0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
                var c = this.maskDataFreeList.pop();
                c ? (c.x = a.x, c.y = a.y, c.w = a.width, c.h = a.height) : c = {
                    x: a.x,
                    y: a.y,
                    w: a.width,
                    h: a.height
                };
                this.maskList.push(c);
                b.colorMask(!1, !1, !1, !1);
                b.stencilOp(b.KEEP, b.KEEP, b.INCR);
                this.renderGraphics(c);
                b.colorMask(!0, !0, !0, !0);
                b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
                b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
            };
            a.prototype.popMask = function() {
                this._draw();
                var a = this.gl,
                    b = this.maskList.pop();
                b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
                0 == this.maskList.length &&
                a.disable(a.STENCIL_TEST)
            };
            a.prototype.setupFont = function(a) {
                var b = this.canvasContext,
                    c = a.italic ? "italic " : "normal ",
                    c = c + (a.bold ? "bold " : "normal "),
                    c = c + (a.size + "px " + a.fontFamily);
                b.font = c;
                b.textAlign = "left";
                b.textBaseline = "middle"
            };
            a.prototype.measureText = function(a) {
                return this.canvasContext.measureText(a).width
            };
            a.prototype.renderGraphics = function(a) {
                var b = this.gl,
                    c = this.shaderManager.primitiveShader;
                this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints =
                    [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
                this.updateGraphics(a);
                this.shaderManager.activateShader(c);
                b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
                b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
                b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
                b.uniform2f(c.offsetVector, 0, 0);
                b.uniform3fv(c.tintColor, [1, 1, 1]);
                b.uniform1f(c.alpha, this.worldAlpha);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
                b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
                this.shaderManager.activateShader(this.shaderManager.defaultShader)
            };
            a.prototype.updateGraphics = function(a) {
                var b = this.gl;
                this.buildRectangle(a);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints),
                    b.STATIC_DRAW);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
            };
            a.prototype.buildRectangle = function(a) {
                var b = a.x,
                    c = a.y,
                    d = a.w;
                a = a.h;
                var f = this.graphicsPoints,
                    g = this.graphicsIndices,
                    k = f.length / 6;
                f.push(b, c);
                f.push(0, 0, 0, 1);
                f.push(b + d, c);
                f.push(0, 0, 0, 1);
                f.push(b, c + a);
                f.push(0, 0, 0, 1);
                f.push(b + d, c + a);
                f.push(0, 0, 0, 1);
                g.push(k, k, k + 1, k + 2, k + 3, k + 3)
            };
            a.blendModesWebGL = {};
            return a
        }(b.RendererContext);
        b.WebGLRenderer =
            d;
        d.prototype.__class__ = "egret.WebGLRenderer"
    })(egret);
    (function(b) {
        var d = function() {
            function b() {}
            b.compileProgram = function(a, d, h) {
                h = b.compileFragmentShader(a, h);
                d = b.compileVertexShader(a, d);
                var m = a.createProgram();
                a.attachShader(m, d);
                a.attachShader(m, h);
                a.linkProgram(m);
                a.getProgramParameter(m, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
                return m
            };
            b.compileFragmentShader = function(a, d) {
                return b._compileShader(a, d, a.FRAGMENT_SHADER)
            };
            b.compileVertexShader = function(a, d) {
                return b._compileShader(a, d, a.VERTEX_SHADER)
            };
            b._compileShader =
                function(a, b, c) {
                    c = a.createShader(c);
                    a.shaderSource(c, b);
                    a.compileShader(c);
                    return a.getShaderParameter(c, a.COMPILE_STATUS) ? c : (console.log(a.getShaderInfoLog(c)), null)
                };
            b.checkCanUseWebGL = function() {
                if (void 0 == b.canUseWebGL) try {
                    var a = document.createElement("canvas");
                    b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
                } catch (d) {
                    b.canUseWebGL = !1
                }
                return b.canUseWebGL
            };
            return b
        }();
        b.WebGLUtils = d;
        d.prototype.__class__ = "egret.WebGLUtils"
    })(egret);
    (function(b) {
        var d = function() {
            function b(a) {
                this.maxAttibs = 10;
                this.attribState = [];
                this.tempAttribState = [];
                for (var c = 0; c < this.maxAttibs; c++) this.attribState[c] = !1;
                this.setContext(a)
            }
            b.prototype.setContext = function(b) {
                this.gl = b;
                this.primitiveShader = new a(b);
                this.defaultShader = new c(b);
                this.activateShader(this.defaultShader)
            };
            b.prototype.activateShader = function(a) {
                this.gl.useProgram(a.program);
                this.setAttribs(a.attributes)
            };
            b.prototype.setAttribs = function(a) {
                var b, c;
                c = this.tempAttribState.length;
                for (b =
                         0; b < c; b++) this.tempAttribState[b] = !1;
                c = a.length;
                for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
                a = this.gl;
                c = this.attribState.length;
                for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
            };
            return b
        }();
        b.WebGLShaderManager = d;
        d.prototype.__class__ = "egret.WebGLShaderManager";
        var c = function() {
            function a(b) {
                this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;\n   vColor = vec4(color * aColor.x, aColor.x);\n}";
                this.program = null;
                this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
                this.gl = b;
                this.init()
            }
            a.prototype.init = function() {
                var a = this.gl,
                    c = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
                a.useProgram(c);
                this.uSampler = a.getUniformLocation(c, "uSampler");
                this.projectionVector = a.getUniformLocation(c, "projectionVector");
                this.offsetVector =
                    a.getUniformLocation(c, "offsetVector");
                this.dimensions = a.getUniformLocation(c, "dimensions");
                this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
                this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord");
                this.colorAttribute = a.getAttribLocation(c, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
                this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                this.program = c
            };
            return a
        }();
        b.EgretShader = c;
        c.prototype.__class__ = "egret.EgretShader";
        var a = function() {
            function a(b) {
                this.alpha =
                    this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
                this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
                this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
                this.gl = b;
                this.init()
            }
            a.prototype.init = function() {
                var a = this.gl,
                    c = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
                a.useProgram(c);
                this.projectionVector = a.getUniformLocation(c, "projectionVector");
                this.offsetVector = a.getUniformLocation(c, "offsetVector");
                this.tintColor = a.getUniformLocation(c, "tint");
                this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
                this.colorAttribute = a.getAttribLocation(c, "aColor");
                this.attributes = [this.aVertexPosition, this.colorAttribute];
                this.translationMatrix =
                    a.getUniformLocation(c, "translationMatrix");
                this.alpha = a.getUniformLocation(c, "alpha");
                this.program = c
            };
            return a
        }();
        b.PrimitiveShader = a;
        a.prototype.__class__ = "egret.PrimitiveShader"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a() {
                c.call(this)
            }
            __extends(a, c);
            a.prototype.proceed = function(a) {
                function c(d) {
                    b.IOErrorEvent.dispatchIOErrorEvent(a)
                }

                function d(c) {
                    switch (a.dataFormat) {
                        case b.URLLoaderDataFormat.TEXT:
                            a.data = f.responseText;
                            break;
                        case b.URLLoaderDataFormat.VARIABLES:
                            a.data = new b.URLVariables(f.responseText);
                            break;
                        case b.URLLoaderDataFormat.BINARY:
                            a.data = f.response;
                            break;
                        default:
                            a.data = f.responseText
                    }
                    b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                }
                if (a.dataFormat ==
                    b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
                else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
                else {
                    var l = a._request,
                        f = this.getXHR();
                    f.onerror = c;
                    f.onload = d;
                    f.open(l.method, l.url, !0);
                    this.setResponseType(f, a.dataFormat);
                    l.method != b.URLRequestMethod.GET && l.data ? l.data instanceof b.URLVariables ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(l.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(l.data)) : f.send()
                }
            };
            a.prototype.loadSound =
                function(a) {
                    function c(f) {
                        window.clearTimeout(l.__timeoutId);
                        l.removeEventListener("canplaythrough", c, !1);
                        l.removeEventListener("error", d, !1);
                        f = new b.Sound;
                        f.audio = l;
                        a.data = f;
                        b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                    }

                    function d(f) {
                        window.clearTimeout(l.__timeoutId);
                        l.removeEventListener("canplaythrough", c, !1);
                        l.removeEventListener("error", d, !1);
                        b.IOErrorEvent.dispatchIOErrorEvent(a)
                    }
                    var l = new Audio(a._request.url);
                    l.__timeoutId = window.setTimeout(c, 100);
                    l.addEventListener("canplaythrough",
                        c, !1);
                    l.addEventListener("error", d, !1);
                    l.load()
                };
            a.prototype.getXHR = function() {
                return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
            };
            a.prototype.setResponseType = function(a, c) {
                switch (c) {
                    case b.URLLoaderDataFormat.TEXT:
                    case b.URLLoaderDataFormat.VARIABLES:
                        a.responseType = b.URLLoaderDataFormat.TEXT;
                        break;
                    case b.URLLoaderDataFormat.BINARY:
                        a.responseType = "arraybuffer";
                        break;
                    default:
                        a.responseType = c
                }
            };
            a.prototype.loadTexture = function(a) {
                var c = a._request,
                    d = new Image;
                d.crossOrigin = "Anonymous";
                d.onload = function(c) {
                    d.onerror = null;
                    d.onload = null;
                    c = new b.Texture;
                    c._setBitmapData(d);
                    a.data = c;
                    b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                };
                d.onerror = function(c) {
                    d.onerror = null;
                    d.onload = null;
                    b.IOErrorEvent.dispatchIOErrorEvent(a)
                };
                d.src = c.url
            };
            return a
        }(b.NetContext);
        b.HTML5NetContext = d;
        d.prototype.__class__ = "egret.HTML5NetContext"
    })(egret);
    __extends = this.__extends || function(b, d) {
        function c() {
            this.constructor = b
        }
        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
        c.prototype = d.prototype;
        b.prototype = new c
    };
    (function(b) {
        var d = function(c) {
            function a(a) {
                c.call(this);
                this.canvas = a;
                this._isTouchDown = !1
            }
            __extends(a, c);
            a.prototype.run = function() {
                var a = this;
                window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(b) {
                    a._onTouchBegin(b);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1), this.canvas.addEventListener("MSPointerMove", function(b) {
                    a._onTouchMove(b);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1), this.canvas.addEventListener("MSPointerUp", function(b) {
                    a._onTouchEnd(b);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
                window.addEventListener("mousedown", function(b) {
                    a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
                });
                window.addEventListener("mouseup", function(b) {
                    a._isTouchDown && a.inOutOfCanvas(b) && a.dispatchLeaveStageEvent();
                    a._isTouchDown = !1
                })
            };
            a.prototype.addMouseListener = function() {
                var a = this;
                this.canvas.addEventListener("mousedown", function(b) {
                    a._onTouchBegin(b)
                });
                this.canvas.addEventListener("mousemove", function(b) {
                    a._onTouchMove(b)
                });
                this.canvas.addEventListener("mouseup", function(b) {
                    a._onTouchEnd(b)
                })
            };
            a.prototype.addTouchListener = function() {
                var a = this;
                this.canvas.addEventListener("touchstart", function(b) {
                    for (var c = b.changedTouches.length, d = 0; d < c && d < a.maxTouches; d++) a._onTouchBegin(b.changedTouches[d]);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1);
                this.canvas.addEventListener("touchmove",
                    function(b) {
                        for (var c = b.changedTouches.length, d = 0; d < c && d < a.maxTouches; d++) a._onTouchMove(b.changedTouches[d]);
                        b.stopPropagation();
                        b.preventDefault()
                    }, !1);
                this.canvas.addEventListener("touchend", function(b) {
                    for (var c = b.changedTouches.length, d = 0; d < c && d < a.maxTouches; d++) a._onTouchEnd(b.changedTouches[d]);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1);
                this.canvas.addEventListener("touchcancel", function(b) {
                    for (var c = b.changedTouches.length, d = 0; d < c && d < a.maxTouches; d++) a._onTouchEnd(b.changedTouches[d]);
                    b.stopPropagation();
                    b.preventDefault()
                }, !1)
            };
            a.prototype.inOutOfCanvas = function(a) {
                a = this.getLocation(this.canvas, a);
                return 0 > a.x || 0 > a.y || a.x > this.canvas.width || a.y > this.canvas.height ? !0 : !1
            };
            a.prototype.dispatchLeaveStageEvent = function() {
                b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
            };
            a.prototype._onTouchBegin = function(a) {
                var b = this.getLocation(this.canvas, a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier);
                this.onTouchBegan(b.x, b.y, c)
            };
            a.prototype._onTouchMove = function(a) {
                var b = this.getLocation(this.canvas,
                        a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier);
                this.onTouchMove(b.x, b.y, c)
            };
            a.prototype._onTouchEnd = function(a) {
                var b = this.getLocation(this.canvas, a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier);
                this.onTouchEnd(b.x, b.y, c)
            };
            a.prototype.getLocation = function(a, c) {
                var d = document.documentElement,
                    l = window,
                    f, g;
                "function" === typeof a.getBoundingClientRect ? (g = a.getBoundingClientRect(), f = g.left, g = g.top) : g = f = 0;
                f += l.pageXOffset - d.clientLeft;
                g += l.pageYOffset - d.clientTop;
                null != c.pageX ? (d = c.pageX,
                    l = c.pageY) : (f -= document.body.scrollLeft, g -= document.body.scrollTop, d = c.clientX, l = c.clientY);
                var k = b.Point.identity;
                k.x = (d - f) / b.StageDelegate.getInstance().getScaleX();
                k.y = (l - g) / b.StageDelegate.getInstance().getScaleY();
                return k
            };
            return a
        }(b.TouchContext);
        b.HTML5TouchContext = d;
        d.prototype.__class__ = "egret.HTML5TouchContext"
    })(egret);
    var utils;
    (function(b) {
        var d = function() {
            function b() {}
            b.hitTest = function(a, b) {
                var c = a.getBounds(),
                    d = b.getBounds();
                c.x = a.x;
                c.y = a.y;
                d.x = b.x;
                d.y = b.y;
                return c.intersects(d)
            };
            return b
        }();
        b.GameUtil = d;
        d.prototype.__class__ = "utils.GameUtil";
        b.createBitmapByName = function(b) {
            var a = new egret.Bitmap;
            b = RES.getRes(b);
            a.texture = b;
            return a
        };
        b.createRectangular = function(b, a, d, h, m, l) {
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof d && (d = 480);
            "undefined" === typeof h && (h = 640);
            "undefined" === typeof m &&
            (m = 1);
            "undefined" === typeof l && (l = 0);
            var f = new egret.Sprite;
            f.graphics.beginFill(l, m);
            f.graphics.drawRect(b, a, d, h);
            f.graphics.endFill();
            f.width = d;
            f.height = h;
            return f
        };
        b.createCircle = function(b, a, d, h, m) {
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof d && (d = 10);
            "undefined" === typeof h && (h = 1);
            "undefined" === typeof m && (m = 16777215);
            var l = new egret.Sprite;
            l.graphics.beginFill(m, h);
            l.graphics.drawCircle(b, a, d);
            l.graphics.endFill();
            return l
        };
        b.createTextLabel = function(b, a, d,
                                     h, m, l, f, g, k, n, p, q) {
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof d && (d = "left");
            "undefined" === typeof h && (h = "none");
            "undefined" === typeof m && (m = 14);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof g && (g = 0);
            "undefined" === typeof k && (k = 0);
            "undefined" === typeof n && (n = 0);
            "undefined" === typeof p && (p = 0);
            "undefined" === typeof q && (q = 0);
            b = new egret.TextField;
            b.textColor = a;
            b.textAlign = d;
            b.text = h;
            b.size = m;
            0 != l && (b.width = l);
            0 != f && 0 != g && (b.strokeColor = f, b.stroke = g);
            b.rotation = p;
            0 !=
                q && (b.skewX = q);
            b.x = k;
            b.y = n;
            return b
        };
        b.randomInt = function(b, a) {
            if (0 >= a - b) return 0;
            var d = a - b;
            return Math.floor(Math.random() * d) + b
        };
        b.createBitmap = function(b, a, d, h) {
            "undefined" === typeof d && (d = 0);
            "undefined" === typeof h && (h = 0);
            var m = new egret.Bitmap;
            m.texture = b.getTexture(a);
            m.x = d;
            m.y = h;
            return m
        }
    })(utils || (utils = {}));
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        StartBtn = function(b) {
            function d() {
                b.call(this);
                this.sprite = new egret.Sprite;
                this.downBool = !1;
                this.sprite = utils.createCircle(5, 5, Settings.stageWidth / 4, 1, 10427238);
                this.addChild(this.sprite);
                this.sprite = utils.createCircle(0, 0, Settings.stageWidth / 4, 1, 16777215);
                this.addChild(this.sprite);
                var c = new egret.TextField,
                    c = utils.createTextLabel(c,
                        7342404, "center", "开始", 60, 0, 7342404, 3, 0, 0);
                this.addChild(c);
                c.x = (this.sprite.width - c.width) / 2 + this.sprite.x;
                c.y = (this.sprite.height - c.height) / 2 + this.sprite.y
            }
            __extends(d, b);
            d.prototype.down = function() {
                this.downBool || (this.sprite.x += 5, this.sprite.y += 5, this.downBool = !0)
            };
            d.prototype.up = function() {
                this.downBool && (this.sprite.x -= 5, this.sprite.y -= 5, this.downBool = !1)
            };
            return d
        }(egret.Sprite);
    StartBtn.prototype.__class__ = "StartBtn";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        DottedLine = function(b) {
            function d(c, a, d, h, m) {
                "undefined" === typeof c && (c = 400);
                "undefined" === typeof a && (a = 2);
                "undefined" === typeof d && (d = 20);
                "undefined" === typeof h && (h = 16777215);
                "undefined" === typeof m && (m = 0);
                b.call(this);
                c /= d;
                for (var l = new egret.Sprite, f = 1; f <= d; f++) l = 1 == f || 0 == f % 2 || f == d ? utils.createRectangular(0, 0, c, a, 1, h) : utils.createRectangular(0,
                    0, c, a, 1, m), this.addChild(l), l.x = (f - 1) * c, l.y = 0
            }
            __extends(d, b);
            return d
        }(egret.Sprite);
    DottedLine.prototype.__class__ = "DottedLine";
    var Settings = function() {
        function b() {}
        b.initVar = function(d, c) {
            b.stageWidth = d;
            b.stageHeight = c
        };
        b.setScoreText = function(d) {
            b.score += d;
            d = b.score.toString();
            var c = d.length;
            console.log(d.length);
            for (var a = ""; 4 > c;) a += "0", c += 1;
            GameUI.scoreText.text = (a + d).toString()
        };
        b.stageWidth = 480;
        b.stageHeight = 640;
        b.score = 0;
        return b
    }();
    Settings.prototype.__class__ = "Settings";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        GameUI = function(b) {
            function d() {
                b.call(this);
                this.GameBg = new egret.Sprite;
                this.runway = new egret.Sprite;
                this.nameText = new egret.TextField;
                this.nameText = utils.createTextLabel(this.nameText, 16341428, "left", "疯狂的方块", 70, 0, 16341428, 2);
                this.ui_line = new DottedLine(230, 5, 20, 14952082, 12587381);
                this.GameBg = utils.createRectangular(0, 0, Settings.stageWidth,
                    Settings.stageHeight, 1, 14952082);
                this.runway = utils.createRectangular(0, 0, 230, Settings.stageHeight, 1, 12587381);
                this.GameBg.width = Settings.stageWidth;
                this.GameBg.height = Settings.stageHeight;
                d.scoreText = new egret.TextField;
                d.scoreText = utils.createTextLabel(d.scoreText, 16341428, "left", "0000", 130, 0, 16341428, 0, 0, 0, 90);
                this.addChild(this.GameBg);
                this.GameBg.touchEnabled = !0;
                this.GameBg.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
                this.btn_start = new StartBtn;
                this.plan_start(!0)
            }
            __extends(d,
                b);
            d.prototype.plan_start = function(b) {
                b ? (this.addChild(this.btn_start), this.addChild(this.nameText), this.nameText.x = (Settings.stageWidth - this.nameText.width) / 2, this.nameText.y = 100, this.btn_start.width = Settings.stageWidth / 2, this.btn_start.height = Settings.stageWidth / 2, this.btn_start.touchChildren = !1, this.btn_start.x = Settings.stageWidth / 2, this.btn_start.y = this.nameText.y + this.nameText.height + 150, this.btn_start.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start_btn_tap, this), this.btn_start.addEventListener(egret.TouchEvent.TOUCH_END,
                    this.start_btn_end, this), this.btn_start.touchEnabled = !0) : (this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start_btn_tap, this), this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_END, this.start_btn_end, this), this.removeChild(this.btn_start), this.removeChild(this.nameText))
            };
            d.prototype.plan_play = function(b) {
                b ? (this.addChild(this.runway), this.runway.x = 70, this.addChild(this.ui_line), this.ui_line.x = 70, this.ui_line.y = 50, this.addChild(d.scoreText), d.scoreText.x = 450, d.scoreText.y =
                    50) : (this.removeChild(this.runway), this.removeChild(this.ui_line))
            };
            d.prototype.start_btn_tap = function(b) {
                this.btn_start.down();
                this.current_btn_name = "btn_start"
            };
            d.prototype.start_btn_end = function(b) {
                this.plan_start(!1);
                this.btn_start.up();
                this.dispatchEvent(new egret.Event("GamePlay", !1, !1));
                this.plan_play(!0)
            };
            d.prototype.onStageTouchEnd = function(b) {
                if ("" != this.current_btn_name) switch (this.current_btn_name) {
                    case "btn_start":
                        this.btn_start.up()
                }
            };
            return d
        }(egret.Sprite);
    GameUI.prototype.__class__ = "GameUI";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        DrawRectBtn = function(b) {
            function d(c, a, d, h, m, l, f) {
                "undefined" === typeof c && (c = 100);
                "undefined" === typeof a && (a = 30);
                "undefined" === typeof d && (d = 1122867);
                "undefined" === typeof h && (h = 2241348);
                "undefined" === typeof m && (m = "btn");
                "undefined" === typeof l && (l = 12);
                "undefined" === typeof f && (f = 16777215);
                b.call(this);
                this.btn = new egret.Sprite;
                this.btn =
                    utils.createRectangular(5, 5, c, a, 1, h);
                this.addChild(this.btn);
                this.btn = utils.createRectangular(0, 0, c, a, 1, d);
                this.addChild(this.btn);
                this.text = new egret.TextField;
                this.text = utils.createTextLabel(this.text, f, "left", m, l);
                this.addChild(this.text);
                this.text.x = (this.btn.width - this.text.width) / 2;
                this.text.y = (this.btn.height - this.text.height) / 2
            }
            __extends(d, b);
            d.prototype.down = function() {
                this.btn.x += 5;
                this.btn.y += 5;
                this.text.x += 5;
                this.text.y += 5
            };
            d.prototype.up = function() {
                this.btn.x -= 5;
                this.btn.y -= 5;
                this.text.x -=
                    5;
                this.text.y -= 5
            };
            return d
        }(egret.Sprite);
    DrawRectBtn.prototype.__class__ = "DrawRectBtn";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        Box = function(b) {
            function d(c, a, d) {
                b.call(this);
                this.colorArray = [16341428, 3064569, 16777215, 7342404];
                this.boxScale = 57.5;
                this.boxBGcolor = 0;
                this.id = c;
                this.listId = a;
                this._index = d;
                this.boxSprite = new egret.Sprite;
                this.boxSprite = utils.createRectangular(5, 5, this.boxScale, this.boxScale, 1, this.boxBGcolor);
                this.boxSprite.alpha = 0.2;
                this.addChild(this.boxSprite);
                this.boxSprite = utils.createRectangular(0, 0, this.boxScale, this.boxScale, 1, this.colorArray[c]);
                this.addChild(this.boxSprite)
            }
            __extends(d, b);
            return d
        }(egret.Sprite);
    Box.prototype.__class__ = "Box";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        OverPlan = function(b) {
            function d() {
                b.call(this);
                this.sprite = new egret.Sprite;
                this.btnIsbool = 0;
                this.sprite = utils.createRectangular(0, 0, Settings.stageWidth, Settings.stageHeight, 0.3, 0);
                this.addChild(this.sprite);
                this.sprite = utils.createRectangular(5, 5, 340, 240, 0.4, 0);
                this.sprite.x = (Settings.stageWidth - this.sprite.width) / 2;
                this.sprite.y = (Settings.stageHeight -
                    this.sprite.height) / 2;
                this.addChild(this.sprite);
                this.sprite = utils.createRectangular(0, 0, 340, 240, 1, 14952082);
                this.addChild(this.sprite);
                this.sprite.x = (Settings.stageWidth - this.sprite.width) / 2;
                this.sprite.y = (Settings.stageHeight - this.sprite.height) / 2;
                var c = new egret.TextField,
                    c = utils.createTextLabel(c, 16407734, "center", "游戏结束", 40);
                this.addChild(c);
                c.y = this.sprite.y + 20;
                c.x = this.sprite.x + 20;
                var a = new DottedLine(340, 4, 15, 16407734, 14952082);
                this.addChild(a);
                a.y = c.y + c.height;
                a.x = this.sprite.x;
                c = utils.createTextLabel(c,
                    16777215, "center", ("得分:" + Settings.score).toString(), 24);
                c.x = this.sprite.x + 10;
                c.y = a.y + a.height + 30;
                this.addChild(c);
                this.rStartBtn = new DrawRectBtn(120, 50, 16777215, 10361701, "重来", 20, 7342404);
                this.addChild(this.rStartBtn);
                this.rStartBtn.x = this.sprite.x + 30;
                this.rStartBtn.y = this.sprite.y + this.sprite.height - this.rStartBtn.height - 20;
                this.shareBtn = new DrawRectBtn(120, 50, 16777215, 10361701, "更多游戏", 20, 7342404);
                this.addChild(this.shareBtn);
                this.shareBtn.x = this.sprite.x + this.sprite.width - this.rStartBtn.width -
                    30;
                this.shareBtn.y = this.rStartBtn.y;
                this.touchEnabled = !0;
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onPlanEnd, this);
                this.rStartBtn.touchEnabled = !0;
                this.shareBtn.touchEnabled = !0;
                this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rStart_being, this);
                this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.rStartBtn_end, this);
                this.shareBtn.touchEnabled = !0;
                this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.shareBtn_begin, this);
                this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_END,
                    this.shareBtn_end, this);
                this.sharPlan = new egret.Sprite;
                this.sharPlan = utils.createRectangular(0, 0, Settings.stageWidth, Settings.stageHeight, 0.3, 0);
                //c = utils.createTextLabel(c, 16777215, "left", "\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u6309\u94ae\n\u9009\u62e9\u5206\u4eab\u5230\u670b\u53cb\u5708", 26);
                //c.x = (480 - c.width) / 2;
                //c.y = (640 - c.height) / 2;
                //this.sharPlan.addChild(c)
            }
            __extends(d, b);
            d.prototype.rStartBtn_end = function(b) {
                this.dispatchEvent(new egret.Event("click_rStart", !1, !1))
            };
            d.prototype.shareBtn_end = function(b) {
                /*
                 this.addChild(this.sharPlan);
                 this.sharPlan.touchEnabled = !0;
                 this.sharPlan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sharBtnClick, this)*/
            };
            d.prototype.sharBtnClick = function(b) {
                this.removeChild(this.sharPlan)
            };
            d.prototype.rStart_being = function(b) {
                this.rStartBtn.down();
                this.btnIsbool = -1
            };
            d.prototype.shareBtn_begin = function(b) {
                //_hmt.push(["_trackEvent", "按钮点击事件", "分享按钮点击"]);
                b.preventDefault();
                // window.location.href=Play68.goHome();
                //LBShare.callShare();
                //this.shareBtn.down();
                //this.btnIsbool = 1
            };
            d.prototype.onPlanEnd = function(b) {
                1 == this.btnIsbool ? this.shareBtn.up() : -1 == this.btnIsbool && this.rStartBtn.up();
                this.btnIsbool = 0
            };
            return d
        }(egret.Sprite);
    OverPlan.prototype.__class__ = "OverPlan";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        ReduceThreeBtn = function(b) {
            function d() {
                b.call(this);
                this.btnMask = new egret.Sprite;
                var c = new egret.Sprite,
                    c = utils.createCircle(0, 0, 40, 1, 12587381);
                this.addChild(c);
                c = new egret.TextField;
                c = utils.createTextLabel(c, 16341428, "left", "- 3", 40, 0, 16341428, 1);
                this.addChild(c);
                c.x = -c.width / 2;
                c.y = -c.height / 2;
                this.btnMask = utils.createCircle(0, 0,
                    40, 1, 0);
                this.addChild(this.btnMask);
                this.btnMask.alpha = 0
            }
            __extends(d, b);
            return d
        }(egret.Sprite);
    ReduceThreeBtn.prototype.__class__ = "ReduceThreeBtn";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        SelectAllBtn = function(b) {
            function d() {
                b.call(this);
                this.btnMask = new egret.Sprite;
                var c = new egret.Sprite,
                    c = utils.createCircle(0, 0, 40, 1, 12587381);
                this.addChild(c);
                c = utils.createCircle(0, 0, 30, 1, 16341428);
                this.addChild(c);
                c = utils.createCircle(0, 0, 25, 1, 12587381);
                this.addChild(c);
                c = utils.createRectangular(0, 0, 15, 5, 1, 16341428);
                this.addChild(c);
                c.x = 10;
                c.y = -2.5;
                c = utils.createRectangular(0, 0, 15, 5, 1, 16341428);
                this.addChild(c);
                c.x = -c.width - 10;
                c.y = -2.5;
                c = utils.createRectangular(0, 0, 15, 5, 1, 16341428);
                c.rotation = 90;
                this.addChild(c);
                c.x = 2.5;
                c.y = 10;
                c = utils.createRectangular(0, 0, 15, 5, 1, 16341428);
                c.rotation = 90;
                c.y = -c.height - 20;
                c.x = 2.5;
                this.addChild(c);
                c = utils.createRectangular(0, 0, 10, 10, 1, 16341428);
                this.addChild(c);
                c.y = -5;
                c.x = -5;
                this.btnMask = utils.createCircle(0, 0, 40, 1, 0);
                this.addChild(this.btnMask);
                this.btnMask.alpha = 0
            }
            __extends(d, b);
            return d
        }(egret.Sprite);
    SelectAllBtn.prototype.__class__ = "SelectAllBtn";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        StopBtn = function(b) {
            function d() {
                b.call(this);
                this.btnMask = new egret.Sprite;
                var c = new egret.Sprite,
                    c = utils.createCircle(0, 0, 40, 1, 12587381);
                this.addChild(c);
                c = new egret.TextField;
                c = utils.createTextLabel(c, 16341428, "left", "STOP", 24, 0, 16341428, 1);
                this.addChild(c);
                c.x = -c.width / 2;
                c.y = -c.height / 2;
                this.btnMask = utils.createCircle(0, 0, 40, 1, 0);
                this.addChild(this.btnMask);
                this.btnMask.alpha = 0
            }
            __extends(d, b);
            return d
        }(egret.Sprite);
    StopBtn.prototype.__class__ = "StopBtn";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        Game = function(b) {
            function d() {
                b.call(this);
                this.boxList1 = [];
                this.boxList2 = [];
                this.boxList3 = [];
                this.boxList4 = [];
                this.recycle = [];
                this.recycleSpeed = 2;
                this.isTap = !1;
                this.bj = this.sortRun = 0
            }
            __extends(d, b);
            d.prototype.onBoxTap = function(b) {
                if (this.isTap)
                    if (this.SelectAllBool) {
                        for (var a = 1; 5 > a; a++)
                            for (var d = this["boxList" + a].length - 1; 0 <= d; d--) this["boxList" +
                                a][d].id == b.target.id && (this["container_" + a].removeChild(this["boxList" + a][d]), this.recycle.push(this["boxList" + a][d]), this["boxList" + a][d].anchorX = this["boxList" + a][d].anchorY = 0.5, this.addChild(this["boxList" + a][d]), this["boxList" + a][d].touchEnabled = !1, this["boxList" + a].splice(d, 1));
                        this.SelectAllBool = !1
                    } else this.isTap = !1, this.sortRun += 1, this.boxDetection(b.target.id, b.target.listId, b.target._index)
            };
            d.prototype.sortBox = function() {
                for (var b = 0, a = 1; 5 > a; a++) {
                    for (var d = this["boxList" + a].length - 1; 0 <=
                        d; d--) this["boxList" + a][d]._delete && (this["container_" + a].removeChild(this["boxList" + a][d]), this.recycle.push(this["boxList" + a][d]), this["boxList" + a][d].anchorX = this["boxList" + a][d].anchorY = 0.5, this.addChild(this["boxList" + a][d]), this["boxList" + a].splice(d, 1), b += 1);
                    this.StopBool || (d = new Box(utils.randomInt(0, 4), a, 0), this["boxList" + a].unshift(d), this["container_" + a].addChild(d), d.x = 70 + 57.5 * (a - 1), d.y = Settings.stageHeight, d.touchEnabled = !0, d.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBoxTap,
                        this))
                }
                this.StopBool = !1;
                Settings.setScoreText(b);
                this.isTap = !0
            };
            d.prototype.GameOver = function() {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onBoxMove, this);
                this.isTap = !1;
                this.plan_over(!0);
                this.SelectAllBool = this.StopBool = !1;
                this.rtBtn.btnMask.alpha = this.sAllBtn.btnMask.alpha = this.stopBtn.btnMask.alpha = 0;
                console.log("游戏结束");
				// updateShare(Settings.score);
				// Play68.setRankingScoreDesc(Settings.score);
               
            };
            d.prototype.plan_over = function(b) {
                "undefined" === typeof b && (b = !0);
                b ? (this.overPlan = new OverPlan, this.addChild(this.overPlan), this.overPlan.addEventListener("click_rStart", this.GameRstart, this)) : (this.removeChild(this.overPlan), this.overPlan.removeEventListener("click_rStart", this.GameRstart,
                    this), this.overPlan = null)
            };
            d.prototype.GameRstart = function(b) {
                this.plan_over(!1);
                this.dispatchEvent(new egret.Event("GameRstart", !1, !1));
                this.boxDistory();
                this.boxInit();
                GameUI.scoreText.text = "0000".toString();
                Settings.score = 0;
                console.log("游戏重玩点击");
                //_hmt.push(["_trackEvent", "按钮点击事件", "游戏重玩点击"]);
                //   LBShare.showAd({pos: 'banner', hide: true });
                //  LBShare.showAd({pos: 'top', hide: true });
                //  LBShare.showAd({pos: 'footer', hide: true });
            };
            d.prototype.boxDistory = function() {
                for (var b = 1; 5 > b; b++)
                    for (var a = this["boxList" + b].length - 1; 0 <= a; a--) this["container_" + b].removeChild(this["boxList" + b][a]), this.recycle.push(this["boxList" + b][a]), this["boxList" + b][a].anchorX = this["boxList" + b][a].anchorY = 0.5, this.addChild(this["boxList" +
                        b][a]), this["boxList" + b].splice(a, 1)
            };
            d.prototype.onBoxMove = function(b) {
                if (1 <= this.recycle.length) {
                    for (b = 0; b < this.recycle.length; b++) this.recycle[b].rotation += this.recycleSpeed, this.recycle[b].y += this.recycleSpeed, this.recycle[b].y >= Settings.stageHeight && (this.removeChild(this.recycle[b]), this.recycle.splice(b, 1));
                    this.recycleSpeed += 6
                } else this.recycleSpeed = 2;
                for (b = 4; 1 <= b; b--)
                    for (var a = 0; a <= this["boxList" + b].length - 1; a++) {
                        if (30 >= this["boxList" + b][a].y) {
                            this.GameOver();
                            return
                        }
                        this["boxList" + b][a]._index =
                            a;
                        this["boxList" + b][a].y += (Settings.stageHeight - 57.5 * (a + 1) - this["boxList" + b][a].y) / 2
                    }
            };
            d.prototype.onrtBtnTap = function() {
                console.log("\u6267\u884c\uff01");
                console.log(this.rtBtn.btnMask.alpha);
                if (0 == this.rtBtn.btnMask.alpha) {
                    this.rtBtn.btnMask.alpha = 0.2;
                    for (var b = 1; 5 > b; b++) {
                        var a;
                        3 <= this["boxList" + b].length ? a = 3 : a = this["boxList" + b].length;
                        for (var d = a - 1; 0 <= d; d--) this["container_" + b].removeChild(this["boxList" + b][d]), this.recycle.push(this["boxList" + b][d]), this["boxList" + b][d].anchorX = this["boxList" +
                            b][d].anchorY = 0.5, this.addChild(this["boxList" + b][d]), this["boxList" + b].splice(d, 1)
                    }
                }
            };
            d.prototype.onsAllBtnTap = function() {
                0 == this.sAllBtn.btnMask.alpha && (this.sAllBtn.btnMask.alpha = 0.2, this.SelectAllBool = !0)
            };
            d.prototype.onstopBtnTap = function() {
                0 == this.stopBtn.btnMask.alpha && (this.stopBtn.btnMask.alpha = 0.2, this.StopBool = !0)
            };
            d.prototype.GameInit = function() {
                this.container_1 = new egret.Sprite;
                this.addChild(this.container_1);
                this.container_2 = new egret.Sprite;
                this.addChild(this.container_2);
                this.container_3 =
                    new egret.Sprite;
                this.addChild(this.container_3);
                this.container_4 = new egret.Sprite;
                this.addChild(this.container_4);
                this.rtBtn = new ReduceThreeBtn;
                this.sAllBtn = new SelectAllBtn;
                this.stopBtn = new StopBtn;
                this.rtBtn.x = this.sAllBtn.x = this.stopBtn.x = 390;
                this.sAllBtn.y = GameUI.scoreText.y + GameUI.scoreText.width + 2 * this.sAllBtn.height;
                this.rtBtn.y = this.sAllBtn.y + 1.8 * this.sAllBtn.height;
                this.stopBtn.y = this.rtBtn.y + 2.2 * this.rtBtn.height;
                this.rtBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onrtBtnTap, this);
                this.sAllBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsAllBtnTap, this);
                this.stopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onstopBtnTap, this);
                this.addChild(this.rtBtn);
                this.addChild(this.sAllBtn);
                this.addChild(this.stopBtn);
                this.rtBtn.touchEnabled = !0;
                this.sAllBtn.touchEnabled = !0;
                this.stopBtn.touchEnabled = !0;
                this.boxInit()
				// updateShare(0)
            };
            d.prototype.boxInit = function() {
                for (var b = 0; 3 >= b; b++)
                    for (var a = 3; 0 <= a; a--) {
                        var d = new Box(utils.randomInt(0, 4), b + 1, a);
                        this["boxList" + (b + 1)].unshift(d);
                        this["container_" +
                            (b + 1)].addChild(d);
                        d.x = 70 + 57.5 * b;
                        d.y = Settings.stageHeight - (a + 1) * d.height;
                        d.touchEnabled = !0;
                        d.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBoxTap, this)
                    }
                this.isTap = !0;
                this.addEventListener(egret.Event.ENTER_FRAME, this.onBoxMove, this)
            };
            d.prototype.boxDetection = function(b, a, d) {
                this["boxList" + a][d]._delete = !0;
                this.bj += 1;
                d < this["boxList" + a].length - 1 && void 0 != this["boxList" + a][d + 1] && this["boxList" + a][d].id == this["boxList" + a][d + 1].id && !this["boxList" + a][d + 1]._delete && (this["boxList" + a][d + 1]._delete = !0, this.sortRun += 1, this.boxDetection(this["boxList" + a][d + 1].id, a, d + 1));
                1 <= d && null != this["boxList" + a][d - 1] && this["boxList" + a][d].id == this["boxList" + a][d - 1].id && !this["boxList" + a][d - 1]._delete && (this["boxList" + a][d - 1]._delete = !0, this.sortRun += 1, this.boxDetection(this["boxList" + a][d - 1].id, a, d - 1));
                2 <= a && null != this["boxList" + (a - 1)][d] && this["boxList" + a][d].id == this["boxList" + (a - 1)][d].id && !this["boxList" + (a - 1)][d]._delete && (this["boxList" + (a - 1)][d]._delete = !0, this.sortRun += 1, this.boxDetection(this["boxList" +
                    (a - 1)][d].id, a - 1, d));
                3 >= a && null != this["boxList" + (a + 1)][d] && this["boxList" + a][d].id == this["boxList" + (a + 1)][d].id && !this["boxList" + (a + 1)][d]._delete && (this.sortRun += 1, this["boxList" + (a + 1)][d]._delete = !0, this.boxDetection(this["boxList" + (a + 1)][d].id, a + 1, d));
                this.sortRun -= 1;
                0 == this.sortRun && this.sortBox()
            };
            return d
        }(egret.Sprite);
    Game.prototype.__class__ = "Game";
    var __extends = this.__extends || function(b, d) {
            function c() {
                this.constructor = b
            }
            for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
            c.prototype = d.prototype;
            b.prototype = new c
        },
        GameApp = function(b) {
            function d() {
                b.call(this);
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
            }
            __extends(d, b);
            d.prototype.onAddToStage = function(b) {
                this.GameStart()
            };
            d.prototype.GameStart = function() {
                Settings.initVar(this.stage.stageWidth, this.stage.stageHeight);
                this.ui = new GameUI;
                this.addChild(this.ui);
                this.game =
                    new Game;
                this.addChild(this.game);
                this.ui.addEventListener("GamePlay", this.GamePlay, this);
                //	_hmt.push(["_trackEvent", "游戏开始事件", "游戏开始"]);
            };
            d.prototype.GamePlay = function() {
                this.game.GameInit()
            };
            return d
        }(egret.DisplayObjectContainer);
    window['GameApp'] = GameApp;
    GameApp.prototype.__class__ = "GameApp";

}()