this.FandlrGame = this.FandlrGame || {};
var canvas,stage,srcW,srcH,curW,curH,srcRatio,currentScale,wScale,hScale,currentMaxScale, queue;
var manifest = [
				{id:'bg', src:'res/images/bg.jpg'},
				{id:'btns',src:'res/images/btns.png'},
				{id:'title',src:'res/images/start/title.png'},
				{id:'startgirl',src:'res/images/start/girl.png'},
				{id:'dressbtns',src:'res/images/dressbtns.png'},
				{id:'star',src:'res/images/star.png'},
				{id:'star2', src:'res/images/star2.png'},
				
				{id:'girl_headdress',src:'res/images/girl/2.png'},
				{id:'girl_hair',src:'res/images/girl/1.png'},
				{id:'girl_hair2',src:'res/images/girl/1-2.png'},
				{id:'girl_jew',src:'res/images/girl/3.png'},
				{id:'girl_body',src:'res/images/girl/body.png'},
				{id:'girl_arm',src:'res/images/girl/arm.png'},
				{id:'girl_hand',src:'res/images/girl/hand.png'},
				
				
				
				{id:'girl_dress',src:'res/images/girl/6.png'},
				{id:'girl_pants',src:'res/images/girl/5.png'},
				{id:'girl_shoes',src:'res/images/girl/9.png'},
				{id:'girl_top',src:'res/images/girl/4.png'},
				{id:'girl_moto',src:'res/images/girl/10.png'},
				{id:'girl_gloves',src:'res/images/girl/7.png'},
				{id:'girl_wallet',src:'res/images/girl/8.png'},
				{id:'girl_peijue',src:'res/images/girl/peijue.png'},
				{id:'music_bg',src:'res/sounds/bg.mp3', stype:'music'},
				{id:'fx_click',src:'res/sounds/click.mp3', stype:'fx'},
				"js/scenes/StartPage.js",
				"js/extra/Girl.js",
				"js/scenes/DressPage.js",
				"js/scenes/ShowPage.js"
];
var isGameAPIReady = false;

var gameAPIObserver = new Observer;
var API_READY = 'API_READY';
var logoObject = null;
var logoImage = new Image;
var apiLinks = {};
logoImage.crossOrigin = "Anonymous";
logoImage.onload = function() {
	logoObject.width = this.width;
	logoObject.height = this.height;
	gameAPIObserver.sendNotify(API_READY, {});
}
var SpilData = {
        id: '576742227280293989'
    };
GameAPI.loadAPI(function(API) {
	isGameAPIReady = true;
	var o = GameAPI.Branding.getLogo();
	logoObject = {image:o.image,action:o.action};
	apiLinks = GameAPI.Branding.getLinks();
	if(logoObject.image === false) {
		logoObject.width = 0;
		logoObject.height = 0;
		gameAPIObserver.sendNotify(API_READY, { });
	}else {
		logoImage.src = logoObject.image;
	}
}, SpilData);
srcW = 750;
srcH = 550;
var fps = 30;
srcRatio = srcW/srcH;

(function(fg, cjs){
	var lib = {},p;
	(lib.LoadingUI = function(){
		this.initialize();
		var bg = new cjs.Shape;
		bg.graphics.beginFill('#336633').drawRect(0,0,204,16).endFill();
		bg.setTransform(-2,-2);
		this.addChild(bg);
		this.bar = new cjs.Shape;
		this.bar.graphics.beginFill('#ffffff').drawRect(0,0,100,12).endFill();
		this.addChild(this.bar);
	}).prototype = p = new cjs.Container;
	p.setProgress = function(p){
		this.bar.graphics.clear().beginFill('#ffffff').drawRect(0,0,200*p,12).endFill();
	};
	(lib.Click2Play = function(){
		this.initialize();
		/*var triangle = new cjs.Shape;
		triangle.graphics.beginFill('#de036f').moveTo(-30, -30).lineTo(30,0).lineTo(-30,30).lineTo(-30,-30).endFill();*/
		var triangle = new cjs.Bitmap("res/images/startbtn.png");

		this.addChild(triangle);
	}).prototype = p = new cjs.Container;
	fg.LoadingUI = lib.LoadingUI;
	fg.Click2Play = lib.Click2Play;
})(FandlrGame, createjs);
var SoundUI = {};
(function(fg, cjs,sUI){
	var lib = {},p;
	(lib.ui = function(){
		this.initialize();
		this.musicCtrl = new cjs.Sprite(new cjs.SpriteSheet({
				images:[fg.getAsset('btns')],
				frames:[
						[250,0,38,38,0],
						[250,100,38,38,0]
					]
			}));
			this.musicCtrl.setTransform(0,0);
			this.addChild(this.musicCtrl);
			this.fxCtrl = new cjs.Sprite(new cjs.SpriteSheet({
				images:[fg.getAsset('btns')],
				frames:[
						[200,0,38,38,0],
						[200,100,38,38,0]
					]
			}));
			this.fxCtrl.setTransform(40, 0);
			this.addChild(this.fxCtrl);
			this.musicCtrl.addEventListener('click', cjs.proxy(this.musicHandler, this));
			this.fxCtrl.addEventListener('click', cjs.proxy(this.fxHandler, this));
	}).prototype = p = new cjs.Container;
	p.musicHandler = function(evt) {
		this.musicCtrl.gotoAndStop(1-this.musicCtrl.currentFrame);
		SoundController.getInstance().setMute('music', this.musicCtrl.currentFrame == 1);
		SoundController.getInstance().play('fx_click');
	};
	p.fxHandler = function(evt) {
		this.fxCtrl.gotoAndStop(1-this.fxCtrl.currentFrame);
		SoundController.getInstance().setMute('fx', this.fxCtrl.currentFrame == 1);
		SoundController.getInstance().play('fx_click');
	};
	SoundUI.ui = lib.ui;
})(FandlrGame, createjs,SoundUI);
(function(fg,cjs){
	fg.scenes = {};
	fg.gameData = {};
	fg.currentScene = null;
	fg.nextSceneLabel = "";
	fg.jumpTo = function(str){
		if(str == "StartPage") {
			fg.nextSceneLabel = "StartPage";
			
			GameAPI.GameBreak.request(fg.pauseGame, fg.resumeGame);
		} else {
			fg.runScene(str);
		}
		
	};
	fg.runScene = function(str) {
		if(this.currentScene) {
			this.currentScene.doClean();
			this.currentScene = null;
		}
		this.scenes[str].show();
	}
	fg.pauseGame = function(){
		SoundController.getInstance().muteSound(true);
	};
	fg.resumeGame = function(){
		SoundController.getInstance().muteSound(false);
		fg.runScene(fg.nextSceneLabel);
		
	};
	fg.onResize = function(){
		stage.canvas.width = window.innerWidth;
		stage.canvas.height = window.innerHeight;
		wScale = stage.canvas.width / srcW;
		hScale = stage.canvas.height / srcH;
		curW = stage.canvas.width;
		curH = stage.canvas.height;
		currentScale = Math.min(wScale, hScale);
		currentMaxScale = Math.max(wScale,hScale);
		if(fg.currentScene) {
			fg.currentScene.doLayout();
		}
		if(fg.bgLayer) {
			fg.bgLayer.doLayout();
		}
		if(fg.soundUI) {
			fg.soundUI.scaleX = fg.soundUI.scaleY = currentScale;
			fg.soundUI.x = 660*wScale;
			fg.soundUI.y = 60*hScale;
		}
		if(fg.loadingBar) {
			fg.loadingBar.scaleX = fg.loadingBar.scaleY = currentScale;
			fg.loadingBar.x = (stage.canvas.width - 204*currentScale) / 2;
			fg.loadingBar.y = (stage.canvas.height - 20) / 2;
		}
		if(fg.click2Play) {
			fg.click2Play.setTransform((stage.canvas.width - 60)/2, (stage.canvas.height - 60)/2);
		}
		if(fg.logo) {
			fg.logo.setTransform(0*currentScale, 50*currentScale,currentScale,currentScale);
		}
		if(fg.bgAnimationLayer.children.length) {
			
			fg.bgStar1.scaleY = fg.bgStar2.scaleY = 4.66*currentScale;
			fg.bgStar1.scaleX = fg.bgStar2.scaleX = 4.76*currentScale;
			fg.bgStar1.x = 469.45*wScale;
			fg.bgStar1.y = 50.2*hScale;
			fg.bgStar2.x = 325.852*wScale;
			fg.bgStar2.y = 384.25*hScale;

			fg.heartStar1.setTransform(171.9*wScale,210.2*hScale,2.241*currentScale,2.241*currentScale);
			fg.heartStar2.setTransform(435*wScale,318*hScale,currentScale,currentScale,0,0,-180);
		}
	};
	fg.init = function(){
		this.initUI();
		queue = new cjs.LoadQueue(true);
		cjs.Sound.alternateExtensions = ["ogg"];
		queue.installPlugin(cjs.Sound);
		this.jsLoaded = false;
		queue.on('complete', this.onFileLoaded, this);
		queue.on('progress', this.onProgress, this);
		queue.loadManifest(manifest,true);
		window.addEventListener('resize', this.onResize);
		this.onResize();
	};
	fg.onProgress = function(evt) {
		this.loadingBar.setProgress(evt.progress);
	};
	fg.onFileLoaded = function(evt){
		this.loadingBar.parent.removeChild(this.loadingBar);
		this.loadingBar = null;
		if(isGameAPIReady) {
			GameAPI.Branding.displaySplashScreen(this.showClick2Play);
		} else {
			gameAPIObserver.addListener(API_READY, fg.onApiReady, fg);
		}
		
		
	};
	fg.showClick2Play = function(){
		fg.click2Play = new fg.Click2Play;

		fg.click2Play.setTransform((stage.canvas.width - 60)/2, (stage.canvas.height - 60)/2);
		fg.click2Play.addEventListener('click', cjs.proxy(fg.click2PlayHandler, fg));
		fg.wrap.addChild(fg.click2Play);
	};
	fg.click2PlayHandler = function(evt){
		SoundController.getInstance().play('fx_click');
		this.click2Play.parent.removeChild(this.click2Play);
		this.click2Play = null;
		this.startGame();
		
	};
	fg.onApiReady = function(){
		gameAPIObserver.removeListener(API_READY, fg.onApiReady, fg);
		GameAPI.Branding.displaySplashScreen(fg.showClick2Play);
	};
	fg.getAsset = function(id){
		return queue.getResult(id);
	};
	(fg.Logo = function(){
		this.initialize();

		if(logoObject.image !== false) {
			var img = new cjs.Bitmap(logoImage);
			
			this.addChild(img);
			
			this.addEventListener('click', logoObject.action);
			this.setBounds(0, 0, logoObject.width, logoObject.height);
			var shape = new cjs.Shape;
			shape.graphics.beginFill("#000").drawRect(0,0,logoObject.width,logoObject.height).endFill();
			this.hitArea = shape;
		}
		else
		{
			this.setBounds(0,0,1,1)
		}
		
		
		
	}).prototype = p = new cjs.Container;
	fg.startGame = function(){
		if('StartPage' in fg.scenes) {
			fg.logo = new fg.Logo();
			
			fg.logo.setTransform(0*currentScale, 50*currentScale,currentScale,currentScale);
			fg.topLayer.addChild(fg.logo);
			fg.soundUI = new SoundUI.ui();
			fg.musicLayer.addChild(fg.soundUI);
			fg.soundUI.scaleX = fg.soundUI.scaleY = currentScale;
			fg.soundUI.x = 660*wScale;
			fg.soundUI.y = 60*currentScale;
			fg.scenes.StartPage.show();
			stage.addEventListener('mousedown',  cjs.proxy(fg.onDown, fg));
			SoundController.getInstance().play('music_bg',null, 0,0,-1);
		} else {
			
		}
	};
	fg.initUI = function(){
		canvas = document.getElementById('gameHolder');
		stage = new cjs.Stage(canvas);
		cjs.Ticker.setFPS(fps);
		cjs.Ticker.addEventListener('tick', stage);
		this.wrap = new cjs.Container;
		stage.addChild(this.wrap);
		this.bgLayer = new cjs.AutoFitLayer;
		this.wrap.addChild(this.bgLayer);
		this.bgAnimationLayer = new cjs.Container;
		this.wrap.addChild(this.bgAnimationLayer);
		this.gameLayer = new cjs.Container;
		this.wrap.addChild(this.gameLayer);
		this.musicLayer = new cjs.Container;
		this.wrap.addChild(this.musicLayer);
		this.transitionLayer = new cjs.Container;
		this.wrap.addChild(this.transitionLayer);
		this.topLayer = new cjs.Container;
		this.wrap.addChild(this.topLayer);
		this.loadingBar = new this.LoadingUI;
		this.wrap.addChild(this.loadingBar);

	};
	fg.onDown = function(evt) {
		var star = new this.ClickStar();
		star.scaleX = star.scaleY = currentScale;
		star.x = stage.mouseX;
		star.y = stage.mouseY;
		star.mouseEnabled = false;
		this.topLayer.addChild(star);
	};
})(this.FandlrGame, createjs);

(function (fg, cjs) {

var p,lib={}; 
(lib.heart = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.sprite555();
	this.instance.setTransform(171.9,210.2,2.241,2.241);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(223,149,103.8,103.8);


// symbols:
(lib.shape554 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHgWIADgHIAHgCQAEAAADACIADAHQAAAEgDADQgDADgEAAQgEAAgDgDIgDgHAAFAQQAAAHgFAEQgDAFgHAAQgHAAgFgFQgEgEAAgHQAAgHAEgFQAFgEAHAAQAHAAADAEQAFAFAAAHIAAAA").cp();
	this.shape.setTransform(-11.4,-5.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.773)"],[0,1],-4.2,-1.3,0,-4.2,-1.3,26.6).s("#FFFFFF").ss(1,1,1).p("ACtgxQgCA7gwAzQgvAzhKAiQhCgigygxQgygwgHg7QgIg9A6gfQA6gfBEBIQA/hAA1AZQA2AYgCA9IAAAA").cp();
	this.shape_1.setTransform(0.3,2.6);

	// 图层 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0.1,0,0,0.1,24.5).s().p("AAAjmQBgAABDBFQBEBCAABfQAABghEBDQhDBEhgAAQhfAAhDhEQhEhDAAhgQAAhfBEhCQBDhFBfAAIAAAA").cp();
	this.shape_2.setTransform(0,0.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-22.9,46.3,46.3);


(lib.shape553 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0.1,0,0,0.1,10.9).s().p("ABIhHQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeIAAAA").cp();

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,20.5,20.5);


(lib.sprite555 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 12
	this.instance = new lib.shape554("synched",0);
	this.instance.setTransform(63.3,-16,0.649,0.649,-41);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:57.8,y:-25},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:52.3,y:-34},0).wait(1).to({x:46.5,y:-42.8},0).wait(1).to({x:40.2,y:-51.2},0).wait(1).to({x:33.2,y:-59.1},0).wait(1).to({x:25.6,y:-66.4},0).wait(1).to({x:17.1,y:-72.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:7.8,y:-77.6},0).wait(1).to({x:-2,y:-81.3},0).wait(1).to({x:-12.2,y:-83.8},0).wait(1).to({x:-22.6,y:-85.6},0).wait(1).to({x:-33.1,y:-86.8},0).wait(1).to({x:-43.6,y:-87.7},0).wait(1).to({x:-54.1,y:-88.6},0).wait(1).to({x:-64.6,y:-89.8},0).wait(1).to({x:-74.9,y:-91.3},0).wait(1).to({x:-85.1,y:-93.2},0).wait(1).to({x:-95.3,y:-95.4},0).wait(1).to({x:-105.4,y:-98.1},0).wait(1).to({x:-115.3,y:-101.3},0).wait(1).to({x:-125.1,y:-105.1},0).wait(1).to({x:-134.6,y:-109.5},0).wait(1).to({x:-143.8,y:-114.7},0).wait(1).to({x:-152.5,y:-120.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-160.8,y:-127.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-169.5,y:-135.6},0).wait(1).to({x:-177.3,y:-145},0).wait(1).to({x:-183.9,y:-155.3},0).wait(1).to({x:-189.5,y:-166.1},0).wait(1).to({x:-194.1,y:-177.5},0).wait(1).to({x:-197.6,y:-189.3},0).wait(1).to({x:-200.2,y:-201.3},0).wait(1).to({x:-202,y:-213.4},0).wait(1).to({x:-203.1,y:-225.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-203.7,y:-238},0).wait(1).to({x:-203.8,y:-250.3},0).wait(1).to({x:-203.5,y:-262.6},0).wait(1).to({x:-202.9,y:-274.8},0).wait(1).to({x:-201.9,y:-287},0).wait(1).to({x:-200.5,y:-299},0).wait(1).to({x:-198.3,y:-311.1},0).wait(1).to({x:-195.6,y:-322.9},0).wait(1).to({x:-192.1,y:-334.6},0).wait(1).to({x:-187.8,y:-346},0).wait(1).to({x:-182.6,y:-357.1},0).wait(1).to({x:-176.6,y:-367.7},0).wait(1).to({x:-169.7,y:-377.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-162,y:-387.3},0).wait(1).to({x:-153.6,y:-396.1},0).wait(1).to({x:-144.4,y:-404.2},0).wait(1).to({x:-134.6,y:-411.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-124.3,y:-418.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-111.8,y:-423},0).wait(2));

	// Layer 10
	this.instance_1 = new lib.shape553("synched",0);
	this.instance_1.setTransform(63.3,-16,1.466,1.466,-41);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:57.8,y:-24.9},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:52.4,y:-33.9},0).wait(1).to({x:46.6,y:-42.8},0).wait(1).to({x:40.3,y:-51.2},0).wait(1).to({x:33.3,y:-59.2},0).wait(1).to({x:25.7,y:-66.4},0).wait(1).to({x:17.1,y:-72.6},0).wait(1).to({x:7.9,y:-77.6},0).wait(1).to({x:-1.9,y:-81.3},0).wait(1).to({x:-12.1,y:-83.8},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-22.5,y:-85.6},0).wait(1).to({x:-33,y:-86.9},0).wait(1).to({x:-43.5,y:-87.8},0).wait(1).to({x:-54.1,y:-88.6},0).wait(1).to({x:-64.5,y:-89.8},0).wait(1).to({x:-74.9,y:-91.3},0).wait(1).to({x:-85.1,y:-93.2},0).wait(1).to({x:-95.2,y:-95.5},0).wait(1).to({x:-105.3,y:-98.2},0).wait(1).to({x:-115.2,y:-101.4},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-125,y:-105.1},0).wait(1).to({x:-134.6,y:-109.6},0).wait(1).to({x:-143.7,y:-114.8},0).wait(1).to({x:-152.5,y:-120.6},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-160.7,y:-127.2},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-169.5,y:-135.6},0).wait(1).to({x:-177.2,y:-145},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-183.9,y:-155.2},0).wait(1).to({x:-189.5,y:-166},0).wait(1).to({x:-194.1,y:-177.4},0).wait(1).to({x:-197.6,y:-189.3},0).wait(1).to({x:-200.3,y:-201.2},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-202,y:-213.3},0).wait(1).to({x:-203.1,y:-225.6},0).wait(1).to({x:-203.6,y:-237.9},0).wait(1).to({x:-203.8,y:-250.2},0).wait(1).to({x:-203.5,y:-262.5},0).wait(1).to({x:-202.9,y:-274.7},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-201.9,y:-286.9},0).wait(1).to({x:-200.4,y:-299.1},0).wait(1).to({x:-198.3,y:-311},0).wait(1).to({x:-195.5,y:-322.8},0).wait(1).to({x:-192,y:-334.5},0).wait(1).to({x:-187.7,y:-345.9},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-182.5,y:-357},0).wait(1).to({x:-176.5,y:-367.6},0).wait(1).to({x:-169.6,y:-377.7},0).wait(1).to({x:-161.9,y:-387.1},0).wait(1).to({x:-153.5,y:-396},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-144.3,y:-404.1},0).wait(1).to({x:-134.5,y:-411.5},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-124.3,y:-418.1},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:-111.8,y:-423},0).wait(2));

	// Layer 9
	this.instance_2 = new lib.shape554("synched",0);
	this.instance_2.setTransform(13.7,39.7,0.851,0.851,-41);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:3.7,y:35},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-5.7,y:29.5},0).wait(1).to({x:-14.7,y:23},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-23.2,y:15.8},0).wait(1).to({x:-31.3,y:8.4},0).wait(1).to({x:-39.3,y:0.8},0).wait(1).to({x:-47.2,y:-6.9},0).wait(1).to({x:-55.1,y:-14.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-63,y:-22.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-71.3,y:-30},0).wait(1).to({x:-80,y:-37.1},0).wait(1).to({x:-89.5,y:-43.5},0).wait(1).to({x:-99.4,y:-49},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-109.7,y:-53.7},0).wait(1).to({x:-120.2,y:-57.9},0).wait(1).to({x:-130.9,y:-61.4},0).wait(1).to({x:-141.9,y:-64.3},0).wait(1).to({x:-152.8,y:-67.1},0).wait(1).to({x:-163.8,y:-69.8},0).wait(1).to({x:-174.8,y:-72.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-185.9,y:-74.7},0).wait(1).to({x:-196.9,y:-77.3},0).wait(1).to({x:-207.9,y:-80.1},0).wait(1).to({x:-218.8,y:-83},0).wait(1).to({x:-229.6,y:-86.4},0).wait(1).to({x:-240.2,y:-90.5},0).wait(1).to({x:-250.5,y:-95.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-258.6,y:-103.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-264.1,y:-113},0).wait(1).to({x:-268.9,y:-123.4},0).wait(1).to({x:-273.1,y:-133.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-277.1,y:-144.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-280.9,y:-154.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-284.1,y:-163.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-287.1,y:-172},0).wait(1).to({x:-290.2,y:-180.7},0).wait(1).to({x:-293.2,y:-189.5},0).wait(1).to({x:-296.1,y:-198.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-299,y:-207.2},0).wait(1).to({x:-301.8,y:-215.9},0).wait(1).to({x:-304.6,y:-224.7},0).wait(1).to({x:-307.3,y:-233.6},0).wait(1).to({x:-310.1,y:-242.4},0).wait(1).to({x:-312.8,y:-251.1},0).wait(1).to({x:-315.5,y:-260},0).wait(1).to({x:-318.2,y:-268.8},0).wait(1).to({x:-320.8,y:-277.6},0).wait(1).to({x:-323.4,y:-286.5},0).wait(1).to({x:-326,y:-295.3},0).wait(1).to({x:-328.6,y:-304.1},0).wait(1).to({x:-331.1,y:-312.6},0).wait(1).to({x:-333.6,y:-321.1},0).wait(1).to({x:-336.2,y:-329.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-338.8,y:-338.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-341.5,y:-347},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-344.3,y:-355.7},0).wait(12));

	// Layer 6
	this.instance_3 = new lib.shape554("synched",0);
	this.instance_3.setTransform(100,-0.1,0.7,0.7,6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({startPosition:0,_off:false},0).to({rotation:5.8,x:98.9,y:-6.6},1).to({x:97.9,y:-13.2},1).to({x:67.5,y:-203.9},29).to({x:63.1,y:-226.6},3).to({rotation:6,x:139.7,y:-421.1},23).to({_off:true},1).wait(20));

	// Layer 3
	this.instance_4 = new lib.shape554("synched",0);
	this.instance_4.setTransform(46,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:39.5,y:-10.1},0).wait(1).to({x:32.9,y:-15.9},0).wait(1).to({x:26.2,y:-21.7},0).wait(1).to({x:19.5,y:-27.5},0).wait(1).to({x:12.8,y:-33.1},0).wait(1).to({x:6.1,y:-38.7},0).wait(1).to({x:-0.5,y:-44.3},0).wait(1).to({x:-7.3,y:-49.8},0).wait(1).to({x:-14,y:-55.3},0).wait(1).to({x:-20.8,y:-60.7},0).wait(1).to({x:-27.6,y:-66.2},0).wait(1).to({x:-34.3,y:-71.7},0).wait(1).to({x:-41,y:-77.3},0).wait(1).to({x:-47.6,y:-82.8},0).wait(1).to({x:-54.3,y:-88.5},0).wait(1).to({x:-60.9,y:-94.1},0).wait(1).to({x:-67.4,y:-99.8},0).wait(1).to({x:-74,y:-105.5},0).wait(1).to({x:-80.5,y:-111.3},0).wait(1).to({x:-87,y:-117},0).wait(1).to({x:-93.4,y:-122.8},0).wait(1).to({x:-99.8,y:-128.7},0).wait(1).to({x:-106.1,y:-134.6},0).wait(1).to({x:-112.3,y:-140.6},0).wait(1).to({x:-118.5,y:-146.6},0).wait(1).to({x:-124.7,y:-152.7},0).wait(1).to({x:-130.7,y:-158.9},0).wait(1).to({x:-136.7,y:-165.1},0).wait(1).to({x:-142.6,y:-171.5},0).wait(1).to({x:-148.5,y:-177.9},0).wait(1).to({x:-154.2,y:-184.3},0).wait(1).to({x:-159.9,y:-190.9},0).wait(1).to({x:-165.4,y:-197.6},0).wait(1).to({x:-170.9,y:-204.9},0).wait(1).to({x:-176.1,y:-212.3},0).wait(1).to({x:-181,y:-219.9},0).wait(1).to({x:-185.6,y:-227.8},0).wait(1).to({x:-189.7,y:-235.9},0).wait(1).to({x:-193.3,y:-244.3},0).wait(1).to({x:-196.4,y:-253},0).wait(1).to({x:-198.9,y:-261.8},0).wait(1).to({x:-200.8,y:-270.8},0).wait(1).to({x:-202.3,y:-279.9},0).wait(1).to({x:-203.2,y:-289},0).wait(1).to({x:-203.6,y:-298.2},0).wait(1).to({x:-203.7,y:-307.4},0).wait(1).to({x:-203.4,y:-316.6},0).wait(1).to({x:-202.7,y:-325.7},0).wait(1).to({x:-201.7,y:-334.9},0).wait(1).to({x:-200.3,y:-344},0).wait(1).to({x:-198.7,y:-353},0).wait(1).to({x:-196.8,y:-362},0).wait(1).to({x:-194.7,y:-370.9},0).wait(1).to({x:-192.3,y:-379.8},0).wait(1).to({x:-189.8,y:-388.6},0).wait(1).to({x:-187.2,y:-397.4},0).wait(1).to({x:-184.4,y:-406.2},0).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.8,-27.2,46.3,46.3);
fg.HeartStar = lib.sprite555;
})(FandlrGame, createjs);

(function(fg, cjs){
	var lib={},p;


// stage content:
(lib.heart2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.animStars();
	this.instance.setTransform(278.8,215.2,1,1,0,0,0,24.6,14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(256.2,183.7,37.7,33.6);


// symbols:
(lib.star5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE2E5").ss(1,1,1).p("ACtgxQgCA7gwAzQgvAzhKAiQhCgigygxQgygwgHg7QgIg9A6gfQA6gfBEBIQA/hAA1AZQA2AYgCA9IAAAA").cp();
	this.shape.setTransform(15,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.773)"],[0,1],-4.2,-1.3,0,-4.2,-1.3,26.6).s().p("ACtgxQgCA7gwAzQgvAzhKAiQhCgigygxQgygwgHg7QgIg9A6gfQA6gfBEBIQA/hAA1AZQA2AYgCA9IAAAAAhvhBQAAgHgFgFQgFgEgHAAQgGAAgFAEQgFAFAAAHQAAAHAFAEQAFAFAGAAQAHAAAFgFQAFgEAAgHIAAAAAhZhpIgDgHQgDgCgEAAIgHACIgDAHIADAHQADADAEAAQAEAAADgDQADgDAAgEIAAAA").cp();
	this.shape_1.setTransform(15,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbgWQAAAEgDADQgDADgEAAQgEAAgDgDIgDgHIADgHIAHgCQAEAAADACIADAHAAFAQQAAAHgFAEQgDAFgHAAQgHAAgFgFQgEgEAAgHQAAgHAEgFQAFgEAHAAQAHAAADAEQAFAFAAAHIAAAA").cp();
	this.shape_2.setTransform(3.3,6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-0.3,34.8,29.4);


(lib.star4 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE2E5").ss(1,1,1).p("AB7A9QgvAzhKAiQhCgigygxQgygwgHg7QgIg9A6gfQA6gfBEBIQA/hAA1AZQA2AYgCA9QgCA7gwAzIAAAA").cp();
	this.shape_3.setTransform(12.4,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbgWQAAAEgDADQgDADgEAAQgEAAgDgDIgDgHIADgHIAHgCQAEAAADACIADAHAAFAQQAAAHgFAEQgDAFgHAAQgHAAgFgFQgEgEAAgHQAAgHAEgFQAFgEAHAAQAHAAADAEQAFAFAAAHIAAAA").cp();
	this.shape_4.setTransform(0.7,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.773)"],[0,1],-4.2,-1.3,0,-4.2,-1.3,26.6).s().p("AB7A9QgvAzhKAiQhCgigygxQgygwgHg7QgIg9A6gfQA6gfBEBIQA/hAA1AZQA2AYgCA9QgCA7gwAzIAAAAAhvhBQAAgHgFgFQgFgEgHAAQgGAAgFAEQgFAFAAAHQAAAHAFAEQAFAFAGAAQAHAAAFgFQAFgEAAgHIAAAAAhZhpIgDgHQgDgCgEAAIgHACIgDAHIADAHQADADAEAAQAEAAADgDQADgDAAgEIAAAA").cp();
	this.shape_5.setTransform(12.4,12.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-2.1,34.8,29.4);


(lib.animStars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 14
	this.instance = new lib.star5();
	this.instance.setTransform(54.8,-5.3,1.124,1.124,-28.5,0,0,15,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,rotation:104.2,x:217.6,y:10.2,alpha:0.102},20,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// Layer 12
	this.instance_1 = new lib.star5();
	this.instance_1.setTransform(20.6,2.7,0.946,0.946,-11,0,0,15,14.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:15.1,scaleX:0.59,scaleY:0.59,rotation:-101.2,x:-126.3,y:48.5,alpha:0.051},16,cjs.Ease.get(0.99)).to({_off:true},1).wait(14));

	// Layer 5
	this.instance_2 = new lib.star4();
	this.instance_2.setTransform(23.8,1.2,0.796,0.796,7.2,0,0,12.4,12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:12.3,regY:12.4,scaleX:0.78,scaleY:0.78,rotation:-3.8,x:17.6,y:-6.7,alpha:0.926},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-14.6,x:11.4,y:-14.2,alpha:0.852},0).wait(1).to({regX:12.4,regY:12.5,scaleX:0.76,scaleY:0.76,rotation:-24.9,x:4.9,y:-20.8,alpha:0.781},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-34.9,x:-1.4,y:-26.9,alpha:0.715},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-44.4,x:-8.2,y:-32.2,alpha:0.652},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-53.4,x:-14.9,y:-37,alpha:0.59},0).wait(1).to({regX:12.3,scaleX:0.73,scaleY:0.73,rotation:-62,x:-21.7,y:-41,alpha:0.535},0).wait(1).to({regX:12.4,regY:12.4,scaleX:0.72,scaleY:0.72,rotation:-70.2,x:-28.4,y:-44.4,alpha:0.48},0).wait(1).to({regX:12.3,scaleX:0.71,scaleY:0.71,rotation:-78,x:-34.9,y:-47.1,alpha:0.426},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-85.3,x:-41.2,y:-49.3,alpha:0.379},0).wait(1).to({regX:12.4,regY:12.5,scaleX:0.7,scaleY:0.7,rotation:-91.8,x:-47.2,y:-51.1,alpha:0.332},0).wait(1).to({regY:12.4,scaleX:0.69,scaleY:0.69,rotation:-98.3,x:-52.9,y:-52.3,alpha:0.289},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-104.1,x:-58.3,y:-53.3,alpha:0.25},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-109.6,x:-63.4,y:-53.9,alpha:0.215},0).wait(1).to({regX:12.3,scaleX:0.67,scaleY:0.67,rotation:-114.8,x:-68,y:-54.3,alpha:0.18},0).wait(1).to({regX:12.4,scaleX:0.67,scaleY:0.67,rotation:-119.4,x:-72.3,y:-54.5,alpha:0.148},0).wait(1).to({regX:12.5,regY:12.5,scaleX:0.67,scaleY:0.67,rotation:-123.6,x:-76.1,y:-54.6,alpha:0.121},0).wait(1).to({regX:12.3,scaleX:0.66,scaleY:0.66,rotation:-127.4,x:-79.5,y:-54.4,alpha:0.094},0).wait(1).to({regX:12.4,scaleX:0.66,scaleY:0.66,rotation:-130.7,x:-82.6,alpha:0.074},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-133.6,x:-85.2,y:-54.2,alpha:0.055},0).wait(1).to({regY:12.4,scaleX:0.65,scaleY:0.65,rotation:-135.9,x:-87.5,y:-54,alpha:0.035},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-137.9,x:-89.2,y:-53.8,alpha:0.023},0).wait(1).to({regY:12.5,scaleX:0.65,scaleY:0.65,rotation:-139.5,x:-90.6,y:-53.7,alpha:0.012},0).wait(1).to({regY:12.4,scaleX:0.65,scaleY:0.65,rotation:-140.7,x:-91.7,y:-53.5,alpha:0.008},0).wait(1).to({regX:12.3,regY:12.5,scaleX:0.65,scaleY:0.65,rotation:-141.2,x:-92.1,alpha:0},0).wait(1).to({regX:12.4,scaleX:0.65,scaleY:0.65,rotation:-141.5,x:-92.5,y:-54.2},0).to({_off:true},1).wait(12).call(this.onComplete,[], this));

	// Layer 4
	this.instance_3 = new lib.star5();
	this.instance_3.setTransform(32.4,20.6,1.124,1.124,-28.5,0,0,15,14.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-12.3,x:50,y:16.8,alpha:0.891},0).wait(1).to({regX:14.9,regY:14.3,scaleX:1,scaleY:1,rotation:2.5,x:66.8,y:15.7,alpha:0.789},0).wait(1).to({regY:14.2,scaleX:0.95,scaleY:0.95,rotation:16.5,x:82.9,y:16.5,alpha:0.695},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:29.4,x:97.5,y:19.2,alpha:0.605},0).wait(1).to({regX:15,scaleX:0.85,scaleY:0.85,rotation:41.4,x:110.6,y:23.3,alpha:0.527},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:52.4,x:122.1,y:28.1,alpha:0.453},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:62.2,x:132.2,y:33.2,alpha:0.387},0).wait(1).to({regY:14.3,scaleX:0.73,scaleY:0.73,rotation:71,x:140.9,y:38.4,alpha:0.328},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:78.9,x:148.2,y:43.3,alpha:0.273},0).wait(1).to({regX:14.9,regY:14.2,scaleX:0.68,scaleY:0.68,rotation:85.7,x:154.5,y:47.8,alpha:0.227},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:91.1,x:159.5,y:51.8,alpha:0.188},0).wait(1).to({regY:14.3,scaleX:0.64,scaleY:0.64,rotation:95.8,x:163.6,y:55.2,alpha:0.156},0).wait(1).to({regX:15,scaleX:0.62,scaleY:0.62,rotation:99.5,x:166.7,y:57.9,alpha:0.133},0).wait(1).to({regY:14.2,scaleX:0.61,scaleY:0.61,rotation:102,x:169,y:59.9,alpha:0.117},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:103.5,x:170.3,y:61.1,alpha:0.105},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:104.2,x:171.1,y:61.7,alpha:0.102},0).to({_off:true},1).wait(20));

	// Layer 3
	this.instance_4 = new lib.star4();
	this.instance_4.setTransform(12.9,19.8,0.735,0.735,-9.9,0,0,12.4,12.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-21.8,x:-3.9,y:25.4,alpha:0.887},0).wait(1).to({regY:12.5,scaleX:0.71,scaleY:0.71,rotation:-33.1,x:-19.1,y:31.1,alpha:0.777},0).wait(1).to({regY:12.6,scaleX:0.7,scaleY:0.7,rotation:-43.7,x:-33,y:37.4,alpha:0.676},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-53.5,x:-45.6,y:44.1,alpha:0.586},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-62.5,x:-56.6,y:51.2,alpha:0.5},0).wait(1).to({regX:12.3,regY:12.5,scaleX:0.67,scaleY:0.67,rotation:-70.7,x:-66.2,y:58.6,alpha:0.422},0).wait(1).to({regX:12.4,scaleX:0.66,scaleY:0.66,rotation:-78,x:-74,y:66,alpha:0.352},0).wait(1).to({regY:12.6,scaleX:0.66,scaleY:0.66,rotation:-84.8,x:-80.3,y:73.7,alpha:0.289},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-90.3,x:-85,y:81,alpha:0.234},0).wait(1).to({regY:12.5,scaleX:0.64,scaleY:0.64,rotation:-95.4,x:-88.3,y:87.9,alpha:0.184},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-99.8,x:-90.4,y:93.9,alpha:0.145},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-103.3,x:-91.8,y:99,alpha:0.109},0).wait(1).to({regY:12.6,scaleX:0.63,scaleY:0.63,rotation:-105.9,x:-92.4,y:103.2,alpha:0.086},0).wait(1).to({regX:12.5,scaleX:0.63,scaleY:0.63,rotation:-107.9,x:-92.7,y:106,alpha:0.066},0).wait(1).to({regX:12.4,scaleX:0.63,scaleY:0.63,rotation:-109.1,x:-92.9,y:107.8,alpha:0.055},0).wait(1).to({regX:12.5,regY:12.5,rotation:-109.5,x:-93.2,y:108.3,alpha:0.051},0).to({_off:true},1).wait(16));

	// Layer 2
	this.instance_5 = new lib.star4();
	this.instance_5.setTransform(36.3,15,0.666,0.666,-9.9,0,0,12.4,12.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:2.5,x:56.5,y:-1.3,alpha:0.891},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:14.1,x:76.5,y:-15,alpha:0.789},0).wait(1).to({regX:12.3,scaleX:0.61,scaleY:0.61,rotation:25.1,x:96.3,y:-26.1,alpha:0.695},0).wait(1).to({regX:12.4,scaleX:0.59,scaleY:0.59,rotation:35.1,x:115.7,y:-34.5,alpha:0.605},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:44.4,x:134.5,y:-40.2,alpha:0.527},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:52.9,x:152.1,y:-43.4,alpha:0.453},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:60.7,x:168.4,y:-44.6,alpha:0.387},0).wait(1).to({regY:12.6,scaleX:0.54,scaleY:0.54,rotation:67.5,x:183,y:-44,alpha:0.328},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:73.7,x:195.7,y:-42.1,alpha:0.273},0).wait(1).to({regY:12.4,scaleX:0.52,scaleY:0.52,rotation:78.9,x:206.8,y:-39.6,alpha:0.227},0).wait(1).to({regY:12.5,scaleX:0.51,scaleY:0.51,rotation:83.2,x:215.8,y:-36.9,alpha:0.188},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:87,x:223.1,y:-34.3,alpha:0.156},0).wait(1).to({regY:12.4,scaleX:0.5,scaleY:0.5,rotation:89.7,x:228.8,y:-32,alpha:0.133},0).wait(1).to({regY:12.5,scaleX:0.5,scaleY:0.5,rotation:91.5,x:232.6,y:-30.3,alpha:0.117},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:92.8,x:235,y:-29.2,alpha:0.105},0).wait(1).to({regX:12.3,regY:12.4,scaleX:0.5,scaleY:0.5,rotation:93.3,x:236.2,y:-29.7,alpha:0.102},0).to({_off:true},1).wait(18));

	// Layer 1
	this.instance_6 = new lib.star5();
	this.instance_6.setTransform(20.8,-0.6,0.946,0.946,-11,0,0,15,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:14.9,scaleX:0.9,scaleY:0.9,rotation:-21.1,x:0.8,y:-8.6,alpha:0.891},0).wait(1).to({regX:15,scaleX:0.87,scaleY:0.87,rotation:-30.9,x:-18,y:-15.1,alpha:0.789},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-39.9,x:-36.3,y:-19.5,alpha:0.695},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-48.2,x:-53.8,y:-22,alpha:0.609},0).wait(1).to({regY:14.2,scaleX:0.77,scaleY:0.77,rotation:-56,x:-70.3,y:-22.2,alpha:0.527},0).wait(1).to({regY:14.3,scaleX:0.74,scaleY:0.74,rotation:-63.2,x:-85.4,y:-19.8,alpha:0.449},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-69.8,x:-98.7,y:-15.3,alpha:0.383},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-75.7,x:-109.9,y:-8.7,alpha:0.32},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-81,x:-118.6,y:-1.1,alpha:0.262},0).wait(1).to({regX:15.1,scaleX:0.65,scaleY:0.65,rotation:-85.8,x:-125.4,y:6.5,alpha:0.215},0).wait(1).to({regX:15,scaleX:0.63,scaleY:0.63,rotation:-89.8,x:-130.4,y:14,alpha:0.172},0).wait(1).to({regY:14.2,scaleX:0.62,scaleY:0.62,rotation:-93.1,x:-134,y:20.7,alpha:0.137},0).wait(1).to({regX:15.1,regY:14.3,scaleX:0.61,scaleY:0.61,rotation:-95.9,x:-136.5,y:26.2,alpha:0.105},0).wait(1).to({regX:14.9,scaleX:0.6,scaleY:0.6,rotation:-98.1,x:-138.4,y:30.7,alpha:0.082},0).wait(1).to({regX:15,scaleX:0.59,scaleY:0.59,rotation:-99.8,x:-139.5,y:34.1,alpha:0.066},0).wait(1).to({regX:14.9,scaleX:0.59,scaleY:0.59,rotation:-100.6,x:-140.2,y:36.1,alpha:0.055},0).wait(1).to({regX:15.1,scaleX:0.59,scaleY:0.59,rotation:-101.2,x:-141.3,y:36.5,alpha:0.051},0).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.onComplete = function(){
	this.parent.removeChild(this);
};
p.nominalBounds = new cjs.Rectangle(2,-17.4,37.7,33.6);
	fg.ClickStar = lib.animStars;
})(FandlrGame, createjs);


function PreventDefault(event) {
	event.preventDefault() ;
}
function init(){
	window.ontouchmove = PreventDefault;
	FandlrGame.init();
}