var egret;
(function(c) {
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
	c.HashObject = d;
	d.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
			var g = this.objectPool; - 1 == g.indexOf(e) && (g.push(e), this._length++, 0 == this.frameCount &&
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
				g = e.indexOf(this); - 1 != g && e.splice(g, 1)
		};
		a._callBackList = [];
		return a
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
	c.callLater = function(d, b) {
		for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
		c.__callLaterFunctionList.push(d);
		c.__callLaterThisList.push(b);
		c.__callLaterArgsList.push(a)
	}
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = e;
			this._bubbles = a;
			this._cancelable = q
		}
		__extends(a, b);
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
		a._dispatchByTarget = function(e, a, q, b, d, h) {
			"undefined" === typeof d && (d = !1);
			"undefined" === typeof h && (h = !1);
			var k = e.eventRecycler;
			k || (k = e.eventRecycler = new c.Recycler);
			var m = k.pop();
			m ? m._type = q : m = new e(q);
			m._bubbles = d;
			m._cancelable = h;
			if (b)
				for (var n in b) m[n] = b[n], null !== m[n] && (b[n] = null);
			e = a.dispatchEvent(m);
			k.push(m);
			return e
		};
		a._getPropertyData = function(e) {
			var a = e._props;
			a || (a = e._props = {});
			return a
		};
		a.dispatchEvent = function(e, g, q, b) {
			"undefined" === typeof q && (q = !1);
			var c = a._getPropertyData(a);
			b && (c.data = b);
			a._dispatchByTarget(a, e, g, c, q)
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
	}(c.HashObject);
	c.Event =
		d;
	d.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this, e, a, q)
		}
		__extends(a, b);
		a.dispatchIOErrorEvent = function(e) {
			c.Event._dispatchByTarget(a, e, a.IO_ERROR)
		};
		a.IO_ERROR = "ioError";
		return a
	}(c.Event);
	c.IOErrorEvent = d;
	d.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, q, c, d, h, k, m, n, p) {
			"undefined" === typeof a && (a = !0);
			"undefined" === typeof q && (q = !0);
			"undefined" === typeof c && (c = 0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof k && (k = !1);
			"undefined" === typeof m && (m = !1);
			"undefined" === typeof p && (p = !1);
			b.call(this, e, a, q);
			this._localY = this._localX = this._stageY = this._stageX = 0;
			this.touchPointID = c;
			this._stageX = d;
			this._stageY = h;
			this.ctrlKey = k;
			this.altKey = m;
			this.touchDown = p
		}
		__extends(a, b);
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
			b.prototype._setCurrentTarget.call(this, e);
			e instanceof
			c.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, c.Point.identity), this._localX = e.x, this._localY = e.y)
		};
		a.dispatchTouchEvent = function(e, g, q, b, d, h, k, m, n) {
			"undefined" === typeof q && (q = 0);
			"undefined" === typeof b && (b = 0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof h && (h = !1);
			"undefined" === typeof k && (k = !1);
			"undefined" === typeof m && (m = !1);
			"undefined" === typeof n && (n = !1);
			var p = c.Event._getPropertyData(a);
			p.touchPointID = q;
			p._stageX = b;
			p._stageY = d;
			p.ctrlKey = h;
			p.altKey = k;
			p.shiftKey = m;
			p.touchDown = n;
			c.Event._dispatchByTarget(a, e, g, p, !0, !0)
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
	}(c.Event);
	c.TouchEvent = d;
	d.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this, e, a, q)
		}
		__extends(a, b);
		a.dispatchTimerEvent = function(e, g) {
			c.Event._dispatchByTarget(a, e, g)
		};
		a.TIMER = "timer";
		a.TIMER_COMPLETE = "timerComplete";
		return a
	}(c.Event);
	c.TimerEvent = d;
	d.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.CAPTURING_PHASE = 1;
		b.AT_TARGET = 2;
		b.BUBBLING_PHASE = 3;
		return b
	}();
	c.EventPhase = d;
	d.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e) {
			"undefined" === typeof e && (e = null);
			b.call(this);
			this._eventTarget = e ? e : this
		}
		__extends(a, b);
		a.prototype.addEventListener = function(e, a, q, b, d) {
			"undefined" === typeof b && (b = !1);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof b && (b = !1);
			"undefined" === typeof d && (d = 0);
			a || c.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			b ? (this._captureEventsMap || (this._captureEventsMap = {}), b = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), b = this._eventsMap);
			var h = b[e];
			h || (h = b[e] = []);
			this._insertEventBin(h, a, q, d)
		};
		a.prototype._insertEventBin = function(e, a, q, b) {
			for (var c = -1, d = e.length, k = 0; k < d; k++) {
				var m = e[k];
				if (m.listener === a && m.thisObject === q) return !1; - 1 == c && m.priority < b && (c = k)
			}
			a = {
				listener: a,
				thisObject: q,
				priority: b
			}; - 1 != c ? e.splice(c, 0, a) : e.push(a);
			return !0
		};
		a.prototype.removeEventListener = function(e, a, q, b) {
			"undefined" === typeof b && (b = !1);
			if (b = b ? this._captureEventsMap : this._eventsMap) {
				var c = b[e];
				c && (this._removeEventBin(c, a, q), 0 ==
					c.length && delete b[e])
			}
		};
		a.prototype._removeEventBin = function(e, a, b) {
			for (var c = e.length, d = 0; d < c; d++) {
				var h = e[d];
				if (h.listener === a && h.thisObject === b) return e.splice(d, 1), !0
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
			for (var a = a.concat(), b = a.length, c = 0; c < b; c++) {
				var d = a[c];
				d.listener.call(d.thisObject, e);
				if (e._isPropagationImmediateStopped) break
			}
			return !e.isDefaultPrevented()
		};
		a.prototype.dispatchEventWith = function(e, a, b) {
			"undefined" === typeof a && (a = !1);
			c.Event.dispatchEvent(this, e, a, b)
		};
		return a
	}(c.HashObject);
	c.EventDispatcher = d;
	d.prototype.__class__ =
		"egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this.reuseEvent = new c.Event("")
		}
		__extends(a, b);
		a.prototype.run = function() {
			c.Ticker.getInstance().run();
			c.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			c.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		a.prototype.renderLoop = function(e) {
			e = this.rendererContext;
			e.clearScreen();
			if (0 < c.__callLaterFunctionList.length) {
				var a = c.__callLaterFunctionList;
				c.__callLaterFunctionList =
					[];
				var b = c.__callLaterThisList;
				c.__callLaterThisList = [];
				var d = c.__callLaterArgsList;
				c.__callLaterArgsList = []
			}
			this.dispatchEventWith(c.Event.RENDER);
			c.Stage._invalidateRenderFlag && (this.broadcastRender(), c.Stage._invalidateRenderFlag = !1);
			a && this.doCallLaterList(a, b, d);
			this.stage._updateTransform();
			this.dispatchEventWith(c.Event.FINISH_UPDATE_TRANSFORM);
			this.stage._draw(e);
			this.dispatchEventWith(c.Event.FINISH_RENDER)
		};
		a.prototype.broadcastEnterFrame = function(e) {
			e = this.reuseEvent;
			e._type = c.Event.ENTER_FRAME;
			this.dispatchEvent(e);
			for (var a = c.DisplayObject._enterFrameCallBackList.concat(), b = a.length, d = 0; d < b; d++) {
				var f = a[d];
				e._target = f.display;
				e._setCurrentTarget(f.display);
				f.listener.call(f.thisObject, e)
			}
			a = c.Recycler._callBackList;
			for (d = a.length - 1; 0 <= d; d--) a[d]._checkFrame()
		};
		a.prototype.broadcastRender = function() {
			var e = this.reuseEvent;
			e._type = c.Event.RENDER;
			for (var a = c.DisplayObject._renderCallBackList.concat(), b = a.length, d = 0; d < b; d++) {
				var f = a[d];
				e._target = f.display;
				e._setCurrentTarget(f.display);
				f.listener.call(f.thisObject,
					e)
			}
		};
		a.prototype.doCallLaterList = function(e, a, b) {
			for (var c = e.length, d = 0; d < c; d++) {
				var h = e[d];
				null != h && h.apply(a[d], b[d])
			}
		};
		a.DEVICE_PC = "web";
		a.DEVICE_MOBILE = "native";
		return a
	}(c.EventDispatcher);
	c.MainContext = d;
	d.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
	if (!this.navigator) return !0;
	var c = navigator.userAgent.toLowerCase();
	return -1 != c.indexOf("mobile") || -1 != c.indexOf("android")
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
(function(c) {
	var d = function() {
		function b() {
			this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0
		}
		b.getInstance = function() {
			null == b.instance && (b.instance = new b);
			return b.instance
		};
		b.prototype.run = function() {
			c.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new c.TextField, this._txt.size = 28, c.MainContext.instance.stage.addChild(this._txt));
			var a =
				c.MainContext.instance;
			a.addEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
			a.addEventListener(c.Event.RENDER, this.onStartRender, this);
			a.addEventListener(c.Event.FINISH_RENDER, this.onFinishRender, this);
			a.addEventListener(c.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		b.prototype.onEnterFrame = function(a) {
			this._lastTime = c.getTimer()
		};
		b.prototype.onStartRender = function(a) {
			a = c.getTimer();
			this._logicPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		b.prototype.onFinishUpdateTransform =
			function(a) {
				a = c.getTimer();
				this._updateTransformPerformanceCost = a - this._lastTime;
				this._lastTime = a
		};
		b.prototype.onFinishRender = function(a) {
			a = c.getTimer();
			this._renderPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		b.prototype.update = function(a) {
			this._tick++;
			this._totalDeltaTime += a;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				a = (this._preDrawCount - 1).toString();
				var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
					"," + Math.ceil(c.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		b.prototype.onDrawImage = function() {
			this._preDrawCount++
		};
		return b
	}();
	c.Profiler = d;
	d.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(a, b);
		a.prototype.run = function() {
			c.__START_TIME = (new Date).getTime();
			c.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
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
		a.prototype.setTimeout = function(e, a, b) {
			for (var d = [], f = 0; f < arguments.length - 3; f++) d[f] = arguments[f + 3];
			c.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			c.setTimeout.apply(null, [e, a, b].concat(d))
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
	}(c.EventDispatcher);
	c.Ticker = d;
	d.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.LEFT = "left";
		b.RIGHT = "right";
		b.CENTER = "center";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	c.HorizontalAlign = d;
	d.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.TOP = "top";
		b.BOTTOM = "bottom";
		b.MIDDLE = "middle";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	c.VerticalAlign = d;
	d.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a) {
			"undefined" === typeof a && (a = 0);
			b.call(this);
			this._currentCount = 0;
			this.delay = e;
			this.repeatCount = a
		}
		__extends(a, b);
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
			this._running || (this.lastTime = c.getTimer(), 0 != this._currentCount && (this._currentCount =
				0), c.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		a.prototype.stop = function() {
			this._running && (c.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		a.prototype.onEnterFrame = function(e) {
			e = c.getTimer();
			e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER_COMPLETE)))
		};
		return a
	}(c.EventDispatcher);
	c.Timer = d;
	d.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(c) {
	c.getQualifiedClassName = function(c) {
		c = c.prototype ? c.prototype : c.__proto__;
		if (c.hasOwnProperty("__class__")) return c.__class__;
		var b = c.constructor.toString(),
			a = b.indexOf("("),
			b = b.substring(9, a);
		return c.__class__ = b
	}
})(egret || (egret = {}));
(function(c) {
	var d = {};
	c.getDefinitionByName = function(b) {
		if (!b) return null;
		var a = d[b];
		if (a) return a;
		for (var e = b.split("."), g = e.length, a = __global, c = 0; c < g; c++)
			if (a = a[e[c]], !a) return null;
		return d[b] = a
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(c) {
	function d(e) {
		for (var a in b) {
			var c = b[a];
			c.delay -= e;
			0 >= c.delay && (c.listener.apply(c.thisObject, c.params), delete b[a])
		}
	}
	var b = {},
		a = 0;
	c.setTimeout = function(e, g, q) {
		for (var l = [], f = 0; f < arguments.length - 3; f++) l[f] = arguments[f + 3];
		l = {
			listener: e,
			thisObject: g,
			delay: q,
			params: l
		};
		0 == a && c.Ticker.getInstance().register(d, null);
		a++;
		b[a] = l;
		return a
	};
	c.clearTimeout = function(e) {
		delete b[e]
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
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, c, d, f, h) {
			"undefined" === typeof e && (e = 1);
			"undefined" === typeof a && (a = 0);
			"undefined" === typeof c && (c = 0);
			"undefined" === typeof d && (d = 1);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof h && (h = 0);
			b.call(this);
			this.a = e;
			this.b = a;
			this.c = c;
			this.d = d;
			this.tx = f;
			this.ty = h
		}
		__extends(a, b);
		a.prototype.prepend = function(e, a, b, c, d, h) {
			var k = this.tx;
			if (1 != e || 0 != a || 0 != b || 1 != c) {
				var m = this.a,
					n = this.c;
				this.a = m * e + this.b * b;
				this.b = m * a + this.b * c;
				this.c = n * e + this.d * b;
				this.d = n * a + this.d *
					c
			}
			this.tx = k * e + this.ty * b + d;
			this.ty = k * a + this.ty * c + h;
			return this
		};
		a.prototype.append = function(e, a, b, c, d, h) {
			var k = this.a,
				m = this.b,
				n = this.c,
				p = this.d;
			this.a = e * k + a * n;
			this.b = e * m + a * p;
			this.c = b * k + c * n;
			this.d = b * m + c * p;
			this.tx = d * k + h * n + this.tx;
			this.ty = d * m + h * p + this.ty;
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
		a.prototype.prependTransform = function(e, g, b, c, d, h, k, m, n) {
			if (d %
				360) {
				var p = d * a.DEG_TO_RAD;
				d = Math.cos(p);
				p = Math.sin(p)
			} else d = 1, p = 0; if (m || n) this.tx -= m, this.ty -= n;
			h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.prepend(d * b, p * b, -p * c, d * c, 0, 0), this.prepend(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, g)) : this.prepend(d * b, p * b, -p * c, d * c, e, g);
			return this
		};
		a.prototype.appendTransform = function(e, g, b, c, d, h, k, m, n) {
			if (d % 360) {
				var p = d * a.DEG_TO_RAD;
				d = Math.cos(p);
				p = Math.sin(p)
			} else d = 1, p = 0;
			h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.append(Math.cos(k), Math.sin(k), -Math.sin(h),
				Math.cos(h), e, g), this.append(d * b, p * b, -p * c, d * c, 0, 0)) : this.append(d * b, p * b, -p * c, d * c, e, g);
			if (m || n) this.tx -= m * this.a + n * this.c, this.ty -= m * this.b + n * this.d;
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
		a.prototype.skew = function(e, g) {
			e *= a.DEG_TO_RAD;
			g *= a.DEG_TO_RAD;
			this.append(Math.cos(g), Math.sin(g), -Math.sin(e),
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
				h = e * c - a * b;
			this.a = c / h;
			this.b = -a / h;
			this.c = -b / h;
			this.d = e / h;
			this.tx = (b * this.ty - c * d) / h;
			this.ty = -(e * this.ty - a * d) / h;
			return this
		};
		a.transformCoords = function(e, a, b) {
			var d = c.Point.identity;
			d.x = e.a * a + e.c * b + e.tx;
			d.y = e.d * b + e.b * a + e.ty;
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
	}(c.HashObject);
	c.Matrix = d;
	d.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.HashObject);
	c.Point = d;
	d.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(e, a, c, d) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			"undefined" === typeof c && (c = 0);
			"undefined" === typeof d && (d = 0);
			b.call(this);
			this.x = e;
			this.y = a;
			this.width = c;
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
	}(c.HashObject);
	c.Rectangle = d;
	d.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.fatal = function(a, e) {
			"undefined" === typeof e && (e = null);
			c.Logger.traceToConsole("Fatal", a, e);
			throw Error(c.Logger.getTraceCode("Fatal", a, e));
		};
		b.info = function(a, e) {
			"undefined" === typeof e && (e = null);
			c.Logger.traceToConsole("Info", a, e)
		};
		b.warning = function(a, e) {
			"undefined" === typeof e && (e = null);
			c.Logger.traceToConsole("Warning", a, e)
		};
		b.traceToConsole = function(a, e, g) {
			console.log(c.Logger.getTraceCode(a, e, g))
		};
		b.getTraceCode = function(a, e, g) {
			return "[" + a + "]" + e + ":" +
				(null == g ? "" : g)
		};
		return b
	}();
	c.Logger = d;
	d.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(a, b);
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
			null == a && c.Logger.info("xml not found!");
			return a
		};
		a._instance = null;
		return a
	}(c.HashObject);
	c.SAXParser = d;
	d.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(e) {
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
			g && (c.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
				this._setResolutionPolicy(g))
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
	}(c.HashObject);
	c.StageDelegate = d;
	d.prototype.__class__ = "egret.StageDelegate";
	var b = function() {
		function e(a, g) {
			this.setContainerStrategy(a);
			this.setContentStrategy(g)
		}
		e.prototype.init = function(e) {
			this._containerStrategy.init(e);
			this._contentStrategy.init(e)
		};
		e.prototype._apply = function(e, a, g) {
			this._containerStrategy._apply(e, a, g);
			this._contentStrategy._apply(e, a, g)
		};
		e.prototype.setContainerStrategy = function(e) {
			e instanceof a && (this._containerStrategy = e)
		};
		e.prototype.setContentStrategy = function(e) {
			e instanceof g && (this._contentStrategy = e)
		};
		return e
	}();
	c.ResolutionPolicy = b;
	b.prototype.__class__ = "egret.ResolutionPolicy";
	var a = function() {
		function a() {}
		a.initialize =
			function() {
				a.EQUAL_TO_FRAME = new e
		};
		a.prototype.init = function(e) {};
		a.prototype._apply = function(e, a, g) {};
		a.prototype._setupContainer = function() {
			var e = document.body,
				a;
			e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight =
				a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
		};
		return a
	}();
	c.ContainerStrategy = a;
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
	c.EqualToFrame = e;
	e.prototype.__class__ = "egret.EqualToFrame";
	var g = function() {
		function e() {}
		e.prototype.init = function(e) {};
		e.prototype._apply = function(e, a, g) {};
		return e
	}();
	c.ContentStrategy =
		g;
	g.prototype.__class__ = "egret.ContentStrategy";
	b = function(e) {
		function a(g) {
			"undefined" === typeof g && (g = 0);
			e.call(this);
			this.minWidth = g
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, g) {
			a = document.getElementById(d.canvas_name);
			var b = document.getElementById(d.canvas_div_name),
				c = document.documentElement.clientWidth,
				q = document.documentElement.clientHeight,
				l = q / g,
				r = c / l,
				s = 1;
			0 != this.minWidth && (s = Math.min(1, r / this.minWidth));
			a.width = r / s;
			a.height = g;
			a.style.width = c + "px";
			a.style.height = q * s + "px";
			b.style.width =
				c + "px";
			b.style.height = q * s + "px";
			e._scaleX = l * s;
			e._scaleY = l * s
		};
		return a
	}(g);
	c.FixedHeight = b;
	b.prototype.__class__ = "egret.FixedHeight";
	b = function(e) {
		function a(g) {
			"undefined" === typeof g && (g = 0);
			e.call(this);
			this.minHeight = g
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, g) {
			g = document.getElementById(d.canvas_name);
			var b = document.getElementById(d.canvas_div_name),
				c = document.documentElement.clientWidth,
				q = document.documentElement.clientHeight,
				l = c / a,
				r = q / l,
				s = 1;
			0 != this.minHeight && (s = Math.min(1, r / this.minHeight));
			g.width = a;
			g.height = r / s;
			g.style.width = c * s + "px";
			g.style.height = q + "px";
			b.style.width = c * s + "px";
			b.style.height = q + "px";
			e._scaleX = l * s;
			e._scaleY = l * s
		};
		return a
	}(g);
	c.FixedWidth = b;
	b.prototype.__class__ = "egret.FixedWidth";
	b = function(e) {
		function a(g, b) {
			e.call(this);
			this.width = g;
			this.height = b
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, g) {
			g = document.getElementById(d.canvas_name);
			var b = document.getElementById(d.canvas_div_name),
				c = this.width,
				q = this.height,
				l = c / a;
			g.width = a;
			g.height = q / l;
			g.style.width = c + "px";
			g.style.height =
				q + "px";
			b.style.width = c + "px";
			b.style.height = q + "px";
			e._scaleX = l;
			e._scaleY = l
		};
		return a
	}(g);
	c.FixedSize = b;
	b.prototype.__class__ = "egret.FixedSize";
	b = function(e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, g) {
			a = document.getElementById(d.canvas_name);
			a.style.width = a.width + "px";
			a.style.height = a.height + "px";
			e._scaleX = 1;
			e._scaleY = 1
		};
		return a
	}(g);
	c.NoScale = b;
	b.prototype.__class__ = "egret.NoScale"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(a, b);
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
		a.prototype.drawImage = function(e, a, b, d, f, h, k, m, n, p) {
			k = k || 0;
			m = m || 0;
			var t = a._texture_to_render;
			if (null != t && 0 != h && 0 != f && 0 != n && 0 != p)
				if (a._worldBounds) {
					var r = this._originalData;
					r.sourceX =
						b;
					r.sourceY = d;
					r.sourceWidth = f;
					r.sourceHeight = h;
					r.destX = k;
					r.destY = m;
					r.destWidth = n;
					r.destHeight = p;
					for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
						var v = s[u];
						if (!this.ignoreRender(a, v, r.destX, r.destY)) {
							if (0 != this._drawAreaList.length)
								if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
									if (a._worldBounds.x + r.destX < v.x || a._worldBounds.y + r.destY < v.y || a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height) {
										c.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
										break
									}
								} else {
									var x = a._worldTransform.a,
										y = a._worldTransform.d,
										w;
									a._worldBounds.x + r.destX < v.x && (w = (v.x - a._worldBounds.x) / x - r.destX, b += w / (n / f), f -= w / (n / f), n -= w, k += w);
									a._worldBounds.y + r.destY < v.y && (w = (v.y - a._worldBounds.y) / y - r.destY, d += w / (p / h), h -= w / (p / h), p -= w, m += w);
									a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + r.destX, f -= w / (n / f), n -= w);
									a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height -
										v.y - v.height) / y + r.destY, h -= w / (p / h), p -= w)
								}
							e.drawImage(t, b, d, f, h, k, m, n, p)
						}
					}
				} else e.drawImage(t, b, d, f, h, k, m, n, p)
		};
		a.prototype.ignoreRender = function(e, a, b, c) {
			var d = e._worldBounds;
			b *= e._worldTransform.a;
			c *= e._worldTransform.d;
			return d.x + d.width + b <= a.x || d.x + b >= a.x + a.width || d.y + d.height + c <= a.y || d.y + c >= a.y + a.height ? !0 : !1
		};
		a.prototype.getDrawAreaList = function() {
			var e;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new c.Rectangle(0, 0, c.MainContext.instance.stage.stageWidth,
				c.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
			return e
		};
		return a
	}(c.HashObject);
	c.RenderFilter = d;
	d.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.mapClass = function(a, e, g) {
			"undefined" === typeof g && (g = "");
			a = this.getKey(a) + "#" + g;
			this.mapClassDic[a] = e
		};
		b.getKey = function(a) {
			return "string" == typeof a ? a : c.getQualifiedClassName(a)
		};
		b.mapValue = function(a, e, g) {
			"undefined" === typeof g && (g = "");
			a = this.getKey(a) + "#" + g;
			this.mapValueDic[a] = e
		};
		b.hasMapRule = function(a, e) {
			"undefined" === typeof e && (e = "");
			var g = this.getKey(a) + "#" + e;
			return this.mapValueDic[g] || this.mapClassDic[g] ? !0 : !1
		};
		b.getInstance = function(a, e) {
			"undefined" ===
				typeof e && (e = "");
			var g = this.getKey(a) + "#" + e;
			if (this.mapValueDic[g]) return this.mapValueDic[g];
			var b = this.mapClassDic[g];
			if (b) return b = new b, this.mapValueDic[g] = b, delete this.mapClassDic[g], b;
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + g + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		b.mapClassDic = {};
		b.mapValueDic = {};
		return b
	}();
	c.Injector =
		d;
	d.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.NORMAL = "normal";
		b.ADD = "add";
		b.LAYER = "layer";
		return b
	}();
	c.BlendMode = d;
	d.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
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
			this._worldTransform = new c.Matrix;
			this._cacheBounds = new c.Rectangle(0, 0, 0, 0)
		}
		__extends(a, b);
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
				c.NumberUtils.isNumber(e) && (this._x = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "y", {
			get: function() {
				return this._y
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(),
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
				c.NumberUtils.isNumber(e) && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scaleY", {
			get: function() {
				return this._scaleY
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
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
					c.NumberUtils.isNumber(e) && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorX", {
			get: function() {
				return this._anchorX
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorY", {
			get: function() {
				return this._anchorY
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
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
				c.NumberUtils.isNumber(e) && (this._rotation = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) && (this._alpha = e, this._setDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "skewX", {
			get: function() {
				return this._skewX
			},
			set: function(e) {
				c.NumberUtils.isNumber(e) &&
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
				c.NumberUtils.isNumber(e) && (this._skewY = e, this._setSizeDirty())
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
				return this._getSize(c.Rectangle.identity).width
			},
			set: function(e) {
				this._setWidth(e)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "height", {
			get: function() {
				return this._getSize(c.Rectangle.identity).height
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
			this._hasWidthSet = c.NumberUtils.isNumber(e)
		};
		a.prototype._setHeight = function(e) {
			this._setSizeDirty();
			this._explicitHeight = e;
			this._hasHeightSet = c.NumberUtils.isNumber(e)
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
					b = a._offsetX,
					d = a._offsetY,
					f = a._textureWidth,
					a = a._textureHeight;
				this._updateTransform();
				e.setAlpha(this.worldAlpha, this.blendMode);
				e.setTransform(this._worldTransform);
				var h = c.MainContext.instance.rendererContext.texture_scale_factor;
				c.RenderFilter.getInstance().drawImage(e, this, 0, 0, f * h, a * h, b, d, f, a);
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
				b = this._hasWidthSet ? this._explicitWidth : a.width,
				d = this._hasHeightSet ? this._explicitHeight : a.height,
				f = a.x,
				a = a.y,
				h, k;
			0 != this._anchorX || 0 != this._anchorY ? (h = b * this._anchorX, k = d * this._anchorY) :
				(h = this._anchorOffsetX, k = this._anchorOffsetY);
			this._cacheBounds.initialize(f - h, a - k, b, d);
			b = this._cacheBounds;
			e || (e = new c.Rectangle);
			return e.initialize(b.x, b.y, b.width, b.height)
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
					var b = g._getSize(c.Rectangle.identity);
					e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, b.width * g._anchorX, b.height * g._anchorY)
				} else e.prependTransform(g._x, g._y, g._scaleX, g._scaleY, g._rotation, g._skewX, g._skewY, g._anchorOffsetX, g._anchorOffsetY);
				g = g._parent
			}
			return e
		};
		a.prototype.localToGlobal = function(e, a, b) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			var d = this._getConcatenatedMatrix();
			d.append(1, 0, 0, 1, e, a);
			b || (b = new c.Point);
			b.x = d.tx;
			b.y = d.ty;
			return b
		};
		a.prototype.globalToLocal = function(e,
			a, b) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			var d = this._getConcatenatedMatrix();
			d.invert();
			d.append(1, 0, 0, 1, e, a);
			b || (b = new c.Point);
			b.x = d.tx;
			b.y = d.ty;
			return b
		};
		a.prototype.hitTest = function(e, a, b) {
			"undefined" === typeof b && (b = !1);
			if (!this.visible || !b && !this._touchEnabled) return null;
			b = this._getSize(c.Rectangle.identity);
			return 0 <= e && e < b.width && 0 <= a && a < b.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <=
				e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this : null : this : null
		};
		a.prototype.hitTestPoint = function(e, a, b) {
			e = this.globalToLocal(e, a);
			return b ? (this._hitTestPointTexture || (this._hitTestPointTexture = new c.RenderTexture), b = this._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
		};
		a.prototype._getMatrix = function() {
			var e = c.Matrix.identity.identity(),
				a = this._getOffsetPoint();
			e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a.x, a.y);
			return e
		};
		a.prototype._getSize = function(e) {
			return this._hasHeightSet && this._hasWidthSet ? e.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(c.Rectangle.identity)
		};
		a.prototype._measureSize = function(e) {
			this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW, e.height = this._rectH);
			return e
		};
		a.prototype._measureBounds = function() {
			return c.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		a.prototype._getOffsetPoint = function() {
			var e = this._anchorOffsetX,
				a = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(c.Rectangle.identity), e = this._anchorX * a.width, a = this._anchorY * a.height;
			var b = c.Point.identity;
			b.x = e;
			b.y = a;
			return b
		};
		a.prototype._onAddToStage = function() {
			this._stage = c.MainContext.instance.stage;
			c.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		a.prototype._onRemoveFromStage =
			function() {
				this._stage = null;
				c.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(a.prototype, "stage", {
			get: function() {
				return this._stage
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.addEventListener = function(e, g, d, l, f) {
			"undefined" === typeof l && (l = !1);
			"undefined" === typeof f && (f = 0);
			b.prototype.addEventListener.call(this, e, g, d, l, f);
			((l = e == c.Event.ENTER_FRAME) || e == c.Event.RENDER) && this._insertEventBin(l ? a._enterFrameCallBackList : a._renderCallBackList, g, d, f)
		};
		a.prototype.removeEventListener =
			function(e, g, d, l) {
				"undefined" === typeof l && (l = !1);
				b.prototype.removeEventListener.call(this, e, g, d, l);
				((l = e == c.Event.ENTER_FRAME) || e == c.Event.RENDER) && this._removeEventBin(l ? a._enterFrameCallBackList : a._renderCallBackList, g, d)
		};
		a.prototype.dispatchEvent = function(e) {
			if (!e._bubbles) return b.prototype.dispatchEvent.call(this, e);
			for (var a = [], c = this; c;) a.unshift(c), c = c.parent;
			for (var d = a.length, c = d - 1, d = d - 2; 0 <= d; d--) a.push(a[d]);
			e._reset();
			this._dispatchPropagationEvent(e, a, c);
			return !e.isDefaultPrevented()
		};
		a.prototype._dispatchPropagationEvent = function(a, g, b) {
			for (var c = g.length, d = 0; d < c; d++) {
				var h = g[d];
				a._setCurrentTarget(h);
				a._target = this;
				a._eventPhase = d < b ? 1 : d == b ? 2 : 3;
				h._notifyListener(a);
				if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
			}
		};
		a.prototype.willTrigger = function(a) {
			for (var g = this; g;) {
				if (g.hasEventListener(a)) return !0;
				g = g._parent
			}
			return !1
		};
		Object.defineProperty(a.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap
			},
			set: function(a) {
				(this._cacheAsBitmap = a) ? (this.renderTexture ||
					(this.renderTexture = new c.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		a.getTransformBounds = function(a, g) {
			var b, c, d = a.width,
				h = a.height,
				k = d * g.a,
				d = d * g.b,
				m = h * g.c,
				h = h * g.d,
				n = g.tx,
				p = g.ty,
				t = n,
				r = n,
				s = p,
				u = p;
			(b = k + n) < t ? t = b : b > r && (r = b);
			(b = k + m + n) < t ? t = b : b > r && (r = b);
			(b = m + n) < t ? t = b : b > r && (r = b);
			(c = d + p) < s ? s = c : c > u && (u = c);
			(c = d + h + p) < s ? s = c : c > u && (u = c);
			(c = h + p) < s ? s = c : c > u && (u = c);
			return a.initialize(t, s, r - t, u - s)
		};
		a.identityMatrixForGetConcatenated =
			new c.Matrix;
		a._enterFrameCallBackList = [];
		a._renderCallBackList = [];
		return a
	}(c.EventDispatcher);
	c.DisplayObject = d;
	d.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(a) {
				this._touchChildren = a
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
		a.prototype.setChildIndex = function(a, g) {
			this.doSetChildIndex(a, g)
		};
		a.prototype.doSetChildIndex = function(a,
			g) {
			var b = this._children.indexOf(a);
			0 > b && c.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(b, 1);
			0 > g || this._children.length <= g ? this._children.push(a) : this._children.splice(g, 0, a)
		};
		a.prototype.addChild = function(a) {
			var g = this.numChildren;
			a._parent == this && g--;
			return this._doAddChild(a, g)
		};
		a.prototype.addChildAt = function(a, g) {
			return this._doAddChild(a, g)
		};
		a.prototype._doAddChild = function(e, g, b) {
			"undefined" === typeof b && (b = !0);
			if (e == this) return e;
			if (0 > g || g > this._children.length) return c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
				e;
			var d = e.parent;
			if (d == this) return this.doSetChildIndex(e, g), e;
			d && d.removeChild(e);
			this._children.splice(g, 0, e);
			e._parentChanged(this);
			b && e.dispatchEventWith(c.Event.ADDED, !0);
			if (this._stage)
				for (e._onAddToStage(), g = a.__EVENT__ADD_TO_STAGE_LIST; 0 < g.length;) g.shift().dispatchEventWith(c.Event.ADDED_TO_STAGE);
			e._setDirty();
			this._setSizeDirty();
			return e
		};
		a.prototype.removeChild = function(a) {
			a = this._children.indexOf(a);
			if (0 <= a) return this._doRemoveChild(a);
			c.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null
		};
		a.prototype.removeChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
			c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype._doRemoveChild = function(e, g) {
			"undefined" === typeof g && (g = !0);
			var b = this._children,
				d = b[e];
			g && d.dispatchEventWith(c.Event.REMOVED, !0);
			if (this._stage) {
				d._onRemoveFromStage();
				for (var f = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) f.shift().dispatchEventWith(c.Event.REMOVED_FROM_STAGE)
			}
			d._parentChanged(null);
			b.splice(e, 1);
			this._setSizeDirty();
			return d
		};
		a.prototype.getChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._children[a];
			c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype.contains = function(a) {
			for (; a;) {
				if (a == this) return !0;
				a = a._parent
			}
			return !1
		};
		a.prototype.swapChildrenAt = function(a, g) {
			0 <= a && a < this._children.length && 0 <= g && g < this._children.length ? this._swapChildrenAt(a, g) : c.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
		};
		a.prototype.swapChildren = function(a, g) {
			var b = this._children.indexOf(a),
				d = this._children.indexOf(g); - 1 == b || -1 == d ? c.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(b, d)
		};
		a.prototype._swapChildrenAt = function(a, g) {
			if (a != g) {
				var b = this._children,
					c = b[a];
				b[a] = b[g];
				b[g] = c
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
					b.prototype._updateTransform.call(this);
					for (var a = 0, g = this._children.length; a < g; a++) this._children[a]._updateTransform()
				}
		};
		a.prototype._render = function(a) {
			for (var g = 0, b = this._children.length; g < b; g++) this._children[g]._draw(a)
		};
		a.prototype._measureBounds = function() {
			for (var a = 0, g = 0, b = 0, d = 0, f = this._children.length, h = 0; h < f; h++) {
				var k = this._children[h],
					m;
				if (k.visible && (m = c.DisplayObject.getTransformBounds(k._getSize(c.Rectangle.identity), k._getMatrix()))) {
					var k = m.x,
						n = m.y,
						p =
						m.width + m.x,
						t = m.height + m.y;
					if (k < a || 0 == h) a = k;
					if (p > g || 0 == h) g = p;
					if (n < b || 0 == h) b = n;
					if (t > d || 0 == h) d = t
				}
			}
			return c.Rectangle.identity.initialize(a, b, g - a, d - b)
		};
		a.prototype.hitTest = function(a, g, d) {
			"undefined" === typeof d && (d = !1);
			var l;
			if (!this.visible) return null;
			if (this._scrollRect) {
				if (0 > a || 0 > g || a > this._scrollRect.width || g > this._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > g || g > this.mask.y + this.mask.height)) return null;
			for (var f = this._children, h =
				this._touchChildren, k = f.length - 1; 0 <= k; k--) {
				var m = f[k],
					n = m,
					p = n._getOffsetPoint(),
					t = n._x,
					r = n._y;
				this._scrollRect && (t -= this._scrollRect.x, r -= this._scrollRect.y);
				n = c.Matrix.identity.identity().prependTransform(t, r, n._scaleX, n._scaleY, n._rotation, 0, 0, p.x, p.y);
				n.invert();
				n = c.Matrix.transformCoords(n, a, g);
				if (m = m.hitTest(n.x, n.y, !0)) {
					if (m._touchEnabled && h) return m;
					if (this._touchEnabled) return this;
					null == l && (l = m)
				}
			}
			return l ? l : b.prototype.hitTest.call(this, a, g, d)
		};
		a.prototype._onAddToStage = function() {
			b.prototype._onAddToStage.call(this);
			for (var a = this.numChildren, g = 0; g < a; g++) this._children[g]._onAddToStage()
		};
		a.prototype._onRemoveFromStage = function() {
			b.prototype._onRemoveFromStage.call(this);
			for (var a = this.numChildren, g = 0; g < a; g++) this._children[g]._onRemoveFromStage()
		};
		a.prototype.getChildByName = function(a) {
			for (var g = this._children, b = this.numChildren, c, d = 0; d < b; d++)
				if (c = g[d], c.name == a) return c;
			return null
		};
		a.__EVENT__ADD_TO_STAGE_LIST = [];
		a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return a
	}(c.DisplayObject);
	c.DisplayObjectContainer = d;
	d.prototype.__class__ =
		"egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a, g) {
			"undefined" === typeof a && (a = 480);
			"undefined" === typeof g && (g = 800);
			b.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = a;
			this._stageHeight = g
		}
		__extends(a, b);
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
					var g = {};
					g[c.StageScaleMode.NO_SCALE] = new c.NoScale;
					g[c.StageScaleMode.SHOW_ALL] =
						new c.FixedWidth;
					a = g[a];
					if (!a) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
					g = new c.EqualToFrame;
					a = new c.ResolutionPolicy(g, a);
					c.StageDelegate.getInstance()._setResolutionPolicy(a);
					a = document.getElementById(c.StageDelegate.canvas_name);
					this._stageWidth = a.width;
					this._stageHeight = a.height;
					this.dispatchEventWith(c.Event.RESIZE)
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
			var b;
			if (!this.visible) return this;
			for (var d = this._children, f = d.length - 1; 0 <= f; f--) {
				var h = b = d[f],
					k = h._getOffsetPoint(),
					h = c.Matrix.identity.identity().prependTransform(h.x, h.y, h.scaleX, h.scaleY, h.rotation, 0, 0, k.x, k.y);
				h.invert();
				h = c.Matrix.transformCoords(h, a, g);
				if ((b = b.hitTest(h.x, h.y, !0)) && b.touchEnabled) return b
			}
			return this
		};
		a.prototype.getBounds = function(a) {
			a || (a = new c.Rectangle);
			return a.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		a.prototype._updateTransform = function() {
			for (var a = 0, g = this._children.length; a < g; a++) this._children[a]._updateTransform()
		};
		a._invalidateRenderFlag = !1;
		return a
	}(c.DisplayObjectContainer);
	c.Stage = d;
	d.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.NO_SCALE = "noScale";
		b.SHOW_ALL = "showAll";
		return b
	}();
	c.StageScaleMode = d;
	d.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.REPEAT = "repeat";
		b.SCALE = "scale";
		return b
	}();
	c.BitmapFillMode = d;
	d.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			b.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.fillMode = "scale";
			a && (this._texture = a, this._setSizeDirty())
		}
		__extends(a, b);
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
			var g = this._texture;
			g ? (this._texture_to_render = g, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : g._textureWidth,
				this._hasHeightSet ? this._explicitHeight : g._textureHeight, this)) : this._texture_to_render = null
		};
		a._drawBitmap = function(e, g, b, d) {
			var f = d._texture_to_render;
			if (f) {
				var h = f._textureWidth,
					k = f._textureHeight;
				if ("scale" == d.fillMode) {
					var m = d.scale9Grid || f.scale9Grid;
					if (m && h - m.width < g && k - m.height < b) a.drawScale9GridImage(e, d, m, g, b);
					else {
						var m = f._offsetX,
							n = f._offsetY,
							p = f._bitmapWidth || h,
							t = f._bitmapHeight || k;
						g /= h;
						m = Math.round(m * g);
						g = Math.round(p * g);
						b /= k;
						n = Math.round(n * b);
						b = Math.round(t * b);
						c.RenderFilter.getInstance().drawImage(e,
							d, f._bitmapX, f._bitmapY, p, t, m, n, g, b)
					}
				} else a.drawRepeatImage(e, d, g, b)
			}
		};
		a.drawRepeatImage = function(a, g, b, d) {
			var f = g._texture_to_render;
			if (f)
				for (var h = f._textureWidth, k = f._textureHeight, m = f._bitmapX, n = f._bitmapY, p = f._bitmapWidth || h, t = f._bitmapHeight || k, r = f._offsetX, f = f._offsetY, s = c.RenderFilter.getInstance(); r < b; r += h)
					for (var u = f; u < d; u += k) {
						var v = Math.min(p, b - r),
							x = Math.min(t, d - u);
						s.drawImage(a, g, m, n, p, t, r, u, v, x)
					}
		};
		a.drawScale9GridImage = function(a, g, b, d, f) {
			var h = g._texture_to_render;
			if (h && b) {
				var k = c.RenderFilter.getInstance(),
					m = h._textureWidth,
					n = h._textureHeight,
					p = h._bitmapX,
					t = h._bitmapY,
					r = h._bitmapWidth || m,
					s = h._bitmapHeight || n,
					u = h._offsetX,
					h = h._offsetY;
				b = c.Rectangle.identity.initialize(b.x - Math.round(u), b.y - Math.round(u), b.width, b.height);
				u = Math.round(u);
				h = Math.round(h);
				d -= m - r;
				f -= n - s;
				b.y == b.bottom && (b.bottom < s ? b.bottom++ : b.y--);
				b.x == b.right && (b.right < r ? b.right++ : b.x--);
				var m = p + b.x,
					n = p + b.right,
					v = r - b.right,
					x = t + b.y,
					y = t + b.bottom,
					w = s - b.bottom,
					z = u + b.x,
					A = h + b.y,
					s = f - (s - b.bottom),
					r = d - (r - b.right);
				k.drawImage(a, g, p, t, b.x, b.y, u, h,
					b.x, b.y);
				k.drawImage(a, g, m, t, b.width, b.y, z, h, r - b.x, b.y);
				k.drawImage(a, g, n, t, v, b.y, u + r, h, d - r, b.y);
				k.drawImage(a, g, p, x, b.x, b.height, u, A, b.x, s - b.y);
				k.drawImage(a, g, m, x, b.width, b.height, z, A, r - b.x, s - b.y);
				k.drawImage(a, g, n, x, v, b.height, u + r, A, d - r, s - b.y);
				k.drawImage(a, g, p, y, b.x, w, u, h + s, b.x, f - s);
				k.drawImage(a, g, m, y, b.width, w, z, h + s, r - b.x, f - s);
				k.drawImage(a, g, n, y, v, w, u + r, h + s, d - r, f - s)
			}
		};
		a.prototype._measureBounds = function() {
			var a = this._texture;
			return a ? c.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth,
				a._textureHeight) : b.prototype._measureBounds.call(this)
		};
		a.debug = !1;
		return a
	}(c.DisplayObject);
	c.Bitmap = d;
	d.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._text = "";
			this._textChanged = !1;
			this._bitmapPool = []
		}
		__extends(a, b);
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
			this.visible && (this._textChanged && this._renderText(), b.prototype._updateTransform.call(this))
		};
		a.prototype._renderText = function(a) {
			var b = a = 0;
			this._textChanged && this.removeChildren();
			for (var d = 0, l = this.text.length; d < l; d++) {
				var f = this.text.charAt(d),
					h = this.spriteSheet.getTexture(f);
				if (null == h) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + f);
				else {
					var f = h._offsetX,
						k = h._offsetY,
						m = h._textureWidth;
					if (this._textChanged) {
						var n = this._bitmapPool[d];
						n || (n = new c.Bitmap, this._bitmapPool.push(n));
						n.texture = h;
						this.addChild(n);
						n.x = a
					}
					a += m + f;
					k + h._textureHeight > b && (b = k + h._textureHeight)
				}
			}
			this._textChanged = !1;
			return c.Rectangle.identity.initialize(0, 0, a, b)
		};
		a.prototype._measureBounds =
			function() {
				return this._renderText(!0)
		};
		return a
	}(c.DisplayObjectContainer);
	c.BitmapText = d;
	d.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {
			this.commandQueue = []
		}
		b.prototype.beginFill = function(a, e) {};
		b.prototype._setStyle = function(a) {};
		b.prototype.drawRect = function(a, e, b, c) {};
		b.prototype.drawCircle = function(a, e, b) {};
		b.prototype.lineStyle = function(a, e, b, c, d, f, h, k) {};
		b.prototype.lineTo = function(a, e) {};
		b.prototype.curveTo = function(a, e, b, c) {};
		b.prototype.moveTo = function(a, e) {};
		b.prototype.clear = function() {};
		b.prototype.endFill = function() {};
		b.prototype._draw = function(a) {};
		return b
	}();
	c.Graphics = d;
	d.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(b, a, e) {
			this.method = b;
			this.thisObject = a;
			this.args = e
		}
	})().prototype.__class__ = "Command"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this)
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
			this._graphics && this._graphics._draw(a)
		};
		return a
	}(c.DisplayObject);
	c.Shape = d;
	d.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this)
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
		return a
	}(c.DisplayObjectContainer);
	c.Sprite = d;
	d.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
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
		__extends(a, b);
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
				this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = c.toColorString(a))
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor
			},
			set: function(a) {
				this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = c.toColorString(a))
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
			return this.drawText(c.MainContext.instance.rendererContext, !0)
		};
		a.prototype.drawText = function(a, b) {
			var d = this.getTextLines(a);
			if (!d) return c.Rectangle.identity.initialize(0, 0, 0, 0);
			var l = d.length,
				f = 0.5 * this._size,
				h = this._size + this._lineSpacing,
				k = l * h - this._lineSpacing;
			this._textHeight = k;
			var m = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY;
			if (this._hasHeightSet && k < m) {
				var n = 0;
				this._verticalAlign == c.VerticalAlign.MIDDLE ? n = 0.5 : this._verticalAlign == c.VerticalAlign.BOTTOM && (n = 1);
				f += n * (m - k)
			}
			var n = f = Math.round(f),
				p = 0;
			this._textAlign == c.HorizontalAlign.CENTER ? p = 0.5 : this._textAlign == c.HorizontalAlign.RIGHT && (p = 1);
			var t = this.measuredWidths,
				r;
			r = this._hasWidthSet ? this._explicitWidth : this._textWidth;
			for (var s = Number.POSITIVE_INFINITY, u = 0; u < l; u++) {
				var v = d[u],
					x = Math.round((r - t[u]) * p);
				x < s && (s = x);
				!b && f < m && a.drawText(this, v, x, f, r);
				f += h
			}
			return c.Rectangle.identity.initialize(s, n, r, k)
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
				for (var h = this._explicitWidth, k = 0; k < d; k++) {
					var m = b[k],
						n = a.measureText(m);
					if (n > h) {
						for (var p = "", t = 0, r = m.length, s = 0; s < r; s++) {
							var u = m.charAt(s),
								n = a.measureText(u);
							t + n > h && (0 == t ? (b.splice(k, 0, u), c[k] = n, f < n && (f = n), n = 0, u = "") : (b.splice(k, 0, p), c[k] = t, f < t && (f = t), p = "", t = 0), k++, d++);
							t += n;
							p += u
						}
						b[k] = p;
						c[k] = t
					} else c[k] = n, f < n && (f = n)
				} else
					for (k = 0; k < d; k++) m = b[k], n = a.measureText(m), c[k] = n, f < n && (f = n);
			this._textWidth = f;
			return b
		};
		return a
	}(c.DisplayObject);
	c.TextField = d;
	d.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.DYNAMIC = "dynamic";
		b.INPUT = "input";
		return b
	}();
	c.TextFieldType = d;
	d.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			b.call(this);
			var g = a.bitmapData;
			this.bitmapData = g;
			this._textureMap = {};
			this._sourceWidth = g.width;
			this._sourceHeight = g.height;
			this._bitmapX = a._bitmapX - a._offsetX;
			this._bitmapY = a._bitmapY - a._offsetY
		}
		__extends(a, b);
		a.prototype.getTexture = function(a) {
			return this._textureMap[a]
		};
		a.prototype.createTexture = function(a, b, d, l, f, h, k, m, n) {
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof k && (k = 0);
			"undefined" === typeof m && (m = h + l);
			"undefined" === typeof n && (n = k + f);
			var p =
				new c.Texture;
			p._bitmapData = this.bitmapData;
			p._bitmapX = this._bitmapX + b;
			p._bitmapY = this._bitmapY + d;
			p._bitmapWidth = l;
			p._bitmapHeight = f;
			p._offsetX = h;
			p._offsetY = k;
			p._textureWidth = m;
			p._textureHeight = n;
			p._sourceWidth = this._sourceWidth;
			p._sourceHeight = this._sourceHeight;
			return this._textureMap[a] = p
		};
		return a
	}(c.HashObject);
	c.SpriteSheet = d;
	d.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.apply(this, arguments);
			this._placeholderText = "";
			this._edFontSize = 14;
			this._textColor = 16711680;
			this._placeholderFontSize = 14;
			this._placeholderColor = 16776960;
			this._preY = this._preX = 0
		}
		__extends(a, b);
		a.prototype._onAddToStage = function() {
			b.prototype._onAddToStage.call(this);
			var a = this.localToGlobal(),
				g = new c.StageText;
			g._open(a.x, a.y, this._explicitWidth, this._explicitHeight);
			this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
			this.stageText =
				g
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
			return c.Rectangle.identity
		};
		a.prototype.hitTest = function(a, b, c) {
			return null
		};
		return a
	}(c.DisplayObject);
	c.TextInput = d;
	d.prototype.__class__ = "egret.TextInput";
	d = function() {
		function b() {}
		b.prototype.editBoxEditingDidBegin = function(a) {};
		b.prototype.editBoxEditingDidEnd = function(a) {};
		b.prototype.editBoxTextChanged = function(a, e) {};
		b.prototype.editBoxReturn = function(a) {};
		return b
	}();
	c.TextInputDegelete = d;
	d.prototype.__class__ = "egret.TextInputDegelete"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
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
			for (var b = this.getConfigByKey(a[3], "count"), c = {}, d = 4; d < 4 + b; d++) {
				var f = a[d],
					h = String.fromCharCode(this.getConfigByKey(f,
						"id")),
					k = {};
				c[h] = k;
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
				var h = c[d];
				if (b == h.substring(0, b.length)) return c = h.substring(b.length + 1), parseInt(c)
			}
			return 0
		};
		return a
	}(c.SpriteSheet);
	c.BitmapTextSpriteSheet = d;
	d.prototype.__class__ =
		"egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(a) {
		function e(e, d) {
			a.call(this);
			this.frameRate = 60;
			e instanceof b ? (c.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new b(e, d);
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
			c.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose()
		};
		e.prototype.getCurrentFrameIndex = function() {
			c.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex
		};
		e.prototype.getTotalFrame = function() {
			c.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame
		};
		e.prototype.setInterval = function(a) {
			c.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / a
		};
		e.prototype.getIsPlaying = function() {
			c.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying
		};
		return e
	}(c.DisplayObjectContainer);
	c.MovieClip = d;
	d.prototype.__class__ = "egret.MovieClip";
	var b = function() {
		function a(a, b) {
			this.data = a;
			this._currentFrameIndex = this._passTime =
				this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = a;
			this._spriteSheet = new c.SpriteSheet(b)
		}
		a.prototype.setMovieClip = function(a) {
			this.movieClip = a;
			this.bitmap = new c.Bitmap;
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
			c.Ticker.getInstance().register(this.update, this)
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
			c.Ticker.getInstance().unregister(this.update, this)
		};
		a.prototype.dispose = function() {};
		a.prototype.checkHasFrame = function(a) {
			void 0 == this._frameData.frames[a] && c.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
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
	c.DefaultMovieClipDelegate = b;
	b.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
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
		a.prototype._open = function(a, b, d, l) {
			"undefined" === typeof d && (d = 160);
			"undefined" === typeof l && (l = 21);
			var f = c.StageDelegate.getInstance().getScaleX(),
				h = c.StageDelegate.getInstance().getScaleY(),
				k = document.createElement("input");
			k.type = "text";
			k.style.fontSize = "20px";
			k.style.color = "#FFFFFF";
			k.style.borderStyle = "none";
			k.style.background = "none";
			k.style.width = d * f + "px";
			k.style.height = l * h + "px";
			k.style.outline = "medium";
			var m = c.Browser.getInstance().$new("div");
			m.style.position = "absolute";
			m.position.x = a * f;
			m.style.width = d * f + "px";
			m.style.height = l * h + "px";
			m.position.y = b * h;
			m.transforms();
			m.appendChild(k);
			a = c.Browser.getInstance().$("#StageDelegateDiv");
			a || (d = document.getElementById(c.StageDelegate.canvas_div_name),
				l = d.clientHeight, d = d.clientWidth, a = c.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", a.style.position = "absolute", a.style.width = d + "px", a.style.maxHeight = l + "px", a.style.margin = "0px", document.getElementById(c.StageDelegate.canvas_div_name).appendChild(a), a.position.y = -l, a.transforms());
			a.appendChild(m);
			this.div = m;
			this.inputElement = k
		};
		a.prototype._remove = function() {
			var a = this.div;
			a && a.parentNode && a.parentNode.removeChild(a)
		};
		return a
	}(c.HashObject);
	c.StageText = d;
	d.prototype.__class__ = "egret.StageText"
})(egret ||
	(egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.GET = "GET";
		b.POST = "POST";
		return b
	}();
	c.URLRequestMethod = d;
	d.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.BINARY = "binary";
		b.TEXT = "text";
		b.VARIABLES = "variables";
		b.TEXTURE = "texture";
		b.SOUND = "sound";
		return b
	}();
	c.URLLoaderDataFormat = d;
	d.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.HashObject);
	c.URLVariables = d;
	d.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			"undefined" === typeof a && (a = null);
			b.call(this);
			this.method = c.URLRequestMethod.GET;
			this.url = a
		}
		__extends(a, b);
		return a
	}(c.HashObject);
	c.URLRequest = d;
	d.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			"undefined" === typeof a && (a = null);
			b.call(this);
			this.dataFormat = c.URLLoaderDataFormat.TEXT;
			a && this.load(a)
		}
		__extends(a, b);
		a.prototype.load = function(a) {
			this._request = a;
			this.data = null;
			c.MainContext.instance.netContext.proceed(this)
		};
		return a
	}(c.EventDispatcher);
	c.URLLoader = d;
	d.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(a, b);
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
			var b = c.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * b;
			this._textureHeight = this._sourceHeight * b;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		a.prototype.getPixel32 = function(a, b) {
			return this._bitmapData.getContext("2d").getImageData(a,
				b, 1, 1).data
		};
		return a
	}(c.HashObject);
	c.Texture = d;
	d.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = c.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(a, b);
		a.prototype.drawToTexture = function(a) {
			var b = this._bitmapData,
				d = a.getBounds(c.Rectangle.identity);
			b.width = d.width;
			b.height = d.height;
			a._worldTransform.identity();
			a.worldAlpha = 1;
			if (a instanceof c.DisplayObjectContainer) {
				this._offsetX = d.x;
				this._offsetY = d.y;
				a._worldTransform.append(1, 0, 0, 1, -d.x, -d.y);
				for (var b =
					a._children, d = 0, l = b.length; d < l; d++) b[d]._updateTransform()
			}
			b = c.RenderFilter.getInstance();
			d = b._drawAreaList.concat();
			b._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.webGLTexture = null;
			(l = a.mask || a._scrollRect) && this.renderContext.pushMask(l);
			a._render(this.renderContext);
			l && this.renderContext.popMask();
			b._drawAreaList = d;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight
		};
		return a
	}(c.Texture);
	c.RenderTexture = d;
	d.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1
		}
		__extends(a, b);
		a.prototype.clearScreen = function() {};
		a.prototype.clearRect = function(a, b, c, d) {};
		a.prototype.drawImage = function(a, b, d, l, f, h, k, m, n) {
			c.Profiler.getInstance().onDrawImage()
		};
		a.prototype.setTransform = function(a) {};
		a.prototype.setAlpha = function(a, b) {};
		a.prototype.setupFont = function(a) {};
		a.prototype.measureText = function(a) {
			return 0
		};
		a.prototype.drawText = function(a, b, d, l, f) {
			c.Profiler.getInstance().onDrawImage()
		};
		a.prototype.strokeRect = function(a, b, c, d, f) {};
		a.prototype.pushMask = function(a) {};
		a.prototype.popMask = function() {};
		a.createRendererContext = function(a) {
			return null
		};
		return a
	}(c.HashObject);
	c.RendererContext = d;
	d.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.MOUSE = "mouse";
		b.TOUCH = "touch";
		b.mode = "touch";
		return b
	}();
	c.InteractionMode = d;
	d.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(a, b);
		a.prototype.run = function() {};
		a.prototype.getTouchData = function(a, b, c) {
			var d = this._currentTouchTarget[a];
			null == d && (d = {}, this._currentTouchTarget[a] = d);
			d.stageX = b;
			d.stageY = c;
			d.identifier = a;
			return d
		};
		a.prototype.dispatchEvent = function(a, b) {
			c.TouchEvent.dispatchTouchEvent(b.target, a, b.identifier, b.stageX, b.stageY, !1, !1, !1, !0 ==
				this.touchDownTarget[b.identifier])
		};
		a.prototype.onTouchBegan = function(a, b, d) {
			var l = c.MainContext.instance.stage.hitTest(a, b);
			l && (a = this.getTouchData(d, a, b), this.touchDownTarget[d] = !0, a.target = l, a.beginTarget = l, this.dispatchEvent(c.TouchEvent.TOUCH_BEGIN, a))
		};
		a.prototype.onTouchMove = function(a, b, d) {
			if (a != this.lastTouchX || b != this.lastTouchY) {
				this.lastTouchX = a;
				this.lastTouchY = b;
				var l = c.MainContext.instance.stage.hitTest(a, b);
				l && (a = this.getTouchData(d, a, b), a.target = l, this.dispatchEvent(c.TouchEvent.TOUCH_MOVE,
					a))
			}
		};
		a.prototype.onTouchEnd = function(a, b, d) {
			var l = c.MainContext.instance.stage.hitTest(a, b);
			l && (a = this.getTouchData(d, a, b), delete this.touchDownTarget[d], d = a.beginTarget, a.target = l, this.dispatchEvent(c.TouchEvent.TOUCH_END, a), d == l ? this.dispatchEvent(c.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(c.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return a
	}(c.HashObject);
	c.TouchContext = d;
	d.prototype.__class__ = "egret.TouchContext"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.proceed = function(a) {};
		return a
	}(c.HashObject);
	c.NetContext = d;
	d.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this.frameRate = 60
		}
		__extends(a, b);
		a.prototype.executeMainLoop = function(a, b) {};
		return a
	}(c.HashObject);
	c.DeviceContext = d;
	d.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this.translate = this.isHD ? function(a) {
				return "translate3d(" + a.x + "px, " + (a.y - c.MainContext.instance.stage.stageHeight) + "px, 0) "
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
		__extends(a, b);
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		Object.defineProperty(a.prototype,
			"isMobile", {
				get: function() {
					c.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
					return c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE
				},
				enumerable: !0,
				configurable: !0
			});
		a.prototype.$new = function(a) {
			return this.$(document.createElement(a))
		};
		a.prototype.$ = function(e) {
			var b = document;
			if (e = e instanceof HTMLElement ? e : b.querySelector(e)) e.find = e.find ||
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
					this.position.y = e - c.MainContext.instance.stage.stageHeight;
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
	}(c.HashObject);
	c.Browser = d;
	d.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.parse = function(a) {
			a = c.SAXParser.getInstance().parserXML(a);
			if (!a || !a.childNodes) return null;
			for (var e = a.childNodes.length, d = !1, q = 0; q < e; q++) {
				var l = a.childNodes[q];
				if (1 == l.nodeType) {
					d = !0;
					break
				}
			}
			return d ? b.parseNode(l) : null
		};
		b.parseNode = function(a) {
			if (!a || 1 != a.nodeType) return null;
			var e = {};
			e.localName = a.localName;
			e.name = a.nodeName;
			a.namespaceURI && (e.namespace = a.namespaceURI);
			a.prefix && (e.prefix = a.prefix);
			for (var c = a.attributes, d = c.length, l = 0; l < d; l++) {
				var f = c[l],
					h = f.name;
				0 != h.indexOf("xmlns:") && (e["$" + h] = f.value)
			}
			c = a.childNodes;
			d = c.length;
			for (l = 0; l < d; l++)
				if (f = b.parseNode(c[l])) e.children || (e.children = []), f.parent = e, e.children.push(f);!e.children && (a = a.textContent.trim()) && (e.text = a);
			return e
		};
		b.findChildren = function(a, e, c) {
			c ? c.length = 0 : c = [];
			b.findByPath(a, e, c);
			return c
		};
		b.findByPath = function(a, e, c) {
			var d = e.indexOf("."),
				l; - 1 == d ? (l = e, d = !0) : (l = e.substring(0, d), e = e.substring(d + 1), d = !1);
			if (a = a.children)
				for (var f = a.length, h = 0; h < f; h++) {
					var k = a[h];
					k.localName == l &&
						(d ? c.push(k) : b.findByPath(k, e, c))
				}
		};
		b.getAttributes = function(a, e) {
			e ? e.length = 0 : e = [];
			for (var b in a) "$" == b.charAt(0) && e.push(b.substring(1));
			return e
		};
		return b
	}();
	c.XML = d;
	d.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function a() {}
		a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		a.BIG_ENDIAN = "BIG_ENDIAN";
		return a
	}();
	c.Endian = d;
	d.prototype.__class__ = "egret.Endian";
	var b = function() {
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
					h = c.getUint8(this.position++),
					b = b + String.fromCharCode((d & 15) << 18 | (f & 127) << 12 | h << 6 & 127 | c.getUint8(this.position++) & 127)
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
	c.ByteArray = b;
	b.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a, c, d) {
			b.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(a, c, d)
		}
		__extends(a, b);
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
		a._register = function(e, b) {
			var d = e._target,
				l = a._tweens;
			if (b) d && (d.tween_count = d.tween_count ? d.tween_count + 1 : 1), l.push(e), a._inited || (c.Ticker.getInstance().register(a.tick, null),
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
				for (var h =
					0, k = this._steps.length; h < k && !(this._steps[h].t > c); h++);
				h = this._steps[h - 1];
				this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d)
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
				h = -1,
				k = this._actions.length,
				m = 1;
			a > b && (d = b,
				f = a, h = k, k = m = -1);
			for (;
				(h += m) != k;) {
				b = this._actions[h];
				var n = b.t;
				(n == f || n > d && n < f || c && n == a) && b.f.apply(b.o, b.p)
			}
		};
		a.prototype._updateTargetProps = function(b, c) {
			var d, l, f, h;
			if (b || 1 != c) {
				if (this.passive = !!b.v) return;
				b.e && (c = b.e(c, 0, 1, 1));
				d = b.p0;
				l = b.p1
			} else this.passive = !1, d = l = this._curQueueProps;
			for (var k in this._initQueueProps) {
				null == (f = d[k]) && (d[k] = f = this._initQueueProps[k]);
				null == (h = l[k]) && (l[k] = h = f);
				f = f == h || 0 == c || 1 == c || "number" != typeof f ? 1 == c ? h : f : f + (h - f) * c;
				var m = !1;
				if (h = a._plugins[k])
					for (var n = 0, p = h.length; n <
						p; n++) {
						var t = h[n].tween(this, k, f, d, l, c, !!b && d == l, !b);
						t == a.IGNORE ? m = !0 : f = t
					}
				m || (this._target[k] = f)
			}
		};
		a.prototype.setPaused = function(b) {
			this.paused = b;
			a._register(this, !b);
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
			var c, d, l, f, h, k;
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
					for (h = h || {}, l = 0, f = c.length; l < f; l++) c[l].step && c[l].step(this, k, d, b[k], h);
				this._curQueueProps[k] = b[k]
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
	}(c.EventDispatcher);
	c.Tween = d;
	d.prototype.__class__ = "egret.Tween"
})(egret ||
	(egret = {}));
(function(c) {
	var d = function() {
		function b() {
			c.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
		}
		b.get = function(a) {
			-1 > a && (a = -1);
			1 < a && (a = 1);
			return function(b) {
				return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
			}
		};
		b.getPowIn = function(a) {
			return function(b) {
				return Math.pow(b, a)
			}
		};
		b.getPowOut = function(a) {
			return function(b) {
				return 1 - Math.pow(1 - b, a)
			}
		};
		b.getPowInOut = function(a) {
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
			}
		};
		b.sineIn = function(a) {
			return 1 - Math.cos(a *
				Math.PI / 2)
		};
		b.sineOut = function(a) {
			return Math.sin(a * Math.PI / 2)
		};
		b.sineInOut = function(a) {
			return -0.5 * (Math.cos(Math.PI * a) - 1)
		};
		b.getBackIn = function(a) {
			return function(b) {
				return b * b * ((a + 1) * b - a)
			}
		};
		b.getBackOut = function(a) {
			return function(b) {
				b -= 1;
				return b * b * ((a + 1) * b + a) + 1
			}
		};
		b.getBackInOut = function(a) {
			a *= 1.525;
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
			}
		};
		b.circIn = function(a) {
			return -(Math.sqrt(1 - a * a) - 1)
		};
		b.circOut = function(a) {
			return Math.sqrt(1 - a * a)
		};
		b.circInOut = function(a) {
			return 1 >
				(a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
		};
		b.bounceIn = function(a) {
			return 1 - b.bounceOut(1 - a)
		};
		b.bounceOut = function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
		};
		b.bounceInOut = function(a) {
			return 0.5 > a ? 0.5 * b.bounceIn(2 * a) : 0.5 * b.bounceOut(2 * a - 1) + 0.5
		};
		b.getElasticIn = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				if (0 == d || 1 == d) return d;
				var l = b / c * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 *
					(d -= 1)) * Math.sin((d - l) * c / b))
			}
		};
		b.getElasticOut = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				if (0 == d || 1 == d) return d;
				var l = b / c * Math.asin(1 / a);
				return a * Math.pow(2, -10 * d) * Math.sin((d - l) * c / b) + 1
			}
		};
		b.getElasticInOut = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				var l = b / c * Math.asin(1 / a);
				return 1 > (d *= 2) ? -0.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - l) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - l) * c / b) * 0.5 + 1
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
	c.Ease = d;
	d.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(c) {
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
	c.Sound = d;
	d.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.isNumber = function(a) {
			return "number" === typeof a && !isNaN(a)
		};
		return b
	}();
	c.NumberUtils = d;
	d.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	RES;
(function(c) {
	var d = function(b) {
		function a(a, c, d) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof d && (d = !1);
			b.call(this, a, c, d);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(a, b);
		a.dispatchResourceEvent = function(b, c, d, l, f, h) {
			"undefined" === typeof d && (d = "");
			"undefined" === typeof l && (l = null);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof h && (h = 0);
			var k = egret.Event._getPropertyData(a);
			k.groupName = d;
			k.resItem = l;
			k.itemsLoaded = f;
			k.itemsTotal = h;
			egret.Event._dispatchByTarget(a, b, c, k)
		};
		a.ITEM_LOAD_ERROR =
			"itemLoadError";
		a.CONFIG_COMPLETE = "configComplete";
		a.GROUP_PROGRESS = "groupProgress";
		a.GROUP_COMPLETE = "groupComplete";
		return a
	}(egret.Event);
	c.ResourceEvent = d;
	d.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(c) {
	var d = function() {
		function b(a, b, c) {
			this._loaded = !1;
			this.name = a;
			this.url = b;
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
	c.ResourceItem = d;
	d.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(c) {
	var d = function() {
		function b() {
			this.keyMap = {};
			this.groupDic = {}
		}
		b.prototype.getGroupByName = function(a) {
			var b = [];
			if (!this.groupDic[a]) return b;
			a = this.groupDic[a];
			for (var c = a.length, d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
			return b
		};
		b.prototype.getRawGroupByName = function(a) {
			return this.groupDic[a] ? this.groupDic[a] : []
		};
		b.prototype.createGroup = function(a, b, c) {
			"undefined" === typeof c && (c = !1);
			if (!c && this.groupDic[a] || !b || 0 == b.length) return !1;
			c = this.groupDic;
			for (var d = [], l = b.length, f = 0; f <
				l; f++) {
				var h = b[f],
					k = c[h];
				if (k)
					for (var h = k.length, m = 0; m < h; m++) {
						var n = k[m]; - 1 == d.indexOf(n) && d.push(n)
					} else(n = this.keyMap[h]) && -1 == d.indexOf(n) && d.push(n)
			}
			if (0 == d.length) return !1;
			this.groupDic[a] = d;
			return !0
		};
		b.prototype.parseConfig = function(a, b) {
			if (a) {
				var c = a.resources;
				if (c)
					for (var d = c.length, l = 0; l < d; l++) {
						var f = c[l],
							h = f.url;
						h && -1 == h.indexOf("://") && (f.url = b + h);
						this.addItemToKeyMap(f)
					}
				if (c = a.groups)
					for (d = c.length, l = 0; l < d; l++) {
						for (var h = c[l], k = [], m = h.keys.split(","), n = m.length, p = 0; p < n; p++) f = m[p].trim(), (f = this.keyMap[f]) && -1 == k.indexOf(f) && k.push(f);
						this.groupDic[h.name] = k
					}
			}
		};
		b.prototype.addItemToKeyMap = function(a) {
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
		b.prototype.getName = function(a) {
			return (a = this.keyMap[a]) ? a.name : ""
		};
		b.prototype.getType = function(a) {
			return (a = this.keyMap[a]) ? a.type : ""
		};
		b.prototype.getRawResourceItem = function(a) {
			return this.keyMap[a]
		};
		b.prototype.getResourceItem = function(a) {
			return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
		};
		b.prototype.parseResourceItem = function(a) {
			var b = new c.ResourceItem(a.name, a.url, a.type);
			b.data = a;
			return b
		};
		return b
	}();
	c.ResourceConfig = d;
	d.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
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
		__extends(a, b);
		a.prototype.isGroupInLoading = function(a) {
			return void 0 !== this.itemListDic[a]
		};
		a.prototype.loadGroup = function(a, b, d) {
			"undefined" === typeof d && (d = 0);
			if (!this.itemListDic[b] && b)
				if (a && 0 != a.length) {
					this.priorityQueue[d] ? this.priorityQueue[d].push(b) : this.priorityQueue[d] =
						[b];
					this.itemListDic[b] = a;
					d = a.length;
					for (var l = 0; l < d; l++) a[l].groupName = b;
					this.groupTotalDic[b] = a.length;
					this.numLoadedDic[b] = 0;
					this.next()
				} else a = new c.ResourceEvent(c.ResourceEvent.GROUP_COMPLETE), a.groupName = b, this.dispatchEvent(a)
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
					var b = this.analyzerDic[a.type];
					b || (b = this.analyzerDic[a.type] = egret.Injector.getInstance(c.AnalyzerBase, a.type));
					b.loadFile(a, this.onItemComplete, this)
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
			var b = a.groupName;
			a.loaded || c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.ITEM_LOAD_ERROR, b, a);
			if (b) {
				this.numLoadedDic[b]++;
				var d = this.numLoadedDic[b],
					l = this.groupTotalDic[b];
				c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.GROUP_PROGRESS, b, a, d, l);
				d == l && (this.removeGroupName(b), delete this.groupTotalDic[b], delete this.numLoadedDic[b], delete this.itemListDic[b], c.ResourceEvent.dispatchResourceEvent(this,
					c.ResourceEvent.GROUP_COMPLETE, b))
			} else this.callBack.call(this.resInstance, a);
			this.next()
		};
		a.prototype.removeGroupName = function(a) {
			for (var b in this.priorityQueue) {
				for (var c = this.priorityQueue[b], d = c.length, f = 0, h = !1, d = c.length, k = 0; k < d; k++) {
					if (c[k] == a) {
						c.splice(f, 1);
						h = !0;
						break
					}
					f++
				}
				if (h) {
					0 == c.length && delete this.priorityQueue[b];
					break
				}
			}
		};
		return a
	}(egret.EventDispatcher);
	c.ResourceLoader = d;
	d.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	c.AnalyzerBase = d;
	d.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.AnalyzerBase);
	c.BinAnalyzer = d;
	d.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.BinAnalyzer);
	c.ImageAnalyzer = d;
	d.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.BinAnalyzer);
	c.JsonAnalyzer = d;
	d.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		return a
	}(c.BinAnalyzer);
	c.TextAnalyzer = d;
	d.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.getRes = function(a) {
			var b = this.fileDic[a];
			b || (b = this.textureMap[a]);
			!b && (b = c.AnalyzerBase.getStringPrefix(a), b = this.fileDic[b]) && (a = c.AnalyzerBase.getStringTail(a), b = b.getTexture(a));
			return b
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
				h;
			for (h in c) {
				var k = c[h];
				a = d.createTexture(h, k.x, k.y, k.w, k.h, k.offX, k.offY, k.sourceW, k.sourceH);
				null == f[h] && (f[h] = a)
			}
			return d
		};
		return a
	}(c.BinAnalyzer);
	c.SheetAnalyzer = d;
	d.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.SheetAnalyzer);
	c.FontAnalyzer = d;
	d.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(a, b);
		return a
	}(c.BinAnalyzer);
	c.SoundAnalyzer = d;
	d.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
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
	}(c.BinAnalyzer);
	c.XMLAnalyzer = d;
	d.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	c.loadConfig = function(a, c, d) {
		"undefined" === typeof c && (c = "");
		"undefined" === typeof d && (d = "json");
		b.loadConfig(a, c, d)
	};
	c.loadGroup = function(a, c) {
		"undefined" === typeof c && (c = 0);
		b.loadGroup(a, c)
	};
	c.isGroupLoaded = function(a) {
		return b.isGroupLoaded(a)
	};
	c.getGroupByName = function(a) {
		return b.getGroupByName(a)
	};
	c.createGroup = function(a, c, d) {
		"undefined" === typeof d && (d = !1);
		return b.createGroup(a, c, d)
	};
	c.hasRes = function(a) {
		return b.hasRes(a)
	};
	c.getRes = function(a) {
		return b.getRes(a)
	};
	c.getResAsync =
		function(a, c, d) {
			b.getResAsync(a, c, d)
	};
	c.getResByUrl = function(a, c, d, q) {
		"undefined" === typeof q && (q = "");
		b.getResByUrl(a, c, d, q)
	};
	c.destroyRes = function(a) {
		return b.destroyRes(a)
	};
	c.setMaxLoadingThread = function(a) {
		b.setMaxLoadingThread(a)
	};
	c.addEventListener = function(a, c, d, q, l) {
		"undefined" === typeof q && (q = !1);
		"undefined" === typeof l && (l = 0);
		b.addEventListener(a, c, d, q, l)
	};
	c.removeEventListener = function(a, c, d, q) {
		"undefined" === typeof q && (q = !1);
		b.removeEventListener(a, c, d, q)
	};
	var d = function(a) {
		function b() {
			a.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups = [];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(b, a);
		b.prototype.getAnalyzerByType = function(a) {
			var b = this.analyzerDic[a];
			b || (b = this.analyzerDic[a] = egret.Injector.getInstance(c.AnalyzerBase, a));
			return b
		};
		b.prototype.init = function() {
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(c.AnalyzerBase,
				c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer, c.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase,
				c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
			this.resConfig =
				new c.ResourceConfig;
			this.resLoader = new c.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
		};
		b.prototype.loadConfig = function(a, b, c) {
			"undefined" === typeof c && (c = "json");
			this.configItemList.push({
				url: a,
				resourceRoot: b,
				type: c
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		b.prototype.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var a = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = a;
			for (var d = a.length, l = [], f = 0; f < d; f++) {
				var h = a[f],
					h = new c.ResourceItem(h.url, h.url, h.type);
				l.push(h)
			}
			this.resLoader.loadGroup(l, b.GROUP_CONFIG, Number.MAX_VALUE)
		};
		b.prototype.isGroupLoaded = function(a) {
			return -1 != this.loadedGroups.indexOf(a)
		};
		b.prototype.getGroupByName = function(a) {
			return this.resConfig.getGroupByName(a)
		};
		b.prototype.loadGroup = function(a, b) {
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
		b.prototype.createGroup = function(a, b, c) {
			"undefined" === typeof c && (c = !1);
			if (c) {
				var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
			}
			return this.resConfig.createGroup(a, b, c)
		};
		b.prototype.onGroupComp = function(a) {
			if (a.groupName == b.GROUP_CONFIG) {
				a = this.loadingConfigList.length;
				for (var d = 0; d < a; d++) {
					var l = this.loadingConfigList[d],
						f = this.getAnalyzerByType(l.type),
						h = f.getRes(l.url);
					f.destroyRes(l.url);
					this.resConfig.parseConfig(h, l.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList = null;
				c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
				l = this.groupNameList;
				a = l.length;
				for (d = 0; d < a; d++) f = l[d], this.loadGroup(f.name, f.priority);
				this.groupNameList = []
			} else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
		};
		b.prototype.hasRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (a = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a),
				"" == b) ? !1 : !0
		};
		b.prototype.getRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (b = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(b), "" == b) ? null : this.getAnalyzerByType(b).getRes(a)
		};
		b.prototype.getResAsync = function(a, b, d) {
			var e = this.resConfig.getType(a),
				h = this.resConfig.getName(a);
			if ("" == e && (h = c.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(h), "" == e)) {
				b.call(d, null);
				return
			}(e = this.getAnalyzerByType(e).getRes(a)) ? b.call(d, e) : (a = {
					key: a,
					compFunc: b,
					thisObject: d
				}, this.asyncDic[h] ?
				this.asyncDic[h].push(a) : (this.asyncDic[h] = [a], h = this.resConfig.getResourceItem(h), this.resLoader.loadItem(h)))
		};
		b.prototype.getResByUrl = function(a, b, d, e) {
			"undefined" === typeof e && (e = "");
			if (a) {
				e || (e = this.getTypeByUrl(a));
				var h = this.getAnalyzerByType(e).getRes(a);
				h ? b.call(d, h) : (b = {
					key: a,
					compFunc: b,
					thisObject: d
				}, this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new c.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
			} else b.call(d, null)
		};
		b.prototype.getTypeByUrl = function(a) {
			(a = a.substr(a.lastIndexOf(".") +
				1)) && (a = a.toLowerCase());
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
		b.prototype.onResourceItemComp = function(a) {
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
		b.prototype.destroyRes = function(a) {
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
		b.prototype.setMaxLoadingThread = function(a) {
			1 > a && (a = 1);
			this.resLoader.thread = a
		};
		b.GROUP_CONFIG = "RES__CONFIG";
		return b
	}(egret.EventDispatcher);
	d.prototype.__class__ = "Resource";
	var b = new d
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(c) {
			"undefined" === typeof c && (c = 60);
			b.call(this);
			this.frameRate = c;
			this._time = 0;
			60 == c && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
				window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
				return window.setTimeout(a, 1E3 / c)
			});
			a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
				return window.clearTimeout(a)
			});
			a.instance = this;
			this.registerListener()
		}
		__extends(a, b);
		a.prototype.enterFrame = function() {
			var b = a.instance,
				d = a._thisObject,
				q = a._callback,
				l = c.getTimer();
			q.call(d,
				l - b._time);
			b._time = l;
			b._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame)
		};
		a.prototype.executeMainLoop = function(b, c) {
			a._callback = b;
			a._thisObject = c;
			this.enterFrame()
		};
		a.prototype.reset = function() {
			var b = a.instance;
			b._requestAnimationId && (b._time = c.getTimer(), a.cancelAnimationFrame.call(window, b._requestAnimationId), b.enterFrame())
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
	}(c.DeviceContext);
	c.HTML5DeviceContext =
		d;
	d.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			this.canvas = a;
			this.canvasContext = a.getContext("2d");
			var c = this.canvasContext.setTransform,
				d = this;
			this.canvasContext.setTransform = function(a, b, e, k, m, n) {
				d._matrixA = a;
				d._matrixB = b;
				d._matrixC = e;
				d._matrixD = k;
				d._matrixTx = m;
				d._matrixTy = n;
				c.call(d.canvasContext, a, b, e, k, m, n)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			b.call(this)
		}
		__extends(a, b);
		a.prototype.clearScreen = function() {
			this.setTransform(c.Matrix.identity.identity());
			this.canvasContext.save();
			this.canvasContext.fillStyle = '#fff';
			for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
				var l = a[b];
				this.canvasContext.fillRect(l.x + this._transformTx, l.y + this._transformTy, l.width, l.height);
				// this.clearRect(l.x + this._transformTx, l.y + this._transformTy, l.width, l.height)
			}
			this.renderCost = 0
		};
		a.prototype.clearRect = function(a, b, c, d) {
			this.canvasContext.clearRect(a, b, c, d)
		};
		a.prototype.drawImage = function(a, d, q, l, f, h, k, m, n) {
			d /= c.MainContext.instance.rendererContext.texture_scale_factor;
			q /= c.MainContext.instance.rendererContext.texture_scale_factor;
			l /= c.MainContext.instance.rendererContext.texture_scale_factor;
			f /= c.MainContext.instance.rendererContext.texture_scale_factor;
			a = a._bitmapData;
			h += this._transformTx;
			k += this._transformTy;
			var p = c.getTimer();
			this.canvasContext.drawImage(a, d, q, l, f, h, k, m, n);
			b.prototype.drawImage.call(this, a, d, q, l, f, h, k, m, n);
			this.renderCost += c.getTimer() - p
		};
		a.prototype.setTransform = function(a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx =
				this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		a.prototype.setAlpha = function(a, b) {
			a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
			b ? (this.blendValue = b, this.canvasContext.globalCompositeOperation = b) : this.blendValue != c.BlendMode.NORMAL && (this.blendValue = c.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = c.BlendMode.NORMAL)
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
		a.prototype.drawText = function(a, c, d, l, f) {
			var h = a._strokeColorString,
				k = a.stroke,
				m = this.canvasContext;
			m.fillStyle = a._textColorString;
			m.strokeStyle = h;
			k && (m.lineWidth = 2 * k, m.strokeText(c, d + this._transformTx, l + this._transformTy,
				f || 65535));
			m.fillText(c, d + this._transformTx, l + this._transformTy, f || 65535);
			b.prototype.drawText.call(this, a, c, d, l, f)
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
	}(c.RendererContext);
	c.HTML5CanvasRenderer = d;
	d.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(c) {
	c.beginFill = function(b, a) {
		"undefined" === typeof a && (a = 1);
		var c = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.fillStyleColor = c;
		this.commandQueue.push(new d(this._setStyle, this, [c]))
	};
	c.drawRect = function(b, a, c, g) {
		this.commandQueue.push(new d(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
			this.canvasContext.closePath()
		}, this, [b, a, c, g]));
		this._fill()
	};
	c.drawCircle = function(b, a, c) {
		this.commandQueue.push(new d(function(a,
			b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [b, a, c]));
		this._fill()
	};
	c.lineStyle = function(b, a, c, g, q, l, f, h) {
		"undefined" === typeof b && (b = NaN);
		"undefined" === typeof a && (a = 0);
		"undefined" === typeof c && (c = 1);
		"undefined" === typeof g && (g = !1);
		"undefined" === typeof q && (q = "normal");
		"undefined" === typeof l && (l = null);
		"undefined" === typeof f && (f = null);
		"undefined" === typeof h && (h = 3);
		this.strokeStyleColor &&
			(this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + c + ")";
		this.commandQueue.push(new d(function(a, b) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = b;
			this.canvasContext.beginPath()
		}, this, [b, a]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	c.lineTo = function(b, a) {
		this.commandQueue.push(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.lineTo(c._transformTx +
				a, c._transformTy + b)
		}, this, [b, a]));
		this.lineX = b;
		this.lineY = a
	};
	c.curveTo = function(b, a, c, g) {
		this.commandQueue.push(new d(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, c, d)
		}, this, [b, a, c, g]));
		this.lineX = c;
		this.lineY = g
	};
	c.moveTo = function(b, a) {
		this.commandQueue.push(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
		}, this, [b, a]))
	};
	c.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length =
			0;
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
		this.endLineCommand || (this.endLineCommand = new d(function() {
			this.canvasContext.stroke();
			this.canvasContext.closePath()
		}, this, null))
	};
	c._draw = function(b) {
		this.renderContext = b;
		b = this.canvasContext = this.renderContext.canvasContext;
		b.save();
		var a = this.commandQueue.length;
		this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
		for (var c = 0; c < a; c++) {
			var d = this.commandQueue[c];
			d.method.apply(d.thisObject, d.args)
		}
		b.restore()
	};
	var d = function() {
		return function(b, a, c) {
			this.method =
				b;
			this.thisObject = a;
			this.args = c
		}
	}();
	d.prototype.__class__ = "Command";
	c._setStyle = function(b) {
		this.canvasContext.fillStyle = b;
		this.canvasContext.beginPath()
	};
	c.init = function() {
		for (var b in c) egret.Graphics.prototype[b] = c[b];
		egret.RendererContext.createRendererContext = function(a) {
			return new egret.HTML5CanvasRenderer(a)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			b.call(this);
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
			for (var d = 0, q = 0; d < a; d += 6, q += 4) this.indices[d + 0] = q + 0, this.indices[d + 1] = q + 1, this.indices[d + 2] = q + 2, this.indices[d + 3] = q + 0, this.indices[d + 4] = q + 2, this.indices[d + 5] = q + 3;
			this.initWebGL();
			this.shaderManager = new c.WebGLShaderManager(this.gl);
			this.worldTransform = new c.Matrix;
			this.initBlendMode();
			c.MainContext.instance.addEventListener(c.Event.FINISH_RENDER,
				this._draw, this);
			c.TextField.prototype._draw = function(a) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				c.DisplayObject.prototype._draw.call(this, a)
			}
		}
		__extends(a, b);
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
			a.blendModesWebGL[c.BlendMode.NORMAL] =
				[this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			a.blendModesWebGL[c.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.DST_ALPHA]
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
			for (var b = c.RenderFilter.getInstance().getDrawAreaList(), d = 0, l = b.length; d < l; d++) {
				var f = b[d];
				a.viewport(f.x, f.y, f.width, f.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			this.renderCost = 0
		};
		a.prototype.setBlendMode = function(b) {
			b || (b = c.BlendMode.NORMAL);
			if (this.currentBlendMode != b) {
				var d = a.blendModesWebGL[b];
				d && (this.gl.blendFunc(d[0], d[1]), this.currentBlendMode = b)
			}
		};
		a.prototype.drawImage = function(a, b, d, l, f, h, k, m, n) {
			if (!this.contextLost) {
				var p = c.MainContext.instance.rendererContext.texture_scale_factor;
				b /= p;
				d /= p;
				l /= p;
				f /= p;
				this.createWebGLTexture(a);
				if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(), this.currentBaseTexture = a.webGLTexture;
				var t = this.worldTransform,
					r = t.a,
					s = t.b,
					u = t.c,
					v = t.d,
					x = t.tx,
					y = t.ty;
				0 == h && 0 == k || t.append(1, 0, 0, 1, h, k);
				1 == l / m && 1 == f / n || t.append(m / l,
					0, 0, n / f, 0, 0);
				h = t.a;
				k = t.b;
				m = t.c;
				n = t.d;
				var p = t.tx,
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
				b /= r;
				d /= s;
				l /= r;
				f /= s;
				r = this.vertices;
				s = 4 * this.currentBatchSize * this.vertSize;
				u = this.worldAlpha;
				r[s++] = p;
				r[s++] = w;
				r[s++] = b;
				r[s++] = d;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = h * a + p;
				r[s++] = k * a + w;
				r[s++] = l + b;
				r[s++] = d;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = h * a + m * t + p;
				r[s++] = n * t + k * a + w;
				r[s++] = l + b;
				r[s++] = f + d;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = m * t + p;
				r[s++] = n * t + w;
				r[s++] = b;
				r[s++] = f + d;
				r[s++] = u;
				r[s++] =
					16777215;
				this.currentBatchSize++
			}
		};
		a.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = c.getTimer();
				this.start();
				var b = this.gl;
				b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
				var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				b.bufferSubData(b.ARRAY_BUFFER, 0, d);
				b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += c.getTimer() - a;
				c.Profiler.getInstance().onDrawImage()
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
				h = this.graphicsIndices,
				k = f.length / 6;
			f.push(b, c);
			f.push(0, 0, 0, 1);
			f.push(b + d, c);
			f.push(0, 0, 0, 1);
			f.push(b, c + a);
			f.push(0, 0, 0, 1);
			f.push(b + d, c + a);
			f.push(0, 0, 0, 1);
			h.push(k, k, k + 1, k + 2, k + 3, k + 3)
		};
		a.blendModesWebGL = {};
		return a
	}(c.RendererContext);
	c.WebGLRenderer =
		d;
	d.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(c) {
	var d = function() {
		function b() {}
		b.compileProgram = function(a, c, d) {
			d = b.compileFragmentShader(a, d);
			c = b.compileVertexShader(a, c);
			var q = a.createProgram();
			a.attachShader(q, c);
			a.attachShader(q, d);
			a.linkProgram(q);
			a.getProgramParameter(q, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return q
		};
		b.compileFragmentShader = function(a, c) {
			return b._compileShader(a, c, a.FRAGMENT_SHADER)
		};
		b.compileVertexShader = function(a, c) {
			return b._compileShader(a, c, a.VERTEX_SHADER)
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
			} catch (c) {
				b.canUseWebGL = !1
			}
			return b.canUseWebGL
		};
		return b
	}();
	c.WebGLUtils = d;
	d.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
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
			this.defaultShader = new b(c);
			this.activateShader(this.defaultShader)
		};
		c.prototype.activateShader = function(a) {
			this.gl.useProgram(a.program);
			this.setAttribs(a.attributes)
		};
		c.prototype.setAttribs = function(a) {
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
		return c
	}();
	c.WebGLShaderManager = d;
	d.prototype.__class__ = "egret.WebGLShaderManager";
	var b = function() {
		function a(b) {
			this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;\n   vColor = vec4(color * aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function() {
			var a = this.gl,
				b = c.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.uSampler = a.getUniformLocation(b, "uSampler");
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector =
				a.getUniformLocation(b, "offsetVector");
			this.dimensions = a.getUniformLocation(b, "dimensions");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord");
			this.colorAttribute = a.getAttribLocation(b, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			this.program = b
		};
		return a
	}();
	c.EgretShader = b;
	b.prototype.__class__ = "egret.EgretShader";
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
				b = c.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector = a.getUniformLocation(b, "offsetVector");
			this.tintColor = a.getUniformLocation(b, "tint");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.colorAttribute = a.getAttribLocation(b, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix =
				a.getUniformLocation(b, "translationMatrix");
			this.alpha = a.getUniformLocation(b, "alpha");
			this.program = b
		};
		return a
	}();
	c.PrimitiveShader = a;
	a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.proceed = function(a) {
			function b(d) {
				c.IOErrorEvent.dispatchIOErrorEvent(a)
			}

			function d(b) {
				switch (a.dataFormat) {
					case c.URLLoaderDataFormat.TEXT:
						a.data = f.responseText;
						break;
					case c.URLLoaderDataFormat.VARIABLES:
						a.data = new c.URLVariables(f.responseText);
						break;
					case c.URLLoaderDataFormat.BINARY:
						a.data = f.response;
						break;
					default:
						a.data = f.responseText
				}
				c.callLater(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
			}
			if (a.dataFormat ==
				c.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
			else if (a.dataFormat == c.URLLoaderDataFormat.SOUND) this.loadSound(a);
			else {
				var l = a._request,
					f = this.getXHR();
				f.onerror = b;
				f.onload = d;
				f.open(l.method, l.url, !0);
				this.setResponseType(f, a.dataFormat);
				l.method != c.URLRequestMethod.GET && l.data ? l.data instanceof c.URLVariables ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(l.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(l.data)) : f.send()
			}
		};
		a.prototype.loadSound =
			function(a) {
				function b(f) {
					window.clearTimeout(l.__timeoutId);
					l.removeEventListener("canplaythrough", b, !1);
					l.removeEventListener("error", d, !1);
					f = new c.Sound;
					f.audio = l;
					a.data = f;
					c.callLater(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
				}

				function d(f) {
					window.clearTimeout(l.__timeoutId);
					l.removeEventListener("canplaythrough", b, !1);
					l.removeEventListener("error", d, !1);
					c.IOErrorEvent.dispatchIOErrorEvent(a)
				}
				var l = new Audio(a._request.url);
				l.__timeoutId = window.setTimeout(b, 100);
				l.addEventListener("canplaythrough",
					b, !1);
				l.addEventListener("error", d, !1);
				l.load()
		};
		a.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		a.prototype.setResponseType = function(a, b) {
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
		a.prototype.loadTexture = function(a) {
			var b = a._request,
				d = new Image;
			d.crossOrigin = "Anonymous";
			d.onload = function(b) {
				d.onerror = null;
				d.onload = null;
				b = new c.Texture;
				b._setBitmapData(d);
				a.data = b;
				c.callLater(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
			};
			d.onerror = function(b) {
				d.onerror = null;
				d.onload = null;
				c.IOErrorEvent.dispatchIOErrorEvent(a)
			};
			d.src = b.url
		};
		return a
	}(c.NetContext);
	c.HTML5NetContext = d;
	d.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
	function b() {
		this.constructor = c
	}
	for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
	b.prototype = d.prototype;
	c.prototype = new b
};
(function(c) {
	var d = function(b) {
		function a(a) {
			b.call(this);
			this.canvas = a;
			this._isTouchDown = !1
		}
		__extends(a, b);
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
			}, !1)) : c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE ? this.addTouchListener() : c.MainContext.deviceType == c.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
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
			c.MainContext.instance.stage.dispatchEventWith(c.Event.LEAVE_STAGE)
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
		a.prototype.getLocation = function(a, b) {
			var d = document.documentElement,
				l = window,
				f, h;
			"function" === typeof a.getBoundingClientRect ? (h = a.getBoundingClientRect(), f = h.left, h = h.top) : h = f = 0;
			f += l.pageXOffset - d.clientLeft;
			h += l.pageYOffset - d.clientTop;
			null != b.pageX ? (d = b.pageX,
				l = b.pageY) : (f -= document.body.scrollLeft, h -= document.body.scrollTop, d = b.clientX, l = b.clientY);
			var k = c.Point.identity;
			k.x = (d - f) / c.StageDelegate.getInstance().getScaleX();
			k.y = (l - h) / c.StageDelegate.getInstance().getScaleY();
			return k
		};
		return a
	}(c.TouchContext);
	c.HTML5TouchContext = d;
	d.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
var GameRes = function() {
	function c() {}
	c.loadSpriteSheet = function(d) {
		c.currentSheet = RES.getRes(d)
	};
	c.getImageRes = function(d) {
		return c.currentSheet.getTexture(d)
	};
	return c
}();
GameRes.prototype.__class__ = "GameRes";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	ActorImage = function(c) {
		function d(b, a, d, g) {
			"undefined" === typeof d && (d = 4);
			"undefined" === typeof g && (g = 4);
			c.call(this);
			this.labelHeight = 5;
			this.frameColor = 7168096;
			this.healthColor = 11196240;
			this.dieColor = 16726272;
			this.imageLayer = new egret.DisplayObjectContainer;
			this.addChild(this.imageLayer);
			this.imageLayer.width = a.width;
			this.imageLayer.height =
				a.height;
			this.image = b;
			this.image.x = 40;
			this.image.y = 30;
			this.image.frameRate = 15;
			this.imageLayer.addChild(this.image);
			this.flyImage = a;
			this.imageLayer.addChild(this.flyImage);
			this.flyImage.alpha = 0;
			this.currentBlood = d;
			this.totalBlood = g;
			this.labelFrame = new egret.Shape;
			this.label = new egret.Shape;
			this.addChildAt(this.label, this.numChildren - 1)
		}
		__extends(d, c);
		d.prototype.showFlyImage = function() {
			this.imageLayer.contains(this.image) && this.imageLayer.removeChild(this.image);
			this.flyImage.alpha = 1
		};
		d.prototype.hideFlyImage =
			function() {
				this.flyImage.alpha = 0;
				this.imageLayer.contains(this.image) || this.imageLayer.addChild(this.image)
		};
		d.prototype.setCurBlood = function(b) {
			this.currentBlood = b
		};
		d.prototype.setTotalBlood = function(b) {
			this.totalBlood = b
		};
		d.prototype.addBloodLabel = function(b) {
			this.labelDirection = b;
			d.LABELLEFT == b ? (this.labelFrame.graphics.clear(), this.labelFrame.graphics.lineStyle(1, this.frameColor), this.labelFrame.graphics.beginFill(16777215, 1), this.labelFrame.graphics.drawRect(0, 0, this.labelHeight, this.imageLayer.height),
				this.labelFrame.graphics.endFill(), this.labelFrame.x = this.imageLayer.x - this.labelHeight - 2, this.labelFrame.y = this.imageLayer.y, this.addChild(this.labelFrame), this.label.graphics.clear(), this.label.graphics.beginFill(this.healthColor, 1), this.label.graphics.drawRect(0, this.imageLayer.height * (1 - this.currentBlood / this.totalBlood), this.labelHeight, this.imageLayer.height * this.currentBlood / this.totalBlood), this.label.graphics.endFill(), this.label.x = this.labelFrame.x, this.label.y = this.labelFrame.y, this.addChild(this.label)) :
				d.LABELRIGHT == b ? (this.labelFrame.graphics.clear(), this.labelFrame.graphics.lineStyle(1, this.frameColor), this.labelFrame.graphics.beginFill(16777215, 1), this.labelFrame.graphics.drawRect(0, 0, this.labelHeight, this.imageLayer.height), this.labelFrame.graphics.endFill(), this.labelFrame.x = this.imageLayer.x + this.imageLayer.width + 2 + 20, this.labelFrame.y = this.imageLayer.y, this.addChild(this.labelFrame), this.label.graphics.clear(), this.label.graphics.beginFill(this.healthColor, 1), this.label.graphics.drawRect(0,
					this.imageLayer.height * (1 - this.currentBlood / this.totalBlood), this.labelHeight, this.imageLayer.height * this.currentBlood / this.totalBlood), this.label.graphics.endFill(), this.label.x = this.labelFrame.x, this.label.y = this.labelFrame.y, this.addChild(this.label)) : d.LABELTOP == b ? (this.labelFrame.graphics.clear(), this.labelFrame.graphics.lineStyle(1, this.frameColor), this.labelFrame.graphics.beginFill(16777215, 1), this.labelFrame.graphics.drawRect(0, 0, this.imageLayer.width, this.labelHeight), this.labelFrame.graphics.endFill(),
					this.labelFrame.x = this.imageLayer.x, this.labelFrame.y = this.imageLayer.y - this.labelHeight - 2, this.addChild(this.labelFrame), this.label.graphics.clear(), this.label.graphics.beginFill(this.healthColor, 1), this.label.graphics.drawRect(0, this.imageLayer.width * (1 - this.currentBlood / this.totalBlood), this.currentBlood / this.totalBlood * this.imageLayer.width, this.labelHeight), this.label.graphics.endFill(), this.label.x = this.labelFrame.x, this.label.y = this.labelFrame.y, this.addChild(this.label)) : d.LABELBOTTOM == b &&
				(this.labelFrame.graphics.clear(), this.labelFrame.graphics.lineStyle(1, this.frameColor), this.labelFrame.graphics.beginFill(16777215, 1), this.labelFrame.graphics.drawRect(0, 0, this.imageLayer.width, this.labelHeight), this.labelFrame.graphics.endFill(), this.labelFrame.x = this.imageLayer.x, this.labelFrame.y = this.imageLayer.y + this.imageLayer.height + 2, this.addChild(this.labelFrame), this.label.graphics.clear(), this.label.graphics.beginFill(this.healthColor, 1), this.label.graphics.drawRect(0, this.imageLayer.width *
				(1 - this.currentBlood / this.totalBlood), this.currentBlood / this.totalBlood * this.imageLayer.width, this.labelHeight), this.label.graphics.endFill(), this.label.x = this.labelFrame.x, this.label.y = this.labelFrame.y, this.addChild(this.label))
		};
		d.prototype.updateBlood = function(b) {
			0 > b && (b = 0);
			var a;
			a = 1 == b ? this.dieColor : this.healthColor;
			b <= this.totalBlood && (this.currentBlood = b, this.label.graphics.clear(), this.labelDirection == d.LABELBOTTOM ? (this.label.graphics.beginFill(a, 1), this.label.graphics.drawRect(0, this.imageLayer.width *
				(1 - this.currentBlood / this.totalBlood), this.currentBlood / this.totalBlood * this.imageLayer.width, this.labelHeight), this.label.graphics.endFill()) : this.labelDirection == d.LABELTOP ? (this.label.graphics.beginFill(a, 1), this.label.graphics.drawRect(0, this.imageLayer.width * (1 - this.currentBlood / this.totalBlood), this.currentBlood / this.totalBlood * this.imageLayer.width, this.labelHeight), this.label.graphics.endFill()) : this.labelDirection == d.LABELLEFT ? (this.label.graphics.beginFill(a, 1), this.label.graphics.drawRect(0,
				this.imageLayer.height * (1 - this.currentBlood / this.totalBlood), this.labelHeight, this.imageLayer.height * this.currentBlood / this.totalBlood), this.label.graphics.endFill()) : this.labelDirection == d.LABELRIGHT && (this.label.graphics.beginFill(a, 1), this.label.graphics.drawRect(0, this.imageLayer.height * (1 - this.currentBlood / this.totalBlood), this.labelHeight, this.imageLayer.height * this.currentBlood / this.totalBlood), this.label.graphics.endFill()))
		};
		d.prototype.hideBloodLabel = function() {
			this.removeChild(this.label);
			this.removeChild(this.labelFrame)
		};
		d.prototype.showBloodLabel = function() {
			this.addChild(this.labelFrame);
			this.addChild(this.label)
		};
		d.LABELTOP = "top";
		d.LABELBOTTOM = "bottom";
		d.LABELLEFT = "left";
		d.LABELRIGHT = "right";
		return d
	}(egret.DisplayObjectContainer);
ActorImage.prototype.__class__ = "ActorImage";
var Actor = function(c) {
	function d(b, a, e, g) {
		"undefined" === typeof g && (g = 0);
		c.call(this);
		this.isFlying = 2;
		this.totalBlood = this.blood = 4;
		this.settingSide = !1;
		this.jumpHeight = 80;
		this.flyTime = 300;
		this.jumpAction = null;
		this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.stageW = egret.MainContext.instance.stage.stageWidth;
		this.offset = g;
		this.image = new ActorImage(new egret.MovieClip(RES.getRes(b), RES.getRes(a)), new egret.Bitmap(GameRes.getImageRes(e)), this.blood, this.blood);
		this.image.width = this.image.flyImage.width;
		this.image.height = this.image.flyImage.height;
		this.image.x = -this.image.width - this.offset / 2 - 15;
		this.image.y = -this.image.height / 2;
		this.image.addBloodLabel(ActorImage.LABELLEFT);
		this.imageReverse = new ActorImage(new egret.MovieClip(RES.getRes(b + "Reverse"), RES.getRes(a + "Reverse")), new egret.Bitmap(GameRes.getImageRes(e + "Reverse")), this.blood, this.blood);
		this.imageReverse.width = this.imageReverse.flyImage.width;
		this.imageReverse.height = this.imageReverse.flyImage.height;
		this.imageReverse.x = this.offset / 2 - 3;
		this.imageReverse.y = -this.imageReverse.height / 2;
		this.imageReverse.addBloodLabel(ActorImage.LABELRIGHT);
		this.groundX = this.image.x;
		this.groundXReverse = this.imageReverse.x;
		this.imageWidth = this.image.flyImage.width;
		this.imageHeight = this.image.flyImage.height;
		this.imageReverse.imageLayer.removeChild(this.imageReverse.image);
		this.rollImage = new egret.Bitmap(GameRes.getImageRes("rolling"));
		this.addChild(this.rollImage);
		this.rollImage.alpha = 0;
		this.rollImage.rotation = 180;
		this.rollImage.anchorOffsetX = this.rollImage.width /
			2;
		this.rollImage.anchorOffsetY = this.rollImage.height / 2;
		this.rollImage.x = this.image.x + this.rollImage.width / 2;
		this.rollImage.y = this.image.y + this.rollImage.height / 2;
		this.image.image.gotoAndPlay("run");
		this.imageReverse.image.gotoAndPlay("runReverse");
		this.side = d.LEFT;
		this.imageReverse.hideBloodLabel();
		this.isFlying = 2;
		this.addChild(this.image);
		this.addChild(this.imageReverse)
	}
	__extends(d, c);
	d.prototype.getSettingSide = function() {
		return this.settingSide
	};
	d.prototype.setSide = function(b) {
		this.side != b && (this.side =
			b, b == d.LEFT ? (this.rollImage.alpha = 1, egret.Tween.get(this.rollImage).to({
				rotation: 360,
				x: this.groundX + this.rollImage.width / 2
			}, 300).call(this.showLeftImage, this, null), this.hideRightImage(), this.settingSide = !0, this.imageReverse.hideBloodLabel()) : b == d.RIGHT && (this.rollImage.alpha = 1, egret.Tween.get(this.rollImage).to({
				rotation: -360,
				x: this.groundXReverse + this.rollImage.width / 2
			}, 300).call(this.showRightImage, this, null), this.hideLeftImage(), this.settingSide = !0, this.image.hideBloodLabel()))
	};
	d.prototype.hideRolling =
		function() {
			this.rollImage.alpha = 0
	};
	d.prototype.hideLeftImage = function() {
		this.image.imageLayer.removeChild(this.image.image);
		this.image.flyImage.width = 0
	};
	d.prototype.hideRightImage = function() {
		this.imageReverse.imageLayer.removeChild(this.imageReverse.image);
		this.imageReverse.flyImage.width = 0
	};
	d.prototype.showLeftImage = function() {
		this.showImage(d.LEFT);
		this.hideRolling();
		this.image.showBloodLabel();
		this.settingSide = !1
	};
	d.prototype.showRightImage = function() {
		this.showImage(d.RIGHT);
		this.hideRolling();
		this.imageReverse.showBloodLabel();
		this.settingSide = !1
	};
	d.prototype.showImage = function(b) {
		b == d.LEFT ? (this.image.x = this.groundX, this.image.imageLayer.addChild(this.image.image), this.image.flyImage.width = this.imageWidth) : b == d.RIGHT && (this.imageReverse.x = this.groundXReverse, this.imageReverse.imageLayer.addChild(this.imageReverse.image), this.imageReverse.flyImage.width = this.imageWidth)
	};
	d.prototype.updateActorBlood = function() {
		this.image.updateBlood(this.blood);
		this.imageReverse.updateBlood(this.blood);
		console.log("blood: " + this.blood)
	};
	d.prototype.getSide = function() {
		return this.side
	};
	d.prototype.getLeftFlyTime = function() {
		return this.isFlying
	};
	d.prototype.setJumpHeight = function(b) {
		this.jumpHeight = b
	};
	d.prototype.setFlyTime = function(b) {
		this.flyTime = b
	};
	d.prototype.jumpNew = function(b) {
		if (b == d.LEFT) {
			this.isFlying--;
			this.image.showFlyImage();
			egret.Tween.removeTweens(this.image);
			b = this.groundX - this.image.x;
			b = this.flyTime * Math.sqrt(1 + b / this.jumpHeight);
			var a = this.image.x - this.jumpHeight;
			this.jumpAction =
				egret.Tween.get(this.image).to({
					x: a
				}, this.flyTime, egret.Ease.quadOut).to({
					x: this.groundX
				}, b, egret.Ease.quadIn).call(this.finishJump, this, [d.LEFT])
		} else b == d.RIGHT && (this.isFlying--, this.imageReverse.showFlyImage(), egret.Tween.removeTweens(this.imageReverse), b = this.imageReverse.x - this.groundXReverse, b = this.flyTime * Math.sqrt(1 + b / this.jumpHeight), a = this.imageReverse.x + this.jumpHeight, this.jumpAction = egret.Tween.get(this.imageReverse).to({
			x: a
		}, this.flyTime, egret.Ease.quadOut).to({
				x: this.groundXReverse
			},
			b, egret.Ease.quadIn).call(this.finishJump, this, [d.RIGHT]))
	};
	d.prototype.finishJump = function(b) {
		this.resetJumpTime();
		this.jumpAction = null;
		b == d.LEFT ? this.image.hideFlyImage() : b == d.RIGHT && this.imageReverse.hideFlyImage()
	};
	d.prototype.resetJumpTime = function() {
		this.isFlying = 2
	};
	d.prototype.pauseJumpNew = function() {
		null != this.jumpAction && this.jumpAction.setPaused(!0)
	};
	d.prototype.continueJumpNew = function() {
		null != this.jumpAction && this.jumpAction.setPaused(!1)
	};
	d.prototype.getImage = function(b) {
		if (b == d.LEFT) return this.image;
		if (b == d.RIGHT) return this.imageReverse
	};
	d.produceFlag = function(b) {
		null == d.flagDict[b] && (d.flagDict[b] = []);
		var a = d.flagDict[b],
			c;
		0 != a.length ? c = a.pop() : 0 == a.length && (c = new egret.Bitmap(GameRes.getImageRes(b)));
		return c
	};
	d.reclaimFlag = function(b, a) {
		b.alpha = 0;
		null == d.flagDict[a] && (d.flagDict[a] = []);
		var c = d.flagDict[a]; - 1 == c.indexOf(b) && c.push(b)
	};
	d.prototype.showFlag = function(b) {
		var a = d.produceFlag(b);
		this.addChild(a);
		this.getSide() == d.LEFT ? (a.alpha = 1, a.x = this.image.x - a.width - 15 + 40, a.y = this.image.y, egret.Tween.get(a).to({
			y: this.image.y -
				30,
			alpha: 0
		}, 500).call(d.reclaimFlag, this, [a, b])) : this.getSide() == d.RIGHT && (a.alpha = 1, a.x = this.imageReverse.x + this.imageReverse.width + 15, a.y = this.imageReverse.y, egret.Tween.get(a).to({
			y: this.imageReverse.y - 30,
			alpha: 0
		}, 500).call(d.reclaimFlag, this, [a, b]))
	};
	d.LEFT = "left";
	d.RIGHT = "right";
	d.flagDict = {};
	d.FLAG_PLUS = "plus";
	d.FLAG_MINUS = "minus";
	return d
}(egret.DisplayObjectContainer);
Actor.prototype.__class__ = "Actor";
var ActorStatusController = function() {
	function c(c) {
		this.actor = c;
		this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.stageW = egret.MainContext.instance.stage.stageWidth
	}
	c.prototype.setActor = function(c) {
		this.actor = c
	};
	c.prototype.handleEvent = function(c) {
		c.stageX < this.stageW / 2 && 0 != this.actor.getLeftFlyTime() ? this.actor.getSide() != Actor.LEFT || this.actor.getSettingSide() ? this.actor.getSide() != Actor.RIGHT || 2 != this.actor.getLeftFlyTime() || this.actor.getSettingSide() || this.actor.setSide(Actor.LEFT) :
			this.actor.jumpNew(Actor.LEFT) : c.stageX > this.stageW / 2 && 0 != this.actor.getLeftFlyTime() && (this.actor.getSide() != Actor.RIGHT || this.actor.getSettingSide() ? this.actor.getSide() != Actor.LEFT || 2 != this.actor.getLeftFlyTime() || this.actor.getSettingSide() || this.actor.setSide(Actor.RIGHT) : this.actor.jumpNew(Actor.RIGHT))
	};
	return c
}();
ActorStatusController.prototype.__class__ = "ActorStatusController";
var GameUtil = function() {
	function c() {}
	c.hitTest = function(c, b) {
		var a = c.getSide() == Actor.LEFT ? c.getImage(Actor.LEFT) : c.getImage(Actor.RIGHT),
			e = b.getBounds(),
			g = a.flyImage.getBounds();
		g.x = c.x + a.x;
		g.y = c.y + a.y;
		e.x = b.x;
		e.y = b.y;
		return g.intersects(e) || e.intersects(g)
	};
	c.hitTestItemItem = function(c, b) {
		var a = c.getBounds(),
			e = b.getBounds();
		a.x = c.x;
		a.y = c.y;
		e.x = b.x;
		e.y = b.y;
		return a.intersects(e)
	};
	c.hitTestItemList = function(d, b) {
		var a = !1;
		if (0 == b.length) return a;
		for (var e = 0; e < b.length && !(a = a || c.hitTestItemItem(d,
			b[e])); e++);
		return a
	};
	c.getPercent = function(c) {
		var bfb= Math.ceil(100 * Math.sqrt(c / 80));
		if(bfb>=100){bfb=98;}
		return bfb;
	};
	return c
}();
GameUtil.prototype.__class__ = "GameUtil";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	EndScene = function(c) {
		function d() {
			c.call(this);
			this.createScene()
		}
		__extends(d, c);
		d.prototype.createScene = function() {
			this.stageW = egret.MainContext.instance.stage.stageWidth;
			this.stageH = egret.MainContext.instance.stage.stageHeight;
			var b = RES.getRes("gameTexture"),
				a = new egret.Bitmap(b.getTexture("end0"));
			this.addChild(a);
			a.x = (this.stageW - a.width) / 2;
			a.y = this.stageH / 10 + 80;
			this.againBtn = new egret.Bitmap(b.getTexture("againBtn"));
			this.addChild(this.againBtn);
			this.againBtn.x = (this.stageW - this.againBtn.width) / 2;
			this.againBtn.y = a.y + a.height + 10;
			this.againBtn.touchEnabled = !0;
			this.againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.again, this);
			//炫耀一下
			this.xuanyao = new egret.Bitmap(b.getTexture("xuanyao"));
			this.addChild(this.xuanyao);
			this.xuanyao.x = (this.stageW - this.xuanyao.width) / 2;
			this.xuanyao.y = a.y + a.height + 90;
			this.xuanyao.touchEnabled = !0;
			this.xuanyao.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showOff, this);
			//更多游戏
			this.gengduo = new egret.Bitmap(b.getTexture("gengduo"));
			this.addChild(this.gengduo);
			this.gengduo.x = (this.stageW - this.gengduo.width) / 2;
			this.gengduo.y = a.y + a.height + 172;
			this.gengduo.touchEnabled = !0;
			this.gengduo.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.moreGame, this);
			a = new egret.Bitmap(b.getTexture("lace"));
			// this.addChild(a);
			a.x = 0;
			// a.y = this.againBtn.y + this.againBtn.height + 20;
			var c = new egret.Sprite;
			c.graphics.beginFill(16759659, 1);
			c.graphics.drawRect(0, 0, 480, 120);
			c.graphics.endFill();
			c.x = 0;
			c.y = a.y + a.height;
			// this.addChild(c);
			a = new egret.Sprite;
			a.graphics.beginFill(16756281, 1);
			a.graphics.drawRect(0, 0, 480, this.stageH - (c.y + 120));
			a.graphics.endFill();
			a.x = 0;
			a.y = c.y + 120;
			// this.addChild(a);
			var d = new egret.Bitmap(b.getTexture("gongxi"));
			this.addChild(d);
			d.x = this.stageW / 6;
			d.y = c.y + 15;
			this.scoreLabel1 = new egret.BitmapText;
			c = RES.getRes("bmmFont");
			this.scoreLabel1.spriteSheet = c;
			this.addChild(this.scoreLabel1);
			this.scoreLabel1.x = d.x + d.width + 20;
			this.scoreLabel1.y = d.y - 12;
			this.jibai = new egret.Bitmap(b.getTexture("jibai"));
			this.addChild(this.jibai);
			this.jibai.x = this.stageW / 3-100;
			this.jibai.y = d.y + d.height + 13;
			this.percent = new egret.BitmapText;
			this.percent.spriteSheet = c;
			this.addChild(this.percent);
			this.percent.x = this.jibai.x + this.jibai.width + 15;
			this.percent.y = this.jibai.y - 12;
		//击败了
			this.jibaile = new egret.Bitmap(b.getTexture("jibaile"));
			this.addChild(this.jibaile);
			this.jibaile.x = this.stageW / 3-100;
			this.jibaile.y = d.y + d.height + 53;
		//的人
			this.degou = new egret.Bitmap(b.getTexture("degou"));
			this.addChild(this.degou);
			this.degou.y = this.jibaile.y;

			this.bili = new egret.BitmapText;
			this.bili.spriteSheet = c;
			this.addChild(this.bili);
			this.bili.x = this.jibai.x + this.jibai.width + 15;
			this.bili.y = this.jibaile.y-10;
			this.deren = new egret.Bitmap(b.getTexture("deren"));
			this.addChild(this.deren);
			this.deren.y = this.jibai.y;
			c = new egret.Bitmap(b.getTexture("currentDistance"));
			// this.addChild(c);
			c.x = this.stageW / 6;
			c.y = a.y + 25;
			this.scoreLabel2 =new egret.BitmapText;
			this.scoreLabel2.spriteSheet = RES.getRes("bmmFont");
			// this.addChild(this.scoreLabel2);
			this.scoreLabel2.x = c.x + c.width + 5;
			this.scoreLabel2.y = c.y - 15;
			a = new egret.Bitmap(b.getTexture("maxDistance"));
			// this.addChild(a);
			a.x = c.x;
			a.y = c.y + c.height + 40;
			this.maxScoreLabel = new egret.BitmapText;
			this.maxScoreLabel.spriteSheet = this.scoreLabel2.spriteSheet;
			// this.addChild(this.maxScoreLabel);
			this.maxScoreLabel.x = this.scoreLabel2.x;
			this.maxScoreLabel.y = a.y - 15;
			a = new egret.Bitmap(b.getTexture("food"));
			// this.addChild(a);
			a.x = 3 * this.stageW / 4;
			a.y = this.scoreLabel2.y + 15;
			a.width = 35;
			a.height = 33;
			this.textFood = new egret.BitmapText;
			this.textFood.spriteSheet = RES.getRes("mmFont");
			this.textFood.text = " 15";
			this.textFood.x = a.x + a.width;
			this.textFood.y = a.y - 7;
			
			// this.addChild(this.textFood);
			c = new egret.Bitmap(b.getTexture("poison"));
			// this.addChild(c);
			c.x = a.x - 5;
			
			c.y = this.maxScoreLabel.y + 5;
			c.width = 35;
			c.height = 33;
			this.textPoison = new egret.BitmapText;
			this.textPoison.spriteSheet = RES.getRes("mmFont");
			this.textPoison.text = " 20";
			this.textPoison.x = c.x + c.width;
			this.textPoison.y = c.y - 7;
			// this.addChild(this.textPoison);
			a = new egret.Bitmap(b.getTexture("ptr"));
			// this.addChild(a);
			a.x = this.stageW - a.width - 30;
			a.y = 0;
			egret.Tween.get(a, {
				loop: !0
			}).to({
				y: 10
			}, 800, egret.Ease.backInOut).to({
				y: 0
			}, 800, egret.Ease.backInOut);
			b = new egret.Bitmap(b.getTexture("timeLine"));
			// this.addChild(b);
			b.x = a.x - b.width + 10;
			b.y = a.y + a.height - b.height + 10;
			a = b.y;
			egret.Tween.get(b, {
				loop: !0
			}).to({
				y: a + 10
			}, 800, egret.Ease.backInOut).to({
				y: a
			}, 800, egret.Ease.backInOut)
		};
		d.prototype.again = function(b) {
			poisonCount=0;
			// _hmt.push(["_trackEvent", "button", "gameRestart","yuebing:"+this.percent.text+"juli:"+this.scoreLabel1.text]);
			b.target == this.againBtn && this.dispatchEventWith(d.GAMESTART, !0);
		};
		d.prototype.showOff = function(b) {
			// _hmt.push(["_trackEvent", "button", "share"]);
			if( /liebao/gi.test(navigator.userAgent) ){ 
				var tipimg = document.getElementById('mk')
				tipimg.src = 'http://www.liebao.cn/game/iq_test/images/share_tip_2.png';
				tipimg.style.position = 'absolute';
				tipimg.style.bottom = '10px';
				tipimg.style.left = '5%';
			 }
			document.getElementById('share').style.display='block';
		};
		d.prototype.moreGame = function(b) {
			// _hmt.push(["_trackEvent", "button", "moreGame"]);
			window.location.href="http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/"
		};
		d.prototype.setScore = function(b) {
			this.scoreLabel1.text = "" + b + "00 m";
			this.scoreLabel2.text = "" + b + "00 m";
			this.bili.text = "" + GameUtil.getPercent(b) + "%";
			this.deren.x = this.percent.x + this.percent.width + 45;
			this.degou.x = this.bili.x + this.bili.width + 15;
		};
		d.prototype.setFood = function(b) {
			this.textFood.text = " " + b
		};
		d.prototype.setPoison = function(b) {
			this.textPoison.text = " " + b
			this.percent.text = "" + (poisonCount-b) ;
		};
		d.prototype.setMaxScore = function(b) {
			this.maxScoreLabel.text = "" + b + "00 m"
		};
		d.GAMESTART = "gamestart";
		return d
	}(egret.Sprite);
EndScene.prototype.__class__ = "EndScene";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	GameItem = function(c) {
		function d(b) {
			c.call(this, b)
		}
		__extends(d, c);
		d.produce = function(b) {
			null == d.cacheDict[b] && (d.cacheDict[b] = []);
			var a = d.cacheDict[b],
				a = 0 < a.length ? a.pop() : new d(GameRes.getImageRes(b));
			a.textureName = b;
			return a
		};
		d.reclaim = function(b, a) {
			null == d.cacheDict[a] && (d.cacheDict[a] = []);
			var c = d.cacheDict[a]; - 1 == c.indexOf(b) && c.push(b)
		};
		d.getArrayLength = function(b) {
			return d.cacheDict[b].length
		};
		d.POISON = "poison";
		d.FOOD = "food";
		d.cacheDict = {};
		return d
	}(egret.Bitmap);
GameItem.prototype.__class__ = "GameItem";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	LoadingUI = function(c) {
		function d() {
			c.call(this);
			this.barHeight = 5;
			this.createView()
		}
		__extends(d, c);
		d.prototype.createView = function() {
			this.stageW = egret.MainContext.instance.stage.stageWidth;
			this.stageH = egret.MainContext.instance.stage.stageHeight;
			this.barWidth = 3 * this.stageW / 4;
			this.progress = new egret.Shape;
			this.addChild(this.progress);
			this.progress.x = (this.stageW - this.barWidth) / 2;
			this.progress.y = this.stageH / 2;
			this.frame = new egret.Shape;
			this.addChildAt(this.frame, this.numChildren - 1);
			this.frame.x = this.progress.x;
			this.frame.y = this.progress.y;
			this.frame.graphics.lineStyle(1, 7168096,0);
			this.frame.graphics.beginFill(16777215, 1);
			this.frame.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
			this.frame.graphics.endFill()
		};
		d.prototype.setProgress = function(b, a) {
			this.progress.graphics.clear();
			this.progress.graphics.beginFill(11196240, 1);
			this.progress.graphics.drawRect(0,
				0, b / a * this.barWidth, this.barHeight);
			this.progress.graphics.endFill()
		};
		return d
	}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	Obstacle = function(c) {
		function d(b) {
			c.call(this, b)
		}
		__extends(d, c);
		d.produce = function(b) {
			null == d.cacheDict[b] && (d.cacheDict[b] = []);
			var a = d.cacheDict[b],
				a = 0 < a.length ? a.pop() : new d(GameRes.getImageRes(b));
			a.textureName = b;
			return a
		};
		d.recalim = function(b, a) {
			null == d.cacheDict[a] && (d.cacheDict[a] = []);
			var c = d.cacheDict[a]; - 1 == c.indexOf(b) && c.push(b)
		};
		d.getArrayLength = function(b) {
			return null == d.cacheDict[b] ? 0 : d.cacheDict[b].length
		};
		d.cacheDict = {};
		d.SMALLBAR = "Sbar";
		d.MIDBAR = "Mbar";
		d.LONGBAR = "Lbar";
		d.SMALLBRICK = "Sbr";
		d.MIDBRICK = "Mbr";
		d.LONGBRICK = "Lbr";
		return d
	}(egret.Bitmap);
Obstacle.prototype.__class__ = "Obstacle";
var poisonCount=0;
var _url = "http://q" + (Math.floor(Math.random() * 5000)) + ".140qcloud.com/game/wuren/?t=" + (new Date()).valueOf();;
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	StartScene = function(c) {
		function d() {
			c.call(this);
			this.createScene()
		}
		__extends(d, c);
		d.prototype.createScene = function() {
			this.stageH = egret.MainContext.instance.stage.stageHeight;
			this.stageW = egret.MainContext.instance.stage.stageWidth;
			var b = new egret.Bitmap(GameRes.getImageRes("start0"));
			this.addChild(b);
			b.x = (this.stageW - b.width) / 2;
			b.y = -b.height;
			egret.Tween.get(b).to({
				y: this.stageH / 3 - 50
			}, 1E3, egret.Ease.bounceOut);
			this.startBtn = new egret.Bitmap(GameRes.getImageRes("startbtn"));
			this.addChild(this.startBtn);
			this.startBtn.x = b.x;
			this.startBtn.y = this.stageH / 3 + b.height;
			this.startBtn.touchEnabled = !0;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
			//
			this.desc = new egret.Bitmap(GameRes.getImageRes("desc"));
			this.addChild(this.desc);
			this.desc.x = (this.stageW - this.desc.width) / 2;
			this.desc.y = this.stageH / 3 -b.height;
			this.share()
		};
		d.prototype.start = function(b) {
			this.dispatchEventWith(d.START, !0)
		};
		d.prototype.share = function() {
			
			function setShare(title, content){
				LBGAME.Share.updateData({
					call:false,// false只更新数据||true更新数据+调启用户端分享
					title:title||"一起来玩【别吃五仁月饼】！超好玩！",
					imgUrl:"http://www.liebao.cn/game/wuren/img/icon.png",
					cont:content||"一起来玩【别吃五仁月饼】！超好玩！",
					url:_url,
					doneJump:"http://mp.weixin.qq.com/s?__biz=MjM5NzE3NzA1Mg==&mid=204087927&idx=1&sn=3502817ee0fcc4b2a98ee44d99d49728#rd",
					fun:"" // 分享时回调，不 fun:function(){}
				});
			}
			setShare();
			LBGAME.Share.setShareUrl(function(url){
				_url = url;
				setShare();
			});
		};
		d.START = "start";
		return d
	}(egret.Sprite);
StartScene.prototype.__class__ = "StartScene";
var __extends = this.__extends || function(c, d) {
		function b() {
			this.constructor = c
		}
		for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
		b.prototype = d.prototype;
		c.prototype = new b
	},
	GameScene = function(c) {
		function d() {
			c.call(this);
			this.brickTimer = new egret.Timer(1700);
			this.itemTimer = new egret.Timer(1500);
			this.timer = new egret.Timer(1E3);
			this.brickArray = [];
			this.itemArray = [];
			this.groundThickness = 30;
			this.eatPoison = this.eatFood = this.bestDistance = this.distance = 0;
			this.isPause = !1;
			this.description = ["d1", "d2", "d3"];
			this.hasShowDesc = !1;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this)
		}
		__extends(d, c);
		d.prototype.onAddedToStage = function() {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
			this.loadingScene = new LoadingUI;
			this.addChild(this.loadingScene);
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("js/resource.json", "./")
		};
		d.prototype.onConfigComplete = function() {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,
				this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
			RES.loadGroup("preload")
		};
		d.prototype.onGroupProgress = function(b) {
			this.loadingScene.setProgress(b.itemsLoaded, b.itemsTotal)
		};
		d.prototype.onGroupComplete = function() {
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete,
				this);
			GameRes.loadSpriteSheet("gameTexture");
			this.removeChildren();
			var b = new StartScene;
			this.addChild(b);
			this.addEventListener(StartScene.START, this.createScene, this)
		};
		d.prototype.createScene = function() {
			this.removeChildren();
			this.removeEventListener(StartScene.START, this.createScene, this);
			this.addEventListener(EndScene.GAMESTART, this.gameRestart, this);
			this.stageH = this.stage.stageHeight;
			this.stageW = this.stage.stageWidth;
			this.actor = new Actor("run_json", "run_png", "flying", this.groundThickness);
			this.addChild(this.actor);
			this.actor.x = this.stageW / 2;
			this.actor.y = 2 * this.stageH / 3;
			this.actorController = new ActorStatusController(this.actor);
			this.width = this.stageW;
			this.height = this.stageH;
			this.touchEnabled = !0;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.actorController.handleEvent, this.actorController);
			var b = new egret.Shape;
			b.x = this.stageW / 2;
			b.y = 0;
			b.graphics.lineStyle(this.groundThickness, 16756281);
			b.graphics.lineTo(0, this.stageH);
			this.addChildAt(b, 0);
			b = new egret.Bitmap(GameRes.getImageRes("runIcon"));
			this.addChild(b);
			b.x = 5;
			b.y = 5;
			var a = new egret.Bitmap(GameRes.getImageRes("food"));
			this.addChild(a);
			a.x = b.x;
			a.y = b.y + b.height + 5;
			var c = new egret.Bitmap(GameRes.getImageRes("poison"));
			// this.addChild(c);
			c.x = b.x;
			c.y = a.y + a.height + 5;

			this.scoreCard = new egret.BitmapText;
			this.scoreCard.spriteSheet = RES.getRes("mmFont");
			this.scoreCard.text = "" + this.distance + "00 m";
			this.scoreCard.x = b.x + b.width + 8;
			this.scoreCard.y = b.y - 7;
			this.addChild(this.scoreCard);
			this.foodCard = new egret.BitmapText;
			this.foodCard.spriteSheet = RES.getRes("mmFont");
			this.foodCard.text = "" + this.eatFood;
			this.foodCard.x = a.x + a.width + 8;
			this.foodCard.y = a.y - 7;
			this.addChild(this.foodCard);
			this.poisonCard = new egret.BitmapText;
			this.poisonCard.spriteSheet = RES.getRes("mmFont");
			this.poisonCard.text = "" + this.eatPoison;
			this.poisonCard.x = c.x + c.width + 8;
			this.poisonCard.y = c.y - 7;
			// this.addChild(this.poisonCard);
			this.pauseBtn = new egret.Bitmap(GameRes.getImageRes("pause"));
			this.addChild(this.pauseBtn);
			this.pauseBtn.x = this.stageW - this.pauseBtn.width - 5;
			this.pauseBtn.y = 5;
			this.pauseBtn.touchEnabled = !0;
			this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
				this.pauseGame, this);
			this.playBtn = new egret.Bitmap(GameRes.getImageRes("play"));
			this.playBtn.x = this.pauseBtn.x;
			this.playBtn.y = this.pauseBtn.y;
			this.hasShowDesc || this.showDesc();
			this.gameStart();
			console.log("create Scene")
		};
		d.prototype.showDescWords = function(b, a) {
			if (b == this.description.length) this.removeChild(a);
			else {
				a && this.removeChild(a);
				var c = new egret.Bitmap(GameRes.getImageRes(this.description[b]));
				this.addChildAt(c, this.numChildren - 1);
				c.alpha = 0;
				c.x = (this.stageW - c.width) / 2;
				var d = this.stageH / 2;
				c.y = d + 30;
				egret.Tween.get(c).to({
					y: d,
					alpha: 1
				}, 50).wait(1E3).to({
					y: d - 30,
					alpha: 0
				}, 50).call(this.showDescWords, this, [b + 1, c])
			}
		};
		d.prototype.showDesc = function() {
			var b = function(a) {
					return a.to({
						width: c - 10,
						height: d - 10
					}, 80).wait(20).to({
						width: c,
						height: d
					}, 80)
				},
				a = new egret.Bitmap(GameRes.getImageRes("gesture"));
			this.addChild(a);
			a.x = (this.stageW / 2 - this.groundThickness / 2 - a.width) / 2;
			a.y = this.stageH / 3;
			a.scale9Grid = new egret.Rectangle(0, 0, a.width, a.height);
			var c = a.width,
				d = a.height;
			b(egret.Tween.get(a).wait(400)).wait(2620).to({
				alpha: 0,
				y: d + 30
			}, 100).call(this.removeChild, this, [a]);
			var q = new egret.Bitmap(GameRes.getImageRes("gesture"));
			this.addChild(q);
			q.x = this.stageW / 2 + a.x;
			q.y = this.stageH / 3;
			b(b(egret.Tween.get(q).wait(1300)).wait(200)).wait(1340).to({
				alpha: 0,
				y: d + 30
			}, 100).call(this.removeChild, this, [q]);
			this.showDescWords(0)
		};
		d.prototype.pauseGame = function() {
			this.removeChild(this.pauseBtn);
			this.pauseBtn.touchEnabled = !1;
			this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pauseGame, this);
			this.playBtn.touchEnabled = !0;
			this.addChild(this.playBtn);
			this.playBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.continueGame, this);
			this.brickTimer.stop();
			this.itemTimer.stop();
			this.timer.stop();
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.actorController.handleEvent, this.actorController);
			this.actor.pauseJumpNew();
			this.actor.getImage(Actor.LEFT).image.stop();
			this.actor.getImage(Actor.RIGHT).image.stop();
			this.isPause = !0
		};
		d.prototype.continueGame = function() {
			this.removeChild(this.playBtn);
			this.playBtn.touchEnabled = !1;
			this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,
				this.continueGame, this);
			this.pauseBtn.touchEnabled = !0;
			this.addChild(this.pauseBtn);
			this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pauseGame, this);
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.actorController.handleEvent, this.actorController);
			this.isPause = !1;
			this.brickTimer.start();
			this.itemTimer.start();
			this.timer.start();
			this.actor.getImage(Actor.LEFT).image.gotoAndPlay("run");
			this.actor.getImage(Actor.RIGHT).image.gotoAndPlay("runReverse");
			this.actor.continueJumpNew()
		};
		d.prototype.gameStart = function() {
			// _hmt.push(["_trackEvent", "button", "gameStart"]);
			this.actor.blood = 4;
			this.eatPoison = this.eatFood = this.distance = 0;
			this._lastTime = egret.getTimer();
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.countTime, this);
			this.timer.start();
			this.addEventListener(egret.Event.ENTER_FRAME, this.gameUpdate, this, !0);
			this.isPause = !1;
			this.brickTimer.addEventListener(egret.TimerEvent.TIMER, this.createObstacle, this);
			this.brickTimer.delay = 1500;
			this.brickTimer.start();
			this.itemTimer.addEventListener(egret.TimerEvent.TIMER, this.createGameItem,this);
			this.itemTimer.delay = 1E3;
			this.itemTimer.start();
			console.log("game Start")
		};
		d.prototype.createObstacle = function(b) {

			if(this.distance*1 < 30){ return  }
			null == this.preBar && (this.preBar = Obstacle.produce(Obstacle.LONGBAR), Obstacle.recalim(this.preBar, this.preBar.textureName));
			if (b.target == this.brickTimer) {
				b = [Obstacle.LONGBAR, Obstacle.MIDBAR, Obstacle.SMALLBAR, Obstacle.MIDBRICK, Obstacle.SMALLBRICK, Obstacle.LONGBRICK];
				var a;
				a = Math.random();
				0 <= a && 0.19 > a && this.preBar.textureName != Obstacle.LONGBAR ? a = 0 : 0.19 <= a && 0.2 > a && this.preBar.textureName !=
					Obstacle.LONGBRICK ? a = 5 : (a = Math.random(), a = 0.25 >= a ? 1 : 0.25 < a && 0.5 >= a ? 2 : 0.5 < a && 0.75 >= a ? 3 : 4);
				b = Obstacle.produce(b[a]);
				0.5 >= Math.random() ? b.x = this.stageW / 2 - this.groundThickness / 2 - b.width : b.x = this.stageW / 2 + this.groundThickness / 2;
				b.y = this.hasShowDesc ? -b.height - 600 * Math.random() : -b.height - 600 * Math.random() - 800;
				this.addChildAt(b, this.numChildren - 1);
				this.brickArray.push(b);
				this.preBar = b;
				console.log("create" + b.textureName + " array length= " + this.brickArray.length + " " + Obstacle.getArrayLength(b.textureName))
			}
		};
		d.prototype.createGameItem = function(b) {
			if (b.target == this.itemTimer) {
				b = [GameItem.FOOD, GameItem.POISON];
				var a = Math.random();
				
				b = GameItem.produce(b[0 <= a && 0.4 > a ? 0 : 1]);
				
				if (b.textureName=="poison") {poisonCount++;console.log(poisonCount)};
				0.5 >= Math.random() ? b.x = this.stageW / 2 - this.groundThickness / 2 - b.width - 5 : b.x = this.stageW / 2 + this.groundThickness / 2 + 5;
				b.y = this.hasShowDesc ? -b.height - 500 * Math.random() : -b.height - 500 * Math.random() - 800;
				b.width=35;
				b.height=33;
				this.addChildAt(b, this.numChildren - 1);
				this.itemArray.push(b);
				console.log("create item, array length= " + this.itemArray.length + " " + GameItem.getArrayLength(b.textureName))
			}
		};
		d.prototype.gameUpdate = function() {
			var b = egret.getTimer(),
				a = 1E3 / (b - this._lastTime);
			this._lastTime = b;
			b = 60 / a;
			this.isPause && (b = 0);
			for (var b = 5 * b, c, d = [], a = 0; a < this.brickArray.length; a++) c = this.brickArray[a], c.y += b, c.y > this.stageH && d.push(c);
			for (a = 0; a < this.itemArray.length; a++) c = this.itemArray[a], c.y += b, c.y > this.stageH && d.push(c);
			for (a = 0; a < d.length; a++) d[a] instanceof Obstacle ? (c = d[a], Obstacle.recalim(c, c.textureName), this.contains(c) && this.removeChild(c), this.brickArray.splice(this.brickArray.indexOf(c),
				1)) : d[a] instanceof GameItem && (c = d[a], GameItem.reclaim(c, c.textureName), this.contains(c) && this.removeChild(c), this.itemArray.splice(this.itemArray.indexOf(c), 1));
			this.gameHitTest()
		};
		d.prototype.gameHitTest = function() {
			var b, a, c = this.brickArray.length,
				d = this.itemArray.length;
			for (b = 0; b < c; b++) a = this.brickArray[b], GameUtil.hitTest(this.actor, a) && (this.actor.blood -= 10, this.actor.updateActorBlood());
			c = [];
			for (b = 0; b < d; b++) a = this.itemArray[b], GameUtil.hitTest(this.actor, a) && (a.textureName == GameItem.POISON ? (this.contains(a) &&
				this.removeChild(a), GameItem.reclaim(a, a.textureName), c.push(a), this.actor.blood -= 1, this.actor.updateActorBlood(), this.actor.showFlag(Actor.FLAG_MINUS), this.eatPoison++) : a.textureName == GameItem.FOOD && (this.contains(a) && this.removeChild(a), GameItem.reclaim(a, a.textureName), c.push(a), this.actor.blood < this.actor.totalBlood && (this.actor.blood += 1, this.actor.updateActorBlood()), this.actor.showFlag(Actor.FLAG_PLUS), this.eatFood++));
			for (b = 0; b < c.length; b++) this.itemArray.splice(this.itemArray.indexOf(c[b]),
				1);
			0 >= this.actor.blood ? this.gameOver() : (this.scoreCard.text = this.distance + "00 m", this.foodCard.text = "" + this.eatFood, this.poisonCard.text = "" + this.eatPoison)
		};
		d.prototype.gameOver = function() {
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.actorController.handleEvent, this.actorController);
			this.removeEventListener(egret.Event.ENTER_FRAME, this.gameUpdate, this);
			this.brickTimer.stop();
			this.itemTimer.stop();
			this.hasShowDesc = !0;
			this.brickArray = [];
			this.itemArray = [];
			this.actor.pauseJumpNew();
			this.actor.getImage(Actor.LEFT).image.stop();
			this.actor.getImage(Actor.RIGHT).image.stop();
			egret.Tween.get(this.actor.getImage(this.actor.getSide()), {
				loop: !0
			}).to({
				alpha: 0
			}, 100).to({
				alpha: 1
			}, 100);
			this.dieTimer = new egret.Timer(1E3, 1);
			this.dieTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.changeToEndScene, this);
			this.dieTimer.start();
			console.log("game over")
		};
		d.prototype.changeToEndScene = function() {
			egret.Tween.removeAllTweens();
			this.dieTimer.stop();
			this.dieTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.changeToEndScene,
				this);
			this.removeChildren();
			this.endScene = new EndScene;
			this.endScene.x = 0;
			this.endScene.y = 0;
			this.addChild(this.endScene);
			this.endScene.setScore(this.distance);
			this.endScene.setFood(this.eatFood);
			this.endScene.setPoison(this.eatPoison);
			this.bestDistance < this.distance && (this.bestDistance = this.distance);
			this.endScene.setMaxScore(this.bestDistance);
			this.share()
		};
		d.prototype.gameRestart = function() {
			this.removeChildren();
			this.removeEventListener(EndScene.GAMESTART, this.gameRestart, this);
			this.createScene()
		};
		d.prototype.share = function() {
			var title = "我跑了"+ this.bestDistance + "00 m，躲过了"+this.endScene.percent.text+"块五仁月饼，你能超过我吗?";
			setShare(title, title);
			LBGAME.Share.updateData({
				call:true,// false只更新数据||true更新数据+调启用户端分享
				title:"我跑了"+ this.bestDistance + "00 m，躲过了"+this.endScene.percent.text+"块五仁月饼，你能超过我吗?",
				imgUrl:"http://www.liebao.cn/game/wuren/img/icon.png",
				cont:"我跑了"+ this.bestDistance + "00 m，躲过了"+this.endScene.percent.text+"块五仁月饼，你能超过我吗?",
				url:_url,
				doneJump:"http://mp.weixin.qq.com/s?__biz=MjM5NzE3NzA1Mg==&mid=204087927&idx=1&sn=3502817ee0fcc4b2a98ee44d99d49728#rd",
				fun:"" // 分享时回调，不 fun:function(){}
			});
		};
		d.prototype.countTime = function() {
			this.distance++;
			10 < this.brickTimer.delay && (this.brickTimer.delay -= 10);
			500 < this.itemTimer.delay && (this.itemTimer.delay -=
				5)
		};
		return d
	}(egret.DisplayObjectContainer);
GameScene.prototype.__class__ = "GameScene";