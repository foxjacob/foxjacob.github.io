function	TrinRectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

TrinRectangle.prototype = {
    top: function() {
        return this.y;
    },
    left: function() {
        return this.x;
    },
    bottom: function() {
        return this.y + this.height;
    },
    right: function() {
        return this.x + this.width;
    },
    set: function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    },
    intersects: function(x, y, width, height) {
        if (width === undefined && height === undefined) {
            return (x > this.left() && x < this.right() && y > this.top() && y < this.bottom());
        }
        var t = y;
        var r = x + width;
        var b = y + height;
        var l = x;

        return (r > this.left() && l < this.right()) && (b > this.top() && t < this.bottom());
    },
    intersectsRect: function(rect) {
        return this.intersects(rect.x, rect.y, rect.width, rect.height);
    }
};