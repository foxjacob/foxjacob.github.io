function TrinAnimation(img, name) {
    if (name === undefined) {
        name = "noname";
    }
    this.image = img;
    this.frames = [];
    this.name = name;
    this.totalFrames = 0;
    this.width = 0;
    this.height = 0;
}

TrinAnimation.prototype = {
    TYPE_IMAGE: 0,
    TYPE_ANIMATION: 1,
    IMAGES: [],
    ANIMATIONS: [],
    addImage: function(img) {
        if (this.IMAGES[img.info.name] === undefined) {
            this.IMAGES[img.info.name] = img;
        } else {
            console.log("Image with name " + img.info.name + " is already exists.");
        }
    },
    makeAnimation: function(imgName, name, frameWidth, frameHeight, frames) {
        var img = this.IMAGES[imgName];
        if (img === undefined || img === null || name === undefined) {
            _TrinGame.log("No such loaded image \"" + imgName + "\"");
            return;
        }
        if (frameWidth === undefined) {
            frameWidth = img.width;
        }
        if (frameHeight === undefined) {
            frameHeight = img.height;
        }
        if (frames === undefined || frames.length === 0) {
            frames = [0];
        }
        var animation = new TrinAnimation(img, name);
        var rows = Math.floor(img.height / frameHeight);
        var columns = Math.floor(img.width / frameWidth);
        for (var i = 0; i < frames.length; i++) {
            var frameNum = frames[i];
            var frame = new TrinRectangle((frameNum % columns) * frameWidth, Math.floor(frameNum / columns) * frameHeight, frameWidth, frameHeight);
            animation.frames.push(frame);
        }
        animation.totalFrames = animation.frames.length;
        this.ANIMATIONS[name] = animation;
    },
    getAnimation: function(name) {
        if (TrinAnimation.prototype.ANIMATIONS[name] === undefined) {
            console.log("No such animation with name \"" + name + "\".");
            return null;
        }
        return TrinAnimation.prototype.ANIMATIONS[name];
    }
};

TrinAnimation.prototype.destroy = function() {
    this.frames = null;
    this.image = null;
};