function CongratsState() {
    CongratsState.superclass.constructor.apply(this);

    this.back = null;
    this.cat = null;
    this.bNext = null;
    this.blank = null;
    this.a10Logo = null;
    this.moreGames = null;
}

extend(CongratsState, TrinState);

CongratsState.prototype.create = function() {
    CongratsState.superclass.create.apply(this);

    this.back = new TrinSprite();
    this.back.addAnimationFromCache("CompleteBack");

    this.cat = new TrinSprite();
    this.cat.addAnimationFromCache("CongratsCat");

    this.bNext = new TrinButton(function() {
        _TrinGame.switchState(new MainMenuState());
    }, "bNext", false);
    this.bNext.orign.x = this.bNext.width;
    this.bNext.orign.y = this.bNext.height;
    this.bNext.reset(632, _TrinGame.visibleArea.bottom - 8);

    this.blank = new TrinRectObject(0, 0, 640, 960, "#FFFFFF");

    var a10Logo = new TrinButton(function() {
        //_TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.y = a10Logo.height;
    a10Logo.reset(8, _TrinGame.visibleArea.bottom - 8);
    this.a10Logo = a10Logo;

    var bMoreGames = new TrinButton(function() {
        _TrinGame.SPIL_MOREGAMES.action();
    }, "bMoreGames", true);
    bMoreGames.orign.x = bMoreGames.width;
    bMoreGames.reset(632, _TrinGame.visibleArea.top + 8);
    this.moreGames = bMoreGames;

    this.add(this.back);
    this.add(this.cat);
    this.add(this.bNext);
    this.add(this.blank);
    this.add(this.a10Logo);
    this.add(this.moreGames);
};

CongratsState.prototype.update = function() {
    CongratsState.superclass.update.apply(this);
    this.blank.alpha = Math.max(this.blank.alpha - 0.1, 0);
};

CongratsState.prototype.resized = function() {
    this.bNext.y = this.a10Logo.y = _TrinGame.visibleArea.bottom - 8;
    this.moreGames.y = _TrinGame.visibleArea.top + 8;
};