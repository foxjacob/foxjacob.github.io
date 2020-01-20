 function ComicsState() {
     ComicsState.superclass.constructor.apply(this);

     this.back = null;
     this.frames = [];
     this.bNext = null;
     this.currentFrame = 0;
     this.framesLayer = null;
     this.a10Logo = null;
 }

extend(ComicsState, TrinState);

ComicsState.prototype.create = function() {
    ComicsState.superclass.create.apply(this);

    this.framesLayer = new TrinLayer();

    this.back = new TrinSprite();
    this.back.addAnimationFromCache("ComicsBack");

    this.bNext = new TrinButton(function() {
        _TrinGame.switchState(new LevelPackSelectState());
    }, "bNext", false);
    this.bNext.orign.x = this.bNext.width;
    this.bNext.orign.y = this.bNext.height;
    this.bNext.reset(632, _TrinGame.visibleArea.bottom - 8);

    var frame;
    for (var i = 0; i < 3; i++) {
        frame = new TrinSprite();
        frame.addAnimationFromCache("ComicsFrame" + i);
        frame.alpha = 0;
        this.frames[i] = frame;
        this.framesLayer.add(frame);
    }

    var a10Logo = new TrinButton(function() {
        //_TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.y = a10Logo.height;
    a10Logo.reset(8, _TrinGame.visibleArea.bottom - 8);
    this.a10Logo = a10Logo;

    this.add(this.back);
    this.add(this.framesLayer);
    this.add(this.bNext);
    this.add(a10Logo);
};

ComicsState.prototype.update = function() {
    ComicsState.superclass.update.apply(this);
    var frame = this.frames[this.currentFrame];
    if (frame !== undefined) {
        if (frame.alpha < 1) {
            var d = 0.025;
            if (_TrinGame.mouse.isDown()) {
                d *= 4;
            }
            frame.alpha = Math.min(frame.alpha + d, 1);
        } else {
            this.currentFrame++;
        }
        frame.x = frame.y = -10 * (1 - frame.alpha);
    }
};

ComicsState.prototype.resized = function() {
    this.bNext.y = this.a10Logo.y = _TrinGame.visibleArea.bottom - 8;
};