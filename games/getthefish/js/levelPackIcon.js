function LevelPackIcon(icon, text) {
    LevelPackIcon.superclass.constructor.apply(this, [icon.width, icon.height]);

    this.icon = icon;
    this.label = new TrinText(text);
    this.label.setStyle("font", this.fontBaseSize, true, "#FFFFFF");

    this.orign.x = this.icon.width / 2;
    this.orign.y = this.icon.height / 2;

    this.add(this.icon);
    this.add(this.label);

    this.isButton = this.icon instanceof TrinButton;
}

extend(LevelPackIcon, TrinGroup);

LevelPackIcon.prototype.update = function() {
    LevelPackIcon.superclass.update.apply(this);
    if (this.isButton) {
        if (this.bounds.intersects(_TrinGame.mouse.x, _TrinGame.mouse.y))    {
            this.icon.currentFrame = 1;
            if (_TrinGame.mouse.isReleased())   {
                if (this.icon.currentAnimation.frames.length > 2) {
                    this.icon.currentFrame = 2;
                } else {
                    this.icon.currentFrame = 0;
                }
                if (!this.icon.opensLink && this.icon.onClick !== undefined && this.icon.onClick !== null) {
                    this.icon.onClick();
                }
            }
        }   else {
            this.icon.currentFrame = 0;
        }
        if (this.icon.isHovered()) {
            this.label.y = 200 * this.icon.scale.y;
            this.label.x = 105 * this.icon.scale.x;
            this.label.setStyle("font", this.fontHoverSize, true);
        } else {
            this.label.y = 190 * this.icon.scale.y;
            this.label.x = 110 * this.icon.scale.x;
            this.label.setStyle("font", this.fontBaseSize, true);
        }
    }
};


LevelPackIcon.prototype.minIconScale = 0.6;
LevelPackIcon.prototype.fontBaseSize = 48;
LevelPackIcon.prototype.fontHoverSize = 56;