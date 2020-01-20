var egret;
(function(b) {
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
    }();
    b.HashObject = c;
    c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(e) {
            void 0 === e && (e = 300);
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
            var k = this.objectPool; - 1 == k.indexOf(e) && (k.push(e), this._length++, 0 == this.frameCount && (this.frameCount =
                this.autoDisposeTime, a._callBackList.push(this)))
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
                k = e.indexOf(this); - 1 != k && e.splice(k, 1)
        };
        a._callBackList = [];
        return a
    }(b.HashObject);
    b.Recycler = c;
    c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(b) {
    b.__START_TIME;
    b.getTimer = function() {
        return Date.now() - b.__START_TIME
    }
})(egret || (egret = {}));
(function(b) {
    b.__callLaterFunctionList = [];
    b.__callLaterThisList = [];
    b.__callLaterArgsList = [];
    b.callLater = function(c, d) {
        for (var a = [], e = 2; e < arguments.length; e++) a[e - 2] = arguments[e];
        b.__callLaterFunctionList.push(c);
        b.__callLaterThisList.push(d);
        b.__callLaterArgsList.push(a)
    };
    b.__callAsyncFunctionList = [];
    b.__callAsyncThisList = [];
    b.__callAsyncArgsList = [];
    b.__callAsync = function(c, d) {
        for (var a = [], e = 2; e < arguments.length; e++) a[e - 2] = arguments[e];
        b.__callAsyncFunctionList.push(c);
        b.__callAsyncThisList.push(d);
        b.__callAsyncArgsList.push(a)
    }
})(egret || (egret = {}));
var egret_dom;
(function(b) {
    function c() {
        for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], e = 0; e < a.length; e++)
            if (a[e] + "ransform" in b) return a[e];
        return a[0]
    }
    b.header = "";
    b.getHeader = c;
    b.getTrans = function(d) {
        "" == b.header && (b.header = c());
        return b.header + d.substring(1, d.length)
    }
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = e;
            this._bubbles = a;
            this._cancelable = b
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
        Object.defineProperty(a.prototype, "target", {
            get: function() {
                return this._target
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.isDefaultPrevented =
            function() {
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
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target =
                null, this._eventPhase = 2)
        };
        a._dispatchByTarget = function(e, a, p, d, c, f) {
            void 0 === c && (c = !1);
            void 0 === f && (f = !1);
            var h = e.eventRecycler;
            h || (h = e.eventRecycler = new b.Recycler);
            var m = h.pop();
            m ? m._type = p : m = new e(p);
            m._bubbles = c;
            m._cancelable = f;
            if (d)
                for (var n in d) m[n] = d[n], null !== m[n] && (d[n] = null);
            e = a.dispatchEvent(m);
            h.push(m);
            return e
        };
        a._getPropertyData = function(e) {
            var a = e._props;
            a || (a = e._props = {});
            return a
        };
        a.dispatchEvent = function(e, k, b, d) {
            void 0 === b && (b = !1);
            var c = a._getPropertyData(a);
            d && (c.data = d);
            a._dispatchByTarget(a,
                e, k, c, b)
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
        a.ACTIVATE = "activate";
        a.DEACTIVATE = "deactivate";
        a.CLOSE = "close";
        a.CONNECT = "connect";
        return a
    }(b.HashObject);
    b.Event = c;
    c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(e, a, p) {
            void 0 === a && (a = !1);
            void 0 === p && (p = !1);
            b.call(this, e, a, p);
            this._status = 0
        }
        __extends(a, b);
        Object.defineProperty(a.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !0,
            configurable: !0
        });
        a.dispatchHTTPStatusEvent = function(e, k) {
            null == a.httpStatusEvent && (a.httpStatusEvent = new a(a.HTTP_STATUS));
            a.httpStatusEvent._status = k;
            e.dispatchEvent(a.httpStatusEvent)
        };
        a.HTTP_STATUS = "httpStatus";
        a.httpStatusEvent = null;
        return a
    }(b.Event);
    b.HTTPStatusEvent =
        c;
    c.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchIOErrorEvent = function(e) {
            b.Event._dispatchByTarget(a, e, a.IO_ERROR)
        };
        a.IO_ERROR = "ioError";
        return a
    }(b.Event);
    b.IOErrorEvent = c;
    c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b, l, c, f, h, m, n, q) {
            void 0 === a && (a = !0);
            void 0 === b && (b = !0);
            void 0 === l && (l = 0);
            void 0 === c && (c = 0);
            void 0 === f && (f = 0);
            void 0 === h && (h = !1);
            void 0 === m && (m = !1);
            void 0 === q && (q = !1);
            d.call(this, e, a, b);
            this._stageY = this._stageX = 0;
            this.touchPointID = l;
            this._stageX = c;
            this._stageY = f;
            this.ctrlKey = h;
            this.altKey = m;
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
        Object.defineProperty(a.prototype,
            "stageY", {
                get: function() {
                    return this._stageY
                },
                enumerable: !0,
                configurable: !0
            });
        Object.defineProperty(a.prototype, "localX", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "localY", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).y
            },
            enumerable: !0,
            configurable: !0
        });
        a.dispatchTouchEvent = function(e, k, p, d, c, f, h, m, n) {
            void 0 === p && (p = 0);
            void 0 === d && (d = 0);
            void 0 === c && (c = 0);
            void 0 === f && (f = !1);
            void 0 === h && (h = !1);
            void 0 === m && (m = !1);
            void 0 === n && (n = !1);
            var q = b.Event._getPropertyData(a);
            q.touchPointID = p;
            q._stageX = d;
            q._stageY = c;
            q.ctrlKey = f;
            q.altKey = h;
            q.shiftKey = m;
            q.touchDown = n;
            b.Event._dispatchByTarget(a, e, k, q, !0, !0)
        };
        a.TOUCH_TAP = "touchTap";
        a.TOUCH_MOVE = "touchMove";
        a.TOUCH_BEGIN = "touchBegin";
        a.TOUCH_END = "touchEnd";
        a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
        a.TOUCH_ROLL_OUT = "touchRollOut";
        a.TOUCH_ROLL_OVER = "touchRollOver";
        a.TOUCH_OUT =
            "touchOut";
        a.TOUCH_OVER = "touchOver";
        return a
    }(b.Event);
    b.TouchEvent = c;
    c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchTimerEvent = function(e, k) {
            b.Event._dispatchByTarget(a, e, k)
        };
        a.TIMER = "timer";
        a.TIMER_COMPLETE = "timerComplete";
        return a
    }(b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b, l, c) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            void 0 === l && (l = 0);
            void 0 === c && (c = 0);
            d.call(this, e, a, b);
            this.bytesLoaded = l;
            this.bytesTotal = c
        }
        __extends(a, d);
        a.dispatchProgressEvent = function(e, k, p, d) {
            void 0 === p && (p = 0);
            void 0 === d && (d = 0);
            b.Event._dispatchByTarget(a, e, k, {
                bytesLoaded: p,
                bytesTotal: d
            })
        };
        a.PROGRESS = "progress";
        a.SOCKET_DATA = "socketData";
        return a
    }(b.Event);
    b.ProgressEvent = c;
    c.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.CAPTURING_PHASE = 1;
        b.AT_TARGET = 2;
        b.BUBBLING_PHASE = 3;
        return b
    }();
    b.EventPhase = c;
    c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e) {
            void 0 === e && (e = null);
            d.call(this);
            this._eventTarget = e ? e : this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, p, d, c) {
            void 0 === d && (d = !1);
            void 0 === c && (c = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var f = d[e];
            f || (f = d[e] = []);
            this._insertEventBin(f, a, p, c)
        };
        a.prototype._insertEventBin = function(e, a, b, d, c) {
            void 0 === c && (c = void 0);
            for (var f = -1, h = e.length, m = 0; m < h; m++) {
                var n = e[m];
                if (n.listener === a && n.thisObject === b && n.display === c) return !1; - 1 == f && n.priority < d && (f = m)
            }
            a = {
                listener: a,
                thisObject: b,
                priority: d
            };
            c && (a.display = c); - 1 != f ? e.splice(f, 0, a) : e.push(a);
            return !0
        };
        a.prototype.removeEventListener = function(e, a, b, d) {
            void 0 === d && (d = !1);
            if (d = d ? this._captureEventsMap : this._eventsMap) {
                var c = d[e];
                c && (this._removeEventBin(c,
                    a, b), 0 == c.length && delete d[e])
            }
        };
        a.prototype._removeEventBin = function(e, a, b, d) {
            void 0 === d && (d = void 0);
            for (var c = e.length, f = 0; f < c; f++) {
                var h = e[f];
                if (h.listener === a && h.thisObject === b && h.display === d) return e.splice(f, 1), !0
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
            e._currentTarget = this._eventTarget;
            return this._notifyListener(e)
        };
        a.prototype._notifyListener = function(e) {
            var a = 1 == e._eventPhase ? this._captureEventsMap : this._eventsMap;
            if (!a) return !0;
            a = a[e._type];
            if (!a) return !0;
            var b = a.length;
            if (0 == b) return !0;
            for (var a = a.concat(), d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e);
                if (e._isPropagationImmediateStopped) break
            }
            return !e._isDefaultPrevented
        };
        a.prototype.dispatchEventWith = function(e, a, p) {
            void 0 === a && (a = !1);
            b.Event.dispatchEvent(this, e, a, p)
        };
        return a
    }(b.HashObject);
    b.EventDispatcher = c;
    c.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
                var k = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var p = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var d = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            e = this.stage;
            var c = a.cachedEvent;
            c._type = b.Event.RENDER;
            this.dispatchEvent(c);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
            k && this.doCallLaterList(k, p, d);
            0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
            k = this.rendererContext;
            k.onRenderStart();
            k.clearScreen();
            e._updateTransform();
            c._type = b.Event.FINISH_UPDATE_TRANSFORM;
            this.dispatchEvent(c);
            e._draw(k);
            c._type = b.Event.FINISH_RENDER;
            this.dispatchEvent(c);
            k.onRenderFinish()
        };
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), p = a.length, d = 0; d < p; d++) {
                var c = a[d];
                e._target = c.display;
                e._currentTarget = c.display;
                c.listener.call(c.thisObject, e)
            }
            a = b.Recycler._callBackList;
            for (d = a.length - 1; 0 <= d; d--) a[d]._checkFrame()
        };
        a.prototype.broadcastRender = function() {
            var e = this.reuseEvent;
            e._type = b.Event.RENDER;
            for (var a = b.DisplayObject._renderCallBackList.concat(),
                p = a.length, d = 0; d < p; d++) {
                var c = a[d],
                    f = c.display;
                e._target = f;
                e._currentTarget = f;
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.doCallLaterList = function(e, a, b) {
            for (var d = e.length, c = 0; c < d; c++) {
                var f = e[c];
                null != f && f.apply(a[c], b[c])
            }
        };
        a.prototype.doCallAsyncList = function() {
            var e = b.__callAsyncFunctionList.concat(),
                a = b.__callAsyncThisList.concat(),
                p = b.__callAsyncArgsList.concat();
            b.__callAsyncFunctionList.length = 0;
            b.__callAsyncThisList.length = 0;
            for (var d = b.__callAsyncArgsList.length = 0; d < e.length; d++) {
                var c =
                    e[d];
                null != c && c.apply(a[d], p[d])
            }
        };
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        a.RUNTIME_HTML5 = "runtime_html5";
        a.RUNTIME_NATIVE = "runtime_native";
        a.cachedEvent = new b.Event("");
        return a
    }(b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
        if (!this.navigator) return !0;
        var b = navigator.userAgent.toLowerCase();
        return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
    },
    testRuntimeType = function() {
        return this.navigator ? !0 : !1
    };
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(b) {
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
            null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, this._txt.multiline = !0, b.MainContext.instance.stage.addChild(this._txt));
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
        d.prototype.onFinishUpdateTransform =
            function(a) {
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
                var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
                    "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        };
        d.prototype.onDrawImage = function() {
            this._preDrawCount++
        };
        return d
    }();
    b.Profiler = c;
    c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
                b = a.length;
            e *= this._timeScale;
            e *= this._timeScale;
            for (var d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.register = function(e, a, b) {
            void 0 === b &&
                (b = 0);
            this._insertEventBin(this.callBackList, e, a, b)
        };
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        };
        a.prototype.setTimeout = function(e, a, d) {
            for (var c = [], g = 3; g < arguments.length; g++) c[g - 3] = arguments[g];
            b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
            b.setTimeout.apply(null, [e, a, d].concat(c))
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
    b.Ticker = c;
    c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.LEFT = "left";
        b.RIGHT = "right";
        b.CENTER = "center";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    }();
    b.HorizontalAlign = c;
    c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.MIDDLE = "middle";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    }();
    b.VerticalAlign = c;
    c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a) {
            void 0 === a && (a = 0);
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
    b.Timer = c;
    c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(b) {
    function c(b) {
        b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
        if (b.hasOwnProperty("__class__")) return b.__class__;
        var a = b.constructor.toString(),
            e = a.indexOf("("),
            a = a.substring(9, e);
        Object.defineProperty(b, "__class__", {
            value: a,
            enumerable: !1,
            writable: !0
        });
        return a
    }
    b.getQualifiedClassName = c;
    b.getQualifiedSuperclassName = function(b) {
        b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
        if (b.hasOwnProperty("__superclass__")) return b.__superclass__;
        var a = Object.getPrototypeOf(b);
        if (null == a) return null;
        a = c(a.constructor);
        if (!a) return null;
        Object.defineProperty(b, "__superclass__", {
            value: a,
            enumerable: !1,
            writable: !0
        });
        return a
    }
})(egret || (egret = {}));
(function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b) return null;
        var a = c[b];
        if (a) return a;
        for (var e = b.split("."), k = e.length, a = __global, p = 0; p < k; p++)
            if (a = a[e[p]], !a) return null;
        return c[b] = a
    }
})(egret || (egret = {}));
var __global = __global || this;
(function(b) {
    function c(e) {
        for (var a in d) {
            var b = d[a];
            b.delay -= e;
            0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete d[a])
        }
    }
    var d = {},
        a = 0;
    b.setTimeout = function(e, k, p) {
        for (var l = [], g = 3; g < arguments.length; g++) l[g - 3] = arguments[g];
        l = {
            listener: e,
            thisObject: k,
            delay: p,
            params: l
        };
        0 == a && b.Ticker.getInstance().register(c, null);
        a++;
        d[a] = l;
        return a
    };
    b.clearTimeout = function(e) {
        delete d[e]
    }
})(egret || (egret = {}));
(function(b) {
    b.hasDefinition = function(c) {
        return b.getDefinitionByName(c) ? !0 : !1
    }
})(egret || (egret = {}));
(function(b) {
    b.toColorString = function(b) {
        if (isNaN(b) || 0 > b) b = 0;
        16777215 < b && (b = 16777215);
        for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
        return "#" + b
    }
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a, b, c, g, f) {
            void 0 === e && (e = 1);
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 1);
            void 0 === g && (g = 0);
            void 0 === f && (f = 0);
            d.call(this);
            this.a = e;
            this.b = a;
            this.c = b;
            this.d = c;
            this.tx = g;
            this.ty = f
        }
        __extends(a, d);
        a.prototype.prepend = function(e, a, b, d, c, f) {
            var h = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var m = this.a,
                    n = this.c;
                this.a = m * e + this.b * b;
                this.b = m * a + this.b * d;
                this.c = n * e + this.d * b;
                this.d = n * a + this.d * d
            }
            this.tx = h * e + this.ty * b + c;
            this.ty = h * a + this.ty * d + f;
            return this
        };
        a.prototype.append =
            function(e, a, b, d, c, f) {
                var h = this.a,
                    m = this.b,
                    n = this.c,
                    q = this.d;
                if (1 != e || 0 != a || 0 != b || 1 != d) this.a = e * h + a * n, this.b = e * m + a * q, this.c = b * h + d * n, this.d = b * m + d * q;
                this.tx = c * h + f * n + this.tx;
                this.ty = c * m + f * q + this.ty;
                return this
            };
        a.prototype.prependTransform = function(e, a, d, c, g, f, h, m, n) {
            if (g % 360) {
                var q = b.NumberUtils.cos(g);
                g = b.NumberUtils.sin(g)
            } else q = 1, g = 0; if (m || n) this.tx -= m, this.ty -= n;
            f || h ? (this.prepend(q * d, g * d, -g * c, q * c, 0, 0), this.prepend(b.NumberUtils.cos(h), b.NumberUtils.sin(h), -b.NumberUtils.sin(f), b.NumberUtils.cos(f),
                e, a)) : this.prepend(q * d, g * d, -g * c, q * c, e, a);
            return this
        };
        a.prototype.appendTransform = function(e, a, d, c, g, f, h, m, n) {
            if (g % 360) {
                var q = b.NumberUtils.cos(g);
                g = b.NumberUtils.sin(g)
            } else q = 1, g = 0;
            f || h ? (this.append(b.NumberUtils.cos(h), b.NumberUtils.sin(h), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), e, a), this.append(q * d, g * d, -g * c, q * c, 0, 0)) : this.append(q * d, g * d, -g * c, q * c, e, a);
            if (m || n) this.tx -= m * this.a + n * this.c, this.ty -= m * this.b + n * this.d;
            return this
        };
        a.prototype.rotate = function(e) {
            var a = Math.cos(e);
            e = Math.sin(e);
            var b =
                this.a,
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
        a.prototype.skew = function(e, a) {
            this.append(b.NumberUtils.cos(a), b.NumberUtils.sin(a), -b.NumberUtils.sin(e), b.NumberUtils.cos(e), 0, 0);
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
        a.prototype.identity =
            function() {
                this.a = this.d = 1;
                this.b = this.c = this.tx = this.ty = 0;
                return this
            };
        a.prototype.identityMatrix = function(e) {
            this.a = e.a;
            this.b = e.b;
            this.c = e.c;
            this.d = e.d;
            this.tx = e.tx;
            this.ty = e.ty;
            return this
        };
        a.prototype.invert = function() {
            var e = this.a,
                a = this.b,
                b = this.c,
                d = this.d,
                c = this.tx,
                f = e * d - a * b;
            this.a = d / f;
            this.b = -a / f;
            this.c = -b / f;
            this.d = e / f;
            this.tx = (b * this.ty - d * c) / f;
            this.ty = -(e * this.ty - a * c) / f;
            return this
        };
        a.transformCoords = function(e, a, d) {
            var c = b.Point.identity;
            c.x = e.a * a + e.c * d + e.tx;
            c.y = e.d * d + e.b * a + e.ty;
            return c
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
    }(b.HashObject);
    b.Matrix = c;
    c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(e, a) {
            void 0 === e && (e = 0);
            void 0 === a && (a = 0);
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
    b.Point = c;
    c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(e, a, p, c) {
            void 0 === e && (e = 0);
            void 0 === a && (a = 0);
            void 0 === p && (p = 0);
            void 0 === c && (c = 0);
            b.call(this);
            this.x = e;
            this.y = a;
            this.width = p;
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
            var a = e.right,
                b = e.bottom,
                d = this.right,
                c = this.bottom;
            return this.contains(e.x, e.y) || this.contains(e.x, b) || this.contains(a, e.y) || this.contains(a, b) || e.contains(this.x, this.y) || e.contains(this.x, c) || e.contains(d, this.y) || e.contains(d, c) ? !0 : !1
        };
        a.prototype.clone =
            function() {
                return new a(this.x, this.y, this.width, this.height)
            };
        a.prototype.containsPoint = function(e) {
            return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
        };
        a.identity = new a(0, 0, 0, 0);
        return a
    }(b.HashObject);
    b.Rectangle = c;
    c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.fatal = function(a, e) {
            void 0 === e && (e = null);
            b.Logger.traceToConsole("Fatal", a, e);
            throw Error(b.Logger.getTraceCode("Fatal", a, e));
        };
        d.info = function(a, e) {
            void 0 === e && (e = null);
            b.Logger.traceToConsole("Info", a, e)
        };
        d.warning = function(a, e) {
            void 0 === e && (e = null);
            b.Logger.traceToConsole("Warning", a, e)
        };
        d.traceToConsole = function(a, e, k) {
            console.log(b.Logger.getTraceCode(a, e, k))
        };
        d.getTraceCode = function(a, e, k) {
            return "[" + a + "]" + e + ":" + (null == k ? "" : k)
        };
        return d
    }();
    b.Logger =
        c;
    c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
            this._isSupportDOMParser ?
                a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
            null == a && b.Logger.info("xml not found!");
            return a
        };
        a._instance = null;
        return a
    }(b.HashObject);
    b.SAXParser = c;
    c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(e) {
        function k() {
            e.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            this._stageHeight = this._stageWidth = this._offSetY = 0
        }
        __extends(k, e);
        k.getInstance = function() {
            null == k.instance && (a.initialize(), k.instance = new k);
            return k.instance
        };
        k.prototype.setDesignSize = function(e, a, k) {
            this._designWidth = e;
            this._designHeight = a;
            k && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
                this._setResolutionPolicy(k))
        };
        k.prototype._setResolutionPolicy = function(e) {
            this._resolutionPolicy = e;
            e.init(this);
            e._apply(this, this._designWidth, this._designHeight)
        };
        k.prototype.getScaleX = function() {
            return this._scaleX
        };
        k.prototype.getScaleY = function() {
            return this._scaleY
        };
        k.prototype.getOffSetY = function() {
            return this._offSetY
        };
        k.canvas_name = "egretCanvas";
        k.canvas_div_name = "gameDiv";
        return k
    }(b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function e(a,
            k) {
            this._containerStrategy = a;
            this._contentStrategy = k
        }
        e.prototype.init = function(e) {
            this._containerStrategy.init(e);
            this._contentStrategy.init(e)
        };
        e.prototype._apply = function(e, a, k) {
            this._containerStrategy._apply(e, a, k);
            this._contentStrategy._apply(e, a, k)
        };
        return e
    }();
    b.ResolutionPolicy = d;
    d.prototype.__class__ = "egret.ResolutionPolicy";
    var a = function() {
        function a() {}
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new e
        };
        a.prototype.init = function(e) {};
        a.prototype._apply = function(e, a, k) {};
        a.prototype._setupContainer =
            function() {
                var e = document.body,
                    a;
                e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
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
    d = function() {
        function e() {}
        e.prototype.init = function(e) {};
        e.prototype._apply = function(e, a, k) {};
        e.prototype.setEgretSize = function(e, a, k, d, p, n) {
            void 0 === n && (n = 0);
            b.StageDelegate.getInstance()._stageWidth = Math.round(e);
            b.StageDelegate.getInstance()._stageHeight =
                Math.round(a);
            e = document.getElementById(c.canvas_div_name);
            e.style.width = k + "px";
            e.style.height = d + "px";
            e.style.top = n + "px"
        };
        e.prototype._getClientWidth = function() {
            return document.documentElement.clientWidth
        };
        e.prototype._getClientHeight = function() {
            return document.documentElement.clientHeight
        };
        return e
    }();
    b.ContentStrategy = d;
    d.prototype.__class__ = "egret.ContentStrategy";
    var k = function(e) {
        function a(k) {
            void 0 === k && (k = 0);
            e.call(this);
            this.minWidth = k
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            a =
                this._getClientWidth();
            var b = this._getClientHeight(),
                d = b / k,
                p = a / d,
                c = 1;
            0 != this.minWidth && (c = Math.min(1, p / this.minWidth));
            this.setEgretSize(p / c, k, a, b * c);
            e._scaleX = d * c;
            e._scaleY = d * c
        };
        return a
    }(d);
    b.FixedHeight = k;
    k.prototype.__class__ = "egret.FixedHeight";
    k = function(e) {
        function a(k) {
            void 0 === k && (k = 0);
            e.call(this);
            this.minHeight = k
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            k = this._getClientWidth();
            var b = this._getClientHeight(),
                d = k / a,
                p = b / d,
                c = 1;
            0 != this.minHeight && (c = Math.min(1, p / this.minHeight));
            this.setEgretSize(a,
                p / c, k * c, b, k * (1 - c) / 2);
            e._scaleX = d * c;
            e._scaleY = d * c
        };
        return a
    }(d);
    b.FixedWidth = k;
    k.prototype.__class__ = "egret.FixedWidth";
    k = function(e) {
        function a(k, b) {
            e.call(this);
            this.width = k;
            this.height = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            k = this.width;
            var b = this.height,
                d = k / a;
            this.setEgretSize(a, b / d, k, b);
            e._scaleX = d;
            e._scaleY = d
        };
        return a
    }(d);
    b.FixedSize = k;
    k.prototype.__class__ = "egret.FixedSize";
    k = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            this.setEgretSize(a,
                k, a, k, Math.floor((a - a) / 2));
            e._scaleX = 1;
            e._scaleY = 1
        };
        return a
    }(d);
    b.NoScale = k;
    k.prototype.__class__ = "egret.NoScale";
    k = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            var b = this._getClientWidth(),
                d = this._getClientHeight(),
                p = b,
                c = d,
                l = p / a < c / k ? p / a : c / k,
                p = a * l,
                c = k * l,
                b = Math.floor((b - p) / 2);
            e._offSetY = Math.floor((d - c) / 2);
            this.setEgretSize(a, k / 1, 1 * p, c, b, e._offSetY);
            e._scaleX = 1 * l;
            e._scaleY = 1 * l
        };
        return a
    }(d);
    b.ShowAll = k;
    k.prototype.__class__ = "egret.ShowAll";
    d = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, k) {
            var b = this._getClientWidth(),
                d = this._getClientHeight(),
                b = b / a,
                d = d / k;
            this.setEgretSize(a, k, a * b, k * d);
            e._scaleX = b;
            e._scaleY = d
        };
        return a
    }(d);
    b.FullScreen = d;
    d.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype.drawImage = function(e, a, d, c, g, f, h, m, n, q, r) {
            void 0 === r && (r = void 0);
            h = h || 0;
            m = m || 0;
            var t = a._texture_to_render;
            if (null != t && 0 != f && 0 != g && 0 != n && 0 != q) {
                var s = b.MainContext.instance.rendererContext.texture_scale_factor;
                g /= s;
                f /= s;
                if (0 != this._drawAreaList.length && b.MainContext.instance.rendererContext._cacheCanvasContext) {
                    s = b.DisplayObject.getTransformBounds(a._getSize(b.Rectangle.identity), a._worldTransform);
                    a._worldBounds.initialize(s.x, s.y, s.width, s.height);
                    s = this._originalData;
                    s.sourceX = d;
                    s.sourceY = c;
                    s.sourceWidth = g;
                    s.sourceHeight = f;
                    s.destX = h;
                    s.destY = m;
                    s.destWidth = n;
                    s.destHeight = q;
                    for (var u = this.getDrawAreaList(), v = 0; v < u.length; v++)
                        if (!this.ignoreRender(a, u[v], s.destX, s.destY)) {
                            e.drawImage(t, d, c, g, f, h, m, n, q, r);
                            break
                        }
                } else e.drawImage(t, d, c, g, f, h, m, n, q, r)
            }
        };
        a.prototype.ignoreRender = function(e, a, b, d) {
            var c = e._worldBounds;
            b *= e._worldTransform.a;
            d *= e._worldTransform.d;
            return c.x + c.width + b <= a.x || c.x + b >= a.x + a.width || c.y + c.height + d <= a.y || c.y + d >= a.y + a.height ? !0 : !1
        };
        a.prototype.getDrawAreaList = function() {
            var e;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)], b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
                this.onResize, this)), e = this._defaultDrawAreaList) : e = this._drawAreaList;
            return e
        };
        a.prototype.onResize = function() {
            b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
            this._defaultDrawAreaList = null
        };
        return a
    }(b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, k) {
            void 0 === k && (k = "");
            a = this.getKey(a) + "#" + k;
            this.mapClassDic[a] = e
        };
        d.getKey = function(a) {
            return "string" == typeof a ? a : b.getQualifiedClassName(a)
        };
        d.mapValue = function(a, e, k) {
            void 0 === k && (k = "");
            a = this.getKey(a) + "#" + k;
            this.mapValueDic[a] = e
        };
        d.hasMapRule = function(a, e) {
            void 0 === e && (e = "");
            var k = this.getKey(a) + "#" + e;
            return this.mapValueDic[k] || this.mapClassDic[k] ? !0 : !1
        };
        d.getInstance = function(a, e) {
            void 0 === e && (e = "");
            var k = this.getKey(a) + "#" +
                e;
            if (this.mapValueDic[k]) return this.mapValueDic[k];
            var b = this.mapClassDic[k];
            if (b) return b = new b, this.mapValueDic[k] = b, delete this.mapClassDic[k], b;
            throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + k + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
        };
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    }();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
})(egret ||
    (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
        return b
    }();
    b.BlendMode = c;
    c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.__hack_local_matrix = null;
            this._sizeDirty = this._normalDirty = !0;
            this._parent = this._texture_to_render = null;
            this._y = this._x = 0;
            this._scaleY = this._scaleX = 1;
            this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
            this._visible = !0;
            this._rotation = 0;
            this._alpha = 1;
            this._skewY = this._skewX = 0;
            this._touchEnabled = !1;
            this._scrollRect = this.blendMode = null;
            this._hasHeightSet = this._hasWidthSet = !1;
            this._worldBounds = this.mask = null;
            this.worldAlpha =
                1;
            this._rectH = this._rectW = 0;
            this._stage = null;
            this._cacheDirty = this._cacheAsBitmap = !1;
            this._colorTransform = null;
            this._worldTransform = new b.Matrix;
            this._worldBounds = new b.Rectangle(0, 0, 0, 0);
            this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
        }
        __extends(a, d);
        a.prototype._setDirty = function() {
            this._normalDirty = !0
        };
        a.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        };
        a.prototype._setParentSizeDirty = function() {
            var e = this._parent;
            !e || e._hasWidthSet || e._hasHeightSet || e._setSizeDirty()
        };
        a.prototype._setSizeDirty =
            function() {
                this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
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
                this._setX(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setX = function(e) {
            b.NumberUtils.isNumber(e) && this._x != e && (this._x = e, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(a.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._setY(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setY = function(e) {
            b.NumberUtils.isNumber(e) && this._y != e && (this._y = e, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(a.prototype, "scaleX", {
            get: function() {
                return this._scaleX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) &&
                    this._scaleX != e && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scaleY", {
            get: function() {
                return this._scaleY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._scaleY != e && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetX", {
            get: function() {
                return this._anchorOffsetX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._anchorOffsetX !=
                    e && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetY", {
            get: function() {
                return this._anchorOffsetY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._anchorOffsetY != e && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(e) {
                this._setAnchorX(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setAnchorX = function(e) {
            b.NumberUtils.isNumber(e) && this._anchorX != e && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(a.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(e) {
                this._setAnchorY(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setAnchorY = function(e) {
            b.NumberUtils.isNumber(e) && this._anchorY != e && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(a.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(e) {
                this._setVisible(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setVisible = function(e) {
            this._visible != e && (this._visible = e, this._setSizeDirty())
        };
        Object.defineProperty(a.prototype, "rotation", {
            get: function() {
                return this._rotation
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._rotation != e && (this._rotation = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) &&
                    this._alpha != e && (this._alpha = e, this._setDirty(), this._setCacheDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewX", {
            get: function() {
                return this._skewX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._skewX != e && (this._skewX = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewY", {
            get: function() {
                return this._skewY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._skewY != e && (this._skewY = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "touchEnabled", {
            get: function() {
                return this._touchEnabled
            },
            set: function(e) {
                this._setTouchEnabled(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTouchEnabled = function(e) {
            this._touchEnabled = e
        };
        Object.defineProperty(a.prototype, "scrollRect", {
            get: function() {
                return this._scrollRect
            },
            set: function(e) {
                this._setScrollRect(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setScrollRect = function(e) {
            this._scrollRect = e;
            this._setSizeDirty()
        };
        Object.defineProperty(a.prototype,
            "measuredWidth", {
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
        Object.defineProperty(a.prototype,
            "width", {
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
            this._setCacheDirty();
            this._explicitWidth = e;
            this._hasWidthSet = b.NumberUtils.isNumber(e)
        };
        a.prototype._setHeight = function(e) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._explicitHeight = e;
            this._hasHeightSet = b.NumberUtils.isNumber(e)
        };
        a.prototype._draw = function(e) {
            if (this._visible && !this.drawCacheTexture(e)) {
                this._colorTransform && e.setGlobalColorTransform(this._colorTransform.matrix);
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var a = this.mask || this._scrollRect;
                a && e.pushMask(a);
                this._render(e);
                a && e.popMask();
                this._colorTransform && e.setGlobalColorTransform(null)
            }
            this.destroyCacheBounds()
        };
        a.prototype.drawCacheTexture =
            function(e) {
                if (!1 == this._cacheAsBitmap) return !1;
                if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight)) this._cacheDirty = !this._makeBitmapCache();
                if (null == this._texture_to_render) return !1;
                var a = this._texture_to_render,
                    d = a._offsetX,
                    c = a._offsetY,
                    g = a._textureWidth,
                    a = a._textureHeight;
                this._updateTransform();
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var f = b.MainContext.instance.rendererContext.texture_scale_factor;
                b.RenderFilter.getInstance().drawImage(e, this, 0, 0, g * f, a * f, d, c, g, a);
                return !0
            };
        a.prototype._updateTransform = function() {
            this._calculateWorldTransform()
        };
        a.prototype._calculateWorldTransform = function() {
            var e = this._worldTransform,
                a = this._parent;
            e.identityMatrix(a._worldTransform);
            this._getMatrix(e);
            var b = this._scrollRect;
            b && e.append(1, 0, 0, 1, -b.x, -b.y);
            this.worldAlpha = a.worldAlpha * this._alpha
        };
        a.prototype._render = function(e) {};
        a.prototype.getBounds =
            function(e, a) {
                void 0 === a && (a = !0);
                var d = this._measureBounds(),
                    c = this._hasWidthSet ? this._explicitWidth : d.width,
                    g = this._hasHeightSet ? this._explicitHeight : d.height;
                this._rectW = d.width;
                this._rectH = d.height;
                this._clearSizeDirty();
                var f = d.x,
                    d = d.y,
                    h = 0,
                    m = 0;
                a && (0 != this._anchorX || 0 != this._anchorY ? (h = c * this._anchorX, m = g * this._anchorY) : (h = this._anchorOffsetX, m = this._anchorOffsetY));
                this._cacheBounds.initialize(f - h, d - m, c, g);
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
            for (var e = a.identityMatrixForGetConcatenated.identity(), k = this; null != k;) {
                if (0 != k._anchorX || 0 != k._anchorY) {
                    var d = k._getSize(b.Rectangle.identity);
                    e.prependTransform(k._x, k._y, k._scaleX, k._scaleY, k._rotation, k._skewX, k._skewY, d.width * k._anchorX, d.height * k._anchorY)
                } else e.prependTransform(k._x, k._y, k._scaleX, k._scaleY,
                    k._rotation, k._skewX, k._skewY, k._anchorOffsetX, k._anchorOffsetY);
                k._scrollRect && e.prepend(1, 0, 0, 1, -k._scrollRect.x, -k._scrollRect.y);
                k = k._parent
            }
            return e
        };
        a.prototype.localToGlobal = function(e, a, d) {
            void 0 === e && (e = 0);
            void 0 === a && (a = 0);
            var c = this._getConcatenatedMatrix();
            c.append(1, 0, 0, 1, e, a);
            d || (d = new b.Point);
            d.x = c.tx;
            d.y = c.ty;
            return d
        };
        a.prototype.globalToLocal = function(e, a, d) {
            void 0 === e && (e = 0);
            void 0 === a && (a = 0);
            var c = this._getConcatenatedMatrix();
            c.invert();
            c.append(1, 0, 0, 1, e, a);
            d || (d = new b.Point);
            d.x = c.tx;
            d.y = c.ty;
            return d
        };
        a.prototype.hitTest = function(e, a, d) {
            void 0 === d && (d = !1);
            if (!this._visible || !d && !this._touchEnabled) return null;
            d = this._getSize(b.Rectangle.identity);
            return 0 <= e && e < d.width && 0 <= a && a < d.height ? this.mask || this._scrollRect ? this._scrollRect && e > this._scrollRect.x && a > this._scrollRect.y && e < this._scrollRect.x + this._scrollRect.width && a < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ?
                this : null : this : null
        };
        a.prototype.hitTestPoint = function(e, a, d) {
            e = this.globalToLocal(e, a);
            return d ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), d = this._hitTestPointTexture, d.drawToTexture(this), 0 != d.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
        };
        a.prototype._getMatrix = function(e) {
            e || (e = b.Matrix.identity.identity());
            var a, d;
            d = this._getOffsetPoint();
            a = d.x;
            d = d.y;
            var c = this.__hack_local_matrix;
            c ? (e.append(c.a, c.b, c.c, c.d, c.tx, c.ty), e.append(1, 0, 0, 1, -a, -d)) : e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a, d);
            return e
        };
        a.prototype._getSize = function(e) {
            return this._hasHeightSet && this._hasWidthSet ? e.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(e)
        };
        a.prototype._measureSize = function(e) {
            this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW,
                e.height = this._rectH);
            e.x = 0;
            e.y = 0;
            return e
        };
        a.prototype._measureBounds = function() {
            return b.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        a.prototype._getOffsetPoint = function() {
            var e = this._anchorOffsetX,
                a = this._anchorOffsetY;
            if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity), e = this._anchorX * a.width, a = this._anchorY * a.height;
            var d = b.Point.identity;
            d.x = e;
            d.y = a;
            return d
        };
        a.prototype._onAddToStage = function() {
            this._stage = b.MainContext.instance.stage;
            b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        a.prototype._onRemoveFromStage = function() {
            b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
        };
        Object.defineProperty(a.prototype, "stage", {
            get: function() {
                return this._stage
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.addEventListener = function(e, k, p, c, g) {
            void 0 === c && (c = !1);
            void 0 === g && (g = 0);
            d.prototype.addEventListener.call(this, e, k, p, c, g);
            ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(c ? a._enterFrameCallBackList : a._renderCallBackList, k, p, g, this)
        };
        a.prototype.removeEventListener =
            function(e, k, p, c) {
                void 0 === c && (c = !1);
                d.prototype.removeEventListener.call(this, e, k, p, c);
                ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(c ? a._enterFrameCallBackList : a._renderCallBackList, k, p, this)
            };
        a.prototype.dispatchEvent = function(e) {
            if (!e._bubbles) return d.prototype.dispatchEvent.call(this, e);
            for (var a = [], b = this; b;) a.push(b), b = b._parent;
            e._reset();
            this._dispatchPropagationEvent(e, a);
            return !e._isDefaultPrevented
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            b = a.length;
            for (var d = 1, c = b - 1; 0 <= c; c--) {
                var f = a[c];
                e._currentTarget = f;
                e._target = this;
                e._eventPhase = d;
                f._notifyListener(e);
                if (e._isPropagationStopped || e._isPropagationImmediateStopped) return
            }
            f = a[0];
            e._currentTarget = f;
            e._target = this;
            e._eventPhase = 2;
            f._notifyListener(e);
            if (!e._isPropagationStopped && !e._isPropagationImmediateStopped)
                for (d = 3, c = 1; c < b && (f = a[c], e._currentTarget = f, e._target = this, e._eventPhase = d, f._notifyListener(e), !e._isPropagationStopped && !e._isPropagationImmediateStopped); c++);
        };
        a.prototype.willTrigger =
            function(e) {
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
                (this._cacheAsBitmap = e) ? b.callLater(this._makeBitmapCache, this): this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._makeBitmapCache = function() {
            this.renderTexture || (this.renderTexture = new b.RenderTexture);
            var e = this.renderTexture.drawToTexture(this);
            this._texture_to_render = e ? this.renderTexture :
                null;
            return e
        };
        a.prototype._setCacheDirty = function(e) {
            void 0 === e && (e = !0);
            this._cacheDirty = e
        };
        a.getTransformBounds = function(e, a) {
            var b = e.x,
                d = e.y,
                c = e.width,
                f = e.height;
            (b || d) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -d);
            var h = c * a.a,
                c = c * a.b,
                m = f * a.c,
                f = f * a.d,
                n = a.tx,
                q = a.ty,
                r = n,
                t = n,
                s = q,
                u = q;
            (b = h + n) < r ? r = b : b > t && (t = b);
            (b = h + m + n) < r ? r = b : b > t && (t = b);
            (b = m + n) < r ? r = b : b > t && (t = b);
            (d = c + q) < s ? s = d : d > u && (u = d);
            (d = c + f + q) < s ? s = d : d > u && (u = d);
            (d = f + q) < s ? s = d : d > u && (u = d);
            return e.initialize(r, s, t - r, u - s)
        };
        Object.defineProperty(a.prototype, "colorTransform", {
            get: function() {
                return this._colorTransform
            },
            set: function(e) {
                this._colorTransform = e
            },
            enumerable: !0,
            configurable: !0
        });
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    }(b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject";
    c = function() {
        function b() {
            this.matrix = null
        }
        b.prototype.updateColor = function(a, e, b, d, c, g, f, h) {};
        return b
    }();
    b.ColorTransform = c;
    c.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype.doSetChildIndex = function(e,
            a) {
            var d = this._children.indexOf(e);
            0 > d && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(d, 1);
            0 > a || this._children.length <= a ? this._children.push(e) : this._children.splice(a, 0, e)
        };
        a.prototype.addChild = function(e) {
            var a = this._children.length;
            e._parent == this && a--;
            return this._doAddChild(e, a)
        };
        a.prototype.addChildAt = function(e, a) {
            return this._doAddChild(e, a)
        };
        a.prototype._doAddChild = function(e, k, d) {
            void 0 === d && (d = !0);
            if (e == this) return e;
            if (0 > k || k > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
                e;
            var c = e._parent;
            if (c == this) return this.doSetChildIndex(e, k), e;
            c && (k = c._children.indexOf(e), 0 <= k && c._doRemoveChild(k));
            this._children.splice(k, 0, e);
            e._parentChanged(this);
            d && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage)
                for (e._onAddToStage(), k = a.__EVENT__ADD_TO_STAGE_LIST; 0 < k.length;) k.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
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
        a.prototype._doRemoveChild = function(e, k) {
            void 0 === k && (k = !0);
            var d = this._children,
                c = d[e];
            k && c.dispatchEventWith(b.Event.REMOVED, !0);
            if (this._stage) {
                c._onRemoveFromStage();
                for (var g = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < g.length;) {
                    var f = g.shift();
                    f.dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
                    f._stage = null
                }
            }
            c._parentChanged(null);
            d.splice(e, 1);
            this._setSizeDirty();
            return c
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
        a.prototype.swapChildren = function(e, a) {
            var d = this._children.indexOf(e),
                c = this._children.indexOf(a); - 1 == d || -1 == c ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(d, c)
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
        a.prototype._updateTransform =
            function() {
                if (this._visible) {
                    d.prototype._updateTransform.call(this);
                    for (var e = 0, a = this._children.length; e < a; e++) this._children[e]._updateTransform()
                }
            };
        a.prototype._render = function(e) {
            for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._draw(e)
        };
        a.prototype._measureBounds = function() {
            for (var e = 0, a = 0, d = 0, c = 0, g = this._children.length, f = 0; f < g; f++) {
                var h = this._children[f];
                if (h._visible) {
                    var m = h.getBounds(b.Rectangle.identity, !1),
                        n = m.x,
                        q = m.y,
                        r = m.width,
                        m = m.height,
                        h = h._getMatrix(),
                        h = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(n,
                            q, r, m), h),
                        n = h.x,
                        q = h.y,
                        r = h.width + h.x,
                        h = h.height + h.y;
                    if (n < e || 0 == f) e = n;
                    if (r > a || 0 == f) a = r;
                    if (q < d || 0 == f) d = q;
                    if (h > c || 0 == f) c = h
                }
            }
            return b.Rectangle.identity.initialize(e, d, a - e, c - d)
        };
        a.prototype.hitTest = function(e, a, c) {
            void 0 === c && (c = !1);
            var l;
            if (!this._visible) return null;
            if (this._scrollRect) {
                if (e < this._scrollRect.x || a < this._scrollRect.y || e > this._scrollRect.x + this._scrollRect.width || a > this._scrollRect.y + this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y >
                a || a > this.mask.y + this.mask.height)) return null;
            for (var g = this._children, f = this._touchChildren, h = g.length - 1; 0 <= h; h--) {
                var m = g[h],
                    n = m._getMatrix(),
                    q = m._scrollRect;
                q && n.append(1, 0, 0, 1, -q.x, -q.y);
                n.invert();
                n = b.Matrix.transformCoords(n, e, a);
                if (m = m.hitTest(n.x, n.y, !0)) {
                    if (!f) return this;
                    if (m._touchEnabled && f) return m;
                    l = this
                }
            }
            return l ? l : this._texture_to_render || this.graphics ? d.prototype.hitTest.call(this, e, a, c) : null
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var e = this._children.length,
                a = 0; a < e; a++) this._children[a]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var e = this._children.length, a = 0; a < e; a++) this._children[a]._onRemoveFromStage()
        };
        a.prototype.getChildByName = function(e) {
            for (var a = this._children, b = a.length, d, c = 0; c < b; c++)
                if (d = a[c], d.name == e) return d;
            return null
        };
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    }(b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret ||
    (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e, a) {
            void 0 === e && (e = 480);
            void 0 === a && (a = 800);
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
                this._scaleMode != e && (this._scaleMode = e, this.setResolutionPolicy())
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.changeSize = function() {
            this.setResolutionPolicy();
            this.dispatchEventWith(b.Event.RESIZE)
        };
        a.prototype.setResolutionPolicy = function() {
            var e = {};
            e[b.StageScaleMode.NO_SCALE] = new b.NoScale;
            e[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
            e[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
            e[b.StageScaleMode.EXACT_FIT] = new b.FullScreen;
            e = e[this._scaleMode];
            if (!e) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
            var a = new b.EqualToFrame,
                e = new b.ResolutionPolicy(a, e);
            b.StageDelegate.getInstance()._setResolutionPolicy(e);
            this._stageWidth = b.StageDelegate.getInstance()._stageWidth;
            this._stageHeight = b.StageDelegate.getInstance()._stageHeight
        };
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
        a.prototype.hitTest = function(e, a, d) {
            if (!this._touchEnabled) return null;
            var c;
            if (!this._touchChildren) return this;
            d = this._children;
            for (var g = d.length - 1; 0 <= g; g--) {
                c = d[g];
                var f = c._getMatrix(),
                    h = c._scrollRect;
                h && f.append(1, 0, 0, 1, -h.x, -h.y);
                f.invert();
                f = b.Matrix.transformCoords(f, e, a);
                if ((c = c.hitTest(f.x, f.y, !0)) && c._touchEnabled) return c
            }
            return this
        };
        a.prototype.getBounds = function(e) {
            e || (e = new b.Rectangle);
            return e.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        a.prototype._updateTransform = function() {
            for (var e = 0, a = this._children.length; e < a; e++) this._children[e]._updateTransform()
        };
        Object.defineProperty(a.prototype, "focus", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        });
        a._invalidateRenderFlag = !1;
        return a
    }(b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.NO_BORDER = "noBorder";
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        b.EXACT_FIT = "exactFit";
        return b
    }();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e) {
            void 0 === e && (e = null);
            d.call(this);
            this._lastTouchPosition = new b.Point(0, 0);
            this._lastTouchTime = 0;
            this._lastTouchEvent = null;
            this._velocitys = [];
            this._content = null;
            this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
            this._scrollTop = this._scrollLeft = 0;
            this._vCanScroll = this._hCanScroll = !1;
            this.touchEnabled = !0;
            e && this.setContent(e)
        }
        __extends(a, d);
        a.prototype.setContent = function(e) {
            this._content !== e && (this.removeContent(), e && (this._content = e, d.prototype.addChild.call(this,
                e), this._addEvents()))
        };
        a.prototype.removeContent = function() {
            this._content && (this._removeEvents(), d.prototype.removeChildAt.call(this, 0));
            this._content = null
        };
        Object.defineProperty(a.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._verticalScrollPolicy
            },
            set: function(e) {
                e != this._verticalScrollPolicy && (this._verticalScrollPolicy = e)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._horizontalScrollPolicy
            },
            set: function(e) {
                e !=
                    this._horizontalScrollPolicy && (this._horizontalScrollPolicy = e)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scrollLeft", {
            get: function() {
                return this._scrollLeft
            },
            set: function(e) {
                e != this._scrollLeft && (this._scrollLeft = e, this._validatePosition(!1, !0), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scrollTop", {
            get: function() {
                return this._scrollTop
            },
            set: function(e) {
                e != this._scrollTop && (this._scrollTop = e, this._validatePosition(!0, !1), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.setScrollPosition = function(e, a, b) {
            void 0 === b && (b = !1);
            if (!b || 0 != e || 0 != a)
                if (b || this._scrollTop != e || this._scrollLeft != a) {
                    if (b) {
                        b = this._isOnTheEdge(!0);
                        var d = this._isOnTheEdge(!1);
                        this._scrollTop += b ? e / 2 : e;
                        this._scrollLeft += d ? a / 2 : a
                    } else this._scrollTop = e, this._scrollLeft = a;
                    this._validatePosition(!0, !0);
                    this._updateContentPosition()
                }
        };
        a.prototype._isOnTheEdge = function(e) {
            void 0 === e && (e = !0);
            var a = this._scrollTop,
                b = this._scrollLeft;
            return e ? 0 > a || a > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
        };
        a.prototype._validatePosition = function(e, a) {
            void 0 === e && (e = !1);
            void 0 === a && (a = !1);
            if (e) {
                var b = this.height,
                    d = this._getContentHeight();
                this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
                this._scrollTop = Math.min(this._scrollTop, d > b ? d - b / 2 : d / 2)
            }
            a && (b = this.width, d = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, d > b ? d - b / 2 : d / 2))
        };
        a.prototype._setWidth = function(e) {
            this._explicitWidth !=
                e && (d.prototype._setWidth.call(this, e), this._updateContentPosition())
        };
        a.prototype._setHeight = function(e) {
            this._explicitHeight != e && (d.prototype._setHeight.call(this, e), this._updateContentPosition())
        };
        a.prototype._updateContentPosition = function() {
            var e = this.getBounds(b.Rectangle.identity);
            this.scrollRect = new b.Rectangle(this._scrollLeft, this._scrollTop, e.width, e.height);
            this.dispatchEvent(new b.Event(b.Event.CHANGE))
        };
        a.prototype._checkScrollPolicy = function() {
            var e = this.__checkScrollPolicy(this._horizontalScrollPolicy,
                this._getContentWidth(), this.width);
            this._hCanScroll = e;
            var a = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
            this._vCanScroll = a;
            return e || a
        };
        a.prototype.__checkScrollPolicy = function(e, a, b) {
            return "on" == e ? !0 : "off" == e ? !1 : a > b
        };
        a.prototype._addEvents = function() {
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture,
                this, !0)
        };
        a.prototype._removeEvents = function() {
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        a.prototype._onTouchBegin = function(e) {
            !e._isDefaultPrevented && this._checkScrollPolicy() && (b.Tween.removeTweens(this), this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(b.TouchEvent.TOUCH_END,
                this._onTouchEnd, this), this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
        };
        a.prototype._onTouchBeginCapture = function(e) {
            var d = this._checkScrollPolicy();
            if (d) {
                for (var c = e.target; c != this;) {
                    if (c instanceof a && (d = c._checkScrollPolicy())) return;
                    c = c.parent
                }
                e.stopPropagation();
                this.delayTouchBeginEvent = this.cloneTouchEvent(e);
                this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100,
                    1), this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
                this.touchBeginTimer.start();
                this._onTouchBegin(e)
            }
        };
        a.prototype._onTouchEndCapture = function(e) {
            this.delayTouchBeginEvent && this._onTouchBeginTimer()
        };
        a.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var e = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null;
            this.dispatchPropagationEvent(e)
        };
        a.prototype.dispatchPropagationEvent = function(e) {
            for (var a = [], b = e._target; b;) a.push(b),
                b = b.parent;
            for (var d = this._content, c = 1;; c += 2) {
                b = a[c];
                if (!b || b === d) break;
                a.unshift(b)
            }
            this._dispatchPropagationEvent(e, a)
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            for (var d = a.length, c = 0; c < d; c++) {
                var f = a[c];
                e._currentTarget = f;
                e._target = this;
                e._eventPhase = c < b ? 1 : c == b ? 2 : 3;
                f._notifyListener(e);
                if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
            }
        };
        a.prototype._onTouchMove = function(e) {
            if (this._lastTouchPosition.x != e.stageX || this._lastTouchPosition.y != e.stageY) {
                this.delayTouchBeginEvent &&
                    (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
                this.touchChildren = !1;
                var a = this._getPointChange(e);
                this.setScrollPosition(a.y, a.x, !0);
                this._calcVelocitys(e);
                this._logTouchEvent(e)
            }
        };
        a.prototype._onTouchEnd = function(e) {
            this.touchChildren = !0;
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE,
                this._onTouchEnd, this);
            this.removeEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._moveAfterTouchEnd()
        };
        a.prototype._onEnterFrame = function(e) {
            e = b.getTimer();
            100 < e - this._lastTouchTime && 300 > e - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
        };
        a.prototype._logTouchEvent = function(e) {
            this._lastTouchPosition.x = e.stageX;
            this._lastTouchPosition.y = e.stageY;
            this._lastTouchEvent = this.cloneTouchEvent(e);
            this._lastTouchTime = b.getTimer()
        };
        a.prototype._getPointChange = function(e) {
            return {
                x: !1 ===
                    this._hCanScroll ? 0 : this._lastTouchPosition.x - e.stageX,
                y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - e.stageY
            }
        };
        a.prototype._calcVelocitys = function(e) {
            var a = b.getTimer();
            if (0 == this._lastTouchTime) this._lastTouchTime = a;
            else {
                var d = this._getPointChange(e),
                    a = a - this._lastTouchTime;
                d.x /= a;
                d.y /= a;
                this._velocitys.push(d);
                5 < this._velocitys.length && this._velocitys.shift();
                this._lastTouchPosition.x = e.stageX;
                this._lastTouchPosition.y = e.stageY
            }
        };
        a.prototype._getContentWidth = function() {
            return this._content.explicitWidth ||
                this._content.width
        };
        a.prototype._getContentHeight = function() {
            return this._content.explicitHeight || this._content.height
        };
        a.prototype.getMaxScrollLeft = function() {
            var e = this._getContentWidth() - this.width;
            return Math.max(0, e)
        };
        a.prototype.getMaxScrollTop = function() {
            var e = this._getContentHeight() - this.height;
            return Math.max(0, e)
        };
        a.prototype._moveAfterTouchEnd = function() {
            if (0 != this._velocitys.length) {
                for (var e = 0, b = 0, d = 0, c = 0; c < this._velocitys.length; c++) var g = this._velocitys[c],
                    f = a.weight[c],
                    e = e + g.x * f,
                    b = b + g.y * f,
                    d = d + f;
                this._velocitys.length = 0;
                e /= d;
                b /= d;
                g = Math.abs(e);
                d = Math.abs(b);
                f = this.getMaxScrollLeft();
                c = this.getMaxScrollTop();
                e = 0.02 < g ? this.getAnimationDatas(e, this._scrollLeft, f) : {
                    position: this._scrollLeft,
                    duration: 1
                };
                b = 0.02 < d ? this.getAnimationDatas(b, this._scrollTop, c) : {
                    position: this._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(e.position, e.duration);
                this.setScrollTop(b.position, b.duration)
            }
        };
        a.prototype.setScrollTop = function(e, a) {
            void 0 === a && (a = 0);
            var d = Math.min(this.getMaxScrollTop(), Math.max(e,
                0));
            if (0 == a) return this.scrollTop = d, null;
            var c = b.Tween.get(this).to({
                scrollTop: e
            }, a, b.Ease.quartOut);
            d != e && c.to({
                scrollTop: d
            }, 300, b.Ease.quintOut)
        };
        a.prototype.setScrollLeft = function(e, a) {
            void 0 === a && (a = 0);
            var d = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
            if (0 == a) return this.scrollLeft = d, null;
            var c = b.Tween.get(this).to({
                scrollLeft: e
            }, a, b.Ease.quartOut);
            d != e && c.to({
                scrollLeft: d
            }, 300, b.Ease.quintOut)
        };
        a.prototype.getAnimationDatas = function(e, a, b) {
            var d = Math.abs(e),
                c = 0,
                f = a + 500 * e;
            if (0 > f || f > b)
                for (f =
                    a; Infinity != Math.abs(e) && 0.02 < Math.abs(e);) f += e, e = 0 > f || f > b ? 0.998 * e * 0.95 : 0.998 * e, c++;
            else c = 500 * -Math.log(0.02 / d);
            return {
                position: Math.min(b + 50, Math.max(f, -50)),
                duration: c
            }
        };
        a.prototype.cloneTouchEvent = function(e) {
            var a = new b.TouchEvent(e._type, e._bubbles, e.cancelable);
            a.touchPointID = e.touchPointID;
            a._stageX = e._stageX;
            a._stageY = e._stageY;
            a.ctrlKey = e.ctrlKey;
            a.altKey = e.altKey;
            a.shiftKey = e.shiftKey;
            a.touchDown = e.touchDown;
            a._isDefaultPrevented = !1;
            a._target = e._target;
            return a
        };
        a.prototype.throwNotSupportedError =
            function() {
                throw Error("\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!");
            };
        a.prototype.addChild = function(e) {
            this.throwNotSupportedError();
            return null
        };
        a.prototype.addChildAt = function(e, a) {
            this.throwNotSupportedError();
            return null
        };
        a.prototype.removeChild = function(e) {
            this.throwNotSupportedError();
            return null
        };
        a.prototype.removeChildAt = function(e) {
            this.throwNotSupportedError();
            return null
        };
        a.prototype.setChildIndex = function(e, a) {
            this.throwNotSupportedError()
        };
        a.prototype.swapChildren = function(e,
            a) {
            this.throwNotSupportedError()
        };
        a.prototype.swapChildrenAt = function(e, a) {
            this.throwNotSupportedError()
        };
        a.prototype.hitTest = function(e, a, c) {
            void 0 === c && (c = !1);
            var l = d.prototype.hitTest.call(this, e, a, c);
            return l ? l : b.DisplayObject.prototype.hitTest.call(this, e, a, c)
        };
        a.weight = [1, 1.33, 1.66, 2, 2.33];
        return a
    }(b.DisplayObjectContainer);
    b.ScrollView = c;
    c.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.REPEAT = "repeat";
        b.SCALE = "scale";
        return b
    }();
    b.BitmapFillMode = c;
    c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(e) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.scale9Grid = null;
            this.fillMode = "scale";
            e && (this._texture = e, this._setSizeDirty())
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(e) {
                e != this._texture && (this._setSizeDirty(), this._texture = e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(e) {
            var b = this._texture;
            b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth :
                b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
        };
        a._drawBitmap = function(e, b, d, c) {
            var g = c._texture_to_render;
            if (g) {
                var f = g._textureWidth,
                    h = g._textureHeight;
                if ("scale" == c.fillMode) {
                    var m = c.scale9Grid || g.scale9Grid;
                    if (m && f - m.width < b && h - m.height < d) a.drawScale9GridImage(e, c, m, b, d);
                    else {
                        var m = g._offsetX,
                            n = g._offsetY,
                            q = g._bitmapWidth || f,
                            r = g._bitmapHeight || h;
                        b /= f;
                        m = Math.round(m * b);
                        b = Math.round(q * b);
                        d /= h;
                        n = Math.round(n * d);
                        d = Math.round(r * d);
                        a.renderFilter.drawImage(e,
                            c, g._bitmapX, g._bitmapY, q, r, m, n, b, d)
                    }
                } else a.drawRepeatImage(e, c, b, d, c.fillMode)
            }
        };
        a.drawRepeatImage = function(e, a, d, c, g) {
            var f = a._texture_to_render;
            if (f) {
                var h = f._textureWidth,
                    m = f._textureHeight,
                    n = f._bitmapX,
                    q = f._bitmapY,
                    h = f._bitmapWidth || h,
                    m = f._bitmapHeight || m,
                    r = f._offsetX,
                    f = f._offsetY;
                b.RenderFilter.getInstance().drawImage(e, a, n, q, h, m, r, f, d, c, g)
            }
        };
        a.drawScale9GridImage = function(e, a, d, c, g) {
            var f = a._texture_to_render;
            if (f && d) {
                var h = b.RenderFilter.getInstance(),
                    m = f._textureWidth,
                    n = f._textureHeight,
                    q = f._bitmapX,
                    r = f._bitmapY,
                    t = f._bitmapWidth || m,
                    s = f._bitmapHeight || n,
                    u = f._offsetX,
                    v = f._offsetY,
                    f = b.MainContext.instance.rendererContext.texture_scale_factor;
                d = b.Rectangle.identity.initialize(d.x - Math.round(u), d.y - Math.round(u), d.width, d.height);
                u = Math.round(u);
                v = Math.round(v);
                c -= m - t;
                g -= n - s;
                d.y == d.bottom && (d.bottom < s ? d.bottom++ : d.y--);
                d.x == d.right && (d.right < t ? d.right++ : d.x--);
                var m = q + d.x,
                    n = q + d.right,
                    x = t - d.right,
                    y = r + d.y,
                    w = r + d.bottom,
                    z = s - d.bottom,
                    A = u + d.x,
                    B = v + d.y,
                    s = g - (s - d.bottom),
                    t = c - (t - d.right);
                h.drawImage(e,
                    a, q / f, r / f, d.x, d.y, u, v, d.x, d.y);
                h.drawImage(e, a, m / f, r / f, d.width, d.y, A, v, t - d.x, d.y);
                h.drawImage(e, a, n / f, r / f, x, d.y, u + t, v, c - t, d.y);
                h.drawImage(e, a, q / f, y / f, d.x, d.height, u, B, d.x, s - d.y);
                h.drawImage(e, a, m / f, y / f, d.width, d.height, A, B, t - d.x, s - d.y);
                h.drawImage(e, a, n / f, y / f, x, d.height, u + t, B, c - t, s - d.y);
                h.drawImage(e, a, q / f, w / f, d.x, z, u, v + s, d.x, g - s);
                h.drawImage(e, a, m / f, w / f, d.width, z, A, v + s, t - d.x, g - s);
                h.drawImage(e, a, n / f, w / f, x, z, u + t, v + s, c - t, g - s)
            }
        };
        a.prototype._measureBounds = function() {
            var e = this._texture;
            return e ? b.Rectangle.identity.initialize(e._offsetX,
                e._offsetY, e._textureWidth, e._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.debug = !1;
        a.renderFilter = b.RenderFilter.getInstance();
        return a
    }(b.DisplayObject);
    b.Bitmap = c;
    c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._text = "";
            this._textChanged = !1;
            this._spriteSheet = null;
            this._spriteSheetChanged = !1;
            this._bitmapPool = []
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(e) {
                this._textChanged = !0;
                this._text = e;
                this._setSizeDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "spriteSheet", {
            get: function() {
                return this._spriteSheet
            },
            set: function(e) {
                this._spriteSheet != e && (this._spriteSheet =
                    e, this._spriteSheetChanged = !0, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._updateTransform = function() {
            this.visible && ((this._textChanged || this._spriteSheetChanged) && this._renderText(), d.prototype._updateTransform.call(this))
        };
        a.prototype._renderText = function(e) {
            var a = e = 0;
            (this._textChanged || this._spriteSheetChanged) && this.removeChildren();
            for (var d = 0, c = this.text.length; d < c; d++) {
                var g = this.text.charAt(d),
                    f = this.spriteSheet.getTexture(g);
                if (null == f) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" +
                    g);
                else {
                    var g = f._offsetX,
                        h = f._offsetY,
                        m = f._textureWidth;
                    if (this._textChanged || this._spriteSheetChanged) {
                        var n = this._bitmapPool[d];
                        n || (n = new b.Bitmap, this._bitmapPool.push(n));
                        n.texture = f;
                        this.addChild(n);
                        n.x = e
                    }
                    e += m + g;
                    h + f._textureHeight > a && (a = h + f._textureHeight)
                }
            }
            this._spriteSheetChanged = this._textChanged = !1;
            return b.Rectangle.identity.initialize(0, 0, e, a)
        };
        a.prototype._measureBounds = function() {
            return this._renderText(!0)
        };
        return a
    }(b.DisplayObjectContainer);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
})(egret ||
    (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
            this.commandQueue = []
        }
        b.prototype.beginFill = function(a, e) {};
        b.prototype._setStyle = function(a) {};
        b.prototype.drawRect = function(a, e, b, d) {
            this.checkRect(a, e, b, d)
        };
        b.prototype.drawCircle = function(a, e, b) {
            this.checkRect(a - b, e - b, 2 * b, 2 * b)
        };
        b.prototype.drawRoundRect = function(a, e, b, d, c, g) {
            this.checkRect(a, e, b, d)
        };
        b.prototype.drawEllipse = function(a, e, b, d) {
            this.checkRect(a - b, e - d, 2 * b, 2 * d)
        };
        b.prototype.lineStyle =
            function(a, e, b, d, c, g, f, h) {};
        b.prototype.lineTo = function(a, e) {
            this.checkPoint(a, e)
        };
        b.prototype.curveTo = function(a, e, b, d) {
            this.checkPoint(a, e);
            this.checkPoint(b, d)
        };
        b.prototype.moveTo = function(a, e) {
            this.checkPoint(a, e)
        };
        b.prototype.clear = function() {
            this._maxY = this._maxX = this._minY = this._minX = 0
        };
        b.prototype.endFill = function() {};
        b.prototype._draw = function(a) {};
        b.prototype.checkRect = function(a, e, b, d) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, e);
            this._maxX = Math.max(this._maxX, a +
                b);
            this._maxY = Math.max(this._maxY, e + d)
        };
        b.prototype.checkPoint = function(a, e) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, e);
            this._maxX = Math.max(this._maxX, a);
            this._maxY = Math.max(this._maxY, e);
            this._lastX = a;
            this._lastY = e
        };
        return b
    }();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics";
    (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    })().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype._render = function(e) {
            this._graphics && this._graphics._draw(e)
        };
        return a
    }(b.DisplayObject);
    b.Shape = c;
    c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype._render = function(e) {
            this._graphics && this._graphics._draw(e);
            d.prototype._render.call(this, e)
        };
        return a
    }(b.DisplayObjectContainer);
    b.Sprite = c;
    c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._inputEnabled = !1;
            this._text = this._type = "";
            this._displayAsPassword = !1;
            this._fontFamily = a.default_fontFamily;
            this._size = 30;
            this._textColorString = "#FFFFFF";
            this._textColor = 16777215;
            this._strokeColorString = "#000000";
            this._stroke = this._strokeColor = 0;
            this._textAlign = "left";
            this._verticalAlign = "top";
            this._maxChars = 0;
            this._scrollV = -1;
            this._numLines = this._lineSpacing = this._maxScrollV = 0;
            this._isFlow = this._multiline = !1;
            this._textArr = [];
            this._isArrayChanged = !1;
            this._textMaxHeight = this._textMaxWidth = 0;
            this._linesArr = []
        }
        __extends(a, d);
        a.prototype.isInput = function() {
            return this._type == b.TextFieldType.INPUT
        };
        a.prototype._setTouchEnabled = function(e) {
            d.prototype._setTouchEnabled.call(this, e);
            this.isInput() && (this._inputEnabled = !0)
        };
        Object.defineProperty(a.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(e) {
                this._setType(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setType = function(e) {
            this._type != e && (this._type = e, this._type == b.TextFieldType.INPUT ?
                (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new b.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
        };
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._getText()
            },
            set: function(e) {
                this._setText(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getText = function() {
            return this._type ==
                b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
        };
        a.prototype._setSizeDirty = function() {
            d.prototype._setSizeDirty.call(this);
            this._isArrayChanged = !0
        };
        a.prototype._setTextDirty = function() {
            this._setSizeDirty()
        };
        a.prototype._setBaseText = function(e) {
            null == e && (e = "");
            this._isFlow = !1;
            if (this._text != e || this._displayAsPassword) this._setTextDirty(), this._text = e, e = "", e = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                text: e
            }])
        };
        a.prototype._setText = function(e) {
            null ==
                e && (e = "");
            this._setBaseText(e);
            this._inputUtils && this._inputUtils._setText(this._text)
        };
        Object.defineProperty(a.prototype, "displayAsPassword", {
            get: function() {
                return this._displayAsPassword
            },
            set: function(e) {
                this._setDisplayAsPassword(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setDisplayAsPassword = function(e) {
            this._displayAsPassword != e && (this._displayAsPassword = e, this._setText(this._text))
        };
        Object.defineProperty(a.prototype, "fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(e) {
                this._setFontFamily(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setFontFamily = function(e) {
            this._fontFamily != e && (this._setTextDirty(), this._fontFamily = e)
        };
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(e) {
                this._setSize(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSize = function(e) {
            this._size != e && (this._setTextDirty(), this._size = e)
        };
        Object.defineProperty(a.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(e) {
                this._setItalic(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setItalic = function(e) {
            this._italic != e && (this._setTextDirty(), this._italic = e)
        };
        Object.defineProperty(a.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(e) {
                this._setBold(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setBold = function(e) {
            this._bold != e && (this._setTextDirty(), this._bold = e)
        };
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(e) {
                this._setTextColor(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextColor =
            function(e) {
                this._textColor != e && (this._setTextDirty(), this._textColor = e, this._textColorString = b.toColorString(e))
            };
        Object.defineProperty(a.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(e) {
                this._setStrokeColor(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStrokeColor = function(e) {
            this._strokeColor != e && (this._setTextDirty(), this._strokeColor = e, this._strokeColorString = b.toColorString(e))
        };
        Object.defineProperty(a.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(e) {
                this._setStroke(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStroke = function(e) {
            this._stroke != e && (this._setTextDirty(), this._stroke = e)
        };
        Object.defineProperty(a.prototype, "textAlign", {
            get: function() {
                return this._textAlign
            },
            set: function(e) {
                this._setTextAlign(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextAlign = function(e) {
            this._textAlign != e && (this._setTextDirty(), this._textAlign = e)
        };
        Object.defineProperty(a.prototype, "verticalAlign", {
            get: function() {
                return this._verticalAlign
            },
            set: function(e) {
                this._setVerticalAlign(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setVerticalAlign = function(e) {
            this._verticalAlign != e && (this._setTextDirty(), this._verticalAlign = e)
        };
        Object.defineProperty(a.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(e) {
                this._setMaxChars(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMaxChars = function(e) {
            this._maxChars != e && (this._maxChars = e)
        };
        Object.defineProperty(a.prototype, "scrollV", {
            set: function(e) {
                this._scrollV = e;
                this._setDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "maxScrollV", {
            get: function() {
                return this._maxScrollV
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "selectionBeginIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "selectionEndIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "caretIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSelection =
            function(e, a) {};
        Object.defineProperty(a.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(e) {
                this._setLineSpacing(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setLineSpacing = function(e) {
            this._lineSpacing != e && (this._setTextDirty(), this._lineSpacing = e)
        };
        a.prototype._getLineHeight = function() {
            return this._lineSpacing + this._size
        };
        Object.defineProperty(a.prototype, "numLines", {
            get: function() {
                return this._numLines
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype,
            "multiline", {
                get: function() {
                    return this._multiline
                },
                set: function(e) {
                    this._setMultiline(e)
                },
                enumerable: !0,
                configurable: !0
            });
        a.prototype._setMultiline = function(e) {
            this._multiline = e;
            this._setDirty()
        };
        a.prototype.setFocus = function() {
            b.Logger.warning("TextField.setFocus \u6ca1\u6709\u5b9e\u73b0")
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            this._type == b.TextFieldType.INPUT && this._inputUtils._removeStageText()
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            this._type == b.TextFieldType.INPUT && this._inputUtils._addStageText()
        };
        a.prototype._updateBaseTransform = function() {
            d.prototype._updateTransform.call(this)
        };
        a.prototype._updateTransform = function() {
            this._type == b.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
        };
        a.prototype._render = function(e) {
            this.drawText(e);
            this._clearDirty()
        };
        a.prototype._measureBounds = function() {
            return this.measureText()
        };
        Object.defineProperty(a.prototype, "textFlow", {
            get: function() {
                return this._textArr
            },
            set: function(e) {
                this._isFlow = !0;
                var a = "";
                null == e && (e = []);
                for (var b = 0; b < e.length; b++) a += e[b].text;
                this._displayAsPassword ? this._setBaseText(a) : (this._text = a, this.setMiddleStyle(e))
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.changeToPassText = function(a) {
            if (this._displayAsPassword) {
                for (var b = "", d = 0, c = a.length; d < c; d++) switch (a.charAt(d)) {
                    case "\n":
                        b += "\n";
                        break;
                    case "\r":
                        break;
                    default:
                        b += "*"
                }
                return b
            }
            return a
        };
        a.prototype.setMiddleStyle =
            function(a) {
                this._isArrayChanged = !0;
                this._textArr = a;
                this._setSizeDirty()
            };
        Object.defineProperty(a.prototype, "textWidth", {
            get: function() {
                return this._textMaxWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textHeight", {
            get: function() {
                return this._textMaxHeight
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.appendText = function(a) {
            this.appendElement({
                text: a
            })
        };
        a.prototype.appendElement = function(a) {
            this._textArr.push(a);
            this.setMiddleStyle(this._textArr)
        };
        a.prototype._getLinesArr =
            function() {
                if (!this._isArrayChanged) return this._linesArr;
                this._isArrayChanged = !1;
                var a = this._textArr,
                    d = b.MainContext.instance.rendererContext;
                this._linesArr = [];
                this._textMaxWidth = this._textMaxHeight = 0;
                if (this._hasWidthSet && 0 == this._explicitWidth) return console.warn("\u6587\u672c\u5bbd\u5ea6\u88ab\u8bbe\u7f6e\u4e3a0"), this._numLines = 0, [{
                    width: 0,
                    height: 0,
                    elements: []
                }];
                var c = this._linesArr,
                    l = 0,
                    g = 0,
                    f = 0,
                    h;
                this._isFlow || d.setupFont(this);
                for (var m = 0; m < a.length; m++) {
                    var n = a[m];
                    n.style = n.style || {};
                    for (var q =
                        n.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < q.length; r++) {
                        null == c[f] && (h = {
                            width: 0,
                            height: 0,
                            elements: []
                        }, c[f] = h, g = l = 0);
                        g = this._type == b.TextFieldType.INPUT ? this._size : Math.max(g, n.style.size || this._size);
                        if ("" != q[r]) {
                            this._isFlow && d.setupFont(this, n.style);
                            var t = d.measureText(q[r]);
                            if (this._hasWidthSet)
                                if (l + t <= this._explicitWidth) h.elements.push({
                                    width: t,
                                    text: q[r],
                                    style: n.style
                                }), l += t;
                                else {
                                    for (var s = 0, u = 0, v = q[r]; s < v.length; s++) {
                                        t = d.measureText(v.charAt(s));
                                        if (l + t > this._explicitWidth) break;
                                        u += t;
                                        l += t
                                    }
                                    0 < s && (h.elements.push({
                                        width: u,
                                        text: v.substring(0, s),
                                        style: n.style
                                    }), q[r] = v.substring(s));
                                    r--
                                } else l += t, h.elements.push({
                                width: t,
                                text: q[r],
                                style: n.style
                            })
                        }
                        if (r < q.length - 1) {
                            h.width = l;
                            h.height = g;
                            this._textMaxWidth = Math.max(this._textMaxWidth, l);
                            this._textMaxHeight += g;
                            if (this._type == b.TextFieldType.INPUT && !this._multiline) return this._numLines = c.length, c;
                            f++
                        }
                    }
                    m == a.length - 1 && h && (h.width = l, h.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, l), this._textMaxHeight += g)
                }
                this._numLines = c.length;
                return c
            };
        a.prototype.measureText = function() {
            return this._getLinesArr() ? b.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) * this._lineSpacing) : b.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        a.prototype.drawText = function(a) {
            var d = this._getLinesArr();
            if (d) {
                this._isFlow || a.setupFont(this);
                var c = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
                    l = this._textMaxHeight + (this._numLines -
                        1) * this._lineSpacing,
                    g = 0,
                    f = 0;
                if (this._hasHeightSet)
                    if (l < this._explicitHeight) {
                        var h = 0;
                        this._verticalAlign == b.VerticalAlign.MIDDLE ? h = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (h = 1);
                        g += h * (this._explicitHeight - l)
                    } else l > this._explicitHeight && (f = Math.max(this._scrollV - 1, 0), f = Math.min(this._numLines - 1, f));
                g = Math.round(g);
                l = 0;
                this._textAlign == b.HorizontalAlign.CENTER ? l = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (l = 1);
                for (h = 0; f < this._numLines; f++) {
                    var m = d[f],
                        n = m.height,
                        g = g + n / 2;
                    if (0 != f && this._hasHeightSet &&
                        g > this._explicitHeight) break;
                    for (var h = Math.round((c - m.width) * l), q = 0; q < m.elements.length; q++) {
                        var r = m.elements[q],
                            t = r.style.size || this._size;
                        this._type == b.TextFieldType.INPUT ? a.drawText(this, r.text, h, g + (n - t) / 2, r.width) : (this._isFlow && a.setupFont(this, r.style), a.drawText(this, r.text, h, g + (n - t) / 2, r.width, r.style));
                        h += r.width
                    }
                    g += n / 2 + this._lineSpacing
                }
            }
        };
        a.default_fontFamily = "Arial";
        return a
    }(b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this.resutlArr = []
        }
        b.prototype.parser = function(a) {
            this.stackArray = [];
            this.resutlArr = [];
            for (var e = 0, b = a.length; e < b;) {
                var d = a.indexOf("<", e);
                0 > d ? (this.addToResultArr(a.substring(e)), e = b) : (this.addToResultArr(a.substring(e, d)), e = a.indexOf(">", d), "/" == a.charAt(d + 1) ? this.stackArray.pop() : this.addToArray(a.substring(d + 1, e)), e += 1)
            }
            return this.resutlArr
        };
        b.prototype.addToResultArr = function(a) {
            if ("" != a) {
                var e = [];
                e.push(["&lt;", "<"]);
                e.push(["&gt;", ">"]);
                e.push(["&amp;",
                    "&"
                ]);
                e.push(["&quot;", '"']);
                e.push(["&apos;;", "'"]);
                for (var b = 0; b < e.length; b++) a.replace(new RegExp(e[b][0], "g"), e[b][1]);
                0 < this.stackArray.length ? this.resutlArr.push({
                    text: a,
                    style: this.stackArray[this.stackArray.length - 1]
                }) : this.resutlArr.push({
                    text: a
                })
            }
        };
        b.prototype.changeStringToObject = function(a) {
            var e = {};
            a = a.replace(/( )+/g, " ").split(" ");
            for (var b = 0; b < a.length; b++) this.addProperty(e, a[b]);
            return e
        };
        b.prototype.addProperty = function(a, e) {
            var b = e.replace(/( )*=( )*/g, "=").split("=");
            b[1] && (b[1] =
                b[1].replace(/(\"|\')/g, ""));
            switch (b[0].toLowerCase()) {
                case "color":
                    a.textColor = parseInt(b[1]);
                    break;
                case "b":
                    a.bold = "true" == (b[1] || "true");
                    break;
                case "i":
                    a.italic = "true" == (b[1] || "true");
                    break;
                case "size":
                    a.size = parseInt(b[1]);
                    break;
                case "fontFamily":
                    a.fontFamily = b[1]
            }
        };
        b.prototype.addToArray = function(a) {
            a = this.changeStringToObject(a);
            if (0 != this.stackArray.length) {
                var e = this.stackArray[this.stackArray.length - 1],
                    b;
                for (b in e) null == a[b] && (a[b] = e[b])
            }
            this.stackArray.push(a)
        };
        return b
    }();
    b.HtmlTextParser =
        c;
    c.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.DYNAMIC = "dynamic";
        b.INPUT = "input";
        return b
    }();
    b.TextFieldType = c;
    c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype.createTexture = function(a, d, c, l, g, f, h, m, n) {
            void 0 === f && (f = 0);
            void 0 === h && (h = 0);
            "undefined" === typeof m && (m = f + l);
            "undefined" === typeof n && (n = h + g);
            var q = new b.Texture,
                r = b.MainContext.instance.rendererContext.texture_scale_factor;
            q._bitmapData = this.bitmapData;
            q._bitmapX = this._bitmapX + d;
            q._bitmapY = this._bitmapY + c;
            q._bitmapWidth = l * r;
            q._bitmapHeight = g * r;
            q._offsetX = f;
            q._offsetY = h;
            q._textureWidth = m * r;
            q._textureHeight = n * r;
            q._sourceWidth = this._sourceWidth;
            q._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = q
        };
        return a
    }(b.HashObject);
    b.SpriteSheet = c;
    c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isFocus = !1;
            this._isFirst = this._isFirst = !0
        }
        __extends(a, d);
        a.prototype.init = function(a) {
            this._text = a;
            this.stageText = b.StageText.create();
            a = this._text.localToGlobal();
            this.stageText._open(a.x, a.y, this._text._explicitWidth, this._text._explicitHeight)
        };
        a.prototype._addStageText = function() {
            this._text._inputEnabled || (this._text._touchEnabled = !0);
            this.stageText._add();
            this.stageText._addListeners();
            this.stageText.addEventListener("blur", this.onBlurHandler,
                this);
            this.stageText.addEventListener("focus", this.onFocusHandler, this);
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.addEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
        };
        a.prototype._removeStageText = function() {
            this.stageText._remove();
            this.stageText._removeListeners();
            this._text._inputEnabled || (this._text._touchEnabled = !1);
            this.stageText.removeEventListener("blur",
                this.onBlurHandler, this);
            this.stageText.removeEventListener("focus", this.onFocusHandler, this);
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
        };
        a.prototype._getText = function() {
            return this.stageText._getText()
        };
        a.prototype._setText = function(a) {
            this.stageText._setText(a)
        };
        a.prototype.onFocusHandler =
            function(a) {
                this.hideText()
            };
        a.prototype.onBlurHandler = function(a) {
            this.showText()
        };
        a.prototype.onMouseDownHandler = function(a) {
            a.stopPropagation();
            this._text._visible && this.stageText._show()
        };
        a.prototype.onStageDownHandler = function(a) {
            this.stageText._hide();
            this.showText()
        };
        a.prototype.showText = function() {
            this._isFocus && (this._isFocus = !1, this.resetText())
        };
        a.prototype.hideText = function() {
            this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
        };
        a.prototype.updateTextHandler = function(a) {
            this.resetText();
            this._text.dispatchEvent(new b.Event(b.Event.CHANGE))
        };
        a.prototype.resetText = function() {
            this._text._setBaseText(this.stageText._getText())
        };
        a.prototype._updateTransform = function() {
            var a = this._text._worldTransform.a,
                d = this._text._worldTransform.b,
                c = this._text._worldTransform.c,
                l = this._text._worldTransform.d,
                g = this._text._worldTransform.tx,
                f = this._text._worldTransform.ty;
            this._text._updateBaseTransform();
            var h = this._text._worldTransform;
            if (this._isFirst || a != h.a || d != h.b || c != h.c || l != h.d || g != h.tx || f !=
                h.ty) {
                this._isFirst = !1;
                a = this._text.localToGlobal();
                this.stageText.changePosition(a.x, a.y);
                var m = this;
                b.callLater(function() {
                    m.stageText._setScale(m._text._worldTransform.a, m._text._worldTransform.d)
                }, this)
            }
        };
        a.prototype._updateProperties = function() {
            var a = this._text._stage;
            if (null == a) this.stageText._setVisible(!1);
            else {
                for (var d = this._text, c = d._visible; c;) {
                    d = d.parent;
                    if (d == a) break;
                    c = d._visible
                }
                this.stageText._setVisible(c)
            }
            this.stageText._setMultiline(this._text._multiline);
            this.stageText._setMaxChars(this._text._maxChars);
            this.stageText._setSize(this._text._size);
            this.stageText._setTextColor(this._text._textColorString);
            this.stageText._setTextFontFamily(this._text._fontFamily);
            this.stageText._setBold(this._text._bold);
            this.stageText._setItalic(this._text._italic);
            this.stageText._setTextAlign(this._text._textAlign);
            this.stageText._setWidth(this._text._getSize(b.Rectangle.identity).width);
            this.stageText._setHeight(this._text._getSize(b.Rectangle.identity).height);
            this.stageText._setTextType(this._text._displayAsPassword ?
                "password" : "text");
            this.stageText._setText(this._text._text);
            this.stageText._resetStageText();
            this._updateTransform()
        };
        return a
    }(b.HashObject);
    b.InputController = c;
    c.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(a, c) {
            b.call(this, a);
            this.charList = this.parseConfig(c)
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
            for (var b = this.getConfigByKey(a[3], "count"), d = {}, c = 4; c < 4 + b; c++) {
                var g = a[c],
                    f = String.fromCharCode(this.getConfigByKey(g,
                        "id")),
                    h = {};
                d[f] = h;
                h.x = this.getConfigByKey(g, "x");
                h.y = this.getConfigByKey(g, "y");
                h.width = this.getConfigByKey(g, "width");
                h.height = this.getConfigByKey(g, "height");
                h.offsetX = this.getConfigByKey(g, "xoffset");
                h.offsetY = this.getConfigByKey(g, "yoffset")
            }
            return d
        };
        a.prototype.getConfigByKey = function(a, b) {
            for (var d = a.split(" "), c = 0, g = d.length; c < g; c++) {
                var f = d[c];
                if (b == f.substring(0, b.length)) return d = f.substring(b.length + 1), parseInt(d)
            }
            return 0
        };
        return a
    }(b.SpriteSheet);
    b.BitmapTextSpriteSheet = c;
    c.prototype.__class__ =
        "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(a) {
        function e(e, c) {
            a.call(this);
            this.frameRate = 60;
            e instanceof d ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new d(e, c);
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
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip";
    var d = function() {
        function a(a, d) {
            this.data = a;
            this._currentFrameIndex = this._passTime =
                this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new b.SpriteSheet(d)
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
            void 0 === a && (a = !0);
            var d = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(d.res);
                var c = this.bitmap;
                c.x = d.x;
                c.y = d.y;
                c.texture = a
            }
            null != d.action && this.movieClip.dispatchEventWith(d.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex =
                0, d.action != b.Event.COMPLETE && this.movieClip.dispatchEventWith(b.Event.COMPLETE))
        };
        a.prototype.getTexture = function(a) {
            var b = this._frameData.res[a],
                d = this._spriteSheet.getTexture(a);
            d || (d = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return d
        };
        return a
    }();
    b.DefaultMovieClipDelegate = d;
    d.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._scaleY = this._scaleX = 1;
            this._size = 30;
            this._color = "#FFFFFF";
            this._fontFamily = "Arial";
            this._italic = this._bold = !1;
            this._textAlign = "left";
            this._multiline = this._visible = !1;
            this._maxChars = 0
        }
        __extends(a, b);
        a.prototype._getText = function() {
            return null
        };
        a.prototype._setText = function(a) {};
        a.prototype._setTextType = function(a) {};
        a.prototype._getTextType = function() {
            return null
        };
        a.prototype._open = function(a, b, d, c) {};
        a.prototype._show = function() {};
        a.prototype._add =
            function() {};
        a.prototype._remove = function() {};
        a.prototype._hide = function() {};
        a.prototype._addListeners = function() {};
        a.prototype._removeListeners = function() {};
        a.prototype._setScale = function(a, b) {
            this._scaleX = a;
            this._scaleY = b
        };
        a.prototype.changePosition = function(a, b) {};
        a.prototype._setSize = function(a) {
            this._size = a
        };
        a.prototype._setTextColor = function(a) {
            this._color = a
        };
        a.prototype._setTextFontFamily = function(a) {
            this._fontFamily = a
        };
        a.prototype._setBold = function(a) {
            this._bold = a
        };
        a.prototype._setItalic =
            function(a) {
                this._italic = a
            };
        a.prototype._setTextAlign = function(a) {
            this._textAlign = a
        };
        a.prototype._setVisible = function(a) {
            this._visible = a
        };
        a.prototype._setWidth = function(a) {};
        a.prototype._setHeight = function(a) {};
        a.prototype._setMultiline = function(a) {
            this._multiline = a
        };
        a.prototype._setMaxChars = function(a) {
            this._maxChars = a
        };
        a.prototype._resetStageText = function() {};
        a.create = function() {
            return null
        };
        return a
    }(b.EventDispatcher);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.GET = "get";
        b.POST = "post";
        return b
    }();
    b.URLRequestMethod = c;
    c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.BINARY = "binary";
        b.TEXT = "text";
        b.VARIABLES = "variables";
        b.TEXTURE = "texture";
        b.SOUND = "sound";
        return b
    }();
    b.URLLoaderDataFormat = c;
    c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a(a) {
            void 0 === a && (a = null);
            b.call(this);
            null !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, d = /[?&]?([^=]+)=([^&]*)/g; b = d.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
        };
        a.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
                b = "",
                d = !0,
                c;
            for (c in a) d ? d = !1 : b += "&", b += c + "=" + a[c];
            return b
        };
        return a
    }(b.HashObject);
    b.URLVariables =
        c;
    c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        return function(b, a) {
            this.name = b;
            this.value = a
        }
    }();
    b.URLRequestHeader = c;
    c.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null);
            d.call(this);
            this.method = b.URLRequestMethod.GET;
            this.url = a
        }
        __extends(a, d);
        return a
    }(b.HashObject);
    b.URLRequest = c;
    c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null);
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            this._status = -1;
            a && this.load(a)
        }
        __extends(a, d);
        a.prototype.load = function(a) {
            this._request = a;
            this.data = null;
            b.MainContext.instance.netContext.proceed(this)
        };
        return a
    }(b.EventDispatcher);
    b.URLLoader = c;
    c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
            var d = b.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * d;
            this._textureHeight = this._sourceHeight * d;
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
    b.Texture = c;
    c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        }
        __extends(a, d);
        a.prototype.drawToTexture = function(e) {
            var d = this._bitmapData,
                c = e.getBounds(b.Rectangle.identity);
            if (0 == c.width || 0 == c.height) return b.Logger.warning("egret.RenderTexture#drawToTexture:\u663e\u793a\u5bf9\u8c61\u6d4b\u91cf\u7ed3\u679c\u5bbd\u9ad8\u4e3a0\uff0c\u8bf7\u68c0\u67e5"), !1;
            c.width = Math.floor(c.width);
            c.height = Math.floor(c.height);
            d.width = c.width;
            d.height = c.height;
            this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = c.width, this.renderContext._cacheCanvas.height = c.height);
            a.identityRectangle.width = c.width;
            a.identityRectangle.height = c.height;
            e._worldTransform.identity();
            e.worldAlpha = 1;
            if (e instanceof b.DisplayObjectContainer) {
                var d = e._anchorOffsetX,
                    l = e._anchorOffsetY;
                if (0 != e._anchorX || 0 != e._anchorY) d = e._anchorX * c.width, l = e._anchorY * c.height;
                this._offsetX = c.x + d;
                this._offsetY = c.y +
                    l;
                e._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                c = e._children;
                d = 0;
                for (l = c.length; d < l; d++) c[d]._updateTransform()
            }
            c = b.RenderFilter.getInstance();
            d = c._drawAreaList.concat();
            c._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            this.webGLTexture = null;
            (l = e.mask || e._scrollRect) && this.renderContext.pushMask(l);
            e._render(this.renderContext);
            l && this.renderContext.popMask();
            c.addDrawArea(a.identityRectangle);
            this.renderContext.onRenderFinish();
            c._drawAreaList =
                d;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight;
            return !0
        };
        a.identityRectangle = new b.Rectangle;
        return a
    }(b.Texture);
    b.RenderTexture = c;
    c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1;
            this.profiler = b.Profiler.getInstance()
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {};
        a.prototype.clearRect = function(a, b, d, c) {};
        a.prototype.drawImage = function(a, b, d, c, g, f, h, m, n, q) {
            this.profiler.onDrawImage()
        };
        a.prototype.setTransform = function(a) {};
        a.prototype.setAlpha = function(a, b) {};
        a.prototype.setupFont = function(a, b) {};
        a.prototype.measureText = function(a) {
            return 0
        };
        a.prototype.drawText = function(a,
            b, d, c, g, f) {
            this.profiler.onDrawImage()
        };
        a.prototype.strokeRect = function(a, b, d, c, g) {};
        a.prototype.pushMask = function(a) {};
        a.prototype.popMask = function() {};
        a.prototype.onRenderStart = function() {};
        a.prototype.onRenderFinish = function() {};
        a.prototype.setGlobalColorTransform = function(a) {};
        a.createRendererContext = function(a) {
            return null
        };
        a.imageSmoothingEnabled = !0;
        return a
    }(b.HashObject);
    b.RendererContext = c;
    c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.MOUSE = "mouse";
        b.TOUCH = "touch";
        b.mode = "touch";
        return b
    }();
    b.InteractionMode = c;
    c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
        a.prototype.getTouchData = function(a, b, d) {
            var c = this._currentTouchTarget[a];
            null == c && (c = {}, this._currentTouchTarget[a] = c);
            c.stageX = b;
            c.stageY = d;
            c.identifier = a;
            return c
        };
        a.prototype.dispatchEvent = function(a, d) {
            b.TouchEvent.dispatchTouchEvent(d.target, a, d.identifier, d.stageX,
                d.stageY, !1, !1, !1, !0 == this.touchDownTarget[d.identifier])
        };
        a.prototype.onTouchBegan = function(a, d, c) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var l = b.MainContext.instance.stage.hitTest(a, d);
                l && (a = this.getTouchData(c, a, d), this.touchDownTarget[c] = !0, a.target = l, a.beginTarget = l, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(c)
            }
        };
        a.prototype.onTouchMove = function(a, d, c) {
            if (-1 != this.touchingIdentifiers.indexOf(c) && (a != this.lastTouchX || d != this.lastTouchY)) {
                this.lastTouchX =
                    a;
                this.lastTouchY = d;
                var l = b.MainContext.instance.stage.hitTest(a, d);
                l && (a = this.getTouchData(c, a, d), a.target = l, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        };
        a.prototype.onTouchEnd = function(a, d, c) {
            var l = this.touchingIdentifiers.indexOf(c); - 1 != l && (this.touchingIdentifiers.splice(l, 1), l = b.MainContext.instance.stage.hitTest(a, d)) && (a = this.getTouchData(c, a, d), delete this.touchDownTarget[c], c = a.beginTarget, a.target = l, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), c == l ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP,
                a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return a
    }(b.HashObject);
    b.TouchContext = c;
    c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype.proceed = function(a) {};
        a._getUrl = function(a) {
            var d = a.url; - 1 == d.indexOf("?") && a.method == b.URLRequestMethod.GET && a.data && a.data instanceof b.URLVariables && (d = d + "?" + a.data.toString());
            return d
        };
        a.prototype.getChangeList = function() {
            return []
        };
        return a
    }(b.HashObject);
    b.NetContext = c;
    c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.frameRate = 60
        }
        __extends(a, b);
        a.prototype.executeMainLoop = function(a, b) {};
        return a
    }(b.HashObject);
    b.DeviceContext = c;
    c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.call = function(a, e) {};
        b.addCallback = function(a, e) {};
        return b
    }();
    b.ExternalInterface = c;
    c.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.ua = navigator.userAgent.toLowerCase();
            this.trans = this._getTrans()
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        Object.defineProperty(a.prototype, "isMobile", {
            get: function() {
                b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
                return b.MainContext.deviceType ==
                    b.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getHeader = function(a) {
            if ("transform" in a) return "";
            for (var b = ["webkit", "ms", "Moz", "O"], d = 0; d < b.length; d++)
                if (b[d] + "Transform" in a) return b[d];
            return ""
        };
        a.prototype._getTrans = function() {
            var a = document.createElement("div").style,
                a = this._getHeader(a);
            return "" == a ? "transform" : a + "Transform"
        };
        a.prototype.$new = function(a) {
            return this.$(document.createElement(a))
        };
        a.prototype.$ = function(e) {
            var d = document;
            if (e = e instanceof HTMLElement ?
                e : d.querySelector(e)) e.find = e.find || this.$, e.hasClass = e.hasClass || function(a) {
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
                }, e.prependTo = e.prependTo ||
                function(a) {
                    a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
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
                    this.position.y = e -
                        b.MainContext.instance.stage.stageHeight;
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
        a.prototype.translate = function(a) {
            return "translate(" + a.x + "px, " + a.y + "px) "
        };
        a.prototype.rotate = function(a) {
            return "rotate(" + a + "deg) "
        };
        a.prototype.scale = function(a) {
            return "scale(" + a.x + ", " +
                a.y + ") "
        };
        a.prototype.skew = function(a) {
            return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        };
        return a
    }(b.HashObject);
    b.Browser = c;
    c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(b) {
    (function(b) {
        b.getItem = function(b) {
            return null
        };
        b.setItem = function(b, a) {
            return !1
        };
        b.removeItem = function(b) {};
        b.clear = function() {}
    })(b.localStorage || (b.localStorage = {}))
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes) return null;
            for (var e = a.childNodes.length, c = !1, p = 0; p < e; p++) {
                var l = a.childNodes[p];
                if (1 == l.nodeType) {
                    c = !0;
                    break
                }
            }
            return c ? d.parseNode(l) : null
        };
        d.parseNode = function(a) {
            if (!a || 1 != a.nodeType) return null;
            var e = {};
            e.localName = a.localName;
            e.name = a.nodeName;
            a.namespaceURI && (e.namespace = a.namespaceURI);
            a.prefix && (e.prefix = a.prefix);
            for (var b = a.attributes, c = b.length, l = 0; l < c; l++) {
                var g =
                    b[l],
                    f = g.name;
                0 != f.indexOf("xmlns:") && (e["$" + f] = g.value)
            }
            b = a.childNodes;
            c = b.length;
            for (l = 0; l < c; l++)
                if (g = d.parseNode(b[l])) e.children || (e.children = []), g.parent = e, e.children.push(g);
                !e.children && (a = a.textContent.trim()) && (e.text = a);
            return e
        };
        d.findChildren = function(a, e, b) {
            b ? b.length = 0 : b = [];
            d.findByPath(a, e, b);
            return b
        };
        d.findByPath = function(a, e, b) {
            var c = e.indexOf("."),
                l; - 1 == c ? (l = e, c = !0) : (l = e.substring(0, c), e = e.substring(c + 1), c = !1);
            if (a = a.children)
                for (var g = a.length, f = 0; f < g; f++) {
                    var h = a[f];
                    h.localName ==
                        l && (c ? b.push(h) : d.findByPath(h, e, b))
                }
        };
        d.getAttributes = function(a, e) {
            e ? e.length = 0 : e = [];
            for (var b in a) "$" == b.charAt(0) && e.push(b.substring(1));
            return e
        };
        return d
    }();
    b.XML = c;
    c.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function a() {}
        a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        a.BIG_ENDIAN = "BIG_ENDIAN";
        return a
    }();
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
        Object.defineProperty(a.prototype,
            "endian", {
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
                    d = new Uint8Array(this.arraybytes, 0, this.length);
                (new Uint8Array(b, 0, this.length)).set(d);
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
        a.prototype.readBytes = function(a, b, d) {
            void 0 === b && (b = 0);
            void 0 === d && (d = 0);
            null == d && (d = a.length);
            a.ensureWriteableSpace(b + d);
            var c = new Int8Array(a.arraybytes),
                g = new Int8Array(this.arraybytes);
            c.set(g.subarray(this.position, this.position + d), b);
            this.position += d;
            d + b > a.length && (a.length += d + b - a.length)
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
            for (var d = new DataView(this.arraybytes); this.position < a;) {
                var c = d.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    b += String.fromCharCode(c)
                } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | d.getUint8(this.position++) & 127);
                else if (240 > c) var g = d.getUint8(this.position++),
                    b = b + String.fromCharCode((c & 31) << 12 | (g & 127) << 6 | d.getUint8(this.position++) & 127);
                else var g = d.getUint8(this.position++),
                    f = d.getUint8(this.position++),
                    b = b + String.fromCharCode((c & 15) << 18 | (g & 127) << 12 | f << 6 & 127 | d.getUint8(this.position++) & 127)
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
        a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
        return a
    }();
    b.ByteArray = d;
    d.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
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
            void 0 === b && (b = null);
            void 0 === d && (d = null);
            void 0 === c && (c = !1);
            c && a.removeTweens(e);
            return new a(e, b, d)
        };
        a.removeTweens = function(e) {
            if (e.tween_count) {
                for (var b =
                    a._tweens, d = b.length - 1; 0 <= d; d--) b[d]._target == e && (b[d].paused = !0, b.splice(d, 1));
                e.tween_count = 0
            }
        };
        a.pauseTweens = function(a) {
            if (a.tween_count)
                for (var d = b.Tween._tweens, c = d.length - 1; 0 <= c; c--) d[c]._target == a && (d[c].paused = !0)
        };
        a.resumeTweens = function(a) {
            if (a.tween_count)
                for (var d = b.Tween._tweens, c = d.length - 1; 0 <= c; c--) d[c]._target == a && (d[c].paused = !1)
        };
        a.tick = function(e, b) {
            void 0 === b && (b = !1);
            for (var d = a._tweens.concat(), c = d.length - 1; 0 <= c; c--) {
                var g = d[c];
                b && !g.ignoreGlobalPause || g.paused || g.tick(g._useTicks ?
                    1 : e)
            }
        };
        a._register = function(e, d) {
            var c = e._target,
                l = a._tweens;
            if (d) c && (c.tween_count = c.tween_count ? c.tween_count + 1 : 1), l.push(e), a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
            else
                for (c && c.tween_count--, c = l.length; c--;)
                    if (l[c] == e) {
                        l.splice(c, 1);
                        break
                    }
        };
        a.removeAllTweens = function() {
            for (var e = a._tweens, b = 0, d = e.length; b < d; b++) {
                var c = e[b];
                c.paused = !0;
                c._target.tweenjs_count = 0
            }
            e.length = 0
        };
        a.prototype.initialize = function(e, b, d) {
            this._target = e;
            b && (this._useTicks = b.useTicks, this.ignoreGlobalPause =
                b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
            this.pluginData = d || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            b && b.paused ? this.paused = !0 : a._register(this, !0);
            b && null != b.position && this.setPosition(b.position, a.NONE)
        };
        a.prototype.setPosition = function(a, b) {
            void 0 === b && (b = 1);
            0 > a && (a = 0);
            var d = a,
                c = !1;
            d >= this.duration && (this.loop ? d %= this.duration : (d = this.duration, c = !0));
            if (d == this._prevPos) return c;
            var g = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target)
                if (c) this._updateTargetProps(null, 1);
                else if (0 < this._steps.length) {
                for (var f = 0, h = this._steps.length; f < h && !(this._steps[f].t > d); f++);
                f = this._steps[f - 1];
                this._updateTargetProps(f, (this._stepPosition = d - f.t) / f.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < g ? (g != this.duration && this._runActions(g, this.duration), this._runActions(0, d, !0)) : this._runActions(g, d));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        };
        a.prototype._runActions = function(a, b, d) {
            void 0 === d && (d = !1);
            var c = a,
                g = b,
                f = -1,
                h = this._actions.length,
                m = 1;
            a > b && (c = b, g = a, f = h, h = m = -1);
            for (;
                (f += m) != h;) {
                b = this._actions[f];
                var n = b.t;
                (n == g || n > c && n < g || d && n == a) && b.f.apply(b.o, b.p)
            }
        };
        a.prototype._updateTargetProps = function(e, b) {
            var d, c, g, f;
            if (e || 1 != b) {
                if (this.passive = !!e.v) return;
                e.e && (b = e.e(b, 0, 1, 1));
                d = e.p0;
                c = e.p1
            } else this.passive = !1, d = c = this._curQueueProps;
            for (var h in this._initQueueProps) {
                null == (g = d[h]) && (d[h] = g = this._initQueueProps[h]);
                null ==
                    (f = c[h]) && (c[h] = f = g);
                g = g == f || 0 == b || 1 == b || "number" != typeof g ? 1 == b ? f : g : g + (f - g) * b;
                var m = !1;
                if (f = a._plugins[h])
                    for (var n = 0, q = f.length; n < q; n++) {
                        var r = f[n].tween(this, h, g, d, c, b, !!e && d == c, !e);
                        r == a.IGNORE ? m = !0 : g = r
                    }
                m || (this._target[h] = g)
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
            var b, d, c, g, f, h;
            for (h in e)
                if (void 0 === this._initQueueProps[h]) {
                    d = this._target[h];
                    if (b = a._plugins[h])
                        for (c = 0, g = b.length; c < g; c++) d = b[c].init(this, h, d);
                    this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
                }
            for (h in e) {
                d = this._curQueueProps[h];
                if (b = a._plugins[h])
                    for (f = f || {}, c = 0, g = b.length; c < g; c++) b[c].step && b[c].step(this, h, d, e[h], f);
                this._curQueueProps[h] = e[h]
            }
            f && this._appendQueueProps(f);
            return this._curQueueProps
        };
        a.prototype._addAction = function(a) {
            a.t =
                this.duration;
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
            void 0 === d && (d = void 0);
            if (isNaN(b) || 0 > b) b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: d,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        a.prototype.call = function(a, b, d) {
            void 0 === b && (b = void 0);
            void 0 === d && (d = void 0);
            return this._addAction({
                f: a,
                p: d ? d : [],
                o: b ? b : this._target
            })
        };
        a.prototype.set = function(a, b) {
            void 0 === b && (b = null);
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
    b.Tween = c;
    c.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {
            b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }
        d.get = function(a) {
            -1 > a && (a = -1);
            1 < a && (a = 1);
            return function(e) {
                return 0 == a ? e : 0 > a ? e * (e * -a + 1 + a) : e * ((2 - e) * a + (1 - a))
            }
        };
        d.getPowIn = function(a) {
            return function(e) {
                return Math.pow(e, a)
            }
        };
        d.getPowOut = function(a) {
            return function(e) {
                return 1 - Math.pow(1 - e, a)
            }
        };
        d.getPowInOut = function(a) {
            return function(e) {
                return 1 > (e *= 2) ? 0.5 * Math.pow(e, a) : 1 - 0.5 * Math.abs(Math.pow(2 - e, a))
            }
        };
        d.sineIn = function(a) {
            return 1 - Math.cos(a *
                Math.PI / 2)
        };
        d.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        };
        d.sineInOut = function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        };
        d.getBackIn = function(a) {
            return function(e) {
                return e * e * ((a + 1) * e - a)
            }
        };
        d.getBackOut = function(a) {
            return function(e) {
                return --e * e * ((a + 1) * e + a) + 1
            }
        };
        d.getBackInOut = function(a) {
            a *= 1.525;
            return function(e) {
                return 1 > (e *= 2) ? 0.5 * e * e * ((a + 1) * e - a) : 0.5 * ((e -= 2) * e * ((a + 1) * e + a) + 2)
            }
        };
        d.circIn = function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        };
        d.circOut = function(a) {
            return Math.sqrt(1 - --a * a)
        };
        d.circInOut = function(a) {
            return 1 >
                (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        d.bounceIn = function(a) {
            return 1 - d.bounceOut(1 - a)
        };
        d.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        d.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * d.bounceIn(2 * a) : 0.5 * d.bounceOut(2 * a - 1) + 0.5
        };
        d.getElasticIn = function(a, e) {
            var b = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var c = e / b * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 *
                    (d -= 1)) * Math.sin((d - c) * b / e))
            }
        };
        d.getElasticOut = function(a, e) {
            var b = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var c = e / b * Math.asin(1 / a);
                return a * Math.pow(2, -10 * d) * Math.sin((d - c) * b / e) + 1
            }
        };
        d.getElasticInOut = function(a, e) {
            var b = 2 * Math.PI;
            return function(d) {
                var c = e / b * Math.asin(1 / a);
                return 1 > (d *= 2) ? -0.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - c) * b / e) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - c) * b / e) * 0.5 + 1
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
    }();
    b.Ease = c;
    c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this.type = b.EFFECT
        }
        b.prototype.play = function(a) {
            void 0 === a && (a = !1);
            var e = this.audio;
            e && (isNaN(e.duration) || (e.currentTime = 0), e.loop = a, e.play())
        };
        b.prototype.pause = function() {
            var a = this.audio;
            a && a.pause()
        };
        b.prototype.load = function() {
            var a = this.audio;
            a && a.load()
        };
        b.prototype.addEventListener = function(a, e) {
            this.audio && this.audio.addEventListener(a, e, !1)
        };
        b.prototype.removeEventListener = function(a, e) {
            this.audio && this.audio.removeEventListener(a, e, !1)
        };
        b.prototype.setVolume =
            function(a) {
                var e = this.audio;
                e && (e.volume = a)
            };
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume : 0
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
    }();
    b.Sound = c;
    c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        b.sin = function(a) {
            a = Math.round(a);
            a %= 360;
            0 > a && (a += 360);
            return 90 > a ? egret_sin_map[a] : 180 > a ? egret_cos_map[a - 90] : 270 > a ? -egret_sin_map[a - 180] : -egret_cos_map[a - 270]
        };
        b.cos = function(a) {
            a = Math.round(a);
            a %= 360;
            0 > a && (a += 360);
            return 90 > a ? egret_cos_map[a] : 180 > a ? -egret_sin_map[a - 90] : 270 > a ? -egret_cos_map[a - 180] : egret_sin_map[a - 270]
        };
        return b
    }();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
})(egret ||
    (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(b) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var c = Array.prototype.slice.call(arguments, 1),
        d = this,
        a = function() {},
        e = function() {
            return d.apply(this instanceof a && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
        };
    a.prototype = this.prototype;
    e.prototype = new a;
    return e
});
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    RES;
(function(b) {
    var c = function(b) {
        function a(a, c, p) {
            void 0 === c && (c = !1);
            void 0 === p && (p = !1);
            b.call(this, a, c, p);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(e, b, d, c, g, f) {
            void 0 === d && (d = "");
            void 0 === c && (c = null);
            void 0 === g && (g = 0);
            void 0 === f && (f = 0);
            var h = egret.Event._getPropertyData(a);
            h.groupName = d;
            h.resItem = c;
            h.itemsLoaded = g;
            h.itemsTotal = f;
            egret.Event._dispatchByTarget(a, e, b, h)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.CONFIG_LOAD_ERROR =
            "configLoadError";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        a.GROUP_LOAD_ERROR = "groupLoadError";
        return a
    }(egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(b) {
    var c = function() {
        function b(a, e, d) {
            this._loaded = !1;
            this.name = a;
            this.url = e;
            this.type = d
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
    b.ResourceItem = c;
    c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(b) {
    var c = function() {
        function d() {
            this.keyMap = {};
            this.groupDic = {};
            b.configInstance = this
        }
        d.prototype.getGroupByName = function(a) {
            var e = [];
            if (!this.groupDic[a]) return e;
            a = this.groupDic[a];
            for (var b = a.length, d = 0; d < b; d++) e.push(this.parseResourceItem(a[d]));
            return e
        };
        d.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        d.prototype.createGroup = function(a, e, b) {
            void 0 === b && (b = !1);
            if (!b && this.groupDic[a] || !e || 0 == e.length) return !1;
            b = this.groupDic;
            for (var d = [], c = e.length,
                g = 0; g < c; g++) {
                var f = e[g],
                    h = b[f];
                if (h)
                    for (var f = h.length, m = 0; m < f; m++) {
                        var n = h[m]; - 1 == d.indexOf(n) && d.push(n)
                    } else(n = this.keyMap[f]) && -1 == d.indexOf(n) && d.push(n)
            }
            if (0 == d.length) return !1;
            this.groupDic[a] = d;
            return !0
        };
        d.prototype.parseConfig = function(a, e) {
            if (a) {
                var b = a.resources;
                if (b)
                    for (var d = b.length, c = 0; c < d; c++) {
                        var g = b[c],
                            f = g.url;
                        f && -1 == f.indexOf("://") && (g.url = e + f);
                        this.addItemToKeyMap(g)
                    }
                if (b = a.groups)
                    for (d = b.length, c = 0; c < d; c++) {
                        for (var f = b[c], h = [], m = f.keys.split(","), n = m.length, q = 0; q < n; q++) g = m[q].trim(), (g = this.keyMap[g]) && -1 == h.indexOf(g) && h.push(g);
                        this.groupDic[f.name] = h
                    }
            }
        };
        d.prototype.addSubkey = function(a, e) {
            var b = this.keyMap[e];
            b && !this.keyMap[a] && (this.keyMap[a] = b)
        };
        d.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var e = a.subkeys.split(",");
                a.subkeys = e;
                for (var b = e.length, d = 0; d < b; d++) {
                    var c = e[d];
                    null == this.keyMap[c] && (this.keyMap[c] = a)
                }
            }
        };
        d.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name : ""
        };
        d.prototype.getType =
            function(a) {
                return (a = this.keyMap[a]) ? a.type : ""
            };
        d.prototype.getRawResourceItem = function(a) {
            return this.keyMap[a]
        };
        d.prototype.getResourceItem = function(a) {
            return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
        };
        d.prototype.parseResourceItem = function(a) {
            var e = new b.ResourceItem(a.name, a.url, a.type);
            e.data = a;
            return e
        };
        return d
    }();
    b.ResourceConfig = c;
    c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.thread = 2;
            this.loadingCount = 0;
            this.groupTotalDic = {};
            this.numLoadedDic = {};
            this.itemListDic = {};
            this.groupErrorDic = {};
            this.retryTimesDic = {};
            this.maxRetryTimes = 3;
            this.failedList = [];
            this.priorityQueue = {};
            this.lazyLoadList = [];
            this.analyzerDic = {};
            this.queueIndex = 0
        }
        __extends(a, d);
        a.prototype.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        };
        a.prototype.loadGroup = function(a, d, c) {
            void 0 === c && (c = 0);
            if (!this.itemListDic[d] && d)
                if (a &&
                    0 != a.length) {
                    this.priorityQueue[c] ? this.priorityQueue[c].push(d) : this.priorityQueue[c] = [d];
                    this.itemListDic[d] = a;
                    c = a.length;
                    for (var l = 0; l < c; l++) a[l].groupName = d;
                    this.groupTotalDic[d] = a.length;
                    this.numLoadedDic[d] = 0;
                    this.next()
                } else egret.Logger.warning('RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4\uff1a"' + d + '"'), a = new b.ResourceEvent(b.ResourceEvent.GROUP_LOAD_ERROR), a.groupName = d, this.dispatchEvent(a)
        };
        a.prototype.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName =
                "";
            this.next()
        };
        a.prototype.next = function() {
            for (; this.loadingCount < this.thread;) {
                var a = this.getOneResourceItem();
                if (!a) break;
                this.loadingCount++;
                if (a.loaded) this.onItemComplete(a);
                else {
                    var d = this.analyzerDic[a.type];
                    d || (d = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
                    d.loadFile(a, this.onItemComplete, this)
                }
            }
        };
        a.prototype.getOneResourceItem = function() {
            if (0 < this.failedList.length) return this.failedList.shift();
            var a = Number.NEGATIVE_INFINITY,
                b;
            for (b in this.priorityQueue) a =
                Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
            b = a.length;
            for (var d, c = 0; c < b; c++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                d = this.itemListDic[a[this.queueIndex]];
                if (0 < d.length) break;
                this.queueIndex++
            }
            return 0 == d.length ? null : d.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var d = a.groupName;
            if (!a.loaded) {
                var c = this.retryTimesDic[a.name] || 1;
                if (c > this.maxRetryTimes) delete this.retryTimesDic[a.name], b.ResourceEvent.dispatchResourceEvent(this.resInstance,
                    b.ResourceEvent.ITEM_LOAD_ERROR, d, a);
                else {
                    this.retryTimesDic[a.name] = c + 1;
                    this.failedList.push(a);
                    this.next();
                    return
                }
            }
            if (d) {
                this.numLoadedDic[d]++;
                var c = this.numLoadedDic[d],
                    l = this.groupTotalDic[d];
                a.loaded || (this.groupErrorDic[d] = !0);
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, d, a, c, l);
                c == l && (a = this.groupErrorDic[d], this.removeGroupName(d), delete this.groupTotalDic[d], delete this.numLoadedDic[d], delete this.itemListDic[d], delete this.groupErrorDic[d], a ? b.ResourceEvent.dispatchResourceEvent(this,
                    b.ResourceEvent.GROUP_LOAD_ERROR, d) : b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, d))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var d = this.priorityQueue[b], c = d.length, g = 0, f = !1, c = d.length, h = 0; h < c; h++) {
                    if (d[h] == a) {
                        d.splice(g, 1);
                        f = !0;
                        break
                    }
                    g++
                }
                if (f) {
                    0 == d.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return a
    }(egret.EventDispatcher);
    b.ResourceLoader = c;
    c.prototype.__class__ = "RES.ResourceLoader"
})(RES ||
    (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.resourceConfig = b.configInstance
        }
        __extends(a, d);
        a.prototype.addSubkey = function(a, b) {
            this.resourceConfig.addSubkey(a, b)
        };
        a.prototype.loadFile = function(a, b, d) {};
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
    b.AnalyzerBase = c;
    c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, d) {
            if (this.fileDic[a.name]) b.call(d, a);
            else {
                var c = this.getLoader();
                this.resItemDic[c.hashCode] = {
                    item: a,
                    func: b,
                    thisObject: d
                };
                c.load(new egret.URLRequest(a.url))
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
                d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = d.item,
                g = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            g.call(d.thisObject, c)
        };
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b)
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
    b.BinAnalyzer = c;
    c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b, (d = a.data) && d.scale9grid && (d = d.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]))))
        };
        return a
    }(b.BinAnalyzer);
    b.ImageAnalyzer = c;
    c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                this.fileDic[d] = JSON.parse(b)
            } catch (c) {
                egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + "\ndata:" + b)
            }
        };
        return a
    }(b.BinAnalyzer);
    b.JsonAnalyzer = c;
    c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    }(b.BinAnalyzer);
    b.TextAnalyzer = c;
    c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, d);
        a.prototype.getRes = function(a) {
            var d = this.fileDic[a];
            d || (d = this.textureMap[a]);
            !d && (d = b.AnalyzerBase.getStringPrefix(a), d = this.fileDic[d]) && (a = b.AnalyzerBase.getStringTail(a), d = d.getTexture(a));
            return d
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
                d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c =
                d.item,
                g = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(c, g, d.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : g.call(d.thisObject, c)
        };
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                if ("string" == typeof b) {
                    try {
                        c = JSON.parse(b)
                    } catch (g) {
                        egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                    }
                    c && (this.sheetMap[d] =
                        c, a.loaded = !1, a.url = this.getRelativePath(a.url, c.file))
                } else c = this.sheetMap[d], delete this.sheetMap[d], b && (c = this.parseSpriteSheet(b, c, a.data && a.data.subkeys ? "" : d), this.fileDic[d] = c)
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var d = a.lastIndexOf("/");
            return a = -1 != d ? a.substring(0, d + 1) + b : b
        };
        a.prototype.parseSpriteSheet = function(a, b, d) {
            b = b.frames;
            if (!b) return null;
            var c = new egret.SpriteSheet(a),
                g = this.textureMap,
                f;
            for (f in b) {
                var h = b[f];
                a = c.createTexture(f, h.x, h.y, h.w, h.h,
                    h.offX, h.offY, h.sourceW, h.sourceH);
                h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
                null == g[f] && (g[f] = a, d && this.addSubkey(f, d))
            }
            return c
        };
        return a
    }(b.BinAnalyzer);
    b.SheetAnalyzer = c;
    c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                "string" == typeof b ? (c = b, this.sheetMap[d] = c, a.loaded = !1, a.url = this.getTexturePath(a.url, c)) : (c = this.sheetMap[d], delete this.sheetMap[d], b && (c = new egret.BitmapTextSpriteSheet(b, c), this.fileDic[d] = c))
            }
        };
        a.prototype.getTexturePath = function(a, b) {
            var d = "",
                c = b.split("\n")[2],
                g = c.indexOf('file="'); - 1 != g && (c = c.substring(g + 6), g = c.indexOf('"'), d = c.substring(0,
                g));
            a = a.split("\\").join("/");
            g = a.lastIndexOf("/");
            return a = -1 != g ? a.substring(0, g + 1) + d : d
        };
        return a
    }(b.SheetAnalyzer);
    b.FontAnalyzer = c;
    c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b, (d = a.data) && d.soundType ? b.preload(d.soundType) : b.preload(egret.Sound.EFFECT))
        };
        return a
    }(b.BinAnalyzer);
    b.SoundAnalyzer = c;
    c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                var c = egret.XML.parse(b);
                this.fileDic[d] = c
            } catch (g) {}
        };
        return a
    }(b.BinAnalyzer);
    b.XMLAnalyzer = c;
    c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    b.loadConfig = function(a, b, c) {
        void 0 === b && (b = "");
        void 0 === c && (c = "json");
        d.loadConfig(a, b, c)
    };
    b.loadGroup = function(a, b) {
        void 0 === b && (b = 0);
        d.loadGroup(a, b)
    };
    b.isGroupLoaded = function(a) {
        return d.isGroupLoaded(a)
    };
    b.getGroupByName = function(a) {
        return d.getGroupByName(a)
    };
    b.createGroup = function(a, b, c) {
        void 0 === c && (c = !1);
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
    b.getResByUrl =
        function(a, b, c, p) {
            void 0 === p && (p = "");
            d.getResByUrl(a, b, c, p)
        };
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    };
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    };
    b.addEventListener = function(a, b, c, p, l) {
        void 0 === p && (p = !1);
        void 0 === l && (l = 0);
        d.addEventListener(a, b, c, p, l)
    };
    b.removeEventListener = function(a, b, c, p) {
        void 0 === p && (p = !1);
        d.removeEventListener(a, b, c, p)
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
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer,
                b.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(b.AnalyzerBase,
                b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
            this.resConfig = new b.ResourceConfig;
            this.resLoader = new b.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        };
        e.prototype.loadConfig = function(a, b, e) {
            void 0 === e && (e = "json");
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
            for (var d = a.length, c = [], g = 0; g < d; g++) {
                var f = a[g],
                    f = new b.ResourceItem(f.url, f.url, f.type);
                c.push(f)
            }
            this.resLoader.loadGroup(c, e.GROUP_CONFIG, Number.MAX_VALUE)
        };
        e.prototype.isGroupLoaded = function(a) {
            return -1 != this.loadedGroups.indexOf(a)
        };
        e.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        e.prototype.loadGroup = function(a, e) {
            void 0 === e && (e = 0);
            if (-1 != this.loadedGroups.indexOf(a)) b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE,
                a);
            else if (!this.resLoader.isGroupInLoading(a))
                if (this.configComplete) {
                    var d = this.resConfig.getGroupByName(a);
                    this.resLoader.loadGroup(d, a, e)
                } else this.groupNameList.push({
                    name: a,
                    priority: e
                })
        };
        e.prototype.createGroup = function(a, b, e) {
            void 0 === e && (e = !1);
            if (e) {
                var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
            }
            return this.resConfig.createGroup(a, b, e)
        };
        e.prototype.onGroupComp = function(a) {
            if (a.groupName == e.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var d = 0; d < a; d++) {
                    var c = this.loadingConfigList[d],
                        g = this.getAnalyzerByType(c.type),
                        f = g.getRes(c.url);
                    g.destroyRes(c.url);
                    this.resConfig.parseConfig(f, c.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                c = this.groupNameList;
                a = c.length;
                for (d = 0; d < a; d++) g = c[d], this.loadGroup(g.name, g.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
        };
        e.prototype.onGroupError = function(a) {
            a.groupName == e.GROUP_CONFIG ? (this.loadingConfigList =
                null, b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
        };
        e.prototype.hasRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (a = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(a), "" == e) ? !1 : !0
        };
        e.prototype.getRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (e = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(e), "" == e) ? null : this.getAnalyzerByType(e).getRes(a)
        };
        e.prototype.getResAsync = function(a, e, d) {
            var c = this.resConfig.getType(a),
                f = this.resConfig.getName(a);
            if ("" == c && (f = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(f), "" == c)) {
                e.call(d, null);
                return
            }(c = this.getAnalyzerByType(c).getRes(a)) ? e.call(d, c): (a = {
                key: a,
                compFunc: e,
                thisObject: d
            }, this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
        };
        e.prototype.getResByUrl = function(a, e, d, c) {
            void 0 === c && (c = "");
            if (a) {
                c || (c = this.getTypeByUrl(a));
                var f = this.getAnalyzerByType(c).getRes(a);
                f ? e.call(d, f) :
                    (e = {
                        key: a,
                        compFunc: e,
                        thisObject: d
                    }, this.asyncDic[a] ? this.asyncDic[a].push(e) : (this.asyncDic[a] = [e], a = new b.ResourceItem(a, a, c), this.resLoader.loadItem(a)))
            } else e.call(d, null)
        };
        e.prototype.getTypeByUrl = function(a) {
            (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
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
            for (var e = b.length, d = 0; d < e; d++) {
                var c = b[d],
                    h = a.getRes(c.key);
                c.compFunc.call(c.thisObject, h, c.key)
            }
        };
        e.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var e =
                    this.loadedGroups.indexOf(a); - 1 != e && this.loadedGroups.splice(e, 1);
                a = b.length;
                for (var d = 0; d < a; d++) {
                    e = b[d];
                    e.loaded = !1;
                    var c = this.getAnalyzerByType(e.type);
                    c.destroyRes(e.name)
                }
                return !0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return !1;
            e = this.resConfig.getRawResourceItem(a);
            e.loaded = !1;
            c = this.getAnalyzerByType(b);
            return c.destroyRes(a)
        };
        e.prototype.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        };
        e.GROUP_CONFIG = "RES__CONFIG";
        return e
    }(egret.EventDispatcher);
    c.prototype.__class__ = "RES.Resource";
    var d = new c
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(b) {
            void 0 === b && (b = 60);
            d.call(this);
            this.frameRate = b;
            this._time = 0;
            this._isActivate = !0;
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
        __extends(a, d);
        a.prototype.enterFrame = function() {
            var e = a.instance,
                d = a._thisObject,
                c = a._callback,
                l = b.getTimer(),
                g = l -
                e._time;
            e._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            c.call(d, g);
            e._time = l
        };
        a.prototype.executeMainLoop = function(b, d) {
            a._callback = b;
            a._thisObject = d;
            this.enterFrame()
        };
        a.prototype.reset = function() {
            var e = a.instance;
            e._requestAnimationId && (e._time = b.getTimer(), a.cancelAnimationFrame.call(window, e._requestAnimationId), e.enterFrame())
        };
        a.prototype.registerListener = function() {
            var e = this,
                d = function() {
                    e._isActivate && (e._isActivate = !1, b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.DEACTIVATE)))
                },
                c = function() {
                    e._isActivate || (e._isActivate = !0, a.instance.reset(), b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.ACTIVATE)))
                },
                l = function() {
                    document[g] ? d() : c()
                };
            window.addEventListener("focus", c, !1);
            window.addEventListener("blur", d, !1);
            var g, f;
            "undefined" !== typeof document.hidden ? (g = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ?
                (g = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", f = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", c, !1), window.addEventListener("pagehide", d, !1));
            g && f && document.addEventListener(f, l, !1)
        };
        return a
    }(b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(b) {
    b.getItem = function(b) {
        return window.localStorage.getItem(b)
    };
    b.setItem = function(b, d) {
        try {
            return window.localStorage.setItem(b, d), !0
        } catch (a) {
            return console.log("egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key=" + b + "&value=" + d), !1
        }
    };
    b.removeItem = function(b) {
        window.localStorage.removeItem(b)
    };
    b.clear = function() {
        window.localStorage.clear()
    };
    b.init = function() {
        for (var c in b) egret.localStorage[c] = b[c]
    }
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.globalAlpha = 1;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            this._cacheCanvas = document.createElement("canvas");
            this._cacheCanvas.width = this.canvas.width;
            this._cacheCanvas.height = this.canvas.height;
            this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
            this.onResize();
            var b = this.canvasContext.setTransform,
                c = this;
            this._cacheCanvasContext.setTransform = function(a, e, d, h, m, n) {
                c._matrixA = a;
                c._matrixB =
                    e;
                c._matrixC = d;
                c._matrixD = h;
                c._matrixTx = m;
                c._matrixTy = n;
                b.call(c._cacheCanvasContext, a, e, d, h, m, n)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            this.initBlendMode()
        }
        __extends(a, d);
        a.prototype.createCanvas = function() {
            var a = b.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var d = document.getElementById(b.StageDelegate.canvas_div_name),
                    a = b.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                d.appendChild(a)
            }
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
                this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(b.StageDelegate.canvas_div_name);
                this.canvas.width = b.MainContext.instance.stage.stageWidth;
                this.canvas.height = b.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this._cacheCanvas.width = this.canvas.width;
                this._cacheCanvas.height = this.canvas.height;
                this._cacheCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled
            }
        };
        a.prototype.clearScreen = function() {
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, c = a.length; d < c; d++) {
                var l = a[d];
                this.clearRect(l.x, l.y, l.width, l.height)
            }
            a = b.MainContext.instance.stage;
            this._cacheCanvasContext.clearRect(0,
                0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, d, c) {
            this.canvasContext.clearRect(a, b, d * window.devicePixelRatio, c * window.devicePixelRatio)
        };
        a.prototype.drawImage = function(a, c, p, l, g, f, h, m, n, q) {
            void 0 === q && (q = void 0);
            var r = a._bitmapData;
            f += this._transformTx;
            h += this._transformTy;
            var t = b.getTimer();
            void 0 === q ? this._cacheCanvasContext.drawImage(r, c, p, l, g, f, h, m, n) : this.drawRepeatImage(a, c, p, l, g, f, h, m, n, q);
            d.prototype.drawImage.call(this, a, c, p, l, g, f, h, m, n, q);
            this.renderCost +=
                b.getTimer() - t
        };
        a.prototype.drawRepeatImage = function(a, d, c, l, g, f, h, m, n, q) {
            if (void 0 === a.pattern) {
                var r = b.MainContext.instance.rendererContext.texture_scale_factor,
                    t = a._bitmapData,
                    s = t;
                if (t.width != l || t.height != g || 1 != r) s = document.createElement("canvas"), s.width = l * r, s.height = g * r, s.getContext("2d").drawImage(t, d, c, l, g, 0, 0, l * r, g * r);
                d = this._cacheCanvasContext.createPattern(s, q);
                a.pattern = d
            }
            this._cacheCanvasContext.fillStyle = a.pattern;
            this._cacheCanvasContext.translate(f, h);
            this._cacheCanvasContext.fillRect(0,
                0, m, n);
            this._cacheCanvasContext.translate(-f, -h)
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha =
            function(a, d) {
                a != this.globalAlpha && (this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
                d ? (this.blendValue = this.blendModes[d], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
            };
        a.prototype.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[b.BlendMode.NORMAL] = "source-over";
            this.blendModes[b.BlendMode.ADD] = "lighter"
        };
        a.prototype.setupFont = function(a, b) {
            void 0 === b && (b = null);
            b = b || {};
            var d = null == b.size ? a._size : b.size,
                c = null == b.fontFamily ? a._fontFamily : b.fontFamily,
                g = this._cacheCanvasContext,
                f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
                f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
            g.font = f + (d + "px " + c);
            g.textAlign = "left";
            g.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this._cacheCanvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, c, p, l, g, f) {
            void 0 === f && (f = null);
            this.setupFont(a, f);
            f = f || {};
            var h;
            h = null != f.textColor ? b.toColorString(f.textColor) : a._textColorString;
            var m;
            m = null != f.strokeColor ? b.toColorString(f.strokeColor) : a._strokeColorString;
            var n;
            n = null != f.stroke ? f.stroke : a._stroke;
            var q = this._cacheCanvasContext;
            q.fillStyle = h;
            q.strokeStyle = m;
            n && (q.lineWidth = 2 * n, q.strokeText(c, p + this._transformTx, l + this._transformTy, g || 65535));
            q.fillText(c, p + this._transformTx, l + this._transformTy, g || 65535);
            d.prototype.drawText.call(this, a, c, p, l, g, f)
        };
        a.prototype.strokeRect =
            function(a, b, d, c, g) {
                this._cacheCanvasContext.strokeStyle = g;
                this._cacheCanvasContext.strokeRect(a, b, d, c)
            };
        a.prototype.pushMask = function(a) {
            this._cacheCanvasContext.save();
            this._cacheCanvasContext.beginPath();
            this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this._cacheCanvasContext.clip();
            this._cacheCanvasContext.closePath()
        };
        a.prototype.popMask = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        a.prototype.onRenderStart =
            function() {
                this._cacheCanvasContext.save()
            };
        a.prototype.onRenderFinish = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            for (var a = this._cacheCanvas.width, d = this._cacheCanvas.height, c = b.RenderFilter.getInstance().getDrawAreaList(), l = 0, g = c.length; l < g; l++) {
                var f = c[l],
                    h = f.x,
                    m = f.y,
                    n = f.width,
                    f = f.height;
                h + n > a && (n = a - h);
                m + f > d && (f = d - m);
                0 < n && 0 < f && this.canvasContext.drawImage(this._cacheCanvas, h, m, n, f, h, m, n, f)
            }
        };
        return a
    }(b.RendererContext);
    b.HTML5CanvasRenderer =
        c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(b) {
    b.beginFill = function(b, a) {
        void 0 === a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this.commandQueue.push(new c(this._setStyle, this, [e]))
    };
    b.drawRect = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(c._transformTx + a, c._transformTy + b, e, d);
            this.canvasContext.closePath()
        }, this, [b, a, e, k]));
        this._fill()
    };
    b.drawCircle = function(b, a, e) {
        this.commandQueue.push(new c(function(a,
            b, e) {
            var d = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(d._transformTx + a, d._transformTy + b, e, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        }, this, [b, a, e]));
        this._fill()
    };
    b.drawRoundRect = function(b, a, e, k, p, l) {
        this.commandQueue.push(new c(function(a, b, e, d, c, k) {
            var p = this.renderContext;
            a = p._transformTx + a;
            b = p._transformTy + b;
            c /= 2;
            k = k ? k / 2 : c;
            e = a + e;
            d = b + d;
            p = d - k;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(e, p);
            this.canvasContext.quadraticCurveTo(e, d, e - c, d);
            this.canvasContext.lineTo(a +
                c, d);
            this.canvasContext.quadraticCurveTo(a, d, a, d - k);
            this.canvasContext.lineTo(a, b + k);
            this.canvasContext.quadraticCurveTo(a, b, a + c, b);
            this.canvasContext.lineTo(e - c, b);
            this.canvasContext.quadraticCurveTo(e, b, e, b + k);
            this.canvasContext.lineTo(e, p);
            this.canvasContext.closePath()
        }, this, [b, a, e, k, p, l]));
        this._fill()
    };
    b.drawEllipse = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.save();
            a = c._transformTx + a;
            b = c._transformTy + b;
            var c = e > d ? e : d,
                k = e / c;
            d /=
                c;
            this.canvasContext.scale(k, d);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + e) / k, b / d);
            this.canvasContext.arc(a / k, b / d, c, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        }, this, [b, a, e, k]));
        this._fill()
    };
    b.lineStyle = function(b, a, e, k, p, l, g, f) {
        void 0 === b && (b = NaN);
        void 0 === a && (a = 0);
        void 0 === e && (e = 1);
        void 0 === k && (k = !1);
        void 0 === p && (p = "normal");
        void 0 === l && (l = null);
        void 0 === g && (g = null);
        void 0 === f && (f = 3);
        this.strokeStyleColor && (this.createEndLineCommand(),
            this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this.commandQueue.push(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        }, this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    b.lineTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.lineTo(d._transformTx +
                a, d._transformTy + b)
        }, this, [b, a]));
        this.lineX = b;
        this.lineY = a
    };
    b.curveTo = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.quadraticCurveTo(c._transformTx + a, c._transformTy + b, c._transformTx + e, c._transformTy + d)
        }, this, [b, a, e, k]));
        this.lineX = e;
        this.lineY = k
    };
    b.moveTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.moveTo(d._transformTx + a, d._transformTy + b)
        }, this, [b, a]))
    };
    b.clear = function() {
        this.lineY =
            this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
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
        this.endLineCommand ||
            (this.endLineCommand = new c(function() {
                this.canvasContext.stroke();
                this.canvasContext.closePath()
            }, this, null))
    };
    b._draw = function(b) {
        var a = this.commandQueue.length;
        if (0 != a) {
            this.renderContext = b;
            b = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
            b.save();
            this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
            for (var e = 0; e < a; e++) {
                var c = this.commandQueue[e];
                c.method.apply(c.thisObject, c.args)
            }
            b.restore()
        }
    };
    var c = function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    }();
    c.prototype.__class__ = "egret_h5_graphics.Command";
    b._setStyle = function(b) {
        this.canvasContext.fillStyle = b;
        this.canvasContext.beginPath()
    };
    b.init = function() {
        for (var d in b) egret.Graphics.prototype[d] = b[d];
        egret.RendererContext.createRendererContext = function(a) {
            return new egret.HTML5CanvasRenderer(a)
        }
    }
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.size = 2E3;
            this.vertSize = 5;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null;
            this.currentBatchSize = 0;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.canvasContext = document.createElement("canvas").getContext("2d");
            console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored",
                this.handleContextRestored.bind(this), !1);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var c = 0, p = 0; c < a; c += 6, p += 4) this.indices[c + 0] = p + 0, this.indices[c + 1] = p + 1, this.indices[c + 2] = p + 2, this.indices[c + 3] = p + 0, this.indices[c + 4] = p + 2, this.indices[c + 5] = p + 3;
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
        __extends(a, d);
        a.prototype.createCanvas = function() {
            var a = b.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var d = document.getElementById(b.StageDelegate.canvas_div_name),
                    a = b.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                d.appendChild(a)
            }
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
                this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(b.StageDelegate.canvas_div_name);
                this.canvas.width = b.MainContext.instance.stage.stageWidth;
                this.canvas.height = b.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.projectionX = this.canvas.width / 2;
                this.projectionY = -this.canvas.height / 2
            }
        };
        a.prototype.handleContextLost = function() {
            this.contextLost = !0
        };
        a.prototype.handleContextRestored =
            function() {
                this.initWebGL();
                this.shaderManager.setContext(this.gl);
                this.contextLost = !1
            };
        a.prototype.initWebGL = function() {
            for (var a = {
                stencil: !0
            }, b, d = ["experimental-webgl", "webgl"], c = 0; c < d.length; c++) {
                try {
                    b = this.canvas.getContext(d[c], a)
                } catch (g) {}
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
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
                this.indexBuffer);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
            a.disable(a.DEPTH_TEST);
            a.disable(a.CULL_FACE);
            a.enable(a.BLEND);
            a.colorMask(!0, !0, !0, !0)
        };
        a.prototype.initBlendMode = function() {
            this.blendModesWebGL = {};
            this.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
            this.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
        };
        a.prototype.start =
            function() {
                if (!this.contextLost) {
                    var a = this.gl;
                    a.activeTexture(a.TEXTURE0);
                    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                    var b;
                    b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : this.shaderManager.defaultShader;
                    this.shaderManager.activateShader(b);
                    b.syncUniforms();
                    a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                    var d = 4 * this.vertSize;
                    a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, d, 0);
                    a.vertexAttribPointer(b.aTextureCoord,
                        2, a.FLOAT, !1, d, 8);
                    a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, d, 16)
                }
            };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var d = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, l = d.length; c < l; c++) {
                var g = d[c];
                a.viewport(g.x, g.y, g.width, g.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null);
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            d = b.MainContext.instance.stage;
            a.viewport(0, 0, d.stageWidth, d.stageHeight);
            this.renderCost = 0
        };
        a.prototype.setBlendMode = function(a) {
            a ||
                (a = b.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var d = this.blendModesWebGL[a];
                d && (this._draw(), this.gl.blendFunc(d[0], d[1]), this.currentBlendMode = a)
            }
        };
        a.prototype.drawRepeatImage = function(a, d, c, l, g, f, h, m, n, q) {
            q = b.MainContext.instance.rendererContext.texture_scale_factor;
            l *= q;
            for (g *= q; f < m; f += l)
                for (var r = h; r < n; r += g) {
                    var t = Math.min(l, m - f),
                        s = Math.min(g, n - r);
                    this.drawImage(a, d, c, t / q, s / q, f, r, t, s)
                }
        };
        a.prototype.drawImage = function(a, b, d, c, g, f, h, m, n, q) {
            void 0 === q && (q = void 0);
            if (!this.contextLost)
                if (void 0 !==
                    q) this.drawRepeatImage(a, b, d, c, g, f, h, m, n, q);
                else {
                    this.createWebGLTexture(a);
                    if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = a.webGLTexture;
                    var r = this.worldTransform,
                        t = r.a,
                        s = r.b,
                        u = r.c,
                        v = r.d,
                        x = r.tx,
                        y = r.ty;
                    0 == f && 0 == h || r.append(1, 0, 0, 1, f, h);
                    1 == c / m && 1 == g / n || r.append(m / c, 0, 0, n / g, 0, 0);
                    f = r.a;
                    h = r.b;
                    m = r.c;
                    n = r.d;
                    q = r.tx;
                    var w = r.ty;
                    r.a = t;
                    r.b = s;
                    r.c = u;
                    r.d = v;
                    r.tx = x;
                    r.ty = y;
                    t = a._sourceWidth;
                    s = a._sourceHeight;
                    a = c;
                    r = g;
                    b /= t;
                    d /= s;
                    c /= t;
                    g /= s;
                    t = this.vertices;
                    s = 4 * this.currentBatchSize * this.vertSize;
                    u = this.worldAlpha;
                    t[s++] = q;
                    t[s++] = w;
                    t[s++] = b;
                    t[s++] = d;
                    t[s++] = u;
                    t[s++] = f * a + q;
                    t[s++] = h * a + w;
                    t[s++] = c + b;
                    t[s++] = d;
                    t[s++] = u;
                    t[s++] = f * a + m * r + q;
                    t[s++] = n * r + h * a + w;
                    t[s++] = c + b;
                    t[s++] = g + d;
                    t[s++] = u;
                    t[s++] = m * r + q;
                    t[s++] = n * r + w;
                    t[s++] = b;
                    t[s++] = g + d;
                    t[s++] = u;
                    this.currentBatchSize++
                }
        };
        a.prototype._draw = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = b.getTimer();
                this.start();
                var d = this.gl;
                d.bindTexture(d.TEXTURE_2D, this.currentBaseTexture);
                var c = this.vertices.subarray(0,
                    4 * this.currentBatchSize * this.vertSize);
                d.bufferSubData(d.ARRAY_BUFFER, 0, c);
                d.drawElements(d.TRIANGLES, 6 * this.currentBatchSize, d.UNSIGNED_SHORT, 0);
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
                var b =
                    this.gl;
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
        a.prototype.pushMask =
            function(a) {
                this._draw();
                var b = this.gl;
                0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
                var d = this.maskDataFreeList.pop();
                d ? (d.x = a.x, d.y = a.y, d.w = a.width, d.h = a.height) : d = {
                    x: a.x,
                    y: a.y,
                    w: a.width,
                    h: a.height
                };
                this.maskList.push(d);
                b.colorMask(!1, !1, !1, !1);
                b.stencilOp(b.KEEP, b.KEEP, b.INCR);
                this.renderGraphics(d);
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
        a.prototype.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w =
                    a.splice(19, 1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        };
        a.prototype.setupFont = function(a, b) {
            var d = this.canvasContext,
                c = a.italic ? "italic " : "normal ",
                c = c + (a.bold ? "bold " : "normal "),
                c = c + (a.size + "px " + a.fontFamily);
            d.font = c;
            d.textAlign = "left";
            d.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.renderGraphics =
            function(a) {
                var b = this.gl,
                    d = this.shaderManager.primitiveShader;
                this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
                this.updateGraphics(a);
                this.shaderManager.activateShader(d);
                b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
                b.uniformMatrix3fv(d.translationMatrix, !1, this.worldTransform.toArray(!0));
                b.uniform2f(d.projectionVector, this.projectionX, -this.projectionY);
                b.uniform2f(d.offsetVector, 0, 0);
                b.uniform3fv(d.tintColor, [1, 1, 1]);
                b.uniform1f(d.alpha, this.worldAlpha);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.vertexAttribPointer(d.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
                b.vertexAttribPointer(d.colorAttribute, 4, b.FLOAT, !1, 24, 8);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
                this.shaderManager.activateShader(this.shaderManager.defaultShader)
            };
        a.prototype.updateGraphics =
            function(a) {
                var b = this.gl;
                this.buildRectangle(a);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
            };
        a.prototype.buildRectangle = function(a) {
            var b = a.x,
                d = a.y,
                c = a.w;
            a = a.h;
            var g = this.graphicsPoints,
                f = this.graphicsIndices,
                h = g.length / 6;
            g.push(b, d);
            g.push(0, 0, 0, 1);
            g.push(b + c, d);
            g.push(0, 0, 0, 1);
            g.push(b, d + a);
            g.push(0, 0, 0, 1);
            g.push(b + c, d + a);
            g.push(0, 0, 0, 1);
            f.push(h, h, h + 1, h + 2, h + 3, h + 3)
        };
        return a
    }(b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.compileProgram = function(a, e, c) {
            c = b.compileFragmentShader(a, c);
            e = b.compileVertexShader(a, e);
            var p = a.createProgram();
            a.attachShader(p, e);
            a.attachShader(p, c);
            a.linkProgram(p);
            a.getProgramParameter(p, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
            return p
        };
        b.compileFragmentShader = function(a, e) {
            return b._compileShader(a, e, a.FRAGMENT_SHADER)
        };
        b.compileVertexShader = function(a, e) {
            return b._compileShader(a, e, a.VERTEX_SHADER)
        };
        b._compileShader =
            function(a, b, d) {
                d = a.createShader(d);
                a.shaderSource(d, b);
                a.compileShader(d);
                return a.getShaderParameter(d, a.COMPILE_STATUS) ? d : (console.log(a.getShaderInfoLog(d)), null)
            };
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL) try {
                var a = document.createElement("canvas");
                b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch (e) {
                b.canUseWebGL = !1
            }
            return b.canUseWebGL
        };
        return b
    }();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function() {
        function b(a) {
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            for (var d = 0; d < this.maxAttibs; d++) this.attribState[d] = !1;
            this.setContext(a)
        }
        b.prototype.setContext = function(b) {
            this.gl = b;
            this.primitiveShader = new e(b);
            this.defaultShader = new d(b);
            this.colorTransformShader = new a(b);
            this.activateShader(this.defaultShader)
        };
        b.prototype.activateShader = function(a) {
            this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader =
                a)
        };
        b.prototype.setAttribs = function(a) {
            var b, d;
            d = this.tempAttribState.length;
            for (b = 0; b < d; b++) this.tempAttribState[b] = !1;
            d = a.length;
            for (b = 0; b < d; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            d = this.attribState.length;
            for (b = 0; b < d; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return b
    }();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager";
    var d = function() {
        function a(b) {
            this.defaultVertexSrc =
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                d = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.uSampler = a.getUniformLocation(d, "uSampler");
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.dimensions = a.getUniformLocation(d, "dimensions");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(d, "aTextureCoord");
            this.colorAttribute =
                a.getAttribLocation(d, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var e in this.uniforms) this.uniforms[e].uniformLocation = a.getUniformLocation(d, e);
            this.initUniforms();
            this.program = d
        };
        a.prototype.initUniforms = function() {
            if (this.uniforms) {
                var a = this.gl,
                    b, d;
                for (d in this.uniforms) {
                    b = this.uniforms[d];
                    var e = b.type;
                    "mat2" === e || "mat3" === e || "mat4" === e ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === e ? b.glFunc = a.uniformMatrix2fv :
                        "mat3" === e ? b.glFunc = a.uniformMatrix3fv : "mat4" === e && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + e], b.glValueLength = "2f" === e || "2i" === e ? 2 : "3f" === e || "3i" === e ? 3 : "4f" === e || "4i" === e ? 4 : 1)
                }
            }
        };
        a.prototype.syncUniforms = function() {
            if (this.uniforms) {
                var a, b = this.gl,
                    d;
                for (d in this.uniforms) a = this.uniforms[d], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x,
                    a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
            }
        };
        return a
    }();
    b.EgretShader = d;
    d.prototype.__class__ = "egret.EgretShader";
    var a = function(a) {
        function b(d) {
            a.call(this, d);
            this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
            this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                },
                colorAdd: {
                    type: "4f",
                    value: {
                        x: 0,
                        y: 0,
                        z: 0,
                        w: 0
                    }
                }
            };
            this.init()
        }
        __extends(b, a);
        return b
    }(d);
    b.ColorTransformShader = a;
    a.prototype.__class__ = "egret.ColorTransformShader";
    var e = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                d = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.tintColor = a.getUniformLocation(d, "tint");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(d, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(d,
                "translationMatrix");
            this.alpha = a.getUniformLocation(d, "alpha");
            this.program = d
        };
        return a
    }();
    b.PrimitiveShader = e;
    e.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype.proceed = function(a) {
            function d() {
                if (4 == l.readyState)
                    if (l.status != a._status && (a._status = l.status, b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, l.status)), 400 <= l.status || 0 == l.status) b.IOErrorEvent.dispatchIOErrorEvent(a);
                    else {
                        switch (a.dataFormat) {
                            case b.URLLoaderDataFormat.TEXT:
                                a.data = l.responseText;
                                break;
                            case b.URLLoaderDataFormat.VARIABLES:
                                a.data = new b.URLVariables(l.responseText);
                                break;
                            case b.URLLoaderDataFormat.BINARY:
                                a.data =
                                    l.response;
                                break;
                            default:
                                a.data = l.responseText
                        }
                        b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                    }
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var c = a._request,
                    l = this.getXHR();
                l.onreadystatechange = d;
                var g = b.NetContext._getUrl(c);
                l.open(c.method, g, !0);
                this.setResponseType(l, a.dataFormat);
                c.method != b.URLRequestMethod.GET && c.data ? c.data instanceof b.URLVariables ? (l.setRequestHeader("Content-Type",
                    "application/x-www-form-urlencoded"), l.send(c.data.toString())) : (l.setRequestHeader("Content-Type", "multipart/form-data"), l.send(c.data)) : l.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function d(g) {
                window.clearTimeout(l.__timeoutId);
                l.removeEventListener("canplaythrough", d, !1);
                l.removeEventListener("error", c, !1);
                g = new b.Sound;
                g._setAudio(l);
                a.data = g;
                b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }

            function c(g) {
                window.clearTimeout(l.__timeoutId);
                l.removeEventListener("canplaythrough",
                    d, !1);
                l.removeEventListener("error", c, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var l = new Audio(a._request.url);
            l.__timeoutId = window.setTimeout(d, 100);
            l.addEventListener("canplaythrough", d, !1);
            l.addEventListener("error", c, !1);
            l.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        };
        a.prototype.setResponseType = function(a, d) {
            switch (d) {
                case b.URLLoaderDataFormat.TEXT:
                case b.URLLoaderDataFormat.VARIABLES:
                    a.responseType = b.URLLoaderDataFormat.TEXT;
                    break;
                case b.URLLoaderDataFormat.BINARY:
                    a.responseType = "arraybuffer";
                    break;
                default:
                    a.responseType = d
            }
        };
        a.prototype.loadTexture = function(a) {
            var d = a._request,
                c = new Image;
            c.onload = function(d) {
                c.onerror = null;
                c.onload = null;
                d = new b.Texture;
                d._setBitmapData(c);
                a.data = d;
                b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            };
            c.onerror = function(d) {
                c.onerror = null;
                c.onload = null;
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            };
            c.src = d.url
        };
        return a
    }(b.NetContext);
    b.HTML5NetContext = c;
    c.prototype.__class__ = "egret.HTML5NetContext"
})(egret ||
    (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isTouchDown = !1;
            this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
        }
        __extends(a, d);
        a.prototype.prevent = function(a) {
            a.stopPropagation();
            !0 != a.isScroll && a.preventDefault()
        };
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
                a._onTouchBegin(b);
                a.prevent(b)
            }, !1), this.rootDiv.addEventListener("MSPointerMove", function(b) {
                a._onTouchMove(b);
                a.prevent(b)
            }, !1), this.rootDiv.addEventListener("MSPointerUp", function(b) {
                a._onTouchEnd(b);
                a.prevent(b)
            }, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown", function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup", function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.rootDiv.addEventListener("mousedown", function(b) {
                a._onTouchBegin(b)
            });
            this.rootDiv.addEventListener("mousemove", function(b) {
                a._onTouchMove(b)
            });
            this.rootDiv.addEventListener("mouseup", function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++) a._onTouchBegin(b.changedTouches[c]);
                a.prevent(b)
            }, !1);
            this.rootDiv.addEventListener("touchmove",
                function(b) {
                    for (var d = b.changedTouches.length, c = 0; c < d; c++) a._onTouchMove(b.changedTouches[c]);
                    a.prevent(b)
                }, !1);
            this.rootDiv.addEventListener("touchend", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++) a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            }, !1);
            this.rootDiv.addEventListener("touchcancel", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++) a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            }, !1)
        };
        a.prototype.inOutOfCanvas = function(a) {
            var d = this.getLocation(this.rootDiv, a);
            a = d.x;
            var d = d.y,
                c = b.MainContext.instance.stage;
            return 0 > a || 0 > d || a > c.stageWidth || d > c.stageHeight ? !0 : !1
        };
        a.prototype.dispatchLeaveStageEvent = function() {
            this.touchingIdentifiers.length = 0;
            b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
        };
        a.prototype._onTouchBegin = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchBegan(b.x, b.y, d)
        };
        a.prototype._onTouchMove = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                d = -1;
            a.hasOwnProperty("identifier") &&
                (d = a.identifier);
            this.onTouchMove(b.x, b.y, d)
        };
        a.prototype._onTouchEnd = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchEnd(b.x, b.y, d)
        };
        a.prototype.getLocation = function(a, d) {
            var c = document.documentElement,
                l = window,
                g, f;
            "function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), g = f.left, f = f.top) : f = g = 0;
            g += l.pageXOffset - c.clientLeft;
            f += l.pageYOffset - c.clientTop;
            null != d.pageX ? (c = d.pageX, l = d.pageY) : (g -= document.body.scrollLeft,
                f -= document.body.scrollTop, c = d.clientX, l = d.clientY);
            var h = b.Point.identity;
            h.x = (c - g) / b.StageDelegate.getInstance().getScaleX();
            h.y = (l - f) / b.StageDelegate.getInstance().getScaleY();
            return h
        };
        return a
    }(b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
};
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._hasListeners = !1;
            this._inputType = "";
            this._isShow = !1;
            this.textValue = "";
            this._height = this._width = 0;
            this._styleInfoes = {};
            var a = b.StageDelegate.getInstance().getScaleX(),
                c = b.StageDelegate.getInstance().getScaleY(),
                p = b.Browser.getInstance().$new("div");
            p.position.x = 0;
            p.position.y = 0;
            p.scale.x = a;
            p.scale.y = c;
            p.transforms();
            p.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = p;
            c = b.MainContext.instance.stage;
            a = c.stageWidth;
            c = c.stageHeight;
            p = new b.Shape;
            p.width = a;
            p.height = c;
            p.touchEnabled = !0;
            this._shape = p;
            this.getStageDelegateDiv().appendChild(this.div)
        }
        __extends(a, d);
        a.prototype.getStageDelegateDiv = function() {
            var a = b.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
            return a
        };
        a.prototype._setMultiline = function(a) {
            d.prototype._setMultiline.call(this, a);
            this.createInput()
        };
        a.prototype.callHandler =
            function(a) {
                a.stopPropagation()
            };
        a.prototype._add = function() {
            this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
        };
        a.prototype._remove = function() {
            this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
            this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
        };
        a.prototype._addListeners = function() {
            this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart",
                this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype._removeListeners = function() {
            this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype.createInput = function() {
            var a = this._multiline ? "textarea" : "input";
            this._inputType != a && (this._inputType =
                a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {}, a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline",
                    "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
        };
        a.prototype._open = function(a, b, d, c) {};
        a.prototype._setScale = function(a, c) {
            d.prototype._setScale.call(this, a, c);
            var p = b.StageDelegate.getInstance().getScaleX(),
                l = b.StageDelegate.getInstance().getScaleY();
            this.div.scale.x = p * a;
            this.div.scale.y = l * c;
            this.div.transforms()
        };
        a.prototype.changePosition = function(a, d) {
            var c = b.StageDelegate.getInstance().getScaleX(),
                l = b.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * c;
            this.div.position.y = d * l;
            this.div.transforms()
        };
        a.prototype.setStyles = function() {
            this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
            this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
            this.setElementStyle("textAlign", this._textAlign);
            this.setElementStyle("fontSize", this._size + "px");
            this.setElementStyle("color", "#000000");
            this.setElementStyle("width", this._width + "px");
            this.setElementStyle("height", this._height +
                "px");
            this.setElementStyle("border", "1px solid red");
            this.setElementStyle("display", "block")
        };
        a.prototype._show = function() {
            0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
            this._isShow = !0;
            var a = this._getText();
            this.inputElement.value = a;
            var d = this;
            this.inputElement.oninput = function() {
                d.textValue = d.inputElement.value;
                d.dispatchEvent(new b.Event("updateText"))
            };
            this.setStyles();
            this.inputElement.focus();
            this.inputElement.selectionStart =
                a.length;
            this.inputElement.selectionEnd = a.length;
            this._shape && null == this._shape.parent && b.MainContext.instance.stage.addChild(this._shape)
        };
        a.prototype._hide = function() {
            if (null != this.inputElement) {
                this._isShow = !1;
                this.inputElement.oninput = function() {};
                this.setElementStyle("border", "none");
                this.setElementStyle("display", "none");
                this.inputElement.value = "";
                this.setElementStyle("width", "0px");
                window.scrollTo(0, 0);
                var a = this;
                b.setTimeout(function() {
                    a.inputElement.blur();
                    window.scrollTo(0, 0)
                }, this, 50);
                this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
            }
        };
        a.prototype._getText = function() {
            this.textValue || (this.textValue = "");
            return this.textValue
        };
        a.prototype._setText = function(a) {
            this.textValue = a;
            this.resetText()
        };
        a.prototype.resetText = function() {
            this.inputElement && (this.inputElement.value = this.textValue)
        };
        a.prototype._setWidth = function(a) {
            this._width = a
        };
        a.prototype._setHeight = function(a) {
            this._height = a
        };
        a.prototype.setElementStyle = function(a, b) {
            this.inputElement && this._styleInfoes[a] !=
                b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
        };
        return a
    }(b.StageText);
    b.HTML5StageText = c;
    c.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
    return new egret.HTML5StageText
};


var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    GameOverPanel = function(b) {
        function c() {
            b.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(c, b);
        c.prototype.ats = function(b) {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.gameOverShape = new egret.Shape;
            this.addChild(this.gameOverShape);
            this.gameOverShape.graphics.beginFill(0, 0.5);
            this.gameOverShape.graphics.drawRect(0, 0, this.stageW, this.stageH);
            this.gameOverShape.graphics.endFill();
            this.bg = XiaobinTool.createBitmapByName("gameOver_png");
            this.addChild(this.bg);
            this.bg.anchorOffsetX = this.bg.width / 2;
            this.bg.anchorOffsetY = this.bg.height / 2;
            this.bg.x = this.stageW / 2;
            this.bg.y = this.stageH / 2;
            var a = XiaobinTool.createBitmapByName("replay_btn_png");
            this.addChild(a);
            a.x = this.stageW / 4 - a.width / 4 - 10;
            a.y = this.stageH - 100 - a.height - 270;
            a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doReplay, this);
            a.touchEnabled = !0;
            b = XiaobinTool.createBitmapByName("share_btn_png");
            this.addChild(b);
            b.x = 0.75 * this.stageW - b.width / 2 - 40;
            b.y = a.y;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doFenxiang, this);
            b.touchEnabled = !0;
            var c = XiaobinTool.createBitmapByName("more_btn_png");
            this.addChild(c);
            c.x = a.x;
            c.y = a.y + 120;
            c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doMore, this);
            c.touchEnabled = !0;
            /*a = XiaobinTool.createBitmapByName("libao_btn_png");
            this.addChild(a);
            a.x = this.stageW / 2 - a.width / 2;
            a.y = this.stageH - 220;
            a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doLibao, this);
            a.touchEnabled = !0;
            a = XiaobinTool.createBitmapByName("download_btn_png");
            this.addChild(a);
            a.x = b.x;
            a.y = c.y;
            a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doDownload, this);
            a.touchEnabled = !0;*/

            b = new egret.TextField;
            this.addChild(b);
            this.scoreTxt = b;
            this.scoreTxt.text = "0000";
            b.width = this.stageW;
            b.y = 200;
            b.size = 50;
            b.lineSpacing = 15;
            b.textAlign = egret.HorizontalAlign.CENTER;
            b.strokeColor = 2236962;
            b.stroke = 4;
            b = new egret.TextField;
            this.addChild(b);
            this.bestScoreTxt = b;

            b.width = this.stageW;
            b.y = 370;
            b.text = '';
            b.size = 50;
            b.lineSpacing = 15;
            b.textAlign = egret.HorizontalAlign.CENTER;
            b.strokeColor = 2236962;
            b.stroke = 4;
            this.updateScoreTxt()
        };
        c.prototype.doFenxiang = function(b) {

        };
        c.prototype.showFxTxt = function() {
            var b = XiaobinTool.createBitmapByName("fx_txt_png");
            this.addChild(b);
            b.touchEnabled = !0;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.xytb, this)
        };
        c.prototype.xytb = function(b) {
            b.target.parent && b.target.parent.removeChild(b.target)
        };
        c.prototype.doReplay = function(b) {
            //console.log("doReplay");

            b.target.parent && b.target.parent.removeChild(b.target);
            b = new egret.Event("click_replay_btn", !0);
            this.dispatchEvent(b)
        };
        c.prototype.doDownload = function(b) {

            location.href = window.theURL || ih5game.more(true);
        };
        c.prototype.doLibao = function(b) {
            b = XiaobinTool.createBitmapByName("newPanel_png");
            this.addChild(b);
            b.x = this.stageW / 2 - b.width / 2;
            b.y = 160;
            /*  var a = XiaobinTool.createBitmapByName("download_btn_png");
              this.addChild(a);
              a.x = this.stageW / 2 - a.width / 2;
              a.y = b.y + b.height - a.height - 20;
              a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doDownload, this);
              a.touchEnabled = !0;*/
            var c = XiaobinTool.createBitmapByName("close_btn_png");
            this.addChild(c);
            c.x = b.x + b.width - c.width / 2 - 20;
            c.y = b.y + 20;
            c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doClose, this);
            c.touchEnabled = !0;
            this.bbbb = b;
            this.dddd = a;
            this.cccc = c
        };
        c.prototype.doClose = function(b) {
            this.removeChild(this.bbbb);
            this.removeChild(this.cccc);
            this.removeChild(this.dddd)
        };
        c.prototype.doMore = function(b) {
            // Play68.goHome();

            gotomore();
        };
        c.prototype.updateScoreTxt = function() {

            this.scoreTxt.text = c.showScore.toString();

        };
        return c
    }(egret.Sprite);
GameOverPanel.prototype.__class__ = "GameOverPanel";
var XiaobinDrager = function() {
    function b() {}
    b.setMcDragable = function(c) {
        if (!1 == b.isInit) {
            b.isInit = !0;
            var d = egret.MainContext.instance.stage;
            d.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            d.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            d.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            d.addEventListener(egret.Event.LEAVE_STAGE, this.onTouchEnd, this)
        }
        this.mcArr.push(c)
    };
    b.onTouchMove = function(c) {
        !0 != b.gameOver && !0 == b.canMove && b.theMc && (b.theMc.x = c.stageY - b.localY)
    };
    b.onTouchBegin = function(c) {
        if (!0 != b.gameOver)
            for (var d = this.mcArr.length - 1; 0 <= d; d--)
                if (this.mcArr[d].hitTestPoint(c.stageX, c.stageY, !0)) {
                    b.theMc = this.mcArr[d];
                    c = b.theMc.globalToLocal(c.stageX, c.stageY);
                    this.localX = c.x * b.theMc.scaleX;
                    this.localY = c.y * b.theMc.scaleY;
                    this.canMove = !0;
                    b.theMc.parent.setChildIndex(b.theMc, b.theMc.parent.numChildren - 1);
                    b.theMc.gotoAndPlay("zhengzha");
                    break
                }
    };
    b.onTouchEnd = function(c) {
        this.canMove = !1;
        null != b.theMc && (b.theMc.gotoAndPlay("leftRun"), b.theMc = null)
    };
    b.gameOver = !1;
    b.sec = 0;
    b.canMove = !1;
    b.localX = 0;
    b.localY = 0;
    b.isInit = !1;
    b.mcArr = [];
    return b
}();
XiaobinDrager.prototype.__class__ = "XiaobinDrager";
var XiaobinTool = function() {
    function b() {}
    b.createBitmapByName = function(b) {
        var d = new egret.Bitmap;
        b = RES.getRes(b);
        d.texture = b;
        return d
    };
    b.creatMovieClip = function(b, d, a) {
        void 0 === a && (a = "");
        b = RES.getRes(b);
        var e = RES.getRes(d);
        b = new egret.MovieClip(b, e);
        b.name = d;
        b.frameRate = 60;
        b.gotoAndPlay(a);
        return b
    };
    b.fenxiang = function() {};
    b.GAME_SCORE = "0";
    b.OPEN_ID = "0";
    b.NICK_NAME = "0";
    return b
}();
XiaobinTool.prototype.__class__ = "XiaobinTool";
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    ScoreSixMc = function(b) {
        function c() {
            b.call(this);
            this.num = 0;
            this.space = 40;
            this.theJSON = "numberText_json";
            this.thePNG = "numberText_png";
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(c, b);
        c.prototype.onAddToStage = function(b) {
            this.handredthousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.handredthousandText);
            this.handredthousandText.x = 0;
            this.tenthousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.tenthousandText);
            this.tenthousandText.x = this.handredthousandText.x + this.space;
            this.thousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.thousandText);
            this.thousandText.x = this.tenthousandText.x + this.space;
            this.handredText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.handredText);
            this.handredText.x = this.thousandText.x + this.space;
            this.tenText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.tenText);
            this.tenText.x = this.handredText.x + this.space;
            this.oneText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.oneText);
            this.oneText.x = this.tenText.x + this.space
        };
        c.prototype.setNum = function(b) {
            this.num = b;

            //console.log("setNum = " + this.num);
            b = Math.floor(this.num / 1E5).toString();
            this.handredthousandText.gotoAndStop("n" + b.toString());
            0 == b && (this.handredthousandText.visible = !1);
            0 < Math.floor(this.num / 1E5) && (this.handredthousandText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 1E4).toString();
            b = b.slice(b.length - 1, b.length);
            this.tenthousandText.gotoAndStop("n" + b.toString());
            !1 == this.handredthousandText.visible && 0 == b && (this.tenthousandText.visible = !1);
            0 < Math.floor(this.num / 1E4) && (this.tenthousandText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 1E3).toString();
            b = b.slice(b.length - 1, b.length);
            this.thousandText.gotoAndStop("n" + b.toString());
            !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.thousandText.visible = !1);
            0 < Math.floor(this.num / 1E3) && (this.thousandText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 100).toString();
            b = b.slice(b.length - 1, b.length);
            this.handredText.gotoAndStop("n" + b.toString());
            !1 == this.thousandText.visible && !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.handredText.visible = !1);
            0 < Math.floor(this.num / 100) && (this.handredText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 10).toString();
            b = b.slice(b.length - 1, b.length);
            this.tenText.gotoAndStop("n" + b.toString());
            !1 == this.handredText.visible && !1 == this.thousandText.visible && !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.tenText.visible = !1);
            0 < Math.floor(this.num / 10) && (this.tenText.visible = !0);
            //console.log("frameNum = " + b);
            b = this.num.toString();
            b = b.slice(b.length - 1, b.length);
            this.oneText.gotoAndStop("n" + b.toString());
            // console.log("frameNum = " + b)
        };
        c.isCreat = !1;
        return c
    }(egret.Sprite);
ScoreSixMc.prototype.__class__ = "ScoreSixMc";
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    ScoreSixMc2 = function(b) {
        function c() {
            b.call(this);
            this.num = 0;
            this.space = 40;
            this.theJSON = "numberText2_json";
            this.thePNG = "numberText2_png";
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(c, b);
        c.prototype.onAddToStage = function(b) {
            this.handredthousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.handredthousandText);
            this.handredthousandText.x = 0;
            this.tenthousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.tenthousandText);
            this.tenthousandText.x = this.handredthousandText.x + this.space;
            this.thousandText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.thousandText);
            this.thousandText.x = this.tenthousandText.x + this.space;
            this.handredText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.handredText);
            this.handredText.x = this.thousandText.x + this.space;
            this.tenText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.tenText);
            this.tenText.x = this.handredText.x + this.space;
            this.oneText = XiaobinTool.creatMovieClip(this.theJSON, this.thePNG, "n0");
            this.addChild(this.oneText);
            this.oneText.x = this.tenText.x + this.space
        };
        c.prototype.setNum = function(b) {
            this.num = b;
            //  console.log("setNum = " + this.num);
            b = Math.floor(this.num / 1E5).toString();
            this.handredthousandText.gotoAndStop("n" + b.toString());
            0 == b && (this.handredthousandText.visible = !1);
            0 < Math.floor(this.num / 1E5) && (this.handredthousandText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 1E4).toString();
            b = b.slice(b.length - 1, b.length);
            this.tenthousandText.gotoAndStop("n" + b.toString());
            !1 == this.handredthousandText.visible && 0 == b && (this.tenthousandText.visible = !1);
            0 < Math.floor(this.num / 1E4) && (this.tenthousandText.visible = !0);
            //  console.log("frameNum = " + b);
            b = Math.floor(this.num / 1E3).toString();
            b = b.slice(b.length - 1, b.length);
            this.thousandText.gotoAndStop("n" + b.toString());
            !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.thousandText.visible = !1);
            0 < Math.floor(this.num / 1E3) && (this.thousandText.visible = !0);
            //   console.log("frameNum = " + b);
            b = Math.floor(this.num / 100).toString();
            b = b.slice(b.length - 1, b.length);
            this.handredText.gotoAndStop("n" + b.toString());
            !1 == this.thousandText.visible && !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.handredText.visible = !1);
            0 < Math.floor(this.num / 100) && (this.handredText.visible = !0);
            // console.log("frameNum = " + b);
            b = Math.floor(this.num / 10).toString();
            b = b.slice(b.length - 1, b.length);
            this.tenText.gotoAndStop("n" + b.toString());
            !1 == this.handredText.visible && !1 == this.thousandText.visible && !1 == this.tenthousandText.visible && !1 == this.handredthousandText.visible && 0 == b && (this.tenText.visible = !1);
            0 < Math.floor(this.num / 10) && (this.tenText.visible = !0);
            // console.log("frameNum = " + b);
            b = this.num.toString();
            b = b.slice(b.length - 1, b.length);
            this.oneText.gotoAndStop("n" + b.toString());
            // console.log("frameNum = " + b)
        };
        c.isCreat = !1;
        return c
    }(egret.Sprite);
ScoreSixMc2.prototype.__class__ = "ScoreSixMc2";
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    StartBtn = function(b) {
        function c() {
            b.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(c, b);
        c.prototype.onAddToStage = function(b) {
            this.bgBMP = new egret.Bitmap;
            this.addChild(this.bgBMP);
            this.bgBMP.texture = RES.getRes("start_btn_png")
        };
        return c
    }(egret.Sprite);
StartBtn.prototype.__class__ = "StartBtn";
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    HomePage = function(b) {
        function c() {
            b.call(this);
            this.stageH = this.stageW = 0;
            this.homePage = null;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this)
        }
        __extends(c, b);
        c.prototype.startGame = function(b) {
            b = XiaobinTool.createBitmapByName("bg_jpg");
            this.addChild(b);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            null == this.homePage && (this.startBtn = new StartBtn, this.addChild(this.startBtn), this.startBtn.x = this.stageW / 2, this.startBtn.y = this.stageH - 350, this.startBtn.graphics.beginFill(0, 0.01), this.startBtn.graphics.drawRect(-1E3, -1E3, 2E3, 2E3), this.startBtn.graphics.endFill(), this.startBtn.anchorOffsetX = this.startBtn.width / 2, this.startBtn.touchEnabled = !0, this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this));
            this.touchEnabled = !0;
            this.addEventListener(egret.Event.ENTER_FRAME, this.loop, this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseHandler, this);
            this.hw_logo = XiaobinTool.createBitmapByName("hw_logo_png");
            this.addChild(this.hw_logo);
            this.hw_logo.x = 320 - this.hw_logo.width / 2;
            this.hw_logo.y = 960 - this.hw_logo.height - 20
        };
        c.prototype.loop = function(b) {};
        c.prototype.onMouseHandler = function(b) {};
        c.prototype.onTouchBegin = function(b) {
            b.target && (b.target.scaleX = b.target.scaleY = 0.95, b.target.y = this.stageH - 345)
        };
        c.prototype.onTouchEnd = function(b) {
            this.startBtn.hitTestPoint(b.stageX, b.stageY) ? (this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), b.target.parent && b.target.parent.removeChild(b.target), b = new egret.Event("click_start_btn", !0), this.dispatchEvent(b)) : (this.startBtn.scaleX = this.startBtn.scaleY = 1, this.startBtn.y = this.stageH - 350)
        };
        return c
    }(egret.Sprite);
HomePage.prototype.__class__ = "HomePage";
var __extends = this.__extends || function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
        d.prototype = c.prototype;
        b.prototype = new d
    },
    InGame = function(b) {
        function c() {
            b.call(this);
            this.yourTime = this.count = this.touchY = this.touchX = this.stageH = this.stageW = 0;
            this.inPower = this.bePress = !1;
            this.space = 40;
            this.speed = 0.1;
            this.scoreNum = this.pcTime = 0;
            this.timeNum = 30;
            this.daCount = 0;
            this.addNum = 100;
            this.secHit = 0;
            this.frameRateSpeed = this.minNum = 5;
            this.myCount = this.maxWidth = this.rectWidth = 0;
            this.link = !0;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(c, b);
        c.prototype.ats = function(b) {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.initGameData();
            this.makeReady();
            this.doTimer(null);
            this.bgMusic = RES.getRes("bgSound");
            this.bgMusic.play();
            this.bgMusic.addEventListener("ended", this.rePlay.bind(this))
        };
        c.prototype.creatNuqi = function() {
            this.nuqi1 = XiaobinTool.createBitmapByName("nuqi1_png");
            this.addChild(this.nuqi1);
            this.nuqi1.anchorOffsetX = this.nuqi1.width / 2;
            this.nuqi1.anchorOffsetY = this.nuqi1.height / 2;
            this.nuqi1.x = this.stageW / 2;
            this.nuqi1.y = this.stageH - this.nuqi1.height;
            this.nuqi2 = XiaobinTool.createBitmapByName("nuqi2_png");
            this.addChild(this.nuqi2);
            this.nuqi2.anchorOffsetX = this.nuqi2.width / 2;
            this.nuqi2.anchorOffsetY = this.nuqi2.height / 2;
            this.nuqi2.x = this.stageW / 2;
            this.nuqi2.y = this.stageH - this.nuqi2.height - 15;
            var b = new egret.Rectangle(0, 0, this.secHit, 200);
            this.nuqi2.mask = b
        };
        c.prototype.creatArrow = function() {
            this.arrow = XiaobinTool.createBitmapByName("arrow_png");
            this.addChild(this.arrow);
            this.arrow.x = this.right_hero.x - this.arrow.width / 2;
            this.arrow.y = this.right_hero.y - 300
        };
        c.prototype.creatBar = function() {
            this.bar1 = XiaobinTool.createBitmapByName("t1_png");
            this.addChild(this.bar1);
            this.bar1.x = 220;
            this.bar1.y = 130;
            this.bar2 = XiaobinTool.createBitmapByName("t2_png");
            this.addChild(this.bar2);
            this.bar2.x = this.bar1.x;
            this.bar2.y = this.bar1.y
        };
        c.prototype.creatMiss = function() {
            this.miss = XiaobinTool.createBitmapByName("miss_png");
            this.addChild(this.miss);
            this.miss.alpha = 0;
            this.miss.anchorOffsetX = this.miss.width / 2;
            this.miss.anchorOffsetY = this.miss.height / 2
        };
        c.prototype.showMiss = function(b, a) {
            this.miss.x = b;
            this.miss.y = a - 250;
            this.miss.alpha = 1
        };
        c.prototype.creatScoreTxt = function() {
            var b = new egret.TextField;
            this.addChild(b);
            this.scoreTxt = b;
            this.scoreTxt.visible = !1;
            b.x = this.scoreBg.x + 60;
            b.y = this.scoreBg.y - 10;
            b.size = 50;
            b.textColor = 8926003;
            this.updateScore()
        };
        c.prototype.updateScore = function() {
            this.scoreTxt.text = this.scoreNum.toString();
            this.ss && this.ss.setNum(this.scoreNum)
        };
        c.prototype.creatScoreBg = function() {
            this.scoreBg = XiaobinTool.createBitmapByName("scoreBg_png");
            this.addChild(this.scoreBg);
            this.scoreBg.anchorOffsetX = this.scoreBg.width / 2;
            this.scoreBg.anchorOffsetY = this.scoreBg.height / 2;
            this.scoreBg.x = this.stageW / 2 - 20;
            this.scoreBg.y = 80
        };
        c.prototype.creatTimeTip = function() {
            this.timeTip = XiaobinTool.createBitmapByName("timeTip_png");
            this.addChild(this.timeTip);
            this.timeTip.anchorOffsetX = this.timeTip.width / 2;
            this.timeTip.x = this.stageW / 2;
            this.timeTip.y = 150
        };
        c.prototype.creatTxt = function() {
            var b = new egret.TextField;
            this.addChild(b);
            this.pcTxt = b;
            b.y = 200;
            b.strokeColor = 2236962;
            b.stroke = 4;
            b.visible = !1;
            var a = new egret.TextField;
            this.addChild(a);
            a.y = b.y + b.height + 30;
            this.yourTxt = a;
            a.strokeColor = 2236962;
            a.stroke = 4;
            a.visible = !1;
            b = new egret.TextField;
            this.addChild(b);
            b.y = a.y + a.height + 30;
            this.resultTxt = b;
            b.strokeColor = 2236962;
            b.stroke = 4;
            b.visible = !1;
            a = new egret.TextField;
            this.addChild(a);
            a.y = this.right_hero.y + 15;
            a.x = this.stageW / 2;
            a.size = 45;
            a.text = "";
            this.showTxt = a;
            a.strokeColor = 2236962;
            a.stroke = 4
        };
        c.prototype.makeReady = function() {
            this.timer = new egret.Timer(1E3, 3);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.doTimer, this);
            this.timer.start()
        };
        c.prototype.doTimer = function(b) {
            //console.log("timer");
            this.count--;
            null != this.numPic && (this.removeChild(this.numPic), this.numPic = null);
            this.creatNumPic();
            0 == this.count && (this.touchEnabled = !0, this.addEventListener(egret.Event.ENTER_FRAME, this.loop, this), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.doTimer, this), this.timer = null)
        };
        c.prototype.initGameData = function() {
            this.daCount = this.scoreNum = this.pcTime = this.yourTime = 0;
            this.count = 4;
            this.canPlay = !1;
            this.creatBg();
            this.creatHero();
            this.creatBtns();
            this.makeGameTimer();
            this.makeRePressTimer();
            this.creatScoreBg();
            this.creatScoreTxt();
            var b = new ScoreSixMc;
            this.addChild(b);
            b.x = 250;
            b.y = 100;
            b.setNum(0);
            this.ss = b;
            this.creatMiss();
            this.creatBar();
            this.creatArrow();
            this.creatNuqi();
            this.creatTxt();
            this.creatTimeTip();
            this.ySound1 = RES.getRes("woda");
            this.ySound2 = RES.getRes("woshan");
            this.nogj.visible = !1
        };
        c.prototype.makePlayTimer = function() {
            this.pTimer = new egret.Timer(750, 1);
            this.pTimer.addEventListener(egret.TimerEvent.TIMER, this.playTimer, this)
        };
        c.prototype.makeGameTimer = function() {
            this.gameTimer = new egret.Timer(100);
            this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.doGameTimer, this)
        };
        c.prototype.makeRePressTimer = function() {
            this.rePressTimer = new egret.Timer(1E3);
            this.rePressTimer.addEventListener(egret.TimerEvent.TIMER, this.doRePressTimer, this);
            this.rePressTimer.start()
        };
        c.prototype.makeRoundTimer = function() {
            this.roundTimer = new egret.Timer(750, 1);
            this.roundTimer.addEventListener(egret.TimerEvent.TIMER, this.doRoundTimer, this)
        };
        c.prototype.doRePressTimer = function(b) {
            this.left_hero.frameRate = this.frameRateSpeed + 10;
            this.right_hero.frameRate = this.frameRateSpeed
        };
        c.prototype.doGameTimer = function(b) {
            this.timeNum -= this.speed;
            b = new egret.Rectangle(0, 0, this.bar2.width / 30 * this.timeNum, 200);
            this.bar2.mask = b;
            0 >= this.timeNum && (this.makeGameOver(), this.gameTimer.removeEventListener(egret.TimerEvent.TIMER, this.doGameTimer, this))
        };
        c.prototype.doRoundTimer = function(b) {
            this.canPlay = !0;
            this.numPic.visible = !0;
            this.miss.alpha = 0
        };
        c.prototype.playTimer = function(b) {
            // console.log("playTimer");
            this.miss.alpha = 0;
            this.count = 4;
            this.doTimer(null);
            b = 1.3 * Math.random() + 0.2;
            this.timer = new egret.Timer(1E3 * b, 4);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.doTimer, this);
            this.timer.start();
            this.gjBtn.visible = !0;
            this.gjBtn.touchEnabled = !0;
            this.nogj.visible = !1;
            this.left_hero.gotoAndStop("stand");
            this.right_hero.gotoAndStop("stand")
        };
        c.prototype.creatBtns = function() {
            var b = XiaobinTool.createBitmapByName("gj_btn_png");
            this.addChild(b);
            b.anchorOffsetX = b.width / 2;
            b.x = this.stageW / 2;
            b.y = this.stageH - b.height - 90;
            this.gjBtn = b;
            b.visible = !1;
            var a = XiaobinTool.createBitmapByName("nogj_png");
            this.addChild(a);
            a.anchorOffsetX = a.width / 2;
            a.x = b.x;
            a.y = b.y;
            a.visible = !1;
            this.nogj = a
        };
        c.prototype.creatHero = function() {
            var b = XiaobinTool.creatMovieClip("leftHero_json", "leftHero_png", "stand");
            this.addChild(b);
            b.x = this.stageW / 2 - b.width / 2 + this.space;
            b.y = this.stageH - 360;
            this.left_hero = b;
            var a = XiaobinTool.creatMovieClip("rightHero_json", "rightHero_png", "stand");
            this.addChild(a);
            a.x = this.stageW / 2 + a.width / 2 - this.space;
            a.y = this.stageH - 360;
            this.right_hero = a;
            var c = new egret.Shape;
            this.addChild(c);
            c.touchEnabled = !0;
            b.frameRate = this.minNum;
            a.frameRate = this.minNum
        };
        c.prototype.doRemove = function() {
            this.numPic && this.removeChild(this.numPic)
        };
        c.prototype.creatNumPic = function() {
            0 >= this.timeNum || (0 == this.count ? (console.log("r"), this.numPic = XiaobinTool.createBitmapByName("go_png"), this.gameTimer.start(), egret.Tween.get(this.numPic).to({
                alpha: 0.01,
                scaleX: 3,
                scaleY: 3
            }, 400, egret.Ease.sineIn).call(this.doRemove, this), this.timeTip && this.removeChild(this.timeTip), this.gameTimer.start()) : this.numPic = XiaobinTool.createBitmapByName("num" + this.count + "_png"), this.addChild(this.numPic), this.numPic.anchorOffsetX = this.numPic.width / 2, this.numPic.anchorOffsetY = this.numPic.height / 2, this.numPic.x = this.stageW / 2, this.numPic.y = 240)
        };
        c.prototype.loop = function(b) {
            !0 == this.inPower && (this.frameRateSpeed = 30, this.left_hero.frameRate = this.frameRateSpeed, this.right_hero.frameRate = this.frameRateSpeed);
            this.frameRateSpeed -= 0.12;
            this.frameRateSpeed < this.minNum && (this.frameRateSpeed = this.minNum, this.left_hero.gotoAndStop("stand"), this.right_hero.gotoAndStop("stand"));
            this.frameRateSpeed > this.minNum && (this.myCount++, 30 <= this.myCount && (this.creatScore(), this.myCount = 0));
            if (!1 == this.inPower) {
                var a;
                !1 == this.gjBtn.visible && (0 < this.rectWidth && (this.rectWidth -= 2), this.rectWidth += this.frameRateSpeed - 5, a = this.rectWidth / 15, b = new egret.Rectangle(0, 0, a, 200), this.nuqi2.mask = b);
                a >= this.nuqi2.width && (this.gjBtn.visible = !0)
            }
        };
        c.prototype.creatScore = function() {
            var b;
            if (!0 == this.inPower) {
                b = new ScoreSixMc2;
                this.addChild(b);
                var a = 1.5 + 1.5 * Math.random();
                b.setNum(20 * this.secHit * a)
            } else b = new ScoreSixMc, this.addChild(b), b.setNum(20 * this.secHit);
            b.x = this.left_hero.x + 50 * Math.random() - 100 - b.width / 2;
            b.y = this.left_hero.y - 200;
            this.scoreNum += 20 * this.secHit;
            this.scoreTxt.text = this.scoreNum.toString();
            this.updateScore();
            egret.Tween.get(b).to({
                y: b.y - 100,
                alpha: 50
            }, 500).call(this.doRemoveScore, this, [b])
        };
        c.prototype.doRemoveScore = function(b) {
            b && b.parent && b.parent.removeChild(b)
        };
        c.prototype.rePlay = function() {
            this.bgMusic.load();
            this.bgMusic.play()
        };
        c.prototype.makeGameOver = function() {
            this.right_hero.gotoAndStop("stand");
            var mescore = this.scoreNum;
            var mefont = "分";
            var melevel = "";
            window.score = this.scoreNum;
            //updateShare(window.score);
            //Play68.setRankingScoreDesc(window.score);
            GameOverPanel.showScore = this.scoreNum;
            this.gameOverPanel = new GameOverPanel;
            this.addChild(this.gameOverPanel);
            null != this.arrow && (this.removeChild(this.arrow), this.arrow = null);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.loop, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        };
        c.prototype.onTouchBegin = function(b) {
            this.gjBtn.hitTestPoint(b.stageX, b.stageY) && (this.gjBtn.scaleX = this.gjBtn.scaleY = 0.95, this.gjBtn.y = this.stageH - this.gjBtn.height + 10 - 150, this.left_hero.gotoAndPlay("ai"), this.right_hero.gotoAndPlay("da"));
            if (this.right_hero.hitTestPoint(b.stageX, b.stageY) || 300 < b.stageY && 700 > b.stageY)!0 == this.inPower ? (this.frameRateSpeed = 30, this.left_hero.frameRate = this.frameRateSpeed, this.right_hero.frameRate = this.frameRateSpeed) : (this.secHit++, this.r_status = "da", this.frameRateSpeed == this.minNum && (this.right_hero.gotoAndPlay(this.r_status), this.left_hero.gotoAndPlay("ai")), this.frameRateSpeed += 1.5, 30 < this.frameRateSpeed && (this.frameRateSpeed = 30))
        };
        c.prototype.addScore = function(b) {
            this.daCount++;
            this.scoreNum += b;
            this.addNum *= 2
        };
        c.prototype.doTt = function(b) {
            this.maxWidth -= this.nuqi2.width / 50;
            b = new egret.Rectangle(0, 0, this.maxWidth, 200);
            this.nuqi2.mask = b;
            //console.log(this.maxWidth);
            0 >= this.maxWidth && (this.inPower = !1, this.rectWidth = 0)
        };
        c.prototype.onTouchEnd = function(b) {
            this.gjBtn.scaleX = this.gjBtn.scaleY = 1;
            this.gjBtn.y = this.stageH - this.gjBtn.height - 150;
            this.touchX = b.stageX;
            this.touchY = b.stageY;
            this.gjBtn.hitTestPoint(this.touchX, this.touchY) && !0 == this.gjBtn.visible && (b = new egret.Timer(100, 50), b.addEventListener(egret.TimerEvent.TIMER, this.doTt, this), b.start(), this.maxWidth = this.nuqi2.width, this.doTt(null), this.inPower = !0, this.gjBtn.visible = !1, this.frameRateSpeed = 30, this.left_hero.frameRate = this.frameRateSpeed, this.right_hero.frameRate = this.frameRateSpeed, this.left_hero.gotoAndPlay("ai"), this.right_hero.gotoAndPlay("da"));
            0.5 < Math.random() ? this.l_status = "duo" : this.l_status = "da"
        };
        c.prototype.creatBg = function() {
            this.bg = XiaobinTool.createBitmapByName("bg_jpg");
            this.addChild(this.bg)
        };
        c.prototype.onTouchMove = function(b) {
            this.touchX = b.stageX;
            this.touchY = b.stageY
        };
        return c
    }(egret.Sprite);
InGame.prototype.__class__ = "InGame";
var __extends = this.__extends || function(b, c) {
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
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/resource.json" + (window.VER ? '?' + window.VER : ''), "resource/");
            this.textField = new egret.TextField
        };
        c.prototype.setProgress = function(b, a) {
            this.textField.text = "加载中" + Math.floor(b / a * 100) + "%"
        };
        c.prototype.onConfigComplete = function(b) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.loadGroup("loading")
        };
        c.prototype.onResourceLoadComplete = function(b) {
            "loading" == b.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), this.createPic(), this.createText(), this.createShape())
        };
        c.prototype.createShape = function() {
            this.shape = new egret.Shape;
            this.addChild(this.shape)
        };
        c.prototype.createText = function() {
            this.addChild(this.textField);
            this.textField.y = 480;
            this.textField.width = 640;
            this.textField.height = 100;
            this.textField.size = 25;
            this.textField.textColor = 16777215;
            this.textField.textAlign = "center"
        };
        c.prototype.createPic = function() {
            this.pic = XiaobinTool.createBitmapByName("bg_jpg");
            this.addChild(this.pic);
            this.logo = XiaobinTool.createBitmapByName("logo_png");
            this.addChild(this.logo);
            this.logo.x = 320 - this.logo.width / 2;
            this.logo.y = 100;
            this.hw_logo = XiaobinTool.createBitmapByName("hw_logo_png");
            this.addChild(this.hw_logo);
            this.hw_logo.x = 320 - this.hw_logo.width / 2;
            this.hw_logo.y = 960 - this.hw_logo.height - 20
        };
        c.prototype.createMc = function() {
            this.mc = XiaobinTool.creatMovieClip("hero_json", "hero_png", "wait");
            this.addChild(this.mc)
        };
        return c
    }(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(b, c) {
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
            RES.loadConfig("resource/resource.json" + (window.VER ? '?' + window.VER : ''), "resource/")
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
            null == this.homepage && (this.homepage = new HomePage);
            this.addChild(this.homepage);

            this.logo = XiaobinTool.createBitmapByName("logo_png");
            this.addChild(this.logo);
            this.logo.x = 320 - this.logo.width / 2;
            this.logo.y = 100;
            this.wanfa = XiaobinTool.createBitmapByName("wanfa_png");
            this.addChild(this.wanfa);
            this.wanfa.x = 320 - this.wanfa.width / 2;
            this.wanfa.y = 360;
            this.addEventListener("click_start_btn", this.createIngame, this);
            this.addEventListener("click_replay_btn", this.doReplay, this);
            this.timer = new egret.Timer(200, 1);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.createIngame, this)
        };
        c.prototype.doReplay = function() {
            null != this.ingame && (this.removeChild(this.ingame), this.ingame = null);
            this.timer.start()
        };
        c.prototype.createIngame = function() {
            //console.log("createIngame");
            null != this.logo && (this.removeChild(this.logo), this.logo = null);
            null != this.wanfa && (this.removeChild(this.wanfa), this.wanfa = null);
            null == this.ingame && (this.ingame = new InGame, this.addChild(this.ingame))
        };
        return c
    }(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";