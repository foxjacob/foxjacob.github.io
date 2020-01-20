function TrinSprite(animation) {
    TrinSprite.superclass.constructor.apply(this);
    this.animations = [];
    this.currentAnimation = null;
    this.currentFrame = 0;
    this.animationProgress = 0;
    this.animationSpeed = 30;
    this.alpha = 1;
    this.looped = true;
    this.cutArea = new TrinRectangle(0, 0, 0, 0);
    if (animation !== undefined)    {
        this.addAnimationFromCache(animation);
    }
}

extend(TrinSprite, TrinEntity);

TrinSprite.prototype.update = function() {
    TrinSprite.superclass.update.apply(this);
    if (this.currentAnimation !== null) {
        var prevFrame = this.currentFrame;
        this.animationProgress += 1 / (_TrinGame.frameRate / this.animationSpeed);
        if (this.animationProgress >= this.currentAnimation.frames.length) {
            if (this.looped) {
                this.animationProgress -= Math.floor(this.animationProgress);
            } else {
                this.animationProgress = this.currentAnimation.frames.length - 1;
            }
        }
        this.currentFrame = Math.floor(this.animationProgress);
        if (this.currentFrame !== prevFrame) {
            this.updateSize();
        }
    }
};

TrinSprite.prototype.draw = function(context) {
    TrinSprite.superclass.draw.apply(this, [context]);
    var animation = this.currentAnimation;
    if (animation !== null && this.visible && this.exists) {
        var frame = animation.frames[Math.floor(this.currentFrame)];
        var sx = frame.x + this.cutArea.x;
        var sy = frame.y + this.cutArea.y;
        var sw = frame.width - this.cutArea.width - this.cutArea.x;
        var sh = frame.height - this.cutArea.height - this.cutArea.y;
        var dx = this.x + this.cutArea.x - this.orign.x * this.scale.x;
        var dy = this.y + this.cutArea.y - this.orign.y * this.scale.y;
        var dw = (frame.width - this.cutArea.width - this.cutArea.x) * this.scale.x;
        var dh = (frame.height - this.cutArea.height - this.cutArea.y) * this.scale.y;
        context.globalAlpha = this.alpha;

        if (sw > 0 && sh > 0 && dw > 0 && dh > 0) {
            context.drawImage(animation.image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
    //this.drawBounds(context);
};

TrinSprite.prototype.drawBounds = function(context) {
    context.beginPath();
    context.rect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    context.stroke();
};

TrinSprite.prototype.addAnimationFromCache = function(name, switchToThis) {
    if (switchToThis === undefined) {
        switchToThis = true;
    }
    var animation = TrinAnimation.prototype.getAnimation(name);
    if (animation === null) {
        return;
    }
    this.animations[name] = animation;
    if (switchToThis) {
        this.switchAnimation(name);
    }
};

TrinSprite.prototype.switchAnimation = function(name) {
    var animation = this.animations[name];
    if (animation === undefined || animation === null) {
        console.log("Can't switch to animation. No such added animation with name \"" + name + "\"");
        return;
    }
    this.currentAnimation = animation;
    this.updateSize();
};

TrinSprite.prototype.updateSize = function() {
    var frame = this.currentAnimation.frames[Math.floor(this.currentFrame)];
    this.width = frame.width * this.scale.x;
    this.height = frame.height * this.scale.y;
    this.updateBounds();
};

TrinSprite.prototype.updateBounds = function() {
    this.bounds.set(this.x - this.orign.x * this.scale.x + this.boundsOffset.left, 
                    this.y - this.orign.y * this.scale.y + this.boundsOffset.top,
                    this.width - this.boundsOffset.right, 
                    this.height - this.boundsOffset.bottom);
};

TrinSprite.prototype.destroy = function() {
    TrinSprite.superclass.destroy.apply(this);
    this.animations = null;
    this.currentAnimation = null;
    this.cutArea = null;
};

TrinSprite.prototype.hitTest = function(x, y, d) {
    TrinSprite.superclass.hitTest.apply(this);
    var animation = this.currentAnimation;
    if (animation === null) {
        return false;
    }
    if (d === undefined) {
        d = 0;
    }
    x -= this.x;
    y -= this.y;
    var frame = animation.frames[this.currentFrame];

    var l = x - d;
    var r = x + d;
    var t = y - d;
    var b = y + d;

    if (l > this.bounds.right || r < this.bounds.left || t > this.bounds.bottom || b < this.bounds.top) {
        return false;
    }

    var image = TrinAnimation.prototype.IMAGES[animation.name];
    var canvas = document.createElement("Canvas");
    canvas.width = frame.width;
    canvas.height = frame.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
    var imageData;
    var cx = 0;
    var cy = 0;
    try {
        imageData = context.getImageData(frame.x, frame.y, frame.width, frame.height);
    } catch (e) {
        return true;
    }
    for (var i = -d; i <= d; i++) {
        for (var j = -d; j <= d; j++) {
            cx = x + j;
            cy = y + i;
            if (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
                if (imageData.data[(cy * frame.width + cx) * 4 + 3] > 0) {
                    return true;
                }
            }
        }
    }
    return false;
};

TrinSprite.prototype.isFinished = function() {
    return this.currentFrame === this.currentAnimation.frames.length - 1;
};

TrinSprite.prototype.play = function() {
    this.animationProgress = 0;
};