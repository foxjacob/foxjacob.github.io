var jsGame = window.jsGame || {},
	_jsGameEval;
(function() {
	_jsGameEval = window.eval;
	window.eval = function(e) {
		if (e.indexOf("jsGame") < 0) return _jsGameEval(e)
	};
	var a = {
			canvas: {
				id: "jsGameScreen",
				defaultId: "jsGameScreen",
				defaultFont: "12px Arial",
				defaultWidth: 240,
				defaultHeight: 320,
				defaultColor: "rgb(0, 0, 0)",
				bgColor: "#6A6A6A",
				ctxs: [],
				device: "",
				fps: 1,
				touch: false,
				zoom: 1
			},
			system: {
				loadRes: null,
				pageLoad: null,
				menu: null,
				run: null,
				runFn: null,
				stop: null,
				over: null,
				zone: null,
				active: null,
				timeout: 30,
				isPause: false,
				gameFlow: 0,
				zoneArgs: null,
				activeArgs: null,
				spendTime: 0
			},
			event: {
				key: 0,
				keys: {
					up: false,
					down: false,
					left: false,
					right: false,
					a: false,
					b: false,
					c: false,
					menu: false,
					quit: false
				},
				lastKey: {
					up: false,
					down: false,
					left: false,
					right: false,
					a: false,
					b: false,
					c: false,
					menu: false,
					quit: false
				},
				pressedKey: {
					up: false,
					down: false,
					left: false,
					right: false,
					a: false,
					b: false,
					c: false,
					menu: false,
					quit: false
				},
				keyPressCtrl: {
					up: true,
					down: true,
					left: true,
					right: true,
					a: true,
					b: true,
					c: true,
					menu: true,
					quit: true
				},
				keyDownGo: false,
				keyUpGo: false,
				keyPressedGo: false,
				keyDownCallBack: null,
				keyUpCallBack: null,
				orientationChange: null,
				touchStart: null,
				touchEnd: null,
				touchMove: null,
				touchCancel: null,
				clickCallBack: null,
				mouseDownCallBack: null,
				mouseUpCallBack: null,
				mouseMoveCallBack: null
			},
			image: {
				imgs: [],
				imgObjs: [],
				imgCount: 0,
				countLoaded: 0,
				reCountLoaded: 0,
				loadImgId: "jsGameLoadImg",
				loadedImg: false,
				loadFrame: [],
				tips: ["加载需要一点时间", "多泡游戏快乐你我他", "与朋友分享你的快乐", "按#键返回社区先玩玩", "长按#键强制退出游戏"],
				tip: "",
				tipIndex: 0,
				tipSkip: 0
			},
			audio: {
				audios: []
			},
			ajax: {
				xhrObj: null,
				pool: [],
				poolLength: 5,
				date: new Date,
				isTimeout: false,
				param: {
					type: "get",
					data: null,
					dataType: "html",
					url: "",
					timeout: 5e3,
					before: function() {},
					success: function() {},
					error: function() {},
					complete: function() {}
				}
			},
			request: {
				gets: []
			}
		},
		f = {
			canvas: {
				context: {
					base: 0
				},
				graphics: {
					HCENTER: 1,
					VCENTER: 2,
					LEFT: 4,
					RIGHT: 8,
					TOP: 16,
					BOTTOM: 32,
					ANCHOR_LT: 20,
					ANCHOR_LV: 6,
					ANCHOR_LB: 36,
					ANCHOR_HT: 17,
					ANCHOR_HV: 3,
					ANCHOR_HB: 33,
					ANCHOR_RT: 24,
					ANCHOR_RV: 10,
					ANCHOR_RB: 40
				},
				trans: {
					TRANS_MIRROR: 2,
					TRANS_NONE: 0,
					TRANS_ROT90: 5,
					TRANS_ROT180: 3,
					TRANS_ROT270: 6,
					TRANS_MIRROR_ROT90: 7,
					TRANS_MIRROR_ROT180: 1,
					TRANS_MIRROR_ROT270: 4
				}
			},
			event: {
				key: {
					up: 38,
					down: 40,
					left: 37,
					right: 39,
					a: 90,
					b: 88,
					c: 67,
					menu: -6,
					quit: -7,
					pcmenu: 49,
					pcquit: 50
				}
			},
			system: {
				gameFlowType: {
					menu: 0,
					run: 1,
					stop: 2,
					over: 3,
					zone: 4,
					active: 5,
					loadImage: 6
				}
			}
		},
		m = {
			keydown: function(e) {
				var t = m.checkKey(e.keyCode);
				if (a.event.keyDownGo)
					if (a.event.keys[t] != undefined) a.event.keys[t] = true;
				if (a.event.keyUpGo)
					if (a.event.lastKey[t] != undefined) a.event.lastKey[t] = false;
				if (a.event.keyPressCtrl[t] && a.event.keyPressedGo) {
					if (a.event.pressedKey[t] != undefined) a.event.pressedKey[t] = true;
					a.event.keyPressCtrl[t] = false
				}
				a.event.keyDownCallBack != null && a.event.keyDownCallBack(e)
			},
			keyup: function(e) {
				var t = m.checkKey(e.keyCode);
				if (a.event.keyDownGo)
					if (a.event.keys[t] != undefined) a.event.keys[t] = false;
				if (a.event.keyUpGo)
					if (a.event.lastKey[t] != undefined) a.event.lastKey[t] = true;
				if (a.event.keyPressedGo) {
					if (a.event.pressedKey[t] != undefined) a.event.pressedKey[t] = false;
					a.event.keyPressCtrl[t] = true
				}
				a.event.keyUpCallBack != null && a.event.keyUpCallBack(e)
			},
			orientationchange: function(e) {
				a.event.orientationChange != null && a.event.orientationChange(e)
			},
			touchstart: function(e) {
				e.preventDefault();
				a.event.touchStart != null && a.event.touchStart(e)
			},
			touchend: function(e) {
				a.event.touchEnd != null && a.event.touchEnd(e)
			},
			touchmove: function(e) {
				e.preventDefault();
				a.event.touchMove != null && a.event.touchMove(e)
			},
			touchcancel: function(e) {
				a.event.touchCancel != null && a.event.touchCancel(e)
			},
			click: function(e) {
				a.event.clickCallBack != null && a.event.clickCallBack(e)
			},
			mouseDown: function(e) {
				a.event.mouseDownCallBack != null && a.event.mouseDownCallBack(e)
			},
			mouseUp: function(e) {
				a.event.mouseUpCallBack != null && a.event.mouseUpCallBack(e)
			},
			mouseMove: function(e) {
				a.event.mouseMoveCallBack != null && a.event.mouseMoveCallBack(e)
			},
			checkKey: function(e) {
				var t = "0";
				switch (e) {
					case f.event.key.up:
						t = "up";
						break;
					case f.event.key.down:
						t = "down";
						break;
					case f.event.key.left:
						t = "left";
						break;
					case f.event.key.right:
						t = "right";
						break;
					case f.event.key.a:
						t = "a";
						break;
					case f.event.key.b:
						t = "b";
						break;
					case f.event.key.c:
						t = "c";
						break;
					case f.event.key.menu:
						t = "menu";
						break;
					case f.event.key.quit:
						t = "quit";
						break;
					case f.event.key.pcmenu:
						t = "menu";
						break;
					case f.event.key.pcquit:
						t = "quit"
				}
				return t
			},
			getDeviceConfig: function() {
				return navigator.userAgent.toLowerCase().indexOf("iphone") != -1 || navigator.userAgent.toLowerCase().indexOf("ipod") != -1 ? {
					device: "iphone",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("duopaoandroid") != -1 ? {
					device: "duopaoAndroid",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("duopaowindowsphone") != -1 ? {
					device: "duopaoWindowsPhone",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("android") != -1 ? {
					device: "android",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("ipad") != -1 ? {
					device: "ipad",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("j2me") != -1 ? {
					device: "j2me",
					fps: 1,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("symbian v5") != -1 ? {
					device: "symbian5",
					fps: 1,
					touch: true,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("symbian v3") != -1 ? {
					device: "symbian3",
					fps: 1,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("chrome") != -1 ? {
					device: "chrome",
					fps: 1,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("msie") != -1 ? {
					device: "ie",
					fps: .5,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("safari") != -1 ? {
					device: "safari",
					fps: 1,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("opera") != -1 ? {
					device: "opera",
					fps: 1,
					touch: false,
					zoom: 1
				} : navigator.userAgent.toLowerCase().indexOf("gecko") != -1 ? {
					device: "firefox",
					fps: 1,
					touch: false,
					zoom: 1
				} : {
					device: "",
					fps: 1,
					touch: false,
					zoom: 1
				}
			},
			loadImages: function(e, t) {
				if (parseInt(a.image.reCountLoaded) < parseInt(a.image.imgObjs.length * .3)) a.image.reCountLoaded += .1;
				var n = jsGame.canvas.screen.getWidth(),
					r = jsGame.canvas.screen.getHeight(),
					i = (n - 200) / 2,
					s = r - 40;
				e = parseInt(a.image.reCountLoaded) > e ? parseInt(a.image.reCountLoaded) : e;
				e = e > t ? t : e;
				jsGame.canvas.fillStyle(a.canvas.bgColor).fillRect(0, 0, n, r).strokeRect(i, s, 200, 5).fillStyle("#FFFFFF").fillRect(i + 1, s + 1, e / t * 198, 3);
				if (a.image.loadedImg) {
					n = (n - 130) / 2;
					r = (r - 100) / 2;
					jsGame.canvas.drawImage(a.image.loadImgId, 45, 21, 79, 13, n + 51, r + 15, 79, 13).drawImage(a.image.loadImgId, 0, 46, 107, 12, n + 12, r + 70, 107, 12);
					for (i = 0; i < a.image.loadFrame.length; i++) {
						jsGame.canvas.drawImage(a.image.loadImgId, 47 + a.image.loadFrame[i].frames[a.image.loadFrame[i].step++] * 7, 3, 7, 7, n + a.image.loadFrame[i].x, r + a.image.loadFrame[i].y, 7, 7);
						a.image.loadFrame[i].step %= a.image.loadFrame[i].frames.length
					}
				} else jsGame.canvas.drawString("加载中", 0, parseInt(r / 2), jsGame.graphics.VCENTER, true, "#FFFFFF", "#000000");
				if (a.image.tipSkip == 2 * parseInt(1e3 / a.system.timeout)) {
					a.image.tipSkip = 0;
					a.image.tipIndex++;
					a.image.tipIndex %= a.image.tips.length;
					a.image.tip = a.image.tips[a.image.tipIndex];
					jsGame.canvas.fillStyle(a.canvas.bgColor).fillRect(0, 230, jsGame.canvas.screen.getWidth(), 35)
				}
				jsGame.canvas.drawString(a.image.tip, 0, jsGame.canvas.screen.getHeight() - 65, jsGame.graphics.VCENTER, true, "#FFFFFF", "#000000");
				a.image.tipSkip++
			},
			initImageCallBack: null,
			loadImageCallBack: null,
			getAnchor: function(e, t, n, r, i) {
				switch (i) {
					case f.canvas.graphics.ANCHOR_HV:
						e -= parseInt(n / 2);
						t -= parseInt(r / 2);
						break;
					case f.canvas.graphics.ANCHOR_LV:
						t -= parseInt(r / 2);
						break;
					case f.canvas.graphics.ANCHOR_RV:
						e -= n;
						t -= parseInt(r / 2);
						break;
					case f.canvas.graphics.ANCHOR_HT:
						e -= parseInt(n / 2);
						break;
					case f.canvas.graphics.ANCHOR_RT:
						e -= n;
						break;
					case f.canvas.graphics.ANCHOR_HB:
						e -= parseInt(n / 2);
						t -= r;
						break;
					case f.canvas.graphics.ANCHOR_LB:
						t -= r;
						break;
					case f.canvas.graphics.ANCHOR_RB:
						e -= n;
						t -= r
				}
				return {
					x: e,
					y: t
				}
			},
			initUrlParams: function(e) {
				if (e.indexOf("?") >= 0) {
					var t = e.split("?");
					e = [];
					if (t[1].indexOf("&") >= 0) e = t[1].split("&");
					else e.push(t[1]);
					t = [];
					for (var n = 0; n < e.length; n++)
						if (e[n].indexOf("=") >= 0) {
							t = e[n].split("=");
							a.request.gets[t[0]] = t[1]
						}
				}
			}
		};
	jsGame = {
		init: function() {
			this.version = 1.5;
			this.request.init();
			this.events.init();
			return this
		},
		extend: function(e, t) {
			e.prototype = t.prototype;
			return e.prototype.constructor = e
		},
		error: function(e) {
			throw Error(e)
		},
		ajax: function(e) {
			e && a.ajax.pool.length < a.ajax.poolLength && a.ajax.pool.push(e);
			if (e && e.clear) a.ajax.pool = [];
			if (a.ajax.xhrObj == null && a.ajax.pool.length > 0) {
				a.ajax.xhrObj = this.objExtend(a.ajax.param, a.ajax.pool.shift() || {});
				a.ajax.xhrObj.type = a.ajax.xhrObj.type.toUpperCase();
				a.ajax.xhrObj.dataType = a.ajax.xhrObj.dataType.toUpperCase();
				a.ajax.xhrObj.xhr = jsGame.classes.getAjax();
				a.ajax.date = new Date;
				a.ajax.isTimeout = false;
				a.ajax.xhrObj.xhr.onreadystatechange = function() {
					if (a.ajax.isTimeout) return false;
					if (a.ajax.xhrObj.xhr.readyState == 4) {
						if (a.ajax.xhrObj.xhr.status == 200) {
							var e;
							switch (a.ajax.xhrObj.dataType) {
								default: e = a.ajax.xhrObj.xhr.responseText;
								break;
								case "JSON":
										e = jsGame.getJson(a.ajax.xhrObj.xhr.responseText)
							}
							a.ajax.xhrObj.success(e);
							a.ajax.xhrObj.complete()
						} else a.ajax.xhrObj.error(a.ajax.xhrObj.xhr, "" + ("[error: " + a.ajax.xhrObj.xhr.status + "]"), a.ajax.xhrObj.xhr.status);
						a.ajax.xhrObj = null;
						jsGame.ajax()
					}
				};
				a.ajax.xhrObj.xhr.open(a.ajax.xhrObj.type, a.ajax.xhrObj.url, true);
				a.ajax.xhrObj.before(a.ajax.xhrObj.xhr);
				a.ajax.xhrObj.type == "POST" && a.ajax.xhrObj.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
				a.ajax.xhrObj.xhr.send(a.ajax.xhrObj.data)
			}
		},
		getDom: function(e) {
			try {
				return document.getElementById(e)
			} catch (t) {
				return document.all[e]
			}
		},
		objExtend: function() {
			var e = this.clone(arguments[0]) || {},
				t = 1,
				n = arguments.length,
				r = false,
				i;
			if (typeof e === "boolean") {
				r = e;
				e = arguments[1] || {};
				t = 2
			}
			if (typeof e !== "object") e = {};
			if (n == t) {
				e = this;
				--t
			}
			for (; t < n; t++)
				if ((i = arguments[t]) != null)
					for (var s in i) {
						var o = e[s],
							u = i[s];
						if (e !== u)
							if (r && u && typeof u === "object" && !u.nodeType) e[s] = this.objExtend(r, o || (u.length != null ? [] : {}), u);
							else if (u !== undefined) e[s] = u
					}
				return e
		},
		getJson: function(b) {
			try {
				return eval("(" + b + ")")
			} catch (c) {
				return {}
			}
		},
		clone: function(e) {
			var t = [];
			e = e || [];
			if (typeof e == "object")
				if (e.length)
					for (var n = 0; n < e.length; n++)
						if (e[n].length && e[n].length > 0) {
							t[n] = [];
							for (var r = 0; r < e[n].length; r++) t[n][r] = e[n][r]
						} else t[n] = e[n];
			else
				for (n in e) t[n] = e[n];
			return t
		},
		classes: {
			getAjax: function() {
				return new XMLHttpRequest
			},
			observer: function() {
				this.group = [];
				this.register = function(e) {
					if (e == null) return this;
					jsGame.commandFuns.inArray(e, this.group) == -1 && this.group.push(e);
					return this
				};
				this.unregister = function(e) {
					if (e == null) return this;
					e = jsGame.commandFuns.inArray(e, this.group);
					e > -1 && this.group.splice(e, 1);
					return this
				};
				this.notify = function(e) {
					for (var t = 0; t < this.group.length; t++)
						if (this.group[t] != null) this.group[t](e);
					return this
				};
				this.clear = function() {
					this.group.length > 0 && this.group.splice(0, this.group.length);
					return this
				}
			},
			getImage: function() {
				return new Image
			}
		},
		commandFuns: function() {
			var e = {
				arr: [],
				len: 0,
				v: 0
			};
			return {
				registerNotify: function(e, t) {
					e != null && e.register(t)
				},
				rangeRegisterNotify: function(e, t) {
					for (var n = 0; n < t.length; n++) jsGame.commandFuns.registerNotify(e, t[n])
				},
				unRegisterNotify: function(e, t) {
					e != null && e.unregister(t)
				},
				rangeUnRegisterNotify: function(e, t) {
					for (var n = 0; n < t.length; n++) jsGame.commandFuns.unRegisterNotify(e, t[n])
				},
				getRandom: function(e, t) {
					if (t) return Math.round(Math.random() * (t - e) + e);
					else {
						var n = e;
						if (!n || n < 0) n = 0;
						return Math.round(Math.random() * n)
					}
				},
				getArray: function(t, n) {
					e.arr = [];
					e.len = t.toString().length;
					e.v = t;
					for (var r = 0; r < e.len; r++) {
						e.arr.push(e.v % 10);
						e.v = parseInt(e.v / 10)
					}
					n || e.arr.reverse();
					return e.arr
				},
				inArray: function(e, t) {
					var n, r = t.length;
					for (n = 0; n < r; n++)
						if (e == t[n]) return n;
					return -1
				},
				collisionCheck: function(e, t, n, r, i, s, o, u) {
					if (o && Math.abs(e + parseInt(n / 2) - (i + parseInt(o / 2))) < parseInt((n + o) / 2) && Math.abs(t + parseInt(r / 2) - (s + parseInt(u / 2))) < parseInt((r + u) / 2)) return true;
					return false
				},
				circleCollisionCheck: function(e, t, n, r, i, s) {
					e = Math.abs(e - r);
					t = Math.abs(t - i);
					if (Math.sqrt(e * e + t * t) < n + s) return true;
					return false
				}
			}
		}(),
		args: {
			ajax: {
				type: "get",
				data: null,
				dataType: "html",
				url: "",
				before: function() {},
				success: function() {},
				error: function(e, t, n) {
					this.error(t + "[" + n + "]")
				},
				complete: function() {}
			},
			xhr: null,
			gc: {
				collectWaitTime: 1e3
			}
		},
		localStorage: function() {
			var e, t;
			return {
				init: function() {
					e = this;
					if (!t) {
						var n;
						try {
							n = window.localStorage
						} catch (r) {}
						t = n
					}
					return e
				},
				setItem: function(n, r) {
					t.setItem(n, r);
					return e
				},
				getItem: function(e) {
					return t.getItem(e)
				},
				removeItem: function(n) {
					t.removeItem(n);
					return e
				},
				clear: function() {
					t.clear();
					return e
				},
				key: function(e) {
					return t.key(e)
				},
				getLength: function() {
					return t.length
				},
				base: function() {
					return jsGame
				}
			}
		}(),
		sessionStorage: function() {
			var e, t;
			return {
				init: function() {
					e = this;
					if (!t) {
						var n;
						try {
							n = window.sessionStorage
						} catch (r) {}
						t = n
					}
					return e
				},
				setItem: function(n, r) {
					t.setItem(n, r);
					return e
				},
				getItem: function(e) {
					return t.getItem(e)
				},
				removeItem: function(n) {
					t.removeItem(n);
					return e
				},
				clear: function() {
					t.clear();
					return e
				},
				key: function(e) {
					return t.key(e)
				},
				getLength: function() {
					return t.length
				},
				base: function() {
					return jsGame
				}
			}
		}(),
		pageLoad: function(e) {
			if (a.system.pageLoad == null) {
				a.system.pageLoad = e;
				jsGame.localStorage.init();
				jsGame.sessionStorage.init();
				jsGame.canvas.init();
				jsGame.audio.init();
				jsGame.gameFlow.init();
				jsGame.graphics.ANCHOR_LT = f.canvas.graphics.ANCHOR_LT;
				jsGame.graphics.ANCHOR_LV = f.canvas.graphics.ANCHOR_LV;
				jsGame.graphics.ANCHOR_LB = f.canvas.graphics.ANCHOR_LB;
				jsGame.graphics.ANCHOR_HT = f.canvas.graphics.ANCHOR_HT;
				jsGame.graphics.ANCHOR_HV = f.canvas.graphics.ANCHOR_HV;
				jsGame.graphics.ANCHOR_HB = f.canvas.graphics.ANCHOR_HB;
				jsGame.graphics.ANCHOR_RT = f.canvas.graphics.ANCHOR_RT;
				jsGame.graphics.ANCHOR_RV = f.canvas.graphics.ANCHOR_RV;
				jsGame.graphics.ANCHOR_RB = f.canvas.graphics.ANCHOR_RB;
				e = jsGame.getDom(a.canvas.defaultId);
				if (jsGame.canvas.screen.getTouch()) {
					window.addEventListener("orientationchange", m.orientationchange, false);
					e.ontouchstart = m.touchstart;
					e.ontouchend = m.touchend;
					e.ontouchmove = m.touchmove;
					e.ontouchcancel = m.touchcancel
				} else {
					document.onkeydown = m.keydown;
					document.onkeyup = m.keyup;
					if (jsGame.canvas.screen.getDevice() != "j2me" && jsGame.canvas.screen.getDevice().indexOf("symbian") == -1) {
						e.onclick = m.click;
						e.onmousedown = m.mouseDown;
						e.onmouseup = m.mouseUp;
						e.onmousemove = m.mouseMove
					}
				}
				e = null;
				if (m.initImageCallBack == null) m.initImageCallBack = m.loadImages;
				jsGame.canvas.fillStyle(a.canvas.bgColor).fillRect(0, 0, jsGame.canvas.screen.getWidth(), jsGame.canvas.screen.getHeight());
				a.system.gameFlow = f.system.gameFlowType.run;
				a.image.tipIndex = jsGame.commandFuns.getRandom(a.image.tips.length - 1);
				a.image.tip = a.image.tips[a.image.tipIndex];
				if (a.system.loadRes == null) {
					a.system.loadRes = function() {
						m.initImageCallBack(a.image.countLoaded, a.image.imgObjs.length - 1);
						if (a.image.countLoaded == a.image.imgObjs.length) {
							a.system.pageLoad(jsGame);
							a.image.loadFrame = [];
							a.image.imgObjs = [];
							a.image.countLoaded = 0;
							a.image.reCountLoaded = 0;
							a.image.tipSkip = 0
						} else setTimeout(a.system.loadRes, a.system.timeout)
					};
					a.system.loadRes()
				}
			}
		},
		menu: function(e) {
			if (a.system.menu == null && typeof e == "function") {
				a.system.gameFlow = f.system.gameFlowType.menu;
				a.system.menu = e
			}
			return this
		},
		run: function(e) {
			if (a.system.run == null) {
				if (a.system.runFn == null) a.system.runFn = e;
				a.system.run = function() {
					var e = new Date;
					switch (a.system.gameFlow) {
						case f.system.gameFlowType.menu:
							a.system.menu();
							break;
						case f.system.gameFlowType.run:
							a.system.runFn();
							break;
						case f.system.gameFlowType.stop:
							a.system.stop();
							break;
						case f.system.gameFlowType.over:
							a.system.over();
							break;
						case f.system.gameFlowType.zone:
							a.system.zone(a.system.zoneArgs);
							break;
						case f.system.gameFlowType.active:
							a.system.active(a.system.activeArgs);
							break;
						case f.system.gameFlowType.loadImage:
							if (m.loadImageCallBack != null) {
								m.loadImageCallBack(a.image.countLoaded, a.image.imgCount - 1);
								if (a.image.imgObjs.length > 0) {
									var t = a.image.imgObjs.shift();
									if (a.image.imgs[t.id]) a.image.countLoaded++;
									else {
										a.image.imgs[t.id] = jsGame.classes.getImage();
										a.image.imgs[t.id].onload = function() {
											a.image.countLoaded++
										};
										a.image.imgs[t.id].src = t.src;
										a.image.imgs[t.id].id = t.id
									}
									t = null
								}
							}
					}
					if (a.ajax.xhrObj) {
						t = new Date;
						if (t - a.ajax.date >= a.ajax.xhrObj.timeout) {
							jsGame.ajax({
								clear: true
							});
							a.ajax.isTimeout = true;
							if (a.ajax.xhrObj) {
								a.ajax.xhrObj.error(null, "timeout", null);
								a.ajax.xhrObj = null
							}
						}
						t = null
					}
					a.system.spendTime = new Date - e;
					e = null;
					a.system.isPause || jsGame.play()
				};
				a.system.run()
			}
			return this
		},
		stop: function(e) {
			if (a.system.stop == null && typeof e == "function") a.system.stop = e;
			return this
		},
		over: function(e) {
			if (a.system.over == null && typeof e == "function") a.system.over = e;
			return this
		},
		zone: function(e) {
			if (a.system.zone == null && typeof e == "function") a.system.zone = e;
			return this
		},
		active: function(e) {
			if (a.system.active == null && typeof e == "function") a.system.active = e;
			return this
		},
		play: function() {
			a.system.isPause = false;
			setTimeout(a.system.run, a.system.timeout - a.system.spendTime < 0 ? 0 : (a.system.timeout - a.system.spendTime) * this.canvas.screen.getFps());
			return this
		},
		pause: function() {
			a.system.isPause = true;
			return this
		},
		gameFlow: function() {
			var e;
			return {
				init: function() {
					return e = this
				},
				menu: function() {
					if (a.system.menu != null) a.system.gameFlow = f.system.gameFlowType.menu;
					return e
				},
				run: function() {
					if (a.system.run != null) a.system.gameFlow = f.system.gameFlowType.run;
					return e
				},
				stop: function() {
					if (a.system.stop != null) a.system.gameFlow = f.system.gameFlowType.stop;
					return e
				},
				over: function() {
					if (a.system.over != null) a.system.gameFlow = f.system.gameFlowType.over;
					return e
				},
				zone: function(t) {
					if (a.system.zone != null) {
						a.system.gameFlow = f.system.gameFlowType.zone;
						a.system.zoneArgs = t
					}
					return e
				},
				active: function(t) {
					if (a.system.active != null) {
						a.system.gameFlow = f.system.gameFlowType.active;
						a.system.activeArgs = t
					}
					return e
				},
				base: function() {
					return jsGame
				}
			}
		}(),
		keyIsPressed: function(e) {
			if (!a.event.keyDownGo) a.event.keyDownGo = true;
			return a.event.keys[e]
		},
		keyPressed: function(e) {
			if (e) {
				if (!a.event.keyPressedGo) a.event.keyPressedGo = true;
				var t = a.event.pressedKey[e];
				a.event.pressedKey[e] = false;
				return t
			} else {
				if (this.keyPressed("up")) return true;
				else if (this.keyPressed("down")) return true;
				else if (this.keyPressed("left")) return true;
				else if (this.keyPressed("right")) return true;
				else if (this.keyPressed("a")) return true;
				else if (this.keyPressed("b")) return true;
				else if (this.keyPressed("c")) return true;
				else if (this.keyPressed("menu")) return true;
				else if (this.keyPressed("quit")) return true;
				return false
			}
		},
		keyIsUnPressed: function(e) {
			if (!a.event.keyUpGo) a.event.keyUpGo = true;
			var t = a.event.lastKey[e];
			a.event.lastKey[e] = false;
			return t
		},
		keyReleased: function(e) {
			if (e) return this.keyIsUnPressed(e);
			else {
				if (this.keyReleased("up")) return true;
				else if (this.keyReleased("down")) return true;
				else if (this.keyReleased("left")) return true;
				else if (this.keyReleased("right")) return true;
				else if (this.keyReleased("a")) return true;
				else if (this.keyReleased("b")) return true;
				else if (this.keyReleased("c")) return true;
				else if (this.keyReleased("menu")) return true;
				else if (this.keyReleased("quit")) return true;
				return false
			}
		},
		keyRepeated: function(e) {
			if (e) return this.keyIsPressed(e);
			else {
				if (this.keyRepeated("up")) return true;
				else if (this.keyRepeated("down")) return true;
				else if (this.keyRepeated("left")) return true;
				else if (this.keyRepeated("right")) return true;
				else if (this.keyRepeated("a")) return true;
				else if (this.keyRepeated("b")) return true;
				else if (this.keyRepeated("c")) return true;
				else if (this.keyRepeated("menu")) return true;
				else if (this.keyRepeated("quit")) return true;
				return false
			}
		},
		canvas: function() {
			var e, t, n, r, i, s, o, u, l, c;
			return {
				init: function() {
					e = this;
					n = {
						x: 0,
						y: 0
					};
					r = {
						fillColor: "#000000",
						strokeColor: "#000000"
					};
					i = {
						x: 0,
						y: 0
					};
					s = {
						x: 0,
						y: 0
					};
					o = {
						x: 0,
						y: 0,
						fillStyle: "#FFFFFF",
						strokeStyle: "#CCCCCC"
					};
					u = {
						array: []
					};
					return e.pass()
				},
				pass: function(n) {
					n = !n || n == "" ? a.canvas.defaultId : n;
					if (!a.canvas.ctxs[n]) {
						l = e.base().getDom(n);
						a.canvas.ctxs[n] = l.getContext("2d");
						c = m.getDeviceConfig();
						a.canvas.device = c.device;
						a.canvas.fps = c.fps;
						a.canvas.touch = c.touch;
						a.canvas.zoom = c.zoom;
						l.width = a.canvas.defaultWidth;
						l.style.width = l.width * a.canvas.zoom + "px";
						l.height = a.canvas.defaultHeight;
						l.style.height = l.height * a.canvas.zoom + "px"
					}
					t = a.canvas.ctxs[n];
					t.font = a.canvas.defaultFont;
					return e.screen.setId(n)
				},
				setCurrent: function(t) {
					return e.pass(t)
				},
				screen: {
					setId: function(t) {
						if (a.canvas.ctxs[t]) a.canvas.id = t;
						return e
					},
					getId: function() {
						return a.canvas.id
					},
					getWidth: function() {
						return a.canvas.defaultWidth
					},
					setWidth: function(t) {
						a.canvas.defaultWidth = t;
						if (l) {
							l.width = a.canvas.defaultWidth;
							l.style.width = l.width + "px"
						}
						return e
					},
					getHeight: function() {
						return a.canvas.defaultHeight
					},
					setHeight: function(t) {
						a.canvas.defaultHeight = t;
						if (l) {
							l.height = a.canvas.defaultHeight;
							l.style.height = l.height + "px"
						}
						return e
					},
					getDevice: function() {
						return a.canvas.device
					},
					getFps: function() {
						return a.canvas.fps
					},
					setFps: function(t) {
						if (t > 0) a.canvas.fps = t;
						return e
					},
					getTouch: function() {
						return a.canvas.touch
					},
					getZoom: function() {
						return a.canvas.zoom
					}
				},
				fillStyle: function(n) {
					t.fillStyle = n;
					return e
				},
				fillRect: function(n, r, i, o, u) {
					i = i ? i : 0;
					o = o ? o : 0;
					if (u) s = m.getAnchor(n, r, i, o, u);
					else {
						s.x = n;
						s.y = r
					}
					t.fillRect(s.x, s.y, i, o);
					return e
				},
				fillText: function(n, r, i, s) {
					t.font = s || a.canvas.defaultFont;
					t.fillText(n, r, i);
					return e
				},
				clearRect: function(n, r, i, s) {
					t.clearRect(n, r, i, s);
					return e
				},
				clearScreen: function() {
					return e.clearRect(0, 0, e.screen.getWidth(), e.screen.getHeight())
				},
				strokeStyle: function(n) {
					t.strokeStyle = n;
					return e
				},
				lineWidth: function(n) {
					t.lineWidth = n || 1;
					return e
				},
				strokeRect: function(n, r, s, o, u) {
					if (u) i = m.getAnchor(n, r, s, o, u);
					else {
						i.x = n;
						i.y = r
					}
					t.strokeRect(i.x, i.y, s, o);
					return e
				},
				strokeText: function(n, r, i, s) {
					t.font = s || a.canvas.defaultFont;
					t.strokeText(n, r, i);
					return e
				},
				setColor: function(t, n, i) {
					if (i == null) {
						r.fillColor = t;
						r.strokeColor = n ? n : t
					} else {
						r.fillColor = "rgb(" + t + ", " + n + ", " + i + ")";
						r.strokeColor = r.fillColor
					}
					return e.fillStyle(r.fillColor).strokeStyle(r.strokeColor)
				},
				drawImage: function(r, i, s, o, u, a, f, l, c, h) {
					if (o == null) t.drawImage(jsGame.getImage(r), i, s);
					else if (u == null) {
						n = m.getAnchor(i, s, jsGame.getImage(r).width, jsGame.getImage(r).height, o);
						t.drawImage(jsGame.getImage(r), n.x, n.y)
					} else if (h == null) t.drawImage(jsGame.getImage(r), i, s, o, u, a, f, l, c);
					else {
						n = m.getAnchor(a, f, l, c, h);
						t.drawImage(jsGame.getImage(r), i, s, o, u, n.x, n.y, l, c)
					}
					return e
				},
				drawRegion: function(n, r, i, s, o, u, a, l) {
					switch (u) {
						default: t.setTransform(1, 0, 0, 1, a, l);
						break;
						case f.canvas.trans.TRANS_ROT90:
								t.setTransform(0, 1, -1, 0, o + a, l);
							break;
						case f.canvas.trans.TRANS_ROT180:
								t.setTransform(-1, 0, 0, -1, s + a, o + l);
							break;
						case f.canvas.trans.TRANS_ROT270:
								t.setTransform(0, -1, 1, 0, a, s + l);
							break;
						case f.canvas.trans.TRANS_MIRROR:
								t.setTransform(-1, 0, 0, 1, s + a, l);
							break;
						case f.canvas.trans.TRANS_MIRROR_ROT90:
								t.setTransform(0, -1, -1, 0, o + a, s + l);
							break;
						case f.canvas.trans.TRANS_MIRROR_ROT180:
								t.setTransform(1, 0, 0, -1, a, o + l);
							break;
						case f.canvas.trans.TRANS_MIRROR_ROT270:
								t.setTransform(0, 1, 1, 0, a, l)
					}
					e.drawImage(n, r, i, s, o, 0, 0, s, o);
					t.setTransform(1, 0, 0, 1, 0, 0);
					return e
				},
				drawNumber: function(t, n, r, i, s, o, a) {
					u.array = jsGame.commandFuns.getArray(t);
					if (a)
						for (t = 0; t < u.array.length; t++) e.drawImage(n, u.array[t] * r, 0, r, i, s + t * r, o, r, i);
					else
						for (t = u.array.length - 1; t >= 0; t--) e.drawImage(n, u.array[t] * r, 0, r, i, s - (u.array.length - 1 - t) * r, o, r, i, jsGame.graphics.ANCHOR_RT);
					return e
				},
				moveTo: function(n, r) {
					t.moveTo(n, r);
					return e
				},
				lineTo: function(n, r) {
					t.lineTo(n, r);
					return e
				},
				stroke: function() {
					t.stroke();
					return e
				},
				fill: function() {
					t.fill();
					return e
				},
				beginPath: function() {
					t.beginPath();
					return e
				},
				closePath: function() {
					t.closePath();
					return e
				},
				arc: function(n, r, i, s, o, u) {
					t.arc(n, r, i, s, o, u);
					return e
				},
				quadraticCurveTo: function(n, r, i, s) {
					t.quadraticCurveTo(n, r, i, s);
					return e
				},
				bezierCurveTo: function(n, r, i, s, o, u) {
					t.bezierCurveTo(n, r, i, s, o, u);
					return e
				},
				measureText: function(n) {
					var r = t.measureText(n),
						i = r.width;
					r = r.height ? r.height : parseInt(t.font);
					return {
						width: e.screen.getDevice() == "j2me" ? t.measureText(n) : i,
						height: r
					}
				},
				translate: function(n, r) {
					t.translate(n, r);
					return e
				},
				drawLine: function(t, n, r, i) {
					return e.beginPath().moveTo(t, n).lineTo(r, i).stroke().closePath()
				},
				drawRect: function(t, n, r, i, s) {
					return e.strokeRect(t, n, r, i, s)
				},
				drawString: function(t, n, r, i, s, u, l, c) {
					o.x = n;
					o.y = r;
					if (i) switch (i) {
						case f.canvas.graphics.LEFT:
							o.x = 0;
							break;
						case f.canvas.graphics.VCENTER:
							o.x = parseInt((e.screen.getWidth() - e.measureText(t).width) / 2);
							break;
						case f.canvas.graphics.RIGHT:
							o.x = e.screen.getWidth() - e.measureText(t).width
					}
					if (s) {
						o.fillStyle = u ? u : "#000000";
						o.strokeStyle = l ? l : "#CCCCCC";
						e.fillStyle(o.strokeStyle).fillText(t, o.x + 1, o.y + 1, c).fillStyle(o.fillStyle)
					}
					return e.fillText(t, o.x, o.y, c).fillStyle(a.canvas.defaultColor)
				},
				drawSubstring: function(t, n, r, i, s, o, u, a, f, l) {
					return e.drawString(t.substring(n, n + r), i, s, o, u, a, f, l)
				},
				clip: function() {
					t.clip();
					return e
				},
				save: function() {
					t.save();
					return e
				},
				restore: function() {
					t.restore();
					return e
				},
				rect: function(n, r, i, s) {
					t.rect(n, r, i, s);
					return e
				},
				getContext: function() {
					return t
				},
				base: function() {
					return jsGame
				}
			}
		}(),
		initImage: function(e) {
			a.image.imgs = [];
			a.image.imgs[a.image.loadImgId] = jsGame.classes.getImage();
			a.image.imgs[a.image.loadImgId].id = a.image.loadImgId;
			a.image.imgs[a.image.loadImgId].src = "./img/LeiYooResLoadImg.png";
			if (e.length > 0) {
				jsGame.pushImage(e);
				for (e = 0; e < a.image.imgObjs.length; e++)
					if (a.image.imgObjs[e].id != a.image.loadImgId) {
						a.image.imgs[a.image.imgObjs[e].id] = jsGame.classes.getImage();
						a.image.imgs[a.image.imgObjs[e].id].onload = function() {
							a.image.countLoaded++
						};
						a.image.imgs[a.image.imgObjs[e].id].onerror = function() {
							a.image.tips = ["资源加载出错请按#退出"]
						};
						a.image.imgs[a.image.imgObjs[e].id].src = a.image.imgObjs[e].src;
						a.image.imgs[a.image.imgObjs[e].id].id = a.image.imgObjs[e].id;
						a.image.imgs[a.image.imgObjs[e].id].url = a.image.imgObjs[e].src
					} else {
						a.image.countLoaded++;
						if (a.image.imgs[a.image.loadImgId].src != a.image.imgObjs[e].src) {
							a.image.imgs[a.image.loadImgId].src = a.image.imgObjs[e].src;
							a.image.imgs[a.image.loadImgId].url = a.image.imgObjs[e].src
						}
					}
			}
			a.image.imgs[a.image.loadImgId].onload = function() {
				a.image.loadedImg = true;
				a.image.loadFrame = [{
					x: 14,
					y: 0,
					frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
					step: 0
				}, {
					x: 23,
					y: 1,
					frames: [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					step: 0
				}, {
					x: 31,
					y: 6,
					frames: [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					step: 0
				}, {
					x: 35,
					y: 15,
					frames: [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8],
					step: 0
				}, {
					x: 34,
					y: 24,
					frames: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7],
					step: 0
				}, {
					x: 28,
					y: 32,
					frames: [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
					step: 0
				}, {
					x: 20,
					y: 35,
					frames: [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
					step: 0
				}, {
					x: 11,
					y: 34,
					frames: [5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4],
					step: 0
				}, {
					x: 3,
					y: 29,
					frames: [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],
					step: 0
				}, {
					x: 0,
					y: 21,
					frames: [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2],
					step: 0
				}, {
					x: 1,
					y: 12,
					frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1],
					step: 0
				}, {
					x: 6,
					y: 4,
					frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
					step: 0
				}]
			};
			return this
		},
		loadImage: function(e) {
			if (a.system.gameFlow != f.system.gameFlowType.loadImage && e.length > 0) {
				a.system.gameFlow = f.system.gameFlowType.loadImage;
				a.image.imgObjs = e;
				a.image.imgCount = a.image.imgObjs.length;
				a.image.countLoaded = 0
			}
		},
		pushImage: function(e) {
			for (var t = 0; t < e.length; t++) a.image.imgObjs.push(e[t]);
			return this
		},
		initImageCallBack: function(e) {
			if (typeof e == "function") m.initImageCallBack = e;
			return this
		},
		loadImageCallBack: function(e) {
			if (typeof e == "function") m.loadImageCallBack = e;
			return this
		},
		getImage: function(e) {
			if (a.image.imgs[e]) return a.image.imgs[e]
		},
		audio: function() {
			var e = null;
			return {
				init: function() {
					return e = this
				},
				play: function(t, n) {
					if (a.audio.audios[t] && !a.audio.audios[t].isPlaying) {
						a.audio.audios[t].isPlaying = true;
						a.audio.audios[t].dom.loop = n ? "loop" : undefined;
						try {
							a.audio.audios[t].dom.play()
						} catch (r) {}
					}
					return e
				},
				pause: function(t) {
					if (a.audio.audios[t] && a.audio.audios[t].isPlaying) {
						a.audio.audios[t].isPlaying = false;
						try {
							a.audio.audios[t].dom.pause()
						} catch (n) {}
					}
					return e
				},
				noSound: function() {
					for (var t in a.audio.audios) a.audio.audios[t].dom.pause();
					return e
				}
			}
		}(),
		initAudio: function(e) {
			if (e.length > 0) {
				a.audio.audios = [];
				for (var t = 0; t < e.length; t++) {
					a.audio.audios[e[t].id] = {
						id: e[t].id,
						dom: this.getDom(e[t].id),
						src: e[t].src,
						isPlaying: false
					};
					a.audio.audios[e[t].id].dom.src = a.audio.audios[e[t].id].src
				}
			}
			return this
		},
		setRunFrequency: function(e) {
			a.system.timeout = e;
			return this
		},
		events: function() {
			var e;
			return {
				init: function() {
					return e = this
				},
				keyDown: function(t) {
					if (!a.event.keyDownGo) a.event.keyDownGo = true;
					if (!a.event.keyUpGo) a.event.keyUpGo = true;
					if (!a.event.keyPressedGo) a.event.keyPressedGo = true;
					a.event.keyDownCallBack = t;
					return e
				},
				keyUp: function(t) {
					if (!a.event.keyDownGo) a.event.keyDownGo = true;
					if (!a.event.keyUpGo) a.event.keyUpGo = true;
					if (!a.event.keyPressedGo) a.event.keyPressedGo = true;
					a.event.keyUpCallBack = t;
					return e
				},
				orientationChange: function(t) {
					a.event.orientationChange = t;
					return e
				},
				touchStart: function(t) {
					a.event.touchStart = t;
					return e
				},
				touchEnd: function(t) {
					a.event.touchEnd = t;
					return e
				},
				touchMove: function(t) {
					a.event.touchMove = t;
					return e
				},
				touchCancel: function(t) {
					a.event.touchCancel = t;
					return e
				},
				click: function(t) {
					a.event.clickCallBack = t;
					return e
				},
				mouseDown: function(t) {
					a.event.mouseDownCallBack = t;
					return e
				},
				mouseUp: function(t) {
					a.event.mouseUpCallBack = t;
					return e
				},
				mouseMove: function(t) {
					a.event.mouseMoveCallBack = t;
					return e
				},
				base: function() {
					return jsGame
				}
			}
		}(),
		ui: function() {
			return {
				classes: {
					button: function(e) {
						e = jsGame.objExtend({
							display: true,
							id: "",
							fontId: "",
							fsx: 0,
							fsy: 0,
							hoverFontId: "",
							hfsx: 0,
							hfsy: 0,
							align: "",
							x: 0,
							y: 0,
							width: 50,
							height: 20
						}, e || {});
						this.display = e.display;
						this.id = e.id;
						this.fontId = e.fontId;
						this.fsx = e.fsx;
						this.fsy = e.fsy;
						this.hoverFontId = e.hoverFontId;
						this.hfsx = e.hfsx;
						this.hfsy = e.hfsy;
						this.align = e.align;
						this.width = e.width;
						this.height = e.height;
						if (this.align == "") this.x = e.x;
						else if (this.align == "center") this.x = (jsGame.canvas.screen.getWidth() - this.width) / 2;
						else if (this.align == "left") this.x = 0;
						else if (this.align == "right") this.x = jsGame.canvas.screen.getWidth() - this.width;
						if (this.text != "") {
							var t = jsGame.canvas.measureText(this.text).width;
							t = parseInt((this.width - t) / 2);
							if (t < 0) t = 0;
							this.fontX = this.x + t;
							t = t = null
						}
						this.y = e.y;
						this.show = function() {
							this.display = true;
							this.fontId != "" && jsGame.canvas.drawImage(this.fontId, this.fsx, this.fsy, this.width, this.height, this.x, this.y, this.width, this.height)
						};
						this.hover = function() {
							this.display && this.hoverFontId != "" && jsGame.canvas.drawImage(this.hoverFontId, this.hfsx, this.hfsy, this.width, this.height, this.x, this.y, this.width, this.height)
						};
						e = null
					}
				}
			}
		}(),
		graphics: {
			HCENTER: f.canvas.graphics.HCENTER,
			VCENTER: f.canvas.graphics.VCENTER,
			LEFT: f.canvas.graphics.LEFT,
			RIGHT: f.canvas.graphics.RIGHT,
			TOP: f.canvas.graphics.TOP,
			BOTTOM: f.canvas.graphics.BOTTOM
		},
		trans: {
			TRANS_NONE: f.canvas.trans.TRANS_NONE,
			TRANS_ROT90: f.canvas.trans.TRANS_ROT90,
			TRANS_ROT180: f.canvas.trans.TRANS_ROT180,
			TRANS_ROT270: f.canvas.trans.TRANS_ROT270,
			TRANS_MIRROR: f.canvas.trans.TRANS_MIRROR,
			TRANS_MIRROR_ROT90: f.canvas.trans.TRANS_MIRROR_ROT90,
			TRANS_MIRROR_ROT180: f.canvas.trans.TRANS_MIRROR_ROT180,
			TRANS_MIRROR_ROT270: f.canvas.trans.TRANS_MIRROR_ROT270
		},
		request: function() {
			return {
				init: function() {
					m.initUrlParams(location.href)
				},
				get: function(e) {
					return a.request.gets[e] ? a.request.gets[e] : ""
				}
			}
		}()
	}.init()
})()