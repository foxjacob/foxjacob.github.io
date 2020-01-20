function SplashState() {
    SplashState.superclass.constructor.apply(this);
    this.timer = 100;
}

extend(SplashState, TrinState);

SplashState.prototype.create = function() {
    SplashState.superclass.create.apply(this);

    var back = new TrinSprite();
    back.addAnimationFromCache("ComicsBack");

    var a10Logo = new TrinButton(function() {
        _TrinGame.SPIL_SPLASH.action();
    }, "A10Splash", true);
    a10Logo.orign.x = a10Logo.width / 2;
    a10Logo.orign.y = a10Logo.height / 2;
    a10Logo.reset(320, 480);

    this.add(back);
    this.add(a10Logo);
};

SplashState.prototype.update = function() {
    SplashState.superclass.update.apply(this);
    this.timer--;
    if (this.timer <= 0)    {
        _TrinGame.switchState(new MainMenuState());
    }
};