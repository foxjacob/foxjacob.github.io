this.createjs = this.createjs || {};
createjs.extend = function(t, e) {
	"use strict";

	function i() {
		this.constructor = t
	}
	i.prototype = e.prototype;
	return t.prototype = new i
};
this.createjs = this.createjs || {};
createjs.promote = function(t, e) {
	"use strict";
	var i = t.prototype,
		s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
	if (s) {
		i[(e += "_") + "constructor"] = s.constructor;
		for (var r in s) {
			if (i.hasOwnProperty(r) && typeof s[r] == "function") {
				i[e + r] = s[r]
			}
		}
	}
	return t
};
this.createjs = this.createjs || {};
createjs.indexOf = function(t, e) {
	"use strict";
	for (var i = 0, s = t.length; i < s; i++) {
		if (e === t[i]) {
			return i
		}
	}
	return -1
};
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.type = t;
		this.target = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.bubbles = !! e;
		this.cancelable = !! i;
		this.timeStamp = (new Date).getTime();
		this.defaultPrevented = false;
		this.propagationStopped = false;
		this.immediatePropagationStopped = false;
		this.removed = false
	}
	var e = t.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && true
	};
	e.stopPropagation = function() {
		this.propagationStopped = true
	};
	e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true
	};
	e.remove = function() {
		this.removed = true
	};
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable)
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	};
	createjs.Event = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this._listeners = null;
		this._captureListeners = null
	}
	var e = t.prototype;
	t.initialize = function(t) {
		t.addEventListener = e.addEventListener;
		t.on = e.on;
		t.removeEventListener = t.off = e.removeEventListener;
		t.removeAllEventListeners = e.removeAllEventListeners;
		t.hasEventListener = e.hasEventListener;
		t.dispatchEvent = e.dispatchEvent;
		t._dispatchEvent = e._dispatchEvent;
		t.willTrigger = e.willTrigger
	};
	e.addEventListener = function(t, e, i) {
		var s;
		if (i) {
			s = this._captureListeners = this._captureListeners || {}
		} else {
			s = this._listeners = this._listeners || {}
		}
		var r = s[t];
		if (r) {
			this.removeEventListener(t, e, i)
		}
		r = s[t];
		if (!r) {
			s[t] = [e]
		} else {
			r.push(e)
		}
		return e
	};
	e.on = function(t, e, i, s, r, n) {
		if (e.handleEvent) {
			i = i || e;
			e = e.handleEvent
		}
		i = i || this;
		return this.addEventListener(t, function(t) {
			e.call(i, t, r);
			s && t.remove()
		}, n)
	};
	e.removeEventListener = function(t, e, i) {
		var s = i ? this._captureListeners : this._listeners;
		if (!s) {
			return
		}
		var r = s[t];
		if (!r) {
			return
		}
		for (var n = 0, a = r.length; n < a; n++) {
			if (r[n] == e) {
				if (a == 1) {
					delete s[t]
				} else {
					r.splice(n, 1)
				}
				break
			}
		}
	};
	e.off = e.removeEventListener;
	e.removeAllEventListeners = function(t) {
		if (!t) {
			this._listeners = this._captureListeners = null
		} else {
			if (this._listeners) {
				delete this._listeners[t]
			}
			if (this._captureListeners) {
				delete this._captureListeners[t]
			}
		}
	};
	e.dispatchEvent = function(t) {
		if (typeof t == "string") {
			var e = this._listeners;
			if (!e || !e[t]) {
				return false
			}
			t = new createjs.Event(t)
		} else if (t.target && t.clone) {
			t = t.clone()
		}
		try {
			t.target = this
		} catch (i) {}
		if (!t.bubbles || !this.parent) {
			this._dispatchEvent(t, 2)
		} else {
			var s = this,
				r = [s];
			while (s.parent) {
				r.push(s = s.parent)
			}
			var n, a = r.length;
			for (n = a - 1; n >= 0 && !t.propagationStopped; n--) {
				r[n]._dispatchEvent(t, 1 + (n == 0))
			}
			for (n = 1; n < a && !t.propagationStopped; n++) {
				r[n]._dispatchEvent(t, 3)
			}
		}
		return t.defaultPrevented
	};
	e.hasEventListener = function(t) {
		var e = this._listeners,
			i = this._captureListeners;
		return !!(e && e[t] || i && i[t])
	};
	e.willTrigger = function(t) {
		var e = this;
		while (e) {
			if (e.hasEventListener(t)) {
				return true
			}
			e = e.parent
		}
		return false
	};
	e.toString = function() {
		return "[EventDispatcher]"
	};
	e._dispatchEvent = function(t, e) {
		var i, s = e == 1 ? this._captureListeners : this._listeners;
		if (t && s) {
			var r = s[t.type];
			if (!r || !(i = r.length)) {
				return
			}
			try {
				t.currentTarget = this
			} catch (n) {}
			try {
				t.eventPhase = e
			} catch (n) {}
			t.removed = false;
			r = r.slice();
			for (var a = 0; a < i && !t.immediatePropagationStopped; a++) {
				var o = r[a];
				if (o.handleEvent) {
					o.handleEvent(t)
				} else {
					o(t)
				}
				if (t.removed) {
					this.off(t.type, o, e == 1);
					t.removed = false
				}
			}
		}
	};
	createjs.EventDispatcher = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "Ticker cannot be instantiated."
	}
	t.RAF_SYNCHED = "synched";
	t.RAF = "raf";
	t.TIMEOUT = "timeout";
	t.useRAF = false;
	t.timingMode = null;
	t.maxDelta = 0;
	t.paused = false;
	t.removeEventListener = null;
	t.removeAllEventListeners = null;
	t.dispatchEvent = null;
	t.hasEventListener = null;
	t._listeners = null;
	createjs.EventDispatcher.initialize(t);
	t._addEventListener = t.addEventListener;
	t.addEventListener = function() {
		!t._inited && t.init();
		return t._addEventListener.apply(t, arguments)
	};
	t._inited = false;
	t._startTime = 0;
	t._pausedTime = 0;
	t._ticks = 0;
	t._pausedTicks = 0;
	t._interval = 50;
	t._lastTime = 0;
	t._times = null;
	t._tickTimes = null;
	t._timerId = null;
	t._raf = true;
	t.setInterval = function(e) {
		t._interval = e;
		if (!t._inited) {
			return
		}
		t._setupTick()
	};
	t.getInterval = function() {
		return t._interval
	};
	t.setFPS = function(e) {
		t.setInterval(1e3 / e)
	};
	t.getFPS = function() {
		return 1e3 / t._interval
	};
	try {
		Object.defineProperties(t, {
			interval: {
				get: t.getInterval,
				set: t.setInterval
			},
			framerate: {
				get: t.getFPS,
				set: t.setFPS
			}
		})
	} catch (e) {
		console.log(e)
	}
	t.init = function() {
		if (t._inited) {
			return
		}
		t._inited = true;
		t._times = [];
		t._tickTimes = [];
		t._startTime = t._getTime();
		t._times.push(t._lastTime = 0);
		t.interval = t._interval
	};
	t.reset = function() {
		if (t._raf) {
			var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
			e && e(t._timerId)
		} else {
			clearTimeout(t._timerId)
		}
		t.removeAllEventListeners("tick");
		t._timerId = t._times = t._tickTimes = null;
		t._startTime = t._lastTime = t._ticks = 0;
		t._inited = false
	};
	t.getMeasuredTickTime = function(e) {
		var i = 0,
			s = t._tickTimes;
		if (!s || s.length < 1) {
			return -1
		}
		e = Math.min(s.length, e || t.getFPS() | 0);
		for (var r = 0; r < e; r++) {
			i += s[r]
		}
		return i / e
	};
	t.getMeasuredFPS = function(e) {
		var i = t._times;
		if (!i || i.length < 2) {
			return -1
		}
		e = Math.min(i.length - 1, e || t.getFPS() | 0);
		return 1e3 / ((i[0] - i[e]) / e)
	};
	t.setPaused = function(e) {
		t.paused = e
	};
	t.getPaused = function() {
		return t.paused
	};
	t.getTime = function(e) {
		return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
	};
	t.getEventTime = function(e) {
		return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
	};
	t.getTicks = function(e) {
		return t._ticks - (e ? t._pausedTicks : 0)
	};
	t._handleSynch = function() {
		t._timerId = null;
		t._setupTick();
		if (t._getTime() - t._lastTime >= (t._interval - 1) * .97) {
			t._tick()
		}
	};
	t._handleRAF = function() {
		t._timerId = null;
		t._setupTick();
		t._tick()
	};
	t._handleTimeout = function() {
		t._timerId = null;
		t._setupTick();
		t._tick()
	};
	t._setupTick = function() {
		if (t._timerId != null) {
			return
		}
		var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
		if (e == t.RAF_SYNCHED || e == t.RAF) {
			var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if (i) {
				t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch);
				t._raf = true;
				return
			}
		}
		t._raf = false;
		t._timerId = setTimeout(t._handleTimeout, t._interval)
	};
	t._tick = function() {
		var e = t.paused;
		var i = t._getTime();
		var s = i - t._lastTime;
		t._lastTime = i;
		t._ticks++;
		if (e) {
			t._pausedTicks++;
			t._pausedTime += s
		}
		if (t.hasEventListener("tick")) {
			var r = new createjs.Event("tick");
			var n = t.maxDelta;
			r.delta = n && s > n ? n : s;
			r.paused = e;
			r.time = i;
			r.runTime = i - t._pausedTime;
			t.dispatchEvent(r)
		}
		t._tickTimes.unshift(t._getTime() - i);
		while (t._tickTimes.length > 100) {
			t._tickTimes.pop()
		}
		t._times.unshift(i);
		while (t._times.length > 100) {
			t._times.pop()
		}
	};
	var i = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	t._getTime = function() {
		return (i && i.call(performance) || (new Date).getTime()) - t._startTime
	};
	createjs.Ticker = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "UID cannot be instantiated"
	}
	t._nextID = 0;
	t.get = function() {
		return t._nextID++
	};
	createjs.UID = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s, r, n, a, o, h, c) {
		this.Event_constructor(t, e, i);
		this.stageX = s;
		this.stageY = r;
		this.rawX = h == null ? s : h;
		this.rawY = c == null ? r : c;
		this.nativeEvent = n;
		this.pointerID = a;
		this.primary = !! o
	}
	var e = createjs.extend(t, createjs.Event);
	e._get_localX = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
	};
	e._get_localY = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
	};
	e._get_isTouch = function() {
		return this.pointerID !== -1
	};
	try {
		Object.defineProperties(e, {
			localX: {
				get: e._get_localX
			},
			localY: {
				get: e._get_localY
			},
			isTouch: {
				get: e._get_isTouch
			}
		})
	} catch (i) {}
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
	};
	e.toString = function() {
		return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
	};
	createjs.MouseEvent = createjs.promote(t, "Event")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s, r, n) {
		this.setValues(t, e, i, s, r, n)
	}
	var e = t.prototype;
	t.DEG_TO_RAD = Math.PI / 180;
	t.identity = null;
	e.setValues = function(t, e, i, s, r, n) {
		this.a = t == null ? 1 : t;
		this.b = e || 0;
		this.c = i || 0;
		this.d = s == null ? 1 : s;
		this.tx = r || 0;
		this.ty = n || 0;
		return this
	};
	e.append = function(t, e, i, s, r, n) {
		var a = this.a;
		var o = this.b;
		var h = this.c;
		var c = this.d;
		if (t != 1 || e != 0 || i != 0 || s != 1) {
			this.a = a * t + h * e;
			this.b = o * t + c * e;
			this.c = a * i + h * s;
			this.d = o * i + c * s
		}
		this.tx = a * r + h * n + this.tx;
		this.ty = o * r + c * n + this.ty;
		return this
	};
	e.prepend = function(t, e, i, s, r, n) {
		var a = this.a;
		var o = this.c;
		var h = this.tx;
		this.a = t * a + i * this.b;
		this.b = e * a + s * this.b;
		this.c = t * o + i * this.d;
		this.d = e * o + s * this.d;
		this.tx = t * h + i * this.ty + r;
		this.ty = e * h + s * this.ty + n;
		return this
	};
	e.appendMatrix = function(t) {
		return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
	};
	e.prependMatrix = function(t) {
		return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
	};
	e.appendTransform = function(e, i, s, r, n, a, o, h, c) {
		if (n % 360) {
			var u = n * t.DEG_TO_RAD;
			var l = Math.cos(u);
			var d = Math.sin(u)
		} else {
			l = 1;
			d = 0
		}
		if (a || o) {
			a *= t.DEG_TO_RAD;
			o *= t.DEG_TO_RAD;
			this.append(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i);
			this.append(l * s, d * s, -d * r, l * r, 0, 0)
		} else {
			this.append(l * s, d * s, -d * r, l * r, e, i)
		}
		if (h || c) {
			this.tx -= h * this.a + c * this.c;
			this.ty -= h * this.b + c * this.d
		}
		return this
	};
	e.prependTransform = function(e, i, s, r, n, a, o, h, c) {
		if (n % 360) {
			var u = n * t.DEG_TO_RAD;
			var l = Math.cos(u);
			var d = Math.sin(u)
		} else {
			l = 1;
			d = 0
		}
		if (h || c) {
			this.tx -= h;
			this.ty -= c
		}
		if (a || o) {
			a *= t.DEG_TO_RAD;
			o *= t.DEG_TO_RAD;
			this.prepend(l * s, d * s, -d * r, l * r, 0, 0);
			this.prepend(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i)
		} else {
			this.prepend(l * s, d * s, -d * r, l * r, e, i)
		}
		return this
	};
	e.rotate = function(e) {
		e = e * t.DEG_TO_RAD;
		var i = Math.cos(e);
		var s = Math.sin(e);
		var r = this.a;
		var n = this.b;
		this.a = r * i + this.c * s;
		this.b = n * i + this.d * s;
		this.c = -r * s + this.c * i;
		this.d = -n * s + this.d * i;
		return this
	};
	e.skew = function(e, i) {
		e = e * t.DEG_TO_RAD;
		i = i * t.DEG_TO_RAD;
		this.append(Math.cos(i), Math.sin(i), -Math.sin(e), Math.cos(e), 0, 0);
		return this
	};
	e.scale = function(t, e) {
		this.a *= t;
		this.b *= t;
		this.c *= e;
		this.d *= e;
		return this
	};
	e.translate = function(t, e) {
		this.tx += this.a * t + this.c * e;
		this.ty += this.b * t + this.d * e;
		return this
	};
	e.identity = function() {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
		return this
	};
	e.invert = function() {
		var t = this.a;
		var e = this.b;
		var i = this.c;
		var s = this.d;
		var r = this.tx;
		var n = t * s - e * i;
		this.a = s / n;
		this.b = -e / n;
		this.c = -i / n;
		this.d = t / n;
		this.tx = (i * this.ty - s * r) / n;
		this.ty = -(t * this.ty - e * r) / n;
		return this
	};
	e.isIdentity = function() {
		return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1
	};
	e.equals = function(t) {
		return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d
	};
	e.transformPoint = function(t, e, i) {
		i = i || {};
		i.x = t * this.a + e * this.c + this.tx;
		i.y = t * this.b + e * this.d + this.ty;
		return i
	};
	e.decompose = function(e) {
		if (e == null) {
			e = {}
		}
		e.x = this.tx;
		e.y = this.ty;
		e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
		e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
		var i = Math.atan2(-this.c, this.d);
		var s = Math.atan2(this.b, this.a);
		var r = Math.abs(1 - i / s);
		if (r < 1e-5) {
			e.rotation = s / t.DEG_TO_RAD;
			if (this.a < 0 && this.d >= 0) {
				e.rotation += e.rotation <= 0 ? 180 : -180
			}
			e.skewX = e.skewY = 0
		} else {
			e.skewX = i / t.DEG_TO_RAD;
			e.skewY = s / t.DEG_TO_RAD
		}
		return e
	};
	e.copy = function(t) {
		return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
	};
	e.clone = function() {
		return new t(this.a, this.b, this.c, this.d, this.tx, this.ty)
	};
	e.toString = function() {
		return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
	};
	t.identity = new t;
	createjs.Matrix2D = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s, r) {
		this.setValues(t, e, i, s, r)
	}
	var e = t.prototype;
	e.setValues = function(t, e, i, s, r) {
		this.visible = t == null ? true : !! t;
		this.alpha = e == null ? 1 : e;
		this.shadow = i;
		this.compositeOperation = i;
		this.matrix = r || this.matrix && this.matrix.identity() || new createjs.Matrix2D;
		return this
	};
	e.append = function(t, e, i, s, r) {
		this.alpha *= e;
		this.shadow = i || this.shadow;
		this.compositeOperation = s || this.compositeOperation;
		this.visible = this.visible && t;
		r && this.matrix.appendMatrix(r);
		return this
	};
	e.prepend = function(t, e, i, s, r) {
		this.alpha *= e;
		this.shadow = this.shadow || i;
		this.compositeOperation = this.compositeOperation || s;
		this.visible = this.visible && t;
		r && this.matrix.prependMatrix(r);
		return this
	};
	e.identity = function() {
		this.visible = true;
		this.alpha = 1;
		this.shadow = this.compositeOperation = null;
		this.matrix.identity();
		return this
	};
	e.clone = function() {
		return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
	};
	createjs.DisplayProps = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.setValues(t, e)
	}
	var e = t.prototype;
	e.setValues = function(t, e) {
		this.x = t || 0;
		this.y = e || 0;
		return this
	};
	e.copy = function(t) {
		this.x = t.x;
		this.y = t.y;
		return this
	};
	e.clone = function() {
		return new t(this.x, this.y)
	};
	e.toString = function() {
		return "[Point (x=" + this.x + " y=" + this.y + ")]"
	};
	createjs.Point = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s) {
		this.setValues(t, e, i, s)
	}
	var e = t.prototype;
	e.setValues = function(t, e, i, s) {
		this.x = t || 0;
		this.y = e || 0;
		this.width = i || 0;
		this.height = s || 0;
		return this
	};
	e.extend = function(t, e, i, s) {
		i = i || 0;
		s = s || 0;
		if (t + i > this.x + this.width) {
			this.width = t + i - this.x
		}
		if (e + s > this.y + this.height) {
			this.height = e + s - this.y
		}
		if (t < this.x) {
			this.width += this.x - t;
			this.x = t
		}
		if (e < this.y) {
			this.height += this.y - e;
			this.y = e
		}
		return this
	};
	e.pad = function(t, e, i, s) {
		this.x -= t;
		this.y -= e;
		this.width += t + i;
		this.height += e + s;
		return this
	};
	e.copy = function(t) {
		return this.setValues(t.x, t.y, t.width, t.height)
	};
	e.contains = function(t, e, i, s) {
		i = i || 0;
		s = s || 0;
		return t >= this.x && t + i <= this.x + this.width && e >= this.y && e + s <= this.y + this.height
	};
	e.union = function(t) {
		return this.clone().extend(t.x, t.y, t.width, t.height)
	};
	e.intersection = function(e) {
		var i = e.x,
			s = e.y,
			r = i + e.width,
			n = s + e.height;
		if (this.x > i) {
			i = this.x
		}
		if (this.y > s) {
			s = this.y
		}
		if (this.x + this.width < r) {
			r = this.x + this.width
		}
		if (this.y + this.height < n) {
			n = this.y + this.height
		}
		return r <= i || n <= s ? null : new t(i, s, r - i, n - s)
	};
	e.intersects = function(t) {
		return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height
	};
	e.isEmpty = function() {
		return this.width <= 0 || this.height <= 0
	};
	e.clone = function() {
		return new t(this.x, this.y, this.width, this.height)
	};
	e.toString = function() {
		return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
	};
	createjs.Rectangle = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s, r, n, a) {
		if (!t.addEventListener) {
			return
		}
		this.target = t;
		this.overLabel = i == null ? "over" : i;
		this.outLabel = e == null ? "out" : e;
		this.downLabel = s == null ? "down" : s;
		this.play = r;
		this._isPressed = false;
		this._isOver = false;
		this._enabled = false;
		t.mouseChildren = false;
		this.enabled = true;
		this.handleEvent({});
		if (n) {
			if (a) {
				n.actionsEnabled = false;
				n.gotoAndStop && n.gotoAndStop(a)
			}
			t.hitArea = n
		}
	}
	var e = t.prototype;
	e.setEnabled = function(t) {
		if (t == this._enabled) {
			return
		}
		var e = this.target;
		this._enabled = t;
		if (t) {
			e.cursor = "pointer";
			e.addEventListener("rollover", this);
			e.addEventListener("rollout", this);
			e.addEventListener("mousedown", this);
			e.addEventListener("pressup", this)
		} else {
			e.cursor = null;
			e.removeEventListener("rollover", this);
			e.removeEventListener("rollout", this);
			e.removeEventListener("mousedown", this);
			e.removeEventListener("pressup", this)
		}
	};
	e.getEnabled = function() {
		return this._enabled
	};
	try {
		Object.defineProperties(e, {
			enabled: {
				get: e.getEnabled,
				set: e.setEnabled
			}
		})
	} catch (i) {}
	e.toString = function() {
		return "[ButtonHelper]"
	};
	e.handleEvent = function(t) {
		var e, i = this.target,
			s = t.type;
		if (s == "mousedown") {
			this._isPressed = true;
			e = this.downLabel
		} else if (s == "pressup") {
			this._isPressed = false;
			e = this._isOver ? this.overLabel : this.outLabel
		} else if (s == "rollover") {
			this._isOver = true;
			e = this._isPressed ? this.downLabel : this.overLabel
		} else {
			this._isOver = false;
			e = this._isPressed ? this.overLabel : this.outLabel
		}
		if (this.play) {
			i.gotoAndPlay && i.gotoAndPlay(e)
		} else {
			i.gotoAndStop && i.gotoAndStop(e)
		}
	};
	createjs.ButtonHelper = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s) {
		this.color = t || "black";
		this.offsetX = e || 0;
		this.offsetY = i || 0;
		this.blur = s || 0
	}
	var e = t.prototype;
	t.identity = new t("transparent", 0, 0, 0);
	e.toString = function() {
		return "[Shadow]"
	};
	e.clone = function() {
		return new t(this.color, this.offsetX, this.offsetY, this.blur)
	};
	createjs.Shadow = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.EventDispatcher_constructor();
		this.complete = true;
		this.framerate = 0;
		this._animations = null;
		this._frames = null;
		this._images = null;
		this._data = null;
		this._loadCount = 0;
		this._frameHeight = 0;
		this._frameWidth = 0;
		this._numFrames = 0;
		this._regX = 0;
		this._regY = 0;
		this._spacing = 0;
		this._margin = 0;
		this._parseData(t)
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.getAnimations = function() {
		return this._animations.slice()
	};
	try {
		Object.defineProperties(e, {
			animations: {
				get: e.getAnimations
			}
		})
	} catch (i) {}
	e.getNumFrames = function(t) {
		if (t == null) {
			return this._frames ? this._frames.length : this._numFrames || 0
		} else {
			var e = this._data[t];
			if (e == null) {
				return 0
			} else {
				return e.frames.length
			}
		}
	};
	e.getAnimation = function(t) {
		return this._data[t]
	};
	e.getFrame = function(t) {
		var e;
		if (this._frames && (e = this._frames[t])) {
			return e
		}
		return null
	};
	e.getFrameBounds = function(t, e) {
		var i = this.getFrame(t);
		return i ? (e || new createjs.Rectangle).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height) : null
	};
	e.toString = function() {
		return "[SpriteSheet]"
	};
	e.clone = function() {
		throw "SpriteSheet cannot be cloned."
	};
	e._parseData = function(t) {
		var e, i, s, r;
		if (t == null) {
			return
		}
		this.framerate = t.framerate || 0;
		if (t.images && (i = t.images.length) > 0) {
			r = this._images = [];
			for (e = 0; e < i; e++) {
				var n = t.images[e];
				if (typeof n == "string") {
					var a = n;
					n = document.createElement("img");
					n.src = a
				}
				r.push(n);
				if (!n.getContext && !n.complete) {
					this._loadCount++;
					this.complete = false;
					(function(t) {
						n.onload = function() {
							t._handleImageLoad()
						}
					})(this)
				}
			}
		}
		if (t.frames == null) {} else if (t.frames instanceof Array) {
			this._frames = [];
			r = t.frames;
			for (e = 0, i = r.length; e < i; e++) {
				var o = r[e];
				this._frames.push({
					image: this._images[o[4] ? o[4] : 0],
					rect: new createjs.Rectangle(o[0], o[1], o[2], o[3]),
					regX: o[5] || 0,
					regY: o[6] || 0
				})
			}
		} else {
			s = t.frames;
			this._frameWidth = s.width;
			this._frameHeight = s.height;
			this._regX = s.regX || 0;
			this._regY = s.regY || 0;
			this._spacing = s.spacing || 0;
			this._margin = s.margin || 0;
			this._numFrames = s.count;
			if (this._loadCount == 0) {
				this._calculateFrames()
			}
		}
		this._animations = [];
		if ((s = t.animations) != null) {
			this._data = {};
			var h;
			for (h in s) {
				var c = {
					name: h
				};
				var u = s[h];
				if (typeof u == "number") {
					r = c.frames = [u]
				} else if (u instanceof Array) {
					if (u.length == 1) {
						c.frames = [u[0]]
					} else {
						c.speed = u[3];
						c.next = u[2];
						r = c.frames = [];
						for (e = u[0]; e <= u[1]; e++) {
							r.push(e)
						}
					}
				} else {
					c.speed = u.speed;
					c.next = u.next;
					var l = u.frames;
					r = c.frames = typeof l == "number" ? [l] : l.slice(0)
				}
				if (c.next === true || c.next === undefined) {
					c.next = h
				}
				if (c.next === false || r.length < 2 && c.next == h) {
					c.next = null
				}
				if (!c.speed) {
					c.speed = 1
				}
				this._animations.push(h);
				this._data[h] = c
			}
		}
	};
	e._handleImageLoad = function() {
		if (--this._loadCount == 0) {
			this._calculateFrames();
			this.complete = true;
			this.dispatchEvent("complete")
		}
	};
	e._calculateFrames = function() {
		if (this._frames || this._frameWidth == 0) {
			return
		}
		this._frames = [];
		var t = this._numFrames || 1e5;
		var e = 0,
			i = this._frameWidth,
			s = this._frameHeight;
		var r = this._spacing,
			n = this._margin;
		t: for (var a = 0, o = this._images; a < o.length; a++) {
			var h = o[a],
				c = h.width,
				u = h.height;
			var l = n;
			while (l <= u - n - s) {
				var d = n;
				while (d <= c - n - i) {
					if (e >= t) {
						break t
					}
					e++;
					this._frames.push({
						image: h,
						rect: new createjs.Rectangle(d, l, i, s),
						regX: this._regX,
						regY: this._regY
					});
					d += i + r
				}
				l += s + r
			}
		}
		this._numFrames = e
	};
	createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.command = null;
		this._stroke = null;
		this._strokeStyle = null;
		this._strokeIgnoreScale = false;
		this._fill = null;
		this._instructions = [];
		this._commitIndex = 0;
		this._activeInstructions = [];
		this._dirty = false;
		this._storeIndex = 0;
		this.clear()
	}
	var e = t.prototype;
	var i = t;
	t.getRGB = function(t, e, i, s) {
		if (t != null && i == null) {
			s = e;
			i = t & 255;
			e = t >> 8 & 255;
			t = t >> 16 & 255
		}
		if (s == null) {
			return "rgb(" + t + "," + e + "," + i + ")"
		} else {
			return "rgba(" + t + "," + e + "," + i + "," + s + ")"
		}
	};
	t.getHSL = function(t, e, i, s) {
		if (s == null) {
			return "hsl(" + t % 360 + "," + e + "%," + i + "%)"
		} else {
			return "hsla(" + t % 360 + "," + e + "%," + i + "%," + s + ")"
		}
	};
	t.BASE_64 = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
		H: 7,
		I: 8,
		J: 9,
		K: 10,
		L: 11,
		M: 12,
		N: 13,
		O: 14,
		P: 15,
		Q: 16,
		R: 17,
		S: 18,
		T: 19,
		U: 20,
		V: 21,
		W: 22,
		X: 23,
		Y: 24,
		Z: 25,
		a: 26,
		b: 27,
		c: 28,
		d: 29,
		e: 30,
		f: 31,
		g: 32,
		h: 33,
		i: 34,
		j: 35,
		k: 36,
		l: 37,
		m: 38,
		n: 39,
		o: 40,
		p: 41,
		q: 42,
		r: 43,
		s: 44,
		t: 45,
		u: 46,
		v: 47,
		w: 48,
		x: 49,
		y: 50,
		z: 51,
		0: 52,
		1: 53,
		2: 54,
		3: 55,
		4: 56,
		5: 57,
		6: 58,
		7: 59,
		8: 60,
		9: 61,
		"+": 62,
		"/": 63
	};
	t.STROKE_CAPS_MAP = ["butt", "round", "square"];
	t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
	var s = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	if (s.getContext) {
		t._ctx = s.getContext("2d");
		s.width = s.height = 1
	}
	e.getInstructions = function() {
		this._updateInstructions();
		return this._instructions
	};
	try {
		Object.defineProperties(e, {
			instructions: {
				get: e.getInstructions
			}
		})
	} catch (r) {}
	e.isEmpty = function() {
		return !(this._instructions.length || this._activeInstructions.length)
	};
	e.draw = function(t, e) {
		this._updateInstructions();
		var i = this._instructions;
		for (var s = this._storeIndex, r = i.length; s < r; s++) {
			i[s].exec(t, e)
		}
	};
	e.drawAsPath = function(t) {
		this._updateInstructions();
		var e, i = this._instructions;
		for (var s = this._storeIndex, r = i.length; s < r; s++) {
			if ((e = i[s]).path !== false) {
				e.exec(t)
			}
		}
	};
	e.moveTo = function(t, e) {
		return this.append(new i.MoveTo(t, e), true)
	};
	e.lineTo = function(t, e) {
		return this.append(new i.LineTo(t, e))
	};
	e.arcTo = function(t, e, s, r, n) {
		return this.append(new i.ArcTo(t, e, s, r, n))
	};
	e.arc = function(t, e, s, r, n, a) {
		return this.append(new i.Arc(t, e, s, r, n, a))
	};
	e.quadraticCurveTo = function(t, e, s, r) {
		return this.append(new i.QuadraticCurveTo(t, e, s, r))
	};
	e.bezierCurveTo = function(t, e, s, r, n, a) {
		return this.append(new i.BezierCurveTo(t, e, s, r, n, a))
	};
	e.rect = function(t, e, s, r) {
		return this.append(new i.Rect(t, e, s, r))
	};
	e.closePath = function() {
		return this._activeInstructions.length ? this.append(new i.ClosePath) : this
	};
	e.clear = function() {
		this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
		this._strokeStyle = this._stroke = this._fill = null;
		this._dirty = this._strokeIgnoreScale = false;
		return this
	};
	e.beginFill = function(t) {
		return this._setFill(t ? new i.Fill(t) : null)
	};
	e.beginLinearGradientFill = function(t, e, s, r, n, a) {
		return this._setFill((new i.Fill).linearGradient(t, e, s, r, n, a))
	};
	e.beginRadialGradientFill = function(t, e, s, r, n, a, o, h) {
		return this._setFill((new i.Fill).radialGradient(t, e, s, r, n, a, o, h))
	};
	e.beginBitmapFill = function(t, e, s) {
		return this._setFill(new i.Fill(null, s).bitmap(t, e))
	};
	e.endFill = function() {
		return this.beginFill()
	};
	e.setStrokeStyle = function(t, e, s, r, n) {
		this._updateInstructions(true);
		this._strokeStyle = this.command = new i.StrokeStyle(t, e, s, r, n);
		if (this._stroke) {
			this._stroke.ignoreScale = n
		}
		this._strokeIgnoreScale = n;
		return this
	};
	e.beginStroke = function(t) {
		return this._setStroke(t ? new i.Stroke(t) : null)
	};
	e.beginLinearGradientStroke = function(t, e, s, r, n, a) {
		return this._setStroke((new i.Stroke).linearGradient(t, e, s, r, n, a))
	};
	e.beginRadialGradientStroke = function(t, e, s, r, n, a, o, h) {
		return this._setStroke((new i.Stroke).radialGradient(t, e, s, r, n, a, o, h))
	};
	e.beginBitmapStroke = function(t, e) {
		return this._setStroke((new i.Stroke).bitmap(t, e))
	};
	e.endStroke = function() {
		return this.beginStroke()
	};
	e.curveTo = e.quadraticCurveTo;
	e.drawRect = e.rect;
	e.drawRoundRect = function(t, e, i, s, r) {
		return this.drawRoundRectComplex(t, e, i, s, r, r, r, r)
	};
	e.drawRoundRectComplex = function(t, e, s, r, n, a, o, h) {
		return this.append(new i.RoundRect(t, e, s, r, n, a, o, h))
	};
	e.drawCircle = function(t, e, s) {
		return this.append(new i.Circle(t, e, s))
	};
	e.drawEllipse = function(t, e, s, r) {
		return this.append(new i.Ellipse(t, e, s, r))
	};
	e.drawPolyStar = function(t, e, s, r, n, a) {
		return this.append(new i.PolyStar(t, e, s, r, n, a))
	};
	e.append = function(t, e) {
		this._activeInstructions.push(t);
		this.command = t;
		if (!e) {
			this._dirty = true
		}
		return this
	};
	e.decodePath = function(e) {
		var i = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
		var s = [2, 2, 4, 6, 0];
		var r = 0,
			n = e.length;
		var a = [];
		var o = 0,
			h = 0;
		var c = t.BASE_64;
		while (r < n) {
			var u = e.charAt(r);
			var l = c[u];
			var d = l >> 3;
			var f = i[d];
			if (!f || l & 3) {
				throw "bad path data (@" + r + "): " + u
			}
			var _ = s[d];
			if (!d) {
				o = h = 0
			}
			a.length = 0;
			r++;
			var p = (l >> 2 & 1) + 2;
			for (var g = 0; g < _; g++) {
				var v = c[e.charAt(r)];
				var m = v >> 5 ? -1 : 1;
				v = (v & 31) << 6 | c[e.charAt(r + 1)];
				if (p == 3) {
					v = v << 6 | c[e.charAt(r + 2)]
				}
				v = m * v / 10;
				if (g % 2) {
					o = v += o
				} else {
					h = v += h
				}
				a[g] = v;
				r += p
			}
			f.apply(this, a)
		}
		return this
	};
	e.store = function() {
		this._updateInstructions(true);
		this._storeIndex = this._instructions.length;
		return this
	};
	e.unstore = function() {
		this._storeIndex = 0;
		return this
	};
	e.clone = function() {
		var e = new t;
		e.command = this.command;
		e._stroke = this._stroke;
		e._strokeStyle = this._strokeStyle;
		e._strokeIgnoreScale = this._strokeIgnoreScale;
		e._fill = this._fill;
		e._instructions = this._instructions.slice();
		e._commitIndex = this._commitIndex;
		e._activeInstructions = this._activeInstructions.slice();
		e._dirty = this._dirty;
		e._storeIndex = this._storeIndex;
		return e
	};
	e.toString = function() {
		return "[Graphics]"
	};
	e.mt = e.moveTo;
	e.lt = e.lineTo;
	e.at = e.arcTo;
	e.bt = e.bezierCurveTo;
	e.qt = e.quadraticCurveTo;
	e.a = e.arc;
	e.r = e.rect;
	e.cp = e.closePath;
	e.c = e.clear;
	e.f = e.beginFill;
	e.lf = e.beginLinearGradientFill;
	e.rf = e.beginRadialGradientFill;
	e.bf = e.beginBitmapFill;
	e.ef = e.endFill;
	e.ss = e.setStrokeStyle;
	e.s = e.beginStroke;
	e.ls = e.beginLinearGradientStroke;
	e.rs = e.beginRadialGradientStroke;
	e.bs = e.beginBitmapStroke;
	e.es = e.endStroke;
	e.dr = e.drawRect;
	e.rr = e.drawRoundRect;
	e.rc = e.drawRoundRectComplex;
	e.dc = e.drawCircle;
	e.de = e.drawEllipse;
	e.dp = e.drawPolyStar;
	e.p = e.decodePath;
	e._updateInstructions = function(e) {
		var i = this._instructions,
			s = this._activeInstructions,
			r = this._commitIndex;
		if (this._dirty && s.length) {
			i.length = r;
			i.push(t.beginCmd);
			var n = s.length,
				a = i.length;
			i.length = a + n;
			for (var o = 0; o < n; o++) {
				i[o + a] = s[o]
			}
			if (this._fill) {
				i.push(this._fill)
			}
			if (this._stroke && this._strokeStyle) {
				i.push(this._strokeStyle)
			}
			if (this._stroke) {
				i.push(this._stroke)
			}
			this._dirty = false
		}
		if (e) {
			s.length = 0;
			this._commitIndex = i.length
		}
	};
	e._setFill = function(t) {
		this._updateInstructions(true);
		if (this._fill = t) {
			this.command = t
		}
		return this
	};
	e._setStroke = function(t) {
		this._updateInstructions(true);
		if (this._stroke = t) {
			this.command = t;
			t.ignoreScale = this._strokeIgnoreScale
		}
		return this
	};
	(i.LineTo = function(t, e) {
		this.x = t;
		this.y = e
	}).prototype.exec = function(t) {
		t.lineTo(this.x, this.y)
	};
	(i.MoveTo = function(t, e) {
		this.x = t;
		this.y = e
	}).prototype.exec = function(t) {
		t.moveTo(this.x, this.y)
	};
	(i.ArcTo = function(t, e, i, s, r) {
		this.x1 = t;
		this.y1 = e;
		this.x2 = i;
		this.y2 = s;
		this.radius = r
	}).prototype.exec = function(t) {
		t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
	};
	(i.Arc = function(t, e, i, s, r, n) {
		this.x = t;
		this.y = e;
		this.radius = i;
		this.startAngle = s;
		this.endAngle = r;
		this.anticlockwise = !! n
	}).prototype.exec = function(t) {
		t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
	};
	(i.QuadraticCurveTo = function(t, e, i, s) {
		this.cpx = t;
		this.cpy = e;
		this.x = i;
		this.y = s
	}).prototype.exec = function(t) {
		t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
	};
	(i.BezierCurveTo = function(t, e, i, s, r, n) {
		this.cp1x = t;
		this.cp1y = e;
		this.cp2x = i;
		this.cp2y = s;
		this.x = r;
		this.y = n
	}).prototype.exec = function(t) {
		t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
	};
	(i.Rect = function(t, e, i, s) {
		this.x = t;
		this.y = e;
		this.w = i;
		this.h = s
	}).prototype.exec = function(t) {
		t.rect(this.x, this.y, this.w, this.h)
	};
	(i.ClosePath = function() {}).prototype.exec = function(t) {
		t.closePath()
	};
	(i.BeginPath = function() {}).prototype.exec = function(t) {
		t.beginPath()
	};
	e = (i.Fill = function(t, e) {
		this.style = t;
		this.matrix = e
	}).prototype;
	e.exec = function(t) {
		if (!this.style) {
			return
		}
		t.fillStyle = this.style;
		var e = this.matrix;
		if (e) {
			t.save();
			t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)
		}
		t.fill();
		if (e) {
			t.restore()
		}
	};
	e.linearGradient = function(e, i, s, r, n, a) {
		var o = this.style = t._ctx.createLinearGradient(s, r, n, a);
		for (var h = 0, c = e.length; h < c; h++) {
			o.addColorStop(i[h], e[h])
		}
		o.props = {
			colors: e,
			ratios: i,
			x0: s,
			y0: r,
			x1: n,
			y1: a,
			type: "linear"
		};
		return this
	};
	e.radialGradient = function(e, i, s, r, n, a, o, h) {
		var c = this.style = t._ctx.createRadialGradient(s, r, n, a, o, h);
		for (var u = 0, l = e.length; u < l; u++) {
			c.addColorStop(i[u], e[u])
		}
		c.props = {
			colors: e,
			ratios: i,
			x0: s,
			y0: r,
			r0: n,
			x1: a,
			y1: o,
			r1: h,
			type: "radial"
		};
		return this
	};
	e.bitmap = function(e, i) {
		var s = this.style = t._ctx.createPattern(e, i || "");
		s.props = {
			image: e,
			repetition: i,
			type: "bitmap"
		};
		return this
	};
	e.path = false;
	e = (i.Stroke = function(t, e) {
		this.style = t;
		this.ignoreScale = e
	}).prototype;
	e.exec = function(t) {
		if (!this.style) {
			return
		}
		t.strokeStyle = this.style;
		if (this.ignoreScale) {
			t.save();
			t.setTransform(1, 0, 0, 1, 0, 0)
		}
		t.stroke();
		if (this.ignoreScale) {
			t.restore()
		}
	};
	e.linearGradient = i.Fill.prototype.linearGradient;
	e.radialGradient = i.Fill.prototype.radialGradient;
	e.bitmap = i.Fill.prototype.bitmap;
	e.path = false;
	e = (i.StrokeStyle = function(t, e, i, s) {
		this.width = t;
		this.caps = e;
		this.joints = i;
		this.miterLimit = s
	}).prototype;
	e.exec = function(e) {
		e.lineWidth = this.width == null ? "1" : this.width;
		e.lineCap = this.caps == null ? "butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps];
		e.lineJoin = this.joints == null ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[this.joints];
		e.miterLimit = this.miterLimit == null ? "10" : this.miterLimit
	};
	e.path = false;
	(i.RoundRect = function(t, e, i, s, r, n, a, o) {
		this.x = t;
		this.y = e;
		this.w = i;
		this.h = s;
		this.radiusTL = r;
		this.radiusTR = n;
		this.radiusBR = a;
		this.radiusBL = o
	}).prototype.exec = function(t) {
		var e = (h < c ? h : c) / 2;
		var i = 0,
			s = 0,
			r = 0,
			n = 0;
		var a = this.x,
			o = this.y,
			h = this.w,
			c = this.h;
		var u = this.radiusTL,
			l = this.radiusTR,
			d = this.radiusBR,
			f = this.radiusBL;
		if (u < 0) {
			u *= i = -1
		}
		if (u > e) {
			u = e
		}
		if (l < 0) {
			l *= s = -1
		}
		if (l > e) {
			l = e
		}
		if (d < 0) {
			d *= r = -1
		}
		if (d > e) {
			d = e
		}
		if (f < 0) {
			f *= n = -1
		}
		if (f > e) {
			f = e
		}
		t.moveTo(a + h - l, o);
		t.arcTo(a + h + l * s, o - l * s, a + h, o + l, l);
		t.lineTo(a + h, o + c - d);
		t.arcTo(a + h + d * r, o + c + d * r, a + h - d, o + c, d);
		t.lineTo(a + f, o + c);
		t.arcTo(a - f * n, o + c + f * n, a, o + c - f, f);
		t.lineTo(a, o + u);
		t.arcTo(a - u * i, o - u * i, a + u, o, u);
		t.closePath()
	};
	(i.Circle = function(t, e, i) {
		this.x = t;
		this.y = e;
		this.radius = i
	}).prototype.exec = function(t) {
		t.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
	};
	(i.Ellipse = function(t, e, i, s) {
		this.x = t;
		this.y = e;
		this.w = i;
		this.h = s
	}).prototype.exec = function(t) {
		var e = this.x,
			i = this.y;
		var s = this.w,
			r = this.h;
		var n = .5522848;
		var a = s / 2 * n;
		var o = r / 2 * n;
		var h = e + s;
		var c = i + r;
		var u = e + s / 2;
		var l = i + r / 2;
		t.moveTo(e, l);
		t.bezierCurveTo(e, l - o, u - a, i, u, i);
		t.bezierCurveTo(u + a, i, h, l - o, h, l);
		t.bezierCurveTo(h, l + o, u + a, c, u, c);
		t.bezierCurveTo(u - a, c, e, l + o, e, l)
	};
	(i.PolyStar = function(t, e, i, s, r, n) {
		this.x = t;
		this.y = e;
		this.radius = i;
		this.sides = s;
		this.pointSize = r;
		this.angle = n
	}).prototype.exec = function(t) {
		var e = this.x,
			i = this.y;
		var s = this.radius;
		var r = (this.angle || 0) / 180 * Math.PI;
		var n = this.sides;
		var a = 1 - (this.pointSize || 0);
		var o = Math.PI / n;
		t.moveTo(e + Math.cos(r) * s, i + Math.sin(r) * s);
		for (var h = 0; h < n; h++) {
			r += o;
			if (a != 1) {
				t.lineTo(e + Math.cos(r) * s * a, i + Math.sin(r) * s * a)
			}
			r += o;
			t.lineTo(e + Math.cos(r) * s, i + Math.sin(r) * s)
		}
		t.closePath()
	};
	t.beginCmd = new i.BeginPath;
	createjs.Graphics = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.EventDispatcher_constructor();
		this.alpha = 1;
		this.cacheCanvas = null;
		this.cacheID = 0;
		this.id = createjs.UID.get();
		this.mouseEnabled = true;
		this.tickEnabled = true;
		this.name = null;
		this.parent = null;
		this.regX = 0;
		this.regY = 0;
		this.rotation = 0;
		this.scaleX = 1;
		this.scaleY = 1;
		this.skewX = 0;
		this.skewY = 0;
		this.shadow = null;
		this.visible = true;
		this.x = 0;
		this.y = 0;
		this.transformMatrix = null;
		this.compositeOperation = null;
		this.snapToPixel = true;
		this.filters = null;
		this.mask = null;
		this.hitArea = null;
		this.cursor = null;
		this._cacheOffsetX = 0;
		this._cacheOffsetY = 0;
		this._filterOffsetX = 0;
		this._filterOffsetY = 0;
		this._cacheScale = 1;
		this._cacheDataURLID = 0;
		this._cacheDataURL = null;
		this._props = new createjs.DisplayProps;
		this._rectangle = new createjs.Rectangle;
		this._bounds = null
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"];

	t.suppressCrossDomainErrors = false;
	t._snapToPixelEnabled = false;
	var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	if (i.getContext) {
		t._hitTestCanvas = i;
		t._hitTestContext = i.getContext("2d");
		i.width = i.height = 1
	}
	t._nextCacheID = 1;
	e.getStage = function() {
		var t = this,
			e = createjs["Stage"];
		while (t.parent) {
			t = t.parent
		}
		if (t instanceof e) {
			return t
		}
		return null
	};
	try {
		Object.defineProperties(e, {
			stage: {
				get: e.getStage
			}
		})
	} catch (s) {}
	e.isVisible = function() {
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0)
	};
	e.draw = function(t, e) {
		var i = this.cacheCanvas;
		if (e || !i) {
			return false
		}
		var s = this._cacheScale;
		t.drawImage(i, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, i.width / s, i.height / s);
		return true
	};
	e.updateContext = function(e) {
		var i = this,
			s = i.mask,
			r = i._props.matrix;
		if (s && s.graphics && !s.graphics.isEmpty()) {
			s.getMatrix(r);
			e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty);
			s.graphics.drawAsPath(e);
			e.clip();
			r.invert();
			e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)
		}
		this.getMatrix(r);
		var n = r.tx,
			a = r.ty;
		if (t._snapToPixelEnabled && i.snapToPixel) {
			n = n + (n < 0 ? -.5 : .5) | 0;
			a = a + (a < 0 ? -.5 : .5) | 0
		}
		e.transform(r.a, r.b, r.c, r.d, n, a);
		e.globalAlpha *= i.alpha;
		if (i.compositeOperation) {
			e.globalCompositeOperation = i.compositeOperation
		}
		if (i.shadow) {
			this._applyShadow(e, i.shadow)
		}
	};
	e.cache = function(t, e, i, s, r) {
		r = r || 1;
		if (!this.cacheCanvas) {
			this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")
		}
		this._cacheWidth = i;
		this._cacheHeight = s;
		this._cacheOffsetX = t;
		this._cacheOffsetY = e;
		this._cacheScale = r;
		this.updateCache()
	};
	e.updateCache = function(e) {
		var i = this.cacheCanvas;
		if (!i) {
			throw "cache() must be called before updateCache()"
		}
		var s = this._cacheScale,
			r = this._cacheOffsetX * s,
			n = this._cacheOffsetY * s;
		var a = this._cacheWidth,
			o = this._cacheHeight,
			h = i.getContext("2d");
		var c = this._getFilterBounds();
		r += this._filterOffsetX = c.x;
		n += this._filterOffsetY = c.y;
		a = Math.ceil(a * s) + c.width;
		o = Math.ceil(o * s) + c.height;
		if (a != i.width || o != i.height) {
			i.width = a;
			i.height = o
		} else if (!e) {
			h.clearRect(0, 0, a + 1, o + 1)
		}
		h.save();
		h.globalCompositeOperation = e;
		h.setTransform(s, 0, 0, s, -r, -n);
		this.draw(h, true);
		this._applyFilters();
		h.restore();
		this.cacheID = t._nextCacheID++
	};
	e.uncache = function() {
		this._cacheDataURL = this.cacheCanvas = null;
		this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
		this._cacheScale = 1
	};
	e.getCacheDataURL = function() {
		if (!this.cacheCanvas) {
			return null
		}
		if (this.cacheID != this._cacheDataURLID) {
			this._cacheDataURL = this.cacheCanvas.toDataURL()
		}
		return this._cacheDataURL
	};
	e.localToGlobal = function(t, e, i) {
		return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs.Point)
	};
	e.globalToLocal = function(t, e, i) {
		return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new createjs.Point)
	};
	e.localToLocal = function(t, e, i, s) {
		s = this.localToGlobal(t, e, s);
		return i.globalToLocal(s.x, s.y, s)
	};
	e.setTransform = function(t, e, i, s, r, n, a, o, h) {
		this.x = t || 0;
		this.y = e || 0;
		this.scaleX = i == null ? 1 : i;
		this.scaleY = s == null ? 1 : s;
		this.rotation = r || 0;
		this.skewX = n || 0;
		this.skewY = a || 0;
		this.regX = o || 0;
		this.regY = h || 0;
		return this
	};
	e.getMatrix = function(t) {
		var e = this,
			i = t && t.identity() || new createjs.Matrix2D;
		return e.transformMatrix ? i.copy(e.transformMatrix) : i.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
	};
	e.getConcatenatedMatrix = function(t) {
		var e = this,
			i = this.getMatrix(t);
		while (e = e.parent) {
			i.prependMatrix(e.getMatrix(e._props.matrix))
		}
		return i
	};
	e.getConcatenatedDisplayProps = function(t) {
		t = t ? t.identity() : new createjs.DisplayProps;
		var e = this,
			i = e.getMatrix(t.matrix);
		do {
			t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation);
			if (e != this) {
				i.prependMatrix(e.getMatrix(e._props.matrix))
			}
		} while (e = e.parent);
		return t
	};
	e.hitTest = function(e, i) {
		var s = t._hitTestContext;
		s.setTransform(1, 0, 0, 1, -e, -i);
		this.draw(s);
		var r = this._testHit(s);
		s.setTransform(1, 0, 0, 1, 0, 0);
		s.clearRect(0, 0, 2, 2);
		return r
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	e.getBounds = function() {
		if (this._bounds) {
			return this._rectangle.copy(this._bounds)
		}
		var t = this.cacheCanvas;
		if (t) {
			var e = this._cacheScale;
			return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)
		}
		return null
	};
	e.getTransformedBounds = function() {
		return this._getBounds()
	};
	e.setBounds = function(t, e, i, s) {
		if (t == null) {
			this._bounds = t
		}
		this._bounds = (this._bounds || new createjs.Rectangle).setValues(t, e, i, s)
	};
	e.clone = function() {
		return this._cloneProps(new t)
	};
	e.toString = function() {
		return "[DisplayObject (name=" + this.name + ")]"
	};
	e._cloneProps = function(t) {
		t.alpha = this.alpha;
		t.mouseEnabled = this.mouseEnabled;
		t.tickEnabled = this.tickEnabled;
		t.name = this.name;
		t.regX = this.regX;
		t.regY = this.regY;
		t.rotation = this.rotation;
		t.scaleX = this.scaleX;
		t.scaleY = this.scaleY;
		t.shadow = this.shadow;
		t.skewX = this.skewX;
		t.skewY = this.skewY;
		t.visible = this.visible;
		t.x = this.x;
		t.y = this.y;
		t.compositeOperation = this.compositeOperation;
		t.snapToPixel = this.snapToPixel;
		t.filters = this.filters == null ? null : this.filters.slice(0);
		t.mask = this.mask;
		t.hitArea = this.hitArea;
		t.cursor = this.cursor;
		t._bounds = this._bounds;
		return t
	};
	e._applyShadow = function(t, e) {
		e = e || Shadow.identity;
		t.shadowColor = e.color;
		t.shadowOffsetX = e.offsetX;
		t.shadowOffsetY = e.offsetY;
		t.shadowBlur = e.blur
	};
	e._tick = function(t) {
		var e = this._listeners;
		if (e && e["tick"]) {
			t.target = null;
			t.propagationStopped = t.immediatePropagationStopped = false;
			this.dispatchEvent(t)
		}
	};
	e._testHit = function(e) {
		try {
			var i = e.getImageData(0, 0, 1, 1).data[3] > 1
		} catch (s) {
			if (!t.suppressCrossDomainErrors) {
				throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
			}
		}
		return i
	};
	e._applyFilters = function() {
		if (!this.filters || this.filters.length == 0 || !this.cacheCanvas) {
			return
		}
		var t = this.filters.length;
		var e = this.cacheCanvas.getContext("2d");
		var i = this.cacheCanvas.width;
		var s = this.cacheCanvas.height;
		for (var r = 0; r < t; r++) {
			this.filters[r].applyFilter(e, 0, 0, i, s)
		}
	};
	e._getFilterBounds = function(t) {
		var e, i = this.filters,
			s = this._rectangle.setValues(0, 0, 0, 0);
		if (!i || !(e = i.length)) {
			return s
		}
		for (var r = 0; r < e; r++) {
			var n = this.filters[r];
			n.getBounds && n.getBounds(s)
		}
		return s
	};
	e._getBounds = function(t, e) {
		return this._transformBounds(this.getBounds(), t, e)
	};
	e._transformBounds = function(t, e, i) {
		if (!t) {
			return t
		}
		var s = t.x,
			r = t.y,
			n = t.width,
			a = t.height,
			o = this._props.matrix;
		o = i ? o.identity() : this.getMatrix(o);
		if (s || r) {
			o.appendTransform(0, 0, 1, 1, 0, 0, 0, -s, -r)
		}
		if (e) {
			o.prependMatrix(e)
		}
		var h = n * o.a,
			c = n * o.b;
		var u = a * o.c,
			l = a * o.d;
		var d = o.tx,
			f = o.ty;
		var _ = d,
			p = d,
			g = f,
			v = f;
		if ((s = h + d) < _) {
			_ = s
		} else if (s > p) {
			p = s
		}
		if ((s = h + u + d) < _) {
			_ = s
		} else if (s > p) {
			p = s
		}
		if ((s = u + d) < _) {
			_ = s
		} else if (s > p) {
			p = s
		}
		if ((r = c + f) < g) {
			g = r
		} else if (r > v) {
			v = r
		}
		if ((r = c + l + f) < g) {
			g = r
		} else if (r > v) {
			v = r
		}
		if ((r = l + f) < g) {
			g = r
		} else if (r > v) {
			v = r
		}
		return t.setValues(_, g, p - _, v - g)
	};
	e._hasMouseEventListener = function() {
		var e = t._MOUSE_EVENTS;
		for (var i = 0, s = e.length; i < s; i++) {
			if (this.hasEventListener(e[i])) {
				return true
			}
		}
		return !!this.cursor
	};
	createjs.DisplayObject = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.DisplayObject_constructor();
		this.children = [];
		this.mouseChildren = true;
		this.tickChildren = true
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.getNumChildren = function() {
		return this.children.length
	};
	try {
		Object.defineProperties(e, {
			numChildren: {
				get: e.getNumChildren
			}
		})
	} catch (i) {}
	e.initialize = t;
	e.isVisible = function() {
		var t = this.cacheCanvas || this.children.length;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t)
	};
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) {
			return true
		}
		var i = this.children.slice();
		for (var s = 0, r = i.length; s < r; s++) {
			var n = i[s];
			if (!n.isVisible()) {
				continue
			}
			t.save();
			n.updateContext(t);
			n.draw(t);
			t.restore()
		}
		return true
	};
	e.addChild = function(t) {
		if (t == null) {
			return t
		}
		var e = arguments.length;
		if (e > 1) {
			for (var i = 0; i < e; i++) {
				this.addChild(arguments[i])
			}
			return arguments[e - 1]
		}
		if (t.parent) {
			t.parent.removeChild(t)
		}
		t.parent = this;
		this.children.push(t);
		t.dispatchEvent("added");
		return t
	};
	e.addChildAt = function(t, e) {
		var i = arguments.length;
		var s = arguments[i - 1];
		if (s < 0 || s > this.children.length) {
			return arguments[i - 2]
		}
		if (i > 2) {
			for (var r = 0; r < i - 1; r++) {
				this.addChildAt(arguments[r], s + r)
			}
			return arguments[i - 2]
		}
		if (t.parent) {
			t.parent.removeChild(t)
		}
		t.parent = this;
		this.children.splice(e, 0, t);
		t.dispatchEvent("added");
		return t
	};
	e.removeChild = function(t) {
		var e = arguments.length;
		if (e > 1) {
			var i = true;
			for (var s = 0; s < e; s++) {
				i = i && this.removeChild(arguments[s])
			}
			return i
		}
		return this.removeChildAt(createjs.indexOf(this.children, t))
	};
	e.removeChildAt = function(t) {
		var e = arguments.length;
		if (e > 1) {
			var i = [];
			for (var s = 0; s < e; s++) {
				i[s] = arguments[s]
			}
			i.sort(function(t, e) {
				return e - t
			});
			var r = true;
			for (var s = 0; s < e; s++) {
				r = r && this.removeChildAt(i[s])
			}
			return r
		}
		if (t < 0 || t > this.children.length - 1) {
			return false
		}
		var n = this.children[t];
		if (n) {
			n.parent = null
		}
		this.children.splice(t, 1);
		n.dispatchEvent("removed");
		return true
	};
	e.removeAllChildren = function() {
		var t = this.children;
		while (t.length) {
			this.removeChildAt(0)
		}
	};
	e.getChildAt = function(t) {
		return this.children[t]
	};
	e.getChildByName = function(t) {
		var e = this.children;
		for (var i = 0, s = e.length; i < s; i++) {
			if (e[i].name == t) {
				return e[i]
			}
		}
		return null
	};
	e.sortChildren = function(t) {
		this.children.sort(t)
	};
	e.getChildIndex = function(t) {
		return createjs.indexOf(this.children, t)
	};
	e.swapChildrenAt = function(t, e) {
		var i = this.children;
		var s = i[t];
		var r = i[e];
		if (!s || !r) {
			return
		}
		i[t] = r;
		i[e] = s
	};
	e.swapChildren = function(t, e) {
		var i = this.children;
		var s, r;
		for (var n = 0, a = i.length; n < a; n++) {
			if (i[n] == t) {
				s = n
			}
			if (i[n] == e) {
				r = n
			}
			if (s != null && r != null) {
				break
			}
		}
		if (n == a) {
			return
		}
		i[s] = e;
		i[r] = t
	};
	e.setChildIndex = function(t, e) {
		var i = this.children,
			s = i.length;
		if (t.parent != this || e < 0 || e >= s) {
			return
		}
		for (var r = 0; r < s; r++) {
			if (i[r] == t) {
				break
			}
		}
		if (r == s || r == e) {
			return
		}
		i.splice(r, 1);
		i.splice(e, 0, t)
	};
	e.contains = function(t) {
		while (t) {
			if (t == this) {
				return true
			}
			t = t.parent
		}
		return false
	};
	e.hitTest = function(t, e) {
		return this.getObjectUnderPoint(t, e) != null
	};
	e.getObjectsUnderPoint = function(t, e, i) {
		var s = [];
		var r = this.localToGlobal(t, e);
		this._getObjectsUnderPoint(r.x, r.y, s, i > 0, i == 1);
		return s
	};
	e.getObjectUnderPoint = function(t, e, i) {
		var s = this.localToGlobal(t, e);
		return this._getObjectsUnderPoint(s.x, s.y, null, i > 0, i == 1)
	};
	e.getBounds = function() {
		return this._getBounds(null, true)
	};
	e.getTransformedBounds = function() {
		return this._getBounds()
	};
	e.clone = function(e) {
		var i = this._cloneProps(new t);
		if (e) {
			this._cloneChildren(i)
		}
		return i
	};
	e.toString = function() {
		return "[Container (name=" + this.name + ")]"
	};
	e._tick = function(t) {
		if (this.tickChildren) {
			for (var e = this.children.length - 1; e >= 0; e--) {
				var i = this.children[e];
				if (i.tickEnabled && i._tick) {
					i._tick(t)
				}
			}
		}
		this.DisplayObject__tick(t)
	};
	e._cloneChildren = function(t) {
		if (t.children.length) {
			t.removeAllChildren()
		}
		var e = t.children;
		for (var i = 0, s = this.children.length; i < s; i++) {
			var r = this.children[i].clone(true);
			r.parent = t;
			e.push(r)
		}
	};
	e._getObjectsUnderPoint = function(e, i, s, r, n, a) {
		a = a || 0;
		if (!a && !this._testMask(this, e, i)) {
			return null
		}
		var o, h = createjs.DisplayObject._hitTestContext;
		n = n || r && this._hasMouseEventListener();
		var c = this.children,
			u = c.length;
		for (var l = u - 1; l >= 0; l--) {
			var d = c[l];
			var f = d.hitArea;
			if (!d.visible || !f && !d.isVisible() || r && !d.mouseEnabled) {
				continue
			}
			if (!f && !this._testMask(d, e, i)) {
				continue
			}
			if (!f && d instanceof t) {
				var _ = d._getObjectsUnderPoint(e, i, s, r, n, a + 1);
				if (!s && _) {
					return r && !this.mouseChildren ? this : _
				}
			} else {
				if (r && !n && !d._hasMouseEventListener()) {
					continue
				}
				var p = d.getConcatenatedDisplayProps(d._props);
				o = p.matrix;
				if (f) {
					o.appendMatrix(f.getMatrix(f._props.matrix));
					p.alpha = f.alpha
				}
				h.globalAlpha = p.alpha;
				h.setTransform(o.a, o.b, o.c, o.d, o.tx - e, o.ty - i);
				(f || d).draw(h);
				if (!this._testHit(h)) {
					continue
				}
				h.setTransform(1, 0, 0, 1, 0, 0);
				h.clearRect(0, 0, 2, 2);
				if (s) {
					s.push(d)
				} else {
					return r && !this.mouseChildren ? this : d
				}
			}
		}
		return null
	};
	e._testMask = function(t, e, i) {
		var s = t.mask;
		if (!s || !s.graphics || s.graphics.isEmpty()) {
			return true
		}
		var r = this._props.matrix,
			n = t.parent;
		r = n ? n.getConcatenatedMatrix(r) : r.identity();
		r = s.getMatrix(s._props.matrix).prependMatrix(r);
		var a = createjs.DisplayObject._hitTestContext;
		a.setTransform(r.a, r.b, r.c, r.d, r.tx - e, r.ty - i);
		s.graphics.drawAsPath(a);
		a.fillStyle = "#000";
		a.fill();
		if (!this._testHit(a)) {
			return false
		}
		a.setTransform(1, 0, 0, 1, 0, 0);
		a.clearRect(0, 0, 2, 2);
		return true
	};
	e._getBounds = function(t, e) {
		var i = this.DisplayObject_getBounds();
		if (i) {
			return this._transformBounds(i, t, e)
		}
		var s = this._props.matrix;
		s = e ? s.identity() : this.getMatrix(s);
		if (t) {
			s.prependMatrix(t)
		}
		var r = this.children.length,
			n = null;
		for (var a = 0; a < r; a++) {
			var o = this.children[a];
			if (!o.visible || !(i = o._getBounds(s))) {
				continue
			}
			if (n) {
				n.extend(i.x, i.y, i.width, i.height)
			} else {
				n = i.clone()
			}
		}
		return n
	};
	createjs.Container = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.Container_constructor();
		this.autoClear = true;
		this.canvas = typeof t == "string" ? document.getElementById(t) : t;
		this.mouseX = 0;
		this.mouseY = 0;
		this.drawRect = null;
		this.snapToPixelEnabled = false;
		this.mouseInBounds = false;
		this.tickOnUpdate = true;
		this.mouseMoveOutside = false;
		this.preventSelection = true;
		this._pointerData = {};
		this._pointerCount = 0;
		this._primaryPointerID = null;
		this._mouseOverIntervalID = null;
		this._nextStage = null;
		this._prevStage = null;
		this.enableDOMEvents(true)
	}
	var e = createjs.extend(t, createjs.Container);
	e._get_nextStage = function() {
		return this._nextStage
	};
	e._set_nextStage = function(t) {
		if (this._nextStage) {
			this._nextStage._prevStage = null
		}
		if (t) {
			t._prevStage = this
		}
		this._nextStage = t
	};
	try {
		Object.defineProperties(e, {
			nextStage: {
				get: e._get_nextStage,
				set: e._set_nextStage
			}
		})
	} catch (i) {}
	e.update = function(t) {
		if (!this.canvas) {
			return
		}
		if (this.tickOnUpdate) {
			this.tick(t)
		}
		if (this.dispatchEvent("drawstart")) {
			return
		}
		createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
		var e = this.drawRect,
			i = this.canvas.getContext("2d");
		i.setTransform(1, 0, 0, 1, 0, 0);
		if (this.autoClear) {
			if (e) {
				i.clearRect(e.x, e.y, e.width, e.height)
			} else {
				i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
			}
		}
		i.save();
		if (this.drawRect) {
			i.beginPath();
			i.rect(e.x, e.y, e.width, e.height);
			i.clip()
		}
		this.updateContext(i);
		this.draw(i, false);
		i.restore();
		this.dispatchEvent("drawend")
	};
	e.tick = function(t) {
		if (!this.tickEnabled || this.dispatchEvent("tickstart")) {
			return
		}
		var e = new createjs.Event("tick");
		if (t) {
			for (var i in t) {
				if (t.hasOwnProperty(i)) {
					e[i] = t[i]
				}
			}
		}
		this._tick(e);
		this.dispatchEvent("tickend")
	};
	e.handleEvent = function(t) {
		if (t.type == "tick") {
			this.update(t)
		}
	};
	e.clear = function() {
		if (!this.canvas) {
			return
		}
		var t = this.canvas.getContext("2d");
		t.setTransform(1, 0, 0, 1, 0, 0);
		t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
	};
	e.toDataURL = function(t, e) {
		var i, s = this.canvas.getContext("2d"),
			r = this.canvas.width,
			n = this.canvas.height;
		if (t) {
			i = s.getImageData(0, 0, r, n);
			var a = s.globalCompositeOperation;
			s.globalCompositeOperation = "destination-over";
			s.fillStyle = t;
			s.fillRect(0, 0, r, n)
		}
		var o = this.canvas.toDataURL(e || "image/png");
		if (t) {
			s.putImageData(i, 0, 0);
			s.globalCompositeOperation = a
		}
		return o
	};
	e.enableMouseOver = function(t) {
		if (this._mouseOverIntervalID) {
			clearInterval(this._mouseOverIntervalID);
			this._mouseOverIntervalID = null;
			if (t == 0) {
				this._testMouseOver(true)
			}
		}
		if (t == null) {
			t = 20
		} else if (t <= 0) {
			return
		}
		var e = this;
		this._mouseOverIntervalID = setInterval(function() {
			e._testMouseOver()
		}, 1e3 / Math.min(50, t))
	};
	e.enableDOMEvents = function(t) {
		if (t == null) {
			t = true
		}
		var e, i, s = this._eventListeners;
		if (!t && s) {
			for (e in s) {
				i = s[e];
				i.t.removeEventListener(e, i.f, false)
			}
			this._eventListeners = null
		} else if (t && !s && this.canvas) {
			var r = window.addEventListener ? window : document;
			var n = this;
			s = this._eventListeners = {};
			s["mouseup"] = {
				t: r,
				f: function(t) {
					n._handleMouseUp(t)
				}
			};
			s["mousemove"] = {
				t: r,
				f: function(t) {
					n._handleMouseMove(t)
				}
			};
			s["dblclick"] = {
				t: this.canvas,
				f: function(t) {
					n._handleDoubleClick(t)
				}
			};
			s["mousedown"] = {
				t: this.canvas,
				f: function(t) {
					n._handleMouseDown(t)
				}
			};
			for (e in s) {
				i = s[e];
				i.t.addEventListener(e, i.f, false)
			}
		}
	};
	e.clone = function() {
		throw "Stage cannot be cloned."
	};
	e.toString = function() {
		return "[Stage (name=" + this.name + ")]"
	};
	e._getElementRect = function(t) {
		var e;
		try {
			e = t.getBoundingClientRect()
		} catch (i) {
			e = {
				top: t.offsetTop,
				left: t.offsetLeft,
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		}
		var s = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
		var r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0);
		var n = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle;
		var a = parseInt(n.paddingLeft) + parseInt(n.borderLeftWidth);
		var o = parseInt(n.paddingTop) + parseInt(n.borderTopWidth);
		var h = parseInt(n.paddingRight) + parseInt(n.borderRightWidth);
		var c = parseInt(n.paddingBottom) + parseInt(n.borderBottomWidth);
		return {
			left: e.left + s + a,
			right: e.right + s - h,
			top: e.top + r + o,
			bottom: e.bottom + r - c
		}
	};
	e._getPointerData = function(t) {
		var e = this._pointerData[t];
		if (!e) {
			e = this._pointerData[t] = {
				x: 0,
				y: 0
			}
		}
		return e
	};
	e._handleMouseMove = function(t) {
		if (!t) {
			t = window.event
		}
		this._handlePointerMove(-1, t, t.pageX, t.pageY)
	};
	e._handlePointerMove = function(t, e, i, s, r) {
		if (this._prevStage && r === undefined) {
			return
		}
		if (!this.canvas) {
			return
		}
		var n = this._nextStage,
			a = this._getPointerData(t);
		var o = a.inBounds;
		this._updatePointerPosition(t, e, i, s);
		if (o || a.inBounds || this.mouseMoveOutside) {
			if (t === -1 && a.inBounds == !o) {
				this._dispatchMouseEvent(this, o ? "mouseleave" : "mouseenter", false, t, a, e)
			}
			this._dispatchMouseEvent(this, "stagemousemove", false, t, a, e);
			this._dispatchMouseEvent(a.target, "pressmove", true, t, a, e)
		}
		n && n._handlePointerMove(t, e, i, s, null)
	};
	e._updatePointerPosition = function(t, e, i, s) {
		var r = this._getElementRect(this.canvas);
		i -= r.left;
		s -= r.top;
		var n = this.canvas.width;
		var a = this.canvas.height;
		i /= (r.right - r.left) / n;
		s /= (r.bottom - r.top) / a;
		var o = this._getPointerData(t);
		if (o.inBounds = i >= 0 && s >= 0 && i <= n - 1 && s <= a - 1) {
			o.x = i;
			o.y = s
		} else if (this.mouseMoveOutside) {
			o.x = i < 0 ? 0 : i > n - 1 ? n - 1 : i;
			o.y = s < 0 ? 0 : s > a - 1 ? a - 1 : s
		}
		o.posEvtObj = e;
		o.rawX = i;
		o.rawY = s;
		if (t === this._primaryPointerID || t === -1) {
			this.mouseX = o.x;
			this.mouseY = o.y;
			this.mouseInBounds = o.inBounds
		}
	};
	e._handleMouseUp = function(t) {
		this._handlePointerUp(-1, t, false)
	};
	e._handlePointerUp = function(t, e, i, s) {
		var r = this._nextStage,
			n = this._getPointerData(t);
		if (this._prevStage && s === undefined) {
			return
		}
		if (n.down) {
			this._dispatchMouseEvent(this, "stagemouseup", false, t, n, e)
		}
		n.down = false;
		var a = null,
			o = n.target;
		if (!s && (o || r)) {
			a = this._getObjectsUnderPoint(n.x, n.y, null, true)
		}
		if (a == o) {
			this._dispatchMouseEvent(o, "click", true, t, n, e)
		}
		this._dispatchMouseEvent(o, "pressup", true, t, n, e);
		if (i) {
			if (t == this._primaryPointerID) {
				this._primaryPointerID = null
			}
			delete this._pointerData[t]
		} else {
			n.target = null
		}
		r && r._handlePointerUp(t, e, i, s || a && this)
	};
	e._handleMouseDown = function(t) {
		this._handlePointerDown(-1, t, t.pageX, t.pageY)
	};
	e._handlePointerDown = function(t, e, i, s, r) {
		if (this.preventSelection) {
			e.preventDefault()
		}
		if (this._primaryPointerID == null || t === -1) {
			this._primaryPointerID = t
		}
		if (s != null) {
			this._updatePointerPosition(t, e, i, s)
		}
		var n = null,
			a = this._nextStage,
			o = this._getPointerData(t);
		if (o.inBounds) {
			this._dispatchMouseEvent(this, "stagemousedown", false, t, o, e);
			o.down = true
		}
		if (!r) {
			n = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true);
			this._dispatchMouseEvent(o.target, "mousedown", true, t, o, e)
		}
		a && a._handlePointerDown(t, e, i, s, r || n && this)
	};
	e._testMouseOver = function(t, e, i) {
		if (this._prevStage && e === undefined) {
			return
		}
		var s = this._nextStage;
		if (!this._mouseOverIntervalID) {
			s && s._testMouseOver(t, e, i);
			return
		}
		var r = this._getPointerData(-1);
		if (!r || !t && this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds) {
			return
		}
		var n = r.posEvtObj;
		var a = i || n && n.target == this.canvas;
		var o = null,
			h = -1,
			c = "",
			u, l, d;
		if (!e && (t || this.mouseInBounds && a)) {
			o = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
			this._mouseOverX = this.mouseX;
			this._mouseOverY = this.mouseY
		}
		var f = this._mouseOverTarget || [];
		var _ = f[f.length - 1];
		var p = this._mouseOverTarget = [];
		u = o;
		while (u) {
			p.unshift(u);
			if (u.cursor != null) {
				c = u.cursor
			}
			u = u.parent
		}
		this.canvas.style.cursor = c;
		if (!e && i) {
			i.canvas.style.cursor = c
		}
		for (l = 0, d = p.length; l < d; l++) {
			if (p[l] != f[l]) {
				break
			}
			h = l
		}
		if (_ != o) {
			this._dispatchMouseEvent(_, "mouseout", true, -1, r, n)
		}
		for (l = f.length - 1; l > h; l--) {
			this._dispatchMouseEvent(f[l], "rollout", false, -1, r, n)
		}
		for (l = p.length - 1; l > h; l--) {
			this._dispatchMouseEvent(p[l], "rollover", false, -1, r, n)
		}
		if (_ != o) {
			this._dispatchMouseEvent(o, "mouseover", true, -1, r, n)
		}
		s && s._testMouseOver(t, e || o && this, i || a && this)
	};
	e._handleDoubleClick = function(t, e) {
		var i = null,
			s = this._nextStage,
			r = this._getPointerData(-1);
		if (!e) {
			i = this._getObjectsUnderPoint(r.x, r.y, null, true);
			this._dispatchMouseEvent(i, "dblclick", true, -1, r, t)
		}
		s && s._handleDoubleClick(t, e || i && this)
	};
	e._dispatchMouseEvent = function(t, e, i, s, r, n) {
		if (!t || !i && !t.hasEventListener(e)) {
			return
		}
		var a = new createjs.MouseEvent(e, i, false, r.x, r.y, n, s, s === this._primaryPointerID || s === -1, r.rawX, r.rawY);
		t.dispatchEvent(a)
	};
	createjs.Stage = createjs.promote(t, "Container")
})();
this.createjs = this.createjs || {};
(function() {
	function t(t) {
		this.DisplayObject_constructor();
		if (typeof t == "string") {
			this.image = document.createElement("img");
			this.image.src = t
		} else {
			this.image = t
		}
		this.sourceRect = null
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.initialize = t;
	e.isVisible = function() {
		var t = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t)
	};
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e) || !this.image) {
			return true
		}
		var i = this.image,
			s = this.sourceRect;
		if (s) {
			var r = s.x,
				n = s.y,
				a = r + s.width,
				o = n + s.height,
				h = 0,
				c = 0,
				u = i.width,
				l = i.height;
			if (r < 0) {
				h -= r;
				r = 0
			}
			if (a > u) {
				a = u
			}
			if (n < 0) {
				c -= n;
				n = 0
			}
			if (o > l) {
				o = l
			}
			t.drawImage(i, r, n, a - r, o - n, h, c, a - r, o - n)
		} else {
			t.drawImage(i, 0, 0)
		}
		return true
	};
	e.getBounds = function() {
		var t = this.DisplayObject_getBounds();
		if (t) {
			return t
		}
		var e = this.sourceRect || this.image;
		var i = this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
		return i ? this._rectangle.setValues(0, 0, e.width, e.height) : null
	};
	e.clone = function() {
		var e = new t(this.image);
		if (this.sourceRect) {
			e.sourceRect = this.sourceRect.clone()
		}
		this._cloneProps(e);
		return e
	};
	e.toString = function() {
		return "[Bitmap (name=" + this.name + ")]"
	};
	createjs.Bitmap = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.DisplayObject_constructor();
		this.currentFrame = 0;
		this.currentAnimation = null;
		this.paused = true;
		this.spriteSheet = t;
		this.currentAnimationFrame = 0;
		this.framerate = 0;
		this._animation = null;
		this._currentFrame = null;
		this._skipAdvance = false;
		if (e) {
			this.gotoAndPlay(e)
		}
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function() {
		var t = this.cacheCanvas || this.spriteSheet.complete;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t)
	};
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) {
			return true
		}
		this._normalizeFrame();
		var i = this.spriteSheet.getFrame(this._currentFrame | 0);
		if (!i) {
			return false
		}
		var s = i.rect;
		if (s.width && s.height) {
			t.drawImage(i.image, s.x, s.y, s.width, s.height, -i.regX, -i.regY, s.width, s.height)
		}
		return true
	};
	e.play = function() {
		this.paused = false
	};
	e.stop = function() {
		this.paused = true
	};
	e.gotoAndPlay = function(t) {
		this.paused = false;
		this._skipAdvance = true;
		this._goto(t)
	};
	e.gotoAndStop = function(t) {
		this.paused = true;
		this._goto(t)
	};
	e.advance = function(t) {
		var e = this.framerate || this.spriteSheet.framerate;
		var i = e && t != null ? t / (1e3 / e) : 1;
		this._normalizeFrame(i)
	};
	e.getBounds = function() {
		return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
	};
	e.clone = function() {
		return this._cloneProps(new t(this.spriteSheet))
	};
	e.toString = function() {
		return "[Sprite (name=" + this.name + ")]"
	};
	e._cloneProps = function(t) {
		this.DisplayObject__cloneProps(t);
		t.currentFrame = this.currentFrame;
		t.currentAnimation = this.currentAnimation;
		t.paused = this.paused;
		t.currentAnimationFrame = this.currentAnimationFrame;
		t.framerate = this.framerate;
		t._animation = this._animation;
		t._currentFrame = this._currentFrame;
		t._skipAdvance = this._skipAdvance;
		return t
	};
	e._tick = function(t) {
		if (!this.paused) {
			if (!this._skipAdvance) {
				this.advance(t && t.delta)
			}
			this._skipAdvance = false
		}
		this.DisplayObject__tick(t)
	};
	e._normalizeFrame = function(t) {
		t = t || 0;
		var e = this._animation;
		var i = this.paused;
		var s = this._currentFrame;
		var r;
		if (e) {
			var n = e.speed || 1;
			var a = this.currentAnimationFrame;
			r = e.frames.length;
			if (a + t * n >= r) {
				var o = e.next;
				if (this._dispatchAnimationEnd(e, s, i, o, r - 1)) {
					return
				} else if (o) {
					return this._goto(o, t - (r - a) / n)
				} else {
					this.paused = true;
					a = e.frames.length - 1
				}
			} else {
				a += t * n
			}
			this.currentAnimationFrame = a;
			this._currentFrame = e.frames[a | 0]
		} else {
			s = this._currentFrame += t;
			r = this.spriteSheet.getNumFrames();
			if (s >= r && r > 0) {
				if (!this._dispatchAnimationEnd(e, s, i, r - 1)) {
					if ((this._currentFrame -= r) >= r) {
						return this._normalizeFrame()
					}
				}
			}
		}
		s = this._currentFrame | 0;
		if (this.currentFrame != s) {
			this.currentFrame = s;
			this.dispatchEvent("change")
		}
	};
	e._dispatchAnimationEnd = function(t, e, i, s, r) {
		var n = t ? t.name : null;
		if (this.hasEventListener("animationend")) {
			var a = new createjs.Event("animationend");
			a.name = n;
			a.next = s;
			this.dispatchEvent(a)
		}
		var o = this._animation != t || this._currentFrame != e;
		if (!o && !i && this.paused) {
			this.currentAnimationFrame = r;
			o = true
		}
		return o
	};
	e._goto = function(t, e) {
		this.currentAnimationFrame = 0;
		if (isNaN(t)) {
			var i = this.spriteSheet.getAnimation(t);
			if (i) {
				this._animation = i;
				this.currentAnimation = t;
				this._normalizeFrame(e)
			}
		} else {
			this.currentAnimation = this._animation = null;
			this._currentFrame = t;
			this._normalizeFrame()
		}
	};
	createjs.Sprite = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor();
		this.graphics = t ? t : new createjs.Graphics
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function() {
		var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t)
	};
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) {
			return true
		}
		this.graphics.draw(t, this);
		return true
	};
	e.clone = function(e) {
		var i = e && this.graphics ? this.graphics.clone() : this.graphics;
		return this._cloneProps(new t(i))
	};
	e.toString = function() {
		return "[Shape (name=" + this.name + ")]"
	};
	createjs.Shape = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.DisplayObject_constructor();
		this.text = t;
		this.font = e;
		this.color = i;
		this.textAlign = "left";
		this.textBaseline = "top";
		this.maxWidth = null;
		this.outline = 0;
		this.lineHeight = 0;
		this.lineWidth = null
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	if (i.getContext) {
		t._workingContext = i.getContext("2d");
		i.width = i.height = 1
	}
	t.H_OFFSETS = {
		start: 0,
		left: 0,
		center: -.5,
		end: -1,
		right: -1
	};
	t.V_OFFSETS = {
		top: 0,
		hanging: -.01,
		middle: -.4,
		alphabetic: -.8,
		ideographic: -.85,
		bottom: -1
	};
	e.isVisible = function() {
		var t = this.cacheCanvas || this.text != null && this.text !== "";
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t)
	};
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) {
			return true
		}
		var i = this.color || "#000";
		if (this.outline) {
			t.strokeStyle = i;
			t.lineWidth = this.outline * 1
		} else {
			t.fillStyle = i
		}
		this._drawText(this._prepContext(t));
		return true
	};
	e.getMeasuredWidth = function() {
		return this._getMeasuredWidth(this.text)
	};
	e.getMeasuredLineHeight = function() {
		return this._getMeasuredWidth("M") * 1.2
	};
	e.getMeasuredHeight = function() {
		return this._drawText(null, {}).height
	};
	e.getBounds = function() {
		var e = this.DisplayObject_getBounds();
		if (e) {
			return e
		}
		if (this.text == null || this.text == "") {
			return null
		}
		var i = this._drawText(null, {});
		var s = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width;
		var r = s * t.H_OFFSETS[this.textAlign || "left"];
		var n = this.lineHeight || this.getMeasuredLineHeight();
		var a = n * t.V_OFFSETS[this.textBaseline || "top"];
		return this._rectangle.setValues(r, a, s, i.height)
	};
	e.getMetrics = function() {
		var e = {
			lines: []
		};
		e.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		e.vOffset = e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"];
		return this._drawText(null, e, e.lines)
	};
	e.clone = function() {
		return this._cloneProps(new t(this.text, this.font, this.color))
	};
	e.toString = function() {
		return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
	};
	e._cloneProps = function(t) {
		this.DisplayObject__cloneProps(t);
		t.textAlign = this.textAlign;
		t.textBaseline = this.textBaseline;
		t.maxWidth = this.maxWidth;
		t.outline = this.outline;
		t.lineHeight = this.lineHeight;
		t.lineWidth = this.lineWidth;
		return t
	};
	e._prepContext = function(t) {
		t.font = this.font || "10px sans-serif";
		t.textAlign = this.textAlign || "left";
		t.textBaseline = this.textBaseline || "top";
		return t
	};
	e._drawText = function(e, i, s) {
		var r = !! e;
		if (!r) {
			e = t._workingContext;
			e.save();
			this._prepContext(e)
		}
		var n = this.lineHeight || this.getMeasuredLineHeight();
		var a = 0,
			o = 0;
		var h = String(this.text).split(/(?:\r\n|\r|\n)/);
		for (var c = 0, u = h.length; c < u; c++) {
			var l = h[c];
			var d = null;
			if (this.lineWidth != null && (d = e.measureText(l).width) > this.lineWidth) {
				var f = l.split(/(\s)/);
				l = f[0];
				d = e.measureText(l).width;
				for (var _ = 1, p = f.length; _ < p; _ += 2) {
					var g = e.measureText(f[_] + f[_ + 1]).width;
					if (d + g > this.lineWidth) {
						if (r) {
							this._drawTextLine(e, l, o * n)
						}
						if (s) {
							s.push(l)
						}
						if (d > a) {
							a = d
						}
						l = f[_ + 1];
						d = e.measureText(l).width;
						o++
					} else {
						l += f[_] + f[_ + 1];
						d += g
					}
				}
			}
			if (r) {
				this._drawTextLine(e, l, o * n)
			}
			if (s) {
				s.push(l)
			}
			if (i && d == null) {
				d = e.measureText(l).width
			}
			if (d > a) {
				a = d
			}
			o++
		}
		if (i) {
			i.width = a;
			i.height = o * n
		}
		if (!r) {
			e.restore()
		}
		return i
	};
	e._drawTextLine = function(t, e, i) {
		if (this.outline) {
			t.strokeText(e, 0, i, this.maxWidth || 65535)
		} else {
			t.fillText(e, 0, i, this.maxWidth || 65535)
		}
	};
	e._getMeasuredWidth = function(e) {
		var i = t._workingContext;
		i.save();
		var s = this._prepContext(i).measureText(e).width;
		i.restore();
		return s
	};
	createjs.Text = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.Container_constructor();
		this.text = t || "";
		this.spriteSheet = e;
		this.lineHeight = 0;
		this.letterSpacing = 0;
		this.spaceWidth = 0;
		this._oldProps = {
			text: 0,
			spriteSheet: 0,
			lineHeight: 0,
			letterSpacing: 0,
			spaceWidth: 0
		}
	}
	var e = createjs.extend(t, createjs.Container);
	t.maxPoolSize = 100;
	t._spritePool = [];
	e.draw = function(t, e) {
		if (this.DisplayObject_draw(t, e)) {
			return
		}
		this._updateText();
		this.Container_draw(t, e)
	};
	e.getBounds = function() {
		this._updateText();
		return this.Container_getBounds()
	};
	e.isVisible = function() {
		var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
		return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && t)
	};
	e.clone = function() {
		return this._cloneProps(new t(this.text, this.spriteSheet))
	};
	e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren = function() {};
	e._cloneProps = function(t) {
		this.DisplayObject__cloneProps(t);
		t.lineHeight = this.lineHeight;
		t.letterSpacing = this.letterSpacing;
		t.spaceWidth = this.spaceWidth;
		return t
	};
	e._getFrameIndex = function(t, e) {
		var i, s = e.getAnimation(t);
		if (!s) {
			t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null);
			if (i) {
				s = e.getAnimation(i)
			}
		}
		return s && s.frames[0]
	};
	e._getFrame = function(t, e) {
		var i = this._getFrameIndex(t, e);
		return i == null ? i : e.getFrame(i)
	};
	e._getLineHeight = function(t) {
		var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
		return e ? e.rect.height : 1
	};
	e._getSpaceWidth = function(t) {
		var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
		return e ? e.rect.width : 1
	};
	e._updateText = function() {
		var e = 0,
			i = 0,
			s = this._oldProps,
			r = false,
			n = this.spaceWidth,
			a = this.lineHeight,
			o = this.spriteSheet;
		var h = t._spritePool,
			c = this.children,
			u = 0,
			l = c.length,
			d;
		for (var f in s) {
			if (s[f] != this[f]) {
				s[f] = this[f];
				r = true
			}
		}
		if (!r) {
			return
		}
		var _ = !! this._getFrame(" ", o);
		if (!_ && !n) {
			n = this._getSpaceWidth(o)
		}
		if (!a) {
			a = this._getLineHeight(o)
		}
		for (var p = 0, g = this.text.length; p < g; p++) {
			var v = this.text.charAt(p);
			if (v == " " && !_) {
				e += n;
				continue
			} else if (v == "\n" || v == "\r") {
				if (v == "\r" && this.text.charAt(p + 1) == "\n") {
					p++
				}
				e = 0;
				i += a;
				continue
			}
			var m = this._getFrameIndex(v, o);
			if (m == null) {
				continue
			}
			if (u < l) {
				d = c[u]
			} else {
				c.push(d = h.length ? h.pop() : new createjs.Sprite);
				d.parent = this;
				l++
			}
			d.spriteSheet = o;
			d.gotoAndStop(m);
			d.x = e;
			d.y = i;
			u++;
			e += d.getBounds().width + this.letterSpacing
		}
		while (l > u) {
			h.push(d = c.pop());
			d.parent = null;
			l--
		}
		if (h.length > t.maxPoolSize) {
			h.length = t.maxPoolSize
		}
	};
	createjs.BitmapText = createjs.promote(t, "Container")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "SpriteSheetUtils cannot be instantiated"
	}
	var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	if (e.getContext) {
		t._workingCanvas = e;
		t._workingContext = e.getContext("2d");

		e.width = e.height = 1
	}
	t.addFlippedFrames = function(e, i, s, r) {
		if (!i && !s && !r) {
			return
		}
		var n = 0;
		if (i) {
			t._flip(e, ++n, true, false)
		}
		if (s) {
			t._flip(e, ++n, false, true)
		}
		if (r) {
			t._flip(e, ++n, true, true)
		}
	};
	t.extractFrame = function(e, i) {
		if (isNaN(i)) {
			i = e.getAnimation(i).frames[0]
		}
		var s = e.getFrame(i);
		if (!s) {
			return null
		}
		var r = s.rect;
		var n = t._workingCanvas;
		n.width = r.width;
		n.height = r.height;
		t._workingContext.drawImage(s.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
		var a = document.createElement("img");
		a.src = n.toDataURL("image/png");
		return a
	};
	t.mergeAlpha = function(t, e, i) {
		if (!i) {
			i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")
		}
		i.width = Math.max(e.width, t.width);
		i.height = Math.max(e.height, t.height);
		var s = i.getContext("2d");
		s.save();
		s.drawImage(t, 0, 0);
		s.globalCompositeOperation = "destination-in";
		s.drawImage(e, 0, 0);
		s.restore();
		return i
	};
	t._flip = function(e, i, s, r) {
		var n = e._images;
		var a = t._workingCanvas;
		var o = t._workingContext;
		var h = n.length / i;
		for (var c = 0; c < h; c++) {
			var u = n[c];
			u.__tmp = c;
			o.setTransform(1, 0, 0, 1, 0, 0);
			o.clearRect(0, 0, a.width + 1, a.height + 1);
			a.width = u.width;
			a.height = u.height;
			o.setTransform(s ? -1 : 1, 0, 0, r ? -1 : 1, s ? u.width : 0, r ? u.height : 0);
			o.drawImage(u, 0, 0);
			var l = document.createElement("img");
			l.src = a.toDataURL("image/png");
			l.width = u.width;
			l.height = u.height;
			n.push(l)
		}
		var d = e._frames;
		var f = d.length / i;
		for (c = 0; c < f; c++) {
			u = d[c];
			var _ = u.rect.clone();
			l = n[u.image.__tmp + h * i];
			var p = {
				image: l,
				rect: _,
				regX: u.regX,
				regY: u.regY
			};
			if (s) {
				_.x = l.width - _.x - _.width;
				p.regX = _.width - u.regX
			}
			if (r) {
				_.y = l.height - _.y - _.height;
				p.regY = _.height - u.regY
			}
			d.push(p)
		}
		var g = "_" + (s ? "h" : "") + (r ? "v" : "");
		var v = e._animations;
		var m = e._data;
		var y = v.length / i;
		for (c = 0; c < y; c++) {
			var j = v[c];
			u = m[j];
			var b = {
				name: j + g,
				speed: u.speed,
				next: u.next,
				frames: []
			};
			if (u.next) {
				b.next += g
			}
			d = u.frames;
			for (var E = 0, w = d.length; E < w; E++) {
				b.frames.push(d[E] + f * i)
			}
			m[b.name] = b;
			v.push(b.name)
		}
	};
	createjs.SpriteSheetUtils = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.EventDispatcher_constructor();
		this.maxWidth = 2048;
		this.maxHeight = 2048;
		this.spriteSheet = null;
		this.scale = 1;
		this.padding = 1;
		this.timeSlice = .3;
		this.progress = -1;
		this._frames = [];
		this._animations = {};
		this._data = null;
		this._nextFrameIndex = 0;
		this._index = 0;
		this._timerID = null;
		this._scale = 1
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
	t.ERR_RUNNING = "a build is already running";
	e.addFrame = function(e, i, s, r, n) {
		if (this._data) {
			throw t.ERR_RUNNING
		}
		var a = i || e.bounds || e.nominalBounds;
		if (!a && e.getBounds) {
			a = e.getBounds()
		}
		if (!a) {
			return null
		}
		s = s || 1;
		return this._frames.push({
			source: e,
			sourceRect: a,
			scale: s,
			funct: r,
			data: n,
			index: this._frames.length,
			height: a.height * s
		}) - 1
	};
	e.addAnimation = function(e, i, s, r) {
		if (this._data) {
			throw t.ERR_RUNNING
		}
		this._animations[e] = {
			frames: i,
			next: s,
			frequency: r
		}
	};
	e.addMovieClip = function(e, i, s, r, n, a) {
		if (this._data) {
			throw t.ERR_RUNNING
		}
		var o = e.frameBounds;
		var h = i || e.bounds || e.nominalBounds;
		if (!h && e.getBounds) {
			h = e.getBounds()
		}
		if (!h && !o) {
			return
		}
		var c, u, l = this._frames.length;
		var d = e.timeline.duration;
		for (c = 0; c < d; c++) {
			var f = o && o[c] ? o[c] : h;
			this.addFrame(e, f, s, this._setupMovieClipFrame, {
				i: c,
				f: r,
				d: n
			})
		}
		var _ = e.timeline._labels;
		var p = [];
		for (var g in _) {
			p.push({
				index: _[g],
				label: g
			})
		}
		if (p.length) {
			p.sort(function(t, e) {
				return t.index - e.index
			});
			for (c = 0, u = p.length; c < u; c++) {
				var v = p[c].label;
				var m = l + p[c].index;
				var y = l + (c == u - 1 ? d : p[c + 1].index);
				var j = [];
				for (var b = m; b < y; b++) {
					j.push(b)
				}
				if (a) {
					v = a(v, e, m, y);
					if (!v) {
						continue
					}
				}
				this.addAnimation(v, j, true)
			}
		}
	};
	e.build = function() {
		if (this._data) {
			throw t.ERR_RUNNING
		}
		this._startBuild();
		while (this._drawNext()) {}
		this._endBuild();
		return this.spriteSheet
	};
	e.buildAsync = function(e) {
		if (this._data) {
			throw t.ERR_RUNNING
		}
		this.timeSlice = e;
		this._startBuild();
		var i = this;
		this._timerID = setTimeout(function() {
			i._run()
		}, 50 - Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50)
	};
	e.stopAsync = function() {
		clearTimeout(this._timerID);
		this._data = null
	};
	e.clone = function() {
		throw "SpriteSheetBuilder cannot be cloned."
	};
	e.toString = function() {
		return "[SpriteSheetBuilder]"
	};
	e._startBuild = function() {
		var e = this.padding || 0;
		this.progress = 0;
		this.spriteSheet = null;
		this._index = 0;
		this._scale = this.scale;
		var i = [];
		this._data = {
			images: [],
			frames: i,
			animations: this._animations
		};
		var s = this._frames.slice();
		s.sort(function(t, e) {
			return t.height <= e.height ? -1 : 1
		});
		if (s[s.length - 1].height + e * 2 > this.maxHeight) {
			throw t.ERR_DIMENSIONS
		}
		var r = 0,
			n = 0;
		var a = 0;
		while (s.length) {
			var o = this._fillRow(s, r, a, i, e);
			if (o.w > n) {
				n = o.w
			}
			r += o.h;
			if (!o.h || !s.length) {
				var h = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
				h.width = this._getSize(n, this.maxWidth);
				h.height = this._getSize(r, this.maxHeight);
				this._data.images[a] = h;
				if (!o.h) {
					n = r = 0;
					a++
				}
			}
		}
	};
	e._setupMovieClipFrame = function(t, e) {
		var i = t.actionsEnabled;
		t.actionsEnabled = false;
		t.gotoAndStop(e.i);
		t.actionsEnabled = i;
		e.f && e.f(t, e.d, e.i)
	};
	e._getSize = function(t, e) {
		var i = 4;
		while (Math.pow(2, ++i) < t) {}
		return Math.min(e, Math.pow(2, i))
	};
	e._fillRow = function(e, i, s, r, n) {
		var a = this.maxWidth;
		var o = this.maxHeight;
		i += n;
		var h = o - i;
		var c = n;
		var u = 0;
		for (var l = e.length - 1; l >= 0; l--) {
			var d = e[l];
			var f = this._scale * d.scale;
			var _ = d.sourceRect;
			var p = d.source;
			var g = Math.floor(f * _.x - n);
			var v = Math.floor(f * _.y - n);
			var m = Math.ceil(f * _.height + n * 2);
			var y = Math.ceil(f * _.width + n * 2);
			if (y > a) {
				throw t.ERR_DIMENSIONS
			}
			if (m > h || c + y > a) {
				continue
			}
			d.img = s;
			d.rect = new createjs.Rectangle(c, i, y, m);
			u = u || m;
			e.splice(l, 1);
			r[d.index] = [c, i, y, m, s, Math.round(-g + f * p.regX - n), Math.round(-v + f * p.regY - n)];
			c += y
		}
		return {
			w: c,
			h: u
		}
	};
	e._endBuild = function() {
		this.spriteSheet = new createjs.SpriteSheet(this._data);
		this._data = null;
		this.progress = 1;
		this.dispatchEvent("complete")
	};
	e._run = function() {
		var t = Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50;
		var e = (new Date).getTime() + t;
		var i = false;
		while (e > (new Date).getTime()) {
			if (!this._drawNext()) {
				i = true;
				break
			}
		}
		if (i) {
			this._endBuild()
		} else {
			var s = this;
			this._timerID = setTimeout(function() {
				s._run()
			}, 50 - t)
		}
		var r = this.progress = this._index / this._frames.length;
		if (this.hasEventListener("progress")) {
			var n = new createjs.Event("progress");
			n.progress = r;
			this.dispatchEvent(n)
		}
	};
	e._drawNext = function() {
		var t = this._frames[this._index];
		var e = t.scale * this._scale;
		var i = t.rect;
		var s = t.sourceRect;
		var r = this._data.images[t.img];
		var n = r.getContext("2d");
		t.funct && t.funct(t.source, t.data);
		n.save();
		n.beginPath();
		n.rect(i.x, i.y, i.width, i.height);
		n.clip();
		n.translate(Math.ceil(i.x - s.x * e), Math.ceil(i.y - s.y * e));
		n.scale(e, e);
		t.source.draw(n);
		n.restore();
		return ++this._index < this._frames.length
	};
	createjs.SpriteSheetBuilder = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor();
		if (typeof t == "string") {
			t = document.getElementById(t)
		}
		this.mouseEnabled = false;
		var e = t.style;
		e.position = "absolute";
		e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%";
		this.htmlElement = t;
		this._oldProps = null
	}
	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function() {
		return this.htmlElement != null
	};
	e.draw = function(t, e) {
		return true
	};
	e.cache = function() {};
	e.uncache = function() {};
	e.updateCache = function() {};
	e.hitTest = function() {};
	e.localToGlobal = function() {};
	e.globalToLocal = function() {};
	e.localToLocal = function() {};
	e.clone = function() {
		throw "DOMElement cannot be cloned."
	};
	e.toString = function() {
		return "[DOMElement (name=" + this.name + ")]"
	};
	e._tick = function(t) {
		var e = this.getStage();
		e && e.on("drawend", this._handleDrawEnd, this, true);
		this.DisplayObject__tick(t)
	};
	e._handleDrawEnd = function(t) {
		var e = this.htmlElement;
		if (!e) {
			return
		}
		var i = e.style;
		var s = this.getConcatenatedDisplayProps(this._props),
			r = s.matrix;
		var n = s.visible ? "visible" : "hidden";
		if (n != i.visibility) {
			i.visibility = n
		}
		if (!s.visible) {
			return
		}
		var a = this._oldProps,
			o = a && a.matrix;
		var h = 1e4;
		if (!o || !o.equals(r)) {
			var c = "matrix(" + (r.a * h | 0) / h + "," + (r.b * h | 0) / h + "," + (r.c * h | 0) / h + "," + (r.d * h | 0) / h + "," + (r.tx + .5 | 0);
			i.transform = i.WebkitTransform = i.OTransform = i.msTransform = c + "," + (r.ty + .5 | 0) + ")";
			i.MozTransform = c + "px," + (r.ty + .5 | 0) + "px)";
			if (!a) {
				a = this._oldProps = new createjs.DisplayProps(true, NaN)
			}
			a.matrix.copy(r)
		}
		if (a.alpha != s.alpha) {
			i.opacity = "" + (s.alpha * h | 0) / h;
			a.alpha = s.alpha
		}
	};
	createjs.DOMElement = createjs.promote(t, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {}
	var e = t.prototype;
	e.getBounds = function(t) {
		return t
	};
	e.applyFilter = function(t, e, i, s, r, n, a, o) {
		n = n || t;
		if (a == null) {
			a = e
		}
		if (o == null) {
			o = i
		}
		try {
			var h = t.getImageData(e, i, s, r)
		} catch (c) {
			return false
		}
		if (this._applyFilter(h)) {
			n.putImageData(h, a, o);
			return true
		}
		return false
	};
	e.toString = function() {
		return "[Filter]"
	};
	e.clone = function() {
		return new t
	};
	e._applyFilter = function(t) {
		return true
	};
	createjs.Filter = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		if (isNaN(t) || t < 0) t = 0;
		if (isNaN(e) || e < 0) e = 0;
		if (isNaN(i) || i < 1) i = 1;
		this.blurX = t | 0;
		this.blurY = e | 0;
		this.quality = i | 0
	}
	var e = createjs.extend(t, createjs.Filter);
	t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
	t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
	e.getBounds = function(t) {
		var e = this.blurX | 0,
			i = this.blurY | 0;
		if (e <= 0 && i <= 0) {
			return t
		}
		var s = Math.pow(this.quality, .2);
		return (t || new createjs.Rectangle).pad(e * s + 1, i * s + 1, e * s + 1, i * s + 1)
	};
	e.clone = function() {
		return new t(this.blurX, this.blurY, this.quality)
	};
	e.toString = function() {
		return "[BlurFilter]"
	};
	e._applyFilter = function(e) {
		var i = this.blurX >> 1;
		if (isNaN(i) || i < 0) return false;
		var s = this.blurY >> 1;
		if (isNaN(s) || s < 0) return false;
		if (i == 0 && s == 0) return false;
		var r = this.quality;
		if (isNaN(r) || r < 1) r = 1;
		r |= 0;
		if (r > 3) r = 3;
		if (r < 1) r = 1;
		var n = e.data;
		var a = 0,
			o = 0,
			h = 0,
			c = 0,
			u = 0,
			l = 0,
			d = 0,
			f = 0,
			_ = 0,
			p = 0,
			g = 0,
			v = 0,
			m = 0,
			y = 0,
			j = 0;
		var b = i + i + 1 | 0;
		var E = s + s + 1 | 0;
		var w = e.width | 0;
		var T = e.height | 0;
		var S = w - 1 | 0;
		var x = T - 1 | 0;
		var L = i + 1 | 0;
		var A = s + 1 | 0;
		var P = {
			r: 0,
			b: 0,
			g: 0,
			a: 0
		};
		var R = P;
		for (h = 1; h < b; h++) {
			R = R.n = {
				r: 0,
				b: 0,
				g: 0,
				a: 0
			}
		}
		R.n = P;
		var I = {
			r: 0,
			b: 0,
			g: 0,
			a: 0
		};
		var M = I;
		for (h = 1; h < E; h++) {
			M = M.n = {
				r: 0,
				b: 0,
				g: 0,
				a: 0
			}
		}
		M.n = I;
		var O = null;
		var C = t.MUL_TABLE[i] | 0;
		var D = t.SHG_TABLE[i] | 0;
		var k = t.MUL_TABLE[s] | 0;
		var N = t.SHG_TABLE[s] | 0;
		while (r-- > 0) {
			d = l = 0;
			var F = C;
			var H = D;
			for (o = T; --o > -1;) {
				f = L * (v = n[l | 0]);
				_ = L * (m = n[l + 1 | 0]);
				p = L * (y = n[l + 2 | 0]);
				g = L * (j = n[l + 3 | 0]);
				R = P;
				for (h = L; --h > -1;) {
					R.r = v;
					R.g = m;
					R.b = y;
					R.a = j;
					R = R.n
				}
				for (h = 1; h < L; h++) {
					c = l + ((S < h ? S : h) << 2) | 0;
					f += R.r = n[c];
					_ += R.g = n[c + 1];
					p += R.b = n[c + 2];
					g += R.a = n[c + 3];
					R = R.n
				}
				O = P;
				for (a = 0; a < w; a++) {
					n[l++] = f * F >>> H;
					n[l++] = _ * F >>> H;
					n[l++] = p * F >>> H;
					n[l++] = g * F >>> H;
					c = d + ((c = a + i + 1) < S ? c : S) << 2;
					f -= O.r - (O.r = n[c]);
					_ -= O.g - (O.g = n[c + 1]);
					p -= O.b - (O.b = n[c + 2]);
					g -= O.a - (O.a = n[c + 3]);
					O = O.n
				}
				d += w
			}
			F = k;
			H = N;
			for (a = 0; a < w; a++) {
				l = a << 2 | 0;
				f = A * (v = n[l]) | 0;
				_ = A * (m = n[l + 1 | 0]) | 0;
				p = A * (y = n[l + 2 | 0]) | 0;
				g = A * (j = n[l + 3 | 0]) | 0;
				M = I;
				for (h = 0; h < A; h++) {
					M.r = v;
					M.g = m;
					M.b = y;
					M.a = j;
					M = M.n
				}
				u = w;
				for (h = 1; h <= s; h++) {
					l = u + a << 2;
					f += M.r = n[l];
					_ += M.g = n[l + 1];
					p += M.b = n[l + 2];
					g += M.a = n[l + 3];
					M = M.n;
					if (h < x) {
						u += w
					}
				}
				l = a;
				O = I;
				if (r > 0) {
					for (o = 0; o < T; o++) {
						c = l << 2;
						n[c + 3] = j = g * F >>> H;
						if (j > 0) {
							n[c] = f * F >>> H;
							n[c + 1] = _ * F >>> H;
							n[c + 2] = p * F >>> H
						} else {
							n[c] = n[c + 1] = n[c + 2] = 0
						}
						c = a + ((c = o + A) < x ? c : x) * w << 2;
						f -= O.r - (O.r = n[c]);
						_ -= O.g - (O.g = n[c + 1]);
						p -= O.b - (O.b = n[c + 2]);
						g -= O.a - (O.a = n[c + 3]);
						O = O.n;
						l += w
					}
				} else {
					for (o = 0; o < T; o++) {
						c = l << 2;
						n[c + 3] = j = g * F >>> H;
						if (j > 0) {
							j = 255 / j;
							n[c] = (f * F >>> H) * j;
							n[c + 1] = (_ * F >>> H) * j;
							n[c + 2] = (p * F >>> H) * j
						} else {
							n[c] = n[c + 1] = n[c + 2] = 0
						}
						c = a + ((c = o + A) < x ? c : x) * w << 2;
						f -= O.r - (O.r = n[c]);
						_ -= O.g - (O.g = n[c + 1]);
						p -= O.b - (O.b = n[c + 2]);
						g -= O.a - (O.a = n[c + 3]);
						O = O.n;
						l += w
					}
				}
			}
		}
		return true
	};
	createjs.BlurFilter = createjs.promote(t, "Filter")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.alphaMap = t;
		this._alphaMap = null;
		this._mapData = null
	}
	var e = createjs.extend(t, createjs.Filter);
	e.clone = function() {
		var e = new t(this.alphaMap);
		e._alphaMap = this._alphaMap;
		e._mapData = this._mapData;
		return e
	};
	e.toString = function() {
		return "[AlphaMapFilter]"
	};
	e._applyFilter = function(t) {
		if (!this.alphaMap) {
			return true
		}
		if (!this._prepAlphaMap()) {
			return false
		}
		var e = t.data;
		var i = this._mapData;
		for (var s = 0, r = e.length; s < r; s += 4) {
			e[s + 3] = i[s] || 0
		}
		return true
	};
	e._prepAlphaMap = function() {
		if (!this.alphaMap) {
			return false
		}
		if (this.alphaMap == this._alphaMap && this._mapData) {
			return true
		}
		this._mapData = null;
		var t = this._alphaMap = this.alphaMap;
		var e = t;
		var i;
		if (t instanceof HTMLCanvasElement) {
			i = e.getContext("2d")
		} else {
			e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			e.width = t.width;
			e.height = t.height;
			i = e.getContext("2d");
			i.drawImage(t, 0, 0)
		}
		try {
			var s = i.getImageData(0, 0, t.width, t.height)
		} catch (r) {
			return false
		}
		this._mapData = s.data;
		return true
	};
	createjs.AlphaMapFilter = createjs.promote(t, "Filter")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.mask = t
	}
	var e = createjs.extend(t, createjs.Filter);
	e.applyFilter = function(t, e, i, s, r, n, a, o) {
		if (!this.mask) {
			return true
		}
		n = n || t;
		if (a == null) {
			a = e
		}
		if (o == null) {
			o = i
		}
		n.save();
		if (t != n) {
			return false
		}
		n.globalCompositeOperation = "destination-in";
		n.drawImage(this.mask, a, o);
		n.restore();
		return true
	};
	e.clone = function() {
		return new t(this.mask)
	};
	e.toString = function() {
		return "[AlphaMaskFilter]"
	};
	createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s, r, n, a, o) {
		this.redMultiplier = t != null ? t : 1;
		this.greenMultiplier = e != null ? e : 1;
		this.blueMultiplier = i != null ? i : 1;
		this.alphaMultiplier = s != null ? s : 1;
		this.redOffset = r || 0;
		this.greenOffset = n || 0;
		this.blueOffset = a || 0;
		this.alphaOffset = o || 0
	}
	var e = createjs.extend(t, createjs.Filter);
	e.toString = function() {
		return "[ColorFilter]"
	};
	e.clone = function() {
		return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
	};
	e._applyFilter = function(t) {
		var e = t.data;
		var i = e.length;
		for (var s = 0; s < i; s += 4) {
			e[s] = e[s] * this.redMultiplier + this.redOffset;
			e[s + 1] = e[s + 1] * this.greenMultiplier + this.greenOffset;
			e[s + 2] = e[s + 2] * this.blueMultiplier + this.blueOffset;
			e[s + 3] = e[s + 3] * this.alphaMultiplier + this.alphaOffset
		}
		return true
	};
	createjs.ColorFilter = createjs.promote(t, "Filter")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s) {
		this.setColor(t, e, i, s)
	}
	var e = t.prototype;
	t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
	t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
	t.LENGTH = t.IDENTITY_MATRIX.length;
	e.setColor = function(t, e, i, s) {
		return this.reset().adjustColor(t, e, i, s)
	};
	e.reset = function() {
		return this.copy(t.IDENTITY_MATRIX)
	};
	e.adjustColor = function(t, e, i, s) {
		this.adjustHue(s);
		this.adjustContrast(e);
		this.adjustBrightness(t);
		return this.adjustSaturation(i)
	};
	e.adjustBrightness = function(t) {
		if (t == 0 || isNaN(t)) {
			return this
		}
		t = this._cleanValue(t, 255);
		this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
		return this
	};
	e.adjustContrast = function(e) {
		if (e == 0 || isNaN(e)) {
			return this
		}
		e = this._cleanValue(e, 100);
		var i;
		if (e < 0) {
			i = 127 + e / 100 * 127
		} else {
			i = e % 1;
			if (i == 0) {
				i = t.DELTA_INDEX[e]
			} else {
				i = t.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[(e << 0) + 1] * i
			}
			i = i * 127 + 127
		}
		this._multiplyMatrix([i / 127, 0, 0, 0, .5 * (127 - i), 0, i / 127, 0, 0, .5 * (127 - i), 0, 0, i / 127, 0, .5 * (127 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
		return this
	};
	e.adjustSaturation = function(t) {
		if (t == 0 || isNaN(t)) {
			return this
		}
		t = this._cleanValue(t, 100);
		var e = 1 + (t > 0 ? 3 * t / 100 : t / 100);
		var i = .3086;
		var s = .6094;
		var r = .082;
		this._multiplyMatrix([i * (1 - e) + e, s * (1 - e), r * (1 - e), 0, 0, i * (1 - e), s * (1 - e) + e, r * (1 - e), 0, 0, i * (1 - e), s * (1 - e), r * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
		return this
	};
	e.adjustHue = function(t) {
		if (t == 0 || isNaN(t)) {
			return this
		}
		t = this._cleanValue(t, 180) / 180 * Math.PI;
		var e = Math.cos(t);
		var i = Math.sin(t);
		var s = .213;
		var r = .715;
		var n = .072;
		this._multiplyMatrix([s + e * (1 - s) + i * -s, r + e * -r + i * -r, n + e * -n + i * (1 - n), 0, 0, s + e * -s + i * .143, r + e * (1 - r) + i * .14, n + e * -n + i * -.283, 0, 0, s + e * -s + i * -(1 - s), r + e * -r + i * r, n + e * (1 - n) + i * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
		return this
	};
	e.concat = function(e) {
		e = this._fixMatrix(e);
		if (e.length != t.LENGTH) {
			return this
		}
		this._multiplyMatrix(e);
		return this
	};
	e.clone = function() {
		return (new t).copy(this)
	};
	e.toArray = function() {
		var e = [];
		for (var i = 0, s = t.LENGTH; i < s; i++) {
			e[i] = this[i]
		}
		return e
	};
	e.copy = function(e) {
		var i = t.LENGTH;
		for (var s = 0; s < i; s++) {
			this[s] = e[s]
		}
		return this
	};
	e.toString = function() {
		return "[ColorMatrix]"
	};
	e._multiplyMatrix = function(t) {
		var e, i, s, r = [];
		for (e = 0; e < 5; e++) {
			for (i = 0; i < 5; i++) {
				r[i] = this[i + e * 5]
			}
			for (i = 0; i < 5; i++) {
				var n = 0;
				for (s = 0; s < 5; s++) {
					n += t[i + s * 5] * r[s]
				}
				this[i + e * 5] = n
			}
		}
	};
	e._cleanValue = function(t, e) {
		return Math.min(e, Math.max(-e, t))
	};
	e._fixMatrix = function(e) {
		if (e instanceof t) {
			e = e.toArray()
		}
		if (e.length < t.LENGTH) {
			e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH))
		} else if (e.length > t.LENGTH) {
			e = e.slice(0, t.LENGTH)
		}
		return e
	};
	createjs.ColorMatrix = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.matrix = t
	}
	var e = createjs.extend(t, createjs.Filter);
	e.toString = function() {
		return "[ColorMatrixFilter]"
	};
	e.clone = function() {
		return new t(this.matrix)
	};
	e._applyFilter = function(t) {
		var e = t.data;
		var i = e.length;
		var s, r, n, a;
		var o = this.matrix;
		var h = o[0],
			c = o[1],
			u = o[2],
			l = o[3],
			d = o[4];
		var f = o[5],
			_ = o[6],
			p = o[7],
			g = o[8],
			v = o[9];
		var m = o[10],
			y = o[11],
			j = o[12],
			b = o[13],
			E = o[14];
		var w = o[15],
			T = o[16],
			S = o[17],
			x = o[18],
			L = o[19];
		for (var A = 0; A < i; A += 4) {
			s = e[A];
			r = e[A + 1];
			n = e[A + 2];
			a = e[A + 3];
			e[A] = s * h + r * c + n * u + a * l + d;
			e[A + 1] = s * f + r * _ + n * p + a * g + v;
			e[A + 2] = s * m + r * y + n * j + a * b + E;
			e[A + 3] = s * w + r * T + n * S + a * x + L
		}
		return true
	};
	createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
var encrypt;
(function(d) {
	d.arrayDecode = function(a) {
		for (var b = a.length - 1; 0 < b; b--) 0 == a[b] && a.splice(b, 1);
		a = new Uint8Array(a);
		for (var b = [], c = 0, e = 0, d = a.length; c < d;) 128 > a[c] ? (e = a[c], c += 1) : 224 > a[c] ? (e = ((a[c] & 63) << 10) + (a[c + 1] & 63), c += 2) : (e = ((a[c] & 15) << 20) + ((a[c + 1] & 63) << 6) + (a[c + 2] & 63), c += 3), b.push(e);
		a = String.fromCharCode.apply(null, b);
		a.replace(" ", "");
		return a
	};
	d.hexDecode = function(a) {
		var b, c = "";
		for (b = 0; b < a.length; b += 2) c += (0 < b ? "," : "") + a.charAt(b) + a.charAt(b + 1);
		a = c.split(",");
		for (b = 0; b < a.length; b++) a[b] = parseInt(a[b], 16);
		b = String.fromCharCode.apply(String, a);
		b.replace(" ", "");
		return b
	}
})(encrypt || (encrypt = {}));
eval(encrypt.hexDecode("20766172205f686d74203d205f686d74207c7c205b5d3b202866756e6374696f6e2829207b20202076617220686d203d20646f63756d656e742e637265617465456c656d656e74282273637269707422293b202020686d2e737263203d20222f2f686d2e62616964752e636f6d2f686d2e6a733f3466633163316339363833353530393730643363626462633237376334633530223b2020207661722073203d20646f63756d656e742e676574456c656d656e747342795461674e616d65282273637269707422295b305d3b20202020732e706172656e744e6f64652e696e736572744265666f726528686d2c2073293b207d2928293b"));

	function t() {
		throw "Touch cannot be instantiated"
	}
	t.isSupported = function() {
		return !!("ontouchstart" in window || window.navigator["msPointerEnabled"] && window.navigator["msMaxTouchPoints"] > 0 || window.navigator["pointerEnabled"] && window.navigator["maxTouchPoints"] > 0)
	};
	t.enable = function(e, i, s) {
		if (!e || !e.canvas || !t.isSupported()) {
			return false
		}
		if (e.__touch) {
			return true
		}
		e.__touch = {
			pointers: {},
			multitouch: !i,
			preventDefault: !s,
			count: 0
		};
		if ("ontouchstart" in window) {
			t._IOS_enable(e)
		} else if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
			t._IE_enable(e)
		}
		return true
	};
	t.disable = function(e) {
		if (!e) {
			return
		}
		if ("ontouchstart" in window) {
			t._IOS_disable(e)
		} else if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
			t._IE_disable(e)
		}
		delete e.__touch
	};
	t._IOS_enable = function(e) {
		var i = e.canvas;
		var s = e.__touch.f = function(i) {
				t._IOS_handleEvent(e, i)
			};
		i.addEventListener("touchstart", s, false);
		i.addEventListener("touchmove", s, false);
		i.addEventListener("touchend", s, false);
		i.addEventListener("touchcancel", s, false)
	};
	t._IOS_disable = function(t) {
		var e = t.canvas;
		if (!e) {
			return
		}
		var i = t.__touch.f;
		e.removeEventListener("touchstart", i, false);
		e.removeEventListener("touchmove", i, false);
		e.removeEventListener("touchend", i, false);
		e.removeEventListener("touchcancel", i, false)
	};
	t._IOS_handleEvent = function(t, e) {
		if (!t) {
			return
		}
		if (t.__touch.preventDefault) {
			e.preventDefault && e.preventDefault()
		}
		var i = e.changedTouches;
		var s = e.type;
		for (var r = 0, n = i.length; r < n; r++) {
			var a = i[r];
			var o = a.identifier;
			if (a.target != t.canvas) {
				continue
			}
			if (s == "touchstart") {
				this._handleStart(t, o, e, a.pageX, a.pageY)
			} else if (s == "touchmove") {
				this._handleMove(t, o, e, a.pageX, a.pageY)
			} else if (s == "touchend" || s == "touchcancel") {
				this._handleEnd(t, o, e)
			}
		}
	};
	t._IE_enable = function(e) {
		var i = e.canvas;
		var s = e.__touch.f = function(i) {
				t._IE_handleEvent(e, i)
			};
		if (window.navigator["pointerEnabled"] === undefined) {
			i.addEventListener("MSPointerDown", s, false);
			window.addEventListener("MSPointerMove", s, false);
			window.addEventListener("MSPointerUp", s, false);
			window.addEventListener("MSPointerCancel", s, false);
			if (e.__touch.preventDefault) {
				i.style.msTouchAction = "none"
			}
		} else {
			i.addEventListener("pointerdown", s, false);
			window.addEventListener("pointermove", s, false);
			window.addEventListener("pointerup", s, false);
			window.addEventListener("pointercancel", s, false);
			if (e.__touch.preventDefault) {
				i.style.touchAction = "none"
			}
		}
		e.__touch.activeIDs = {}
	};
	t._IE_disable = function(t) {
		var e = t.__touch.f;
		if (window.navigator["pointerEnabled"] === undefined) {
			window.removeEventListener("MSPointerMove", e, false);
			window.removeEventListener("MSPointerUp", e, false);
			window.removeEventListener("MSPointerCancel", e, false);
			if (t.canvas) {
				t.canvas.removeEventListener("MSPointerDown", e, false)
			}
		} else {
			window.removeEventListener("pointermove", e, false);
			window.removeEventListener("pointerup", e, false);
			window.removeEventListener("pointercancel", e, false);
			if (t.canvas) {
				t.canvas.removeEventListener("pointerdown", e, false)
			}
		}
	};
	t._IE_handleEvent = function(t, e) {
		if (!t) {
			return
		}
		if (t.__touch.preventDefault) {
			e.preventDefault && e.preventDefault()
		}
		var i = e.type;
		var s = e.pointerId;
		var r = t.__touch.activeIDs;
		if (i == "MSPointerDown" || i == "pointerdown") {
			if (e.srcElement != t.canvas) {
				return
			}
			r[s] = true;
			this._handleStart(t, s, e, e.pageX, e.pageY)
		} else if (r[s]) {
			if (i == "MSPointerMove" || i == "pointermove") {
				this._handleMove(t, s, e, e.pageX, e.pageY)
			} else if (i == "MSPointerUp" || i == "MSPointerCancel" || i == "pointerup" || i == "pointercancel") {
				delete r[s];
				this._handleEnd(t, s, e)
			}
		}
	};
	t._handleStart = function(t, e, i, s, r) {
		var n = t.__touch;
		if (!n.multitouch && n.count) {
			return
		}
		var a = n.pointers;
		if (a[e]) {
			return
		}
		a[e] = true;
		n.count++;
		t._handlePointerDown(e, i, s, r)
	};
	t._handleMove = function(t, e, i, s, r) {
		if (!t.__touch.pointers[e]) {
			return
		}
		t._handlePointerMove(e, i, s, r)
	};
	t._handleEnd = function(t, e, i) {
		var s = t.__touch;
		var r = s.pointers;
		if (!r[e]) {
			return
		}
		s.count--;
		t._handlePointerUp(e, i, true);
		delete r[e]
	};
	createjs.Touch = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = createjs.EaselJS = createjs.EaselJS || {};
	t.version = "0.8.0";
	t.buildDate = "Fri, 12 Dec 2014 17:32:57 GMT"
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = createjs.PreloadJS = createjs.PreloadJS || {};
	t.version = "0.6.0";
	t.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
})();
this.createjs = this.createjs || {};
createjs.extend = function(t, e) {
	"use strict";

	function i() {
		this.constructor = t
	}
	i.prototype = e.prototype;
	return t.prototype = new i
};
this.createjs = this.createjs || {};
createjs.promote = function(t, e) {
	"use strict";
	var i = t.prototype,
		s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
	if (s) {
		i[(e += "_") + "constructor"] = s.constructor;
		for (var r in s) {
			if (i.hasOwnProperty(r) && typeof s[r] == "function") {
				i[e + r] = s[r]
			}
		}
	}
	return t
};
this.createjs = this.createjs || {};
createjs.indexOf = function(t, e) {
	"use strict";
	for (var i = 0, s = t.length; i < s; i++) {
		if (e === t[i]) {
			return i
		}
	}
	return -1
};
this.createjs = this.createjs || {};
(function() {
	"use strict";
	createjs.proxy = function(t, e) {
		var i = Array.prototype.slice.call(arguments, 2);
		return function() {
			return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
		}
	}
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "BrowserDetect cannot be instantiated"
	}
	var e = t.agent = window.navigator.userAgent;
	t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1;
	t.isFirefox = e.indexOf("Firefox") > -1;
	t.isOpera = window.opera != null;
	t.isChrome = e.indexOf("Chrome") > -1;
	t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone;
	t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone;
	t.isBlackberry = e.indexOf("Blackberry") > -1;
	createjs.BrowserDetect = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.type = t;
		this.target = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.bubbles = !! e;
		this.cancelable = !! i;
		this.timeStamp = (new Date).getTime();
		this.defaultPrevented = false;
		this.propagationStopped = false;
		this.immediatePropagationStopped = false;
		this.removed = false
	}
	var e = t.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && true
	};
	e.stopPropagation = function() {
		this.propagationStopped = true
	};
	e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true
	};
	e.remove = function() {
		this.removed = true
	};
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable)
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	};
	createjs.Event = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.Event_constructor("error");
		this.title = t;
		this.message = e;
		this.data = i
	}
	var e = createjs.extend(t, createjs.Event);
	e.clone = function() {
		return new createjs.ErrorEvent(this.title, this.message, this.data)
	};
	createjs.ErrorEvent = createjs.promote(t, "Event")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this._listeners = null;
		this._captureListeners = null
	}
	var e = t.prototype;
	t.initialize = function(t) {
		t.addEventListener = e.addEventListener;
		t.on = e.on;
		t.removeEventListener = t.off = e.removeEventListener;
		t.removeAllEventListeners = e.removeAllEventListeners;
		t.hasEventListener = e.hasEventListener;
		t.dispatchEvent = e.dispatchEvent;
		t._dispatchEvent = e._dispatchEvent;
		t.willTrigger = e.willTrigger
	};
	e.addEventListener = function(t, e, i) {
		var s;
		if (i) {
			s = this._captureListeners = this._captureListeners || {}
		} else {
			s = this._listeners = this._listeners || {}
		}
		var r = s[t];
		if (r) {
			this.removeEventListener(t, e, i)
		}
		r = s[t];
		if (!r) {
			s[t] = [e]
		} else {
			r.push(e)
		}
		return e
	};
	e.on = function(t, e, i, s, r, n) {
		if (e.handleEvent) {
			i = i || e;
			e = e.handleEvent
		}
		i = i || this;
		return this.addEventListener(t, function(t) {
			e.call(i, t, r);
			s && t.remove()
		}, n)
	};
	e.removeEventListener = function(t, e, i) {
		var s = i ? this._captureListeners : this._listeners;
		if (!s) {
			return
		}
		var r = s[t];
		if (!r) {
			return
		}
		for (var n = 0, a = r.length; n < a; n++) {
			if (r[n] == e) {
				if (a == 1) {
					delete s[t]
				} else {
					r.splice(n, 1)
				}
				break
			}
		}
	};
	e.off = e.removeEventListener;
	e.removeAllEventListeners = function(t) {
		if (!t) {
			this._listeners = this._captureListeners = null
		} else {
			if (this._listeners) {
				delete this._listeners[t]
			}
			if (this._captureListeners) {
				delete this._captureListeners[t]
			}
		}
	};
	e.dispatchEvent = function(t) {
		if (typeof t == "string") {
			var e = this._listeners;
			if (!e || !e[t]) {
				return false
			}
			t = new createjs.Event(t)
		} else if (t.target && t.clone) {
			t = t.clone()
		}
		try {
			t.target = this
		} catch (i) {}
		if (!t.bubbles || !this.parent) {
			this._dispatchEvent(t, 2)
		} else {
			var s = this,
				r = [s];
			while (s.parent) {
				r.push(s = s.parent)
			}
			var n, a = r.length;
			for (n = a - 1; n >= 0 && !t.propagationStopped; n--) {
				r[n]._dispatchEvent(t, 1 + (n == 0))
			}
			for (n = 1; n < a && !t.propagationStopped; n++) {
				r[n]._dispatchEvent(t, 3)
			}
		}
		return t.defaultPrevented
	};
	e.hasEventListener = function(t) {
		var e = this._listeners,
			i = this._captureListeners;
		return !!(e && e[t] || i && i[t])
	};
	e.willTrigger = function(t) {
		var e = this;
		while (e) {
			if (e.hasEventListener(t)) {
				return true
			}
			e = e.parent
		}
		return false
	};
	e.toString = function() {
		return "[EventDispatcher]"
	};
	e._dispatchEvent = function(t, e) {
		var i, s = e == 1 ? this._captureListeners : this._listeners;
		if (t && s) {
			var r = s[t.type];
			if (!r || !(i = r.length)) {
				return
			}
			try {
				t.currentTarget = this
			} catch (n) {}
			try {
				t.eventPhase = e
			} catch (n) {}
			t.removed = false;
			r = r.slice();
			for (var a = 0; a < i && !t.immediatePropagationStopped; a++) {
				var o = r[a];
				if (o.handleEvent) {
					o.handleEvent(t)
				} else {
					o(t)
				}
				if (t.removed) {
					this.off(t.type, o, e == 1);
					t.removed = false
				}
			}
		}
	};
	createjs.EventDispatcher = t
})();
this.createjs = this.createjs || {};
(function(t) {
	"use strict";

	function e(t, e) {
		this.Event_constructor("progress");
		this.loaded = t;
		this.total = e == null ? 1 : e;
		this.progress = e == 0 ? 0 : this.loaded / this.total
	}
	var i = createjs.extend(e, createjs.Event);
	i.clone = function() {
		return new createjs.ProgressEvent(this.loaded, this.total)
	};
	createjs.ProgressEvent = createjs.promote(e, "Event")
})(window);
(function() {
	var t = typeof define === "function" && define.amd;
	var e = {
		"function": true,
		object: true
	};
	var i = e[typeof exports] && exports && !exports.nodeType && exports;
	var s = e[typeof window] && window || this,
		r = i && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	if (r && (r["global"] === r || r["window"] === r || r["self"] === r)) {
		s = r
	}
	function n(t, i) {
		t || (t = s["Object"]());
		i || (i = s["Object"]());
		var r = t["Number"] || s["Number"],
			a = t["String"] || s["String"],
			o = t["Object"] || s["Object"],
			h = t["Date"] || s["Date"],
			c = t["SyntaxError"] || s["SyntaxError"],
			u = t["TypeError"] || s["TypeError"],
			l = t["Math"] || s["Math"],
			d = t["JSON"] || s["JSON"];
		if (typeof d == "object" && d) {
			i.stringify = d.stringify;
			i.parse = d.parse
		}
		var f = o.prototype,
			_ = f.toString,
			p, g, v;
		var m = new h(-0xc782b5b800cec);
		try {
			m = m.getUTCFullYear() == -109252 && m.getUTCMonth() === 0 && m.getUTCDate() === 1 && m.getUTCHours() == 10 && m.getUTCMinutes() == 37 && m.getUTCSeconds() == 6 && m.getUTCMilliseconds() == 708
		} catch (y) {}
		function j(t) {
			if (j[t] !== v) {
				return j[t]
			}
			var e;
			if (t == "bug-string-char-index") {
				e = "a" [0] != "a"
			} else if (t == "json") {
				e = j("json-stringify") && j("json-parse")
			} else {
				var s, n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
				if (t == "json-stringify") {
					var o = i.stringify,
						c = typeof o == "function" && m;
					if (c) {
						(s = function() {
							return 1
						}).toJSON = s;
						try {
							c = o(0) === "0" && o(new r) === "0" && o(new a) == '""' && o(_) === v && o(v) === v && o() === v && o(s) === "1" && o([s]) == "[1]" && o([v]) == "[null]" && o(null) == "null" && o([v, _, null]) == "[null,null,null]" && o({
								a: [s, true, false, null, "\x00\b\n\f\r	"]
							}) == n && o(null, s) === "1" && o([1, 2], null, 1) == "[\n 1,\n 2\n]" && o(new h(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && o(new h(864e13)) == '"+275760-09-13T00:00:00.000Z"' && o(new h(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && o(new h(-1)) == '"1969-12-31T23:59:59.999Z"'
						} catch (u) {
							c = false
						}
					}
					e = c
				}
				if (t == "json-parse") {
					var l = i.parse;
					if (typeof l == "function") {
						try {
							if (l("0") === 0 && !l(false)) {
								s = l(n);
								var d = s["a"].length == 5 && s["a"][0] === 1;
								if (d) {
									try {
										d = !l('"	"')
									} catch (u) {}
									if (d) {
										try {
											d = l("01") !== 1
										} catch (u) {}
									}
									if (d) {
										try {
											d = l("1.") !== 1
										} catch (u) {}
									}
								}
							}
						} catch (u) {
							d = false
						}
					}
					e = d
				}
			}
			return j[t] = !! e
		}
		if (!j("json")) {
			var b = "[object Function]",
				E = "[object Date]",
				w = "[object Number]",
				T = "[object String]",
				S = "[object Array]",
				x = "[object Boolean]";
			var L = j("bug-string-char-index");
			if (!m) {
				var A = l.floor;
				var P = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
				var R = function(t, e) {
						return P[e] + 365 * (t - 1970) + A((t - 1969 + (e = +(e > 1))) / 4) - A((t - 1901 + e) / 100) + A((t - 1601 + e) / 400)
					}
			}
			if (!(p = f.hasOwnProperty)) {
				p = function(t) {
					var e = {},
						i;
					if ((e.__proto__ = null, e.__proto__ = {
						toString: 1
					}, e).toString != _) {
						p = function(t) {
							var e = this.__proto__,
								i = t in (this.__proto__ = null, this);
							this.__proto__ = e;
							return i
						}
					} else {
						i = e.constructor;
						p = function(t) {
							var e = (this.constructor || i).prototype;
							return t in this && !(t in e && this[t] === e[t])
						}
					}
					e = null;
					return p.call(this, t)
				}
			}
			g = function(t, i) {
				var s = 0,
					r, n, a;
				(r = function() {
					this.valueOf = 0
				}).prototype.valueOf = 0;
				n = new r;
				for (a in n) {
					if (p.call(n, a)) {
						s++
					}
				}
				r = n = null;
				if (!s) {
					n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
					g = function(t, i) {
						var s = _.call(t) == b,
							r, a;
						var o = !s && typeof t.constructor != "function" && e[typeof t.hasOwnProperty] && t.hasOwnProperty || p;
						for (r in t) {
							if (!(s && r == "prototype") && o.call(t, r)) {
								i(r)
							}
						}
						for (a = n.length; r = n[--a]; o.call(t, r) && i(r));
					}
				} else if (s == 2) {
					g = function(t, e) {
						var i = {},
							s = _.call(t) == b,
							r;
						for (r in t) {
							if (!(s && r == "prototype") && !p.call(i, r) && (i[r] = 1) && p.call(t, r)) {
								e(r)
							}
						}
					}
				} else {
					g = function(t, e) {
						var i = _.call(t) == b,
							s, r;
						for (s in t) {
							if (!(i && s == "prototype") && p.call(t, s) && !(r = s === "constructor")) {
								e(s)
							}
						}
						if (r || p.call(t, s = "constructor")) {
							e(s)
						}
					}
				}
				return g(t, i)
			};
			if (!j("json-stringify")) {
				var I = {
					92: "\\\\",
					34: '\\"',
					8: "\\b",
					12: "\\f",
					10: "\\n",
					13: "\\r",
					9: "\\t"
				};
				var M = "000000";
				var O = function(t, e) {
						return (M + (e || 0)).slice(-t)
					};
				var C = "\\u00";
				var D = function(t) {
						var e = '"',
							i = 0,
							s = t.length,
							r = !L || s > 10;
						var n = r && (L ? t.split("") : t);
						for (; i < s; i++) {
							var a = t.charCodeAt(i);
							switch (a) {
							case 8:
							case 9:
							case 10:
							case 12:
							case 13:
							case 34:
							case 92:
								e += I[a];
								break;
							default:
								if (a < 32) {
									e += C + O(2, a.toString(16));
									break
								}
								e += r ? n[i] : t.charAt(i)
							}
						}
						return e + '"'
					};
				var k = function(t, e, i, s, r, n, a) {
						var o, h, c, l, d, f, m, y, j, b, L, P, I, M, C, N;
						try {
							o = e[t]
						} catch (F) {}
						if (typeof o == "object" && o) {
							h = _.call(o);
							if (h == E && !p.call(o, "toJSON")) {
								if (o > -1 / 0 && o < 1 / 0) {
									if (R) {
										d = A(o / 864e5);
										for (c = A(d / 365.2425) + 1970 - 1; R(c + 1, 0) <= d; c++);
										for (l = A((d - R(c, 0)) / 30.42); R(c, l + 1) <= d; l++);
										d = 1 + d - R(c, l);
										f = (o % 864e5 + 864e5) % 864e5;
										m = A(f / 36e5) % 24;
										y = A(f / 6e4) % 60;
										j = A(f / 1e3) % 60;
										b = f % 1e3
									} else {
										c = o.getUTCFullYear();
										l = o.getUTCMonth();
										d = o.getUTCDate();
										m = o.getUTCHours();
										y = o.getUTCMinutes();
										j = o.getUTCSeconds();
										b = o.getUTCMilliseconds()
									}
									o = (c <= 0 || c >= 1e4 ? (c < 0 ? "-" : "+") + O(6, c < 0 ? -c : c) : O(4, c)) + "-" + O(2, l + 1) + "-" + O(2, d) + "T" + O(2, m) + ":" + O(2, y) + ":" + O(2, j) + "." + O(3, b) + "Z"
								} else {
									o = null
								}
							} else if (typeof o.toJSON == "function" && (h != w && h != T && h != S || p.call(o, "toJSON"))) {
								o = o.toJSON(t)
							}
						}
						if (i) {
							o = i.call(e, t, o)
						}
						if (o === null) {
							return "null"
						}
						h = _.call(o);
						if (h == x) {
							return "" + o
						} else if (h == w) {
							return o > -1 / 0 && o < 1 / 0 ? "" + o : "null"
						} else if (h == T) {
							return D("" + o)
						}
						if (typeof o == "object") {
							for (M = a.length; M--;) {
								if (a[M] === o) {
									throw u()
								}
							}
							a.push(o);
							L = [];
							C = n;
							n += r;
							if (h == S) {
								for (I = 0, M = o.length; I < M; I++) {
									P = k(I, o, i, s, r, n, a);
									L.push(P === v ? "null" : P)
								}
								N = L.length ? r ? "[\n" + n + L.join(",\n" + n) + "\n" + C + "]" : "[" + L.join(",") + "]" : "[]"
							} else {
								g(s || o, function(t) {
									var e = k(t, o, i, s, r, n, a);
									if (e !== v) {
										L.push(D(t) + ":" + (r ? " " : "") + e)
									}
								});
								N = L.length ? r ? "{\n" + n + L.join(",\n" + n) + "\n" + C + "}" : "{" + L.join(",") + "}" : "{}"
							}
							a.pop();
							return N
						}
					};
				i.stringify = function(t, i, s) {
					var r, n, a, o;
					if (e[typeof i] && i) {
						if ((o = _.call(i)) == b) {
							n = i
						} else if (o == S) {
							a = {};
							for (var h = 0, c = i.length, u; h < c; u = i[h++], (o = _.call(u), o == T || o == w) && (a[u] = 1));
						}
					}
					if (s) {
						if ((o = _.call(s)) == w) {
							if ((s -= s % 1) > 0) {
								for (r = "", s > 10 && (s = 10); r.length < s; r += " ");
							}
						} else if (o == T) {
							r = s.length <= 10 ? s : s.slice(0, 10)
						}
					}
					return k("", (u = {}, u[""] = t, u), n, a, r, "", [])
				}
			}
			if (!j("json-parse")) {
				var N = a.fromCharCode;
				var F = {
					92: "\\",
					34: '"',
					47: "/",
					98: "\b",
					116: "	",
					110: "\n",
					102: "\f",
					114: "\r"
				};
				var H, q;
				var X = function() {
						H = q = null;
						throw c()
					};
				var B = function() {
						var t = q,
							e = t.length,
							i, s, r, n, a;
						while (H < e) {
							a = t.charCodeAt(H);
							switch (a) {
							case 9:
							case 10:
							case 13:
							case 32:
								H++;
								break;
							case 123:
							case 125:
							case 91:
							case 93:
							case 58:
							case 44:
								i = L ? t.charAt(H) : t[H];
								H++;
								return i;
							case 34:
								for (i = "@", H++; H < e;) {
									a = t.charCodeAt(H);
									if (a < 32) {
										X()
									} else if (a == 92) {
										a = t.charCodeAt(++H);
										switch (a) {
										case 92:
										case 34:
										case 47:
										case 98:
										case 116:
										case 110:
										case 102:
										case 114:
											i += F[a];
											H++;
											break;
										case 117:
											s = ++H;
											for (r = H + 4; H < r; H++) {
												a = t.charCodeAt(H);
												if (!(a >= 48 && a <= 57 || a >= 97 && a <= 102 || a >= 65 && a <= 70)) {
													X()
												}
											}
											i += N("0x" + t.slice(s, H));
											break;
										default:
											X()
										}
									} else {
										if (a == 34) {
											break
										}
										a = t.charCodeAt(H);
										s = H;
										while (a >= 32 && a != 92 && a != 34) {
											a = t.charCodeAt(++H)
										}
										i += t.slice(s, H)
									}
								}
								if (t.charCodeAt(H) == 34) {
									H++;
									return i
								}
								X();
							default:
								s = H;
								if (a == 45) {
									n = true;
									a = t.charCodeAt(++H)
								}
								if (a >= 48 && a <= 57) {
									if (a == 48 && (a = t.charCodeAt(H + 1), a >= 48 && a <= 57)) {
										X()
									}
									n = false;
									for (; H < e && (a = t.charCodeAt(H), a >= 48 && a <= 57); H++);
									if (t.charCodeAt(H) == 46) {
										r = ++H;
										for (; r < e && (a = t.charCodeAt(r), a >= 48 && a <= 57); r++);
										if (r == H) {
											X()
										}
										H = r
									}
									a = t.charCodeAt(H);
									if (a == 101 || a == 69) {
										a = t.charCodeAt(++H);
										if (a == 43 || a == 45) {
											H++
										}
										for (r = H; r < e && (a = t.charCodeAt(r), a >= 48 && a <= 57); r++);
										if (r == H) {
											X()
										}
										H = r
									}
									return +t.slice(s, H)
								}
								if (n) {
									X()
								}
								if (t.slice(H, H + 4) == "true") {
									H += 4;
									return true
								} else if (t.slice(H, H + 5) == "false") {
									H += 5;
									return false
								} else if (t.slice(H, H + 4) == "null") {
									H += 4;
									return null
								}
								X()
							}
						}
						return "$"
					};
				var U = function(t) {
						var e, i;
						if (t == "$") {
							X()
						}
						if (typeof t == "string") {
							if ((L ? t.charAt(0) : t[0]) == "@") {
								return t.slice(1)
							}
							if (t == "[") {
								e = [];
								for (;; i || (i = true)) {
									t = B();
									if (t == "]") {
										break
									}
									if (i) {
										if (t == ",") {
											t = B();
											if (t == "]") {
												X()
											}
										} else {
											X()
										}
									}
									if (t == ",") {
										X()
									}
									e.push(U(t))
								}
								return e
							} else if (t == "{") {
								e = {};
								for (;; i || (i = true)) {
									t = B();
									if (t == "}") {
										break
									}
									if (i) {
										if (t == ",") {
											t = B();
											if (t == "}") {
												X()
											}
										} else {
											X()
										}
									}
									if (t == "," || typeof t != "string" || (L ? t.charAt(0) : t[0]) != "@" || B() != ":") {
										X()
									}
									e[t.slice(1)] = U(B())
								}
								return e
							}
							X()
						}
						return t
					};
				var Y = function(t, e, i) {
						var s = G(t, e, i);
						if (s === v) {
							delete t[e]
						} else {
							t[e] = s
						}
					};
				var G = function(t, e, i) {
						var s = t[e],
							r;
						if (typeof s == "object" && s) {
							if (_.call(s) == S) {
								for (r = s.length; r--;) {
									Y(s, r, i)
								}
							} else {
								g(s, function(t) {
									Y(s, t, i)
								})
							}
						}
						return i.call(t, e, s)
					};
				i.parse = function(t, e) {
					var i, s;
					H = 0;
					q = "" + t;
					i = U(B());
					if (B() != "$") {
						X()
					}
					H = q = null;
					return e && _.call(e) == b ? G((s = {}, s[""] = i, s), "", e) : i
				}
			}
		}
		i["runInContext"] = n;
		return i
	}
	if (i && !t) {
		n(s, i)
	} else {
		var a = s.JSON,
			o = s["JSON3"],
			h = false;
		var c = n(s, s["JSON3"] = {
			noConflict: function() {
				if (!h) {
					h = true;
					s.JSON = a;
					s["JSON3"] = o;
					a = o = null
				}
				return c
			}
		});
		s.JSON = {
			parse: c.parse,
			stringify: c.stringify
		}
	}
	if (t) {
		define(function() {
			return c
		})
	}
}).call(this);
(function() {
	var t = {};
	t.parseXML = function(t, e) {
		var i = null;
		try {
			if (window.DOMParser) {
				var s = new DOMParser;
				i = s.parseFromString(t, e)
			} else {
				i = new ActiveXObject("Microsoft.XMLDOM");
				i.async = false;
				i.loadXML(t)
			}
		} catch (r) {}
		return i
	};
	t.parseJSON = function(t) {
		if (t == null) {
			return null
		}
		try {
			return JSON.parse(t)
		} catch (e) {
			throw e
		}
	};
	createjs.DataUtils = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.src = null;
		this.type = null;
		this.id = null;
		this.maintainOrder = false;
		this.callback = null;
		this.data = null;
		this.method = createjs.LoadItem.GET;
		this.values = null;
		this.headers = null;
		this.withCredentials = false;
		this.mimeType = null;
		this.crossOrigin = null;
		this.loadTimeout = 8e3
	}
	var e = t.prototype = {};
	var i = t;
	i.create = function(e) {
		if (typeof e == "string") {
			var s = new t;
			s.src = e;
			return s
		} else if (e instanceof i) {
			return e
		} else if (e instanceof Object) {
			return e
		} else {
			throw new Error("Type not recognized.")
		}
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	createjs.LoadItem = i
})();
(function() {
	var t = {};
	t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i;
	t.RELATIVE_PATT = /^[./]*?\//i;
	t.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;
	t.parseURI = function(e) {
		var i = {
			absolute: false,
			relative: false
		};
		if (e == null) {
			return i
		}
		var s = e.indexOf("?");
		if (s > -1) {
			e = e.substr(0, s)
		}
		var r;
		if (t.ABSOLUTE_PATT.test(e)) {
			i.absolute = true
		} else if (t.RELATIVE_PATT.test(e)) {
			i.relative = true
		}
		if (r = e.match(t.EXTENSION_PATT)) {
			i.extension = r[1].toLowerCase()
		}
		return i
	};
	t.formatQueryString = function(t, e) {
		if (t == null) {
			throw new Error("You must specify data.")
		}
		var i = [];
		for (var s in t) {
			i.push(s + "=" + escape(t[s]))
		}
		if (e) {
			i = i.concat(e)
		}
		return i.join("&")
	};
	t.buildPath = function(t, e) {
		if (e == null) {
			return t
		}
		var i = [];
		var s = t.indexOf("?");
		if (s != -1) {
			var r = t.slice(s + 1);
			i = i.concat(r.split("&"))
		}
		if (s != -1) {
			return t.slice(0, s) + "?" + this._formatQueryString(e, i)
		} else {
			return t + "?" + this._formatQueryString(e, i)
		}
	};
	t.isCrossDomain = function(t) {
		var e = document.createElement("a");
		e.href = t.src;
		var i = document.createElement("a");
		i.href = location.href;
		var s = e.hostname != "" && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
		return s
	};
	t.isLocal = function(t) {
		var e = document.createElement("a");
		e.href = t.src;
		return e.hostname == "" && e.protocol == "file:"
	};
	t.isBinary = function(t) {
		switch (t) {
		case createjs.AbstractLoader.IMAGE:
		case createjs.AbstractLoader.BINARY:
			return true;
		default:
			return false
		}
	};
	t.isImageTag = function(t) {
		return t instanceof HTMLImageElement
	};
	t.isAudioTag = function(t) {
		if (window.HTMLAudioElement) {
			return t instanceof HTMLAudioElement
		} else {
			return false
		}
	};
	t.isVideoTag = function(t) {
		if (window.HTMLVideoElement) {
			return t instanceof HTMLVideoElement
		} else {
			false
		}
	};
	t.isText = function(t) {
		switch (t) {
		case createjs.AbstractLoader.TEXT:
		case createjs.AbstractLoader.JSON:
		case createjs.AbstractLoader.MANIFEST:
		case createjs.AbstractLoader.XML:
		case createjs.AbstractLoader.CSS:
		case createjs.AbstractLoader.SVG:
		case createjs.AbstractLoader.JAVASCRIPT:
			return true;
		default:
			return false
		}
	};
	t.getTypeByExtension = function(t) {
		if (t == null) {
			return createjs.AbstractLoader.TEXT
		}
		switch (t.toLowerCase()) {
		case "jpeg":
		case "jpg":
		case "gif":
		case "png":
		case "webp":
		case "bmp":
			return createjs.AbstractLoader.IMAGE;
		case "ogg":
		case "mp3":
		case "webm":
			return createjs.AbstractLoader.SOUND;
		case "mp4":
		case "webm":
		case "ts":
			return createjs.AbstractLoader.VIDEO;
		case "json":
			return createjs.AbstractLoader.JSON;
		case "xml":
			return createjs.AbstractLoader.XML;
		case "css":
			return createjs.AbstractLoader.CSS;
		case "libs":
			return createjs.AbstractLoader.JAVASCRIPT;
		case "svg":
			return createjs.AbstractLoader.SVG;
		default:
			return createjs.AbstractLoader.TEXT
		}
	};
	createjs.RequestUtils = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.EventDispatcher_constructor();
		this.loaded = false;
		this.canceled = false;
		this.progress = 0;
		this.type = i;
		this.resultFormatter = null;
		if (t) {
			this._item = createjs.LoadItem.create(t)
		} else {
			this._item = null
		}
		this._preferXHR = e;
		this._result = null;
		this._rawResult = null;
		this._loadedItems = null;
		this._tagSrcAttribute = null;
		this._tag = null
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	var i = t;
	i.POST = "POST";
	i.GET = "GET";
	i.BINARY = "binary";
	i.CSS = "css";
	i.IMAGE = "image";
	i.JAVASCRIPT = "javascript";
	i.JSON = "json";
	i.JSONP = "jsonp";
	i.MANIFEST = "manifest";
	i.SOUND = "sound";
	i.VIDEO = "video";
	i.SPRITESHEET = "spritesheet";
	i.SVG = "svg";
	i.TEXT = "text";
	i.XML = "xml";
	e.getItem = function() {
		return this._item
	};
	e.getResult = function(t) {
		return t ? this._rawResult : this._result
	};
	e.getTag = function() {
		return this._tag
	};
	e.setTag = function(t) {
		this._tag = t
	};
	e.load = function() {
		this._createRequest();
		this._request.on("complete", this, this);
		this._request.on("progress", this, this);
		this._request.on("loadStart", this, this);
		this._request.on("abort", this, this);
		this._request.on("timeout", this, this);
		this._request.on("error", this, this);
		var t = new createjs.Event("initialize");
		t.loader = this._request;
		this.dispatchEvent(t);
		this._request.load()
	};
	e.cancel = function() {
		this.canceled = true;
		this.destroy()
	};
	e.destroy = function() {
		if (this._request) {
			this._request.removeAllEventListeners();
			this._request.destroy()
		}
		this._request = null;
		this._item = null;
		this._rawResult = null;
		this._result = null;
		this._loadItems = null;
		this.removeAllEventListeners()
	};
	e.getLoadedItems = function() {
		return this._loadedItems
	};
	e._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
		} else {
			this._request = new createjs.XHRRequest(this._item)
		}
	};
	e._createTag = function(t) {
		return null
	};
	e._sendLoadStart = function() {
		if (this._isCanceled()) {
			return
		}
		this.dispatchEvent("loadstart")
	};
	e._sendProgress = function(t) {
		if (this._isCanceled()) {
			return
		}
		var e = null;
		if (typeof t == "number") {
			this.progress = t;
			e = new createjs.ProgressEvent(this.progress)
		} else {
			e = t;
			this.progress = t.loaded / t.total;
			e.progress = this.progress;
			if (isNaN(this.progress) || this.progress == Infinity) {
				this.progress = 0
			}
		}
		this.hasEventListener("progress") && this.dispatchEvent(e)
	};
	e._sendComplete = function() {
		if (this._isCanceled()) {
			return
		}
		this.loaded = true;
		var t = new createjs.Event("complete");
		t.rawResult = this._rawResult;
		if (this._result != null) {
			t.result = this._result
		}
		this.dispatchEvent(t)
	};
	e._sendError = function(t) {
		if (this._isCanceled() || !this.hasEventListener("error")) {
			return
		}
		if (t == null) {
			t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")
		}
		this.dispatchEvent(t)
	};
	e._isCanceled = function() {
		if (window.createjs == null || this.canceled) {
			return true
		}
		return false
	};
	e.resultFormatter = null;
	e.handleEvent = function(t) {
		switch (t.type) {
		case "complete":
			this._rawResult = t.target._response;
			var e = this.resultFormatter && this.resultFormatter(this);
			var i = this;
			if (e instanceof Function) {
				e(function(t) {
					i._result = t;
					i._sendComplete()
				})
			} else {
				this._result = e || this._rawResult;
				this._sendComplete()
			}
			break;
		case "progress":
			this._sendProgress(t);
			break;
		case "error":
			this._sendError(t);
			break;
		case "loadstart":
			this._sendLoadStart();
			break;
		case "abort":
		case "timeout":
			if (!this._isCanceled()) {
				this.dispatchEvent(t.type)
			}
			break
		}
	};
	e.buildPath = function(t, e) {
		return createjs.RequestUtils.buildPath(t, e)
	};
	e.toString = function() {
		return "[PreloadJS AbstractLoader]"
	};
	createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractLoader_constructor(t, e, i);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "src"
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	e.load = function() {
		if (!this._tag) {
			this._tag = this._createTag(this._item.src)
		}
		this._tag.preload = "auto";
		this._tag.load();
		this.AbstractLoader_load()
	};
	e._createTag = function() {};
	e._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
		} else {
			this._request = new createjs.XHRRequest(this._item)
		}
	};
	e._formatResult = function(t) {
		this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
		this._tag.onstalled = null;
		if (this._preferXHR) {
			t.getTag().src = t.getResult(true)
		}
		return t.getTag()
	};
	createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = function(t) {
			this._item = t
		};
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.load = function() {};
	e.destroy = function() {};
	e.cancel = function() {};
	createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractRequest_constructor(t);
		this._tag = e;
		this._tagSrcAttribute = i;
		this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
		this._addedToDOM = false;
		this._startTagVisibility = null
	}
	var e = createjs.extend(t, createjs.AbstractRequest);
	e.load = function() {
		if (this._tag.parentNode == null) {
			window.document.body.appendChild(this._tag);
			this._addedToDOM = true
		}
		this._tag.onload = createjs.proxy(this._handleTagComplete, this);
		this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
		var t = new createjs.Event("initialize");
		t.loader = this._tag;
		this.dispatchEvent(t);
		this._hideTag();
		this._tag[this._tagSrcAttribute] = this._item.src
	};
	e.destroy = function() {
		this._clean();
		this._tag = null;
		this.AbstractRequest_destroy()
	};
	e._handleReadyStateChange = function() {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		if (t.readyState == "loaded" || t.readyState == "complete") {
			this._handleTagComplete()
		}
	};
	e._handleTagComplete = function() {
		this._rawResult = this._tag;
		this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
		this._clean();
		this._showTag();
		this.dispatchEvent("complete")
	};
	e._clean = function() {
		this._tag.onload = null;
		this._tag.onreadystatechange = null;
		if (this._addedToDOM && this._tag.parentNode != null) {
			this._tag.parentNode.removeChild(this._tag)
		}
	};
	e._hideTag = function() {
		this._startTagVisibility = this._tag.style.visibility;
		this._tag.style.visibility = "hidden"
	};
	e._showTag = function() {
		this._tag.style.visibility = this._startTagVisibility
	};
	e._handleStalled = function() {};
	createjs.TagRequest = createjs.promote(t, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractRequest_constructor(t);
		this._tag = e;
		this._tagSrcAttribute = i;
		this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
	}
	var e = createjs.extend(t, createjs.TagRequest);
	var i = t;
	e.load = function() {
		this._tag.onstalled = createjs.proxy(this._handleStalled, this);
		this._tag.onprogress = createjs.proxy(this._handleProgress, this);
		this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, false);
		this.TagRequest_load()
	};
	e._handleReadyStateChange = function() {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		if (t.readyState == "loaded" || t.readyState == "complete") {
			this._handleTagComplete()
		}
	};
	e._handleStalled = function() {};
	e._handleProgress = function(t) {
		if (!t || t.loaded > 0 && t.total == 0) {
			return
		}
		var e = new createjs.ProgressEvent(t.loaded, t.total);
		this.dispatchEvent(e)
	};
	e._clean = function() {
		this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
		this._tag.onstalled = null;
		this._tag.onprogress = null;
		this.TagRequest__clean()
	};
	createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractRequest_constructor(t);
		this._request = null;
		this._loadTimeout = null;
		this._xhrLevel = 1;
		this._response = null;
		this._rawResponse = null;
		this._canceled = false;
		this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
		this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
		this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
		this._handleErrorProxy = createjs.proxy(this._handleError, this);
		this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
		this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
		this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
		if (!this._createXHR(t)) {}
	}
	var e = createjs.extend(t, createjs.AbstractRequest);
	t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
	e.getResult = function(t) {
		if (t && this._rawResponse) {
			return this._rawResponse
		}
		return this._response
	};
	e.cancel = function() {
		this.canceled = true;
		this._clean();
		this._request.abort()
	};
	e.load = function() {
		if (this._request == null) {
			this._handleError();
			return
		}
		this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
		this._request.addEventListener("progress", this._handleProgressProxy, false);
		this._request.addEventListener("abort", this._handleAbortProxy, false);
		this._request.addEventListener("error", this._handleErrorProxy, false);
		this._request.addEventListener("timeout", this._handleTimeoutProxy, false);
		this._request.addEventListener("load", this._handleLoadProxy, false);
		this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
		if (this._xhrLevel == 1) {
			this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout)
		}
		try {
			if (!this._item.values || this._item.method == createjs.AbstractLoader.GET) {
				this._request.send()
			} else if (this._item.method == createjs.AbstractLoader.POST) {
				this._request.send(createjs.RequestUtils.formatQueryString(this._item.values))
			}
		} catch (t) {
			this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
		}
	};
	e.setResponseType = function(t) {
		this._request.responseType = t
	};
	e.getAllResponseHeaders = function() {
		if (this._request.getAllResponseHeaders instanceof Function) {
			return this._request.getAllResponseHeaders()
		} else {
			return null
		}
	};
	e.getResponseHeader = function(t) {
		if (this._request.getResponseHeader instanceof Function) {
			return this._request.getResponseHeader(t)
		} else {
			return null
		}
	};
	e._handleProgress = function(t) {
		if (!t || t.loaded > 0 && t.total == 0) {
			return
		}
		var e = new createjs.ProgressEvent(t.loaded, t.total);
		this.dispatchEvent(e)
	};
	e._handleLoadStart = function(t) {
		clearTimeout(this._loadTimeout);
		this.dispatchEvent("loadstart")
	};
	e._handleAbort = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
	};
	e._handleError = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent(t.message))
	};
	e._handleReadyStateChange = function(t) {
		if (this._request.readyState == 4) {
			this._handleLoad()
		}
	};
	e._handleLoad = function(t) {
		if (this.loaded) {
			return
		}
		this.loaded = true;
		var e = this._checkError();
		if (e) {
			this._handleError(e);
			return
		}
		this._response = this._getResponse();
		this._clean();
		this.dispatchEvent(new createjs.Event("complete"))
	};
	e._handleTimeout = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
	};
	e._checkError = function() {
		var t = parseInt(this._request.status);
		switch (t) {
		case 404:
		case 0:
			return new Error(t)
		}
		return null
	};
	e._getResponse = function() {
		if (this._response != null) {
			return this._response
		}
		if (this._request.response != null) {
			return this._request.response
		}
		try {
			if (this._request.responseText != null) {
				return this._request.responseText
			}
		} catch (t) {}
		try {
			if (this._request.responseXML != null) {
				return this._request.responseXML
			}
		} catch (t) {}
		return null
	};
	e._createXHR = function(t) {
		var e = createjs.RequestUtils.isCrossDomain(t);
		var i = {};
		var r = null;
		if (window.XMLHttpRequest) {
			r = new XMLHttpRequest;
			if (e && r.withCredentials === undefined && window.XDomainRequest) {
				r = new XDomainRequest
			}
		} else {
			for (var n = 0, a = s.ACTIVEX_VERSIONS.length; n < a; n++) {
				var o = s.ACTIVEX_VERSIONS[n];
				try {
					r = new ActiveXObject(axVersions);
					break
				} catch (h) {}
			}
			if (r == null) {
				return false
			}
		}
		if (t.mimeType && r.overrideMimeType) {
			r.overrideMimeType(t.mimeType)
		}
		this._xhrLevel = typeof r.responseType === "string" ? 2 : 1;
		var c = null;
		if (t.method == createjs.AbstractLoader.GET) {
			c = createjs.RequestUtils.buildPath(t.src, t.values)
		} else {
			c = t.src
		}
		r.open(t.method || createjs.AbstractLoader.GET, c, true);
		if (e && r instanceof XMLHttpRequest && this._xhrLevel == 1) {
			i["Origin"] = location.origin
		}
		if (t.values && t.method == createjs.AbstractLoader.POST) {
			i["Content-Type"] = "application/x-www-form-urlencoded"
		}
		if (!e && !i["X-Requested-With"]) {
			i["X-Requested-With"] = "XMLHttpRequest"
		}
		if (t.headers) {
			for (var u in t.headers) {
				i[u] = t.headers[u]
			}
		}
		for (u in i) {
			r.setRequestHeader(u, i[u])
		}
		if (r instanceof XMLHttpRequest && t.withCredentials !== undefined) {
			r.withCredentials = t.withCredentials
		}
		this._request = r;
		return true
	};
	e._clean = function() {
		clearTimeout(this._loadTimeout);
		this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
		this._request.removeEventListener("progress", this._handleProgressProxy);
		this._request.removeEventListener("abort", this._handleAbortProxy);
		this._request.removeEventListener("error", this._handleErrorProxy);
		this._request.removeEventListener("timeout", this._handleTimeoutProxy);
		this._request.removeEventListener("load", this._handleLoadProxy);
		this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
	};
	e.toString = function() {
		return "[PreloadJS XHRRequest]"
	};
	createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractLoader_constructor();
		this.init(t, e, i)
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	e.init = function(t, e, i) {
		this.useXHR = true;
		this.preferXHR = true;
		this._preferXHR = true;
		this.setPreferXHR(t);
		this.stopOnError = false;
		this.maintainScriptOrder = true;
		this.next = null;
		this._paused = false;
		this._basePath = e;
		this._crossOrigin = i;
		this._typeCallbacks = {};
		this._extensionCallbacks = {};
		this._loadStartWasDispatched = false;
		this._maxConnections = 1;
		this._currentlyLoadingScript = null;
		this._currentLoads = [];
		this._loadQueue = [];
		this._loadQueueBackup = [];
		this._loadItemsById = {};
		this._loadItemsBySrc = {};
		this._loadedResults = {};
		this._loadedRawResults = {};
		this._numItems = 0;
		this._numItemsLoaded = 0;
		this._scriptOrder = [];
		this._loadedScripts = [];
		this._lastProgress = NaN;
		this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader];
		this._defaultLoaderLength = this._availableLoaders.length
	};
	i.loadTimeout = 8e3;
	i.LOAD_TIMEOUT = 0;
	i.BINARY = createjs.AbstractLoader.BINARY;
	i.CSS = createjs.AbstractLoader.CSS;
	i.IMAGE = createjs.AbstractLoader.IMAGE;
	i.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT;
	i.JSON = createjs.AbstractLoader.JSON;
	i.JSONP = createjs.AbstractLoader.JSONP;
	i.MANIFEST = createjs.AbstractLoader.MANIFEST;
	i.SOUND = createjs.AbstractLoader.SOUND;
	i.VIDEO = createjs.AbstractLoader.VIDEO;
	i.SVG = createjs.AbstractLoader.SVG;
	i.TEXT = createjs.AbstractLoader.TEXT;
	i.XML = createjs.AbstractLoader.XML;
	i.POST = createjs.AbstractLoader.POST;
	i.GET = createjs.AbstractLoader.GET;
	e.registerLoader = function(t) {
		if (!t || !t.canLoadItem) {
			throw new Error("loader is of an incorrect type.")
		} else if (this._availableLoaders.indexOf(t) != -1) {
			throw new Error("loader already exists.")
		}
		this._availableLoaders.unshift(t)
	};
	e.unregisterLoader = function(t) {
		var e = this._availableLoaders.indexOf(t);
		if (e != -1 && e < this._defaultLoaderLength - 1) {
			this._availableLoaders.splice(e, 1)
		}
	};
	e.setUseXHR = function(t) {
		return this.setPreferXHR(t)
	};
	e.setPreferXHR = function(t) {
		this.preferXHR = t != false && window.XMLHttpRequest != null;
		return this.preferXHR
	};
	e.removeAll = function() {
		this.remove()
	};
	e.remove = function(t) {
		var e = null;
		if (t && !(t instanceof Array)) {
			e = [t]
		} else if (t) {
			e = t
		} else if (arguments.length > 0) {
			return
		}
		var i = false;
		if (!e) {
			this.close();
			for (var s in this._loadItemsById) {
				this._disposeItem(this._loadItemsById[s])
			}
			this.init(this.preferXHR, this._basePath)
		} else {
			while (e.length) {
				var r = e.pop();
				var n = this.getResult(r);
				for (a = this._loadQueue.length - 1; a >= 0; a--) {
					o = this._loadQueue[a].getItem();
					if (o.id == r || o.src == r) {
						this._loadQueue.splice(a, 1)[0].cancel();
						break
					}
				}
				for (a = this._loadQueueBackup.length - 1; a >= 0; a--) {
					o = this._loadQueueBackup[a].getItem();
					if (o.id == r || o.src == r) {
						this._loadQueueBackup.splice(a, 1)[0].cancel();
						break
					}
				}
				if (n) {
					delete this._loadItemsById[n.id];
					delete this._loadItemsBySrc[n.src];
					this._disposeItem(n)
				} else {
					for (var a = this._currentLoads.length - 1; a >= 0; a--) {
						var o = this._currentLoads[a].getItem();
						if (o.id == r || o.src == r) {
							this._currentLoads.splice(a, 1)[0].cancel();
							i = true;
							break
						}
					}
				}
			}
			if (i) {
				this._loadNext()
			}
		}
	};
	e.reset = function() {
		this.close();
		for (var t in this._loadItemsById) {
			this._disposeItem(this._loadItemsById[t])
		}
		var e = [];
		for (var i = 0, s = this._loadQueueBackup.length; i < s; i++) {
			e.push(this._loadQueueBackup[i].getItem())
		}
		this.loadManifest(e, false)
	};
	e.installPlugin = function(t) {
		if (t == null) {
			return
		}
		if (t.getPreloadHandlers != null) {
			var e = t.getPreloadHandlers();
			e.scope = t;
			if (e.types != null) {
				for (var i = 0, s = e.types.length; i < s; i++) {
					this._typeCallbacks[e.types[i]] = e
				}
			}
			if (e.extensions != null) {
				for (i = 0, s = e.extensions.length; i < s; i++) {
					this._extensionCallbacks[e.extensions[i]] = e
				}
			}
		}
	};
	e.setMaxConnections = function(t) {
		this._maxConnections = t;
		if (!this._paused && this._loadQueue.length > 0) {
			this._loadNext()
		}
	};
	e.loadFile = function(t, e, i) {
		if (t == null) {
			var s = new createjs.ErrorEvent("PRELOAD_NO_FILE");
			this._sendError(s);
			return
		}
		this._addItem(t, null, i);
		if (e !== false) {
			this.setPaused(false)
		} else {
			this.setPaused(true)
		}
	};
	e.loadManifest = function(t, e, s) {
		var r = null;
		var n = null;
		if (t instanceof Array) {
			if (t.length == 0) {
				var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
				this._sendError(a);
				return
			}
			r = t
		} else if (typeof t === "string") {
			r = [{
				src: t,
				type: i.MANIFEST
			}]
		} else if (typeof t == "object") {
			if (t.src !== undefined) {
				if (t.type == null) {
					t.type = i.MANIFEST
				} else if (t.type != i.MANIFEST) {
					var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
					this._sendError(a)
				}
				r = [t]
			} else if (t.manifest !== undefined) {
				r = t.manifest;
				n = t.path
			}
		} else {
			var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
			this._sendError(a);
			return
		}
		for (var o = 0, h = r.length; o < h; o++) {
			this._addItem(r[o], n, s)
		}
		if (e !== false) {
			this.setPaused(false)
		} else {
			this.setPaused(true)
		}
	};
	e.load = function() {
		this.setPaused(false)
	};
	e.getItem = function(t) {
		return this._loadItemsById[t] || this._loadItemsBySrc[t]
	};
	e.getResult = function(t, e) {
		var i = this._loadItemsById[t] || this._loadItemsBySrc[t];
		if (i == null) {
			return null
		}
		var s = i.id;
		if (e && this._loadedRawResults[s]) {
			return this._loadedRawResults[s]
		}
		return this._loadedResults[s]
	};
	e.getItems = function(t) {
		var e = [];
		for (var i = 0, s = this._loadQueueBackup.length; i < s; i++) {
			var r = this._loadQueueBackup[i];
			var n = r.getItem();
			if (t === true && !r.loaded) {
				continue
			}
			e.push({
				item: n,
				result: this.getResult(n.id),
				rawResult: this.getResult(n.id, true)
			})
		}
		return e
	};
	e.setPaused = function(t) {
		this._paused = t;
		if (!this._paused) {
			this._loadNext()
		}
	};
	e.close = function() {
		while (this._currentLoads.length) {
			this._currentLoads.pop().cancel()
		}
		this._scriptOrder.length = 0;
		this._loadedScripts.length = 0;
		this.loadStartWasDispatched = false;
		this._itemCount = 0;
		this._lastProgress = NaN
	};
	e._addItem = function(t, e, i) {
		var s = this._createLoadItem(t, e, i);
		if (s == null) {
			return
		}
		var r = this._createLoader(s);
		if (r != null) {
			s._loader = r;
			this._loadQueue.push(r);
			this._loadQueueBackup.push(r);
			this._numItems++;
			this._updateProgress();
			if (this.maintainScriptOrder && s.type == createjs.LoadQueue.JAVASCRIPT || s.maintainOrder === true) {
				this._scriptOrder.push(s);
				this._loadedScripts.push(null)
			}
		}
	};
	e._createLoadItem = function(t, e, s) {
		var r = createjs.LoadItem.create(t);
		if (r == null) {
			return null
		}
		var n = createjs.RequestUtils.parseURI(r.src);
		if (n.extension) {
			r.ext = n.extension
		}
		if (r.type == null) {
			r.type = createjs.RequestUtils.getTypeByExtension(r.ext)
		}
		var a = "";
		var o = s || this._basePath;
		var h = r.src;
		if (!n.absolute && !n.relative) {
			if (e) {
				a = e;
				var c = createjs.RequestUtils.parseURI(e);
				h = e + h;
				if (o != null && !c.absolute && !c.relative) {
					a = o + a
				}
			} else if (o != null) {
				a = o
			}
		}
		r.src = a + r.src;
		r.path = a;
		if (r.id === undefined || r.id === null || r.id === "") {
			r.id = h
		}
		var u = this._typeCallbacks[r.type] || this._extensionCallbacks[r.ext];
		if (u) {
			var l = u.callback.call(u.scope, r, this);
			if (l === false) {
				return null
			} else if (l === true) {} else if (l != null) {
				r._loader = l
			}
			n = createjs.RequestUtils.parseURI(r.src);
			if (n.extension != null) {
				r.ext = n.extension
			}
		}
		this._loadItemsById[r.id] = r;
		this._loadItemsBySrc[r.src] = r;
		if (r.loadTimeout == null) {
			r.loadTimeout = i.loadTimeout
		}
		if (r.crossOrigin == null) {
			r.crossOrigin = this._crossOrigin
		}
		return r
	};
	e._createLoader = function(t) {
		if (t._loader != null) {
			return t._loader
		}
		var e = this.preferXHR;
		for (var i = 0; i < this._availableLoaders.length; i++) {
			var s = this._availableLoaders[i];
			if (s && s.canLoadItem(t)) {
				return new s(t, e)
			}
		}
		return null
	};
	e._loadNext = function() {
		if (this._paused) {
			return
		}
		if (!this._loadStartWasDispatched) {
			this._sendLoadStart();
			this._loadStartWasDispatched = true
		}
		if (this._numItems == this._numItemsLoaded) {
			this.loaded = true;
			this._sendComplete();
			if (this.next && this.next.load) {
				this.next.load()
			}
		} else {
			this.loaded = false
		}
		for (var t = 0; t < this._loadQueue.length; t++) {
			if (this._currentLoads.length >= this._maxConnections) {
				break
			}
			var e = this._loadQueue[t];
			if (!this._canStartLoad(e)) {
				continue
			}
			this._loadQueue.splice(t, 1);
			t--;
			this._loadItem(e)
		}
	};
	e._loadItem = function(t) {
		t.on("fileload", this._handleFileLoad, this);
		t.on("progress", this._handleProgress, this);
		t.on("complete", this._handleFileComplete, this);
		t.on("error", this._handleError, this);
		t.on("fileerror", this._handleFileError, this);
		this._currentLoads.push(t);
		this._sendFileStart(t.getItem());
		t.load()
	};
	e._handleFileLoad = function(t) {
		t.target = null;
		this.dispatchEvent(t)
	};
	e._handleFileError = function(t) {
		var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
		this._sendError(e)
	};
	e._handleError = function(t) {
		var e = t.target;
		this._numItemsLoaded++;
		this._finishOrderedItem(e, true);
		this._updateProgress();
		var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
		this._sendError(i);
		if (!this.stopOnError) {
			this._removeLoadItem(e);
			this._loadNext()
		}
	};
	e._handleFileComplete = function(t) {
		var e = t.target;
		var i = e.getItem();
		var s = e.getResult();
		this._loadedResults[i.id] = s;
		var r = e.getResult(true);
		if (r != null && r !== s) {
			this._loadedRawResults[i.id] = r
		}
		this._saveLoadedItems(e);
		this._removeLoadItem(e);
		if (!this._finishOrderedItem(e)) {
			this._processFinishedLoad(i, e)
		}
	};
	e._saveLoadedItems = function(t) {
		var e = t.getLoadedItems();
		if (e === null) {
			return
		}
		for (var i = 0; i < e.length; i++) {
			var s = e[i].item;
			this._loadItemsBySrc[s.src] = s;
			this._loadItemsById[s.id] = s;
			this._loadedResults[s.id] = e[i].result;
			this._loadedRawResults[s.id] = e[i].rawResult
		}
	};
	e._finishOrderedItem = function(t, e) {
		var i = t.getItem();
		if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
			if (t instanceof createjs.JavaScriptLoader) {
				this._currentlyLoadingScript = false
			}
			var s = createjs.indexOf(this._scriptOrder, i);
			if (s == -1) {
				return false
			}
			this._loadedScripts[s] = e === true ? true : i;
			this._checkScriptLoadOrder();
			return true
		}
		return false
	};
	e._checkScriptLoadOrder = function() {
		var t = this._loadedScripts.length;
		for (var e = 0; e < t; e++) {
			var i = this._loadedScripts[e];
			if (i === null) {
				break
			}
			if (i === true) {
				continue
			}
			var s = this._loadedResults[i.id];
			if (i.type == createjs.LoadQueue.JAVASCRIPT) {
				(document.body || document.getElementsByTagName("body")[0]).appendChild(s)
			}
			var r = i._loader;
			this._processFinishedLoad(i, r);
			this._loadedScripts[e] = true
		}
	};
	e._processFinishedLoad = function(t, e) {
		this._numItemsLoaded++;
		this._updateProgress();
		this._sendFileComplete(t, e);
		this._loadNext()
	};
	e._canStartLoad = function(t) {
		if (!this.maintainScriptOrder || t.preferXHR) {
			return true
		}
		var e = t.getItem();
		if (e.type != createjs.LoadQueue.JAVASCRIPT) {
			return true
		}
		if (this._currentlyLoadingScript) {
			return false
		}
		var i = this._scriptOrder.indexOf(e);
		var s = 0;
		while (s < i) {
			var r = this._loadedScripts[s];
			if (r == null) {
				return false
			}
			s++
		}
		this._currentlyLoadingScript = true;
		return true
	};
	e._removeLoadItem = function(t) {
		var e = t.getItem();
		delete e._loader;
		var i = this._currentLoads.length;
		for (var s = 0; s < i; s++) {
			if (this._currentLoads[s] == t) {
				this._currentLoads.splice(s, 1);
				break
			}
		}
	};
	e._handleProgress = function(t) {
		var e = t.target;
		this._sendFileProgress(e.getItem(), e.progress);
		this._updateProgress()
	};
	e._updateProgress = function() {
		var t = this._numItemsLoaded / this._numItems;
		var e = this._numItems - this._numItemsLoaded;

		if (e > 0) {
			var i = 0;
			for (var s = 0, r = this._currentLoads.length; s < r; s++) {
				i += this._currentLoads[s].progress
			}
			t += i / e * (e / this._numItems)
		}
		if (this._lastProgress != t) {
			this._sendProgress(t);
			this._lastProgress = t
		}
	};
	e._disposeItem = function(t) {
		delete this._loadedResults[t.id];
		delete this._loadedRawResults[t.id];
		delete this._loadItemsById[t.id];
		delete this._loadItemsBySrc[t.src]
	};
	e._sendFileProgress = function(t, e) {
		if (this._isCanceled()) {
			this._cleanUp();
			return
		}
		if (!this.hasEventListener("fileprogress")) {
			return
		}
		var i = new createjs.Event("fileprogress");
		i.progress = e;
		i.loaded = e;
		i.total = 1;
		i.item = t;
		this.dispatchEvent(i)
	};
	e._sendFileComplete = function(t, e) {
		if (this._isCanceled()) {
			return
		}
		var i = new createjs.Event("fileload");
		i.loader = e;
		i.item = t;
		i.result = this._loadedResults[t.id];
		i.rawResult = this._loadedRawResults[t.id];
		if (t.completeHandler) {
			t.completeHandler(i)
		}
		this.hasEventListener("fileload") && this.dispatchEvent(i)
	};
	e._sendFileStart = function(t) {
		var e = new createjs.Event("filestart");
		e.item = t;
		this.hasEventListener("filestart") && this.dispatchEvent(e)
	};
	e.toString = function() {
		return "[PreloadJS LoadQueue]"
	};
	createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.TEXT)
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.TEXT
	};
	createjs.TextLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.BINARY);
		this.on("initialize", this._updateXHR, this)
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.BINARY
	};
	e._updateXHR = function(t) {
		t.loader.setResponseType("arraybuffer")
	};
	createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "href";
		if (e) {
			this._tag = document.createElement("style")
		} else {
			this._tag = document.createElement("link")
		}
		this._tag.rel = "stylesheet";
		this._tag.type = "text/css"
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.CSS
	};
	e._formatResult = function(t) {
		if (this._preferXHR) {
			var e = t.getTag();
			var i = document.getElementsByTagName("head")[0];
			i.appendChild(e);
			if (e.styleSheet) {
				e.styleSheet.cssText = t.getResult(true)
			} else {
				var s = document.createTextNode(t.getResult(true));
				e.appendChild(s)
			}
		} else {
			e = this._tag
		}
		return e
	};
	createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "src";
		if (createjs.RequestUtils.isImageTag(t)) {
			this._tag = t
		} else if (createjs.RequestUtils.isImageTag(t.src)) {
			this._tag = t.src
		} else if (createjs.RequestUtils.isImageTag(t.tag)) {
			this._tag = t.tag
		}
		if (this._tag != null) {
			this._preferXHR = false
		} else {
			this._tag = document.createElement("img")
		}
		this.on("initialize", this._updateXHR, this)
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.IMAGE
	};
	e.load = function() {
		if (this._tag.src != "" && this._tag.complete) {
			this._sendComplete();
			return
		}
		var t = this._item.crossOrigin;
		if (t == true) {
			t = "Anonymous"
		}
		if (t != null && !createjs.RequestUtils.isLocal(this._item.src)) {
			this._tag.crossOrigin = t
		}
		this.AbstractLoader_load()
	};
	e._updateXHR = function(t) {
		t.loader.mimeType = "text/plain; charset=x-user-defined-binary";
		if (t.loader.setResponseType) {
			t.loader.setResponseType("blob")
		}
	};
	e._formatResult = function(t) {
		var e = this;
		return function(i) {
			var s = e._tag;
			var r = window.URL || window.webkitURL;
			if (!e._preferXHR) {} else if (r) {
				var n = r.createObjectURL(t.getResult(true));
				s.src = n;
				s.onload = function() {
					r.revokeObjectURL(e.src)
				}
			} else {
				s.src = t.getItem().src
			}
			if (s.complete) {
				i(s)
			} else {
				s.onload = function() {
					i(this)
				}
			}
		}
	};
	createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "src";
		this.setTag(document.createElement("script"))
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.JAVASCRIPT
	};
	e._formatResult = function(t) {
		var e = t.getTag();
		if (this._preferXHR) {
			e.text = t.getResult(true)
		}
		return e
	};
	createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.JSON);
		this.resultFormatter = this._formatResult
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.JSON && !t._loadAsJSONP
	};
	e._formatResult = function(t) {
		var e = null;
		try {
			e = createjs.DataUtils.parseJSON(t.getResult(true))
		} catch (i) {
			var s = new createjs.ErrorEvent("JSON_FORMAT", null, i);
			this._sendError(s);
			return i
		}
		return e
	};
	createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, false, createjs.AbstractLoader.JSONP);
		this.setTag(document.createElement("script"));
		this.getTag().type = "text/javascript"
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.JSONP || t._loadAsJSONP
	};
	e.cancel = function() {
		this.AbstractLoader_cancel();
		this._dispose()
	};
	e.load = function() {
		if (this._item.callback == null) {
			throw new Error("callback is required for loading JSONP requests.")
		}
		if (window[this._item.callback] != null) {
			throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.")
		}
		window[this._item.callback] = createjs.proxy(this._handleLoad, this);
		window.document.body.appendChild(this._tag);
		this._tag.src = this._item.src
	};
	e._handleLoad = function(t) {
		this._result = this._rawResult = t;
		this._sendComplete();
		this._dispose()
	};
	e._dispose = function() {
		window.document.body.removeChild(this._tag);
		delete window[this._item.callback]
	};
	createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST);
		this._manifestQueue = null
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.MANIFEST_PROGRESS = .25;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.MANIFEST
	};
	e.load = function() {
		this.AbstractLoader_load()
	};
	e._createRequest = function() {
		var t = this._item.callback;
		if (t != null) {
			this._request = new createjs.JSONPLoader(this._item)
		} else {
			this._request = new createjs.JSONLoader(this._item)
		}
	};
	e.handleEvent = function(t) {
		switch (t.type) {
		case "complete":
			this._rawResult = t.target.getResult(true);
			this._result = t.target.getResult();
			this._sendProgress(i.MANIFEST_PROGRESS);
			this._loadManifest(this._result);
			return;
		case "progress":
			t.loaded *= i.MANIFEST_PROGRESS;
			this.progress = t.loaded / t.total;
			if (isNaN(this.progress) || this.progress == Infinity) {
				this.progress = 0
			}
			this._sendProgress(t);
			return
		}
		this.AbstractLoader_handleEvent(t)
	};
	e.destroy = function() {
		this.AbstractLoader_destroy();
		this._manifestQueue.close()
	};
	e._loadManifest = function(t) {
		if (t && t.manifest) {
			var e = this._manifestQueue = new createjs.LoadQueue;
			e.on("fileload", this._handleManifestFileLoad, this);
			e.on("progress", this._handleManifestProgress, this);
			e.on("complete", this._handleManifestComplete, this, true);
			e.on("error", this._handleManifestError, this, true);
			e.loadManifest(t)
		} else {
			this._sendComplete()
		}
	};
	e._handleManifestFileLoad = function(t) {
		t.target = null;
		this.dispatchEvent(t)
	};
	e._handleManifestComplete = function(t) {
		this._loadedItems = this._manifestQueue.getItems(true);
		this._sendComplete()
	};
	e._handleManifestProgress = function(t) {
		this.progress = t.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS;
		this._sendProgress(this.progress)
	};
	e._handleManifestError = function(t) {
		var e = new createjs.Event("fileerror");
		e.item = t.data;
		this.dispatchEvent(e)
	};
	createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND);
		if (createjs.RequestUtils.isAudioTag(t)) {
			this._tag = t
		} else if (createjs.RequestUtils.isAudioTag(t.src)) {
			this._tag = t
		} else if (createjs.RequestUtils.isAudioTag(t.tag)) {
			this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src
		}
		if (this._tag != null) {
			this._preferXHR = false
		}
	}
	var e = createjs.extend(t, createjs.AbstractMediaLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.SOUND
	};
	e._createTag = function(t) {
		var e = document.createElement("audio");
		e.autoplay = false;
		e.preload = "none";
		e.src = t;
		return e
	};
	createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO);
		if (createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src)) {
			this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src);
			this._preferXHR = false
		} else {
			this.setTag(this._createTag())
		}
	}
	var e = createjs.extend(t, createjs.AbstractMediaLoader);
	var i = t;
	e._createTag = function() {
		return document.createElement("video")
	};
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.VIDEO
	};
	createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.SPRITESHEET);
		this._parentPath = t.path;
		this._manifestQueue = null
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.SPRITESHEET_PROGRESS = .25;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.SPRITESHEET
	};
	e.destroy = function() {
		this.AbstractLoader_destroy;
		this._manifestQueue.close()
	};
	e._createRequest = function() {
		var t = this._item.callback;
		if (t != null && t instanceof Function) {
			this._request = new createjs.JSONPLoader(this._item)
		} else {
			this._request = new createjs.JSONLoader(this._item)
		}
	};
	e.handleEvent = function(t) {
		switch (t.type) {
		case "complete":
			this._rawResult = t.target.getResult(true);
			this._result = t.target.getResult();
			this._sendProgress(i.SPRITESHEET_PROGRESS);
			this._loadManifest(this._result);
			return;
		case "progress":
			t.loaded *= i.SPRITESHEET_PROGRESS;
			this.progress = t.loaded / t.total;
			if (isNaN(this.progress) || this.progress == Infinity) {
				this.progress = 0
			}
			this._sendProgress(t);
			return
		}
		this.AbstractLoader_handleEvent(t)
	};
	e._loadManifest = function(t) {
		if (t && t.images) {
			for (var e = 0; e < t.images.length; e++) {
				t.images[e] = this._parentPath + t.images[e]
			}
			var i = this._manifestQueue = new createjs.LoadQueue;
			i.on("complete", this._handleManifestComplete, this, true);
			i.on("fileload", this._handleManifestFileLoad, this);
			i.on("progress", this._handleManifestProgress, this);
			i.on("error", this._handleManifestError, this, true);
			i.loadManifest(t.images)
		}
	};
	e._handleManifestFileLoad = function(t) {
		var e = t.result;
		if (e != null) {
			var i = this.getResult().images;
			var s = i.indexOf(t.item.src);
			i[s] = e
		}
	};
	e._handleManifestComplete = function(t) {
		this._result = new createjs.SpriteSheet(this._result);
		this._loadedItems = this._manifestQueue.getItems(true);
		this._sendComplete()
	};
	e._handleManifestProgress = function(t) {
		this.progress = t.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS;
		this._sendProgress(this.progress)
	};
	e._handleManifestError = function(t) {
		var e = new createjs.Event("fileerror");
		e.item = t.data;
		this.dispatchEvent(e)
	};
	createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "data";
		if (e) {
			this.setTag(document.createElement("svg"))
		} else {
			this.setTag(document.createElement("object"));
			this.getTag().type = "image/svg+xml"
		}
		this.getTag().style.visibility = "hidden"
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.SVG
	};
	e._formatResult = function(t) {
		var e = createjs.DataUtils.parseXML(t.getResult(true), "text/xml");
		var i = t.getTag();
		if (!this._preferXHR && document.body.contains(i)) {
			document.body.removeChild(i)
		}
		if (e.documentElement != null) {
			i.appendChild(e.documentElement);
			i.style.visibility = "visible";
			return i
		} else {
			return e
		}
	};
	createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.XML);
		this.resultFormatter = this._formatResult
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.XML
	};
	e._formatResult = function(t) {
		return createjs.DataUtils.parseXML(t.getResult(true), "text/xml")
	};
	createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	var t = createjs.SoundJS = createjs.SoundJS || {};
	t.version = "0.6.0";
	t.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
})();
this.createjs = this.createjs || {};
createjs.extend = function(t, e) {
	"use strict";

	function i() {
		this.constructor = t
	}
	i.prototype = e.prototype;
	return t.prototype = new i
};
this.createjs = this.createjs || {};
createjs.promote = function(t, e) {
	"use strict";
	var i = t.prototype,
		s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
	if (s) {
		i[(e += "_") + "constructor"] = s.constructor;
		for (var r in s) {
			if (i.hasOwnProperty(r) && typeof s[r] == "function") {
				i[e + r] = s[r]
			}
		}
	}
	return t
};
this.createjs = this.createjs || {};
createjs.indexOf = function(t, e) {
	"use strict";
	for (var i = 0, s = t.length; i < s; i++) {
		if (e === t[i]) {
			return i
		}
	}
	return -1
};
this.createjs = this.createjs || {};
(function() {
	"use strict";
	createjs.proxy = function(t, e) {
		var i = Array.prototype.slice.call(arguments, 2);
		return function() {
			return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
		}
	}
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = Object.defineProperty ? true : false;
	var e = {};
	try {
		Object.defineProperty(e, "bar", {
			get: function() {
				return this._bar
			},
			set: function(t) {
				this._bar = t
			}
		})
	} catch (i) {
		t = false
	}
	createjs.definePropertySupported = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "BrowserDetect cannot be instantiated"
	}
	var e = t.agent = window.navigator.userAgent;
	t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1;
	t.isFirefox = e.indexOf("Firefox") > -1;
	t.isOpera = window.opera != null;
	t.isChrome = e.indexOf("Chrome") > -1;
	t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone;
	t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone;
	t.isBlackberry = e.indexOf("Blackberry") > -1;
	createjs.BrowserDetect = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this._listeners = null;
		this._captureListeners = null
	}
	var e = t.prototype;
	t.initialize = function(t) {
		t.addEventListener = e.addEventListener;
		t.on = e.on;
		t.removeEventListener = t.off = e.removeEventListener;
		t.removeAllEventListeners = e.removeAllEventListeners;
		t.hasEventListener = e.hasEventListener;
		t.dispatchEvent = e.dispatchEvent;
		t._dispatchEvent = e._dispatchEvent;
		t.willTrigger = e.willTrigger
	};
	e.addEventListener = function(t, e, i) {
		var s;
		if (i) {
			s = this._captureListeners = this._captureListeners || {}
		} else {
			s = this._listeners = this._listeners || {}
		}
		var r = s[t];
		if (r) {
			this.removeEventListener(t, e, i)
		}
		r = s[t];
		if (!r) {
			s[t] = [e]
		} else {
			r.push(e)
		}
		return e
	};
	e.on = function(t, e, i, s, r, n) {
		if (e.handleEvent) {
			i = i || e;
			e = e.handleEvent
		}
		i = i || this;
		return this.addEventListener(t, function(t) {
			e.call(i, t, r);
			s && t.remove()
		}, n)
	};
	e.removeEventListener = function(t, e, i) {
		var s = i ? this._captureListeners : this._listeners;
		if (!s) {
			return
		}
		var r = s[t];
		if (!r) {
			return
		}
		for (var n = 0, a = r.length; n < a; n++) {
			if (r[n] == e) {
				if (a == 1) {
					delete s[t]
				} else {
					r.splice(n, 1)
				}
				break
			}
		}
	};
	e.off = e.removeEventListener;
	e.removeAllEventListeners = function(t) {
		if (!t) {
			this._listeners = this._captureListeners = null
		} else {
			if (this._listeners) {
				delete this._listeners[t]
			}
			if (this._captureListeners) {
				delete this._captureListeners[t]
			}
		}
	};
	e.dispatchEvent = function(t) {
		if (typeof t == "string") {
			var e = this._listeners;
			if (!e || !e[t]) {
				return false
			}
			t = new createjs.Event(t)
		} else if (t.target && t.clone) {
			t = t.clone()
		}
		try {
			t.target = this
		} catch (i) {}
		if (!t.bubbles || !this.parent) {
			this._dispatchEvent(t, 2)
		} else {
			var s = this,
				r = [s];
			while (s.parent) {
				r.push(s = s.parent)
			}
			var n, a = r.length;
			for (n = a - 1; n >= 0 && !t.propagationStopped; n--) {
				r[n]._dispatchEvent(t, 1 + (n == 0))
			}
			for (n = 1; n < a && !t.propagationStopped; n++) {
				r[n]._dispatchEvent(t, 3)
			}
		}
		return t.defaultPrevented
	};
	e.hasEventListener = function(t) {
		var e = this._listeners,
			i = this._captureListeners;
		return !!(e && e[t] || i && i[t])
	};
	e.willTrigger = function(t) {
		var e = this;
		while (e) {
			if (e.hasEventListener(t)) {
				return true
			}
			e = e.parent
		}
		return false
	};
	e.toString = function() {
		return "[EventDispatcher]"
	};
	e._dispatchEvent = function(t, e) {
		var i, s = e == 1 ? this._captureListeners : this._listeners;
		if (t && s) {
			var r = s[t.type];
			if (!r || !(i = r.length)) {
				return
			}
			try {
				t.currentTarget = this
			} catch (n) {}
			try {
				t.eventPhase = e
			} catch (n) {}
			t.removed = false;
			r = r.slice();
			for (var a = 0; a < i && !t.immediatePropagationStopped; a++) {
				var o = r[a];
				if (o.handleEvent) {
					o.handleEvent(t)
				} else {
					o(t)
				}
				if (t.removed) {
					this.off(t.type, o, e == 1);
					t.removed = false
				}
			}
		}
	};
	createjs.EventDispatcher = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.type = t;
		this.target = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.bubbles = !! e;
		this.cancelable = !! i;
		this.timeStamp = (new Date).getTime();
		this.defaultPrevented = false;
		this.propagationStopped = false;
		this.immediatePropagationStopped = false;
		this.removed = false
	}
	var e = t.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && true
	};
	e.stopPropagation = function() {
		this.propagationStopped = true
	};
	e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true
	};
	e.remove = function() {
		this.removed = true
	};
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable)
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	};
	createjs.Event = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.Event_constructor("error");
		this.title = t;
		this.message = e;
		this.data = i
	}
	var e = createjs.extend(t, createjs.Event);
	e.clone = function() {
		return new createjs.ErrorEvent(this.title, this.message, this.data)
	};
	createjs.ErrorEvent = createjs.promote(t, "Event")
})();
this.createjs = this.createjs || {};
(function(t) {
	"use strict";

	function e(t, e) {
		this.Event_constructor("progress");
		this.loaded = t;
		this.total = e == null ? 1 : e;
		this.progress = e == 0 ? 0 : this.loaded / this.total
	}
	var i = createjs.extend(e, createjs.Event);
	i.clone = function() {
		return new createjs.ProgressEvent(this.loaded, this.total)
	};
	createjs.ProgressEvent = createjs.promote(e, "Event")
})(window);
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.src = null;
		this.type = null;
		this.id = null;
		this.maintainOrder = false;
		this.callback = null;
		this.data = null;
		this.method = createjs.LoadItem.GET;
		this.values = null;
		this.headers = null;
		this.withCredentials = false;
		this.mimeType = null;
		this.crossOrigin = "Anonymous";
		this.loadTimeout = 8e3
	}
	var e = t.prototype = {};
	var i = t;
	i.create = function(e) {
		if (typeof e == "string") {
			var s = new t;
			s.src = e;
			return s
		} else if (e instanceof i) {
			return e
		} else if (e instanceof Object) {
			return e
		} else {
			throw new Error("Type not recognized.")
		}
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	createjs.LoadItem = i
})();
(function() {
	var t = {};
	t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i;
	t.RELATIVE_PATT = /^[./]*?\//i;
	t.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;
	t.parseURI = function(e) {
		var i = {
			absolute: false,
			relative: false
		};
		if (e == null) {
			return i
		}
		var s = e.indexOf("?");
		if (s > -1) {
			e = e.substr(0, s)
		}
		var r;
		if (t.ABSOLUTE_PATT.test(e)) {
			i.absolute = true
		} else if (t.RELATIVE_PATT.test(e)) {
			i.relative = true
		}
		if (r = e.match(t.EXTENSION_PATT)) {
			i.extension = r[1].toLowerCase()
		}
		return i
	};
	t.formatQueryString = function(t, e) {
		if (t == null) {
			throw new Error("You must specify data.")
		}
		var i = [];
		for (var s in t) {
			i.push(s + "=" + escape(t[s]))
		}
		if (e) {
			i = i.concat(e)
		}
		return i.join("&")
	};
	t.buildPath = function(t, e) {
		if (e == null) {
			return t
		}
		var i = [];
		var s = t.indexOf("?");
		if (s != -1) {
			var r = t.slice(s + 1);
			i = i.concat(r.split("&"))
		}
		if (s != -1) {
			return t.slice(0, s) + "?" + this._formatQueryString(e, i)
		} else {
			return t + "?" + this._formatQueryString(e, i)
		}
	};
	t.isCrossDomain = function(t) {
		var e = document.createElement("a");
		e.href = t.src;
		var i = document.createElement("a");
		i.href = location.href;
		var s = e.hostname != "" && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
		return s
	};
	t.isLocal = function(t) {
		var e = document.createElement("a");
		e.href = t.src;
		return e.hostname == "" && e.protocol == "file:"
	};
	t.isBinary = function(t) {
		switch (t) {
		case createjs.AbstractLoader.IMAGE:
		case createjs.AbstractLoader.BINARY:
			return true;
		default:
			return false
		}
	};
	t.isImageTag = function(t) {
		return t instanceof HTMLImageElement
	};
	t.isAudioTag = function(t) {
		if (window.HTMLAudioElement) {
			return t instanceof HTMLAudioElement
		} else {
			return false
		}
	};
	t.isVideoTag = function(t) {
		if (window.HTMLVideoElement) {
			return t instanceof HTMLVideoElement
		} else {
			false
		}
	};
	t.isText = function(t) {
		switch (t) {
		case createjs.AbstractLoader.TEXT:
		case createjs.AbstractLoader.JSON:
		case createjs.AbstractLoader.MANIFEST:
		case createjs.AbstractLoader.XML:
		case createjs.AbstractLoader.CSS:
		case createjs.AbstractLoader.SVG:
		case createjs.AbstractLoader.JAVASCRIPT:
			return true;
		default:
			return false
		}
	};
	t.getTypeByExtension = function(t) {
		if (t == null) {
			return createjs.AbstractLoader.TEXT
		}
		switch (t.toLowerCase()) {
		case "jpeg":
		case "jpg":
		case "gif":
		case "png":
		case "webp":
		case "bmp":
			return createjs.AbstractLoader.IMAGE;
		case "ogg":
		case "mp3":
		case "webm":
			return createjs.AbstractLoader.SOUND;
		case "mp4":
		case "webm":
		case "ts":
			return createjs.AbstractLoader.VIDEO;
		case "json":
			return createjs.AbstractLoader.JSON;
		case "xml":
			return createjs.AbstractLoader.XML;
		case "css":
			return createjs.AbstractLoader.CSS;
		case "js":
			return createjs.AbstractLoader.JAVASCRIPT;
		case "svg":
			return createjs.AbstractLoader.SVG;
		default:
			return createjs.AbstractLoader.TEXT
		}
	};
	createjs.RequestUtils = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.EventDispatcher_constructor();
		this.loaded = false;
		this.canceled = false;
		this.progress = 0;
		this.type = i;
		this.resultFormatter = null;
		if (t) {
			this._item = createjs.LoadItem.create(t)
		} else {
			this._item = null
		}
		this._preferXHR = e;
		this._result = null;
		this._rawResult = null;
		this._loadedItems = null;
		this._tagSrcAttribute = null;
		this._tag = null
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	var i = t;
	i.POST = "POST";
	i.GET = "GET";
	i.BINARY = "binary";
	i.CSS = "css";
	i.IMAGE = "image";
	i.JAVASCRIPT = "javascript";
	i.JSON = "json";
	i.JSONP = "jsonp";
	i.MANIFEST = "manifest";
	i.SOUND = "sound";
	i.VIDEO = "video";
	i.SPRITESHEET = "spritesheet";
	i.SVG = "svg";
	i.TEXT = "text";
	i.XML = "xml";
	e.getItem = function() {
		return this._item
	};
	e.getResult = function(t) {
		return t ? this._rawResult : this._result
	};
	e.getTag = function() {
		return this._tag
	};
	e.setTag = function(t) {
		this._tag = t
	};
	e.load = function() {
		this._createRequest();
		this._request.on("complete", this, this);
		this._request.on("progress", this, this);
		this._request.on("loadStart", this, this);
		this._request.on("abort", this, this);
		this._request.on("timeout", this, this);
		this._request.on("error", this, this);
		var t = new createjs.Event("initialize");
		t.loader = this._request;
		this.dispatchEvent(t);
		this._request.load()
	};
	e.cancel = function() {
		this.canceled = true;
		this.destroy()
	};
	e.destroy = function() {
		if (this._request) {
			this._request.removeAllEventListeners();
			this._request.destroy()
		}
		this._request = null;
		this._item = null;
		this._rawResult = null;
		this._result = null;
		this._loadItems = null;
		this.removeAllEventListeners()
	};
	e.getLoadedItems = function() {
		return this._loadedItems
	};
	e._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
		} else {
			this._request = new createjs.XHRRequest(this._item)
		}
	};
	e._createTag = function(t) {
		return null
	};
	e._sendLoadStart = function() {
		if (this._isCanceled()) {
			return
		}
		this.dispatchEvent("loadstart")
	};
	e._sendProgress = function(t) {
		if (this._isCanceled()) {
			return
		}
		var e = null;
		if (typeof t == "number") {
			this.progress = t;
			e = new createjs.ProgressEvent(this.progress)
		} else {
			e = t;
			this.progress = t.loaded / t.total;
			e.progress = this.progress;
			if (isNaN(this.progress) || this.progress == Infinity) {
				this.progress = 0
			}
		}
		this.hasEventListener("progress") && this.dispatchEvent(e)
	};
	e._sendComplete = function() {
		if (this._isCanceled()) {
			return
		}
		this.loaded = true;
		var t = new createjs.Event("complete");
		t.rawResult = this._rawResult;
		if (this._result != null) {
			t.result = this._result
		}
		this.dispatchEvent(t)
	};
	e._sendError = function(t) {
		if (this._isCanceled() || !this.hasEventListener("error")) {
			return
		}
		if (t == null) {
			t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")
		}
		this.dispatchEvent(t)
	};
	e._isCanceled = function() {
		if (window.createjs == null || this.canceled) {
			return true
		}
		return false
	};
	e.resultFormatter = null;
	e.handleEvent = function(t) {
		switch (t.type) {
		case "complete":
			this._rawResult = t.target._response;
			var e = this.resultFormatter && this.resultFormatter(this);
			var i = this;
			if (e instanceof Function) {
				e(function(t) {
					i._result = t;
					i._sendComplete()
				})
			} else {
				this._result = e || this._rawResult;
				this._sendComplete()
			}
			break;
		case "progress":
			this._sendProgress(t);
			break;
		case "error":
			this._sendError(t);
			break;
		case "loadstart":
			this._sendLoadStart();
			break;
		case "abort":
		case "timeout":
			if (!this._isCanceled()) {
				this.dispatchEvent(t.type)
			}
			break
		}
	};
	e.buildPath = function(t, e) {
		return createjs.RequestUtils.buildPath(t, e)
	};
	e.toString = function() {
		return "[PreloadJS AbstractLoader]"
	};
	createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractLoader_constructor(t, e, i);
		this.resultFormatter = this._formatResult;
		this._tagSrcAttribute = "src"
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	e.load = function() {
		if (!this._tag) {
			this._tag = this._createTag(this._item.src)
		}
		this._tag.preload = "auto";
		this._tag.load();
		this.AbstractLoader_load()
	};
	e._createTag = function() {};
	e._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
		} else {
			this._request = new createjs.XHRRequest(this._item)
		}
	};
	e._formatResult = function(t) {
		this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
		this._tag.onstalled = null;
		if (this._preferXHR) {
			t.getTag().src = t.getResult(true)
		}
		return t.getTag()
	};
	createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = function(t) {
			this._item = t
		};
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.load = function() {};
	e.destroy = function() {};
	e.cancel = function() {};
	createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractRequest_constructor(t);
		this._tag = e;
		this._tagSrcAttribute = i;
		this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
		this._addedToDOM = false;
		this._startTagVisibility = null
	}
	var e = createjs.extend(t, createjs.AbstractRequest);
	e.load = function() {
		if (this._tag.parentNode == null) {
			window.document.body.appendChild(this._tag);
			this._addedToDOM = true
		}
		this._tag.onload = createjs.proxy(this._handleTagComplete, this);
		this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
		var t = new createjs.Event("initialize");
		t.loader = this._tag;
		this.dispatchEvent(t);
		this._hideTag();
		this._tag[this._tagSrcAttribute] = this._item.src
	};
	e.destroy = function() {
		this._clean();
		this._tag = null;
		this.AbstractRequest_destroy()
	};
	e._handleReadyStateChange = function() {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		if (t.readyState == "loaded" || t.readyState == "complete") {
			this._handleTagComplete()
		}
	};
	e._handleTagComplete = function() {
		this._rawResult = this._tag;
		this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
		this._clean();
		this._showTag();
		this.dispatchEvent("complete")
	};
	e._clean = function() {
		this._tag.onload = null;
		this._tag.onreadystatechange = null;
		if (this._addedToDOM && this._tag.parentNode != null) {
			this._tag.parentNode.removeChild(this._tag)
		}
	};
	e._hideTag = function() {
		this._startTagVisibility = this._tag.style.visibility;
		this._tag.style.visibility = "hidden"
	};
	e._showTag = function() {
		this._tag.style.visibility = this._startTagVisibility
	};
	e._handleStalled = function() {};
	createjs.TagRequest = createjs.promote(t, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.AbstractRequest_constructor(t);
		this._tag = e;
		this._tagSrcAttribute = i;
		this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
	}
	var e = createjs.extend(t, createjs.TagRequest);
	var i = t;
	e.load = function() {
		this._tag.onstalled = createjs.proxy(this._handleStalled, this);
		this._tag.onprogress = createjs.proxy(this._handleProgress, this);
		this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, false);
		this.TagRequest_load()
	};
	e._handleReadyStateChange = function() {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		if (t.readyState == "loaded" || t.readyState == "complete") {
			this._handleTagComplete()
		}
	};
	e._handleStalled = function() {};
	e._handleProgress = function(t) {
		if (!t || t.loaded > 0 && t.total == 0) {
			return
		}
		var e = new createjs.ProgressEvent(t.loaded, t.total);
		this.dispatchEvent(e)
	};
	e._clean = function() {
		this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
		this._tag.onstalled = null;
		this._tag.onprogress = null;
		this.TagRequest__clean()
	};
	createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractRequest_constructor(t);
		this._request = null;
		this._loadTimeout = null;
		this._xhrLevel = 1;
		this._response = null;
		this._rawResponse = null;
		this._canceled = false;
		this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
		this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
		this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
		this._handleErrorProxy = createjs.proxy(this._handleError, this);
		this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
		this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
		this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
		if (!this._createXHR(t)) {}
	}
	var e = createjs.extend(t, createjs.AbstractRequest);
	t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
	e.getResult = function(t) {
		if (t && this._rawResponse) {
			return this._rawResponse
		}
		return this._response
	};
	e.cancel = function() {
		this.canceled = true;
		this._clean();
		this._request.abort()
	};
	e.load = function() {
		if (this._request == null) {
			this._handleError();
			return
		}
		this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
		this._request.addEventListener("progress", this._handleProgressProxy, false);
		this._request.addEventListener("abort", this._handleAbortProxy, false);
		this._request.addEventListener("error", this._handleErrorProxy, false);
		this._request.addEventListener("timeout", this._handleTimeoutProxy, false);
		this._request.addEventListener("load", this._handleLoadProxy, false);
		this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
		if (this._xhrLevel == 1) {
			this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout)
		}
		try {
			if (!this._item.values || this._item.method == createjs.AbstractLoader.GET) {
				this._request.send()
			} else if (this._item.method == createjs.AbstractLoader.POST) {
				this._request.send(createjs.RequestUtils.formatQueryString(this._item.values))
			}
		} catch (t) {
			this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
		}
	};
	e.setResponseType = function(t) {
		this._request.responseType = t
	};
	e.getAllResponseHeaders = function() {
		if (this._request.getAllResponseHeaders instanceof Function) {
			return this._request.getAllResponseHeaders()
		} else {
			return null
		}
	};
	e.getResponseHeader = function(t) {
		if (this._request.getResponseHeader instanceof Function) {
			return this._request.getResponseHeader(t)
		} else {
			return null
		}
	};
	e._handleProgress = function(t) {
		if (!t || t.loaded > 0 && t.total == 0) {
			return
		}
		var e = new createjs.ProgressEvent(t.loaded, t.total);

		this.dispatchEvent(e)
	};
	e._handleLoadStart = function(t) {
		clearTimeout(this._loadTimeout);
		this.dispatchEvent("loadstart")
	};
	e._handleAbort = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
	};
	e._handleError = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent(t.message))
	};
	e._handleReadyStateChange = function(t) {
		if (this._request.readyState == 4) {
			this._handleLoad()
		}
	};
	e._handleLoad = function(t) {
		if (this.loaded) {
			return
		}
		this.loaded = true;
		var e = this._checkError();
		if (e) {
			this._handleError(e);
			return
		}
		this._response = this._getResponse();
		this._clean();
		this.dispatchEvent(new createjs.Event("complete"))
	};
	e._handleTimeout = function(t) {
		this._clean();
		this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
	};
	e._checkError = function() {
		var t = parseInt(this._request.status);
		switch (t) {
		case 404:
		case 0:
			return new Error(t)
		}
		return null
	};
	e._getResponse = function() {
		if (this._response != null) {
			return this._response
		}
		if (this._request.response != null) {
			return this._request.response
		}
		try {
			if (this._request.responseText != null) {
				return this._request.responseText
			}
		} catch (t) {}
		try {
			if (this._request.responseXML != null) {
				return this._request.responseXML
			}
		} catch (t) {}
		return null
	};
	e._createXHR = function(t) {
		var e = createjs.RequestUtils.isCrossDomain(t);
		var i = {};
		var r = null;
		if (window.XMLHttpRequest) {
			r = new XMLHttpRequest;
			if (e && r.withCredentials === undefined && window.XDomainRequest) {
				r = new XDomainRequest
			}
		} else {
			for (var n = 0, a = s.ACTIVEX_VERSIONS.length; n < a; n++) {
				var o = s.ACTIVEX_VERSIONS[n];
				try {
					r = new ActiveXObject(axVersions);
					break
				} catch (h) {}
			}
			if (r == null) {
				return false
			}
		}
		if (t.mimeType && r.overrideMimeType) {
			r.overrideMimeType(t.mimeType)
		}
		this._xhrLevel = typeof r.responseType === "string" ? 2 : 1;
		var c = null;
		if (t.method == createjs.AbstractLoader.GET) {
			c = createjs.RequestUtils.buildPath(t.src, t.values)
		} else {
			c = t.src
		}
		r.open(t.method || createjs.AbstractLoader.GET, c, true);
		if (e && r instanceof XMLHttpRequest && this._xhrLevel == 1) {
			i["Origin"] = location.origin
		}
		if (t.values && t.method == createjs.AbstractLoader.POST) {
			i["Content-Type"] = "application/x-www-form-urlencoded"
		}
		if (!e && !i["X-Requested-With"]) {
			i["X-Requested-With"] = "XMLHttpRequest"
		}
		if (t.headers) {
			for (var u in t.headers) {
				i[u] = t.headers[u]
			}
		}
		for (u in i) {
			r.setRequestHeader(u, i[u])
		}
		if (r instanceof XMLHttpRequest && t.withCredentials !== undefined) {
			r.withCredentials = t.withCredentials
		}
		this._request = r;
		return true
	};
	e._clean = function() {
		clearTimeout(this._loadTimeout);
		this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
		this._request.removeEventListener("progress", this._handleProgressProxy);
		this._request.removeEventListener("abort", this._handleAbortProxy);
		this._request.removeEventListener("error", this._handleErrorProxy);
		this._request.removeEventListener("timeout", this._handleTimeoutProxy);
		this._request.removeEventListener("load", this._handleLoadProxy);
		this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
	};
	e.toString = function() {
		return "[PreloadJS XHRRequest]"
	};
	createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e) {
		this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND);
		if (createjs.RequestUtils.isAudioTag(t)) {
			this._tag = t
		} else if (createjs.RequestUtils.isAudioTag(t.src)) {
			this._tag = t
		} else if (createjs.RequestUtils.isAudioTag(t.tag)) {
			this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src
		}
		if (this._tag != null) {
			this._preferXHR = false
		}
	}
	var e = createjs.extend(t, createjs.AbstractMediaLoader);
	var i = t;
	i.canLoadItem = function(t) {
		return t.type == createjs.AbstractLoader.SOUND
	};
	e._createTag = function(t) {
		var e = document.createElement("audio");
		e.autoplay = false;
		e.preload = "none";
		e.src = t;
		return e
	};
	createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "Sound cannot be instantiated"
	}
	var e = t;
	e.INTERRUPT_ANY = "any";
	e.INTERRUPT_EARLY = "early";
	e.INTERRUPT_LATE = "late";
	e.INTERRUPT_NONE = "none";
	e.PLAY_INITED = "playInited";
	e.PLAY_SUCCEEDED = "playSucceeded";
	e.PLAY_INTERRUPTED = "playInterrupted";
	e.PLAY_FINISHED = "playFinished";
	e.PLAY_FAILED = "playFailed";
	e.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
	e.EXTENSION_MAP = {
		m4a: "mp4"
	};
	e.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/;
	e.defaultInterruptBehavior = e.INTERRUPT_NONE;
	e.alternateExtensions = [];
	e.activePlugin = null;
	e._pluginsRegistered = false;
	e._lastID = 0;
	e._masterVolume = 1;
	e._masterMute = false;
	e._instances = [];
	e._idHash = {};
	e._preloadHash = {};
	e.addEventListener = null;
	e.removeEventListener = null;
	e.removeAllEventListeners = null;
	e.dispatchEvent = null;
	e.hasEventListener = null;
	e._listeners = null;
	createjs.EventDispatcher.initialize(e);
	e.getPreloadHandlers = function() {
		return {
			callback: createjs.proxy(e.initLoad, e),
			types: ["sound"],
			extensions: e.SUPPORTED_EXTENSIONS
		}
	};
	e._handleLoadComplete = function(t) {
		var i = t.target.getItem().src;
		if (!e._preloadHash[i]) {
			return
		}
		for (var s = 0, r = e._preloadHash[i].length; s < r; s++) {
			var n = e._preloadHash[i][s];
			e._preloadHash[i][s] = true;
			if (!e.hasEventListener("fileload")) {
				continue
			}
			var t = new createjs.Event("fileload");
			t.src = n.src;
			t.id = n.id;
			t.data = n.data;
			t.sprite = n.sprite;
			e.dispatchEvent(t)
		}
	};
	e._handleLoadError = function(t) {
		var i = t.target.getItem().src;
		if (!e._preloadHash[i]) {
			return
		}
		for (var s = 0, r = e._preloadHash[i].length; s < r; s++) {
			var n = e._preloadHash[i][s];
			e._preloadHash[i][s] = false;
			if (!e.hasEventListener("fileerror")) {
				continue
			}
			var t = new createjs.Event("fileerror");
			t.src = n.src;
			t.id = n.id;
			t.data = n.data;
			t.sprite = n.sprite;
			e.dispatchEvent(t)
		}
	};
	e._registerPlugin = function(t) {
		if (t.isSupported()) {
			e.activePlugin = new t;
			return true
		}
		return false
	};
	e.registerPlugins = function(t) {
		e._pluginsRegistered = true;
		for (var i = 0, s = t.length; i < s; i++) {
			if (e._registerPlugin(t[i])) {
				return true
			}
		}
		return false
	};
	e.initializeDefaultPlugins = function() {
		if (e.activePlugin != null) {
			return true
		}
		if (e._pluginsRegistered) {
			return false
		}
		if (e.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])) {
			return true
		}
		return false
	};
	e.isReady = function() {
		return e.activePlugin != null
	};
	e.getCapabilities = function() {
		if (e.activePlugin == null) {
			return null
		}
		return e.activePlugin._capabilities
	};
	e.getCapability = function(t) {
		if (e.activePlugin == null) {
			return null
		}
		return e.activePlugin._capabilities[t]
	};
	e.initLoad = function(t) {
		return e._registerSound(t)
	};
	e._registerSound = function(t) {
		if (!e.initializeDefaultPlugins()) {
			return false
		}
		var s = e._parsePath(t.src);
		if (s == null) {
			return false
		}
		t.src = s.src;
		t.type = "sound";
		var r = t.data;
		var n = e.activePlugin.defaultNumChannels || null;
		if (r != null) {
			if (!isNaN(r.channels)) {
				n = parseInt(r.channels)
			} else if (!isNaN(r)) {
				n = parseInt(r)
			}
			if (r.audioSprite) {
				var a;
				for (var o = r.audioSprite.length; o--;) {
					a = r.audioSprite[o];
					e._idHash[a.id] = {
						src: t.src,
						startTime: parseInt(a.startTime),
						duration: parseInt(a.duration)
					}
				}
			}
		}
		if (t.id != null) {
			e._idHash[t.id] = {
				src: t.src
			}
		}
		var h = e.activePlugin.register(t, n);
		i.create(t.src, n);
		if (r == null || !isNaN(r)) {
			t.data = n || i.maxPerChannel()
		} else {
			t.data.channels = n || i.maxPerChannel()
		}
		if (h.type) {
			t.type = h.type
		}
		return h
	};
	e.registerSound = function(t, i, s, r) {
		var n = {
			src: t,
			id: i,
			data: s
		};
		if (t instanceof Object) {
			r = i;
			n = t
		}
		n = createjs.LoadItem.create(n);
		if (r != null) {
			n.src = r + t
		}
		var a = e._registerSound(n);
		if (!a) {
			return false
		}
		if (!e._preloadHash[n.src]) {
			e._preloadHash[n.src] = []
		}
		e._preloadHash[n.src].push(n);
		if (e._preloadHash[n.src].length == 1) {
			a.on("complete", createjs.proxy(this._handleLoadComplete, this));
			a.on("error", createjs.proxy(this._handleLoadError, this));
			e.activePlugin.preload(a)
		} else {
			if (e._preloadHash[n.src][0] == true) {
				return true
			}
		}
		return n
	};
	e.registerSounds = function(t, e) {
		var i = [];
		if (t.path) {
			if (!e) {
				e = t.path
			} else {
				e = e + t.path
			}
		}
		for (var s = 0, r = t.length; s < r; s++) {
			i[s] = createjs.Sound.registerSound(t[s].src, t[s].id, t[s].data, e)
		}
		return i
	};
	e.registerManifest = function(t, e) {
		try {
			console.log("createjs.Sound.registerManifest is deprecated, please use createjs.Sound.registerSounds.")
		} catch (i) {}
		return this.registerSounds(t, e)
	};
	e.removeSound = function(t, s) {
		if (e.activePlugin == null) {
			return false
		}
		if (t instanceof Object) {
			t = t.src
		}
		t = e._getSrcById(t).src;
		if (s != null) {
			t = s + t
		}
		var r = e._parsePath(t);
		if (r == null) {
			return false
		}
		t = r.src;
		for (var n in e._idHash) {
			if (e._idHash[n].src == t) {
				delete e._idHash[n]
			}
		}
		i.removeSrc(t);
		delete e._preloadHash[t];
		e.activePlugin.removeSound(t);
		return true
	};
	e.removeSounds = function(t, e) {
		var i = [];
		if (t.path) {
			if (!e) {
				e = t.path
			} else {
				e = e + t.path
			}
		}
		for (var s = 0, r = t.length; s < r; s++) {
			i[s] = createjs.Sound.removeSound(t[s].src, e)
		}
		return i
	};
	e.removeManifest = function(t, i) {
		try {
			console.log("createjs.Sound.removeManifest is deprecated, please use createjs.Sound.removeSounds.")
		} catch (s) {}
		return e.removeSounds(t, i)
	};
	e.removeAllSounds = function() {
		e._idHash = {};
		e._preloadHash = {};
		i.removeAll();
		if (e.activePlugin) {
			e.activePlugin.removeAllSounds()
		}
	};
	e.loadComplete = function(t) {
		if (!e.isReady()) {
			return false
		}
		var i = e._parsePath(t);
		if (i) {
			t = e._getSrcById(i.src).src
		} else {
			t = e._getSrcById(t).src
		}
		return e._preloadHash[t][0] == true
	};
	e._parsePath = function(t) {
		if (typeof t != "string") {
			t = t.toString()
		}
		var i = t.match(e.FILE_PATTERN);
		if (i == null) {
			return false
		}
		var s = i[4];
		var r = i[5];
		var n = e.getCapabilities();
		var a = 0;
		while (!n[r]) {
			r = e.alternateExtensions[a++];
			if (a > e.alternateExtensions.length) {
				return null
			}
		}
		t = t.replace("." + i[5], "." + r);
		var o = {
			name: s,
			src: t,
			extension: r
		};
		return o
	};
	e.play = function(t, i, s, r, n, a, o, h, c) {
		if (i instanceof Object) {
			s = i.delay;
			r = i.offset;
			n = i.loop;
			a = i.volume;
			o = i.pan;
			h = i.startTime;
			c = i.duration;
			i = i.interrupt
		}
		var u = e.createInstance(t, h, c);
		var l = e._playInstance(u, i, s, r, n, a, o);
		if (!l) {
			u._playFailed()
		}
		return u
	};
	e.createInstance = function(t, s, r) {
		if (!e.initializeDefaultPlugins()) {
			return new createjs.DefaultSoundInstance(t, s, r)
		}
		t = e._getSrcById(t);
		var n = e._parsePath(t.src);
		var a = null;
		if (n != null && n.src != null) {
			i.create(n.src);
			if (s == null) {
				s = t.startTime
			}
			a = e.activePlugin.create(n.src, s, r || t.duration)
		} else {
			a = new createjs.DefaultSoundInstance(t, s, r)
		}
		a.uniqueId = e._lastID++;
		return a
	};
	e.setVolume = function(t) {
		if (Number(t) == null) {
			return false
		}
		t = Math.max(0, Math.min(1, t));
		e._masterVolume = t;
		if (!this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t)) {
			var i = this._instances;
			for (var s = 0, r = i.length; s < r; s++) {
				i[s].setMasterVolume(t)
			}
		}
	};
	e.getVolume = function() {
		return e._masterVolume
	};
	e.setMute = function(t) {
		if (t == null) {
			return false
		}
		this._masterMute = t;
		if (!this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)) {
			var e = this._instances;
			for (var i = 0, s = e.length; i < s; i++) {
				e[i].setMasterMute(t)
			}
		}
		return true
	};
	e.getMute = function() {
		return this._masterMute
	};
	e.stop = function() {
		var t = this._instances;
		for (var e = t.length; e--;) {
			t[e].stop()
		}
	};
	e._playInstance = function(t, i, s, r, n, a, o) {
		if (i instanceof Object) {
			s = i.delay;
			r = i.offset;
			n = i.loop;
			a = i.volume;
			o = i.pan;
			i = i.interrupt
		}
		i = i || e.defaultInterruptBehavior;
		if (s == null) {
			s = 0
		}
		if (r == null) {
			r = t.getPosition()
		}
		if (n == null) {
			n = t.loop
		}
		if (a == null) {
			a = t.volume
		}
		if (o == null) {
			o = t.pan
		}
		if (s == 0) {
			var h = e._beginPlaying(t, i, r, n, a, o);
			if (!h) {
				return false
			}
		} else {
			var c = setTimeout(function() {
				e._beginPlaying(t, i, r, n, a, o)
			}, s);
			t.delayTimeoutId = c
		}
		this._instances.push(t);
		return true
	};
	e._beginPlaying = function(t, e, s, r, n, a) {
		if (!i.add(t, e)) {
			return false
		}
		var o = t._beginPlaying(s, r, n, a);
		if (!o) {
			var h = createjs.indexOf(this._instances, t);
			if (h > -1) {
				this._instances.splice(h, 1)
			}
			return false
		}
		return true
	};
	e._getSrcById = function(t) {
		return e._idHash[t] || {
			src: t
		}
	};
	e._playFinished = function(t) {
		i.remove(t);
		var e = createjs.indexOf(this._instances, t);
		if (e > -1) {
			this._instances.splice(e, 1)
		}
	};
	createjs.Sound = t;

	function i(t, e) {
		this.init(t, e)
	}
	i.channels = {};
	i.create = function(t, e) {
		var s = i.get(t);
		if (s == null) {
			i.channels[t] = new i(t, e);
			return true
		}
		return false
	};
	i.removeSrc = function(t) {
		var e = i.get(t);
		if (e == null) {
			return false
		}
		e._removeAll();
		delete i.channels[t];
		return true
	};
	i.removeAll = function() {
		for (var t in i.channels) {
			i.channels[t]._removeAll()
		}
		i.channels = {}
	};
	i.add = function(t, e) {
		var s = i.get(t.src);
		if (s == null) {
			return false
		}
		return s._add(t, e)
	};
	i.remove = function(t) {
		var e = i.get(t.src);
		if (e == null) {
			return false
		}
		e._remove(t);
		return true
	};
	i.maxPerChannel = function() {
		return s.maxDefault
	};
	i.get = function(t) {
		return i.channels[t]
	};
	var s = i.prototype;
	s.constructor = i;
	s.src = null;
	s.max = null;
	s.maxDefault = 100;
	s.length = 0;
	s.init = function(t, e) {
		this.src = t;
		this.max = e || this.maxDefault;
		if (this.max == -1) {
			this.max = this.maxDefault
		}
		this._instances = []
	};
	s._get = function(t) {
		return this._instances[t]
	};
	s._add = function(t, e) {
		if (!this._getSlot(e, t)) {
			return false
		}
		this._instances.push(t);
		this.length++;
		return true
	};
	s._remove = function(t) {
		var e = createjs.indexOf(this._instances, t);
		if (e == -1) {
			return false
		}
		this._instances.splice(e, 1);
		this.length--;
		return true
	};
	s._removeAll = function() {
		for (var t = this.length - 1; t >= 0; t--) {
			this._instances[t].stop()
		}
	};
	s._getSlot = function(e, i) {
		var s, r;
		if (e != t.INTERRUPT_NONE) {
			r = this._get(0);
			if (r == null) {
				return true
			}
		}
		for (var n = 0, a = this.max; n < a; n++) {
			s = this._get(n);
			if (s == null) {
				return true
			}
			if (s.playState == t.PLAY_FINISHED || s.playState == t.PLAY_INTERRUPTED || s.playState == t.PLAY_FAILED) {
				r = s;
				break
			}
			if (e == t.INTERRUPT_NONE) {
				continue
			}
			if (e == t.INTERRUPT_EARLY && s.getPosition() < r.getPosition() || e == t.INTERRUPT_LATE && s.getPosition() > r.getPosition()) {
				r = s
			}
		}
		if (r != null) {
			r._interrupt();
			this._remove(r);
			return true
		}
		return false
	};
	s.toString = function() {
		return "[Sound SoundChannel]"
	}
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = function(t, e, i, s) {
			this.EventDispatcher_constructor();
			this.src = t;
			this.uniqueId = -1;
			this.playState = null;
			this.delayTimeoutId = null;
			this._startTime = Math.max(0, e || 0);
			this._volume = 1;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "volume", {
					get: this.getVolume,
					set: this.setVolume
				})
			}
			this._pan = 0;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "pan", {
					get: this.getPan,
					set: this.setPan
				})
			}
			this._duration = Math.max(0, i || 0);
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "duration", {
					get: this.getDuration,
					set: this.setDuration
				})
			}
			this._playbackResource = null;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "playbackResource", {
					get: this.getPlaybackResource,
					set: this.setPlaybackResource
				})
			}
			if (s !== false && s !== true) {
				this.setPlaybackResource(s)
			}
			this._position = 0;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "position", {
					get: this.getPosition,
					set: this.setPosition
				})
			}
			this._loop = 0;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "loop", {
					get: this.getLoop,
					set: this.setLoop
				})
			}
			this._muted = false;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "muted", {
					get: this.getMuted,
					set: this.setMuted
				})
			}
			this._paused = false;
			if (createjs.definePropertySupported) {
				Object.defineProperty(this, "paused", {
					get: this.getPaused,
					set: this.setPaused
				})
			}
		};
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.play = function(t, e, i, s, r, n) {
		if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
			if (t instanceof Object) {
				i = t.offset;
				s = t.loop;
				r = t.volume;
				n = t.pan
			}
			if (i != null) {
				this.setPosition(i)
			}
			if (s != null) {
				this.setLoop(s)
			}
			if (r != null) {
				this.setVolume(r)
			}
			if (n != null) {
				this.setPan(n)
			}
			if (this._paused) {
				this.setPaused(false)
			}
			return
		}
		this._cleanUp();
		createjs.Sound._playInstance(this, t, e, i, s, r, n);
		return this
	};
	e.pause = function() {
		if (this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED) {
			return false
		}
		this.setPaused(true);
		return true
	};
	e.resume = function() {
		if (!this._paused) {
			return false
		}
		this.setPaused(false);
		return true
	};
	e.stop = function() {
		this._position = 0;
		this._paused = false;
		this._handleStop();
		this._cleanUp();
		this.playState = createjs.Sound.PLAY_FINISHED;
		return this
	};
	e.destroy = function() {
		this._cleanUp();
		this.src = null;
		this.playbackResource = null;
		this.removeAllEventListeners()
	};
	e.toString = function() {
		return "[AbstractSoundInstance]"
	};
	e.getPaused = function() {
		return this._paused
	};
	e.setPaused = function(t) {
		if (t !== true && t !== false || this._paused == t) {
			return
		}
		if (t == true && this.playState != createjs.Sound.PLAY_SUCCEEDED) {
			return
		}
		this._paused = t;
		if (t) {
			this._pause()
		} else {
			this._resume()
		}
		clearTimeout(this.delayTimeoutId);
		return this
	};
	e.setVolume = function(t) {
		if (t == this._volume) {
			return this
		}
		this._volume = Math.max(0, Math.min(1, t));
		if (!this._muted) {
			this._updateVolume()
		}
		return this
	};
	e.getVolume = function() {
		return this._volume
	};
	e.setMute = function(t) {
		this.setMuted(t)
	};
	e.getMute = function() {
		return this._muted
	};
	e.setMuted = function(t) {
		if (t !== true && t !== false) {
			return
		}
		this._muted = t;
		this._updateVolume();
		return this
	};
	e.getMuted = function() {
		return this._muted
	};
	e.setPan = function(t) {
		if (t == this._pan) {
			return this
		}
		this._pan = Math.max(-1, Math.min(1, t));
		this._updatePan();
		return this
	};
	e.getPan = function() {
		return this._pan
	};
	e.getPosition = function() {
		if (!this._paused && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
			return this._calculateCurrentPosition()
		}
		return this._position
	};
	e.setPosition = function(t) {
		this._position = Math.max(0, t);
		if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
			this._updatePosition()
		}
		return this
	};
	e.getDuration = function() {
		return this._duration
	};
	e.setDuration = function(t) {
		if (t == this._duration) {
			return this
		}
		this._duration = Math.max(0, t || 0);
		this._updateDuration();
		return this
	};
	e.setPlaybackResource = function(t) {
		this._playbackResource = t;
		if (this._duration == 0) {
			this._setDurationFromSource()
		}
		return this
	};
	e.getPlaybackResource = function() {
		return this._playbackResource
	};
	e.getLoop = function() {
		return this._loop
	};
	e.setLoop = function(t) {
		if (this._playbackResource != null) {
			if (this._loop != 0 && t == 0) {
				this._removeLooping(t)
			}
			if (this._loop == 0 && t != 0) {
				this._addLooping(t)
			}
		}
		this._loop = t
	};
	e._sendEvent = function(t) {
		var e = new createjs.Event(t);
		this.dispatchEvent(e)
	};
	e._cleanUp = function() {
		clearTimeout(this.delayTimeoutId);
		this._handleCleanUp();
		this._paused = false;
		createjs.Sound._playFinished(this)
	};
	e._interrupt = function() {
		this._cleanUp();
		this.playState = createjs.Sound.PLAY_INTERRUPTED;
		this._sendEvent("interrupted")
	};
	e._beginPlaying = function(t, e, i, s) {
		this.setPosition(t);
		this.setLoop(e);
		this.setVolume(i);
		this.setPan(s);
		if (this._playbackResource != null && this._position < this._duration) {
			this._paused = false;
			this._handleSoundReady();
			this.playState = createjs.Sound.PLAY_SUCCEEDED;
			this._sendEvent("succeeded");
			return true
		} else {
			this._playFailed();
			return false
		}
	};
	e._playFailed = function() {
		this._cleanUp();
		this.playState = createjs.Sound.PLAY_FAILED;
		this._sendEvent("failed")
	};
	e._handleSoundComplete = function(t) {
		this._position = 0;
		if (this._loop != 0) {
			this._loop--;
			this._handleLoop();
			this._sendEvent("loop");
			return
		}
		this._cleanUp();
		this.playState = createjs.Sound.PLAY_FINISHED;
		this._sendEvent("complete")
	};
	e._handleSoundReady = function() {};
	e._updateVolume = function() {};
	e._updatePan = function() {};
	e._updateDuration = function() {};
	e._setDurationFromSource = function() {};
	e._calculateCurrentPosition = function() {};
	e._updatePosition = function() {};
	e._removeLooping = function() {};
	e._addLooping = function() {};
	e._pause = function() {};
	e._resume = function() {};
	e._handleStop = function() {};
	e._handleCleanUp = function() {};
	e._handleLoop = function() {};
	createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher");
	createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = function() {
			this._capabilities = null;
			this._loaders = {};
			this._audioSources = {};
			this._soundInstances = {};
			this._loaderClass;
			this._soundInstanceClass
		};
	var e = t.prototype;
	t._capabilities = null;
	t.isSupported = function() {
		return true
	};
	e.register = function(t, e) {
		this._audioSources[t.src] = true;
		this._soundInstances[t.src] = [];
		if (this._loaders[t.src]) {
			return this._loaders[t.src]
		}
		var i = new this._loaderClass(t);
		i.on("complete", createjs.proxy(this._handlePreloadComplete, this));
		this._loaders[t.src] = i;
		return i
	};
	e.preload = function(t) {
		t.on("error", createjs.proxy(this._handlePreloadError, this));
		t.load()
	};
	e.isPreloadStarted = function(t) {
		return this._audioSources[t] != null
	};
	e.isPreloadComplete = function(t) {
		return !(this._audioSources[t] == null || this._audioSources[t] == true)
	};
	e.removeSound = function(t) {
		if (!this._soundInstances[t]) {
			return
		}
		for (var e = this._soundInstances[t].length; e--;) {
			var i = this._soundInstances[t][e];
			i.destroy()
		}
		delete this._soundInstances[t];
		delete this._audioSources[t];
		if (this._loaders[t]) {
			this._loaders[t].destroy()
		}
		delete this._loaders[t]
	};
	e.removeAllSounds = function() {
		for (var t in this._audioSources) {
			this.removeSound(t)
		}
	};
	e.create = function(t, e, i) {
		if (!this.isPreloadStarted(t)) {
			this.preload(this.register(t))
		}
		var s = new this._soundInstanceClass(t, e, i, this._audioSources[t]);
		this._soundInstances[t].push(s);
		return s
	};
	e.setVolume = function(t) {
		this._volume = t;
		this._updateVolume();
		return true
	};
	e.getVolume = function() {
		return this._volume
	};
	e.setMute = function(t) {
		this._updateVolume();
		return true
	};
	e.toString = function() {
		return "[AbstractPlugin]"
	};
	e._handlePreloadComplete = function(t) {
		var e = t.target.getItem().src;
		this._audioSources[e] = t.result;
		for (var i = 0, s = this._soundInstances[e].length; i < s; i++) {
			var r = this._soundInstances[e][i];
			r.setPlaybackResource(this._audioSources[e])
		}
	};
	e._handlePreloadError = function(t) {};
	e._updateVolume = function() {};
	createjs.AbstractPlugin = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.SOUND)
	}
	var e = createjs.extend(t, createjs.AbstractLoader);
	t.context = null;
	e.toString = function() {
		return "[WebAudioLoader]"
	};
	e._createRequest = function() {
		this._request = new createjs.XHRRequest(this._item, false);
		this._request.setResponseType("arraybuffer")
	};
	e._sendComplete = function(e) {
		t.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._handleError, this))
	};
	e._handleAudioDecoded = function(t) {
		this._result = t;
		this.AbstractLoader__sendComplete()
	};
	createjs.WebAudioLoader = createjs.promote(t, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, s, r) {
		this.AbstractSoundInstance_constructor(t, e, s, r);
		this.gainNode = i.context.createGain();
		this.panNode = i.context.createPanner();
		this.panNode.panningModel = i._panningModel;
		this.panNode.connect(this.gainNode);
		this.sourceNode = null;
		this._soundCompleteTimeout = null;
		this._sourceNodeNext = null;
		this._playbackStartTime = 0;
		this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
	}
	var e = createjs.extend(t, createjs.AbstractSoundInstance);
	var i = t;
	i.context = null;
	i.destinationNode = null;
	i._panningModel = "equalpower";
	e.destroy = function() {
		this.AbstractSoundInstance_destroy();
		this.panNode.disconnect(0);
		this.panNode = null;
		this.gainNode.disconnect(0);
		this.gainNode = null
	};
	e.toString = function() {
		return "[WebAudioSoundInstance]"
	};
	e._updatePan = function() {
		this.panNode.setPosition(this._pan, 0, -.5)
	};
	e._removeLooping = function() {
		this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
	};
	e._addLooping = function() {
		if (this.playState != createjs.Sound.PLAY_SUCCEEDED) {
			return
		}
		this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0)
	};
	e._setDurationFromSource = function() {
		this._duration = this.playbackResource.duration * 1e3
	};
	e._handleCleanUp = function() {
		if (this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
			this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
			this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
		}
		if (this.gainNode.numberOfOutputs != 0) {
			this.gainNode.disconnect(0)
		}
		clearTimeout(this._soundCompleteTimeout);
		this._playbackStartTime = 0
	};
	e._cleanUpAudioNode = function(t) {
		if (t) {
			t.stop(0);
			t.disconnect(0);
			t = null
		}
		return t
	};
	e._handleSoundReady = function(t) {
		this.gainNode.connect(i.destinationNode);
		var e = this._duration * .001;
		var s = this._position * .001;
		this.sourceNode = this._createAndPlayAudioNode(i.context.currentTime - e, s);
		this._playbackStartTime = this.sourceNode.startTime - s;
		this._soundCompleteTimeout = setTimeout(this._endedHandler, (e - s) * 1e3);
		if (this._loop != 0) {
			this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0)
		}
	};
	e._createAndPlayAudioNode = function(t, e) {
		var s = i.context.createBufferSource();
		s.buffer = this.playbackResource;
		s.connect(this.panNode);
		var r = this._duration * .001;
		s.startTime = t + r;
		s.start(s.startTime, e + this._startTime * .001, r - e);
		return s
	};
	e._pause = function() {
		this._position = (i.context.currentTime - this._playbackStartTime) * 1e3;
		this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
		this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
		if (this.gainNode.numberOfOutputs != 0) {
			this.gainNode.disconnect(0)
		}
		clearTimeout(this._soundCompleteTimeout)
	};
	e._resume = function() {
		this._handleSoundReady()
	};
	e._updateVolume = function() {
		var t = this._muted ? 0 : this._volume;
		if (t != this.gainNode.gain.value) {
			this.gainNode.gain.value = t
		}
	};
	e._calculateCurrentPosition = function() {
		return (i.context.currentTime - this._playbackStartTime) * 1e3
	};
	e._updatePosition = function() {
		this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
		this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
		clearTimeout(this._soundCompleteTimeout);
		if (!this._paused) {
			this._handleSoundReady()
		}
	};
	e._handleLoop = function() {
		this._cleanUpAudioNode(this.sourceNode);
		this.sourceNode = this._sourceNodeNext;
		this._playbackStartTime = this.sourceNode.startTime;
		this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
		this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
	};
	e._updateDuration = function() {
		this._pause();
		this._resume()
	};
	createjs.WebAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.AbstractPlugin_constructor();
		this._panningModel = i._panningModel;
		this._volume = 1;
		this.context = i.context;
		this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
		this.dynamicsCompressorNode.connect(this.context.destination);
		this.gainNode = this.context.createGain();
		this.gainNode.connect(this.dynamicsCompressorNode);
		createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
		this._capabilities = i._capabilities;
		this._loaderClass = createjs.WebAudioLoader;
		this._soundInstanceClass = createjs.WebAudioSoundInstance;
		this._addPropsToClasses()
	}
	var e = createjs.extend(t, createjs.AbstractPlugin);
	var i = t;
	i._capabilities = null;
	i._panningModel = "equalpower";
	i.context = null;
	i.isSupported = function() {
		var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
		if (location.protocol == "file:" && !t && !this._isFileXHRSupported()) {
			return false
		}
		i._generateCapabilities();
		if (i.context == null) {
			return false
		}
		return true
	};
	i.playEmptySound = function() {
		var t = i.context.createBufferSource();
		t.buffer = i.context.createBuffer(1, 1, 22050);
		t.connect(i.context.destination);
		t.start(0, 0, 0)
	};
	i._isFileXHRSupported = function() {
		var t = true;
		var e = new XMLHttpRequest;
		try {
			e.open("GET", "WebAudioPluginTest.fail", false)
		} catch (i) {
			t = false;
			return t
		}
		e.onerror = function() {
			t = false
		};
		e.onload = function() {
			t = this.status == 404 || (this.status == 200 || this.status == 0 && this.response != "")
		};
		try {
			e.send()
		} catch (i) {
			t = false
		}
		return t
	};
	i._generateCapabilities = function() {
		if (i._capabilities != null) {
			return
		}
		var t = document.createElement("audio");
		if (t.canPlayType == null) {
			return null
		}
		if (i.context == null) {
			if (window.AudioContext) {
				i.context = new AudioContext
			} else if (window.webkitAudioContext) {
				i.context = new webkitAudioContext
			} else {
				return null
			}
		}
		i._compatibilitySetUp();
		i.playEmptySound();
		i._capabilities = {
			panning: true,
			volume: true,
			tracks: -1
		};
		var e = createjs.Sound.SUPPORTED_EXTENSIONS;
		var s = createjs.Sound.EXTENSION_MAP;
		for (var r = 0, n = e.length; r < n; r++) {
			var a = e[r];
			var o = s[a] || a;
			i._capabilities[a] = t.canPlayType("audio/" + a) != "no" && t.canPlayType("audio/" + a) != "" || t.canPlayType("audio/" + o) != "no" && t.canPlayType("audio/" + o) != ""
		}
		if (i.context.destination.numberOfChannels < 2) {
			i._capabilities.panning = false
		}
	};
	i._compatibilitySetUp = function() {
		i._panningModel = "equalpower";
		if (i.context.createGain) {
			return
		}
		i.context.createGain = i.context.createGainNode;
		var t = i.context.createBufferSource();
		t.__proto__.start = t.__proto__.noteGrainOn;
		t.__proto__.stop = t.__proto__.noteOff;
		i._panningModel = 0
	};
	e.toString = function() {
		return "[WebAudioPlugin]"
	};
	e._addPropsToClasses = function() {
		var t = this._soundInstanceClass;
		t.context = this.context;
		t.destinationNode = this.gainNode;
		t._panningModel = this._panningModel;
		this._loaderClass.context = this.context
	};
	e._updateVolume = function() {
		var t = createjs.Sound._masterMute ? 0 : this._volume;
		if (t != this.gainNode.gain.value) {
			this.gainNode.gain.value = t
		}
	};
	createjs.WebAudioPlugin = createjs.promote(t, "AbstractPlugin")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t) {
		this.src = t;
		this.length = 0;
		this.available = 0;
		this.tags = [];
		this.duration = 0
	}
	var e = t.prototype;
	e.constructor = t;
	var i = t;
	i.tags = {};
	i.get = function(e) {
		var s = i.tags[e];
		if (s == null) {
			s = i.tags[e] = new t(e)
		}
		return s
	};
	i.remove = function(t) {
		var e = i.tags[t];
		if (e == null) {
			return false
		}
		e.removeAll();
		delete i.tags[t];
		return true
	};
	i.getInstance = function(t) {
		var e = i.tags[t];
		if (e == null) {
			return null
		}
		return e.get()
	};
	i.setInstance = function(t, e) {
		var s = i.tags[t];
		if (s == null) {
			return null
		}
		return s.set(e)
	};
	i.getDuration = function(t) {
		var e = i.tags[t];
		if (e == null) {
			return 0
		}
		return e.getDuration()
	};
	e.add = function(t) {
		this.tags.push(t);
		this.length++;
		this.available++
	};
	e.removeAll = function() {
		var t;
		while (this.length--) {
			t = this.tags[this.length];
			if (t.parentNode) {
				t.parentNode.removeChild(t)
			}
			delete this.tags[this.length]
		}
		this.src = null;
		this.tags.length = 0
	};
	e.get = function() {
		if (this.tags.length == 0) {
			return null
		}
		this.available = this.tags.length;
		var t = this.tags.pop();
		if (t.parentNode == null) {
			document.body.appendChild(t)
		}
		return t
	};
	e.set = function(t) {
		var e = createjs.indexOf(this.tags, t);
		if (e == -1) {
			this.tags.push(t)
		}
		this.available = this.tags.length
	};
	e.getDuration = function() {
		if (!this.duration) {
			this.duration = this.tags[this.tags.length - 1].duration * 1e3
		}
		return this.duration
	};
	e.toString = function() {
		return "[HTMLAudioTagPool]"
	};
	createjs.HTMLAudioTagPool = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i, s) {
		this.AbstractSoundInstance_constructor(t, e, i, s);
		this._audioSpriteStopTime = null;
		this._delayTimeoutId = null;
		this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
		this._readyHandler = createjs.proxy(this._handleTagReady, this);
		this._stalledHandler = createjs.proxy(this.playFailed, this);
		this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
		this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
		if (i) {
			this._audioSpriteStopTime = (e + i) * .001
		} else {
			this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
		}
	}
	var e = createjs.extend(t, createjs.AbstractSoundInstance);
	e.setMasterVolume = function(t) {
		this._updateVolume()
	};
	e.setMasterMute = function(t) {
		this._updateVolume()
	};
	e.toString = function() {
		return "[HTMLAudioSoundInstance]"
	};
	e._removeLooping = function() {
		if (this._playbackResource == null) {
			return
		}
		this._playbackResource.loop = false;
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false)
	};
	e._addLooping = function() {
		if (this._playbackResource == null || this._audioSpriteStopTime) {
			return
		}
		this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
		this._playbackResource.loop = true
	};
	e._handleCleanUp = function() {
		var t = this._playbackResource;
		if (t != null) {
			t.pause();
			t.loop = false;
			t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
			t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
			t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
			t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
			t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
			try {
				t.currentTime = this._startTime
			} catch (e) {}
			createjs.HTMLAudioTagPool.setInstance(this.src, t);
			this._playbackResource = null
		}
	};
	e._beginPlaying = function(t, e, i, s) {
		this._playbackResource = createjs.HTMLAudioTagPool.getInstance(this.src);
		return this.AbstractSoundInstance__beginPlaying(t, e, i, s)
	};
	e._handleSoundReady = function(t) {
		if (this._playbackResource.readyState !== 4) {
			var e = this._playbackResource;
			e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
			e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
			e.preload = "auto";
			e.load();
			return
		}
		this._updateVolume();
		this._playbackResource.currentTime = (this._startTime + this._position) * .001;
		if (this._audioSpriteStopTime) {
			this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false)
		} else {
			this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
			if (this._loop != 0) {
				this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);

				this._playbackResource.loop = true
			}
		}
		this._playbackResource.play()
	};
	e._handleTagReady = function(t) {
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
		this._handleSoundReady()
	};
	e._pause = function() {
		this._playbackResource.pause()
	};
	e._resume = function() {
		this._playbackResource.play()
	};
	e._updateVolume = function() {
		if (this._playbackResource != null) {
			var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
			if (t != this._playbackResource.volume) {
				this._playbackResource.volume = t
			}
		}
	};
	e._calculateCurrentPosition = function() {
		return this._playbackResource.currentTime * 1e3 - this._startTime
	};
	e._updatePosition = function() {
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
		this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
		try {
			this._playbackResource.currentTime = (this._position + this._startTime) * .001
		} catch (t) {
			this._handleSetPositionSeek(null)
		}
	};
	e._handleSetPositionSeek = function(t) {
		if (this._playbackResource == null) {
			return
		}
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
		this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false)
	};
	e._handleAudioSpriteLoop = function(t) {
		if (this._playbackResource.currentTime <= this._audioSpriteStopTime) {
			return
		}
		this._playbackResource.pause();
		if (this._loop == 0) {
			this._handleSoundComplete(null)
		} else {
			this._position = 0;
			this._loop--;
			this._playbackResource.currentTime = this._startTime * .001;
			if (!this._paused) {
				this._playbackResource.play()
			}
			this._sendEvent("loop")
		}
	};
	e._handleLoop = function(t) {
		if (this._loop == 0) {
			this._playbackResource.loop = false;
			this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false)
		}
	};
	e._updateDuration = function() {
		this._audioSpriteStopTime = (startTime + duration) * .001;
		if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
			this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
			this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false)
		}
	};
	createjs.HTMLAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this.AbstractPlugin_constructor();
		this.defaultNumChannels = 2;
		this._capabilities = i._capabilities;
		this._loaderClass = createjs.SoundLoader;
		this._soundInstanceClass = createjs.HTMLAudioSoundInstance
	}
	var e = createjs.extend(t, createjs.AbstractPlugin);
	var i = t;
	i.MAX_INSTANCES = 30;
	i._AUDIO_READY = "canplaythrough";
	i._AUDIO_ENDED = "ended";
	i._AUDIO_SEEKED = "seeked";
	i._AUDIO_STALLED = "stalled";
	i._TIME_UPDATE = "timeupdate";
	i._capabilities = null;
	i.enableIOS = false;
	i.isSupported = function() {
		i._generateCapabilities();
		if (i._capabilities == null) {
			return false
		}
		return true
	};
	i._generateCapabilities = function() {
		if (i._capabilities != null) {
			return
		}
		var t = document.createElement("audio");
		if (t.canPlayType == null) {
			return null
		}
		i._capabilities = {
			panning: true,
			volume: true,
			tracks: -1
		};
		var e = createjs.Sound.SUPPORTED_EXTENSIONS;
		var s = createjs.Sound.EXTENSION_MAP;
		for (var r = 0, n = e.length; r < n; r++) {
			var a = e[r];
			var o = s[a] || a;
			i._capabilities[a] = t.canPlayType("audio/" + a) != "no" && t.canPlayType("audio/" + a) != "" || t.canPlayType("audio/" + o) != "no" && t.canPlayType("audio/" + o) != ""
		}
	};
	e.register = function(t, e) {
		var i = createjs.HTMLAudioTagPool.get(t.src);
		var s = null;
		for (var r = 0; r < e; r++) {
			s = this._createTag(t.src);
			i.add(s)
		}
		var n = this.AbstractPlugin_register(t, e);
		n.setTag(s);
		return n
	};
	e.removeSound = function(t) {
		this.AbstractPlugin_removeSound(t);
		createjs.HTMLAudioTagPool.remove(t)
	};
	e.create = function(t, e, i) {
		var s = this.AbstractPlugin_create(t, e, i);
		s.setPlaybackResource(null);
		return s
	};
	e.toString = function() {
		return "[HTMLAudioPlugin]"
	};
	e.setVolume = e.getVolume = e.setMute = null;
	e._createTag = function(t) {
		var e = document.createElement("audio");
		e.autoplay = false;
		e.preload = "none";
		e.src = t;
		return e
	};
	createjs.HTMLAudioPlugin = createjs.promote(t, "AbstractPlugin")
})();
this.createjs = this.createjs || {};
createjs.extend = function(t, e) {
	"use strict";

	function i() {
		this.constructor = t
	}
	i.prototype = e.prototype;
	return t.prototype = new i
};
this.createjs = this.createjs || {};
createjs.promote = function(t, e) {
	"use strict";
	var i = t.prototype,
		s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
	if (s) {
		i[(e += "_") + "constructor"] = s.constructor;
		for (var r in s) {
			if (i.hasOwnProperty(r) && typeof s[r] == "function") {
				i[e + r] = s[r]
			}
		}
	}
	return t
};
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.type = t;
		this.target = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.bubbles = !! e;
		this.cancelable = !! i;
		this.timeStamp = (new Date).getTime();
		this.defaultPrevented = false;
		this.propagationStopped = false;
		this.immediatePropagationStopped = false;
		this.removed = false
	}
	var e = t.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && true
	};
	e.stopPropagation = function() {
		this.propagationStopped = true
	};
	e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true
	};
	e.remove = function() {
		this.removed = true
	};
	e.clone = function() {
		return new t(this.type, this.bubbles, this.cancelable)
	};
	e.set = function(t) {
		for (var e in t) {
			this[e] = t[e]
		}
		return this
	};
	e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	};
	createjs.Event = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		this._listeners = null;
		this._captureListeners = null
	}
	var e = t.prototype;
	t.initialize = function(t) {
		t.addEventListener = e.addEventListener;
		t.on = e.on;
		t.removeEventListener = t.off = e.removeEventListener;
		t.removeAllEventListeners = e.removeAllEventListeners;
		t.hasEventListener = e.hasEventListener;
		t.dispatchEvent = e.dispatchEvent;
		t._dispatchEvent = e._dispatchEvent;
		t.willTrigger = e.willTrigger
	};
	e.addEventListener = function(t, e, i) {
		var s;
		if (i) {
			s = this._captureListeners = this._captureListeners || {}
		} else {
			s = this._listeners = this._listeners || {}
		}
		var r = s[t];
		if (r) {
			this.removeEventListener(t, e, i)
		}
		r = s[t];
		if (!r) {
			s[t] = [e]
		} else {
			r.push(e)
		}
		return e
	};
	e.on = function(t, e, i, s, r, n) {
		if (e.handleEvent) {
			i = i || e;
			e = e.handleEvent
		}
		i = i || this;
		return this.addEventListener(t, function(t) {
			e.call(i, t, r);
			s && t.remove()
		}, n)
	};
	e.removeEventListener = function(t, e, i) {
		var s = i ? this._captureListeners : this._listeners;
		if (!s) {
			return
		}
		var r = s[t];
		if (!r) {
			return
		}
		for (var n = 0, a = r.length; n < a; n++) {
			if (r[n] == e) {
				if (a == 1) {
					delete s[t]
				} else {
					r.splice(n, 1)
				}
				break
			}
		}
	};
	e.off = e.removeEventListener;
	e.removeAllEventListeners = function(t) {
		if (!t) {
			this._listeners = this._captureListeners = null
		} else {
			if (this._listeners) {
				delete this._listeners[t]
			}
			if (this._captureListeners) {
				delete this._captureListeners[t]
			}
		}
	};
	e.dispatchEvent = function(t) {
		if (typeof t == "string") {
			var e = this._listeners;
			if (!e || !e[t]) {
				return false
			}
			t = new createjs.Event(t)
		} else if (t.target && t.clone) {
			t = t.clone()
		}
		try {
			t.target = this
		} catch (i) {}
		if (!t.bubbles || !this.parent) {
			this._dispatchEvent(t, 2)
		} else {
			var s = this,
				r = [s];
			while (s.parent) {
				r.push(s = s.parent)
			}
			var n, a = r.length;
			for (n = a - 1; n >= 0 && !t.propagationStopped; n--) {
				r[n]._dispatchEvent(t, 1 + (n == 0))
			}
			for (n = 1; n < a && !t.propagationStopped; n++) {
				r[n]._dispatchEvent(t, 3)
			}
		}
		return t.defaultPrevented
	};
	e.hasEventListener = function(t) {
		var e = this._listeners,
			i = this._captureListeners;
		return !!(e && e[t] || i && i[t])
	};
	e.willTrigger = function(t) {
		var e = this;
		while (e) {
			if (e.hasEventListener(t)) {
				return true
			}
			e = e.parent
		}
		return false
	};
	e.toString = function() {
		return "[EventDispatcher]"
	};
	e._dispatchEvent = function(t, e) {
		var i, s = e == 1 ? this._captureListeners : this._listeners;
		if (t && s) {
			var r = s[t.type];
			if (!r || !(i = r.length)) {
				return
			}
			try {
				t.currentTarget = this
			} catch (n) {}
			try {
				t.eventPhase = e
			} catch (n) {}
			t.removed = false;
			r = r.slice();
			for (var a = 0; a < i && !t.immediatePropagationStopped; a++) {
				var o = r[a];
				if (o.handleEvent) {
					o.handleEvent(t)
				} else {
					o(t)
				}
				if (t.removed) {
					this.off(t.type, o, e == 1);
					t.removed = false
				}
			}
		}
	};
	createjs.EventDispatcher = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "Ticker cannot be instantiated."
	}
	t.RAF_SYNCHED = "synched";
	t.RAF = "raf";
	t.TIMEOUT = "timeout";
	t.useRAF = false;
	t.timingMode = null;
	t.maxDelta = 0;
	t.paused = false;
	t.removeEventListener = null;
	t.removeAllEventListeners = null;
	t.dispatchEvent = null;
	t.hasEventListener = null;
	t._listeners = null;
	createjs.EventDispatcher.initialize(t);
	t._addEventListener = t.addEventListener;
	t.addEventListener = function() {
		!t._inited && t.init();
		return t._addEventListener.apply(t, arguments)
	};
	t._inited = false;
	t._startTime = 0;
	t._pausedTime = 0;
	t._ticks = 0;
	t._pausedTicks = 0;
	t._interval = 50;
	t._lastTime = 0;
	t._times = null;
	t._tickTimes = null;
	t._timerId = null;
	t._raf = true;
	t.setInterval = function(e) {
		t._interval = e;
		if (!t._inited) {
			return
		}
		t._setupTick()
	};
	t.getInterval = function() {
		return t._interval
	};
	t.setFPS = function(e) {
		t.setInterval(1e3 / e)
	};
	t.getFPS = function() {
		return 1e3 / t._interval
	};
	try {
		Object.defineProperties(t, {
			interval: {
				get: t.getInterval,
				set: t.setInterval
			},
			framerate: {
				get: t.getFPS,
				set: t.setFPS
			}
		})
	} catch (e) {
		console.log(e)
	}
	t.init = function() {
		if (t._inited) {
			return
		}
		t._inited = true;
		t._times = [];
		t._tickTimes = [];
		t._startTime = t._getTime();
		t._times.push(t._lastTime = 0);
		t.interval = t._interval
	};
	t.reset = function() {
		if (t._raf) {
			var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
			e && e(t._timerId)
		} else {
			clearTimeout(t._timerId)
		}
		t.removeAllEventListeners("tick");
		t._timerId = t._times = t._tickTimes = null;
		t._startTime = t._lastTime = t._ticks = 0;
		t._inited = false
	};
	t.getMeasuredTickTime = function(e) {
		var i = 0,
			s = t._tickTimes;
		if (!s || s.length < 1) {
			return -1
		}
		e = Math.min(s.length, e || t.getFPS() | 0);
		for (var r = 0; r < e; r++) {
			i += s[r]
		}
		return i / e
	};
	t.getMeasuredFPS = function(e) {
		var i = t._times;
		if (!i || i.length < 2) {
			return -1
		}
		e = Math.min(i.length - 1, e || t.getFPS() | 0);
		return 1e3 / ((i[0] - i[e]) / e)
	};
	t.setPaused = function(e) {
		t.paused = e
	};
	t.getPaused = function() {
		return t.paused
	};
	t.getTime = function(e) {
		return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
	};
	t.getEventTime = function(e) {
		return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
	};
	t.getTicks = function(e) {
		return t._ticks - (e ? t._pausedTicks : 0)
	};
	t._handleSynch = function() {
		t._timerId = null;
		t._setupTick();
		if (t._getTime() - t._lastTime >= (t._interval - 1) * .97) {
			t._tick()
		}
	};
	t._handleRAF = function() {
		t._timerId = null;
		t._setupTick();
		t._tick()
	};
	t._handleTimeout = function() {
		t._timerId = null;
		t._setupTick();
		t._tick()
	};
	t._setupTick = function() {
		if (t._timerId != null) {
			return
		}
		var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
		if (e == t.RAF_SYNCHED || e == t.RAF) {
			var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if (i) {
				t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch);
				t._raf = true;
				return
			}
		}
		t._raf = false;
		t._timerId = setTimeout(t._handleTimeout, t._interval)
	};
	t._tick = function() {
		var e = t.paused;
		var i = t._getTime();
		var s = i - t._lastTime;
		t._lastTime = i;
		t._ticks++;
		if (e) {
			t._pausedTicks++;
			t._pausedTime += s
		}
		if (t.hasEventListener("tick")) {
			var r = new createjs.Event("tick");
			var n = t.maxDelta;
			r.delta = n && s > n ? n : s;
			r.paused = e;
			r.time = i;
			r.runTime = i - t._pausedTime;
			t.dispatchEvent(r)
		}
		t._tickTimes.unshift(t._getTime() - i);
		while (t._tickTimes.length > 100) {
			t._tickTimes.pop()
		}
		t._times.unshift(i);
		while (t._times.length > 100) {
			t._times.pop()
		}
	};
	var i = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	t._getTime = function() {
		return (i && i.call(performance) || (new Date).getTime()) - t._startTime
	};
	createjs.Ticker = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(e, i, s) {
		this.ignoreGlobalPause = false;
		this.loop = false;
		this.duration = 0;
		this.pluginData = s || {};
		this.target = e;
		this.position = null;
		this.passive = false;
		this._paused = false;
		this._curQueueProps = {};
		this._initQueueProps = {};
		this._steps = [];
		this._actions = [];
		this._prevPosition = 0;
		this._stepPosition = 0;
		this._prevPos = -1;
		this._target = e;
		this._useTicks = false;
		this._inited = false;
		if (i) {
			this._useTicks = i.useTicks;
			this.ignoreGlobalPause = i.ignoreGlobalPause;
			this.loop = i.loop;
			i.onChange && this.addEventListener("change", i.onChange);
			if (i.override) {
				t.removeTweens(e)
			}
		}
		if (i && i.paused) {
			this._paused = true
		} else {
			createjs.Tween._register(this, true)
		}
		if (i && i.position != null) {
			this.setPosition(i.position, t.NONE)
		}
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	t.NONE = 0;
	t.LOOP = 1;
	t.REVERSE = 2;
	t.IGNORE = {};
	t._tweens = [];
	t._plugins = {};
	t.get = function(e, i, s, r) {
		if (r) {
			t.removeTweens(e)
		}
		return new t(e, i, s)
	};
	t.tick = function(e, i) {
		var s = t._tweens.slice();
		for (var r = s.length - 1; r >= 0; r--) {
			var n = s[r];
			if (i && !n.ignoreGlobalPause || n._paused) {
				continue
			}
			n.tick(n._useTicks ? 1 : e)
		}
	};
	t.handleEvent = function(t) {
		if (t.type == "tick") {
			this.tick(t.delta, t.paused)
		}
	};
	t.removeTweens = function(e) {
		if (!e.tweenjs_count) {
			return
		}
		var i = t._tweens;
		for (var s = i.length - 1; s >= 0; s--) {
			var r = i[s];
			if (r._target == e) {
				r._paused = true;
				i.splice(s, 1)
			}
		}
		e.tweenjs_count = 0
	};
	t.removeAllTweens = function() {
		var e = t._tweens;
		for (var i = 0, s = e.length; i < s; i++) {
			var r = e[i];
			r._paused = true;
			if (r.target) r.target.tweenjs_count = 0
		}
		e.length = 0
	};
	t.hasActiveTweens = function(e) {
		if (e) {
			return e.tweenjs_count
		}
		return t._tweens && !! t._tweens.length
	};
	t.installPlugin = function(e, i) {
		var s = e.priority;
		if (s == null) {
			e.priority = s = 0
		}
		for (var r = 0, n = i.length, a = t._plugins; r < n; r++) {
			var o = i[r];
			if (!a[o]) {
				a[o] = [e]
			} else {
				var h = a[o];
				for (var c = 0, u = h.length; c < u; c++) {
					if (s < h[c].priority) {
						break
					}
				}
				a[o].splice(c, 0, e)
			}
		}
	};
	t._register = function(e, i) {
		var s = e._target;
		var r = t._tweens;
		if (i) {
			if (s) {
				s.tweenjs_count = s.tweenjs_count ? s.tweenjs_count + 1 : 1
			}
			r.push(e);
			if (!t._inited && createjs.Ticker) {
				createjs.Ticker.addEventListener("tick", t);
				t._inited = true
			}
		} else {
			if (s) {
				s.tweenjs_count--
			}
			var n = r.length;
			while (n--) {
				if (r[n] == e) {
					r.splice(n, 1);
					return
				}
			}
		}
	};
	e.wait = function(t, e) {
		if (t == null || t <= 0) {
			return this
		}
		var i = this._cloneProps(this._curQueueProps);
		return this._addStep({
			d: t,
			p0: i,
			e: this._linearEase,
			p1: i,
			v: e
		})
	};
	e.to = function(t, e, i) {
		if (isNaN(e) || e < 0) {
			e = 0
		}
		return this._addStep({
			d: e || 0,
			p0: this._cloneProps(this._curQueueProps),
			e: i,
			p1: this._cloneProps(this._appendQueueProps(t))
		})
	};
	e.call = function(t, e, i) {
		return this._addAction({
			f: t,
			p: e ? e : [this],
			o: i ? i : this._target
		})
	};
	e.set = function(t, e) {
		return this._addAction({
			f: this._set,
			o: this,
			p: [t, e ? e : this._target]
		})
	};
	e.play = function(t) {
		if (!t) {
			t = this
		}
		return this.call(t.setPaused, [false], t)
	};
	e.pause = function(t) {
		if (!t) {
			t = this
		}
		return this.call(t.setPaused, [true], t)
	};
	e.setPosition = function(t, e) {
		if (t < 0) {
			t = 0
		}
		if (e == null) {
			e = 1
		}
		var i = t;
		var s = false;
		if (i >= this.duration) {
			if (this.loop) {
				i = i % this.duration
			} else {
				i = this.duration;
				s = true
			}
		}
		if (i == this._prevPos) {
			return s
		}
		var r = this._prevPos;
		this.position = this._prevPos = i;
		this._prevPosition = t;
		if (this._target) {
			if (s) {
				this._updateTargetProps(null, 1)
			} else if (this._steps.length > 0) {
				for (var n = 0, a = this._steps.length; n < a; n++) {
					if (this._steps[n].t > i) {
						break
					}
				}
				var o = this._steps[n - 1];
				this._updateTargetProps(o, (this._stepPosition = i - o.t) / o.d)
			}
		}
		if (e != 0 && this._actions.length > 0) {
			if (this._useTicks) {
				this._runActions(i, i)
			} else if (e == 1 && i < r) {
				if (r != this.duration) {
					this._runActions(r, this.duration)
				}
				this._runActions(0, i, true)
			} else {
				this._runActions(r, i)
			}
		}
		if (s) {
			this.setPaused(true)
		}
		this.dispatchEvent("change");
		return s
	};
	e.tick = function(t) {
		if (this._paused) {
			return
		}
		this.setPosition(this._prevPosition + t)
	};
	e.setPaused = function(e) {
		if (this._paused === !! e) {
			return this
		}
		this._paused = !! e;
		t._register(this, !e);
		return this
	};
	e.w = e.wait;
	e.t = e.to;
	e.c = e.call;
	e.s = e.set;
	e.toString = function() {
		return "[Tween]"
	};
	e.clone = function() {
		throw "Tween can not be cloned."
	};
	e._updateTargetProps = function(e, i) {
		var s, r, n, a, o, h;
		if (!e && i == 1) {
			this.passive = false;
			s = r = this._curQueueProps
		} else {
			this.passive = !! e.v;
			if (this.passive) {
				return
			}
			if (e.e) {
				i = e.e(i, 0, 1, 1)
			}
			s = e.p0;
			r = e.p1
		}
		for (var c in this._initQueueProps) {
			if ((a = s[c]) == null) {
				s[c] = a = this._initQueueProps[c]
			}
			if ((o = r[c]) == null) {
				r[c] = o = a
			}
			if (a == o || i == 0 || i == 1 || typeof a != "number") {
				n = i == 1 ? o : a
			} else {
				n = a + (o - a) * i
			}
			var u = false;
			if (h = t._plugins[c]) {
				for (var l = 0, d = h.length; l < d; l++) {
					var f = h[l].tween(this, c, n, s, r, i, !! e && s == r, !e);
					if (f == t.IGNORE) {
						u = true
					} else {
						n = f
					}
				}
			}
			if (!u) {
				this._target[c] = n
			}
		}
	};
	e._runActions = function(t, e, i) {
		var s = t;
		var r = e;
		var n = -1;
		var a = this._actions.length;
		var o = 1;
		if (t > e) {
			s = e;
			r = t;
			n = a;
			a = o = -1
		}
		while ((n += o) != a) {
			var h = this._actions[n];
			var c = h.t;
			if (c == r || c > s && c < r || i && c == t) {
				h.f.apply(h.o, h.p)
			}
		}
	};
	e._appendQueueProps = function(e) {
		var i, s, r, n, a;
		for (var o in e) {
			if (this._initQueueProps[o] === undefined) {
				s = this._target[o];
				if (i = t._plugins[o]) {
					for (r = 0, n = i.length; r < n; r++) {
						s = i[r].init(this, o, s)
					}
				}
				this._initQueueProps[o] = this._curQueueProps[o] = s === undefined ? null : s
			} else {
				s = this._curQueueProps[o]
			}
		}
		for (var o in e) {
			s = this._curQueueProps[o];
			if (i = t._plugins[o]) {
				a = a || {};
				for (r = 0, n = i.length; r < n; r++) {
					if (i[r].step) {
						i[r].step(this, o, s, e[o], a)
					}
				}
			}
			this._curQueueProps[o] = e[o]
		}
		if (a) {
			this._appendQueueProps(a)
		}
		return this._curQueueProps
	};
	e._cloneProps = function(t) {
		var e = {};
		for (var i in t) {
			e[i] = t[i]
		}
		return e
	};
	e._addStep = function(t) {
		if (t.d > 0) {
			this._steps.push(t);
			t.t = this.duration;
			this.duration += t.d
		}
		return this
	};
	e._addAction = function(t) {
		t.t = this.duration;
		this._actions.push(t);
		return this
	};
	e._set = function(t, e) {
		for (var i in t) {
			e[i] = t[i]
		}
	};
	createjs.Tween = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t(t, e, i) {
		this.EventDispatcher_constructor();
		this.ignoreGlobalPause = false;
		this.duration = 0;
		this.loop = false;
		this.position = null;
		this._paused = false;
		this._tweens = [];
		this._labels = null;
		this._labelList = null;
		this._prevPosition = 0;
		this._prevPos = -1;
		this._useTicks = false;
		if (i) {
			this._useTicks = i.useTicks;
			this.loop = i.loop;
			this.ignoreGlobalPause = i.ignoreGlobalPause;
			i.onChange && this.addEventListener("change", i.onChange)
		}
		if (t) {
			this.addTween.apply(this, t)
		}
		this.setLabels(e);
		if (i && i.paused) {
			this._paused = true
		} else {
			createjs.Tween._register(this, true)
		}
		if (i && i.position != null) {
			this.setPosition(i.position, createjs.Tween.NONE)
		}
	}
	var e = createjs.extend(t, createjs.EventDispatcher);
	e.addTween = function(t) {
		var e = arguments.length;
		if (e > 1) {
			for (var i = 0; i < e; i++) {
				this.addTween(arguments[i])
			}
			return arguments[0]
		} else if (e == 0) {
			return null
		}
		this.removeTween(t);
		this._tweens.push(t);
		t.setPaused(true);
		t._paused = false;
		t._useTicks = this._useTicks;
		if (t.duration > this.duration) {
			this.duration = t.duration
		}
		if (this._prevPos >= 0) {
			t.setPosition(this._prevPos, createjs.Tween.NONE)
		}
		return t
	};
	e.removeTween = function(t) {
		var e = arguments.length;
		if (e > 1) {
			var i = true;
			for (var s = 0; s < e; s++) {
				i = i && this.removeTween(arguments[s])
			}
			return i
		} else if (e == 0) {
			return false
		}
		var r = this._tweens;
		var s = r.length;
		while (s--) {
			if (r[s] == t) {
				r.splice(s, 1);
				if (t.duration >= this.duration) {
					this.updateDuration()
				}
				return true
			}
		}
		return false
	};
	e.addLabel = function(t, e) {
		this._labels[t] = e;
		var i = this._labelList;
		if (i) {
			for (var s = 0, r = i.length; s < r; s++) {
				if (e < i[s].position) {
					break
				}
			}
			i.splice(s, 0, {
				label: t,
				position: e
			})
		}
	};
	e.setLabels = function(t) {
		this._labels = t ? t : {}
	};
	e.getLabels = function() {
		var t = this._labelList;
		if (!t) {
			t = this._labelList = [];
			var e = this._labels;
			for (var i in e) {
				t.push({
					label: i,
					position: e[i]
				})
			}
			t.sort(function(t, e) {
				return t.position - e.position
			})
		}
		return t
	};
	e.getCurrentLabel = function() {
		var t = this.getLabels();
		var e = this.position;
		var i = t.length;
		if (i) {
			for (var s = 0; s < i; s++) {
				if (e < t[s].position) {
					break
				}
			}
			return s == 0 ? null : t[s - 1].label
		}
		return null
	};
	e.gotoAndPlay = function(t) {
		this.setPaused(false);
		this._goto(t)
	};
	e.gotoAndStop = function(t) {
		this.setPaused(true);
		this._goto(t)
	};
	e.setPosition = function(t, e) {
		if (t < 0) {
			t = 0
		}
		var i = this.loop ? t % this.duration : t;
		var s = !this.loop && t >= this.duration;
		if (i == this._prevPos) {
			return s
		}
		this._prevPosition = t;
		this.position = this._prevPos = i;
		for (var r = 0, n = this._tweens.length; r < n; r++) {
			this._tweens[r].setPosition(i, e);
			if (i != this._prevPos) {
				return false
			}
		}
		if (s) {
			this.setPaused(true)
		}
		this.dispatchEvent("change");
		return s
	};
	e.setPaused = function(t) {
		this._paused = !! t;
		createjs.Tween._register(this, !t)
	};
	e.updateDuration = function() {
		this.duration = 0;
		for (var t = 0, e = this._tweens.length; t < e; t++) {
			var i = this._tweens[t];
			if (i.duration > this.duration) {
				this.duration = i.duration
			}
		}
	};
	e.tick = function(t) {
		this.setPosition(this._prevPosition + t)
	};
	e.resolve = function(t) {
		var e = Number(t);
		if (isNaN(e)) {
			e = this._labels[t]
		}
		return e
	};
	e.toString = function() {
		return "[Timeline]"
	};
	e.clone = function() {
		throw "Timeline can not be cloned."
	};
	e._goto = function(t) {
		var e = this.resolve(t);
		if (e != null) {
			this.setPosition(e)
		}
	};
	createjs.Timeline = createjs.promote(t, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "Ease cannot be instantiated."
	}
	t.linear = function(t) {
		return t
	};
	t.none = t.linear;
	t.get = function(t) {
		if (t < -1) {
			t = -1
		}
		if (t > 1) {
			t = 1
		}
		return function(e) {
			if (t == 0) {
				return e
			}
			if (t < 0) {
				return e * (e * -t + 1 + t)
			}
			return e * ((2 - e) * t + (1 - t))
		}
	};
	t.getPowIn = function(t) {
		return function(e) {
			return Math.pow(e, t)
		}
	};
	t.getPowOut = function(t) {
		return function(e) {
			return 1 - Math.pow(1 - e, t)
		}
	};
	t.getPowInOut = function(t) {
		return function(e) {
			if ((e *= 2) < 1) return .5 * Math.pow(e, t);
			return 1 - .5 * Math.abs(Math.pow(2 - e, t))
		}
	};
	t.quadIn = t.getPowIn(2);
	t.quadOut = t.getPowOut(2);
	t.quadInOut = t.getPowInOut(2);
	t.cubicIn = t.getPowIn(3);
	t.cubicOut = t.getPowOut(3);
	t.cubicInOut = t.getPowInOut(3);
	t.quartIn = t.getPowIn(4);
	t.quartOut = t.getPowOut(4);
	t.quartInOut = t.getPowInOut(4);
	t.quintIn = t.getPowIn(5);
	t.quintOut = t.getPowOut(5);
	t.quintInOut = t.getPowInOut(5);
	t.sineIn = function(t) {
		return 1 - Math.cos(t * Math.PI / 2)
	};
	t.sineOut = function(t) {
		return Math.sin(t * Math.PI / 2)
	};
	t.sineInOut = function(t) {
		return -.5 * (Math.cos(Math.PI * t) - 1)
	};
	t.getBackIn = function(t) {
		return function(e) {
			return e * e * ((t + 1) * e - t)
		}
	};
	t.backIn = t.getBackIn(1.7);
	t.getBackOut = function(t) {
		return function(e) {
			return --e * e * ((t + 1) * e + t) + 1
		}
	};
	t.backOut = t.getBackOut(1.7);
	t.getBackInOut = function(t) {
		t *= 1.525;
		return function(e) {
			if ((e *= 2) < 1) return .5 * (e * e * ((t + 1) * e - t));
			return .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
		}
	};
	t.backInOut = t.getBackInOut(1.7);
	t.circIn = function(t) {
		return -(Math.sqrt(1 - t * t) - 1)
	};
	t.circOut = function(t) {
		return Math.sqrt(1 - --t * t)
	};
	t.circInOut = function(t) {
		if ((t *= 2) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
		return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
	};
	t.bounceIn = function(e) {
		return 1 - t.bounceOut(1 - e)
	};
	t.bounceOut = function(t) {
		if (t < 1 / 2.75) {
			return 7.5625 * t * t
		} else if (t < 2 / 2.75) {
			return 7.5625 * (t -= 1.5 / 2.75) * t + .75
		} else if (t < 2.5 / 2.75) {
			return 7.5625 * (t -= 2.25 / 2.75) * t + .9375
		} else {
			return 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}
	};
	t.bounceInOut = function(e) {
		if (e < .5) return t.bounceIn(e * 2) * .5;
		return t.bounceOut(e * 2 - 1) * .5 + .5
	};
	t.getElasticIn = function(t, e) {
		var i = Math.PI * 2;
		return function(s) {
			if (s == 0 || s == 1) return s;
			var r = e / i * Math.asin(1 / t);
			return -(t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s - r) * i / e))
		}
	};
	t.elasticIn = t.getElasticIn(1, .3);
	t.getElasticOut = function(t, e) {
		var i = Math.PI * 2;
		return function(s) {
			if (s == 0 || s == 1) return s;
			var r = e / i * Math.asin(1 / t);
			return t * Math.pow(2, -10 * s) * Math.sin((s - r) * i / e) + 1
		}
	};
	t.elasticOut = t.getElasticOut(1, .3);
	t.getElasticInOut = function(t, e) {
		var i = Math.PI * 2;
		return function(s) {
			var r = e / i * Math.asin(1 / t);
			if ((s *= 2) < 1) return -.5 * (t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s - r) * i / e));
			return t * Math.pow(2, -10 * (s -= 1)) * Math.sin((s - r) * i / e) * .5 + 1
		}
	};
	t.elasticInOut = t.getElasticInOut(1, .3 * 1.5);
	createjs.Ease = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";

	function t() {
		throw "MotionGuidePlugin cannot be instantiated."
	}
	t.priority = 0;
	t._rotOffS;
	t._rotOffE;
	t._rotNormS;
	t._rotNormE;
	t.install = function() {
		createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]);
		return createjs.Tween.IGNORE
	};
	t.init = function(t, e, i) {
		var s = t.target;
		if (!s.hasOwnProperty("x")) {
			s.x = 0
		}
		if (!s.hasOwnProperty("y")) {
			s.y = 0
		}
		if (!s.hasOwnProperty("rotation")) {
			s.rotation = 0
		}
		if (e == "rotation") {
			t.__needsRot = true
		}
		return e == "guide" ? null : i
	};
	t.step = function(e, i, s, r, n) {
		if (i == "rotation") {
			e.__rotGlobalS = s;
			e.__rotGlobalE = r;
			t.testRotData(e, n)
		}
		if (i != "guide") {
			return r
		}
		var a, o = r;
		if (!o.hasOwnProperty("path")) {
			o.path = []
		}
		var h = o.path;
		if (!o.hasOwnProperty("end")) {
			o.end = 1
		}
		if (!o.hasOwnProperty("start")) {
			o.start = s && s.hasOwnProperty("end") && s.path === h ? s.end : 0
		}
		if (o.hasOwnProperty("_segments") && o._length) {
			return r
		}
		var c = h.length;
		var u = 10;
		if (c >= 6 && (c - 2) % 4 == 0) {
			o._segments = [];
			o._length = 0;
			for (var l = 2; l < c; l += 4) {
				var d = h[l - 2],
					f = h[l - 1];
				var _ = h[l + 0],
					p = h[l + 1];
				var g = h[l + 2],
					v = h[l + 3];
				var m = d,
					y = f;
				var j, b, E = 0;
				var w = [];
				for (var T = 1; T <= u; T++) {
					var S = T / u;
					var x = 1 - S;
					j = x * x * d + 2 * x * S * _ + S * S * g;
					b = x * x * f + 2 * x * S * p + S * S * v;
					E += w[w.push(Math.sqrt((a = j - m) * a + (a = b - y) * a)) - 1];
					m = j;
					y = b
				}
				o._segments.push(E);
				o._segments.push(w);
				o._length += E
			}
		} else {
			throw "invalid 'path' data, please see documentation for valid paths"
		}
		a = o.orient;
		o.orient = true;
		var L = {};
		t.calc(o, o.start, L);
		e.__rotPathS = Number(L.rotation.toFixed(5));
		t.calc(o, o.end, L);
		e.__rotPathE = Number(L.rotation.toFixed(5));
		o.orient = false;
		t.calc(o, o.end, n);
		o.orient = a;
		if (!o.orient) {
			return r
		}
		e.__guideData = o;
		t.testRotData(e, n);
		return r
	};
	t.testRotData = function(t, e) {
		if (t.__rotGlobalS === undefined || t.__rotGlobalE === undefined) {
			if (t.__needsRot) {
				return
			}
			if (t._curQueueProps.rotation !== undefined) {
				t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation
			} else {
				t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0
			}
		}
		if (t.__guideData === undefined) {
			return
		}
		var i = t.__guideData;
		var s = t.__rotGlobalE - t.__rotGlobalS;
		var r = t.__rotPathE - t.__rotPathS;
		var n = s - r;
		if (i.orient == "auto") {
			if (n > 180) {
				n -= 360
			} else if (n < -180) {
				n += 360
			}
		} else if (i.orient == "cw") {
			while (n < 0) {
				n += 360
			}
			if (n == 0 && s > 0 && s != 180) {
				n += 360
			}
		} else if (i.orient == "ccw") {
			n = s - (r > 180 ? 360 - r : r);
			while (n > 0) {
				n -= 360
			}
			if (n == 0 && s < 0 && s != -180) {
				n -= 360
			}
		}
		i.rotDelta = n;
		i.rotOffS = t.__rotGlobalS - t.__rotPathS;
		t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = undefined
	};
	t.tween = function(e, i, s, r, n, a, o, h) {
		var c = n.guide;
		if (c == undefined || c === r.guide) {
			return s
		}
		if (c.lastRatio != a) {
			var u = (c.end - c.start) * (o ? c.end : a) + c.start;
			t.calc(c, u, e.target);
			switch (c.orient) {
			case "cw":
			case "ccw":
			case "auto":
				e.target.rotation += c.rotOffS + c.rotDelta * a;
				break;
			case "fixed":
			default:
				e.target.rotation += c.rotOffS;
				break
			}
			c.lastRatio = a
		}
		if (i == "rotation" && (!c.orient || c.orient == "false")) {
			return s
		}
		return e.target[i]
	};
	t.calc = function(e, i, s) {
		if (e._segments == undefined) {
			t.validate(e)
		}
		if (s == undefined) {
			s = {
				x: 0,
				y: 0,
				rotation: 0
			}
		}
		var r = e._segments;
		var n = e.path;
		var a = e._length * i;
		var o = r.length - 2;
		var h = 0;
		while (a > r[h] && h < o) {
			a -= r[h];
			h += 2
		}
		var c = r[h + 1];
		var u = 0;
		o = c.length - 1;
		while (a > c[u] && u < o) {
			a -= c[u];
			u++
		}
		var l = u / ++o + a / (o * c[u]);
		h = h * 2 + 2;
		var d = 1 - l;
		s.x = d * d * n[h - 2] + 2 * d * l * n[h + 0] + l * l * n[h + 2];
		s.y = d * d * n[h - 1] + 2 * d * l * n[h + 1] + l * l * n[h + 3];
		if (e.orient) {
			s.rotation = 57.2957795 * Math.atan2((n[h + 1] - n[h - 1]) * d + (n[h + 3] - n[h + 1]) * l, (n[h + 0] - n[h - 2]) * d + (n[h + 2] - n[h + 0]) * l)
		}
		return s
	};
	createjs.MotionGuidePlugin = t
})();
this.createjs = this.createjs || {};
(function() {
	"use strict";
	var t = createjs.TweenJS = createjs.TweenJS || {};
	t.version = "0.6.0";
	t.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
})();
this.comp = this.comp || {};
(function() {
	function t(t, e, i, s) {
		this.Container_constructor();
		this._sprite;
		this._current;
		this._normal;
		this._pressed;
		this.useBg = s;
		this._bg;
		this._callback;
		this._scope;
		this._params;
		this.reactDelay = 50;
		this._py = 5;
		this.setup(t, e, i)
	}
	var e = createjs.extend(t, createjs.Container);
	t.STATE_NORMAL = "normal";
	t.STATE_PRESSED = "pressed";
	e.setup = function(e, i, s) {
		this._current = t.STATE_NORMAL;
		this._sprite = new createjs.Sprite(e);
		this.addChild(this._sprite);
		this._normal = i;
		this._pressed = s || this._normal;
		this.setState(this._current);
		if (this.useBg) {
			this._bg = new createjs.Shape;
			var r = this.getBounds();
			this._bg.graphics.beginFill("white").drawRect(0, 0, r.width, r.height);
			this._bg.cache(0, 0, r.width, r.height);
			this.hitArea = this._bg
		}
		this.mouseChildren = false;
		this.on("mousedown", this.onPressed);
		this.on("pressup", this.onReleased);
		this.on("click", this.onClick)
	};
	e.onPressed = function(e) {
		this.setState(t.STATE_PRESSED)
	};
	e.onReleased = function(e) {
		this.setState(t.STATE_NORMAL)
	};
	e.onClick = function(e) {
		this.setState(t.STATE_NORMAL);
		createjs.Tween.get(this, {
			override: true
		}).wait(this.reactDelay).call(this._callback, this._params, this._scope)
	};
	e.initCallback = function(t, e) {
		this._callback = t;
		this._scope = e;
		var i = [];
		for (var s = 2; s < arguments.length; s++) {
			i[s - 2] = arguments[s]
		}
		this._params = i
	};
	e.setState = function(e) {
		if (e == t.STATE_NORMAL) {
			this._sprite.gotoAndStop(this._normal);
			this._sprite.y = 0
		} else {
			this._sprite.gotoAndStop(this._pressed);
			this._sprite.y = this._py
		}
	};
	comp.Button = createjs.promote(t, "Container")
})();
this.comp = this.comp || {};
(function() {
	function t() {
		this.Container_constructor();
		this.setup()
	}
	var e = createjs.extend(t, createjs.Container);
	e.setup = function() {
		var t;
		var e = new createjs.Sprite(g.texture, "title");
		t = e.getBounds();
		e.set({
			x: (g.w - t.width) / 2,
			y: 200
		});
		this.addChild(e);
		var i = new comp.Button(g.texture, "btn_start", "btn_start");
		i.initCallback(g.onNotifications, g, "button_start");
		t = i.getBounds();
		i.set({
			x: (g.w - t.width) / 2,
			y: 522
		});
		this.addChild(i);
		var s = new createjs.Sprite(g.texture, "bot");
		t = s.getBounds();
		s.set({
			x: (g.w - t.width) / 2,
			y: g.h - t.height
		});
		this.addChild(s)
	};
	e.fade = function() {
		if (this.parent) this.parent.removeChild(this)
	};
	comp.Cover = createjs.promote(t, "Container")
})();
this.comp = this.comp || {};
createjs.Sprite.prototype.snapToPixel = true;
(function() {
	var t = function() {
			this.initialize();
			this.canTap = false;
			this.running = false
		};
	t.InitLine;
	t.MissLine;
	t.CycleLine;
	var e = t.prototype = new createjs.Container;
	e.Container_initialize = e.initialize;
	e.initialize = function() {
		this.Container_initialize();
		var t = new createjs.Tween
	};
	e.enter = function() {
		this.canTap = false;
		this.running = false;
		t.InitLine = g.h - 2 * g.config.divY;
		t.MissLine = g.h;
		t.CycleLine = g.h + 2 * g.config.divY;
		for (var e = 0; e < g.config.rowCount; e++) {
			var i = comp.RowKeys.get();
			i.y = -g.config.divY;
			this.addChildAt(i, 0);
			i.layout(e);
			createjs.Tween.get(i).wait(e * 50).to({
				y: t.InitLine - e * g.config.divY
			}, 300, createjs.Ease.sineOut)
		}
		createjs.Tween.get(this).wait(e * 50 + 300).set({
			canTap: true
		}, this)
	};
	e.clear = function() {
		this.removeAllChildren();
		this.y = 0;
		this.canTap = false
	};
	comp.Grids = t
})();
(function() {
	var t = function() {
			this.initialize();
			this.rowIndex;
			this.clicked;
			this.correctKey;
			this.correctCol;
			this.incorrectKey;
			this.inccorectCol
		};
	var e = t.prototype = new createjs.Container;
	e.Container_initialize = e.initialize;
	e.initialize = function() {
		this.Container_initialize();
		this.clicked = false;
		this.correctKey = new createjs.Sprite(g.texture, "correct_normal");
		this.correctNote = new createjs.Bitmap(g.l.getResult("note"));
		this.incorrectKey = new createjs.Sprite(g.texture, "incorrect_normal")
	};
	e.layout = function(t) {
		this.removeAllChildren();
		this.incorrectCol = this.correctCol = -1;
		this.incorrectKey.gotoAndStop("incorrect_normal");
		createjs.Tween.removeTweens(this.correctKey);
		this.correctKey.alpha = 1;
		this.correctKey.gotoAndStop("correct_normal");
		this.clicked = false;
		this.rowIndex = t;
		var e = may.Arrays.disorder(Math.random() > .5 && Math.random() * 300 < t ? [2, 1, 0, 0] : [2, 0, 0, 0]);
		for (var i = 0; i < e.length; i++) {
			if (e[i] == 2) {
				this.addChild(this.correctKey);
				this.correctCol = i;
				this.correctKey.x = i * g.config.divX
			} else if (e[i] == 1) {
				this.addChild(this.incorrectKey);
				this.incorrectCol = i;
				this.incorrectKey.x = i * g.config.divX
			}
		}
	};
	e.correctAnimation = function() {
		this.clicked = true;
		this.addChildAt(this.correctNote, 0);
		this.correctNote.x = this.correctKey.x + 45;
		this.correctNote.y = this.correctKey.y + 52;
		createjs.Tween.get(this.correctKey, {
			override: true
		}).to({
			alpha: 0
		}, 200)
	};
	e.getKeyByCol = function(e) {
		var i;
		if (e == this.incorrectCol) {
			i = this.incorrectKey;
			i.gotoAndStop("incorrect_pressed")
		} else {
			i = t.getShape();
			this.addChild(i);
			i.x = e * g.config.divX
		}
		return i
	};
	t._pools = [];
	t._cachedShape;
	t.getShape = function() {
		if (!this._cachedShape) {
			this._cachedShape = new createjs.Shape;
			this._cachedShape.graphics.clear().beginFill("red").drawRoundRect(0, 0, g.config.divX, g.config.divY, 15).endFill();
			this._cachedShape.cache(0, 0, g.config.divX, g.config.divY)
		}
		this._cachedShape.alpha = 1;
		return this._cachedShape
	};
	t.get = function() {
		return this._pools.length ? this._pools.push() : new t
	};
	t.retrieve = function(t) {
		if (t.parent) t.parent.removeChild(t);
		this._pools.push(t)
	};
	comp.RowKeys = t
})();
this.comp = this.comp || {};
(function() {
	function t() {
		this.Container_constructor();
		this.setup()
	}
	var e = createjs.extend(t, createjs.Container);
	e.setup = function() {
		var t = new createjs.Shape;
		t.graphics.clear().beginFill("black").drawRect(0, 0, g.w, g.h).endFill();
		t.cache(0, 0, g.w, g.h);
		t.alpha = .5;
		this.addChild(t);
		var e = new createjs.Sprite(g.texture, "hint");
		var i = e.getBounds();
		e.set({
			x: (g.w - i.width) / 2,
			y: (g.h - i.height) / 2
		});
		this.addChild(e)
	};
	e.enter = function() {
		g.obj.main.addChild(this);
		this.alpha = 0;
		createjs.Tween.get(this, {
			override: true
		}).to({
			alpha: 1
		}, 500, createjs.Ease.sineOut)
	};
	e.fade = function() {
		if (this.parent) this.parent.removeChild(this)
	};
	comp.Hint = createjs.promote(t, "Container")
})();
var g = {
	w: 640,
	h: 1136,
	obj: {
		stage: null,
		main: null,
		bg: null,
		cover: null,
		hint: null,
		grids: null,
		scoreTF: null,
		scoreText: null,
		fpsText: null,
		vText: null
	},
	highest: 0,
	isAndroid: false,
	l: null,
	texture: null,
	config: {
		fps: 60,
		debug: false,
		grading: [0, 100, 200],
		rowCount: 10,
		divX: 160,
		divY: 160,
		scrollVy: 300,
		scrollAy: 4
	},
	music: [
		[25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23, 24, 23, 22, 21, 17, 21, 22, 23, 21, 22, 25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23, 24, 23, 22, 21, 22, 23, 22, 21, 17, 21],
		[23, 22, 21, 17, 16, 15, 16, 17, 21, 17, 16, 15, 14, 13, 14, 12, 21, 17, 21, 11, 7, 15, 12, 13, 11, 21, 17, 16, 17, 23, 25, 26, 24, 23, 22, 24, 24, 23, 21, 17, 16, 15, 14, 13, 12, 14, 13, 12, 11, 12, 13, 14, 15, 12, 15, 14, 13, 16, 15, 14, 15, 14, 13, 12, 11, 6, 16, 17, 21, 17, 16, 15, 14, 13, 12, 16, 15, 16, 15, 14, 13, 23, 22, 21, 22, 21, 23, 22, 24, 25, 23, 24, 25, 23, 24, 25, 15, 16, 17, 21, 22, 23, 24, 23, 21, 22, 23, 13, 14, 15, 16, 15, 14, 15, 13, 14, 15, 14, 16, 15, 14, 13, 12, 13, 12, 11, 12, 13, 14, 15, 16, 14, 16, 15, 16, 17, 21, 15, 16, 17, 21, 22, 23, 24, 25, 23, 21, 22, 23, 22, 21, 22, 17, 21, 22, 23, 22, 21, 17, 21, 16, 17, 21, 11, 12, 13, 14, 13, 12, 13, 21, 17, 21, 16, 21, 17, 16, 15, 14, 15, 14, 13, 14, 15, 16, 17, 11, 16, 21, 17, 21, 17, 16, 17, 21, 22, 21, 17, 21, 16, 17, 23, 13, 14, 13, 12, 22, 23, 22, 21, 13, 11, 16, 15, 5, 4, 5, 6, 16, 17, 16, 17, 5, 4, 5, 6, 16, 15, 16, 17, 17, 16, 17, 11, 21, 22, 21, 17, 7, 11, 7, 6, 16, 15, 16, 17, 7, 13, 12, 11, 21, 22, 24, 23, 13, 15, 23, 21, 24, 23, 24, 22, 15, 14, 15, 13, 21, 17, 21, 13, 15, 15, 16, 17, 15, 13, 21, 22, 23, 21, 23, 23, 22, 21, 17, 16, 16, 15, 16, 17, 21, 23, 22, 21, 23]
	],
	steps: {
		cover: "cover",
		hint: "hint",
		game: "game",
		wait: "wait"
	},
	played: false,
	status: {},
	init: function() {
		g.isAndroid = createjs.BrowserDetect.isAndroid;
		var t = g.isAndroid ? {
			w: 320,
			h: 568
		} : {
			w: 640,
			h: 1136
		};
		var e = document.getElementById("gameCanvas");
		e.width = t.w;
		e.height = t.h;
		may.Utils.addCanvasResize("gameCanvas", t.w, t.h);
		g.l = new createjs.LoadQueue(true, window["meiriq_game"].resourceCDN + "resource/assets/");
		g.l.on("complete", g.assetsReady);
		g.l.installPlugin(createjs.Sound);
		var i = [1];
		for (var s = 0; s < g.music.length; s++) {
			var r = g.music[s];
			for (var n = 0; n < r.length; n++) if (i.indexOf(r[n]) == -1) i.push(r[n])
		}
		for (var a = 0; a < i.length; a++) i[a] = {
			src: "mp3/sound_" + i[a] + ".mp3",
			id: "snd_" + i[a]
		};
		var o = [{
			src: "images/bg.png",
			type: "image",
			id: "bg"
		}, {
			src: "images/note.png",
			type: "image",
			id: "note"
		}, {
			src: "images/num_sheet.json",
			type: "spritesheet",
			id: "num_sheet"
		}, {
			src: "images/game_sheet.json",
			type: "spritesheet",
			id: "game_sheet"
		}];
		o = o.concat(i);
		g.l.loadManifest(o)
	},
	assetsReady: function(t) {
		g.l.off("complete", g.assetsReady);
		g.createWorld()
	},
	createWorld: function() {
		g.obj.stage = new createjs.Stage("gameCanvas");
		g.texture = g.l.getResult("game_sheet");
		g.obj.main = new createjs.Container;
		g.obj.stage.addChild(g.obj.main);
		g.obj.main.scaleX = g.obj.main.scaleY = g.isAndroid ? .5 : 1;
		g.obj.bg = new createjs.Bitmap(g.l.getResult("bg"));
		g.obj.main.addChild(g.obj.bg);
		g.obj.cover = new comp.Cover;
		g.obj.hint = new comp.Hint;
		g.obj.grids = new comp.Grids;
		g.obj.grids.x = 0;
		g.obj.main.addChild(g.obj.grids);
		var t = g.l.getResult("num_sheet");
		var e = new createjs.BitmapText("0", t);
		var i = e.getBounds();
		e.x = g.w - i.width >> 1;
		e.y = 20;
		g.obj.scoreTF = e;
		g.obj.scoreText = new createjs.Text("0", "50px Helvetica", "#F00");
		g.obj.scoreText.textBaseline = "top";
		g.obj.scoreText.textAlign = "center";
		g.obj.scoreText.x = 320;
		g.obj.scoreText.y = 10;
		g.obj.fpsText = new createjs.Text("FPS:", "50px Arial", "#F00");
		g.obj.fpsText.textBaseline = "top";
		g.obj.fpsText.textAlign = "left";
		g.obj.fpsText.x = 10;
		g.obj.fpsText.y = 60;
		g.obj.vText = new createjs.Text("Current Velocity:", "50px Arial", "#F00");
		g.obj.vText.textBaseline = "top";
		g.obj.vText.textAlign = "left";
		g.obj.vText.x = 10;
		g.obj.vText.y = 110;
		if (g.config.debug) {
			g.obj.main.addChild(g.obj.scoreText);
			g.obj.main.addChild(g.obj.fpsText);
			g.obj.main.addChild(g.obj.vText);
			document.onkeydown = createjs.proxy(g.onDebugControl, g)
		}
		createjs.Touch.enable(g.obj.stage, true);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.setFPS(60);
		createjs.Ticker.on("tick", g.onTick);
		g.obj.stage.on("stagemousedown", g.onTapDown);
		g.obj.stage.snapToPixelEnabled = true;
		g.reset();
		g.obj.stage.update();
		window["meiriq_game"].cb_finishload();
		window["home"] = g.reset;
		window["pause"] = g.pause;
		window["resume"] = g.resume;
		window["home_context"] = g;
		window["pause_context"] = g;
		window["resume_context"] = g
	},
	onDebugControl: function(t) {
		if (!e) {
			var e = window.event
		}
		switch (e.keyCode) {
		case 32:
			createjs.Ticker.paused ? this.resume() : this.pause();
			break;
		case 13:
			this.reset();
			break;
		case 78:
			this.dispatchEvent(new createjs.Event(g.Events.LEVEL_PASSED));
			break
		}
		t.preventDefault()
	},
	pause: function() {
		createjs.Ticker.paused = true;
		g.obj.stage.mouseChildren = false
	},
	resume: function() {
		createjs.Ticker.paused = false;
		g.obj.stage.mouseChildren = true
	},
	reset: function() {
		g.status = {
			step: g.steps.cover,
			music: may.Arrays.random(g.music),
			noteIndex: 0,
			score: 0,
			distY: 0,
			keyCount: 0,
			currentVy: g.config.scrollVy,
			vy: g.config.scrollVy
		};
		g.updateScoreText();
		createjs.Tween.removeAllTweens();
		g.obj.main.removeChild(g.obj.scoreTF);
		g.obj.main.addChild(g.obj.cover);
		g.obj.hint.fade();
		g.obj.grids.clear();
		g.obj.grids.canTap = g.obj.grids.running = false
	},
	onNotifications: function(t) {
		switch (t) {
		case "button_start":
			if (!window["meiriq_game"].cb_start()) return;
			g.obj.scoreTF.y = -100;
			g.obj.main.addChild(g.obj.scoreTF);
			createjs.Tween.get(g.obj.scoreTF, {
				override: true
			}).wait(200).to({
				alpha: 1,
				y: 20
			}, 300, createjs.Ease.cubicOut);
			g.obj.cover.fade();
			g.obj.grids.enter();
			if (g.played) {
				g.status.step = g.steps.game
			} else {
				g.played = true;
				g.status.step = g.steps.hint;
				g.obj.hint.enter()
			}
			break;
		case "game_over":
			var e = 0;
			for (var i = 0; i < g.config.grading.length; i++) if (g.status.score >= g.config.grading[i]) e++;
			window["meiriq_game"].cb_gameover(g.status.score, "images/level" + e + ".png");
			break
		}
	},
	onTapDown: function(t) {
		if (createjs.Ticker.paused) return;
		if (g.status.step == g.steps.hint) {
			g.obj.hint.fade();
			g.status.step = g.steps.game
		} else if (g.status.step == g.steps.game && g.obj.grids.canTap) {
			var e = g.obj.grids;
			var i = g.obj.main.globalToLocal(t.stageX, t.stageY);
			for (var s = 0; s < e.numChildren; s++) {
				var r = e.getChildAt(s);
				if (r && r.rowIndex == g.status.score) {
					g.obj.target = r;
					break
				}
			}
			if (Math.abs(i.y - (g.obj.target.y + g.config.divY / 2)) < g.config.divY) {
				var n;
				if (Math.abs(i.x - (g.obj.target.correctKey.x + g.config.divX / 2)) < g.config.divX * .75) {
					if (!e.running) e.running = true;
					g.obj.target.correctAnimation();
					g.playSound(g.status.music[g.status.noteIndex]);
					g.status.noteIndex++;
					if (g.status.noteIndex == g.status.music.length) {
						g.status.music = may.Arrays.random(g.music);
						g.status.noteIndex = 0
					}
					g.status.score++;
					g.updateScoreText()
				} else {
					e.canTap = false;
					e.running = false;
					n = Math.floor(i.x / g.config.divX);
					var a = g.obj.target.getKeyByCol(n);
					g.playSound(1);
					var o = createjs.Ease.sineInOut;
					var h = createjs.Tween.get(a).to({
						alpha: 0
					}, 150, o).to({
						alpha: 1
					}, 150, o).to({
						alpha: 0
					}, 150, o).to({
						alpha: 1
					}, 150, o).to({
						alpha: 0
					}, 150, o);
					a instanceof createjs.Shape ? h.wait(150).call(g.onNotifications, ["game_over"], g) : h.to({
						alpha: 1
					}, 150, o).call(g.onNotifications, ["game_over"], g)
				}
			}
		}
	},
	onTick: function(t) {
		if (t.paused) return;
		g.obj.fpsText.text = "FPS: " + Math.round(createjs.Ticker.getMeasuredFPS()) + ". Delta: " + Math.round(t.delta);
		g.updateGrids(t.delta / 1e3);
		g.obj.stage.update()
	},
	updateGrids: function(t) {
		var e = g.obj.grids;
		if (!e.running) return;
		g.status.vy += g.config.scrollAy * t;
		g.status.currentVy = g.status.vy;
		var i = g.status.currentVy * t;
		g.status.distY += i;
		g.status.keyCount = g.status.distY % g.config.divY;
		for (var s = 0; s < e.numChildren; s++) {
			var r = e.getChildAt(s);
			if (r) {
				r.y += i;
				if (r.y > comp.Grids.CycleLine) {
					r.y -= g.config.divY * g.config.rowCount;
					r.layout(r.rowIndex + g.config.rowCount);
					e.addChildAt(r, 0)
				} else if (r.y > comp.Grids.MissLine && r.clicked == false) {
					g.keyMissed(r)
				}
			}
		}
		g.obj.vText.text = "Current Velocity: " + Math.round(g.status.currentVy * t)
	},
	keyMissed: function(t) {
		g.obj.grids.canTap = false;
		g.obj.grids.running = false;
		g.playSound(1);
		var e = g.status.distY % g.config.divY + 2 * g.config.divY;
		var i = createjs.Ease.sineInOut;
		createjs.Tween.get(g.obj.grids).to({
			y: -1 * e
		}, 200, createjs.Ease.sineOut);
		createjs.Tween.get(t.correctKey).to({
			alpha: 0
		}, 150, i).to({
			alpha: 1
		}, 150, i).to({
			alpha: 0
		}, 150, i).to({
			alpha: 1
		}, 150, i).to({
			alpha: 0
		}, 150, i).to({
			alpha: 1
		}, 150, i).call(g.onNotifications, ["game_over"], g)
	},
	playSound: function(t) {
		if (g.isAndroid) createjs.Sound.stop();
		createjs.Sound.play("snd_" + t)
	},
	updateScoreText: function() {
		g.obj.scoreTF.text = g.status.score + "";
		var t = g.obj.scoreTF.getBounds();
		g.obj.scoreTF.x = g.w - t.width >> 1;
		g.obj.scoreText.text = g.status.score + ""
	}
};
this.may = this.may || {};
(function() {
	function t() {
		throw "Utils cannot be instantiated."
	}
	t.NO_SCALE = 0;
	t.EXACT_FIT = 1;
	t.SHOW_ALL = 2;
	t.NO_BORDER = 3;
	t.scaleMode = 0;
	t._canvas;
	t._cw;
	t._ch;
	t.addCanvasResize = function e(i, s, r, n, a) {
		t._canvas = document.getElementById(i);
		t._cw = s;
		t._ch = r;
		t.scaleMode = n == undefined ? t.isMobile() ? t.EXACT_FIT : t.SHOW_ALL : n;
		t._resizeStageEvent();
		if (a) window.addEventListener("orientationchange", t._resizeStageEvent)
	};
	t._resizeStageEvent = function() {
		var e = t._canvas;
		var i = t._cw;
		var s = t._ch;
		switch (t.scaleMode) {
		case t.EXACT_FIT:
			e.style.height = window.innerHeight + "px";
			e.style.width = window.innerWidth + "px";
			break;
		case t.SHOW_ALL:
			if (window.innerWidth / window.innerHeight > i / s) {
				e.style.height = window.innerHeight + "px";
				e.style.width = window.innerHeight * i / s + "px";
				e.style.marginTop = "0px";
				e.style.marginLeft = (window.innerWidth - window.innerHeight * i / s) / 2 + "px"
			} else {
				e.style.width = window.innerWidth + "px";
				e.style.height = window.innerWidth / (i / s) + "px";
				e.style.marginTop = (window.innerHeight - window.innerWidth / (i / s)) / 2 + "px";
				e.style.marginLeft = "0px"
			}
			break;
		case t.NO_BORDER:
			if (window.innerWidth / window.innerHeight > i / s) {
				e.style.width = window.innerWidth + "px";
				e.style.height = window.innerWidth / (i / s) + "px";
				e.style.marginTop = (window.innerHeight - window.innerWidth / (i / s)) / 2 + "px";
				e.style.marginLeft = "0px"
			} else {
				e.style.height = window.innerHeight + "px";
				e.style.width = window.innerHeight * i / s + "px";
				e.style.marginTop = "0px";
				e.style.marginLeft = (window.innerWidth - window.innerHeight * i / s) / 2 + "px"
			}
			break
		}
	};
	t.isMobile = function() {
		var t = navigator.userAgent.toLowerCase();
		var e = ["android", "iphone", "symbianos", "windows phone", "ipad", "ipod"];
		var i = false;
		for (var s = 0; s < e.length; s++) {
			if (t.indexOf(e[s]) > 0) {
				i = e[s];
				break
			}
		}
		return i
	};
	t.extractSheet = function(t) {
		var e = {};
		for (var i = 0; i < t.animations.length; i++) {
			var s = createjs.SpriteSheetUtils.extractFrame(t, i);
			e[t.animations[i]] = s;
			console.log(t.animations[i], s)
		}
		return e
	};
	t.getDefinitionName = function(t) {
		if (typeof t != "object" || t === null) return false;
		else return /(\w+)\(/.exec(t.constructor.toString())[1]
	};
	may.Utils = t
})();
(function() {
	function t() {
		throw "Interface cannot be instantiated."
	}
	t.CB_START = "cb_start";
	t.CB_GAMEOVER = "cb_gameover";
	t.CB_FINISHLOAD = "cb_finishload";
	t.CB_RESTART = "cb_restart";
	t.CB_SHARE = "cb_share";
	t.CB_MORE = "cb_more";
	t.STORAGE_KEY = "crazywheelScore";
	t.call = function(t, e) {
		var i = [];
		for (var s = 1; s < arguments.length; s++) {
			i[s - 1] = arguments[s]
		}
		if (window[t] instanceof Function) window[t].apply(null, i);
		else console.log("Try to call global function('" + t + "') but NO SUCH FUNCTION defined.")
	};
	t.saveObj = function(t) {
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(t))
	};
	t.getSavedObj = function() {
		var t;
		if (localStorage && localStorage.getItem(this.STORAGE_KEY)) t = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
		return t
	};
	may.Interface = t
})();
(function() {
	function t() {
		throw "Math cannot be instantiated."
	}
	t.formatMathDeg = function(t) {
		while (t > Math.PI) t -= 2 * Math.PI;
		while (t < -Math.PI) t += 2 * Math.PI;
		return t
	};
	t.formatRotationDeg = function(t) {
		while (t >= 2 * Math.PI) t -= 2 * Math.PI;
		while (t < 0) t += 2 * Math.PI;
		return t
	};
	t.inRadiusRange = function(t, e, i) {
		var s = true;
		t = this.formatMathDeg(t);
		e = this.formatMathDeg(e);
		i = this.formatMathDeg(i);
		if (e <= i) s = t >= e && t <= i;
		else s = t >= e && t <= Math.PI || t <= i && t >= -Math.PI;
		return s
	};
	t.randomNum = function(t, e) {
		return Math.random() * (e - t) + t
	};
	t.randomInt = function(t, e) {
		var i = Math.max(t, e) + 1;
		var s = Math.min(t, e);
		return Math.floor(this.randomNum(s, i))
	};
	t.map = function(t, e, i, s, r) {
		return (r - s) * ((t - e) / (i - e)) + s
	};
	t.distance = function(t, e, i, s) {
		return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2))
	};
	may.Maths = t
})();
(function() {
	function t() {
		throw "Arrays cannot be instantiated."
	}
	t.disorder = function(t) {
		var e = [];
		while (t.length) {
			var i = Math.floor(Math.random() * t.length);
			e.push(t[i]);
			t.splice(i, 1)
		}
		return e
	};
	t.random = function(t) {
		return t[Math.floor(t.length * Math.random())]
	};
	may.Arrays = t
})();
(function() {
	function t() {
		throw "Canvas cannot be instantiated."
	}
	t.DESIGN_RESOLUTION = {
		w: 640,
		h: 1136
	};
	t.SHOW_ALL = "show_all";
	t.EXACT_FIT = "exact_fit";
	t.init = function(e, i, s) {
		s = s || t.EXACT_FIT;
		var r = {};
		r.w = i;
		r.h = this.DESIGN_RESOLUTION.h * i / this.DESIGN_RESOLUTION.w;
		var n = {};
		n.w = window.innerWidth || document.body.clientWidth;
		n.h = window.innerHeight || document.body.clientHeight;
		var a, o;
		a = r.w / r.h;
		o = n.w / n.h;
		var h = document.getElementById(e);
		var c, u;
		if (s == this.SHOW_ALL) {
			if (a <= o) {
				u = r.h;
				c = o * u
			} else {
				c = r.w;
				u = c / o
			}
			h.width = c;
			h.height = u;
			h.style.width = n.w + "px";
			h.style.height = n.h + "px"
		} else {
			c = r.w;
			u = r.h;
			h.width = c;
			h.height = u;
			h.style.width = r.w + "px";
			h.style.height = r.h + "px"
		}
		return h
	};
	may.Canvas = t
})();
(function() {
	function t() {
		throw "Alignment cannot be instantiated."
	}
	t.SHOW_ALL = "show_all";
	t.NO_BORDER = "no_border";
	t.EXACT_FIT = "exact_fit";
	t.set = function(t, e, i, s, r, n) {
		var a = s / r;
		var o = e / i;
		n = n || this.EXACT_FIT;
		switch (n) {
		case this.EXACT_FIT:
			t.x = t.y = 0;
			t.scaleX = s / e;
			t.scaleY = r / i;
			break;
		case this.SHOW_ALL:
			if (a > o) {
				t.scaleX = t.scaleY = r / i;
				t.x = (s - e * t.scaleX) * .5;
				t.y = 0
			} else {
				t.scaleY = t.scaleX = s / e;
				t.y = (r - i * t.scaleY) * .5;
				t.x = 0
			}
			break;
		case this.NO_BORDER:
			if (a > o) {
				t.scaleY = t.scaleX = s / e;
				t.y = (r - i * t.scaleY) * .5;
				t.x = 0
			} else {
				t.scaleX = t.scaleY = r / i;
				t.x = (s - e * t.scaleX) * .5;
				t.y = 0
			}
			break
		}
	};
	may.Alignment = t
})();