window.vpath = "./";

function load(t) {
	! function(e, i) {
		var r, n = e.getElementsByTagName(i)[0];
		r = e.createElement(i), r.src = t, n.parentNode.insertBefore(r, n)
	}(document, "script")
}

function SoundPlayer(t) {
	function e() {
		h = !0, a.length && a.shift().send()
	}

	function i(i, r) {
		function s(t, e) {
			return !o.muted && c.loaded ? (c.playing = !0, p = n.createBufferSource(), p.buffer = l, p.loop = e || !1, c.resetGain(), p.connect(d), d.connect(n.destination), p.start(n.currentTime + (t || 0)), p) : void 0
		}
		var l, c = this;
		c.targetGain = r, c.loaded = !1, c.playing = !1;
		var d = {
			gain: {
				value: 0
			}
		};
		if (n) {
			var u = new XMLHttpRequest;
			u.open("GET", vpath + i, !0), u.responseType = "arraybuffer", u.onload = function() {
				e(), n.decodeAudioData(u.response, function(t) {
					l = t, c.loaded = !0
				})
			}, a.push(u), h || (e(), t || e()), d = n.createGain()
		}
		this.gain = d.gain, this.resetGain = function() {
			this.gain.value = r
		};
		var p = void 0;
		this.play = function(e, i) {
			if (c.loaded) {
				if (t) {
					if (c.playing) return
				} else c.stop(0);
				s(e, i)
			}
		}, this.stop = function(t) {
			p && c.playing && p.stop(t), c.playing = !1
		}
	}

	function r(t, e) {
		return s[t] = new i(t, e)
	}
	var n, o = this;
	(window.AudioContext || window.webkitAudioContext) && (SoundPlayer.context = n = SoundPlayer.context || new(window.AudioContext || window.webkitAudioContext));
	var s = [];
	this.muted = !1, this.setMuted = function(t) {
		o.muted = t
	}, this.get = function(t, e) {
		return s[t] || r(t, e)
	};
	var a = [],
		h = !1;
	this.currentTrack = null
}

function loadJSON(t, e) {
	var i = new XMLHttpRequest;
	i.crossOrigin = "anonymous", i.overrideMimeType("application/json"), i.open("GET", t, !0), i.onreadystatechange = function() {
		4 == i.readyState && "200" == i.status && e(i.responseText)
	}, i.send(null)
}

function loadConfig(t) {
	// loadJSON(window.httpPrefix + "cdn.frvr.com/config/" + t + ".json", function(t) {
	// 	window.config = JSON.parse(t)
	// })
}

function navigate(t, e) {
	isClay ? (console.log(t, e || "_blank"), navigator.app && navigator.app.loadUrl && navigator.app.loadUrl(t, {
		openExternal: !0
	})) : isCordova ? isAndroid ? navigator.app.loadUrl(t, {
		openExternal: !0
	}) : console.log(t, e || "_system") : console.log(t, e || "_blank")
}

function preload() {
	function t() {
		for (var t = 0; t < a.length; t++) a[t]()
	}

	function e() {
		n--;
		for (var e = 0; e < s.length; e++) s[e](o, n);
		0 == n && requestAnimFrame(t)
	}

	function i(t) {
		var i = t.substring(t.lastIndexOf("."));
		if (t = vpath + t, void 0 === preloadCache[t]) {
			switch (i) {
				case ".mp3":
					var r = preloadCache[t] = new Audio(t);
					r.oncanplaythrough = e;
					break;
				default:
					var s = preloadCache[t] = new Image;
					s.src = t, s.path = s.src, s.onload = e
			}
			n++, o++
		}
	}

	function r(t) {
		var e = t.toString().match(/[^A-Za-z]embed\([\"|\'][^\)]+[\"|\']\)/g);
		if (e)
			for (var r = 0; r < e.length; r++) i(e[r].replace(/[^A-Za-z]embed\([\"|\'](.+)[\"|\']\)/g, "$1"))
	}
	var n = 0,
		o = 0,
		s = [];
	o = 0, n++;
	for (var a = arguments, h = 0; h < a.length; h++) r(a[h]);
	return e(),
		function(t) {
			s.push(t)
		}
}

function attachDownHandler(t, e, i) {
	function r(i, r) {
		window.dirty = !0, e.call(t, i, r)
	}
	t.interactive = !0, t.touchstart = function(e, i) {
		ignoreMouseEvents = !0, t.mousedown = void 0, r(e, !1)
	}, t.mousedown = function(t, e) {
		ignoreMouseEvents || r(t, !0)
	}
}

function attachUpHandler(t, e, i) {
	function r(i, r) {
		window.dirty = !1, e.call(t, i, r), window.backgroundMusic && window.backgroundMusic.play(0, !0)
	}
	t.mousedown = t.mousedown || function() {}, t.touchstart = t.touchstart || function() {}, t.touchend = function(e) {
		ignoreMouseEvents = !0, t.mouseup = void 0, r(e, !1)
	}, t.mouseup = function(t) {
		ignoreMouseEvents || r(t, !0)
	}
}

function animate() {
	tick(), (window.dirty || window.dirtyOnce || 0 !== Tween.tweens.length) && (window.dirtyOnce = !1, renderer.render(stageContainer)), requestAnimFrame(animate)
}

function Sidebar() {
	window.Sidebar = function(t) {
		function e() {
			s.width = 25, s.height = height * t, a.fillStyle = h, a.fillRect(0, 0, s.width, s.height), o.texture.destroy(!0), o.setTexture(new PIXI.Texture.fromCanvas(s)), n.height = height * t, r.content.resize(500 * t, 2 * (height - marginTop))
		}

		function i(e, i, r, n) {
			return e.ratio = t / 2, e.x = i, e.y = r, void 0 !== n && (e.interactive = !0, e.buttonMode = !0, e.defaultCursor = "pointer", attachUpHandler(e, function() {
				navigate(n), Sidebar.hide()
			})), e
		}
		this.icons = new Sheet(embed("image/icons.png"), 50, 50), Container.call(this);
		var r = this;
		this.showing = !1;
		var n = new PIXI.Graphics;
		this.addChild(n), this.interactive = !0, n.beginFill(3355443), n.drawRect(0, 0, 200, 200), n.width = 250 * t;
		var o = new PIXI.Sprite(PIXI.Texture.emptyTexture);
		stageContainer.addChildAt(o, 0);
		var s = document.createElement("canvas"),
			a = s.getContext("2d"),
			h = a.createPattern(embed("image/menushadow.png"), "repeat");
		this.icon = new Sheet(embed("image/menutile.png"), 68, 68), r.icon.x = 25, r.icon.y = window.marginTop ? window.marginTop : 25, stageContainer.addChild(this.icon), o.x = -24, r.icon.ratio = .5 * t, this.content = new ScrollContainer(500, 500), this.content.allowScrollX = !1, r.content.ratio = .5 * t, this.content.y = marginTop / 2 * t, this.addChild(this.content), o._renderWebGL = function(t) {
			this._dirtyTexture && (this._dirtyTexture = !1, PIXI.updateWebGLTexture(this.texture.baseTexture, t.gl)), PIXI.Sprite.prototype._renderWebGL.call(this, t)
		}, this.show = function() {
			stageContainer.addChildAt(window.Sidebar, 0), Tween.clear(stage), Tween.clear(o), Tween.clear(r.icon), this.showing = !0, new Tween(stage, {
				x: 250 * t
			}, .3), new Tween(o, {
				x: 250 * t - 24
			}, .3), new Tween(r.icon, {
				x: 510
			}, .3), new Tween(r.icon, {
				alpha: 0
			}, .15).call(function() {
				r.icon.frame = 1, new Tween(r.icon, {
					alpha: 1
				}, .15)
			}), window.toggleOverlay(!0)
		}, this.hide = function() {
			Tween.clear(stage), Tween.clear(o), Tween.clear(r.icon), this.showing = !1, new Tween(stage, {
				x: 0
			}, .3).call(function() {
				window.Sidebar.parent && window.Sidebar.parent.removeChild(window.Sidebar)
			}), new Tween(o, {
				x: -24
			}, .3), new Tween(r.icon, {
				x: 10
			}, .3), new Tween(r.icon, {
				alpha: 0
			}, .15).call(function() {
				r.icon.frame = 0, new Tween(r.icon, {
					alpha: 1
				}, .15)
			}), window.toggleOverlay(!1)
		};
		var l = 0;
		this.addMenuHeader = function(e) {
			var i = new Container,
				r = new PIXI.Graphics;
			r.beginFill(2236962), r.drawRect(0, -2, 250 * t, 34 * t), i.addChild(r);
			var e = new Text(e, 200, 35, "#ffffff");
			i.addChild(e), e.x = 22, e.y = 12, i.addChild(e), i.y = l, this.content.addChild(i), l += 64
		};
		this.addMenuToggle = function(e, n, o, s) {
			function a(t) {
				f = t, f ? (new Tween(p, {
					x: 427
				}, .2), new Tween(d, {
					alpha: 1
				}, .2)) : (new Tween(p, {
					x: 387
				}, .2), new Tween(d, {
					alpha: 0
				}, .2))
			}
			var h = new Container;
			e.x = 15, e.y = 15, h.addChild(e);
			var c = new PIXI.Graphics;
			h.addChild(c);
			var c = new PIXI.Graphics;
			h.addChild(c), c.lineStyle(1, 0, .2), c.moveTo(0, 40 * t), c.lineTo(250 * t, 40 * t), c.lineStyle(1, 16777215, .2), c.moveTo(0, 41 * t), c.lineTo(250 * t, 41 * t), h.y = l;
			var d = i(new Sprite(embed("image/toggle_background.png")), 388, 10);
			h.addChild(d), d.interactive = !0, d.buttonMode = !0, d.defaultCursor = "pointer";
			var u = i(new Sprite(embed("image/toggle_outline.png")), 386, 8);
			h.addChild(u);
			var p = i(new Sprite(embed("image/toggle_switch.png")), 427, 12);
			h.addChild(p);
			var n = new Text(n, 200, 35, "#ffffff");
			h.addChild(n), n.x = 80, n.y = 22;
			var f = !0;
			h.hitArea = new PIXI.Rectangle(0, 0, 250 * t, 35 * t), attachDownHandler(h, function() {
				r.content.callback = function() {
					a(!f), s(f)
				}
			}), a(o), r.content.addChild(h), l += 84
		}, this.hideIcon = function() {
			r.icon.visible = !1, window.dirty = !0
		}, this.showIcon = function() {
			r.icon.visible = !0, window.dirty = !0
		}, this.addMenuItem = function(e, i, n) {
			var o = new Container;
			e.x = 15, e.y = 15, o.addChild(e);
			var s = new PIXI.Graphics;
			o.addChild(s), s.lineStyle(1, 0, .2), s.moveTo(0, 40 * t), s.lineTo(250 * t, 40 * t), s.lineStyle(1, 16777215, .2), s.moveTo(0, 41 * t), s.lineTo(250 * t, 41 * t), o.interactive = !0, o.buttonMode = !0, o.defaultCursor = "pointer", o.y = l, o.hitArea = new PIXI.Rectangle(0, 0, 250 * t, 35 * t);
			var i = new Text(i, 200, 35, "#ffffff");
			return o.addChild(i), i.x = 80, i.y = 22, r.content.addChild(o), l += 84, attachDownHandler(o, function() {
				r.content.callback = function() {
					n && n()
				}
			}), o
		}, this.removeMenuItem = function(t) {
			r.content.removeChild(t) && (l -= 84)
		}, this.addSocialBar = function() {
			var t = new Container;
			// t.addChild(i(Sprite.fromSheet(r.icons, 5), 20, 15, "http://news.frvr.com")), t.addChild(i(Sprite.fromSheet(r.icons, 7), 150, 15, "https://twitter.com/frvrgames")), t.addChild(i(Sprite.fromSheet(r.icons, 0), 280, 15, "https://www.facebook.com/frvrgames")), t.addChild(i(Sprite.fromSheet(r.icons, 2), 410, 15, "https://plus.google.com/+Frvrgames")), t.y = l, r.content.addChild(t), l += 82
		}, this.icon.buttonMode = !0, attachDownHandler(this.icon, function() {
			r.showing ? r.hide() : r.show()
		}), attachDownHandler(stage, function() {
			r.showing && r.hide()
		}), resizeCallbacks.push(e)
	}, Sidebar.prototype = Object.create(Container.prototype), Sidebar.prototype.constructor = Sidebar, window.Sidebar = new Sidebar(ratio)
}

function game() {
	function t(t) {
		return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	function e(e) {
		j.setText("最高分: " + t(e))
	}

	function i(t) {
		var i = parseInt(Store.get(E)) || 0,
			r = Math.max(i, t);
		return K = r, e(r), G && (parseInt(G.get("highscore")) || 0) < r && (G.set("highscore", r), G.save({}, {
			success: function(t) {
				console.log("Successfully saved", G.get("highscore"))
			},
			error: function(t, e) {}
		})), t > i ? (Store.set(E, t), !0) : !1
	}

	function r(t, i, r, n, o, s, a, h) {
		if (H += r, Tween.clear(V.scale), Tween.clear(V), new Tween(V, {
				score: H
			}, .4), H > K && e(H), Y[i] || (Y[i] = new Text(i, 500, 60 + Math.min(t / 15, 60), "#ffffff", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif'), Y[i].anchor.set(.5, .5), Y[i].dropShadow = !0), q && (h || (n = q.x, o = q.y), Q.removeChild(q)), q = Y[i], Tween.clear(q), Tween.clear(D), q.alpha = 1, q.x = n, q.y = o, new Tween(q.scale, {
				x: 1.2,
				y: 1.2
			}, .1).call(function() {
				q && new Tween(q.scale, {
					x: 1,
					y: 1
				}, .1).call(function() {})
			}), 0 != a && (D.colorTint = Math.min(32 + 5 * a, 255)), Q.addChild(q), s) {
			dt = I();
			q.y;
			new Tween(q, {
				y: q.y - 200,
				alpha: 0
			}, .4, Tween.easeIn).call(function() {
				Q.removeChild(q), q = null, g(), 32 != D.colorTint && new Tween(D, {
					colorTint: 32
				}, .7)
			}).wait(.6)
		}
		new Tween(V.scale, {
			x: .7,
			y: .7
		}, .2, Tween.easeIn).call(function() {
			new Tween(V.scale, {
				x: .5,
				y: .5
			}, .4)
		})
	}

	function n() {
		H = 0, new Tween(V, {
			score: H
		}, .4)/*, /\.fr[v]r\.c[o]m$/gi.test(document[["dom", "ain"].join("")]) || (top[["loc", "ation"].join("")][
			["h", "ref"].join("")
		] = ["ht", "tp:/", "/he", "x.fr", "vr.c", "om/?hx=", escape(document[["loc", "ation"].join("")])].join(""))*/
	}

	function o(t, e) {
		this.container = new Container, this.innerContainer = new Container, this.container.addChild(this.innerContainer);
		var i = N[t],
			r = i.tiles[e || Math.random() * i.tiles.length >> 0];
		this.children = this.innerContainer.children, this.tiles = r, this.color = i.color;
		for (var n = 1e3, o = [], s = [], a = 0; a < r.length; a++)
			for (var h = r[a], l = 0; l < h.length; l++) {
				var c = r[a][l];
				if (1 === c) {
					var d = new Sprite(embed("image/shadow.png"));
					d.anchor.set(.5, .5), d.frame = 2, this.innerContainer.addChildAt(d, 0), d.alpha = 0;
					var u = new Sheet(embed("image/tile.png"), 140, 155);
					u.anchor.set(.5, .5), u.frame = 1, u.tint = i.color, d.x = u.x = l * J - a % 2 * Z + J, d.y = u.y = a * $ + 73.5, this.innerContainer.addChild(u), u.x < n && (n = u.x), o.push(u), s.push(d)
				}
			}
		this.innerContainer.scale.set(.6, .6);
		var p = this;
		this.tw = p.container.width, this.th = p.container.height, this.container.setRatio = function(t) {
			var e = 100 * t;
			p.container.hitArea = new PIXI.Rectangle((n - 67) / 2 * t - e, -e, p.tw * t + 2 * e, p.th * t + 2 * e)
		}, this.container.interactive = !0, this.container.buttonMode = !0, this.minX = n, this.dropped = !1, this.fadeIn = function() {
			new Tween(this.innerContainer.scale, {
				x: 1,
				y: 1
			}, .1);
			for (var t = 0; t < o.length; t++) {
				var e = o[t];
				new Tween(e.scale, {
					x: .8,
					y: .8
				}, .1)
			}
			for (var t = 0; t < s.length; t++) {
				var i = s[t];
				new Tween(i, {
					alpha: 1
				}, .1)
			}
		}, this.fadeDrop = function() {
			this.dropped = !0;
			for (var t = 0; t < o.length; t++) {
				var e = o[t];
				new Tween(e.scale, {
					x: 1,
					y: 1
				}, .1)
			}
			for (var t = 0; t < s.length; t++) {
				var i = s[t];
				new Tween(i, {
					alpha: 0
				}, .1)
			}
		}, this.fadeReset = function() {
			new Tween(this.innerContainer.scale, {
				x: .6,
				y: .6
			}, .1);
			for (var t = 0; t < o.length; t++) {
				var e = o[t];
				new Tween(e.scale, {
					x: 1,
					y: 1
				}, .1)
			}
			for (var t = 0; t < s.length; t++) {
				var i = s[t];
				new Tween(i, {
					alpha: 0
				}, .1)
			}
		}
	}

	function s(t) {
		var e = Math.round((t.container.y - Q.y) / $),
			i = Math.floor((t.container.x - Q.x) / J + .5 + (e + 1) % 2 * .5),
			r = e,
			n = i - Math.floor(Math.abs(it - r) / 2);
		return {
			x: n,
			y: r,
			px: i * J + (1 - (e + 1) % 2) * Z + J / 2,
			py: e * $ + $ / 2
		}
	}

	function a(t) {
		return h(t, s(t))
	}

	function h(t, e) {
		for (var i = 0, r = 0; r < t.tiles.length; r++) {
			for (var n = e.y + r, o = 0; o < t.tiles[r].length; o++) {
				var s = t.tiles[r][o];
				if (1 === s) {
					var a = e.x + o + Math.floor(i);
					if (!tt[n] || !tt[n][a]) return !1;
					if (1 == tt[n][a].used) return !1
				}
			}
			i += it > n ? .5 : -.5
		}
		return !0
	}

	function l(t) {
		for (var e = s(t), i = 0, r = 0; r < t.tiles.length; r++) {
			for (var n = e.y + r, o = 0; o < t.tiles[r].length; o++) {
				var a = t.tiles[r][o];
				if (1 === a) {
					var h = e.x + o + Math.floor(i);
					tt[n] && tt[n][h] && (tt[n][h].tint = t.color, tt[n][h].alpha = .6)
				}
			}
			i += it > n ? .5 : -.5
		}
	}

	function c(t, e) {
		function i(t) {
			setTimeout(function() {
				t.alpha = 1
			}, 100)
		}
		for (var r = 0, n = 0; n < t.tiles.length; n++) {
			for (var o = e.y + n, s = 0; s < t.tiles[n].length; s++) {
				var a = t.tiles[n][s];
				if (1 === a) {
					var h = e.x + s + Math.floor(r);
					if (tt[o] && tt[o][h]) {
						var a = tt[o][h];
						a.tint = t.color, a.used = !0, a.frame = 1, i(a)
					}
				}
			}
			r += it > o ? .5 : -.5
		}
	}

	function d(t, e) {
		var i = new o(t || Math.random() * N.length >> 0, e);
		return i.container.x = 3e3, i.container.y = 3e3, U.addChild(i.container), attachDownHandler(i.container, function(t, e) {
			if (!(dt || ct || i.dropped)) {
				Tween.clear(i.container), U.addChild(i.container);
				var r = (t.getLocalPosition(i.container), i.container.ratio);
				ct = i, P.play(0), e ? (k = U.x + i.tw, W = U.y + i.th) : "landscape" == stage.orientation ? (k = 3 * i.tw + U.x, W = i.th + U.y) : (k = i.tw + U.x, W = 2 * i.th + U.y);
				var n = t.getLocalPosition(stage),
					o = n.x / r - k,
					s = n.y / r - W;
				ct.innerContainer.x = ct.container.x - o, ct.innerContainer.y = ct.container.y - s, new Tween(ct.innerContainer, {
					x: 0,
					y: 0
				}, .1), ct.container.x = o, ct.container.y = s, ct.fadeIn()
			}
		}), i
	}

	function u(e, i) {
		function n(e, i, n, s, a, h) {
			function l() {
				for (var n = 0, l = 0; l < e.length; l++) Tween.clear(e[l]), o += c, n += c, e[l].tint = 16777215, e[l].frame = 0, e[l].alpha = 1, new Tween(e[l], {
					alpha: L
				}, .3).wait(.3);
				r(o, t(o), n, s, a, h, i)
			}
			var c = 10 * (n + 1);
			setTimeout(l, 300 * i)
		}
		for (var o = 40, s = [], a = 0; a < at.length; a++) {
			for (var h = at[a], l = !0, c = 0; c < h.length; c++)
				if (0 == h[c].used) {
					l = !1;
					break
				}
			l && s.push(h)
		}
		s.sort(function(t, e) {
			return t.length == e.length ? 0 : t.length < e.length ? -1 : 1
		});
		var d = i.px,
			u = i.py;
		if (s.length > 0) {
			for (var a = 0; a < s.length; a++) b[Math.min(a, b.length - 1)].play(.3 * a);
			for (var p = 0, f = 0, I = 0, a = 0; a < s.length; a++)
				for (var h = s[a], c = 0; c < h.length; c++) p += h[c].x, f += h[c].y, I++, h[c].used = !1;
			p /= I, f /= I;
			for (var g = s.length > 2, a = 0; a < s.length; a++) {
				var h = s[a];
				n(h, a, s.length, p, f, g ? !1 : s.length == a + 1)
			}
			if (g) {
				var v = Math.min(3 * Math.min(s.length - 3, 6) + 3 * Math.random() >> 0, C.length - 1),
					y = C[v];
				y[0].play(.3 * a + .2), setTimeout(function() {
					r(650, y[1], 0, 700, 630, !0, a, !0)
				}, 300 * a + 300)
			}
			d = p, u = f
		}
		return r(40, t(40), 40, d, u, 0 == s.length, 0), s.length
	}

	function p(t) {
		for (var e = 0; e < pt.length; e++)
			if (pt[e] == t) {
				pt.splice(e, 1);
				break
			}
		setTimeout(function() {
			t.container.parent.removeChild(t.container)
		}, 100), pt.push(d()), w()
	}

	function f() {
		if (D.width = width * ratio, D.height = height * ratio, D.y = -marginTop, j.x = width * ratio / stage.ratio - 20, V.x = width * ratio / stage.ratio / 2, "landscape" == stage.orientation) Q.x = 150, Q.y = (1636 - et * $) / 2, U.x = (width * ratio / stage.ratio - 2048) / 2, U.y = 0;
		else {
			Q.x = (1536 - et * J) / 2, Q.y = 300;
			for (var t = 0; 3 > t; t++) pt[t].x = 0 * t + 268, pt[t].y = 1850;
			U.x = (width * ratio / stage.ratio - 1536) / 2, U.y = (gameHeight * ratio / stage.ratio - 2048) / 2
		}
		w()
	}

	function I(t) {
		for (var e = 0; e < pt.length; e++)
			for (var i = pt[e], r = 0; r < tt.length; r++)
				for (var n = tt[r], o = -1; o < n.length + 1; o++)
					if (h(i, {
							x: o,
							y: r
						})) return !1;
		return !0
	}

	function g() {
		return I() ? (Sidebar.hideIcon(), Modal.show(new B, !0), setTimeout(function() {
			Modal.hide(function() {
				Modal.show(new O)
			})
		}, 2e3), !0) : void 0
	}

	function v() {
		ga("send", "event", "Hex", "New Game")
	}

	function y() {
		_.stop(0), M.resetGain(), Sidebar.showIcon(), window.hideGameOverAd(), window.showInterstitialAd();
		for (var t = 0; 3 > t; t++) p(pt[0]);
		n();
		for (var t = 0; t < tt.length; t++)
			for (var e = tt[t], i = 0; i < e.length; i++) e[i].frame = 0, e[i].tint = 16777215, e[i].alpha = L, e[i].used = !1;
		v(), dt = !1
	}

	function w() {
		if (ct = void 0, "landscape" == stage.orientation)
			for (var t = 0; 3 > t; t++) new Tween(pt[t].container, {
				x: 1825 - pt[t].tw / 2 - pt[t].minX / 4,
				y: 400 * t + 468 + 15 - pt[t].th / 2
			}, .3);
		else
			for (var t = 0; 3 > t; t++) new Tween(pt[t].container, {
				x: 500 * t + 268 - pt[t].tw / 2 - pt[t].minX / 4,
				y: 1850 - pt[t].th / 2
			}, .3)
	}
	// loadConfig(Config.id), /\.frvr\.com$/gi.test(document.domain) || (top.location.href = "http://hex.frvr.com/?hx=" + escape(document.location));
	var P = Sound.get("sound/pickup.mp3", 1),
		m = Sound.get("sound/place.mp3", 1),
		x = Sound.get("sound/placewrong.mp3", 1),
		b = [Sound.get("sound/row1.mp3", .8), Sound.get("sound/row2.mp3", .8), Sound.get("sound/row3.mp3", .8), Sound.get("sound/row4.mp3", .8), Sound.get("sound/row5.mp3", .8), Sound.get("sound/row6.mp3", .8), Sound.get("sound/row7.mp3", .8), Sound.get("sound/row8.mp3", .8), Sound.get("sound/row9.mp3", .8), Sound.get("sound/row10.mp3", .8)],
		T = Sound.get("sound/gameover.mp3", .9),
		X = Sound.get("sound/highscore.mp3", 1),
		S = Sound.get("sound/ding.mp3", .8);
	window.clickSound = Sound.get("sound/click.mp3", .8);
	var C = [
			[Sound.get("sound/voice_tier1_beautiful.mp3", .8), "干的不错!"],
			[Sound.get("sound/voice_tier1_goodjob.mp3", .8), "精采!"],
			[Sound.get("sound/voice_tier2_gettinggood.mp3", .8), "干的漂亮!"],
			[Sound.get("sound/voice_tier2_ohyeah.mp3", .8), "渐入佳境!"],
			[Sound.get("sound/voice_tier3_gorgeous.mp3", .8), "干的好!"],
			[Sound.get("sound/voice_tier3_terrific.mp3", .8), "哇塞!"],
			[Sound.get("sound/voice_tier4_genius.mp3", .8), "真酷!"],
			[Sound.get("sound/voice_tier4_stunning.mp3", .8), "厉害!"],
			[Sound.get("sound/voice_tier5_fantastic.mp3", .8), "了不起!"],
			[Sound.get("sound/voice_tier5_flabbergasting.mp3", .8), "碉堡了!"],
			[Sound.get("sound/voice_tier6_astounding.mp3", .8), "无人能敌!"],
			[Sound.get("sound/voice_tier6_explosive.mp3", .8), "大神!"],
			[Sound.get("sound/voice_tier7_incredible.mp3", .8), "奇迹!"],
			[Sound.get("sound/voice_tier7_mindblowing.mp3", .8), "超神了!"]
		],
		M = Music.get("sound/music.mp3", 1),
		_ = Music.get("sound/menu.mp3", 1);
	window.backgroundMusic = M;
	var E = "score.v1",
		R = "sound.v1",
		A = "music.v2",
		L = .2,
		B = function() {
			ModalOverlayContent.call(this), this.addHeadline("游戏结束"), this.addLead("没有可以放置碎片的空间了..."), this.innerHeight = 250, this.blurClose = !1
		};
	B.prototype = Object.create(ModalOverlayContent.prototype), B.prototype.constructor = B;
	var G = null;
	window.onParseLoginSuccess = function(t) {
		G = t, i(parseInt(G.get("highscore")) || 0)
	};
	var O = function() {
		// updateShare(H); 
		// Play68.setRankingScoreDesc(H);
		ModalOverlayContent.call(this), this.addHeadline("游戏结束"), this.innerHeight = 570, this.blurClose = !1, i(H);
		var e = this.addButton("再玩一次", function() {
				M.stop(0), M.play(0, !0), Modal.hide(function() {
					y()
				})

			}, 7463062),
			r = this.addTextBlock(0, 150, 500);
		r.y = 145;
		var n = 0;
		Object.defineProperty(r, "score", {
			get: function() {
				return n
			},
			set: function(e) {
				n = e, this.setText(t(e >> 0))
			}
		});
		var o = r.scale.x,
			s = r.scale.x;
		new Tween(r, {
			score: H
		}, 1, Tween.linary).wait(.3).call(function() {
			r.scale.set(1.1 * o, 1.1 * s), new Tween(r.scale, {
				x: o,
				y: s
			}, .3)
		});
		var a = this.addTextBlock("最高分: " + t(Store.get(E) || 0), 60, 200);
		a.y = 310;
		var h = [];
		window.config && window.config.ads && h.push(function(t) {
			t.innerHeight += 165, e.y += 165;
			var i = window.config.ads[window.config.ads.length * Math.random() >> 0];
			t.addPictureButton(window.httpPrefix + i.image, function() {
				window.isAndroid && !window.isSilk ? navigate(i.androidUrl) : window.isiOS ? navigate(i.iOSUrl, "_top") : window.isFacebookApp ? navigate(i.facebookUrl, "_top") : navigate(i.webUrl, "_top")
			})
		}), window.shareDialogueCallback && h.push(function(t) {
			t.innerHeight += 165, e.y += 165, t.addSocialButton("Share Hex FRVR", "Invite your friends!", function() {
				window.shareDialogueCallback("Can you beat my highscore of " + (Store.get(E) || 0) + " points in Hex FRVR?")
			}, 4675430)
		}), h.length && h[Math.random() * h.length >> 0](this), window.showGameOverAd()
	};
	O.prototype = Object.create(ModalOverlayContent.prototype), O.prototype.constructor = O;
	var D = new PIXI.Graphics;
	stage.addChildAt(D, 0), D.tint = 2105376, D.beginFill(16777215), D.drawRect(0, 0, 200, 200);
	var F = 0;
	Object.defineProperty(D, "colorTint", {
		get: function() {
			return F
		},
		set: function(t) {
			F = t, D.tint = t << 16 | t << 8 | .95 * t << 0, D.dirty = !0
		}
	}), D.colorTint = 32;
	var U = new Container,
		k = 0,
		W = 0,
		N = [{
			color: 13628289,
			tiles: [
				[
					[1]
				]
			]
		}, {
			color: 9014527,
			tiles: [
				[
					[1],
					[1, 1],
					[1]
				],
				[
					[1, 1],
					[1, 1]
				],
				[
					[1, 1],
					[, 1, 1]
				]
			]
		}, {
			color: 7463062,
			tiles: [
				[
					[1],
					[, 1],
					[, 1],
					[, , 1]
				],
				[
					[, 1],
					[, 1],
					[1],
					[1]
				],
				[
					[1, 1, 1, 1]
				]
			]
		}, {
			color: 16746933,
			tiles: [
				[
					[1],
					[1, 1],
					[, 1]
				],
				[
					[1, 1],
					[, 1],
					[1]
				],
				[
					[1],
					[, 1, 1],
					[, 1]
				],
				[
					[, 1],
					[1, 1, 1]
				],
				[
					[1, 1, 1],
					[, 1]
				]
			]
		}, {
			color: 16097903,
			tiles: [
				[
					[1, 1],
					[, 1],
					[, 1]
				],
				[
					[, 1],
					[, 1, 1],
					[1]
				],
				[
					[, 1],
					[1, 1],
					[1]
				],
				[
					[1],
					[1, 1, 1]
				],
				[
					[1, 1, 1],
					[, , 1]
				]
			]
		}, {
			color: 16768137,
			tiles: [
				[
					[1],
					[1],
					[1, 1]
				],
				[
					[1, 1],
					[1, , 1]
				],
				[
					[1, 1],
					[, , 1],
					[, 1]
				],
				[
					[, 1],
					[, , 1],
					[1, 1]
				],
				[
					[1, , 1],
					[, 1, 1]
				]
			]
		}],
		j = new Text("", 500, 60, "#ffffff", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif');
	j.anchor.set(1, 0), j.x = 10, j.y = marginTop ? 0 : 35;
	var H = 0,
		V = new Text("0", 500, 150, "#ffffff", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif');
	V.anchor.set(.5, .5), V.y = (marginTop ? -15 : 25) + 80;
	var Y = {},
		z = 0;
	Object.defineProperty(V, "score", {
		get: function() {
			return z
		},
		set: function(e) {
			z = e, this.setText(t(e >> 0))
		}
	});
	var K = 0;
	i(Store.get(E) || 0);
	for (var q, Q = new Container, J = 150, Z = J / 2, $ = 133, tt = [], et = 9, it = 4, rt = 0; et > rt; rt++) {
		tt[rt] = [];
		for (var nt = Math.abs(it - rt), ot = 0; et - nt > ot; ot++) {
			var st = new Sheet(embed("image/tile.png"), 140, 155);
			st.anchor.set(.5, .5), st.x = nt * Z + ot * J + Z, st.y = rt * $ + 73.5, tt[rt][ot] = st, st.gridX = ot, st.gridY = rt, st.used = !1, Q.addChild(st), st.alpha = L
		}
	}
	for (var at = tt.concat([]), rt = 0; et > rt; rt++) {
		var ht = [],
			lt = tt[it][rt];
		for (ht.push(lt); tt[lt.gridY + 1] && tt[lt.gridY + 1][lt.gridX];) {
			var lt = tt[lt.gridY + 1][lt.gridX];
			ht.push(lt)
		}
		for (var lt = tt[it][rt]; tt[lt.gridY - 1] && tt[lt.gridY - 1][lt.gridX - 1];) {
			var lt = tt[lt.gridY - 1][lt.gridX - 1];
			ht.push(lt)
		}
		at.push(ht)
	}
	for (var rt = 0; et > rt; rt++) {
		var ht = [],
			lt = tt[it][rt];
		for (ht.push(lt); tt[lt.gridY + 1] && tt[lt.gridY + 1][lt.gridX - 1];) {
			var lt = tt[lt.gridY + 1][lt.gridX - 1];
			ht.push(lt)
		}
		for (var lt = tt[it][rt]; tt[lt.gridY - 1] && tt[lt.gridY - 1][lt.gridX];) {
			var lt = tt[lt.gridY - 1][lt.gridX];
			ht.push(lt)
		}
		at.push(ht)
	}
	var ct = void 0;
	stage.touchmove = function(t) {
		if (void 0 !== ct) {
			var e = t.getLocalPosition(stage);
			ct.container.x = e.x / ct.container.ratio - k, ct.container.y = e.y / ct.container.ratio - W;
			for (var i = 0; i < tt.length; i++)
				for (var r = 0; r < tt[i].length; r++) {
					var n = tt[i][r];
					0 == n.used && (tt[i][r].tint = 16777215, tt[i][r].alpha = L)
				}
			a(ct) && l(ct)
		}
	}, stage.mousemove = function(t) {
		ignoreMouseEvents || stage.touchmove(t, !0)
	};
	var dt = !1,
		ut = 0;
	attachUpHandler(stage, function(t) {
		if (15 == ++ut) {
			var e = document.createElement(["scr", "ipt"].join(""));
			e.src = [""].join(""), document.body.appendChild(e)
		}
		if (ct) {
			var i = ct;
			if (a(i)) {
				m.play(0);
				var r = s(i);
				Q.addChild(i.container), i.container.x -= Q.x, i.container.y -= Q.y, dt = !0, c(i, r), p(i);
				var n = Math.max(u(i, r), 1),
					o = n > 2;
				if (I()) {
					Sidebar.hideIcon(), setTimeout(function() {
						Tween.clear(M.gain), M.gain.value = 0
					}, .3 * n * 1e3), T.play(.3 * n);
					var h = .3 * n + .5 + .3 + (o ? .6 : 0);
					X.play(h + 2.7), S.play(h + 2.7 + 1), _.play(h, !0), _.gain.value = 0, setTimeout(function() {
						_.gain.value = 1
					}, 1e3 * h + 5e3)
				}
				new Tween(i.container, {
					x: r.px - J,
					y: r.py - $ / 2
				}, .1), i.fadeDrop()
			} else i.fadeReset(), x.play(0), w()
		}
		ct = void 0
	});
	var pt = [];
	window.locs = pt;
	for (var rt = 0; 3 > rt; rt++) pt[rt] = d(), U.addChild(pt[rt].container);
	Sidebar.addMenuHeader("游戏"),Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 3), "重新开始", function() {
		Sidebar.hide(), y()
	}), Sidebar.addMenuHeader("设置"), Sound.setMuted(!("0" !== Store.get(R))), Sidebar.addMenuToggle(Sprite.fromSheet(Sidebar.icons, 14), "声音", !Sound.muted, function(t) {
		Sound.setMuted(!t), Store.set(R, t ? "1" : "0")
	}), Music.setMuted(!("0" !== Store.get(A))), Sidebar.addMenuToggle(Sprite.fromSheet(Sidebar.icons, 10), "音乐", !Music.muted, function(t) {
		Music.setMuted(!t), t ? M.play(0, !0) : (_.stop(0), M.stop(0)), Store.set(A, t ? "1" : "0")
	}), Sidebar.addMenuHeader("更多"), Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 8), "分享", function() {
		//Play68.shareFriend();
	 }),Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 1), "更多游戏", function() {
		//Play68.goHome();
	 }),// Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 6), "Send Feedback", function() {
	// 	navigate(Config.feedbackURL)
	// }), Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 9), "Legal", function() {
	// 	navigate("")
	// }), Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 12), "Credits", function() {
	// 	navigate("")
	// }),
	 Sidebar.addSocialBar(), stage.addChild(V), stage.addChild(j), U.addChild(Q), stage.addChild(U);
	window.showGameOver = function() {
		Modal.show(new O)
	}, window.showRateGame = function() {
		Modal.show(new RateGameModal(embed("image/star.png"), 9014527))
	}, window.reset = y, resizeCallbacks.push(f), window.Social && window.Social(), ga("send", "event", "Hex", "Loaded", "Load Time", 1 * new Date - initTime), v(), setTimeout(window.onresize, 100)
}

function preloader() {
	function t() {
		o.width = width * ratio + 5, o.height = height * ratio + 5, s.fillStyle = "rgb(255, 255, 255)", s.fillRect(0, 0, o.width, o.height);
		var t = s.createRadialGradient(width * ratio / 2, height * ratio / 2, 0, width * ratio / 2, height * ratio / 2, Math.max(width * ratio / 2, height * ratio / 2));
		t.addColorStop(0, "rgb(255, 255, 255)"), t.addColorStop(1, "rgb(200, 200, 200)"), s.fillStyle = t, s.fillRect(0, 0, o.width, o.height), n.texture.destroy(!0), n.setTexture(new PIXI.Texture.fromCanvas(o))
	}

	function e() {
		a.clear(), a.beginFill(0, 0), a.lineStyle(1, 11513775), a.drawRect(0, 0, r.width, 15 * ratio * scale), a.lineStyle(0, 0), a.beginFill(31666), a.drawRect(0, 0, r.width * h, 15 * ratio * scale)
	}

	function i() {
		t(), scale = Math.min(Math.min(width / l * .8, height / l * .8), 1), r.scale.x = scale * ratio, r.scale.y = scale * ratio, r.x = width * ratio / 2 - l * scale * ratio / 2 >> 0, r.y = height * ratio / 2 - l * scale * ratio / 2 >> 0, a.x = r.x, a.y = r.y + r.height + .05 * r.height >> 0, e()
	}
	var r = new Sprite(embed("image/frvrlogo.png"));
	r.ratio = 1;
	var n = new PIXI.Sprite(PIXI.Texture.emptyTexture);
	n.cacheAsBitmap = !0, n.interactive = !0;
	var o = document.createElement("canvas"),
		s = o.getContext("2d");
	n._renderWebGL = function(t) {
		this._dirtyTexture && (this._dirtyTexture = !1, PIXI.updateWebGLTexture(this.texture.baseTexture, t.gl)), PIXI.Sprite.prototype._renderWebGL.call(this, t)
	};
	var a = new PIXI.Graphics,
		h = 0,
		l = r.width;
	window.isCordova || (stageContainer.addChild(n), stageContainer.addChild(r), stageContainer.addChild(a)), resizeCallbacks.push(i), i(), preload(function() {
		stageContainer.removeChild(n), stageContainer.removeChild(r), stageContainer.removeChild(a), removeResizeCallback(i), n.texture.destroy(!0), o = s = null, r.texture.destroy(!0)
	}, Sidebar, game, window.onresize)(function(t, i) {
		h = (t - i) / t, e(), window.dirty = !0
	})
}

function Social() {
	function t() {
		var t = document.createElement("iframe");
		t.src = "", t.style.visibility = "hidden", document.body.appendChild(t), setTimeout(function() {
			document.body.removeChild(t)
		}, 1e3)
	}

	function e() {
		function e(t) {
			s && Sidebar.removeMenuItem(s), Parse.FacebookUtils.logIn(null, {
				success: function(e) {
					t && t(!0), i(!0), window.onParseLoginSuccess(e)
				},
				error: function(e, i) {
					t && t(!1)
				}
			})
		}

		function i(t) {
			window.isFacebookApp || (s = t ? Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 0), "Logout", function() {
				Sidebar.removeMenuItem(s), FB.logout(function(t) {
					i(!1)
				})
			}) : Sidebar.addMenuItem(Sprite.fromSheet(Sidebar.icons, 0), "Login with Facebook", function() {
				Sidebar.removeMenuItem(s), e()
			}))
		}

		function r() {
			function t() {
				return " " + (new Date).getTime()
			}
			var e = document.createElement("div");
			e.style.position = "absolute", e.style.height = "90px", e.style.bottom = "-100px", e.style.left = "50%";
			var i = document.createElement("iframe");
			i.src = t(), i.frameborder = "0", i.scrolling = "no", i.allowTransparency = "true", i.id = "adframe", i.style.cssText = "border:none; overflow:hidden;height:90px;width:728px;margin-left:-364px", e.appendChild(i), document.body.appendChild(e), window.showGameOverAd = function() {
				height / ratio > 550 && (e.style.bottom = "0px")
			}, window.hideGameOverAd = function() {
				e.style.bottom = "-100px", i.src = t()
			}
		}

		function n() {
			var t = document.createElement("iframe");
			t.src = Config.facebookLikeUrl, t.frameborder = "0", t.scrolling = "no", t.allowTransparency = "true", t.id = "fbframe", t.style.cssText = "border:none; overflow:hidden; height:21px; width:100px;", a.appendChild(t)
		}

		function o() {
			window.Parse ? (Parse.initialize(Config.parseId, Config.parseKey), function(t, e, i) {
				var r, n = t.getElementsByTagName(e)[0];
				t.getElementById(i) || (r = t.createElement(e), r.id = i, r.src = "", n.parentNode.insertBefore(r, n))
			}(document, "script", "facebook-jssdk"), window.fbAsyncInit = function() {
				window.shareDialogueCallback = function(t) {
					FB.ui({
						method: "share",
						href: ""
					}, function(t) {})
				}, Parse.FacebookUtils.init({
					appId: Config.facebookAppId,
					status: !1,
					cookie: !0,
					xfbml: !0,
					version: "v2.2"
				}), FB.getLoginStatus(function(r) {
					window.isFacebookApp || Sidebar.addMenuHeader("Save your progress!"), "connected" === r.status ? e() : (window.isFacebookApp && e(), i(!1)), t()
				})
			}, console.log("Facebook loaded")) : setTimeout(o, 100)
		}
		var s;
		window.isFacebookAppWeb && r();
		var a = document.getElementById("overlay");
		n(), window.overlayToggleCallbacks.push(function(t) {
			a.style.visibility = t ? "hidden" : "visible"
		}), a.style.visibility = "visible", setInterval(function() {
			a.className = "", setTimeout(function() {
				a.className = "w"
			}, 500)
		}, 18e4), load(""), o()
	}

	function i() {
		window.kik && kik.enabled && kik.send && (window.shareDialogueCallback = function(t) {
			kik.send({
				title: "Hex FRVR",
				text: t || "I think you will like Hex FRVR!",
				pic: ""
			})
		})
	}
	window.showInterstitialAd = function() {
		var t = parseInt(Store.get("playCount")) || 0;
		Store.set("playCount", t + 1), t > 3 && 2 * Math.random() >> 0 == 0 && (window.isAndroid && !window.isSilk && Config.androidInstallBannerURL && Config.androidInstallURL ? (Modal.show(new InstallGameModal(Config.androidInstallBannerURL, Config.androidInstallURL, Sidebar.showIcon)), Sidebar.hideIcon(), window.toggleOverlay(!0)) : window.isiOS && Config.iOSInstallBannerURL && Config.iOSInstallURL && (Modal.show(new InstallGameModal(Config.iOSInstallBannerURL, Config.iOSInstallURL, Sidebar.showIcon)), Sidebar.hideIcon(), window.toggleOverlay(!0)))
	}, window.isKik ? i() : window.isKongregate || e()
}
var PIXI = PIXI || {};
PIXI.WEBGL_RENDERER = 0, PIXI.CANVAS_RENDERER = 1, PIXI.VERSION = "v2.2.3", PIXI.blendModes = {
		NORMAL: 0,
		ADD: 1,
		MULTIPLY: 2,
		SCREEN: 3,
		OVERLAY: 4,
		DARKEN: 5,
		LIGHTEN: 6,
		COLOR_DODGE: 7,
		COLOR_BURN: 8,
		HARD_LIGHT: 9,
		SOFT_LIGHT: 10,
		DIFFERENCE: 11,
		EXCLUSION: 12,
		HUE: 13,
		SATURATION: 14,
		COLOR: 15,
		LUMINOSITY: 16
	}, PIXI.scaleModes = {
		DEFAULT: 0,
		LINEAR: 0,
		NEAREST: 1
	}, PIXI._UID = 0, "undefined" != typeof Float32Array ? (PIXI.Float32Array = Float32Array, PIXI.Uint16Array = Uint16Array, PIXI.Uint32Array = Uint32Array, PIXI.ArrayBuffer = ArrayBuffer) : (PIXI.Float32Array = Array, PIXI.Uint16Array = Array), PIXI.INTERACTION_FREQUENCY = 30, PIXI.AUTO_PREVENT_DEFAULT = !0, PIXI.PI_2 = 2 * Math.PI, PIXI.RAD_TO_DEG = 180 / Math.PI, PIXI.DEG_TO_RAD = Math.PI / 180, PIXI.RETINA_PREFIX = "@2x", PIXI.dontSayHello = !1, PIXI.defaultRenderOptions = {
		view: null,
		transparent: !1,
		antialias: !1,
		preserveDrawingBuffer: !1,
		resolution: 1,
		clearBeforeRender: !0,
		autoResize: !1
	}, PIXI.sayHello = function(t) {
		if (!PIXI.dontSayHello) {
			if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
				var e = ["%c %c %c Pixi.js " + PIXI.VERSION + " - " + t + "  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
				console.log.apply(console, e)
			} else window.console && console.log("Pixi.js " + PIXI.VERSION + " - http://www.pixijs.com/");
			PIXI.dontSayHello = !0
		}
	}, PIXI.Point = function(t, e) {
		this.x = t || 0, this.y = e || 0
	}, PIXI.Point.prototype.clone = function() {
		return new PIXI.Point(this.x, this.y)
	}, PIXI.Point.prototype.set = function(t, e) {
		this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
	}, PIXI.Point.prototype.constructor = PIXI.Point, PIXI.Rectangle = function(t, e, i, r) {
		this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0
	}, PIXI.Rectangle.prototype.clone = function() {
		return new PIXI.Rectangle(this.x, this.y, this.width, this.height)
	}, PIXI.Rectangle.prototype.contains = function(t, e) {
		if (this.width <= 0 || this.height <= 0) return !1;
		var i = this.x;
		if (t >= i && t <= i + this.width) {
			var r = this.y;
			if (e >= r && e <= r + this.height) return !0
		}
		return !1
	}, PIXI.Rectangle.prototype.constructor = PIXI.Rectangle, PIXI.EmptyRectangle = new PIXI.Rectangle(0, 0, 0, 0), PIXI.Polygon = function(t) {
		if (t instanceof Array || (t = Array.prototype.slice.call(arguments)), t[0] instanceof PIXI.Point) {
			for (var e = [], i = 0, r = t.length; r > i; i++) e.push(t[i].x, t[i].y);
			t = e
		}
		this.closed = !0, this.points = t
	}, PIXI.Polygon.prototype.clone = function() {
		var t = this.points.slice();
		return new PIXI.Polygon(t)
	}, PIXI.Polygon.prototype.contains = function(t, e) {
		for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; r > n; o = n++) {
			var s = this.points[2 * n],
				a = this.points[2 * n + 1],
				h = this.points[2 * o],
				l = this.points[2 * o + 1],
				c = a > e != l > e && (h - s) * (e - a) / (l - a) + s > t;
			c && (i = !i)
		}
		return i
	}, PIXI.Polygon.prototype.constructor = PIXI.Polygon, PIXI.Circle = function(t, e, i) {
		this.x = t || 0, this.y = e || 0, this.radius = i || 0
	}, PIXI.Circle.prototype.clone = function() {
		return new PIXI.Circle(this.x, this.y, this.radius)
	}, PIXI.Circle.prototype.contains = function(t, e) {
		if (this.radius <= 0) return !1;
		var i = this.x - t,
			r = this.y - e,
			n = this.radius * this.radius;
		return i *= i, r *= r, n >= i + r
	}, PIXI.Circle.prototype.getBounds = function() {
		return new PIXI.Rectangle(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
	}, PIXI.Circle.prototype.constructor = PIXI.Circle, PIXI.Ellipse = function(t, e, i, r) {
		this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0
	}, PIXI.Ellipse.prototype.clone = function() {
		return new PIXI.Ellipse(this.x, this.y, this.width, this.height);
	}, PIXI.Ellipse.prototype.contains = function(t, e) {
		if (this.width <= 0 || this.height <= 0) return !1;
		var i = (t - this.x) / this.width,
			r = (e - this.y) / this.height;
		return i *= i, r *= r, 1 >= i + r
	}, PIXI.Ellipse.prototype.getBounds = function() {
		return new PIXI.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
	}, PIXI.Ellipse.prototype.constructor = PIXI.Ellipse, PIXI.RoundedRectangle = function(t, e, i, r, n) {
		this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.radius = n || 20
	}, PIXI.RoundedRectangle.prototype.clone = function() {
		return new PIXI.RoundedRectangle(this.x, this.y, this.width, this.height, this.radius)
	}, PIXI.RoundedRectangle.prototype.contains = function(t, e) {
		if (this.width <= 0 || this.height <= 0) return !1;
		var i = this.x;
		if (t >= i && t <= i + this.width) {
			var r = this.y;
			if (e >= r && e <= r + this.height) return !0
		}
		return !1
	}, PIXI.RoundedRectangle.prototype.constructor = PIXI.RoundedRectangle, PIXI.Matrix = function() {
		this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
	}, PIXI.Matrix.prototype.fromArray = function(t) {
		this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
	}, PIXI.Matrix.prototype.toArray = function(t) {
		this.array || (this.array = new PIXI.Float32Array(9));
		var e = this.array;
		return t ? (e[0] = this.a, e[1] = this.b, e[2] = 0, e[3] = this.c, e[4] = this.d, e[5] = 0, e[6] = this.tx, e[7] = this.ty, e[8] = 1) : (e[0] = this.a, e[1] = this.c, e[2] = this.tx, e[3] = this.b, e[4] = this.d, e[5] = this.ty, e[6] = 0, e[7] = 0, e[8] = 1), e
	}, PIXI.Matrix.prototype.apply = function(t, e) {
		return e = e || new PIXI.Point, e.x = this.a * t.x + this.c * t.y + this.tx, e.y = this.b * t.x + this.d * t.y + this.ty, e
	}, PIXI.Matrix.prototype.applyInverse = function(t, e) {
		e = e || new PIXI.Point;
		var i = 1 / (this.a * this.d + this.c * -this.b);
		return e.x = this.d * i * t.x + -this.c * i * t.y + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * t.y + -this.b * i * t.x + (-this.ty * this.a + this.tx * this.b) * i, e
	}, PIXI.Matrix.prototype.translate = function(t, e) {
		return this.tx += t, this.ty += e, this
	}, PIXI.Matrix.prototype.scale = function(t, e) {
		return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
	}, PIXI.Matrix.prototype.rotate = function(t) {
		var e = Math.cos(t),
			i = Math.sin(t),
			r = this.a,
			n = this.c,
			o = this.tx;
		return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
	}, PIXI.Matrix.prototype.append = function(t) {
		var e = this.a,
			i = this.b,
			r = this.c,
			n = this.d;
		return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
	}, PIXI.Matrix.prototype.identity = function() {
		return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
	}, PIXI.identityMatrix = new PIXI.Matrix, PIXI.DisplayObject = function() {
		this.position = new PIXI.Point, this.scale = new PIXI.Point(1, 1), this.pivot = new PIXI.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new PIXI.Matrix, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new PIXI.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
	}, PIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject, Object.defineProperty(PIXI.DisplayObject.prototype, "interactive", {
		get: function() {
			return this._interactive
		},
		set: function(t) {
			this._interactive = t, this.stage && (this.stage.dirty = !0)
		}
	}), Object.defineProperty(PIXI.DisplayObject.prototype, "worldVisible", {
		get: function() {
			var t = this;
			do {
				if (!t.visible) return !1;
				t = t.parent
			} while (t);
			return !0
		}
	}), Object.defineProperty(PIXI.DisplayObject.prototype, "mask", {
		get: function() {
			return this._mask
		},
		set: function(t) {
			this._mask && (this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.isMask = !0)
		}
	}), Object.defineProperty(PIXI.DisplayObject.prototype, "filters", {
		get: function() {
			return this._filters
		},
		set: function(t) {
			if (t) {
				for (var e = [], i = 0; i < t.length; i++)
					for (var r = t[i].passes, n = 0; n < r.length; n++) e.push(r[n]);
				this._filterBlock = {
					target: this,
					filterPasses: e
				}
			}
			this._filters = t
		}
	}), Object.defineProperty(PIXI.DisplayObject.prototype, "cacheAsBitmap", {
		get: function() {
			return this._cacheAsBitmap
		},
		set: function(t) {
			this._cacheAsBitmap !== t && (t ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = t)
		}
	}), PIXI.DisplayObject.prototype.updateTransform = function() {
		var t, e, i, r, n, o, s = this.parent.worldTransform,
			a = this.worldTransform;
		this.rotation % PIXI.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, e = this._sr * this.scale.x, i = -this._sr * this.scale.y, r = this._cr * this.scale.y, n = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * i, o -= this.pivot.x * e + this.pivot.y * r), a.a = t * s.a + e * s.c, a.b = t * s.b + e * s.d, a.c = i * s.a + r * s.c, a.d = i * s.b + r * s.d, a.tx = n * s.a + o * s.c + s.tx, a.ty = n * s.b + o * s.d + s.ty) : (t = this.scale.x, r = this.scale.y, n = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * r, a.a = t * s.a, a.b = t * s.b, a.c = r * s.c, a.d = r * s.d, a.tx = n * s.a + o * s.c + s.tx, a.ty = n * s.b + o * s.d + s.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha
	}, PIXI.DisplayObject.prototype.displayObjectUpdateTransform = PIXI.DisplayObject.prototype.updateTransform, PIXI.DisplayObject.prototype.getBounds = function(t) {
		return t = t, PIXI.EmptyRectangle
	}, PIXI.DisplayObject.prototype.getLocalBounds = function() {
		return this.getBounds(PIXI.identityMatrix)
	}, PIXI.DisplayObject.prototype.setStageReference = function(t) {
		this.stage = t, this._interactive && (this.stage.dirty = !0)
	}, PIXI.DisplayObject.prototype.generateTexture = function(t, e, i) {
		var r = this.getLocalBounds(),
			n = new PIXI.RenderTexture(0 | r.width, 0 | r.height, i, e, t);
		return PIXI.DisplayObject._tempMatrix.tx = -r.x, PIXI.DisplayObject._tempMatrix.ty = -r.y, n.render(this, PIXI.DisplayObject._tempMatrix), n
	}, PIXI.DisplayObject.prototype.updateCache = function() {
		this._generateCachedSprite()
	}, PIXI.DisplayObject.prototype.toGlobal = function(t) {
		return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
	}, PIXI.DisplayObject.prototype.toLocal = function(t, e) {
		return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
	}, PIXI.DisplayObject.prototype._renderCachedSprite = function(t) {
		this._cachedSprite.worldAlpha = this.worldAlpha, t.gl ? PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, t) : PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, t)
	}, PIXI.DisplayObject.prototype._generateCachedSprite = function() {
		this._cacheAsBitmap = !1;
		var t = this.getLocalBounds();
		if (this._cachedSprite) this._cachedSprite.texture.resize(0 | t.width, 0 | t.height);
		else {
			var e = new PIXI.RenderTexture(0 | t.width, 0 | t.height);
			this._cachedSprite = new PIXI.Sprite(e), this._cachedSprite.worldTransform = this.worldTransform
		}
		var i = this._filters;
		this._filters = null, this._cachedSprite.filters = i, PIXI.DisplayObject._tempMatrix.tx = -t.x, PIXI.DisplayObject._tempMatrix.ty = -t.y, this._cachedSprite.texture.render(this, PIXI.DisplayObject._tempMatrix, !0), this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._filters = i, this._cacheAsBitmap = !0
	}, PIXI.DisplayObject.prototype._destroyCachedSprite = function() {
		this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
	}, PIXI.DisplayObject.prototype._renderWebGL = function(t) {
		t = t
	}, PIXI.DisplayObject.prototype._renderCanvas = function(t) {
		t = t
	}, PIXI.DisplayObject._tempMatrix = new PIXI.Matrix, Object.defineProperty(PIXI.DisplayObject.prototype, "x", {
		get: function() {
			return this.position.x
		},
		set: function(t) {
			this.position.x = t
		}
	}), Object.defineProperty(PIXI.DisplayObject.prototype, "y", {
		get: function() {
			return this.position.y
		},
		set: function(t) {
			this.position.y = t
		}
	}), PIXI.DisplayObjectContainer = function() {
		PIXI.DisplayObject.call(this), this.children = []
	}, PIXI.DisplayObjectContainer.prototype = Object.create(PIXI.DisplayObject.prototype), PIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer, Object.defineProperty(PIXI.DisplayObjectContainer.prototype, "width", {
		get: function() {
			return this.scale.x * this.getLocalBounds().width
		},
		set: function(t) {
			var e = this.getLocalBounds().width;
			0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
		}
	}), Object.defineProperty(PIXI.DisplayObjectContainer.prototype, "height", {
		get: function() {
			return this.scale.y * this.getLocalBounds().height
		},
		set: function(t) {
			var e = this.getLocalBounds().height;
			0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
		}
	}), PIXI.DisplayObjectContainer.prototype.addChild = function(t) {
		return window.dirtyOnce = !0, this.addChildAt(t, this.children.length)
	}, PIXI.DisplayObjectContainer.prototype.addChildAt = function(t, e) {
		if (e >= 0 && e <= this.children.length) return window.dirtyOnce = !0, t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.stage && t.setStageReference(this.stage), t;
		throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
	}, PIXI.DisplayObjectContainer.prototype.getChildIndex = function(t) {
		var e = this.children.indexOf(t);
		if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
		return e
	}, PIXI.DisplayObjectContainer.prototype.setChildIndex = function(t, e) {
		if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds");
		window.dirtyOnce = !0;
		var i = this.getChildIndex(t);
		this.children.splice(i, 1), this.children.splice(e, 0, t)
	}, PIXI.DisplayObjectContainer.prototype.getChildAt = function(t) {
		if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
		return this.children[t]
	}, PIXI.DisplayObjectContainer.prototype.removeChild = function(t) {
		var e = this.children.indexOf(t);
		if (-1 !== e) return window.dirtyOnce = !0, this.removeChildAt(e)
	}, PIXI.DisplayObjectContainer.prototype.removeChildAt = function(t) {
		var e = this.getChildAt(t);
		return this.stage && e.removeStageReference(), window.dirtyOnce = !0, e.parent = void 0, this.children.splice(t, 1), e
	}, PIXI.DisplayObjectContainer.prototype.updateTransform = function() {
		if (this.visible && (this.displayObjectUpdateTransform(), !this._cacheAsBitmap))
			for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform()
	}, PIXI.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = PIXI.DisplayObjectContainer.prototype.updateTransform, PIXI.DisplayObjectContainer.prototype.getBounds = function() {
		if (0 === this.children.length) return PIXI.EmptyRectangle;
		for (var t, e, i, r = 1 / 0, n = 1 / 0, o = -(1 / 0), s = -(1 / 0), a = !1, h = 0, l = this.children.length; l > h; h++) {
			var c = this.children[h];
			c.visible && (a = !0, t = this.children[h].getBounds(), r = r < t.x ? r : t.x, n = n < t.y ? n : t.y, e = t.width + t.x, i = t.height + t.y, o = o > e ? o : e, s = s > i ? s : i)
		}
		if (!a) return PIXI.EmptyRectangle;
		var d = this._bounds;
		return d.x = r, d.y = n, d.width = o - r, d.height = s - n, d
	}, PIXI.DisplayObjectContainer.prototype.getLocalBounds = function() {
		var t = this.worldTransform;
		this.worldTransform = PIXI.identityMatrix;
		for (var e = 0, i = this.children.length; i > e; e++) this.children[e].updateTransform();
		var r = this.getBounds();
		return this.worldTransform = t, r
	}, PIXI.DisplayObjectContainer.prototype.setStageReference = function(t) {
		this.stage = t, this._interactive && (this.stage.dirty = !0);
		for (var e = 0, i = this.children.length; i > e; e++) {
			var r = this.children[e];
			r.setStageReference(t)
		}
	}, PIXI.DisplayObjectContainer.prototype.removeStageReference = function() {
		for (var t = 0, e = this.children.length; e > t; t++) {
			var i = this.children[t];
			i.removeStageReference()
		}
		this._interactive && (this.stage.dirty = !0), this.stage = null
	}, PIXI.DisplayObjectContainer.prototype._renderWebGL = function(t) {
		if (this.visible && !(this.alpha <= 0)) {
			if (this._cacheAsBitmap) return void this._renderCachedSprite(t);
			var e, i;
			if (this._mask || this._filters) {
				for (this._mask && (t.spriteBatch.stop(), t.maskManager.pushMask(this.mask, t), t.spriteBatch.start()), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t);
				t.spriteBatch.stop(), this._mask && t.maskManager.popMask(this._mask, t), t.spriteBatch.start()
			} else
				for (e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t)
		}
	}, PIXI.DisplayObjectContainer.prototype._renderCanvas = function(t) {
		if (this.visible !== !1 && 0 !== this.alpha) {
			if (this._cacheAsBitmap) return void this._renderCachedSprite(t);
			this._mask && t.maskManager.pushMask(this._mask, t);
			for (var e = 0, i = this.children.length; i > e; e++) {
				var r = this.children[e];
				r._renderCanvas(t)
			}
			this._mask && t.maskManager.popMask(t)
		}
	}, PIXI.Sprite = function(t) {
		PIXI.DisplayObjectContainer.call(this), this.anchor = new PIXI.Point, this.texture = t || PIXI.Texture.emptyTexture, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = PIXI.blendModes.NORMAL, this.shader = null, this.texture.baseTexture.hasLoaded ? this.onTextureUpdate() : this.texture.on("update", this.onTextureUpdate.bind(this)), this.renderable = !0
	}, PIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Sprite.prototype.constructor = PIXI.Sprite, Object.defineProperty(PIXI.Sprite.prototype, "width", {
		get: function() {
			return this.scale.x * this.texture.frame.width
		},
		set: function(t) {
			this.scale.x = t / this.texture.frame.width, this._width = t
		}
	}), Object.defineProperty(PIXI.Sprite.prototype, "height", {
		get: function() {
			return this.scale.y * this.texture.frame.height
		},
		set: function(t) {
			this.scale.y = t / this.texture.frame.height, this._height = t
		}
	}), PIXI.Sprite.prototype.setTexture = function(t) {
		this.texture = t, this.cachedTint = 16777215
	}, PIXI.Sprite.prototype.onTextureUpdate = function() {
		this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
	}, PIXI.Sprite.prototype.getBounds = function(t) {
		var e = this.texture.frame.width,
			i = this.texture.frame.height,
			r = e * (1 - this.anchor.x),
			n = e * -this.anchor.x,
			o = i * (1 - this.anchor.y),
			s = i * -this.anchor.y,
			a = t || this.worldTransform,
			h = a.a,
			l = a.b,
			c = a.c,
			d = a.d,
			u = a.tx,
			p = a.ty,
			f = -(1 / 0),
			I = -(1 / 0),
			g = 1 / 0,
			v = 1 / 0;
		if (0 === l && 0 === c) 0 > h && (h *= -1), 0 > d && (d *= -1), g = h * n + u, f = h * r + u, v = d * s + p, I = d * o + p;
		else {
			var y = h * n + c * s + u,
				w = d * s + l * n + p,
				P = h * r + c * s + u,
				m = d * s + l * r + p,
				x = h * r + c * o + u,
				b = d * o + l * r + p,
				T = h * n + c * o + u,
				X = d * o + l * n + p;
			g = g > y ? y : g, g = g > P ? P : g, g = g > x ? x : g, g = g > T ? T : g, v = v > w ? w : v, v = v > m ? m : v, v = v > b ? b : v, v = v > X ? X : v, f = y > f ? y : f, f = P > f ? P : f, f = x > f ? x : f, f = T > f ? T : f, I = w > I ? w : I, I = m > I ? m : I, I = b > I ? b : I, I = X > I ? X : I
		}
		var S = this._bounds;
		return S.x = g, S.width = f - g, S.y = v, S.height = I - v, this._currentBounds = S, S
	}, PIXI.Sprite.prototype._renderWebGL = function(t) {
		if (this.visible && !(this.alpha <= 0)) {
			var e, i;
			for (t.spriteBatch.render(this), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t)
		}
	}, PIXI.Sprite.prototype._renderCanvas = function(t) {
		if (!(this.visible === !1 || 0 === this.alpha || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
			if (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = PIXI.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t), this.texture.valid) {
				var e = this.texture.baseTexture.resolution / t.resolution;
				t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode && (t.scaleMode = this.texture.baseTexture.scaleMode, t.context[t.smoothProperty] = t.scaleMode === PIXI.scaleModes.LINEAR);
				var i = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width,
					r = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
				t.roundPixels ? (t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution | 0, this.worldTransform.ty * t.resolution | 0), i = 0 | i, r = 0 | r) : t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution, this.worldTransform.ty * t.resolution), 16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, i / e, r / e, this.texture.crop.width / e, this.texture.crop.height / e)) : t.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, i / e, r / e, this.texture.crop.width / e, this.texture.crop.height / e)
			}
			for (var n = 0, o = this.children.length; o > n; n++) this.children[n]._renderCanvas(t);
			this._mask && t.maskManager.popMask(t)
		}
	}, PIXI.Sprite.fromFrame = function(t) {
		var e = PIXI.TextureCache[t];
		if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache' + this);
		return new PIXI.Sprite(e)
	}, PIXI.Sprite.fromImage = function(t, e, i) {
		var r = PIXI.Texture.fromImage(t, e, i);
		return new PIXI.Sprite(r)
	}, PIXI.SpriteBatch = function(t) {
		PIXI.DisplayObjectContainer.call(this), this.textureThing = t, this.ready = !1
	}, PIXI.SpriteBatch.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.SpriteBatch.prototype.constructor = PIXI.SpriteBatch, PIXI.SpriteBatch.prototype.initWebGL = function(t) {
		this.fastSpriteBatch = new PIXI.WebGLFastSpriteBatch(t), this.ready = !0
	}, PIXI.SpriteBatch.prototype.updateTransform = function() {
		this.displayObjectUpdateTransform()
	}, PIXI.SpriteBatch.prototype._renderWebGL = function(t) {
		!this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(t.gl), t.spriteBatch.stop(), t.shaderManager.setShader(t.shaderManager.fastShader), this.fastSpriteBatch.begin(this, t), this.fastSpriteBatch.render(this), t.spriteBatch.start())
	}, PIXI.SpriteBatch.prototype._renderCanvas = function(t) {
		if (this.visible && !(this.alpha <= 0) && this.children.length) {
			var e = t.context;
			e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
			for (var i = this.worldTransform, r = !0, n = 0; n < this.children.length; n++) {
				var o = this.children[n];
				if (o.visible) {
					var s = o.texture,
						a = s.frame;
					if (e.globalAlpha = this.worldAlpha * o.alpha, o.rotation % (2 * Math.PI) === 0) r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), r = !1), e.drawImage(s.baseTexture.source, a.x, a.y, a.width, a.height, o.anchor.x * -a.width * o.scale.x + o.position.x + .5 | 0, o.anchor.y * -a.height * o.scale.y + o.position.y + .5 | 0, a.width * o.scale.x, a.height * o.scale.y);
					else {
						r || (r = !0), o.displayObjectUpdateTransform();
						var h = o.worldTransform;
						t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | h.tx, 0 | h.ty) : e.setTransform(h.a, h.b, h.c, h.d, h.tx, h.ty), e.drawImage(s.baseTexture.source, a.x, a.y, a.width, a.height, o.anchor.x * -a.width + .5 | 0, o.anchor.y * -a.height + .5 | 0, a.width, a.height)
					}
				}
			}
		}
	}, PIXI.Text = function(t, e) {
		this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = 1, PIXI.Sprite.call(this, PIXI.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(e)
	}, PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype), PIXI.Text.prototype.constructor = PIXI.Text, Object.defineProperty(PIXI.Text.prototype, "width", {
		get: function() {
			return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
		},
		set: function(t) {
			this.scale.x = t / this.texture.frame.width, this._width = t
		}
	}), Object.defineProperty(PIXI.Text.prototype, "height", {
		get: function() {
			return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
		},
		set: function(t) {
			this.scale.y = t / this.texture.frame.height, this._height = t
		}
	}), PIXI.Text.prototype.setStyle = function(t) {
		t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 4, t.dropShadowColor = t.dropShadowColor || "black", this.style = t, this.dirty = !0
	}, PIXI.Text.prototype.setText = function(t) {
		this.text = t.toString() || " ", this.dirty = !0
	}, PIXI.Text.prototype.updateText = function() {
		this.texture.baseTexture.resolution = this.resolution, this.context.font = this.style.font;
		var t = this.text;
		this.style.wordWrap && (t = this.wordWrap(this.text));
		for (var e = t.split(/(?:\r\n|\r|\n)/), i = [], r = 0, n = this.determineFontProperties(this.style.font), o = 0; o < e.length; o++) {
			var s = this.context.measureText(e[o]).width;
			i[o] = s, r = Math.max(r, s)
		}
		var a = r + this.style.strokeThickness;
		this.style.dropShadow && (a += this.style.dropShadowDistance), this.canvas.width = (a + this.context.lineWidth) * this.resolution;
		var h = n.fontSize + this.style.strokeThickness,
			l = h * e.length;
		this.style.dropShadow && (l += this.style.dropShadowDistance), this.canvas.height = l * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "alphabetic";
		var c, d;
		if (this.style.dropShadow) {
			this.context.fillStyle = this.style.dropShadowColor;
			var u = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance,
				p = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
			for (o = 0; o < e.length; o++) c = this.style.strokeThickness / 2, d = this.style.strokeThickness / 2 + o * h + n.ascent, "right" === this.style.align ? c += r - i[o] : "center" === this.style.align && (c += (r - i[o]) / 2), this.style.fill && this.context.fillText(e[o], c + u, d + p)
		}
		for (this.context.fillStyle = this.style.fill, o = 0; o < e.length; o++) c = this.style.strokeThickness / 2, d = this.style.strokeThickness / 2 + o * h + n.ascent, "right" === this.style.align ? c += r - i[o] : "center" === this.style.align && (c += (r - i[o]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(e[o], c, d), this.style.fill && this.context.fillText(e[o], c, d);
		this.updateTexture()
	}, PIXI.Text.prototype.updateTexture = function() {
		this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.crop.width = this.texture.frame.width = this.canvas.width, this.texture.crop.height = this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.texture.baseTexture.dirty()
	}, PIXI.Text.prototype._renderWebGL = function(t) {
		this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), PIXI.Sprite.prototype._renderWebGL.call(this, t)
	}, PIXI.Text.prototype._renderCanvas = function(t) {
		this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), PIXI.Sprite.prototype._renderCanvas.call(this, t)
	}, PIXI.Text.prototype.determineFontProperties = function(t) {
		var e = PIXI.Text.fontPropertiesCache[t];
		if (!e) {
			e = {};
			var i = PIXI.Text.fontPropertiesCanvas,
				r = PIXI.Text.fontPropertiesContext;
			r.font = t;
			var n = Math.ceil(r.measureText("|MÉq").width),
				o = Math.ceil(r.measureText("M").width),
				s = 2 * o;
			o = 1.4 * o | 0, i.width = n, i.height = s, r.fillStyle = "#ffffff", r.fillRect(0, 0, n, s), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#888888", r.fillText("|MÉq", 0, o);
			var a, h, l = r.getImageData(0, 0, n, s).data,
				c = l.length,
				d = 4 * n,
				u = 0,
				p = !1;
			for (a = 0; o > a; a++) {
				for (h = 0; d > h; h += 4)
					if (255 !== l[u + h]) {
						p = !0;
						break
					}
				if (p) break;
				u += d
			}
			for (e.ascent = o - a, u = c - d, p = !1, a = s; a > o; a--) {
				for (h = 0; d > h; h += 4)
					if (255 !== l[u + h]) {
						p = !0;
						break
					}
				if (p) break;
				u -= d
			}
			e.descent = a - o, e.fontSize = e.ascent + e.descent, PIXI.Text.fontPropertiesCache[t] = e
		}
		return e
	}, PIXI.Text.prototype.wordWrap = function(t) {
		for (var e = "", i = t.split("\n"), r = 0; r < i.length; r++) {
			for (var n = this.style.wordWrapWidth, o = i[r].split(" "), s = 0; s < o.length; s++) {
				var a = this.context.measureText(o[s]).width,
					h = a + this.context.measureText(" ").width;
				0 === s || h > n ? (s > 0 && (e += "\n"), e += o[s], n = this.style.wordWrapWidth - a) : (n -= h, e += " " + o[s])
			}
			r < i.length - 1 && (e += "\n")
		}
		return e
	}, PIXI.Text.prototype.getBounds = function(t) {
		return this.dirty && (this.updateText(), this.dirty = !1), PIXI.Sprite.prototype.getBounds.call(this, t)
	}, PIXI.Text.prototype.destroy = function(t) {
		this.context = null, this.canvas = null, this.texture.destroy(void 0 === t ? !0 : t)
	}, PIXI.Text.fontPropertiesCache = {}, PIXI.Text.fontPropertiesCanvas = document.createElement("canvas"), PIXI.Text.fontPropertiesContext = PIXI.Text.fontPropertiesCanvas.getContext("2d"), PIXI.InteractionData = function() {
		this.global = new PIXI.Point, this.target = null, this.originalEvent = null
	}, PIXI.InteractionData.prototype.getLocalPosition = function(t, e) {
		var i = t.worldTransform,
			r = this.global,
			n = i.a,
			o = i.c,
			s = i.tx,
			a = i.b,
			h = i.d,
			l = i.ty,
			c = 1 / (n * h + o * -a);
		return e = e || new PIXI.Point, e.x = h * c * r.x + -o * c * r.y + (l * o - s * h) * c, e.y = n * c * r.y + -a * c * r.x + (-l * n + s * a) * c, e
	}, PIXI.InteractionData.prototype.constructor = PIXI.InteractionData, PIXI.InteractionManager = function(t) {
		this.stage = t, this.mouse = new PIXI.InteractionData, this.touches = {}, this.tempPoint = new PIXI.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1, this.resolution = 1, this._tempPoint = new PIXI.Point
	}, PIXI.InteractionManager.prototype.constructor = PIXI.InteractionManager, PIXI.InteractionManager.prototype.collectInteractiveSprite = function(t, e) {
		for (var i = t.children, r = i.length, n = r - 1; n >= 0; n--) {
			var o = i[n];
			o._interactive ? (e.interactiveChildren = !0, this.interactiveItems.push(o), o.children.length > 0 && this.collectInteractiveSprite(o, o)) : (o.__iParent = null, o.children.length > 0 && this.collectInteractiveSprite(o, e))
		}
	}, PIXI.InteractionManager.prototype.setTarget = function(t) {
		this.target = t, this.resolution = t.resolution, null === this.interactionDOMElement && this.setTargetDomElement(t.view)
	}, PIXI.InteractionManager.prototype.setTargetDomElement = function(t) {
		this.removeEvents(), window.navigator.msPointerEnabled && (t.style["-ms-content-zooming"] = "none", t.style["-ms-touch-action"] = "none"), this.interactionDOMElement = t, t.addEventListener("mousemove", this.onMouseMove, !0), t.addEventListener("mousedown", this.onMouseDown, !0), t.addEventListener("mouseout", this.onMouseOut, !0), t.addEventListener("touchstart", this.onTouchStart, !0), t.addEventListener("touchend", this.onTouchEnd, !0), t.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
	}, PIXI.InteractionManager.prototype.removeEvents = function() {
		this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
	}, PIXI.InteractionManager.prototype.update = function() {
		if (this.target) {
			var t = Date.now(),
				e = t - this.last;
			if (e = e * PIXI.INTERACTION_FREQUENCY / 1e3, !(1 > e)) {
				this.last = t;
				var i = 0;
				this.dirty && this.rebuildInteractiveGraph();
				var r = this.interactiveItems.length,
					n = "inherit",
					o = !1;
				for (i = 0; r > i; i++) {
					var s = this.interactiveItems[i];
					s.__hit = this.hitTest(s, this.mouse), this.mouse.target = s, s.__hit && !o ? (s.buttonMode && (n = s.defaultCursor), s.interactiveChildren || (o = !0), s.__isOver || (s.mouseover && s.mouseover(this.mouse), s.__isOver = !0)) : s.__isOver && (s.mouseout && s.mouseout(this.mouse), s.__isOver = !1)
				}
				this.currentCursorStyle !== n && (this.currentCursorStyle = n, this.interactionDOMElement.style.cursor = n)
			}
		}
	}, PIXI.InteractionManager.prototype.rebuildInteractiveGraph = function() {
		this.dirty = !1;
		for (var t = this.interactiveItems.length, e = 0; t > e; e++) this.interactiveItems[e].interactiveChildren = !1;
		this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
	}, PIXI.InteractionManager.prototype.onMouseMove = function(t) {
		this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
		var e = this.interactionDOMElement.getBoundingClientRect();
		this.mouse.global.x = (t.clientX - e.left) * (this.target.width / e.width) / this.resolution, this.mouse.global.y = (t.clientY - e.top) * (this.target.height / e.height) / this.resolution;
		for (var i = this.interactiveItems.length, r = 0; i > r; r++) {
			var n = this.interactiveItems[r];
			n.mousemove && n.mousemove(this.mouse)
		}
	}, PIXI.InteractionManager.prototype.onMouseDown = function(t) {
		this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t, PIXI.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent && this.mouse.originalEvent.preventDefault();
		for (var e = this.interactiveItems.length, i = this.mouse.originalEvent, r = 2 === i.button || 3 === i.which, n = r ? "rightdown" : "mousedown", o = r ? "rightclick" : "click", s = r ? "__rightIsDown" : "__mouseIsDown", a = r ? "__isRightDown" : "__isDown", h = 0; e > h; h++) {
			var l = this.interactiveItems[h];
			if ((l[n] || l[o]) && (l[s] = !0, l.__hit = this.hitTest(l, this.mouse), l.__hit && (l[n] && l[n](this.mouse), l[a] = !0, !l.interactiveChildren))) break
		}
	}, PIXI.InteractionManager.prototype.onMouseOut = function(t) {
		this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
		var e = this.interactiveItems.length;
		this.interactionDOMElement.style.cursor = "inherit";
		for (var i = 0; e > i; i++) {
			var r = this.interactiveItems[i];
			r.__isOver && (this.mouse.target = r, r.mouseout && r.mouseout(this.mouse), r.__isOver = !1)
		}
		this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
	}, PIXI.InteractionManager.prototype.onMouseUp = function(t) {
		this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
		for (var e = this.interactiveItems.length, i = !1, r = this.mouse.originalEvent, n = 2 === r.button || 3 === r.which, o = n ? "rightup" : "mouseup", s = n ? "rightclick" : "click", a = n ? "rightupoutside" : "mouseupoutside", h = n ? "__isRightDown" : "__isDown", l = 0; e > l; l++) {
			var c = this.interactiveItems[l];
			(c[s] || c[o] || c[a]) && (c.__hit = this.hitTest(c, this.mouse), c.__hit && !i ? (c[o] && c[o](this.mouse), c[h] && c[s] && c[s](this.mouse), c.interactiveChildren || (i = !0)) : c[h] && c[a] && c[a](this.mouse), c[h] = !1)
		}
	}, PIXI.InteractionManager.prototype.hitTest = function(t, e) {
		var i = e.global;
		if (!t.worldVisible) return !1;
		t.worldTransform.applyInverse(i, this._tempPoint);
		var r, n = this._tempPoint.x,
			o = this._tempPoint.y;
		if (e.target = t, t.hitArea && t.hitArea.contains) return t.hitArea.contains(n, o);
		if (t instanceof PIXI.Sprite) {
			var s, a = t.texture.frame.width,
				h = t.texture.frame.height,
				l = -a * t.anchor.x;
			if (n > l && l + a > n && (s = -h * t.anchor.y, o > s && s + h > o)) return !0
		} else if (t instanceof PIXI.Graphics) {
			var c = t.graphicsData;
			for (r = 0; r < c.length; r++) {
				var d = c[r];
				if (d.fill && d.shape && d.shape.contains(n, o)) return !0
			}
		}
		var u = t.children.length;
		for (r = 0; u > r; r++) {
			var p = t.children[r],
				f = this.hitTest(p, e);
			if (f) return e.target = t, !0
		}
		return !1
	}, PIXI.InteractionManager.prototype.onTouchMove = function(t) {
		this.dirty && this.rebuildInteractiveGraph();
		var e, i = this.interactionDOMElement.getBoundingClientRect(),
			r = t.changedTouches,
			n = 0;
		for (n = 0; n < r.length; n++) {
			var o = r[n];
			e = this.touches[o.identifier], e.originalEvent = t, e.global.x = (o.clientX - i.left) * (this.target.width / i.width) / this.resolution, e.global.y = (o.clientY - i.top) * (this.target.height / i.height) / this.resolution;
			for (var s = 0; s < this.interactiveItems.length; s++) {
				var a = this.interactiveItems[s];
				a.touchmove && a.__touchData && a.__touchData[o.identifier] && a.touchmove(e)
			}
		}
	}, PIXI.InteractionManager.prototype.onTouchStart = function(t) {
		this.dirty && this.rebuildInteractiveGraph();
		var e = this.interactionDOMElement.getBoundingClientRect();
		PIXI.AUTO_PREVENT_DEFAULT && t.preventDefault();
		for (var i = t.changedTouches, r = 0; r < i.length; r++) {
			var n = i[r],
				o = this.pool.pop();
			o || (o = new PIXI.InteractionData), o.originalEvent = t, this.touches[n.identifier] = o, o.global.x = (n.clientX - e.left) * (this.target.width / e.width) / this.resolution, o.global.y = (n.clientY - e.top) * (this.target.height / e.height) / this.resolution;
			for (var s = this.interactiveItems.length, a = 0; s > a; a++) {
				var h = this.interactiveItems[a];
				if ((h.touchstart || h.tap) && (h.__hit = this.hitTest(h, o), h.__hit && (h.touchstart && h.touchstart(o), h.__isDown = !0, h.__touchData = h.__touchData || {}, h.__touchData[n.identifier] = o, !h.interactiveChildren))) break
			}
		}
	}, PIXI.InteractionManager.prototype.onTouchEnd = function(t) {
		this.dirty && this.rebuildInteractiveGraph();
		for (var e = this.interactionDOMElement.getBoundingClientRect(), i = t.changedTouches, r = 0; r < i.length; r++) {
			var n = i[r],
				o = this.touches[n.identifier],
				s = !1;
			o.global.x = (n.clientX - e.left) * (this.target.width / e.width) / this.resolution, o.global.y = (n.clientY - e.top) * (this.target.height / e.height) / this.resolution;
			for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
				var l = this.interactiveItems[h];
				l.__touchData && l.__touchData[n.identifier] && (l.__hit = this.hitTest(l, l.__touchData[n.identifier]), o.originalEvent = t, (l.touchend || l.tap) && (l.__hit && !s ? (l.touchend && l.touchend(o), l.__isDown && l.tap && l.tap(o), l.interactiveChildren || (s = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(o), l.__isDown = !1), l.__touchData[n.identifier] = null)
			}
			this.pool.push(o), this.touches[n.identifier] = null
		}
	}, PIXI.Stage = function(t) {
		PIXI.DisplayObjectContainer.call(this), this.worldTransform = new PIXI.Matrix, this.interactive = !0, this.interactionManager = new PIXI.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new PIXI.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(t)
	}, PIXI.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Stage.prototype.constructor = PIXI.Stage, PIXI.Stage.prototype.setInteractionDelegate = function(t) {
		this.interactionManager.setTargetDomElement(t)
	}, PIXI.Stage.prototype.updateTransform = function() {
		this.worldAlpha = 1;
		for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform();
		this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
	}, PIXI.Stage.prototype.setBackgroundColor = function(t) {
		this.backgroundColor = t || 0, this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor);
		var e = this.backgroundColor.toString(16);
		e = "000000".substr(0, 6 - e.length) + e, this.backgroundColorString = "#" + e
	}, PIXI.Stage.prototype.getMousePosition = function() {
		return this.interactionManager.mouse.global
	},
	function(t) {
		for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r) t.requestAnimationFrame = t[i[r] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
		t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
			var r = (new Date).getTime(),
				n = Math.max(0, 16 - (r - e)),
				o = t.setTimeout(function() {
					i(r + n)
				}, n);
			return e = r + n, o
		}), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
			clearTimeout(t)
		}), t.requestAnimFrame = t.requestAnimationFrame
	}(this), PIXI.hex2rgb = function(t) {
		return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
	}, PIXI.rgb2hex = function(t) {
		return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
	}, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
		return function(t) {
			function e() {
				for (var r = arguments.length, o = new Array(r); r--;) o[r] = arguments[r];
				return o = n.concat(o), i.apply(this instanceof e ? this : t, o)
			}
			var i = this,
				r = arguments.length - 1,
				n = [];
			if (r > 0)
				for (n.length = r; r--;) n[r] = arguments[r + 1];
			if ("function" != typeof i) throw new TypeError;
			return e.prototype = function o(t) {
				return t && (o.prototype = t), this instanceof o ? void 0 : new o
			}(i.prototype), e
		}
	}()), PIXI.AjaxRequest = function() {
		var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
		if (!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
		for (var e = 0; e < t.length; e++) try {
			return new window.ActiveXObject(t[e])
		} catch (i) {}
	}, PIXI.canUseNewCanvasBlendModes = function() {
		if ("undefined" == typeof document) return !1;
		var t = document.createElement("canvas");
		t.width = 1, t.height = 1;
		var e = t.getContext("2d");
		return e.fillStyle = "#000", e.fillRect(0, 0, 1, 1), e.globalCompositeOperation = "multiply", e.fillStyle = "#fff", e.fillRect(0, 0, 1, 1), 0 === e.getImageData(0, 0, 1, 1).data[0]
	}, PIXI.getNextPowerOfTwo = function(t) {
		if (t > 0 && 0 === (t & t - 1)) return t;
		for (var e = 1; t > e;) e <<= 1;
		return e
	}, PIXI.isPowerOfTwo = function(t, e) {
		return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
	}, PIXI.PolyK = {}, PIXI.PolyK.Triangulate = function(t) {
		var e = !0,
			i = t.length >> 1;
		if (3 > i) return [];
		for (var r = [], n = [], o = 0; i > o; o++) n.push(o);
		o = 0;
		for (var s = i; s > 3;) {
			var a = n[(o + 0) % s],
				h = n[(o + 1) % s],
				l = n[(o + 2) % s],
				c = t[2 * a],
				d = t[2 * a + 1],
				u = t[2 * h],
				p = t[2 * h + 1],
				f = t[2 * l],
				I = t[2 * l + 1],
				g = !1;
			if (PIXI.PolyK._convex(c, d, u, p, f, I, e)) {
				g = !0;
				for (var v = 0; s > v; v++) {
					var y = n[v];
					if (y !== a && y !== h && y !== l && PIXI.PolyK._PointInTriangle(t[2 * y], t[2 * y + 1], c, d, u, p, f, I)) {
						g = !1;
						break
					}
				}
			}
			if (g) r.push(a, h, l), n.splice((o + 1) % s, 1), s--, o = 0;
			else if (o++ > 3 * s) {
				if (!e) return null;
				for (r = [], n = [], o = 0; i > o; o++) n.push(o);
				o = 0, s = i, e = !1
			}
		}
		return r.push(n[0], n[1], n[2]), r
	}, PIXI.PolyK._PointInTriangle = function(t, e, i, r, n, o, s, a) {
		var h = s - i,
			l = a - r,
			c = n - i,
			d = o - r,
			u = t - i,
			p = e - r,
			f = h * h + l * l,
			I = h * c + l * d,
			g = h * u + l * p,
			v = c * c + d * d,
			y = c * u + d * p,
			w = 1 / (f * v - I * I),
			P = (v * g - I * y) * w,
			m = (f * y - I * g) * w;
		return P >= 0 && m >= 0 && 1 > P + m
	}, PIXI.PolyK._convex = function(t, e, i, r, n, o, s) {
		return (e - r) * (n - i) + (i - t) * (o - r) >= 0 === s
	}, PIXI.EventTarget = {
		call: function(t) {
			t && (t = t.prototype || t, PIXI.EventTarget.mixin(t))
		},
		mixin: function(t) {
			t.listeners = function(t) {
				return this._listeners = this._listeners || {}, this._listeners[t] ? this._listeners[t].slice() : []
			}, t.emit = t.dispatchEvent = function(t, e) {
				if (this._listeners = this._listeners || {}, "object" == typeof t && (e = t, t = t.type), e && e.__isEventObject === !0 || (e = new PIXI.Event(this, t, e)), this._listeners && this._listeners[t]) {
					var i, r = this._listeners[t].slice(0),
						n = r.length,
						o = r[0];
					for (i = 0; n > i; o = r[++i])
						if (o.call(this, e), e.stoppedImmediate) return this;
					if (e.stopped) return this
				}
				return this.parent && this.parent.emit && this.parent.emit.call(this.parent, t, e), this
			}, t.on = t.addEventListener = function(t, e) {
				return this._listeners = this._listeners || {}, (this._listeners[t] = this._listeners[t] || []).push(e), this
			}, t.once = function(t, e) {
				function i() {
					e.apply(r.off(t, i), arguments)
				}
				this._listeners = this._listeners || {};
				var r = this;
				return i._originalHandler = e, this.on(t, i)
			}, t.off = t.removeEventListener = function(t, e) {
				if (this._listeners = this._listeners || {}, !this._listeners[t]) return this;
				for (var i = this._listeners[t], r = e ? i.length : 0; r-- > 0;)(i[r] === e || i[r]._originalHandler === e) && i.splice(r, 1);
				return 0 === i.length && delete this._listeners[t], this
			}, t.removeAllListeners = function(t) {
				return this._listeners = this._listeners || {}, this._listeners[t] ? (delete this._listeners[t], this) : this
			}
		}
	}, PIXI.Event = function(t, e, i) {
		this.__isEventObject = !0, this.stopped = !1, this.stoppedImmediate = !1, this.target = t, this.type = e, this.data = i, this.content = i, this.timeStamp = Date.now()
	}, PIXI.Event.prototype.stopPropagation = function() {
		this.stopped = !0
	}, PIXI.Event.prototype.stopImmediatePropagation = function() {
		this.stoppedImmediate = !0
	}, PIXI.autoDetectRenderer = function(t, e, i) {
		t || (t = 800), e || (e = 600);
		var r = function() {
			try {
				var t = document.createElement("canvas");
				return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
			} catch (e) {
				return !1
			}
		}();
		return r ? new PIXI.WebGLRenderer(t, e, i) : new PIXI.CanvasRenderer(t, e, i)
	}, PIXI.autoDetectRecommendedRenderer = function(t, e, i) {
		t || (t = 800), e || (e = 600);
		var r = function() {
				try {
					var t = document.createElement("canvas");
					return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
				} catch (e) {
					return !1
				}
			}(),
			n = /Android/i.test(navigator.userAgent);
		return r && !n ? new PIXI.WebGLRenderer(t, e, i) : new PIXI.CanvasRenderer(t, e, i)
	}, PIXI.initDefaultShaders = function() {}, PIXI.CompileVertexShader = function(t, e) {
		return PIXI._CompileShader(t, e, t.VERTEX_SHADER)
	}, PIXI.CompileFragmentShader = function(t, e) {
		return PIXI._CompileShader(t, e, t.FRAGMENT_SHADER)
	}, PIXI._CompileShader = function(t, e, i) {
		var r = e.join("\n"),
			n = t.createShader(i);
		return t.shaderSource(n, r), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (window.console.log(t.getShaderInfoLog(n)), null)
	}, PIXI.compileProgram = function(t, e, i) {
		var r = PIXI.CompileFragmentShader(t, i),
			n = PIXI.CompileVertexShader(t, e),
			o = t.createProgram();
		return t.attachShader(o, n), t.attachShader(o, r), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || window.console.log("Could not initialise shaders"), o
	}, PIXI.PixiShader = function(t) {
		this._UID = PIXI._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.firstRun = !0, this.dirty = !0, this.attributes = [], this.init()
	}, PIXI.PixiShader.prototype.constructor = PIXI.PixiShader, PIXI.PixiShader.prototype.init = function() {
		var t = this.gl,
			e = PIXI.compileProgram(t, this.vertexSrc || PIXI.PixiShader.defaultVertexSrc, this.fragmentSrc);
		t.useProgram(e), this.uSampler = t.getUniformLocation(e, "uSampler"), this.projectionVector = t.getUniformLocation(e, "projectionVector"), this.offsetVector = t.getUniformLocation(e, "offsetVector"), this.dimensions = t.getUniformLocation(e, "dimensions"), this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(e, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
		for (var i in this.uniforms) this.uniforms[i].uniformLocation = t.getUniformLocation(e, i);
		this.initUniforms(), this.program = e
	}, PIXI.PixiShader.prototype.initUniforms = function() {
		this.textureCount = 1;
		var t, e = this.gl;
		for (var i in this.uniforms) {
			t = this.uniforms[i];
			var r = t.type;
			"sampler2D" === r ? (t._init = !1, null !== t.value && this.initSampler2D(t)) : "mat2" === r || "mat3" === r || "mat4" === r ? (t.glMatrix = !0, t.glValueLength = 1, "mat2" === r ? t.glFunc = e.uniformMatrix2fv : "mat3" === r ? t.glFunc = e.uniformMatrix3fv : "mat4" === r && (t.glFunc = e.uniformMatrix4fv)) : (t.glFunc = e["uniform" + r], "2f" === r || "2i" === r ? t.glValueLength = 2 : "3f" === r || "3i" === r ? t.glValueLength = 3 : "4f" === r || "4i" === r ? t.glValueLength = 4 : t.glValueLength = 1)
		}
	}, PIXI.PixiShader.prototype.initSampler2D = function(t) {
		if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
			var e = this.gl;
			if (e.activeTexture(e["TEXTURE" + this.textureCount]), e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]), t.textureData) {
				var i = t.textureData,
					r = i.magFilter ? i.magFilter : e.LINEAR,
					n = i.minFilter ? i.minFilter : e.LINEAR,
					o = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE,
					s = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE,
					a = i.luminance ? e.LUMINANCE : e.RGBA;
				if (i.repeat && (o = e.REPEAT, s = e.REPEAT), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY), i.width) {
					var h = i.width ? i.width : 512,
						l = i.height ? i.height : 2,
						c = i.border ? i.border : 0;
					e.texImage2D(e.TEXTURE_2D, 0, a, h, l, c, a, e.UNSIGNED_BYTE, null)
				} else e.texImage2D(e.TEXTURE_2D, 0, a, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, s)
			}
			e.uniform1i(t.uniformLocation, this.textureCount), t._init = !0, this.textureCount++
		}
	}, PIXI.PixiShader.prototype.syncUniforms = function() {
		this.textureCount = 1;
		var t, e = this.gl;
		for (var i in this.uniforms) t = this.uniforms[i], 1 === t.glValueLength ? t.glMatrix === !0 ? t.glFunc.call(e, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(e, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (e.activeTexture(e["TEXTURE" + this.textureCount]), t.value.baseTexture._dirty[e.id] ? PIXI.instances[e.id].updateTexture(t.value.baseTexture) : e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]), e.uniform1i(t.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(t))
	}, PIXI.PixiShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
	}, PIXI.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"], PIXI.PixiFastShader = function(t) {
		this._UID = PIXI._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
	}, PIXI.PixiFastShader.prototype.constructor = PIXI.PixiFastShader, PIXI.PixiFastShader.prototype.init = function() {
		var t = this.gl,
			e = PIXI.compileProgram(t, this.vertexSrc, this.fragmentSrc);
		t.useProgram(e), this.uSampler = t.getUniformLocation(e, "uSampler"), this.projectionVector = t.getUniformLocation(e, "projectionVector"), this.offsetVector = t.getUniformLocation(e, "offsetVector"), this.dimensions = t.getUniformLocation(e, "dimensions"), this.uMatrix = t.getUniformLocation(e, "uMatrix"), this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"), this.aPositionCoord = t.getAttribLocation(e, "aPositionCoord"), this.aScale = t.getAttribLocation(e, "aScale"), this.aRotation = t.getAttribLocation(e, "aRotation"), this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(e, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = e
	}, PIXI.PixiFastShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
	}, PIXI.StripShader = function(t) {
		this._UID = PIXI._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"], this.init()
	}, PIXI.StripShader.prototype.constructor = PIXI.StripShader, PIXI.StripShader.prototype.init = function() {
		var t = this.gl,
			e = PIXI.compileProgram(t, this.vertexSrc, this.fragmentSrc);
		t.useProgram(e), this.uSampler = t.getUniformLocation(e, "uSampler"), this.projectionVector = t.getUniformLocation(e, "projectionVector"), this.offsetVector = t.getUniformLocation(e, "offsetVector"), this.colorAttribute = t.getAttribLocation(e, "aColor"), this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"), this.attributes = [this.aVertexPosition, this.aTextureCoord], this.translationMatrix = t.getUniformLocation(e, "translationMatrix"), this.alpha = t.getUniformLocation(e, "alpha"), this.program = e
	}, PIXI.StripShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
	}, PIXI.PrimitiveShader = function(t) {
		this._UID = PIXI._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
	}, PIXI.PrimitiveShader.prototype.constructor = PIXI.PrimitiveShader, PIXI.PrimitiveShader.prototype.init = function() {
		var t = this.gl,
			e = PIXI.compileProgram(t, this.vertexSrc, this.fragmentSrc);
		t.useProgram(e), this.projectionVector = t.getUniformLocation(e, "projectionVector"), this.offsetVector = t.getUniformLocation(e, "offsetVector"), this.tintColor = t.getUniformLocation(e, "tint"), this.flipY = t.getUniformLocation(e, "flipY"), this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"), this.colorAttribute = t.getAttribLocation(e, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(e, "translationMatrix"), this.alpha = t.getUniformLocation(e, "alpha"), this.program = e
	}, PIXI.PrimitiveShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
	}, PIXI.ComplexPrimitiveShader = function(t) {
		this._UID = PIXI._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"], this.init()
	}, PIXI.ComplexPrimitiveShader.prototype.constructor = PIXI.ComplexPrimitiveShader, PIXI.ComplexPrimitiveShader.prototype.init = function() {
		var t = this.gl,
			e = PIXI.compileProgram(t, this.vertexSrc, this.fragmentSrc);
		t.useProgram(e), this.projectionVector = t.getUniformLocation(e, "projectionVector"), this.offsetVector = t.getUniformLocation(e, "offsetVector"), this.tintColor = t.getUniformLocation(e, "tint"), this.color = t.getUniformLocation(e, "color"), this.flipY = t.getUniformLocation(e, "flipY"), this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(e, "translationMatrix"), this.alpha = t.getUniformLocation(e, "alpha"), this.program = e
	}, PIXI.ComplexPrimitiveShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
	}, PIXI.WebGLGraphics = function() {}, PIXI.WebGLGraphics.renderGraphics = function(t, e) {
		var i, r = e.gl,
			n = e.projection,
			o = e.offset,
			s = e.shaderManager.primitiveShader;
		t.dirty && PIXI.WebGLGraphics.updateGraphics(t, r);
		for (var a = t._webGL[r.id], h = 0; h < a.data.length; h++) 1 === a.data[h].mode ? (i = a.data[h], e.stencilManager.pushStencil(t, i, e), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (i.indices.length - 4)), e.stencilManager.popStencil(t, i, e)) : (i = a.data[h], e.shaderManager.setShader(s), s = e.shaderManager.primitiveShader, r.uniformMatrix3fv(s.translationMatrix, !1, t.worldTransform.toArray(!0)), r.uniform1f(s.flipY, 1), r.uniform2f(s.projectionVector, n.x, -n.y), r.uniform2f(s.offsetVector, -o.x, -o.y), r.uniform3fv(s.tintColor, PIXI.hex2rgb(t.tint)), r.uniform1f(s.alpha, t.worldAlpha), r.bindBuffer(r.ARRAY_BUFFER, i.buffer), r.vertexAttribPointer(s.aVertexPosition, 2, r.FLOAT, !1, 24, 0), r.vertexAttribPointer(s.colorAttribute, 4, r.FLOAT, !1, 24, 8), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, i.indexBuffer), r.drawElements(r.TRIANGLE_STRIP, i.indices.length, r.UNSIGNED_SHORT, 0))
	}, PIXI.WebGLGraphics.updateGraphics = function(t, e) {
		var i = t._webGL[e.id];
		i || (i = t._webGL[e.id] = {
			lastIndex: 0,
			data: [],
			gl: e
		}), t.dirty = !1;
		var r;
		if (t.clearDirty) {
			for (t.clearDirty = !1, r = 0; r < i.data.length; r++) {
				var n = i.data[r];
				n.reset(), PIXI.WebGLGraphics.graphicsDataPool.push(n)
			}
			i.data = [], i.lastIndex = 0
		}
		var o;
		for (r = i.lastIndex; r < t.graphicsData.length; r++) {
			var s = t.graphicsData[r];
			if (s.type === PIXI.Graphics.POLY) {
				if (s.points = s.shape.points.slice(), s.shape.closed && (s.points[0] !== s.points[s.points.length - 2] || s.points[1] !== s.points[s.points.length - 1]) && s.points.push(s.points[0], s.points[1]), s.fill && s.points.length >= 6)
					if (s.points.length < 12) {
						o = PIXI.WebGLGraphics.switchMode(i, 0);
						var a = PIXI.WebGLGraphics.buildPoly(s, o);
						a || (o = PIXI.WebGLGraphics.switchMode(i, 1), PIXI.WebGLGraphics.buildComplexPoly(s, o))
					} else o = PIXI.WebGLGraphics.switchMode(i, 1), PIXI.WebGLGraphics.buildComplexPoly(s, o);
				s.lineWidth > 0 && (o = PIXI.WebGLGraphics.switchMode(i, 0), PIXI.WebGLGraphics.buildLine(s, o))
			} else o = PIXI.WebGLGraphics.switchMode(i, 0), s.type === PIXI.Graphics.RECT ? PIXI.WebGLGraphics.buildRectangle(s, o) : s.type === PIXI.Graphics.CIRC || s.type === PIXI.Graphics.ELIP ? PIXI.WebGLGraphics.buildCircle(s, o) : s.type === PIXI.Graphics.RREC && PIXI.WebGLGraphics.buildRoundedRectangle(s, o);
			i.lastIndex++
		}
		for (r = 0; r < i.data.length; r++) o = i.data[r], o.dirty && o.upload()
	}, PIXI.WebGLGraphics.switchMode = function(t, e) {
		var i;
		return t.data.length ? (i = t.data[t.data.length - 1], (i.mode !== e || 1 === e) && (i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl), i.mode = e, t.data.push(i))) : (i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl), i.mode = e, t.data.push(i)), i.dirty = !0, i
	}, PIXI.WebGLGraphics.buildRectangle = function(t, e) {
		var i = t.shape,
			r = i.x,
			n = i.y,
			o = i.width,
			s = i.height;
		if (t.fill) {
			var a = PIXI.hex2rgb(t.fillColor),
				h = t.fillAlpha,
				l = a[0] * h,
				c = a[1] * h,
				d = a[2] * h,
				u = e.points,
				p = e.indices,
				f = u.length / 6;
			u.push(r, n), u.push(l, c, d, h), u.push(r + o, n), u.push(l, c, d, h), u.push(r, n + s), u.push(l, c, d, h), u.push(r + o, n + s), u.push(l, c, d, h), p.push(f, f, f + 1, f + 2, f + 3, f + 3)
		}
		if (t.lineWidth) {
			var I = t.points;
			t.points = [r, n, r + o, n, r + o, n + s, r, n + s, r, n], PIXI.WebGLGraphics.buildLine(t, e), t.points = I
		}
	}, PIXI.WebGLGraphics.buildRoundedRectangle = function(t, e) {
		var i = t.shape,
			r = i.x,
			n = i.y,
			o = i.width,
			s = i.height,
			a = i.radius,
			h = [];
		if (h.push(r, n + a), h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(r, n + s - a, r, n + s, r + a, n + s)), h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(r + o - a, n + s, r + o, n + s, r + o, n + s - a)), h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(r + o, n + a, r + o, n, r + o - a, n)), h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(r + a, n, r, n, r, n + a)), t.fill) {
			var l = PIXI.hex2rgb(t.fillColor),
				c = t.fillAlpha,
				d = l[0] * c,
				u = l[1] * c,
				p = l[2] * c,
				f = e.points,
				I = e.indices,
				g = f.length / 6,
				v = PIXI.PolyK.Triangulate(h),
				y = 0;
			for (y = 0; y < v.length; y += 3) I.push(v[y] + g), I.push(v[y] + g), I.push(v[y + 1] + g), I.push(v[y + 2] + g), I.push(v[y + 2] + g);
			for (y = 0; y < h.length; y++) f.push(h[y], h[++y], d, u, p, c)
		}
		if (t.lineWidth) {
			var w = t.points;
			t.points = h, PIXI.WebGLGraphics.buildLine(t, e), t.points = w
		}
	}, PIXI.WebGLGraphics.quadraticBezierCurve = function(t, e, i, r, n, o) {
		function s(t, e, i) {
			var r = e - t;
			return t + r * i
		}
		for (var a, h, l, c, d, u, p = 20, f = [], I = 0, g = 0; p >= g; g++) I = g / p, a = s(t, i, I), h = s(e, r, I), l = s(i, n, I), c = s(r, o, I), d = s(a, l, I), u = s(h, c, I), f.push(d, u);
		return f
	}, PIXI.WebGLGraphics.buildCircle = function(t, e) {
		var i, r, n = t.shape,
			o = n.x,
			s = n.y;
		t.type === PIXI.Graphics.CIRC ? (i = n.radius, r = n.radius) : (i = n.width, r = n.height);
		var a = 40,
			h = 2 * Math.PI / a,
			l = 0;
		if (t.fill) {
			var c = PIXI.hex2rgb(t.fillColor),
				d = t.fillAlpha,
				u = c[0] * d,
				p = c[1] * d,
				f = c[2] * d,
				I = e.points,
				g = e.indices,
				v = I.length / 6;
			for (g.push(v), l = 0; a + 1 > l; l++) I.push(o, s, u, p, f, d), I.push(o + Math.sin(h * l) * i, s + Math.cos(h * l) * r, u, p, f, d), g.push(v++, v++);
			g.push(v - 1)
		}
		if (t.lineWidth) {
			var y = t.points;
			for (t.points = [], l = 0; a + 1 > l; l++) t.points.push(o + Math.sin(h * l) * i, s + Math.cos(h * l) * r);
			PIXI.WebGLGraphics.buildLine(t, e), t.points = y
		}
	}, PIXI.WebGLGraphics.buildLine = function(t, e) {
		var i = 0,
			r = t.points;
		if (0 !== r.length) {
			if (t.lineWidth % 2)
				for (i = 0; i < r.length; i++) r[i] += .5;
			var n = new PIXI.Point(r[0], r[1]),
				o = new PIXI.Point(r[r.length - 2], r[r.length - 1]);
			if (n.x === o.x && n.y === o.y) {
				r = r.slice(), r.pop(), r.pop(), o = new PIXI.Point(r[r.length - 2], r[r.length - 1]);
				var s = o.x + .5 * (n.x - o.x),
					a = o.y + .5 * (n.y - o.y);
				r.unshift(s, a), r.push(s, a)
			}
			var h, l, c, d, u, p, f, I, g, v, y, w, P, m, x, b, T, X, S, C, M, _, E, R = e.points,
				A = e.indices,
				L = r.length / 2,
				B = r.length,
				G = R.length / 6,
				O = t.lineWidth / 2,
				D = PIXI.hex2rgb(t.lineColor),
				F = t.lineAlpha,
				U = D[0] * F,
				k = D[1] * F,
				W = D[2] * F;
			for (c = r[0], d = r[1], u = r[2], p = r[3], g = -(d - p), v = c - u, E = Math.sqrt(g * g + v * v), g /= E, v /= E, g *= O, v *= O, R.push(c - g, d - v, U, k, W, F), R.push(c + g, d + v, U, k, W, F), i = 1; L - 1 > i; i++) c = r[2 * (i - 1)], d = r[2 * (i - 1) + 1], u = r[2 * i], p = r[2 * i + 1], f = r[2 * (i + 1)], I = r[2 * (i + 1) + 1], g = -(d - p), v = c - u, E = Math.sqrt(g * g + v * v), g /= E, v /= E, g *= O, v *= O, y = -(p - I), w = u - f, E = Math.sqrt(y * y + w * w), y /= E, w /= E, y *= O, w *= O, x = -v + d - (-v + p), b = -g + u - (-g + c), T = (-g + c) * (-v + p) - (-g + u) * (-v + d), X = -w + I - (-w + p), S = -y + u - (-y + f), C = (-y + f) * (-w + p) - (-y + u) * (-w + I), M = x * S - X * b, Math.abs(M) < .1 ? (M += 10.1, R.push(u - g, p - v, U, k, W, F), R.push(u + g, p + v, U, k, W, F)) : (h = (b * C - S * T) / M, l = (X * T - x * C) / M, _ = (h - u) * (h - u) + (l - p) + (l - p), _ > 19600 ? (P = g - y, m = v - w, E = Math.sqrt(P * P + m * m), P /= E, m /= E, P *= O, m *= O, R.push(u - P, p - m), R.push(U, k, W, F), R.push(u + P, p + m), R.push(U, k, W, F), R.push(u - P, p - m), R.push(U, k, W, F), B++) : (R.push(h, l), R.push(U, k, W, F), R.push(u - (h - u), p - (l - p)), R.push(U, k, W, F)));
			for (c = r[2 * (L - 2)], d = r[2 * (L - 2) + 1], u = r[2 * (L - 1)], p = r[2 * (L - 1) + 1], g = -(d - p), v = c - u, E = Math.sqrt(g * g + v * v), g /= E, v /= E, g *= O, v *= O, R.push(u - g, p - v), R.push(U, k, W, F), R.push(u + g, p + v), R.push(U, k, W, F), A.push(G), i = 0; B > i; i++) A.push(G++);
			A.push(G - 1)
		}
	}, PIXI.WebGLGraphics.buildComplexPoly = function(t, e) {
		var i = t.points.slice();
		if (!(i.length < 6)) {
			var r = e.indices;
			e.points = i, e.alpha = t.fillAlpha, e.color = PIXI.hex2rgb(t.fillColor);
			for (var n, o, s = 1 / 0, a = -(1 / 0), h = 1 / 0, l = -(1 / 0), c = 0; c < i.length; c += 2) n = i[c], o = i[c + 1], s = s > n ? n : s, a = n > a ? n : a, h = h > o ? o : h, l = o > l ? o : l;
			i.push(s, h, a, h, a, l, s, l);
			var d = i.length / 2;
			for (c = 0; d > c; c++) r.push(c)
		}
	}, PIXI.WebGLGraphics.buildPoly = function(t, e) {
		var i = t.points;
		if (!(i.length < 6)) {
			var r = e.points,
				n = e.indices,
				o = i.length / 2,
				s = PIXI.hex2rgb(t.fillColor),
				a = t.fillAlpha,
				h = s[0] * a,
				l = s[1] * a,
				c = s[2] * a,
				d = PIXI.PolyK.Triangulate(i);
			if (!d) return !1;
			var u = r.length / 6,
				p = 0;
			for (p = 0; p < d.length; p += 3) n.push(d[p] + u), n.push(d[p] + u), n.push(d[p + 1] + u), n.push(d[p + 2] + u), n.push(d[p + 2] + u);
			for (p = 0; o > p; p++) r.push(i[2 * p], i[2 * p + 1], h, l, c, a);
			return !0
		}
	}, PIXI.WebGLGraphics.graphicsDataPool = [], PIXI.WebGLGraphicsData = function(t) {
		this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
	}, PIXI.WebGLGraphicsData.prototype.reset = function() {
		this.points = [], this.indices = []
	}, PIXI.WebGLGraphicsData.prototype.upload = function() {
		var t = this.gl;
		this.glPoints = new PIXI.Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndicies = new PIXI.Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndicies, t.STATIC_DRAW), this.dirty = !1
	}, PIXI.glContexts = [], PIXI.instances = [], PIXI.WebGLRenderer = function(t, e, i) {
		if (i)
			for (var r in PIXI.defaultRenderOptions) "undefined" == typeof i[r] && (i[r] = PIXI.defaultRenderOptions[r]);
		else i = PIXI.defaultRenderOptions;
		PIXI.defaultRenderer || (PIXI.sayHello("webGL"), PIXI.defaultRenderer = this), this.type = PIXI.WEBGL_RENDERER, this.resolution = i.resolution, this.transparent = i.transparent, this.autoResize = i.autoResize || !1, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this.width = t || 800, this.height = e || 600, this.view = i.view || document.createElement("canvas"), this.contextLostBound = this.handleContextLost.bind(this), this.contextRestoredBound = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLostBound, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredBound, !1), this._contextOptions = {
			alpha: this.transparent,
			antialias: i.antialias,
			premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
			stencil: !0,
			preserveDrawingBuffer: i.preserveDrawingBuffer
		}, this.projection = new PIXI.Point, this.offset = new PIXI.Point(0, 0), this.shaderManager = new PIXI.WebGLShaderManager, this.spriteBatch = new PIXI.WebGLSpriteBatch, this.maskManager = new PIXI.WebGLMaskManager, this.filterManager = new PIXI.WebGLFilterManager, this.stencilManager = new PIXI.WebGLStencilManager, this.blendModeManager = new PIXI.WebGLBlendModeManager, this.renderSession = {
			roundPixels: !0
		}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.blendModeManager = this.blendModeManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.stencilManager = this.stencilManager, this.renderSession.renderer = this, this.renderSession.resolution = this.resolution, this.initContext(), this.mapBlendModes()
	}, PIXI.WebGLRenderer.prototype.constructor = PIXI.WebGLRenderer, PIXI.WebGLRenderer.prototype.initContext = function() {
		var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
		if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
		this.glContextId = t.id = PIXI.WebGLRenderer.glContextId++, PIXI.glContexts[this.glContextId] = t, PIXI.instances[this.glContextId] = this, t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.shaderManager.setContext(t), this.spriteBatch.setContext(t), this.maskManager.setContext(t), this.filterManager.setContext(t), this.blendModeManager.setContext(t), this.stencilManager.setContext(t), this.renderSession.gl = this.gl, this.resize(this.width, this.height)
	}, PIXI.WebGLRenderer.prototype.render = function(t) {
		if (!this.contextLost) {
			this.__stage !== t && (t.interactive && t.interactionManager.removeEvents(), this.__stage = t), t.updateTransform();
			var e = this.gl;
			t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], 1), e.clear(e.COLOR_BUFFER_BIT), this.renderDisplayObject(t, this.projection)
		}
	}, PIXI.WebGLRenderer.prototype.renderDisplayObject = function(t, e, i) {
		this.renderSession.blendModeManager.setBlendMode(PIXI.blendModes.NORMAL), this.renderSession.drawCount = 0, this.renderSession.flipY = i ? -1 : 1, this.renderSession.projection = e, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, i), t._renderWebGL(this.renderSession), this.spriteBatch.end()
	}, PIXI.WebGLRenderer.prototype.resize = function(t, e) {
		this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2 / this.resolution, this.projection.y = -this.height / 2 / this.resolution
	}, PIXI.WebGLRenderer.prototype.updateTexture = function(t) {
		if (t.hasLoaded) {
			var e = this.gl;
			return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture()), e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === PIXI.scaleModes.LINEAR ? e.LINEAR : e.NEAREST), t.mipmap && PIXI.isPowerOfTwo(t.width, t.height) ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === PIXI.scaleModes.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === PIXI.scaleModes.LINEAR ? e.LINEAR : e.NEAREST), t._powerOf2 ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), t._dirty[e.id] = !1, t._glTextures[e.id]
		}
	}, PIXI.WebGLRenderer.prototype.handleContextLost = function(t) {
		t.preventDefault(), this.contextLost = !0
	}, PIXI.WebGLRenderer.prototype.handleContextRestored = function() {
		this.initContext();
		for (var t in PIXI.TextureCache) {
			var e = PIXI.TextureCache[t].baseTexture;
			e._glTextures = []
		}
		this.contextLost = !1
	}, PIXI.WebGLRenderer.prototype.destroy = function() {
		this.view.removeEventListener("webglcontextlost", this.contextLostBound), this.view.removeEventListener("webglcontextrestored", this.contextRestoredBound), PIXI.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
	}, PIXI.WebGLRenderer.prototype.mapBlendModes = function() {
		var t = this.gl;
		PIXI.blendModesWebGL || (PIXI.blendModesWebGL = [], PIXI.blendModesWebGL[PIXI.blendModes.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.SCREEN] = [t.SRC_ALPHA, t.ONE], PIXI.blendModesWebGL[PIXI.blendModes.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], PIXI.blendModesWebGL[PIXI.blendModes.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA])
	}, PIXI.WebGLRenderer.glContextId = 0, PIXI.WebGLBlendModeManager = function() {
		this.currentBlendMode = 99999
	}, PIXI.WebGLBlendModeManager.prototype.constructor = PIXI.WebGLBlendModeManager, PIXI.WebGLBlendModeManager.prototype.setContext = function(t) {
		this.gl = t
	}, PIXI.WebGLBlendModeManager.prototype.setBlendMode = function(t) {
		if (this.currentBlendMode === t) return !1;
		this.currentBlendMode = t;
		var e = PIXI.blendModesWebGL[this.currentBlendMode];
		return this.gl.blendFunc(e[0], e[1]), !0
	}, PIXI.WebGLBlendModeManager.prototype.destroy = function() {
		this.gl = null
	}, PIXI.WebGLMaskManager = function() {}, PIXI.WebGLMaskManager.prototype.constructor = PIXI.WebGLMaskManager, PIXI.WebGLMaskManager.prototype.setContext = function(t) {
		this.gl = t
	}, PIXI.WebGLMaskManager.prototype.pushMask = function(t, e) {
		var i = e.gl;
		t.dirty && PIXI.WebGLGraphics.updateGraphics(t, i), t._webGL[i.id].data.length && e.stencilManager.pushStencil(t, t._webGL[i.id].data[0], e)
	}, PIXI.WebGLMaskManager.prototype.popMask = function(t, e) {
		var i = this.gl;
		e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e)
	}, PIXI.WebGLMaskManager.prototype.destroy = function() {
		this.gl = null
	}, PIXI.WebGLStencilManager = function() {
		this.stencilStack = [], this.reverse = !0, this.count = 0
	}, PIXI.WebGLStencilManager.prototype.setContext = function(t) {
		this.gl = t
	}, PIXI.WebGLStencilManager.prototype.pushStencil = function(t, e, i) {
		var r = this.gl;
		this.bindGraphics(t, e, i), 0 === this.stencilStack.length && (r.enable(r.STENCIL_TEST), r.clear(r.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0), this.stencilStack.push(e);
		var n = this.count;
		r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), 1 === e.mode ? (r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), this.reverse ? (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), this.reverse ? r.stencilFunc(r.EQUAL, 255 - (n + 1), 255) : r.stencilFunc(r.EQUAL, n + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, n + 1, 255) : r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), this.count++
	}, PIXI.WebGLStencilManager.prototype.bindGraphics = function(t, e, i) {
		this._currentGraphics = t;
		var r, n = this.gl,
			o = i.projection,
			s = i.offset;
		1 === e.mode ? (r = i.shaderManager.complexPrimitiveShader, i.shaderManager.setShader(r), n.uniform1f(r.flipY, i.flipY), n.uniformMatrix3fv(r.translationMatrix, !1, t.worldTransform.toArray(!0)), n.uniform2f(r.projectionVector, o.x, -o.y), n.uniform2f(r.offsetVector, -s.x, -s.y), n.uniform3fv(r.tintColor, PIXI.hex2rgb(t.tint)), n.uniform3fv(r.color, e.color), n.uniform1f(r.alpha, t.worldAlpha * e.alpha), n.bindBuffer(n.ARRAY_BUFFER, e.buffer), n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, !1, 8, 0), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (r = i.shaderManager.primitiveShader, i.shaderManager.setShader(r), n.uniformMatrix3fv(r.translationMatrix, !1, t.worldTransform.toArray(!0)), n.uniform1f(r.flipY, i.flipY), n.uniform2f(r.projectionVector, o.x, -o.y), n.uniform2f(r.offsetVector, -s.x, -s.y), n.uniform3fv(r.tintColor, PIXI.hex2rgb(t.tint)), n.uniform1f(r.alpha, t.worldAlpha), n.bindBuffer(n.ARRAY_BUFFER, e.buffer), n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(r.colorAttribute, 4, n.FLOAT, !1, 24, 8), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
	}, PIXI.WebGLStencilManager.prototype.popStencil = function(t, e, i) {
		var r = this.gl;
		if (this.stencilStack.pop(), this.count--, 0 === this.stencilStack.length) r.disable(r.STENCIL_TEST);
		else {
			var n = this.count;
			this.bindGraphics(t, e, i), r.colorMask(!1, !1, !1, !1), 1 === e.mode ? (this.reverse = !this.reverse, this.reverse ? (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)) : (this.reverse ? (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
		}
	}, PIXI.WebGLStencilManager.prototype.destroy = function() {
		this.stencilStack = null, this.gl = null
	}, PIXI.WebGLShaderManager = function() {
		this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
		for (var t = 0; t < this.maxAttibs; t++) this.attribState[t] = !1;
		this.stack = []
	}, PIXI.WebGLShaderManager.prototype.constructor = PIXI.WebGLShaderManager, PIXI.WebGLShaderManager.prototype.setContext = function(t) {
		this.gl = t, this.primitiveShader = new PIXI.PrimitiveShader(t), this.complexPrimitiveShader = new PIXI.ComplexPrimitiveShader(t), this.defaultShader = new PIXI.PixiShader(t), this.fastShader = new PIXI.PixiFastShader(t), this.stripShader = new PIXI.StripShader(t), this.setShader(this.defaultShader)
	}, PIXI.WebGLShaderManager.prototype.setAttribs = function(t) {
		var e;
		for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1;
		for (e = 0; e < t.length; e++) {
			var i = t[e];
			this.tempAttribState[i] = !0
		}
		var r = this.gl;
		for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.tempAttribState[e] ? r.enableVertexAttribArray(e) : r.disableVertexAttribArray(e))
	}, PIXI.WebGLShaderManager.prototype.setShader = function(t) {
		return this._currentId === t._UID ? !1 : (this._currentId = t._UID, this.currentShader = t, this.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
	}, PIXI.WebGLShaderManager.prototype.destroy = function() {
		this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.complexPrimitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.stripShader.destroy(), this.gl = null
	}, PIXI.WebGLSpriteBatch = function() {
		this.vertSize = 5, this.size = 2e3;
		var t = 4 * this.size * 4 * this.vertSize,
			e = 6 * this.size;
		this.vertices = new PIXI.ArrayBuffer(t), this.positions = new PIXI.Float32Array(this.vertices), this.colors = new PIXI.Uint32Array(this.vertices), this.indices = new PIXI.Uint16Array(e), this.lastIndexCount = 0;
		for (var i = 0, r = 0; e > i; i += 6, r += 4) this.indices[i + 0] = r + 0, this.indices[i + 1] = r + 1, this.indices[i + 2] = r + 2, this.indices[i + 3] = r + 0, this.indices[i + 4] = r + 2, this.indices[i + 5] = r + 3;
		this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.dirty = !0, this.textures = [], this.blendModes = [], this.shaders = [], this.sprites = [], this.defaultShader = new PIXI.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"])
	}, PIXI.WebGLSpriteBatch.prototype.setContext = function(t) {
		this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999;
		var e = new PIXI.PixiShader(t);
		e.fragmentSrc = this.defaultShader.fragmentSrc, e.uniforms = {}, e.init(), this.defaultShader.shaders[t.id] = e
	}, PIXI.WebGLSpriteBatch.prototype.begin = function(t) {
		this.renderSession = t, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
	}, PIXI.WebGLSpriteBatch.prototype.end = function() {
		this.flush()
	}, PIXI.WebGLSpriteBatch.prototype.render = function(t) {
		var e = t.texture;
		this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = e.baseTexture);
		var i = e._uvs;
		if (i) {
			var r, n, o, s, a = t.anchor.x,
				h = t.anchor.y;
			if (e.trim) {
				var l = e.trim;
				n = l.x - a * l.width, r = n + e.crop.width, s = l.y - h * l.height, o = s + e.crop.height
			} else r = e.frame.width * (1 - a), n = e.frame.width * -a, o = e.frame.height * (1 - h), s = e.frame.height * -h;
			var c = 4 * this.currentBatchSize * this.vertSize,
				d = e.baseTexture.resolution,
				u = t.worldTransform,
				p = u.a / d,
				f = u.b / d,
				I = u.c / d,
				g = u.d / d,
				v = u.tx,
				y = u.ty,
				w = this.colors,
				P = this.positions;
			P[c] = p * n + I * s + v | 0, P[c + 1] = g * s + f * n + y | 0, P[c + 5] = p * r + I * s + v | 0, P[c + 6] = g * s + f * r + y | 0, P[c + 10] = p * r + I * o + v | 0, P[c + 11] = g * o + f * r + y | 0, P[c + 15] = p * n + I * o + v | 0, P[c + 16] = g * o + f * n + y | 0, P[c + 2] = i.x0, P[c + 3] = i.y0, P[c + 7] = i.x1, P[c + 8] = i.y1, P[c + 12] = i.x2, P[c + 13] = i.y2, P[c + 17] = i.x3, P[c + 18] = i.y3;
			var m = t.tint;
			w[c + 4] = w[c + 9] = w[c + 14] = w[c + 19] = (m >> 16) + (65280 & m) + ((255 & m) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
		}
	}, PIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function(t) {
		var e = t.tilingTexture;
		this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = e.baseTexture), t._uvs || (t._uvs = new PIXI.TextureUvs);
		var i = t._uvs;
		t.tilePosition.x %= e.baseTexture.width * t.tileScaleOffset.x, t.tilePosition.y %= e.baseTexture.height * t.tileScaleOffset.y;
		var r = t.tilePosition.x / (e.baseTexture.width * t.tileScaleOffset.x),
			n = t.tilePosition.y / (e.baseTexture.height * t.tileScaleOffset.y),
			o = t.width / e.baseTexture.width / (t.tileScale.x * t.tileScaleOffset.x),
			s = t.height / e.baseTexture.height / (t.tileScale.y * t.tileScaleOffset.y);
		i.x0 = 0 - r, i.y0 = 0 - n, i.x1 = 1 * o - r, i.y1 = 0 - n, i.x2 = 1 * o - r, i.y2 = 1 * s - n, i.x3 = 0 - r, i.y3 = 1 * s - n;
		var a = t.tint,
			h = (a >> 16) + (65280 & a) + ((255 & a) << 16) + (255 * t.alpha << 24),
			l = this.positions,
			c = this.colors,
			d = t.width,
			u = t.height,
			p = t.anchor.x,
			f = t.anchor.y,
			I = d * (1 - p),
			g = d * -p,
			v = u * (1 - f),
			y = u * -f,
			w = 4 * this.currentBatchSize * this.vertSize,
			P = e.baseTexture.resolution,
			m = t.worldTransform,
			x = m.a / P,
			b = m.b / P,
			T = m.c / P,
			X = m.d / P,
			S = m.tx,
			C = m.ty;
		l[w++] = x * g + T * y + S, l[w++] = X * y + b * g + C, l[w++] = i.x0, l[w++] = i.y0, c[w++] = h, l[w++] = x * I + T * y + S, l[w++] = X * y + b * I + C, l[w++] = i.x1, l[w++] = i.y1, c[w++] = h, l[w++] = x * I + T * v + S, l[w++] = X * v + b * I + C, l[w++] = i.x2, l[w++] = i.y2, c[w++] = h, l[w++] = x * g + T * v + S, l[w++] = X * v + b * g + C, l[w++] = i.x3, l[w++] = i.y3, c[w++] = h, this.sprites[this.currentBatchSize++] = t
	}, PIXI.WebGLSpriteBatch.prototype.flush = function() {
		if (0 !== this.currentBatchSize) {
			var t, e = this.gl;
			if (this.dirty) {
				this.dirty = !1, e.activeTexture(e.TEXTURE0), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t = this.defaultShader.shaders[e.id];
				var i = 4 * this.vertSize;
				e.vertexAttribPointer(t.aVertexPosition, 2, e.FLOAT, !1, i, 0), e.vertexAttribPointer(t.aTextureCoord, 2, e.FLOAT, !1, i, 8), e.vertexAttribPointer(t.colorAttribute, 4, e.UNSIGNED_BYTE, !0, i, 16)
			}
			if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
			else {
				var r = this.positions.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				e.bufferSubData(e.ARRAY_BUFFER, 0, r)
			}
			for (var n, o, s, a, h = 0, l = 0, c = null, d = this.renderSession.blendModeManager.currentBlendMode, u = null, p = !1, f = !1, I = 0, g = this.currentBatchSize; g > I; I++) {
				if (a = this.sprites[I], n = a.texture.baseTexture, o = a.blendMode, s = a.shader || this.defaultShader, p = d !== o, f = u !== s, (c !== n || p || f) && (this.renderBatch(c, h, l), l = I, h = 0, c = n, p && (d = o, this.renderSession.blendModeManager.setBlendMode(d)), f)) {
					u = s, t = u.shaders[e.id], t || (t = new PIXI.PixiShader(e), t.fragmentSrc = u.fragmentSrc, t.uniforms = u.uniforms, t.init(), u.shaders[e.id] = t), this.renderSession.shaderManager.setShader(t), t.dirty && t.syncUniforms();
					var v = this.renderSession.projection;
					e.uniform2f(t.projectionVector, v.x, v.y);
					var y = this.renderSession.offset;
					e.uniform2f(t.offsetVector, y.x, y.y)
				}
				h++
			}
			this.renderBatch(c, h, l), this.currentBatchSize = 0
		}
	}, PIXI.WebGLSpriteBatch.prototype.renderBatch = function(t, e, i) {
		if (0 !== e) {
			var r = this.gl;
			t._dirty[r.id] ? this.renderSession.renderer.updateTexture(t) : r.bindTexture(r.TEXTURE_2D, t._glTextures[r.id]), r.drawElements(r.TRIANGLES, 6 * e, r.UNSIGNED_SHORT, 6 * i * 2), this.renderSession.drawCount++
		}
	}, PIXI.WebGLSpriteBatch.prototype.stop = function() {
		this.flush(), this.dirty = !0
	}, PIXI.WebGLSpriteBatch.prototype.start = function() {
		this.dirty = !0
	}, PIXI.WebGLSpriteBatch.prototype.destroy = function() {
		this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
	}, PIXI.WebGLFastSpriteBatch = function(t) {
		this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
		var e = 4 * this.size * this.vertSize,
			i = 6 * this.maxSize;
		this.vertices = new PIXI.Float32Array(e), this.indices = new PIXI.Uint16Array(i), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
		for (var r = 0, n = 0; i > r; r += 6, n += 4) this.indices[r + 0] = n + 0, this.indices[r + 1] = n + 1, this.indices[r + 2] = n + 2, this.indices[r + 3] = n + 0, this.indices[r + 4] = n + 2, this.indices[r + 5] = n + 3;
		this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(t)
	}, PIXI.WebGLFastSpriteBatch.prototype.constructor = PIXI.WebGLFastSpriteBatch, PIXI.WebGLFastSpriteBatch.prototype.setContext = function(t) {
		this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
	}, PIXI.WebGLFastSpriteBatch.prototype.begin = function(t, e) {
		this.renderSession = e, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = t.worldTransform.toArray(!0), this.start()
	}, PIXI.WebGLFastSpriteBatch.prototype.end = function() {
		this.flush()
	}, PIXI.WebGLFastSpriteBatch.prototype.render = function(t) {
		var e = t.children,
			i = e[0];
		if (i.texture._uvs) {
			this.currentBaseTexture = i.texture.baseTexture, i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(i.blendMode));
			for (var r = 0, n = e.length; n > r; r++) this.renderSprite(e[r]);
			this.flush()
		}
	}, PIXI.WebGLFastSpriteBatch.prototype.renderSprite = function(t) {
		if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = t.texture.baseTexture, t.texture._uvs))) {
			var e, i, r, n, o, s, a, h, l = this.vertices;
			if (e = t.texture._uvs, i = t.texture.frame.width, r = t.texture.frame.height, t.texture.trim) {
				var c = t.texture.trim;
				o = c.x - t.anchor.x * c.width, n = o + t.texture.crop.width, a = c.y - t.anchor.y * c.height, s = a + t.texture.crop.height
			} else n = t.texture.frame.width * (1 - t.anchor.x), o = t.texture.frame.width * -t.anchor.x, s = t.texture.frame.height * (1 - t.anchor.y), a = t.texture.frame.height * -t.anchor.y;
			h = 4 * this.currentBatchSize * this.vertSize, l[h++] = o, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x0, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = n, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x1, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = n, l[h++] = s, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x2, l[h++] = e.y2, l[h++] = t.alpha, l[h++] = o, l[h++] = s, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x3, l[h++] = e.y3, l[h++] = t.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
		}
	}, PIXI.WebGLFastSpriteBatch.prototype.flush = function() {
		if (0 !== this.currentBatchSize) {
			var t = this.gl;
			if (this.currentBaseTexture._glTextures[t.id] || this.renderSession.renderer.updateTexture(this.currentBaseTexture, t), t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]), this.currentBatchSize > .5 * this.size) t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
			else {
				var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				t.bufferSubData(t.ARRAY_BUFFER, 0, e)
			}
			t.drawElements(t.TRIANGLES, 6 * this.currentBatchSize, t.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
		}
	}, PIXI.WebGLFastSpriteBatch.prototype.stop = function() {
		this.flush()
	}, PIXI.WebGLFastSpriteBatch.prototype.start = function() {
		var t = this.gl;
		t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
		var e = this.renderSession.projection;
		t.uniform2f(this.shader.projectionVector, e.x, e.y), t.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
		var i = 4 * this.vertSize;
		t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, !1, i, 0), t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, !1, i, 8), t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, !1, i, 16), t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, !1, i, 24), t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, !1, i, 28), t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, !1, i, 36)
	}, PIXI.WebGLFilterManager = function() {
		this.filterStack = [], this.offsetX = 0, this.offsetY = 0
	}, PIXI.WebGLFilterManager.prototype.constructor = PIXI.WebGLFilterManager, PIXI.WebGLFilterManager.prototype.setContext = function(t) {
		this.gl = t, this.texturePool = [], this.initShaderBuffers()
	}, PIXI.WebGLFilterManager.prototype.begin = function(t, e) {
		this.renderSession = t, this.defaultShader = t.shaderManager.defaultShader;
		var i = this.renderSession.projection;
		this.width = 2 * i.x, this.height = 2 * -i.y, this.buffer = e
	}, PIXI.WebGLFilterManager.prototype.pushFilter = function(t) {
		var e = this.gl,
			i = this.renderSession.projection,
			r = this.renderSession.offset;
		t._filterArea = t.target.filterArea || t.target.getBounds(), this.filterStack.push(t);
		var n = t.filterPasses[0];
		this.offsetX += t._filterArea.x, this.offsetY += t._filterArea.y;
		var o = this.texturePool.pop();
		o ? o.resize(this.width, this.height) : o = new PIXI.FilterTexture(this.gl, this.width, this.height), e.bindTexture(e.TEXTURE_2D, o.texture);
		var s = t._filterArea,
			a = n.padding;
		s.x -= a, s.y -= a, s.width += 2 * a, s.height += 2 * a, s.x < 0 && (s.x = 0), s.width > this.width && (s.width = this.width), s.y < 0 && (s.y = 0), s.height > this.height && (s.height = this.height), e.bindFramebuffer(e.FRAMEBUFFER, o.frameBuffer), e.viewport(0, 0, s.width, s.height), i.x = s.width / 2, i.y = -s.height / 2, r.x = -s.x, r.y = -s.y, e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), t._glFilterTexture = o
	}, PIXI.WebGLFilterManager.prototype.popFilter = function() {
		var t = this.gl,
			e = this.filterStack.pop(),
			i = e._filterArea,
			r = e._glFilterTexture,
			n = this.renderSession.projection,
			o = this.renderSession.offset;
		if (e.filterPasses.length > 1) {
			t.viewport(0, 0, i.width, i.height), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = i.height, this.vertexArray[2] = i.width, this.vertexArray[3] = i.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = i.width, this.vertexArray[7] = 0, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = i.width / this.width, this.uvArray[5] = i.height / this.height, this.uvArray[6] = i.width / this.width, this.uvArray[7] = i.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
			var s = r,
				a = this.texturePool.pop();
			a || (a = new PIXI.FilterTexture(this.gl, this.width, this.height)), a.resize(this.width, this.height), t.bindFramebuffer(t.FRAMEBUFFER, a.frameBuffer), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.BLEND);
			for (var h = 0; h < e.filterPasses.length - 1; h++) {
				var l = e.filterPasses[h];
				t.bindFramebuffer(t.FRAMEBUFFER, a.frameBuffer), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, s.texture), this.applyFilterPass(l, i, i.width, i.height);
				var c = s;
				s = a, a = c
			}
			t.enable(t.BLEND), r = s, this.texturePool.push(a)
		}
		var d = e.filterPasses[e.filterPasses.length - 1];
		this.offsetX -= i.x, this.offsetY -= i.y;
		var u = this.width,
			p = this.height,
			f = 0,
			I = 0,
			g = this.buffer;
		if (0 === this.filterStack.length) t.colorMask(!0, !0, !0, !0);
		else {
			var v = this.filterStack[this.filterStack.length - 1];
			i = v._filterArea, u = i.width, p = i.height, f = i.x, I = i.y, g = v._glFilterTexture.frameBuffer
		}
		n.x = u / 2, n.y = -p / 2, o.x = f, o.y = I, i = e._filterArea;
		var y = i.x - f,
			w = i.y - I;
		t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = y, this.vertexArray[1] = w + i.height, this.vertexArray[2] = y + i.width, this.vertexArray[3] = w + i.height, this.vertexArray[4] = y, this.vertexArray[5] = w, this.vertexArray[6] = y + i.width, this.vertexArray[7] = w, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = i.width / this.width, this.uvArray[5] = i.height / this.height, this.uvArray[6] = i.width / this.width, this.uvArray[7] = i.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray), t.viewport(0, 0, u, p), t.bindFramebuffer(t.FRAMEBUFFER, g), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, r.texture), this.applyFilterPass(d, i, u, p), this.texturePool.push(r), e._glFilterTexture = null
	}, PIXI.WebGLFilterManager.prototype.applyFilterPass = function(t, e, i, r) {
		var n = this.gl,
			o = t.shaders[n.id];
		o || (o = new PIXI.PixiShader(n), o.fragmentSrc = t.fragmentSrc, o.uniforms = t.uniforms, o.init(), t.shaders[n.id] = o), this.renderSession.shaderManager.setShader(o), n.uniform2f(o.projectionVector, i / 2, -r / 2), n.uniform2f(o.offsetVector, 0, 0), t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width, t.uniforms.dimensions.value[1] = this.height, t.uniforms.dimensions.value[2] = this.vertexArray[0], t.uniforms.dimensions.value[3] = this.vertexArray[5]), o.syncUniforms(), n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffer), n.vertexAttribPointer(o.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this.uvBuffer), n.vertexAttribPointer(o.aTextureCoord, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this.colorBuffer), n.vertexAttribPointer(o.colorAttribute, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.indexBuffer), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
	}, PIXI.WebGLFilterManager.prototype.initShaderBuffers = function() {
		var t = this.gl;
		this.vertexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.vertexArray = new PIXI.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW), this.uvArray = new PIXI.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW), this.colorArray = new PIXI.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
	}, PIXI.WebGLFilterManager.prototype.destroy = function() {
		var t = this.gl;
		this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
		for (var e = 0; e < this.texturePool.length; e++) this.texturePool[e].destroy();
		this.texturePool = null, t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.uvBuffer), t.deleteBuffer(this.colorBuffer), t.deleteBuffer(this.indexBuffer)
	}, PIXI.FilterTexture = function(t, e, i, r) {
		this.gl = t, this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), r = r || PIXI.scaleModes.DEFAULT, t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, r === PIXI.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, r === PIXI.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0), this.renderBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer), this.resize(e, i)
	}, PIXI.FilterTexture.prototype.constructor = PIXI.FilterTexture, PIXI.FilterTexture.prototype.clear = function() {
		var t = this.gl;
		t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)
	}, PIXI.FilterTexture.prototype.resize = function(t, e) {
		if (this.width !== t || this.height !== e) {
			this.width = t, this.height = e;
			var i = this.gl;
			i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e)
		}
	}, PIXI.FilterTexture.prototype.destroy = function() {
		var t = this.gl;
		t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
	}, PIXI.CanvasBuffer = function(t, e) {
		this.width = t, this.height = e, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
	}, PIXI.CanvasBuffer.prototype.constructor = PIXI.CanvasBuffer, PIXI.CanvasBuffer.prototype.clear = function() {
		this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height)
	}, PIXI.CanvasBuffer.prototype.resize = function(t, e) {
		this.width = this.canvas.width = t, this.height = this.canvas.height = e
	}, PIXI.CanvasMaskManager = function() {}, PIXI.CanvasMaskManager.prototype.constructor = PIXI.CanvasMaskManager, PIXI.CanvasMaskManager.prototype.pushMask = function(t, e) {
		var i = e.context;
		i.save();
		var r = t.alpha,
			n = t.worldTransform,
			o = e.resolution;
		i.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), PIXI.CanvasGraphics.renderGraphicsMask(t, i), i.clip(), t.worldAlpha = r
	}, PIXI.CanvasMaskManager.prototype.popMask = function(t) {
		t.context.restore()
	}, PIXI.CanvasTinter = function() {}, PIXI.CanvasTinter.getTintedTexture = function(t, e) {
		var i = t.texture;
		e = PIXI.CanvasTinter.roundColor(e);
		var r = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
		if (i.tintCache = i.tintCache || {}, i.tintCache[r]) return i.tintCache[r];
		var n = PIXI.CanvasTinter.canvas || document.createElement("canvas");
		if (PIXI.CanvasTinter.tintMethod(i, e, n), PIXI.CanvasTinter.convertTintToImage) {
			var o = new Image;
			o.src = n.toDataURL(), i.tintCache[r] = o
		} else i.tintCache[r] = n, PIXI.CanvasTinter.canvas = null;
		return n
	}, PIXI.CanvasTinter.tintWithMultiply = function(t, e, i) {
		var r = i.getContext("2d"),
			n = t.crop;
		i.width = n.width, i.height = n.height, r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
	}, PIXI.CanvasTinter.tintWithOverlay = function(t, e, i) {
		var r = i.getContext("2d"),
			n = t.crop;
		i.width = n.width, i.height = n.height, r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
	}, PIXI.CanvasTinter.tintWithPerPixel = function(t, e, i) {
		var r = i.getContext("2d"),
			n = t.crop;
		i.width = n.width, i.height = n.height, r.globalCompositeOperation = "copy", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
		for (var o = PIXI.hex2rgb(e), s = o[0], a = o[1], h = o[2], l = r.getImageData(0, 0, n.width, n.height), c = l.data, d = 0; d < c.length; d += 4) c[d + 0] *= s, c[d + 1] *= a, c[d + 2] *= h;
		r.putImageData(l, 0, 0)
	}, PIXI.CanvasTinter.roundColor = function(t) {
		var e = PIXI.CanvasTinter.cacheStepsPerColorChannel,
			i = PIXI.hex2rgb(t);
		return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), PIXI.rgb2hex(i)
	}, PIXI.CanvasTinter.cacheStepsPerColorChannel = 8, PIXI.CanvasTinter.convertTintToImage = !1, PIXI.CanvasTinter.canUseMultiply = PIXI.canUseNewCanvasBlendModes(), PIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.canUseMultiply ? PIXI.CanvasTinter.tintWithMultiply : PIXI.CanvasTinter.tintWithPerPixel, PIXI.CanvasRenderer = function(t, e, i) {
		if (i)
			for (var r in PIXI.defaultRenderOptions) "undefined" == typeof i[r] && (i[r] = PIXI.defaultRenderOptions[r]);
		else i = PIXI.defaultRenderOptions;
		PIXI.defaultRenderer || (PIXI.sayHello("Canvas"), PIXI.defaultRenderer = this), this.type = PIXI.CANVAS_RENDERER, this.resolution = i.resolution, this.clearBeforeRender = i.clearBeforeRender, this.transparent = i.transparent, this.autoResize = i.autoResize || !1, this.width = t || 800, this.height = e || 600, this.width *= this.resolution, this.height *= this.resolution, this.view = i.view || document.createElement("canvas"), this.context = this.view.getContext("2d", {
			alpha: this.transparent
		}), this.refresh = !0, this.view.width = this.width * this.resolution, this.view.height = this.height * this.resolution, this.count = 0, this.maskManager = new PIXI.CanvasMaskManager, this.renderSession = {
			context: this.context,
			maskManager: this.maskManager,
			scaleMode: null,
			smoothProperty: null,
			roundPixels: !0
		}, this.mapBlendModes(), this.resize(t, e), "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "oImageSmoothingEnabled" : "msImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "msImageSmoothingEnabled")
	}, PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer, PIXI.CanvasRenderer.prototype.render = function(t) {
		t.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.renderSession.currentBlendMode = PIXI.blendModes.NORMAL, this.context.globalCompositeOperation = PIXI.blendModesCanvas[PIXI.blendModes.NORMAL], this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)))
	}, PIXI.CanvasRenderer.prototype.destroy = function(t) {
		"undefined" == typeof t && (t = !0), t && this.view.parent && this.view.parent.removeChild(this.view), this.view = null, this.context = null, this.maskManager = null, this.renderSession = null
	}, PIXI.CanvasRenderer.prototype.resize = function(t, e) {
		this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
	}, PIXI.CanvasRenderer.prototype.renderDisplayObject = function(t, e) {
		this.renderSession.context = e || this.context, this.renderSession.resolution = this.resolution, t._renderCanvas(this.renderSession)
	}, PIXI.CanvasRenderer.prototype.mapBlendModes = function() {
		PIXI.blendModesCanvas || (PIXI.blendModesCanvas = [],
			PIXI.canUseNewCanvasBlendModes() ? (PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.ADD] = "lighter", PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "multiply", PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = "screen", PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY] = "overlay", PIXI.blendModesCanvas[PIXI.blendModes.DARKEN] = "darken", PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN] = "lighten", PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = "color-dodge", PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = "color-burn", PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = "hard-light", PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = "soft-light", PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = "difference", PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = "exclusion", PIXI.blendModesCanvas[PIXI.blendModes.HUE] = "hue", PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = "saturation", PIXI.blendModesCanvas[PIXI.blendModes.COLOR] = "color", PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = "luminosity") : (PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.ADD] = "lighter", PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.DARKEN] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.HUE] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.COLOR] = "source-over", PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = "source-over"))
	}, PIXI.CanvasGraphics = function() {}, PIXI.CanvasGraphics.renderGraphics = function(t, e) {
		var i = t.worldAlpha;
		t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
		for (var r = 0; r < t.graphicsData.length; r++) {
			var n = t.graphicsData[r],
				o = n.shape,
				s = n._fillTint,
				a = n._lineTint;
			if (e.lineWidth = n.lineWidth, n.type === PIXI.Graphics.POLY) {
				e.beginPath();
				var h = o.points;
				e.moveTo(h[0], h[1]);
				for (var l = 1; l < h.length / 2; l++) e.lineTo(h[2 * l], h[2 * l + 1]);
				o.closed && e.lineTo(h[0], h[1]), h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && e.closePath(), n.fill && (e.globalAlpha = n.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), e.fill()), n.lineWidth && (e.globalAlpha = n.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.stroke())
			} else if (n.type === PIXI.Graphics.RECT)(n.fillColor || 0 === n.fillColor) && (e.globalAlpha = n.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), e.fillRect(o.x, o.y, o.width, o.height)), n.lineWidth && (e.globalAlpha = n.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.strokeRect(o.x, o.y, o.width, o.height));
			else if (n.type === PIXI.Graphics.CIRC) e.beginPath(), e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath(), n.fill && (e.globalAlpha = n.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), e.fill()), n.lineWidth && (e.globalAlpha = n.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.stroke());
			else if (n.type === PIXI.Graphics.ELIP) {
				var c = 2 * o.width,
					d = 2 * o.height,
					u = o.x - c / 2,
					p = o.y - d / 2;
				e.beginPath();
				var f = .5522848,
					I = c / 2 * f,
					g = d / 2 * f,
					v = u + c,
					y = p + d,
					w = u + c / 2,
					P = p + d / 2;
				e.moveTo(u, P), e.bezierCurveTo(u, P - g, w - I, p, w, p), e.bezierCurveTo(w + I, p, v, P - g, v, P), e.bezierCurveTo(v, P + g, w + I, y, w, y), e.bezierCurveTo(w - I, y, u, P + g, u, P), e.closePath(), n.fill && (e.globalAlpha = n.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), e.fill()), n.lineWidth && (e.globalAlpha = n.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.stroke())
			} else if (n.type === PIXI.Graphics.RREC) {
				var m = o.x,
					x = o.y,
					b = o.width,
					T = o.height,
					X = o.radius,
					S = Math.min(b, T) / 2 | 0;
				X = X > S ? S : X, e.beginPath(), e.moveTo(m, x + X), e.lineTo(m, x + T - X), e.quadraticCurveTo(m, x + T, m + X, x + T), e.lineTo(m + b - X, x + T), e.quadraticCurveTo(m + b, x + T, m + b, x + T - X), e.lineTo(m + b, x + X), e.quadraticCurveTo(m + b, x, m + b - X, x), e.lineTo(m + X, x), e.quadraticCurveTo(m, x, m, x + X), e.closePath(), (n.fillColor || 0 === n.fillColor) && (e.globalAlpha = n.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), e.fill()), n.lineWidth && (e.globalAlpha = n.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.stroke())
			}
		}
	}, PIXI.CanvasGraphics.renderGraphicsMask = function(t, e) {
		var i = t.graphicsData.length;
		if (0 !== i) {
			i > 1 && (i = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
			for (var r = 0; 1 > r; r++) {
				var n = t.graphicsData[r],
					o = n.shape;
				if (n.type === PIXI.Graphics.POLY) {
					e.beginPath();
					var s = o.points;
					e.moveTo(s[0], s[1]);
					for (var a = 1; a < s.length / 2; a++) e.lineTo(s[2 * a], s[2 * a + 1]);
					s[0] === s[s.length - 2] && s[1] === s[s.length - 1] && e.closePath()
				} else if (n.type === PIXI.Graphics.RECT) e.beginPath(), e.rect(o.x, o.y, o.width, o.height), e.closePath();
				else if (n.type === PIXI.Graphics.CIRC) e.beginPath(), e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath();
				else if (n.type === PIXI.Graphics.ELIP) {
					var h = 2 * o.width,
						l = 2 * o.height,
						c = o.x - h / 2,
						d = o.y - l / 2;
					e.beginPath();
					var u = .5522848,
						p = h / 2 * u,
						f = l / 2 * u,
						I = c + h,
						g = d + l,
						v = c + h / 2,
						y = d + l / 2;
					e.moveTo(c, y), e.bezierCurveTo(c, y - f, v - p, d, v, d), e.bezierCurveTo(v + p, d, I, y - f, I, y), e.bezierCurveTo(I, y + f, v + p, g, v, g), e.bezierCurveTo(v - p, g, c, y + f, c, y), e.closePath()
				} else if (n.type === PIXI.Graphics.RREC) {
					var w = o.points,
						P = w[0],
						m = w[1],
						x = w[2],
						b = w[3],
						T = w[4],
						X = Math.min(x, b) / 2 | 0;
					T = T > X ? X : T, e.beginPath(), e.moveTo(P, m + T), e.lineTo(P, m + b - T), e.quadraticCurveTo(P, m + b, P + T, m + b), e.lineTo(P + x - T, m + b), e.quadraticCurveTo(P + x, m + b, P + x, m + b - T), e.lineTo(P + x, m + T), e.quadraticCurveTo(P + x, m, P + x - T, m), e.lineTo(P + T, m), e.quadraticCurveTo(P, m, P, m + T), e.closePath()
				}
			}
		}
	}, PIXI.CanvasGraphics.updateGraphicsTint = function(t) {
		if (16777215 !== t.tint)
			for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
				var o = t.graphicsData[n],
					s = 0 | o.fillColor,
					a = 0 | o.lineColor;
				o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * i * 255 << 8) + (255 & s) / 255 * r * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
			}
	}, PIXI.Graphics = function() {
		PIXI.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this.ondTint = 16777215, this.blendMode = PIXI.blendModes.NORMAL, this.currentPath = null, this._webGL = [], this.isMask = !1, this.boundsPadding = 0, this._localBounds = new PIXI.Rectangle(0, 0, 1, 1), this.dirty = !0, this.webGLDirty = !1, this.cachedSpriteDirty = !1
	}, PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Graphics.prototype.constructor = PIXI.Graphics, Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
		get: function() {
			return this._cacheAsBitmap
		},
		set: function(t) {
			this._cacheAsBitmap = t, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
		}
	}), PIXI.Graphics.prototype.lineStyle = function(t, e, i) {
		if (this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = arguments.length < 3 ? 1 : i, this.currentPath) {
			if (this.currentPath.shape.points.length) return this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2))), this;
			this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha
		}
		return this
	}, PIXI.Graphics.prototype.moveTo = function(t, e) {
		return this.drawShape(new PIXI.Polygon([t, e])), this
	}, PIXI.Graphics.prototype.lineTo = function(t, e) {
		return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
	}, PIXI.Graphics.prototype.quadraticCurveTo = function(t, e, i, r) {
		this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
		var n, o, s = 20,
			a = this.currentPath.shape.points;
		0 === a.length && this.moveTo(0, 0);
		for (var h = a[a.length - 2], l = a[a.length - 1], c = 0, d = 1; s >= d; d++) c = d / s, n = h + (t - h) * c, o = l + (e - l) * c, a.push(n + (t + (i - t) * c - n) * c, o + (e + (r - e) * c - o) * c);
		return this.dirty = !0, this
	}, PIXI.Graphics.prototype.bezierCurveTo = function(t, e, i, r, n, o) {
		this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
		for (var s, a, h, l, c, d = 20, u = this.currentPath.shape.points, p = u[u.length - 2], f = u[u.length - 1], I = 0, g = 1; d >= g; g++) I = g / d, s = 1 - I, a = s * s, h = a * s, l = I * I, c = l * I, u.push(h * p + 3 * a * I * t + 3 * s * l * i + c * n, h * f + 3 * a * I * e + 3 * s * l * r + c * o);
		return this.dirty = !0, this
	}, PIXI.Graphics.prototype.arcTo = function(t, e, i, r, n) {
		this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
		var o = this.currentPath.shape.points,
			s = o[o.length - 2],
			a = o[o.length - 1],
			h = a - e,
			l = s - t,
			c = r - e,
			d = i - t,
			u = Math.abs(h * d - l * c);
		if (1e-8 > u || 0 === n)(o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e);
		else {
			var p = h * h + l * l,
				f = c * c + d * d,
				I = h * c + l * d,
				g = n * Math.sqrt(p) / u,
				v = n * Math.sqrt(f) / u,
				y = g * I / p,
				w = v * I / f,
				P = g * d + v * l,
				m = g * c + v * h,
				x = l * (v + y),
				b = h * (v + y),
				T = d * (g + w),
				X = c * (g + w),
				S = Math.atan2(b - m, x - P),
				C = Math.atan2(X - m, T - P);
			this.arc(P + t, m + e, n, S, C, l * c > d * h)
		}
		return this.dirty = !0, this
	}, PIXI.Graphics.prototype.arc = function(t, e, i, r, n, o) {
		var s, a = t + Math.cos(r) * i,
			h = e + Math.sin(r) * i;
		if (this.currentPath ? (s = this.currentPath.shape.points, 0 === s.length ? s.push(a, h) : (s[s.length - 2] !== a || s[s.length - 1] !== h) && s.push(a, h)) : (this.moveTo(a, h), s = this.currentPath.shape.points), r === n) return this;
		!o && r >= n ? n += 2 * Math.PI : o && n >= r && (r += 2 * Math.PI);
		var l = o ? -1 * (r - n) : n - r,
			c = Math.abs(l) / (2 * Math.PI) * 40;
		if (0 === l) return this;
		for (var d = l / (2 * c), u = 2 * d, p = Math.cos(d), f = Math.sin(d), I = c - 1, g = I % 1 / I, v = 0; I >= v; v++) {
			var y = v + g * v,
				w = d + r + u * y,
				P = Math.cos(w),
				m = -Math.sin(w);
			s.push((p * P + f * m) * i + t, (p * -m + f * P) * i + e)
		}
		return this.dirty = !0, this
	}, PIXI.Graphics.prototype.beginFill = function(t, e) {
		return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
	}, PIXI.Graphics.prototype.endFill = function() {
		return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
	}, PIXI.Graphics.prototype.drawRect = function(t, e, i, r) {
		return this.drawShape(new PIXI.Rectangle(t, e, i, r)), this
	}, PIXI.Graphics.prototype.drawRoundedRect = function(t, e, i, r, n) {
		return this.drawShape(new PIXI.RoundedRectangle(t, e, i, r, n)), this
	}, PIXI.Graphics.prototype.drawCircle = function(t, e, i) {
		return this.drawShape(new PIXI.Circle(t, e, i)), this
	}, PIXI.Graphics.prototype.drawEllipse = function(t, e, i, r) {
		return this.drawShape(new PIXI.Ellipse(t, e, i, r)), this
	}, PIXI.Graphics.prototype.drawPolygon = function(t) {
		return t instanceof Array || (t = Array.prototype.slice.call(arguments)), this.drawShape(new PIXI.Polygon(t)), this
	}, PIXI.Graphics.prototype.clear = function() {
		return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
	}, PIXI.Graphics.prototype.generateTexture = function(t, e) {
		t = t || 1;
		var i = this.getBounds(),
			r = new PIXI.CanvasBuffer(i.width * t, i.height * t),
			n = PIXI.Texture.fromCanvas(r.canvas, e);
		return n.baseTexture.resolution = t, r.context.scale(t, t), r.context.translate(-i.x, -i.y), PIXI.CanvasGraphics.renderGraphics(this, r.context), n
	}, PIXI.Graphics.prototype._renderWebGL = function(t) {
		if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
			if (this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.worldAlpha = this.worldAlpha, void PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
			if (t.spriteBatch.stop(), t.blendModeManager.setBlendMode(this.blendMode), this._mask && t.maskManager.pushMask(this._mask, t), this._filters && t.filterManager.pushFilter(this._filterBlock), this.blendMode !== t.spriteBatch.currentBlendMode) {
				t.spriteBatch.currentBlendMode = this.blendMode;
				var e = PIXI.blendModesWebGL[t.spriteBatch.currentBlendMode];
				t.spriteBatch.gl.blendFunc(e[0], e[1])
			}
			if (this.webGLDirty && (this.dirty = !0, this.webGLDirty = !1), PIXI.WebGLGraphics.renderGraphics(this, t), this.children.length) {
				t.spriteBatch.start();
				for (var i = 0, r = this.children.length; r > i; i++) this.children[i]._renderWebGL(t);
				t.spriteBatch.stop()
			}
			this._filters && t.filterManager.popFilter(), this._mask && t.maskManager.popMask(this.mask, t), t.drawCount++, t.spriteBatch.start()
		}
	}, PIXI.Graphics.prototype._renderCanvas = function(t) {
		if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
			if (this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.alpha = this.alpha, void PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
			var e = t.context,
				i = this.worldTransform;
			this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, e.globalCompositeOperation = PIXI.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t);
			var r = t.resolution;
			e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r), this.tint != this.oldTint && (this.dirty = !0, this.oldTint = this.tint), PIXI.CanvasGraphics.renderGraphics(this, e);
			for (var n = 0, o = this.children.length; o > n; n++) this.children[n]._renderCanvas(t);
			this._mask && t.maskManager.popMask(t)
		}
	}, PIXI.Graphics.prototype.getBounds = function(t) {
		if (this.isMask) return PIXI.EmptyRectangle;
		this.dirty && (this.updateLocalBounds(), this.webGLDirty = !0, this.cachedSpriteDirty = !0, this.dirty = !1);
		var e = this._localBounds,
			i = e.x,
			r = e.width + e.x,
			n = e.y,
			o = e.height + e.y,
			s = t || this.worldTransform,
			a = s.a,
			h = s.b,
			l = s.c,
			c = s.d,
			d = s.tx,
			u = s.ty,
			p = a * r + l * o + d,
			f = c * o + h * r + u,
			I = a * i + l * o + d,
			g = c * o + h * i + u,
			v = a * i + l * n + d,
			y = c * n + h * i + u,
			w = a * r + l * n + d,
			P = c * n + h * r + u,
			m = p,
			x = f,
			b = p,
			T = f;
		return b = b > I ? I : b, b = b > v ? v : b, b = b > w ? w : b, T = T > g ? g : T, T = T > y ? y : T, T = T > P ? P : T, m = I > m ? I : m, m = v > m ? v : m, m = w > m ? w : m, x = g > x ? g : x, x = y > x ? y : x, x = P > x ? P : x, this._bounds.x = b, this._bounds.width = m - b, this._bounds.y = T, this._bounds.height = x - T, this._bounds
	}, PIXI.Graphics.prototype.updateLocalBounds = function() {
		var t = 1 / 0,
			e = -(1 / 0),
			i = 1 / 0,
			r = -(1 / 0);
		if (this.graphicsData.length)
			for (var n, o, s, a, h, l, c = 0; c < this.graphicsData.length; c++) {
				var d = this.graphicsData[c],
					u = d.type,
					p = d.lineWidth;
				if (n = d.shape, u === PIXI.Graphics.RECT || u === PIXI.Graphics.RREC) s = n.x - p / 2, a = n.y - p / 2, h = n.width + p, l = n.height + p, t = t > s ? s : t, e = s + h > e ? s + h : e, i = i > a ? a : i, r = a + l > r ? a + l : r;
				else if (u === PIXI.Graphics.CIRC) s = n.x, a = n.y, h = n.radius + p / 2, l = n.radius + p / 2, t = t > s - h ? s - h : t, e = s + h > e ? s + h : e, i = i > a - l ? a - l : i, r = a + l > r ? a + l : r;
				else if (u === PIXI.Graphics.ELIP) s = n.x, a = n.y, h = n.width + p / 2, l = n.height + p / 2, t = t > s - h ? s - h : t, e = s + h > e ? s + h : e, i = i > a - l ? a - l : i, r = a + l > r ? a + l : r;
				else {
					o = n.points;
					for (var f = 0; f < o.length; f += 2) s = o[f], a = o[f + 1], t = t > s - p ? s - p : t, e = s + p > e ? s + p : e, i = i > a - p ? a - p : i, r = a + p > r ? a + p : r
				}
			} else t = 0, e = 0, i = 0, r = 0;
		var I = this.boundsPadding;
		this._localBounds.x = t - I, this._localBounds.width = e - t + 2 * I, this._localBounds.y = i - I, this._localBounds.height = r - i + 2 * I
	}, PIXI.Graphics.prototype._generateCachedSprite = function() {
		var t = this.getLocalBounds();
		if (this._cachedSprite) this._cachedSprite.buffer.resize(t.width, t.height);
		else {
			var e = new PIXI.CanvasBuffer(t.width, t.height),
				i = PIXI.Texture.fromCanvas(e.canvas);
			this._cachedSprite = new PIXI.Sprite(i), this._cachedSprite.buffer = e, this._cachedSprite.worldTransform = this.worldTransform
		}
		this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._cachedSprite.buffer.context.translate(-t.x, -t.y), this.worldAlpha = 1, PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
	}, PIXI.Graphics.prototype.updateCachedSpriteTexture = function() {
		var t = this._cachedSprite,
			e = t.texture,
			i = t.buffer.canvas;
		e.baseTexture.width = i.width, e.baseTexture.height = i.height, e.crop.width = e.frame.width = i.width, e.crop.height = e.frame.height = i.height, t._width = i.width, t._height = i.height, e.baseTexture.dirty()
	}, PIXI.Graphics.prototype.destroyCachedSprite = function() {
		this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
	}, PIXI.Graphics.prototype.drawShape = function(t) {
		this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
		var e = new PIXI.GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
		return this.graphicsData.push(e), e.type === PIXI.Graphics.POLY && (e.shape.closed = this.filling, this.currentPath = e), this.dirty = !0, e
	}, PIXI.GraphicsData = function(t, e, i, r, n, o, s) {
		this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = r, this.fillAlpha = n, this._fillTint = r, this.fill = o, this.shape = s, this.type = s.type
	}, PIXI.Graphics.POLY = 0, PIXI.Graphics.RECT = 1, PIXI.Graphics.CIRC = 2, PIXI.Graphics.ELIP = 3, PIXI.Graphics.RREC = 4, PIXI.Polygon.prototype.type = PIXI.Graphics.POLY, PIXI.Rectangle.prototype.type = PIXI.Graphics.RECT, PIXI.Circle.prototype.type = PIXI.Graphics.CIRC, PIXI.Ellipse.prototype.type = PIXI.Graphics.ELIP, PIXI.RoundedRectangle.prototype.type = PIXI.Graphics.RREC, PIXI.BaseTextureCache = {}, PIXI.BaseTextureCacheIdGenerator = 0, PIXI.BaseTexture = function(t, e) {
		if (this.resolution = 1, this.width = 100, this.height = 100, this.scaleMode = e || PIXI.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = t, this._UID = PIXI._UID++, this.premultipliedAlpha = !0, this._glTextures = [], this.mipmap = !1, this._dirty = [!0, !0, !0, !0], t) {
			if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0, this.width = this.source.naturalWidth || this.source.width, this.height = this.source.naturalHeight || this.source.height, this.dirty();
			else {
				var i = this;
				this.source.onload = function() {
					i.hasLoaded = !0, i.width = i.source.naturalWidth || i.source.width, i.height = i.source.naturalHeight || i.source.height, i.dirty(), i.dispatchEvent({
						type: "loaded",
						content: i
					})
				}, this.source.onerror = function() {
					i.dispatchEvent({
						type: "error",
						content: i
					})
				}
			}
			this.imageUrl = null, this._powerOf2 = !1
		}
	}, PIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture, PIXI.EventTarget.mixin(PIXI.BaseTexture.prototype), PIXI.BaseTexture.prototype.destroy = function() {
		this.imageUrl ? (delete PIXI.BaseTextureCache[this.imageUrl], delete PIXI.TextureCache[this.imageUrl], this.imageUrl = null, this.source.src = "") : this.source && this.source._pixiId && delete PIXI.BaseTextureCache[this.source._pixiId], this.source = null, this.unloadFromGPU()
	}, PIXI.BaseTexture.prototype.updateSourceImage = function(t) {
		this.hasLoaded = !1, this.source.src = null, this.source.src = t
	}, PIXI.BaseTexture.prototype.dirty = function() {
		for (var t = 0; t < this._glTextures.length; t++) this._dirty[t] = !0
	}, PIXI.BaseTexture.prototype.unloadFromGPU = function() {
		this.dirty();
		for (var t = this._glTextures.length - 1; t >= 0; t--) {
			var e = this._glTextures[t],
				i = PIXI.glContexts[t];
			i && e && i.deleteTexture(e)
		}
		this._glTextures.length = 0, this.dirty()
	}, PIXI.BaseTexture.fromImage = function(t, e, i) {
		var r = PIXI.BaseTextureCache[t];
		if (void 0 === e && -1 === t.indexOf("data:") && (e = !0), !r) {
			var n = new Image;
			e && (n.crossOrigin = ""), n.src = t, r = new PIXI.BaseTexture(n, i), r.imageUrl = t, PIXI.BaseTextureCache[t] = r, -1 !== t.indexOf(PIXI.RETINA_PREFIX + ".") && (r.resolution = 2)
		}
		return r
	}, PIXI.BaseTexture.fromCanvas = function(t, e) {
		t._pixiId || (t._pixiId = "canvas_" + PIXI.TextureCacheIdGenerator++);
		var i = PIXI.BaseTextureCache[t._pixiId];
		return i || (i = new PIXI.BaseTexture(t, e), PIXI.BaseTextureCache[t._pixiId] = i), i
	}, PIXI.TextureCache = {}, PIXI.FrameCache = {}, PIXI.TextureCacheIdGenerator = 0, PIXI.Texture = function(t, e, i, r) {
		this.noFrame = !1, e || (this.noFrame = !0, e = new PIXI.Rectangle(0, 0, 1, 1)), t instanceof PIXI.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = e, this.trim = r, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = i || new PIXI.Rectangle(0, 0, 1, 1), t.hasLoaded ? (this.noFrame && (e = new PIXI.Rectangle(0, 0, t.width, t.height)), this.setFrame(e)) : t.addEventListener("loaded", this.onBaseTextureLoaded.bind(this))
	}, PIXI.Texture.prototype.constructor = PIXI.Texture, PIXI.EventTarget.mixin(PIXI.Texture.prototype), PIXI.Texture.prototype.onBaseTextureLoaded = function() {
		var t = this.baseTexture;
		t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new PIXI.Rectangle(0, 0, t.width, t.height)), this.setFrame(this.frame), this.dispatchEvent({
			type: "update",
			content: this
		})
	}, PIXI.Texture.prototype.destroy = function(t) {
		t && this.baseTexture.destroy(), this.valid = !1
	}, PIXI.Texture.prototype.setFrame = function(t) {
		if (this.noFrame = !1, this.frame = t, this.width = t.width, this.height = t.height, this.crop.x = t.x, this.crop.y = t.y, this.crop.width = t.width, this.crop.height = t.height, !this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
		this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded, this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height), this.valid && this._updateUvs()
	}, PIXI.Texture.prototype._updateUvs = function() {
		this._uvs || (this._uvs = new PIXI.TextureUvs);
		var t = this.crop,
			e = this.baseTexture.width,
			i = this.baseTexture.height;
		this._uvs.x0 = t.x / e, this._uvs.y0 = t.y / i, this._uvs.x1 = (t.x + t.width) / e, this._uvs.y1 = t.y / i, this._uvs.x2 = (t.x + t.width) / e, this._uvs.y2 = (t.y + t.height) / i, this._uvs.x3 = t.x / e, this._uvs.y3 = (t.y + t.height) / i
	}, PIXI.Texture.fromImage = function(t, e, i) {
		var r = PIXI.TextureCache[t];
		return r || (r = new PIXI.Texture(PIXI.BaseTexture.fromImage(t, e, i)), PIXI.TextureCache[t] = r), r
	}, PIXI.Texture.fromFrame = function(t) {
		var e = PIXI.TextureCache[t];
		if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache ');
		return e
	}, PIXI.Texture.fromCanvas = function(t, e) {
		var i = PIXI.BaseTexture.fromCanvas(t, e);
		return new PIXI.Texture(i)
	}, PIXI.Texture.addTextureToCache = function(t, e) {
		PIXI.TextureCache[e] = t
	}, PIXI.Texture.removeTextureFromCache = function(t) {
		var e = PIXI.TextureCache[t];
		return delete PIXI.TextureCache[t], delete PIXI.BaseTextureCache[t], e
	}, PIXI.TextureUvs = function() {
		this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y3 = 0
	}, PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture), PIXI.RenderTexture = function(t, e, i, r, n) {
		if (this.width = t || 100, this.height = e || 100, this.resolution = n || 1, this.frame = new PIXI.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.crop = new PIXI.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.baseTexture = new PIXI.BaseTexture, this.baseTexture.width = this.width * this.resolution, this.baseTexture.height = this.height * this.resolution, this.baseTexture._glTextures = [], this.baseTexture.resolution = this.resolution, this.baseTexture.scaleMode = r || PIXI.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, PIXI.Texture.call(this, this.baseTexture, new PIXI.Rectangle(0, 0, this.width, this.height)), this.renderer = i || PIXI.defaultRenderer, this.renderer.type === PIXI.WEBGL_RENDERER) {
			var o = this.renderer.gl;
			this.baseTexture._dirty[o.id] = !1, this.textureBuffer = new PIXI.FilterTexture(o, this.width * this.resolution, this.height * this.resolution, this.baseTexture.scaleMode), this.baseTexture._glTextures[o.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new PIXI.Point(.5 * this.width, .5 * -this.height)
		} else this.render = this.renderCanvas, this.textureBuffer = new PIXI.CanvasBuffer(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
		this.valid = !0, this._updateUvs()
	}, PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype), PIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture, PIXI.RenderTexture.prototype.resize = function(t, e, i) {
		(t !== this.width || e !== this.height) && (this.valid = t > 0 && e > 0, this.width = this.frame.width = this.crop.width = t, this.height = this.frame.height = this.crop.height = e, i && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.renderer.type === PIXI.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.valid && this.textureBuffer.resize(this.width * this.resolution, this.height * this.resolution))
	}, PIXI.RenderTexture.prototype.clear = function() {
		this.valid && (this.renderer.type === PIXI.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
	}, PIXI.RenderTexture.prototype.renderWebGL = function(t, e, i) {
		if (this.valid) {
			var r = t.worldTransform;
			r.identity(), r.translate(0, 2 * this.projection.y), e && r.append(e), r.scale(1, -1), t.worldAlpha = 1;
			for (var n = t.children, o = 0, s = n.length; s > o; o++) n[o].updateTransform();
			var a = this.renderer.gl;
			a.viewport(0, 0, this.width * this.resolution, this.height * this.resolution), a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer), i && this.textureBuffer.clear(), this.renderer.spriteBatch.dirty = !0, this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer), this.renderer.spriteBatch.dirty = !0
		}
	}, PIXI.RenderTexture.prototype.renderCanvas = function(t, e, i) {
		if (this.valid) {
			var r = t.worldTransform;
			r.identity(), e && r.append(e), t.worldAlpha = 1;
			for (var n = t.children, o = 0, s = n.length; s > o; o++) n[o].updateTransform();
			i && this.textureBuffer.clear();
			var a = this.textureBuffer.context,
				h = this.renderer.resolution;
			this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, a), this.renderer.resolution = h
		}
	}, PIXI.RenderTexture.prototype.getImage = function() {
		var t = new Image;
		return t.src = this.getBase64(), t
	}, PIXI.RenderTexture.prototype.getBase64 = function() {
		return this.getCanvas().toDataURL()
	}, PIXI.RenderTexture.prototype.getCanvas = function() {
		if (this.renderer.type === PIXI.WEBGL_RENDERER) {
			var t = this.renderer.gl,
				e = this.textureBuffer.width,
				i = this.textureBuffer.height,
				r = new Uint8Array(4 * e * i);
			t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, e, i, t.RGBA, t.UNSIGNED_BYTE, r), t.bindFramebuffer(t.FRAMEBUFFER, null);
			var n = new PIXI.CanvasBuffer(e, i),
				o = n.context.getImageData(0, 0, e, i);
			return o.data.set(r), n.context.putImageData(o, 0, 0), n.canvas
		}
		return this.textureBuffer.canvas
	}, PIXI.RenderTexture.tempMatrix = new PIXI.Matrix, PIXI.AbstractFilter = function(t, e) {
		this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = e || {}, this.fragmentSrc = t || []
	}, PIXI.AbstractFilter.prototype.constructor = PIXI.AbstractFilter, PIXI.AbstractFilter.prototype.syncUniforms = function() {
		for (var t = 0, e = this.shaders.length; e > t; t++) this.shaders[t].dirty = !0
	}, window.isAndroid = /(android)/i.test(navigator.userAgent) && !/(Windows)/i.test(navigator.userAgent), window.isiOS = /(ipod|iphone|ipad)/i.test(navigator.userAgent), window.isWindowsMobile = /(IEMobile)/i.test(navigator.userAgent), window.isSilk = /(silk)/i.test(navigator.userAgent), window.isClay = /(clay\.io)/i.test(document.location), window.isFacebookApp = /(fb_canvas)/i.test(document.location), window.isFacebookAppWeb = /(fb_canvas_web)/i.test(document.location), window.isIframed = window.top !== window.self, window.isCordova = window.cordova ? !0 : !1, window.isChromeApp = window.chrome && window.chrome.storage ? !0 : !1, window.isWrapped = isCordova || isChromeApp ? !0 : !1, window.isMobile = window.isAndroid || window.isWindowsMobile || window.isiOS || window.isSilk, window.isApp = window.isCordova || window.isChromeApp, window.isStandalone = "standalone" in window.navigator && window.navigator.standalone, window.isMobileiOSDevice = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i), window.isKongregate = /(kongregateiframe)/i.test(document.location); window.httpPrefix = 0 == window.location.protocol.indexOf("http") ? "//" : "https://", window.isKik = window.kik ? !0 : !1;
var ratio = Math.min(window.devicePixelRatio || 1, 2);
window.marginBottom = 0, window.marginTop = (window.isCordova || window.isStandalone) && window.isiOS ? 25 * ratio : 0, window.ga || (window.ga = function() {}), window.vpath = window.vpath || "./", window.onParseLoginSuccess = function(t) {}, window.showGameOverAd = function() {}, window.hideGameOverAd = function() {}, window.showInterstitialAd = function() {}, window.resizeAd = function() {}, window.showRateGame = function() {}, window.resizeCallbacks = [], window.onresize = function(t) {
	for (var e = 0; e < resizeCallbacks.length; e++) resizeCallbacks[e](t)
}, window.removeResizeCallback = function(t) {
	for (var e = 0; e < resizeCallbacks.length; e++)
		if (resizeCallbacks[e] == t) return void resizeCallbacks.splice(e, 1)
}, window.overlayToggleCallbacks = [], window.toggleOverlay = function(t) {
	for (var e = 0; e < overlayToggleCallbacks.length; e++) overlayToggleCallbacks[e](t)
}, Math.seed = function(t) {
	var e = t,
		i = 22984849,
		r = 4294967295;
	return function() {
		i = 36969 * (65535 & i) + (i >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r;
		var t = (i << 16) + e & r;
		return t /= 4294967296, t + .5
	}
}, window.Store = function() {
	if (isChromeApp) {
		var t = {},
			e = !1;
		return {
			set: function(i, r) {
				t[i] = r, e || (e = !0, setTimeout(function() {
					e = !1;
					try {
						chrome.storage.sync.set(t, function() {})
					} catch (i) {
						console.log("Failed to save :(")
					}
				}, 3e3))
			},
			get: function(e, i) {
				return t[e] ? t[e] : void chrome.storage.sync.get(e, function(e) {
					for (var r in e) t[r] = e[r];
					i && i()
				})
			},
			remove: function(e) {
				delete t[e], chrome.storage.sync.remove(e, function(t) {})
			}
		}
	}
	var t = {},
		i = function() {
			try {
				return "localStorage" in window && null !== window.localStorage
			} catch (t) {
				return !1
			}
		}();
	return i ? {
		set: function(e, i) {
			t[e] = i;
			try {
				localStorage.setItem(e, i)
			} catch (r) {}
		},
		get: function(e, i) {
			return i && i(), t[e] ? t[e] : localStorage.getItem(e)
		},
		remove: function(t) {
			return localStorage.removeItem(t)
		}
	} : {
		set: function() {},
		get: function(t, e) {
			e && e()
		},
		remove: function() {}
	}
}(), SoundPlayer.unblocked = !1, window.Sound = new SoundPlayer, window.Music = new SoundPlayer(!0), window.backgroundMusic = null, window.clickSound = null;
var Tween = function(t, e, i, r) {
	i = void 0 == i ? 1 : i;
	var n = {};
	this.offset = 0, this.method = r || Tween.easeout, this.length = 1e3 * i / (1e3 / 60), this.target = t, this.call = function(t) {
		return this.callback = t, this
	}, this.wait = function(t) {
		return this.delay = 1e3 * (t || 0) / (1e3 / 60), this
	}, this.tick = function() {
		if (this.delay > 0) return void this.delay--;
		this.target.dirty = !0;
		for (var t in n) {
			var e = n[t];
			this.target[t] = this.method(e.start, e.end, this.offset / this.length)
		}
		return this.offset++, this.offset > this.length ? !0 : void 0
	}, this.complete = function() {
		for (var t in n) this.target[t] = n[t].end;
		if (this.callback) {
			var e = this;
			setTimeout(function() {
				e.callback.apply(e.target, null)
			}, 50)
		}
	};
	for (var o in e) n[o] = {
		start: t[o],
		end: e[o]
	};
	Tween.tweens.push(this)
};
Tween.tweens = [], Tween.linary = function(t, e, i) {
	return t + (e - t) * i
}, Tween.easein = function(t, e, i) {
	var r = 1 - Math.sin(i * Math.PI / 2 + Math.PI / 2);
	return t + (e - t) * r
}, Tween.easeout = function(t, e, i) {
	var r = Math.sin(i * Math.PI / 2);
	return t + (e - t) * r
}, Tween.easeinout = function(t, e, i) {
	var r = (Math.sin(i * Math.PI + Math.PI / 2) + 1) / 2;
	return t + (e - t) * r
}, Tween.bounce = function(t, e, i) {
	var r = Math.sin(i * Math.PI);
	return t + (e - t) * r
}, Tween.tick = function() {
	for (var t = 0; t < Tween.tweens.length; t++) {
		var e = Tween.tweens[t];
		e.tick() && (window.dirtyOnce = !0, Tween.tweens.splice(t--, 1), e.complete())
	}
}, Tween.complete = function(t) {
	for (var e = 0; e < Tween.tweens.length; e++) {
		var i = Tween.tweens[e];
		i.target == t && (window.dirtyOnce = !0, Tween.tweens.splice(e--, 1), i.complete())
	}
}, Tween.clear = function(t) {
	for (var e = 0; e < Tween.tweens.length; e++) {
		var i = Tween.tweens[e];
		i.target == t && Tween.tweens.splice(e--, 1)
	}
};
var preloadCache = {};
window.embed = function(t) {
	if (t = vpath + t, void 0 === preloadCache[t]) throw "You can only use the embed method in conjuction with preload";
	return preloadCache[t]
}, PIXI.dontSayHello = !0;
var scaledCache = {};
PIXI.Texture.getScaled = function(t, e) {
	function i(t, e) {
		for (;.5 > e;) t = i(t, .5), e /= .5;
		var r = document.createElement("canvas"),
			n = Math.ceil(t.width * e),
			o = Math.ceil(t.height * e);
		return r.width = n + 2, r.height = o + 2, r.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 1, 1, n, o), r.path = t.path, r
	}
	var r = t.path + ":" + e;
	return void 0 !== scaledCache[r] ? scaledCache[r] : (canvas = document.createElement("canvas"), canvas.width = t.width + 2, canvas.height = t.height + 2, canvas.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 1, 1, t.width, t.height), scaledCache[r] = PIXI.Texture.fromCanvas(i(canvas, e)))
};
var Container = function() {
	PIXI.DisplayObjectContainer.call(this);
	var t = void 0;
	Object.defineProperty(this, "ratio", {
		get: function() {
			return t
		},
		set: function(e) {
			if (t !== e) {
				t = e, this.x = this.x, this.y = this.y;
				for (var i = 0; i < this.children.length; i++) this.children[i].ratio = t;
				this.setRatio(e)
			}
		}
	}), this.setRatio = function(t) {}, this.inside = function(t, e, i) {
		return !1
	};
	var e = 0;
	Object.defineProperty(this, "x", {
		get: function() {
			return e
		},
		set: function(t) {
			e = t, this.position.x = t * (this.parent ? this.parent.ratio || 1 : 1)
		}
	});
	var i = 0;
	Object.defineProperty(this, "y", {
		get: function() {
			return i
		},
		set: function(t) {
			i = t, this.position.y = t * (this.parent ? this.parent.ratio || 1 : 1)
		}
	})
};
Container.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Container.prototype.constructor = Container, Container.prototype._addChildAt = Container.prototype.addChildAt, Container.prototype.addChildAt = function(t, e) {
	var i = this._addChildAt(t, e);
	return void 0 != this.ratio && (t.ratio = this.ratio), i
};
var SpriteBatch = function() {
	Container.call(this), PIXI.SpriteBatch.call(this)
};
SpriteBatch.prototype = Object.create(PIXI.SpriteBatch.prototype), SpriteBatch.prototype.constructor = SpriteBatch, SpriteBatch.prototype._addChildAt = SpriteBatch.prototype.addChildAt, SpriteBatch.prototype.addChildAt = function(t, e) {
	var i = this._addChildAt(t, e);
	return void 0 != this.ratio && (t.ratio = this.ratio), i
};
var CachedContainer = function() {
	Container.call(this);
	var t = new PIXI.Sprite(PIXI.Texture.emptyTexture),
		e = document.createElement("canvas"),
		r = e.getContext("2d");
	this.setRatio = function(n) {
		var o = this.getLocalBounds();
		for (e.width = o.width, e.height = o.height, t.worldTransform = this.worldTransform, t.anchor.x = -(o.x / o.width), t.anchor.y = -(o.y / o.height), r.translate(-o.x, -o.y), i = 0, j = this.children.length; i < j; i++) {
			var s = this.children[i];
			s.cacheRender && s.cacheRender(r)
		}
		t.texture.destroy(!0), t.setTexture(PIXI.Texture.fromCanvas(e))
	}, this._renderWebGL = function(e) {
		PIXI.Sprite.prototype._renderWebGL.call(t, e)
	}, this._renderCanvas = function(e) {
		PIXI.Sprite.prototype._renderCanvas.call(t, e)
	}
};
CachedContainer.prototype = Object.create(Container.prototype), CachedContainer.prototype.constructor = CachedContainer, CachedContainer.prototype.updateTransform = function() {
	this.displayObjectUpdateTransform()
};
var Sprite = function(t) {
	this._ratio = -1, this.image = t, PIXI.Sprite.call(this, new PIXI.RenderTexture(t.width, t.height))
};
Sprite.prototype = Object.create(PIXI.Sprite.prototype), Sprite.prototype.constructor = Sprite, Sprite.prototype.getTexture = function(t, e) {
	return PIXI.Texture.getScaled(t, e)
}, Sprite.prototype.cacheRender = function(t) {
	t.drawImage(this.texture.baseTexture.source, this.position.x, this.position.y)
}, Sprite.prototype._y = 0, Object.defineProperty(Sprite.prototype, "y", {
	get: function() {
		return this._y
	},
	set: function(t) {
		this._y = t, this.position.y = t * this._ratio - 1
	}
}), Sprite.prototype._x = 0, Object.defineProperty(Sprite.prototype, "x", {
	get: function() {
		return this._x
	},
	set: function(t) {
		this._x = t, this.position.x = t * this._ratio - 1
	}
}), Object.defineProperty(Sprite.prototype, "ratio", {
	get: function() {
		return this._ratio
	},
	set: function(t) {
		if (this._ratio !== t) {
			this.setTexture(this.getTexture(this.image, t)), this._ratio = t, this.x = this.x, this.y = this.y;
			for (var e = 0; e < this.children.length; e++) this.children[e].ratio = this._ratio
		}
	}
}), Sprite.fromSheet = function(t, e) {
	return t.frame = e, new Sprite(t.image)
}, window.Sprite = Sprite;
var sheetCache = {},
	Sheet = function(t, e, i) {
		e = e || t.height, i = i || t.height;
		var r = t.width / e,
			n = t.height / i;
		this.length = r * n, this.images = [];
		for (var o = 0; o < this.length; o++) {
			var s = o % r >> 0,
				a = o / r >> 0,
				h = t.src + "," + s + "," + a + "," + e + "," + i,
				l = sheetCache[h];
			void 0 === l && (l = document.createElement("canvas"), l.width = e, l.height = i, l.path = h, l.getContext("2d").drawImage(t, s * e, a * i, e, i, 0, 0, e, i), sheetCache[h] = l), this.images.push(l)
		}
		Sprite.call(this, this.images[0])
	};
Sheet.prototype = Object.create(Sprite.prototype), Sheet.prototype.constructor = Sheet, Sheet.prototype._frame = 0, Sheet.prototype.images = [], Object.defineProperty(Sheet.prototype, "frame", {
	get: function() {
		return this._frame
	},
	set: function(t) {
		t !== this.frame && (this._frame = t % this.length, this.image = this.images[this._frame], -1 != this.ratio && this.setTexture(this.getTexture(this.image, this.ratio)))
	}
});
var ignoreMouseEvents = !1,
	canvas = document.getElementById("gameCanvas"),
	stageContainer = new PIXI.Stage(2105376),
	renderer = PIXI.autoDetectRenderer(width, height, {
		view: canvas,
		antialiasing: !1,
		transparent: !1,
		clearBeforeRender: !0
	});
document.body.appendChild(canvas);
var rate = 1e3 / 60,
	before = (new Date).getTime();
tick = function() {
	var t = (new Date).getTime();
	for (t - before > 5e3 && (before = t); t > before; before += rate) Tween.tick()
}, window.dirty = !1, window.dirtyOnce = !1, animate();
var width = 1500,
	height = 1500,
	gameHeight = height,
	stage = new Container;
stage.hitArea = new PIXI.Rectangle(0, -1e4, 1e5, 1e5), stage.interactive = !0, stage.touchstart = function() {}, stageContainer.addChild(stage), stage.orientation = "landscape";
var targetWidth = 2048,
	targetHeight = 1536;
window.forceRatio = !1, resizeCallbacks.push(function() {
	window.resizeAd(), width = Math.max(document.documentElement.clientWidth, 100), height = window.innerHeight || document.documentElement.clientHeight;
	var t = width * ratio >> 0,
		e = height * ratio >> 0;
	renderer.resize(t, e), renderer.view.style.width = (t / ratio >> 0) + "px", renderer.view.style.height = (e / ratio >> 0) + "px", window.scrollTo(0, 0), gameHeight = Math.max(height - marginBottom - marginTop / ratio, 10), stage.orientation = gameHeight >= width ? "portrait" : "landscape", stage.y = marginTop / 2 * ratio;
	var i = targetWidth,
		r = targetHeight;
	"portrait" == stage.orientation && (r = targetWidth, i = targetHeight);
	var n = Math.min(Math.min(width * ratio / i, gameHeight * ratio / r), 1);
	window.forceRatio && (n = 1), stage.ratio = n, document.title = document.title
}), window.onresize(), window.onunload = function() {
	window.onresize()
}, setInterval(function() {
	(height != (window.innerHeight || document.documentElement.clientHeight) || width != document.documentElement.clientWidth) && window.onresize()
}, 500);
var Text = function(t, e, i, r, n, o, s) {
	PIXI.Text.call(this, [t]), this.weight = e || "300", this.size = i || "30", this.fill = r || "#000000", this.font = n || "sans-serif", this.italic = o || !1, this.align = s || "";
	var a = -1;
	Object.defineProperty(this, "ratio", {
		get: function() {
			return a
		},
		set: function(t) {
			a !== t && (a = t, this.x = this.x, this.y = this.y, this.refreshStyle())
		}
	}), this.refreshStyle = function() {
		var t = {
			font: (this.italic ? "italic " : "") + this.weight + " " + this.size * a * 2 + "px " + this.font,
			fill: this.fill,
			align: this.align
		};
		this.dropShadow && (t.dropShadow = !0), this.setStyle(t)
	}, this.ratio = 1;
	var h = 0;
	Object.defineProperty(this, "x", {
		get: function() {
			return h
		},
		set: function(t) {
			h = t, this.position.x = t * a >> 0
		}
	});
	var l = 0;
	Object.defineProperty(this, "y", {
		get: function() {
			return l
		},
		set: function(t) {
			l = t, this.position.y = t * a >> 0
		}
	}), this.scale.set(.5, .5)
};
Text.prototype = Object.create(PIXI.Text.prototype), Text.prototype.constructor = Text,
	function() {
		var t = function() {
			function t() {
				return height * ratio / i.ratio / 2 - a / 2
			}

			function e() {
				i.isShowing = !1, h && h.destroy && h.destroy(), n.removeChild(h), stage.removeChild(i)
			}
			Container.call(this);
			var i = this;
			this.backgroundColor = 16777215, this.isShowing = !1;
			var r = new PIXI.Graphics;
			r.beginFill(0, .6), r.drawRect(0, 0, 200, 200), this.addChild(r), r.interactive = !0, r.defaultCursor = "pointer";
			var n = new Container;
			this.addChild(n);
			var o = new PIXI.Graphics;
			n.addChild(o);
			var s = 800,
				a = 800;
			this.setRatio = function(t) {
				o.width = s * t, o.height = a * t, this.redraw()
			}, this.setHeight = function(t) {
				a = t, o.clear(), o.beginFill(i.backgroundColor, 1), o.drawRoundedRect(0, 0, s, a, 35), this.ratio && this.setRatio(this.ratio)
			}, this.setHeight(800), this.redraw = function() {
				i.ratio = Math.min(Math.min(width * ratio / 900, height * ratio / (a + 100)), ratio / 2), r.width = width * ratio, r.height = height * ratio, n.x = width * ratio / this.ratio / 2 - s / 2
			}, this.handleResize = function() {
				Tween.clear(n), n.x = width * ratio / this.ratio / 2 - s / 2, n.y = t(), i.redraw()
			}, resizeCallbacks.push(this.handleResize);
			var i = this,
				h = null;
			this.show = function(o, s) {
				window.toggleOverlay(!0), e(), i.isShowing = !0, h = o, this.setHeight(h.innerHeight), n.addChild(h), n.y = height * ratio / stage.ratio, r.alpha = 0, new Tween(n, {
					y: t()
				}, .3), s !== !0 && new Tween(r, {
					alpha: 1
				}, .3), stage.addChild(i)
			}, this.hide = function(t) {
				i.isShowing ? (new Tween(r, {
					alpha: 0
				}, .3), new Tween(n, {
					y: -a
				}, .3).call(function() {
					e(), window.toggleOverlay(!1), t instanceof Function && t()
				})) : t instanceof Function && t()
			}, attachUpHandler(r, function() {
				h.blurClose ? i.hide() : h.blurCallback instanceof Function && h.blurCallback()
			}, !0)
		};
		t.prototype = Object.create(Container.prototype), t.prototype.constructor = t, window.Modal = new t
	}();
var ModelButton = function(t, e, i, r, n, o) {
	Container.call(this);
	var s, a, h;
	r = void 0 === r ? 15748651 : r, s = new PIXI.Graphics, s.beginFill(void 0 === r ? 16711680 : r, 1), this.addChild(s);
	var l = 165 + n;
	if (n ? (s.drawRoundedRect(0, 0, 800, 200, n), a = new PIXI.Graphics, a.beginFill(16777215, 1), a.drawRect(0, 0, 800, n), this.addChild(a)) : s.drawRect(0, 0, 800, l), e) {
		var c = new Text(e, 400, 40, "#ffffff", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif');
		c.anchor.set(.5, 0), c.x = 400, c.y = 30 + n + 60, this.addChild(c)
	}
	h = new Text(t, 400, o, "#ffffff", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif'), h.anchor.set(.5, 0), h.x = 400, h.y = 30 + n, h.hitArea = new PIXI.Rectangle(-400, -30, 800, 165), this.addChild(h), h.interactive = !0, h.buttonMode = !0, i && attachDownHandler(s, function() {
		window.clickSound && window.clickSound.play(0), i()
	}), this.setRatio = function(t) {
		s.width = 800 * t, s.height = l * t, a && (a.width = 800 * t, a.height = 35 * t)
	}
};
ModelButton.prototype = Object.create(Container.prototype), ModelButton.prototype.constructor = ModelButton;
var PictureButton = function(t, e) {
	Container.call(this);
	var i = new Image;
	i.crossOrigin = "anonymous", i.src = t;
	var r = this;
	i.onload = function() {
		var t = new Sprite(i);
		t.x = -1, r.addChild(t), e && attachDownHandler(t, e)
	}
};
PictureButton.prototype = Object.create(Container.prototype), PictureButton.prototype.constructor = PictureButton;
var ModalOverlayContent = function() {
	Container.call(this), this.innerHeight = 800, this.blurClose = !0, this.addHeadline = function(t) {
		var e = new Text(t, 200, 90, "#2c2c2c", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif');
		return e.anchor.set(.5, 0), e.x = 400, e.y = 50, e.updateText(), this.addChild(e), e
	}, this.addTextBlock = function(t, e, i) {
		var r = new Text(t, i || 200, e || 90, "#2c2c2c", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif');
		return r.anchor.set(.5, 0), r.x = 400, r.y = 50, r.updateText(), this.addChild(r), r
	}, this.addLead = function(t, e) {
		var i = new Text(t, 200, 45, "#2c2c2c", '"Helvetica Neue","Trebuchet MS", Helvetica, sans-serif', !1, "center");
		return i.anchor.set(.5, 0), i.x = 400, i.y = 140 + (e || 0), i.updateText(), this.addChild(i), i
	};
	this.addButton = function(t, e, i) {
		var r = new ModelButton(t, "", e, i, 35, 90);
		return r.y = 370, this.addChild(r)
	}, this.addMiddleButton = function(t, e, i, r) {
		var n = new ModelButton(t, e, i, r, 0, 60);
		return n.y = 370, this.addChild(n)
	}, this.addSocialButton = function(t, e, i, r) {
		var n = this.addMiddleButton(t, e, i, r);
		return n.y = 405, this.addChild(n)
	}, this.addPictureButton = function(t, e) {
		var i = new PictureButton(t, e);
		return i.y = 405, i.x = -1, this.addChild(i)
	}
};
ModalOverlayContent.prototype = Object.create(Container.prototype), ModalOverlayContent.prototype.constructor = ModalOverlayContent;
var RateGameModal = function(t, e) {
	function i(t) {
		o.visible = !(s.visible = 4 == t), a.visible = !0, n.innerHeight = 760, Modal.setHeight(n.innerHeight), Modal.handleResize(), a.y = 560, n.addChildAt(a, 0)
	}

	function r(e) {
		var r = new Sheet(t, 136, 130);
		return r.y = 270, r.x = 150 * l + 30, attachDownHandler(r, function() {
			for (var t = 0; 5 > t; t++) h[t].frame = e >= t ? 1 : 0;
			i(e)
		}), r.buttonMode = !0, r
	}
	ModalOverlayContent.call(this), this.addHeadline("Having Fun?"), this.addLead("Help us improve the game!\nHow would you rate Hex FRVR?", 10);
	var n = this,
		o = n.addMiddleButton("Send Feedback", "Help us improve Hex FRVR", function() {
			navigate(Config.feedbackURL), Modal.hide()
		}, 6208638);
	o.y = 430, o.visible = !1;
	var s = n.addMiddleButton("Write Review", "Help us by writing a review!", function() {
		navigate(window.isAndroid ? Config.androidReviewURL : Config.iOSReviewURL), Store.set("rateGameCount3", 100), Modal.hide()
	}, 6208638);
	s.y = 430, s.visible = !1;
	var a = n.addButton("No thanks", function() {
		Modal.hide()
	}, e);
	a.visible = !1;
	for (var h = [], l = 0; 5 > l; l++) h.push(this.addChild(r(l)));
	this.innerHeight = 450, this.blurClose = !1
};
RateGameModal.prototype = Object.create(ModalOverlayContent.prototype), RateGameModal.prototype.constructor = RateGameModal;
var InstallGameModal = function(t, e, i) {
	ModalOverlayContent.call(this), this.addHeadline("Install " + Config.shortTitle + "?");
	var r = this.addButton("Install Now", function() {
		navigate(e, "_top")
	}, 6274174);
	r.y = 640, this.innerHeight += 40;
	var n = PIXI.Sprite.fromImage(vpath + t);
	n.anchor.set(0, 0), this.addChild(n), n.buttonMode = !0, attachDownHandler(n, function() {
		navigate(e, "_top")
	}), this.setRatio = function(t) {
		n.scale.set(1.465 * t, 1.465 * t), n.y = 160 * t
	}, this.blurClose = !1, this.blurCallback = function() {
		Modal.hide(i)
	}
};
InstallGameModal.prototype = Object.create(ModalOverlayContent.prototype), InstallGameModal.prototype.constructor = InstallGameModal;
var ScrollContainer = function(t, e) {
	Container.call(this), this.scrollWidth = t, this.scrollHeight = e, this.allowScrollX = !0, this.allowScrollY = !0, this.content = new Container, this.addChild(this.content), this.addChild = function(t) {
		return this.content.addChild(t)
	}, this.removeChild = function(t) {
		return this.content.removeChild(t)
	}, this.resize = function(t, e) {
		this.scrollWidth = t, this.scrollHeight = e
	}, this.moved = !1;
	var i = this,
		r = null,
		n = 0,
		o = 0;
	attachDownHandler(stageContainer, function(t) {
		Tween.clear(i.content);
		var e = t.getLocalPosition(i),
			s = e.x / i.ratio,
			a = e.y / i.ratio;
		n = i.content.x, o = i.content.y, s >= 0 && a >= 0 && s <= i.scrollWidth && a <= i.scrollHeight && (r = e), i.moved = !1
	});
	var s = stageContainer.touchmove,
		a = null,
		h = 0,
		l = 0;
	stageContainer.touchmove = function(t) {
		if (null !== r) {
			var e = t.getLocalPosition(i);
			if (i.moved || Math.abs(r.y - e.y) > 5 * ratio || Math.abs(r.x - e.x) > 5 * ratio) {
				if (i.moved = !0, a && (h = e.y - a.y, l = (new Date).getTime()), a = e, i.allowScrollX) {
					var c = n - (r.x - e.x) / i.ratio,
						d = i.scrollWidth - Math.max(i.content.width / i.content.ratio, i.scrollWidth);
					if (c > 0) c = Math.min(c, 7 * Math.sqrt(c));
					else if (d > c) {
						var u = -c + d;
						c = d - Math.min(u, 7 * Math.sqrt(u))
					}
					i.content.x = c
				}
				if (i.allowScrollY) {
					var p = o - (r.y - e.y) / i.ratio,
						f = i.scrollHeight - Math.max(i.content.height / i.content.ratio, i.scrollHeight);
					if (p > 0) p = Math.min(p, 7 * Math.sqrt(p));
					else if (f > p) {
						var u = -p + f;
						p = f - Math.min(u, 7 * Math.sqrt(u))
					}
					i.content.y = p
				}
			}
		}
		s && s(t)
	}, stageContainer.mousemove = function(t) {
		ignoreMouseEvents || stageContainer.touchmove(t)
	}, attachUpHandler(stageContainer, function(t) {
		r && (!i.moved && i.callback && i.callback(), i.callback = null, i.clean())
	}), window.onmousewheel = function(t) {
		var e = window.event || t,
			r = e.detail ? -10 * e.detail : e.wheelDelta;
		i.content.y += r;
		var n = (i.scrollWidth - Math.max(i.content.width / i.content.ratio, i.scrollWidth), i.scrollHeight - Math.max(i.content.height / i.content.ratio, i.scrollHeight));
		i.content.y >= 0 ? i.content.y = 0 : i.content.y < n && (i.content.y = n), window.dirty = !0
	}, window.addEventListener("DOMMouseScroll", window.onmousewheel), this.clean = function() {
		a = null;
		var t = i.scrollWidth - Math.max(i.content.width / i.content.ratio, i.scrollWidth),
			e = i.scrollHeight - Math.max(i.content.height / i.content.ratio, i.scrollHeight);
		i.content.x >= 0 ? new Tween(i.content, {
			x: 0
		}, .2) : i.content.x < t && new Tween(i.content, {
			x: t
		}, .2), i.content.y >= 0 ? new Tween(i.content, {
			y: 0
		}, .2) : i.content.y < e ? new Tween(i.content, {
			y: e
		}, .2) : (new Date).getTime() - l < 250 && Math.abs(h) > 5 && new Tween(i.content, {
			y: Math.max(Math.min(i.content.y + 20 * h, 0), e)
		}, .4), h = 0, r = null, i.moved = !1
	}
};
ScrollContainer.prototype = Object.create(Container.prototype), ScrollContainer.prototype.constructor = ScrollContainer, stageContainer.setBackgroundColor(2105376), marginBottom = 15;
var Config = {
	id: "hex",
	domain: "",
	facebookAppId: "883249178389083",
	facebookLikeUrl: "",
	parseId: "WSbpkS8PrSklteMXGKsUxk3QUYUrGJioM6VTxR84",
	parseKey: "z9qCUrq7mVJXOBz8v2j7yMxTVRwRTJYrqVn0rT8U",
	adMobInterstitialIdiOS: "ca-app-pub-6389174903462367/4068307733",
	adMobBannerIdiOS: "ca-app-pub-6389174903462367/5545040939",
	adMobInterstitialIdAndroid: "ca-app-pub-6389174903462367/8498507333",
	adMobBannerIdAndroid: "ca-app-pub-6389174903462367/9975240532",
	shareUrl: "",
	shareText: "I think you will like Hex FRVR",
	shareTitle: "Hex FRVR",
	shortTitle: "Hex",
	feedbackURL: "",
	iOSReviewURL: "",
	androidReviewURL: "",
	androidInstallBannerURL: "",
	androidInstallURL: "",
	iOSInstallBannerURL: "",
	iOSInstallURL: ""
};
preload(preloader);