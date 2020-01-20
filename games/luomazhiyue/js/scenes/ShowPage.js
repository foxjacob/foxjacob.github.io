(function(fg, cjs){
	var lib = {},p;
	lib.show = function(){
		
		this.girl = Girl.getPerson(fg.gameData.dressData);
		fg.gameLayer.addChild(this.girl);
		this.btn = new cjs.Container;
		this.replayBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('btns')],
			frames:[[0,100,90,38,0]]
		}));
		this.btn.addChild(this.replayBtn);
		this.moreBtn = new cjs.Sprite(new cjs.SpriteSheet({
			images:[fg.getAsset('btns')],
			frames:[[100,0,90,38,0]]
		}));
		this.moreBtn.setTransform(650-548, 0);

		this.btn.addChild(this.moreBtn);
		var moreLink = GameAPI.Branding.getLink('more_games');
		if(!('error' in moreLink)) {
			this.moreBtn.addEventListener('click', moreLink.action);
		}
		this.replayBtn.addEventListener('click', cjs.proxy(this.replayHandler, this));
		fg.gameLayer.addChild(this.btn);

		fg.currentScene = this;

		this.doLayout();
		
		
		this.btn.y = stage.canvas.height + 50;
		this.btn.x = 548*wScale;
		
		cjs.Tween.get(this.btn).to({y:stage.canvas.height - 100*currentScale},8*fps);
		
	};	
	lib.replayHandler = function(evt) {
		SoundController.getInstance().play('fx_click');
		this.replayBtn.removeAllEventListeners('click');
		
		cjs.Tween.get(this.girl).to({x:-400*wScale},8*fps);
		cjs.Tween.get(this.btn).to({y:stage.canvas.height + 50},8*fps).call(this.goNext, [], this);
		
	};
	lib.goNext = function(){
		fg.jumpTo('StartPage');
	};
	lib.doLayout = function(){
		this.girl.setTransform(423*wScale, stage.canvas.height - 200*1.19*currentScale, 1.19*currentScale, 1.19*currentScale)
		this.btn.scaleX = this.btn.scaleY = currentScale;
		this.btn.x = stage.canvas.width - 200*currentScale;
		this.btn.y = stage.canvas.height - 100*currentScale;
		
	};
	lib.doClean = function(){
		fg.gameLayer.removeAllChildren();
	};
	fg.scenes.ShowPage = lib;
})(FandlrGame, createjs);