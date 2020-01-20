/**
 * See LICENSE file.
 *
 * Entry point.
 */

function __CAAT__loadingScene(director) {

    var scene= director.createScene();

    var TIME= 2000;
    var time= new Date().getTime();

    var background= new CAAT.ActorContainer().
            setBackgroundImage( director.getImage('splash1'), true).
        addBehavior(
            new CAAT.GenericBehavior().
                setFrameTime(TIME/2, 0).
                setValues( 1, 0, null, null, function(value,target,actor) {
                    actor.setBackgroundImage( director.getImage('splash1'), true )
                })
        );
    scene.addChild(background);

    var lading= new CAAT.Actor().
        setBackgroundImage( director.getImage('lading'), true).
        enableEvents(false);
    lading.setLocation( director.width-lading.width-10, director.height-lading.height-30 );
    scene.addChild(lading);
	
    var sitelogo= new CAAT.Actor().
        setBackgroundImage( director.getImage('logo_menu'), true).
        enableEvents(true);
    sitelogo.setLocation( director.width-sitelogo.width-30, director.height-sitelogo.height-30 );
    scene.addChild(sitelogo);
	
	sitelogo.mouseClick= function( e ) {
    	CreateLinksInGame('Math-Plus','loading','logo');
	};
    var rueda=  new CAAT.Actor().
        setBackgroundImage( director.getImage('rueda'), true).
        setLocation( lading.x+20, lading.y+10 ).
        enableEvents(false);
    scene.addChild(rueda);


    var rrb= new CAAT.RotateBehavior().
                    setValues(0,2*Math.PI).
                    setFrameTime(0,1000);
    
    rueda.addBehavior( rrb.setCycle(true) );

    scene.loadedImage = function(count, images) {

        if ( count==images.length ) {

            var difftime= new Date().getTime()-time;
            if ( difftime<TIME ){
                difftime= Math.abs(TIME-difftime);
                if ( difftime>TIME ) {
                    difftime= TIME;
                }

                scene.createTimer(
                    scene.time,
                    difftime,
                    function() {
                        lading.setOutOfFrameTime();
                        rueda.setOutOfFrameTime();
                        __end_loading(director, images);
                    }
                );

            } else {
                __end_loading(director, images);
            }

        }
    };

    return scene;
}

function __end_loading(director, images) {

    director.emptyScenes();
    director.setImagesCache(images);

    var gardenScene= new HN.GardenScene().create(
        director,
        (director.getRenderType()==='CANVAS') ? 120 : 0);

    var gameScene= new HN.GameScene().create(director, HN.GameModes.respawn );
    gardenScene.gameScene= gameScene;

    gameScene.addGameListener( gardenScene );

    director.easeIn(
            0,
            CAAT.Scene.prototype.EASE_TRANSLATE,
            1000,
            false,
            CAAT.Actor.prototype.ANCHOR_TOP,
            new CAAT.Interpolator().createExponentialInOutInterpolator(5,false) );
}

function createCSS() {
    var director;

    if ( window.innerWidth>window.innerHeight ) {
        director= new CAAT.Director().initialize(700,500,document.getElementById('game')).setClear( false );
    } else {
        director= new CAAT.Director().initialize(500,750,document.getElementById('game')).setClear(false);
    }



    return director;
}

function createCanvas() {
    var director;
        director= new CAAT.Director().initialize(500,700).setClear(false);

    return director;
}

function createGL() {
    var director;

    if ( window.innerWidth>window.innerHeight ) {
        director= new CAAT.Director().initializeGL(700,500).setClear( false );
    } else {
        director= new CAAT.Director().initializeGL(500,750).setClear(false);
    }

    return director;
}


function __Hypernumbers_init()   {

    // uncomment to avoid decimal point coordinates.
    // Runs faster on anything but latest chrome.
    // CAAT.setCoordinateClamping(false);

    // uncomment to show CAAT's debug bar
    //CAAT.DEBUG=1;

    var director= createCanvas();

    // Uncomment to make the game conform to window's size.
    director.enableResizeEvents(CAAT.Director.prototype.RESIZE_PROPORTIONAL);

    HN.director= director;


    var prefix= typeof __RESOURCE_URL!=='undefined' ? __RESOURCE_URL : '';

    new CAAT.ImagePreloader().loadImages(
        [
            {id:'stars',    url: prefix + 'res/img/stars.png'},
            {id:'logo_menu',    url: prefix + 'res/img/logo_menu.png'},
            {id:'splash1',  url: prefix + 'res/splash/splash1-i.png'},
            {id:'lading',   url: prefix + 'res/splash/lading.png'},
            {id:'rueda',    url: prefix + 'res/splash/rueda.png'}
        ],
        function( counter, images ) {

            if ( counter==images.length ) {
                director.setImagesCache(images);
                var scene_loading= __CAAT__loadingScene(director);

                new CAAT.ImagePreloader().loadImages(
                    [
                        {id:'smoke',            url: prefix + 'res/img/humo.png'},
                        {id:'stars',            url: prefix + 'res/img/stars.png'},
                        {id:'bricks',           url: prefix + 'res/img/bricks.png'},
                        {id:'buttons',          url: prefix + 'res/img/botones.png'},
                        {id:'numbers',          url: prefix + 'res/img/numbers.png'},
                        {id:'numberssmall',     url: prefix + 'res/img/numbers_s.png'},
                        {id:'madewith',         url: prefix + 'res/img/madewith.png'},
                        {id:'background-1',     url: prefix + 'res/img/fondo1.png'},
                        {id:'background-2',     url:  prefix + 'res/img/fondo2inv.png'},
                        {id:'background_op',    url: prefix + 'res/img/gameover.png'},
                        {id:'cloud0',           url: prefix + 'res/img/nube1.png'},
                        {id:'cloud1',           url: prefix + 'res/img/nube2.png'},
                        {id:'cloud2',           url: prefix + 'res/img/nube3.png'},
                        {id:'cloud3',           url: prefix + 'res/img/nube4.png'},
                        {id:'cloudb0',          url: prefix + 'res/img/nubefondo1.png'},
                        {id:'cloudb1',          url: prefix + 'res/img/nubefondo2.png'},
                        {id:'cloudb2',          url: prefix + 'res/img/nubefondo3.png'},
                        {id:'cloudb3',          url: prefix + 'res/img/nubefondo4.png'},
                        {id:'level',            url: prefix + 'res/img/level.png'},
                        {id:'level-small',      url: prefix + 'res/img/levelsmall.png'},
                        {id:'boton-salir',      url: prefix + 'res/img/boton_salir.png'},
                        {id:'points',           url: prefix + 'res/img/score.png'},
                        {id:'time',             url: prefix + 'res/img/time.png'},
                        {id:'timeprogress',     url: prefix + 'res/img/time_progress.png'},
                        {id:'multiplier',       url: prefix + 'res/img/xsmall.png'},
                        {id:'multiplier-star',  url: prefix + 'res/img/multiplicador.png'},
                        {id:'ovni',             url: prefix + 'res/img/ovni.png'},
                        {id:'logo',             url: prefix + 'res/img/logo_menu.png'},
                        {id:'sitelogo',             url: prefix + 'res/img/sitelogo.png'},
                        {id:'levelclear',       url: prefix + 'res/img/levelcleared.png'},
                        {id:'msg1',             url: prefix + 'res/img/7.png'},
                        {id:'msg2',             url: prefix + 'res/img/6.png'},
                        {id:'msg3',             url: prefix + 'res/img/5.png'},
                        {id:'msg4',             url: prefix + 'res/img/4.png'},
                        {id:'msg5',             url: prefix + 'res/img/3.png'},
                        {id:'msg6',             url: prefix + 'res/img/2.png'},
                        {id:'msg7',             url: prefix + 'res/img/1.png'},
                        {id:'info_howto',       url: prefix + 'res/img/info.png'},
                        {id:'sound',            url: prefix + 'res/img/sound.png'},
                        {id:'mode-respawn',     url: prefix + 'res/img/respawn.png'},
                        {id:'mode-progressive', url: prefix + 'res/img/progresive.png'},
                        {id:'mode-classic',     url: prefix + 'res/img/normal_mode.png'},
                        {id:'mode-text',        url: prefix + 'res/img/textos.png'},
                        {id:'rclock-bg',        url: prefix + 'res/img/rclock_bg.png'},
                        {id:'rclock-tick',      url: prefix + 'res/img/rclock_tick.png'},
                        {id:'rclock-arrow',     url: prefix + 'res/img/rclock_arrow.png'},
                        {id:'bolas',            url: prefix + 'res/img/bolas.png'},
                        {id:'info',             url: prefix + 'res/big/about-i.jpg'},
                        {id:'howto',            url: prefix +  'res/big/tutorial-i.jpg'},
                        {id:'target-number',    url: prefix + 'res/img/target.png'}
                    ],


                    function( counter, images ) {

                        if ( counter===images.length ) {
                            director.
                                addAudio("01",              prefix+"res/sound/01.mp3").
                                addAudio("10",              prefix+"res/sound/10.mp3").
                                addAudio("11",              prefix+"res/sound/11.mp3").
                                addAudio("12",              prefix+"res/sound/12.mp3").
                                addAudio("sumamal",         prefix+"res/sound/suma_mal.mp3").
                                addAudio("mostrarpanel",    prefix+"res/sound/mostrarpanel.mp3").
                                addAudio("deseleccionar",   prefix+"res/sound/deseleccionar.mp3").
                                addAudio("music",   prefix+"res/sound/music.mp3");
                        }

                        scene_loading.loadedImage(counter, images);

                    }
                );

            }
        }
    );

    CAAT.loop(60);
}

window.addEventListener('load', __Hypernumbers_init, false);
