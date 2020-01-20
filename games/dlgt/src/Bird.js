Bird = function (game) {
    Phaser.Sprite.call(this, game, 0, 0, 'sprites', 'Bird' );
    game.add.existing(this);

    this.anchor.set( 0.5, 1 );

    this.inFly = false;
    this.speed = 3;

    this.tween = this.game.add.tween( this );
    this.tween.onComplete.add( this.flyEnd, this );

    this.path = [];
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

var p = Bird.prototype;

p.flyTo = function( x, y ){
    this.path.push( {x:x, y:y} );
    if( this.inFly )
        return;

    this.inFly = true;
    if( x > this.x )
        this.scale.set( 0.7, 0.7 );
    else
        this.scale.set( -0.7, 0.7 );

    this.tween._parent = null;
    this.tween._lastChild = null;
    this.tween.to( {x: x, y:y}, this.getTime( x, y ), Phaser.Easing.Sinusoidal.Out, true, 500 );
};

p.getLastPointY = function() {
    return this.path[this.path.length-1].y;
};

p.flyBack = function() {
    this.path.pop();
    var point = this.path.pop();
    var x = point.x;
    var y = point.y;

    this.path.push( {x:x, y:y} );

    this.inFly = true;
    if( x > this.x )
        this.scale.set( 0.3, 0.3 );
    else
        this.scale.set( -0.3, 0.3 );

    this.tween._parent = null;
    this.tween._lastChild = null;
    this.tween.to( {x: x, y:y}, this.getTime( x, y ), Phaser.Easing.Sinusoidal.Out, true, 500 );
};

p.flyToPontUnder = function( y ){
    for( var i = this.path.length-1; i >=0; i-- ){
        if( this.path[i].y < y ){
            this.path.pop()
        }else{
            var x = this.path[i].x;
            var y = this.path[i].y;
            this.inFly = true;
            if( x > this.x )
                this.scale.set( 0.3, 0.3 );
            else
                this.scale.set( -0.3, 0.3 );

            this.tween._parent = null;
            this.tween._lastChild = null;
            this.tween.to( {x: x, y:y}, this.getTime( x, y ), Phaser.Easing.Sinusoidal.Out, true, 500 );

            break;
        }
    }
};

p.flyEnd = function() {
    this.inFly = false;
};


p.getTime = function( x, y ){
    return Phaser.Point.distance( new Phaser.Point(this.x, this.y), new Phaser.Point(x, y) ) * this.speed;
};