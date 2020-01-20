 /*

Digitboard = function (game, value) {
    this.game = game;
    Phaser.Group.call(this, game);
};

Digitboard.prototype = Object.create(Phaser.Group.prototype);
Digitboard.prototype.constructor = Digitboard;

var p = Digitboard.prototype;


--------


FallBill = function (game, cache) {

    Phaser.Sprite.call(this, game, x, y, 'art', 'FallBill');
    game.add.existing(this);
};

FallBill.prototype = Object.create(Phaser.Sprite.prototype);
FallBill.prototype.constructor = FallBill;

var p = FallBill.prototype;


*/
var myScore;
function getText(){
        var text;
        switch(true){
            case myScore > 250 :
                return text = "你叠了个"+myScore+"层的塔\n登上人生巅峰，拯救全世界！";
            case myScore > 200 :
                return text = "你叠了个"+myScore+"层的塔\n前面不是珠穆朗玛峰吗？";
            case myScore > 180 :
                return text = "你叠了个"+myScore+"层的塔\n这是要登上人生巅峰的节奏啊！";
            case myScore > 150 :
                return text = "你叠了个"+myScore+"层的塔\n一览众山小啊！";
            case myScore > 120 :
                return text = "你叠了个"+myScore+"层的塔\n这个就是传说中的巴黎铁塔吗？";
            case myScore > 100 :
                return text = "你叠了个"+myScore+"层的塔\n这高度绝对跳一个死一个，不死不收钱！";
            case myScore > 80 :
                return text = "你叠了个"+myScore+"层的塔\n这个楼，可以搞定丈母娘了！";
            case myScore > 50 :
                return text = "你叠了个"+myScore+"层的塔\n轻轻抚摸着长颈鹿的头！";
            case myScore > 30 :
                return text = "你叠了个"+myScore+"层的塔\n终于不用仰视姚明了！";
            case myScore > 15 :
                return text = "你叠了个"+myScore+"层的塔\n和潘长江一样高了！";
            case myScore > 0 :
                return text = "你叠了个"+myScore+"层的塔\n快比郭敬明高了！";
            default: return text = "传说有人一不小心就能叠个几千层的塔!";
        }
};

TheTower.Game = function (game) {

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

};

TheTower.Game.prototype = {

    init: function ( ) {
    },

	create: function () {
        //updateShare(0);
        SG_Hooks.start();

        this.game.time.advancedTiming = true;
        //this.game.scale.startFullScreen();
        this.game.stage.backgroundColor = 0x184A56;

        var worldHeight = scaleValue(100000000);
        this.game.world.setBounds(0, -worldHeight, this.game.width, worldHeight+this.game.height );
        this.cameraPos = new Phaser.Point(0, 0);

        this.game.input.onDown.add( function() {
            //this.game.scale.startFullScreen();
        }, this);

        var colors = [
            [ '#319EFD' , '#94D2FC' ],
            [ '#8A3E0D' , '#319EFD' ],
            [ '#4B2308' , '#8A3E0D' ],
            [ '#194C58' , '#4B2308' ],
        ];
        this.backs = this.game.add.group();
        for( var i = 0; i <= 3; i++){
            var gradient = this.game.add.bitmapData(this.game.width, this.game.height);
            var grd = gradient.context.createLinearGradient(0,0,0,this.game.height);       
            grd.addColorStop(0, colors[i][0] );
            grd.addColorStop(1, colors[i][1] );
            gradient.context.fillStyle = grd;
            gradient.context.fillRect(0,0,this.game.width,this.game.height);

            var sp = this.backs.create( 0, i*scaleValue(-478), gradient);
        }

        this.rocks = this.game.add.sprite( 0, scaleValue(180), 'sprites', 'Rocks');
        this.hills = this.game.add.sprite( 0, scaleValue(270), 'sprites', 'Lands');


        this.cloudGroup = this.game.add.group();
        //spawn clouds
        for( var i = 0; i < 7;i++){
            this.cloudGroup.add( new Cloud(this.game, scaleValue(this.game.rnd.integerInRange(-30,320)) ,  scaleValue(this.game.rnd.integerInRange(-200,300)), -scaleValue(this.game.rnd.integerInRange(1,2)), this.game.rnd.integerInRange(40,100)/100) );
        }       
        for( var i = 0; i < 7;i++){
            this.cloudGroup.add( new Cloud(this.game, scaleValue(this.game.rnd.integerInRange(-30,320)) ,  scaleValue(this.game.rnd.integerInRange(-800,-300)), -scaleValue(this.game.rnd.integerInRange(1,2)), this.game.rnd.integerInRange(40,100)/100), '#ff0000' );
        }

        var style_big = {font:'Bold '+scaleValue(18)+'px Arial', fill: '#FFFFFF', align: 'center', wordWrap: true, wordWrapWidth: scaleValue(300) };
        this.bigText = this.game.add.text( this.game.width/2, scaleValue(220), Lang[lang][0], style_big );
        this.bigText.anchor.set( 0.5, 0.5 );


        this.ground = this.game.add.sprite( 0, scaleValue(480-78), 'sprites', 'Ground');
        this.ground.scale.set( 1, 1.4);

        this.record = this.game.add.sprite( this.game.width/2, 0 );

        this.trees = this.game.add.sprite( scaleValue(24), scaleValue(365), 'sprites', 'Trees')

        this.proxy = this.game.add.sprite( 0, 0 );
        this.proxy.fixedToCamera = true;
        this.proxy.scale.set( this.game.width, this.game.height );
        this.proxy.inputEnabled = true;
        this.proxy.events.onInputDown.add( this.placeBlock, this);

        this.controlBrick = new ControlBrick( this.game );
        this.tower = new Tower( this.game );
        this.controlBrick.reset( this.tower.currenHeight );

        this.game.gui = new GUI( this.game );
        this.game.gui.buttons.undo.events.onInputDown.add( this.undoPlace, this );
        this.game.gui.buttons.save.events.onInputDown.add( this.backToSavePoint, this );
        this.game.gui.buttons.again.events.onInputDown.add( this.playAgain, this );
        this.game.gui.soundIcon.events.onInputDown.add( this.switchSound, this );

        this.game.gui.buttons.headstart.events.onInputDown.add( this.buyHeadstart, this );
        this.game.gui.buttons.doubler.events.onInputDown.add( this.buyDoubler, this );
        this.game.gui.buttons.insurance.events.onInputDown.add( this.buyInsurance, this );

        this.game.gui.headstartCall.add( this.startHeadstart, this );


        this.score = 0;
        this.money = JSON.parse( localStorage["TheTower.money"] );
        this.updateStats();

        this.doubleMoney = false;
        this.lives = JSON.parse( localStorage["TheTower.lives"] );
        this.game.gui.updateLives( this.lives );
        if( this.lives >= 3 )
            this.game.gui.buttons.insurance.hide( false );   


        this.bird = new Bird( this.game );
        this.bird.flyTo( this.trees.x + scaleValue(10), this.trees.y );
        // Sounds

        this.game.sndManager.playTheme();

        this.bestScore = JSON.parse( localStorage["TheTower.bestScore"] );
        if( this.bestScore >= 4 ){
            var y = this.tower.base.y - this.tower.base.height - this.bestScore*this.tower.brickHeight;
            this.record.y = y;
            this.record.loadTexture(  'sprites', 'Record' );
            this.record.anchor.set( 0.5, 0 );
        }
	},

    placeBlock: function() {
        this.game.sndManager.playPlace();
        if( this.bigText.visible ) {
            this.bigText.alpha -= 0.2;
            if( this.bigText.alpha <= 0 )
                this.bigText.visible = false;
        }

        var info = this.tower.placeBlock( this.controlBrick.x, this.controlBrick.width );
        if( info[2] != 0 ){
            this.bird.flyTo( info[2], this.tower.currenHeight + this.tower.brickHeight )
            this.game.sndManager.playCrash();
            this.controlBrick.currentSpeed += 0.3;
            if(this.controlBrick.currentSpeed > 5 )
                this.controlBrick.currentSpeed = 5;
        }

        if( info[0] <= 0) {
                this.gameOver();

        }else{
            this.lives = JSON.parse( localStorage["TheTower.lives"] );
            this.game.gui.updateLives( this.lives );
            if( !this.game.gui.buttons.undo.visible && this.tower.parts.length >= 3 )
                this.game.gui.buttons.undo.show( true );
            this.controlBrick.reset( this.tower.currenHeight, info[0] );

            var addon = '';
            var multi = 1;
            if( this.doubleMoney ){
                addon = ' X2';
                multi = 2;
            }
            this.score++;
            this.money+=info[1]*multi;
            this.updateStats();
            this.game.gui.makeSpend( '+'+info[1]+addon );
            this.game.gui.animateStat();

            if( this.game.gui.buttons.headstart.visible ||
                this.game.gui.buttons.doubler.visible ||
                this.game.gui.buttons.insurance.visible )
            {
                this.game.gui.buttons.headstart.hide( true,500 );
                this.game.gui.buttons.doubler.hide( true,500 );
                this.game.gui.buttons.insurance.hide( true,500 );
            }

            if( this.score > this.bestScore && this.record ){
                this.record.destroy();
            }
        }
    },

    backToSavePoint: function() {
        var price = this.game.gui.buttons.save.price;
        if( this.money-price >= 0 ){
            this.game.gui.buttons.save.price += 100;
            this.game.gui.buttons.save.labelPrice.text = this.game.gui.buttons.save.price;
            this.money-=price;
            this.updateStats();
            this.game.gui.makeSpend( '-'+price );

            this.tower.backToSavePoint();
            this.bird.flyToPontUnder( this.tower.currenHeight );

            this.controlBrick.visible = true;
            this.controlBrick.reset( this.tower.currenHeight, this.tower.parts[this.tower.parts.length-1].width );

            this.proxy.visible = true;
            this.game.gui.hideGameOver();

            this.bigText.visible = false;
        }else{
            this.game.gui.makeSpend( Lang[lang][16] );

        }
    },

    playAgain: function() {
        this.game.state.start('Game');
    },

    undoPlace: function() {
        var price = this.game.gui.buttons.undo.price;
        this.game.gui.buttons.undo.touch();
        if( this.money-price >= 0 ){
            this.game.gui.buttons.undo.price += 10;
            this.game.gui.buttons.undo.labelPrice.text = this.game.gui.buttons.undo.price;
            this.money-=price;
            this.score--;
            this.updateStats();
            this.game.gui.makeSpend( '-'+price );

            this.tower.undoLastBlock();
            this.controlBrick.resize( this.tower.parts[this.tower.parts.length-1].width );

            if( this.tower.parts.length == 2 )
                this.game.gui.buttons.undo.hide( true );

            if( this.bird.getLastPointY() == this.tower.currenHeight ){
                this.bird.flyBack();
            }


        }else{
            this.game.gui.makeSpend( Lang[lang][16] );
        }
    },

    buyDoubler: function() {
        this.game.gui.buttons.doubler.touch();
        var price = this.game.gui.buttons.doubler.price;
        if( this.money-price >= 0 ){
            this.money-=price;
            this.updateStats();
            this.game.gui.makeSpend( '-'+price );

            this.doubleMoney = true;
            this.game.gui.buttons.doubler.hide( false );
        }else{
            this.game.gui.makeSpend( Lang[lang][16] );
        }
    },

    buyInsurance: function() {
        this.game.gui.buttons.insurance.touch();
        var price = this.game.gui.buttons.insurance.price;
        if( this.money-price >= 0 ){
            this.money-=price;
            this.updateStats();
            this.game.gui.makeSpend( '-'+price );

            if( this.lives < 3 ){
                this.lives++;
                localStorage["TheTower.lives"] = this.lives;
                this.game.gui.updateLives( this.lives );
            }

            if( this.lives == 3 )
                this.game.gui.buttons.insurance.hide( false );
        }else{
            this.game.gui.makeSpend( Lang[lang][16] );
        }
    },

     // headstart section
    buyHeadstart: function() {
        this.game.gui.buttons.headstart.touch();
        var price = this.game.gui.buttons.headstart.price;
        if( this.money-price >= 0 ){
        // if( true ){
            this.money-=price;
            this.updateStats();
            this.game.gui.makeSpend( '-'+price );

            this.game.gui.showPicker();
            this.game.gui.buttons.headstart.hide( false );
            this.proxy.events.onInputDown.remove( this.placeBlock, this);
            this.proxy.events.onInputDown.add( this.selectHeight, this);
        }else{
            this.game.gui.makeSpend( Lang[lang][16] );
        }
    },

    selectHeight: function() {
        this.game.gui.chooseHeight();
    },

    startHeadstart: function( amount ){
        this.proxy.events.onInputDown.remove( this.selectHeight, this);
        this.autoplace = true;
        this.autoplaceAmount = amount;
        this.controlBrick.resetHeadstart( this.tower.currenHeight );
    },

    // end headstart

    spendSomeMoney: function( price ) {
        this.money-=price;
        this.updateStats();
        this.game.gui.makeSpend( '-'+price );
    },

    gameOver: function() {
        //SG_Hooks.gameOver(1, this.score);
        myScore = this.score;
        console.log(this.score);
        //updateShare(this.score);
        //Play68.setRankingScoreDesc(this.score);
        this.bigText.visible = true;
        this.bigText.alpha = 1;
        this.bigText.text = getText() +'\n'+Lang[lang][ this.game.rnd.integerInRange(9, 15)]+'\n好玩记得分享哦！';
        this.bigText.y = this.game.camera.y + scaleValue(80);
        // console.log(this.game.camera.y);
        if( this.score <= 3 )
            this.bigText.y += scaleValue(30) * (4-this.score);
        this.game.gui.showGameOver();
        this.controlBrick.visible = false;
        this.proxy.visible = false;
    },

    updateStats: function() {
        localStorage["TheTower.money"] = this.money;
        this.game.gui.setStats( this.score, this.money );
    },

    switchSound: function(  ) {
        localStorage["TheTower.sound"] = !JSON.parse(localStorage["TheTower.sound"]);
        if( JSON.parse(localStorage["TheTower.sound"]) ){
            this.game.gui.soundIcon.loadTexture( 'sprites', 'buttonSoundOn');
            this.game.sndManager.switchSound( true );
        }
        else{
            this.game.gui.soundIcon.loadTexture( 'sprites', 'buttonSoundOff');
            this.game.sndManager.switchSound( false );
        }
    },

    update: function() {
        // camera smooth follow
        var lerp = 0.1;
        this.cameraPos.x += 0;
        this.cameraPos.y += scaleValue(7) + parseInt( (this.controlBrick.y - this.cameraPos.y) * lerp );
        if( !this.controlBrick.visible )
            this.cameraPos.y -= scaleValue(9);
        this.game.camera.focusOnXY(this.cameraPos.x, this.cameraPos.y);

        this.backs.y = this.game.camera.y * 0.6;
        this.cloudGroup.y = scaleValue(-100) +  this.game.camera.y * 0.5;

        this.rocks.y = scaleValue(180) + this.game.camera.y * 0.5;
        this.hills.y = scaleValue(270) + this.game.camera.y * 0.3;
         // console.log(this.game.camera.y);

        if( this.controlBrick.y != this.tower.currenHeight ){
            this.controlBrick.y += scaleValue(2);
            if( this.controlBrick.y > this.tower.currenHeight)
                this.controlBrick.y = this.tower.currenHeight;
        }

        if(this.autoplace && Math.abs(this.controlBrick.x-this.tower.parts[ this.tower.parts.length - 1 ].x) <= 5 ){
            this.tower.placeBlock( this.controlBrick.x, this.controlBrick.width );

            this.score++;
            this.updateStats();
            this.game.gui.animateStat();

            this.autoplaceAmount--;
            if(this.autoplaceAmount <= 0){
                // clear headstart
                this.autoplace = false;
                this.game.gui.buttons.undo.show( true );
                this.controlBrick.reset( this.tower.currenHeight, this.tower.parts[ this.tower.parts.length - 1 ].width );
                this.game.gui.hidePicker();
                if( this.lives >= 3 )
                    this.game.gui.buttons.insurance.hide( false );  
                this.proxy.events.onInputDown.add( this.placeBlock, this);
            }else{
                this.controlBrick.resetHeadstart( this.tower.currenHeight );

            }
        }
    },

    gotoSite: function() {
        //window.open("http://m.softgames.de", "_blank");
        SG.redirectToPortal();
    },

    gotoTwitter: function() {
        
        // window.open( 'http://twitter.com/softgames', '_blank');
    },

    render: function() {
        //game.debug.text( "fps: "+(game.time.fps || '--'), scaleValue(250), scaleValue(460), "#00ff00", scaleValue(20) + "px Arial"); 
        //this.game.debug.geom( new Phaser.Rectangle( this.circle.x - this.game.input.zoneSize/2, this.circle.y - this.game.input.zoneSize/2, this.game.input.zoneSize, this.game.input.zoneSize), 'rgba(255,56,0,0.3)' ) ;
        //game.debug.text( this.distance, scaleValue(10), scaleValue(30), "#0000ff", scaleValue(20) + "px Arial"); 
    }

};