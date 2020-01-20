HiddingButton = function ( game, group, x, y, hideX, hideY, art, price ) {
    Phaser.Group.call(this, game );
    group.add( this );
    this.x = x;
    this.y = y;


    this.scale.set( 0.8, 0.8 );

    this.price = price;
    this.sprite = this.create(0,0, 'sprites', art );
    this.sprite.inputEnabled = true;
    this.events = this.sprite.events;

    if( price ){
    	var style_price = {font:'Bold '+scaleValue(20)+'px Arial', fill: '#ffffff', align: 'right'};
    	this.labelPrice = this.game.add.text( this.width+scaleValue(5) , this.height-scaleValue(10), ''+price, style_price, this );
    	this.labelPrice.anchor.set( 1, 0 );
    }

    this.scaleTween = this.game.add.tween( this.scale );

    this.hideX = hideX;
    this.hideY = hideY;
    this.origX = x;
    this.origY = y;
    this.tween = this.game.add.tween( this );
};

HiddingButton.prototype = Object.create(Phaser.Group.prototype);
HiddingButton.prototype.constructor = HiddingButton;

var p = HiddingButton.prototype;

p.touch = function() {
	this.scaleTween._parent = null;
	this.scaleTween._lastChild = null;
	this.scaleTween.to( {x:0.7, y:0.7}, 50, Phaser.Easing.Quadratic.Out, true, 0, 0, true);
};

p.setLabel = function( text ){
	var style_name = {font:'Bold '+scaleValue(12)+'px Arial', fill: '#ffffff', align: 'center'};
	this.labelName= this.game.add.text( this.sprite.width/2 , -scaleValue(4), text, style_name, this );
	this.labelName.anchor.set( 0.5, 1 );
};

p.hide = function( animate, playTime ) {
	var time = 100;
	if( !animate ){
		this.x = this.hideX;
		this.y = this.hideY;
		this.visible = false;
		return;
	}
	if( playTime!=null )
		time = playTime;

	this.sprite.inputEnabled = false;
	this.tween._parent = null;
	this.tween._lastChild = null;
	this.tween.onComplete.removeAll();
	this.tween.onComplete.add( function(){this.visible = false;}, this );
	this.tween.to( {x: this.hideX, y:this.hideY}, time, Phaser.Easing.Sinusoidal.Out, true );
};  

p.show = function( animate, playTime  ) {
	var time = 100;
	if( !animate ){
		this.x = this.origX;
		this.y = this.origY;
		this.visible = true;
		return;
	}
	if( playTime!=null )
		time = playTime;

	this.visible = true;
	this.sprite.inputEnabled = true;
	this.tween._parent = null;
	this.tween._lastChild = null;
	this.tween.onComplete.removeAll();
	this.tween.to( {x: this.origX, y:this.origY}, time, Phaser.Easing.Sinusoidal.In, true );
};