var egret;
(function(c) {
	var d = function() {
		function c() {
			this._hashCode = c.hashCount++
		}
		Object.defineProperty(c.prototype, "hashCode", {
			get: function() {
				return this._hashCode
			},
			enumerable: !0,
			configurable: !0
		});
		c.hashCount = 1;
		return c
	}();
	c.HashObject = d;
	d.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a) {
			void 0 === a && (a = 300);
			c.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > a && (a = 1);
			this.autoDisposeTime = a;
			this.frameCount = 0
		}
		__extends(b, c);
		b.prototype._checkFrame = function() {
			this.frameCount--;
			0 >= this.frameCount && this.dispose()
		};
		Object.defineProperty(b.prototype, "length", {
			get: function() {
				return this._length
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.push = function(a) {
			var e = this.objectPool; - 1 == e.indexOf(a) && (e.push(a), this._length++, 0 == this.frameCount && (this.frameCount =
				this.autoDisposeTime, b._callBackList.push(this)))
		};
		b.prototype.pop = function() {
			if (0 == this._length) return null;
			this._length--;
			return this.objectPool.pop()
		};
		b.prototype.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var a = b._callBackList,
				e = a.indexOf(this); - 1 != e && a.splice(e, 1)
		};
		b._callBackList = [];
		return b
	}(c.HashObject);
	c.Recycler = d;
	d.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(c) {
	c.__START_TIME;
	c.getTimer = function() {
		return Date.now() - c.__START_TIME
	}
})(egret || (egret = {}));
(function(c) {
	c.__callLaterFunctionList = [];
	c.__callLaterThisList = [];
	c.__callLaterArgsList = [];
	c.callLater = function(d, f) {
		for (var b = [], a = 2; a < arguments.length; a++) b[a - 2] = arguments[a];
		c.__callLaterFunctionList.push(d);
		c.__callLaterThisList.push(f);
		c.__callLaterArgsList.push(b)
	};
	c.__callAsyncFunctionList = [];
	c.__callAsyncThisList = [];
	c.__callAsyncArgsList = [];
	c.__callAsync = function(d, f) {
		for (var b = [], a = 2; a < arguments.length; a++) b[a - 2] = arguments[a];
		c.__callAsyncFunctionList.push(d);
		c.__callAsyncThisList.push(f);
		c.__callAsyncArgsList.push(b)
	}
})(egret || (egret = {}));
var egret_dom;
(function(c) {
	function d() {
		for (var c = document.createElement("div").style, b = ["t", "webkitT", "msT", "MozT", "OT"], a = 0; a < b.length; a++)
			if (b[a] + "ransform" in c) return b[a];
		return b[0]
	}
	c.header = "";
	c.getHeader = d;
	c.getTrans = function(f) {
		"" == c.header && (c.header = d());
		return c.header + f.substring(1, f.length)
	}
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			d.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = a;
			this._bubbles = e;
			this._cancelable = b
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "type", {
			get: function() {
				return this._type
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "bubbles", {
			get: function() {
				return this._bubbles
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "cancelable", {
			get: function() {
				return this._cancelable
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "eventPhase", {
			get: function() {
				return this._eventPhase
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "currentTarget", {
			get: function() {
				return this._currentTarget
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "target", {
			get: function() {
				return this._target
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.isDefaultPrevented =
			function() {
				return this._isDefaultPrevented
			};
		b.prototype.preventDefault = function() {
			this._cancelable && (this._isDefaultPrevented = !0)
		};
		b.prototype.stopPropagation = function() {
			this._bubbles && (this._isPropagationStopped = !0)
		};
		b.prototype.stopImmediatePropagation = function() {
			this._bubbles && (this._isPropagationImmediateStopped = !0)
		};
		b.prototype._reset = function() {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target =
				null, this._eventPhase = 2)
		};
		b._dispatchByTarget = function(a, e, b, d, f, g) {
			void 0 === f && (f = !1);
			void 0 === g && (g = !1);
			var h = a.eventRecycler;
			h || (h = a.eventRecycler = new c.Recycler);
			var m = h.pop();
			m ? m._type = b : m = new a(b);
			m._bubbles = f;
			m._cancelable = g;
			if (d)
				for (var k in d) m[k] = d[k], null !== m[k] && (d[k] = null);
			a = e.dispatchEvent(m);
			h.push(m);
			return a
		};
		b._getPropertyData = function(a) {
			var e = a._props;
			e || (e = a._props = {});
			return e
		};
		b.dispatchEvent = function(a, e, l, c) {
			void 0 === l && (l = !1);
			var d = b._getPropertyData(b);
			c && (d.data = c);
			b._dispatchByTarget(b,
				a, e, d, l)
		};
		b.ADDED_TO_STAGE = "addedToStage";
		b.REMOVED_FROM_STAGE = "removedFromStage";
		b.ADDED = "added";
		b.REMOVED = "removed";
		b.COMPLETE = "complete";
		b.ENTER_FRAME = "enterFrame";
		b.RENDER = "render";
		b.FINISH_RENDER = "finishRender";
		b.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
		b.LEAVE_STAGE = "leaveStage";
		b.RESIZE = "resize";
		b.CHANGE = "change";
		b.ACTIVATE = "activate";
		b.DEACTIVATE = "deactivate";
		b.CLOSE = "close";
		b.CONNECT = "connect";
		return b
	}(c.HashObject);
	c.Event = d;
	d.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a, e, b) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			c.call(this, a, e, b);
			this._status = 0
		}
		__extends(b, c);
		Object.defineProperty(b.prototype, "status", {
			get: function() {
				return this._status
			},
			enumerable: !0,
			configurable: !0
		});
		b.dispatchHTTPStatusEvent = function(a, e) {
			null == b.httpStatusEvent && (b.httpStatusEvent = new b(b.HTTP_STATUS));
			b.httpStatusEvent._status = e;
			a.dispatchEvent(b.httpStatusEvent)
		};
		b.HTTP_STATUS = "httpStatus";
		b.httpStatusEvent = null;
		return b
	}(c.Event);
	c.HTTPStatusEvent =
		d;
	d.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			d.call(this, a, e, b)
		}
		__extends(b, d);
		b.dispatchIOErrorEvent = function(a) {
			c.Event._dispatchByTarget(b, a, b.IO_ERROR)
		};
		b.IO_ERROR = "ioError";
		return b
	}(c.Event);
	c.IOErrorEvent = d;
	d.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b, c, n, g, h, m, k, p) {
			void 0 === e && (e = !0);
			void 0 === b && (b = !0);
			void 0 === c && (c = 0);
			void 0 === n && (n = 0);
			void 0 === g && (g = 0);
			void 0 === h && (h = !1);
			void 0 === m && (m = !1);
			void 0 === p && (p = !1);
			d.call(this, a, e, b);
			this._stageY = this._stageX = 0;
			this.touchPointID = c;
			this._stageX = n;
			this._stageY = g;
			this.ctrlKey = h;
			this.altKey = m;
			this.touchDown = p
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "stageX", {
			get: function() {
				return this._stageX
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype,
			"stageY", {
				get: function() {
					return this._stageY
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(b.prototype, "localX", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "localY", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).y
			},
			enumerable: !0,
			configurable: !0
		});
		b.dispatchTouchEvent = function(a, e, l, d, f, g, h, m, k) {
			void 0 === l && (l = 0);
			void 0 === d && (d = 0);
			void 0 === f && (f = 0);
			void 0 === g && (g = !1);
			void 0 === h && (h = !1);
			void 0 === m && (m = !1);
			void 0 === k && (k = !1);
			var p = c.Event._getPropertyData(b);
			p.touchPointID = l;
			p._stageX = d;
			p._stageY = f;
			p.ctrlKey = g;
			p.altKey = h;
			p.shiftKey = m;
			p.touchDown = k;
			c.Event._dispatchByTarget(b, a, e, p, !0, !0)
		};
		b.TOUCH_TAP = "touchTap";
		b.TOUCH_MOVE = "touchMove";
		b.TOUCH_BEGIN = "touchBegin";
		b.TOUCH_END = "touchEnd";
		b.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		b.TOUCH_ROLL_OUT = "touchRollOut";
		b.TOUCH_ROLL_OVER = "touchRollOver";
		b.TOUCH_OUT =
			"touchOut";
		b.TOUCH_OVER = "touchOver";
		return b
	}(c.Event);
	c.TouchEvent = d;
	d.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			d.call(this, a, e, b)
		}
		__extends(b, d);
		b.dispatchTimerEvent = function(a, e) {
			c.Event._dispatchByTarget(b, a, e)
		};
		b.TIMER = "timer";
		b.TIMER_COMPLETE = "timerComplete";
		return b
	}(c.Event);
	c.TimerEvent = d;
	d.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b, c, n) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			void 0 === c && (c = 0);
			void 0 === n && (n = 0);
			d.call(this, a, e, b);
			this.bytesLoaded = c;
			this.bytesTotal = n
		}
		__extends(b, d);
		b.dispatchProgressEvent = function(a, e, l, d) {
			void 0 === l && (l = 0);
			void 0 === d && (d = 0);
			c.Event._dispatchByTarget(b, a, e, {
				bytesLoaded: l,
				bytesTotal: d
			})
		};
		b.PROGRESS = "progress";
		b.SOCKET_DATA = "socketData";
		return b
	}(c.Event);
	c.ProgressEvent = d;
	d.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.CAPTURING_PHASE = 1;
		c.AT_TARGET = 2;
		c.BUBBLING_PHASE = 3;
		return c
	}();
	c.EventPhase = d;
	d.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			void 0 === a && (a = null);
			d.call(this);
			this._eventTarget = a ? a : this
		}
		__extends(b, d);
		b.prototype.addEventListener = function(a, e, b, d, f) {
			void 0 === d && (d = !1);
			void 0 === f && (f = 0);
			"undefined" === typeof d && (d = !1);
			"undefined" === typeof f && (f = 0);
			e || c.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
			var g = d[a];
			g || (g = d[a] = []);
			this._insertEventBin(g, e, b, f)
		};
		b.prototype._insertEventBin = function(a, e, b, c, d) {
			void 0 === d && (d = void 0);
			for (var f = -1, h = a.length, m = 0; m < h; m++) {
				var k = a[m];
				if (k.listener === e && k.thisObject === b && k.display === d) return !1; - 1 == f && k.priority < c && (f = m)
			}
			e = {
				listener: e,
				thisObject: b,
				priority: c
			};
			d && (e.display = d); - 1 != f ? a.splice(f, 0, e) : a.push(e);
			return !0
		};
		b.prototype.removeEventListener = function(a, e, b, c) {
			void 0 === c && (c = !1);
			if (c = c ? this._captureEventsMap : this._eventsMap) {
				var d = c[a];
				d && (this._removeEventBin(d,
					e, b), 0 == d.length && delete c[a])
			}
		};
		b.prototype._removeEventBin = function(a, e, b, c) {
			void 0 === c && (c = void 0);
			for (var d = a.length, f = 0; f < d; f++) {
				var h = a[f];
				if (h.listener === e && h.thisObject === b && h.display === c) return a.splice(f, 1), !0
			}
			return !1
		};
		b.prototype.hasEventListener = function(a) {
			return this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a]
		};
		b.prototype.willTrigger = function(a) {
			return this.hasEventListener(a)
		};
		b.prototype.dispatchEvent = function(a) {
			a._reset();
			a._target = this._eventTarget;
			a._currentTarget = this._eventTarget;
			return this._notifyListener(a)
		};
		b.prototype._notifyListener = function(a) {
			var e = 1 == a._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!e) return !0;
			e = e[a._type];
			if (!e) return !0;
			var b = e.length;
			if (0 == b) return !0;
			for (var e = e.concat(), c = 0; c < b; c++) {
				var d = e[c];
				d.listener.call(d.thisObject, a);
				if (a._isPropagationImmediateStopped) break
			}
			return !a._isDefaultPrevented
		};
		b.prototype.dispatchEventWith = function(a, e, b) {
			void 0 === e && (e = !1);
			c.Event.dispatchEvent(this, a, e, b)
		};
		return b
	}(c.HashObject);
	c.EventDispatcher = d;
	d.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this.reuseEvent = new c.Event("")
		}
		__extends(b, d);
		b.prototype.run = function() {
			c.Ticker.getInstance().run();
			c.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			c.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		b.prototype.renderLoop = function(a) {
			if (0 < c.__callLaterFunctionList.length) {
				var e = c.__callLaterFunctionList;
				c.__callLaterFunctionList = [];
				var l = c.__callLaterThisList;
				c.__callLaterThisList = [];
				var d = c.__callLaterArgsList;
				c.__callLaterArgsList = []
			}
			a = this.stage;
			var f = b.cachedEvent;
			f._type = c.Event.RENDER;
			this.dispatchEvent(f);
			c.Stage._invalidateRenderFlag && (this.broadcastRender(), c.Stage._invalidateRenderFlag = !1);
			e && this.doCallLaterList(e, l, d);
			0 < c.__callAsyncFunctionList.length && this.doCallAsyncList();
			e = this.rendererContext;
			e.onRenderStart();
			e.clearScreen();
			a._updateTransform();
			f._type = c.Event.FINISH_UPDATE_TRANSFORM;
			this.dispatchEvent(f);
			a._draw(e);
			f._type = c.Event.FINISH_RENDER;
			this.dispatchEvent(f);
			e.onRenderFinish()
		};
		b.prototype.broadcastEnterFrame = function(a) {
			a = this.reuseEvent;
			a._type = c.Event.ENTER_FRAME;
			this.dispatchEvent(a);
			for (var e = c.DisplayObject._enterFrameCallBackList.concat(), b = e.length, d = 0; d < b; d++) {
				var f = e[d];
				a._target = f.display;
				a._currentTarget = f.display;
				f.listener.call(f.thisObject, a)
			}
			e = c.Recycler._callBackList;
			for (d = e.length - 1; 0 <= d; d--) e[d]._checkFrame()
		};
		b.prototype.broadcastRender = function() {
			var a = this.reuseEvent;
			a._type = c.Event.RENDER;
			for (var e = c.DisplayObject._renderCallBackList.concat(),
					b = e.length, d = 0; d < b; d++) {
				var f = e[d],
					g = f.display;
				a._target = g;
				a._currentTarget = g;
				f.listener.call(f.thisObject, a)
			}
		};
		b.prototype.doCallLaterList = function(a, e, b) {
			for (var c = a.length, d = 0; d < c; d++) {
				var f = a[d];
				null != f && f.apply(e[d], b[d])
			}
		};
		b.prototype.doCallAsyncList = function() {
			var a = c.__callAsyncFunctionList.concat(),
				e = c.__callAsyncThisList.concat(),
				b = c.__callAsyncArgsList.concat();
			c.__callAsyncFunctionList.length = 0;
			c.__callAsyncThisList.length = 0;
			for (var d = c.__callAsyncArgsList.length = 0; d < a.length; d++) {
				var f =
					a[d];
				null != f && f.apply(e[d], b[d])
			}
		};
		b.DEVICE_PC = "web";
		b.DEVICE_MOBILE = "native";
		b.RUNTIME_HTML5 = "runtime_html5";
		b.RUNTIME_NATIVE = "runtime_native";
		b.cachedEvent = new c.Event("");
		return b
	}(c.EventDispatcher);
	c.MainContext = d;
	d.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
		if (!this.navigator) return !0;
		var c = navigator.userAgent.toLowerCase();
		return -1 != c.indexOf("mobile") || -1 != c.indexOf("android")
	},
	testRuntimeType = function() {
		return this.navigator ? !0 : !1
	};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(c) {
	var d = function() {
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
			c.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new c.TextField, this._txt.size = 28, this._txt.multiline = !0, c.MainContext.instance.stage.addChild(this._txt));
			var b = c.MainContext.instance;
			b.addEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
			b.addEventListener(c.Event.RENDER, this.onStartRender, this);
			b.addEventListener(c.Event.FINISH_RENDER, this.onFinishRender, this);
			b.addEventListener(c.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		d.prototype.onEnterFrame = function(b) {
			this._lastTime = c.getTimer()
		};
		d.prototype.onStartRender = function(b) {
			b = c.getTimer();
			this._logicPerformanceCost = b - this._lastTime;
			this._lastTime = b
		};
		d.prototype.onFinishUpdateTransform =
			function(b) {
				b = c.getTimer();
				this._updateTransformPerformanceCost = b - this._lastTime;
				this._lastTime = b
			};
		d.prototype.onFinishRender = function(b) {
			b = c.getTimer();
			this._renderPerformanceCost = b - this._lastTime;
			this._lastTime = b
		};
		d.prototype.update = function(b) {
			this._tick++;
			this._totalDeltaTime += b;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				b = (this._preDrawCount - 1).toString();
				var a = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
					"," + Math.ceil(c.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + b + "\ncost:" + a + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		d.prototype.onDrawImage = function() {
			this._preDrawCount++
		};
		return d
	}();
	c.Profiler = d;
	d.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(b, d);
		b.prototype.run = function() {
			c.__START_TIME = (new Date).getTime();
			c.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		b.prototype.update = function(a) {
			var e = this.callBackList.concat(),
				b = e.length;
			a *= this._timeScale;
			a *= this._timeScale;
			for (var c = 0; c < b; c++) {
				var d = e[c];
				d.listener.call(d.thisObject, a)
			}
		};
		b.prototype.register = function(a, e, b) {
			void 0 === b &&
				(b = 0);
			this._insertEventBin(this.callBackList, a, e, b)
		};
		b.prototype.unregister = function(a, e) {
			this._removeEventBin(this.callBackList, a, e)
		};
		b.prototype.setTimeout = function(a, e, b) {
			for (var d = [], f = 3; f < arguments.length; f++) d[f - 3] = arguments[f];
			c.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			c.setTimeout.apply(null, [a, e, b].concat(d))
		};
		b.prototype.setTimeScale = function(a) {
			this._timeScale = a
		};
		b.prototype.getTimeScale = function() {
			return this._timeScale
		};
		b.prototype.pause = function() {
			this._paused = !0
		};
		b.prototype.resume = function() {
			this._paused = !1
		};
		b.getInstance = function() {
			null == b.instance && (b.instance = new b);
			return b.instance
		};
		return b
	}(c.EventDispatcher);
	c.Ticker = d;
	d.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.LEFT = "left";
		c.RIGHT = "right";
		c.CENTER = "center";
		c.JUSTIFY = "justify";
		c.CONTENT_JUSTIFY = "contentJustify";
		return c
	}();
	c.HorizontalAlign = d;
	d.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.TOP = "top";
		c.BOTTOM = "bottom";
		c.MIDDLE = "middle";
		c.JUSTIFY = "justify";
		c.CONTENT_JUSTIFY = "contentJustify";
		return c
	}();
	c.VerticalAlign = d;
	d.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e) {
			void 0 === e && (e = 0);
			d.call(this);
			this._currentCount = 0;
			this.delay = a;
			this.repeatCount = e
		}
		__extends(b, d);
		b.prototype.currentCount = function() {
			return this._currentCount
		};
		Object.defineProperty(b.prototype, "running", {
			get: function() {
				return this._running
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.reset = function() {
			this.stop();
			this._currentCount = 0
		};
		b.prototype.start = function() {
			this._running || (this.lastTime = c.getTimer(), 0 != this._currentCount && (this._currentCount =
				0), c.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		b.prototype.stop = function() {
			this._running && (c.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		b.prototype.onEnterFrame = function(a) {
			a = c.getTimer();
			a - this.lastTime > this.delay && (this.lastTime = a, this._currentCount++, c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER_COMPLETE)))
		};
		return b
	}(c.EventDispatcher);
	c.Timer = d;
	d.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(c) {
	function d(c) {
		c = c.prototype ? c.prototype : c.__proto__;
		if (c.hasOwnProperty("__class__")) return c.__class__;
		var b = c.constructor.toString(),
			a = b.indexOf("("),
			b = b.substring(9, a);
		Object.defineProperty(c, "__class__", {
			value: b,
			enumerable: !1,
			writable: !0
		});
		return b
	}
	c.getQualifiedClassName = d;
	c.getQualifiedSuperclassName = function(c) {
		c = c.prototype ? c.prototype : c.__proto__;
		if (c.hasOwnProperty("__superclass__")) return c.__superclass__;
		var b = Object.getPrototypeOf(c);
		if (null == b) return null;
		b = d(b.constructor);
		if (!b) return null;
		Object.defineProperty(c, "__superclass__", {
			value: b,
			enumerable: !1,
			writable: !0
		});
		return b
	}
})(egret || (egret = {}));
(function(c) {
	var d = {};
	c.getDefinitionByName = function(c) {
		if (!c) return null;
		var b = d[c];
		if (b) return b;
		for (var a = c.split("."), e = a.length, b = __global, l = 0; l < e; l++)
			if (b = b[a[l]], !b) return null;
		return d[c] = b
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(c) {
	function d(a) {
		for (var e in f) {
			var b = f[e];
			b.delay -= a;
			0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete f[e])
		}
	}
	var f = {},
		b = 0;
	c.setTimeout = function(a, e, l) {
		for (var q = [], n = 3; n < arguments.length; n++) q[n - 3] = arguments[n];
		q = {
			listener: a,
			thisObject: e,
			delay: l,
			params: q
		};
		0 == b && c.Ticker.getInstance().register(d, null);
		b++;
		f[b] = q;
		return b
	};
	c.clearTimeout = function(a) {
		delete f[a]
	}
})(egret || (egret = {}));
(function(c) {
	c.hasDefinition = function(d) {
		return c.getDefinitionByName(d) ? !0 : !1
	}
})(egret || (egret = {}));
(function(c) {
	c.toColorString = function(c) {
		if (isNaN(c) || 0 > c) c = 0;
		16777215 < c && (c = 16777215);
		for (c = c.toString(16).toUpperCase(); 6 > c.length;) c = "0" + c;
		return "#" + c
	}
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b, c, n, g) {
			void 0 === a && (a = 1);
			void 0 === e && (e = 0);
			void 0 === b && (b = 0);
			void 0 === c && (c = 1);
			void 0 === n && (n = 0);
			void 0 === g && (g = 0);
			d.call(this);
			this.a = a;
			this.b = e;
			this.c = b;
			this.d = c;
			this.tx = n;
			this.ty = g
		}
		__extends(b, d);
		b.prototype.prepend = function(a, e, b, c, d, f) {
			var h = this.tx;
			if (1 != a || 0 != e || 0 != b || 1 != c) {
				var m = this.a,
					k = this.c;
				this.a = m * a + this.b * b;
				this.b = m * e + this.b * c;
				this.c = k * a + this.d * b;
				this.d = k * e + this.d * c
			}
			this.tx = h * a + this.ty * b + d;
			this.ty = h * e + this.ty * c + f;
			return this
		};
		b.prototype.append =
			function(a, e, b, c, d, f) {
				var h = this.a,
					m = this.b,
					k = this.c,
					p = this.d;
				if (1 != a || 0 != e || 0 != b || 1 != c) this.a = a * h + e * k, this.b = a * m + e * p, this.c = b * h + c * k, this.d = b * m + c * p;
				this.tx = d * h + f * k + this.tx;
				this.ty = d * m + f * p + this.ty;
				return this
			};
		b.prototype.prependTransform = function(a, e, l, c, d, f, h, m, k) {
			if (d % 360) {
				var p = d * b.DEG_TO_RAD;
				d = Math.cos(p);
				p = Math.sin(p)
			} else d = 1, p = 0;
			if (m || k) this.tx -= m, this.ty -= k;
			f || h ? (f *= b.DEG_TO_RAD, h *= b.DEG_TO_RAD, this.prepend(d * l, p * l, -p * c, d * c, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(f), Math.cos(f),
				a, e)) : this.prepend(d * l, p * l, -p * c, d * c, a, e);
			return this
		};
		b.prototype.appendTransform = function(a, e, l, c, d, f, h, m, k) {
			if (d % 360) {
				var p = d * b.DEG_TO_RAD;
				d = Math.cos(p);
				p = Math.sin(p)
			} else d = 1, p = 0;
			f || h ? (f *= b.DEG_TO_RAD, h *= b.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(f), Math.cos(f), a, e), this.append(d * l, p * l, -p * c, d * c, 0, 0)) : this.append(d * l, p * l, -p * c, d * c, a, e);
			if (m || k) this.tx -= m * this.a + k * this.c, this.ty -= m * this.b + k * this.d;
			return this
		};
		b.prototype.rotate = function(a) {
			var e = Math.cos(a);
			a = Math.sin(a);
			var b = this.a,
				c = this.c,
				d = this.tx;
			this.a = b * e - this.b * a;
			this.b = b * a + this.b * e;
			this.c = c * e - this.d * a;
			this.d = c * a + this.d * e;
			this.tx = d * e - this.ty * a;
			this.ty = d * a + this.ty * e;
			return this
		};
		b.prototype.skew = function(a, e) {
			a *= b.DEG_TO_RAD;
			e *= b.DEG_TO_RAD;
			this.append(Math.cos(e), Math.sin(e), -Math.sin(a), Math.cos(a), 0, 0);
			return this
		};
		b.prototype.scale = function(a, e) {
			this.a *= a;
			this.d *= e;
			this.c *= a;
			this.b *= e;
			this.tx *= a;
			this.ty *= e;
			return this
		};
		b.prototype.translate = function(a, e) {
			this.tx += a;
			this.ty += e;
			return this
		};
		b.prototype.identity = function() {
			this.a =
				this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this
		};
		b.prototype.identityMatrix = function(a) {
			this.a = a.a;
			this.b = a.b;
			this.c = a.c;
			this.d = a.d;
			this.tx = a.tx;
			this.ty = a.ty;
			return this
		};
		b.prototype.invert = function() {
			var a = this.a,
				e = this.b,
				b = this.c,
				c = this.d,
				d = this.tx,
				f = a * c - e * b;
			this.a = c / f;
			this.b = -e / f;
			this.c = -b / f;
			this.d = a / f;
			this.tx = (b * this.ty - c * d) / f;
			this.ty = -(a * this.ty - e * d) / f;
			return this
		};
		b.transformCoords = function(a, e, b) {
			var d = c.Point.identity;
			d.x = a.a * e + a.c * b + a.tx;
			d.y = a.d * b + a.b * e + a.ty;
			return d
		};
		b.prototype.toArray =
			function(a) {
				this.array || (this.array = new Float32Array(9));
				a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
				this.array[8] = 1;
				return this.array
			};
		b.identity = new b;
		b.DEG_TO_RAD = Math.PI / 180;
		return b
	}(c.HashObject);
	c.Matrix = d;
	d.prototype.__class__ =
		"egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a, e) {
			void 0 === a && (a = 0);
			void 0 === e && (e = 0);
			c.call(this);
			this.x = a;
			this.y = e
		}
		__extends(b, c);
		b.prototype.clone = function() {
			return new b(this.x, this.y)
		};
		b.prototype.equals = function(a) {
			return this.x == a.x && this.y == a.y
		};
		b.distance = function(a, e) {
			return Math.sqrt((a.x - e.x) * (a.x - e.x) + (a.y - e.y) * (a.y - e.y))
		};
		b.identity = new b(0, 0);
		return b
	}(c.HashObject);
	c.Point = d;
	d.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a, e, b, d) {
			void 0 === a && (a = 0);
			void 0 === e && (e = 0);
			void 0 === b && (b = 0);
			void 0 === d && (d = 0);
			c.call(this);
			this.x = a;
			this.y = e;
			this.width = b;
			this.height = d
		}
		__extends(b, c);
		Object.defineProperty(b.prototype, "right", {
			get: function() {
				return this.x + this.width
			},
			set: function(a) {
				this.width = a - this.x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "bottom", {
			get: function() {
				return this.y + this.height
			},
			set: function(a) {
				this.height = a - this.y
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.initialize = function(a, e, b, c) {
			this.x = a;
			this.y = e;
			this.width = b;
			this.height = c;
			return this
		};
		b.prototype.contains = function(a, e) {
			return this.x <= a && this.x + this.width >= a && this.y <= e && this.y + this.height >= e
		};
		b.prototype.intersects = function(a) {
			var e = a.right,
				b = a.bottom,
				c = this.right,
				d = this.bottom;
			return this.contains(a.x, a.y) || this.contains(a.x, b) || this.contains(e, a.y) || this.contains(e, b) || a.contains(this.x, this.y) || a.contains(this.x, d) || a.contains(c, this.y) || a.contains(c, d) ? !0 : !1
		};
		b.prototype.clone =
			function() {
				return new b(this.x, this.y, this.width, this.height)
			};
		b.prototype.containsPoint = function(a) {
			return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
		};
		b.identity = new b(0, 0, 0, 0);
		return b
	}(c.HashObject);
	c.Rectangle = d;
	d.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function d() {}
		d.fatal = function(b, a) {
			void 0 === a && (a = null);
			c.Logger.traceToConsole("Fatal", b, a);
			throw Error(c.Logger.getTraceCode("Fatal", b, a));
		};
		d.info = function(b, a) {
			void 0 === a && (a = null);
			c.Logger.traceToConsole("Info", b, a)
		};
		d.warning = function(b, a) {
			void 0 === a && (a = null);
			c.Logger.traceToConsole("Warning", b, a)
		};
		d.traceToConsole = function(b, a, e) {
			console.log(c.Logger.getTraceCode(b, a, e))
		};
		d.getTraceCode = function(b, a, e) {
			return "[" + b + "]" + a + ":" + (null == e ? "" : e)
		};
		return d
	}();
	c.Logger =
		d;
	d.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(b, d);
		b.getInstance = function() {
			b._instance || (b._instance = new b);
			return b._instance
		};
		b.prototype.parserXML = function(a) {
			for (var e = 0;
				"\n" == a.charAt(e) || "\t" == a.charAt(e) || "\r" == a.charAt(e) || " " == a.charAt(e);) e++;
			0 != e && (a = a.substring(e, a.length));
			this._isSupportDOMParser ?
				e = this._parser.parseFromString(a, "text/xml") : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(a));
			null == e && c.Logger.info("xml not found!");
			return e
		};
		b._instance = null;
		return b
	}(c.HashObject);
	c.SAXParser = d;
	d.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(a) {
		function e() {
			a.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			this._stageHeight = this._stageWidth = this._offSetY = 0
		}
		__extends(e, a);
		e.getInstance = function() {
			null == e.instance && (b.initialize(), e.instance = new e);
			return e.instance
		};
		e.prototype.setDesignSize = function(a, e, b) {
			this._designWidth = a;
			this._designHeight = e;
			b && (c.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
				this._setResolutionPolicy(b))
		};
		e.prototype._setResolutionPolicy = function(a) {
			this._resolutionPolicy = a;
			a.init(this);
			a._apply(this, this._designWidth, this._designHeight)
		};
		e.prototype.getScaleX = function() {
			return this._scaleX
		};
		e.prototype.getScaleY = function() {
			return this._scaleY
		};
		e.prototype.getOffSetY = function() {
			return this._offSetY
		};
		e.canvas_name = "egretCanvas";
		e.canvas_div_name = "gameDiv";
		return e
	}(c.HashObject);
	c.StageDelegate = d;
	d.prototype.__class__ = "egret.StageDelegate";
	var f = function() {
		function a(e,
			b) {
			this._containerStrategy = e;
			this._contentStrategy = b
		}
		a.prototype.init = function(a) {
			this._containerStrategy.init(a);
			this._contentStrategy.init(a)
		};
		a.prototype._apply = function(a, e, b) {
			this._containerStrategy._apply(a, e, b);
			this._contentStrategy._apply(a, e, b)
		};
		return a
	}();
	c.ResolutionPolicy = f;
	f.prototype.__class__ = "egret.ResolutionPolicy";
	var b = function() {
		function e() {}
		e.initialize = function() {
			e.EQUAL_TO_FRAME = new a
		};
		e.prototype.init = function(a) {};
		e.prototype._apply = function(a, e, b) {};
		e.prototype._setupContainer =
			function() {
				var a = document.body,
					e;
				a && (e = a.style) && (e.paddingTop = e.paddingTop || "0px", e.paddingRight = e.paddingRight || "0px", e.paddingBottom = e.paddingBottom || "0px", e.paddingLeft = e.paddingLeft || "0px", e.borderTop = e.borderTop || "0px", e.borderRight = e.borderRight || "0px", e.borderBottom = e.borderBottom || "0px", e.borderLeft = e.borderLeft || "0px", e.marginTop = e.marginTop || "0px", e.marginRight = e.marginRight || "0px", e.marginBottom = e.marginBottom || "0px", e.marginLeft = e.marginLeft || "0px")
			};
		return e
	}();
	c.ContainerStrategy = b;
	b.prototype.__class__ = "egret.ContainerStrategy";
	var a = function(a) {
		function e() {
			a.apply(this, arguments)
		}
		__extends(e, a);
		e.prototype._apply = function(a) {
			this._setupContainer()
		};
		return e
	}(b);
	c.EqualToFrame = a;
	a.prototype.__class__ = "egret.EqualToFrame";
	f = function() {
		function a() {}
		a.prototype.init = function(a) {};
		a.prototype._apply = function(a, e, b) {};
		a.prototype.setEgretSize = function(a, e, b, l, f, k) {
			void 0 === k && (k = 0);
			c.StageDelegate.getInstance()._stageWidth = Math.round(a);
			c.StageDelegate.getInstance()._stageHeight =
				Math.round(e);
			a = document.getElementById(d.canvas_div_name);
			a.style.width = b + "px";
			a.style.height = l + "px";
			a.style.top = k + "px"
		};
		a.prototype._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		a.prototype._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return a
	}();
	c.ContentStrategy = f;
	f.prototype.__class__ = "egret.ContentStrategy";
	var e = function(a) {
		function e(b) {
			void 0 === b && (b = 0);
			a.call(this);
			this.minWidth = b
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			e =
				this._getClientWidth();
			var l = this._getClientHeight(),
				c = l / b,
				d = e / c,
				f = 1;
			0 != this.minWidth && (f = Math.min(1, d / this.minWidth));
			this.setEgretSize(d / f, b, e, l * f);
			a._scaleX = c * f;
			a._scaleY = c * f
		};
		return e
	}(f);
	c.FixedHeight = e;
	e.prototype.__class__ = "egret.FixedHeight";
	e = function(a) {
		function e(b) {
			void 0 === b && (b = 0);
			a.call(this);
			this.minHeight = b
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			b = this._getClientWidth();
			var l = this._getClientHeight(),
				c = b / e,
				d = l / c,
				f = 1;
			0 != this.minHeight && (f = Math.min(1, d / this.minHeight));
			this.setEgretSize(e,
				d / f, b * f, l, b * (1 - f) / 2);
			a._scaleX = c * f;
			a._scaleY = c * f
		};
		return e
	}(f);
	c.FixedWidth = e;
	e.prototype.__class__ = "egret.FixedWidth";
	e = function(a) {
		function e(b, c) {
			a.call(this);
			this.width = b;
			this.height = c
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			b = this.width;
			var l = this.height,
				c = b / e;
			this.setEgretSize(e, l / c, b, l);
			a._scaleX = c;
			a._scaleY = c
		};
		return e
	}(f);
	c.FixedSize = e;
	e.prototype.__class__ = "egret.FixedSize";
	e = function(a) {
		function e() {
			a.call(this)
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			this.setEgretSize(e,
				b, e, b, Math.floor((e - e) / 2));
			a._scaleX = 1;
			a._scaleY = 1
		};
		return e
	}(f);
	c.NoScale = e;
	e.prototype.__class__ = "egret.NoScale";
	e = function(a) {
		function e() {
			a.call(this)
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			var c = this._getClientWidth(),
				l = this._getClientHeight(),
				d = c,
				f = l,
				q = d / e < f / b ? d / e : f / b,
				d = e * q,
				f = b * q,
				c = Math.floor((c - d) / 2);
			a._offSetY = Math.floor((l - f) / 2);
			this.setEgretSize(e, b / 1, 1 * d, f, c, a._offSetY);
			a._scaleX = 1 * q;
			a._scaleY = 1 * q
		};
		return e
	}(f);
	c.ShowAll = e;
	e.prototype.__class__ = "egret.ShowAll";
	f = function(a) {
		function e() {
			a.call(this)
		}
		__extends(e, a);
		e.prototype._apply = function(a, e, b) {
			var c = this._getClientWidth(),
				l = this._getClientHeight(),
				c = c / e,
				l = l / b;
			this.setEgretSize(e, b, e * c, b * l);
			a._scaleX = c;
			a._scaleY = l
		};
		return e
	}(f);
	c.FullScreen = f;
	f.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(b, d);
		b.getInstance = function() {
			null == b.instance && (b.instance = new b);
			return b.instance
		};
		b.prototype.addDrawArea = function(a) {
			this._drawAreaList.push(a)
		};
		b.prototype.clearDrawArea = function() {
			this._drawAreaList = []
		};
		b.prototype.drawImage = function(a, e, b, d, f, g, h, m, k, p, r) {
			void 0 === r && (r = void 0);
			h = h || 0;
			m = m || 0;
			var s = e._texture_to_render;
			if (null != s && 0 != g && 0 != f && 0 != k && 0 != p)
				if (0 != this._drawAreaList.length &&
					c.MainContext.instance.rendererContext._cacheCanvasContext) {
					var t = c.DisplayObject.getTransformBounds(e._getSize(c.Rectangle.identity), e._worldTransform);
					e._worldBounds.initialize(t.x, t.y, t.width, t.height);
					t = this._originalData;
					t.sourceX = b;
					t.sourceY = d;
					t.sourceWidth = f;
					t.sourceHeight = g;
					t.destX = h;
					t.destY = m;
					t.destWidth = k;
					t.destHeight = p;
					for (var v = this.getDrawAreaList(), x = 0; x < v.length; x++)
						if (!this.ignoreRender(e, v[x], t.destX, t.destY)) {
							a.drawImage(s, b, d, f, g, h, m, k, p, r);
							break
						}
				} else a.drawImage(s, b, d, f, g, h, m,
					k, p, r)
		};
		b.prototype.ignoreRender = function(a, e, b, c) {
			var d = a._worldBounds;
			b *= a._worldTransform.a;
			c *= a._worldTransform.d;
			return d.x + d.width + b <= e.x || d.x + b >= e.x + e.width || d.y + d.height + c <= e.y || d.y + c >= e.y + e.height ? !0 : !1
		};
		b.prototype.getDrawAreaList = function() {
			var a;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new c.Rectangle(0, 0, c.MainContext.instance.stage.stageWidth, c.MainContext.instance.stage.stageHeight)], c.MainContext.instance.stage.addEventListener(c.Event.RESIZE,
				this.onResize, this)), a = this._defaultDrawAreaList) : a = this._drawAreaList;
			return a
		};
		b.prototype.onResize = function() {
			c.MainContext.instance.stage.removeEventListener(c.Event.RESIZE, this.onResize, this);
			this._defaultDrawAreaList = null
		};
		return b
	}(c.HashObject);
	c.RenderFilter = d;
	d.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function d() {}
		d.mapClass = function(b, a, e) {
			void 0 === e && (e = "");
			b = this.getKey(b) + "#" + e;
			this.mapClassDic[b] = a
		};
		d.getKey = function(b) {
			return "string" == typeof b ? b : c.getQualifiedClassName(b)
		};
		d.mapValue = function(b, a, e) {
			void 0 === e && (e = "");
			b = this.getKey(b) + "#" + e;
			this.mapValueDic[b] = a
		};
		d.hasMapRule = function(b, a) {
			void 0 === a && (a = "");
			var e = this.getKey(b) + "#" + a;
			return this.mapValueDic[e] || this.mapClassDic[e] ? !0 : !1
		};
		d.getInstance = function(b, a) {
			void 0 === a && (a = "");
			var e = this.getKey(b) + "#" +
				a;
			if (this.mapValueDic[e]) return this.mapValueDic[e];
			var c = this.mapClassDic[e];
			if (c) return c = new c, this.mapValueDic[e] = c, delete this.mapClassDic[e], c;
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + e + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		d.mapClassDic = {};
		d.mapValueDic = {};
		return d
	}();
	c.Injector = d;
	d.prototype.__class__ = "egret.Injector"
})(egret ||
	(egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.NORMAL = "normal";
		c.ADD = "add";
		return c
	}();
	c.BlendMode = d;
	d.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
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
			this._worldTransform = new c.Matrix;
			this._worldBounds = new c.Rectangle(0, 0, 0, 0);
			this._cacheBounds = new c.Rectangle(0, 0, 0, 0)
		}
		__extends(b, d);
		b.prototype._setDirty = function() {
			this._normalDirty = !0
		};
		b.prototype.getDirty = function() {
			return this._normalDirty || this._sizeDirty
		};
		b.prototype._setParentSizeDirty = function() {
			var a = this._parent;
			!a || a._hasWidthSet || a._hasHeightSet || a._setSizeDirty()
		};
		b.prototype._setSizeDirty =
			function() {
				this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
			};
		b.prototype._clearDirty = function() {
			this._normalDirty = !1
		};
		b.prototype._clearSizeDirty = function() {
			this._sizeDirty = !1
		};
		Object.defineProperty(b.prototype, "parent", {
			get: function() {
				return this._parent
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._parentChanged = function(a) {
			this._parent = a
		};
		Object.defineProperty(b.prototype, "x", {
			get: function() {
				return this._x
			},
			set: function(a) {
				this._setX(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setX = function(a) {
			c.NumberUtils.isNumber(a) && this._x != a && (this._x = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b.prototype, "y", {
			get: function() {
				return this._y
			},
			set: function(a) {
				this._setY(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setY = function(a) {
			c.NumberUtils.isNumber(a) && this._y != a && (this._y = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b.prototype, "scaleX", {
			get: function() {
				return this._scaleX
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) &&
					this._scaleX != a && (this._scaleX = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "scaleY", {
			get: function() {
				return this._scaleY
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._scaleY != a && (this._scaleY = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "anchorOffsetX", {
			get: function() {
				return this._anchorOffsetX
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._anchorOffsetX !=
					a && (this._anchorOffsetX = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._anchorOffsetY != a && (this._anchorOffsetY = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "anchorX", {
			get: function() {
				return this._anchorX
			},
			set: function(a) {
				this._setAnchorX(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setAnchorX = function(a) {
			c.NumberUtils.isNumber(a) && this._anchorX != a && (this._anchorX = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b.prototype, "anchorY", {
			get: function() {
				return this._anchorY
			},
			set: function(a) {
				this._setAnchorY(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setAnchorY = function(a) {
			c.NumberUtils.isNumber(a) && this._anchorY != a && (this._anchorY = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b.prototype, "visible", {
			get: function() {
				return this._visible
			},
			set: function(a) {
				this._setVisible(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setVisible = function(a) {
			this._visible != a && (this._visible = a, this._setSizeDirty())
		};
		Object.defineProperty(b.prototype, "rotation", {
			get: function() {
				return this._rotation
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._rotation != a && (this._rotation = a, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) &&
					this._alpha != a && (this._alpha = a, this._setDirty(), this._setCacheDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "skewX", {
			get: function() {
				return this._skewX
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._skewX != a && (this._skewX = a, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "skewY", {
			get: function() {
				return this._skewY
			},
			set: function(a) {
				c.NumberUtils.isNumber(a) && this._skewY != a && (this._skewY = a, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "touchEnabled", {
			get: function() {
				return this._touchEnabled
			},
			set: function(a) {
				this._setTouchEnabled(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setTouchEnabled = function(a) {
			this._touchEnabled = a
		};
		Object.defineProperty(b.prototype, "scrollRect", {
			get: function() {
				return this._scrollRect
			},
			set: function(a) {
				this._setScrollRect(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setScrollRect = function(a) {
			this._scrollRect = a;
			this._setSizeDirty()
		};
		Object.defineProperty(b.prototype,
			"measuredWidth", {
				get: function() {
					return this._measureBounds().width
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(b.prototype, "measuredHeight", {
			get: function() {
				return this._measureBounds().height
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "explicitWidth", {
			get: function() {
				return this._explicitWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "explicitHeight", {
			get: function() {
				return this._explicitHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype,
			"width", {
				get: function() {
					return this._getSize(c.Rectangle.identity).width
				},
				set: function(a) {
					this._setWidth(a)
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(b.prototype, "height", {
			get: function() {
				return this._getSize(c.Rectangle.identity).height
			},
			set: function(a) {
				this._setHeight(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setWidth = function(a) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitWidth = a;
			this._hasWidthSet = c.NumberUtils.isNumber(a)
		};
		b.prototype._setHeight = function(a) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitHeight = a;
			this._hasHeightSet = c.NumberUtils.isNumber(a)
		};
		b.prototype._draw = function(a) {
			if (this._visible && !this.drawCacheTexture(a)) {
				this._colorTransform && a.setGlobalColorTransform(this._colorTransform.matrix);
				a.setAlpha(this.worldAlpha, this.blendMode);
				a.setTransform(this._worldTransform);
				var e = this.mask || this._scrollRect;
				e && a.pushMask(e);
				this._render(a);
				e && a.popMask();
				this._colorTransform && a.setGlobalColorTransform(null)
			}
			this.destroyCacheBounds()
		};
		b.prototype.drawCacheTexture =
			function(a) {
				if (!1 == this._cacheAsBitmap) return !1;
				if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight)) this._cacheDirty = !this._makeBitmapCache();
				if (null == this._texture_to_render) return !1;
				var e = this._texture_to_render,
					b = e._offsetX,
					d = e._offsetY,
					f = e._textureWidth,
					e = e._textureHeight;
				this._updateTransform();
				a.setAlpha(this.worldAlpha, this.blendMode);
				a.setTransform(this._worldTransform);
				var g = c.MainContext.instance.rendererContext.texture_scale_factor;
				c.RenderFilter.getInstance().drawImage(a, this, 0, 0, f * g, e * g, b, d, f, e);
				return !0
			};
		b.prototype._updateTransform = function() {
			this._calculateWorldTransform()
		};
		b.prototype._calculateWorldTransform = function() {
			var a = this._worldTransform,
				e = this._parent;
			a.identityMatrix(e._worldTransform);
			this._getMatrix(a);
			var b = this._scrollRect;
			b && a.append(1, 0, 0, 1, -b.x, -b.y);
			this.worldAlpha = e.worldAlpha * this._alpha
		};
		b.prototype._render = function(a) {};
		b.prototype.getBounds =
			function(a, e) {
				void 0 === e && (e = !0);
				var b = this._measureBounds(),
					d = this._hasWidthSet ? this._explicitWidth : b.width,
					f = this._hasHeightSet ? this._explicitHeight : b.height;
				this._rectW = b.width;
				this._rectH = b.height;
				this._clearSizeDirty();
				var g = b.x,
					b = b.y,
					h = 0,
					m = 0;
				e && (0 != this._anchorX || 0 != this._anchorY ? (h = d * this._anchorX, m = f * this._anchorY) : (h = this._anchorOffsetX, m = this._anchorOffsetY));
				this._cacheBounds.initialize(g - h, b - m, d, f);
				d = this._cacheBounds;
				a || (a = new c.Rectangle);
				return a.initialize(d.x, d.y, d.width, d.height)
			};
		b.prototype.destroyCacheBounds = function() {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0
		};
		b.prototype._getConcatenatedMatrix = function() {
			for (var a = b.identityMatrixForGetConcatenated.identity(), e = this; null != e;) {
				if (0 != e._anchorX || 0 != e._anchorY) {
					var l = e._getSize(c.Rectangle.identity);
					a.prependTransform(e._x, e._y, e._scaleX, e._scaleY, e._rotation, e._skewX, e._skewY, l.width * e._anchorX, l.height * e._anchorY)
				} else a.prependTransform(e._x, e._y, e._scaleX, e._scaleY,
					e._rotation, e._skewX, e._skewY, e._anchorOffsetX, e._anchorOffsetY);
				e = e._parent
			}
			return a
		};
		b.prototype.localToGlobal = function(a, e, b) {
			void 0 === a && (a = 0);
			void 0 === e && (e = 0);
			var d = this._getConcatenatedMatrix();
			d.append(1, 0, 0, 1, a, e);
			b || (b = new c.Point);
			b.x = d.tx;
			b.y = d.ty;
			return b
		};
		b.prototype.globalToLocal = function(a, e, b) {
			void 0 === a && (a = 0);
			void 0 === e && (e = 0);
			var d = this._getConcatenatedMatrix();
			d.invert();
			d.append(1, 0, 0, 1, a, e);
			b || (b = new c.Point);
			b.x = d.tx;
			b.y = d.ty;
			return b
		};
		b.prototype.hitTest = function(a, e, b) {
			void 0 ===
				b && (b = !1);
			if (!this._visible || !b && !this._touchEnabled) return null;
			b = this._getSize(c.Rectangle.identity);
			return 0 <= a && a < b.width && 0 <= e && e < b.height ? this.mask || this._scrollRect ? this._scrollRect && a > this._scrollRect.x && e > this._scrollRect.y && a < this._scrollRect.x + this._scrollRect.width && e < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= e && e < this.mask.y + this.mask.height ? this : null : this : null
		};
		b.prototype.hitTestPoint = function(a, e, b) {
			a = this.globalToLocal(a,
				e);
			return b ? (this._hitTestPointTexture || (this._hitTestPointTexture = new c.RenderTexture), b = this._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(a.x - this._hitTestPointTexture._offsetX, a.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(a.x, a.y, !0)
		};
		b.prototype._getMatrix = function(a) {
			a || (a = c.Matrix.identity.identity());
			var e, b;
			b = this._getOffsetPoint();
			e = b.x;
			b = b.y;
			var d = this.__hack_local_matrix;
			d ? (a.append(d.a, d.b, d.c, d.d, d.tx, d.ty), a.append(1, 0, 0, 1, -e, -b)) : a.appendTransform(this._x,
				this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e, b);
			return a
		};
		b.prototype._getSize = function(a) {
			return this._hasHeightSet && this._hasWidthSet ? a.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(a)
		};
		b.prototype._measureSize = function(a) {
			this._sizeDirty ? (a = this._measureBounds(), this._rectW = a.width, this._rectH = a.height, this._clearSizeDirty()) : (a.width = this._rectW, a.height = this._rectH);
			a.x = 0;
			a.y = 0;
			return a
		};
		b.prototype._measureBounds = function() {
			return c.Rectangle.identity.initialize(0,
				0, 0, 0)
		};
		b.prototype._getOffsetPoint = function() {
			var a = this._anchorOffsetX,
				e = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) e = this._getSize(c.Rectangle.identity), a = this._anchorX * e.width, e = this._anchorY * e.height;
			var b = c.Point.identity;
			b.x = a;
			b.y = e;
			return b
		};
		b.prototype._onAddToStage = function() {
			this._stage = c.MainContext.instance.stage;
			c.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		b.prototype._onRemoveFromStage = function() {
			c.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(b.prototype, "stage", {
			get: function() {
				return this._stage
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.addEventListener = function(a, e, l, q, n) {
			void 0 === q && (q = !1);
			void 0 === n && (n = 0);
			d.prototype.addEventListener.call(this, a, e, l, q, n);
			((q = a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._insertEventBin(q ? b._enterFrameCallBackList : b._renderCallBackList, e, l, n, this)
		};
		b.prototype.removeEventListener = function(a, e, l, q) {
			void 0 === q && (q = !1);
			d.prototype.removeEventListener.call(this, a, e, l, q);
			((q =
				a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._removeEventBin(q ? b._enterFrameCallBackList : b._renderCallBackList, e, l, this)
		};
		b.prototype.dispatchEvent = function(a) {
			if (!a._bubbles) return d.prototype.dispatchEvent.call(this, a);
			for (var e = [], b = this; b;) e.push(b), b = b._parent;
			a._reset();
			this._dispatchPropagationEvent(a, e);
			return !a._isDefaultPrevented
		};
		b.prototype._dispatchPropagationEvent = function(a, e, b) {
			b = e.length;
			for (var c = 1, d = b - 1; 0 <= d; d--) {
				var f = e[d];
				a._currentTarget = f;
				a._target = this;
				a._eventPhase = c;
				f._notifyListener(a);
				if (a._isPropagationStopped || a._isPropagationImmediateStopped) return
			}
			f = e[0];
			a._currentTarget = f;
			a._target = this;
			a._eventPhase = 2;
			f._notifyListener(a);
			if (!a._isPropagationStopped && !a._isPropagationImmediateStopped)
				for (c = 3, d = 1; d < b && (f = e[d], a._currentTarget = f, a._target = this, a._eventPhase = c, f._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); d++);
		};
		b.prototype.willTrigger = function(a) {
			for (var e = this; e;) {
				if (e.hasEventListener(a)) return !0;
				e = e._parent
			}
			return !1
		};
		Object.defineProperty(b.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap
			},
			set: function(a) {
				(this._cacheAsBitmap = a) ? c.callLater(this._makeBitmapCache, this): this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._makeBitmapCache = function() {
			this.renderTexture || (this.renderTexture = new c.RenderTexture);
			var a = this.renderTexture.drawToTexture(this);
			this._texture_to_render = a ? this.renderTexture : null;
			return a
		};
		b.prototype._setCacheDirty = function(a) {
			void 0 === a && (a = !0);
			this._cacheDirty =
				a
		};
		b.getTransformBounds = function(a, e) {
			var b = a.x,
				c = a.y,
				d = a.width,
				f = a.height;
			(b || c) && e.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
			var h = d * e.a,
				d = d * e.b,
				m = f * e.c,
				f = f * e.d,
				k = e.tx,
				p = e.ty,
				r = k,
				s = k,
				t = p,
				v = p;
			(b = h + k) < r ? r = b : b > s && (s = b);
			(b = h + m + k) < r ? r = b : b > s && (s = b);
			(b = m + k) < r ? r = b : b > s && (s = b);
			(c = d + p) < t ? t = c : c > v && (v = c);
			(c = d + f + p) < t ? t = c : c > v && (v = c);
			(c = f + p) < t ? t = c : c > v && (v = c);
			return a.initialize(r, t, s - r, v - t)
		};
		Object.defineProperty(b.prototype, "colorTransform", {
			get: function() {
				return this._colorTransform
			},
			set: function(a) {
				this._colorTransform =
					a
			},
			enumerable: !0,
			configurable: !0
		});
		b.identityMatrixForGetConcatenated = new c.Matrix;
		b._enterFrameCallBackList = [];
		b._renderCallBackList = [];
		return b
	}(c.EventDispatcher);
	c.DisplayObject = d;
	d.prototype.__class__ = "egret.DisplayObject";
	d = function() {
		function c() {
			this.matrix = null
		}
		c.prototype.updateColor = function(b, a, e, c, d, f, g, h) {};
		return c
	}();
	c.ColorTransform = d;
	d.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(a) {
				this._touchChildren = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "numChildren", {
			get: function() {
				return this._children.length
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.setChildIndex = function(a, e) {
			this.doSetChildIndex(a, e)
		};
		b.prototype.doSetChildIndex = function(a,
			e) {
			var b = this._children.indexOf(a);
			0 > b && c.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(b, 1);
			0 > e || this._children.length <= e ? this._children.push(a) : this._children.splice(e, 0, a)
		};
		b.prototype.addChild = function(a) {
			var e = this._children.length;
			a._parent == this && e--;
			return this._doAddChild(a, e)
		};
		b.prototype.addChildAt = function(a, e) {
			return this._doAddChild(a, e)
		};
		b.prototype._doAddChild = function(a, e, l) {
			void 0 === l && (l = !0);
			if (a == this) return a;
			if (0 > e || e > this._children.length) return c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
				a;
			var d = a._parent;
			if (d == this) return this.doSetChildIndex(a, e), a;
			d && (e = d._children.indexOf(a), 0 <= e && d._doRemoveChild(e));
			this._children.splice(e, 0, a);
			a._parentChanged(this);
			l && a.dispatchEventWith(c.Event.ADDED, !0);
			if (this._stage)
				for (a._onAddToStage(), e = b.__EVENT__ADD_TO_STAGE_LIST; 0 < e.length;) e.shift().dispatchEventWith(c.Event.ADDED_TO_STAGE);
			a._setDirty();
			this._setSizeDirty();
			return a
		};
		b.prototype.removeChild = function(a) {
			a = this._children.indexOf(a);
			if (0 <= a) return this._doRemoveChild(a);
			c.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null
		};
		b.prototype.removeChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
			c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		b.prototype._doRemoveChild = function(a, e) {
			void 0 === e && (e = !0);
			var l = this._children,
				d = l[a];
			e && d.dispatchEventWith(c.Event.REMOVED, !0);
			if (this._stage) {
				d._onRemoveFromStage();
				for (var f = b.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) {
					var g = f.shift();
					g.dispatchEventWith(c.Event.REMOVED_FROM_STAGE);
					g._stage = null
				}
			}
			d._parentChanged(null);
			l.splice(a, 1);
			this._setSizeDirty();
			return d
		};
		b.prototype.getChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._children[a];
			c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		b.prototype.contains = function(a) {
			for (; a;) {
				if (a == this) return !0;
				a = a._parent
			}
			return !1
		};
		b.prototype.swapChildrenAt = function(a, e) {
			0 <= a && a < this._children.length && 0 <= e && e < this._children.length ? this._swapChildrenAt(a, e) : c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
		};
		b.prototype.swapChildren = function(a, e) {
			var b = this._children.indexOf(a),
				d = this._children.indexOf(e); - 1 == b || -1 == d ? c.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(b, d)
		};
		b.prototype._swapChildrenAt = function(a, e) {
			if (a != e) {
				var b = this._children,
					c = b[a];
				b[a] = b[e];
				b[e] = c
			}
		};
		b.prototype.getChildIndex = function(a) {
			return this._children.indexOf(a)
		};
		b.prototype.removeChildren = function() {
			for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
		};
		b.prototype._updateTransform =
			function() {
				if (this._visible) {
					d.prototype._updateTransform.call(this);
					for (var a = 0, e = this._children.length; a < e; a++) this._children[a]._updateTransform()
				}
			};
		b.prototype._render = function(a) {
			for (var e = 0, b = this._children.length; e < b; e++) this._children[e]._draw(a)
		};
		b.prototype._measureBounds = function() {
			for (var a = 0, e = 0, b = 0, d = 0, f = this._children.length, g = 0; g < f; g++) {
				var h = this._children[g];
				if (h._visible) {
					var m = h.getBounds(c.Rectangle.identity, !1),
						k = m.x,
						p = m.y,
						r = m.width,
						m = m.height,
						h = h._getMatrix(),
						h = c.DisplayObject.getTransformBounds(c.Rectangle.identity.initialize(k,
							p, r, m), h),
						k = h.x,
						p = h.y,
						r = h.width + h.x,
						h = h.height + h.y;
					if (k < a || 0 == g) a = k;
					if (r > e || 0 == g) e = r;
					if (p < b || 0 == g) b = p;
					if (h > d || 0 == g) d = h
				}
			}
			return c.Rectangle.identity.initialize(a, b, e - a, d - b)
		};
		b.prototype.hitTest = function(a, e, b) {
			void 0 === b && (b = !1);
			var q;
			if (!this._visible) return null;
			if (this._scrollRect) {
				if (a < this._scrollRect.x || e < this._scrollRect.y || a > this._scrollRect.x + this._scrollRect.width || e > this._scrollRect.y + this._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y >
					e || e > this.mask.y + this.mask.height)) return null;
			for (var n = this._children, g = this._touchChildren, h = n.length - 1; 0 <= h; h--) {
				var m = n[h],
					k = m._getMatrix(),
					p = m._scrollRect;
				p && k.append(1, 0, 0, 1, -p.x, -p.y);
				k.invert();
				k = c.Matrix.transformCoords(k, a, e);
				if (m = m.hitTest(k.x, k.y, !0)) {
					if (!g) return this;
					if (m._touchEnabled && g) return m;
					q = this
				}
			}
			return q ? q : this._texture_to_render || this.graphics ? d.prototype.hitTest.call(this, a, e, b) : null
		};
		b.prototype._onAddToStage = function() {
			d.prototype._onAddToStage.call(this);
			for (var a = this._children.length,
					e = 0; e < a; e++) this._children[e]._onAddToStage()
		};
		b.prototype._onRemoveFromStage = function() {
			d.prototype._onRemoveFromStage.call(this);
			for (var a = this._children.length, e = 0; e < a; e++) this._children[e]._onRemoveFromStage()
		};
		b.prototype.getChildByName = function(a) {
			for (var e = this._children, b = e.length, c, d = 0; d < b; d++)
				if (c = e[d], c.name == a) return c;
			return null
		};
		b.__EVENT__ADD_TO_STAGE_LIST = [];
		b.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return b
	}(c.DisplayObject);
	c.DisplayObjectContainer = d;
	d.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e) {
			void 0 === a && (a = 480);
			void 0 === e && (e = 800);
			d.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = a;
			this._stageHeight = e
		}
		__extends(b, d);
		b.prototype.invalidate = function() {
			b._invalidateRenderFlag = !0
		};
		Object.defineProperty(b.prototype, "scaleMode", {
			get: function() {
				return this._scaleMode
			},
			set: function(a) {
				this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.changeSize = function() {
			this.setResolutionPolicy();
			this.dispatchEventWith(c.Event.RESIZE)
		};
		b.prototype.setResolutionPolicy = function() {
			var a = {};
			a[c.StageScaleMode.NO_SCALE] = new c.NoScale;
			a[c.StageScaleMode.SHOW_ALL] = new c.ShowAll;
			a[c.StageScaleMode.NO_BORDER] = new c.FixedWidth;
			a[c.StageScaleMode.EXACT_FIT] = new c.FullScreen;
			a = a[this._scaleMode];
			if (!a) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
			var e = new c.EqualToFrame,
				a = new c.ResolutionPolicy(e, a);
			c.StageDelegate.getInstance()._setResolutionPolicy(a);
			this._stageWidth = c.StageDelegate.getInstance()._stageWidth;
			this._stageHeight = c.StageDelegate.getInstance()._stageHeight
		};
		Object.defineProperty(b.prototype, "stageWidth", {
			get: function() {
				return this._stageWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "stageHeight", {
			get: function() {
				return this._stageHeight
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.hitTest = function(a, e, b) {
			if (!this._touchEnabled) return null;
			var d;
			if (!this._touchChildren) return this;
			b = this._children;
			for (var f = b.length - 1; 0 <= f; f--) {
				d = b[f];
				var g = d._getMatrix(),
					h = d._scrollRect;
				h && g.append(1, 0, 0, 1, -h.x, -h.y);
				g.invert();
				g = c.Matrix.transformCoords(g, a, e);
				if ((d = d.hitTest(g.x, g.y, !0)) && d._touchEnabled) return d
			}
			return this
		};
		b.prototype.getBounds = function(a) {
			a || (a = new c.Rectangle);
			return a.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		b.prototype._updateTransform = function() {
			for (var a = 0, e = this._children.length; a < e; a++) this._children[a]._updateTransform()
		};
		Object.defineProperty(b.prototype, "focus", {
			get: function() {
				return null
			},
			enumerable: !0,
			configurable: !0
		});
		b._invalidateRenderFlag = !1;
		return b
	}(c.DisplayObjectContainer);
	c.Stage = d;
	d.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.NO_BORDER = "noBorder";
		c.NO_SCALE = "noScale";
		c.SHOW_ALL = "showAll";
		c.EXACT_FIT = "exactFit";
		return c
	}();
	c.StageScaleMode = d;
	d.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			void 0 === a && (a = null);
			d.call(this);
			this._lastTouchPosition = new c.Point(0, 0);
			this._lastTouchTime = 0;
			this._lastTouchEvent = null;
			this._velocitys = [];
			this._content = null;
			this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
			this._scrollTop = this._scrollLeft = 0;
			this._vCanScroll = this._hCanScroll = !1;
			this.touchEnabled = !0;
			a && this.setContent(a)
		}
		__extends(b, d);
		b.prototype.setContent = function(a) {
			this._content && (this._removeEvents(), d.prototype.removeChildAt.call(this,
				0));
			this._content = a;
			d.prototype.addChild.call(this, a);
			this._addEvents();
			this._explicitWidth || this._getContentWidth();
			this._explicitHeight || this._getContentHeight()
		};
		Object.defineProperty(b.prototype, "verticalScrollPolicy", {
			get: function() {
				return this._verticalScrollPolicy
			},
			set: function(a) {
				a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "horizontalScrollPolicy", {
			get: function() {
				return this._horizontalScrollPolicy
			},
			set: function(a) {
				a !=
					this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "scrollLeft", {
			get: function() {
				return this._scrollLeft
			},
			set: function(a) {
				a != this._scrollLeft && (this._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "scrollTop", {
			get: function() {
				return this._scrollTop
			},
			set: function(a) {
				a != this._scrollTop && (this._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.setScrollPosition = function(a, e, b) {
			void 0 === b && (b = !1);
			if (!b || 0 != a || 0 != e)
				if (b || this._scrollTop != a || this._scrollLeft != e) {
					if (b) {
						b = this._isOnTheEdge(!0);
						var c = this._isOnTheEdge(!1);
						this._scrollTop += b ? a / 2 : a;
						this._scrollLeft += c ? e / 2 : e
					} else this._scrollTop = a, this._scrollLeft = e;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
		};
		b.prototype._isOnTheEdge = function(a) {
			void 0 === a && (a = !0);
			var e = this._scrollTop,
				b = this._scrollLeft;
			return a ? 0 > e || e > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
		};
		b.prototype._validatePosition = function(a, e) {
			void 0 === a && (a = !1);
			void 0 === e && (e = !1);
			if (a) {
				var b = this.height,
					c = this._getContentHeight();
				this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
				this._scrollTop = Math.min(this._scrollTop, c > b ? c - b / 2 : c / 2)
			}
			e && (b = this.width, c = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, c > b ? c - b / 2 : c / 2))
		};
		b.prototype._setWidth = function(a) {
			this._explicitWidth !=
				a && (d.prototype._setWidth.call(this, a), this._updateContentPosition())
		};
		b.prototype._setHeight = function(a) {
			this._explicitHeight != a && (d.prototype._setHeight.call(this, a), this._updateContentPosition())
		};
		b.prototype._updateContentPosition = function() {
			var a = this.getBounds(c.Rectangle.identity);
			this.scrollRect = new c.Rectangle(this._scrollLeft, this._scrollTop, a.width, a.height);
			this.dispatchEvent(new c.Event(c.Event.CHANGE))
		};
		b.prototype._checkScrollPolicy = function() {
			var a = this.__checkScrollPolicy(this._horizontalScrollPolicy,
				this._getContentWidth(), this.width);
			this._hCanScroll = a;
			var e = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
			this._vCanScroll = e;
			return a || e
		};
		b.prototype.__checkScrollPolicy = function(a, e, b) {
			return "on" == a ? !0 : "off" == a ? !1 : e > b
		};
		b.prototype._addEvents = function() {
			this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.addEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture,
				this, !0)
		};
		b.prototype._removeEvents = function() {
			this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		b.prototype._onTouchBegin = function(a) {
			a._isDefaultPrevented || (c.Tween.removeTweens(this), this.stage.addEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(c.TouchEvent.TOUCH_END,
				this._onTouchEnd, this), this.stage.addEventListener(c.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(a), a.preventDefault())
		};
		b.prototype._onTouchBeginCapture = function(a) {
			var e = this._checkScrollPolicy();
			if (e) {
				for (var l = a.target; l != this;) {
					if (l instanceof b && (e = l._checkScrollPolicy())) return;
					l = l.parent
				}
				a.stopPropagation();
				this.delayTouchBeginEvent = this.cloneTouchEvent(a);
				this.touchBeginTimer || (this.touchBeginTimer = new c.Timer(100,
					1), this.touchBeginTimer.addEventListener(c.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
				this.touchBeginTimer.start();
				this._onTouchBegin(a)
			}
		};
		b.prototype._onTouchEndCapture = function(a) {
			this.delayTouchBeginEvent && this._onTouchBeginTimer()
		};
		b.prototype._onTouchBeginTimer = function() {
			this.touchBeginTimer.stop();
			var a = this.delayTouchBeginEvent;
			this.delayTouchBeginEvent = null;
			this.dispatchPropagationEvent(a)
		};
		b.prototype.dispatchPropagationEvent = function(a) {
			for (var e = [], b = a._target; b;) e.push(b),
				b = b.parent;
			for (var c = this._content, d = 1;; d += 2) {
				b = e[d];
				if (!b || b === c) break;
				e.unshift(b)
			}
			this._dispatchPropagationEvent(a, e)
		};
		b.prototype._dispatchPropagationEvent = function(a, e, b) {
			for (var c = e.length, d = 0; d < c; d++) {
				var f = e[d];
				a._currentTarget = f;
				a._target = this;
				a._eventPhase = d < b ? 1 : d == b ? 2 : 3;
				f._notifyListener(a);
				if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
			}
		};
		b.prototype._onTouchMove = function(a) {
			if (this._lastTouchPosition.x != a.stageX || this._lastTouchPosition.y != a.stageY) {
				this.delayTouchBeginEvent &&
					(this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				this.touchChildren = !1;
				var e = this._getPointChange(a);
				this.setScrollPosition(e.y, e.x, !0);
				this._calcVelocitys(a);
				this._logTouchEvent(a)
			}
		};
		b.prototype._onTouchEnd = function(a) {
			this.touchChildren = !0;
			c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
			c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEnd, this);
			c.MainContext.instance.stage.removeEventListener(c.TouchEvent.LEAVE_STAGE,
				this._onTouchEnd, this);
			this.removeEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this);
			this._moveAfterTouchEnd()
		};
		b.prototype._onEnterFrame = function(a) {
			a = c.getTimer();
			100 < a - this._lastTouchTime && 300 > a - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
		};
		b.prototype._logTouchEvent = function(a) {
			this._lastTouchPosition.x = a.stageX;
			this._lastTouchPosition.y = a.stageY;
			this._lastTouchEvent = this.cloneTouchEvent(a);
			this._lastTouchTime = c.getTimer()
		};
		b.prototype._getPointChange = function(a) {
			return {
				x: !1 ===
					this._hCanScroll ? 0 : this._lastTouchPosition.x - a.stageX,
				y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - a.stageY
			}
		};
		b.prototype._calcVelocitys = function(a) {
			var e = c.getTimer();
			if (0 == this._lastTouchTime) this._lastTouchTime = e;
			else {
				var b = this._getPointChange(a),
					e = e - this._lastTouchTime;
				b.x /= e;
				b.y /= e;
				this._velocitys.push(b);
				5 < this._velocitys.length && this._velocitys.shift();
				this._lastTouchPosition.x = a.stageX;
				this._lastTouchPosition.y = a.stageY
			}
		};
		b.prototype._getContentWidth = function() {
			return this._content.explicitWidth ||
				this._content.width
		};
		b.prototype._getContentHeight = function() {
			return this._content.explicitHeight || this._content.height
		};
		b.prototype.getMaxScrollLeft = function() {
			var a = this._getContentWidth() - this.width;
			return Math.max(0, a)
		};
		b.prototype.getMaxScrollTop = function() {
			var a = this._getContentHeight() - this.height;
			return Math.max(0, a)
		};
		b.prototype._moveAfterTouchEnd = function() {
			if (0 != this._velocitys.length) {
				for (var a = 0, e = 0, c = 0, d = 0; d < this._velocitys.length; d++) var f = this._velocitys[d],
					g = b.weight[d],
					a = a + f.x * g,
					e = e + f.y * g,
					c = c + g;
				this._velocitys.length = 0;
				a /= c;
				e /= c;
				f = Math.abs(a);
				c = Math.abs(e);
				g = this.getMaxScrollLeft();
				d = this.getMaxScrollTop();
				a = 0.02 < f ? this.getAnimationDatas(a, this._scrollLeft, g) : {
					position: this._scrollLeft,
					duration: 1
				};
				e = 0.02 < c ? this.getAnimationDatas(e, this._scrollTop, d) : {
					position: this._scrollTop,
					duration: 1
				};
				this.setScrollLeft(a.position, a.duration);
				this.setScrollTop(e.position, e.duration)
			}
		};
		b.prototype.setScrollTop = function(a, e) {
			void 0 === e && (e = 0);
			var b = Math.min(this.getMaxScrollTop(), Math.max(a,
				0));
			if (0 == e) return this.scrollTop = b, null;
			var d = c.Tween.get(this).to({
				scrollTop: a
			}, e, c.Ease.quartOut);
			b != a && d.to({
				scrollTop: b
			}, 300, c.Ease.quintOut)
		};
		b.prototype.setScrollLeft = function(a, e) {
			void 0 === e && (e = 0);
			var b = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
			if (0 == e) return this.scrollLeft = b, null;
			var d = c.Tween.get(this).to({
				scrollLeft: a
			}, e, c.Ease.quartOut);
			b != a && d.to({
				scrollLeft: b
			}, 300, c.Ease.quintOut)
		};
		b.prototype.getAnimationDatas = function(a, e, b) {
			var c = Math.abs(a),
				d = 0,
				f = e + 500 * a;
			if (0 > f || f > b)
				for (f =
					e; Infinity != Math.abs(a) && 0.02 < Math.abs(a);) f += a, a = 0 > f || f > b ? 0.998 * a * 0.95 : 0.998 * a, d++;
			else d = 500 * -Math.log(0.02 / c);
			return {
				position: Math.min(b + 50, Math.max(f, -50)),
				duration: d
			}
		};
		b.prototype.cloneTouchEvent = function(a) {
			var e = new c.TouchEvent(a._type, a._bubbles, a.cancelable);
			e.touchPointID = a.touchPointID;
			e._stageX = a._stageX;
			e._stageY = a._stageY;
			e.ctrlKey = a.ctrlKey;
			e.altKey = a.altKey;
			e.shiftKey = a.shiftKey;
			e.touchDown = a.touchDown;
			e._isDefaultPrevented = !1;
			e._target = a._target;
			return e
		};
		b.prototype.throwNotSupportedError =
			function() {
				throw Error("\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!");
			};
		b.prototype.addChild = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.prototype.addChildAt = function(a, e) {
			this.throwNotSupportedError();
			return null
		};
		b.prototype.removeChild = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.prototype.removeChildAt = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.prototype.setChildIndex = function(a, e) {
			this.throwNotSupportedError()
		};
		b.prototype.swapChildren = function(a,
			e) {
			this.throwNotSupportedError()
		};
		b.prototype.swapChildrenAt = function(a, e) {
			this.throwNotSupportedError()
		};
		b.weight = [1, 1.33, 1.66, 2, 2.33];
		return b
	}(c.DisplayObjectContainer);
	c.ScrollView = d;
	d.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b) {
			void 0 === e && (e = NaN);
			void 0 === b && (b = NaN);
			d.call(this, a);
			this.content = a;
			this.width = NaN == e ? this._getContentWidth() : e;
			this.height = NaN == b ? this._getContentHeight() : b;
			c.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView")
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "scrollXEnabled", {
			get: function() {
				return "off" != this.horizontalScrollPolicy
			},
			set: function(a) {
				c.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView");
				this.horizontalScrollPolicy = a ? "auto" : "off"
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "scrollYEnabled", {
			get: function() {
				return "off" != this.verticalScrollPolicy
			},
			set: function(a) {
				c.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView");
				this.verticalScrollPolicy = a ? "auto" : "off"
			},
			enumerable: !0,
			configurable: !0
		});
		return b
	}(c.ScrollView);
	c.Scroller = d;
	d.prototype.__class__ = "egret.Scroller"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.REPEAT = "repeat";
		c.SCALE = "scale";
		return c
	}();
	c.BitmapFillMode = d;
	d.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			d.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.scale9Grid = null;
			this.fillMode = "scale";
			a && (this._texture = a, this._setSizeDirty())
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "texture", {
			get: function() {
				return this._texture
			},
			set: function(a) {
				a != this._texture && (this._setSizeDirty(), this._texture = a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._render = function(a) {
			var e = this._texture;
			e ? (this._texture_to_render = e, b._drawBitmap(a, this._hasWidthSet ? this._explicitWidth :
				e._textureWidth, this._hasHeightSet ? this._explicitHeight : e._textureHeight, this)) : this._texture_to_render = null
		};
		b._drawBitmap = function(a, e, c, d) {
			var f = d._texture_to_render;
			if (f) {
				var g = f._textureWidth,
					h = f._textureHeight;
				if ("scale" == d.fillMode) {
					var m = d.scale9Grid || f.scale9Grid;
					if (m && g - m.width < e && h - m.height < c) b.drawScale9GridImage(a, d, m, e, c);
					else {
						var m = f._offsetX,
							k = f._offsetY,
							p = f._bitmapWidth || g,
							r = f._bitmapHeight || h;
						e /= g;
						m = Math.round(m * e);
						e = Math.round(p * e);
						c /= h;
						k = Math.round(k * c);
						c = Math.round(r * c);
						b.renderFilter.drawImage(a,
							d, f._bitmapX, f._bitmapY, p, r, m, k, e, c)
					}
				} else b.drawRepeatImage(a, d, e, c, d.fillMode)
			}
		};
		b.drawRepeatImage = function(a, e, b, d, f) {
			var g = e._texture_to_render;
			if (g) {
				var h = g._textureWidth,
					m = g._textureHeight,
					k = g._bitmapX,
					p = g._bitmapY,
					h = g._bitmapWidth || h,
					m = g._bitmapHeight || m,
					r = g._offsetX,
					g = g._offsetY;
				c.RenderFilter.getInstance().drawImage(a, e, k, p, h, m, r, g, b, d, f)
			}
		};
		b.drawScale9GridImage = function(a, e, b, d, f) {
			var g = e._texture_to_render;
			if (g && b) {
				var h = c.RenderFilter.getInstance(),
					m = g._textureWidth,
					k = g._textureHeight,
					p = g._bitmapX,
					r = g._bitmapY,
					s = g._bitmapWidth || m,
					t = g._bitmapHeight || k,
					v = g._offsetX,
					g = g._offsetY;
				b = c.Rectangle.identity.initialize(b.x - Math.round(v), b.y - Math.round(v), b.width, b.height);
				v = Math.round(v);
				g = Math.round(g);
				d -= m - s;
				f -= k - t;
				b.y == b.bottom && (b.bottom < t ? b.bottom++ : b.y--);
				b.x == b.right && (b.right < s ? b.right++ : b.x--);
				var m = p + b.x,
					k = p + b.right,
					x = s - b.right,
					A = r + b.y,
					z = r + b.bottom,
					y = t - b.bottom,
					H = v + b.x,
					L = g + b.y,
					t = f - (t - b.bottom),
					s = d - (s - b.right);
				h.drawImage(a, e, p, r, b.x, b.y, v, g, b.x, b.y);
				h.drawImage(a, e, m, r, b.width,
					b.y, H, g, s - b.x, b.y);
				h.drawImage(a, e, k, r, x, b.y, v + s, g, d - s, b.y);
				h.drawImage(a, e, p, A, b.x, b.height, v, L, b.x, t - b.y);
				h.drawImage(a, e, m, A, b.width, b.height, H, L, s - b.x, t - b.y);
				h.drawImage(a, e, k, A, x, b.height, v + s, L, d - s, t - b.y);
				h.drawImage(a, e, p, z, b.x, y, v, g + t, b.x, f - t);
				h.drawImage(a, e, m, z, b.width, y, H, g + t, s - b.x, f - t);
				h.drawImage(a, e, k, z, x, y, v + s, g + t, d - s, f - t)
			}
		};
		b.prototype._measureBounds = function() {
			var a = this._texture;
			return a ? c.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
		};
		b.debug = !1;
		b.renderFilter = c.RenderFilter.getInstance();
		return b
	}(c.DisplayObject);
	c.Bitmap = d;
	d.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._text = "";
			this._textChanged = !1;
			this._bitmapPool = []
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "text", {
			get: function() {
				return this._text
			},
			set: function(a) {
				this._textChanged = !0;
				this._text = a;
				this._setSizeDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._updateTransform = function() {
			this.visible && (this._textChanged && this._renderText(), d.prototype._updateTransform.call(this))
		};
		b.prototype._renderText = function(a) {
			var e = a = 0;
			this._textChanged &&
				this.removeChildren();
			for (var b = 0, d = this.text.length; b < d; b++) {
				var f = this.text.charAt(b),
					g = this.spriteSheet.getTexture(f);
				if (null == g) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + f);
				else {
					var f = g._offsetX,
						h = g._offsetY,
						m = g._textureWidth;
					if (this._textChanged) {
						var k = this._bitmapPool[b];
						k || (k = new c.Bitmap, this._bitmapPool.push(k));
						k.texture = g;
						this.addChild(k);
						k.x = a
					}
					a += m + f;
					h + g._textureHeight > e && (e = h + g._textureHeight)
				}
			}
			this._textChanged = !1;
			return c.Rectangle.identity.initialize(0, 0,
				a, e)
		};
		b.prototype._measureBounds = function() {
			return this._renderText(!0)
		};
		return b
	}(c.DisplayObjectContainer);
	c.BitmapText = d;
	d.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {
			this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
			this.commandQueue = []
		}
		c.prototype.beginFill = function(b, a) {};
		c.prototype._setStyle = function(b) {};
		c.prototype.drawRect = function(b, a, e, c) {
			this.checkRect(b, a, e, c)
		};
		c.prototype.drawCircle = function(b, a, e) {
			this.checkRect(b - e, a - e, 2 * e, 2 * e)
		};
		c.prototype.drawRoundRect = function(b, a, e, c, d, f) {
			this.checkRect(b, a, e, c)
		};
		c.prototype.drawEllipse = function(b, a, e, c) {
			this.checkRect(b - e, a - c, 2 * e, 2 * c)
		};
		c.prototype.lineStyle =
			function(b, a, e, c, d, f, g, h) {};
		c.prototype.lineTo = function(b, a) {
			this.checkPoint(b, a)
		};
		c.prototype.curveTo = function(b, a, e, c) {
			this.checkPoint(b, a);
			this.checkPoint(e, c)
		};
		c.prototype.moveTo = function(b, a) {
			this.checkPoint(b, a)
		};
		c.prototype.clear = function() {
			this._maxY = this._maxX = this._minY = this._minX = 0
		};
		c.prototype.endFill = function() {};
		c.prototype._draw = function(b) {};
		c.prototype.checkRect = function(b, a, e, c) {
			this._minX = Math.min(this._minX, b);
			this._minY = Math.min(this._minY, a);
			this._maxX = Math.max(this._maxX, b +
				e);
			this._maxY = Math.max(this._maxY, a + c)
		};
		c.prototype.checkPoint = function(b, a) {
			this._minX = Math.min(this._minX, b);
			this._minY = Math.min(this._minY, a);
			this._maxX = Math.max(this._maxX, b);
			this._maxY = Math.max(this._maxY, a);
			this._lastX = b;
			this._lastY = a
		};
		return c
	}();
	c.Graphics = d;
	d.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(c, b, a) {
			this.method = c;
			this.thisObject = b;
			this.args = a
		}
	})().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this)
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new c.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._render = function(a) {
			this._graphics && this._graphics._draw(a)
		};
		return b
	}(c.DisplayObject);
	c.Shape = d;
	d.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this)
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new c.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._render = function(a) {
			this._graphics && this._graphics._draw(a);
			d.prototype._render.call(this, a)
		};
		return b
	}(c.DisplayObjectContainer);
	c.Sprite = d;
	d.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._inputEnabled = !1;
			this._text = this._type = "";
			this._displayAsPassword = !1;
			this._fontFamily = b.default_fontFamily;
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
		__extends(b, d);
		b.prototype.isInput = function() {
			return this._type == c.TextFieldType.INPUT
		};
		b.prototype._setTouchEnabled = function(a) {
			d.prototype._setTouchEnabled.call(this, a);
			this.isInput() && (this._inputEnabled = !0)
		};
		Object.defineProperty(b.prototype, "type", {
			get: function() {
				return this._type
			},
			set: function(a) {
				this._setType(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setType = function(a) {
			this._type != a && (this._type = a, this._type == c.TextFieldType.INPUT ?
				(this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new c.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
		};
		Object.defineProperty(b.prototype, "text", {
			get: function() {
				return this._getText()
			},
			set: function(a) {
				this._setText(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._getText = function() {
			return this._type ==
				c.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
		};
		b.prototype._setSizeDirty = function() {
			d.prototype._setSizeDirty.call(this);
			this._isArrayChanged = !0
		};
		b.prototype._setTextDirty = function() {
			this._setSizeDirty()
		};
		b.prototype._setBaseText = function(a) {
			null == a && (a = "");
			this._isFlow = !1;
			if (this._text != a || this._displayAsPassword) this._setTextDirty(), this._text = a, a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
				text: a
			}])
		};
		b.prototype._setText = function(a) {
			null ==
				a && (a = "");
			this._setBaseText(a);
			this._inputUtils && this._inputUtils._setText(this._text)
		};
		Object.defineProperty(b.prototype, "displayAsPassword", {
			get: function() {
				return this._displayAsPassword
			},
			set: function(a) {
				this._setDisplayAsPassword(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setDisplayAsPassword = function(a) {
			this._displayAsPassword != a && (this._displayAsPassword = a, this._setText(this._text))
		};
		Object.defineProperty(b.prototype, "fontFamily", {
			get: function() {
				return this._fontFamily
			},
			set: function(a) {
				this._setFontFamily(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setFontFamily = function(a) {
			this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
		};
		Object.defineProperty(b.prototype, "size", {
			get: function() {
				return this._size
			},
			set: function(a) {
				this._setSize(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setSize = function(a) {
			this._size != a && (this._setTextDirty(), this._size = a)
		};
		Object.defineProperty(b.prototype, "italic", {
			get: function() {
				return this._italic
			},
			set: function(a) {
				this._setItalic(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setItalic = function(a) {
			this._italic != a && (this._setTextDirty(), this._italic = a)
		};
		Object.defineProperty(b.prototype, "bold", {
			get: function() {
				return this._bold
			},
			set: function(a) {
				this._setBold(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setBold = function(a) {
			this._bold != a && (this._setTextDirty(), this._bold = a)
		};
		Object.defineProperty(b.prototype, "textColor", {
			get: function() {
				return this._textColor
			},
			set: function(a) {
				this._setTextColor(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setTextColor =
			function(a) {
				this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = c.toColorString(a))
			};
		Object.defineProperty(b.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor
			},
			set: function(a) {
				this._setStrokeColor(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setStrokeColor = function(a) {
			this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = c.toColorString(a))
		};
		Object.defineProperty(b.prototype, "stroke", {
			get: function() {
				return this._stroke
			},
			set: function(a) {
				this._setStroke(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setStroke = function(a) {
			this._stroke != a && (this._setTextDirty(), this._stroke = a)
		};
		Object.defineProperty(b.prototype, "textAlign", {
			get: function() {
				return this._textAlign
			},
			set: function(a) {
				this._setTextAlign(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setTextAlign = function(a) {
			this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
		};
		Object.defineProperty(b.prototype, "verticalAlign", {
			get: function() {
				return this._verticalAlign
			},
			set: function(a) {
				this._setVerticalAlign(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setVerticalAlign = function(a) {
			this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
		};
		Object.defineProperty(b.prototype, "maxChars", {
			get: function() {
				return this._maxChars
			},
			set: function(a) {
				this._setMaxChars(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setMaxChars = function(a) {
			this._maxChars != a && (this._maxChars = a)
		};
		Object.defineProperty(b.prototype, "scrollV", {
			set: function(a) {
				this._scrollV = a;
				this._setDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "maxScrollV", {
			get: function() {
				return this._maxScrollV
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "selectionBeginIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "selectionEndIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "caretIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setSelection =
			function(a, e) {};
		Object.defineProperty(b.prototype, "lineSpacing", {
			get: function() {
				return this._lineSpacing
			},
			set: function(a) {
				this._setLineSpacing(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setLineSpacing = function(a) {
			this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
		};
		b.prototype._getLineHeight = function() {
			return this._lineSpacing + this._size
		};
		Object.defineProperty(b.prototype, "numLines", {
			get: function() {
				return this._numLines
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype,
			"multiline", {
				get: function() {
					return this._multiline
				},
				set: function(a) {
					this._setMultiline(a)
				},
				enumerable: !0,
				configurable: !0
			});
		b.prototype._setMultiline = function(a) {
			this._multiline = a;
			this._setDirty()
		};
		b.prototype.setFocus = function() {
			c.Logger.warning("TextField.setFocus \u6ca1\u6709\u5b9e\u73b0")
		};
		b.prototype._onRemoveFromStage = function() {
			d.prototype._onRemoveFromStage.call(this);
			this._type == c.TextFieldType.INPUT && this._inputUtils._removeStageText()
		};
		b.prototype._onAddToStage = function() {
			d.prototype._onAddToStage.call(this);
			this._type == c.TextFieldType.INPUT && this._inputUtils._addStageText()
		};
		b.prototype._updateBaseTransform = function() {
			d.prototype._updateTransform.call(this)
		};
		b.prototype._updateTransform = function() {
			this._type == c.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
		};
		b.prototype._render = function(a) {
			this.drawText(a);
			this._clearDirty()
		};
		b.prototype._measureBounds = function() {
			return this.measureText()
		};
		Object.defineProperty(b.prototype, "textFlow", {
			set: function(a) {
				this._isFlow = !0;
				for (var e = "", b = 0; b < a.length; b++) e += a[b].text;
				this._displayAsPassword ? this._setBaseText(e) : (this._text = e, this.setMiddleStyle(a))
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.changeToPassText = function(a) {
			if (this._displayAsPassword) {
				for (var e = "", b = 0, c = a.length; b < c; b++) switch (a.charAt(b)) {
					case "\n":
						e += "\n";
						break;
					case "\r":
						break;
					default:
						e += "*"
				}
				return e
			}
			return a
		};
		b.prototype.setMiddleStyle = function(a) {
			this._isArrayChanged = !0;
			this._textArr = a;
			this._setSizeDirty()
		};
		Object.defineProperty(b.prototype, "textWidth", {
			get: function() {
				return this._textMaxWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "textHeight", {
			get: function() {
				return this._textMaxHeight
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.appendText = function(a) {
			this.appendElement({
				text: a
			})
		};
		b.prototype.appendElement = function(a) {
			this._textArr.push(a);
			this.setMiddleStyle(this._textArr)
		};
		b.prototype._getLinesArr = function() {
			if (!this._isArrayChanged) return this._linesArr;
			this._isArrayChanged = !1;
			var a = this._textArr,
				e = c.MainContext.instance.rendererContext;
			this._linesArr = [];
			this._textMaxWidth = this._textMaxHeight = 0;
			var b = this._linesArr,
				d = 0,
				f = 0,
				g = 0,
				h;
			this._isFlow || e.setupFont(this);
			for (var m = 0; m < a.length; m++) {
				var k = a[m];
				k.style = k.style || {};
				for (var p = k.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < p.length; r++) {
					null == b[g] && (h = {
						width: 0,
						height: 0,
						elements: []
					}, b[g] = h, f = d = 0);
					f = this._type == c.TextFieldType.INPUT ? this._size : Math.max(f, k.style.size || this._size);
					if ("" != p[r]) {
						this._isFlow &&
							e.setupFont(this, k.style);
						var s = e.measureText(p[r]);
						if (this._hasWidthSet)
							if (d + s <= this._explicitWidth) h.elements.push({
								width: s,
								text: p[r],
								style: k.style
							}), d += s;
							else {
								for (var t = 0, v = 0, x = p[r]; t < x.length; t++) {
									s = e.measureText(x.charAt(t));
									if (d + s > this._explicitWidth) break;
									v += s;
									d += s
								}
								0 < t && (h.elements.push({
									width: v,
									text: x.substring(0, t),
									style: k.style
								}), p[r] = x.substring(t));
								r--
							} else d += s, h.elements.push({
							width: s,
							text: p[r],
							style: k.style
						})
					}
					if (r < p.length - 1) {
						h.width = d;
						h.height = f;
						this._textMaxWidth = Math.max(this._textMaxWidth,
							d);
						this._textMaxHeight += f;
						if (this._type == c.TextFieldType.INPUT && !this._multiline) return this._numLines = b.length, b;
						g++
					}
				}
				m == a.length - 1 && h && (h.width = d, h.height = f, this._textMaxWidth = Math.max(this._textMaxWidth, d), this._textMaxHeight += f)
			}
			this._numLines = b.length;
			return b
		};
		b.prototype.measureText = function() {
			return this._getLinesArr() ? c.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) *
				this._lineSpacing) : c.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		b.prototype.drawText = function(a) {
			var e = this._getLinesArr();
			if (e) {
				this._isFlow || a.setupFont(this);
				var b = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
					d = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
					f = 0,
					g = 0;
				if (this._hasHeightSet)
					if (d < this._explicitHeight) {
						var h = 0;
						this._verticalAlign == c.VerticalAlign.MIDDLE ? h = 0.5 : this._verticalAlign == c.VerticalAlign.BOTTOM && (h = 1);
						f += h * (this._explicitHeight - d)
					} else d > this._explicitHeight &&
						(g = Math.max(this._scrollV - 1, 0), g = Math.min(this._numLines - 1, g));
				f = Math.round(f);
				d = 0;
				this._textAlign == c.HorizontalAlign.CENTER ? d = 0.5 : this._textAlign == c.HorizontalAlign.RIGHT && (d = 1);
				for (h = 0; g < this._numLines; g++) {
					var m = e[g],
						k = m.height,
						f = f + k / 2;
					if (0 != g && this._hasHeightSet && f > this._explicitHeight) break;
					for (var h = Math.round((b - m.width) * d), p = 0; p < m.elements.length; p++) {
						var r = m.elements[p],
							s = r.style.size || this._size;
						this._type == c.TextFieldType.INPUT ? a.drawText(this, r.text, h, f + (k - s) / 2, r.width) : (this._isFlow &&
							a.setupFont(this, r.style), a.drawText(this, r.text, h, f + (k - s) / 2, r.width, r.style));
						h += r.width
					}
					f += k / 2 + this._lineSpacing
				}
			}
		};
		b.default_fontFamily = "Arial";
		return b
	}(c.DisplayObject);
	c.TextField = d;
	d.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {
			this.resutlArr = []
		}
		c.prototype.parser = function(b) {
			this.stackArray = [];
			this.resutlArr = [];
			for (var a = 0, e = b.length; a < e;) {
				var c = b.indexOf("<", a);
				0 > c ? (this.addToResultArr(b.substring(a)), a = e) : (this.addToResultArr(b.substring(a, c)), a = b.indexOf(">", c), "/" == b.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(b.substring(c + 1, a)), a += 1)
			}
			return this.resutlArr
		};
		c.prototype.addToResultArr = function(b) {
			if ("" != b) {
				var a = [];
				a.push(["&lt;", "<"]);
				a.push(["&gt;", ">"]);
				a.push(["&amp;",
					"&"
				]);
				a.push(["&quot;", '"']);
				a.push(["&apos;;", "'"]);
				for (var e = 0; e < a.length; e++) b.replace(new RegExp(a[e][0], "g"), a[e][1]);
				0 < this.stackArray.length ? this.resutlArr.push({
					text: b,
					style: this.stackArray[this.stackArray.length - 1]
				}) : this.resutlArr.push({
					text: b
				})
			}
		};
		c.prototype.changeStringToObject = function(b) {
			var a = {};
			b = b.replace(/( )+/g, " ").split(" ");
			for (var e = 0; e < b.length; e++) this.addProperty(a, b[e]);
			return a
		};
		c.prototype.addProperty = function(b, a) {
			var e = a.replace(/( )*=( )*/g, "=").split("=");
			e[1] && (e[1] =
				e[1].replace(/(\"|\')/g, ""));
			switch (e[0].toLowerCase()) {
				case "color":
					b.textColor = parseInt(e[1]);
					break;
				case "b":
					b.bold = "true" == (e[1] || "true");
					break;
				case "i":
					b.italic = "true" == (e[1] || "true");
					break;
				case "size":
					b.size = parseInt(e[1]);
					break;
				case "fontFamily":
					b.fontFamily = e[1]
			}
		};
		c.prototype.addToArray = function(b) {
			b = this.changeStringToObject(b);
			if (0 != this.stackArray.length) {
				var a = this.stackArray[this.stackArray.length - 1],
					e;
				for (e in a) null == b[e] && (b[e] = a[e])
			}
			this.stackArray.push(b)
		};
		return c
	}();
	c.HtmlTextParser =
		d;
	d.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.DYNAMIC = "dynamic";
		c.INPUT = "input";
		return c
	}();
	c.TextFieldType = d;
	d.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			d.call(this);
			var e = a.bitmapData;
			this.bitmapData = e;
			this._textureMap = {};
			this._sourceWidth = e.width;
			this._sourceHeight = e.height;
			this._bitmapX = a._bitmapX - a._offsetX;
			this._bitmapY = a._bitmapY - a._offsetY
		}
		__extends(b, d);
		b.prototype.getTexture = function(a) {
			return this._textureMap[a]
		};
		b.prototype.createTexture = function(a, e, b, d, f, g, h, m, k) {
			void 0 === g && (g = 0);
			void 0 === h && (h = 0);
			"undefined" === typeof m && (m = g + d);
			"undefined" === typeof k && (k = h + f);
			var p = new c.Texture;
			p._bitmapData =
				this.bitmapData;
			p._bitmapX = this._bitmapX + e;
			p._bitmapY = this._bitmapY + b;
			p._bitmapWidth = d;
			p._bitmapHeight = f;
			p._offsetX = g;
			p._offsetY = h;
			p._textureWidth = m;
			p._textureHeight = k;
			p._sourceWidth = this._sourceWidth;
			p._sourceHeight = this._sourceHeight;
			return this._textureMap[a] = p
		};
		return b
	}(c.HashObject);
	c.SpriteSheet = d;
	d.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			c.Logger.warning("TextInput \u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextField\u4ee3\u66ff\uff0c\u5e76\u8bbe\u7f6etype\u4e3aTextFieldType.INPUT");
			this.type = c.TextFieldType.INPUT
		}
		__extends(b, d);
		b.prototype.setText = function(a) {
			c.Logger.warning("TextField.setText()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.text\u8bbe\u7f6e");
			this.text = a
		};
		b.prototype.getText = function() {
			c.Logger.warning("TextField.getText()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.text\u83b7\u53d6");
			return this.text
		};
		b.prototype.setTextType = function(a) {
			c.Logger.warning("TextField.setTextType()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.displayAsPassword\u8bbe\u7f6e");
			this.displayAsPassword = "password" == a
		};
		b.prototype.getTextType = function() {
			c.Logger.warning("TextField.getTextType()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.displayAsPassword\u83b7\u53d6");
			return this.displayAsPassword ? "password" : "text"
		};
		return b
	}(c.TextField);
	c.TextInput = d;
	d.prototype.__class__ = "egret.TextInput"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._isFocus = !1;
			this._isFirst = this._isFirst = !0
		}
		__extends(b, d);
		b.prototype.init = function(a) {
			this._text = a;
			this.stageText = c.StageText.create();
			a = this._text.localToGlobal();
			this.stageText._open(a.x, a.y, this._text._explicitWidth, this._text._explicitHeight)
		};
		b.prototype._addStageText = function() {
			this._text._inputEnabled || (this._text._touchEnabled = !0);
			this.stageText._add();
			this.stageText._addListeners();
			this.stageText.addEventListener("blur", this.onBlurHandler,
				this);
			this.stageText.addEventListener("focus", this.onFocusHandler, this);
			this.stageText.addEventListener("updateText", this.updateTextHandler, this);
			this._text.addEventListener(c.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			c.MainContext.instance.stage.addEventListener(c.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		b.prototype._removeStageText = function() {
			this.stageText._remove();
			this.stageText._removeListeners();
			this._text._inputEnabled || (this._text._touchEnabled = !1);
			this.stageText.removeEventListener("blur",
				this.onBlurHandler, this);
			this.stageText.removeEventListener("focus", this.onFocusHandler, this);
			this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
			this._text.removeEventListener(c.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		b.prototype._getText = function() {
			return this.stageText._getText()
		};
		b.prototype._setText = function(a) {
			this.stageText._setText(a)
		};
		b.prototype.onFocusHandler =
			function(a) {
				this.hideText()
			};
		b.prototype.onBlurHandler = function(a) {
			this.showText()
		};
		b.prototype.onMouseDownHandler = function(a) {
			a.stopPropagation();
			this._text._visible && this.stageText._show()
		};
		b.prototype.onStageDownHandler = function(a) {
			this.stageText._hide();
			this.showText()
		};
		b.prototype.showText = function() {
			this._isFocus && (this._isFocus = !1, this.resetText())
		};
		b.prototype.hideText = function() {
			this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
		};
		b.prototype.updateTextHandler = function(a) {
			this.resetText();
			this._text.dispatchEvent(new c.Event(c.Event.CHANGE))
		};
		b.prototype.resetText = function() {
			this._text._setBaseText(this.stageText._getText())
		};
		b.prototype._updateTransform = function() {
			var a = this._text._worldTransform.a,
				e = this._text._worldTransform.b,
				b = this._text._worldTransform.c,
				d = this._text._worldTransform.d,
				f = this._text._worldTransform.tx,
				g = this._text._worldTransform.ty;
			this._text._updateBaseTransform();
			var h = this._text._worldTransform;
			if (this._isFirst || a != h.a || e != h.b || b != h.c || d != h.d || f != h.tx || g !=
				h.ty) {
				this._isFirst = !1;
				a = this._text.localToGlobal();
				this.stageText.changePosition(a.x, a.y);
				var m = this;
				c.callLater(function() {
					m.stageText._setScale(m._text._worldTransform.a, m._text._worldTransform.d)
				}, this)
			}
		};
		b.prototype._updateProperties = function() {
			var a = this._text._stage;
			if (null == a) this.stageText._setVisible(!1);
			else {
				for (var e = this._text, b = e._visible; b;) {
					e = e.parent;
					if (e == a) break;
					b = e._visible
				}
				this.stageText._setVisible(b)
			}
			this.stageText._setMultiline(this._text._multiline);
			this.stageText._setMaxChars(this._text._maxChars);
			this.stageText._setSize(this._text._size);
			this.stageText._setTextColor(this._text._textColorString);
			this.stageText._setTextFontFamily(this._text._fontFamily);
			this.stageText._setBold(this._text._bold);
			this.stageText._setItalic(this._text._italic);
			this.stageText._setTextAlign(this._text._textAlign);
			this.stageText._setWidth(this._text._getSize(c.Rectangle.identity).width);
			this.stageText._setHeight(this._text._getSize(c.Rectangle.identity).height);
			this.stageText._setTextType(this._text._displayAsPassword ?
				"password" : "text");
			this.stageText._setText(this._text._text);
			this.stageText._resetStageText();
			this._updateTransform()
		};
		return b
	}(c.HashObject);
	c.InputController = d;
	d.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a, e) {
			c.call(this, a);
			this.charList = this.parseConfig(e)
		}
		__extends(b, c);
		b.prototype.getTexture = function(a) {
			var e = this._textureMap[a];
			if (!e) {
				e = this.charList[a];
				if (!e) return null;
				e = this.createTexture(a, e.x, e.y, e.width, e.height, e.offsetX, e.offsetY);
				this._textureMap[a] = e
			}
			return e
		};
		b.prototype.parseConfig = function(a) {
			a = a.split("\r\n").join("\n");
			a = a.split("\n");
			for (var e = this.getConfigByKey(a[3], "count"), b = {}, c = 4; c < 4 + e; c++) {
				var d = a[c],
					f = String.fromCharCode(this.getConfigByKey(d,
						"id")),
					h = {};
				b[f] = h;
				h.x = this.getConfigByKey(d, "x");
				h.y = this.getConfigByKey(d, "y");
				h.width = this.getConfigByKey(d, "width");
				h.height = this.getConfigByKey(d, "height");
				h.offsetX = this.getConfigByKey(d, "xoffset");
				h.offsetY = this.getConfigByKey(d, "yoffset")
			}
			return b
		};
		b.prototype.getConfigByKey = function(a, e) {
			for (var b = a.split(" "), c = 0, d = b.length; c < d; c++) {
				var f = b[c];
				if (e == f.substring(0, e.length)) return b = f.substring(e.length + 1), parseInt(b)
			}
			return 0
		};
		return b
	}(c.SpriteSheet);
	c.BitmapTextSpriteSheet = d;
	d.prototype.__class__ =
		"egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(b) {
		function a(a, d) {
			b.call(this);
			this.frameRate = 60;
			a instanceof f ? (c.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = a) : this.delegate = new f(a, d);
			this.delegate.setMovieClip(this)
		}
		__extends(a, b);
		a.prototype.gotoAndPlay = function(a) {
			this.delegate.gotoAndPlay(a)
		};
		a.prototype.gotoAndStop = function(a) {
			this.delegate.gotoAndStop(a)
		};
		a.prototype.stop =
			function() {
				this.delegate.stop()
			};
		a.prototype.dispose = function() {
			this.delegate.dispose()
		};
		a.prototype.release = function() {
			c.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose()
		};
		a.prototype.getCurrentFrameIndex = function() {
			c.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex
		};
		a.prototype.getTotalFrame = function() {
			c.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame
		};
		a.prototype.setInterval = function(a) {
			c.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / a
		};
		a.prototype.getIsPlaying = function() {
			c.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying
		};
		return a
	}(c.DisplayObjectContainer);
	c.MovieClip = d;
	d.prototype.__class__ = "egret.MovieClip";
	var f = function() {
		function b(a, e) {
			this.data = a;
			this._currentFrameIndex = this._passTime =
				this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = a;
			this._spriteSheet = new c.SpriteSheet(e)
		}
		b.prototype.setMovieClip = function(a) {
			this.movieClip = a;
			this.bitmap = new c.Bitmap;
			this.movieClip.addChild(this.bitmap)
		};
		b.prototype.gotoAndPlay = function(a) {
			this.checkHasFrame(a);
			this._isPlaying = !0;
			this._currentFrameIndex = 0;
			this._currentFrameName = a;
			this._totalFrame = this._frameData.frames[a].totalFrame;
			this.playNextFrame();
			this._passTime = 0;
			c.Ticker.getInstance().register(this.update, this)
		};
		b.prototype.gotoAndStop =
			function(a) {
				this.checkHasFrame(a);
				this.stop();
				this._currentFrameIndex = this._passTime = 0;
				this._currentFrameName = a;
				this._totalFrame = this._frameData.frames[a].totalFrame;
				this.playNextFrame()
			};
		b.prototype.stop = function() {
			this._isPlaying = !1;
			c.Ticker.getInstance().unregister(this.update, this)
		};
		b.prototype.dispose = function() {};
		b.prototype.checkHasFrame = function(a) {
			void 0 == this._frameData.frames[a] && c.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
		};
		b.prototype.update = function(a) {
			for (var e =
					1E3 / this.movieClip.frameRate, e = Math.floor((this._passTime % e + a) / e); 1 <= e;) 1 == e ? this.playNextFrame() : this.playNextFrame(!1), e--;
			this._passTime += a
		};
		b.prototype.playNextFrame = function(a) {
			void 0 === a && (a = !0);
			var e = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (a) {
				a = this.getTexture(e.res);
				var b = this.bitmap;
				b.x = e.x;
				b.y = e.y;
				b.texture = a
			}
			null != e.action && this.movieClip.dispatchEventWith(e.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex =
				0, e.action != c.Event.COMPLETE && this.movieClip.dispatchEventWith(c.Event.COMPLETE))
		};
		b.prototype.getTexture = function(a) {
			var e = this._frameData.res[a],
				b = this._spriteSheet.getTexture(a);
			b || (b = this._spriteSheet.createTexture(a, e.x, e.y, e.w, e.h));
			return b
		};
		return b
	}();
	c.DefaultMovieClipDelegate = f;
	f.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._scaleY = this._scaleX = 1;
			this._size = 30;
			this._color = "#FFFFFF";
			this._fontFamily = "Arial";
			this._italic = this._bold = !1;
			this._textAlign = "left";
			this._multiline = this._visible = !1;
			this._maxChars = 0
		}
		__extends(b, c);
		b.prototype._getText = function() {
			return null
		};
		b.prototype._setText = function(a) {};
		b.prototype._setTextType = function(a) {};
		b.prototype._getTextType = function() {
			return null
		};
		b.prototype._open = function(a, e, b, c) {};
		b.prototype._show = function() {};
		b.prototype._add =
			function() {};
		b.prototype._remove = function() {};
		b.prototype._hide = function() {};
		b.prototype._addListeners = function() {};
		b.prototype._removeListeners = function() {};
		b.prototype._setScale = function(a, e) {
			this._scaleX = a;
			this._scaleY = e
		};
		b.prototype.changePosition = function(a, e) {};
		b.prototype._setSize = function(a) {
			this._size = a
		};
		b.prototype._setTextColor = function(a) {
			this._color = a
		};
		b.prototype._setTextFontFamily = function(a) {
			this._fontFamily = a
		};
		b.prototype._setBold = function(a) {
			this._bold = a
		};
		b.prototype._setItalic =
			function(a) {
				this._italic = a
			};
		b.prototype._setTextAlign = function(a) {
			this._textAlign = a
		};
		b.prototype._setVisible = function(a) {
			this._visible = a
		};
		b.prototype._setWidth = function(a) {};
		b.prototype._setHeight = function(a) {};
		b.prototype._setMultiline = function(a) {
			this._multiline = a
		};
		b.prototype._setMaxChars = function(a) {
			this._maxChars = a
		};
		b.prototype._resetStageText = function() {};
		b.create = function() {
			return null
		};
		return b
	}(c.EventDispatcher);
	c.StageText = d;
	d.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.GET = "get";
		c.POST = "post";
		return c
	}();
	c.URLRequestMethod = d;
	d.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.BINARY = "binary";
		c.TEXT = "text";
		c.VARIABLES = "variables";
		c.TEXTURE = "texture";
		c.SOUND = "sound";
		return c
	}();
	c.URLLoaderDataFormat = d;
	d.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b(a) {
			void 0 === a && (a = null);
			c.call(this);
			null !== a && this.decode(a)
		}
		__extends(b, c);
		b.prototype.decode = function(a) {
			this.variables || (this.variables = {});
			a = a.split("+").join(" ");
			for (var e, b = /[?&]?([^=]+)=([^&]*)/g; e = b.exec(a);) this.variables[decodeURIComponent(e[1])] = decodeURIComponent(e[2])
		};
		b.prototype.toString = function() {
			if (!this.variables) return "";
			var a = this.variables,
				e = "",
				b = !0,
				c;
			for (c in a) b ? b = !1 : e += "&", e += c + "=" + a[c];
			return e
		};
		return b
	}(c.HashObject);
	c.URLVariables =
		d;
	d.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			void 0 === a && (a = null);
			d.call(this);
			this.method = c.URLRequestMethod.GET;
			this.url = a
		}
		__extends(b, d);
		return b
	}(c.HashObject);
	c.URLRequest = d;
	d.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			void 0 === a && (a = null);
			d.call(this);
			this.dataFormat = c.URLLoaderDataFormat.TEXT;
			this._status = -1;
			a && this.load(a)
		}
		__extends(b, d);
		b.prototype.load = function(a) {
			this._request = a;
			this.data = null;
			c.MainContext.instance.netContext.proceed(this)
		};
		return b
	}(c.EventDispatcher);
	c.URLLoader = d;
	d.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(b, d);
		Object.defineProperty(b.prototype, "textureWidth", {
			get: function() {
				return this._textureWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "textureHeight", {
			get: function() {
				return this._textureHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b.prototype, "bitmapData", {
			get: function() {
				return this._bitmapData
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._setBitmapData = function(a) {
			var e = c.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * e;
			this._textureHeight = this._sourceHeight * e;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		b.prototype.getPixel32 = function(a, e) {
			return this._bitmapData.getContext("2d").getImageData(a,
				e, 1, 1).data
		};
		return b
	}(c.HashObject);
	c.Texture = d;
	d.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = c.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(b, d);
		b.prototype.drawToTexture = function(a) {
			var e = this._bitmapData,
				d = a.getBounds(c.Rectangle.identity);
			if (0 == d.width || 0 == d.height) return c.Logger.warning("egret.RenderTexture#drawToTexture:\u663e\u793a\u5bf9\u8c61\u6d4b\u91cf\u7ed3\u679c\u5bbd\u9ad8\u4e3a0\uff0c\u8bf7\u68c0\u67e5"), !1;
			d.width = Math.floor(d.width);
			d.height = Math.floor(d.height);
			e.width = d.width;
			e.height = d.height;
			this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = d.width, this.renderContext._cacheCanvas.height = d.height);
			b.identityRectangle.width = d.width;
			b.identityRectangle.height = d.height;
			a._worldTransform.identity();
			a.worldAlpha = 1;
			if (a instanceof c.DisplayObjectContainer) {
				var e = a._anchorOffsetX,
					f = a._anchorOffsetY;
				if (0 != a._anchorX || 0 != a._anchorY) e = a._anchorX * d.width, f = a._anchorY * d.height;
				this._offsetX = d.x + e;
				this._offsetY = d.y +
					f;
				a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				d = a._children;
				e = 0;
				for (f = d.length; e < f; e++) d[e]._updateTransform()
			}
			d = c.RenderFilter.getInstance();
			e = d._drawAreaList.concat();
			d._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.renderContext.onRenderStart();
			this.webGLTexture = null;
			(f = a.mask || a._scrollRect) && this.renderContext.pushMask(f);
			a._render(this.renderContext);
			f && this.renderContext.popMask();
			d.addDrawArea(b.identityRectangle);
			this.renderContext.onRenderFinish();
			d._drawAreaList =
				e;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight;
			return !0
		};
		b.identityRectangle = new c.Rectangle;
		return b
	}(c.Texture);
	c.RenderTexture = d;
	d.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1;
			this.profiler = c.Profiler.getInstance()
		}
		__extends(b, d);
		b.prototype.clearScreen = function() {};
		b.prototype.clearRect = function(a, e, b, c) {};
		b.prototype.drawImage = function(a, e, b, c, d, f, h, m, k, p) {
			this.profiler.onDrawImage()
		};
		b.prototype.setTransform = function(a) {};
		b.prototype.setAlpha = function(a, e) {};
		b.prototype.setupFont = function(a, e) {};
		b.prototype.measureText = function(a) {
			return 0
		};
		b.prototype.drawText = function(a,
			e, b, c, d, f) {
			this.profiler.onDrawImage()
		};
		b.prototype.strokeRect = function(a, e, b, c, d) {};
		b.prototype.pushMask = function(a) {};
		b.prototype.popMask = function() {};
		b.prototype.onRenderStart = function() {};
		b.prototype.onRenderFinish = function() {};
		b.prototype.setGlobalColorTransform = function(a) {};
		b.createRendererContext = function(a) {
			return null
		};
		b.imageSmoothingEnabled = !0;
		return b
	}(c.HashObject);
	c.RendererContext = d;
	d.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.MOUSE = "mouse";
		c.TOUCH = "touch";
		c.mode = "touch";
		return c
	}();
	c.InteractionMode = d;
	d.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(b, d);
		b.prototype.run = function() {};
		b.prototype.getTouchData = function(a, e, b) {
			var c = this._currentTouchTarget[a];
			null == c && (c = {}, this._currentTouchTarget[a] = c);
			c.stageX = e;
			c.stageY = b;
			c.identifier = a;
			return c
		};
		b.prototype.dispatchEvent = function(a, e) {
			c.TouchEvent.dispatchTouchEvent(e.target, a, e.identifier, e.stageX,
				e.stageY, !1, !1, !1, !0 == this.touchDownTarget[e.identifier])
		};
		b.prototype.onTouchBegan = function(a, e, b) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				var d = c.MainContext.instance.stage.hitTest(a, e);
				d && (a = this.getTouchData(b, a, e), this.touchDownTarget[b] = !0, a.target = d, a.beginTarget = d, this.dispatchEvent(c.TouchEvent.TOUCH_BEGIN, a));
				this.touchingIdentifiers.push(b)
			}
		};
		b.prototype.onTouchMove = function(a, e, b) {
			if (-1 != this.touchingIdentifiers.indexOf(b) && (a != this.lastTouchX || e != this.lastTouchY)) {
				this.lastTouchX =
					a;
				this.lastTouchY = e;
				var d = c.MainContext.instance.stage.hitTest(a, e);
				d && (a = this.getTouchData(b, a, e), a.target = d, this.dispatchEvent(c.TouchEvent.TOUCH_MOVE, a))
			}
		};
		b.prototype.onTouchEnd = function(a, e, b) {
			var d = this.touchingIdentifiers.indexOf(b); - 1 != d && (this.touchingIdentifiers.splice(d, 1), d = c.MainContext.instance.stage.hitTest(a, e)) && (a = this.getTouchData(b, a, e), delete this.touchDownTarget[b], b = a.beginTarget, a.target = d, this.dispatchEvent(c.TouchEvent.TOUCH_END, a), b == d ? this.dispatchEvent(c.TouchEvent.TOUCH_TAP,
				a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(c.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return b
	}(c.HashObject);
	c.TouchContext = d;
	d.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this)
		}
		__extends(b, d);
		b.prototype.proceed = function(a) {};
		b._getUrl = function(a) {
			var e = a.url; - 1 == e.indexOf("?") && a.method == c.URLRequestMethod.GET && a.data && a.data instanceof c.URLVariables && (e = e + "?" + a.data.toString());
			return e
		};
		b.prototype.getChangeList = function() {
			return []
		};
		return b
	}(c.HashObject);
	c.NetContext = d;
	d.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this.frameRate = 60
		}
		__extends(b, c);
		b.prototype.executeMainLoop = function(a, e) {};
		return b
	}(c.HashObject);
	c.DeviceContext = d;
	d.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.call = function(b, a) {};
		c.addCallback = function(b, a) {};
		return c
	}();
	c.ExternalInterface = d;
	d.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this.ua = navigator.userAgent.toLowerCase();
			this.trans = this._getTrans()
		}
		__extends(b, d);
		b.getInstance = function() {
			null == b.instance && (b.instance = new b);
			return b.instance
		};
		Object.defineProperty(b.prototype, "isMobile", {
			get: function() {
				c.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
				return c.MainContext.deviceType ==
					c.MainContext.DEVICE_MOBILE
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype._getHeader = function(a) {
			if ("transform" in a) return "";
			for (var e = ["webkit", "ms", "Moz", "O"], b = 0; b < e.length; b++)
				if (e[b] + "Transform" in a) return e[b];
			return ""
		};
		b.prototype._getTrans = function() {
			var a = document.createElement("div").style,
				a = this._getHeader(a);
			return "" == a ? "transform" : a + "Transform"
		};
		b.prototype.$new = function(a) {
			return this.$(document.createElement(a))
		};
		b.prototype.$ = function(a) {
			var e = document;
			if (a = a instanceof HTMLElement ?
				a : e.querySelector(a)) a.find = a.find || this.$, a.hasClass = a.hasClass || function(a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				}, a.addClass = a.addClass || function(a) {
					this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
					return this
				}, a.removeClass = a.removeClass || function(a) {
					this.hasClass(a) && (this.className = this.className.replace(a, ""));
					return this
				}, a.remove = a.remove || function() {}, a.appendTo = a.appendTo || function(a) {
					a.appendChild(this);
					return this
				}, a.prependTo = a.prependTo ||
				function(a) {
					a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
					return this
				}, a.transforms = a.transforms || function() {
					this.style[b.getInstance().trans] = b.getInstance().translate(this.position) + b.getInstance().rotate(this.rotation) + b.getInstance().scale(this.scale) + b.getInstance().skew(this.skew);
					return this
				}, a.position = a.position || {
					x: 0,
					y: 0
				}, a.rotation = a.rotation || 0, a.scale = a.scale || {
					x: 1,
					y: 1
				}, a.skew = a.skew || {
					x: 0,
					y: 0
				}, a.translates = function(a, e) {
					this.position.x = a;
					this.position.y = e -
						c.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this
				}, a.rotate = function(a) {
					this.rotation = a;
					this.transforms();
					return this
				}, a.resize = function(a, e) {
					this.scale.x = a;
					this.scale.y = e;
					this.transforms();
					return this
				}, a.setSkew = function(a, e) {
					this.skew.x = a;
					this.skew.y = e;
					this.transforms();
					return this
				};
			return a
		};
		b.prototype.translate = function(a) {
			return "translate(" + a.x + "px, " + a.y + "px) "
		};
		b.prototype.rotate = function(a) {
			return "rotate(" + a + "deg) "
		};
		b.prototype.scale = function(a) {
			return "scale(" + a.x + ", " +
				a.y + ") "
		};
		b.prototype.skew = function(a) {
			return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
		};
		return b
	}(c.HashObject);
	c.Browser = d;
	d.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(c) {
	(function(c) {
		c.getItem = function(c) {
			return null
		};
		c.setItem = function(c, b) {
			return !1
		};
		c.removeItem = function(c) {};
		c.clear = function() {}
	})(c.localStorage || (c.localStorage = {}))
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function d() {}
		d.parse = function(b) {
			b = c.SAXParser.getInstance().parserXML(b);
			if (!b || !b.childNodes) return null;
			for (var a = b.childNodes.length, e = !1, l = 0; l < a; l++) {
				var q = b.childNodes[l];
				if (1 == q.nodeType) {
					e = !0;
					break
				}
			}
			return e ? d.parseNode(q) : null
		};
		d.parseNode = function(b) {
			if (!b || 1 != b.nodeType) return null;
			var a = {};
			a.localName = b.localName;
			a.name = b.nodeName;
			b.namespaceURI && (a.namespace = b.namespaceURI);
			b.prefix && (a.prefix = b.prefix);
			for (var e = b.attributes, c = e.length, q = 0; q < c; q++) {
				var n =
					e[q],
					g = n.name;
				0 != g.indexOf("xmlns:") && (a["$" + g] = n.value)
			}
			e = b.childNodes;
			c = e.length;
			for (q = 0; q < c; q++)
				if (n = d.parseNode(e[q])) a.children || (a.children = []), n.parent = a, a.children.push(n);!a.children && (b = b.textContent.trim()) && (a.text = b);
			return a
		};
		d.findChildren = function(b, a, e) {
			e ? e.length = 0 : e = [];
			d.findByPath(b, a, e);
			return e
		};
		d.findByPath = function(b, a, e) {
			var c = a.indexOf("."),
				q; - 1 == c ? (q = a, c = !0) : (q = a.substring(0, c), a = a.substring(c + 1), c = !1);
			if (b = b.children)
				for (var n = b.length, g = 0; g < n; g++) {
					var h = b[g];
					h.localName ==
						q && (c ? e.push(h) : d.findByPath(h, a, e))
				}
		};
		d.getAttributes = function(b, a) {
			a ? a.length = 0 : a = [];
			for (var e in b) "$" == e.charAt(0) && a.push(e.substring(1));
			return a
		};
		return d
	}();
	c.XML = d;
	d.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		b.BIG_ENDIAN = "BIG_ENDIAN";
		return b
	}();
	c.Endian = d;
	d.prototype.__class__ = "egret.Endian";
	var f = function() {
		function b() {
			this.length = this.position = 0;
			this._mode = "";
			this.maxlength = 0;
			this._endian = d.LITTLE_ENDIAN;
			this.isLittleEndian = !1;
			this._mode = "Typed array";
			this.maxlength = 4;
			this.arraybytes = new ArrayBuffer(this.maxlength);
			this.unalignedarraybytestemp = new ArrayBuffer(16);
			this.endian = b.DEFAULT_ENDIAN
		}
		Object.defineProperty(b.prototype,
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
		b.prototype.ensureWriteableSpace = function(a) {
			this.ensureSpace(a + this.position)
		};
		b.prototype.setArrayBuffer = function(a) {
			this.ensureSpace(a.byteLength);
			this.length = a.byteLength;
			a = new Int8Array(a);
			(new Int8Array(this.arraybytes, 0, this.length)).set(a);
			this.position = 0
		};
		Object.defineProperty(b.prototype, "bytesAvailable", {
			get: function() {
				return this.length - this.position
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.ensureSpace = function(a) {
			if (a > this.maxlength) {
				a = a + 255 & -256;
				var e = new ArrayBuffer(a),
					b = new Uint8Array(this.arraybytes, 0, this.length);
				(new Uint8Array(e, 0, this.length)).set(b);
				this.arraybytes = e;
				this.maxlength = a
			}
		};
		b.prototype.writeByte = function(a) {
			this.ensureWriteableSpace(1);
			(new Int8Array(this.arraybytes))[this.position++] = ~~a;
			this.position > this.length && (this.length = this.position)
		};
		b.prototype.readByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" +
				this.position + ", Length=" + this.length;
			return (new Int8Array(this.arraybytes))[this.position++]
		};
		b.prototype.readBytes = function(a, e, b) {
			void 0 === e && (e = 0);
			void 0 === b && (b = 0);
			null == b && (b = a.length);
			a.ensureWriteableSpace(e + b);
			var c = new Int8Array(a.arraybytes),
				d = new Int8Array(this.arraybytes);
			c.set(d.subarray(this.position, this.position + b), e);
			this.position += b;
			b + e > a.length && (a.length += b + e - a.length)
		};
		b.prototype.writeUnsignedByte = function(a) {
			this.ensureWriteableSpace(1);
			(new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
			this.position > this.length && (this.length = this.position)
		};
		b.prototype.readUnsignedByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			return (new Uint8Array(this.arraybytes))[this.position++]
		};
		b.prototype.writeUnsignedShort = function(a) {
			this.ensureWriteableSpace(2);
			if (0 == (this.position & 1)) {
				var e = new Uint16Array(this.arraybytes);
				e[this.position >> 1] = ~~a & 65535
			} else e = new Uint16Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~a & 65535, a = new Uint8Array(this.arraybytes, this.position, 2), e = new Uint8Array(this.unalignedarraybytestemp, 0, 2), a.set(e);
			this.position += 2;
			this.position > this.length && (this.length = this.position)
		};
		b.prototype.readUTFBytes = function(a) {
			var e = "";
			a = this.position + a;
			for (var b = new DataView(this.arraybytes); this.position < a;) {
				var c = b.getUint8(this.position++);
				if (128 > c) {
					if (0 == c) break;
					e += String.fromCharCode(c)
				} else if (224 > c) e += String.fromCharCode((c & 63) << 6 | b.getUint8(this.position++) & 127);
				else if (240 > c) var d = b.getUint8(this.position++),
					e = e + String.fromCharCode((c & 31) << 12 | (d & 127) << 6 | b.getUint8(this.position++) & 127);
				else var d = b.getUint8(this.position++),
					f = b.getUint8(this.position++),
					e = e + String.fromCharCode((c & 15) << 18 | (d & 127) << 12 | f << 6 & 127 | b.getUint8(this.position++) & 127)
			}
			return e
		};
		b.prototype.readInt = function() {
			var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
			this.position += 4;
			return a
		};
		b.prototype.readShort = function() {
			var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
			this.position += 2;
			return a
		};
		b.prototype.readDouble = function() {
			var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
			this.position += 8;
			return a
		};
		b.prototype.readUnsignedShort = function() {
			if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 1)) {
				var a = new Uint16Array(this.arraybytes),
					e = this.position >> 1;
				this.position += 2;
				return a[e]
			}
			a = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes,
				this.position, 2);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(e);
			this.position += 2;
			return a[0]
		};
		b.prototype.writeUnsignedInt = function(a) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var e = new Uint32Array(this.arraybytes);
				e[this.position >> 2] = ~~a & 4294967295
			} else e = new Uint32Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~a & 4294967295, a = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(e);
			this.position += 4;
			this.position > this.length &&
				(this.length = this.position)
		};
		b.prototype.readUnsignedInt = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 3)) {
				var a = new Uint32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return a[e]
			}
			a = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(e);
			this.position += 4;
			return a[0]
		};
		b.prototype.writeFloat =
			function(a) {
				this.ensureWriteableSpace(4);
				if (0 == (this.position & 3)) {
					var e = new Float32Array(this.arraybytes);
					e[this.position >> 2] = a
				} else e = new Float32Array(this.unalignedarraybytestemp, 0, 1), e[0] = a, a = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(e);
				this.position += 4;
				this.position > this.length && (this.length = this.position)
			};
		b.prototype.readFloat = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" +
				this.length;
			if (0 == (this.position & 3)) {
				var a = new Float32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return a[e]
			}
			a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(e);
			this.position += 4;
			return a[0]
		};
		b.DEFAULT_ENDIAN = d.BIG_ENDIAN;
		return b
	}();
	c.ByteArray = f;
	f.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a, e, b) {
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
			this.initialize(a, e, b)
		}
		__extends(b, d);
		b.get = function(a, e, c, d) {
			void 0 === e && (e = null);
			void 0 === c && (c = null);
			void 0 === d && (d = !1);
			d && b.removeTweens(a);
			return new b(a, e, c)
		};
		b.removeTweens = function(a) {
			if (a.tween_count) {
				for (var e =
						b._tweens, c = e.length - 1; 0 <= c; c--) e[c]._target == a && (e[c].paused = !0, e.splice(c, 1));
				a.tween_count = 0
			}
		};
		b.pauseTweens = function(a) {
			if (a.tween_count)
				for (var e = c.Tween._tweens, b = e.length - 1; 0 <= b; b--) e[b]._target == a && (e[b].paused = !0)
		};
		b.resumeTweens = function(a) {
			if (a.tween_count)
				for (var e = c.Tween._tweens, b = e.length - 1; 0 <= b; b--) e[b]._target == a && (e[b].paused = !1)
		};
		b.tick = function(a, e) {
			void 0 === e && (e = !1);
			for (var c = b._tweens.concat(), d = c.length - 1; 0 <= d; d--) {
				var f = c[d];
				e && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ?
					1 : a)
			}
		};
		b._register = function(a, e) {
			var d = a._target,
				f = b._tweens;
			if (e) d && (d.tween_count = d.tween_count ? d.tween_count + 1 : 1), f.push(a), b._inited || (c.Ticker.getInstance().register(b.tick, null), b._inited = !0);
			else
				for (d && d.tween_count--, d = f.length; d--;)
					if (f[d] == a) {
						f.splice(d, 1);
						break
					}
		};
		b.removeAllTweens = function() {
			for (var a = b._tweens, e = 0, c = a.length; e < c; e++) {
				var d = a[e];
				d.paused = !0;
				d._target.tweenjs_count = 0
			}
			a.length = 0
		};
		b.prototype.initialize = function(a, e, c) {
			this._target = a;
			e && (this._useTicks = e.useTicks, this.ignoreGlobalPause =
				e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && b.removeTweens(a));
			this.pluginData = c || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			e && e.paused ? this.paused = !0 : b._register(this, !0);
			e && null != e.position && this.setPosition(e.position, b.NONE)
		};
		b.prototype.setPosition = function(a, e) {
			void 0 === e && (e = 1);
			0 > a && (a = 0);
			var b = a,
				c = !1;
			b >= this.duration && (this.loop ? b %= this.duration : (b = this.duration, c = !0));
			if (b == this._prevPos) return c;
			var d = this._prevPos;
			this.position = this._prevPos = b;
			this._prevPosition = a;
			if (this._target)
				if (c) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
				for (var f = 0, h = this._steps.length; f < h && !(this._steps[f].t > b); f++);
				f = this._steps[f - 1];
				this._updateTargetProps(f, (this._stepPosition = b - f.t) / f.d)
			}
			0 != e && 0 < this._actions.length && (this._useTicks ? this._runActions(b, b) : 1 == e && b < d ? (d != this.duration && this._runActions(d, this.duration), this._runActions(0, b, !0)) : this._runActions(d, b));
			c && this.setPaused(!0);
			this.dispatchEventWith("change");
			return c
		};
		b.prototype._runActions = function(a, e, b) {
			void 0 === b && (b = !1);
			var c = a,
				d = e,
				f = -1,
				h = this._actions.length,
				m = 1;
			a > e && (c = e, d = a, f = h, h = m = -1);
			for (;
				(f += m) != h;) {
				e = this._actions[f];
				var k = e.t;
				(k == d || k > c && k < d || b && k == a) && e.f.apply(e.o, e.p)
			}
		};
		b.prototype._updateTargetProps = function(a, e) {
			var c, d, f, g;
			if (a || 1 != e) {
				if (this.passive = !!a.v) return;
				a.e && (e = a.e(e, 0, 1, 1));
				c = a.p0;
				d = a.p1
			} else this.passive = !1, c = d = this._curQueueProps;
			for (var h in this._initQueueProps) {
				null == (f = c[h]) && (c[h] = f = this._initQueueProps[h]);
				null ==
					(g = d[h]) && (d[h] = g = f);
				f = f == g || 0 == e || 1 == e || "number" != typeof f ? 1 == e ? g : f : f + (g - f) * e;
				var m = !1;
				if (g = b._plugins[h])
					for (var k = 0, p = g.length; k < p; k++) {
						var r = g[k].tween(this, h, f, c, d, e, !!a && c == d, !a);
						r == b.IGNORE ? m = !0 : f = r
					}
				m || (this._target[h] = f)
			}
		};
		b.prototype.setPaused = function(a) {
			this.paused = a;
			b._register(this, !a);
			return this
		};
		b.prototype._cloneProps = function(a) {
			var e = {},
				b;
			for (b in a) e[b] = a[b];
			return e
		};
		b.prototype._addStep = function(a) {
			0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
			return this
		};
		b.prototype._appendQueueProps = function(a) {
			var e, c, d, f, g, h;
			for (h in a)
				if (void 0 === this._initQueueProps[h]) {
					c = this._target[h];
					if (e = b._plugins[h])
						for (d = 0, f = e.length; d < f; d++) c = e[d].init(this, h, c);
					this._initQueueProps[h] = this._curQueueProps[h] = void 0 === c ? null : c
				}
			for (h in a) {
				c = this._curQueueProps[h];
				if (e = b._plugins[h])
					for (g = g || {}, d = 0, f = e.length; d < f; d++) e[d].step && e[d].step(this, h, c, a[h], g);
				this._curQueueProps[h] = a[h]
			}
			g && this._appendQueueProps(g);
			return this._curQueueProps
		};
		b.prototype._addAction = function(a) {
			a.t =
				this.duration;
			this._actions.push(a);
			return this
		};
		b.prototype._set = function(a, e) {
			for (var b in a) e[b] = a[b]
		};
		b.prototype.wait = function(a, e) {
			if (null == a || 0 >= a) return this;
			var b = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: a,
				p0: b,
				p1: b,
				v: e
			})
		};
		b.prototype.to = function(a, e, b) {
			void 0 === b && (b = void 0);
			if (isNaN(e) || 0 > e) e = 0;
			return this._addStep({
				d: e || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: b,
				p1: this._cloneProps(this._appendQueueProps(a))
			})
		};
		b.prototype.call = function(a, e, b) {
			void 0 === e && (e = void 0);
			void 0 === b && (b = void 0);
			return this._addAction({
				f: a,
				p: b ? b : [],
				o: e ? e : this._target
			})
		};
		b.prototype.set = function(a, e) {
			void 0 === e && (e = null);
			return this._addAction({
				f: this._set,
				o: this,
				p: [a, e ? e : this._target]
			})
		};
		b.prototype.play = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!1])
		};
		b.prototype.pause = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!0])
		};
		b.prototype.tick = function(a) {
			this.paused || this.setPosition(this._prevPosition + a)
		};
		b.NONE = 0;
		b.LOOP = 1;
		b.REVERSE = 2;
		b._tweens = [];
		b.IGNORE = {};
		b._plugins = {};
		b._inited = !1;
		return b
	}(c.EventDispatcher);
	c.Tween = d;
	d.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function d() {
			c.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
		}
		d.get = function(b) {
			-1 > b && (b = -1);
			1 < b && (b = 1);
			return function(a) {
				return 0 == b ? a : 0 > b ? a * (a * -b + 1 + b) : a * ((2 - a) * b + (1 - b))
			}
		};
		d.getPowIn = function(b) {
			return function(a) {
				return Math.pow(a, b)
			}
		};
		d.getPowOut = function(b) {
			return function(a) {
				return 1 - Math.pow(1 - a, b)
			}
		};
		d.getPowInOut = function(b) {
			return function(a) {
				return 1 > (a *= 2) ? 0.5 * Math.pow(a, b) : 1 - 0.5 * Math.abs(Math.pow(2 - a, b))
			}
		};
		d.sineIn = function(b) {
			return 1 - Math.cos(b *
				Math.PI / 2)
		};
		d.sineOut = function(b) {
			return Math.sin(b * Math.PI / 2)
		};
		d.sineInOut = function(b) {
			return -0.5 * (Math.cos(Math.PI * b) - 1)
		};
		d.getBackIn = function(b) {
			return function(a) {
				return a * a * ((b + 1) * a - b)
			}
		};
		d.getBackOut = function(b) {
			return function(a) {
				return --a * a * ((b + 1) * a + b) + 1
			}
		};
		d.getBackInOut = function(b) {
			b *= 1.525;
			return function(a) {
				return 1 > (a *= 2) ? 0.5 * a * a * ((b + 1) * a - b) : 0.5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
			}
		};
		d.circIn = function(b) {
			return -(Math.sqrt(1 - b * b) - 1)
		};
		d.circOut = function(b) {
			return Math.sqrt(1 - --b * b)
		};
		d.circInOut = function(b) {
			return 1 >
				(b *= 2) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
		};
		d.bounceIn = function(b) {
			return 1 - d.bounceOut(1 - b)
		};
		d.bounceOut = function(b) {
			return b < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
		};
		d.bounceInOut = function(b) {
			return 0.5 > b ? 0.5 * d.bounceIn(2 * b) : 0.5 * d.bounceOut(2 * b - 1) + 0.5
		};
		d.getElasticIn = function(b, a) {
			var e = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var d = a / e * Math.asin(1 / b);
				return -(b * Math.pow(2, 10 *
					(c -= 1)) * Math.sin((c - d) * e / a))
			}
		};
		d.getElasticOut = function(b, a) {
			var e = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var d = a / e * Math.asin(1 / b);
				return b * Math.pow(2, -10 * c) * Math.sin((c - d) * e / a) + 1
			}
		};
		d.getElasticInOut = function(b, a) {
			var e = 2 * Math.PI;
			return function(c) {
				var d = a / e * Math.asin(1 / b);
				return 1 > (c *= 2) ? -0.5 * b * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - d) * e / a) : b * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - d) * e / a) * 0.5 + 1
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
	c.Ease = d;
	d.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {
			this.type = c.EFFECT
		}
		c.prototype.play = function(b) {
			void 0 === b && (b = !1);
			var a = this.audio;
			a && (isNaN(a.duration) || (a.currentTime = 0), a.loop = b, a.play())
		};
		c.prototype.pause = function() {
			var b = this.audio;
			b && b.pause()
		};
		c.prototype.load = function() {
			var b = this.audio;
			b && b.load()
		};
		c.prototype.addEventListener = function(b, a) {
			this.audio && this.audio.addEventListener(b, a, !1)
		};
		c.prototype.removeEventListener = function(b, a) {
			this.audio && this.audio.removeEventListener(b, a, !1)
		};
		c.prototype.setVolume =
			function(b) {
				var a = this.audio;
				a && (a.volume = b)
			};
		c.prototype.getVolume = function() {
			return this.audio ? this.audio.volume : 0
		};
		c.prototype.preload = function(b) {
			this.type = b
		};
		c.prototype._setAudio = function(b) {
			this.audio = b
		};
		c.MUSIC = "music";
		c.EFFECT = "effect";
		return c
	}();
	c.Sound = d;
	d.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.isNumber = function(b) {
			return "number" === typeof b && !isNaN(b)
		};
		return c
	}();
	c.NumberUtils = d;
	d.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
Function.prototype.bind || (Function.prototype.bind = function(c) {
	if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	var d = Array.prototype.slice.call(arguments, 1),
		f = this,
		b = function() {},
		a = function() {
			return f.apply(this instanceof b && c ? this : c, d.concat(Array.prototype.slice.call(arguments)))
		};
	b.prototype = this.prototype;
	a.prototype = new b;
	return a
});
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	RES;
(function(c) {
	var d = function(c) {
		function b(a, e, b) {
			void 0 === e && (e = !1);
			void 0 === b && (b = !1);
			c.call(this, a, e, b);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(b, c);
		b.dispatchResourceEvent = function(a, e, c, d, f, g) {
			void 0 === c && (c = "");
			void 0 === d && (d = null);
			void 0 === f && (f = 0);
			void 0 === g && (g = 0);
			var h = egret.Event._getPropertyData(b);
			h.groupName = c;
			h.resItem = d;
			h.itemsLoaded = f;
			h.itemsTotal = g;
			egret.Event._dispatchByTarget(b, a, e, h)
		};
		b.ITEM_LOAD_ERROR = "itemLoadError";
		b.CONFIG_COMPLETE = "configComplete";
		b.GROUP_PROGRESS = "groupProgress";
		b.GROUP_COMPLETE = "groupComplete";
		return b
	}(egret.Event);
	c.ResourceEvent = d;
	d.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(c) {
	var d = function() {
		function c(b, a, e) {
			this._loaded = !1;
			this.name = b;
			this.url = a;
			this.type = e
		}
		Object.defineProperty(c.prototype, "loaded", {
			get: function() {
				return this.data ? this.data.loaded : this._loaded
			},
			set: function(b) {
				this.data && (this.data.loaded = b);
				this._loaded = b
			},
			enumerable: !0,
			configurable: !0
		});
		c.prototype.toString = function() {
			return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
		};
		c.TYPE_XML = "xml";
		c.TYPE_IMAGE = "image";
		c.TYPE_BIN = "bin";
		c.TYPE_TEXT = "text";
		c.TYPE_JSON =
			"json";
		c.TYPE_SHEET = "sheet";
		c.TYPE_FONT = "font";
		c.TYPE_SOUND = "sound";
		return c
	}();
	c.ResourceItem = d;
	d.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(c) {
	var d = function() {
		function d() {
			this.keyMap = {};
			this.groupDic = {};
			c.configInstance = this
		}
		d.prototype.getGroupByName = function(b) {
			var a = [];
			if (!this.groupDic[b]) return a;
			b = this.groupDic[b];
			for (var e = b.length, c = 0; c < e; c++) a.push(this.parseResourceItem(b[c]));
			return a
		};
		d.prototype.getRawGroupByName = function(b) {
			return this.groupDic[b] ? this.groupDic[b] : []
		};
		d.prototype.createGroup = function(b, a, e) {
			void 0 === e && (e = !1);
			if (!e && this.groupDic[b] || !a || 0 == a.length) return !1;
			e = this.groupDic;
			for (var c = [], d = a.length,
					f = 0; f < d; f++) {
				var g = a[f],
					h = e[g];
				if (h)
					for (var g = h.length, m = 0; m < g; m++) {
						var k = h[m]; - 1 == c.indexOf(k) && c.push(k)
					} else(k = this.keyMap[g]) && -1 == c.indexOf(k) && c.push(k)
			}
			if (0 == c.length) return !1;
			this.groupDic[b] = c;
			return !0
		};
		d.prototype.parseConfig = function(b, a) {
			if (b) {
				var e = b.resources;
				if (e)
					for (var c = e.length, d = 0; d < c; d++) {
						var f = e[d],
							g = f.url;
						g && -1 == g.indexOf("://") && (f.url = a + g);
						this.addItemToKeyMap(f)
					}
				if (e = b.groups)
					for (c = e.length, d = 0; d < c; d++) {
						for (var g = e[d], h = [], m = g.keys.split(","), k = m.length, p = 0; p < k; p++) f = m[p].trim(), (f = this.keyMap[f]) && -1 == h.indexOf(f) && h.push(f);
						this.groupDic[g.name] = h
					}
			}
		};
		d.prototype.addSubkey = function(b, a) {
			var e = this.keyMap[a];
			e && !this.keyMap[b] && (this.keyMap[b] = e)
		};
		d.prototype.addItemToKeyMap = function(b) {
			this.keyMap[b.name] || (this.keyMap[b.name] = b);
			if (b.hasOwnProperty("subkeys")) {
				var a = b.subkeys.split(",");
				b.subkeys = a;
				for (var e = a.length, c = 0; c < e; c++) {
					var d = a[c];
					null == this.keyMap[d] && (this.keyMap[d] = b)
				}
			}
		};
		d.prototype.getName = function(b) {
			return (b = this.keyMap[b]) ? b.name : ""
		};
		d.prototype.getType =
			function(b) {
				return (b = this.keyMap[b]) ? b.type : ""
			};
		d.prototype.getRawResourceItem = function(b) {
			return this.keyMap[b]
		};
		d.prototype.getResourceItem = function(b) {
			return (b = this.keyMap[b]) ? this.parseResourceItem(b) : null
		};
		d.prototype.parseResourceItem = function(b) {
			var a = new c.ResourceItem(b.name, b.url, b.type);
			a.data = b;
			return a
		};
		return d
	}();
	c.ResourceConfig = d;
	d.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
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
		__extends(b, d);
		b.prototype.isGroupInLoading = function(a) {
			return void 0 !== this.itemListDic[a]
		};
		b.prototype.loadGroup = function(a, e, b) {
			void 0 === b && (b = 0);
			if (!this.itemListDic[e] && e)
				if (a && 0 != a.length) {
					this.priorityQueue[b] ? this.priorityQueue[b].push(e) : this.priorityQueue[b] =
						[e];
					this.itemListDic[e] = a;
					b = a.length;
					for (var d = 0; d < b; d++) a[d].groupName = e;
					this.groupTotalDic[e] = a.length;
					this.numLoadedDic[e] = 0;
					this.next()
				} else egret.Logger.warning('RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4\uff1a"' + e + '"'), a = new c.ResourceEvent(c.ResourceEvent.GROUP_COMPLETE), a.groupName = e, this.dispatchEvent(a)
		};
		b.prototype.loadItem = function(a) {
			this.lazyLoadList.push(a);
			a.groupName = "";
			this.next()
		};
		b.prototype.next = function() {
			for (; this.loadingCount < this.thread;) {
				var a =
					this.getOneResourceItem();
				if (!a) break;
				this.loadingCount++;
				if (a.loaded) this.onItemComplete(a);
				else {
					var e = this.analyzerDic[a.type];
					e || (e = this.analyzerDic[a.type] = egret.Injector.getInstance(c.AnalyzerBase, a.type));
					e.loadFile(a, this.onItemComplete, this)
				}
			}
		};
		b.prototype.getOneResourceItem = function() {
			var a = Number.NEGATIVE_INFINITY,
				e;
			for (e in this.priorityQueue) a = Math.max(a, e);
			a = this.priorityQueue[a];
			if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			e = a.length;
			for (var b, c =
					0; c < e; c++) {
				this.queueIndex >= e && (this.queueIndex = 0);
				b = this.itemListDic[a[this.queueIndex]];
				if (0 < b.length) break;
				this.queueIndex++
			}
			return 0 == b.length ? null : b.shift()
		};
		b.prototype.onItemComplete = function(a) {
			this.loadingCount--;
			var e = a.groupName;
			a.loaded || c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.ITEM_LOAD_ERROR, e, a);
			if (e) {
				this.numLoadedDic[e] ++;
				var b = this.numLoadedDic[e],
					d = this.groupTotalDic[e];
				c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.GROUP_PROGRESS,
					e, a, b, d);
				b == d && (this.removeGroupName(e), delete this.groupTotalDic[e], delete this.numLoadedDic[e], delete this.itemListDic[e], c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, e))
			} else this.callBack.call(this.resInstance, a);
			this.next()
		};
		b.prototype.removeGroupName = function(a) {
			for (var e in this.priorityQueue) {
				for (var b = this.priorityQueue[e], c = b.length, d = 0, f = !1, c = b.length, h = 0; h < c; h++) {
					if (b[h] == a) {
						b.splice(d, 1);
						f = !0;
						break
					}
					d++
				}
				if (f) {
					0 == b.length && delete this.priorityQueue[e];
					break
				}
			}
		};
		return b
	}(egret.EventDispatcher);
	c.ResourceLoader = d;
	d.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this.resourceConfig = c.configInstance
		}
		__extends(b, d);
		b.prototype.addSubkey = function(a, e) {
			this.resourceConfig.addSubkey(a, e)
		};
		b.prototype.loadFile = function(a, e, b) {};
		b.prototype.getRes = function(a) {};
		b.prototype.destroyRes = function(a) {
			return !1
		};
		b.getStringPrefix = function(a) {
			if (!a) return "";
			var e = a.indexOf(".");
			return -1 != e ? a.substring(0, e) : ""
		};
		b.getStringTail = function(a) {
			if (!a) return "";
			var e = a.indexOf(".");
			return -1 != e ? a.substring(e + 1) : ""
		};
		return b
	}(egret.HashObject);
	c.AnalyzerBase = d;
	d.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler
		}
		__extends(b, c);
		b.prototype.loadFile = function(a, e, b) {
			if (this.fileDic[a.name]) e.call(b, a);
			else {
				var c = this.getLoader();
				this.resItemDic[c.hashCode] = {
					item: a,
					func: e,
					thisObject: b
				};
				c.load(new egret.URLRequest(a.url))
			}
		};
		b.prototype.getLoader = function() {
			var a = this.recycler.pop();
			a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE,
				this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			a.dataFormat = this._dataFormat;
			return a
		};
		b.prototype.onLoadFinish = function(a) {
			var e = a.target,
				b = this.resItemDic[e.hashCode];
			delete this.resItemDic[e.hashCode];
			this.recycler.push(e);
			var c = b.item,
				d = b.func;
			c.loaded = a.type == egret.Event.COMPLETE;
			c.loaded && this.analyzeData(c, e.data);
			d.call(b.thisObject, c)
		};
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			!this.fileDic[b] && e && (this.fileDic[b] = e)
		};
		b.prototype.getRes =
			function(a) {
				return this.fileDic[a]
			};
		b.prototype.hasRes = function(a) {
			return null != this.getRes(a)
		};
		b.prototype.destroyRes = function(a) {
			return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
		};
		return b
	}(c.AnalyzerBase);
	c.BinAnalyzer = d;
	d.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
		}
		__extends(b, c);
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			!this.fileDic[b] && e && (this.fileDic[b] = e, (b = a.data) && b.scale9grid && (b = b.scale9grid.split(","), e.scale9Grid = new egret.Rectangle(parseInt(b[0]), parseInt(b[1]), parseInt(b[2]), parseInt(b[3]))))
		};
		return b
	}(c.BinAnalyzer);
	c.ImageAnalyzer = d;
	d.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(b, c);
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			if (!this.fileDic[b] && e) try {
				this.fileDic[b] = JSON.parse(e)
			} catch (c) {
				egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + "\ndata:" + e)
			}
		};
		return b
	}(c.BinAnalyzer);
	c.JsonAnalyzer = d;
	d.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(b, c);
		return b
	}(c.BinAnalyzer);
	c.TextAnalyzer = d;
	d.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(b, d);
		b.prototype.getRes = function(a) {
			var e = this.fileDic[a];
			e || (e = this.textureMap[a]);
			!e && (e = c.AnalyzerBase.getStringPrefix(a), e = this.fileDic[e]) && (a = c.AnalyzerBase.getStringTail(a), e = e.getTexture(a));
			return e
		};
		b.prototype.onLoadFinish = function(a) {
			var e = a.target,
				b = this.resItemDic[e.hashCode];
			delete this.resItemDic[e.hashCode];
			this.recycler.push(e);
			var c =
				b.item,
				d = b.func;
			c.loaded = a.type == egret.Event.COMPLETE;
			c.loaded && this.analyzeData(c, e.data);
			"string" == typeof e.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(c, d, b.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : d.call(b.thisObject, c)
		};
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			if (!this.fileDic[b] && e) {
				var c;
				if ("string" == typeof e) {
					try {
						c = JSON.parse(e)
					} catch (d) {
						egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
					}
					c && (this.sheetMap[b] =
						c, a.loaded = !1, a.url = this.getRelativePath(a.url, c.file))
				} else c = this.sheetMap[b], delete this.sheetMap[b], e && (c = this.parseSpriteSheet(e, c, a.data && a.data.subkeys ? "" : b), this.fileDic[b] = c)
			}
		};
		b.prototype.getRelativePath = function(a, e) {
			a = a.split("\\").join("/");
			var b = a.lastIndexOf("/");
			return a = -1 != b ? a.substring(0, b + 1) + e : e
		};
		b.prototype.parseSpriteSheet = function(a, e, b) {
			e = e.frames;
			if (!e) return null;
			var c = new egret.SpriteSheet(a),
				d = this.textureMap,
				f;
			for (f in e) {
				var h = e[f];
				a = c.createTexture(f, h.x, h.y, h.w, h.h,
					h.offX, h.offY, h.sourceW, h.sourceH);
				h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
				null == d[f] && (d[f] = a, b && this.addSubkey(f, b))
			}
			return c
		};
		return b
	}(c.BinAnalyzer);
	c.SheetAnalyzer = d;
	d.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this)
		}
		__extends(b, c);
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			if (!this.fileDic[b] && e) {
				var c;
				"string" == typeof e ? (c = e, this.sheetMap[b] = c, a.loaded = !1, a.url = this.getTexturePath(a.url, c)) : (c = this.sheetMap[b], delete this.sheetMap[b], e && (c = new egret.BitmapTextSpriteSheet(e, c), this.fileDic[b] = c))
			}
		};
		b.prototype.getTexturePath = function(a, e) {
			var b = "",
				c = e.split("\n")[2],
				d = c.indexOf('file="'); - 1 != d && (c = c.substring(d + 6), d = c.indexOf('"'), b = c.substring(0,
				d));
			a = a.split("\\").join("/");
			d = a.lastIndexOf("/");
			return a = -1 != d ? a.substring(0, d + 1) + b : b
		};
		return b
	}(c.SheetAnalyzer);
	c.FontAnalyzer = d;
	d.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(b, c);
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			!this.fileDic[b] && e && (this.fileDic[b] = e, (b = a.data) && b.soundType ? e.preload(b.soundType) : e.preload(egret.Sound.EFFECT))
		};
		return b
	}(c.BinAnalyzer);
	c.SoundAnalyzer = d;
	d.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(c) {
		function b() {
			c.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(b, c);
		b.prototype.analyzeData = function(a, e) {
			var b = a.name;
			if (!this.fileDic[b] && e) try {
				var c = egret.XML.parse(e);
				this.fileDic[b] = c
			} catch (d) {}
		};
		return b
	}(c.BinAnalyzer);
	c.XMLAnalyzer = d;
	d.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	c.loadConfig = function(b, a, e) {
		void 0 === a && (a = "");
		void 0 === e && (e = "json");
		f.loadConfig(b, a, e)
	};
	c.loadGroup = function(b, a) {
		void 0 === a && (a = 0);
		f.loadGroup(b, a)
	};
	c.isGroupLoaded = function(b) {
		return f.isGroupLoaded(b)
	};
	c.getGroupByName = function(b) {
		return f.getGroupByName(b)
	};
	c.createGroup = function(b, a, e) {
		void 0 === e && (e = !1);
		return f.createGroup(b, a, e)
	};
	c.hasRes = function(b) {
		return f.hasRes(b)
	};
	c.getRes = function(b) {
		return f.getRes(b)
	};
	c.getResAsync = function(b, a, e) {
		f.getResAsync(b, a, e)
	};
	c.getResByUrl =
		function(b, a, e, c) {
			void 0 === c && (c = "");
			f.getResByUrl(b, a, e, c)
		};
	c.destroyRes = function(b) {
		return f.destroyRes(b)
	};
	c.setMaxLoadingThread = function(b) {
		f.setMaxLoadingThread(b)
	};
	c.addEventListener = function(b, a, e, c, d) {
		void 0 === c && (c = !1);
		void 0 === d && (d = 0);
		f.addEventListener(b, a, e, c, d)
	};
	c.removeEventListener = function(b, a, e, c) {
		void 0 === c && (c = !1);
		f.removeEventListener(b, a, e, c)
	};
	var d = function(b) {
		function a() {
			b.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups =
				[];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(a, b);
		a.prototype.getAnalyzerByType = function(a) {
			var b = this.analyzerDic[a];
			b || (b = this.analyzerDic[a] = egret.Injector.getInstance(c.AnalyzerBase, a));
			return b
		};
		a.prototype.init = function() {
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer,
				c.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase, c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(c.AnalyzerBase,
				c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
			this.resConfig = new c.ResourceConfig;
			this.resLoader = new c.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
		};
		a.prototype.loadConfig = function(a, b, c) {
			void 0 === c && (c = "json");
			this.configItemList.push({
				url: a,
				resourceRoot: b,
				type: c
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		a.prototype.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var e = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = e;
			for (var b = e.length, d = [], f = 0; f < b; f++) {
				var g =
					e[f],
					g = new c.ResourceItem(g.url, g.url, g.type);
				d.push(g)
			}
			this.resLoader.loadGroup(d, a.GROUP_CONFIG, Number.MAX_VALUE)
		};
		a.prototype.isGroupLoaded = function(a) {
			return -1 != this.loadedGroups.indexOf(a)
		};
		a.prototype.getGroupByName = function(a) {
			return this.resConfig.getGroupByName(a)
		};
		a.prototype.loadGroup = function(a, b) {
			void 0 === b && (b = 0);
			if (-1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a))
				if (this.configComplete) {
					var c = this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(c, a, b)
				} else this.groupNameList.push({
					name: a,
					priority: b
				})
		};
		a.prototype.createGroup = function(a, b, c) {
			void 0 === c && (c = !1);
			if (c) {
				var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
			}
			return this.resConfig.createGroup(a, b, c)
		};
		a.prototype.onGroupComp = function(e) {
			if (e.groupName == a.GROUP_CONFIG) {
				e = this.loadingConfigList.length;
				for (var b = 0; b < e; b++) {
					var d = this.loadingConfigList[b],
						f = this.getAnalyzerByType(d.type),
						g = f.getRes(d.url);
					f.destroyRes(d.url);
					this.resConfig.parseConfig(g, d.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList =
					null;
				c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
				d = this.groupNameList;
				e = d.length;
				for (b = 0; b < e; b++) f = d[b], this.loadGroup(f.name, f.priority);
				this.groupNameList = []
			} else this.loadedGroups.push(e.groupName), this.dispatchEvent(e)
		};
		a.prototype.hasRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (a = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a), "" == b) ? !1 : !0
		};
		a.prototype.getRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (b = c.AnalyzerBase.getStringPrefix(a),
				b = this.resConfig.getType(b), "" == b) ? null : this.getAnalyzerByType(b).getRes(a)
		};
		a.prototype.getResAsync = function(a, b, d) {
			var f = this.resConfig.getType(a),
				g = this.resConfig.getName(a);
			if ("" == f && (g = c.AnalyzerBase.getStringPrefix(a), f = this.resConfig.getType(g), "" == f)) {
				b.call(d, null);
				return
			}(f = this.getAnalyzerByType(f).getRes(a)) ? b.call(d, f): (a = {
				key: a,
				compFunc: b,
				thisObject: d
			}, this.asyncDic[g] ? this.asyncDic[g].push(a) : (this.asyncDic[g] = [a], g = this.resConfig.getResourceItem(g), this.resLoader.loadItem(g)))
		};
		a.prototype.getResByUrl =
			function(a, b, d, f) {
				void 0 === f && (f = "");
				if (a) {
					f || (f = this.getTypeByUrl(a));
					var g = this.getAnalyzerByType(f).getRes(a);
					g ? b.call(d, g) : (b = {
						key: a,
						compFunc: b,
						thisObject: d
					}, this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new c.ResourceItem(a, a, f), this.resLoader.loadItem(a)))
				} else b.call(d, null)
			};
		a.prototype.getTypeByUrl = function(a) {
			(a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
			switch (a) {
				case c.ResourceItem.TYPE_XML:
				case c.ResourceItem.TYPE_JSON:
				case c.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
					a = c.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					a = c.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					a = c.ResourceItem.TYPE_TEXT;
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
					a = c.ResourceItem.TYPE_SOUND;
					break;
				default:
					a = c.ResourceItem.TYPE_BIN
			}
			return a
		};
		a.prototype.onResourceItemComp = function(a) {
			var b = this.asyncDic[a.name];
			delete this.asyncDic[a.name];
			a = this.getAnalyzerByType(a.type);
			for (var c = b.length, d = 0; d < c; d++) {
				var f =
					b[d],
					h = a.getRes(f.key);
				f.compFunc.call(f.thisObject, h, f.key)
			}
		};
		a.prototype.destroyRes = function(a) {
			var b = this.resConfig.getRawGroupByName(a);
			if (b) {
				var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
				a = b.length;
				for (var d = 0; d < a; d++) {
					c = b[d];
					c.loaded = !1;
					var f = this.getAnalyzerByType(c.type);
					f.destroyRes(c.name)
				}
				return !0
			}
			b = this.resConfig.getType(a);
			if ("" == b) return !1;
			c = this.resConfig.getRawResourceItem(a);
			c.loaded = !1;
			f = this.getAnalyzerByType(b);
			return f.destroyRes(a)
		};
		a.prototype.setMaxLoadingThread =
			function(a) {
				1 > a && (a = 1);
				this.resLoader.thread = a
			};
		a.GROUP_CONFIG = "RES__CONFIG";
		return a
	}(egret.EventDispatcher);
	d.prototype.__class__ = "RES.Resource";
	var f = new d
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this.targetLevel = Number.MAX_VALUE;
				this.updateCompleteQueue = new d.DepthQueue;
				this.invalidateClientPropertiesFlag = this.invalidatePropertiesFlag = !1;
				this.invalidatePropertiesQueue = new d.DepthQueue;
				this.invalidateClientSizeFlag = this.invalidateSizeFlag = !1;
				this.invalidateSizeQueue = new d.DepthQueue;
				this.invalidateDisplayListFlag = !1;
				this.invalidateDisplayListQueue = new d.DepthQueue;
				this.listenersAttached = !1
			}
			__extends(a, b);
			a.prototype.invalidateProperties =
				function(a) {
					this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners());
					this.targetLevel <= a.nestLevel && (this.invalidateClientPropertiesFlag = !0);
					this.invalidatePropertiesQueue.insert(a)
				};
			a.prototype.validateProperties = function() {
				for (var a = this.invalidatePropertiesQueue.shift(); a;) a.parent && (a.validateProperties(), a.updateCompletePendingFlag || (this.updateCompleteQueue.insert(a), a.updateCompletePendingFlag = !0)), a = this.invalidatePropertiesQueue.shift();
				this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1)
			};
			a.prototype.invalidateSize = function(a) {
				this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners());
				this.targetLevel <= a.nestLevel && (this.invalidateClientSizeFlag = !0);
				this.invalidateSizeQueue.insert(a)
			};
			a.prototype.validateSize = function() {
				for (var a = this.invalidateSizeQueue.pop(); a;) a.parent && (a.validateSize(), a.updateCompletePendingFlag || (this.updateCompleteQueue.insert(a), a.updateCompletePendingFlag = !0)), a = this.invalidateSizeQueue.pop();
				this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1)
			};
			a.prototype.invalidateDisplayList = function(a) {
				this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners());
				this.invalidateDisplayListQueue.insert(a)
			};
			a.prototype.validateDisplayList = function() {
				for (var a = this.invalidateDisplayListQueue.shift(); a;) a.parent && (a.validateDisplayList(), a.updateCompletePendingFlag || (this.updateCompleteQueue.insert(a),
					a.updateCompletePendingFlag = !0)), a = this.invalidateDisplayListQueue.shift();
				this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
			};
			a.prototype.attachListeners = function() {
				d.UIGlobals.stage.addEventListener(c.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
				d.UIGlobals.stage.addEventListener(c.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				d.UIGlobals.stage.invalidate();
				this.listenersAttached = !0
			};
			a.prototype.doPhasedInstantiationCallBack = function(a) {
				d.UIGlobals.stage.removeEventListener(c.Event.ENTER_FRAME,
					this.doPhasedInstantiationCallBack, this);
				d.UIGlobals.stage.removeEventListener(c.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				this.doPhasedInstantiation()
			};
			a.prototype.doPhasedInstantiation = function() {
				this.invalidatePropertiesFlag && this.validateProperties();
				this.invalidateSizeFlag && this.validateSize();
				this.invalidateDisplayListFlag && this.validateDisplayList();
				if (this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag) this.attachListeners();
				else {
					this.listenersAttached = !1;
					for (var a = this.updateCompleteQueue.pop(); a;) a.initialized || (a.initialized = !0), a.hasEventListener(d.UIEvent.UPDATE_COMPLETE) && d.UIEvent.dispatchUIEvent(a, d.UIEvent.UPDATE_COMPLETE), a.updateCompletePendingFlag = !1, a = this.updateCompleteQueue.pop();
					d.UIEvent.dispatchUIEvent(this, d.UIEvent.UPDATE_COMPLETE)
				}
			};
			a.prototype.validateNow = function() {
				for (var a = 0; this.listenersAttached && 100 > a++;) this.doPhasedInstantiationCallBack()
			};
			a.prototype.validateClient = function(a, b) {
				void 0 === b && (b = !1);
				var c, f = !1,
					g = this.targetLevel;
				this.targetLevel == Number.MAX_VALUE && (this.targetLevel = a.nestLevel);
				for (; !f;) {
					f = !0;
					for (c = this.invalidatePropertiesQueue.removeSmallestChild(a); c;) c.parent && (c.validateProperties(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0)), c = this.invalidatePropertiesQueue.removeSmallestChild(a);
					this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1);
					this.invalidateClientPropertiesFlag = !1;
					for (c = this.invalidateSizeQueue.removeLargestChild(a); c;) {
						c.parent &&
							(c.validateSize(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0));
						if (this.invalidateClientPropertiesFlag && (c = this.invalidatePropertiesQueue.removeSmallestChild(a))) {
							this.invalidatePropertiesQueue.insert(c);
							f = !1;
							break
						}
						c = this.invalidateSizeQueue.removeLargestChild(a)
					}
					this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1);
					this.invalidateClientSizeFlag = this.invalidateClientPropertiesFlag = !1;
					if (!b) {
						for (c = this.invalidateDisplayListQueue.removeSmallestChild(a); c;) {
							c.parent &&
								(c.validateDisplayList(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0));
							if (this.invalidateClientPropertiesFlag && (c = this.invalidatePropertiesQueue.removeSmallestChild(a))) {
								this.invalidatePropertiesQueue.insert(c);
								f = !1;
								break
							}
							if (this.invalidateClientSizeFlag && (c = this.invalidateSizeQueue.removeLargestChild(a))) {
								this.invalidateSizeQueue.insert(c);
								f = !1;
								break
							}
							c = this.invalidateDisplayListQueue.removeSmallestChild(a)
						}
						this.invalidateDisplayListQueue.isEmpty() &&
							(this.invalidateDisplayListFlag = !1)
					}
				}
				if (g == Number.MAX_VALUE && (this.targetLevel = Number.MAX_VALUE, !b))
					for (c = this.updateCompleteQueue.removeLargestChild(a); c;) c.initialized || (c.initialized = !0), c.hasEventListener(d.UIEvent.UPDATE_COMPLETE) && d.UIEvent.dispatchUIEvent(c, d.UIEvent.UPDATE_COMPLETE), c.updateCompletePendingFlag = !1, c = this.updateCompleteQueue.removeLargestChild(a)
			};
			return a
		}(c.EventDispatcher);
		d.LayoutManager = f;
		f.prototype.__class__ = "egret.gui.LayoutManager"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(d) {
		var f = function() {
			function a() {
				this.depthBins = [];
				this.minDepth = 0;
				this.maxDepth = -1
			}
			a.prototype.insert = function(a) {
				var c = a.nestLevel,
					d = a.hashCode;
				this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = c : (c < this.minDepth && (this.minDepth = c), c > this.maxDepth && (this.maxDepth = c));
				var f = this.depthBins[c];
				f ? null == f.items[d] && (f.items[d] = a, f.length++) : (f = new b, this.depthBins[c] = f, f.items[d] = a, f.length++)
			};
			a.prototype.pop = function() {
				var a = null;
				if (this.minDepth <= this.maxDepth) {
					for (var b = this.depthBins[this.maxDepth]; !b ||
						0 == b.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) return null;
						b = this.depthBins[this.maxDepth]
					}
					var c = b.items,
						d;
					for (d in c) {
						a = c[d];
						this.remove(a, this.maxDepth);
						break
					}
					for (; !b || 0 == b.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) break;
						b = this.depthBins[this.maxDepth]
					}
				}
				return a
			};
			a.prototype.shift = function() {
				var a = null;
				if (this.minDepth <= this.maxDepth) {
					for (var b = this.depthBins[this.minDepth]; !b || 0 == b.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) return null;
						b = this.depthBins[this.minDepth]
					}
					var c =
						b.items,
						d;
					for (d in c) {
						a = c[d];
						this.remove(a, this.minDepth);
						break
					}
					for (; !b || 0 == b.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) break;
						b = this.depthBins[this.minDepth]
					}
				}
				return a
			};
			a.prototype.removeLargestChild = function(a) {
				for (var b = this.maxDepth, d = a.nestLevel, f = a.hashCode; d <= b;) {
					var g = this.depthBins[b];
					if (g && 0 < g.length) {
						if (b == a.nestLevel) {
							if (g.items[f]) return this.remove(a, b), a
						} else {
							var g = g.items,
								h;
							for (h in g) {
								var m = g[h];
								if (m instanceof c.DisplayObject && a instanceof c.DisplayObjectContainer &&
									a.contains(m)) return this.remove(m, b), m
							}
						}
						b--
					} else if (b == this.maxDepth && this.maxDepth--, b--, b < d) break
				}
				return null
			};
			a.prototype.removeSmallestChild = function(a) {
				for (var b = a.nestLevel, d = a.hashCode; b <= this.maxDepth;) {
					var f = this.depthBins[b];
					if (f && 0 < f.length) {
						if (b == a.nestLevel) {
							if (f.items[d]) return this.remove(a, b), a
						} else {
							var f = f.items,
								g;
							for (g in f) {
								var h = f[g];
								if (h instanceof c.DisplayObject && a instanceof c.DisplayObjectContainer && a.contains(h)) return this.remove(h, b), h
							}
						}
						b++
					} else if (b == this.minDepth && this.minDepth++,
						b++, b > this.maxDepth) break
				}
				return null
			};
			a.prototype.remove = function(a, b) {
				void 0 === b && (b = -1);
				var c = a.hashCode,
					d = this.depthBins[0 <= b ? b : a.nestLevel];
				return d && null != d.items[c] ? (delete d.items[c], d.length--, a) : null
			};
			a.prototype.removeAll = function() {
				this.minDepth = this.depthBins.length = 0;
				this.maxDepth = -1
			};
			a.prototype.isEmpty = function() {
				return this.minDepth > this.maxDepth
			};
			return a
		}();
		d.DepthQueue = f;
		f.prototype.__class__ = "egret.gui.DepthQueue";
		var b = function() {
			return function() {
				this.length = 0;
				this.items = []
			}
		}();
		d.DepthBin = b;
		b.prototype.__class__ = "egret.gui.DepthBin"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(c) {
		var f = function() {
			function b() {}
			Object.defineProperty(b, "stage", {
				get: function() {
					return b._stage
				},
				enumerable: !0,
				configurable: !0
			});
			b._initlize = function(a) {
				b.initlized || (b._stage = a, b._layoutManager = new c.LayoutManager, b.initlized = !0)
			};
			Object.defineProperty(b, "uiStage", {
				get: function() {
					return b._uiStage
				},
				enumerable: !0,
				configurable: !0
			});
			b.initlized = !1;
			return b
		}();
		c.UIGlobals = f;
		f.prototype.__class__ = "egret.gui.UIGlobals"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this.initializeCalled = this._initialized = this._updateCompletePendingFlag = !1;
				this._nestLevel = 0;
				this._enabled = !0;
				this._minWidth = this._height = this._width = 0;
				this._maxWidth = 1E4;
				this._minHeight = 0;
				this._maxHeight = 1E4;
				this._measuredHeight = this._measuredWidth = 0;
				this._validateNowFlag = this._invalidateDisplayListFlag = this._invalidateSizeFlag = this._invalidatePropertiesFlag = !1;
				this._includeInLayout = !0;
				this._layoutHeightExplicitlySet = this._layoutWidthExplicitlySet = !1;
				this.touchEnabled = !0;
				this.addEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this.addEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this)
			}
			__extends(a, b);
			a.prototype.onAddedToStage = function(a) {
				this.removeEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this._initialize();
				d.UIGlobals._initlize(this.stage);
				0 < this._nestLevel && this.checkInvalidateFlag()
			};
			Object.defineProperty(a.prototype, "id", {
				get: function() {
					return this._id
				},
				set: function(a) {
					this._id = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "isPopUp", {
				get: function() {
					return this._isPopUp
				},
				set: function(a) {
					this._isPopUp = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "owner", {
				get: function() {
					return this._owner ? this._owner : this.parent
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.ownerChanged = function(a) {
				this._owner = a
			};
			Object.defineProperty(a.prototype, "updateCompletePendingFlag", {
				get: function() {
					return this._updateCompletePendingFlag
				},
				set: function(a) {
					this._updateCompletePendingFlag =
						a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "initialized", {
				get: function() {
					return this._initialized
				},
				set: function(a) {
					this._initialized != a && (this._initialized = a) && d.UIEvent.dispatchUIEvent(this, d.UIEvent.CREATION_COMPLETE)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._initialize = function() {
				this.initializeCalled || (d.UIGlobals.stage && this.removeEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.initializeCalled = !0, d.UIEvent.dispatchUIEvent(this, d.UIEvent.INITIALIZE),
					this.createChildren(), this.childrenCreated())
			};
			a.prototype.createChildren = function() {};
			a.prototype.childrenCreated = function() {
				this.invalidateProperties();
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			Object.defineProperty(a.prototype, "nestLevel", {
				get: function() {
					return this._nestLevel
				},
				set: function(a) {
					if (this._nestLevel != a)
						for (this._nestLevel = a, 0 == this._nestLevel ? this.addEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this) : this.removeEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag,
								this), a = this.numChildren - 1; 0 <= a; a--) {
							var b = this.getChildAt(a);
							null != b && (b.nestLevel = this._nestLevel + 1)
						}
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._addToDisplayList = function(a, b) {
				void 0 === b && (b = !0);
				var c = this.numChildren;
				a.parent == this && c--;
				this._addingChild(a);
				this._doAddChild(a, c, b);
				this._childAdded(a);
				return a
			};
			a.prototype._addToDisplayListAt = function(a, b, c) {
				void 0 === c && (c = !0);
				this._addingChild(a);
				this._doAddChild(a, b, c);
				this._childAdded(a);
				return a
			};
			a.prototype._removeFromDisplayList = function(a,
				b) {
				void 0 === b && (b = !0);
				var d = this._children.indexOf(a);
				if (0 <= d) return this._doRemoveChild(d, b), this._childRemoved(a), a;
				c.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
				return null
			};
			a.prototype._removeFromDisplayListAt = function(a, b) {
				void 0 === b && (b = !0);
				if (0 <= a && a < this._children.length) {
					var d = this._doRemoveChild(a, b);
					this._childRemoved(d);
					return d
				}
				c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
				return null
			};
			a.prototype.addChild = function(a) {
				this._addingChild(a);
				b.prototype.addChild.call(this,
					a);
				this._childAdded(a);
				return a
			};
			a.prototype.addChildAt = function(a, c) {
				this._addingChild(a);
				b.prototype.addChildAt.call(this, a, c);
				this._childAdded(a);
				return a
			};
			a.prototype._addingChild = function(a) {
				a && "nestLevel" in a && (a.nestLevel = this._nestLevel + 1)
			};
			a.prototype._childAdded = function(b) {
				b instanceof a && (b._initialize(), b.checkInvalidateFlag())
			};
			a.prototype.removeChild = function(a) {
				b.prototype.removeChild.call(this, a);
				this._childRemoved(a);
				return a
			};
			a.prototype.removeChildAt = function(a) {
				a = b.prototype.removeChildAt.call(this,
					a);
				this._childRemoved(a);
				return a
			};
			a.prototype._childRemoved = function(a) {
				a && "nestLevel" in a && (a.nestLevel = 0)
			};
			a.prototype.checkInvalidateFlag = function(a) {
				d.UIGlobals._layoutManager && (this._invalidatePropertiesFlag && d.UIGlobals._layoutManager.invalidateProperties(this), this._invalidateSizeFlag && d.UIGlobals._layoutManager.invalidateSize(this), this._invalidateDisplayListFlag && d.UIGlobals._layoutManager.invalidateDisplayList(this), this._validateNowFlag && (d.UIGlobals._layoutManager.validateClient(this),
					this._validateNowFlag = !1))
			};
			Object.defineProperty(a.prototype, "enabled", {
				get: function() {
					return this._enabled
				},
				set: function(a) {
					this._enabled = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "width", {
				get: function() {
					return this._width
				},
				set: function(a) {
					this._setWidth(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setWidth = function(a) {
				if (this._width != a || this._explicitWidth != a) b.prototype._setWidth.call(this, a), isNaN(a) ? this.invalidateSize() : this._width = a, this.invalidateProperties(),
					this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()
			};
			Object.defineProperty(a.prototype, "height", {
				get: function() {
					return this._height
				},
				set: function(a) {
					this._setHeight(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setHeight = function(a) {
				if (this._height != a || this._explicitHeight != a) b.prototype._setHeight.call(this, a), isNaN(a) ? this.invalidateSize() : this._height = a, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()
			};
			Object.defineProperty(a.prototype,
				"scaleX", {
					get: function() {
						return this._scaleX
					},
					set: function(a) {
						this._setScaleX(a)
					},
					enumerable: !0,
					configurable: !0
				});
			a.prototype._setScaleX = function(a) {
				this._scaleX != a && (this._scaleX = a, this.invalidateParentSizeAndDisplayList())
			};
			Object.defineProperty(a.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(a) {
					this._setScaleY(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setScaleY = function(a) {
				this._scaleY != a && (this._scaleY = a, this.invalidateParentSizeAndDisplayList())
			};
			Object.defineProperty(a.prototype,
				"minWidth", {
					get: function() {
						return this._minWidth
					},
					set: function(a) {
						this._minWidth != a && (this._minWidth = a, this.invalidateSize())
					},
					enumerable: !0,
					configurable: !0
				});
			Object.defineProperty(a.prototype, "maxWidth", {
				get: function() {
					return this._maxWidth
				},
				set: function(a) {
					this._maxWidth != a && (this._maxWidth = a, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getMaxWidth = function() {
				return this._maxWidth
			};
			Object.defineProperty(a.prototype, "minHeight", {
				get: function() {
					return this._minHeight
				},
				set: function(a) {
					this._minHeight !=
						a && (this._minHeight = a, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "maxHeight", {
				get: function() {
					return this._maxHeight
				},
				set: function(a) {
					this._maxHeight != a && (this._maxHeight = a, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "measuredWidth", {
				get: function() {
					return this._measuredWidth
				},
				set: function(a) {
					this._measuredWidth = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "measuredHeight", {
				get: function() {
					return this._measuredHeight
				},
				set: function(a) {
					this._measuredHeight = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setActualSize = function(a, b) {
				var c = !1;
				this._width != a && (this._width = a, c = !0);
				this._height != b && (this._height = b, c = !0);
				c && (this.invalidateDisplayList(), this.dispatchResizeEvent())
			};
			Object.defineProperty(a.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function(b) {
					this._x != b && (this._setX(b), this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof a && this.parent._childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function(b) {
					this._y != b && (this._setY(b), this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof a && this.parent._childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.invalidateProperties = function() {
				this._invalidatePropertiesFlag || (this._invalidatePropertiesFlag = !0, this.parent && d.UIGlobals._layoutManager && d.UIGlobals._layoutManager.invalidateProperties(this))
			};
			a.prototype.validateProperties =
				function() {
					this._invalidatePropertiesFlag && (this.commitProperties(), this._invalidatePropertiesFlag = !1)
				};
			a.prototype.invalidateSize = function() {
				this._invalidateSizeFlag || (this._invalidateSizeFlag = !0, this.parent && d.UIGlobals._layoutManager && d.UIGlobals._layoutManager.invalidateSize(this))
			};
			a.prototype.validateSize = function(a) {
				void 0 === a && (a = !1);
				if (a)
					for (a = 0; a < this.numChildren; a++) {
						var b = this.getChildAt(a);
						"validateSize" in b && b.validateSize(!0)
					}
				this._invalidateSizeFlag && (this.measureSizes() && (this.invalidateDisplayList(),
					this.invalidateParentSizeAndDisplayList()), this._invalidateSizeFlag = !1)
			};
			a.prototype.measureSizes = function() {
				var a = !1;
				if (!this._invalidateSizeFlag) return a;
				this.canSkipMeasurement() || (this.measure(), this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth), this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth), this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight), this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight));
				if (isNaN(this._oldPreferWidth)) this._oldPreferWidth =
					this.preferredWidth, this._oldPreferHeight = this.preferredHeight, a = !0;
				else {
					if (this.preferredWidth != this._oldPreferWidth || this.preferredHeight != this._oldPreferHeight) a = !0;
					this._oldPreferWidth = this.preferredWidth;
					this._oldPreferHeight = this.preferredHeight
				}
				return a
			};
			a.prototype.invalidateDisplayList = function() {
				this._invalidateDisplayListFlag || (this._invalidateDisplayListFlag = !0, this.parent && d.UIGlobals._layoutManager && d.UIGlobals._layoutManager.invalidateDisplayList(this), this._setSizeDirty())
			};
			a.prototype.validateDisplayList =
				function() {
					if (this._invalidateDisplayListFlag) {
						var a = 0,
							b = 0,
							a = this._layoutWidthExplicitlySet ? this._width : isNaN(this.explicitWidth) ? this.measuredWidth : this._explicitWidth,
							b = this._layoutHeightExplicitlySet ? this._height : isNaN(this.explicitHeight) ? this.measuredHeight : this._explicitHeight;
						isNaN(a) && (a = 0);
						isNaN(b) && (b = 0);
						this.setActualSize(a, b);
						this.updateDisplayList(a, b);
						this._invalidateDisplayListFlag = !1
					}
				};
			a.prototype.validateNow = function(a) {
				void 0 === a && (a = !1);
				this._validateNowFlag || null == d.UIGlobals._layoutManager ?
					this._validateNowFlag = !0 : d.UIGlobals._layoutManager.validateClient(this, a)
			};
			a.prototype.invalidateParentSizeAndDisplayList = function() {
				if (this.parent && this._includeInLayout && "invalidateSize" in this.parent) {
					var a = this.parent;
					a.invalidateSize();
					a.invalidateDisplayList()
				}
			};
			a.prototype.updateDisplayList = function(a, b) {};
			a.prototype.canSkipMeasurement = function() {
				return !isNaN(this._explicitWidth) && !isNaN(this._explicitHeight)
			};
			a.prototype.commitProperties = function() {
				this.oldWidth == this._width && this.oldHeight ==
					this._height || this.dispatchResizeEvent();
				this.oldX == this.x && this.oldY == this.y || this.dispatchMoveEvent()
			};
			a.prototype.measure = function() {
				this._measuredWidth = this._measuredHeight = 0
			};
			a.prototype.dispatchMoveEvent = function() {
				this.hasEventListener(d.MoveEvent.MOVE) && d.MoveEvent.dispatchMoveEvent(this, this.oldX, this.oldY);
				this.oldX = this.x;
				this.oldY = this.y
			};
			a.prototype._childXYChanged = function() {};
			a.prototype.dispatchResizeEvent = function() {
				this.hasEventListener(d.ResizeEvent.RESIZE) && d.ResizeEvent.dispatchResizeEvent(this,
					this.oldWidth, this.oldHeight);
				this.oldWidth = this._width;
				this.oldHeight = this._height
			};
			Object.defineProperty(a.prototype, "includeInLayout", {
				get: function() {
					return this._includeInLayout
				},
				set: function(a) {
					this._includeInLayout != a && (this._includeInLayout = !0, this.invalidateParentSizeAndDisplayList(), this._includeInLayout = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "left", {
				get: function() {
					return this._left
				},
				set: function(a) {
					this._left != a && (this._left = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "right", {
				get: function() {
					return this._right
				},
				set: function(a) {
					this._right != a && (this._right = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "top", {
				get: function() {
					return this._top
				},
				set: function(a) {
					this._top != a && (this._top = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bottom", {
				get: function() {
					return this._bottom
				},
				set: function(a) {
					this._bottom != a && (this._bottom = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "horizontalCenter", {
				get: function() {
					return this._horizontalCenter
				},
				set: function(a) {
					this._horizontalCenter != a && (this._horizontalCenter = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "verticalCenter", {
				get: function() {
					return this._verticalCenter
				},
				set: function(a) {
					this._verticalCenter !=
						a && (this._verticalCenter = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "percentWidth", {
				get: function() {
					return this._percentWidth
				},
				set: function(a) {
					this._percentWidth != a && (this._percentWidth = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "percentHeight", {
				get: function() {
					return this._percentHeight
				},
				set: function(a) {
					this._percentHeight != a && (this._percentHeight = a, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setLayoutBoundsSize = function(a, b) {
				isNaN(a) ? (this._layoutWidthExplicitlySet = !1, a = this.preferredWidth) : this._layoutWidthExplicitlySet = !0;
				isNaN(b) ? (this._layoutHeightExplicitlySet = !1, b = this.preferredHeight) : this._layoutHeightExplicitlySet = !0;
				this.setActualSize(a / this._scaleX, b / this._scaleY)
			};
			a.prototype.setLayoutBoundsPosition = function(a, b) {
				0 > this._scaleX && (a += this.layoutBoundsWidth);
				0 > this._scaleY && (b += this.layoutBoundsHeight);
				var c = !1;
				this._x != a && (this._setX(a),
					c = !0);
				this._y != b && (this._setY(b), c = !0);
				c && this.dispatchMoveEvent()
			};
			Object.defineProperty(a.prototype, "preferredWidth", {
				get: function() {
					var a = this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
						b = this._scaleX;
					0 > b && (b = -b);
					return a * b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "preferredHeight", {
				get: function() {
					var a = this._hasHeightSet ? this._explicitHeight : this._measuredHeight,
						b = this._scaleY;
					0 > b && (b = -b);
					return a * b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype,
				"preferredX", {
					get: function() {
						return 0 <= this._scaleX ? this._x : this._x - this.preferredWidth
					},
					enumerable: !0,
					configurable: !0
				});
			Object.defineProperty(a.prototype, "preferredY", {
				get: function() {
					return 0 <= this._scaleY ? this._y : this._y - this.preferredHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "layoutBoundsX", {
				get: function() {
					return 0 <= this._scaleX ? this._x : this._x - this.layoutBoundsWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "layoutBoundsY", {
				get: function() {
					return 0 <=
						this._scaleY ? this._y : this._y - this.layoutBoundsHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "layoutBoundsWidth", {
				get: function() {
					var a = 0,
						a = this._layoutWidthExplicitlySet ? this._width : this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
						b = this._scaleX;
					0 > b && (b = -b);
					return a * b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "layoutBoundsHeight", {
				get: function() {
					var a = 0,
						a = this._layoutHeightExplicitlySet ? this._height : this._hasHeightSet ? this._explicitHeight :
						this._measuredHeight,
						b = this.scaleY;
					0 > b && (b = -b);
					return a * b
				},
				enumerable: !0,
				configurable: !0
			});
			return a
		}(c.DisplayObjectContainer);
		d.UIComponent = f;
		f.prototype.__class__ = "egret.gui.UIComponent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(c) {
		var f = function() {
			function b() {}
			b.DOWN = 40;
			b.END = 35;
			b.HOME = 36;
			b.LEFT = 37;
			b.PAGE_DOWN = 34;
			b.PAGE_LEFT = 9111;
			b.PAGE_RIGHT = 9112;
			b.PAGE_UP = 33;
			b.RIGHT = 39;
			b.UP = 38;
			return b
		}();
		c.NavigationUnit = f;
		f.prototype.__class__ = "egret.gui.NavigationUnit"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this.hostComponentKey = null;
				this.stateIsDirty = this.skinLayoutEnabled = this.createChildrenCalled = this._skinNameExplicitlySet = !1;
				this.explicitMouseEnabled = this.explicitMouseChildren = this._autoMouseEnabled = !0
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "skinName", {
				get: function() {
					return this._skinName
				},
				set: function(a) {
					this._skinName != a && (this._skinName = a, this._skinNameExplicitlySet = !0, this.createChildrenCalled && this.parseSkinName())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.createChildren = function() {
				b.prototype.createChildren.call(this);
				this.parseSkinName();
				this.createChildrenCalled = !0
			};
			a.prototype.parseSkinName = function() {
				var b = a.skinAdapter;
				b || (b = this.getSkinAdapter());
				var d = this.hostComponentKey || c.getQualifiedClassName(this),
					b = b.getSkin(this._skinName, d);
				b || (d = a._defaultTheme) && (b = d.getDefaultSkin(this));
				this._setSkin(b)
			};
			a.prototype.getSkinAdapter = function() {
				var b;
				try {
					b = c.Injector.getInstance("egret.gui.ISkinAdapter")
				} catch (f) {
					b =
						new d.DefaultSkinAdapter
				}
				return a.skinAdapter = b
			};
			Object.defineProperty(a.prototype, "skin", {
				get: function() {
					return this._skin
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setSkin = function(a) {
				var b = this._skin;
				this.detachSkin(b);
				b instanceof c.DisplayObject && this._removeFromDisplayList(b);
				this._skin = a;
				a instanceof c.DisplayObject && this._addToDisplayListAt(this._skin, 0);
				this.attachSkin(a);
				this.invalidateSkinState();
				this.invalidateSize();
				this.invalidateDisplayList();
				this.hasEventListener(d.UIEvent.SKIN_CHANGED) &&
					d.UIEvent.dispatchUIEvent(this, d.UIEvent.SKIN_CHANGED)
			};
			a.prototype.attachSkin = function(a) {
				a && "hostComponent" in a && (a.hostComponent = this, this.findSkinParts());
				this.skinLayoutEnabled = !a || a instanceof c.DisplayObject ? !1 : !0
			};
			a.prototype.findSkinParts = function() {
				var a = this._skin;
				if (a && "skinParts" in a)
					for (var b = a.skinParts, c = b.length, d = 0; d < c; d++) {
						var f = b[d];
						if (f in a) try {
							this[f] = a[f], this.partAdded(f, a[f])
						} catch (h) {}
					}
			};
			a.prototype.detachSkin = function(a) {
				if (a && "skinParts" in a) {
					for (var b = a.skinParts, c = b.length,
							d = 0; d < c; d++) {
						var f = b[d];
						f in this && (null != this[f] && this.partRemoved(f, this[f]), this[f] = null)
					}
					a.hostComponent = null
				}
			};
			a.prototype.partAdded = function(a, b) {
				d.SkinPartEvent.dispatchSkinPartEvent(this, d.SkinPartEvent.PART_ADDED, a, b)
			};
			a.prototype.partRemoved = function(a, b) {
				d.SkinPartEvent.dispatchSkinPartEvent(this, d.SkinPartEvent.PART_REMOVED, a, b)
			};
			a.prototype.invalidateSkinState = function() {
				this.stateIsDirty || (this.stateIsDirty = !0, this.invalidateProperties())
			};
			a.prototype.validateSkinState = function() {
				var a =
					this.getCurrentSkinState(),
					b = this._skin;
				b && "currentState" in b && (b.currentState = a);
				this.hasEventListener("stateChanged") && this.dispatchEventWith("stateChanged")
			};
			Object.defineProperty(a.prototype, "autoTouchEnabled", {
				get: function() {
					return this._autoMouseEnabled
				},
				set: function(a) {
					this._autoMouseEnabled != a && ((this._autoMouseEnabled = a) ? (this._touchChildren = this.enabled ? this.explicitMouseChildren : !1, this._touchEnabled = this.enabled ? this.explicitMouseEnabled : !1) : (this._touchChildren = this.explicitMouseChildren,
						this._touchEnabled = this.explicitMouseEnabled))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(a) {
					this.enabled && (this._touchChildren = a);
					this.explicitMouseChildren = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "touchEnabled", {
				get: function() {
					return this._touchEnabled
				},
				set: function(a) {
					this.enabled && (this._touchEnabled = a);
					this.explicitMouseEnabled = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype,
				"enabled", {
					get: function() {
						return this._enabled
					},
					set: function(a) {
						this._setEnabled(a)
					},
					enumerable: !0,
					configurable: !0
				});
			a.prototype._setEnabled = function(a) {
				this._enabled != a && (this._enabled = a, this._autoMouseEnabled && (this._touchChildren = a ? this.explicitMouseChildren : !1, this._touchEnabled = a ? this.explicitMouseEnabled : !1), this.invalidateSkinState())
			};
			a.prototype.getCurrentSkinState = function() {
				return this.enabled ? "normal" : "disabled"
			};
			a.prototype.commitProperties = function() {
				b.prototype.commitProperties.call(this);
				this.stateIsDirty && (this.stateIsDirty = !1, this.validateSkinState())
			};
			a.prototype._childXYChanged = function() {
				this.skinLayoutEnabled && (this.invalidateSize(), this.invalidateDisplayList())
			};
			a.prototype.measure = function() {
				b.prototype.measure.call(this);
				var a = this._skin;
				a && (this.skinLayoutEnabled ? (a.measure(), this.measuredWidth = a.preferredWidth, this.measuredHeight = a.preferredHeight) : "preferredWidth" in a ? (this.measuredWidth = a.preferredWidth, this.measuredHeight = a.preferredHeight) : (this.measuredWidth = a.width,
					this.measuredHeight = a.height))
			};
			a.prototype.updateDisplayList = function(a, d) {
				b.prototype.updateDisplayList.call(this, a, d);
				var f = this._skin;
				f && (this.skinLayoutEnabled ? f.updateDisplayList(a, d) : "setLayoutBoundsSize" in f ? f.setLayoutBoundsSize(a, d) : f instanceof c.DisplayObject && (f.scaleX = 0 == f.width ? 1 : a / f.width, f.scaleY = 0 == f.height ? 1 : d / f.height))
			};
			a.prototype.addChild = function(b) {
				throw Error("addChild()" + a.errorStr + "addElement()\u4ee3\u66ff");
			};
			a.prototype.addChildAt = function(b, c) {
				throw Error("addChildAt()" +
					a.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			a.prototype.removeChild = function(b) {
				throw Error("removeChild()" + a.errorStr + "removeElement()\u4ee3\u66ff");
			};
			a.prototype.removeChildAt = function(b) {
				throw Error("removeChildAt()" + a.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			a.prototype.setChildIndex = function(b, c) {
				throw Error("setChildIndex()" + a.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			a.prototype.swapChildren = function(b, c) {
				throw Error("swapChildren()" + a.errorStr + "swapElements()\u4ee3\u66ff");
			};
			a.prototype.swapChildrenAt =
				function(b, c) {
					throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()\u4ee3\u66ff");
				};
			a.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return a
		}(d.UIComponent);
		d.SkinnableComponent = f;
		f.prototype.__class__ = "egret.gui.SkinnableComponent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(d) {
		var f = function() {
			function b() {}
			b.prototype.getSkin = function(a, b) {
				if (!a) return null;
				if (a.prototype) return new a;
				if ("string" == typeof a) {
					var d = c.getDefinitionByName(a);
					return d ? new d : null
				}
				return a
			};
			return b
		}();
		d.DefaultSkinAdapter = f;
		f.prototype.__class__ = "egret.gui.DefaultSkinAdapter"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(d) {
		var f = function() {
			function b(a) {
				this.delyList = [];
				this.loadConfig(a)
			}
			b.load = function(a) {
				this.initialized || (this.initialized = !0, d.SkinnableComponent._defaultTheme = new b(a))
			};
			b.prototype.loadConfig = function(a) {
				var b = new c.URLLoader;
				b.addEventListener(c.Event.COMPLETE, this.onLoadComplete, this);
				b.addEventListener(c.IOErrorEvent.IO_ERROR, this.onLoadError, this);
				b.dataFormat = c.URLLoaderDataFormat.TEXT;
				b.load(new c.URLRequest(a))
			};
			b.prototype.onLoadComplete = function(a) {
				a = a.target;
				try {
					this.skinMap = JSON.parse(a.data).skins
				} catch (b) {
					c.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a._request.url + "\ndata:" + a.data)
				}
				this.handleDelyList()
			};
			b.prototype.onLoadError = function(a) {
				c.Logger.warning("\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25: " + a.target._request.url);
				this.handleDelyList()
			};
			b.prototype.handleDelyList = function() {
				if (this.skinMap) {
					var a = this.delyList;
					this.delyList = [];
					for (var b = a.length, c = 0; c < b; c++) {
						var d = a[c];
						if (!d._skin) {
							var f = this.getDefaultSkin(d);
							d._setSkin(f)
						}
					}
				} else this.skinMap = {}, this.delyList = []
			};
			b.prototype.getDefaultSkin = function(a) {
				var b = this.skinMap;
				if (!b) return -1 == this.delyList.indexOf(a) && this.delyList.push(a), null;
				var d, f = a.hostComponentKey;
				if (f) d = b[f];
				else
					for (; a;) {
						f = c.getQualifiedClassName(a);
						if (d = b[f]) break;
						a = c.getDefinitionByName(c.getQualifiedSuperclassName(a))
					}
				if (!d) return null;
				b = c.getDefinitionByName(d);
				return b ? new b : (c.Logger.warning("\u627e\u4e0d\u5230\u4e3b\u9898\u4e2d\u6240\u914d\u7f6e\u7684\u76ae\u80a4\u7c7b\u540d: " +
					d), null)
			};
			b.initialized = !1;
			return b
		}();
		d.Theme = f;
		f.prototype.__class__ = "egret.gui.Theme"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._fontFamily = "SimSun";
				this._size = 30;
				this._focusEnabled = !0;
				this._textAlign = c.HorizontalAlign.LEFT;
				this._verticalAlign = c.VerticalAlign.TOP;
				this._lineSpacing = 0;
				this._textColor = 16777215;
				this._text = ""
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "fontFamily", {
				get: function() {
					return this._fontFamily
				},
				set: function(a) {
					this._fontFamily != a && (this._fontFamily = a, this.fontFamilyChanged = !0, this.invalidateProperties(), this.invalidateSize(),
						this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "size", {
				get: function() {
					return this._getFontSize()
				},
				set: function(a) {
					this._setFontSize(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getFontSize = function() {
				return this._size
			};
			a.prototype._setFontSize = function(a) {
				this._size != a && (this._size = a, this._sizeChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
			};
			Object.defineProperty(a.prototype, "focusEnabled", {
				get: function() {
					return this._focusEnabled
				},
				set: function(a) {
					this._focusEnabled = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setFocus = function() {
				!1 != this._focusEnabled && this._textField && this._textField.setFocus()
			};
			Object.defineProperty(a.prototype, "bold", {
				get: function() {
					return this._bold
				},
				set: function(a) {
					this._bold != a && (this._bold = a, this.boldChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "italic", {
				get: function() {
					return this._italic
				},
				set: function(a) {
					this._italic != a && (this._italic = a, this.italicChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "textAlign", {
				get: function() {
					return this._textAlign
				},
				set: function(a) {
					this._textAlign != a && (this._textAlign = a, this.textAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(a) {
					this._verticalAlign != a && (this._verticalAlign = a, this.verticalAlignChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "lineSpacing", {
				get: function() {
					return this._getLineSpacing()
				},
				set: function(a) {
					this._setLineSpacing(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getLineSpacing = function() {
				return this._lineSpacing
			};
			a.prototype._setLineSpacing =
				function(a) {
					this._lineSpacing != a && (this._lineSpacing = a, this.lineSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				};
			Object.defineProperty(a.prototype, "textColor", {
				get: function() {
					return this._textColor
				},
				set: function(a) {
					this._textColor != a && (this._textColor = a, this.textColorChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "text", {
				get: function() {
					return this._textField ? this._textField.text : this._text
				},
				set: function(a) {
					a != this._text && (this._text = a, this._textChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.createChildren = function() {
				b.prototype.createChildren.call(this);
				this._textField || this.checkTextField()
			};
			a.prototype.commitProperties = function() {
				b.prototype.commitProperties.call(this);
				this._textField || this.checkTextField();
				this.fontFamilyChanged && (this._textField.fontFamily = this._fontFamily, this.fontFamilyChanged = !1);
				this._sizeChanged && (this._textField.size = this._size, this._sizeChanged = !1);
				this.boldChanged && (this._textField.bold = this._bold, this.boldChanged = !1);
				this.italic && (this._textField.italic = this._italic, this.italicChanged = !1);
				this.textAlignChanged && (this._textField.textAlign = this._textAlign, this.textAlignChanged = !1);
				this.verticalAlignChanged && (this._textField.verticalAlign = this._verticalAlign, this.verticalAlignChanged = !1);
				this.lineSpacingChanged && (this._textField.lineSpacing = this._lineSpacing, this.lineSpacingChanged = !1);
				this.textColorChanged && (this._textField.textColor = this._textColor, this.textColorChanged = !1);
				this._textChanged && (this._textField.text = this._text, this._textChanged = !1)
			};
			a.prototype.checkTextField = function() {
				this._textField || (this._createTextField(), this._textField.text = this._text, this._textChanged = !0, this.invalidateProperties())
			};
			a.prototype._createTextField = function() {
				this._textField = new c.TextField;
				this._textField.fontFamily = this._fontFamily;
				this._textField.size = this._size;
				this._textField.textAlign =
					this._textAlign;
				this._textField.verticalAlign = this._verticalAlign;
				this._textField.lineSpacing = this._lineSpacing;
				this._textField.textColor = this._textColor;
				this._textField.multiline = !0;
				this._addToDisplayList(this._textField)
			};
			a.prototype.measure = function() {
				b.prototype.measure.call(this);
				this.measuredWidth = a.DEFAULT_MEASURED_WIDTH;
				this.measuredHeight = a.DEFAULT_MEASURED_HEIGHT
			};
			a.prototype.$updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, c)
			};
			a.prototype.updateDisplayList = function(a,
				c) {
				b.prototype.updateDisplayList.call(this, a, c);
				this._textField.width = a;
				this._textField.height = c
			};
			a.prototype.dispatchPropertyChangeEvent = function(a, b, c) {
				this.hasEventListener("propertyChange") && d.PropertyChangeEvent.dispatchPropertyChangeEvent(this, d.PropertyChangeEventKind.UPDATE, a, b, c, this)
			};
			a.DEFAULT_MEASURED_WIDTH = 160;
			a.DEFAULT_MEASURED_HEIGHT = 22;
			return a
		}(d.UIComponent);
		d.TextBase = f;
		f.prototype.__class__ = "egret.gui.TextBase"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._contentHeight = this._contentWidth = 0;
				this._clipAndEnableScrolling = !1;
				this._verticalScrollPosition = this._horizontalScrollPosition = 0;
				this.touchEnabled = this._layoutInvalidateSizeFlag = this._layoutInvalidateDisplayListFlag = !1
			}
			__extends(a, b);
			a.prototype.createChildren = function() {
				b.prototype.createChildren.call(this);
				this._layout || (this.layout = new d.BasicLayout)
			};
			Object.defineProperty(a.prototype, "contentWidth", {
				get: function() {
					return this._contentWidth
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setContentWidth = function(a) {
				if (a != this._contentWidth) {
					var b = this._contentWidth;
					this._contentWidth = a;
					this.hasEventListener("propertyChange") && d.PropertyChangeEvent.dispatchPropertyChangeEvent(this, d.PropertyChangeEventKind.UPDATE, "contentWidth", b, a, this)
				}
			};
			Object.defineProperty(a.prototype, "contentHeight", {
				get: function() {
					return this._contentHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setContentHeight = function(a) {
				if (a != this._contentHeight) {
					var b = this._contentHeight;
					this._contentHeight = a;
					this.hasEventListener("propertyChange") && d.PropertyChangeEvent.dispatchPropertyChangeEvent(this, d.PropertyChangeEventKind.UPDATE, "contentHeight", b, a, this)
				}
			};
			a.prototype.setContentSize = function(a, b) {
				if (a != this._contentWidth || b != this._contentHeight) this.setContentWidth(a), this.setContentHeight(b)
			};
			Object.defineProperty(a.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function(a) {
					this._setLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setLayout = function(a) {
				if (this._layout !=
					a) {
					this._layout && (this._layout.target = null);
					if (this._layout = a) this._layout.target = this;
					this.invalidateSize();
					this.invalidateDisplayList();
					this.dispatchEventWith("layoutChanged")
				}
			};
			Object.defineProperty(a.prototype, "clipAndEnableScrolling", {
				get: function() {
					return this._clipAndEnableScrolling
				},
				set: function(a) {
					a != this._clipAndEnableScrolling && (this.scrollRect = (this._clipAndEnableScrolling = a) ? new c.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, this.width, this.height) : null)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "horizontalScrollPosition", {
				get: function() {
					return this._horizontalScrollPosition
				},
				set: function(a) {
					if (a != this._horizontalScrollPosition) {
						var b = this._horizontalScrollPosition;
						this._horizontalScrollPosition = a;
						this.scrollPositionChanged();
						d.PropertyChangeEvent.dispatchPropertyChangeEvent(this, d.PropertyChangeEventKind.UPDATE, "horizontalScrollPosition", b, a, this)
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "verticalScrollPosition", {
				get: function() {
					return this._verticalScrollPosition
				},
				set: function(a) {
					if (a != this._verticalScrollPosition) {
						var b = this._verticalScrollPosition;
						this._verticalScrollPosition = a;
						this.scrollPositionChanged();
						d.PropertyChangeEvent.dispatchPropertyChangeEvent(this, d.PropertyChangeEventKind.UPDATE, "verticalScrollPosition", b, a, this)
					}
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.scrollPositionChanged = function() {
				this._clipAndEnableScrolling && (this.updateScrollRect(this.width, this.height), this._invalidateDisplayListExceptLayout(),
					this._layout && this._layout.scrollPositionChanged())
			};
			a.prototype.updateScrollRect = function(a, b) {
				var d = this._scrollRect;
				this._clipAndEnableScrolling ? d ? (d.x = this._horizontalScrollPosition, d.y = this._verticalScrollPosition, d.width = a, d.height = b) : this._scrollRect = new c.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, a, b) : d && (this._scrollRect = null)
			};
			a.prototype.measure = function() {
				this._layout && this._layoutInvalidateSizeFlag && (b.prototype.measure.call(this), this._layout.measure())
			};
			a.prototype._invalidateDisplayListExceptLayout = function() {
				b.prototype.invalidateDisplayList.call(this)
			};
			a.prototype.invalidateDisplayList = function() {
				b.prototype.invalidateDisplayList.call(this);
				this._layoutInvalidateDisplayListFlag = !0
			};
			a.prototype._childXYChanged = function() {
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.prototype._invalidateSizeExceptLayout = function() {
				b.prototype.invalidateSize.call(this)
			};
			a.prototype.invalidateSize = function() {
				b.prototype.invalidateSize.call(this);
				this._layoutInvalidateSizeFlag = !0
			};
			a.prototype.updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, c);
				this._layoutInvalidateDisplayListFlag && this._layout && (this._layoutInvalidateDisplayListFlag = !1, this._layout.updateDisplayList(a, c), this.updateScrollRect(a, c))
			};
			Object.defineProperty(a.prototype, "numElements", {
				get: function() {
					return -1
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.getElementAt = function(a) {
				return null
			};
			a.prototype.getElementIndex = function(a) {
				return -1
			};
			a.prototype.getElementIndicesInView = function() {
				var a =
					[],
					b;
				if (this.scrollRect)
					for (b = 0; b < this.numChildren; b++) {
						var d = this.getChildAt(b);
						if (d) {
							var f = new c.Rectangle;
							f.x = d.layoutBoundsX;
							f.y = d.layoutBoundsY;
							f.width = d.layoutBoundsWidth;
							f.height = d.layoutBoundsHeight;
							this.scrollRect.intersects(f) && a.push(b)
						}
					} else
						for (b = 0; b < this.numChildren; b++) a.push(b);
				return a
			};
			a.prototype.setVirtualElementIndicesInView = function(a, b) {};
			a.prototype.getVirtualElementAt = function(a) {
				return this.getElementAt(a)
			};
			return a
		}(d.UIComponent);
		d.GroupBase = f;
		f.prototype.__class__ = "egret.gui.GroupBase"
	})(c.gui ||
		(c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._focusEnabled = !0;
				this.textDisplayProperties = {};
				this.focusEnabled = !0;
				this.addEventListener("focus", this.focusInHandler, this);
				this.addEventListener("blur", this.focusOutHandler, this)
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "focusEnabled", {
				get: function() {
					return this._focusEnabled
				},
				set: function(a) {
					this._focusEnabled = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.focusInHandler = function(a) {
				a.target == this ? this.setFocus() :
					this.invalidateSkinState()
			};
			a.prototype.focusOutHandler = function(a) {
				a.target != this && this.invalidateSkinState()
			};
			Object.defineProperty(a.prototype, "prompt", {
				get: function() {
					return this._prompt
				},
				set: function(a) {
					this._prompt != a && (this._prompt = a, this.promptDisplay && (this.promptDisplay.text = a), this.invalidateProperties(), this.invalidateSkinState())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "maxWidth", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.maxWidth;
					var a = this.textDisplayProperties.maxWidth;
					return void 0 === a ? b.prototype._getMaxWidth.call(this) : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.maxWidth = a, this.textDisplayProperties.maxWidth = !0) : this.textDisplayProperties.maxWidth = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "textColor", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.textColor;
					var a = this.textDisplayProperties.textColor;
					return void 0 === a ? 0 : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.textColor =
						a, this.textDisplayProperties.textColor = !0) : this.textDisplayProperties.textColor = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "displayAsPassword", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.displayAsPassword;
					var a = this.textDisplayProperties.displayAsPassword;
					return void 0 === a ? !1 : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.displayAsPassword = a, this.textDisplayProperties.displayAsPassword = !0) : this.textDisplayProperties.displayAsPassword =
						a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "editable", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.editable;
					var a = this.textDisplayProperties.editable;
					return void 0 === a ? !0 : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.editable = a, this.textDisplayProperties.editable = !0) : this.textDisplayProperties.editable = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "maxChars", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.maxChars;
					var a = this.textDisplayProperties.maxChars;
					return void 0 === a ? 0 : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.maxChars = a, this.textDisplayProperties.maxChars = !0) : this.textDisplayProperties.maxChars = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "restrict", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.restrict;
					var a = this.textDisplayProperties.restrict;
					return void 0 === a ? null : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.restrict =
						a, this.textDisplayProperties.restrict = !0) : this.textDisplayProperties.restrict = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectable", {
				get: function() {
					if (this.textDisplay) return this.textDisplay.selectable;
					var a = this.textDisplayProperties.selectable;
					return void 0 === a ? !0 : a
				},
				set: function(a) {
					this.textDisplay ? (this.textDisplay.selectable = a, this.textDisplayProperties.selectable = !0) : this.textDisplayProperties.selectable = a;
					this.invalidateProperties()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectionBeginIndex", {
				get: function() {
					return this.textDisplay ? this.textDisplay.selectionBeginIndex : void 0 === this.textDisplayProperties.selectionBeginIndex ? -1 : this.textDisplayProperties.selectionBeginIndex
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectionEndIndex", {
				get: function() {
					return this.textDisplay ? this.textDisplay.selectionEndIndex : void 0 === this.textDisplayProperties.selectionEndIndex ? -1 : this.textDisplayProperties.selectionEndIndex
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "caretIndex", {
				get: function() {
					return this.textDisplay ? this.textDisplay.caretIndex : 0
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setSelection = function(a, b) {
				void 0 === b && (b = 0);
				this.textDisplay ? this.textDisplay.setSelection(a, b) : (this.textDisplayProperties.selectionBeginIndex = a, this.textDisplayProperties.selectionEndIndex = b)
			};
			a.prototype.selectAll = function() {
				this.textDisplay ? this.textDisplay.selectAll() : void 0 !== this.textDisplayProperties.text &&
					this.setSelection(0, this.textDisplayProperties.text.length - 1)
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
				if (this.textDisplay) return this.textDisplay.text;
				var a = this.textDisplayProperties.text;
				return void 0 === a ? "" : a
			};
			a.prototype._setText = function(a) {
				this.textDisplay ? (this.textDisplay.text = a, this.textDisplayProperties.text = !0) : (this.textDisplayProperties.text = a, this.textDisplayProperties.selectionBeginIndex =
					0, this.textDisplayProperties.selectionEndIndex = 0);
				this.invalidateProperties();
				this.invalidateSkinState()
			};
			a.prototype._getWidthInChars = function() {
				var a = this.textDisplay;
				if (a) return a.widthInChars;
				a = this.textDisplay ? void 0 : this.textDisplayProperties.widthInChars;
				return void 0 === a ? NaN : a
			};
			a.prototype._setWidthInChars = function(a) {
				if (this.textDisplay) {
					var b = this.textDisplay;
					b && (b.widthInChars = a);
					this.textDisplayProperties.widthInChars = !0
				} else this.textDisplayProperties.widthInChars = a;
				this.invalidateProperties()
			};
			a.prototype._getHeightInLines = function() {
				var a = this.textDisplay;
				if (a) return a.heightInLines;
				a = this.textDisplay ? void 0 : this.textDisplayProperties.heightInLines;
				return void 0 === a ? NaN : a
			};
			a.prototype._setHeightInLines = function(a) {
				if (this.textDisplay) {
					var b = this.textDisplay;
					b && (b.heightInLines = a);
					this.textDisplayProperties.heightInLines = !0
				} else this.textDisplayProperties.heightInLines = a;
				this.invalidateProperties()
			};
			a.prototype.getCurrentSkinState = function() {
				var a = d.UIGlobals.stage.focus,
					c = this.skin;
				if (this._prompt &&
					!(a && this.contains(a) || "" != this.text)) {
					if (this.enabled && c.hasState("normalWithPrompt")) return "normalWithPrompt";
					if (!this.enabled && c.hasState("disabledWithPrompt")) return "disabledWithPrompt"
				}
				return b.prototype.getCurrentSkinState.call(this)
			};
			a.prototype.partAdded = function(a, d) {
				b.prototype.partAdded.call(this, a, d);
				d == this.textDisplay ? (this.textDisplayAdded(), this.textDisplay.addEventListener("input", this.textDisplay_changingHandler, this), this.textDisplay.addEventListener(c.Event.CHANGE, this.textDisplay_changeHandler,
					this)) : d == this.promptDisplay && (this.promptDisplay.text = this._prompt)
			};
			a.prototype.partRemoved = function(a, d) {
				b.prototype.partRemoved.call(this, a, d);
				d == this.textDisplay && (this.textDisplayRemoved(), this.textDisplay.removeEventListener("input", this.textDisplay_changingHandler, this), this.textDisplay.removeEventListener(c.Event.CHANGE, this.textDisplay_changeHandler, this))
			};
			a.prototype.setFocus = function() {
				!1 != this._focusEnabled && this.textDisplay && this.textDisplay.setFocus()
			};
			a.prototype._createTextDisplay =
				function() {};
			a.prototype._removeSkinParts = function() {
				this.textDisplay && (this.partRemoved("textDisplay", this.textDisplay), this._removeFromDisplayList(this.textDisplay), this.textDisplay = null)
			};
			a.prototype.textDisplayAdded = function() {
				var a = {},
					b = this.textDisplay;
				void 0 !== this.textDisplayProperties.displayAsPassword && (this.textDisplay.displayAsPassword = this.textDisplayProperties.displayAsPassword, a.displayAsPassword = !0);
				void 0 !== this.textDisplayProperties.textColor && (this.textDisplay.textColor = this.textDisplayProperties.textColor,
					a.textColor = !0);
				void 0 !== this.textDisplayProperties.editable && (this.textDisplay.editable = this.textDisplayProperties.editable, a.editable = !0);
				void 0 !== this.textDisplayProperties.maxChars && (this.textDisplay.maxChars = this.textDisplayProperties.maxChars, a.maxChars = !0);
				void 0 !== this.textDisplayProperties.maxHeight && (this.textDisplay.maxHeight = this.textDisplayProperties.maxHeight, a.maxHeight = !0);
				void 0 !== this.textDisplayProperties.maxWidth && (this.textDisplay.maxWidth = this.textDisplayProperties.maxWidth,
					a.maxWidth = !0);
				void 0 !== this.textDisplayProperties.restrict && (this.textDisplay.restrict = this.textDisplayProperties.restrict, a.restrict = !0);
				void 0 !== this.textDisplayProperties.selectable && (this.textDisplay.selectable = this.textDisplayProperties.selectable, a.selectable = !0);
				void 0 !== this.textDisplayProperties.text && (this.textDisplay.text = this.textDisplayProperties.text, a.text = !0);
				void 0 !== this.textDisplayProperties.selectionBeginIndex && this.textDisplay.setSelection(this.textDisplayProperties.selectionBeginIndex,
					this.textDisplayProperties.selectionEndIndex);
				void 0 !== this.textDisplayProperties.widthInChars && b && (b.widthInChars = this.textDisplayProperties.widthInChars, a.widthInChars = !0);
				void 0 !== this.textDisplayProperties.heightInLines && b && (b.heightInLines = this.textDisplayProperties.heightInLines, a.heightInLines = !0);
				this.textDisplayProperties = a
			};
			a.prototype.textDisplayRemoved = function() {
				var a = {},
					b = this.textDisplay;
				this.textDisplayProperties.displayAsPassword && (a.displayAsPassword = this.textDisplay.displayAsPassword);
				this.textDisplayProperties.textColor && (a.textColor = this.textDisplay.textColor);
				this.textDisplayProperties.editable && (a.editable = this.textDisplay.editable);
				this.textDisplayProperties.maxChars && (a.maxChars = this.textDisplay.maxChars);
				this.textDisplayProperties.maxHeight && (a.maxHeight = this.textDisplay.maxHeight);
				this.textDisplayProperties.maxWidth && (a.maxWidth = this.textDisplay.maxWidth);
				this.textDisplayProperties.restrict && (a.restrict = this.textDisplay.restrict);
				this.textDisplayProperties.selectable &&
					(a.selectable = this.textDisplay.selectable);
				this.textDisplayProperties.text && (a.text = this.textDisplay.text);
				this.textDisplayProperties.heightInLines && b && (a.heightInLines = b.heightInLines);
				this.textDisplayProperties.widthInChars && b && (a.widthInChars = b.widthInChars);
				this.textDisplayProperties = a
			};
			a.prototype.textDisplay_changeHandler = function(a) {
				this.invalidateDisplayList();
				this.dispatchEvent(a)
			};
			a.prototype.textDisplay_changingHandler = function(a) {
				var b = new c.Event(a.type, !1, !0);
				b.data = a.data;
				this.dispatchEvent(b);
				b.isDefaultPrevented() && a.preventDefault()
			};
			return a
		}(d.SkinnableComponent);
		d.SkinnableTextBase = f;
		f.prototype.__class__ = "egret.gui.SkinnableTextBase"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._fillColor = 16777215;
				this._fillAlpha = 1;
				this._strokeColor = 4473924;
				this._strokeAlpha = 0;
				this._strokeWeight = 1;
				this.touchChildren = !1
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new c.Graphics);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._render = function(a) {
				this._graphics && this._graphics._draw(a);
				b.prototype._render.call(this, a)
			};
			Object.defineProperty(a.prototype,
				"fillColor", {
					get: function() {
						return this._fillColor
					},
					set: function(a) {
						this._fillColor != a && (this._fillColor = a, this.invalidateDisplayList())
					},
					enumerable: !0,
					configurable: !0
				});
			Object.defineProperty(a.prototype, "fillAlpha", {
				get: function() {
					return this._fillAlpha
				},
				set: function(a) {
					this._fillAlpha != a && (this._fillAlpha = a, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(a) {
					this._strokeColor != a &&
						(this._strokeColor = a, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "strokeAlpha", {
				get: function() {
					return this._strokeAlpha
				},
				set: function(a) {
					this._strokeAlpha != a && (this._strokeAlpha = a, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "strokeWeight", {
				get: function() {
					return this._strokeWeight
				},
				set: function(a) {
					this._strokeWeight != a && (this._strokeWeight = a, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._measureBounds = function() {
				var a = b.prototype._measureBounds.call(this),
					c = this.width,
					d = this.height;
				0 < a.x && (a.x = 0);
				0 < a.y && (a.y = 0);
				0 + c > a.right && (a.right = 0 + c);
				0 + d > a.bottom && (a.bottom = 0 + d);
				return a
			};
			a.prototype.updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, a);
				var d = this.graphics;
				d.clear();
				d.beginFill(this._fillColor, this._fillAlpha);
				0 < this._strokeAlpha && d.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, !0, "normal", "square", "miter");
				d.drawRect(0, 0,
					a, c);
				d.endFill()
			};
			return a
		}(d.UIComponent);
		d.Rect = f;
		f.prototype.__class__ = "egret.gui.Rect"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this.elementsContentChanged = this.createChildrenCalled = !1;
				this._elementsContent = []
			}
			__extends(a, b);
			a.prototype.createChildren = function() {
				b.prototype.createChildren.call(this);
				this.createChildrenCalled = !0;
				this.elementsContentChanged && (this.elementsContentChanged = !1, this.setElementsContent(this._elementsContent))
			};
			a.prototype._getElementsContent = function() {
				return this._elementsContent
			};
			Object.defineProperty(a.prototype, "elementsContent", {
				set: function(a) {
					null == a && (a = []);
					if (a != this._elementsContent)
						if (this.createChildrenCalled) this.setElementsContent(a);
						else {
							this.elementsContentChanged = !0;
							for (var b = this._elementsContent.length - 1; 0 <= b; b--) this._elementRemoved(this._elementsContent[b], b);
							this._elementsContent = a
						}
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setElementsContent = function(a) {
				var b;
				for (b = this._elementsContent.length - 1; 0 <= b; b--) this._elementRemoved(this._elementsContent[b], b);
				this._elementsContent = a.concat();
				a = this._elementsContent.length;
				for (b = 0; b < a; b++) {
					var c = this._elementsContent[b];
					c.parent && "removeElement" in c.parent ? c.parent.removeElement(c) : c.owner && "removeElement" in c.owner && c.owner.removeElement(c);
					this._elementAdded(c, b)
				}
			};
			Object.defineProperty(a.prototype, "numElements", {
				get: function() {
					return this._elementsContent.length
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.getElementAt = function(a) {
				this.checkForRangeError(a);
				return this._elementsContent[a]
			};
			a.prototype.checkForRangeError = function(a, b) {
				void 0 === b && (b = !1);
				var c = this._elementsContent.length -
					1;
				b && c++;
				if (0 > a || a > c) throw new RangeError('\u7d22\u5f15:"' + a + '"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4');
			};
			a.prototype.addElement = function(a) {
				var b = this.numElements;
				a.parent == this && (b = this.numElements - 1);
				return this.addElementAt(a, b)
			};
			a.prototype.addElementAt = function(a, b) {
				if (a == this) return a;
				this.checkForRangeError(b, !0);
				var c = a.owner;
				if (c == this || a.parent == this) return this.setElementIndex(a, b), a;
				c && "removeElement" in c && a.owner.removeElement(a);
				this._elementsContent.splice(b,
					0, a);
				this.elementsContentChanged || this._elementAdded(a, b);
				return a
			};
			a.prototype.removeElement = function(a) {
				return this.removeElementAt(this.getElementIndex(a))
			};
			a.prototype.removeElementAt = function(a) {
				this.checkForRangeError(a);
				var b = this._elementsContent[a];
				this.elementsContentChanged || this._elementRemoved(b, a);
				this._elementsContent.splice(a, 1);
				return b
			};
			a.prototype.removeAllElements = function() {
				for (var a = this.numElements - 1; 0 <= a; a--) this.removeElementAt(a)
			};
			a.prototype.getElementIndex = function(a) {
				return this._elementsContent.indexOf(a)
			};
			a.prototype.setElementIndex = function(a, b) {
				this.checkForRangeError(b);
				var c = this.getElementIndex(a); - 1 != c && c != b && (this.elementsContentChanged || this._elementRemoved(a, c, !1), this._elementsContent.splice(c, 1), this._elementsContent.splice(b, 0, a), this.elementsContentChanged || this._elementAdded(a, b, !1))
			};
			a.prototype.swapElements = function(a, b) {
				this.swapElementsAt(this.getElementIndex(a), this.getElementIndex(b))
			};
			a.prototype.swapElementsAt = function(a, b) {
				this.checkForRangeError(a);
				this.checkForRangeError(b);
				if (a > b) {
					var c = b;
					b = a;
					a = c
				} else if (a == b) return;
				var c = this._elementsContent,
					d = c[a],
					f = c[b];
				this.elementsContentChanged || (this._elementRemoved(d, a, !1), this._elementRemoved(f, b, !1));
				c[a] = f;
				c[b] = d;
				this.elementsContentChanged || (this._elementAdded(f, a, !1), this._elementAdded(d, b, !1))
			};
			a.prototype._elementAdded = function(a, b, f) {
				void 0 === f && (f = !0);
				a instanceof c.DisplayObject && this._addToDisplayListAt(a, b, f);
				f && this.hasEventListener(d.ElementExistenceEvent.ELEMENT_ADD) && d.ElementExistenceEvent.dispatchElementExistenceEvent(this,
					d.ElementExistenceEvent.ELEMENT_ADD, a, b);
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.prototype._elementRemoved = function(a, b, f) {
				void 0 === f && (f = !0);
				f && this.hasEventListener(d.ElementExistenceEvent.ELEMENT_REMOVE) && d.ElementExistenceEvent.dispatchElementExistenceEvent(this, d.ElementExistenceEvent.ELEMENT_REMOVE, a, b);
				a instanceof c.DisplayObject && a.parent == this && this._removeFromDisplayList(a, f);
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.prototype.addChild = function(b) {
				throw Error("addChild()" +
					a.errorStr + "addElement()\u4ee3\u66ff");
			};
			a.prototype.addChildAt = function(b, c) {
				throw Error("addChildAt()" + a.errorStr + "addElementAt()\u4ee3\u66ff");
			};
			a.prototype.removeChild = function(b) {
				throw Error("removeChild()" + a.errorStr + "removeElement()\u4ee3\u66ff");
			};
			a.prototype.removeChildAt = function(b) {
				throw Error("removeChildAt()" + a.errorStr + "removeElementAt()\u4ee3\u66ff");
			};
			a.prototype.setChildIndex = function(b, c) {
				throw Error("setChildIndex()" + a.errorStr + "setElementIndex()\u4ee3\u66ff");
			};
			a.prototype.swapChildren =
				function(b, c) {
					throw Error("swapChildren()" + a.errorStr + "swapElements()\u4ee3\u66ff");
				};
			a.prototype.swapChildrenAt = function(b, c) {
				throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()\u4ee3\u66ff");
			};
			a.errorStr = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
			return a
		}(d.GroupBase);
		d.Group = f;
		f.prototype.__class__ = "egret.gui.Group"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._selectable = !0;
				this._displayAsPassword = !1;
				this._editable = this.pendingEditable = this.displayAsPasswordChanged = !0;
				this.editableChanged = !1;
				this._maxChars = 0;
				this.maxCharsChanged = !1;
				this._multiline = !0;
				this.multilineChanged = !1;
				this._restrict = null;
				this.restrictChanged = !1;
				this._heightInLines = NaN;
				this.heightInLinesChanged = !1;
				this._widthInChars = NaN;
				this.widthInCharsChanged = !1;
				this._verticalScrollPosition = this._horizontalScrollPosition =
					this._contentHeight = this._contentWidth = 0;
				this._clipAndEnableScrolling = !1;
				this.defaultWidth = this.defaultHeight = NaN;
				this.isValidating = !1;
				this.selectable = !0
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "selectable", {
				get: function() {
					return this._selectable
				},
				set: function(a) {
					this._selectable = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "displayAsPassword", {
				get: function() {
					return this._displayAsPassword
				},
				set: function(a) {
					a != this._displayAsPassword && (this._displayAsPassword = a, this.displayAsPasswordChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "editable", {
				get: function() {
					return this._enabled ? this._editable : this.pendingEditable
				},
				set: function(a) {
					this._editable != a && (this._enabled ? (this._editable = a, this.editableChanged = !0, this.invalidateProperties()) : this.pendingEditable = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "enabled", {
				get: function() {
					return this._editable
				},
				set: function(a) {
					a !=
						this._enabled && ((this._enabled = a) ? (this._editable != this.pendingEditable && (this.editableChanged = !0), this._editable = this.pendingEditable) : (this.editable && (this.editableChanged = !0), this.pendingEditable = this._editable, this._editable = !1), this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "maxChars", {
				get: function() {
					return this._maxChars
				},
				set: function(a) {
					void 0 === a && (a = 0);
					a != this._maxChars && (this._maxChars = a, this.maxCharsChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "multiline", {
				get: function() {
					return this._multiline
				},
				set: function(a) {
					a != this.multiline && (this._multiline = a, this.multilineChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "restrict", {
				get: function() {
					return this._restrict
				},
				set: function(a) {
					a != this._restrict && (this._restrict = a, this.restrictChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setFontSize =
				function(a) {
					void 0 === a && (a = 0);
					this._size != a && (b.prototype._setFontSize.call(this, a), this.widthInCharsChanged = this.heightInLinesChanged = !0)
				};
			a.prototype._setLineSpacing = function(a) {
				this._lineSpacing != a && (b.prototype._setLineSpacing.call(this, a), this.heightInLinesChanged = !0)
			};
			Object.defineProperty(a.prototype, "heightInLines", {
				get: function() {
					return this._heightInLines
				},
				set: function(a) {
					this._heightInLines != a && (this._heightInLines = a, this.heightInLinesChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "widthInChars", {
				get: function() {
					return this._widthInChars
				},
				set: function(a) {
					this._widthInChars != a && (this._widthInChars = a, this.widthInCharsChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "contentWidth", {
				get: function() {
					return this._contentWidth
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setContentWidth = function(a) {
				if (a != this._contentWidth) {
					var b = this._contentWidth;
					this._contentWidth = a;
					this.dispatchPropertyChangeEvent("contentWidth",
						b, a)
				}
			};
			Object.defineProperty(a.prototype, "contentHeight", {
				get: function() {
					return this._contentHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setContentHeight = function(a) {
				if (a != this._contentHeight) {
					var b = this._contentHeight;
					this._contentHeight = a;
					this.dispatchPropertyChangeEvent("contentHeight", b, a)
				}
			};
			Object.defineProperty(a.prototype, "horizontalScrollPosition", {
				get: function() {
					return this._horizontalScrollPosition
				},
				set: function(a) {
					this._horizontalScrollPosition != a && (this._horizontalScrollPosition =
						a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "verticalScrollPosition", {
				get: function() {
					return this._verticalScrollPosition
				},
				set: function(a) {
					this._verticalScrollPosition != a && (this._verticalScrollPosition = a = Math.round(a))
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.getScrollVByVertitcalPos = function(a) {
				if (0 == this._textField.numLines) return 1;
				var b = this._textField._getLineHeight();
				return this._textField.height + (this.height - 4) % b - this.height == a ? this._textField.maxScrollV : parseInt((a -
					2) / b) + 1
			};
			a.prototype.getVerticalPosByScrollV = function(a) {
				void 0 === a && (a = 0);
				if (1 == a || 0 == this._textField.numLines) return 0;
				var b = this._textField._getLineHeight();
				return a == this._textField.maxScrollV ? this._textField.height + (this.height - 4) % b - this.height : b * (a - 1) + 2
			};
			a.prototype.getHorizontalScrollPositionDelta = function(a) {
				void 0 === a && (a = 0);
				var b = 0,
					c = this._contentWidth - this._horizontalScrollPosition - this.width,
					f = -this._horizontalScrollPosition;
				switch (a) {
					case d.NavigationUnit.LEFT:
						b = 0 >= this._horizontalScrollPosition ?
							0 : Math.max(f, -this.size);
						break;
					case d.NavigationUnit.RIGHT:
						b = this._horizontalScrollPosition + this.width >= this.contentWidth ? 0 : Math.min(c, this.size);
						break;
					case d.NavigationUnit.PAGE_LEFT:
						b = Math.max(f, -this.width);
						break;
					case d.NavigationUnit.PAGE_RIGHT:
						b = Math.min(c, this.width);
						break;
					case d.NavigationUnit.HOME:
						b = f;
						break;
					case d.NavigationUnit.END:
						b = c
				}
				return b
			};
			a.prototype.getVerticalScrollPositionDelta = function(a) {
				void 0 === a && (a = 0);
				var b = 0,
					c = this._contentHeight - this._verticalScrollPosition - this.height,
					f = -this._verticalScrollPosition;
				switch (a) {
					case d.NavigationUnit.UP:
						b = this.getVScrollDelta(-1);
						break;
					case d.NavigationUnit.DOWN:
						b = this.getVScrollDelta(1);
						break;
					case d.NavigationUnit.PAGE_UP:
						b = Math.max(f, -this.width);
						break;
					case d.NavigationUnit.PAGE_DOWN:
						b = Math.min(c, this.width);
						break;
					case d.NavigationUnit.HOME:
						b = f;
						break;
					case d.NavigationUnit.END:
						b = c
				}
				return b
			};
			a.prototype.getVScrollDelta = function(a) {
				void 0 === a && (a = 0);
				if (!this._textField) return 0;
				a = this.getScrollVByVertitcalPos(this._verticalScrollPosition) +
					a;
				a = Math.max(1, Math.min(this._textField.maxScrollV, a));
				return this.getVerticalPosByScrollV(a) - this._verticalScrollPosition
			};
			Object.defineProperty(a.prototype, "clipAndEnableScrolling", {
				get: function() {
					return this._clipAndEnableScrolling
				},
				set: function(a) {
					this._clipAndEnableScrolling != a && (this._clipAndEnableScrolling = a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.commitProperties = function() {
				this._textField || (this.restrictChanged = this.multilineChanged = this.maxCharsChanged = this.displayAsPasswordChanged =
					this.editableChanged = !0);
				b.prototype.commitProperties.call(this);
				this.editableChanged && (this._textField.type = this._editable ? c.TextFieldType.INPUT : c.TextFieldType.DYNAMIC, this.editableChanged = !1);
				this.displayAsPasswordChanged && (this._textField.displayAsPassword = this._displayAsPassword, this.displayAsPasswordChanged = !1);
				this.maxCharsChanged && (this._textField.maxChars = this._maxChars, this.maxCharsChanged = !1);
				this.multilineChanged && (this._textField.multiline = this._multiline, this.multilineChanged = !1);
				this.restrictChanged &&
					(this.restrictChanged = !1);
				if (this.heightInLinesChanged)
					if (this.heightInLinesChanged = !1, isNaN(this._heightInLines)) this.defaultHeight = NaN;
					else {
						var a = parseInt(this.heightInLines),
							d = 22;
						0 < this._textField._text.length ? d = this._textField._getLineHeight() : (this._textField._text = "M", d = this._textField._getLineHeight(), this._textField._text = "");
						this.defaultHeight = a * d + 4
					}
				this.widthInCharsChanged && (this.widthInCharsChanged = !1, isNaN(this._widthInChars) ? this.defaultWidth = NaN : (a = parseInt(this._widthInChars), this.defaultWidth =
					this.size * a + 5))
			};
			a.prototype.updateDisplayList = function(a, c) {
				this.isValidating = !0;
				b.prototype.updateDisplayList.call(this, a, c);
				this.updateContentSize();
				this.isValidating = !1
			};
			a.prototype.updateContentSize = function() {
				if (this.clipAndEnableScrolling) {
					this.setContentWidth(this._textField.width);
					var a = 0;
					0 == this._textField.numLines ? a = 4 : (a = this._textField._getLineHeight(), a = this._textField.height + (this.height - 4) % a);
					this.setContentHeight(a)
				}
			};
			Object.defineProperty(a.prototype, "selectionBeginIndex", {
				get: function() {
					this.validateProperties();
					return this._textField ? this._textField.selectionBeginIndex : 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectionEndIndex", {
				get: function() {
					this.validateProperties();
					return this._textField ? this._textField.selectionEndIndex : 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "caretIndex", {
				get: function() {
					this.validateProperties();
					return this._textField ? this._textField.caretIndex : 0
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setSelection = function(a, b) {
				void 0 ===
					b && (b = 0);
				this.validateProperties();
				this._textField && this._textField._setSelection(a, b)
			};
			a.prototype.selectAll = function() {
				this.validateProperties();
				this._textField && this._textField._setSelection(0, this._textField.text.length)
			};
			a.prototype.measure = function() {
				this.measuredWidth = isNaN(this.defaultWidth) ? d.TextBase.DEFAULT_MEASURED_WIDTH : this.defaultWidth;
				0 != this._maxChars && (this.measuredWidth = Math.min(this.measuredWidth, this._textField.width));
				this.measuredHeight = this._multiline ? isNaN(this.defaultHeight) ?
					2 * d.TextBase.DEFAULT_MEASURED_HEIGHT : this.defaultHeight : this._textField.height
			};
			a.prototype._createTextField = function() {
				b.prototype._createTextField.call(this);
				this._textField.type = this._editable ? c.TextFieldType.INPUT : c.TextFieldType.DYNAMIC;
				this._textField.multiline = this._multiline;
				this._textField.addEventListener(c.Event.CHANGE, this.textField_changeHandler, this);
				this._textField.addEventListener("scroll", this.textField_scrollHandler, this);
				this._textField.addEventListener("input", this.textField_textInputHandler,
					this)
			};
			a.prototype.textField_changeHandler = function(a) {
				a.stopImmediatePropagation();
				this.dispatchEvent(new c.Event(c.Event.CHANGE));
				this.invalidateSize();
				this.invalidateDisplayList();
				this.updateContentSize()
			};
			a.prototype.textField_scrollHandler = function(a) {};
			a.prototype.textField_textInputHandler = function(a) {
				a.stopImmediatePropagation();
				var b = new c.Event(a.type, !1, !0);
				b.data = a.data;
				this.dispatchEvent(b);
				b.isDefaultPrevented() && a.preventDefault()
			};
			return a
		}(d.TextBase);
		d.EditableText = f;
		f.prototype.__class__ =
			"egret.gui.EditableText"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this)
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "widthInChars", {
				get: function() {
					return b.prototype._getWidthInChars.call(this)
				},
				set: function(a) {
					b.prototype._setWidthInChars.call(this, a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setText = function(a) {
				b.prototype._setText.call(this, a);
				this.dispatchEvent(new c.Event(c.Event.CHANGE))
			};
			a.prototype.partAdded = function(a, c) {
				b.prototype.partAdded.call(this, a, c);
				c == this.textDisplay && (this.textDisplay.multiline = !1)
			};
			a.prototype.createSkinParts = function() {
				this.textDisplay = new d.EditableText;
				this.textDisplay.widthInChars = 10;
				this.textDisplay.multiline = !1;
				this.textDisplay.left = 1;
				this.textDisplay.right = 1;
				this.textDisplay.top = 1;
				this.textDisplay.bottom = 1;
				this._addToDisplayList(this.textDisplay);
				this.partAdded("textDisplay", this.textDisplay)
			};
			return a
		}(d.SkinnableTextBase);
		d.TextInput = f;
		f.prototype.__class__ = "egret.gui.TextInput"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				b.call(this, a, c, d)
			}
			__extends(a, b);
			a.dispatchUIEvent = function(b, d) {
				c.Event._dispatchByTarget(a, b, d)
			};
			a.INITIALIZE = "initialize";
			a.CREATION_COMPLETE = "creationComplete";
			a.UPDATE_COMPLETE = "updateComplete";
			a.BUTTON_DOWN = "buttonDown";
			a.CHANGE_END = "changeEnd";
			a.CHANGE_START = "changeStart";
			a.CHANGING = "changing";
			a.VALUE_COMMIT = "valueCommit";
			a.SKIN_CHANGED = "skinChanged";
			a.CONTENT_CHANGED = "contentChanged";
			a.OPEN =
				"open";
			a.CLOSE = "close";
			a.PLAY_COMPLETE = "playComplete";
			return a
		}(c.Event);
		d.UIEvent = f;
		f.prototype.__class__ = "egret.gui.UIEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g, h, m, k) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				void 0 === f && (f = null);
				void 0 === g && (g = null);
				void 0 === h && (h = null);
				void 0 === m && (m = null);
				void 0 === k && (k = null);
				b.call(this, a, c, d);
				this.kind = f;
				this.property = g;
				this.oldValue = h;
				this.newValue = m;
				this.source = k
			}
			__extends(a, b);
			a.dispatchPropertyChangeEvent = function(b, d, f, n, g, h) {
				void 0 === d && (d = null);
				void 0 === f && (f = null);
				void 0 === n && (n = null);
				void 0 === g && (g = null);
				void 0 === h && (h = null);
				var m = c.Event._getPropertyData(a);
				m.kind = d;
				m.property = f;
				m.oldValue = n;
				m.newValue = g;
				m.source = h;
				c.Event._dispatchByTarget(a, b, a.PROPERTY_CHANGE, m)
			};
			a.PROPERTY_CHANGE = "propertyChange";
			return a
		}(c.Event);
		d.PropertyChangeEvent = f;
		f.prototype.__class__ = "egret.gui.PropertyChangeEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(c) {
		var f = function() {
			function b() {}
			b.UPDATE = "update";
			b.DELETE = "delete";
			return b
		}();
		c.PropertyChangeEventKind = f;
		f.prototype.__class__ = "egret.gui.PropertyChangeEventKind"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g) {
				void 0 === c && (c = NaN);
				void 0 === d && (d = NaN);
				void 0 === f && (f = !1);
				void 0 === g && (g = !1);
				b.call(this, a, f, g);
				this.oldX = c;
				this.oldY = d
			}
			__extends(a, b);
			a.dispatchMoveEvent = function(b, d, f) {
				void 0 === d && (d = NaN);
				void 0 === f && (f = NaN);
				var n = c.Event._getPropertyData(a);
				n.oldX = d;
				n.oldY = f;
				c.Event._dispatchByTarget(a, b, a.MOVE, n)
			};
			a.MOVE = "move";
			return a
		}(c.Event);
		d.MoveEvent = f;
		f.prototype.__class__ = "egret.gui.MoveEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g) {
				void 0 === c && (c = NaN);
				void 0 === d && (d = NaN);
				void 0 === f && (f = !1);
				void 0 === g && (g = !1);
				b.call(this, a, f, g);
				this.oldWidth = c;
				this.oldHeight = d
			}
			__extends(a, b);
			a.dispatchResizeEvent = function(b, d, f) {
				void 0 === d && (d = NaN);
				void 0 === f && (f = NaN);
				var n = c.Event._getPropertyData(a);
				n.oldWidth = d;
				n.oldHeight = f;
				c.Event._dispatchByTarget(a, b, a.RESIZE, n)
			};
			a.RESIZE = "resize";
			return a
		}(c.Event);
		d.ResizeEvent = f;
		f.prototype.__class__ = "egret.gui.ResizeEvent"
	})(c.gui ||
		(c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				void 0 === f && (f = null);
				void 0 === g && (g = null);
				b.call(this, a, c, d);
				this.partName = f;
				this.instance = g
			}
			__extends(a, b);
			a.dispatchSkinPartEvent = function(b, d, f, n) {
				void 0 === f && (f = null);
				void 0 === n && (n = null);
				var g = c.Event._getPropertyData(a);
				g.partName = f;
				g.instance = n;
				c.Event._dispatchByTarget(a, b, d, g)
			};
			a.PART_ADDED = "partAdded";
			a.PART_REMOVED = "partRemoved";
			return a
		}(c.Event);
		d.SkinPartEvent = f;
		f.prototype.__class__ =
			"egret.gui.SkinPartEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				void 0 === f && (f = null);
				void 0 === g && (g = -1);
				b.call(this, a, c, d);
				this.element = f;
				this.index = g
			}
			__extends(a, b);
			a.dispatchElementExistenceEvent = function(b, d, f, n) {
				void 0 === f && (f = null);
				void 0 === n && (n = -1);
				var g = c.Event._getPropertyData(a);
				g.element = f;
				g.index = n;
				c.Event._dispatchByTarget(a, b, d, g)
			};
			a.ELEMENT_ADD = "elementAdd";
			a.ELEMENT_REMOVE = "elementRemove";
			return a
		}(c.Event);
		d.ElementExistenceEvent = f;
		f.prototype.__class__ =
			"egret.gui.ElementExistenceEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a(a, c, d, f, g) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				void 0 === f && (f = null);
				void 0 === g && (g = !1);
				b.call(this, a, c, d);
				this.popUp = f;
				this.modal = g
			}
			__extends(a, b);
			a.dispatchPopUpEvent = function(b, d, f, n) {
				void 0 === f && (f = null);
				void 0 === n && (n = !1);
				var g = c.Event._getPropertyData(a);
				g.popUp = f;
				g.modal = n;
				c.Event._dispatchByTarget(a, b, d, g)
			};
			a.ADD_POPUP = "addPopUp";
			a.REMOVE_POPUP = "removePopUp";
			a.BRING_TO_FRONT = "bringToFront";
			return a
		}(c.Event);
		d.PopUpEvent = f;
		f.prototype.__class__ =
			"egret.gui.PopUpEvent"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._useVirtualLayout = !1
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "target", {
				get: function() {
					return this._target
				},
				set: function(a) {
					this._target != a && (this._target = a, this.clearVirtualLayoutCache())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "useVirtualLayout", {
				get: function() {
					return this._useVirtualLayout
				},
				set: function(a) {
					this._useVirtualLayout != a && (this._useVirtualLayout = a, this.dispatchEventWith("useVirtualLayoutChanged"),
						this._useVirtualLayout && !a && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "typicalLayoutRect", {
				get: function() {
					return this._typicalLayoutRect
				},
				set: function(a) {
					this._typicalLayoutRect != a && (this._typicalLayoutRect = a, this.target && this.target.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.scrollPositionChanged = function() {};
			a.prototype.clearVirtualLayoutCache = function() {};
			a.prototype.elementAdded =
				function(a) {};
			a.prototype.elementRemoved = function(a) {};
			a.prototype.measure = function() {};
			a.prototype.updateDisplayList = function(a, b) {};
			return a
		}(c.EventDispatcher);
		d.LayoutBase = f;
		f.prototype.__class__ = "egret.gui.LayoutBase"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._mouseWheelSpeed = 20
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "useVirtualLayout", {
				set: function(a) {},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "mouseWheelSpeed", {
				get: function() {
					return this._mouseWheelSpeed
				},
				set: function(a) {
					0 == a && (a = 1);
					this._mouseWheelSpeed = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.getElementBoundsLeftOfScrollRect = function(a) {
				var b = new c.Rectangle;
				b.x = a.x - this._mouseWheelSpeed;
				b.right = a.x;
				return b
			};
			a.prototype.getElementBoundsRightOfScrollRect = function(a) {
				var b = new c.Rectangle;
				b.x = a.right;
				b.right = a.right + this._mouseWheelSpeed;
				return b
			};
			a.prototype.getElementBoundsAboveScrollRect = function(a) {
				var b = new c.Rectangle;
				b.y = a.y - this._mouseWheelSpeed;
				b.bottom = a.y;
				return b
			};
			a.prototype.getElementBoundsBelowScrollRect = function(a) {
				var b = new c.Rectangle;
				b.y = a.bottom;
				b.bottom = a.bottom + this._mouseWheelSpeed;
				return b
			};
			a.prototype.measure = function() {
				b.prototype.measure.call(this);
				if (null !=
					this.target) {
					for (var a = 0, c = 0, d = this.target.numElements, f = 0; f < d; f++) {
						var g = this.target.getElementAt(f);
						if (g && g.includeInLayout) {
							var h = g.horizontalCenter,
								m = g.verticalCenter,
								k = g.left,
								p = g.right,
								r = g.top,
								s = g.bottom;
							isNaN(k) || isNaN(p) ? isNaN(h) ? isNaN(k) && isNaN(p) ? h = g.preferredX : (h = isNaN(k) ? 0 : k, h += isNaN(p) ? 0 : p) : h = 2 * Math.abs(h) : h = k + p;
							isNaN(r) || isNaN(s) ? isNaN(m) ? isNaN(r) && isNaN(s) ? m = g.preferredY : (m = isNaN(r) ? 0 : r, m += isNaN(s) ? 0 : s) : m = 2 * Math.abs(m) : m = r + s;
							s = g.preferredHeight;
							a = Math.ceil(Math.max(a, h + g.preferredWidth));
							c = Math.ceil(Math.max(c, m + s))
						}
					}
					this.target.measuredWidth = a;
					this.target.measuredHeight = c
				}
			};
			a.prototype.updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, c);
				if (null != this.target) {
					for (var d = this.target.numElements, f = 0, g = 0, h = 0; h < d; h++) {
						var m = this.target.getElementAt(h);
						if (null != m && m.includeInLayout) {
							var k = m.horizontalCenter,
								p = m.verticalCenter,
								r = m.left,
								s = m.right,
								t = m.top,
								v = m.bottom,
								x = m.percentWidth,
								A = m.percentHeight,
								z = NaN,
								y = NaN;
							isNaN(r) || isNaN(s) ? isNaN(x) || (z = Math.round(a * Math.min(0.01 *
								x, 1))) : z = a - s - r;
							isNaN(t) || isNaN(v) ? isNaN(A) || (y = Math.round(c * Math.min(0.01 * A, 1))) : y = c - v - t;
							m.setLayoutBoundsSize(z, y);
							x = m.layoutBoundsWidth;
							A = m.layoutBoundsHeight;
							y = z = NaN;
							z = isNaN(k) ? isNaN(r) ? isNaN(s) ? m.layoutBoundsX : a - x - s : r : Math.round((a - x) / 2 + k);
							y = isNaN(p) ? isNaN(t) ? isNaN(v) ? m.layoutBoundsY : c - A - v : t : Math.round((c - A) / 2 + p);
							m.setLayoutBoundsPosition(z, y);
							f = Math.max(f, z + x);
							g = Math.max(g, y + A)
						}
					}
					this.target.setContentSize(f, g)
				}
			};
			return a
		}(d.LayoutBase);
		d.BasicLayout = f;
		f.prototype.__class__ = "egret.gui.BasicLayout"
	})(c.gui ||
		(c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(c) {
		var f = function() {
			function b(a, b, c) {
				this.raw_getElementAt = "raw_getElementAt";
				this.raw_addElementAt = "raw_addElementAt";
				this.raw_getElementIndex = "raw_getElementIndex";
				this.raw_removeElement = "raw_removeElement";
				this.raw_removeElementAt = "raw_removeElementAt";
				this.raw_setElementIndex = "raw_setElementIndex";
				this.owner = a;
				this.lowerBoundReference = b;
				this.upperBoundReference = c
			}
			Object.defineProperty(b.prototype, "numElements", {
				get: function() {
					return this.owner[this.upperBoundReference] - this.owner[this.lowerBoundReference]
				},
				enumerable: !0,
				configurable: !0
			});
			b.prototype.getElementAt = function(a) {
				return this.owner[this.raw_getElementAt](this.owner[this.lowerBoundReference] + a)
			};
			b.prototype.addElement = function(a) {
				var b = this.owner[this.upperBoundReference];
				a.parent === this.owner && b--;
				this.owner[this.upperBoundReference] ++;
				this.owner[this.raw_addElementAt](a, b);
				a.ownerChanged(this);
				return a
			};
			b.prototype.addElementAt = function(a, b) {
				this.owner[this.upperBoundReference] ++;
				this.owner[this.raw_addElementAt](a, this.owner[this.lowerBoundReference] +
					b);
				a.ownerChanged(this);
				return a
			};
			b.prototype.removeElement = function(a) {
				var b = this.owner[this.raw_getElementIndex](a);
				this.owner[this.lowerBoundReference] <= b && b < this.owner[this.upperBoundReference] && (this.owner[this.raw_removeElement](a), this.owner[this.upperBoundReference] --);
				a.ownerChanged(null);
				return a
			};
			b.prototype.removeElementAt = function(a) {
				a += this.owner[this.lowerBoundReference];
				var b;
				this.owner[this.lowerBoundReference] <= a && a < this.owner[this.upperBoundReference] && (b = this.owner[this.raw_removeElementAt](a),
					this.owner[this.upperBoundReference] --);
				b.ownerChanged(null);
				return b
			};
			b.prototype.getElementIndex = function(a) {
				a = this.owner[this.raw_getElementIndex](a);
				return a -= this.owner[this.lowerBoundReference]
			};
			b.prototype.setElementIndex = function(a, b) {
				this.owner[this.raw_setElementIndex](a, this.owner[this.lowerBoundReference] + b)
			};
			return b
		}();
		c.UILayer = f;
		f.prototype.__class__ = "egret.gui.UILayer"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(b) {
			function a() {
				b.call(this);
				this._autoResize = !0;
				this._cursorIndex = this._toolTipIndex = this._topMostIndex = this._noTopMostIndex = 0;
				this.addEventListener(c.Event.ADDED_TO_STAGE, this.onAddToStage, this);
				this.addEventListener(c.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
			}
			__extends(a, b);
			a.prototype.onAddToStage = function(a) {
				if (d.UIGlobals._uiStage) throw Error("UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01");
				d.UIGlobals._uiStage = this;
				this._autoResize && (this.stage.addEventListener(c.Event.RESIZE, this.onResize, this), this.onResize())
			};
			a.prototype.onRemoveFromStage = function(a) {
				d.UIGlobals._uiStage = null;
				this._autoResize && this.stage.removeEventListener(c.Event.RESIZE, this.onResize, this)
			};
			a.prototype.onResize = function(a) {
				this._setWidth(this.stage.stageWidth);
				this._setHeight(this.stage.stageHeight)
			};
			Object.defineProperty(a.prototype, "autoResize", {
				get: function() {
					return this._autoResize
				},
				set: function(a) {
					this._autoResize !=
						a && (this._autoResize = a, this.stage && (this._autoResize ? (this.stage.addEventListener(c.Event.RESIZE, this.onResize, this), this.onResize()) : this.stage.removeEventListener(c.Event.RESIZE, this.onResize, this)))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function(a) {
					this._autoResize || (this._x = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function(a) {
					this._autoResize || (this._y = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "width", {
				get: function() {
					return this._width
				},
				set: function(a) {
					this._autoResize || this._setWidth(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "height", {
				get: function() {
					return this._height
				},
				set: function(a) {
					this._autoResize || this._setHeight(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function(a) {
					this._autoResize || this._setScaleX(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(a) {
					this._autoResize || this._setScaleY(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setActualSize = function(a, c) {
				this._autoResize || b.prototype.setActualSize.call(this, a, c)
			};
			a.prototype.setLayoutBoundsPosition = function(a, c) {
				this._autoResize || b.prototype.setLayoutBoundsPosition.call(this, a, c)
			};
			a.prototype.setLayoutBoundsSize = function(a, c) {
				this._autoResize || b.prototype.setLayoutBoundsSize.call(this,
					a, c)
			};
			Object.defineProperty(a.prototype, "layout", {
				get: function() {
					return this._layout
				},
				set: function(a) {
					a instanceof d.BasicLayout && this._setLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "popUpContainer", {
				get: function() {
					this._popUpContainer || (this._popUpContainer = new d.UILayer(this, "noTopMostIndex", "topMostIndex"));
					return this._popUpContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "toolTipContainer", {
				get: function() {
					this._toolTipContainer || (this._toolTipContainer =
						new d.UILayer(this, "topMostIndex", "toolTipIndex"));
					return this._toolTipContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "cursorContainer", {
				get: function() {
					this._cursorContainer || (this._cursorContainer = new d.UILayer(this, "toolTipIndex", "cursorIndex"));
					return this._cursorContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "noTopMostIndex", {
				get: function() {
					return this._noTopMostIndex
				},
				set: function(a) {
					var b = a - this._noTopMostIndex;
					this._noTopMostIndex =
						a;
					this.topMostIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "topMostIndex", {
				get: function() {
					return this._topMostIndex
				},
				set: function(a) {
					var b = a - this._topMostIndex;
					this._topMostIndex = a;
					this.toolTipIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "toolTipIndex", {
				get: function() {
					return this._toolTipIndex
				},
				set: function(a) {
					var b = a - this._toolTipIndex;
					this._toolTipIndex = a;
					this.cursorIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype,
				"cursorIndex", {
					get: function() {
						return this._cursorIndex
					},
					set: function(a) {
						this._cursorIndex = a
					},
					enumerable: !0,
					configurable: !0
				});
			a.prototype.addElement = function(a) {
				var b = this._noTopMostIndex;
				a.parent == this && b--;
				return this.addElementAt(a, b)
			};
			a.prototype.addElementAt = function(a, c) {
				if (a.parent == this) {
					var d = this.getElementIndex(a);
					d < this._noTopMostIndex ? this.noTopMostIndex-- : d >= this._noTopMostIndex && d < this._topMostIndex ? this.topMostIndex-- : d >= this._topMostIndex && d < this._toolTipIndex ? this.toolTipIndex-- :
						this.cursorIndex--
				}
				c <= this._noTopMostIndex ? this.noTopMostIndex++ : c > this._noTopMostIndex && c <= this._topMostIndex ? this.topMostIndex++ : c > this._topMostIndex && c <= this._toolTipIndex ? this.toolTipIndex++ : this.cursorIndex++;
				return b.prototype.addElementAt.call(this, a, c)
			};
			a.prototype.removeElement = function(a) {
				return this.removeElementAt(b.prototype.getElementIndex.call(this, a))
			};
			a.prototype.removeElementAt = function(a) {
				var c = b.prototype.removeElementAt.call(this, a);
				a < this._noTopMostIndex ? this.noTopMostIndex-- :
					a >= this._noTopMostIndex && a < this._topMostIndex ? this.topMostIndex-- : a >= this._topMostIndex && a < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--;
				return c
			};
			a.prototype.removeAllElements = function() {
				for (; 0 < this._noTopMostIndex;) b.prototype.removeElementAt.call(this, 0), this.noTopMostIndex--
			};
			a.prototype._elementRemoved = function(a, d, f) {
				void 0 === f && (f = !0);
				f && c.Event.dispatchEvent(a, "removeFromUIStage");
				b.prototype._elementRemoved.call(this, a, d, f)
			};
			a.prototype.raw_getElementAt = function(a) {
				return b.prototype.getElementAt.call(this,
					a)
			};
			a.prototype.raw_addElement = function(a) {
				var b = this.numElements;
				a.parent == this && b--;
				return this.raw_addElementAt(a, b)
			};
			a.prototype.raw_addElementAt = function(a, c) {
				if (a.parent == this) {
					var d = this.getElementIndex(a);
					d < this._noTopMostIndex ? this.noTopMostIndex-- : d >= this._noTopMostIndex && d < this._topMostIndex ? this.topMostIndex-- : d >= this._topMostIndex && d < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--
				}
				return b.prototype.addElementAt.call(this, a, c)
			};
			a.prototype.raw_removeElement = function(a) {
				return b.prototype.removeElementAt.call(this,
					b.prototype.getElementIndex.call(this, a))
			};
			a.prototype.raw_removeElementAt = function(a) {
				return b.prototype.removeElementAt.call(this, a)
			};
			a.prototype.raw_removeAllElements = function() {
				for (; 0 < this.numElements;) b.prototype.removeElementAt.call(this, 0)
			};
			a.prototype.raw_getElementIndex = function(a) {
				return b.prototype.getElementIndex.call(this, a)
			};
			a.prototype.raw_setElementIndex = function(a, c) {
				b.prototype.setElementIndex.call(this, a, c)
			};
			a.prototype.raw_swapElements = function(a, c) {
				b.prototype.swapElementsAt.call(this,
					b.prototype.getElementIndex.call(this, a), b.prototype.getElementIndex.call(this, c))
			};
			a.prototype.raw_swapElementsAt = function(a, c) {
				b.prototype.swapElementsAt.call(this, a, c)
			};
			return a
		}(d.Group);
		d.UIStage = f;
		f.prototype.__class__ = "egret.gui.UIStage"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	(function(d) {
		var f = function(a) {
			function e() {
				a.call(this);
				this._popUpList = [];
				this.popUpDataList = [];
				this._modalColor = 0;
				this._modalAlpha = 0.5;
				this.invalidateModalFlag = !1
			}
			__extends(e, a);
			Object.defineProperty(e.prototype, "popUpList", {
				get: function() {
					return this._popUpList.concat()
				},
				enumerable: !0,
				configurable: !0
			});
			e.prototype.findPopUpData = function(a) {
				for (var b = this.popUpDataList, c = b.length, d = 0; d < c; d++) {
					var e = b[d];
					if (e.popUp == a) return e
				}
				return null
			};
			e.prototype.addPopUp = function(a, c, f) {
				void 0 ===
					c && (c = !1);
				void 0 === f && (f = !0);
				var g = d.UIGlobals.uiStage,
					h = this.findPopUpData(a);
				h ? (h.modal = c, a.removeEventListener(e.REMOVE_FROM_UISTAGE, this.onRemoved, this)) : (h = new b(a, c), this.popUpDataList.push(h), this._popUpList.push(a));
				g.popUpContainer.addElement(a);
				f && this.centerPopUp(a);
				"isPopUp" in a && (a.isPopUp = !0);
				c && this.invalidateModal();
				a.addEventListener(e.REMOVE_FROM_UISTAGE, this.onRemoved, this)
			};
			e.prototype.onRemoved = function(a) {
				for (var b = 0, c = this.popUpDataList, d = c.length, f = 0; f < d; f++) {
					var m = c[f];
					if (m.popUp ==
						a.target) {
						"isPopUp" in m.popUp && (m.popUp.isPopUp = !1);
						m.popUp.removeEventListener(e.REMOVE_FROM_UISTAGE, this.onRemoved, this);
						this.popUpDataList.splice(b, 1);
						this._popUpList.splice(b, 1);
						this.invalidateModal();
						break
					}
					b++
				}
			};
			Object.defineProperty(e.prototype, "modalColor", {
				get: function() {
					return this._modalColor
				},
				set: function(a) {
					this._modalColor != a && (this._modalColor = a, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(e.prototype, "modalAlpha", {
				get: function() {
					return this._modalAlpha
				},
				set: function(a) {
					this._modalAlpha != a && (this._modalAlpha = a, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			});
			e.prototype.invalidateModal = function() {
				this.invalidateModalFlag || (this.invalidateModalFlag = !0, d.UIGlobals.stage.addEventListener(c.Event.ENTER_FRAME, this.validateModal, this), d.UIGlobals.stage.addEventListener(c.Event.RENDER, this.validateModal, this), d.UIGlobals.stage.invalidate())
			};
			e.prototype.validateModal = function(a) {
				this.invalidateModalFlag = !1;
				d.UIGlobals.stage.removeEventListener(c.Event.ENTER_FRAME,
					this.validateModal, this);
				d.UIGlobals.stage.removeEventListener(c.Event.RENDER, this.validateModal, this);
				this.updateModal(d.UIGlobals.uiStage)
			};
			e.prototype.updateModal = function(a) {
				for (var b = a.popUpContainer, c = !1, e = b.numElements - 1; 0 <= e; e--) {
					var f = b.getElementAt(e);
					if ((f = this.findPopUpData(f)) && f.modal) {
						c = !0;
						break
					}
				}
				c ? (this.modalMask || (this.modalMask = new d.Rect, this.modalMask.touchEnabled = !0, this.modalMask.top = this.modalMask.left = this.modalMask.right = this.modalMask.bottom = 0), this.modalMask.fillColor = this._modalColor,
					this.modalMask.alpha = this._modalAlpha, this.modalMask.parent == a ? (b.getElementIndex(this.modalMask) < e && e--, b.setElementIndex(this.modalMask, e)) : b.addElementAt(this.modalMask, e)) : this.modalMask && this.modalMask.parent == a && b.removeElement(this.modalMask)
			};
			e.prototype.removePopUp = function(a) {
				a && a.parent && this.findPopUpData(a) && ("removeElement" in a.parent ? a.parent.removeElement(a) : a.parent instanceof d.UIComponent ? a.parent._removeFromDisplayList(a) : a instanceof c.DisplayObject && a.parent.removeChild(a))
			};
			e.prototype.centerPopUp = function(a) {
				a.top = a.bottom = a.left = a.right = NaN;
				a.verticalCenter = a.horizontalCenter = 0;
				var b = a.parent;
				b && ("validateNow" in a && a.validateNow(), a.x = 0.5 * (b.width - a.layoutBoundsWidth), a.y = 0.5 * (b.height - a.layoutBoundsHeight))
			};
			e.prototype.bringToFront = function(a) {
				if (this.findPopUpData(a) && a.parent && "popUpContainer" in a.parent) {
					var b = a.parent;
					b.popUpContainer.setElementIndex(a, b.popUpContainer.numElements - 1);
					this.invalidateModal()
				}
			};
			e.REMOVE_FROM_UISTAGE = "removeFromUIStage";
			return e
		}(c.EventDispatcher);
		d.PopUpManagerImpl = f;
		f.prototype.__class__ = "egret.gui.PopUpManagerImpl";
		var b = function() {
			return function(a, b) {
				this.popUp = a;
				this.modal = b
			}
		}();
		b.prototype.__class__ = "egret.gui.PopUpData"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
	(function(d) {
		var f = function() {
			function b() {}
			b.getImpl = function() {
				if (!b._impl) try {
					b._impl = c.Injector.getInstance("egret.gui.IPopUpManager")
				} catch (a) {
					b._impl = new d.PopUpManagerImpl
				}
				return b._impl
			};
			Object.defineProperty(b.prototype, "modalColor", {
				get: function() {
					return b.getImpl().modalColor
				},
				set: function(a) {
					b.getImpl().modalColor = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b.prototype, "modalAlpha", {
				get: function() {
					return b.getImpl().modalAlpha
				},
				set: function(a) {
					b.getImpl().modalAlpha =
						a
				},
				enumerable: !0,
				configurable: !0
			});
			b.addPopUp = function(a, c, f) {
				void 0 === c && (c = !1);
				void 0 === f && (f = !0);
				b.getImpl().addPopUp(a, c, f);
				d.PopUpEvent.dispatchPopUpEvent(b.getImpl(), d.PopUpEvent.ADD_POPUP, a, c)
			};
			b.removePopUp = function(a) {
				b.getImpl().removePopUp(a);
				d.PopUpEvent.dispatchPopUpEvent(b.getImpl(), d.PopUpEvent.REMOVE_POPUP, a)
			};
			b.centerPopUp = function(a) {
				b.getImpl().centerPopUp(a)
			};
			b.bringToFront = function(a) {
				b.getImpl().bringToFront(a);
				d.PopUpEvent.dispatchPopUpEvent(b.getImpl(), d.PopUpEvent.BRING_TO_FRONT,
					a)
			};
			Object.defineProperty(b, "popUpList", {
				get: function() {
					return b.getImpl().popUpList
				},
				enumerable: !0,
				configurable: !0
			});
			b.addEventListener = function(a, c, d, f, n) {
				void 0 === f && (f = !1);
				void 0 === n && (n = 0);
				b.getImpl().addEventListener(a, c, this, f, n)
			};
			b.removeEventListener = function(a, c, d, f) {
				void 0 === f && (f = !1);
				b.getImpl().removeEventListener(a, c, d, f)
			};
			return b
		}();
		d.PopUpManager = f;
		f.prototype.__class__ = "egret.gui.PopUpManager"
	})(c.gui || (c.gui = {}))
})(egret || (egret = {}));
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	dragonBones;
(function(c) {
	var d;
	(function(a) {
		var b = function() {
			function a(b, c) {
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				this.x = b;
				this.y = c
			}
			a.prototype.toString = function() {
				return "[Point (x=" + this.x + " y=" + this.y + ")]"
			};
			return a
		}();
		a.Point = b;
		b.prototype.__class__ = "dragonBones.geom.Point";
		b = function() {
			return function(a, b, c, d) {
				void 0 === a && (a = 0);
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				void 0 === d && (d = 0);
				this.x = a;
				this.y = b;
				this.width = c;
				this.height = d
			}
		}();
		a.Rectangle = b;
		b.prototype.__class__ = "dragonBones.geom.Rectangle";
		b = function() {
			function a() {
				this.a =
					1;
				this.c = this.b = 0;
				this.d = 1;
				this.ty = this.tx = 0
			}
			a.prototype.invert = function() {
				var a = this.a,
					b = this.b,
					c = this.c,
					d = this.d,
					e = this.tx,
					f = a * d - b * c;
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
		b.prototype.__class__ = "dragonBones.geom.Matrix";
		b = function() {
			return function() {
				this.redOffset = this.redMultiplier = this.greenOffset = this.greenMultiplier = this.blueOffset = this.blueMultiplier = this.alphaOffset = this.alphaMultiplier = 0
			}
		}();
		a.ColorTransform =
			b;
		b.prototype.__class__ = "dragonBones.geom.ColorTransform"
	})(d = c.geom || (c.geom = {}));
	var f;
	(function(a) {
		var b = function() {
			return function(a) {
				this.type = a
			}
		}();
		a.Event = b;
		b.prototype.__class__ = "dragonBones.events.Event";
		var c = function(a) {
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
		c.prototype.__class__ =
			"dragonBones.events.AnimationEvent";
		c = function(a) {
			function b(c) {
				a.call(this, c)
			}
			__extends(b, a);
			b.Z_ORDER_UPDATED = "zOrderUpdated";
			return b
		}(b);
		a.ArmatureEvent = c;
		c.prototype.__class__ = "dragonBones.events.ArmatureEvent";
		c = function(a) {
			function b(c) {
				a.call(this, c)
			}
			__extends(b, a);
			b.ANIMATION_FRAME_EVENT = "animationFrameEvent";
			b.BONE_FRAME_EVENT = "boneFrameEvent";
			return b
		}(b);
		a.FrameEvent = c;
		c.prototype.__class__ = "dragonBones.events.FrameEvent";
		b = function(a) {
			function b(c) {
				a.call(this, c)
			}
			__extends(b, a);
			b.SOUND =
				"sound";
			b.BONE_FRAME_EVENT = "boneFrameEvent";
			return b
		}(b);
		a.SoundEvent = b;
		b.prototype.__class__ = "dragonBones.events.SoundEvent";
		b = function() {
			function a() {}
			a.prototype.hasEventListener = function(a) {
				return this._listenersMap && this._listenersMap[a] ? !0 : !1
			};
			a.prototype.addEventListener = function(a, b) {
				if (a && b) {
					this._listenersMap || (this._listenersMap = {});
					var c = this._listenersMap[a];
					c && this.removeEventListener(a, b);
					c ? c.push(b) : this._listenersMap[a] = [b]
				}
			};
			a.prototype.removeEventListener = function(a, b) {
				if (this._listenersMap &&
					a && b) {
					var c = this._listenersMap[a];
					if (c)
						for (var d = c.length, e = 0; e < d; e++) c[e] == b && (1 == d ? (c.length = 0, delete this._listenersMap[a]) : c.splice(e, 1))
				}
			};
			a.prototype.removeAllEventListeners = function(a) {
				a ? delete this._listenersMap[a] : this._listenersMap = null
			};
			a.prototype.dispatchEvent = function(a) {
				if (a) {
					var b = this._listenersMap[a.type];
					if (b) {
						a.target = this;
						for (var c = b.concat(), b = b.length, d = 0; d < b; d++) c[d](a)
					}
				}
			};
			return a
		}();
		a.EventDispatcher = b;
		b.prototype.__class__ = "dragonBones.events.EventDispatcher";
		b = function(a) {
			function b() {
				a.call(this);
				if (b._instance) throw Error("Singleton already constructed!");
			}
			__extends(b, a);
			b.getInstance = function() {
				b._instance || (b._instance = new b);
				return b._instance
			};
			return b
		}(b);
		a.SoundEventManager = b;
		b.prototype.__class__ = "dragonBones.events.SoundEventManager"
	})(f = c.events || (c.events = {}));
	var b;
	(function(b) {
		var c = function() {
			function a() {
				this.timeScale = 1;
				this.time = 0.001 * (new Date).getTime();
				this._animatableList = []
			}
			a.prototype.contains = function(a) {
				return 0 <= this._animatableList.indexOf(a)
			};
			a.prototype.add = function(a) {
				a &&
					-1 == this._animatableList.indexOf(a) && this._animatableList.push(a)
			};
			a.prototype.remove = function(a) {
				a = this._animatableList.indexOf(a);
				0 <= a && (this._animatableList[a] = null)
			};
			a.prototype.clear = function() {
				this._animatableList.length = 0
			};
			a.prototype.advanceTime = function(a) {
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
						e && (c != d && (this._animatableList[c] = e, this._animatableList[d] =
							null), e.advanceTime(a), c++)
					}
					if (c != d) {
						for (b = this._animatableList.length; d < b;) this._animatableList[c++] = this._animatableList[d++];
						this._animatableList.length = c
					}
				}
			};
			a.clock = new a;
			return a
		}();
		b.WorldClock = c;
		c.prototype.__class__ = "dragonBones.animation.WorldClock";
		var k = function() {
			function b() {
				this.transform = new a.DBTransform;
				this.pivot = new d.Point;
				this._durationTransform = new a.DBTransform;
				this._durationPivot = new d.Point;
				this._durationColor = new d.ColorTransform
			}
			b._borrowObject = function() {
				return 0 == b._pool.length ?
					new b : b._pool.pop()
			};
			b._returnObject = function(a) {
				0 > b._pool.indexOf(a) && (b._pool[b._pool.length] = a);
				a.clear()
			};
			b._clear = function() {
				for (var a = b._pool.length; a--;) b._pool[a].clear();
				b._pool.length = 0
			};
			b.getEaseValue = function(a, c) {
				if (1 < c) {
					var d = 0.5 * (1 - Math.cos(a * Math.PI)) - a;
					c -= 1
				} else 0 < c ? d = Math.sin(a * b.HALF_PI) - a : 0 > c && (d = 1 - Math.cos(a * b.HALF_PI) - a, c *= -1);
				return d * c + a
			};
			b.prototype.fadeIn = function(a, b, c) {
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
			b.prototype.fadeOut = function() {
				this.transform.skewX = e.TransformUtil.formatRadian(this.transform.skewX);
				this.transform.skewY = e.TransformUtil.formatRadian(this.transform.skewY)
			};
			b.prototype.update = function(a) {
				if (this._updateState)
					if (0 < this._updateState) {
						a =
							0 == this._timeline.scale ? 1 : a / this._timeline.scale;
						1 == a && (a = 0.99999999);
						a += this._timeline.offset;
						var c = Math.floor(a);
						a -= c;
						for (var d = this._totalTime * a, f = !1, k; !this._currentFrame || d > this._currentFramePosition + this._currentFrameDuration || d < this._currentFramePosition;) f && this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !0), f = !0, this._currentFrame ? (k = this._timeline.getFrameList().indexOf(this._currentFrame) + 1, k >= this._timeline.getFrameList().length && (k = 0), this._currentFrame = this._timeline.getFrameList()[k]) :
							(k = 0, this._currentFrame = this._timeline.getFrameList()[0]), this._currentFrameDuration = this._currentFrame.duration, this._currentFramePosition = this._currentFrame.position;
						f && (this.tweenActive = 0 <= this._currentFrame.displayIndex, k++, k >= this._timeline.getFrameList().length && (k = 0), f = this._timeline.getFrameList()[k], 0 == k && this._animationState.loop && this._animationState.loopCount >= Math.abs(this._animationState.loop) - 1 && 0.99999999 < ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + c - this._timeline.offset) *
							this._timeline.scale ? (this._updateState = 0, this._tweenEasing = NaN) : 0 > this._currentFrame.displayIndex || 0 > f.displayIndex || !this._animationState.tweenEnabled ? this._tweenEasing = NaN : isNaN(this._animationState.clip.tweenEasing) ? this._tweenEasing = this._currentFrame.tweenEasing : this._tweenEasing = this._animationState.clip.tweenEasing, isNaN(this._tweenEasing) ? this._tweenColor = this._tweenTransform = !1 : (this._durationTransform.x = f.transform.x - this._currentFrame.transform.x, this._durationTransform.y = f.transform.y -
								this._currentFrame.transform.y, this._durationTransform.skewX = f.transform.skewX - this._currentFrame.transform.skewX, this._durationTransform.skewY = f.transform.skewY - this._currentFrame.transform.skewY, this._durationTransform.scaleX = f.transform.scaleX - this._currentFrame.transform.scaleX, this._durationTransform.scaleY = f.transform.scaleY - this._currentFrame.transform.scaleY, 0 == k && (this._durationTransform.skewX = e.TransformUtil.formatRadian(this._durationTransform.skewX), this._durationTransform.skewY = e.TransformUtil.formatRadian(this._durationTransform.skewY)),
								this._durationPivot.x = f.pivot.x - this._currentFrame.pivot.x, this._durationPivot.y = f.pivot.y - this._currentFrame.pivot.y, this._tweenTransform = 0 != this._durationTransform.x || 0 != this._durationTransform.y || 0 != this._durationTransform.skewX || 0 != this._durationTransform.skewY || 0 != this._durationTransform.scaleX || 0 != this._durationTransform.scaleY || 0 != this._durationPivot.x || 0 != this._durationPivot.y ? !0 : !1, this._currentFrame.color && f.color ? (this._durationColor.alphaOffset = f.color.alphaOffset - this._currentFrame.color.alphaOffset,
									this._durationColor.redOffset = f.color.redOffset - this._currentFrame.color.redOffset, this._durationColor.greenOffset = f.color.greenOffset - this._currentFrame.color.greenOffset, this._durationColor.blueOffset = f.color.blueOffset - this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = f.color.alphaMultiplier - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = f.color.redMultiplier - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = f.color.greenMultiplier -
									this._currentFrame.color.greenMultiplier, this._durationColor.blueMultiplier = f.color.blueMultiplier - this._currentFrame.color.blueMultiplier, this._tweenColor = 0 != this._durationColor.alphaOffset || 0 != this._durationColor.redOffset || 0 != this._durationColor.greenOffset || 0 != this._durationColor.blueOffset || 0 != this._durationColor.alphaMultiplier || 0 != this._durationColor.redMultiplier || 0 != this._durationColor.greenMultiplier || 0 != this._durationColor.blueMultiplier ? !0 : !1) : this._currentFrame.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset, this._durationColor.redOffset = -this._currentFrame.color.redOffset, this._durationColor.greenOffset = -this._currentFrame.color.greenOffset, this._durationColor.blueOffset = -this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = 1 - this._currentFrame.color.alphaMultiplier, this._durationColor.redMultiplier = 1 - this._currentFrame.color.redMultiplier, this._durationColor.greenMultiplier = 1 - this._currentFrame.color.greenMultiplier,
									this._durationColor.blueMultiplier = 1 - this._currentFrame.color.blueMultiplier) : f.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = f.color.alphaOffset, this._durationColor.redOffset = f.color.redOffset, this._durationColor.greenOffset = f.color.greenOffset, this._durationColor.blueOffset = f.color.blueOffset, this._durationColor.alphaMultiplier = f.color.alphaMultiplier - 1, this._durationColor.redMultiplier = f.color.redMultiplier - 1, this._durationColor.greenMultiplier = f.color.greenMultiplier - 1, this._durationColor.blueMultiplier =
									f.color.blueMultiplier - 1) : this._tweenColor = !1), this._tweenTransform || (this._animationState.blend ? (this.transform.x = this._originTransform.x + this._currentFrame.transform.x, this.transform.y = this._originTransform.y + this._currentFrame.transform.y, this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX, this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY, this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX, this.transform.scaleY =
								this._originTransform.scaleY + this._currentFrame.transform.scaleY, this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x, this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y) : (this.transform.x = this._currentFrame.transform.x, this.transform.y = this._currentFrame.transform.y, this.transform.skewX = this._currentFrame.transform.skewX, this.transform.skewY = this._currentFrame.transform.skewY, this.transform.scaleX = this._currentFrame.transform.scaleX, this.transform.scaleY = this._currentFrame.transform.scaleY,
								this.pivot.x = this._currentFrame.pivot.x, this.pivot.y = this._currentFrame.pivot.y)), this._tweenColor || (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._isColorChanged && this._bone._updateColor(0,
								0, 0, 0, 1, 1, 1, 1, !1)), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1));
						if (this._tweenTransform || this._tweenColor) a = (d - this._currentFramePosition) / this._currentFrameDuration, this._tweenEasing && (a = b.getEaseValue(a, this._tweenEasing));
						this._tweenTransform && (c = this._currentFrame.transform, d = this._currentFrame.pivot, this._animationState.blend ? (this.transform.x = this._originTransform.x + c.x + this._durationTransform.x * a, this.transform.y = this._originTransform.y + c.y + this._durationTransform.y *
							a, this.transform.skewX = this._originTransform.skewX + c.skewX + this._durationTransform.skewX * a, this.transform.skewY = this._originTransform.skewY + c.skewY + this._durationTransform.skewY * a, this.transform.scaleX = this._originTransform.scaleX + c.scaleX + this._durationTransform.scaleX * a, this.transform.scaleY = this._originTransform.scaleY + c.scaleY + this._durationTransform.scaleY * a, this.pivot.x = this._originPivot.x + d.x + this._durationPivot.x * a, this.pivot.y = this._originPivot.y + d.y + this._durationPivot.y * a) : (this.transform.x =
							c.x + this._durationTransform.x * a, this.transform.y = c.y + this._durationTransform.y * a, this.transform.skewX = c.skewX + this._durationTransform.skewX * a, this.transform.skewY = c.skewY + this._durationTransform.skewY * a, this.transform.scaleX = c.scaleX + this._durationTransform.scaleX * a, this.transform.scaleY = c.scaleY + this._durationTransform.scaleY * a, this.pivot.x = d.x + this._durationPivot.x * a, this.pivot.y = d.y + this._durationPivot.y * a));
						this._tweenColor && (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset +
							this._durationColor.alphaOffset * a, this._currentFrame.color.redOffset + this._durationColor.redOffset * a, this._currentFrame.color.greenOffset + this._durationColor.greenOffset * a, this._currentFrame.color.blueOffset + this._durationColor.blueOffset * a, this._currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * a, this._currentFrame.color.redMultiplier + this._durationColor.redMultiplier * a, this._currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * a, this._currentFrame.color.blueMultiplier +
							this._durationColor.blueMultiplier * a, !0) : this._bone._updateColor(this._durationColor.alphaOffset * a, this._durationColor.redOffset * a, this._durationColor.greenOffset * a, this._durationColor.blueOffset * a, 1 + this._durationColor.alphaMultiplier * a, 1 + this._durationColor.redMultiplier * a, 1 + this._durationColor.greenMultiplier * a, 1 + this._durationColor.blueMultiplier * a, !0))
					} else this._updateState = 0, this._animationState.blend ? (this.transform.copy(this._originTransform), this.pivot.x = this._originPivot.x, this.pivot.y =
						this._originPivot.y) : (this.transform.x = this.transform.y = this.transform.skewX = this.transform.skewY = this.transform.scaleX = this.transform.scaleY = 0, this.pivot.x = 0, this.pivot.y = 0), this._currentFrame = this._timeline.getFrameList()[0], this.tweenActive = 0 <= this._currentFrame.displayIndex, this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier,
						this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)
			};
			b.prototype.clear = function() {
				this._updateState = 0;
				this._originPivot = this._originTransform = this._currentFrame = this._timeline = this._animationState = this._bone = null
			};
			b.HALF_PI = 0.5 * Math.PI;
			b._pool = [];
			return b
		}();
		b.TimelineState = k;
		k.prototype.__class__ = "dragonBones.animation.TimelineState";
		var l = function() {
			function a() {
				this.layer = this.loop = 0;
				this._timelineStates = {}
			}
			a._borrowObject = function() {
				return 0 == a._pool.length ? new a : a._pool.pop()
			};
			a._returnObject = function(b) {
				0 > a._pool.indexOf(b) && (a._pool[a._pool.length] = b);
				b.clear()
			};
			a._clear = function() {
				for (var b = a._pool.length; b--;) a._pool[b].clear();
				a._pool.length = 0
			};
			a.prototype.fadeIn = function(a, b, c, d, e, f, k, l) {
				this.layer = f;
				this.clip = b;
				this.name = this.clip.name;
				this.totalTime = this.clip.duration;
				this._armature = a;
				2 > Math.round(this.clip.duration *
					this.clip.frameRate) || Infinity == d ? (this.timeScale = 1, this.currentTime = this.totalTime, this.loop = 0 <= this.loop ? 1 : -1) : (this.timeScale = d, this.currentTime = 0, this.loop = e);
				this._pauseBeforeFadeInComplete = l;
				this._fadeInTime = c * this.timeScale;
				this._fadeState = 1;
				this._fadeOutBeginTime = 0;
				this._fadeOutWeight = -1;
				this._fadeWeight = 0;
				this._fadeIn = !0;
				this._fadeOut = !1;
				this.loopCount = -1;
				this.displayControl = k;
				this.isPlaying = !0;
				this.isComplete = !1;
				this.weight = 1;
				this.tweenEnabled = this.enabled = this.blend = !0;
				this.updateTimelineStates()
			};
			a.prototype.fadeOut = function(a, b) {
				void 0 === b && (b = !1);
				if (this._armature && !(0 <= this._fadeOutWeight)) {
					this._fadeState = -1;
					this._fadeOutWeight = this._fadeWeight;
					this._fadeOutTime = a * this.timeScale;
					this._fadeOutBeginTime = this.currentTime;
					this._fadeOut = !0;
					this.isPlaying = !b;
					this.displayControl = !1;
					for (var c in this._timelineStates) this._timelineStates[c].fadeOut();
					this.enabled = !0
				}
			};
			a.prototype.play = function() {
				this.isPlaying = !0
			};
			a.prototype.stop = function() {
				this.isPlaying = !1
			};
			a.prototype.getMixingTransform = function(a) {
				return this._mixingTransforms ?
					Number(this._mixingTransforms[a]) : -1
			};
			a.prototype.addMixingTransform = function(a, b, c) {
				void 0 === b && (b = 2);
				void 0 === c && (c = !0);
				if (this.clip && this.clip.getTimeline(a)) {
					this._mixingTransforms || (this._mixingTransforms = {});
					if (c) {
						c = this._armature._boneList.length;
						for (var d, e; c--;) d = this._armature._boneList[c], d.name == a && (e = d), e && (e == d || e.contains(d)) && (this._mixingTransforms[d.name] = b)
					} else this._mixingTransforms[a] = b;
					this.updateTimelineStates()
				} else throw Error();
			};
			a.prototype.removeMixingTransform = function(a,
				b) {
				void 0 === a && (a = null);
				void 0 === b && (b = !0);
				if (a) {
					if (b)
						for (var c = this._armature._boneList.length, d, e; c--;) d = this._armature._boneList[c], d.name == a && (e = d), e && (e == d || e.contains(d)) && delete this._mixingTransforms[d.name];
					else delete this._mixingTransforms[a];
					for (var f in this._mixingTransforms) {
						var k = !0;
						break
					}
					k || (this._mixingTransforms = null)
				} else this._mixingTransforms = null;
				this.updateTimelineStates()
			};
			a.prototype.advanceTime = function(a) {
				if (!this.enabled) return !1;
				var b, c;
				this._fadeIn && (this._fadeIn = !1,
					this._armature.hasEventListener(f.AnimationEvent.FADE_IN) && (b = new f.AnimationEvent(f.AnimationEvent.FADE_IN), b.animationState = this, this._armature._eventList.push(b)));
				this._fadeOut && (this._fadeOut = !1, this._armature.hasEventListener(f.AnimationEvent.FADE_OUT) && (b = new f.AnimationEvent(f.AnimationEvent.FADE_OUT), b.animationState = this, this._armature._eventList.push(b)));
				this.currentTime += a * this.timeScale;
				if (this.isPlaying && !this.isComplete) {
					var d;
					if (this._pauseBeforeFadeInComplete) this.isPlaying = this._pauseBeforeFadeInComplete = !1, a = 0, d = Math.floor(a);
					else if (a = this.currentTime / this.totalTime, d = Math.floor(a), d != this.loopCount && (-1 == this.loopCount && this._armature.hasEventListener(f.AnimationEvent.START) && (b = new f.AnimationEvent(f.AnimationEvent.START), b.animationState = this, this._armature._eventList.push(b)), this.loopCount = d)) this.loop && this.loopCount * this.loopCount >= this.loop * this.loop - 1 ? (c = !0, a = 1, d = 0, this._armature.hasEventListener(f.AnimationEvent.COMPLETE) && (b = new f.AnimationEvent(f.AnimationEvent.COMPLETE), b.animationState =
						this, this._armature._eventList.push(b))) : this._armature.hasEventListener(f.AnimationEvent.LOOP_COMPLETE) && (b = new f.AnimationEvent(f.AnimationEvent.LOOP_COMPLETE), b.animationState = this, this._armature._eventList.push(b));
					for (var e in this._timelineStates) this._timelineStates[e].update(a);
					b = this.clip.getFrameList();
					if (0 < b.length) {
						a = this.totalTime * (a - d);
						for (d = !1; !this._currentFrame || a > this._currentFrame.position + this._currentFrame.duration || a < this._currentFrame.position;) d && this._armature._arriveAtFrame(this._currentFrame,
							null, this, !0), d = !0, this._currentFrame ? (e = b.indexOf(this._currentFrame), e++, e >= b.length && (e = 0), this._currentFrame = b[e]) : this._currentFrame = b[0];
						d && this._armature._arriveAtFrame(this._currentFrame, null, this, !1)
					}
				}
				if (0 < this._fadeState) 0 == this._fadeInTime ? (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying = !0, this._armature.hasEventListener(f.AnimationEvent.FADE_IN_COMPLETE) && (b = new f.AnimationEvent(f.AnimationEvent.FADE_IN_COMPLETE), b.animationState = this, this._armature._eventList.push(b))) : (this._fadeWeight =
					this.currentTime / this._fadeInTime, 1 <= this._fadeWeight && (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying || (this.currentTime -= this._fadeInTime), this.isPlaying = !0, this._armature.hasEventListener(f.AnimationEvent.FADE_IN_COMPLETE) && (b = new f.AnimationEvent(f.AnimationEvent.FADE_IN_COMPLETE), b.animationState = this, this._armature._eventList.push(b))));
				else if (0 > this._fadeState) {
					if (0 == this._fadeOutTime) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(f.AnimationEvent.FADE_OUT_COMPLETE) &&
						(b = new f.AnimationEvent(f.AnimationEvent.FADE_OUT_COMPLETE), b.animationState = this, this._armature._eventList.push(b)), !0;
					this._fadeWeight = (1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime) * this._fadeOutWeight;
					if (0 >= this._fadeWeight) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(f.AnimationEvent.FADE_OUT_COMPLETE) && (b = new f.AnimationEvent(f.AnimationEvent.FADE_OUT_COMPLETE), b.animationState = this, this._armature._eventList.push(b)), !0
				}
				c && (this.isComplete = !0, 0 > this.loop &&
					this.fadeOut((this._fadeOutWeight || this._fadeInTime) / this.timeScale, !0));
				return !1
			};
			a.prototype.updateTimelineStates = function() {
				if (this._mixingTransforms) {
					for (var a in this._timelineStates) null == this._mixingTransforms[a] && this.removeTimelineState(a);
					for (a in this._mixingTransforms) this._timelineStates[a] || this.addTimelineState(a)
				} else
					for (a in this.clip.getTimelines()) this._timelineStates[a] || this.addTimelineState(a)
			};
			a.prototype.addTimelineState = function(a) {
				var b = this._armature.getBone(a);
				if (b) {
					var c =
						k._borrowObject(),
						d = this.clip.getTimeline(a);
					c.fadeIn(b, this, d);
					this._timelineStates[a] = c
				}
			};
			a.prototype.removeTimelineState = function(a) {
				k._returnObject(this._timelineStates[a]);
				delete this._timelineStates[a]
			};
			a.prototype.clear = function() {
				this.clip = null;
				this.enabled = !1;
				this._mixingTransforms = this._currentFrame = this._armature = null;
				for (var a in this._timelineStates) this.removeTimelineState(a)
			};
			a._pool = [];
			return a
		}();
		b.AnimationState = l;
		l.prototype.__class__ = "dragonBones.animation.AnimationState";
		c = function() {
			function a(b) {
				this._armature =
					b;
				this._animationLayer = [];
				this._isPlaying = !1;
				this.animationNameList = [];
				this.tweenEnabled = !0;
				this.timeScale = 1
			}
			a.prototype.getLastAnimationName = function() {
				return this._lastAnimationState ? this._lastAnimationState.name : null
			};
			a.prototype.getLastAnimationState = function() {
				return this._lastAnimationState
			};
			a.prototype.getAnimationDataList = function() {
				return this._animationDataList
			};
			a.prototype.setAnimationDataList = function(a) {
				this._animationDataList = a;
				this.animationNameList.length = 0;
				for (var b in this._animationDataList) this.animationNameList[this.animationNameList.length] =
					this._animationDataList[b].name
			};
			a.prototype.getIsPlaying = function() {
				return this._isPlaying && !this.getIsComplete()
			};
			a.prototype.getIsComplete = function() {
				if (this._lastAnimationState) {
					if (!this._lastAnimationState.isComplete) return !1;
					for (var a = this._animationLayer.length; a--;)
						for (var b = this._animationLayer[a], c = b.length; c--;)
							if (!b[c].isComplete) return !1;
					return !0
				}
				return !1
			};
			a.prototype.dispose = function() {
				if (this._armature) {
					this.stop();
					for (var a = this._animationLayer.length; a--;) {
						for (var b = this._animationLayer[a],
								c = b.length; c--;) l._returnObject(b[c]);
						b.length = 0
					}
					this._animationLayer.length = 0;
					this.animationNameList.length = 0;
					this.animationNameList = this._animationDataList = this._animationLayer = this._armature = null
				}
			};
			a.prototype.gotoAndPlay = function(b, c, d, e, f, k, g, h, m, q) {
				void 0 === c && (c = -1);
				void 0 === d && (d = -1);
				void 0 === e && (e = NaN);
				void 0 === f && (f = 0);
				void 0 === k && (k = null);
				void 0 === g && (g = a.SAME_LAYER_AND_GROUP);
				void 0 === h && (h = !0);
				void 0 === m && (m = !0);
				void 0 === q && (q = !0);
				if (!this._animationDataList) return null;
				for (var n = this._animationDataList.length,
						w; n--;)
					if (this._animationDataList[n].name == b) {
						w = this._animationDataList[n];
						break
					}
				if (!w) return null;
				this._isPlaying = !0;
				c = 0 > c ? 0 > w.fadeInTime ? 0.3 : w.fadeInTime : c;
				d = 0 > d ? 0 > w.scale ? 1 : w.scale : d / w.duration;
				e = isNaN(e) ? w.loop : e;
				f = this.addLayer(f);
				var u;
				switch (g) {
					case a.NONE:
						break;
					case a.SAME_LAYER:
						u = this._animationLayer[f];
						for (n = u.length; n--;) g = u[n], g.fadeOut(c, m);
						break;
					case a.SAME_GROUP:
						for (F = this._animationLayer.length; F--;)
							for (u = this._animationLayer[F], n = u.length; n--;) g = u[n], g.group == k && g.fadeOut(c, m);
						break;
					case a.ALL:
						for (var F = this._animationLayer.length; F--;)
							for (u = this._animationLayer[F], n = u.length; n--;) g = u[n], g.fadeOut(c, m);
						break;
					default:
						for (u = this._animationLayer[f], n = u.length; n--;) g = u[n], g.group == k && g.fadeOut(c, m)
				}
				this._lastAnimationState = l._borrowObject();
				this._lastAnimationState.group = k;
				this._lastAnimationState.tweenEnabled = this.tweenEnabled;
				this._lastAnimationState.fadeIn(this._armature, w, c, 1 / d, e, f, h, q);
				this.addState(this._lastAnimationState);
				e = this._armature._slotList;
				for (n = e.length; n--;) f =
					e[n], (f = f.getChildArmature()) && f.animation.gotoAndPlay(b, c);
				return this._lastAnimationState
			};
			a.prototype.play = function() {
				this._animationDataList && 0 != this._animationDataList.length && (this._lastAnimationState ? this._isPlaying ? this.gotoAndPlay(this._lastAnimationState.name) : this._isPlaying = !0 : this.gotoAndPlay(this._animationDataList[0].name))
			};
			a.prototype.stop = function() {
				this._isPlaying = !1
			};
			a.prototype.getState = function(a, b) {
				void 0 === b && (b = 0);
				var c = this._animationLayer.length;
				if (0 == c) return null;
				b >= c &&
					(b = c - 1);
				c = this._animationLayer[b];
				if (!c) return null;
				for (var d = c.length; d--;)
					if (c[d].name == a) return c[d];
				return null
			};
			a.prototype.hasAnimation = function(a) {
				for (var b = this._animationDataList.length; b--;)
					if (this._animationDataList[b].name == a) return !0;
				return !1
			};
			a.prototype.advanceTime = function(a) {
				if (this._isPlaying) {
					a *= this.timeScale;
					var b = this._armature._boneList.length,
						c, d, e = b,
						f, k, l, g, h, p, m, q, r, n, G, I, K, M, B, E, D;
					for (b--; e--;) {
						k = this._armature._boneList[e];
						l = k.name;
						g = 1;
						I = G = n = r = q = m = p = h = 0;
						for (c = this._animationLayer.length; c--;) {
							K =
								0;
							M = this._animationLayer[c];
							f = M.length;
							for (d = 0; d < f; d++) B = M[d], e == b && B.advanceTime(a) ? (this.removeState(B), d--, f--) : (E = B._timelineStates[l]) && E.tweenActive && (B = B._fadeWeight * B.weight * g, D = E.transform, E = E.pivot, h += D.x * B, p += D.y * B, m += D.skewX * B, q += D.skewY * B, r += D.scaleX * B, n += D.scaleY * B, G += E.x * B, I += E.y * B, K += B);
							if (K >= g) break;
							else g -= K
						}
						D = k.tween;
						E = k._tweenPivot;
						D.x = h;
						D.y = p;
						D.skewX = m;
						D.skewY = q;
						D.scaleX = r;
						D.scaleY = n;
						E.x = G;
						E.y = I
					}
				}
			};
			a.prototype.addLayer = function(a) {
				a >= this._animationLayer.length && (a = this._animationLayer.length,
					this._animationLayer[a] = []);
				return a
			};
			a.prototype.addState = function(a) {
				this._animationLayer[a.layer].push(a)
			};
			a.prototype.removeState = function(a) {
				var b = a.layer,
					c = this._animationLayer[b];
				c.splice(c.indexOf(a), 1);
				l._returnObject(a);
				0 == c.length && b == this._animationLayer.length - 1 && this._animationLayer.length--
			};
			a.NONE = "none";
			a.SAME_LAYER = "sameLayer";
			a.SAME_GROUP = "sameGroup";
			a.SAME_LAYER_AND_GROUP = "sameLayerAndGroup";
			a.ALL = "all";
			return a
		}();
		b.Animation = c;
		c.prototype.__class__ = "dragonBones.animation.Animation"
	})(b =
		c.animation || (c.animation = {}));
	var a;
	(function(a) {
		var b = function() {
			function a() {
				this.skewY = this.skewX = this.y = this.x = 0;
				this.scaleY = this.scaleX = 1
			}
			a.prototype.getRotation = function() {
				return this.skewX
			};
			a.prototype.setRotation = function(a) {
				this.skewX = this.skewY = a
			};
			a.prototype.copy = function(a) {
				this.x = a.x;
				this.y = a.y;
				this.skewX = a.skewX;
				this.skewY = a.skewY;
				this.scaleX = a.scaleX;
				this.scaleY = a.scaleY
			};
			a.prototype.toString = function() {
				return "[DBTransform (x=" + this.x + " y=" + this.y + " skewX=" + this.skewX + " skewY=" + this.skewY +
					" scaleX=" + this.scaleX + " scaleY=" + this.scaleY + ")]"
			};
			return a
		}();
		a.DBTransform = b;
		b.prototype.__class__ = "dragonBones.objects.DBTransform";
		var c = function() {
			function a() {
				this.duration = this.position = 0
			}
			a.prototype.dispose = function() {};
			return a
		}();
		a.Frame = c;
		c.prototype.__class__ = "dragonBones.objects.Frame";
		var f = function(a) {
			function c() {
				a.call(this);
				this.displayIndex = this.tweenRotate = this.tweenEasing = 0;
				this.zOrder = NaN;
				this.visible = !0;
				this.global = new b;
				this.transform = new b;
				this.pivot = new d.Point
			}
			__extends(c,
				a);
			c.prototype.dispose = function() {
				a.prototype.dispose.call(this);
				this.color = this.pivot = this.transform = this.global = null
			};
			return c
		}(c);
		a.TransformFrame = f;
		f.prototype.__class__ = "dragonBones.objects.TransformFrame";
		var l = function() {
			function a() {
				this._frameList = [];
				this.duration = 0;
				this.scale = 1
			}
			a.prototype.getFrameList = function() {
				return this._frameList
			};
			a.prototype.dispose = function() {
				for (var a = this._frameList.length; a--;) this._frameList[a].dispose();
				this._frameList.length = 0;
				this._frameList = null
			};
			a.prototype.addFrame =
				function(a) {
					if (!a) throw Error();
					if (0 > this._frameList.indexOf(a)) this._frameList[this._frameList.length] = a;
					else throw Error();
				};
			return a
		}();
		a.Timeline = l;
		l.prototype.__class__ = "dragonBones.objects.Timeline";
		var g = function(a) {
			function c() {
				a.call(this);
				this.originTransform = new b;
				this.originPivot = new d.Point;
				this.offset = 0;
				this.transformed = !1
			}
			__extends(c, a);
			c.prototype.dispose = function() {
				this != c.HIDE_TIMELINE && (a.prototype.dispose.call(this), this.originPivot = this.originTransform = null)
			};
			c.HIDE_TIMELINE =
				new c;
			return c
		}(l);
		a.TransformTimeline = g;
		g.prototype.__class__ = "dragonBones.objects.TransformTimeline";
		var q = function(a) {
			function b() {
				a.call(this);
				this.loop = this.frameRate = 0;
				this.tweenEasing = NaN;
				this.fadeInTime = 0;
				this._timelines = {}
			}
			__extends(b, a);
			b.prototype.getTimelines = function() {
				return this._timelines
			};
			b.prototype.dispose = function() {
				a.prototype.dispose.call(this);
				for (var b in this._timelines) this._timelines[b].dispose();
				this._timelines = null
			};
			b.prototype.getTimeline = function(a) {
				return this._timelines[a]
			};
			b.prototype.addTimeline = function(a, b) {
				if (!a) throw Error();
				this._timelines[b] = a
			};
			return b
		}(l);
		a.AnimationData = q;
		q.prototype.__class__ = "dragonBones.objects.AnimationData";
		var n = function() {
			function a() {
				this.transform = new b
			}
			a.prototype.dispose = function() {
				this.pivot = this.transform = null
			};
			a.ARMATURE = "armature";
			a.IMAGE = "image";
			return a
		}();
		a.DisplayData = n;
		n.prototype.__class__ = "dragonBones.objects.DisplayData";
		var x = function() {
			function a() {
				this._displayDataList = [];
				this.zOrder = 0;
				this.blendMode = "normal"
			}
			a.prototype.getDisplayDataList =
				function() {
					return this._displayDataList
				};
			a.prototype.dispose = function() {
				for (var a = this._displayDataList.length; a--;) this._displayDataList[a].dispose();
				this._displayDataList.length = 0;
				this._displayDataList = null
			};
			a.prototype.addDisplayData = function(a) {
				if (!a) throw Error();
				if (0 > this._displayDataList.indexOf(a)) this._displayDataList[this._displayDataList.length] = a;
				else throw Error();
			};
			a.prototype.getDisplayData = function(a) {
				for (var b = this._displayDataList.length; b--;)
					if (this._displayDataList[b].name == a) return this._displayDataList[b];
				return null
			};
			return a
		}();
		a.SlotData = x;
		x.prototype.__class__ = "dragonBones.objects.SlotData";
		var A = function() {
			function a() {
				this.length = 0;
				this.global = new b;
				this.transform = new b;
				this.scaleMode = 1;
				this.fixedRotation = !1
			}
			a.prototype.dispose = function() {
				this.transform = this.global = null
			};
			return a
		}();
		a.BoneData = A;
		A.prototype.__class__ = "dragonBones.objects.BoneData";
		var z = function() {
			function a() {
				this._slotDataList = []
			}
			a.prototype.getSlotDataList = function() {
				return this._slotDataList
			};
			a.prototype.dispose = function() {
				for (var a =
						this._slotDataList.length; a--;) this._slotDataList[a].dispose();
				this._slotDataList.length = 0;
				this._slotDataList = null
			};
			a.prototype.getSlotData = function(a) {
				for (var b = this._slotDataList.length; b--;)
					if (this._slotDataList[b].name == a) return this._slotDataList[b];
				return null
			};
			a.prototype.addSlotData = function(a) {
				if (!a) throw Error();
				if (0 > this._slotDataList.indexOf(a)) this._slotDataList[this._slotDataList.length] = a;
				else throw Error();
			};
			return a
		}();
		a.SkinData = z;
		z.prototype.__class__ = "dragonBones.objects.SkinData";
		var y = function() {
			function a() {
				this._boneDataList = [];
				this._skinDataList = [];
				this._animationDataList = []
			}
			a.prototype.getBoneDataList = function() {
				return this._boneDataList
			};
			a.prototype.getSkinDataList = function() {
				return this._skinDataList
			};
			a.prototype.getAnimationDataList = function() {
				return this._animationDataList
			};
			a.prototype.dispose = function() {
				for (var a = this._boneDataList.length; a--;) this._boneDataList[a].dispose();
				for (a = this._skinDataList.length; a--;) this._skinDataList[a].dispose();
				for (a = this._animationDataList.length; a--;) this._animationDataList[a].dispose();
				this._boneDataList.length = 0;
				this._skinDataList.length = 0;
				this._animationDataList.length = 0;
				this._animationDataList = this._skinDataList = this._boneDataList = null
			};
			a.prototype.getBoneData = function(a) {
				for (var b = this._boneDataList.length; b--;)
					if (this._boneDataList[b].name == a) return this._boneDataList[b];
				return null
			};
			a.prototype.getSkinData = function(a) {
				if (!a) return this._skinDataList[0];
				for (var b = this._skinDataList.length; b--;)
					if (this._skinDataList[b].name == a) return this._skinDataList[b];
				return null
			};
			a.prototype.getAnimationData =
				function(a) {
					for (var b = this._animationDataList.length; b--;)
						if (this._animationDataList[b].name == a) return this._animationDataList[b];
					return null
				};
			a.prototype.addBoneData = function(a) {
				if (!a) throw Error();
				if (0 > this._boneDataList.indexOf(a)) this._boneDataList[this._boneDataList.length] = a;
				else throw Error();
			};
			a.prototype.addSkinData = function(a) {
				if (!a) throw Error();
				if (0 > this._skinDataList.indexOf(a)) this._skinDataList[this._skinDataList.length] = a;
				else throw Error();
			};
			a.prototype.addAnimationData = function(a) {
				if (!a) throw Error();
				0 > this._animationDataList.indexOf(a) && (this._animationDataList[this._animationDataList.length] = a)
			};
			a.prototype.sortBoneDataList = function() {
				var a = this._boneDataList.length;
				if (0 != a) {
					for (var b = []; a--;) {
						for (var c = this._boneDataList[a], d = 0, e = c; e && e.parent;) d++, e = this.getBoneData(e.parent);
						b[a] = {
							level: d,
							boneData: c
						}
					}
					b.sort(this.sortBoneData);
					for (a = b.length; a--;) this._boneDataList[a] = b[a].boneData
				}
			};
			a.prototype.sortBoneData = function(a, b) {
				return a.level > b.level ? 1 : -1
			};
			return a
		}();
		a.ArmatureData = y;
		y.prototype.__class__ =
			"dragonBones.objects.ArmatureData";
		var H = function() {
			function a() {
				this._armatureDataList = [];
				this._subTexturePivots = {}
			}
			a.prototype.getArmatureNames = function() {
				var a = [],
					b;
				for (b in this._armatureDataList) a[a.length] = this._armatureDataList[b].name;
				return a
			};
			a.prototype.getArmatureDataList = function() {
				return this._armatureDataList
			};
			a.prototype.dispose = function() {
				for (var a in this._armatureDataList) this._armatureDataList[a].dispose();
				this._armatureDataList.length = 0;
				this._subTexturePivots = this._armatureDataList =
					null
			};
			a.prototype.getArmatureData = function(a) {
				for (var b = this._armatureDataList.length; b--;)
					if (this._armatureDataList[b].name == a) return this._armatureDataList[b];
				return null
			};
			a.prototype.addArmatureData = function(a) {
				if (!a) throw Error();
				if (0 > this._armatureDataList.indexOf(a)) this._armatureDataList[this._armatureDataList.length] = a;
				else throw Error();
			};
			a.prototype.removeArmatureData = function(a) {
				a = this._armatureDataList.indexOf(a);
				0 <= a && this._armatureDataList.splice(a, 1)
			};
			a.prototype.removeArmatureDataByName =
				function(a) {
					for (var b = this._armatureDataList.length; b--;) this._armatureDataList[b].name == a && this._armatureDataList.splice(b, 1)
				};
			a.prototype.getSubTexturePivot = function(a) {
				return this._subTexturePivots[a]
			};
			a.prototype.addSubTexturePivot = function(a, b, c) {
				var e = this._subTexturePivots[c];
				e ? (e.x = a, e.y = b) : this._subTexturePivots[c] = e = new d.Point(a, b);
				return e
			};
			a.prototype.removeSubTexturePivot = function(a) {
				if (a) delete this._subTexturePivots[a];
				else
					for (a in this._subTexturePivots) delete this._subTexturePivots[a]
			};
			return a
		}();
		a.SkeletonData = H;
		H.prototype.__class__ = "dragonBones.objects.SkeletonData";
		l = function() {
			function a() {}
			a.parseTextureAtlasData = function(a, b) {
				void 0 === b && (b = 1);
				if (!a) throw Error();
				var c = {};
				c.__name = a[e.ConstValues.A_NAME];
				var f = a[e.ConstValues.SUB_TEXTURE],
					k;
				for (k in f) {
					var l = f[k],
						g = l[e.ConstValues.A_NAME],
						l = new d.Rectangle(Number(l[e.ConstValues.A_X]) / b, Number(l[e.ConstValues.A_Y]) / b, Number(l[e.ConstValues.A_WIDTH]) / b, Number(l[e.ConstValues.A_HEIGHT]) / b);
					c[g] = l
				}
				return c
			};
			a.parseSkeletonData =
				function(b) {
					if (!b) throw Error();
					var c = Number(b[e.ConstValues.A_FRAME_RATE]),
						d = new H;
					d.name = b[e.ConstValues.A_NAME];
					b = b[e.ConstValues.ARMATURE];
					for (var f in b) d.addArmatureData(a.parseArmatureData(b[f], d, c));
					return d
				};
			a.parseArmatureData = function(b, c, d) {
				var f = new y;
				f.name = b[e.ConstValues.A_NAME];
				var k = b[e.ConstValues.BONE],
					l;
				for (l in k) f.addBoneData(a.parseBoneData(k[l]));
				k = b[e.ConstValues.SKIN];
				for (l in k) f.addSkinData(a.parseSkinData(k[l], c));
				e.DBDataUtil.transformArmatureData(f);
				f.sortBoneDataList();
				b = b[e.ConstValues.ANIMATION];
				for (l in b) f.addAnimationData(a.parseAnimationData(b[l], f, d));
				return f
			};
			a.parseBoneData = function(b) {
				var c = new A;
				c.name = b[e.ConstValues.A_NAME];
				c.parent = b[e.ConstValues.A_PARENT];
				c.length = Number(b[e.ConstValues.A_LENGTH]) || 0;
				var d = Number(b[e.ConstValues.A_SCALE_MODE]);
				!isNaN(d) && d && (c.scaleMode = d);
				if (d = b[e.ConstValues.A_FIXED_ROTATION]) c.fixedRotation = d;
				a.parseTransform(b[e.ConstValues.TRANSFORM], c.global);
				c.transform.copy(c.global);
				return c
			};
			a.parseSkinData = function(b,
				c) {
				var d = new z;
				d.name = b[e.ConstValues.A_NAME];
				var f = b[e.ConstValues.SLOT],
					k;
				for (k in f) d.addSlotData(a.parseSlotData(f[k], c));
				return d
			};
			a.parseSlotData = function(b, c) {
				var d = new x;
				d.name = b[e.ConstValues.A_NAME];
				d.parent = b[e.ConstValues.A_PARENT];
				d.zOrder = Number(b[e.ConstValues.A_Z_ORDER]);
				d.blendMode = b[e.ConstValues.A_BLENDMODE];
				d.blendMode || (d.blendMode = "normal");
				var f = b[e.ConstValues.DISPLAY],
					k;
				for (k in f) d.addDisplayData(a.parseDisplayData(f[k], c));
				return d
			};
			a.parseDisplayData = function(b, c) {
				var d =
					new n;
				d.name = b[e.ConstValues.A_NAME];
				d.type = b[e.ConstValues.A_TYPE];
				d.pivot = c.addSubTexturePivot(0, 0, d.name);
				a.parseTransform(b[e.ConstValues.TRANSFORM], d.transform, d.pivot);
				return d
			};
			a.parseAnimationData = function(b, c, d) {
				var f = new q;
				f.name = b[e.ConstValues.A_NAME];
				f.frameRate = d;
				f.loop = Number(b[e.ConstValues.A_LOOP]) || 0;
				f.fadeInTime = Number(b[e.ConstValues.A_FADE_IN_TIME]);
				f.duration = Number(b[e.ConstValues.A_DURATION]) / d;
				f.scale = Number(b[e.ConstValues.A_SCALE]);
				if (b.hasOwnProperty(e.ConstValues.A_TWEEN_EASING)) {
					var k =
						b[e.ConstValues.A_TWEEN_EASING];
					f.tweenEasing = void 0 == k || null == k ? NaN : Number(k)
				} else f.tweenEasing = NaN;
				a.parseTimeline(b, f, a.parseMainFrame, d);
				var l, k = b[e.ConstValues.TIMELINE],
					g;
				for (g in k) l = k[g], b = a.parseTransformTimeline(l, f.duration, d), l = l[e.ConstValues.A_NAME], f.addTimeline(b, l);
				e.DBDataUtil.addHideTimeline(f, c);
				e.DBDataUtil.transformAnimationData(f, c);
				return f
			};
			a.parseTimeline = function(a, b, c, d) {
				var f = 0,
					k;
				a = a[e.ConstValues.FRAME];
				for (var l in a) k = c(a[l], d), k.position = f, b.addFrame(k), f += k.duration;
				k && (k.duration = b.duration - k.position)
			};
			a.parseTransformTimeline = function(b, c, d) {
				var f = new g;
				f.duration = c;
				a.parseTimeline(b, f, a.parseTransformFrame, d);
				f.scale = Number(b[e.ConstValues.A_SCALE]);
				f.offset = Number(b[e.ConstValues.A_OFFSET]);
				return f
			};
			a.parseFrame = function(a, b, c) {
				b.duration = Number(a[e.ConstValues.A_DURATION]) / c;
				b.action = a[e.ConstValues.A_ACTION];
				b.event = a[e.ConstValues.A_EVENT];
				b.sound = a[e.ConstValues.A_SOUND]
			};
			a.parseMainFrame = function(b, d) {
				var e = new c;
				a.parseFrame(b, e, d);
				return e
			};
			a.parseTransformFrame =
				function(b, c) {
					var k = new f;
					a.parseFrame(b, k, c);
					k.visible = 1 != Number(b[e.ConstValues.A_HIDE]);
					if (b.hasOwnProperty(e.ConstValues.A_TWEEN_EASING)) {
						var l = b[e.ConstValues.A_TWEEN_EASING];
						k.tweenEasing = void 0 == l || null == l ? NaN : Number(l)
					} else k.tweenEasing = 0;
					k.tweenRotate = Number(b[e.ConstValues.A_TWEEN_ROTATE]) || 0;
					k.displayIndex = Number(b[e.ConstValues.A_DISPLAY_INDEX]) || 0;
					k.zOrder = Number(b[e.ConstValues.A_Z_ORDER]) || 0;
					a.parseTransform(b[e.ConstValues.TRANSFORM], k.global, k.pivot);
					k.transform.copy(k.global);
					if (l =
						b[e.ConstValues.COLOR_TRANSFORM]) k.color = new d.ColorTransform, k.color.alphaOffset = Number(l[e.ConstValues.A_ALPHA_OFFSET]), k.color.redOffset = Number(l[e.ConstValues.A_RED_OFFSET]), k.color.greenOffset = Number(l[e.ConstValues.A_GREEN_OFFSET]), k.color.blueOffset = Number(l[e.ConstValues.A_BLUE_OFFSET]), k.color.alphaMultiplier = 0.01 * Number(l[e.ConstValues.A_ALPHA_MULTIPLIER]), k.color.redMultiplier = 0.01 * Number(l[e.ConstValues.A_RED_MULTIPLIER]), k.color.greenMultiplier = 0.01 * Number(l[e.ConstValues.A_GREEN_MULTIPLIER]),
						k.color.blueMultiplier = 0.01 * Number(l[e.ConstValues.A_BLUE_MULTIPLIER]);
					return k
				};
			a.parseTransform = function(a, b, c) {
				void 0 === c && (c = null);
				a && (b && (b.x = Number(a[e.ConstValues.A_X]), b.y = Number(a[e.ConstValues.A_Y]), b.skewX = Number(a[e.ConstValues.A_SKEW_X]) * e.ConstValues.ANGLE_TO_RADIAN, b.skewY = Number(a[e.ConstValues.A_SKEW_Y]) * e.ConstValues.ANGLE_TO_RADIAN, b.scaleX = Number(a[e.ConstValues.A_SCALE_X]), b.scaleY = Number(a[e.ConstValues.A_SCALE_Y])), c && (c.x = Number(a[e.ConstValues.A_PIVOT_X]), c.y = Number(a[e.ConstValues.A_PIVOT_Y])))
			};
			return a
		}();
		a.DataParser = l;
		l.prototype.__class__ = "dragonBones.objects.DataParser"
	})(a = c.objects || (c.objects = {}));
	(function(b) {
		var c = function(b) {
			function c() {
				b.call(this);
				this._dataDic = {};
				this._textureAtlasDic = {};
				this._textureAtlasLoadingDic = {}
			}
			__extends(c, b);
			c.prototype.getSkeletonData = function(a) {
				return this._dataDic[a]
			};
			c.prototype.addSkeletonData = function(a, b) {
				void 0 === b && (b = null);
				if (!a) throw Error();
				b = b || a.name;
				if (!b) throw Error("Unnamed data!");
				this._dataDic[b] = a
			};
			c.prototype.removeSkeletonData =
				function(a) {
					delete this._dataDic[a]
				};
			c.prototype.getTextureAtlas = function(a) {
				return this._textureAtlasDic[a]
			};
			c.prototype.addTextureAtlas = function(a, b) {
				void 0 === b && (b = null);
				if (!a) throw Error();
				b = b || a.name;
				if (!b) throw Error("Unnamed data!");
				this._textureAtlasDic[b] = a
			};
			c.prototype.removeTextureAtlas = function(a) {
				delete this._textureAtlasDic[a]
			};
			c.prototype.dispose = function(a) {
				void 0 === a && (a = !0);
				if (a) {
					for (var b in this._dataDic) this._dataDic[b].dispose();
					for (b in this._textureAtlasDic) this._textureAtlasDic[b].dispose()
				}
				this._currentTextureAtlasName =
					this._currentDataName = this._textureAtlasLoadingDic = this._textureAtlasDic = this._dataDic = null
			};
			c.prototype.buildArmature = function(b, c, d, e, f) {
				if (d) {
					var k = this._dataDic[d];
					if (k) var l = k.getArmatureData(b)
				} else
					for (d in this._dataDic)
						if (k = this._dataDic[d], l = k.getArmatureData(b)) break; if (!l) return null;
				this._currentDataName = d;
				this._currentTextureAtlasName = e || d;
				e = this._generateArmature();
				e.name = b;
				var g, h, p = l.getBoneDataList(),
					q;
				for (q in p) h = p[q], g = new n, g.name = h.name, g.fixedRotation = h.fixedRotation, g.scaleMode =
					h.scaleMode, g.origin.copy(h.transform), l.getBoneData(h.parent) ? e.addChild(g, h.parent) : e.addChild(g, null);
				if (c && c != b) {
					var m = k.getArmatureData(c);
					if (!m)
						for (d in this._dataDic)
							if (k = this._dataDic[d], m = k.getArmatureData(c)) break
				}
				m ? e.animation.setAnimationDataList(m.getAnimationDataList()) : e.animation.setAnimationDataList(l.getAnimationDataList());
				g = l.getSkinData(f);
				if (!g) throw Error();
				b = [];
				d = g.getSlotDataList();
				for (q in d)
					if (k = d[q], g = e.getBone(k.parent)) {
						f = k.getDisplayDataList();
						c = this._generateSlot();
						c.name = k.name;
						c._blendMode = k.blendMode;
						c._originZOrder = k.zOrder;
						c._dislayDataList = f;
						b.length = 0;
						for (k = f.length; k--;) switch (l = f[k], l.type) {
							case a.DisplayData.ARMATURE:
								(l = this.buildArmature(l.name, null, this._currentDataName, this._currentTextureAtlasName, null)) && (b[k] = l);
								break;
							default:
								b[k] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], l.name, l.pivot.x, l.pivot.y)
						}
						c.setDisplayList(b);
						c._changeDisplay(0);
						g.addChild(c)
					}
				e._slotsZOrderChanged = !0;
				e.advanceTime(0);
				return e
			};
			c.prototype.getTextureDisplay =
				function(a, b, c, d) {
					if (b) var e = this._textureAtlasDic[b];
					if (!e && !b)
						for (b in this._textureAtlasDic) {
							e = this._textureAtlasDic[b];
							if (e.getRegion(a)) break;
							e = null
						}
					if (e) {
						if (isNaN(c) || isNaN(d))
							if (b = this._dataDic[b])
								if (b = b.getSubTexturePivot(a)) c = b.x, d = b.y;
						return this._generateDisplay(e, a, c, d)
					}
					return null
				};
			c.prototype._generateArmature = function() {
				return null
			};
			c.prototype._generateSlot = function() {
				return null
			};
			c.prototype._generateDisplay = function(a, b, c, d) {
				return null
			};
			return c
		}(f.EventDispatcher);
		b.BaseFactory =
			c;
		c.prototype.__class__ = "dragonBones.factorys.BaseFactory"
	})(c.factorys || (c.factorys = {}));
	var e;
	(function(c) {
		var e = function() {
			function a() {}
			a.ANGLE_TO_RADIAN = Math.PI / 180;
			a.DRAGON_BONES = "dragonBones";
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
			a.A_OFFSET = "offset";
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
			a.A_GREEN_OFFSET = "gO";
			a.A_BLUE_OFFSET = "bO";
			a.A_ALPHA_MULTIPLIER = "aM";
			a.A_RED_MULTIPLIER = "rM";
			a.A_GREEN_MULTIPLIER = "gM";
			a.A_BLUE_MULTIPLIER = "bM";
			return a
		}();
		c.ConstValues = e;
		e.prototype.__class__ = "dragonBones.utils.ConstValues";
		var f = function() {
			function a() {}
			a.transformPointWithParent = function(b, c) {
				var d = a._helpMatrix;
				a.transformToMatrix(c,
					d);
				d.invert();
				var e = b.x,
					f = b.y;
				b.x = d.a * e + d.c * f + d.tx;
				b.y = d.d * f + d.b * e + d.ty;
				b.skewX = a.formatRadian(b.skewX - c.skewX);
				b.skewY = a.formatRadian(b.skewY - c.skewY)
			};
			a.transformToMatrix = function(a, b) {
				b.a = a.scaleX * Math.cos(a.skewY);
				b.b = a.scaleX * Math.sin(a.skewY);
				b.c = -a.scaleY * Math.sin(a.skewX);
				b.d = a.scaleY * Math.cos(a.skewX);
				b.tx = a.x;
				b.ty = a.y
			};
			a.formatRadian = function(b) {
				b %= a.DOUBLE_PI;
				b > Math.PI && (b -= a.DOUBLE_PI);
				b < -Math.PI && (b += a.DOUBLE_PI);
				return b
			};
			a.DOUBLE_PI = 2 * Math.PI;
			a._helpMatrix = new d.Matrix;
			return a
		}();
		c.TransformUtil = f;
		f.prototype.__class__ = "dragonBones.utils.TransformUtil";
		e = function() {
			function c() {}
			c.transformArmatureData = function(a) {
				for (var b = a.getBoneDataList(), c = b.length, d, e; c--;)
					if (d = b[c], d.parent && (e = a.getBoneData(d.parent))) d.transform.copy(d.global), f.transformPointWithParent(d.transform, e.global)
			};
			c.transformArmatureDataAnimations = function(a) {
				for (var b = a.getAnimationDataList(), d = b.length; d--;) c.transformAnimationData(b[d], a)
			};
			c.transformAnimationData = function(a, b) {
				for (var d = b.getSkinData(null),
						e = b.getBoneDataList(), d = d.getSlotDataList(), l = e.length, g, h, q, m, n, C, J, w, u, F; l--;)
					if (g = e[l], h = a.getTimeline(g.name)) {
						q = null;
						for (var N in d)
							if (q = d[N], q.parent == g.name) break;
						m = g.parent ? a.getTimeline(g.parent) : null;
						n = h.getFrameList();
						w = J = C = null;
						F = n.length;
						for (var G = 0; G < F; G++) {
							u = n[G];
							m ? (c._helpTransform1.copy(u.global), c.getTimelineTransform(m, u.position, c._helpTransform2), f.transformPointWithParent(c._helpTransform1, c._helpTransform2), u.transform.copy(c._helpTransform1)) : u.transform.copy(u.global);
							u.transform.x -=
								g.transform.x;
							u.transform.y -= g.transform.y;
							u.transform.skewX -= g.transform.skewX;
							u.transform.skewY -= g.transform.skewY;
							u.transform.scaleX -= g.transform.scaleX;
							u.transform.scaleY -= g.transform.scaleY;
							!h.transformed && q && (u.zOrder -= q.zOrder);
							C || (C = h.originTransform, C.copy(u.transform), C.skewX = f.formatRadian(C.skewX), C.skewY = f.formatRadian(C.skewY), J = h.originPivot, J.x = u.pivot.x, J.y = u.pivot.y);
							u.transform.x -= C.x;
							u.transform.y -= C.y;
							u.transform.skewX = f.formatRadian(u.transform.skewX - C.skewX);
							u.transform.skewY =
								f.formatRadian(u.transform.skewY - C.skewY);
							u.transform.scaleX -= C.scaleX;
							u.transform.scaleY -= C.scaleY;
							h.transformed || (u.pivot.x -= J.x, u.pivot.y -= J.y);
							if (w) {
								var I = u.transform.skewX - w.transform.skewX;
								w.tweenRotate ? 0 < w.tweenRotate ? (0 > I && (u.transform.skewX += 2 * Math.PI, u.transform.skewY += 2 * Math.PI), 1 < w.tweenRotate && (u.transform.skewX += 2 * Math.PI * (w.tweenRotate - 1), u.transform.skewY += 2 * Math.PI * (w.tweenRotate - 1))) : (0 < I && (u.transform.skewX -= 2 * Math.PI, u.transform.skewY -= 2 * Math.PI), 1 > w.tweenRotate && (u.transform.skewX +=
									2 * Math.PI * (w.tweenRotate + 1), u.transform.skewY += 2 * Math.PI * (w.tweenRotate + 1))) : (u.transform.skewX = w.transform.skewX + f.formatRadian(u.transform.skewX - w.transform.skewX), u.transform.skewY = w.transform.skewY + f.formatRadian(u.transform.skewY - w.transform.skewY))
							}
							w = u
						}
						h.transformed = !0
					}
			};
			c.getTimelineTransform = function(a, c, d) {
				for (var e = a.getFrameList(), l = e.length, g; l--;)
					if (a = e[l], a.position <= c && a.position + a.duration > c) {
						g = a.tweenEasing;
						l == e.length - 1 || isNaN(g) || c == a.position ? d.copy(a.global) : (c = (c - a.position) /
							a.duration, g && (c = b.TimelineState.getEaseValue(c, g)), e = e[l + 1], d.x = a.global.x + (e.global.x - a.global.x) * c, d.y = a.global.y + (e.global.y - a.global.y) * c, d.skewX = f.formatRadian(a.global.skewX + (e.global.skewX - a.global.skewX) * c), d.skewY = f.formatRadian(a.global.skewY + (e.global.skewY - a.global.skewY) * c), d.scaleX = a.global.scaleX + (e.global.scaleX - a.global.scaleX) * c, d.scaleY = a.global.scaleY + (e.global.scaleY - a.global.scaleY) * c);
						break
					}
			};
			c.addHideTimeline = function(b, c) {
				for (var d = c.getBoneDataList(), e = d.length, f; e--;) f =
					d[e], f = f.name, b.getTimeline(f) || b.addTimeline(a.TransformTimeline.HIDE_TIMELINE, f)
			};
			c._helpTransform1 = new a.DBTransform;
			c._helpTransform2 = new a.DBTransform;
			return c
		}();
		c.DBDataUtil = e;
		e.prototype.__class__ = "dragonBones.utils.DBDataUtil"
	})(e = c.utils || (c.utils = {}));
	var l = function() {
		function b() {
			this.global = new a.DBTransform;
			this.origin = new a.DBTransform;
			this.offset = new a.DBTransform;
			this.tween = new a.DBTransform;
			this.tween.scaleX = this.tween.scaleY = 0;
			this._globalTransformMatrix = new d.Matrix;
			this._visible = !0;
			this._isDisplayOnStage = this._isColorChanged = !1;
			this._scaleType = 0;
			this.fixedRotation = !1
		}
		b.prototype.getVisible = function() {
			return this._visible
		};
		b.prototype.setVisible = function(a) {
			this._visible = a
		};
		b.prototype._setParent = function(a) {
			this.parent = a
		};
		b.prototype._setArmature = function(a) {
			this.armature && this.armature._removeDBObject(this);
			(this.armature = a) && this.armature._addDBObject(this)
		};
		b.prototype.dispose = function() {
			this._globalTransformMatrix = this.tween = this.offset = this.origin = this.global = this.armature =
				this.parent = null
		};
		b.prototype._update = function() {
			this.global.scaleX = (this.origin.scaleX + this.tween.scaleX) * this.offset.scaleX;
			this.global.scaleY = (this.origin.scaleY + this.tween.scaleY) * this.offset.scaleY;
			if (this.parent) {
				var a = this.origin.x + this.offset.x + this.tween.x,
					b = this.origin.y + this.offset.y + this.tween.y,
					c = this.parent._globalTransformMatrix;
				this._globalTransformMatrix.tx = this.global.x = c.a * a + c.c * b + c.tx;
				this._globalTransformMatrix.ty = this.global.y = c.d * b + c.b * a + c.ty;
				this.fixedRotation ? (this.global.skewX =
					this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY) : (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY);
				this.parent.scaleMode >= this._scaleType && (this.global.scaleX *= this.parent.global.scaleX, this.global.scaleY *= this.parent.global.scaleY)
			} else this._globalTransformMatrix.tx = this.global.x =
				this.origin.x + this.offset.x + this.tween.x, this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y, this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
			this._globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
			this._globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
			this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
			this._globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX)
		};
		return b
	}();
	c.DBObject = l;
	l.prototype.__class__ = "dragonBones.DBObject";
	var q = function(a) {
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
		__extends(b, a);
		b.prototype.getZOrder = function() {
			return this._originZOrder +
				this._tweenZorder + this._offsetZOrder
		};
		b.prototype.setZOrder = function(a) {
			this.getZOrder() != a && (this._offsetZOrder = a - this._originZOrder - this._tweenZorder, this.armature && (this.armature._slotsZOrderChanged = !0))
		};
		b.prototype.getDisplay = function() {
			var a = this._displayList[this._displayIndex];
			return a instanceof g ? a.getDisplay() : a
		};
		b.prototype.setDisplay = function(a) {
			this._displayList[this._displayIndex] = a;
			this._setDisplay(a)
		};
		b.prototype.getBlendMode = function() {
			return this._blendMode
		};
		b.prototype.setBlendMode =
			function(a) {
				this._blendMode != a && (this._blendMode = a, this._displayBridge.getDisplay() && this._displayBridge.updateBlendMode(this._blendMode))
			};
		b.prototype.getChildArmature = function() {
			var a = this._displayList[this._displayIndex];
			return a instanceof g ? a : null
		};
		b.prototype.setChildArmature = function(a) {
			(this._displayList[this._displayIndex] = a) && this._setDisplay(a.getDisplay())
		};
		b.prototype.getDisplayList = function() {
			return this._displayList
		};
		b.prototype.setDisplayList = function(a) {
			if (!a) throw Error();
			for (var b =
					this._displayList.length = a.length; b--;) this._displayList[b] = a[b];
			0 <= this._displayIndex && (a = this._displayIndex, this._displayIndex = -1, this._changeDisplay(a))
		};
		b.prototype._setDisplay = function(a) {
			this._displayBridge.getDisplay() ? this._displayBridge.setDisplay(a) : (this._displayBridge.setDisplay(a), this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0));
			this.updateChildArmatureAnimation();
			a && this._displayBridge.updateBlendMode(this._blendMode);
			!this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1
		};
		b.prototype._changeDisplay = function(a) {
			if (0 > a) this._isHideDisplay || (this._isHideDisplay = !0, this._displayBridge.removeDisplay(), this.updateChildArmatureAnimation());
			else {
				if (this._isHideDisplay) {
					this._isHideDisplay = !1;
					var b = !0;
					this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0)
				}
				var c = this._displayList.length;
				a >= c && 0 < c && (a = c - 1);
				this._displayIndex !=
					a ? (this._displayIndex = a, a = this._displayList[this._displayIndex], a instanceof g ? this._setDisplay(a.getDisplay()) : this._setDisplay(a), this._dislayDataList && this._displayIndex <= this._dislayDataList.length && this.origin.copy(this._dislayDataList[this._displayIndex].transform)) : b && this.updateChildArmatureAnimation()
			}!this._isHideDisplay && this._displayBridge.getDisplay() ? this._isDisplayOnStage = !0 : this._isDisplayOnStage = !1
		};
		b.prototype.setVisible = function(a) {
			a != this._visible && (this._visible = a, this._updateVisible(this._visible))
		};
		b.prototype._setArmature = function(b) {
			a.prototype._setArmature.call(this, b);
			this.armature ? (this.armature._slotsZOrderChanged = !0, this._displayBridge.addDisplay(this.armature.getDisplay(), -1)) : this._displayBridge.removeDisplay()
		};
		b.prototype.dispose = function() {
			this._displayBridge && (a.prototype.dispose.call(this), this._displayBridge.dispose(), this._displayList.length = 0, this._dislayDataList = this._displayList = this._displayBridge = null)
		};
		b.prototype._update = function() {
			a.prototype._update.call(this);
			if (this._isDisplayOnStage) {
				var b =
					this.parent._tweenPivot.x,
					c = this.parent._tweenPivot.y;
				if (b || c) {
					var d = this.parent._globalTransformMatrix;
					this._globalTransformMatrix.tx += d.a * b + d.c * c;
					this._globalTransformMatrix.ty += d.b * b + d.d * c
				}
				this._displayBridge.updateTransform(this._globalTransformMatrix, this.global)
			}
		};
		b.prototype._updateVisible = function(a) {
			this._displayBridge.setVisible(this.parent.getVisible() && this._visible && a)
		};
		b.prototype.updateChildArmatureAnimation = function() {
			var a = this.getChildArmature();
			if (a)
				if (this._isHideDisplay) a.animation.stop(),
					a.animation._lastAnimationState = null;
				else {
					var b = this.armature ? this.armature.animation.getLastAnimationName() : null;
					b && a.animation.hasAnimation(b) ? a.animation.gotoAndPlay(b) : a.animation.play()
				}
		};
		return b
	}(l);
	c.Slot = q;
	q.prototype.__class__ = "dragonBones.Slot";
	var n = function(a) {
		function b() {
			a.call(this);
			this._children = [];
			this._scaleType = 2;
			this._tweenPivot = new d.Point;
			this.scaleMode = 1
		}
		__extends(b, a);
		b.prototype.setVisible = function(a) {
			if (this._visible != a)
				for (this._visible = a, a = this._children.length; a--;) {
					var b =
						this._children[a];
					b instanceof q && b._updateVisible(this._visible)
				}
		};
		b.prototype._setArmature = function(b) {
			a.prototype._setArmature.call(this, b);
			for (b = this._children.length; b--;) this._children[b]._setArmature(this.armature)
		};
		b.prototype.dispose = function() {
			if (this._children) {
				a.prototype.dispose.call(this);
				for (var b = this._children.length; b--;) this._children[b].dispose();
				this._children.length = 0;
				this.slot = this._tweenPivot = this._children = null
			}
		};
		b.prototype.contains = function(a) {
			if (!a) throw Error();
			if (a ==
				this) return !1;
			for (; a != this && null != a;) a = a.parent;
			return a == this
		};
		b.prototype.addChild = function(a) {
			if (!a) throw Error();
			if (a == this || a instanceof b && a.contains(this)) throw Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
			a.parent && a.parent.removeChild(a);
			this._children[this._children.length] = a;
			a._setParent(this);
			a._setArmature(this.armature);
			!this.slot && a instanceof q && (this.slot = a)
		};
		b.prototype.removeChild = function(a) {
			if (!a) throw Error();
			var b =
				this._children.indexOf(a);
			if (0 <= b) this._children.splice(b, 1), a._setParent(null), a._setArmature(null), a == this.slot && (this.slot = null);
			else throw Error();
		};
		b.prototype.getSlots = function() {
			for (var a = [], b = this._children.length; b--;) this._children[b] instanceof q && a.unshift(this._children[b]);
			return a
		};
		b.prototype._arriveAtFrame = function(a, c, d, e) {
			if (a) {
				if (c = d.getMixingTransform(this.name), !d.displayControl || 2 != c && -1 != c || this.displayController && this.displayController != d.name || !this.slot || (c = a.displayIndex,
						0 <= c && !isNaN(a.zOrder) && a.zOrder != this.slot._tweenZorder && (this.slot._tweenZorder = a.zOrder, this.armature._slotsZOrderChanged = !0), this.slot._changeDisplay(c), this.slot._updateVisible(a.visible)), a.event && this.armature.hasEventListener(f.FrameEvent.BONE_FRAME_EVENT) && (c = new f.FrameEvent(f.FrameEvent.BONE_FRAME_EVENT), c.bone = this, c.animationState = d, c.frameLabel = a.event, this.armature._eventList.push(c)), a.sound && b._soundManager.hasEventListener(f.SoundEvent.SOUND) && (c = new f.SoundEvent(f.SoundEvent.SOUND),
						c.armature = this.armature, c.animationState = d, c.sound = a.sound, b._soundManager.dispatchEvent(c)), a.action)
					for (var l in this._children) this._children[l] instanceof q && (d = this._children[l].getChildArmature()) && d.animation.gotoAndPlay(a.action)
			} else this.slot && this.slot._changeDisplay(-1)
		};
		b.prototype._updateColor = function(a, b, c, d, e, f, l, g, h) {
			(h || this._isColorChanged) && this.slot._displayBridge.updateColor(a, b, c, d, e, f, l, g);
			this._isColorChanged = h
		};
		b._soundManager = f.SoundEventManager.getInstance();
		return b
	}(l);
	c.Bone = n;
	n.prototype.__class__ = "dragonBones.Bone";
	var g = function(a) {
		function c(d) {
			a.call(this);
			this.animation = new b.Animation(this);
			this._display = d;
			this._slotsZOrderChanged = !1;
			this._slotList = [];
			this._boneList = [];
			this._eventList = []
		}
		__extends(c, a);
		c.prototype.getDisplay = function() {
			return this._display
		};
		c.prototype.dispose = function() {
			if (this.animation) {
				this.animation.dispose();
				for (var a = this._slotList.length; a--;) this._slotList[a].dispose();
				for (a = this._boneList.length; a--;) this._boneList[a].dispose();
				this._slotList.length = 0;
				this._boneList.length = 0;
				this._eventList.length = 0;
				this.animation = this._display = this._eventList = this._boneList = this._slotList = null
			}
		};
		c.prototype.advanceTime = function(a) {
			this.animation.advanceTime(a);
			a *= this.animation.timeScale;
			for (var b = this._boneList.length; b--;) this._boneList[b]._update();
			for (var b = this._slotList.length, c; b--;) c = this._slotList[b], c._update(), c._isDisplayOnStage && (c = c.getChildArmature()) && c.advanceTime(a);
			this._slotsZOrderChanged && (this.updateSlotsZOrder(),
				this.hasEventListener(f.ArmatureEvent.Z_ORDER_UPDATED) && this.dispatchEvent(new f.ArmatureEvent(f.ArmatureEvent.Z_ORDER_UPDATED)));
			if (this._eventList.length) {
				a = this._eventList.length;
				for (b = 0; b < a; b++) this.dispatchEvent(this._eventList[b]);
				this._eventList.length = 0
			}
		};
		c.prototype.getSlots = function(a) {
			void 0 === a && (a = !0);
			return a ? this._slotList.concat() : this._slotList
		};
		c.prototype.getBones = function(a) {
			void 0 === a && (a = !0);
			return a ? this._boneList.concat() : this._boneList
		};
		c.prototype.getSlot = function(a) {
			for (var b =
					this._slotList.length; b--;)
				if (this._slotList[b].name == a) return this._slotList[b];
			return null
		};
		c.prototype.getSlotByDisplay = function(a) {
			if (a)
				for (var b = this._slotList.length; b--;)
					if (this._slotList[b].getDisplay() == a) return this._slotList[b];
			return null
		};
		c.prototype.removeSlot = function(a) {
			if (!a) throw Error();
			if (0 <= this._slotList.indexOf(a)) a.parent.removeChild(a);
			else throw Error();
		};
		c.prototype.removeSlotByName = function(a) {
			a && (a = this.getSlot(a)) && this.removeSlot(a)
		};
		c.prototype.getBone = function(a) {
			for (var b =
					this._boneList.length; b--;)
				if (this._boneList[b].name == a) return this._boneList[b];
			return null
		};
		c.prototype.getBoneByDisplay = function(a) {
			return (a = this.getSlotByDisplay(a)) ? a.parent : null
		};
		c.prototype.removeBone = function(a) {
			if (!a) throw Error();
			if (0 <= this._boneList.indexOf(a)) a.parent ? a.parent.removeChild(a) : a._setArmature(null);
			else throw Error();
		};
		c.prototype.removeBoneByName = function(a) {
			a && (a = this.getBone(a)) && this.removeBone(a)
		};
		c.prototype.addChild = function(a, b) {
			if (!a) throw Error();
			if (b) {
				var c = this.getBone(b);
				if (c) c.addChild(a);
				else throw Error();
			} else a.parent && a.parent.removeChild(a), a._setArmature(this)
		};
		c.prototype.updateSlotsZOrder = function() {
			this._slotList.sort(this.sortSlot);
			for (var a = this._slotList.length, b; a--;) b = this._slotList[a], b._isDisplayOnStage && b._displayBridge.addDisplay(this._display, -1);
			this._slotsZOrderChanged = !1
		};
		c.prototype._addDBObject = function(a) {
			a instanceof q ? 0 > this._slotList.indexOf(a) && (this._slotList[this._slotList.length] = a) : a instanceof n && 0 > this._boneList.indexOf(a) && (this._boneList[this._boneList.length] =
				a, this._sortBoneList())
		};
		c.prototype._removeDBObject = function(a) {
			a instanceof q ? (a = this._slotList.indexOf(a), 0 <= a && this._slotList.splice(a, 1)) : a instanceof n && (a = this._boneList.indexOf(a), 0 <= a && this._boneList.splice(a, 1))
		};
		c.prototype._sortBoneList = function() {
			var a = this._boneList.length;
			if (0 != a) {
				for (var b = [], c, d, e; a--;) {
					c = 0;
					for (e = d = this._boneList[a]; e;) c++, e = e.parent;
					b[a] = {
						level: c,
						bone: d
					}
				}
				b.sort(this.sortBone);
				for (a = b.length; a--;) this._boneList[a] = b[a].bone
			}
		};
		c.prototype._arriveAtFrame = function(a,
			b, d, e) {
			a.event && this.hasEventListener(f.FrameEvent.ANIMATION_FRAME_EVENT) && (b = new f.FrameEvent(f.FrameEvent.ANIMATION_FRAME_EVENT), b.animationState = d, b.frameLabel = a.event, this._eventList.push(b));
			a.sound && c._soundManager.hasEventListener(f.SoundEvent.SOUND) && (b = new f.SoundEvent(f.SoundEvent.SOUND), b.armature = this, b.animationState = d, b.sound = a.sound, c._soundManager.dispatchEvent(b));
			a.action && d.isPlaying && this.animation.gotoAndPlay(a.action)
		};
		c.prototype.sortSlot = function(a, b) {
			return a.getZOrder() <
				b.getZOrder() ? 1 : -1
		};
		c.prototype.sortBone = function(a, b) {
			return a.level < b.level ? 1 : -1
		};
		c._soundManager = f.SoundEventManager.getInstance();
		return c
	}(f.EventDispatcher);
	c.Armature = g;
	g.prototype.__class__ = "dragonBones.Armature"
})(dragonBones || (dragonBones = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d;
	(function(c) {
		var b = function() {
			function a() {}
			a.prototype.getVisible = function() {
				return this._display ? this._display.visible : !1
			};
			a.prototype.setVisible = function(a) {
				this._display && (this._display.visible = a)
			};
			a.prototype.getDisplay = function() {
				return this._display
			};
			a.prototype.setDisplay = function(a) {
				if (this._display != a) {
					if (this._display) {
						var b = this._display.parent;
						if (b) var c = b.getChildIndex(this._display);
						this.removeDisplay()
					}
					this._display = a;
					this.addDisplay(b, c)
				}
			};
			a.prototype.dispose = function() {
				this._display =
					null
			};
			a.prototype.updateTransform = function(a, b) {
				this._display.__hack_local_matrix = a;
				this._display._setSizeDirty()
			};
			a.prototype.updateColor = function(a, b, c, d, f, h, m, k) {
				this._display && (this._display._alpha = f)
			};
			a.prototype.updateBlendMode = function(a) {
				this._display && a && (this._display.blendMode = a)
			};
			a.prototype.addDisplay = function(a, b) {
				a && this._display && (this._display._parent && this._display._parent.removeChild(this._display), 0 > b ? a.addChild(this._display) : a.addChildAt(this._display, Math.min(b, a.numChildren)))
			};
			a.prototype.removeDisplay = function() {
				this._display && this._display._parent && this._display._parent.removeChild(this._display)
			};
			a.RADIAN_TO_ANGLE = 180 / Math.PI;
			return a
		}();
		c.DragonBonesEgretBridge = b;
		b.prototype.__class__ = "dragonBones.display.DragonBonesEgretBridge"
	})(d = c.display || (c.display = {}));
	(function(d) {
		var b = function() {
			function a(a, b, d) {
				void 0 === d && (d = 1);
				this.texture = a;
				this.textureAtlasRawData = b;
				this._textureData = {};
				this.scale = d;
				this.name = b[c.utils.ConstValues.A_NAME];
				this.parseData(b);
				this.spriteSheet =
					new egret.SpriteSheet(a)
			}
			a.prototype.getTexture = function(a) {
				var b = this.spriteSheet.getTexture(a);
				b || (b = this._textureData[a], b = this.spriteSheet.createTexture(a, b.x, b.y, b.width, b.height));
				return b
			};
			a.prototype.dispose = function() {
				this.texture = null
			};
			a.prototype.getRegion = function(a) {
				throw Error("error");
			};
			a.prototype.parseData = function(a) {
				for (var b = a.SubTexture.length, c = 0; c < b; c++) {
					var d = a.SubTexture[c];
					this._textureData[d.name] = d
				}
			};
			return a
		}();
		d.EgretTextureAtlas = b;
		b.prototype.__class__ = "dragonBones.textures.EgretTextureAtlas"
	})(c.textures ||
		(c.textures = {}));
	(function(f) {
		var b = function(a) {
			function b() {
				a.call(this)
			}
			__extends(b, a);
			b.prototype._generateArmature = function() {
				return new c.Armature(new egret.DisplayObjectContainer)
			};
			b.prototype._generateSlot = function() {
				return new c.Slot(new d.DragonBonesEgretBridge)
			};
			b.prototype._generateDisplay = function(a, b, c, d) {
				var e = new egret.Bitmap;
				e.texture = a.getTexture(b);
				e.anchorOffsetX = c;
				e.anchorOffsetY = d;
				return e
			};
			return b
		}(f.BaseFactory);
		f.EgretFactory = b;
		b.prototype.__class__ = "dragonBones.factorys.EgretFactory"
	})(c.factorys ||
		(c.factorys = {}))
})(dragonBones || (dragonBones = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			void 0 === a && (a = 60);
			d.call(this);
			this.frameRate = a;
			this._time = 0;
			this._isActivate = !0;
			60 == a && (b.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, b.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
				window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			b.requestAnimationFrame || (b.requestAnimationFrame = function(b) {
				return window.setTimeout(b, 1E3 / a)
			});
			b.cancelAnimationFrame || (b.cancelAnimationFrame = function(a) {
				return window.clearTimeout(a)
			});
			b.instance = this;
			this.registerListener()
		}
		__extends(b, d);
		b.prototype.enterFrame = function() {
			var a = b.instance,
				d = b._thisObject,
				f = b._callback,
				q = c.getTimer(),
				n = q -
				a._time;
			a._requestAnimationId = b.requestAnimationFrame.call(window, b.prototype.enterFrame);
			f.call(d, n);
			a._time = q
		};
		b.prototype.executeMainLoop = function(a, c) {
			b._callback = a;
			b._thisObject = c;
			this.enterFrame()
		};
		b.prototype.reset = function() {
			var a = b.instance;
			a._requestAnimationId && (a._time = c.getTimer(), b.cancelAnimationFrame.call(window, a._requestAnimationId), a.enterFrame())
		};
		b.prototype.registerListener = function() {
			var a = this,
				d = function() {
					a._isActivate && (a._isActivate = !1, c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.DEACTIVATE)))
				},
				f = function() {
					a._isActivate || (a._isActivate = !0, b.instance.reset(), c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.ACTIVATE)))
				},
				q = function() {
					document[n] ? d() : f()
				};
			window.addEventListener("focus", f, !1);
			window.addEventListener("blur", d, !1);
			var n, g;
			"undefined" !== typeof document.hidden ? (n = "hidden", g = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (n = "mozHidden", g = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (n = "msHidden", g = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ?
				(n = "webkitHidden", g = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (n = "oHidden", g = "ovisibilitychange");
			"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", f, !1), window.addEventListener("pagehide", d, !1));
			n && g && document.addEventListener(g, q, !1)
		};
		return b
	}(c.DeviceContext);
	c.HTML5DeviceContext = d;
	d.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(c) {
	c.getItem = function(c) {
		return window.localStorage.getItem(c)
	};
	c.setItem = function(c, f) {
		try {
			return window.localStorage.setItem(c, f), !0
		} catch (b) {
			return console.log("egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key=" + c + "&value=" + f), !1
		}
	};
	c.removeItem = function(c) {
		window.localStorage.removeItem(c)
	};
	c.clear = function() {
		window.localStorage.clear()
	};
	c.init = function() {
		for (var d in c) egret.localStorage[d] = c[d]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
			d.call(this);
			this.globalAlpha = 1;
			this.canvas = a || this.createCanvas();
			this.canvasContext = this.canvas.getContext("2d");
			this._cacheCanvas = document.createElement("canvas");
			this._cacheCanvas.width = this.canvas.width;
			this._cacheCanvas.height = this.canvas.height;
			this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
			this._cacheCanvasContext.imageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.webkitImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.mozImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.msImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
			this.onResize();
			var b = this.canvasContext.setTransform,
				l = this;
			this._cacheCanvasContext.setTransform = function(a, c, d, f, m, k) {
				l._matrixA = a;
				l._matrixB = c;
				l._matrixC = d;
				l._matrixD = f;
				l._matrixTx = m;
				l._matrixTy = k;
				b.call(l._cacheCanvasContext, a, c, d, f, m, k)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy =
				this._transformTx = this._matrixTy = this._matrixTx = 0;
			this.initBlendMode()
		}
		__extends(b, d);
		b.prototype.createCanvas = function() {
			var a = c.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var b = document.getElementById(c.StageDelegate.canvas_div_name),
					a = c.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				b.appendChild(a)
			}
			c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
			return a
		};
		b.prototype.onResize = function() {
			if (this.canvas) {
				var a = document.getElementById(c.StageDelegate.canvas_div_name);
				this.canvas.width = c.MainContext.instance.stage.stageWidth;
				this.canvas.height = c.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this._cacheCanvas.width = this.canvas.width;
				this._cacheCanvas.height = this.canvas.height
			}
		};
		b.prototype.clearScreen = function() {
			for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
				var f = a[b];
				this.clearRect(f.x, f.y, f.width, f.height)
			}
			a = c.MainContext.instance.stage;
			this._cacheCanvasContext.clearRect(0,
				0, a.stageWidth, a.stageHeight);
			this.renderCost = 0
		};
		b.prototype.clearRect = function(a, b, c, d) {
			this.canvasContext.clearRect(a, b, c, d)
		};
		b.prototype.drawImage = function(a, b, l, q, n, g, h, m, k, p) {
			void 0 === p && (p = void 0);
			var r = c.MainContext.instance.rendererContext.texture_scale_factor;
			b /= r;
			l /= r;
			q /= r;
			n /= r;
			r = a._bitmapData;
			g += this._transformTx;
			h += this._transformTy;
			var s = c.getTimer();
			void 0 === p ? this._cacheCanvasContext.drawImage(r, b, l, q, n, g, h, m, k) : this.drawRepeatImage(a, b, l, q, n, g, h, m, k, p);
			d.prototype.drawImage.call(this,
				a, b, l, q, n, g, h, m, k, p);
			this.renderCost += c.getTimer() - s
		};
		b.prototype.drawRepeatImage = function(a, b, c, d, f, g, h, m, k, p) {
			if (void 0 === a.pattern) {
				var r = a._bitmapData,
					s = r;
				if (r.width != d || r.height != f) s = document.createElement("canvas"), s.width = d, s.height = f, s.getContext("2d").drawImage(r, b, c, d, f, 0, 0, d, f);
				b = this._cacheCanvasContext.createPattern(s, p);
				a.pattern = b
			}
			this._cacheCanvasContext.fillStyle = a.pattern;
			this._cacheCanvasContext.translate(g, h);
			this._cacheCanvasContext.fillRect(0, 0, m, k);
			this._cacheCanvasContext.translate(-g, -h)
		};
		b.prototype.setTransform = function(a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		b.prototype.setAlpha = function(a, b) {
			a != this.globalAlpha &&
				(this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
			b ? (this.blendValue = this.blendModes[b], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != c.BlendMode.NORMAL && (this.blendValue = this.blendModes[c.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
		};
		b.prototype.initBlendMode = function() {
			this.blendModes = {};
			this.blendModes[c.BlendMode.NORMAL] = "source-over";
			this.blendModes[c.BlendMode.ADD] = "lighter"
		};
		b.prototype.setupFont = function(a,
			b) {
			void 0 === b && (b = null);
			b = b || {};
			var c = null == b.size ? a._size : b.size,
				d = null == b.fontFamily ? a._fontFamily : b.fontFamily,
				f = this._cacheCanvasContext,
				g = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
				g = g + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
			f.font = g + (c + "px " + d);
			f.textAlign = "left";
			f.textBaseline = "middle"
		};
		b.prototype.measureText = function(a) {
			return this._cacheCanvasContext.measureText(a).width
		};
		b.prototype.drawText = function(a, b, l, q, n, g) {
			void 0 === g && (g = null);
			this.setupFont(a, g);
			g = g || {};
			var h;
			h = null != g.textColor ? c.toColorString(g.textColor) : a._textColorString;
			var m;
			m = null != g.strokeColor ? c.toColorString(g.strokeColor) : a._strokeColorString;
			var k;
			k = null != g.stroke ? g.stroke : a._stroke;
			var p = this._cacheCanvasContext;
			p.fillStyle = h;
			p.strokeStyle = m;
			k && (p.lineWidth = 2 * k, p.strokeText(b, l + this._transformTx, q + this._transformTy, n || 65535));
			p.fillText(b, l + this._transformTx, q + this._transformTy, n || 65535);
			d.prototype.drawText.call(this, a, b, l, q, n, g)
		};
		b.prototype.strokeRect = function(a, b, c, d, f) {
			this._cacheCanvasContext.strokeStyle =
				f;
			this._cacheCanvasContext.strokeRect(a, b, c, d)
		};
		b.prototype.pushMask = function(a) {
			this._cacheCanvasContext.save();
			this._cacheCanvasContext.beginPath();
			this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
			this._cacheCanvasContext.clip();
			this._cacheCanvasContext.closePath()
		};
		b.prototype.popMask = function() {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		b.prototype.onRenderStart = function() {
			this._cacheCanvasContext.save()
		};
		b.prototype.onRenderFinish =
			function() {
				this._cacheCanvasContext.restore();
				this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
				for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
					var f = a[b];
					this.canvasContext.drawImage(this._cacheCanvas, f.x, f.y, f.width, f.height, f.x, f.y, f.width, f.height)
				}
			};
		return b
	}(c.RendererContext);
	c.HTML5CanvasRenderer = d;
	d.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(c) {
	c.beginFill = function(c, b) {
		void 0 === b && (b = 1);
		var a = "rgba(" + (c >> 16) + "," + ((c & 65280) >> 8) + "," + (c & 255) + "," + b + ")";
		this.fillStyleColor = a;
		this.commandQueue.push(new d(this._setStyle, this, [a]))
	};
	c.drawRect = function(c, b, a, e) {
		this.commandQueue.push(new d(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
			this.canvasContext.closePath()
		}, this, [c, b, a, e]));
		this._fill()
	};
	c.drawCircle = function(c, b, a) {
		this.commandQueue.push(new d(function(a,
			b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [c, b, a]));
		this._fill()
	};
	c.drawRoundRect = function(c, b, a, e, l, q) {
		this.commandQueue.push(new d(function(a, b, c, d, e, f) {
			var l = this.renderContext;
			a = l._transformTx + a;
			b = l._transformTy + b;
			e /= 2;
			f = f ? f / 2 : e;
			c = a + c;
			d = b + d;
			l = d - f;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(c, l);
			this.canvasContext.quadraticCurveTo(c, d, c - e, d);
			this.canvasContext.lineTo(a +
				e, d);
			this.canvasContext.quadraticCurveTo(a, d, a, d - f);
			this.canvasContext.lineTo(a, b + f);
			this.canvasContext.quadraticCurveTo(a, b, a + e, b);
			this.canvasContext.lineTo(c - e, b);
			this.canvasContext.quadraticCurveTo(c, b, c, b + f);
			this.canvasContext.lineTo(c, l);
			this.canvasContext.closePath()
		}, this, [c, b, a, e, l, q]));
		this._fill()
	};
	c.drawEllipse = function(c, b, a, e) {
		this.commandQueue.push(new d(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.save();
			a = e._transformTx + a;
			b = e._transformTy + b;
			var e = c > d ? c : d,
				f = c / e;
			d /=
				e;
			this.canvasContext.scale(f, d);
			this.canvasContext.beginPath();
			this.canvasContext.moveTo((a + c) / f, b / d);
			this.canvasContext.arc(a / f, b / d, e, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore();
			this.canvasContext.stroke()
		}, this, [c, b, a, e]));
		this._fill()
	};
	c.lineStyle = function(c, b, a, e, l, q, n, g) {
		void 0 === c && (c = NaN);
		void 0 === b && (b = 0);
		void 0 === a && (a = 1);
		void 0 === e && (e = !1);
		void 0 === l && (l = "normal");
		void 0 === q && (q = null);
		void 0 === n && (n = null);
		void 0 === g && (g = 3);
		this.strokeStyleColor && (this.createEndLineCommand(),
			this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = b = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.commandQueue.push(new d(function(a, b) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = b;
			this.canvasContext.beginPath()
		}, this, [c, b]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	c.lineTo = function(c, b) {
		this.commandQueue.push(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.lineTo(c._transformTx +
				a, c._transformTy + b)
		}, this, [c, b]));
		this.lineX = c;
		this.lineY = b
	};
	c.curveTo = function(c, b, a, e) {
		this.commandQueue.push(new d(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + c, e._transformTy + d)
		}, this, [c, b, a, e]));
		this.lineX = a;
		this.lineY = e
	};
	c.moveTo = function(c, b) {
		this.commandQueue.push(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
		}, this, [c, b]))
	};
	c.clear = function() {
		this.lineY =
			this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null
	};
	c.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new d(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	c.endFill = function() {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null
	};
	c._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
	};
	c.createEndLineCommand = function() {
		this.endLineCommand ||
			(this.endLineCommand = new d(function() {
				this.canvasContext.stroke();
				this.canvasContext.closePath()
			}, this, null))
	};
	c._draw = function(c) {
		var b = this.commandQueue.length;
		if (0 != b) {
			this.renderContext = c;
			c = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
			c.save();
			this.strokeStyleColor && 0 < b && this.commandQueue[b - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), b = this.commandQueue.length);
			for (var a = 0; a < b; a++) {
				var d = this.commandQueue[a];
				d.method.apply(d.thisObject, d.args)
			}
			c.restore()
		}
	};
	var d = function() {
		return function(c, b, a) {
			this.method = c;
			this.thisObject = b;
			this.args = a
		}
	}();
	d.prototype.__class__ = "egret_h5_graphics.Command";
	c._setStyle = function(c) {
		this.canvasContext.fillStyle = c;
		this.canvasContext.beginPath()
	};
	c.init = function() {
		for (var d in c) egret.Graphics.prototype[d] = c[d];
		egret.RendererContext.createRendererContext = function(b) {
			return new egret.HTML5CanvasRenderer(b)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b(a) {
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
			for (var b = 0, l = 0; b < a; b += 6, l += 4) this.indices[b + 0] = l + 0, this.indices[b + 1] = l + 1, this.indices[b + 2] = l + 2, this.indices[b + 3] = l + 0, this.indices[b + 4] = l + 2, this.indices[b + 5] = l + 3;
			this.initWebGL();
			this.shaderManager = new c.WebGLShaderManager(this.gl);
			this.worldTransform = new c.Matrix;
			this.initBlendMode();
			c.MainContext.instance.addEventListener(c.Event.FINISH_RENDER, this._draw, this);
			c.TextField.prototype._draw = function(a) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				c.DisplayObject.prototype._draw.call(this, a)
			}
		}
		__extends(b, d);
		b.prototype.createCanvas = function() {
			var a = c.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var b = document.getElementById(c.StageDelegate.canvas_div_name),
					a = c.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				b.appendChild(a)
			}
			c.MainContext.instance.stage.addEventListener(c.Event.RESIZE,
				this.onResize, this);
			return a
		};
		b.prototype.onResize = function() {
			if (this.canvas) {
				var a = document.getElementById(c.StageDelegate.canvas_div_name);
				this.canvas.width = c.MainContext.instance.stage.stageWidth;
				this.canvas.height = c.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this.projectionX = this.canvas.width / 2;
				this.projectionY = -this.canvas.height / 2
			}
		};
		b.prototype.handleContextLost = function() {
			this.contextLost = !0
		};
		b.prototype.handleContextRestored =
			function() {
				this.initWebGL();
				this.shaderManager.setContext(this.gl);
				this.contextLost = !1
			};
		b.prototype.initWebGL = function() {
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
		b.prototype.setContext = function(a) {
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
		b.prototype.initBlendMode = function() {
			this.blendModesWebGL = {};
			this.blendModesWebGL[c.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			this.blendModesWebGL[c.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
		};
		b.prototype.start =
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
					var c = 4 * this.vertSize;
					a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
					a.vertexAttribPointer(b.aTextureCoord,
						2, a.FLOAT, !1, c, 8);
					a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
				}
			};
		b.prototype.clearScreen = function() {
			var a = this.gl;
			a.colorMask(!0, !0, !0, !0);
			for (var b = c.RenderFilter.getInstance().getDrawAreaList(), d = 0, f = b.length; d < f; d++) {
				var n = b[d];
				a.viewport(n.x, n.y, n.width, n.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			b = c.MainContext.instance.stage;
			a.viewport(0, 0, b.stageWidth, b.stageHeight);
			this.renderCost = 0
		};
		b.prototype.setBlendMode = function(a) {
			a ||
				(a = c.BlendMode.NORMAL);
			if (this.currentBlendMode != a) {
				var b = this.blendModesWebGL[a];
				b && (this._draw(), this.gl.blendFunc(b[0], b[1]), this.currentBlendMode = a)
			}
		};
		b.prototype.drawRepeatImage = function(a, b, c, d, f, g, h, m, k, p) {
			for (; g < m; g += d)
				for (p = h; p < k; p += f) {
					var r = Math.min(d, m - g),
						s = Math.min(f, k - p);
					this.drawImage(a, b, c, r, s, g, p, r, s)
				}
		};
		b.prototype.drawImage = function(a, b, d, f, n, g, h, m, k, p) {
			void 0 === p && (p = void 0);
			if (!this.contextLost)
				if (void 0 !== p) this.drawRepeatImage(a, b, d, f, n, g, h, m, k, p);
				else {
					p = c.MainContext.instance.rendererContext.texture_scale_factor;
					b /= p;
					d /= p;
					f /= p;
					n /= p;
					this.createWebGLTexture(a);
					if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = a.webGLTexture;
					var r = this.worldTransform,
						s = r.a,
						t = r.b,
						v = r.c,
						x = r.d,
						A = r.tx,
						z = r.ty;
					0 == g && 0 == h || r.append(1, 0, 0, 1, g, h);
					1 == f / m && 1 == n / k || r.append(m / f, 0, 0, k / n, 0, 0);
					g = r.a;
					h = r.b;
					m = r.c;
					k = r.d;
					p = r.tx;
					var y = r.ty;
					r.a = s;
					r.b = t;
					r.c = v;
					r.d = x;
					r.tx = A;
					r.ty = z;
					s = a._sourceWidth;
					t = a._sourceHeight;
					a = f;
					r = n;
					b /= s;
					d /= t;
					f /= s;
					n /= t;
					s = this.vertices;
					t = 4 * this.currentBatchSize *
						this.vertSize;
					v = this.worldAlpha;
					s[t++] = p;
					s[t++] = y;
					s[t++] = b;
					s[t++] = d;
					s[t++] = v;
					s[t++] = g * a + p;
					s[t++] = h * a + y;
					s[t++] = f + b;
					s[t++] = d;
					s[t++] = v;
					s[t++] = g * a + m * r + p;
					s[t++] = k * r + h * a + y;
					s[t++] = f + b;
					s[t++] = n + d;
					s[t++] = v;
					s[t++] = m * r + p;
					s[t++] = k * r + y;
					s[t++] = b;
					s[t++] = n + d;
					s[t++] = v;
					this.currentBatchSize++
				}
		};
		b.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = c.getTimer();
				this.start();
				var b = this.gl;
				b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
				var d = this.vertices.subarray(0, 4 * this.currentBatchSize *
					this.vertSize);
				b.bufferSubData(b.ARRAY_BUFFER, 0, d);
				b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += c.getTimer() - a;
				c.Profiler.getInstance().onDrawImage()
			}
		};
		b.prototype.setTransform = function(a) {
			var b = this.worldTransform;
			b.a = a.a;
			b.b = a.b;
			b.c = a.c;
			b.d = a.d;
			b.tx = a.tx;
			b.ty = a.ty
		};
		b.prototype.setAlpha = function(a, b) {
			this.worldAlpha = a;
			this.setBlendMode(b)
		};
		b.prototype.createWebGLTexture = function(a) {
			if (!a.webGLTexture) {
				var b = this.gl;
				a.webGLTexture =
					b.createTexture();
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
		b.prototype.pushMask = function(a) {
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
		b.prototype.popMask = function() {
			this._draw();
			var a = this.gl,
				b = this.maskList.pop();
			b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
			0 == this.maskList.length && a.disable(a.STENCIL_TEST)
		};
		b.prototype.setGlobalColorTransform = function(a) {
			if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
				a = a.concat();
				var b = this.shaderManager.colorTransformShader;
				b.uniforms.colorAdd.value.w = a.splice(19,
					1)[0] / 255;
				b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
				b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
				b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
				b.uniforms.matrix.value = a
			}
		};
		b.prototype.setupFont = function(a, b) {
			var c = this.canvasContext,
				d = a.italic ? "italic " : "normal ",
				d = d + (a.bold ? "bold " : "normal "),
				d = d + (a.size + "px " + a.fontFamily);
			c.font = d;
			c.textAlign = "left";
			c.textBaseline = "middle"
		};
		b.prototype.measureText = function(a) {
			return this.canvasContext.measureText(a).width
		};
		b.prototype.renderGraphics =
			function(a) {
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
		b.prototype.updateGraphics =
			function(a) {
				var b = this.gl;
				this.buildRectangle(a);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
			};
		b.prototype.buildRectangle = function(a) {
			var b = a.x,
				c = a.y,
				d = a.w;
			a = a.h;
			var f = this.graphicsPoints,
				g = this.graphicsIndices,
				h = f.length / 6;
			f.push(b, c);
			f.push(0, 0, 0, 1);
			f.push(b + d, c);
			f.push(0, 0, 0, 1);
			f.push(b, c + a);
			f.push(0, 0, 0, 1);
			f.push(b + d, c + a);
			f.push(0, 0, 0, 1);
			g.push(h, h, h + 1, h + 2, h + 3, h + 3)
		};
		return b
	}(c.RendererContext);
	c.WebGLRenderer = d;
	d.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function c() {}
		c.compileProgram = function(b, a, d) {
			d = c.compileFragmentShader(b, d);
			a = c.compileVertexShader(b, a);
			var l = b.createProgram();
			b.attachShader(l, a);
			b.attachShader(l, d);
			b.linkProgram(l);
			b.getProgramParameter(l, b.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return l
		};
		c.compileFragmentShader = function(b, a) {
			return c._compileShader(b, a, b.FRAGMENT_SHADER)
		};
		c.compileVertexShader = function(b, a) {
			return c._compileShader(b, a, b.VERTEX_SHADER)
		};
		c._compileShader =
			function(b, a, c) {
				c = b.createShader(c);
				b.shaderSource(c, a);
				b.compileShader(c);
				return b.getShaderParameter(c, b.COMPILE_STATUS) ? c : (console.log(b.getShaderInfoLog(c)), null)
			};
		c.checkCanUseWebGL = function() {
			if (void 0 == c.canUseWebGL) try {
				var b = document.createElement("canvas");
				c.canUseWebGL = !!window.WebGLRenderingContext && !(!b.getContext("webgl") && !b.getContext("experimental-webgl"))
			} catch (a) {
				c.canUseWebGL = !1
			}
			return c.canUseWebGL
		};
		return c
	}();
	c.WebGLUtils = d;
	d.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function() {
		function c(a) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
			this.setContext(a)
		}
		c.prototype.setContext = function(c) {
			this.gl = c;
			this.primitiveShader = new a(c);
			this.defaultShader = new f(c);
			this.colorTransformShader = new b(c);
			this.activateShader(this.defaultShader)
		};
		c.prototype.activateShader = function(a) {
			this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader =
				a)
		};
		c.prototype.setAttribs = function(a) {
			var b, c;
			c = this.tempAttribState.length;
			for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
			c = a.length;
			for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
			a = this.gl;
			c = this.attribState.length;
			for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
		};
		return c
	}();
	c.WebGLShaderManager = d;
	d.prototype.__class__ = "egret.WebGLShaderManager";
	var f = function() {
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
				b = c.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.uSampler = a.getUniformLocation(b, "uSampler");
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector = a.getUniformLocation(b, "offsetVector");
			this.dimensions = a.getUniformLocation(b, "dimensions");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord");
			this.colorAttribute =
				a.getAttribLocation(b, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			for (var d in this.uniforms) this.uniforms[d].uniformLocation = a.getUniformLocation(b, d);
			this.initUniforms();
			this.program = b
		};
		a.prototype.initUniforms = function() {
			if (this.uniforms) {
				var a = this.gl,
					b, c;
				for (c in this.uniforms) {
					b = this.uniforms[c];
					var d = b.type;
					"mat2" === d || "mat3" === d || "mat4" === d ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === d ? b.glFunc = a.uniformMatrix2fv :
						"mat3" === d ? b.glFunc = a.uniformMatrix3fv : "mat4" === d && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + d], b.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
				}
			}
		};
		a.prototype.syncUniforms = function() {
			if (this.uniforms) {
				var a, b = this.gl,
					c;
				for (c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x,
					a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
			}
		};
		return a
	}();
	c.EgretShader = f;
	f.prototype.__class__ = "egret.EgretShader";
	var b = function(a) {
		function b(c) {
			a.call(this, c);
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
	}(f);
	c.ColorTransformShader = b;
	b.prototype.__class__ = "egret.ColorTransformShader";
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
				b = c.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector = a.getUniformLocation(b, "offsetVector");
			this.tintColor = a.getUniformLocation(b, "tint");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.colorAttribute = a.getAttribLocation(b, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix = a.getUniformLocation(b,
				"translationMatrix");
			this.alpha = a.getUniformLocation(b, "alpha");
			this.program = b
		};
		return a
	}();
	c.PrimitiveShader = a;
	a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this)
		}
		__extends(b, d);
		b.prototype.proceed = function(a) {
			function b() {
				if (4 == f.readyState)
					if (f.status != a._status && (a._status = f.status, c.HTTPStatusEvent.dispatchHTTPStatusEvent(a, f.status)), 400 <= f.status || 0 == f.status) c.IOErrorEvent.dispatchIOErrorEvent(a);
					else {
						switch (a.dataFormat) {
							case c.URLLoaderDataFormat.TEXT:
								a.data = f.responseText;
								break;
							case c.URLLoaderDataFormat.VARIABLES:
								a.data = new c.URLVariables(f.responseText);
								break;
							case c.URLLoaderDataFormat.BINARY:
								a.data =
									f.response;
								break;
							default:
								a.data = f.responseText
						}
						c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
					}
			}
			if (a.dataFormat == c.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
			else if (a.dataFormat == c.URLLoaderDataFormat.SOUND) this.loadSound(a);
			else {
				var d = a._request,
					f = this.getXHR();
				f.onreadystatechange = b;
				var n = c.NetContext._getUrl(d);
				f.open(d.method, n, !0);
				this.setResponseType(f, a.dataFormat);
				d.method != c.URLRequestMethod.GET && d.data ? d.data instanceof c.URLVariables ? (f.setRequestHeader("Content-Type",
					"application/x-www-form-urlencoded"), f.send(d.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(d.data)) : f.send()
			}
		};
		b.prototype.loadSound = function(a) {
			function b(n) {
				window.clearTimeout(f.__timeoutId);
				f.removeEventListener("canplaythrough", b, !1);
				f.removeEventListener("error", d, !1);
				n = new c.Sound;
				n._setAudio(f);
				a.data = n;
				c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
			}

			function d(n) {
				window.clearTimeout(f.__timeoutId);
				f.removeEventListener("canplaythrough",
					b, !1);
				f.removeEventListener("error", d, !1);
				c.IOErrorEvent.dispatchIOErrorEvent(a)
			}
			var f = new Audio(a._request.url);
			f.__timeoutId = window.setTimeout(b, 100);
			f.addEventListener("canplaythrough", b, !1);
			f.addEventListener("error", d, !1);
			f.load()
		};
		b.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		b.prototype.setResponseType = function(a, b) {
			switch (b) {
				case c.URLLoaderDataFormat.TEXT:
				case c.URLLoaderDataFormat.VARIABLES:
					a.responseType = c.URLLoaderDataFormat.TEXT;
					break;
				case c.URLLoaderDataFormat.BINARY:
					a.responseType = "arraybuffer";
					break;
				default:
					a.responseType = b
			}
		};
		b.prototype.loadTexture = function(a) {
			var b = a._request,
				d = new Image;
			d.onload = function(b) {
				d.onerror = null;
				d.onload = null;
				b = new c.Texture;
				b._setBitmapData(d);
				a.data = b;
				c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
			};
			d.onerror = function(b) {
				d.onerror = null;
				d.onload = null;
				c.IOErrorEvent.dispatchIOErrorEvent(a)
			};
			d.src = b.url
		};
		return b
	}(c.NetContext);
	c.HTML5NetContext = d;
	d.prototype.__class__ = "egret.HTML5NetContext"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._isTouchDown = !1;
			this.rootDiv = document.getElementById(c.StageDelegate.canvas_div_name)
		}
		__extends(b, d);
		b.prototype.prevent = function(a) {
			a.stopPropagation();
			!0 != a.isScroll && a.preventDefault()
		};
		b.prototype.run = function() {
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
			}, !1)) : c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE ? this.addTouchListener() : c.MainContext.deviceType == c.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function(b) {
				a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
			});
			window.addEventListener("mouseup", function(b) {
				a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
				a._isTouchDown = !1
			})
		};
		b.prototype.addMouseListener = function() {
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
		b.prototype.addTouchListener = function() {
			var a = this;
			this.rootDiv.addEventListener("touchstart", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchmove",
				function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
			this.rootDiv.addEventListener("touchend", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchcancel", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
				a.prevent(b)
			}, !1)
		};
		b.prototype.inOutOfCanvas = function(a) {
			var b = this.getLocation(this.rootDiv, a);
			a = b.x;
			var b = b.y,
				d = c.MainContext.instance.stage;
			return 0 > a || 0 > b || a > d.stageWidth || b > d.stageHeight ? !0 : !1
		};
		b.prototype.dispatchLeaveStageEvent = function() {
			this.touchingIdentifiers.length = 0;
			c.MainContext.instance.stage.dispatchEventWith(c.Event.LEAVE_STAGE)
		};
		b.prototype._onTouchBegin = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchBegan(b.x, b.y, c)
		};
		b.prototype._onTouchMove = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") &&
				(c = a.identifier);
			this.onTouchMove(b.x, b.y, c)
		};
		b.prototype._onTouchEnd = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchEnd(b.x, b.y, c)
		};
		b.prototype.getLocation = function(a, b) {
			var d = document.documentElement,
				f = window,
				n, g;
			"function" === typeof a.getBoundingClientRect ? (g = a.getBoundingClientRect(), n = g.left, g = g.top) : g = n = 0;
			n += f.pageXOffset - d.clientLeft;
			g += f.pageYOffset - d.clientTop;
			null != b.pageX ? (d = b.pageX, f = b.pageY) : (n -= document.body.scrollLeft,
				g -= document.body.scrollTop, d = b.clientX, f = b.clientY);
			var h = c.Point.identity;
			h.x = (d - n) / c.StageDelegate.getInstance().getScaleX();
			h.y = (f - g) / c.StageDelegate.getInstance().getScaleY();
			return h
		};
		return b
	}(c.TouchContext);
	c.HTML5TouchContext = d;
	d.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function f() {
		this.constructor = c
	}
	for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
	f.prototype = d.prototype;
	c.prototype = new f
};
(function(c) {
	var d = function(d) {
		function b() {
			d.call(this);
			this._hasListeners = !1;
			this._inputType = "";
			this._isShow = !1;
			this.textValue = "";
			this._height = this._width = 0;
			this._styleInfoes = {};
			var a = c.StageDelegate.getInstance().getScaleX(),
				b = c.StageDelegate.getInstance().getScaleY(),
				l = c.Browser.getInstance().$new("div");
			l.position.x = 0;
			l.position.y = 0;
			l.scale.x = a;
			l.scale.y = b;
			l.transforms();
			l.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
			this.div = l;
			b = c.MainContext.instance.stage;
			a = b.stageWidth;
			b = b.stageHeight;
			l = new c.Shape;
			l.width = a;
			l.height = b;
			l.touchEnabled = !0;
			this._shape = l;
			this.getStageDelegateDiv().appendChild(this.div)
		}
		__extends(b, d);
		b.prototype.getStageDelegateDiv = function() {
			var a = c.Browser.getInstance().$("#StageDelegateDiv");
			a || (a = c.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(c.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
			return a
		};
		b.prototype._setMultiline = function(a) {
			d.prototype._setMultiline.call(this, a);
			this.createInput()
		};
		b.prototype.callHandler =
			function(a) {
				a.stopPropagation()
			};
		b.prototype._add = function() {
			this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
		};
		b.prototype._remove = function() {
			this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
			this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
		};
		b.prototype._addListeners = function() {
			this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart",
				this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
		};
		b.prototype._removeListeners = function() {
			this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
		};
		b.prototype.createInput = function() {
			var a = this._multiline ? "textarea" : "input";
			this._inputType != a && (this._inputType =
				a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign",
					"top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
		};
		b.prototype._open = function(a, b, c, d) {};
		b.prototype._setScale = function(a, b) {
			d.prototype._setScale.call(this, a, b);
			var l = c.StageDelegate.getInstance().getScaleX(),
				q = c.StageDelegate.getInstance().getScaleY();
			this.div.scale.x = l * a;
			this.div.scale.y = q * b;
			this.div.transforms()
		};
		b.prototype.changePosition = function(a, b) {
			var d = c.StageDelegate.getInstance().getScaleX(),
				f = c.StageDelegate.getInstance().getScaleY();
			this.div.position.x =
				a * d;
			this.div.position.y = b * f;
			this.div.transforms()
		};
		b.prototype.setStyles = function() {
			this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
			this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
			this.setElementStyle("textAlign", this._textAlign);
			this.setElementStyle("fontSize", this._size + "px");
			this.setElementStyle("color", "#000000");
			this.setElementStyle("width", this._width + "px");
			this.setElementStyle("height", this._height + "px");
			this.setElementStyle("border", "1px solid red");
			this.setElementStyle("display",
				"block")
		};
		b.prototype._show = function() {
			0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
			this._isShow = !0;
			var a = this._getText();
			this.inputElement.value = a;
			var b = this;
			this.inputElement.oninput = function() {
				b.textValue = b.inputElement.value;
				b.dispatchEvent(new c.Event("updateText"))
			};
			this.setStyles();
			this.inputElement.focus();
			this.inputElement.selectionStart = a.length;
			this.inputElement.selectionEnd = a.length;
			this._shape && null == this._shape.parent &&
				c.MainContext.instance.stage.addChild(this._shape)
		};
		b.prototype._hide = function() {
			if (null != this.inputElement) {
				this._isShow = !1;
				this.inputElement.oninput = function() {};
				this.setElementStyle("border", "none");
				this.setElementStyle("display", "none");
				this.inputElement.value = "";
				this.setElementStyle("width", "0px");
				window.scrollTo(0, 0);
				var a = this;
				c.setTimeout(function() {
					a.inputElement.blur();
					window.scrollTo(0, 0)
				}, this, 50);
				this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
			}
		};
		b.prototype._getText =
			function() {
				this.textValue || (this.textValue = "");
				return this.textValue
			};
		b.prototype._setText = function(a) {
			this.textValue = a;
			this.resetText()
		};
		b.prototype.resetText = function() {
			this.inputElement && (this.inputElement.value = this.textValue)
		};
		b.prototype._setWidth = function(a) {
			this._width = a
		};
		b.prototype._setHeight = function(a) {
			this._height = a
		};
		b.prototype.setElementStyle = function(a, b) {
			this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
		};
		return b
	}(c.StageText);
	c.HTML5StageText =
		d;
	d.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
	return new egret.HTML5StageText
};
var GameUtils = function() {
	function c() {}
	c.createBitmapByName = function(c) {
		var f = new egret.Bitmap;
		c = RES.getRes(c);
		f.texture = c;
		return f
	};
	c.createBitmapFromSheet = function(c, f) {
		void 0 === f && (f = "gameRes");
		var b = RES.getRes(f).getTexture(c),
			a = new egret.Bitmap;
		a.texture = b;
		return a
	};
	c.getTextureFromSheet = function(c, f) {
		void 0 === f && (f = "gameRes");
		return RES.getRes(f).getTexture(c)
	};
	c.removeChild = function(c) {
		c && c.parent && (c.parent.removeElement ? c.parent.removeElement(c) : c.parent.removeChild(c))
	};
	c.addUI = function(c) {
		c &&
			!c.parent && GameApp.uiStage.addElement(c)
	};
	c.removeUI = function(c) {
		c && c.parent && GameApp.uiStage.removeElement(c)
	};
	c.removeStarlingSwfUI = function(d) {
		c.removeChild(d)
	};
	c.getUrl = function(c) {
		return "" != c ? c : ""
	};
	c.addTouchTapListener = function(c, f, b) {
		var a = -1,
			e = -1;
		c.touchEnabled = !0;
		c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(b) {
			a = b.stageX;
			e = b.stageY
		}, c);
		c.addEventListener(egret.TouchEvent.TOUCH_END, function(c) {
			10 > Math.abs(a - c.stageX) && 10 > Math.abs(e - c.stageY) && f.call(b);
			e = a = -1
		}, c)
	};
	c.fixNumber =
		function(c) {
			var f = "";
			1E4 < c ? (c = Math.floor(c / 1E4), f = c.toString() + "w") : f = c.toString();
			return f
		};
	c.lock = function(c) {
		c = egret.MainContext.instance.stage;
		c.touchEnabled = c.touchChildren = !1
	};
	c.unlock = function(c) {
		c = egret.MainContext.instance.stage;
		c.touchEnabled = c.touchChildren = !0
	};
	c.replaceTextureByUrl = function(c, f) {
		RES.getResByUrl(c, function(b) {
			f.texture = b
		}, this, RES.ResourceItem.TYPE_IMAGE)
	};
	c.getIsTodayFirstIn = function() {
		var c = new Date,
			f = window.localStorage.getItem("LoginDate");
		if (null == f) return f = c.getMonth().toString() +
			c.getDay().toString(), window.localStorage.setItem("LoginDate", f), !0;
		c = c.getMonth().toString() + c.getDay().toString();
		window.localStorage.setItem("LoginDate", c);
		return c != f
	};
	return c
}();
GameUtils.prototype.__class__ = "GameUtils";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	Role = function(c) {
		function d() {
			c.call(this);
			this.body = new egret.Bitmap;
			this.body.anchorX = 0.5;
			this.addChild(this.body)
		}
		__extends(d, c);
		d.prototype.setState = function(c) {
			this.state = c;
			this.state == d.STATE5 ? (this.isLoop = !1, this.body.anchorY = 0) : (this.isLoop = !0, this.body.anchorY = 1);
			this.state == d.STATE3 || this.state == d.STATE4 ? (this.currFrames = [],
				0.5 < Math.random() ? this.currFrames.push(d.FRAMES[this.state][0]) : this.currFrames.push(d.FRAMES[this.state][1])) : this.currFrames = d.FRAMES[this.state];
			this.currFrameIndex = 0;
			this.setBody()
		};
		d.prototype.setBody = function() {
			this.body.texture = GameUtils.getTextureFromSheet(this.currFrames[this.currFrameIndex], "roleRes")
		};
		d.prototype.run = function() {
			this.runFlag++;
			4 < this.runFlag && (this.runFlag = 0);
			if (0 == this.runFlag) {
				var c = this.currFrameIndex + 1;
				c == this.currFrames.length && (c = this.isLoop ? 0 : this.currFrameIndex);
				c != this.currFrameIndex && (this.currFrameIndex = c, this.setBody())
			}
		};
		d.prototype.play = function() {
			egret.Ticker.getInstance().register(this.run, this);
			this.runFlag = 0
		};
		d.prototype.stop = function() {
			egret.Ticker.getInstance().unregister(this.run, this)
		};
		d.STATE1 = 0;
		d.STATE2 = 1;
		d.STATE3 = 2;
		d.STATE4 = 3;
		d.STATE5 = 4;
		d.FRAMES = [
			["0020003", "0020004", "0020005", "0020006", "0020007"],
			["0020008"],
			["0020009", "0020010"],
			["0020011", "0020012"],
			["xue0001", "xue0002", "xue0003", "xue0004", "xue0005"]
		];
		return d
	}(egret.Sprite);
Role.prototype.__class__ = "Role";
var Shake = function() {
	function c() {}
	c.prototype.run = function(c, f, b) {
		void 0 === b && (b = null);
		this.obj = c;
		this.initY = c.y;
		this.shakeNum = f;
		this.overFunc = b;
		egret.Ticker.getInstance().register(this.loop, this);
		this.flag = this.num = 0
	};
	c.prototype.loop = function() {
		0 == this.flag && (this.obj.y = this.obj.y <= this.initY ? this.obj.y + 5 : this.obj.y - 5, this.obj.y == this.initY && (this.num++, this.num == this.shakeNum && (egret.Ticker.getInstance().unregister(this.loop, this), this.overFunc && this.overFunc())));
		this.flag++;
		2 == this.flag && (this.flag =
			0)
	};
	return c
}();
Shake.prototype.__class__ = "Shake";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	GameOverLayer = function(c) {
		function d() {
			c.call(this);
			this.init()
		}
		__extends(d, c);
		d.prototype.init = function() {
			this.gameoverbg1 = GameUtils.createBitmapFromSheet("bg_wenzi");
			this.gameoverbg1.x = 76;
			this.gameoverbg1.y = 0;
			this.addChild(this.gameoverbg1);
			this.shibaibg = GameUtils.createBitmapFromSheet("shibai");
			this.shibaibg.x = 140;
			this.shibaibg.y =
				84;
			this.addChild(this.shibaibg);
			this.maxScoreIm = GameUtils.createBitmapFromSheet("zuigaojilu");
			this.maxScoreIm.x = 278;
			this.maxScoreIm.y = 248;
			this.addChild(this.maxScoreIm);
			this.currScoreIm = GameUtils.createBitmapFromSheet("fenshu");
			this.currScoreIm.x = 108;
			this.currScoreIm.y = 248;
			this.addChild(this.currScoreIm);
			this.tryBtn = new MyButton("btn_y", "btn_zaiwan");
			this.tryBtn.x = 131;
			this.tryBtn.y = 371;
			this.tryBtn.setClick(this.onTryGameClick);
			this.addChild(this.tryBtn);
			this.strutBtn = new MyButton("btn_b", "btn_gengduo");
			this.strutBtn.x = 131;
			this.strutBtn.y = 481;
			this.addChild(this.strutBtn);
			this.strutBtn.setClick(this.onStrutGameClik.bind(this));
			this.scoreNum = new SpecialNumber;
			this.scoreNum.x = 135;
			this.scoreNum.y = 283;
			this.addChild(this.scoreNum);
			this.recordNum = new SpecialNumber;
			this.recordNum.x = 327;
			this.recordNum.y = 283;
			this.addChild(this.recordNum)
		};
		d.prototype.setGameOverDataHandler = function(c, b) {
			void 0 === c && (c = 20);
			void 0 === b && (b = 57);
			this.scoreNum.setData(c.toString());
			this.recordNum.setData(b.toString());
			// EgretShare.setShareContent("\u5f97\u4e86" + c + "\u5206\uff01\u624b\u5fc3\u5168\u662f\u6c57\uff01\u8fd9\u6e38\u620f\u5b9e\u5728TM\u592a\u60ca\u9669\u4e86\uff01\u8c01\u6562\u6765\u6311\u6218\uff1f")
		};
		d.prototype.onTryGameClick = function() {
			GameControl.getInstance().onGameSceneHandler()
		};
		d.prototype.onStrutGameClik = function() {
			console.log("\u70ab\u8000\u4e0b~");
			//Play68.goHome();
			// EgretShare.share()
		};
		d.prototype.onStageTouch = function() {
			var c = this.stage;
			c.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,
				this.onStageTouch, this);
			c.touchChildren = !0;
			c.removeChild(this.weixinContainer)
		};
		return d
	}(egret.Sprite);
GameOverLayer.prototype.__class__ = "GameOverLayer";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	GameSceneLayer = function(c) {
		function d() {
			c.call(this);
			this.spaceArr = [50, 70, 90, 110];
			this.initUI()
		}
		__extends(d, c);
		d.prototype.initUI = function() {
			this.shake1 = new Shake;
			this.shake2 = new Shake;
			this.bg = RES.getRes("bg_qiang");
			var c = new egret.Bitmap(this.bg);
			c.mask = new egret.Rectangle(0, Consts.GAME_HEIGHT, Consts.GAME_WIDTH, 300);
			this.addChild(c);
			this.bgBitmaps = [];
			this.topContianer = new egret.Sprite;
			this.addChild(this.topContianer);
			this.topSptite = new egret.Sprite;
			this.topContianer.addChild(this.topSptite);
			this.topLine = new egret.Shape;
			this.topContianer.addChild(this.topLine);
			this.bottomContianer = new egret.Sprite;
			this.addChild(this.bottomContianer);
			this.bottomSptite = new egret.Sprite;
			this.bottomContianer.addChild(this.bottomSptite);
			this.bottomLine = new egret.Shape;
			this.bottomContianer.addChild(this.bottomLine);
			this.topRects = [];
			this.bottomRects =
				[];
			this.titleImg = GameUtils.createBitmapFromSheet("bg_shangkuang");
			this.addChild(this.titleImg);
			this.scoreKuang = GameUtils.createBitmapFromSheet("kuang");
			this.scoreKuang.x = 5;
			this.addChild(this.scoreKuang);
			this.lvKuang = GameUtils.createBitmapFromSheet("kuang");
			this.lvKuang.scaleX = -1;
			this.lvKuang.x = 466;
			this.addChild(this.lvKuang);
			this.maxScore = GameUtils.createBitmapFromSheet("fenshu");
			this.maxScore.x = 40;
			this.maxScore.y = 15;
			this.addChild(this.maxScore);
			this.currLv = GameUtils.createBitmapFromSheet("guanqia");
			this.currLv.x = 368;
			this.currLv.y = 15;
			this.addChild(this.currLv);
			this.lvNum = new SpecialNumber;
			this.lvNum.x = 393;
			this.lvNum.y = 50;
			this.addChild(this.lvNum);
			this.recordNum = new SpecialNumber;
			this.recordNum.x = 73;
			this.recordNum.y = 50;
			this.addChild(this.recordNum);
			this.currLevel = 1;
			this.currMaxScore = 0;
			this.lvNum.setData(this.currLevel.toString());
			this.recordNum.setData(this.currMaxScore.toString());
			this.role = new Role;
			this.addChild(this.role);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
		};
		d.prototype.onAdd =
			function() {
				this.score = this.dieNum = 0;
				this.currLevel = 1;
				this.refreshScore();
				this.initData();
				egret.setTimeout(this.start, this, 100)
			};
		d.prototype.refreshScore = function() {
			this.lvNum.setData(this.currLevel.toString());
			this.recordNum.setData(this.score.toString())
		};
		d.prototype.refurbish = function() {
			this.initData();
			this.start()
		};
		d.prototype.start = function() {
			this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			egret.setTimeout(this.shakeRun, this, 1E3)
		};
		d.prototype.shakeRun = function() {
			this.shake1.run(this.topContianer,
				5, this.land.bind(this))
		};
		d.prototype.land = function() {
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			egret.Tween.get(this.topContianer).to({
				y: 0
			}, 100).call(function() {
				this.landOver()
			}.bind(this))
		};
		d.prototype.landOver = function() {
			this.checkState();
			this.shake1.run(this.topContianer, 3);
			this.shake2.run(this.bottomContianer, 3, this.checkResult.bind(this))
		};
		d.prototype.checkState = function() {
			var c = this.getSpace();
			0 == c ? this.role.setState(Role.STATE5) : c == this.spaceArr[2] ? this.role.setState(Role.STATE4) :
				c == this.spaceArr[0] ? this.role.setState(Role.STATE3) : c == this.spaceArr[1] && this.role.setState(Role.STATE2);
			0 == c && this.setRolePos(this.rolePosIndex, -10, 4)
		};
		d.prototype.checkResult = function() {
			var c = this;
			if (0 == this.getSpace()) {
				if (this.dieNum++, 1 == this.dieNum) {
					this.role.stop();
					egret.setTimeout(function() {
						GameControl.getInstance().showGameOverSceneHandler();
						//updateShare(this.score);
						//Play68.setRankingScoreDesc(this.score);
						GameControl.getInstance().getGameOverDisplay().setGameOverDataHandler(c.score, c.currMaxScore)
					}, this, 1E3);
					return
				}
			} else this.currLevel++, this.score += 10,
				this.score > this.currMaxScore && (this.currMaxScore = this.score), this.refreshScore();
			egret.setTimeout(this.refurbish, this, 1E3)
		};
		d.prototype.getSpace = function() {
			return Consts.GAME_HEIGHT - this.topRects[this.rolePosIndex].height - this.bottomRects[this.rolePosIndex].height
		};
		d.prototype.onClick = function(c) {
			var b = 0,
				a = this.bottomRects.length;
			for (b; b < a; b++) {
				var d = this.bottomRects[b];
				if (c.stageX > d.x && c.stageX < d.x + d.width) {
					this.setRolePos(b);
					break
				}
			}
		};
		d.prototype.initData = function() {
			this.role.setState(Role.STATE1);
			this.role.play();
			this.topRects.splice(0, this.topRects.length);
			this.bottomRects.splice(0, this.bottomRects.length);
			for (var c = !1, b = 0; 8 > b; b++) {
				var a = 150 + 10 * Math.floor(8 * Math.random());
				this.bottomRects.push(new egret.Rectangle(60 * b, Consts.GAME_HEIGHT - a, 60, a));
				a = Consts.GAME_HEIGHT - a;
				if (0.2 > Math.random() || !c && 7 == b) c = Math.floor(Math.random() * this.spaceArr.length), a -= this.spaceArr[c], c = !0;
				this.topRects.push(new egret.Rectangle(60 * b, 0, 60, a))
			}
			this.fullFront(this.topSptite, this.topRects);
			this.fullFront(this.bottomSptite,
				this.bottomRects, !0);
			this.drawLine();
			this.topContianer.y = -200;
			this.setRolePos(3, 17, 0, !0)
		};
		d.prototype.setRolePos = function(c, b, a, d) {
			void 0 === b && (b = 17);
			void 0 === a && (a = 0);
			void 0 === d && (d = !1);
			d || (this.rolePosIndex > c ? c = this.rolePosIndex - 1 : this.rolePosIndex < c && (c = this.rolePosIndex + 1));
			this.rolePosIndex = c;
			c = this.bottomRects[c];
			this.role.x = c.x + c.width / 2 + a;
			this.role.y = c.y + b
		};
		d.prototype.drawLine = function() {
			this.topLine.graphics.clear();
			this.topLine.graphics.lineStyle(10, 3401726);
			this.bottomLine.graphics.clear();
			this.bottomLine.graphics.lineStyle(10, 3401726);
			this.drawTopLine(5);
			this.drawBottomLine(5);
			this.topLine.graphics.endFill();
			this.bottomLine.graphics.endFill()
		};
		d.prototype.drawTopLine = function(c) {
			c = this.topRects.length;
			for (var b = 0; b < c; b++) {
				var a = this.topRects[b];
				0 == b ? this.topLine.graphics.moveTo(a.x, a.height) : this.topLine.graphics.lineTo(a.x, a.height);
				this.topLine.graphics.lineTo(a.x + a.width, a.height)
			}
		};
		d.prototype.drawBottomLine = function(c) {
			for (var b = this.bottomRects.length, a = 0; a < b; a++) {
				var d = this.bottomRects[a];
				0 == a ? this.bottomLine.graphics.moveTo(d.x, d.y + c) : this.bottomLine.graphics.lineTo(d.x, d.y + c);
				this.bottomLine.graphics.lineTo(d.x + d.width, d.y + c)
			}
		};
		d.prototype.fullFront = function(c, b, a) {
			this.clearBg(c);
			a = b.length;
			for (var d = 0; d < a; d++) {
				var l = b[d],
					q;
				this.bgBitmaps.length ? q = this.bgBitmaps.pop() : (q = new egret.Bitmap, q.texture = new egret.Texture, q.texture._setBitmapData(this.bg._bitmapData));
				q.scrollRect = l;
				q.x = l.x;
				q.y = l.y;
				c.addChild(q)
			}
		};
		d.prototype.clearBg = function(c) {
			for (; c.numChildren;) {
				var b = c.getChildAt(0);
				b && (c.removeChild(b), this.bgBitmaps.push(b))
			}
		};
		return d
	}(egret.Sprite);
GameSceneLayer.prototype.__class__ = "GameSceneLayer";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	StartGameLayer = function(c) {
		function d() {
			c.call(this);
			this.init()
		}
		__extends(d, c);
		d.prototype.init = function() {
			this.titleImage = GameUtils.createBitmapFromSheet("logo_mishitaosheng");
			this.titleImage.x = 51;
			this.titleImage.y = 161;
			this.addChild(this.titleImage);
			this.startBtn = new MyButton("btn_y", "btn_kaishi");
			this.startBtn.x = 131;
			this.startBtn.y =
				324;
			this.startBtn.setClick(this.onStartGameClick);
			this.addChild(this.startBtn);
			this.moreBtn = new MyButton("btn_b", "btn_gengduo");
			this.moreBtn.setClick(function() {
				// EgretShare.moreGame()
				//Play68.goHome();
			});
			this.moreBtn.x = 131;
			this.moreBtn.y = 432;
			this.addChild(this.moreBtn);
			var c = new egret.TextField;
			c.width = Consts.GAME_WIDTH;
			c.textAlign = egret.HorizontalAlign.CENTER;
			c.strokeColor = 4210238;
			c.stroke = 1;
			c.bold = !0;
			c.y = 612;
			c.text = "";
			this.addChild(c)
		};
		d.prototype.onStartGameClick = function() {
			GameControl.getInstance().onGameSceneHandler()
		};
		d.prototype.onMoreGameClik = function() {};
		return d
	}(egret.Sprite);
StartGameLayer.prototype.__class__ = "StartGameLayer";
var Consts = function() {
	function c() {}
	c.GAME_WIDTH = 480;
	c.GAME_HEIGHT = 650;
	return c
}();
Consts.prototype.__class__ = "Consts";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	LoadingUI = function(c) {
		function d() {
			c.call(this);
			this.logoUrl = "resource/assets/loading_logo.png";
			this.bgUrl = "resource/assets/loading_bg.jpg";
			this.createView()
		}
		__extends(d, c);
		d.prototype.createView = function() {
			this.w = 480;
			this.h = 800;
			this.textField = new egret.TextField;
			this.textField.y = 500;
			this.textField.textColor = 3355443;
			this.textField.size =
				23;
			this.textField.width = this.w;
			this.textField.height = 100;
			this.textField.fontFamily = "Black";
			this.textField.textAlign = "center";
			this.textField_power = new egret.TextField;
			this.textField_power.y = 0.9 * this.h;
			this.textField_power.textColor = 3355443;
			this.textField_power.width = this.w;
			this.textField_power.height = 100;
			this.textField_power.size = 20;
			this.textField_power.text = "最好玩的游戏尽在空中传媒小游戏";
			this.textField_power.fontFamily = "Black";
			this.textField_power.textAlign = "center";
			var c = new egret.URLLoader;
			c.addEventListener(egret.Event.COMPLETE,
				this.onComplete, this);
			c.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
			c.load(new egret.URLRequest(this.logoUrl));
			c = new egret.URLLoader;
			c.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
			c.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
			c.load(new egret.URLRequest(this.bgUrl));
			this.bg = new egret.Bitmap;
			this.logo = new egret.Bitmap;
			this.uiContainer = new egret.DisplayObjectContainer;
			this.addChild(this.uiContainer);
			this.addChild(this.logo);
			this.addChildAt(this.bg, 0);
			this.addChild(this.textField);
			this.addChild(this.textField_power)
		};
		d.prototype.onComplete = function(c) {
			c = c.target;
			var b = c.data;
			c._request.url == this.bgUrl ? (this.bg.texture = b, this.bg.scaleX = this.w / 640, this.bg.scaleY = this.h / 960) : c._request.url == this.logoUrl && (this.logo.texture = b, this.logo.anchorX = this.logo.anchorY = 0.5, this.logo.x = this.w / 2, this.logo.y = this.h / 2 - 60, this.logo.scaleX = this.logo.scaleY = this.h / 960, this.textField.y = this.logo.y + 100)
		};
		d.prototype.setProgress = function(c, b) {
			this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d\u2026" + Math.floor(c / b * 100) + "%"
		};
		d.prototype.onLoadComplete =
			function(c, b) {};
		return d
	}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	MyButton = function(c) {
		function d(d, b) {
			c.call(this);
			this.bg = GameUtils.createBitmapFromSheet(d);
			this.addChild(this.bg);
			this.title = GameUtils.createBitmapFromSheet(b);
			null == this.title.texture && (this.title.texture = RES.getRes(b));
			this.title.x = this.bg.width - this.title.width >> 1;
			this.title.y = this.bg.height - this.title.height >> 1;
			this.addChild(this.title)
		}
		__extends(d, c);
		d.prototype.setClick = function(c) {
			this.touchEnabled = !0;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
			this.onClick = c
		};
		d.prototype.onClickEvent = function() {
			this.onClick()
		};
		return d
	}(egret.Sprite);
MyButton.prototype.__class__ = "MyButton";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	GameControl = function(c) {
		function d() {
			c.call(this);
			this.startgame = new StartGameLayer;
			this.gameScene = new GameSceneLayer;
			this.gameoverGame = new GameOverLayer
		}
		__extends(d, c);
		d.getInstance = function() {
			d._gameControl || (d._gameControl = new d);
			return d._gameControl
		};
		d.prototype.setStageHandler = function(c) {
			this.currStage = c;
			this.bgImag = GameUtils.createBitmapByName("bgImage");
			this.currStage.addChild(this.bgImag)
		};
		d.prototype.startGameHandler = function() {
			this.gameScene && this.gameScene.parent && GameUtils.removeChild(this.gameScene);
			this.gameoverGame && this.gameoverGame.parent && GameUtils.removeChild(this.gameoverGame);
			this.currStage.addChild(this.startgame);
			GameApp.xia.visible = !0
		};
		d.prototype.onGameSceneHandler = function() {
			this.startgame && this.startgame.parent && GameUtils.removeChild(this.startgame);
			this.gameoverGame && this.gameoverGame.parent && GameUtils.removeChild(this.gameoverGame);
			this.currStage.addChild(this.gameScene);
			GameApp.xia.visible = !1
		};
		d.prototype.showGameOverSceneHandler = function() {
			this.startgame && this.startgame.parent && GameUtils.removeChild(this.startgame);
			this.gameScene && this.gameScene.parent && GameUtils.removeChild(this.gameScene);
			this.currStage.addChild(this.gameoverGame);
			GameApp.xia.visible = !0;
			console.log(this.scoreNum);

		};
		d.prototype.getGameOverDisplay = function() {
			return this.gameoverGame
		};
		d._gameControl = null;
		return d
	}(egret.Sprite);
GameControl.prototype.__class__ = "GameControl";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	GameApp = function(c) {
		function d() {
			c.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE && (this.y = 800 - Consts.GAME_HEIGHT >> 1)
		}
		__extends(d, c);
		d.prototype.onAddToStage = function(c) {
			this.loadingView = new LoadingUI;
			this.stage.addChild(this.loadingView);
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("resource/resource.json", "resource/")
		};
		d.prototype.onConfigComplete = function(c) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("preload")
		};
		d.prototype.onResourceLoadComplete = function(c) {
			"preload" ==
			c.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.stage.removeChild(this.loadingView), this.createGameScene())
		};
		d.prototype.onResourceProgress = function(c) {
			"preload" == c.groupName && this.loadingView.setProgress(c.itemsLoaded, c.itemsTotal)
		};
		d.prototype.createGameScene = function() {
			/*window.hasOwnProperty("EgretShare") ? EgretShare.setShareData("\u5bc6\u5ba4\u9003\u751f",
				"\u5c3c\u739b\uff0c\u6d3b\u7740\u771f\u662f\u4e0d\u5bb9\u6613", "http://static.egret-labs.org/h5game/8/release.html", "http://static.egret-labs.org/h5game/icons/10000008.jpg") : window.setShareInfo = function() {
				EgretShare.setShareData("\u5bc6\u5ba4\u9003\u751f", "\u5c3c\u739b\uff0c\u6d3b\u7740\u771f\u662f\u4e0d\u5bb9\u6613", "http://static.egret-labs.org/h5game/8/release.html", "http://static.egret-labs.org/h5game/icons/10000008.jpg")
			};*/
			if (egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE) {
				var c =
					GameUtils.createBitmapByName("shang");
				c.height = this.y;
				this.stage.addChild(c);
				c = GameUtils.createBitmapByName("xia");
				c.y = this.y + Consts.GAME_HEIGHT;
				c.height = this.y;
				this.stage.addChild(c);
				d.xia = c
			}
			GameControl.getInstance().setStageHandler(this);
			GameControl.getInstance().startGameHandler()
		};
		d.xia = new egret.DisplayObject;
		return d
	}(egret.DisplayObjectContainer);
GameApp.prototype.__class__ = "GameApp";
var __extends = this.__extends || function(c, d) {
		function f() {
			this.constructor = c
		}
		for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
		f.prototype = d.prototype;
		c.prototype = new f
	},
	SpecialNumber = function(c) {
		function d() {
			c.call(this);
			this.gap = 0;
			this.anchorX = 0.5
		}
		__extends(d, c);
		d.prototype.setData = function(c) {
			this.clear();
			if ("" != c && null != c)
				for (var b = c.split(""), a = 0, d = b.length, l = 0; l < d; l++) {
					c = b[l];
					try {
						var q = GameUtils.createBitmapFromSheet(c);
						q && (q.x = a, a += q.width + this.gap, this.addChild(q))
					} catch (n) {
						console.log(n)
					}
				}
		};
		d.prototype.clear = function() {
			for (; this.numChildren;) this.removeChildAt(0)
		};
		return d
	}(egret.DisplayObjectContainer);
SpecialNumber.prototype.__class__ = "SpecialNumber";