var egret, __extends, testDeviceType, testRuntimeType, __global, egret_sin_map, egret_cos_map, i, egret_html5_localStorage, egret_h5_graphics, egret_webgl_graphics, RES, Fw, GameData, Drag, L_StateButton, glodAnimation, levellistbar, Game, GameBGView, Methods, getAd, getEnd, overPlan, stopPlan, topbar, v_selectLevel, v_start, winPlan, help, Container, settings, L_ScreenRotating, UI, loading, Main, level_1, level_10, level_11, level_12, level_13, level_14, level_15, level_16, level_17, level_18, level_19, level_2, level_20, level_21, level_22, level_23, level_24, level_25, level_26, level_27, level_28, level_29, level_3, level_30, level_4, level_5, level_6, level_7, level_8, level_9, outlevel;
! function(a) {
    function b(b) {
        var c, d, e, f;
        for (c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
        if (d = a.egret_string_code[b])
            for (e = c.length, f = 0; e > f; f++) d = d.replace("{" + f + "}", c[f]);
        return d
    }
    var c = function() {
        function c() {}
        return c.fatal = function(b, c) {
            throw void 0 === c && (c = null), a.Logger.traceToConsole("Fatal", b, c), Error(a.Logger.getTraceCode("Fatal", b, c))
        }, c.info = function(b, c) {
            void 0 === c && (c = null), a.Logger.traceToConsole("Info", b, c)
        }, c.warning = function(b, c) {
            void 0 === c && (c = null), a.Logger.traceToConsole("Warning", b, c)
        }, c.fatalWithErrorId = function(a) {
            for (var d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
            d.unshift(a), (d = b.apply(null, d)) ? c.fatal(d) : c.warning(b(-1, a))
        }, c.infoWithErrorId = function(a) {
            for (var d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
            d.unshift(a), (d = b.apply(null, d)) ? c.info(d) : c.warning(b(-1, a))
        }, c.warningWithErrorId = function(a) {
            for (var d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
            d.unshift(a), c.warning((d = b.apply(null, d)) ? d : b(-1, a))
        }, c.traceToConsole = function(b, c, d) {
            console.log(a.Logger.getTraceCode(b, c, d))
        }, c.getTraceCode = function(a, b, c) {
            return "[" + a + "]" + b + (null == c ? "" : ":" + c)
        }, c
    }();
    a.Logger = c, c.prototype.__class__ = "egret.Logger", a.egret_string_code = {}, a.egret_string_code[-1] = "不存在的stringId:{0}", a.egret_string_code[1e3] = "Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE", a.egret_string_code[1001] = "该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级", a.egret_string_code[1002] = "egret.Ticker是框架内部使用的单例，不允许在外部实例化，计时器请使用egret.Timer类！", a.egret_string_code[1003] = "Ticker#setTimeout方法即将废弃,请使用egret.setTimeout", a.egret_string_code[1004] = "ExternalInterface调用了js没有注册的方法: {0}", a.egret_string_code[1005] = "设置了已经存在的blendMode: {0}", a.egret_string_code[1006] = "child不在当前容器内", a.egret_string_code[1007] = "提供的索引超出范围", a.egret_string_code[1008] = "child未被addChild到该parent", a.egret_string_code[1009] = "设置了已经存在的适配模式:{0}", a.egret_string_code[1010] = "addEventListener侦听函数不能为空", a.egret_string_code[1011] = 'BitmapText找不到文字所对应的纹理:"{0}"', a.egret_string_code[1012] = "egret.BitmapTextSpriteSheet已废弃，请使用egret.BitmapFont代替。", a.egret_string_code[1013] = "TextField.setFocus 没有实现", a.egret_string_code[1014] = "Ease不能被实例化", a.egret_string_code[1015] = "xml not found!", a.egret_string_code[1016] = "{0}已经废弃", a.egret_string_code[1017] = "JSON文件格式不正确: {0}\ndata: {1}", a.egret_string_code[1018] = "egret_html5_localStorage.setItem保存失败,key={0}&value={1}", a.egret_string_code[1019] = "网络异常:{0}", a.egret_string_code[1020] = "无法初始化着色器", a.egret_string_code[1021] = "当前浏览器不支持webgl", a.egret_string_code[1022] = "{0} ArgumentError", a.egret_string_code[1023] = "此方法在ScrollView内不可用!", a.egret_string_code[1024] = "使用了尚未实现的ScaleMode", a.egret_string_code[1025] = "遇到文件尾", a.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.", a.egret_string_code[1027] = "DecodingError", a.egret_string_code[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。", a.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable", a.egret_string_code[1030] = "该API已废弃", a.egret_string_code[2e3] = "RES.createGroup()传入了配置中不存在的键值: {0}", a.egret_string_code[2001] = 'RES加载了不存在或空的资源组:"{0}"', a.egret_string_code[3e3] = "主题配置文件加载失败: {0}", a.egret_string_code[3001] = "找不到主题中所配置的皮肤类名: {0}", a.egret_string_code[3002] = '索引:"{0}"超出集合元素索引范围', a.egret_string_code[3003] = "在此组件中不可用，若此组件为容器类，请使用", a.egret_string_code[3004] = "addChild(){0}addElement()代替", a.egret_string_code[3005] = "addChildAt(){0}addElementAt()代替", a.egret_string_code[3006] = "removeChild(){0}removeElement()代替", a.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()代替", a.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()代替", a.egret_string_code[3009] = "swapChildren(){0}swapElements()代替", a.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()代替", a.egret_string_code[3011] = '索引:"{0}"超出可视元素索引范围', a.egret_string_code[3012] = "此方法在Scroller组件内不可用!", a.egret_string_code[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！", a.egret_string_code[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", a.egret_string_code[4001] = "Abstract class can not be instantiated!", a.egret_string_code[4002] = "Unnamed data!", a.egret_string_code[4003] = "Nonsupport version!", a.egret_string_code[3100] = "当前浏览器不支持WebSocket", a.egret_string_code[3101] = "请先连接WebSocket", a.egret_string_code[3102] = "请先设置type为二进制类型", a.getString = b
}(egret || (egret = {})),
function(a) {
    var b = function() {
        function a() {
            this._hashCode = a.hashCount++
        }
        return Object.defineProperty(a.prototype, "hashCode", {
            get: function() {
                return this._hashCode
            },
            enumerable: !0,
            configurable: !0
        }), a.hashCount = 1, a
    }();
    a.HashObject = b, b.prototype.__class__ = "egret.HashObject"
}(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, ! function(a) {
        var b = function(a) {
            function b(b) {
                void 0 === b && (b = 300), a.call(this), this.objectPool = [], this._length = 0, 1 > b && (b = 1), this.autoDisposeTime = b, this.frameCount = 0
            }
            return __extends(b, a), b.prototype._checkFrame = function() {
                this.frameCount--, 0 >= this.frameCount && this.dispose()
            }, Object.defineProperty(b.prototype, "length", {
                get: function() {
                    return this._length
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.push = function(a) {
                var c = this.objectPool; - 1 == c.indexOf(a) && (c.push(a), a.__recycle && a.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, b._callBackList.push(this)))
            }, b.prototype.pop = function() {
                return 0 == this._length ? null : (this._length--, this.objectPool.pop())
            }, b.prototype.dispose = function() {
                0 < this._length && (this.objectPool = [], this._length = 0), this.frameCount = 0;
                var a = b._callBackList,
                    c = a.indexOf(this); - 1 != c && a.splice(c, 1)
            }, b._callBackList = [], b
        }(a.HashObject);
        a.Recycler = b, b.prototype.__class__ = "egret.Recycler"
    }(egret || (egret = {})),
    function(a) {
        a.__START_TIME, a.getTimer = function() {
            return Date.now() - a.__START_TIME
        }
    }(egret || (egret = {})),
    function(a) {
        a.__callLaterFunctionList = [], a.__callLaterThisList = [], a.__callLaterArgsList = [], a.callLater = function(b, c) {
            for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            a.__callLaterFunctionList.push(b), a.__callLaterThisList.push(c), a.__callLaterArgsList.push(d)
        }, a.__callAsyncFunctionList = [], a.__callAsyncThisList = [], a.__callAsyncArgsList = [], a.__callAsync = function(b, c) {
            for (var d = [], e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            a.__callAsyncFunctionList.push(b), a.__callAsyncThisList.push(c), a.__callAsyncArgsList.push(d)
        }
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b() {}
            return b.prototype.call = function(a) {
                this.callback && this.callback.call(this.thisObject, a)
            }, b.prototype.dispose = function() {
                this.thisObject = this.callback = null, b.__freeList.push(this)
            }, b.push = function(c, d) {
                var e;
                e = b.__freeList.length ? b.__freeList.pop() : new a.RenderCommand, e.callback = c, e.thisObject = d, a.MainContext.__DRAW_COMMAND_LIST.push(e)
            }, b.__freeList = [], b
        }();
        a.RenderCommand = b, b.prototype.__class__ = "egret.RenderCommand"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), b.call(this), this.data = null, this._type = "", this._cancelable = this._bubbles = !1, this._eventPhase = 2, this._target = this._currentTarget = null, this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this.isNew = !0, this._type = a, this._bubbles = c, this._cancelable = d
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "type", {
                get: function() {
                    return this._type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "bubbles", {
                get: function() {
                    return this._bubbles
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "cancelable", {
                get: function() {
                    return this._cancelable
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "eventPhase", {
                get: function() {
                    return this._eventPhase
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "currentTarget", {
                get: function() {
                    return this._currentTarget
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "target", {
                get: function() {
                    return this._target
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.isDefaultPrevented = function() {
                return this._isDefaultPrevented
            }, c.prototype.preventDefault = function() {
                this._cancelable && (this._isDefaultPrevented = !0)
            }, c.prototype.stopPropagation = function() {
                this._bubbles && (this._isPropagationStopped = !0)
            }, c.prototype.stopImmediatePropagation = function() {
                this._bubbles && (this._isPropagationImmediateStopped = !0)
            }, c.prototype._reset = function() {
                this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
            }, c.prototype.__recycle = function() {
                this.data = this._target = this._currentTarget = null
            }, c._dispatchByTarget = function(b, c, d, e, f, g) {
                var h, i, j;
                if (void 0 === f && (f = !1), void 0 === g && (g = !1), h = b.eventRecycler, h || (h = b.eventRecycler = new a.Recycler), i = h.pop(), i ? i._type = d : i = new b(d), i._bubbles = f, i._cancelable = g, e)
                    for (j in e) i[j] = e[j], null !== i[j] && (e[j] = null);
                return b = c.dispatchEvent(i), h.push(i), b
            }, c._getPropertyData = function(a) {
                var b = a._props;
                return b || (b = a._props = {}), b
            }, c.dispatchEvent = function(a, b, d, e) {
                void 0 === d && (d = !1);
                var f = c._getPropertyData(c);
                e && (f.data = e), c._dispatchByTarget(c, a, b, f, d)
            }, c.ADDED_TO_STAGE = "addedToStage", c.REMOVED_FROM_STAGE = "removedFromStage", c.ADDED = "added", c.REMOVED = "removed", c.COMPLETE = "complete", c.LOOP_COMPLETE = "loopcomplete", c.ENTER_FRAME = "enterFrame", c.RENDER = "render", c.FINISH_RENDER = "finishRender", c.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform", c.LEAVE_STAGE = "leaveStage", c.RESIZE = "resize", c.CHANGE = "change", c.ACTIVATE = "activate", c.DEACTIVATE = "deactivate", c.CLOSE = "close", c.CONNECT = "connect", c
        }(a.HashObject);
        a.Event = b, b.prototype.__class__ = "egret.Event"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c, d) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), a.call(this, b, c, d), this._status = 0
            }
            return __extends(b, a), Object.defineProperty(b.prototype, "status", {
                get: function() {
                    return this._status
                },
                enumerable: !0,
                configurable: !0
            }), b.dispatchHTTPStatusEvent = function(a, c) {
                null == b.httpStatusEvent && (b.httpStatusEvent = new b(b.HTTP_STATUS)), b.httpStatusEvent._status = c, a.dispatchEvent(b.httpStatusEvent)
            }, b.HTTP_STATUS = "httpStatus", b.httpStatusEvent = null, b
        }(a.Event);
        a.HTTPStatusEvent = b, b.prototype.__class__ = "egret.HTTPStatusEvent"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), b.call(this, a, c, d)
            }
            return __extends(c, b), c.dispatchIOErrorEvent = function(b) {
                a.Event._dispatchByTarget(c, b, c.IO_ERROR)
            }, c.IO_ERROR = "ioError", c
        }(a.Event);
        a.IOErrorEvent = b, b.prototype.__class__ = "egret.IOErrorEvent"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d, e, f, g, h, i, j, k) {
                void 0 === c && (c = !0), void 0 === d && (d = !0), void 0 === e && (e = 0), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = !1), void 0 === i && (i = !1), void 0 === k && (k = !1), b.call(this, a, c, d), this._stageY = this._stageX = 0, this.touchPointID = 0 / 0, this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1, this.touchPointID = e, this._stageX = f, this._stageY = g, this.ctrlKey = h, this.altKey = i, this.touchDown = k
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "stageX", {
                get: function() {
                    return this._stageX
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "stageY", {
                get: function() {
                    return this._stageY
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "localX", {
                get: function() {
                    return this._currentTarget.globalToLocal(this._stageX, this._stageY, a.Point.identity).x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "localY", {
                get: function() {
                    return this._currentTarget.globalToLocal(this._stageX, this._stageY, a.Point.identity).y
                },
                enumerable: !0,
                configurable: !0
            }), c.dispatchTouchEvent = function(b, d, e, f, g, h, i, j, k) {
                void 0 === e && (e = 0), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = !1), void 0 === i && (i = !1), void 0 === j && (j = !1), void 0 === k && (k = !1);
                var l = a.Event._getPropertyData(c);
                l.touchPointID = e, l._stageX = f, l._stageY = g, l.ctrlKey = h, l.altKey = i, l.shiftKey = j, l.touchDown = k, a.Event._dispatchByTarget(c, b, d, l, !0, !0)
            }, c.TOUCH_TAP = "touchTap", c.TOUCH_MOVE = "touchMove", c.TOUCH_BEGIN = "touchBegin", c.TOUCH_END = "touchEnd", c.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside", c.TOUCH_ROLL_OUT = "touchRollOut", c.TOUCH_ROLL_OVER = "touchRollOver", c.TOUCH_OUT = "touchOut", c.TOUCH_OVER = "touchOver", c
        }(a.Event);
        a.TouchEvent = b, b.prototype.__class__ = "egret.TouchEvent"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), b.call(this, a, c, d)
            }
            return __extends(c, b), c.dispatchTimerEvent = function(b, d) {
                a.Event._dispatchByTarget(c, b, d)
            }, c.TIMER = "timer", c.TIMER_COMPLETE = "timerComplete", c
        }(a.Event);
        a.TimerEvent = b, b.prototype.__class__ = "egret.TimerEvent"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d, e) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), void 0 === e && (e = ""), b.call(this, a, c, d), this.text = e
            }
            return __extends(c, b), c.dispatchTextEvent = function(b, d, e) {
                var f = a.Event._getPropertyData(c);
                f.text = e, a.Event._dispatchByTarget(c, b, d, f)
            }, c.LINK = "link", c
        }(a.Event);
        a.TextEvent = b, b.prototype.__class__ = "egret.TextEvent"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d, e, f) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), void 0 === e && (e = 0), void 0 === f && (f = 0), b.call(this, a, c, d), this.bytesTotal = this.bytesLoaded = 0, this.bytesLoaded = e, this.bytesTotal = f
            }
            return __extends(c, b), c.dispatchProgressEvent = function(b, d, e, f) {
                void 0 === e && (e = 0), void 0 === f && (f = 0), a.Event._dispatchByTarget(c, b, d, {
                    bytesLoaded: e,
                    bytesTotal: f
                })
            }, c.PROGRESS = "progress", c.SOCKET_DATA = "socketData", c
        }(a.Event);
        a.ProgressEvent = b, b.prototype.__class__ = "egret.ProgressEvent"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.CAPTURING_PHASE = 1, a.AT_TARGET = 2, a.BUBBLING_PHASE = 3, a
        }();
        a.EventPhase = b, b.prototype.__class__ = "egret.EventPhase"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a) {
                void 0 === a && (a = null), b.call(this), this._captureEventsMap = this._eventsMap = this._eventTarget = null, this._eventTarget = a ? a : this
            }
            return __extends(c, b), c.prototype.addEventListener = function(b, c, d, e, f) {
                void 0 === e && (e = !1), void 0 === f && (f = 0), "undefined" == typeof e && (e = !1), "undefined" == typeof f && (f = 0), c || a.Logger.fatalWithErrorId(1010), e ? (this._captureEventsMap || (this._captureEventsMap = {}), e = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), e = this._eventsMap);
                var g = e[b];
                g || (g = e[b] = []), this._insertEventBin(g, c, d, f)
            }, c.prototype._insertEventBin = function(a, b, c, d, e) {
                var f, g, h, i;
                for (void 0 === e && (e = void 0), f = -1, g = a.length, h = 0; g > h; h++) {
                    if (i = a[h], i.listener === b && i.thisObject === c && i.display === e) return !1; - 1 == f && i.priority < d && (f = h)
                }
                return b = {
                    listener: b,
                    thisObject: c,
                    priority: d
                }, e && (b.display = e), -1 != f ? a.splice(f, 0, b) : a.push(b), !0
            }, c.prototype.removeEventListener = function(a, b, c, d) {
                if (void 0 === d && (d = !1), d = d ? this._captureEventsMap : this._eventsMap) {
                    var e = d[a];
                    e && (this._removeEventBin(e, b, c), 0 == e.length && delete d[a])
                }
            }, c.prototype._removeEventBin = function(a, b, c, d, e) {
                var f, g;
                for (void 0 === d && (d = void 0), void 0 === e && (e = 0), f = a.length; f > e; e++)
                    if (g = a[e], g.listener === b && g.thisObject === c && g.display == d) return a.splice(e, 1), !0;
                return !1
            }, c.prototype.hasEventListener = function(a) {
                return this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a]
            }, c.prototype.willTrigger = function(a) {
                return this.hasEventListener(a)
            }, c.prototype.dispatchEvent = function(a) {
                return a._reset(), a._target = this._eventTarget, a._currentTarget = this._eventTarget, this._notifyListener(a)
            }, c.prototype._notifyListener = function(a) {
                var c, d, e, b = 1 == a._eventPhase ? this._captureEventsMap : this._eventsMap;
                if (!b) return !0;
                if (b = b[a._type], !b) return !0;
                if (c = b.length, 0 == c) return !0;
                for (b = b.concat(), d = 0; c > d && (e = b[d], e.listener.call(e.thisObject, a), !a._isPropagationImmediateStopped); d++);
                return !a._isDefaultPrevented
            }, c.prototype.dispatchEventWith = function(b, c, d) {
                void 0 === c && (c = !1), a.Event.dispatchEvent(this, b, c, d)
            }, c
        }(a.HashObject);
        a.EventDispatcher = b, b.prototype.__class__ = "egret.EventDispatcher"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null, this.reuseEvent = new a.Event("")
            }
            return __extends(c, b), c.prototype.run = function() {
                a.Ticker.getInstance().run(), a.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY), a.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY), this.touchContext.run(), this._profileInstance = a.Profiler.getInstance()
            }, c.prototype.renderLoop = function(b) {
                var d, e, f, g;
                0 < a.__callLaterFunctionList.length && (d = a.__callLaterFunctionList, a.__callLaterFunctionList = [], e = a.__callLaterThisList, a.__callLaterThisList = [], f = a.__callLaterArgsList, a.__callLaterArgsList = []), b = this.stage, g = c.cachedEvent, g._type = a.Event.RENDER, this.dispatchEvent(g), a.Stage._invalidateRenderFlag && (this.broadcastRender(), a.Stage._invalidateRenderFlag = !1), d && this.doCallLaterList(d, e, f), 0 < a.__callAsyncFunctionList.length && this.doCallAsyncList(), d = this.rendererContext, d.onRenderStart(), d.clearScreen(), c.__DRAW_COMMAND_LIST = [], c._renderLoopPhase = "updateTransform", b._updateTransform(), c._renderLoopPhase = "draw", g._type = a.Event.FINISH_UPDATE_TRANSFORM, this.dispatchEvent(g), c.__use_new_draw ? this._draw(d) : b._draw(d), g._type = a.Event.FINISH_RENDER, this.dispatchEvent(g), this._profileInstance._isRunning && this._profileInstance._drawProfiler(), d.onRenderFinish()
            }, c.prototype._draw = function(a) {
                var b, d, e, f;
                for (b = c.__DRAW_COMMAND_LIST, d = b.length, e = 0; d > e; e++) f = b[e], f.call(a), f.dispose()
            }, c.prototype.broadcastEnterFrame = function(b) {
                var c, d, e, f;
                for (b = this.reuseEvent, b._type = a.Event.ENTER_FRAME, this.dispatchEvent(b), c = a.DisplayObject._enterFrameCallBackList.concat(), d = c.length, e = 0; d > e; e++) f = c[e], b._target = f.display, b._currentTarget = f.display, f.listener.call(f.thisObject, b);
                for (c = a.Recycler._callBackList, e = c.length - 1; e >= 0; e--) c[e]._checkFrame()
            }, c.prototype.broadcastRender = function() {
                var c, d, e, f, g, b = this.reuseEvent;
                for (b._type = a.Event.RENDER, c = a.DisplayObject._renderCallBackList.concat(), d = c.length, e = 0; d > e; e++) f = c[e], g = f.display, b._target = g, b._currentTarget = g, f.listener.call(f.thisObject, b)
            }, c.prototype.doCallLaterList = function(a, b, c) {
                var d, e, f;
                for (d = a.length, e = 0; d > e; e++) f = a[e], null != f && f.apply(b[e], c[e])
            }, c.prototype.doCallAsyncList = function() {
                var e, f, b = a.__callAsyncFunctionList.concat(),
                    c = a.__callAsyncThisList.concat(),
                    d = a.__callAsyncArgsList.concat();
                for (a.__callAsyncFunctionList.length = 0, a.__callAsyncThisList.length = 0, e = a.__callAsyncArgsList.length = 0; e < b.length; e++) f = b[e], null != f && f.apply(c[e], d[e])
            }, c.deviceType = null, c.DEVICE_PC = "web", c.DEVICE_MOBILE = "native", c.RUNTIME_HTML5 = "runtime_html5", c.RUNTIME_NATIVE = "runtime_native", c.__DRAW_COMMAND_LIST = [], c.__use_new_draw = !0, c.cachedEvent = new a.Event(""), c
        }(a.EventDispatcher);
        a.MainContext = b, b.prototype.__class__ = "egret.MainContext"
    }(egret || (egret = {})), testDeviceType = function() {
        if (!this.navigator) return !0;
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("mobile") || -1 != a.indexOf("android")
    }, testRuntimeType = function() {
        return this.navigator ? !0 : !1
    }, egret.MainContext.instance = new egret.MainContext, egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC, egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE, delete testDeviceType, delete testRuntimeType,
    function(a) {
        var b = function() {
            function b() {
                this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0, this._txt = null, this._tick = 0, this._maxDeltaTime = 500, this._totalDeltaTime = 0, this._isRunning = !1
            }
            return b.getInstance = function() {
                return null == b.instance && (b.instance = new b), b.instance
            }, b.prototype.stop = function() {
                if (this._isRunning) {
                    this._isRunning = !1, a.Ticker.getInstance().unregister(this.update, this);
                    var b = a.MainContext.instance;
                    b.removeEventListener(a.Event.ENTER_FRAME, this.onEnterFrame, this), b.removeEventListener(a.Event.RENDER, this.onStartRender, this), b.removeEventListener(a.Event.FINISH_RENDER, this.onFinishRender, this), b.removeEventListener(a.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
                }
            }, b.prototype.run = function() {
                if (null == this._txt && (this._txt = new a.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._parent = new a.DisplayObjectContainer), !this._isRunning) {
                    this._isRunning = !0, a.Ticker.getInstance().register(this.update, this);
                    var b = a.MainContext.instance;
                    b.addEventListener(a.Event.ENTER_FRAME, this.onEnterFrame, this), b.addEventListener(a.Event.RENDER, this.onStartRender, this), b.addEventListener(a.Event.FINISH_RENDER, this.onFinishRender, this), b.addEventListener(a.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
                }
            }, b.prototype._drawProfiler = function() {
                this._txt._updateTransform(), this._txt._draw(a.MainContext.instance.rendererContext)
            }, b.prototype._setTxtFontSize = function(a) {
                this._txt.size = a
            }, b.prototype.onEnterFrame = function() {
                this._lastTime = a.getTimer()
            }, b.prototype.onStartRender = function(b) {
                b = a.getTimer(), this._logicPerformanceCost = b - this._lastTime, this._lastTime = b
            }, b.prototype.onFinishUpdateTransform = function(b) {
                b = a.getTimer(), this._updateTransformPerformanceCost = b - this._lastTime, this._lastTime = b
            }, b.prototype.onFinishRender = function(b) {
                b = a.getTimer(), this._renderPerformanceCost = b - this._lastTime, this._lastTime = b
            }, b.prototype.update = function(b) {
                if (this._tick++, this._totalDeltaTime += b, this._totalDeltaTime >= this._maxDeltaTime) {
                    b = (this._preDrawCount - 3).toString();
                    var c = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(a.MainContext.instance.rendererContext.renderCost).toString();
                    this._txt.text = "draw:" + b + "\ncost:" + c + "\nFPS:" + Math.floor(1e3 * this._tick / this._totalDeltaTime).toString(), this._tick = this._totalDeltaTime = 0
                }
                this._preDrawCount = 0
            }, b.prototype.onDrawImage = function() {
                this._preDrawCount++
            }, b
        }();
        a.Profiler = b, b.prototype.__class__ = "egret.Profiler"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._timeScale = 1, this._paused = !1, this._callIndex = -1, this.callBackList = [], null != c.instance && a.Logger.fatalWithErrorId(1002)
            }
            return __extends(c, b), c.prototype.run = function() {
                a.__START_TIME = (new Date).getTime(), a.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
            }, c.prototype.update = function(a) {
                if (!this._paused) {
                    for (a *= this._timeScale, a *= this._timeScale, this._callList = this.callBackList.concat(), this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                        var b = this._callList[this._callIndex];
                        b.listener.call(b.thisObject, a)
                    }
                    this._callIndex = -1, this._callList = null
                }
            }, c.prototype.register = function(a, b, c) {
                void 0 === c && (c = 0), this._insertEventBin(this.callBackList, a, b, c)
            }, c.prototype.unregister = function(a, b) {
                this._removeEventBin(this.callBackList, a, b), this._callList && -1 < this._callIndex && this._removeEventBin(this._callList, a, b, null, this._callIndex + 1)
            }, c.prototype.setTimeout = function(b, c, d) {
                for (var e = [], f = 3; f < arguments.length; f++) e[f - 3] = arguments[f];
                a.Logger.warningWithErrorId(1003), a.setTimeout.apply(null, [b, c, d].concat(e))
            }, c.prototype.setTimeScale = function(a) {
                this._timeScale = a
            }, c.prototype.getTimeScale = function() {
                return this._timeScale
            }, c.prototype.pause = function() {
                this._paused = !0
            }, c.prototype.resume = function() {
                this._paused = !1
            }, c.getInstance = function() {
                return null == c.instance && (c.instance = new c), c.instance
            }, c
        }(a.EventDispatcher);
        a.Ticker = b, b.prototype.__class__ = "egret.Ticker"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.LEFT = "left", a.RIGHT = "right", a.CENTER = "center", a.JUSTIFY = "justify", a.CONTENT_JUSTIFY = "contentJustify", a
        }();
        a.HorizontalAlign = b, b.prototype.__class__ = "egret.HorizontalAlign"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.TOP = "top", a.BOTTOM = "bottom", a.MIDDLE = "middle", a.JUSTIFY = "justify", a.CONTENT_JUSTIFY = "contentJustify", a
        }();
        a.VerticalAlign = b, b.prototype.__class__ = "egret.VerticalAlign"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c) {
                void 0 === c && (c = 0), b.call(this), this._currentCount = 0, this._running = !1, this.lastTime = 0, this.delay = a, this.repeatCount = c
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "currentCount", {
                get: function() {
                    return this._currentCount
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "running", {
                get: function() {
                    return this._running
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.reset = function() {
                this.stop(), this._currentCount = 0
            }, c.prototype.start = function() {
                this._running || (this.lastTime = a.getTimer(), a.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
            }, c.prototype.stop = function() {
                this._running && (a.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
            }, c.prototype.onEnterFrame = function(b) {
                b = a.getTimer(), b - this.lastTime > this.delay && (this.lastTime = b, this._currentCount++, a.TimerEvent.dispatchTimerEvent(this, a.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), a.TimerEvent.dispatchTimerEvent(this, a.TimerEvent.TIMER_COMPLETE)))
            }, c
        }(a.EventDispatcher);
        a.Timer = b, b.prototype.__class__ = "egret.Timer"
    }(egret || (egret = {})),
    function(a) {
        function b(a) {
            if (a = a.prototype ? a.prototype : Object.getPrototypeOf(a), a.hasOwnProperty("__class__")) return a.__class__;
            var b = a.constructor.toString(),
                c = b.indexOf("("),
                b = b.substring(9, c);
            return Object.defineProperty(a, "__class__", {
                value: b,
                enumerable: !1,
                writable: !0
            }), b
        }
        a.getQualifiedClassName = b, a.getQualifiedSuperclassName = function(a) {
            if (a = a.prototype ? a.prototype : Object.getPrototypeOf(a), a.hasOwnProperty("__superclass__")) return a.__superclass__;
            var c = Object.getPrototypeOf(a);
            return null == c ? null : (c = b(c.constructor)) ? (Object.defineProperty(a, "__superclass__", {
                value: c,
                enumerable: !1,
                writable: !0
            }), c) : null
        }
    }(egret || (egret = {})),
    function(a) {
        var b = {};
        a.getDefinitionByName = function(a) {
            var c, d, e, f;
            if (!a) return null;
            if (c = b[a]) return c;
            for (d = a.split("."), e = d.length, c = __global, f = 0; e > f; f++)
                if (c = c[d[f]], !c) return null;
            return b[a] = c
        }
    }(egret || (egret = {})), __global = __global || this, ! function(a) {
        function b(a) {
            var b, d;
            for (b in c) d = c[b], d.delay -= a, 0 >= d.delay && (d.listener.apply(d.thisObject, d.params), delete c[b])
        }
        var c = {},
            d = 0;
        a.setTimeout = function(e, f, g) {
            for (var h = [], i = 3; i < arguments.length; i++) h[i - 3] = arguments[i];
            return h = {
                listener: e,
                thisObject: f,
                delay: g,
                params: h
            }, 0 == d && a.Ticker.getInstance().register(b, null), d++, c[d] = h, d
        }, a.clearTimeout = function(a) {
            delete c[a]
        }
    }(egret || (egret = {})),
    function(a) {
        a.hasDefinition = function(b) {
            return a.getDefinitionByName(b) ? !0 : !1
        }
    }(egret || (egret = {})),
    function(a) {
        a.toColorString = function(a) {
            for ((isNaN(a) || 0 > a) && (a = 0), a > 16777215 && (a = 16777215), a = a.toString(16).toUpperCase(); 6 > a.length;) a = "0" + a;
            return "#" + a
        }
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d, e, f, g) {
                void 0 === a && (a = 1), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 1), void 0 === f && (f = 0), void 0 === g && (g = 0), b.call(this), this.a = a, this.b = c, this.c = d, this.d = e, this.tx = f, this.ty = g
            }
            return __extends(c, b), c.prototype.prepend = function(a, b, c, d, e, f) {
                var h, i, g = this.tx;
                return (1 != a || 0 != b || 0 != c || 1 != d) && (h = this.a, i = this.c, this.a = h * a + this.b * c, this.b = h * b + this.b * d, this.c = i * a + this.d * c, this.d = i * b + this.d * d), this.tx = g * a + this.ty * c + e, this.ty = g * b + this.ty * d + f, this
            }, c.prototype.append = function(a, b, c, d, e, f) {
                var g = this.a,
                    h = this.b,
                    i = this.c,
                    j = this.d;
                return (1 != a || 0 != b || 0 != c || 1 != d) && (this.a = a * g + b * i, this.b = a * h + b * j, this.c = c * g + d * i, this.d = c * h + d * j), this.tx = e * g + f * i + this.tx, this.ty = e * h + f * j + this.ty, this
            }, c.prototype.prependTransform = function(b, c, d, e, f, g, h, i, j) {
                if (f % 360) {
                    var k = a.NumberUtils.cos(f);
                    f = a.NumberUtils.sin(f)
                } else k = 1, f = 0;
                return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (this.prepend(k * d, f * d, -f * e, k * e, 0, 0), this.prepend(a.NumberUtils.cos(h), a.NumberUtils.sin(h), -a.NumberUtils.sin(g), a.NumberUtils.cos(g), b, c)) : this.prepend(k * d, f * d, -f * e, k * e, b, c), this
            }, c.prototype.appendTransform = function(b, c, d, e, f, g, h, i, j) {
                if (f % 360) {
                    var k = a.NumberUtils.cos(f);
                    f = a.NumberUtils.sin(f)
                } else k = 1, f = 0;
                return g || h ? (this.append(a.NumberUtils.cos(h), a.NumberUtils.sin(h), -a.NumberUtils.sin(g), a.NumberUtils.cos(g), b, c), this.append(k * d, f * d, -f * e, k * e, 0, 0)) : this.append(k * d, f * d, -f * e, k * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
            }, c.prototype.rotate = function(a) {
                var c, d, e, b = Math.cos(a);
                return a = Math.sin(a), c = this.a, d = this.c, e = this.tx, this.a = c * b - this.b * a, this.b = c * a + this.b * b, this.c = d * b - this.d * a, this.d = d * a + this.d * b, this.tx = e * b - this.ty * a, this.ty = e * a + this.ty * b, this
            }, c.prototype.skew = function(b, c) {
                return this.append(a.NumberUtils.cos(c), a.NumberUtils.sin(c), -a.NumberUtils.sin(b), a.NumberUtils.cos(b), 0, 0), this
            }, c.prototype.scale = function(a, b) {
                return this.a *= a, this.d *= b, this.c *= a, this.b *= b, this.tx *= a, this.ty *= b, this
            }, c.prototype.translate = function(a, b) {
                return this.tx += a, this.ty += b, this
            }, c.prototype.identity = function() {
                return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
            }, c.prototype.identityMatrix = function(a) {
                return this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.tx = a.tx, this.ty = a.ty, this
            }, c.prototype.invert = function() {
                var a = this.a,
                    b = this.b,
                    c = this.c,
                    d = this.d,
                    e = this.tx,
                    f = a * d - b * c;
                return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
            }, c.transformCoords = function(b, c, d) {
                var e = a.Point.identity;
                return e.x = b.a * c + b.c * d + b.tx, e.y = b.d * d + b.b * c + b.ty, e
            }, c.prototype.toArray = function(a) {
                return this.array || (this.array = new Float32Array(9)), a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0), this.array[8] = 1, this.array
            }, c.identity = new c, c.DEG_TO_RAD = Math.PI / 180, c
        }(a.HashObject);
        a.Matrix = b, b.prototype.__class__ = "egret.Matrix"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c) {
                void 0 === b && (b = 0), void 0 === c && (c = 0), a.call(this), this.x = b, this.y = c
            }
            return __extends(b, a), b.prototype.clone = function() {
                return new b(this.x, this.y)
            }, b.prototype.equals = function(a) {
                return this.x == a.x && this.y == a.y
            }, b.distance = function(a, b) {
                return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
            }, b.identity = new b(0, 0), b
        }(a.HashObject);
        a.Point = b, b.prototype.__class__ = "egret.Point"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c, d, e) {
                void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 0), a.call(this), this.x = b, this.y = c, this.width = d, this.height = e
            }
            return __extends(b, a), Object.defineProperty(b.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(a) {
                    this.width = a - this.x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(a) {
                    this.height = a - this.y
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.initialize = function(a, b, c, d) {
                return this.x = a, this.y = b, this.width = c, this.height = d, this
            }, b.prototype.contains = function(a, b) {
                return this.x <= a && this.x + this.width >= a && this.y <= b && this.y + this.height >= b
            }, b.prototype.intersects = function(a) {
                return Math.max(this.x, a.x) <= Math.min(this.right, a.right) && Math.max(this.y, a.y) <= Math.min(this.bottom, a.bottom)
            }, b.prototype.setEmpty = function() {
                this.height = this.width = this.y = this.x = 0
            }, b.prototype.clone = function() {
                return new b(this.x, this.y, this.width, this.height)
            }, b.prototype.containsPoint = function(a) {
                return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
            }, b.identity = new b(0, 0, 0, 0), b
        }(a.HashObject);
        a.Rectangle = b, b.prototype.__class__ = "egret.Rectangle"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._isSupportDOMParser = this._xmlDict = this._parser = null, this._xmlDict = {}, window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
            }
            return __extends(c, b), c.getInstance = function() {
                return c._instance || (c._instance = new c), c._instance
            }, c.prototype.parserXML = function(b) {
                for (var c = 0;
                    "\n" == b.charAt(c) || "  " == b.charAt(c) || "\r" == b.charAt(c) || " " == b.charAt(c);) c++;
                return 0 != c && (b = b.substring(c, b.length)), this._isSupportDOMParser ? c = this._parser.parseFromString(b, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)), null == c && a.Logger.infoWithErrorId(1015), c
            }, c._instance = null, c
        }(a.HashObject);
        a.SAXParser = b, b.prototype.__class__ = "egret.SAXParser"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var c, d, e, f, b = function(b) {
            function c() {
                b.call(this), this._designHeight = this._designWidth = 0, this._scaleY = this._scaleX = 1, this._stageHeight = this._stageWidth = this._offSetY = 0
            }
            return __extends(c, b), c.getInstance = function() {
                return null == c.instance && (d.initialize(), c.instance = new c), c.instance
            }, c.prototype.setDesignSize = function(b, c, d) {
                this._designWidth = b, this._designHeight = c, d && (a.Logger.warningWithErrorId(1001), this._setResolutionPolicy(d))
            }, c.prototype._setResolutionPolicy = function(a) {
                this._resolutionPolicy = a, a.init(this), a._apply(this, this._designWidth, this._designHeight)
            }, c.prototype.getScaleX = function() {
                return this._scaleX
            }, c.prototype.getScaleY = function() {
                return this._scaleY
            }, c.prototype.getOffSetY = function() {
                return this._offSetY
            }, c.canvas_name = "egretCanvas", c.canvas_div_name = "gameDiv", c
        }(a.HashObject);
        a.StageDelegate = b, b.prototype.__class__ = "egret.StageDelegate", c = function() {
            function a(a, b) {
                this._containerStrategy = a, this._contentStrategy = b
            }
            return a.prototype.init = function(a) {
                this._containerStrategy.init(a), this._contentStrategy.init(a)
            }, a.prototype._apply = function(a, b, c) {
                this._containerStrategy._apply(a, b, c), this._contentStrategy._apply(a, b, c)
            }, a
        }(), a.ResolutionPolicy = c, c.prototype.__class__ = "egret.ResolutionPolicy", d = function() {
            function a() {}
            return a.initialize = function() {
                a.EQUAL_TO_FRAME = new e
            }, a.prototype.init = function() {}, a.prototype._apply = function() {}, a.prototype._setupContainer = function() {
                var a, b = document.body;
                b && (a = b.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
            }, a
        }(), a.ContainerStrategy = d, d.prototype.__class__ = "egret.ContainerStrategy", e = function(a) {
            function b() {
                a.apply(this, arguments)
            }
            return __extends(b, a), b.prototype._apply = function() {
                this._setupContainer()
            }, b
        }(d), a.EqualToFrame = e, e.prototype.__class__ = "egret.EqualToFrame", c = function() {
            function c() {}
            return c.prototype.init = function() {}, c.prototype._apply = function() {}, c.prototype.setEgretSize = function(c, d, e, f, g, h) {
                void 0 === h && (h = 0), a.StageDelegate.getInstance()._stageWidth = Math.round(c), a.StageDelegate.getInstance()._stageHeight = Math.round(d), c = document.getElementById(b.canvas_div_name), c.style.width = e + "px", c.style.height = f + "px", c.style.top = h + "px"
            }, c.prototype._getClientWidth = function() {
                return document.documentElement.clientWidth
            }, c.prototype._getClientHeight = function() {
                return document.documentElement.clientHeight
            }, c
        }(), a.ContentStrategy = c, c.prototype.__class__ = "egret.ContentStrategy", f = function(a) {
            function b(b) {
                void 0 === b && (b = 0), a.call(this), this.minWidth = 0 / 0, this.minWidth = b
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                b = this._getClientWidth();
                var d = this._getClientHeight(),
                    e = d / c,
                    f = b / e,
                    g = 1;
                0 != this.minWidth && (g = Math.min(1, f / this.minWidth)), this.setEgretSize(f / g, c, b, d * g), a._scaleX = e * g, a._scaleY = e * g
            }, b
        }(c), a.FixedHeight = f, f.prototype.__class__ = "egret.FixedHeight", f = function(a) {
            function b(b) {
                void 0 === b && (b = 0), a.call(this), this.minHeight = 0 / 0, this.minHeight = b
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                c = this._getClientWidth();
                var d = this._getClientHeight(),
                    e = c / b,
                    f = d / e,
                    g = 1;
                0 != this.minHeight && (g = Math.min(1, f / this.minHeight)), this.setEgretSize(b, f / g, c * g, d, c * (1 - g) / 2), a._scaleX = e * g, a._scaleY = e * g
            }, b
        }(c), a.FixedWidth = f, f.prototype.__class__ = "egret.FixedWidth", f = function(a) {
            function b(b, c) {
                a.call(this), this.width = b, this.height = c
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                c = this.width;
                var d = this.height,
                    e = c / b;
                this.setEgretSize(b, d / e, c, d), a._scaleX = e, a._scaleY = e
            }, b
        }(c), a.FixedSize = f, f.prototype.__class__ = "egret.FixedSize", f = function(a) {
            function b() {
                a.call(this)
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                this.setEgretSize(b, c, b, c, Math.floor((b - b) / 2)), a._scaleX = 1, a._scaleY = 1
            }, b
        }(c), a.NoScale = f, f.prototype.__class__ = "egret.NoScale", f = function(a) {
            function b() {
                a.call(this)
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                var d = this._getClientWidth(),
                    e = this._getClientHeight(),
                    f = d,
                    g = e,
                    h = g / c > f / b ? f / b : g / c,
                    f = b * h,
                    g = c * h,
                    d = Math.floor((d - f) / 2);
                a._offSetY = Math.floor((e - g) / 2), this.setEgretSize(b, c / 1, 1 * f, g, d, a._offSetY), a._scaleX = 1 * h, a._scaleY = 1 * h
            }, b
        }(c), a.ShowAll = f, f.prototype.__class__ = "egret.ShowAll", c = function(a) {
            function b() {
                a.call(this)
            }
            return __extends(b, a), b.prototype._apply = function(a, b, c) {
                var d = this._getClientWidth(),
                    e = this._getClientHeight(),
                    d = d / b,
                    e = e / c;
                this.setEgretSize(b, c, b * d, c * e), a._scaleX = d, a._scaleY = e
            }, b
        }(c), a.FullScreen = c, c.prototype.__class__ = "egret.FullScreen"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._originalData = {}, this._drawAreaList = []
            }
            return __extends(c, b), c.getInstance = function() {
                return null == c.instance && (c.instance = new c), c.instance
            }, c.prototype.addDrawArea = function(a) {
                this._drawAreaList.push(a)
            }, c.prototype.clearDrawArea = function() {
                this._drawAreaList = []
            }, c.prototype.drawImage = function(b, d, e, f, g, h, i, j, k, l, m) {
                var n, o, p, q;
                if (void 0 === m && (m = void 0), i = i || 0, j = j || 0, n = d._texture_to_render, null != n && 0 != h && 0 != g && 0 != k && 0 != l)
                    if (o = a.MainContext.instance.rendererContext._texture_scale_factor, g /= o, h /= o, 0 != this._drawAreaList.length && a.MainContext.instance.rendererContext._cacheCanvasContext) {
                        for (o = a.DisplayObject.getTransformBounds(d._getSize(c.identityRectangle), d._worldTransform), d._worldBounds.initialize(o.x, o.y, o.width, o.height), o = this._originalData, o.sourceX = e, o.sourceY = f, o.sourceWidth = g, o.sourceHeight = h, o.destX = i, o.destY = j, o.destWidth = k, o.destHeight = l, p = this.getDrawAreaList(), q = 0; q < p.length; q++)
                            if (!this.ignoreRender(d, p[q], o.destX, o.destY)) {
                                b.drawImage(n, e, f, g, h, i, j, k, l, m);
                                break
                            }
                    } else b.drawImage(n, e, f, g, h, i, j, k, l, m)
            }, c.prototype.ignoreRender = function(a, b, c, d) {
                var e = a._worldBounds;
                return c *= a._worldTransform.a, d *= a._worldTransform.d, e.x + e.width + c <= b.x || e.x + c >= b.x + b.width || e.y + e.height + d <= b.y || e.y + d >= b.y + b.height ? !0 : !1
            }, c.prototype.getDrawAreaList = function() {
                var b;
                return 0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new a.Rectangle(0, 0, a.MainContext.instance.stage.stageWidth, a.MainContext.instance.stage.stageHeight)], a.MainContext.instance.stage.addEventListener(a.Event.RESIZE, this.onResize, this)), b = this._defaultDrawAreaList) : b = this._drawAreaList, b
            }, c.prototype.onResize = function() {
                a.MainContext.instance.stage.removeEventListener(a.Event.RESIZE, this.onResize, this), this._defaultDrawAreaList = null
            }, c.identityRectangle = new a.Rectangle, c
        }(a.HashObject);
        a.RenderFilter = b, b.prototype.__class__ = "egret.RenderFilter"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b() {}
            return b.mapClass = function(a, b, c) {
                void 0 === c && (c = ""), a = this.getKey(a) + "#" + c, this.mapClassDic[a] = b
            }, b.getKey = function(b) {
                return "string" == typeof b ? b : a.getQualifiedClassName(b)
            }, b.mapValue = function(a, b, c) {
                void 0 === c && (c = ""), a = this.getKey(a) + "#" + c, this.mapValueDic[a] = b
            }, b.hasMapRule = function(a, b) {
                void 0 === b && (b = "");
                var c = this.getKey(a) + "#" + b;
                return this.mapValueDic[c] || this.mapClassDic[c] ? !0 : !1
            }, b.getInstance = function(b, c) {
                var d, e;
                if (void 0 === c && (c = ""), d = this.getKey(b) + "#" + c, this.mapValueDic[d]) return this.mapValueDic[d];
                if (e = this.mapClassDic[d]) return e = new e, this.mapValueDic[d] = e, delete this.mapClassDic[d], e;
                throw Error(a.getString(1028, d))
            }, b.mapClassDic = {}, b.mapValueDic = {}, b
        }();
        a.Injector = b, b.prototype.__class__ = "egret.Injector"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            return function() {
                this.type = null
            }
        }();
        a.Filter = b, b.prototype.__class__ = "egret.Filter"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c) {
                a.call(this), this.blurX = b, this.blurY = c, this.type = "blur"
            }
            return __extends(b, a), b
        }(a.Filter);
        a.BlurFilter = b, b.prototype.__class__ = "egret.BlurFilter"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.NORMAL = "normal", a.ADD = "add", a.ERASE = "erase", a
        }();
        a.BlendMode = b, b.prototype.__class__ = "egret.BlendMode"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.__hack_local_matrix = null, this._sizeDirty = this._normalDirty = !0, this._parent = this._texture_to_render = this.name = this._sizeChangeCallTarget = this._sizeChangeCallBack = null, this._y = this._x = 0, this._scaleY = this._scaleX = 1, this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0, this._visible = !0, this._rotation = 0, this._alpha = 1, this._skewY = this._skewX = 0, this._touchEnabled = !1, this._scrollRect = this.blendMode = null, this._explicitHeight = this._explicitWidth = 0 / 0, this._hasHeightSet = this._hasWidthSet = !1, this._worldBounds = this.mask = null, this.worldAlpha = 1, this.needDraw = this._isContainer = !1, this._hitTestPointTexture = null, this._rectH = this._rectW = 0, this._stage = null, this._cacheAsBitmap = !1, this.renderTexture = null, this._cacheDirty = !1, this._filter = this._colorTransform = null, this._worldTransform = new a.Matrix, this._worldBounds = new a.Rectangle(0, 0, 0, 0), this._cacheBounds = new a.Rectangle(0, 0, 0, 0)
            }
            return __extends(c, b), c.prototype._setDirty = function() {
                this._normalDirty = !0
            }, c.prototype.getDirty = function() {
                return this._normalDirty || this._sizeDirty
            }, c.prototype._setParentSizeDirty = function() {
                var a = this._parent;
                !a || a._hasWidthSet || a._hasHeightSet || a._setSizeDirty()
            }, c.prototype._setSizeDirty = function() {
                this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == this._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
            }, c.prototype._clearDirty = function() {
                this._normalDirty = !1
            }, c.prototype._clearSizeDirty = function() {
                this._sizeDirty = !1
            }, Object.defineProperty(c.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._parentChanged = function(a) {
                this._parent = a
            }, Object.defineProperty(c.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(a) {
                    this._setX(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setX = function(b) {
                a.NumberUtils.isNumber(b) && this._x != b && (this._x = b, this._setDirty(), this._setParentSizeDirty())
            }, Object.defineProperty(c.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(a) {
                    this._setY(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setY = function(b) {
                a.NumberUtils.isNumber(b) && this._y != b && (this._y = b, this._setDirty(), this._setParentSizeDirty())
            }, Object.defineProperty(c.prototype, "scaleX", {
                get: function() {
                    return this._scaleX
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._scaleX != b && (this._scaleX = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "scaleY", {
                get: function() {
                    return this._scaleY
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._scaleY != b && (this._scaleY = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "anchorOffsetX", {
                get: function() {
                    return this._anchorOffsetX
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._anchorOffsetX != b && (this._anchorOffsetX = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "anchorOffsetY", {
                get: function() {
                    return this._anchorOffsetY
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._anchorOffsetY != b && (this._anchorOffsetY = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "anchorX", {
                get: function() {
                    return this._anchorX
                },
                set: function(a) {
                    this._setAnchorX(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setAnchorX = function(b) {
                a.NumberUtils.isNumber(b) && this._anchorX != b && (this._anchorX = b, this._setDirty(), this._setParentSizeDirty())
            }, Object.defineProperty(c.prototype, "anchorY", {
                get: function() {
                    return this._anchorY
                },
                set: function(a) {
                    this._setAnchorY(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setAnchorY = function(b) {
                a.NumberUtils.isNumber(b) && this._anchorY != b && (this._anchorY = b, this._setDirty(), this._setParentSizeDirty())
            }, Object.defineProperty(c.prototype, "visible", {
                get: function() {
                    return this._visible
                },
                set: function(a) {
                    this._setVisible(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setVisible = function(a) {
                this._visible != a && (this._visible = a, this._setSizeDirty())
            }, Object.defineProperty(c.prototype, "rotation", {
                get: function() {
                    return this._rotation
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._rotation != b && (this._rotation = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "alpha", {
                get: function() {
                    return this._alpha
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._alpha != b && (this._alpha = b, this._setDirty(), this._setCacheDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "skewX", {
                get: function() {
                    return this._skewX
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._skewX != b && (this._skewX = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "skewY", {
                get: function() {
                    return this._skewY
                },
                set: function(b) {
                    a.NumberUtils.isNumber(b) && this._skewY != b && (this._skewY = b, this._setDirty(), this._setParentSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "touchEnabled", {
                get: function() {
                    return this._touchEnabled
                },
                set: function(a) {
                    this._setTouchEnabled(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setTouchEnabled = function(a) {
                this._touchEnabled = a
            }, Object.defineProperty(c.prototype, "scrollRect", {
                get: function() {
                    return this._scrollRect
                },
                set: function(a) {
                    this._setScrollRect(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setScrollRect = function(a) {
                this._scrollRect = a, this._setSizeDirty()
            }, Object.defineProperty(c.prototype, "measuredWidth", {
                get: function() {
                    return this._measureBounds().width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "measuredHeight", {
                get: function() {
                    return this._measureBounds().height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "explicitWidth", {
                get: function() {
                    return this._explicitWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "explicitHeight", {
                get: function() {
                    return this._explicitHeight
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "width", {
                get: function() {
                    return this._getWidth()
                },
                set: function(a) {
                    this._setWidth(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._getWidth = function() {
                return this._getSize(a.Rectangle.identity).width
            }, Object.defineProperty(c.prototype, "height", {
                get: function() {
                    return this._getHeight()
                },
                set: function(a) {
                    this._setHeight(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._getHeight = function() {
                return this._getSize(a.Rectangle.identity).height
            }, c.prototype._setWidth = function(b) {
                this._setSizeDirty(), this._setCacheDirty(), this._explicitWidth = b, this._hasWidthSet = a.NumberUtils.isNumber(b)
            }, c.prototype._setHeight = function(b) {
                this._setSizeDirty(), this._setCacheDirty(), this._explicitHeight = b, this._hasHeightSet = a.NumberUtils.isNumber(b)
            }, c.prototype._draw = function(b) {
                var c, d;
                this._visible && !this.drawCacheTexture(b) && (c = a.MainContext.__use_new_draw && this._isContainer, this._filter && !c && b.setGlobalFilter(this._filter), this._colorTransform && !c && b.setGlobalColorTransform(this._colorTransform.matrix), b.setAlpha(this.worldAlpha, this.blendMode), b.setTransform(this._worldTransform), d = this.mask || this._scrollRect, d && !c && b.pushMask(d), this._render(b), d && !c && b.popMask(), this._colorTransform && !c && b.setGlobalColorTransform(null), this._filter && !c && b.setGlobalFilter(null)), this.destroyCacheBounds()
            }, c.prototype._setGlobalFilter = function(a) {
                a.setGlobalFilter(this._filter)
            }, c.prototype._removeGlobalFilter = function(a) {
                a.setGlobalFilter(null)
            }, c.prototype._setGlobalColorTransform = function(a) {
                a.setGlobalColorTransform(this._colorTransform.matrix)
            }, c.prototype._removeGlobalColorTransform = function(a) {
                a.setGlobalColorTransform(null)
            }, c.prototype._pushMask = function(a) {
                a.setTransform(this._worldTransform);
                var b = this.mask || this._scrollRect;
                b && a.pushMask(b)
            }, c.prototype._popMask = function(a) {
                a.popMask()
            }, c.prototype.drawCacheTexture = function(b) {
                var c, d, e, f;
                return 0 == this._cacheAsBitmap ? !1 : (c = this.getBounds(a.Rectangle.identity), d = a.MainContext.instance.rendererContext._texture_scale_factor, (this._cacheDirty || null == this._texture_to_render || Math.round(c.width) != Math.round(this._texture_to_render._sourceWidth * d) || Math.round(c.height) != Math.round(this._texture_to_render._sourceHeight * d)) && (this._cacheDirty = !this._makeBitmapCache()), null == this._texture_to_render ? !1 : (e = this._texture_to_render, c = e._offsetX, d = e._offsetY, f = e._textureWidth, e = e._textureHeight, this._updateTransform(), b.setAlpha(this.worldAlpha, this.blendMode), b.setTransform(this._worldTransform), a.RenderFilter.getInstance().drawImage(b, this, 0, 0, f, e, c, d, f, e), !0))
            }, c.prototype._updateTransform = function() {
                this._visible && (this._calculateWorldTransform(), "updateTransform" == a.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || this._cacheAsBitmap) && a.RenderCommand.push(this._draw, this))
            }, c.prototype._calculateWorldTransform = function() {
                var c, a = this._worldTransform,
                    b = this._parent;
                a.identityMatrix(b._worldTransform), this._getMatrix(a), c = this._scrollRect, c && a.append(1, 0, 0, 1, -c.x, -c.y), this.worldAlpha = b.worldAlpha * this._alpha
            }, c.prototype._render = function() {}, c.prototype.getBounds = function(b, c) {
                var d, e, f, g, h, i;
                return void 0 === c && (c = !0), d = this._measureBounds(), e = this._hasWidthSet ? this._explicitWidth : d.width, f = this._hasHeightSet ? this._explicitHeight : d.height, this._rectW = d.width, this._rectH = d.height, this._clearSizeDirty(), g = d.x, d = d.y, h = 0, i = 0, c && (0 != this._anchorX || 0 != this._anchorY ? (h = e * this._anchorX, i = f * this._anchorY) : (h = this._anchorOffsetX, i = this._anchorOffsetY)), this._cacheBounds.initialize(g - h, d - i, e, f), e = this._cacheBounds, b || (b = new a.Rectangle), b.initialize(e.x, e.y, e.width, e.height)
            }, c.prototype.destroyCacheBounds = function() {
                this._cacheBounds.x = 0, this._cacheBounds.y = 0, this._cacheBounds.width = 0, this._cacheBounds.height = 0
            }, c.prototype._getConcatenatedMatrix = function() {
                var b, d, e;
                for (b = c.identityMatrixForGetConcatenated.identity(), d = this; null != d;) 0 != d._anchorX || 0 != d._anchorY ? (e = d._getSize(a.Rectangle.identity), b.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, e.width * d._anchorX, e.height * d._anchorY)) : b.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, d._anchorOffsetX, d._anchorOffsetY), d._scrollRect && b.prepend(1, 0, 0, 1, -d._scrollRect.x, -d._scrollRect.y), d = d._parent;
                return b
            }, c.prototype.localToGlobal = function(b, c, d) {
                void 0 === b && (b = 0), void 0 === c && (c = 0);
                var e = this._getConcatenatedMatrix();
                return e.append(1, 0, 0, 1, b, c), d || (d = new a.Point), d.x = e.tx, d.y = e.ty, d
            }, c.prototype.globalToLocal = function(b, c, d) {
                void 0 === b && (b = 0), void 0 === c && (c = 0);
                var e = this._getConcatenatedMatrix();
                return e.invert(), e.append(1, 0, 0, 1, b, c), d || (d = new a.Point), d.x = e.tx, d.y = e.ty, d
            }, c.prototype.hitTest = function(b, c, d) {
                return void 0 === d && (d = !1), this._visible && (d || this._touchEnabled) ? (d = this.getBounds(a.Rectangle.identity, !1), b -= d.x, c -= d.y, b >= 0 && b < d.width && c >= 0 && c < d.height ? this.mask || this._scrollRect ? this._scrollRect && b > this._scrollRect.x && c > this._scrollRect.y && b < this._scrollRect.x + this._scrollRect.width && c < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= b && b < this.mask.x + this.mask.width && this.mask.y <= c && c < this.mask.y + this.mask.height ? this : null : this : null) : null
            }, c.prototype.hitTestPoint = function(b, c, d) {
                return b = this.globalToLocal(b, c), d ? (this._hitTestPointTexture || (this._hitTestPointTexture = new a.RenderTexture), d = this._hitTestPointTexture, d.drawToTexture(this), 0 != d.getPixel32(b.x - this._hitTestPointTexture._offsetX, b.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(b.x, b.y, !0)
            }, c.prototype._getMatrix = function(b) {
                var c, d, e;
                return b || (b = a.Matrix.identity.identity()), d = this._getOffsetPoint(), c = d.x, d = d.y, e = this.__hack_local_matrix, e ? (b.append(e.a, e.b, e.c, e.d, e.tx, e.ty), b.append(1, 0, 0, 1, -c, -d)) : b.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, c, d), b
            }, c.prototype._getSize = function(a) {
                return this._hasHeightSet && this._hasWidthSet ? (this._clearSizeDirty(), a.initialize(0, 0, this._explicitWidth, this._explicitHeight)) : (this._measureSize(a), this._hasWidthSet && (a.width = this._explicitWidth), this._hasHeightSet && (a.height = this._explicitHeight), a)
            }, c.prototype._measureSize = function(a) {
                return this._sizeDirty ? (a = this._measureBounds(), this._rectW = a.width, this._rectH = a.height, this._clearSizeDirty()) : (a.width = this._rectW, a.height = this._rectH), a.x = 0, a.y = 0, a
            }, c.prototype._measureBounds = function() {
                return a.Rectangle.identity.initialize(0, 0, 0, 0)
            }, c.prototype._getOffsetPoint = function() {
                var d, b = this._anchorOffsetX,
                    c = this._anchorOffsetY;
                return (0 != this._anchorX || 0 != this._anchorY) && (c = this._getSize(a.Rectangle.identity), b = this._anchorX * c.width, c = this._anchorY * c.height), d = a.Point.identity, d.x = b, d.y = c, d
            }, c.prototype._onAddToStage = function() {
                this._stage = a.MainContext.instance.stage, a.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
            }, c.prototype._onRemoveFromStage = function() {
                a.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
            }, Object.defineProperty(c.prototype, "stage", {
                get: function() {
                    return this._stage
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.addEventListener = function(d, e, f, g, h) {
                void 0 === g && (g = !1), void 0 === h && (h = 0), b.prototype.addEventListener.call(this, d, e, f, g, h), ((g = d == a.Event.ENTER_FRAME) || d == a.Event.RENDER) && this._insertEventBin(g ? c._enterFrameCallBackList : c._renderCallBackList, e, f, h, this)
            }, c.prototype.removeEventListener = function(d, e, f, g) {
                void 0 === g && (g = !1), b.prototype.removeEventListener.call(this, d, e, f, g), ((g = d == a.Event.ENTER_FRAME) || d == a.Event.RENDER) && this._removeEventBin(g ? c._enterFrameCallBackList : c._renderCallBackList, e, f, this)
            }, c.prototype.dispatchEvent = function(a) {
                if (!a._bubbles) return b.prototype.dispatchEvent.call(this, a);
                for (var c = [], d = this; d;) c.push(d), d = d._parent;
                return a._reset(), this._dispatchPropagationEvent(a, c), !a._isDefaultPrevented
            }, c.prototype._dispatchPropagationEvent = function(a, b, c) {
                var d, e, f;
                for (c = b.length, d = 1, e = c - 1; e >= 0; e--)
                    if (f = b[e], a._currentTarget = f, a._target = this, a._eventPhase = d, f._notifyListener(a), a._isPropagationStopped || a._isPropagationImmediateStopped) return;
                if (f = b[0], a._currentTarget = f, a._target = this, a._eventPhase = 2, f._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped)
                    for (d = 3, e = 1; c > e && (f = b[e], a._currentTarget = f, a._target = this, a._eventPhase = d, f._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); e++);
            }, c.prototype.willTrigger = function(a) {
                for (var b = this; b;) {
                    if (b.hasEventListener(a)) return !0;
                    b = b._parent
                }
                return !1
            }, Object.defineProperty(c.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(b) {
                    (this._cacheAsBitmap = b) ? a.callLater(this._makeBitmapCache, this): this._texture_to_render = null
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._makeBitmapCache = function() {
                this.renderTexture || (this.renderTexture = new a.RenderTexture);
                var b = this.renderTexture.drawToTexture(this);
                return this._texture_to_render = b ? this.renderTexture : null, b
            }, c.prototype._setCacheDirty = function(a) {
                void 0 === a && (a = !0), this._cacheDirty = a
            }, c.getTransformBounds = function(a, b) {
                var g, h, i, j, k, l, m, n, c = a.x,
                    d = a.y,
                    e = a.width,
                    f = a.height;
                return (c || d) && b.appendTransform(0, 0, 1, 1, 0, 0, 0, -c, -d), g = e * b.a, e *= b.b, h = f * b.c, f *= b.d, i = b.tx, j = b.ty, k = i, l = i, m = j, n = j, (c = g + i) < k ? k = c : c > l && (l = c), (c = g + h + i) < k ? k = c : c > l && (l = c), (c = h + i) < k ? k = c : c > l && (l = c), (d = e + j) < m ? m = d : d > n && (n = d), (d = e + f + j) < m ? m = d : d > n && (n = d), (d = f + j) < m ? m = d : d > n && (n = d), a.initialize(k, m, l - k, n - m)
            }, Object.defineProperty(c.prototype, "colorTransform", {
                get: function() {
                    return this._colorTransform
                },
                set: function(a) {
                    this._colorTransform = a
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "filter", {
                get: function() {
                    return this._filter
                },
                set: function(a) {
                    this._filter = a
                },
                enumerable: !0,
                configurable: !0
            }), c.identityMatrixForGetConcatenated = new a.Matrix, c._enterFrameCallBackList = [], c._renderCallBackList = [], c
        }(a.EventDispatcher);
        a.DisplayObject = b, b.prototype.__class__ = "egret.DisplayObject", b = function() {
            function a() {
                this.matrix = null
            }
            return a.prototype.updateColor = function() {}, a
        }(), a.ColorTransform = b, b.prototype.__class__ = "egret.ColorTransform"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._touchChildren = !0, this._children = [], this._isContainer = !0
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "touchChildren", {
                get: function() {
                    return this._touchChildren
                },
                set: function(a) {
                    this._touchChildren = a
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "numChildren", {
                get: function() {
                    return this._children.length
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.setChildIndex = function(a, b) {
                this.doSetChildIndex(a, b)
            }, c.prototype.doSetChildIndex = function(b, c) {
                var d = this._children.indexOf(b);
                0 > d && a.Logger.fatalWithErrorId(1006), this._children.splice(d, 1), 0 > c || this._children.length <= c ? this._children.push(b) : this._children.splice(c, 0, b)
            }, c.prototype.addChild = function(a) {
                var b = this._children.length;
                return a._parent == this && b--, this._doAddChild(a, b)
            }, c.prototype.addChildAt = function(a, b) {
                return this._doAddChild(a, b)
            }, c.prototype._doAddChild = function(b, d, e) {
                var f, g;
                if (void 0 === e && (e = !0), b == this) return b;
                if (0 > d || d > this._children.length) return a.Logger.fatalWithErrorId(1007), b;
                if (f = b._parent, f == this) return this.doSetChildIndex(b, d), b;
                if (f && (g = f._children.indexOf(b), g >= 0 && f._doRemoveChild(g)), this._children.splice(d, 0, b), b._parentChanged(this), e && b.dispatchEventWith(a.Event.ADDED, !0), this._stage)
                    for (b._onAddToStage(), d = c.__EVENT__ADD_TO_STAGE_LIST; 0 < d.length;) f = d.shift(), e && f.dispatchEventWith(a.Event.ADDED_TO_STAGE);
                return b._setDirty(), this._setSizeDirty(), b
            }, c.prototype.removeChild = function(b) {
                return b = this._children.indexOf(b), b >= 0 ? this._doRemoveChild(b) : (a.Logger.fatalWithErrorId(1008), null)
            }, c.prototype.removeChildAt = function(b) {
                return b >= 0 && b < this._children.length ? this._doRemoveChild(b) : (a.Logger.fatalWithErrorId(1007), null)
            }, c.prototype._doRemoveChild = function(b, d) {
                var e, f, g, h;
                if (void 0 === d && (d = !0), e = this._children, f = e[b], d && f.dispatchEventWith(a.Event.REMOVED, !0), this._stage)
                    for (f._onRemoveFromStage(), g = c.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < g.length;) h = g.shift(), d && h.dispatchEventWith(a.Event.REMOVED_FROM_STAGE), h._stage = null;
                return f._parentChanged(null), e.splice(b, 1), this._setSizeDirty(), f
            }, c.prototype.getChildAt = function(b) {
                return b >= 0 && b < this._children.length ? this._children[b] : (a.Logger.fatalWithErrorId(1007), null)
            }, c.prototype.contains = function(a) {
                for (; a;) {
                    if (a == this) return !0;
                    a = a._parent
                }
                return !1
            }, c.prototype.swapChildrenAt = function(b, c) {
                b >= 0 && b < this._children.length && c >= 0 && c < this._children.length ? this._swapChildrenAt(b, c) : a.Logger.fatalWithErrorId(1007)
            }, c.prototype.swapChildren = function(b, c) {
                var d = this._children.indexOf(b),
                    e = this._children.indexOf(c); - 1 == d || -1 == e ? a.Logger.fatalWithErrorId(1008) : this._swapChildrenAt(d, e)
            }, c.prototype._swapChildrenAt = function(a, b) {
                if (a != b) {
                    var c = this._children,
                        d = c[a];
                    c[a] = c[b], c[b] = d
                }
            }, c.prototype.getChildIndex = function(a) {
                return this._children.indexOf(a)
            }, c.prototype.removeChildren = function() {
                for (var a = this._children.length - 1; a >= 0; a--) this._doRemoveChild(a)
            }, c.prototype._updateTransform = function() {
                var c, d, e;
                if (this._visible) {
                    if (this._filter && a.RenderCommand.push(this._setGlobalFilter, this), this._colorTransform && a.RenderCommand.push(this._setGlobalColorTransform, this), c = this.mask || this._scrollRect, c && a.RenderCommand.push(this._pushMask, this), b.prototype._updateTransform.call(this), !this._cacheAsBitmap || !this._texture_to_render)
                        for (d = 0, e = this._children.length; e > d; d++) this._children[d]._updateTransform();
                    c && a.RenderCommand.push(this._popMask, this), this._colorTransform && a.RenderCommand.push(this._removeGlobalColorTransform, this), this._filter && a.RenderCommand.push(this._removeGlobalFilter, this)
                }
            }, c.prototype._render = function(b) {
                if (!a.MainContext.__use_new_draw)
                    for (var c = 0, d = this._children.length; d > c; c++) this._children[c]._draw(b)
            }, c.prototype._measureBounds = function() {
                var b, c, d, e, f, g, h, i, j, k, l;
                for (b = 0, c = 0, d = 0, e = 0, f = this._children.length, g = 0; f > g; g++) h = this._children[g], h._visible && (i = h.getBounds(a.Rectangle.identity, !1), j = i.x, k = i.y, l = i.width, i = i.height, h = h._getMatrix(), h = a.DisplayObject.getTransformBounds(a.Rectangle.identity.initialize(j, k, l, i), h), j = h.x, k = h.y, l = h.width + h.x, h = h.height + h.y, (b > j || 0 == g) && (b = j), (l > c || 0 == g) && (c = l), (d > k || 0 == g) && (d = k), (h > e || 0 == g) && (e = h));
                return a.Rectangle.identity.initialize(b, d, c - b, e - d)
            }, c.prototype.hitTest = function(c, d, e) {
                var f, g, h, i, j, k, l;
                if (void 0 === e && (e = !1), !this._visible) return null;
                if (this._scrollRect) {
                    if (c < this._scrollRect.x || d < this._scrollRect.y || c > this._scrollRect.x + this._scrollRect.width || d > this._scrollRect.y + this._scrollRect.height) return null
                } else if (this.mask && (this.mask.x > c || c > this.mask.x + this.mask.width || this.mask.y > d || d > this.mask.y + this.mask.height)) return null;
                for (g = this._children, h = this._touchChildren, i = g.length - 1; i >= 0; i--)
                    if (j = g[i], k = j._getMatrix(), l = j._scrollRect, l && k.append(1, 0, 0, 1, -l.x, -l.y), k.invert(), k = a.Matrix.transformCoords(k, c, d), j = j.hitTest(k.x, k.y, !0)) {
                        if (!h) return this;
                        if (j._touchEnabled && h) return j;
                        f = this
                    }
                return f ? f : this._texture_to_render ? b.prototype.hitTest.call(this, c, d, e) : null
            }, c.prototype._onAddToStage = function() {
                b.prototype._onAddToStage.call(this);
                for (var a = this._children.length, c = 0; a > c; c++) this._children[c]._onAddToStage()
            }, c.prototype._onRemoveFromStage = function() {
                b.prototype._onRemoveFromStage.call(this);
                for (var a = this._children.length, c = 0; a > c; c++) this._children[c]._onRemoveFromStage()
            }, c.prototype.getChildByName = function(a) {
                for (var b, c = this._children, d = c.length, e = 0; d > e; e++)
                    if (b = c[e], b.name == a) return b;
                return null
            }, c.__EVENT__ADD_TO_STAGE_LIST = [], c.__EVENT__REMOVE_FROM_STAGE_LIST = [], c
        }(a.DisplayObject);
        a.DisplayObjectContainer = b, b.prototype.__class__ = "egret.DisplayObjectContainer"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.NO_BORDER = "noBorder", a.NO_SCALE = "noScale", a.SHOW_ALL = "showAll", a.EXACT_FIT = "exactFit", a
        }();
        a.StageScaleMode = b, b.prototype.__class__ = "egret.StageScaleMode"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c) {
                void 0 === a && (a = 480), void 0 === c && (c = 800), b.call(this), this._changeSizeDispatchFlag = !0, this._scaleMode = "", this._stageHeight = this._stageWidth = 0 / 0, this.touchEnabled = !0, this._stage = this, this._stageWidth = a, this._stageHeight = c
            }
            return __extends(c, b), c.prototype.invalidate = function() {
                c._invalidateRenderFlag = !0
            }, Object.defineProperty(c.prototype, "scaleMode", {
                get: function() {
                    return this._scaleMode
                },
                set: function(a) {
                    this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.changeSize = function() {
                this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(a.Event.RESIZE))
            }, c.prototype.setResolutionPolicy = function() {
                var d, b = c.SCALE_MODE_ENUM[this._scaleMode];
                if (!b) throw Error(a.getString(1024));
                d = new a.EqualToFrame, b = new a.ResolutionPolicy(d, b), a.StageDelegate.getInstance()._setResolutionPolicy(b), this._stageWidth = a.StageDelegate.getInstance()._stageWidth, this._stageHeight = a.StageDelegate.getInstance()._stageHeight
            }, Object.defineProperty(c.prototype, "stageWidth", {
                get: function() {
                    return this._stageWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "stageHeight", {
                get: function() {
                    return this._stageHeight
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.hitTest = function(b, c, d) {
                var e, f, g, h;
                if (!this._touchEnabled) return null;
                if (!this._touchChildren) return this;
                for (d = this._children, f = d.length - 1; f >= 0; f--)
                    if (e = d[f], g = e._getMatrix(), h = e._scrollRect, h && g.append(1, 0, 0, 1, -h.x, -h.y), g.invert(), g = a.Matrix.transformCoords(g, b, c), (e = e.hitTest(g.x, g.y, !0)) && e._touchEnabled) return e;
                return this
            }, c.prototype.getBounds = function(b) {
                return b || (b = new a.Rectangle), b.initialize(0, 0, this._stageWidth, this._stageHeight)
            }, c.prototype._updateTransform = function() {
                for (var a = 0, b = this._children.length; b > a; a++) this._children[a]._updateTransform()
            }, Object.defineProperty(c.prototype, "focus", {
                get: function() {
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), c.registerScaleMode = function(b, d, e) {
                c.SCALE_MODE_ENUM[b] && !e ? a.Logger.warningWithErrorId(1009, b) : c.SCALE_MODE_ENUM[b] = d
            }, c._invalidateRenderFlag = !1, c.SCALE_MODE_ENUM = {}, c
        }(a.DisplayObjectContainer);
        a.Stage = b, b.prototype.__class__ = "egret.Stage"
    }(egret || (egret = {})), egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale, egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll, egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth, egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen, __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(c) {
                void 0 === c && (c = null), b.call(this), this._lastTouchPosition = new a.Point(0, 0), this._touchStartPosition = new a.Point(0, 0), this._scrollStarted = !1, this._lastTouchTime = 0, this._lastTouchEvent = null, this._velocitys = [], this._isVTweenPlaying = this._isHTweenPlaying = !1, this._vScrollTween = this._hScrollTween = null, this.scrollBeginThreshold = 10, this.scrollSpeed = 1, this._content = null, this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto", this._scrollTop = this._scrollLeft = 0, this._vCanScroll = this._hCanScroll = !1, this.touchBeginTimer = this.delayTouchBeginEvent = null, this.touchEnabled = !0, c && this.setContent(c)
            }
            return __extends(c, b), c.prototype.setContent = function(a) {
                this._content !== a && (this.removeContent(), a && (this._content = a, b.prototype.addChild.call(this, a), this._addEvents()))
            }, c.prototype.removeContent = function() {
                this._content && (this._removeEvents(), b.prototype.removeChildAt.call(this, 0)), this._content = null
            }, Object.defineProperty(c.prototype, "verticalScrollPolicy", {
                get: function() {
                    return this._verticalScrollPolicy
                },
                set: function(a) {
                    a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "horizontalScrollPolicy", {
                get: function() {
                    return this._horizontalScrollPolicy
                },
                set: function(a) {
                    a != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "scrollLeft", {
                get: function() {
                    return this._scrollLeft
                },
                set: function(a) {
                    a != this._scrollLeft && (this._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "scrollTop", {
                get: function() {
                    return this._scrollTop
                },
                set: function(a) {
                    a != this._scrollTop && (this._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.setScrollPosition = function(a, b, c) {
                if (void 0 === c && (c = !1), !(c && 0 == a && 0 == b || !c && this._scrollTop == a && this._scrollLeft == b)) {
                    if (c) {
                        c = this._isOnTheEdge(!0);
                        var d = this._isOnTheEdge(!1);
                        this._scrollTop += c ? a / 2 : a, this._scrollLeft += d ? b / 2 : b
                    } else this._scrollTop = a, this._scrollLeft = b;
                    this._validatePosition(!0, !0), this._updateContentPosition()
                }
            }, c.prototype._isOnTheEdge = function(a) {
                void 0 === a && (a = !0);
                var b = this._scrollTop,
                    c = this._scrollLeft;
                return a ? 0 > b || b > this.getMaxScrollTop() : 0 > c || c > this.getMaxScrollLeft()
            }, c.prototype._validatePosition = function(a, b) {
                if (void 0 === a && (a = !1), void 0 === b && (b = !1), a) {
                    var c = this.height,
                        d = this._getContentHeight();
                    this._scrollTop = Math.max(this._scrollTop, (0 - c) / 2), this._scrollTop = Math.min(this._scrollTop, d > c ? d - c / 2 : c / 2)
                }
                b && (c = this.width, d = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - c) / 2), this._scrollLeft = Math.min(this._scrollLeft, d > c ? d - c / 2 : c / 2))
            }, c.prototype._setWidth = function(a) {
                this._explicitWidth != a && (b.prototype._setWidth.call(this, a), this._updateContentPosition())
            }, c.prototype._setHeight = function(a) {
                this._explicitHeight != a && (b.prototype._setHeight.call(this, a), this._updateContentPosition())
            }, c.prototype._updateContentPosition = function() {
                var b = this.getBounds(a.Rectangle.identity);
                this.scrollRect = new a.Rectangle(this._scrollLeft, this._scrollTop, b.width, b.height), this.dispatchEvent(new a.Event(a.Event.CHANGE))
            }, c.prototype._checkScrollPolicy = function() {
                var b, a = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
                return this._hCanScroll = a, b = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height), this._vCanScroll = b, a || b
            }, c.prototype.__checkScrollPolicy = function(a, b, c) {
                return "on" == a ? !0 : "off" == a ? !1 : b > c
            }, c.prototype._addEvents = function() {
                this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.addEventListener(a.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.addEventListener(a.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
            }, c.prototype._removeEvents = function() {
                this.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.removeEventListener(a.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.removeEventListener(a.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
            }, c.prototype._onTouchBegin = function(b) {
                !b._isDefaultPrevented && this._checkScrollPolicy() && (this._touchStartPosition.x = b.stageX, this._touchStartPosition.y = b.stageY, (this._isHTweenPlaying || this._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(a.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(a.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(a.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(a.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(b), b.preventDefault())
            }, c.prototype._onTouchBeginCapture = function(b) {
                var d, c = this._checkScrollPolicy();
                if (c) {
                    for (d = b.target; d != this;) {
                        if ("_checkScrollPolicy" in d && (c = d._checkScrollPolicy())) return;
                        d = d.parent
                    }
                    b.stopPropagation(), this.delayTouchBeginEvent = this.cloneTouchEvent(b), this.touchBeginTimer || (this.touchBeginTimer = new a.Timer(100, 1), this.touchBeginTimer.addEventListener(a.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this)), this.touchBeginTimer.start(), this._onTouchBegin(b)
                }
            }, c.prototype._onTouchEndCapture = function() {
                this.delayTouchBeginEvent && this._onTouchBeginTimer()
            }, c.prototype._onTouchBeginTimer = function() {
                this.touchBeginTimer.stop();
                var a = this.delayTouchBeginEvent;
                this.delayTouchBeginEvent = null, this.stage && this.dispatchPropagationEvent(a)
            }, c.prototype.dispatchPropagationEvent = function(a) {
                for (var b = [], c = a._target, d = 0; c;) c == this && (d = b.length), b.push(c), c = c.parent;
                c = b.slice(0, d), c = c.reverse(), b = c.concat(b), this._dispatchPropagationEvent(a, b, d)
            }, c.prototype._dispatchPropagationEvent = function(a, b, c) {
                var d, e, f;
                for (d = b.length, e = 0; d > e && (f = b[e], a._currentTarget = f, a._eventPhase = c > e ? 1 : e == c ? 2 : 3, f._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); e++);
            }, c.prototype._onTouchMove = function(a) {
                if (this._lastTouchPosition.x != a.stageX || this._lastTouchPosition.y != a.stageY) {
                    if (!this._scrollStarted) {
                        var b = a.stageX - this._touchStartPosition.x,
                            c = a.stageY - this._touchStartPosition.y;
                        if (Math.sqrt(b * b + c * c) < this.scrollBeginThreshold) return void this._logTouchEvent(a)
                    }
                    this._scrollStarted = !0, this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop()), this.touchChildren = !1, b = this._getPointChange(a), this.setScrollPosition(b.y, b.x, !0), this._calcVelocitys(a), this._logTouchEvent(a)
                }
            }, c.prototype._onTouchEnd = function() {
                this.touchChildren = !0, this._scrollStarted = !1, a.MainContext.instance.stage.removeEventListener(a.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), a.MainContext.instance.stage.removeEventListener(a.TouchEvent.TOUCH_END, this._onTouchEnd, this), a.MainContext.instance.stage.removeEventListener(a.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.removeEventListener(a.Event.ENTER_FRAME, this._onEnterFrame, this), this._moveAfterTouchEnd()
            }, c.prototype._onEnterFrame = function(b) {
                b = a.getTimer(), 100 < b - this._lastTouchTime && 300 > b - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
            }, c.prototype._logTouchEvent = function(b) {
                this._lastTouchPosition.x = b.stageX, this._lastTouchPosition.y = b.stageY, this._lastTouchEvent = this.cloneTouchEvent(b), this._lastTouchTime = a.getTimer()
            }, c.prototype._getPointChange = function(a) {
                return {
                    x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - a.stageX,
                    y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - a.stageY
                }
            }, c.prototype._calcVelocitys = function(b) {
                var d, c = a.getTimer();
                0 == this._lastTouchTime ? this._lastTouchTime = c : (d = this._getPointChange(b), c -= this._lastTouchTime, d.x /= c, d.y /= c, this._velocitys.push(d), 5 < this._velocitys.length && this._velocitys.shift(), this._lastTouchPosition.x = b.stageX, this._lastTouchPosition.y = b.stageY)
            }, c.prototype._getContentWidth = function() {
                return this._content.explicitWidth || this._content.width
            }, c.prototype._getContentHeight = function() {
                return this._content.explicitHeight || this._content.height
            }, c.prototype.getMaxScrollLeft = function() {
                var a = this._getContentWidth() - this.width;
                return Math.max(0, a)
            }, c.prototype.getMaxScrollTop = function() {
                var a = this._getContentHeight() - this.height;
                return Math.max(0, a)
            }, c.prototype._moveAfterTouchEnd = function() {
                var a, b, d, e, f, g;
                if (0 != this._velocitys.length) {
                    for (a = 0, b = 0, d = 0, e = 0; e < this._velocitys.length; e++) f = this._velocitys[e], g = c.weight[e], a += f.x * g, b += f.y * g, d += g;
                    this._velocitys.length = 0, 0 >= this.scrollSpeed && (this.scrollSpeed = 1), a = a / d * this.scrollSpeed, b = b / d * this.scrollSpeed, f = Math.abs(a), d = Math.abs(b), g = this.getMaxScrollLeft(), e = this.getMaxScrollTop(), a = f > .02 ? this.getAnimationDatas(a, this._scrollLeft, g) : {
                        position: this._scrollLeft,
                        duration: 1
                    }, b = d > .02 ? this.getAnimationDatas(b, this._scrollTop, e) : {
                        position: this._scrollTop,
                        duration: 1
                    }, this.setScrollLeft(a.position, a.duration), this.setScrollTop(b.position, b.duration)
                }
            }, c.prototype._onTweenFinished = function(a) {
                a == this._vScrollTween && (this._isVTweenPlaying = !1), a == this._hScrollTween && (this._isHTweenPlaying = !1), 0 == this._isHTweenPlaying && 0 == this._isVTweenPlaying && this._onScrollFinished()
            }, c.prototype._onScrollStarted = function() {}, c.prototype._onScrollFinished = function() {
                a.Tween.removeTweens(this), this._vScrollTween = this._hScrollTween = null, this._isVTweenPlaying = this._isHTweenPlaying = !1, this.dispatchEvent(new a.Event(a.Event.COMPLETE))
            }, c.prototype.setScrollTop = function(b, c) {
                var d, e;
                return void 0 === c && (c = 0), d = Math.min(this.getMaxScrollTop(), Math.max(b, 0)), 0 == c ? (this.scrollTop = d, null) : (e = a.Tween.get(this).to({
                    scrollTop: b
                }, c, a.Ease.quartOut), d != b && e.to({
                    scrollTop: d
                }, 300, a.Ease.quintOut), this._isVTweenPlaying = !0, this._vScrollTween = e, e.call(this._onTweenFinished, this, [e]), this._isHTweenPlaying || this._onScrollStarted(), e)
            }, c.prototype.setScrollLeft = function(b, c) {
                var d, e;
                return void 0 === c && (c = 0), d = Math.min(this.getMaxScrollLeft(), Math.max(b, 0)), 0 == c ? (this.scrollLeft = d, null) : (e = a.Tween.get(this).to({
                    scrollLeft: b
                }, c, a.Ease.quartOut), d != b && e.to({
                    scrollLeft: d
                }, 300, a.Ease.quintOut), this._isHTweenPlaying = !0, this._hScrollTween = e, e.call(this._onTweenFinished, this, [e]), this._isVTweenPlaying || this._onScrollStarted(), e)
            }, c.prototype.getAnimationDatas = function(a, b, c) {
                var d = Math.abs(a),
                    e = 0,
                    f = b + 500 * a;
                if (0 > f || f > c)
                    for (f = b; 1 / 0 != Math.abs(a) && .02 < Math.abs(a);) f += a, a = 0 > f || f > c ? .95 * .998 * a : .998 * a, e++;
                else e = 500 * -Math.log(.02 / d);
                return {
                    position: Math.min(c + 50, Math.max(f, -50)),
                    duration: e
                }
            }, c.prototype.cloneTouchEvent = function(b) {
                var c = new a.TouchEvent(b._type, b._bubbles, b.cancelable);
                return c.touchPointID = b.touchPointID, c._stageX = b._stageX, c._stageY = b._stageY, c.ctrlKey = b.ctrlKey, c.altKey = b.altKey, c.shiftKey = b.shiftKey, c.touchDown = b.touchDown, c._isDefaultPrevented = !1, c._target = b._target, c
            }, c.prototype.throwNotSupportedError = function() {
                throw Error(a.getString(1023))
            }, c.prototype.addChild = function() {
                return this.throwNotSupportedError(), null
            }, c.prototype.addChildAt = function() {
                return this.throwNotSupportedError(), null
            }, c.prototype.removeChild = function() {
                return this.throwNotSupportedError(), null
            }, c.prototype.removeChildAt = function() {
                return this.throwNotSupportedError(), null
            }, c.prototype.setChildIndex = function() {
                this.throwNotSupportedError()
            }, c.prototype.swapChildren = function() {
                this.throwNotSupportedError()
            }, c.prototype.swapChildrenAt = function() {
                this.throwNotSupportedError()
            }, c.prototype.hitTest = function(c, d, e) {
                void 0 === e && (e = !1);
                var f = b.prototype.hitTest.call(this, c, d, e);
                return f ? f : a.DisplayObject.prototype.hitTest.call(this, c, d, e)
            }, c.weight = [1, 1.33, 1.66, 2, 2.33], c
        }(a.DisplayObjectContainer);
        a.ScrollView = b, b.prototype.__class__ = "egret.ScrollView"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.REPEAT = "repeat", a.SCALE = "scale", a
        }();
        a.BitmapFillMode = b, b.prototype.__class__ = "egret.BitmapFillMode"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a) {
                b.call(this), this.scale9Grid = this._texture = null, this.fillMode = "scale", a && (this._texture = a, this._setSizeDirty()), this.needDraw = !0
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "texture", {
                get: function() {
                    return this._texture
                },
                set: function(a) {
                    a != this._texture && (this._setSizeDirty(), this._texture = a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._render = function(a) {
                var b = this._texture;
                b ? (this._texture_to_render = b, c._drawBitmap(a, this._hasWidthSet ? this._explicitWidth : b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
            }, c._drawBitmap = function(a, b, d, e) {
                var g, h, i, j, k, l, f = e._texture_to_render;
                f && (g = f._textureWidth, h = f._textureHeight, "scale" == e.fillMode ? (i = e.scale9Grid || f.scale9Grid, i && g - i.width < b && h - i.height < d ? c.drawScale9GridImage(a, e, i, b, d) : (i = f._offsetX, j = f._offsetY, k = f._bitmapWidth || g, l = f._bitmapHeight || h, b /= g, i = Math.round(i * b), b = Math.round(k * b), d /= h, j = Math.round(j * d), d = Math.round(l * d), c.renderFilter.drawImage(a, e, f._bitmapX, f._bitmapY, k, l, i, j, b, d))) : c.drawRepeatImage(a, e, b, d, e.fillMode))
            }, c.drawRepeatImage = function(b, c, d, e, f) {
                var h, i, j, k, l, g = c._texture_to_render;
                g && (h = g._textureWidth, i = g._textureHeight, j = g._bitmapX, k = g._bitmapY, h = g._bitmapWidth || h, i = g._bitmapHeight || i, l = g._offsetX, g = g._offsetY, a.RenderFilter.getInstance().drawImage(b, c, j, k, h, i, l, g, d, e, f))
            }, c.drawScale9GridImage = function(b, c, d, e, f) {
                var i, j, k, l, m, n, o, p, q, r, s, t, u, g = a.MainContext.instance.rendererContext._texture_scale_factor,
                    h = c._texture_to_render;
                h && d && (i = h._textureWidth, j = h._textureHeight, k = h._bitmapX, l = h._bitmapY, m = h._bitmapWidth || i, n = h._bitmapHeight || j, e -= i - m, f -= j - n, b.drawImageScale9(h, k, l, m, n, h._offsetX, h._offsetY, e, f, d) || (i = h._offsetX / g, j = h._offsetY / g, h = a.RenderFilter.getInstance(), d = a.Rectangle.identity.initialize(d.x - Math.round(i), d.y - Math.round(i), d.width, d.height), i = Math.round(i), j = Math.round(j), d.y == d.bottom && (d.bottom < n ? d.bottom++ : d.y--), d.x == d.right && (d.right < m ? d.right++ : d.x--), o = k + d.x / g, p = k + d.right / g, q = m - d.right, r = l + d.y / g, g = l + d.bottom / g, s = n - d.bottom, t = i + d.x, u = j + d.y, n = f - (n - d.bottom), m = e - (m - d.right), h.drawImage(b, c, k, l, d.x, d.y, i, j, d.x, d.y), h.drawImage(b, c, o, l, d.width, d.y, t, j, m - d.x, d.y), h.drawImage(b, c, p, l, q, d.y, i + m, j, e - m, d.y), h.drawImage(b, c, k, r, d.x, d.height, i, u, d.x, n - d.y), h.drawImage(b, c, o, r, d.width, d.height, t, u, m - d.x, n - d.y), h.drawImage(b, c, p, r, q, d.height, i + m, u, e - m, n - d.y), h.drawImage(b, c, k, g, d.x, s, i, j + n, d.x, f - n), h.drawImage(b, c, o, g, d.width, s, t, j + n, m - d.x, f - n), h.drawImage(b, c, p, g, q, s, i + m, j + n, e - m, f - n)))
            }, c.prototype._measureBounds = function() {
                var c = this._texture;
                return c ? a.Rectangle.identity.initialize(0, 0, c._textureWidth, c._textureHeight) : b.prototype._measureBounds.call(this)
            }, c.renderFilter = a.RenderFilter.getInstance(), c
        }(a.DisplayObject);
        a.Bitmap = b, b.prototype.__class__ = "egret.Bitmap"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._text = "", this._textChanged = !1, this._font = null, this._fontChanged = !1, this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = 0, this.textLinesChange = !0, this._lineHeights = [], this.needDraw = this.cacheAsBitmap = !0
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(a) {
                    this._text != a && (this._textChanged = !0, this._text = a, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "font", {
                get: function() {
                    return this._font
                },
                set: function(a) {
                    this._font != a && (this._font = a, this._fontChanged = !0, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setSizeDirty = function() {
                b.prototype._setSizeDirty.call(this), this.textLinesChange = !0
            }, c.prototype._render = function(b) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, d = this.getTextLines(),
                    e = d.length;
                if (0 != e) {
                    for (f = this._font, g = f._getFirstCharHeight(), g = Math.ceil(g * c.EMPTY_FACTOR), h = 0, i = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY, j = this._lineHeights, k = 0; e > k && (l = j[k], !(k > 0 && h + l > i)); k++) {
                        for (m = d[k], n = m.length, o = 0, p = 0; n > p; p++) q = m.charAt(p), r = f.getTexture(q), r ? (q = r._bitmapWidth || r._textureWidth, s = r._bitmapHeight || r._textureHeight, this._texture_to_render = r, a.RenderFilter.getInstance().drawImage(b, this, r._bitmapX, r._bitmapY, q, s, o + r._offsetX, h + r._offsetY, q, s), o += r._textureWidth) : " " == q ? o += g : a.Logger.warningWithErrorId(1011, q);
                        h += l
                    }
                    this._texture_to_render = null
                }
            }, c.prototype._measureBounds = function() {
                return 0 == this.getTextLines().length ? a.Rectangle.identity.initialize(0, 0, 0, 0) : a.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY)
            }, c.prototype.getTextLines = function() {
                var b, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
                if (!this.textLinesChange) return this._textLines;
                if (b = [], this._textLines = b, this.textLinesChange = !1, d = [], this._lineHeights = d, !this._text || !this._font) return b;
                for (e = 0, f = 0, g = 0, h = 0, i = this._hasWidthSet, j = this._hasWidthSet ? this._explicitWidth : Number.POSITIVE_INFINITY, k = this._font, l = k._getFirstCharHeight(), m = Math.ceil(l * c.EMPTY_FACTOR), n = this._text.split(/(?:\r\n|\r|\n)/), o = n.length, p = !0, q = 0; o > q; q++) {
                    for (r = n[q], s = r.length, t = 0, u = 0, v = !0, w = 0; s > w; w++) {
                        if (y = r.charAt(w), z = 0, A = 0, B = k.getTexture(y), B) y = B._textureWidth, x = B._textureHeight, z = B._offsetX, A = B._offsetY;
                        else {
                            if (" " != y) {
                                a.Logger.warningWithErrorId(1011, y), v && (v = !1);
                                continue
                            }
                            y = m, x = l
                        }
                        v && (v = !1, g = Math.min(z, g)), p && (h = Math.min(A, h)), i && w > 0 && u + y > j ? (b.push(r.substring(0, w)), d.push(t), f += t, e = Math.max(u, e), r = r.substring(w), s = r.length, w = 0, u = y, t = x) : (u += y, t = Math.max(x, t))
                    }
                    p && (p = !1), b.push(r), d.push(t), f += t, e = Math.max(u, e)
                }
                return this._textWidth = e, this._textHeight = f, this._textOffsetX = g, this._textOffsetY = h, b
            }, c.EMPTY_FACTOR = .33, c
        }(a.DisplayObject);
        a.BitmapText = b, b.prototype.__class__ = "egret.BitmapText"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b() {
                this.fillStyleColor = this.strokeStyleColor = this.renderContext = this.commandQueue = this.canvasContext = null, this._dirty = !1, this._firstCheck = !0, this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0, this.commandQueue = []
            }
            return b.prototype.beginFill = function() {}, b.prototype._setStyle = function() {}, b.prototype.drawRect = function(a, b, c, d) {
                this.checkRect(a, b, c, d)
            }, b.prototype.drawCircle = function(a, b, c) {
                this.checkRect(a - c, b - c, 2 * c, 2 * c)
            }, b.prototype.drawRoundRect = function(a, b, c, d) {
                this.checkRect(a, b, c, d)
            }, b.prototype.drawEllipse = function(a, b, c, d) {
                this.checkRect(a - c, b - d, 2 * c, 2 * d)
            }, b.prototype.lineStyle = function() {}, b.prototype.lineTo = function(a, b) {
                this.checkPoint(a, b)
            }, b.prototype.curveTo = function(a, b, c, d) {
                this.checkPoint(a, b), this.checkPoint(c, d)
            }, b.prototype.moveTo = function(a, b) {
                this.checkPoint(a, b)
            }, b.prototype.clear = function() {
                this._maxY = this._maxX = this._minY = this._minX = 0, this._firstCheck = !0
            }, b.prototype.endFill = function() {}, b.prototype._draw = function() {}, b.prototype.checkRect = function(a, b, c, d) {
                this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = b, this._maxX = a + c, this._maxY = b + d) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, b), this._maxX = Math.max(this._maxX, a + c), this._maxY = Math.max(this._maxY, b + d))
            }, b.prototype.checkPoint = function(a, b) {
                this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = b, this._maxX = a, this._maxY = b) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, b), this._maxX = Math.max(this._maxX, a), this._maxY = Math.max(this._maxY, b)), this._lastX = a, this._lastY = b
            }, b.prototype._measureBounds = function() {
                return a.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
            }, b
        }();
        a.Graphics = b, b.prototype.__class__ = "egret.Graphics",
            function() {
                return function(a, b, c) {
                    this.method = a, this.thisObject = b, this.args = c
                }
            }().prototype.__class__ = "egret.Command"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._graphics = null
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "graphics", {
                get: function() {
                    return this._graphics || (this._graphics = new a.Graphics, this.needDraw = !0), this._graphics
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._render = function(a) {
                this._graphics && this._graphics._draw(a)
            }, c.prototype._measureBounds = function() {
                var a = this._graphics;
                return a ? a._measureBounds() : b.prototype._measureBounds.call(this)
            }, c
        }(a.DisplayObject);
        a.Shape = b, b.prototype.__class__ = "egret.Shape"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._graphics = null
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "graphics", {
                get: function() {
                    return this._graphics || (this._graphics = new a.Graphics, this.needDraw = !0), this._graphics
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._render = function(a) {
                this._graphics && this._graphics._draw(a), b.prototype._render.call(this, a)
            }, c.prototype._measureBounds = function() {
                var b, c, d, e, f, g, h, i, j, k, l;
                for (b = 0, c = 0, d = 0, e = 0, f = this._children.length, g = 0; f > g; g++) h = this._children[g], h._visible && (i = h.getBounds(a.Rectangle.identity, !1), j = i.x, k = i.y, l = i.width, i = i.height, h = h._getMatrix(), h = a.DisplayObject.getTransformBounds(a.Rectangle.identity.initialize(j, k, l, i), h), j = h.x, k = h.y, l = h.width + h.x, h = h.height + h.y, (b > j || 0 == g) && (b = j), (l > c || 0 == g) && (c = l), (d > k || 0 == g) && (d = k), (h > e || 0 == g) && (e = h));
                return this._graphics && (f = this._graphics._measureBounds(), j = f.x, k = f.y, l = f.width + f.x, h = f.height + f.y, (b > j || 0 == g) && (b = j), (l > c || 0 == g) && (c = l), (d > k || 0 == g) && (d = k), (h > e || 0 == g) && (e = h)), a.Rectangle.identity.initialize(b, d, c - b, e - d)
            }, c.prototype.hitTest = function(c, d, e) {
                void 0 === e && (e = !1);
                var f = b.prototype.hitTest.call(this, c, d, e);
                return f ? f : this._graphics ? a.DisplayObject.prototype.hitTest.call(this, c, d, e) : null
            }, c
        }(a.DisplayObjectContainer);
        a.Sprite = b, b.prototype.__class__ = "egret.Sprite"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._inputEnabled = !1, this._type = "", this._inputUtils = null, this._text = "", this._displayAsPassword = !1, this._fontFamily = c.default_fontFamily, this._size = 30, this._bold = this._italic = !1, this._textColorString = "#FFFFFF", this._textColor = 16777215, this._strokeColorString = "#000000", this._stroke = this._strokeColor = 0, this._textAlign = "left", this._verticalAlign = "top", this._maxChars = 0, this._scrollV = -1, this._numLines = this._lineSpacing = this._maxScrollV = 0, this._isFlow = this._multiline = !1, this._textArr = [], this._isArrayChanged = !1, this._textMaxHeight = this._textMaxWidth = 0, this._linesArr = [], this.needDraw = !0
            }
            return __extends(c, b), c.prototype.isInput = function() {
                return this._type == a.TextFieldType.INPUT
            }, c.prototype._setTouchEnabled = function(a) {
                b.prototype._setTouchEnabled.call(this, a), this.isInput() && (this._inputEnabled = !0)
            }, Object.defineProperty(c.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(a) {
                    this._setType(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setType = function(b) {
                this._type != b && (this._type = b, this._type == a.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new a.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
            }, Object.defineProperty(c.prototype, "text", {
                get: function() {
                    return this._getText()
                },
                set: function(a) {
                    this._setText(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._getText = function() {
                return this._type == a.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
            }, c.prototype._setSizeDirty = function() {
                b.prototype._setSizeDirty.call(this), this._isArrayChanged = !0
            }, c.prototype._setTextDirty = function() {
                this._setSizeDirty()
            }, c.prototype._setBaseText = function(a) {
                null == a && (a = ""), this._isFlow = !1, this._text != a && (this._setTextDirty(), this._text = a, a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                    text: a
                }]))
            }, c.prototype._setText = function(a) {
                null == a && (a = ""), this._setBaseText(a), this._inputUtils && this._inputUtils._setText(this._text)
            }, Object.defineProperty(c.prototype, "displayAsPassword", {
                get: function() {
                    return this._displayAsPassword
                },
                set: function(a) {
                    this._setDisplayAsPassword(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setDisplayAsPassword = function(a) {
                this._displayAsPassword != a && (this._displayAsPassword = a, this._setTextDirty(), a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                    text: a
                }]))
            }, Object.defineProperty(c.prototype, "fontFamily", {
                get: function() {
                    return this._fontFamily
                },
                set: function(a) {
                    this._setFontFamily(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setFontFamily = function(a) {
                this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
            }, Object.defineProperty(c.prototype, "size", {
                get: function() {
                    return this._size
                },
                set: function(a) {
                    this._setSize(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setSize = function(a) {
                this._size != a && (this._setTextDirty(), this._size = a)
            }, Object.defineProperty(c.prototype, "italic", {
                get: function() {
                    return this._italic
                },
                set: function(a) {
                    this._setItalic(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setItalic = function(a) {
                this._italic != a && (this._setTextDirty(), this._italic = a)
            }, Object.defineProperty(c.prototype, "bold", {
                get: function() {
                    return this._bold
                },
                set: function(a) {
                    this._setBold(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setBold = function(a) {
                this._bold != a && (this._setTextDirty(), this._bold = a)
            }, Object.defineProperty(c.prototype, "textColor", {
                get: function() {
                    return this._textColor
                },
                set: function(a) {
                    this._setTextColor(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setTextColor = function(b) {
                this._textColor != b && (this._setTextDirty(), this._textColor = b, this._textColorString = a.toColorString(b))
            }, Object.defineProperty(c.prototype, "strokeColor", {
                get: function() {
                    return this._strokeColor
                },
                set: function(a) {
                    this._setStrokeColor(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setStrokeColor = function(b) {
                this._strokeColor != b && (this._setTextDirty(), this._strokeColor = b, this._strokeColorString = a.toColorString(b))
            }, Object.defineProperty(c.prototype, "stroke", {
                get: function() {
                    return this._stroke
                },
                set: function(a) {
                    this._setStroke(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setStroke = function(a) {
                this._stroke != a && (this._setTextDirty(), this._stroke = a)
            }, Object.defineProperty(c.prototype, "textAlign", {
                get: function() {
                    return this._textAlign
                },
                set: function(a) {
                    this._setTextAlign(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setTextAlign = function(a) {
                this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
            }, Object.defineProperty(c.prototype, "verticalAlign", {
                get: function() {
                    return this._verticalAlign
                },
                set: function(a) {
                    this._setVerticalAlign(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setVerticalAlign = function(a) {
                this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
            }, Object.defineProperty(c.prototype, "maxChars", {
                get: function() {
                    return this._maxChars
                },
                set: function(a) {
                    this._setMaxChars(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setMaxChars = function(a) {
                this._maxChars != a && (this._maxChars = a)
            }, Object.defineProperty(c.prototype, "scrollV", {
                set: function(a) {
                    this._scrollV = a, this._setDirty()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "maxScrollV", {
                get: function() {
                    return this._maxScrollV
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "selectionBeginIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "selectionEndIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "caretIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setSelection = function() {}, Object.defineProperty(c.prototype, "lineSpacing", {
                get: function() {
                    return this._lineSpacing
                },
                set: function(a) {
                    this._setLineSpacing(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setLineSpacing = function(a) {
                this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
            }, c.prototype._getLineHeight = function() {
                return this._lineSpacing + this._size
            }, Object.defineProperty(c.prototype, "numLines", {
                get: function() {
                    return this._numLines
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "multiline", {
                get: function() {
                    return this._multiline
                },
                set: function(a) {
                    this._setMultiline(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setMultiline = function(a) {
                this._multiline = a, this._setDirty()
            }, c.prototype.setFocus = function() {
                a.Logger.warningWithErrorId(1013)
            }, c.prototype._onRemoveFromStage = function() {
                b.prototype._onRemoveFromStage.call(this), this._removeEvent(), this._type == a.TextFieldType.INPUT && this._inputUtils._removeStageText()
            }, c.prototype._onAddToStage = function() {
                b.prototype._onAddToStage.call(this), this._addEvent(), this._type == a.TextFieldType.INPUT && this._inputUtils._addStageText()
            }, c.prototype._updateBaseTransform = function() {
                this._getLinesArr(), 0 != this._textMaxWidth && b.prototype._updateTransform.call(this)
            }, c.prototype._updateTransform = function() {
                this._type == a.TextFieldType.INPUT ? this._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
            }, c.prototype._draw = function(a) {
                0 != this._textMaxWidth && b.prototype._draw.call(this, a)
            }, c.prototype._render = function(a) {
                this.drawText(a), this._clearDirty()
            }, c.prototype._measureBounds = function() {
                return this._getLinesArr(), 0 == this._textMaxWidth ? a.Rectangle.identity.initialize(0, 0, 0, 0) : a.Rectangle.identity.initialize(0, 0, this._textMaxWidth, this._textMaxHeight + (this._numLines - 1) * this._lineSpacing)
            }, Object.defineProperty(c.prototype, "textFlow", {
                get: function() {
                    return this._textArr
                },
                set: function(a) {
                    var b, c;
                    for (this._isFlow = !0, b = "", null == a && (a = []), c = 0; c < a.length; c++) b += a[c].text;
                    this._displayAsPassword ? this._setBaseText(b) : (this._text = b, this.setMiddleStyle(a))
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.changeToPassText = function(a) {
                if (this._displayAsPassword) {
                    for (var b = "", c = 0, d = a.length; d > c; c++) switch (a.charAt(c)) {
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
            }, c.prototype.setMiddleStyle = function(a) {
                this._isArrayChanged = !0, this._textArr = a, this._setSizeDirty()
            }, Object.defineProperty(c.prototype, "textWidth", {
                get: function() {
                    return this._textMaxWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "textHeight", {
                get: function() {
                    return this._textMaxHeight
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.appendText = function(a) {
                this.appendElement({
                    text: a
                })
            }, c.prototype.appendElement = function(a) {
                this._textArr.push(a), this.setMiddleStyle(this._textArr)
            }, c.prototype._getLinesArr = function() {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                if (!this._isArrayChanged) return this._linesArr;
                if (this._isArrayChanged = !1, b = this._textArr, c = a.MainContext.instance.rendererContext, this._linesArr = [], this._textMaxWidth = this._textMaxHeight = 0, this._hasWidthSet && 0 == this._explicitWidth) return this._numLines = 0, [{
                    width: 0,
                    height: 0,
                    elements: []
                }];
                for (e = this._linesArr, f = 0, g = 0, h = 0, this._isFlow || c.setupFont(this), i = 0, j = b.length; j > i; i++) {
                    for (k = b[i], k.style = k.style || {}, l = k.text.toString().split(/(?:\r\n|\r|\n)/), m = 0, n = l.length; n > m; m++) {
                        if (null == e[h] && (d = {
                            width: 0,
                            height: 0,
                            elements: []
                        }, e[h] = d, g = f = 0), g = this._type == a.TextFieldType.INPUT ? this._size : Math.max(g, k.style.size || this._size), "" != l[m])
                            if (this._isFlow && c.setupFont(this, k.style), o = c.measureText(l[m]), this._hasWidthSet)
                                if (f + o <= this._explicitWidth) d.elements.push({
                                    width: o,
                                    text: l[m],
                                    style: k.style
                                }), f += o;
                                else {
                                    for (p = 0, q = 0, r = l[m], s = r.length; s > p && (o = c.measureText(r.charAt(p)), !(f + o > this._explicitWidth && 0 != f + p)); p++) q += o, f += o;
                                    p > 0 && (d.elements.push({
                                        width: q,
                                        text: r.substring(0, p),
                                        style: k.style
                                    }), l[m] = r.substring(p)), m--
                                } else f += o, d.elements.push({
                            width: o,
                            text: l[m],
                            style: k.style
                        }); if (m < l.length - 1) {
                            if (d.width = f, d.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, f), this._textMaxHeight += g, this._type == a.TextFieldType.INPUT && !this._multiline) return this._numLines = e.length, e;
                            h++
                        }
                    }
                    i == b.length - 1 && d && (d.width = f, d.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, f), this._textMaxHeight += g)
                }
                return this._numLines = e.length, e
            }, c.prototype.drawText = function(b) {
                var d, e, f, g, h, i, j, k, l, m, n, o, c = this._getLinesArr();
                if (0 != this._textMaxWidth)
                    for (d = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, e = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing, f = 0, g = 0, this._hasHeightSet && (e < this._explicitHeight ? (h = 0, this._verticalAlign == a.VerticalAlign.MIDDLE ? h = .5 : this._verticalAlign == a.VerticalAlign.BOTTOM && (h = 1), f += h * (this._explicitHeight - e)) : e > this._explicitHeight && (g = Math.max(this._scrollV - 1, 0), g = Math.min(this._numLines - 1, g))), f = Math.round(f), e = 0, this._textAlign == a.HorizontalAlign.CENTER ? e = .5 : this._textAlign == a.HorizontalAlign.RIGHT && (e = 1), h = 0, i = this._numLines; i > g && (j = c[g], k = j.height, f += k / 2, !(0 != g && this._hasHeightSet && f > this._explicitHeight)); g++) {
                        for (h = Math.round((d - j.width) * e), l = 0, m = j.elements.length; m > l; l++) n = j.elements[l], o = n.style.size || this._size, this._type == a.TextFieldType.INPUT ? b.drawText(this, n.text, h, f + (k - o) / 2, n.width) : b.drawText(this, n.text, h, f + (k - o) / 2, n.width, n.style), h += n.width;
                        f += k / 2 + this._lineSpacing
                    }
            }, c.prototype._addEvent = function() {
                this.addEventListener(a.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, c.prototype._removeEvent = function() {
                this.removeEventListener(a.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, c.prototype.onTapHandler = function(b) {
                if (this._type != a.TextFieldType.INPUT && (b = this._getTextElement(b.localX, b.localY), null != b && (b = b.style) && b.href && b.href.match(/^event:/))) {
                    var c = b.href.match(/^event:/)[0];
                    a.TextEvent.dispatchTextEvent(this, a.TextEvent.LINK, b.href.substring(c.length))
                }
            }, c.prototype._getTextElement = function(a, b) {
                var c = this._getHit(a, b),
                    d = this._getLinesArr();
                return c && d[c.lineIndex] && d[c.lineIndex].elements[c.textElementIndex] ? d[c.lineIndex].elements[c.textElementIndex] : null
            }, c.prototype._getHit = function(a, b) {
                var d, e, f, g, c = this._getLinesArr();
                if (0 == this._textMaxWidth) return null;
                for (d = 0, e = 0, f = 0; f < c.length; f++) {
                    if (g = c[f], e + g.height >= b) {
                        d = f + 1;
                        break
                    }
                    if (e += g.height, e + this._lineSpacing > b) return null;
                    e += this._lineSpacing
                }
                if (0 === d) return null;
                for (c = c[d - 1], f = e = 0; f < c.elements.length; f++) {
                    if (g = c.elements[f], !(e + g.width < a)) return {
                        lineIndex: d - 1,
                        textElementIndex: f
                    };
                    e += g.width
                }
                return null
            }, c.default_fontFamily = "Arial", c
        }(a.DisplayObject);
        a.TextField = b, b.prototype.__class__ = "egret.TextField"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {
                this.resutlArr = []
            }
            return a.prototype.parser = function(a) {
                var b, c, d;
                for (this.stackArray = [], this.resutlArr = [], b = 0, c = a.length; c > b;) d = a.indexOf("<", b), 0 > d ? (this.addToResultArr(a.substring(b)), b = c) : (this.addToResultArr(a.substring(b, d)), b = a.indexOf(">", d), "/" == a.charAt(d + 1) ? this.stackArray.pop() : this.addToArray(a.substring(d + 1, b)), b += 1);
                return this.resutlArr
            }, a.prototype.addToResultArr = function(a) {
                var b, c;
                if ("" != a) {
                    for (b = [], b.push(["&lt;", "<"]), b.push(["&gt;", ">"]), b.push(["&", "&"]), b.push(["&quot;", '"']), b.push(["&apos;;", "'"]), c = 0; c < b.length; c++) a.replace(new RegExp(b[c][0], "g"), b[c][1]);
                    this.resutlArr.push(0 < this.stackArray.length ? {
                        text: a,
                        style: this.stackArray[this.stackArray.length - 1]
                    } : {
                        text: a
                    })
                }
            }, a.prototype.changeStringToObject = function(a) {
                var c, b = {};
                for (a = a.replace(/( )+/g, " ").split(" "), c = 0; c < a.length; c++) this.addProperty(b, a[c]);
                return b
            }, a.prototype.addProperty = function(a, b) {
                var c = b.replace(/( )*=( )*/g, "=").split("=");
                switch (c[1] && (c[1] = c[1].replace(/(\"|\')/g, "")), c[0].toLowerCase()) {
                    case "color":
                        a.textColor = parseInt(c[1]);
                        break;
                    case "b":
                        a.bold = "true" == (c[1] || "true");
                        break;
                    case "i":
                        a.italic = "true" == (c[1] || "true");
                        break;
                    case "size":
                        a.size = parseInt(c[1]);
                        break;
                    case "fontFamily":
                        a.fontFamily = c[1];
                        break;
                    case "href":
                        a.href = c[1]
                }
            }, a.prototype.addToArray = function(a) {
                if (a = this.changeStringToObject(a), 0 != this.stackArray.length) {
                    var b, c = this.stackArray[this.stackArray.length - 1];
                    for (b in c) null == a[b] && (a[b] = c[b])
                }
                this.stackArray.push(a)
            }, a
        }();
        a.HtmlTextParser = b, b.prototype.__class__ = "egret.HtmlTextParser"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.DYNAMIC = "dynamic", a.INPUT = "input", a
        }();
        a.TextFieldType = b, b.prototype.__class__ = "egret.TextFieldType"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a) {
                b.call(this), this.bitmapData = this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0, this._textureMap = {};
                var c = a.bitmapData;
                this.bitmapData = c, this._sourceWidth = c.width, this._sourceHeight = c.height, this._bitmapX = a._bitmapX - a._offsetX, this._bitmapY = a._bitmapY - a._offsetY
            }
            return __extends(c, b), c.prototype.getTexture = function(a) {
                return this._textureMap[a]
            }, c.prototype.createTexture = function(b, c, d, e, f, g, h, i, j) {
                void 0 === g && (g = 0), void 0 === h && (h = 0), "undefined" == typeof i && (i = g + e), "undefined" == typeof j && (j = h + f);
                var k = new a.Texture,
                    l = a.MainContext.instance.rendererContext._texture_scale_factor;
                return k._bitmapData = this.bitmapData, k._bitmapX = this._bitmapX + c, k._bitmapY = this._bitmapY + d, k._bitmapWidth = e * l, k._bitmapHeight = f * l, k._offsetX = g, k._offsetY = h, k._textureWidth = i * l, k._textureHeight = j * l, k._sourceWidth = this._sourceWidth, k._sourceHeight = this._sourceHeight, this._textureMap[b] = k
            }, c
        }(a.HashObject);
        a.SpriteSheet = b, b.prototype.__class__ = "egret.SpriteSheet"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._isFocus = !1, this._text = null, this._isFirst = this._isFirst = !0
            }
            return __extends(c, b), c.prototype.init = function(b) {
                this._text = b, this.stageText = a.StageText.create(), b = this._text.localToGlobal(), this.stageText._open(b.x, b.y, this._text._explicitWidth, this._text._explicitHeight)
            }, c.prototype._addStageText = function() {
                this._text._inputEnabled || (this._text._touchEnabled = !0), this.stageText._add(), this.stageText._addListeners(), this.stageText.addEventListener("blur", this.onBlurHandler, this), this.stageText.addEventListener("focus", this.onFocusHandler, this), this.stageText.addEventListener("updateText", this.updateTextHandler, this), this._text.addEventListener(a.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this), a.MainContext.instance.stage.addEventListener(a.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this), a.MainContext.instance.stage.addEventListener(a.Event.RESIZE, this.onResize, this)
            }, c.prototype._removeStageText = function() {
                this.stageText._remove(), this.stageText._removeListeners(), this._text._inputEnabled || (this._text._touchEnabled = !1), this.stageText.removeEventListener("blur", this.onBlurHandler, this), this.stageText.removeEventListener("focus", this.onFocusHandler, this), this.stageText.removeEventListener("updateText", this.updateTextHandler, this), this._text.removeEventListener(a.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this), a.MainContext.instance.stage.removeEventListener(a.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this), a.MainContext.instance.stage.removeEventListener(a.Event.RESIZE, this.onResize, this)
            }, c.prototype.onResize = function() {
                this._isFirst = !0
            }, c.prototype._getText = function() {
                return this.stageText._getText()
            }, c.prototype._setText = function(a) {
                this.stageText._setText(a)
            }, c.prototype.onFocusHandler = function() {
                this.hideText()
            }, c.prototype.onBlurHandler = function() {
                this.showText()
            }, c.prototype.onMouseDownHandler = function(a) {
                a.stopPropagation(), this._text._visible && (this._isFirst = !0, this._updateTransform(), this.stageText._show())
            }, c.prototype.onStageDownHandler = function() {
                this.stageText._hide(), this.showText()
            }, c.prototype.showText = function() {
                this._isFocus && (this._isFocus = !1, this.resetText())
            }, c.prototype.hideText = function() {
                this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
            }, c.prototype.updateTextHandler = function() {
                this.resetText(), this._text.dispatchEvent(new a.Event(a.Event.CHANGE))
            }, c.prototype.resetText = function() {
                this._text._setBaseText(this.stageText._getText())
            }, c.prototype._updateTransform = function() {
                var h, i, b = this._text._worldTransform.a,
                    c = this._text._worldTransform.b,
                    d = this._text._worldTransform.c,
                    e = this._text._worldTransform.d,
                    f = this._text._worldTransform.tx,
                    g = this._text._worldTransform.ty;
                this._text._updateBaseTransform(), h = this._text._worldTransform, (this._isFirst || b != h.a || c != h.b || d != h.c || e != h.d || f != h.tx || g != h.ty) && (this._isFirst = !1, b = this._text.localToGlobal(), this.stageText.changePosition(b.x, b.y), i = this, a.callLater(function() {
                    i.stageText._setScale(i._text._worldTransform.a, i._text._worldTransform.d)
                }, this))
            }, c.prototype._updateProperties = function() {
                var c, d, b = this._text._stage;
                if (null == b) this.stageText._setVisible(!1);
                else {
                    for (c = this._text, d = c._visible; d && (c = c.parent, c != b);) d = c._visible;
                    this.stageText._setVisible(d)
                }
                this.stageText._setMultiline(this._text._multiline), this.stageText._setMaxChars(this._text._maxChars), this.stageText._setSize(this._text._size), this.stageText._setTextColor(this._text._textColorString), this.stageText._setTextFontFamily(this._text._fontFamily), this.stageText._setBold(this._text._bold), this.stageText._setItalic(this._text._italic), this.stageText._setTextAlign(this._text._textAlign), this.stageText._setWidth(this._text._getSize(a.Rectangle.identity).width), this.stageText._setHeight(this._text._getSize(a.Rectangle.identity).height), this.stageText._setTextType(this._text._displayAsPassword ? "password" : "text"), this.stageText._setText(this._text._text), this.stageText._resetStageText(), this._updateTransform()
            }, c
        }(a.HashObject);
        a.InputController = b, b.prototype.__class__ = "egret.InputController"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c) {
                a.call(this, b), this.firstCharHeight = 0, this.charList = "string" == typeof c ? this.parseConfig(c) : c && c.hasOwnProperty("frames") ? c.frames : {}
            }
            return __extends(b, a), b.prototype.getTexture = function(a) {
                var b = this._textureMap[a];
                if (!b) {
                    if (b = this.charList[a], !b) return null;
                    b = this.createTexture(a, b.x, b.y, b.w, b.h, b.offX, b.offY, b.sourceW, b.sourceH), this._textureMap[a] = b
                }
                return b
            }, b.prototype._getFirstCharHeight = function() {
                var a, b, c;
                if (0 == this.firstCharHeight)
                    for (a in this.charList)
                        if (b = this.charList[a], b && (c = b.sourceH, void 0 === c && (c = b.h, void 0 === c && (c = 0), b = b.offY, void 0 === b && (b = 0), c += b), !(0 >= c))) {
                            this.firstCharHeight = c;
                            break
                        }
                return this.firstCharHeight
            }, b.prototype.parseConfig = function(a) {
                var b, c, d, e, f, g;
                for (a = a.split("\r\n").join("\n"), a = a.split("\n"), b = this.getConfigByKey(a[3], "count"), c = {}, d = 4; 4 + b > d; d++) e = a[d], f = String.fromCharCode(this.getConfigByKey(e, "id")), g = {}, c[f] = g, g.x = this.getConfigByKey(e, "x"), g.y = this.getConfigByKey(e, "y"), g.w = this.getConfigByKey(e, "width"), g.h = this.getConfigByKey(e, "height"), g.offX = this.getConfigByKey(e, "xoffset"), g.offY = this.getConfigByKey(e, "yoffset");
                return c
            }, b.prototype.getConfigByKey = function(a, b) {
                var c, d, e, f;
                for (c = a.split(" "), d = 0, e = c.length; e > d; d++)
                    if (f = c[d], b == f.substring(0, b.length)) return c = f.substring(b.length + 1), parseInt(c);
                return 0
            }, b
        }(a.SpriteSheet);
        a.BitmapFont = b, b.prototype.__class__ = "egret.BitmapFont"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a) {
                b.call(this), this._isAddedToStage = !1, this._frames = this._movieClipData = this._textureToRender = null, this._totalFrames = 0, this._frameLabels = null, this._frameIntervalTime = 0, this._eventPool = null, this._isPlaying = !1, this._isStopped = !0, this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0, this._setMovieClipData(a), this.needDraw = !0
            }
            return __extends(c, b), c.prototype._init = function() {
                this._reset();
                var a = this._movieClipData;
                a && a._isDataValid() && (this._frames = a.frames, this._totalFrames = a.numFrames, this._frameLabels = a.labels, this._frameIntervalTime = 1e3 / a.frameRate, this._initFrame())
            }, c.prototype._reset = function() {
                this._frames = null, this._playTimes = 0, this._isPlaying = !1, this.setIsStopped(!0), this._currentFrameNum = 0, this._nextFrameNum = 1, this._passedTime = this._displayedKeyFrameNum = 0, this._eventPool = []
            }, c.prototype._initFrame = function() {
                this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
            }, c.prototype._render = function(a) {
                var d, e, f, g, h, i, b = this._textureToRender;
                (this._texture_to_render = b) && (d = Math.round(b._offsetX), e = Math.round(b._offsetY), f = b._bitmapWidth || b._textureWidth, g = b._bitmapHeight || b._textureHeight, h = Math.round(f), i = Math.round(g), c.renderFilter.drawImage(a, this, b._bitmapX, b._bitmapY, f, g, d, e, h, i))
            }, c.prototype._measureBounds = function() {
                var c = this._textureToRender;
                return c ? a.Rectangle.identity.initialize(c._offsetX, c._offsetY, c._textureWidth, c._textureHeight) : b.prototype._measureBounds.call(this)
            }, c.prototype._onAddToStage = function() {
                b.prototype._onAddToStage.call(this), this._isAddedToStage = !0, this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
            }, c.prototype._onRemoveFromStage = function() {
                b.prototype._onRemoveFromStage.call(this), this._isAddedToStage = !1, this.setIsStopped(!0)
            }, c.prototype._getFrameLabelByName = function(a, b) {
                var c, d, e;
                if (void 0 === b && (b = !1), b && (a = a.toLowerCase()), c = this._frameLabels)
                    for (d = null, e = 0; e < c.length; e++)
                        if (d = c[e], b ? d.name.toLowerCase() === a : d.name === a) return d;
                return null
            }, c.prototype._getFrameLabelByFrame = function(a) {
                var c, d, b = this._frameLabels;
                if (b)
                    for (c = null, d = 0; d < b.length; d++)
                        if (c = b[d], c.frame === a) return c;
                return null
            }, c.prototype._getFrameLabelForFrame = function(a) {
                var e, b = null,
                    c = null,
                    d = this._frameLabels;
                if (d)
                    for (e = 0; e < d.length && (c = d[e], !(c.frame > a)); e++) b = c;
                return b
            }, c.prototype.play = function(a) {
                void 0 === a && (a = 0), this._isPlaying = !0, this.setPlayTimes(a), 1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
            }, c.prototype.stop = function() {
                this._isPlaying = !1, this.setIsStopped(!0)
            }, c.prototype.prevFrame = function() {
                this.gotoAndStop(this._currentFrameNum - 1)
            }, c.prototype.nextFrame = function() {
                this.gotoAndStop(this._currentFrameNum + 1)
            }, c.prototype.gotoAndPlay = function(b, c) {
                if (void 0 === c && (c = 0), 0 === arguments.length || 2 < arguments.length) throw Error(a.getString(1022, "MovieClip.gotoAndPlay()"));
                this.play(c), this._gotoFrame(b)
            }, c.prototype.gotoAndStop = function(b) {
                if (1 != arguments.length) throw Error(a.getString(1022, "MovieClip.gotoAndStop()"));
                this.stop(), this._gotoFrame(b)
            }, c.prototype._gotoFrame = function(b) {
                var c;
                if ("string" == typeof b) c = this._getFrameLabelByName(b).frame;
                else if (c = parseInt(b + "", 10), c != b) throw Error(a.getString(1022, "Frame Label Not Found"));
                1 > c ? c = 1 : c > this._totalFrames && (c = this._totalFrames), c !== this._nextFrameNum && (this._nextFrameNum = c, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
            }, c.prototype._advanceTime = function(b) {
                var c = this._frameIntervalTime;
                if (b = this._passedTime + b, this._passedTime = b % c, c = b / c, !(1 > c)) {
                    for (; c >= 1;) {
                        if (c--, this._nextFrameNum++, this._nextFrameNum > this._totalFrames)
                            if (-1 == this._playTimes) this._eventPool.push(a.Event.LOOP_COMPLETE), this._nextFrameNum = 1;
                            else {
                                if (this._playTimes--, !(0 < this._playTimes)) {
                                    this._nextFrameNum = this._totalFrames, this._eventPool.push(a.Event.COMPLETE), this.stop();
                                    break
                                }
                                this._eventPool.push(a.Event.LOOP_COMPLETE), this._nextFrameNum = 1
                            }
                        this._advanceFrame()
                    }
                    this._constructFrame(), this._handlePendingEvent()
                }
            }, c.prototype._advanceFrame = function() {
                this._currentFrameNum = this._nextFrameNum
            }, c.prototype._constructFrame = function() {
                var a = this._currentFrameNum;
                this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._displayedKeyFrameNum = a)
            }, c.prototype._handlePendingEvent = function() {
                var b, c, d, e, f, g;
                if (0 != this._eventPool.length) {
                    for (this._eventPool.reverse(), b = this._eventPool, c = b.length, d = !1, e = !1, f = 0; c > f; f++) g = b.pop(), g == a.Event.LOOP_COMPLETE ? e = !0 : g == a.Event.COMPLETE ? d = !0 : this.dispatchEventWith(g);
                    e && this.dispatchEventWith(a.Event.LOOP_COMPLETE), d && this.dispatchEventWith(a.Event.COMPLETE)
                }
            }, Object.defineProperty(c.prototype, "totalFrames", {
                get: function() {
                    return this._totalFrames
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "currentFrame", {
                get: function() {
                    return this._currentFrameNum
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "currentFrameLabel", {
                get: function() {
                    var a = this._getFrameLabelByFrame(this._currentFrameNum);
                    return a && a.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "currentLabel", {
                get: function() {
                    var a = this._getFrameLabelForFrame(this._currentFrameNum);
                    return a ? a.name : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "frameRate", {
                get: function() {
                    return this.movieClipData.frameRate
                },
                set: function(a) {
                    a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1e3 / this._movieClipData.frameRate)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "isPlaying", {
                get: function() {
                    return this._isPlaying
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "movieClipData", {
                get: function() {
                    return this._movieClipData
                },
                set: function(a) {
                    this._setMovieClipData(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setMovieClipData = function(a) {
                this._movieClipData != a && (this._movieClipData = a, this._init())
            }, c.prototype.setPlayTimes = function(a) {
                (0 > a || a >= 1) && (this._playTimes = 0 > a ? -1 : Math.floor(a))
            }, c.prototype.setIsStopped = function(b) {
                this._isStopped != b && ((this._isStopped = b) ? (this._playTimes = 0, a.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, a.Ticker.getInstance().register(this._advanceTime, this)))
            }, c.renderFilter = a.RenderFilter.getInstance(), c
        }(a.DisplayObject);
        a.MovieClip = b, b.prototype.__class__ = "egret.MovieClip"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b, c) {
                a.call(this), this._name = b, this._frame = 0 | c
            }
            return __extends(b, a), Object.defineProperty(b.prototype, "name", {
                get: function() {
                    return this._name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "frame", {
                get: function() {
                    return this._frame
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.clone = function() {
                return new b(this._name, this._frame)
            }, b
        }(a.EventDispatcher);
        a.FrameLabel = b, b.prototype.__class__ = "egret.FrameLabel"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._mcData = null, this.numFrames = 1, this.frames = [], this.labels = null, this.frameRate = 0, this.spriteSheet = this.textureData = null
            }
            return __extends(c, b), c.prototype._init = function(a, b, c) {
                this.textureData = b, this.spriteSheet = c, this._setMCData(a)
            }, c.prototype.getKeyFrameData = function(a) {
                return a = this.frames[a - 1], a.frame && (a = this.frames[a.frame - 1]), a
            }, c.prototype.getTextureByFrame = function(a) {
                if (a = this.getKeyFrameData(a), a.res) {
                    var b = this.getTextureByResName(a.res);
                    return b._offsetX = 0 | a.x, b._offsetY = 0 | a.y, b
                }
                return null
            }, c.prototype.getTextureByResName = function(a) {
                var b = this.spriteSheet.getTexture(a);
                return b || (b = this.textureData[a], b = this.spriteSheet.createTexture(a, b.x, b.y, b.w, b.h)), b
            }, c.prototype._isDataValid = function() {
                return 0 < this.frames.length
            }, c.prototype._isTextureValid = function() {
                return null != this.textureData && null != this.spriteSheet
            }, c.prototype._fillMCData = function(a) {
                this.frameRate = a.frameRate || 24, this._fillFramesData(a.frames), this._fillFrameLabelsData(a.labels)
            }, c.prototype._fillFramesData = function(a) {
                var b, c, d, e, f, g;
                for (c = this.frames, d = a ? a.length : 0, e = 0; d > e; e++)
                    if (b = a[e], c.push(b), b.duration && (f = parseInt(b.duration), f > 1))
                        for (b = c.length, g = 1; f > g; g++) c.push({
                            frame: b
                        });
                this.numFrames = c.length
            }, c.prototype._fillFrameLabelsData = function(b) {
                var c, d, e;
                if (b && (c = b.length, c > 0))
                    for (this.labels = [], d = 0; c > d; d++) e = b[d], this.labels.push(new a.FrameLabel(e.name, e.frame))
            }, Object.defineProperty(c.prototype, "mcData", {
                get: function() {
                    return this._mcData
                },
                set: function(a) {
                    this._setMCData(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setMCData = function(a) {
                this._mcData != a && (this._mcData = a) && this._fillMCData(a)
            }, c
        }(a.HashObject);
        a.MovieClipData = b, b.prototype.__class__ = "egret.MovieClipData"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c) {
                b.call(this), this.enableCache = !0, this._mcDataCache = {}, this._mcDataSet = a, this.setTexture(c)
            }
            return __extends(c, b), c.prototype.clearCache = function() {
                this._mcDataCache = {}
            }, c.prototype.generateMovieClipData = function(b) {
                if (void 0 === b && (b = ""), "" == b && this._mcDataSet)
                    for (b in this._mcDataSet.mc) break;
                if ("" == b) return null;
                var c = this._findFromCache(b, this._mcDataCache);
                return c || (c = new a.MovieClipData, this._fillData(b, c, this._mcDataCache)), c
            }, c.prototype._findFromCache = function(a, b) {
                return this.enableCache && b[a] ? b[a] : null
            }, c.prototype._fillData = function(a, b, c) {
                if (this._mcDataSet) {
                    var d = this._mcDataSet.mc[a];
                    d && (b._init(d, this._mcDataSet.res, this._spriteSheet), this.enableCache && (c[a] = b))
                }
            }, Object.defineProperty(c.prototype, "mcDataSet", {
                get: function() {
                    return this._mcDataSet
                },
                set: function(a) {
                    this._mcDataSet = a
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "texture", {
                set: function(a) {
                    this.setTexture(a)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "spriteSheet", {
                get: function() {
                    return this._spriteSheet
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.setTexture = function(b) {
                this._spriteSheet = b ? new a.SpriteSheet(b) : null
            }, c
        }(a.EventDispatcher);
        a.MovieClipDataFactory = b, b.prototype.__class__ = "egret.MovieClipDataFactory"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._scaleY = this._scaleX = 1, this._size = 30, this._color = "#FFFFFF", this._fontFamily = "Arial", this._italic = this._bold = !1, this._textAlign = "left", this._multiline = this._visible = !1, this._maxChars = 0
            }
            return __extends(b, a), b.prototype._getText = function() {
                return null
            }, b.prototype._setText = function() {}, b.prototype._setTextType = function() {}, b.prototype._getTextType = function() {
                return null
            }, b.prototype._open = function() {}, b.prototype._show = function() {}, b.prototype._add = function() {}, b.prototype._remove = function() {}, b.prototype._hide = function() {}, b.prototype._addListeners = function() {}, b.prototype._removeListeners = function() {}, b.prototype._setScale = function(a, b) {
                this._scaleX = a, this._scaleY = b
            }, b.prototype.changePosition = function() {}, b.prototype._setSize = function(a) {
                this._size = a
            }, b.prototype._setTextColor = function(a) {
                this._color = a
            }, b.prototype._setTextFontFamily = function(a) {
                this._fontFamily = a
            }, b.prototype._setBold = function(a) {
                this._bold = a
            }, b.prototype._setItalic = function(a) {
                this._italic = a
            }, b.prototype._setTextAlign = function(a) {
                this._textAlign = a
            }, b.prototype._setVisible = function(a) {
                this._visible = a
            }, b.prototype._setWidth = function() {}, b.prototype._setHeight = function() {}, b.prototype._setMultiline = function(a) {
                this._multiline = a
            }, b.prototype._setMaxChars = function(a) {
                this._maxChars = a
            }, b.prototype._resetStageText = function() {}, b.create = function() {
                return null
            }, b
        }(a.EventDispatcher);
        a.StageText = b, b.prototype.__class__ = "egret.StageText"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.GET = "get", a.POST = "post", a
        }();
        a.URLRequestMethod = b, b.prototype.__class__ = "egret.URLRequestMethod"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.BINARY = "binary", a.TEXT = "text", a.VARIABLES = "variables", a.TEXTURE = "texture", a.SOUND = "sound", a
        }();
        a.URLLoaderDataFormat = b, b.prototype.__class__ = "egret.URLLoaderDataFormat"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b) {
                void 0 === b && (b = null), a.call(this), this.variables = null, null !== b && this.decode(b)
            }
            return __extends(b, a), b.prototype.decode = function(a) {
                var b, c, d, e;
                for (this.variables || (this.variables = {}), a = a.split("+").join(" "), c = /[?&]?([^=]+)=([^&]*)/g; b = c.exec(a);) d = decodeURIComponent(b[1]), b = decodeURIComponent(b[2]), 0 == d in this.variables ? this.variables[d] = b : (e = this.variables[d], e instanceof Array ? e.push(b) : this.variables[d] = [e, b])
            }, b.prototype.toString = function() {
                if (!this.variables) return "";
                var a, b = this.variables,
                    c = [];
                for (a in b) c.push(this.encodeValue(a, b[a]));
                return c.join("&")
            }, b.prototype.encodeValue = function(a, b) {
                return b instanceof Array ? this.encodeArray(a, b) : encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }, b.prototype.encodeArray = function(a, b) {
                return a ? 0 == b.length ? encodeURIComponent(a) + "=" : b.map(function(b) {
                    return encodeURIComponent(a) + "=" + encodeURIComponent(b)
                }).join("&") : ""
            }, b
        }(a.HashObject);
        a.URLVariables = b, b.prototype.__class__ = "egret.URLVariables"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            return function(a, b) {
                this.value = this.name = "", this.name = a, this.value = b
            }
        }();
        a.URLRequestHeader = b, b.prototype.__class__ = "egret.URLRequestHeader"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(c) {
                void 0 === c && (c = null), b.call(this), this.data = null, this.method = a.URLRequestMethod.GET, this.url = "", this.url = c
            }
            return __extends(c, b), c
        }(a.HashObject);
        a.URLRequest = b, b.prototype.__class__ = "egret.URLRequest"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(c) {
                void 0 === c && (c = null), b.call(this), this.dataFormat = a.URLLoaderDataFormat.TEXT, this._request = this.data = null, this._status = -1, c && this.load(c)
            }
            return __extends(c, b), c.prototype.load = function(b) {
                this._request = b, this.data = null, a.MainContext.instance.netContext.proceed(this)
            }, c.prototype.__recycle = function() {
                this.data = this._request = null
            }, c
        }(a.EventDispatcher);
        a.URLLoader = b, b.prototype.__class__ = "egret.URLLoader"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0, this._bitmapData = null
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "textureWidth", {
                get: function() {
                    return this._textureWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "textureHeight", {
                get: function() {
                    return this._textureHeight
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "bitmapData", {
                get: function() {
                    return this._bitmapData
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setBitmapData = function(b) {
                var c = a.MainContext.instance.rendererContext._texture_scale_factor;
                this._bitmapData = b, this._sourceWidth = b.width, this._sourceHeight = b.height, this._textureWidth = this._sourceWidth * c, this._textureHeight = this._sourceHeight * c, this._bitmapWidth = this._textureWidth, this._bitmapHeight = this._textureHeight, this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
            }, c.prototype.getPixel32 = function(a, b) {
                return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
            }, c
        }(a.HashObject);
        a.Texture = b, b.prototype.__class__ = "egret.Texture"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this)
            }
            return __extends(c, b), c.prototype.init = function() {
                this._bitmapData = document.createElement("canvas"), this.renderContext = a.RendererContext.createRendererContext(this._bitmapData)
            }, c.prototype.drawToTexture = function(b, d, e) {
                var g, h, i, j, f = d || b.getBounds(a.Rectangle.identity);
                if (0 == f.width || 0 == f.height) return !1;
                if (this._bitmapData || this.init(), g = f.x, h = f.y, d = f.width, f = f.height, i = a.MainContext.instance.rendererContext._texture_scale_factor, f /= i, d = Math.round(d / i), f = Math.round(f), this.setSize(d, f), this.begin(), b._worldTransform.identity(), b._worldTransform.a = 1 / i, b._worldTransform.d = 1 / i, e && (b._worldTransform.a *= e, b._worldTransform.d *= e), e = b._anchorOffsetX, j = b._anchorOffsetY, (0 != b._anchorX || 0 != b._anchorY) && (e = b._anchorX * d, j = b._anchorY * f), this._offsetX = g + e, this._offsetY = h + j, b._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY), b.worldAlpha = 1, b instanceof a.DisplayObjectContainer)
                    for (g = b._children, h = 0, e = g.length; e > h; h++) g[h]._updateTransform();
                return this.renderContext.setTransform(b._worldTransform), g = a.RenderFilter.getInstance(), h = g._drawAreaList.concat(), g._drawAreaList.length = 0, this.renderContext.clearScreen(), this.renderContext.onRenderStart(), a.RendererContext.deleteTexture(this), b._filter && this.renderContext.setGlobalFilter(b._filter), b._colorTransform && this.renderContext.setGlobalColorTransform(b._colorTransform.matrix), (e = b.mask || b._scrollRect) && this.renderContext.pushMask(e), j = a.MainContext.__use_new_draw, a.MainContext.__use_new_draw = !1, b._render(this.renderContext), a.MainContext.__use_new_draw = j, e && this.renderContext.popMask(), b._colorTransform && this.renderContext.setGlobalColorTransform(null), b._filter && this.renderContext.setGlobalFilter(null), c.identityRectangle.width = d, c.identityRectangle.height = f, g.addDrawArea(c.identityRectangle), this.renderContext.onRenderFinish(), g._drawAreaList = h, this._sourceWidth = d, this._sourceHeight = f, this._textureWidth = this._sourceWidth * i, this._textureHeight = this._sourceHeight * i, this.end(), !0
            }, c.prototype.setSize = function(a, b) {
                var c = this._bitmapData;
                c.width = a, c.height = b, c.style.width = a + "px", c.style.height = b + "px", this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = b)
            }, c.prototype.begin = function() {}, c.prototype.end = function() {}, c.prototype.dispose = function() {
                this._bitmapData && (this.renderContext = this._bitmapData = null)
            }, c.identityRectangle = new a.Rectangle, c
        }(a.Texture);
        a.RenderTexture = b, b.prototype.__class__ = "egret.RenderTexture"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.renderCost = 0, this._texture_scale_factor = 1, this.profiler = a.Profiler.getInstance(), c.blendModesForGL || c.initBlendMode()
            }
            return __extends(c, b), Object.defineProperty(c.prototype, "texture_scale_factor", {
                get: function() {
                    return this._texture_scale_factor
                },
                set: function(a) {
                    this._setTextureScaleFactor(a)
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._setTextureScaleFactor = function(a) {
                this._texture_scale_factor = a
            }, c.prototype.clearScreen = function() {}, c.prototype.clearRect = function() {}, c.prototype.drawImage = function() {
                this.profiler.onDrawImage()
            }, c.prototype.drawImageScale9 = function() {
                return !1
            }, c.prototype._addOneDraw = function() {
                this.profiler.onDrawImage()
            }, c.prototype.setTransform = function() {}, c.prototype.setAlpha = function() {}, c.prototype.setupFont = function() {}, c.prototype.measureText = function() {
                return 0
            }, c.prototype.drawText = function() {
                this.profiler.onDrawImage()
            }, c.prototype.strokeRect = function() {}, c.prototype.pushMask = function() {}, c.prototype.popMask = function() {}, c.prototype.onRenderStart = function() {}, c.prototype.onRenderFinish = function() {}, c.prototype.setGlobalColorTransform = function() {}, c.prototype.setGlobalFilter = function() {}, c.createRendererContext = function() {
                return null
            }, c.deleteTexture = function(b) {
                var d, e, c = a.MainContext.instance.rendererContext.gl;
                if (b = b._bitmapData) {
                    if (d = b.webGLTexture, d && c)
                        for (e in d) c.deleteTexture(d[e]);
                    b.webGLTexture = null
                }
            }, c.initBlendMode = function() {
                c.blendModesForGL = {}, c.blendModesForGL[a.BlendMode.NORMAL] = [1, 771], c.blendModesForGL[a.BlendMode.ADD] = [770, 1], c.blendModesForGL[a.BlendMode.ERASE] = [0, 770]
            }, c.registerBlendModeForGL = function(b, d, e, f) {
                c.blendModesForGL[b] && !f ? a.Logger.warningWithErrorId(1005, b) : c.blendModesForGL[b] = [d, e]
            }, c.imageSmoothingEnabled = !0, c.blendModesForGL = null, c
        }(a.HashObject);
        a.RendererContext = b, b.prototype.__class__ = "egret.RendererContext"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.MOUSE = "mouse", a.TOUCH = "touch", a.mode = "touch", a
        }();
        a.InteractionMode = b, b.prototype.__class__ = "egret.InteractionMode"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._currentTouchTarget = {}, this.maxTouches = 2, this.touchDownTarget = {}, this.touchingIdentifiers = [], this.lastTouchY = this.lastTouchX = -1
            }
            return __extends(c, b), c.prototype.run = function() {}, c.prototype.getTouchData = function(a, b, c) {
                var d = this._currentTouchTarget[a];
                return null == d && (d = {}, this._currentTouchTarget[a] = d), d.stageX = b, d.stageY = c, d.identifier = a, d
            }, c.prototype.dispatchEvent = function(b, c) {
                a.TouchEvent.dispatchTouchEvent(c.target, b, c.identifier, c.stageX, c.stageY, !1, !1, !1, 1 == this.touchDownTarget[c.identifier])
            }, c.prototype.onTouchBegan = function(b, c, d) {
                if (this.touchingIdentifiers.length != this.maxTouches) {
                    var e = a.MainContext.instance.stage.hitTest(b, c);
                    e && (b = this.getTouchData(d, b, c), this.touchDownTarget[d] = !0, b.target = e, b.beginTarget = e, this.dispatchEvent(a.TouchEvent.TOUCH_BEGIN, b)), this.touchingIdentifiers.push(d)
                }
            }, c.prototype.onTouchMove = function(b, c, d) {
                if (-1 != this.touchingIdentifiers.indexOf(d) && (b != this.lastTouchX || c != this.lastTouchY)) {
                    this.lastTouchX = b, this.lastTouchY = c;
                    var e = a.MainContext.instance.stage.hitTest(b, c);
                    e && (b = this.getTouchData(d, b, c), b.target = e, this.dispatchEvent(a.TouchEvent.TOUCH_MOVE, b))
                }
            }, c.prototype.onTouchEnd = function(b, c, d) {
                var e = this.touchingIdentifiers.indexOf(d); - 1 != e && (this.touchingIdentifiers.splice(e, 1), e = a.MainContext.instance.stage.hitTest(b, c)) && (b = this.getTouchData(d, b, c), delete this.touchDownTarget[d], d = b.beginTarget, b.target = e, this.dispatchEvent(a.TouchEvent.TOUCH_END, b), d == e ? this.dispatchEvent(a.TouchEvent.TOUCH_TAP, b) : b.beginTarget && (b.target = b.beginTarget, this.dispatchEvent(a.TouchEvent.TOUCH_RELEASE_OUTSIDE, b)), delete this._currentTouchTarget[b.identifier])
            }, c
        }(a.HashObject);
        a.TouchContext = b, b.prototype.__class__ = "egret.TouchContext"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this)
            }
            return __extends(c, b), c.prototype.proceed = function() {}, c._getUrl = function(b) {
                var c = b.url;
                return -1 == c.indexOf("?") && b.method == a.URLRequestMethod.GET && b.data && b.data instanceof a.URLVariables && (c = c + "?" + b.data.toString()), c
            }, c.prototype.getChangeList = function() {
                return []
            }, c
        }(a.HashObject);
        a.NetContext = b, b.prototype.__class__ = "egret.NetContext"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this.frameRate = 60
            }
            return __extends(b, a), b.prototype.executeMainLoop = function() {}, b
        }(a.HashObject);
        a.DeviceContext = b, b.prototype.__class__ = "egret.DeviceContext"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.call = function() {}, a.addCallback = function() {}, a
        }();
        a.ExternalInterface = b, b.prototype.__class__ = "egret.ExternalInterface"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.trans = null, this.ua = navigator.userAgent.toLowerCase(), this.trans = this._getTrans()
            }
            return __extends(c, b), c.getInstance = function() {
                return null == c.instance && (c.instance = new c), c.instance
            }, Object.defineProperty(c.prototype, "isMobile", {
                get: function() {
                    return a.Logger.warningWithErrorId(1e3), a.MainContext.deviceType == a.MainContext.DEVICE_MOBILE
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype._getHeader = function(a) {
                if ("transform" in a) return "";
                for (var b = ["webkit", "ms", "Moz", "O"], c = 0; c < b.length; c++)
                    if (b[c] + "Transform" in a) return b[c];
                return ""
            }, c.prototype._getTrans = function() {
                var a = document.createElement("div").style,
                    a = this._getHeader(a);
                return "" == a ? "transform" : a + "Transform"
            }, c.prototype.$new = function(a) {
                return this.$(document.createElement(a))
            }, c.prototype.$ = function(b) {
                var d = document;
                return (b = b instanceof HTMLElement ? b : d.querySelector(b)) && (b.find = b.find || this.$, b.hasClass = b.hasClass || function(a) {
                    return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
                }, b.addClass = b.addClass || function(a) {
                    return this.hasClass(a) || (this.className && (this.className += " "), this.className += a), this
                }, b.removeClass = b.removeClass || function(a) {
                    return this.hasClass(a) && (this.className = this.className.replace(a, "")), this
                }, b.remove = b.remove || function() {}, b.appendTo = b.appendTo || function(a) {
                    return a.appendChild(this), this
                }, b.prependTo = b.prependTo || function(a) {
                    return a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this), this
                }, b.transforms = b.transforms || function() {
                    return this.style[c.getInstance().trans] = c.getInstance().translate(this.position) + c.getInstance().rotate(this.rotation) + c.getInstance().scale(this.scale) + c.getInstance().skew(this.skew), this
                }, b.position = b.position || {
                    x: 0,
                    y: 0
                }, b.rotation = b.rotation || 0, b.scale = b.scale || {
                    x: 1,
                    y: 1
                }, b.skew = b.skew || {
                    x: 0,
                    y: 0
                }, b.translates = function(b, c) {
                    return this.position.x = b, this.position.y = c - a.MainContext.instance.stage.stageHeight, this.transforms(), this
                }, b.rotate = function(a) {
                    return this.rotation = a, this.transforms(), this
                }, b.resize = function(a, b) {
                    return this.scale.x = a, this.scale.y = b, this.transforms(), this
                }, b.setSkew = function(a, b) {
                    return this.skew.x = a, this.skew.y = b, this.transforms(), this
                }), b
            }, c.prototype.translate = function(a) {
                return "translate(" + a.x + "px, " + a.y + "px) "
            }, c.prototype.rotate = function(a) {
                return "rotate(" + a + "deg) "
            }, c.prototype.scale = function(a) {
                return "scale(" + a.x + ", " + a.y + ") "
            }, c.prototype.skew = function(a) {
                return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
            }, c
        }(a.HashObject);
        a.Browser = b, b.prototype.__class__ = "egret.Browser"
    }(egret || (egret = {})),
    function(a) {
        ! function(a) {
            a.getItem = function() {
                return null
            }, a.setItem = function() {
                return !1
            }, a.removeItem = function() {}, a.clear = function() {}
        }(a.localStorage || (a.localStorage = {}))
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b() {}
            return b.parse = function(c) {
                var d, e, f, g;
                if (c = a.SAXParser.getInstance().parserXML(c), !c || !c.childNodes) return null;
                for (d = c.childNodes.length, e = !1, f = 0; d > f; f++)
                    if (g = c.childNodes[f], 1 == g.nodeType) {
                        e = !0;
                        break
                    }
                return e ? b.parseNode(g) : null
            }, b.parseNode = function(a) {
                var c, d, e, f, g, h;
                if (!a || 1 != a.nodeType) return null;
                for (c = {}, c.localName = a.localName, c.name = a.nodeName, a.namespaceURI && (c.namespace = a.namespaceURI), a.prefix && (c.prefix = a.prefix), d = a.attributes, e = d.length, f = 0; e > f; f++) g = d[f], h = g.name, 0 != h.indexOf("xmlns:") && (c["$" + h] = g.value);
                for (d = a.childNodes, e = d.length, f = 0; e > f; f++)(g = b.parseNode(d[f])) && (c.children || (c.children = []), g.parent = c, c.children.push(g));
                return !c.children && (a = a.textContent.trim()) && (c.text = a), c
            }, b.findChildren = function(a, c, d) {
                return d ? d.length = 0 : d = [], b.findByPath(a, c, d), d
            }, b.findByPath = function(a, c, d) {
                var e, g, h, i, f = c.indexOf(".");
                if (-1 == f ? (e = c, f = !0) : (e = c.substring(0, f), c = c.substring(f + 1), f = !1), a = a.children)
                    for (g = a.length, h = 0; g > h; h++) i = a[h], i.localName == e && (f ? d.push(i) : b.findByPath(i, c, d))
            }, b.getAttributes = function(a, b) {
                b ? b.length = 0 : b = [];
                for (var c in a) "$" == c.charAt(0) && b.push(c.substring(1));
                return b
            }, b
        }();
        a.XML = b, b.prototype.__class__ = "egret.XML"
    }(egret || (egret = {})),
    function(a) {
        var c, b = function() {
            function a() {}
            return a.LITTLE_ENDIAN = "LITTLE_ENDIAN", a.BIG_ENDIAN = "BIG_ENDIAN", a
        }();
        a.Endian = b, b.prototype.__class__ = "egret.Endian", c = function() {
            function c(a) {
                this.BUFFER_EXT_SIZE = 0, this.EOF_code_point = this.EOF_byte = -1, this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE)), this.endian = b.BIG_ENDIAN
            }
            return c.prototype._setArrayBuffer = function(a) {
                this.write_position = a.byteLength, this.data = new DataView(a), this._position = 0
            }, c.prototype.setArrayBuffer = function() {}, Object.defineProperty(c.prototype, "buffer", {
                get: function() {
                    return this.data.buffer
                },
                set: function(a) {
                    this.data = new DataView(a)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "dataView", {
                get: function() {
                    return this.data
                },
                set: function(a) {
                    this.data = a, this.write_position = a.byteLength
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "bufferOffset", {
                get: function() {
                    return this.data.byteOffset
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "position", {
                get: function() {
                    return this._position
                },
                set: function(a) {
                    this._position < a && !this.validate(a - this._position) || (this._position = a, this.write_position = a > this.write_position ? a : this.write_position)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "length", {
                get: function() {
                    return this.write_position
                },
                set: function(a) {
                    this.validateBuffer(a)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(c.prototype, "bytesAvailable", {
                get: function() {
                    return this.data.byteLength - this._position
                },
                enumerable: !0,
                configurable: !0
            }), c.prototype.clear = function() {
                this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
            }, c.prototype.readBoolean = function() {
                return this.validate(c.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
            }, c.prototype.readByte = function() {
                return this.validate(c.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
            }, c.prototype.readBytes = function(a, b, d) {
                if (void 0 === b && (b = 0), void 0 === d && (d = 0), 0 == d) d = this.bytesAvailable;
                else if (!this.validate(d)) return null;
                a ? a.validateBuffer(d) : a = new c(new ArrayBuffer(d));
                for (var e = 0; d > e; e++) a.data.setUint8(e + b, this.data.getUint8(this.position++))
            }, c.prototype.readDouble = function() {
                if (!this.validate(c.SIZE_OF_FLOAT64)) return null;
                var a = this.data.getFloat64(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_FLOAT64, a
            }, c.prototype.readFloat = function() {
                if (!this.validate(c.SIZE_OF_FLOAT32)) return null;
                var a = this.data.getFloat32(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_FLOAT32, a
            }, c.prototype.readInt = function() {
                if (!this.validate(c.SIZE_OF_INT32)) return null;
                var a = this.data.getInt32(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_INT32, a
            }, c.prototype.readMultiByte = function(a) {
                return this.validate(a) ? "" : null
            }, c.prototype.readShort = function() {
                if (!this.validate(c.SIZE_OF_INT16)) return null;
                var a = this.data.getInt16(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_INT16, a
            }, c.prototype.readUnsignedByte = function() {
                return this.validate(c.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
            }, c.prototype.readUnsignedInt = function() {
                if (!this.validate(c.SIZE_OF_UINT32)) return null;
                var a = this.data.getUint32(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_UINT32, a
            }, c.prototype.readUnsignedShort = function() {
                if (!this.validate(c.SIZE_OF_UINT16)) return null;
                var a = this.data.getUint16(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_UINT16, a
            }, c.prototype.readUTF = function() {
                if (!this.validate(c.SIZE_OF_UINT16)) return null;
                var a = this.data.getUint16(this.position, this.endian == b.LITTLE_ENDIAN);
                return this.position += c.SIZE_OF_UINT16, a > 0 ? this.readUTFBytes(a) : ""
            }, c.prototype.readUTFBytes = function(a) {
                if (!this.validate(a)) return null;
                var b = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
                return this.position += a, this.decodeUTF8(b)
            }, c.prototype.writeBoolean = function(a) {
                this.validateBuffer(c.SIZE_OF_BOOLEAN), this.data.setUint8(this.position++, a ? 1 : 0)
            }, c.prototype.writeByte = function(a) {
                this.validateBuffer(c.SIZE_OF_INT8), this.data.setInt8(this.position++, a)
            }, c.prototype.writeBytes = function(a, b, c) {
                if (void 0 === b && (b = 0), void 0 === c && (c = 0), !(0 > b || 0 > c) && (c = 0 == c ? a.length - b : Math.min(a.length - b, c), c > 0)) {
                    this.validateBuffer(c), a = new DataView(a.buffer);
                    for (var d = b; c + b > d; d++) this.data.setUint8(this.position++, a.getUint8(d))
                }
            }, c.prototype.writeDouble = function(a) {
                this.validateBuffer(c.SIZE_OF_FLOAT64), this.data.setFloat64(this.position, a, this.endian == b.LITTLE_ENDIAN), this.position += c.SIZE_OF_FLOAT64
            }, c.prototype.writeFloat = function(a) {
                this.validateBuffer(c.SIZE_OF_FLOAT32), this.data.setFloat32(this.position, a, this.endian == b.LITTLE_ENDIAN), this.position += c.SIZE_OF_FLOAT32
            }, c.prototype.writeInt = function(a) {
                this.validateBuffer(c.SIZE_OF_INT32), this.data.setInt32(this.position, a, this.endian == b.LITTLE_ENDIAN), this.position += c.SIZE_OF_INT32
            }, c.prototype.writeShort = function(a) {
                this.validateBuffer(c.SIZE_OF_INT16), this.data.setInt16(this.position, a, this.endian == b.LITTLE_ENDIAN), this.position += c.SIZE_OF_INT16
            }, c.prototype.writeUnsignedInt = function(a) {
                this.validateBuffer(c.SIZE_OF_UINT32), this.data.setUint32(this.position, a, this.endian == b.LITTLE_ENDIAN), this.position += c.SIZE_OF_UINT32
            }, c.prototype.writeUTF = function(a) {
                a = this.encodeUTF8(a);
                var d = a.length;
                this.validateBuffer(c.SIZE_OF_UINT16 + d), this.data.setUint16(this.position, d, this.endian === b.LITTLE_ENDIAN), this.position += c.SIZE_OF_UINT16, this._writeUint8Array(a, !1)
            }, c.prototype.writeUTFBytes = function(a) {
                this._writeUint8Array(this.encodeUTF8(a))
            }, c.prototype.toString = function() {
                return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
            }, c.prototype._writeUint8Array = function(a, b) {
                void 0 === b && (b = !0), b && this.validateBuffer(this.position + a.length);
                for (var c = 0; c < a.length; c++) this.data.setUint8(this.position++, a[c])
            }, c.prototype.validate = function(b) {
                if (0 < this.data.byteLength && this._position + b <= this.data.byteLength) return !0;
                throw a.getString(1025)
            }, c.prototype.validateBuffer = function(a) {
                this.write_position = a > this.write_position ? a : this.write_position, a += this._position, this.data.byteLength < a && (a = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)), a.set(new Uint8Array(this.data.buffer)), this.buffer = a.buffer)
            }, c.prototype.encodeUTF8 = function(a) {
                var c, d, e, f, g, b = 0;
                for (a = this.stringToCodePoints(a), c = []; a.length > b;)
                    if (d = a[b++], this.inRange(d, 55296, 57343)) this.encoderError(d);
                    else if (this.inRange(d, 0, 127)) c.push(d);
                else
                    for (this.inRange(d, 128, 2047) ? (e = 1, f = 192) : this.inRange(d, 2048, 65535) ? (e = 2, f = 224) : this.inRange(d, 65536, 1114111) && (e = 3, f = 240), c.push(this.div(d, Math.pow(64, e)) + f); e > 0;) g = this.div(d, Math.pow(64, e - 1)), c.push(128 + g % 64), e -= 1;
                return new Uint8Array(c)
            }, c.prototype.decodeUTF8 = function(a) {
                var b, c, d, e, f, g, h, i, j;
                for (c = 0, d = "", e = 0, f = 0, g = 0, h = 0; a.length > c;) b = a[c++], b === this.EOF_byte ? b = 0 !== f ? this.decoderError(!1) : this.EOF_code_point : 0 === f ? this.inRange(b, 0, 127) || (this.inRange(b, 194, 223) ? (f = 1, h = 128, e = b - 192) : this.inRange(b, 224, 239) ? (f = 2, h = 2048, e = b - 224) : this.inRange(b, 240, 244) ? (f = 3, h = 65536, e = b - 240) : this.decoderError(!1), e *= Math.pow(64, f), b = null) : this.inRange(b, 128, 191) ? (g += 1, e += (b - 128) * Math.pow(64, f - g), g !== f ? b = null : (i = e, j = h, h = g = f = e = 0, b = this.inRange(i, j, 1114111) && !this.inRange(i, 55296, 57343) ? i : this.decoderError(!1, b))) : (h = g = f = e = 0, c--, b = this.decoderError(!1, b)), null !== b && b !== this.EOF_code_point && (65535 >= b ? b > 0 && (d += String.fromCharCode(b)) : (b -= 65536, d += String.fromCharCode(55296 + (1023 & b >> 10)), d += String.fromCharCode(56320 + (1023 & b))));
                return d
            }, c.prototype.encoderError = function(b) {
                throw a.getString(1026, b)
            }, c.prototype.decoderError = function(b, c) {
                if (b) throw a.getString(1027);
                return c || 65533
            }, c.prototype.inRange = function(a, b, c) {
                return a >= b && c >= a
            }, c.prototype.div = function(a, b) {
                return Math.floor(a / b)
            }, c.prototype.stringToCodePoints = function(a) {
                var b, c, d, e, f;
                for (b = [], c = 0, d = a.length; c < a.length;) e = a.charCodeAt(c), this.inRange(e, 55296, 57343) ? this.inRange(e, 56320, 57343) ? b.push(65533) : c === d - 1 ? b.push(65533) : (f = a.charCodeAt(c + 1), this.inRange(f, 56320, 57343) ? (e &= 1023, f &= 1023, c += 1, b.push(65536 + (e << 10) + f)) : b.push(65533)) : b.push(e), c += 1;
                return b
            }, c.SIZE_OF_BOOLEAN = 1, c.SIZE_OF_INT8 = 1, c.SIZE_OF_INT16 = 2, c.SIZE_OF_INT32 = 4, c.SIZE_OF_UINT8 = 1, c.SIZE_OF_UINT16 = 2, c.SIZE_OF_UINT32 = 4, c.SIZE_OF_FLOAT32 = 4, c.SIZE_OF_FLOAT64 = 8, c
        }(), a.ByteArray = c, c.prototype.__class__ = "egret.ByteArray"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c, d) {
                b.call(this), this._target = null, this.loop = this.ignoreGlobalPause = this._useTicks = !1, this._actions = this._steps = this.pluginData = null, this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = null, this._stepPosition = this._prevPosition = 0, this.passive = !1, this.initialize(a, c, d)
            }
            return __extends(c, b), c.get = function(a, b, d, e) {
                return void 0 === b && (b = null), void 0 === d && (d = null), void 0 === e && (e = !1), e && c.removeTweens(a), new c(a, b, d)
            }, c.removeTweens = function(a) {
                if (a.tween_count) {
                    for (var b = c._tweens, d = b.length - 1; d >= 0; d--) b[d]._target == a && (b[d].paused = !0, b.splice(d, 1));
                    a.tween_count = 0
                }
            }, c.pauseTweens = function(b) {
                if (b.tween_count)
                    for (var c = a.Tween._tweens, d = c.length - 1; d >= 0; d--) c[d]._target == b && (c[d].paused = !0)
            }, c.resumeTweens = function(b) {
                if (b.tween_count)
                    for (var c = a.Tween._tweens, d = c.length - 1; d >= 0; d--) c[d]._target == b && (c[d].paused = !1)
            }, c.tick = function(a, b) {
                var d, e, f;
                for (void 0 === b && (b = !1), d = c._tweens.concat(), e = d.length - 1; e >= 0; e--) f = d[e], b && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : a)
            }, c._register = function(b, d) {
                var e = b._target,
                    f = c._tweens;
                if (d) e && (e.tween_count = 0 < e.tween_count ? e.tween_count + 1 : 1), f.push(b), c._inited || (a.Ticker.getInstance().register(c.tick, null), c._inited = !0);
                else
                    for (e && e.tween_count--, e = f.length; e--;)
                        if (f[e] == b) {
                            f.splice(e, 1);
                            break
                        }
            }, c.removeAllTweens = function() {
                var a, b, d, e;
                for (a = c._tweens, b = 0, d = a.length; d > b; b++) e = a[b], e.paused = !0, e._target.tweenjs_count = 0;
                a.length = 0
            }, c.prototype.initialize = function(a, b, d) {
                this._target = a, b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && c.removeTweens(a)), this.pluginData = d || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], b && b.paused ? this.paused = !0 : c._register(this, !0), b && null != b.position && this.setPosition(b.position, c.NONE)
            }, c.prototype.setPosition = function(a, b) {
                var c, d, e, f, g;
                if (void 0 === b && (b = 1), 0 > a && (a = 0), c = a, d = !1, c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0)), c == this._prevPos) return d;
                if (e = this._prevPos, this.position = this._prevPos = c, this._prevPosition = a, this._target)
                    if (d) this._updateTargetProps(null, 1);
                    else if (0 < this._steps.length) {
                    for (f = 0, g = this._steps.length; g > f && !(this._steps[f].t > c); f++);
                    f = this._steps[f - 1], this._updateTargetProps(f, (this._stepPosition = c - f.t) / f.d)
                }
                return 0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && e > c ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c)), d && this.setPaused(!0), this.dispatchEventWith("change"), d
            }, c.prototype._runActions = function(a, b, c) {
                var d, e, f, g, h, i;
                for (void 0 === c && (c = !1), d = a, e = b, f = -1, g = this._actions.length, h = 1, a > b && (d = b, e = a, f = g, g = h = -1);
                    (f += h) != g;) b = this._actions[f], i = b.t, (i == e || i > d && e > i || c && i == a) && b.f.apply(b.o, b.p)
            }, c.prototype._updateTargetProps = function(a, b) {
                var d, e, f, g, h, i, j, k, l;
                if (a || 1 != b) {
                    if (this.passive = !!a.v) return;
                    a.e && (b = a.e(b, 0, 1, 1)), d = a.p0, e = a.p1
                } else this.passive = !1, d = e = this._curQueueProps;
                for (h in this._initQueueProps) {
                    if (null == (f = d[h]) && (d[h] = f = this._initQueueProps[h]), null == (g = e[h]) && (e[h] = g = f), f = f == g || 0 == b || 1 == b || "number" != typeof f ? 1 == b ? g : f : f + (g - f) * b, i = !1, g = c._plugins[h])
                        for (j = 0, k = g.length; k > j; j++) l = g[j].tween(this, h, f, d, e, b, !!a && d == e, !a), l == c.IGNORE ? i = !0 : f = l;
                    i || (this._target[h] = f)
                }
            }, c.prototype.setPaused = function(a) {
                return this.paused = a, c._register(this, !a), this
            }, c.prototype._cloneProps = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            }, c.prototype._addStep = function(a) {
                return 0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
            }, c.prototype._appendQueueProps = function(a) {
                var b, d, e, f, g, h;
                for (h in a)
                    if (void 0 === this._initQueueProps[h]) {
                        if (d = this._target[h], b = c._plugins[h])
                            for (e = 0, f = b.length; f > e; e++) d = b[e].init(this, h, d);
                        this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
                    }
                for (h in a) {
                    if (d = this._curQueueProps[h], b = c._plugins[h])
                        for (g = g || {}, e = 0, f = b.length; f > e; e++) b[e].step && b[e].step(this, h, d, a[h], g);
                    this._curQueueProps[h] = a[h]
                }
                return g && this._appendQueueProps(g), this._curQueueProps
            }, c.prototype._addAction = function(a) {
                return a.t = this.duration, this._actions.push(a), this
            }, c.prototype._set = function(a, b) {
                for (var c in a) b[c] = a[c]
            }, c.prototype.wait = function(a, b) {
                if (null == a || 0 >= a) return this;
                var c = this._cloneProps(this._curQueueProps);
                return this._addStep({
                    d: a,
                    p0: c,
                    p1: c,
                    v: b
                })
            }, c.prototype.to = function(a, b, c) {
                return void 0 === c && (c = void 0), (isNaN(b) || 0 > b) && (b = 0), this._addStep({
                    d: b || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: c,
                    p1: this._cloneProps(this._appendQueueProps(a))
                })
            }, c.prototype.call = function(a, b, c) {
                return void 0 === b && (b = void 0), void 0 === c && (c = void 0), this._addAction({
                    f: a,
                    p: c ? c : [],
                    o: b ? b : this._target
                })
            }, c.prototype.set = function(a, b) {
                return void 0 === b && (b = null), this._addAction({
                    f: this._set,
                    o: this,
                    p: [a, b ? b : this._target]
                })
            }, c.prototype.play = function(a) {
                return a || (a = this), this.call(a.setPaused, a, [!1])
            }, c.prototype.pause = function(a) {
                return a || (a = this), this.call(a.setPaused, a, [!0])
            }, c.prototype.tick = function(a) {
                this.paused || this.setPosition(this._prevPosition + a)
            }, c.NONE = 0, c.LOOP = 1, c.REVERSE = 2, c._tweens = [], c.IGNORE = {}, c._plugins = {}, c._inited = !1, c
        }(a.EventDispatcher);
        a.Tween = b, b.prototype.__class__ = "egret.Tween"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b() {
                a.Logger.fatalWithErrorId(1014)
            }
            return b.get = function(a) {
                return -1 > a && (a = -1), a > 1 && (a = 1),
                    function(b) {
                        return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                    }
            }, b.getPowIn = function(a) {
                return function(b) {
                    return Math.pow(b, a)
                }
            }, b.getPowOut = function(a) {
                return function(b) {
                    return 1 - Math.pow(1 - b, a)
                }
            }, b.getPowInOut = function(a) {
                return function(b) {
                    return 1 > (b *= 2) ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
                }
            }, b.sineIn = function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, b.sineOut = function(a) {
                return Math.sin(a * Math.PI / 2)
            }, b.sineInOut = function(a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            }, b.getBackIn = function(a) {
                return function(b) {
                    return b * b * ((a + 1) * b - a)
                }
            }, b.getBackOut = function(a) {
                return function(b) {
                    return --b * b * ((a + 1) * b + a) + 1
                }
            }, b.getBackInOut = function(a) {
                return a *= 1.525,
                    function(b) {
                        return 1 > (b *= 2) ? .5 * b * b * ((a + 1) * b - a) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                    }
            }, b.circIn = function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }, b.circOut = function(a) {
                return Math.sqrt(1 - --a * a)
            }, b.circInOut = function(a) {
                return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }, b.bounceIn = function(a) {
                return 1 - b.bounceOut(1 - a)
            }, b.bounceOut = function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }, b.bounceInOut = function(a) {
                return .5 > a ? .5 * b.bounceIn(2 * a) : .5 * b.bounceOut(2 * a - 1) + .5
            }, b.getElasticIn = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
                }
            }, b.getElasticOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
                }
            }, b.getElasticInOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    var e = b / c * Math.asin(1 / a);
                    return 1 > (d *= 2) ? -.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b) : .5 * a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) + 1
                }
            }, b.quadIn = b.getPowIn(2), b.quadOut = b.getPowOut(2), b.quadInOut = b.getPowInOut(2), b.cubicIn = b.getPowIn(3), b.cubicOut = b.getPowOut(3), b.cubicInOut = b.getPowInOut(3), b.quartIn = b.getPowIn(4), b.quartOut = b.getPowOut(4), b.quartInOut = b.getPowInOut(4), b.quintIn = b.getPowIn(5), b.quintOut = b.getPowOut(5), b.quintInOut = b.getPowInOut(5), b.backIn = b.getBackIn(1.7), b.backOut = b.getBackOut(1.7), b.backInOut = b.getBackInOut(1.7), b.elasticIn = b.getElasticIn(1, .3), b.elasticOut = b.getElasticOut(1, .3), b.elasticInOut = b.getElasticInOut(1, .3 * 1.5), b
        }();
        a.Ease = b, b.prototype.__class__ = "egret.Ease"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {
                this.path = "", this.audio = null, this.type = a.EFFECT
            }
            return a.prototype.play = function(a) {
                void 0 === a && (a = !1);
                var b = this.audio;
                b && (isNaN(b.duration) || (b.currentTime = 0), b.loop = a, b.play())
            }, a.prototype.pause = function() {
                var a = this.audio;
                a && a.pause()
            }, a.prototype.load = function() {
                var a = this.audio;
                a && a.load()
            }, a.prototype.addEventListener = function(a, b) {
                this.audio && this.audio.addEventListener(a, b, !1)
            }, a.prototype.removeEventListener = function(a, b) {
                this.audio && this.audio.removeEventListener(a, b, !1)
            }, a.prototype.setVolume = function(a) {
                var b = this.audio;
                b && (b.volume = a)
            }, a.prototype.getVolume = function() {
                return this.audio ? this.audio.volume : 0
            }, a.prototype.preload = function(a) {
                this.type = a
            }, a.prototype._setAudio = function(a) {
                this.audio = a
            }, a.MUSIC = "music", a.EFFECT = "effect", a
        }();
        a.Sound = b, b.prototype.__class__ = "egret.Sound"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function a() {}
            return a.isNumber = function(a) {
                return "number" == typeof a && !isNaN(a)
            }, a.sin = function(a) {
                return a = Math.round(a), a %= 360, 0 > a && (a += 360), 90 > a ? egret_sin_map[a] : 180 > a ? egret_cos_map[a - 90] : 270 > a ? -egret_sin_map[a - 180] : -egret_cos_map[a - 270]
            }, a.cos = function(a) {
                return a = Math.round(a), a %= 360, 0 > a && (a += 360), 90 > a ? egret_cos_map[a] : 180 > a ? -egret_sin_map[a - 90] : 270 > a ? -egret_cos_map[a - 180] : egret_sin_map[a - 270]
            }, a
        }();
        a.NumberUtils = b, b.prototype.__class__ = "egret.NumberUtils"
    }(egret || (egret = {}));
for (egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this) throw new TypeError(egret.getString(1029));
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() {
                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    }), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a) {
                void 0 === a && (a = 60), b.call(this), this.frameRate = a, this._time = 0, this._requestAnimationId = 0 / 0, this._isActivate = !0, 60 == a && (c.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, c.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame), c.requestAnimationFrame || (c.requestAnimationFrame = function(b) {
                    return window.setTimeout(b, 1e3 / a)
                }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function(a) {
                    return window.clearTimeout(a)
                }), c.instance = this, this.registerListener()
            }
            return __extends(c, b), c.prototype.enterFrame = function() {
                var b = c.instance,
                    d = c._thisObject,
                    e = c._callback,
                    f = a.getTimer(),
                    g = f - b._time;
                b._requestAnimationId = c.requestAnimationFrame.call(window, c.prototype.enterFrame), e.call(d, g), b._time = f
            }, c.prototype.executeMainLoop = function(a, b) {
                c._callback = a, c._thisObject = b, this.enterFrame()
            }, c.prototype.reset = function() {
                var b = c.instance;
                b._requestAnimationId && (b._time = a.getTimer(), c.cancelAnimationFrame.call(window, b._requestAnimationId), b.enterFrame())
            }, c.prototype.registerListener = function() {
                var g, h, b = this,
                    d = function() {
                        b._isActivate && (b._isActivate = !1, a.MainContext.instance.stage.dispatchEvent(new a.Event(a.Event.DEACTIVATE)))
                    },
                    e = function() {
                        b._isActivate || (b._isActivate = !0, c.instance.reset(), a.MainContext.instance.stage.dispatchEvent(new a.Event(a.Event.ACTIVATE)))
                    },
                    f = function() {
                        document[g] ? d() : e()
                    };
                window.addEventListener("focus", e, !1), window.addEventListener("blur", d, !1), "undefined" != typeof document.hidden ? (g = "hidden", h = "visibilitychange") : "undefined" != typeof document.mozHidden ? (g = "mozHidden", h = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (g = "msHidden", h = "msvisibilitychange") : "undefined" != typeof document.webkitHidden ? (g = "webkitHidden", h = "webkitvisibilitychange") : "undefined" != typeof document.oHidden && (g = "oHidden", h = "ovisibilitychange"), "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", d, !1)), g && h && document.addEventListener(h, f, !1)
            }, c.instance = null, c.requestAnimationFrame = null, c.cancelAnimationFrame = null, c._thisObject = null, c._callback = null, c
        }(a.DeviceContext);
        a.HTML5DeviceContext = b, b.prototype.__class__ = "egret.HTML5DeviceContext"
    }(egret || (egret = {})), ! function(a) {
        a.getItem = function(a) {
            return window.localStorage.getItem(a)
        }, a.setItem = function(a, b) {
            try {
                return window.localStorage.setItem(a, b), !0
            } catch (c) {
                return egret.Logger.infoWithErrorId(1018, a, b), !1
            }
        }, a.removeItem = function(a) {
            window.localStorage.removeItem(a)
        }, a.clear = function() {
            window.localStorage.clear()
        }, a.init = function() {
            for (var b in a) egret.localStorage[b] = a[b]
        }
    }(egret_html5_localStorage || (egret_html5_localStorage = {})), egret_html5_localStorage.init(), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(a, c) {
                void 0 === c && (c = !0), b.call(this), this.useCacheCanvas = c, this.canvas = a || this.createCanvas(), this.canvasContext = this.canvas.getContext("2d"), c ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext, this.onResize();
                var d = this.drawCanvasContext.setTransform,
                    e = this;
                this.drawCanvasContext.setTransform = function(a, b, c, f, g, h) {
                    e._matrixA = a, e._matrixB = b, e._matrixC = c, e._matrixD = f, e._matrixTx = g, e._matrixTy = h, d.call(e.drawCanvasContext, a, b, c, f, g, h)
                }, this._matrixA = 1, this._matrixC = this._matrixB = 0, this._matrixD = 1, this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0, this.initBlendMode()
            }
            return __extends(c, b), c.prototype.createCanvas = function() {
                var c, b = a.Browser.getInstance().$("#egretCanvas");
                return b || (c = document.getElementById(a.StageDelegate.canvas_div_name), b = a.Browser.getInstance().$new("canvas"), b.id = "egretCanvas", c.appendChild(b)), a.MainContext.instance.stage.addEventListener(a.Event.RESIZE, this.onResize, this), b
            }, c.prototype.onResize = function() {
                if (this.canvas) {
                    var b = document.getElementById(a.StageDelegate.canvas_div_name);
                    this.canvas.width = a.MainContext.instance.stage.stageWidth, this.canvas.height = a.MainContext.instance.stage.stageHeight, this.canvas.style.width = b.style.width, this.canvas.style.height = b.style.height, this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height), this.drawCanvasContext.imageSmoothingEnabled = a.RendererContext.imageSmoothingEnabled, this.drawCanvasContext.webkitImageSmoothingEnabled = a.RendererContext.imageSmoothingEnabled, this.drawCanvasContext.mozImageSmoothingEnabled = a.RendererContext.imageSmoothingEnabled, this.drawCanvasContext.msImageSmoothingEnabled = a.RendererContext.imageSmoothingEnabled
                }
            }, c.prototype.clearScreen = function() {
                var b, c, d, e;
                for (b = a.RenderFilter.getInstance().getDrawAreaList(), c = 0, d = b.length; d > c; c++) e = b[c], this.clearRect(e.x, e.y, e.width, e.height);
                b = a.MainContext.instance.stage, this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, b.stageWidth, b.stageHeight), this.renderCost = 0
            }, c.prototype.clearRect = function(a, b, c, d) {
                this.canvasContext.clearRect(a, b, c, d)
            }, c.prototype.drawImage = function(c, d, e, f, g, h, i, j, k, l) {
                var m, n;
                void 0 === l && (l = void 0), m = c._bitmapData, h += this._transformTx, i += this._transformTy, n = a.getTimer(), void 0 === l ? this.drawCanvasContext.drawImage(m, d, e, f, g, h, i, j, k) : this.drawRepeatImage(c, d, e, f, g, h, i, j, k, l), b.prototype.drawImage.call(this, c, d, e, f, g, h, i, j, k, l), this.renderCost += a.getTimer() - n
            }, c.prototype.drawRepeatImage = function(b, c, d, e, f, g, h, i, j, k) {
                if (void 0 === b.pattern) {
                    var l = a.MainContext.instance.rendererContext._texture_scale_factor,
                        m = b._bitmapData,
                        n = m;
                    (m.width != e || m.height != f || 1 != l) && (n = document.createElement("canvas"), n.width = e * l, n.height = f * l, n.getContext("2d").drawImage(m, c, d, e, f, 0, 0, e * l, f * l)), c = this.drawCanvasContext.createPattern(n, k), b.pattern = c
                }
                this.drawCanvasContext.fillStyle = b.pattern, this.drawCanvasContext.translate(g, h), this.drawCanvasContext.fillRect(0, 0, i, j), this.drawCanvasContext.translate(-g, -h)
            }, c.prototype.setTransform = function(a) {
                1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
            }, c.prototype.setAlpha = function(b, c) {
                this.drawCanvasContext.globalAlpha = b, c ? (this.blendValue = this.blendModes[c], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != a.BlendMode.NORMAL && (this.blendValue = this.blendModes[a.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
            }, c.prototype.initBlendMode = function() {
                this.blendModes = {}, this.blendModes[a.BlendMode.NORMAL] = "source-over", this.blendModes[a.BlendMode.ADD] = "lighter", this.blendModes[a.BlendMode.ERASE] = "destination-in"
            }, c.prototype.setupFont = function(a, b) {
                void 0 === b && (b = null), b = b || {};
                var c = null == b.size ? a._size : b.size,
                    d = null == b.fontFamily ? a._fontFamily : b.fontFamily,
                    e = this.drawCanvasContext,
                    f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
                    f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
                e.font = f + (c + "px " + d), e.textAlign = "left", e.textBaseline = "middle"
            }, c.prototype.measureText = function(a) {
                return this.drawCanvasContext.measureText(a).width
            }, c.prototype.drawText = function(c, d, e, f, g, h) {
                var i, j, k, l;
                void 0 === h && (h = null), this.setupFont(c, h), h = h || {}, i = null != h.textColor ? a.toColorString(h.textColor) : c._textColorString, j = null != h.strokeColor ? a.toColorString(h.strokeColor) : c._strokeColorString, k = null != h.stroke ? h.stroke : c._stroke, l = this.drawCanvasContext, l.fillStyle = i, l.strokeStyle = j, k && (l.lineWidth = 2 * k, l.strokeText(d, e + this._transformTx, f + this._transformTy, g || 65535)), l.fillText(d, e + this._transformTx, f + this._transformTy, g || 65535), b.prototype.drawText.call(this, c, d, e, f, g, h)
            }, c.prototype.strokeRect = function(a, b, c, d, e) {
                this.drawCanvasContext.strokeStyle = e, this.drawCanvasContext.strokeRect(a, b, c, d)
            }, c.prototype.pushMask = function(a) {
                this.drawCanvasContext.save(), this.drawCanvasContext.beginPath(), this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height), this.drawCanvasContext.clip(), this.drawCanvasContext.closePath()
            }, c.prototype.popMask = function() {
                this.drawCanvasContext.restore(), this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
            }, c.prototype.onRenderStart = function() {
                this.drawCanvasContext.save()
            }, c.prototype.onRenderFinish = function() {
                var b, c, d, e, f, g, h, i, j;
                if (this.drawCanvasContext.restore(), this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0), this.useCacheCanvas)
                    for (b = this._cacheCanvas.width, c = this._cacheCanvas.height, d = a.RenderFilter.getInstance().getDrawAreaList(), e = 0, f = d.length; f > e; e++) g = d[e], h = g.x, i = g.y, j = g.width, g = g.height, h + j > b && (j = b - h), i + g > c && (g = c - i), j > 0 && g > 0 && this.canvasContext.drawImage(this._cacheCanvas, h, i, j, g, h, i, j, g)
            }, c
        }(a.RendererContext);
        a.HTML5CanvasRenderer = b, b.prototype.__class__ = "egret.HTML5CanvasRenderer"
    }(egret || (egret = {})), ! function(a) {
        a.beginFill = function(a, c) {
            void 0 === c && (c = 1);
            var d = "rgba(" + (a >> 16) + "," + ((65280 & a) >> 8) + "," + (255 & a) + "," + c + ")";
            this.fillStyleColor = d, this._pushCommand(new b(this._setStyle, this, [d]))
        }, a.drawRect = function(a, c, d, e) {
            this._pushCommand(new b(function(a, b, c, d) {
                var e = this.renderContext;
                this.canvasContext.beginPath(), this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d), this.canvasContext.closePath()
            }, this, [a, c, d, e])), this._fill(), this.checkRect(a, c, d, e)
        }, a.drawCircle = function(a, c, d) {
            this._pushCommand(new b(function(a, b, c) {
                var d = this.renderContext;
                this.canvasContext.beginPath(), this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI), this.canvasContext.closePath()
            }, this, [a, c, d])), this._fill(), this.checkRect(a - d, c - d, 2 * d, 2 * d)
        }, a.drawRoundRect = function(a, c, d, e, f, g) {
            this._pushCommand(new b(function(a, b, c, d, e, f) {
                var g = this.renderContext;
                a = g._transformTx + a, b = g._transformTy + b, e /= 2, f = f ? f / 2 : e, c = a + c, d = b + d, g = d - f, this.canvasContext.beginPath(), this.canvasContext.moveTo(c, g), this.canvasContext.quadraticCurveTo(c, d, c - e, d), this.canvasContext.lineTo(a + e, d), this.canvasContext.quadraticCurveTo(a, d, a, d - f), this.canvasContext.lineTo(a, b + f), this.canvasContext.quadraticCurveTo(a, b, a + e, b), this.canvasContext.lineTo(c - e, b), this.canvasContext.quadraticCurveTo(c, b, c, b + f), this.canvasContext.lineTo(c, g), this.canvasContext.closePath()
            }, this, [a, c, d, e, f, g])), this._fill(), this.checkRect(a, c, d, e)
        }, a.drawEllipse = function(a, c, d, e) {
            this._pushCommand(new b(function(a, b, c, d) {
                var f, e = this.renderContext;
                this.canvasContext.save(), a = e._transformTx + a, b = e._transformTy + b, e = c > d ? c : d, f = c / e, d /= e, this.canvasContext.scale(f, d), this.canvasContext.beginPath(), this.canvasContext.moveTo((a + c) / f, b / d), this.canvasContext.arc(a / f, b / d, e, 0, 2 * Math.PI), this.canvasContext.closePath(), this.canvasContext.restore(), this.canvasContext.stroke()
            }, this, [a, c, d, e])), this._fill(), this.checkRect(a - d, c - e, 2 * d, 2 * e)
        }, a.lineStyle = function(a, c, d, e, f, g, h, i) {
            void 0 === a && (a = 0 / 0), void 0 === c && (c = 0), void 0 === d && (d = 1), void 0 === e && (e = !1), void 0 === f && (f = "normal"), void 0 === g && (g = null), void 0 === h && (h = null), void 0 === i && (i = 3), this.strokeStyleColor && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand)), this.strokeStyleColor = c = "rgba(" + (c >> 16) + "," + ((65280 & c) >> 8) + "," + (255 & c) + "," + d + ")", this._pushCommand(new b(function(a, b) {
                this.canvasContext.lineWidth = a, this.canvasContext.strokeStyle = b, this.canvasContext.beginPath()
            }, this, [a, c])), "undefined" == typeof this.lineX && (this.lineY = this.lineX = 0), this.moveTo(this.lineX, this.lineY)
        }, a.lineTo = function(a, c) {
            this._pushCommand(new b(function(a, b) {
                var c = this.renderContext;
                this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
            }, this, [a, c])), this.lineX = a, this.lineY = c, this.checkPoint(a, c)
        }, a.curveTo = function(a, c, d, e) {
            this._pushCommand(new b(function(a, b, c, d) {
                var e = this.renderContext;
                this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + c, e._transformTy + d)
            }, this, [a, c, d, e])), this.lineX = d, this.lineY = e, this.checkPoint(a, c), this.checkPoint(d, e)
        }, a.moveTo = function(a, c) {
            this._pushCommand(new b(function(a, b) {
                var c = this.renderContext;
                this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
            }, this, [a, c])), this.checkPoint(a, c)
        }, a.clear = function() {
            this.lineY = this.lineX = this.commandQueue.length = 0, this.fillStyleColor = this.strokeStyleColor = null, this._dirty = !1, this._maxY = this._maxX = this._minY = this._minX = 0
        }, a.createEndFillCommand = function() {
            this.endFillCommand || (this.endFillCommand = new b(function() {
                this.canvasContext.fill(), this.canvasContext.closePath()
            }, this, null))
        }, a.endFill = function() {
            null != this.fillStyleColor && this._fill()
        }, a._fill = function() {
            this.fillStyleColor && (this.createEndFillCommand(), this._pushCommand(this.endFillCommand), this.fillStyleColor = null)
        }, a.createEndLineCommand = function() {
            this.endLineCommand || (this.endLineCommand = new b(function() {
                this.canvasContext.stroke(), this.canvasContext.closePath()
            }, this, null))
        }, a._pushCommand = function(a) {
            this.commandQueue.push(a), this._dirty = !0
        }, a._draw = function(a) {
            var c, d, b = this.commandQueue.length;
            if (0 != b) {
                for (this.renderContext = a, a = this.canvasContext = this.renderContext.drawCanvasContext, a.save(), this.strokeStyleColor && b > 0 && this.commandQueue[b - 1] != this.endLineCommand && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand), b = this.commandQueue.length), c = 0; b > c; c++) d = this.commandQueue[c], d.method.apply(d.thisObject, d.args);
                a.restore(), this._dirty = !1
            }
        };
        var b = function() {
            return function(a, b, c) {
                this.method = a, this.thisObject = b, this.args = c
            }
        }();
        b.prototype.__class__ = "egret_h5_graphics.Command", a._setStyle = function(a) {
            this.canvasContext.fillStyle = a, this.canvasContext.beginPath()
        }, a.init = function() {
            for (var b in a) egret.Graphics.prototype[b] = a[b];
            egret.RendererContext.createRendererContext = function(a) {
                return new egret.HTML5CanvasRenderer(a, !1)
            }
        }
    }(egret_h5_graphics || (egret_h5_graphics = {})), egret_h5_graphics.init(), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c(c) {
                b.call(this), this.glID = this.gl = this.canvas = null, this.size = 2e3, this.vertices = null, this.vertSize = 5, this.indices = null, this.projectionY = this.projectionX = 0 / 0, this.shaderManager = null, this.contextLost = !1, this.glContextId = 0, this.currentBlendMode = "", this.currentBaseTexture = null, this.currentBatchSize = 0, this.worldTransform = null, this.worldAlpha = 1, this.maskList = [], this.maskDataFreeList = [], this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null, this.graphicsStyle = {}, this.canvas = c || this.createCanvas(), this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1), this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1), this.html5Canvas = document.createElement("canvas"), this.canvasContext = new a.HTML5CanvasRenderer(this.html5Canvas), this.onResize(), this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2, c = 6 * this.size, this.vertices = new Float32Array(4 * this.size * this.vertSize), this.indices = new Uint16Array(c);
                for (var d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3;
                this.initWebGL(), this.shaderManager = new a.WebGLShaderManager(this.gl), this.worldTransform = new a.Matrix, this.initAll()
            }
            return __extends(c, b), c.prototype.onRenderFinish = function() {
                this._draw()
            }, c.prototype.initAll = function() {
                c.isInit || (c.isInit = !0, egret_webgl_graphics.init(), a.TextField.prototype._makeBitmapCache = function() {
                    var b, c, d, e, f, g;
                    return this.renderTexture || (this.renderTexture = new a.RenderTexture), b = this.getBounds(a.Rectangle.identity), 0 == b.width || 0 == b.height ? (this._texture_to_render = null, !1) : (this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.renderContext = a.RendererContext.createRendererContext(this._bitmapData)), c = b.width, b = b.height, d = a.MainContext.instance.rendererContext._texture_scale_factor, b /= d, c = Math.round(c / d), b = Math.round(b), e = this._bitmapData, e.width = c, e.height = b, e.style.width = c + "px", e.style.height = b + "px", this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = c, this.renderContext._cacheCanvas.height = b), this._worldTransform.identity(), this._worldTransform.a = 1 / d, this._worldTransform.d = 1 / d, this.renderContext.setTransform(this._worldTransform), this.worldAlpha = 1, e = a.RenderFilter.getInstance(), f = e._drawAreaList.concat(), e._drawAreaList.length = 0, this.renderContext.clearScreen(), this.renderContext.onRenderStart(), a.RendererContext.deleteTexture(this.renderTexture), this._colorTransform && this.renderContext.setGlobalColorTransform(this._colorTransform.matrix), g = this.mask || this._scrollRect, g && this.renderContext.pushMask(g), this._render(this.renderContext), g && this.renderContext.popMask(), this._colorTransform && this.renderContext.setGlobalColorTransform(null), a.RenderTexture.identityRectangle.width = c, a.RenderTexture.identityRectangle.height = b, e.addDrawArea(a.RenderTexture.identityRectangle), this.renderContext.onRenderFinish(), e._drawAreaList = f, this.renderTexture._bitmapData = this._bitmapData, this.renderTexture._sourceWidth = c, this.renderTexture._sourceHeight = b, this.renderTexture._textureWidth = this.renderTexture._sourceWidth * d, this.renderTexture._textureHeight = this.renderTexture._sourceHeight * d, this._texture_to_render = this.renderTexture, !0)
                }, a.TextField.prototype._draw = function(b) {
                    this.getDirty() && (this._texture_to_render = this.renderTexture, this._cacheAsBitmap = !0), a.DisplayObject.prototype._draw.call(this, b)
                }, a.RenderTexture.prototype.init = function() {
                    this._bitmapData = document.createElement("canvas"), this.canvasContext = this._bitmapData.getContext("2d"), this._webglBitmapData = document.createElement("canvas"), this.renderContext = new a.WebGLRenderer(this._webglBitmapData)
                }, a.RenderTexture.prototype.setSize = function(b, c) {
                    if (this._webglBitmapData) {
                        var d = this._webglBitmapData;
                        d.width = b, d.height = c, d.style.width = b + "px", d.style.height = c + "px", this.renderContext.projectionX = b / 2, this.renderContext.projectionY = -c / 2, this.renderContext.viewportScale = a.MainContext.instance.rendererContext._texture_scale_factor
                    }
                }, a.RenderTexture.prototype.end = function() {}, a.RenderTexture.prototype.drawToTexture = function(b, c, d) {
                    var f, g, h, i, j, k, e = c || b.getBounds(a.Rectangle.identity);
                    if (0 == e.width || 0 == e.height || c && (0 == c.width || 0 == c.height)) return !1;
                    if ("undefined" == typeof d && (d = 1), this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.canvasContext = this._bitmapData.getContext("2d"), a.RenderTexture.WebGLCanvas || (a.RenderTexture.WebGLCanvas = document.createElement("canvas"), a.RenderTexture.WebGLRenderer = new a.WebGLRenderer(a.RenderTexture.WebGLCanvas)), this._webglBitmapData = a.RenderTexture.WebGLCanvas, this.renderContext = a.RenderTexture.WebGLRenderer), f = e.x, g = e.y, c = e.width, e = e.height, e /= d, h = a.MainContext.instance.rendererContext._texture_scale_factor, c = Math.round(c / d), e = Math.round(e), this.setSize(c, e), i = this._bitmapData, j = c / h * d, k = e / h * d, i.width = j, i.height = k, i.style.width = j + "px", i.style.height = k + "px", this.begin(), b._worldTransform.identity(), i = b._anchorOffsetX, j = b._anchorOffsetY, (0 != b._anchorX || 0 != b._anchorY) && (i = b._anchorX * c, j = b._anchorY * e), this._offsetX = f + i, this._offsetY = g + j, b._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY), b.worldAlpha = 1, f = a.MainContext.__use_new_draw, a.MainContext.__use_new_draw = !1, b instanceof a.DisplayObjectContainer)
                        for (g = b._children, i = 0, j = g.length; j > i; i++) g[i]._updateTransform();
                    return this.renderContext.setTransform(b._worldTransform), g = a.RenderFilter.getInstance(), i = g._drawAreaList.concat(), g._drawAreaList.length = 0, j = this.renderContext.gl, j.viewport(0, 0, c, e), j.bindFramebuffer(j.FRAMEBUFFER, null), j.clearColor(0, 0, 0, 0), j.clear(j.COLOR_BUFFER_BIT), this.renderContext.onRenderStart(), a.RendererContext.deleteTexture(this), b._filter && this.renderContext.setGlobalFilter(b._filter), b._colorTransform && this.renderContext.setGlobalColorTransform(b._colorTransform.matrix), (j = b.mask || b._scrollRect) && this.renderContext.pushMask(j), b._render(this.renderContext), this.renderContext._draw(), a.MainContext.__use_new_draw = f, j && this.renderContext.popMask(), b._colorTransform && this.renderContext.setGlobalColorTransform(null), b._filter && this.renderContext.setGlobalFilter(null), a.RenderTexture.identityRectangle.width = c, a.RenderTexture.identityRectangle.height = e, g.addDrawArea(a.RenderTexture.identityRectangle), this.renderContext.onRenderFinish(), g._drawAreaList = i, this._sourceWidth = c / h * d, this._sourceHeight = e / h * d, this._textureWidth = c * d, this._textureHeight = e * d, this.canvasContext.drawImage(this._webglBitmapData, 0, 0, c, e, 0, 0, this._sourceWidth, this._sourceHeight), !0
                })
            }, c.prototype.createCanvas = function() {
                var c, b = a.Browser.getInstance().$("#egretCanvas");
                return b || (c = document.getElementById(a.StageDelegate.canvas_div_name), b = a.Browser.getInstance().$new("canvas"), b.id = "egretCanvas", c.appendChild(b)), a.MainContext.instance.stage.addEventListener(a.Event.RESIZE, this.onResize, this), b
            }, c.prototype.onResize = function() {
                var b = document.getElementById(a.StageDelegate.canvas_div_name);
                this.canvas && (this.canvas.width = a.MainContext.instance.stage.stageWidth, this.canvas.height = a.MainContext.instance.stage.stageHeight, this.canvas.style.width = b.style.width, this.canvas.style.height = b.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2), this.html5Canvas && (this.html5Canvas.width = a.MainContext.instance.stage.stageWidth, this.html5Canvas.height = a.MainContext.instance.stage.stageHeight, this.html5Canvas.style.width = b.style.width, this.html5Canvas.style.height = b.style.height)
            }, c.prototype.handleContextLost = function() {
                this.contextLost = !0
            }, c.prototype.handleContextRestored = function() {
                this.initWebGL(), this.shaderManager.setContext(this.gl), this.contextLost = !1
            }, c.prototype.initWebGL = function() {
                for (var b, d = {}, e = ["experimental-webgl", "webgl"], f = 0; f < e.length; f++) {
                    try {
                        b = this.canvas.getContext(e[f], d)
                    } catch (g) {}
                    if (b) break
                }
                if (!b) throw Error(a.getString(1021));
                c.glID++, this.glID = c.glID, this.setContext(b)
            }, c.prototype.setContext = function(a) {
                this.gl = a, a.id = this.glContextId++, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW), a.disable(a.DEPTH_TEST), a.disable(a.CULL_FACE), a.enable(a.BLEND), a.colorMask(!0, !0, !0, !0)
            }, c.prototype.start = function() {
                var a, b, c;
                this.contextLost || (a = this.gl, a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : "blur" == this.filterType ? this.shaderManager.blurShader : this.shaderManager.defaultShader, this.shaderManager.activateShader(b), b.syncUniforms(), a.uniform2f(b.projectionVector, this.projectionX, this.projectionY), c = 4 * this.vertSize, a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16))
            }, c.prototype.clearScreen = function() {
                var c, d, e, f, b = this.gl;
                for (b.colorMask(!0, !0, !0, !0), c = a.RenderFilter.getInstance().getDrawAreaList(), d = 0, e = c.length; e > d; d++) f = c[d], b.viewport(f.x, f.y, f.width, f.height), b.bindFramebuffer(b.FRAMEBUFFER, null), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT);
                c = a.MainContext.instance.stage, b.viewport(0, 0, c.stageWidth, c.stageHeight), this.renderCost = 0
            }, c.prototype.setBlendMode = function(b) {
                if (b || (b = a.BlendMode.NORMAL), this.currentBlendMode != b) {
                    var c = a.RendererContext.blendModesForGL[b];
                    c && (this._draw(), this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = b)
                }
            }, c.prototype.drawRepeatImage = function(b, c, d, e, f, g, h, i, j, k) {
                var l, m, n;
                for (k = a.MainContext.instance.rendererContext._texture_scale_factor, e *= k, f *= k; i > g; g += e)
                    for (l = h; j > l; l += f) m = Math.min(e, i - g), n = Math.min(f, j - l), this.drawImage(b, c, d, m / k, n / k, g, l, m, n)
            }, c.prototype.drawImage = function(a, b, c, d, e, f, g, h, i, j) {
                var k, l, m, n, o, p, q, r;
                void 0 === j && (j = void 0), this.contextLost || (void 0 !== j ? this.drawRepeatImage(a, b, c, d, e, f, g, h, i, j) : (this.createWebGLTexture(a), j = a._bitmapData.webGLTexture[this.glID], (j !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) && (this._draw(), this.currentBaseTexture = j), k = this.worldTransform, l = k.a, m = k.b, n = k.c, o = k.d, p = k.tx, q = k.ty, 0 == f && 0 == g || k.append(1, 0, 0, 1, f, g), 1 == d / h && 1 == e / i || k.append(h / d, 0, 0, i / e, 0, 0), f = k.a, g = k.b, h = k.c, i = k.d, j = k.tx, r = k.ty, k.a = l, k.b = m, k.c = n, k.d = o, k.tx = p, k.ty = q, l = a._sourceWidth, m = a._sourceHeight, a = d, k = e, b /= l, c /= m, d /= l, e /= m, l = this.vertices, m = 4 * this.currentBatchSize * this.vertSize, n = this.worldAlpha, l[m++] = j, l[m++] = r, l[m++] = b, l[m++] = c, l[m++] = n, l[m++] = f * a + j, l[m++] = g * a + r, l[m++] = d + b, l[m++] = c, l[m++] = n, l[m++] = f * a + h * k + j, l[m++] = i * k + g * a + r, l[m++] = d + b, l[m++] = e + c, l[m++] = n, l[m++] = h * k + j, l[m++] = i * k + r, l[m++] = b, l[m++] = e + c, l[m++] = n, this.currentBatchSize++))
            }, c.prototype._draw = function() {
                var b, c, d;
                0 == this.currentBatchSize || this.contextLost || (b = a.getTimer(), this.start(), c = this.gl, c.bindTexture(c.TEXTURE_2D, this.currentBaseTexture), d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize), c.bufferSubData(c.ARRAY_BUFFER, 0, d), c.drawElements(c.TRIANGLES, 6 * this.currentBatchSize, c.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderCost += a.getTimer() - b, a.Profiler.getInstance().onDrawImage())
            }, c.prototype.setTransform = function(a) {
                var b = this.worldTransform;
                b.a = a.a, b.b = a.b, b.c = a.c, b.d = a.d, b.tx = a.tx, b.ty = a.ty
            }, c.prototype.setAlpha = function(a, b) {
                this.worldAlpha = a, this.setBlendMode(b)
            }, c.prototype.createWebGLTexture = function(a) {
                if (a = a._bitmapData, a.webGLTexture || (a.webGLTexture = {}), !a.webGLTexture[this.glID]) {
                    var b = this.gl;
                    a.webGLTexture[this.glID] = b.createTexture(), b.bindTexture(b.TEXTURE_2D, a.webGLTexture[this.glID]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.bindTexture(b.TEXTURE_2D, null)
                }
            }, c.prototype.pushMask = function(a) {
                this._draw();
                var b = this.gl;
                0 == this.maskList.length && b.enable(b.SCISSOR_TEST), a = this.getScissorRect(a), this.maskList.push(a), this.scissor(a.x, a.y, a.width, a.height)
            }, c.prototype.getScissorRect = function(b) {
                var c, d, e, f = this.maskList[this.maskList.length - 1];
                return f ? f.intersects(f) ? (c = Math.max(b.x + this.worldTransform.tx, f.x), d = Math.max(b.y + this.worldTransform.ty, f.y), e = Math.min(b.x + this.worldTransform.tx + b.width, f.x + f.width) - c, b = Math.min(b.y + this.worldTransform.ty + b.height, f.y + f.height) - d) : b = e = d = c = 0 : (c = b.x + this.worldTransform.tx, d = b.y + this.worldTransform.ty, e = b.width, b = b.height), (f = this.maskDataFreeList.pop()) ? (f.x = c, f.y = d, f.width = e, f.height = b) : f = new a.Rectangle(c, d, e, b), f
            }, c.prototype.popMask = function() {
                this._draw();
                var a = this.gl,
                    b = this.maskList.pop();
                this.maskDataFreeList.push(b), b = this.maskList.length, 0 != b ? (b = this.maskList[b - 1], (0 < b.width || 0 < b.height) && this.scissor(b.x, b.y, b.width, b.height)) : a.disable(a.SCISSOR_TEST)
            }, c.prototype.scissor = function(b, c, d, e) {
                var f = this.gl;
                0 > d && (d = 0), 0 > e && (e = 0), f.scissor(b, -c + a.MainContext.instance.stage.stageHeight - e, d, e)
            }, c.prototype.setGlobalColorTransform = function(a) {
                if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
                    a = a.concat();
                    var b = this.shaderManager.colorTransformShader;
                    b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255, b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255, b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255, b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255, b.uniforms.matrix.value = a
                }
            }, c.prototype.setGlobalFilter = function(a) {
                this._draw(), this.setFilterProperties(a)
            }, c.prototype.setFilterProperties = function(a) {
                if (a) switch (this.filterType = a.type, a.type) {
                    case "blur":
                        var b = this.shaderManager.blurShader;
                        b.uniforms.blur.value.x = a.blurX, b.uniforms.blur.value.y = a.blurY
                } else this.filterType = null
            }, c.prototype.setupFont = function(a, b) {
                void 0 === b && (b = null), this.canvasContext.setupFont(a, b)
            }, c.prototype.measureText = function(a) {
                return this.canvasContext.measureText(a)
            }, c.prototype.renderGraphics = function(a) {
                this._draw();
                var b = this.gl,
                    c = this.shaderManager.primitiveShader;
                this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer()), this.updateGraphics(a), this.shaderManager.activateShader(c), b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA), b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0)), b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY), b.uniform2f(c.offsetVector, 0, 0), b.uniform3fv(c.tintColor, [1, 1, 1]), b.uniform1f(c.alpha, this.worldAlpha), b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer), b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0), b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer), b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0), this.shaderManager.activateShader(this.shaderManager.defaultShader)
            }, c.prototype.updateGraphics = function(a) {
                var b = this.gl;
                this.buildRectangle(a), b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer), b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
            }, c.prototype.buildRectangle = function(a) {
                var e, f, g, h, i, j, k, b = a.x,
                    c = a.y,
                    d = a.w;
                a = a.h, e = this.graphicsStyle.a, f = this.graphicsStyle.r * e, g = this.graphicsStyle.g * e, h = this.graphicsStyle.b * e, i = this.graphicsPoints, j = this.graphicsIndices, k = i.length / 6, i.push(b, c), i.push(f, g, h, e), i.push(b + d, c), i.push(f, g, h, e), i.push(b, c + a), i.push(f, g, h, e), i.push(b + d, c + a), i.push(f, g, h, e), j.push(k, k, k + 1, k + 2, k + 3, k + 3)
            }, c.prototype.setGraphicsStyle = function(a, b, c, d) {
                this.graphicsStyle.r = a, this.graphicsStyle.g = b, this.graphicsStyle.b = c, this.graphicsStyle.a = d
            }, c.glID = 0, c.isInit = !1, c
        }(a.RendererContext);
        a.WebGLRenderer = b, b.prototype.__class__ = "egret.WebGLRenderer"
    }(egret || (egret = {})), ! function(a) {
        a.beginFill = function(a, c) {
            void 0 === c && (c = 1), this._pushCommand(new b(this._setStyle, this, [(a >> 16) / 255, ((65280 & a) >> 8) / 255, (255 & a) / 255, c]))
        }, a.drawRect = function(a, c, d, e) {
            this._pushCommand(new b(function(a) {
                this.renderContext.renderGraphics(a)
            }, this, [{
                x: a,
                y: c,
                w: d,
                h: e
            }])), this.checkRect(a, c, d, e)
        }, a.drawCircle = function() {}, a.drawRoundRect = function() {}, a.drawEllipse = function() {}, a.lineStyle = function() {}, a.lineTo = function() {}, a.curveTo = function() {}, a.moveTo = function() {}, a.clear = function() {
            this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
        }, a.endFill = function() {}, a._pushCommand = function(a) {
            this.commandQueue.push(a)
        }, a._draw = function(a) {
            var c, b = this.commandQueue.length;
            if (0 != b)
                for (this.renderContext = a, a = 0; b > a; a++) c = this.commandQueue[a], c.method.apply(c.thisObject, c.args)
        };
        var b = function() {
            return function(a, b, c) {
                this.method = a, this.thisObject = b, this.args = c
            }
        }();
        b.prototype.__class__ = "egret_webgl_graphics.Command", a._setStyle = function(a, b, c, d) {
            this.renderContext.setGraphicsStyle(a, b, c, d)
        }, a.init = function() {
            for (var b in a) egret.Graphics.prototype[b] = a[b]
        }
    }(egret_webgl_graphics || (egret_webgl_graphics = {})),
    function(a) {
        var b = function() {
            function b() {}
            return b.compileProgram = function(c, d, e) {
                e = b.compileFragmentShader(c, e), d = b.compileVertexShader(c, d);
                var f = c.createProgram();
                return c.attachShader(f, d), c.attachShader(f, e), c.linkProgram(f), c.getProgramParameter(f, c.LINK_STATUS) || a.Logger.infoWithErrorId(1020), f
            }, b.compileFragmentShader = function(a, c) {
                return b._compileShader(a, c, a.FRAGMENT_SHADER)
            }, b.compileVertexShader = function(a, c) {
                return b._compileShader(a, c, a.VERTEX_SHADER)
            }, b._compileShader = function(b, c, d) {
                return d = b.createShader(d), b.shaderSource(d, c), b.compileShader(d), b.getShaderParameter(d, b.COMPILE_STATUS) ? d : (a.Logger.info(b.getShaderInfoLog(d)), null)
            }, b.checkCanUseWebGL = function() {
                if (void 0 == b.canUseWebGL) try {
                    var a = document.createElement("canvas");
                    b.canUseWebGL = !(!window.WebGLRenderingContext || !a.getContext("webgl") && !a.getContext("experimental-webgl"))
                } catch (c) {
                    b.canUseWebGL = !1
                }
                return b.canUseWebGL
            }, b
        }();
        a.WebGLUtils = b, b.prototype.__class__ = "egret.WebGLUtils"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b(a) {
                this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}", this.program = this.gl = null, this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}", this.uniforms = null, this.gl = a, this.init()
            }
            return b.prototype.init = function() {
                var d, b = this.gl,
                    c = a.WebGLUtils.compileProgram(b, this.defaultVertexSrc, this.fragmentSrc);
                b.useProgram(c), this.uSampler = b.getUniformLocation(c, "uSampler"), this.projectionVector = b.getUniformLocation(c, "projectionVector"), this.offsetVector = b.getUniformLocation(c, "offsetVector"), this.dimensions = b.getUniformLocation(c, "dimensions"), this.aVertexPosition = b.getAttribLocation(c, "aVertexPosition"), this.aTextureCoord = b.getAttribLocation(c, "aTextureCoord"), this.colorAttribute = b.getAttribLocation(c, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                for (d in this.uniforms) this.uniforms[d].uniformLocation = b.getUniformLocation(c, d);
                this.initUniforms(), this.program = c
            }, b.prototype.initUniforms = function() {
                var a, b, c, d;
                if (this.uniforms) {
                    c = this.gl;
                    for (b in this.uniforms) a = this.uniforms[b], d = a.type, "mat2" === d || "mat3" === d || "mat4" === d ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === d ? a.glFunc = c.uniformMatrix2fv : "mat3" === d ? a.glFunc = c.uniformMatrix3fv : "mat4" === d && (a.glFunc = c.uniformMatrix4fv)) : (a.glFunc = c["uniform" + d], a.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
                }
            }, b.prototype.syncUniforms = function() {
                if (this.uniforms) {
                    var a, b, c = this.gl;
                    for (b in this.uniforms) a = this.uniforms[b], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(c, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(c, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
                }
            }, b
        }();
        a.EgretShader = b, b.prototype.__class__ = "egret.EgretShader"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b) {
                a.call(this, b), this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}", this.uniforms = {
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
                }, this.init()
            }
            return __extends(b, a), b
        }(a.EgretShader);
        a.ColorTransformShader = b, b.prototype.__class__ = "egret.ColorTransformShader"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b(b) {
                a.call(this, b), this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}", this.uniforms = {
                    blur: {
                        type: "2f",
                        value: {
                            x: 2,
                            y: 2
                        }
                    }
                }, this.init()
            }
            return __extends(b, a), b
        }(a.EgretShader);
        a.BlurShader = b, b.prototype.__class__ = "egret.BlurShader"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b(a) {
                this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null, this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}", this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}", this.gl = a, this.init()
            }
            return b.prototype.init = function() {
                var b = this.gl,
                    c = a.WebGLUtils.compileProgram(b, this.vertexSrc, this.fragmentSrc);
                b.useProgram(c), this.projectionVector = b.getUniformLocation(c, "projectionVector"), this.offsetVector = b.getUniformLocation(c, "offsetVector"), this.tintColor = b.getUniformLocation(c, "tint"), this.aVertexPosition = b.getAttribLocation(c, "aVertexPosition"), this.colorAttribute = b.getAttribLocation(c, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = b.getUniformLocation(c, "translationMatrix"), this.alpha = b.getUniformLocation(c, "alpha"), this.program = c
            }, b
        }();
        a.PrimitiveShader = b, b.prototype.__class__ = "egret.PrimitiveShader"
    }(egret || (egret = {})),
    function(a) {
        var b = function() {
            function b(a) {
                this.gl = null, this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [], this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
                for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
                this.setContext(a)
            }
            return b.prototype.setContext = function(b) {
                this.gl = b, this.primitiveShader = new a.PrimitiveShader(b), this.defaultShader = new a.EgretShader(b), this.colorTransformShader = new a.ColorTransformShader(b), this.blurShader = new a.BlurShader(b), this.activateShader(this.defaultShader)
            }, b.prototype.activateShader = function(a) {
                this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader = a)
            }, b.prototype.setAttribs = function(a) {
                var b, c;
                for (c = this.tempAttribState.length, b = 0; c > b; b++) this.tempAttribState[b] = !1;
                for (c = a.length, b = 0; c > b; b++) this.tempAttribState[a[b]] = !0;
                for (a = this.gl, c = this.attribState.length, b = 0; c > b; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
            }, b
        }();
        a.WebGLShaderManager = b, b.prototype.__class__ = "egret.WebGLShaderManager"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this)
            }
            return __extends(c, b), c.prototype.proceed = function(b) {
                function c() {
                    if (4 == e.readyState)
                        if (e.status != b._status && (b._status = e.status, a.HTTPStatusEvent.dispatchHTTPStatusEvent(b, e.status)), 400 <= e.status || 0 == e.status) a.IOErrorEvent.dispatchIOErrorEvent(b);
                        else {
                            switch (b.dataFormat) {
                                case a.URLLoaderDataFormat.TEXT:
                                    b.data = e.responseText;
                                    break;
                                case a.URLLoaderDataFormat.VARIABLES:
                                    b.data = new a.URLVariables(e.responseText);
                                    break;
                                case a.URLLoaderDataFormat.BINARY:
                                    b.data = e.response;
                                    break;
                                default:
                                    b.data = e.responseText
                            }
                            a.__callAsync(a.Event.dispatchEvent, a.Event, b, a.Event.COMPLETE)
                        }
                }
                var d, e, f;
                b.dataFormat == a.URLLoaderDataFormat.TEXTURE ? this.loadTexture(b) : b.dataFormat == a.URLLoaderDataFormat.SOUND ? this.loadSound(b) : (d = b._request, e = this.getXHR(), e.onreadystatechange = c, f = a.NetContext._getUrl(d), e.open(d.method, f, !0), this.setResponseType(e, b.dataFormat), d.method != a.URLRequestMethod.GET && d.data ? d.data instanceof a.URLVariables ? (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(d.data.toString())) : (e.setRequestHeader("Content-Type", "multipart/form-data"), e.send(d.data)) : e.send())
            }, c.prototype.loadSound = function(b) {
                function c(f) {
                    a.clearTimeout(e.__timeoutId), e.removeEventListener("canplaythrough", c, !1), e.removeEventListener("error", d, !1), f = new a.Sound, f._setAudio(e), b.data = f, a.__callAsync(a.Event.dispatchEvent, a.Event, b, a.Event.COMPLETE)
                }

                function d() {
                    a.clearTimeout(e.__timeoutId), e.removeEventListener("canplaythrough", c, !1), e.removeEventListener("error", d, !1), a.IOErrorEvent.dispatchIOErrorEvent(b)
                }
                var e = new Audio(b._request.url);
                e.__timeoutId = a.setTimeout(c, this, 100), e.addEventListener("canplaythrough", c, !1), e.addEventListener("error", d, !1), e.load()
            }, c.prototype.getXHR = function() {
                return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
            }, c.prototype.setResponseType = function(b, c) {
                switch (c) {
                    case a.URLLoaderDataFormat.TEXT:
                    case a.URLLoaderDataFormat.VARIABLES:
                        b.responseType = a.URLLoaderDataFormat.TEXT;
                        break;
                    case a.URLLoaderDataFormat.BINARY:
                        b.responseType = "arraybuffer";
                        break;
                    default:
                        b.responseType = c
                }
            }, c.prototype.loadTexture = function(b) {
                var c = b._request,
                    d = new Image;
                d.onload = function(c) {
                    d.onerror = null, d.onload = null, c = new a.Texture, c._setBitmapData(d), b.data = c, a.__callAsync(a.Event.dispatchEvent, a.Event, b, a.Event.COMPLETE)
                }, d.onerror = function() {
                    d.onerror = null, d.onload = null, a.IOErrorEvent.dispatchIOErrorEvent(b)
                }, d.src = c.url
            }, c
        }(a.NetContext);
        a.HTML5NetContext = b, b.prototype.__class__ = "egret.HTML5NetContext"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this._isTouchDown = !1, this.rootDiv = null, this.rootDiv = document.getElementById(a.StageDelegate.canvas_div_name)
            }
            return __extends(c, b), c.prototype.prevent = function(a) {
                a.stopPropagation(), 1 != a.isScroll && a.preventDefault()
            }, c.prototype.run = function() {
                var b = this;
                window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(a) {
                    b._onTouchBegin(a), b.prevent(a)
                }, !1), this.rootDiv.addEventListener("MSPointerMove", function(a) {
                    b._onTouchMove(a), b.prevent(a)
                }, !1), this.rootDiv.addEventListener("MSPointerUp", function(a) {
                    b._onTouchEnd(a), b.prevent(a)
                }, !1)) : a.MainContext.deviceType == a.MainContext.DEVICE_MOBILE ? this.addTouchListener() : a.MainContext.deviceType == a.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener()), window.addEventListener("mousedown", function(a) {
                    b.inOutOfCanvas(a) ? b.dispatchLeaveStageEvent() : b._isTouchDown = !0
                }), window.addEventListener("mouseup", function(a) {
                    b._isTouchDown && (b.inOutOfCanvas(a) ? b.dispatchLeaveStageEvent() : b._onTouchEnd(a)), b._isTouchDown = !1
                })
            }, c.prototype.addMouseListener = function() {
                var a = this;
                this.rootDiv.addEventListener("mousedown", function(b) {
                    a._onTouchBegin(b)
                }), this.rootDiv.addEventListener("mousemove", function(b) {
                    a._onTouchMove(b)
                }), this.rootDiv.addEventListener("mouseup", function(b) {
                    a._onTouchEnd(b)
                })
            }, c.prototype.addTouchListener = function() {
                var a = this;
                this.rootDiv.addEventListener("touchstart", function(b) {
                    for (var c = b.changedTouches.length, d = 0; c > d; d++) a._onTouchBegin(b.changedTouches[d]);
                    a.prevent(b)
                }, !1), this.rootDiv.addEventListener("touchmove", function(b) {
                    for (var c = b.changedTouches.length, d = 0; c > d; d++) a._onTouchMove(b.changedTouches[d]);
                    a.prevent(b)
                }, !1), this.rootDiv.addEventListener("touchend", function(b) {
                    for (var c = b.changedTouches.length, d = 0; c > d; d++) a._onTouchEnd(b.changedTouches[d]);
                    a.prevent(b)
                }, !1), this.rootDiv.addEventListener("touchcancel", function(b) {
                    for (var c = b.changedTouches.length, d = 0; c > d; d++) a._onTouchEnd(b.changedTouches[d]);
                    a.prevent(b)
                }, !1)
            }, c.prototype.inOutOfCanvas = function(b) {
                var d, c = this.getLocation(this.rootDiv, b);
                return b = c.x, c = c.y, d = a.MainContext.instance.stage, 0 > b || 0 > c || b > d.stageWidth || c > d.stageHeight ? !0 : !1
            }, c.prototype.dispatchLeaveStageEvent = function() {
                this.touchingIdentifiers.length = 0, a.MainContext.instance.stage.dispatchEventWith(a.Event.LEAVE_STAGE)
            }, c.prototype._onTouchBegin = function(a) {
                var b = this.getLocation(this.rootDiv, a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier), this.onTouchBegan(b.x, b.y, c)
            }, c.prototype._onTouchMove = function(a) {
                var b = this.getLocation(this.rootDiv, a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier), this.onTouchMove(b.x, b.y, c)
            }, c.prototype._onTouchEnd = function(a) {
                var b = this.getLocation(this.rootDiv, a),
                    c = -1;
                a.hasOwnProperty("identifier") && (c = a.identifier), this.onTouchEnd(b.x, b.y, c)
            }, c.prototype.getLocation = function(b, c) {
                var d, e, h, f = document.documentElement,
                    g = window;
                return "function" == typeof b.getBoundingClientRect ? (e = b.getBoundingClientRect(), d = e.left, e = e.top) : e = d = 0, d += g.pageXOffset - f.clientLeft, e += g.pageYOffset - f.clientTop, null != c.pageX ? (f = c.pageX, g = c.pageY) : (d -= document.body.scrollLeft, e -= document.body.scrollTop, f = c.clientX, g = c.clientY), h = a.Point.identity, h.x = (f - d) / a.StageDelegate.getInstance().getScaleX(), h.y = (g - e) / a.StageDelegate.getInstance().getScaleY(), h
            }, c
        }(a.TouchContext);
        a.HTML5TouchContext = b, b.prototype.__class__ = "egret.HTML5TouchContext"
    }(egret || (egret = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.inputElement = this.div = null, this._hasListeners = !1, this._inputType = "", this._isShow = !1, this.textValue = "", this._height = this._width = 0, this._styleInfoes = {};
                var d = a.StageDelegate.getInstance().getScaleX(),
                    e = a.StageDelegate.getInstance().getScaleY(),
                    f = a.Browser.getInstance().$new("div");
                f.position.x = 0, f.position.y = 0, f.scale.x = d, f.scale.y = e, f.transforms(), f.style[c.getTrans("transformOrigin")] = "0% 0% 0px", this.div = f, e = a.MainContext.instance.stage, d = e.stageWidth, e = e.stageHeight, f = new a.Shape, f.width = d, f.height = e, f.touchEnabled = !0, this._shape = f, this.getStageDelegateDiv().appendChild(this.div)
            }
            return __extends(c, b), c.getTrans = function(a) {
                return "" == c.header && (c.header = c.getHeader()), c.header + a.substring(1, a.length)
            }, c.getHeader = function() {
                for (var a = document.createElement("div").style, b = ["t", "webkitT", "msT", "MozT", "OT"], c = 0; c < b.length; c++)
                    if (b[c] + "ransform" in a) return b[c];
                return b[0]
            }, c.prototype.getStageDelegateDiv = function() {
                var b = a.Browser.getInstance().$("#StageDelegateDiv");
                return b || (b = a.Browser.getInstance().$new("div"), b.id = "StageDelegateDiv", document.getElementById(a.StageDelegate.canvas_div_name).appendChild(b), b.transforms()), b
            }, c.prototype._setMultiline = function(a) {
                b.prototype._setMultiline.call(this, a), this.createInput()
            }, c.prototype.callHandler = function(a) {
                a.stopPropagation()
            }, c.prototype._add = function() {
                this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
            }, c.prototype._remove = function() {
                this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape), this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
            }, c.prototype._addListeners = function() {
                this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart", this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
            }, c.prototype._removeListeners = function() {
                this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
            }, c.prototype.createInput = function() {
                var a = this._multiline ? "textarea" : "input";
                this._inputType != a && (this._inputType = a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {}, a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
            }, c.prototype._open = function() {}, c.prototype._setScale = function(c, d) {
                b.prototype._setScale.call(this, c, d);
                var e = a.StageDelegate.getInstance().getScaleX(),
                    f = a.StageDelegate.getInstance().getScaleY();
                this.div.scale.x = e * c, this.div.scale.y = f * d, this.div.transforms()
            }, c.prototype.changePosition = function(b, c) {
                var d = a.StageDelegate.getInstance().getScaleX(),
                    e = a.StageDelegate.getInstance().getScaleY();
                this.div.position.x = b * d, this.div.position.y = c * e, this.div.transforms()
            }, c.prototype.setStyles = function() {
                this.setElementStyle("fontStyle", this._italic ? "italic" : "normal"), this.setElementStyle("fontWeight", this._bold ? "bold" : "normal"), this.setElementStyle("textAlign", this._textAlign), this.setElementStyle("fontSize", this._size + "px"), this.setElementStyle("color", "#000000"), this.setElementStyle("width", this._width + "px"), this.setElementStyle("height", this._height + "px"), this.setElementStyle("display", "block")
            }, c.prototype._show = function() {
                var b, c;
                a.MainContext.instance.stage._changeSizeDispatchFlag = !1, 0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength"), this._isShow = !0, b = this._getText(), this.inputElement.value = b, c = this, this.inputElement.oninput = function() {
                    c.textValue = c.inputElement.value, c.dispatchEvent(new a.Event("updateText"))
                }, this.setStyles(), this.inputElement.focus(), this.inputElement.selectionStart = b.length, this.inputElement.selectionEnd = b.length, this._shape && null == this._shape.parent && a.MainContext.instance.stage.addChild(this._shape)
            }, c.prototype._hide = function() {
                if (a.MainContext.instance.stage._changeSizeDispatchFlag = !0, null != this.inputElement) {
                    this._isShow = !1, this.inputElement.oninput = function() {}, this.setElementStyle("border", "none"), this.setElementStyle("display", "none"), this.inputElement.value = "", this.setElementStyle("width", "0px"), window.scrollTo(0, 0);
                    var b = this;
                    a.setTimeout(function() {
                        b.inputElement.blur(), window.scrollTo(0, 0)
                    }, this, 50), this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
                }
            }, c.prototype._getText = function() {
                return this.textValue || (this.textValue = ""), this.textValue
            }, c.prototype._setText = function(a) {
                this.textValue = a, this.resetText()
            }, c.prototype.resetText = function() {
                this.inputElement && (this.inputElement.value = this.textValue)
            }, c.prototype._setWidth = function(a) {
                this._width = a
            }, c.prototype._setHeight = function(a) {
                this._height = a
            }, c.prototype.setElementStyle = function(a, b) {
                this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
            }, c.header = "", c
        }(a.StageText);
        a.HTML5StageText = b, b.prototype.__class__ = "egret.HTML5StageText"
    }(egret || (egret = {})), egret.StageText.create = function() {
        return new egret.HTML5StageText
    }, __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, ! function(a) {
        var b = function(a) {
            function b(b, c, d) {
                void 0 === c && (c = !1), void 0 === d && (d = !1), a.call(this, b, c, d), this.itemsTotal = this.itemsLoaded = 0, this.groupName = "", this.resItem = null
            }
            return __extends(b, a), b.dispatchResourceEvent = function(a, c, d, e, f, g) {
                void 0 === d && (d = ""), void 0 === e && (e = null), void 0 === f && (f = 0), void 0 === g && (g = 0);
                var h = egret.Event._getPropertyData(b);
                h.groupName = d, h.resItem = e, h.itemsLoaded = f, h.itemsTotal = g, egret.Event._dispatchByTarget(b, a, c, h)
            }, b.ITEM_LOAD_ERROR = "itemLoadError", b.CONFIG_COMPLETE = "configComplete", b.CONFIG_LOAD_ERROR = "configLoadError", b.GROUP_PROGRESS = "groupProgress", b.GROUP_COMPLETE = "groupComplete", b.GROUP_LOAD_ERROR = "groupLoadError", b
        }(egret.Event);
        a.ResourceEvent = b, b.prototype.__class__ = "RES.ResourceEvent"
    }(RES || (RES = {})),
    function(a) {
        var b = function() {
            function a(a, b, c) {
                this.groupName = "", this.data = null, this._loaded = !1, this.name = a, this.url = b, this.type = c
            }
            return Object.defineProperty(a.prototype, "loaded", {
                get: function() {
                    return this.data ? this.data.loaded : this._loaded
                },
                set: function(a) {
                    this.data && (this.data.loaded = a), this._loaded = a
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.toString = function() {
                return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
            }, a.TYPE_XML = "xml", a.TYPE_IMAGE = "image", a.TYPE_BIN = "bin", a.TYPE_TEXT = "text", a.TYPE_JSON = "json", a.TYPE_SHEET = "sheet", a.TYPE_FONT = "font", a.TYPE_SOUND = "sound", a
        }();
        a.ResourceItem = b, b.prototype.__class__ = "RES.ResourceItem"
    }(RES || (RES = {})),
    function(a) {
        var b = function() {
            function b() {
                this.keyMap = {}, this.groupDic = {}, a.configInstance = this
            }
            return b.prototype.getGroupByName = function(a) {
                var c, d, b = [];
                if (!this.groupDic[a]) return b;
                for (a = this.groupDic[a], c = a.length, d = 0; c > d; d++) b.push(this.parseResourceItem(a[d]));
                return b
            }, b.prototype.getRawGroupByName = function(a) {
                return this.groupDic[a] ? this.groupDic[a] : []
            }, b.prototype.createGroup = function(a, b, c) {
                var d, e, f, g, h, i, j;
                if (void 0 === c && (c = !1), !c && this.groupDic[a] || !b || 0 == b.length) return !1;
                for (c = this.groupDic, d = [], e = b.length, f = 0; e > f; f++)
                    if (g = b[f], h = c[g])
                        for (g = h.length, i = 0; g > i; i++) j = h[i], -1 == d.indexOf(j) && d.push(j);
                    else(j = this.keyMap[g]) ? -1 == d.indexOf(j) && d.push(j) : egret.Logger.warningWithErrorId(2e3, g);
                return 0 == d.length ? !1 : (this.groupDic[a] = d, !0)
            }, b.prototype.parseConfig = function(a, b) {
                var c, d, e, f, g, h, i, j, k;
                if (a) {
                    if (c = a.resources)
                        for (d = c.length, e = 0; d > e; e++) f = c[e], g = f.url, g && -1 == g.indexOf("://") && (f.url = b + g), this.addItemToKeyMap(f);
                    if (c = a.groups)
                        for (d = c.length, e = 0; d > e; e++) {
                            for (g = c[e], h = [], i = g.keys.split(","), j = i.length, k = 0; j > k; k++) f = i[k].trim(), (f = this.keyMap[f]) && -1 == h.indexOf(f) && h.push(f);
                            this.groupDic[g.name] = h
                        }
                }
            }, b.prototype.addSubkey = function(a, b) {
                var c = this.keyMap[b];
                c && !this.keyMap[a] && (this.keyMap[a] = c)
            }, b.prototype.addItemToKeyMap = function(a) {
                var b, c, d, e;
                if (this.keyMap[a.name] || (this.keyMap[a.name] = a), a.hasOwnProperty("subkeys"))
                    for (b = a.subkeys.split(","), a.subkeys = b, c = b.length, d = 0; c > d; d++) e = b[d], null == this.keyMap[e] && (this.keyMap[e] = a)
            }, b.prototype.getName = function(a) {
                return (a = this.keyMap[a]) ? a.name : ""
            }, b.prototype.getType = function(a) {
                return (a = this.keyMap[a]) ? a.type : ""
            }, b.prototype.getRawResourceItem = function(a) {
                return this.keyMap[a]
            }, b.prototype.getResourceItem = function(a) {
                return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
            }, b.prototype.parseResourceItem = function(b) {
                var c = new a.ResourceItem(b.name, b.url, b.type);
                return c.data = b, c
            }, b
        }();
        a.ResourceConfig = b, b.prototype.__class__ = "RES.ResourceConfig"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.thread = 2, this.loadingCount = 0, this.resInstance = this.callBack = null, this.groupTotalDic = {}, this.numLoadedDic = {}, this.itemListDic = {}, this.groupErrorDic = {}, this.retryTimesDic = {}, this.maxRetryTimes = 3, this.failedList = [], this.priorityQueue = {}, this.lazyLoadList = [], this.analyzerDic = {}, this.queueIndex = 0
            }
            return __extends(c, b), c.prototype.isGroupInLoading = function(a) {
                return void 0 !== this.itemListDic[a]
            }, c.prototype.loadGroup = function(b, c, d) {
                if (void 0 === d && (d = 0), !this.itemListDic[c] && c)
                    if (b && 0 != b.length) {
                        this.priorityQueue[d] ? this.priorityQueue[d].push(c) : this.priorityQueue[d] = [c], this.itemListDic[c] = b, d = b.length;
                        for (var e = 0; d > e; e++) b[e].groupName = c;
                        this.groupTotalDic[c] = b.length, this.numLoadedDic[c] = 0, this.next()
                    } else egret.Logger.warningWithErrorId(2001, c), b = new a.ResourceEvent(a.ResourceEvent.GROUP_LOAD_ERROR), b.groupName = c, this.dispatchEvent(b)
            }, c.prototype.loadItem = function(a) {
                this.lazyLoadList.push(a), a.groupName = "", this.next()
            }, c.prototype.next = function() {
                for (var b, c; this.loadingCount < this.thread && (b = this.getOneResourceItem(), b);) this.loadingCount++, b.loaded ? this.onItemComplete(b) : (c = this.analyzerDic[b.type], c || (c = this.analyzerDic[b.type] = egret.Injector.getInstance(a.AnalyzerBase, b.type)), c.loadFile(b, this.onItemComplete, this))
            }, c.prototype.getOneResourceItem = function() {
                var a, b, c, d;
                if (0 < this.failedList.length) return this.failedList.shift();
                b = Number.NEGATIVE_INFINITY;
                for (a in this.priorityQueue) b = Math.max(b, a);
                if (b = this.priorityQueue[b], !b || 0 == b.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
                for (a = b.length, d = 0; a > d && (this.queueIndex >= a && (this.queueIndex = 0), c = this.itemListDic[b[this.queueIndex]], !(0 < c.length)); d++) this.queueIndex++;
                return 0 == c.length ? null : c.shift()
            }, c.prototype.onItemComplete = function(b) {
                var c, d, e;
                if (this.loadingCount--, c = b.groupName, !b.loaded) {
                    if (d = this.retryTimesDic[b.name] || 1, !(d > this.maxRetryTimes)) return this.retryTimesDic[b.name] = d + 1, this.failedList.push(b), void this.next();
                    delete this.retryTimesDic[b.name], a.ResourceEvent.dispatchResourceEvent(this.resInstance, a.ResourceEvent.ITEM_LOAD_ERROR, c, b)
                }
                c ? (this.numLoadedDic[c]++, d = this.numLoadedDic[c], e = this.groupTotalDic[c], b.loaded || (this.groupErrorDic[c] = !0), a.ResourceEvent.dispatchResourceEvent(this.resInstance, a.ResourceEvent.GROUP_PROGRESS, c, b, d, e), d == e && (b = this.groupErrorDic[c], this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], delete this.groupErrorDic[c], b ? a.ResourceEvent.dispatchResourceEvent(this, a.ResourceEvent.GROUP_LOAD_ERROR, c) : a.ResourceEvent.dispatchResourceEvent(this, a.ResourceEvent.GROUP_COMPLETE, c))) : this.callBack.call(this.resInstance, b), this.next()
            }, c.prototype.removeGroupName = function(a) {
                var b, c, d, e, f, g;
                for (b in this.priorityQueue) {
                    for (c = this.priorityQueue[b], d = c.length, e = 0, f = !1, d = c.length, g = 0; d > g; g++) {
                        if (c[g] == a) {
                            c.splice(e, 1), f = !0;
                            break
                        }
                        e++
                    }
                    if (f) {
                        0 == c.length && delete this.priorityQueue[b];
                        break
                    }
                }
            }, c
        }(egret.EventDispatcher);
        a.ResourceLoader = b, b.prototype.__class__ = "RES.ResourceLoader"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.resourceConfig = null, this.resourceConfig = a.configInstance
            }
            return __extends(c, b), c.prototype.addSubkey = function(a, b) {
                this.resourceConfig.addSubkey(a, b)
            }, c.prototype.loadFile = function() {}, c.prototype.getRes = function() {}, c.prototype.destroyRes = function() {
                return !1
            }, c.getStringPrefix = function(a) {
                if (!a) return "";
                var b = a.indexOf(".");
                return -1 != b ? a.substring(0, b) : ""
            }, c.getStringTail = function(a) {
                if (!a) return "";
                var b = a.indexOf(".");
                return -1 != b ? a.substring(b + 1) : ""
            }, c
        }(egret.HashObject);
        a.AnalyzerBase = b, b.prototype.__class__ = "RES.AnalyzerBase"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this.fileDic = {}, this.resItemDic = [], this._dataFormat = egret.URLLoaderDataFormat.BINARY, this.recycler = new egret.Recycler
            }
            return __extends(b, a), b.prototype.loadFile = function(a, b, c) {
                if (this.fileDic[a.name]) b.call(c, a);
                else {
                    var d = this.getLoader();
                    this.resItemDic[d.hashCode] = {
                        item: a,
                        func: b,
                        thisObject: c
                    }, d.load(new egret.URLRequest(a.url))
                }
            }, b.prototype.getLoader = function() {
                var a = this.recycler.pop();
                return a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)), a.dataFormat = this._dataFormat, a
            }, b.prototype.onLoadFinish = function(a) {
                var d, e, b = a.target,
                    c = this.resItemDic[b.hashCode];
                delete this.resItemDic[b.hashCode], d = c.item, e = c.func, d.loaded = a.type == egret.Event.COMPLETE, d.loaded && this.analyzeData(d, b.data), this.recycler.push(b), e.call(c.thisObject, d)
            }, b.prototype.analyzeData = function(a, b) {
                var c = a.name;
                !this.fileDic[c] && b && (this.fileDic[c] = b)
            }, b.prototype.getRes = function(a) {
                return this.fileDic[a]
            }, b.prototype.hasRes = function(a) {
                return null != this.getRes(a)
            }, b.prototype.destroyRes = function(a) {
                return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
            }, b
        }(a.AnalyzerBase);
        a.BinAnalyzer = b, b.prototype.__class__ = "RES.BinAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
            }
            return __extends(b, a), b.prototype.analyzeData = function(a, b) {
                var c = a.name;
                !this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
            }, b
        }(a.BinAnalyzer);
        a.ImageAnalyzer = b, b.prototype.__class__ = "RES.ImageAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            return __extends(b, a), b.prototype.analyzeData = function(a, b) {
                var c = a.name;
                if (!this.fileDic[c] && b) try {
                    this.fileDic[c] = JSON.parse(b)
                } catch (d) {
                    egret.Logger.warningWithErrorId(1017, a.url, b)
                }
            }, b
        }(a.BinAnalyzer);
        a.JsonAnalyzer = b, b.prototype.__class__ = "RES.JsonAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            return __extends(b, a), b
        }(a.BinAnalyzer);
        a.TextAnalyzer = b, b.prototype.__class__ = "RES.TextAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(b) {
            function c() {
                b.call(this), this.sheetMap = {}, this.textureMap = {}, this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            return __extends(c, b), c.prototype.getRes = function(b) {
                var c = this.fileDic[b];
                return c || (c = this.textureMap[b]), !c && (c = a.AnalyzerBase.getStringPrefix(b), c = this.fileDic[c]) && (b = a.AnalyzerBase.getStringTail(b), c = c.getTexture(b)), c
            }, c.prototype.onLoadFinish = function(a) {
                var d, e, b = a.target,
                    c = this.resItemDic[b.hashCode];
                if (delete this.resItemDic[b.hashCode], d = c.item, e = c.func, d.loaded = a.type == egret.Event.COMPLETE, d.loaded)
                    if ("string" == typeof b.data) {
                        if (d.loaded = !1, a = this.analyzeConfig(d, b.data)) return d.url = a, this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, e, c.thisObject), void(this._dataFormat = egret.URLLoaderDataFormat.TEXT)
                    } else this.analyzeBitmap(d, b.data);
                d.url = d.data.url, this.recycler.push(b), e.call(c.thisObject, d)
            }, c.prototype.analyzeConfig = function(a, b) {
                var c, d = a.name,
                    e = "";
                try {
                    c = JSON.parse(b)
                } catch (f) {
                    egret.Logger.warningWithErrorId(1017, a.url, b)
                }
                return c && (this.sheetMap[d] = c, e = this.getRelativePath(a.url, c.file)), e
            }, c.prototype.analyzeBitmap = function(a, b) {
                var d, c = a.name;
                !this.fileDic[c] && b && (d = this.sheetMap[c], delete this.sheetMap[c], d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "" : c), this.fileDic[c] = d)
            }, c.prototype.getRelativePath = function(a, b) {
                a = a.split("\\").join("/");
                var c = a.lastIndexOf("/");
                return a = -1 != c ? a.substring(0, c + 1) + b : b
            }, c.prototype.parseSpriteSheet = function(a, b, c) {
                var d, e, f, g;
                if (b = b.frames, !b) return null;
                e = new egret.SpriteSheet(a), f = this.textureMap;
                for (d in b) g = b[d], a = e.createTexture(d, g.x, g.y, g.w, g.h, g.offX, g.offY, g.sourceW, g.sourceH), g.scale9grid && (g = g.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(g[0]), parseInt(g[1]), parseInt(g[2]), parseInt(g[3]))), null == f[d] && (f[d] = a, c && this.addSubkey(d, c));
                return e
            }, c.prototype.destroyRes = function(a) {
                var c, b = this.fileDic[a];
                if (b) {
                    delete this.fileDic[a];
                    for (c in b._textureMap) this.textureMap[c] && delete this.textureMap[c];
                    return !0
                }
                return !1
            }, c
        }(a.BinAnalyzer);
        a.SheetAnalyzer = b, b.prototype.__class__ = "RES.SheetAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this)
            }
            return __extends(b, a), b.prototype.analyzeConfig = function(a, b) {
                var c, d = a.name,
                    e = "";
                try {
                    c = JSON.parse(b)
                } catch (f) {}
                return c ? e = this.getRelativePath(a.url, c.file) : (c = b, e = this.getTexturePath(a.url, c)), this.sheetMap[d] = c, e
            }, b.prototype.analyzeBitmap = function(a, b) {
                var d, c = a.name;
                !this.fileDic[c] && b && (d = this.sheetMap[c], delete this.sheetMap[c], d = new egret.BitmapFont(b, d), this.fileDic[c] = d)
            }, b.prototype.getTexturePath = function(a, b) {
                var c = "",
                    d = b.split("\n")[2],
                    e = d.indexOf('file="');
                return -1 != e && (d = d.substring(e + 6), e = d.indexOf('"'), c = d.substring(0, e)), a = a.split("\\").join("/"), e = a.lastIndexOf("/"), a = -1 != e ? a.substring(0, e + 1) + c : c
            }, b.prototype.destroyRes = function(a) {
                return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
            }, b
        }(a.SheetAnalyzer);
        a.FontAnalyzer = b, b.prototype.__class__ = "RES.FontAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._dataFormat = egret.URLLoaderDataFormat.SOUND
            }
            return __extends(b, a), b.prototype.analyzeData = function(a, b) {
                var c = a.name;
                !this.fileDic[c] && b && (this.fileDic[c] = b, b.preload((c = a.data) && c.soundType ? c.soundType : egret.Sound.EFFECT))
            }, b
        }(a.BinAnalyzer);
        a.SoundAnalyzer = b, b.prototype.__class__ = "RES.SoundAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b = function(a) {
            function b() {
                a.call(this), this._dataFormat = egret.URLLoaderDataFormat.TEXT
            }
            return __extends(b, a), b.prototype.analyzeData = function(a, b) {
                var d, c = a.name;
                if (!this.fileDic[c] && b) try {
                    d = egret.XML.parse(b), this.fileDic[c] = d
                } catch (e) {}
            }, b
        }(a.BinAnalyzer);
        a.XMLAnalyzer = b, b.prototype.__class__ = "RES.XMLAnalyzer"
    }(RES || (RES = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    function(a) {
        var b, c;
        a.loadConfig = function(a, b, d) {
            void 0 === b && (b = ""), void 0 === d && (d = "json"), c.loadConfig(a, b, d)
        }, a.loadGroup = function(a, b) {
            void 0 === b && (b = 0), c.loadGroup(a, b)
        }, a.isGroupLoaded = function(a) {
            return c.isGroupLoaded(a)
        }, a.getGroupByName = function(a) {
            return c.getGroupByName(a)
        }, a.createGroup = function(a, b, d) {
            return void 0 === d && (d = !1), c.createGroup(a, b, d)
        }, a.hasRes = function(a) {
            return c.hasRes(a)
        }, a.parseConfig = function(a, b) {
            void 0 === b && (b = ""), c.parseConfig(a, b)
        }, a.getRes = function(a) {
            return c.getRes(a)
        }, a.getResAsync = function(a, b, d) {
            c.getResAsync(a, b, d)
        }, a.getResByUrl = function(a, b, d, e) {
            void 0 === e && (e = ""), c.getResByUrl(a, b, d, e)
        }, a.destroyRes = function(a) {
            return c.destroyRes(a)
        }, a.setMaxLoadingThread = function(a) {
            c.setMaxLoadingThread(a)
        }, a.addEventListener = function(a, b, d, e, f) {
            void 0 === e && (e = !1), void 0 === f && (f = 0), c.addEventListener(a, b, d, e, f)
        }, a.removeEventListener = function(a, b, d, e) {
            void 0 === e && (e = !1), c.removeEventListener(a, b, d, e)
        }, b = function(b) {
            function c() {
                b.call(this), this.analyzerDic = {}, this.configItemList = [], this.configComplete = this.callLaterFlag = !1, this.loadedGroups = [], this.groupNameList = [], this.asyncDic = {}, this.init()
            }
            return __extends(c, b), c.prototype.getAnalyzerByType = function(b) {
                var c = this.analyzerDic[b];
                return c || (c = this.analyzerDic[b] = egret.Injector.getInstance(a.AnalyzerBase, b)), c
            }, c.prototype.init = function() {
                egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(a.AnalyzerBase, a.BinAnalyzer, a.ResourceItem.TYPE_BIN), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(a.AnalyzerBase, a.ImageAnalyzer, a.ResourceItem.TYPE_IMAGE), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(a.AnalyzerBase, a.TextAnalyzer, a.ResourceItem.TYPE_TEXT), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(a.AnalyzerBase, a.JsonAnalyzer, a.ResourceItem.TYPE_JSON), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(a.AnalyzerBase, a.SheetAnalyzer, a.ResourceItem.TYPE_SHEET), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(a.AnalyzerBase, a.FontAnalyzer, a.ResourceItem.TYPE_FONT), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(a.AnalyzerBase, a.SoundAnalyzer, a.ResourceItem.TYPE_SOUND), egret.Injector.hasMapRule(a.AnalyzerBase, a.ResourceItem.TYPE_XML) || egret.Injector.mapClass(a.AnalyzerBase, a.XMLAnalyzer, a.ResourceItem.TYPE_XML), this.resConfig = new a.ResourceConfig, this.resLoader = new a.ResourceLoader, this.resLoader.callBack = this.onResourceItemComp, this.resLoader.resInstance = this, this.resLoader.addEventListener(a.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this), this.resLoader.addEventListener(a.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
            }, c.prototype.loadConfig = function(a, b, c) {
                void 0 === c && (c = "json"), this.configItemList.push({
                    url: a,
                    resourceRoot: b,
                    type: c
                }), this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
            }, c.prototype.startLoadConfig = function() {
                var b, d, e, f, g;
                for (this.callLaterFlag = !1, b = this.configItemList, this.configItemList = [], this.loadingConfigList = b, d = b.length, e = [], f = 0; d > f; f++) g = b[f], g = new a.ResourceItem(g.url, g.url, g.type), e.push(g);
                this.resLoader.loadGroup(e, c.GROUP_CONFIG, Number.MAX_VALUE)
            }, c.prototype.isGroupLoaded = function(a) {
                return -1 != this.loadedGroups.indexOf(a)
            }, c.prototype.getGroupByName = function(a) {
                return this.resConfig.getGroupByName(a)
            }, c.prototype.loadGroup = function(b, c) {
                if (void 0 === c && (c = 0), -1 != this.loadedGroups.indexOf(b)) a.ResourceEvent.dispatchResourceEvent(this, a.ResourceEvent.GROUP_COMPLETE, b);
                else if (!this.resLoader.isGroupInLoading(b))
                    if (this.configComplete) {
                        var d = this.resConfig.getGroupByName(b);
                        this.resLoader.loadGroup(d, b, c)
                    } else this.groupNameList.push({
                        name: b,
                        priority: c
                    })
            }, c.prototype.createGroup = function(a, b, c) {
                if (void 0 === c && (c = !1), c) {
                    var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
                }
                return this.resConfig.createGroup(a, b, c)
            }, c.prototype.onGroupComp = function(b) {
                var d, e, f, g;
                if (b.groupName == c.GROUP_CONFIG) {
                    for (b = this.loadingConfigList.length, d = 0; b > d; d++) e = this.loadingConfigList[d], f = this.getAnalyzerByType(e.type), g = f.getRes(e.url), f.destroyRes(e.url), this.resConfig.parseConfig(g, e.resourceRoot);
                    this.configComplete = !0, this.loadingConfigList = null, a.ResourceEvent.dispatchResourceEvent(this, a.ResourceEvent.CONFIG_COMPLETE), this.loadDelayGroups()
                } else this.loadedGroups.push(b.groupName), this.dispatchEvent(b)
            }, c.prototype.loadDelayGroups = function() {
                var b, c, d, a = this.groupNameList;
                for (this.groupNameList = [], b = a.length, c = 0; b > c; c++) d = a[c], this.loadGroup(d.name, d.priority)
            }, c.prototype.onGroupError = function(b) {
                b.groupName == c.GROUP_CONFIG ? (this.loadingConfigList = null, a.ResourceEvent.dispatchResourceEvent(this, a.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(b)
            }, c.prototype.hasRes = function(b) {
                var c = this.resConfig.getType(b);
                return "" == c && (b = a.AnalyzerBase.getStringPrefix(b), c = this.resConfig.getType(b), "" == c) ? !1 : !0
            }, c.prototype.parseConfig = function(a, b) {
                this.resConfig.parseConfig(a, b), this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
            }, c.prototype.getRes = function(b) {
                var c = this.resConfig.getType(b);
                return "" == c && (c = a.AnalyzerBase.getStringPrefix(b), c = this.resConfig.getType(c), "" == c) ? null : this.getAnalyzerByType(c).getRes(b)
            }, c.prototype.getResAsync = function(b, c, d) {
                var e = this.resConfig.getType(b),
                    f = this.resConfig.getName(b);
                return "" == e && (f = a.AnalyzerBase.getStringPrefix(b), e = this.resConfig.getType(f), "" == e) ? void c.call(d, null) : void((e = this.getAnalyzerByType(e).getRes(b)) ? c.call(d, e) : (b = {
                    key: b,
                    compFunc: c,
                    thisObject: d
                }, this.asyncDic[f] ? this.asyncDic[f].push(b) : (this.asyncDic[f] = [b], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f))))
            }, c.prototype.getResByUrl = function(b, c, d, e) {
                if (void 0 === e && (e = ""), b) {
                    e || (e = this.getTypeByUrl(b));
                    var f = this.getAnalyzerByType(e).getRes(b);
                    f ? c.call(d, f) : (c = {
                        key: b,
                        compFunc: c,
                        thisObject: d
                    }, this.asyncDic[b] ? this.asyncDic[b].push(c) : (this.asyncDic[b] = [c], b = new a.ResourceItem(b, b, e), this.resLoader.loadItem(b)))
                } else c.call(d, null)
            }, c.prototype.getTypeByUrl = function(b) {
                switch ((b = b.substr(b.lastIndexOf(".") + 1)) && (b = b.toLowerCase()), b) {
                    case a.ResourceItem.TYPE_XML:
                    case a.ResourceItem.TYPE_JSON:
                    case a.ResourceItem.TYPE_SHEET:
                        break;
                    case "png":
                    case "jpg":
                    case "gif":
                    case "jpeg":
                    case "bmp":
                        b = a.ResourceItem.TYPE_IMAGE;
                        break;
                    case "fnt":
                        b = a.ResourceItem.TYPE_FONT;
                        break;
                    case "txt":
                        b = a.ResourceItem.TYPE_TEXT;
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
                        b = a.ResourceItem.TYPE_SOUND;
                        break;
                    default:
                        b = a.ResourceItem.TYPE_BIN
                }
                return b
            }, c.prototype.onResourceItemComp = function(a) {
                var c, d, e, f, b = this.asyncDic[a.name];
                for (delete this.asyncDic[a.name], a = this.getAnalyzerByType(a.type), c = b.length, d = 0; c > d; d++) e = b[d], f = a.getRes(e.key), e.compFunc.call(e.thisObject, f, e.key)
            }, c.prototype.destroyRes = function(a) {
                var c, d, e, b = this.resConfig.getRawGroupByName(a);
                if (b) {
                    for (c = this.loadedGroups.indexOf(a), -1 != c && this.loadedGroups.splice(c, 1), a = b.length, d = 0; a > d; d++) c = b[d], c.loaded = !1, e = this.getAnalyzerByType(c.type), e.destroyRes(c.name);
                    return !0
                }
                return b = this.resConfig.getType(a), "" == b ? !1 : (c = this.resConfig.getRawResourceItem(a), c.loaded = !1, e = this.getAnalyzerByType(b), e.destroyRes(a))
            }, c.prototype.setMaxLoadingThread = function(a) {
                1 > a && (a = 1), this.resLoader.thread = a
            }, c.GROUP_CONFIG = "RES__CONFIG", c
        }(egret.EventDispatcher), b.prototype.__class__ = "RES.Resource", c = new b
    }(RES || (RES = {})), ! function(a) {
        a = a.Data || (a.Data = {}), a.GameMain, a.StageWidth, a.StageHeight, a.DesginWidth, a.DesginHeight
    }(Fw || (Fw = {})),
    function(a) {
        ! function(a) {
            a.createBitmap = function(a, b, c) {
                return void 0 === c && (c = !1), a = new egret.Bitmap, a.texture = RES.getRes(b), a.name = b, a.touchEnabled = c, a
            }, a.drawRectangular = function(a, b, c, d, e, f, g, h, i, j, k) {
                return void 0 === i && (i = null), void 0 === j && (j = null), void 0 === k && (k = null), a = new egret.Shape, a.graphics.beginFill(f, g), h ? a.graphics.drawRoundRect(b, c, d, e, h, h) : a.graphics.drawRect(b, c, d, e), i && a.graphics.lineStyle(j, i, k), a.graphics.endFill(), a
            }, a.drawCircle = function(a, b, c, d, e, f, g, h, i) {
                return void 0 === g && (g = null), void 0 === h && (h = null), void 0 === i && (i = null), a = new egret.Shape, a.graphics.beginFill(e, f), a.graphics.drawCircle(b, c, d), g && a.graphics.lineStyle(h, g, i), a.graphics.endFill(), a
            }, a.FPS_SHOW = function() {
                egret.Profiler.getInstance().run()
            }, a.Drive = function() {
                for (var a = navigator.userAgent.toString(), b = "PC", c = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, e = 0; e < c.length; e++)
                    if (0 < a.indexOf(c[e])) {
                        d = !1, b = c[e];
                        break
                    }
                return c = !1, "MicroMessenger" == a.match(/MicroMessenger/i) && (c = !0), {
                    isPC: d,
                    isWX: c,
                    DeviceType: b
                }
            }, a.createSound = function(a, b) {
                return new egret.Sound, a = RES.getRes(b)
            }, a.createTextLabel = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
                return void 0 === b && (b = 0), void 0 === c && (c = "left"), void 0 === d && (d = "none"), void 0 === e && (e = 14), void 0 === f && (f = 0), void 0 === g && (g = 0), void 0 === h && (h = 0), void 0 === i && (i = 0), void 0 === j && (j = 0), void 0 === k && (k = 0), void 0 === l && (l = 0), void 0 === m && (m = 0), a = new egret.TextField, a.textColor = b, a.textAlign = c, a.text = d, a.size = e, 0 != f && (a.width = f), 0 != g && (a.height = g), 0 != h && 0 != i && (a.strokeColor = h, a.stroke = i), a.rotation = l, 0 != m && (a.skewX = m), a.x = j, a.y = k, a
            }, a.GET = function(a) {
                return a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), a = location.search.substr(1).match(a), null != a ? decodeURI(decodeURIComponent(decodeURI(a[2]))) : null
            }, a.localStorage = function(a, b, c) {
                switch (void 0 === b && (b = "StorageInit"), void 0 === c && (c = ""), a) {
                    case "read":
                        return egret.localStorage.getItem(b);
                    case "write":
                        return egret.localStorage.setItem(b, c), !0;
                    case "delete":
                        return egret.localStorage.removeItem(b), !0;
                    case "clear":
                        return egret.localStorage.clear(), !0;
                    default:
                        return !1
                }
            }, a.getbodybackground = function() {
                return document.body.style.background
            }, a.setbodybackground = function(a) {
                document.body.style.background = a
            }, a.URLEncode = function(a) {
                var d, e, b = "",
                    c = 0;
                for (a = a.toString(), d = /(^[a-zA-Z0-9-_.]*)/; c < a.length;) e = d.exec(a.substr(c)), null != e && 1 < e.length && "" != e[1] ? (b += e[1], c += e[1].length) : (" " == a.substr(c, 1) ? b += "+" : (e = a.charCodeAt(c).toString(16), b += "%" + (2 > e.length ? "0" : "") + e.toUpperCase()), c++);
                return b
            }
        }(a.tools || (a.tools = {}))
    }(Fw || (Fw = {})),
    function(a) {
        ! function(b) {
            b.StageAlign = function(b, c) {
                var d = b.anchorX,
                    e = b.anchorY,
                    f = Math.abs(b.scaleX),
                    g = b.scaleY,
                    h = c.offsetX ? c.offsetX : 0,
                    i = c.offsetY ? c.offsetY : 0;
                c.left && (b.x = b.width * d + h), c.right && (b.x = a.Data.StageWidth - b.width + b.width * d * f + b.width * (1 - f) + h), c.top && (b.y = b.height * e + i), c.bottom && (b.y = a.Data.StageHeight - b.height + b.height * (1 - g) + b.height * g * e + i), c.centerX && (b.x = (a.Data.StageWidth - b.width) / 2 + b.width * (1 - f) / 2 + b.width * f * d + h), c.centerY && (b.y = (a.Data.StageHeight - b.height) / 2 + b.height * (1 - g) / 2 + b.height * g * e + i)
            }, b.RelativeAlign = function(a, b, c) {
                var d = a.x - a.width * Math.abs(a.scaleX) * a.anchorX,
                    e = a.y - a.height * Math.abs(a.scaleY) * a.anchorY,
                    f = b.anchorX,
                    g = b.anchorY,
                    h = Math.abs(b.scaleX),
                    i = b.scaleY,
                    j = c.offsetX ? c.offsetX : 0,
                    k = c.offsetY ? c.offsetY : 0;
                c.left && (b.x = d + b.width * f + j), c.right && (b.x = d + a.width - b.width + b.width * f * h + b.width * (1 - h) + j), c.top && (b.y = e + b.height * b.scaleY * g + k), c.bottom && (b.y = e + a.height - b.height * b.scaleY + b.height * b.scaleY * b.anchorY), c.centerX && (b.x = d + (a.width * Math.abs(h) - Math.abs(b.width * b.scaleX)) / 2 + b.width * b.scaleX * b.anchorX), c.centerY && (b.y = e + (a.height * Math.abs(i) - Math.abs(b.height * b.scaleY)) / 2 + b.height * b.scaleY * b.anchorY)
            }, b.percent_Y = function(b) {
                return b / a.Data.DesginHeight * a.Data.StageHeight
            }, b.percent_X = function(b) {
                return b / a.Data.DesginWidth * a.Data.StageWidth
            }, b.Scale = function() {
                var b = 0,
                    b = a.Data.StageHeight / a.Data.DesginHeight;
                return 1 >= b ? b : 1
            }, b.setScale = function(b, c, d) {
                void 0 === c && (c = a.L_Positioning.Scale()), void 0 === d && (d = a.L_Positioning.Scale()), b.scaleX = c, b.scaleY = d
            }
        }(a.L_Positioning || (a.L_Positioning = {}))
    }(Fw || (Fw = {})), GameData = function() {
        function a() {}
        return a.getNeed = function(a) {
            return 6 > a ? 19 : a > 5 && 12 > a ? 59 : a >= 12 && 17 > a ? 102 : a >= 17 && 20 >= a ? 122 : a > 20 && 25 > a ? 161 : 206
        }, a.save = function() {
            Fw.tools.localStorage("write", "a0c4d2a2c12CDC0ZZAF2SDFFglod", a.glod.toString()), Fw.tools.localStorage("write", "a0c4d2a2c12CDC0ZZAF2SDFFscore", a.score.toString()), Fw.tools.localStorage("write", "a0c4d2a2c12CDC0ZZAF2SDFFlevelLock", a.levelLock.toString())
        }, a.read = function() {
            var c, b = Fw.tools.localStorage("read", "a0c4d2a2c12CDC0ZZAF2SDFFglod");
            if (null != b && (a.glod = Number(b)), b = Fw.tools.localStorage("read", "a0c4d2a2c12CDC0ZZAF2SDFFscore"), null != b && (a.score = Number(b)), b = Fw.tools.localStorage("read", "a0c4d2a2c12CDC0ZZAF2SDFFlevelLock"), null != b)
                for (b = b.split(","), c = 0; c < b.length; c++) a.levelLock[c] = Number(b[c])
        }, a.resultRotation = function(a) {
            360 < a.rotation ? a.rotation -= 360 : 0 > a.rotation && (a.rotation = 360 + a.rotation)
        }, a.setRotation = function(a) {
            return a > 360 ? a -= 360 : 0 > a && (a = 360 + a), a
        }, a.RotationChange = function(a, b, c) {
            var e, d = [];
            for (console.log(a, b), a = this.setRotation(a), b = this.setRotation(b), 0 > b - c ? (e = b - c, d.push(new egret.Point(360 + e, 360)), d.push(new egret.Point(0, c + e))) : d.push(new egret.Point(b - c, b)), b + c > 360 ? (b = b + c - 360, d.push(new egret.Point(360 - b, 360)), d.push(new egret.Point(0, c - b))) : d.push(new egret.Point(b, b + c)), c = 0; c < d.length; c++)
                if (a >= d[c].x && a <= d[c].y) return !0;
            return !1
        }, a.language = ["Use", "Skip level", "You need more diamonds", "Get them for free"], a.levelLock = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], a.isSound = !0, a.moregamesUrl = "", a.glod = 0, a.score = 0, a.yY = 180, a.addGlod = 10, a
    }(), GameData.prototype.__class__ = "GameData", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, Drag = function(a) {
        function b() {
            a.call(this), this.offsetY = this.offsetX = 0, this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        return __extends(b, a), b.prototype.onAddToStage = function() {}, b.prototype.start = function(a, b, c) {
            void 0 === b && (b = 0), void 0 === c && (c = 0), this.offsetX = b, this.offsetY = c, this.dragObject = a, this.dragObject.touchEnabled = !0, this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this)
        }, b.prototype.onTouchEend = function() {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this)
        }, b.prototype.onTouchBegin = function() {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this)
        }, b.prototype.onTouchMove = function(a) {
            this.dragObject ? (this.dragObject.x = a.stageX - this.dragObject.width * this.dragObject.scaleX / 2 - this.dragObject.anchorX * this.dragObject.width * this.dragObject.scaleX + this.offsetX, this.dragObject.y = a.stageY - this.dragObject.height * this.dragObject.scaleY / 2 + this.dragObject.anchorY * this.dragObject.height * this.dragObject.scaleY + this.offsetY) : this.stop()
        }, b.prototype.stop = function() {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this), this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        }, b
    }(egret.Sprite), Drag.prototype.__class__ = "Drag", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, L_StateButton = function(a) {
        function b(b) {
            var c, d;
            for (a.call(this), this.list = [], c = this.currentState = 0; c < b.length; c++) d = Fw.tools.createBitmap(d, b[c]), this.addChild(d), d.visible = !1, this.list.push(d);
            this.list[0].visible = !0
        }
        return __extends(b, a), Object.defineProperty(b.prototype, "changeState", {
            get: function() {
                return this.currentState
            },
            set: function(a) {
                this.change(a)
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.change = function(a) {
            for (var b = 0; b < this.list.length; b++) this.list[b].visible = a == b ? !0 : !1;
            this.currentState = a
        }, b
    }(egret.Sprite), L_StateButton.prototype.__class__ = "L_StateButton", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, glodAnimation = function(a) {
        function b() {
            a.call(this), this.ViewFx = Fw.tools.createBitmap(this.ViewFx, "ViewFx"), this.addChild(this.ViewFx);
            var b;
            b = Fw.tools.createBitmap(b, "glod"), this.addChild(b), Fw.L_Positioning.RelativeAlign(this.ViewFx, b, {
                centerX: !0,
                centerY: !0
            })
        }
        return __extends(b, a), b
    }(egret.Sprite), glodAnimation.prototype.__class__ = "glodAnimation", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, levellistbar = function(a) {
        function b(b, c) {
            a.call(this), this.state = 0, this.txtColor = [6061713, 9646763, 13867010], this.touchEnabled = !0, this.name = "levelBox_" + c.toString(), this.state = b, this.bg = Fw.tools.createBitmap(this.bg, "icon_" + b.toString()), this.addChild(this.bg), this.txt = Fw.tools.createTextLabel(this.txt, this.txtColor[this.state], "center", c.toString(), 40, this.bg.width), this.addChild(this.txt), Fw.L_Positioning.RelativeAlign(this.bg, this.txt, {
                centerX: !0,
                centerY: !0,
                offsetX: -4
            })
        }
        return __extends(b, a), b.prototype.change = function(a) {
            this.removeChild(this.bg), this.state = a, this.bg = Fw.tools.createBitmap(this.bg, "icon_" + a.toString()), this.addChild(this.bg), this.addChildAt(this.txt, this.numChildren - 1), this.txt.textColor = this.txtColor[this.state]
        }, b
    }(egret.Sprite), levellistbar.prototype.__class__ = "levellistbar", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, Game = function(a) {
        function b() {
            a.call(this), this.currentLvel = -1, this.endNum = 0, this.levelContainer = [null, new level_1, new level_2, new level_7, new level_8, new level_3, new level_9, new level_10, new level_4, new level_13, new level_14, new level_19, new level_5, new level_20, new level_15, new level_16, new level_21, new level_22, new level_6, new level_11, new level_18, new level_12, new level_23, new level_24, new level_25, new level_26, new level_17, new level_27, new level_28, new level_29, new level_30], b._This = this, this.out = new outlevel, this.getad = new getAd, this.getend = new getEnd, this.getad.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGetAD, this), this.out.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onOutTap, this), this.getend.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onEndTap, this), b.GameEnterFrame.addEventListener(egret.TimerEvent.TIMER, this.onGameEnterFrame, this)
        }
        return __extends(b, a), b.prototype.start = function(a) {
            SG_Hooks.start(), this.currentLvel = a, this.addChild(this.levelContainer[this.currentLvel]), this.levelContainer[this.currentLvel].start(), this.levelContainer[this.currentLvel].addEventListener("gamewin", this.gamewin, this), this.levelContainer[this.currentLvel].addEventListener("gamelose", this.gamelose, this)
        }, b.prototype.gamewin = function(a) {
            UI._This.addChild(UI._This.bg), UI._This.addChild(UI._This.vwin), UI._This.vwin.add(), a = 0, 1 == GameData.levelLock[this.currentLvel - 1] && (a = this.levelContainer[this.currentLvel].cNum + 1), GameData.levelLock[this.currentLvel - 1] = 2, 0 == GameData.levelLock[this.currentLvel] && (GameData.levelLock[this.currentLvel] = 1), UI._This.vwin.glodTxt.text = "+" + a.toString(), GameData.glod += a, console.log(a), console.log("当前关数：" + this.currentLvel + ",本关获得：" + a + ",当前金币共：" + GameData.glod), this.endNum = 0, UI._This.TopBar.change(), GameData.save()/*, updateShare(this.currentLvel, GameData.glod)*///, Play68.setRankingLevelScoreDesc(this.currentLvel, GameData.glod)
        }, b.prototype.gamelose = function(a) {
            if (void 0 === a && (a = null), 5 <= this.endNum && 0 == GameData.levelLock[this.currentLvel] && SG_Hooks.isEnabledIncentiviseButton()) {
                this.endNum = 0;
                var c;
                c = Fw.tools.drawRectangular(c, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, 16777215, 0), c.alpha = .5, c.touchEnabled = !0, this.stage.addChild(c), egret.Tween.get(c).to({
                    alpha: 0
                }, 1e3).call(function() {
                    b._This.stage.addChild(b._This.out), b._This.out.anchorX = b._This.out.anchorY = .5, Fw.L_Positioning.StageAlign(b._This.out, {
                        centerX: !0,
                        centerY: !0
                    }), b._This.out.scaleX = b._This.out.scaleY = .5, b._This.out.alpha = 0;
                    var a = GameData.getNeed(b._This.currentLvel);
                    b._This.out.init(GameData.language[0], "X" + a.toString(), GameData.language[1]), egret.Tween.get(b._This.out).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 150), b._This.stage.removeChild(c)
                })
            } else this.endNum += 1, UI._This.addChild(UI._This.bg), UI._This.addChild(UI._This.vlose), UI._This.vlose.add()
        }, b.prototype.onOutTap = function(a) {
            var c, d, e;
            UI._This.isStop || ("toOutLevel_yes" == a.target.name ? GameData.glod >= GameData.getNeed(this.currentLvel) ? (GameData.glod -= GameData.getNeed(this.currentLvel), GameData.save(), UI._This.TopBar.change(), this.stage.removeChild(this.out), 30 > this.currentLvel ? (c = Fw.tools.createBitmap(c, "outlevelbar"), this.addChild(c), Fw.L_Positioning.StageAlign(c, {
                centerX: !0,
                centerY: !0,
                offsetY: -50
            }), d = Fw.tools.createTextLabel(d, 16777215, "center", (this.currentLvel + 1).toString(), 36, 80), this.addChild(d), d.x = 435, Fw.L_Positioning.RelativeAlign(c, d, {
                centerY: !0
            }), e = Fw.tools.createBitmap(e, "nextLevelBtn"), e.scaleX = e.scaleY = .8, this.addChild(e), e.x = 122, e.y = c.y + 22, egret.Tween.get(e).to({
                x: 340
            }, 1e3).call(function() {
                b._This.removeChild(c), b._This.removeChild(d), b._This.removeChild(e), GameData.levelLock[b._This.currentLvel] = 1, b._This.nextLevel(), GameData.save()
            })) : UI._This.endlevel()) : (this.stage.addChild(this.getad), this.getad.init(GameData.language[2] + "，\n" + GameData.language[3]), this.getad.anchorX = this.getad.anchorY = .5, Fw.L_Positioning.StageAlign(this.getad, {
                centerX: !0,
                centerY: !0
            }), this.getad.scaleX = this.getad.scaleY = .5, this.getad.alpha = 0, egret.Tween.get(this.getad).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 150)) : "toOutLevel_no" == a.target.name && (this.stage.removeChild(this.out), this.gamelose(null)))
        }, b.prototype.onGetAD = function(a) {
            "getAd_yes" == a.target.name ? SG_Hooks.triggerIncentivise(b.LookAdEnd) : "getAd_no" == a.target.name && this.stage.removeChild(this.getad)
        }, b.LookAdEnd = function() {
            b._This.stage.addChild(b._This.getend), egret.Tween.get(b._This.getend).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 150), b._This.getend.anchorX = b._This.getend.anchorY = .5, Fw.L_Positioning.StageAlign(b._This.getend, {
                centerX: !0,
                centerY: !0
            }), b._This.getend.init("+" + GameData.addGlod.toString())
        }, b.prototype.onEndTap = function() {
            var a, c = new glodAnimation;
            a = Fw.tools.drawRectangular(a, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, 0, .5), a.touchEnabled = !0, b._This.stage.addChild(a), b._This.stage.addChild(c), c.anchorX = c.anchorY = .5, Fw.L_Positioning.StageAlign(c, {
                centerX: !0,
                centerY: !0
            }), egret.Tween.get(c).to({
                y: 60,
                x: 150
            }, 2e3).call(function() {
                GameData.glod += GameData.addGlod, UI._This.TopBar.change(), b._This.getend.alpha = 0, GameData.save(), b._This.stage.removeChild(a), b._This.stage.removeChild(c), b._This.stage.removeChild(b._This.getend), b._This.stage.removeChild(b._This.getad)
            })
        }, b.prototype.remove = function() {
            this.removeChild(this.levelContainer[this.currentLvel])
        }, b.prototype.stop = function() {
            this.levelContainer[this.currentLvel].stop()
        }, b.prototype.next = function() {
            this.levelContainer[this.currentLvel].next()
        }, b.prototype.nextLevel = function() {
            this.removeChild(this.levelContainer[this.currentLvel]), this.currentLvel += 1, UI._This.TopBar.levelTxt.text = this.currentLvel.toString(), this.start(this.currentLvel)
        }, b.prototype.rstart = function() {
            this.start(this.currentLvel)
        }, b.prototype.onGameEnterFrame = function() {
            UI._This.isStop || this.levelContainer[this.currentLvel].enterFrame()
        }, b.GameEnterFrame = new egret.Timer(1e3 / 60), b
    }(egret.Sprite), Game.prototype.__class__ = "Game", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, GameBGView = function(a) {
        function b(b) {
            var c, d;
            switch (void 0 === b && (b = 1), a.call(this), this.currentNum = 0, this.list = [], c = Fw.tools.createBitmap(c, "gamecontainer"), this.addChild(c), this.currentNum = b, b) {
                case 1:
                    d = Fw.tools.createBitmap(d, "numPoint"), this.addChild(d), Fw.L_Positioning.RelativeAlign(c, d, {
                        centerX: !0
                    }), d.y = 295, this.list.push(d);
                    break;
                case 2:
                    d = Fw.tools.createBitmap(d, "numPoint"), this.addChild(d), Fw.L_Positioning.RelativeAlign(c, d, {
                        centerX: !0
                    }), d.x -= d.width, d.y = 295, this.list.push(d), d = Fw.tools.createBitmap(d, "numPoint"), this.addChild(d), Fw.L_Positioning.RelativeAlign(c, d, {
                        centerX: !0
                    }), d.x += d.width, d.y = 295, this.list.push(d);
                    break;
                case 3:
                    for (b = 0; 3 > b; b++) d = Fw.tools.createBitmap(d, "numPoint"), this.addChild(d), this.list.push(d), d.y = 295;
                    Fw.L_Positioning.RelativeAlign(c, this.list[1], {
                        centerX: !0
                    }), this.list[0].x = this.list[1].x - this.list[1].width, this.list[2].x = this.list[1].x + this.list[1].width;
                    break;
                case 4:
                    for (b = 0; 4 > b; b++) d = Fw.tools.createBitmap(d, "numPoint"), this.addChild(d), d.y = 295, d.x = 70 + 45 * b, this.list.push(d)
            }
        }
        return __extends(b, a), b.prototype.init = function() {
            for (var a = 0; a < this.list.length; a++) this.list[a].visible = !0;
            this.currentNum = this.list.length
        }, b.prototype.remove = function() {
            return 0 < this.currentNum - 1 ? (this.list[this.currentNum - 1].visible = !1, this.currentNum -= 1, !0) : this.list[0].visible = !1
        }, b
    }(egret.Sprite), GameBGView.prototype.__class__ = "GameBGView", Methods = function() {
        function a() {}
        return a.init = function(b) {
            a.stage = b, a.drag = new Drag, b.addChild(a.drag)
        }, a
    }(), Methods.prototype.__class__ = "Methods", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, getAd = function(a) {
        function b() {
            var b, c, d, e, f;
            a.call(this), this.textColor = 12040887, b = Fw.tools.createBitmap(b, "bg", !0), b.touchEnabled = !0, b.alpha = 0, this.addChild(b), c = Fw.tools.createBitmap(c, "cloud"), Fw.L_Positioning.StageAlign(c, {
                centerX: !0
            }), c.y = 330, this.addChild(c), d = Fw.tools.createBitmap(d, "movie"), this.addChild(d), d.x = 160, d.y = c.y + 55, this.txt = Fw.tools.createTextLabel(this.txt, this.textColor, "center", "需要更多钻石，\n免费获取？", 24, 212, 120), this.addChild(this.txt), this.txt.x = 220, this.txt.y = c.y + 41, e = Fw.tools.createBitmap(e, "yes", !0), e.name = "getAd_yes", this.addChild(e), e.x = 200, e.y = 480, e.touchEnabled = !0, f = Fw.tools.createBitmap(f, "no", !0), f.name = "getAd_no", this.addChild(f), f.touchEnabled = !0, f.x = 380, f.y = 480
        }
        return __extends(b, a), b.prototype.init = function(a) {
            this.txt.text = a
        }, b
    }(egret.Sprite), getAd.prototype.__class__ = "getAd", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, getEnd = function(a) {
        function b() {
            var b, c, d, e, f;
            a.call(this), this.textColor = 16736513, b = Fw.tools.createBitmap(b, "bg", !0), b.touchEnabled = !0, b.alpha = 0, this.addChild(b), c = Fw.tools.createBitmap(c, "cloud"), Fw.L_Positioning.StageAlign(c, {
                centerX: !0
            }), c.y = 330, this.addChild(c), d = Fw.tools.createBitmap(d, "ViewFx"), this.addChild(d), d.x = 160, d.y = c.y + 10, e = Fw.tools.createBitmap(e, "glod"), Fw.L_Positioning.RelativeAlign(d, e, {
                centerX: !0,
                centerY: !0
            }), this.addChild(e), this.txt = Fw.tools.createTextLabel(this.txt, this.textColor, "left", "+10", 60, 120, 60), this.addChild(this.txt), this.txt.x = 290, this.txt.y = c.y + 56, f = Fw.tools.createBitmap(f, "yes", !0), f.name = "getEnd_yes", this.addChild(f), Fw.L_Positioning.RelativeAlign(c, f, {
                centerX: !0
            }), f.y = 480
        }
        return __extends(b, a), b.prototype.init = function(a) {
            this.txt.text = a
        }, b
    }(egret.Sprite), getEnd.prototype.__class__ = "getEnd", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, overPlan = function(a) {
        function b() {
            var b, c, d;
            a.call(this), this.p = new egret.Sprite, b = Fw.tools.createBitmap(b, "overPlan"), this.p.addChild(b), c = Fw.tools.createBitmap(c, "levelMenuBtn", !0), c.name = "levelMenuBtn_lose", this.p.addChild(c), c.x = 145, c.y = 160, d = Fw.tools.createBitmap(d, "RstartBtn", !0), this.p.addChild(d), d.name = "RstartBtn_lose", d.x = 285, d.y = 160
        }
        return __extends(b, a), b.prototype.add = function() {
            this.addChild(this.p), Fw.L_Positioning.StageAlign(this.p, {
                centerX: !0
            }), this.p.y = -this.p.height, egret.Tween.get(this.p).wait(1e3).to({
                y: 250
            }, 200)
        }, b.prototype.remove = function(a) {
            var b = this;
            egret.Tween.get(this.p).to({
                y: -b.p.height
            }, 200).call(function() {
                b.removeChild(b.p), a()
            })
        }, b
    }(egret.Sprite), overPlan.prototype.__class__ = "overPlan", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, stopPlan = function(a) {
        function b() {
            var b, c, d, e;
            a.call(this), this.p = new egret.Sprite, b = Fw.tools.createBitmap(b, "stopPlan"), this.p.addChild(b), c = Fw.tools.createBitmap(c, "NextBtn", !0), this.p.addChild(c), c.y = 35, c.x = 142, d = Fw.tools.createBitmap(d, "RstartBtn", !0), this.p.addChild(d), d.x = 248, d.y = 35, e = Fw.tools.createBitmap(e, "levelMenuBtn", !0), this.p.addChild(e), e.x = 34, e.y = 35, this.soundBtn = new L_StateButton(["soundPlay", "soundStop"]), this.soundBtn.touchEnabled = !0, this.soundBtn.name = "soundbtn", this.p.addChild(this.soundBtn), this.soundBtn.y = 16, this.soundBtn.x = 332
        }
        return __extends(b, a), b.prototype.add = function() {
            this.soundBtn.changeState = GameData.isSound ? 0 : 1, this.addChild(this.p), Fw.L_Positioning.StageAlign(this.p, {
                centerX: !0
            }), this.p.y = -this.p.height, egret.Tween.get(this.p).to({
                y: 300
            }, 200)
        }, b.prototype.remove = function(a) {
            var b = this;
            egret.Tween.get(this.p).to({
                y: -b.p.height
            }, 200).call(function() {
                b.removeChild(b.p), a()
            })
        }, b
    }(egret.Sprite), stopPlan.prototype.__class__ = "stopPlan", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, topbar = function(a) {
        function b() {
            a.call(this), this.glodBg = Fw.tools.createBitmap(this.glodBg, "glodbg"), this.addChild(this.glodBg), this.glodBg.x = 80, this.glodBg.y = 30, this.glodTxt = Fw.tools.createTextLabel(this.glodTxt, 16777215, "center", GameData.glod.toString(), 36, 100), this.addChild(this.glodTxt), this.glodAdd = Fw.tools.createBitmap(this.glodAdd, "glodaddbtn"), this.glodAdd.touchEnabled = !0, this.glodAdd.name = "glodadd", SG_Hooks.isEnabledIncentiviseButton() && this.addChild(this.glodAdd), this.glodAdd.x = this.glodBg.x, this.glodAdd.y = this.glodBg.y, this.glodTxt.x = this.glodBg.x + 62, Fw.L_Positioning.RelativeAlign(this.glodBg, this.glodTxt, {
                centerY: !0
            }), this.scoreBg = Fw.tools.createBitmap(this.scoreBg, "scorebg"), this.addChild(this.scoreBg), this.scoreTxt = Fw.tools.createTextLabel(this.scoreTxt, 16777215, "center", GameData.score.toString(), 36, 100), this.addChild(this.scoreTxt), this.scoreBg.x = 270, this.scoreBg.y = 30, this.scoreTxt.x = this.scoreBg.x + 62, Fw.L_Positioning.RelativeAlign(this.scoreBg, this.scoreTxt, {
                centerY: !0
            }), this.GameStop = Fw.tools.createBitmap(this.GameStop, "StopBtn", !0), this.addChild(this.GameStop), this.GameStop.x = 490, this.GameStop.y = 30, this.soundBtn = new L_StateButton(["soundPlay", "soundStop"]), this.soundBtn.touchEnabled = !0, this.soundBtn.name = "soundbtn", this.addChild(this.soundBtn), this.soundBtn.x = 440, this.soundBtn.y = 15, this.soundBtn.scaleX = this.soundBtn.scaleY = .85, this.retunIndex = Fw.tools.createBitmap(this.retunIndex, "returnIndex", !0), this.addChild(this.retunIndex), this.retunIndex.y = 30, this.retunIndex.scaleX = this.retunIndex.scaleY = .85, this.retunIndex.x = 550, this.levelBar = new egret.Sprite;
            var b;
            b = Fw.tools.createBitmap(b, "levelIcon"), this.levelBar.addChild(b), this.levelTxt = Fw.tools.createTextLabel(this.levelTxt, 16777215, "center", "0", 36, 72), this.levelBar.addChild(this.levelTxt), Fw.L_Positioning.RelativeAlign(b, this.levelTxt, {
                centerX: !0,
                centerY: !0
            }), this.addChild(this.levelBar), this.levelBar.x = 30, this.levelBar.y = 30
        }
        return __extends(b, a), b.prototype.stopBtnVisible = function(a) {
            this.GameStop.visible = a, this.retunIndex.visible = !a, this.soundBtn.visible = !a, (this.levelBar.visible = a) ? (this.scoreBg.x = 350, this.scoreTxt.x = this.scoreBg.x + 50, this.glodBg.x = 100) : (this.scoreBg.x = 270, this.scoreTxt.x = this.scoreBg.x + 50, this.glodBg.x = 20), this.glodTxt.x = this.glodBg.x + 62, this.glodAdd.x = this.glodBg.x, this.glodAdd.y = this.glodBg.y, this.soundBtn.changeState = GameData.isSound ? 0 : 1
        }, b.prototype.change = function() {
            this.glodTxt.text = GameData.glod.toString();
            for (var a = 0, b = 0; b < GameData.levelLock.length; b++) 2 == GameData.levelLock[b] && (a += 1);
            this.scoreTxt.text = a.toString(), GameData.score = a
        }, b
    }(egret.Sprite), topbar.prototype.__class__ = "topbar", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, v_selectLevel = function(a) {
        function b() {
            var b, c, d, e;
            for (a.call(this), this.levelList = [], this.pContainer = new egret.Sprite, this.maxWidth = Fw.Data.StageWidth - 120, b = 0, c = 0; 30 > c; c++) 0 == c % 5 && (b += 100), d = c % 5 * (this.maxWidth / 5), e = new levellistbar(GameData.levelLock[c], c + 1), this.pContainer.addChild(e), e.x = d, e.y = b + 100, this.levelList.push(e)
        }
        return __extends(b, a), b.prototype.init = function() {
            for (var a = 0; 30 > a; a++) GameData.levelLock[a] != this.levelList[a].state && this.levelList[a].change(GameData.levelLock[a])
        }, b.prototype.add = function() {
            this.init(), this.addChild(this.pContainer), this.pContainer.alpha = 1, this.pContainer.y = 20, this.pContainer.x = -this.pContainer.width, egret.Tween.get(this.pContainer).to({
                x: 70
            }, 200), console.log("rrun")
        }, b.prototype.remove = function(a) {
            var b = this;
            egret.Tween.get(this.pContainer).to({
                alpha: 0
            }, 300).call(function() {
                b.removeChild(b.pContainer), a()
            })
        }, b
    }(egret.Sprite), v_selectLevel.prototype.__class__ = "v_selectLevel", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, v_start = function(a) {
        function b() {
            a.call(this), this.logo = Fw.tools.createBitmap(this.logo, "logo"), this.startBtn = Fw.tools.createBitmap(this.startBtn, "startBtn", !0), this.fxBitmap = Fw.tools.createBitmap(this.fxBitmap, "ViewFx"), this.moregame = Fw.tools.createBitmap(this.moregame, "moregame", !0), this.moregame.scaleX = this.moregame.scaleY = .9, this.fxBitmap.anchorX = .5, this.fxBitmap.anchorY = .5, this.fxBitmap.width = this.fxBitmap.height = 1.5 * Fw.Data.StageWidth, this.soundbtn = new L_StateButton(["soundPlay", "soundStop"]), this.soundbtn.touchEnabled = !0, this.soundbtn.name = "soundbtn", this.addChild(this.soundbtn), this.soundbtn.x = 490, this.soundbtn.y = 0
        }
        return __extends(b, a), b.prototype.add = function() {
            this.soundbtn.changeState = GameData.isSound ? 0 : 1, this.addChild(this.logo), this.addChild(this.startBtn), this.addChild(this.moregame), this.soundbtn.visible = !0, Fw.L_Positioning.StageAlign(this.moregame, {
                centerX: !0
            }), console.log("this.run"), Fw.L_Positioning.StageAlign(this.logo, {
                centerX: !0
            }), this.logo.y = -this.logo.height, Fw.L_Positioning.StageAlign(this.startBtn, {
                centerX: !0
            }), this.startBtn.y = Fw.Data.StageHeight, egret.Tween.get(this.logo).to({
                y: 142
            }, 200), egret.Tween.get(this.startBtn).to({
                y: 550
            }, 200), egret.Tween.get(this.moregame).to({
                y: 700
            }, 200), this.addChild(this.fxBitmap);
            var a = this;
            setTimeout(function() {
                Fw.L_Positioning.RelativeAlign(a.startBtn, a.fxBitmap, {
                    centerX: !0,
                    centerY: !0
                }), a.addChildAt(a.startBtn, a.numChildren - 1), a.addChildAt(a.moregame, a.numChildren - 1), egret.Tween.get(a.fxBitmap, {
                    loop: !0
                }).to({
                    rotation: 360
                }, 2e3)
            }, 200)
        }, b.prototype.remove = function(a) {
            this.soundbtn.visible = !1;
            var b = this;
            egret.Tween.removeTweens(this.fxBitmap), this.removeChild(this.fxBitmap), egret.Tween.get(this.logo).to({
                y: -this.logo.height
            }, 200).call(function() {
                b.removeChild(b.logo)
            }), egret.Tween.get(this.moregame).to({
                y: Fw.Data.StageHeight
            }, 200).call(function() {
                b.removeChild(b.moregame)
            }), egret.Tween.get(this.startBtn).to({
                y: Fw.Data.StageHeight
            }, 200).call(function() {
                b.removeChild(b.startBtn), a()
            })
        }, b
    }(egret.Sprite), v_start.prototype.__class__ = "v_start", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, winPlan = function(a) {
        function b() {
            var b, c, d, e;
            a.call(this), this.p = new egret.Sprite, b = Fw.tools.createBitmap(b, "winPlan"), this.p.addChild(b), c = Fw.tools.createBitmap(c, "nextLevelBtn", !0), this.p.addChild(c), c.y = 246, c.x = 311, d = Fw.tools.createBitmap(d, "RstartBtn", !0), d.name = "RstartBtn_win", d.y = 246, d.x = 205, this.p.addChild(d), e = Fw.tools.createBitmap(e, "levelMenuBtn", !0), e.name = "levelMenuBtn_win", this.p.addChild(e), e.y = 246, e.x = 97, this.moregame = Fw.tools.createBitmap(this.moregame, "moregameMini", !0), this.moregame.name = "moregame", this.p.addChild(this.moregame), this.moregame.y = 246, this.moregame.x = 417, this.glodTxt = Fw.tools.createTextLabel(this.glodTxt, 16777215, "center", "00", 30, 110, 30), this.p.addChild(this.glodTxt), this.glodTxt.x = 250, this.glodTxt.y = 186
        }
        return __extends(b, a), b.prototype.add = function() {
            this.addChild(this.p), Fw.L_Positioning.StageAlign(this.p, {
                centerX: !0
            }), this.p.y = -this.p.height, egret.Tween.get(this.p).to({
                y: 200
            }, 200).wait(300)
        }, b.prototype.remove = function(a) {
            var b = this;
            egret.Tween.get(this.p).to({
                y: -b.p.height
            }, 200).call(function() {
                b.removeChild(b.p), a()
            })
        }, b
    }(egret.Sprite), winPlan.prototype.__class__ = "winPlan", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, help = function(a) {
        function b() {
            a.call(this), this.isDown = !1, this.timer = new egret.Timer(500), this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this), this.down = Fw.tools.createBitmap(this.down, "sdown"), this.addChild(this.down), this.down.visible = !1, this.up = Fw.tools.createBitmap(this.up, "sup"), this.addChild(this.up), this.timer.start()
        }
        return __extends(b, a), b.prototype.onTimer = function() {
            this.down.visible = !this.isDown, this.up.visible = this.isDown, this.isDown = !this.isDown
        }, b
    }(egret.Sprite), help.prototype.__class__ = "help", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, Container = function(a) {
        function b(b, c, d, e) {
            a.call(this), this.rotations = 0, this.speed = 4, this.isPlay = !0, this.bg = new GameBGView(b), this.addChild(this.bg), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, c, !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, d), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, e), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b
    }(egret.Sprite), Container.prototype.__class__ = "Container", settings = function() {
        function a() {}
        return a.level13_18 = {
            sy: 140,
            xy: 520
        }, a
    }(), settings.prototype.__class__ = "settings",
    function(a) {
        var b = function() {
            function b() {}
            return b.init = function(b, c, d) {
                a.Data.GameMain = b, a.Data.StageWidth = b.stage.stageWidth, a.Data.StageHeight = b.stage.stageHeight, a.Data.DesginWidth = c, a.Data.DesginHeight = d
            }, b
        }();
        a.Pretreatment = b, b.prototype.__class__ = "Fw.Pretreatment"
    }(Fw || (Fw = {})), __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, L_ScreenRotating = function(a) {
        function b(b, c, d) {
            a.call(this), this.isVertical = !0, this.showBackground = "#e0e0e0", this.showBackground_n = 14737632, this.bg = new egret.Shape, this.isStart = !1, this.timer = new egret.Timer(1e3), this.type = b, this.start = c, this.stop = d, this.isVertical = "vertical" == b, b += "Icon", this.bg = Fw.tools.drawRectangular(this.bg, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, this.showBackground_n, 1), this.bg.touchEnabled = !0, this.currentBackground = Fw.tools.getbodybackground(), this.icon = Fw.tools.createBitmap(this.icon, b), this.timer.addEventListener(egret.TimerEvent.TIMER, this.onFrame, this), this.timer.start()
        }
        return __extends(b, a), b.prototype.onFrame = function(a) {
            a = document.documentElement.clientWidth;
            var b = document.documentElement.clientHeight;
            this.isStart ? (this.isVertical && b > a && (this.changeImage(!1), this.timer.delay = 1e3, this.isStart = !1, this.stop()), !this.isVertical && a > b && (this.changeImage(!1), this.timer.delay = 1e3, this.isStart = !1, this.stop())) : this.isVertical ? a > b && (console.log("-----竖屏游戏旋转提示-----"), this.changeImage(!0), this.isStart = !0, this.timer.delay = 1e3 / 30, this.start()) : b > a && (console.log("-----横屏游戏旋转提示-----"), this.changeImage(!0), this.isStart = !0, this.timer.delay = 1e3 / 30, this.start())
        }, b.prototype.changeImage = function(a) {
            a ? (Methods.stage.addChild(this.bg), Methods.stage.addChild(this.icon), Fw.L_Positioning.StageAlign(this.icon, {
                centerX: !0,
                centerY: !0
            }), Fw.tools.setbodybackground(this.showBackground)) : (Methods.stage.removeChild(this.bg), Methods.stage.removeChild(this.icon), Fw.tools.setbodybackground(this.currentBackground))
        }, b
    }(egret.Sprite), L_ScreenRotating.prototype.__class__ = "L_ScreenRotating", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, UI = function(a) {
        function b() {
            a.call(this), this.sound = new egret.Sound, this.getad = new getAd, this.getend = new getEnd, this.isStop = this.adstart = this.gamestart = !1, b._This = this, this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchTap, this), this.vstart = new v_start, this.vselect = new v_selectLevel, this.TopBar = new topbar, this.game = new Game, this.vstop = new stopPlan, this.vwin = new winPlan, this.vlose = new overPlan, this.addChild(this.vstart), this.vstart.add(), this.isf = !1, this.sound = Fw.tools.createSound(this.sound, "sound");
            var c = this;
            musicFlag = null, getScope = function() {
                return c
            }, checkForSoundAndTurnOff = function() {
                c.sound.setVolume(0)
            }, turnSounddOnAgain = function() {
                c.sound.setVolume(1)
            }, window.onblur = function() {}, window.onfocus = function() {}, this.bg = Fw.tools.drawRectangular(this.bg, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, 16777215, .5), this.bg.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.endlevel = function() {
            b._This.game.remove(), b._This.removeChild(b._This.game), b._This.removeChild(b._This.bg), b._This.TopBar.stopBtnVisible(!1), b._This.addChild(b._This.vselect), b._This.vselect.add()
        }, b.prototype.gameStop = function() {
            b._This.isStop = !0
        }, b.prototype.gamenext = function() {
            b._This.isStop = !1
        }, b.prototype.onTouchTap = function(a) {
            var c, d, e, f;
            if (!b._This.isStop) {
                switch ("levelBox_" == String(a.target.name).substr(0, 9) && 0 < a.target.state && (c = a.target.name, d = Number(c.substr(9, c.length - 1)), console.log("用户选择了关卡进行游戏," + d.toString()), this.gamestart = !0, this.TopBar.levelTxt.text = d.toString(), this.vselect.remove(function() {
                    b._This.addChild(b._This.game), b._This.game.start(d), b._This.TopBar.stopBtnVisible(!0), SG_Hooks.start(), GameData.isSound && b._This.sound.play(!0)
                })), a.target.name) {
                    case "startBtn":
                        GameData.isSound && b._This.sound.play(!0), this.vstart.remove(function() {
                            b._This.removeChild(b._This.vstart), b._This.addChild(b._This.vselect), b._This.vselect.add(), b._This.addChild(b._This.TopBar), b._This.TopBar.stopBtnVisible(!1)
                        });
                        break;
                    case "StopBtn":
                        this.addChild(this.bg), this.addChild(this.vstop), this.vstop.add(), this.game.stop(), this.gamestart = !1;
                        break;
                    case "NextBtn":
                        this.vstop.remove(function() {
                            b._This.game.next(), b._This.removeChild(b._This.vstop), b._This.removeChild(b._This.bg), b._This.gamestart = !0
                        });
                        break;
                    case "levelMenuBtn":
                        this.vstop.remove(function() {
                            b._This.game.remove(), b._This.removeChild(b._This.game), b._This.TopBar.stopBtnVisible(!1), b._This.removeChild(b._This.vstop), b._This.removeChild(b._This.bg), b._This.addChild(b._This.vselect), b._This.vselect.add(), b._This.gamestart = !1
                        });
                        break;
                    case "RstartBtn":
                        this.vstop.remove(function() {
                            b._This.removeChild(b._This.vstop), b._This.removeChild(b._This.bg), b._This.game.rstart(), SG_Hooks.gameOver(GameData.score, GameData.glod), b._This.gamestart = !0
                        });
                        break;
                    case "nextLevelBtn":
                        this.vwin.remove(function() {
                            30 < b._This.game.currentLvel + 1 ? (b._This.removeChild(b._This.vwin), b._This.endlevel(), b._This.gamestart = !1) : (b._This.removeChild(b._This.vwin), b._This.removeChild(b._This.bg), b._This.game.nextLevel(), b._This.gamestart = !0)
                        });
                        break;
                    case "RstartBtn_win":
                        this.vwin.remove(function() {
                            b._This.removeChild(b._This.vwin), b._This.removeChild(b._This.bg), b._This.game.rstart(), b._This.gamestart = !0
                        });
                        break;
                    case "levelMenuBtn_win":
                        this.vwin.remove(function() {
                            b._This.game.remove(), b._This.removeChild(b._This.game), b._This.removeChild(b._This.vwin), b._This.removeChild(b._This.bg), b._This.TopBar.stopBtnVisible(!1), b._This.addChild(b._This.vselect), b._This.vselect.add(), b._This.gamestart = !1
                        });
                        break;
                    case "levelMenuBtn_lose":
                        this.vlose.remove(function() {
                            b._This.game.remove(), b._This.removeChild(b._This.game), b._This.removeChild(b._This.vlose), b._This.removeChild(b._This.bg), b._This.TopBar.stopBtnVisible(!1), b._This.addChild(b._This.vselect), b._This.vselect.add(), b._This.gamestart = !1
                        });
                        break;
                    case "RstartBtn_lose":
                        this.vlose.remove(function() {
                            b._This.removeChild(b._This.vlose), b._This.removeChild(b._This.bg), b._This.game.rstart(), b._This.gamestart = !0
                        });
                        break;
                    case "returnIndex":
                        this.removeChild(this.TopBar), this.vselect.remove(function() {
                            b._This.addChild(b._This.vstart), b._This.vstart.add()
                        });
                        break;
                    case "moregame":
                        //Play68.goHome();
                        break;
                    case "soundbtn":
                        0 == a.target.changeState ? (a.target.changeState = 1, GameData.isSound = !1, this.sound.pause()) : (a.target.changeState = 0, GameData.isSound = !0, this.sound.play(!0));
                        break;
                    case "glodadd":
                        this.gamestart ? (this.game.stop(), this.adstart = !0, this.gamestart = !1) : this.adstart = !1, this.addChild(this.getad), this.getad.anchorX = this.getad.anchorY = .5, Fw.L_Positioning.StageAlign(this.getad, {
                            centerX: !0,
                            centerY: !0
                        }), this.getad.scaleX = this.getad.scaleY = .5, this.getad.alpha = 0, this.getad.init(GameData.language[2] + "，\n" + GameData.language[3]), egret.Tween.get(this.getad).to({
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 150);
                        break;
                    case "getAd_yes":
                        break;
                    case "getAd_no":
                        this.removeChild(this.getad), this.adstart && (this.game.next(), this.gamestart = !0);
                        break;
                    case "getEnd_yes":
                        f = new glodAnimation, e = Fw.tools.drawRectangular(e, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, 0, .5), e.touchEnabled = !0, b._This.stage.addChild(e), b._This.stage.addChild(f), f.anchorX = f.anchorY = .5, Fw.L_Positioning.StageAlign(f, {
                            centerX: !0,
                            centerY: !0
                        }), egret.Tween.get(f).to({
                            y: 60,
                            x: 150
                        }, 2e3).call(function() {
                            GameData.glod += GameData.addGlod, b._This.TopBar.change(), Game._This.getend.alpha = 0, GameData.save(), b._This.stage.removeChild(e), b._This.stage.removeChild(f), b._This.removeChild(b._This.getend), b._This.removeChild(b._This.getad), b._This.adstart && (b._This.game.next(), b._This.gamestart = !0)
                        })
                }
                console.log(a.target.name)
            }
        }, b.getadend = function() {
            b._This.addChild(b._This.getend), b._This.getend.touchEnabled = !0, b._This.getend.name = "getend", egret.Tween.get(b._This.getend).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 150), b._This.getend.anchorX = b._This.getend.anchorY = .5, Fw.L_Positioning.StageAlign(b._This.getend, {
                centerX: !0,
                centerY: !0
            }), Game._This.getend.init("+" + GameData.addGlod.toString())
        }, b
    }(egret.Sprite), UI.prototype.__class__ = "UI", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, loading = function(a) {
        function b() {
            var b, c, d;
            a.call(this), b = Fw.tools.createBitmap(b, "logo"), Fw.L_Positioning.StageAlign(b, {
                centerX: !0,
                offsetX: 10
            }), b.y = 100, this.addChild(b), c = Fw.tools.createBitmap(c, "loadingbg"), this.addChild(c), this.w = c.width, c.y = 530, Fw.L_Positioning.StageAlign(c, {
                centerX: !0
            }), this.loadingBar = Fw.tools.createBitmap(this.loadingBar, "loadingbar"), this.addChild(this.loadingBar), this.loadingBar.x = c.x, this.loadingBar.y = c.y, this.loadingBar.width = 1, d = Fw.tools.createBitmap(d, "68_logo", !0), this.addChild(d), Fw.L_Positioning.StageAlign(d, {
                centerX: !0
            }), d.y = 570, d.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTap, this)
        }
        return __extends(b, a), b.prototype.onTap = function() {
            window.location.href = GameData.moregamesUrl
        }, b.prototype.Set = function(a) {
            this.loadingBar.width = this.w * a
        }, b
    }(egret.Sprite), loading.prototype.__class__ = "loading", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, Main = function(a) {
        function b() {
            a.call(this), this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        return __extends(b, a), b.prototype.onAddToStage = function() {
            Fw.Pretreatment.init(this, 640, 960), Methods.init(this.stage), RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), RES.loadConfig("resource/resource.json", "resource/"), GameData.read()
        }, b.prototype.onConfigComplete = function() {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.loadGroup("loading", 99), RES.loadGroup("runNeed", 10)
        }, b.prototype.onResourceLoadComplete = function(a) {
            var b, c;
            "runNeed" == a.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.stage.removeChild(this.loadingview), this.ui = new UI, this.stage.addChild(this.ui), SG_Hooks.setPauseHandler(function() {
                UI._This.gameStop()
            }), SG_Hooks.setUnpauseHandler(function() {
                UI._This.gamenext()
            })), "loading" == a.groupName && (a = SG_Hooks.getLanguage("en de es fr it pt ru tr nl pl".split(" ")), b = RES.getRes("doc"), GameData.language = b[a], c = Fw.tools.createBitmap(c, "bg"), this.stage.addChild(c), this.loadingview = new loading, this.stage.addChild(this.loadingview), Fw.tools.Drive().isPC || (new L_ScreenRotating("vertical", function() {
                UI._This.gameStop()
            }, function() {
                UI._This.gamenext()
            }), SG_Hooks.setOrientationHandler(function() {}), SG_Hooks.setResizeHandler(function() {})))
        }, b.prototype.onResourceProgress = function(a) {
            "runNeed" == a.groupName && this.loadingview.Set(Number(a.itemsLoaded) / Number(a.itemsTotal))
        }, b
    }(egret.DisplayObjectContainer), Main.prototype.__class__ = "Main", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_1 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 2, this.isTs = !1, this.Mask = Fw.tools.drawRectangular(this.Mask, 0, 0, Fw.Data.StageWidth, Fw.Data.StageHeight, 0, .6), this.addChild(this.Mask), this.Mask.visible = !1, this.bg = new GameBGView(4), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y0", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed0"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es0"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r), this.Help = new help, this.addChild(this.Help), this.Help.x = this.d.x, this.Help.y = this.d.y
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 10)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = Math.floor(60 * Math.random()) + 180, this.Mask.visible = !1, this.Help.visible = !1, this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.isTs = !0;
                            break;
                        case 1:
                            this.d.rotation = Math.floor(60 * Math.random()) + 90, this.Mask.visible = !1, this.Help.visible = !1, this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.isTs = !0, this.speed = 4;
                            break;
                        case 2:
                            this.win(), this.Mask.visible = !1, this.Help.visible = !1
                    }
                    this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.isTs = !0, this.rotations = this.cNum = 0, this.speed = 2, this.d.rotation = 90, this.r.rotation = 0, this.Mask.visible = !1, this.Help.visible = !1, this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.next()
        }, b.prototype.stop = function() {
            Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.isTs && (this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed), 10 > Math.abs(this.d.rotation - this.r.rotation) && this.isTs && (this.isTs = !1, this.Mask.visible = !0, this.Help.visible = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), console.log("aaaaaa")), 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_1.prototype.__class__ = "level_1", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_10 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(2, "y3", "ed3", "es3"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(2, "y4", "ed4", "es4"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.d.rotation = 130, this.left.speed = 4;
                            break;
                        case 1:
                            this.left.d.rotation = 220, this.left.speed = -4;
                            break;
                        case 2:
                            this.left.d.rotation = Math.floor(60 * Math.random()) + 150, this.left.speed = 5;
                            break;
                        case 3:
                            this.left.isPlay = !1, this.left.alpha = .5
                    }
                    this.left.rotations = 0, this.left.bg.init(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.right.d.rotation = 130, this.right.speed = 4;
                            break;
                        case 1:
                            this.right.d.rotation = 220, this.right.speed = -4;
                            break;
                        case 2:
                            this.right.d.rotation = Math.floor(60 * Math.random()) + 150, this.right.speed = 5;
                            break;
                        case 3:
                            this.right.isPlay = !1, this.right.alpha = .5
                    }
                    this.right.rotations = 0, this.right.bg.init(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 8 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.left.speed = 4, this.right.speed = -4, this.left.r.rotation = 30, this.right.r.rotation = 330, this.left.d.rotation = 0, this.right.d.rotation = 250, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_10.prototype.__class__ = "level_10", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_11 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(1, "y5", "ed5", "es5"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(1, "y6", "ed6", "es6"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.isPlay = !1, this.left.alpha = .5, this.right.isPlay = !0, this.right.alpha = 1, this.left.d.rotation = this.left.r.rotation + Math.floor(60 * Math.random()) + 40, this.left.speed = -5;
                            break;
                        case 1:
                            this.left.d.rotation = 45, this.left.r.rotation = 0, this.left.speed = -4, this.left.bg.init(), this.left.rotations = 0, this.right.isPlay = !0, this.right.alpha = 1;
                            break;
                        case 2:
                            this.left.isPlay = !1, this.left.alpha = .5
                    }
                    this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.left.isPlay = !0, this.right.isPlay = !1, this.right.alpha = .5, this.left.alpha = 1, this.left.rotations = 0, this.left.bg.init(), this.right.r.rotation = 200, this.right.d.rotation = 300, this.right.speed = 6;
                            break;
                        case 1:
                            this.right.d.rotation = 250, this.right.r.rotation = 330, this.right.speed = 4, this.right.rotations = 0, this.right.bg.init();
                            break;
                        case 2:
                            this.right.isPlay = !1, this.right.alpha = .5
                    }
                    this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 6 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !1, this.left.speed = 6, this.right.speed = -5, this.left.r.rotation = 30, this.right.r.rotation = 330, this.left.d.rotation = 0, this.right.d.rotation = 110, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_11.prototype.__class__ = "level_11", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_12 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(1, "y7", "ed7", "es7"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(2, "y8", "ed8", "es8"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.bg.init(), this.left.d.rotation = 90, this.left.r.rotation = 50, this.right.isPlay = !0, this.left.rotations = 0;
                            break;
                        case 1:
                            this.left.d.rotation = 45, this.left.r.rotation = 0, this.left.speed = -4, this.left.bg.init(), this.left.rotations = 0, this.right.isPlay = !0, this.right.alpha = 1;
                            break;
                        case 2:
                            this.left.isPlay = !1, this.left.alpha = .5, this.left.bg.init(), this.left.d.rotation = 270, this.left.r.rotation = 30, this.left.speed = -4, this.left.rotations = 0;
                            break;
                        case 3:
                            this.left.isPlay = !1, this.left.cNum += 1
                    }
                    this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.right.d.rotation = 50, this.right.r.rotation = 30, this.right.bg.init();
                            break;
                        case 1:
                            this.right.d.rotation = 250, this.right.r.rotation = 330, this.right.speed = 4, this.right.rotations = 0, this.right.bg.init();
                            break;
                        case 2:
                            this.right.isPlay = !1, this.right.alpha = .5, this.left.alpha = 1, this.left.isPlay = !0
                    }
                    this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 8 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.left.speed = 6, this.right.speed = -3, this.left.r.rotation = 30, this.right.r.rotation = 270, this.left.d.rotation = 0, this.right.d.rotation = 30, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_12.prototype.__class__ = "level_12", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_13 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(4, "y0", "ed0", "es0"), this.left = new Container(4, "y1", "ed1", "es1"), this.right = new Container(4, "y2", "ed2", "es2"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, 9 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.d.rotation = 180, this.left.rotations = 0, this.left.bg.init(), this.left.isPlay = !1, this.left.alpha = .5, this.right.isPlay = !0, this.right.alpha = 1;
                    break;
                case 1:
                    this.left.isPlay = !1, this.left.alpha = .5, this.top.isPlay || this.right.isPlay || this.top.isPlay || (this.top.isPlay = !0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.alpha = 1, this.left.alpha = 1, this.right.alpha = 1)
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.rotations = 0, this.right.d.rotation = 0, this.right.r.rotation = 230, this.right.bg.init(), this.left.isPlay = !0, this.left.alpha = 1, this.top.isPlay = !0, this.top.alpha = 1;
                    break;
                case 1:
                    this.right.alpha = .5, this.right.isPlay = !1, this.top.isPlay || this.right.isPlay || this.top.isPlay || (this.top.isPlay = !0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.alpha = 1, this.left.alpha = 1, this.right.alpha = 1)
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.rotations = 0, this.top.bg.init(), this.top.isPlay = !1, this.top.alpha = .5, this.top.d.rotation = 180, this.left.isPlay = !0, this.left.alpha = 1;
                    break;
                case 1:
                    this.top.isPlay = !1, this.top.alpha = .5, this.top.isPlay || this.right.isPlay || this.top.isPlay || (this.top.isPlay = !0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.alpha = 1, this.left.alpha = 1, this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = .5, this.right.alpha = .5, this.top.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !1, this.right.isPlay = !1, this.top.isPlay = !0, this.left.speed = 5, this.right.speed = 6, this.top.speed = 4, this.left.r.rotation = 30, this.right.r.rotation = 90, this.top.r.rotation = 135, this.left.d.rotation = 0, this.right.d.rotation = 60, this.top.d.rotation = 90, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_13.prototype.__class__ = "level_13", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_14 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(1, "y2", "ed2", "es2"), this.left = new Container(3, "y3", "ed3", "es3"), this.right = new Container(3, "y4", "ed4", "es4"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 6 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.d.rotation = 60, this.left.r.rotation = 270, this.left.isPlay = !1, this.left.alpha = .5, this.left.rotations = 0, this.left.bg.init(), this.left.speed = -5, this.left.isPlay || this.right.isPlay || (this.top.isPlay = !0, this.top.alpha = 1);
                    break;
                case 1:
                    this.left.isPlay = !1, this.left.alpha = .5, this.left.isPlay || this.right.isPlay || (this.top.isPlay = !0, this.top.alpha = 1)
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.rotations = 0, this.right.bg.init(), this.right.speed = 5, this.right.d.rotation = 90, this.right.r.rotation = 270, this.right.isPlay = !1, this.right.alpha = .5, this.left.isPlay || this.right.isPlay || (this.top.isPlay = !0, this.top.alpha = 1);
                    break;
                case 1:
                    this.right.alpha = .5, this.right.isPlay = !1, this.left.isPlay || this.right.isPlay || (this.top.isPlay = !0, this.top.alpha = 1)
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.r.rotation = 120, this.top.bg.init(), this.top.rotations = 0, this.left.isPlay = !0, this.left.alpha = 1, this.right.alpha = 1, this.right.isPlay = !0, this.top.alpha = .5, this.top.isPlay = !1;
                    break;
                case 1:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.top.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.isPlay = !1, this.left.speed = 4, this.right.speed = -4, this.top.speed = 6, this.left.r.rotation = 30, this.right.r.rotation = 270, this.top.r.rotation = 180, this.left.d.rotation = 0, this.right.d.rotation = 180, this.top.d.rotation = 90, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_14.prototype.__class__ = "level_14", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_15 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(3, "y4", "ed4", "es4"), this.left = new Container(2, "y5", "ed5", "es5"), this.right = new Container(1, "y6", "ed6", "es6"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = !0, this.left.alpha = 1, this.right.isPlay = !0, this.right.alpha = 1, this.top.isPlay = !0, this.top.alpha = 1), this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 6 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.rotations = 0, this.left.bg.init(), this.left.d.rotation = 270, this.left.r.rotation = 90, this.left.speed = 6, this.left.isPlay = !1, this.left.alpha = .5;
                    break;
                case 1:
                    this.left.isPlay = !1, this.left.alpha = .5
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.rotations = 0, this.right.d.rotation = 90, this.right.speed = -5, this.right.bg.init(), this.right.alpha = .5, this.right.isPlay = !1;
                    break;
                case 1:
                    this.right.alpha = .5, this.right.isPlay = !1
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.rotations = 0, this.top.bg.init(), this.top.d.rotation = 60, this.top.speed = 6, this.top.isPlay = !1, this.top.alpha = .5;
                    break;
                case 1:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.top.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.isPlay = !0, this.left.speed = 5, this.right.speed = 5, this.top.speed = 5, this.left.r.rotation = 30, this.right.r.rotation = 30, this.top.r.rotation = 30, this.left.d.rotation = 0, this.right.d.rotation = 0, this.top.d.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_15.prototype.__class__ = "level_15", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_16 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(2, "y7", "ed7", "es7"), this.left = new Container(2, "y8", "ed8", "es8"), this.right = new Container(3, "y0", "ed0", "es0"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 9 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.speed = 5, this.left.d.rotation = 180, this.left.r.rotation = 60;
                    break;
                case 1:
                    this.left.speed = -5, this.left.d.rotation = 270, this.left.r.rotation = 30, this.left.bg.init();
                    break;
                case 2:
                    this.left.isPlay = !1, this.left.alpha = .5, this.right.isPlay = !0, this.right.alpha = 1, this.top.isPlay = !0, this.top.alpha = 1
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.d.rotation = 120, this.right.r.rotation = 80, this.right.speed = -5, this.right.bg.init();
                    break;
                case 1:
                    this.right.r.rotation = 80, this.right.speed = 6, this.right.bg.init();
                    break;
                case 2:
                    this.right.isPlay = !1, this.right.alpha = .5
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.d.rotation = 60, this.top.speed = 6, this.top.bg.init();
                    break;
                case 1:
                    this.top.rotations = 180, this.top.r.rotation = 270, this.top.bg.init();
                    break;
                case 2:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = .5, this.top.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !1, this.top.isPlay = !1, this.left.speed = 1, this.right.speed = 5, this.top.speed = -5, this.left.r.rotation = 60, this.right.r.rotation = 230, this.top.r.rotation = 140, this.left.d.rotation = 90, this.right.d.rotation = 30, this.top.d.rotation = 80, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_16.prototype.__class__ = "level_16", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_17 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(4, "y2", "ed2", "es2"), this.left = new Container(4, "y3", "ed3", "es3"), this.right = new Container(4, "y1", "ed1", "es1"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 9 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.speed = -5, this.left.d.rotation = 180, this.left.r.rotation = 60;
                    break;
                case 1:
                    this.left.speed = 6, this.left.d.rotation = 270, this.left.r.rotation = 30, this.top.bg.init(), this.top.rotations = 0;
                    break;
                case 2:
                    this.left.isPlay = !1, this.left.alpha = .5
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.d.rotation = 270, this.right.r.rotation = 30, this.right.speed = 5;
                    break;
                case 1:
                    this.right.r.rotation = 80, this.right.speed = -6, this.left.rotations = 0, this.left.bg.init();
                    break;
                case 2:
                    this.right.isPlay = !1, this.right.alpha = .5
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.d.rotation = 60, this.top.speed = 6;
                    break;
                case 1:
                    this.top.rotations = 180, this.top.r.rotation = 270;
                    break;
                case 2:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.top.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.isPlay = !0, this.left.speed = 5, this.right.speed = -5, this.top.speed = 5, this.left.d.rotation = 30, this.left.r.rotation = 0, this.right.d.rotation = 60, this.right.r.rotation = 0, this.top.d.rotation = 90, this.top.r.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_17.prototype.__class__ = "level_17", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_18 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(4, "y5", "ed5", "es5"), this.left = new Container(4, "y3", "ed3", "es3"), this.right = new Container(4, "y4", "ed4", "es4"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 9 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.d.rotation = 270, this.left.r.rotation = 30, this.left.speed = 6, this.left.isPlay = !1, this.left.alpha = .5, this.right.isPlay = !0, this.right.alpha = 1;
                    break;
                case 1:
                    this.left.d.rotation = 60, this.left.speed = -6, this.right.isPlay = !0, this.right.alpha = 1, this.left.isPlay = !1, this.left.alpha = .5;
                    break;
                case 2:
                    this.left.isPlay = !1, this.left.alpha = .5, this.right.isPlay = !0, this.right.alpha = 1
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.speed = -5, this.right.d.rotation = 180, this.right.r.rotation = 60, this.right.isPlay = !1, this.right.alpha = .5, this.top.isPlay = !0, this.top.alpha = 1;
                    break;
                case 1:
                    this.right.speed = 6, this.right.d.rotation = 270, this.right.r.rotation = 30, this.right.isPlay = !1, this.right.alpha = .5, this.top.isPlay = !0, this.top.alpha = 1;
                    break;
                case 2:
                    this.right.isPlay = !1, this.right.alpha = .5, this.top.isPlay = !0, this.top.alpha = 1
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.r.rotation = 190, this.top.speed = -6, this.top.isPlay = !1, this.top.alpha = .5, this.left.isPlay = !0, this.left.alpha = 1;
                    break;
                case 1:
                    this.top.r.rotation = 270, this.top.d.rotation = 20, this.top.isPlay = !1, this.top.alpha = .5, this.left.isPlay = !0, this.left.alpha = 1;
                    break;
                case 2:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = .5, this.top.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !1, this.top.isPlay = !1, this.left.speed = 5, this.right.speed = -5, this.top.speed = 5, this.left.d.rotation = 90, this.left.r.rotation = 0, this.right.d.rotation = 60, this.right.r.rotation = 0, this.top.d.rotation = 90, this.top.r.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_18.prototype.__class__ = "level_18", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_19 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(4, "y6", "ed6", "es6"), this.left = new Container(4, "y5", "ed5", "es5"), this.right = new Container(4, "y4", "ed4", "es4"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 10 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.d.rotation = 130, this.left.speed = 4;
                    break;
                case 1:
                    this.left.d.rotation = 220, this.left.speed = -5;
                    break;
                case 2:
                    this.left.d.rotation = Math.floor(60 * Math.random()) + 150, this.left.speed = 6;
                    break;
                case 3:
                    this.right.isPlay = !0, this.right.alpha = 1, this.left.isPlay = !1, this.left.alpha = .5
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.d.rotation = Math.floor(40 * Math.random()) + 200, this.right.speed = 5;
                    break;
                case 1:
                    this.right.r.rotation = this.right.d.rotation - 60, this.right.speed = -5, this.top.isPlay = !0, this.top.alpha = 1;
                    break;
                case 2:
                    this.right.isPlay = !1, this.right.alpha = .5
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.d.rotation = Math.floor(60 * Math.random()) + 90, this.top.r.rotation = this.top.d.rotation + 30, this.top.speed = 5;
                    break;
                case 3:
                    this.top.d.rotation = Math.floor(30 * Math.random()) + 100, this.top.r.rotation = Math.floor(30 * Math.random()) + 60, this.top.speed = -5;
                case 2:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = .5, this.top.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !1, this.top.isPlay = !1, this.left.speed = 5, this.right.speed = -5, this.top.speed = 5, this.left.d.rotation = 90, this.left.r.rotation = 0, this.right.d.rotation = 60, this.right.r.rotation = 0, this.top.d.rotation = 90, this.top.r.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_19.prototype.__class__ = "level_19", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_2 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 2, this.bg = new GameBGView(4), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y1", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed1"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es1"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 10)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = Math.floor(60 * Math.random()) + 90, this.speed = 3;
                            break;
                        case 1:
                            this.d.rotation = Math.floor(60 * Math.random()) + 270, this.speed = 4;
                            break;
                        case 2:
                            this.d.rotation = Math.floor(60 * Math.random()) + 150, this.speed = 4;
                            break;
                        case 3:
                            this.win()
                    }
                    this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.rotations = this.cNum = 0, this.speed = 2, this.d.rotation = 0, this.r.rotation = 20, this.next()
        }, b.prototype.stop = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed, 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_2.prototype.__class__ = "level_2", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_20 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.top = new Container(4, "y6", "ed6", "es6"), this.left = new Container(3, "y7", "ed7", "es7"), this.right = new Container(3, "y8", "ed8", "es8"), this.addChild(this.top), this.top.name = "top", this.top.touchEnabled = !0, Fw.L_Positioning.StageAlign(this.top, {
                centerX: !0
            }), this.top.y = settings.level13_18.sy, this.addChild(this.left), this.left.y = settings.level13_18.xy, this.addChild(this.right), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.y = settings.level13_18.xy, this.left.name = "left", this.left.touchEnabled = !0, this.right.touchEnabled = !0, this.right.name = "right"
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    this.changeLeft(), this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    this.changeRight(), this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                } else if ("top" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.top.r.rotation, this.top.d.rotation, 15)) return this.createFx_Over(this.top.x + this.top.d.x, this.top.y + this.top.d.y), void this.over();
                    this.changeTop(), this.top.cNum += 1, this.createFx(this.top.x + this.top.d.x, this.top.y + this.top.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum + this.top.cNum, console.log(this.cNum), 11 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || this.top.isPlay || (this.left.isPlay = this.right.isPlay = this.top.isPlay = !0, this.left.alpha = this.right.alpha = this.top.alpha = 1)
            }
        }, b.prototype.changeLeft = function() {
            switch (this.left.cNum) {
                case 0:
                    this.left.bg.init(), this.left.d.rotation = 90, this.left.r.rotation = 0;
                    break;
                case 1:
                    this.left.d.rotation = 45, this.left.r.rotation = 0, this.left.speed = -4, this.left.bg.init(), this.left.isPlay = !1, this.left.alpha = .5, this.left.isPlay || this.right.isPlay || (this.left.isPlay = !0, this.top.isPlay = !0, this.left.alpha = 1, this.top.alpha = 1);
                    break;
                case 2:
                    this.left.bg.init(), this.left.d.rotation = 270, this.left.r.rotation = 30, this.left.speed = -4;
                    break;
                case 3:
                    this.left.isPlay = !1, this.left.alpha = .5, this.left.cNum += 1
            }
        }, b.prototype.changeRight = function() {
            switch (this.right.cNum) {
                case 0:
                    this.right.d.rotation = 50, this.right.r.rotation = 30, this.right.bg.init();
                    break;
                case 1:
                    this.right.d.rotation = 250, this.right.r.rotation = 330, this.right.speed = 4, this.right.bg.init();
                    break;
                case 2:
                    this.right.isPlay = !1, this.right.alpha = .5, this.right.d.rotation = 180, this.right.r.rotation = 90, this.right.rotations = 0, this.right.speed = 6, this.left.isPlay || this.right.isPlay || (this.left.isPlay = !0, this.top.isPlay = !0, this.left.alpha = 1, this.top.alpha = 1);
                    break;
                case 3:
                    this.right.isPlay = !1, this.right.alpha = .5
            }
        }, b.prototype.changeTop = function() {
            switch (this.top.cNum) {
                case 0:
                    this.top.d.rotation = this.left.r.rotation + Math.floor(60 * Math.random()) + 40, this.top.speed = -5;
                    break;
                case 1:
                    this.top.d.rotation = 45, this.top.r.rotation = 0, this.top.speed = -4, this.top.bg.init(), this.top.rotations = 0;
                    break;
                case 2:
                    this.top.isPlay = !1, this.top.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.top.alpha = .5, this.left.bg.init(), this.right.bg.init(), this.top.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.top.cNum = 0, this.top.rotations = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.top.isPlay = !1, this.left.speed = 5, this.right.speed = -5, this.top.speed = 5, this.left.d.rotation = 90, this.left.r.rotation = 0, this.right.d.rotation = 60, this.right.r.rotation = 0, this.top.d.rotation = 90, this.top.r.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed)), this.top.isPlay && (this.top.r.rotation += this.top.speed, 360 <= this.top.rotations && (this.top.bg.remove() || this.over(), this.top.rotations = 0), GameData.resultRotation(this.top.r), this.top.rotations += Math.abs(this.top.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.top.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_20.prototype.__class__ = "level_20", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_21 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.topLeft = new Container(4, "y5", "ed5", "es5"), this.topRight = new Container(4, "y6", "ed6", "es6"), this.bottomLeft = new Container(4, "y7", "ed7", "es7"), this.bottomRight = new Container(4, "y8", "ed8", "es8"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, 15)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, 15)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, 15)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, 15)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 8 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 180;
                    break;
                case 1:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.d.rotation = Math.floor(60 * Math.random()) + 90, this.topRight.speed = 5;
                    break;
                case 1:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = Math.floor(60 * Math.random()) + 90, this.bottomLeft.speed = 4, this.bottomLeft.bg.init();
                    break;
                case 1:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.d.rotation = Math.floor(60 * Math.random()) + 270, this.bottomRight.speed = 4, this.bottomRight.bg.init();
                    break;
                case 1:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 60, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 0, this.bottomLeft.r.rotation = 0, this.bottomRight.r.rotation = 0, this.topLeft.speed = 4, this.topRight.speed = 4, this.bottomLeft.speed = 4, this.bottomRight.speed = 4, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_21.prototype.__class__ = "level_21", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_22 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.topLeft = new Container(4, "y1", "ed1", "es1"), this.topRight = new Container(4, "y2", "ed2", "es2"), this.bottomLeft = new Container(4, "y3", "ed3", "es3"), this.bottomRight = new Container(4, "y4", "ed4", "es4"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, 15)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, 15)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, 15)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, 15)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 8 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 150, this.topLeft.speed = -5;
                    break;
                case 1:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.d.rotation = 270, this.topRight.speed = 5;
                    break;
                case 1:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5, this.bottomRight.bg.init(), this.bottomLeft.bg.init()
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = Math.floor(60 * Math.random()) + 150, this.bottomLeft.speed = 5;
                    break;
                case 1:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.d.rotation = 0, this.bottomRight.r.rotation = 90, this.bottomRight.speed = -5;
                    break;
                case 1:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 60, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 200, this.topRight.r.rotation = 180, this.bottomLeft.r.rotation = 240, this.bottomRight.r.rotation = 0, this.topLeft.speed = 5, this.topRight.speed = -5, this.bottomLeft.speed = 5, this.bottomRight.speed = -5, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_22.prototype.__class__ = "level_22", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_23 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.topLeft = new Container(1, "y1", "ed1", "es1"), this.topRight = new Container(4, "y3", "ed3", "es3"), this.bottomLeft = new Container(4, "y5", "ed5", "es5"), this.bottomRight = new Container(4, "y7", "ed7", "es7"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, 15)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, 15)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, 15)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, 15)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 8 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 150, this.topLeft.speed = -5;
                    break;
                case 1:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.d.rotation = 270, this.topRight.r.rotation = 0, this.topRight.speed = 1;
                    break;
                case 1:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = 45, this.bottomLeft.r.rotation = 0, this.bottomLeft.speed = -5;
                    break;
                case 1:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.d.rotation = 250, this.bottomRight.r.rotation = 330, this.bottomRight.speed = 4;
                    break;
                case 1:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 330, this.topRight.d.rotation = 150, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 230, this.bottomLeft.r.rotation = 240, this.bottomRight.r.rotation = 0, this.topLeft.speed = 1, this.topRight.speed = 5, this.bottomLeft.speed = -5, this.bottomRight.speed = 5, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_23.prototype.__class__ = "level_23", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_24 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.topLeft = new Container(1, "y8", "ed8", "es8"), this.topRight = new Container(1, "y6", "ed6", "es6"), this.bottomLeft = new Container(2, "y4", "ed4", "es4"), this.bottomRight = new Container(2, "y2", "ed2", "es2"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, 15)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, 15)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, 15)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, 15)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 4 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5, this.bottomRight.rotations = 0
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 270, this.topRight.d.rotation = 270, this.bottomLeft.d.rotation = 130, this.bottomRight.d.rotation = 0, this.topLeft.r.rotation = 180, this.topRight.r.rotation = 90, this.bottomLeft.r.rotation = 0, this.bottomRight.r.rotation = 270, this.topLeft.speed = 6, this.topRight.speed = 6, this.bottomLeft.speed = -6, this.bottomRight.speed = 6, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_24.prototype.__class__ = "level_24", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_25 = function(a) {
        function b() {
            a.call(this), this.maxR = 15, this.cNum = 0, this.topLeft = new Container(3, "y8", "ed8", "es8"), this.topRight = new Container(1, "y7", "ed7", "es7"), this.bottomLeft = new Container(3, "y3", "ed3", "es3"), this.bottomRight = new Container(2, "y0", "ed0", "es0"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.maxR)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.maxR)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.maxR)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.maxR)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 13 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1, this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.bg.init(), this.topLeft.d.rotation = 90, this.topLeft.r.rotation = 50, this.topLeft.speed = -6;
                    break;
                case 1:
                    this.topLeft.d.rotation = 180, this.topLeft.r.rotation = 270, this.topLeft.speed = 6, this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.isPlay = !1, this.topLeft.alpha = .5, this.topLeft.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topRight.isPlay = !0, this.topRight.alpha = 1);
                    break;
                case 2:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.bg.init(), this.topRight.rotations = 0, this.topRight.d.rotation = 90, this.topRight.speed = -6;
                    break;
                case 1:
                    this.topRight.bg.init(), this.topRight.rotations = 0, this.topRight.d.rotation = 0, this.topRight.r.rotation = 270, this.topRight.speed = 1;
                    break;
                case 2:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5, this.topLeft.isPlay = !0, this.topLeft.alpha = 1, this.bottomLeft.isPlay = !0, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.bottomRight.isPlay = !0
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 45, this.bottomLeft.r.rotation = 0, this.bottomLeft.speed = -6;
                    break;
                case 1:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 150, this.bottomLeft.speed = 5, this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5, this.topLeft.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topRight.isPlay = !0, this.topRight.alpha = 1);
                    break;
                case 2:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.bg.init(), this.bottomRight.rotations = 0, this.bottomRight.d.rotation = 270, this.bottomRight.r.rotation = 30, this.bottomRight.speed = -6;
                    break;
                case 1:
                    this.bottomRight.bg.init(), this.bottomRight.rotations = 0, this.bottomRight.d.rotation = 90, this.bottomRight.r.rotation = 0, this.bottomRight.speed = 6, this.topLeft.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topRight.isPlay = !0, this.topRight.alpha = 1);
                    break;
                case 2:
                    console.log("tttttttttt"), this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5;
                    break;
                case 3:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5, this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1, this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = .5, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !1, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 0, this.bottomLeft.d.rotation = 180, this.bottomRight.d.rotation = 90, this.topLeft.r.rotation = 180, this.topRight.r.rotation = 40, this.bottomLeft.r.rotation = 200, this.bottomRight.r.rotation = 270, this.topLeft.speed = 6, this.topRight.speed = 6, this.bottomLeft.speed = -6, this.bottomRight.speed = 6, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_25.prototype.__class__ = "level_25", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_26 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.hitNum = 15, this.topLeft = new Container(4, "y8", "ed8", "es8"), this.topRight = new Container(4, "y3", "ed3", "es3"), this.bottomLeft = new Container(4, "y6", "ed6", "es6"), this.bottomRight = new Container(4, "y0", "ed0", "es0"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.hitNum)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 16 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.bg.init(), this.topLeft.rotations = 0, this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 180;
                    break;
                case 1:
                    this.topLeft.bg.init(), this.topLeft.rotations = 0, this.topLeft.d.rotation = 0, this.topLeft.r.rotation = 90, this.topLeft.speed = -6;
                    break;
                case 2:
                    this.topLeft.bg.init(), this.topLeft.rotations = 0, this.topLeft.d.rotation = 180, this.topLeft.r.rotation = 0, this.topLeft.speed = 6;
                    break;
                case 3:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = Math.floor(60 * Math.random()) + 90, this.topRight.speed = 5;
                    break;
                case 1:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = 0, this.topRight.r.rotation = 180, this.topRight.speed = 1;
                    break;
                case 2:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = 90, this.topRight.speed = -6;
                    break;
                case 3:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = Math.floor(60 * Math.random()) + 90, this.bottomLeft.speed = 4, this.bottomLeft.rotations = 0, this.bottomLeft.bg.init();
                    break;
                case 1:
                    this.bottomLeft.rotations = 0, this.bottomLeft.bg.init(), this.bottomLeft.d.rotation = 0, this.bottomLeft.r.rotation = 300, this.bottomLeft.speed = 6;
                    break;
                case 2:
                    this.bottomLeft.rotations = 0, this.bottomLeft.bg.init(), this.bottomLeft.d.rotation = 90, this.bottomLeft.speed = -6;
                    break;
                case 3:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.d.rotation = Math.floor(60 * Math.random()) + 270, this.bottomRight.speed = 4, this.bottomRight.rotations = 0, this.bottomRight.bg.init();
                    break;
                case 1:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 90, this.bottomRight.speed = -5;
                    break;
                case 2:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.speed = 5, this.bottomRight.d.rotation += 30;
                    break;
                case 3:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 60, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 0, this.bottomLeft.r.rotation = 0, this.bottomRight.r.rotation = 0, this.topLeft.speed = 4, this.topRight.speed = 4, this.bottomLeft.speed = 4, this.bottomRight.speed = 4, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_26.prototype.__class__ = "level_26", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_27 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.hitNum = 15, this.topLeft = new Container(1, "y2", "ed2", "es2"), this.topRight = new Container(1, "y6", "ed6", "es6"), this.bottomLeft = new Container(1, "y3", "ed3", "es3"), this.bottomRight = new Container(1, "y5", "ed5", "es5"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.hitNum)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 16 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 220, this.topLeft.speed = 6;
                    break;
                case 1:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 180, this.topLeft.r.rotation = 80;
                    break;
                case 2:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 90, this.topLeft.speed = -6, this.topLeft.isPlay = !1, this.topLeft.alpha = .5, this.topRight.isPlay = !0, this.topRight.alpha = 1, this.topRight.rotations = 0, this.topRight.bg.init();
                    break;
                case 3:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.bg.init(), this.topRight.rotations = 0, this.topRight.d.rotation = 120, this.topRight.speed = 6;
                    break;
                case 1:
                    this.topRight.bg.init(), this.topRight.rotations = 0, this.topRight.d.rotation = 180;
                    break;
                case 2:
                    this.topRight.bg.init(), this.topRight.rotations = 0, this.topRight.d.rotation = 220;
                    break;
                case 3:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5, this.bottomLeft.rotations = 0, this.bottomLeft.bg.init(), this.bottomLeft.isPlay = !0, this.bottomLeft.alpha = 1
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = Math.floor(60 * Math.random()) + 90, this.bottomLeft.speed = 6;
                    break;
                case 1:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 200, this.bottomLeft.speed = -6;
                    break;
                case 2:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.r.rotation = 100, this.bottomLeft.speed = 6;
                    break;
                case 3:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5, this.topLeft.isPlay = !0, this.topLeft.rotations = 0, this.topLeft.alpha = 1, this.topLeft.bg.init()
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.bg.init(), this.bottomRight.rotations = 0, this.bottomRight.d.rotation = 240, this.bottomRight.speed = 6, this.topLeft.isPlay = !1, this.topLeft.alpha = .5, this.topRight.isPlay = !1, this.topRight.alpha = .5, this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5;
                    break;
                case 1:
                    this.bottomRight.bg.init(), this.bottomRight.rotations = 0, this.bottomRight.d.rotation = 0, this.bottomRight.speed = -6;
                    break;
                case 2:
                    this.bottomRight.bg.init(), this.bottomRight.rotations = 0, this.bottomRight.d.rotation = 90, this.bottomRight.speed = 6;
                    break;
                case 3:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5, this.topLeft.isPlay = !0, this.topLeft.alpha = 1, this.topLeft.bg.init(), this.topLeft.rotations = 0
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 60, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 0, this.bottomLeft.r.rotation = 0, this.bottomRight.r.rotation = 0, this.topLeft.speed = 4, this.topRight.speed = 4, this.bottomLeft.speed = 4, this.bottomRight.speed = 4, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_27.prototype.__class__ = "level_27", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_28 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.hitNum = 100, this.topLeft = new Container(4, "y0", "ed0", "es0"), this.topRight = new Container(4, "y5", "ed5", "es5"), this.bottomLeft = new Container(4, "y1", "ed1", "es1"), this.bottomRight = new Container(4, "y6", "ed6", "es6"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.hitNum)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 16 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.bg.init(), this.topLeft.rotations = 0, this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 150, this.topLeft.speed = -5;
                    break;
                case 1:
                    this.topLeft.d.rotation -= 100, this.topLeft.speed = 6;
                    break;
                case 2:
                    this.topLeft.d.rotation = 200, this.topLeft.speed = -6;
                    break;
                case 3:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.d.rotation = 270, this.topRight.speed = 5;
                    break;
                case 1:
                    this.topRight.d.rotation = 0, this.topRight.speed = 6;
                    break;
                case 2:
                    this.topRight.rotations = 0, this.topRight.d.rotation = 90, this.topRight.speed = -6;
                    break;
                case 3:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5, this.bottomRight.bg.init(), this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = Math.floor(60 * Math.random()) + 300, this.bottomLeft.speed = 5;
                    break;
                case 1:
                    this.bottomLeft.d.rotation = 90, this.bottomLeft.speed = 6;
                    break;
                case 2:
                    this.bottomLeft.speed = -6;
                    break;
                case 3:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.d.rotation = 0, this.bottomRight.r.rotation = 90, this.bottomRight.speed = 5;
                    break;
                case 1:
                    this.topRight.isPlay || (this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0), this.bottomRight.d.rotation = 60, this.bottomRight.speed = 6;
                    break;
                case 2:
                    this.bottomRight.d.rotation = 100, this.bottomRight.speed = 6;
                    break;
                case 3:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 30, this.topRight.d.rotation = 60, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 120, this.topLeft.r.rotation = 200, this.topRight.r.rotation = 180, this.bottomLeft.r.rotation = 240, this.bottomRight.r.rotation = 0, this.topLeft.speed = 5, this.topRight.speed = -5, this.bottomLeft.speed = 5, this.bottomRight.speed = -5, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_28.prototype.__class__ = "level_28", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_29 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.hitNum = 360, this.topLeft = new Container(1, "y2", "ed2", "es2"), this.topRight = new Container(4, "y4", "ed4", "es4"), this.bottomLeft = new Container(4, "y3", "ed3", "es3"), this.bottomRight = new Container(1, "y5", "ed5", "es5"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.hitNum)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 20 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = Math.floor(60 * Math.random()) + 150, this.topLeft.speed = -5;
                    break;
                case 1:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 270, this.topLeft.speed = 6;
                    break;
                case 2:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 300, this.topLeft.speed = 6;
                    break;
                case 3:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 360, this.topLeft.speed = 1;
                    break;
                case 4:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.d.rotation = 270, this.topRight.r.rotation = 0, this.topRight.speed = 1, this.topRight.bg.init();
                    break;
                case 1:
                    this.topRight.d.rotation = 0, this.topRight.speed = 6;
                    break;
                case 2:
                    this.topRight.d.rotation = 90, this.topRight.speed = -6;
                    break;
                case 3:
                    this.topRight.d.rotation = 180, this.topRight.speed = 6;
                    break;
                case 4:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.d.rotation = 45, this.bottomLeft.r.rotation = 0, this.bottomLeft.speed = -5;
                    break;
                case 1:
                    this.bottomLeft.d.rotation = 90, this.bottomLeft.speed = 6;
                    break;
                case 2:
                    this.bottomLeft.d.rotation = 180, this.bottomLeft.speed = 7;
                    break;
                case 3:
                    this.bottomLeft.d.rotation = 0, this.bottomLeft.speed = -7;
                    break;
                case 4:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 250, this.bottomRight.r.rotation = 330, this.bottomRight.speed = 4;
                    break;
                case 1:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 0, this.bottomRight.speed = 2;
                    break;
                case 2:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 30, this.bottomRight.speed = 6;
                    break;
                case 3:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 30, this.bottomRight.r.rotation = 0, this.bottomRight.speed = -6;
                    break;
                case 4:
                    this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = 1, this.bottomLeft.alpha = 1, this.bottomRight.alpha = 1, this.topLeft.isPlay = !0, this.topRight.isPlay = !0, this.bottomLeft.isPlay = !0, this.bottomRight.isPlay = !0, this.topLeft.d.rotation = 330, this.topRight.d.rotation = 150, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 30, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 230, this.bottomLeft.r.rotation = 240, this.bottomRight.r.rotation = 0, this.topLeft.speed = 1, this.topRight.speed = 5, this.bottomLeft.speed = -5, this.bottomRight.speed = -1, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_29.prototype.__class__ = "level_29", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_3 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 3, this.bg = new GameBGView(4), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y2", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed2"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es2"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 10)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = 0;
                            break;
                        case 1:
                            this.d.rotation = 30, this.speed = -3;
                            break;
                        case 2:
                            this.d.rotation = Math.floor(60 * Math.random()) + 150, this.speed = 4;
                            break;
                        case 3:
                            this.win()
                    }
                    this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.rotations = this.cNum = 0, this.speed = 3, this.d.rotation = 90, this.r.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed, 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_3.prototype.__class__ = "level_3", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_30 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.hitNum = 15, this.topLeft = new Container(1, "y7", "ed7", "es7"), this.topRight = new Container(1, "y6", "ed6", "es6"), this.bottomLeft = new Container(1, "y5", "ed5", "es5"), this.bottomRight = new Container(1, "y4", "ed4", "es4"), this.addChild(this.topLeft), this.topLeft.y = settings.level13_18.sy, this.topLeft.touchEnabled = !0, this.topLeft.name = "topLeft", this.addChild(this.topRight), this.topRight.y = settings.level13_18.sy, this.topRight.touchEnabled = !0, this.topRight.name = "topRight", this.topRight.x = Fw.Data.StageWidth - this.topRight.width, this.addChild(this.bottomLeft), this.bottomLeft.name = "bottomLeft", this.bottomLeft.y = settings.level13_18.xy, this.bottomLeft.touchEnabled = !0, this.addChild(this.bottomRight), this.bottomRight.touchEnabled = !0, this.bottomRight.name = "bottomRight", this.bottomRight.y = settings.level13_18.xy, this.bottomRight.x = Fw.Data.StageWidth - this.bottomRight.width
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("topLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topLeft.r.rotation, this.topLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y), void this.over();
                    this.changeTopLeft(), this.topLeft.cNum += 1, this.createFx(this.topLeft.x + this.topLeft.d.x, this.topLeft.y + this.topLeft.d.y)
                } else if ("topRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.topRight.r.rotation, this.topRight.d.rotation, this.hitNum)) return this.createFx_Over(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y), void this.over();
                    this.changeTopRight(), this.topRight.cNum += 1, this.createFx(this.topRight.x + this.topRight.d.x, this.topRight.y + this.topRight.d.y)
                } else if ("bottomLeft" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomLeft.r.rotation, this.bottomLeft.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y), void this.over();
                    this.changeBottomLeft(), this.bottomLeft.cNum += 1, this.createFx(this.bottomLeft.x + this.bottomLeft.d.x, this.bottomLeft.y + this.bottomLeft.d.y)
                } else if ("bottomRight" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.bottomRight.r.rotation, this.bottomRight.d.rotation, this.hitNum)) return this.createFx_Over(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y), void this.over();
                    this.changeBottomRight(), this.bottomRight.cNum += 1, this.createFx(this.bottomRight.x + this.bottomRight.d.x, this.bottomRight.y + this.bottomRight.d.y)
                }
                this.cNum = this.topLeft.cNum + this.topRight.cNum + this.bottomLeft.cNum + this.bottomRight.cNum, console.log(this.cNum), 20 <= this.cNum ? this.win() : this.topLeft.isPlay || this.topRight.isPlay || this.bottomLeft.isPlay || this.bottomRight.isPlay || (this.topLeft.isPlay = this.topRight.isPlay = this.bottomLeft.isPlay = this.bottomRight.isPlay = !0, this.topLeft.alpha = this.topRight.alpha = this.bottomLeft.alpha = this.bottomRight.alpha = 1)
            }
        }, b.prototype.changeTopLeft = function() {
            switch (this.topLeft.cNum) {
                case 0:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 200, this.topLeft.speed = -7;
                    break;
                case 1:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 170;
                    break;
                case 2:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 140;
                    break;
                case 3:
                    this.topLeft.rotations = 0, this.topLeft.bg.init(), this.topLeft.d.rotation = 80, this.topLeft.speed = -8, this.topRight.isPlay = !0, this.topRight.alpha = 1, this.topLeft.isPlay = !1, this.topLeft.alpha = .5;
                    break;
                case 4:
                    this.topLeft.isPlay = !1, this.topLeft.alpha = .5, this.topRight.isPlay = !0, this.topRight.alpha = 1
            }
        }, b.prototype.changeTopRight = function() {
            switch (this.topRight.cNum) {
                case 0:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = 270, this.topRight.r.rotation = 220, this.topRight.speed = 7;
                    break;
                case 1:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = 0, this.topRight.speed = -8, this.bottomLeft.isPlay = !0, this.bottomLeft.alpha = 1, this.topRight.isPlay = !1, this.topRight.alpha = .5;
                    break;
                case 2:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.isPlay = !1, this.topRight.alpha = .5, this.bottomRight.isPlay = !0, this.bottomRight.alpha = 1, this.topRight.d.rotation = 90, this.topRight.speed = -8;
                    break;
                case 3:
                    this.topRight.rotations = 0, this.topRight.bg.init(), this.topRight.d.rotation = 180, this.topRight.speed = 6;
                    break;
                case 4:
                    this.topRight.isPlay = !1, this.topRight.alpha = .5
            }
        }, b.prototype.changeBottomLeft = function() {
            switch (this.bottomLeft.cNum) {
                case 0:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 90, this.bottomLeft.r.rotation = 0, this.bottomLeft.speed = 8;
                    break;
                case 1:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 0, this.bottomLeft.speed = -8;
                    break;
                case 2:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 270;
                    break;
                case 3:
                    this.bottomLeft.bg.init(), this.bottomLeft.rotations = 0, this.bottomLeft.d.rotation = 90, this.bottomLeft.speed = 8;
                    break;
                case 4:
                    this.bottomLeft.isPlay = !1, this.bottomLeft.alpha = .5, this.topRight.isPlay = !0, this.topRight.alpha = 1
            }
        }, b.prototype.changeBottomRight = function() {
            switch (this.bottomRight.cNum) {
                case 0:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 150, this.bottomRight.r.rotation = 200, this.bottomRight.speed = 9;
                    break;
                case 1:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 0, this.bottomRight.speed = 10;
                    break;
                case 2:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 30, this.bottomRight.speed = 6;
                    break;
                case 3:
                    this.bottomRight.rotations = 0, this.bottomRight.bg.init(), this.bottomRight.d.rotation = 270, this.bottomRight.speed = -8;
                    break;
                case 4:
                    this.topLeft.isPlay = !0, this.topLeft.alpha = 1, this.bottomRight.isPlay = !1, this.bottomRight.alpha = .5
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.cNum = 0, this.topLeft.cNum = 0, this.topRight.cNum = 0, this.bottomLeft.cNum = 0, this.bottomRight.cNum = 0, this.topLeft.alpha = 1, this.topRight.alpha = .5, this.bottomLeft.alpha = .5, this.bottomRight.alpha = .5, this.topLeft.isPlay = !0, this.topRight.isPlay = !1, this.bottomLeft.isPlay = !1, this.bottomRight.isPlay = !1, this.topLeft.d.rotation = 330, this.topRight.d.rotation = 150, this.bottomLeft.d.rotation = 90, this.bottomRight.d.rotation = 30, this.topLeft.r.rotation = 0, this.topRight.r.rotation = 230, this.bottomLeft.r.rotation = 240, this.bottomRight.r.rotation = 0, this.topLeft.speed = 7, this.topRight.speed = 7, this.bottomLeft.speed = -7, this.bottomRight.speed = -7, this.topLeft.rotations = 0, this.topRight.rotations = 0, this.bottomLeft.rotations = 0, this.bottomRight.rotations = 0, this.topLeft.bg.init(), this.topRight.bg.init(), this.bottomLeft.bg.init(), this.bottomRight.bg.init(), this.next()
        }, b.prototype.stop = function() {
            this.topLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.topLeft.isPlay && (this.topLeft.r.rotation += this.topLeft.speed, 360 <= this.topLeft.rotations && (this.topLeft.bg.remove() || this.over(), this.topLeft.rotations = 0), GameData.resultRotation(this.topLeft.r), this.topLeft.rotations += Math.abs(this.topLeft.speed)), this.topRight.isPlay && (this.topRight.r.rotation += this.topRight.speed, 360 <= this.topRight.rotations && (this.topRight.bg.remove() || this.over(), this.topRight.rotations = 0), GameData.resultRotation(this.topRight.r), this.topRight.rotations += Math.abs(this.topRight.speed)), this.bottomLeft.isPlay && (this.bottomLeft.r.rotation += this.bottomLeft.speed, 360 <= this.bottomLeft.rotations && (this.bottomLeft.bg.remove() || this.over(), this.bottomLeft.rotations = 0), GameData.resultRotation(this.bottomLeft.r), this.bottomLeft.rotations += Math.abs(this.bottomLeft.speed)), this.bottomRight.isPlay && (this.bottomRight.r.rotation += this.bottomRight.speed, 360 <= this.bottomRight.rotations && (this.bottomRight.bg.remove() || this.over(), this.bottomRight.rotations = 0), GameData.resultRotation(this.bottomRight.r), this.bottomRight.rotations += Math.abs(this.bottomRight.speed))
        }, b.prototype.next = function() {
            this.topLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.topRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.bottomLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_30.prototype.__class__ = "level_30", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_4 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 3, this.bg = new GameBGView(4), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y3", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed3"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es3"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 10)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = 130, this.speed = 4;
                            break;
                        case 1:
                            this.d.rotation = 220, this.speed = -4;
                            break;
                        case 2:
                            this.d.rotation = Math.floor(60 * Math.random()) + 150, this.speed = 5;
                            break;
                        case 3:
                            this.win()
                    }
                    this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.rotations = this.cNum = 0, this.speed = 3, this.d.rotation = 90, this.r.rotation = 270, this.next()
        }, b.prototype.stop = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed, 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_4.prototype.__class__ = "level_4", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_5 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 3, this.bg = new GameBGView(3), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y4", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed4"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es4"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 15)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = 130, this.speed = 4;
                            break;
                        case 1:
                            this.d.rotation = 220, this.speed = -4;
                            break;
                        case 2:
                            this.d.rotation = Math.floor(60 * Math.random()) + 150, this.speed = 5;
                            break;
                        case 3:
                            this.win()
                    }
                    this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.rotations = this.cNum = 0, this.speed = 4, this.d.rotation = 90, this.r.rotation = 270, this.next()
        }, b.prototype.stop = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed, 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_5.prototype.__class__ = "level_5", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_6 = function(a) {
        function b() {
            a.call(this), this.rotations = 0, this.speed = 4, this.bg = new GameBGView(1), this.addChild(this.bg), Fw.L_Positioning.StageAlign(this.bg, {
                centerX: !0,
                centerY: !0
            }), this.cNum = 0, this.b = Fw.tools.createBitmap(this.b, "y5", !1), this.b.anchorX = this.b.anchorY = .5, this.b.y = this.bg.y + GameData.yY, Fw.L_Positioning.RelativeAlign(this.bg, this.b, {
                centerX: !0
            }), this.d = Fw.tools.createBitmap(this.d, "ed5"), this.d.anchorX = this.d.anchorY = .5, this.d.x = this.b.x, this.d.y = this.b.y, this.r = Fw.tools.createBitmap(this.r, "es5"), this.r.anchorX = this.r.anchorY = .5, this.r.x = this.d.x, this.r.y = this.d.y, this.addChild(this.b), this.addChild(this.d), this.addChild(this.r)
        }
        return __extends(b, a), b.prototype.onTouchBegin = function() {
            if (!UI._This.isStop)
                if (GameData.RotationChange(this.r.rotation, this.d.rotation, 15)) {
                    switch (this.cNum) {
                        case 0:
                            this.d.rotation = Math.floor(40 * Math.random()) + 200, this.speed = 5;
                            break;
                        case 1:
                            this.r.rotation = this.d.rotation - 60, this.speed = -5;
                            break;
                        case 2:
                            this.d.rotation = Math.floor(60 * Math.random()) + 90, this.r.rotation = this.d.rotation + 30, this.speed = 5;
                            break;
                        case 3:
                            this.d.rotation = Math.floor(30 * Math.random()), this.r.rotation = Math.floor(30 * Math.random()) + 60, this.speed = -5;
                            break;
                        case 4:
                            this.win()
                    }
                    this.bg.init(), this.rotations = 0, this.cNum += 1, this.createFx(this.d.x, this.d.y)
                } else this.createFx_Over(this.d.x, this.d.y), this.over()
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.bg.init(), this.rotations = this.cNum = 0, this.speed = 4, this.d.rotation = 90, this.r.rotation = 270, this.next()
        }, b.prototype.stop = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.r.rotation += this.speed, GameData.resultRotation(this.r), this.rotations += this.speed, 360 <= this.rotations && (this.bg.remove() || this.over(), this.rotations = 0)
        }, b.prototype.next = function() {
            this.bg.touchEnabled = !0, this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_6.prototype.__class__ = "level_6", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_7 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(4, "y6", "ed6", "es6"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(4, "y7", "ed7", "es7"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.d.rotation = 30, this.left.speed = 2;
                            break;
                        case 1:
                            this.left.isPlay = !1, this.left.alpha = .5
                    }
                    this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.right.r.rotation = 50;
                            break;
                        case 1:
                            this.right.isPlay = !1, this.right.alpha = .5
                    }
                    this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 4 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.left.speed = this.right.speed = 4, this.left.r.rotation = 0, this.right.r.rotation = 0, this.left.d.rotation = 90, this.right.d.rotation = 270, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_7.prototype.__class__ = "level_7", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_8 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(4, "y8", "ed8", "es8"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(4, "y0", "ed0", "es0"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.d.rotation = 90, this.left.speed = -4;
                            break;
                        case 1:
                            this.left.d.rotation = 45, this.right.r.rotation = 0;
                            break;
                        case 2:
                            this.left.isPlay = !1, this.left.alpha = .5
                    }
                    this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.right.r.rotation = 270, this.right.speed = 2;
                            break;
                        case 1:
                            this.right.d.rotation = 140, this.right.r.rotation = 20, this.right.speed = 4;
                            break;
                        case 2:
                            this.right.isPlay = !1, this.right.alpha = .5
                    }
                    this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 6 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.left.speed = this.right.speed = 4, this.left.r.rotation = 0, this.right.r.rotation = 0, this.left.d.rotation = 30, this.right.d.rotation = 90, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_8.prototype.__class__ = "level_8", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, level_9 = function(a) {
        function b() {
            a.call(this), this.cNum = 0, this.left = new Container(4, "y1", "ed1", "es1"), this.addChild(this.left), Fw.L_Positioning.StageAlign(this.left, {
                centerY: !0
            }), this.left.name = "left", this.left.touchEnabled = !0, this.right = new Container(4, "y2", "ed2", "es2"), this.addChild(this.right), Fw.L_Positioning.StageAlign(this.right, {
                centerY: !0
            }), this.right.x = Fw.Data.StageWidth - this.right.width, this.right.name = "right", this.right.touchEnabled = !0
        }
        return __extends(b, a), b.prototype.onTouchBegin = function(a) {
            if (!UI._This.isStop) {
                if ("left" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.left.r.rotation, this.left.d.rotation, 15)) return this.createFx_Over(this.left.x + this.left.d.x, this.left.y + this.left.d.y), void this.over();
                    switch (this.left.cNum) {
                        case 0:
                            this.left.d.rotation = this.left.r.rotation + Math.floor(60 * Math.random()) + 40, this.left.speed = 1;
                            break;
                        case 1:
                            this.left.d.rotation = 45, this.left.r.rotation = 0, this.left.speed = -4;
                            break;
                        case 2:
                            this.left.isPlay = !1, this.left.alpha = .5
                    }
                    this.left.cNum += 1, this.createFx(this.left.x + this.left.d.x, this.left.y + this.left.d.y)
                } else if ("right" == a.target.name && a.target.isPlay) {
                    if (!GameData.RotationChange(this.right.r.rotation, this.right.d.rotation, 15)) return this.createFx_Over(this.right.x + this.right.d.x, this.right.y + this.right.d.y), void this.over();
                    switch (this.right.cNum) {
                        case 0:
                            this.right.r.rotation = 200, this.right.d.rotation = 300, this.right.speed = 6;
                            break;
                        case 1:
                            this.right.d.rotation = 250, this.right.r.rotation = 330, this.right.speed = 4;
                            break;
                        case 2:
                            this.right.isPlay = !1, this.right.alpha = .5
                    }
                    this.right.cNum += 1, this.createFx(this.right.x + this.right.d.x, this.right.y + this.right.d.y)
                }
                this.cNum = this.left.cNum + this.right.cNum, 6 <= this.cNum ? this.win() : this.left.isPlay || this.right.isPlay || (this.left.isPlay = this.right.isPlay = !0, this.left.alpha = this.right.alpha = 1)
            }
        }, b.prototype.createFx = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "runFx");
            c.anchorX = c.anchorY = .5, this.addChild(c), c.x = a, c.y = b, d = this, egret.Tween.get(c).to({
                scaleX: 8,
                scaleY: 8,
                rotation: 360,
                alpha: 0
            }, 500).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.createFx_Over = function(a, b) {
            var d, c = Fw.tools.createBitmap(c, "loseFx");
            c.alpha = .7, c.anchorX = c.anchorY = .5, c.x = a, c.y = b, this.addChild(c), d = this, egret.Tween.get(c).to({
                alpha: 0
            }, 100).wait(100).to({
                alpha: .6
            }, 100).wait(100).to({
                alpha: 0
            }, 100).call(function() {
                d.removeChild(c)
            })
        }, b.prototype.start = function() {
            this.left.alpha = 1, this.right.alpha = 1, this.left.bg.init(), this.right.bg.init(), this.left.cNum = 0, this.right.cNum = 0, this.left.rotations = 0, this.right.rotations = 0, this.left.isPlay = !0, this.right.isPlay = !0, this.left.speed = 4, this.right.speed = -4, this.left.r.rotation = 30, this.right.r.rotation = 330, this.left.d.rotation = 0, this.right.d.rotation = 0, this.next()
        }, b.prototype.stop = function() {
            this.left.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.stop()
        }, b.prototype.rstart = function() {}, b.prototype.enterFrame = function() {
            this.left.isPlay && (this.left.r.rotation += this.left.speed, 360 <= this.left.rotations && (this.left.bg.remove() || this.over(), this.left.rotations = 0), GameData.resultRotation(this.left.r), this.left.rotations += Math.abs(this.left.speed)), this.right.isPlay && (this.right.r.rotation += this.right.speed, 360 <= this.right.rotations && (this.right.bg.remove() || this.over(), this.right.rotations = 0), GameData.resultRotation(this.right.r), this.right.rotations += Math.abs(this.right.speed))
        }, b.prototype.next = function() {
            this.left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Game.GameEnterFrame.start()
        }, b.prototype.over = function() {
            this.stop(), console.log("游戏失败"), this.dispatchEvent(new egret.Event("gamelose", !1, !1))
        }, b.prototype.win = function() {
            this.stop(), console.log("成功通关"), this.dispatchEvent(new egret.Event("gamewin", !1, !1))
        }, b
    }(egret.Sprite), level_9.prototype.__class__ = "level_9", __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, outlevel = function(a) {
        function b() {
            var b, c, d, e, f;
            a.call(this), this.textColor = 12040887, b = Fw.tools.createBitmap(b, "bg", !0), b.touchEnabled = !0, b.alpha = 0, this.addChild(b), c = Fw.tools.createBitmap(c, "cloud"), Fw.L_Positioning.StageAlign(c, {
                centerX: !0
            }), c.y = 330, d = Fw.tools.createBitmap(d, "wenhao"), this.addChild(c), this.addChild(d), d.x = 400, d.y = 410, d.scaleX = d.scaleY = .6, this.needTxt = Fw.tools.createTextLabel(this.needTxt, this.textColor, "center", "使用", 24, 160), this.needTxt.x = 200, this.needTxt.y = c.y + 48, this.addChild(this.needTxt), this.goldIcon = Fw.tools.createBitmap(this.goldIcon, "glod"), this.addChild(this.goldIcon), this.numTxt = Fw.tools.createTextLabel(this.numTxt, this.textColor, "left", "X10", 24), this.goldIcon.x = 360, this.goldIcon.y = 370, this.numTxt.x = this.goldIcon.x + this.goldIcon.width, this.numTxt.y = this.needTxt.y, this.addChild(this.numTxt), this.outLevelTxt = Fw.tools.createTextLabel(this.outLevelTxt, this.textColor, "center", "跳过本关", 24, 240), this.outLevelTxt.x = 150, this.outLevelTxt.y = this.needTxt.y + this.needTxt.height + 12, this.addChild(this.outLevelTxt), e = Fw.tools.createBitmap(e, "yes", !0), e.name = "toOutLevel_yes", this.addChild(e), e.x = 200, e.y = 480, f = Fw.tools.createBitmap(f, "no", !0), f.name = "toOutLevel_no", this.addChild(f), f.x = 380, f.y = 480
        }
        return __extends(b, a), b.prototype.init = function(a, b, c) {
            this.needTxt.text = a, this.numTxt.text = b, this.outLevelTxt.text = c
        }, b
    }(egret.Sprite), outlevel.prototype.__class__ = "outlevel";