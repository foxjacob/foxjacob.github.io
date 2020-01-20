/**
 * See LICENSE file.
 *
 * Menu Scene.
 */

(function() {
	HN.Garden= function() {
        HN.Garden.superclass.constructor.call(this);
		return this;
	};


    HN.Garden.prototype= {
		ambient:		1,

		initialize : function(ctx,size,maxGrassHeight)	{
            return this;
		},
		paint : function(director, time){
		},

        gradient:       null,
        lerpTime:       10000,		// time taken to fade sky colors
        nextLerpTime:   15000,	// after fading, how much time to wait to fade colors again.
        colors:         [
                            [   0x00, 0x3f, 0x7f, //0x00, 0x00, 0x3f,
                                0x00, 0x3f, 0x7f,
                                0x1f, 0x5f, 0xc0,
                                0x3f, 0xa0, 0xff ],

                            [   0x00, 0x3f, 0x7f,
                              0xa0, 0x5f, 0x7f,
                              0xff, 0x90, 0xe0,
                              0xff, 0x90, 0x00 ],

                            [     0x00, 0x3f, 0x7f, //0x00, 0x00, 0x00,
                            0x00, 0x2f, 0x7f,
                            0x00, 0x28, 0x50,
                            0x00, 0x1f, 0x3f ],

                            [ 0x00, 0x3f, 0x7f, //0x1f, 0x00, 0x5f,
                              0x3f, 0x2f, 0xa0,
                              0xa0, 0x1f, 0x1f,
                              0xff, 0x7f, 0x00 ] ],

        ambients:       [ 1, .35, .05, .5 ],    // ambient intensities for each sky color
        lerpindex:      0,                      // start with this sky index.

        /**
         * fade sky colors
         * @param time current time
         * @param last how much time to take fading colors
         */
        lerp: function( ctx, time, last ) {
            this.gradient= ctx.createLinearGradient(0,0,0,this.height);

            var i0= this.lerpindex%this.colors.length;
            var i1= (this.lerpindex+1)%this.colors.length;

            for( var i=0; i<4; i++ )	{
                var rgb='rgb(';
                for( var j=0; j<3; j++ ) {
                    rgb+= Math.floor( (this.colors[i1][i*3+j]-this.colors[i0][i*3+j])*time/last + this.colors[i0][i*3+j]);
                    if ( j<2 ) rgb+=',';
                }
                rgb+=')';
                this.gradient.addColorStop( i/3, rgb );
            }

            this.ambient= (this.ambients[i1]-this.ambients[i0])*time/last + this.ambients[i0];
        }

	};

    extend( HN.Garden, CAAT.Actor);
})();

(function() {

    HN.Cloud= function() {
        HN.Cloud.superclass.constructor.call(this);
        return this;
    };

    HN.Cloud.prototype= {
        scene:      null,

        setScene : function(scene) {
            this.scene= scene;
            return this;
        },
        setupBehavior : function(director) {

            this.setBackgroundImage( director.getImage('cloudb'+ ((4*Math.random())>>0) ) );

            var me= this;
            var ix0, ix1, iy0, iy1;
            var from= Math.random();
            var dw= director.width;
            var dh= director.height;

            var ih= this.backgroundImage.height;
            var iw= this.backgroundImage.width;

            var t= 40000 + 5000*Math.random()*4;

            ix0= -iw + -iw*2*Math.random();
            iy0= dh*Math.random()/2;
            ix1= dw;
            iy1= iy0 + 50*Math.random()/2;

            var me= this;

            var pb= new CAAT.PathBehavior().
                setPath( new CAAT.Path().setLinear(ix0, iy0, ix1, iy1 ) );

            this.emptyBehaviorList();
            this.addBehavior(
                pb.
                    setFrameTime( this.scene.time, t ).
                    addListener( {
                        behaviorExpired : function(behavior, time, actor) {

                            ix0= -iw + -iw*2*Math.random();
                            iy0= dh*Math.random()/2;
                            ix1= dw;
                            iy1= iy0 + 50*Math.random()/2;
                            t= 40000 + 5000*Math.random()*4;

                            behavior.path.setLinear( ix0, iy0, ix1, iy1 );
                            behavior.setTimeOffset(0).setFrameTime( me.scene.time, t );
                        }
                    }).
                    setTimeOffset( Math.random() ) );

            return this;
        }
    }

    extend( HN.Cloud, CAAT.Actor );

})();

(function() {

    HN.ScoreItem= function() {
        return this;
    };

    HN.ScoreItem.prototype= {
        score:  0,
        level:  0,
        mode:   '',
        date:   '',

        initialize : function(score, level, mode) {
            this.score= score;
            this.level= level;
            this.mode= mode;
			window.score=this.score;
			window.level=level;
			// updateShare(window.level,window.score);
			// Play68.setRankingLevelScoreDesc(window.level,window.score);
            console.log(window.level+'**'+window.score);
			
            var d= new Date();
            this.date= ''+d.getFullYear()+'/'+this.pad(1+d.getMonth())+'/'+this.pad(d.getDate());
            return this;
        },
        
        pad : function( n ) {
            n= ''+n;
            if ( n.length==1 ) {
                n= '0'+n;
            }
            return n;
        }
    };

    HN.Scores= function() {
        return this;
    };

    HN.Scores.prototype= {
        maxScoreRows:   10,
        scores: null,

        initialize : function() {

            var rows= 0, i;
            if ( null!=this.scores ) {
                rows= this.scores.length;
                for( i=0; i<rows; i++ ) {
                    this.setDOM( i+'_1', this.scores[i].score);
                    this.setDOM( i+'_2', this.scores[i].level);
                    this.setDOM( i+'_3', this.scores[i].mode);
                    this.setDOM( i+'_4', this.scores[i].date);
                }
            } else {
                this.scores= [];
            }

            for( i=rows; i<10; i++ ) {
                for( var j=1; j<=4; j++ ) {
                    this.setDOM( i+'_'+j, '');
                }
            }

            return this;
        },
        setDOM : function( elem, value ) {
            var dom= document.getElementById(elem);
            if ( null!=dom ) {
                dom.innerHTML= value;
            }
            return this;
        },
        addScore : function( score, level, mode ) {
            // quitar filas hasta que entre una.
            while ( this.scores.length>=this.maxScoreRows ) {
                this.scores.splice( this.scores.length-1, 1 );
            }

            // busca donde insertar el elemento.
            var i=0;
            for( i=0; i<this.scores.length; i++ ) {
                if ( score>this.scores[i].score ) {
                    break;
                }
            }
            this.scores.splice( i, 0, new HN.ScoreItem().initialize(score, level, mode ) );
           
            CAAT.modules.LocalStorage.prototype.save('sumon_scores_1', this.scores);

            this.initialize();

            return this;
        },
        setData : function() {
            this.scores= CAAT.modules.LocalStorage.prototype.load('sumon_scores_1');
            return this;
        }
    };
})();

(function() {

    HN.GardenScene= function() {
        if ( CAAT.browser!=='iOS' ) {
            this.scores= new HN.Scores().setData().initialize();
        }
        return this;
    };

    HN.GardenScene.prototype= {

        gameScene:      null,
        directorScene:  null,
        director:       null,
        buttonImage:    null,
        scores:         null,

        music:          null,
        sound:          null,

        createClouds : function() {

            for(var i=0; i<5; i++ ) {
                var cl= new HN.Cloud().
                        setId('cloud'+i).
                        setScene( this.directorScene ).
                        setupBehavior(this.director);
                this.directorScene.addChild(cl);
            }
        },

        createModeButtons : function() {

            var me= this;

            var m= [];
            m.push(new CAAT.SpriteImage().initialize( me.director.getImage('mode-classic'), 1,3 ));
            m.push(new CAAT.SpriteImage().initialize( me.director.getImage('mode-progressive'), 1,3 ));
            m.push(new CAAT.SpriteImage().initialize( me.director.getImage('mode-respawn'), 1,3 ));

            var modes= [ HN.GameModes.classic, HN.GameModes.progressive, HN.GameModes.respawn ];

            var i,w= 0;
            for( i=0; i<m.length; i++ ) {
                w= Math.max(w,m[i].singleWidth);
            }

            var margin= 20;
            w+=margin;
            var dw= (me.director.width-w*m.length)/2 + margin/2;

            function createb(index) {
                var text= new CAAT.SpriteImage().
                        initialize( me.director.getImage('mode-text'), 1,3 ).
                        setAnimationImageIndex([index]);

                var c= new CAAT.ActorContainer().create().setBounds(
                    dw + w*index,
                    me.director.width>me.director.height ? me.director.height/2- 10 : me.director.height/2-100,
                    Math.max( m[index].singleWidth, text.singleWidth),
                    m[index].singleWidth+text.singleHeight );

                var b= new CAAT.Actor().
                        setAsButton(m[index], 0,1,2,0, function() {
                            me.director.audioPlay('11');
                            me.startGame(me.director,0,modes[index]);
                        }).
                        setBounds(
                            (c.width-m[index].singleWidth)/2,
                            0,
                            m[index].singleWidth,
                            m[index].singleHeight );

                var t = new CAAT.Actor().
                        setBackgroundImage(text).
                        setBounds(
                            (c.width - text.singleWidth) / 2,
                            b.height,
                            text.singleWidth,
                            text.singleHeight);

                c.addChild(b);
                c.addChild(t);

                return c;
            }

            this.directorScene.addChild( createb(0) );
            this.directorScene.addChild( createb(1) );
            this.directorScene.addChild( createb(2) );
        },

        createHowtoButton : function( info_howto_ci ) {
            var director= this.director;

            var ihw= info_howto_ci.singleWidth;
            var ihh= info_howto_ci.singleHeight;

            var me= this;

 var sb = new CAAT.ScaleBehavior().setValues( 1,5, 1,5 );
 
            var _howto= new CAAT.Actor().
                setBackgroundImage(new CAAT.SpriteImage().initialize( director.getImage('howto'),1,1 ) ).
                setOutOfFrameTime().
                setAlpha(.9);

            var pbOut= new CAAT.PathBehavior().
                setValues( new CAAT.Path().setLinear( _howto.x,0,700,0 ) ).
                setInterpolator(new CAAT.Interpolator().createBounceOutInterpolator(false) ).
                addListener( {
                    behaviorExpired : function(behavior, time, actor) {
                        _howto.setOutOfFrameTime();
                    }
                });

            var pbIn= new CAAT.PathBehavior().
                setValues(new CAAT.Path().setLinear( 700,0,0,0 )).
                setInterpolator( new CAAT.Interpolator().createBounceOutInterpolator(false) );



            _howto.mouseClick= function( e ) {
                _howto.emptyBehaviorList().
                    setFrameTime( me.directorScene.time, Number.MAX_VALUE ).
                    addBehavior( pbOut.setFrameTime( me.directorScene.time, 1000 ) );

            };

            var howto= new CAAT.Actor().
                setAsButton(info_howto_ci.getRef(), 3,4,5,3,
                    function() {
                        director.audioPlay('11');
                        _howto.emptyBehaviorList().
                            setFrameTime( me.directorScene.time, Number.MAX_VALUE ).
                            addBehavior( pbIn.setFrameTime( me.directorScene.time, 1000 ) );

                    }).
                setBounds( 10, director.height-10-ihh-ihh-5, ihw, ihh );

            return {
                howto: howto,
                howtod:_howto
            };
        },

        /**
         * Creates the main game Scene.
         * @param director a CAAT.Director instance.
         * @param gardenSize 
         */
        create : function(director, gardenSize) {

            director.audioLoop('music'); 

            this.director= director;
            this.directorScene= director.createScene();


            var dw= director.width;
            var dh= director.height;
            var me= this;

            this.directorScene.activated= function() {
                me.prepareSound();
            };

            var imgb= director.getImage('background-2');

            this.directorScene.addChild(
                new CAAT.Actor().
                        setBounds(0,0,dw,dh).
                        setBackgroundImage(imgb)
            );


            ///////////// some clouds
            this.createClouds();

            ////////////// garden
            if ( gardenSize>0 ) {
                // fondo. jardin.
                this.directorScene.addChild(
                        new HN.Garden().
                                create().
                                setBounds(0,0,dw,dh).
                                initialize( director.ctx, gardenSize, dh*.5 )
                        );
            }

            //////////// scores
            this.buttonImage= new CAAT.SpriteImage().initialize(
                    director.getImage('buttons'), 7,3 );

            var bw=         this.buttonImage.singleWidth;
            var bh=         this.buttonImage.singleHeight;
            var numButtons= 4;
            var yGap=       10;

            var scores= null;
            if (false && CAAT.browser!=='iOS') {
                scores=new CAAT.Actor().
                    setAsButton( this.buttonImage.getRef(), 18,19,20,18, function() {
                        director.audioPlay('11');
                    }).
                    setBounds( dw-bw-10, dh-bh-10, bw, bh );
            }

            ////////////// sound controls
            this.soundControls(director);

            ////////////// level buttons
            this.createModeButtons();

            if ( false && CAAT.browser!=='iOS' ) {
                this.directorScene.addChild(scores);
            }


            ////////////// Sumon logo
            var logoi= director.getImage('logo');
            var logo= new CAAT.Actor().
                    setBackgroundImage(logoi).
                    enableEvents(true);
            logo.setLocation( (dw - logo.width)/2, -10 );

            if ( director.width<director.height ) {
                logo.
                    setBackgroundImage(logoi, false).
                    setSize( logoi.width*.8, logoi.height*.8 ).
                    setImageTransformation( CAAT.SpriteImage.prototype.TR_FIXED_TO_SIZE );
            }
			logo.mouseClick= function( e ) {
				CreateLinksInGame('Math-Plus','menu','logo');
			};

            this.directorScene.addChild(logo);


            ///////// info & howto
            var info_howto_ci=  new CAAT.SpriteImage().initialize( director.getImage('info_howto'), 2, 3 );
            var howto=           this.createHowtoButton(info_howto_ci);

            this.directorScene.addChild(howto.howto);
            this.directorScene.addChild(howto.howtod);

            if ( director.width<director.height ) {
                CAAT.modules.LayoutUtils.row(
                    this.directorScene,
                    [howto.howto],
                    {
                        padding_left:   195,
                        padding_right:  195,
                        top:            director.height/2+100
                    });
            }
            return this;
        },
        soundControls : function(director) {
            var ci= new CAAT.SpriteImage().initialize( director.getImage('sound'), 2,3 );
            var dw= director.width;
            var dh= director.height;

            var music= new CAAT.Actor().
                    setAsButton( ci.getRef(),0,1,0,0, function(button) {
                        director.setMusicEnabled( !director.audioManager.isMusicEnabled() );
                        if ( director.isMusicEnabled() ) {
                            button.setButtonImageIndex(0,1,0,0);
                        } else {
                            button.setButtonImageIndex(2,2,2,2);
                        }

                    }).
                    setBounds( dw-ci.singleWidth-2, 2, ci.singleWidth, ci.singleHeight );


            var sound= new CAAT.Actor().
                    setAsButton( ci.getRef(),3,4,3,3, function(button) {
                        director.setSoundEffectsEnabled( !director.audioManager.isSoundEffectsEnabled() );
                        if ( director.isSoundEffectsEnabled() ) {
                                button.setButtonImageIndex(3,4,3,3);
                        } else {
                            button.setButtonImageIndex(5,5,5,5);
                        }
                    }).
                    setBounds( dw-ci.singleWidth-2, 2+2+ci.singleHeight, ci.singleWidth, ci.singleHeight );


            music.prepare= function() {
                if ( director.audioManager.isMusicEnabled() ) {
                    this.setButtonImageIndex(0,1,0,0);
                } else {
                    this.setButtonImageIndex(2,2,2,2);
                }
            }

            sound.prepare= function() {
                if ( director.audioManager.isSoundEffectsEnabled() ) {
                    this.setButtonImageIndex(3,4,3,3);
                } else {
                    this.setButtonImageIndex(5,5,5,5);
                }
            }

            this.directorScene.addChild(sound);
            this.directorScene.addChild(music);

            if ( director.width<director.height ) {
                CAAT.modules.LayoutUtils.row(
                    this.directorScene,
                    [
                        music,
                        sound
                    ],
                    {
                        padding_left:   195,
                        padding_right:  195,
                        top:            director.height/2+150
                    });
            }


            this.music= music;
            this.sound= sound;
        },
        prepareSound : function() {
            try {
                this.sound.prepare();
                this.music.prepare();
            }
            catch(e) {

            }
        },
        startGame : function(director,level,gameMode) {
            this.gameScene.setDifficulty(level);

            this.gameScene.prepareSceneIn(gameMode);
            director.easeInOut(
                    1,
                    CAAT.Scene.EASE_TRANSLATE,
                    CAAT.Actor.prototype.ANCHOR_TOP,
                    0,
                    CAAT.Scene.EASE_TRANSLATE,
                    CAAT.Actor.prototype.ANCHOR_BOTTOM,
                    1000,
                    false,
                    new CAAT.Interpolator().createExponentialInOutInterpolator(3,false),
                    new CAAT.Interpolator().createExponentialInOutInterpolator(3,false) );
        },
        /**
         * gameScene listener.
         * @param type {string}
         * @param data {object}
         */
        gameEvent : function( type, data ) {
            if ( CAAT.browser!=='iOS' ) {
                this.scores.addScore( data.score, data.level, data.gameMode );
            }
        }
    };
})();
