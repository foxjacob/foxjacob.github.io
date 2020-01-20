function LoaderState() {
    var host = window.location.host.toLowerCase();
    var allowed = (host === "trinbox.ru");
    if (!allowed) {
        //return;
    }
    LoaderState.superclass.constructor.apply(this);
    this.progressBar = null;
    this.progressBarLine = null;
    this.onProcess = function(percent) {
        var state = arguments.callee.state;
        if (state.progressBar !== null) {
            state.progressBar.cutArea.width = state.progressBar.width * (1 - percent);
        }
    };

    this.onProcess.state = this;
    this.assetLoader = null;
    this.pButton = false;
}

extend(LoaderState, TrinState);

LoaderState.prototype.create = function() {
    LoaderState.superclass.create.apply(this);
    var loader = new TrinAssetLoader(this.loadAllAssets);
    loader.addImage("PreloaderBack", "img/preloader/back.png", false);
    loader.addImage("PreloaderBar", "img/preloader/bar.png", false);
    loader.addImage("PreloaderBarEmpty", "img/preloader/bar_empty.png", false);
    loader.addImage("Logo", "img/preloader/logo.png", false);

    if (GameAPI.IS_STANDALONE) {
        loader.addImage("A10Logo", _TrinGame.SPIL_LOGO.image, false);
    } else {
        loader.addImage("A10Logo", GameAPI.Branding.getLogo().image, false);
    }
    loader.addJson("levelpacks", "js/data/levelpacks.json");
    loader.addJson("products", "js/data/products.json");
    this.loadAllAssets.state = this;
    loader.load();
};

LoaderState.prototype.loadAllAssets = function() {
    Global.prototype.levelpacks = TrinAssetLoader.prototype.getLoadedJson("levelpacks").levelpacks;

    var state = arguments.callee.state;
    var back = new TrinSprite();
    back.addAnimationFromCache("PreloaderBack");

    var logo = new TrinSprite();
    logo.addAnimationFromCache("Logo");
    logo.orign.x = logo.width / 2;
    logo.orign.y = logo.height / 2;
    logo.reset(320, 420);

    var bar = new TrinSprite();
    bar.addAnimationFromCache("PreloaderBar");
    bar.orign.x = bar.width / 2;
    bar.reset(320, logo.bounds.bottom());

    var barLine = new TrinSprite();
    barLine.addAnimationFromCache("PreloaderBarEmpty");
    barLine.orign.x = bar.orign.x;
    barLine.reset(bar.x, bar.y);

    var a10Logo = new TrinButton(function(){
        _TrinGame.SPIL_LOGO.action();
    }, "A10Logo", true);
    a10Logo.orign.x = a10Logo.width / 2;
    a10Logo.reset(320, 650);

    state.progressBar = bar;
    state.progressBarLine = barLine;

    state.add(back);
    state.add(logo);
    state.add(barLine);
    state.add(bar);
    state.add(a10Logo);

    arguments.callee.state.loadComplete.state = arguments.callee.state;
    var loader = new TrinAssetLoader(arguments.callee.state.loadComplete, state.onProcess);
    loader.addImage("bPlay", "img/mainmenu/bPlay.png");
    loader.addImage("bCredits", "img/mainmenu/bCredits.png");
    loader.addImage("bMoreGames", "img/mainmenu/bMoreGames.png");
    loader.addImage("MainMenuBack", "img/mainmenu/back.png", false);
    //loader.addImage("bSound", "img/mainmenu/bSound.png");
    loader.addImage("GameBack", "img/game/back.png", false);
    loader.addImage("CatPaw", "img/game/paw.png");
    loader.addImage("Blood", "img/game/blood.png");
    loader.addImage("Fish1", "img/game/item/fish1.png");
    loader.addImage("Fish2", "img/game/item/fish2.png");
    loader.addImage("PauseBack", "img/game/pause.png", false);
    loader.addImage("GameStar", "img/game/star.png");
    loader.addImage("CompleteBack", "img/levelcomplete/back.png", false);
    loader.addImage("CompleteCat", "img/levelcomplete/cat.png", false);
    loader.addImage("CompleteStar", "img/levelcomplete/star.png", false);
    loader.addImage("bRestart", "img/levelcomplete/bRestart.png");
    loader.addImage("bMainMenu", "img/levelcomplete/bMenu.png");
    loader.addImage("LevelSelectBack", "img/levelselect/back.png", false);
    loader.addImage("bBack", "img/levelselect/bBack.png");
    loader.addImage("LockedStage", "img/levelselect/locked_stage.png", false);
    loader.addImage("bStage", "img/levelselect/bStage.png");
    loader.addImage("bWalk", "img/levelselect/bWalk.png");
    loader.addImage("LevelSelectStar", "img/levelselect/star.png");
    loader.addImage("LevelPackSelectTitle", "img/levelselect/title.png", false);
    loader.addImage("bPause", "img/game/bPause.png");
    loader.addImage("CreditsInfo", "img/credits.png", false);
    loader.addImage("CongratsCat", "img/congrats/cat.png", false);
    loader.addImage("ComicsBack", "img/comics/back.png", false);
    loader.addImage("ComicsFrame0", "img/comics/1/1.png", false);
    loader.addImage("ComicsFrame1", "img/comics/1/2.png", false);
    loader.addImage("ComicsFrame2", "img/comics/1/3.png", false);
    loader.addImage("bNext", "img/congrats/bNext.png");
    loader.addImage("Hand", "img/game/hand.png", false);
    loader.addImage("ComingSoonIcon", "img/levelselect/levelpacks/comingSoon.png", false);
    loader.addImage("A10Splash", "img/splash.png", false);
    loader.addJson("links", "js/data/links.json");

    //Load products images
    var levelPacks = Global.prototype.levelpacks;
    var graphicPacks = TrinAssetLoader.prototype.getLoadedJson("products").graphicPacks;
    for (var i = 0; i < levelPacks.length; i++) {
        var levelpack = levelPacks[i];
        loader.addImage(levelpack.name + "Icon", "img/levelselect/levelpacks/" + levelpack.icon);
        var graphicpackName = levelpack.graphicpack;
        if (Global.prototype.graphicPacks[graphicpackName] === undefined) {
            var graphicpack = null;
            for (var j = 0; j < graphicPacks.length; j++) {
                if (graphicPacks[j].name === graphicpackName) {
                    graphicpack = graphicPacks[i];
                }
            }
            var products = graphicpack.products;
            for (var j = 0; j < products.length; j++) {
                var product = products[j];
                ProductItem.prototype.productsData[product.name] = product;
            }
            if (graphicpack.preload) {
                for (j = 0; j < graphicpack.products.length; j++) {
                    var product = graphicpack.products[j];
                    loader.addImage("pdt" + product.name, "img/game/item/" + product.url, false);
                }
                Global.prototype.graphicPacks[graphicpackName] = true;
            }
        }
    }
    if (!_TrinGame.isIDevice)   {
		
    }
    loader.load();
    state.assetLoader = loader;
};

LoaderState.prototype.loadComplete = function() {
    var state = arguments.callee.state;
    state.assetLoader = null;
    TrinAnimation.prototype.makeAnimation("bPlay", "bPlay", 210, 210, [0, 1]);
    if (_TrinGame.isIDevice && false) {
        var startFunction = function(){
            var state = arguments.callee.state;
     
            state.startGame();
        };
        startFunction.state = state;
        var button = new TrinButton(startFunction, "bPlay", true);
        button.orign.x = button.width / 2;
        button.reset(320, arguments.callee.state.progressBar.bounds.bottom() + 4);
        state.add(button);
    }
    TrinAnimation.prototype.makeAnimation("bMoreGames", "bMoreGames", 118, 118, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bCredits", "bCredits", 96, 96, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bRestart", "bRestart", 109, 109, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bMainMenu", "bMainMenu", 109, 109, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bStage", "bStage", 99, 97, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bBack", "bBack", 154, 154, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bNext", "bNext", 154, 154, [0, 1]);
    TrinAnimation.prototype.makeAnimation("bWalk", "bWalk", 109, 109, [0, 1]);
    TrinAnimation.prototype.makeAnimation("LevelSelectStar", "LSSmallStar", 18, 17, [0]);
    TrinAnimation.prototype.makeAnimation("LevelSelectStar", "LSBigStar", 18, 17, [1]);
    TrinAnimation.prototype.makeAnimation("bPause", "bPause", 97, 97, [0, 1]);
    TrinAnimation.prototype.makeAnimation("CatPaw", "CatPaw", 200, 120, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    TrinAnimation.prototype.makeAnimation("Blood", "Blood", 160, 240 , [0, 1]);
    TrinAnimation.prototype.makeAnimation("GameStar", "GameStar", 40, 40, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
    TrinAnimation.prototype.makeAnimation("Fish1", "Fish1", 160, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    TrinAnimation.prototype.makeAnimation("Fish2", "Fish2", 160, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var levelPacks = Global.prototype.levelpacks; 
    for (var i = 0; i < levelPacks.length; i++) {
        var levelPack = levelPacks[i];
        TrinAnimation.prototype.makeAnimation(levelPack.name + "Icon", levelPack.name + "Icon", 298, 291, [0, 1]);
    }
    if (!_TrinGame.isIDevice || true) {
        //SOFF
        //TrinSound.prototype.soundsLoaded = true;
        state.startGame();
    }
};

LoaderState.prototype.startGame = function() {
    Global.prototype.init();
    _TrinGame.switchState(new SplashState());
};

LoaderState.prototype.draw = function(context) {
    LoaderState.superclass.draw.apply(this, [context]);
};