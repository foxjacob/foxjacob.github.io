(function() {
	function l() {
		this.c = "1253113305";
		this.O = "z";
		this.K = "";
		this.H = "";
		this.J = "";
		this.o = "1408757646";
		this.M = "z4.cnzz.com";
		this.I = "";
		this.q = "CNZZDATA" + this.c;
		this.p = "_CNZZDbridge_" + this.c;
		this.C = "_cnzz_CV" + this.c;
		this.s = "0";
		this.v = {};
		this.a = {};
		this.ia()
	}
	function g(a, c) {
		try {
			/*var b = [];
			b.push("siteid=1253113305");
			b.push("name=" + f(a.name));
			b.push("msg=" + f(a.message));
			b.push("r=" + f(h.referrer));
			b.push("page=" + f(d.location.href));
			b.push("agent=" + f(d.navigator.userAgent));
			b.push("ex=" + f(c));
			b.push("rnd=" + Math.floor(2147483648 * Math.random())); (new Image).src = "http://jserr.cnzz.com/log.php?" + b.join("&")*/
		} catch(e) {}
	}
	var h = document,
	d = window,
	f = encodeURIComponent,
	k = decodeURIComponent,
	p = unescape,
	q = escape;
	l.prototype = {
		ia: function() {
			try {
				this.R(),
				this.G(),
				this.fa(),
				this.D(),
				this.l(),
				this.da(),
				this.ca(),
				this.ga(),
				this.i(),
				this.ba(),
				this.ea(),
				this.ha(),
				this.$(),
				this.Y(),
				this.aa(),
				this.na(),
				d[this.p] = d[this.p] || {},
				this.Z("_cnzz_CV")
			} catch(a) {
				g(a, "i failed")
			}
		},
		la: function() {
			try {
				var a = this;
				d._czc = {
					push: function() {
						return a.w.apply(a, arguments)
					}
				}
			} catch(c) {
				g(c, "oP failed")
			}
		},
		Y: function() {
			try {
				var a = d._czc;
				if ("[object Array]" === {}.toString.call(a)) for (var c = 0; c < a.length; c++) {
					var b = a[c];
					switch (b[0]) {
					case "_setAccount":
						d._cz_account = "[object String]" === {}.toString.call(b[1]) ? b[1] : String(b[1]);
						break;
					case "_setAutoPageview":
						"boolean" === typeof b[1] && (d._cz_autoPageview = b[1])
					}
				}
			} catch(e) {
				g(e, "cS failed")
			}
		},
		na: function() {
			try {
				if ("undefined" === typeof d._cz_account || d._cz_account === this.c) {
					d._cz_account = this.c;
					if ("[object Array]" === {}.toString.call(d._czc)) for (var a = d._czc,
					c = 0,
					b = a.length; c < b; c++) this.w(a[c]);
					this.la()
				}
			} catch(e) {
				g(e, "pP failed")
			}
		},
		w: function(a) {
			try {
				if ("[object Array]" === {}.toString.call(a)) switch (a[0]) {
				case "_trackPageview":
					if (a[1]) {
						this.a.d = "http://" + d.location.host;
						"/" !== a[1].charAt(0) && (this.a.d += "/");
						this.a.d += a[1];
						if ("" === a[2]) this.a.e = "";
						else if (a[2]) {
							var c = a[2];
							"http" !== c.substr(0, 4) && (c = "http://" + d.location.host, "/" !== a[2].charAt(0) && (c += "/"), c += a[2]);
							this.a.e = c
						}
						this.u();
						"undefined" !== typeof this.a.e && delete this.a.e;
						"undefined" !== typeof this.a.d && delete this.a.d
					}
					break;
				case "_trackEvent":
					var b = [];
					a[1] && a[2] && (b.push(f(a[1])), b.push(f(a[2])), b.push(a[3] ? f(a[3]) : ""), a[4] = parseFloat(a[4]), b.push(isNaN(a[4]) ? 0 : a[4]), b.push(a[5] ? f(a[5]) : ""), this.k = b.join("|"), this.u(), delete this.k);
					break;
				case "_setCustomVar":
					if (3 <= a.length) {
						if (!a[1] || !a[2]) return ! 1;
						var b = a[1],
						e = a[2],
						m = a[3] || 0;
						a = 0;
						for (var h in this.a.b) a++;
						if (5 <= a) return ! 1;
						var k;
						k = 0 == m ? "p": -1 == m || -2 == m ? m: (new Date).getTime() + 1E3 * m;
						this.a.b[b] = {};
						this.a.b[b].P = e;
						this.a.b[b].f = k;
						this.t()
					}
					break;
				case "_deleteCustomVar":
					2 <= a.length && (b = a[1], this.a.b[b] && (delete this.a.b[b], this.t()))
				}
			} catch(l) {
				g(l, "aC failed")
			}
		},
		aa: function() {
			try {
				var a = this.r(this.C),
				c,
				b;
				this.a.b = {};
				if (a) for (var e = a.split("&"), a = 0; a < e.length; a++) b = k(e[a]),
				c = b.split("|"),
				this.a.b[k(c[0])] = {},
				this.a.b[k(c[0])].P = k(c[1]),
				this.a.b[k(c[0])].f = k(c[2])
			} catch(d) {
				g(d, "gCV failed")
			}
		},
		S: function() {
			try {
				var a = (new Date).getTime(),
				c;
				for (c in this.a.b)"p" === this.a.b[c].f ? this.a.b[c].f = 0 : "-1" !== this.a.b[c].f && a > this.a.b[c].f && delete this.a.b[c];
				this.t()
			} catch(b) {
				g(b, "cCV failed")
			}
		},
		t: function() {
			try {
				var a = [],
				c,
				b,
				e;
				for (e in this.a.b) {
					var d = [];
					d.push(e);
					d.push(this.a.b[e].P);
					d.push(this.a.b[e].f);
					c = d.join("|");
					a.push(c)
				}
				if (0 === a.length) return ! 0;
				var k = new Date;
				k.setTime(k.getTime() + 157248E5);
				b = this.C + "=";
				this.b = f(a.join("&"));
				b += this.b;
				b += "; expires=" + k.toUTCString();
				h.cookie = b + "; path=/"
			} catch(l) {
				g(l, "sCV failed")
			}
		},
		$: function() {
			try {
				if ("" !== d.location.hash) return this.B = d.location.href
			} catch(a) {
				g(a, "gCP failed")
			}
		},
		i: function() {
			try {
				return this.a.oa = h.referrer || ""
			} catch(a) {
				g(a, "gR failed")
			}
		},
		ba: function() {
			try {
				return this.a.m = d.navigator.systemLanguage || d.navigator.language,
				this.a.m = this.a.m.toLowerCase(),
				this.a.m
			} catch(a) {
				g(a, "gL failed")
			}
		},
		ea: function() {
			try {
				return this.a.N = d.screen.width && d.screen.height ? d.screen.width + "x" + d.screen.height: "0x0",
				this.a.N
			} catch(a) {
				g(a, "gS failed")
			}
		},
		l: function() {
			try {
				return this.a.ka = this.g("ntime") || "none"
			} catch(a) {
				g(a, "gLVST failed")
			}
		},
		F: function() {
			try {
				return this.a.Q = this.g("ltime") || (new Date).getTime()
			} catch(a) {
				g(a, "gFVBT failed")
			}
		},
		da: function() {
			try {
				var a = this.g("cnzz_a");
				if (null === a) a = 0;
				else {
					var c = 1E3 * this.l(),
					b = new Date;
					b.setTime(c); (new Date).getDate() === b.getDate() ? a++:a = 0
				}
				return this.a.sa = a
			} catch(e) {
				g(e, "gRT failed")
			}
		},
		ca: function() {
			try {
				return this.a.n = this.g("rtime"),
				null === this.a.n && (this.a.n = 0),
				0 < this.F() && 432E5 < (new Date).getTime() - this.F() && (this.a.n++, this.a.Q = (new Date).getTime()),
				this.a.n
			} catch(a) {
				g(a, "gRVT failed")
			}
		},
		ga: function() {
			try {
				return "none" === this.l() ? this.a.ra = 0 : this.a.ra = parseInt(((new Date).getTime() - 1E3 * this.l()) / 1E3)
			} catch(a) {
				g(a, "gST failed")
			}
		},
		fa: function() {
			try {
				var a = this.g("sin") || "none";
				if (!h.domain) return this.a.qa = "none";
				this.i().split("/")[2] !== h.domain && (a = this.i());
				return this.a.qa = a
			} catch(c) {
				g(c, "gS failed")
			}
		},
		D: function() {
			try {
				return this.a.h = this.g("cnzz_eid") || "none"
			} catch(a) {
				g(a, "gC failed")
			}
		},
		pa: function() {
			try {
				/*var a = "http://c.cnzz.com/core.php?",
				c = [];
				c.push("web_id=" + f(this.c));
				this.K && c.push("show=" + f(this.K));
				this.J && c.push("online=" + f(this.J));
				this.H && c.push("l=" + f(this.H));
				this.O && c.push("t=" + this.O);
				a += c.join("&");
				this.V(a, "utf-8")*/
			} catch(b) {
				g(b, "rN failed")
			}
		},
		R: function() {
			try {
				return ! 1 === d.navigator.cookieEnabled ? this.a.U = !1 : this.a.U = !0
			} catch(a) {
				g(a, "cCE failed")
			}
		},
		r: function(a) {
			try {
				a += "=";
				var c = h.cookie.indexOf(a),
				b = "";
				if ( - 1 < c) {
					var e = h.cookie.indexOf(";", c); - 1 === e && (e = h.cookie.length);
					b = k(h.cookie.substring(c + a.length, e))
				}
				return b ? b: ""
			} catch(d) {
				g(d, "gAC failed")
			}
		},
		Z: function(a) {
			try {
				h.cookie = a + "=; expires=" + (new Date(0)).toUTCString() + "; path=/"
			} catch(c) {
				g(c, "dAC failed")
			}
		},
		ha: function() {
			try {
				for (var a = h.title,
				c = a.length,
				b = 0,
				e = "",
				d = 0; d < c; d++) {
					var f = a[d];
					this.ja(f) ? b++:b += 2;
					e += f;
					if (20 <= b) {
						e += "...";
						break
					}
				}
				this.a.ma = e
			} catch(k) {
				g(k, "gT failed")
			}
		},
		A: function(a) {
			try {
				return "http" !== a.substr(0, 4) ? "": /http:\/\/.*?\//i.exec(a)
			} catch(c) {
				g(c, "cH failed")
			}
		},
		G: function() {
			try {
				var a = this.q,
				c = {},
				b = this.r(this.q);
				if (0 < b.length) if (1E8 < this.c) {
					var e = b.split("|");
					c.cnzz_eid = k(e[0]);
					c.ntime = k(e[1])
				} else for (var e = b.split("&"), d = 0, f = e.length; d < f; d++) {
					var h = e[d].split("=");
					c[k(h[0])] = k(h[1])
				}
				this.v = c
			} catch(l) {
				g(l, "iC failed:" + a + ":" + b)
			}
		},
		L: function() {
			try {
				var a = this.q + "=",
				c = [],
				b = new Date;
				b.setTime(b.getTime() + 157248E5);
				if (1E8 < this.c) {
					if ("none" !== this.a.h) c.push(f(this.a.h));
					else {
						var e = Math.floor(2147483648 * Math.random()) + "-" + this.o + "-" + this.A(this.i());
						c.push(f(e))
					}
					c.push(this.o);
					0 < c.length ? (a += f(c.join("|")), a += "; expires=" + b.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString()
				} else "none" !== this.a.h ? c.push("cnzz_eid=" + f(this.a.h)) : (e = Math.floor(2147483648 * Math.random()) + "-" + this.o + "-" + this.A(this.i()), c.push("cnzz_eid=" + f(e))),
				c.push("ntime=" + this.o),
				0 < c.length ? (a += f(c.join("&")), a += "; expires=" + b.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString();
				h.cookie = a
			} catch(d) {
				g(d, "sS failed")
			}
		},
		g: function(a) {
			try {
				return "undefined" !== typeof this.v[a] ? this.v[a] : null
			} catch(c) {
				g(c, "gCPa failed")
			}
		},
		V: function(a, c) {
			try {
				if (c = c || "utf-8", "1" === this.s) {
					var b = h.createElement("script");
					b.type = "text/javascript";
					b.async = !0;
					b.charset = c;
					b.src = a;
					var e = h.getElementsByTagName("script")[0];
					e.parentNode && e.parentNode.insertBefore(b, e)
				} else h.write(p("%3Cscript src='" + a + "' charset='" + c + "' type='text/javascript'%3E%3C/script%3E"))
			} catch(d) {
				g(d, "cAS failed")
			}
		},
		X: function(a, c) {
			try {
				var b = h.getElementById("cnzz_stat_icon_" + this.c);
				if (b) {
					var e = h.createElement("script");
					e.type = "text/javascript";
					e.async = !0;
					e.charset = c;
					e.src = a;
					b.appendChild(e)
				} else "0" === this.s && h.write(p("%3Cscript src='" + a + "' charset='" + c + "' type='text/javascript'%3E%3C/script%3E"))
			} catch(d) {
				g(d, "cSI failed")
			}
		},
		W: function(a) {
			try {
				for (var c = a.length,
				b = "",
				d = 0; d < c; d++) a[d] && (b += p(a[d]));
				var f = h.getElementById("cnzz_stat_icon_" + this.c);
				f ? f.innerHTML = b: "0" === this.s && h.write(b)
			} catch(k) {
				g(k, "cI failed")
			}
		},
		u: function() {
			try {
				this.L();
				this.G();
				this.D();
				this.S();
				var a = [];
				a.push("id=" + f(this.c));
				this.a.e || "" === this.a.e ? a.push("r=" + f(this.a.e)) : a.push("r=" + f(this.a.oa));
				a.push("lg=" + f(this.a.m));
				a.push("ntime=" + f(this.a.ka));
				a.push("cnzz_eid=" + f(this.a.h));
				a.push("showp=" + f(this.a.N));
				this.a.d ? a.push("p=" + f(this.a.d)) : "[object String]" === {}.toString.call(this.B) && a.push("p=" + f(this.B));
				"[object String]" === {}.toString.call(this.k) && a.push("ei=" + f(this.k));
				"[object String]" === {}.toString.call(this.b) && a.push("cv=" + this.b);
				a.push("t=" + f(this.a.ma));
				a.push("h=1");
				var c = a.join("&");
				"[object String]" === {}.toString.call(this.k) ? this.j(["http://ei.cnzz.com/stat.htm?" + c]) : (this.I && this.j(["http://" + this.I + "/stat.htm?" + c]), this.M && this.j(["http://" + this.M + "/stat.htm?" + c]))
			} catch(b) {
				g(b, "sD failed")
			}
		},
		ja: function(a) {
			return 0 > q(a).indexOf("%u") ? !1 : !0
		},
		j: function(a) {
			try {
				for (var c = a.length,
				b = null,
				e = 0; e < c; e++) a[e] && (b = "cnzz_image_" + Math.floor(2147483648 * Math.random()), d[b] = new Image, d[b].T = b, d[b].onload = d[b].onerror = d[b].onabort = function() {
					try {
						this.onload = this.onerror = this.onabort = null,
						d[this.T] = null
					} catch(a) {}
				},
				d[b].src = a[e] + "&rnd=" + Math.floor(2147483648 * Math.random()))
			} catch(f) {
				g(f, "cR failed")
			}
		}
	};
	try {
		var n = new l;
		d[n.p].bobject = n; ! 1 !== d._cz_autoPageview ? n.u() : n.L();
		l.prototype.getACookie = l.prototype.r;
		l.prototype.callRequest = l.prototype.j;
		l.prototype.createScriptIcon = l.prototype.X;
		l.prototype.createIcon = l.prototype.W;
		n.pa()
	} catch(r) {
		g(r, "main failed")
	}
})();