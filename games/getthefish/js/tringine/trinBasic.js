function TrinBasic() {
    this.active = true;
    this.exists = true;
    this.visible = true;
    this.parent = null;
    this.alive = true;
}

TrinBasic.prototype.destroy = function() {
};
TrinBasic.prototype.update = function() {
};
TrinBasic.prototype.draw = function(context) {
};
TrinBasic.prototype.kill = function() {
    this.exists = false;
    this.alive = false;
};
TrinBasic.prototype.revive = function() {
    this.exists = true;
    this.alive = true;
};
TrinBasic.prototype.hitTest = function(x, y) {
};