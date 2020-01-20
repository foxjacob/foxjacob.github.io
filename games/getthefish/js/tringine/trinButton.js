function TrinButton(onClick, animationName, opensLink) {
    TrinButton.superclass.constructor.apply(this);
    if (opensLink === undefined) {
        opensLink = false;
    }
    this.onClick = onClick;
    this.addAnimationFromCache(animationName);
    this.animationSpeed = 0;
    this.opensLink = opensLink;
    this.onCanvasClick = null;
    if (this.opensLink) {
        this.onCanvasClick = function(event) {
            var button = arguments.callee.button;
            if (button.onClick !== undefined && button.onClick !== null && button.active &&
                    button.bounds.intersects(_TrinGame.mouse.x, _TrinGame.mouse.y)) {
                button.onClick();
            }
        };
        this.onCanvasClick.button = this;
        if (_TrinGame.isMobile) {
            _TrinGame.canvas.addEventListener(this.touchEventName, this.onCanvasClick, false);
        } else {
            _TrinGame.canvas.addEventListener(this.clickEventName, this.onCanvasClick, false);
        }
    }
}

extend(TrinButton, TrinSprite);

TrinButton.prototype.update = function() {
    TrinButton.superclass.update.apply(this);
    if (this.active) {
        if (this.bounds.intersects(_TrinGame.mouse.x, _TrinGame.mouse.y)) {
            if (this.currentAnimation.frames.length > 1)    {
                this.currentFrame = 1;
            }
            if (_TrinGame.mouse.isReleased()) {
                if (this.currentAnimation.frames.length > 2) {
                    this.currentFrame = 2;
                } else {
                    this.currentFrame = 0;
                }
                if (!this.opensLink && this.onClick !== undefined && this.onClick !== null) {
                    this.onClick();
                }
            }
        } else {
            this.currentFrame = 0;
        }
        this.updateSize();
    }
};

TrinButton.prototype.clickEventName = "click";
TrinButton.prototype.touchEventName = "touchend";

TrinButton.prototype.destroy = function() {
    TrinButton.superclass.destroy.apply(this);
    if (this.opensLink) {
        if (_TrinGame.isMobile) {
            _TrinGame.canvas.removeEventListener(this.touchEventName, this.onCanvasClick, false);
        } else {
            _TrinGame.canvas.removeEventListener(this.clickEventName, this.onCanvasClick, false);
        }
    }
};

TrinButton.prototype.isHovered  =   function()  {
    return this.currentFrame > 0;
};
