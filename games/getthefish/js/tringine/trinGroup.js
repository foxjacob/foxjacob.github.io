function TrinGroup(width, height) {
    TrinGroup.superclass.constructor.apply(this);
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
    this.group = new TrinLayer();
    this.width = width;
    this.height = height;
    this.updateBounds();
}

extend(TrinGroup, TrinEntity);

TrinGroup.prototype.add = function(entity) {
    this.group.add(entity);
};
TrinGroup.prototype.remove = function(entity) {
    this.group.remove(entity);
};
TrinGroup.prototype.draw = function(context) {
    TrinGroup.superclass.draw.apply(this, [context]);
    
    this.context.clearRect(0, 0, this.width, this.height);
    this.group.draw(this.context);
    
    var sx = 0;
    var sy = 0;
    var sw = this.width;
    var sh = this.height;
    var dx = this.x - this.orign.x * this.scale.x;
    var dy = this.y - this.orign.y * this.scale.y;
    var dw = this.width * this.scale.x;
    var dh = this.height * this.scale.y;
    context.drawImage(this.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
};