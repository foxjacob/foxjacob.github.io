Cloud = function (game, x, y, speed, alpha, art) {
    Phaser.Sprite.call(this, game, x, y, 'sprites', 'Cloud_2' );
    game.add.existing(this);
    this.scale.set( 0.7, 0.7 );

    this.alpha = alpha;
    this.speed = speed;

    if( art )
    	this.tint = art;

    if( alpha < 0.6)
    	this.loadTexture( 'sprites', 'Cloud');
};

Cloud.prototype = Object.create(Phaser.Sprite.prototype);
Cloud.prototype.constructor = Cloud;

var p = Cloud.prototype;

p.update = function() {
	this.x += this.speed * (this.game.time.elapsed/100);
	if( this.x + this.width < 0 )
		this.x = this.game.width;

	// if( this.y > this.game.camera.y  && this.y < this.game.camera.y+this.game.height) {
	// 	this.visible = true;
	// }else{
	// 	this.visible = false;
	// }
};