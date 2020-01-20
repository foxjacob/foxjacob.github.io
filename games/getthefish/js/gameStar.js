function GameStar(x, y) {
    GameStar.superclass.constructor.apply(this);
    this.addAnimationFromCache("GameStar");
    this.orign.x = this.width   / 2;
    this.orign.y = this.height  /  2;
    this.reset( ProductItem.prototype.fieldOffset.x + ProductItem.prototype.cellSize.x / 2 + ProductItem.prototype.cellSize.x * x,
                ProductItem.prototype.fieldOffset.y + ProductItem.prototype.cellSize.y / 2 + ProductItem.prototype.cellSize.y * y);
    this.state = this.STATE_PASSIVE;
    this.looped = false;
    this.blinkTimer = Math.random() * 90 + 90;
}

extend(GameStar, TrinSprite);

GameStar.prototype.update = function()  {
    GameStar.superclass.update.apply(this);
    switch (this.state) {
        case this.STATE_PASSIVE:
            break;
        case this.STATE_PICKED:
            this.scale.x = this.scale.y = this.scale.x + 0.1;
            this.alpha = Math.max(this.alpha - 0.05, 0);
            if (this.alpha === 0)   {
                this.kill();
            }
            break;
    }
    if (this.blinkTimer-- < 0)    {
        this.blinkTimer = Math.random() * 90 + 90;
        this.play();
    }
};

GameStar.prototype.pick = function()  {
    PlayState.prototype.stars++;
    this.state= this.STATE_PICKED;
};

GameStar.prototype.isPickable = function()  {
    return this.state === this.STATE_PASSIVE;
};

GameStar.prototype.STATE_PASSIVE    = 0;
GameStar.prototype.STATE_PICKED     = 1;