(function (fg, cjs) {
var lib = {};
var p; 


(lib.star = function() {
	this.initialize(fg.getAsset('star'));
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,166);


(lib.sprite36 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.star();
	this.instance.setTransform(0.3,5.4,1.429,1.428);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,5.4,250,237.1);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 11
	this.instance_1 = new lib.sprite36();
	this.instance_1.setTransform(10.9,-11.6,0.018,0.018);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:2.8,y:-19.3},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-1.1,y:-23.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-5.2,y:-27.2},0).to({scaleX:0.08,scaleY:0.08,x:3.2,y:-18.8,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:6.1,y:-16,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:9,y:-13.3,alpha:0},0).to({_off:true},1).wait(14));

	// Layer 10
	this.instance_2 = new lib.sprite36();
	this.instance_2.setTransform(66.6,-16.1,0.018,0.018);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:58.4,y:-23.8},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:54.4,y:-27.8},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:50.3,y:-31.7},0).to({scaleX:0.08,scaleY:0.08,x:58.9,y:-23.3,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:61.8,y:-20.5,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:64.7,y:-17.8,alpha:0},0).to({_off:true},1).wait(7));

	// Layer 9
	this.instance_3 = new lib.sprite36();
	this.instance_3.setTransform(-8.7,-7.9,0.018,0.018);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-16.7,y:-15.6},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-20.7,y:-19.5},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-24.8,y:-23.5},0).to({scaleX:0.08,scaleY:0.08,x:-16.1,y:-15.1,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-13.3,y:-12.3,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-10.4,y:-9.5,alpha:0},0).to({_off:true},1).wait(13));

	// Layer 8
	this.instance_4 = new lib.sprite36();
	this.instance_4.setTransform(35.5,4,0.018,0.018);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:27.4,y:-3.7},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:23.3,y:-7.6},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:19.3,y:-11.6},0).to({scaleX:0.08,scaleY:0.08,x:27.9,y:-3.2,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:30.8,y:-0.4,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:33.7,y:2.2,alpha:0},0).to({_off:true},1).wait(4));

	// Layer 7
	this.instance_5 = new lib.sprite36();
	this.instance_5.setTransform(-75.6,-2.4,0.018,0.018);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.08,scaleY:0.08,x:-83.6,y:-10.1},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-87.6,y:-14},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-91.7,y:-18},0).to({scaleX:0.08,scaleY:0.08,x:-83,y:-9.6,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-80.2,y:-6.8,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-77.3,y:-4,alpha:0},0).to({_off:true},1).wait(6).to({scaleX:0.02,scaleY:0.02,x:40.2,y:-13.2,alpha:1,_off:false},0).to({scaleX:0.08,scaleY:0.08,x:32.1,y:-21},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:28,y:-24.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:24,y:-28.9},0).to({scaleX:0.08,scaleY:0.08,x:32.6,y:-20.5,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:35.5,y:-17.7,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:38.4,y:-14.9,alpha:0},0).to({_off:true},1).wait(9));

	// Layer 6
	this.instance_6 = new lib.sprite36();
	this.instance_6.setTransform(-19.9,-6.9,0.018,0.018);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-27.9,y:-14.6},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-31.9,y:-18.5},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-36,y:-22.5},0).to({scaleX:0.08,scaleY:0.08,x:-27.3,y:-14.1,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-24.5,y:-11.3,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-21.6,y:-8.5,alpha:0},0).to({_off:true},1).wait(8).to({scaleX:0.02,scaleY:0.02,x:17.2,y:-30.4,alpha:1,_off:false},0).to({scaleX:0.08,scaleY:0.08,x:9,y:-38.2},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:5,y:-42.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:0.9,y:-46.1},0).to({scaleX:0.08,scaleY:0.08,x:9.5,y:-37.7,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:12.4,y:-34.9,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:15.3,y:-32.2,alpha:0},0).wait(1));

	// Layer 5
	this.instance_7 = new lib.sprite36();
	this.instance_7.setTransform(-95.2,1.3,0.018,0.018);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-103.2,y:-6.3},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-107.2,y:-10.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-111.3,y:-14.2},0).to({scaleX:0.08,scaleY:0.08,x:-102.6,y:-5.8,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-99.8,y:-3,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-96.9,y:-0.3,alpha:0},0).to({_off:true},1).wait(7).to({scaleX:0.02,scaleY:0.02,x:0,y:-18.6,alpha:1,_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-8.1,y:-26.4},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-12.1,y:-30.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-16.2,y:-34.3},0).to({scaleX:0.08,scaleY:0.08,x:-7.5,y:-25.9,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-4.7,y:-23.1,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-1.8,y:-20.3,alpha:0},0).to({_off:true},1).wait(7));

	// Layer 4
	this.instance_8 = new lib.sprite36();
	this.instance_8.setTransform(-50.9,13.2,0.018,0.018);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-58.9,y:5.3},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-63,y:1.4},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-67.1,y:-2.3},0).to({scaleX:0.08,scaleY:0.08,x:-58.4,y:5.9,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-55.5,y:8.7,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-52.7,y:11.5,alpha:0},0).to({_off:true},1).wait(15));

	// Layer 3
	this.instance_9 = new lib.sprite36();
	this.instance_9.setTransform(-46.2,-4,0.018,0.018);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-54.2,y:-11.7},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-58.3,y:-15.7},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-62.4,y:-19.6},0).to({scaleX:0.08,scaleY:0.08,x:-53.7,y:-11.2,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-50.8,y:-8.4,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-48,y:-5.7,alpha:0},0).to({_off:true},1).wait(20));

	// Layer 2
	this.instance_10 = new lib.sprite36();
	this.instance_10.setTransform(-69.3,-21.3,0.018,0.018);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-77.3,y:-29},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-81.3,y:-32.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-85.4,y:-36.9},0).to({scaleX:0.08,scaleY:0.08,x:-76.7,y:-28.5,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-73.9,y:-25.7,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-71,y:-22.9,alpha:0},0).to({_off:true},1).wait(11));

	// Layer 1
	this.instance_11 = new lib.sprite36();
	this.instance_11.setTransform(-86.6,-9.4,0.018,0.018);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,x:-94.6,y:-17.1},2).wait(1).to({scaleX:0.12,scaleY:0.12,x:-98.6,y:-21.1},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-102.7,y:-25},0).to({scaleX:0.08,scaleY:0.08,x:-94,y:-16.6,alpha:0.398},3).wait(1).to({scaleX:0.06,scaleY:0.06,x:-91.2,y:-13.8,alpha:0.199},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-88.3,y:-11.1,alpha:0},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-2.3,4.4,4.2);
fg.BgStar = lib.sprite35;
})(FandlrGame, createjs);
(function(fg, cjs){
	var lib = {},p;
	var tmp = {};
	
	
	lib.show = function(){
		if(fg.bgLayer.children.length == 0 ) {
			var bgImg = new cjs.Bitmap(fg.getAsset('bg'));
			

			fg.bgLayer.addChild(bgImg, true);
			
			
			fg.heartStar1 = new fg.HeartStar;
			fg.heartStar1.setTransform(171.9*wScale,210.2*hScale,2.241*currentScale,2.241*currentScale);

			fg.bgAnimationLayer.addChild(fg.heartStar1);

			fg.heartStar2 = new fg.HeartStar;
			fg.heartStar2.setTransform(435*wScale,318*hScale,currentScale,currentScale,0,0,-180);

			fg.bgAnimationLayer.addChild(fg.heartStar2);
			this.bgStar1 = new fg.BgStar;
			this.bgStar1.setTransform(469.45, 50.2,4.763,4.66);
			fg.bgAnimationLayer.addChild(this.bgStar1);
			this.bgStar2 = new fg.BgStar;
			this.bgStar2.setTransform(325.85, 384.25,4.763,4.66,0,0,180);
			fg.bgAnimationLayer.addChild(this.bgStar2);
			this.lights = new cjs.Container;
			fg.bgAnimationLayer.addChild(this.lights);
			fg.lights = this.lights;
			fg.bgStar1 = this.bgStar1;
			fg.bgStar2 = this.bgStar2;
			fg.lights.scaleX = fg.lights.scaleY = currentScale;
			fg.lights.x = (stage.canvas.width - 500*wScale - 500)/2;
			fg.bgStar1.scaleY = fg.bgStar2.scaleY = 4.66*currentScale;
			fg.bgStar1.scaleX = fg.bgStar2.scaleX = 4.76*currentScale;
			fg.bgStar1.x = 469.45*wScale;
			fg.bgStar1.y = 50.2*hScale;
			fg.bgStar2.x = 325.852*wScale;
			fg.bgStar2.y = 384.25*hScale;
		}
		
		this.title = new cjs.Bitmap(fg.getAsset('title'));
		this.title.setTransform(208*wScale, 134*hScale, 0, 0);
		fg.gameLayer.addChild(this.title);

		this.startgirl = new cjs.Container;

		var body = new cjs.Bitmap(fg.getAsset('startgirl'));
		
		this.startgirl.addChild(body);

		
		
		this.startgirl.setTransform(842*wScale,curH - (srcH - 7.85)*currentScale,currentScale,currentScale);
		
		fg.gameLayer.addChild(this.startgirl);
		this.btn = new cjs.Container();
		sData = {images:[fg.getAsset('btns')]};
		sData.frames = [];
		sData.frames[0] = [0,0,90,38,0];
		this.playBtn = new cjs.Sprite(new cjs.SpriteSheet(sData));
		this.btn.addChild(this.playBtn);
		this.playBtn.addEventListener('click', cjs.proxy(this.playHandler, this));
		sData.frames[0] = [100,0,90,38,0];
		this.moreBtn = new cjs.Sprite(new cjs.SpriteSheet(sData));
		this.moreBtn.setTransform(85-108, 60);
		this.btn.addChild(this.moreBtn);
		var moreLink = GameAPI.Branding.getLink('more_games');
		if(!('error' in moreLink)) {
			this.moreBtn.addEventListener('click', moreLink.action);
		}
		this.btn.scaleX = this.btn.scaleY = currentScale;
		this.btn.setTransform(108*wScale, 351*hScale);
		fg.gameLayer.addChild(this.btn);
		this.isTitleAnimationComplete = false;
		this.isRoleAnimationComplete = false;
		fg.currentScene = this;
		this.startAnimation();
	};
	lib.startAnimation = function(){

		cjs.Tween.get(this.title).wait(15*fps).to({x:11*wScale,y:52*hScale,scaleX:currentScale,scaleY:currentScale},10*fps).call(this.onTitleComplete, [], this);
		cjs.Tween.get(this.startgirl).to({x:160*wScale},9*fps).to({x:192*wScale},4*fps);
	};
	lib.onTitleComplete = function(){
		this.isTitleAnimationComplete = true;
	};
	lib.playHandler = function(evt) {
		SoundController.getInstance().play('fx_click');
		this.playBtn.removeAllEventListeners('click');
		cjs.Tween.get(this.title).to({x:-500},8*fps);
		cjs.Tween.get(this.startgirl).to({x:stage.canvas.width + 500},8*fps).call(this.goNext, [], this);
		
	};
	lib.goNext = function(){
		fg.jumpTo('DressPage');
	};
	lib.doClean = function(){
		fg.gameLayer.removeAllChildren();
	};
	lib.doLayout = function(){
		
		this.title.scaleX = this.title.scaleY = currentScale;
		this.btn.scaleX = this.btn.scaleY = currentScale;
		this.btn.setTransform(108*wScale, 351*hScale);
		this.title.y = 52*hScale;
		this.title.x = 11*wScale;
		this.startgirl.scaleX = this.startgirl.scaleY = currentScale;
		this.startgirl.x = 189*wScale;
		this.startgirl.y = curH - (srcH - 7.85)*currentScale;
		
		
	};
	fg.scenes.StartPage = lib;
})(FandlrGame, createjs);