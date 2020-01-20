var ns_egret;
(function (d) {
    var c = function () {
        function b() {
            this.isUseCapture = !1
        }

        b.prototype.addEventListener = function (a, e, b, g, c) {
            "undefined" === typeof g && (g = !1);
            "undefined" === typeof c && (c = 0);
            d.DEBUG && d.DEBUG.ADD_EVENT_LISTENER && d.DEBUG.checkAddEventListener(a, e, b, g, c);
            this._eventDataList || (this._eventDataList = []);
            for (var k = -1, l = {eventName: a, func: e, thisObj: b, useCapture: g, priority: c}, m = this._eventDataList.length, p = 0; p < m; p++) {
                var n = this._eventDataList[p];
                if (n.eventName == a && n.func == e && n.thisObj == b && n.useCapture == g)return;
                n.priority >= c && -1 == k && (k = p - 1)
            }
            -1 != k ? this._eventDataList.splice(p - 1, 0, l) : this._eventDataList.unshift(l)
        };
        b.prototype.removeEventListener = function (a, e, b, d) {
            "undefined" === typeof d && (d = !1);
            if (this._eventDataList)for (var c = this._eventDataList.length, k = 0; k < c; k++) {
                var l = this._eventDataList[k];
                if (l.eventName == a && l.func == e && l.thisObj == b && l.useCapture == d) {
                    this._eventDataList.splice(k, 1);
                    break
                }
            }
        };
        b.prototype.hasEventListener = function (a, e) {
            if (!this._eventDataList)return!1;
            for (var b = !1, d = this._eventDataList.length,
                     c = 0; c < d; c++) {
                var k = this._eventDataList[c];
                k.eventName == a && k.thisObj == e && (b = !0)
            }
            return b
        };
        b.prototype.dispatchEvent = function (a) {
            for (var e = 0; e < arguments.length - 1; e++);
            if (!this._eventDataList)return!1;
            for (var b = e = !1, g = this._eventDataList.length, c = 0; c < g; c++)if ((b = this._eventDataList[c]) && b.eventName == a && (!(this instanceof d.DisplayObject) || this.isUseCapture == b.useCapture))b = b.func.apply(b.thisObj, arguments), e = e || b;
            return e
        };
        return b
    }();
    d.EventDispatcher = c
})(ns_egret || (ns_egret = {}));
var __extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this)
        }

        __extends(a, b);
        a.prototype.run = function () {
            d.Ticker.getInstance().run();
            d.Ticker.getInstance().register(this.renderLoop, this, Number.MAX_VALUE);
            d.Ticker.getInstance().register(this.enterFrame, this, Number.MIN_VALUE);
            this.touchContext.run()
        };
        a.prototype.enterFrame = function () {
            this.dispatchEvent(a.EVENT_ENTER_FRAME)
        };
        a.prototype.renderLoop = function () {
            var e = this.rendererContext;
            e.clearScreen();
            this.dispatchEvent(a.EVENT_START_RENDER);
            this.stage.updateTransform();
            this.stage.draw(e);
            this.dispatchEvent(a.EVENT_FINISH_RENDER)
        };
        a.EVENT_ENTER_FRAME = "enter_frame";
        a.EVENT_START_RENDER = "start_render";
        a.EVENT_FINISH_RENDER = "finish_render";
        return a
    }(d.EventDispatcher);
    d.MainContext = c
})(ns_egret || (ns_egret = {}));
ns_egret.MainContext.instance = new ns_egret.MainContext;
(function (d) {
    var c = function () {
        function b() {
            this._tick = this._preDrawCount = this._renderPerformanceCost = this._logicPerformanceCost = this._lastFrameTime = this._lastTime = 0
        }

        b.getInstance = function () {
            null == b.instance && (b.instance = new b);
            return b.instance
        };
        b.prototype.run = function () {
            d.Ticker.getInstance().register(this.update, this);
            null == this._txt && (this._txt = new d.TextField, this._txt.size = 28, d.MainContext.instance.stage.addChild(this._txt));
            var a = d.MainContext.instance;
            a.addEventListener(d.MainContext.EVENT_ENTER_FRAME,
                this.onEnterFrame, this);
            a.addEventListener(d.MainContext.EVENT_START_RENDER, this.onStartRender, this);
            a.addEventListener(d.MainContext.EVENT_FINISH_RENDER, this.onFinishRender, this)
        };
        b.prototype.onEnterFrame = function () {
            this._lastTime = d.Ticker.now()
        };
        b.prototype.onStartRender = function () {
            var a = d.Ticker.now();
            this._logicPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        b.prototype.onFinishRender = function () {
            var a = d.Ticker.now();
            this._renderPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        b.prototype.update =
            function () {
                var a = d.Ticker.now(), e = a - this._lastFrameTime;
                this._lastFrameTime = a;
                this._tick++;
                if (6 == this._tick) {
                    this._tick = 0;
                    var a = (this._preDrawCount - 1).toString(), b = d.MainContext.instance.rendererContext.renderCost.toString(), b = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + b;
                    this._txt.text = a + "\n" + b + "\n" + Math.floor(1E3 / e).toString()
                }
                this._preDrawCount = 0
            };
        b.prototype.onDrawImage = function () {
            this._preDrawCount++
        };
        return b
    }();
    d.Profiler = c
})(ns_egret ||
    (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this._timeScale = 1;
            this._paused = !1;
            this._frameRate = 60
        }

        __extends(a, b);
        a.prototype.run = function () {
            this._time = a.now();
            a.requestAnimationFrame.call(window, this.enterFrame)
        };
        a.prototype.enterFrame = function () {
            a.requestAnimationFrame.call(window, a.instance.enterFrame);
            a.instance.update()
        };
        a.prototype.update = function () {
            if (this._eventDataList && !this._paused) {
                for (var e = a.now(), b = this._eventDataList.length, g = 0; g < b; g++) {
                    var c = this._eventDataList[g];
                    if (c && "enterFrame" == c.eventName && (!(this instanceof d.DisplayObject) || this.isUseCapture == c.useCapture)) {
                        var k = e - this._time, k = k * this._timeScale;
                        c.func.apply(c.thisObj, [k])
                    }
                }
                this._time = e
            }
        };
        a.prototype.register = function (a, f, d) {
            "undefined" === typeof d && (d = 0);
            b.prototype.addEventListener.call(this, "enterFrame", a, f, !1, d)
        };
        a.prototype.unregister = function (a, f) {
            b.prototype.removeEventListener.call(this, "enterFrame", a, f, !1)
        };
        a.prototype.callLater = function (a, b, d) {
            "undefined" === typeof d && (d = 0);
            var c = this, k = 0;
            this.register(function (l) {
                0 == d ? (c.unregister(arguments.callee, b), a.apply(b)) : (k += l, k >= d && (c.unregister(arguments.callee, b), a.apply(b)))
            }, b)
        };
        a.prototype.setTimeScale = function (a) {
            this._timeScale = a
        };
        a.prototype.getTimeScale = function () {
            return this._timeScale
        };
        a.prototype.pause = function () {
            this._paused = !0
        };
        a.prototype.resume = function () {
            this._paused = !1
        };
        a.prototype.getFrameRate = function () {
            return this._frameRate
        };
        a.getInstance = function () {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        a.now = function () {
            return(new Date).getTime()
        };
        a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            return window.setTimeout(e, 1E3 / a.getInstance().getFrameRate())
        };
        return a
    }(d.EventDispatcher);
    d.Ticker = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a, f) {
            "undefined" === typeof a && (a = 1E3);
            "undefined" === typeof f && (f = -1);
            b.call(this);
            this._actionInterval = a;
            this._totalActionTimes = f
        }

        __extends(a, b);
        a.prototype.start = function () {
            this._preTime = d.Ticker.now();
            0 != this._actionTimes && (this._actionTimes = 0);
            d.Ticker.getInstance().register(this.onEnterFrame, this)
        };
        a.prototype.stop = function () {
            d.Ticker.getInstance().unregister(this.onEnterFrame, this)
        };
        a.prototype.onEnterFrame = function () {
            var e = d.Ticker.now();
            for (this._passTime =
                     e - this._preTime; this._passTime > this._actionInterval;) {
                this._passTime -= this._actionInterval;
                this.dispatchEvent(a.ON_TIMER);
                this._actionTimes++;
                if (-1 != this._actionTimes && this._actionTimes >= this._totalActionTimes) {
                    this.stop();
                    break
                }
                this._preTime = e
            }
        };
        a.ON_TIMER = "onTimer";
        return a
    }(d.EventDispatcher);
    d.Timer = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function a(a, b, d, c) {
            this.x = a;
            this.y = b;
            this.width = d;
            this.height = c
        }

        a.prototype.initialize = function (a, b, d, c) {
            this.x = a;
            this.y = b;
            this.width = d;
            this.height = c;
            return this
        };
        a.prototype.containPoint = function (a, b) {
            return this.x <= a && this.x + this.width >= a && this.y <= b && this.y + this.height >= b
        };
        a.prototype.clone = function () {
            return new a(this.x, this.y, this.width, this.height)
        };
        a.identity = new a(0, 0, 0, 0);
        return a
    }();
    d.Rectangle = c;
    c = function () {
        function a(a, b, d, c, k, l) {
            "undefined" === typeof a &&
            (a = 1);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof d && (d = 0);
            "undefined" === typeof c && (c = 1);
            "undefined" === typeof k && (k = 0);
            "undefined" === typeof l && (l = 0);
            this.a = a;
            this.b = b;
            this.c = d;
            this.d = c;
            this.tx = k;
            this.ty = l
        }

        a.prototype.prepend = function (a, b, d, c, k, l) {
            var m = this.tx;
            if (1 != a || 0 != b || 0 != d || 1 != c) {
                var p = this.a, n = this.c;
                this.a = p * a + this.b * d;
                this.b = p * b + this.b * c;
                this.c = n * a + this.d * d;
                this.d = n * b + this.d * c
            }
            this.tx = m * a + this.ty * d + k;
            this.ty = m * b + this.ty * c + l;
            return this
        };
        a.prototype.append = function (a, b, d, c, k, l) {
            var m =
                this.a, p = this.b, n = this.c, q = this.d;
            this.a = a * m + b * n;
            this.b = a * p + b * q;
            this.c = d * m + c * n;
            this.d = d * p + c * q;
            this.tx = k * m + l * n + this.tx;
            this.ty = k * p + l * q + this.ty;
            return this
        };
        a.prototype.prependMatrix = function (a) {
            this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
            return this
        };
        a.prototype.appendMatrix = function (a) {
            this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
            return this
        };
        a.prototype.prependTransform = function (e, b, d, c, k, l, m, p, n) {
            if (k % 360) {
                var q = k * a.DEG_TO_RAD;
                k = Math.cos(q);
                q = Math.sin(q)
            } else k = 1, q = 0;
            if (p || n)this.tx -= p, this.ty -= n;
            l || m ? (l *=
                a.DEG_TO_RAD, m *= a.DEG_TO_RAD, this.prepend(k * d, q * d, -q * c, k * c, 0, 0), this.prepend(Math.cos(m), Math.sin(m), -Math.sin(l), Math.cos(l), e, b)) : this.prepend(k * d, q * d, -q * c, k * c, e, b);
            return this
        };
        a.prototype.appendTransform = function (e, b, d, c, k, l, m, p, n) {
            if (k % 360) {
                var q = k * a.DEG_TO_RAD;
                k = Math.cos(q);
                q = Math.sin(q)
            } else k = 1, q = 0;
            l || m ? (l *= a.DEG_TO_RAD, m *= a.DEG_TO_RAD, this.append(Math.cos(m), Math.sin(m), -Math.sin(l), Math.cos(l), e, b), this.append(k * d, q * d, -q * c, k * c, 0, 0)) : this.append(k * d, q * d, -q * c, k * c, e, b);
            if (p || n)this.tx -= p * this.a +
                n * this.c, this.ty -= p * this.b + n * this.d;
            return this
        };
        a.prototype.appendTransformFromDisplay = function (a) {
            var b, d;
            0 != a.relativeAnchorPointX || 0 != a.relativeAnchorPointY ? (d = a.getBounds(), b = d.width * a.relativeAnchorPointX, d = d.height * a.relativeAnchorPointY) : (b = a.anchorPointX, d = a.anchorPointY);
            this.identity();
            this.appendTransform(a.x, a.y, a.scaleX, a.scaleY, a.rotation, a.skewX, a.skewY, b, d);
            return this
        };
        a.prototype.rotate = function (a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            var d = this.a, c = this.c, k = this.tx;
            this.a = d * b - this.b *
                a;
            this.b = d * a + this.b * b;
            this.c = c * b - this.d * a;
            this.d = c * a + this.d * b;
            this.tx = k * b - this.ty * a;
            this.ty = k * a + this.ty * b;
            return this
        };
        a.prototype.skew = function (e, b) {
            e *= a.DEG_TO_RAD;
            b *= a.DEG_TO_RAD;
            this.append(Math.cos(b), Math.sin(b), -Math.sin(e), Math.cos(e), 0, 0);
            return this
        };
        a.prototype.scale = function (a, b) {
            this.a *= a;
            this.d *= b;
            this.c *= a;
            this.b *= b;
            this.tx *= a;
            this.ty *= b;
            return this
        };
        a.prototype.translate = function (a, b) {
            this.tx += a;
            this.ty += b;
            return this
        };
        a.prototype.identity = function () {
            this.a = this.d = 1;
            this.b = this.c =
                this.tx = this.ty = 0;
            return this
        };
        a.prototype.invert = function () {
            var a = this.a, b = this.b, d = this.c, c = this.d, k = this.tx, l = a * c - b * d;
            this.a = c / l;
            this.b = -b / l;
            this.c = -d / l;
            this.d = a / l;
            this.tx = (d * this.ty - c * k) / l;
            this.ty = -(a * this.ty - b * k) / l;
            return this
        };
        a.prototype.isIdentity = function () {
            return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
        };
        a.prototype.transformPoint = function (a, b, d) {
            d = d || {};
            d.x = a * this.a + b * this.c + this.tx;
            d.y = a * this.b + b * this.d + this.ty;
            return d
        };
        a.prototype.decompose = function (e) {
            null ==
            e && (e = {});
            e.x = this.tx;
            e.y = this.ty;
            e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
            e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var b = Math.atan2(-this.c, this.d), d = Math.atan2(this.b, this.a);
            b == d ? (e.rotation = d / a.DEG_TO_RAD, 0 > this.a && 0 <= this.d && (e.rotation += 0 >= e.rotation ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = b / a.DEG_TO_RAD, e.skewY = d / a.DEG_TO_RAD);
            return e
        };
        a.transformCoords = function (a, f, d) {
            var c = new b(0, 0);
            c.x = a.a * f + a.c * d + a.tx;
            c.y = a.d * d + a.b * f + a.ty;
            return c
        };
        a.identity = new a;
        a.DEG_TO_RAD = Math.PI / 180;
        return a
    }();
    d.Matrix2D = c;
    var b = function () {
        function a(a, b) {
            this.x = a;
            this.y = b
        }

        a.identity = new a(0, 0);
        return a
    }();
    d.Point = b
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.fatal = function (a, e) {
            "undefined" === typeof e && (e = null);
            d.Logger.traceToConsole("Fatal", a, e);
            throw Error(d.Logger.getTraceCode("Fatal", a, e));
        };
        b.info = function (a, e) {
            "undefined" === typeof e && (e = null);
            d.Logger.traceToConsole("Info", a, e)
        };
        b.warning = function (a, e) {
            "undefined" === typeof e && (e = null);
            d.Logger.traceToConsole("Warning", a, e)
        };
        b.traceToConsole = function (a, e, b) {
            console.log(d.Logger.getTraceCode(a, e, b))
        };
        b.getTraceCode = function (a, e, b) {
            return"[" + a + "]" + e + ":" +
                (null == b ? "" : b)
        };
        return b
    }();
    d.Logger = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.CENTER = "center";
        b.LEFT = "left";
        b.RIGHT = "right";
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.BOTH = "both";
        b.HORIZONTAL = "horizontal";
        b.VERTICAL = "vertical";
        return b
    }();
    d.Direction = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
            throw Error("can't create a mixin class");
        }

        b.prototype.onActivity = function () {
        };
        b.prototype.onCancel = function () {
        };
        return b
    }();
    d.ComponentBase = c;
    c = function () {
        function b() {
        }

        b.active = function (a, e) {
            var b = e.prototype, d;
            for (d in b)null == a[d] ? a[d] = b[d] : console.log("warning", d);
            a.onActivity()
        };
        return b
    }();
    d.MixIn = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function () {
        function e() {
            this._originalDesignHeight = this._originalDesignWidth = this._designHeight = this._designWidth = this._frameHeight = this._frameWidth = null;
            this._scaleY = this._scaleX = 1;
            this._resolutionPolicy = this._frame = null;
            this._frame = document.getElementById(e.canvas_div_name);
            this._frameWidth = this._frame.style.width;
            this._frameHeight = this._frame.style.height;
            var a = document.getElementById(e.canvas_name), b = a.width, a = a.height;
            this._designWidth = b;
            this._designHeight = a;
            this._originalDesignWidth =
                b;
            this._originalDesignHeight = a
        }

        e.getInstance = function () {
            null == e.instance && (a.initialize(), f.initialize(), e.instance = new e);
            return e.instance
        };
        e.prototype.setFrameSize = function (a, e) {
            this._frameWidth = a;
            this._frameHeight = e;
            this._frame.style.width = a + "px";
            this._frame.style.height = e + "px";
            this._resizeEvent()
        };
        e.prototype._resizeEvent = function () {
            var a = this._originalDesignWidth, e = this._originalDesignHeight;
            0 < a && this.setDesignSize(a, e, this._resolutionPolicy)
        };
        e.prototype.setDesignSize = function (a, e, b) {
            isNaN(a) ||
                0 == a || isNaN(e) || 0 == e ? d.Logger.info("Resolution Error") : (this.setResolutionPolicy(b), this._designWidth = a, this._designHeight = e, this._originalDesignWidth = a, this._originalDesignHeight = e, this._resolutionPolicy.apply(this, this._designWidth, this._designHeight), d.MainContext.instance.stage.stageWidth = this._designWidth, d.MainContext.instance.stage.stageHeight = this._designHeight)
        };
        e.prototype.setResolutionPolicy = function (e) {
            if (e instanceof b)this._resolutionPolicy = e; else switch (e) {
                case b.FIXED_HEIGHT:
                    this._resolutionPolicy =
                        new b(a.EQUAL_TO_FRAME, f.FIXED_HEIGHT);
                    break;
                case b.FIXED_WIDTH:
                    this._resolutionPolicy = new b(a.EQUAL_TO_FRAME, f.FIXED_WIDTH)
            }
            null != this._resolutionPolicy ? this._resolutionPolicy.init(this) : d.Logger.fatal("\u9700\u8981\u5148\u8bbe\u7f6eresolutionPolicy")
        };
        e.prototype.getScaleX = function () {
            return this._scaleX
        };
        e.prototype.getScaleY = function () {
            return this._scaleY
        };
        e.canvas_name = "gameCanvas";
        e.canvas_div_name = "gameDiv";
        return e
    }();
    d.StageDelegate = c;
    var b = function () {
        function e(a, b) {
            this._contentStrategy =
                this._containerStrategy = null;
            this.setContainerStrategy(a);
            this.setContentStrategy(b)
        }

        e.prototype.init = function (a) {
            this._containerStrategy.init(a);
            this._contentStrategy.init(a)
        };
        e.prototype.apply = function (a, e, b) {
            this._containerStrategy.apply(a, e, b);
            return this._contentStrategy.apply(a, e, b)
        };
        e.prototype.setContainerStrategy = function (e) {
            e instanceof a && (this._containerStrategy = e)
        };
        e.prototype.setContentStrategy = function (a) {
            a instanceof f && (this._contentStrategy = a)
        };
        e.FIXED_HEIGHT = 1;
        e.FIXED_WIDTH = 2;
        return e
    }();
    d.ResolutionPolicy = b;
    var a = function () {
        function a() {
        }

        a.initialize = function () {
            a.EQUAL_TO_FRAME = new e
        };
        a.prototype.init = function (a) {
        };
        a.prototype.apply = function (a, e, b) {
        };
        a.prototype._setupContainer = function (a, e, b) {
            document.getElementById(c.canvas_name);
            document.getElementById(c.canvas_div_name);
            a = document.body;
            var d;
            if (a && (d = a.style))d.paddingTop = d.paddingTop || "0px", d.paddingRight = d.paddingRight || "0px", d.paddingBottom = d.paddingBottom || "0px", d.paddingLeft = d.paddingLeft || "0px", d.borderTop = d.borderTop ||
                "0px", d.borderRight = d.borderRight || "0px", d.borderBottom = d.borderBottom || "0px", d.borderLeft = d.borderLeft || "0px", d.marginTop = d.marginTop || "0px", d.marginRight = d.marginRight || "0px", d.marginBottom = d.marginBottom || "0px", d.marginLeft = d.marginLeft || "0px"
        };
        a.prototype._fixContainer = function () {
            document.body.insertBefore(document.getElementById(c.canvas_div_name), document.body.firstChild);
            var a = document.body.style;
            a.width = window.innerWidth + "px";
            a.height = window.innerHeight + "px";
            a.overflow = "hidden";
            a = document.getElementById(c.canvas_div_name).style;
            a.position = "fixed";
            a.left = a.top = "0px";
            document.body.scrollTop = 0
        };
        a.EQUAL_TO_FRAME = null;
        return a
    }();
    d.ContainerStrategy = a;
    var e = function (a) {
        function e() {
            a.apply(this, arguments)
        }

        __extends(e, a);
        e.prototype.apply = function (a) {
            this._setupContainer(a._frame, a._frameWidth, a._frameHeight)
        };
        return e
    }(a);
    d.EqualToFrame = e;
    var f = function () {
        function a() {
            this._result = {scale: [1, 1], x: null, y: null, w: null, h: null}
        }

        a.initialize = function () {
            a.FIXED_HEIGHT = new g;
            a.FIXED_WIDTH = new h
        };
        a.prototype.init = function (a) {
        };
        a.prototype.apply =
            function (a, e, b) {
                return{scale: [1, 1]}
            };
        a.FIXED_HEIGHT = null;
        a.FIXED_WIDTH = null;
        return a
    }();
    d.ContentStrategy = f;
    var g = function (a) {
        function e() {
            a.apply(this, arguments)
        }

        __extends(e, a);
        e.prototype.apply = function (a, e, b) {
            var d = document.getElementById(c.canvas_name), f = document.getElementById(c.canvas_div_name), g = d.height / b, h = window.innerHeight, g = h / b, k = e * g;
            d.width = e;
            d.height = b;
            d.style.width = k + "px";
            d.style.height = h + "px";
            f.style.width = k + "px";
            f.style.height = h + "px";
            a._scaleX = g;
            a._scaleY = g
        };
        return e
    }(f);
    d.FixedHeight =
        g;
    var h = function (a) {
        function e() {
            a.apply(this, arguments)
        }

        __extends(e, a);
        e.prototype.apply = function (a, e, b) {
            b = document.getElementById(c.canvas_name);
            var d = document.getElementById(c.canvas_div_name), f = document.documentElement.clientWidth, g = document.documentElement.clientHeight, h = f / e;
            b.width = e;
            b.height = g / h;
            b.style.width = f + "px";
            b.style.height = g + "px";
            d.style.width = f + "px";
            d.style.height = g + "px";
            a._scaleX = h;
            a._scaleY = h
        };
        return e
    }(f);
    d.FixedWidth = h;
    var k = function (a) {
        function e(a, b) {
            this.width = a;
            this.height =
                b
        }

        __extends(e, a);
        e.prototype.apply = function (a, e, b) {
            b = document.getElementById(c.canvas_name);
            var d = document.getElementById(c.canvas_div_name), f = this.width, g = this.height, h = f / e;
            b.width = e;
            b.height = g / h;
            b.style.width = f + "px";
            b.style.height = g + "px";
            d.style.width = f + "px";
            d.style.height = g + "px";
            a._scaleX = h;
            a._scaleY = h
        };
        return e
    }(f);
    d.FixedSize = k
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (a) {
        function e() {
            a.call(this);
            this.parent = null;
            this.scaleY = this.scaleX = 1;
            this.rotation = this.relativeAnchorPointY = this.relativeAnchorPointX = this.anchorPointY = this.anchorPointX = 0;
            this.alpha = 1;
            this.skewY = this.skewX = 0;
            this._isRunning = !1;
            this.x = this.y = 0;
            this.visible = !0;
            this.worldTransform = new d.Matrix2D;
            this.worldAlpha = 1
        }

        __extends(e, a);
        e.prototype.draw = function (a) {
            this.visible && !unstable.cache_api.draw.call(this, a) && (a.setAlpha(this.worldAlpha, this.blendMode), a.setTransform(this.worldTransform),
                this.mask && (a.save(), a.clip(this.mask.x, this.mask.y, this.mask.width, this.mask.height)), this.render(a), this.mask && a.restore())
        };
        e.prototype.updateTransform = function () {
            this.worldTransform.identity();
            this.worldTransform = this.worldTransform.appendMatrix(this.parent.worldTransform);
            var a, e;
            0 != this.relativeAnchorPointX || 0 != this.relativeAnchorPointY ? (e = this.getBounds(), a = e.width * this.relativeAnchorPointX, e = e.height * this.relativeAnchorPointY) : (a = this.anchorPointX, e = this.anchorPointY);
            this.worldTransform.appendTransform(this.x,
                this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, a, e);
            this.worldAlpha = this.parent.worldAlpha * this.alpha
        };
        e.prototype.render = function (a) {
        };
        e.prototype.ignoreRender = function () {
            var a = e.getTransformBounds(this.getBounds(), this.worldTransform);
            return 0 >= a.x + a.width || a.x >= d.MainContext.instance.stage.stageWidth || 0 >= a.y + a.height || a.y >= d.MainContext.instance.stage.stageHeight ? !0 : !1
        };
        e.prototype.getBounds = function () {
            if (void 0 !== this._contentWidth) {
                var a, e;
                0 != this.relativeAnchorPointX || 0 !=
                    this.relativeAnchorPointY ? (a = this._contentWidth * this.relativeAnchorPointX, e = this._contentHeight * this.relativeAnchorPointY) : (a = this.anchorPointX, e = this.anchorPointY);
                return d.Rectangle.identity.initialize(-a, -e, this._contentWidth, this._contentHeight)
            }
            return this._measureBounds()
        };
        e.prototype.setContentSize = function (a, e) {
            this._contentWidth = a;
            this._contentHeight = e
        };
        e.prototype.getConcatenatedMatrix = function () {
            for (var a = d.Matrix2D.identity.identity(), e = this; null != e;) {
                if (0 != e.relativeAnchorPointX || 0 !=
                    e.relativeAnchorPointY) {
                    var b = e.getBounds();
                    a.prependTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, b.width * e.relativeAnchorPointX, b.height * e.relativeAnchorPointY)
                } else a.prependTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.anchorPointX, e.anchorPointY);
                e = e.parent
            }
            return a
        };
        e.prototype.localToGlobal = function (a, e) {
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof e && (e = 0);
            var b = this.getConcatenatedMatrix();
            b.append(1, 0, 0, 1, a, e);
            var c = d.Point.identity;
            c.x = b.tx;
            c.y =
                b.ty;
            return c
        };
        e.prototype.globalToLocal = function (a, e) {
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof e && (e = 0);
            var b = this.getConcatenatedMatrix();
            b.invert();
            b.append(1, 0, 0, 1, a, e);
            var c = d.Point.identity;
            c.x = b.tx;
            c.y = b.ty;
            return c
        };
        e.prototype.hitTest = function (a, e, b) {
            "undefined" === typeof b && (b = !1);
            if (!this.visible || !b && !this.touchEnabled)return null;
            b = this.getBounds();
            return 0 < a && a < b.width && 0 < e && e < b.height ? this.mask ? this.mask.x < a && a < this.mask.x + this.mask.width && this.mask.y < e && e < this.mask.y + this.mask.height ?
                this : null : this : null
        };
        e.prototype.getMatrix = function () {
            return d.Matrix2D.identity.identity().appendTransformFromDisplay(this)
        };
        e.prototype._measureBounds = function () {
            d.Logger.fatal("\u5b50\u7c7b\u9700\u8981\u5b9e\u73b0\u7684\u65b9\u6cd5");
            return d.Rectangle.identity
        };
        e.prototype.setAnchorPoint = function (a, e) {
            this.anchorPointX = a;
            this.anchorPointY = e
        };
        e.prototype.setRelativeAnchorPoint = function (a, e) {
            0 > a || 1 < a || 0 > e || 1 < e ? d.Logger.warning("\u76f8\u5bf9\u951a\u70b9\u53ea\u63a5\u53d70-1\u4e4b\u95f4\u7684\u503c") :
                (this.relativeAnchorPointX = a, this.relativeAnchorPointY = e)
        };
        e.prototype.getOffsetPoint = function () {
            var a = this.anchorPointX, e = this.anchorPointY;
            if (0 != this.relativeAnchorPointX || 0 != this.relativeAnchorPointY)e = this.getBounds(), a = this.relativeAnchorPointX * e.width, e = this.relativeAnchorPointY * e.height;
            var b = d.Point.identity;
            b.x = a;
            b.y = e;
            return b
        };
        e.prototype.removeFromParent = function () {
            this && this.parent && this.parent.removeChild(this)
        };
        e.prototype._onAddToStage = function () {
            this._isRunning = !0;
            this.dispatchEvent(b.ADD_TO_STAGE)
        };
        e.prototype._onRemoveFromStage = function () {
            this._isRunning = !1;
            this.dispatchEvent(b.REMOVE_FROM_STAGE)
        };
        e.prototype.isRunning = function () {
            return this._isRunning
        };
        e.getTransformBounds = function (a, e) {
            var b = a.x, d = a.y, c = a.width, m = a.height, p = c * e.a, c = c * e.b, n = m * e.c, m = m * e.d, q = e.tx, s = e.ty, x = q, A = q, B = s, D = s;
            (b = p + q) < x ? x = b : b > A && (A = b);
            (b = p + n + q) < x ? x = b : b > A && (A = b);
            (b = n + q) < x ? x = b : b > A && (A = b);
            (d = c + s) < B ? B = d : d > D && (D = d);
            (d = c + m + s) < B ? B = d : d > D && (D = d);
            (d = m + s) < B ? B = d : d > D && (D = d);
            return a.initialize(x, B, A - x, D - B)
        };
        return e
    }(d.EventDispatcher);
    d.DisplayObject = c;
    var b = function () {
        function a() {
        }

        a.ADD_TO_STAGE = "addToStage";
        a.REMOVE_FROM_STAGE = "removeFromStage";
        return a
    }();
    d.DisplayListEvent = b
})(ns_egret || (ns_egret = {}));
var unstable = unstable || {};
unstable.cache_api = {};
unstable.cache_api.cacheAsBitmap = function (d) {
    d && (d = new ns_egret.RenderTexture, d.drawToTexture(this), this.renderTexture = d)
};
unstable.cache_api.draw = function (d) {
    if (this.renderTexture) {
        var c = this.renderTexture, b = c.offsetX, a = c.offsetY, e = c.getTextureWidth(), c = c.getTextureHeight();
        this.updateTransform();
        d.setAlpha(this.worldAlpha, this.blendMode);
        d.setTransform(this.worldTransform);
        this.mask && (d.save(), d.clip(this.mask.x, this.mask.y, this.mask.width, this.mask.height));
        d.drawImage(this.renderTexture, 0, 0, e, c, b, a, e / ns_egret.MainContext.instance.rendererContext.texture_scale_factor, c / ns_egret.MainContext.instance.rendererContext.texture_scale_factor);
        this.mask && d.restore();
        return!0
    }
    return!1
};
ns_egret.DisplayObject.prototype.cacheAsBitmap = unstable.cache_api.cacheAsBitmap;
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            this._children = [];
            this.numChildren = 0;
            b.call(this)
        }

        __extends(a, b);
        a.prototype.setChildIndex = function (a, b) {
            var c = this._children.indexOf(a);
            0 > c && d.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(c, 1);
            0 > b || this._children.length <= b ? this._children.push(a) : this._children.splice(b, 0, a)
        };
        a.prototype.addChild = function (a, b) {
            "undefined" === typeof b && (b = -1);
            null != a.parent ? d.Logger.fatal("child\u5df2\u7ecf\u88ab\u6dfb\u52a0\u5230\u663e\u793a\u5217\u8868") :
                this._children.length < b && d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            -1 == b ? this._children.push(a) : 0 <= b ? this._children.splice(b, 0, a) : d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            a.parent = this;
            this.isRunning() && a._onAddToStage();
            this.numChildren++
        };
        a.prototype.removeChild = function (a) {
            a = this._children.indexOf(a);
            0 <= a ? this.removeChildAt(a) : d.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent")
        };
        a.prototype.removeChildAt = function (a) {
            var b =
                this._children;
            0 <= a && a < b.length ? (a = b.splice(a, 1)[0], a.parent = null, this.isRunning() && a._onRemoveFromStage(), this.numChildren--) : d.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent")
        };
        a.prototype.getChildAt = function (a) {
            return this._children[a]
        };
        a.prototype.getChildByName = function (a) {
            return null
        };
        a.prototype.getChildIndex = function (a) {
            return this._children.indexOf(a)
        };
        a.prototype.removeAllChildren = function () {
            for (var a = this._children; 0 < a.length;) {
                var b = a.pop();
                b.parent = null;
                this.isRunning() && b._onRemoveFromStage()
            }
            this.numChildren =
                0
        };
        a.prototype.updateTransform = function () {
            if (this.visible) {
                b.prototype.updateTransform.call(this);
                for (var a = 0, d = this._children.length; a < d; a++)this._children[a].updateTransform()
            }
        };
        a.prototype.render = function (a) {
            if (this.visible)for (var b = 0, d = this._children.length; b < d; b++)this._children[b].draw(a)
        };
        a.prototype._measureBounds = function () {
            for (var a = 0, b = 0, c = 0, h = 0, k = this._children.length, l = 0; l < k; l++) {
                var m = this._children[l], p;
                if (m.visible && (p = d.DisplayObject.getTransformBounds(m.getBounds(), m.getMatrix()))) {
                    var m =
                        p.x, n = p.y, q = p.width + p.x, s = p.height + p.y;
                    if (m < a || 0 == l)a = m;
                    if (q > b || 0 == l)b = q;
                    if (n < c || 0 == l)c = n;
                    if (s > h || 0 == l)h = s
                }
            }
            return d.Rectangle.identity.initialize(a, c, b - a, h - c)
        };
        a.prototype.hitTest = function (a, b) {
            var c;
            if (!this.visible || this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > b || b > this.mask.y + this.mask.height))return null;
            for (var h = this._children, k = h.length - 1; 0 <= k; k--) {
                var l = h[k], m = l, p = m.getOffsetPoint(), m = d.Matrix2D.identity.identity().prependTransform(m.x, m.y, m.scaleX, m.scaleY, m.rotation,
                    0, 0, p.x, p.y);
                m.invert();
                m = d.Matrix2D.transformCoords(m, a, b);
                if (l = l.hitTest(m.x, m.y, !0)) {
                    if (l.touchEnabled)return l;
                    if (this.touchEnabled)return this;
                    null == c && (c = l)
                }
            }
            return c
        };
        a.prototype._onAddToStage = function () {
            b.prototype._onAddToStage.call(this);
            for (var a = 0; a < this.numChildren; a++)this._children[a]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function () {
            b.prototype._onRemoveFromStage.call(this);
            for (var a = 0; a < this.numChildren; a++)this._children[a]._onRemoveFromStage()
        };
        return a
    }(d.DisplayObject);
    d.DisplayObjectContainer = c
})(ns_egret || (ns_egret = {}));
unstable = unstable || {};
unstable.modal_api = {};
unstable.modal_api.setModal = function (d) {
    void 0 == d && (d = !0);
    this.touchEnabled = this._modal = d
};
var hitTest = ns_egret.DisplayObjectContainer.prototype.hitTest;
ns_egret.DisplayObjectContainer.prototype.hitTest = function (d, c) {
    if (!1 == this.visible)return null;
    var b = hitTest.call(this, d, c);
    return this._modal ? b ? b : this : b
};
ns_egret.DisplayObjectContainer.prototype.setModal = unstable.modal_api.setModal;
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._isRunning = this.touchEnabled = !0;
            var a = document.getElementById(d.StageDelegate.canvas_name);
            this.stageWidth = a.width;
            this.stageHeight = a.height
        }

        __extends(a, b);
        a.prototype.hitTest = function (a, b) {
            if (!this.touchEnabled)return null;
            var c;
            if (!this.visible)return this;
            for (var h = this._children, k = h.length - 1; 0 <= k; k--) {
                var l = c = h[k], m = l.getOffsetPoint(), l = d.Matrix2D.identity.identity().prependTransform(l.x, l.y, l.scaleX, l.scaleY, l.rotation, 0, 0, m.x, m.y);
                l.invert();
                l = d.Matrix2D.transformCoords(l, a, b);
                if ((c = c.hitTest(l.x, l.y, !0)) && c.touchEnabled)return c
            }
            return this
        };
        a.prototype.getBounds = function () {
            return d.Rectangle.identity.initialize(0, 0, 1E5, 1E5)
        };
        a.prototype.updateTransform = function () {
            for (var a = 0, b = this._children.length; a < b; a++)this._children[a].updateTransform()
        };
        return a
    }(d.DisplayObjectContainer);
    d.Stage = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this.debug = !1;
            this.debugColor = "#ff0000"
        }

        __extends(a, b);
        a.initWithTexture = function (e) {
            if (null == e)throw Error("texture \u53d6\u4e0d\u5230 ");
            var b = new a;
            b.texture = e;
            return b
        };
        a.prototype.render = function (e) {
            if (!b.prototype.ignoreRender.call(this)) {
                var d = this.texture;
                if (!(null == d || null == d._bitmapData)) {
                    var c, h, k, l;
                    this.spriteFrame ? (l = this.spriteFrame, c = l.x, h = l.y, k = l.w, l = l.h) : (h = c = 0, k = d.getTextureWidth(), l = d.getTextureHeight());
                    e.drawImage(d, c, h,
                        k, l, 0, 0, k, l);
                    (a.debug || this.debug) && e.strokeRect(c, h, k, l, this.debugColor)
                }
            }
        };
        a.prototype._measureBounds = function () {
            var a = this.spriteFrame, b, c;
            a ? (b = a.w, c = a.h) : this.texture ? (b = this.texture.getTextureWidth(), c = this.texture.getTextureHeight()) : d.Logger.fatal("\u83b7\u53d6BitmapBounds\u5931\u8d25");
            var h;
            0 != this.relativeAnchorPointX || 0 != this.relativeAnchorPointY ? (a = b * this.relativeAnchorPointX, h = c * this.relativeAnchorPointY) : (a = this.anchorPointX, h = this.anchorPointY);
            return d.Rectangle.identity.initialize(-a,
                -h, b, c)
        };
        a.debug = !1;
        return a
    }(d.DisplayObject);
    d.Bitmap = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this.text = ""
        }

        __extends(a, b);
        a.prototype.render = function (a) {
            this.text && (this.text = this.text.toString(), this._renderText(a))
        };
        a.prototype._renderText = function (a, b) {
            "undefined" === typeof b && (b = !1);
            for (var c = this._contentHeight = this._contentWidth = 0, h = this.text.length; c < h; c++) {
                var k = this.text.charAt(c), l = this.bitmapFontData[k];
                null == l && d.Logger.fatal("BitmapText\uff1a\u5f02\u5e38\u7684bitmapFontData: ", k);
                var k = l.offX, m = l.offY, p = l.w;
                b || (a.drawImage(this.texture,
                    l.x, l.y, l.w, l.h, k, m, l.w, l.h), a.translate(p, 0));
                this._contentWidth += p + k;
                m + l.h > this._contentHeight && (this._contentHeight = m + l.h)
            }
        };
        a.prototype.getBounds = function () {
            this._renderText(d.MainContext.instance.rendererContext, !0);
            var a, b;
            0 != this.relativeAnchorPointX || 0 != this.relativeAnchorPointY ? (a = this._contentWidth * this.relativeAnchorPointX, b = this._contentHeight * this.relativeAnchorPointY) : (a = this.anchorPointX, b = this.anchorPointY);
            return d.Rectangle.identity.initialize(-a, -b, this._contentWidth, this._contentHeight)
        };
        return a
    }(d.DisplayObject);
    d.BitmapText = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments)
        }

        __extends(a, b);
        a.prototype.hitTest = function (a, d) {
            return b.prototype.hitTest.call(this, a, d)
        };
        return a
    }(d.DisplayObject);
    d.Shape = c;
    c = function (b) {
        function a() {
            this._color = 16777215;
            this._colorDirty = !0;
            b.call(this)
        }

        __extends(a, b);
        Object.defineProperty(a.prototype, "color", {get: function () {
            return this._color
        }, set: function (a) {
            this._colorDirty = !0;
            this._color = a
        }, enumerable: !0, configurable: !0});
        Object.defineProperty(a.prototype, "alpha", {get: function () {
            return this._alpha
        },
            set: function (a) {
                this._colorDirty = !0;
                this._alpha = a
            }, enumerable: !0, configurable: !0});
        a.prototype.render = function (a) {
            if (this._colorDirty) {
                var b = this._color;
                this._colorBlue = b & 255;
                this._colorGreen = (b & 65280) >> 8;
                this._colorRed = b >> 16;
                this._colorStr = "rgba(" + this._colorRed + "," + this._colorGreen + "," + this._colorBlue + "," + this._alpha + ")";
                this._colorDirty = !1
            }
            a = a.canvas.getContext("2d");
            a.fillStyle = this._colorStr;
            a.fillRect(0, 0, this._contentWidth, this._contentHeight)
        };
        return a
    }(d.Shape);
    d.ShapeRect = c
})(ns_egret ||
    (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this.font = "Arial";
            this.size = 30;
            this.textColor = "#ffffff";
            this.strokeColor = "#000000";
            this.stroke = 0;
            this.__hackIgnoreDrawText = !1;
            this.hSpacing = this.vSpacing = 0;
            this.textAlign = "left"
        }

        __extends(a, b);
        a.prototype.render = function (a) {
            this.text && (a.setupFont(this.size + "px " + this.font, this.textAlign, this.textBaseline), this.drawText(a))
        };
        a.prototype.getBounds = function () {
            var a = d.MainContext.instance.rendererContext;
            a.setupFont(this.size + "px " + this.font, this.textAlign,
                this.textBaseline);
            this.drawText(a, !0);
            var b;
            0 != this.relativeAnchorPointX || 0 != this.relativeAnchorPointY ? (a = this._contentWidth * this.relativeAnchorPointX, b = this._contentHeight * this.relativeAnchorPointY) : (a = this.anchorPointX, b = this.anchorPointY);
            return d.Rectangle.identity.initialize(-a, -b, this._contentWidth, this._contentHeight)
        };
        a.prototype.drawText = function (a, d) {
            "undefined" === typeof d && (d = !1);
            d && (this.__hackIgnoreDrawText = !0);
            var c = 0, h = String(this.text).split(/(?:\r\n|\r|\n)/), k = 0, l = this.size + this.vSpacing,
                m = 0;
            if (null == this.lineWidth || 0 == this.lineWidth) {
                for (var m = h.length, p = 0, n = m; p < n; p++) {
                    var q = h[p], s = a.measureText(q);
                    s.width > c && (c = s.width)
                }
                p = 0;
                for (n = m; p < n; p++)q = h[p], this._drawTextLine(a, q, k, c), k += l
            } else {
                c = this.lineWidth;
                p = 0;
                for (n = h.length; p < n; p++) {
                    q = h[p];
                    s = a.measureText(q);
                    if (s.width > this.lineWidth)for (var s = q, x = 0, q = "", A = 0; A < s.length; A++) {
                        var B = a.measureText(s[A]).width;
                        x + B > this.lineWidth ? 0 == x ? (x += B, q += s[A], c = B) : (this._drawTextLine(a, q, k, c), m++, A--, q = "", x = 0, k += l) : (x += B, q += s[A])
                    }
                    this._drawTextLine(a,
                        q, k, c);
                    m++;
                    k += l
                }
            }
            d && (b.prototype.setContentSize.call(this, c, m * l), this.__hackIgnoreDrawText = !1);
            return null
        };
        a.prototype.setContentSize = function (a, d) {
            b.prototype.setContentSize.call(this, a, d);
            this.lineWidth = a
        };
        a.prototype._drawTextLine = function (a, b, d, c) {
            this.__hackIgnoreDrawText || a.drawText(this, b, "left" == this.textAlign ? 0 : "center" == this.textAlign ? c / 2 : c, d, c)
        };
        return a
    }(d.DisplayObject);
    d.TextField = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function a(a) {
            this.frames = a.frames
        }

        a.prototype.getFrame = function (a) {
            var b = this.frames[a];
            null == b && d.Logger.fatal("\u6ca1\u6709\u627e\u5230\u76f8\u5e94\u7684frame\uff1a", a);
            return b
        };
        a.parseFromDragonBones = function (e) {
            var d = new a(e);
            d.frames = {};
            e = e.SubTexture;
            for (var c in e) {
                var h = e[c], k = new b;
                k.w = h.width;
                k.h = h.height;
                k.x = h.x;
                k.y = h.y;
                d.frames[h.name] = k
            }
            return d
        };
        return a
    }();
    d.SpriteSheet = c;
    var b = function () {
        return function () {
        }
    }();
    d.SpriteSheetFrame = b
})(ns_egret || (ns_egret =
{}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this._placeholderText = "";
            this._edFontSize = 14;
            this._textColor = "#ff0000";
            this._placeholderFontSize = 14;
            this._placeholderColor = "#ffff00";
            this._preY = this._preX = 0
        }

        __extends(a, b);
        a.prototype._onAddToStage = function () {
            b.prototype._onAddToStage.call(this);
            var a = this.localToGlobal(), f = new d.StageText;
            f.open(a.x, a.y, this._contentWidth, this._contentHeight);
            this.addEventListener(d.TouchEvent.TOUCH_BEGAN, this.onMouseDownHandler, this);
            this.stageText =
                f
        };
        a.prototype.setText = function (a) {
            this.stageText.setText(a)
        };
        a.prototype.getText = function () {
            return this.stageText.getText()
        };
        a.prototype.onMouseDownHandler = function () {
        };
        a.prototype._onRemoveFromStage = function () {
            this.stageText.remove()
        };
        a.prototype._measureBounds = function () {
            return d.Rectangle.identity
        };
        a.prototype.hitTest = function (a, b) {
            return null
        };
        return a
    }(d.DisplayObject);
    d.TextInput = c;
    c = function () {
        function b() {
        }

        b.prototype.editBoxEditingDidBegin = function (a) {
        };
        b.prototype.editBoxEditingDidEnd =
            function (a) {
            };
        b.prototype.editBoxTextChanged = function (a, b) {
        };
        b.prototype.editBoxReturn = function (a) {
        };
        return b
    }();
    d.TextInputDegelete = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a, f) {
            b.call(this);
            this.data = a;
            this.texture = f;
            this._resPool = {};
            this._currentInterval = this._interval = this._totalFrame = this._currentFrameIndex = 0;
            this._isPlaying = !1;
            this._passTime = 0;
            this._oneFrameTime = 1E3 / d.Ticker.getInstance().getFrameRate();
            this._frameData = a
        }

        __extends(a, b);
        a.prototype.gotoAndPlay = function (a) {
            this.checkHasFrame(a);
            this._isPlaying = !0;
            this._currentInterval = this._currentFrameIndex = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame();
            this._passTime = 0;
            d.Ticker.getInstance().register(this.update, this)
        };
        a.prototype.gotoAndStop = function (a) {
            this.checkHasFrame(a);
            this.stop();
            this._currentInterval = this._currentFrameIndex = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame()
        };
        a.prototype.checkHasFrame = function (a) {
            void 0 == this._frameData.frames[a] && d.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
        };
        a.prototype.stop = function () {
            this._isPlaying = !1;
            d.Ticker.getInstance().unregister(this.update,
                this)
        };
        a.prototype.update = function (a) {
            if (this._interval != this._currentInterval)this._currentInterval++; else {
                for (var b = Math.floor((this._passTime % this._oneFrameTime + a) / this._oneFrameTime); 1 <= b;)1 == b ? this.playNextFrame() : this.playNextFrame(!1), b--;
                this._passTime += a
            }
        };
        a.prototype.playNextFrame = function (a) {
            "undefined" === typeof a && (a = !0);
            this._currentInterval = 0;
            var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            a && (a = this.getBitmap(b.res), a.x = b.x, a.y = b.y, this.removeAllChildren(),
                this.addChild(a));
            null != b.action && this.dispatchEvent(b.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0)
        };
        a.prototype.getBitmap = function (a) {
            var b;
            if (null != this._resPool[a])b = this._resPool[a]; else {
                var c = this._frameData.res[a];
                b = d.Bitmap.initWithTexture(this.texture);
                b.spriteFrame = c;
                this._resPool[a] = b
            }
            return b
        };
        a.prototype.release = function () {
            this._resPool = {}
        };
        a.prototype.getCurrentFrameIndex = function () {
            return this._currentFrameIndex
        };
        a.prototype.getTotalFrame =
            function () {
                return this._totalFrame
            };
        a.prototype.setInterval = function (a) {
            this._interval = a
        };
        a.prototype.getIsPlaying = function () {
            return this._isPlaying
        };
        return a
    }(d.DisplayObjectContainer);
    d.MovieClip = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._callArr = []
        }

        __extends(a, b);
        a.prototype.init = function () {
            this._callArr = [];
            for (var a = this._currentTag = 0; a < this.numChildren; a++) {
                var b = this.getChildAt(a), d = this, c = function () {
                    var a = d._callArr.indexOf(this);
                    d.chooseIdx(a)
                };
                this._callArr.push(c);
                b.addOnClick(c, c);
                b.useZoomOut(!1)
            }
        };
        a.prototype.chooseIdx = function (a) {
            this._currentTag = a + 1;
            for (var b = 0; b < this.numChildren; b++) {
                var d = this.getChildAt(b);
                b == a ? d.setChoose(!0) : d.setChoose(!1)
            }
            this.onClick(a)
        };
        a.prototype.setDefaultTag = function (a) {
            this.chooseIdx(a - 1)
        };
        a.prototype.addOnClick = function (a, b) {
            this._callBack = a;
            this._target = b
        };
        a.prototype.onClick = function (a) {
            this._callBack && this._target && this._callBack.apply(this._target, [a + 1])
        };
        a.prototype.useZoomOut = function (a) {
            for (var b = 0; b < this.numChildren; b++)this.getChildAt(b).useZoomOut(a)
        };
        a.prototype.getCurrentTag = function () {
            var a = Math.max(this._currentTag, 1);
            return a = Math.min(a, this.numChildren)
        };
        return a
    }(d.DisplayObjectContainer);
    d.TabView = c
})(ns_egret ||
    (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._frames = [];
            this._currentFrame = 1;
            this._scale = 1.1;
            this._initScaleY = this._initScaleX = 0;
            this._canScale = !0;
            this._frameNumber = 0;
            this._canScale = this.touchEnabled = !0
        }

        __extends(a, b);
        a.prototype.hitTest = function (a, b) {
            return d.DisplayObject.prototype.hitTest.call(this, a, b)
        };
        a.prototype._onAddToStage = function () {
            b.prototype._onAddToStage.call(this);
            this.addListeners();
            this._initScaleX = this.scaleX;
            this._initScaleY = this.scaleY
        };
        a.prototype._onRemoveFromStage =
            function () {
                b.prototype._onRemoveFromStage.call(this);
                this.removeListeners()
            };
        a.prototype.addListeners = function () {
            this.addEventListener(d.TouchEvent.TOUCH_BEGAN, this.mouseDown, this)
        };
        a.prototype.removeListeners = function () {
            this.removeEventListener(d.TouchEvent.TOUCH_BEGAN, this.mouseDown, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_END, this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
        };
        a.prototype.mouseDown = function (a, b) {
            this._isMoved = !1;
            d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_END, this.mouseUp, this);
            d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            this._startX = b.stageX;
            this._startY = b.stageY;
            this.setChoose(!0)
        };
        a.prototype.mouseUp = function () {
            this._isMoved || (this.setChoose(!1), this.onClick());
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_END, this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE,
                this.mouseMove, this)
        };
        a.prototype.mouseMove = function (a, b) {
            var c = b.stageY;
            10 > Math.abs(b.stageX - this._startX) && 10 > Math.abs(c - this._startY) || (this._isMoved = !0, this.setChoose(!1), d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this))
        };
        a.prototype.addOnClick = function (a, b) {
            this._callBack = a;
            this._target = b
        };
        a.prototype.onClick = function () {
            this._callBack && this._target && this._callBack.apply(this._target, [])
        };
        a.prototype.setEnabled = function (a) {
            this.touchEnabled = a
        };
        a.prototype.useZoomOut =
            function (a) {
                this._canScale = a
            };
        a.prototype.initFontTextField = function (a) {
            this._textField = a;
            a instanceof d.TextField && (a.stroke = 2);
            if (a && null != a.parent) {
                if (a.parent == this)return;
                a.removeFromParent()
            }
            this.addChild(a)
        };
        a.prototype.setFontText = function (a, b) {
            "undefined" === typeof b && (b = 30);
            if (null == this._textField) {
                this._textField = new d.TextField;
                this._textField.setContentSize(0, 0);
                this._textField.textColor = "#ffffff";
                this._textField.textAlign = "center";
                this._textField.font = "Courier-Bold";
                this._textField.size =
                    b;
                this._textField.stroke = 2;
                this.addChild(this._textField);
                this._textField.relativeAnchorPointX = 0.5;
                this._textField.relativeAnchorPointY = 0.5;
                var c = this.getBounds();
                this._textField.x = c.width / 2;
                this._textField.y = c.height / 2
            }
            this._textField.text = a
        };
        a.prototype.setFontColor = function (a) {
        };
        a.prototype.setChoose = function (a) {
            this.playZoomOut(!a);
            this.setFrameChild(a ? 2 : 1)
        };
        a.prototype.playZoomOut = function (a) {
            this._canScale && (this.scaleX = a ? this._initScaleX : this._initScaleX * this._scale, this.scaleY = a ? this._initScaleY :
                this._initScaleY * this._scale)
        };
        a.prototype.initFrameRes = function (a, b, d) {
            this._currentFrame = b;
            this._frameRes = a;
            this._frames[b - 1] = d
        };
        a.prototype.changeBtn = function (a) {
            if (this._frameRes != a) {
                this._frameRes = a;
                for (var b = a = 0; b < this._frames.length; b++) {
                    var d = this._frames[b];
                    d && (a = this.getChildIndex(d), this.removeChild(d), this._frames[b] = null)
                }
                this.setFrameChild(this._currentFrame, a)
            }
        };
        a.prototype.setFrameNumber = function (a, b) {
            this._frameRes = a;
            b = Math.max(0, b);
            2 < b && (b = 0);
            this._frameNumber = b
        };
        a.prototype.isInFrames =
            function (a) {
                return 0 == this._frameNumber || 0 < (a & this._frameNumber)
            };
        a.prototype.setFrameChild = function (a, b) {
            "undefined" === typeof b && (b = 0);
            if (this._frameRes) {
                var c = this.getFrameChild(this._currentFrame), h = b;
                c && (c.visible = !1, h = this.getChildIndex(c));
                this._currentFrame = a;
                if (this.isInFrames(a)) {
                    c = this.getFrameChild(a);
                    if (null == c) {
                        c = this.getIndexRes(this._frameRes, 1, a);
                        c = d.TextureCache.getInstance().getTexture(c);
                        c = d.Bitmap.initWithTexture(c);
                        this._frames[a - 1] = c;
                        c.relativeAnchorPointX = 0.5;
                        c.relativeAnchorPointY =
                            0.5;
                        var k = this.getBounds();
                        c.x = k.width / 2;
                        c.y = k.height / 2;
                        this.addChild(c, h)
                    }
                    c.visible = !0
                }
            }
        };
        a.prototype.getFrameChild = function (a) {
            return this._frames[a - 1]
        };
        a.prototype.getIndexRes = function (a, b, c) {
            var h = a.lastIndexOf(".");
            h < b && d.Logger.fatal("the argument [count] too large");
            b = a.substring(0, h - b);
            a = a.substring(h);
            return b + c + a
        };
        return a
    }(d.DisplayObjectContainer);
    d.SimpleButton = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._initY = this._initX = 0;
            this._deltaTime = 200;
            this.direction = d.Direction.BOTH;
            this.touchEnabled = !0;
            this._endY = this._endX = 0;
            this.mask = new d.Rectangle(0, 0, 100, 100)
        }

        __extends(a, b);
        a.prototype._onAddToStage = function () {
            b.prototype._onAddToStage.call(this);
            this.addListeners()
        };
        a.prototype._onRemoveFromStage = function () {
            b.prototype._onRemoveFromStage.call(this);
            this.removeListeners()
        };
        a.prototype.setContentSize = function (a, d) {
            b.prototype.setContentSize.call(this,
                a, d);
            this._viewWidth = a;
            this._viewHeight = d;
            this.mask.width = a;
            this.mask.height = d
        };
        a.prototype.setContainer = function (a, b, d) {
            this._container && this._container.removeFromParent();
            this._container = a;
            this._initWidth = b;
            this._initHeight = d;
            this._endY = this._endX = 0;
            if (null != this._container.parent)if (this._container.parent != this)this._container.removeFromParent(); else return;
            this.addChild(this._container, 0)
        };
        a.prototype.mouseDown = function (a, b) {
            this.touchEnabled && null != this._container && (this._isMoved = !1, d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_END,
                this.mouseUp, this), d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_CANCEL, this.mouseUp, this), d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this), console.log("begin"), d.Tween.removeTweens(this._container), this._initX = this._container.x, this._initY = this._container.y, this._endX = this._container.x, this._endY = this._container.y, this._downPX = b.stageX, this._downPY = b.stageY, this._downTime = d.Ticker.now())
        };
        a.prototype.mouseUp = function (a, b) {
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_END,
                this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_CANCEL, this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            console.log("end");
            var c = d.Ticker.now();
            if (c - this._downTime > this._deltaTime)this._backToPosition(); else {
                var h = b.stageX - this._downPX, k = b.stageY - this._downPY, c = 2 * Math.floor(this._deltaTime / (c - this._downTime));
                if (this.direction == d.Direction.BOTH || this.direction == d.Direction.HORIZONTAL)this._endX +=
                    h * c;
                if (this.direction == d.Direction.BOTH || this.direction == d.Direction.VERTICAL)this._endY += k * c;
                h = Math.max(100 * c, 100);
                h = Math.min(h, 300);
                k = d.Tween.get(this._container, {onChange: this.moveList, onChangeObj: this});
                k.to({x: this._endX, y: this._endY}, h);
                k.call(this._backToPosition, this)
            }
        };
        a.prototype.mouseMove = function (a, b) {
            var c = b.stageX - this._downPX, h = b.stageY - this._downPY;
            if (this.direction == d.Direction.BOTH || this.direction == d.Direction.HORIZONTAL)this._endX = this._initX + c;
            if (this.direction == d.Direction.BOTH ||
                this.direction == d.Direction.VERTICAL)this._endY = this._initY + h;
            this._container.x = this._endX;
            this._container.y = this._endY;
            this.moveList()
        };
        a.prototype._backToPosition = function () {
            var a = !1;
            0 < this._endX ? (a = !0, this._endX = 0) : this._endX < this._viewWidth - this._initWidth && (a = !0, this._endX = this._viewWidth >= this._initWidth ? 0 : this._viewWidth - this._initWidth);
            0 < this._endY ? (a = !0, this._endY = 0) : this._endY < this._viewHeight - this._initHeight && (a = !0, this._endY = this._viewHeight >= this._initHeight ? 0 : this._viewHeight - this._initHeight);
            a && d.Tween.get(this._container, {onChange: this.moveList, onChangeObj: this}).to({x: this._endX, y: this._endY}, 200)
        };
        a.prototype.moveList = function () {
        };
        a.prototype.addListeners = function () {
            this.addEventListener(d.TouchEvent.TOUCH_BEGAN, this.mouseDown, this)
        };
        a.prototype.removeListeners = function () {
            this.removeEventListener(d.TouchEvent.TOUCH_BEGAN, this.mouseDown, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_CANCEL, this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_END,
                this.mouseUp, this);
            d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            console.log("remove")
        };
        return a
    }(d.DisplayObjectContainer);
    d.ScrollView = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._currentIndex = 0;
            this._itemArr = [];
            this.disappearContainer = new d.DisplayObjectContainer;
            this.addChild(this.disappearContainer)
        }

        __extends(a, b);
        a.prototype.setContentSize = function (a, d) {
            b.prototype.setContentSize.call(this, a, d)
        };
        a.prototype.reloadData = function (a) {
            this._dataArr = a || [];
            new d.DisplayObjectContainer;
            var b, c;
            a = 0;
            this.direction == d.Direction.HORIZONTAL ? (b = this._itemWidth * this._dataArr.length, c = this._itemHeight, a = Math.floor(-this._container.x /
                this._itemWidth)) : (b = this._itemWidth, c = this._itemHeight * this._dataArr.length, a = Math.floor(-this._container.y / this._itemHeight));
            this._initWidth = b;
            this._initHeight = c;
            b = this._container.numChildren;
            for (c = 0; c < b; c++) {
                var h = this._container.getChildAt(c);
                this.initItem(h, a + c)
            }
            this._currentIndex = a;
            this._backToPosition()
        };
        a.prototype.showAnimation = function () {
            if (this.direction == d.Direction.VERTICAL)for (var a = 0, b = 0; a < this._container.numChildren; a++) {
                var c = this._container.getChildAt(a);
                if (c.visible) {
                    var h = d.Tween.get(c);
                    c.x = this._itemWidth;
                    h.wait(100 * b + 10);
                    h.to({x: 0}, 200);
                    b++
                }
            }
        };
        a.prototype.hideAnimation = function () {
            if (this.direction == d.Direction.VERTICAL)for (var a = 0, b = 0; a < this._container.numChildren; a++) {
                var c = this._container.getChildAt(a);
                if (c.visible) {
                    var h = d.Tween.get(c);
                    c.x = 0;
                    h.wait(100 * b + 10);
                    h.to({x: this._itemWidth}, 200);
                    b++
                }
            }
        };
        a.prototype.setList = function (a, b, c, h, k) {
            this._dataArr = a || [];
            this._delegate = c;
            this._itemWidth = h;
            this._itemHeight = k;
            this.direction = b;
            a = new d.DisplayObjectContainer;
            this.direction == d.Direction.HORIZONTAL ?
                this.setContainer(a, this._itemWidth * this._dataArr.length, this._itemHeight) : this.setContainer(a, this._itemWidth, this._itemHeight * this._dataArr.length);
            this.initItemList()
        };
        a.prototype.initItemList = function () {
            if (!(0 == this._itemWidth || 0 == this._itemHeight || 0 == this._viewWidth || 0 == this._viewHeight)) {
                var a = 0, a = this.direction == d.Direction.HORIZONTAL ? Math.ceil(this._viewWidth / this._itemWidth) + 1 : Math.ceil(this._viewHeight / this._itemHeight) + 1;
                this._itemArr = [];
                for (var b = 0; b < a; b++) {
                    var c = this._delegate.createItemRenderer();
                    this._container.addChild(c);
                    this._itemArr.push(c);
                    this.initItem(c, b)
                }
                this._currentIndex = 0
            }
        };
        a.prototype.getCurrent = function () {
            var a = 0, a = this.direction == d.Direction.HORIZONTAL ? Math.floor(-this._container.x / this._itemWidth) : Math.floor(-this._container.y / this._itemHeight);
            a > this._dataArr.length - this._itemArr.length ? a = this._dataArr.length - this._itemArr.length : 0 > a && (a = 0);
            return a
        };
        a.prototype.moveList = function () {
            var a = this.getCurrent();
            if (a != this._currentIndex) {
                var b = a - this._currentIndex;
                console.log("deltaIdx " +
                    b);
                console.log("current " + a);
                console.log("this._currentIndex " + this._currentIndex);
                if (0 > b)for (var d = 0; d < -b; d++) {
                    var c = this._container.getChildAt(this._container.numChildren - 1);
                    this._container.setChildIndex(c, 0);
                    var k = a + (-b - 1) - d;
                    this.initItem(c, k)
                } else for (var l = this._container.numChildren, d = 0; d < b; d++)c = this._container.getChildAt(0), this._container.setChildIndex(c, -1), k = b >= l ? a + d : a + l - 1 - (b - 1 - d), this.initItem(c, k);
                this._currentIndex = a
            }
        };
        a.prototype.initItem = function (a, b) {
            b >= this._dataArr.length ? a.visible = !1 : 0 > b ? a.visible = !1 : (a.visible = !0, console.log("item index " + b), this._delegate.updateItemRenderer(a, this._dataArr[b], b));
            this.direction == d.Direction.HORIZONTAL ? a.x = this._itemWidth * b : a.y = this._itemHeight * b
        };
        return a
    }(d.ScrollView);
    d.TableView = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.prototype.getText = function () {
            return this.inputElement.value
        };
        b.prototype.setText = function (a) {
            this.inputElement.value = a
        };
        b.prototype.open = function (a, b, c, g) {
            "undefined" === typeof c && (c = 160);
            "undefined" === typeof g && (g = 21);
            var h = document.createElement("input");
            h.type = "text";
            h.style.fontSize = "20px";
            h.style.color = "#FFFFFF";
            h.style.borderStyle = "none";
            h.style.background = "none";
            h.style.width = c * d.StageDelegate.getInstance().getScaleX() + "px";
            h.style.height = g * d.StageDelegate.getInstance().getScaleY() +
                "px";
            h.style.outline = "medium";
            var k = d.Browser.getInstance().$new("div");
            k.style.position = "absolute";
            k.position.x = a * d.StageDelegate.getInstance().getScaleX();
            k.style.width = c * d.StageDelegate.getInstance().getScaleX() + "px";
            k.style.height = g * d.StageDelegate.getInstance().getScaleY() + "px";
            k.position.y = b * d.StageDelegate.getInstance().getScaleY();
            k.transforms();
            k.appendChild(h);
            a = d.Browser.getInstance().$("#StageDelegateDiv");
            a || (c = document.getElementById(d.StageDelegate.canvas_div_name), g = c.clientHeight,
                c = c.clientWidth, a = d.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", a.style.position = "absolute", a.style.width = c + "px", a.style.maxHeight = g + "px", a.style.margin = 0, document.getElementById(d.StageDelegate.canvas_div_name).appendChild(a), a.position.y = -g, a.transforms());
            a.appendChild(k);
            this.div = k;
            this.inputElement = h
        };
        b.prototype.remove = function () {
            var a = this.div;
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        return b
    }();
    d.StageText = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
            this.renderCost = 0;
            this.texture_scale_factor = 1
        }

        b.prototype.clearScreen = function () {
        };
        b.prototype.clearRect = function (a, b, d, c) {
        };
        b.prototype.drawImage = function (a, b, c, g, h, k, l, m, p) {
            d.Profiler.getInstance().onDrawImage()
        };
        b.prototype.setTransform = function (a) {
        };
        b.prototype.translate = function (a, b) {
        };
        b.prototype.save = function () {
        };
        b.prototype.restore = function () {
        };
        b.prototype.setAlpha = function (a, b) {
        };
        b.prototype.setupFont = function (a, b, d) {
        };
        b.prototype.measureText = function (a) {
            return d.Rectangle.identity
        };
        b.prototype.drawText = function (a, b, c, g, h) {
            d.Profiler.getInstance().onDrawImage()
        };
        b.prototype.clip = function (a, b, d, c) {
        };
        b.prototype.strokeRect = function (a, b, d, c, h) {
        };
        return b
    }();
    d.RendererContext = c;
    c = function () {
        function b(a) {
            this.type = a;
            switch (a) {
                case "add":
                case "layer":
                    this.value = "lighter";
                    break;
                default:
                    this.value = "source-over"
            }
        }

        b.getBlendMode = function (a) {
            return!a ? d.BlendMode.NORMAL : d.BlendMode[a.toUpperCase()]
        };
        b.NORMAL = new b("normal");
        b.ADD = new b("add");
        b.LAYER = new b("layer");
        return b
    }();
    d.BlendMode =
        c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a) {
            this.canvas = a;
            this.canvasContext = a.getContext("2d");
            b.call(this)
        }

        __extends(a, b);
        a.prototype.clearScreen = function () {
            var a = this.canvas;
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            this.clearRect(0, 0, a.width, a.height);
            this.renderCost = 0
        };
        a.prototype.clearRect = function (a, b, d, c) {
            this.canvasContext.clearRect(a, b, d, c)
        };
        a.prototype.drawImage = function (a, c, g, h, k, l, m, p, n) {
            c /= d.MainContext.instance.rendererContext.texture_scale_factor;
            g /= d.MainContext.instance.rendererContext.texture_scale_factor;
            h /= d.MainContext.instance.rendererContext.texture_scale_factor;
            k /= d.MainContext.instance.rendererContext.texture_scale_factor;
            d.DEBUG && d.DEBUG.DRAW_IMAGE && d.DEBUG.checkDrawImage(a, c, g, h, k, l, m, p, n);
            var q = d.Ticker.now();
            a = a._bitmapData;
            this.canvasContext.drawImage(a, c, g, h, k, l, m, p, n);
            b.prototype.drawImage.call(this, a, c, g, h, k, l, m, p, n);
            this.renderCost += d.Ticker.now() - q
        };
        a.prototype.setTransform = function (a) {
            this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty)
        };
        a.prototype.translate = function (a, b) {
            this.canvasContext.translate(a,
                b)
        };
        a.prototype.save = function () {
            this.canvasContext.save()
        };
        a.prototype.restore = function () {
            this.canvasContext.restore()
        };
        a.prototype.setAlpha = function (a, b) {
            a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
            this.canvasContext.globalCompositeOperation = b ? b.value : d.BlendMode.NORMAL.value
        };
        a.prototype.setupFont = function (a, b, d) {
            var c = this.canvasContext;
            c.font = a;
            c.textAlign = b || "left";
            c.textBaseline = d || "top"
        };
        a.prototype.measureText = function (a) {
            a = this.canvasContext.measureText(a);
            var b =
                d.Rectangle.identity;
            b.width = a.width;
            b.height = a.height;
            return b
        };
        a.prototype.drawText = function (a, d, c, h, k) {
            var l = a.textColor, m = a.strokeColor;
            a = a.stroke;
            var p = this.canvasContext;
            p.fillStyle = l;
            p.strokeStyle = m;
            a && (p.lineWidth = 2 * a, p.strokeText(d, c, h, k || 65535));
            p.fillText(d, c, h, k || 65535);
            b.prototype.drawText.call(this, d, c, h, k, a, l, m)
        };
        a.prototype.clip = function (a, b, d, c) {
            this.canvasContext.beginPath();
            this.canvasContext.rect(a, b, d, c);
            this.canvasContext.clip();
            this.canvasContext.closePath()
        };
        a.prototype.strokeRect =
            function (a, b, d, c, k) {
                this.canvasContext.strokeStyle = k;
                this.canvasContext.strokeRect(a, b, d, c)
            };
        return a
    }(d.RendererContext);
    d.HTML5CanvasRenderer = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function a(a) {
            this.canvas = a;
            this._currentTouchTarget = {};
            this.maxTouchs = 2
        }

        a.prototype.run = function () {
            var a = this;
            "ontouchstart"in window ? (this.canvas.addEventListener("touchstart", function (b) {
                for (var d = b.changedTouches.length, c = 0; c < d && c < a.maxTouchs; c++)a.onTouchBegin(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            }, !1), this.canvas.addEventListener("touchmove", function (b) {
                for (var d = b.changedTouches.length, c = 0; c < d && c < a.maxTouchs; c++)a.onTouchMove(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            }, !1), this.canvas.addEventListener("touchend", function (b) {
                for (var d = b.changedTouches.length, c = 0; c < d && c < a.maxTouchs; c++)a.onTouchEnd(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            }, !1), this.canvas.addEventListener("touchcancel", function (b) {
                for (var d = b.changedTouches.length, c = 0; c < d && c < a.maxTouchs; c++)a.onTouchEnd(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            }, !1)) : (this.canvas.addEventListener("mousedown", function (b) {
                a.onTouchBegin(b)
            }),
                this.canvas.addEventListener("mousemove", function (b) {
                    a.onTouchMove(b)
                }), this.canvas.addEventListener("mouseup", function (b) {
                a.onTouchEnd(b)
            }))
        };
        a.prototype.onTouchBegin = function (e) {
            var c = a.getLocation(this.canvas, e), g = c.x, h = c.y;
            if (c = d.MainContext.instance.stage.hitTest(g, h))e = this.getTouchData(e, g, h), e.target = c, e.beginTarget = c, a.dispachEvent(b.TOUCH_BEGAN, e)
        };
        a.prototype.onTouchMove = function (e) {
            var c = a.getLocation(this.canvas, e), g = c.x, h = c.y;
            if (c = d.MainContext.instance.stage.hitTest(g, h))e = this.getTouchData(e,
                g, h), e.target = c, a.dispachEvent(b.TOUCH_MOVE, e)
        };
        a.prototype.onTouchEnd = function (e) {
            var c = a.getLocation(this.canvas, e), g = c.x, h = c.y;
            if (c = d.MainContext.instance.stage.hitTest(g, h)) {
                e = this.getTouchData(e, g, h);
                if (g = e.beginTarget)e.target = e.beginTarget, a.dispachEvent(b.TOUCH_CANCEL, e);
                e.target = c;
                a.dispachEvent(b.TOUCH_END, e);
                g === c && a.dispachEvent(b.TOUCH_TAP, e);
                delete this._currentTouchTarget[e.identifier]
            }
        };
        a.prototype.getTouchData = function (a, b, d) {
            var c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            a = this._currentTouchTarget[c];
            null == a && (a = {});
            this._currentTouchTarget[c] = a;
            a.stageX = b;
            a.stageY = d;
            a.identifier = c;
            return a
        };
        a.dispachEvent = function (a, d) {
            var c = d.target, h = b.identity;
            h.touchId = d.identifier;
            h.stageX = d.stageX;
            h.stageY = d.stageY;
            h.target = c;
            for (var k = [], l = c; l.parent;)k.unshift(l.parent), l = l.parent;
            k.push(c);
            for (var c = k.length, m = c - 1; 0 <= m; m--)k.push(k[m]);
            c = k.length;
            for (m = 0; m < c && !(l = k[m], l.isUseCapture = m < c / 2 ? !0 : !1, h.currentTarget = l, l.dispatchEvent(a, h)); m++);
        };
        a.getLocation = function (a, b) {
            var c =
                document.documentElement, h = window, k, l;
            "function" === typeof a.getBoundingClientRect ? (l = a.getBoundingClientRect(), k = l.left, l = l.top) : l = k = 0;
            k += h.pageXOffset - c.clientLeft;
            l += h.pageYOffset - c.clientTop;
            null != b.pageX ? (c = b.pageX, h = b.pageY) : (k -= document.body.scrollLeft, l -= document.body.scrollTop, c = b.clientX, h = b.clientY);
            var m = d.Point.identity;
            m.x = (c - k) / d.StageDelegate.getInstance().getScaleX();
            m.y = (h - l) / d.StageDelegate.getInstance().getScaleY();
            return m
        };
        return a
    }();
    d.TouchContext = c;
    var b = function () {
        function a() {
        }

        a.prototype.getLocalPoint = function () {
            return this.currentTarget.globalToLocal(this.stageX, this.stageY)
        };
        a.TOUCH_BEGAN = "touchBegan";
        a.TOUCH_END = "touchEnd";
        a.TOUCH_CANCEL = "touchCancel";
        a.TOUCH_TAP = "touchTap";
        a.TOUCH_MOVE = "touchMove";
        a.identity = new a;
        return a
    }();
    d.TouchEvent = b
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(d, c) {
            b.call(this);
            this.type = this.url = null;
            this.state = a.LOAD_STATE_INIT;
            this.fixedUrl = this.data = null;
            this.url = d;
            var g = d.indexOf("?");
            this.fixedUrl = -1 < g ? d.substring(0, g) : d;
            this.type = c
        }

        __extends(a, b);
        a.prototype.load = function () {
            switch (this.state) {
                case a.LOAD_STATE_INIT:
                    this.startLoading();
                    break;
                case a.LOAD_STATE_LOADED:
                    d.Ticker.getInstance().callLater(this._executeAllCallback, this)
            }
        };
        a.prototype.startLoading = function () {
            this.type == a.DATA_TYPE_IMAGE ? this._loadByImage() :
                this._loadByAjax()
        };
        a.prototype._executeAllCallback = function (b) {
            this.state = a.LOAD_STATE_LOADED;
            b && (this.data = b);
            if (this.onLoadComplete)this.onLoadComplete(this.data);
            this.dispatchEvent(a.LOAD_COMPLETE, this.data)
        };
        a.prototype._loadByAjax = function () {
            var b = this, c = new d.URLRequest(a.prefix + this.url, function (a) {
                a = b._processXMLHttpResponse(a);
                b._executeAllCallback(a)
            }, this);
            c.type = this.type;
            d.NetContext.getInstance().send(c)
        };
        a.prototype._loadByImage = function () {
            var b = new Image;
            b.crossOrigin = "Anonymous";
            var c = a.prefix + this.url, g = this, h = function () {
                var a = d.Texture.create(g.fixedUrl);
                a.bitmapData = b;
                d.TextureCache.getInstance().addTexture(g.fixedUrl, a);
                b.removeEventListener("load", h);
                b.removeEventListener("error", h);
                g._executeAllCallback(b)
            }, k = function () {
                b.removeEventListener("error", k)
            };
            b.addEventListener("load", h);
            b.addEventListener("error", k);
            b.src = c;
            return b
        };
        a.prototype._setXMLHttpRequestHeader = function (b) {
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? this.type == a.DATA_TYPE_BINARY ?
                b.setRequestHeader("Accept-Charset", "x-user-defined") : b.setRequestHeader("Accept-Charset", "utf-8") : b.overrideMimeType && (this.type == a.DATA_TYPE_BINARY ? b.overrideMimeType("text/plain; charset\x3dx-user-defined") : b.overrideMimeType("text/plain; charset\x3dutf-8"))
        };
        a.prototype._processXMLHttpResponse = function (b) {
            if (this.type == a.DATA_TYPE_TEXT)return b.responseText;
            var d;
            if (!/msie/i.test(navigator.userAgent) || /opera/i.test(navigator.userAgent))d = b.responseText;
            return this._stringConvertToArray(d)
        };
        a.prototype._stringConvertToArray =
            function (a) {
                if (!a)return null;
                for (var b = new Uint8Array(a.length), d = 0; d < a.length; d++)b[d] = a.charCodeAt(d) & 255;
                return b
            };
        a.create = function (b, c) {
            "undefined" === typeof c && (c = "");
            if (null == a.__pool[b]) {
                var g = b.substring(b.lastIndexOf(".") + 1), g = a.__registerMap[g];
                g || (g = d.ResourceLoader);
                a.__pool[b] = new g(b, c)
            }
            return a.__pool[b]
        };
        a.registerHandler = function (b, d) {
            a.__registerMap[b] = d
        };
        a.LOAD_COMPLETE = "resource_load_complete";
        a.DATA_TYPE_BINARY = "binary";
        a.DATA_TYPE_TEXT = "text";
        a.DATA_TYPE_IMAGE = "image";
        a.LOAD_STATE_INIT =
            0;
        a.LOAD_STATE_LOADED = 1;
        a.__pool = {};
        a.prefix = "";
        a.__registerMap = {};
        return a
    }(d.EventDispatcher);
    d.ResourceLoader = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this._resourceUrlList = null;
            this._currentIndex = 0;
            this._state = d.LoadingController.LOAD_STATE_IDLE
        }

        __extends(a, b);
        a.prototype.addResource = function (a, b) {
            "undefined" === typeof b && (b = null);
            if (!this.checkIsLoading()) {
                null == this._resourceUrlList && (this._resourceUrlList = []);
                var c = d.ResourceLoader.create(a, b);
                -1 == this._resourceUrlList.indexOf(c) && c.state != d.ResourceLoader.LOAD_STATE_LOADED && this._resourceUrlList.push(c)
            }
        };
        a.prototype.load = function () {
            this.checkIsLoading() ||
            (null != this._resourceUrlList && 0 < this._resourceUrlList.length ? (this._state = a.LOAD_STATE_LOADING, this._currentIndex = 0, null != this._loadingView && this._loadingView.addToStage(), this.next()) : d.Ticker.getInstance().callLater(this.onComplete, this))
        };
        a.prototype.onComplete = function () {
            this._state = a.LOAD_STATE_IDLE;
            this.destroy();
            this.dispatchEvent(d.ResourceLoader.LOAD_COMPLETE)
        };
        a.prototype.checkIsLoading = function () {
            return this._state == a.LOAD_STATE_LOADING ? (d.Logger.info("\u6b63\u5728\u52a0\u8f7d\u4e2d"),
                !0) : !1
        };
        a.prototype.next = function () {
            this.removeResourceEvent();
            this.onProgress();
            if (this._resourceUrlList.length > this._currentIndex)this._currentResource = this._resourceUrlList[this._currentIndex], this._currentResource.addEventListener(d.ResourceLoader.LOAD_COMPLETE, this.next, this), this._currentResource.load(); else this.onComplete();
            this._currentIndex++
        };
        a.prototype.removeResourceEvent = function () {
            this._currentResource && (this._currentResource.removeEventListener(d.ResourceLoader.LOAD_COMPLETE, this.next,
                this), this._currentResource = null)
        };
        a.prototype.onProgress = function () {
            if (null != this._loadingView)this._loadingView.onProgress(this._currentIndex, this._resourceUrlList.length)
        };
        a.prototype.setLoadingView = function (a) {
            null != this._loadingView && (this._loadingView.removeFromStage(), this._loadingView = null);
            this._loadingView = a
        };
        a.prototype.destroy = function () {
            this.removeResourceEvent();
            null != this._loadingView && (this._loadingView.removeFromStage(), this._loadingView = null);
            this._resourceUrlList = null
        };
        a.LOAD_STATE_IDLE =
            0;
        a.LOAD_STATE_LOADING = 1;
        return a
    }(d.EventDispatcher);
    d.LoadingController = c;
    c = function () {
        return function () {
        }
    }();
    d.LoadingEvent = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function () {
        function b() {
            this._textureHeight = this._textureWidth = 0
        }

        Object.defineProperty(b.prototype, "bitmapData", {get: function () {
            return this._bitmapData
        }, set: function (a) {
            this._bitmapData = a;
            this._textureWidth = a.width * d.MainContext.instance.rendererContext.texture_scale_factor;
            this._textureHeight = a.height * d.MainContext.instance.rendererContext.texture_scale_factor
        }, enumerable: !0, configurable: !0});
        b.prototype.getTextureWidth = function () {
            return this._textureWidth
        };
        b.prototype.getTextureHeight =
            function () {
                return this._textureHeight
            };
        b.create = function (a) {
            var d = new b;
            d._path = a;
            return d
        };
        b.createWithBase64 = function (a) {
            var d = new b, c = new Image;
            c.src = a;
            d.bitmapData = c;
            return d
        };
        return b
    }();
    d.Texture = c;
    c = function (b) {
        function a() {
            this.cacheCanvas = document.createElement("canvas");
            this.offsetY = this.offsetX = 0
        }

        __extends(a, b);
        a.prototype.drawToTexture = function (a) {
            var b = 1 / d.MainContext.instance.rendererContext.texture_scale_factor, c = this.cacheCanvas, h = a.getBounds();
            c.width = h.width;
            c.height = h.height;
            c.getContext("2d").scale(b,
                b);
            a.worldTransform.identity();
            a.worldAlpha = 1;
            if (a instanceof d.DisplayObjectContainer) {
                this.offsetX = h.x;
                this.offsetY = h.y;
                a.worldTransform.append(1, 0, 0, 1, -h.x, -h.y);
                for (var h = 0, k = a._children.length; h < k; h++)a._children[h].updateTransform()
            }
            c = new d.HTML5CanvasRenderer(c);
            c.texture_scale_factor = 1 / b;
            a.render(c);
            this.bitmapData = this.cacheCanvas
        };
        return a
    }(c);
    d.RenderTexture = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
            this._textures = {};
            this._spritesheets = {}
        }

        b.getInstance = function () {
            null == b.instance && (b.instance = new b);
            return b.instance
        };
        b.prototype.addTexture = function (a, b) {
            this._textures[a] || (this._textures[a] = b)
        };
        b.prototype.removeTexture = function (a) {
            delete this._textures[a]
        };
        b.prototype.getTexture = function (a) {
            var b = this._textures[a];
            b || d.Logger.warning("texture\u4e3a\u7a7a", a);
            return b
        };
        b.prototype.addSpriteSheet = function (a, b, d) {
            this.addTexture(a, d);
            this._spritesheets[a] =
                b
        };
        b.prototype.removeSpriteSheet = function (a) {
            this.removeTexture(a);
            delete this._spritesheets[a]
        };
        b.prototype.getSpriteSheet = function (a) {
            return this._spritesheets[a]
        };
        return b
    }();
    d.TextureCache = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function a() {
        }

        a.getInstance = function () {
            null == a.context && (a.context = new a);
            return a.context
        };
        a.prototype.send = function (a) {
        };
        a.STATE_COMPLETE = "XHRLoaderComplete";
        a.GET = "GET";
        a.POST = "POST";
        a.context = null;
        return a
    }();
    d.NetContext = c;
    var b = function () {
        return function (a, b, d, g, h) {
            "undefined" === typeof g && (g = c.GET);
            "undefined" === typeof h && (h = void 0);
            this.url = a;
            this.callback = b;
            this.thisObj = d;
            this.method = g;
            this.data = h
        }
    }();
    d.URLRequest = b
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments)
        }

        __extends(a, b);
        a.prototype.send = function (a) {
            var b = this._getXMLHttpRequest();
            b.open(a.method, a.url);
            void 0 != a.type && this._setXMLHttpRequestHeader(b, a.type);
            b.onreadystatechange = function () {
                4 == b.readyState && 200 == b.status && a.callback.apply(a.thisObj, [b])
            };
            b.send(a.data)
        };
        a.prototype._setXMLHttpRequestHeader = function (a, b) {
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? b == d.ResourceLoader.DATA_TYPE_BINARY ? a.setRequestHeader("Accept-Charset",
                "x-user-defined") : a.setRequestHeader("Accept-Charset", "utf-8") : a.overrideMimeType && (b == d.ResourceLoader.DATA_TYPE_BINARY ? a.overrideMimeType("text/plain; charset\x3dx-user-defined") : a.overrideMimeType("text/plain; charset\x3dutf-8"))
        };
        a.prototype._getXMLHttpRequest = function () {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        };
        return a
    }(d.NetContext);
    d.HTML5NetContext = c
})(ns_egret || (ns_egret = {}));
ns_egret.Codec = {name: "Jacob__Codec"};
ns_egret.Utils = {};
ns_egret.Utils.unzip = function () {
    return ns_egret.Codec.GZip.gunzip.apply(ns_egret.Codec.GZip, arguments)
};
ns_egret.Utils.unzipBase64 = function () {
    var d = ns_egret.Codec.Base64.decode.apply(ns_egret.Codec.Base64, arguments);
    return ns_egret.Codec.GZip.gunzip.apply(ns_egret.Codec.GZip, [d])
};
ns_egret.Utils.unzipBase64AsArray = function (d, c) {
    c = c || 1;
    var b = this.unzipBase64(d), a = [], e, f, g;
    e = 0;
    for (g = b.length / c; e < g; e++) {
        a[e] = 0;
        for (f = c - 1; 0 <= f; --f)a[e] += b.charCodeAt(e * c + f) << 8 * f
    }
    return a
};
ns_egret.Utils.unzipAsArray = function (d, c) {
    c = c || 1;
    var b = this.unzip(d), a = [], e, f, g;
    e = 0;
    for (g = b.length / c; e < g; e++) {
        a[e] = 0;
        for (f = c - 1; 0 <= f; --f)a[e] += b.charCodeAt(e * c + f) << 8 * f
    }
    return a
};
ns_egret.Utils.StringToArray = function (d) {
    d = d.split(",");
    var c = [], b;
    for (b = 0; b < d.length; b++)c.push(parseInt(d[b]));
    return c
};
ns_egret.Codec.Base64 = {name: "Jacob__Codec__Base64"};
ns_egret.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";
ns_egret.Codec.Base64.decode = function (d) {
    var c = [], b, a, e, f, g, h = 0;
    for (d = d.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < d.length;)b = this._keyStr.indexOf(d.charAt(h++)), a = this._keyStr.indexOf(d.charAt(h++)), f = this._keyStr.indexOf(d.charAt(h++)), g = this._keyStr.indexOf(d.charAt(h++)), b = b << 2 | a >> 4, a = (a & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, c.push(String.fromCharCode(b)), 64 != f && c.push(String.fromCharCode(a)), 64 != g && c.push(String.fromCharCode(e));
    return c = c.join("")
};
ns_egret.Codec.Base64.decodeAsArray = function (d, c) {
    var b = this.decode(d), a = [], e, f, g;
    e = 0;
    for (g = b.length / c; e < g; e++) {
        a[e] = 0;
        for (f = c - 1; 0 <= f; --f)a[e] += b.charCodeAt(e * c + f) << 8 * f
    }
    return a
};
ns_egret.Utils.uint8ArrayToUint32Array = function (d) {
    if (0 != d.length % 4)return null;
    for (var c = d.length / 4, b = window.Uint32Array ? new Uint32Array(c) : [], a = 0; a < c; a++) {
        var e = 4 * a;
        b[a] = d[e] + 256 * d[e + 1] + 65536 * d[e + 2] + 16777216 * d[e + 3]
    }
    return b
};
ns_egret.Codec.GZip = function (d) {
    this.data = d;
    this.debug = !1;
    this.gpflags = void 0;
    this.files = 0;
    this.unzipped = [];
    this.buf32k = Array(32768);
    this.bIdx = 0;
    this.modeZIP = !1;
    this.bytepos = 0;
    this.bb = 1;
    this.bits = 0;
    this.nameBuf = [];
    this.fileout = void 0;
    this.literalTree = Array(ns_egret.Codec.GZip.LITERALS);
    this.distanceTree = Array(32);
    this.treepos = 0;
    this.Places = null;
    this.len = 0;
    this.fpos = Array(17);
    this.fpos[0] = 0;
    this.fmax = this.flens = void 0
};
ns_egret.Codec.GZip.gunzip = function (d) {
    return(new ns_egret.Codec.GZip(d)).gunzip()[0][0]
};
ns_egret.Codec.GZip.HufNode = function () {
    this.b1 = this.b0 = 0;
    this.jump = null;
    this.jumppos = -1
};
ns_egret.Codec.GZip.LITERALS = 288;
ns_egret.Codec.GZip.NAMEMAX = 256;
ns_egret.Codec.GZip.bitReverse = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193,
    33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255];
ns_egret.Codec.GZip.cplens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
ns_egret.Codec.GZip.cplext = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
ns_egret.Codec.GZip.cpdist = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
ns_egret.Codec.GZip.cpdext = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
ns_egret.Codec.GZip.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
ns_egret.Codec.GZip.prototype.gunzip = function () {
    this.outputArr = [];
    this.nextFile();
    return this.unzipped
};
ns_egret.Codec.GZip.prototype.readByte = function () {
    this.bits += 8;
    return this.bytepos < this.data.length ? this.data.charCodeAt(this.bytepos++) : -1
};
ns_egret.Codec.GZip.prototype.byteAlign = function () {
    this.bb = 1
};
ns_egret.Codec.GZip.prototype.readBit = function () {
    var d;
    this.bits++;
    d = this.bb & 1;
    this.bb >>= 1;
    0 == this.bb && (this.bb = this.readByte(), d = this.bb & 1, this.bb = this.bb >> 1 | 128);
    return d
};
ns_egret.Codec.GZip.prototype.readBits = function (d) {
    for (var c = 0, b = d; b--;)c = c << 1 | this.readBit();
    d && (c = ns_egret.Codec.GZip.bitReverse[c] >> 8 - d);
    return c
};
ns_egret.Codec.GZip.prototype.flushBuffer = function () {
    this.bIdx = 0
};
ns_egret.Codec.GZip.prototype.addBuffer = function (d) {
    this.buf32k[this.bIdx++] = d;
    this.outputArr.push(String.fromCharCode(d));
    32768 == this.bIdx && (this.bIdx = 0)
};
ns_egret.Codec.GZip.prototype.IsPat = function () {
    for (; ;) {
        if (this.fpos[this.len] >= this.fmax)return-1;
        if (this.flens[this.fpos[this.len]] == this.len)return this.fpos[this.len]++;
        this.fpos[this.len]++
    }
};
ns_egret.Codec.GZip.prototype.Rec = function () {
    var d = this.Places[this.treepos], c;
    if (17 == this.len)return-1;
    this.treepos++;
    this.len++;
    c = this.IsPat();
    if (0 <= c)d.b0 = c; else if (d.b0 = 32768, this.Rec())return-1;
    c = this.IsPat();
    if (0 <= c)d.b1 = c, d.jump = null; else if (d.b1 = 32768, d.jump = this.Places[this.treepos], d.jumppos = this.treepos, this.Rec())return-1;
    this.len--;
    return 0
};
ns_egret.Codec.GZip.prototype.CreateTree = function (d, c, b, a) {
    this.Places = d;
    this.treepos = 0;
    this.flens = b;
    this.fmax = c;
    for (d = 0; 17 > d; d++)this.fpos[d] = 0;
    this.len = 0;
    return this.Rec() ? -1 : 0
};
ns_egret.Codec.GZip.prototype.DecodeValue = function (d) {
    for (var c, b, a = 0, e = d[a]; ;)if (c = this.readBit()) {
        if (!(e.b1 & 32768))return e.b1;
        e = e.jump;
        c = d.length;
        for (b = 0; b < c; b++)if (d[b] === e) {
            a = b;
            break
        }
    } else {
        if (!(e.b0 & 32768))return e.b0;
        a++;
        e = d[a]
    }
    return-1
};
ns_egret.Codec.GZip.prototype.DeflateLoop = function () {
    var d, c, b, a, e;
    do if (d = this.readBit(), b = this.readBits(2), 0 == b) {
        this.byteAlign();
        b = this.readByte();
        b |= this.readByte() << 8;
        c = this.readByte();
        c |= this.readByte() << 8;
        for ((b ^ ~c) & 65535 && document.write("BlockLen checksum mismatch\n"); b--;)c = this.readByte(), this.addBuffer(c)
    } else if (1 == b)for (; ;)if (b = ns_egret.Codec.GZip.bitReverse[this.readBits(7)] >> 1, 23 < b ? (b = b << 1 | this.readBit(), 199 < b ? (b -= 128, b = b << 1 | this.readBit()) : (b -= 48, 143 < b && (b += 136))) : b += 256, 256 > b)this.addBuffer(b);
    else if (256 == b)break; else {
        var f;
        b -= 257;
        e = this.readBits(ns_egret.Codec.GZip.cplext[b]) + ns_egret.Codec.GZip.cplens[b];
        b = ns_egret.Codec.GZip.bitReverse[this.readBits(5)] >> 3;
        8 < ns_egret.Codec.GZip.cpdext[b] ? (f = this.readBits(8), f |= this.readBits(ns_egret.Codec.GZip.cpdext[b] - 8) << 8) : f = this.readBits(ns_egret.Codec.GZip.cpdext[b]);
        f += ns_egret.Codec.GZip.cpdist[b];
        for (b = 0; b < e; b++)c = this.buf32k[this.bIdx - f & 32767], this.addBuffer(c)
    } else if (2 == b) {
        var g = Array(320);
        c = 257 + this.readBits(5);
        f = 1 + this.readBits(5);
        a = 4 +
            this.readBits(4);
        for (b = 0; 19 > b; b++)g[b] = 0;
        for (b = 0; b < a; b++)g[ns_egret.Codec.GZip.border[b]] = this.readBits(3);
        e = this.distanceTree.length;
        for (a = 0; a < e; a++)this.distanceTree[a] = new ns_egret.Codec.GZip.HufNode;
        if (this.CreateTree(this.distanceTree, 19, g, 0))return this.flushBuffer(), 1;
        e = c + f;
        a = 0;
        for (var h = -1; a < e;)if (h++, b = this.DecodeValue(this.distanceTree), 16 > b)g[a++] = b; else if (16 == b) {
            var k;
            b = 3 + this.readBits(2);
            if (a + b > e)return this.flushBuffer(), 1;
            for (k = a ? g[a - 1] : 0; b--;)g[a++] = k
        } else {
            b = 17 == b ? 3 + this.readBits(3) :
                11 + this.readBits(7);
            if (a + b > e)return this.flushBuffer(), 1;
            for (; b--;)g[a++] = 0
        }
        e = this.literalTree.length;
        for (a = 0; a < e; a++)this.literalTree[a] = new ns_egret.Codec.GZip.HufNode;
        if (this.CreateTree(this.literalTree, c, g, 0))return this.flushBuffer(), 1;
        e = this.literalTree.length;
        for (a = 0; a < e; a++)this.distanceTree[a] = new ns_egret.Codec.GZip.HufNode;
        b = [];
        for (a = c; a < g.length; a++)b[a - c] = g[a];
        if (this.CreateTree(this.distanceTree, f, b, 0))return this.flushBuffer(), 1;
        for (; ;)if (b = this.DecodeValue(this.literalTree), 256 <= b) {
            b -=
                256;
            if (0 == b)break;
            b--;
            e = this.readBits(ns_egret.Codec.GZip.cplext[b]) + ns_egret.Codec.GZip.cplens[b];
            b = this.DecodeValue(this.distanceTree);
            8 < ns_egret.Codec.GZip.cpdext[b] ? (f = this.readBits(8), f |= this.readBits(ns_egret.Codec.GZip.cpdext[b] - 8) << 8) : f = this.readBits(ns_egret.Codec.GZip.cpdext[b]);
            for (f += ns_egret.Codec.GZip.cpdist[b]; e--;)c = this.buf32k[this.bIdx - f & 32767], this.addBuffer(c)
        } else this.addBuffer(b)
    } while (!d);
    this.flushBuffer();
    this.byteAlign();
    return 0
};
ns_egret.Codec.GZip.prototype.unzipFile = function (d) {
    var c;
    this.gunzip();
    for (c = 0; c < this.unzipped.length; c++)if (this.unzipped[c][1] == d)return this.unzipped[c][0]
};
ns_egret.Codec.GZip.prototype.nextFile = function () {
    this.outputArr = [];
    this.modeZIP = !1;
    var d = [];
    d[0] = this.readByte();
    d[1] = this.readByte();
    120 == d[0] && 218 == d[1] && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), "geonext.gxt"], this.files++);
    31 == d[0] && 139 == d[1] && (this.skipdir(), this.unzipped[this.files] = [this.outputArr.join(""), "file"], this.files++);
    if (80 == d[0] && 75 == d[1] && (this.modeZIP = !0, d[2] = this.readByte(), d[3] = this.readByte(), 3 == d[2] && 4 == d[3])) {
        d[0] = this.readByte();
        d[1] = this.readByte();
        this.gpflags = this.readByte();
        this.gpflags |= this.readByte() << 8;
        d = this.readByte();
        d |= this.readByte() << 8;
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        this.readByte();
        var c = this.readByte(), c = c | this.readByte() << 8, b = this.readByte(), b = b | this.readByte() << 8, a = 0;
        for (this.nameBuf = []; c--;) {
            var e = this.readByte();
            "/" == e | ":" == e ? a = 0 : a < ns_egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[a++] =
                String.fromCharCode(e))
        }
        this.fileout || (this.fileout = this.nameBuf);
        for (var a = 0; a < b;)this.readByte(), a++;
        8 == d && (this.DeflateLoop(), this.unzipped[this.files] = [this.outputArr.join(""), this.nameBuf.join("")], this.files++);
        this.skipdir()
    }
};
ns_egret.Codec.GZip.prototype.skipdir = function () {
    var d = [], c;
    this.gpflags & 8 && (d[0] = this.readByte(), d[1] = this.readByte(), d[2] = this.readByte(), d[3] = this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte(), this.readByte());
    this.modeZIP && this.nextFile();
    d[0] = this.readByte();
    if (8 != d[0])return 0;
    this.gpflags = this.readByte();
    this.readByte();
    this.readByte();
    this.readByte();
    this.readByte();
    this.readByte();
    this.readByte();
    if (this.gpflags &
        4) {
        d[0] = this.readByte();
        d[2] = this.readByte();
        this.len = d[0] + 256 * d[1];
        for (d = 0; d < this.len; d++)this.readByte()
    }
    if (this.gpflags & 8) {
        d = 0;
        for (this.nameBuf = []; c = this.readByte();) {
            if ("7" == c || ":" == c)d = 0;
            d < ns_egret.Codec.GZip.NAMEMAX - 1 && (this.nameBuf[d++] = c)
        }
    }
    if (this.gpflags & 16)for (; this.readByte(););
    this.gpflags & 2 && (this.readByte(), this.readByte());
    this.DeflateLoop();
    this.readByte();
    this.readByte();
    this.readByte();
    this.readByte();
    this.modeZIP && this.nextFile()
};
/*
 zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function () {
    function d(a) {
        throw a;
    }

    function c(a, b) {
        var d = a.split("."), e = H;
        !(d[0]in e) && e.execScript && e.execScript("var " + d[0]);
        for (var c; d.length && (c = d.shift());)!d.length && b !== D ? e[c] = b : e = e[c] ? e[c] : e[c] = {}
    }

    function b(a) {
        if ("string" === typeof a) {
            a = a.split("");
            var b, d;
            b = 0;
            for (d = a.length; b < d; b++)a[b] = (a[b].charCodeAt(0) & 255) >>> 0
        }
        b = 1;
        d = 0;
        for (var e = a.length, c, f = 0; 0 < e;) {
            c = 1024 < e ? 1024 : e;
            e -= c;
            do b += a[f++], d += b; while (--c);
            b %= 65521;
            d %= 65521
        }
        return(d << 16 | b) >>> 0
    }

    function a(a, b) {
        this.index = "number" === typeof b ?
            b : 0;
        this.i = 0;
        this.buffer = a instanceof(u ? Uint8Array : Array) ? a : new (u ? Uint8Array : Array)(32768);
        2 * this.buffer.length <= this.index && d(Error("invalid index"));
        this.buffer.length <= this.index && this.f()
    }

    function e(a) {
        this.buffer = new (u ? Uint16Array : Array)(2 * a);
        this.length = 0
    }

    function f(a) {
        var b = a.length, d = 0, e = Number.POSITIVE_INFINITY, c, f, g, h, n, s, q, k, x;
        for (k = 0; k < b; ++k)a[k] > d && (d = a[k]), a[k] < e && (e = a[k]);
        c = 1 << d;
        f = new (u ? Uint32Array : Array)(c);
        g = 1;
        h = 0;
        for (n = 2; g <= d;) {
            for (k = 0; k < b; ++k)if (a[k] === g) {
                s = 0;
                q = h;
                for (x = 0; x < g; ++x)s =
                    s << 1 | q & 1, q >>= 1;
                for (x = s; x < c; x += n)f[x] = g << 16 | k;
                ++h
            }
            ++g;
            h <<= 1;
            n <<= 1
        }
        return[f, d, e]
    }

    function g(a, b) {
        this.h = J;
        this.w = 0;
        this.input = a;
        this.b = 0;
        b && (b.lazy && (this.w = b.lazy), "number" === typeof b.compressionType && (this.h = b.compressionType), b.outputBuffer && (this.a = u && b.outputBuffer instanceof Array ? new Uint8Array(b.outputBuffer) : b.outputBuffer), "number" === typeof b.outputIndex && (this.b = b.outputIndex));
        this.a || (this.a = new (u ? Uint8Array : Array)(32768))
    }

    function h(a, b) {
        this.length = a;
        this.G = b
    }

    function k() {
        var a = E;
        switch (F) {
            case 3 ===
                a:
                return[257, a - 3, 0];
            case 4 === a:
                return[258, a - 4, 0];
            case 5 === a:
                return[259, a - 5, 0];
            case 6 === a:
                return[260, a - 6, 0];
            case 7 === a:
                return[261, a - 7, 0];
            case 8 === a:
                return[262, a - 8, 0];
            case 9 === a:
                return[263, a - 9, 0];
            case 10 === a:
                return[264, a - 10, 0];
            case 12 >= a:
                return[265, a - 11, 1];
            case 14 >= a:
                return[266, a - 13, 1];
            case 16 >= a:
                return[267, a - 15, 1];
            case 18 >= a:
                return[268, a - 17, 1];
            case 22 >= a:
                return[269, a - 19, 2];
            case 26 >= a:
                return[270, a - 23, 2];
            case 30 >= a:
                return[271, a - 27, 2];
            case 34 >= a:
                return[272, a - 31, 2];
            case 42 >= a:
                return[273, a - 35, 3];
            case 50 >=
                a:
                return[274, a - 43, 3];
            case 58 >= a:
                return[275, a - 51, 3];
            case 66 >= a:
                return[276, a - 59, 3];
            case 82 >= a:
                return[277, a - 67, 4];
            case 98 >= a:
                return[278, a - 83, 4];
            case 114 >= a:
                return[279, a - 99, 4];
            case 130 >= a:
                return[280, a - 115, 4];
            case 162 >= a:
                return[281, a - 131, 5];
            case 194 >= a:
                return[282, a - 163, 5];
            case 226 >= a:
                return[283, a - 195, 5];
            case 257 >= a:
                return[284, a - 227, 5];
            case 258 === a:
                return[285, a - 258, 0];
            default:
                d("invalid length: " + a)
        }
    }

    function l(a, b) {
        function e(a, b) {
            var c = a.G, f = [], g = 0, h;
            h = L[a.length];
            f[g++] = h & 65535;
            f[g++] = h >> 16 & 255;
            f[g++] =
                h >> 24;
            var n;
            switch (F) {
                case 1 === c:
                    n = [0, c - 1, 0];
                    break;
                case 2 === c:
                    n = [1, c - 2, 0];
                    break;
                case 3 === c:
                    n = [2, c - 3, 0];
                    break;
                case 4 === c:
                    n = [3, c - 4, 0];
                    break;
                case 6 >= c:
                    n = [4, c - 5, 1];
                    break;
                case 8 >= c:
                    n = [5, c - 7, 1];
                    break;
                case 12 >= c:
                    n = [6, c - 9, 2];
                    break;
                case 16 >= c:
                    n = [7, c - 13, 2];
                    break;
                case 24 >= c:
                    n = [8, c - 17, 3];
                    break;
                case 32 >= c:
                    n = [9, c - 25, 3];
                    break;
                case 48 >= c:
                    n = [10, c - 33, 4];
                    break;
                case 64 >= c:
                    n = [11, c - 49, 4];
                    break;
                case 96 >= c:
                    n = [12, c - 65, 5];
                    break;
                case 128 >= c:
                    n = [13, c - 97, 5];
                    break;
                case 192 >= c:
                    n = [14, c - 129, 6];
                    break;
                case 256 >= c:
                    n = [15, c - 193, 6];
                    break;
                case 384 >= c:
                    n = [16, c - 257, 7];
                    break;
                case 512 >= c:
                    n = [17, c - 385, 7];
                    break;
                case 768 >= c:
                    n = [18, c - 513, 8];
                    break;
                case 1024 >= c:
                    n = [19, c - 769, 8];
                    break;
                case 1536 >= c:
                    n = [20, c - 1025, 9];
                    break;
                case 2048 >= c:
                    n = [21, c - 1537, 9];
                    break;
                case 3072 >= c:
                    n = [22, c - 2049, 10];
                    break;
                case 4096 >= c:
                    n = [23, c - 3073, 10];
                    break;
                case 6144 >= c:
                    n = [24, c - 4097, 11];
                    break;
                case 8192 >= c:
                    n = [25, c - 6145, 11];
                    break;
                case 12288 >= c:
                    n = [26, c - 8193, 12];
                    break;
                case 16384 >= c:
                    n = [27, c - 12289, 12];
                    break;
                case 24576 >= c:
                    n = [28, c - 16385, 13];
                    break;
                case 32768 >= c:
                    n = [29, c - 24577, 13];
                    break;
                default:
                    d("invalid distance")
            }
            h =
                n;
            f[g++] = h[0];
            f[g++] = h[1];
            f[g++] = h[2];
            c = 0;
            for (g = f.length; c < g; ++c)x[v++] = f[c];
            l[f[0]]++;
            p[f[3]]++;
            m = a.length + b - 1;
            k = null
        }

        var c, f, g, n, s, q = {}, k, x = u ? new Uint16Array(2 * b.length) : [], v = 0, m = 0, l = new (u ? Uint32Array : Array)(286), p = new (u ? Uint32Array : Array)(30), A = a.w, t;
        if (!u) {
            for (g = 0; 285 >= g;)l[g++] = 0;
            for (g = 0; 29 >= g;)p[g++] = 0
        }
        l[256] = 1;
        c = 0;
        for (f = b.length; c < f; ++c) {
            g = s = 0;
            for (n = 3; g < n && c + g !== f; ++g)s = s << 8 | b[c + g];
            q[s] === D && (q[s] = []);
            g = q[s];
            if (!(0 < m--)) {
                for (; 0 < g.length && 32768 < c - g[0];)g.shift();
                if (c + 3 >= f) {
                    k && e(k, -1);
                    g = 0;
                    for (n = f - c; g < n; ++g)t = b[c + g], x[v++] = t, ++l[t];
                    break
                }
                if (0 < g.length) {
                    s = n = D;
                    var r = 0, B = D, w = D, y = B = D, z = b.length, w = 0, y = g.length;
                    a:for (; w < y; w++) {
                        n = g[y - w - 1];
                        B = 3;
                        if (3 < r) {
                            for (B = r; 3 < B; B--)if (b[n + B - 1] !== b[c + B - 1])continue a;
                            B = r
                        }
                        for (; 258 > B && c + B < z && b[n + B] === b[c + B];)++B;
                        B > r && (s = n, r = B);
                        if (258 === B)break
                    }
                    n = new h(r, c - s);
                    k ? k.length < n.length ? (t = b[c - 1], x[v++] = t, ++l[t], e(n, 0)) : e(k, -1) : n.length < A ? k = n : e(n, 0)
                } else k ? e(k, -1) : (t = b[c], x[v++] = t, ++l[t])
            }
            g.push(c)
        }
        x[v++] = 256;
        l[256]++;
        a.L = l;
        a.K = p;
        return u ? x.subarray(0, v) : x
    }

    function m(a, b) {
        function d(a) {
            var b = x[a][v[a]];
            b === q ? (d(a + 1), d(a + 1)) : --k[b];
            ++v[a]
        }

        var c = a.length, f = new e(572), g = new (u ? Uint8Array : Array)(c), n, h, s;
        if (!u)for (h = 0; h < c; h++)g[h] = 0;
        for (h = 0; h < c; ++h)0 < a[h] && f.push(h, a[h]);
        c = Array(f.length / 2);
        n = new (u ? Uint32Array : Array)(f.length / 2);
        if (1 === c.length)return g[f.pop().index] = 1, g;
        h = 0;
        for (s = f.length / 2; h < s; ++h)c[h] = f.pop(), n[h] = c[h].value;
        var q = n.length;
        h = new (u ? Uint16Array : Array)(b);
        var f = new (u ? Uint8Array : Array)(b), k = new (u ? Uint8Array : Array)(q);
        s = Array(b);
        var x = Array(b), v =
            Array(b), m = (1 << b) - q, l = 1 << b - 1, p, A, t;
        h[b - 1] = q;
        for (p = 0; p < b; ++p)m < l ? f[p] = 0 : (f[p] = 1, m -= l), m <<= 1, h[b - 2 - p] = (h[b - 1 - p] / 2 | 0) + q;
        h[0] = f[0];
        s[0] = Array(h[0]);
        x[0] = Array(h[0]);
        for (p = 1; p < b; ++p)h[p] > 2 * h[p - 1] + f[p] && (h[p] = 2 * h[p - 1] + f[p]), s[p] = Array(h[p]), x[p] = Array(h[p]);
        for (m = 0; m < q; ++m)k[m] = b;
        for (l = 0; l < h[b - 1]; ++l)s[b - 1][l] = n[l], x[b - 1][l] = l;
        for (m = 0; m < b; ++m)v[m] = 0;
        1 === f[b - 1] && (--k[0], ++v[b - 1]);
        for (p = b - 2; 0 <= p; --p) {
            A = m = 0;
            t = v[p + 1];
            for (l = 0; l < h[p]; l++)A = s[p + 1][t] + s[p + 1][t + 1], A > n[m] ? (s[p][l] = A, x[p][l] = q, t += 2) : (s[p][l] = n[m],
                x[p][l] = m, ++m);
            v[p] = 0;
            1 === f[p] && d(p)
        }
        n = k;
        h = 0;
        for (s = c.length; h < s; ++h)g[c[h].index] = n[h];
        return g
    }

    function p(a) {
        var b = new (u ? Uint16Array : Array)(a.length), c = [], e = [], f = 0, g, h, n;
        g = 0;
        for (h = a.length; g < h; g++)c[a[g]] = (c[a[g]] | 0) + 1;
        g = 1;
        for (h = 16; g <= h; g++)e[g] = f, f += c[g] | 0, f > 1 << g && d("overcommitted"), f <<= 1;
        65536 > f && d("undercommitted");
        g = 0;
        for (h = a.length; g < h; g++) {
            f = e[a[g]];
            e[a[g]] += 1;
            c = b[g] = 0;
            for (n = a[g]; c < n; c++)b[g] = b[g] << 1 | f & 1, f >>>= 1
        }
        return b
    }

    function n(a, b) {
        this.input = a;
        this.a = new (u ? Uint8Array : Array)(32768);
        this.h =
            I.j;
        var d = {}, c;
        if ((b || !(b = {})) && "number" === typeof b.compressionType)this.h = b.compressionType;
        for (c in b)d[c] = b[c];
        d.outputBuffer = this.a;
        this.z = new g(this.input, d)
    }

    function q(a, b) {
        this.k = [];
        this.l = 32768;
        this.e = this.g = this.c = this.q = 0;
        this.input = u ? new Uint8Array(a) : a;
        this.s = !1;
        this.m = C;
        this.B = !1;
        if (b || !(b = {}))b.index && (this.c = b.index), b.bufferSize && (this.l = b.bufferSize), b.bufferType && (this.m = b.bufferType), b.resize && (this.B = b.resize);
        switch (this.m) {
            case M:
                this.b = 32768;
                this.a = new (u ? Uint8Array : Array)(32768 +
                    this.l + 258);
                break;
            case C:
                this.b = 0;
                this.a = new (u ? Uint8Array : Array)(this.l);
                this.f = this.J;
                this.t = this.H;
                this.o = this.I;
                break;
            default:
                d(Error("invalid inflate mode"))
        }
    }

    function s(a, b) {
        for (var c = a.g, e = a.e, f = a.input, g = a.c, h; e < b;)h = f[g++], h === D && d(Error("input buffer is broken")), c |= h << e, e += 8;
        a.g = c >>> b;
        a.e = e - b;
        a.c = g;
        return c & (1 << b) - 1
    }

    function x(a, b) {
        for (var c = a.g, e = a.e, f = a.input, g = a.c, h = b[0], n = b[1], s; e < n;)s = f[g++], s === D && d(Error("input buffer is broken")), c |= s << e, e += 8;
        f = h[c & (1 << n) - 1];
        h = f >>> 16;
        a.g = c >> h;
        a.e =
            e - h;
        a.c = g;
        return f & 65535
    }

    function A(a) {
        function b(a, d, c) {
            var e, f, g, h;
            for (h = 0; h < a;)switch (e = x(this, d), e) {
                case 16:
                    for (g = 3 + s(this, 2); g--;)c[h++] = f;
                    break;
                case 17:
                    for (g = 3 + s(this, 3); g--;)c[h++] = 0;
                    f = 0;
                    break;
                case 18:
                    for (g = 11 + s(this, 7); g--;)c[h++] = 0;
                    f = 0;
                    break;
                default:
                    f = c[h++] = e
            }
            return c
        }

        var d = s(a, 5) + 257, c = s(a, 5) + 1, e = s(a, 4) + 4, g = new (u ? Uint8Array : Array)(K.length), h;
        for (h = 0; h < e; ++h)g[K[h]] = s(a, 3);
        e = f(g);
        g = new (u ? Uint8Array : Array)(d);
        h = new (u ? Uint8Array : Array)(c);
        a.o(f(b.call(a, d, e, g)), f(b.call(a, c, e, h)))
    }

    function B(a, b) {
        var c, e;
        this.input = a;
        this.c = 0;
        if (b || !(b = {}))b.index && (this.c = b.index), b.verify && (this.M = b.verify);
        c = a[this.c++];
        e = a[this.c++];
        switch (c & 15) {
            case O:
                this.method = O;
                break;
            default:
                d(Error("unsupported compression method"))
        }
        0 !== ((c << 8) + e) % 31 && d(Error("invalid fcheck flag:" + ((c << 8) + e) % 31));
        e & 32 && d(Error("fdict flag is not supported"));
        this.A = new q(a, {index: this.c, bufferSize: b.bufferSize, bufferType: b.bufferType, resize: b.resize})
    }

    var D = void 0, F = !0, H = this, u = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
    a.prototype.f = function () {
        var a = this.buffer, b, d = a.length, c = new (u ? Uint8Array : Array)(d << 1);
        if (u)c.set(a); else for (b = 0; b < d; ++b)c[b] = a[b];
        return this.buffer = c
    };
    a.prototype.d = function (a, b, d) {
        var c = this.buffer, e = this.index, f = this.i, g = c[e];
        d && 1 < b && (a = 8 < b ? (r[a & 255] << 24 | r[a >>> 8 & 255] << 16 | r[a >>> 16 & 255] << 8 | r[a >>> 24 & 255]) >> 32 - b : r[a] >> 8 - b);
        if (8 > b + f)g = g << b | a, f += b; else for (d = 0; d < b; ++d)g = g << 1 | a >> b - d - 1 & 1, 8 === ++f && (f = 0, c[e++] = r[g], g = 0, e === c.length && (c = this.f()));
        c[e] = g;
        this.buffer = c;
        this.i = f;
        this.index = e
    };
    a.prototype.finish = function () {
        var a = this.buffer, b = this.index, d;
        0 < this.i && (a[b] <<= 8 - this.i, a[b] = r[a[b]], b++);
        u ? d = a.subarray(0, b) : (a.length = b, d = a);
        return d
    };
    var z = new (u ? Uint8Array : Array)(256), t;
    for (t = 0; 256 > t; ++t) {
        for (var v = t, w = v, y = 7, v = v >>> 1; v; v >>>= 1)w <<= 1, w |= v & 1, --y;
        z[t] = (w << y & 255) >>> 0
    }
    var r = z, z = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049,
        498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275,
        3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277,
        2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
        2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112,
        2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746,
        711928724, 3020668471, 3272380065, 1510334235, 755167117];
    u && new Uint32Array(z);
    e.prototype.getParent = function (a) {
        return 2 * ((a - 2) / 4 | 0)
    };
    e.prototype.push = function (a, b) {
        var d, c, e = this.buffer, f;
        d = this.length;
        e[this.length++] = b;
        for (e[this.length++] = a; 0 < d;)if (c = this.getParent(d), e[d] > e[c])f = e[d], e[d] = e[c], e[c] = f, f = e[d + 1], e[d + 1] = e[c + 1], e[c + 1] = f, d = c; else break;
        return this.length
    };
    e.prototype.pop = function () {
        var a, b, d = this.buffer, c, e, f;
        b = d[0];
        a = d[1];
        this.length -= 2;
        d[0] = d[this.length];
        d[1] = d[this.length + 1];
        for (f =
                 0; ;) {
            e = 2 * f + 2;
            if (e >= this.length)break;
            e + 2 < this.length && d[e + 2] > d[e] && (e += 2);
            if (d[e] > d[f])c = d[f], d[f] = d[e], d[e] = c, c = d[f + 1], d[f + 1] = d[e + 1], d[e + 1] = c; else break;
            f = e
        }
        return{index: a, value: b, length: this.length}
    };
    var J = 2, z = {NONE: 0, r: 1, j: J, N: 3}, N = [];
    for (t = 0; 288 > t; t++)switch (F) {
        case 143 >= t:
            N.push([t + 48, 8]);
            break;
        case 255 >= t:
            N.push([t - 144 + 400, 9]);
            break;
        case 279 >= t:
            N.push([t - 256 + 0, 7]);
            break;
        case 287 >= t:
            N.push([t - 280 + 192, 8]);
            break;
        default:
            d("invalid literal: " + t)
    }
    g.prototype.n = function () {
        var b, c, e, f, g = this.input;
        switch (this.h) {
            case 0:
                e = 0;
                for (f = g.length; e < f;) {
                    c = u ? g.subarray(e, e + 65535) : g.slice(e, e + 65535);
                    e += c.length;
                    var h = e === f, n = D, s = n = D, s = n = D, q = this.a, k = this.b;
                    if (u) {
                        for (q = new Uint8Array(this.a.buffer); q.length <= k + c.length + 5;)q = new Uint8Array(q.length << 1);
                        q.set(this.a)
                    }
                    n = h ? 1 : 0;
                    q[k++] = n | 0;
                    n = c.length;
                    s = ~n + 65536 & 65535;
                    q[k++] = n & 255;
                    q[k++] = n >>> 8 & 255;
                    q[k++] = s & 255;
                    q[k++] = s >>> 8 & 255;
                    if (u)q.set(c, k), k += c.length, q = q.subarray(0, k); else {
                        n = 0;
                        for (s = c.length; n < s; ++n)q[k++] = c[n];
                        q.length = k
                    }
                    this.b = k;
                    this.a = q
                }
                break;
            case 1:
                e =
                    new a(new Uint8Array(this.a.buffer), this.b);
                e.d(1, 1, F);
                e.d(1, 2, F);
                g = l(this, g);
                c = 0;
                for (h = g.length; c < h; c++)if (f = g[c], a.prototype.d.apply(e, N[f]), 256 < f)e.d(g[++c], g[++c], F), e.d(g[++c], 5), e.d(g[++c], g[++c], F); else if (256 === f)break;
                this.a = e.finish();
                this.b = this.a.length;
                break;
            case J:
                f = new a(new Uint8Array(this.a), this.b);
                var x, v, A, t = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], B, r, n = Array(19), w, q = J;
                f.d(1, 1, F);
                f.d(q, 2, F);
                g = l(this, g);
                s = m(this.L, 15);
                B = p(s);
                q = m(this.K, 7);
                k = p(q);
                for (x = 286; 257 < x && 0 === s[x -
                    1]; x--);
                for (v = 30; 1 < v && 0 === q[v - 1]; v--);
                var y = x, z = v;
                b = new (u ? Uint32Array : Array)(y + z);
                var H = new (u ? Uint32Array : Array)(316), E, C;
                r = new (u ? Uint8Array : Array)(19);
                for (w = A = 0; w < y; w++)b[A++] = s[w];
                for (w = 0; w < z; w++)b[A++] = q[w];
                if (!u) {
                    w = 0;
                    for (z = r.length; w < z; ++w)r[w] = 0
                }
                w = E = 0;
                for (z = b.length; w < z; w += A) {
                    for (A = 1; w + A < z && b[w + A] === b[w]; ++A);
                    y = A;
                    if (0 === b[w])if (3 > y)for (; 0 < y--;)H[E++] = 0, r[0]++; else for (; 0 < y;)C = 138 > y ? y : 138, C > y - 3 && C < y && (C = y - 3), 10 >= C ? (H[E++] = 17, H[E++] = C - 3, r[17]++) : (H[E++] = 18, H[E++] = C - 11, r[18]++), y -= C; else if (H[E++] =
                        b[w], r[b[w]]++, y--, 3 > y)for (; 0 < y--;)H[E++] = b[w], r[b[w]]++; else for (; 0 < y;)C = 6 > y ? y : 6, C > y - 3 && C < y && (C = y - 3), H[E++] = 16, H[E++] = C - 3, r[16]++, y -= C
                }
                b = u ? H.subarray(0, E) : H.slice(0, E);
                r = m(r, 7);
                for (w = 0; 19 > w; w++)n[w] = r[t[w]];
                for (A = 19; 4 < A && 0 === n[A - 1]; A--);
                t = p(r);
                f.d(x - 257, 5, F);
                f.d(v - 1, 5, F);
                f.d(A - 4, 4, F);
                for (w = 0; w < A; w++)f.d(n[w], 3, F);
                w = 0;
                for (n = b.length; w < n; w++)if (c = b[w], f.d(t[c], r[c], F), 16 <= c) {
                    w++;
                    switch (c) {
                        case 16:
                            h = 2;
                            break;
                        case 17:
                            h = 3;
                            break;
                        case 18:
                            h = 7;
                            break;
                        default:
                            d("invalid code: " + c)
                    }
                    f.d(b[w], h, F)
                }
                h = [B, s];
                k = [k,
                    q];
                c = h[0];
                h = h[1];
                q = k[0];
                B = k[1];
                k = 0;
                for (n = g.length; k < n; ++k)if (e = g[k], f.d(c[e], h[e], F), 256 < e)f.d(g[++k], g[++k], F), s = g[++k], f.d(q[s], B[s], F), f.d(g[++k], g[++k], F); else if (256 === e)break;
                this.a = f.finish();
                this.b = this.a.length;
                break;
            default:
                d("invalid compression type")
        }
        return this.a
    };
    t = [];
    var E;
    for (E = 3; 258 >= E; E++)v = k(), t[E] = v[2] << 24 | v[1] << 16 | v[0];
    var L = u ? new Uint32Array(t) : t, I = z;
    n.prototype.n = function () {
        var a, c, e, f, g = 0;
        f = this.a;
        a = O;
        switch (a) {
            case O:
                c = Math.LOG2E * Math.log(32768) - 8;
                break;
            default:
                d(Error("invalid compression method"))
        }
        c =
            c << 4 | a;
        f[g++] = c;
        switch (a) {
            case O:
                switch (this.h) {
                    case I.NONE:
                        e = 0;
                        break;
                    case I.r:
                        e = 1;
                        break;
                    case I.j:
                        e = 2;
                        break;
                    default:
                        d(Error("unsupported compression type"))
                }
                break;
            default:
                d(Error("invalid compression method"))
        }
        a = e << 6 | 0;
        f[g++] = a | 31 - (256 * c + a) % 31;
        a = b(this.input);
        this.z.b = g;
        f = this.z.n();
        g = f.length;
        u && (f = new Uint8Array(f.buffer), f.length <= g + 4 && (this.a = new Uint8Array(f.length + 4), this.a.set(f), f = this.a), f = f.subarray(0, g + 4));
        f[g++] = a >> 24 & 255;
        f[g++] = a >> 16 & 255;
        f[g++] = a >> 8 & 255;
        f[g++] = a & 255;
        return f
    };
    c("Zlib.Deflate",
        n);
    c("Zlib.Deflate.compress", function (a, b) {
        return(new n(a, b)).n()
    });
    c("Zlib.Deflate.CompressionType", I);
    c("Zlib.Deflate.CompressionType.NONE", I.NONE);
    c("Zlib.Deflate.CompressionType.FIXED", I.r);
    c("Zlib.Deflate.CompressionType.DYNAMIC", I.j);
    var M = 0, C = 1, z = {D: M, C: C};
    q.prototype.p = function () {
        for (; !this.s;) {
            var a = s(this, 3);
            a & 1 && (this.s = F);
            a >>>= 1;
            switch (a) {
                case 0:
                    var a = this.input, b = this.c, c = this.a, e = this.b, f = D, g = D, h = D, n = c.length, f = D;
                    this.e = this.g = 0;
                    f = a[b++];
                    f === D && d(Error("invalid uncompressed block header: LEN (first byte)"));
                    g = f;
                    f = a[b++];
                    f === D && d(Error("invalid uncompressed block header: LEN (second byte)"));
                    g |= f << 8;
                    f = a[b++];
                    f === D && d(Error("invalid uncompressed block header: NLEN (first byte)"));
                    h = f;
                    f = a[b++];
                    f === D && d(Error("invalid uncompressed block header: NLEN (second byte)"));
                    h |= f << 8;
                    g === ~h && d(Error("invalid uncompressed block header: length verify"));
                    b + g > a.length && d(Error("input buffer is broken"));
                    switch (this.m) {
                        case M:
                            for (; e + g > c.length;) {
                                f = n - e;
                                g -= f;
                                if (u)c.set(a.subarray(b, b + f), e), e += f, b += f; else for (; f--;)c[e++] =
                                    a[b++];
                                this.b = e;
                                c = this.f();
                                e = this.b
                            }
                            break;
                        case C:
                            for (; e + g > c.length;)c = this.f({v: 2});
                            break;
                        default:
                            d(Error("invalid inflate mode"))
                    }
                    if (u)c.set(a.subarray(b, b + g), e), e += g, b += g; else for (; g--;)c[e++] = a[b++];
                    this.c = b;
                    this.b = e;
                    this.a = c;
                    break;
                case 1:
                    this.o(S, T);
                    break;
                case 2:
                    A(this);
                    break;
                default:
                    d(Error("unknown BTYPE: " + a))
            }
        }
        return this.t()
    };
    t = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var K = u ? new Uint16Array(t) : t;
    t = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227,
        258, 258, 258];
    var G = u ? new Uint16Array(t) : t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
    var P = u ? new Uint8Array(t) : t;
    t = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    var R = u ? new Uint16Array(t) : t;
    t = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    var Q = u ? new Uint8Array(t) : t;
    t = new (u ? Uint8Array : Array)(288);
    v = 0;
    for (w = t.length; v < w; ++v)t[v] = 143 >= v ? 8 : 255 >= v ? 9 : 279 >= v ? 7 : 8;
    var S = f(t);
    t = new (u ? Uint8Array :
        Array)(30);
    v = 0;
    for (w = t.length; v < w; ++v)t[v] = 5;
    var T = f(t);
    q.prototype.o = function (a, b) {
        var d = this.a, c = this.b;
        this.u = a;
        for (var e = d.length - 258, f, g, h; 256 !== (f = x(this, a));)if (256 > f)c >= e && (this.b = c, d = this.f(), c = this.b), d[c++] = f; else {
            f -= 257;
            h = G[f];
            0 < P[f] && (h += s(this, P[f]));
            f = x(this, b);
            g = R[f];
            0 < Q[f] && (g += s(this, Q[f]));
            for (c >= e && (this.b = c, d = this.f(), c = this.b); h--;)d[c] = d[c++ - g]
        }
        for (; 8 <= this.e;)this.e -= 8, this.c--;
        this.b = c
    };
    q.prototype.I = function (a, b) {
        var d = this.a, c = this.b;
        this.u = a;
        for (var e = d.length, f, g, h; 256 !==
            (f = x(this, a));)if (256 > f)c >= e && (d = this.f(), e = d.length), d[c++] = f; else {
            f -= 257;
            h = G[f];
            0 < P[f] && (h += s(this, P[f]));
            f = x(this, b);
            g = R[f];
            0 < Q[f] && (g += s(this, Q[f]));
            for (c + h > e && (d = this.f(), e = d.length); h--;)d[c] = d[c++ - g]
        }
        for (; 8 <= this.e;)this.e -= 8, this.c--;
        this.b = c
    };
    q.prototype.f = function () {
        var a = new (u ? Uint8Array : Array)(this.b - 32768), b = this.b - 32768, d, c, e = this.a;
        if (u)a.set(e.subarray(32768, a.length)); else {
            d = 0;
            for (c = a.length; d < c; ++d)a[d] = e[d + 32768]
        }
        this.k.push(a);
        this.q += a.length;
        if (u)e.set(e.subarray(b, b + 32768));
        else for (d = 0; 32768 > d; ++d)e[d] = e[b + d];
        this.b = 32768;
        return e
    };
    q.prototype.J = function (a) {
        var b, d = this.input.length / this.c + 1 | 0, c, e, f, g = this.input, h = this.a;
        a && ("number" === typeof a.v && (d = a.v), "number" === typeof a.F && (d += a.F));
        2 > d ? (c = (g.length - this.c) / this.u[2], f = 258 * (c / 2) | 0, e = f < h.length ? h.length + f : h.length << 1) : e = h.length * d;
        u ? (b = new Uint8Array(e), b.set(h)) : b = h;
        return this.a = b
    };
    q.prototype.t = function () {
        var a = 0, b = this.a, d = this.k, c, e = new (u ? Uint8Array : Array)(this.q + (this.b - 32768)), f, g, h, n;
        if (0 === d.length)return u ?
            this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
        f = 0;
        for (g = d.length; f < g; ++f) {
            c = d[f];
            h = 0;
            for (n = c.length; h < n; ++h)e[a++] = c[h]
        }
        f = 32768;
        for (g = this.b; f < g; ++f)e[a++] = b[f];
        this.k = [];
        return this.buffer = e
    };
    q.prototype.H = function () {
        var a, b = this.b;
        u ? this.B ? (a = new Uint8Array(b), a.set(this.a.subarray(0, b))) : a = this.a.subarray(0, b) : (this.a.length > b && (this.a.length = b), a = this.a);
        return this.buffer = a
    };
    B.prototype.p = function () {
        var a = this.input, c, e;
        c = this.A.p();
        this.c = this.A.c;
        this.M && (e = (a[this.c++] << 24 | a[this.c++] <<
            16 | a[this.c++] << 8 | a[this.c++]) >>> 0, e !== b(c) && d(Error("invalid adler-32 checksum")));
        return c
    };
    c("Zlib.Inflate", B);
    c("Zlib.Inflate.BufferType", z);
    z.ADAPTIVE = z.C;
    z.BLOCK = z.D;
    c("Zlib.Inflate.prototype.decompress", B.prototype.p);
    z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    u && new Uint16Array(z);
    z = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
    u && new Uint16Array(z);
    z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
    u && new Uint8Array(z);
    z = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    u && new Uint16Array(z);
    z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    u && new Uint8Array(z);
    z = new (u ? Uint8Array : Array)(288);
    t = 0;
    for (v = z.length; t < v; ++t)z[t] = 143 >= t ? 8 : 255 >= t ? 9 : 279 >= t ? 7 : 8;
    f(z);
    z = new (u ? Uint8Array : Array)(30);
    t = 0;
    for (v = z.length; t < v; ++t)z[t] = 5;
    f(z);
    var O = 8
}).call(this);
(function (d) {
    var c = function () {
        function b() {
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }

        b.getInstance = function () {
            b._instance || (b._instance = new b);
            return b._instance
        };
        b.prototype.parse = function (a) {
            var b = a;
            a = this.getList(a);
            a = this.parserXML(a).documentElement;
            "plist" != a.tagName && d.Logger.fatal(b + "\u4e0d\u662fplist\u6216\u8005\u6ca1\u6709\u9884\u52a0\u8f7dplist");
            for (var b =
                null, c = 0, g = a.childNodes.length; c < g && !(b = a.childNodes[c], 1 == b.nodeType); c++);
            return this.parseNode(b)
        };
        b.prototype.tmxParse = function (a, b) {
            "undefined" === typeof b && (b = !1);
            b || (a = this.getList(a));
            return this.parserXML(a)
        };
        b.prototype.parserXML = function (a) {
            var b;
            this._isSupportDOMParser ? b = this._parser.parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
            null == b && d.Logger.info("xml not found!");
            return b
        };
        b.prototype.parseNode = function (a) {
            var b = null;
            switch (a.tagName) {
                case "dict":
                    b =
                        this.parseDict(a);
                    break;
                case "array":
                    b = this.parseArray(a);
                    break;
                case "string":
                    if (1 == a.childNodes.length)b = a.firstChild.nodeValue; else for (var b = "", d = 0; d < a.childNodes.length; d++)b += a.childNodes[d].nodeValue;
                    break;
                case "false":
                    b = !1;
                    break;
                case "true":
                    b = !0;
                    break;
                case "real":
                    b = parseFloat(a.firstChild.nodeValue);
                    break;
                case "integer":
                    b = parseInt(a.firstChild.nodeValue, 10)
            }
            return b
        };
        b.prototype.parseArray = function (a) {
            for (var b = [], d = 0, c = a.childNodes.length; d < c; d++) {
                var h = a.childNodes[d];
                1 == h.nodeType && b.push(this.parseNode(h))
            }
            return b
        };
        b.prototype.parseDict = function (a) {
            for (var b = {}, d = null, c = 0, h = a.childNodes.length; c < h; c++) {
                var k = a.childNodes[c];
                1 == k.nodeType && ("key" == k.tagName ? d = k.firstChild.nodeValue : b[d] = this.parseNode(k))
            }
            return b
        };
        b.prototype.getName = function (a) {
            var b = a.lastIndexOf("/", a.length) + 1, d = a.lastIndexOf(".", a.length);
            return a.substring(b, d)
        };
        b.prototype.getExt = function (a) {
            var b = a.lastIndexOf(".", a.length) + 1;
            return a.substring(b, a.length)
        };
        b.prototype.getList = function (a) {
            return null != this._xmlDict ? this._xmlDict[a] :
                null
        };
        b._instance = null;
        return b
    }();
    d.SAXParser = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.convert = function (a) {
            if (1 < arguments.length)d.DOM.convert(arguments); else if (1 == arguments.length && !arguments[0].length)d.DOM.convert([arguments[0]]); else for (var b = arguments[0], c = 0; c < b.length; c++)b[c]instanceof d.DisplayObjectContainer ? b[c].dom || d.DOM.forSprite(b[c]) : d.Logger.info("DOM\u8f6c\u6362\u5668\u53ea\u652f\u6301DisplayObjectContainer"), b[c].visit = function () {
            }, b[c].transform = function () {
            }, d.DOM.setTransform(b[c]), b[c].visible = b[c].visible
        };
        b.forSprite =
            function (a) {
                a.dom = d.Browser.getInstance().$new("div");
                a.canvas = d.Browser.getInstance().$new("canvas");
                a.canvas.width = a.width;
                a.canvas.height = a.height;
                a.dom.style.position = "absolute";
                a.ctx = a.canvas.getContext("2d");
                a.dom.appendChild(a.canvas);
                a.parent && d.DOM.parentDOM(a);
                a.isSprite = !0
            };
        b.parentDOM = function (a) {
            var b = a.parent;
            if (!b || !a.dom)return!1;
            b.dom || d.DOM.placeHolder(b);
            a.dom.appendTo(b.dom);
            if (b.parent)d.DOM.parentDOM(b); else if (a = d.Browser.getInstance().$("#StageDelegateDiv"))b.dom.appendTo(a);
            else {
                a = d.Browser.getInstance().$new("div");
                a.id = "StageDelegateDiv";
                var c = d.StageDelegate.getInstance(), g = c.getFrameWidth(), h = c.getFrameHeight(), k = c.getDesignWidth(), l = c.getDesignHeight();
                0 === k && 0 === l && (k = g, l = h);
                a.style.position = "absolute";
                a.style.width = k + "px";
                a.style.maxHeight = l + "px";
                a.style.margin = 0;
                a.resize(c.getScaleX(), c.getScaleY());
                b.dom.appendTo(a);
                a.appendTo(document.getElementById(d.StageDelegate.canvas_div_name))
            }
            return!0
        };
        b.placeHolder = function (a) {
            a.dom = d.Browser.getInstance().$new("div");
            a.placeholder = !0;
            a.dom.style.position = "absolute";
            a.dom.style.width = (a.width || d.MainContext.instance.stage.stageWidth) + "px";
            a.dom.style.maxHeight = (a.height || d.MainContext.instance.stage.stageHeight) + "px";
            a.dom.style.margin = 0;
            d.DOM.setTransform(a);
            a.dom.transforms()
        };
        b.setTransform = function (a) {
            a.dom && (a.dom.position.x = a.x, a.dom.position.y = a.y, a.dom.rotation = a.rotation, a.dom.scale = {x: a.scaleX, y: a.scaleY}, a.dom.skew = {x: a.skewX, y: a.skewX}, a.dom.transforms())
        };
        return b
    }();
    d.DOM = c
})(ns_egret || (ns_egret =
{}));
(function (d) {
    var c = function () {
        function b() {
            this.translate = this.isHD ? function (a) {
                return"translate3d(" + a.x + "px, " + (a.y - d.MainContext.instance.stage.stageHeight) + "px, 0) "
            } : function (a) {
                console.log("translate(" + a.x + "px, " + a.y + "px) ");
                return"translate(" + a.x + "px, " + a.y + "px) "
            };
            this.rotate = this.isHD ? function (a) {
                return"rotateZ(" + a + "deg) "
            } : function (a) {
                return"rotate(" + a + "deg) "
            };
            this.ua = navigator.userAgent.toLowerCase();
            var a = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) ||
                this.ua.match(/chrome|safari/);
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
            this.trans = this.pfx + "Transform";
            this.isMobile = -1 != this.ua.indexOf("mobile") || -1 != this.ua.indexOf("android")
        }

        b.getInstance =
            function () {
                null == b.instance && (b.instance = new b);
                return b.instance
            };
        b.prototype.$new = function (a) {
            return this.$(document.createElement(a))
        };
        b.prototype.$ = function (a) {
            var c = document;
            if (a = a instanceof HTMLElement ? a : c.querySelector(a))a.find = a.find || this.$, a.hasClass = a.hasClass || function (a) {
                return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
            }, a.addClass = a.addClass || function (a) {
                this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                return this
            }, a.removeClass = a.removeClass || function (a) {
                this.hasClass(a) &&
                (this.className = this.className.replace(a, ""));
                return this
            }, a.remove = a.remove || function () {
            }, a.appendTo = a.appendTo || function (a) {
                a.appendChild(this);
                return this
            }, a.prependTo = a.prependTo || function (a) {
                a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                return this
            }, a.transforms = a.transforms || function () {
                this.style[b.getInstance().trans] = b.getInstance().translate(this.position) + b.getInstance().rotate(this.rotation) + b.getInstance().scale(this.scale) + b.getInstance().skew(this.skew);
                return this
            },
                a.position = a.position || {x: 0, y: 0}, a.rotation = a.rotation || 0, a.scale = a.scale || {x: 1, y: 1}, a.skew = a.skew || {x: 0, y: 0}, a.translates = function (a, b) {
                this.position.x = a;
                this.position.y = b - d.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            }, a.rotate = function (a) {
                this.rotation = a;
                this.transforms();
                return this
            }, a.resize = function (a, b) {
                this.scale.x = a;
                this.scale.y = b;
                this.transforms();
                return this
            }, a.setSkew = function (a, b) {
                this.skew.x = a;
                this.skew.y = b;
                this.transforms();
                return this
            };
            return a
        };
        b.prototype.scale =
            function (a) {
                return"scale(" + a.x + ", " + a.y + ") "
            };
        b.prototype.skew = function (a) {
            return"skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        };
        return b
    }();
    d.Browser = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a, d, c) {
            b.call(this);
            this.target = null;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this._initQueueProps = this._curQueueProps = this.pluginData = null;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, d, c)
        }

        __extends(a, b);
        a.get = function (b, d, c, h) {
            "undefined" === typeof d && (d = null);
            "undefined" === typeof c && (c = null);
            "undefined" === typeof h && (h = !1);
            h &&
            a.removeTweens(b);
            return new a(b, d, c)
        };
        a.removeTweens = function (b) {
            if (b.tween_count) {
                for (var c = a._tweens, g = c.length - 1; 0 <= g; g--)c[g].target == b && (c[g].paused = !0, c.splice(g, 1));
                b.tween_count = 0
            } else d.Logger.warning("target\u6ca1\u6709\u6b63\u5728\u6267\u884ctween")
        };
        a.tick = function (b, d) {
            "undefined" === typeof d && (d = !1);
            for (var c = a._tweens, h = c.length - 1; 0 <= h; h--) {
                var k = c[h];
                d && !k.ignoreGlobalPause || k.paused || k.tick(k._useTicks ? 1 : b)
            }
        };
        a._register = function (b, c) {
            var g = b.target, h = a._tweens;
            if (c)g && (g.tween_count =
                g.tween_count ? g.tween_count + 1 : 1), h.push(b), a._inited || (d.Ticker.getInstance().register(a.tick, null), a._inited = !0); else {
                g && g.tween_count--;
                for (g = h.length; g--;)if (h[g] == b) {
                    h.splice(g, 1);
                    break
                }
            }
        };
        a.removeAllTweens = function () {
            for (var b = a._tweens, d = 0, c = b.length; d < c; d++) {
                var h = b[d];
                h.paused = !0;
                h.target.tweenjs_count = 0
            }
            b.length = 0
        };
        a.prototype.initialize = function (b, d, c) {
            this.target = b;
            d && (this._useTicks = d.useTicks, this.ignoreGlobalPause = d.ignoreGlobalPause, this.loop = d.loop, d.onChange && this.addEventListener("change",
                d.onChange, d.onChangeObj), d.override && a.removeTweens(b));
            this.pluginData = c || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            d && d.paused ? this.paused = !0 : a._register(this, !0);
            d && null != d.position && this.setPosition(d.position, a.NONE)
        };
        a.prototype.setPosition = function (a, b) {
            "undefined" === typeof b && (b = 1);
            0 > a && (a = 0);
            var d = a, c = !1;
            d >= this.duration && (this.loop ? d %= this.duration : (d = this.duration, c = !0));
            if (d == this._prevPos)return c;
            var k = this._prevPos;
            this.position = this._prevPos =
                d;
            this._prevPosition = a;
            if (this.target)if (c)this._updateTargetProps(null, 1); else if (0 < this._steps.length) {
                for (var l = 0, m = this._steps.length; l < m && !(this._steps[l].t > d); l++);
                l = this._steps[l - 1];
                this._updateTargetProps(l, (this._stepPosition = d - l.t) / l.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < k ? (k != this.duration && this._runActions(k, this.duration), this._runActions(0, d, !0)) : this._runActions(k, d));
            c && this.setPaused(!0);
            this.dispatchEvent("change");
            return c
        };
        a.prototype._runActions =
            function (a, b, d) {
                "undefined" === typeof d && (d = !1);
                var c = a, k = b, l = -1, m = this._actions.length, p = 1;
                a > b && (c = b, k = a, l = m, m = p = -1);
                for (; (l += p) != m;) {
                    b = this._actions[l];
                    var n = b.t;
                    (n == k || n > c && n < k || d && n == a) && b.f.apply(b.o, b.p)
                }
            };
        a.prototype._updateTargetProps = function (b, d) {
            var c, h, k, l;
            if (!b && 1 == d)this.passive = !1, c = h = this._curQueueProps; else {
                if (this.passive = !!b.v)return;
                b.e && (d = b.e(d, 0, 1, 1));
                c = b.p0;
                h = b.p1
            }
            for (var m in this._initQueueProps) {
                if (null == (k = c[m]))c[m] = k = this._initQueueProps[m];
                if (null == (l = h[m]))h[m] = l = k;
                k = k == l || 0 == d || 1 == d || "number" != typeof k ? 1 == d ? l : k : k + (l - k) * d;
                var p = !1;
                if (l = a._plugins[m])for (var n = 0, q = l.length; n < q; n++) {
                    var s = l[n].tween(this, m, k, c, h, d, !!b && c == h, !b);
                    s == a.IGNORE ? p = !0 : k = s
                }
                p || (this.target[m] = k)
            }
        };
        a.prototype.setPaused = function (b) {
            this.paused = b;
            a._register(this, !b);
            return this
        };
        a.prototype._cloneProps = function (a) {
            var b = {}, d;
            for (d in a)b[d] = a[d];
            return b
        };
        a.prototype._addStep = function (a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        a.prototype._appendQueueProps =
            function (b) {
                var d, c, h, k, l, m;
                for (m in b)if (void 0 === this._initQueueProps[m]) {
                    c = this.target[m];
                    if (d = a._plugins[m]) {
                        h = 0;
                        for (k = d.length; h < k; h++)c = d[h].init(this, m, c)
                    }
                    this._initQueueProps[m] = this._curQueueProps[m] = void 0 === c ? null : c
                }
                for (m in b) {
                    c = this._curQueueProps[m];
                    if (d = a._plugins[m]) {
                        l = l || {};
                        h = 0;
                        for (k = d.length; h < k; h++)d[h].step && d[h].step(this, m, c, b[m], l)
                    }
                    this._curQueueProps[m] = b[m]
                }
                l && this._appendQueueProps(l);
                return this._curQueueProps
            };
        a.prototype._addAction = function (a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        a.prototype._set = function (a, b) {
            for (var d in a)b[d] = a[d]
        };
        a.prototype.wait = function (a, b) {
            "undefined" === typeof b && (b = !1);
            if (null == a || 0 >= a)return this;
            var d = this._cloneProps(this._curQueueProps);
            return this._addStep({d: a, p0: d, p1: d, v: b})
        };
        a.prototype.to = function (a, b, d) {
            "undefined" === typeof d && (d = void 0);
            if (isNaN(b) || 0 > b)b = 0;
            return this._addStep({d: b || 0, p0: this._cloneProps(this._curQueueProps), e: d, p1: this._cloneProps(this._appendQueueProps(a))})
        };
        a.prototype.call = function (a, b, d) {
            "undefined" === typeof b && (b = void 0);
            "undefined" === typeof d && (d = void 0);
            return this._addAction({f: a, p: d ? d : [this], o: b ? b : this.target})
        };
        a.prototype.set = function (a, b) {
            "undefined" === typeof b && (b = null);
            return this._addAction({f: this._set, o: this, p: [a, b ? b : this.target]})
        };
        a.prototype.play = function (a) {
            a || (a = this);
            return this.call(a.setPaused, [!1], a)
        };
        a.prototype.pause = function (a) {
            a || (a = this);
            return this.call(a.setPaused, [!0], a)
        };
        a.prototype.tick = function (a) {
            this.paused || this.setPosition(this._prevPosition + a)
        };
        a.NONE = 0;
        a.LOOP =
            1;
        a.REVERSE = 2;
        a._tweens = [];
        a.IGNORE = {};
        a._plugins = {};
        a._inited = !1;
        return a
    }(d.EventDispatcher);
    d.Tween = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
            d.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }

        b.get = function (a) {
            -1 > a && (a = -1);
            1 < a && (a = 1);
            return function (b) {
                return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        };
        b.getPowIn = function (a) {
            return function (b) {
                return Math.pow(b, a)
            }
        };
        b.getPowOut = function (a) {
            return function (b) {
                return 1 - Math.pow(1 - b, a)
            }
        };
        b.getPowInOut = function (a) {
            return function (b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        };
        b.sineIn = function (a) {
            return 1 - Math.cos(a *
                Math.PI / 2)
        };
        b.sineOut = function (a) {
            return Math.sin(a * Math.PI / 2)
        };
        b.sineInOut = function (a) {
            return-0.5 * (Math.cos(Math.PI * a) - 1)
        };
        b.getBackIn = function (a) {
            return function (b) {
                return b * b * ((a + 1) * b - a)
            }
        };
        b.getBackOut = function (a) {
            return function (b) {
                b -= 1;
                return b * b * ((a + 1) * b + a) + 1
            }
        };
        b.getBackInOut = function (a) {
            a *= 1.525;
            return function (b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        };
        b.circIn = function (a) {
            return-(Math.sqrt(1 - a * a) - 1)
        };
        b.circOut = function (a) {
            return Math.sqrt(1 - a * a)
        };
        b.circInOut = function (a) {
            return 1 >
                (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        b.bounceIn = function (a) {
            return 1 - b.bounceOut(1 - a)
        };
        b.bounceOut = function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        b.bounceInOut = function (a) {
            return 0.5 > a ? 0.5 * b.bounceIn(2 * a) : 0.5 * b.bounceOut(2 * a - 1) + 0.5
        };
        b.getElasticIn = function (a, b) {
            var d = 2 * Math.PI;
            return function (c) {
                if (0 == c || 1 == c)return c;
                var h = b / d * Math.asin(1 / a);
                return-(a * Math.pow(2, 10 *
                    (c -= 1)) * Math.sin((c - h) * d / b))
            }
        };
        b.getElasticOut = function (a, b) {
            var d = 2 * Math.PI;
            return function (c) {
                if (0 == c || 1 == c)return c;
                var h = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - h) * d / b) + 1
            }
        };
        b.getElasticInOut = function (a, b) {
            var d = 2 * Math.PI;
            return function (c) {
                var h = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - h) * d / b) : 0.5 * a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - h) * d / b) + 1
            }
        };
        b.quadIn = b.getPowIn(2);
        b.quadOut = b.getPowOut(2);
        b.quadInOut = b.getPowInOut(2);
        b.cubicIn = b.getPowIn(3);
        b.cubicOut = b.getPowOut(3);
        b.cubicInOut = b.getPowInOut(3);
        b.quartIn = b.getPowIn(4);
        b.quartOut = b.getPowOut(4);
        b.quartInOut = b.getPowInOut(4);
        b.quintIn = b.getPowIn(5);
        b.quintOut = b.getPowOut(5);
        b.quintInOut = b.getPowInOut(5);
        b.backIn = b.getBackIn(1.7);
        b.backOut = b.getBackOut(1.7);
        b.backInOut = b.getBackInOut(1.7);
        b.elasticIn = b.getElasticIn(1, 0.3);
        b.elasticOut = b.getElasticOut(1, 0.3);
        b.elasticInOut = b.getElasticInOut(1, 0.3 * 1.5);
        return b
    }();
    d.Ease = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.getInstance = function () {
            null == b.context && (b.context = new b);
            return b.context
        };
        b.prototype.preloadSound = function (a) {
        };
        b.prototype.playMusic = function (a, b) {
        };
        b.prototype.stopMusic = function (a) {
        };
        b.context = null;
        b.isMusicPlaying = !1;
        return b
    }();
    d.SoundContext = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this);
            this._soundList = {};
            this._canPlay = !0;
            this._supportedFormat = [];
            var a = this._capabilities = {mp3: !1, ogg: !1, wav: !1, mp4: !1, m4a: !1};
            this._checkCanPlay(a);
            for (var d in a)if (a[d]) {
                this._soundSupported = !0;
                break
            }
            a = navigator.userAgent;
            if (/Mobile/.test(a) && (/iPhone OS/.test(a) || /iPad/.test(a) || /Firefox/.test(a)) || /MSIE/.test(a))this._canPlay = !1;
            this._getSupportedAudioFormat()
        }

        __extends(a, b);
        a.prototype._checkCanPlay = function (a) {
            var b = document.createElement("audio");
            if (b.canPlayType) {
                var d = function (a) {
                    a = b.canPlayType(a);
                    return"no" != a && "" != a
                };
                a.mp3 = d("audio/mpeg");
                a.mp4 = d("audio/mp4");
                a.m4a = d("audio/x-m4a") || d("audio/aac");
                a.ogg = d('audio/ogg; codecs\x3d"vorbis"');
                a.wav = d('audio/wav; codecs\x3d"1"')
            }
        };
        a.prototype.preloadSound = function (a) {
            if (this._soundSupported) {
                var b = this._getExtFromFullPath(a);
                if (this.isFormatSupported(b) && !this._soundList.hasOwnProperty(a) && this._canPlay) {
                    b = new Audio(d.ResourceLoader.prefix + a);
                    b.preload = "auto";
                    var c = function (a) {
                        this.removeEventListener("canplaythrough",
                            c, !1);
                        this.removeEventListener("error", h, !1)
                    }, h = function (a) {
                        this.removeEventListener("canplaythrough", c, !1);
                        this.removeEventListener("error", h, !1)
                    };
                    b.addEventListener("canplaythrough", c, !1);
                    b.addEventListener("error", h, !1);
                    this._soundList[a] = b;
                    b.load()
                }
            }
        };
        a.prototype._getSupportedAudioFormat = function () {
            if (this._soundSupported) {
                var a = ["ogg", "mp3", "wav", "mp4", "m4a"], b;
                for (b in a) {
                    var d = a[b];
                    this._capabilities[d] && this._supportedFormat.push(d)
                }
            }
        };
        a.prototype.isFormatSupported = function (a) {
            var b = this._supportedFormat,
                d;
            for (d in b)if (a === b[d])return!0;
            return!1
        };
        a.prototype._getExtFromFullPath = function (a) {
            var b = a.lastIndexOf(".");
            return-1 !== b ? a.substring(b + 1, a.length) : ""
        };
        a.prototype.playMusic = function (a, b) {
            "undefined" === typeof b && (b = !0);
            if (this._soundSupported) {
                var c, h = this._soundList;
                h.hasOwnProperty(this._playingMusicName) && h[this._playingMusicName].pause();
                this._playingMusicName = a;
                h.hasOwnProperty(this._playingMusicName) ? c = h[this._playingMusicName] : (c = new Audio(d.ResourceLoader.prefix + a), c.preload = "auto", h[a] =
                    c, c.load());
                c.addEventListener("pause", function () {
                    d.SoundContext.isMusicPlaying = !1;
                    this.removeEventListener("pause", arguments.callee, !1)
                }, !1);
                isNaN(c.duration) || (c.currentTime = 0);
                c.loop = b;
                c.play();
                d.SoundContext.isMusicPlaying = !0
            }
        };
        a.prototype.stopMusic = function (a) {
            var b = this._soundList, c = this._playingMusicName;
            if (b.hasOwnProperty(c)) {
                var h = b[c];
                h.pause();
                h.currentTime = h.duration;
                a && delete b[c];
                d.SoundContext.isMusicPlaying = !1
            }
        };
        return a
    }(d.SoundContext);
    d.HTML5SoundContext = c
})(ns_egret || (ns_egret =
{}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this.viewPortWidth = 400
        }

        __extends(a, b);
        a.createWithFile = function (b) {
            var d = new a;
            d.initWithTMXFile(b);
            return d
        };
        a.prototype.initWithTMXFile = function (a) {
            (!a || 0 == a.length) && d.Logger.fatal("TMXTiledMap.initWithTMXFile(): tmxFile\u5e94\u8be5\u662f\u4e0d\u4e3anull\u7684string");
            var b = d.TMXMapInfo.createWithFile(a);
            if (b) {
                var c = b.getTilesets();
                (!c || 0 === c.length) && d.Logger.info("TMXTiledMap.initWithTMXFile(): Map\u6ca1\u6709", a);
                this.buildWithMapInfo(b)
            }
        };
        a.prototype.buildWithMapInfo = function (a) {
            this.mapInfo = a;
            var d = 0, c = a.getLayers();
            if (c)for (var h = null, k = 0, l = c.length; k < l; k++)if ((h = c[k]) && h.visible)h = this.parseLayer(h, a), b.prototype.addChild.call(this, h, d), d++
        };
        a.prototype.parseLayer = function (a, b) {
            var c = this.tilesetForLayer(a, b), c = d.TMXLayer.create(c, a, b);
            a.ownTiles = !1;
            c.setupTiles();
            return c
        };
        a.prototype.tilesetForLayer = function (a, b) {
            var c = a.layerWidth, h = a.layerHeight, k = b.getTilesets();
            if (k)for (var l = k.length - 1; 0 <= l; l--) {
                var m = k[l];
                if (m)for (var p =
                    0; p < h; p++)for (var n = 0; n < c; n++) {
                    var q = a._tiles[n + c * p];
                    if (0 != q && (q & d.TMX.TILE_FLIPPED_MASK) >>> 0 >= m.firstGid)return m
                }
            }
            d.Logger.warning("TMXLayer" + a.name + "\u6ca1\u6709tiles");
            return null
        };
        a.prototype.getLayer = function (a) {
            (!a || 0 === a.length) && d.Logger.fatal("TMXTiledMap.getLayer(): layerName\u5e94\u8be5\u662f\u4e0d\u4e3anull\u7684string");
            for (var c = this.numChildren, g = 0; g < c; g++) {
                var h = b.prototype.getChildAt.call(this, g);
                if (h && h.getLayerName && h.getLayerName() == a)return h
            }
            return null
        };
        a.prototype.getObjectGroup =
            function (a) {
                (!a || 0 === a.length) && d.Logger.fatal("TMXTiledMap.getObjectGroup(): groupName\u5e94\u8be5\u662f\u4e0d\u4e3anull\u7684string");
                var b = this.mapInfo.getObjectGroups;
                if (b)for (var c = 0, h = b.length; c < h; c++) {
                    var k = b[c];
                    if (k && k.getGroupName() == a)return k
                }
                return null
            };
        a.prototype.propertiesForGID = function (a) {
            return this.mapInfo.getTileProperties()[a]
        };
        a.prototype.getProperty = function (a) {
            return this.mapInfo.getProperties()[a.toString()]
        };
        a.prototype.setMoveX = function (a) {
            this.x = a;
            a = this.numChildren;
            for (var b =
                0; b < a; b++) {
                var c = this.getChildAt(b);
                if (c instanceof d.TMXLayer) {
                    if (c.visible)for (var h = 0; h < c.numChildren; h++) {
                        var k = c.getChildAt(h);
                        k.x + this.mapInfo.getTileWidth() < -this.x || k.x > -this.x + this.viewPortWidth ? k.visible = !1 : k.visible = !0
                    }
                } else h = c.getBounds(), c.visible = c.x + h.width - c.anchorPointX < -this.x || c.x - c.anchorPointX > -this.x + this.viewPortWidth ? !1 : !0
            }
        };
        return a
    }(d.DisplayObjectContainer);
    d.TMXTiledMap = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this._properties = this._layerOrientation = this._tileSet = this._tiles = this._mapTileHeight = this._mapTileWidth = this._layerHeight = this._layerWidth = this._texture = null;
            this._layerName = "";
            this._opacity = 1;
            this._atlasIndexArray = this._maxGID = this._minGID = null
        }

        __extends(a, b);
        a.create = function (b, d, c) {
            var h = new a;
            h.initWithTilesetInfo(b, d, c);
            return h
        };
        a.prototype.initWithTilesetInfo = function (a, b, c) {
            this._texture = d.TextureCache.getInstance().getTexture(a.sourceImage);
            this._layerName = b.name;
            this._layerWidth = b.layerWidth;
            this._layerHeight = b.layerHeight;
            this._tiles = b._tiles;
            this._minGID = b._minGID;
            this._maxGID = b._maxGID;
            this._opacity = b.opacity;
            this.setProperties(b.getProperties());
            this._tileSet = a;
            this._mapTileWidth = c.getTileWidth();
            this._mapTileHeight = c.getTileHeight();
            this._layerOrientation = c.getOrientation();
            a = this.calculateLayerOffset(b.layerX, b.layerY);
            this.x = a.x;
            this.y = a.y;
            this._atlasIndexArray = []
        };
        a.prototype.calculateLayerOffset = function (a, b) {
            var c = d.Point.identity;
            switch (this._layerOrientation) {
                case d.TMX.ORIENTATION_ORTHO:
                    c.x = a * this._mapTileWidth;
                    c.y = -b * this._mapTileHeight;
                    break;
                case d.TMX.ORIENTATION_ISO:
                    c.x = this._mapTileWidth / 2 * (a - b);
                    c.y = this._mapTileHeight / 2 * (-a - b);
                    break;
                case d.TMX.ORIENTATION_HEX:
                    (0 !== a || 0 !== b) && d.Logger.info("hexagonal map\u8fd8\u6ca1\u6709\u5b8c\u6210")
            }
            return c
        };
        a.prototype.setupTiles = function () {
            this._tileSet.imageWidth = this._texture.getTextureWidth();
            this._tileSet.imageHeight = this._texture.getTextureHeight();
            for (var a = this._layerHeight,
                     b = this._layerWidth, c = 0; c < a; c++)for (var h = 0; h < b; h++) {
                var k = this._tiles[h + b * c];
                0 !== k && (this.appendTileForGID(k, h, c), this._minGID = Math.min(k, this._minGID), this._maxGID = Math.max(k, this._maxGID))
            }
            this._maxGID >= this._tileSet.firstGid && this._minGID >= this._tileSet.firstGid || d.Logger.warning("\u6bcf\u4e2alayer\u53ea\u652f\u63011\u4e2atileset")
        };
        a.prototype.appendTileForGID = function (a, d, c) {
            var h = this._tileSet.rectForGID(a), h = this.reusedTileWithRect(h);
            this.setupTileSprite(h, d, c, a);
            b.prototype.addChild.call(this,
                h, this._atlasIndexArray.length);
            return h
        };
        a.prototype.reusedTileWithRect = function (a) {
            var b = d.Bitmap.initWithTexture(d.TextureCache.getInstance().getTexture(this._tileSet.sourceImage)), c = new d.SpriteSheetFrame;
            c.x = a.x;
            c.y = a.y;
            c.w = this._mapTileWidth;
            c.h = this._mapTileHeight;
            b.spriteFrame = c;
            return b
        };
        a.prototype.setupTileSprite = function (a, b, d, c) {
            b = this.getPositionAt(b, d);
            a.x = b.x;
            a.y = b.y
        };
        a.prototype.getPositionAt = function (a, b) {
            var c = d.Point.identity;
            switch (this._layerOrientation) {
                case d.TMX.ORIENTATION_ORTHO:
                    c =
                        this.positionForOrthoAt(a, b);
                    break;
                case d.TMX.ORIENTATION_ISO:
                    c = this.positionForIsoAt(a, b);
                    break;
                case d.TMX.ORIENTATION_HEX:
                    c = this.positionForHexAt(a, b);
                    break;
                default:
                    c.x = 0, c.y = 0
            }
            return c
        };
        a.prototype.positionForIsoAt = function (a, b) {
            d.Point.identity.x = this._mapTileWidth / 2 * (this._layerWidth + a - b - 1);
            d.Point.identity.y = -this._mapTileHeight / 2 * (2 * this._layerHeight - a - b - 2);
            return d.Point.identity
        };
        a.prototype.positionForOrthoAt = function (a, b) {
            d.Point.identity.x = a * this._mapTileWidth;
            d.Point.identity.y = -(this._layerHeight -
                b - 1) * this._mapTileHeight;
            return d.Point.identity
        };
        a.prototype.positionForHexAt = function (a, b) {
            var c = 1 == a % 2 ? -this._mapTileHeight / 2 : 0;
            d.Point.identity.x = 3 * a * this._mapTileWidth / 4;
            d.Point.identity.y = -((this._layerHeight - b - 1) * this._mapTileHeight + c);
            return d.Point.identity
        };
        a.prototype.getTileGIDAt = function (a, b) {
            (a >= this._layerWidth || b >= this._layerHeight || 0 > a || 0 > b) && d.Logger.fatal("TMXLayer.getTileGIDAt():\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            return!this._tiles || !this._atlasIndexArray ?
                (d.Logger.info("TMXLayer.getTileGIDAt(): tileMap\u5df2\u7ecf\u88ab\u9500\u6bc1"), null) : (this._tiles[0 | a + b * this._layerWidth] & d.TMX.TILE_FLIPPED_MASK) >>> 0
        };
        a.prototype.getProperties = function () {
            return this._properties
        };
        a.prototype.setProperties = function (a) {
            this._properties = a
        };
        a.prototype.getProperty = function (a) {
            return this._properties[a]
        };
        a.prototype.getLayerName = function () {
            return this._layerName
        };
        return a
    }(d.DisplayObjectContainer);
    d.TMXLayer = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.TILE_HORIZONTAL_FLAG = 2147483648;
        b.TILE_VERTICAL_FLAG = 1073741824;
        b.TILE_DIAGONAL_FLAG = 536870912;
        b.TILE_FLIPPED_ALL = (b.TILE_HORIZONTAL_FLAG | b.TILE_VERTICAL_FLAG | b.TILE_DIAGONAL_FLAG) >>> 0;
        b.TILE_FLIPPED_MASK = ~b.TILE_FLIPPED_ALL >>> 0;
        b.LAYER_ATTRIB_NONE = 1;
        b.LAYER_ATTRIB_BASE64 = 2;
        b.LAYER_ATTRIB_GZIP = 4;
        b.LAYER_ATTRIB_ZLIB = 8;
        b.PROPERTY_NONE = 0;
        b.PROPERTY_MAP = 1;
        b.PROPERTY_LAYER = 2;
        b.PROPERTY_OBJECTGROUP = 3;
        b.PROPERTY_OBJECT = 4;
        b.PROPERTY_TILE = 5;
        b.ORIENTATION_ORTHO =
            0;
        b.ORIENTATION_HEX = 1;
        b.ORIENTATION_ISO = 2;
        return b
    }();
    d.TMX = c
})(ns_egret || (ns_egret = {}));
(function (d) {
    var c = function () {
        function c() {
            this._parentGID = this._objectGroups = this._tileSets = this._layers = this._tileHeight = this._tileWidth = this._mapHeight = this._mapWidth = this._orientation = null;
            this._storingCharacters = !1;
            this._tileProperties = this._currentString = this._TMXFileName = this._properties = null
        }

        c.createWithFile = function (a) {
            var b = new c;
            b.initWithTMXFile(a);
            return b
        };
        c.prototype.initWithTMXFile = function (a) {
            this.internalInit(a);
            this.parseXMXFile(this._TMXFileName)
        };
        c.prototype.internalInit = function (a) {
            this._tileSets =
                [];
            this._layers = [];
            this._TMXFileName = a;
            this._objectGroups = [];
            this._properties = [];
            this._tileProperties = [];
            this._currentString = "";
            this._storingCharacters = !1
        };
        c.prototype.parseXMXFile = function (c) {
            var f = d.ResourceLoader.create(c).data;
            null == f && d.Logger.fatal("tmx\u6587\u4ef6\u6ca1\u6709\u52a0\u8f7d\uff1a" + c);
            var k;
            c = d.SAXParser.getInstance().tmxParse(f, !0).documentElement;
            c.getAttribute("version");
            f = c.getAttribute("orientation");
            if ("map" == c.nodeName && ("orthogonal" == f ? this.setOrientation(d.TMX.ORIENTATION_ORTHO) :
                    "isometric" == f ? this.setOrientation(d.TMX.ORIENTATION_ISO) : "hexagonal" == f ? this.setOrientation(d.TMX.ORIENTATION_HEX) : null !== f && d.Logger.info("TMXFomat: Unsupported orientation:" + this.getOrientation()), this._mapWidth = parseFloat(c.getAttribute("width")), this._mapHeight = parseFloat(c.getAttribute("height")), this._tileWidth = parseFloat(c.getAttribute("tilewidth")), this._tileHeight = parseFloat(c.getAttribute("tileheight")), k = c.querySelectorAll("map \x3e properties \x3e  property"))) {
                for (var l = {}, f = 0; f < k.length; f++)l[k[f].getAttribute("name")] =
                    k[f].getAttribute("value");
                this.setProperties(l)
            }
            k = c.getElementsByTagName("tileset");
            "map" !== c.nodeName && (k = [], k.push(c));
            for (f = 0; f < k.length; f++) {
                var m = k[f];
                if (l = m.getAttribute("source"))this.parseXMLFile(l); else {
                    l = new b;
                    l.name = m.getAttribute("name") || "";
                    l.firstGid = parseInt(m.getAttribute("firstgid")) || 0;
                    l.spacing = parseInt(m.getAttribute("spacing")) || 0;
                    l.margin = parseInt(m.getAttribute("margin")) || 0;
                    l.tileWidth = parseFloat(m.getAttribute("tilewidth"));
                    l.tileHeight = parseFloat(m.getAttribute("tileheight"));
                    var m = m.getElementsByTagName("image")[0].getAttribute("source"), p = -1;
                    this._TMXFileName && (p = this._TMXFileName.lastIndexOf("/"));
                    -1 !== p ? (p = this._TMXFileName.substr(0, p + 1), l.sourceImage = p + m) : l.sourceImage = m;
                    this.setTilesets(l)
                }
            }
            if (l = c.querySelectorAll("tile"))for (f = 0; f < l.length; f++)if (k = l[f], this.setParentGID(parseInt(this._tileSets[0].firstGid) + parseInt(k.getAttribute("id") || 0)), m = k.querySelectorAll("properties \x3e property")) {
                p = {};
                for (k = 0; k < m.length; k++) {
                    var n = m[k].getAttribute("name"), q = m[k].getAttribute("value");
                    p[n] = q
                }
                this._tileProperties[this.getParentGID()] = p
            }
            if (l = c.getElementsByTagName("layer"))for (f = 0; f < l.length; f++) {
                p = l[f];
                n = p.getElementsByTagName("data")[0];
                m = new e;
                m.name = p.getAttribute("name");
                m.layerWidth = parseFloat(p.getAttribute("width"));
                m.layerHeight = parseFloat(p.getAttribute("height"));
                k = p.getAttribute("visible");
                m.visible = "0" != k;
                k = p.getAttribute("opacity") || 1;
                m.opacity = k ? parseFloat(k) : 1;
                m.layerX = parseFloat(p.getAttribute("x")) || 0;
                m.layerY = parseFloat(p.getAttribute("y")) || 0;
                q = "";
                for (k = 0; k < n.childNodes.length; k++)q +=
                    n.childNodes[k].nodeValue;
                q = q.trim();
                k = n.getAttribute("compression");
                var s = n.getAttribute("encoding");
                if (k && "gzip" !== k && "zlib" !== k)return d.Logger.fatal("TMXMapInfo.parseXMLFile(): unsupported compression method"), null;
                switch (k) {
                    case "gzip":
                        m._tiles = d.Utils.unzipBase64AsArray(q, 4);
                        break;
                    case "zlib":
                        k = new Zlib.Inflate(d.Codec.Base64.decodeAsArray(q, 1));
                        m._tiles = d.Utils.uint8ArrayToUint32Array(k.decompress());
                        break;
                    case null:
                    case "":
                        if ("base64" == s)m._tiles = d.Codec.Base64.decodeAsArray(q, 4); else if ("csv" ===
                            s) {
                            m._tiles = [];
                            k = q.split(",");
                            for (n = 0; n < k.length; n++)m._tiles.push(parseInt(k[n]))
                        } else {
                            k = n.getElementsByTagName("tile");
                            m._tiles = [];
                            for (n = 0; n < k.length; n++)m._tiles.push(parseInt(k[n].getAttribute("gid")))
                        }
                        break;
                    default:
                        d.Logger.info("TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported")
                }
                if (p = p.querySelectorAll("properties \x3e property")) {
                    n = {};
                    for (k = 0; k < p.length; k++)n[p[k].getAttribute("name")] = p[k].getAttribute("value");
                    m.setProperties(n)
                }
                this.setLayers(m)
            }
            if (l = c.getElementsByTagName("objectgroup"))for (f =
                                                                   0; f < l.length; f++) {
                p = l[f];
                m = new a;
                m.setGroupName(p.getAttribute("name"));
                m.setPositionOffsetX(parseFloat(p.getAttribute("x")) * this._tileWidth || 0);
                m.setPositionOffsetY(parseFloat(p.getAttribute("y")) * this._tileHeight || 0);
                if (n = p.querySelectorAll("objectgroup \x3e properties \x3e property"))for (k = 0; k < n.length; k++)q = {}, q[n[k].getAttribute("name")] = n[k].getAttribute("value"), m.setProperties(q);
                if (p = p.querySelectorAll("object"))for (k = 0; k < p.length; k++) {
                    q = p[k];
                    n = {};
                    n.name = q.getAttribute("name") || "";
                    n.type =
                        q.getAttribute("type") || "";
                    n.x = parseInt(q.getAttribute("x") || 0) + m.getPositionOffsetX();
                    s = parseInt(q.getAttribute("y") || 0) + m.getPositionOffsetY();
                    n.y = Math.floor(this._mapHeight * this._tileHeight) - s - n.height;
                    n.width = parseInt(q.getAttribute("width")) || 0;
                    n.height = parseInt(q.getAttribute("height")) || 0;
                    if (s = q.querySelectorAll("properties \x3e property"))for (var x = 0; x < s.length; x++)n[s[x].getAttribute("name")] = s[x].getAttribute("value");
                    if ((s = q.querySelectorAll("polygon")) && 0 < s.length)(s = s[0].getAttribute("points")) &&
                    (n.polygonPoints = this.parsePointsString(s));
                    if ((q = q.querySelectorAll("polyline")) && 0 < q.length)(q = q[0].getAttribute("points")) && (n.polylinePoints = this.parsePointsString(q));
                    m.addObject(n)
                }
                this.setObjectGroups(m)
            }
            return c
        };
        c.prototype.parsePointsString = function (a) {
            if (!a)return null;
            var b = [];
            a = a.split(" ");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].split(",");
                b.push({x: d[0], y: d[1]})
            }
            return b
        };
        c.prototype.getOrientation = function () {
            return this._orientation
        };
        c.prototype.setOrientation = function (a) {
            this._orientation =
                a
        };
        c.prototype.getProperties = function () {
            return this._properties
        };
        c.prototype.setProperties = function (a) {
            this._properties = a
        };
        c.prototype.getTilesets = function () {
            return this._tileSets
        };
        c.prototype.setTilesets = function (a) {
            this._tileSets.push(a)
        };
        c.prototype.getParentGID = function () {
            return this._parentGID
        };
        c.prototype.setParentGID = function (a) {
            this._parentGID = a
        };
        c.prototype.getLayers = function () {
            return this._layers
        };
        c.prototype.setLayers = function (a) {
            this._layers.push(a)
        };
        c.prototype.getObjectGroups = function () {
            return this._objectGroups
        };
        c.prototype.setObjectGroups = function (a) {
            this._objectGroups.push(a)
        };
        c.prototype.getTileProperties = function () {
            return this._tileProperties
        };
        c.prototype.setTileProperties = function (a) {
            this._tileProperties.push(a)
        };
        c.prototype.getTileWidth = function () {
            return this._tileWidth
        };
        c.prototype.getTileHeight = function () {
            return this._tileHeight
        };
        c.prototype.getMapWidth = function () {
            return this._mapWidth
        };
        c.prototype.getMapHeight = function () {
            return this._mapHeight
        };
        return c
    }();
    d.TMXMapInfo = c;
    var b = function () {
        function a() {
            this.name =
                ""
        }

        a.prototype.rectForGID = function (a) {
            var b = d.Point.identity;
            a &= d.TMX.TILE_FLIPPED_MASK;
            a -= parseInt(this.firstGid, 10);
            var c = Math.floor((this.imageWidth - 2 * this.margin + this.spacing) / (this.tileWidth + this.spacing));
            b.x = parseInt(a % c * (this.tileWidth + this.spacing) + this.margin, 10);
            b.y = parseInt(Math.floor(a / c) * (this.tileHeight + this.spacing) + this.margin, 10);
            return b
        };
        return a
    }();
    d.TMXTilesetInfo = b;
    var a = function () {
        function a() {
            this._properties = [];
            this._objects = []
        }

        a.prototype.getGroupName = function () {
            return this._groupName
        };
        a.prototype.setGroupName = function (a) {
            this._groupName = a
        };
        a.prototype.getPositionOffsetX = function () {
            return this._positionOffsetX
        };
        a.prototype.setPositionOffsetX = function (a) {
            this._positionOffsetX = a
        };
        a.prototype.getPositionOffsetY = function () {
            return this._positionOffsetY
        };
        a.prototype.setPositionOffsetY = function (a) {
            this._positionOffsetY = a
        };
        a.prototype.getProperties = function () {
            return this._properties
        };
        a.prototype.setProperties = function (a) {
            this._properties.push(a)
        };
        a.prototype.getObjects = function () {
            return this._objects
        };
        a.prototype.addObject = function (a) {
            this._objects.push(a)
        };
        return a
    }();
    d.TMXObjectGroup = a;
    var e = function () {
        function a() {
            this._minGID = 1E5;
            this._maxGID = 0
        }

        a.prototype.getProperties = function () {
            return this._properties
        };
        a.prototype.setProperties = function (a) {
            this._properties = a
        };
        return a
    }();
    d.TMXLayerInfo = e
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments);
            this.className = "VirtualJoystick";
            this.leftButtonWidth = 79;
            this.leftButtonHeight = 46;
            this.leftButtonOffset = 30;
            this.leftTouchPointY = this.leftTouchPointX = this.bottomImageDownName = this.rightImageDownName = this.topImageDownName = this.leftImageDownName = this.bottomImageNormalName = this.rightImageNormalName = this.topImageNormalName = this.leftImageNormalName = this.bottomImageDown = this.rightImageDown = this.topImageDown = this.leftImageDown = this.bottomImageNormal =
                this.rightImageNormal = this.topImageNormal = this.leftImageNormal = this.bottomNode = this.rightNode = this.topNode = this.leftNode = null;
            this.isLeftTouching = !1;
            this.rightButtonImageDownName = this.rightButtonImageNormalName = this.rightButtonImageDown = this.rightButtonImageNormal = null;
            this.rightButtonWidth = 0;
            this.rightTouchPointY = this.rightTouchPointX = null;
            this.isRightTouching = !1
        }

        __extends(a, b);
        a.getInstance = function () {
            null == a.instacce && (a.instacce = new a);
            return a.instacce
        };
        a.prototype.show = function () {
            this.leftContainer =
                new d.DisplayObjectContainer;
            this.leftContainer.touchEnabled = !0;
            this.addChild(this.leftContainer);
            this.leftNode = new d.DisplayObjectContainer;
            this.leftNode.x = -this.leftButtonWidth - this.leftButtonOffset;
            this.leftNode.y = -this.leftButtonHeight / 2;
            this.leftContainer.addChild(this.leftNode);
            this.topNode = new d.DisplayObjectContainer;
            this.topNode.x = -this.leftButtonHeight / 2;
            this.topNode.y = -this.leftButtonWidth - this.leftButtonOffset;
            this.leftContainer.addChild(this.topNode);
            this.rightNode = new d.DisplayObjectContainer;
            this.rightNode.x = this.leftButtonOffset;
            this.rightNode.y = -this.leftButtonHeight / 2;
            this.leftContainer.addChild(this.rightNode);
            this.bottomNode = new d.DisplayObjectContainer;
            this.bottomNode.x = -this.leftButtonHeight / 2;
            this.bottomNode.y = this.leftButtonOffset;
            this.leftContainer.addChild(this.bottomNode);
            this.rightButtonNode = new d.DisplayObjectContainer;
            this.addChild(this.rightButtonNode);
            this.resetLeft();
            this.resetRight();
            this.rightButtonWidth = this.rightButtonNode.getBounds().width;
            this.rightButtonNode.x =
                (d.StageDelegate.getInstance().getDesignWidth() - this.rightButtonWidth - this.x) / this.scaleX;
            this.rightButtonNode.y = -this.rightButtonWidth / 2;
            this.rightButtonNode.touchEnabled = !0;
            var a = d.TextureCache.getInstance().getTexture("alpha_0.png"), a = d.Bitmap.initWithTexture(a), b = this.leftButtonWidth + this.leftButtonOffset;
            a.scaleX = a.scaleY = 2 * b;
            a.x = a.y = -b;
            this.leftContainer.addChild(a);
            this.leftContainer.addEventListener(d.TouchEvent.TOUCH_BEGAN, this.onLeftTouchBegin, this);
            this.leftContainer.addEventListener(d.TouchEvent.TOUCH_MOVE,
                this.onLeftTouchMoved, this);
            this.rightButtonNode.addEventListener(d.TouchEvent.TOUCH_BEGAN, this.onRightTouchBegin, this);
            this.rightButtonNode.addEventListener(d.TouchEvent.TOUCH_MOVE, this.onRightTouchMoved, this);
            d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_END, this.onTouchEnded, this);
            d.Ticker.getInstance().register(this.update, this)
        };
        a.prototype.update = function () {
            null != this.leftTouchPointX && (null != this.leftTouchPointY && this.isLeftTouching) && this.checkIsLeftTouchInside() && this.sendLeftTouchEvent();
            null != this.rightTouchPointX && (null != this.rightTouchPointY && this.isRightTouching) && this.checkIsRightTouchInside() && (this.changeBtnState(this.rightButtonNode, "Down"), this.dispatchEvent(a.ON_TOUCH_RIGHT))
        };
        a.prototype.resetLeft = function () {
            this.changeBtnState(this.leftNode, "Normal");
            this.changeBtnState(this.topNode, "Normal");
            this.changeBtnState(this.rightNode, "Normal");
            this.changeBtnState(this.bottomNode, "Normal")
        };
        a.prototype.resetRight = function () {
            this.changeBtnState(this.rightButtonNode, "Normal")
        };
        a.prototype.changeBtnState = function (a, b) {
            var c;
            switch (a) {
                case this.leftNode:
                    null == this["leftImage" + b] && (this["leftImage" + b] = this.createBtn(this["leftImage" + b + "Name"]));
                    c = this["leftImage" + b];
                    break;
                case this.topNode:
                    null == this["topImage" + b] && (this["topImage" + b] = this.createBtn(this["topImage" + b + "Name"]));
                    c = this["topImage" + b];
                    break;
                case this.rightNode:
                    null == this["rightImage" + b] && (this["rightImage" + b] = this.createBtn(this["rightImage" + b + "Name"]));
                    c = this["rightImage" + b];
                    break;
                case this.bottomNode:
                    null ==
                    this["bottomImage" + b] && (this["bottomImage" + b] = this.createBtn(this["bottomImage" + b + "Name"]));
                    c = this["bottomImage" + b];
                    break;
                case this.rightButtonNode:
                    null == this["rightButtonImage" + b] && (this["rightButtonImage" + b] = this.createBtn(this["rightButtonImage" + b + "Name"])), c = this["rightButtonImage" + b]
            }
            a.removeAllChildren();
            a.addChild(c)
        };
        a.prototype.createBtn = function (a) {
            return d.Bitmap.initWithTexture(d.TextureCache.getInstance().getTexture(a))
        };
        a.prototype.onLeftTouchBegin = function (a, b) {
            this.leftTouchId = b.touchId;
            var c = b.getLocalPoint();
            this.leftTouchPointX = c.x;
            this.leftTouchPointY = c.y;
            this.checkIsLeftTouchInside() && (this.isLeftTouching = !0)
        };
        a.prototype.checkIsLeftTouchInside = function () {
            return this.leftTouchPointX * this.scaleX > -this.leftButtonWidth - this.leftButtonOffset && this.leftTouchPointX * this.scaleX < this.leftButtonWidth + this.leftButtonOffset && this.leftTouchPointY * this.scaleY > -this.leftButtonWidth - this.leftButtonOffset && this.leftTouchPointY * this.scaleY < this.leftButtonWidth + this.leftButtonOffset ? !0 : !1
        };
        a.prototype.onLeftTouchMoved =
            function (a, b) {
                var c = b.getLocalPoint();
                this.leftTouchPointX = c.x;
                this.leftTouchPointY = c.y
            };
        a.prototype.onTouchEnded = function (b, c) {
            if (null == this.leftTouchId || this.leftTouchId == c.touchId)this.isLeftTouching && (this.isLeftTouching = !1, this.resetLeft(), this.dispatchEvent(a.STOP_TOUCH_LEFT)), this.leftTouchId = null;
            if (null == this.rightTouchId || this.rightTouchId == c.touchId)this.isRightTouching && (this.isRightTouching = !1, this.resetRight(), this.dispatchEvent(a.STOP_TOUCH_RIGHT)), this.rightTouchId = null
        };
        a.prototype.sendLeftTouchEvent =
            function () {
                if (this.checkIsLeftTouchInside())if (this.leftTouchPointX > -this.leftButtonOffset && this.leftTouchPointX < this.leftButtonOffset && this.leftTouchPointY > -this.leftButtonOffset && this.leftTouchPointY < this.leftButtonOffset)this.resetLeft(); else {
                    var b = Math.atan2(this.leftTouchPointY, this.leftTouchPointX) * (180 / Math.PI);
                    0 > b && (b += 360);
                    var c = [];
                    330 < b || 30 > b ? (this.changeBtnState(this.leftNode, "Normal"), this.changeBtnState(this.topNode, "Normal"), this.changeBtnState(this.rightNode, "Down"), this.changeBtnState(this.bottomNode,
                        "Normal"), c.push(a.DIRECTION_RIGHT)) : 30 < b && 60 > b ? (this.changeBtnState(this.leftNode, "Normal"), this.changeBtnState(this.topNode, "Normal"), this.changeBtnState(this.rightNode, "Down"), this.changeBtnState(this.bottomNode, "Down"), c.push(a.DIRECTION_BOTTOM, a.DIRECTION_RIGHT)) : 60 < b && 120 > b ? (this.changeBtnState(this.leftNode, "Normal"), this.changeBtnState(this.topNode, "Normal"), this.changeBtnState(this.rightNode, "Normal"), this.changeBtnState(this.bottomNode, "Down"), c.push(a.DIRECTION_BOTTOM)) : 120 < b && 150 > b ? (this.changeBtnState(this.leftNode,
                        "Down"), this.changeBtnState(this.topNode, "Normal"), this.changeBtnState(this.rightNode, "Normal"), this.changeBtnState(this.bottomNode, "Down"), c.push(a.DIRECTION_BOTTOM, a.DIRECTION_LEFT)) : 150 < b && 210 > b ? (this.changeBtnState(this.leftNode, "Down"), this.changeBtnState(this.topNode, "Normal"), this.changeBtnState(this.rightNode, "Normal"), this.changeBtnState(this.bottomNode, "Normal"), c.push(a.DIRECTION_LEFT)) : 210 < b && 240 > b ? (this.changeBtnState(this.leftNode, "Down"), this.changeBtnState(this.topNode, "Down"), this.changeBtnState(this.rightNode,
                        "Normal"), this.changeBtnState(this.bottomNode, "Normal"), c.push(a.DIRECTION_LEFT, a.DIRECTION_TOP)) : 240 < b && 300 > b ? (this.changeBtnState(this.leftNode, "Normal"), this.changeBtnState(this.topNode, "Down"), this.changeBtnState(this.rightNode, "Normal"), this.changeBtnState(this.bottomNode, "Normal"), c.push(a.DIRECTION_TOP)) : 300 < b && 330 > b && (this.changeBtnState(this.leftNode, "Normal"), this.changeBtnState(this.topNode, "Down"), this.changeBtnState(this.rightNode, "Down"), this.changeBtnState(this.bottomNode, "Normal"),
                        c.push(a.DIRECTION_TOP, a.DIRECTION_RIGHT));
                    this.dispatchEvent(a.ON_TOUCH_LEFT, c)
                }
            };
        a.prototype.onRightTouchBegin = function (a, b) {
            this.rightTouchId = b.touchId;
            var c = b.getLocalPoint();
            this.rightTouchPointX = c.x;
            this.rightTouchPointY = c.y;
            this.checkIsRightTouchInside() && (this.isRightTouching = !0)
        };
        a.prototype.checkIsRightTouchInside = function () {
            return this.rightTouchPointX * this.scaleX > -this.rightButtonWidth && this.rightTouchPointX * this.scaleX < this.rightButtonWidth && this.rightTouchPointY * this.scaleY > -this.rightButtonWidth &&
                this.rightTouchPointY * this.scaleY < this.rightButtonWidth ? !0 : !1
        };
        a.prototype.onRightTouchMoved = function (a, b) {
            var c = b.getLocalPoint();
            this.rightTouchPointX = c.x;
            this.rightTouchPointY = c.y
        };
        a.prototype.setBtnVisible = function (b, c) {
            switch (b) {
                case a.DIRECTION_LEFT:
                    this.leftNode.visible = c;
                    break;
                case a.DIRECTION_TOP:
                    this.topNode.visible = c;
                    break;
                case a.DIRECTION_RIGHT:
                    this.rightNode.visible = c;
                    break;
                case a.DIRECTION_BOTTOM:
                    this.bottomNode.visible = c
            }
        };
        a.prototype.setButtonWidth = function (a) {
            this.leftButtonWidth =
                a
        };
        a.prototype.setButtonHeight = function (a) {
            this.leftButtonHeight = a
        };
        a.prototype.setButtonOffset = function (a) {
            this.leftButtonOffset = a
        };
        a.prototype.setLeftImageNormalName = function (a) {
            this.leftImageNormalName = a
        };
        a.prototype.setTopImageNormalName = function (a) {
            this.topImageNormalName = a
        };
        a.prototype.setRightImageNormalName = function (a) {
            this.rightImageNormalName = a
        };
        a.prototype.setBottomImageNormalName = function (a) {
            this.bottomImageNormalName = a
        };
        a.prototype.setLeftImageDownName = function (a) {
            this.leftImageDownName =
                a
        };
        a.prototype.setTopImageDownName = function (a) {
            this.topImageDownName = a
        };
        a.prototype.setRightImageDownName = function (a) {
            this.rightImageDownName = a
        };
        a.prototype.setBottomImageDownName = function (a) {
            this.bottomImageDownName = a
        };
        a.prototype.setRightButtonImageNormalName = function (a) {
            this.rightButtonImageNormalName = a
        };
        a.prototype.setRightButtonImageDownName = function (a) {
            this.rightButtonImageDownName = a
        };
        a.DIRECTION_LEFT = 1;
        a.DIRECTION_TOP = 2;
        a.DIRECTION_RIGHT = 3;
        a.DIRECTION_BOTTOM = 4;
        a.ON_TOUCH_LEFT = "VirtualJoystickClickLeft";
        a.ON_TOUCH_RIGHT = "VirtualJoystickClickRight";
        a.STOP_TOUCH_LEFT = "VirtualJoystickStopTouchLeft";
        a.STOP_TOUCH_RIGHT = "VirtualJoystickStopTouchRight";
        a.instacce = null;
        return a
    }(d.DisplayObjectContainer);
    d.VirtualJoystick = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.call(this)
        }

        __extends(a, b);
        a.prototype.onActivity = function () {
            b.prototype.onActivity.call(this);
            this.addEventListener(d.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        };
        a.prototype.onCancel = function () {
            b.prototype.onCancel.call(this);
            this.removeEventListener(d.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        };
        a.prototype.onTouchTap = function () {
            console.log("tap!!")
        };
        return a
    }(d.ComponentBase);
    d.Button = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a, c) {
            "undefined" === typeof c && (c = "");
            b.call(this);
            "" != c && (this._bg = d.Bitmap.initWithTexture(d.TextureCache.getInstance().getTexture(c)), this.addChild(this._bg));
            var g = d.TextureCache.getInstance().getTexture(a);
            this._barWidth = g.getTextureWidth();
            this._bar = d.Bitmap.initWithTexture(g);
            this.addChild(this._bar);
            g = {x: 0, y: 0, width: this._barWidth, height: g.getTextureHeight()};
            this._bar.mask = g
        }

        __extends(a, b);
        Object.defineProperty(a.prototype, "percentage", {get: function () {
            return this._percentage
        },
            set: function (a) {
                this._percentage = a;
                this.setProgress(this._percentage, 100)
            }, enumerable: !0, configurable: !0});
        a.prototype.setOffset = function (a, b) {
            this._bar.x = a;
            this._bar.y = b
        };
        a.prototype.setProgress = function (a, b) {
            this._percentage = 100 * (a / b);
            this._bar.mask.width = this._barWidth * a / b
        };
        return a
    }(d.DisplayObjectContainer);
    d.ProgressBar = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a(a) {
            b.call(this);
            this.texture = a;
            this._right = this._left = this._bottom = this._top = this._defaultPadding = 5;
            this._scaleHeight = this._scaleWidth = 0
        }

        __extends(a, b);
        a.prototype.setScaleGrid = function (a, b, c, h) {
            "undefined" === typeof a && (a = this._defaultPadding);
            "undefined" === typeof b && (b = this._defaultPadding);
            "undefined" === typeof c && (c = this._defaultPadding);
            "undefined" === typeof h && (h = this._defaultPadding);
            d.DEBUG && d.DEBUG.SCALE_BITMAP_SET_SCALE_GRID && d.DEBUG.checkSetScaleGrid(this.texture,
                a, b, c, h);
            this._top = a;
            this._bottom = b;
            this._left = c;
            this._right = h
        };
        a.prototype.setContentSize = function (a, c) {
            b.prototype.setContentSize.call(this, a, c);
            this.texture || d.Logger.fatal("Scale9Bitmap\u6ca1\u6709\u7eb9\u7406");
            0 < parseInt(a) && (this._scaleWidth = a);
            0 < parseInt(c) && (this._scaleHeight = c)
        };
        a.prototype.render = function (a) {
            var b = this.texture, c = b.getTextureWidth(), h = b.getTextureHeight(), k = this._scaleWidth, l = this._scaleHeight;
            (!b || 0 == k || 0 == l) && d.Logger.fatal("ScaleBitmap\u9700\u8981\u8bbe\u7f6eScaleSize");
            var b = h - this._top - this._bottom, m = c - this._left - this._right, l = l - this._top - this._bottom, p = k - this._left - this._right;
            this.drawImage(a, this.texture, 0, 0, this._left, this._top, 0, 0, this._left, this._top);
            a.translate(this._left, 0);
            this.drawImage(a, this.texture, this._left, 0, m, this._top, 0, 0, p, this._top);
            a.translate(p, 0);
            this.drawImage(a, this.texture, c - this._right, 0, this._right, this._top, 0, 0, this._right, this._top);
            a.translate(-(k - this._right), this._top);
            this.drawImage(a, this.texture, 0, this._top, this._left, b, 0, 0,
                this._left, l);
            a.translate(this._left, 0);
            this.drawImage(a, this.texture, this._left, this._top, m, b, 0, 0, p, l);
            a.translate(p, 0);
            this.drawImage(a, this.texture, c - this._right, this._top, this._right, b, 0, 0, this._right, l);
            a.translate(-(k - this._right), l);
            this.drawImage(a, this.texture, 0, h - this._bottom, this._left, this._bottom, 0, 0, this._left, this._bottom);
            a.translate(this._left, 0);
            this.drawImage(a, this.texture, this._left, h - this._bottom, m, this._bottom, 0, 0, p, this._bottom);
            a.translate(p, 0);
            this.drawImage(a, this.texture,
                    c - this._right, h - this._bottom, this._right, this._bottom, 0, 0, this._right, this._bottom)
        };
        a.prototype.drawImage = function (a, b, c, d, k, l, m, p, n, q) {
            0 < k && 0 < l && a.drawImage(b, c, d, k, l, m, p, n, q)
        };
        return a
    }(d.DisplayObject);
    d.Scale9Bitmap = c
})(ns_egret || (ns_egret = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    var c = function (b) {
        function a() {
            b.apply(this, arguments)
        }

        __extends(a, b);
        a.create = function (b, c, d) {
            "undefined" === typeof c && (c = null);
            "undefined" === typeof d && (d = null);
            var h = new a;
            h.startLoad(b, c, d);
            return h
        };
        a.prototype.startLoad = function (a, b, c) {
            this._src = a;
            this._onLoadComplete = b;
            this._onLoadCompleteThisObj = c;
            this._resource = d.ResourceLoader.create(a, d.ResourceLoader.DATA_TYPE_IMAGE);
            this._resource.addEventListener(d.ResourceLoader.LOAD_COMPLETE, this.resourceLoadComplete, this);
            this._resource.load()
        };
        a.prototype.resourceLoadComplete = function () {
            this._resource.removeEventListener(d.ResourceLoader.LOAD_COMPLETE, this.resourceLoadComplete, this);
            this._resource = null;
            this.texture = d.TextureCache.getInstance().getTexture(this._src);
            this._onLoadComplete && (this._onLoadComplete.call(this._onLoadCompleteThisObj), this._onLoadCompleteThisObj = this._onLoadComplete = null)
        };
        a.prototype._measureBounds = function () {
            return this.texture ? b.prototype._measureBounds.call(this) : d.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        return a
    }(d.Bitmap);
    d.DynamicBitmap = c
})(ns_egret || (ns_egret = {}));
var __extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
}, dragonBones;
(function (d) {
    (function (a) {
        var b = function () {
            function a(b, c) {
                "undefined" === typeof b && (b = 0);
                "undefined" === typeof c && (c = 0);
                this.x = b;
                this.y = c
            }

            a.prototype.toString = function () {
                return"[Point (x\x3d" + this.x + " y\x3d" + this.y + ")]"
            };
            return a
        }();
        a.Point = b;
        b = function () {
            return function (a, b, c, d) {
                "undefined" === typeof a && (a = 0);
                "undefined" === typeof b && (b = 0);
                "undefined" === typeof c && (c = 0);
                "undefined" === typeof d && (d = 0);
                this.x = a;
                this.y = b;
                this.width = c;
                this.height = d
            }
        }();
        a.Rectangle = b;
        b = function () {
            function a() {
                this.a = 1;
                this.c =
                    this.b = 0;
                this.d = 1;
                this.ty = this.tx = 0
            }

            a.prototype.invert = function () {
                var a = this.a, b = this.b, c = this.c, d = this.d, e = this.tx, f = a * d - b * c;
                this.a = d / f;
                this.b = -b / f;
                this.c = -c / f;
                this.d = a / f;
                this.tx = (c * this.ty - d * e) / f;
                this.ty = -(a * this.ty - b * e) / f
            };
            return a
        }();
        a.Matrix = b;
        b = function () {
            return function () {
                this.redOffset = this.redMultiplier = this.greenOffset = this.greenMultiplier = this.blueOffset = this.blueMultiplier = this.alphaOffset = this.alphaMultiplier = 0
            }
        }();
        a.ColorTransform = b
    })(d.geom || (d.geom = {}));
    var c = d.geom;
    (function (a) {
        var b =
            function () {
                return function (a) {
                    this.type = a
                }
            }();
        a.Event = b;
        var c = function (a) {
            function b(c) {
                a.call(this, c)
            }

            __extends(b, a);
            b.FADE_IN = "fadeIn";
            b.FADE_OUT = "fadeOut";
            b.START = "start";
            b.COMPLETE = "complete";
            b.LOOP_COMPLETE = "loopComplete";
            b.FADE_IN_COMPLETE = "fadeInComplete";
            b.FADE_OUT_COMPLETE = "fadeOutComplete";
            return b
        }(b);
        a.AnimationEvent = c;
        c = function (a) {
            function b(c) {
                a.call(this, c)
            }

            __extends(b, a);
            b.Z_ORDER_UPDATED = "zOrderUpdated";
            return b
        }(b);
        a.ArmatureEvent = c;
        c = function (a) {
            function b(c) {
                a.call(this, c)
            }

            __extends(b,
                a);
            b.ANIMATION_FRAME_EVENT = "animationFrameEvent";
            b.BONE_FRAME_EVENT = "boneFrameEvent";
            return b
        }(b);
        a.FrameEvent = c;
        b = function (a) {
            function b(c) {
                a.call(this, c)
            }

            __extends(b, a);
            b.SOUND = "sound";
            b.BONE_FRAME_EVENT = "boneFrameEvent";
            return b
        }(b);
        a.SoundEvent = b;
        b = function () {
            function a() {
            }

            a.prototype.hasEventListener = function (a) {
                return this._listenersMap && this._listenersMap[a] ? !0 : !1
            };
            a.prototype.addEventListener = function (a, b) {
                if (a && b) {
                    this._listenersMap || (this._listenersMap = {});
                    var c = this._listenersMap[a];
                    c &&
                    this.removeEventListener(a, b);
                    c ? c.push(b) : this._listenersMap[a] = [b]
                }
            };
            a.prototype.removeEventListener = function (a, b) {
                if (this._listenersMap && a && b) {
                    var c = this._listenersMap[a];
                    if (c)for (var d = c.length, e = 0; e < d; e++)c[e] == b && (1 == d ? (c.length = 0, delete this._listenersMap[a]) : c.splice(e, 1))
                }
            };
            a.prototype.removeAllEventListeners = function (a) {
                a ? delete this._listenersMap[a] : this._listenersMap = null
            };
            a.prototype.dispatchEvent = function (a) {
                if (a) {
                    var b = this._listenersMap[a.type];
                    if (b) {
                        a.target = this;
                        for (var c = b.concat(),
                                 b = b.length, d = 0; d < b; d++)c[d](a)
                    }
                }
            };
            return a
        }();
        a.EventDispatcher = b;
        b = function (a) {
            function b() {
                a.call(this);
                if (b._instance)throw Error("Singleton already constructed!");
            }

            __extends(b, a);
            b.getInstance = function () {
                b._instance || (b._instance = new b);
                return b._instance
            };
            return b
        }(b);
        a.SoundEventManager = b
    })(d.events || (d.events = {}));
    var b = d.events;
    (function (a) {
        var d = function () {
            function a() {
                this.timeScale = 1;
                this.time = 0.001 * (new Date).getTime();
                this._animatableList = []
            }

            a.prototype.contains = function (a) {
                return 0 <=
                    this._animatableList.indexOf(a)
            };
            a.prototype.add = function (a) {
                a && -1 == this._animatableList.indexOf(a) && this._animatableList.push(a)
            };
            a.prototype.remove = function (a) {
                a = this._animatableList.indexOf(a);
                0 <= a && (this._animatableList[a] = null)
            };
            a.prototype.clear = function () {
                this._animatableList.length = 0
            };
            a.prototype.advanceTime = function (a) {
                if (0 > a) {
                    var b = 0.001 * (new Date).getTime();
                    a = b - this.time;
                    this.time = b
                }
                a *= this.timeScale;
                b = this._animatableList.length;
                if (0 != b) {
                    for (var c = 0, d = 0; d < b; d++) {
                        var e = this._animatableList[d];
                        e && (c != d && (this._animatableList[c] = e, this._animatableList[d] = null), e.advanceTime(a), c++)
                    }
                    if (c != d) {
                        for (b = this._animatableList.length; d < b;)this._animatableList[c++] = this._animatableList[d++];
                        this._animatableList.length = c
                    }
                }
            };
            a.clock = new a;
            return a
        }();
        a.WorldClock = d;
        var g = function () {
            function a() {
                this.transform = new e.DBTransform;
                this.pivot = new c.Point;
                this._durationTransform = new e.DBTransform;
                this._durationPivot = new c.Point;
                this._durationColor = new c.ColorTransform
            }

            a._borrowObject = function () {
                return 0 ==
                    a._pool.length ? new a : a._pool.pop()
            };
            a._returnObject = function (b) {
                0 > a._pool.indexOf(b) && (a._pool[a._pool.length] = b);
                b.clear()
            };
            a._clear = function () {
                for (var b = a._pool.length; b--;)a._pool[b].clear();
                a._pool.length = 0
            };
            a.getEaseValue = function (b, c) {
                if (1 < c) {
                    var d = 0.5 * (1 - Math.cos(b * Math.PI)) - b;
                    c -= 1
                } else 0 < c ? d = Math.sin(b * a.HALF_PI) - b : 0 > c && (d = 1 - Math.cos(b * a.HALF_PI) - b, c *= -1);
                return d * c + b
            };
            a.prototype.fadeIn = function (a, b, c) {
                this._bone = a;
                this._animationState = b;
                this._timeline = c;
                this._originTransform = this._timeline.originTransform;
                this._originPivot = this._timeline.originPivot;
                this._tweenColor = this._tweenTransform = !1;
                this._totalTime = this._animationState.totalTime;
                this.transform.x = 0;
                this.transform.y = 0;
                this.transform.scaleX = 0;
                this.transform.scaleY = 0;
                this.transform.skewX = 0;
                this.transform.skewY = 0;
                this.pivot.x = 0;
                this.pivot.y = 0;
                this._durationTransform.x = 0;
                this._durationTransform.y = 0;
                this._durationTransform.scaleX = 0;
                this._durationTransform.scaleY = 0;
                this._durationTransform.skewX = 0;
                this._durationTransform.skewY = 0;
                this._durationPivot.x =
                    0;
                this._durationPivot.y = 0;
                this._currentFrame = null;
                switch (this._timeline.getFrameList().length) {
                    case 0:
                        this._bone._arriveAtFrame(null, this, this._animationState, !1);
                        this._updateState = 0;
                        break;
                    case 1:
                        this._updateState = -1;
                        break;
                    default:
                        this._updateState = 1
                }
            };
            a.prototype.fadeOut = function () {
                this.transform.skewX = f.TransformUtil.formatRadian(this.transform.skewX);
                this.transform.skewY = f.TransformUtil.formatRadian(this.transform.skewY)
            };
            a.prototype.update = function (b) {
                if (this._updateState)if (0 < this._updateState) {
                    b =
                            0 == this._timeline.scale ? 1 : b / this._timeline.scale;
                    1 == b && (b = 0.99999999);
                    b += this._timeline.offset;
                    var c = Math.floor(b);
                    b -= c;
                    for (var d = this._totalTime * b, e = !1, g; !this._currentFrame || d > this._currentFramePosition + this._currentFrameDuration || d < this._currentFramePosition;)e && this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !0), e = !0, this._currentFrame ? (g = this._timeline.getFrameList().indexOf(this._currentFrame) + 1, g >= this._timeline.getFrameList().length && (g = 0), this._currentFrame = this._timeline.getFrameList()[g]) :
                        (g = 0, this._currentFrame = this._timeline.getFrameList()[0]), this._currentFrameDuration = this._currentFrame.duration, this._currentFramePosition = this._currentFrame.position;
                    e && (this.tweenActive = 0 <= this._currentFrame.displayIndex, g++, g >= this._timeline.getFrameList().length && (g = 0), e = this._timeline.getFrameList()[g], 0 == g && this._animationState.loop && this._animationState.loopCount >= Math.abs(this._animationState.loop) - 1 && 0.99999999 < ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + c - this._timeline.offset) *
                        this._timeline.scale ? (this._updateState = 0, this._tweenEasing = NaN) : 0 > this._currentFrame.displayIndex || 0 > e.displayIndex || !this._animationState.tweenEnabled ? this._tweenEasing = NaN : isNaN(this._animationState.clip.tweenEasing) ? this._tweenEasing = this._currentFrame.tweenEasing : this._tweenEasing = this._animationState.clip.tweenEasing, isNaN(this._tweenEasing) ? this._tweenColor = this._tweenTransform = !1 : (this._durationTransform.x = e.transform.x - this._currentFrame.transform.x, this._durationTransform.y = e.transform.y -
                        this._currentFrame.transform.y, this._durationTransform.skewX = e.transform.skewX - this._currentFrame.transform.skewX, this._durationTransform.skewY = e.transform.skewY - this._currentFrame.transform.skewY, this._durationTransform.scaleX = e.transform.scaleX - this._currentFrame.transform.scaleX, this._durationTransform.scaleY = e.transform.scaleY - this._currentFrame.transform.scaleY, 0 == g && (this._durationTransform.skewX = f.TransformUtil.formatRadian(this._durationTransform.skewX), this._durationTransform.skewY = f.TransformUtil.formatRadian(this._durationTransform.skewY)),
                        this._durationPivot.x = e.pivot.x - this._currentFrame.pivot.x, this._durationPivot.y = e.pivot.y - this._currentFrame.pivot.y, this._tweenTransform = 0 != this._durationTransform.x || 0 != this._durationTransform.y || 0 != this._durationTransform.skewX || 0 != this._durationTransform.skewY || 0 != this._durationTransform.scaleX || 0 != this._durationTransform.scaleY || 0 != this._durationPivot.x || 0 != this._durationPivot.y ? !0 : !1, this._currentFrame.color && e.color ? (this._durationColor.alphaOffset = e.color.alphaOffset - this._currentFrame.color.alphaOffset,
                        this._durationColor.redOffset = e.color.redOffset - this._currentFrame.color.redOffset, this._durationColor.greenOffset = e.color.greenOffset - this._currentFrame.color.greenOffset, this._durationColor.blueOffset = e.color.blueOffset - this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = e.color.alphaMultiplier - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = e.color.redMultiplier - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = e.color.greenMultiplier -
                        this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = e.color.blueMultiplier - this._currentFrame.color.blueMultiplier, this._tweenColor = 0 != this._durationColor.alphaOffset || 0 != this._durationColor.redOffset || 0 != this._durationColor.greenOffset || 0 != this._durationColor.blueOffset || 0 != this._durationColor.alphaMultiplier || 0 != this._durationColor.redMultiplier || 0 != this._durationColor.greenMultiplier || 0 != this._durationColor.blueMultiplier ? !0 : !1) : this._currentFrame.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset, this._durationColor.redOffset = -this._currentFrame.color.redOffset, this._durationColor.greenOffset = -this._currentFrame.color.greenOffset, this._durationColor.blueOffset = -this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = 1 - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = 1 - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = 1 - this._currentFrame.color.greenMultiplier,
                        this._durationColor.blueMultiplier = 1 - this._currentFrame.color.blueMultiplier) : e.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = e.color.alphaOffset, this._durationColor.redOffset = e.color.redOffset, this._durationColor.greenOffset = e.color.greenOffset, this._durationColor.blueOffset = e.color.blueOffset, this._durationColor.alphaMultiplier = e.color.alphaMultiplier - 1, this._durationColor.redMultiplier = e.color.redMultiplier - 1, this._durationColor.greenMultiplier = e.color.greenMultiplier - 1, this._durationColor.blueMultiplier =
                        e.color.blueMultiplier - 1) : this._tweenColor = !1), this._tweenTransform || (this._animationState.blend ? (this.transform.x = this._originTransform.x + this._currentFrame.transform.x, this.transform.y = this._originTransform.y + this._currentFrame.transform.y, this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX, this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY, this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX, this.transform.scaleY =
                        this._originTransform.scaleY + this._currentFrame.transform.scaleY, this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x, this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y) : (this.transform.x = this._currentFrame.transform.x, this.transform.y = this._currentFrame.transform.y, this.transform.skewX = this._currentFrame.transform.skewX, this.transform.skewY = this._currentFrame.transform.skewY, this.transform.scaleX = this._currentFrame.transform.scaleX, this.transform.scaleY = this._currentFrame.transform.scaleY,
                        this.pivot.x = this._currentFrame.pivot.x, this.pivot.y = this._currentFrame.pivot.y)), this._tweenColor || (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._isColorChanged && this._bone._updateColor(0,
                        0, 0, 0, 1, 1, 1, 1, !1)), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1));
                    if (this._tweenTransform || this._tweenColor)b = (d - this._currentFramePosition) / this._currentFrameDuration, this._tweenEasing && (b = a.getEaseValue(b, this._tweenEasing));
                    this._tweenTransform && (c = this._currentFrame.transform, d = this._currentFrame.pivot, this._animationState.blend ? (this.transform.x = this._originTransform.x + c.x + this._durationTransform.x * b, this.transform.y = this._originTransform.y + c.y + this._durationTransform.y *
                        b, this.transform.skewX = this._originTransform.skewX + c.skewX + this._durationTransform.skewX * b, this.transform.skewY = this._originTransform.skewY + c.skewY + this._durationTransform.skewY * b, this.transform.scaleX = this._originTransform.scaleX + c.scaleX + this._durationTransform.scaleX * b, this.transform.scaleY = this._originTransform.scaleY + c.scaleY + this._durationTransform.scaleY * b, this.pivot.x = this._originPivot.x + d.x + this._durationPivot.x * b, this.pivot.y = this._originPivot.y + d.y + this._durationPivot.y * b) : (this.transform.x =
                        c.x + this._durationTransform.x * b, this.transform.y = c.y + this._durationTransform.y * b, this.transform.skewX = c.skewX + this._durationTransform.skewX * b, this.transform.skewY = c.skewY + this._durationTransform.skewY * b, this.transform.scaleX = c.scaleX + this._durationTransform.scaleX * b, this.transform.scaleY = c.scaleY + this._durationTransform.scaleY * b, this.pivot.x = d.x + this._durationPivot.x * b, this.pivot.y = d.y + this._durationPivot.y * b));
                    this._tweenColor && (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset +
                        this._durationColor.alphaOffset * b, this._currentFrame.color.redOffset + this._durationColor.redOffset * b, this._currentFrame.color.greenOffset + this._durationColor.greenOffset * b, this._currentFrame.color.blueOffset + this._durationColor.blueOffset * b, this._currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * b, this._currentFrame.color.redMultiplier + this._durationColor.redMultiplier * b, this._currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * b, this._currentFrame.color.blueMultiplier +
                        this._durationColor.blueMultiplier * b, !0) : this._bone._updateColor(this._durationColor.alphaOffset * b, this._durationColor.redOffset * b, this._durationColor.greenOffset * b, this._durationColor.blueOffset * b, 1 + this._durationColor.alphaMultiplier * b, 1 + this._durationColor.redMultiplier * b, 1 + this._durationColor.greenMultiplier * b, 1 + this._durationColor.blueMultiplier * b, !0))
                } else this._updateState = 0, this._animationState.blend ? (this.transform.copy(this._originTransform), this.pivot.x = this._originPivot.x, this.pivot.y =
                    this._originPivot.y) : (this.transform.x = this.transform.y = this.transform.skewX = this.transform.skewY = this.transform.scaleX = this.transform.scaleY = 0, this.pivot.x = 0, this.pivot.y = 0), this._currentFrame = this._timeline.getFrameList()[0], this.tweenActive = 0 <= this._currentFrame.displayIndex, this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier,
                    this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)
            };
            a.prototype.clear = function () {
                this._updateState = 0;
                this._originPivot = this._originTransform = this._currentFrame = this._timeline = this._animationState = this._bone = null
            };
            a.HALF_PI = 0.5 * Math.PI;
            a._pool = [];
            return a
        }();
        a.TimelineState = g;
        var h = function () {
            function a() {
                this.layer =
                    this.loop = 0;
                this._timelineStates = {}
            }

            a._borrowObject = function () {
                return 0 == a._pool.length ? new a : a._pool.pop()
            };
            a._returnObject = function (b) {
                0 > a._pool.indexOf(b) && (a._pool[a._pool.length] = b);
                b.clear()
            };
            a._clear = function () {
                for (var b = a._pool.length; b--;)a._pool[b].clear();
                a._pool.length = 0
            };
            a.prototype.fadeIn = function (a, b, c, d, e, f, g, h) {
                this.layer = f;
                this.clip = b;
                this.name = this.clip.name;
                this.totalTime = this.clip.duration;
                this._armature = a;
                2 > Math.round(this.clip.duration * this.clip.frameRate) || Infinity == d ? (this.timeScale =
                    1, this.currentTime = this.totalTime, this.loop = 0 <= this.loop ? 1 : -1) : (this.timeScale = d, this.currentTime = 0, this.loop = e);
                this._pauseBeforeFadeInComplete = h;
                this._fadeInTime = c * this.timeScale;
                this._fadeState = 1;
                this._fadeOutBeginTime = 0;
                this._fadeOutWeight = -1;
                this._fadeWeight = 0;
                this._fadeIn = !0;
                this._fadeOut = !1;
                this.loopCount = -1;
                this.displayControl = g;
                this.isPlaying = !0;
                this.isComplete = !1;
                this.weight = 1;
                this.tweenEnabled = this.enabled = this.blend = !0;
                this.updateTimelineStates()
            };
            a.prototype.fadeOut = function (a, b) {
                "undefined" === typeof b && (b = !1);
                if (this._armature && !(0 <= this._fadeOutWeight)) {
                    this._fadeState = -1;
                    this._fadeOutWeight = this._fadeWeight;
                    this._fadeOutTime = a * this.timeScale;
                    this._fadeOutBeginTime = this.currentTime;
                    this._fadeOut = !0;
                    this.isPlaying = !b;
                    this.displayControl = !1;
                    for (var c in this._timelineStates)this._timelineStates[c].fadeOut();
                    this.enabled = !0
                }
            };
            a.prototype.play = function () {
                this.isPlaying = !0
            };
            a.prototype.stop = function () {
                this.isPlaying = !1
            };
            a.prototype.getMixingTransform = function (a) {
                return this._mixingTransforms ?
                    Number(this._mixingTransforms[a]) : -1
            };
            a.prototype.addMixingTransform = function (a, b, c) {
                "undefined" === typeof b && (b = 2);
                "undefined" === typeof c && (c = !0);
                if (this.clip && this.clip.getTimeline(a)) {
                    this._mixingTransforms || (this._mixingTransforms = {});
                    if (c) {
                        c = this._armature._boneList.length;
                        for (var d, e; c--;)if (d = this._armature._boneList[c], d.name == a && (e = d), e && (e == d || e.contains(d)))this._mixingTransforms[d.name] = b
                    } else this._mixingTransforms[a] = b;
                    this.updateTimelineStates()
                } else throw Error();
            };
            a.prototype.removeMixingTransform =
                function (a, b) {
                    "undefined" === typeof a && (a = null);
                    "undefined" === typeof b && (b = !0);
                    if (a) {
                        if (b)for (var c = this._armature._boneList.length, d, e; c--;)d = this._armature._boneList[c], d.name == a && (e = d), e && (e == d || e.contains(d)) && delete this._mixingTransforms[d.name]; else delete this._mixingTransforms[a];
                        for (var f in this._mixingTransforms) {
                            var g = !0;
                            break
                        }
                        g || (this._mixingTransforms = null)
                    } else this._mixingTransforms = null;
                    this.updateTimelineStates()
                };
            a.prototype.advanceTime = function (a) {
                if (!this.enabled)return!1;
                var c,
                    d;
                this._fadeIn && (this._fadeIn = !1, this._armature.hasEventListener(b.AnimationEvent.FADE_IN) && (c = new b.AnimationEvent(b.AnimationEvent.FADE_IN), c.animationState = this, this._armature._eventList.push(c)));
                this._fadeOut && (this._fadeOut = !1, this._armature.hasEventListener(b.AnimationEvent.FADE_OUT) && (c = new b.AnimationEvent(b.AnimationEvent.FADE_OUT), c.animationState = this, this._armature._eventList.push(c)));
                this.currentTime += a * this.timeScale;
                if (this.isPlaying && !this.isComplete) {
                    var e;
                    if (this._pauseBeforeFadeInComplete)this.isPlaying =
                        this._pauseBeforeFadeInComplete = !1, a = 0, e = Math.floor(a); else if (a = this.currentTime / this.totalTime, e = Math.floor(a), e != this.loopCount && (-1 == this.loopCount && this._armature.hasEventListener(b.AnimationEvent.START) && (c = new b.AnimationEvent(b.AnimationEvent.START), c.animationState = this, this._armature._eventList.push(c)), this.loopCount = e))this.loop && this.loopCount * this.loopCount >= this.loop * this.loop - 1 ? (d = !0, a = 1, e = 0, this._armature.hasEventListener(b.AnimationEvent.COMPLETE) && (c = new b.AnimationEvent(b.AnimationEvent.COMPLETE),
                        c.animationState = this, this._armature._eventList.push(c))) : this._armature.hasEventListener(b.AnimationEvent.LOOP_COMPLETE) && (c = new b.AnimationEvent(b.AnimationEvent.LOOP_COMPLETE), c.animationState = this, this._armature._eventList.push(c));
                    for (var f in this._timelineStates)this._timelineStates[f].update(a);
                    c = this.clip.getFrameList();
                    if (0 < c.length) {
                        a = this.totalTime * (a - e);
                        for (e = !1; !this._currentFrame || a > this._currentFrame.position + this._currentFrame.duration || a < this._currentFrame.position;)e && this._armature._arriveAtFrame(this._currentFrame,
                            null, this, !0), e = !0, this._currentFrame ? (f = c.indexOf(this._currentFrame), f++, f >= c.length && (f = 0), this._currentFrame = c[f]) : this._currentFrame = c[0];
                        e && this._armature._arriveAtFrame(this._currentFrame, null, this, !1)
                    }
                }
                if (0 < this._fadeState)0 == this._fadeInTime ? (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying = !0, this._armature.hasEventListener(b.AnimationEvent.FADE_IN_COMPLETE) && (c = new b.AnimationEvent(b.AnimationEvent.FADE_IN_COMPLETE), c.animationState = this, this._armature._eventList.push(c))) : (this._fadeWeight =
                    this.currentTime / this._fadeInTime, 1 <= this._fadeWeight && (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying || (this.currentTime -= this._fadeInTime), this.isPlaying = !0, this._armature.hasEventListener(b.AnimationEvent.FADE_IN_COMPLETE) && (c = new b.AnimationEvent(b.AnimationEvent.FADE_IN_COMPLETE), c.animationState = this, this._armature._eventList.push(c)))); else if (0 > this._fadeState) {
                    if (0 == this._fadeOutTime)return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(b.AnimationEvent.FADE_OUT_COMPLETE) &&
                        (c = new b.AnimationEvent(b.AnimationEvent.FADE_OUT_COMPLETE), c.animationState = this, this._armature._eventList.push(c)), !0;
                    this._fadeWeight = (1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime) * this._fadeOutWeight;
                    if (0 >= this._fadeWeight)return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(b.AnimationEvent.FADE_OUT_COMPLETE) && (c = new b.AnimationEvent(b.AnimationEvent.FADE_OUT_COMPLETE), c.animationState = this, this._armature._eventList.push(c)), !0
                }
                d && (this.isComplete = !0, 0 > this.loop &&
                    this.fadeOut((this._fadeOutWeight || this._fadeInTime) / this.timeScale, !0));
                return!1
            };
            a.prototype.updateTimelineStates = function () {
                if (this._mixingTransforms) {
                    for (var a in this._timelineStates)null == this._mixingTransforms[a] && this.removeTimelineState(a);
                    for (a in this._mixingTransforms)this._timelineStates[a] || this.addTimelineState(a)
                } else for (a in this.clip.getTimelines())this._timelineStates[a] || this.addTimelineState(a)
            };
            a.prototype.addTimelineState = function (a) {
                var b = this._armature.getBone(a);
                if (b) {
                    var c =
                        g._borrowObject(), d = this.clip.getTimeline(a);
                    c.fadeIn(b, this, d);
                    this._timelineStates[a] = c
                }
            };
            a.prototype.removeTimelineState = function (a) {
                g._returnObject(this._timelineStates[a]);
                delete this._timelineStates[a]
            };
            a.prototype.clear = function () {
                this.clip = null;
                this.enabled = !1;
                this._mixingTransforms = this._currentFrame = this._armature = null;
                for (var a in this._timelineStates)this.removeTimelineState(a)
            };
            a._pool = [];
            return a
        }();
        a.AnimationState = h;
        d = function () {
            function a(b) {
                this._armature = b;
                this._animationLayer =
                    [];
                this._isPlaying = !1;
                this.animationNameList = [];
                this.tweenEnabled = !0;
                this.timeScale = 1
            }

            a.prototype.getLastAnimationName = function () {
                return this._lastAnimationState ? this._lastAnimationState.name : null
            };
            a.prototype.getLastAnimationState = function () {
                return this._lastAnimationState
            };
            a.prototype.getAnimationDataList = function () {
                return this._animationDataList
            };
            a.prototype.setAnimationDataList = function (a) {
                this._animationDataList = a;
                this.animationNameList.length = 0;
                for (var b in this._animationDataList)this.animationNameList[this.animationNameList.length] =
                    this._animationDataList[b].name
            };
            a.prototype.getIsPlaying = function () {
                return this._isPlaying && !this.getIsComplete()
            };
            a.prototype.getIsComplete = function () {
                if (this._lastAnimationState) {
                    if (!this._lastAnimationState.isComplete)return!1;
                    for (var a = this._animationLayer.length; a--;)for (var b = this._animationLayer[a], c = b.length; c--;)if (!b[c].isComplete)return!1;
                    return!0
                }
                return!1
            };
            a.prototype.dispose = function () {
                if (this._armature) {
                    this.stop();
                    for (var a = this._animationLayer.length; a--;) {
                        for (var b = this._animationLayer[a],
                                 c = b.length; c--;)h._returnObject(b[c]);
                        b.length = 0
                    }
                    this._animationLayer.length = 0;
                    this.animationNameList.length = 0;
                    this.animationNameList = this._animationDataList = this._animationLayer = this._armature = null
                }
            };
            a.prototype.gotoAndPlay = function (b, c, d, e, f, g, n, k, l, v) {
                "undefined" === typeof c && (c = -1);
                "undefined" === typeof d && (d = -1);
                "undefined" === typeof e && (e = NaN);
                "undefined" === typeof f && (f = 0);
                "undefined" === typeof g && (g = null);
                "undefined" === typeof n && (n = a.SAME_LAYER_AND_GROUP);
                "undefined" === typeof k && (k = !0);
                "undefined" === typeof l && (l = !0);
                "undefined" === typeof v && (v = !0);
                if (!this._animationDataList)return null;
                for (var m = this._animationDataList.length, p; m--;)if (this._animationDataList[m].name == b) {
                    p = this._animationDataList[m];
                    break
                }
                if (!p)return null;
                this._isPlaying = !0;
                c = 0 > c ? 0 > p.fadeInTime ? 0.3 : p.fadeInTime : c;
                d = 0 > d ? 0 > p.scale ? 1 : p.scale : d / p.duration;
                e = isNaN(e) ? p.loop : e;
                f = this.addLayer(f);
                var r;
                switch (n) {
                    case a.NONE:
                        break;
                    case a.SAME_LAYER:
                        r = this._animationLayer[f];
                        for (m = r.length; m--;)n = r[m], n.fadeOut(c, l);
                        break;
                    case a.SAME_GROUP:
                        for (J =
                                 this._animationLayer.length; J--;) {
                            r = this._animationLayer[J];
                            for (m = r.length; m--;)n = r[m], n.group == g && n.fadeOut(c, l)
                        }
                        break;
                    case a.ALL:
                        for (var J = this._animationLayer.length; J--;) {
                            r = this._animationLayer[J];
                            for (m = r.length; m--;)n = r[m], n.fadeOut(c, l)
                        }
                        break;
                    default:
                        r = this._animationLayer[f];
                        for (m = r.length; m--;)n = r[m], n.group == g && n.fadeOut(c, l)
                }
                this._lastAnimationState = h._borrowObject();
                this._lastAnimationState.group = g;
                this._lastAnimationState.tweenEnabled = this.tweenEnabled;
                this._lastAnimationState.fadeIn(this._armature,
                    p, c, 1 / d, e, f, k, v);
                this.addState(this._lastAnimationState);
                e = this._armature._slotList;
                for (m = e.length; m--;)f = e[m], (f = f.getChildArmature()) && f.animation.gotoAndPlay(b, c);
                return this._lastAnimationState
            };
            a.prototype.play = function () {
                this._animationDataList && 0 != this._animationDataList.length && (this._lastAnimationState ? this._isPlaying ? this.gotoAndPlay(this._lastAnimationState.name) : this._isPlaying = !0 : this.gotoAndPlay(this._animationDataList[0].name))
            };
            a.prototype.stop = function () {
                this._isPlaying = !1
            };
            a.prototype.getState =
                function (a, b) {
                    "undefined" === typeof b && (b = 0);
                    var c = this._animationLayer.length;
                    if (0 == c)return null;
                    b >= c && (b = c - 1);
                    c = this._animationLayer[b];
                    if (!c)return null;
                    for (var d = c.length; d--;)if (c[d].name == a)return c[d];
                    return null
                };
            a.prototype.hasAnimation = function (a) {
                for (var b = this._animationDataList.length; b--;)if (this._animationDataList[b].name == a)return!0;
                return!1
            };
            a.prototype.advanceTime = function (a) {
                if (this._isPlaying) {
                    a *= this.timeScale;
                    var b = this._armature._boneList.length, c, d, e = b, f, g, h, n, k, q, m, l, p, s,
                        E, L, I, M, C, K, G;
                    for (b--; e--;) {
                        g = this._armature._boneList[e];
                        h = g.name;
                        n = 1;
                        L = E = s = p = l = m = q = k = 0;
                        for (c = this._animationLayer.length; c--;) {
                            I = 0;
                            M = this._animationLayer[c];
                            f = M.length;
                            for (d = 0; d < f; d++)if (C = M[d], e == b && C.advanceTime(a))this.removeState(C), d--, f--; else if ((K = C._timelineStates[h]) && K.tweenActive)C = C._fadeWeight * C.weight * n, G = K.transform, K = K.pivot, k += G.x * C, q += G.y * C, m += G.skewX * C, l += G.skewY * C, p += G.scaleX * C, s += G.scaleY * C, E += K.x * C, L += K.y * C, I += C;
                            if (I >= n)break; else n -= I
                        }
                        G = g.tween;
                        K = g._tweenPivot;
                        G.x = k;
                        G.y =
                            q;
                        G.skewX = m;
                        G.skewY = l;
                        G.scaleX = p;
                        G.scaleY = s;
                        K.x = E;
                        K.y = L
                    }
                }
            };
            a.prototype.addLayer = function (a) {
                a >= this._animationLayer.length && (a = this._animationLayer.length, this._animationLayer[a] = []);
                return a
            };
            a.prototype.addState = function (a) {
                this._animationLayer[a.layer].push(a)
            };
            a.prototype.removeState = function (a) {
                var b = a.layer, c = this._animationLayer[b];
                c.splice(c.indexOf(a), 1);
                h._returnObject(a);
                0 == c.length && b == this._animationLayer.length - 1 && this._animationLayer.length--
            };
            a.NONE = "none";
            a.SAME_LAYER = "sameLayer";
            a.SAME_GROUP = "sameGroup";
            a.SAME_LAYER_AND_GROUP = "sameLayerAndGroup";
            a.ALL = "all";
            return a
        }();
        a.Animation = d
    })(d.animation || (d.animation = {}));
    var a = d.animation;
    (function (a) {
        var b = function () {
            function a() {
                this.skewY = this.skewX = this.y = this.x = 0;
                this.scaleY = this.scaleX = 1
            }

            a.prototype.getRotation = function () {
                return this.skewX
            };
            a.prototype.setRotation = function (a) {
                this.skewX = this.skewY = a
            };
            a.prototype.copy = function (a) {
                this.x = a.x;
                this.y = a.y;
                this.skewX = a.skewX;
                this.skewY = a.skewY;
                this.scaleX = a.scaleX;
                this.scaleY =
                    a.scaleY
            };
            a.prototype.toString = function () {
                return"[DBTransform (x\x3d" + this.x + " y\x3d" + this.y + " skewX\x3d" + this.skewX + " skewY\x3d" + this.skewY + " scaleX\x3d" + this.scaleX + " scaleY\x3d" + this.scaleY + ")]"
            };
            return a
        }();
        a.DBTransform = b;
        var d = function () {
            function a() {
                this.duration = this.position = 0
            }

            a.prototype.dispose = function () {
            };
            return a
        }();
        a.Frame = d;
        var e = function (a) {
            function d() {
                a.call(this);
                this.displayIndex = this.tweenRotate = this.tweenEasing = 0;
                this.zOrder = NaN;
                this.visible = !0;
                this.global = new b;
                this.transform =
                    new b;
                this.pivot = new c.Point
            }

            __extends(d, a);
            d.prototype.dispose = function () {
                a.prototype.dispose.call(this);
                this.color = this.pivot = this.transform = this.global = null
            };
            return d
        }(d);
        a.TransformFrame = e;
        var g = function () {
            function a() {
                this._frameList = [];
                this.duration = 0;
                this.scale = 1
            }

            a.prototype.getFrameList = function () {
                return this._frameList
            };
            a.prototype.dispose = function () {
                for (var a = this._frameList.length; a--;)this._frameList[a].dispose();
                this._frameList.length = 0;
                this._frameList = null
            };
            a.prototype.addFrame = function (a) {
                if (!a)throw Error();
                if (0 > this._frameList.indexOf(a))this._frameList[this._frameList.length] = a; else throw Error();
            };
            return a
        }();
        a.Timeline = g;
        var h = function (a) {
            function d() {
                a.call(this);
                this.originTransform = new b;
                this.originPivot = new c.Point;
                this.offset = 0;
                this.transformed = !1
            }

            __extends(d, a);
            d.prototype.dispose = function () {
                this != d.HIDE_TIMELINE && (a.prototype.dispose.call(this), this.originPivot = this.originTransform = null)
            };
            d.HIDE_TIMELINE = new d;
            return d
        }(g);
        a.TransformTimeline = h;
        var k = function (a) {
            function b() {
                a.call(this);
                this.loop = this.frameRate = 0;
                this.tweenEasing = NaN;
                this.fadeInTime = 0;
                this._timelines = {}
            }

            __extends(b, a);
            b.prototype.getTimelines = function () {
                return this._timelines
            };
            b.prototype.dispose = function () {
                a.prototype.dispose.call(this);
                for (var b in this._timelines)this._timelines[b].dispose();
                this._timelines = null
            };
            b.prototype.getTimeline = function (a) {
                return this._timelines[a]
            };
            b.prototype.addTimeline = function (a, b) {
                if (!a)throw Error();
                this._timelines[b] = a
            };
            return b
        }(g);
        a.AnimationData = k;
        var l = function () {
            function a() {
                this.transform =
                    new b
            }

            a.prototype.dispose = function () {
                this.pivot = this.transform = null
            };
            a.ARMATURE = "armature";
            a.IMAGE = "image";
            return a
        }();
        a.DisplayData = l;
        var D = function () {
            function a() {
                this._displayDataList = [];
                this.zOrder = 0;
                this.blendMode = "normal"
            }

            a.prototype.getDisplayDataList = function () {
                return this._displayDataList
            };
            a.prototype.dispose = function () {
                for (var a = this._displayDataList.length; a--;)this._displayDataList[a].dispose();
                this._displayDataList.length = 0;
                this._displayDataList = null
            };
            a.prototype.addDisplayData = function (a) {
                if (!a)throw Error();
                if (0 > this._displayDataList.indexOf(a))this._displayDataList[this._displayDataList.length] = a; else throw Error();
            };
            a.prototype.getDisplayData = function (a) {
                for (var b = this._displayDataList.length; b--;)if (this._displayDataList[b].name == a)return this._displayDataList[b];
                return null
            };
            return a
        }();
        a.SlotData = D;
        var F = function () {
            function a() {
                this.length = 0;
                this.global = new b;
                this.transform = new b;
                this.scaleMode = 1;
                this.fixedRotation = !1
            }

            a.prototype.dispose = function () {
                this.transform = this.global = null
            };
            return a
        }();
        a.BoneData =
            F;
        var H = function () {
            function a() {
                this._slotDataList = []
            }

            a.prototype.getSlotDataList = function () {
                return this._slotDataList
            };
            a.prototype.dispose = function () {
                for (var a = this._slotDataList.length; a--;)this._slotDataList[a].dispose();
                this._slotDataList.length = 0;
                this._slotDataList = null
            };
            a.prototype.getSlotData = function (a) {
                for (var b = this._slotDataList.length; b--;)if (this._slotDataList[b].name == a)return this._slotDataList[b];
                return null
            };
            a.prototype.addSlotData = function (a) {
                if (!a)throw Error();
                if (0 > this._slotDataList.indexOf(a))this._slotDataList[this._slotDataList.length] =
                    a; else throw Error();
            };
            return a
        }();
        a.SkinData = H;
        var u = function () {
            function a() {
                this._boneDataList = [];
                this._skinDataList = [];
                this._animationDataList = []
            }

            a.prototype.getBoneDataList = function () {
                return this._boneDataList
            };
            a.prototype.getSkinDataList = function () {
                return this._skinDataList
            };
            a.prototype.getAnimationDataList = function () {
                return this._animationDataList
            };
            a.prototype.dispose = function () {
                for (var a = this._boneDataList.length; a--;)this._boneDataList[a].dispose();
                for (a = this._skinDataList.length; a--;)this._skinDataList[a].dispose();
                for (a = this._animationDataList.length; a--;)this._animationDataList[a].dispose();
                this._boneDataList.length = 0;
                this._skinDataList.length = 0;
                this._animationDataList.length = 0;
                this._animationDataList = this._skinDataList = this._boneDataList = null
            };
            a.prototype.getBoneData = function (a) {
                for (var b = this._boneDataList.length; b--;)if (this._boneDataList[b].name == a)return this._boneDataList[b];
                return null
            };
            a.prototype.getSkinData = function (a) {
                if (!a)return this._skinDataList[0];
                for (var b = this._skinDataList.length; b--;)if (this._skinDataList[b].name ==
                    a)return this._skinDataList[b];
                return null
            };
            a.prototype.getAnimationData = function (a) {
                for (var b = this._animationDataList.length; b--;)if (this._animationDataList[b].name == a)return this._animationDataList[b];
                return null
            };
            a.prototype.addBoneData = function (a) {
                if (!a)throw Error();
                if (0 > this._boneDataList.indexOf(a))this._boneDataList[this._boneDataList.length] = a; else throw Error();
            };
            a.prototype.addSkinData = function (a) {
                if (!a)throw Error();
                if (0 > this._skinDataList.indexOf(a))this._skinDataList[this._skinDataList.length] =
                    a; else throw Error();
            };
            a.prototype.addAnimationData = function (a) {
                if (!a)throw Error();
                0 > this._animationDataList.indexOf(a) && (this._animationDataList[this._animationDataList.length] = a)
            };
            a.prototype.sortBoneDataList = function () {
                var a = this._boneDataList.length;
                if (0 != a) {
                    for (var b = []; a--;) {
                        for (var c = this._boneDataList[a], d = 0, e = c; e && e.parent;)d++, e = this.getBoneData(e.parent);
                        b[a] = {level: d, boneData: c}
                    }
                    b.sort(this.sortBoneData);
                    for (a = b.length; a--;)this._boneDataList[a] = b[a].boneData
                }
            };
            a.prototype.sortBoneData =
                function (a, b) {
                    return a.level > b.level ? 1 : -1
                };
            return a
        }();
        a.ArmatureData = u;
        var z = function () {
            function a() {
                this._armatureDataList = [];
                this._subTexturePivots = {}
            }

            a.prototype.getArmatureNames = function () {
                var a = [], b;
                for (b in this._armatureDataList)a[a.length] = this._armatureDataList[b].name;
                return a
            };
            a.prototype.getArmatureDataList = function () {
                return this._armatureDataList
            };
            a.prototype.dispose = function () {
                for (var a in this._armatureDataList)this._armatureDataList[a].dispose();
                this._armatureDataList.length = 0;
                this._subTexturePivots =
                    this._armatureDataList = null
            };
            a.prototype.getArmatureData = function (a) {
                for (var b = this._armatureDataList.length; b--;)if (this._armatureDataList[b].name == a)return this._armatureDataList[b];
                return null
            };
            a.prototype.addArmatureData = function (a) {
                if (!a)throw Error();
                if (0 > this._armatureDataList.indexOf(a))this._armatureDataList[this._armatureDataList.length] = a; else throw Error();
            };
            a.prototype.removeArmatureData = function (a) {
                a = this._armatureDataList.indexOf(a);
                0 <= a && this._armatureDataList.splice(a, 1)
            };
            a.prototype.removeArmatureDataByName =
                function (a) {
                    for (var b = this._armatureDataList.length; b--;)this._armatureDataList[b].name == a && this._armatureDataList.splice(b, 1)
                };
            a.prototype.getSubTexturePivot = function (a) {
                return this._subTexturePivots[a]
            };
            a.prototype.addSubTexturePivot = function (a, b, d) {
                var e = this._subTexturePivots[d];
                e ? (e.x = a, e.y = b) : this._subTexturePivots[d] = e = new c.Point(a, b);
                return e
            };
            a.prototype.removeSubTexturePivot = function (a) {
                if (a)delete this._subTexturePivots[a]; else for (a in this._subTexturePivots)delete this._subTexturePivots[a]
            };
            return a
        }();
        a.SkeletonData = z;
        g = function () {
            function a() {
            }

            a.parseTextureAtlasData = function (a, b) {
                "undefined" === typeof b && (b = 1);
                if (!a)throw Error();
                var d = {};
                d.__name = a[f.ConstValues.A_NAME];
                var e = a[f.ConstValues.SUB_TEXTURE], g;
                for (g in e) {
                    var h = e[g], n = h[f.ConstValues.A_NAME], h = new c.Rectangle(Number(h[f.ConstValues.A_X]) / b, Number(h[f.ConstValues.A_Y]) / b, Number(h[f.ConstValues.A_WIDTH]) / b, Number(h[f.ConstValues.A_HEIGHT]) / b);
                    d[n] = h
                }
                return d
            };
            a.parseSkeletonData = function (b) {
                if (!b)throw Error();
                var c = Number(b[f.ConstValues.A_FRAME_RATE]),
                    d = new z;
                d.name = b[f.ConstValues.A_NAME];
                b = b[f.ConstValues.ARMATURE];
                for (var e in b)d.addArmatureData(a.parseArmatureData(b[e], d, c));
                return d
            };
            a.parseArmatureData = function (b, c, d) {
                var e = new u;
                e.name = b[f.ConstValues.A_NAME];
                var g = b[f.ConstValues.BONE], h;
                for (h in g)e.addBoneData(a.parseBoneData(g[h]));
                g = b[f.ConstValues.SKIN];
                for (h in g)e.addSkinData(a.parseSkinData(g[h], c));
                f.DBDataUtil.transformArmatureData(e);
                e.sortBoneDataList();
                b = b[f.ConstValues.ANIMATION];
                for (h in b)e.addAnimationData(a.parseAnimationData(b[h],
                    e, d));
                return e
            };
            a.parseBoneData = function (b) {
                var c = new F;
                c.name = b[f.ConstValues.A_NAME];
                c.parent = b[f.ConstValues.A_PARENT];
                c.length = Number(b[f.ConstValues.A_LENGTH]) || 0;
                var d = Number(b[f.ConstValues.A_SCALE_MODE]);
                !isNaN(d) && d && (c.scaleMode = d);
                if (d = b[f.ConstValues.A_FIXED_ROTATION])c.fixedRotation = d;
                a.parseTransform(b[f.ConstValues.TRANSFORM], c.global);
                c.transform.copy(c.global);
                return c
            };
            a.parseSkinData = function (b, c) {
                var d = new H;
                d.name = b[f.ConstValues.A_NAME];
                var e = b[f.ConstValues.SLOT], g;
                for (g in e)d.addSlotData(a.parseSlotData(e[g],
                    c));
                return d
            };
            a.parseSlotData = function (b, c) {
                var d = new D;
                d.name = b[f.ConstValues.A_NAME];
                d.parent = b[f.ConstValues.A_PARENT];
                d.zOrder = Number(b[f.ConstValues.A_Z_ORDER]);
                d.blendMode = b[f.ConstValues.A_BLENDMODE];
                d.blendMode || (d.blendMode = "normal");
                var e = b[f.ConstValues.DISPLAY], g;
                for (g in e)d.addDisplayData(a.parseDisplayData(e[g], c));
                return d
            };
            a.parseDisplayData = function (b, c) {
                var d = new l;
                d.name = b[f.ConstValues.A_NAME];
                d.type = b[f.ConstValues.A_TYPE];
                d.pivot = c.addSubTexturePivot(0, 0, d.name);
                a.parseTransform(b[f.ConstValues.TRANSFORM],
                    d.transform, d.pivot);
                return d
            };
            a.parseAnimationData = function (b, c, d) {
                var e = new k;
                e.name = b[f.ConstValues.A_NAME];
                e.frameRate = d;
                e.loop = Number(b[f.ConstValues.A_LOOP]) || 0;
                e.fadeInTime = Number(b[f.ConstValues.A_FADE_IN_TIME]);
                e.duration = Number(b[f.ConstValues.A_DURATION]) / d;
                e.scale = Number(b[f.ConstValues.A_SCALE]);
                if (b.hasOwnProperty(f.ConstValues.A_TWEEN_EASING)) {
                    var g = b[f.ConstValues.A_TWEEN_EASING];
                    e.tweenEasing = void 0 == g || null == g ? NaN : Number(g)
                } else e.tweenEasing = NaN;
                a.parseTimeline(b, e, a.parseMainFrame,
                    d);
                var h, g = b[f.ConstValues.TIMELINE], n;
                for (n in g)h = g[n], b = a.parseTransformTimeline(h, e.duration, d), h = h[f.ConstValues.A_NAME], e.addTimeline(b, h);
                f.DBDataUtil.addHideTimeline(e, c);
                f.DBDataUtil.transformAnimationData(e, c);
                return e
            };
            a.parseTimeline = function (a, b, c, d) {
                var e = 0, g;
                a = a[f.ConstValues.FRAME];
                for (var h in a)g = c(a[h], d), g.position = e, b.addFrame(g), e += g.duration;
                g && (g.duration = b.duration - g.position)
            };
            a.parseTransformTimeline = function (b, c, d) {
                var e = new h;
                e.duration = c;
                a.parseTimeline(b, e, a.parseTransformFrame,
                    d);
                e.scale = Number(b[f.ConstValues.A_SCALE]);
                e.offset = Number(b[f.ConstValues.A_OFFSET]);
                return e
            };
            a.parseFrame = function (a, b, c) {
                b.duration = Number(a[f.ConstValues.A_DURATION]) / c;
                b.action = a[f.ConstValues.A_ACTION];
                b.event = a[f.ConstValues.A_EVENT];
                b.sound = a[f.ConstValues.A_SOUND]
            };
            a.parseMainFrame = function (b, c) {
                var e = new d;
                a.parseFrame(b, e, c);
                return e
            };
            a.parseTransformFrame = function (b, d) {
                var g = new e;
                a.parseFrame(b, g, d);
                g.visible = 1 != Number(b[f.ConstValues.A_HIDE]);
                if (b.hasOwnProperty(f.ConstValues.A_TWEEN_EASING)) {
                    var h =
                        b[f.ConstValues.A_TWEEN_EASING];
                    g.tweenEasing = void 0 == h || null == h ? NaN : Number(h)
                } else g.tweenEasing = 0;
                g.tweenRotate = Number(b[f.ConstValues.A_TWEEN_ROTATE]) || 0;
                g.displayIndex = Number(b[f.ConstValues.A_DISPLAY_INDEX]) || 0;
                g.zOrder = Number(b[f.ConstValues.A_Z_ORDER]) || 0;
                a.parseTransform(b[f.ConstValues.TRANSFORM], g.global, g.pivot);
                g.transform.copy(g.global);
                if (h = b[f.ConstValues.COLOR_TRANSFORM])g.color = new c.ColorTransform, g.color.alphaOffset = Number(h[f.ConstValues.A_ALPHA_OFFSET]), g.color.redOffset = Number(h[f.ConstValues.A_RED_OFFSET]),
                    g.color.greenOffset = Number(h[f.ConstValues.A_GREEN_OFFSET]), g.color.blueOffset = Number(h[f.ConstValues.A_BLUE_OFFSET]), g.color.alphaMultiplier = 0.01 * Number(h[f.ConstValues.A_ALPHA_MULTIPLIER]), g.color.redMultiplier = 0.01 * Number(h[f.ConstValues.A_RED_MULTIPLIER]), g.color.greenMultiplier = 0.01 * Number(h[f.ConstValues.A_GREEN_MULTIPLIER]), g.color.blueMultiplier = 0.01 * Number(h[f.ConstValues.A_BLUE_MULTIPLIER]);
                return g
            };
            a.parseTransform = function (a, b, c) {
                "undefined" === typeof c && (c = null);
                a && (b && (b.x = Number(a[f.ConstValues.A_X]),
                    b.y = Number(a[f.ConstValues.A_Y]), b.skewX = Number(a[f.ConstValues.A_SKEW_X]) * f.ConstValues.ANGLE_TO_RADIAN, b.skewY = Number(a[f.ConstValues.A_SKEW_Y]) * f.ConstValues.ANGLE_TO_RADIAN, b.scaleX = Number(a[f.ConstValues.A_SCALE_X]), b.scaleY = Number(a[f.ConstValues.A_SCALE_Y])), c && (c.x = Number(a[f.ConstValues.A_PIVOT_X]), c.y = Number(a[f.ConstValues.A_PIVOT_Y])))
            };
            return a
        }();
        a.DataParser = g
    })(d.objects || (d.objects = {}));
    var e = d.objects;
    (function (a) {
        var c = function (a) {
            function b() {
                a.call(this);
                this._dataDic = {};
                this._textureAtlasDic =
                {};
                this._textureAtlasLoadingDic = {}
            }

            __extends(b, a);
            b.prototype.getSkeletonData = function (a) {
                return this._dataDic[a]
            };
            b.prototype.addSkeletonData = function (a, b) {
                "undefined" === typeof b && (b = null);
                if (!a)throw Error();
                b = b || a.name;
                if (!b)throw Error("Unnamed data!");
                this._dataDic[b] = a
            };
            b.prototype.removeSkeletonData = function (a) {
                delete this._dataDic[a]
            };
            b.prototype.getTextureAtlas = function (a) {
                return this._textureAtlasDic[a]
            };
            b.prototype.addTextureAtlas = function (a, b) {
                "undefined" === typeof b && (b = null);
                if (!a)throw Error();
                b = b || a.name;
                if (!b)throw Error("Unnamed data!");
                this._textureAtlasDic[b] = a
            };
            b.prototype.removeTextureAtlas = function (a) {
                delete this._textureAtlasDic[a]
            };
            b.prototype.dispose = function (a) {
                "undefined" === typeof a && (a = !0);
                if (a) {
                    for (var b in this._dataDic)this._dataDic[b].dispose();
                    for (b in this._textureAtlasDic)this._textureAtlasDic[b].dispose()
                }
                this._currentTextureAtlasName = this._currentDataName = this._textureAtlasLoadingDic = this._textureAtlasDic = this._dataDic = null
            };
            b.prototype.buildArmature = function (a, b, c, f, g) {
                if (c) {
                    var h = this._dataDic[c];
                    if (h)var n = h.getArmatureData(a)
                } else for (c in this._dataDic)if (h = this._dataDic[c], n = h.getArmatureData(a))break;
                if (!n)return null;
                this._currentDataName = c;
                this._currentTextureAtlasName = f || c;
                f = this._generateArmature();
                f.name = a;
                var k, q, l = n.getBoneDataList(), m;
                for (m in l)q = l[m], k = new d.Bone, k.name = q.name, k.fixedRotation = q.fixedRotation, k.scaleMode = q.scaleMode, k.origin.copy(q.transform), n.getBoneData(q.parent) ? f.addChild(k, q.parent) : f.addChild(k, null);
                if (b && b != a) {
                    var p =
                        h.getArmatureData(b);
                    if (!p)for (c in this._dataDic)if (h = this._dataDic[c], p = h.getArmatureData(b))break
                }
                p ? f.animation.setAnimationDataList(p.getAnimationDataList()) : f.animation.setAnimationDataList(n.getAnimationDataList());
                k = n.getSkinData(g);
                if (!k)throw Error();
                a = [];
                c = k.getSlotDataList();
                for (m in c)if (h = c[m], k = f.getBone(h.parent)) {
                    g = h.getDisplayDataList();
                    b = this._generateSlot();
                    b.name = h.name;
                    b._blendMode = h.blendMode;
                    b._originZOrder = h.zOrder;
                    b._dislayDataList = g;
                    a.length = 0;
                    for (h = g.length; h--;)switch (n =
                        g[h], n.type) {
                        case e.DisplayData.ARMATURE:
                            (n = this.buildArmature(n.name, null, this._currentDataName, this._currentTextureAtlasName, null)) && (a[h] = n);
                            break;
                        default:
                            a[h] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], n.name, n.pivot.x, n.pivot.y)
                    }
                    b.setDisplayList(a);
                    b._changeDisplay(0);
                    k.addChild(b)
                }
                f._slotsZOrderChanged = !0;
                f.advanceTime(0);
                return f
            };
            b.prototype.getTextureDisplay = function (a, b, c, d) {
                if (b)var e = this._textureAtlasDic[b];
                if (!e && !b)for (b in this._textureAtlasDic) {
                    e = this._textureAtlasDic[b];
                    if (e.getRegion(a))break;
                    e = null
                }
                if (e) {
                    if (isNaN(c) || isNaN(d))if (b = this._dataDic[b])if (b = b.getSubTexturePivot(a))c = b.x, d = b.y;
                    return this._generateDisplay(e, a, c, d)
                }
                return null
            };
            b.prototype._generateArmature = function () {
                return null
            };
            b.prototype._generateSlot = function () {
                return null
            };
            b.prototype._generateDisplay = function (a, b, c, d) {
                return null
            };
            return b
        }(b.EventDispatcher);
        a.BaseFactory = c
    })(d.factorys || (d.factorys = {}));
    (function (b) {
        var d = function () {
            function a() {
            }

            a.ANGLE_TO_RADIAN = Math.PI / 180;
            a.DRAGON_BONES =
                "dragonBones";
            a.ARMATURE = "armature";
            a.SKIN = "skin";
            a.BONE = "bone";
            a.SLOT = "slot";
            a.DISPLAY = "display";
            a.ANIMATION = "animation";
            a.TIMELINE = "timeline";
            a.FRAME = "frame";
            a.TRANSFORM = "transform";
            a.COLOR_TRANSFORM = "colorTransform";
            a.TEXTURE_ATLAS = "TextureAtlas";
            a.SUB_TEXTURE = "SubTexture";
            a.A_VERSION = "version";
            a.A_IMAGE_PATH = "imagePath";
            a.A_FRAME_RATE = "frameRate";
            a.A_NAME = "name";
            a.A_PARENT = "parent";
            a.A_LENGTH = "length";
            a.A_TYPE = "type";
            a.A_FADE_IN_TIME = "fadeInTime";
            a.A_DURATION = "duration";
            a.A_SCALE = "scale";
            a.A_OFFSET =
                "offset";
            a.A_LOOP = "loop";
            a.A_EVENT = "event";
            a.A_SOUND = "sound";
            a.A_ACTION = "action";
            a.A_HIDE = "hide";
            a.A_TWEEN_EASING = "tweenEasing";
            a.A_TWEEN_ROTATE = "tweenRotate";
            a.A_DISPLAY_INDEX = "displayIndex";
            a.A_Z_ORDER = "z";
            a.A_BLENDMODE = "blendMode";
            a.A_WIDTH = "width";
            a.A_HEIGHT = "height";
            a.A_SCALE_MODE = "scaleMode";
            a.A_FIXED_ROTATION = "fixedRotation";
            a.A_X = "x";
            a.A_Y = "y";
            a.A_SKEW_X = "skX";
            a.A_SKEW_Y = "skY";
            a.A_SCALE_X = "scX";
            a.A_SCALE_Y = "scY";
            a.A_PIVOT_X = "pX";
            a.A_PIVOT_Y = "pY";
            a.A_ALPHA_OFFSET = "aO";
            a.A_RED_OFFSET = "rO";
            a.A_GREEN_OFFSET =
                "gO";
            a.A_BLUE_OFFSET = "bO";
            a.A_ALPHA_MULTIPLIER = "aM";
            a.A_RED_MULTIPLIER = "rM";
            a.A_GREEN_MULTIPLIER = "gM";
            a.A_BLUE_MULTIPLIER = "bM";
            return a
        }();
        b.ConstValues = d;
        var f = function () {
            function a() {
            }

            a.transformPointWithParent = function (b, c) {
                var d = a._helpMatrix;
                a.transformToMatrix(c, d);
                d.invert();
                var e = b.x, f = b.y;
                b.x = d.a * e + d.c * f + d.tx;
                b.y = d.d * f + d.b * e + d.ty;
                b.skewX = a.formatRadian(b.skewX - c.skewX);
                b.skewY = a.formatRadian(b.skewY - c.skewY)
            };
            a.transformToMatrix = function (a, b) {
                b.a = a.scaleX * Math.cos(a.skewY);
                b.b = a.scaleX * Math.sin(a.skewY);
                b.c = -a.scaleY * Math.sin(a.skewX);
                b.d = a.scaleY * Math.cos(a.skewX);
                b.tx = a.x;
                b.ty = a.y
            };
            a.formatRadian = function (b) {
                b %= a.DOUBLE_PI;
                b > Math.PI && (b -= a.DOUBLE_PI);
                b < -Math.PI && (b += a.DOUBLE_PI);
                return b
            };
            a.DOUBLE_PI = 2 * Math.PI;
            a._helpMatrix = new c.Matrix;
            return a
        }();
        b.TransformUtil = f;
        d = function () {
            function b() {
            }

            b.transformArmatureData = function (a) {
                for (var b = a.getBoneDataList(), c = b.length, d, e; c--;)if (d = b[c], d.parent && (e = a.getBoneData(d.parent)))d.transform.copy(d.global), f.transformPointWithParent(d.transform, e.global)
            };
            b.transformArmatureDataAnimations = function (a) {
                for (var c = a.getAnimationDataList(), d = c.length; d--;)b.transformAnimationData(c[d], a)
            };
            b.transformAnimationData = function (a, c) {
                for (var d = c.getSkinData(null), e = c.getBoneDataList(), d = d.getSlotDataList(), g = e.length, h, k, l, m, p, v, w, y, r, J; g--;)if (h = e[g], k = a.getTimeline(h.name)) {
                    l = null;
                    for (var N in d)if (l = d[N], l.parent == h.name)break;
                    m = h.parent ? a.getTimeline(h.parent) : null;
                    p = k.getFrameList();
                    y = w = v = null;
                    J = p.length;
                    for (var E = 0; E < J; E++) {
                        r = p[E];
                        m ? (b._helpTransform1.copy(r.global),
                            b.getTimelineTransform(m, r.position, b._helpTransform2), f.transformPointWithParent(b._helpTransform1, b._helpTransform2), r.transform.copy(b._helpTransform1)) : r.transform.copy(r.global);
                        r.transform.x -= h.transform.x;
                        r.transform.y -= h.transform.y;
                        r.transform.skewX -= h.transform.skewX;
                        r.transform.skewY -= h.transform.skewY;
                        r.transform.scaleX -= h.transform.scaleX;
                        r.transform.scaleY -= h.transform.scaleY;
                        !k.transformed && l && (r.zOrder -= l.zOrder);
                        v || (v = k.originTransform, v.copy(r.transform), v.skewX = f.formatRadian(v.skewX),
                            v.skewY = f.formatRadian(v.skewY), w = k.originPivot, w.x = r.pivot.x, w.y = r.pivot.y);
                        r.transform.x -= v.x;
                        r.transform.y -= v.y;
                        r.transform.skewX = f.formatRadian(r.transform.skewX - v.skewX);
                        r.transform.skewY = f.formatRadian(r.transform.skewY - v.skewY);
                        r.transform.scaleX -= v.scaleX;
                        r.transform.scaleY -= v.scaleY;
                        k.transformed || (r.pivot.x -= w.x, r.pivot.y -= w.y);
                        if (y) {
                            var L = r.transform.skewX - y.transform.skewX;
                            y.tweenRotate ? 0 < y.tweenRotate ? (0 > L && (r.transform.skewX += 2 * Math.PI, r.transform.skewY += 2 * Math.PI), 1 < y.tweenRotate &&
                                (r.transform.skewX += 2 * Math.PI * (y.tweenRotate - 1), r.transform.skewY += 2 * Math.PI * (y.tweenRotate - 1))) : (0 < L && (r.transform.skewX -= 2 * Math.PI, r.transform.skewY -= 2 * Math.PI), 1 > y.tweenRotate && (r.transform.skewX += 2 * Math.PI * (y.tweenRotate + 1), r.transform.skewY += 2 * Math.PI * (y.tweenRotate + 1))) : (r.transform.skewX = y.transform.skewX + f.formatRadian(r.transform.skewX - y.transform.skewX), r.transform.skewY = y.transform.skewY + f.formatRadian(r.transform.skewY - y.transform.skewY))
                        }
                        y = r
                    }
                    k.transformed = !0
                }
            };
            b.getTimelineTransform =
                function (b, c, d) {
                    for (var e = b.getFrameList(), g = e.length, h; g--;)if (b = e[g], b.position <= c && b.position + b.duration > c) {
                        h = b.tweenEasing;
                        g == e.length - 1 || isNaN(h) || c == b.position ? d.copy(b.global) : (c = (c - b.position) / b.duration, h && (c = a.TimelineState.getEaseValue(c, h)), e = e[g + 1], d.x = b.global.x + (e.global.x - b.global.x) * c, d.y = b.global.y + (e.global.y - b.global.y) * c, d.skewX = f.formatRadian(b.global.skewX + (e.global.skewX - b.global.skewX) * c), d.skewY = f.formatRadian(b.global.skewY + (e.global.skewY - b.global.skewY) * c), d.scaleX = b.global.scaleX +
                            (e.global.scaleX - b.global.scaleX) * c, d.scaleY = b.global.scaleY + (e.global.scaleY - b.global.scaleY) * c);
                        break
                    }
                };
            b.addHideTimeline = function (a, b) {
                for (var c = b.getBoneDataList(), d = c.length, f; d--;)f = c[d], f = f.name, a.getTimeline(f) || a.addTimeline(e.TransformTimeline.HIDE_TIMELINE, f)
            };
            b._helpTransform1 = new e.DBTransform;
            b._helpTransform2 = new e.DBTransform;
            return b
        }();
        b.DBDataUtil = d
    })(d.utils || (d.utils = {}));
    var f = d.utils, g = function () {
        function a() {
            this.global = new e.DBTransform;
            this.origin = new e.DBTransform;
            this.offset =
                new e.DBTransform;
            this.tween = new e.DBTransform;
            this.tween.scaleX = this.tween.scaleY = 0;
            this._globalTransformMatrix = new c.Matrix;
            this._visible = !0;
            this._isDisplayOnStage = this._isColorChanged = !1;
            this._scaleType = 0;
            this.fixedRotation = !1
        }

        a.prototype.getVisible = function () {
            return this._visible
        };
        a.prototype.setVisible = function (a) {
            this._visible = a
        };
        a.prototype._setParent = function (a) {
            this.parent = a
        };
        a.prototype._setArmature = function (a) {
            this.armature && this.armature._removeDBObject(this);
            (this.armature = a) && this.armature._addDBObject(this)
        };
        a.prototype.dispose = function () {
            this._globalTransformMatrix = this.tween = this.offset = this.origin = this.global = this.armature = this.parent = null
        };
        a.prototype._update = function () {
            this.global.scaleX = (this.origin.scaleX + this.tween.scaleX) * this.offset.scaleX;
            this.global.scaleY = (this.origin.scaleY + this.tween.scaleY) * this.offset.scaleY;
            if (this.parent) {
                var a = this.origin.x + this.offset.x + this.tween.x, b = this.origin.y + this.offset.y + this.tween.y, c = this.parent._globalTransformMatrix;
                this._globalTransformMatrix.tx = this.global.x =
                    c.a * a + c.c * b + c.tx;
                this._globalTransformMatrix.ty = this.global.y = c.d * b + c.b * a + c.ty;
                this.fixedRotation ? (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY) : (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY);
                this.parent.scaleMode >= this._scaleType && (this.global.scaleX *= this.parent.global.scaleX,
                    this.global.scaleY *= this.parent.global.scaleY)
            } else this._globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this.tween.x, this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y, this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
            this._globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
            this._globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
            this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
            this._globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX)
        };
        return a
    }();
    d.DBObject = g;
    var h = function (a) {
        function b(c) {
            a.call(this);
            this._displayBridge = c;
            this._displayList = [];
            this._displayIndex = -1;
            this._scaleType = 1;
            this._offsetZOrder = this._tweenZorder = this._originZOrder = 0;
            this._isHideDisplay = this._isDisplayOnStage = !1;
            this._blendMode = "normal";
            this._displayBridge.updateBlendMode(this._blendMode)
        }

        __extends(b,
            a);
        b.prototype.getZOrder = function () {
            return this._originZOrder + this._tweenZorder + this._offsetZOrder
        };
        b.prototype.setZOrder = function (a) {
            this.getZOrder() != a && (this._offsetZOrder = a - this._originZOrder - this._tweenZorder, this.armature && (this.armature._slotsZOrderChanged = !0))
        };
        b.prototype.getDisplay = function () {
            var a = this._displayList[this._displayIndex];
            return a instanceof l ? a.getDisplay() : a
        };
        b.prototype.setDisplay = function (a) {
            this._displayList[this._displayIndex] = a;
            this._setDisplay(a)
        };
        b.prototype.getBlendMode =
            function () {
                return this._blendMode
            };
        b.prototype.setBlendMode = function (a) {
            this._blendMode != a && (this._blendMode = a, this._displayBridge.getDisplay() && this._displayBridge.updateBlendMode(this._blendMode))
        };
        b.prototype.getChildArmature = function () {
            var a = this._displayList[this._displayIndex];
            return a instanceof l ? a : null
        };
        b.prototype.setChildArmature = function (a) {
            (this._displayList[this._displayIndex] = a) && this._setDisplay(a.getDisplay())
        };
        b.prototype.getDisplayList = function () {
            return this._displayList
        };
        b.prototype.setDisplayList =
            function (a) {
                if (!a)throw Error();
                for (var b = this._displayList.length = a.length; b--;)this._displayList[b] = a[b];
                0 <= this._displayIndex && (a = this._displayIndex, this._displayIndex = -1, this._changeDisplay(a))
            };
        b.prototype._setDisplay = function (a) {
            this._displayBridge.getDisplay() ? this._displayBridge.setDisplay(a) : (this._displayBridge.setDisplay(a), this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0));
            this.updateChildArmatureAnimation();
            a && this._displayBridge.updateBlendMode(this._blendMode);
            !this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1
        };
        b.prototype._changeDisplay = function (a) {
            if (0 > a)this._isHideDisplay || (this._isHideDisplay = !0, this._displayBridge.removeDisplay(), this.updateChildArmatureAnimation()); else {
                if (this._isHideDisplay) {
                    this._isHideDisplay = !1;
                    var b = !0;
                    this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0)
                }
                var c = this._displayList.length;
                a >= c && 0 < c && (a = c - 1);
                this._displayIndex !=
                a ? (this._displayIndex = a, a = this._displayList[this._displayIndex], a instanceof l ? this._setDisplay(a.getDisplay()) : this._setDisplay(a), this._dislayDataList && this._displayIndex <= this._dislayDataList.length && this.origin.copy(this._dislayDataList[this._displayIndex].transform)) : b && this.updateChildArmatureAnimation()
            }
            !this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1
        };
        b.prototype.setVisible = function (a) {
            a != this._visible && (this._visible = a, this._updateVisible(this._visible))
        };
        b.prototype._setArmature = function (b) {
            a.prototype._setArmature.call(this, b);
            this.armature ? (this.armature._slotsZOrderChanged = !0, this._displayBridge.addDisplay(this.armature.getDisplay(), -1)) : this._displayBridge.removeDisplay()
        };
        b.prototype.dispose = function () {
            this._displayBridge && (a.prototype.dispose.call(this), this._displayBridge.dispose(), this._displayList.length = 0, this._dislayDataList = this._displayList = this._displayBridge = null)
        };
        b.prototype._update = function () {
            a.prototype._update.call(this);
            if (this._isDisplayOnStage) {
                var b =
                    this.parent._tweenPivot.x, c = this.parent._tweenPivot.y;
                if (b || c) {
                    var d = this.parent._globalTransformMatrix;
                    this._globalTransformMatrix.tx += d.a * b + d.c * c;
                    this._globalTransformMatrix.ty += d.b * b + d.d * c
                }
                this._displayBridge.updateTransform(this._globalTransformMatrix, this.global)
            }
        };
        b.prototype._updateVisible = function (a) {
            this._displayBridge.setVisible(this.parent.getVisible() && this._visible && a)
        };
        b.prototype.updateChildArmatureAnimation = function () {
            var a = this.getChildArmature();
            if (a)if (this._isHideDisplay)a.animation.stop(),
                a.animation._lastAnimationState = null; else {
                var b = this.armature ? this.armature.animation.getLastAnimationName() : null;
                b && a.animation.hasAnimation(b) ? a.animation.gotoAndPlay(b) : a.animation.play()
            }
        };
        return b
    }(g);
    d.Slot = h;
    var k = function (a) {
        function d() {
            a.call(this);
            this._children = [];
            this._scaleType = 2;
            this._tweenPivot = new c.Point;
            this.scaleMode = 1
        }

        __extends(d, a);
        d.prototype.setVisible = function (a) {
            if (this._visible != a) {
                this._visible = a;
                for (a = this._children.length; a--;) {
                    var b = this._children[a];
                    b instanceof h &&
                    b._updateVisible(this._visible)
                }
            }
        };
        d.prototype._setArmature = function (b) {
            a.prototype._setArmature.call(this, b);
            for (b = this._children.length; b--;)this._children[b]._setArmature(this.armature)
        };
        d.prototype.dispose = function () {
            if (this._children) {
                a.prototype.dispose.call(this);
                for (var b = this._children.length; b--;)this._children[b].dispose();
                this._children.length = 0;
                this.slot = this._tweenPivot = this._children = null
            }
        };
        d.prototype.contains = function (a) {
            if (!a)throw Error();
            if (a == this)return!1;
            for (; !(a == this || null ==
                a);)a = a.parent;
            return a == this
        };
        d.prototype.addChild = function (a) {
            if (!a)throw Error();
            if (a == this || a instanceof d && a.contains(this))throw Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
            a.parent && a.parent.removeChild(a);
            this._children[this._children.length] = a;
            a._setParent(this);
            a._setArmature(this.armature);
            !this.slot && a instanceof h && (this.slot = a)
        };
        d.prototype.removeChild = function (a) {
            if (!a)throw Error();
            var b = this._children.indexOf(a);
            if (0 <=
                b)this._children.splice(b, 1), a._setParent(null), a._setArmature(null), a == this.slot && (this.slot = null); else throw Error();
        };
        d.prototype.getSlots = function () {
            for (var a = [], b = this._children.length; b--;)this._children[b]instanceof h && a.unshift(this._children[b]);
            return a
        };
        d.prototype._arriveAtFrame = function (a, c, e, f) {
            if (a) {
                c = e.getMixingTransform(name);
                if (e.displayControl && (2 == c || -1 == c))if ((!this.displayController || this.displayController == e.name) && this.slot)c = a.displayIndex, 0 <= c && (!isNaN(a.zOrder) && a.zOrder !=
                    this.slot._tweenZorder) && (this.slot._tweenZorder = a.zOrder, this.armature._slotsZOrderChanged = !0), this.slot._changeDisplay(c), this.slot._updateVisible(a.visible);
                a.event && this.armature.hasEventListener(b.FrameEvent.BONE_FRAME_EVENT) && (c = new b.FrameEvent(b.FrameEvent.BONE_FRAME_EVENT), c.bone = this, c.animationState = e, c.frameLabel = a.event, this.armature._eventList.push(c));
                a.sound && d._soundManager.hasEventListener(b.SoundEvent.SOUND) && (c = new b.SoundEvent(b.SoundEvent.SOUND), c.armature = this.armature, c.animationState =
                    e, c.sound = a.sound, d._soundManager.dispatchEvent(c));
                if (a.action)for (var g in this._children)this._children[g]instanceof h && (e = this._children[g].getChildArmature()) && e.animation.gotoAndPlay(a.action)
            } else this.slot && this.slot._changeDisplay(-1)
        };
        d.prototype._updateColor = function (a, b, c, d, e, f, g, h, k) {
            (k || this._isColorChanged) && this.slot._displayBridge.updateColor(a, b, c, d, e, f, g, h);
            this._isColorChanged = k
        };
        d._soundManager = b.SoundEventManager.getInstance();
        return d
    }(g);
    d.Bone = k;
    var l = function (c) {
        function d(b) {
            c.call(this);
            this.animation = new a.Animation(this);
            this._display = b;
            this._slotsZOrderChanged = !1;
            this._slotList = [];
            this._boneList = [];
            this._eventList = []
        }

        __extends(d, c);
        d.prototype.getDisplay = function () {
            return this._display
        };
        d.prototype.dispose = function () {
            if (this.animation) {
                this.animation.dispose();
                for (var a = this._slotList.length; a--;)this._slotList[a].dispose();
                for (a = this._boneList.length; a--;)this._boneList[a].dispose();
                this._slotList.length = 0;
                this._boneList.length = 0;
                this._eventList.length = 0;
                this.animation = this._display =
                    this._eventList = this._boneList = this._slotList = null
            }
        };
        d.prototype.advanceTime = function (a) {
            this.animation.advanceTime(a);
            a *= this.animation.timeScale;
            for (var c = this._boneList.length; c--;)this._boneList[c]._update();
            for (var c = this._slotList.length, d; c--;)d = this._slotList[c], d._update(), d._isDisplayOnStage && (d = d.getChildArmature()) && d.advanceTime(a);
            this._slotsZOrderChanged && (this.updateSlotsZOrder(), this.hasEventListener(b.ArmatureEvent.Z_ORDER_UPDATED) && this.dispatchEvent(new b.ArmatureEvent(b.ArmatureEvent.Z_ORDER_UPDATED)));
            if (this._eventList.length) {
                a = this._eventList.length;
                for (c = 0; c < a; c++)this.dispatchEvent(this._eventList[c]);
                this._eventList.length = 0
            }
        };
        d.prototype.getSlots = function (a) {
            "undefined" === typeof a && (a = !0);
            return a ? this._slotList.concat() : this._slotList
        };
        d.prototype.getBones = function (a) {
            "undefined" === typeof a && (a = !0);
            return a ? this._boneList.concat() : this._boneList
        };
        d.prototype.getSlot = function (a) {
            for (var b = this._slotList.length; b--;)if (this._slotList[b].name == a)return this._slotList[b];
            return null
        };
        d.prototype.getSlotByDisplay =
            function (a) {
                if (a)for (var b = this._slotList.length; b--;)if (this._slotList[b].getDisplay() == a)return this._slotList[b];
                return null
            };
        d.prototype.removeSlot = function (a) {
            if (!a)throw Error();
            if (0 <= this._slotList.indexOf(a))a.parent.removeChild(a); else throw Error();
        };
        d.prototype.removeSlotByName = function (a) {
            a && (a = this.getSlot(a)) && this.removeSlot(a)
        };
        d.prototype.getBone = function (a) {
            for (var b = this._boneList.length; b--;)if (this._boneList[b].name == a)return this._boneList[b];
            return null
        };
        d.prototype.getBoneByDisplay =
            function (a) {
                return(a = this.getSlotByDisplay(a)) ? a.parent : null
            };
        d.prototype.removeBone = function (a) {
            if (!a)throw Error();
            if (0 <= this._boneList.indexOf(a))a.parent ? a.parent.removeChild(a) : a._setArmature(null); else throw Error();
        };
        d.prototype.removeBoneByName = function (a) {
            a && (a = this.getBone(a)) && this.removeBone(a)
        };
        d.prototype.addChild = function (a, b) {
            if (!a)throw Error();
            if (b) {
                var c = this.getBone(b);
                if (c)c.addChild(a); else throw Error();
            } else a.parent && a.parent.removeChild(a), a._setArmature(this)
        };
        d.prototype.updateSlotsZOrder =
            function () {
                this._slotList.sort(this.sortSlot);
                for (var a = this._slotList.length, b; a--;)b = this._slotList[a], b._isDisplayOnStage && b._displayBridge.addDisplay(this._display, -1);
                this._slotsZOrderChanged = !1
            };
        d.prototype._addDBObject = function (a) {
            a instanceof h ? 0 > this._slotList.indexOf(a) && (this._slotList[this._slotList.length] = a) : a instanceof k && 0 > this._boneList.indexOf(a) && (this._boneList[this._boneList.length] = a, this._sortBoneList())
        };
        d.prototype._removeDBObject = function (a) {
            a instanceof h ? (a = this._slotList.indexOf(a),
                0 <= a && this._slotList.splice(a, 1)) : a instanceof k && (a = this._boneList.indexOf(a), 0 <= a && this._boneList.splice(a, 1))
        };
        d.prototype._sortBoneList = function () {
            var a = this._boneList.length;
            if (0 != a) {
                for (var b = [], c, d, e; a--;) {
                    c = 0;
                    for (e = d = this._boneList[a]; e;)c++, e = e.parent;
                    b[a] = {level: c, bone: d}
                }
                b.sort(this.sortBone);
                for (a = b.length; a--;)this._boneList[a] = b[a].bone
            }
        };
        d.prototype._arriveAtFrame = function (a, c, e, f) {
            a.event && this.hasEventListener(b.FrameEvent.ANIMATION_FRAME_EVENT) && (c = new b.FrameEvent(b.FrameEvent.ANIMATION_FRAME_EVENT),
                c.animationState = e, c.frameLabel = a.event, this._eventList.push(c));
            a.sound && d._soundManager.hasEventListener(b.SoundEvent.SOUND) && (c = new b.SoundEvent(b.SoundEvent.SOUND), c.armature = this, c.animationState = e, c.sound = a.sound, d._soundManager.dispatchEvent(c));
            a.action && e.isPlaying && this.animation.gotoAndPlay(a.action)
        };
        d.prototype.sortSlot = function (a, b) {
            return a.getZOrder() < b.getZOrder() ? 1 : -1
        };
        d.prototype.sortBone = function (a, b) {
            return a.level < b.level ? 1 : -1
        };
        d._soundManager = b.SoundEventManager.getInstance();
        return d
    }(b.EventDispatcher);
    d.Armature = l
})(dragonBones || (dragonBones = {}));
__extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
};
(function (d) {
    (function (b) {
        var a = function () {
            function a() {
            }

            a.prototype.getVisible = function () {
                return this._display ? this._display.visible : !1
            };
            a.prototype.setVisible = function (a) {
                this._display && (this._display.visible = a)
            };
            a.prototype.getDisplay = function () {
                return this._display
            };
            a.prototype.setDisplay = function (a) {
                if (this._display != a) {
                    if (this._display) {
                        var b = this._display.parent;
                        if (b)var c = -1;
                        this.removeDisplay()
                    }
                    this._display = a;
                    this.addDisplay(b, c)
                }
            };
            a.prototype.dispose = function () {
                this._display = null
            };
            a.prototype.updateTransform =
                function (b, c) {
                    this._display.x = b.tx;
                    this._display.y = b.ty;
                    this._display.skewX = c.skewX * a.RADIAN_TO_ANGLE;
                    this._display.skewY = c.skewY * a.RADIAN_TO_ANGLE;
                    this._display.scaleX = c.scaleX;
                    this._display.scaleY = c.scaleY
                };
            a.prototype.updateColor = function (a, b, c, d, e, m, p, n) {
                this._display && (this._display.alpha = e)
            };
            a.prototype.updateBlendMode = function (a) {
                this._display && (this._display.blendMode = ns_egret.BlendMode.getBlendMode(a))
            };
            a.prototype.addDisplay = function (a, b) {
                a && this._display && (this._display.parent && this._display.parent.removeChild(this._display),
                        0 > b ? a.addChild(this._display) : a.addChild(this._display, Math.min(b, a.numChildren)))
            };
            a.prototype.removeDisplay = function () {
                this._display && this._display.parent && this._display.parent.removeChild(this._display)
            };
            a.RADIAN_TO_ANGLE = 180 / Math.PI;
            return a
        }();
        b.DragonBonesEgretBridge = a
    })(d.display || (d.display = {}));
    var c = d.display;
    (function (b) {
        var a = function () {
            function a(b, c, d) {
                "undefined" === typeof d && (d = 1);
                this.texture = b;
                this.scale = d;
                this.parseData(c)
            }

            a.prototype.dispose = function () {
                this.texture = null
            };
            a.prototype.getRegion =
                function (a) {
                    throw Error("error");
                };
            a.prototype.parseData = function (a) {
                this.name = a[d.utils.ConstValues.A_NAME];
                this.spriteSheet = ns_egret.SpriteSheet.parseFromDragonBones(a)
            };
            return a
        }();
        b.EgretTextureAtlas = a
    })(d.textures || (d.textures = {}));
    (function (b) {
        var a = function (a) {
            function b() {
                a.call(this)
            }

            __extends(b, a);
            b.prototype._generateArmature = function () {
                return new d.Armature(new ns_egret.DisplayObjectContainer)
            };
            b.prototype._generateSlot = function () {
                return new d.Slot(new c.DragonBonesEgretBridge)
            };
            b.prototype._generateDisplay =
                function (a, b, c, d) {
                    var e = ns_egret.Bitmap.initWithTexture(a.texture);
                    a = a.spriteSheet.getFrame(b);
                    e.spriteFrame = a;
                    e.setAnchorPoint(c, d);
                    return e
                };
            return b
        }(d.factorys.BaseFactory);
        b.EgretFactory = a
    })(d.factorys || (d.factorys = {}))
})(dragonBones || (dragonBones = {}));
(function (d) {
    var c = function () {
        function b() {
        }

        b.checkDrawImage = function (a, b, c, g, h, k, l, m, p) {
            null == a && d.Logger.fatal("texture\u4e3a\u7a7a");
            (a.getTextureWidth() < b + g || a.getTextureHeight() < c + h) && d.Logger.fatal("\u63d0\u4f9b\u7684\u5c3a\u5bf8\u8d85\u51fatexture\u5c3a\u5bf8")
        };
        b.checkAddEventListener = function (a, b, c, g, h) {
            (null == b || void 0 == b) && d.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a")
        };
        b.checkSetScaleGrid = function (a, b, c, g, h) {
            a || d.Logger.fatal("Scale9Bitmap\u6ca1\u6709\u7eb9\u7406");
            (0 > parseInt(b) || 0 > parseInt(c) || 0 > parseInt(g) || 0 > parseInt(h)) && d.Logger.fatal("\u4f20\u5165\u7684\u503c\u4e0d\u80fd\u4e3a\u8d1f\u6570");
            a.getTextureWidth() < g + h && d.Logger.fatal("\u4f20\u5165\u7684\u5bbd\u5ea6\u8d85\u51fa\u8303\u56f4");
            a.getTextureHeight() < b + c && d.Logger.fatal("\u4f20\u5165\u7684\u9ad8\u5ea6\u8d85\u51fa\u8303\u56f4")
        };
        b.TRACE_RENDER_LOOP = function (a) {
            "undefined" === typeof a && (a = 0);
            var b = d.Ticker.getInstance(), c = d.MainContext.instance;
            switch (a) {
                case 0:
                    b.unregister(c.renderLoop, c);
                    break;
                case 1:
                    c.renderLoop();
                    break;
                case 2:
                    b.register(c.renderLoop, c)
            }
        };
        b.DRAW_IMAGE = !0;
        b.ADD_EVENT_LISTENER = !0;
        b.SCALE_BITMAP_SET_SCALE_GRID = !0;
        return b
    }();
    d.DEBUG = c
})(ns_egret || (ns_egret = {}));
egret_h5 = {prefix: "", loadScript: function (d, c) {
    var b = 0;
    if (-1 < navigator.userAgent.indexOf("Trident/5")) {
        var a = function () {
            egret_h5.loadSingleScript(egret_h5.prefix + d[b], function () {
                b++;
                b >= d.length ? c() : a()
            })
        };
        a()
    } else d.forEach(function (a, f) {
        egret_h5.loadSingleScript(egret_h5.prefix + a, function () {
            b++;
            b >= d.length && c()
        })
    })
}, loadSingleScript: function (d, c) {
    var b = document.createElement("script");
    b.hasOwnProperty("async") && (b.async = !1);
    b.src = d;
    b.addEventListener("load", function () {
        this.removeEventListener("load",
            arguments.callee, !1);
        c()
    }, !1);
    document.body.appendChild(b)
}, startGame: function () {
    var d = document.getElementById(ns_egret.StageDelegate.canvas_name);
    context = ns_egret.MainContext.instance;
    context.rendererContext = new ns_egret.HTML5CanvasRenderer(d);
    context.touchContext = new ns_egret.TouchContext(d);
    context.stage = new ns_egret.Stage;
    ns_egret.ResourceLoader.prefix = "assets/480/";
    ns_egret.RendererContext.CONTENT_SCALE_FACTOR = 1;
    ns_egret.NetContext.context = new ns_egret.HTML5NetContext;
    context.run();
    app && app.startGame &&
    app.startGame()
}, preloadScript: function (d, c) {
    egret_h5.preloadList || (egret_h5.preloadList = []);
    egret_h5.preloadList = egret_h5.preloadList.concat(d.map(function (b) {
        return c + b
    }))
}, startLoading: function () {
    egret_h5.loadScript(egret_h5.preloadList, egret_h5.startGame)
}};
var __extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
}, GameApp = function () {
    function d() {
    }

    d.prototype.startGame = function () {
        MyInfo = new UserInfo;
        MyInfo.statistics("enterGame");
        this.initLoader();
        ns_egret.SoundContext.context = new ns_egret.HTML5SoundContext;
        var c = new ns_egret.EqualToFrame, b = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth : new ns_egret.FixedSize(480, 800), c = new ns_egret.ResolutionPolicy(c,
            b);
        ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, c);
        c = document.getElementById(ns_egret.StageDelegate.canvas_name);
        ns_egret.MainContext.instance.stage.stageWidth = c.width;
        ns_egret.MainContext.instance.stage.stageHeight = c.height;
        ns_egret.NetContext.context = new ns_egret.HTML5NetContext;
        ns_egret.ResourceLoader.prefix = "assets/400/";
        c = new ns_egret.LoadingController;
        c.addResource("ui_egretLogo.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_notice_codename.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_word_get_award.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_word_get_award_2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_word_zaipao.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_word_mi.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_get_award.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_award_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_gift_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_gift_2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_gift_3.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_return_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_reset_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("number.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("number.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("combo_number.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("combo_number.json",
            ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("ui_logo.png?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_chuzhan_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_tanchuang_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_chendi_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_title_fail.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_title_success.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_title_1.png",
            ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_font_score.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_font_best.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("role2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("role2.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("background.jpg?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("wall.jpg?v\x3d3", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("roof.png?v\x3d2",
            ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("bubble.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_anger_bg.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_score_bg.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_progress.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("anger.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("qiao.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("bird.png?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("bird.json?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("death.png?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("death.json?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("maxAnger.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("maxAnger.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("monkey.png?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("monkey.json?v\x3d2", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("monkeyRun.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("monkeyRun2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("monkeyRun.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("horizontalMonster.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("horizontalMonster.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("hit.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("hit.json", ns_egret.ResourceLoader.DATA_TYPE_TEXT);
        c.addResource("lianji.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("chendi_bg.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("jindutiao_1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("jindutiao_2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_lucheng.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_lucheng2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("bananaAnger.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("ui_ninbenzhou.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("duihua-1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("duihua-2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("duihua-3.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("zilaiye.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.addResource("hand.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        Const.HAS_RANK ? (c.addResource("paihang.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE),
            c.addResource("button-qianwangduihuan-1.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("qingliuaia.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("dewanjia.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("nin.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("mi_2.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("gong.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("jisha.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("zhiguai.png",
            ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("zongji.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("fen.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("cent.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE), c.addResource("mingren.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE)) : c.addResource("ui_mingren.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        c.setLoadingView(new LoadingUI);
        c.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.resourceLoadComplete, this);
        c.load()
    };
    d.prototype.initLoader = function () {
        var c = function (b) {
            function a(a) {
                b.call(this, a, ns_egret.ResourceLoader.DATA_TYPE_TEXT)
            }

            __extends(a, b);
            a.prototype.onLoadComplete = function (a) {
                this.data = JSON.parse(a)
            };
            return a
        }(ns_egret.ResourceLoader);
        ns_egret.ResourceLoader.registerHandler("json", c)
    };
    d.prototype.resourceLoadComplete = function () {
        var c = ns_egret.MainContext.instance.stage, b = utils.createBitmap("background.jpg");
        c.addChild(b);
        gameContainer = new ns_egret.DisplayObjectContainer;
        c.addChild(gameContainer);
        topContainer = new ns_egret.DisplayObjectContainer;
        c.addChild(topContainer);
        c = new StateMachine;
        c.changeState(new LoginState);
        this.stateMachine = c
    };
    d.prototype.restartGame = function () {
        !this.stateMachine.state.angerContainer.maxAnger && (!this.role.isGod && this.role.canDeath) && (this.role.hasBuff ? this.role.removeBuff() : (system.hitTest.reset(), this.stateMachine.state.onDeath(), this.role.death(), 999999999 <= MyInfo.score && (MyInfo.statistics("pass100score"), localStorage.setItem("guide", "complete"))))
    };
    return d
}(), Const =
    function () {
        function d() {
        }

        d.ROLE_V_X = 5;
        d.BIRD_V_X = 8;
        d.G = 1;
        d.HORIZON = 200;
        d.JUMP_X = 10;
        d.SHOW_AWARD_TICK = 600;
        d.WALL_WIDTH = 70;
        d.SLIVER_GIFT = 9999999;
        d.GOLD_GIFT = 9999999;
        d.COMBO_CANCEL_TIME = 1500;
        d.CAMERA_SPEED = 10;
        d.COMBO_MAX = 7;
        d.SCORE_MAX = 1E3;
        d.BUILDING_SCORE = 25;
        d.BUILDING_AND_MONKEY_SCORE = 50;
        d.FLYING_SCORE = 30;
        d.VERTICAL_MONKEY_SCORE = 0;
        d.HORIZONTAL_MONKEY_SCORE = 70;
        d.SUPER_VERTICAL_MONKEY_SCORE = 100;
        d.JUMP_MONKEY_SCORE = 400;
        d.HAS_RANK = !0;
        d.GUIDE_STOP_LIST = [1010, 2180, 3400, 4400];
        return d
    }(), utils;
(function (d) {
    d.createBitmap = function (c) {
        var b = new ns_egret.Bitmap;
        c = ns_egret.TextureCache.getInstance().getTexture(c);
        b.texture = c;
        return b
    };
    d.scaleDialog = function (c) {
        c.scaleX = c.scaleY = 0;
        ns_egret.Tween.get(c).to({scaleX: 1, scaleY: 1}, 400, ns_egret.Ease.backOut)
    };
    d.createGift = function () {
        return 99999999 > MyInfo.score ? d.createBitmap("ui_gift_1.png") : 99999999 > MyInfo.score ? d.createBitmap("ui_gift_2.png") : d.createBitmap("ui_gift_3.png")
    };
    d.addHitMC = function (c) {
        var b = ns_egret.ResourceLoader.create("hit.json").data, a = ns_egret.TextureCache.getInstance().getTexture("hit.png"),
            b = new ns_egret.MovieClip(b, a);
        b.gotoAndPlay("run");
        b.setInterval(2);
        b.relativeAnchorPointX = b.relativeAnchorPointY = 0.5;
        c = c.localToGlobal();
        b.x = c.x - 40;
        b.y = c.y - 20;
        ns_egret.MainContext.instance.stage.addChild(b);
        b.addEventListener("playComplete", function () {
            this.stop();
            this.parent.removeChild(this)
        }, b)
    }
})(utils || (utils = {}));
var StateMachine = function () {
    function d() {
    }

    d.prototype.changeState = function (c) {
        if (this.state)this.state.onExit();
        c.onEnter();
        this.state = c
    };
    return d
}(), State = function () {
    function d() {
    }

    d.prototype.onEnter = function () {
    };
    d.prototype.onExit = function () {
    };
    return d
}(), GameState = function (d) {
    function c() {
        d.apply(this, arguments);
        this._tick = 0;
        this._isDeath = !1;
        this.monsterMoveY = this.moveY = 0;
        this._isFirstClick = this._guideBirdAdded = this._guideBuildingAdded = !1;
        this._lastTime = 0
    }

    __extends(c, d);
    c.prototype.onEnter = function () {
        this._tick =
            MyInfo.killNumber = 0;
        var b = ns_egret.MainContext.instance.stage, a = new Background;
        a.create();
        a.add();
        gameContainer.addChild(a.view);
        this.role = new MainRole;
        this.role.create();
        this.role.add();
        gameContainer.addChild(this.role.view);
        app.role = this.role;
        this.allCombo = new Combo;
        topContainer = new ns_egret.DisplayObjectContainer;
        b.addChild(topContainer);
        this.initAnger();
        this.initScore();
        -1 != MyInfo.guideStep ? (this.angerContainer.onGetAnger(), this.angerContainer.onGetAnger(), null == this._guideUI && (this._guideUI =
            new GuideUI, this._guideUI.y = b.stageHeight - 150), b.addChild(this._guideUI), this._guideUI.setText("\u5c0f\u5b50\uff01\u8981\u60f3\u6210\u4e3a\u4e00\u540d\u4f18\u79c0\u7684\u5fcd\u8005\uff0c\u9996\u5148\u8981\u8bad\u7ec3\u7684\u5c31\u662f\u6d1e\u5bdf\u529b\u548c\u53cd\u5e94\u529b\u3002"), this.role.mc.gotoAndStop("run"), b.addEventListener(ns_egret.TouchEvent.TOUCH_TAP, this.guideBeginClick, this)) : ns_egret.Ticker.getInstance().register(this.run, this)
    };
    c.prototype.guideBeginClick = function () {
        var b = ns_egret.MainContext.instance.stage;
        b.removeEventListener(ns_egret.TouchEvent.TOUCH_TAP, this.guideBeginClick, this);
        ns_egret.Ticker.getInstance().register(this.run, this);
        b.removeChild(this._guideUI);
        this.role.mc.gotoAndPlay("run")
    };
    c.prototype.addMonkey = function (b, a) {
        var c = JSON.parse(ns_egret.ResourceLoader.create("monkey.json?v\x3d2").data), d = ns_egret.TextureCache.getInstance().getTexture("monkey.png"), c = new Monkey(c, d), d = c.view.getBounds();
        b < ns_egret.MainContext.instance.stage.stageWidth / 2 ? c.view.x = d.width / 6 : (c.view.x = ns_egret.MainContext.instance.stage.stageWidth -
            d.width / 6, c.view.scaleX = -1);
        c.view.y = a - d.height / 2.5;
        c.add()
    };
    c.prototype.initAnger = function () {
        var b = ns_egret.MainContext.instance.stage;
        this.angerContainer = new AngerContainer;
        topContainer.addChild(this.angerContainer);
        this.angerContainer.y = b.stageHeight - 100
    };
    c.prototype.initScore = function () {
        var b = utils.createBitmap("ui_score_bg.png"), a = utils.createBitmap("ui_lucheng.png");
        b.x = 100;
        b.y = 65;
        a.x = 95;
        a.y = 63;
        topContainer.addChild(b);
        topContainer.addChild(a);
        this.currentScoreFont = new UIFont(MyInfo.score);
        this.currentScoreFont.scaleX = this.currentScoreFont.scaleY = 0.4;
        this.currentScoreFont.x = b.x;
        this.currentScoreFont.y = b.y + 15;
        topContainer.addChild(this.currentScoreFont);
        this.progress = new ns_egret.ProgressBar("ui_lucheng2.png");
        this.progress.x = b.x + 58;
        this.progress.y = b.y + 20;
        this.progress.setProgress(0, 100);
        topContainer.addChild(this.progress);
        a = utils.createBitmap("ui_gift_1.png");
        a.scaleX = a.scaleY = 0.2;
        a.x = b.x + 55;
        a.y = b.y + -15;
        topContainer.addChild(a);
        a = new UIFont(100);
        a.scaleX = a.scaleY = 0.25;
        a.x = b.x + 60;
        a.y =
            b.y + 30;
        topContainer.addChild(a);
        a = utils.createBitmap("ui_gift_2.png");
        a.scaleX = a.scaleY = 0.2;
        a.x = b.x + 115;
        a.y = b.y + -15;
        topContainer.addChild(a);
        a = new UIFont(300);
        a.scaleX = a.scaleY = 0.25;
        a.x = b.x + 120;
        a.y = b.y + 30;
        topContainer.addChild(a);
        a = utils.createBitmap("ui_gift_3.png");
        a.scaleX = a.scaleY = 0.2;
        a.x = b.x + 240;
        a.y = b.y + -15;
        topContainer.addChild(a);
        a = new UIFont(1E3, 4);
        a.scaleX = a.scaleY = 0.25;
        a.x = b.x + 240;
        a.y = b.y + 30;
        topContainer.addChild(a)
    };
    c.prototype.onGetAnger = function () {
        this.angerContainer.onGetAnger()
    };
    c.prototype.onGetBanana =
        function () {
            this.angerContainer.onGetBanana()
        };
    c.prototype.onCombo = function () {
        this.allCombo.onCombo()
    };
    c.prototype.resetCombo = function () {
        this.allCombo.resetCombo()
    };
    c.prototype.run = function (b) {
        this.allCombo.addCombotime(b);
        this.allCombo.getComboTime() >= Const.COMBO_CANCEL_TIME && this.allCombo.comboReset();
        for (this._lastTime += b; this._lastTime > 1E3 / 60;) {
            this._lastTime -= 1E3 / 60;
            system.render.run();
            if (this._isDeath)system.render.onCameraMove(-Const.CAMERA_SPEED); else if (b = Const.CAMERA_SPEED, b = Const.CAMERA_SPEED +
                Math.floor(this.moveY / 2E4), 15 < b && (b = 15), app.role.isGod && (b *= 2), system.render.onCameraMove(b), this.moveY += b, this.monsterMoveY += 10, this.addMonster(), -1 != MyInfo.guideStep) {
                b = ns_egret.MainContext.instance.stage;
                var a = Const.GUIDE_STOP_LIST[MyInfo.guideStep - 1], a = a - (800 - b.stageHeight);
                this.moveY >= a && (ns_egret.Ticker.getInstance().unregister(app.stateMachine.state.run, app.stateMachine.state), ns_egret.MainContext.instance.stage.addEventListener(ns_egret.TouchEvent.TOUCH_TAP, this.guideJump, this), this.role.mc.gotoAndStop("run"),
                    b.addChild(this._guideUI), this._isFirstClick = !0, 1 == MyInfo.guideStep ? this._guideUI.setText("\u6ce8\u610f\uff01\u649e\u5230\u5c4b\u6a90\u4f1a\u6389\u4e0b\u6765\u3002\u9700\u8981\u70b9\u51fb\u5c4f\u5e55\u8df3\u8dc3\u6765\u8eb2\u907f\u5c4b\u6a90\u3002") : 2 == MyInfo.guideStep ? this._guideUI.setText("\u7334\u5b50\u53ef\u662f\u4e2a\u8ba8\u538c\u7684\u5bb6\u4f19\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u53bb\u51fb\u6740\u4ed6\u4eec\u3002") : 3 == MyInfo.guideStep ? this._guideUI.setText("\u51fb\u6740\u98de\u602a\u53ef\u4ee5\u5f97\u5230\u52fe\u7389\uff0c\u6512\u591f\u8db3\u591f\u7684\u52fe\u7389\u53ef\u4ee5\u91ca\u653e\u5965\u4e49\u3002") :
                    4 == MyInfo.guideStep && (this._guideUI.setText("\u597d\u4e86\uff0c\u57fa\u672c\u6559\u5b66\u5c31\u5230\u8fd9\u91cc\u4e86\uff0c\u63a5\u4e0b\u6765\u5c31\u770b\u4f60\u7684\u4e86\u3002"), this._isFirstClick = !1))
            }
            this._tick++;
            MyInfo.score >= Const.SCORE_MAX && (Const.HAS_RANK && MyInfo.score ? (app.stateMachine.changeState(new InputState), app.stateMachine.state.onAdd()) : app.stateMachine.changeState(new ResultState))
        }
        this._isDeath || MyInfo.setScore(this._tick / 20);
        this.currentScoreFont.updateText(MyInfo.score);
        this.progress.setProgress(MyInfo.score,
            Const.SCORE_MAX)
    };
    c.prototype.guideJump = function () {
        var b = ns_egret.MainContext.instance.stage;
        this._isFirstClick ? (this._isFirstClick = !1, ns_egret.MainContext.instance.stage.removeChild(this._guideUI), null == this._hand && (this._hand = utils.createBitmap("hand.png"), this._hand.x = 200, this._hand.y = b.stageHeight - 270), ns_egret.Tween.get(this._hand, {loop: !0}).to({scaleX: 0.7, scaleY: 0.7}, 600).to({scaleX: 1, scaleY: 1}, 600), b.addChild(this._hand)) : (this._hand.scaleX = this._hand.scaleY = 1, ns_egret.Tween.removeTweens(this._hand),
            this._hand.isRunning() ? b.removeChild(this._hand) : this._guideUI.isRunning() && ns_egret.MainContext.instance.stage.removeChild(this._guideUI), b.removeEventListener(ns_egret.TouchEvent.TOUCH_TAP, this.guideJump, this), MyInfo.setGuideStep(MyInfo.guideStep + 1), ns_egret.Ticker.getInstance().register(this.run, this), -1 != MyInfo.guideStep ? this.role.jump() : this.role.mc.gotoAndPlay("run"))
    };
    c.prototype.addMonster = function () {
        if (1 == MyInfo.guideStep && !this._guideBuildingAdded) {
            this._guideBuildingAdded = !0;
            var b = new Building("roof.png"),
                a = b.view.getBounds();
            b.view.scaleX = -0.7;
            b.view.scaleY = 0.7;
            b.view.x = 0.7 * a.width;
            b.view.y = -150;
            b.add()
        } else if (3 == MyInfo.guideStep && !this._guideBirdAdded)this._guideBirdAdded = !0, b = JSON.parse(ns_egret.ResourceLoader.create("bird.json?v\x3d2").data), a = ns_egret.TextureCache.getInstance().getTexture("bird.png"), b = new Bird(b, a), b.view.x = -100, b.view.y = -300, b.add(); else {
            var b;
            0 == this.monsterMoveY % 1500 && MyInfo.score >= Const.BUILDING_SCORE && (b = new Building("roof.png"), a = b.view.getBounds(), 0.5 > Math.random() ? (b.view.scaleX =
                0.7, b.view.scaleY = 0.7, b.view.x = ns_egret.MainContext.instance.stage.stageWidth - 0.7 * a.width) : (b.view.scaleX = -0.7, b.view.scaleY = 0.7, b.view.x = 0.7 * a.width), b.view.y = -150, b.add(), 0.5 < Math.random() && MyInfo.score >= Const.BUILDING_AND_MONKEY_SCORE && this.addMonkey(b.view.x, b.view.y));
            0 == this.monsterMoveY % 3200 && MyInfo.score >= Const.FLYING_SCORE && (b = JSON.parse(ns_egret.ResourceLoader.create("bird.json?v\x3d2").data), a = ns_egret.TextureCache.getInstance().getTexture("bird.png"), b = new Bird(b, a), b.view.x = -100, b.view.y = -300, b.add());
            0 == this.monsterMoveY % 15E3 && (b = new Bubble, b.view.x = 150 * Math.random() + 100, b.view.y = -300, b.add());
            var c, a = 1400;
            300 < MyInfo.score && (a = 1100 - Math.floor(MyInfo.score / Const.CAMERA_SPEED) * Const.CAMERA_SPEED);
            0 == this.monsterMoveY % a && (c = [], MyInfo.score >= Const.VERTICAL_MONKEY_SCORE && c.push("vertical"), MyInfo.score >= Const.SUPER_VERTICAL_MONKEY_SCORE && c.push("super"), MyInfo.score >= Const.HORIZONTAL_MONKEY_SCORE && c.push("horizontal"), MyInfo.score >= Const.JUMP_MONKEY_SCORE && c.push("jumpMonster"));
            c && 0 !=
                c.length && (c = c[Math.floor(Math.random() * c.length)], "vertical" == c ? (b = ns_egret.ResourceLoader.create("monkeyRun.json").data, a = ns_egret.TextureCache.getInstance().getTexture("monkeyRun.png"), b = new Monster(b, a)) : "super" == c ? (b = ns_egret.ResourceLoader.create("monkeyRun.json").data, a = ns_egret.TextureCache.getInstance().getTexture("monkeyRun2.png"), b = new SuperMonster(b, a)) : "jumpMonster" == c ? (b = ns_egret.ResourceLoader.create("monkeyRun.json").data, a = ns_egret.TextureCache.getInstance().getTexture("monkeyRun.png"),
                b = new JumpMonster(b, a)) : "horizontal" == c ? (b = ns_egret.ResourceLoader.create("horizontalMonster.json").data, a = ns_egret.TextureCache.getInstance().getTexture("horizontalMonster.png"), b = new HorizontalMonster(b, a), c = new Bridge, c.view.y = -275, c.add()) : "flying" == c && (b = ns_egret.ResourceLoader.create("bird.json").data, a = ns_egret.TextureCache.getInstance().getTexture("bird.png"), b = new Bird(b, a), b.view.x = -100), b && (b.view.y = -300, b.add()))
        }
    };
    c.prototype.onDeath = function () {
        this._isDeath = !0
    };
    c.prototype.onExit = function () {
        ns_egret.Ticker.getInstance().unregister(this.run,
            this);
        system.render.reset();
        system.hitTest.reset();
        this.role.view.visible = !1;
        gameContainer.removeAllChildren();
        topContainer.removeAllChildren()
    };
    return c
}(State), LoginState = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c, d);
    c.prototype.onEnter = function () {
        var b = new LoginUI;
        BoxManager.getInstance().addBox(b);
        this.login = b
    };
    c.prototype.onExit = function () {
        BoxManager.getInstance().removeBox(this.login)
    };
    return c
}(State), InputState = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c,
        d);
    c.prototype.onEnter = function () {
        var b = new NameInputUI;
        BoxManager.getInstance().addBox(b);
        b.y = 40 + (ns_egret.MainContext.instance.stage.stageHeight - 550 >> 1);
        this.input = b
    };
    c.prototype.onAdd = function () {
        this.input.add(MyInfo.score, MyInfo.killNumber)
    };
    c.prototype.onExit = function () {
        BoxManager.getInstance().removeBox(this.input)
    };
    return c
}(State), ResultState = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c, d);
    c.prototype.onEnter = function () {
        this.current = new FailUI;
        BoxManager.getInstance().addBox(this.current)
    };
    c.prototype.onExit = function () {
        this.current.parent && BoxManager.getInstance().removeBox(this.current);
        BoxManager.getInstance().clearAllBox()
    };
    return c
}(State), app = new GameApp, UserInfo = function () {
    function d() {
        this.killNumber = this.bestScore = this.score = this.currentWeek = 0;
        this.serverAddress = "http://ninjaup.egret-labs.org/api.php";
        this.secret = "#kjutg98@aa";
        this._statisticsList = [];
        this.guideStep = -1;
        null == localStorage.getItem("guide") && (this.guideStep =
            1)
    }

    d.prototype.setGuideStep = function (c) {
        this.guideStep = c;
        c > Const.GUIDE_STOP_LIST.length && (this.guideStep = -1)
    };
    d.prototype.setScore = function (c) {
        this.score = Math.floor(c);
        this.score > this.bestScore && (this.bestScore = this.score)
    };
    d.prototype.addKill = function () {
        this.killNumber++
    };
    d.prototype.statistics = function (c) {
        -1 == this._statisticsList.indexOf(c) && (this._statisticsList.push(c), c = "http://ninjaup.egret-labs.org/statistics.php?gId\x3dninja_up\x26act\x3d" + c + "\x26sign\x3d" + hex_md5("ninja_up" + c + this.secret),
            c = new ns_egret.URLRequest(c, function () {
            }, this), ns_egret.NetContext.getInstance().send(c))
    };
    return d
}(), Combo = function (d) {
    function c() {
        this.initCombo();
        this.comboTime = this.combo = 0;
        this.initComboProgress();
        this.role = app.role
    }

    __extends(c, d);
    c.prototype.initCombo = function () {
        this.comboContainer = new ns_egret.DisplayObjectContainer;
        gameContainer.addChild(this.comboContainer);
        var b = utils.createBitmap("lianji.png"), a = utils.createBitmap("chendi_bg.png");
        b.y = a.getBounds().height / 4;
        this.comboContainer.addChild(a);
        this.comboContainer.addChild(b);
        this.combo = 0;
        this.comboFont = new ComboFont(this.combo);
        this.comboContainer.addChild(this.comboFont);
        this.comboFont.x = 2 * a.getBounds().width / 5;
        this.comboFont.y = a.getBounds().height / 4;
        this.comboFont.scaleX = 0.8;
        this.comboFont.scaleY = 0.8;
        this.comboContainer.visible = !1;
        this.comboContainer.x = 0;
        this.comboContainer.y = 110
    };
    c.prototype.initComboProgress = function () {
        this.comboProgressContainer = new ns_egret.DisplayObjectContainer;
        this.comboProgressBar = new ns_egret.ProgressBar("jindutiao_2.png",
            "jindutiao_1.png");
        this.comboProgressBar.setProgress(this.combo, Const.COMBO_MAX);
        this.comboProgressContainer.addChild(this.comboProgressBar);
        gameContainer.addChild(this.comboProgressContainer);
        this.comboProgressContainer.y = this.comboContainer.y + 3 * this.comboContainer.getBounds().height / 4;
        this.comboProgressContainer.x = -this.comboProgressContainer.getBounds().width
    };
    c.prototype.onCombo = function () {
        if (!this.role._isDead && !this.role.isGod) {
            this.comboTime = 0;
            this.combo += 1;
            if (1 < this.combo) {
                var b = this.comboContainer.getBounds().width;
                this.comboFont.updateText(this.combo);
                10 > this.comboFont.getValue() ? this.comboFont.x = 2 * b / 5 : this.comboFont.x = b / 5;
                this.comboContainer.visible = !0;
                2 < this.combo && (ns_egret.Tween.removeTweens(this.comboContainer), ns_egret.Tween.get(this.comboContainer).to({scaleX: 1.2, scaleY: 1.2}, 100).to({scaleX: 1, scaleY: 1}, 100));
                ns_egret.Tween.removeTweens(this.comboProgressContainer);
                ns_egret.Tween.get(this.comboProgressContainer).to({x: 0}, 300);
                ns_egret.Tween.removeTweens(this.comboProgressBar);
                ns_egret.Tween.get(this.comboProgressBar).to({percentage: 100 *
                    this.combo / Const.COMBO_MAX}, 300)
            }
            this.combo == Const.COMBO_MAX && (this.role.beGod(), this.combo = 0, ns_egret.Tween.removeTweens(this.comboProgressBar), ns_egret.Tween.get(this.comboProgressBar).to({percentage: 100}, 1E3))
        }
    };
    c.prototype.resetCombo = function () {
        this.comboContainer.visible = !1;
        this.comboProgressContainer.visible = !1;
        this.combo -= 1
    };
    c.prototype.addCombotime = function (b) {
        this.comboTime += b
    };
    c.prototype.comboReset = function () {
        this.combo = this.comboTime = 0;
        this.comboContainer.visible = !1;
        ns_egret.Tween.get(this.comboProgressContainer).to({x: -this.comboProgressContainer.getBounds().width},
            300);
        ns_egret.Tween.get(this.comboProgressBar).to({percentage: 100 * this.combo / Const.COMBO_MAX}, 300)
    };
    c.prototype.getComboTime = function () {
        return this.comboTime
    };
    return c
}(ns_egret.DisplayObjectContainer);
var __extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
}, GameObject = function () {
    function d() {
    }

    d.prototype.run = function () {
    };
    d.prototype.create = function () {
    };
    d.prototype.getHitBounds = function () {
        return ns_egret.DisplayObject.getTransformBounds(this.view.getBounds(), this.view.worldTransform)
    };
    d.prototype.add = function () {
        system.render.add(this)
    };
    d.prototype.remove = function () {
        this._isDead = !0;
        app.stateMachine.state.onCombo()
    };
    d.prototype.onCameraMove = function (c) {
    };
    d.prototype.checkAdd = function () {
        -200 < this.view.y && null == this.view.parent ? (gameContainer.addChild(this.view), system.hitTest.addHitList(this)) : null != this.view.parent && this.view.y > ns_egret.MainContext.instance.stage.stageHeight + 200 && (this.view.visible = !1, system.hitTest.removeHitList(this))
    };
    return d
}(), MainRole = function (d) {
    function c() {
        d.apply(this, arguments);
        this._vy = this._vx = 0;
        this.canDeath = !0;
        this.isBack = this.godJumping = this.isGod = this.hasBuff = !1
    }

    __extends(c,
        d);
    c.prototype.create = function () {
        this.container = new ns_egret.DisplayObjectContainer;
        var b = ns_egret.ResourceLoader.create("role2.json").data, a = ns_egret.TextureCache.getInstance().getTexture("role2.png");
        this.mc = new ns_egret.MovieClip(b, a);
        this.mc.relativeAnchorPointX = this.mc.relativeAnchorPointY = 0.5;
        this.mc.setInterval(6);
        this.container.addChild(this.mc);
        this.view = this.container;
        this.view.y = ns_egret.MainContext.instance.stage.stageHeight - Const.HORIZON;
        this.view.x = Const.WALL_WIDTH;
        this.changeAction("run");
        ns_egret.Ticker.getInstance().callLater(this.addEvent, this)
    };
    c.prototype.addEvent = function () {
        ns_egret.MainContext.instance.stage.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, this.onTouch, this)
    };
    c.prototype.onTouch = function () {
        this.isGod || -1 != MyInfo.guideStep || this.jump()
    };
    c.prototype.run = function () {
        if (!this._isDead) {
            for (var b = system.hitTest.hitTest(this), a = 0; a < b.length; a++)b[a].remove();
            this.move()
        }
    };
    c.prototype.beGod = function () {
        !0 != this.isGod && (this.isGod = !0, this._vx = 0, ns_egret.Tween.get(this.view).to({x: Const.WALL_WIDTH},
            100).call(this.godJump, this))
    };
    c.prototype.beNormal = function () {
        this._vx = this._vy = 0;
        this.isBack = !0;
        ns_egret.Tween.get(this.view).to({x: Const.WALL_WIDTH, y: ns_egret.MainContext.instance.stage.stageHeight - Const.HORIZON}, 1E3).call(this.lateBeNormal, this)
    };
    c.prototype.lateBeNormal = function () {
        this.changeAction("run");
        this.isBack = this.godJumping = !1;
        this.view.scaleX = 1;
        this.canDeath = this.isGod = !1;
        ns_egret.Ticker.getInstance().callLater(this.notbegod, this, 1E3)
    };
    c.prototype.notbegod = function () {
        this.canDeath = !0
    };
    c.prototype.godJump = function () {
        this._vx = Const.JUMP_X;
        this.godJumping = !0;
        this.changeAction("jump")
    };
    c.prototype.move = function () {
        if (this.godJumping)this.isBack || (150 > this.view.y && this.beNormal(), this.view.x += this._vx, this.view.x < Const.WALL_WIDTH ? (this._vx = Const.JUMP_X, this._vy = 0) : this.view.x > ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this._vx = -Const.JUMP_X, this._vy = 0), this.view.y += this._vy, this._vy -= 0.1); else {
            this.view.x += this._vx;
            this.view.x < Const.WALL_WIDTH ? (this.view.x =
                Const.WALL_WIDTH, this._vx = 0, this.view.scaleX = 1, this.changeAction("run")) : this.view.x > ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this.view.x = ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH, this._vx = 0, this.view.scaleX = -1, this.changeAction("run"));
            var b;
            b = this.view.x < ns_egret.MainContext.instance.stage.stageWidth / 2 ? this.view.x - Const.WALL_WIDTH : Math.abs(this.view.x - ns_egret.MainContext.instance.stage.stageWidth + Const.WALL_WIDTH);
            this.view.y = ns_egret.MainContext.instance.stage.stageHeight -
                Const.HORIZON - b / 3
        }
    };
    c.prototype.jump = function () {
        this.view.x == Const.WALL_WIDTH ? (this._vx = Const.JUMP_X, this.changeAction("jump")) : this.view.x == ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this._vx = -Const.JUMP_X, this.changeAction("jump"))
    };
    c.prototype.stop = function () {
    };
    c.prototype.death = function () {
        app.stateMachine.state.resetCombo();
        this.changeAction("death");
        this._isDead = !0;
        this._vx = 0;
        var b = ns_egret.MainContext.instance.stage;
        b.removeEventListener(ns_egret.TouchEvent.TOUCH_BEGAN,
            this.onTouch, this);
        ns_egret.Tween.get(this.view).to({x: b.stageWidth / 2, y: 8 * b.stageHeight / 10}, 600);
        var b = JSON.parse(ns_egret.ResourceLoader.create("death.json?v\x3d2").data), a = ns_egret.TextureCache.getInstance().getTexture("death.png"), b = new ns_egret.MovieClip(b, a), a = this.view.localToGlobal();
        b.x = a.x;
        b.y = a.y;
        b.relativeAnchorPointX = b.relativeAnchorPointY = 0.5;
        gameContainer.addChild(b);
        b.gotoAndPlay("run");
        b.addEventListener("playComplete", function () {
            this.stop();
            this.parent.removeChild(this)
        }, b);
        ns_egret.Ticker.getInstance().callLater(function () {
            Const.HAS_RANK &&
            MyInfo.score ? (app.stateMachine.changeState(new InputState), app.stateMachine.state.onAdd()) : app.stateMachine.changeState(new ResultState)
        }, this, 1500)
    };
    c.prototype.remove = function () {
    };
    c.prototype.changeAction = function (b) {
        this._isDead || ("run" == b ? this.view.setContentSize(110, 80) : "jump" == b && this.view.setContentSize(150, 80), this.mc.gotoAndPlay(b))
    };
    c.prototype.getHitBounds = function () {
        return 0 < this._vx ? ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx - this.view._contentWidth * this.mc.relativeAnchorPointX,
                this.view.worldTransform.ty - this.view._contentHeight * this.mc.relativeAnchorPointY, this.view._contentWidth, this.view._contentHeight + 10) : ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx - this.view._contentWidth * this.mc.relativeAnchorPointX, this.view.worldTransform.ty - this.view._contentHeight * this.mc.relativeAnchorPointY, this.view._contentWidth, this.view._contentHeight)
    };
    c.prototype.addBuff = function () {
        this.hasBuff = !0;
        null == this.bubble && (this.bubble = utils.createBitmap("bubble.png"), this.bubble.scaleX =
            this.bubble.scaleY = 0.5, this.bubble.relativeAnchorPointX = this.bubble.relativeAnchorPointY = 0.5);
        this.bubble.parent || this.container.addChild(this.bubble)
    };
    c.prototype.removeBuff = function () {
        this.hasBuff = !1;
        this.container.removeChild(this.bubble)
    };
    return c
}(GameObject), Bubble = function (d) {
    function c() {
        var b = utils.createBitmap("bubble.png");
        b.scaleX = b.scaleY = 0.5;
        this.view = b
    }

    __extends(c, d);
    c.prototype.onCameraMove = function (b) {
        this.view.y += b;
        this.checkAdd()
    };
    c.prototype.remove = function () {
        system.hitTest.removeHitList(this);
        this.view.visible = !1;
        app.role.addBuff()
    };
    return c
}(GameObject), Background = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c, d);
    c.prototype.create = function () {
        var b = new ns_egret.DisplayObjectContainer, a = new ns_egret.DisplayObjectContainer;
        b.addChild(a);
        for (var c = -3; 228 > c; c++) {
            var d = utils.createBitmap("wall.jpg"), g = d.getBounds();
            d.x = ns_egret.MainContext.instance.stage.stageWidth - g.width + 20;
            d.y = -c * d.getBounds().height;
            a.addChild(d);
            d = utils.createBitmap("wall.jpg");
            d.x = g.width - 20;
            d.y = -c * g.height;
            d.scaleX = -1;
            a.addChild(d)
        }
        this.view = b;
        this.wall = a
    };
    c.prototype.onCameraMove = function (b) {
        this.wall.y += 2 * b / 5
    };
    c.prototype.run = function () {
    };
    return c
}(GameObject), Building = function (d) {
    function c(b) {
        this.view = utils.createBitmap(b)
    }

    __extends(c, d);
    c.prototype.onCameraMove = function (b) {
        this.view.y += 2 * b / 5;
        this.checkAdd()
    };
    c.prototype.remove = function () {
        0 == app.role._vx && (system.hitTest.removeHitList(this), app.restartGame())
    };
    c.prototype.getHitBounds = function () {
        return 0 < this.view.scaleX ? ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx +
            40, this.view.worldTransform.ty + 30, 70, 10) : ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx - 110, this.view.worldTransform.ty + 30, 70, 10)
    };
    return c
}(GameObject), Monster = function (d) {
    function c(b, a) {
        c.addNumber++;
        var d = new ns_egret.MovieClip(b, a);
        d.gotoAndPlay("run");
        d.setInterval(5);
        d.relativeAnchorPointY = 0.5;
        this._mc = this.view = d;
        -1 != MyInfo.guideStep && 1 == c.addNumber ? this.setLeft() : 0.5 > Math.random() ? this.setRight() : this.setLeft()
    }

    __extends(c, d);
    c.prototype.setLeft = function () {
        this._mc.x =
            Const.WALL_WIDTH;
        this._mc.scaleX = 0.5;
        this._mc.scaleY = 0.5;
        this._mc.rotation = 90
    };
    c.prototype.setRight = function () {
        this._mc.x = ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH;
        this._mc.scaleX = -0.5;
        this._mc.scaleY = 0.5;
        this._mc.rotation = 270
    };
    c.prototype.onCameraMove = function (b) {
        this.view.y += 4 * b / 5;
        this.checkAdd()
    };
    c.prototype.getHitBounds = function () {
        return 90 == this.view.rotation ? ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx - 60, this.view.worldTransform.ty + 10, 50, 50) : ns_egret.Rectangle.identity.initialize(this.view.worldTransform.tx,
            this.view.worldTransform.ty, 50, 50)
    };
    c.prototype.remove = function () {
        d.prototype.remove.call(this);
        system.hitTest.removeHitList(this);
        0 != app.role._vx ? (this.view.visible = !1, MyInfo.addKill(), utils.addHitMC(this.view)) : (this.view.visible = !1, app.restartGame())
    };
    c.addNumber = 0;
    return c
}(GameObject), SuperMonster = function (d) {
    function c() {
        d.apply(this, arguments);
        this._isUp = !1
    }

    __extends(c, d);
    c.prototype.onCameraMove = function (b) {
        this._isUp ? this.view.y -= 1.1 * b : (this.view.y += 0.8 * b, this.view.y > ns_egret.MainContext.instance.stage.stageHeight +
            150 && (this._isUp = !0, this.view.scaleX *= -1));
        this.checkAdd()
    };
    return c
}(Monster), JumpMonster = function (d) {
    function c(b, a) {
        d.call(this, b, a);
        this.vy = this.vx = 0;
        this.jumpedOver = this.jumped = !1;
        this.jumpHigh = 150;
        this.isStand = !1;
        this._mc.scaleX *= 0.8;
        this._mc.scaleY *= 0.8
    }

    __extends(c, d);
    c.prototype.jump = function () {
        this.jumped = !0;
        this.vy = this.tempVy;
        this.view.x == Const.WALL_WIDTH ? (this.vx = Const.JUMP_X, this.view.rotation = 0, this._mc.gotoAndPlay("jump")) : this.view.x == ns_egret.MainContext.instance.stage.stageWidth -
            Const.WALL_WIDTH && (this.vx = -Const.JUMP_X, this.view.rotation = 0, this._mc.gotoAndPlay("jump"))
    };
    c.prototype.stand = function () {
        this.isStand = !0;
        this.tempVy = this.vy;
        this.vy = 0;
        ns_egret.Ticker.getInstance().callLater(this.jump, this, 500)
    };
    c.prototype.run = function () {
        this.view.x += this.vx
    };
    c.prototype.onCameraMove = function (b) {
        this.isStand || (this.vy = 2 * b / 3);
        this.view.y += this.vy;
        this.checkAdd();
        if (!this.jumped || !this.jumpedOver)this.view.y > this.jumpHigh && (this.isStand ? this.jumped && this.jumpOver() : this.stand())
    };
    c.prototype.jumpOver = function () {
        !(this.view.x != Const.WALL_WIDTH && this.view.x != ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH) && !this.jumpedOver && (this.vx = 0, this._mc.gotoAndPlay("run"), this.view.scaleX = -this.view.scaleX, this.view.x == Const.WALL_WIDTH ? (this._mc.rotation = 90, this.jumpedOver = !0) : this.view.x == ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this._mc.rotation = 270, this.jumpedOver = !0))
    };
    return c
}(Monster), HorizontalMonster = function (d) {
    function c(b, a) {
        this.mc =
            new ns_egret.MovieClip(b, a);
        this.vx = Const.BIRD_V_X;
        this.mc.gotoAndPlay("run");
        this.mc.setInterval(4);
        this.mc.relativeAnchorPointX = this.mc.relativeAnchorPointY = 0.5;
        this.mc.scaleX = 0.5;
        this.mc.scaleY = 0.5;
        this.view = this.mc
    }

    __extends(c, d);
    c.prototype.run = function () {
        this.mc.x <= Const.WALL_WIDTH ? (this.vx = Const.BIRD_V_X, this.mc.scaleX = 0.5) : this.view.x >= ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this.vx = -Const.BIRD_V_X, this.mc.scaleX = -0.5);
        this.mc.x += this.vx
    };
    c.prototype.onCameraMove =
        function (b) {
            this.view.y += 2 * b / 5;
            this.checkAdd()
        };
    c.prototype.remove = function () {
        d.prototype.remove.call(this);
        system.hitTest.removeHitList(this);
        0 != app.role._vx ? (MyInfo.addKill(), this.view.visible = !1, utils.addHitMC(this.view)) : (this.view.visible = !1, app.restartGame())
    };
    return c
}(GameObject), Bridge = function (d) {
    function c() {
        var b = new ns_egret.DisplayObjectContainer, a = utils.createBitmap("qiao.png");
        a.x = 47;
        a.scaleX = 0.9;
        b.addChild(a);
        a = utils.createBitmap("qiao.png");
        a.x = ns_egret.MainContext.instance.stage.stageWidth -
            47;
        a.scaleX = -0.9;
        b.addChild(a);
        this.view = b
    }

    __extends(c, d);
    c.prototype.checkAdd = function () {
        -200 < this.view.y && null == this.view.parent ? gameContainer.addChild(this.view) : null != this.view.parent && this.view.y > ns_egret.MainContext.instance.stage.stageHeight + 200 && (this.view.visible = !1)
    };
    c.prototype.onCameraMove = function (b) {
        this.view.y += 2 * b / 5;
        this.checkAdd()
    };
    return c
}(GameObject), Bird = function (d) {
    function c(b, a) {
        var c = new ns_egret.MovieClip(b, a);
        this._tick = this.speed = this.vx = 0;
        this._isAppear = !1;
        c.gotoAndPlay("run");
        c.setInterval(6);
        c.relativeAnchorPointX = c.relativeAnchorPointY = 0.5;
        this.view = c
    }

    __extends(c, d);
    c.prototype.run = function () {
        !this._isAppear && !app.stateMachine.state._isDeath && (3 == MyInfo.guideStep || app.role.view.x < ns_egret.MainContext.instance.stage.stageWidth / 2 ? (this._isAppear = !0, this.view.x = ns_egret.MainContext.instance.stage.stageWidth - 30, this.view.scaleX *= -1) : app.role.view.x > ns_egret.MainContext.instance.stage.stageWidth / 2 && (this._isAppear = !0, this.view.x = 20));
        0 == this.vx && this._isAppear && (this._tick++,
            this.view.y = 50, 90 < this._tick && (this.vx = this.view.x > ns_egret.MainContext.instance.stage.stageWidth / 2 ? 0.8 * -this.speed / 1.15 : 0.8 * this.speed / 1.15));
        this.view.x += this.vx
    };
    c.prototype.onCameraMove = function (b) {
        this.speed = b;
        this.view.y += b;
        this.checkAdd()
    };
    c.prototype.remove = function () {
        d.prototype.remove.call(this);
        system.hitTest.removeHitList(this);
        0 != app.role._vx ? (MyInfo.addKill(), this.view.visible = !1, app.stateMachine.state.onGetAnger(), utils.addHitMC(this.view)) : (this.view.visible = !1, app.restartGame())
    };
    return c
}(GameObject), Banana = function (d) {
    function c(b, a) {
        var c = new ns_egret.MovieClip(b, a);
        this.vx = 0;
        this.vy = 1;
        this.speed = Const.BIRD_V_X;
        c.gotoAndPlay("banana");
        c.setInterval(6);
        c.scaleX = c.scaleY = 2;
        this.view = c
    }

    __extends(c, d);
    c.prototype.run = function () {
        this.view.x += this.vx
    };
    c.prototype.onCameraMove = function (b) {
        this.view.y += b / this.vy;
        this.checkAdd()
    };
    c.prototype.remove = function () {
        d.prototype.remove.call(this);
        system.hitTest.removeHitList(this);
        0 != app.role._vx ? (MyInfo.addKill(), this.view.visible = !1,
            app.stateMachine.state.onGetBanana(), utils.addHitMC(this.view)) : this.view.x > Const.WALL_WIDTH && this.view.x < ns_egret.MainContext.instance.stage.stageWidth - Const.WALL_WIDTH && (this.view.visible = !1, app.restartGame())
    };
    c.prototype.setVy = function (b) {
        "undefined" === typeof b && (b = 2);
        this.vy = b
    };
    c.prototype.setVx = function () {
        this.vx = this.view.x < ns_egret.MainContext.instance.stage.stageWidth / 2 ? this.speed : -this.speed
    };
    return c
}(GameObject), Monkey = function (d) {
    function c(b, a) {
        this.mc = new ns_egret.MovieClip(b, a);
        this.delay =
            0;
        this.data = b;
        this.texture = a;
        this.mc.gotoAndPlay("stand");
        this.mc.setInterval(3);
        this.view = this.mc;
        this.delayValue = Math.round(4 * Math.random()) + 1
    }

    __extends(c, d);
    c.prototype.run = function () {
        var b = ns_egret.MainContext.instance.stage;
        !this._isDead && this.view.y >= b.stageHeight - 700 && (this.delay++, this.delay == this.delayValue && (this.mc.gotoAndPlay("attack"), this.mc.addEventListener("attackComplete", this.attackComplete, this), this.mc.addEventListener("startAttack", this.startAttack, this)))
    };
    c.prototype.attackComplete =
        function () {
            this.mc.gotoAndPlay("stand");
            this.mc.removeEventListener("attackComplete", this.attackComplete, this)
        };
    c.prototype.startAttack = function () {
        this.throw(2);
        this.mc.removeEventListener("startAttack", this.attackComplete, this);
        300 < MyInfo.score && 0.5 < Math.random() && ns_egret.Ticker.getInstance().callLater(function () {
            this.throw(1.5)
        }, this, 100)
    };
    c.prototype.onCameraMove = function (b) {
        this.view.y += 2 * b / 5;
        this.checkAdd()
    };
    c.prototype.remove = function () {
        d.prototype.remove.call(this);
        system.hitTest.removeHitList(this);
        0 != app.role._vx ? (MyInfo.addKill(), this.view.visible = !1, utils.addHitMC(this.view)) : (this.view.visible = !1, app.restartGame())
    };
    c.prototype.throw = function (b) {
        var a = new Banana(this.data, this.texture);
        a.view.x = this.view.x;
        a.view.y = this.view.y;
        a.add();
        a.setVx();
        a.setVy(b)
    };
    return c
}(GameObject), RenderSystem = function () {
    function d() {
        this._list = []
    }

    d.prototype.add = function (c) {
        this._list.push(c)
    };
    d.prototype.onCameraMove = function (c) {
        for (var b in this._list)this._list[b].onCameraMove(c)
    };
    d.prototype.run = function () {
        for (var c in this._list) {
            var b =
                this._list[c];
            b && b.run()
        }
    };
    d.prototype.remove = function (c) {
        c = this._list.indexOf(c);
        0 <= c && this._list.splice(c, 1)
    };
    d.prototype.reset = function () {
        this._list = []
    };
    return d
}(), HitTestSystem = function () {
    function d() {
        this.hitTestResultArray = [];
        this._hitList = []
    }

    d.prototype.addHitList = function (c) {
        this._hitList.push(c)
    };
    d.prototype.removeHitList = function (c) {
        c = this._hitList.indexOf(c);
        0 <= c && this._hitList.splice(c, 1)
    };
    d.prototype.hitTest = function (c) {
        this.hitTestResultArray.length = 0;
        var b = c.getHitBounds();
        c = b.x + 0;
        var a = b.y + 0, d = b.width + 0, b = b.height + 0, f;
        for (f in this._hitList) {
            var g = this._hitList[f], h = g.getHitBounds(), k = h.x + 0, l = h.y + 0, m = h.width + 0, h = h.height + 0;
            this.containPoint(k, l, m, h, c, a) || this.containPoint(k, l, m, h, c + d, a) || this.containPoint(k, l, m, h, c, a + b) || this.containPoint(k, l, m, h, c + d, a + b) ? this.hitTestResultArray.push(g) : (this.containPoint(c, a, d, b, k, l) || this.containPoint(c, a, d, b, k + m, l) || this.containPoint(c, a, d, b, k, l + h) || this.containPoint(c, a, d, b, k + m, l + h)) && this.hitTestResultArray.push(g)
        }
        return this.hitTestResultArray
    };
    d.prototype.containPoint = function (c, b, a, d, f, g) {
        return c <= f && c + a >= f && b <= g && b + d >= g
    };
    d.prototype.reset = function () {
        this._hitList = []
    };
    return d
}(), system = {render: new RenderSystem, hitTest: new HitTestSystem};
var __extends = this.__extends || function (d, c) {
    function b() {
        this.constructor = d
    }

    for (var a in c)c.hasOwnProperty(a) && (d[a] = c[a]);
    b.prototype = c.prototype;
    d.prototype = new b
}, BoxManager = function () {
    function d() {
        this._list = [];
        this.container = gameContainer
    }

    d.getInstance = function () {
        null == d._instance && (d._instance = new d);
        return d._instance
    };
    d.prototype.addBox = function (c) {
        c.x += 10;
        this.container.addChild(c);
        this._list.push(c);
        c.onEnter()
    };
    d.prototype.removeBox = function (c) {
        var b = this._list.indexOf(c);
        b && this._list.splice(b,
            1);
        this.container.removeChild(c);
        c.onExit()
    };
    d.prototype.clearAllBox = function () {
        this.container.removeAllChildren()
    };
    return d
}(), UIBase = function (d) {
    function c() {
        d.call(this);
        this.createView()
    }

    __extends(c, d);
    c.prototype.createView = function () {
    };
    c.prototype.onEnter = function () {
    };
    c.prototype.onExit = function () {
    };
    return c
}(ns_egret.DisplayObjectContainer), NameInputUI = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c, d);
    c.prototype.createView = function () {
        this.textField = new ns_egret.TextField;
        var b =
            utils.createBitmap("ui_tanchuang_1.png");
        this.addChild(b);
        this.width = b.getBounds().width;
        this.height = b.getBounds().height;
        var a = utils.createBitmap("ui_title_1.png");
        a.relativeAnchorPointX = 0.5;
        a.relativeAnchorPointY = 0.5;
        a.x = b.getBounds().width / 2;
        a.y = -20;
        this.addChild(a);
        a = utils.createBitmap("ui_title_success.png");
        a.relativeAnchorPointX = 0.5;
        a.relativeAnchorPointY = 0.5;
        a.x = b.getBounds().width / 2;
        a.y = -25;
        this.addChild(a);
        for (a = 0; 3 > a; a++) {
            var c = utils.createBitmap("ui_chendi_1.png");
            this.addChild(c);
            c.relativeAnchorPointX =
                0.5;
            c.scaleX = 0.8;
            c.scaleY = 0.8;
            c.x = this.width / 2;
            c.y = 64 * a + 20
        }
        a = utils.createBitmap("nin.png");
        a.relativeAnchorPointX = 0.5;
        a.relativeAnchorPointY = 0.5;
        a.x = b.getBounds().width / 2 - 120;
        a.y = this.height - 253;
        this.addChild(a);
        c = utils.createBitmap("dewanjia.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 + 140;
        c.y = a.y;
        this.addChild(c);
        c = utils.createBitmap("gong.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 - 100;
        c.y = 50;
        this.addChild(c);
        c =
            utils.createBitmap("mi_2.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 + 82;
        c.y = 50;
        this.addChild(c);
        c = utils.createBitmap("jisha.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 - 100;
        c.y = 114;
        this.addChild(c);
        c = utils.createBitmap("zhiguai.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 + 100;
        c.y = 114;
        this.addChild(c);
        c = utils.createBitmap("zongji.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY =
            0.5;
        c.x = b.getBounds().width / 2 - 100;
        c.y = 178;
        this.addChild(c);
        c = utils.createBitmap("fen.png");
        c.relativeAnchorPointX = 0.5;
        c.relativeAnchorPointY = 0.5;
        c.x = b.getBounds().width / 2 + 82;
        c.y = 178;
        this.addChild(c)
    };
    c.prototype.onTouchBegan = function () {
        function b(a) {
            a = JSON.parse(a.responseText);
            0 == a.s ? (window.localStorage.getItem("userId") || (window.localStorage.setItem("userId", c), window.localStorage.setItem("userName", d)), window.localStorage.setItem("best_" + MyInfo.currentWeek, this.score), app.stateMachine.changeState(new ResultState)) :
                    1 == a.s ? this.textField.text = "\u60a8\u8d77\u7684\u540d\u5b57\u8d85\u8fc7\u9650\u5236\u4e86" : 3 == a.s ? this.textField.text = "\u540d\u5b57\u5df2\u7ecf\u88ab\u4f7f\u7528\uff0c\u8bf7\u91cd\u65b0\u8d77\u540d" : 2 == a.s && (this.textField.text = "\u60a8\u7684\u540d\u5b57\u6709\u975e\u6cd5\u5b57\u7b26")
        }

        var a = window.localStorage.getItem("best_" + MyInfo.currentWeek);
        if (a && parseInt(a) > this.score)app.stateMachine.changeState(new ResultState); else {
            var c = window.localStorage.getItem("userId"), d = this.textInput.getText();
            c ||
            (c = ns_egret.Ticker.now() + "" + Math.floor(1E5 * Math.random()));
            if ("" == d)this.textField.text = "\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a"; else if (10 < d.length)this.textField.text = "\u60a8\u8d77\u7684\u540d\u5b57\u8d85\u8fc7\u9650\u5236\u4e86"; else {
                var a = {mod: "Top", "do": "set"}, g = {};
                a.p = g;
                g.name = d;
                g.uId = c;
                g.num = this.score;
                a = JSON.stringify(a);
                a = new ns_egret.URLRequest(MyInfo.serverAddress + "?data\x3d" + a + "\x26s\x3d" + hex_md5(a + MyInfo.secret), b, this);
                ns_egret.NetContext.getInstance().send(a)
            }
        }
    };
    c.prototype.add = function (b, a) {
        "undefined" === typeof b && (b = 0);
        "undefined" === typeof a && (a = 0);
        this.score = b + a;
        var c = utils.createBitmap("ui_tanchuang_1.png");
        if (9999999 > MyInfo.score)c = utils.createBitmap("ui_word_zaipao.png"), c.x = 35, c.y = 320, c.relativeAnchorPointY = 0.5, c = utils.createBitmap("ui_word_mi.png"), c.relativeAnchorPointY = 0.5, c.x = 225, c.y = 320, c = MyInfo.score < Const.SLIVER_GIFT ? new UIFont(Const.SLIVER_GIFT - MyInfo.score) : new UIFont(Const.GOLD_GIFT - MyInfo.score), c.scaleX = c.scaleY = 0.7,
            c.relativeAnchorPointY = 0.5, c.x = 115, c.y = 315, 100 > MyInfo.score ? c = utils.createBitmap("ui_word_get_award_2.png") : (c = utils.createBitmap("ui_word_get_award.png"), c.scaleX = c.scaleY = 0.9),  c.relativeAnchorPointY = 0.5, c.x = 35, c.y = 365, c = utils.createBitmap("ui_return_1.png"), this.addChild(c), c.touchEnabled = !0, c.y = 400, c.x = 35, c.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, function () {
            app.stateMachine.changeState(new LoginState)
        }, this), c = utils.createBitmap("ui_award_1.png"), c.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN,
            function () {
                EgretShare.share()
//                app.stateMachine.changeState(new GameState)
            }, this), c.touchEnabled = !0, this.addChild(c), c.y = 400, c.x = 235; else {
            var d = utils.createBitmap("ui_award_1.png");
            this.addChild(d);
            d.relativeAnchorPointX = d.relativeAnchorPointY = 0.5;
            d.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this);
            d.x = c.getBounds().width / 2;
            d.y = this.height - 65;
            d.touchEnabled = !0;
            this.button = d;
            var g = window.localStorage.getItem("best_" + MyInfo.currentWeek);
            if (g && parseInt(g) > this.score) {
                var h = utils.createBitmap("ui_ninbenzhou.png");
                h.relativeAnchorPointX = 0.5;
                h.relativeAnchorPointY = 0.5;
                h.x = c.getBounds().width / 2 - 65;
                h.y = d.y - 140;
                this.addChild(h);
                g = new UIFont(g, 4);
                g.relativeAnchorPointY = 0.5;
                g.x = c.getBounds().width / 2 - 200;
                g.y = d.y - 90;
                this.addChild(g);
                d = utils.createBitmap("fen.png");
                d.relativeAnchorPointX = 0.5;
                d.relativeAnchorPointY = 0.5;
                d.x = c.getBounds().width / 2;
                d.y = g.y;
                this.addChild(d)
            } else {
                g = utils.createBitmap("ui_chendi_1.png");
                g.scaleX = 0.7;
                g.scaleY = 0.7;
                this.addChild(g);
                g.relativeAnchorPointX = 0.5;
                g.x = this.width / 2;
                g.y = d.y - 100;
                d = utils.createBitmap("qingliuaia.png");
                d.relativeAnchorPointX = 0.5;
                d.relativeAnchorPointY = 0.5;
                d.x = c.getBounds().width / 2;
                d.y = g.y - 30;
                this.addChild(d);
                var k = window.localStorage.getItem("userName");
                this.textInput = new ns_egret.TextInput;
                this.textInput.x = 180;
                this.textInput.y = 365;
                ns_egret.Ticker.getInstance().callLater(function () {
                    this.addChild(this.textInput);
                    this.textInput.setText(k ? k : "\u5fcd\u8005" + Math.floor(1E5 * Math.random()))
                }, this)
            }
            this.textField.relativeAnchorPointX = 0.5;
            this.textField.y = 510;
            this.textField.x = c.getBounds().width / 2;
            this.textField.size =
                20;
            this.addChild(this.textField)
        }
        c = new UIFont(b, 4);
        c.scaleX = c.scaleY = 0.6;
        c.relativeAnchorPointX = 0.5;
        c.x = this.width / 2;
        c.y = 30;
        this.addChild(c);
        c = new UIFont(a);
        c.scaleX = c.scaleY = 0.6;
        c.relativeAnchorPointX = 0.5;
        c.x = this.width / 2;
        c.y = 94;
        this.addChild(c);
        c = 1E3 > a + b ? new UIFont(a + b) : new UIFont(a + b, 4);
        c.scaleX = c.scaleY = 0.6;
        c.relativeAnchorPointX = 0.5;
        c.x = this.width / 2;
        c.y = 158;
        this.addChild(c);
        c = new UIFont(this.getScore(a + b), 2);
        c.scaleX = c.scaleY = 1;
        c.relativeAnchorPointX = 0.5;
        c.x = this.width / 2 - 3;
        c.y = 220;
        this.addChild(c);
        c = utils.createBitmap("cent.png");
        c.relativeAnchorPointX = 0.5;
        c.x = this.width / 2 + 60;
        c.y = 235;
        this.addChild(c)
    };
    c.prototype.getScore = function (b) {
        b = Math.log(18 * b);
        b *= b;
        99 < b && (b = 99);
        return Math.round(b)
    };
    c.prototype.onExit = function () {
        this.removeEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this)
    };
    return c
}(UIBase), LoginUI = function (d) {
    function c() {
        d.call(this)
    }

    __extends(c, d);
    c.prototype.createView = function () {
        var b = utils.createBitmap("ui_logo.png");
        this.addChild(b);
        var a;
        a = Const.HAS_RANK ?
            utils.createBitmap("mingren.png") : utils.createBitmap("ui_mingren.png");
        a.scaleX = 0.8;
        a.scaleY = 0.8;
        a.x = Const.HAS_RANK ? -80 : 55;
        this.addChild(a);
        var b = ns_egret.MainContext.instance.stage, c = b.stageHeight - a.getBounds().height + 190;
        Const.HAS_RANK && (c = b.stageHeight - a.getBounds().height + 150);
        a.y = b.stageHeight + 100;
        ns_egret.Tween.get(a).to({y: c}, 800, ns_egret.Ease.backOut).call(function () {
            ns_egret.Tween.get(d).to({alpha: 1, scaleX: 0.7, scaleY: 0.7}, 300);
            d.touchEnabled = !0
        });
        var d = utils.createBitmap("ui_chuzhan_1.png");
        this.addChild(d);
        d.alpha = 0;
        d.scaleX = d.scaleY = 0;
        d.relativeAnchorPointX = d.relativeAnchorPointY = 0.5;
        d.x = Const.HAS_RANK ? b.stageWidth / 2 + 80 : b.stageWidth / 2;
        d.y = b.stageHeight - 80;
        d.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this);
        this.button = d;
        a = utils.createBitmap("ui_egretLogo.png");
        this.addChild(a);
        Const.HAS_RANK && (this.rank = new Rank, this.rank.scaleX = this.rank.scaleY = 0.7, this.rank.relativeAnchorPointX = 0.5, this.rank.x = this.button.x, this.rank.y = this.button.y - this.rank.getBounds().height *
            this.rank.scaleX, this.addChild(this.rank));
        a.scaleX = 0.5;
        a.scaleY = 0.5;
        a.y = b.stageHeight - a.getBounds().height / 2;
        a.x = b.stageWidth / 2 - a.getBounds().width / 4
    };
    c.prototype.onTouchBegan = function () {
        MyInfo.statistics("gameStart");
        app.stateMachine.changeState(new GameState)
    };
    c.prototype.onExit = function () {
        this.removeEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, this.onTouchBegan, this)
    };
    return c
}(UIBase), Rank = function (d) {
    function c() {
        d.call(this);
        this.number_max = 6;
        this.currentNumber = 0;
        this.scroll = new ns_egret.ScrollView;
        this.rankContainer = new ns_egret.DisplayObjectContainer;
        var b = utils.createBitmap("ui_tanchuang_1.png");
        this.addChild(b);
        this.soloHeight = b.getBounds().height / this.number_max;
        var a = utils.createBitmap("ui_title_1.png");
        a.relativeAnchorPointX = 0.5;
        a.relativeAnchorPointY = 0.5;
        a.x = b.getBounds().width / 2;
        a.y = -20;
        this.addChild(a);
        a = utils.createBitmap("paihang.png");
        a.relativeAnchorPointX = 0.5;
        a.relativeAnchorPointY = 0.5;
        a.x = b.getBounds().width / 2;
        a.y = -25;
        this.addChild(a);
        this.width = b.getBounds().width;
        this.height =
            b.getBounds().height;
        this.initRankContainer();
        this.setRank()
    }

    __extends(c, d);
    c.prototype.setRank = function () {
        var b = {mod: "Top", "do": "getList"}, b = JSON.stringify(b), b = new ns_egret.URLRequest(MyInfo.serverAddress + "?data\x3d" + b + "\x26s\x3d" + hex_md5(b + MyInfo.secret), function (a) {
            a = JSON.parse(a.responseText);
            if (0 == a.s) {
                MyInfo.currentWeek = a.w;
                console.log(MyInfo.currentWeek);
                for (var b = a.l, c = 0; c < a.l.length && 10 > c; c++) {
                    var d = b[c];
                    this.addValue(d.name, d.num)
                }
            }
        }, this);
        ns_egret.NetContext.getInstance().send(b)
    };
    c.prototype.addValue =
        function (b, a) {
            "undefined" === typeof b && (b = "unname");
            "undefined" === typeof a && (a = 0);
            var c = this.currentNumber, d = utils.createBitmap("ui_chendi_1.png");
            this.rankContainer.addChild(d);
            d.relativeAnchorPointX = 0.5;
            d.x = this.width / 2;
            d.y = 80 * c;
            var g = new ComboFont(c + 1), h = new UIFont(Math.round(a), 4);
            g.x = 50;
            g.y = 80 * c + 15;
            g.scaleX = g.scaleY = 0.7;
            h.x = 290;
            h.y = g.y;
            h.scaleX = h.scaleY = 0.7;
            this.rankContainer.addChild(g);
            this.rankContainer.addChild(h);
            c = new ns_egret.TextField;
            c.text = b;
            c.stroke = 2;
            c.x = 118;
            c.y = g.y + 5;
            c.size = 28;
            c.textColor =
                "#FFFFFF";
            this.rankContainer.addChild(c);
            d = d.getBounds().height;
            this.currentNumber++;
            this.scroll.setContainer(this.rankContainer, this.width, this.currentNumber * d)
        };
    c.prototype.initRankContainer = function () {
        this.addChild(this.scroll);
        this.scroll.x = 0;
        this.scroll.y = 20;
        this.scroll.setContentSize(this.width, this.height - 40);
        this.scroll.direction = ns_egret.Direction.VERTICAL;
        this.scroll.setContainer(this.rankContainer, this.width, 120)
    };
    return c
}(ns_egret.DisplayObjectContainer), FailUI = function (d) {
    function c() {
        d.apply(this,
            arguments)
    }

    __extends(c, d);
    c.prototype.createView = function () {
        var b = new UIBackground("ui_title_fail.png");
        this.addChild(b);
        var a = ns_egret.MainContext.instance.stage;
        this.relativeAnchorPointX = this.relativeAnchorPointY = 0.5;
        this.x = a.stageWidth / 2;
        this.y = a.stageHeight / 2;
        b = utils.createBitmap("ui_chendi_1.png");
        this.addChild(b);
        b.relativeAnchorPointX = 0.5;
        b.x = a.stageWidth / 2;
        b.y = 140;
        b = utils.createBitmap("ui_chendi_1.png");
        this.addChild(b);
        b.relativeAnchorPointX = 0.5;
        b.x = a.stageWidth / 2;
        b.y = 240;
        a = utils.createBitmap("ui_font_score.png");
        this.addChild(a);
        a.x = b.x - b.getBounds().width / 2 + 20;
        a.y = 145;
        a = utils.createBitmap("ui_font_best.png");
        this.addChild(a);
        a.x = b.x - b.getBounds().width / 2 + 20;
        a.y = 245;
        a = new UIFont(MyInfo.score);
        this.addChild(a);
        a.y = 145;
        a.x = b.x + 20;
        a = new UIFont(MyInfo.bestScore);
        this.addChild(a);
        a.y = 245;
        a.x = b.x + 20;
        b = utils.createBitmap("ui_word_zaipao.png");
//        this.addChild(b);
        b.x = 20;
        b.y = 350;
        b.relativeAnchorPointY = 0.5;
        b = utils.createBitmap("ui_word_mi.png");
//        this.addChild(b);
        b.relativeAnchorPointY = 0.5;
        b.x = 230;
        b.y = 350;
        b = new UIFont(Const.SLIVER_GIFT -
            MyInfo.score);
//        this.addChild(b);
//        b.relativeAnchorPointY = 0.5;
//        b.x = 90;
//        b.y = 350;
        b = utils.createBitmap("ui_word_get_award.png");
        this.addChild(b);
        b.relativeAnchorPointY = 0.5;
        b.x = 20;
        b.y = 400;
        b = utils.createBitmap("ui_return_1.png");
        this.addChild(b);
        b.touchEnabled = !0;
        b.y = 440;
        b.x = 30;
        b.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, function () {
            app.stateMachine.changeState(new LoginState)
        }, this);
        b = utils.createBitmap("ui_reset_1.png");
        b.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, function () {
                app.stateMachine.changeState(new GameState)
            },
            this);
        b.touchEnabled = !0;
        this.addChild(b);
        b.y = 440;
        b.x = 230;
        utils.scaleDialog(this)
    };
    return c
}(UIBase), WinUI = function (d) {
    function c() {
        d.apply(this, arguments)
    }

    __extends(c, d);
    c.prototype.createView = function () {
        var b = new ns_egret.URLRequest("http://ka.u9time.com/activity_api/getpartneractivity/685ff9c132d847d65d13fecb176a7ce0", function (a) {
            a = JSON.parse(a.responseText);
            a.result && a.result.card_id ? (a = a.result.card_id, MyInfo.statistics("getGift"), a = new GetAwardUI(a), BoxManager.getInstance().removeBox(this), BoxManager.getInstance().addBox(a)) :
                alert(a.error.message + ",\u8bf7\u7a0d\u540e\u518d\u8bd5")
        }, this);
        ns_egret.NetContext.getInstance().send(b)
    };
    c.prototype.getGift = function () {
        var b = new ns_egret.URLRequest("http://ka.u9time.com/activity_api/getpartneractivity/685ff9c132d847d65d13fecb176a7ce0", function (a) {
            a = JSON.parse(a.responseText);
            a.result && a.result.card_id ? (a = new GetAwardUI(a.result.card_id), BoxManager.getInstance().removeBox(this), BoxManager.getInstance().addBox(a)) : alert(a.error.message + ",\u8bf7\u7a0d\u540e\u518d\u8bd5")
        }, this);
        ns_egret.NetContext.getInstance().send(b)
    };
    return c
}(UIBase), UIBackground = function (d) {
    function c(b) {
        d.call(this);
        var a = utils.createBitmap("ui_tanchuang_1.png");
        this.addChild(a);
        a.y = 65;
        var c = utils.createBitmap("ui_title_1.png");
        this.addChild(c);
        c.relativeAnchorPointX = 0.5;
        c.x = a.getBounds().width / 2;
        b = utils.createBitmap(b);
        this.addChild(b);
        b.relativeAnchorPointX = 0.5;
        b.x = a.getBounds().width / 2
    }

    __extends(c, d);
    return c
}(ns_egret.DisplayObjectContainer), LoadingUI = function () {
    function d() {
    }

    d.prototype.addToStage =
        function () {
            this.container = new ns_egret.DisplayObjectContainer;
            this.textField = new ns_egret.TextField;
            ns_egret.MainContext.instance.stage.addChild(this.container);
            this.container.addChild(this.textField);
            this.textField.x = 120;
            this.textField.y = 300;
            this.textField.setContentSize(480, 100);
            this.textField.align = "middle"
        };
    d.prototype.removeFromStage = function () {
        this.container.parent.removeChild(this.container)
    };
    d.prototype.onProgress = function (c, b) {
        this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + Math.floor(100 *
            (c / b)) + "%"
    };
    return d
}(), GetAwardUI = function (d) {
    function c(b) {
        this.codeName = b;
        d.call(this)
    }

    __extends(c, d);
    c.prototype.createView = function () {
        var b = new UIBackground("ui_title_success.png");
        this.addChild(b);
        var a = ns_egret.MainContext.instance.stage;
        this.relativeAnchorPointX = this.relativeAnchorPointY = 0.5;
        this.x = a.stageWidth / 2;
        this.y = a.stageHeight / 2;
        b = utils.createBitmap("ui_word_get_award.png");
        this.addChild(b);
        b.x = a.stageWidth / 2;
        b.relativeAnchorPointX = 0.5;
        b.y = 85;
        b = utils.createBitmap("ui_chendi_1.png");
        this.addChild(b);
        b.relativeAnchorPointX = 0.5;
        b.x = a.stageWidth / 2;
        b.y = 360;
        b = new ns_egret.TextField;
        b.text = this.codeName;
        this.addChild(b);
        b.setContentSize(480, 100);
        b.textAlign = "center";
        b.size = 48;
        b.y = 365;
        b = utils.createGift();
        this.addChild(b);
        b.touchEnabled = !0;
        b.x = 240;
        b.relativeAnchorPointX = 0.5;
        b.y = 130;
        b = utils.createBitmap("ui_notice_codename.png");
        this.addChild(b);
        b.relativeAnchorPointX = 0.5;
        b.x = a.stageWidth / 2;
        b.y = 310;
        a = utils.createBitmap("ui_return_1.png");
        this.addChild(a);
        a.touchEnabled = !0;
        a.y = 450;
        a.x =
            30;
        a.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, function () {
            app.stateMachine.changeState(new LoginState)
        }, this);
        a = utils.createBitmap("button-qianwangduihuan-1.png");
        a.addEventListener(ns_egret.TouchEvent.TOUCH_BEGAN, function () {
            MyInfo.statistics("goTargetGame");
            window.open("http://m.hy.u9time.com/", "_self")
        }, this);
        a.touchEnabled = !0;
        this.addChild(a);
        a.y = 450;
        a.x = 230;
        utils.scaleDialog(this)
    };
    return c
}(UIBase), GuideUI = function (d) {
    function c() {
        d.call(this);
        this.createView()
    }

    __extends(c, d);
    c.prototype.createView =
        function () {
            var b = utils.createBitmap("zilaiye.png");
            b.x = 90;
            b.y = -280;
            this.addChild(b);
            b = utils.createBitmap("duihua-1.png");
            this.addChild(b);
            b = utils.createBitmap("duihua-3.png");
            b.x = 415;
            b.y = 90;
            this.addChild(b);
            ns_egret.Tween.get(b, {loop: !0}).to({y: 85}, 600).to({y: 90}, 600);
            b = utils.createBitmap("duihua-2.png");
            b.x = 415;
            b.y = 110;
            this.addChild(b);
            this.txt = new ns_egret.TextField;
            this.txt.x = 240;
            this.txt.y = 65;
            this.txt.size = 20;
            this.txt.text = "\u70b9\u51fb";
            this.txt.setContentSize(400, 0);
            this.txt.textColor = "#23100b";
            this.txt.relativeAnchorPointX = this.txt.relativeAnchorPointY = 0.5;
            this.addChild(this.txt)
        };
    c.prototype.setText = function (b) {
        this.txt.text = b
    };
    return c
}(ns_egret.DisplayObjectContainer), UIFont = function (d) {
    function c(b, a) {
        "undefined" === typeof a && (a = 3);
        d.call(this);
        this._list = [];
        this.length = a;
        var c = ns_egret.ResourceLoader.create("number.json").data;
        this.spriteSheet = new ns_egret.SpriteSheet(c);
        this.texture = ns_egret.TextureCache.getInstance().getTexture("number.png");
        for (c = 0; c < a; c++) {
            var f = new ns_egret.Bitmap;
            this._list.push(f);
            this.addChild(f);
            f.x = 40 * c
        }
        this.updateText(b)
    }

    __extends(c, d);
    c.prototype.updateText = function (b) {
        1E4 <= b && (b = 9999);
        for (b = b.toString(); b.length < this.length;)b = "0" + b;
        for (var a = 0; a < this.length; a++) {
            var c = this._list[a], d = b[a];
            c.texture = this.texture;
            c.spriteFrame = this.spriteSheet.getFrame(d + ".png")
        }
    };
    return c
}(ns_egret.DisplayObjectContainer), ComboFont = function (d) {
    function c(b) {
        d.call(this);
        this._list = [];
        var a = ns_egret.ResourceLoader.create("combo_number.json").data;
        this.spriteSheet = new ns_egret.SpriteSheet(a);
        this.texture = ns_egret.TextureCache.getInstance().getTexture("combo_number.png");
        for (a = 0; 3 > a; a++) {
            var c = new ns_egret.Bitmap;
            this._list.push(c);
            this.addChild(c);
            c.x = 40 * a
        }
        this.updateText(b)
    }

    __extends(c, d);
    c.prototype.updateText = function (b) {
        this.value = b;
        1E3 <= b && (b = 999);
        b = b.toString();
        for (var a = 0; 3 > a; a++) {
            var c = this._list[a];
            if (a < b.length) {
                c.visible = !0;
                var d = b[a];
                c.texture = this.texture;
                c.spriteFrame = this.spriteSheet.getFrame(d + ".png")
            } else c.visible = !1
        }
    };
    c.prototype.getValue = function () {
        return this.value
    };
    return c
}(ns_egret.DisplayObjectContainer), AngerContainer = function (d) {
    function c() {
        d.call(this);
        this.anger = 0;
        this.isBanana = !1;
        this.angerList = [];
        for (var b = 1; 3 >= b; b++) {
            var a = utils.createBitmap("ui_anger_bg.png");
            a.x = 60 * b;
            this.addChild(a)
        }
    }

    __extends(c, d);
    c.prototype.onGetAnger = function () {
        this.isBanana && this.maxAngerOver();
        this.isBanana = !1;
        this.anger++;
        if (3 >= this.anger) {
            var b = utils.createBitmap("anger.png");
            b.x = 60 * this.anger + 5;
            this.addChild(b);
            this.angerList.push(b)
        }
        if (3 == this.anger) {
            this.anger = 0;
            var b =
                ns_egret.ResourceLoader.create("maxAnger.json").data, a = ns_egret.TextureCache.getInstance().getTexture("maxAnger.png");
            this.maxAngerMC = new ns_egret.MovieClip(b, a);
            this.maxAngerMC.gotoAndPlay("run");
            b = this.maxAngerMC.getBounds();
            this.maxAngerMC.x = ns_egret.MainContext.instance.stage.stageWidth - b.width >> 1;
            this.addChild(this.maxAngerMC);
            this.maxAngerMC.y = ns_egret.MainContext.instance.stage.stageHeight - this.y;
            this.maxAnger = !0;
            b = -300 - this.y;
            ns_egret.Tween.get(this.maxAngerMC).to({y: b}, 1200).call(this.maxAngerOver,
                this);
            ns_egret.Ticker.getInstance().register(this.update, this)
        }
    };
    c.prototype.onGetBanana = function () {
        this.isBanana || this.maxAngerOver();
        this.isBanana = !0;
        this.anger++;
        if (3 >= this.anger) {
            var b = utils.createBitmap("bananaAnger.png");
            b.x = 60 * this.anger + 5;
            this.addChild(b);
            this.angerList.push(b)
        }
        if (3 == this.anger) {
            this.anger = 0;
            var b = ns_egret.ResourceLoader.create("maxAnger.json").data, a = ns_egret.TextureCache.getInstance().getTexture("maxAnger.png");
            this.maxAngerMC = new ns_egret.MovieClip(b, a);
            this.maxAngerMC.gotoAndPlay("run");
            b = this.maxAngerMC.getBounds();
            this.maxAngerMC.x = ns_egret.MainContext.instance.stage.stageWidth - b.width >> 1;
            this.addChild(this.maxAngerMC);
            this.maxAngerMC.y = ns_egret.MainContext.instance.stage.stageHeight - this.y;
            this.maxAnger = !0;
            b = -300 - this.y;
            ns_egret.Tween.get(this.maxAngerMC).to({y: b}, 1200).call(this.maxAngerOver, this);
            ns_egret.Ticker.getInstance().register(this.update, this)
        }
    };
    c.prototype.update = function () {
        if (this.maxAnger)for (var b = system.hitTest._hitList, a = b.length, c = 0; c < a; c++) {
            var d = b[c];
            d.view.y >
            this.maxAngerMC.y && (system.hitTest.removeHitList(d), system.render.remove(d), d.view.visible = !1, c--, a--)
        }
    };
    c.prototype.maxAngerOver = function () {
        for (var b in this.angerList)this.angerList[b].removeFromParent();
        this.angerList.length = 0;
        this.maxAnger = !1;
        ns_egret.Ticker.getInstance().unregister(this.update, this);
        null == this.maxAngerMC ? this.anger = 0 : (this.maxAngerMC.parent.removeChild(this.maxAngerMC), this.maxAngerMC = null)
    };
    return c
}(ns_egret.DisplayObjectContainer);
var hexcase = 0, b64pad = "";
function hex_md5(d) {
    return rstr2hex(rstr_md5(str2rstr_utf8(d)))
}
function b64_md5(d) {
    return rstr2b64(rstr_md5(str2rstr_utf8(d)))
}
function any_md5(d, c) {
    return rstr2any(rstr_md5(str2rstr_utf8(d)), c)
}
function hex_hmac_md5(d, c) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(d), str2rstr_utf8(c)))
}
function b64_hmac_md5(d, c) {
    return rstr2b64(rstr_hmac_md5(str2rstr_utf8(d), str2rstr_utf8(c)))
}
function any_hmac_md5(d, c, b) {
    return rstr2any(rstr_hmac_md5(str2rstr_utf8(d), str2rstr_utf8(c)), b)
}
function md5_vm_test() {
    return"900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}
function rstr_md5(d) {
    return binl2rstr(binl_md5(rstr2binl(d), 8 * d.length))
}
function rstr_hmac_md5(d, c) {
    var b = rstr2binl(d);
    16 < b.length && (b = binl_md5(b, 8 * d.length));
    for (var a = Array(16), e = Array(16), f = 0; 16 > f; f++)a[f] = b[f] ^ 909522486, e[f] = b[f] ^ 1549556828;
    b = binl_md5(a.concat(rstr2binl(c)), 512 + 8 * c.length);
    return binl2rstr(binl_md5(e.concat(b), 640))
}
function rstr2hex(d) {
    try {
        hexcase
    } catch (c) {
        hexcase = 0
    }
    for (var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", e, f = 0; f < d.length; f++)e = d.charCodeAt(f), a += b.charAt(e >>> 4 & 15) + b.charAt(e & 15);
    return a
}
function rstr2b64(d) {
    try {
        b64pad
    } catch (c) {
        b64pad = ""
    }
    for (var b = "", a = d.length, e = 0; e < a; e += 3)for (var f = d.charCodeAt(e) << 16 | (e + 1 < a ? d.charCodeAt(e + 1) << 8 : 0) | (e + 2 < a ? d.charCodeAt(e + 2) : 0), g = 0; 4 > g; g++)b = 8 * e + 6 * g > 8 * d.length ? b + b64pad : b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - g) & 63);
    return b
}
function rstr2any(d, c) {
    var b = c.length, a, e, f, g, h, k = Array(Math.ceil(d.length / 2));
    for (a = 0; a < k.length; a++)k[a] = d.charCodeAt(2 * a) << 8 | d.charCodeAt(2 * a + 1);
    var l = Math.ceil(8 * d.length / (Math.log(c.length) / Math.log(2))), m = Array(l);
    for (e = 0; e < l; e++) {
        h = [];
        for (a = g = 0; a < k.length; a++)if (g = (g << 16) + k[a], f = Math.floor(g / b), g -= f * b, 0 < h.length || 0 < f)h[h.length] = f;
        m[e] = g;
        k = h
    }
    b = "";
    for (a = m.length - 1; 0 <= a; a--)b += c.charAt(m[a]);
    return b
}
function str2rstr_utf8(d) {
    for (var c = "", b = -1, a, e; ++b < d.length;)a = d.charCodeAt(b), e = b + 1 < d.length ? d.charCodeAt(b + 1) : 0, 55296 <= a && (56319 >= a && 56320 <= e && 57343 >= e) && (a = 65536 + ((a & 1023) << 10) + (e & 1023), b++), 127 >= a ? c += String.fromCharCode(a) : 2047 >= a ? c += String.fromCharCode(192 | a >>> 6 & 31, 128 | a & 63) : 65535 >= a ? c += String.fromCharCode(224 | a >>> 12 & 15, 128 | a >>> 6 & 63, 128 | a & 63) : 2097151 >= a && (c += String.fromCharCode(240 | a >>> 18 & 7, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | a & 63));
    return c
}
function str2rstr_utf16le(d) {
    for (var c = "", b = 0; b < d.length; b++)c += String.fromCharCode(d.charCodeAt(b) & 255, d.charCodeAt(b) >>> 8 & 255);
    return c
}
function str2rstr_utf16be(d) {
    for (var c = "", b = 0; b < d.length; b++)c += String.fromCharCode(d.charCodeAt(b) >>> 8 & 255, d.charCodeAt(b) & 255);
    return c
}
function rstr2binl(d) {
    for (var c = Array(d.length >> 2), b = 0; b < c.length; b++)c[b] = 0;
    for (b = 0; b < 8 * d.length; b += 8)c[b >> 5] |= (d.charCodeAt(b / 8) & 255) << b % 32;
    return c
}
function binl2rstr(d) {
    for (var c = "", b = 0; b < 32 * d.length; b += 8)c += String.fromCharCode(d[b >> 5] >>> b % 32 & 255);
    return c
}
function binl_md5(d, c) {
    d[c >> 5] |= 128 << c % 32;
    d[(c + 64 >>> 9 << 4) + 14] = c;
    for (var b = 1732584193, a = -271733879, e = -1732584194, f = 271733878, g = 0; g < d.length; g += 16)var h = b, k = a, l = e, m = f, b = md5_ff(b, a, e, f, d[g + 0], 7, -680876936), f = md5_ff(f, b, a, e, d[g + 1], 12, -389564586), e = md5_ff(e, f, b, a, d[g + 2], 17, 606105819), a = md5_ff(a, e, f, b, d[g + 3], 22, -1044525330), b = md5_ff(b, a, e, f, d[g + 4], 7, -176418897), f = md5_ff(f, b, a, e, d[g + 5], 12, 1200080426), e = md5_ff(e, f, b, a, d[g + 6], 17, -1473231341), a = md5_ff(a, e, f, b, d[g + 7], 22, -45705983), b = md5_ff(b, a, e, f, d[g + 8], 7,
        1770035416), f = md5_ff(f, b, a, e, d[g + 9], 12, -1958414417), e = md5_ff(e, f, b, a, d[g + 10], 17, -42063), a = md5_ff(a, e, f, b, d[g + 11], 22, -1990404162), b = md5_ff(b, a, e, f, d[g + 12], 7, 1804603682), f = md5_ff(f, b, a, e, d[g + 13], 12, -40341101), e = md5_ff(e, f, b, a, d[g + 14], 17, -1502002290), a = md5_ff(a, e, f, b, d[g + 15], 22, 1236535329), b = md5_gg(b, a, e, f, d[g + 1], 5, -165796510), f = md5_gg(f, b, a, e, d[g + 6], 9, -1069501632), e = md5_gg(e, f, b, a, d[g + 11], 14, 643717713), a = md5_gg(a, e, f, b, d[g + 0], 20, -373897302), b = md5_gg(b, a, e, f, d[g + 5], 5, -701558691), f = md5_gg(f, b, a, e, d[g +
        10], 9, 38016083), e = md5_gg(e, f, b, a, d[g + 15], 14, -660478335), a = md5_gg(a, e, f, b, d[g + 4], 20, -405537848), b = md5_gg(b, a, e, f, d[g + 9], 5, 568446438), f = md5_gg(f, b, a, e, d[g + 14], 9, -1019803690), e = md5_gg(e, f, b, a, d[g + 3], 14, -187363961), a = md5_gg(a, e, f, b, d[g + 8], 20, 1163531501), b = md5_gg(b, a, e, f, d[g + 13], 5, -1444681467), f = md5_gg(f, b, a, e, d[g + 2], 9, -51403784), e = md5_gg(e, f, b, a, d[g + 7], 14, 1735328473), a = md5_gg(a, e, f, b, d[g + 12], 20, -1926607734), b = md5_hh(b, a, e, f, d[g + 5], 4, -378558), f = md5_hh(f, b, a, e, d[g + 8], 11, -2022574463), e = md5_hh(e, f, b, a, d[g +
        11], 16, 1839030562), a = md5_hh(a, e, f, b, d[g + 14], 23, -35309556), b = md5_hh(b, a, e, f, d[g + 1], 4, -1530992060), f = md5_hh(f, b, a, e, d[g + 4], 11, 1272893353), e = md5_hh(e, f, b, a, d[g + 7], 16, -155497632), a = md5_hh(a, e, f, b, d[g + 10], 23, -1094730640), b = md5_hh(b, a, e, f, d[g + 13], 4, 681279174), f = md5_hh(f, b, a, e, d[g + 0], 11, -358537222), e = md5_hh(e, f, b, a, d[g + 3], 16, -722521979), a = md5_hh(a, e, f, b, d[g + 6], 23, 76029189), b = md5_hh(b, a, e, f, d[g + 9], 4, -640364487), f = md5_hh(f, b, a, e, d[g + 12], 11, -421815835), e = md5_hh(e, f, b, a, d[g + 15], 16, 530742520), a = md5_hh(a, e, f,
        b, d[g + 2], 23, -995338651), b = md5_ii(b, a, e, f, d[g + 0], 6, -198630844), f = md5_ii(f, b, a, e, d[g + 7], 10, 1126891415), e = md5_ii(e, f, b, a, d[g + 14], 15, -1416354905), a = md5_ii(a, e, f, b, d[g + 5], 21, -57434055), b = md5_ii(b, a, e, f, d[g + 12], 6, 1700485571), f = md5_ii(f, b, a, e, d[g + 3], 10, -1894986606), e = md5_ii(e, f, b, a, d[g + 10], 15, -1051523), a = md5_ii(a, e, f, b, d[g + 1], 21, -2054922799), b = md5_ii(b, a, e, f, d[g + 8], 6, 1873313359), f = md5_ii(f, b, a, e, d[g + 15], 10, -30611744), e = md5_ii(e, f, b, a, d[g + 6], 15, -1560198380), a = md5_ii(a, e, f, b, d[g + 13], 21, 1309151649), b = md5_ii(b,
        a, e, f, d[g + 4], 6, -145523070), f = md5_ii(f, b, a, e, d[g + 11], 10, -1120210379), e = md5_ii(e, f, b, a, d[g + 2], 15, 718787259), a = md5_ii(a, e, f, b, d[g + 9], 21, -343485551), b = safe_add(b, h), a = safe_add(a, k), e = safe_add(e, l), f = safe_add(f, m);
    return[b, a, e, f]
}
function md5_cmn(d, c, b, a, e, f) {
    return safe_add(bit_rol(safe_add(safe_add(c, d), safe_add(a, f)), e), b)
}
function md5_ff(d, c, b, a, e, f, g) {
    return md5_cmn(c & b | ~c & a, d, c, e, f, g)
}
function md5_gg(d, c, b, a, e, f, g) {
    return md5_cmn(c & a | b & ~a, d, c, e, f, g)
}
function md5_hh(d, c, b, a, e, f, g) {
    return md5_cmn(c ^ b ^ a, d, c, e, f, g)
}
function md5_ii(d, c, b, a, e, f, g) {
    return md5_cmn(b ^ (c | ~a), d, c, e, f, g)
}
function safe_add(d, c) {
    var b = (d & 65535) + (c & 65535);
    return(d >> 16) + (c >> 16) + (b >> 16) << 16 | b & 65535
}
function bit_rol(d, c) {
    return d << c | d >>> 32 - c
};