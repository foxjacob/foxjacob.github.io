function LevelPackSelectState() {
    LevelPackSelectState.superclass.constructor.apply(this);
    this.back = null;
    this.icons = [];
    this.labels = [];
    this.iconsLayer = null;
    this.state = this.STATE_WAIT;
    this.prevMousePoint = {x: _TrinGame.mouse.x, y: _TrinGame.mouse.y};
    this.title = null;
    this.bBack = null;
    this.a10Logo = null;
}

extend(LevelPackSelectState, TrinState);

LevelPackSelectState.prototype.create = function() {
    LevelPackSelectState.superclass.create.apply(this);
    this.back = new TrinSprite();
    this.back.addAnimationFromCache("CompleteBack");

    var levelPacks = Global.prototype.levelpacks;
    for (var i = 0; i < levelPacks.length; i++) {
        var levelPack = levelPacks[i];
        var stars = 0;
        var levels = Global.prototype.levels[levelPack.name];
        for (var j = 0; j < levels.length; j++)  {
            if (levels[j] > 0)  {
                stars += levels[j];
            }
        }
        var icon = new TrinButton(function() {
            _TrinGame.switchState(new LevelSelectState(Global.prototype.levelpacks[0]));
        }, levelPack.name + "Icon", false);
        this.icons[this.icons.length] = new LevelPackIcon(icon, stars + "/" + (levels.length * 3));
    }
    var comingSoon = new TrinSprite();
    comingSoon.addAnimationFromCache("ComingSoonIcon");
    this.icons[this.icons.length] = new LevelPackIcon(comingSoon, "");

    this.iconsLayer = new TrinLayer();
    for (i = 0; i < this.icons.length; i++) {
        icon = this.icons[i];
        icon.reset(320 + i * _TrinGame.width / 2, _TrinGame.height / 2);
        if (i > 0) {
            icon.scale.x = icon.scale.y = this.minIconScale;
        }
        this.iconsLayer.add(this.icons[i]);
    }

    this.title = new TrinSprite();
    this.title.addAnimationFromCache("LevelPackSelectTitle");
    this.title.orign.x = this.title.width / 2;
    this.title.reset(320, 180);

    this.bBack = new TrinButton(function() {
        _TrinGame.switchState(new MainMenuState());
    }, "bBack", false);
    this.bBack.orign.x = this.bBack.width;
    this.bBack.orign.y = this.bBack.height;
    this.bBack.reset(632, _TrinGame.visibleArea.bottom - 8);

    var a10Logo = new TrinButton(function() {
        //_TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.y = a10Logo.height;
    a10Logo.reset(8, _TrinGame.visibleArea.bottom - 8);
    this.a10Logo = a10Logo;
    
    this.add(this.back);
    this.add(this.iconsLayer);
    this.add(this.title);
    this.add(this.bBack);
    this.add(a10Logo);
};

LevelPackSelectState.prototype.update = function() {
    LevelPackSelectState.superclass.update.apply(this);
    var mouse = _TrinGame.mouse;
    var d = 0;
    switch (this.state) {
        case this.STATE_WAIT:
            if (mouse.isPressed()) {
                this.state = this.STATE_SCROLLING;
            }
            break;
        case this.STATE_SCROLLING:
            var d = Math.min(320 - this.icons[0].x,
                    Math.max(mouse.x - this.prevMousePoint.x, 320 - this.icons[this.icons.length - 1].x));
            if (mouse.isReleased()) {
                this.state = this.STATE_FOCUSING;
            }
            if (Math.abs(d) > 4) {
                this.iconsLayer.active = false;
            }
            break;
        case this.STATE_FOCUSING:
            this.iconsLayer.active = true;
            d = 640;
            for (var i = 0; i < this.icons.length; i++) {
                if (Math.abs(320 - this.icons[i].x) < d) {
                    d = (320 - this.icons[i].x);
                }
            }
            if (Math.abs(d) > 0.2) {
                d /= 8;
            }
            if (d === 0) {
                this.state = this.STATE_WAIT;
            }
            if (mouse.isPressed()) {
                this.state = this.STATE_SCROLLING;
            }
            break;
    }
    if (d !== 0) {
        var icon;
        for (var i = 0; i < this.icons.length; i++) {
            icon = this.icons[i];
            icon.reset(icon.x + d, icon.y);
            icon.scale.x = icon.scale.y = Math.max(LevelPackIcon.prototype.minIconScale, 1 - (Math.abs(320 - icon.x) / 640));
        }
    }
    this.prevMousePoint.x = mouse.x;
};

LevelPackSelectState.prototype.resized = function() {
    this.bBack.y = this.a10Logo.y = _TrinGame.visibleArea.bottom - 8;
};

LevelPackSelectState.prototype.STATE_WAIT = 0;
LevelPackSelectState.prototype.STATE_SCROLLING = 1;
LevelPackSelectState.prototype.STATE_FOCUSING = 2;

LevelPackSelectState.prototype.minIconScale = 0.6;