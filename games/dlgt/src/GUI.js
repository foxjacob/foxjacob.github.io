//check for playUk - by Manuel
//<<
var isAccessedFromPlayUk = false;

function detectPartnerIsNotMobiground()
{   
    var PLAY_UK_PARAM = "p=goplayuk.ecapserver.com_2";
    var url  = window.location.href;
    if(url.indexOf(PLAY_UK_PARAM) > -1)
    {
        isAccessedFromPlayUk = true;
    }
}
detectPartnerIsNotMobiground();
//>>

GUI = function (game) {
    this.game = game;
    Phaser.Group.call(this, game);
    this.fixedToCamera = true;

    // Stats
    this.moneyGroup = this.game.add.group();
    this.moneyGroup.x = this.game.width-scaleValue(30);
    this.add( this.moneyGroup );
    this.moneyGroup.tween = this.game.add.tween(this.moneyGroup.scale);

    var style_score = {font:'Bold '+scaleValue(35)+'px Arial', fill: '#FFFFFF', align: 'center'};
    this.labelScore = this.game.add.text( this.game.width/2, scaleValue(24), '0', style_score, this );
    this.labelScore.anchor.set( 0.5, 0.5 );
    this.labelScore.tween = this.game.add.tween(this.labelScore.scale );


    var walletBack = this.moneyGroup.create( scaleValue(20), this.labelScore.y, 'sprites', 'backWallet' );
    walletBack.anchor.set( 1, 0.5 );

    var style_money = {font:'Bold '+scaleValue(17)+'px Arial', fill: '#ffd700', align: 'right'};
    this.labelMoney = this.game.add.text( -scaleValue(1), this.labelScore.y, '0', style_money, this.moneyGroup );
    this.labelMoney.anchor.set( 1, 0.5 );

   	var style_spend = {font:'Bold '+scaleValue(15)+'px Arial', fill: '#ffd700', align: 'right'};
    this.labelSpend = this.game.add.text( 0, scaleValue(50), '-10', style_spend, this.moneyGroup );
    this.labelSpend.anchor.set( 1, 0.5 );
    this.labelSpend.tween = this.game.add.tween( this.labelSpend );
    this.labelSpend.tween.onComplete.add( this.spendEnd, this );
    this.labelSpend.visible = false;

    // best section

    this.bestBack = this.create( this.game.width/2, scaleValue(65), 'sprites', 'backRecord' );
    this.bestBack.anchor.set( 0.5, 0.5 );

    var style_best_label = {font:'Bold '+scaleValue(18)+'px Arial', fill: '#ffd700', align: 'right'};
    this.labelBestName = this.game.add.text( this.game.width/2-scaleValue(60), scaleValue(65), Lang[lang][3]+':', style_best_label, this );
    this.labelBestName.anchor.set( 0, 0.5 );

    var style_best = {font:'Bold '+scaleValue(17)+'px Arial', fill: '#FFFFFF', align: 'right'};
    this.labelBest = this.game.add.text( this.game.width/2+scaleValue(60), scaleValue(65), '0', style_best, this );
    this.labelBest.anchor.set( 1, 0.5 );

    var style_best_new = {font:'Bold '+scaleValue(20)+'px Arial', fill: '#ffd700', align: 'center'};
    this.labelBestNew = this.game.add.text( this.game.width/2, scaleValue(100), Lang[lang][4], style_best_new, this );
    this.labelBestNew.anchor.set( 0.5, 0.5 );

    this.labelBestName.visible = false;
    this.labelBest.visible = false;
    this.labelBestNew.visible = false;
    this.bestBack.visible = false;

    // buttons
    this.buttons = {};

    this.buttons.headstart = new HiddingButton( this.game, this, scaleValue(22), scaleValue(80), -scaleValue(90), scaleValue(70), 'buttonHeadstart', 1000 );
    //this.buttons.headstart.scale.set( 1, 1 );
    this.buttons.headstart.setLabel( Lang[lang][5] );
    this.buttons.headstart.hide( false );
    this.buttons.headstart.show( true, 500 );

    this.buttons.doubler = new HiddingButton( this.game, this, scaleValue(128), scaleValue(80), scaleValue(120), -scaleValue(120), 'buttonMoneyDoubler', 1000 );
    //this.buttons.doubler.scale.set( 1, 1 );
    this.buttons.doubler.setLabel( Lang[lang][6] );
    this.buttons.doubler.hide( false );
    this.buttons.doubler.show( true, 500 );

    this.buttons.insurance= new HiddingButton( this.game, this, scaleValue(234), scaleValue(80), scaleValue(410), scaleValue(70), 'buttonInsurance', 500 );
    //this.buttons.insurance.scale.set( 1, 1 );
    this.buttons.insurance.setLabel( Lang[lang][7] );
    this.buttons.insurance.hide( false );
    this.buttons.insurance.show( true, 500 );


    this.buttons.undo = new HiddingButton( this.game, this, scaleValue(5), scaleValue(370), -scaleValue(80), scaleValue(370), 'buttonBack', 100 );
    this.buttons.undo.hide( false );

    this.buttons.save = new HiddingButton( this.game, this, scaleValue(250), scaleValue(220), scaleValue(360), scaleValue(220), 'buttonFinish', 500 );
    this.buttons.save.hide( false )

    this.buttons.again = new HiddingButton( this.game, this, scaleValue(250), scaleValue(310), scaleValue(360), scaleValue(310), 'buttonAgain' );
    this.buttons.again.hide( false );

    this.buttons.more = new HiddingButton( this.game, this, scaleValue(5), scaleValue(220), scaleValue(-80), scaleValue(220), 'buttonMore' );
    this.buttons.more.hide( false );
    this.buttons.more.inputEnabled = true;
    this.buttons.more.events.onInputDown.add( this.gotoSite, this );

    this.buttons.twitter = new HiddingButton( this.game, this, scaleValue(5), scaleValue(310), scaleValue(-80), scaleValue(310), 'buttonTwitter');
    this.buttons.twitter.hide( false );
    this.buttons.twitter.inputEnabled = true;
    this.buttons.twitter.events.onInputDown.add( this.gotoTwitter, this );


    /// choose height
    this.headstartCall = new Phaser.Signal();
    var style_headstart = {font:'Bold '+scaleValue(14)+'px Arial', fill: '#ffffff', align: 'center'};
    this.labelHeadstart= this.game.add.text( this.game.width/2 , scaleValue(90), Lang[lang][8], style_headstart, this );
    this.labelHeadstart.anchor.set( 0.5, 1 );    

    this.topY = scaleValue(95);
    this.bottomY = scaleValue(355);
    this.pickBack = this.create(this.game.width/2, this.topY, 'sprites', 'Bar');
    this.pickBack.anchor.set( 0.5, 0 );
    this.headstartPicker = this.create(scaleValue(192), this.bottomY, 'sprites', 'Arrow');
    this.headstartPicker.anchor.set( 1, 0);
    this.headstartPicker.tween = this.game.add.tween( this.headstartPicker );

    var style_headstartValue = {font:'Bold '+scaleValue(20)+'px Arial', fill: '#ffffff', align: 'center'};
    this.labelHeadstartValue = this.game.add.text( this.game.width/2 , scaleValue(270), '0', style_headstartValue, this );
    this.labelHeadstartValue.anchor.set( 0.5, 1 );

    this.labelHeadstart.visible = false;
    this.labelHeadstartValue.visible = false;
    this.headstartPicker.visible = false;
    this.pickBack.visible = false;

    this.live_1 = this.create( this.game.width/2 - scaleValue(40), scaleValue(400), 'sprites', 'HeartEmpty');
    this.live_1.anchor.set(0.5, 0.5);

    this.live_2 = this.create( this.game.width/2, scaleValue(400), 'sprites', 'HeartEmpty');
    this.live_2.anchor.set(0.5, 0.5);

    this.live_3 = this.create( this.game.width/2 + scaleValue(40), scaleValue(400), 'sprites', 'HeartEmpty');
    this.live_3.anchor.set(0.5, 0.5);

    this.soundIcon = this.create( scaleValue(10), scaleValue(10), 'sprites', 'buttonSoundOn');
    this.soundIcon.scale.set( 0.5, 0.5 );
    this.soundIcon.inputEnabled = true;

    if( JSON.parse(localStorage["TheTower.sound"]) ){
        this.soundIcon.loadTexture( 'sprites', 'buttonSoundOn');
    }
    else{
        this.soundIcon.loadTexture( 'sprites', 'buttonSoundOff');
    }
};

GUI.prototype = Object.create(Phaser.Group.prototype);
GUI.prototype.constructor = GUI;

var p = GUI.prototype;

p.updateLives = function( lives ) {
    for( var i = 1; i<=3; i++){
        if( lives == 0){
            this['live_'+i].visible = false;
            continue;
        }else
            this['live_'+i].visible = true;
        if( i <= lives )
            this['live_'+i].loadTexture( 'sprites', 'HeartFill');
        else
            this['live_'+i].loadTexture( 'sprites', 'HeartEmpty');
    }
};

p.showPicker = function() {
    this.labelHeadstart.visible = true;
    this.labelHeadstartValue.visible = true;
    this.headstartPicker.visible = true;
    this.pickBack.visible = true;
    this.headstartPicker.tween.to({y:this.topY}, 2000, Phaser.Easing.Quartic.In, true, 0).to({y:this.bottomY}, 2000, Phaser.Easing.Quartic.Out, true, 0).loop();

    this.buttons.headstart.hide( true );
    this.buttons.doubler.hide( true );
    this.buttons.insurance.hide( true );
};

p.hidePicker = function() {
    this.labelHeadstart.visible = false;
    this.labelHeadstartValue.visible = false;
    this.headstartPicker.visible = false;
    this.pickBack.visible = false;

    this.buttons.doubler.show( true, 500 );
    this.buttons.insurance.show( true, 500 );
};


p.chooseHeight = function() {
    this.headstartPicker.tween.stop();
    this.headstartPicker.tween._lastChild.stop();
    var max = 16;
    var onePiece = parseInt( (this.bottomY - this.topY) / max );
    var value = max - parseInt( (this.headstartPicker.y - this.topY) / onePiece ) + 1;
    this.headstartCall.dispatch( value );
};

p.update = function() {
    if( this.labelHeadstartValue.visible ){
        var max = 16;
        var onePiece = parseInt( (this.bottomY - this.topY) / max );
        var value = max - parseInt( (this.headstartPicker.y - this.topY) / onePiece ) + 1;
        this.labelHeadstartValue.setText( value );
    }
};

p.showGameOver = function(  ) {
    this.bestBack.visible = true;
    var prevBest = JSON.parse( localStorage["TheTower.bestScore"] );
    var newScore = parseInt(this.labelScore.text);

    this.buttons.undo.hide( true )

    this.buttons.again.show( true )
    if( newScore >= 10 )
        this.buttons.save.show( true );

    if(!isAccessedFromPlayUk)
    {
        this.buttons.twitter.show( true );
    }
	this.buttons.more.show( true );

    this.labelBestName.visible = true;
    this.labelBest.visible = true;
    this.labelBest.setText( prevBest );


    if( newScore > prevBest ){
        this.labelBestNew.visible = true;
        localStorage["TheTower.bestScore"] = newScore;
    }
};

p.hideGameOver = function(){
    this.buttons.undo.show( true )

    this.buttons.again.hide( true )
    this.buttons.save.hide( true );
    this.buttons.twitter.hide( true );
    this.buttons.more.hide( true );

    this.labelBestName.visible = false;
    this.labelBest.visible = false;
    this.bestBack.visible = false;

    this.labelBestNew.visible = false;
};

// Stats
p.setStats = function( score, money ){
	this.labelScore.setText( score );
	this.labelMoney.setText( money );
};

p.makeSpend = function( value ){
	if( this.labelSpend.tween.isRunning ){
		this.spendEnd();
	}


	this.labelSpend.visible = true;
	this.labelSpend.setText( value );

	this.labelSpend.tween._parent = null;
	this.labelSpend.tween._lastChild = null;
	this.labelSpend.tween.to({y:scaleValue(80), alpha:0}, 300, Phaser.Easing.Sinusoidal.In, true, 800);
};

p.animateStat = function () {
	this.moneyGroup.tween._parent = null;
	this.moneyGroup.tween._lastChild = null;
	this.moneyGroup.tween.to( {x:1.1, y:1.1}, 100, Phaser.Easing.Sinusoidal.Out, true ).to(
		{x:1, y:1}, 400, Phaser.Easing.Elastic.Out, true);	

	this.labelScore.tween._parent = null;
	this.labelScore.tween_lastChild = null;
	this.labelScore.tween.to( {x:1.3, y:1.3}, 100, Phaser.Easing.Sinusoidal.Out, true ).to(
		{x:1, y:1}, 400, Phaser.Easing.Elastic.Out, true);
};

p.spendEnd = function() {
	this.labelSpend.visible = false;
	this.labelSpend.alpha = 1;
	this.labelSpend.y = scaleValue(50);
};

p.gotoSite = function() {
    //window.open( 'http://m.softgames.de', '_blank');
    SG.redirectToPortal();
};

p.gotoTwitter = function() {
	// play68_submitScore(parseInt(this.labelScore.text));
    // window.open( 'http://twitter.com/softgames', '_blank');
};



