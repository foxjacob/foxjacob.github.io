function MainMenuState() {
    MainMenuState.superclass.constructor.apply(this);
    this.menuLayer = null;
    this.creditsLayer = null;
    this.bSound = null;
    this.bBack = null;
    this.a10Logo = null;
    this.moreGames = null;
}

extend(MainMenuState, TrinState);

MainMenuState.prototype.update = function() {
    MainMenuState.superclass.update.apply(this);
};

MainMenuState.prototype.create = function() {
    MainMenuState.superclass.create.apply(this);
    
    this.menuLayer = new TrinLayer();
     
    var back = new TrinSprite();
    back.addAnimationFromCache("MainMenuBack");

    var bPlay = new TrinButton(function() {
        _TrinGame.switchState(new ComicsState());
    }, "bPlay", false);
    bPlay.orign.x = bPlay.width / 2;
    bPlay.reset(260, 490);

    this.bSound = new SoundButton();
    this.bSound.reset(520, 200);
    
    
    var creditsFunction = function(){
        var state = arguments.callee.state;
        state.menuLayer.active = state.menuLayer.visible = false;
        state.creditsLayer.active = state.creditsLayer.visible = true;
        state.moreGames.active =false;
    };
    creditsFunction.state = this;
    
    var bCredits = new TrinButton(creditsFunction, "bCredits", false);
    bCredits.reset(80, 200);
    
    var bMoreGames = new TrinButton(function(){
        //_TrinGame.SPIL_MOREGAMES.action();
		// Play68.goHome();
    }, "bMoreGames", true);
    bMoreGames.orign.x = bMoreGames.width;
    bMoreGames.reset(632, _TrinGame.visibleArea.top + 8);
    this.moreGames = bMoreGames;
    
    this.menuLayer.add(back);
    this.menuLayer.add(bPlay);
    this.menuLayer.add(this.bSound);
    this.menuLayer.add(bCredits);
    this.menuLayer.add(bMoreGames);
    
    this.creditsLayer = new TrinLayer();
    this.creditsLayer.visible = this.creditsLayer.active = false;
    
    back = new TrinSprite();
    back.addAnimationFromCache("CompleteBack");
    
    var credits = new TrinSprite();
    credits.addAnimationFromCache("CreditsInfo");
    
    var returnFunction = function(){
        var state = arguments.callee.state;
        state.menuLayer.active = state.menuLayer.visible = true;
        state.creditsLayer.active = state.creditsLayer.visible = false;
        state.moreGames.active =true;
    };
    returnFunction.state = this;
    var bReturn = new TrinButton(returnFunction, "bBack", false);
    bReturn.orign.x = bReturn.width / 2;
    bReturn.orign.y = bReturn.height;
    bReturn.reset(632 - bReturn.width / 2, _TrinGame.visibleArea.bottom - 8);
    this.bBack = bReturn;
    
    var a10Logo = new TrinButton(function(){
		//alert(123);
        //_TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.y = a10Logo.height;
    a10Logo.reset(8, _TrinGame.visibleArea.bottom - 8);
    
    this.a10Logo = a10Logo;
    
    this.creditsLayer.add(back);
    this.creditsLayer.add(credits);
    this.creditsLayer.add(bReturn);
    
    this.add(this.menuLayer);
    this.add(this.creditsLayer);
    this.add(a10Logo);
};

MainMenuState.prototype.draw = function(context) {
    MainMenuState.superclass.draw.apply(this, [context]);
};

MainMenuState.prototype.resized =   function(){
    this.bBack.y = _TrinGame.visibleArea.bottom - 8;
    this.a10Logo.y = _TrinGame.visibleArea.bottom - 8;
    this.moreGames.y = _TrinGame.visibleArea.top + 8;
};