function TrinRectObject(x, y, width, height, color) {
    if (x === undefined) {
        x = 0;
    }
    if (y === undefined) {
        y = 0;
    }
    if (width === undefined) {
        width = 10;
    }
    if (height === undefined) {
        height = 0;
    }
    if (color === undefined) {
        color = "#ffffff";
    }
    TrinRectObject.superclass.constructor.apply(this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.active = this.exists = this.visible = true;
    this.alpha = 1;
}

extend(TrinRectObject, TrinEntity);

TrinRectObject.prototype.update = function() {
    TrinRectObject.superclass.update.apply(this);
};

TrinRectObject.prototype.draw = function(context) {
    TrinRectObject.superclass.draw.apply(this, [context]);
    context.beginPath();
    context.fillStyle = this.color;
    context.globalAlpha = this.alpha;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.stroke();
};

TrinRectObject.prototype.reset = function(x, y, color) {
    TrinRectObject.superclass.reset.apply(this, [x, y]);
    this.color = color;
};

TrinRectObject.prototype.intersects = function(x, y, w, h) {
    var rect = new TrinRectangle(this.x, this.y, this.width, this.height);
    return rect.intersects(x, y, w, h);
};