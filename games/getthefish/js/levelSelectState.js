function LevelSelectState(levelPack) {
    LevelSelectState.superclass.constructor.apply(this);

    this.levelPack = levelPack;
    this.icons = [];
    this.labels = [];
    this.stars = [];
    this.backButton = null;
    this.walkButton = null;
    this.a10Logo = null;
}

extend(LevelSelectState, TrinState);

LevelSelectState.prototype.update = function() {
    LevelSelectState.superclass.update.apply(this);
    for (var i = 0; i < this.labels.length; i++) {
        var label = this.labels[i];
        var sprite = this.icons[i];
        if (this.icons[i].isHovered()) {
            label.setStyle("font", 48, true, "#01A0C7");
            label.x = sprite.x - 15 * label.text.length;
            label.y = sprite.y;
            for (var j = 0; j < this.stars[i].length; j++) {
                var star = this.stars[i][j];
                star.switchAnimation("LSBigStar");
                star.reset(sprite.x + 27 * (j - 1), sprite.y + 18);
                if (j === 2) {
                    star.x += 1;
                }
            }
        } else {
            label.setStyle("font", 32, true, "#FFFFFF");
            label.x = sprite.x - 10 * label.text.length;
            label.y = sprite.y;
            for (var j = 0; j < this.stars[i].length; j++) {
                var star = this.stars[i][j];
                star.switchAnimation("LSSmallStar");
                star.reset(sprite.x + 24 * (j - 1), sprite.y + 13);
                if (j === 0) {
                    star.x += 2;
                }
                if (j === 1) {
                    star.x += 1;
                }
            }
        }
    }
};

LevelSelectState.prototype.create = function() {
    LevelSelectState.superclass.create.apply(this);

    var back = new TrinSprite();
    back.addAnimationFromCache("LevelSelectBack");

    var levels = this.levelPack.levels;
    var levelsData = Global.prototype.levels[this.levelPack.name];
    for (var i = 0; i < levels.length; i++) {
        var row = Math.floor(i / 5);
        var col = i % 5;
        var sprite;
        var stars;
        if (levelsData[i] === -1) {
            sprite = new TrinSprite();
            sprite.addAnimationFromCache("LockedStage");
        } else {
            var levelFunction = function() {
                _TrinGame.switchState(
                        new PlayState(arguments.callee.levelPack, arguments.callee.level));
            };
            levelFunction.levelPack = this.levelPack;
            levelFunction.level = i;
            sprite = new TrinButton(levelFunction, "bStage", false);

            stars = [];
            for (var j = 0; j < levelsData[i]; j++) {
                var star = new TrinSprite();
                star.addAnimationFromCache("LSSmallStar");
                star.addAnimationFromCache("LSBigStar", false);
                star.orign.x = star.width / 2;
                stars[j] = star;
            }

        }
        sprite.orign.x = sprite.width / 2;
        sprite.orign.y = sprite.height / 2;
        sprite.reset(80 + col * 120, 300 + row * 140);

        this.icons[i] = sprite;

        if (levelsData[i] !== -1) {
            var label = new TrinText(i + 1);
            label.setStyle("font", 32, true, "#FFFFFF");
            label.x = sprite.x - 10 * label.text.length;
            label.y = sprite.y;
            label.baseLine = "alphabetic";
            this.labels[i] = label;
            this.stars[i] = stars;
            for (j = 0; j < stars.length; j++) {
                var star = stars[j];
                star.orign.x = star.width / 2;
                star.reset(sprite.x + 24 * (j - 1), sprite.y + 13);
                if (j === 0) {
                    star.x += 2;
                }
            }
        }
    }

    var backButton = new TrinButton(function() {
        _TrinGame.switchState(new LevelPackSelectState());
    }, "bBack", false);
    backButton.orign.x = backButton.width;
    backButton.orign.y = backButton.height;
    backButton.reset(632, _TrinGame.visibleArea.bottom - 8);
    this.backButton = backButton;

    var walkButton = new TrinButton(function() {
	// Play68.goHome();
        //window.open(TrinAssetLoader.prototype.LOADED_JSON["links"].walkthrought, "_blank");
    }, "bWalk", true);
    walkButton.orign.x = walkButton.width;
    walkButton.orign.y = walkButton.height + 20;
    walkButton.reset(backButton.x - backButton.width - 8, backButton.y);
    this.walkButton = walkButton;

    this.add(back);
    for (i = 0; i < this.icons.length; i++) {
        this.add(this.icons[i]);
        if (this.labels.length > i) {
            this.add(this.labels[i]);
            for (j = 0; j < this.stars[i].length; j++) {
                this.add(this.stars[i][j]);
            }
        }
    }

    var a10Logo = new TrinButton(function() {
        _TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.y = a10Logo.height;
    a10Logo.reset(8, _TrinGame.visibleArea.bottom - 8);
    this.a10Logo = a10Logo;
    
    this.add(backButton);
    this.add(walkButton);
    this.add(a10Logo);
};

LevelSelectState.prototype.resized = function(){
    this.backButton.y = this.walkButton.y = this.a10Logo.y = _TrinGame.visibleArea.bottom - 8;
};