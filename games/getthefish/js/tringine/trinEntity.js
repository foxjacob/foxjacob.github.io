function TrinEntity() {
    TrinEntity.superclass.constructor.apply(this);
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.orign = {x: 0, y: 0};
    this.bounds = new TrinRectangle(0, 0, 0, 0);
    this.boundsOffset = {left:0,top:0,right:0, bottom:0};
    this.scale = {x: 1, y: 1};
}

extend(TrinEntity, TrinBasic);

TrinEntity.prototype.destroy = function() {
    TrinEntity.superclass.destroy.apply(this);
    this.orign  = null;
    this.bounds = null;
    this.scale = null;
};
TrinEntity.prototype.update = function() {
    TrinEntity.superclass.update.apply(this);
};
TrinEntity.prototype.draw = function(context) {
    TrinEntity.superclass.draw.apply(this, [context]);
};
TrinEntity.prototype.kill = function() {
    TrinEntity.superclass.kill.apply(this);
};
TrinEntity.prototype.revive = function() {
    TrinEntity.superclass.revive.apply(this);
};
TrinEntity.prototype.hitTest = function(x, y) {
    TrinEntity.superclass.hitTest.apply(this);
    return this.bounds.intersects(x, y);
};
TrinEntity.prototype.updateBounds = function() {
    this.bounds.set(this.x - this.orign.x + this.boundsOffset.left, 
                    this.y - this.orign.y + this.boundsOffset.top, 
                    this.width - this.boundsOffset.right - this.boundsOffset.left, 
                    this.height - this.boundsOffset.bottom - this.boundsOffset.top);
};
TrinEntity.prototype.move = function(x, y) {
    this.reset(this.x + x, this.y + y);
};
TrinEntity.prototype.reset = function(x, y) {
    this.x = x;
    this.y = y;
    this.updateBounds();
};