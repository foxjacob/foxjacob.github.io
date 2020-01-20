extend(PlayState, TrinState);
function PlayState(e, t) {
    PlayState.superclass.constructor.apply(this);
    this.levelPack = e;
    this.levelNum = t;
    this.level = e.levels[t];
    ProductItem.prototype.products = [];
    PlayState.prototype.CURRENT = this;
    this.productsLayer = null;
    this.starsLayer = null;
    this.hiddenStarsLayer = null;
    this.completeLayer = null;
    this.guiLayer = null;
    this.pauseLayer = null;
    this.tutorialPoints = null;
    this.currentTutorialPoint = 0;
    if (this.level.tutorial !== undefined) {
        this.tutorialPoints = this.level.tutorial.path
    }
    this.hand = null;
    this.handTimer = 10;
    PlayState.prototype.state = this.STATE_GAME;
    this.completeBack = null;
    this.completeCat = null;
    this.completeStars = [];
    this.completeBNext = null;
    this.completeBRestart = null;
    this.completeBMainmenu = null;
    this.catPaw = null;
    this.blood = null;
    this.pawLayer = null;
    this.hignLightLayer = null;
    this.hignLightRects = [];
    this.bPause = null;
    this.bSound = null;
    this.blank = null;
    PlayState.prototype.starsInstances = [];
    PlayState.prototype.stars = 0;
    this.a10Logo = null;
    this.a10LogoP = null;
    this.moreGames = null
}

PlayState.prototype.update = function() {
    ProductItem.prototype.pickedProduct = null;
    PlayState.superclass.update.apply(this);
    if (this.hand !== null) {
        if (this.handTimer-- < 0) {
            var e = this.tutorialPoints[this.currentTutorialPoint];
            if (Math.abs(this.hand.x - e.x) <= 4 && Math.abs(this.hand.y - e.y) <= 4) {
                this.currentTutorialPoint++;
                if (this.currentTutorialPoint >= this.tutorialPoints.length) {
                    this.currentTutorialPoint = 0;
                    this.handTimer = 10;
                    this.hand.reset(this.tutorialPoints[0].x, this.tutorialPoints[0].y)
                }
            } else {
                this.hand.x += (e.x - this.hand.x) / (16 / this.level.tutorial.speed);
                this.hand.y += (e.y - this.hand.y) / (16 / this.level.tutorial.speed)
            }
        }
        var t = this.level.tutorial.offTriger;
        if (t !== undefined) {
            var n = _TrinGame.mouse;
            switch (t.type) {
                case "click":
                    if (n.isPressed()) {
                        var r = ProductItem.prototype.fieldOffset.x + t.cell.x * ProductItem.prototype.cellSize.x;
                        var i = ProductItem.prototype.fieldOffset.y + t.cell.y * ProductItem.prototype.cellSize.y;
                        if (n.x >= r && n.x <= r + ProductItem.prototype.cellSize.x && n.y >= i && n.y <= i + ProductItem.prototype.cellSize.y) {
                            this.remove(this.hand);
                            this.hand = null
                        }
                    }
                    break
            }
        }
    }
    switch (this.state) {
        case this.STATE_GAME:
            break;
        case this.STATE_PAUSE:
            break;
        case this.STATE_PAW_START:
            if (_TrinGame.SPIL_API.isReady) {
                _TrinGame.SPIL_API.GameBreak.request(_TrinGame.globalPause, _TrinGame.globalResume)
            }
            this.catPaw = new TrinSprite;
            this.catPaw.addAnimationFromCache("CatPaw", true);
            this.catPaw.looped = false;
            this.catPaw.reset(644, ProductItem.prototype.fieldOffset.y + ProductItem.prototype.cellSize.y * 2 - 20);
            this.catPaw.orign.x = this.catPaw.width;
            this.pawLayer.add(this.catPaw);
            this.productsLayer.active = false;
            this.guiLayer.active = false;
            this.state = this.STATE_PAW;
            break;
        case this.STATE_PAW:
            this.catPaw.orign.x = this.catPaw.width;
            if (this.catPaw.currentFrame === 11) {
                this.blood = new TrinSprite;
                this.blood.addAnimationFromCache("Blood");
                this.blood.looped = false;
                this.blood.orign.x = this.blood.width;
                this.blood.reset(640, this.catPaw.y - 50);
                this.pawLayer.remove(this.catPaw);
                this.pawLayer.add(this.blood);
                this.pawLayer.add(this.catPaw)
            }
            if (this.catPaw.isFinished()) {
                this.state = this.STATE_WIN_START;
                this.catPaw.visible = false
            }
            break;
        case this.STATE_WIN_START:
            this.remove(this.a10Logo);
            Global.prototype.levels[this.levelPack.name][this.levelNum] = Math.max(Global.prototype.levels[this.levelPack.name][this.levelNum], this.stars);
            if (this.levelNum + 1 < Global.prototype.levels[this.levelPack.name].length) {
                if (Global.prototype.levels[this.levelPack.name][this.levelNum + 1] === -1) {
                    Global.prototype.levels[this.levelPack.name][this.levelNum + 1] = 0
                }
            }
            Global.prototype.save();
            this.completeLayer = new TrinLayer;
            this.completeBack = new TrinSprite;
            this.completeBack.addAnimationFromCache("CompleteBack");
            this.completeBack.alpha = 0;
            this.completeCat = new TrinSprite;
            this.completeCat.addAnimationFromCache("CompleteCat");
            this.completeCat.orign.x = this.completeCat.width / 2;
            this.completeCat.orign.y = this.completeCat.height / 2;
            this.completeCat.reset(320, 960 + this.completeCat.height / 2);
            // updateShare(this.levelNum + 1);
            // Play68.setRankingScoreDesc(this.levelNum + 1);
            for (var s = 0; s < this.stars; s++) {
                var o = new TrinSprite;
                o.addAnimationFromCache("CompleteStar");
                o.orign.x = o.width / 2;
                o.orign.y = o.height / 2;
                o.scale.x = o.scale.y = 0;
                o.reset(170 + s * 150, 260 - s % 2 * 50);
                this.completeStars[s] = o
            }
            var u = function() {
                var e = arguments.callee.state;
                _TrinGame.switchState(new PlayState(e.levelPack, e.levelNum + 1))
            };
            if (this.levelNum + 1 >= Global.prototype.levels[this.levelPack.name].length) {
                u = function() {
                    var e = arguments.callee.state;
                    e.state = PlayState.prototype.STATE_CONGRATS;
                    e.blank = new TrinRectObject(0, 0, 640, 960, "#FFFFFF");
                    e.blank.alpha = 0;
                    e.completeLayer.add(e.blank)
                }
            }
            u.state = this;
            this.completeBNext = new TrinButton(u, "bPlay", false);
            this.completeBNext.orign.x = this.completeBNext.width / 2;
            this.completeBNext.orign.y = this.completeBNext.height / 2;
            this.completeBNext.reset(320, 1e4);
            var a = function() {
                var e = arguments.callee.state;
                _TrinGame.switchState(new PlayState(e.levelPack, e.levelNum))
            };
            a.state = this;
            this.completeBRestart = new TrinButton(a, "bRestart", false);
            this.completeBRestart.orign.x = this.completeBRestart.width / 2;
            this.completeBRestart.orign.y = this.completeBRestart.height / 2;
            this.completeBRestart.reset(120, 1e4);
            var f = function() {
                _TrinGame.switchState(new LevelSelectState(arguments.callee.levelPack))
            };
            f.levelPack = this.levelPack;
            this.completeBMainMenu = new TrinButton(f, "bMainMenu", false);
            this.completeBMainMenu.orign.x = this.completeBMainMenu.width / 2;
            this.completeBMainMenu.orign.y = this.completeBMainMenu.height / 2;
            this.completeBMainMenu.reset(520, 1e4);
            var l = new TrinButton(function() {
                _TrinGame.SPIL_MOREGAMES.action()
            }, "bMoreGames", true);
            l.orign.x = l.width;
            l.reset(632, _TrinGame.visibleArea.top + 8);
            this.moreGames = l;
            this.completeLayer.add(this.completeBack);
            this.completeLayer.add(this.completeCat);
            for (s = 0; s < this.completeStars.length; s++) {
                this.completeLayer.add(this.completeStars[s])
            }
            this.completeLayer.add(this.completeBNext);
            this.completeLayer.add(this.completeBRestart);
            this.completeLayer.add(this.completeBMainMenu);
            this.completeLayer.add(this.moreGames);
            this.add(this.completeLayer);
            this.add(this.a10Logo);
            this.state = this.STATE_WIN_SHOWING_1;
            break;
        case this.STATE_WIN_SHOWING_1:
            this.completeBack.alpha = Math.min(this.completeBack.alpha + .05, 1);
            this.completeCat.y = 400 + (1 - this.completeBack.alpha) * (560 + this.completeCat.height / 2);
            this.completeBNext.y = this.completeCat.y + this.completeCat.height - 60;
            this.completeBRestart.y = this.completeBMainMenu.y = this.completeBNext.y;
            if (this.completeBack.alpha === 1) {
                this.remove(this.productsLayer);
                if (this.stars > 0) {
                    this.state = this.STATE_WIN_SHOWING_2
                } else {
                    this.state = this.STATE_WIN
                }
            }
            break;
        case this.STATE_WIN_SHOWING_2:
            for (var s = 0; s < this.completeStars.length; s++) {
                var o = this.completeStars[s];
                if (o.scale.x < 1) {
                    o.scale.x = o.scale.y = Math.min(o.scale.x + .1, 1);
                    break
                }
            }
            if (this.completeStars[this.completeStars.length - 1].scale.x === 1) {
                this.state = this.STATE_WIN
            }
            break;
        case this.STATE_WIN:
            break;
        case this.STATE_CONGRATS:
            this.blank.alpha = Math.min(this.blank.alpha + .1, 1);
            if (this.blank.alpha === 1) {
                _TrinGame.switchState(new CongratsState)
            }
            break
    }
};
PlayState.prototype.create = function() {
    PlayState.superclass.create.apply(this);
    this.productsLayer = new TrinLayer;
    this.starsLayer = new TrinLayer;
    this.hiddenStarsLayer = new TrinLayer;
    this.guiLayer = new TrinLayer;
    this.pauseLayer = new TrinLayer;
    this.hignLightLayer = new TrinLayer;
    this.pauseLayer.visible = this.pauseLayer.active = false;
    var e = new TrinSprite;
    e.addAnimationFromCache("GameBack");
    var t = 72;
    var n;
    if (this.level.name === "" || true) {
        n = "Level " + (this.levelNum + 1)
    } else {
        n = this.level.name
    } if (n.length > 8) {
        t = 72 - (n.length - 8) * 4
    }
    var r = new TrinText(n);
    r.setStyle("font", t, true, "#FFFFFF", "left", "bottom");
    r.x = 32;
    r.y = 240;
    var i = function() {
        var e = arguments.callee.state;
        e.pauseLayer.visible = e.pauseLayer.active = true;
        e.productsLayer.active = false;
        e.a10LogoP.active = true;
        e.a10Logo.active = false
    };
    i.state = this;
    var s = new TrinButton(i, "bPause", false);
    s.orign.x = s.width;
    s.reset(608, _TrinGame.visibleArea.top);
    this.bPause = s;
    var o = new SoundButton;
    o.orign.x = o.width;
    o.reset(508, _TrinGame.visibleArea.top);
    this.bSound = o;
    this.guiLayer.add(r);
    this.guiLayer.add(s);
    this.guiLayer.add(o);
    var u = function() {
        var e = arguments.callee.state;
        e.pauseLayer.visible = e.pauseLayer.active = false;
        e.productsLayer.active = true;
        e.a10LogoP.active = false;
        e.a10Logo.active = true
    };
    u.state = this;
    var a = new TrinSprite;
    a.addAnimationFromCache("PauseBack");
    var f = new TrinButton(u, "bPlay", false);
    f.orign.x = f.width / 2;
    f.orign.y = f.height / 2;
    f.reset(320, 530);
    var l = function() {
        var e = arguments.callee.state;
        _TrinGame.switchState(new PlayState(e.levelPack, e.levelNum))
    };
    l.state = this;
    var c = new TrinButton(l, "bRestart", false);
    c.orign.x = c.width / 2;
    c.orign.y = c.height / 2;
    c.reset(120, f.y);
    var h = function() {
        _TrinGame.switchState(new LevelSelectState(arguments.callee.levelPack))
    };
    h.levelPack = this.levelPack;
    var p = new TrinButton(h, "bMainMenu", false);
    p.orign.x = p.width / 2;
    p.orign.y = p.height / 2;
    p.reset(520, f.y);
    var d = new TrinButton(function() {}, "A10Logo", true);
    d.orign.y = d.height;
    d.reset(8, _TrinGame.visibleArea.bottom - 8);
    this.a10LogoP = d;
    this.a10LogoP.active = false;
    this.pauseLayer.add(a);
    this.pauseLayer.add(f);
    this.pauseLayer.add(c);
    this.pauseLayer.add(p);
    this.pauseLayer.add(d);
    var v = this.level.products;
    for (var m = 0; m < v.length; m++) {
        var g = v[m];
        var y = new ProductItem(g.name, g.x, g.y);
        this.productsLayer.add(y)
    }
    var b = this.level.stars;
    if (b !== undefined) {
        for (m = 0; m < b.length; m++) {
            var w = new GameStar(b[m].x, b[m].y);
            this.starsLayer.add(w);
            this.starsInstances[m] = w
        }
    }
    this.hignLightRects = [new TrinRectObject(0, 0, 0, 0, "87f043"), new TrinRectObject(0, 0, 0, 0, "87f043")];
    for (m = 0; m < 2; m++) {
        this.hignLightRects[m].alpha = .5;
        this.hignLightLayer.add(this.hignLightRects[m])
    }
    if (this.tutorialPoints !== undefined && this.tutorialPoints !== null && this.tutorialPoints.length > 0) {
        this.hand = new TrinSprite;
        this.hand.addAnimationFromCache("Hand");
        this.hand.orign.x = 44;
        this.hand.orign.x = 22;
        this.hand.reset(this.tutorialPoints[0].x, this.tutorialPoints[0].y)
    }
    this.pawLayer = new TrinLayer;
    var E = new TrinButton(function() {}, "A10Logo", true);
    E.orign.x = E.width;
    E.orign.y = E.height;
    E.reset(640, _TrinGame.visibleArea.bottom);
    this.a10Logo = E;
    this.add(e);
    this.add(this.guiLayer);
    this.add(this.hignLightLayer);
    this.add(this.pawLayer);
    this.add(this.hiddenStarsLayer);
    this.add(this.productsLayer);
    this.add(this.starsLayer);
    if (this.hand !== null) {
        this.add(this.hand)
    }
    this.add(this.a10Logo);
    this.add(this.pauseLayer)
};
PlayState.prototype.draw = function(e) {
    PlayState.superclass.draw.apply(this, [e])
};
PlayState.prototype.hignLight = function(e, t) {
    var n = this.hignLightRects[0];
    n.x = e.x;
    n.y = e.y;
    n.width = e.width;
    n.height = e.height;
    n.visible = true;
    var r = this.hignLightRects[1];
    r.x = t.x;
    r.y = t.y;
    r.width = t.width;
    r.height = t.height;
    r.visible = true
};
PlayState.prototype.unHignLight = function() {
    this.hignLightRects[0].visible = this.hignLightRects[1].visible = false
};
PlayState.prototype.resized = function() {
    this.bPause.y = this.bSound.y = _TrinGame.visibleArea.top;
    this.a10Logo.y = _TrinGame.visibleArea.bottom;
    this.a10LogoP.y = _TrinGame.visibleArea.bottom - 8;
    if (this.moreGames !== null) {
        this.moreGames.y = _TrinGame.visibleArea.top + 8
    }
};
PlayState.prototype.STATE_GAME = 0;
PlayState.prototype.STATE_PAUSE = 1;
PlayState.prototype.STATE_PAW_START = 7;
PlayState.prototype.STATE_WIN_START = 2;
PlayState.prototype.STATE_PAW = 3;
PlayState.prototype.STATE_WIN_SHOWING_1 = 4;
PlayState.prototype.STATE_WIN_SHOWING_2 = 5;
PlayState.prototype.STATE_WIN = 6;
PlayState.prototype.STATE_CONGRATS = 8;
PlayState.prototype.state = PlayState.prototype.STATE_GAME;
PlayState.prototype.starsInstances = [];
PlayState.prototype.stars = 0;
PlayState.prototype.CURRENT = null;
