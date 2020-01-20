var egret; (function(b) {
    var c = function() {
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
    } ();
    b.HashObject = c;
    c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            var g = this.objectPool; - 1 == g.indexOf(e) && (g.push(e), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
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
            g = e.indexOf(this); - 1 != g && e.splice(g, 1)
        };
        a._callBackList = [];
        return a
    } (b.HashObject);
    b.Recycler = c;
    c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {})); (function(b) {
    b.__START_TIME;
    b.getTimer = function() {
        return Date.now() - b.__START_TIME
    }
})(egret || (egret = {})); (function(b) {
    b.__callLaterFunctionList = [];
    b.__callLaterThisList = [];
    b.__callLaterArgsList = [];
    b.callLater = function(c, d) {
        for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
        b.__callLaterFunctionList.push(c);
        b.__callLaterThisList.push(d);
        b.__callLaterArgsList.push(a)
    }
})(egret || (egret = {}));
var egret_dom; (function(b) {
    function c() {
        for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], e = 0; e < a.length; e++) if (a[e] + "ransform" in b) return a[e];
        return a[0]
    }
    b.header = "";
    b.getHeader = c;
    b.getTrans = function(d) {
        "" == b.header && (b.header = c());
        return b.header + d.substring(1, d.length)
    }
})(egret_dom || (egret_dom = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = e;
            this._bubbles = a;
            this._cancelable = f
        }
        __extends(a, d);
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
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
        };
        a._dispatchByTarget = function(e, a, f, d, c, h) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof h && (h = !1);
            var k = e.eventRecycler;
            k || (k = e.eventRecycler = new b.Recycler);
            var p = k.pop();
            p ? p._type = f: p = new e(f);
            p._bubbles = c;
            p._cancelable = h;
            if (d) for (var n in d) p[n] = d[n],
            null !== p[n] && (d[n] = null);
            e = a.dispatchEvent(p);
            k.push(p);
            return e
        };
        a._getPropertyData = function(e) {
            var a = e._props;
            a || (a = e._props = {});
            return a
        };
        a.dispatchEvent = function(e, g, f, b) {
            "undefined" === typeof f && (f = !1);
            var d = a._getPropertyData(a);
            b && (d.data = b);
            a._dispatchByTarget(a, e, g, d, f)
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
    } (b.HashObject);
    b.Event = c;
    c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this, e, a, f)
        }
        __extends(a, d);
        a.dispatchIOErrorEvent = function(e) {
            b.Event._dispatchByTarget(a, e, a.IO_ERROR)
        };
        a.IO_ERROR = "ioError";
        return a
    } (b.Event);
    b.IOErrorEvent = c;
    c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f, b, c, h, k, p, n, q) {
            "undefined" === typeof a && (a = !0);
            "undefined" === typeof f && (f = !0);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof h && (h = 0);
            "undefined" === typeof k && (k = !1);
            "undefined" === typeof p && (p = !1);
            "undefined" === typeof q && (q = !1);
            d.call(this, e, a, f);
            this._localY = this._localX = this._stageY = this._stageX = 0;
            this.touchPointID = b;
            this._stageX = c;
            this._stageY = h;
            this.ctrlKey = k;
            this.altKey = p;
            this.touchDown = q
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "stageX", {
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
            d.prototype._setCurrentTarget.call(this, e);
            e instanceof b.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, b.Point.identity), this._localX = e.x, this._localY = e.y)
        };
        a.dispatchTouchEvent = function(e, g, f, d, c, h, k, p, n) {
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof d && (d = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof h && (h = !1);
            "undefined" === typeof k && (k = !1);
            "undefined" === typeof p && (p = !1);
            "undefined" === typeof n && (n = !1);
            var q = b.Event._getPropertyData(a);
            q.touchPointID = f;
            q._stageX = d;
            q._stageY = c;
            q.ctrlKey = h;
            q.altKey = k;
            q.shiftKey = p;
            q.touchDown = n;
            b.Event._dispatchByTarget(a, e, g, q, !0, !0)
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
    } (b.Event);
    b.TouchEvent = c;
    c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this, e, a, f)
        }
        __extends(a, d);
        a.dispatchTimerEvent = function(e, g) {
            b.Event._dispatchByTarget(a, e, g)
        };
        a.TIMER = "timer";
        a.TIMER_COMPLETE = "timerComplete";
        return a
    } (b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.CAPTURING_PHASE = 1;
        b.AT_TARGET = 2;
        b.BUBBLING_PHASE = 3;
        return b
    } ();
    b.EventPhase = c;
    c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e) {
            "undefined" === typeof e && (e = null);
            d.call(this);
            this._eventTarget = e ? e: this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, f, d, c) {
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var h = d[e];
            h || (h = d[e] = []);
            this._insertEventBin(h, a, f, c)
        };
        a.prototype._insertEventBin = function(e, a, f, b) {
            for (var d = -1,
            c = e.length,
            k = 0; k < c; k++) {
                var p = e[k];
                if (p.listener === a && p.thisObject === f) return ! 1; - 1 == d && p.priority < b && (d = k)
            }
            a = {
                listener: a,
                thisObject: f,
                priority: b
            }; - 1 != d ? e.splice(d, 0, a) : e.push(a);
            return ! 0
        };
        a.prototype.removeEventListener = function(e, a, f, b) {
            "undefined" === typeof b && (b = !1);
            if (b = b ? this._captureEventsMap: this._eventsMap) {
                var d = b[e];
                d && (this._removeEventBin(d, a, f), 0 == d.length && delete b[e])
            }
        };
        a.prototype._removeEventBin = function(e, a, f) {
            for (var b = e.length,
            d = 0; d < b; d++) {
                var c = e[d];
                if (c.listener === a && c.thisObject === f) return e.splice(d, 1),
                !0
            }
            return ! 1
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
            var a = 1 == e._eventPhase ? this._captureEventsMap: this._eventsMap;
            if (!a) return ! 0;
            a = a[e.type];
            if (!a) return ! 0;
            for (var a = a.concat(), f = a.length, b = 0; b < f; b++) {
                var d = a[b];
                d.listener.call(d.thisObject, e);
                if (e._isPropagationImmediateStopped) break
            }
            return ! e.isDefaultPrevented()
        };
        a.prototype.dispatchEventWith = function(e, a, f) {
            "undefined" === typeof a && (a = !1);
            b.Event.dispatchEvent(this, e, a, f)
        };
        return a
    } (b.HashObject);
    b.EventDispatcher = c;
    c.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.reuseEvent = new b.Event("")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.Ticker.getInstance().run();
            b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run()
        };
        a.prototype.renderLoop = function(e) {
            if (0 < b.__callLaterFunctionList.length) {
                var a = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var f = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var d = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            this.dispatchEventWith(b.Event.RENDER);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
            a && this.doCallLaterList(a, f, d);
            e = this.rendererContext;
            e.onRenderStart();
            e.clearScreen();
            this.stage._updateTransform();
            this.dispatchEventWith(b.Event.FINISH_UPDATE_TRANSFORM);
            this.stage._draw(e);
            this.dispatchEventWith(b.Event.FINISH_RENDER);
            e.onRenderFinish()
        };
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), f = a.length, d = 0; d < f; d++) {
                var c = a[d];
                e._target = c.display;
                e._setCurrentTarget(c.display);
                c.listener.call(c.thisObject, e)
            }
            a = b.Recycler._callBackList;
            for (d = a.length - 1; 0 <= d; d--) a[d]._checkFrame()
        };
        a.prototype.broadcastRender = function() {
            var e = this.reuseEvent;
            e._type = b.Event.RENDER;
            for (var a = b.DisplayObject._renderCallBackList.concat(), f = a.length, d = 0; d < f; d++) {
                var c = a[d];
                e._target = c.display;
                e._setCurrentTarget(c.display);
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.doCallLaterList = function(e, a, f) {
            for (var b = e.length,
            d = 0; d < b; d++) {
                var c = e[d];
                null != c && c.apply(a[d], f[d])
            }
        };
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        return a
    } (b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return ! 0;
    var b = navigator.userAgent.toLowerCase();
    return - 1 != b.indexOf("mobile") || -1 != b.indexOf("android")
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC; (function(b) {
    var c = function() {
        function d() {
            this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0
        }
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        d.prototype.run = function() {
            b.Ticker.getInstance().register(this.update, this);
            null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, b.MainContext.instance.stage.addChild(this._txt));
            var a = b.MainContext.instance;
            a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
            a.addEventListener(b.Event.RENDER, this.onStartRender, this);
            a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
            a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
        };
        d.prototype.onEnterFrame = function(a) {
            this._lastTime = b.getTimer()
        };
        d.prototype.onStartRender = function(a) {
            a = b.getTimer();
            this._logicPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishUpdateTransform = function(a) {
            a = b.getTimer();
            this._updateTransformPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishRender = function(a) {
            a = b.getTimer();
            this._renderPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.update = function(a) {
            this._tick++;
            this._totalDeltaTime += a;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                a = (this._preDrawCount - 1).toString();
                var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        };
        d.prototype.onDrawImage = function() {
            this._preDrawCount++
        };
        return d
    } ();
    b.Profiler = c;
    c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.apply(this, arguments);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = []
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.__START_TIME = (new Date).getTime();
            b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        a.prototype.update = function(e) {
            var a = this.callBackList.concat(),
            f = a.length;
            e *= this._timeScale;
            e *= this._timeScale;
            for (var b = 0; b < f; b++) {
                var d = a[b];
                d.listener.call(d.thisObject, e)
            }
        };
        a.prototype.register = function(e, a, f) {
            "undefined" === typeof f && (f = 0);
            this._insertEventBin(this.callBackList, e, a, f)
        };
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        };
        a.prototype.setTimeout = function(e, a, f) {
            for (var d = [], c = 0; c < arguments.length - 3; c++) d[c] = arguments[c + 3];
            b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
            b.setTimeout.apply(null, [e, a, f].concat(d))
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
    } (b.EventDispatcher);
    b.Ticker = c;
    c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.LEFT = "left";
        b.RIGHT = "right";
        b.CENTER = "center";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.HorizontalAlign = c;
    c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.MIDDLE = "middle";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.VerticalAlign = c;
    c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a) {
            "undefined" === typeof a && (a = 0);
            d.call(this);
            this._currentCount = 0;
            this.delay = e;
            this.repeatCount = a
        }
        __extends(a, d);
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
            this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount = 0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
        };
        a.prototype.stop = function() {
            this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
        };
        a.prototype.onEnterFrame = function(e) {
            e = b.getTimer();
            e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
        };
        return a
    } (b.EventDispatcher);
    b.Timer = c;
    c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {})); (function(b) {
    b.getQualifiedClassName = function(b) {
        b = b.prototype ? b.prototype: b.__proto__;
        if (b.hasOwnProperty("__class__")) return b.__class__;
        var d = b.constructor.toString(),
        a = d.indexOf("("),
        d = d.substring(9, a);
        return b.__class__ = d
    }
})(egret || (egret = {})); (function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b) return null;
        var a = c[b];
        if (a) return a;
        for (var e = b.split("."), g = e.length, a = __global, f = 0; f < g; f++) if (a = a[e[f]], !a) return null;
        return c[b] = a
    }
})(egret || (egret = {}));
var __global = __global || this; (function(b) {
    function c(e) {
        for (var a in d) {
            var f = d[a];
            f.delay -= e;
            0 >= f.delay && (f.listener.apply(f.thisObject, f.params), delete d[a])
        }
    }
    var d = {},
    a = 0;
    b.setTimeout = function(e, g, f) {
        for (var m = [], l = 0; l < arguments.length - 3; l++) m[l] = arguments[l + 3];
        m = {
            listener: e,
            thisObject: g,
            delay: f,
            params: m
        };
        0 == a && b.Ticker.getInstance().register(c, null);
        a++;
        d[a] = m;
        return a
    };
    b.clearTimeout = function(e) {
        delete d[e]
    }
})(egret || (egret = {})); (function(b) {
    b.hasDefinition = function(c) {
        return b.getDefinitionByName(c) ? !0 : !1
    }
})(egret || (egret = {})); (function(b) {
    b.toColorString = function(b) {
        if (isNaN(b) || 0 > b) b = 0;
        16777215 < b && (b = 16777215);
        for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
        return "#" + b
    }
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b, c, l, h) {
            "undefined" === typeof e && (e = 1);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof c && (c = 1);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof h && (h = 0);
            d.call(this);
            this.a = e;
            this.b = a;
            this.c = b;
            this.d = c;
            this.tx = l;
            this.ty = h
        }
        __extends(a, d);
        a.prototype.prepend = function(e, a, b, d, c, h) {
            var k = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var p = this.a,
                n = this.c;
                this.a = p * e + this.b * b;
                this.b = p * a + this.b * d;
                this.c = n * e + this.d * b;
                this.d = n * a + this.d * d
            }
            this.tx = k * e + this.ty * b + c;
            this.ty = k * a + this.ty * d + h;
            return this
        };
        a.prototype.append = function(e, a, b, d, c, h) {
            var k = this.a,
            p = this.b,
            n = this.c,
            q = this.d;
            this.a = e * k + a * n;
            this.b = e * p + a * q;
            this.c = b * k + d * n;
            this.d = b * p + d * q;
            this.tx = c * k + h * n + this.tx;
            this.ty = c * p + h * q + this.ty;
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
        a.prototype.prependTransform = function(e, g, b, d, c, h, k, p, n) {
            if (c % 360) {
                var q = c * a.DEG_TO_RAD;
                c = Math.cos(q);
                q = Math.sin(q)
            } else c = 1,
            q = 0;
            if (p || n) this.tx -= p,
            this.ty -= n;
            h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.prepend(c * b, q * b, -q * d, c * d, 0, 0), this.prepend(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, g)) : this.prepend(c * b, q * b, -q * d, c * d, e, g);
            return this
        };
        a.prototype.appendTransform = function(e, g, b, d, c, h, k, p, n) {
            if (c % 360) {
                var q = c * a.DEG_TO_RAD;
                c = Math.cos(q);
                q = Math.sin(q)
            } else c = 1,
            q = 0;
            h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.append(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, g), this.append(c * b, q * b, -q * d, c * d, 0, 0)) : this.append(c * b, q * b, -q * d, c * d, e, g);
            if (p || n) this.tx -= p * this.a + n * this.c,
            this.ty -= p * this.b + n * this.d;
            return this
        };
        a.prototype.rotate = function(e) {
            var a = Math.cos(e);
            e = Math.sin(e);
            var b = this.a,
            d = this.c,
            c = this.tx;
            this.a = b * a - this.b * e;
            this.b = b * e + this.b * a;
            this.c = d * a - this.d * e;
            this.d = d * e + this.d * a;
            this.tx = c * a - this.ty * e;
            this.ty = c * e + this.ty * a;
            return this
        };
        a.prototype.skew = function(e, g) {
            e *= a.DEG_TO_RAD;
            g *= a.DEG_TO_RAD;
            this.append(Math.cos(g), Math.sin(g), -Math.sin(e), Math.cos(e), 0, 0);
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
            d = this.d,
            c = this.tx,
            h = e * d - a * b;
            this.a = d / h;
            this.b = -a / h;
            this.c = -b / h;
            this.d = e / h;
            this.tx = (b * this.ty - d * c) / h;
            this.ty = -(e * this.ty - a * c) / h;
            return this
        };
        a.transformCoords = function(e, a, f) {
            var d = b.Point.identity;
            d.x = e.a * a + e.c * f + e.tx;
            d.y = e.d * f + e.b * a + e.ty;
            return d
        };
        a.prototype.toArray = function(e) {
            this.array || (this.array = new Float32Array(9));
            e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        };
        a.identity = new a;
        a.DEG_TO_RAD = Math.PI / 180;
        return a
    } (b.HashObject);
    b.Matrix = c;
    c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
    } (b.HashObject);
    b.Point = c;
    c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(e, a, f, c) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof c && (c = 0);
            b.call(this);
            this.x = e;
            this.y = a;
            this.width = f;
            this.height = c
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
                this.height = e - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.initialize = function(e, a, b, d) {
            this.x = e;
            this.y = a;
            this.width = b;
            this.height = d;
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
        a.prototype.containsPoint = function(e) {
            return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
        };
        a.identity = new a(0, 0, 0, 0);
        return a
    } (b.HashObject);
    b.Rectangle = c;
    c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.fatal = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Fatal", a, e);
            throw Error(b.Logger.getTraceCode("Fatal", a, e));
        };
        d.info = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Info", a, e)
        };
        d.warning = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Warning", a, e)
        };
        d.traceToConsole = function(a, e, g) {
            console.log(b.Logger.getTraceCode(a, e, g))
        };
        d.getTraceCode = function(a, e, g) {
            return "[" + a + "]" + e + ":" + (null == g ? "": g)
        };
        return d
    } ();
    b.Logger = c;
    c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(a, d);
        a.getInstance = function() {
            a._instance || (a._instance = new a);
            return a._instance
        };
        a.prototype.parserXML = function(e) {
            for (var a = 0;
            "\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
            0 != a && (e = e.substring(a, e.length));
            this._isSupportDOMParser ? a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
            null == a && b.Logger.info("xml not found!");
            return a
        };
        a._instance = null;
        return a
    } (b.HashObject);
    b.SAXParser = c;
    c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(e) {
        function g() {
            e.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            var a = document.getElementById(g.canvas_name),
            b = a.height;
            this._designWidth = a.width;
            this._designHeight = b
        }
        __extends(g, e);
        g.getInstance = function() {
            null == g.instance && (a.initialize(), g.instance = new g);
            return g.instance
        };
        g.prototype.setDesignSize = function(e, a, g) {
            this._designWidth = e;
            this._designHeight = a;
            g && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"), this._setResolutionPolicy(g))
        };
        g.prototype._setResolutionPolicy = function(e) {
            this._resolutionPolicy = e;
            e.init(this);
            e._apply(this, this._designWidth, this._designHeight)
        };
        g.prototype.getScaleX = function() {
            return this._scaleX
        };
        g.prototype.getScaleY = function() {
            return this._scaleY
        };
        g.canvas_name = "gameCanvas";
        g.canvas_div_name = "gameDiv";
        return g
    } (b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function e(a, g) {
            this._containerStrategy = a;
            this._contentStrategy = g
        }
        e.prototype.init = function(e) {
            this._containerStrategy.init(e);
            this._contentStrategy.init(e)
        };
        e.prototype._apply = function(e, a, g) {
            this._containerStrategy._apply(e, a, g);
            this._contentStrategy._apply(e, a, g)
        };
        return e
    } ();
    b.ResolutionPolicy = d;
    d.prototype.__class__ = "egret.ResolutionPolicy";
    var a = function() {
        function a() {}
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new e
        };
        a.prototype.init = function(e) {};
        a.prototype._apply = function(e, a, g) {};
        a.prototype._setupContainer = function() {
            var e = document.body,
            a;
            e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
        };
        return a
    } ();
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
    } (a);
    b.EqualToFrame = e;
    e.prototype.__class__ = "egret.EqualToFrame";
    d = function() {
        function e() {}
        e.prototype.init = function(e) {};
        e.prototype._apply = function(e, a, g) {};
        return e
    } ();
    b.ContentStrategy = d;
    d.prototype.__class__ = "egret.ContentStrategy";
    var g = function(e) {
        function a(g) {
            "undefined" === typeof g && (g = 0);
            e.call(this);
            this.minWidth = g
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            a = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = document.documentElement.clientWidth,
            d = document.documentElement.clientHeight,
            m = d / g,
            r = f / m,
            s = 1;
            0 != this.minWidth && (s = Math.min(1, r / this.minWidth));
            a.width = r / s;
            a.height = g;
            a.style.width = f + "px";
            a.style.height = d * s + "px";
            b.style.width = f + "px";
            b.style.height = d * s + "px";
            e._scaleX = m * s;
            e._scaleY = m * s
        };
        return a
    } (d);
    b.FixedHeight = g;
    g.prototype.__class__ = "egret.FixedHeight";
    g = function(e) {
        function a(g) {
            "undefined" === typeof g && (g = 0);
            e.call(this);
            this.minHeight = g
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            g = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = document.documentElement.clientWidth,
            d = document.documentElement.clientHeight,
            m = f / a,
            r = d / m,
            s = 1;
            0 != this.minHeight && (s = Math.min(1, r / this.minHeight));
            g.width = a;
            g.height = r / s;
            g.style.width = f * s + "px";
            g.style.height = d + "px";
            b.style.width = f * s + "px";
            b.style.height = d + "px";
            e._scaleX = m * s;
            e._scaleY = m * s
        };
        return a
    } (d);
    b.FixedWidth = g;
    g.prototype.__class__ = "egret.FixedWidth";
    g = function(e) {
        function a(g, b) {
            e.call(this);
            this.width = g;
            this.height = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            g = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = this.width,
            d = this.height,
            m = f / a;
            g.width = a;
            g.height = d / m;
            g.style.width = f + "px";
            g.style.height = d + "px";
            b.style.width = f + "px";
            b.style.height = d + "px";
            e._scaleX = m;
            e._scaleY = m
        };
        return a
    } (d);
    b.FixedSize = g;
    g.prototype.__class__ = "egret.FixedSize";
    g = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            a = document.getElementById(c.canvas_name);
            a.style.width = a.width + "px";
            a.style.height = a.height + "px";
            e._scaleX = 1;
            e._scaleY = 1
        };
        return a
    } (d);
    b.NoScale = g;
    g.prototype.__class__ = "egret.NoScale";
    d = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            var b = document.getElementById(c.canvas_name),
            f = document.getElementById(c.canvas_div_name),
            d = document.documentElement.clientWidth,
            m = document.documentElement.clientHeight,
            r = d / a < m / g ? d / a: m / g,
            d = a * r,
            m = g * r;
            b.width = a;
            b.height = g / 1;
            b.style.width = 1 * d + "px";
            b.style.height = m + "px";
            b.style.top = Math.floor((document.documentElement.clientHeight - m) / 2) + "px";
            f.style.width = 1 * d + "px";
            f.style.height = m + "px";
            e._scaleX = 1 * r;
            e._scaleY = 1 * r
        };
        return a
    } (d);
    b.ShowAll = d;
    d.prototype.__class__ = "egret.ShowAll"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(a, d);
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
        a.prototype.drawImage = function(e, a, f, d, c, h, k, p, n, q) {
            k = k || 0;
            p = p || 0;
            var t = a._texture_to_render;
            if (null != t && 0 != h && 0 != c && 0 != n && 0 != q) if (a._worldBounds) {
                var r = this._originalData;
                r.sourceX = f;
                r.sourceY = d;
                r.sourceWidth = c;
                r.sourceHeight = h;
                r.destX = k;
                r.destY = p;
                r.destWidth = n;
                r.destHeight = q;
                for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
                    var v = s[u];
                    if (!this.ignoreRender(a, v, r.destX, r.destY)) {
                        if (0 != this._drawAreaList.length) if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
                            if (a._worldBounds.x + r.destX < v.x || a._worldBounds.y + r.destY < v.y || a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height) {
                                b.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
                                break
                            }
                        } else {
                            var x = a._worldTransform.a,
                            y = a._worldTransform.d,
                            w;
                            a._worldBounds.x + r.destX < v.x && (w = (v.x - a._worldBounds.x) / x - r.destX, f += w / (n / c), c -= w / (n / c), n -= w, k += w);
                            a._worldBounds.y + r.destY < v.y && (w = (v.y - a._worldBounds.y) / y - r.destY, d += w / (q / h), h -= w / (q / h), q -= w, p += w);
                            a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + r.destX, c -= w / (n / c), n -= w);
                            a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height - v.y - v.height) / y + r.destY, h -= w / (q / h), q -= w)
                        }
                        e.drawImage(t, f, d, c, h, k, p, n, q)
                    }
                }
            } else e.drawImage(t, f, d, c, h, k, p, n, q)
        };
        a.prototype.ignoreRender = function(e, a, b, d) {
            var c = e._worldBounds;
            b *= e._worldTransform.a;
            d *= e._worldTransform.d;
            return c.x + c.width + b <= a.x || c.x + b >= a.x + a.width || c.y + c.height + d <= a.y || c.y + d >= a.y + a.height ? !0 : !1
        };
        a.prototype.getDrawAreaList = function() {
            var e;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
            return e
        };
        return a
    } (b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, g) {
            "undefined" === typeof g && (g = "");
            a = this.getKey(a) + "#" + g;
            this.mapClassDic[a] = e
        };
        d.getKey = function(a) {
            return "string" == typeof a ? a: b.getQualifiedClassName(a)
        };
        d.mapValue = function(a, e, g) {
            "undefined" === typeof g && (g = "");
            a = this.getKey(a) + "#" + g;
            this.mapValueDic[a] = e
        };
        d.hasMapRule = function(a, e) {
            "undefined" === typeof e && (e = "");
            var g = this.getKey(a) + "#" + e;
            return this.mapValueDic[g] || this.mapClassDic[g] ? !0 : !1
        };
        d.getInstance = function(a, e) {
            "undefined" === typeof e && (e = "");
            var g = this.getKey(a) + "#" + e;
            if (this.mapValueDic[g]) return this.mapValueDic[g];
            var b = this.mapClassDic[g];
            if (b) return b = new b,
            this.mapValueDic[g] = b,
            delete this.mapClassDic[g],
            b;
            throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + g + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
        };
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    } ();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
        b.LAYER = "layer";
        return b
    } ();
    b.BlendMode = c;
    c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
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
            this._stage = null;
            this._worldTransform = new b.Matrix;
            this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
        }
        __extends(a, d);
        a.prototype._setDirty = function() {
            this._normalDirty = !0
        };
        a.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        };
        a.prototype._setParentSizeDirty = function() { ! this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty()
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
                b.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(), this._setParentSizeDirty())
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
        Object.defineProperty(a.prototype, "anchorOffsetX", {
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
                b.NumberUtils.isNumber(e) && (this._skewX = e, this._setSizeDirty())
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
        Object.defineProperty(a.prototype, "explicitHeight", {
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
                var a = this._texture_to_render,
                f = a._offsetX,
                d = a._offsetY,
                c = a._textureWidth,
                a = a._textureHeight;
                this._updateTransform();
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var h = b.MainContext.instance.rendererContext.texture_scale_factor;
                b.RenderFilter.getInstance().drawImage(e, this, 0, 0, c * h, a * h, f, d, c, a);
                return ! 0
            }
            return ! 1
        };
        a.prototype._updateTransform = function() {
            this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
            var e = this._getOffsetPoint();
            this._worldTransform.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e.x, e.y);
            this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
            this.worldAlpha = this._parent.worldAlpha * this._alpha
        };
        a.prototype._render = function(e) {};
        a.prototype.getBounds = function(e) {
            var a = this._measureBounds(),
            f = this._hasWidthSet ? this._explicitWidth: a.width,
            d = this._hasHeightSet ? this._explicitHeight: a.height,
            c = a.x,
            a = a.y,
            h,
            k;
            0 != this._anchorX || 0 != this._anchorY ? (h = f * this._anchorX, k = d * this._anchorY) : (h = this._anchorOffsetX, k = this._anchorOffsetY);
            this._cacheBounds.initialize(c - h, a - k, f, d);
            f = this._cacheBounds;
            e || (e = new b.Rectangle);
            return e.initialize(f.x, f.y, f.width, f.height)
        };
        a.prototype.destroyCacheBounds = function() {
            this._cacheBounds.x = 0;
            this._cacheBounds.y = 0;
            this._cacheBounds.width = 0;
            this._cacheBounds.height = 0
        };
        a.prototype._getConcatenatedMatrix = function() {
            for (var e = a.identityMatrixForGetConcatenated.identity(), g = this; null != g;) {
                if (0 != g._anchorX || 0 != g._anchorY) {
                    var f = g._getSize(b.Rectangle.identity);
                    e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, f.width * g._anchorX, f.height * g._anchorY)
                } else e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, g._anchorOffsetX, g._anchorOffsetY);
                g = g._parent
            }
            return e
        };
        a.prototype.localToGlobal = function(e, a, f) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var d = this._getConcatenatedMatrix();
            d.append(1, 0, 0, 1, e, a);
            f || (f = new b.Point);
            f.x = d.tx;
            f.y = d.ty;
            return f
        };
        a.prototype.globalToLocal = function(e, a, f) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var d = this._getConcatenatedMatrix();
            d.invert();
            d.append(1, 0, 0, 1, e, a);
            f || (f = new b.Point);
            f.x = d.tx;
            f.y = d.ty;
            return f
        };
        a.prototype.hitTest = function(e, a, f) {
            "undefined" === typeof f && (f = !1);
            if (!this.visible || !f && !this._touchEnabled) return null;
            f = this._getSize(b.Rectangle.identity);
            return 0 <= e && e < f.width && 0 <= a && a < f.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this: null: this: null
        };
        a.prototype.hitTestPoint = function(e, a, f) {
            e = this.globalToLocal(e, a);
            return f ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), f = this._hitTestPointTexture, f.drawToTexture(this), 0 != f.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
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
            if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity),
            e = this._anchorX * a.width,
            a = this._anchorY * a.height;
            var f = b.Point.identity;
            f.x = e;
            f.y = a;
            return f
        };
        a.prototype._onAddToStage = function() {
            this._stage = b.MainContext.instance.stage;
            b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        a.prototype._onRemoveFromStage = function() {
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
        a.prototype.addEventListener = function(e, g, f, c, l) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof l && (l = 0);
            d.prototype.addEventListener.call(this, e, g, f, c, l); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, g, f, l)
        };
        a.prototype.removeEventListener = function(e, g, f, c) {
            "undefined" === typeof c && (c = !1);
            d.prototype.removeEventListener.call(this, e, g, f, c); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, g, f)
        };
        a.prototype.dispatchEvent = function(e) {
            if (!e._bubbles) return d.prototype.dispatchEvent.call(this, e);
            for (var a = [], b = this; b;) a.unshift(b),
            b = b.parent;
            for (var c = a.length,
            b = c - 1,
            c = c - 2; 0 <= c; c--) a.push(a[c]);
            e._reset();
            this._dispatchPropagationEvent(e, a, b);
            return ! e.isDefaultPrevented()
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            for (var d = a.length,
            c = 0; c < d; c++) {
                var h = a[c];
                e._setCurrentTarget(h);
                e._target = this;
                e._eventPhase = c < b ? 1 : c == b ? 2 : 3;
                h._notifyListener(e);
                if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
            }
        };
        a.prototype.willTrigger = function(e) {
            for (var a = this; a;) {
                if (a.hasEventListener(e)) return ! 0;
                a = a._parent
            }
            return ! 1
        };
        Object.defineProperty(a.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(e) { (this._cacheAsBitmap = e) ? (this.renderTexture || (this.renderTexture = new b.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        a.getTransformBounds = function(e, a) {
            var b, d, c = e.width,
            h = e.height,
            k = c * a.a,
            c = c * a.b,
            p = h * a.c,
            h = h * a.d,
            n = a.tx,
            q = a.ty,
            t = n,
            r = n,
            s = q,
            u = q; (b = k + n) < t ? t = b: b > r && (r = b); (b = k + p + n) < t ? t = b: b > r && (r = b); (b = p + n) < t ? t = b: b > r && (r = b); (d = c + q) < s ? s = d: d > u && (u = d); (d = c + h + q) < s ? s = d: d > u && (u = d); (d = h + q) < s ? s = d: d > u && (u = d);
            return e.initialize(t, s, r - t, u - s)
        };
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    } (b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._touchChildren = !0;
            this._children = []
        }
        __extends(a, d);
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
        a.prototype.doSetChildIndex = function(e, a) {
            var f = this._children.indexOf(e);
            0 > f && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(f, 1);
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
        a.prototype._doAddChild = function(e, g, f) {
            "undefined" === typeof f && (f = !0);
            if (e == this) return e;
            if (0 > g || g > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
            e;
            var d = e.parent;
            if (d == this) return this.doSetChildIndex(e, g),
            e;
            d && d.removeChild(e);
            this._children.splice(g, 0, e);
            e._parentChanged(this);
            f && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage) for (e._onAddToStage(), g = a.__EVENT__ADD_TO_STAGE_LIST; 0 < g.length;) g.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
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
        a.prototype._doRemoveChild = function(e, g) {
            "undefined" === typeof g && (g = !0);
            var f = this._children,
            d = f[e];
            g && d.dispatchEventWith(b.Event.REMOVED, !0);
            if (this._stage) {
                d._onRemoveFromStage();
                for (var c = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < c.length;) c.shift().dispatchEventWith(b.Event.REMOVED_FROM_STAGE)
            }
            d._parentChanged(null);
            f.splice(e, 1);
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
                if (e == this) return ! 0;
                e = e._parent
            }
            return ! 1
        };
        a.prototype.swapChildrenAt = function(e, a) {
            0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
        };
        a.prototype.swapChildren = function(e, a) {
            var f = this._children.indexOf(e),
            d = this._children.indexOf(a); - 1 == f || -1 == d ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(f, d)
        };
        a.prototype._swapChildrenAt = function(e, a) {
            if (e != a) {
                var b = this._children,
                d = b[e];
                b[e] = b[a];
                b[a] = d
            }
        };
        a.prototype.getChildIndex = function(e) {
            return this._children.indexOf(e)
        };
        a.prototype.removeChildren = function() {
            for (var e = this._children.length - 1; 0 <= e; e--) this._doRemoveChild(e)
        };
        a.prototype._updateTransform = function() {
            if (this.visible) {
                d.prototype._updateTransform.call(this);
                for (var e = 0,
                a = this._children.length; e < a; e++) this._children[e]._updateTransform()
            }
        };
        a.prototype._render = function(e) {
            for (var a = 0,
            b = this._children.length; a < b; a++) this._children[a]._draw(e)
        };
        a.prototype._measureBounds = function() {
            for (var e = 0,
            a = 0,
            f = 0,
            d = 0,
            c = this._children.length,
            h = 0; h < c; h++) {
                var k = this._children[h],
                p;
                if (k.visible && (p = b.DisplayObject.getTransformBounds(k._getSize(b.Rectangle.identity), k._getMatrix()))) {
                    var k = p.x,
                    n = p.y,
                    q = p.width + p.x,
                    t = p.height + p.y;
                    if (k < e || 0 == h) e = k;
                    if (q > a || 0 == h) a = q;
                    if (n < f || 0 == h) f = n;
                    if (t > d || 0 == h) d = t
                }
            }
            return b.Rectangle.identity.initialize(e, f, a - e, d - f)
        };
        a.prototype.hitTest = function(e, a, f) {
            "undefined" === typeof f && (f = !1);
            var c;
            if (!this.visible) return null;
            if (this._scrollRect) {
                if (0 > e || 0 > a || e > this._scrollRect.width || a > this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y > a || a > this.mask.y + this.mask.height)) return null;
            for (var l = this._children,
            h = this._touchChildren,
            k = l.length - 1; 0 <= k; k--) {
                var p = l[k],
                n = p,
                q = n._getOffsetPoint(),
                t = n._x,
                r = n._y;
                this._scrollRect && (t -= this._scrollRect.x, r -= this._scrollRect.y);
                n = b.Matrix.identity.identity().prependTransform(t, r, n._scaleX, n._scaleY, n._rotation, 0, 0, q.x, q.y);
                n.invert();
                n = b.Matrix.transformCoords(n, e, a);
                if (p = p.hitTest(n.x, n.y, !0)) {
                    if (p._touchEnabled && h) return p;
                    if (this._touchEnabled) return this;
                    null == c && (c = p)
                }
            }
            return c ? c: d.prototype.hitTest.call(this, e, a, f)
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var e = this.numChildren,
            a = 0; a < e; a++) this._children[a]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var e = this.numChildren,
            a = 0; a < e; a++) this._children[a]._onRemoveFromStage()
        };
        a.prototype.getChildByName = function(e) {
            for (var a = this._children,
            b = this.numChildren,
            d, c = 0; c < b; c++) if (d = a[c], d.name == e) return d;
            return null
        };
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    } (b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a) {
            "undefined" === typeof e && (e = 480);
            "undefined" === typeof a && (a = 800);
            d.call(this);
            this.touchEnabled = !0;
            this._stage = this;
            this._stageWidth = e;
            this._stageHeight = a
        }
        __extends(a, d);
        a.prototype.invalidate = function() {
            a._invalidateRenderFlag = !0
        };
        Object.defineProperty(a.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(e) {
                if (this._scaleMode != e) {
                    this._scaleMode = e;
                    var a = {};
                    a[b.StageScaleMode.NO_SCALE] = new b.NoScale;
                    a[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
                    a[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
                    e = a[e];
                    if (!e) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
                    a = new b.EqualToFrame;
                    e = new b.ResolutionPolicy(a, e);
                    b.StageDelegate.getInstance()._setResolutionPolicy(e);
                    e = document.getElementById(b.StageDelegate.canvas_name);
                    this._stageWidth = e.width;
                    this._stageHeight = e.height;
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
        a.prototype.hitTest = function(a, g) {
            if (!this.touchEnabled) return null;
            var f;
            if (!this.visible) return this;
            for (var d = this._children,
            c = d.length - 1; 0 <= c; c--) {
                var h = f = d[c],
                k = h._getOffsetPoint(),
                h = b.Matrix.identity.identity().prependTransform(h.x, h.y, h.scaleX, h.scaleY, h.rotation, 0, 0, k.x, k.y);
                h.invert();
                h = b.Matrix.transformCoords(h, a, g);
                if ((f = f.hitTest(h.x, h.y, !0)) && f.touchEnabled) return f
            }
            return this
        };
        a.prototype.getBounds = function(a) {
            a || (a = new b.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        a.prototype._updateTransform = function() {
            for (var a = 0,
            g = this._children.length; a < g; a++) this._children[a]._updateTransform()
        };
        a._invalidateRenderFlag = !1;
        return a
    } (b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NO_BORDER = "noBorder";
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        return b
    } ();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.REPEAT = "repeat";
        b.SCALE = "scale";
        return b
    } ();
    b.BitmapFillMode = c;
    c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.fillMode = "scale";
            a && (this._texture = a, this._setSizeDirty())
        }
        __extends(a, d);
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
            b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth: b._textureWidth, this._hasHeightSet ? this._explicitHeight: b._textureHeight, this)) : this._texture_to_render = null
        };
        a._drawBitmap = function(e, g, f, d) {
            var c = d._texture_to_render;
            if (c) {
                var h = c._textureWidth,
                k = c._textureHeight;
                if ("scale" == d.fillMode) {
                    var p = d.scale9Grid || c.scale9Grid;
                    if (p && h - p.width < g && k - p.height < f) a.drawScale9GridImage(e, d, p, g, f);
                    else {
                        var p = c._offsetX,
                        n = c._offsetY,
                        q = c._bitmapWidth || h,
                        t = c._bitmapHeight || k;
                        g /= h;
                        p = Math.round(p * g);
                        g = Math.round(q * g);
                        f /= k;
                        n = Math.round(n * f);
                        f = Math.round(t * f);
                        b.RenderFilter.getInstance().drawImage(e, d, c._bitmapX, c._bitmapY, q, t, p, n, g, f)
                    }
                } else a.drawRepeatImage(e, d, g, f)
            }
        };
        a.drawRepeatImage = function(a, g, f, d) {
            var c = g._texture_to_render;
            if (c) for (var h = c._textureWidth,
            k = c._textureHeight,
            p = c._bitmapX,
            n = c._bitmapY,
            q = c._bitmapWidth || h,
            t = c._bitmapHeight || k,
            r = c._offsetX,
            c = c._offsetY,
            s = b.RenderFilter.getInstance(); r < f; r += h) for (var u = c; u < d; u += k) {
                var v = Math.min(q, f - r),
                x = Math.min(t, d - u);
                s.drawImage(a, g, p, n, v, x, r, u, v, x)
            }
        };
        a.drawScale9GridImage = function(a, g, f, d, c) {
            var h = g._texture_to_render;
            if (h && f) {
                var k = b.RenderFilter.getInstance(),
                p = h._textureWidth,
                n = h._textureHeight,
                q = h._bitmapX,
                t = h._bitmapY,
                r = h._bitmapWidth || p,
                s = h._bitmapHeight || n,
                u = h._offsetX,
                h = h._offsetY;
                f = b.Rectangle.identity.initialize(f.x - Math.round(u), f.y - Math.round(u), f.width, f.height);
                u = Math.round(u);
                h = Math.round(h);
                d -= p - r;
                c -= n - s;
                f.y == f.bottom && (f.bottom < s ? f.bottom++:f.y--);
                f.x == f.right && (f.right < r ? f.right++:f.x--);
                var p = q + f.x,
                n = q + f.right,
                v = r - f.right,
                x = t + f.y,
                y = t + f.bottom,
                w = s - f.bottom,
                z = u + f.x,
                A = h + f.y,
                s = c - (s - f.bottom),
                r = d - (r - f.right);
                k.drawImage(a, g, q, t, f.x, f.y, u, h, f.x, f.y);
                k.drawImage(a, g, p, t, f.width, f.y, z, h, r - f.x, f.y);
                k.drawImage(a, g, n, t, v, f.y, u + r, h, d - r, f.y);
                k.drawImage(a, g, q, x, f.x, f.height, u, A, f.x, s - f.y);
                k.drawImage(a, g, p, x, f.width, f.height, z, A, r - f.x, s - f.y);
                k.drawImage(a, g, n, x, v, f.height, u + r, A, d - r, s - f.y);
                k.drawImage(a, g, q, y, f.x, w, u, h + s, f.x, c - s);
                k.drawImage(a, g, p, y, f.width, w, z, h + s, r - f.x, c - s);
                k.drawImage(a, g, n, y, v, w, u + r, h + s, d - r, c - s)
            }
        };
        a.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.debug = !1;
        return a
    } (b.DisplayObject);
    b.Bitmap = c;
    c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._text = "";
            this._textChanged = !1;
            this._bitmapPool = []
        }
        __extends(a, d);
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
            this.visible && (this._textChanged && this._renderText(), d.prototype._updateTransform.call(this))
        };
        a.prototype._renderText = function(a) {
            var g = a = 0;
            this._textChanged && this.removeChildren();
            for (var f = 0,
            d = this.text.length; f < d; f++) {
                var c = this.text.charAt(f),
                h = this.spriteSheet.getTexture(c);
                if (null == h) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + c);
                else {
                    var c = h._offsetX,
                    k = h._offsetY,
                    p = h._textureWidth;
                    if (this._textChanged) {
                        var n = this._bitmapPool[f];
                        n || (n = new b.Bitmap, this._bitmapPool.push(n));
                        n.texture = h;
                        this.addChild(n);
                        n.x = a
                    }
                    a += p + c;
                    k + h._textureHeight > g && (g = k + h._textureHeight)
                }
            }
            this._textChanged = !1;
            return b.Rectangle.identity.initialize(0, 0, a, g)
        };
        a.prototype._measureBounds = function() {
            return this._renderText(!0)
        };
        return a
    } (b.DisplayObjectContainer);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.commandQueue = []
        }
        b.prototype.beginFill = function(a, e) {};
        b.prototype._setStyle = function(a) {};
        b.prototype.drawRect = function(a, e, b, f) {};
        b.prototype.drawCircle = function(a, e, b) {};
        b.prototype.drawRoundRect = function(a, e, b, f, d, c) {};
        b.prototype.drawEllipse = function(a, e, b, f) {};
        b.prototype.lineStyle = function(a, e, b, f, d, c, h, k) {};
        b.prototype.lineTo = function(a, e) {};
        b.prototype.curveTo = function(a, e, b, f) {};
        b.prototype.moveTo = function(a, e) {};
        b.prototype.clear = function() {};
        b.prototype.endFill = function() {};
        b.prototype._draw = function(a) {};
        return b
    } ();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics"; (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    })().prototype.__class__ = "Command"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
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
    } (b.DisplayObject);
    b.Shape = c;
    c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
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
            d.prototype._render.call(this, a)
        };
        return a
    } (b.DisplayObjectContainer);
    b.Sprite = c;
    c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
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
        __extends(a, d);
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
        a.prototype.drawText = function(a, g) {
            var f = this.getTextLines(a);
            if (!f) return b.Rectangle.identity.initialize(0, 0, 0, 0);
            var d = f.length,
            c = 0.5 * this._size,
            h = this._size + this._lineSpacing,
            k = d * h - this._lineSpacing;
            this._textHeight = k;
            var p = this._hasHeightSet ? this._explicitHeight: Number.POSITIVE_INFINITY;
            if (this._hasHeightSet && k < p) {
                var n = 0;
                this._verticalAlign == b.VerticalAlign.MIDDLE ? n = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (n = 1);
                c += n * (p - k)
            }
            var n = c = Math.round(c),
            q = 0;
            this._textAlign == b.HorizontalAlign.CENTER ? q = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (q = 1);
            var t = this.measuredWidths,
            r;
            r = this._hasWidthSet ? this._explicitWidth: this._textWidth;
            for (var s = Number.POSITIVE_INFINITY,
            u = 0; u < d; u++) {
                var v = f[u],
                x = Math.round((r - t[u]) * q);
                x < s && (s = x); ! g && c < p && a.drawText(this, v, x, c, r);
                c += h
            }
            return b.Rectangle.identity.initialize(s, n, r, k)
        };
        a.prototype.getTextLines = function(a) {
            var b = this.text ? this.text.toString() : "";
            if (!b) return null;
            var f = this.measuredWidths;
            f.length = 0;
            a.setupFont(this);
            var b = b.split(/(?:\r\n|\r|\n)/),
            d = b.length,
            c = 0;
            if (this._hasWidthSet) for (var h = this._explicitWidth,
            k = 0; k < d; k++) {
                var p = b[k],
                n = a.measureText(p);
                if (n > h) {
                    for (var q = "",
                    t = 0,
                    r = p.length,
                    s = 0; s < r; s++) {
                        var u = p.charAt(s),
                        n = a.measureText(u);
                        t + n > h && (0 == t ? (b.splice(k, 0, u), f[k] = n, c < n && (c = n), n = 0, u = "") : (b.splice(k, 0, q), f[k] = t, c < t && (c = t), q = "", t = 0), k++, d++);
                        t += n;
                        q += u
                    }
                    b[k] = q;
                    f[k] = t
                } else f[k] = n,
                c < n && (c = n)
            } else for (k = 0; k < d; k++) p = b[k],
            n = a.measureText(p),
            f[k] = n,
            c < n && (c = n);
            this._textWidth = c;
            return b
        };
        return a
    } (b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.DYNAMIC = "dynamic";
        b.INPUT = "input";
        return b
    } ();
    b.TextFieldType = c;
    c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            var b = a.bitmapData;
            this.bitmapData = b;
            this._textureMap = {};
            this._sourceWidth = b.width;
            this._sourceHeight = b.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(a, d);
        a.prototype.getTexture = function(a) {
            return this._textureMap[a]
        };
        a.prototype.createTexture = function(a, g, f, d, c, h, k, p, n) {
            "undefined" === typeof h && (h = 0);
            "undefined" === typeof k && (k = 0);
            "undefined" === typeof p && (p = h + d);
            "undefined" === typeof n && (n = k + c);
            var q = new b.Texture;
            q._bitmapData = this.bitmapData;
            q._bitmapX = this._bitmapX + g;
            q._bitmapY = this._bitmapY + f;
            q._bitmapWidth = d;
            q._bitmapHeight = c;
            q._offsetX = h;
            q._offsetY = k;
            q._textureWidth = p;
            q._textureHeight = n;
            q._sourceWidth = this._sourceWidth;
            q._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = q
        };
        return a
    } (b.HashObject);
    b.SpriteSheet = c;
    c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._size = 30;
            this._textColorString = "#FFFFFF";
            this._textColor = 16777215;
            this.stageText = new b.StageText;
            var a = this.localToGlobal();
            this.stageText._open(a.x, a.y, this._explicitWidth, this._explicitHeight)
        }
        __extends(a, d);
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            this.stageText._add();
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this)
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
        a.prototype.hitTest = function(a, b, f) {
            return null
        };
        a.prototype._updateTransform = function() {
            var a = this._worldTransform.a,
            b = this._worldTransform.b,
            f = this._worldTransform.c,
            c = this._worldTransform.d,
            l = this._worldTransform.tx,
            h = this._worldTransform.ty;
            d.prototype._updateTransform.call(this);
            var k = this._worldTransform;
            if (a != k.a || b != k.b || f != k.c || c != k.d || l != k.tx || h != k.ty) a = this.localToGlobal(),
            this.stageText.changePosition(a.x, a.y),
            this.stageText.changeSize(this._explicitWidth, this._explicitHeight)
        };
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._size != a && (this._size = a, this.stageText.setSize(this._size))
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._textColor != a && (this._textColor = a, this._textColorString = b.toColorString(a), this.stageText.setTextColor(this._textColorString))
            },
            enumerable: !0,
            configurable: !0
        });
        return a
    } (b.DisplayObject);
    b.TextInput = c;
    c.prototype.__class__ = "egret.TextInput"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a, g) {
            b.call(this, a);
            this.charList = this.parseConfig(g)
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
            for (var b = this.getConfigByKey(a[3], "count"), f = {},
            d = 4; d < 4 + b; d++) {
                var c = a[d],
                h = String.fromCharCode(this.getConfigByKey(c, "id")),
                k = {};
                f[h] = k;
                k.x = this.getConfigByKey(c, "x");
                k.y = this.getConfigByKey(c, "y");
                k.width = this.getConfigByKey(c, "width");
                k.height = this.getConfigByKey(c, "height");
                k.offsetX = this.getConfigByKey(c, "xoffset");
                k.offsetY = this.getConfigByKey(c, "yoffset")
            }
            return f
        };
        a.prototype.getConfigByKey = function(a, b) {
            for (var f = a.split(" "), d = 0, c = f.length; d < c; d++) {
                var h = f[d];
                if (b == h.substring(0, b.length)) return f = h.substring(b.length + 1),
                parseInt(f)
            }
            return 0
        };
        return a
    } (b.SpriteSheet);
    b.BitmapTextSpriteSheet = c;
    c.prototype.__class__ = "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(a) {
        function e(e, f) {
            a.call(this);
            this.frameRate = 60;
            e instanceof d ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new d(e, f);
            this.delegate.setMovieClip(this)
        }
        __extends(e, a);
        e.prototype.gotoAndPlay = function(a) {
            this.delegate.gotoAndPlay(a)
        };
        e.prototype.gotoAndStop = function(a) {
            this.delegate.gotoAndStop(a)
        };
        e.prototype.stop = function() {
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
    } (b.DisplayObjectContainer);
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip";
    var d = function() {
        function a(a, g) {
            this.data = a;
            this._currentFrameIndex = this._passTime = this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new b.SpriteSheet(g)
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
        a.prototype.gotoAndStop = function(a) {
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
            for (var b = 1E3 / this.movieClip.frameRate,
            b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1),
            b--;
            this._passTime += a
        };
        a.prototype.playNextFrame = function(a) {
            "undefined" === typeof a && (a = !0);
            var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(b.res);
                var f = this.bitmap;
                f.x = b.x;
                f.y = b.y;
                f.texture = a
            }
            null != b.action && this.movieClip.dispatchEventWith(b.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0)
        };
        a.prototype.getTexture = function(a) {
            var b = this._frameData.res[a],
            f = this._spriteSheet.getTexture(a);
            f || (f = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return f
        };
        return a
    } ();
    b.DefaultMovieClipDelegate = d;
    d.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._size = 20
        }
        __extends(a, d);
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
        a.prototype._open = function(a, g, f, d) {
            "undefined" === typeof f && (f = 160);
            d = b.StageDelegate.getInstance().getScaleX();
            var c = b.StageDelegate.getInstance().getScaleY(),
            h = document.createElement("input");
            h.type = "text";
            h.style.fontSize = this._size + "px";
            h.style.color = "#FFFFFF";
            h.style.border = "none";
            h.style.background = "none";
            h.style.width = f + "px";
            h.style.padding = "0";
            h.style.outline = "medium";
            var k = b.Browser.getInstance().$new("div");
            k.position.x = a * d;
            k.position.y = g * c;
            k.style.width = f + "px";
            k.scale.x = d;
            k.scale.y = c;
            k.transforms();
            k.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            k.appendChild(h);
            this.div = k;
            this.inputElement = h
        };
        a.prototype.getStageDelegateDiv = function() {
            var a = b.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
            return a
        };
        a.prototype._add = function() {
            var a = this.div;
            a && !a.parentNode && this.getStageDelegateDiv().appendChild(a)
        };
        a.prototype._remove = function() {
            var a = this.div;
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        a.prototype.changePosition = function(a, g) {
            var f = b.StageDelegate.getInstance().getScaleX(),
            d = b.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * f;
            this.div.position.y = g * d;
            this.div.transforms()
        };
        a.prototype.changeSize = function(a, b) {
            this.inputElement.style.width = a + "px";
            this.div.style.width = a + "px";
            this.div.transforms()
        };
        a.prototype.setSize = function(a) {
            this._size = a;
            this.inputElement.style.fontSize = this._size + "px"
        };
        a.prototype.setTextColor = function(a) {
            this.inputElement.style.color = a
        };
        return a
    } (b.HashObject);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.GET = "GET";
        b.POST = "POST";
        return b
    } ();
    b.URLRequestMethod = c;
    c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.BINARY = "binary";
        b.TEXT = "text";
        b.VARIABLES = "variables";
        b.TEXTURE = "texture";
        b.SOUND = "sound";
        return b
    } ();
    b.URLLoaderDataFormat = c;
    c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            b.call(this);
            null !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, f = /[?&]?([^=]+)=([^&]*)/g; b = f.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
        };
        a.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
            b = "",
            f = !0,
            d;
            for (d in a) f ? f = !1 : b += "&",
            b += d + "=" + a[d];
            return b
        };
        return a
    } (b.HashObject);
    b.URLVariables = c;
    c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.method = b.URLRequestMethod.GET;
            this.url = a
        }
        __extends(a, d);
        return a
    } (b.HashObject);
    b.URLRequest = c;
    c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            a && this.load(a)
        }
        __extends(a, d);
        a.prototype.load = function(a) {
            this._request = a;
            this.data = null;
            b.MainContext.instance.netContext.proceed(this)
        };
        return a
    } (b.EventDispatcher);
    b.URLLoader = c;
    c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
        }
        __extends(a, d);
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
            var g = b.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * g;
            this._textureHeight = this._sourceHeight * g;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        };
        a.prototype.getPixel32 = function(a, b) {
            return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
        };
        return a
    } (b.HashObject);
    b.Texture = c;
    c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        }
        __extends(a, d);
        a.prototype.drawToTexture = function(a) {
            var g = this._bitmapData,
            f = a.getBounds(b.Rectangle.identity);
            g.width = f.width;
            g.height = f.height;
            a._worldTransform.identity();
            a.worldAlpha = 1;
            if (a instanceof b.DisplayObjectContainer) {
                this._offsetX = f.x;
                this._offsetY = f.y;
                a._worldTransform.append(1, 0, 0, 1, -f.x, -f.y);
                for (var g = a._children,
                f = 0,
                d = g.length; f < d; f++) g[f]._updateTransform()
            }
            g = b.RenderFilter.getInstance();
            f = g._drawAreaList.concat();
            g._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.webGLTexture = null; (d = a.mask || a._scrollRect) && this.renderContext.pushMask(d);
            a._render(this.renderContext);
            d && this.renderContext.popMask();
            g._drawAreaList = f;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight
        };
        return a
    } (b.Texture);
    b.RenderTexture = c;
    c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {};
        a.prototype.clearRect = function(a, b, f, d) {};
        a.prototype.drawImage = function(a, g, f, d, c, h, k, p, n) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.setTransform = function(a) {};
        a.prototype.setAlpha = function(a, b) {};
        a.prototype.setupFont = function(a) {};
        a.prototype.measureText = function(a) {
            return 0
        };
        a.prototype.drawText = function(a, g, f, d, c) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.strokeRect = function(a, b, f, d, c) {};
        a.prototype.pushMask = function(a) {};
        a.prototype.popMask = function() {};
        a.prototype.onRenderStart = function() {};
        a.prototype.onRenderFinish = function() {};
        a.createRendererContext = function(a) {
            return null
        };
        return a
    } (b.HashObject);
    b.RendererContext = c;
    c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.MOUSE = "mouse";
        b.TOUCH = "touch";
        b.mode = "touch";
        return b
    } ();
    b.InteractionMode = c;
    c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.touchingIdentifiers = [];
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(a, d);
        a.prototype.run = function() {};
        a.prototype.getTouchData = function(a, b, f) {
            var d = this._currentTouchTarget[a];
            null == d && (d = {},
            this._currentTouchTarget[a] = d);
            d.stageX = b;
            d.stageY = f;
            d.identifier = a;
            return d
        };
        a.prototype.dispatchEvent = function(a, g) {
            b.TouchEvent.dispatchTouchEvent(g.target, a, g.identifier, g.stageX, g.stageY, !1, !1, !1, !0 == this.touchDownTarget[g.identifier])
        };
        a.prototype.onTouchBegan = function(a, g, d) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var c = b.MainContext.instance.stage.hitTest(a, g);
                c && (a = this.getTouchData(d, a, g), this.touchDownTarget[d] = !0, a.target = c, a.beginTarget = c, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(d)
            }
        };
        a.prototype.onTouchMove = function(a, g, d) {
            if ( - 1 != this.touchingIdentifiers.indexOf(d) && (a != this.lastTouchX || g != this.lastTouchY)) {
                this.lastTouchX = a;
                this.lastTouchY = g;
                var c = b.MainContext.instance.stage.hitTest(a, g);
                c && (a = this.getTouchData(d, a, g), a.target = c, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        };
        a.prototype.onTouchEnd = function(a, g, d) {
            var c = this.touchingIdentifiers.indexOf(d); - 1 != c && (this.touchingIdentifiers.splice(c, 1), c = b.MainContext.instance.stage.hitTest(a, g)) && (a = this.getTouchData(d, a, g), delete this.touchDownTarget[d], d = a.beginTarget, a.target = c, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), d == c ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return a
    } (b.HashObject);
    b.TouchContext = c;
    c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.proceed = function(a) {};
        return a
    } (b.HashObject);
    b.NetContext = c;
    c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.frameRate = 60
        }
        __extends(a, b);
        a.prototype.executeMainLoop = function(a, b) {};
        return a
    } (b.HashObject);
    b.DeviceContext = c;
    c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.call = function(a, e) {};
        b.addCallback = function(a, e) {};
        return b
    } ();
    b.ExternalInterface = c;
    c.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.translate = this.isHD ?
            function(a) {
                return "translate3d(" + a.x + "px, " + (a.y - b.MainContext.instance.stage.stageHeight) + "px, 0) "
            }: function(a) {
                return "translate(" + a.x + "px, " + a.y + "px) "
            };
            this.rotate = this.isHD ?
            function(a) {
                return "rotateZ(" + a + "deg) "
            }: function(a) {
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
                this.pfx = "webkit",
                this.isHD = !0
            }
            this.trans = this.pfx + "Transform"
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        Object.defineProperty(a.prototype, "isMobile", {
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
            var g = document;
            if (e = e instanceof HTMLElement ? e: g.querySelector(e)) e.find = e.find || this.$,
            e.hasClass = e.hasClass ||
            function(a) {
                return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
            },
            e.addClass = e.addClass ||
            function(a) {
                this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                return this
            },
            e.removeClass = e.removeClass ||
            function(a) {
                this.hasClass(a) && (this.className = this.className.replace(a, ""));
                return this
            },
            e.remove = e.remove ||
            function() {},
            e.appendTo = e.appendTo ||
            function(a) {
                a.appendChild(this);
                return this
            },
            e.prependTo = e.prependTo ||
            function(a) {
                a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                return this
            },
            e.transforms = e.transforms ||
            function() {
                this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
                return this
            },
            e.position = e.position || {
                x: 0,
                y: 0
            },
            e.rotation = e.rotation || 0,
            e.scale = e.scale || {
                x: 1,
                y: 1
            },
            e.skew = e.skew || {
                x: 0,
                y: 0
            },
            e.translates = function(a, e) {
                this.position.x = a;
                this.position.y = e - b.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            },
            e.rotate = function(a) {
                this.rotation = a;
                this.transforms();
                return this
            },
            e.resize = function(a, e) {
                this.scale.x = a;
                this.scale.y = e;
                this.transforms();
                return this
            },
            e.setSkew = function(a, e) {
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
    } (b.HashObject);
    b.Browser = c;
    c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes) return null;
            for (var e = a.childNodes.length,
            g = !1,
            c = 0; c < e; c++) {
                var m = a.childNodes[c];
                if (1 == m.nodeType) {
                    g = !0;
                    break
                }
            }
            return g ? d.parseNode(m) : null
        };
        d.parseNode = function(a) {
            if (!a || 1 != a.nodeType) return null;
            var e = {};
            e.localName = a.localName;
            e.name = a.nodeName;
            a.namespaceURI && (e.namespace = a.namespaceURI);
            a.prefix && (e.prefix = a.prefix);
            for (var b = a.attributes,
            c = b.length,
            m = 0; m < c; m++) {
                var l = b[m],
                h = l.name;
                0 != h.indexOf("xmlns:") && (e["$" + h] = l.value)
            }
            b = a.childNodes;
            c = b.length;
            for (m = 0; m < c; m++) if (l = d.parseNode(b[m])) e.children || (e.children = []),
            l.parent = e,
            e.children.push(l); ! e.children && (a = a.textContent.trim()) && (e.text = a);
            return e
        };
        d.findChildren = function(a, e, b) {
            b ? b.length = 0 : b = [];
            d.findByPath(a, e, b);
            return b
        };
        d.findByPath = function(a, e, b) {
            var c = e.indexOf("."),
            m; - 1 == c ? (m = e, c = !0) : (m = e.substring(0, c), e = e.substring(c + 1), c = !1);
            if (a = a.children) for (var l = a.length,
            h = 0; h < l; h++) {
                var k = a[h];
                k.localName == m && (c ? b.push(k) : d.findByPath(k, e, b))
            }
        };
        d.getAttributes = function(a, e) {
            e ? e.length = 0 : e = [];
            for (var b in a)"$" == b.charAt(0) && e.push(b.substring(1));
            return e
        };
        return d
    } ();
    b.XML = c;
    c.prototype.__class__ = "egret.XML"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function a() {}
        a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        a.BIG_ENDIAN = "BIG_ENDIAN";
        return a
    } ();
    b.Endian = c;
    c.prototype.__class__ = "egret.Endian";
    var d = function() {
        function a() {
            this.length = this.position = 0;
            this._mode = "";
            this.maxlength = 0;
            this._endian = c.LITTLE_ENDIAN;
            this.isLittleEndian = !1;
            this._mode = "Typed array";
            this.maxlength = 4;
            this.arraybytes = new ArrayBuffer(this.maxlength);
            this.unalignedarraybytestemp = new ArrayBuffer(16);
            this.endian = a.DEFAULT_ENDIAN
        }
        Object.defineProperty(a.prototype, "endian", {
            get: function() {
                return this._endian
            },
            set: function(a) {
                this._endian = a;
                this.isLittleEndian = a == c.LITTLE_ENDIAN
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
            a = new Int8Array(a); (new Int8Array(this.arraybytes, 0, this.length)).set(a);
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
                d = new Uint8Array(this.arraybytes, 0, this.length); (new Uint8Array(b, 0, this.length)).set(d);
                this.arraybytes = b;
                this.maxlength = a
            }
        };
        a.prototype.writeByte = function(a) {
            this.ensureWriteableSpace(1); (new Int8Array(this.arraybytes))[this.position++] = ~~a;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Int8Array(this.arraybytes))[this.position++]
        };
        a.prototype.readBytes = function(a, b, d) {
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof d && (d = 0);
            null == d && (d = a.length);
            a.ensureWriteableSpace(b + d);
            var c = new Int8Array(a.arraybytes),
            l = new Int8Array(this.arraybytes);
            c.set(l.subarray(this.position, this.position + d), b);
            this.position += d;
            d + b > a.length && (a.length += d + b - a.length)
        };
        a.prototype.writeUnsignedByte = function(a) {
            this.ensureWriteableSpace(1); (new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
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
            } else b = new Uint16Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 65535,
            a = new Uint8Array(this.arraybytes, this.position, 2),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 2),
            a.set(b);
            this.position += 2;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readUTFBytes = function(a) {
            var b = "";
            a = this.position + a;
            for (var d = new DataView(this.arraybytes); this.position < a;) {
                var c = d.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    b += String.fromCharCode(c)
                } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | d.getUint8(this.position++) & 127);
                else if (240 > c) var l = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 31) << 12 | (l & 127) << 6 | d.getUint8(this.position++) & 127);
                else var l = d.getUint8(this.position++),
                h = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 15) << 18 | (l & 127) << 12 | h << 6 & 127 | d.getUint8(this.position++) & 127)
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
            b = new Uint8Array(this.arraybytes, this.position, 2); (new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(b);
            this.position += 2;
            return a[0]
        };
        a.prototype.writeUnsignedInt = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Uint32Array(this.arraybytes);
                b[this.position >> 2] = ~~a & 4294967295
            } else b = new Uint32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 4294967295,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
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
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.prototype.writeFloat = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Float32Array(this.arraybytes);
                b[this.position >> 2] = a
            } else b = new Float32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = a,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readFloat = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Float32Array(this.arraybytes),
                b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
        return a
    } ();
    b.ByteArray = d;
    d.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a, b, c) {
            d.call(this);
            this._target = null;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this.pluginData = null;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, b, c)
        }
        __extends(a, d);
        a.get = function(e, b, d, c) {
            "undefined" === typeof b && (b = null);
            "undefined" === typeof d && (d = null);
            "undefined" === typeof c && (c = !1);
            c && a.removeTweens(e);
            return new a(e, b, d)
        };
        a.removeTweens = function(e) {
            if (e.tween_count) {
                for (var b = a._tweens,
                d = b.length - 1; 0 <= d; d--) b[d]._target == e && (b[d].paused = !0, b.splice(d, 1));
                e.tween_count = 0
            }
        };
        a.tick = function(e, b) {
            "undefined" === typeof b && (b = !1);
            for (var d = a._tweens.concat(), c = d.length - 1; 0 <= c; c--) {
                var l = d[c];
                b && !l.ignoreGlobalPause || l.paused || l.tick(l._useTicks ? 1 : e)
            }
        };
        a._register = function(e, d) {
            var c = e._target,
            m = a._tweens;
            if (d) c && (c.tween_count = c.tween_count ? c.tween_count + 1 : 1),
            m.push(e),
            a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
            else for (c && c.tween_count--, c = m.length; c--;) if (m[c] == e) {
                m.splice(c, 1);
                break
            }
        };
        a.removeAllTweens = function() {
            for (var e = a._tweens,
            b = 0,
            d = e.length; b < d; b++) {
                var c = e[b];
                c.paused = !0;
                c._target.tweenjs_count = 0
            }
            e.length = 0
        };
        a.prototype.initialize = function(e, b, d) {
            this._target = e;
            b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
            this.pluginData = d || {};
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
            var d = a,
            c = !1;
            d >= this.duration && (this.loop ? d %= this.duration: (d = this.duration, c = !0));
            if (d == this._prevPos) return c;
            var l = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target) if (c) this._updateTargetProps(null, 1);
            else if (0 < this._steps.length) {
                for (var h = 0,
                k = this._steps.length; h < k && !(this._steps[h].t > d); h++);
                h = this._steps[h - 1];
                this._updateTargetProps(h, (this._stepPosition = d - h.t) / h.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < l ? (l != this.duration && this._runActions(l, this.duration), this._runActions(0, d, !0)) : this._runActions(l, d));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        };
        a.prototype._runActions = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            var c = a,
            l = b,
            h = -1,
            k = this._actions.length,
            p = 1;
            a > b && (c = b, l = a, h = k, k = p = -1);
            for (; (h += p) != k;) {
                b = this._actions[h];
                var n = b.t; (n == l || n > c && n < l || d && n == a) && b.f.apply(b.o, b.p)
            }
        };
        a.prototype._updateTargetProps = function(e, b) {
            var d, c, l, h;
            if (e || 1 != b) {
                if (this.passive = !!e.v) return;
                e.e && (b = e.e(b, 0, 1, 1));
                d = e.p0;
                c = e.p1
            } else this.passive = !1,
            d = c = this._curQueueProps;
            for (var k in this._initQueueProps) {
                null == (l = d[k]) && (d[k] = l = this._initQueueProps[k]);
                null == (h = c[k]) && (c[k] = h = l);
                l = l == h || 0 == b || 1 == b || "number" != typeof l ? 1 == b ? h: l: l + (h - l) * b;
                var p = !1;
                if (h = a._plugins[k]) for (var n = 0,
                q = h.length; n < q; n++) {
                    var t = h[n].tween(this, k, l, d, c, b, !!e && d == c, !e);
                    t == a.IGNORE ? p = !0 : l = t
                }
                p || (this._target[k] = l)
            }
        };
        a.prototype.setPaused = function(e) {
            this.paused = e;
            a._register(this, !e);
            return this
        };
        a.prototype._cloneProps = function(a) {
            var b = {},
            d;
            for (d in a) b[d] = a[d];
            return b
        };
        a.prototype._addStep = function(a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        a.prototype._appendQueueProps = function(e) {
            var b, d, c, l, h, k;
            for (k in e) if (void 0 === this._initQueueProps[k]) {
                d = this._target[k];
                if (b = a._plugins[k]) for (c = 0, l = b.length; c < l; c++) d = b[c].init(this, k, d);
                this._initQueueProps[k] = this._curQueueProps[k] = void 0 === d ? null: d
            }
            for (k in e) {
                d = this._curQueueProps[k];
                if (b = a._plugins[k]) for (h = h || {},
                c = 0, l = b.length; c < l; c++) b[c].step && b[c].step(this, k, d, e[k], h);
                this._curQueueProps[k] = e[k]
            }
            h && this._appendQueueProps(h);
            return this._curQueueProps
        };
        a.prototype._addAction = function(a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        a.prototype._set = function(a, b) {
            for (var d in a) b[d] = a[d]
        };
        a.prototype.wait = function(a, b) {
            if (null == a || 0 >= a) return this;
            var d = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: d,
                p1: d,
                v: b
            })
        };
        a.prototype.to = function(a, b, d) {
            "undefined" === typeof d && (d = void 0);
            if (isNaN(b) || 0 > b) b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: d,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        a.prototype.call = function(a, b, d) {
            "undefined" === typeof b && (b = void 0);
            "undefined" === typeof d && (d = void 0);
            return this._addAction({
                f: a,
                p: d ? d: [],
                o: b ? b: this._target
            })
        };
        a.prototype.set = function(a, b) {
            "undefined" === typeof b && (b = null);
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, b ? b: this._target]
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
    } (b.EventDispatcher);
    b.Tween = c;
    c.prototype.__class__ = "egret.Tween"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {
            b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }
        d.get = function(a) { - 1 > a && (a = -1);
            1 < a && (a = 1);
            return function(b) {
                return 0 == a ? b: 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        };
        d.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        };
        d.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        };
        d.getPowInOut = function(a) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        };
        d.sineIn = function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        };
        d.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        };
        d.sineInOut = function(a) {
            return - 0.5 * (Math.cos(Math.PI * a) - 1)
        };
        d.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        };
        d.getBackOut = function(a) {
            return function(b) {
                b -= 1;
                return b * b * ((a + 1) * b + a) + 1
            }
        };
        d.getBackInOut = function(a) {
            a *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        };
        d.circIn = function(a) {
            return - (Math.sqrt(1 - a * a) - 1)
        };
        d.circOut = function(a) {
            return Math.sqrt(1 - a * a)
        };
        d.circInOut = function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        d.bounceIn = function(a) {
            return 1 - d.bounceOut(1 - a)
        };
        d.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        d.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * d.bounceIn(2 * a) : 0.5 * d.bounceOut(2 * a - 1) + 0.5
        };
        d.getElasticIn = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var m = b / d * Math.asin(1 / a);
                return - (a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - m) * d / b))
            }
        };
        d.getElasticOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var m = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - m) * d / b) + 1
            }
        };
        d.getElasticInOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                var m = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - m) * d / b) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - m) * d / b) * 0.5 + 1
            }
        };
        d.quadIn = d.getPowIn(2);
        d.quadOut = d.getPowOut(2);
        d.quadInOut = d.getPowInOut(2);
        d.cubicIn = d.getPowIn(3);
        d.cubicOut = d.getPowOut(3);
        d.cubicInOut = d.getPowInOut(3);
        d.quartIn = d.getPowIn(4);
        d.quartOut = d.getPowOut(4);
        d.quartInOut = d.getPowInOut(4);
        d.quintIn = d.getPowIn(5);
        d.quintOut = d.getPowOut(5);
        d.quintInOut = d.getPowInOut(5);
        d.backIn = d.getBackIn(1.7);
        d.backOut = d.getBackOut(1.7);
        d.backInOut = d.getBackInOut(1.7);
        d.elasticIn = d.getElasticIn(1, 0.3);
        d.elasticOut = d.getElasticOut(1, 0.3);
        d.elasticInOut = d.getElasticInOut(1, 0.3 * 1.5);
        return d
    } ();
    b.Ease = c;
    c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.type = b.EFFECT
        }
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
        b.prototype.setVolume = function(a) {
            var b = this.audio;
            b && (b.volume = a)
        };
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume: 0
        };
        b.prototype.preload = function(a) {
            this.type = a
        };
        b.prototype._setAudio = function(a) {
            this.audio = a
        };
        b.MUSIC = "music";
        b.EFFECT = "effect";
        return b
    } ();
    b.Sound = c;
    c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        return b
    } ();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
RES; (function(b) {
    var c = function(b) {
        function a(a, c, f) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof f && (f = !1);
            b.call(this, a, c, f);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, d, c, m, l, h) {
            "undefined" === typeof c && (c = "");
            "undefined" === typeof m && (m = null);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof h && (h = 0);
            var k = egret.Event._getPropertyData(a);
            k.groupName = c;
            k.resItem = m;
            k.itemsLoaded = l;
            k.itemsTotal = h;
            egret.Event._dispatchByTarget(a, b, d, k)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        return a
    } (egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function b(a, e, c) {
            this._loaded = !1;
            this.name = a;
            this.url = e;
            this.type = c
        }
        Object.defineProperty(b.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded: this._loaded
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
        b.TYPE_JSON = "json";
        b.TYPE_SHEET = "sheet";
        b.TYPE_FONT = "font";
        b.TYPE_SOUND = "sound";
        return b
    } ();
    b.ResourceItem = c;
    c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function c() {
            this.keyMap = {};
            this.groupDic = {}
        }
        c.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a]) return b;
            a = this.groupDic[a];
            for (var c = a.length,
            d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
            return b
        };
        c.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        c.prototype.createGroup = function(a, b, c) {
            "undefined" === typeof c && (c = !1);
            if (!c && this.groupDic[a] || !b || 0 == b.length) return ! 1;
            c = this.groupDic;
            for (var d = [], m = b.length, l = 0; l < m; l++) {
                var h = b[l],
                k = c[h];
                if (k) for (var h = k.length,
                p = 0; p < h; p++) {
                    var n = k[p]; - 1 == d.indexOf(n) && d.push(n)
                } else(n = this.keyMap[h]) && -1 == d.indexOf(n) && d.push(n)
            }
            if (0 == d.length) return ! 1;
            this.groupDic[a] = d;
            return ! 0
        };
        c.prototype.parseConfig = function(a, b) {
            if (a) {
                var c = a.resources;
                if (c) for (var d = c.length,
                m = 0; m < d; m++) {
                    var l = c[m],
                    h = l.url;
                    h && -1 == h.indexOf("://") && (l.url = b + h);
                    this.addItemToKeyMap(l)
                }
                if (c = a.groups) for (d = c.length, m = 0; m < d; m++) {
                    for (var h = c[m], k = [], p = h.keys.split(","), n = p.length, q = 0; q < n; q++) l = p[q].trim(),
                    (l = this.keyMap[l]) && -1 == k.indexOf(l) && k.push(l);
                    this.groupDic[h.name] = k
                }
            }
        };
        c.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var c = b.length,
                d = 0; d < c; d++) {
                    var m = b[d];
                    null == this.keyMap[m] && (this.keyMap[m] = a)
                }
            }
        };
        c.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name: ""
        };
        c.prototype.getType = function(a) {
            return (a = this.keyMap[a]) ? a.type: ""
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
    } ();
    b.ResourceConfig = c;
    c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
            if (!this.itemListDic[c] && c) if (a && 0 != a.length) {
                this.priorityQueue[d] ? this.priorityQueue[d].push(c) : this.priorityQueue[d] = [c];
                this.itemListDic[c] = a;
                d = a.length;
                for (var m = 0; m < d; m++) a[m].groupName = c;
                this.groupTotalDic[c] = a.length;
                this.numLoadedDic[c] = 0;
                this.next()
            } else a = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE),
            a.groupName = c,
            this.dispatchEvent(a)
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
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            b = a.length;
            for (var c, d = 0; d < b; d++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                c = this.itemListDic[a[this.queueIndex]];
                if (0 < c.length) break;
                this.queueIndex++
            }
            return 0 == c.length ? null: c.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var c = a.groupName;
            a.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, c, a);
            if (c) {
                this.numLoadedDic[c]++;
                var d = this.numLoadedDic[c],
                m = this.groupTotalDic[c];
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, c, a, d, m);
                d == m && (this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, c))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var c = this.priorityQueue[b], d = c.length, l = 0, h = !1, d = c.length, k = 0; k < d; k++) {
                    if (c[k] == a) {
                        c.splice(l, 1);
                        h = !0;
                        break
                    }
                    l++
                }
                if (h) {
                    0 == c.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return a
    } (egret.EventDispatcher);
    b.ResourceLoader = c;
    c.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, c) {};
        a.prototype.getRes = function(a) {};
        a.prototype.destroyRes = function(a) {
            return ! 1
        };
        a.getStringPrefix = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(0, b) : ""
        };
        a.getStringTail = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(b + 1) : ""
        };
        return a
    } (egret.HashObject);
    b.AnalyzerBase = c;
    c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d = c.item,
            l = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            l.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b)
        };
        a.prototype.getRes = function(a) {
            return this.fileDic[a]
        };
        a.prototype.hasRes = function(a) {
            return null != this.getRes(a)
        };
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
        };
        return a
    } (b.AnalyzerBase);
    b.BinAnalyzer = c;
    c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
        };
        return a
    } (b.BinAnalyzer);
    b.ImageAnalyzer = c;
    c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) try {
                this.fileDic[c] = JSON.parse(b)
            } catch(d) {
                egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + NaN + b)
            }
        };
        return a
    } (b.BinAnalyzer);
    b.JsonAnalyzer = c;
    c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    } (b.BinAnalyzer);
    b.TextAnalyzer = c;
    c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a() {
            c.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, c);
        a.prototype.getRes = function(a) {
            var c = this.fileDic[a];
            c || (c = this.textureMap[a]); ! c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = b.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
            return c
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d = c.item,
            l = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, l, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : l.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d;
                if ("string" == typeof b) {
                    try {
                        d = JSON.parse(b)
                    } catch(l) {
                        egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                    }
                    d && (this.sheetMap[c] = d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
                } else d = this.sheetMap[c],
                delete this.sheetMap[c],
                b && (d = this.parseSpriteSheet(b, d), this.fileDic[c] = d)
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var c = a.lastIndexOf("/");
            return a = -1 != c ? a.substring(0, c + 1) + b: b
        };
        a.prototype.parseSpriteSheet = function(a, b) {
            var c = b.frames;
            if (!c) return null;
            var d = new egret.SpriteSheet(a),
            l = this.textureMap,
            h;
            for (h in c) {
                var k = c[h];
                a = d.createTexture(h, k.x, k.y, k.w, k.h, k.offX, k.offY, k.sourceW, k.sourceH);
                k.scale9grid && (k = k.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(k[0]), parseInt(k[1]), parseInt(k[2]), parseInt(k[3])));
                null == l[h] && (l[h] = a)
            }
            return d
        };
        return a
    } (b.BinAnalyzer);
    b.SheetAnalyzer = c;
    c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            l = d.indexOf('file="'); - 1 != l && (d = d.substring(l + 6), l = d.indexOf('"'), c = d.substring(0, l));
            a = a.split("\\").join("/");
            l = a.lastIndexOf("/");
            return a = -1 != l ? a.substring(0, l + 1) + c: c
        };
        return a
    } (b.SheetAnalyzer);
    b.FontAnalyzer = c;
    c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType && b.preload(c.soundType))
        };
        return a
    } (b.BinAnalyzer);
    b.SoundAnalyzer = c;
    c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            } catch(l) {}
        };
        return a
    } (b.BinAnalyzer);
    b.XMLAnalyzer = c;
    c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    b.loadConfig = function(a, b, c) {
        "undefined" === typeof b && (b = "");
        "undefined" === typeof c && (c = "json");
        d.loadConfig(a, b, c)
    };
    b.loadGroup = function(a, b) {
        "undefined" === typeof b && (b = 0);
        d.loadGroup(a, b)
    };
    b.isGroupLoaded = function(a) {
        return d.isGroupLoaded(a)
    };
    b.getGroupByName = function(a) {
        return d.getGroupByName(a)
    };
    b.createGroup = function(a, b, c) {
        "undefined" === typeof c && (c = !1);
        return d.createGroup(a, b, c)
    };
    b.hasRes = function(a) {
        return d.hasRes(a)
    };
    b.getRes = function(a) {
        return d.getRes(a)
    };
    b.getResAsync = function(a, b, c) {
        d.getResAsync(a, b, c)
    };
    b.getResByUrl = function(a, b, c, f) {
        "undefined" === typeof f && (f = "");
        d.getResByUrl(a, b, c, f)
    };
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    };
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    };
    b.addEventListener = function(a, b, c, f, m) {
        "undefined" === typeof f && (f = !1);
        "undefined" === typeof m && (m = 0);
        d.addEventListener(a, b, c, f, m)
    };
    b.removeEventListener = function(a, b, c, f) {
        "undefined" === typeof f && (f = !1);
        d.removeEventListener(a, b, c, f)
    };
    var c = function(a) {
        function e() {
            a.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(e, a);
        e.prototype.getAnalyzerByType = function(a) {
            var e = this.analyzerDic[a];
            e || (e = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
            return e
        };
        e.prototype.init = function() {
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, b.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
            this.resConfig = new b.ResourceConfig;
            this.resLoader = new b.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
        };
        e.prototype.loadConfig = function(a, b, e) {
            "undefined" === typeof e && (e = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: e
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        e.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var c = a.length,
            d = [], l = 0; l < c; l++) {
                var h = a[l],
                h = new b.ResourceItem(h.url, h.url, h.type);
                d.push(h)
            }
            this.resLoader.loadGroup(d, e.GROUP_CONFIG, Number.MAX_VALUE)
        };
        e.prototype.isGroupLoaded = function(a) {
            return - 1 != this.loadedGroups.indexOf(a)
        };
        e.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        e.prototype.loadGroup = function(a, b) {
            "undefined" === typeof b && (b = 0);
            if ( - 1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
                var e = this.resConfig.getGroupByName(a);
                this.resLoader.loadGroup(e, a, b)
            } else this.groupNameList.push({
                name: a,
                priority: b
            })
        };
        e.prototype.createGroup = function(a, b, e) {
            "undefined" === typeof e && (e = !1);
            if (e) {
                var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1)
            }
            return this.resConfig.createGroup(a, b, e)
        };
        e.prototype.onGroupComp = function(a) {
            if (a.groupName == e.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var c = 0; c < a; c++) {
                    var d = this.loadingConfigList[c],
                    l = this.getAnalyzerByType(d.type),
                    h = l.getRes(d.url);
                    l.destroyRes(d.url);
                    this.resConfig.parseConfig(h, d.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                d = this.groupNameList;
                a = d.length;
                for (c = 0; c < a; c++) l = d[c],
                this.loadGroup(l.name, l.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(a.groupName),
            this.dispatchEvent(a)
        };
        e.prototype.hasRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (a = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(a), "" == e) ? !1 : !0
        };
        e.prototype.getRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (e = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(e), "" == e) ? null: this.getAnalyzerByType(e).getRes(a)
        };
        e.prototype.getResAsync = function(a, e, c) {
            var d = this.resConfig.getType(a),
            h = this.resConfig.getName(a);
            if ("" == d && (h = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(h), "" == d)) {
                e.call(c, null);
                return
            } (d = this.getAnalyzerByType(d).getRes(a)) ? e.call(c, d) : (a = {
                key: a,
                compFunc: e,
                thisObject: c
            },
            this.asyncDic[h] ? this.asyncDic[h].push(a) : (this.asyncDic[h] = [a], h = this.resConfig.getResourceItem(h), this.resLoader.loadItem(h)))
        };
        e.prototype.getResByUrl = function(a, e, c, d) {
            "undefined" === typeof d && (d = "");
            if (a) {
                d || (d = this.getTypeByUrl(a));
                var h = this.getAnalyzerByType(d).getRes(a);
                h ? e.call(c, h) : (e = {
                    key: a,
                    compFunc: e,
                    thisObject: c
                },
                this.asyncDic[a] ? this.asyncDic[a].push(e) : (this.asyncDic[a] = [e], a = new b.ResourceItem(a, a, d), this.resLoader.loadItem(a)))
            } else e.call(c, null)
        };
        e.prototype.getTypeByUrl = function(a) { (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
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
        e.prototype.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var e = b.length,
            c = 0; c < e; c++) {
                var d = b[c],
                k = a.getRes(d.key);
                d.compFunc.call(d.thisObject, k, d.key)
            }
        };
        e.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var e = this.loadedGroups.indexOf(a); - 1 != e && this.loadedGroups.splice(e, 1);
                a = b.length;
                for (var c = 0; c < a; c++) {
                    e = b[c];
                    e.loaded = !1;
                    var d = this.getAnalyzerByType(e.type);
                    d.destroyRes(e.name)
                }
                return ! 0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return ! 1;
            e = this.resConfig.getRawResourceItem(a);
            e.loaded = !1;
            d = this.getAnalyzerByType(b);
            return d.destroyRes(a)
        };
        e.prototype.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        };
        e.GROUP_CONFIG = "RES__CONFIG";
        return e
    } (egret.EventDispatcher);
    c.prototype.__class__ = "Resource";
    var d = new c
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(b) {
            "undefined" === typeof b && (b = 60);
            c.call(this);
            this.frameRate = b;
            this._time = 0;
            60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
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
            var e = a.instance,
            c = a._thisObject,
            d = a._callback,
            m = b.getTimer(),
            l = m - e._time;
            e._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            d.call(c, l);
            e._time = m
        };
        a.prototype.executeMainLoop = function(b, c) {
            a._callback = b;
            a._thisObject = c;
            this.enterFrame()
        };
        a.prototype.reset = function() {
            var e = a.instance;
            e._requestAnimationId && (e._time = b.getTimer(), a.cancelAnimationFrame.call(window, e._requestAnimationId), e.enterFrame())
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
            var d, m;
            "undefined" !== typeof document.hidden ? (d = "hidden", m = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (d = "mozHidden", m = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (d = "msHidden", m = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (d = "webkitHidden", m = "webkitvisibilitychange");
            "onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", b, !1);
            d && m && document.addEventListener(m, c, !1)
        };
        return a
    } (b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(a) {
            this.canvas = a;
            this.canvasContext = a.getContext("2d");
            var b = this.canvasContext.setTransform,
            f = this;
            this.canvasContext.setTransform = function(a, c, e, d, p, n) {
                f._matrixA = a;
                f._matrixB = c;
                f._matrixC = e;
                f._matrixD = d;
                f._matrixTx = p;
                f._matrixTy = n;
                b.call(f.canvasContext, a, c, e, d, p, n)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            c.call(this)
        }
        __extends(a, c);
        a.prototype.clearScreen = function() {
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, d = a.length; c < d; c++) {
                var m = a[c];
                this.clearRect(m.x + this._transformTx, m.y + this._transformTy, m.width, m.height)
            }
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, c, d) {
            this.canvasContext.clearRect(a, b, c, d)
        };
        a.prototype.drawImage = function(a, g, f, m, l, h, k, p, n) {
            g /= b.MainContext.instance.rendererContext.texture_scale_factor;
            f /= b.MainContext.instance.rendererContext.texture_scale_factor;
            m /= b.MainContext.instance.rendererContext.texture_scale_factor;
            l /= b.MainContext.instance.rendererContext.texture_scale_factor;
            a = a._bitmapData;
            h += this._transformTx;
            k += this._transformTy;
            var q = b.getTimer();
            this.canvasContext.drawImage(a, g, f, m, l, h, k, p, n);
            c.prototype.drawImage.call(this, a, g, f, m, l, h, k, p, n);
            this.renderCost += b.getTimer() - q
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha = function(a, c) {
            a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
            c ? (this.blendValue = c, this.canvasContext.globalCompositeOperation = c) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = b.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = b.BlendMode.NORMAL)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            c = a.italic ? "italic ": "normal ",
            c = c + (a.bold ? "bold ": "normal "),
            c = c + (a.size + "px " + a.fontFamily);
            b.font = c;
            b.textAlign = "left";
            b.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, b, f, m, l) {
            var h = a._strokeColorString,
            k = a.stroke,
            p = this.canvasContext;
            p.fillStyle = a._textColorString;
            p.strokeStyle = h;
            k && (p.lineWidth = 2 * k, p.strokeText(b, f + this._transformTx, m + this._transformTy, l || 65535));
            p.fillText(b, f + this._transformTx, m + this._transformTy, l || 65535);
            c.prototype.drawText.call(this, a, b, f, m, l)
        };
        a.prototype.strokeRect = function(a, b, c, d, l) {
            this.canvasContext.strokeStyle = l;
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
        a.prototype.onRenderStart = function() {
            this.canvasContext.save()
        };
        a.prototype.onRenderFinish = function() {
            this.canvasContext.restore();
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        return a
    } (b.RendererContext);
    b.HTML5CanvasRenderer = c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics; (function(b) {
    b.beginFill = function(b, a) {
        "undefined" === typeof a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this.commandQueue.push(new c(this._setStyle, this, [e]))
    };
    b.drawRect = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(d._transformTx + a, d._transformTy + b, c, e);
            this.canvasContext.closePath()
        },
        this, [b, a, e, g]));
        this._fill()
    };
    b.drawCircle = function(b, a, e) {
        this.commandQueue.push(new c(function(a, b, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(e._transformTx + a, e._transformTy + b, c, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        },
        this, [b, a, e]));
        this._fill()
    };
    b.drawRoundRect = function(b, a, e, g, f, m) {
        this.commandQueue.push(new c(function(a, b, c, e, d, g) {
            var f = this.renderContext;
            a = f._transformTx + a;
            b = f._transformTy + b;
            d /= 2;
            g = g ? g / 2 : d;
            c = a + c;
            e = b + e;
            f = e - g;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(c, f);
            this.canvasContext.quadraticCurveTo(c, e, c - d, e);
            this.canvasContext.lineTo(a + d, e);
            this.canvasContext.quadraticCurveTo(a, e, a, e - g);
            this.canvasContext.lineTo(a, b + g);
            this.canvasContext.quadraticCurveTo(a, b, a + d, b);
            this.canvasContext.lineTo(c - d, b);
            this.canvasContext.quadraticCurveTo(c, b, c, b + g);
            this.canvasContext.lineTo(c, f);
            this.canvasContext.closePath()
        },
        this, [b, a, e, g, f, m]));
        this._fill()
    };
    b.drawEllipse = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.save();
            a = d._transformTx + a;
            b = d._transformTy + b;
            var d = c > e ? c: e,
            g = c / d;
            e /= d;
            this.canvasContext.scale(g, e);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + c) / g, b / e);
            this.canvasContext.arc(a / g, b / e, d, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        },
        this, [b, a, e, g]));
        this._fill()
    };
    b.lineStyle = function(b, a, e, g, f, m, l, h) {
        "undefined" === typeof b && (b = NaN);
        "undefined" === typeof a && (a = 0);
        "undefined" === typeof e && (e = 1);
        "undefined" === typeof g && (g = !1);
        "undefined" === typeof f && (f = "normal");
        "undefined" === typeof m && (m = null);
        "undefined" === typeof l && (l = null);
        "undefined" === typeof h && (h = 3);
        this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this.commandQueue.push(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        },
        this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    b.lineTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
        },
        this, [b, a]));
        this.lineX = b;
        this.lineY = a
    };
    b.curveTo = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.quadraticCurveTo(d._transformTx + a, d._transformTy + b, c, e)
        },
        this, [b, a, e, g]));
        this.lineX = e;
        this.lineY = g
    };
    b.moveTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
        },
        this, [b, a]))
    };
    b.clear = function() {
        this.lineY = this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b.endFill = function() {
        null != this.fillStyleColor && this._fill();
        this.fillStyleColor = null
    };
    b._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
    };
    b.createEndLineCommand = function() {
        this.endLineCommand || (this.endLineCommand = new c(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b._draw = function(b) {
        this.renderContext = b;
        b = this.canvasContext = this.renderContext.canvasContext;
        b.save();
        var a = this.commandQueue.length;
        this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
        for (var c = 0; c < a; c++) {
            var g = this.commandQueue[c];
            g.method.apply(g.thisObject, g.args)
        }
        b.restore()
    };
    var c = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    } ();
    c.prototype.__class__ = "Command";
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
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
            for (var g = 0,
            f = 0; g < a; g += 6, f += 4) this.indices[g + 0] = f + 0,
            this.indices[g + 1] = f + 1,
            this.indices[g + 2] = f + 2,
            this.indices[g + 3] = f + 0,
            this.indices[g + 4] = f + 2,
            this.indices[g + 5] = f + 3;
            this.initWebGL();
            this.shaderManager = new b.WebGLShaderManager(this.gl);
            this.worldTransform = new b.Matrix;
            this.initBlendMode();
            b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
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
            },
            b, c = ["experimental-webgl", "webgl"], d = 0; d < c.length; d++) {
                try {
                    b = this.canvas.getContext(c[d], a)
                } catch(l) {}
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
            a.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
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
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
            }
        };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var c = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, m = c.length; d < m; d++) {
                var l = c[d];
                a.viewport(l.x, l.y, l.width, l.height);
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
        a.prototype.drawImage = function(a, c, d, m, l, h, k, p, n) {
            if (!this.contextLost) {
                var q = b.MainContext.instance.rendererContext.texture_scale_factor;
                c /= q;
                d /= q;
                m /= q;
                l /= q;
                this.createWebGLTexture(a);
                if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(),
                this.currentBaseTexture = a.webGLTexture;
                var t = this.worldTransform,
                r = t.a,
                s = t.b,
                u = t.c,
                v = t.d,
                x = t.tx,
                y = t.ty;
                0 == h && 0 == k || t.append(1, 0, 0, 1, h, k);
                1 == m / p && 1 == l / n || t.append(p / m, 0, 0, n / l, 0, 0);
                h = t.a;
                k = t.b;
                p = t.c;
                n = t.d;
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
                a = m;
                t = l;
                c /= r;
                d /= s;
                m /= r;
                l /= s;
                r = this.vertices;
                s = 4 * this.currentBatchSize * this.vertSize;
                u = this.worldAlpha;
                r[s++] = q;
                r[s++] = w;
                r[s++] = c;
                r[s++] = d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = h * a + q;
                r[s++] = k * a + w;
                r[s++] = m + c;
                r[s++] = d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = h * a + p * t + q;
                r[s++] = n * t + k * a + w;
                r[s++] = m + c;
                r[s++] = l + d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = p * t + q;
                r[s++] = n * t + w;
                r[s++] = c;
                r[s++] = l + d;
                r[s++] = u;
                r[s++] = 16777215;
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
        a.prototype.setTransform = function(a) {
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
            this.setBlendMode(b)
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
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            c = a.italic ? "italic ": "normal ",
            c = c + (a.bold ? "bold ": "normal "),
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
            this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
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
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        };
        a.prototype.buildRectangle = function(a) {
            var b = a.x,
            c = a.y,
            d = a.w;
            a = a.h;
            var l = this.graphicsPoints,
            h = this.graphicsIndices,
            k = l.length / 6;
            l.push(b, c);
            l.push(0, 0, 0, 1);
            l.push(b + d, c);
            l.push(0, 0, 0, 1);
            l.push(b, c + a);
            l.push(0, 0, 0, 1);
            l.push(b + d, c + a);
            l.push(0, 0, 0, 1);
            h.push(k, k, k + 1, k + 2, k + 3, k + 3)
        };
        a.blendModesWebGL = {};
        return a
    } (b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.compileProgram = function(a, c, g) {
            g = b.compileFragmentShader(a, g);
            c = b.compileVertexShader(a, c);
            var f = a.createProgram();
            a.attachShader(f, c);
            a.attachShader(f, g);
            a.linkProgram(f);
            a.getProgramParameter(f, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
            return f
        };
        b.compileFragmentShader = function(a, c) {
            return b._compileShader(a, c, a.FRAGMENT_SHADER)
        };
        b.compileVertexShader = function(a, c) {
            return b._compileShader(a, c, a.VERTEX_SHADER)
        };
        b._compileShader = function(a, b, c) {
            c = a.createShader(c);
            a.shaderSource(c, b);
            a.compileShader(c);
            return a.getShaderParameter(c, a.COMPILE_STATUS) ? c: (console.log(a.getShaderInfoLog(c)), null)
        };
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL) try {
                var a = document.createElement("canvas");
                b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch(c) {
                b.canUseWebGL = !1
            }
            return b.canUseWebGL
        };
        return b
    } ();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {})); (function(b) {
    var c = function() {
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
            this.defaultShader = new d(b);
            this.activateShader(this.defaultShader)
        };
        b.prototype.activateShader = function(a) {
            this.gl.useProgram(a.program);
            this.setAttribs(a.attributes)
        };
        b.prototype.setAttribs = function(a) {
            var b, c;
            c = this.tempAttribState.length;
            for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
            c = a.length;
            for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            c = this.attribState.length;
            for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return b
    } ();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager";
    var d = function() {
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
            this.offsetVector = a.getUniformLocation(c, "offsetVector");
            this.dimensions = a.getUniformLocation(c, "dimensions");
            this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord");
            this.colorAttribute = a.getAttribLocation(c, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            this.program = c
        };
        return a
    } ();
    b.EgretShader = d;
    d.prototype.__class__ = "egret.EgretShader";
    var a = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
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
            this.translationMatrix = a.getUniformLocation(c, "translationMatrix");
            this.alpha = a.getUniformLocation(c, "alpha");
            this.program = c
        };
        return a
    } ();
    b.PrimitiveShader = a;
    a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
                    a.data = l.responseText;
                    break;
                case b.URLLoaderDataFormat.VARIABLES:
                    a.data = new b.URLVariables(l.responseText);
                    break;
                case b.URLLoaderDataFormat.BINARY:
                    a.data = l.response;
                    break;
                default:
                    a.data = l.responseText
                }
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var m = a._request,
                l = this.getXHR();
                l.onerror = c;
                l.onload = d;
                l.open(m.method, m.url, !0);
                this.setResponseType(l, a.dataFormat);
                m.method != b.URLRequestMethod.GET && m.data ? m.data instanceof b.URLVariables ? (l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.send(m.data.toString())) : (l.setRequestHeader("Content-Type", "multipart/form-data"), l.send(m.data)) : l.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function c(l) {
                window.clearTimeout(m.__timeoutId);
                m.removeEventListener("canplaythrough", c, !1);
                m.removeEventListener("error", d, !1);
                l = new b.Sound;
                l._setAudio(m);
                a.data = l;
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            function d(l) {
                window.clearTimeout(m.__timeoutId);
                m.removeEventListener("canplaythrough", c, !1);
                m.removeEventListener("error", d, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var m = new Audio(a._request.url);
            m.__timeoutId = window.setTimeout(c, 100);
            m.addEventListener("canplaythrough", c, !1);
            m.addEventListener("error", d, !1);
            m.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
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
    } (b.NetContext);
    b.HTML5NetContext = c;
    c.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(a) {
            c.call(this);
            this.canvas = a;
            this._isTouchDown = !1
        }
        __extends(a, c);
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown",
            function(b) {
                a._onTouchBegin(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerMove",
            function(b) {
                a._onTouchMove(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerUp",
            function(b) {
                a._onTouchEnd(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown",
            function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup",
            function(b) {
                a._isTouchDown && a.inOutOfCanvas(b) && a.dispatchLeaveStageEvent();
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.canvas.addEventListener("mousedown",
            function(b) {
                a._onTouchBegin(b)
            });
            this.canvas.addEventListener("mousemove",
            function(b) {
                a._onTouchMove(b)
            });
            this.canvas.addEventListener("mouseup",
            function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.canvas.addEventListener("touchstart",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchmove",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchend",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchcancel",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)
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
            var b = this.getLocation(this.canvas, a),
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
            m = window,
            l, h;
            "function" === typeof a.getBoundingClientRect ? (h = a.getBoundingClientRect(), l = h.left, h = h.top) : h = l = 0;
            l += m.pageXOffset - d.clientLeft;
            h += m.pageYOffset - d.clientTop;
            null != c.pageX ? (d = c.pageX, m = c.pageY) : (l -= document.body.scrollLeft, h -= document.body.scrollTop, d = c.clientX, m = c.clientY);
            var k = b.Point.identity;
            k.x = (d - l) / b.StageDelegate.getInstance().getScaleX();
            k.y = (m - h) / b.StageDelegate.getInstance().getScaleY();
            return k
        };
        return a
    } (b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
LoadingUI = function(b) {
    function c() {
        b.call(this);
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center"
    };
    c.prototype.setProgress = function(b, a) {
        this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + b + "/" + a
    };
    return c
} (egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MyBtn = function(b) {
    function c() {
        b.call(this);
        this.isRight = !1
    }
    __extends(c, b);
    c.prototype.createView = function(b, a, c) {
        this.touchChildren = !1;
        this.touchEnabled = !0;
        this.sprite = new egret.Sprite;
        this.sprite.graphics.beginFill(c);
        this.sprite.graphics.drawRect(0, 0, 130, 60);
        this.sprite.graphics.endFill();
        this.addChild(this.sprite);
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.width = 130;
        this.textField.text = b;
        this.textField.textColor = a;
        this.textField.textAlign = "center";
        this.textField.bold = !0;
        this.textField.size = 40;
        this.textField.y = (60 - this.textField.height) / 2
    };
    c.prototype.setLabelText = function(b) {
        this.textField.text = b
    };
    return c
} (egret.Sprite);
MyBtn.prototype.__class__ = "MyBtn";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Main = function(b) {
    function c() {
        b.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.loadingView = new LoadingUI;
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/")
    };
    c.prototype.onConfigComplete = function(b) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    };
    c.prototype.onResourceLoadComplete = function(b) {
        "preload" == b.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
    };
    c.prototype.onResourceProgress = function(b) {
        "preload" == b.groupName && this.loadingView.setProgress(b.itemsLoaded, b.itemsTotal)
    };
    c.prototype.createGameScene = function() {
        document.title = "\u662f\u7537\u4eba\u575a\u630160\u79d2\uff01";
        this.gameText = new egret.TextField;
        this.gameText.width = 405;
        this.gameText.size = 40;
        this.gameText.text = "\u662f\u7537\u4eba\u575a\u630160\u79d2";
        this.addChild(this.gameText);
        this.gameText.textAlign = "center";
        this.gameText.bold = !0;
        this.gameText.textColor = 7349024;
        this.gameText.y = 30;
        var b = this.createBitmapByName("man");
        this.man = new egret.Sprite;
        this.man.addChild(b);
        this.man.anchorOffsetX = 96;
        this.man.anchorOffsetY = 270;
        this.man.x = 215;
        this.man.y = 380;
        this.addChild(this.man);
        this.gameBtn = new MyBtn;
        this.gameBtn.createView("\u5f00\u59cb", 16777215, 7349024);
        this.addChild(this.gameBtn);
        this.gameBtn.x = 138;
        this.gameBtn.y = 490;
        this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameBtnClick, this);
        b = this.createBitmapByName("btn");
        b.rotation = 180;
        this.lBtn = new egret.Sprite;
        this.lBtn.addChild(b);
        this.lBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lBtnClick, this);
        this.lBtn.x = 75;
        this.lBtn.y = 500;
        this.lBtn.touchEnabled = !0;
        b = this.createBitmapByName("btn");
        this.rBtn = new egret.Sprite;
        this.rBtn.addChild(b);
        this.rBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rBtnClick, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.thisTap, this);
        this.rBtn.touchEnabled = !0;
        this.rBtn.x = 330;
        this.rBtn.y = 460;
        this.gameTimer = new egret.Timer(100);
        this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.onGameTimer, this);
        this.touchEnabled = !0
    };
    c.prototype.thisTap = function(b) {
        this.nr = 202.5 < b.stageX ? this.nr + (1 * Math.random() + 1) : this.nr + -(1 * Math.random() + 1)
    };
    c.prototype.onGameTimer = function(b) {
        this.nr *= 1.1;
        this.man.rotation += this.nr;
        this.gameText.text = (this.gameTimer.currentCount() / 10).toString();
        if (75 < this.man.rotation || -75 > this.man.rotation) {
            this.wx = this.createBitmapByName("wx");
            this.addChild(this.wx);
            b = this.stage.stageWidth;
            this.wx.width = 80;
            this.wx.height = 21.6;
            this.wx.x = b - this.wx.width;
            this.wx.y = 0;
            b = this.gameText.text;
            this.gameText.text = "\u4f60\u624d\u575a\u6301\u4e86" + b + "\u79d2";
			// updateShare(b);
			// Play68.setRankingScoreDesc(b);
            var a = this.gameTimer.currentCount() / 10 / 100 + 0.5;
            0.99 < a && (a = 0.99);
            a = 1E4 * a >> 0;
            a /= 100;
            document.title = "\u6211\u575a\u6301\u4e86" + b + "\u79d2\uff0c\u8d85\u8fc7\u4e86\u5168\u56fd" + a + "%\u7684\u4eba\uff01\u4f60\u80fd\u8d85\u8fc7\u6211\u5417\uff1f\u5feb\u6765\u6311\u6218\u5427\uff01";
            this.gameBtn.setLabelText("\u91cd\u6765");
            this.addChild(this.gameBtn);
            this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReGameBtnClick, this);
            this.gameTimer.reset()
        }
    };
    c.prototype.onReGameBtnClick = function(b) {
        document.title = "\u662f\u7537\u4eba\u575a\u630160\u79d2\uff01";
        this.removeChild(this.wx);
        this.removeChild(this.gameBtn);
        this.gameBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onReGameBtnClick, this);
        this.beginGame()
    };
    c.prototype.onGameBtnClick = function(b) {
        this.removeChild(this.gameBtn);
        this.gameBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameBtnClick, this);
        this.beginGame()
    };
    c.prototype.beginGame = function() {
		// updateShare(0);
        this.man.rotation = 0;
        this.nr = Math.random() + 0.5;
        this.gameTimer.reset();
        this.gameTimer.start();
        this.addChild(this.lBtn);
        this.addChild(this.rBtn)
		
    };
    c.prototype.lBtnClick = function(b) {};
    c.prototype.rBtnClick = function(b) {};
    c.prototype.createBitmapByName = function(b) {
        var a = new egret.Bitmap;
        b = RES.getRes(b);
        a.texture = b;
        return a
    };
    c.prototype.mySort = function(b, a) {
        return b > a ? 1 : -1
    };
    return c
} (egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";var egret; (function(b) {
    var c = function() {
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
    } ();
    b.HashObject = c;
    c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            var g = this.objectPool; - 1 == g.indexOf(e) && (g.push(e), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
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
            g = e.indexOf(this); - 1 != g && e.splice(g, 1)
        };
        a._callBackList = [];
        return a
    } (b.HashObject);
    b.Recycler = c;
    c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {})); (function(b) {
    b.__START_TIME;
    b.getTimer = function() {
        return Date.now() - b.__START_TIME
    }
})(egret || (egret = {})); (function(b) {
    b.__callLaterFunctionList = [];
    b.__callLaterThisList = [];
    b.__callLaterArgsList = [];
    b.callLater = function(c, d) {
        for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
        b.__callLaterFunctionList.push(c);
        b.__callLaterThisList.push(d);
        b.__callLaterArgsList.push(a)
    }
})(egret || (egret = {}));
var egret_dom; (function(b) {
    function c() {
        for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], e = 0; e < a.length; e++) if (a[e] + "ransform" in b) return a[e];
        return a[0]
    }
    b.header = "";
    b.getHeader = c;
    b.getTrans = function(d) {
        "" == b.header && (b.header = c());
        return b.header + d.substring(1, d.length)
    }
})(egret_dom || (egret_dom = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = e;
            this._bubbles = a;
            this._cancelable = f
        }
        __extends(a, d);
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
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
        };
        a._dispatchByTarget = function(e, a, f, d, c, h) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof h && (h = !1);
            var k = e.eventRecycler;
            k || (k = e.eventRecycler = new b.Recycler);
            var p = k.pop();
            p ? p._type = f: p = new e(f);
            p._bubbles = c;
            p._cancelable = h;
            if (d) for (var n in d) p[n] = d[n],
            null !== p[n] && (d[n] = null);
            e = a.dispatchEvent(p);
            k.push(p);
            return e
        };
        a._getPropertyData = function(e) {
            var a = e._props;
            a || (a = e._props = {});
            return a
        };
        a.dispatchEvent = function(e, g, f, b) {
            "undefined" === typeof f && (f = !1);
            var d = a._getPropertyData(a);
            b && (d.data = b);
            a._dispatchByTarget(a, e, g, d, f)
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
    } (b.HashObject);
    b.Event = c;
    c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this, e, a, f)
        }
        __extends(a, d);
        a.dispatchIOErrorEvent = function(e) {
            b.Event._dispatchByTarget(a, e, a.IO_ERROR)
        };
        a.IO_ERROR = "ioError";
        return a
    } (b.Event);
    b.IOErrorEvent = c;
    c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f, b, c, h, k, p, n, q) {
            "undefined" === typeof a && (a = !0);
            "undefined" === typeof f && (f = !0);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof h && (h = 0);
            "undefined" === typeof k && (k = !1);
            "undefined" === typeof p && (p = !1);
            "undefined" === typeof q && (q = !1);
            d.call(this, e, a, f);
            this._localY = this._localX = this._stageY = this._stageX = 0;
            this.touchPointID = b;
            this._stageX = c;
            this._stageY = h;
            this.ctrlKey = k;
            this.altKey = p;
            this.touchDown = q
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "stageX", {
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
            d.prototype._setCurrentTarget.call(this, e);
            e instanceof b.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, b.Point.identity), this._localX = e.x, this._localY = e.y)
        };
        a.dispatchTouchEvent = function(e, g, f, d, c, h, k, p, n) {
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof d && (d = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof h && (h = !1);
            "undefined" === typeof k && (k = !1);
            "undefined" === typeof p && (p = !1);
            "undefined" === typeof n && (n = !1);
            var q = b.Event._getPropertyData(a);
            q.touchPointID = f;
            q._stageX = d;
            q._stageY = c;
            q.ctrlKey = h;
            q.altKey = k;
            q.shiftKey = p;
            q.touchDown = n;
            b.Event._dispatchByTarget(a, e, g, q, !0, !0)
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
    } (b.Event);
    b.TouchEvent = c;
    c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, f) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof f && (f = !1);
            d.call(this, e, a, f)
        }
        __extends(a, d);
        a.dispatchTimerEvent = function(e, g) {
            b.Event._dispatchByTarget(a, e, g)
        };
        a.TIMER = "timer";
        a.TIMER_COMPLETE = "timerComplete";
        return a
    } (b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.CAPTURING_PHASE = 1;
        b.AT_TARGET = 2;
        b.BUBBLING_PHASE = 3;
        return b
    } ();
    b.EventPhase = c;
    c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e) {
            "undefined" === typeof e && (e = null);
            d.call(this);
            this._eventTarget = e ? e: this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, f, d, c) {
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var h = d[e];
            h || (h = d[e] = []);
            this._insertEventBin(h, a, f, c)
        };
        a.prototype._insertEventBin = function(e, a, f, b) {
            for (var d = -1,
            c = e.length,
            k = 0; k < c; k++) {
                var p = e[k];
                if (p.listener === a && p.thisObject === f) return ! 1; - 1 == d && p.priority < b && (d = k)
            }
            a = {
                listener: a,
                thisObject: f,
                priority: b
            }; - 1 != d ? e.splice(d, 0, a) : e.push(a);
            return ! 0
        };
        a.prototype.removeEventListener = function(e, a, f, b) {
            "undefined" === typeof b && (b = !1);
            if (b = b ? this._captureEventsMap: this._eventsMap) {
                var d = b[e];
                d && (this._removeEventBin(d, a, f), 0 == d.length && delete b[e])
            }
        };
        a.prototype._removeEventBin = function(e, a, f) {
            for (var b = e.length,
            d = 0; d < b; d++) {
                var c = e[d];
                if (c.listener === a && c.thisObject === f) return e.splice(d, 1),
                !0
            }
            return ! 1
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
            var a = 1 == e._eventPhase ? this._captureEventsMap: this._eventsMap;
            if (!a) return ! 0;
            a = a[e.type];
            if (!a) return ! 0;
            for (var a = a.concat(), f = a.length, b = 0; b < f; b++) {
                var d = a[b];
                d.listener.call(d.thisObject, e);
                if (e._isPropagationImmediateStopped) break
            }
            return ! e.isDefaultPrevented()
        };
        a.prototype.dispatchEventWith = function(e, a, f) {
            "undefined" === typeof a && (a = !1);
            b.Event.dispatchEvent(this, e, a, f)
        };
        return a
    } (b.HashObject);
    b.EventDispatcher = c;
    c.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.reuseEvent = new b.Event("")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.Ticker.getInstance().run();
            b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run()
        };
        a.prototype.renderLoop = function(e) {
            if (0 < b.__callLaterFunctionList.length) {
                var a = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var f = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var d = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            this.dispatchEventWith(b.Event.RENDER);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
            a && this.doCallLaterList(a, f, d);
            e = this.rendererContext;
            e.onRenderStart();
            e.clearScreen();
            this.stage._updateTransform();
            this.dispatchEventWith(b.Event.FINISH_UPDATE_TRANSFORM);
            this.stage._draw(e);
            this.dispatchEventWith(b.Event.FINISH_RENDER);
            e.onRenderFinish()
        };
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), f = a.length, d = 0; d < f; d++) {
                var c = a[d];
                e._target = c.display;
                e._setCurrentTarget(c.display);
                c.listener.call(c.thisObject, e)
            }
            a = b.Recycler._callBackList;
            for (d = a.length - 1; 0 <= d; d--) a[d]._checkFrame()
        };
        a.prototype.broadcastRender = function() {
            var e = this.reuseEvent;
            e._type = b.Event.RENDER;
            for (var a = b.DisplayObject._renderCallBackList.concat(), f = a.length, d = 0; d < f; d++) {
                var c = a[d];
                e._target = c.display;
                e._setCurrentTarget(c.display);
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.doCallLaterList = function(e, a, f) {
            for (var b = e.length,
            d = 0; d < b; d++) {
                var c = e[d];
                null != c && c.apply(a[d], f[d])
            }
        };
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        return a
    } (b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return ! 0;
    var b = navigator.userAgent.toLowerCase();
    return - 1 != b.indexOf("mobile") || -1 != b.indexOf("android")
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC; (function(b) {
    var c = function() {
        function d() {
            this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0
        }
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        d.prototype.run = function() {
            b.Ticker.getInstance().register(this.update, this);
            null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, b.MainContext.instance.stage.addChild(this._txt));
            var a = b.MainContext.instance;
            a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
            a.addEventListener(b.Event.RENDER, this.onStartRender, this);
            a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
            a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
        };
        d.prototype.onEnterFrame = function(a) {
            this._lastTime = b.getTimer()
        };
        d.prototype.onStartRender = function(a) {
            a = b.getTimer();
            this._logicPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishUpdateTransform = function(a) {
            a = b.getTimer();
            this._updateTransformPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishRender = function(a) {
            a = b.getTimer();
            this._renderPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.update = function(a) {
            this._tick++;
            this._totalDeltaTime += a;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                a = (this._preDrawCount - 1).toString();
                var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        };
        d.prototype.onDrawImage = function() {
            this._preDrawCount++
        };
        return d
    } ();
    b.Profiler = c;
    c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.apply(this, arguments);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = []
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.__START_TIME = (new Date).getTime();
            b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        a.prototype.update = function(e) {
            var a = this.callBackList.concat(),
            f = a.length;
            e *= this._timeScale;
            e *= this._timeScale;
            for (var b = 0; b < f; b++) {
                var d = a[b];
                d.listener.call(d.thisObject, e)
            }
        };
        a.prototype.register = function(e, a, f) {
            "undefined" === typeof f && (f = 0);
            this._insertEventBin(this.callBackList, e, a, f)
        };
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        };
        a.prototype.setTimeout = function(e, a, f) {
            for (var d = [], c = 0; c < arguments.length - 3; c++) d[c] = arguments[c + 3];
            b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
            b.setTimeout.apply(null, [e, a, f].concat(d))
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
    } (b.EventDispatcher);
    b.Ticker = c;
    c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.LEFT = "left";
        b.RIGHT = "right";
        b.CENTER = "center";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.HorizontalAlign = c;
    c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.MIDDLE = "middle";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.VerticalAlign = c;
    c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a) {
            "undefined" === typeof a && (a = 0);
            d.call(this);
            this._currentCount = 0;
            this.delay = e;
            this.repeatCount = a
        }
        __extends(a, d);
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
            this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount = 0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
        };
        a.prototype.stop = function() {
            this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
        };
        a.prototype.onEnterFrame = function(e) {
            e = b.getTimer();
            e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
        };
        return a
    } (b.EventDispatcher);
    b.Timer = c;
    c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {})); (function(b) {
    b.getQualifiedClassName = function(b) {
        b = b.prototype ? b.prototype: b.__proto__;
        if (b.hasOwnProperty("__class__")) return b.__class__;
        var d = b.constructor.toString(),
        a = d.indexOf("("),
        d = d.substring(9, a);
        return b.__class__ = d
    }
})(egret || (egret = {})); (function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b) return null;
        var a = c[b];
        if (a) return a;
        for (var e = b.split("."), g = e.length, a = __global, f = 0; f < g; f++) if (a = a[e[f]], !a) return null;
        return c[b] = a
    }
})(egret || (egret = {}));
var __global = __global || this; (function(b) {
    function c(e) {
        for (var a in d) {
            var f = d[a];
            f.delay -= e;
            0 >= f.delay && (f.listener.apply(f.thisObject, f.params), delete d[a])
        }
    }
    var d = {},
    a = 0;
    b.setTimeout = function(e, g, f) {
        for (var m = [], l = 0; l < arguments.length - 3; l++) m[l] = arguments[l + 3];
        m = {
            listener: e,
            thisObject: g,
            delay: f,
            params: m
        };
        0 == a && b.Ticker.getInstance().register(c, null);
        a++;
        d[a] = m;
        return a
    };
    b.clearTimeout = function(e) {
        delete d[e]
    }
})(egret || (egret = {})); (function(b) {
    b.hasDefinition = function(c) {
        return b.getDefinitionByName(c) ? !0 : !1
    }
})(egret || (egret = {})); (function(b) {
    b.toColorString = function(b) {
        if (isNaN(b) || 0 > b) b = 0;
        16777215 < b && (b = 16777215);
        for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
        return "#" + b
    }
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b, c, l, h) {
            "undefined" === typeof e && (e = 1);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof c && (c = 1);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof h && (h = 0);
            d.call(this);
            this.a = e;
            this.b = a;
            this.c = b;
            this.d = c;
            this.tx = l;
            this.ty = h
        }
        __extends(a, d);
        a.prototype.prepend = function(e, a, b, d, c, h) {
            var k = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var p = this.a,
                n = this.c;
                this.a = p * e + this.b * b;
                this.b = p * a + this.b * d;
                this.c = n * e + this.d * b;
                this.d = n * a + this.d * d
            }
            this.tx = k * e + this.ty * b + c;
            this.ty = k * a + this.ty * d + h;
            return this
        };
        a.prototype.append = function(e, a, b, d, c, h) {
            var k = this.a,
            p = this.b,
            n = this.c,
            q = this.d;
            this.a = e * k + a * n;
            this.b = e * p + a * q;
            this.c = b * k + d * n;
            this.d = b * p + d * q;
            this.tx = c * k + h * n + this.tx;
            this.ty = c * p + h * q + this.ty;
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
        a.prototype.prependTransform = function(e, g, b, d, c, h, k, p, n) {
            if (c % 360) {
                var q = c * a.DEG_TO_RAD;
                c = Math.cos(q);
                q = Math.sin(q)
            } else c = 1,
            q = 0;
            if (p || n) this.tx -= p,
            this.ty -= n;
            h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.prepend(c * b, q * b, -q * d, c * d, 0, 0), this.prepend(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, g)) : this.prepend(c * b, q * b, -q * d, c * d, e, g);
            return this
        };
        a.prototype.appendTransform = function(e, g, b, d, c, h, k, p, n) {
            if (c % 360) {
                var q = c * a.DEG_TO_RAD;
                c = Math.cos(q);
                q = Math.sin(q)
            } else c = 1,
            q = 0;
            h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.append(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, g), this.append(c * b, q * b, -q * d, c * d, 0, 0)) : this.append(c * b, q * b, -q * d, c * d, e, g);
            if (p || n) this.tx -= p * this.a + n * this.c,
            this.ty -= p * this.b + n * this.d;
            return this
        };
        a.prototype.rotate = function(e) {
            var a = Math.cos(e);
            e = Math.sin(e);
            var b = this.a,
            d = this.c,
            c = this.tx;
            this.a = b * a - this.b * e;
            this.b = b * e + this.b * a;
            this.c = d * a - this.d * e;
            this.d = d * e + this.d * a;
            this.tx = c * a - this.ty * e;
            this.ty = c * e + this.ty * a;
            return this
        };
        a.prototype.skew = function(e, g) {
            e *= a.DEG_TO_RAD;
            g *= a.DEG_TO_RAD;
            this.append(Math.cos(g), Math.sin(g), -Math.sin(e), Math.cos(e), 0, 0);
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
            d = this.d,
            c = this.tx,
            h = e * d - a * b;
            this.a = d / h;
            this.b = -a / h;
            this.c = -b / h;
            this.d = e / h;
            this.tx = (b * this.ty - d * c) / h;
            this.ty = -(e * this.ty - a * c) / h;
            return this
        };
        a.transformCoords = function(e, a, f) {
            var d = b.Point.identity;
            d.x = e.a * a + e.c * f + e.tx;
            d.y = e.d * f + e.b * a + e.ty;
            return d
        };
        a.prototype.toArray = function(e) {
            this.array || (this.array = new Float32Array(9));
            e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        };
        a.identity = new a;
        a.DEG_TO_RAD = Math.PI / 180;
        return a
    } (b.HashObject);
    b.Matrix = c;
    c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
    } (b.HashObject);
    b.Point = c;
    c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(e, a, f, c) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof c && (c = 0);
            b.call(this);
            this.x = e;
            this.y = a;
            this.width = f;
            this.height = c
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
                this.height = e - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.initialize = function(e, a, b, d) {
            this.x = e;
            this.y = a;
            this.width = b;
            this.height = d;
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
        a.prototype.containsPoint = function(e) {
            return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
        };
        a.identity = new a(0, 0, 0, 0);
        return a
    } (b.HashObject);
    b.Rectangle = c;
    c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.fatal = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Fatal", a, e);
            throw Error(b.Logger.getTraceCode("Fatal", a, e));
        };
        d.info = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Info", a, e)
        };
        d.warning = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Warning", a, e)
        };
        d.traceToConsole = function(a, e, g) {
            console.log(b.Logger.getTraceCode(a, e, g))
        };
        d.getTraceCode = function(a, e, g) {
            return "[" + a + "]" + e + ":" + (null == g ? "": g)
        };
        return d
    } ();
    b.Logger = c;
    c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(a, d);
        a.getInstance = function() {
            a._instance || (a._instance = new a);
            return a._instance
        };
        a.prototype.parserXML = function(e) {
            for (var a = 0;
            "\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
            0 != a && (e = e.substring(a, e.length));
            this._isSupportDOMParser ? a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
            null == a && b.Logger.info("xml not found!");
            return a
        };
        a._instance = null;
        return a
    } (b.HashObject);
    b.SAXParser = c;
    c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(e) {
        function g() {
            e.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            var a = document.getElementById(g.canvas_name),
            b = a.height;
            this._designWidth = a.width;
            this._designHeight = b
        }
        __extends(g, e);
        g.getInstance = function() {
            null == g.instance && (a.initialize(), g.instance = new g);
            return g.instance
        };
        g.prototype.setDesignSize = function(e, a, g) {
            this._designWidth = e;
            this._designHeight = a;
            g && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"), this._setResolutionPolicy(g))
        };
        g.prototype._setResolutionPolicy = function(e) {
            this._resolutionPolicy = e;
            e.init(this);
            e._apply(this, this._designWidth, this._designHeight)
        };
        g.prototype.getScaleX = function() {
            return this._scaleX
        };
        g.prototype.getScaleY = function() {
            return this._scaleY
        };
        g.canvas_name = "gameCanvas";
        g.canvas_div_name = "gameDiv";
        return g
    } (b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function e(a, g) {
            this._containerStrategy = a;
            this._contentStrategy = g
        }
        e.prototype.init = function(e) {
            this._containerStrategy.init(e);
            this._contentStrategy.init(e)
        };
        e.prototype._apply = function(e, a, g) {
            this._containerStrategy._apply(e, a, g);
            this._contentStrategy._apply(e, a, g)
        };
        return e
    } ();
    b.ResolutionPolicy = d;
    d.prototype.__class__ = "egret.ResolutionPolicy";
    var a = function() {
        function a() {}
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new e
        };
        a.prototype.init = function(e) {};
        a.prototype._apply = function(e, a, g) {};
        a.prototype._setupContainer = function() {
            var e = document.body,
            a;
            e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
        };
        return a
    } ();
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
    } (a);
    b.EqualToFrame = e;
    e.prototype.__class__ = "egret.EqualToFrame";
    d = function() {
        function e() {}
        e.prototype.init = function(e) {};
        e.prototype._apply = function(e, a, g) {};
        return e
    } ();
    b.ContentStrategy = d;
    d.prototype.__class__ = "egret.ContentStrategy";
    var g = function(e) {
        function a(g) {
            "undefined" === typeof g && (g = 0);
            e.call(this);
            this.minWidth = g
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            a = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = document.documentElement.clientWidth,
            d = document.documentElement.clientHeight,
            m = d / g,
            r = f / m,
            s = 1;
            0 != this.minWidth && (s = Math.min(1, r / this.minWidth));
            a.width = r / s;
            a.height = g;
            a.style.width = f + "px";
            a.style.height = d * s + "px";
            b.style.width = f + "px";
            b.style.height = d * s + "px";
            e._scaleX = m * s;
            e._scaleY = m * s
        };
        return a
    } (d);
    b.FixedHeight = g;
    g.prototype.__class__ = "egret.FixedHeight";
    g = function(e) {
        function a(g) {
            "undefined" === typeof g && (g = 0);
            e.call(this);
            this.minHeight = g
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            g = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = document.documentElement.clientWidth,
            d = document.documentElement.clientHeight,
            m = f / a,
            r = d / m,
            s = 1;
            0 != this.minHeight && (s = Math.min(1, r / this.minHeight));
            g.width = a;
            g.height = r / s;
            g.style.width = f * s + "px";
            g.style.height = d + "px";
            b.style.width = f * s + "px";
            b.style.height = d + "px";
            e._scaleX = m * s;
            e._scaleY = m * s
        };
        return a
    } (d);
    b.FixedWidth = g;
    g.prototype.__class__ = "egret.FixedWidth";
    g = function(e) {
        function a(g, b) {
            e.call(this);
            this.width = g;
            this.height = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            g = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            f = this.width,
            d = this.height,
            m = f / a;
            g.width = a;
            g.height = d / m;
            g.style.width = f + "px";
            g.style.height = d + "px";
            b.style.width = f + "px";
            b.style.height = d + "px";
            e._scaleX = m;
            e._scaleY = m
        };
        return a
    } (d);
    b.FixedSize = g;
    g.prototype.__class__ = "egret.FixedSize";
    g = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            a = document.getElementById(c.canvas_name);
            a.style.width = a.width + "px";
            a.style.height = a.height + "px";
            e._scaleX = 1;
            e._scaleY = 1
        };
        return a
    } (d);
    b.NoScale = g;
    g.prototype.__class__ = "egret.NoScale";
    d = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, g) {
            var b = document.getElementById(c.canvas_name),
            f = document.getElementById(c.canvas_div_name),
            d = document.documentElement.clientWidth,
            m = document.documentElement.clientHeight,
            r = d / a < m / g ? d / a: m / g,
            d = a * r,
            m = g * r;
            b.width = a;
            b.height = g / 1;
            b.style.width = 1 * d + "px";
            b.style.height = m + "px";
            b.style.top = Math.floor((document.documentElement.clientHeight - m) / 2) + "px";
            f.style.width = 1 * d + "px";
            f.style.height = m + "px";
            e._scaleX = 1 * r;
            e._scaleY = 1 * r
        };
        return a
    } (d);
    b.ShowAll = d;
    d.prototype.__class__ = "egret.ShowAll"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(a, d);
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
        a.prototype.drawImage = function(e, a, f, d, c, h, k, p, n, q) {
            k = k || 0;
            p = p || 0;
            var t = a._texture_to_render;
            if (null != t && 0 != h && 0 != c && 0 != n && 0 != q) if (a._worldBounds) {
                var r = this._originalData;
                r.sourceX = f;
                r.sourceY = d;
                r.sourceWidth = c;
                r.sourceHeight = h;
                r.destX = k;
                r.destY = p;
                r.destWidth = n;
                r.destHeight = q;
                for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
                    var v = s[u];
                    if (!this.ignoreRender(a, v, r.destX, r.destY)) {
                        if (0 != this._drawAreaList.length) if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
                            if (a._worldBounds.x + r.destX < v.x || a._worldBounds.y + r.destY < v.y || a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height) {
                                b.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
                                break
                            }
                        } else {
                            var x = a._worldTransform.a,
                            y = a._worldTransform.d,
                            w;
                            a._worldBounds.x + r.destX < v.x && (w = (v.x - a._worldBounds.x) / x - r.destX, f += w / (n / c), c -= w / (n / c), n -= w, k += w);
                            a._worldBounds.y + r.destY < v.y && (w = (v.y - a._worldBounds.y) / y - r.destY, d += w / (q / h), h -= w / (q / h), q -= w, p += w);
                            a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + r.destX, c -= w / (n / c), n -= w);
                            a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height - v.y - v.height) / y + r.destY, h -= w / (q / h), q -= w)
                        }
                        e.drawImage(t, f, d, c, h, k, p, n, q)
                    }
                }
            } else e.drawImage(t, f, d, c, h, k, p, n, q)
        };
        a.prototype.ignoreRender = function(e, a, b, d) {
            var c = e._worldBounds;
            b *= e._worldTransform.a;
            d *= e._worldTransform.d;
            return c.x + c.width + b <= a.x || c.x + b >= a.x + a.width || c.y + c.height + d <= a.y || c.y + d >= a.y + a.height ? !0 : !1
        };
        a.prototype.getDrawAreaList = function() {
            var e;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
            return e
        };
        return a
    } (b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, g) {
            "undefined" === typeof g && (g = "");
            a = this.getKey(a) + "#" + g;
            this.mapClassDic[a] = e
        };
        d.getKey = function(a) {
            return "string" == typeof a ? a: b.getQualifiedClassName(a)
        };
        d.mapValue = function(a, e, g) {
            "undefined" === typeof g && (g = "");
            a = this.getKey(a) + "#" + g;
            this.mapValueDic[a] = e
        };
        d.hasMapRule = function(a, e) {
            "undefined" === typeof e && (e = "");
            var g = this.getKey(a) + "#" + e;
            return this.mapValueDic[g] || this.mapClassDic[g] ? !0 : !1
        };
        d.getInstance = function(a, e) {
            "undefined" === typeof e && (e = "");
            var g = this.getKey(a) + "#" + e;
            if (this.mapValueDic[g]) return this.mapValueDic[g];
            var b = this.mapClassDic[g];
            if (b) return b = new b,
            this.mapValueDic[g] = b,
            delete this.mapClassDic[g],
            b;
            throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + g + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
        };
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    } ();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
        b.LAYER = "layer";
        return b
    } ();
    b.BlendMode = c;
    c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
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
            this._stage = null;
            this._worldTransform = new b.Matrix;
            this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
        }
        __extends(a, d);
        a.prototype._setDirty = function() {
            this._normalDirty = !0
        };
        a.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        };
        a.prototype._setParentSizeDirty = function() { ! this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty()
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
                b.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(), this._setParentSizeDirty())
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
        Object.defineProperty(a.prototype, "anchorOffsetX", {
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
                b.NumberUtils.isNumber(e) && (this._skewX = e, this._setSizeDirty())
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
        Object.defineProperty(a.prototype, "explicitHeight", {
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
                var a = this._texture_to_render,
                f = a._offsetX,
                d = a._offsetY,
                c = a._textureWidth,
                a = a._textureHeight;
                this._updateTransform();
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var h = b.MainContext.instance.rendererContext.texture_scale_factor;
                b.RenderFilter.getInstance().drawImage(e, this, 0, 0, c * h, a * h, f, d, c, a);
                return ! 0
            }
            return ! 1
        };
        a.prototype._updateTransform = function() {
            this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
            var e = this._getOffsetPoint();
            this._worldTransform.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e.x, e.y);
            this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
            this.worldAlpha = this._parent.worldAlpha * this._alpha
        };
        a.prototype._render = function(e) {};
        a.prototype.getBounds = function(e) {
            var a = this._measureBounds(),
            f = this._hasWidthSet ? this._explicitWidth: a.width,
            d = this._hasHeightSet ? this._explicitHeight: a.height,
            c = a.x,
            a = a.y,
            h,
            k;
            0 != this._anchorX || 0 != this._anchorY ? (h = f * this._anchorX, k = d * this._anchorY) : (h = this._anchorOffsetX, k = this._anchorOffsetY);
            this._cacheBounds.initialize(c - h, a - k, f, d);
            f = this._cacheBounds;
            e || (e = new b.Rectangle);
            return e.initialize(f.x, f.y, f.width, f.height)
        };
        a.prototype.destroyCacheBounds = function() {
            this._cacheBounds.x = 0;
            this._cacheBounds.y = 0;
            this._cacheBounds.width = 0;
            this._cacheBounds.height = 0
        };
        a.prototype._getConcatenatedMatrix = function() {
            for (var e = a.identityMatrixForGetConcatenated.identity(), g = this; null != g;) {
                if (0 != g._anchorX || 0 != g._anchorY) {
                    var f = g._getSize(b.Rectangle.identity);
                    e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, f.width * g._anchorX, f.height * g._anchorY)
                } else e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, g._anchorOffsetX, g._anchorOffsetY);
                g = g._parent
            }
            return e
        };
        a.prototype.localToGlobal = function(e, a, f) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var d = this._getConcatenatedMatrix();
            d.append(1, 0, 0, 1, e, a);
            f || (f = new b.Point);
            f.x = d.tx;
            f.y = d.ty;
            return f
        };
        a.prototype.globalToLocal = function(e, a, f) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var d = this._getConcatenatedMatrix();
            d.invert();
            d.append(1, 0, 0, 1, e, a);
            f || (f = new b.Point);
            f.x = d.tx;
            f.y = d.ty;
            return f
        };
        a.prototype.hitTest = function(e, a, f) {
            "undefined" === typeof f && (f = !1);
            if (!this.visible || !f && !this._touchEnabled) return null;
            f = this._getSize(b.Rectangle.identity);
            return 0 <= e && e < f.width && 0 <= a && a < f.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this: null: this: null
        };
        a.prototype.hitTestPoint = function(e, a, f) {
            e = this.globalToLocal(e, a);
            return f ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), f = this._hitTestPointTexture, f.drawToTexture(this), 0 != f.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
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
            if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity),
            e = this._anchorX * a.width,
            a = this._anchorY * a.height;
            var f = b.Point.identity;
            f.x = e;
            f.y = a;
            return f
        };
        a.prototype._onAddToStage = function() {
            this._stage = b.MainContext.instance.stage;
            b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        a.prototype._onRemoveFromStage = function() {
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
        a.prototype.addEventListener = function(e, g, f, c, l) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof l && (l = 0);
            d.prototype.addEventListener.call(this, e, g, f, c, l); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, g, f, l)
        };
        a.prototype.removeEventListener = function(e, g, f, c) {
            "undefined" === typeof c && (c = !1);
            d.prototype.removeEventListener.call(this, e, g, f, c); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, g, f)
        };
        a.prototype.dispatchEvent = function(e) {
            if (!e._bubbles) return d.prototype.dispatchEvent.call(this, e);
            for (var a = [], b = this; b;) a.unshift(b),
            b = b.parent;
            for (var c = a.length,
            b = c - 1,
            c = c - 2; 0 <= c; c--) a.push(a[c]);
            e._reset();
            this._dispatchPropagationEvent(e, a, b);
            return ! e.isDefaultPrevented()
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            for (var d = a.length,
            c = 0; c < d; c++) {
                var h = a[c];
                e._setCurrentTarget(h);
                e._target = this;
                e._eventPhase = c < b ? 1 : c == b ? 2 : 3;
                h._notifyListener(e);
                if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
            }
        };
        a.prototype.willTrigger = function(e) {
            for (var a = this; a;) {
                if (a.hasEventListener(e)) return ! 0;
                a = a._parent
            }
            return ! 1
        };
        Object.defineProperty(a.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(e) { (this._cacheAsBitmap = e) ? (this.renderTexture || (this.renderTexture = new b.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        a.getTransformBounds = function(e, a) {
            var b, d, c = e.width,
            h = e.height,
            k = c * a.a,
            c = c * a.b,
            p = h * a.c,
            h = h * a.d,
            n = a.tx,
            q = a.ty,
            t = n,
            r = n,
            s = q,
            u = q; (b = k + n) < t ? t = b: b > r && (r = b); (b = k + p + n) < t ? t = b: b > r && (r = b); (b = p + n) < t ? t = b: b > r && (r = b); (d = c + q) < s ? s = d: d > u && (u = d); (d = c + h + q) < s ? s = d: d > u && (u = d); (d = h + q) < s ? s = d: d > u && (u = d);
            return e.initialize(t, s, r - t, u - s)
        };
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    } (b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._touchChildren = !0;
            this._children = []
        }
        __extends(a, d);
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
        a.prototype.doSetChildIndex = function(e, a) {
            var f = this._children.indexOf(e);
            0 > f && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(f, 1);
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
        a.prototype._doAddChild = function(e, g, f) {
            "undefined" === typeof f && (f = !0);
            if (e == this) return e;
            if (0 > g || g > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
            e;
            var d = e.parent;
            if (d == this) return this.doSetChildIndex(e, g),
            e;
            d && d.removeChild(e);
            this._children.splice(g, 0, e);
            e._parentChanged(this);
            f && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage) for (e._onAddToStage(), g = a.__EVENT__ADD_TO_STAGE_LIST; 0 < g.length;) g.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
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
        a.prototype._doRemoveChild = function(e, g) {
            "undefined" === typeof g && (g = !0);
            var f = this._children,
            d = f[e];
            g && d.dispatchEventWith(b.Event.REMOVED, !0);
            if (this._stage) {
                d._onRemoveFromStage();
                for (var c = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < c.length;) c.shift().dispatchEventWith(b.Event.REMOVED_FROM_STAGE)
            }
            d._parentChanged(null);
            f.splice(e, 1);
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
                if (e == this) return ! 0;
                e = e._parent
            }
            return ! 1
        };
        a.prototype.swapChildrenAt = function(e, a) {
            0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
        };
        a.prototype.swapChildren = function(e, a) {
            var f = this._children.indexOf(e),
            d = this._children.indexOf(a); - 1 == f || -1 == d ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(f, d)
        };
        a.prototype._swapChildrenAt = function(e, a) {
            if (e != a) {
                var b = this._children,
                d = b[e];
                b[e] = b[a];
                b[a] = d
            }
        };
        a.prototype.getChildIndex = function(e) {
            return this._children.indexOf(e)
        };
        a.prototype.removeChildren = function() {
            for (var e = this._children.length - 1; 0 <= e; e--) this._doRemoveChild(e)
        };
        a.prototype._updateTransform = function() {
            if (this.visible) {
                d.prototype._updateTransform.call(this);
                for (var e = 0,
                a = this._children.length; e < a; e++) this._children[e]._updateTransform()
            }
        };
        a.prototype._render = function(e) {
            for (var a = 0,
            b = this._children.length; a < b; a++) this._children[a]._draw(e)
        };
        a.prototype._measureBounds = function() {
            for (var e = 0,
            a = 0,
            f = 0,
            d = 0,
            c = this._children.length,
            h = 0; h < c; h++) {
                var k = this._children[h],
                p;
                if (k.visible && (p = b.DisplayObject.getTransformBounds(k._getSize(b.Rectangle.identity), k._getMatrix()))) {
                    var k = p.x,
                    n = p.y,
                    q = p.width + p.x,
                    t = p.height + p.y;
                    if (k < e || 0 == h) e = k;
                    if (q > a || 0 == h) a = q;
                    if (n < f || 0 == h) f = n;
                    if (t > d || 0 == h) d = t
                }
            }
            return b.Rectangle.identity.initialize(e, f, a - e, d - f)
        };
        a.prototype.hitTest = function(e, a, f) {
            "undefined" === typeof f && (f = !1);
            var c;
            if (!this.visible) return null;
            if (this._scrollRect) {
                if (0 > e || 0 > a || e > this._scrollRect.width || a > this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y > a || a > this.mask.y + this.mask.height)) return null;
            for (var l = this._children,
            h = this._touchChildren,
            k = l.length - 1; 0 <= k; k--) {
                var p = l[k],
                n = p,
                q = n._getOffsetPoint(),
                t = n._x,
                r = n._y;
                this._scrollRect && (t -= this._scrollRect.x, r -= this._scrollRect.y);
                n = b.Matrix.identity.identity().prependTransform(t, r, n._scaleX, n._scaleY, n._rotation, 0, 0, q.x, q.y);
                n.invert();
                n = b.Matrix.transformCoords(n, e, a);
                if (p = p.hitTest(n.x, n.y, !0)) {
                    if (p._touchEnabled && h) return p;
                    if (this._touchEnabled) return this;
                    null == c && (c = p)
                }
            }
            return c ? c: d.prototype.hitTest.call(this, e, a, f)
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var e = this.numChildren,
            a = 0; a < e; a++) this._children[a]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var e = this.numChildren,
            a = 0; a < e; a++) this._children[a]._onRemoveFromStage()
        };
        a.prototype.getChildByName = function(e) {
            for (var a = this._children,
            b = this.numChildren,
            d, c = 0; c < b; c++) if (d = a[c], d.name == e) return d;
            return null
        };
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    } (b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a) {
            "undefined" === typeof e && (e = 480);
            "undefined" === typeof a && (a = 800);
            d.call(this);
            this.touchEnabled = !0;
            this._stage = this;
            this._stageWidth = e;
            this._stageHeight = a
        }
        __extends(a, d);
        a.prototype.invalidate = function() {
            a._invalidateRenderFlag = !0
        };
        Object.defineProperty(a.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(e) {
                if (this._scaleMode != e) {
                    this._scaleMode = e;
                    var a = {};
                    a[b.StageScaleMode.NO_SCALE] = new b.NoScale;
                    a[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
                    a[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
                    e = a[e];
                    if (!e) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
                    a = new b.EqualToFrame;
                    e = new b.ResolutionPolicy(a, e);
                    b.StageDelegate.getInstance()._setResolutionPolicy(e);
                    e = document.getElementById(b.StageDelegate.canvas_name);
                    this._stageWidth = e.width;
                    this._stageHeight = e.height;
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
        a.prototype.hitTest = function(a, g) {
            if (!this.touchEnabled) return null;
            var f;
            if (!this.visible) return this;
            for (var d = this._children,
            c = d.length - 1; 0 <= c; c--) {
                var h = f = d[c],
                k = h._getOffsetPoint(),
                h = b.Matrix.identity.identity().prependTransform(h.x, h.y, h.scaleX, h.scaleY, h.rotation, 0, 0, k.x, k.y);
                h.invert();
                h = b.Matrix.transformCoords(h, a, g);
                if ((f = f.hitTest(h.x, h.y, !0)) && f.touchEnabled) return f
            }
            return this
        };
        a.prototype.getBounds = function(a) {
            a || (a = new b.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        a.prototype._updateTransform = function() {
            for (var a = 0,
            g = this._children.length; a < g; a++) this._children[a]._updateTransform()
        };
        a._invalidateRenderFlag = !1;
        return a
    } (b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NO_BORDER = "noBorder";
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        return b
    } ();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.REPEAT = "repeat";
        b.SCALE = "scale";
        return b
    } ();
    b.BitmapFillMode = c;
    c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.fillMode = "scale";
            a && (this._texture = a, this._setSizeDirty())
        }
        __extends(a, d);
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
            b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth: b._textureWidth, this._hasHeightSet ? this._explicitHeight: b._textureHeight, this)) : this._texture_to_render = null
        };
        a._drawBitmap = function(e, g, f, d) {
            var c = d._texture_to_render;
            if (c) {
                var h = c._textureWidth,
                k = c._textureHeight;
                if ("scale" == d.fillMode) {
                    var p = d.scale9Grid || c.scale9Grid;
                    if (p && h - p.width < g && k - p.height < f) a.drawScale9GridImage(e, d, p, g, f);
                    else {
                        var p = c._offsetX,
                        n = c._offsetY,
                        q = c._bitmapWidth || h,
                        t = c._bitmapHeight || k;
                        g /= h;
                        p = Math.round(p * g);
                        g = Math.round(q * g);
                        f /= k;
                        n = Math.round(n * f);
                        f = Math.round(t * f);
                        b.RenderFilter.getInstance().drawImage(e, d, c._bitmapX, c._bitmapY, q, t, p, n, g, f)
                    }
                } else a.drawRepeatImage(e, d, g, f)
            }
        };
        a.drawRepeatImage = function(a, g, f, d) {
            var c = g._texture_to_render;
            if (c) for (var h = c._textureWidth,
            k = c._textureHeight,
            p = c._bitmapX,
            n = c._bitmapY,
            q = c._bitmapWidth || h,
            t = c._bitmapHeight || k,
            r = c._offsetX,
            c = c._offsetY,
            s = b.RenderFilter.getInstance(); r < f; r += h) for (var u = c; u < d; u += k) {
                var v = Math.min(q, f - r),
                x = Math.min(t, d - u);
                s.drawImage(a, g, p, n, v, x, r, u, v, x)
            }
        };
        a.drawScale9GridImage = function(a, g, f, d, c) {
            var h = g._texture_to_render;
            if (h && f) {
                var k = b.RenderFilter.getInstance(),
                p = h._textureWidth,
                n = h._textureHeight,
                q = h._bitmapX,
                t = h._bitmapY,
                r = h._bitmapWidth || p,
                s = h._bitmapHeight || n,
                u = h._offsetX,
                h = h._offsetY;
                f = b.Rectangle.identity.initialize(f.x - Math.round(u), f.y - Math.round(u), f.width, f.height);
                u = Math.round(u);
                h = Math.round(h);
                d -= p - r;
                c -= n - s;
                f.y == f.bottom && (f.bottom < s ? f.bottom++:f.y--);
                f.x == f.right && (f.right < r ? f.right++:f.x--);
                var p = q + f.x,
                n = q + f.right,
                v = r - f.right,
                x = t + f.y,
                y = t + f.bottom,
                w = s - f.bottom,
                z = u + f.x,
                A = h + f.y,
                s = c - (s - f.bottom),
                r = d - (r - f.right);
                k.drawImage(a, g, q, t, f.x, f.y, u, h, f.x, f.y);
                k.drawImage(a, g, p, t, f.width, f.y, z, h, r - f.x, f.y);
                k.drawImage(a, g, n, t, v, f.y, u + r, h, d - r, f.y);
                k.drawImage(a, g, q, x, f.x, f.height, u, A, f.x, s - f.y);
                k.drawImage(a, g, p, x, f.width, f.height, z, A, r - f.x, s - f.y);
                k.drawImage(a, g, n, x, v, f.height, u + r, A, d - r, s - f.y);
                k.drawImage(a, g, q, y, f.x, w, u, h + s, f.x, c - s);
                k.drawImage(a, g, p, y, f.width, w, z, h + s, r - f.x, c - s);
                k.drawImage(a, g, n, y, v, w, u + r, h + s, d - r, c - s)
            }
        };
        a.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.debug = !1;
        return a
    } (b.DisplayObject);
    b.Bitmap = c;
    c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._text = "";
            this._textChanged = !1;
            this._bitmapPool = []
        }
        __extends(a, d);
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
            this.visible && (this._textChanged && this._renderText(), d.prototype._updateTransform.call(this))
        };
        a.prototype._renderText = function(a) {
            var g = a = 0;
            this._textChanged && this.removeChildren();
            for (var f = 0,
            d = this.text.length; f < d; f++) {
                var c = this.text.charAt(f),
                h = this.spriteSheet.getTexture(c);
                if (null == h) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + c);
                else {
                    var c = h._offsetX,
                    k = h._offsetY,
                    p = h._textureWidth;
                    if (this._textChanged) {
                        var n = this._bitmapPool[f];
                        n || (n = new b.Bitmap, this._bitmapPool.push(n));
                        n.texture = h;
                        this.addChild(n);
                        n.x = a
                    }
                    a += p + c;
                    k + h._textureHeight > g && (g = k + h._textureHeight)
                }
            }
            this._textChanged = !1;
            return b.Rectangle.identity.initialize(0, 0, a, g)
        };
        a.prototype._measureBounds = function() {
            return this._renderText(!0)
        };
        return a
    } (b.DisplayObjectContainer);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.commandQueue = []
        }
        b.prototype.beginFill = function(a, e) {};
        b.prototype._setStyle = function(a) {};
        b.prototype.drawRect = function(a, e, b, f) {};
        b.prototype.drawCircle = function(a, e, b) {};
        b.prototype.drawRoundRect = function(a, e, b, f, d, c) {};
        b.prototype.drawEllipse = function(a, e, b, f) {};
        b.prototype.lineStyle = function(a, e, b, f, d, c, h, k) {};
        b.prototype.lineTo = function(a, e) {};
        b.prototype.curveTo = function(a, e, b, f) {};
        b.prototype.moveTo = function(a, e) {};
        b.prototype.clear = function() {};
        b.prototype.endFill = function() {};
        b.prototype._draw = function(a) {};
        return b
    } ();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics"; (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    })().prototype.__class__ = "Command"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
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
    } (b.DisplayObject);
    b.Shape = c;
    c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
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
            d.prototype._render.call(this, a)
        };
        return a
    } (b.DisplayObjectContainer);
    b.Sprite = c;
    c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
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
        __extends(a, d);
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
        a.prototype.drawText = function(a, g) {
            var f = this.getTextLines(a);
            if (!f) return b.Rectangle.identity.initialize(0, 0, 0, 0);
            var d = f.length,
            c = 0.5 * this._size,
            h = this._size + this._lineSpacing,
            k = d * h - this._lineSpacing;
            this._textHeight = k;
            var p = this._hasHeightSet ? this._explicitHeight: Number.POSITIVE_INFINITY;
            if (this._hasHeightSet && k < p) {
                var n = 0;
                this._verticalAlign == b.VerticalAlign.MIDDLE ? n = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (n = 1);
                c += n * (p - k)
            }
            var n = c = Math.round(c),
            q = 0;
            this._textAlign == b.HorizontalAlign.CENTER ? q = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (q = 1);
            var t = this.measuredWidths,
            r;
            r = this._hasWidthSet ? this._explicitWidth: this._textWidth;
            for (var s = Number.POSITIVE_INFINITY,
            u = 0; u < d; u++) {
                var v = f[u],
                x = Math.round((r - t[u]) * q);
                x < s && (s = x); ! g && c < p && a.drawText(this, v, x, c, r);
                c += h
            }
            return b.Rectangle.identity.initialize(s, n, r, k)
        };
        a.prototype.getTextLines = function(a) {
            var b = this.text ? this.text.toString() : "";
            if (!b) return null;
            var f = this.measuredWidths;
            f.length = 0;
            a.setupFont(this);
            var b = b.split(/(?:\r\n|\r|\n)/),
            d = b.length,
            c = 0;
            if (this._hasWidthSet) for (var h = this._explicitWidth,
            k = 0; k < d; k++) {
                var p = b[k],
                n = a.measureText(p);
                if (n > h) {
                    for (var q = "",
                    t = 0,
                    r = p.length,
                    s = 0; s < r; s++) {
                        var u = p.charAt(s),
                        n = a.measureText(u);
                        t + n > h && (0 == t ? (b.splice(k, 0, u), f[k] = n, c < n && (c = n), n = 0, u = "") : (b.splice(k, 0, q), f[k] = t, c < t && (c = t), q = "", t = 0), k++, d++);
                        t += n;
                        q += u
                    }
                    b[k] = q;
                    f[k] = t
                } else f[k] = n,
                c < n && (c = n)
            } else for (k = 0; k < d; k++) p = b[k],
            n = a.measureText(p),
            f[k] = n,
            c < n && (c = n);
            this._textWidth = c;
            return b
        };
        return a
    } (b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.DYNAMIC = "dynamic";
        b.INPUT = "input";
        return b
    } ();
    b.TextFieldType = c;
    c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            var b = a.bitmapData;
            this.bitmapData = b;
            this._textureMap = {};
            this._sourceWidth = b.width;
            this._sourceHeight = b.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(a, d);
        a.prototype.getTexture = function(a) {
            return this._textureMap[a]
        };
        a.prototype.createTexture = function(a, g, f, d, c, h, k, p, n) {
            "undefined" === typeof h && (h = 0);
            "undefined" === typeof k && (k = 0);
            "undefined" === typeof p && (p = h + d);
            "undefined" === typeof n && (n = k + c);
            var q = new b.Texture;
            q._bitmapData = this.bitmapData;
            q._bitmapX = this._bitmapX + g;
            q._bitmapY = this._bitmapY + f;
            q._bitmapWidth = d;
            q._bitmapHeight = c;
            q._offsetX = h;
            q._offsetY = k;
            q._textureWidth = p;
            q._textureHeight = n;
            q._sourceWidth = this._sourceWidth;
            q._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = q
        };
        return a
    } (b.HashObject);
    b.SpriteSheet = c;
    c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._size = 30;
            this._textColorString = "#FFFFFF";
            this._textColor = 16777215;
            this.stageText = new b.StageText;
            var a = this.localToGlobal();
            this.stageText._open(a.x, a.y, this._explicitWidth, this._explicitHeight)
        }
        __extends(a, d);
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            this.stageText._add();
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this)
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
        a.prototype.hitTest = function(a, b, f) {
            return null
        };
        a.prototype._updateTransform = function() {
            var a = this._worldTransform.a,
            b = this._worldTransform.b,
            f = this._worldTransform.c,
            c = this._worldTransform.d,
            l = this._worldTransform.tx,
            h = this._worldTransform.ty;
            d.prototype._updateTransform.call(this);
            var k = this._worldTransform;
            if (a != k.a || b != k.b || f != k.c || c != k.d || l != k.tx || h != k.ty) a = this.localToGlobal(),
            this.stageText.changePosition(a.x, a.y),
            this.stageText.changeSize(this._explicitWidth, this._explicitHeight)
        };
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._size != a && (this._size = a, this.stageText.setSize(this._size))
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._textColor != a && (this._textColor = a, this._textColorString = b.toColorString(a), this.stageText.setTextColor(this._textColorString))
            },
            enumerable: !0,
            configurable: !0
        });
        return a
    } (b.DisplayObject);
    b.TextInput = c;
    c.prototype.__class__ = "egret.TextInput"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a, g) {
            b.call(this, a);
            this.charList = this.parseConfig(g)
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
            for (var b = this.getConfigByKey(a[3], "count"), f = {},
            d = 4; d < 4 + b; d++) {
                var c = a[d],
                h = String.fromCharCode(this.getConfigByKey(c, "id")),
                k = {};
                f[h] = k;
                k.x = this.getConfigByKey(c, "x");
                k.y = this.getConfigByKey(c, "y");
                k.width = this.getConfigByKey(c, "width");
                k.height = this.getConfigByKey(c, "height");
                k.offsetX = this.getConfigByKey(c, "xoffset");
                k.offsetY = this.getConfigByKey(c, "yoffset")
            }
            return f
        };
        a.prototype.getConfigByKey = function(a, b) {
            for (var f = a.split(" "), d = 0, c = f.length; d < c; d++) {
                var h = f[d];
                if (b == h.substring(0, b.length)) return f = h.substring(b.length + 1),
                parseInt(f)
            }
            return 0
        };
        return a
    } (b.SpriteSheet);
    b.BitmapTextSpriteSheet = c;
    c.prototype.__class__ = "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(a) {
        function e(e, f) {
            a.call(this);
            this.frameRate = 60;
            e instanceof d ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new d(e, f);
            this.delegate.setMovieClip(this)
        }
        __extends(e, a);
        e.prototype.gotoAndPlay = function(a) {
            this.delegate.gotoAndPlay(a)
        };
        e.prototype.gotoAndStop = function(a) {
            this.delegate.gotoAndStop(a)
        };
        e.prototype.stop = function() {
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
    } (b.DisplayObjectContainer);
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip";
    var d = function() {
        function a(a, g) {
            this.data = a;
            this._currentFrameIndex = this._passTime = this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new b.SpriteSheet(g)
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
        a.prototype.gotoAndStop = function(a) {
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
            for (var b = 1E3 / this.movieClip.frameRate,
            b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1),
            b--;
            this._passTime += a
        };
        a.prototype.playNextFrame = function(a) {
            "undefined" === typeof a && (a = !0);
            var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(b.res);
                var f = this.bitmap;
                f.x = b.x;
                f.y = b.y;
                f.texture = a
            }
            null != b.action && this.movieClip.dispatchEventWith(b.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0)
        };
        a.prototype.getTexture = function(a) {
            var b = this._frameData.res[a],
            f = this._spriteSheet.getTexture(a);
            f || (f = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return f
        };
        return a
    } ();
    b.DefaultMovieClipDelegate = d;
    d.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._size = 20
        }
        __extends(a, d);
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
        a.prototype._open = function(a, g, f, d) {
            "undefined" === typeof f && (f = 160);
            d = b.StageDelegate.getInstance().getScaleX();
            var c = b.StageDelegate.getInstance().getScaleY(),
            h = document.createElement("input");
            h.type = "text";
            h.style.fontSize = this._size + "px";
            h.style.color = "#FFFFFF";
            h.style.border = "none";
            h.style.background = "none";
            h.style.width = f + "px";
            h.style.padding = "0";
            h.style.outline = "medium";
            var k = b.Browser.getInstance().$new("div");
            k.position.x = a * d;
            k.position.y = g * c;
            k.style.width = f + "px";
            k.scale.x = d;
            k.scale.y = c;
            k.transforms();
            k.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            k.appendChild(h);
            this.div = k;
            this.inputElement = h
        };
        a.prototype.getStageDelegateDiv = function() {
            var a = b.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
            return a
        };
        a.prototype._add = function() {
            var a = this.div;
            a && !a.parentNode && this.getStageDelegateDiv().appendChild(a)
        };
        a.prototype._remove = function() {
            var a = this.div;
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        a.prototype.changePosition = function(a, g) {
            var f = b.StageDelegate.getInstance().getScaleX(),
            d = b.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * f;
            this.div.position.y = g * d;
            this.div.transforms()
        };
        a.prototype.changeSize = function(a, b) {
            this.inputElement.style.width = a + "px";
            this.div.style.width = a + "px";
            this.div.transforms()
        };
        a.prototype.setSize = function(a) {
            this._size = a;
            this.inputElement.style.fontSize = this._size + "px"
        };
        a.prototype.setTextColor = function(a) {
            this.inputElement.style.color = a
        };
        return a
    } (b.HashObject);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.GET = "GET";
        b.POST = "POST";
        return b
    } ();
    b.URLRequestMethod = c;
    c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.BINARY = "binary";
        b.TEXT = "text";
        b.VARIABLES = "variables";
        b.TEXTURE = "texture";
        b.SOUND = "sound";
        return b
    } ();
    b.URLLoaderDataFormat = c;
    c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            b.call(this);
            null !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, f = /[?&]?([^=]+)=([^&]*)/g; b = f.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
        };
        a.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
            b = "",
            f = !0,
            d;
            for (d in a) f ? f = !1 : b += "&",
            b += d + "=" + a[d];
            return b
        };
        return a
    } (b.HashObject);
    b.URLVariables = c;
    c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.method = b.URLRequestMethod.GET;
            this.url = a
        }
        __extends(a, d);
        return a
    } (b.HashObject);
    b.URLRequest = c;
    c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            a && this.load(a)
        }
        __extends(a, d);
        a.prototype.load = function(a) {
            this._request = a;
            this.data = null;
            b.MainContext.instance.netContext.proceed(this)
        };
        return a
    } (b.EventDispatcher);
    b.URLLoader = c;
    c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
        }
        __extends(a, d);
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
            var g = b.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * g;
            this._textureHeight = this._sourceHeight * g;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        };
        a.prototype.getPixel32 = function(a, b) {
            return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
        };
        return a
    } (b.HashObject);
    b.Texture = c;
    c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        }
        __extends(a, d);
        a.prototype.drawToTexture = function(a) {
            var g = this._bitmapData,
            f = a.getBounds(b.Rectangle.identity);
            g.width = f.width;
            g.height = f.height;
            a._worldTransform.identity();
            a.worldAlpha = 1;
            if (a instanceof b.DisplayObjectContainer) {
                this._offsetX = f.x;
                this._offsetY = f.y;
                a._worldTransform.append(1, 0, 0, 1, -f.x, -f.y);
                for (var g = a._children,
                f = 0,
                d = g.length; f < d; f++) g[f]._updateTransform()
            }
            g = b.RenderFilter.getInstance();
            f = g._drawAreaList.concat();
            g._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.webGLTexture = null; (d = a.mask || a._scrollRect) && this.renderContext.pushMask(d);
            a._render(this.renderContext);
            d && this.renderContext.popMask();
            g._drawAreaList = f;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight
        };
        return a
    } (b.Texture);
    b.RenderTexture = c;
    c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {};
        a.prototype.clearRect = function(a, b, f, d) {};
        a.prototype.drawImage = function(a, g, f, d, c, h, k, p, n) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.setTransform = function(a) {};
        a.prototype.setAlpha = function(a, b) {};
        a.prototype.setupFont = function(a) {};
        a.prototype.measureText = function(a) {
            return 0
        };
        a.prototype.drawText = function(a, g, f, d, c) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.strokeRect = function(a, b, f, d, c) {};
        a.prototype.pushMask = function(a) {};
        a.prototype.popMask = function() {};
        a.prototype.onRenderStart = function() {};
        a.prototype.onRenderFinish = function() {};
        a.createRendererContext = function(a) {
            return null
        };
        return a
    } (b.HashObject);
    b.RendererContext = c;
    c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.MOUSE = "mouse";
        b.TOUCH = "touch";
        b.mode = "touch";
        return b
    } ();
    b.InteractionMode = c;
    c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.touchingIdentifiers = [];
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(a, d);
        a.prototype.run = function() {};
        a.prototype.getTouchData = function(a, b, f) {
            var d = this._currentTouchTarget[a];
            null == d && (d = {},
            this._currentTouchTarget[a] = d);
            d.stageX = b;
            d.stageY = f;
            d.identifier = a;
            return d
        };
        a.prototype.dispatchEvent = function(a, g) {
            b.TouchEvent.dispatchTouchEvent(g.target, a, g.identifier, g.stageX, g.stageY, !1, !1, !1, !0 == this.touchDownTarget[g.identifier])
        };
        a.prototype.onTouchBegan = function(a, g, d) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var c = b.MainContext.instance.stage.hitTest(a, g);
                c && (a = this.getTouchData(d, a, g), this.touchDownTarget[d] = !0, a.target = c, a.beginTarget = c, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(d)
            }
        };
        a.prototype.onTouchMove = function(a, g, d) {
            if ( - 1 != this.touchingIdentifiers.indexOf(d) && (a != this.lastTouchX || g != this.lastTouchY)) {
                this.lastTouchX = a;
                this.lastTouchY = g;
                var c = b.MainContext.instance.stage.hitTest(a, g);
                c && (a = this.getTouchData(d, a, g), a.target = c, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        };
        a.prototype.onTouchEnd = function(a, g, d) {
            var c = this.touchingIdentifiers.indexOf(d); - 1 != c && (this.touchingIdentifiers.splice(c, 1), c = b.MainContext.instance.stage.hitTest(a, g)) && (a = this.getTouchData(d, a, g), delete this.touchDownTarget[d], d = a.beginTarget, a.target = c, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), d == c ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return a
    } (b.HashObject);
    b.TouchContext = c;
    c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.proceed = function(a) {};
        return a
    } (b.HashObject);
    b.NetContext = c;
    c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.frameRate = 60
        }
        __extends(a, b);
        a.prototype.executeMainLoop = function(a, b) {};
        return a
    } (b.HashObject);
    b.DeviceContext = c;
    c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.call = function(a, e) {};
        b.addCallback = function(a, e) {};
        return b
    } ();
    b.ExternalInterface = c;
    c.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.translate = this.isHD ?
            function(a) {
                return "translate3d(" + a.x + "px, " + (a.y - b.MainContext.instance.stage.stageHeight) + "px, 0) "
            }: function(a) {
                return "translate(" + a.x + "px, " + a.y + "px) "
            };
            this.rotate = this.isHD ?
            function(a) {
                return "rotateZ(" + a + "deg) "
            }: function(a) {
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
                this.pfx = "webkit",
                this.isHD = !0
            }
            this.trans = this.pfx + "Transform"
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        Object.defineProperty(a.prototype, "isMobile", {
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
            var g = document;
            if (e = e instanceof HTMLElement ? e: g.querySelector(e)) e.find = e.find || this.$,
            e.hasClass = e.hasClass ||
            function(a) {
                return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
            },
            e.addClass = e.addClass ||
            function(a) {
                this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                return this
            },
            e.removeClass = e.removeClass ||
            function(a) {
                this.hasClass(a) && (this.className = this.className.replace(a, ""));
                return this
            },
            e.remove = e.remove ||
            function() {},
            e.appendTo = e.appendTo ||
            function(a) {
                a.appendChild(this);
                return this
            },
            e.prependTo = e.prependTo ||
            function(a) {
                a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                return this
            },
            e.transforms = e.transforms ||
            function() {
                this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
                return this
            },
            e.position = e.position || {
                x: 0,
                y: 0
            },
            e.rotation = e.rotation || 0,
            e.scale = e.scale || {
                x: 1,
                y: 1
            },
            e.skew = e.skew || {
                x: 0,
                y: 0
            },
            e.translates = function(a, e) {
                this.position.x = a;
                this.position.y = e - b.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            },
            e.rotate = function(a) {
                this.rotation = a;
                this.transforms();
                return this
            },
            e.resize = function(a, e) {
                this.scale.x = a;
                this.scale.y = e;
                this.transforms();
                return this
            },
            e.setSkew = function(a, e) {
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
    } (b.HashObject);
    b.Browser = c;
    c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes) return null;
            for (var e = a.childNodes.length,
            g = !1,
            c = 0; c < e; c++) {
                var m = a.childNodes[c];
                if (1 == m.nodeType) {
                    g = !0;
                    break
                }
            }
            return g ? d.parseNode(m) : null
        };
        d.parseNode = function(a) {
            if (!a || 1 != a.nodeType) return null;
            var e = {};
            e.localName = a.localName;
            e.name = a.nodeName;
            a.namespaceURI && (e.namespace = a.namespaceURI);
            a.prefix && (e.prefix = a.prefix);
            for (var b = a.attributes,
            c = b.length,
            m = 0; m < c; m++) {
                var l = b[m],
                h = l.name;
                0 != h.indexOf("xmlns:") && (e["$" + h] = l.value)
            }
            b = a.childNodes;
            c = b.length;
            for (m = 0; m < c; m++) if (l = d.parseNode(b[m])) e.children || (e.children = []),
            l.parent = e,
            e.children.push(l); ! e.children && (a = a.textContent.trim()) && (e.text = a);
            return e
        };
        d.findChildren = function(a, e, b) {
            b ? b.length = 0 : b = [];
            d.findByPath(a, e, b);
            return b
        };
        d.findByPath = function(a, e, b) {
            var c = e.indexOf("."),
            m; - 1 == c ? (m = e, c = !0) : (m = e.substring(0, c), e = e.substring(c + 1), c = !1);
            if (a = a.children) for (var l = a.length,
            h = 0; h < l; h++) {
                var k = a[h];
                k.localName == m && (c ? b.push(k) : d.findByPath(k, e, b))
            }
        };
        d.getAttributes = function(a, e) {
            e ? e.length = 0 : e = [];
            for (var b in a)"$" == b.charAt(0) && e.push(b.substring(1));
            return e
        };
        return d
    } ();
    b.XML = c;
    c.prototype.__class__ = "egret.XML"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function a() {}
        a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        a.BIG_ENDIAN = "BIG_ENDIAN";
        return a
    } ();
    b.Endian = c;
    c.prototype.__class__ = "egret.Endian";
    var d = function() {
        function a() {
            this.length = this.position = 0;
            this._mode = "";
            this.maxlength = 0;
            this._endian = c.LITTLE_ENDIAN;
            this.isLittleEndian = !1;
            this._mode = "Typed array";
            this.maxlength = 4;
            this.arraybytes = new ArrayBuffer(this.maxlength);
            this.unalignedarraybytestemp = new ArrayBuffer(16);
            this.endian = a.DEFAULT_ENDIAN
        }
        Object.defineProperty(a.prototype, "endian", {
            get: function() {
                return this._endian
            },
            set: function(a) {
                this._endian = a;
                this.isLittleEndian = a == c.LITTLE_ENDIAN
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
            a = new Int8Array(a); (new Int8Array(this.arraybytes, 0, this.length)).set(a);
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
                d = new Uint8Array(this.arraybytes, 0, this.length); (new Uint8Array(b, 0, this.length)).set(d);
                this.arraybytes = b;
                this.maxlength = a
            }
        };
        a.prototype.writeByte = function(a) {
            this.ensureWriteableSpace(1); (new Int8Array(this.arraybytes))[this.position++] = ~~a;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Int8Array(this.arraybytes))[this.position++]
        };
        a.prototype.readBytes = function(a, b, d) {
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof d && (d = 0);
            null == d && (d = a.length);
            a.ensureWriteableSpace(b + d);
            var c = new Int8Array(a.arraybytes),
            l = new Int8Array(this.arraybytes);
            c.set(l.subarray(this.position, this.position + d), b);
            this.position += d;
            d + b > a.length && (a.length += d + b - a.length)
        };
        a.prototype.writeUnsignedByte = function(a) {
            this.ensureWriteableSpace(1); (new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
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
            } else b = new Uint16Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 65535,
            a = new Uint8Array(this.arraybytes, this.position, 2),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 2),
            a.set(b);
            this.position += 2;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readUTFBytes = function(a) {
            var b = "";
            a = this.position + a;
            for (var d = new DataView(this.arraybytes); this.position < a;) {
                var c = d.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    b += String.fromCharCode(c)
                } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | d.getUint8(this.position++) & 127);
                else if (240 > c) var l = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 31) << 12 | (l & 127) << 6 | d.getUint8(this.position++) & 127);
                else var l = d.getUint8(this.position++),
                h = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 15) << 18 | (l & 127) << 12 | h << 6 & 127 | d.getUint8(this.position++) & 127)
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
            b = new Uint8Array(this.arraybytes, this.position, 2); (new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(b);
            this.position += 2;
            return a[0]
        };
        a.prototype.writeUnsignedInt = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Uint32Array(this.arraybytes);
                b[this.position >> 2] = ~~a & 4294967295
            } else b = new Uint32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 4294967295,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
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
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.prototype.writeFloat = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Float32Array(this.arraybytes);
                b[this.position >> 2] = a
            } else b = new Float32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = a,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readFloat = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Float32Array(this.arraybytes),
                b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
        return a
    } ();
    b.ByteArray = d;
    d.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a, b, c) {
            d.call(this);
            this._target = null;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this.pluginData = null;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, b, c)
        }
        __extends(a, d);
        a.get = function(e, b, d, c) {
            "undefined" === typeof b && (b = null);
            "undefined" === typeof d && (d = null);
            "undefined" === typeof c && (c = !1);
            c && a.removeTweens(e);
            return new a(e, b, d)
        };
        a.removeTweens = function(e) {
            if (e.tween_count) {
                for (var b = a._tweens,
                d = b.length - 1; 0 <= d; d--) b[d]._target == e && (b[d].paused = !0, b.splice(d, 1));
                e.tween_count = 0
            }
        };
        a.tick = function(e, b) {
            "undefined" === typeof b && (b = !1);
            for (var d = a._tweens.concat(), c = d.length - 1; 0 <= c; c--) {
                var l = d[c];
                b && !l.ignoreGlobalPause || l.paused || l.tick(l._useTicks ? 1 : e)
            }
        };
        a._register = function(e, d) {
            var c = e._target,
            m = a._tweens;
            if (d) c && (c.tween_count = c.tween_count ? c.tween_count + 1 : 1),
            m.push(e),
            a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
            else for (c && c.tween_count--, c = m.length; c--;) if (m[c] == e) {
                m.splice(c, 1);
                break
            }
        };
        a.removeAllTweens = function() {
            for (var e = a._tweens,
            b = 0,
            d = e.length; b < d; b++) {
                var c = e[b];
                c.paused = !0;
                c._target.tweenjs_count = 0
            }
            e.length = 0
        };
        a.prototype.initialize = function(e, b, d) {
            this._target = e;
            b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
            this.pluginData = d || {};
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
            var d = a,
            c = !1;
            d >= this.duration && (this.loop ? d %= this.duration: (d = this.duration, c = !0));
            if (d == this._prevPos) return c;
            var l = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target) if (c) this._updateTargetProps(null, 1);
            else if (0 < this._steps.length) {
                for (var h = 0,
                k = this._steps.length; h < k && !(this._steps[h].t > d); h++);
                h = this._steps[h - 1];
                this._updateTargetProps(h, (this._stepPosition = d - h.t) / h.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < l ? (l != this.duration && this._runActions(l, this.duration), this._runActions(0, d, !0)) : this._runActions(l, d));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        };
        a.prototype._runActions = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            var c = a,
            l = b,
            h = -1,
            k = this._actions.length,
            p = 1;
            a > b && (c = b, l = a, h = k, k = p = -1);
            for (; (h += p) != k;) {
                b = this._actions[h];
                var n = b.t; (n == l || n > c && n < l || d && n == a) && b.f.apply(b.o, b.p)
            }
        };
        a.prototype._updateTargetProps = function(e, b) {
            var d, c, l, h;
            if (e || 1 != b) {
                if (this.passive = !!e.v) return;
                e.e && (b = e.e(b, 0, 1, 1));
                d = e.p0;
                c = e.p1
            } else this.passive = !1,
            d = c = this._curQueueProps;
            for (var k in this._initQueueProps) {
                null == (l = d[k]) && (d[k] = l = this._initQueueProps[k]);
                null == (h = c[k]) && (c[k] = h = l);
                l = l == h || 0 == b || 1 == b || "number" != typeof l ? 1 == b ? h: l: l + (h - l) * b;
                var p = !1;
                if (h = a._plugins[k]) for (var n = 0,
                q = h.length; n < q; n++) {
                    var t = h[n].tween(this, k, l, d, c, b, !!e && d == c, !e);
                    t == a.IGNORE ? p = !0 : l = t
                }
                p || (this._target[k] = l)
            }
        };
        a.prototype.setPaused = function(e) {
            this.paused = e;
            a._register(this, !e);
            return this
        };
        a.prototype._cloneProps = function(a) {
            var b = {},
            d;
            for (d in a) b[d] = a[d];
            return b
        };
        a.prototype._addStep = function(a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        a.prototype._appendQueueProps = function(e) {
            var b, d, c, l, h, k;
            for (k in e) if (void 0 === this._initQueueProps[k]) {
                d = this._target[k];
                if (b = a._plugins[k]) for (c = 0, l = b.length; c < l; c++) d = b[c].init(this, k, d);
                this._initQueueProps[k] = this._curQueueProps[k] = void 0 === d ? null: d
            }
            for (k in e) {
                d = this._curQueueProps[k];
                if (b = a._plugins[k]) for (h = h || {},
                c = 0, l = b.length; c < l; c++) b[c].step && b[c].step(this, k, d, e[k], h);
                this._curQueueProps[k] = e[k]
            }
            h && this._appendQueueProps(h);
            return this._curQueueProps
        };
        a.prototype._addAction = function(a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        a.prototype._set = function(a, b) {
            for (var d in a) b[d] = a[d]
        };
        a.prototype.wait = function(a, b) {
            if (null == a || 0 >= a) return this;
            var d = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: d,
                p1: d,
                v: b
            })
        };
        a.prototype.to = function(a, b, d) {
            "undefined" === typeof d && (d = void 0);
            if (isNaN(b) || 0 > b) b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: d,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        a.prototype.call = function(a, b, d) {
            "undefined" === typeof b && (b = void 0);
            "undefined" === typeof d && (d = void 0);
            return this._addAction({
                f: a,
                p: d ? d: [],
                o: b ? b: this._target
            })
        };
        a.prototype.set = function(a, b) {
            "undefined" === typeof b && (b = null);
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, b ? b: this._target]
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
    } (b.EventDispatcher);
    b.Tween = c;
    c.prototype.__class__ = "egret.Tween"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {
            b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }
        d.get = function(a) { - 1 > a && (a = -1);
            1 < a && (a = 1);
            return function(b) {
                return 0 == a ? b: 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        };
        d.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        };
        d.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        };
        d.getPowInOut = function(a) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        };
        d.sineIn = function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        };
        d.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        };
        d.sineInOut = function(a) {
            return - 0.5 * (Math.cos(Math.PI * a) - 1)
        };
        d.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        };
        d.getBackOut = function(a) {
            return function(b) {
                b -= 1;
                return b * b * ((a + 1) * b + a) + 1
            }
        };
        d.getBackInOut = function(a) {
            a *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        };
        d.circIn = function(a) {
            return - (Math.sqrt(1 - a * a) - 1)
        };
        d.circOut = function(a) {
            return Math.sqrt(1 - a * a)
        };
        d.circInOut = function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        d.bounceIn = function(a) {
            return 1 - d.bounceOut(1 - a)
        };
        d.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        d.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * d.bounceIn(2 * a) : 0.5 * d.bounceOut(2 * a - 1) + 0.5
        };
        d.getElasticIn = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var m = b / d * Math.asin(1 / a);
                return - (a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - m) * d / b))
            }
        };
        d.getElasticOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var m = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - m) * d / b) + 1
            }
        };
        d.getElasticInOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                var m = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - m) * d / b) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - m) * d / b) * 0.5 + 1
            }
        };
        d.quadIn = d.getPowIn(2);
        d.quadOut = d.getPowOut(2);
        d.quadInOut = d.getPowInOut(2);
        d.cubicIn = d.getPowIn(3);
        d.cubicOut = d.getPowOut(3);
        d.cubicInOut = d.getPowInOut(3);
        d.quartIn = d.getPowIn(4);
        d.quartOut = d.getPowOut(4);
        d.quartInOut = d.getPowInOut(4);
        d.quintIn = d.getPowIn(5);
        d.quintOut = d.getPowOut(5);
        d.quintInOut = d.getPowInOut(5);
        d.backIn = d.getBackIn(1.7);
        d.backOut = d.getBackOut(1.7);
        d.backInOut = d.getBackInOut(1.7);
        d.elasticIn = d.getElasticIn(1, 0.3);
        d.elasticOut = d.getElasticOut(1, 0.3);
        d.elasticInOut = d.getElasticInOut(1, 0.3 * 1.5);
        return d
    } ();
    b.Ease = c;
    c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.type = b.EFFECT
        }
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
        b.prototype.setVolume = function(a) {
            var b = this.audio;
            b && (b.volume = a)
        };
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume: 0
        };
        b.prototype.preload = function(a) {
            this.type = a
        };
        b.prototype._setAudio = function(a) {
            this.audio = a
        };
        b.MUSIC = "music";
        b.EFFECT = "effect";
        return b
    } ();
    b.Sound = c;
    c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        return b
    } ();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
RES; (function(b) {
    var c = function(b) {
        function a(a, c, f) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof f && (f = !1);
            b.call(this, a, c, f);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, d, c, m, l, h) {
            "undefined" === typeof c && (c = "");
            "undefined" === typeof m && (m = null);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof h && (h = 0);
            var k = egret.Event._getPropertyData(a);
            k.groupName = c;
            k.resItem = m;
            k.itemsLoaded = l;
            k.itemsTotal = h;
            egret.Event._dispatchByTarget(a, b, d, k)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        return a
    } (egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function b(a, e, c) {
            this._loaded = !1;
            this.name = a;
            this.url = e;
            this.type = c
        }
        Object.defineProperty(b.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded: this._loaded
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
        b.TYPE_JSON = "json";
        b.TYPE_SHEET = "sheet";
        b.TYPE_FONT = "font";
        b.TYPE_SOUND = "sound";
        return b
    } ();
    b.ResourceItem = c;
    c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function c() {
            this.keyMap = {};
            this.groupDic = {}
        }
        c.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a]) return b;
            a = this.groupDic[a];
            for (var c = a.length,
            d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
            return b
        };
        c.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        c.prototype.createGroup = function(a, b, c) {
            "undefined" === typeof c && (c = !1);
            if (!c && this.groupDic[a] || !b || 0 == b.length) return ! 1;
            c = this.groupDic;
            for (var d = [], m = b.length, l = 0; l < m; l++) {
                var h = b[l],
                k = c[h];
                if (k) for (var h = k.length,
                p = 0; p < h; p++) {
                    var n = k[p]; - 1 == d.indexOf(n) && d.push(n)
                } else(n = this.keyMap[h]) && -1 == d.indexOf(n) && d.push(n)
            }
            if (0 == d.length) return ! 1;
            this.groupDic[a] = d;
            return ! 0
        };
        c.prototype.parseConfig = function(a, b) {
            if (a) {
                var c = a.resources;
                if (c) for (var d = c.length,
                m = 0; m < d; m++) {
                    var l = c[m],
                    h = l.url;
                    h && -1 == h.indexOf("://") && (l.url = b + h);
                    this.addItemToKeyMap(l)
                }
                if (c = a.groups) for (d = c.length, m = 0; m < d; m++) {
                    for (var h = c[m], k = [], p = h.keys.split(","), n = p.length, q = 0; q < n; q++) l = p[q].trim(),
                    (l = this.keyMap[l]) && -1 == k.indexOf(l) && k.push(l);
                    this.groupDic[h.name] = k
                }
            }
        };
        c.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var c = b.length,
                d = 0; d < c; d++) {
                    var m = b[d];
                    null == this.keyMap[m] && (this.keyMap[m] = a)
                }
            }
        };
        c.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name: ""
        };
        c.prototype.getType = function(a) {
            return (a = this.keyMap[a]) ? a.type: ""
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
    } ();
    b.ResourceConfig = c;
    c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
            if (!this.itemListDic[c] && c) if (a && 0 != a.length) {
                this.priorityQueue[d] ? this.priorityQueue[d].push(c) : this.priorityQueue[d] = [c];
                this.itemListDic[c] = a;
                d = a.length;
                for (var m = 0; m < d; m++) a[m].groupName = c;
                this.groupTotalDic[c] = a.length;
                this.numLoadedDic[c] = 0;
                this.next()
            } else a = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE),
            a.groupName = c,
            this.dispatchEvent(a)
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
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            b = a.length;
            for (var c, d = 0; d < b; d++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                c = this.itemListDic[a[this.queueIndex]];
                if (0 < c.length) break;
                this.queueIndex++
            }
            return 0 == c.length ? null: c.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var c = a.groupName;
            a.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, c, a);
            if (c) {
                this.numLoadedDic[c]++;
                var d = this.numLoadedDic[c],
                m = this.groupTotalDic[c];
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, c, a, d, m);
                d == m && (this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, c))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var c = this.priorityQueue[b], d = c.length, l = 0, h = !1, d = c.length, k = 0; k < d; k++) {
                    if (c[k] == a) {
                        c.splice(l, 1);
                        h = !0;
                        break
                    }
                    l++
                }
                if (h) {
                    0 == c.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return a
    } (egret.EventDispatcher);
    b.ResourceLoader = c;
    c.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, c) {};
        a.prototype.getRes = function(a) {};
        a.prototype.destroyRes = function(a) {
            return ! 1
        };
        a.getStringPrefix = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(0, b) : ""
        };
        a.getStringTail = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(b + 1) : ""
        };
        return a
    } (egret.HashObject);
    b.AnalyzerBase = c;
    c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d = c.item,
            l = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            l.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b)
        };
        a.prototype.getRes = function(a) {
            return this.fileDic[a]
        };
        a.prototype.hasRes = function(a) {
            return null != this.getRes(a)
        };
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
        };
        return a
    } (b.AnalyzerBase);
    b.BinAnalyzer = c;
    c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
        };
        return a
    } (b.BinAnalyzer);
    b.ImageAnalyzer = c;
    c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) try {
                this.fileDic[c] = JSON.parse(b)
            } catch(d) {
                egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + NaN + b)
            }
        };
        return a
    } (b.BinAnalyzer);
    b.JsonAnalyzer = c;
    c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    } (b.BinAnalyzer);
    b.TextAnalyzer = c;
    c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a() {
            c.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, c);
        a.prototype.getRes = function(a) {
            var c = this.fileDic[a];
            c || (c = this.textureMap[a]); ! c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = b.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
            return c
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d = c.item,
            l = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, l, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : l.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d;
                if ("string" == typeof b) {
                    try {
                        d = JSON.parse(b)
                    } catch(l) {
                        egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                    }
                    d && (this.sheetMap[c] = d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
                } else d = this.sheetMap[c],
                delete this.sheetMap[c],
                b && (d = this.parseSpriteSheet(b, d), this.fileDic[c] = d)
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var c = a.lastIndexOf("/");
            return a = -1 != c ? a.substring(0, c + 1) + b: b
        };
        a.prototype.parseSpriteSheet = function(a, b) {
            var c = b.frames;
            if (!c) return null;
            var d = new egret.SpriteSheet(a),
            l = this.textureMap,
            h;
            for (h in c) {
                var k = c[h];
                a = d.createTexture(h, k.x, k.y, k.w, k.h, k.offX, k.offY, k.sourceW, k.sourceH);
                k.scale9grid && (k = k.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(k[0]), parseInt(k[1]), parseInt(k[2]), parseInt(k[3])));
                null == l[h] && (l[h] = a)
            }
            return d
        };
        return a
    } (b.BinAnalyzer);
    b.SheetAnalyzer = c;
    c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            l = d.indexOf('file="'); - 1 != l && (d = d.substring(l + 6), l = d.indexOf('"'), c = d.substring(0, l));
            a = a.split("\\").join("/");
            l = a.lastIndexOf("/");
            return a = -1 != l ? a.substring(0, l + 1) + c: c
        };
        return a
    } (b.SheetAnalyzer);
    b.FontAnalyzer = c;
    c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name; ! this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType && b.preload(c.soundType))
        };
        return a
    } (b.BinAnalyzer);
    b.SoundAnalyzer = c;
    c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
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
            } catch(l) {}
        };
        return a
    } (b.BinAnalyzer);
    b.XMLAnalyzer = c;
    c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    b.loadConfig = function(a, b, c) {
        "undefined" === typeof b && (b = "");
        "undefined" === typeof c && (c = "json");
        d.loadConfig(a, b, c)
    };
    b.loadGroup = function(a, b) {
        "undefined" === typeof b && (b = 0);
        d.loadGroup(a, b)
    };
    b.isGroupLoaded = function(a) {
        return d.isGroupLoaded(a)
    };
    b.getGroupByName = function(a) {
        return d.getGroupByName(a)
    };
    b.createGroup = function(a, b, c) {
        "undefined" === typeof c && (c = !1);
        return d.createGroup(a, b, c)
    };
    b.hasRes = function(a) {
        return d.hasRes(a)
    };
    b.getRes = function(a) {
        return d.getRes(a)
    };
    b.getResAsync = function(a, b, c) {
        d.getResAsync(a, b, c)
    };
    b.getResByUrl = function(a, b, c, f) {
        "undefined" === typeof f && (f = "");
        d.getResByUrl(a, b, c, f)
    };
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    };
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    };
    b.addEventListener = function(a, b, c, f, m) {
        "undefined" === typeof f && (f = !1);
        "undefined" === typeof m && (m = 0);
        d.addEventListener(a, b, c, f, m)
    };
    b.removeEventListener = function(a, b, c, f) {
        "undefined" === typeof f && (f = !1);
        d.removeEventListener(a, b, c, f)
    };
    var c = function(a) {
        function e() {
            a.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(e, a);
        e.prototype.getAnalyzerByType = function(a) {
            var e = this.analyzerDic[a];
            e || (e = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
            return e
        };
        e.prototype.init = function() {
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, b.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
            this.resConfig = new b.ResourceConfig;
            this.resLoader = new b.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
        };
        e.prototype.loadConfig = function(a, b, e) {
            "undefined" === typeof e && (e = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: e
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        e.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var c = a.length,
            d = [], l = 0; l < c; l++) {
                var h = a[l],
                h = new b.ResourceItem(h.url, h.url, h.type);
                d.push(h)
            }
            this.resLoader.loadGroup(d, e.GROUP_CONFIG, Number.MAX_VALUE)
        };
        e.prototype.isGroupLoaded = function(a) {
            return - 1 != this.loadedGroups.indexOf(a)
        };
        e.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        e.prototype.loadGroup = function(a, b) {
            "undefined" === typeof b && (b = 0);
            if ( - 1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
                var e = this.resConfig.getGroupByName(a);
                this.resLoader.loadGroup(e, a, b)
            } else this.groupNameList.push({
                name: a,
                priority: b
            })
        };
        e.prototype.createGroup = function(a, b, e) {
            "undefined" === typeof e && (e = !1);
            if (e) {
                var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1)
            }
            return this.resConfig.createGroup(a, b, e)
        };
        e.prototype.onGroupComp = function(a) {
            if (a.groupName == e.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var c = 0; c < a; c++) {
                    var d = this.loadingConfigList[c],
                    l = this.getAnalyzerByType(d.type),
                    h = l.getRes(d.url);
                    l.destroyRes(d.url);
                    this.resConfig.parseConfig(h, d.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                d = this.groupNameList;
                a = d.length;
                for (c = 0; c < a; c++) l = d[c],
                this.loadGroup(l.name, l.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(a.groupName),
            this.dispatchEvent(a)
        };
        e.prototype.hasRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (a = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(a), "" == e) ? !1 : !0
        };
        e.prototype.getRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (e = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(e), "" == e) ? null: this.getAnalyzerByType(e).getRes(a)
        };
        e.prototype.getResAsync = function(a, e, c) {
            var d = this.resConfig.getType(a),
            h = this.resConfig.getName(a);
            if ("" == d && (h = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(h), "" == d)) {
                e.call(c, null);
                return
            } (d = this.getAnalyzerByType(d).getRes(a)) ? e.call(c, d) : (a = {
                key: a,
                compFunc: e,
                thisObject: c
            },
            this.asyncDic[h] ? this.asyncDic[h].push(a) : (this.asyncDic[h] = [a], h = this.resConfig.getResourceItem(h), this.resLoader.loadItem(h)))
        };
        e.prototype.getResByUrl = function(a, e, c, d) {
            "undefined" === typeof d && (d = "");
            if (a) {
                d || (d = this.getTypeByUrl(a));
                var h = this.getAnalyzerByType(d).getRes(a);
                h ? e.call(c, h) : (e = {
                    key: a,
                    compFunc: e,
                    thisObject: c
                },
                this.asyncDic[a] ? this.asyncDic[a].push(e) : (this.asyncDic[a] = [e], a = new b.ResourceItem(a, a, d), this.resLoader.loadItem(a)))
            } else e.call(c, null)
        };
        e.prototype.getTypeByUrl = function(a) { (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
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
        e.prototype.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var e = b.length,
            c = 0; c < e; c++) {
                var d = b[c],
                k = a.getRes(d.key);
                d.compFunc.call(d.thisObject, k, d.key)
            }
        };
        e.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var e = this.loadedGroups.indexOf(a); - 1 != e && this.loadedGroups.splice(e, 1);
                a = b.length;
                for (var c = 0; c < a; c++) {
                    e = b[c];
                    e.loaded = !1;
                    var d = this.getAnalyzerByType(e.type);
                    d.destroyRes(e.name)
                }
                return ! 0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return ! 1;
            e = this.resConfig.getRawResourceItem(a);
            e.loaded = !1;
            d = this.getAnalyzerByType(b);
            return d.destroyRes(a)
        };
        e.prototype.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        };
        e.GROUP_CONFIG = "RES__CONFIG";
        return e
    } (egret.EventDispatcher);
    c.prototype.__class__ = "Resource";
    var d = new c
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(b) {
            "undefined" === typeof b && (b = 60);
            c.call(this);
            this.frameRate = b;
            this._time = 0;
            60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
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
            var e = a.instance,
            c = a._thisObject,
            d = a._callback,
            m = b.getTimer(),
            l = m - e._time;
            e._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            d.call(c, l);
            e._time = m
        };
        a.prototype.executeMainLoop = function(b, c) {
            a._callback = b;
            a._thisObject = c;
            this.enterFrame()
        };
        a.prototype.reset = function() {
            var e = a.instance;
            e._requestAnimationId && (e._time = b.getTimer(), a.cancelAnimationFrame.call(window, e._requestAnimationId), e.enterFrame())
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
            var d, m;
            "undefined" !== typeof document.hidden ? (d = "hidden", m = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (d = "mozHidden", m = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (d = "msHidden", m = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (d = "webkitHidden", m = "webkitvisibilitychange");
            "onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", b, !1);
            d && m && document.addEventListener(m, c, !1)
        };
        return a
    } (b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(a) {
            this.canvas = a;
            this.canvasContext = a.getContext("2d");
            var b = this.canvasContext.setTransform,
            f = this;
            this.canvasContext.setTransform = function(a, c, e, d, p, n) {
                f._matrixA = a;
                f._matrixB = c;
                f._matrixC = e;
                f._matrixD = d;
                f._matrixTx = p;
                f._matrixTy = n;
                b.call(f.canvasContext, a, c, e, d, p, n)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            c.call(this)
        }
        __extends(a, c);
        a.prototype.clearScreen = function() {
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, d = a.length; c < d; c++) {
                var m = a[c];
                this.clearRect(m.x + this._transformTx, m.y + this._transformTy, m.width, m.height)
            }
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, c, d) {
            this.canvasContext.clearRect(a, b, c, d)
        };
        a.prototype.drawImage = function(a, g, f, m, l, h, k, p, n) {
            g /= b.MainContext.instance.rendererContext.texture_scale_factor;
            f /= b.MainContext.instance.rendererContext.texture_scale_factor;
            m /= b.MainContext.instance.rendererContext.texture_scale_factor;
            l /= b.MainContext.instance.rendererContext.texture_scale_factor;
            a = a._bitmapData;
            h += this._transformTx;
            k += this._transformTy;
            var q = b.getTimer();
            this.canvasContext.drawImage(a, g, f, m, l, h, k, p, n);
            c.prototype.drawImage.call(this, a, g, f, m, l, h, k, p, n);
            this.renderCost += b.getTimer() - q
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha = function(a, c) {
            a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
            c ? (this.blendValue = c, this.canvasContext.globalCompositeOperation = c) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = b.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = b.BlendMode.NORMAL)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            c = a.italic ? "italic ": "normal ",
            c = c + (a.bold ? "bold ": "normal "),
            c = c + (a.size + "px " + a.fontFamily);
            b.font = c;
            b.textAlign = "left";
            b.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, b, f, m, l) {
            var h = a._strokeColorString,
            k = a.stroke,
            p = this.canvasContext;
            p.fillStyle = a._textColorString;
            p.strokeStyle = h;
            k && (p.lineWidth = 2 * k, p.strokeText(b, f + this._transformTx, m + this._transformTy, l || 65535));
            p.fillText(b, f + this._transformTx, m + this._transformTy, l || 65535);
            c.prototype.drawText.call(this, a, b, f, m, l)
        };
        a.prototype.strokeRect = function(a, b, c, d, l) {
            this.canvasContext.strokeStyle = l;
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
        a.prototype.onRenderStart = function() {
            this.canvasContext.save()
        };
        a.prototype.onRenderFinish = function() {
            this.canvasContext.restore();
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        return a
    } (b.RendererContext);
    b.HTML5CanvasRenderer = c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics; (function(b) {
    b.beginFill = function(b, a) {
        "undefined" === typeof a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this.commandQueue.push(new c(this._setStyle, this, [e]))
    };
    b.drawRect = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(d._transformTx + a, d._transformTy + b, c, e);
            this.canvasContext.closePath()
        },
        this, [b, a, e, g]));
        this._fill()
    };
    b.drawCircle = function(b, a, e) {
        this.commandQueue.push(new c(function(a, b, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(e._transformTx + a, e._transformTy + b, c, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        },
        this, [b, a, e]));
        this._fill()
    };
    b.drawRoundRect = function(b, a, e, g, f, m) {
        this.commandQueue.push(new c(function(a, b, c, e, d, g) {
            var f = this.renderContext;
            a = f._transformTx + a;
            b = f._transformTy + b;
            d /= 2;
            g = g ? g / 2 : d;
            c = a + c;
            e = b + e;
            f = e - g;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(c, f);
            this.canvasContext.quadraticCurveTo(c, e, c - d, e);
            this.canvasContext.lineTo(a + d, e);
            this.canvasContext.quadraticCurveTo(a, e, a, e - g);
            this.canvasContext.lineTo(a, b + g);
            this.canvasContext.quadraticCurveTo(a, b, a + d, b);
            this.canvasContext.lineTo(c - d, b);
            this.canvasContext.quadraticCurveTo(c, b, c, b + g);
            this.canvasContext.lineTo(c, f);
            this.canvasContext.closePath()
        },
        this, [b, a, e, g, f, m]));
        this._fill()
    };
    b.drawEllipse = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.save();
            a = d._transformTx + a;
            b = d._transformTy + b;
            var d = c > e ? c: e,
            g = c / d;
            e /= d;
            this.canvasContext.scale(g, e);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + c) / g, b / e);
            this.canvasContext.arc(a / g, b / e, d, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        },
        this, [b, a, e, g]));
        this._fill()
    };
    b.lineStyle = function(b, a, e, g, f, m, l, h) {
        "undefined" === typeof b && (b = NaN);
        "undefined" === typeof a && (a = 0);
        "undefined" === typeof e && (e = 1);
        "undefined" === typeof g && (g = !1);
        "undefined" === typeof f && (f = "normal");
        "undefined" === typeof m && (m = null);
        "undefined" === typeof l && (l = null);
        "undefined" === typeof h && (h = 3);
        this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this.commandQueue.push(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        },
        this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    b.lineTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
        },
        this, [b, a]));
        this.lineX = b;
        this.lineY = a
    };
    b.curveTo = function(b, a, e, g) {
        this.commandQueue.push(new c(function(a, b, c, e) {
            var d = this.renderContext;
            this.canvasContext.quadraticCurveTo(d._transformTx + a, d._transformTy + b, c, e)
        },
        this, [b, a, e, g]));
        this.lineX = e;
        this.lineY = g
    };
    b.moveTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
        },
        this, [b, a]))
    };
    b.clear = function() {
        this.lineY = this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b.endFill = function() {
        null != this.fillStyleColor && this._fill();
        this.fillStyleColor = null
    };
    b._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
    };
    b.createEndLineCommand = function() {
        this.endLineCommand || (this.endLineCommand = new c(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b._draw = function(b) {
        this.renderContext = b;
        b = this.canvasContext = this.renderContext.canvasContext;
        b.save();
        var a = this.commandQueue.length;
        this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
        for (var c = 0; c < a; c++) {
            var g = this.commandQueue[c];
            g.method.apply(g.thisObject, g.args)
        }
        b.restore()
    };
    var c = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    } ();
    c.prototype.__class__ = "Command";
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
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
            for (var g = 0,
            f = 0; g < a; g += 6, f += 4) this.indices[g + 0] = f + 0,
            this.indices[g + 1] = f + 1,
            this.indices[g + 2] = f + 2,
            this.indices[g + 3] = f + 0,
            this.indices[g + 4] = f + 2,
            this.indices[g + 5] = f + 3;
            this.initWebGL();
            this.shaderManager = new b.WebGLShaderManager(this.gl);
            this.worldTransform = new b.Matrix;
            this.initBlendMode();
            b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
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
            },
            b, c = ["experimental-webgl", "webgl"], d = 0; d < c.length; d++) {
                try {
                    b = this.canvas.getContext(c[d], a)
                } catch(l) {}
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
            a.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
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
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
            }
        };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var c = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, m = c.length; d < m; d++) {
                var l = c[d];
                a.viewport(l.x, l.y, l.width, l.height);
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
        a.prototype.drawImage = function(a, c, d, m, l, h, k, p, n) {
            if (!this.contextLost) {
                var q = b.MainContext.instance.rendererContext.texture_scale_factor;
                c /= q;
                d /= q;
                m /= q;
                l /= q;
                this.createWebGLTexture(a);
                if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(),
                this.currentBaseTexture = a.webGLTexture;
                var t = this.worldTransform,
                r = t.a,
                s = t.b,
                u = t.c,
                v = t.d,
                x = t.tx,
                y = t.ty;
                0 == h && 0 == k || t.append(1, 0, 0, 1, h, k);
                1 == m / p && 1 == l / n || t.append(p / m, 0, 0, n / l, 0, 0);
                h = t.a;
                k = t.b;
                p = t.c;
                n = t.d;
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
                a = m;
                t = l;
                c /= r;
                d /= s;
                m /= r;
                l /= s;
                r = this.vertices;
                s = 4 * this.currentBatchSize * this.vertSize;
                u = this.worldAlpha;
                r[s++] = q;
                r[s++] = w;
                r[s++] = c;
                r[s++] = d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = h * a + q;
                r[s++] = k * a + w;
                r[s++] = m + c;
                r[s++] = d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = h * a + p * t + q;
                r[s++] = n * t + k * a + w;
                r[s++] = m + c;
                r[s++] = l + d;
                r[s++] = u;
                r[s++] = 16777215;
                r[s++] = p * t + q;
                r[s++] = n * t + w;
                r[s++] = c;
                r[s++] = l + d;
                r[s++] = u;
                r[s++] = 16777215;
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
        a.prototype.setTransform = function(a) {
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
            this.setBlendMode(b)
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
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            c = a.italic ? "italic ": "normal ",
            c = c + (a.bold ? "bold ": "normal "),
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
            this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
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
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        };
        a.prototype.buildRectangle = function(a) {
            var b = a.x,
            c = a.y,
            d = a.w;
            a = a.h;
            var l = this.graphicsPoints,
            h = this.graphicsIndices,
            k = l.length / 6;
            l.push(b, c);
            l.push(0, 0, 0, 1);
            l.push(b + d, c);
            l.push(0, 0, 0, 1);
            l.push(b, c + a);
            l.push(0, 0, 0, 1);
            l.push(b + d, c + a);
            l.push(0, 0, 0, 1);
            h.push(k, k, k + 1, k + 2, k + 3, k + 3)
        };
        a.blendModesWebGL = {};
        return a
    } (b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.compileProgram = function(a, c, g) {
            g = b.compileFragmentShader(a, g);
            c = b.compileVertexShader(a, c);
            var f = a.createProgram();
            a.attachShader(f, c);
            a.attachShader(f, g);
            a.linkProgram(f);
            a.getProgramParameter(f, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
            return f
        };
        b.compileFragmentShader = function(a, c) {
            return b._compileShader(a, c, a.FRAGMENT_SHADER)
        };
        b.compileVertexShader = function(a, c) {
            return b._compileShader(a, c, a.VERTEX_SHADER)
        };
        b._compileShader = function(a, b, c) {
            c = a.createShader(c);
            a.shaderSource(c, b);
            a.compileShader(c);
            return a.getShaderParameter(c, a.COMPILE_STATUS) ? c: (console.log(a.getShaderInfoLog(c)), null)
        };
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL) try {
                var a = document.createElement("canvas");
                b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch(c) {
                b.canUseWebGL = !1
            }
            return b.canUseWebGL
        };
        return b
    } ();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {})); (function(b) {
    var c = function() {
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
            this.defaultShader = new d(b);
            this.activateShader(this.defaultShader)
        };
        b.prototype.activateShader = function(a) {
            this.gl.useProgram(a.program);
            this.setAttribs(a.attributes)
        };
        b.prototype.setAttribs = function(a) {
            var b, c;
            c = this.tempAttribState.length;
            for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
            c = a.length;
            for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            c = this.attribState.length;
            for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return b
    } ();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager";
    var d = function() {
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
            this.offsetVector = a.getUniformLocation(c, "offsetVector");
            this.dimensions = a.getUniformLocation(c, "dimensions");
            this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord");
            this.colorAttribute = a.getAttribLocation(c, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            this.program = c
        };
        return a
    } ();
    b.EgretShader = d;
    d.prototype.__class__ = "egret.EgretShader";
    var a = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
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
            this.translationMatrix = a.getUniformLocation(c, "translationMatrix");
            this.alpha = a.getUniformLocation(c, "alpha");
            this.program = c
        };
        return a
    } ();
    b.PrimitiveShader = a;
    a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
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
                    a.data = l.responseText;
                    break;
                case b.URLLoaderDataFormat.VARIABLES:
                    a.data = new b.URLVariables(l.responseText);
                    break;
                case b.URLLoaderDataFormat.BINARY:
                    a.data = l.response;
                    break;
                default:
                    a.data = l.responseText
                }
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var m = a._request,
                l = this.getXHR();
                l.onerror = c;
                l.onload = d;
                l.open(m.method, m.url, !0);
                this.setResponseType(l, a.dataFormat);
                m.method != b.URLRequestMethod.GET && m.data ? m.data instanceof b.URLVariables ? (l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.send(m.data.toString())) : (l.setRequestHeader("Content-Type", "multipart/form-data"), l.send(m.data)) : l.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function c(l) {
                window.clearTimeout(m.__timeoutId);
                m.removeEventListener("canplaythrough", c, !1);
                m.removeEventListener("error", d, !1);
                l = new b.Sound;
                l._setAudio(m);
                a.data = l;
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            function d(l) {
                window.clearTimeout(m.__timeoutId);
                m.removeEventListener("canplaythrough", c, !1);
                m.removeEventListener("error", d, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var m = new Audio(a._request.url);
            m.__timeoutId = window.setTimeout(c, 100);
            m.addEventListener("canplaythrough", c, !1);
            m.addEventListener("error", d, !1);
            m.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
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
    } (b.NetContext);
    b.HTML5NetContext = c;
    c.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(c) {
        function a(a) {
            c.call(this);
            this.canvas = a;
            this._isTouchDown = !1
        }
        __extends(a, c);
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown",
            function(b) {
                a._onTouchBegin(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerMove",
            function(b) {
                a._onTouchMove(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerUp",
            function(b) {
                a._onTouchEnd(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown",
            function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup",
            function(b) {
                a._isTouchDown && a.inOutOfCanvas(b) && a.dispatchLeaveStageEvent();
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.canvas.addEventListener("mousedown",
            function(b) {
                a._onTouchBegin(b)
            });
            this.canvas.addEventListener("mousemove",
            function(b) {
                a._onTouchMove(b)
            });
            this.canvas.addEventListener("mouseup",
            function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.canvas.addEventListener("touchstart",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchmove",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchend",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchcancel",
            function(b) {
                for (var c = b.changedTouches.length,
                d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)
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
            var b = this.getLocation(this.canvas, a),
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
            m = window,
            l, h;
            "function" === typeof a.getBoundingClientRect ? (h = a.getBoundingClientRect(), l = h.left, h = h.top) : h = l = 0;
            l += m.pageXOffset - d.clientLeft;
            h += m.pageYOffset - d.clientTop;
            null != c.pageX ? (d = c.pageX, m = c.pageY) : (l -= document.body.scrollLeft, h -= document.body.scrollTop, d = c.clientX, m = c.clientY);
            var k = b.Point.identity;
            k.x = (d - l) / b.StageDelegate.getInstance().getScaleX();
            k.y = (m - h) / b.StageDelegate.getInstance().getScaleY();
            return k
        };
        return a
    } (b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
LoadingUI = function(b) {
    function c() {
        b.call(this);
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center"
    };
    c.prototype.setProgress = function(b, a) {
        this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + b + "/" + a
    };
    return c
} (egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MyBtn = function(b) {
    function c() {
        b.call(this);
        this.isRight = !1
    }
    __extends(c, b);
    c.prototype.createView = function(b, a, c) {
        this.touchChildren = !1;
        this.touchEnabled = !0;
        this.sprite = new egret.Sprite;
        this.sprite.graphics.beginFill(c);
        this.sprite.graphics.drawRect(0, 0, 130, 60);
        this.sprite.graphics.endFill();
        this.addChild(this.sprite);
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.width = 130;
        this.textField.text = b;
        this.textField.textColor = a;
        this.textField.textAlign = "center";
        this.textField.bold = !0;
        this.textField.size = 40;
        this.textField.y = (60 - this.textField.height) / 2
    };
    c.prototype.setLabelText = function(b) {
        this.textField.text = b
    };
    return c
} (egret.Sprite);
MyBtn.prototype.__class__ = "MyBtn";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Main = function(b) {
    function c() {
        b.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.loadingView = new LoadingUI;
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/")
    };
    c.prototype.onConfigComplete = function(b) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    };
    c.prototype.onResourceLoadComplete = function(b) {
        "preload" == b.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
    };
    c.prototype.onResourceProgress = function(b) {
        "preload" == b.groupName && this.loadingView.setProgress(b.itemsLoaded, b.itemsTotal)
    };
    c.prototype.createGameScene = function() {
        document.title = "\u662f\u7537\u4eba\u575a\u630160\u79d2\uff01";
        this.gameText = new egret.TextField;
        this.gameText.width = 405;
        this.gameText.size = 40;
        this.gameText.text = "\u662f\u7537\u4eba\u575a\u630160\u79d2";
        this.addChild(this.gameText);
        this.gameText.textAlign = "center";
        this.gameText.bold = !0;
        this.gameText.textColor = 7349024;
        this.gameText.y = 30;
        var b = this.createBitmapByName("man");
        this.man = new egret.Sprite;
        this.man.addChild(b);
        this.man.anchorOffsetX = 96;
        this.man.anchorOffsetY = 270;
        this.man.x = 215;
        this.man.y = 380;
        this.addChild(this.man);
        this.gameBtn = new MyBtn;
        this.gameBtn.createView("\u5f00\u59cb", 16777215, 7349024);
        this.addChild(this.gameBtn);
        this.gameBtn.x = 138;
        this.gameBtn.y = 490;
        this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameBtnClick, this);
        b = this.createBitmapByName("btn");
        b.rotation = 180;
        this.lBtn = new egret.Sprite;
        this.lBtn.addChild(b);
        this.lBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lBtnClick, this);
        this.lBtn.x = 75;
        this.lBtn.y = 500;
        this.lBtn.touchEnabled = !0;
        b = this.createBitmapByName("btn");
        this.rBtn = new egret.Sprite;
        this.rBtn.addChild(b);
        this.rBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rBtnClick, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.thisTap, this);
        this.rBtn.touchEnabled = !0;
        this.rBtn.x = 330;
        this.rBtn.y = 460;
        this.gameTimer = new egret.Timer(100);
        this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.onGameTimer, this);
        this.touchEnabled = !0
    };
    c.prototype.thisTap = function(b) {
        this.nr = 202.5 < b.stageX ? this.nr + (1 * Math.random() + 1) : this.nr + -(1 * Math.random() + 1)
    };
    c.prototype.onGameTimer = function(b) {
        this.nr *= 1.1;
        this.man.rotation += this.nr;
        this.gameText.text = (this.gameTimer.currentCount() / 10).toString();
        if (75 < this.man.rotation || -75 > this.man.rotation) {
            this.wx = this.createBitmapByName("wx");
            this.addChild(this.wx);
            b = this.stage.stageWidth;
            this.wx.width = 80;
            this.wx.height = 21.6;
            this.wx.x = b - this.wx.width;
            this.wx.y = 0;
            b = this.gameText.text;
            this.gameText.text = "\u4f60\u624d\u575a\u6301\u4e86" + b + "\u79d2";
			// updateShare(b);
			// Play68.setRankingScoreDesc(b);
            var a = this.gameTimer.currentCount() / 10 / 100 + 0.5;
            0.99 < a && (a = 0.99);
            a = 1E4 * a >> 0;
            a /= 100;
            document.title = "\u6211\u575a\u6301\u4e86" + b + "\u79d2\uff0c\u8d85\u8fc7\u4e86\u5168\u56fd" + a + "%\u7684\u4eba\uff01\u4f60\u80fd\u8d85\u8fc7\u6211\u5417\uff1f\u5feb\u6765\u6311\u6218\u5427\uff01";
            this.gameBtn.setLabelText("\u91cd\u6765");
            this.addChild(this.gameBtn);
            this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReGameBtnClick, this);
            this.gameTimer.reset()
        }
    };
    c.prototype.onReGameBtnClick = function(b) {
        document.title = "\u662f\u7537\u4eba\u575a\u630160\u79d2\uff01";
        this.removeChild(this.wx);
        this.removeChild(this.gameBtn);
        this.gameBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onReGameBtnClick, this);
        this.beginGame()
    };
    c.prototype.onGameBtnClick = function(b) {
        this.removeChild(this.gameBtn);
        this.gameBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameBtnClick, this);
        this.beginGame()
    };
    c.prototype.beginGame = function() {
		// updateShare(0);
        this.man.rotation = 0;
        this.nr = Math.random() + 0.5;
        this.gameTimer.reset();
        this.gameTimer.start();
        this.addChild(this.lBtn);
        this.addChild(this.rBtn)
		
    };
    c.prototype.lBtnClick = function(b) {};
    c.prototype.rBtnClick = function(b) {};
    c.prototype.createBitmapByName = function(b) {
        var a = new egret.Bitmap;
        b = RES.getRes(b);
        a.texture = b;
        return a
    };
    c.prototype.mySort = function(b, a) {
        return b > a ? 1 : -1
    };
    return c
} (egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";