//////////////////////////////////////////////
// Obfuscated by Javascript Obfuscator 4.3  //
// http://javascript-source.com             //
//////////////////////////////////////////////
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
OverView = (function(c) {
	function a() {
		c.call(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		a._instance = this;
	}
	__extends(a, c);
	a.instance = function() {
		null == a._instance && (a._instance = new a);
		return a._instance;
	};
	a.prototype.onAddToStage = function(b) {
		if (null == this.part1) {
			this.part1 = new egret.DisplayObjectContainer;
			this.part2 = new egret.DisplayObjectContainer;
			this.bg = new egret.Bitmap;
			this.bg.texture = RES.getRes("infoBg");
			this.bg.x = this.bg.width / 2;
			this.bg.anchorX = 0.5;
			this.bg.scaleX = -1;
			this.part2.addChild(this.bg);
			this.bg = new egret.Bitmap;
			this.bg.texture = RES.getRes("overBg");
			this.addChild(this.part2);
			this.addChild(this.part1);
			this.part1.addChild(this.bg);
			b = new egret.Bitmap;
			b.name = "restartBtn";
			b.texture = RES.getRes("restartBtn");
			b.anchorX = b.anchorY = 0.5;
			b.scaleX = b.scaleY = 0.8;
			b.x = 1.3 * b.width / 2 + 10;
			b.y = this.bg.height / 2 + 1.6 * b.height;
			b.touchEnabled = true;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			b.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
			b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
            this.part1.addChild(b);
            //add html5yx
            _hehe = new egret.Bitmap;
			_hehe.name = "shareBtn";
			_hehe.texture = RES.getRes("shareBtn");
			_hehe.anchorX = _hehe.anchorY = 0.5;
			_hehe.scaleX = _hehe.scaleY = 0.8;
			_hehe.x = 2.95 * _hehe.width / 2 + 10;
			_hehe.y = this.bg.height / 2 + 1.6 * _hehe.height;
			_hehe.touchEnabled = true;
			_hehe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			_hehe.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
			_hehe.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
            this.part1.addChild(_hehe);            
            //end add html5yx
			b = new egret.Bitmap;
			b.name = "moreBtn";
			b.texture = RES.getRes("moreBtn");
			b.anchorX = b.anchorY = 0.5;
			b.scaleX = b.scaleY = 0.8;
			b.x = 2.4 * b.width;
			b.y = this.bg.height / 2 + 1.6 * b.height;
			b.touchEnabled = true;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			b.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
			b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
			this.part1.addChild(b);
			b = new egret.Bitmap;
			b.name = "infoBtn";
			b.texture = RES.getRes("infoBtn");
			b.alpha = 0;
			b.scaleX = b.scaleY = 0.7;
			b.x = this.bg.width - b.width - 15;
			b.y = -3;
			b.touchEnabled = true;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			this.part1.addChild(b);
			b = new egret.Bitmap;
			b.name = "backBtn";
			b.texture = RES.getRes("infoBtn");
			b.alpha = 0;
			b.scaleX = b.scaleY = 0.9;
			b.x = this.bg.width - b.width - 23;
			b.y = -6;
			b.touchEnabled = true;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			this.part2.addChild(b);
			b = RES.getRes("orange_font_fnt");
			var d = new egret.BitmapText;
			d.spriteSheet = b;
			d.text = "0";
			d.y = GameData.scoreBoardTop2 + GameData.scoreBoardH / 2 - 3;
			d.anchorX = 0.5;
			d.anchorY = 0.5;
			d.x = this.bg.width / 2;
			this.part1.addChild(d);
			this.scoreTxt = d;
			b = RES.getRes("yellow_font_fnt");
			d = new egret.BitmapText;
			d.spriteSheet = b;
			d.text = "110";
			d.y = GameData.scoreBoardTop2 + GameData.scoreBoardH / 2 + 95;
			d.x = this.bg.width - 120;
			d.anchorY = 0.5;
			this.comboTxt = d;
			this.part1.addChild(d);
			b = new egret.Bitmap;
			b.texture = RES.getRes("new");
			b.anchorX = 0.5;
			b.anchorY = 0.5;
			b.x = this.bg.width - b.width;
			b.y = this.scoreTxt.y;
			this.part1.addChild(b);
			this.newFlag = b;
			b = RES.getRes("gray_font_fnt");
			d = new egret.BitmapText;
			d.spriteSheet = b;
			d.text = "012324";
			d.y = GameData.scoreBoardTop2 + GameData.scoreBoardH / 2 + 40;
			d.anchorY = 0.5;
			d.x = this.bg.width / 2 + 6;
			this.part1.addChild(d);
			this.bestScoreTxt = d;
			this.part1.x = GameData.GameWidth / 2;
			this.part1.y = GameData.GameHeight / 2 - this.bg.height / 2 - 60 * GameData.scale;
			this.part2.x = GameData.GameWidth / 2;
			this.part2.y = GameData.GameHeight / 2 - this.bg.height / 2 - 60 * GameData.scale;
		}
		this.part1.anchorX = 0.5;
		this.part2.anchorX = 0.5;
		this.part1.scaleX = 1;
		this.part2.scaleX = 0;
		this.scoreTxt.text = GameData.score + "";
		b = GameData.bestScore;
		GameData.updateScore();
		this.newFlag.visible = b < GameData.bestScore ? true: false;
		this.bestScoreTxt.text = b + "";
		this.comboTxt.text = GameData.bestCombo2 + "";
		a.isShowing = true;
		GameData.shareFun && GameData.shareFun();
		dp_submitScore(GameData.score);
	};
	a.prototype.touchHandler = function(b) {
		var d = b.currentTarget;
		switch (b.type) {
		case egret.TouchEvent.TOUCH_BEGIN:
			d.scaleX = d.scaleY = 1;
			break;
		case egret.TouchEvent.TOUCH_END:
			d.scaleX = d.scaleY = 0.8;
			break;
		case egret.TouchEvent.TOUCH_TAP:
			if (SoundManager.instance().playSound("ui_click"), "restartBtn" == d.name) {
				this.parent.removeChild(this),
				PlayView.instance().restartGame(),
				a.isShowing = false;
			} else if ("shareBtn" != d.name) {
				if ("moreBtn" == d.name) {
					clickMore();
				} else if ("infoBtn" == d.name) {
					var c = this.part1,
					e = this.part2;
					egret.Tween.get(c, false).to({
						scaleX: 0
					},
					150).call(function() {
						egret.Tween.get(e, false).to({
							scaleX: 1
						},
						150);
					});
				} else {
					"backBtn" == d.name && (c = this.part1, e = this.part2, egret.Tween.get(e, false).to({
						scaleX: 0
					},
					150).call(function() {
						egret.Tween.get(c, false).to({
							scaleX: 1
						},
						150);
					}));
				}
			}else{
                //share btn click
                dp_share();
            }
		default:
			;
		}
	};
	a.isShowing = false;
	return a;
})(egret.DisplayObjectContainer);
OverView.prototype.__class__ = "OverView";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
HighComboMc = (function(c) {
	function a() {
		c.call(this);
		this.bg = new egret.Bitmap;
		this.bg.anchorX = 0.5;
		this.bg.anchorY = 0.5;
		this.bg.texture = RES.getRes("highCombo");
		this.addChild(this.bg);
		var b = RES.getRes("111_fnt"),
		d = new egret.BitmapText;
		d.spriteSheet = b;
		d.text = "36";
		d.scaleX = 0.7;
		d.scaleY = 0.7;
		d.y = 30;
		d.anchorX = 0.5;
		d.anchorY = 0.5;
		d.x = 0;
		this.combTxt = d;
		this.addChild(this.combTxt);
		a.currPos = 0;
		a.bottom = 0;
		a.top = 0;
	}
	__extends(a, c);
	a.prototype.play = function(b) {
		this.combTxt.text = b + "";
	};
	return a;
})(egret.DisplayObjectContainer);
HighComboMc.prototype.__class__ = "HighComboMc";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
NewerHandMc = (function(c) {
	function a() {
		var b = RES.getRes("newerHandMc_json"),
		a = RES.getRes("newerHandMc_png");
		c.call(this, b, a);
		this.frameRate = 24;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(b) {
		this.stop();
		GameData.paused = false;
	};
	a.prototype.playAnimate = function() {
		this.gotoAndPlay("\u624B\u52BF\u52A8\u753B");
	};
	return a;
})(egret.MovieClip);
NewerHandMc.prototype.__class__ = "NewerHandMc";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
ReadyGoMc = (function(c) {
	function a() {
		var b = RES.getRes("readygo_json"),
		a = RES.getRes("readygo_png");
		c.call(this, b, a);
		this.frameRate = 24;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(b) {
		b = b.target;
		this.stop();
		b.parent && b.parent.removeChild(b);
		PlayView.instance().hideReadyGo();
	};
	a.prototype.playAnimate = function() {
		this.gotoAndPlay("ready");
	};
	return a;
})(egret.MovieClip);
ReadyGoMc.prototype.__class__ = "ReadyGoMc";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
PlayView = (function(c) {
	function a() {
		c.call(this);
		this.toAddDirtyArea = true;
		this.toAddDirtyAreaCount = 1;
		this.oldSocre = 0;
		this.bombBoxAddIconList = [];
		this.emptyBoxList = [];
		this.initedGrid = false;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		a._instance = this;
	}
	__extends(a, c);
	a.instance = function() {
		return a._instance;
	};
	a.prototype.showBoxAnimate = function(b) {
		this.boxLayer.alpha = 0;
		egret.Tween.get(this.boxLayer, {
			loop: false
		},
		null, true).to({
			alpha: 1
		},
		1000).call(function() {
			a.instance().showNewerDes(b);
		});
	};
	a.prototype.hideReadyGo = function() {
		GameData.ready = true;
	};
	a.prototype.showHighCombo = function() {
		null == this.highComboMc && (this.highComboMc = new HighComboMc, this.highComboMc.x = GameData.GameWidth / 2, this.highComboMc.y = GameData.GameHeight_2 / 2, HighComboMc.currPos = this.highComboMc.y, HighComboMc.top = this.highComboMc.y - 60, HighComboMc.bottom = this.highComboMc.y + 50);
		this.addChild(this.highComboMc);
		this.highComboMc.play(GameData.bestCombo);
		var b = this.highComboMc;
		b.visible = true;
		b.y = HighComboMc.bottom;
		var a = HighComboMc.top,
		c = HighComboMc.currPos;
		b.alpha = 0;
		egret.Tween.get(b, false, null, true).to({
			y: c,
			alpha: 1
		},
		500).call(function() {
			GameData.showBombtimerId = egret.setTimeout(function() {
				egret.Tween.get(b, false, null, true).to({
					y: a,
					alpha: 0
				},
				300).call(function() {
					b.visible = false;
					b.parent && b.parent.removeChild(b);
					GameData.isOver = false;
				});
			},
			b, 800);
		});
	};
	a.prototype.showReadyGo = function() {
		null == this.readyGoMc && (this.readyGoMc = new ReadyGoMc, this.readyGoMc.x = GameData.GameWidth / 4 - 20, this.readyGoMc.y = GameData.GameHeight_2 / 2);
		this.addChild(this.readyGoMc);
		this.readyGoMc.playAnimate();
		GameData.ready = false;
		SoundManager.instance().playSound("readygo");
	};
	a.prototype.showAd = function() {
		var b = document.getElementById("spn");
		b && (b.style.display = "block");
	};
	a.prototype.onAddToStage = function(b) {
		GameData.ready = false;
		SoundManager.instance().inPlaying = true;
		SoundManager.instance().playMusic();
		GameData.bestCombo2 = 0;
		GameData.isNewer ? (this.setgame(Config.newer_gk[0]), this.boxLayer.y = GameData.boxBoardTop_newer, this.showBoxAnimate(1)) : (this.setgame(Config.gk[0]), this.showAd(), this.initSoundBtn());
		egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
		egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
	};
	a.prototype.onActivate = function(b) {
		SoundManager.instance().playMusic();
	};
	a.prototype.onDeActivate = function(b) {
		SoundManager.instance().stopMusic();
	};
	a.prototype.setgame = function(b) {
		this.bombMc = new BombMc;
		BoxMapHelper.init(b.xs, b.ys);
		this.initBgGrid(b);
		this.initGame(b);
		this.initBoard();
		this.initBtn();
		this.boxLayer.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	};
	a.prototype.initBtn = function() {};
	a.prototype.resetGame = function(b, d) {
		this.emptyBoxList = [];
		var c = Config.ui,
		e = 10 * c.jx * GameData.scale,
		h = GameData.boxBgW;
		Math.round(h * c.bi);
		var c = h + c.jx,
		h = b.xs,
		l = b.ys,
		n = b.arr,
		f = null,
		k = h * l;
		if (false == d) {
			for (var f = [], g = 1; g <= n.length; g++) {
				for (var m = n[g - 1], q = 0; q < m; q++) {
					f.push(g);
				}
			}
			for (; f.length < k;) {
				f.push(0);
			}
		} else {
			f = b.arr;
		}
		n = true;
		null != this.boxMap ? (n = false) : (this.boxMap = []);
		for (k = 0; k < h; k++) {
			for (n && (this.boxMap[k] = [], m = new Box), g = 0; g < l; g++) {
				m = null;
				q = 0;
				q = d ? f[k][g] : this.getRandomBox(f);
				n && (m = new Box, this.boxMap[k][g] = m, m.data = new BoxData, this.boxLayer.addChild(m), m.touchEnabled = true, m.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this), BoxMapHelper.setBox(k, g, m), m.x = 2 + GameData.boxHW + e + g * c, m.y = GameData.boxHW + e + k * c + 4 * GameData.scale);
				var m = this.boxMap[k][g],
				r = m.data;
				r.type = q;
				0 != q && (m.texture = RES.getRes(q + "1"));
				r.i = k;
				r.j = g;
				this.addBox(m, !GameData.isNewer);
				0 == q && this.moveToEmptyBoxList(m);
			}
		}
		d ? (1 == GameData.newer_gk ? egret.setTimeout(this.showNewer, this, 100) : egret.setTimeout(this.showNewer, this, 1300), GameData.paused = true, GameData.ready = true) : (this.boxLayer.y = GameData.boxBoardTop, false == GameData.shwingBonus && egret.setTimeout(function() {
			a.instance().showReadyGo();
		},
		this, 1000), GameData.paused = false);
	};
	a.prototype.initGame = function(b) {
		this.boxLayer = new egret.DisplayObjectContainer;
		this.boxLayer.y = GameData.boxBoardTop;
		this.addChild(this.boxLayer);
		this.reset();
		this.resetGame(b, GameData.isNewer);
	};
	a.prototype.restartGame = function() {
		GameData.ready = false;
		GameData.bestCombo2 = 0;
		GameData.shwingBonus = false;
		this.reset();
		this.resetGame(Config.gk[0], GameData.isNewer);
		this.initGrid();
		false == GameData.isNewer && (this.scoreBoard.visible = true, this.initSoundBtn());
	};
	a.prototype.initSoundBtn = function() {
		if (null == this.soundBtn) {
			var b = new egret.Bitmap;
			b.texture = GameData.soundEnabled ? RES.getRes("soundBtn2") : RES.getRes("soundBtn1");
			b.name = "soundbtn";
			b.anchorX = b.anchorY = 0.5;
			b.touchEnabled = true;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler2, this);
			b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler2, this);
			b.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler2, this);
			b.y = 23 + b.height / 2;
			b.x = GameData.GameWidth - b.width / 2 - 10;
			this.scoreBoard.addChild(b);
			this.soundBtn = b;
		}
	};
	a.prototype.onEnterFrame = function(b) {
		b = this.bombBoxAddIconList.length;
		for (var a = GameData.speed,
		c = 0,
		e = 0,
		h = [], l = [], n = 0; n < b; n++) {
			var f = this.bombBoxAddIconList[n],
			k = null,
			k = null;
			switch (f.dir) {
			case AddIcon.TOP_DIR:
				f.y -= a;
				k = BoxMapHelper.getCol(f.boxData.j);
				for (c = f.boxData.i; 0 <= c; c--) {
					var g = k[c];
					if (g.y > f.y) {
						if (0 != g.data.type) {
							f.targetBox = g;
							h.push(f);
							break;
						} else {
							0 == c && g.y - GameData.boxHW / 2 > f.y && (f.targetBox = g, l.push(f));
						}
					}
				}
				break;
			case AddIcon.BOTTOM_DIR:
				f.y += a;
				k = BoxMapHelper.getCol(f.boxData.j);
				e = k.length;
				for (c = f.boxData.i; c < e; c++) {
					if (g = k[c], f.y > g.y) {
						if (0 != g.data.type) {
							f.targetBox = g;
							h.push(f);
							break;
						} else {
							c == e - 1 && f.y > g.y + GameData.boxHW / 2 && (f.targetBox = g, l.push(f));
						}
					}
				}
				break;
			case AddIcon.LEFT_DIR:
				f.x -= a;
				k = BoxMapHelper.getRow(f.boxData.i);
				for (c = f.boxData.j; 0 <= c; c--) {
					if (g = k[c], f.x < g.x) {
						if (0 != g.data.type) {
							f.targetBox = g;
							h.push(f);
							break;
						} else {
							0 == c && f.x < g.x - GameData.boxHW / 2 && (f.targetBox = g, l.push(f));
						}
					}
				}
				break;
			case AddIcon.RIGHT_DIR:
				for (f.x += a, k = BoxMapHelper.getRow(f.boxData.i), e = k.length, c = f.boxData.j; c < e; c++) {
					if (g = k[c], f.x > g.x) {
						if (0 != g.data.type) {
							f.targetBox = g;
							h.push(f);
							break;
						} else {
							c == e - 1 && f.x > g.x + GameData.boxHW / 2 && (f.targetBox = g, l.push(f));
						}
					}
				}
			default:
				;
			}
		}
		this.deleteAddIcon(h);
		this.onCrashAddIcon(l);
		this.updateScore();
		0 == this.bombBoxAddIconList.length && 0 == GameData.bombCount && false == GameData.comboEnd && this.comboOver();
	};
	a.prototype.onCleanup = function() {
		GameData.isNewer ? (GameData.newer_gk = 2, this.resetGame(Config.newer_gk[1], GameData.isNewer), this.showBoxAnimate(2)) : this.resetGame(Config.gk[1], GameData.isNewer);
	};
	a.prototype.comboOver = function() {
		GameData.isOver || (GameData.combo > GameData.bestCombo && (GameData.bestCombo = GameData.combo), GameData.combo > GameData.bestCombo2 && (GameData.bestCombo2 = GameData.combo), this.emptyBoxList.length == GameData.rows * GameData.cols ? (this.calScoreOnBonusEnd(), GameData.shwingBonus = true, this.showAnimate(true), this.onCleanup()) : (this.onComboEndAddBox(), this.calScoreOnComboEnd()), GameData.shareFun2 && GameData.shareFun2(), GameData.comboEnd = true);
	};
	a.prototype.showAnimate = function(b) {
		var a = GameData.combo;
		1 >= a && false == b || (null == this.animate1 && (this.animate1 = new Animate1, this.animate1.x = GameData.GameWidth / 2, this.animate1.y = GameData.GameHeight_3 / 2 + 25), this.addChild(this.animate1), b ? false == GameData.isNewer && (GameData.isOver = true, this.animate1.bonus()) : a >= Config.amazingNeed ? this.animate1.amazing() : a >= Config.greatNeed ? this.animate1.great() : a >= Config.goodNeed && this.animate1.good());
	};
	a.prototype.reset = function() {
		GameData.score = 0;
		GameData.combo = 0;
		GameData.bestCombo = 0;
		GameData.bombCount = 0;
		GameData.comboEnd = true;
		GameData.addCount = 2;
		GameData.isOver = false;
		this.P4 = Config.p4;
		this.P3 = Config.p3;
		this.P2 = Config.p2;
		this.bestScoreTxt && (this.bestScoreTxt.text = "Best " + GameData.bestScore);
	};
	a.prototype.updateScore = function() {
		this.oldSocre != GameData.score && (this.scoreTxt.text = GameData.score + "", this.oldSocre = GameData.score);
	};
	a.prototype.onCrashAddIcon = function(b) {
		for (var a = b.length,
		c = 0; c < a; c++) {
			var e = b[c];
			this.removeAddIcon(e, this.bombBoxAddIconList);
			var h = e.targetBox;
			this.boxLayer.removeChild(e);
			h.showCrash(e.dir);
		}
	};
	a.prototype.deleteAddIcon = function(b) {
		for (var a = b.length,
		c = 0; c < a; c++) {
			var e = b[c];
			this.removeAddIcon(e, this.bombBoxAddIconList);
			var h = e.targetBox;
			e.x = h.x;
			e.y = h.y;
			this.addBoxWhenBomb(h);
			this.boxLayer.removeChild(e);
		}
	};
	a.prototype.addBox = function(b, a) {
		void 0 === a && (a = true);
		0 != b.data.type ? (b.texture = RES.getRes(b.data.type + "1"), a ? AnimateHelper.bubbleBox(b) : (b.scaleX = 1, b.scaleY = 1)) : (b.texture = null);
	};
	a.prototype.onCrashEnd = function(b) {};
	a.prototype.onBombEnd = function(b) {
		this.boxLayer.removeChild(b.bomb);
		this.showAddIcon(b, AddIcon.TOP_DIR, 0, -GameData.boxHW);
		this.showAddIcon(b, AddIcon.BOTTOM_DIR, 0, GameData.boxHW);
		this.showAddIcon(b, AddIcon.LEFT_DIR, -GameData.boxHW, 0);
		this.showAddIcon(b, AddIcon.RIGHT_DIR, GameData.boxHW, 0);
		GameData.bombCount -= 1;
		GameData.combo += 1;
		this.showCombo();
		GameData.addCount = 2;
		this.calScoreOnBombEnd();
	};
	a.prototype.calScoreOnBombEnd = function() {
		GameData.score += 4;
	};
	a.prototype.calScoreOnComboEnd = function() {
		GameData.score += 4 * (GameData.combo - 1);
	};
	a.prototype.calScoreOnBonusEnd = function() {
		GameData.score += 128;
	};
	a.prototype.removeAddIcon = function(b, a) {
		for (var c = a.length,
		e = 0; e < c; e++) {
			if (a[e] == b) {
				a.splice(e, 1);
				break;
			}
		}
	};
	a.prototype.showAddIcon = function(b, a, c, e) {
		a = b.getIconByDir(a);
		a.x = b.x + c;
		a.y = b.y + e;
		this.boxLayer.addChild(a);
		this.bombBoxAddIconList.push(a);
	};
	a.prototype.addBoxWhenBomb = function(b) {
		4 <= b.data.type ? (b.data.type = 0, b.showBomb(), GameData.bombCount += 1, this.moveToEmptyBoxList(b), GameData.isNewer && this.hideNewerDes()) : 0 != b.data.type && (b.data.type++, AnimateHelper.bubbleBox(b), this.addBox(b));
	};
	a.prototype.onComboEndAddBox = function() {
		var b = GameData.combo,
		a = 0,
		a = b <= Config.add1Need ? 1 : b <= Config.add2Need ? 2 : b <= Config.add3Need ? 3 : 4;
		false == this.addRandomBox(a) && this.showAnimate(false);
	};
	a.prototype.fillAllBoxForNewer = function() {
		this.addRandomBox(this.emptyBoxList.length);
	};
	a.prototype.addRandomBox = function(b) {
		var a = false,
		c = this.emptyBoxList.length;
		if (0 == c) {
			a = true,
			this.onGameOver();
		} else {
			for (; 0 < b;) {
				b--;
				var c = null,
				e = 1;
				GameData.isNewer && GameData.newerStep < Config.newer_step_ij.length ? (c = Config.newer_step_ij[GameData.newerStep], c = this.getBoxForNewer(this.emptyBoxList, c.i, c.j), e = Math.floor(3 * Math.random()) + 1, GameData.newerStep++) : (c = this.getRandomBox(this.emptyBoxList), e = this.getRandomType());
				c.data.type = e;
				this.addBox(c);
				c = this.emptyBoxList.length;
				if (GameData.isNewer) {
					if (20 == c) {
						a = true;
						this.onGameOver();
						break;
					}
				} else if (0 == c) {
					a = true;
					this.onGameOver();
					break;
				}
			}
		}
		this.checkWarning();
		return a;
	};
	a.prototype.checkWarning = function() {
		if (0 < this.emptyBoxList.length) {
			if (4 >= this.emptyBoxList.length) {
				for (var b = 0; b < this.emptyBoxList.length; b++) {
					this.emptyBoxList[b].showWarning();
				}
			} else {
				AnimateHelper.freeAllWarningMc();
			}
		}
	};
	a.prototype.addBoxWhenClick = function(b) {
		if (0 < this.emptyBoxList.length) {
			b.data.type++,
			this.addBox(b),
			b = GameData.addCount,
			SoundManager.instance().playSound("addSound"),
			this.addRandomBox(b),
			4 > GameData.addCount && (GameData.addCount += 1);
		} else {
			this.onGameOver();
		}
	};
	a.prototype.onGameOver = function() {
		false == GameData.isOver && (GameData.isOver = true, GameData.comboEnd = false, GameData.isNewer ? (GameData.isNewer = false, GameData.updateNewer()) : egret.setTimeout(this.showOver, this, 800));
	};
	a.prototype.showOver = function() {
		this.hideNewerDes();
		this.addChild(OverView.instance());
	};
	a.prototype.moveToEmptyBoxList = function(b) {
		this.emptyBoxList.push(b);
	};
	a.prototype.touchHandler = function(b) {
		if (false != GameData.comboEnd && !GameData.isOver && !GameData.paused && false != GameData.ready) {
			b = b.currentTarget;
			var c = b.data;
			GameData.isNewer && 2 > GameData.newerStep && (3 != c.i || 2 != c.j) || (AnimateHelper.freeAllWarningMc(), 0 < c.type && 4 > c.type ? (GameData.isNewer && (this.hideNewerDes(), 0 == GameData.newerStep ? this.showNewerDes(3, false) : 0 < GameData.newerStep && egret.setTimeout(function() {
				this.showNewerDes(4, false,
				function() {
					a.instance().showNewerEnd();
				});
			},
			this, 500)), AnimateHelper.bubbleBox(b), a.instance().addBoxWhenClick(b)) : (GameData.combo = 0, GameData.comboEnd = false, b.showBomb(), GameData.bombCount += 1, b.data.type = 0, this.moveToEmptyBoxList(b)));
		}
	};
	a.prototype.showNewerEnd = function() {
		egret.setTimeout(function() {
			egret.Tween.get(a.instance().boxLayer, {
				loop: false
			},
			null, true).to({
				alpha: 0
			},
			800).call(function() {
				a.instance().showNewerDes5();
			});
			egret.Tween.get(a.instance().newerDes, {
				loop: false
			},
			null, true).to({
				alpha: 0
			},
			800);
		},
		this, 1000);
	};
	a.prototype.getRandomType = function() {
		this.Px = 100 / (100 + GameData.score);
		var b = 0,
		b = Math.random(),
		b = b <= this.P4 ? 4 : b <= this.P3 ? 3 : b <= this.P2 ? 2 : 1;
		switch (b) {
		case 4:
			this.P3 += this.P3 * this.Px;
			this.P2 += this.P2 * this.Px;
			this.P4 = Config.p4 * this.Px;
			break;
		case 3:
			this.P4 += this.P4 * this.Px;
			this.P2 += this.P2 * this.Px;
			this.P3 = Config.p3 * this.Px;
			break;
		case 2:
			this.P4 += this.P4 * this.Px;
			this.P3 += this.P3 * this.Px;
			this.P2 = Config.p2 * this.Px;
			break;
		case 1:
			this.P4 += this.P4 * this.Px,
			this.P3 += this.P3 * this.Px,
			this.P2 += this.P2 * this.Px;
		default:
			;
		}
		return b;
	};
	a.prototype.getRandomBox = function(b) {
		var a = Math.floor(Math.random() * b.length),
		c = b[a];
		b.splice(a, 1);
		return c;
	};
	a.prototype.getBoxForNewer = function(b, a, c) {
		for (var e = 0,
		h = null,
		l = 0; l < b.length; l++) {
			if (h = b[l], h.data.i == a && h.data.j == c) {
				e = l;
				break;
			}
		}
		b.splice(e, 1);
		return h;
	};
	a.prototype.updateCombo = function() {
		this.comboTxt.y >= this.comboTop ? (this.comboTxt.y -= GameData.comboSpeed) : (this.comboTxt.visible = false);
	};
	a.prototype.showCombo = function() {
		this.comboTxt.text = "Combo" + GameData.combo + "!";
		this.comboTxt.visible = true;
		var b = this.comboTxt,
		a = this.comboTop,
		c = this.comboBottom - 50 * GameData.scale / 2;
		egret.clearTimeout(GameData.showBombtimerId);
		this.comboTxt.y == c ? (GameData.showBombtimerId = egret.setTimeout(function() {
			egret.Tween.get(b, false, null, true).to({
				y: a,
				alpha: 0
			},
			150).call(function() {
				b.visible = false;
			});
		},
		b, 500)) : (this.comboTxt.y = this.comboBottom, this.comboTxt.alpha = 0, egret.Tween.get(this.comboTxt, false, null, true).to({
			y: c,
			alpha: 1
		},
		160).call(function() {
			GameData.showBombtimerId = egret.setTimeout(function() {
				egret.Tween.get(b, false, null, true).to({
					y: a,
					alpha: 0
				},
				150).call(function() {
					b.visible = false;
				});
			},
			b, 500);
		}));
	};
	a.prototype.touchHandler2 = function(b) {
		var a = b.currentTarget;
		switch (b.type) {
		case egret.TouchEvent.TOUCH_BEGIN:
			a.scaleX = a.scaleY = 1.2;
			break;
		case egret.TouchEvent.TOUCH_END:
			a.scaleX = a.scaleY = 1;
			break;
		case egret.TouchEvent.TOUCH_TAP:
			"soundbtn" == a.name && (SoundManager.instance().playSound("ui_click"), GameData.soundEnabled = !GameData.soundEnabled, GameData.updateSoundEnabled(), a.texture = GameData.soundEnabled ? RES.getRes("soundBtn2") : RES.getRes("soundBtn1"), GameData.soundEnabled ? SoundManager.instance().playMusic() : SoundManager.instance().stopMusic());
		default:
			;
		}
	};
	a.prototype.initBoard = function() {
		this.scoreBoard = new egret.Sprite;
		this.scoreBoard.graphics.beginFill(GameData.scoreBoardColor);
		this.scoreBoard.graphics.drawRect(0, GameData.scoreBoardTop, GameData.GameWidth, GameData.scoreBoardH);
		this.scoreBoard.graphics.endFill();
		this.scoreBoard.y = 0;
		this.addChild(this.scoreBoard);
		var b = RES.getRes("111_fnt"),
		a = new egret.BitmapText;
		a.spriteSheet = b;
		a.text = "0";
		a.y = GameData.scoreBoardTop + GameData.scoreBoardH / 2;
		a.anchorX = 0.5;
		a.anchorY = 0.5;
		a.x = GameData.GameWidth / 2;
		this.scoreBoard.addChild(a);
		this.scoreTxt = a;
		b = RES.getRes("gray_font_fnt");
		a = new egret.BitmapText;
		a.spriteSheet = b;
		a.text = "Best " + GameData.bestScore;
		a.anchorY = 0.5;
		a.y = GameData.scoreBoardTop + GameData.scoreBoardH + 25;
		a.x = 20;
		this.scoreBoard.addChild(a);
		this.bestScoreTxt = a;
		b = RES.getRes("red_font_fnt");
		a = new egret.BitmapText;
		a.spriteSheet = b;
		a.text = "Combo20!";
		this.comboTop = GameData.scoreBoardTop + GameData.scoreBoardH + 6 * GameData.scale;
		a.y = this.comboTop;
		a.x = GameData.GameWidth - 320 * GameData.scale;
		this.comboBottom = this.comboTop + 38 * GameData.scale;
		this.comboTxt = a;
		this.comboTxt.visible = false;
		this.scoreBoard.addChild(a);
		this.scoreBoard.visible = GameData.isNewer ? false: true;
	};
	a.prototype.initBgGrid = function(b) {
		var a = Config.ui;
		Math.round(GameData.boxBgW * a.bi);
		var c = new egret.Sprite;
		this.bgGrid = c;
		c.graphics.beginFill(a.bgc);
		c.graphics.drawRect(0, 0, GameData.GameWidth, GameData.GameHeight);
		c.graphics.endFill();
		a = b.ys;
		GameData.rows = b.xs;
		GameData.cols = a;
		b = new egret.DisplayObjectContainer;
		false == GameData.isNewer && this.initGrid();
		b.addChild(c);
		this.addChild(b);
	};
	a.prototype.initGrid = function() {
		if (!this.initedGrid) {
			var b = Config.ui,
			a = 10 * b.jx * GameData.scale,
			c, e = GameData.boxBgW,
			h = this.bgGrid;
			c = e + b.jx;
			for (var l = 0; l < GameData.rows; l++) {
				for (var n = 0; n < GameData.cols; n++) {
					h.graphics.beginFill(b.gbc),
					h.graphics.drawRoundRect(a + n * c, a + l * c + GameData.boxBoardTop, e, e, 48 * GameData.scale, 48 * GameData.scale),
					h.graphics.endFill();
				}
			}
			h.width = GameData.GameWidth;
			h.height = GameData.GameHeight;
			this.initedGrid = h.cacheAsBitmap = true;
		}
	};
	a.prototype.showNewerDes5 = function() {
		this.newerDes5 = new egret.Bitmap;
		this.newerDes5.texture = RES.getRes("newer_des5");
		this.newerDes5.anchorX = 0.5;
		this.newerDes5.x = GameData.GameWidth / 2;
		this.newerDes5.y = GameData.newerHandMc5Y;
		this.addChild(this.newerDes5);
		this.newerDes5Tween = egret.Tween.get(this.newerDes5, {
			loop: true
		},
		null, true).to({
			alpha: 0.8
		},
		1000).to({
			alpha: 1
		},
		1000);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResrartHandle, this);
	};
	a.prototype.onResrartHandle = function(b) {
		this.boxLayer.alpha = 1;
		this.hideNewerDes();
		this.hideNewerDes5();
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onResrartHandle, this);
		this.restartGame();
		this.showAd();
	};
	a.prototype.hideNewerDes5 = function() {
		this.newerDes5Tween && this.newerDes5Tween.setPaused(true);
		this.newerDes5 && this.newerDes5.parent && this.removeChild(this.newerDes5);
	};
	a.prototype.showNewerDes = function(b, c, p) {
		void 0 === c && (c = true);
		void 0 === p && (p = null);
		this.newerDes && (this.newerDes.texture = RES.getRes("newer_des" + b), this.addChild(this.newerDes), this.newerDes.x = this.newerDes.width / 2, this.newerDes.alpha = 0, null == this.showNewerDesTwwen && (this.showNewerDesTwwen = null, egret.Tween.get(this.newerDes, {
			loop: false
		},
		null, true).to({
			alpha: 1,
			x: GameData.GameWidth / 2
		},
		1000).call(function() {
			c ? a.instance().showHandAnimate() : null != p && p();
		})));
	};
	a.prototype.showHandAnimate = function() {
		this.addChild(this.newerHandMc);
		this.newerHandMc.playAnimate();
	};
	a.prototype.hideNewerDes = function() {
		this.newerDes && this.newerDes.parent && (this.removeChild(this.newerDes), this.newerHandMc.stop(), this.newerHandMc.parent && this.removeChild(this.newerHandMc));
	};
	a.prototype.showNewer = function() {
		GameData.isNewer && null == this.newerDes && (this.newerDes = new egret.Bitmap, this.newerDes.anchorX = 0.5, this.newerDes.x = GameData.GameWidth / 2, this.newerDes.y = GameData.newerDesY, this.newerHandMc = new NewerHandMc, this.newerHandMc.x = GameData.GameWidth / 2 - 30, this.newerHandMc.y = GameData.newerHandMcY);
	};
	return a;
})(egret.DisplayObjectContainer);
PlayView.prototype.__class__ = "PlayView";
var GameData = (function() {
	function c() {}
	c.initNewer = function() {
		"false" == egret.localStorage.getItem("isnewer") ? (c.isNewer = false) : (c.isNewer = true);
		"false" == egret.localStorage.getItem("soundEnabled") ? (c.soundEnabled = false) : (c.soundEnabled = true);
	};
	c.updateNewer = function() {
		egret.localStorage.setItem("isnewer", "false");
	};
	c.updateSoundEnabled = function() {
		egret.localStorage.setItem("soundEnabled", c.soundEnabled ? "true": "false");
	};
	c.updateScore = function() {
		c.score > c.bestScore && (c.bestScore = c.score, egret.localStorage.setItem("bestscore", c.bestScore + ""));
	};
	c.initBestScore = function() {
		var a = egret.localStorage.getItem("bestscore");
		c.bestScore = null == a ? 0 : a;
	};
	c.scale = 0.5;
	c.bestCombo = 0;
	c.bestCombo2 = 0;
	c.boxW = 104 * c.scale;
	c.boxHW = c.boxW / 2;
	c.crashMCW = 14 * c.scale;
	c.boxBgW = 110 * c.scale;
	c.speed = 10 * c.scale;
	c.GameWidth = 720 * c.scale;
	c.GameHeight = 1040 * c.scale;
	c.GameHeight_2 = 1040 * c.scale;
	c.GameHeight_3 = 1200 * c.scale;
	c.limitH1 = 1070 * c.scale;
	c.limitH2 = 1100 * c.scale;
	c.scoreBoardTop = 30 * c.scale;
	c.scoreBoardTop2 = 90 * c.scale;
	c.boxBoardTop = 230 * c.scale;
	c.newerDesY = 150 * c.scale;
	c.boxBoardTop_newer = 170 * c.scale;
	c.newerHandMcY = 574 * c.scale;
	c.newerHandMc5Y = 444 * c.scale;
	c.scoreBoardH = 120 * c.scale;
	c.scoreBoardColor = 16278114;
	c.comboSpeed = 6 * c.scale;
	c.isOver = false;
	c.paused = false;
	c.ready = false;
	c.bestScore = 0;
	c.isNewer = true;
	c.newerStep = 0;
	c.newer_gk = 1;
	c.WScale = 1;
	c.lastBoxY = 1;
	c.shwingBonus = false;
	c.soundEnabled = true;
	c.dirtyRect1 = new egret.Rectangle(5, c.scoreBoardTop, c.GameWidth - 10, c.GameHeight - c.scoreBoardTop - 50);
	return c;
})();
GameData.prototype.__class__ = "GameData";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
Box = (function(c) {
	function a() {
		c.call(this);
		this.addCionList = null;
		this.anchorY = this.anchorX = 0.5;
	}
	__extends(a, c);
	a.prototype.onBombComplete = function(b) {
		b.onBombEnd();
	};
	a.prototype.onCrashComplete = function(b) {
		b.onCrashEnd();
	};
	a.prototype.onCrashEnd = function() {
		this.crash.stop();
		PlayView.instance().onCrashEnd(this);
		this.crash.parent && this.crash.parent.removeChild(this.crash);
	};
	a.prototype.onBombEnd = function() {
		this.bomb.stop();
		PlayView.instance().onBombEnd(this);
	};
	a.prototype.showCrash = function(b) {
		null == this.crash && (this.crash = new CrashMc);
		var a = this.data.i,
		c = this.data.j;
		0 == a && 0 == c ? b == AddIcon.TOP_DIR && (c = 1) : 0 == a && c == GameData.cols - 1 ? b == AddIcon.RIGHT_DIR && (a = 1) : a == GameData.rows - 1 && c == GameData.cols - 1 ? b == AddIcon.BOTTOM_DIR && (c = 1) : a == GameData.rows - 1 && 0 == c && b == AddIcon.BOTTOM_DIR && (c = 1);
		this.crash.setBox(this, a, c, this.onCrashComplete);
		this.onReadyToCrash();
	};
	a.prototype.onReadyToCrash = function() {
		this.parent.addChild(this.crash);
		this.crash.gotoAndPlay("\u52A8\u753B");
	};
	a.prototype.showBomb = function() {
		null == this.bomb && (this.bomb = new BombMc);
		this.bomb.setBox(this, this.onBombComplete);
		this.data.type = 0;
		AnimateHelper.bombBox(this, this.onReadyToBomb);
		SoundManager.instance().playSound("bombSound");
	};
	a.prototype.onReadyToBomb = function() {
		this.parent.addChild(this.bomb);
		PlayView.instance().addBox(this);
		this.bomb.gotoAndPlay("\u5143\u4EF6 15");
	};
	a.prototype.getIconByDir = function(b) {
		null == this.addCionList && (this.addCionList = [new AddIcon(AddIcon.TOP_DIR, this.data), new AddIcon(AddIcon.LEFT_DIR, this.data), new AddIcon(AddIcon.RIGHT_DIR, this.data), new AddIcon(AddIcon.BOTTOM_DIR, this.data)]);
		return this.addCionList[b - 1];
	};
	a.prototype.hideWarning = function() {
		this.warningMc && (this.warningMc.box = null, this.warningMc.inUse = false);
		this.warningMc = null;
	};
	a.prototype.showWarning = function() {
		this.warningMc = AnimateHelper.getWarningMc();
		this.warningMc.x = this.x - GameData.boxHW;
		this.warningMc.y = this.y - GameData.boxHW - 1;
		this.warningMc.playAnimate();
		this.parent.addChild(this.warningMc);
	};
	return a;
})(egret.Bitmap);
Box.prototype.__class__ = "Box";
var SoundManager = (function() {
	function c() {
		this.isMusicPlaying = this.inPlaying = false;
	}
	c.prototype.initSound = function() {
		c.canPlaySound = egret.WebAudio.canUseWebAudio ? true: false;
		c.canPlaySound && (this.bombSound = RES.getRes("bomb"), this.addSound = RES.getRes("add"), this.ui_click = RES.getRes("ui_click"), this.amazing = RES.getRes("amazing"), this.bonus = RES.getRes("bonus"), this.good = RES.getRes("good"), this.great = RES.getRes("great"), this.readygo = RES.getRes("readygo"), this.warning = RES.getRes("warning"));
	};
	c.instance = function() {
		null == c._instance && (c._instance = new c);
		return c._instance;
	};
	c.prototype.playSound = function(a) {
		if (false != c.canPlaySound && false != GameData.soundEnabled) {
			switch (a) {
			case "bombSound":
				this.bombSound.play();
				break;
			case "addSound":
				this.addSound.play();
				break;
			case "ui_click":
				this.ui_click.play();
				break;
			case "amazing":
				this.amazing.play();
				break;
			case "bonus":
				this.bonus.play();
				break;
			case "good":
				this.good.play();
				break;
			case "great":
				this.great.play();
				break;
			case "readygo":
				this.readygo.play();
				break;
			case "warning":
				this.warning.play();
			default:
				;
			}
		}
	};
	c.prototype.initBgSound = function() {
		this.bgSound = RES.getRes("music");
	};
	c.prototype.stopMusic = function() {
		this.bgSound && this.isMusicPlaying && (this.isMusicPlaying = false, this.bgSound.pause());
	};
	c.prototype.playMusic = function() {
		this.bgSound && GameData.soundEnabled && false == this.isMusicPlaying && this.inPlaying && (this.isMusicPlaying = true, this.bgSound.play(true));
	};
	c.canPlaySound = false;
	return c;
})();
SoundManager.prototype.__class__ = "SoundManager";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
BombMc = (function(c) {
	function a() {
		var b = RES.getRes("bomb_json"),
		a = RES.getRes("bomb_png");
		c.call(this, b, a);
		this.frameRate = 42;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(b) {
		this._onComplete(b.target._box);
	};
	a.prototype.setBox = function(b, a) {
		this._box = b;
		this.x = b.x;
		this.y = b.y;
		this.currType = b.data.type;
		this._onComplete = a;
	};
	return a;
})(egret.MovieClip);
BombMc.prototype.__class__ = "BombMc";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
WarningMc = (function(c) {
	function a() {
		var b = RES.getRes("warning_json"),
		a = RES.getRes("warning_png");
		c.call(this, b, a);
		this.frameRate = 24;
		this.scaleX = this.scaleY = 0.95;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(b) {
		this.count++;
		2 <= this.count ? (this.stop(), this.parent && this.parent.removeChild(this)) : SoundManager.instance().playSound("warning");
	};
	a.prototype.playAnimate = function() {
		this.count = 0;
		this.gotoAndPlay("\u5143\u4EF6 2");
		SoundManager.instance().playSound("warning");
	};
	return a;
})(egret.MovieClip);
WarningMc.prototype.__class__ = "WarningMc";
var AnimateHelper = (function() {
	function c() {}
	c.bubbleBox = function(a, b) {
		a.scaleX = 0.25;
		a.scaleY = 0.25;
		null == b ? egret.Tween.get(a, {
			loop: false
		},
		null, true).to({
			scaleX: 1,
			scaleY: 1
		},
		800, egret.Ease.elasticOut) : egret.Tween.get(a, {
			loop: false
		},
		null, true).to({
			scaleX: 1,
			scaleY: 1
		},
		800, egret.Ease.elasticOut).call(b);
	};
	c.bombBox = function(a, b) {
		a.scaleX = 1;
		a.scaleY = 1;
		egret.Tween.get(a, {
			loop: false
		},
		null, true).to({
			scaleX: 0.8,
			scaleY: 0.8
		},
		50).call(b);
	};
	c.init = function() {
		c.warningMcList = [];
		for (var a = 0; 4 > a; a++) {
			var b = new WarningMc;
			b.inUse = false;
			c.warningMcList.push(b);
		}
	};
	c.getWarningMc = function() {
		for (var a, b = 0; 4 > b; b++) {
			if (a = this.warningMcList[b], false == a.inUse) {
				a.inUse = true;
				break;
			}
		}
		return a;
	};
	c.freeAllWarningMc = function() {
		for (var a, b = 0; 4 > b; b++) {
			a = c.warningMcList[b],
			a.inUse = false,
			a.stop(),
			a.parent && a.parent.removeChild(a),
			a.box && (a.box.warningMc = null);
		}
	};
	return c;
})();
AnimateHelper.prototype.__class__ = "AnimateHelper";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
LoadingUI = (function(c) {
	function a() {
		c.call(this);
		this.createView();
	}
	__extends(a, c);
	a.prototype.createView = function() {
		this.textField = new egret.TextField;
		this.addChild(this.textField);
		this.textField.y = GameData.GameHeight / 2;
		this.textField.width = GameData.GameWidth;
		this.textField.height = 100;
		this.textField.textAlign = "center";
	};
	a.prototype.setProgress = function(b, a) {
		this.textField.text = "\u8D44\u6E90\u52A0\u8F7D\u4E2D..." + b + "/" + a;
	};
	return a;
})(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var BoxData = (function() {
	function c() {}
	c.prototype.copyFrom = function(a) {
		this.type = a.type;
		this.i = a.i;
		this.j = a.j;
	};
	return c;
})();
BoxData.prototype.__class__ = "BoxData";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
StartView = (function(c) {
	function a() {
		c.call(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	__extends(a, c);
	a.prototype.onAddToStage = function(b) {
		b = new egret.Bitmap;
		b.texture = RES.getRes("bg");
		b.scaleX = b.scaleY = 1;
		b.anchorY = 0.5;
		b.y = GameData.GameHeight / 2;
		b.x = 0;
		this.addChild(b);
		var a = new egret.Bitmap;
		a.texture = RES.getRes("sbt");
		a.anchorX = a.anchorY = 0.5;
		a.scaleX = a.scaleY = 0.8;
		a.name = "startBtn";
		a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
		a.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
		a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
		a.x = GameData.GameWidth / 2;
		a.y = 0.8 * GameData.GameHeight - 40 * GameData.scale;
		this.addChild(a);
		a.touchEnabled = true;
		a = new egret.Bitmap;
		a.texture = RES.getRes("infoBtn");
		a.anchorX = a.anchorY = 0.5;
		a.scaleX = a.scaleY = 0.8;
		a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
		a.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
		a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
		a.x = GameData.GameWidth - 70 * GameData.scale;
		a.y = 70 * GameData.scale;
		this.addChild(a);
		a.touchEnabled = true;
		a.name = "infoBtn";
		b = new egret.Bitmap;
		b.texture = RES.getRes("infoBg");
		b.x = b.width / 2;
		b.anchorX = 0.5;
		b.scaleX = -1;
		this.infoPanel = new egret.DisplayObjectContainer;
		this.infoPanel.addChild(b);
		a = new egret.Bitmap;
		a.name = "closeInfoBtn";
		a.texture = RES.getRes("infoBtn");
		a.alpha = 0;
		a.scaleX = a.scaleY = 0.9;
		a.x = b.width - a.width + 6;
		a.y = -6;
		a.touchEnabled = true;
		a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
		this.infoPanel.addChild(a);
		this.addChild(this.infoPanel);
		this.infoPanel.anchorX = 0.5;
		this.infoPanel.anchorY = 0.5;
		this.infoPanel.x = GameData.GameWidth / 2;
		this.infoPanel.y = GameData.GameHeight / 2 - 100 * GameData.scale;
		this.infoPanel.visible = false;
		GameData.initBestScore();
		AnimateHelper.init();
		GameData.shareFun2 && GameData.shareFun2();
	};
	a.prototype.touchHandler = function(a) {
		var c = a.target;
		switch (a.type) {
		case egret.TouchEvent.TOUCH_BEGIN:
			c.scaleX = c.scaleY = 1;
			break;
		case egret.TouchEvent.TOUCH_END:
			c.scaleX = c.scaleY = 0.8;
			break;
		case egret.TouchEvent.TOUCH_TAP:
			SoundManager.instance().playSound("ui_click"),
			"startBtn" == c.name ? (a = this.stage, this.parent.removeChild(this), a.addChild(new PlayView)) : "infoBtn" == c.name ? (this.infoPanel.visible = !this.infoPanel.visible) : "closeInfoBtn" == c.name && (this.infoPanel.visible = false);
		default:
			;
		}
	};
	return a;
})(egret.DisplayObjectContainer);
StartView.prototype.__class__ = "StartView";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
LoadingMc = (function(c) {
	function a() {
		c.call(this);
		this.frame = 1;
		this.bg2 = new egret.Bitmap;
		this.bg2.anchorX = 0.5;
		this.bg2.anchorY = 0.5;
		this.bg2.texture = RES.getRes("3");
		this.addChild(this.bg2);
		this.bg2.mask = new egret.Rectangle(0, 0, this.bg2.width, 1);
	}
	__extends(a, c);
	a.prototype.setProgress = function(a) {
		this.bg2.mask && (this.bg2.mask.height = this.bg2.height * a);
		1 == a && (this.bg2.mask = null);
	};
	a.prototype.play = function() {
		this.timer = new egret.Timer(100);
		this.frame = 1;
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		this.timer.start();
	};
	a.prototype.onTimer = function(a) {
		this.frame++;
		3 < this.frame && (this.frame = 1);
	};
	return a;
})(egret.DisplayObjectContainer);
LoadingMc.prototype.__class__ = "LoadingMc";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
Main = (function(c) {
	function a() {
		c.call(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	__extends(a, c);
	a.prototype.onAddToStage = function(a) {
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		GameData.initNewer();
		GameData.isNewer ? RES.loadConfig("resource/resource_newer.json", "resource/") : RES.loadConfig("resource/resource.json", "resource/");
	};
	a.prototype.onConfigComplete = function(a) {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		RES.loadGroup("loading");
	};
	a.prototype.loadMusic = function() {
		RES.loadGroup("sound2");
		RES.loadGroup("sound1");
	};
	a.prototype.onResourceLoadComplete = function(a) {
		"loading" == a.groupName && (this.loadingMc = new LoadingMc, this.loadingMc.x = GameData.GameWidth / 2, this.loadingMc.y = 0.4 * GameData.GameHeight, this.addChild(this.loadingMc), RES.loadGroup("preload2"));
		"sound1" == a.groupName && SoundManager.instance().initSound();
		"sound2" == a.groupName && SoundManager.instance().initBgSound();
		if ("preload2" == a.groupName) {
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			var c = this;
			setTimeout(function() {
				c.removeChild(c.loadingMc);
				c.stage.addChild(new StartView);
				c.loadMusic();
			},
			1000);
		}
	};
	a.prototype.onResourceProgress = function(a) {
		if ("preload2" == a.groupName) {
			this.loadingMc.setProgress(a.itemsLoaded / a.itemsTotal);
		}
	};
	a.prototype.createScene = function() {};
	a.prototype.onButtonClick = function(a) {};
	return a;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
var Config = (function() {
	function c() {}
	c.gk = [{
		xs: 6,
		ys: 6,
		arr: [4, 7, 6, 14]
	},
	{
		xs: 6,
		ys: 6,
		arr: [5, 7, 7, 5]
	}];
	c.newer_step_ij = [{
		i: 3,
		j: 1
	},
	{
		i: 4,
		j: 1
	},
	{
		i: 4,
		j: 2
	},
	{
		i: 4,
		j: 3
	},
	{
		i: 4,
		j: 4
	}];
	c.newer_gk = [{
		xs: 6,
		ys: 6,
		arr: [[0, 0, 0, 0, 0, 0], [0, 4, 3, 4, 4, 0], [0, 4, 4, 1, 4, 0], [0, 2, 4, 4, 4, 0], [0, 4, 4, 4, 3, 0], [0, 0, 0, 0, 0, 0]]
	},
	{
		xs: 6,
		ys: 6,
		arr: [[0, 0, 0, 0, 0, 0], [0, 2, 3, 1, 3, 0], [0, 3, 1, 2, 3, 0], [0, 0, 2, 3, 2, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
	}];
	c.p4 = 0.1;
	c.p3 = 0.2;
	c.p2 = 0.3;
	c.goodNeed = 3;
	c.greatNeed = 6;
	c.amazingNeed = 10;
	c.add1Need = 3;
	c.add2Need = 7;
	c.add3Need = 15;
	c.ui = {
		bi: 0.95,
		jx: 2,
		bgc: 15986903,
		hc: 16278114,
		gbc: 14802612,
		jgc: 16278114,
		sbc: 15986390
	};
	return c;
})();
Config.prototype.__class__ = "Config";
var BoxMapHelper = (function() {
	function c() {}
	c.setBox = function(a, b, d) {
		var p = c._cols;
		c._rows[a][b] = d;
		p[b][a] = d;
	};
	c.init = function(a, b) {
		for (var d = [], p = [], e = 0; e < a; e++) {
			d[e] = [];
			p[e] = [];
			for (var h = 0; h < b; h++) {
				d[e][h] = [],
				p[e][h] = [];
			}
		}
		c._cols = p;
		c._rows = d;
	};
	c.getRow = function(a) {
		return c._rows[a];
	};
	c.getCol = function(a) {
		return c._cols[a];
	};
	return c;
})();
BoxMapHelper.prototype.__class__ = "BoxMapHelper";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
AddIcon = (function(c) {
	function a(a, d) {
		c.call(this);
		this.anchorY = this.anchorX = 0.5;
		this.texture = RES.getRes("555");
		this.dir = a;
		this.boxData = d;
	}
	__extends(a, c);
	a.TOP_DIR = 1;
	a.LEFT_DIR = 2;
	a.RIGHT_DIR = 3;
	a.BOTTOM_DIR = 4;
	return a;
})(egret.Bitmap);
AddIcon.prototype.__class__ = "AddIcon";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
Animate1 = (function(c) {
	function a() {
		var a = RES.getRes("animate1_json"),
		d = RES.getRes("animate1_png");
		c.call(this, a, d);
		this.frameRate = 24;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(a) {
		this.stop();
		this.parent && this.parent.removeChild(this);
		"bonus" == this.animateName && PlayView.instance().showHighCombo();
	};
	a.prototype.good = function() {
		this.animateName = "good";
		this.gotoAndPlay("good");
		SoundManager.instance().playSound("good");
	};
	a.prototype.amazing = function() {
		this.animateName = "amazing";
		this.gotoAndPlay("amazing");
		SoundManager.instance().playSound("amazing");
	};
	a.prototype.great = function() {
		this.animateName = "great";
		this.gotoAndPlay("great");
		SoundManager.instance().playSound("great");
	};
	a.prototype.bonus = function() {
		this.animateName = "bonus";
		this.gotoAndPlay("bonus");
		SoundManager.instance().playSound("bonus");
	};
	return a;
})(egret.MovieClip);
Animate1.prototype.__class__ = "Animate1";
var __extends = this.__extends ||
function(c, a) {
	function b() {
		this.constructor = c;
	}
	for (var d in a) {
		a.hasOwnProperty(d) && (c[d] = a[d]);
	}
	b.prototype = a.prototype;
	c.prototype = new b;
},
CrashMc = (function(c) {
	function a() {
		var a = RES.getRes("crash_json"),
		d = RES.getRes("crash_png");
		c.call(this, a, d);
		this.frameRate = 20;
		this.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
	}
	__extends(a, c);
	a.prototype.onComplete = function(a) {
		this._onComplete(a.target._box);
	};
	a.prototype.setBox = function(a, c, p, e) {
		this._box = a;
		0 == p ? (this.x = a.x - GameData.boxHW + GameData.crashMCW, this.y = a.y) : 0 == c ? (this.rotation = 90, this.x = a.x, this.y = a.y - GameData.boxHW + GameData.crashMCW) : p == GameData.cols - 1 ? (this.rotation = 180, this.x = a.x + GameData.boxHW - GameData.crashMCW, this.y = a.y) : (this.rotation = -90, this.x = a.x, this.y = a.y + GameData.boxHW - GameData.crashMCW);
		this._onComplete = e;
	};
	return a;
})(egret.MovieClip);
CrashMc.prototype.__class__ = "CrashMc";