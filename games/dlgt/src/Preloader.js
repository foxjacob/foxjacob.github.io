TheTower.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

TheTower.Preloader.prototype = {


	preload: function () {
		var gradient = this.game.add.bitmapData(this.game.width, this.game.height);
        var grd = gradient.context.createLinearGradient(0,0,0,this.game.height);
        grd.addColorStop(0, "#000000");
        grd.addColorStop(1, "#000000");        
        // grd.addColorStop(0,"#333333");
        // grd.addColorStop(1,"#aaaaaa");
        gradient.context.fillStyle = grd;
        gradient.context.fillRect(0,0,this.game.width,this.game.height);

    	var bar = this.game.add.graphics(0,0);
		bar.beginFill(0xFFFFFF);
   		bar.drawRect(0,0, scaleValue(290), scaleValue(25));
    	bar.endFill();

		this.background = this.add.sprite(0, 0, gradient);
		this.preloadBar = this.add.sprite(scaleValue(10), scaleValue(250), bar.generateTexture());

        this.logo = this.add.sprite( this.game.width/2, scaleValue(140), 'logo');
        this.logo.anchor.set( 0.5, 0.5 );
        this.logo.inputEnabled = true;
        this.logo.events.onInputDown.add( this.gotoSite, this );

		bar.destroy();

		this.load.setPreloadSprite(this.preloadBar);

        if( scaleValue(10) != 10){
            this.load.atlasXML('sprites', 'assets/sprites@2x.png', 'assets/sprites@2x.xml');
            this.load.image('star', 'assets/Star@2x.png');
        }else{
            this.load.atlasXML('sprites', 'assets/sprites.png', 'assets/sprites.xml');
            this.load.image('star', 'assets/Star.png');
        }

        this.load.audio( "theme", ["assets/snd/theme.mp3"]);
        this.load.audio( "place", ["assets/snd/place.mp3"]);
        this.load.audio( "crash", ["assets/snd/crash.mp3"]);
        this.load.audio( "perfect", ["assets/snd/perfect.mp3"]);
	},

	create: function () {
		//Phaser.Canvas.setSmoothingEnabled(this.game.context, true);

		if( localStorage["TheTower.version"] != 0.5 )
		{
			localStorage["TheTower.version"] = 0.5;
            localStorage["TheTower.sound"] = true;
            localStorage["TheTower.bestScore"] = 0;
            localStorage["TheTower.money"] = 0;
            localStorage["TheTower.lives"] = 0;
		}

        this.game.sndManager = new SoundManager( this.game, JSON.parse(localStorage["TheTower.sound"]) );
		
		this.preloadBar.cropEnabled = false;

		this.game.input.onDown.add( function() {
                //this.scale.startFullScreen(true);
        }, this);

        //this.game.state.start('Game', true, false);
	},

	update: function () {

        //this.cache.isSoundDecoded('theme')
		if(this.ready == false &&  this.cache.isSoundDecoded('theme'))
		{
			this.game.state.start('Game');
		}

	},

    gotoSite: function() {
        //window.open( 'http://m.softgames.de', '_blank');
        SG.redirectToPortal();
    }

};

function bestSizeForText( text, width, bold, startSize ){
	if( startSize == null )
		startSize = 30;
    var bold = "";
    if( bold )
        bold = "Bold ";
    var size = scaleValue(startSize);
    var style = {font: bold+size+"px Arial", fill: 0xffffff, align: "center" };
    var text = this.game.add.text( 0, 0, text, style);
    while( text.width > width ){
        size--;
        text.setStyle( {font: bold+size+"px Arial", fill: 0xffffff, align: "center" } );
        text.updateText();
    }
    var result = size;
    text.destroy();

    return result;
};

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
