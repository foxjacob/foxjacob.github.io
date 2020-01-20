var SoundManager = function( game, on ){
	this.game = game;

	this.theme = this.game.add.audio( 'theme' );
	this.place = this.game.add.audio( 'place' );
	this.crash = this.game.add.audio( 'crash' );
	this.perfect = this.game.add.audio( 'perfect' );

    this.mute = !on;
};

var p = SoundManager.prototype;

p.switchSound = function( on ){
	this.mute = !on;
	if( on ){
		this.theme.resume();
	}else{
		this.theme.pause();
	}
};

p.playTheme = function() {
	if( !this.theme.isPlaying )
		this.theme.play('',0,1,true);
	if( this.mute )
		this.theme.pause();
};

p.playPlace = function() {
	if( !this.mute )
		this.place.play('', 0, 0.4);
};

p.playPerfect = function() {
	if( !this.mute )
		this.perfect.play();
};

p.playCrash = function() {
	if( !this.mute )
		this.crash.play();
};