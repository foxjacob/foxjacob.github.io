PartGenerator = function (game, width, height, partIndex) {
    Phaser.Sprite.call(this, game, 0, 0 );
    game.add.existing(this);
    this.anchor.set( 0, 1 );


    var myInd = partIndex%2;
    if( width < scaleValue(60))
        myInd = 1; 

    var renderGroup = this.game.add.group();

    this.offsetX = 0;
    var additionalWidth = 0;
    if( partIndex % 10 == 0 ){
        var left = renderGroup.create(scaleValue(2), 0,'sprites','Flag');
        left.anchor.set(0,0);        
        var right = renderGroup.create(width+left.width*2-scaleValue(6), 0,'sprites','Flag');
        right.anchor.set(0,0);
        right.scale.set(-1,1);
        this.offsetX = left.width - scaleValue(2);
        additionalWidth = left.width*2 - scaleValue(4);
    }

    var renderTex = this.game.add.renderTexture( width+additionalWidth, height );
    this.loadTexture( renderTex );

    var shadowSize = width/8;
    if(shadowSize < scaleValue(5))
        shadowSize =scaleValue(5);
    if( myInd == 1 )
    {   
        var left = renderGroup.create( this.offsetX, 0, 'sprites', 'part_1_1' );

        var center = renderGroup.create( this.offsetX + left.width, 0, 'sprites', 'part_1_2');
        center.scale.set( width-left.width*2, 1 );

        var right = renderGroup.create( this.offsetX + width - left.width, 0, 'sprites', 'part_1_1' );
        right.anchor.set( 1, 0);
        right.scale.set( -1, 1 );

        var offset = scaleValue(5);
        var size = scaleValue(10);
        var num = parseInt( (width - offset*2) / size );
        var total = num * size;
        for( var i = 0; i < num; i++ ){
            var zig = renderGroup.create( this.offsetX+offset+i*size, scaleValue(18), 'sprites', 'Zig');
            zig.scale.set( 0.7, 0.7 );
        }

        // sp.scale.set( width, 1 );
        // shadowSize = scaleValue(20);
        // var sp = renderGroup.create( this.offsetX, 0, 'sprites', 'partBase1' );
        // sp.scale.set( width, 1 );

        // var spacing = scaleValue(8)
        // var partWidth = scaleValue(26);
        // var space = width - shadowSize*2;
        // var parts = parseInt( space/(partWidth+spacing) );
        // var freeSpace = space - (parts * (partWidth+spacing));

        // for( var i = 0; i < parts; i++) {
        //     var part = renderGroup.create( this.offsetX+shadowSize + freeSpace/2+scaleValue(3) + spacing/2 + i*(partWidth+spacing), scaleValue(1), 'sprites', 'partBase2Window' );
        // }

        // var leftPart = renderGroup.create( this.offsetX+shadowSize/2, scaleValue(1), 'sprites', 'partBase2Window' );
        // leftPart.anchor.set( 0.5, 0 );
        // leftPart.scale.set( 0.6, 1 );

        // var rightPart = renderGroup.create( this.offsetX+width-shadowSize/2, scaleValue(1), 'sprites', 'partBase2Window' );
        // rightPart.anchor.set( 0.5, 0 );
        // rightPart.scale.set( 0.6, 1 );
    }
    else if( myInd == 0)
    {
        // objects
        var numOfObjects = parseInt(width / scaleValue(30)) ;
        for( var i = 0; i < numOfObjects; i++ ){
            var object_index = this.game.rnd.integerInRange(1, 5);
            var obj = renderGroup.create(this.game.rnd.integerInRange(this.offsetX+scaleValue(10), this.offsetX+width-scaleValue(10)), 0, 'sprites', 'Object_'+object_index);
            if( object_index != 4 ){
                obj.y = scaleValue(32) - obj.height;
            }
            obj.scale.set( 1.2, 1.2 );
        }

        // generator
        var size = scaleValue(17);
        var halfWidth = width / 2;
        var x = this.offsetX + halfWidth;
        while( x > this.offsetX ){
            if( x-size <= this.offsetX) {
                var sp = renderGroup.create( this.offsetX, 0, 'sprites', 'part_2' );    
            }else
                var sp = renderGroup.create( (x - size), 0, 'sprites', 'part_2' );

            x-=size;
        }

        var x = this.offsetX + halfWidth;
        while( x < this.offsetX+width ){
            var sp = renderGroup.create( x, 0, 'sprites', 'part_2' );

            if( x+size >= this.offsetX+width-scaleValue(15) ){
                var sp = renderGroup.create( this.offsetX+width - sp.width, 0, 'sprites', 'part_2' );   
                break; 
            }

            x+=size;
        }

        // var sp = renderGroup.create( this.offsetX, 0, 'sprites', 'partBase2' );
        // sp.scale.set( width,1  );

        // var cut1 = renderGroup.create( this.offsetX,0, 'sprites', 'partBase1A');
        // var long1 = renderGroup.create( this.offsetX+cut1.width-scaleValue(1),0, 'sprites', 'partBase1B');
        // long1.scale.set( shadowSize-cut1.width+scaleValue(1), 1 );

        // var cut2 = renderGroup.create( this.offsetX+shadowSize-scaleValue(1),0, 'sprites', 'partBase1A');
        // var long2 = renderGroup.create( cut2.x+cut2.width-scaleValue(1),0, 'sprites', 'partBase1B');
        // long2.scale.set( width-shadowSize-cut2.width+scaleValue(2), 1 );

        // var spacing = scaleValue(17)
        // var partWidth = scaleValue(20);
        // var space = width - shadowSize*2;
        // var parts = parseInt( space/(partWidth+spacing) );
        // var freeSpace = space - (parts * (partWidth+spacing));

        // for( var i = 0; i < parts; i++) {
        //     var part = renderGroup.create( this.offsetX+shadowSize + freeSpace/2 + spacing/2 + i*(partWidth+spacing), scaleValue(16), 'sprites', 'partBase1Window' );
        // }

        // var leftPart = renderGroup.create( this.offsetX+shadowSize/2, scaleValue(16), 'sprites', 'partBase1Window' );
        // leftPart.anchor.set( 0.5, 0 );
        // leftPart.scale.set( shadowSize/scaleValue(30), 1 );

        // var rightPart = renderGroup.create( this.offsetX+width-shadowSize/2, scaleValue(16), 'sprites', 'partBase1Window' );
        // rightPart.anchor.set( 0.5, 0 );
        // rightPart.scale.set( shadowSize/scaleValue(30), 1 );

    }

    // var whiteAlpha = renderGroup.create(this.offsetX, 0, 'sprites', 'partAlphaWhite');
    // whiteAlpha.scale.set( shadowSize, 1 );

    // var blackAlpha = renderGroup.create(this.offsetX+width, 0, 'sprites', 'partAlphaBlack');
    // blackAlpha.scale.set( shadowSize, 1 );
    // blackAlpha.anchor.set( 1, 0 );

	renderTex.renderXY( renderGroup, 0 ,0 );
    renderGroup.destroy( true );

};

PartGenerator.prototype = Object.create(Phaser.Sprite.prototype);
PartGenerator.prototype.constructor = PartGenerator;

var p = PartGenerator.prototype;


p.goAway = function() {
    var tween = this.game.add.tween( this );
    var rnd = this.game.rnd.integerInRange( 0, 1 );
    var targetX = scaleValue(320);
    if( rnd == 1 )
        targetX = -this.width;
    tween.to( {x: targetX}, 400, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(function(){
        this.destroy();
    }, this);
};

