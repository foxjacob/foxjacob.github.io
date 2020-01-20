var _TrinGame;

function Tringine(width, height, initialState, frameRate, screenWidth, screenHeight) {
    //Test local storage is avaiable
    try {
        TrinStorage.prototype.supportsStorage = 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        TrinStorage.prototype.supportsStorage = false;
    }

    //Overload parameters
    if (screenWidth === undefined) {
        screenWidth = 640;
    }
    if (screenHeight === undefined) {
        screenHeight = 712;
    }
    if (frameRate === undefined) {
        frameRate = 30;
    }

    //Set up game container
    var container = document.getElementById("GameContainer");
    container.style.position = "absolute";
    container.style.left = "50%";
    container.style.top = "50%";

    //Create canvas
    var canvas = document.createElement("Canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    //Init game engine
    this.width = width;
    this.height = height;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.frameRate = frameRate;
    this.scaleFactor = 1;
    this.gameContainer = container;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.state = null;
    this.nextState = new initialState();
    this.mouse = new TrinMouse();
    this.isMobile = TrinUtil.prototype.detectmob();
    this.isAndroid = TrinUtil.prototype.isAndroid();
    this.isIDevice = TrinUtil.prototype.isIDevice();
    this.visibleArea = {left: 0, top: 0, right: this.screenWidth, bottom: this.screenHeight, width: this.screenWidth, height: this.screenHeight};
    this.widthToHeight = this.width / this.height;
    this.paused = false;
    this.SPIL_API = null;
    this.SPIL_SPLASH = {
        action: function() {
            if (GameAPI.IS_STANDALONE) {
                //window.open("http://play68.com", "_blank");
            } else {
                GameAPI.Branding.getSplashScreen().action();
            }
        }
    };
    this.SPIL_LOGO = {
        image: "img/a10Logo.png",
        action: function() {
            if (GameAPI.IS_STANDALONE) {
                //window.open("http://play68.com", "_blank");
            } else {
                GameAPI.Branding.getLogo().action();
            }
        }
    };
    this.SPIL_MOREGAMES = {
        action: function() {
            if (GameAPI.IS_STANDALONE) {
                //window.open("http://play68.com", "_blank");
            } else {
                //GameAPI.Branding.getLink("more_games").action();
            }
        }
    };
    _TrinGame = this;

    //Add mouse/touch event listeners
    if (this.isMobile) {
        window.addEventListener("touchstart", function() {
        });
        this.mouse.onTouchStart.mouse = this.mouse;
        this.mouse.onTouchEnd.mouse = this.mouse;
        this.canvas.addEventListener('touchmove', this.getMouseXY, false);
        this.canvas.addEventListener('touchstart', this.mouse.onTouchStart, false);
        this.canvas.addEventListener('touchend', this.mouse.onTouchEnd, false);
    } else {
        this.mouse.onMouseDown.mouse = this.mouse;
        this.mouse.onMouseUp.mouse = this.mouse;
        this.canvas.addEventListener('mousedown', this.mouse.onMouseDown, false);
        this.canvas.addEventListener('mouseup', this.mouse.onMouseUp, false);
        this.canvas.addEventListener('mousemove', this.getMouseXY, false);
        this.canvas.addEventListener('mouseout', this.mouse.onMouseUp, false);
    }

    //Add resize eventListeners
    window.addEventListener('resize', this.resizeGame, false);
    window.addEventListener('orientationchange', this.resizeGame, false);

    //Resizing game
    this.resizeGame();
    GameAPI.loadAPI(function(API) {
        var logoData = API.IS_STANDALONE ? {logo: "logo_A10_202x50.png", action: function() {window.open("http://play68.com/", "_blank");}} : API.Branding.getLogo();
        var splashScreenData = API.Branding.getSplashScreen();
        _TrinGame.SPIL_API = API;
      
        _TrinGame.start();
    });
}

Tringine.prototype = {
    state: null,
    update: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.width = this.canvas.width;
        if (this.state !== null && !this.paused) {
            this.state.update();
            this.state.draw(this.canvas.getContext("2d"));
            this.mouse.update();
        }

        //Switching states
        if (this.nextState !== null) {
            if (this.state !== null) {
                this.state.destroy();
            }
            this.mouse.reset();
            this.state = this.nextState;
            this.state.create();
            this.nextState = null;
        }
    },
    start: function() {
        //Add a main game cycle
        setInterval(function() {
            _TrinGame.update();
        }, 1000 / _TrinGame.frameRate);
    },
    switchState: function(newState) {
        this.nextState = newState;
    },
    getMouseXY: function(event) {
        event.preventDefault();
        var mx;
        var my;
        if (_TrinGame.isAndroid) {
            mx = (event.touches[0].pageX + event.layerX) / _TrinGame.scaleFactor;
            my = (event.touches[0].pageY + event.layerY) / _TrinGame.scaleFactor;
        } else {
            if (event.offsetX === undefined) {
                mx = event.layerX / _TrinGame.scaleFactor;
                my = event.layerY / _TrinGame.scaleFactor;
            } else {
                mx = event.offsetX / _TrinGame.scaleFactor;
                my = event.offsetY / _TrinGame.scaleFactor;
            }
        }
        _TrinGame.mouse.rawX = mx;
        _TrinGame.mouse.rawY = my;
        return false;
    },
    log: function(msg) {
        if (detectmob()) {
            document.getElementById("info").innerHTML = msg;
        } else {
            console.log(msg);
        }
    },
    resizeGame: function() {
        //Calculate new size
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        var newWidth = innerWidth + (_TrinGame.width - _TrinGame.screenWidth) * (innerWidth / _TrinGame.screenWidth);
        var newHeight = innerHeight + (_TrinGame.height - _TrinGame.screenHeight) * (innerHeight / _TrinGame.screenHeight);
        var newWidthToHeight = newWidth / newHeight;
        if (newWidthToHeight > _TrinGame.widthToHeight) {
            newWidth = newHeight * _TrinGame.widthToHeight;
        } else {
            newHeight = newWidth / _TrinGame.widthToHeight;
        }

        //Change container size
        _TrinGame.gameContainer.style.width = newWidth + "px";
        _TrinGame.gameContainer.style.height = newHeight + "px";
        _TrinGame.gameContainer.style.marginTop = (-newHeight / 2) + 'px';
        _TrinGame.gameContainer.style.marginLeft = (-newWidth / 2) + 'px';
        _TrinGame.gameContainer.style.fontSize = Math.floor(newWidth / _TrinGame.width) + "em";
        _TrinGame.scaleFactor = newWidth / _TrinGame.width;

        //Calculate visible area.
        var vw = Math.min(innerWidth, newWidth) / _TrinGame.scaleFactor;
        var vh = Math.min(innerHeight, newHeight) / _TrinGame.scaleFactor;
        _TrinGame.visibleArea.width = vw;
        _TrinGame.visibleArea.height = vh;
        _TrinGame.visibleArea.left = (_TrinGame.width / 2) - vw / 2;
        _TrinGame.visibleArea.top = (_TrinGame.height / 2) - vh / 2;
        _TrinGame.visibleArea.right = _TrinGame.visibleArea.left + vw;
        _TrinGame.visibleArea.bottom = _TrinGame.visibleArea.top + vh;

        //Call sate resize function
        if (_TrinGame.state !== null) {
            _TrinGame.state.resized();
        }
    },
    globalPause: function() {
        this.paused = true;
    },
    globalResume: function() {
        this.paused = false;
    }
};
