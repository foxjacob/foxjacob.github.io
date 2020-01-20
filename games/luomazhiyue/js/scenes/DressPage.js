/**
1 头发 2 外套 3 
*/
(function(fg,cjs){
	var lib = {},p;
	var tmp = {};
	tmp.createUI = function(girl){
		
		var moto = new cjs.Sprite(new cjs.SpriteSheet({images: [fg.getAsset("girl_moto")], frames: [[0,0,456,321,0,280.7,111.9],[456,0,456,321,0,280.7,111.9],[0,321,456,321,0,280.7,111.9],[456,321,456,321,0,280.7,111.9],[0,642,456,321,0,280.7,111.9],[456,642,456,321,0,280.7,111.9]]}));
		moto.setTransform(13.7, 7.25);
		girl.addDress(moto, 'moto');
		var hair2 = new cjs.Sprite(new cjs.SpriteSheet({images:[fg.getAsset('girl_hair2')],frames:[[0,0,97,125,0,15.95,166.05],[97,0,97,125,0,15.95,166.05],[0,125,97,125,0,15.95,166.05],[97,125,97,125,0,15.95,166.05],[0,250,97,125,0,15.95,166.05],[97,250,97,125,0,15.95,166.05]]}));
		hair2.setTransform(32.95,7.25);
		girl.addDress(hair2, 'hair');
		

		var body = new cjs.Bitmap(fg.getAsset('girl_body'));
		body.setTransform(24.25,-149);
		girl.addChild(body);
		
		var pants = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_pants')],
			frames:[[0,0,170,138,0,21.8,30.9],[170,0,170,138,0,21.8,30.9],[340,0,170,138,0,21.8,30.9],[0,138,170,138,0,21.8,30.9],[170,138,170,138,0,21.8,30.9],[340,138,170,138,0,21.8,30.9],[0,276,170,138,0,21.8,30.9],[170,276,170,138,0,21.8,30.9],[340,276,170,138,0,21.8,30.9]]
		}));
		pants.setTransform(32.95, 7.25);
		girl.addDress(pants, 'pants');
		var arm = new cjs.Bitmap(fg.getAsset('girl_arm'));
		arm.setTransform(23, -87);
		girl.addChild(arm);
		var top = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_top')],
			frames:[[0,0,122,134,0,14.9,113.55],[122,0,122,134,0,14.9,113.55],[244,0,122,134,0,14.9,113.55],[366,0,122,134,0,14.9,113.55],[0,134,122,134,0,14.9,113.55],[122,134,122,134,0,14.9,113.55],[244,134,122,134,0,14.9,113.55],[366,134,122,134,0,14.9,113.55],[0,268,122,134,0,14.9,113.55]]
		}));
		top.setTransform(32.95,7.25);
		girl.addDress(top, 'topCloth');
		var dress = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_dress')],
			frames:[[0,0,170,198,0,26.25,109.75],[170,0,170,198,0,26.25,109.75],[340,0,170,198,0,26.25,109.75],[0,198,170,198,0,26.25,109.75],[170,198,170,198,0,26.25,109.75]]
		}));
		dress.setTransform(32.95,7.25);
		girl.addDress(dress, 'dress');

		
		var hair = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_hair')],
			frames:[[0,0,87,109,0,12.45,161.85],[87,0,87,109,0,12.45,161.85],[0,109,87,109,0,12.45,161.85],[87,109,87,109,0,12.45,161.85],[0,218,87,109,0,12.45,161.85],[87,218,87,109,0,12.45,161.85],[0,327,87,109,0,12.45,161.85]]
		}));
		hair.setTransform(32.95, 7.25);
		girl.addDress(hair,'hair');

		var headdress = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_headdress')],
			frames:[[0,0,62,36,0,12.9,164.65],[62,0,62,36,0,12.9,164.65],[0,36,62,36,0,12.9,164.65],[62,36,62,36,0,12.9,164.65],[0,72,62,36,0,12.9,164.65],[62,72,62,36,0,12.9,164.65],[0,108,62,36,0,12.9,164.65]]
		}));
		headdress.setTransform(32.95,7.25);
		girl.addDress(headdress, 'headdress');

		var wallet = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_wallet')],
			frames:[[0,0,144,187,0,11.1,97.45],[144,0,144,187,0,11.1,97.45],[288,0,144,187,0,11.1,97.45],[0,187,144,187,0,11.1,97.45],[144,187,144,187,0,11.1,97.45],[288,187,144,187,0,11.1,97.45],[0,374,144,187,0,11.1,97.45]]
		}));
		wallet.setTransform(32.95,7.25);
		girl.addDress(wallet, 'wallet');
		var hand = new cjs.Bitmap(fg.getAsset('girl_hand'));
		hand.setTransform(132.6, -27.5);
		girl.addChild(hand);
		var gloves = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_gloves')],
			frames:[[0,0,132,84,0,11.05,45.6],[132,0,132,84,0,11.05,45.6],[264,0,132,84,0,11.05,45.6],[0,84,132,84,0,11.05,45.6],[132,84,132,84,0,11.05,45.6],[264,84,132,84,0,11.05,45.6],[0,168,132,84,0,11.05,45.6]]
		}));
		gloves.setTransform(32.95,7.25);
		girl.addDress(gloves, 'gloves');

		var jew = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_jew')],
			frames:[[0,0,70,76,0,8.1,122.75],[70,0,70,76,0,8.1,122.75],[140,0,70,76,0,8.1,122.75],[0,76,70,76,0,8.1,122.75],[70,76,70,76,0,8.1,122.75],[140,76,70,76,0,8.1,122.75],[0,152,70,76,0,8.1,122.75]]
		}));
		jew.setTransform(32.95,7.25);
		girl.addDress(jew, 'jew');
		var shoes = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('girl_shoes')],
			frames:[[0,0,104,83,0,-40.75,-71.1],[104,0,104,83,0,-40.75,-71.1],[0,83,104,83,0,-40.75,-71.1],[104,83,104,83,0,-40.75,-71.1],[0,166,104,83,0,-40.75,-71.1],[104,166,104,83,0,-40.75,-71.1],[0,249,104,83,0,-40.75,-71.1]]
		}));
		shoes.setTransform(32.95,7.25);
		girl.addDress(shoes, 'shoes');
		
		var peijue = new cjs.Bitmap(fg.getAsset('girl_peijue'));
		peijue.setTransform(-117.4, -200.3);
		girl.addChild(peijue);
		

		
		girl.render();
	};
	lib.show = function(){
		fg.gameData.TPL_DATA = {hair:0,moto:0};
		Girl.createUI = tmp.createUI;
		this.girl = Girl.getPerson(fg.gameData.TPL_DATA, {dress:['topCloth','pants'],topCloth:['dress'],pants:['dress']});
		
		
		this.girl.setTransform(423*wScale, 276*hScale, 1.19*currentScale, 1.19*currentScale);
		fg.gameLayer.addChild(this.girl);




		this.dressPanel = new cjs.Container;
		
		this.btns = [];
		var hairBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[0,0,61,61,0]]
		}));

		hairBtn.name = 'hair';
		hairBtn.srcPos = {x:21.65,y:122.45};
		hairBtn.setTransform(21.65,122.45);
		this.dressPanel.addChild(hairBtn);
		this.btns.push(hairBtn);


		var headdressBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[0,70,61,61,0]]
		}));
		headdressBtn.name = 'headdress';
		headdressBtn.srcPos = {x:21.65,y:192.45};

		
		this.dressPanel.addChild(headdressBtn);
		this.btns.push(headdressBtn);

		var jewBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[0,140,61,61,0]]
		}));
		jewBtn.name = "jew";
		jewBtn.srcPos = {x:21.65,y:262.45};
		this.dressPanel.addChild(jewBtn);
		this.btns.push(jewBtn);


		var topBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[0,210,61,61,0]]
		}));
		topBtn.name = 'topCloth';
		topBtn.srcPos = {x:21.65,y:332.45};
		this.dressPanel.addChild(topBtn);
		this.btns.push(topBtn);

		var pantsBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[0,280,61,61,0]]
		}));
		pantsBtn.name = 'pants';
		pantsBtn.srcPos = {x:21.65,y:402.45};
		this.dressPanel.addChild(pantsBtn);

		var dressBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[100,0,61,61,0]]
		}));
		dressBtn.name = 'dress';
		dressBtn.srcPos = {x:657,y:122.45};
		this.dressPanel.addChild(dressBtn);

		var glovesBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[100,70,61,61,0]]
		}));
		glovesBtn.name = 'gloves';
		glovesBtn.srcPos = {x:657,y:192.45};
		this.dressPanel.addChild(glovesBtn);

		var walletBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[100,140,61,61,0]]
		}));
		walletBtn.name = 'wallet';
		walletBtn.srcPos = {x:657,y:262.45};
		this.dressPanel.addChild(walletBtn);

		var shoesBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[100,210,61,61,0]]
		}));
		shoesBtn.name = 'shoes';
		shoesBtn.srcPos = {x:657,y:332.45};
		this.dressPanel.addChild(shoesBtn);

		var motoBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('dressbtns')],
			frames:[[100,280,61,61,0]]
		}));
		motoBtn.name = 'moto';
		motoBtn.srcPos = {x:657,y:402.45};
		this.dressPanel.addChild(motoBtn);

		fg.gameLayer.addChild(this.dressPanel);
		var arr = this.dressPanel.children;
		var len = arr.length;
		for(var i = 0; i < len; i ++) {
			var item = arr[i];
			if(item.name == '') {
				continue;
			}
			item.setTransform(item.srcPos.x * wScale, item.srcPos.y * hScale,currentScale,currentScale);
			item.addEventListener('click', cjs.proxy(this.dressClicked, this));
		}

		this.btn = new cjs.Container();
		this.resetBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('btns')],
			frames:[[0,50,81,34,0]]
		}));
		this.resetBtn.setTransform(350-258,0);
		this.btn.addChild(this.resetBtn);
		this.resetBtn.addEventListener('click', cjs.proxy(this.resetHandler, this));

		this.showBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('btns')],
			frames:[[100,50,81,34,0]]
		}));
		this.btn.addChild(this.showBtn);
		this.showBtn.setTransform(0,0);
		this.showBtn.addEventListener('click', cjs.proxy(this.showHandler, this));

		this.moreBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('btns')],
			frames:[[200,50,81,34,0]]
		}));
		this.moreBtn.setTransform(441-258,0);
		this.btn.addChild(this.moreBtn);
		var moreLink = GameAPI.Branding.getLink('more_games');
		if(!('error' in moreLink)) {
			this.moreBtn.addEventListener('click', moreLink.action);
		}
		this.btn.x = 258*wScale;
		this.btn.y = 503*hScale;
		fg.gameLayer.addChild(this.btn);
		fg.currentScene = this;
		this.doLayout();
		this.dressPanel.y = -550*hScale;
		
		cjs.Tween.get(this.dressPanel).to({y:0},8*fps);
		this.girl.y =  1100*wScale;
		cjs.Tween.get(this.girl).to({y:stage.canvas.height - 220*1.19*currentScale},8*fps);
		this.btn.y = 600*wScale;
		cjs.Tween.get(this.btn).to({y:503*hScale},8*fps);
		
	};
	lib.dressClicked = function(evt) {
		SoundController.getInstance().play('fx_click');
		var str = evt.currentTarget.name;
		this.girl.autoNext(str);
	};
	lib.showHandler = function(evt) {
		SoundController.getInstance().play('fx_click');
		fg.gameData.dressData = this.girl.getData();
		this.showBtn.removeAllEventListeners('click');
		this.resetBtn.removeAllEventListeners('click');
		cjs.Tween.get(this.dressPanel).to({y:-500*hScale},8*fps);
		
		//cjs.Tween.get(this.girl).to({x:stage.canvas.width + 400},8*fps);
		
		cjs.Tween.get(this.btn).to({x:stage.canvas.width + 400},8*fps).call(this.goNext, [], this);
		
	};
	lib.goNext = function(){
		fg.jumpTo('ShowPage');
	};
	lib.resetHandler = function(evt) {
		SoundController.getInstance().play('fx_click');
		this.girl.reset();
	};
	lib.doLayout = function(){
		this.girl.setTransform(423*wScale, stage.canvas.height - 220*1.19*currentScale, 1.19*currentScale, 1.19*currentScale);
		
		this.btn.scaleX = this.btn.scaleY = currentScale;
		this.btn.x = 258*wScale;
		this.btn.y = stage.canvas.height - 44*currentScale;
		var arr = this.dressPanel.children;
		var len = arr.length;
		for(var i = 0; i < len; i ++) {
			var item = arr[i];
			if(item.name == '') {
				continue;
			}
			item.setTransform(item.srcPos.x * wScale, item.srcPos.y * hScale,currentScale,currentScale);
			
		}
		
	};
	lib.doClean = function(){
		fg.gameLayer.removeAllChildren();
	};
	fg.scenes.DressPage = lib;
})(FandlrGame, createjs);