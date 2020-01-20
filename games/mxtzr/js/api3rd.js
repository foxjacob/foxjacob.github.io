!
function(e, t) {
	function n(e) {
		var t = Tt[e],
		n = Array.prototype.slice.call(arguments, 1);
		if (t) {
			t = t.slice(0);
			for (var i = 0,
			r = t.length; r > i; i++) t[i].apply(Et, n)
		}
	}
	function i() {
		if (!vt && !yt) {
			yt = !0,
			Et.get("init",
			function() {
				yt = !1,
				lt = localStorage.getItem(wt + "guid"),
				Et.setShare({
					query: "fu=" + encodeURIComponent(lt)
				});
				var e = _('meta[name="x-key"]');
				return e && (st = (e.getAttribute("content") || "").trim(), St = st + "_"),
				st ? void Et.get("bt",
				function(e) {
					return e ? (ct = e.token, lt = e.guid, localStorage.setItem(wt + "guid", lt), void Et.get("vt",
					function(e) {
						return e ? (ut = e, vt = !0, r(), ht.forEach(function(e) {
							a.apply(null, e)
						}), void(ht = null)) : void n("error", {
							type: "init",
							code: 102
						})
					})) : void n("error", {
						type: "init",
						code: 101
					})
				}) : void n("error", {
					type: "init",
					code: 100
				})
			});
			var e = _('meta[name="x-splashscreen"]');
			return e && (xt = parseInt((e.getAttribute("content") || "").trim(), 10) || 0),
			xt && (Et.splashscreen(xt), mt.lockSplashScreen = !0),
			Et
		}
	}
	function r() {
		var e = _(Ot);
		e || (e = W.createElement("iframe"), e.width = e.height = 1, e.style.display = "none", _("body").appendChild(e)),
		e.src = tt + "/apis-sso.html?" + Date.now()
	}
	function o(e, t, n) {
		Et.set("tc", k({
			act: e,
			aop: t
		},
		n || {}))
	}
	function a(e, t, n, i) {
		var r = gt[t];
		if (r && !(0 === r & pt[e])) {
			if (!vt && "init" !== t && "bt" !== t && "vt" !== t) return void ht.push(Array.prototype.slice.call(arguments));
			x(n) && (i = n, n = null);
			var o = ft[t];
			if (o) {
				try {
					o.abort()
				} catch(a) {}
				o = null,
				delete ft[t]
			}
			ft[t] = h(N, s(t, e), n, i)
		}
	}
	function s(e, t) {
		return tt + rt + (t === J ? "get": "set") + e + ".html"
	}
	function c(e) {
		return e.charAt(0).toUpperCase() + e.slice(1)
	}
	function u(e) {
		var t = null,
		i = l(),
		r = i.style.opacity > 0;
		"boolean" === y(e) ? e !== r && (t = e ? 1 : 0) : t = r ? 0 : 1,
		null !== t && (i.style.display = t ? "": "none", i.style.opacity = t, n("splashscreen." + (t ? "show": "hide"))),
		0 === t && mt.lockSplashScreen && delete mt.lockSplashScreen
	}
	function l() {
		var e = _(Ct);
		if (!e) {
			var t = _('meta[name="x-author"]');
			t && (t = (t.getAttribute("content") || "").trim().replace(/</g, "<").replace(/>/g, ">"));
			var n = [Ct + " {position:fixed;left:0;top:0;z-index:9947483646;width:100%;height:100%;transition:opacity .6s ease;-webkit-transition:opacity .6s ease;-o-transition:opacity .6s ease;box-sizing:border-box;background:#1399d2;color:#fff;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;}", Ct + " .inner {position:relative;top:0;width:100%;height:100%;padding-top:30px;pointer-events:none;}", Ct + " img {display:block;margin:10px auto 20px;height:80px;width:auto;}", Ct + " img:first-child {margin-bottom:10px;}", Ct + " p {font-size:18px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}", Ct + " .hw_info {font-size: 16px;color: rgba(255,255,255,.7);}", Ct + " .progress {height:20px;overflow:hidden;margin: 5px 10px;background-color:#f5f5f5;border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);}", Ct + " .progress .bar {float:left;min-width:20px;height:100%;line-height:20px;font-size:12px;text-align:center;color:#fff;box-sizing:border-box;background-color:#428bca;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease;-webkit-transition:width .6s ease;-o-transition:width .6s ease;}"];
			m(n.join("")),
			e = W.createElement("div"),
			e.id = Ct.slice(1),
			e.style.opacity = 0,
			e.innerHTML = Z[V] ? ['<div class="inner">','<p class="hw_info">游戏载入中...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>"].join("") : ['<div class="inner">',"", '<p class="hw_info">游戏载入中...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>"].join(""),
			e.addEventListener(F, L),
			e.addEventListener(Y, L),
			_("body").appendChild(e)
		}
		return e
	}
	function d(e) {
		var t, i = p(),
		r = "none" !== i.style.display;
		"boolean" === y(e) ? e !== r && (t = e ? "block": "none") : t = r ? "none": "block",
		t && (i.style.display = t, n("orientation." + ("none" === t ? "hide": "show")))
	}
	function p() {
		var e = _(It);
		if (!e) {
			var t = [It + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:#fff;}", It + " .inner {width:100%;height:100%;padding-top:200px;pointer-events:none;}", It + " .tip {position:absolute;top:80px;left:50%;margin-left:-64px;width:128px;z-index:9999;}", It + " p {color:#4a87ee;font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}"];
			m(t.join("")),
			e = W.createElement("div"),
			e.id = It.slice(1),
			e.style.display = "none",
			e.innerHTML = ['<div class="inner">', '<img src="' + et + '/images/orientation.gif" class="tip">', "<p>请旋转手机屏幕，以达到最佳效果</p>", "</div>"].join(" "),
			e.addEventListener(F, L),
			e.addEventListener(Y, L),
			_("body").appendChild(e)
		}
		return e
	}
	function g() {
		clearTimeout(Rt),
		Rt = setTimeout(function() {
			var t = !0,
			i = e.orientation;
			if (0 === i || 180 === i) t = !0;
			else if ( - 90 === i || 90 === i) t = !1;
			else {
				var r = D();
				t = r.h > r.w
			}
			null === Lt ? Lt = t: Lt !== t && (Lt = t, n("orientation", t)),
			"boolean" == typeof Dt && d(t !== Dt)
		},
		zt)
	}
	function f(t, i) {
		t && i && !mt.banner && (b(i) && (i = _("#" + i)), W.documentElement.contains(i) && ((e.BAIDU_DUP = e.BAIDU_DUP || []).push(["fillAsync", t, i]), mt.banner = !0, n("banner.set")))
	}
	function h(t, n, i, r) {
		var o = new XMLHttpRequest;
		return t === J && i && (n = C(n, i), i = null),
		o.open(t, n, !0),
		st && o.setRequestHeader("X-KEY", st),
		(ct || ut) && o.setRequestHeader("X-TOKEN", ut || ct),
		lt && o.setRequestHeader("X-GUID", lt),
		t === N && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
		r && (o.onerror = o.onabort = function() {
			r(null, 500, o)
		},
		o.onload = function() {
			
		});
		
	}
	function m(e, t) {
		var n;
		t = t || W,
		n = t.createElement("style"),
		n.type = "text/css",
		t.getElementsByTagName("head")[0].appendChild(n),
		n.styleSheet ? n.styleSheet.cssText = e: n.appendChild(t.createTextNode(e))
	}
	function v(e, t) {
		var n;
		t = t || W,
		n = t.createElement("script"),
		n.type = "text/javascript",
		n.src = e,
		t.getElementsByTagName("head")[0].appendChild(n)
	}
	function y(e) {
		return null == e ? String(e) : _0[Object.prototype.toString.call(e)] || "object"
	}
	function b(e) {
		return "string" === y(e)
	}
	function x(e) {
		return "function" === y(e)
	}
	function w(e) {
		return "object" === y(e) && Object.getPrototypeOf(e) === Object.prototype
	}
	function S(e, t) {
		Object.keys(e).forEach(function(n) {
			t(n, e[n])
		})
	}
	function k(e, t) {
		return S(t,
		function(t, n) {
			e[t] = n
		}),
		e
	}
	function _(e, t) {
		return b(e) ? (t = t || W, t.querySelector(e)) : e
	}
	function E(e) {
		return "string" == typeof e && "" !== e
	}
	function T(e) {
		return E(e)
	}
	function O(e, t) {
		if (E(e)) {
			var n = String(W.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"));
			if (n) return (n = n[1]) ? t ? decodeURIComponent(n) : n: ""
		}
		return null
	}
	function j(e, t) {
		return t = t || {},
		O(T(e) ? e: "", !t.raw)
	}
	function A(e) {
		var t = [];
		return S(e || {},
		function(e, n) {
			Array.isArray(n) || (n = [n]),
			n.forEach(function(n) {
				t.push(e + "=" + encodeURIComponent(n))
			})
		}),
		t.join("&")
	}
	function C(e, t) {
		b(t) || (t = A(t)),
		e = e.split("#");
		var n = e[1];
		return e = e[0],
		t && (e += e.indexOf("?") >= 0 ? "&": "?", e += t + (n ? "#" + n: "")),
		e
	}
	function L(e) {
		e && (e.preventDefault(), e.stopPropagation())
	}
	function D() {
		return {
			w: e.innerWidth,
			h: e.innerHeight
		}
	}
	for (var I = ":",
	z = "/",
	R = ".",
	B = "1",
	M = "5",
	P = [], H = 97; 122 > H; H++) P.push(String.fromCharCode(H));
	var q = P[7] + P[19] + P[19] + P[15] + I + z + z,
	U = R + P[2] + P[14] + P[12],
	W = e.document,
	J = "GET",
	N = "POST",
	F = "touchstart",
	Y = "mousedown",
	G = location.hostname,
	X = location.pathname,
	K = e.navigator.userAgent,
	V = /(?:^|\.)(5iwebgame|7k7k|ishanku|baohulove|miaopai|yixia|weibo)\.com$/.exec(G);
	V = V && V[1],
	V || (V = /(?:^|\.)(360)\.cn$/.exec(G), V = V && V[1]);
	var Q = P[6] + R + P[22] + P[0] + P[13] + P[7] + M + U !== G && !V,
	Z = {
		
	},
	et = q + P[18] + P[19] + P[0] + P[19] + P[8] + P[2] + R + P[22] + P[0] + P[13] + P[7] + M + U,
	tt = q + (Q ? "dev" + R: "") + P[0] + P[15] + P[8] + R + M + B + P[7] + M + U,
	nt = V ? q + G: q + (Q ? "dev" + R: "") + P[6] + R + P[22] + P[0] + P[13] + P[7] + M + U,
	it = nt + X.replace(/\/([^\/]+\.\w+)$/, "/").replace(/\w+$/, "$1/"),
	rt = z + P[0] + P[15] + P[8] + P[18] + "-",
	ot = q + M + B + P[7] + M + U + z + P[22] + P[23];
	Z[V] && Z[V][1] && (ot = Z[V][1]);
	var at = "";
	Z[V] && Z[V][2] && (at = Z[V][2]);
	var st, ct, ut, lt, dt = P[4] + P[21] + P[0] + P[11],
	pt = {
		GET: 1,
		SET: 2
	},
	gt = {
		init: 1,
		bt: 1,
		vt: 1,
		ui: 1,
		gv: 1,
		jf: 3,
		ph: 1,
		ok: 1,
		data: 3,
		title: 1,
		tc: 2,
		guc: 3
	},
	ft = {},
	ht = [],
	mt = {},
	vt = !1,
	yt = !1,
	bt = !1,
	xt = 3e3,
	wt = "51h5_",
	St = wt,
	kt = "51h5_user",
	_0 = {};
	"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
		_0["[object " + e + "]"] = e.toLowerCase()
	});
	var Et = e.ih5game = {};
	Et.ver = "1.3";
	var Tt = {};
	Et.on = function(e, t) {
		return Tt[e] = Tt[e] || [],
		Tt[e].push(t),
		Et
	},
	Et.once = function(e, t) {
		function n() {
			Et.off(e, n),
			t.apply(this, arguments)
		}
		return n.listener = t,
		Et.on(e, n),
		Et
	},
	Et.off = function(e, t) {
		if (0 === arguments.length) return Tt = {},
		Et;
		var n = Tt[e];
		if (!n) return Et;
		if (1 === arguments.length) return delete Tt[e],
		Et;
		for (var i, r = 0; r < n.length; r++) if (i = n[r], i === t || i.listener === t) {
			n.splice(r, 1);
			break
		}
		return Et
	},
	Et.env = {},
	Et.is = function(e) {
		return e = e.toLowerCase(),
		Et.env.hasOwnProperty(e) && Et.env[e] ? !0 : !1
	},
	function(e) {
		var t = K.match(/MicroMessenger\/([\d.]+)/);
		t && (e.wechat = t[1]);
		var n = K.match(/(Android);?[\s\/]+([\d.]+)?/);
		n && (e.android = n[2]);
		var i = K.match(/(iPad).*OS\s([\d_]+)/);
		i && (e.ipad = i[2].replace(/_/g, "."));
		var r = K.match(/(iPod)(.*OS\s([\d_]+))?/);
		r && (e.ipod = r[3].replace(/_/g, ".") || null);
		var o = !i && K.match(/(iPhone\sOS)\s([\d_]+)/);
		o && (e.iphone = o[2].replace(/_/g, ".")),
		e.ios = e.ipod || e.iphone || e.ipad
	} (Et.env),
	Et.storage = {
		get: function(e) {
			return localStorage.getItem(St + e)
		},
		set: function(e, t, n) {
			e && (n || null === this.get(e)) && localStorage.setItem(St + e, t)
		},
		remove: function(e) {
			e && null !== this.get(e) && localStorage.removeItem(St + e)
		}
	},
	e.addEventListener("storage",
	function(e) {
		if (st) {
			var t = e.key;
			if (t && 0 === t.indexOf(St)) {
				var i = {
					key: t.slice(St.length),
					from: e.oldValue,
					to: e.newValue,
					time: e.timeStamp,
					url: e.url
				};
				null === i.from ? n("storage.add", {
					key: i.key,
					value: i.to,
					time: i.time,
					url: i.url
				}) : null === i.to ? n("storage.remove", {
					key: i.key,
					time: i.time,
					url: i.url
				}) : n("storage.change", i),
				n("storage", i)
			}
		}
	}),
	Et.init = function() {},
	Et.ready = function(e) {
		return bt ? e && e() : Et.once("ready", e),
		Et
	},
	/complete|loaded|interactive/.test(W.readyState) && W.body ? bt = !0 : W.addEventListener("DOMContentLoaded",
	function() {
		bt = !0,
		n("ready")
	},
	!1);
	var Ot = "#ih5game_sso";
	Et.get = function(e, t, n) {
		var i = Et[J.toLowerCase() + c(e)];
		return i ? i(t, n) : a(J, e, t, n),
		Et
	},
	Et.set = function(e, t, n) {
		var i = Et[N.toLowerCase() + c(e)];
		return i ? i(t, n) : a(N, e, t, n),
		Et
	};
	var jt = [0, 0, 0];
	Et.start = function() {
		return jt[0] || (jt[0] = jt[1] = Date.now(), o("game", "start"), n("status.start")),
		Et
	},
	Et.restart = function() {
		jt[1] = Date.now(),
		jt[2] = jt[3] = 0,
		o("game", "restart"),
		n("status.restart")
	},
	Et.pause = function() {
		jt[2] || (jt[2] = Date.now(), o("game", "pause"), n("status.pause"))
	},
	Et.stop = function() {
		jt[2] || (jt[2] = Date.now(), o("game", "stop"), n("status.stop"))
	},
	Et.share = function(e) {
		function t() {
			r.style.display = "none",
			r.querySelector(".inner").style.pointerEvents = "none",
			n("share.hide")
		}
		clearTimeout(Et.shareTimer);
		var i = "#hw_share",
		r = _(i);
		if (!r) {
			var o = [i + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.85);}", i + " .inner {width:100%;height:100%;padding-top:100px;pointer-events:none;}", i + " .hw_arron {position:absolute;top:3px;right:18px;z-index:9999;width:100px;}", i + " p {color:#fff;font-size:24px;text-align:center;margin:5px auto;padding:0;}"];
			m(o.join("")),
			r = W.createElement("div"),
			r.id = i.slice(1),
			r.innerHTML = ['<div class="inner"><img src="' + et + '/images/home/arron.png" class="hw_arron">', "<p>请点击右上角</p>", "<p>点击【分享到朋友圈】</p>", '<p style="margin: 20px auto;">' + (e || Z[V] && "火舞授权“" + Z[V][0] + "”联合发布" || "火舞为未来而生") + "</p></div>"].join(" "),
			r.addEventListener(F, L),
			r.addEventListener(Y, L);
			var a = r.querySelector(".inner");
			a && (a.addEventListener(F, t), a.addEventListener(Y, t)),
			_("body").appendChild(r)
		}
		return Et.wx.showOption(),
		r.style.display = "block",
		n("share.show"),
		Et.shareTimer = setTimeout(function() {
			r.querySelector(".inner").style.pointerEvents = "auto"
		},
		500),
		Et
	},
	Et.more = function(t) {
		return t ? ot: void(e.location.href = ot)
	},
	Et.follow = function(t) {
		return t ? at: void(e.location.href = at)
	},
	Et.progress = function(e, t) {
		var i = _(Ct);
		if (!i) return Et;
		var r = _(".progress", i);
		return r ? ("none" === r.style.display && (r.style.display = "block"), t = b(t) ? t.trim() : "", t && (r = _(".hw_info", i)) && (r.innerText = t), e = "number" === y(e) ? Math.min(100, Math.max(0, e)) : -1, e >= 0 && (r = _(".progress .bar", i)) && (r.innerText = e + "%", r.style.width = e + "%", n("progress", e, t)), Et) : Et
	},
	Et.splashscreen = function(e) {
		return mt.lockSplashScreen ? void 0 : (At = clearTimeout(At), "boolean" === y(e) ? u(e) : e > 0 ? (u(!0), At = setTimeout(function() {
			u(!1)
		},
		e)) : u(), Et)
	};
	var At, Ct = "#hw_splashscreen",
	Lt = null,
	Dt = null;
	Et.getOrientation = function() {
		return Lt
	},
	Et.orientationTip = function(e) {
		return "boolean" == typeof e && (Dt = e, g()),
		Et
	};
	var It = "#hw_orientationtip",
	zt = Et.is("android") ? 350 : 100,
	Rt = null;
	e.addEventListener("onorientationchange" in e ? "orientationchange": "resize", g, !1),
	g(),
	Et.getUser = function(e, t) {
		x(e) ? (t = e, e = !1) : "boolean" !== y(e) && (e = !1);
		var i = {
			id: 0,
			name: null,
			avatar: "../content/images/1.jpg",
			gender: 0
		},
		r = j(kt);
		r && (r = decodeURIComponent(r).split("|"), i = {
			id: parseInt(r[0], 10) || 0,
			name: decodeURIComponent(r[1]) || null,
			avatar: decodeURIComponent(r[2]),
			gender: parseInt(r[3], 10) || 0
		}),
		e ? a(J, "ui",
		function(e, r) {
			null !== e ? (i = k(i, e), n("user.get", i)) : n("error", {
				type: "user.get",
				code: r
			}),
			t && x(t) && t(i, r)
		}) : (n("user.get", i), t && x(t) && t(i))
	},
	Et.getStat = function(e) {
		a(J, "gv",
		function(t, i) {
			null !== t ? n("stat.get", t) : n("error", {
				type: "stat.get",
				code: i
			}),
			e && x(e) && e(t, i)
		})
	},
	Et.getScore = function(e) {
		a(J, "jf",
		function(t, i) {
			null !== t ? n("score.get", t) : n("error", {
				type: "score.get",
				code: i
			}),
			e && x(e) && e(t, i)
		})
	},
	Et.setScore = function(e, t, i) {
		if (e = parseFloat(e, 10), 0 >= e) return Et;
		x(t) && (i = t, t = null);
		var r = {
			s: e
		};
		return t = parseFloat(t, 10),
		t > 0 && (r.t = t),
		a(N, "jf", r,
		function(e, t) {
			null !== e ? n("score.set", r.s, r.t) : n("error", {
				type: "score.set",
				code: t
			}),
			i && x(i) && i(e, t)
		}),
		Et
	},
	Et.getRank = function(e, t) {
		return x(e) && (t = e, e = null),
		a(J, "ph", {
			order: b(e) && "time" === e ? "time": "score"
		},
		function(e, i) {
			null !== e ? n("rank.get", e) : n("error", {
				type: "rank.get",
				code: i
			}),
			t && x(t) && t(e, i)
		}),
		Et
	},
	Et.getSaveData = function(e) {
		return a(J, "data",
		function(t, i) {
			null !== t ? n("savedata.get", t) : n("error", {
				type: "savedata.get",
				code: i
			}),
			e && x(e) && e(t, i)
		}),
		Et
	},
	Et.setSaveData = function(e, t) {
		return b(e) ? (e = {
			d: e
		},
		a(N, "data", e,
		function(i, r) {
			null !== i ? n("savedata.set", e.d) : n("error", {
				type: "savedata.set",
				code: r
			}),
			t && x(t) && t(i, r)
		}), Et) : Et
	},
	Et.getData = function(e) {
		return a(J, "guc",
		function(t, i) {
			null !== t ? n("data.get", t) : n("error", {
				type: "data.get",
				code: i
			}),
			e && x(e) && e(t, i)
		}),
		Et
	},
	Et.setData = function(e, t) {
		return b(e) ? (e = {
			d: e
		},
		a(N, "guc", e,
		function(i, r) {
			null !== i ? n("data.set", e.d) : n("error", {
				type: "data.set",
				code: r
			}),
			t && x(t) && t(i, r)
		}), Et) : Et
	},
	Et.getTitle = function(e) {
		return a(J, "title",
		function(t, i) {
			null !== t ? n("title.get", t) : n("error", {
				type: "title.get",
				code: i
			}),
			e && x(e) && e(t, i)
		}),
		Et
	},
	function(t) {
		function i(e) {
			return ! /^(?:\w+)?:/.test(e) && /\.(?:png|jpg)$/.test(e) ? (e = e.replace(/^\/+/, ""), e = e.replace(/^(\.+\/+)+/, ""), it + e) : void 0
		}
		function r(t, n, i) {
			e.WeixinJSBridge && e.WeixinJSBridge.invoke(t, n, i)
		}
		function a(t) {
			e.WeixinJSBridge && e.WeixinJSBridge.call(t)
		}
		function s(e, t) {
			n("share.open", e),
			r(f[e], {
				appid: y.appid || "",
				img_url: y.img,
				img_width: y.imgWidth,
				img_height: y.imgHeight,
				link: y[e + "Link"] || y.link,
				title: e === p ? y.desc: y.title,
				desc: e === p ? y.title: y.desc,
				content: y.desc
			},
			function(i) {
				var r = {
					type: e
				},
				a = i.err_msg.slice(h[e].length + 1); ("confirm" === a || "ok" === a) && (a = "success"),
				r[a] = !0,
				n("share", r, i),
				n("share.close"),
				"cancel" !== a && o("share", a),
				t && x(t) && t(r, i)
			})
		}
		function c(t) {
			e.WeixinJSBridge && e.WeixinJSBridge.on(m + v[t],
			function() {
				s(t)
			})
		}
		function u() {
			c(d),
			c(p),
			c(g)
		}
		var l = t.wx = t.wx || {},
		d = l.SHARE_TYPE_APP = "app",
		p = l.SHARE_TYPE_TIMELINE = "timeline",
		g = l.SHARE_TYPE_WIEBO = "weibo",
		f = {};
		f[d] = "sendAppMessage",
		f[p] = "shareTimeline",
		f[g] = "shareWeibo";
		var h = {};
		h[d] = "send_app_msg",
		h[p] = "share_timeline",
		h[g] = "share_weibo";
		var m = "menu:share:",
		v = {};
		v[d] = "appmessage",
		v[p] = "timeline",
		v[g] = "weibo";
		var y = {
			img: it + "icon.png",
			imgWidth: 200,
			imgHeight: 200,
			link: it,
			query: "",
			title: W.title || "",
			desc: W.title || ""
		};
		t.getShare = function(e) {
			return y[e]
		},
		t.setShare = function(e, r) {
			if (w(e)) for (var o in e) t.setShare(o, e[o]);
			else if (e && y.hasOwnProperty(e) && b(e) && b(r) && r) {
				if ("link" === e) return t;
				if ("img" === e) {
					if (r = i(r), !r) return t
				} else "query" === e && (y.link = C(y.link, r));
				var a = y[e];
				y[e] = r,
				n("share.set", e, a, r)
			}
			return t
		},
		l.sendFriend = function(e, n) {
			return t.setShare(e),
			s(d, n),
			this
		},
		l.sendTimeline = function(e, n) {
			return t.setShare(e),
			s(p, n),
			this
		},
		l.sendWeibo = function(e, n) {
			return t.setShare(e),
			s(g, n),
			this
		},
		l.preview = function(e, t) {
			return e && t && t.length && r("imagePreview", {
				current: e,
				urls: t
			}),
			this
		},
		l.showOption = function() {
			return a("showOptionMenu"),
			this
		},
		l.hideOption = function() {
			return a("hideOptionMenu"),
			this
		},
		l.showToolbar = function() {
			return a("showToolbar"),
			this
		},
		l.hideToolbar = function() {
			return a("hideToolbar"),
			this
		},
		l.close = function() {
			return a("closeWindow"),
			this
		}
		
	} (Et);
	var Bt, Mt;
	Et.setBanner = function(e) {
		return f(Bt, e),
		Et
	},
	function() {
		var t = _('meta[name="x-banner"]');
		t && (Mt = (t.getAttribute("data-type") || "").trim(), Bt = (t.getAttribute("content") || "").trim(), Bt > 0 && Et.ready(function() {
			if (e.BAIDU_DUP_require || v(""), "1" === Mt) {
				var t = W.createElement("div");
				t.id = "hw_banner_" + Bt,
				_("body").appendChild(t),
				Et.setBanner(t.id)
			}
		}))
	} (),
	Et.ready(i)
} (this);