var egret; (function(b) {
    function c(a) {
        for (var e = [], k = 1; k < arguments.length; k++) e[k - 1] = arguments[k];
        if (k = b.egret_string_code[a]) for (var m = e.length,
        d = 0; d < m; d++) k = k.replace("{" + d + "}", e[d]);
        return k
    }
    var d = function() {
        function a() {}
        a.fatal = function(e, a) {
            void 0 === a && (a = null);
            b.Logger.traceToConsole("Fatal", e, a);
            throw Error(b.Logger.getTraceCode("Fatal", e, a));
        };
        a.info = function(e, a) {
            void 0 === a && (a = null);
            b.Logger.traceToConsole("Info", e, a)
        };
        a.warning = function(e, a) {
            void 0 === a && (a = null);
            b.Logger.traceToConsole("Warning", e, a)
        };
        a.fatalWithErrorId = function(e) {
            for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
            k.unshift(e); (k = c.apply(null, k)) ? a.fatal(k) : a.warning(c( - 1, e))
        };
        a.infoWithErrorId = function(e) {
            for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
            k.unshift(e); (k = c.apply(null, k)) ? a.info(k) : a.warning(c( - 1, e))
        };
        a.warningWithErrorId = function(e) {
            for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
            k.unshift(e); (k = c.apply(null, k)) ? a.warning(k) : a.warning(c( - 1, e))
        };
        a.traceToConsole = function(e, a, m) {
            console.log(b.Logger.getTraceCode(e, a, m))
        };
        a.getTraceCode = function(e, a, b) {
            return "[" + e + "]" + a + (null == b ? "": ":" + b)
        };
        return a
    } ();
    b.Logger = d;
    d.prototype.__class__ = "egret.Logger";
    b.egret_string_code = {};
    b.egret_string_code[ - 1] = "\u4e0d\u5b58\u5728\u7684stringId:{0}";
    b.egret_string_code[1E3] = "Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
    b.egret_string_code[1001] = "\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7";
    b.egret_string_code[1002] = "egret.Ticker\u662f\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u7684\u5355\u4f8b\uff0c\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u5b9e\u4f8b\u5316\uff0c\u8ba1\u65f6\u5668\u8bf7\u4f7f\u7528egret.Timer\u7c7b\uff01";
    b.egret_string_code[1003] = "Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout";
    b.egret_string_code[1004] = "ExternalInterface\u8c03\u7528\u4e86js\u6ca1\u6709\u6ce8\u518c\u7684\u65b9\u6cd5: {0}";
    b.egret_string_code[1005] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684blendMode: {0}";
    b.egret_string_code[1006] = "child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185";
    b.egret_string_code[1007] = "\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4";
    b.egret_string_code[1008] = "child\u672a\u88abaddChild\u5230\u8be5parent";
    b.egret_string_code[1009] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684\u9002\u914d\u6a21\u5f0f:{0}";
    b.egret_string_code[1010] = "addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a";
    b.egret_string_code[1011] = 'BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406:"{0}"';
    b.egret_string_code[1012] = "egret.BitmapTextSpriteSheet\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.BitmapFont\u4ee3\u66ff\u3002";
    b.egret_string_code[1013] = "TextField.setFocus \u6ca1\u6709\u5b9e\u73b0";
    b.egret_string_code[1014] = "Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316";
    b.egret_string_code[1015] = "xml not found!";
    b.egret_string_code[1016] = "{0}\u5df2\u7ecf\u5e9f\u5f03";
    b.egret_string_code[1017] = "JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: {0}\ndata: {1}";
    b.egret_string_code[1018] = "egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key={0}&value={1}";
    b.egret_string_code[1019] = "\u7f51\u7edc\u5f02\u5e38:{0}";
    b.egret_string_code[1020] = "\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668";
    b.egret_string_code[1021] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl";
    b.egret_string_code[1022] = "{0} ArgumentError";
    b.egret_string_code[1023] = "\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!";
    b.egret_string_code[1024] = "\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode";
    b.egret_string_code[1025] = "\u9047\u5230\u6587\u4ef6\u5c3e";
    b.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
    b.egret_string_code[1027] = "DecodingError";
    b.egret_string_code[1028] = "\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:{0}\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002";
    b.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
    b.egret_string_code[1030] = "\u8be5API\u5df2\u5e9f\u5f03";
    b.egret_string_code[2E3] = "RES.createGroup()\u4f20\u5165\u4e86\u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728\u7684\u952e\u503c: {0}";
    b.egret_string_code[2001] = 'RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4:"{0}"';
    b.egret_string_code[3E3] = "\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25: {0}";
    b.egret_string_code[3001] = "\u627e\u4e0d\u5230\u4e3b\u9898\u4e2d\u6240\u914d\u7f6e\u7684\u76ae\u80a4\u7c7b\u540d: {0}";
    b.egret_string_code[3002] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    b.egret_string_code[3003] = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
    b.egret_string_code[3004] = "addChild(){0}addElement()\u4ee3\u66ff";
    b.egret_string_code[3005] = "addChildAt(){0}addElementAt()\u4ee3\u66ff";
    b.egret_string_code[3006] = "removeChild(){0}removeElement()\u4ee3\u66ff";
    b.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()\u4ee3\u66ff";
    b.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()\u4ee3\u66ff";
    b.egret_string_code[3009] = "swapChildren(){0}swapElements()\u4ee3\u66ff";
    b.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()\u4ee3\u66ff";
    b.egret_string_code[3011] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
    b.egret_string_code[3012] = "\u6b64\u65b9\u6cd5\u5728Scroller\u7ec4\u4ef6\u5185\u4e0d\u53ef\u7528!";
    b.egret_string_code[3013] = "UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01";
    b.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
    b.egret_string_code[4001] = "Abstract class can not be instantiated!";
    b.egret_string_code[4002] = "Unnamed data!";
    b.egret_string_code[4003] = "Nonsupport version!";
    b.egret_string_code[3100] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket";
    b.egret_string_code[3101] = "\u8bf7\u5148\u8fde\u63a5WebSocket";
    b.getString = c
})(egret || (egret = {})); (function(b) {
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
            var k = this.objectPool; - 1 == k.indexOf(e) && (k.push(e), e.__recycle && e.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
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
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.prototype.call = function(a) {
            this.callback && this.callback.call(this.thisObject, a)
        };
        d.prototype.dispose = function() {
            this.thisObject = this.callback = null;
            d.__freeList.push(this)
        };
        d.push = function(a, e) {
            var k;
            k = d.__freeList.length ? d.__freeList.pop() : new b.RenderCommand;
            k.callback = a;
            k.thisObject = e;
            b.MainContext.__DRAW_COMMAND_LIST.push(k)
        };
        d.__freeList = [];
        return d
    } ();
    b.RenderCommand = c;
    c.prototype.__class__ = "egret.RenderCommand"
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
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this);
            this.data = null;
            this._type = "";
            this._cancelable = this._bubbles = !1;
            this._eventPhase = 2;
            this._target = this._currentTarget = null;
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
        a.prototype.__recycle = function() {
            this.data = this._target = this._currentTarget = null
        };
        a._dispatchByTarget = function(e, a, m, d, c, f) {
            void 0 === c && (c = !1);
            void 0 === f && (f = !1);
            var l = e.eventRecycler;
            l || (l = e.eventRecycler = new b.Recycler);
            var n = l.pop();
            n ? n._type = m: n = new e(m);
            n._bubbles = c;
            n._cancelable = f;
            if (d) for (var p in d) n[p] = d[p],
            null !== n[p] && (d[p] = null);
            e = a.dispatchEvent(n);
            l.push(n);
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
            a._dispatchByTarget(a, e, k, c, b)
        };
        a.ADDED_TO_STAGE = "addedToStage";
        a.REMOVED_FROM_STAGE = "removedFromStage";
        a.ADDED = "added";
        a.REMOVED = "removed";
        a.COMPLETE = "complete";
        a.LOOP_COMPLETE = "loopcomplete";
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
    var c = function(b) {
        function a(e, a, m) {
            void 0 === a && (a = !1);
            void 0 === m && (m = !1);
            b.call(this, e, a, m);
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
    } (b.Event);
    b.HTTPStatusEvent = c;
    c.prototype.__class__ = "egret.HTTPStatusEvent"
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
        function a(e, a, b, h, c, f, l, n, p, q) {
            void 0 === a && (a = !0);
            void 0 === b && (b = !0);
            void 0 === h && (h = 0);
            void 0 === c && (c = 0);
            void 0 === f && (f = 0);
            void 0 === l && (l = !1);
            void 0 === n && (n = !1);
            void 0 === q && (q = !1);
            d.call(this, e, a, b);
            this._stageY = this._stageX = 0;
            this.touchPointID = NaN;
            this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1;
            this.touchPointID = h;
            this._stageX = c;
            this._stageY = f;
            this.ctrlKey = l;
            this.altKey = n;
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
        a.dispatchTouchEvent = function(e, k, m, d, c, f, l, n, p) {
            void 0 === m && (m = 0);
            void 0 === d && (d = 0);
            void 0 === c && (c = 0);
            void 0 === f && (f = !1);
            void 0 === l && (l = !1);
            void 0 === n && (n = !1);
            void 0 === p && (p = !1);
            var q = b.Event._getPropertyData(a);
            q.touchPointID = m;
            q._stageX = d;
            q._stageY = c;
            q.ctrlKey = f;
            q.altKey = l;
            q.shiftKey = n;
            q.touchDown = p;
            b.Event._dispatchByTarget(a, e, k, q, !0, !0)
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
    } (b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
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
        function a(e, a, b, h, c) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            void 0 === h && (h = 0);
            void 0 === c && (c = 0);
            d.call(this, e, a, b);
            this.bytesTotal = this.bytesLoaded = 0;
            this.bytesLoaded = h;
            this.bytesTotal = c
        }
        __extends(a, d);
        a.dispatchProgressEvent = function(e, k, m, d) {
            void 0 === m && (m = 0);
            void 0 === d && (d = 0);
            b.Event._dispatchByTarget(a, e, k, {
                bytesLoaded: m,
                bytesTotal: d
            })
        };
        a.PROGRESS = "progress";
        a.SOCKET_DATA = "socketData";
        return a
    } (b.Event);
    b.ProgressEvent = c;
    c.prototype.__class__ = "egret.ProgressEvent"
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
            void 0 === e && (e = null);
            d.call(this);
            this._captureEventsMap = this._eventsMap = this._eventTarget = null;
            this._eventTarget = e ? e: this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, m, d, c) {
            void 0 === d && (d = !1);
            void 0 === c && (c = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            a || b.Logger.fatalWithErrorId(1010);
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var f = d[e];
            f || (f = d[e] = []);
            this._insertEventBin(f, a, m, c)
        };
        a.prototype._insertEventBin = function(e, a, b, d, c) {
            void 0 === c && (c = void 0);
            for (var f = -1,
            l = e.length,
            n = 0; n < l; n++) {
                var p = e[n];
                if (p.listener === a && p.thisObject === b && p.display === c) return ! 1; - 1 == f && p.priority < d && (f = n)
            }
            a = {
                listener: a,
                thisObject: b,
                priority: d
            };
            c && (a.display = c); - 1 != f ? e.splice(f, 0, a) : e.push(a);
            return ! 0
        };
        a.prototype.removeEventListener = function(e, a, b, d) {
            void 0 === d && (d = !1);
            if (d = d ? this._captureEventsMap: this._eventsMap) {
                var c = d[e];
                c && (this._removeEventBin(c, a, b), 0 == c.length && delete d[e])
            }
        };
        a.prototype._removeEventBin = function(e, a, b, d) {
            void 0 === d && (d = void 0);
            for (var c = e.length,
            f = 0; f < c; f++) {
                var l = e[f];
                if (l.listener === a && l.thisObject === b && l.display === d) return e.splice(f, 1),
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
            e._currentTarget = this._eventTarget;
            return this._notifyListener(e)
        };
        a.prototype._notifyListener = function(e) {
            var a = 1 == e._eventPhase ? this._captureEventsMap: this._eventsMap;
            if (!a) return ! 0;
            a = a[e._type];
            if (!a) return ! 0;
            var b = a.length;
            if (0 == b) return ! 0;
            for (var a = a.concat(), d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e);
                if (e._isPropagationImmediateStopped) break
            }
            return ! e._isDefaultPrevented
        };
        a.prototype.dispatchEventWith = function(e, a, m) {
            void 0 === a && (a = !1);
            b.Event.dispatchEvent(this, e, a, m)
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
            this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null;
            this.reuseEvent = new b.Event("")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.Ticker.getInstance().run();
            b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run();
            this._profileInstance = b.Profiler.getInstance()
        };
        a.prototype.renderLoop = function(e) {
            if (0 < b.__callLaterFunctionList.length) {
                var k = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var m = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var d = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            e = this.stage;
            var c = a.cachedEvent;
            c._type = b.Event.RENDER;
            this.dispatchEvent(c);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
            k && this.doCallLaterList(k, m, d);
            0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
            k = this.rendererContext;
            k.onRenderStart();
            k.clearScreen();
            a.__DRAW_COMMAND_LIST = [];
            a._renderLoopPhase = "updateTransform";
            e._updateTransform();
            a._renderLoopPhase = "draw";
            c._type = b.Event.FINISH_UPDATE_TRANSFORM;
            this.dispatchEvent(c);
            a.__use_new_draw ? this._draw(k) : e._draw(k);
            c._type = b.Event.FINISH_RENDER;
            this.dispatchEvent(c);
            this._profileInstance._isRunning && this._profileInstance._drawProfiler();
            k.onRenderFinish()
        };
        a.prototype._draw = function(e) {
            for (var k = a.__DRAW_COMMAND_LIST,
            b = k.length,
            d = 0; d < b; d++) {
                var c = k[d];
                c.call(e);
                c.dispose()
            }
        };
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), m = a.length, d = 0; d < m; d++) {
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
            for (var a = b.DisplayObject._renderCallBackList.concat(), m = a.length, d = 0; d < m; d++) {
                var c = a[d],
                f = c.display;
                e._target = f;
                e._currentTarget = f;
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.doCallLaterList = function(e, a, b) {
            for (var d = e.length,
            c = 0; c < d; c++) {
                var f = e[c];
                null != f && f.apply(a[c], b[c])
            }
        };
        a.prototype.doCallAsyncList = function() {
            var e = b.__callAsyncFunctionList.concat(),
            a = b.__callAsyncThisList.concat(),
            m = b.__callAsyncArgsList.concat();
            b.__callAsyncFunctionList.length = 0;
            b.__callAsyncThisList.length = 0;
            for (var d = b.__callAsyncArgsList.length = 0; d < e.length; d++) {
                var c = e[d];
                null != c && c.apply(a[d], m[d])
            }
        };
        a.deviceType = null;
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        a.RUNTIME_HTML5 = "runtime_html5";
        a.RUNTIME_NATIVE = "runtime_native";
        a.__DRAW_COMMAND_LIST = [];
        a.__use_new_draw = !0;
        a.cachedEvent = new b.Event("");
        return a
    } (b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return ! 0;
    var b = navigator.userAgent.toLowerCase();
    return - 1 != b.indexOf("mobile") || -1 != b.indexOf("android")
},
testRuntimeType = function() {
    return this.navigator ? !0 : !1
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5: egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType; (function(b) {
    var c = function() {
        function d() {
            this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._txt = null;
            this._tick = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0;
            this._isRunning = !1
        }
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        d.prototype.stop = function() {
            if (this._isRunning) {
                this._isRunning = !1;
                b.Ticker.getInstance().unregister(this.update, this);
                var a = b.MainContext.instance;
                a.removeEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
                a.removeEventListener(b.Event.RENDER, this.onStartRender, this);
                a.removeEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
                a.removeEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
            }
        };
        d.prototype.run = function() {
            null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._parent = new b.DisplayObjectContainer);
            if (!this._isRunning) {
                this._isRunning = !0;
                b.Ticker.getInstance().register(this.update, this);
                var a = b.MainContext.instance;
                a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
                a.addEventListener(b.Event.RENDER, this.onStartRender, this);
                a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
                a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
            }
        };
        d.prototype._drawProfiler = function() {
            this._txt._updateTransform();
            this._txt._draw(b.MainContext.instance.rendererContext)
        };
        d.prototype._setTxtFontSize = function(a) {
            this._txt.size = a
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
                a = (this._preDrawCount - 3).toString();
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
            d.call(this);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = [];
            null != a.instance && b.Logger.fatalWithErrorId(1002)
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.__START_TIME = (new Date).getTime();
            b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        a.prototype.update = function(e) {
            if (!this._paused) {
                var a = this.callBackList.concat(),
                b = a.length;
                e *= this._timeScale;
                e *= this._timeScale;
                for (var d = 0; d < b; d++) {
                    var c = a[d];
                    c.listener.call(c.thisObject, e)
                }
            }
        };
        a.prototype.register = function(e, a, b) {
            void 0 === b && (b = 0);
            this._insertEventBin(this.callBackList, e, a, b)
        };
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        };
        a.prototype.setTimeout = function(e, a, m) {
            for (var d = [], c = 3; c < arguments.length; c++) d[c - 3] = arguments[c];
            b.Logger.warningWithErrorId(1003);
            b.setTimeout.apply(null, [e, a, m].concat(d))
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
            void 0 === a && (a = 0);
            d.call(this);
            this._currentCount = 0;
            this._running = !1;
            this.lastTime = 0;
            this.delay = e;
            this.repeatCount = a
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "currentCount", {
            get: function() {
                return this._currentCount
            },
            enumerable: !0,
            configurable: !0
        });
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
            this._running || (this.lastTime = b.getTimer(), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
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
    function c(b) {
        b = b.prototype ? b.prototype: Object.getPrototypeOf(b);
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
        b = b.prototype ? b.prototype: Object.getPrototypeOf(b);
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
})(egret || (egret = {})); (function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b) return null;
        var a = c[b];
        if (a) return a;
        for (var e = b.split("."), k = e.length, a = __global, m = 0; m < k; m++) if (a = a[e[m]], !a) return null;
        return c[b] = a
    }
})(egret || (egret = {}));
var __global = __global || this; (function(b) {
    function c(e) {
        for (var a in d) {
            var b = d[a];
            b.delay -= e;
            0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete d[a])
        }
    }
    var d = {},
    a = 0;
    b.setTimeout = function(e, k, m) {
        for (var h = [], g = 3; g < arguments.length; g++) h[g - 3] = arguments[g];
        h = {
            listener: e,
            thisObject: k,
            delay: m,
            params: h
        };
        0 == a && b.Ticker.getInstance().register(c, null);
        a++;
        d[a] = h;
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
            var l = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var n = this.a,
                p = this.c;
                this.a = n * e + this.b * b;
                this.b = n * a + this.b * d;
                this.c = p * e + this.d * b;
                this.d = p * a + this.d * d
            }
            this.tx = l * e + this.ty * b + c;
            this.ty = l * a + this.ty * d + f;
            return this
        };
        a.prototype.append = function(e, a, b, d, c, f) {
            var l = this.a,
            n = this.b,
            p = this.c,
            q = this.d;
            if (1 != e || 0 != a || 0 != b || 1 != d) this.a = e * l + a * p,
            this.b = e * n + a * q,
            this.c = b * l + d * p,
            this.d = b * n + d * q;
            this.tx = c * l + f * p + this.tx;
            this.ty = c * n + f * q + this.ty;
            return this
        };
        a.prototype.prependTransform = function(e, a, m, d, c, f, l, n, p) {
            if (c % 360) {
                var q = b.NumberUtils.cos(c);
                c = b.NumberUtils.sin(c)
            } else q = 1,
            c = 0;
            if (n || p) this.tx -= n,
            this.ty -= p;
            f || l ? (this.prepend(q * m, c * m, -c * d, q * d, 0, 0), this.prepend(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), e, a)) : this.prepend(q * m, c * m, -c * d, q * d, e, a);
            return this
        };
        a.prototype.appendTransform = function(e, a, m, d, c, f, l, n, p) {
            if (c % 360) {
                var q = b.NumberUtils.cos(c);
                c = b.NumberUtils.sin(c)
            } else q = 1,
            c = 0;
            f || l ? (this.append(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), e, a), this.append(q * m, c * m, -c * d, q * d, 0, 0)) : this.append(q * m, c * m, -c * d, q * d, e, a);
            if (n || p) this.tx -= n * this.a + p * this.c,
            this.ty -= n * this.b + p * this.d;
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
        a.prototype.identity = function() {
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
        a.transformCoords = function(e, a, m) {
            var d = b.Point.identity;
            d.x = e.a * a + e.c * m + e.tx;
            d.y = e.d * m + e.b * a + e.ty;
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
        function a(e, a, m, c) {
            void 0 === e && (e = 0);
            void 0 === a && (a = 0);
            void 0 === m && (m = 0);
            void 0 === c && (c = 0);
            b.call(this);
            this.x = e;
            this.y = a;
            this.width = m;
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
            return Math.max(this.x, e.x) <= Math.min(this.right, e.right) && Math.max(this.y, e.y) <= Math.min(this.bottom, e.bottom)
        };
        a.prototype.setEmpty = function() {
            this.height = this.width = this.y = this.x = 0
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
            null == a && b.Logger.infoWithErrorId(1015);
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
            k && (b.Logger.warningWithErrorId(1001), this._setResolutionPolicy(k))
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
    } (b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function e(a, b) {
            this._containerStrategy = a;
            this._contentStrategy = b
        }
        e.prototype.init = function(e) {
            this._containerStrategy.init(e);
            this._contentStrategy.init(e)
        };
        e.prototype._apply = function(e, a, b) {
            this._containerStrategy._apply(e, a, b);
            this._contentStrategy._apply(e, a, b)
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
        a.prototype._apply = function(e, a, b) {};
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
        e.prototype._apply = function(e, a, b) {};
        e.prototype.setEgretSize = function(e, a, k, m, d, p) {
            void 0 === p && (p = 0);
            b.StageDelegate.getInstance()._stageWidth = Math.round(e);
            b.StageDelegate.getInstance()._stageHeight = Math.round(a);
            e = document.getElementById(c.canvas_div_name);
            e.style.width = k + "px";
            e.style.height = m + "px";
            e.style.top = p + "px"
        };
        e.prototype._getClientWidth = function() {
            return document.documentElement.clientWidth
        };
        e.prototype._getClientHeight = function() {
            return document.documentElement.clientHeight
        };
        return e
    } ();
    b.ContentStrategy = d;
    d.prototype.__class__ = "egret.ContentStrategy";
    var k = function(e) {
        function a(b) {
            void 0 === b && (b = 0);
            e.call(this);
            this.minWidth = NaN;
            this.minWidth = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            a = this._getClientWidth();
            var k = this._getClientHeight(),
            m = k / b,
            d = a / m,
            c = 1;
            0 != this.minWidth && (c = Math.min(1, d / this.minWidth));
            this.setEgretSize(d / c, b, a, k * c);
            e._scaleX = m * c;
            e._scaleY = m * c
        };
        return a
    } (d);
    b.FixedHeight = k;
    k.prototype.__class__ = "egret.FixedHeight";
    k = function(e) {
        function a(b) {
            void 0 === b && (b = 0);
            e.call(this);
            this.minHeight = NaN;
            this.minHeight = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            b = this._getClientWidth();
            var k = this._getClientHeight(),
            m = b / a,
            d = k / m,
            c = 1;
            0 != this.minHeight && (c = Math.min(1, d / this.minHeight));
            this.setEgretSize(a, d / c, b * c, k, b * (1 - c) / 2);
            e._scaleX = m * c;
            e._scaleY = m * c
        };
        return a
    } (d);
    b.FixedWidth = k;
    k.prototype.__class__ = "egret.FixedWidth";
    k = function(e) {
        function a(b, k) {
            e.call(this);
            this.width = b;
            this.height = k
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            b = this.width;
            var k = this.height,
            m = b / a;
            this.setEgretSize(a, k / m, b, k);
            e._scaleX = m;
            e._scaleY = m
        };
        return a
    } (d);
    b.FixedSize = k;
    k.prototype.__class__ = "egret.FixedSize";
    k = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            this.setEgretSize(a, b, a, b, Math.floor((a - a) / 2));
            e._scaleX = 1;
            e._scaleY = 1
        };
        return a
    } (d);
    b.NoScale = k;
    k.prototype.__class__ = "egret.NoScale";
    k = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            var k = this._getClientWidth(),
            m = this._getClientHeight(),
            d = k,
            c = m,
            h = d / a < c / b ? d / a: c / b,
            d = a * h,
            c = b * h,
            k = Math.floor((k - d) / 2);
            e._offSetY = Math.floor((m - c) / 2);
            this.setEgretSize(a, b / 1, 1 * d, c, k, e._offSetY);
            e._scaleX = 1 * h;
            e._scaleY = 1 * h
        };
        return a
    } (d);
    b.ShowAll = k;
    k.prototype.__class__ = "egret.ShowAll";
    d = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, b) {
            var k = this._getClientWidth(),
            m = this._getClientHeight(),
            k = k / a,
            m = m / b;
            this.setEgretSize(a, b, a * k, b * m);
            e._scaleX = k;
            e._scaleY = m
        };
        return a
    } (d);
    b.FullScreen = d;
    d.prototype.__class__ = "egret.FullScreen"
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
        a.prototype.drawImage = function(e, k, m, d, c, f, l, n, p, q, r) {
            void 0 === r && (r = void 0);
            l = l || 0;
            n = n || 0;
            var t = k._texture_to_render;
            if (null != t && 0 != f && 0 != c && 0 != p && 0 != q) {
                var s = b.MainContext.instance.rendererContext._texture_scale_factor;
                c /= s;
                f /= s;
                if (0 != this._drawAreaList.length && b.MainContext.instance.rendererContext._cacheCanvasContext) {
                    s = b.DisplayObject.getTransformBounds(k._getSize(a.identityRectangle), k._worldTransform);
                    k._worldBounds.initialize(s.x, s.y, s.width, s.height);
                    s = this._originalData;
                    s.sourceX = m;
                    s.sourceY = d;
                    s.sourceWidth = c;
                    s.sourceHeight = f;
                    s.destX = l;
                    s.destY = n;
                    s.destWidth = p;
                    s.destHeight = q;
                    for (var u = this.getDrawAreaList(), w = 0; w < u.length; w++) if (!this.ignoreRender(k, u[w], s.destX, s.destY)) {
                        e.drawImage(t, m, d, c, f, l, n, p, q, r);
                        break
                    }
                } else e.drawImage(t, m, d, c, f, l, n, p, q, r)
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
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)], b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this)), e = this._defaultDrawAreaList) : e = this._drawAreaList;
            return e
        };
        a.prototype.onResize = function() {
            b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
            this._defaultDrawAreaList = null
        };
        a.identityRectangle = new b.Rectangle;
        return a
    } (b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, b) {
            void 0 === b && (b = "");
            a = this.getKey(a) + "#" + b;
            this.mapClassDic[a] = e
        };
        d.getKey = function(a) {
            return "string" == typeof a ? a: b.getQualifiedClassName(a)
        };
        d.mapValue = function(a, e, b) {
            void 0 === b && (b = "");
            a = this.getKey(a) + "#" + b;
            this.mapValueDic[a] = e
        };
        d.hasMapRule = function(a, e) {
            void 0 === e && (e = "");
            var b = this.getKey(a) + "#" + e;
            return this.mapValueDic[b] || this.mapClassDic[b] ? !0 : !1
        };
        d.getInstance = function(a, e) {
            void 0 === e && (e = "");
            var k = this.getKey(a) + "#" + e;
            if (this.mapValueDic[k]) return this.mapValueDic[k];
            var d = this.mapClassDic[k];
            if (d) return d = new d,
            this.mapValueDic[k] = d,
            delete this.mapClassDic[k],
            d;
            throw Error(b.getString(1028, k));
        };
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    } ();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        return function() {
            this.type = null
        }
    } ();
    b.Filter = c;
    c.prototype.__class__ = "egret.Filter"
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
            b.call(this);
            this.blurX = e;
            this.blurY = a;
            this.type = "blur"
        }
        __extends(a, b);
        return a
    } (b.Filter);
    b.BlurFilter = c;
    c.prototype.__class__ = "egret.BlurFilter"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
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
            this.__hack_local_matrix = null;
            this._sizeDirty = this._normalDirty = !0;
            this._parent = this._texture_to_render = this.name = this._sizeChangeCallTarget = this._sizeChangeCallBack = null;
            this._y = this._x = 0;
            this._scaleY = this._scaleX = 1;
            this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
            this._visible = !0;
            this._rotation = 0;
            this._alpha = 1;
            this._skewY = this._skewX = 0;
            this._touchEnabled = !1;
            this._scrollRect = this.blendMode = null;
            this._explicitHeight = this._explicitWidth = NaN;
            this._hasHeightSet = this._hasWidthSet = !1;
            this._worldBounds = this.mask = null;
            this.worldAlpha = 1;
            this.needDraw = this._isContainer = !1;
            this._hitTestPointTexture = null;
            this._rectH = this._rectW = 0;
            this._stage = null;
            this._cacheAsBitmap = !1;
            this.renderTexture = null;
            this._cacheDirty = !1;
            this._filter = this._colorTransform = null;
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
            var e = this._parent; ! e || e._hasWidthSet || e._hasHeightSet || e._setSizeDirty()
        };
        a.prototype._setSizeDirty = function() {
            this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == this._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
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
                b.NumberUtils.isNumber(e) && this._scaleX != e && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
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
                b.NumberUtils.isNumber(e) && this._anchorOffsetX != e && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
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
                b.NumberUtils.isNumber(e) && this._rotation != e && (this._rotation = e, this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._alpha != e && (this._alpha = e, this._setDirty(), this._setCacheDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewX", {
            get: function() {
                return this._skewX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._skewX != e && (this._skewX = e, this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewY", {
            get: function() {
                return this._skewY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && this._skewY != e && (this._skewY = e, this._setParentSizeDirty())
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
                var a = b.MainContext.__use_new_draw && this._isContainer;
                this._filter && !a && e.setGlobalFilter(this._filter);
                this._colorTransform && !a && e.setGlobalColorTransform(this._colorTransform.matrix);
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var d = this.mask || this._scrollRect;
                d && !a && e.pushMask(d);
                this._render(e);
                d && !a && e.popMask();
                this._colorTransform && !a && e.setGlobalColorTransform(null);
                this._filter && !a && e.setGlobalFilter(null)
            }
            this.destroyCacheBounds()
        };
        a.prototype._setGlobalFilter = function(e) {
            e.setGlobalFilter(this._filter)
        };
        a.prototype._removeGlobalFilter = function(e) {
            e.setGlobalFilter(null)
        };
        a.prototype._setGlobalColorTransform = function(e) {
            e.setGlobalColorTransform(this._colorTransform.matrix)
        };
        a.prototype._removeGlobalColorTransform = function(e) {
            e.setGlobalColorTransform(null)
        };
        a.prototype._pushMask = function(e) {
            e.setTransform(this._worldTransform);
            var a = this.mask || this._scrollRect;
            a && e.pushMask(a)
        };
        a.prototype._popMask = function(e) {
            e.popMask()
        };
        a.prototype.drawCacheTexture = function(e) {
            if (!1 == this._cacheAsBitmap) return ! 1;
            var a = this.getBounds(b.Rectangle.identity),
            d = b.MainContext.instance.rendererContext._texture_scale_factor;
            if (this._cacheDirty || null == this._texture_to_render || Math.round(a.width) != Math.round(this._texture_to_render._sourceWidth * d) || Math.round(a.height) != Math.round(this._texture_to_render._sourceHeight * d)) this._cacheDirty = !this._makeBitmapCache();
            if (null == this._texture_to_render) return ! 1;
            var c = this._texture_to_render,
            a = c._offsetX,
            d = c._offsetY,
            g = c._textureWidth,
            c = c._textureHeight;
            this._updateTransform();
            e.setAlpha(this.worldAlpha, this.blendMode);
            e.setTransform(this._worldTransform);
            b.RenderFilter.getInstance().drawImage(e, this, 0, 0, g, c, a, d, g, c);
            return ! 0
        };
        a.prototype._updateTransform = function() {
            this._calculateWorldTransform();
            "updateTransform" == b.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || this._cacheAsBitmap) && b.RenderCommand.push(this._draw, this)
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
        a.prototype.getBounds = function(e, a) {
            void 0 === a && (a = !0);
            var d = this._measureBounds(),
            c = this._hasWidthSet ? this._explicitWidth: d.width,
            g = this._hasHeightSet ? this._explicitHeight: d.height;
            this._rectW = d.width;
            this._rectH = d.height;
            this._clearSizeDirty();
            var f = d.x,
            d = d.y,
            l = 0,
            n = 0;
            a && (0 != this._anchorX || 0 != this._anchorY ? (l = c * this._anchorX, n = g * this._anchorY) : (l = this._anchorOffsetX, n = this._anchorOffsetY));
            this._cacheBounds.initialize(f - l, d - n, c, g);
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
                } else e.prependTransform(k._x, k._y, k._scaleX, k._scaleY, k._rotation, k._skewX, k._skewY, k._anchorOffsetX, k._anchorOffsetY);
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
            d = this.getBounds(b.Rectangle.identity, !1);
            e -= d.x;
            a -= d.y;
            return 0 <= e && e < d.width && 0 <= a && a < d.height ? this.mask || this._scrollRect ? this._scrollRect && e > this._scrollRect.x && a > this._scrollRect.y && e < this._scrollRect.x + this._scrollRect.width && a < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this: null: this: null
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
            if (this._hasHeightSet && this._hasWidthSet) return this._clearSizeDirty(),
            e.initialize(0, 0, this._explicitWidth, this._explicitHeight);
            this._measureSize(e);
            this._hasWidthSet && (e.width = this._explicitWidth);
            this._hasHeightSet && (e.height = this._explicitHeight);
            return e
        };
        a.prototype._measureSize = function(e) {
            this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW, e.height = this._rectH);
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
            if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity),
            e = this._anchorX * a.width,
            a = this._anchorY * a.height;
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
        a.prototype.addEventListener = function(e, k, m, c, g) {
            void 0 === c && (c = !1);
            void 0 === g && (g = 0);
            d.prototype.addEventListener.call(this, e, k, m, c, g); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, k, m, g, this)
        };
        a.prototype.removeEventListener = function(e, k, m, c) {
            void 0 === c && (c = !1);
            d.prototype.removeEventListener.call(this, e, k, m, c); ((c = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(c ? a._enterFrameCallBackList: a._renderCallBackList, k, m, this)
        };
        a.prototype.dispatchEvent = function(e) {
            if (!e._bubbles) return d.prototype.dispatchEvent.call(this, e);
            for (var a = [], b = this; b;) a.push(b),
            b = b._parent;
            e._reset();
            this._dispatchPropagationEvent(e, a);
            return ! e._isDefaultPrevented
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            b = a.length;
            for (var d = 1,
            c = b - 1; 0 <= c; c--) {
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
            if (!e._isPropagationStopped && !e._isPropagationImmediateStopped) for (d = 3, c = 1; c < b && (f = a[c], e._currentTarget = f, e._target = this, e._eventPhase = d, f._notifyListener(e), !e._isPropagationStopped && !e._isPropagationImmediateStopped); c++);
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
            set: function(e) { (this._cacheAsBitmap = e) ? b.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._makeBitmapCache = function() {
            this.renderTexture || (this.renderTexture = new b.RenderTexture);
            var e = this.renderTexture.drawToTexture(this);
            this._texture_to_render = e ? this.renderTexture: null;
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
            f = e.height; (b || d) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -d);
            var l = c * a.a,
            c = c * a.b,
            n = f * a.c,
            f = f * a.d,
            p = a.tx,
            q = a.ty,
            r = p,
            t = p,
            s = q,
            u = q; (b = l + p) < r ? r = b: b > t && (t = b); (b = l + n + p) < r ? r = b: b > t && (t = b); (b = n + p) < r ? r = b: b > t && (t = b); (d = c + q) < s ? s = d: d > u && (u = d); (d = c + f + q) < s ? s = d: d > u && (u = d); (d = f + q) < s ? s = d: d > u && (u = d);
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
        Object.defineProperty(a.prototype, "filter", {
            get: function() {
                return this._filter
            },
            set: function(e) {
                this._filter = e
            },
            enumerable: !0,
            configurable: !0
        });
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    } (b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject";
    c = function() {
        function b() {
            this.matrix = null
        }
        b.prototype.updateColor = function(a, e, b, d, c, g, f, l) {};
        return b
    } ();
    b.ColorTransform = c;
    c.prototype.__class__ = "egret.ColorTransform"
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
            this._children = [];
            this._isContainer = !0
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
            var d = this._children.indexOf(e);
            0 > d && b.Logger.fatalWithErrorId(1006);
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
            if (0 > k || k > this._children.length) return b.Logger.fatalWithErrorId(1007),
            e;
            var c = e._parent;
            if (c == this) return this.doSetChildIndex(e, k),
            e;
            if (c) {
                var g = c._children.indexOf(e);
                0 <= g && c._doRemoveChild(g)
            }
            this._children.splice(k, 0, e);
            e._parentChanged(this);
            d && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage) for (e._onAddToStage(), k = a.__EVENT__ADD_TO_STAGE_LIST; 0 < k.length;) k.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
            e._setDirty();
            this._setSizeDirty();
            return e
        };
        a.prototype.removeChild = function(e) {
            e = this._children.indexOf(e);
            if (0 <= e) return this._doRemoveChild(e);
            b.Logger.fatalWithErrorId(1008);
            return null
        };
        a.prototype.removeChildAt = function(e) {
            if (0 <= e && e < this._children.length) return this._doRemoveChild(e);
            b.Logger.fatalWithErrorId(1007);
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
            b.Logger.fatalWithErrorId(1007);
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
            0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : b.Logger.fatalWithErrorId(1007)
        };
        a.prototype.swapChildren = function(e, a) {
            var d = this._children.indexOf(e),
            c = this._children.indexOf(a); - 1 == d || -1 == c ? b.Logger.fatalWithErrorId(1008) : this._swapChildrenAt(d, c)
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
            if (this._visible) {
                this._filter && b.RenderCommand.push(this._setGlobalFilter, this);
                this._colorTransform && b.RenderCommand.push(this._setGlobalColorTransform, this);
                var e = this.mask || this._scrollRect;
                e && b.RenderCommand.push(this._pushMask, this);
                d.prototype._updateTransform.call(this);
                if (!this._cacheAsBitmap || !this._texture_to_render) for (var a = 0,
                c = this._children.length; a < c; a++) this._children[a]._updateTransform();
                e && b.RenderCommand.push(this._popMask, this);
                this._colorTransform && b.RenderCommand.push(this._removeGlobalColorTransform, this);
                this._filter && b.RenderCommand.push(this._removeGlobalFilter, this)
            }
        };
        a.prototype._render = function(e) {
            if (!b.MainContext.__use_new_draw) for (var a = 0,
            d = this._children.length; a < d; a++) this._children[a]._draw(e)
        };
        a.prototype._measureBounds = function() {
            for (var e = 0,
            a = 0,
            d = 0,
            c = 0,
            g = this._children.length,
            f = 0; f < g; f++) {
                var l = this._children[f];
                if (l._visible) {
                    var n = l.getBounds(b.Rectangle.identity, !1),
                    p = n.x,
                    q = n.y,
                    r = n.width,
                    n = n.height,
                    l = l._getMatrix(),
                    l = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p, q, r, n), l),
                    p = l.x,
                    q = l.y,
                    r = l.width + l.x,
                    l = l.height + l.y;
                    if (p < e || 0 == f) e = p;
                    if (r > a || 0 == f) a = r;
                    if (q < d || 0 == f) d = q;
                    if (l > c || 0 == f) c = l
                }
            }
            return b.Rectangle.identity.initialize(e, d, a - e, c - d)
        };
        a.prototype.hitTest = function(e, a, c) {
            void 0 === c && (c = !1);
            var h;
            if (!this._visible) return null;
            if (this._scrollRect) {
                if (e < this._scrollRect.x || a < this._scrollRect.y || e > this._scrollRect.x + this._scrollRect.width || a > this._scrollRect.y + this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y > a || a > this.mask.y + this.mask.height)) return null;
            for (var g = this._children,
            f = this._touchChildren,
            l = g.length - 1; 0 <= l; l--) {
                var n = g[l],
                p = n._getMatrix(),
                q = n._scrollRect;
                q && p.append(1, 0, 0, 1, -q.x, -q.y);
                p.invert();
                p = b.Matrix.transformCoords(p, e, a);
                if (n = n.hitTest(p.x, p.y, !0)) {
                    if (!f) return this;
                    if (n._touchEnabled && f) return n;
                    h = this
                }
            }
            return h ? h: this._texture_to_render ? d.prototype.hitTest.call(this, e, a, c) : null
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var e = this._children.length,
            a = 0; a < e; a++) this._children[a]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var e = this._children.length,
            a = 0; a < e; a++) this._children[a]._onRemoveFromStage()
        };
        a.prototype.getChildByName = function(e) {
            for (var a = this._children,
            b = a.length,
            d, c = 0; c < b; c++) if (d = a[c], d.name == e) return d;
            return null
        };
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    } (b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NO_BORDER = "noBorder";
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        b.EXACT_FIT = "exactFit";
        return b
    } ();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode";
    c = function() {
        function b() {}
        b.FIXED_WIDTH = 1;
        b.FIXED_HEIGHT = 2;
        return b
    } ();
    b.NoBorderMode = c;
    c.prototype.__class__ = "egret.NoBorderMode"
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
            void 0 === e && (e = 480);
            void 0 === a && (a = 800);
            d.call(this);
            this._changeSizeDispatchFlag = !0;
            this._scaleMode = "";
            this._stageHeight = this._stageWidth = NaN;
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
            this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(b.Event.RESIZE))
        };
        a.prototype.setResolutionPolicy = function() {
            var e = a.SCALE_MODE_ENUM[this._scaleMode];
            if (!e) throw Error(b.getString(1024));
            var k = new b.EqualToFrame,
            e = new b.ResolutionPolicy(k, e);
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
                l = c._scrollRect;
                l && f.append(1, 0, 0, 1, -l.x, -l.y);
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
            for (var e = 0,
            a = this._children.length; e < a; e++) this._children[e]._updateTransform()
        };
        Object.defineProperty(a.prototype, "focus", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        });
        a.registerScaleMode = function(e, k, d) {
            a.SCALE_MODE_ENUM[e] && !d ? b.Logger.warningWithErrorId(1009, e) : a.SCALE_MODE_ENUM[e] = k
        };
        a._invalidateRenderFlag = !1;
        a.SCALE_MODE_ENUM = {};
        return a
    } (b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen;
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
            void 0 === e && (e = null);
            d.call(this);
            this._lastTouchPosition = new b.Point(0, 0);
            this._touchStartPosition = new b.Point(0, 0);
            this._scrollStarted = !1;
            this._lastTouchTime = 0;
            this._lastTouchEvent = null;
            this._velocitys = [];
            this._isVTweenPlaying = this._isHTweenPlaying = !1;
            this._vScrollTween = this._hScrollTween = null;
            this.scrollBeginThreshold = 10;
            this.scrollSpeed = 1;
            this._content = null;
            this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
            this._scrollTop = this._scrollLeft = 0;
            this._vCanScroll = this._hCanScroll = !1;
            this.touchBeginTimer = this.delayTouchBeginEvent = null;
            this.touchEnabled = !0;
            e && this.setContent(e)
        }
        __extends(a, d);
        a.prototype.setContent = function(e) {
            this._content !== e && (this.removeContent(), e && (this._content = e, d.prototype.addChild.call(this, e), this._addEvents()))
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
                e != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = e)
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
            if (!b || 0 != e || 0 != a) if (b || this._scrollTop != e || this._scrollLeft != a) {
                if (b) {
                    b = this._isOnTheEdge(!0);
                    var d = this._isOnTheEdge(!1);
                    this._scrollTop += b ? e / 2 : e;
                    this._scrollLeft += d ? a / 2 : a
                } else this._scrollTop = e,
                this._scrollLeft = a;
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
                this._scrollTop = Math.min(this._scrollTop, d > b ? d - b / 2 : b / 2)
            }
            a && (b = this.width, d = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, d > b ? d - b / 2 : b / 2))
        };
        a.prototype._setWidth = function(e) {
            this._explicitWidth != e && (d.prototype._setWidth.call(this, e), this._updateContentPosition())
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
            var e = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
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
            this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        a.prototype._removeEvents = function() {
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        a.prototype._onTouchBegin = function(e) { ! e._isDefaultPrevented && this._checkScrollPolicy() && (this._touchStartPosition.x = e.stageX, this._touchStartPosition.y = e.stageY, (this._isHTweenPlaying || this._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
        };
        a.prototype._onTouchBeginCapture = function(e) {
            var k = this._checkScrollPolicy();
            if (k) {
                for (var d = e.target; d != this;) {
                    if (d instanceof a && (k = d._checkScrollPolicy())) return;
                    d = d.parent
                }
                e.stopPropagation();
                this.delayTouchBeginEvent = this.cloneTouchEvent(e);
                this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100, 1), this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
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
            this.stage && this.dispatchPropagationEvent(e)
        };
        a.prototype.dispatchPropagationEvent = function(e) {
            for (var a = [], b = e._target; b;) a.push(b),
            b = b.parent;
            for (var d = this._content,
            c = 1;; c += 2) {
                b = a[c];
                if (!b || b === d) break;
                a.unshift(b)
            }
            this._dispatchPropagationEvent(e, a)
        };
        a.prototype._dispatchPropagationEvent = function(e, a, b) {
            for (var d = a.length,
            c = 0; c < d; c++) {
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
                if (!this._scrollStarted) {
                    var a = e.stageX - this._touchStartPosition.x,
                    b = e.stageY - this._touchStartPosition.y;
                    if (Math.sqrt(a * a + b * b) < this.scrollBeginThreshold) {
                        this._logTouchEvent(e);
                        return
                    }
                }
                this._scrollStarted = !0;
                this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
                this.touchChildren = !1;
                a = this._getPointChange(e);
                this.setScrollPosition(a.y, a.x, !0);
                this._calcVelocitys(e);
                this._logTouchEvent(e)
            }
        };
        a.prototype._onTouchEnd = function(e) {
            this.touchChildren = !0;
            this._scrollStarted = !1;
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
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
                x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - e.stageX,
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
            return this._content.explicitWidth || this._content.width
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
                for (var e = 0,
                b = 0,
                d = 0,
                c = 0; c < this._velocitys.length; c++) var g = this._velocitys[c],
                f = a.weight[c],
                e = e + g.x * f,
                b = b + g.y * f,
                d = d + f;
                this._velocitys.length = 0;
                0 >= this.scrollSpeed && (this.scrollSpeed = 1);
                e = e / d * this.scrollSpeed;
                b = b / d * this.scrollSpeed;
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
        a.prototype._onTweenFinished = function(e) {
            e == this._vScrollTween && (this._isVTweenPlaying = !1);
            e == this._hScrollTween && (this._isHTweenPlaying = !1); ! 1 == this._isHTweenPlaying && !1 == this._isVTweenPlaying && this._onScrollFinished()
        };
        a.prototype._onScrollStarted = function() {};
        a.prototype._onScrollFinished = function() {
            b.Tween.removeTweens(this);
            this._vScrollTween = this._hScrollTween = null;
            this._isVTweenPlaying = this._isHTweenPlaying = !1;
            this.dispatchEvent(new b.Event(b.Event.COMPLETE))
        };
        a.prototype.setScrollTop = function(e, a) {
            void 0 === a && (a = 0);
            var d = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
            if (0 == a) return this.scrollTop = d,
            null;
            var c = b.Tween.get(this).to({
                scrollTop: e
            },
            a, b.Ease.quartOut);
            d != e && c.to({
                scrollTop: d
            },
            300, b.Ease.quintOut);
            this._isVTweenPlaying = !0;
            this._vScrollTween = c;
            c.call(this._onTweenFinished, this, [c]);
            this._isHTweenPlaying || this._onScrollStarted();
            return c
        };
        a.prototype.setScrollLeft = function(e, a) {
            void 0 === a && (a = 0);
            var d = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
            if (0 == a) return this.scrollLeft = d,
            null;
            var c = b.Tween.get(this).to({
                scrollLeft: e
            },
            a, b.Ease.quartOut);
            d != e && c.to({
                scrollLeft: d
            },
            300, b.Ease.quintOut);
            this._isHTweenPlaying = !0;
            this._hScrollTween = c;
            c.call(this._onTweenFinished, this, [c]);
            this._isVTweenPlaying || this._onScrollStarted();
            return c
        };
        a.prototype.getAnimationDatas = function(e, a, b) {
            var d = Math.abs(e),
            c = 0,
            f = a + 500 * e;
            if (0 > f || f > b) for (f = a; Infinity != Math.abs(e) && 0.02 < Math.abs(e);) f += e,
            e = 0 > f || f > b ? 0.998 * e * 0.95 : 0.998 * e,
            c++;
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
        a.prototype.throwNotSupportedError = function() {
            throw Error(b.getString(1023));
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
        a.prototype.swapChildren = function(e, a) {
            this.throwNotSupportedError()
        };
        a.prototype.swapChildrenAt = function(e, a) {
            this.throwNotSupportedError()
        };
        a.prototype.hitTest = function(e, a, c) {
            void 0 === c && (c = !1);
            var h = d.prototype.hitTest.call(this, e, a, c);
            return h ? h: b.DisplayObject.prototype.hitTest.call(this, e, a, c)
        };
        a.weight = [1, 1.33, 1.66, 2, 2.33];
        return a
    } (b.DisplayObjectContainer);
    b.ScrollView = c;
    c.prototype.__class__ = "egret.ScrollView"
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
        function a(e) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.scale9Grid = this._texture = null;
            this.fillMode = "scale";
            e && (this._texture = e, this._setSizeDirty());
            this.needDraw = !0
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
            b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth: b._textureWidth, this._hasHeightSet ? this._explicitHeight: b._textureHeight, this)) : this._texture_to_render = null
        };
        a._drawBitmap = function(e, b, d, c) {
            var g = c._texture_to_render;
            if (g) {
                var f = g._textureWidth,
                l = g._textureHeight;
                if ("scale" == c.fillMode) {
                    var n = c.scale9Grid || g.scale9Grid;
                    if (n && f - n.width < b && l - n.height < d) a.drawScale9GridImage(e, c, n, b, d);
                    else {
                        var n = g._offsetX,
                        p = g._offsetY,
                        q = g._bitmapWidth || f,
                        r = g._bitmapHeight || l;
                        b /= f;
                        n = Math.round(n * b);
                        b = Math.round(q * b);
                        d /= l;
                        p = Math.round(p * d);
                        d = Math.round(r * d);
                        a.renderFilter.drawImage(e, c, g._bitmapX, g._bitmapY, q, r, n, p, b, d)
                    }
                } else a.drawRepeatImage(e, c, b, d, c.fillMode)
            }
        };
        a.drawRepeatImage = function(e, a, d, c, g) {
            var f = a._texture_to_render;
            if (f) {
                var l = f._textureWidth,
                n = f._textureHeight,
                p = f._bitmapX,
                q = f._bitmapY,
                l = f._bitmapWidth || l,
                n = f._bitmapHeight || n,
                r = f._offsetX,
                f = f._offsetY;
                b.RenderFilter.getInstance().drawImage(e, a, p, q, l, n, r, f, d, c, g)
            }
        };
        a.drawScale9GridImage = function(e, a, d, c, g) {
            var f = b.MainContext.instance.rendererContext._texture_scale_factor,
            l = a._texture_to_render;
            if (l && d) {
                var n = l._textureWidth,
                p = l._textureHeight,
                q = l._bitmapX,
                r = l._bitmapY,
                t = l._bitmapWidth || n,
                s = l._bitmapHeight || p;
                c -= n - t;
                g -= p - s;
                if (!e.drawImageScale9(l, q, r, t, s, l._offsetX, l._offsetY, c, g, d)) {
                    n = l._offsetX / f;
                    p = l._offsetY / f;
                    l = b.RenderFilter.getInstance();
                    d = b.Rectangle.identity.initialize(d.x - Math.round(n), d.y - Math.round(n), d.width, d.height);
                    n = Math.round(n);
                    p = Math.round(p);
                    d.y == d.bottom && (d.bottom < s ? d.bottom++:d.y--);
                    d.x == d.right && (d.right < t ? d.right++:d.x--);
                    var u = q + d.x / f,
                    w = q + d.right / f,
                    v = t - d.right,
                    y = r + d.y / f,
                    f = r + d.bottom / f,
                    x = s - d.bottom,
                    z = n + d.x,
                    A = p + d.y,
                    s = g - (s - d.bottom),
                    t = c - (t - d.right);
                    l.drawImage(e, a, q, r, d.x, d.y, n, p, d.x, d.y);
                    l.drawImage(e, a, u, r, d.width, d.y, z, p, t - d.x, d.y);
                    l.drawImage(e, a, w, r, v, d.y, n + t, p, c - t, d.y);
                    l.drawImage(e, a, q, y, d.x, d.height, n, A, d.x, s - d.y);
                    l.drawImage(e, a, u, y, d.width, d.height, z, A, t - d.x, s - d.y);
                    l.drawImage(e, a, w, y, v, d.height, n + t, A, c - t, s - d.y);
                    l.drawImage(e, a, q, f, d.x, x, n, p + s, d.x, g - s);
                    l.drawImage(e, a, u, f, d.width, x, z, p + s, t - d.x, g - s);
                    l.drawImage(e, a, w, f, v, x, n + t, p + s, c - t, g - s)
                }
            }
        };
        a.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.debug = !1;
        a.renderFilter = b.RenderFilter.getInstance();
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
            this._font = null;
            this._fontChanged = !1;
            this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = 0;
            this.textLinesChange = !0;
            this._lineHeights = [];
            this.cacheAsBitmap = !0
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._text != a && (this._textChanged = !0, this._text = a, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "font", {
            get: function() {
                return this._font
            },
            set: function(a) {
                this._font != a && (this._font = a, this._fontChanged = !0, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "spriteSheet", {
            get: function() {
                return this._font
            },
            set: function(a) {
                this.font = a
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSizeDirty = function() {
            d.prototype._setSizeDirty.call(this);
            this.textLinesChange = !0
        };
        a.prototype._render = function(e) {
            var k = this.getTextLines(),
            d = k.length;
            if (0 != d) {
                for (var c = this._font,
                g = c._getFirstCharHeight(), g = Math.ceil(g * a.EMPTY_FACTOR), f = 0, l = this._hasHeightSet ? this._explicitHeight: Number.POSITIVE_INFINITY, n = this._lineHeights, p = 0; p < d; p++) {
                    var q = n[p];
                    if (0 < p && f + q > l) break;
                    for (var r = k[p], t = r.length, s = 0, u = 0; u < t; u++) {
                        var w = r.charAt(u),
                        v = c.getTexture(w);
                        if (v) {
                            var w = v._bitmapWidth || v._textureWidth,
                            y = v._bitmapHeight || v._textureHeight;
                            this._texture_to_render = v;
                            b.RenderFilter.getInstance().drawImage(e, this, v._bitmapX, v._bitmapY, w, y, s + v._offsetX, f + v._offsetY, w, y);
                            s += v._textureWidth
                        } else " " == w ? s += g: b.Logger.warningWithErrorId(1011, w)
                    }
                    f += q
                }
                this._texture_to_render = null
            }
        };
        a.prototype._measureBounds = function() {
            return 0 == this.getTextLines().length ? b.Rectangle.identity.initialize(0, 0, 0, 0) : b.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY)
        };
        a.prototype.getTextLines = function() {
            if (!this.textLinesChange) return this._textLines;
            var e = [];
            this._textLines = e;
            this.textLinesChange = !1;
            var k = [];
            this._lineHeights = k;
            if (!this._text || !this._font) return e;
            for (var d = 0,
            c = 0,
            g = 0,
            f = 0,
            l = this._hasWidthSet,
            n = this._hasWidthSet ? this._explicitWidth: Number.POSITIVE_INFINITY, p = this._font, q = p._getFirstCharHeight(), r = Math.ceil(q * a.EMPTY_FACTOR), t = this._text.split(/(?:\r\n|\r|\n)/), s = t.length, u = !0, w = 0; w < s; w++) {
                for (var v = t[w], y = v.length, x = 0, z = 0, A = !0, C = 0; C < y; C++) {
                    var B = v.charAt(C),
                    E,
                    F = 0,
                    G = 0,
                    D = p.getTexture(B);
                    if (D) B = D._textureWidth,
                    E = D._textureHeight,
                    F = D._offsetX,
                    G = D._offsetY;
                    else if (" " == B) B = r,
                    E = q;
                    else {
                        b.Logger.warningWithErrorId(1011, B);
                        A && (A = !1);
                        continue
                    }
                    A && (A = !1, g = Math.min(F, g));
                    u && (f = Math.min(G, f));
                    l && 0 < C && z + B > n ? (e.push(v.substring(0, C)), k.push(x), c += x, d = Math.max(z, d), v = v.substring(C), y = v.length, C = 0, z = B, x = E) : (z += B, x = Math.max(E, x))
                }
                u && (u = !1);
                e.push(v);
                k.push(x);
                c += x;
                d = Math.max(z, d)
            }
            this._textWidth = d;
            this._textHeight = c;
            this._textOffsetX = g;
            this._textOffsetY = f;
            return e
        };
        a.EMPTY_FACTOR = 0.33;
        return a
    } (b.DisplayObject);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {
            this.fillStyleColor = this.strokeStyleColor = this.renderContext = this.commandQueue = this.canvasContext = null;
            this._dirty = !1;
            this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
            this.commandQueue = []
        }
        d.prototype.beginFill = function(a, e) {};
        d.prototype._setStyle = function(a) {};
        d.prototype.drawRect = function(a, e, b, d) {
            this.checkRect(a, e, b, d)
        };
        d.prototype.drawCircle = function(a, e, b) {
            this.checkRect(a - b, e - b, 2 * b, 2 * b)
        };
        d.prototype.drawRoundRect = function(a, e, b, d, c, g) {
            this.checkRect(a, e, b, d)
        };
        d.prototype.drawEllipse = function(a, e, b, d) {
            this.checkRect(a - b, e - d, 2 * b, 2 * d)
        };
        d.prototype.lineStyle = function(a, e, b, d, c, g, f, l) {};
        d.prototype.lineTo = function(a, e) {
            this.checkPoint(a, e)
        };
        d.prototype.curveTo = function(a, e, b, d) {
            this.checkPoint(a, e);
            this.checkPoint(b, d)
        };
        d.prototype.moveTo = function(a, e) {
            this.checkPoint(a, e)
        };
        d.prototype.clear = function() {
            this._maxY = this._maxX = this._minY = this._minX = 0
        };
        d.prototype.endFill = function() {};
        d.prototype._draw = function(a) {};
        d.prototype.checkRect = function(a, e, b, d) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, e);
            this._maxX = Math.max(this._maxX, a + b);
            this._maxY = Math.max(this._maxY, e + d)
        };
        d.prototype.checkPoint = function(a, e) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, e);
            this._maxX = Math.max(this._maxX, a);
            this._maxY = Math.max(this._maxY, e);
            this._lastX = a;
            this._lastY = e
        };
        d.prototype._measureBounds = function() {
            return b.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
        };
        return d
    } ();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics"; (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    })().prototype.__class__ = "egret.Command"
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
            this._graphics = null
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics, this.needDraw = !0);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a)
        };
        a.prototype._measureBounds = function() {
            var a = this._graphics;
            return a ? a._measureBounds() : d.prototype._measureBounds.call(this)
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
            d.call(this);
            this._graphics = null
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics, this.needDraw = !0);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a);
            d.prototype._render.call(this, a)
        };
        a.prototype._measureBounds = function() {
            for (var a = 0,
            d = 0,
            c = 0,
            h = 0,
            g = this._children.length,
            f = 0; f < g; f++) {
                var l = this._children[f];
                if (l._visible) {
                    var n = l.getBounds(b.Rectangle.identity, !1),
                    p = n.x,
                    q = n.y,
                    r = n.width,
                    n = n.height,
                    l = l._getMatrix(),
                    l = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p, q, r, n), l),
                    p = l.x,
                    q = l.y,
                    r = l.width + l.x,
                    l = l.height + l.y;
                    if (p < a || 0 == f) a = p;
                    if (r > d || 0 == f) d = r;
                    if (q < c || 0 == f) c = q;
                    if (l > h || 0 == f) h = l
                }
            }
            if (this._graphics) {
                g = this._graphics._measureBounds();
                p = g.x;
                q = g.y;
                r = g.width + g.x;
                l = g.height + g.y;
                if (p < a || 0 == f) a = p;
                if (r > d || 0 == f) d = r;
                if (q < c || 0 == f) c = q;
                if (l > h || 0 == f) h = l
            }
            return b.Rectangle.identity.initialize(a, c, d - a, h - c)
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
            this._inputEnabled = !1;
            this._type = "";
            this._inputUtils = null;
            this._text = "";
            this._displayAsPassword = !1;
            this._fontFamily = a.default_fontFamily;
            this._size = 30;
            this._bold = this._italic = !1;
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
            this._linesArr = [];
            this.needDraw = !0
        }
        __extends(a, d);
        a.prototype.isInput = function() {
            return this._type == b.TextFieldType.INPUT
        };
        a.prototype._setTouchEnabled = function(a) {
            d.prototype._setTouchEnabled.call(this, a);
            this.isInput() && (this._inputEnabled = !0)
        };
        Object.defineProperty(a.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(a) {
                this._setType(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setType = function(a) {
            this._type != a && (this._type = a, this._type == b.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new b.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
        };
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._getText()
            },
            set: function(a) {
                this._setText(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getText = function() {
            return this._type == b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
        };
        a.prototype._setSizeDirty = function() {
            d.prototype._setSizeDirty.call(this);
            this._isArrayChanged = !0
        };
        a.prototype._setTextDirty = function() {
            this._setSizeDirty()
        };
        a.prototype._setBaseText = function(a) {
            null == a && (a = "");
            this._isFlow = !1;
            this._text != a && (this._setTextDirty(), this._text = a, a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                text: a
            }]))
        };
        a.prototype._setText = function(a) {
            null == a && (a = "");
            this._setBaseText(a);
            this._inputUtils && this._inputUtils._setText(this._text)
        };
        Object.defineProperty(a.prototype, "displayAsPassword", {
            get: function() {
                return this._displayAsPassword
            },
            set: function(a) {
                this._setDisplayAsPassword(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setDisplayAsPassword = function(a) {
            this._displayAsPassword != a && (this._displayAsPassword = a, this._setTextDirty(), a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                text: a
            }]))
        };
        Object.defineProperty(a.prototype, "fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._setFontFamily(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setFontFamily = function(a) {
            this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
        };
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._setSize(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSize = function(a) {
            this._size != a && (this._setTextDirty(), this._size = a)
        };
        Object.defineProperty(a.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(a) {
                this._setItalic(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setItalic = function(a) {
            this._italic != a && (this._setTextDirty(), this._italic = a)
        };
        Object.defineProperty(a.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(a) {
                this._setBold(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setBold = function(a) {
            this._bold != a && (this._setTextDirty(), this._bold = a)
        };
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._setTextColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextColor = function(a) {
            this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = b.toColorString(a))
        };
        Object.defineProperty(a.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(a) {
                this._setStrokeColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStrokeColor = function(a) {
            this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = b.toColorString(a))
        };
        Object.defineProperty(a.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(a) {
                this._setStroke(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStroke = function(a) {
            this._stroke != a && (this._setTextDirty(), this._stroke = a)
        };
        Object.defineProperty(a.prototype, "textAlign", {
            get: function() {
                return this._textAlign
            },
            set: function(a) {
                this._setTextAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextAlign = function(a) {
            this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
        };
        Object.defineProperty(a.prototype, "verticalAlign", {
            get: function() {
                return this._verticalAlign
            },
            set: function(a) {
                this._setVerticalAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setVerticalAlign = function(a) {
            this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
        };
        Object.defineProperty(a.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(a) {
                this._setMaxChars(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMaxChars = function(a) {
            this._maxChars != a && (this._maxChars = a)
        };
        Object.defineProperty(a.prototype, "scrollV", {
            set: function(a) {
                this._scrollV = a;
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
        a.prototype._setSelection = function(a, b) {};
        Object.defineProperty(a.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(a) {
                this._setLineSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setLineSpacing = function(a) {
            this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
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
        Object.defineProperty(a.prototype, "multiline", {
            get: function() {
                return this._multiline
            },
            set: function(a) {
                this._setMultiline(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMultiline = function(a) {
            this._multiline = a;
            this._setDirty()
        };
        a.prototype.setFocus = function() {
            b.Logger.warningWithErrorId(1013)
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
            this._type == b.TextFieldType.INPUT ? this._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
        };
        a.prototype._render = function(a) {
            this.drawText(a);
            this._clearDirty()
        };
        a.prototype._measureBounds = function() {
            return this._getLinesArr() ? b.Rectangle.identity.initialize(0, 0, this._textMaxWidth, this._textMaxHeight + (this._numLines - 1) * this._lineSpacing) : b.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        Object.defineProperty(a.prototype, "textFlow", {
            get: function() {
                return this._textArr
            },
            set: function(a) {
                this._isFlow = !0;
                var b = "";
                null == a && (a = []);
                for (var d = 0; d < a.length; d++) b += a[d].text;
                this._displayAsPassword ? this._setBaseText(b) : (this._text = b, this.setMiddleStyle(a))
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.changeToPassText = function(a) {
            if (this._displayAsPassword) {
                for (var b = "",
                d = 0,
                c = a.length; d < c; d++) switch (a.charAt(d)) {
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
        a.prototype.setMiddleStyle = function(a) {
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
        a.prototype._getLinesArr = function() {
            if (!this._isArrayChanged) return this._linesArr;
            this._isArrayChanged = !1;
            var a = this._textArr,
            d = b.MainContext.instance.rendererContext;
            this._linesArr = [];
            this._textMaxWidth = this._textMaxHeight = 0;
            if (this._hasWidthSet && 0 == this._explicitWidth) return this._numLines = 0,
            [{
                width: 0,
                height: 0,
                elements: []
            }];
            var c = this._linesArr,
            h = 0,
            g = 0,
            f = 0,
            l;
            this._isFlow || d.setupFont(this);
            for (var n = 0; n < a.length; n++) {
                var p = a[n];
                p.style = p.style || {};
                for (var q = p.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < q.length; r++) {
                    null == c[f] && (l = {
                        width: 0,
                        height: 0,
                        elements: []
                    },
                    c[f] = l, g = h = 0);
                    g = this._type == b.TextFieldType.INPUT ? this._size: Math.max(g, p.style.size || this._size);
                    if ("" != q[r]) {
                        this._isFlow && d.setupFont(this, p.style);
                        var t = d.measureText(q[r]);
                        if (this._hasWidthSet) if (h + t <= this._explicitWidth) l.elements.push({
                            width: t,
                            text: q[r],
                            style: p.style
                        }),
                        h += t;
                        else {
                            for (var s = 0,
                            u = 0,
                            w = q[r], v = w.length; s < v; s++) {
                                t = d.measureText(w.charAt(s));
                                if (h + t > this._explicitWidth && 0 != h + s) break;
                                u += t;
                                h += t
                            }
                            0 < s && (l.elements.push({
                                width: u,
                                text: w.substring(0, s),
                                style: p.style
                            }), q[r] = w.substring(s));
                            r--
                        } else h += t,
                        l.elements.push({
                            width: t,
                            text: q[r],
                            style: p.style
                        })
                    }
                    if (r < q.length - 1) {
                        l.width = h;
                        l.height = g;
                        this._textMaxWidth = Math.max(this._textMaxWidth, h);
                        this._textMaxHeight += g;
                        if (this._type == b.TextFieldType.INPUT && !this._multiline) return this._numLines = c.length,
                        c;
                        f++
                    }
                }
                n == a.length - 1 && l && (l.width = h, l.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, h), this._textMaxHeight += g)
            }
            this._numLines = c.length;
            return c
        };
        a.prototype.drawText = function(a) {
            var d = this._getLinesArr();
            if (d) {
                this._isFlow || a.setupFont(this);
                var c = this._hasWidthSet ? this._explicitWidth: this._textMaxWidth,
                h = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
                g = 0,
                f = 0;
                if (this._hasHeightSet) if (h < this._explicitHeight) {
                    var l = 0;
                    this._verticalAlign == b.VerticalAlign.MIDDLE ? l = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (l = 1);
                    g += l * (this._explicitHeight - h)
                } else h > this._explicitHeight && (f = Math.max(this._scrollV - 1, 0), f = Math.min(this._numLines - 1, f));
                g = Math.round(g);
                h = 0;
                this._textAlign == b.HorizontalAlign.CENTER ? h = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (h = 1);
                for (l = 0; f < this._numLines; f++) {
                    var n = d[f],
                    p = n.height,
                    g = g + p / 2;
                    if (0 != f && this._hasHeightSet && g > this._explicitHeight) break;
                    for (var l = Math.round((c - n.width) * h), q = 0; q < n.elements.length; q++) {
                        var r = n.elements[q],
                        t = r.style.size || this._size;
                        this._type == b.TextFieldType.INPUT ? a.drawText(this, r.text, l, g + (p - t) / 2, r.width) : (this._isFlow && a.setupFont(this, r.style), a.drawText(this, r.text, l, g + (p - t) / 2, r.width, r.style));
                        l += r.width
                    }
                    g += p / 2 + this._lineSpacing
                }
            }
        };
        a.default_fontFamily = "Arial";
        return a
    } (b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.resutlArr = []
        }
        b.prototype.parser = function(a) {
            this.stackArray = [];
            this.resutlArr = [];
            for (var e = 0,
            b = a.length; e < b;) {
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
                e.push(["&amp;", "&"]);
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
            b[1] && (b[1] = b[1].replace(/(\"|\')/g, ""));
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
    } ();
    b.HtmlTextParser = c;
    c.prototype.__class__ = "egret.HtmlTextParser"
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
            this.bitmapData = this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0;
            this._textureMap = {};
            var b = a.bitmapData;
            this.bitmapData = b;
            this._sourceWidth = b.width;
            this._sourceHeight = b.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(a, d);
        a.prototype.getTexture = function(a) {
            return this._textureMap[a]
        };
        a.prototype.createTexture = function(a, d, c, h, g, f, l, n, p) {
            void 0 === f && (f = 0);
            void 0 === l && (l = 0);
            "undefined" === typeof n && (n = f + h);
            "undefined" === typeof p && (p = l + g);
            var q = new b.Texture,
            r = b.MainContext.instance.rendererContext._texture_scale_factor;
            q._bitmapData = this.bitmapData;
            q._bitmapX = this._bitmapX + d;
            q._bitmapY = this._bitmapY + c;
            q._bitmapWidth = h * r;
            q._bitmapHeight = g * r;
            q._offsetX = f;
            q._offsetY = l;
            q._textureWidth = n * r;
            q._textureHeight = p * r;
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
            this._isFocus = !1;
            this._text = null;
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
            this.stageText.addEventListener("blur", this.onBlurHandler, this);
            this.stageText.addEventListener("focus", this.onFocusHandler, this);
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.addEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this)
        };
        a.prototype._removeStageText = function() {
            this.stageText._remove();
            this.stageText._removeListeners();
            this._text._inputEnabled || (this._text._touchEnabled = !1);
            this.stageText.removeEventListener("blur", this.onBlurHandler, this);
            this.stageText.removeEventListener("focus", this.onFocusHandler, this);
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
            b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this)
        };
        a.prototype.onResize = function() {
            this._isFirst = !0
        };
        a.prototype._getText = function() {
            return this.stageText._getText()
        };
        a.prototype._setText = function(a) {
            this.stageText._setText(a)
        };
        a.prototype.onFocusHandler = function(a) {
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
            h = this._text._worldTransform.d,
            g = this._text._worldTransform.tx,
            f = this._text._worldTransform.ty;
            this._text._updateBaseTransform();
            var l = this._text._worldTransform;
            if (this._isFirst || a != l.a || d != l.b || c != l.c || h != l.d || g != l.tx || f != l.ty) {
                this._isFirst = !1;
                a = this._text.localToGlobal();
                this.stageText.changePosition(a.x, a.y);
                var n = this;
                b.callLater(function() {
                    n.stageText._setScale(n._text._worldTransform.a, n._text._worldTransform.d)
                },
                this)
            }
        };
        a.prototype._updateProperties = function() {
            var a = this._text._stage;
            if (null == a) this.stageText._setVisible(!1);
            else {
                for (var d = this._text,
                c = d._visible; c;) {
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
            this.stageText._setTextType(this._text._displayAsPassword ? "password": "text");
            this.stageText._setText(this._text._text);
            this.stageText._resetStageText();
            this._updateTransform()
        };
        return a
    } (b.HashObject);
    b.InputController = c;
    c.prototype.__class__ = "egret.InputController"
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
        function a(a, k) {
            b.call(this, a);
            this.firstCharHeight = 0;
            "string" == typeof k ? this.charList = this.parseConfig(k) : k && k.hasOwnProperty("frames") ? this.charList = k.frames: this.charList = {}
        }
        __extends(a, b);
        a.prototype.getTexture = function(a) {
            var b = this._textureMap[a];
            if (!b) {
                b = this.charList[a];
                if (!b) return null;
                b = this.createTexture(a, b.x, b.y, b.w, b.h, b.offX, b.offY, b.sourceW, b.sourceH);
                this._textureMap[a] = b
            }
            return b
        };
        a.prototype._getFirstCharHeight = function() {
            if (0 == this.firstCharHeight) for (var a in this.charList) {
                var b = this.charList[a];
                if (b) {
                    var d = b.sourceH;
                    void 0 === d && (d = b.h, void 0 === d && (d = 0), b = b.offY, void 0 === b && (b = 0), d += b);
                    if (! (0 >= d)) {
                        this.firstCharHeight = d;
                        break
                    }
                }
            }
            return this.firstCharHeight
        };
        a.prototype.parseConfig = function(a) {
            a = a.split("\r\n").join("\n");
            a = a.split("\n");
            for (var b = this.getConfigByKey(a[3], "count"), d = {},
            c = 4; c < 4 + b; c++) {
                var g = a[c],
                f = String.fromCharCode(this.getConfigByKey(g, "id")),
                l = {};
                d[f] = l;
                l.x = this.getConfigByKey(g, "x");
                l.y = this.getConfigByKey(g, "y");
                l.w = this.getConfigByKey(g, "width");
                l.h = this.getConfigByKey(g, "height");
                l.offX = this.getConfigByKey(g, "xoffset");
                l.offY = this.getConfigByKey(g, "yoffset")
            }
            return d
        };
        a.prototype.getConfigByKey = function(a, b) {
            for (var d = a.split(" "), c = 0, g = d.length; c < g; c++) {
                var f = d[c];
                if (b == f.substring(0, b.length)) return d = f.substring(b.length + 1),
                parseInt(d)
            }
            return 0
        };
        return a
    } (b.SpriteSheet);
    b.BitmapFont = c;
    c.prototype.__class__ = "egret.BitmapFont"
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
        function a(a, k) {
            d.call(this, a, k);
            b.Logger.warningWithErrorId(1012)
        }
        __extends(a, d);
        return a
    } (b.BitmapFont);
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
    var c = function(d) {
        function a(a) {
            d.call(this);
            this._isAddedToStage = !1;
            this._frames = this._movieClipData = this._textureToRender = null;
            this._totalFrames = 0;
            this._frameLabels = null;
            this._frameIntervalTime = 0;
            this._eventPool = null;
            this._isPlaying = !1;
            this._isStopped = !0;
            this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0;
            this._setMovieClipData(a);
            this.needDraw = !0
        }
        __extends(a, d);
        a.prototype._init = function() {
            this._reset();
            var a = this._movieClipData;
            a && a._isDataValid() && (this._frames = a.frames, this._totalFrames = a.numFrames, this._frameLabels = a.labels, this._frameIntervalTime = 1E3 / a.frameRate, this._initFrame())
        };
        a.prototype._reset = function() {
            this._frames = null;
            this._playTimes = 0;
            this._isPlaying = !1;
            this.setIsStopped(!0);
            this._currentFrameNum = 0;
            this._nextFrameNum = 1;
            this._passedTime = this._displayedKeyFrameNum = 0;
            this._eventPool = []
        };
        a.prototype._initFrame = function() {
            this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
        };
        a.prototype._render = function(e) {
            var b = this._textureToRender;
            if (this._texture_to_render = b) {
                var d = Math.round(b._offsetX),
                c = Math.round(b._offsetY),
                g = b._bitmapWidth || b._textureWidth,
                f = b._bitmapHeight || b._textureHeight,
                l = Math.round(g),
                n = Math.round(f);
                a.renderFilter.drawImage(e, this, b._bitmapX, b._bitmapY, g, f, d, c, l, n)
            }
        };
        a.prototype._measureBounds = function() {
            var a = this._textureToRender;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            this._isAddedToStage = !0;
            this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            this._isAddedToStage = !1;
            this.setIsStopped(!0)
        };
        a.prototype._getFrameLabelByName = function(a, b) {
            void 0 === b && (b = !1);
            b && (a = a.toLowerCase());
            var d = this._frameLabels;
            if (d) for (var c = null,
            g = 0; g < d.length; g++) if (c = d[g], b ? c.name.toLowerCase() === a: c.name === a) return c;
            return null
        };
        a.prototype._getFrameLabelByFrame = function(a) {
            var b = this._frameLabels;
            if (b) for (var d = null,
            c = 0; c < b.length; c++) if (d = b[c], d.frame === a) return d;
            return null
        };
        a.prototype._getFrameLabelForFrame = function(a) {
            var b = null,
            d = null,
            c = this._frameLabels;
            if (c) for (var g = 0; g < c.length; g++) {
                d = c[g];
                if (d.frame > a) break;
                b = d
            }
            return b
        };
        a.prototype.play = function(a) {
            void 0 === a && (a = 0);
            this._isPlaying = !0;
            this.setPlayTimes(a);
            1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
        };
        a.prototype.stop = function() {
            this._isPlaying = !1;
            this.setIsStopped(!0)
        };
        a.prototype.prevFrame = function() {
            this.gotoAndStop(this._currentFrameNum - 1)
        };
        a.prototype.nextFrame = function() {
            this.gotoAndStop(this._currentFrameNum + 1)
        };
        a.prototype.gotoAndPlay = function(a, d) {
            void 0 === d && (d = 0);
            if (0 === arguments.length || 2 < arguments.length) throw Error(b.getString(1022, "MovieClip.gotoAndPlay()"));
            this.play(d);
            this._gotoFrame(a)
        };
        a.prototype.gotoAndStop = function(a) {
            if (1 != arguments.length) throw Error(b.getString(1022, "MovieClip.gotoAndStop()"));
            this.stop();
            this._gotoFrame(a)
        };
        a.prototype._gotoFrame = function(a) {
            var d;
            if ("string" === typeof a) d = this._getFrameLabelByName(a).frame;
            else if (d = parseInt(a + "", 10), d != a) throw Error(b.getString(1022, "Frame Label Not Found"));
            1 > d ? d = 1 : d > this._totalFrames && (d = this._totalFrames);
            d !== this._nextFrameNum && (this._nextFrameNum = d, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
        };
        a.prototype._advanceTime = function(a) {
            var d = this._frameIntervalTime;
            a = this._passedTime + a;
            this._passedTime = a % d;
            d = a / d;
            if (! (1 > d)) {
                for (; 1 <= d;) {
                    d--;
                    this._nextFrameNum++;
                    if (this._nextFrameNum > this._totalFrames) if ( - 1 == this._playTimes) this._eventPool.push(b.Event.LOOP_COMPLETE),
                    this._nextFrameNum = 1;
                    else if (this._playTimes--, 0 < this._playTimes) this._eventPool.push(b.Event.LOOP_COMPLETE),
                    this._nextFrameNum = 1;
                    else {
                        this._nextFrameNum = this._totalFrames;
                        this._eventPool.push(b.Event.COMPLETE);
                        this.stop();
                        break
                    }
                    this._advanceFrame()
                }
                this._constructFrame();
                this._handlePendingEvent()
            }
        };
        a.prototype._advanceFrame = function() {
            this._currentFrameNum = this._nextFrameNum
        };
        a.prototype._constructFrame = function() {
            var a = this._currentFrameNum;
            this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._displayedKeyFrameNum = a)
        };
        a.prototype._handlePendingEvent = function() {
            if (0 != this._eventPool.length) {
                this._eventPool.reverse();
                for (var a = this._eventPool,
                d = a.length,
                c = !1,
                h = !1,
                g = 0; g < d; g++) {
                    var f = a.pop();
                    f == b.Event.LOOP_COMPLETE ? h = !0 : f == b.Event.COMPLETE ? c = !0 : this.dispatchEventWith(f)
                }
                h && this.dispatchEventWith(b.Event.LOOP_COMPLETE);
                c && this.dispatchEventWith(b.Event.COMPLETE)
            }
        };
        Object.defineProperty(a.prototype, "totalFrames", {
            get: function() {
                return this._totalFrames
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "currentFrame", {
            get: function() {
                return this._currentFrameNum
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "currentFrameLabel", {
            get: function() {
                var a = this._getFrameLabelByFrame(this._currentFrameNum);
                return a && a.name
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "currentLabel", {
            get: function() {
                var a = this._getFrameLabelForFrame(this._currentFrameNum);
                return a ? a.name: null
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "frameRate", {
            get: function() {
                return this.movieClipData.frameRate
            },
            set: function(a) {
                a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1E3 / this._movieClipData.frameRate)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "isPlaying", {
            get: function() {
                return this._isPlaying
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "movieClipData", {
            get: function() {
                return this._movieClipData
            },
            set: function(a) {
                this._setMovieClipData(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMovieClipData = function(a) {
            this._movieClipData != a && (this._movieClipData = a, this._init())
        };
        a.prototype.setPlayTimes = function(a) {
            if (0 > a || 1 <= a) this._playTimes = 0 > a ? -1 : Math.floor(a)
        };
        a.prototype.setIsStopped = function(a) {
            this._isStopped != a && ((this._isStopped = a) ? (this._playTimes = 0, b.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, b.Ticker.getInstance().register(this._advanceTime, this)))
        };
        a.renderFilter = b.RenderFilter.getInstance();
        return a
    } (b.DisplayObject);
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip"
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
        function a(a, k) {
            b.call(this);
            this._name = a;
            this._frame = k | 0
        }
        __extends(a, b);
        Object.defineProperty(a.prototype, "name", {
            get: function() {
                return this._name
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "frame", {
            get: function() {
                return this._frame
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.clone = function() {
            return new a(this._name, this._frame)
        };
        return a
    } (b.EventDispatcher);
    b.FrameLabel = c;
    c.prototype.__class__ = "egret.FrameLabel"
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
            this._mcData = null;
            this.numFrames = 1;
            this.frames = [];
            this.labels = null;
            this.frameRate = 0;
            this.spriteSheet = this.textureData = null
        }
        __extends(a, d);
        a.prototype._init = function(a, b, d) {
            this.textureData = b;
            this.spriteSheet = d;
            this._setMCData(a)
        };
        a.prototype.getKeyFrameData = function(a) {
            a = this.frames[a - 1];
            a.frame && (a = this.frames[a.frame - 1]);
            return a
        };
        a.prototype.getTextureByFrame = function(a) {
            a = this.getKeyFrameData(a);
            if (a.res) {
                var b = this.getTextureByResName(a.res);
                b._offsetX = a.x | 0;
                b._offsetY = a.y | 0;
                return b
            }
            return null
        };
        a.prototype.getTextureByResName = function(a) {
            var b = this.spriteSheet.getTexture(a);
            b || (b = this.textureData[a], b = this.spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return b
        };
        a.prototype._isDataValid = function() {
            return 0 < this.frames.length
        };
        a.prototype._isTextureValid = function() {
            return null != this.textureData && null != this.spriteSheet
        };
        a.prototype._fillMCData = function(a) {
            this.frameRate = a.frameRate || 24;
            this._fillFramesData(a.frames);
            this._fillFrameLabelsData(a.labels)
        };
        a.prototype._fillFramesData = function(a) {
            for (var b = this.frames,
            d = a ? a.length: 0, c, g = 0; g < d; g++) if (c = a[g], b.push(c), c.duration) {
                var f = parseInt(c.duration);
                if (1 < f) {
                    c = b.length;
                    for (var l = 1; l < f; l++) b.push({
                        frame: c
                    })
                }
            }
            this.numFrames = b.length
        };
        a.prototype._fillFrameLabelsData = function(a) {
            if (a) {
                var d = a.length;
                if (0 < d) {
                    this.labels = [];
                    for (var c = 0; c < d; c++) {
                        var h = a[c];
                        this.labels.push(new b.FrameLabel(h.name, h.frame))
                    }
                }
            }
        };
        Object.defineProperty(a.prototype, "mcData", {
            get: function() {
                return this._mcData
            },
            set: function(a) {
                this._setMCData(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMCData = function(a) {
            this._mcData != a && (this._mcData = a) && this._fillMCData(a)
        };
        return a
    } (b.HashObject);
    b.MovieClipData = c;
    c.prototype.__class__ = "egret.MovieClipData"
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
        function a(a, b) {
            d.call(this);
            this.enableCache = !0;
            this._mcDataCache = {};
            this._mcDataSet = a;
            this.setTexture(b)
        }
        __extends(a, d);
        a.prototype.clearCache = function() {
            this._mcDataCache = {}
        };
        a.prototype.generateMovieClipData = function(a) {
            void 0 === a && (a = "");
            if ("" == a && this._mcDataSet) for (a in this._mcDataSet.mc) break;
            if ("" == a) return null;
            var d = this._findFromCache(a, this._mcDataCache);
            d || (d = new b.MovieClipData, this._fillData(a, d, this._mcDataCache));
            return d
        };
        a.prototype._findFromCache = function(a, b) {
            return this.enableCache && b[a] ? b[a] : null
        };
        a.prototype._fillData = function(a, b, d) {
            if (this._mcDataSet) {
                var c = this._mcDataSet.mc[a];
                c && (b._init(c, this._mcDataSet.res, this._spriteSheet), this.enableCache && (d[a] = b))
            }
        };
        Object.defineProperty(a.prototype, "mcDataSet", {
            get: function() {
                return this._mcDataSet
            },
            set: function(a) {
                this._mcDataSet = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "texture", {
            set: function(a) {
                this.setTexture(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "spriteSheet", {
            get: function() {
                return this._spriteSheet
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.setTexture = function(a) {
            this._spriteSheet = a ? new b.SpriteSheet(a) : null
        };
        return a
    } (b.EventDispatcher);
    b.MovieClipDataFactory = c;
    c.prototype.__class__ = "egret.MovieClipDataFactory"
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
        a.prototype._add = function() {};
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
        a.prototype._setItalic = function(a) {
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
    } (b.EventDispatcher);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.GET = "get";
        b.POST = "post";
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
            void 0 === a && (a = null);
            b.call(this);
            this.variables = null;
            null !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, d = /[?&]?([^=]+)=([^&]*)/g; b = d.exec(a);) {
                var c = decodeURIComponent(b[1]);
                b = decodeURIComponent(b[2]);
                if (!1 == c in this.variables) this.variables[c] = b;
                else {
                    var g = this.variables[c];
                    g instanceof Array ? g.push(b) : this.variables[c] = [g, b]
                }
            }
        };
        a.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
            b = [],
            d;
            for (d in a) b.push(this.encodeValue(d, a[d]));
            return b.join("&")
        };
        a.prototype.encodeValue = function(a, b) {
            return b instanceof Array ? this.encodeArray(a, b) : encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        a.prototype.encodeArray = function(a, b) {
            return a ? 0 == b.length ? encodeURIComponent(a) + "=": b.map(function(b) {
                return encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }).join("&") : ""
        };
        return a
    } (b.HashObject);
    b.URLVariables = c;
    c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        return function(b, a) {
            this.value = this.name = "";
            this.name = b;
            this.value = a
        }
    } ();
    b.URLRequestHeader = c;
    c.prototype.__class__ = "egret.URLRequestHeader"
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
            void 0 === a && (a = null);
            d.call(this);
            this.data = null;
            this.method = b.URLRequestMethod.GET;
            this.url = "";
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
            void 0 === a && (a = null);
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            this._request = this.data = null;
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
            this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
            this._bitmapData = null
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
            var d = b.MainContext.instance.rendererContext._texture_scale_factor;
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
            d.call(this)
        }
        __extends(a, d);
        a.prototype.init = function() {
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        };
        a.prototype.drawToTexture = function(e, d, c) {
            var h = d || e.getBounds(b.Rectangle.identity);
            if (0 == h.width || 0 == h.height) return ! 1;
            this._bitmapData || this.init();
            var g = h.x,
            f = h.y;
            d = h.width;
            var h = h.height,
            l = b.MainContext.instance.rendererContext._texture_scale_factor,
            h = h / l;
            d = Math.round(d / l);
            h = Math.round(h);
            this.setSize(d, h);
            this.begin();
            e._worldTransform.identity();
            e._worldTransform.a = 1 / l;
            e._worldTransform.d = 1 / l;
            c && (e._worldTransform.a *= c, e._worldTransform.d *= c);
            c = e._anchorOffsetX;
            var n = e._anchorOffsetY;
            if (0 != e._anchorX || 0 != e._anchorY) c = e._anchorX * d,
            n = e._anchorY * h;
            this._offsetX = g + c;
            this._offsetY = f + n;
            e._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
            e.worldAlpha = 1;
            if (e instanceof b.DisplayObjectContainer) for (g = e._children, f = 0, c = g.length; f < c; f++) g[f]._updateTransform();
            this.renderContext.setTransform(e._worldTransform);
            g = b.RenderFilter.getInstance();
            f = g._drawAreaList.concat();
            g._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            b.RendererContext.deleteTexture(this);
            e._filter && this.renderContext.setGlobalFilter(e._filter);
            e._colorTransform && this.renderContext.setGlobalColorTransform(e._colorTransform.matrix); (c = e.mask || e._scrollRect) && this.renderContext.pushMask(c);
            n = b.MainContext.__use_new_draw;
            b.MainContext.__use_new_draw = !1;
            e._render(this.renderContext);
            b.MainContext.__use_new_draw = n;
            c && this.renderContext.popMask();
            e._colorTransform && this.renderContext.setGlobalColorTransform(null);
            e._filter && this.renderContext.setGlobalFilter(null);
            a.identityRectangle.width = d;
            a.identityRectangle.height = h;
            g.addDrawArea(a.identityRectangle);
            this.renderContext.onRenderFinish();
            g._drawAreaList = f;
            this._sourceWidth = d;
            this._sourceHeight = h;
            this._textureWidth = this._sourceWidth * l;
            this._textureHeight = this._sourceHeight * l;
            this.end();
            return ! 0
        };
        a.prototype.setSize = function(a, b) {
            var d = this._bitmapData;
            d.width = a;
            d.height = b;
            d.style.width = a + "px";
            d.style.height = b + "px";
            this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = b)
        };
        a.prototype.begin = function() {};
        a.prototype.end = function() {};
        a.prototype.dispose = function() {
            this._bitmapData && (this.renderContext = this._bitmapData = null)
        };
        a.identityRectangle = new b.Rectangle;
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
            this._texture_scale_factor = 1;
            this.profiler = b.Profiler.getInstance();
            a.blendModesForGL || a.initBlendMode()
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "texture_scale_factor", {
            get: function() {
                return this._texture_scale_factor
            },
            set: function(a) {
                this._setTextureScaleFactor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextureScaleFactor = function(a) {
            this._texture_scale_factor = a
        };
        a.prototype.clearScreen = function() {};
        a.prototype.clearRect = function(a, b, d, c) {};
        a.prototype.drawImage = function(a, b, d, c, g, f, l, n, p, q) {
            this.profiler.onDrawImage()
        };
        a.prototype.drawImageScale9 = function(a, b, d, c, g, f, l, n, p, q) {
            return ! 1
        };
        a.prototype._addOneDraw = function() {
            this.profiler.onDrawImage()
        };
        a.prototype.setTransform = function(a) {};
        a.prototype.setAlpha = function(a, b) {};
        a.prototype.setupFont = function(a, b) {};
        a.prototype.measureText = function(a) {
            return 0
        };
        a.prototype.drawText = function(a, b, d, c, g, f) {
            this.profiler.onDrawImage()
        };
        a.prototype.strokeRect = function(a, b, d, c, g) {};
        a.prototype.pushMask = function(a) {};
        a.prototype.popMask = function() {};
        a.prototype.onRenderStart = function() {};
        a.prototype.onRenderFinish = function() {};
        a.prototype.setGlobalColorTransform = function(a) {};
        a.prototype.setGlobalFilter = function(a) {};
        a.createRendererContext = function(a) {
            return null
        };
        a.deleteTexture = function(a) {
            var d = b.MainContext.instance.rendererContext.gl;
            if (a = a._bitmapData) {
                var c = a.webGLTexture;
                if (c && d) for (var h in c) d.deleteTexture(c[h]);
                a.webGLTexture = null
            }
        };
        a.initBlendMode = function() {
            a.blendModesForGL = {};
            a.blendModesForGL[b.BlendMode.NORMAL] = [1, 771];
            a.blendModesForGL[b.BlendMode.ADD] = [770, 1]
        };
        a.registerBlendModeForGL = function(e, d, c, h) {
            a.blendModesForGL[e] && !h ? b.Logger.warningWithErrorId(1005, e) : a.blendModesForGL[e] = [d, c]
        };
        a.imageSmoothingEnabled = !0;
        a.blendModesForGL = null;
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
        a.prototype.getTouchData = function(a, b, d) {
            var c = this._currentTouchTarget[a];
            null == c && (c = {},
            this._currentTouchTarget[a] = c);
            c.stageX = b;
            c.stageY = d;
            c.identifier = a;
            return c
        };
        a.prototype.dispatchEvent = function(a, d) {
            b.TouchEvent.dispatchTouchEvent(d.target, a, d.identifier, d.stageX, d.stageY, !1, !1, !1, !0 == this.touchDownTarget[d.identifier])
        };
        a.prototype.onTouchBegan = function(a, d, c) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var h = b.MainContext.instance.stage.hitTest(a, d);
                h && (a = this.getTouchData(c, a, d), this.touchDownTarget[c] = !0, a.target = h, a.beginTarget = h, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(c)
            }
        };
        a.prototype.onTouchMove = function(a, d, c) {
            if ( - 1 != this.touchingIdentifiers.indexOf(c) && (a != this.lastTouchX || d != this.lastTouchY)) {
                this.lastTouchX = a;
                this.lastTouchY = d;
                var h = b.MainContext.instance.stage.hitTest(a, d);
                h && (a = this.getTouchData(c, a, d), a.target = h, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        };
        a.prototype.onTouchEnd = function(a, d, c) {
            var h = this.touchingIdentifiers.indexOf(c); - 1 != h && (this.touchingIdentifiers.splice(h, 1), h = b.MainContext.instance.stage.hitTest(a, d)) && (a = this.getTouchData(c, a, d), delete this.touchDownTarget[c], c = a.beginTarget, a.target = h, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), c == h ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
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
            this.trans = null;
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
                b.Logger.warningWithErrorId(1E3);
                return b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getHeader = function(a) {
            if ("transform" in a) return "";
            for (var b = ["webkit", "ms", "Moz", "O"], d = 0; d < b.length; d++) if (b[d] + "Transform" in a) return b[d];
            return ""
        };
        a.prototype._getTrans = function() {
            var a = document.createElement("div").style,
            a = this._getHeader(a);
            return "" == a ? "transform": a + "Transform"
        };
        a.prototype.$new = function(a) {
            return this.$(document.createElement(a))
        };
        a.prototype.$ = function(e) {
            var d = document;
            if (e = e instanceof HTMLElement ? e: d.querySelector(e)) e.find = e.find || this.$,
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
        a.prototype.translate = function(a) {
            return "translate(" + a.x + "px, " + a.y + "px) "
        };
        a.prototype.rotate = function(a) {
            return "rotate(" + a + "deg) "
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
})(egret || (egret = {})); (function(b) { (function(b) {
        b.getItem = function(b) {
            return null
        };
        b.setItem = function(b, a) {
            return ! 1
        };
        b.removeItem = function(b) {};
        b.clear = function() {}
    })(b.localStorage || (b.localStorage = {}))
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes) return null;
            for (var e = a.childNodes.length,
            c = !1,
            m = 0; m < e; m++) {
                var h = a.childNodes[m];
                if (1 == h.nodeType) {
                    c = !0;
                    break
                }
            }
            return c ? d.parseNode(h) : null
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
            h = 0; h < c; h++) {
                var g = b[h],
                f = g.name;
                0 != f.indexOf("xmlns:") && (e["$" + f] = g.value)
            }
            b = a.childNodes;
            c = b.length;
            for (h = 0; h < c; h++) if (g = d.parseNode(b[h])) e.children || (e.children = []),
            g.parent = e,
            e.children.push(g); ! e.children && (a = a.textContent.trim()) && (e.text = a);
            return e
        };
        d.findChildren = function(a, e, b) {
            b ? b.length = 0 : b = [];
            d.findByPath(a, e, b);
            return b
        };
        d.findByPath = function(a, e, b) {
            var c = e.indexOf("."),
            h; - 1 == c ? (h = e, c = !0) : (h = e.substring(0, c), e = e.substring(c + 1), c = !1);
            if (a = a.children) for (var g = a.length,
            f = 0; f < g; f++) {
                var l = a[f];
                l.localName == h && (c ? b.push(l) : d.findByPath(l, e, b))
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
        function a(a) {
            this.BUFFER_EXT_SIZE = 0;
            this.EOF_code_point = this.EOF_byte = -1;
            this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE));
            this.endian = c.BIG_ENDIAN
        }
        a.prototype._setArrayBuffer = function(a) {
            this.write_position = a.byteLength;
            this.data = new DataView(a, 0, a.byteLength);
            this._position = 0
        };
        a.prototype.setArrayBuffer = function(a) {};
        Object.defineProperty(a.prototype, "buffer", {
            get: function() {
                return this.data.buffer
            },
            set: function(a) {
                this.data = new DataView(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "dataView", {
            get: function() {
                return this.data
            },
            set: function(a) {
                this.data = a;
                this.write_position = a.byteLength
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bufferOffset", {
            get: function() {
                return this.data.byteOffset
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "position", {
            get: function() {
                return this._position
            },
            set: function(a) {
                this._position < a && !this.validate(this._position - a) || (this._position = a, this.write_position = a > this.write_position ? a: this.write_position)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "length", {
            get: function() {
                return this.write_position
            },
            set: function(a) {
                this.validateBuffer(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bytesAvailable", {
            get: function() {
                return this.data.byteLength - this._position
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.clear = function() {
            this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
        };
        a.prototype.readBoolean = function() {
            return this.validate(a.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
        };
        a.prototype.readByte = function() {
            return this.validate(a.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
        };
        a.prototype.readBytes = function(a, b, d) {
            void 0 === d && (d = 0);
            if (0 == d) d = this.bytesAvailable;
            else if (!this.validate(d)) return null;
            a.dataView = new DataView(this.data.buffer, this.bufferOffset + this.position, d);
            this.position += d
        };
        a.prototype.readDouble = function() {
            if (!this.validate(a.SIZE_OF_FLOAT64)) return null;
            var e = this.data.getFloat64(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_FLOAT64;
            return e
        };
        a.prototype.readFloat = function() {
            if (!this.validate(a.SIZE_OF_FLOAT32)) return null;
            var e = this.data.getFloat32(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_FLOAT32;
            return e
        };
        a.prototype.readInt = function() {
            if (!this.validate(a.SIZE_OF_INT32)) return null;
            var e = this.data.getInt32(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_INT32;
            return e
        };
        a.prototype.readMultiByte = function(a, b) {
            return this.validate(a) ? "": null
        };
        a.prototype.readShort = function() {
            if (!this.validate(a.SIZE_OF_INT16)) return null;
            var e = this.data.getInt16(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_INT16;
            return e
        };
        a.prototype.readUnsignedByte = function() {
            return this.validate(a.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
        };
        a.prototype.readUnsignedInt = function() {
            if (!this.validate(a.SIZE_OF_UINT32)) return null;
            var e = this.data.getUint32(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_UINT32;
            return e
        };
        a.prototype.readUnsignedShort = function() {
            if (!this.validate(a.SIZE_OF_UINT16)) return null;
            var e = this.data.getUint16(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_UINT16;
            return e
        };
        a.prototype.readUTF = function() {
            if (!this.validate(a.SIZE_OF_UINT16)) return null;
            var e = this.data.getUint16(this.position, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_UINT16;
            return 0 < e ? this.readUTFBytes(e) : ""
        };
        a.prototype.readUTFBytes = function(a) {
            if (!this.validate(a)) return null;
            var b = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
            this.position += a;
            return this.decodeUTF8(b)
        };
        a.prototype.writeBoolean = function(e) {
            this.validateBuffer(a.SIZE_OF_BOOLEAN);
            this.data.setUint8(this.position++, e ? 1 : 0)
        };
        a.prototype.writeByte = function(e) {
            this.validateBuffer(a.SIZE_OF_INT8);
            this.data.setInt8(this.position++, e)
        };
        a.prototype.writeBytes = function(a, b, d) {
            void 0 === d && (d = 0);
            this.validateBuffer(d);
            b = new DataView(a.buffer);
            for (d = 0; d < a.length; d++) this.data.setUint8(this.position++, b.getUint8(d))
        };
        a.prototype.writeDouble = function(e) {
            this.validateBuffer(a.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position, e, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_FLOAT64
        };
        a.prototype.writeFloat = function(e) {
            this.validateBuffer(a.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position, e, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_FLOAT32
        };
        a.prototype.writeInt = function(e) {
            this.validateBuffer(a.SIZE_OF_INT32);
            this.data.setInt32(this.position, e, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_INT32
        };
        a.prototype.writeShort = function(e) {
            this.validateBuffer(a.SIZE_OF_INT16);
            this.data.setInt16(this.position, e, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_INT16
        };
        a.prototype.writeUnsignedInt = function(e) {
            this.validateBuffer(a.SIZE_OF_UINT32);
            this.data.setUint32(this.position, e, this.endian == c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_UINT32
        };
        a.prototype.writeUTF = function(e) {
            e = this.encodeUTF8(e);
            var b = e.length;
            this.validateBuffer(a.SIZE_OF_UINT16 + b);
            this.data.setUint16(this.position, b, this.endian === c.LITTLE_ENDIAN);
            this.position += a.SIZE_OF_UINT16;
            this._writeUint8Array(e)
        };
        a.prototype.writeUTFBytes = function(a) {
            this._writeUint8Array(this.encodeUTF8(a))
        };
        a.prototype.toString = function() {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
        };
        a.prototype._writeUint8Array = function(a) {
            this.validateBuffer(this.position + a.length);
            for (var b = 0; b < a.length; b++) this.data.setUint8(this.position++, a[b])
        };
        a.prototype.validate = function(a) {
            if (0 < this.data.byteLength && this._position + a <= this.data.byteLength) return ! 0;
            throw b.getString(1025);
        };
        a.prototype.validateBuffer = function(a) {
            this.write_position = a > this.write_position ? a: this.write_position;
            a += this._position;
            this.data.byteLength < a && (a = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)), a.set(new Uint8Array(this.data.buffer)), this.buffer = a.buffer)
        };
        a.prototype.encodeUTF8 = function(a) {
            var b = 0;
            a = this.stringToCodePoints(a);
            for (var d = []; a.length > b;) {
                var c = a[b++];
                if (this.inRange(c, 55296, 57343)) this.encoderError(c);
                else if (this.inRange(c, 0, 127)) d.push(c);
                else {
                    var g, f;
                    this.inRange(c, 128, 2047) ? (g = 1, f = 192) : this.inRange(c, 2048, 65535) ? (g = 2, f = 224) : this.inRange(c, 65536, 1114111) && (g = 3, f = 240);
                    for (d.push(this.div(c, Math.pow(64, g)) + f); 0 < g;) {
                        var l = this.div(c, Math.pow(64, g - 1));
                        d.push(128 + l % 64);
                        g -= 1
                    }
                }
            }
            return new Uint8Array(d)
        };
        a.prototype.decodeUTF8 = function(a) {
            for (var b = 0,
            d = "",
            c, g = 0,
            f = 0,
            l = 0,
            n = 0; a.length > b;) {
                c = a[b++];
                if (c === this.EOF_byte) c = 0 !== f ? this.decoderError(!1) : this.EOF_code_point;
                else if (0 === f) this.inRange(c, 0, 127) || (this.inRange(c, 194, 223) ? (f = 1, n = 128, g = c - 192) : this.inRange(c, 224, 239) ? (f = 2, n = 2048, g = c - 224) : this.inRange(c, 240, 244) ? (f = 3, n = 65536, g = c - 240) : this.decoderError(!1), g *= Math.pow(64, f), c = null);
                else if (this.inRange(c, 128, 191)) if (l += 1, g += (c - 128) * Math.pow(64, f - l), l !== f) c = null;
                else {
                    var p = g,
                    q = n,
                    n = l = f = g = 0;
                    c = this.inRange(p, q, 1114111) && !this.inRange(p, 55296, 57343) ? p: this.decoderError(!1, c)
                } else n = l = f = g = 0,
                b--,
                c = this.decoderError(!1, c);
                null !== c && c !== this.EOF_code_point && (65535 >= c ? 0 < c && (d += String.fromCharCode(c)) : (c -= 65536, d += String.fromCharCode(55296 + (c >> 10 & 1023)), d += String.fromCharCode(56320 + (c & 1023))))
            }
            return d
        };
        a.prototype.encoderError = function(a) {
            throw b.getString(1026, a);
        };
        a.prototype.decoderError = function(a, d) {
            if (a) throw b.getString(1027);
            return d || 65533
        };
        a.prototype.inRange = function(a, b, d) {
            return b <= a && a <= d
        };
        a.prototype.div = function(a, b) {
            return Math.floor(a / b)
        };
        a.prototype.stringToCodePoints = function(a) {
            for (var b = [], d = 0, c = a.length; d < a.length;) {
                var g = a.charCodeAt(d);
                if (this.inRange(g, 55296, 57343)) if (this.inRange(g, 56320, 57343)) b.push(65533);
                else if (d === c - 1) b.push(65533);
                else {
                    var f = a.charCodeAt(d + 1);
                    this.inRange(f, 56320, 57343) ? (g &= 1023, f &= 1023, d += 1, b.push(65536 + (g << 10) + f)) : b.push(65533)
                } else b.push(g);
                d += 1
            }
            return b
        };
        a.SIZE_OF_BOOLEAN = 1;
        a.SIZE_OF_INT8 = 1;
        a.SIZE_OF_INT16 = 2;
        a.SIZE_OF_INT32 = 4;
        a.SIZE_OF_UINT8 = 1;
        a.SIZE_OF_UINT16 = 2;
        a.SIZE_OF_UINT32 = 4;
        a.SIZE_OF_FLOAT32 = 4;
        a.SIZE_OF_FLOAT64 = 8;
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
            void 0 === b && (b = null);
            void 0 === d && (d = null);
            void 0 === c && (c = !1);
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
        a.pauseTweens = function(a) {
            if (a.tween_count) for (var d = b.Tween._tweens,
            c = d.length - 1; 0 <= c; c--) d[c]._target == a && (d[c].paused = !0)
        };
        a.resumeTweens = function(a) {
            if (a.tween_count) for (var d = b.Tween._tweens,
            c = d.length - 1; 0 <= c; c--) d[c]._target == a && (d[c].paused = !1)
        };
        a.tick = function(e, b) {
            void 0 === b && (b = !1);
            for (var d = a._tweens.concat(), c = d.length - 1; 0 <= c; c--) {
                var g = d[c];
                b && !g.ignoreGlobalPause || g.paused || g.tick(g._useTicks ? 1 : e)
            }
        };
        a._register = function(e, d) {
            var c = e._target,
            h = a._tweens;
            if (d) c && (c.tween_count = 0 < c.tween_count ? c.tween_count + 1 : 1),
            h.push(e),
            a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
            else for (c && c.tween_count--, c = h.length; c--;) if (h[c] == e) {
                h.splice(c, 1);
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
            void 0 === b && (b = 1);
            0 > a && (a = 0);
            var d = a,
            c = !1;
            d >= this.duration && (this.loop ? d %= this.duration: (d = this.duration, c = !0));
            if (d == this._prevPos) return c;
            var g = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target) if (c) this._updateTargetProps(null, 1);
            else if (0 < this._steps.length) {
                for (var f = 0,
                l = this._steps.length; f < l && !(this._steps[f].t > d); f++);
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
            l = this._actions.length,
            n = 1;
            a > b && (c = b, g = a, f = l, l = n = -1);
            for (; (f += n) != l;) {
                b = this._actions[f];
                var p = b.t; (p == g || p > c && p < g || d && p == a) && b.f.apply(b.o, b.p)
            }
        };
        a.prototype._updateTargetProps = function(b, d) {
            var c, h, g, f;
            if (b || 1 != d) {
                if (this.passive = !!b.v) return;
                b.e && (d = b.e(d, 0, 1, 1));
                c = b.p0;
                h = b.p1
            } else this.passive = !1,
            c = h = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null == (g = c[l]) && (c[l] = g = this._initQueueProps[l]);
                null == (f = h[l]) && (h[l] = f = g);
                g = g == f || 0 == d || 1 == d || "number" != typeof g ? 1 == d ? f: g: g + (f - g) * d;
                var n = !1;
                if (f = a._plugins[l]) for (var p = 0,
                q = f.length; p < q; p++) {
                    var r = f[p].tween(this, l, g, c, h, d, !!b && c == h, !b);
                    r == a.IGNORE ? n = !0 : g = r
                }
                n || (this._target[l] = g)
            }
        };
        a.prototype.setPaused = function(b) {
            this.paused = b;
            a._register(this, !b);
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
        a.prototype._appendQueueProps = function(b) {
            var d, c, h, g, f, l;
            for (l in b) if (void 0 === this._initQueueProps[l]) {
                c = this._target[l];
                if (d = a._plugins[l]) for (h = 0, g = d.length; h < g; h++) c = d[h].init(this, l, c);
                this._initQueueProps[l] = this._curQueueProps[l] = void 0 === c ? null: c
            }
            for (l in b) {
                c = this._curQueueProps[l];
                if (d = a._plugins[l]) for (f = f || {},
                h = 0, g = d.length; h < g; h++) d[h].step && d[h].step(this, l, c, b[l], f);
                this._curQueueProps[l] = b[l]
            }
            f && this._appendQueueProps(f);
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
                p: d ? d: [],
                o: b ? b: this._target
            })
        };
        a.prototype.set = function(a, b) {
            void 0 === b && (b = null);
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
            b.Logger.fatalWithErrorId(1014)
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
                return--b * b * ((a + 1) * b + a) + 1
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
            return Math.sqrt(1 - --a * a)
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
                var h = b / d * Math.asin(1 / a);
                return - (a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - h) * d / b))
            }
        };
        d.getElasticOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var h = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - h) * d / b) + 1
            }
        };
        d.getElasticInOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                var h = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - h) * d / b) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - h) * d / b) * 0.5 + 1
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
            this.path = "";
            this.audio = null;
            this.type = b.EFFECT
        }
        b.prototype.play = function(a) {
            void 0 === a && (a = !1);
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
    } ();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {},
egret_cos_map = {},
i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD),
egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(b) {
    if ("function" !== typeof this) throw new TypeError(egret.getString(1029));
    var c = Array.prototype.slice.call(arguments, 1),
    d = this,
    a = function() {},
    e = function() {
        return d.apply(this instanceof a && b ? this: b, c.concat(Array.prototype.slice.call(arguments)))
    };
    a.prototype = this.prototype;
    e.prototype = new a;
    return e
});
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
        function a(a, c, m) {
            void 0 === c && (c = !1);
            void 0 === m && (m = !1);
            b.call(this, a, c, m);
            this.itemsTotal = this.itemsLoaded = 0;
            this.groupName = "";
            this.resItem = null
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, d, c, h, g, f) {
            void 0 === c && (c = "");
            void 0 === h && (h = null);
            void 0 === g && (g = 0);
            void 0 === f && (f = 0);
            var l = egret.Event._getPropertyData(a);
            l.groupName = c;
            l.resItem = h;
            l.itemsLoaded = g;
            l.itemsTotal = f;
            egret.Event._dispatchByTarget(a, b, d, l)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.CONFIG_LOAD_ERROR = "configLoadError";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        a.GROUP_LOAD_ERROR = "groupLoadError";
        return a
    } (egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function b(a, e, d) {
            this.groupName = "";
            this.data = null;
            this._loaded = !1;
            this.name = a;
            this.url = e;
            this.type = d
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
        function d() {
            this.keyMap = {};
            this.groupDic = {};
            b.configInstance = this
        }
        d.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a]) return b;
            a = this.groupDic[a];
            for (var d = a.length,
            c = 0; c < d; c++) b.push(this.parseResourceItem(a[c]));
            return b
        };
        d.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        d.prototype.createGroup = function(a, b, d) {
            void 0 === d && (d = !1);
            if (!d && this.groupDic[a] || !b || 0 == b.length) return ! 1;
            d = this.groupDic;
            for (var c = [], h = b.length, g = 0; g < h; g++) {
                var f = b[g],
                l = d[f];
                if (l) for (var f = l.length,
                n = 0; n < f; n++) {
                    var p = l[n]; - 1 == c.indexOf(p) && c.push(p)
                } else(p = this.keyMap[f]) ? -1 == c.indexOf(p) && c.push(p) : egret.Logger.warningWithErrorId(2E3, f)
            }
            if (0 == c.length) return ! 1;
            this.groupDic[a] = c;
            return ! 0
        };
        d.prototype.parseConfig = function(a, b) {
            if (a) {
                var d = a.resources;
                if (d) for (var c = d.length,
                h = 0; h < c; h++) {
                    var g = d[h],
                    f = g.url;
                    f && -1 == f.indexOf("://") && (g.url = b + f);
                    this.addItemToKeyMap(g)
                }
                if (d = a.groups) for (c = d.length, h = 0; h < c; h++) {
                    for (var f = d[h], l = [], n = f.keys.split(","), p = n.length, q = 0; q < p; q++) g = n[q].trim(),
                    (g = this.keyMap[g]) && -1 == l.indexOf(g) && l.push(g);
                    this.groupDic[f.name] = l
                }
            }
        };
        d.prototype.addSubkey = function(a, b) {
            var d = this.keyMap[b];
            d && !this.keyMap[a] && (this.keyMap[a] = d)
        };
        d.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var d = b.length,
                c = 0; c < d; c++) {
                    var h = b[c];
                    null == this.keyMap[h] && (this.keyMap[h] = a)
                }
            }
        };
        d.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name: ""
        };
        d.prototype.getType = function(a) {
            return (a = this.keyMap[a]) ? a.type: ""
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
    var c = function(d) {
        function a() {
            d.call(this);
            this.thread = 2;
            this.loadingCount = 0;
            this.resInstance = this.callBack = null;
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
            if (!this.itemListDic[d] && d) if (a && 0 != a.length) {
                this.priorityQueue[c] ? this.priorityQueue[c].push(d) : this.priorityQueue[c] = [d];
                this.itemListDic[d] = a;
                c = a.length;
                for (var h = 0; h < c; h++) a[h].groupName = d;
                this.groupTotalDic[d] = a.length;
                this.numLoadedDic[d] = 0;
                this.next()
            } else egret.Logger.warningWithErrorId(2001, d),
            a = new b.ResourceEvent(b.ResourceEvent.GROUP_LOAD_ERROR),
            a.groupName = d,
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
            for (b in this.priorityQueue) a = Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            b = a.length;
            for (var d, c = 0; c < b; c++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                d = this.itemListDic[a[this.queueIndex]];
                if (0 < d.length) break;
                this.queueIndex++
            }
            return 0 == d.length ? null: d.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var d = a.groupName;
            if (!a.loaded) {
                var c = this.retryTimesDic[a.name] || 1;
                if (c > this.maxRetryTimes) delete this.retryTimesDic[a.name],
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, d, a);
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
                h = this.groupTotalDic[d];
                a.loaded || (this.groupErrorDic[d] = !0);
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, d, a, c, h);
                c == h && (a = this.groupErrorDic[d], this.removeGroupName(d), delete this.groupTotalDic[d], delete this.numLoadedDic[d], delete this.itemListDic[d], delete this.groupErrorDic[d], a ? b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_LOAD_ERROR, d) : b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, d))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var d = this.priorityQueue[b], c = d.length, g = 0, f = !1, c = d.length, l = 0; l < c; l++) {
                    if (d[l] == a) {
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
    var c = function(d) {
        function a() {
            d.call(this);
            this.resourceConfig = null;
            this.resourceConfig = b.configInstance
        }
        __extends(a, d);
        a.prototype.addSubkey = function(a, b) {
            this.resourceConfig.addSubkey(a, b)
        };
        a.prototype.loadFile = function(a, b, d) {};
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
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
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
            var d = a.name; ! this.fileDic[d] && b && (this.fileDic[d] = b)
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
            var d = a.name; ! this.fileDic[d] && b && (this.fileDic[d] = b, (d = a.data) && d.scale9grid && (d = d.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]))))
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
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                this.fileDic[d] = JSON.parse(b)
            } catch(c) {
                egret.Logger.warningWithErrorId(1017, a.url, b)
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
            d || (d = this.textureMap[a]); ! d && (d = b.AnalyzerBase.getStringPrefix(a), d = this.fileDic[d]) && (a = b.AnalyzerBase.getStringTail(a), d = d.getTexture(a));
            return d
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = d.item,
            g = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            if (c.loaded) if ("string" == typeof b.data) {
                if (c.loaded = !1, a = this.analyzeConfig(c, b.data)) {
                    c.url = a;
                    this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
                    this.loadFile(c, g, d.thisObject);
                    this._dataFormat = egret.URLLoaderDataFormat.TEXT;
                    return
                }
            } else this.analyzeBitmap(c, b.data);
            c.url = c.data.url;
            g.call(d.thisObject, c)
        };
        a.prototype.analyzeConfig = function(a, b) {
            var d = a.name,
            c, g = "";
            try {
                c = JSON.parse(b)
            } catch(f) {
                egret.Logger.warningWithErrorId(1017, a.url, b)
            }
            c && (this.sheetMap[d] = c, g = this.getRelativePath(a.url, c.file));
            return g
        };
        a.prototype.analyzeBitmap = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c = this.sheetMap[d];
                delete this.sheetMap[d];
                c = this.parseSpriteSheet(b, c, a.data && a.data.subkeys ? "": d);
                this.fileDic[d] = c
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var d = a.lastIndexOf("/");
            return a = -1 != d ? a.substring(0, d + 1) + b: b
        };
        a.prototype.parseSpriteSheet = function(a, b, d) {
            b = b.frames;
            if (!b) return null;
            var c = new egret.SpriteSheet(a),
            g = this.textureMap,
            f;
            for (f in b) {
                var l = b[f];
                a = c.createTexture(f, l.x, l.y, l.w, l.h, l.offX, l.offY, l.sourceW, l.sourceH);
                l.scale9grid && (l = l.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3])));
                null == g[f] && (g[f] = a, d && this.addSubkey(f, d))
            }
            return c
        };
        a.prototype.destroyRes = function(a) {
            var b = this.fileDic[a];
            if (b) {
                delete this.fileDic[a];
                for (var d in b._textureMap) this.textureMap[d] && delete this.textureMap[d];
                return ! 0
            }
            return ! 1
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
        a.prototype.analyzeConfig = function(a, b) {
            var d = a.name,
            c, g = "";
            try {
                c = JSON.parse(b)
            } catch(f) {}
            c ? g = this.getRelativePath(a.url, c.file) : (c = b, g = this.getTexturePath(a.url, c));
            this.sheetMap[d] = c;
            return g
        };
        a.prototype.analyzeBitmap = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c = this.sheetMap[d];
                delete this.sheetMap[d];
                c = new egret.BitmapFont(b, c);
                this.fileDic[d] = c
            }
        };
        a.prototype.getTexturePath = function(a, b) {
            var d = "",
            c = b.split("\n")[2],
            g = c.indexOf('file="'); - 1 != g && (c = c.substring(g + 6), g = c.indexOf('"'), d = c.substring(0, g));
            a = a.split("\\").join("/");
            g = a.lastIndexOf("/");
            return a = -1 != g ? a.substring(0, g + 1) + d: d
        };
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
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
            var d = a.name; ! this.fileDic[d] && b && (this.fileDic[d] = b, (d = a.data) && d.soundType ? b.preload(d.soundType) : b.preload(egret.Sound.EFFECT))
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
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                var c = egret.XML.parse(b);
                this.fileDic[d] = c
            } catch(g) {}
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
    b.parseConfig = function(a, b) {
        void 0 === b && (b = "");
        d.parseConfig(a, b)
    };
    b.getRes = function(a) {
        return d.getRes(a)
    };
    b.getResAsync = function(a, b, c) {
        d.getResAsync(a, b, c)
    };
    b.getResByUrl = function(a, b, c, m) {
        void 0 === m && (m = "");
        d.getResByUrl(a, b, c, m)
    };
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    };
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    };
    b.addEventListener = function(a, b, c, m, h) {
        void 0 === m && (m = !1);
        void 0 === h && (h = 0);
        d.addEventListener(a, b, c, m, h)
    };
    b.removeEventListener = function(a, b, c, m) {
        void 0 === m && (m = !1);
        d.removeEventListener(a, b, c, m)
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
            for (var d = a.length,
            c = [], g = 0; g < d; g++) {
                var f = a[g],
                f = new b.ResourceItem(f.url, f.url, f.type);
                c.push(f)
            }
            this.resLoader.loadGroup(c, e.GROUP_CONFIG, Number.MAX_VALUE)
        };
        e.prototype.isGroupLoaded = function(a) {
            return - 1 != this.loadedGroups.indexOf(a)
        };
        e.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        e.prototype.loadGroup = function(a, e) {
            void 0 === e && (e = 0);
            if ( - 1 != this.loadedGroups.indexOf(a)) b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, a);
            else if (!this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
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
                this.loadDelayGroups()
            } else this.loadedGroups.push(a.groupName),
            this.dispatchEvent(a)
        };
        e.prototype.loadDelayGroups = function() {
            var a = this.groupNameList;
            this.groupNameList = [];
            for (var b = a.length,
            e = 0; e < b; e++) {
                var d = a[e];
                this.loadGroup(d.name, d.priority)
            }
        };
        e.prototype.onGroupError = function(a) {
            a.groupName == e.GROUP_CONFIG ? (this.loadingConfigList = null, b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
        };
        e.prototype.hasRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (a = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(a), "" == e) ? !1 : !0
        };
        e.prototype.parseConfig = function(a, b) {
            this.resConfig.parseConfig(a, b);
            this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
        };
        e.prototype.getRes = function(a) {
            var e = this.resConfig.getType(a);
            return "" == e && (e = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(e), "" == e) ? null: this.getAnalyzerByType(e).getRes(a)
        };
        e.prototype.getResAsync = function(a, e, d) {
            var c = this.resConfig.getType(a),
            f = this.resConfig.getName(a);
            if ("" == c && (f = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(f), "" == c)) {
                e.call(d, null);
                return
            } (c = this.getAnalyzerByType(c).getRes(a)) ? e.call(d, c) : (a = {
                key: a,
                compFunc: e,
                thisObject: d
            },
            this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
        };
        e.prototype.getResByUrl = function(a, e, d, c) {
            void 0 === c && (c = "");
            if (a) {
                c || (c = this.getTypeByUrl(a));
                var f = this.getAnalyzerByType(c).getRes(a);
                f ? e.call(d, f) : (e = {
                    key: a,
                    compFunc: e,
                    thisObject: d
                },
                this.asyncDic[a] ? this.asyncDic[a].push(e) : (this.asyncDic[a] = [e], a = new b.ResourceItem(a, a, c), this.resLoader.loadItem(a)))
            } else e.call(d, null)
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
            case "jpeg":
            case "bmp":
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
            d = 0; d < e; d++) {
                var c = b[d],
                l = a.getRes(c.key);
                c.compFunc.call(c.thisObject, l, c.key)
            }
        };
        e.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var e = this.loadedGroups.indexOf(a); - 1 != e && this.loadedGroups.splice(e, 1);
                a = b.length;
                for (var d = 0; d < a; d++) {
                    e = b[d];
                    e.loaded = !1;
                    var c = this.getAnalyzerByType(e.type);
                    c.destroyRes(e.name)
                }
                return ! 0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return ! 1;
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
    } (egret.EventDispatcher);
    c.prototype.__class__ = "RES.Resource";
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
    var c = function(d) {
        function a(b) {
            void 0 === b && (b = 60);
            d.call(this);
            this.frameRate = b;
            this._time = 0;
            this._requestAnimationId = NaN;
            this._isActivate = !0;
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
        __extends(a, d);
        a.prototype.enterFrame = function() {
            var e = a.instance,
            d = a._thisObject,
            c = a._callback,
            h = b.getTimer(),
            g = h - e._time;
            e._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            c.call(d, g);
            e._time = h
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
            h = function() {
                document[g] ? d() : c()
            };
            window.addEventListener("focus", c, !1);
            window.addEventListener("blur", d, !1);
            var g, f;
            "undefined" !== typeof document.hidden ? (g = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (g = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", f = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", c, !1), window.addEventListener("pagehide", d, !1));
            g && f && document.addEventListener(f, h, !1)
        };
        a.instance = null;
        a.requestAnimationFrame = null;
        a.cancelAnimationFrame = null;
        a._thisObject = null;
        a._callback = null;
        return a
    } (b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage; (function(b) {
    b.getItem = function(b) {
        return window.localStorage.getItem(b)
    };
    b.setItem = function(b, d) {
        try {
            return window.localStorage.setItem(b, d),
            !0
        } catch(a) {
            return egret.Logger.infoWithErrorId(1018, b, d),
            !1
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
        function a(a, b) {
            void 0 === b && (b = !0);
            d.call(this);
            this.globalAlpha = 1;
            this.useCacheCanvas = b;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            b ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext;
            this.onResize();
            var c = this.drawCanvasContext.setTransform,
            h = this;
            this.drawCanvasContext.setTransform = function(a, b, e, d, k, q) {
                h._matrixA = a;
                h._matrixB = b;
                h._matrixC = e;
                h._matrixD = d;
                h._matrixTx = k;
                h._matrixTy = q;
                c.call(h.drawCanvasContext, a, b, e, d, k, q)
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
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(b.StageDelegate.canvas_div_name);
                this.canvas.width = b.MainContext.instance.stage.stageWidth;
                this.canvas.height = b.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height);
                this.drawCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this.drawCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this.drawCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this.drawCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled
            }
        };
        a.prototype.clearScreen = function() {
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, c = a.length; d < c; d++) {
                var h = a[d];
                this.clearRect(h.x, h.y, h.width, h.height)
            }
            a = b.MainContext.instance.stage;
            this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, d, c) {
            this.canvasContext.clearRect(a, b, d, c)
        };
        a.prototype.drawImage = function(a, c, m, h, g, f, l, n, p, q) {
            void 0 === q && (q = void 0);
            var r = a._bitmapData;
            f += this._transformTx;
            l += this._transformTy;
            var t = b.getTimer();
            void 0 === q ? this.drawCanvasContext.drawImage(r, c, m, h, g, f, l, n, p) : this.drawRepeatImage(a, c, m, h, g, f, l, n, p, q);
            d.prototype.drawImage.call(this, a, c, m, h, g, f, l, n, p, q);
            this.renderCost += b.getTimer() - t
        };
        a.prototype.drawRepeatImage = function(a, d, c, h, g, f, l, n, p, q) {
            if (void 0 === a.pattern) {
                var r = b.MainContext.instance.rendererContext._texture_scale_factor,
                t = a._bitmapData,
                s = t;
                if (t.width != h || t.height != g || 1 != r) s = document.createElement("canvas"),
                s.width = h * r,
                s.height = g * r,
                s.getContext("2d").drawImage(t, d, c, h, g, 0, 0, h * r, g * r);
                d = this.drawCanvasContext.createPattern(s, q);
                a.pattern = d
            }
            this.drawCanvasContext.fillStyle = a.pattern;
            this.drawCanvasContext.translate(f, l);
            this.drawCanvasContext.fillRect(0, 0, n, p);
            this.drawCanvasContext.translate( - f, -l)
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha = function(a, d) {
            a != this.globalAlpha && (this.drawCanvasContext.globalAlpha = this.globalAlpha = a);
            d ? (this.blendValue = this.blendModes[d], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
        };
        a.prototype.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[b.BlendMode.NORMAL] = "source-over";
            this.blendModes[b.BlendMode.ADD] = "lighter"
        };
        a.prototype.setupFont = function(a, b) {
            void 0 === b && (b = null);
            b = b || {};
            var d = null == b.size ? a._size: b.size,
            c = null == b.fontFamily ? a._fontFamily: b.fontFamily,
            g = this.drawCanvasContext,
            f = (null == b.italic ? a._italic: b.italic) ? "italic ": "normal ",
            f = f + ((null == b.bold ? a._bold: b.bold) ? "bold ": "normal ");
            g.font = f + (d + "px " + c);
            g.textAlign = "left";
            g.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.drawCanvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, c, m, h, g, f) {
            void 0 === f && (f = null);
            this.setupFont(a, f);
            f = f || {};
            var l;
            l = null != f.textColor ? b.toColorString(f.textColor) : a._textColorString;
            var n;
            n = null != f.strokeColor ? b.toColorString(f.strokeColor) : a._strokeColorString;
            var p;
            p = null != f.stroke ? f.stroke: a._stroke;
            var q = this.drawCanvasContext;
            q.fillStyle = l;
            q.strokeStyle = n;
            p && (q.lineWidth = 2 * p, q.strokeText(c, m + this._transformTx, h + this._transformTy, g || 65535));
            q.fillText(c, m + this._transformTx, h + this._transformTy, g || 65535);
            d.prototype.drawText.call(this, a, c, m, h, g, f)
        };
        a.prototype.strokeRect = function(a, b, d, c, g) {
            this.drawCanvasContext.strokeStyle = g;
            this.drawCanvasContext.strokeRect(a, b, d, c)
        };
        a.prototype.pushMask = function(a) {
            this.drawCanvasContext.save();
            this.drawCanvasContext.beginPath();
            this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this.drawCanvasContext.clip();
            this.drawCanvasContext.closePath()
        };
        a.prototype.popMask = function() {
            this.drawCanvasContext.restore();
            this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        a.prototype.onRenderStart = function() {
            this.drawCanvasContext.save()
        };
        a.prototype.onRenderFinish = function() {
            this.drawCanvasContext.restore();
            this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            if (this.useCacheCanvas) for (var a = this._cacheCanvas.width,
            d = this._cacheCanvas.height,
            c = b.RenderFilter.getInstance().getDrawAreaList(), h = 0, g = c.length; h < g; h++) {
                var f = c[h],
                l = f.x,
                n = f.y,
                p = f.width,
                f = f.height;
                l + p > a && (p = a - l);
                n + f > d && (f = d - n);
                0 < p && 0 < f && this.canvasContext.drawImage(this._cacheCanvas, l, n, p, f, l, n, p, f)
            }
        };
        return a
    } (b.RendererContext);
    b.HTML5CanvasRenderer = c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics; (function(b) {
    b.beginFill = function(b, a) {
        void 0 === a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this._pushCommand(new c(this._setStyle, this, [e]))
    };
    b.drawRect = function(b, a, e, k) {
        this._pushCommand(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(c._transformTx + a, c._transformTy + b, e, d);
            this.canvasContext.closePath()
        },
        this, [b, a, e, k]));
        this._fill();
        this.checkRect(b, a, e, k)
    };
    b.drawCircle = function(b, a, e) {
        this._pushCommand(new c(function(a, b, e) {
            var d = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(d._transformTx + a, d._transformTy + b, e, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        },
        this, [b, a, e]));
        this._fill();
        this.checkRect(b - e, a - e, 2 * e, 2 * e)
    };
    b.drawRoundRect = function(b, a, e, k, m, h) {
        this._pushCommand(new c(function(a, b, e, d, c, k) {
            var m = this.renderContext;
            a = m._transformTx + a;
            b = m._transformTy + b;
            c /= 2;
            k = k ? k / 2 : c;
            e = a + e;
            d = b + d;
            m = d - k;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(e, m);
            this.canvasContext.quadraticCurveTo(e, d, e - c, d);
            this.canvasContext.lineTo(a + c, d);
            this.canvasContext.quadraticCurveTo(a, d, a, d - k);
            this.canvasContext.lineTo(a, b + k);
            this.canvasContext.quadraticCurveTo(a, b, a + c, b);
            this.canvasContext.lineTo(e - c, b);
            this.canvasContext.quadraticCurveTo(e, b, e, b + k);
            this.canvasContext.lineTo(e, m);
            this.canvasContext.closePath()
        },
        this, [b, a, e, k, m, h]));
        this._fill();
        this.checkRect(b, a, e, k)
    };
    b.drawEllipse = function(b, a, e, k) {
        this._pushCommand(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.save();
            a = c._transformTx + a;
            b = c._transformTy + b;
            var c = e > d ? e: d,
            k = e / c;
            d /= c;
            this.canvasContext.scale(k, d);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + e) / k, b / d);
            this.canvasContext.arc(a / k, b / d, c, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        },
        this, [b, a, e, k]));
        this._fill();
        this.checkRect(b - e, a - k, 2 * e, 2 * k)
    };
    b.lineStyle = function(b, a, e, k, m, h, g, f) {
        void 0 === b && (b = NaN);
        void 0 === a && (a = 0);
        void 0 === e && (e = 1);
        void 0 === k && (k = !1);
        void 0 === m && (m = "normal");
        void 0 === h && (h = null);
        void 0 === g && (g = null);
        void 0 === f && (f = 3);
        this.strokeStyleColor && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this._pushCommand(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        },
        this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    b.lineTo = function(b, a) {
        this._pushCommand(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.lineTo(d._transformTx + a, d._transformTy + b)
        },
        this, [b, a]));
        this.lineX = b;
        this.lineY = a;
        this.checkPoint(b, a)
    };
    b.curveTo = function(b, a, e, k) {
        this._pushCommand(new c(function(a, b, e, d) {
            var c = this.renderContext;
            this.canvasContext.quadraticCurveTo(c._transformTx + a, c._transformTy + b, c._transformTx + e, c._transformTy + d)
        },
        this, [b, a, e, k]));
        this.lineX = e;
        this.lineY = k;
        this.checkPoint(b, a);
        this.checkPoint(e, k)
    };
    b.moveTo = function(b, a) {
        this._pushCommand(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.moveTo(d._transformTx + a, d._transformTy + b)
        },
        this, [b, a]));
        this.checkPoint(b, a)
    };
    b.clear = function() {
        this.lineY = this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null;
        this._dirty = !1;
        this._maxY = this._maxX = this._minY = this._minX = 0
    };
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b.endFill = function() {
        null != this.fillStyleColor && this._fill()
    };
    b._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this._pushCommand(this.endFillCommand), this.fillStyleColor = null)
    };
    b.createEndLineCommand = function() {
        this.endLineCommand || (this.endLineCommand = new c(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b._pushCommand = function(b) {
        this.commandQueue.push(b);
        this._dirty = !0
    };
    b._draw = function(b) {
        var a = this.commandQueue.length;
        if (0 != a) {
            this.renderContext = b;
            b = this.canvasContext = this.renderContext.drawCanvasContext;
            b.save();
            this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand), a = this.commandQueue.length);
            for (var e = 0; e < a; e++) {
                var c = this.commandQueue[e];
                c.method.apply(c.thisObject, c.args)
            }
            b.restore();
            this._dirty = !1
        }
    };
    var c = function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    } ();
    c.prototype.__class__ = "egret_h5_graphics.Command";
    b._setStyle = function(b) {
        this.canvasContext.fillStyle = b;
        this.canvasContext.beginPath()
    };
    b.init = function() {
        for (var d in b) egret.Graphics.prototype[d] = b[d];
        egret.RendererContext.createRendererContext = function(a) {
            return new egret.HTML5CanvasRenderer(a, !1)
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
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.glID = this.gl = this.canvas = null;
            this.size = 2E3;
            this.vertices = null;
            this.vertSize = 5;
            this.indices = null;
            this.projectionY = this.projectionX = NaN;
            this.shaderManager = null;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null;
            this.currentBatchSize = 0;
            this.worldTransform = null;
            this.worldAlpha = 1;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null;
            this.graphicsStyle = {};
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
            this.html5Canvas = document.createElement("canvas");
            this.canvasContext = new b.HTML5CanvasRenderer(this.html5Canvas);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var c = 0,
            m = 0; c < a; c += 6, m += 4) this.indices[c + 0] = m + 0,
            this.indices[c + 1] = m + 1,
            this.indices[c + 2] = m + 2,
            this.indices[c + 3] = m + 0,
            this.indices[c + 4] = m + 2,
            this.indices[c + 5] = m + 3;
            this.initWebGL();
            this.shaderManager = new b.WebGLShaderManager(this.gl);
            this.worldTransform = new b.Matrix;
            this.initAll()
        }
        __extends(a, d);
        a.prototype.onRenderFinish = function() {
            this._draw()
        };
        a.prototype.initAll = function() {
            a.isInit || (a.isInit = !0, egret_webgl_graphics.init(), b.TextField.prototype._makeBitmapCache = function() {
                this.renderTexture || (this.renderTexture = new b.RenderTexture);
                var a = this.getBounds(b.Rectangle.identity);
                if (0 == a.width || 0 == a.height) return this._texture_to_render = null,
                !1;
                this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.renderContext = b.RendererContext.createRendererContext(this._bitmapData));
                var d = a.width,
                a = a.height,
                c = b.MainContext.instance.rendererContext._texture_scale_factor,
                a = a / c,
                d = Math.round(d / c),
                a = Math.round(a),
                h = this._bitmapData;
                h.width = d;
                h.height = a;
                h.style.width = d + "px";
                h.style.height = a + "px";
                this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = d, this.renderContext._cacheCanvas.height = a);
                this._worldTransform.identity();
                this._worldTransform.a = 1 / c;
                this._worldTransform.d = 1 / c;
                this.renderContext.setTransform(this._worldTransform);
                this.worldAlpha = 1;
                var h = b.RenderFilter.getInstance(),
                g = h._drawAreaList.concat();
                h._drawAreaList.length = 0;
                this.renderContext.clearScreen();
                this.renderContext.onRenderStart();
                b.RendererContext.deleteTexture(this.renderTexture);
                this._colorTransform && this.renderContext.setGlobalColorTransform(this._colorTransform.matrix);
                var f = this.mask || this._scrollRect;
                f && this.renderContext.pushMask(f);
                this._render(this.renderContext);
                f && this.renderContext.popMask();
                this._colorTransform && this.renderContext.setGlobalColorTransform(null);
                b.RenderTexture.identityRectangle.width = d;
                b.RenderTexture.identityRectangle.height = a;
                h.addDrawArea(b.RenderTexture.identityRectangle);
                this.renderContext.onRenderFinish();
                h._drawAreaList = g;
                this.renderTexture._bitmapData = this._bitmapData;
                this.renderTexture._sourceWidth = d;
                this.renderTexture._sourceHeight = a;
                this.renderTexture._textureWidth = this.renderTexture._sourceWidth * c;
                this.renderTexture._textureHeight = this.renderTexture._sourceHeight * c;
                this._texture_to_render = this.renderTexture;
                return ! 0
            },
            b.TextField.prototype._draw = function(a) {
                this.getDirty() && (this._texture_to_render = this.renderTexture, this._cacheAsBitmap = !0);
                b.DisplayObject.prototype._draw.call(this, a)
            },
            b.RenderTexture.prototype.init = function() {
                this._bitmapData = document.createElement("canvas");
                this.canvasContext = this._bitmapData.getContext("2d");
                this._webglBitmapData = document.createElement("canvas");
                this.renderContext = new b.WebGLRenderer(this._webglBitmapData)
            },
            b.RenderTexture.prototype.setSize = function(a, d) {
                if (this._webglBitmapData) {
                    var c = this._webglBitmapData;
                    c.width = a;
                    c.height = d;
                    c.style.width = a + "px";
                    c.style.height = d + "px";
                    this.renderContext.projectionX = a / 2;
                    this.renderContext.projectionY = -d / 2;
                    this.renderContext.viewportScale = b.MainContext.instance.rendererContext._texture_scale_factor
                }
            },
            b.RenderTexture.prototype.end = function() {},
            b.RenderTexture.prototype.drawToTexture = function(a, d, c) {
                var h = d || a.getBounds(b.Rectangle.identity);
                if (0 == h.width || 0 == h.height || d && (0 == d.width || 0 == d.height)) return ! 1;
                "undefined" == typeof c && (c = 1);
                this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.canvasContext = this._bitmapData.getContext("2d"), b.RenderTexture.WebGLCanvas || (b.RenderTexture.WebGLCanvas = document.createElement("canvas"), b.RenderTexture.WebGLRenderer = new b.WebGLRenderer(b.RenderTexture.WebGLCanvas)), this._webglBitmapData = b.RenderTexture.WebGLCanvas, this.renderContext = b.RenderTexture.WebGLRenderer);
                var g = h.x,
                f = h.y;
                d = h.width;
                var h = h.height,
                h = h / c,
                l = b.MainContext.instance.rendererContext._texture_scale_factor;
                d = Math.round(d / c);
                h = Math.round(h);
                this.setSize(d, h);
                var n = this._bitmapData,
                p = d / l * c,
                q = h / l * c;
                n.width = p;
                n.height = q;
                n.style.width = p + "px";
                n.style.height = q + "px";
                this.begin();
                a._worldTransform.identity();
                n = a._anchorOffsetX;
                p = a._anchorOffsetY;
                if (0 != a._anchorX || 0 != a._anchorY) n = a._anchorX * d,
                p = a._anchorY * h;
                this._offsetX = g + n;
                this._offsetY = f + p;
                a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                a.worldAlpha = 1;
                g = b.MainContext.__use_new_draw;
                b.MainContext.__use_new_draw = !1;
                if (a instanceof b.DisplayObjectContainer) for (f = a._children, n = 0, p = f.length; n < p; n++) f[n]._updateTransform();
                this.renderContext.setTransform(a._worldTransform);
                f = b.RenderFilter.getInstance();
                n = f._drawAreaList.concat();
                f._drawAreaList.length = 0;
                p = this.renderContext.gl;
                p.viewport(0, 0, d, h);
                p.bindFramebuffer(p.FRAMEBUFFER, null);
                p.clearColor(0, 0, 0, 0);
                p.clear(p.COLOR_BUFFER_BIT);
                this.renderContext.onRenderStart();
                b.RendererContext.deleteTexture(this);
                a._filter && this.renderContext.setGlobalFilter(a._filter);
                a._colorTransform && this.renderContext.setGlobalColorTransform(a._colorTransform.matrix); (p = a.mask || a._scrollRect) && this.renderContext.pushMask(p);
                a._render(this.renderContext);
                this.renderContext._draw();
                b.MainContext.__use_new_draw = g;
                p && this.renderContext.popMask();
                a._colorTransform && this.renderContext.setGlobalColorTransform(null);
                a._filter && this.renderContext.setGlobalFilter(null);
                b.RenderTexture.identityRectangle.width = d;
                b.RenderTexture.identityRectangle.height = h;
                f.addDrawArea(b.RenderTexture.identityRectangle);
                this.renderContext.onRenderFinish();
                f._drawAreaList = n;
                this._sourceWidth = d / l * c;
                this._sourceHeight = h / l * c;
                this._textureWidth = d * c;
                this._textureHeight = h * c;
                this.canvasContext.drawImage(this._webglBitmapData, 0, 0, d, h, 0, 0, this._sourceWidth, this._sourceHeight);
                return ! 0
            })
        };
        a.prototype.createCanvas = function() {
            var a = b.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var d = document.getElementById(b.StageDelegate.canvas_div_name),
                a = b.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                d.appendChild(a)
            }
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            var a = document.getElementById(b.StageDelegate.canvas_div_name);
            this.canvas && (this.canvas.width = b.MainContext.instance.stage.stageWidth, this.canvas.height = b.MainContext.instance.stage.stageHeight, this.canvas.style.width = a.style.width, this.canvas.style.height = a.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2);
            this.html5Canvas && (this.html5Canvas.width = b.MainContext.instance.stage.stageWidth, this.html5Canvas.height = b.MainContext.instance.stage.stageHeight, this.html5Canvas.style.width = a.style.width, this.html5Canvas.style.height = a.style.height)
        };
        a.prototype.handleContextLost = function() {
            this.contextLost = !0
        };
        a.prototype.handleContextRestored = function() {
            this.initWebGL();
            this.shaderManager.setContext(this.gl);
            this.contextLost = !1
        };
        a.prototype.initWebGL = function() {
            for (var e = {},
            d, c = ["experimental-webgl", "webgl"], h = 0; h < c.length; h++) {
                try {
                    d = this.canvas.getContext(c[h], e)
                } catch(g) {}
                if (d) break
            }
            if (!d) throw Error(b.getString(1021));
            a.glID++;
            this.glID = a.glID;
            this.setContext(d)
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
        a.prototype.start = function() {
            if (!this.contextLost) {
                var a = this.gl;
                a.activeTexture(a.TEXTURE0);
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var b;
                b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader: "blur" == this.filterType ? this.shaderManager.blurShader: this.shaderManager.defaultShader;
                this.shaderManager.activateShader(b);
                b.syncUniforms();
                a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                var d = 4 * this.vertSize;
                a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, d, 0);
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, d, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, d, 16)
            }
        };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var d = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, h = d.length; c < h; c++) {
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
            a || (a = b.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var d = b.RendererContext.blendModesForGL[a];
                d && (this._draw(), this.gl.blendFunc(d[0], d[1]), this.currentBlendMode = a)
            }
        };
        a.prototype.drawRepeatImage = function(a, d, c, h, g, f, l, n, p, q) {
            q = b.MainContext.instance.rendererContext._texture_scale_factor;
            h *= q;
            for (g *= q; f < n; f += h) for (var r = l; r < p; r += g) {
                var t = Math.min(h, n - f),
                s = Math.min(g, p - r);
                this.drawImage(a, d, c, t / q, s / q, f, r, t, s)
            }
        };
        a.prototype.drawImage = function(a, b, d, c, g, f, l, n, p, q) {
            void 0 === q && (q = void 0);
            if (!this.contextLost) if (void 0 !== q) this.drawRepeatImage(a, b, d, c, g, f, l, n, p, q);
            else {
                this.createWebGLTexture(a);
                q = a._bitmapData.webGLTexture[this.glID];
                if (q !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(),
                this.currentBaseTexture = q;
                var r = this.worldTransform,
                t = r.a,
                s = r.b,
                u = r.c,
                w = r.d,
                v = r.tx,
                y = r.ty;
                0 == f && 0 == l || r.append(1, 0, 0, 1, f, l);
                1 == c / n && 1 == g / p || r.append(n / c, 0, 0, p / g, 0, 0);
                f = r.a;
                l = r.b;
                n = r.c;
                p = r.d;
                q = r.tx;
                var x = r.ty;
                r.a = t;
                r.b = s;
                r.c = u;
                r.d = w;
                r.tx = v;
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
                t[s++] = x;
                t[s++] = b;
                t[s++] = d;
                t[s++] = u;
                t[s++] = f * a + q;
                t[s++] = l * a + x;
                t[s++] = c + b;
                t[s++] = d;
                t[s++] = u;
                t[s++] = f * a + n * r + q;
                t[s++] = p * r + l * a + x;
                t[s++] = c + b;
                t[s++] = g + d;
                t[s++] = u;
                t[s++] = n * r + q;
                t[s++] = p * r + x;
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
                var c = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
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
            a = a._bitmapData;
            a.webGLTexture || (a.webGLTexture = {});
            if (!a.webGLTexture[this.glID]) {
                var b = this.gl;
                a.webGLTexture[this.glID] = b.createTexture();
                b.bindTexture(b.TEXTURE_2D, a.webGLTexture[this.glID]);
                b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
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
            0 == this.maskList.length && b.enable(b.SCISSOR_TEST);
            a = this.getScissorRect(a);
            this.maskList.push(a);
            this.scissor(a.x, a.y, a.width, a.height)
        };
        a.prototype.getScissorRect = function(a) {
            var d = this.maskList[this.maskList.length - 1],
            c,
            h,
            g;
            d ? d.intersects(d) ? (c = Math.max(a.x + this.worldTransform.tx, d.x), h = Math.max(a.y + this.worldTransform.ty, d.y), g = Math.min(a.x + this.worldTransform.tx + a.width, d.x + d.width) - c, a = Math.min(a.y + this.worldTransform.ty + a.height, d.y + d.height) - h) : a = g = h = c = 0 : (c = a.x + this.worldTransform.tx, h = a.y + this.worldTransform.ty, g = a.width, a = a.height); (d = this.maskDataFreeList.pop()) ? (d.x = c, d.y = h, d.width = g, d.height = a) : d = new b.Rectangle(c, h, g, a);
            return d
        };
        a.prototype.popMask = function() {
            this._draw();
            var a = this.gl,
            b = this.maskList.pop();
            this.maskDataFreeList.push(b);
            b = this.maskList.length;
            0 != b ? (b = this.maskList[b - 1], (0 < b.width || 0 < b.height) && this.scissor(b.x, b.y, b.width, b.height)) : a.disable(a.SCISSOR_TEST)
        };
        a.prototype.scissor = function(a, d, c, h) {
            var g = this.gl;
            0 > c && (c = 0);
            0 > h && (h = 0);
            g.scissor(a, -d + b.MainContext.instance.stage.stageHeight - h, c, h)
        };
        a.prototype.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        };
        a.prototype.setGlobalFilter = function(a) {
            this._draw();
            this.setFilterProperties(a)
        };
        a.prototype.setFilterProperties = function(a) {
            if (a) switch (this.filterType = a.type, a.type) {
            case "blur":
                var b = this.shaderManager.blurShader;
                b.uniforms.blur.value.x = a.blurX;
                b.uniforms.blur.value.y = a.blurY
            } else this.filterType = null
        };
        a.prototype.setupFont = function(a, b) {
            void 0 === b && (b = null);
            this.canvasContext.setupFont(a, b)
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a)
        };
        a.prototype.renderGraphics = function(a) {
            this._draw();
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
            d = a.y,
            c = a.w;
            a = a.h;
            var g = this.graphicsStyle.a,
            f = this.graphicsStyle.r * g,
            l = this.graphicsStyle.g * g,
            n = this.graphicsStyle.b * g,
            p = this.graphicsPoints,
            q = this.graphicsIndices,
            r = p.length / 6;
            p.push(b, d);
            p.push(f, l, n, g);
            p.push(b + c, d);
            p.push(f, l, n, g);
            p.push(b, d + a);
            p.push(f, l, n, g);
            p.push(b + c, d + a);
            p.push(f, l, n, g);
            q.push(r, r, r + 1, r + 2, r + 3, r + 3)
        };
        a.prototype.setGraphicsStyle = function(a, b, d, c) {
            this.graphicsStyle.r = a;
            this.graphicsStyle.g = b;
            this.graphicsStyle.b = d;
            this.graphicsStyle.a = c
        };
        a.glID = 0;
        a.isInit = !1;
        return a
    } (b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
var egret_webgl_graphics; (function(b) {
    b.beginFill = function(b, a) {
        void 0 === a && (a = 1);
        this._pushCommand(new c(this._setStyle, this, [(b >> 16) / 255, ((b & 65280) >> 8) / 255, (b & 255) / 255, a]))
    };
    b.drawRect = function(b, a, e, k) {
        this._pushCommand(new c(function(a) {
            this.renderContext.renderGraphics(a)
        },
        this, [{
            x: b,
            y: a,
            w: e,
            h: k
        }]));
        this.checkRect(b, a, e, k)
    };
    b.drawCircle = function(b, a, c) {};
    b.drawRoundRect = function(b, a, c, k, m, h) {};
    b.drawEllipse = function(b, a, c, k) {};
    b.lineStyle = function(b, a, c, k, m, h, g, f) {};
    b.lineTo = function(b, a) {};
    b.curveTo = function(b, a, c, k) {};
    b.moveTo = function(b, a) {};
    b.clear = function() {
        this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
    };
    b.endFill = function() {};
    b._pushCommand = function(b) {
        this.commandQueue.push(b)
    };
    b._draw = function(b) {
        var a = this.commandQueue.length;
        if (0 != a) for (this.renderContext = b, b = 0; b < a; b++) {
            var c = this.commandQueue[b];
            c.method.apply(c.thisObject, c.args)
        }
    };
    var c = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    } ();
    c.prototype.__class__ = "egret_webgl_graphics.Command";
    b._setStyle = function(b, a, c, k) {
        this.renderContext.setGraphicsStyle(b, a, c, k)
    };
    b.init = function() {
        for (var d in b) egret.Graphics.prototype[d] = b[d]
    }
})(egret_webgl_graphics || (egret_webgl_graphics = {})); (function(b) {
    var c = function() {
        function d() {}
        d.compileProgram = function(a, c, k) {
            k = d.compileFragmentShader(a, k);
            c = d.compileVertexShader(a, c);
            var m = a.createProgram();
            a.attachShader(m, c);
            a.attachShader(m, k);
            a.linkProgram(m);
            a.getProgramParameter(m, a.LINK_STATUS) || b.Logger.infoWithErrorId(1020);
            return m
        };
        d.compileFragmentShader = function(a, b) {
            return d._compileShader(a, b, a.FRAGMENT_SHADER)
        };
        d.compileVertexShader = function(a, b) {
            return d._compileShader(a, b, a.VERTEX_SHADER)
        };
        d._compileShader = function(a, d, c) {
            c = a.createShader(c);
            a.shaderSource(c, d);
            a.compileShader(c);
            return a.getShaderParameter(c, a.COMPILE_STATUS) ? c: (b.Logger.info(a.getShaderInfoLog(c)), null)
        };
        d.checkCanUseWebGL = function() {
            if (void 0 == d.canUseWebGL) try {
                var a = document.createElement("canvas");
                d.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch(b) {
                d.canUseWebGL = !1
            }
            return d.canUseWebGL
        };
        return d
    } ();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d(a) {
            this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = this.gl = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.uniforms = null;
            this.gl = a;
            this.init()
        }
        d.prototype.init = function() {
            var a = this.gl,
            d = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.uSampler = a.getUniformLocation(d, "uSampler");
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.dimensions = a.getUniformLocation(d, "dimensions");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(d, "aTextureCoord");
            this.colorAttribute = a.getAttribLocation(d, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var c in this.uniforms) this.uniforms[c].uniformLocation = a.getUniformLocation(d, c);
            this.initUniforms();
            this.program = d
        };
        d.prototype.initUniforms = function() {
            if (this.uniforms) {
                var a = this.gl,
                b, d;
                for (d in this.uniforms) {
                    b = this.uniforms[d];
                    var c = b.type;
                    "mat2" === c || "mat3" === c || "mat4" === c ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === c ? b.glFunc = a.uniformMatrix2fv: "mat3" === c ? b.glFunc = a.uniformMatrix3fv: "mat4" === c && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + c], b.glValueLength = "2f" === c || "2i" === c ? 2 : "3f" === c || "3i" === c ? 3 : "4f" === c || "4i" === c ? 4 : 1)
                }
            }
        };
        d.prototype.syncUniforms = function() {
            if (this.uniforms) {
                var a, b = this.gl,
                d;
                for (d in this.uniforms) a = this.uniforms[d],
                1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
            }
        };
        return d
    } ();
    b.EgretShader = c;
    c.prototype.__class__ = "egret.EgretShader"
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
            b.call(this, a);
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
        __extends(a, b);
        return a
    } (b.EgretShader);
    b.ColorTransformShader = c;
    c.prototype.__class__ = "egret.ColorTransformShader"
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
            b.call(this, a);
            this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}";
            this.uniforms = {
                blur: {
                    type: "2f",
                    value: {
                        x: 2,
                        y: 2
                    }
                }
            };
            this.init()
        }
        __extends(a, b);
        return a
    } (b.EgretShader);
    b.BlurShader = c;
    c.prototype.__class__ = "egret.BlurShader"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d(a) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = a;
            this.init()
        }
        d.prototype.init = function() {
            var a = this.gl,
            d = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.tintColor = a.getUniformLocation(d, "tint");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(d, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(d, "translationMatrix");
            this.alpha = a.getUniformLocation(d, "alpha");
            this.program = d
        };
        return d
    } ();
    b.PrimitiveShader = c;
    c.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d(a) {
            this.gl = null;
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
            for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
            this.setContext(a)
        }
        d.prototype.setContext = function(a) {
            this.gl = a;
            this.primitiveShader = new b.PrimitiveShader(a);
            this.defaultShader = new b.EgretShader(a);
            this.colorTransformShader = new b.ColorTransformShader(a);
            this.blurShader = new b.BlurShader(a);
            this.activateShader(this.defaultShader)
        };
        d.prototype.activateShader = function(a) {
            this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader = a)
        };
        d.prototype.setAttribs = function(a) {
            var b, d;
            d = this.tempAttribState.length;
            for (b = 0; b < d; b++) this.tempAttribState[b] = !1;
            d = a.length;
            for (b = 0; b < d; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            d = this.attribState.length;
            for (b = 0; b < d; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return d
    } ();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager"
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
        a.prototype.proceed = function(a) {
            function d() {
                if (4 == h.readyState) if (h.status != a._status && (a._status = h.status, b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, h.status)), 400 <= h.status || 0 == h.status) b.IOErrorEvent.dispatchIOErrorEvent(a);
                else {
                    switch (a.dataFormat) {
                    case b.URLLoaderDataFormat.TEXT:
                        a.data = h.responseText;
                        break;
                    case b.URLLoaderDataFormat.VARIABLES:
                        a.data = new b.URLVariables(h.responseText);
                        break;
                    case b.URLLoaderDataFormat.BINARY:
                        a.data = h.response;
                        break;
                    default:
                        a.data = h.responseText
                    }
                    b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                }
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var c = a._request,
                h = this.getXHR();
                h.onreadystatechange = d;
                var g = b.NetContext._getUrl(c);
                h.open(c.method, g, !0);
                this.setResponseType(h, a.dataFormat);
                c.method != b.URLRequestMethod.GET && c.data ? c.data instanceof b.URLVariables ? (h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h.send(c.data.toString())) : (h.setRequestHeader("Content-Type", "multipart/form-data"), h.send(c.data)) : h.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function d(g) {
                b.clearTimeout(h.__timeoutId);
                h.removeEventListener("canplaythrough", d, !1);
                h.removeEventListener("error", c, !1);
                g = new b.Sound;
                g._setAudio(h);
                a.data = g;
                b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            function c(g) {
                b.clearTimeout(h.__timeoutId);
                h.removeEventListener("canplaythrough", d, !1);
                h.removeEventListener("error", c, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var h = new Audio(a._request.url);
            h.__timeoutId = b.setTimeout(d, this, 100);
            h.addEventListener("canplaythrough", d, !1);
            h.addEventListener("error", c, !1);
            h.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
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
    var c = function(d) {
        function a() {
            d.call(this);
            this._isTouchDown = !1;
            this.rootDiv = null;
            this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
        }
        __extends(a, d);
        a.prototype.prevent = function(a) {
            a.stopPropagation(); ! 0 != a.isScroll && a.preventDefault()
        };
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown",
            function(b) {
                a._onTouchBegin(b);
                a.prevent(b)
            },
            !1), this.rootDiv.addEventListener("MSPointerMove",
            function(b) {
                a._onTouchMove(b);
                a.prevent(b)
            },
            !1), this.rootDiv.addEventListener("MSPointerUp",
            function(b) {
                a._onTouchEnd(b);
                a.prevent(b)
            },
            !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown",
            function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup",
            function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.rootDiv.addEventListener("mousedown",
            function(b) {
                a._onTouchBegin(b)
            });
            this.rootDiv.addEventListener("mousemove",
            function(b) {
                a._onTouchMove(b)
            });
            this.rootDiv.addEventListener("mouseup",
            function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d; c++) a._onTouchBegin(b.changedTouches[c]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchmove",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d; c++) a._onTouchMove(b.changedTouches[c]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchend",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d; c++) a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            },
            !1);
            this.rootDiv.addEventListener("touchcancel",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d; c++) a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            },
            !1)
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
            a.hasOwnProperty("identifier") && (d = a.identifier);
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
            h = window,
            g, f;
            "function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), g = f.left, f = f.top) : f = g = 0;
            g += h.pageXOffset - c.clientLeft;
            f += h.pageYOffset - c.clientTop;
            null != d.pageX ? (c = d.pageX, h = d.pageY) : (g -= document.body.scrollLeft, f -= document.body.scrollTop, c = d.clientX, h = d.clientY);
            var l = b.Point.identity;
            l.x = (c - g) / b.StageDelegate.getInstance().getScaleX();
            l.y = (h - f) / b.StageDelegate.getInstance().getScaleY();
            return l
        };
        return a
    } (b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
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
            this.inputElement = this.div = null;
            this._hasListeners = !1;
            this._inputType = "";
            this._isShow = !1;
            this.textValue = "";
            this._height = this._width = 0;
            this._styleInfoes = {};
            var a = b.StageDelegate.getInstance().getScaleX(),
            c = b.StageDelegate.getInstance().getScaleY(),
            m = b.Browser.getInstance().$new("div");
            m.position.x = 0;
            m.position.y = 0;
            m.scale.x = a;
            m.scale.y = c;
            m.transforms();
            m.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = m;
            c = b.MainContext.instance.stage;
            a = c.stageWidth;
            c = c.stageHeight;
            m = new b.Shape;
            m.width = a;
            m.height = c;
            m.touchEnabled = !0;
            this._shape = m;
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
        a.prototype.callHandler = function(a) {
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
            this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart", this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype._removeListeners = function() {
            this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype.createInput = function() {
            var a = this._multiline ? "textarea": "input";
            this._inputType != a && (this._inputType = a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {},
            a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
        };
        a.prototype._open = function(a, b, d, c) {};
        a.prototype._setScale = function(a, c) {
            d.prototype._setScale.call(this, a, c);
            var m = b.StageDelegate.getInstance().getScaleX(),
            h = b.StageDelegate.getInstance().getScaleY();
            this.div.scale.x = m * a;
            this.div.scale.y = h * c;
            this.div.transforms()
        };
        a.prototype.changePosition = function(a, d) {
            var c = b.StageDelegate.getInstance().getScaleX(),
            h = b.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * c;
            this.div.position.y = d * h;
            this.div.transforms()
        };
        a.prototype.setStyles = function() {
            this.setElementStyle("fontStyle", this._italic ? "italic": "normal");
            this.setElementStyle("fontWeight", this._bold ? "bold": "normal");
            this.setElementStyle("textAlign", this._textAlign);
            this.setElementStyle("fontSize", this._size + "px");
            this.setElementStyle("color", "#000000");
            this.setElementStyle("width", this._width + "px");
            this.setElementStyle("height", this._height + "px");
            this.setElementStyle("display", "block")
        };
        a.prototype._show = function() {
            b.MainContext.instance.stage._changeSizeDispatchFlag = !1;
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
            this.inputElement.selectionStart = a.length;
            this.inputElement.selectionEnd = a.length;
            this._shape && null == this._shape.parent && b.MainContext.instance.stage.addChild(this._shape)
        };
        a.prototype._hide = function() {
            b.MainContext.instance.stage._changeSizeDispatchFlag = !0;
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
                },
                this, 50);
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
            this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
        };
        return a
    } (b.StageText);
    b.HTML5StageText = c;
    c.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
    return new egret.HTML5StageText
};
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Panel = function(b) {
    function c() {
        b.call(this);
        lowResolution && (this.bg.scaleX = this.bg.scaleY = 2);
        this.scaleY = this.scaleX = sizeOffset;
        this.x = centerX;
        this.y = centerY;
        this.bg = new egret.Bitmap;
        this.bg.anchorX = this.bg.anchorY = 0.5;
        this.bg.scaleX = sizeOffsetW / sizeOffset
    }
    __extends(c, b);
    c.prototype.setAnchor = function() {
        for (var b = 0; b < this.numChildren; b++) this.getChildAt(b).anchorX = this.getChildAt(b).anchorY = 0.5
    };
    c.prototype.blackField = function() {
        this.stage.addChild(this.blackScreen);
        this.blackScreen.alpha = 0;
        egret.Tween.get(this.blackScreen).to({
            alpha: 1
        },
        200).wait(200).to({
            alpha: 0
        },
        200).call(function() {
            egret.Tween.removeAllTweens()
        },
        this)
    };
    c.prototype.whiteField = function() {
        var b = this;
        this.alpha = 0;
        egret.Tween.get(this).wait(200).call(function() {
            b.alpha = 1
        },
        this)
    };
    return c
} (egret.DisplayObjectContainer);
Panel.prototype.__class__ = "Panel";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MyButton = function(b) {
    function c(d) {
        b.call(this);
        this.bg = new egret.Bitmap(d);
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPressStart, this)
    }
    __extends(c, b);
    c.prototype.onPressStart = function() {
        egret.Tween.get(this).to({
            scaleX: 0.8,
            scaleY: 0.8
        },
        50).to({
            scaleX: 1,
            scaleY: 1
        },
        50)
    };
    c.prototype.onPressEnd = function() {
        egret.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        },
        50)
    };
    return c
} (egret.DisplayObjectContainer);
MyButton.prototype.__class__ = "MyButton";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
GamePanel = function(b) {
    function c() {
        b.call(this);
        this.frame = 1;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.reset, this);
        test = this;
        levelSteps = RES.getRes("levels").step;
        this.bg.texture = RES.getRes("game-bg");
        this.intro = new egret.Bitmap(RES.getRes("game-intro"));
        this.introText = new egret.Bitmap;
        this.levelLabel = new MyText(RES.getRes("game-level-label"));
        this.step = new MyText(RES.getRes("game-step"));
        this.levelBtn = new MyButton(RES.getRes("game-level-button"));
        this.replayBtn = new MyButton(RES.getRes("game-replay"));
        this.gridBoard = new GridBoard;
        this.addChild(this.bg);
        this.addChild(this.step);
        this.addChild(this.levelLabel);
        this.addChild(this.levelBtn);
        this.addChild(this.replayBtn);
        this.addChild(this.gridBoard);
        this.setAnchor();
        this.setLayout();
        this.setListener();
        this.updateLabel()
    }
    __extends(c, b);
    c.prototype.setLayout = function() {
        this.levelBtn.x = -240;
        this.levelBtn.y = -450;
        this.replayBtn.x = 240;
        this.replayBtn.y = -450;
        this.step.anchorX = this.step.anchorY = 0;
        this.step.y = -450;
        this.step.setTextSize(80);
        this.step.setPosOffset(0, -15);
        this.levelLabel.x = -110;
        this.levelLabel.y = -400;
        this.levelLabel.setPosOffset(60);
        this.levelLabel.setTextSize(50);
        this.gridBoard.anchorX = this.gridBoard.anchorY = 0.5;
        this.gridBoard.y = 100;
        this.introText.anchorX = this.introText.anchorY = 0.5;
        this.introText.y = 400
    };
    c.prototype.setListener = function() {
        var b = this;
        this.levelBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            sendEvent("level", b)
        },
        this);
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            sendEvent("replay", b)
        },
        this);
        this.gridBoard.addEventListener("move", this.update, this);
        this.addEventListener("over",
        function() {
            b.gridBoard.timer.stop()
        },
        this);
        this.addEventListener("passed",
        function() {
            b.gridBoard.timer.stop()
        },
        this)
    };
    c.prototype.reset = function() {
        steps = levelSteps[currentLevel - 1];
        this.updateLabel();
        this.gridBoard.reset();
        safeRemove(this.intro);
        safeRemove(this.introText);
        1 == currentLevel && (this.frame = 1, this.addChild(this.intro), this.addChild(this.introText), this.playIntro(this.frame))
    };
    c.prototype.update = function() {
        1 == currentLevel && this.playIntro(++this.frame);
        this.gridBoard.update();
        steps--;
        this.updateLabel();
        this.gridBoard.judge() ? (this.gridBoard.disableTouch(), sendEvent("passed", this), console.log("passed"),console.log(currentLevel)) : 0 >= steps && (this.gridBoard.disableTouch(), sendEvent("over", this))
    };
    c.prototype.updateLabel = function() {
        this.step.setText("" + steps);
        this.levelLabel.setText("" + currentLevel)
    };
    c.prototype.playIntro = function(b) {
        egret.Tween.removeTweens(this.intro);
        var a = egret.Tween.get(this.intro, {
            loop: !0
        });
        switch (b) {
        case 1:
            this.intro.y = 200;
            this.intro.x = 0;
            a.to({
                y: -50
            },
            1E3, egret.Ease.sineOut);
            this.introText.texture = RES.getRes("game-intro-text1");
            break;
        case 2:
            this.intro.y = 200;
            this.intro.x = 200;
            a.to({
                x: -200
            },
            1E3, egret.Ease.sineOut);
            this.introText.texture = RES.getRes("game-intro-text2");
            break;
        case 3:
            this.intro.y = 200;
            this.intro.x = 0;
            a.to({
                x: -200
            },
            1E3, egret.Ease.sineOut);
            this.introText.texture = RES.getRes("game-intro-text3");
            break;
        default:
            safeRemove(this.intro),
            safeRemove(this.introText)
        }
    };
    return c
} (Panel);
GamePanel.prototype.__class__ = "GamePanel";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
GameOverPanel; (function(b) {
    b.SHARE = "share";
    b.REPLAY = "replay";
    b.MORE = "more";
    b.NEXT = "next";
    var c = function(c) {
        function k() {
            c.call(this);
            this.addEventListener(b.REPLAY, this.hide, this);
            this.addEventListener(b.NEXT, this.hide, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.addEventListener(b.SHARE, this.displayShareHint, this);
            this.dialog_bg = new egret.Bitmap(RES.getRes("bg"));
            this.shareHint = new a(RES.getRes("shareHint"));
            this.shareBtn = new d(b.SHARE);
            this.replayBtn = new d(b.REPLAY);
            this.moreBtn = new d(b.MORE);
            this.nextBtn = new d(b.NEXT);
            this.scoreText = new egret.BitmapText;
            this.scoreText.spriteSheet = RES.getRes("over_number_fnt");
            this.scoreText.text = "" + score;
            this.bestText = new egret.TextField;
            this.bestText.text = "\u6700\u9ad8  " + bestScore;
            this.bestText.textColor = 7829367;
            this.bestText.size = 28;
            this.bestText.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1";
            this.badgeEffect = new egret.Bitmap(RES.getRes("light"));
            this.badge = new egret.Bitmap(RES.getRes("win"));
            this.setLayout();
            this.addChild(this.dialog_bg);
            this.addChild(this.badgeEffect);
            this.addChild(this.badge);
            // this.addChild(this.scoreText);
            this.setAnchor()
        }
        __extends(k, c);
        k.prototype.onAddToStage = function() {
            var a = this,
            b = this.scaleX = this.scaleY = this.stage.stageHeight / 1136;
            this.x = this.stage.stageWidth / 2;
            var d = this.stage.stageWidth / b,
            c = this.stage.stageHeight / b;
            this.y = 0;
            egret.Tween.get(this).to({
                y: this.stage.stageHeight / 2
            },
            200).call(function() {
                a.graphics.beginFill(0, 0.5);
                a.graphics.drawRect( - d / 2, -c / 2, d, c);
                a.graphics.endFill();
                var b = parseInt(a.scoreText.text);
                a.scoreTimerHandler(a.currentScore, 1, b)
            },
            this)
        };
        k.prototype.hide = function() {
            var a = this;
            this.graphics.clear();
            egret.Tween.get(this).to({
                y: 0
            },
            200).call(function() {
                a.parent.removeChild(a);
                safeRemove(a.shareBtn);
                safeRemove(a.nextBtn);
                safeRemove(a.replayBtn);
                safeRemove(a.moreBtn);
                egret.Tween.removeTweens(a.badgeEffect)
            },
            this)
        };
        k.prototype.displayShareHint = function() {
            this.stage.addChild(this.shareHint)
        };
        k.prototype.setAnchor = function() {
            for (var a = 0; a < this.numChildren; a++) this.getChildAt(a).anchorX = this.getChildAt(a).anchorY = 0.5
        };
        k.prototype.setLayout = function() {
            this.scoreText.y = -250;
            this.replayBtn.x = -120;
            this.replayBtn.y = 200;
            this.shareBtn.x =120;
            this.shareBtn.y = 200;
			this.moreBtn.x = 00;
            this.moreBtn.y = 300;
            this.nextBtn.x = 0;
            this.nextBtn.y = 200;
            this.bestText.y = -130
        };
        k.prototype.update = function(a, b, d) {
            var c = this;
            this.setLayout();
            b = egret.Tween.get(this.badgeEffect, {
                loop: !0
            });
            d ? (this.badgeEffect.x = 0, this.badge.texture = RES.getRes("win"), this.badgeEffect.texture = RES.getRes("light"), b.wait(300).call(function() {
                c.badgeEffect.rotation += 45
            },
            this), this.addChild(this.nextBtn)) : (this.badge.texture = RES.getRes("badge-text"), this.badgeEffect.texture = RES.getRes(""), this.addChild(this.replayBtn),this.addChild(this.shareBtn), this.addChild(this.moreBtn));
            this.currentScore = a
        };
        k.prototype.scoreTimerHandler = function(a, b, d) {
            var c = this;
            d < a && (d += b, egret.setTimeout(function() {
                c.scoreTimerHandler(a, b, d)
            },
            this, 100));
            this.scoreText.text = "" + Math.floor(d)
        };
        return k
    } (egret.Sprite);
    b.OverDialog = c;
    c.prototype.__class__ = "GameOverPanel.OverDialog";
    var d = function(a) {
        function d(b) {
            a.call(this, RES.getRes(b));
            this.pressed = !1;
            this.type = this.bitmapKey = b;
            this.touchEnabled = !0;
            this.anchorX = this.anchorY = 0.5;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPressStart, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onPressEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPressEnd, this)
        }
        __extends(d, a);
        d.prototype.onPressStart = function() {
            this.pressed = !0;
            this.texture = RES.getRes(this.bitmapKey + "-press")
        };
        d.prototype.onPressEnd = function() {
            if (this.pressed) {
                this.pressed = !1;
                switch (this.type) {
                case b.REPLAY:
                    var a = new egret.Event(b.REPLAY);
                    this.parent.dispatchEvent(a);
                    break;
                case b.NEXT:
                    a = new egret.Event(b.NEXT);
                    this.parent.dispatchEvent(a);
                    break;
                case b.SHARE:
                    window.cb_share();
                    break;
                case b.MORE:
                    Play68.goHome();break;
                }
                this.texture = RES.getRes(this.bitmapKey)
            }
        };
        return d
    } (egret.Bitmap);
    d.prototype.__class__ = "GameOverPanel.OverButton";
    var a = function(a) {
        function b(d) {
            a.call(this);
            this.touchEnabled = !0;
            this.finger = new egret.Bitmap(d);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
        }
        __extends(b, a);
        b.prototype.onRemoveFromStage = function() {
            this.removeChildren()
        };
        b.prototype.onAddToStage = function() {
            var a = this.stage.stageWidth,
            b = this.stage.stageHeight,
            d = a / 320,
            c = new egret.Shape;
            c.graphics.clear();
            c.graphics.beginFill(0, 0.5);
            c.graphics.drawRect(0, 0, a, b);
            c.graphics.endFill();
            this.finger.anchorX = 1;
            this.finger.x = a;
            this.finger.scaleX = d;
            this.finger.scaleY = d;
            egret.Tween.get(this.finger, {
                loop: !0
            }).to({
                y: 10
            },
            100).to({
                y: 0
            },
            100);
            var e = new egret.TextField;
            e.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1";
            e.size = 18;
            e.textAlign = "center";
            e.text = "\u70b9\u51fb\u53f3\u4e0a\u89d2\u5206\u4eab\u5230\u670b\u53cb\u5708\n\u8ba9\u4f60\u7684\u670b\u53cb\u4eec\u53bb\u6311\u6218\u4f60\u725b\u903c\u7684\u8bb0\u5f55\u5427\uff01";
            e.textColor = 16777215;
            e.width = a;
            e.x = a / 2;
            e.y = b / 2;
            e.anchorX = 0.5;
            e.scaleX = e.scaleY = d;
            this.addChild(c);
            this.addChild(e);
            this.addChild(this.finger);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onShare, this)
        };
        b.prototype.onShare = function(a) {
            a.currentTarget.parent && a.currentTarget.parent.removeChild(a.currentTarget);
            console.log("removeShareHint")
        };
        return b
    } (egret.DisplayObjectContainer);
    a.prototype.__class__ = "GameOverPanel.ShareHint"
})(GameOverPanel || (GameOverPanel = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
neoges; (function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null);
            d.call(this);
            this._useMultiPoints = !1;
            this._stats = -1;
            this._location = new egret.Point;
            this._target = a;
            null != this._target && this.addHostToManager()
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "target", {
            get: function() {
                return this._target
            },
            set: function(a) {
                this._target != a && (this._stats = -1, null != this._target && this.removeHostFromManager(), this._target = a, null != this._target && this.addHostToManager())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "location", {
            get: function() {
                return this._location.clone()
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.addHostToManager = function() {
            b.GestureManager.addHost(this)
        };
        a.prototype.removeHostFromManager = function() {
            b.GestureManager.removeHost(this)
        };
        a.prototype.onTouch = function(a) {};
        a.prototype.gestureBegan = function() {
            this._stats = 1;
            var a = new b.GestureEvent(b.GestureEvent.BEGAN);
            a.host = this._target;
            this.dispatchEvent(a)
        };
        a.prototype.gestureUpdate = function() {
            this._stats = 2;
            var a = new b.GestureEvent(b.GestureEvent.UPDATE);
            a.host = this._target;
            this.dispatchEvent(a)
        };
        a.prototype.gestureEnded = function() {
            this._stats = 3;
            var a = new b.GestureEvent(b.GestureEvent.ENDED);
            a.host = this._target;
            this.dispatchEvent(a);
            this._stats = -1
        };
        a.prototype.gestureFailed = function() {
            var a = new b.GestureEvent(b.GestureEvent.FAILED);
            a.host = this._target;
            this.dispatchEvent(a);
            this._stats = -1
        };
        a.prototype.subtract = function(a, b) {
            var d = new egret.Point;
            d.x = a.x - b.x;
            d.y = a.y - b.y;
            return d
        };
        a.prototype.getPointLength = function(a) {
            var b = 0,
            b = new egret.Point(0, 0);
            return b = egret.Point.distance(a, b)
        };
        a.prototype.dispose = function() {
            this._stats = -1;
            b.GestureManager.removeHost(this);
            this._target = null
        };
        return a
    } (egret.EventDispatcher);
    b.AbstractGesture = c;
    c.prototype.__class__ = "neoges.AbstractGesture"
})(neoges || (neoges = {})); (function(b) {
    var c = function() {
        function b() {
            this._collection = []
        }
        b.prototype.clone = function(a) {
            var b = this._collection.pop();
            null == b && (b = new egret.TouchEvent(a.type));
            for (var d in a) b[d] = a[d];
            return b
        };
        b.prototype.setProperties = function(a, b) {
            for (var d in a) b[d] = a[d];
            return b
        };
        b.prototype.reclaim = function(a) { - 1 == this._collection.indexOf(a) && this._collection.push(a)
        };
        b.prototype.reclaimAll = function(a) {
            for (; 0 < a.length;) this.reclaim(a[0]),
            a.shift()
        };
        return b
    } ();
    b.EventPool = c;
    c.prototype.__class__ = "neoges.EventPool"
})(neoges || (neoges = {})); (function(b) {
    var c = function() {
        function d() {}
        d.addHost = function(a) {
            var d = b.GestureManager.hostCollection; - 1 != d.indexOf(a) ? console.warn("\u4e0d\u8981\u91cd\u590d\u6dfb\u52a0\u624b\u52bf\u5b9e\u4f8b") : (b.GestureManager.registerEvent(a.target), d.push(a), b.GestureManager.eventDict[a.target.hashCode] = [])
        };
        d.removeHost = function(a) {
            var d = b.GestureManager.hostCollection,
            c = d.indexOf(a); - 1 == c ? console.warn("\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5b9e\u4f8b") : (d.slice(c, 1), b.GestureManager.removeEvent(a.target), b.GestureManager.eventDict[a.target.hashCode] = null)
        };
        d.registerEvent = function(a) {
            a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, b.GestureManager.touchedHandler, a)
        };
        d.removeEvent = function(a) {
            a.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, b.GestureManager.touchedHandler, a)
        };
        d.touchedHandler = function(a) {
            var d, c = egret.MainContext.instance.stage;
            a.type == egret.TouchEvent.TOUCH_BEGIN ? (d = a.currentTarget, b.GestureManager.currentTouchObject = d, c.removeEventListener(egret.TouchEvent.TOUCH_MOVE, b.GestureManager.touchedHandler, c), c.addEventListener(egret.TouchEvent.TOUCH_MOVE, b.GestureManager.touchedHandler, c), c.removeEventListener(egret.TouchEvent.TOUCH_END, b.GestureManager.touchedHandler, c), c.addEventListener(egret.TouchEvent.TOUCH_END, b.GestureManager.touchedHandler, c), c.removeEventListener(egret.Event.LEAVE_STAGE, b.GestureManager.leaveStageHandler, c), c.addEventListener(egret.Event.LEAVE_STAGE, b.GestureManager.leaveStageHandler, c)) : d = b.GestureManager.currentTouchObject;
            null == b.GestureManager.eventDict[d.hashCode] && (b.GestureManager.eventDict[d.hashCode] = []);
            var c = b.GestureManager.eventDict[d.hashCode],
            m;
            b.GestureManager.hasTouchEvent(a) ? (m = b.GestureManager.getTouchEventByID(a.touchPointID, d), b.GestureManager.evtPool.setProperties(a, m)) : (m = b.GestureManager.evtPool.clone(a), c.push(m));
            a = b.GestureManager.hostCollection;
            for (var h, g = 0; g < a.length; g++) if (h = a[g], h.target == d) h.onTouch(c);
            m.type == egret.TouchEvent.TOUCH_END && b.GestureManager.removeAllEvent();
            b.GestureManager.showTouchPoint && b.GestureManager.drawTouchPoint()
        };
        d.hasTouchEvent = function(a) {
            for (var d = b.GestureManager.eventDict[b.GestureManager.currentTouchObject.hashCode], c = 0; c < d.length; c++) if (d[c].touchPointID == a.touchPointID) return ! 0;
            return ! 1
        };
        d.getTouchEventByID = function(a, d) {
            for (var c = b.GestureManager.eventDict[d.hashCode], m = 0; m < c.length; m++) if (c[m].touchPointID == a) return c[m];
            return null
        };
        d.leaveStageHandler = function(a) {
            b.GestureManager.removeAllEvent()
        };
        d.removeAllEvent = function() {
            var a = egret.MainContext.instance.stage,
            d;
            for (d in b.GestureManager.eventDict) {
                var c = b.GestureManager.eventDict[d];
                null != c && b.GestureManager.evtPool.reclaimAll(c)
            }
            a.removeEventListener(egret.TouchEvent.TOUCH_MOVE, b.GestureManager.touchedHandler, a);
            a.removeEventListener(egret.TouchEvent.TOUCH_END, b.GestureManager.touchedHandler, a);
            a.removeEventListener(egret.Event.LEAVE_STAGE, b.GestureManager.leaveStageHandler, a);
            b.GestureManager.drawTouchPoint()
        };
        d.drawTouchPoint = function() {
            if (null != b.GestureManager.currentTouchObject) {
                var a = b.GestureManager.drawLayer,
                d = egret.MainContext.instance.stage;
                null == a.stage && d.addChild(a);
                a = a.graphics;
                a.clear();
                a.beginFill(0, 0.4);
                for (var c in b.GestureManager.eventDict) if (b.GestureManager.currentTouchObject.hashCode == c) {
                    var m = b.GestureManager.eventDict[c];
                    if (null != m && 0 < m.length) for (var h = 0; h < m.length; h++) d = m[h],
                    a.drawCircle(d.stageX, d.stageY, 10)
                }
                m = b.GestureManager.simulatePoints;
                for (h = 0; h < m.length; h++) d = m[h],
                a.drawCircle(d.stageX, d.stageY, 10);
                a.endFill()
            }
        };
        d.showTouchPoint = !1;
        d.simulateMultitouch = !1;
        d.simulatePoints = [];
        d.hostCollection = [];
        d.eventDict = {};
        d.evtPool = new b.EventPool;
        d.drawLayer = new egret.Sprite;
        return d
    } ();
    b.GestureManager = c;
    c.prototype.__class__ = "neoges.GestureManager"
})(neoges || (neoges = {}));
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
            b.call(this, a)
        }
        __extends(a, b);
        a.BEGAN = "began";
        a.UPDATE = "update";
        a.ENDED = "ended";
        a.FAILED = "failed";
        return a
    } (egret.Event);
    b.GestureEvent = c;
    c.prototype.__class__ = "neoges.GestureEvent"
})(neoges || (neoges = {}));
var currentLevel = 1,
passedLevel = 90,
test, steps = 999,
blockGap = 98,
pointer = function() {
    function b(b, d) {
        this.x = b;
        this.y = d
    }
    b.prototype.equal = function(b) {
        return b.x == this.x && b.y == this.y ? !0 : !1
    };
    return b
} ();
pointer.prototype.__class__ = "pointer";
var levelSteps = [];
function getTypeString(b) {
    switch (b) {
    case 0:
        return "empty";
    case 1:
        return "face";
    case 2:
        return "wall";
    case 3:
        return "white";
    case 4:
        return "big";
    case 5:
        return "magnet"
    }
}
function getTypeNumber(b) {
    switch (b) {
    case "empty":
        return 0;
    case "face":
        return 1;
    case "wall":
        return 2;
    case "white":
        return 3;
    case "big":
        return 4
    }
}
function safeRemove(b) {
    b.parent && b.parent.removeChild(b)
}
var colorID = -1,
COLOR = [5374493, 8307882, 12287684],
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
LevelPanel = function(b) {
    function c() {
        b.call(this);
        this.levelBtns = [];
        this.page = 0;
        this.lastPage = 2;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.bg.texture = RES.getRes("level-bg");
        this.dialog = new egret.Bitmap(RES.getRes("level-dialog"));
        this.homeBtn = new MyButton(RES.getRes("level-home"));
        this.previousBtn = new MyButton(RES.getRes("game-previous"));
        this.nextBtn = new MyButton(RES.getRes("game-next"));
        this.addChild(this.bg);
        this.addChild(this.dialog);
        this.addChild(this.homeBtn);
        this.addChild(this.previousBtn);
        this.addChild(this.nextBtn);
        var d = "passed";
        this.levelBtns.push(new LevelButton("passed", 0));
        for (var a = 1; 30 >= a; a++) d = a == currentLevel ? "current": a <= passedLevel ? "passed": "refer",
        d = new LevelButton(d, a),
        this.addChild(d),
        this.levelBtns.push(d);
        this.setAnchor();
        this.setLayout();
        this.setListener()
    }
    __extends(c, b);
    c.prototype.onAddToStage = function() {
        this.update()
    };
    c.prototype.setListener = function() {
        var b = this;
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            sendEvent("home", b)
        },
        this);
        for (var a = 0; a < this.levelBtns.length; a++) this.levelBtns[a].addEventListener(egret.TouchEvent.TOUCH_END,
        function(a) {
            currentLevel = a.currentTarget.levelNum;
            sendEvent("start", b)
        },
        this);
        this.previousBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            0 < b.page && (b.page--, b.update())
        },
        this);
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            b.page < b.lastPage && (b.page++, b.update())
        },
        this)
    };
    c.prototype.update = function() {
        for (var b = "passed",
        a = 1; a < this.levelBtns.length; a++) {
            var c = a + 30 * this.page;
            c == currentLevel ? (b = "current", this.levelBtns[a].touchEnabled = !0) : c <= passedLevel ? (b = "passed", this.levelBtns[a].touchEnabled = !0) : b = "refer";
            this.levelBtns[a].update(b, c)
        }
    };
    c.prototype.setLayout = function() {
        this.homeBtn.x = 200;
        this.homeBtn.y = -450;
        this.dialog.y = -50;
        this.nextBtn.x = 100;
        this.nextBtn.y = 500;
        this.previousBtn.x = -100;
        this.previousBtn.y = 500
    };
    return c
} (Panel);
LevelPanel.prototype.__class__ = "LevelPanel";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
StartPanel = function(b) {
    function c() {
        var d = this;
        b.call(this);
        this.bg.texture = RES.getRes("start-bg");
        this.startBtn = new MyButton(RES.getRes("start-button"));
        this.title = new egret.Bitmap(RES.getRes("start-title"));
        this.addChild(this.bg);
        1 != version && this.addChild(this.title);
        this.addChild(this.startBtn);
        this.setAnchor();
        this.setLayout();
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            sendEvent("level", d)
        },
        this)
    }
    __extends(c, b);
    c.prototype.setLayout = function() {
        this.title.y = -350;
        this.startBtn.y = 200
    };
    return c
} (Panel);
StartPanel.prototype.__class__ = "StartPanel";
var VERSION; (function(b) {
    b[b.autobox = 0] = "autobox";
    b[b.single = 1] = "single";
    b[b.market = 2] = "market";
    b[b.weixin = 3] = "weixin"
})(VERSION || (VERSION = {}));
var score = 0,
bestScore = 0,
screenW = 320,
screenH = 568,
centerX = 160,
centerY = 284,
sizeOffset = 1,
sizeOffsetW = 1,
state = 0,
gameState; (function(b) {
    b[b.ready = 0] = "ready";
    b[b.playing = 1] = "playing";
    b[b.pausing = 2] = "pausing";
    b[b.over = 3] = "over";
    b[b.replay = 4] = "replay";
    b[b.home = 5] = "home"
})(gameState || (gameState = {}));
var version = 2,
lowResolution = !1,
debug = !1,
local = !1,
gameName = "kuaiyiqi_2",
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
            void 0 === a && (a = null);
            d.call(this, a);
            this._useMultiPoints = !1
        }
        __extends(a, d);
        a.prototype.onTouch = function(a) {
            1 < a.length || b.GestureManager.simulateMultitouch || (a = a[0], a.type == egret.TouchEvent.TOUCH_BEGIN ? (this.gestureBegan(), this._startPoint = new egret.Point(a.stageX, a.stageY)) : a.type == egret.TouchEvent.TOUCH_MOVE ? (this._endPoint = new egret.Point(a.stageX, a.stageY), this.gestureUpdate()) : a.type == egret.TouchEvent.TOUCH_END && this.gestureEnded())
        };
        a.prototype.gestureUpdate = function() {
            this._stats = 2;
            var a = new b.GestureEvent(b.GestureEvent.UPDATE);
            a.host = this.target;
            a.offsetX = this._endPoint.x - this._startPoint.x;
            a.offsetY = this._endPoint.y - this._startPoint.y;
            this.dispatchEvent(a)
        };
        return a
    } (b.AbstractGesture);
    b.PanGesture = c;
    c.prototype.__class__ = "neoges.PanGesture"
})(neoges || (neoges = {}));
var OverDialog = GameOverPanel.OverDialog,
Controller = function() {
    function b(b) {
        game = this;
        grestart = this.onGameInit;
        local && (egret.localStorage.getItem(gameName) ? passedLevel = parseInt(egret.localStorage.getItem(gameName)) : savePassed());
        this.container = b;
        this.startPanel = new StartPanel;
        this.levelPanel = new LevelPanel;
        this.gamePanel = new GamePanel;
        this.overDialog = new OverDialog;
        this.startPanel.addEventListener("level", this.onGameLevelSelect, this);
        this.levelPanel.addEventListener("start", this.onGameStart, this);
        this.levelPanel.addEventListener("home", this.onGameInit, this);
        this.gamePanel.addEventListener("over", this.onGameOver, this);
        this.gamePanel.addEventListener("level", this.onGameLevelSelect, this);
        this.gamePanel.addEventListener("passed", this.onGamePassed, this);
        this.gamePanel.addEventListener("replay", this.onGameRestart, this);
        this.overDialog.addEventListener(GameOverPanel.REPLAY, this.onGameRestart, this);
        this.overDialog.addEventListener(GameOverPanel.NEXT, this.onGameRestart, this);
        this.onGameInit()
    }
    b.prototype.onGameInit = function() {
        this.container.removeChildren();
        this.container.addChild(this.startPanel);
        window.cb_finishload()
    };
    b.prototype.onGameLevelSelect = function() {
        this.container.removeChildren();
        this.container.addChild(this.levelPanel)
    };
    b.prototype.onGameStart = function() {
        this.container.removeChildren();
        this.container.addChild(this.gamePanel);
        window.cb_start()
    };
    b.prototype.onGameOver = function() {
        this.levelPanel.update();
        this.overDialog.update(0, bestScore, !1);
        this.container.addChild(this.overDialog);
        window.cb_gameover(currentLevel)
    };
    b.prototype.onGameRestart = function(b) {
        b.type == GameOverPanel.NEXT ? 150 > currentLevel && currentLevel++:score = 0;
        this.gamePanel.reset();
        window.cb_restart()
    };
    b.prototype.onGamePassed = function() {
        score += steps;
        currentLevel == passedLevel && (passedLevel++, this.levelPanel.update());
        this.overDialog.update(1, bestScore, !0);
        this.container.addChild(this.overDialog);
        console.log(currentLevel);
        window.myScore = currentLevel;
        // updateShare(currentLevel);
        // Play68.setRankingScoreDesc(currentLevel,Play68.rankingShowType.RANKING_SHOW_NO);
    };
    b.prototype.removePanel = function(b) {
        b.parent && b.parent.removeChild(b)
    };
    return b
} ();
Controller.prototype.__class__ = "Controller";
function sendEvent(b, c) {
    var d = new egret.Event(b);
    c.dispatchEvent(d)
}
var game, grestart;
function restartGame() {
    grestart.call(game)
}
function savePassed() {
    if (local) {
        var b = gameName + "passedLevel",
        c = "" + passedLevel;
        egret.localStorage.setItem(b, c);
        b = gameName + "bestScore";
        c = "" + bestScore;
        egret.localStorage.setItem(b, c)
    }
}
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
tweenEnd = !0,
GridBoard = function(b) {
    function c() {
        b.call(this);
        this.blocks = [];
        this.hasDirect = !0;
        this.emptyI = [];
        this.CN = 0;
        this.conversation = [];
        this.lastTouchY = this.lastTouchX = 0;
        this.moveBlockN = -1;
        this.timer = new egret.Timer(3E3, -1);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.speak, this);
        this.cv = new BlockConversation
    }
    __extends(c, b);
    c.prototype.createBlocks = function() {
        this.removeChildren();
        this.conversation = [];
        this.blocks = [];
        var b = RES.getRes("levels").level[currentLevel];
        this.map = b.map;
        this.addMagnetBlock(b);
        this.addCornerBlock(b);
        this.addOneGridBlock(b, 1);
        this.addOneGridBlock(b, 0);
        this.addOneGridBlock(b, 2);
        this.addBigBlock(b);
        for (b = 1; b <= this.map[0]; b++) for (var a = 1; a <= this.map[1]; a++) {
            var c = new pointer(b, a); - 1 == this.getIndex(c) && (c = [], c.push(new pointer(b, a)), c = new GameBlock(c, 3), this.addChild(c), this.blocks.push(c))
        }
        this.drawBg();
        for (b = 0; b < this.blocks.length; b++) 1 == this.blocks[b].type && this.conversation.push(this.blocks[b].coords[0])
    };
    c.prototype.addOneGridBlock = function(b, a) {
        for (var c in b[getTypeString(a)]) {
            var k = [];
            k.push(new pointer(b[getTypeString(a)][c][0], b[getTypeString(a)][c][1]));
            k = new GameBlock(k, a);
            0 != a && 2 != a && this.addChild(k);
            this.blocks.push(k)
        }
    };
    c.prototype.addBigBlock = function(b) {
        for (var a in b.big) {
            for (var c = [], k = 0; k < b.big[a][2]; k++) for (var m = 0; m < b.big[a][3]; m++) c.push(new pointer(b.big[a][0] + k, b.big[a][1] + m));
            c = new GameBlock(c, 4);
            this.addChild(c);
            this.blocks.push(c)
        }
    };
    c.prototype.addMagnetBlock = function(b) {
        for (var a in b.magnet) {
            var c = [],
            k;
            for (k in b.magnet[a]) c.push(new pointer(b.magnet[a][k][0], b.magnet[a][k][1]));
            c = new GameBlock(c, 5);
            this.addChild(c);
            this.blocks.push(c)
        }
    };
    c.prototype.addCornerBlock = function(b) {
        if (b.corner) {
            console.log(b.corner);
            for (var a in b.corner) {
                var c = [],
                k;
                for (k in b.corner[a]) console.log("corner Joint"),
                c.push(new pointer(b.corner[a][k][0], b.corner[a][k][1]));
                console.log("corner");
                c = new GameBlock(c, 6);
                this.addChild(c);
                this.blocks.push(c)
            }
        }
    };
    c.prototype.onSelect = function(b) {
        egret.Tween.removeTweens(this.cv);
        this.cv.alpha = 0;
        this.timer.reset();
        this.timer.start();
        if (tweenEnd) {
            this.isSelected = !0;
            this.startPoint = new egret.Point(b.host.x, b.host.y);
            b = b.host;
            var a = this.getIndex(b.coords[0]);
            this.moveBlockN = a;
            this.movableD = [];
            var c = [],
            k = [],
            k = clonePointerArr(b.coords),
            m;
            for (m in k) k[m].x++;
            this.isOverlap(k, a) || (c.push(k), this.movableD.push(1));
            k = clonePointerArr(b.coords);
            for (m in k) k[m].x--;
            this.isOverlap(k, a) || (c.push(k), this.movableD.push(3));
            k = clonePointerArr(b.coords);
            for (m in k) k[m].y++;
            this.isOverlap(k, a) || (c.push(k), this.movableD.push(2));
            k = clonePointerArr(b.coords);
            for (m in k) k[m].y--;
            this.isOverlap(k, a) || (c.push(k), this.movableD.push(0));
            0 == c.length ? this.hasDirect = this.isSelected = !1 : (this.hasDirect = !0, this.movable = c, console.log(this.movable))
        }
    };
    c.prototype.onMove = function(b) {
        if (tweenEnd && this.hasDirect && this.isSelected && !(20 > Math.abs(b.offsetX) && 20 > Math.abs(b.offsetY))) {
            if (Math.abs(b.offsetX) > Math.abs(b.offsetY)) if (0 < b.offsetX) {
                console.log("east");
                for (var a in this.movableD) 1 == this.movableD[a] && (1 == this.blocks[this.getIndex(this.movable[a][0])].type && this.blocks[this.getIndex(this.movable[a][0])].merge(), this.blocks[this.moveBlockN].coords = this.movable[a], this.blocks[this.moveBlockN].move())
            } else for (a in console.log("west"), this.movableD) 3 == this.movableD[a] && (1 == this.blocks[this.getIndex(this.movable[a][0])].type && this.blocks[this.getIndex(this.movable[a][0])].merge(), this.blocks[this.moveBlockN].coords = this.movable[a], this.blocks[this.moveBlockN].move());
            else if (0 < b.offsetY) for (a in console.log("south"), this.movableD) 2 == this.movableD[a] && (1 == this.blocks[this.getIndex(this.movable[a][0])].type && this.blocks[this.getIndex(this.movable[a][0])].merge(), this.blocks[this.moveBlockN].coords = this.movable[a], this.blocks[this.moveBlockN].move());
            else for (a in console.log("north"), this.movableD) 0 == this.movableD[a] && (1 == this.blocks[this.getIndex(this.movable[a][0])].type && this.blocks[this.getIndex(this.movable[a][0])].merge(), this.blocks[this.moveBlockN].coords = this.movable[a], this.blocks[this.moveBlockN].move());
            this.isSelected = !1
        }
    };
    c.prototype.onTouchEnd = function() {
        this.isSelected = !1
    };
    c.prototype.isOverlap = function(b, a) {
        for (var c in b) {
            var k = this.getIndex(b[c]);
            if ( - 1 == k) return ! 0;
            if (1 == this.blocks[a].type && 1 == this.blocks[k].type) break;
            else if (0 != this.blocks[k].type && k != a) return ! 0
        }
        return ! 1
    };
    c.prototype.resetEmpty = function() {
        this.emptyI = [];
        for (var b in this.blocks) 0 == this.blocks[b].type && (this.blocks[b].coords[0] = new pointer(0, 0), this.emptyI.push(b));
        b = 0;
        for (var a = 1; a <= this.map[0]; a++) for (var c = 1; c <= this.map[1]; c++) - 1 == this.getIndex(new pointer(a, c)) && (this.blocks[this.emptyI[b++]].coords[0] = new pointer(a, c), console.log(a, c));
        this.conversation = [];
        for (b = 0; b < this.blocks.length; b++) 1 == this.blocks[b].type && (this.conversation.push(this.blocks[b].coords[0]), this.blocks[b].normalFace(), a = new pointer(this.blocks[b].coords[0].x + 1, this.blocks[b].coords[0].y), -1 != this.getIndex(a) && 1 == this.blocks[this.getIndex(a)].type ? this.blocks[b].loveFace() : (a = new pointer(this.blocks[b].coords[0].x - 1, this.blocks[b].coords[0].y), -1 != this.getIndex(a) && 1 == this.blocks[this.getIndex(a)].type ? this.blocks[b].loveFace() : (a = new pointer(this.blocks[b].coords[0].x, this.blocks[b].coords[0].y + 1), -1 != this.getIndex(a) && 1 == this.blocks[this.getIndex(a)].type ? this.blocks[b].loveFace() : (a = new pointer(this.blocks[b].coords[0].x, this.blocks[b].coords[0].y - 1), -1 != this.getIndex(a) && 1 == this.blocks[this.getIndex(a)].type && this.blocks[b].loveFace()))))
    };
    c.prototype.setTouch = function() {
        for (var b in this.blocks) if (0 != this.blocks[b].type && 2 != this.blocks[b].type) {
            this.blocks[b].touchEnabled = !0;
            var a = new neoges.PanGesture(this.blocks[b]);
            a.addEventListener(neoges.GestureEvent.BEGAN, this.onSelect, this);
            a.addEventListener(neoges.GestureEvent.UPDATE, this.onMove, this);
            a.addEventListener(neoges.GestureEvent.ENDED, this.onTouchEnd, this)
        }
    };
    c.prototype.disableTouch = function() {
        for (var b in this.blocks) this.blocks[b].touchEnabled = !1
    };
    c.prototype.getIndex = function(b) {
        for (var a in this.blocks) for (var c in this.blocks[a].coords) if (this.blocks[a].coords[c].equal(b)) return a;
        return - 1
    };
    c.prototype.update = function() {
        this.resetEmpty()
    };
    c.prototype.reset = function() {
        this.createBlocks();
        this.resetEmpty();
        this.setTouch();
        this.scaleSize = this.map[0] >= this.map[1] ? this.scaleX = this.scaleY = 6 / this.map[0] : this.scaleX = this.scaleY = 5 / (this.map[0] + 0.5);
        egret.Tween.removeTweens(this.cv);
        this.cv.alpha = 0;
        this.timer.reset();
        this.timer.start();
        this.addChild(this.cv)
    };
    c.prototype.drawBg = function() {
        var b = blockGap + 2 * boardBorder;
        this.graphics.clear();
        for (var a = 0; a < this.blocks.length; a++) if (2 != this.blocks[a].type) for (var c in this.blocks[a].coords) {
            var k = this.blocks[a].coords[c].x * blockGap - blockGap,
            m = this.blocks[a].coords[c].y * blockGap - blockGap;
            this.graphics.beginFill(16696782, 1);
            this.graphics.drawRoundRect(k, m, b, b, 30)
        }
        this.graphics.endFill();
        this.width = this.map[0] * blockGap + 20;
        this.height = this.map[1] * blockGap + 20
    };
    c.prototype.judge = function() {
        for (var b = 0,
        a = 0; a < this.blocks.length; a++) 1 == this.blocks[a].type && b++;
        return 1 == b ? !0 : !1
    };
    c.prototype.speak = function() {
        this.cv.change();
        this.cv.x = blockGap / 2 + (this.conversation[this.CN].x - 1) * blockGap + boardBorder;
        this.cv.y = blockGap / 2 + (this.conversation[this.CN].y - 1) * blockGap + boardBorder - 50;
        var b = egret.Tween.get(this.cv);
        b.to({
            alpha: 1
        },
        300).wait(2E3).to({
            alpha: 0
        },
        300);
        b.wait(300).call(function() {},
        this);
        this.CN++;
        this.CN >= this.conversation.length && (this.CN = 0)
    };
    return c
} (egret.Sprite);
GridBoard.prototype.__class__ = "GridBoard";
var boardBorder = 10;
function clonePointerArr(b) {
    var c = [],
    d;
    for (d in b) c.push(new pointer(b[d].x, b[d].y));
    return c
}
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
BlockConversation = function(b) {
    function c() {
        b.call(this);
        this.i = 1;
        this.text = new egret.Bitmap;
        var c = new egret.Bitmap(RES.getRes("conversation-bg"));
        this.anchorY = 1;
        this.change();
        this.text.x = 20;
        this.text.y = 15;
        this.addChild(this.text);
        this.addChild(c)
    }
    __extends(c, b);
    c.prototype.change = function() {
        this.text.texture = RES.getRes("conversation-" + this.i);
        this.i++;
        6 < this.i && (this.i = 1)
    };
    return c
} (egret.DisplayObjectContainer);
BlockConversation.prototype.__class__ = "BlockConversation";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
blockType; (function(b) {
    b[b.empty = 0] = "empty";
    b[b.face = 1] = "face";
    b[b.wall = 2] = "wall";
    b[b.white = 3] = "white";
    b[b.big = 4] = "big";
    b[b.magnet = 5] = "magnet";
    b[b.corner = 6] = "corner"
})(blockType || (blockType = {}));
var directions; (function(b) {
    b[b.north = 0] = "north";
    b[b.east = 1] = "east";
    b[b.south = 2] = "south";
    b[b.west = 3] = "west";
    b[b.none = 4] = "none"
})(directions || (directions = {}));
var GameBlock = function(b) {
    function c(c, a, e) {
        var k = this;
        void 0 === e && (e = 0);
        b.call(this);
        this.moveSpeed = 200;
        this.bitmapBody = new egret.Bitmap;
        this.shapeBody = new egret.Shape;
        this.coords = [];
        this.setCoord(c);
        this.type = a;
        this.corner = e;
        this.extSize = new pointer(this.coords[this.coords.length - 1].x - this.coords[0].x + 1, this.coords[this.coords.length - 1].y - this.coords[0].y + 1);
        this.width = (blockGap - 90) * (this.extSize.x - 1) + 90 * this.extSize.x;
        this.height = (blockGap - 90) * (this.extSize.y - 1) + 90 * this.extSize.y;
        this.anchorX = 45 / this.width;
        this.anchorY = 45 / this.height;
        if (1 == a) this.bitmapBody.texture = RES.getRes("game-block" + a),
        this.addChild(this.bitmapBody);
        else if (5 == a) {
            colorID = (colorID + 1) % 3;
            c = new egret.Shape;
            this.addChild(c);
            for (var m in this.coords) c.graphics.beginFill(COLOR[colorID], 1),
            c.graphics.drawRoundRect((this.coords[m].x - this.coords[0].x) * blockGap, (this.coords[m].y - this.coords[0].y) * blockGap, 90, 90, 20),
            e = new egret.Bitmap(RES.getRes("game-block" + a)),
            e.anchorX = e.anchorY = 0.5,
            e.x = (this.coords[m].x - this.coords[0].x) * blockGap + 45,
            e.y = (this.coords[m].y - this.coords[0].y) * blockGap + 45,
            this.addChild(e);
            c.graphics.endFill()
        } else if (6 == a) {
            c = new egret.Shape;
            for (a = 0; a < this.coords.length - 1; a++) {
                e = m = 0;
                var h = this.coords[a].x < this.coords[a + 1].x ? this.coords[a].x: this.coords[a + 1].x,
                g = this.coords[a].y < this.coords[a + 1].y ? this.coords[a].y: this.coords[a + 1].y,
                f = Math.abs(this.coords[a + 1].x - this.coords[a].x) + 1,
                l = Math.abs(this.coords[a + 1].y - this.coords[a].y) + 1;
                f > l ? m = (blockGap - 90) / 2 : e = (blockGap - 90) / 2;
                c.graphics.beginFill(51675, 1);
                c.graphics.drawRoundRect((h - this.coords[0].x) * blockGap, (g - this.coords[0].y) * blockGap, f * (90 + m), l * (90 + e), 20)
            }
            c.graphics.endFill();
            this.addChild(c)
        } else 3 == a && (h = 16777215),
        4 == a && (h = 51675),
        this.shapeBody.graphics.beginFill(h, 1),
        this.shapeBody.graphics.drawRoundRect(0, 0, this.width, this.height, 20),
        this.shapeBody.graphics.endFill(),
        this.addChild(this.shapeBody);
        this.init();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
        function() {
            k.alpha = 0.6
        },
        this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,
        function() {
            k.alpha = 1
        },
        this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
        function() {
            k.alpha = 1
        },
        this)
    }
    __extends(c, b);
    c.prototype.move = function() {
        var b = this,
        a = this.transCoord();
        tweenEnd = !1;
        var c = egret.Tween.get(this);
        1 == this.type && (this.bitmapBody.texture = RES.getRes("game-block" + this.type + "-move"));
        c.to({
            x: a.x,
            y: a.y
        },
        this.moveSpeed, egret.Ease.sineOut).call(function() {
            tweenEnd = !0;
            sendEvent("move", b.parent);
            egret.Tween.removeTweens(b);
            b.alpha = 1
        },
        this)
    };
    c.prototype.merge = function() {
        var b = this;
        this.type = 0;
        egret.Tween.get(this).to({
            alpha: 0
        },
        this.moveSpeed / 2).call(function() {
            safeRemove(b.bitmapBody);
            egret.Tween.removeTweens(b)
        },
        this)
    };
    c.prototype.init = function() {
        var b = this,
        a = this.transCoord();
        this.x = a.x;
        this.y = a.y;
        this.scaleX = this.scaleY = 0;
        tweenEnd = !1;
        egret.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        },
        this.moveSpeed, egret.Ease.sineIn).call(function() {
            tweenEnd = !0;
            egret.Tween.removeTweens(b)
        },
        this)
    };
    c.prototype.transCoord = function() {
        return new pointer(blockGap / 2 + (this.coords[0].x - 1) * blockGap + boardBorder, blockGap / 2 + (this.coords[0].y - 1) * blockGap + boardBorder)
    };
    c.prototype.setCoord = function(b) {
        this.coords = b
    };
    c.prototype.loveFace = function() {
        this.bitmapBody.texture = RES.getRes("game-block" + this.type + "-love")
    };
    c.prototype.normalFace = function() {
        this.bitmapBody.texture = RES.getRes("game-block" + this.type)
    };
    return c
} (egret.DisplayObjectContainer);
GameBlock.prototype.__class__ = "GameBlock";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
LevelButton = function(b) {
    function c(c, a) {
        b.call(this, RES.getRes("level-" + c));
        this.type = c;
        "refer" == c && (this.touchEnabled = !1);
        this.levelNum = a;
        this.label = new egret.TextField;
        this.label.fontFamily = "Arial";
        this.label.text = "" + this.levelNum;
        this.label.anchorX = this.label.anchorY = 0.5;
        this.label.x = this.width / 2;
        this.label.y = this.height / 2;
        this.label.size = 40;
        this.label.scaleY = 1.1;
        this.addChild(this.label);
        this.x = -190 + (a - 1) % 5 * 95;
        this.y = -260 + 110 * Math.floor((a - 1) / 5);
        this.scaleX = this.scaleY = 0;
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
    }
    __extends(c, b);
    c.prototype.update = function(b, a) {
        var c = this,
        k = 10 * Math.floor(this.levelNum % 31);
        egret.Tween.get(this).to({
            scaleX: 0,
            scaleY: 0
        },
        100).call(function() {
            c.levelNum = a;
            c.label.text = "" + c.levelNum;
            c.type = b;
            c.bg.texture = RES.getRes("level-" + b);
            c.touchEnabled = "refer" != b ? !0 : !1
        },
        this).wait(k).to({
            scaleX: 1,
            scaleY: 1
        },
        100).call(function() {
            egret.Tween.removeTweens(c)
        },
        this)
    };
    c.prototype.onRemoveFromStage = function() {
        this.scaleX = this.scaleY = 0
    };
    return c
} (MyButton);
LevelButton.prototype.__class__ = "LevelButton";
var LevelSet = function() {
    return function() {
        this.map = [];
        this.empty = [];
        this.face = [];
        this.wall = [];
        this.white = [];
        this.big = [];
        this.magnet = [];
        this.corner = []
    }
} ();
LevelSet.prototype.__class__ = "LevelSet";
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
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");
        screenW = this.stage.stageWidth;
        screenH = this.stage.stageHeight;
        centerX = screenW / 2;
        centerY = screenH / 2;
        sizeOffset = screenH / 1136;
        sizeOffsetW = screenW / 640
    };
    c.prototype.onComplete = function(b) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onComplete, this);
        debug && egret.Profiler.getInstance().run();
        this.createGameScene()
    };
    c.prototype.createGameScene = function() {
        this.ctrl = new Controller(this)
    };
    return c
} (egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MyText = function(b) {
    function c(c) {
        b.call(this);
        this.bg = new egret.Bitmap(c);
        this.bg.anchorX = this.bg.anchorY = 0.5;
        this.addChild(this.bg);
        this.text = new egret.TextField;
        this.text.anchorX = this.text.anchorY = 0.5;
        this.setText("0");
        this.addChild(this.text)
    }
    __extends(c, b);
    c.prototype.setText = function(b) {
        this.text.text = b
    };
    c.prototype.setTextSize = function(b) {
        this.text.size = b
    };
    c.prototype.setPosOffset = function(b, a) {
        void 0 === b && (b = 0);
        void 0 === a && (a = 0);
        this.text.y = a;
        this.text.x = b
    };
    return c
} (egret.DisplayObjectContainer);
MyText.prototype.__class__ = "MyText";