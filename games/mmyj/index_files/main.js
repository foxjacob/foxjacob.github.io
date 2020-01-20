H = 960;
var qp_a = 1, qp_b = 1, qp_c = 5, qp_d = 5, qp_e = 5, qp_f = 0, qp_g = 0, qp_h = 1, qp_i, qp_j, qp_k, qp_l, qp_m = 0, qp_n = -1, qp_o = 239, qp_p = 256, qp_q = 257, qp_r = 258, qp_s = 259, qp_t = 260, qp_u = 261, qp_v = 266, qp_w = 267, qp_x = 268, qp_y = 269, qp_z = 262, qp_A = 263, qp_B = 264, qp_C = 265, qp_D = 0, qp_E = 20, qp_F = 270, qp_G = (640 - 2 * qp_E) / qp_c, qp_H = 0, qp_I = 2, qp_J = [0, "red", "green", "blue", "yellow", "black"], qp_K = 1200, qp_L = 500, qp_M = 60, qp_N = qp_M, qp_O = 0;




function qp_P(a) {
	LBShare.updateData({                          //设置标题+图片+文案
	    title: "猫猫瑜伽",
	    imgUrl: "./img/maomaoyujia.png",
	    desc: "【喵喵瑜伽】，看你能塞进几只猫咪？"
	});

	qp_i = new Qp_Q;
	qp_R();
	var e = function () {
		var a = new createjs.Bitmap(qipaStage.queue.getResult("ready"));
		a.regX = 266;
		a.regY = 80;
		a.x = 320;
		a.y = 450;
		a.scaleX = 3;
		a.scaleY = 3;
		a.alpha = 0;
		createjs.Tween.get(a).to({
			alpha : 1,
			scaleX : 1,
			scaleY : 1
		}, 300).to({
			alpha : 1
		}, qp_K - 300).call(function () {
			var a = new createjs.Bitmap(qipaStage.queue.getResult("go"));
			a.regX = 240;
			a.regY = 136;
			a.x = 320;
			a.y = 450;
			createjs.Tween.get(a).to({
				scaleX : 1
			}, qp_L - 200).to({
				alpha : 0
			}, 200).call(function () {
				var a = new createjs.Bitmap(qipaStage.queue.getResult("score"));
				a.regX = 0;
				a.regY = 0;
				a.x = 40;
				a.y = 15;
				qipaStage.stage.addChild(a);
				qp_T = new createjs.Text("0", "bold 48px Arial", "#ff1e50");
				qp_T.stroke = "white";
				qp_T.textBaseline = "middle";
				qp_T.x = 140;
				qp_T.y = 35;
				qipaStage.stage.addChild(qp_T);
				a = new createjs.Bitmap(qipaStage.queue.getResult("clock"));
				a.regX = 25;
				a.regY = 26;
				a.x = 510;
				a.y = 40;
				qipaStage.stage.addChild(a);
				qp_U = new createjs.Text(qp_N.toString(), "bold 40px Arial", "#ff1e50");
				qp_U.stroke = "white";
				qp_U.textBaseline = "middle";
				qp_U.x = 570;
				qp_U.y = 40;
				qipaStage.stage.addChild(qp_U);
				qp_V = setInterval(function () {
						0 < qp_N && (qp_N--, qp_U.text = qp_N.toString());
						0 == qp_N && qp_W()
					}, 1E3);
				qp_X();
				qipaStage.stage.removeChild(this)
			});
			qipaStage.stage.addChild(a);
			qipaStage.stage.removeChild(this)
		});
		qipaStage.stage.addChild(a)
	},
	c = new createjs.Container;
	qipaStage.stage.addChild(c);
	a = new createjs.Shape;
	a.graphics.f("#e8fdea").r(0, 0, 640, 960).ef();
	c.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("banner"));
	c.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("help"));
	a.y = 315;
	c.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("discription"));
	a.x = 15;
	a.y = 675;
	c.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("replaybtn"));
	a.regX = 90;
	a.regY = 50;
	a.x = 320;
	a.y = 850;
	a.on("mousedown", function (a) {
		IS_TOUCH && a.nativeEvent instanceof MouseEvent || (e(), qipaStage.stage.removeChild(c))
	});
	c.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("toplistbtn"));
	a.regX = 90;
	a.regY = 50;
	a.x = 455;
	a.y = 850;
	a.on("click", function (a) {
		//window.open("../lb.html?gid=" + GID)
		dp_Ranking();
	});
	//c.addChild(a);
	if(!IS_ANDROID){
	   //createjs.Sound.registMySound("silenttail", 2.8);
	   if(!createjs.Sound.hasOwnProperty('registMySound')){
	   		return
	   }
	   createjs.Sound.registMySound("link", 2);
	   createjs.Sound.registMySound("unlink", 0);
	}
	qipaApp.onGameStarted();
	qp_Y()
}
function qp_Z(a) {
	qp_T.text = qipaApp.score.toString();
	a = new createjs.Shape;
	a.graphics.f("#fff").r(0, 0, 640, 960).ef();
	a.x = 0;
	a.y = 0;
	a.alpha = 1;
	createjs.Tween.get(a).to({
		alpha : 0.8
	}, 200).to({
		alpha : 0.8
	}, 800).to({
		alpha : 0
	}, 200).call(function () {
		qipaStage.stage.removeChild(this)
	});
	qipaStage.stage.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("bounus"));
	a.regX = 230;
	a.regY = 100;
	a.x = -230;
	a.y = 480;
	a.alpha = 0;
	createjs.Tween.get(a).to({
		x : 320,
		alpha : 1
	}, 200).to({
		x : 320
	}, 600).to({
		x : 870,
		alpha : 0
	}, 200).call(function () {
		qp_f ==
		qp_g && qp_X();
		qipaStage.stage.removeChild(this)
	});
	qipaStage.stage.addChild(a)
}
function qp_ba(a) {
	qp_j.removeAllChildren();
	qp_i.qp_bb();
	!0 == a ? (qp_a = 1, qipaApp.score = 0, qp_T.text = qipaApp.score.toString(), qp_bc = qp_M - 1, qp_V = setInterval(function () {
				0 < qp_N && (qp_N--, qp_U.text = qp_N.toString());
				0 == qp_N && qp_W()
			}, 1E3), qp_X()) : (qp_Z(qp_a), qp_a++)
}
function qp_W() {

	LBShare.updateData({          //修改分享文案
	    desc: "【喵喵瑜伽】：我塞进去了" + qipaApp.score + "只猫咪，战胜了" + a + "%的玩家。不服来战！"
	});
	LBShare.statScore(qipaApp.score)      //上报游戏结果

	qp_f = qp_h;
	clearInterval(qp_V);
	qipaStage.stage.removeChild(qp_l);
	qp_l = new createjs.Container;
	qp_l.on("mousedown", function (a) {});
	qipaStage.stage.addChild(qp_l);
	var a = new createjs.Shape;
	a.graphics.f("#fff").r(0, 0, W, H).ef();
	a.x = 0;
	a.y = 0;
	a.alpha = 0.9;
	qp_l.addChild(a);
	var e = new createjs.Bitmap(qipaStage.queue.getResult("star3"));
	e.regX = 30;
	e.regY = 30;
	e.x = 320;
	e.y = 480;
	e.alpha = 0;
	createjs.Tween.get(e).to({
		x : 670,
		rotation : 360
	}, 800);
	createjs.Tween.get(e).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(e)
	});
	qp_l.addChild(e);
	var c = new createjs.Bitmap(qipaStage.queue.getResult("star3"));
	c.regX = 30;
	c.regY = 30;
	c.x = 320;
	c.y = 480;
	c.alpha = 0;
	createjs.Tween.get(c).to({
		x : -30,
		rotation : 360
	}, 800);
	createjs.Tween.get(c).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(c)
	});
	qp_l.addChild(c);
	var b = new createjs.Bitmap(qipaStage.queue.getResult("star3"));
	b.regX = 30;
	b.regY = 30;
	b.x = 320;
	b.y = 480;
	b.alpha = 0;
	createjs.Tween.get(b).to({
		y : 130,
		rotation : 360
	}, 800);
	createjs.Tween.get(b).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	},
		400).call(function () {
		qp_l.removeChild(b)
	});
	qp_l.addChild(b);
	var d = new createjs.Bitmap(qipaStage.queue.getResult("star3"));
	d.regX = 30;
	d.regY = 30;
	d.x = 320;
	d.y = 480;
	d.alpha = 0;
	createjs.Tween.get(d).to({
		y : 830,
		rotation : 360
	}, 800);
	createjs.Tween.get(d).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(d)
	});
	qp_l.addChild(d);
	var f = new createjs.Bitmap(qipaStage.queue.getResult("star2"));
	f.regX = 62;
	f.regY = 60;
	f.x = 320;
	f.y = 480;
	f.alpha = 0;
	createjs.Tween.get(f).to({
		x : 120,
		y : 280,
		rotation : 360
	}, 800);
	createjs.Tween.get(f).to({
		alpha : 1
	},
		400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(f)
	});
	qp_l.addChild(f);
	var g = new createjs.Bitmap(qipaStage.queue.getResult("star2"));
	g.regX = 62;
	g.regY = 60;
	g.x = 320;
	g.y = 480;
	g.alpha = 0;
	createjs.Tween.get(g).to({
		x : 520,
		y : 280,
		rotation : 360
	}, 800);
	createjs.Tween.get(g).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(g)
	});
	qp_l.addChild(g);
	var l = new createjs.Bitmap(qipaStage.queue.getResult("star2"));
	l.regX = 62;
	l.regY = 60;
	l.x = 320;
	l.y = 480;
	l.alpha = 0;
	createjs.Tween.get(l).to({
		x : 120,
		y : 680,
		rotation : 360
	}, 800);
	createjs.Tween.get(l).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(l)
	});
	qp_l.addChild(l);
	var k = new createjs.Bitmap(qipaStage.queue.getResult("star2"));
	k.regX = 62;
	k.regY = 60;
	k.x = 320;
	k.y = 480;
	k.alpha = 0;
	createjs.Tween.get(k).to({
		x : 520,
		y : 680,
		rotation : 360
	}, 800);
	createjs.Tween.get(k).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(k)
	});
	qp_l.addChild(k);
	var h = new createjs.Bitmap(qipaStage.queue.getResult("star1"));
	h.regX = 69;
	h.regY = 67;
	h.x = 320;
	h.y =
		480;
	createjs.Tween.get(h).to({
		rotation : 360
	}, 800);
	createjs.Tween.get(h).to({
		alpha : 1
	}, 400).to({
		alpha : 0
	}, 400).call(function () {
		qp_l.removeChild(h)
	});
	qp_l.addChild(h);
	a = new createjs.Bitmap(qipaStage.queue.getResult("fcwmlogl"));
	a.regX = 195;
	a.regY = 33;
	a.x = 320;
	a.y = 185;
	qp_l.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("curscore"));
	a.x = 140;
	a.y = 260;
	qp_l.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("bestscore"));
	a.x = 140;
	a.y = 380;
	//qp_l.addChild(a);
	a = new createjs.Text(qipaApp.score.toString(),
			"bold 48px Arial", "#ff1e50");
	a.textAlign = "right";
	a.stroke = "white";
	a.textBaseline = "middle";
	a.x = 500;
	a.y = 300;
	qp_l.addChild(a);
	a = new createjs.Text(qipaApp.best.toString(), "bold 48px Arial", "#ff1e50");
	a.textAlign = "right";
	a.stroke = "white";
	a.textBaseline = "middle";
	a.x = 500;
	a.y = 410;
	//qp_l.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("replaybtn"));
	a.regX = 90;
	a.regY = 50;
	a.x = 320;
	a.y = 560;
	a.on("mousedown", function (a) {
		IS_TOUCH && a.nativeEvent instanceof MouseEvent || (qp_f = qp_g, qp_N = qp_M, qp_U.text = qp_N, qipaStage.stage.removeChild(qp_l),
			qp_ba(!0), qipaApp.onGameStarted())
	});
	qp_l.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("toplistbtn"));
	a.regX = 90;
	a.regY = 50;
	a.x = 455;
	a.y = 560;
	a.on("click", function (a) {
		//window.open("../lb.html?gid=" + GID)
		dp_Ranking();
	});
	// qp_l.addChild(a);
	a = new createjs.Bitmap(qipaStage.queue.getResult("lowkeysharebtn"));
	a.regX = 125;
	a.regY = 42;
	a.x = 320;
	a.y = 690;
	a.on("click", function (a) {
		LBShare.callShare();
	});
	qp_l.addChild(a);	
	qipaApp.onGameOver();
	qp_Y();


}
function qp_bd(a, e) {
	qp_i.drawmapmatrix[qp_be(a.i, a.j)] = qp_m
}
function qp_X() {
	qp_bf();
	qp_S();
	var a,
	e = !1;
	qp_k.on("mousedown", function (c) {
		if (!(IS_TOUCH && c.nativeEvent instanceof MouseEvent) && (c = new Qp_bg(c.localX, c.localY), c = qp_bh(c), qp_i.drawmapmatrix[qp_be(c.i, c.j)].type == qp_n && (a = qp_bi(qp_i.drawmapmatrix[qp_be(c.i, c.j)].color), qp_i.drawmapmatrix[qp_be(c.i, c.j)].type = qp_o, qp_bj(a), a.push(c), e = !0), 240 < qp_i.drawmapmatrix[qp_be(c.i, c.j)].type)) {
			
			if(!IS_ANDROID) createjs.Sound.play("unlink", !0);
			for (var b = !0, d = 0; 5 > d; d++) {
				for (var f = 0, g = 0; 25 > g; g++)
					qp_i.drawmapmatrix[g].type == qp_n &&
					qp_i.drawmapmatrix[g].color == d && f++;
				if (1 == f) {
					b = !1;
					break
				}
			}
			!0 == b && (qipaApp.score -= qp_b, qp_T.text = qipaApp.score);
			qp_bk(qp_i.drawmapmatrix[qp_be(c.i, c.j)].color);
			qp_bj()
		}
	}, qp_k);
	qp_k.on("pressmove", function (c) {
		if (e) {
			var b = a[a.length - 1],
			d = a[a.length - 2];
			c = new Qp_bg(c.localX, c.localY);
			c = qp_bh(c);
			var f = 0;
			if (!1 != qp_bl(b, c) && (b.i != c.i || b.j != c.j)) {
				if (qp_i.drawmapmatrix[qp_be(c.i, c.j)] != qp_m) {
					var g = 0,
					l = a[0],
					k = qp_i.drawmapmatrix[qp_be(l.i, l.j)].color,
					h = qp_i.drawmapmatrix[qp_be(c.i, c.j)].color;
					if (k != h)
						return;
					qp_D++;
					for (var m = !1, n = 0; n < a.length - 3; n++) {
						var p = a[n];
						if (p.i == c.i && p.j == c.j) {
							m = !0;
							break
						}
					}
					if (m) {
						b = a.length;
						for (d = 0; d < b; d++)
							f = a.pop(), qp_bd(f, h);
						qp_bd(c, h);
						qp_i.drawmapmatrix[qp_be(l.i, l.j)] = {
							color : k,
							type : qp_n
						};
						qp_bj(a);
						return
					}
					if (qp_i.drawmapmatrix[qp_be(c.i, c.j)].type == qp_n) {
					
						if(!IS_ANDROID) createjs.Sound.play("link", !0);
						qipaApp.score += qp_b;
						qp_T.text = qipaApp.score.toString();
						e = !1;
						b.j == c.j - 1 && (g = qp_A);
						b.j == c.j + 1 && (g = qp_C);
						b.i == c.i + 1 && (g = qp_B);
						b.i == c.i - 1 && (g = qp_z);
						if (qp_i.drawmapmatrix[qp_be(b.i, b.j)].type == qp_o)
							switch (g) {
							case qp_z:
								f =
									qp_v;
								break;
							case qp_A:
								f = qp_w;
								break;
							case qp_B:
								f = qp_x;
								break;
							case qp_C:
								f = qp_y
							}
						else
							d.i + 1 == c.i && d.j + 1 == c.j && d.i + 1 == b.i && d.j == b.j && (f = qp_s), c.i + 1 == d.i && c.j + 1 == d.j && b.i + 1 == d.i && b.j == d.j && (f = qp_t), d.i + 1 == c.i && d.j + 1 == c.j && d.i == b.i && d.j + 1 == b.j && (f = qp_t), c.i + 1 == d.i && c.j + 1 == d.j && b.i == d.i && b.j + 1 == d.j && (f = qp_s), d.i + 1 == c.i && d.j - 1 == c.j && d.i == b.i && d.j - 1 == b.j && (f = qp_u), c.i + 1 == d.i && c.j - 1 == d.j && b.i == d.i && b.j - 1 == d.j && (f = qp_r), d.i + 1 == c.i && d.j - 1 == c.j && d.i + 1 == b.i && d.j == b.j && (f = qp_r), c.i + 1 == d.i && c.j - 1 == d.j && b.i + 1 == d.i && b.j ==
							d.j && (f = qp_u), d.i == b.i && d.i == c.i && d.j + 1 == b.j && d.j + 2 == c.j && (f = qp_q), d.i == b.i && d.i == c.i && d.j - 1 == b.j && d.j - 2 == c.j && (f = qp_q), d.j == b.j && d.j == c.j && d.i + 1 == b.i && d.i + 2 == c.i && (f = qp_p), d.j == b.j && d.j == c.j && d.i - 1 == b.i && d.i - 2 == c.i && (f = qp_p);
						0 == f && console.log("warning type error");
						qp_i.drawmapmatrix[qp_be(b.i, b.j)] = {
							color : k,
							type : f
						};
						qp_i.drawmapmatrix[qp_be(c.i, c.j)] = {
							color : k,
							type : g
						};
						a.push(c)
					} else
						l = a.pop(), m = a[a.length - 2], c.j == m.j + 1 && (g = qp_A), c.j == m.j - 1 && (g = qp_C), c.i == m.i - 1 && (g = qp_B), c.i == m.i + 1 && (g = qp_z), qp_i.drawmapmatrix[qp_be(c.i,
								c.j)] = {
							color : k,
							type : g
						},
					qp_bd(l, h);
					qp_bj(a)
				}
				if (qp_i.drawmapmatrix[qp_be(c.i, c.j)] == qp_m) {
					k = qp_i.drawmapmatrix[qp_be(a[0].i, a[0].j)].color;
					g = 0;
					b.j == c.j - 1 && (g = qp_A);
					b.j == c.j + 1 && (g = qp_C);
					b.i == c.i + 1 && (g = qp_B);
					b.i == c.i - 1 && (g = qp_z);
					if (qp_i.drawmapmatrix[qp_be(b.i, b.j)].type == qp_o)
						switch (g) {
						case qp_z:
							f = qp_v;
							break;
						case qp_A:
							f = qp_w;
							break;
						case qp_B:
							f = qp_x;
							break;
						case qp_C:
							f = qp_y
						}
					else
						d.i + 1 == c.i && d.j + 1 == c.j && d.i + 1 == b.i && d.j == b.j && (f = qp_s), c.i + 1 == d.i && c.j + 1 == d.j && b.i + 1 == d.i && b.j == d.j && (f = qp_t), d.i + 1 == c.i && d.j +
						1 == c.j && d.i == b.i && d.j + 1 == b.j && (f = qp_t), c.i + 1 == d.i && c.j + 1 == d.j && b.i == d.i && b.j + 1 == d.j && (f = qp_s), d.i + 1 == c.i && d.j - 1 == c.j && d.i == b.i && d.j - 1 == b.j && (f = qp_u), c.i + 1 == d.i && c.j - 1 == d.j && b.i == d.i && b.j - 1 == d.j && (f = qp_r), d.i + 1 == c.i && d.j - 1 == c.j && d.i + 1 == b.i && d.j == b.j && (f = qp_r), c.i + 1 == d.i && c.j - 1 == d.j && b.i + 1 == d.i && b.j == d.j && (f = qp_u), d.i == b.i && d.i == c.i && d.j + 1 == b.j && d.j + 2 == c.j && (f = qp_q), d.i == b.i && d.i == c.i && d.j - 1 == b.j && d.j - 2 == c.j && (f = qp_q), d.j == b.j && d.j == c.j && d.i + 1 == b.i && d.i + 2 == c.i && (f = qp_p), d.j == b.j && d.j == c.j && d.i - 1 == b.i &&
						d.i - 2 == c.i && (f = qp_p);
					0 == f && console.log("warning type error");
					qp_i.drawmapmatrix[qp_be(b.i, b.j)] = {
						color : k,
						type : f
					};
					qp_i.drawmapmatrix[qp_be(c.i, c.j)] = {
						color : k,
						type : g
					};
					a.push(c)
				}
				qp_bj(a)
			}
		}
	}, qp_k);
	qp_k.on("pressup", function (c) {
		e = !1;
		void 0 != a && null != a && 0 != a.length && (0 <= qp_i.mapmatrix[qp_be(a[a.length - 1].i, a[a.length - 1].j)] && (qp_bk(qp_i.drawmapmatrix[qp_be(a[a.length - 1].i, a[a.length - 1].j)].color), qp_bj(a)), 1 == a.length && (qp_i.drawmapmatrix[qp_be(a[0].i, a[0].j)].type = qp_n, qp_bj(a)), qp_bn() && qp_ba(!1))
	}, qp_k)
}
function qp_R() {
	var a = new createjs.Bitmap(qipaStage.queue.getResult("bg"));
	qipaStage.stage.addChild(a)
}
function qp_S() {
	qipaStage.stage.removeChild(qp_k);
	qp_k = new createjs.Shape;
	qp_k.graphics.f("#C0C0C0").r(0, 0, 640, 960);
	qp_k.alpha = 0.05;
	qipaStage.stage.addChild(qp_k)
}
function qp_bf() {
	qipaStage.stage.removeChild(qp_j);
	qp_j = new createjs.Container;
	qipaStage.stage.addChild(qp_j);
	for (var a = 0; a < qp_i.drawmapmatrix.length; a++) {
		var e = qp_i.drawmapmatrix[a];
		e.type == qp_n && (qp_bo(qp_bp(a)), e = qp_bq(e.type, e.color, qp_bp(a)), qp_j.addChild(e))
	}
}
function qp_bj(a) {
	qp_j.removeAllChildren();
	for (var e = 0; 25 > e; e++)
		0 > qp_i.mapmatrix[e] && (a = qp_i.drawmapmatrix[e], a = qp_bq(a.type, a.color, qp_bp(e)), qp_j.addChild(a));
	for (e = 1; 5 >= e; e++) {
		var c = qp_i.colorlinearray[e];
		if (void 0 != c && null != c)
			for (var b = 0; b < c.length; b++) {
				var d = c[b];
				qp_i.drawmapmatrix[qp_be(d.i, d.j)] == qp_m ? console.log("color:" + e + " link:" + d.i + "," + d.j) : (a = qp_i.drawmapmatrix[qp_be(d.i, d.j)], a = qp_bq(a.type, a.color, d), qp_j.addChild(a))
			}
	}
}
function qp_bq(a, e, c) {
	var b = null;
	switch (a) {
	case qp_r:
		b = "cat" + e.toString() + "_conner";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		break;
	case qp_s:
		b = "cat" + e.toString() + "_conner";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 90;
		break;
	case qp_t:
		b = "cat" + e.toString() + "_conner";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY =
			b.getBounds().height / 2;
		b.rotation = 270;
		break;
	case qp_u:
		b = "cat" + e.toString() + "_conner";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 180;
		break;
	case qp_v:
		b = "cat" + e.toString() + "_head";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		break;
	case qp_w:
		b = "cat" + e.toString() + "_head";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height /
			2;
		b.rotation = 270;
		break;
	case qp_x:
		b = "cat" + e.toString() + "_head";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 180;
		break;
	case qp_y:
		b = "cat" + e.toString() + "_head";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 90;
		break;
	case qp_z:
		b = "cat" + e.toString() + "_tail";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height /
			2;
		break;
	case qp_A:
		b = "cat" + e.toString() + "_tail";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 270;
		break;
	case qp_B:
		b = "cat" + e.toString() + "_tail";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 180;
		break;
	case qp_C:
		b = "cat" + e.toString() + "_tail";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation =
			90;
		break;
	case qp_p:
		b = "cat" + e.toString() + "_body";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		break;
	case qp_q:
		b = "cat" + e.toString() + "_body";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		b.rotation = 90;
		break;
	case qp_o:
		b = "cat" + e.toString() + "_head";
		b = new createjs.Bitmap(qipaStage.queue.getResult(b));
		b.regX = b.getBounds().width / 2;
		b.regY = b.getBounds().height / 2;
		break;
	case qp_n:
		b =
			"cat" + e.toString() + "_startpoint",
		b = new createjs.Bitmap(qipaStage.queue.getResult(b)),
		b.regX = b.getBounds().width / 2,
		b.regY = b.getBounds().height / 2
	}
	c = qp_bo(c);
	null == b && console.log("type:" + a + " color:" + e);
	b.x = c.x;
	b.y = c.y;
	return b
}
var Qp_Q = function () {
	this.N = 5;
	this.CNT = 25;
	this.mapmatrix = this.qp_br();
	this.drawmapmatrix = [];
	for (var a = 0; 25 > a; a++)
		if (0 > this.mapmatrix[a]) {
			var e = Math.abs(this.mapmatrix[a]);
			this.drawmapmatrix.push({
				color : e,
				type : qp_n
			})
		} else
			this.drawmapmatrix.push(qp_m);
	this.colorlinearray = []
};
Qp_Q.prototype.qp_bb = function () {
	this.mapmatrix = this.qp_br();
	this.drawmapmatrix = [];
	for (var a = 0; 25 > a; a++)
		if (0 > this.mapmatrix[a]) {
			var e = Math.abs(this.mapmatrix[a]);
			this.drawmapmatrix.push({
				color : e,
				type : qp_n
			})
		} else
			this.drawmapmatrix.push(qp_m);
	this.colorlinearray = []
};
Qp_Q.prototype.qp_bs = function (a) {
	for (var e = 0; e < this.CNT; e++)
		a[e] = 0
};
Qp_Q.prototype.qp_bt = function (a, e) {
	for (var c = 0, b = 0; b < this.CNT; b++)
		if (0 == a[b]) {
			if (c == e)
				return b;
			c++
		}
	return -1
};
Qp_Q.prototype.qp_bu = function (a) {
	for (var e = 0, c = 0; c < this.CNT; c++)
		0 == a[c] && e++;
	return e
};
Qp_Q.prototype.qp_bv = function () {
	for (var a = [0, 1, 2, 3], e = 4; 0 < e; e--) {
		var c = Math.floor(Math.random() * (e - 1)),
		b = a[c];
		a[c] = a[e - 1];
		a[e - 1] = b
	}
	orders = [];
	for (e = 0; 4 > e; e++)
		switch (a[e]) {
		case 0:
			orders[e] = [-1, 0];
			break;
		case 1:
			orders[e] = [1, 0];
			break;
		case 2:
			orders[e] = [0, -1];
			break;
		case 3:
			orders[e] = [0, 1]
		}
	return orders
};
Qp_Q.prototype.qp_bw = function (a, e, c, b, d, f) {
	var g = Math.floor(e / this.N);
	e %= this.N;
	var l = g,
	k = e;
	e += b;
	var g = g + d,
	h = g * this.N + e;
	if (!(0 <= e && e < this.N && 0 <= g && g < this.N) || 0 != a[h])
		return !1;
	for (var m = g - 1; m <= g + 1; m++)
		for (var n = e - 1; n <= e + 1; n++)
			if (0 <= m && m < this.N && 0 <= n && n < this.N && n != k && m != l) {
				var p = m * this.N + n;
				if (a[p] == f || a[p] == -f)
					return !1
			}
	a[h] = 1 == c ? -f : f;
	c--;
	if (0 == c)
		return a;
	newMatrix = this.qp_bw(a.slice(0), h, c, b, d, f);
	if (!1 != newMatrix)
		return newMatrix;
	if (0 == b) {
		newMatrix = this.qp_bw(a.slice(0), h, c, -1, 0, f);
		if (!1 != newMatrix)
			return newMatrix;
		newMatrix = this.qp_bw(a.slice(0), h, c, 1, 0, f);
		if (!1 != newMatrix)
			return newMatrix
	}
	if (0 == d) {
		newMatrix = this.qp_bw(a.slice(0), h, c, 0, -1, f);
		if (!1 != newMatrix)
			return newMatrix;
		newMatrix = this.qp_bw(a.slice(0), h, c, 0, 1, f);
		if (!1 != newMatrix)
			return newMatrix
	}
	return !1
};
Qp_Q.prototype.qp_bx = function (a, e, c, b) {
	a[e] = -b;
	for (var d = this.qp_bv(), f = 0; 4 > f; f++) {
		var g = this.qp_bw(a.slice(0), e, c - 1, d[f][0], d[f][1], b);
		if (!1 != g)
			return g
	}
	return !1
};
Qp_Q.prototype.qp_by = function (a, e) {
	if (5 < e || 5 == e && 0 < c)
		return !1;
	var c = this.qp_bu(a);
	if (3 <= e && 0 == c)
		return a;
	if (3 > c)
		return !1;
	for (var b = 3; 0 < b--; ) {
		var d = Math.floor(Math.random() * c),
		d = this.qp_bt(a, d),
		f = 3 + Math.floor(8 * Math.random());
		f > c && (f = c);
		if (void 0 == a) {
			console.log("ahahahahahahahahahahhhhhhhhhhhhhhhh");
			break
		}
		d = this.qp_bx(a.slice(0), d, f, e + 1);
		if (!1 != d && (d = this.qp_by(d, e + 1), !1 != d))
			return d
	}
	return !1
};
Qp_Q.prototype.qp_br = function () {
	for (var a = [], e = 1E4; 0 < e-- && (a = [], this.qp_bs(a), a = this.qp_by(a, 0), !1 == a); );
	return a
};
var Qp_bz = function (a, e) {
	this.i = a;
	this.j = e
}, Qp_bg = function (a, e) {
	this.x = a;
	this.y = e
};
function qp_bp(a) {
	var e = Math.floor(a / 5);
	return new Qp_bz(e, a - 5 * e)
}
function qp_be(a, e) {
	return 5 * a + e
}
function qp_bo(a) {
	return new Qp_bg(qp_E + (a.j + 0.5) * qp_G + qp_I, qp_F + (a.i + 0.5) * qp_G + qp_I)
}
function qp_bh(a) {
	return a.x < qp_E && a.x > 640 - qp_E ? !1 : a.y < qp_F && a.y > 5 * qp_G ? !1 : new Qp_bz(Math.max(Math.min(Math.floor((a.y - qp_F) / qp_G), 4), 0), Math.max(0, Math.min(Math.floor((a.x - qp_E) / qp_G), 4)))
}
function qp_bA(a) {
	a = qp_bh(a);
	return qp_bo(a)
}
function qp_bl(a, e) {
	return void 0 == a || void 0 == e ? !1 : a.i == e.i && a.j == e.j - 1 || a.i == e.i && a.j == e.j + 1 || a.i == e.i - 1 && a.j == e.j || a.i == e.i + 1 && a.j == e.j ? !0 : !1
}
function qp_bi(a, e) {
	if (void 0 != qp_i.colorlinearray[a] && null != qp_i.colorlinearray[a] && 0 != qp_i.colorlinearray[a].length) {
		var c = qp_i.colorlinearray[a][0];
		qp_i.drawmapmatrix[qp_be(c.i, c.j)].type = qp_n;
		c = qp_i.colorlinearray[a][qp_i.colorlinearray[a].length - 1];
		qp_i.drawmapmatrix[qp_be(c.i, c.j)].type = qp_n;
		for (c = 1; c < qp_i.colorlinearray[a].length - 1; c++) {
			var b = qp_i.colorlinearray[a][c];
			qp_i.drawmapmatrix[qp_be(b.i, b.j)] = qp_m
		}
	}
	qp_i.colorlinearray[a] = [];
	qp_bk(a);
	return qp_i.colorlinearray[a]
}
function qp_bk(a) {
	for (var e = 0; 25 > e; e++)
		0 > qp_i.mapmatrix[e] && Math.abs(qp_i.mapmatrix[e]) == a ? qp_i.drawmapmatrix[e].type = qp_n : qp_i.drawmapmatrix[e].color == a && (qp_i.drawmapmatrix[e] = qp_m);
	qp_i.colorlinearray[a] = []
}
function qp_bn() {
	for (var a = 0; 25 > a; a++)
		if (qp_i.drawmapmatrix[a].type == qp_n)
			return !1;
	return !0
}
function qp_bB(a) {
	for (var e = a.length; 0 < e; e--) {
		var c = Math.floor(Math.random() * (e - 1)),
		b = a[c];
		a[c] = a[e - 1];
		a[e - 1] = b
	}
}
function qp_bC(a) {
	for (var e = a.length, c = [], b = 0; b < e; b++)
		c.push(b);
	for (b = e; 0 < b; b--) {
		var d = Math.floor(Math.random() * (b - 1)),
		f = c[d];
		c[d] = c[b - 1];
		c[b - 1] = f
	}
	d = [];
	for (b = 0; b < e; b++)
		d.push(a[c[b]]);
	return d
}
function qp_bD(a, e) {
	for (var c = qp_bC(a), b = [], d = 0; d < Math.min(e, a.length); d++)
		b.push(c[d]);
	return b
}
function qp_Y() {

	qipaShare.title = "【喵喵瑜伽】，看你能塞进几只猫咪？";
	if (0 == qipaApp.score)
		qipaShare.desc = qipaShare.title;
	else {

		var a = parseInt(Math.sqrt(1E4 * qipaApp.score / 180));
		99 < a && (a = "99.9");

		LBShare.updateData({          //修改分享文案
	    desc: "【喵喵瑜伽】：我塞进去了" + qipaApp.score + "只猫咪，战胜了" + a + "%的玩家。不服来战！"
		});
		LBShare.statScore(qipaApp.score)      //上报游戏结果

	}
}
var _cfg = {
	startFunc : qp_P,
	img : {
		path : "img/",
		manifest : [{
				src : "discription.png",
				id : "discription"
			}, {
				src : "banner.jpg",
				id : "banner"
			}, {
				src : "help.jpg",
				id : "help"
			}, {
				src : "bounus.png",
				id : "bounus"
			}, {
				src : "clock.png",
				id : "clock"
			}, {
				src : "score.png",
				id : "score"
			}, {
				src : "curscore.png",
				id : "curscore"
			}, {
				src : "bestscore.png",
				id : "bestscore"
			}, {
				src : "fcwmlogl.png",
				id : "fcwmlogl"
			}, {
				src : "lowkeysharebtn.png",
				id : "lowkeysharebtn"
			}, {
				src : "toplistbtn.png",
				id : "toplistbtn"
			}, {
				src : "replaybtn.png",
				id : "replaybtn"
			}, {
				src : "star1.png",
				id : "star1"
			}, {
				src : "star2.png",
				id : "star2"
			}, {
				src : "star3.png",
				id : "star3"
			}, {
				src : "go.png",
				id : "go"
			}, {
				src : "ready.png",
				id : "ready"
			}, {
				src : "bg.jpg",
				id : "bg"
			}, {
				src : "cat1_body.png",
				id : "cat1_body"
			}, {
				src : "cat1_conner.png",
				id : "cat1_conner"
			}, {
				src : "cat1_head.png",
				id : "cat1_head"
			}, {
				src : "cat1_tail.png",
				id : "cat1_tail"
			}, {
				src : "cat1_startpoint.png",
				id : "cat1_startpoint"
			}, {
				src : "cat2_body.png",
				id : "cat2_body"
			}, {
				src : "cat2_conner.png",
				id : "cat2_conner"
			}, {
				src : "cat2_head.png",
				id : "cat2_head"
			}, {
				src : "cat2_tail.png",
				id : "cat2_tail"
			}, {
				src : "cat2_startpoint.png",
				id : "cat2_startpoint"
			}, {
				src : "cat3_body.png",
				id : "cat3_body"
			}, {
				src : "cat3_conner.png",
				id : "cat3_conner"
			}, {
				src : "cat3_head.png",
				id : "cat3_head"
			}, {
				src : "cat3_tail.png",
				id : "cat3_tail"
			}, {
				src : "cat3_startpoint.png",
				id : "cat3_startpoint"
			}, {
				src : "cat4_body.png",
				id : "cat4_body"
			}, {
				src : "cat4_conner.png",
				id : "cat4_conner"
			}, {
				src : "cat4_head.png",
				id : "cat4_head"
			}, {
				src : "cat4_tail.png",
				id : "cat4_tail"
			}, {
				src : "cat4_startpoint.png",
				id : "cat4_startpoint"
			}, {
				src : "cat5_body.png",
				id : "cat5_body"
			}, {
				src : "cat5_conner.png",
				id : "cat5_conner"
			}, {
				src : "cat5_head.png",
				id : "cat5_head"
			}, {
				src : "cat5_tail.png",
				id : "cat5_tail"
			}, {
				src : "cat5_startpoint.png",
				id : "cat5_startpoint"
			}
		]
	},
	audio : {
		path : "audio/",
		manifest : [{
				src : "link.mp3",
				id : "link"
			}, {
				src : "unlink.mp3",
				id : "unlink"
			}
		]
	}
};
qipaStage.init(_cfg);
