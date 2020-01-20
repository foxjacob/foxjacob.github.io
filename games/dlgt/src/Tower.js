Tower = function (game) {
    this.game = game;
    Phaser.Group.call(this, game);

    this.base = this.create( this.game.width/2, scaleValue(402), 'sprites', 'Base_2');
    this.base.anchor.set( 0.5, 1 );

    this.currenHeight = this.base.y - this.base.height + scaleValue(11); 
    this.brickHeight = scaleValue(32);
    this.cutValue = scaleValue(15);
    this.counter = 1;

    //this.lastPartInfo = { x: this.base.x-this.base.width/2, width: this.base.width};

    this.parts = [ { x: this.base.x-scaleValue(174)/2, width: this.base.width + scaleValue(11)} ];

    this.emitter = game.add.emitter(0, 0, 40);

    this.emitter.makeParticles('star');
    this.emitter.minParticleSpeed.set(0, -100);
    this.emitter.maxParticleSpeed.set(0, -200);
    this.emitter.setRotation(-30, 30);
    this.emitter.setAlpha(0.3, 0.8);
    this.emitter.setScale(0.5, 0.5, 0.7, 0.7);
    this.emitter.gravity = 500;
};

Tower.prototype = Object.create(Phaser.Group.prototype);
Tower.prototype.constructor = Tower;

var p = Tower.prototype;

p.placeBlock = function( x, width) {

    var cost = 0;
    var origX = x;

    lastPartInfo = this.parts[ this.parts.length - 1 ];
    var placeX = x;
    var deltaX = Math.abs(x-lastPartInfo.x);
    var birdPlace = 0;
    if( deltaX <= scaleValue(3) ){
        // идеально!
        placeX = lastPartInfo.x;
        cost = 10;
    }else if( deltaX >= scaleValue(4) && deltaX <= scaleValue(6) ) {
        // хорошо
        cost = 5;
    }else{
        // ну а тут пора обрезать
        // если вылезло слева

        var lives = JSON.parse( localStorage["TheTower.lives"] );
        var saveThis = false;
        if( x < lastPartInfo.x ){
            // не даем отризать маленькие куски
            if( deltaX < this.cutValue ){
                x = x-(this.cutValue - deltaX);
                deltaX = this.cutValue;
            }

            placeX = x+deltaX;
            width -= deltaX;

            
            // проверим жизни и смерть
            if( parseInt(width) <=0 && lives > 0 ){
                saveThis = true;
                width += deltaX;
                placeX = origX;
                lives--;
                localStorage["TheTower.lives"] = lives;
                this.game.gui.updateLives( this.lives );
            }else{            
                birdPlace = (lastPartInfo.x + lastPartInfo.width);
                this.fallBrick( x, this.currenHeight - this.brickHeight, deltaX );
            }
        }
        // если вылезло справа
        else{
            // не даем отризать маленькие куски
            if( deltaX < this.cutValue ){
                x = x+(this.cutValue - deltaX);
                deltaX = this.cutValue;
            }

            placeX = x;
            width -= deltaX;

            // проверим жизни и смерть
            if( parseInt(width) <=0 && lives > 0 ){ 
                saveThis = true;
                width += deltaX;
                placeX = origX;
                lives--;
                localStorage["TheTower.lives"] = lives;
                this.game.gui.updateLives( this.lives );
            }else{
                birdPlace = lastPartInfo.x;
                this.fallBrick( x+width, this.currenHeight - this.brickHeight, deltaX );
            }
        }
        cost = 1;
    }


    width = parseInt( width );
    if( width > 0 || saveThis ){
        var part = new PartGenerator( this.game, width, this.brickHeight, this.counter);
        part.x = placeX - part.offsetX;
        part.y = this.currenHeight;
        this.add( part );



        this.parts.push( {x:placeX,  width:width} );

        if( this.parts.length == 2 )
            this.bringToTop( this.children[0] );

        if( cost == 10 )
            this.placePerfect(x+width/2, width);
        else if( cost == 5 )
            this.placeGood(x+width/2, width);

        var mult = parseInt(this.counter/10)+1;
        cost *= mult;

        this.counter++;
        this.currenHeight -= this.brickHeight;
    }
    if( width<= 0)
        birdPlace = 0;

    return [width, cost, birdPlace];
};

p.backToSavePoint = function() {
    var steps = this.counter % 10;
    for( var i = 0; i < steps-1; i++ ){
        if( this.counter > 0)
            this.counter--;
        this.parts.pop();
        this.getTop().destroy();
        this.currenHeight += this.brickHeight;
    }

};


p.undoLastBlock = function() {
    if( this.counter > 0)
        this.counter--;
    this.parts.pop();
    var topPart = this.getTop();
    this.remove( topPart );
    this.game.world.add( topPart );
    topPart.goAway();
    this.currenHeight += this.brickHeight;
};

p.placeGood = function(x, width) {
    this.game.sndManager.playPerfect();
    var style_perfect = {font:'Bold '+scaleValue(30)+'px Arial', fill: '#ffffff', align: 'center'};
    var labelPerfect = this.game.add.text( x, this.currenHeight+scaleValue(5), Lang[lang][2], style_perfect );
    labelPerfect.anchor.set( 0.5, 0 );
    labelPerfect.tween = this.game.add.tween( labelPerfect );
    labelPerfect.tween.onComplete.add( function(){this.destroy()}, labelPerfect );
    labelPerfect.tween.to({alpha:0}, 600, null, true, 300);

    this.emitter.x = x;
    this.emitter.y = this.currenHeight;
    this.emitter.width = width;
    this.emitter.start(true, 1000, null, 10);
};

p.placePerfect = function(x, width) {
    this.game.sndManager.playPerfect();
    var style_perfect = {font:'Bold '+scaleValue(30)+'px Arial', fill: '#ffd700', align: 'center'};
    var labelPerfect = this.game.add.text( x, this.currenHeight+scaleValue(5), Lang[lang][1], style_perfect );
    labelPerfect.anchor.set( 0.5, 0 );
    labelPerfect.tween = this.game.add.tween( labelPerfect );
    labelPerfect.tween.onComplete.add( function(){this.destroy()}, labelPerfect );
    labelPerfect.tween.to({alpha:0}, 600, null, true, 300);

    this.emitter.x = x;
    this.emitter.y = this.currenHeight;
    this.emitter.width = width;
    this.emitter.start(true, 1000, null, 10);
};

p.fallBrick = function(x, y, width){
    var gr = this.game.add.graphics();
    gr.beginFill(0xfcc8a6);
    gr.drawRect( 0, 0, width, this.brickHeight );
    gr.endFill();
    gr.boundsPadding = 0;

    var brick = this.game.add.sprite( x, y, gr.generateTexture() );
    var tween = this.game.add.tween( brick );
    tween.onComplete.add( function() {
        this.destroy();
    }, brick );
    tween.to({alpha:0.2, y:brick.y + scaleValue(100), angle: 10}, 600, null, true );

    gr.destroy();
};