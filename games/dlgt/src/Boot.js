TheTower = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check TheTower.orientated in internal loops to know if it should pause or not */
    orientated: false

};

TheTower.Boot = function (game) {
};

TheTower.Boot.prototype = {

    init: function () {
        canvas = document.getElementById('game'),
        canvas.style.opacity = 0.99;

        SG_Hooks.setOrientationHandler( this.scale.checkOrientationState);  // Provide a function f, that handles orientation changes for your game.
        SG_Hooks.setResizeHandler( this.gameResized ); // Provide the function f, that handles screen resizing for your game.

        this.game.input.maxPointers = 2;
        this.game.stage.disableVisibilityChange = true;

        this.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.leaveFullScreen.add( this.exitFullscreen, this);
        this.scale.enterFullScreen.add( this.enterFullscreen, this);

        if (this.game.device.desktop) 
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(320,480,1280,1920);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }
        else 
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(320,480,768,1024);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(false, true);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
            this.scale.setShowAll();
            this.scale.refresh();
        }
    },

    preload: function () {
        if( scaleValue(10) != 10){
            this.load.image('logo', 'assets/softgames@2x.png');
        }else{
            this.load.image('logo', 'assets/softgames.png');
        }
    },

    update: function(){
        this.state.start('Preloader');
    },

    exitFullscreen: function() {
        var self = this;
        setTimeout(function() {
                self.scale.setShowAll();
                self.scale.refresh();
        }
        , 500);
    },

    enterFullscreen: function() {
        var self = this;
        setTimeout(function() {
            self.scale.setShowAll();
            self.scale.refresh();
        }
        , 500);
    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.

    },

    enterIncorrectOrientation: function () {

        TheTower.orientated = false;

        document.getElementById('orientation').style.display = 'block';
        document.getElementById('game').style.display = 'none';

    },

    leaveIncorrectOrientation: function () {

        TheTower.orientated = true;

        document.getElementById('orientation').style.display = 'none';
        document.getElementById('game').style.display = 'block';

        var self = this;
        setTimeout(function() {
                self.scale.setShowAll();
                self.scale.refresh();
            }
        , 500);

    }

};

scaleValue = function(value){
    var scale = game.width / 320;
    return value * scale;
};

originalValue = function(value){
    var scale = game.width / 320;
    return value/scale;
};

