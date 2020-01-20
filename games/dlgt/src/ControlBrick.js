ControlBrick = function (game) {
    Phaser.Sprite.call(this, game, 0, 0 );
    game.add.existing(this);

    this.anchor.set( 0, 1 );

    this.originalWidth = scaleValue(174);
    this.currentWidth = this.originalWidth;

    this.direction = 1;
    this.originalSpeed = scaleValue(1);
    this.currentSpeed = this.originalSpeed;

    this.loadTexture('sprites', 'part_1_2');
    this.remake();
};

ControlBrick.prototype = Object.create(Phaser.Sprite.prototype);
ControlBrick.prototype.constructor = ControlBrick;

var p = ControlBrick.prototype;

p.reset = function( y, newWidth ){
	if(newWidth==null)
		newWidth = this.originalWidth;
	this.currentWidth = newWidth;
	this.remake();
	this.y = y;
	var side = this.game.rnd.integerInRange( 0, 1);
	if( side == 0 ){
		this.x = 0;
		this.direction = 1;
	}else {
		this.x = this.game.width - this.width;
		this.direction = 1;
	}
};

p.resetHeadstart = function( y, newWidth ){
	if(newWidth==null)
		newWidth = this.originalWidth;
	this.currentWidth = newWidth;
	this.remake();
	this.y = y;
	var side = this.game.rnd.integerInRange( 0, 1);
	if( side == 0 ){
		this.x = scaleValue(40);
		this.direction = 1;
	}else {
		this.x = scaleValue(110);
		this.direction = -1;
	}
};

p.resize = function( newWidth ) {
	this.currentWidth = newWidth;
	this.remake();
};

p.remake = function() {
    this.scale.set( this.currentWidth, 1 );
};

p.update = function() {
	if( this.x <= 0 ){
		this.x = 0;
		this.direction = 1;
	}else if( this.x+this.width >= this.game.width ){
		this.x = this.game.width-this.width;
		this.direction = -1;
	}

	this.x += this.direction * this.currentSpeed * this.game.time.elapsed/10;
};
