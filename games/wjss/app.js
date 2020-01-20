function initStartScreen() {
    /*(updateShare(0),*/ gameState = "start", userInput.removeHitArea("moreGames"), 1 == audioType && music.volume(.25), levelScore = 0, levelNum = 0, background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [392, 0, canvas.width, 53]
    }, !0);
    var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 415],
            type: 1,
            frame: 0
        },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 530],
            type: 1,
            frame: 2
        };
    userInput.addHitArea("startGame", butEventHandler, null, "image", e), userInput.addHitArea("moreGames", butEventHandler, null, "image", t);
    var n = getScaleImageToMax("", [184, 58]);
    oSpilLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromTopLeft([13, 13], assetLib.getData("logo"), n),
        scale: n,
        type: 0
    }, userInput.addHitArea("logo", butEventHandler, null, "image", oSpilLogoBut);
    var r = new Array(e, t, oSpilLogoBut);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("bigNumbers"), assetLib.getData("smallNumbers"), gameState, r, canvas.width, canvas.height), panel.startTween(), aBubbles = new Array;
    for (var i = 0; 20 > i; i++) {
        var s = new Elements.Bubble(assetLib.getData("bubbles"), Math.floor(4 * Math.random()), [450 * Math.round(1 * Math.random()), 600 * Math.random()], canvas.width, canvas.height);
        aBubbles.push(s)
    }
    previousTime = (new Date).getTime(), updateStartScreenEvent()
}

function initPreGame() {
    gameState = "tutorial", background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height);
    for (var e = 0; e < aTutorials.length; e++)
        if (aTutorials[e].levelNum == levelNum && !aTutorials[e].shown) {
            var t = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 500],
                type: 1,
                frame: 0
            };
            userInput.addHitArea("continue", butEventHandler, null, "rect", {
                aRect: [0, 60, canvas.width, canvas.height]
            }, !0);
            var n = getScaleImageToMax(assetLib.getData("logo"), [184, 58]);
            oSpilLogoBut = {
                oImgData: assetLib.getData("logo"),
                aPos: getCentreFromTopLeft([13, 13], assetLib.getData("logo"), n),
                scale: n,
                type: 0
            }, userInput.addHitArea("logo", butEventHandler, null, "image", oSpilLogoBut);
            var r = new Array(t, oSpilLogoBut);
            return background.render(ctx), panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("bigNumbers"), assetLib.getData("smallNumbers"), aTutorials[e].panelType, r, canvas.width, canvas.height), panelFrame = aTutorials[e].panelFrame, panel.startTween(), previousTime = (new Date).getTime(), updateTutorialEvent(), void 0
        }
    initGame()
}

function initGame() {
    gameState = "game", 1 == audioType && music.volume(.5), background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [0, 0, 53, 53]
    }, !0), userInput.addHitArea("wash", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 60, canvas.width, 540]
    }, !0);
    var e = getScaleImageToMax(assetLib.getData("logo"), [0, 0]);
    oSpilLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromBottomRight([440, 590], assetLib.getData("logo"), e),
        scale: e,
        type: 0
    }, userInput.addHitArea("logo", butEventHandler, null, "image", oSpilLogoBut), water = new Elements.Water(assetLib.getData("water"), canvas.width, canvas.height), hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("bigNumbers"), assetLib.getData("smallNumbers"), canvas.width, canvas.height), gameTimer = 0, allowWashing = !0, addCrockery(), aBubbles = new Array, bubbleLimiter = 0, previousTime = (new Date).getTime(), updateGameEvent()
}

function dsdsff() {
    var e = spilAPI.Branding.getSplashScreen();
    if (e.show && e.action) {
        var t = document.getElementById("spilgames-splash-screen");
        t.addEventListener("click", e.action), t.classList.remove("spilgames-splash-screen-gone"), window.setTimeout(function() {
            t.classList.add("spilgames-splash-screen-gone"), 1 != audioType || muted || music.play(), initStartScreen(), resizeCanvas()
        }, 2e3)
    } else 1 != audioType || muted || music.play(), initStartScreen(), resizeCanvas()
}

function butEventHandler(e, t) {
    switch (e) {
        case "langSelect":
            console.log(t.lang), curLang = t.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), initLoadAssets();
            break;
        case "startGame":
            playSound("click"), userInput.removeHitArea("startGame"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logo"), initPreGame();
            break;
        case "logo":
            playSound("click"), oSpilLogoData.action();
            break;
        case "moreGames":
            // playSound("click"), Play68.goHome();
            break;
        case "continue":
            playSound("click"), userInput.removeHitArea("continue"), userInput.removeHitArea("logo"), initGame();
            break;
        case "wash":
            allowWashing && (t.isBeingDragged ? (aPrevWashPos = aCurWashPos.slice(0), aCurWashPos = [t.x, t.y], isWashing = !0, crockery.eyesOpen = !1) : t.isDown ? (aPrevWashPos = [t.x, t.y], aCurWashPos = [t.x, t.y], crockery.eyesOpen = !1) : crockery.eyesOpen = !0);
            break;
        case "replay":
            playSound("click"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logo"), userInput.removeHitArea("replay"), userInput.removeHitArea("exitFromEnd"), levelScore = 0, initGame(), spilAPI.GameBreak.request(adPauseOn, adPauseOff), console.log("show ad");
            break;
        case "exitFromEnd":
            playSound("click"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logo"), userInput.removeHitArea("replay"), userInput.removeHitArea("exitFromEnd"), levelScore = 0, initStartScreen();
            break;
        case "mute":
            playSound("click"), toggleMute();
            break;
        case "pause":
        case "resumeFromPause":
            playSound("click"), toggleManualPause();
            break;
        case "quitFromPause":
            playSound("click"), toggleManualPause(), userInput.removeHitArea("pause"), userInput.removeHitArea("wash"), userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGames"), levelScore = 0, initStartScreen()
    }
}

function initGameOver() {
    gameState = "gameOver", 1 == audioType && music.volume(.25), playSound("gameEnd"), userInput.removeHitArea("pause"), userInput.removeHitArea("wash"), userInput.removeHitArea("logo");
    var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [120, 530],
            type: 1,
            frame: 2
        },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [330, 530],
            type: 1,
            frame: 0
        },
        n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [120, 70],
            type: 1,
            frame: 1
        };
    userInput.addHitArea("moreGames", butEventHandler, null, "image", e), userInput.addHitArea("replay", butEventHandler, null, "image", t), userInput.addHitArea("exitFromEnd", butEventHandler, null, "image", n);
    var r = getScaleImageToMax(assetLib.getData("logo"), [160, 63]);
    oSpilLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromTopLeft([230, 50], assetLib.getData("logo"), r),
        scale: r,
        type: 0
    }, userInput.addHitArea("logo", butEventHandler, null, "image", oSpilLogoBut);
    var i = new Array(e, t, n, oSpilLogoBut);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("bigNumbers"), assetLib.getData("smallNumbers"), gameState, i, canvas.width, canvas.height), panel.startTween(), aBubbles = new Array;
    for (var s = 0; 20 > s; s++) {
        var o = new Elements.Bubble(assetLib.getData("bubbles"), Math.floor(4 * Math.random()), [450 * Math.round(1 * Math.random()), 600 * Math.random()], canvas.width, canvas.height);
        aBubbles.push(o)
    }
    levelScore += 100 * hud.washedNum, myPlayGameScore = levelScore;
    levelScore > highScore && (highScore = levelScore), panel.oScoreData = {
        levelScore: levelScore,
        highScore: highScore
    }, previousTime = (new Date).getTime(), updateGameOver();
    // updateShare(myPlayGameScore);
    // Play68.setRankingScoreDesc(myPlayGameScore)
}

function addCrockery() {
    playSound("startSplash"), crockery = new Elements.Crockery(assetLib.getData("crockery"), assetLib.getData("expressions"), assetLib.getData("dirt"), crockeryCallback, crockeryId, canvas.width, canvas.height), crockery.startTween(), crockeryId = (crockeryId + 1) % 5
}

function addBubble(e) {
    var t;
    flipFlop ? (playSound("wash" + Math.floor(4 * Math.random())), flipFlop = !1) : flipFlop = !0, t = new Elements.Bubble(assetLib.getData("bubbles"), Math.floor(4 * Math.random()), aCurWashPos, canvas.width, canvas.height);
    var n = aPrevWashPos[0] - aCurWashPos[0],
        r = aPrevWashPos[1] - aCurWashPos[1],
        i = (n * n + r * r) / e / 2e3;
    aBubbles.push(t), crockery.wash(Math.min(i, .5), aCurWashPos)
}

function addSparkle() {
    var e;
    e = new Elements.Bubble(assetLib.getData("bubbles"), 4, [400 * Math.random() + 25, 300 * Math.random() + 150], canvas.width, canvas.height), aBubbles.push(e)
}

function crockeryCallback(e) {
    switch (e) {
        case "dirtClean":
            levelScore += 10;
            break;
        case "allClean":
            playSound("dishClean"), allowWashing = !1, isWashing = !1, hud.washedNum++, aBubbles = new Array;
            for (var t = 0; 10 > t; t++) addSparkle();
            break;
        case "removed":
            addCrockery(), allowWashing = !0, isWashing = !0
    }
}

function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        var e = getDelta();
        if (gameTimer += e, gameTimer >= 1 && (gameTimer = 0, --hud.time <= 0)) return initGameOver(), void 0;
        background.render(ctx), water.update(e), water.render(ctx), crockery.render(ctx), bubbleLimiter += e, isWashing && bubbleLimiter > .15 && aBubbles.length < 20 && (addBubble(e), isWashing = !1, bubbleLimiter = 0);
        for (var t = 0; t < aBubbles.length; t++) aBubbles[t].update(e), renderSprite(aBubbles[t]), aBubbles[t].removeMe && (aBubbles.splice(t, 1), t -= 1);
        hud.render(ctx), renderMuteBut(), renderLogoBut(), requestAnimFrame(updateGameEvent)
    }
}

function updateGameOver() {
    if (!rotatePause && "gameOver" == gameState) {
        var e = getDelta();
        background.render(ctx), panel.update(e), panel.render(ctx);
        for (var t = 0; t < aBubbles.length; t++) aBubbles[t].update(e), renderSprite(aBubbles[t]), aBubbles[t].removeMe && (aBubbles[t].x = 450 * Math.round(1 * Math.random()), aBubbles[t].y = 600 * Math.random(), aBubbles[t].vy = 0, aBubbles[t].startTween(), aBubbles[t].removeMe = !1);
        renderMuteBut(), requestAnimFrame(updateGameOver)
    }
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        var e = getDelta();
        if (splashTimer += e, splashTimer > 2.5) return 1 != audioType || muted || music.play(), initStartScreen(), void 0;
        splash.render(ctx, e), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        var e = getDelta();
        background.render(ctx), panel.update(e), panel.render(ctx);
        for (var t = 0; t < aBubbles.length; t++) aBubbles[t].update(e), renderSprite(aBubbles[t]), aBubbles[t].removeMe && (aBubbles[t].x = 450 * Math.round(1 * Math.random()), aBubbles[t].y = 600 * Math.random(), aBubbles[t].vy = 0, aBubbles[t].startTween(), aBubbles[t].removeMe = !1);
        renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}

function updateTutorialEvent() {
    if (!rotatePause && "tutorial" == gameState) {
        var e = getDelta();
        background.render(ctx), panel.update(e), panel.render(ctx);
        for (var t = 0; t < aBubbles.length; t++) aBubbles[t].update(e), renderSprite(aBubbles[t]), aBubbles[t].removeMe && (aBubbles[t].x = 450 * Math.round(1 * Math.random()), aBubbles[t].y = 600 * Math.random(), aBubbles[t].vy = 0, aBubbles[t].startTween(), aBubbles[t].removeMe = !1);
        renderMuteBut(), requestAnimFrame(updateTutorialEvent)
    }
}

function getDelta() {
    var e = (new Date).getTime(),
        t = (e - previousTime) / 1e3;
    return previousTime = e, t > .5 && (t = 0), t
}

function renderSprite(e) {
    ctx.save(), ctx.translate(e.x, e.y), ctx.scale(e.scaleX, e.scaleY), ctx.rotate(e.rotation), e.render(ctx), ctx.restore()
}

function checkSpriteCollision(e, t) {
    var n = e.x,
        r = e.y,
        i = t.x,
        s = t.y,
        o = (n - i) * (n - i) + (r - s) * (r - s),
        u = e.radius * t.radius;
    return u > o ? !0 : !1
}

function getScaleImageToMax(e, t) {
    var n
}

function getCentreFromTopLeft(e, t, n) {
    var r = new Array;
    return r.push(e[0] + t.oData.spriteWidth / 2 * n), r.push(e[1] + t.oData.spriteHeight / 2 * n), r
}

function getCentreFromBottomRight(e, t, n) {
    var r = new Array;
    return r.push(e[0] - t.oData.spriteWidth / 2 * n), r.push(e[1] - t.oData.spriteHeight / 2 * n), r
}

function loadPreAssets() {
    aLangs.length > 1 ? (preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "langSelect",
        file: "images/langSelect.jpg"
    }, {
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)) : (curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets))
}

function initLangSelect() {
    var e = preAssetLib.getData("langSelect");
    ctx.drawImage(e.img, canvas.width / 2 - e.img.width / 2, canvas.height / 2 - e.img.height / 2);
    for (var t = 140, n = 0; n < aLangs.length; n++) {
        var r = canvas.width / 2 - t * aLangs.length / 2 + n * t,
            i = canvas.height / 2 - t / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[n]
        }, "rect", {
            aRect: [r, i, r + t, i + 140]
        })
    }
}

function initLoadAssets() {
    var e = preAssetLib.getData("preloadImage");
    ctx.drawImage(e.img, 0, 0), loadAssets()
}

function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background",
        file: "images/background.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splash",
        file: "images/splashScreen.jpg"
    }, {
        id: "hud",
        file: "images/hud.png"
    }, {
        id: "water",
        file: "images/water.png"
    }, {
        id: "uiButs",
        file: "images/uiButs_201x109.png",
        oData: {
            columns: 2,
            spriteWidth: 201,
            spriteHeight: 109
        }
    }, {
        id: "panels",
        file: "images/" + curLang + "/panels_450x600.png",
        oData: {
            columns: 2,
            spriteWidth: 450,
            spriteHeight: 600
        }
    }, {
        id: "crockery",
        file: "images/crockery_364x331.png",
        oData: {
            columns: 2,
            spriteWidth: 364,
            spriteHeight: 331
        }
    }, {
        id: "expressions",
        file: "images/expressions_271x108.png",
        oData: {
            columns: 3,
            spriteWidth: 271,
            spriteHeight: 108
        }
    }, {
        id: "bubbles",
        file: "images/bubbles_84x88.png",
        oData: {
            columns: 4,
            spriteWidth: 84,
            spriteHeight: 88
        }
    }, {
        id: "dirt",
        file: "images/dirt_71x72.png",
        oData: {
            columns: 14,
            spriteWidth: 71,
            spriteHeight: 72
        }
    }, {
        id: "bigNumbers",
        file: "images/bigNumbers_50x64.png",
        oData: {
            columns: 10,
            spriteWidth: 50,
            spriteHeight: 64
        }
    }, {
        id: "smallNumbers",
        file: "images/smallNumbers_22x30.png",
        oData: {
            columns: 10,
            spriteWidth: 22,
            spriteHeight: 30
        }
    }, {
        id: "muteBut",
        file: "images/mute_53x53.png",
        oData: {
            columns: 2,
            spriteWidth: 53,
            spriteHeight: 53
        }
    }, {
        id: "logo",
        file: oSpilLogoData.image
    }], ctx, canvas.width, canvas.height);
	assetLib.onReady(dsdsff);

}

function resizeCanvas() {
    var e = window.innerWidth,
        t = window.innerHeight;
    e > 480 && (e -= 1, t -= 1), window.innerWidth > window.innerHeight && isMobile ? ("loading" != gameState && rotatePauseOn(), e / canvas.width < t / canvas.height ? (canvas.style.width = e + "px", canvas.style.height = e / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (t - e / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / e, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = t / canvas.height * canvas.width + "px", canvas.style.height = t + "px", canvasX = (e - t / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / t, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")) : isMobile ? (rotatePause && rotatePauseOff(), canvasX = canvasY = 0, canvasScaleX = canvas.width / e, canvasScaleY = canvas.height / t, canvas.style.width = e + "px", canvas.style.height = t + "px", div.style.marginTop = "0px", div.style.marginLeft = "0px") : (rotatePause && rotatePauseOff(), e / canvas.width < t / canvas.height ? (canvas.style.width = e + "px", canvas.style.height = e / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (t - e / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / e, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = t / canvas.height * canvas.width + "px", canvas.style.height = t + "px", canvasX = (e - t / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / t, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")), userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY)
}

function playSound(e) {
    1 == audioType && sound.play(e)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? Howler.mute() : Howler.unmute() : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}

function renderLogoBut() {
    ctx.drawImage(oSpilLogoBut.oImgData.img, 0, 0, oSpilLogoBut.oImgData.img.width, oSpilLogoBut.oImgData.img.height, oSpilLogoBut.aPos[0] - oSpilLogoBut.oImgData.img.width / 2 * oSpilLogoBut.scale, oSpilLogoBut.aPos[1] - oSpilLogoBut.oImgData.img.height / 2 * oSpilLogoBut.scale, oSpilLogoBut.oImgData.img.width * oSpilLogoBut.scale, oSpilLogoBut.oImgData.img.height * oSpilLogoBut.scale)
}

function renderMuteBut() {
    if (0 != audioType) {
        var e = assetLib.getData("muteBut"),
            t = 0;
        muted && (t = 1);
        var n = t * e.oData.spriteWidth % e.img.width,
            r = Math.floor(t / (e.img.width / e.oData.spriteWidth)) * e.oData.spriteHeight;
        ctx.drawImage(e.img, n, r, e.oData.spriteWidth, e.oData.spriteHeight, 388, 7, e.oData.spriteWidth, e.oData.spriteHeight)
    }
}

function adPauseOn() {
    toggleManualPause()
}

function adPauseOff() {
    manualPause && toggleManualPause()
}

function toggleManualPause() {
    if (manualPause) manualPause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGames"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var e = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [120, 400],
                type: 1,
                frame: 1
            },
            t = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [330, 400],
                type: 1,
                frame: 0
            },
            n = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [120, 520],
                type: 1,
                frame: 2
            },
            r = new Array(e, t, n);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", e), userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", t), userInput.addHitArea("moreGames", butEventHandler, null, "image", n), panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("bigNumbers"), assetLib.getData("smallNumbers"), "pause", r, canvas.width, canvas.height), panel.render(ctx), renderLogoBut(), userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [0, 0, 53, 53]
        }, !0)
    }
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGames"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "game":
            userInput.removeHitArea("wash")
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "tutorial":
            initPreGame();
            break;
        case "game":
            manualPause = !1, userInput.addHitArea("wash", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            }, "rect", {
                aRect: [0, 60, canvas.width, canvas.height]
            }, !0), updateGameEvent();
            break;
        case "gameOver":
            initGameOver()
    }
}
var myPlayGameScore = "";
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s) {
            "undefined" == typeof s && (s = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.totalAssets = t.length, this.ctx = n, this.canvasWidth = r, this.canvasHeight = i, this.showBar = s, this.topLeftX = this.canvasWidth / 2 - r / 4, this.topLeftY = 370, this.showBar && (ctx.strokeStyle = "#ffffff", ctx.lineWidth = 2, ctx.fillStyle = "#D27B5A", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + r / 2, this.topLeftY + 0), ctx.lineTo(this.topLeftX + r / 2, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var o = 0; o < t.length; o++) this.loadImage(t[o])
        }
        return e.prototype.loadImage = function(e) {
            var t = this,
                n = new Image;
            n.onload = function() {
                t.oAssetData[e.id] = {}, t.oAssetData[e.id].img = n, void 0 != e.oData ? (t.oAssetData[e.id].oData = e.oData, t.oAssetData[e.id].isSpriteSheet = !0) : (t.oAssetData[e.id].isSpriteSheet = !1, t.oAssetData[e.id].oData = {}, t.oAssetData[e.id].oData.spriteWidth = t.oAssetData[e.id].img.width, t.oAssetData[e.id].oData.spriteHeight = t.oAssetData[e.id].img.height), ++t.assetsLoaded, t.showBar && ctx.fillRect(t.topLeftX + 2, t.topLeftY + 2, (t.canvasWidth / 2 - 4) / t.totalAssets * t.assetsLoaded, 16), t.checkLoadComplete()
            }, n.src = e.file
        }, e.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, e.prototype.onReady = function(e) {
            this.loadedCallback = e
        }, e.prototype.getImg = function(e) {
            return this.oAssetData[e].img
        }, e.prototype.getData = function(e) {
            return this.oAssetData[e]
        }, e
    }();
    e.AssetLoader = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n, r) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = e, this.oAnims = this.oImgData.oData.oAnims, this.fps = t, this.radius = n, this.animId = r
        }
        return e.prototype.updateAnimation = function(e) {
            this.frameInc += this.fps * e
        }, e.prototype.resetAnim = function() {
            this.frameInc = 0
        }, e.prototype.setFrame = function(e) {
            this.fixedFrame = e
        }, e.prototype.setAnimType = function(e, t, n) {
            switch ("undefined" == typeof n && (n = !0), this.animId = t, this.animType = e, n && this.resetAnim(), e) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, e.prototype.render = function(e) {
            if (null != this.animId) {
                var t = this.oAnims[this.animId].length,
                    n = Math.floor(this.frameInc),
                    r = this.oAnims[this.animId][n % t],
                    i = r * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(r / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && n > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][t - 1], this.animId = null, this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            e.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, e
    }();
    e.AnimSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            "undefined" == typeof n && (n = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = e, this.radius = t, this.setFrame(n)
        }
        return e.prototype.setFrame = function(e) {
            this.frameNum = e
        }, e.prototype.render = function(e) {
            var t = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                n = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            e.drawImage(this.oImgData.img, t, n, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, e
    }();
    e.BasicSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t) {
            var n = this;
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isDetectingKeys = !1, this.isBugBrowser = t, e.addEventListener("touchstart", function(e) {
                for (var t = 0; t < e.changedTouches.length; t++) n.hitDown(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier)
            }, !1), e.addEventListener("touchend", function(e) {
                for (var t = 0; t < e.changedTouches.length; t++) n.hitUp(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier)
            }, !1), e.addEventListener("touchmove", function(e) {
                for (var t = 0; t < n.aHitAreas.length; t++) n.move(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier, !0)
            }, !1), e.addEventListener("mousedown", function(e) {
                n.isDown = !0, n.hitDown(e, e.pageX, e.pageY, 1)
            }, !1), e.addEventListener("mouseup", function(e) {
                n.isDown = !1, n.hitUp(e, e.pageX, e.pageY, 1)
            }, !1), e.addEventListener("mousemove", function(e) {
                n.move(e, e.pageX, e.pageY, 1, n.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return e.prototype.setCanvas = function(e, t, n, r) {
            this.canvasX = e, this.canvasY = t, this.canvasScaleX = n, this.canvasScaleY = r
        }, e.prototype.hitDown = function(e, t, n, r) {
            if (!this.pauseIsOn) {
                var i = (new Date).getTime();
                if (!(i - this.prevHitTime < 500 && isBugBrowser)) {
                    this.prevHitTime = i, e.preventDefault(), e.stopPropagation(), t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                    for (var s = 0; s < this.aHitAreas.length; s++)
                        if (this.aHitAreas[s].rect && t > this.aHitAreas[s].area[0] && n > this.aHitAreas[s].area[1] && t < this.aHitAreas[s].area[2] && n < this.aHitAreas[s].area[3]) {
                            this.aHitAreas[s].aTouchIdentifiers.push(r), this.aHitAreas[s].oData.isDown || (this.aHitAreas[s].oData.isDown = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData));
                            break
                        }
                }
            }
        }, e.prototype.hitUp = function(e, t, n, r) {
            if (!this.pauseIsOn) {
                e.preventDefault(), e.stopPropagation(), t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                for (var i = 0; i < this.aHitAreas.length; i++)
                    if (this.aHitAreas[i].rect && t > this.aHitAreas[i].area[0] && n > this.aHitAreas[i].area[1] && t < this.aHitAreas[i].area[2] && n < this.aHitAreas[i].area[3]) {
                        for (var s = 0; s < this.aHitAreas[i].aTouchIdentifiers.length; s++) this.aHitAreas[i].aTouchIdentifiers[s] == r && (this.aHitAreas[i].aTouchIdentifiers.splice(s, 1), s -= 1);
                        0 == this.aHitAreas[i].aTouchIdentifiers.length && (this.aHitAreas[i].oData.isDown = !1, this.aHitAreas[i].oData.multiTouch && this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData));
                        break
                    }
            }
        }, e.prototype.move = function(e, t, n, r, i) {
            if (!this.pauseIsOn && i) {
                t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                for (var s = 0; s < this.aHitAreas.length; s++)
                    if (this.aHitAreas[s].rect)
                        if (t > this.aHitAreas[s].area[0] && n > this.aHitAreas[s].area[1] && t < this.aHitAreas[s].area[2] && n < this.aHitAreas[s].area[3]) this.aHitAreas[s].oData.isDown || (this.aHitAreas[s].oData.isDown = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].aTouchIdentifiers.push(r), this.aHitAreas[s].oData.multiTouch && this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)), this.aHitAreas[s].oData.isDraggable && (this.aHitAreas[s].oData.isBeingDragged = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData), this.aHitAreas[s].oData.isBeingDragged = !1);
                        else if (this.aHitAreas[s].oData.isDown) {
                    for (var o = 0; o < this.aHitAreas[s].aTouchIdentifiers.length; o++) this.aHitAreas[s].aTouchIdentifiers[o] == r && (this.aHitAreas[s].aTouchIdentifiers.splice(o, 1), o -= 1);
                    0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData))
                }
            }
        }, e.prototype.keyDown = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) e.keyCode == this.aKeys[t].keyCode && (this.aKeys[t].oData.isDown = !0, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, e.prototype.keyUp = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) e.keyCode == this.aKeys[t].keyCode && (this.aKeys[t].oData.isDown = !1, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, e.prototype.addKey = function(e, t, n, r) {
            var i = this;
            this.isDetectingKeys || (window.addEventListener("keydown", function(e) {
                i.keyDown(e)
            }, !1), window.addEventListener("keyup", function(e) {
                i.keyUp(e)
            }, !1), this.isDetectingKeys = !0), null == n && (n = new Object), this.aKeys.push({
                id: e,
                callback: t,
                oData: n,
                keyCode: r
            })
        }, e.prototype.removeKey = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) this.aKeys[t].id == e && (this.aKeys.splice(t, 1), t -= 1)
        }, e.prototype.addHitArea = function(e, t, n, r, i, s) {
            "undefined" == typeof s && (s = !1), null == n && (n = new Object), s && this.removeHitArea(e);
            var o = new Array;
            switch (r) {
                case "image":
                    void 0 == i.scale && (i.scale = 1);
                    var u;
                    i.oImgData.isSpriteSheet ? (u = new Array(i.aPos[0] - i.oImgData.oData.spriteWidth / 2 * i.scale, i.aPos[1] - i.oImgData.oData.spriteHeight / 2 * i.scale, i.aPos[0] + i.oImgData.oData.spriteWidth / 2 * i.scale, i.aPos[1] + i.oImgData.oData.spriteHeight / 2 * i.scale), this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: u
                    })) : (u = new Array(i.aPos[0] - i.oImgData.img.width / 2 * i.scale, i.aPos[1] - i.oImgData.img.height / 2 * i.scale, i.aPos[0] + i.oImgData.img.width / 2 * i.scale, i.aPos[1] + i.oImgData.img.height / 2 * i.scale), this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: u
                    }));
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: i.aRect
                    })
            }
        }, e.prototype.removeHitArea = function(e) {
            for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].id == e && (this.aHitAreas.splice(t, 1), t -= 1)
        }, e
    }();
    e.UserInput = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(e) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), e.textAlign = "left", ctx.font = "10px Helvetica", e.fillStyle = "#333333", e.beginPath(), e.rect(0, this.canvasHeight - 15, 40, 15), e.closePath(), e.fill(), e.fillStyle = "#ffffff", e.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = e
        }
        return e.prototype.update = function(e) {
            this.delta = e
        }, e
    }();
    e.FpsMeter = t
}(Utils || (Utils = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.oImgData = e, this.canvasWidth = t, this.canvasHeight = n
        }
        return e.prototype.updateScroll = function(e) {
            this.incY += 5 * e, this.x = this.x - 50 * Math.sin(this.incY / 10) * e, this.y = this.y - 50 * e
        }, e.prototype.renderScroll = function(e) {
            this.x = this.x % this.canvasWidth, this.y = this.y % this.canvasHeight, this.x < 0 && (this.x += this.canvasWidth), this.y < 0 && (this.y += this.canvasHeight), e.drawImage(this.oImgData.img, this.x, this.y, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight)
        }, e.prototype.render = function(e) {
            e.drawImage(this.oImgData.img, 0, 0)
        }, e
    }();
    e.Background = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.inc = 0, this.oSplashScreenImgData = e, this.canvasWidth = t, this.canvasHeight = n, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return e.prototype.render = function(e, t) {
            this.inc += 5 * t, e.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, e
    }();
    e.Splash = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s, o) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.bigCharSpace = 42, this.smallCharSpace = 20, this.incY = 0, this.oPanelsImgData = e, this.oBigNumbersImgData = t, this.oSmallNumbersImgData = n, this.panelType = r, this.aButs = i, this.canvasWidth = s, this.canvasHeight = o
        }
        return e.prototype.update = function(e) {
            this.incY += 5 * e
        }, e.prototype.startTween = function() {
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, e.prototype.render = function(e) {
            switch (this.panelType) {
                case "start":
                    var t = 0,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    break;
                case "gameOver":
                    var t = 2,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    for (var i = this.oScoreData.levelScore, s = 0; s < i.toString().length; s++) {
                        t = parseFloat(i.toString().charAt(s));
                        var n = t * this.oBigNumbersImgData.oData.spriteWidth % this.oBigNumbersImgData.img.width,
                            r = Math.floor(t / (this.oBigNumbersImgData.img.width / this.oBigNumbersImgData.oData.spriteWidth)) * this.oBigNumbersImgData.oData.spriteHeight;
                        e.drawImage(this.oBigNumbersImgData.img, n, r, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight, this.canvasWidth / 2 + s * this.bigCharSpace - this.bigCharSpace * i.toString().length / 2, 300 + this.posY, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight)
                    }
                    for (var i = this.oScoreData.highScore, s = 0; s < i.toString().length; s++) {
                        t = parseFloat(i.toString().charAt(s));
                        var n = t * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width,
                            r = Math.floor(t / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                        e.drawImage(this.oSmallNumbersImgData.img, n, r, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 248 + s * this.smallCharSpace, 415 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                    }
                    break;
                case "tutorial0":
                    var t = parseFloat(this.panelType.charAt(this.panelType.length - 1)) + 3,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    break;
                case "pause":
                    var t = 1,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight)
            }
            for (var s = 0; s < this.aButs.length; s++) {
                var o = this.posY,
                    u = 0;
                if (0 != this.incY && (u = 3 * Math.sin(this.incY + 45 * s)), 0 == s % 2 && (o = -this.posY), 0 == this.aButs[s].type) e.drawImage(this.aButs[s].oImgData.img, this.aButs[s].aPos[0] - this.aButs[s].oImgData.img.width / 2 + o, this.aButs[s].aPos[1] - this.aButs[s].oImgData.img.height / 2 - u);
                else {
                    var t = this.aButs[s].frame,
                        n = t * this.aButs[s].oImgData.oData.spriteWidth % this.aButs[s].oImgData.img.width,
                        r = Math.floor(t / (this.aButs[s].oImgData.img.width / this.aButs[s].oImgData.oData.spriteWidth)) * this.aButs[s].oImgData.oData.spriteHeight;
                    e.drawImage(this.aButs[s].oImgData.img, n, r, this.aButs[s].oImgData.oData.spriteWidth, this.aButs[s].oImgData.oData.spriteHeight, this.aButs[s].aPos[0] - this.aButs[s].oImgData.oData.spriteWidth / 2 + o, this.aButs[s].aPos[1] - this.aButs[s].oImgData.oData.spriteHeight / 2 - u, this.aButs[s].oImgData.oData.spriteWidth, this.aButs[s].oImgData.oData.spriteHeight)
                }
            }
        }, e
    }();
    e.Panel = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i) {
            this.time = 0, this.washedNum = 0, this.bigCharSpace = 42, this.smallCharSpace = 20, this.oHudImgData = e, this.oBigNumbersImgData = t, this.oSmallNumbersImgData = n, this.canvasWidth = r, this.canvasHeight = i, this.time = 60
        }
        return e.prototype.render = function(e) {
            e.drawImage(this.oHudImgData.img, 0, 0);
            for (var t = 0; t < this.time.toString().length; t++) {
                var n = parseFloat(this.time.toString().charAt(t)),
                    r = n * this.oBigNumbersImgData.oData.spriteWidth % this.oBigNumbersImgData.img.width,
                    i = Math.floor(n / (this.oBigNumbersImgData.img.width / this.oBigNumbersImgData.oData.spriteWidth)) * this.oBigNumbersImgData.oData.spriteHeight;
                e.drawImage(this.oBigNumbersImgData.img, r, i, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight, this.canvasWidth / 2 + t * this.bigCharSpace - this.bigCharSpace * this.time.toString().length / 2, 26, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight)
            }
            for (var t = 0; t < this.washedNum.toString().length; t++) {
                var n = parseFloat(this.washedNum.toString().charAt(t)),
                    r = n * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width,
                    i = Math.floor(n / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                e.drawImage(this.oSmallNumbersImgData.img, r, i, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 48 + t * this.smallCharSpace - this.smallCharSpace * this.washedNum.toString().length / 2, 539, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
            }
        }, e
    }();
    e.Hud = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.incX = 0, this.aSegs = new Array(0, 52, 87, 122, 157, 192), this.oImgData = e, this.canvasWidth = t, this.canvasHeight = n
        }
        return e.prototype.update = function(e) {
            this.incX += 4 * e
        }, e.prototype.render = function(e) {
            for (var t = 0; t < this.aSegs.length - 1; t++) e.drawImage(this.oImgData.img, 0, this.aSegs[t], this.oImgData.img.width, this.aSegs[t + 1] - this.aSegs[t], 15 * Math.sin(this.incX + 2 * t) - 75, this.aSegs[t] + 408, this.oImgData.img.width, this.aSegs[t + 1] - this.aSegs[t])
        }, e
    }();
    e.Water = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s, o) {
            this.aDirtPos = new Array, this.dirtNum = Math.round(5 * Math.random()) + 10, this.eyesOpen = !0, this.aDirtData = new Array([
                [-125, -60],
                [-125, -40],
                [-125, -20],
                [-125, 0],
                [-125, 20],
                [-125, 40],
                [-125, 60],
                [-105, -80],
                [-105, -60],
                [-105, -40],
                [-105, -20],
                [-105, 0],
                [-105, 20],
                [-105, 40],
                [-105, 60],
                [-105, 80],
                [-85, -100],
                [-85, -80],
                [-85, -60],
                [-85, -40],
                [-85, -20],
                [-85, 0],
                [-85, 20],
                [-85, 40],
                [-85, 60],
                [-85, 80],
                [-85, 100],
                [-65, -120],
                [-65, -100],
                [-65, -80],
                [-65, -60],
                [-65, -40],
                [-65, -20],
                [-65, 0],
                [-65, 20],
                [-65, 40],
                [-65, 60],
                [-65, 80],
                [-65, 100],
                [-65, 120],
                [-45, -120],
                [-45, -100],
                [-45, -80],
                [-45, -60],
                [-45, -40],
                [-45, -20],
                [-45, 0],
                [-45, 20],
                [-45, 40],
                [-45, 60],
                [-45, 80],
                [-45, 100],
                [-45, 120],
                [-25, -120],
                [-25, -100],
                [-25, -80],
                [-25, -60],
                [-25, -40],
                [-25, -20],
                [-25, 0],
                [-25, 20],
                [-25, 40],
                [-25, 60],
                [-25, 80],
                [-25, 100],
                [-25, 120],
                [-5, -140],
                [-5, -120],
                [-5, -100],
                [-5, -80],
                [-5, -60],
                [-5, -40],
                [-5, -20],
                [-5, 0],
                [-5, 20],
                [-5, 40],
                [-5, 60],
                [-5, 80],
                [-5, 100],
                [-5, 120],
                [-5, 140],
                [15, -140],
                [15, -120],
                [15, -100],
                [15, -80],
                [15, -60],
                [15, -40],
                [15, -20],
                [15, 0],
                [15, 20],
                [15, 40],
                [15, 60],
                [15, 80],
                [15, 100],
                [15, 120],
                [15, 140],
                [35, -120],
                [35, -100],
                [35, -80],
                [35, -60],
                [35, -40],
                [35, -20],
                [35, 0],
                [35, 20],
                [35, 40],
                [35, 60],
                [35, 80],
                [35, 100],
                [35, 120],
                [55, -120],
                [55, -100],
                [55, -80],
                [55, -60],
                [55, -40],
                [55, -20],
                [55, 0],
                [55, 20],
                [55, 40],
                [55, 60],
                [55, 80],
                [55, 100],
                [55, 120],
                [75, -120],
                [75, -100],
                [75, -80],
                [75, -60],
                [75, -40],
                [75, -20],
                [75, 0],
                [75, 20],
                [75, 40],
                [75, 60],
                [75, 80],
                [75, 100],
                [95, -100],
                [95, -80],
                [95, -60],
                [95, -40],
                [95, -20],
                [95, 0],
                [95, 20],
                [95, 40],
                [95, 60],
                [95, 80],
                [95, 100],
                [115, -80],
                [115, -60],
                [115, -40],
                [115, -20],
                [115, 0],
                [115, 20],
                [115, 40],
                [115, 60],
                [115, 80],
                [135, -40],
                [135, -20],
                [135, 0],
                [135, 20],
                [135, 40]
            ], [
                [-65, -80],
                [-65, -60],
                [-65, -40],
                [-65, -20],
                [-45, -80],
                [-45, -60],
                [-45, -40],
                [-45, -20],
                [-45, 0],
                [-45, 20],
                [-45, 100],
                [-25, -80],
                [-25, -60],
                [-25, -40],
                [-25, -20],
                [-25, 0],
                [-25, 20],
                [-25, 40],
                [-25, 60],
                [-25, 80],
                [-25, 100],
                [-5, -80],
                [-5, -60],
                [-5, -40],
                [-5, -20],
                [-5, 0],
                [-5, 20],
                [-5, 40],
                [-5, 60],
                [-5, 80],
                [-5, 100],
                [15, -80],
                [15, -60],
                [15, -40],
                [15, -20],
                [15, 0],
                [15, 20],
                [15, 40],
                [15, 60],
                [15, 80],
                [15, 100],
                [35, -80],
                [35, -60],
                [35, -40],
                [35, -20],
                [35, 0],
                [35, 20],
                [35, 40],
                [35, 100],
                [55, -80],
                [55, -60],
                [55, -40],
                [55, -20],
                [55, 0],
                [55, 20],
                [55, 100],
                [75, -80],
                [75, -60]
            ], [
                [-125, -60],
                [-125, -40],
                [-105, -60],
                [-105, -40],
                [-105, -20],
                [-105, 0],
                [-105, 20],
                [-85, -60],
                [-85, -40],
                [-85, -20],
                [-85, 0],
                [-85, 20],
                [-85, 40],
                [-65, -60],
                [-65, -40],
                [-65, -20],
                [-65, 0],
                [-65, 20],
                [-65, 40],
                [-65, 60],
                [-65, 80],
                [-45, -60],
                [-45, -40],
                [-45, -20],
                [-45, 0],
                [-45, 20],
                [-45, 40],
                [-45, 60],
                [-45, 80],
                [-25, -60],
                [-25, -40],
                [-25, -20],
                [-25, 0],
                [-25, 20],
                [-25, 40],
                [-25, 60],
                [-25, 80],
                [-5, -60],
                [-5, -40],
                [-5, -20],
                [-5, 0],
                [-5, 20],
                [-5, 40],
                [-5, 60],
                [-5, 80],
                [15, -60],
                [15, -40],
                [15, -20],
                [15, 0],
                [15, 20],
                [15, 40],
                [15, 60],
                [35, -60],
                [35, -40],
                [35, -20],
                [35, 0],
                [35, 20],
                [35, 40],
                [55, -60],
                [55, -40],
                [55, -20],
                [55, 0],
                [75, -60]
            ], [
                [-125, -20],
                [-125, 0],
                [-105, -20],
                [-105, 0],
                [-85, -20],
                [-85, 0],
                [-85, 20],
                [-65, -20],
                [-65, 0],
                [-65, 20],
                [-45, -20],
                [-45, 0],
                [-45, 20],
                [-45, 40],
                [-25, -20],
                [-25, 0],
                [-25, 20],
                [-25, 40],
                [-5, -20],
                [-5, 0],
                [-5, 20],
                [-5, 40],
                [15, -20],
                [15, 0],
                [15, 20],
                [15, 40],
                [35, -20],
                [35, 0],
                [35, 20],
                [35, 40],
                [55, -20],
                [55, 0],
                [55, 20],
                [55, 40],
                [75, -20],
                [75, 0],
                [75, 20],
                [95, -20],
                [95, 0],
                [115, -20],
                [115, 0],
                [135, -20]
            ], [
                [-105, -100],
                [-105, 20],
                [-105, 40],
                [-105, 60],
                [-105, 80],
                [-105, 100],
                [-85, -100],
                [-85, -80],
                [-85, -60],
                [-85, -40],
                [-85, -20],
                [-85, 0],
                [-85, 20],
                [-85, 40],
                [-85, 60],
                [-85, 80],
                [-85, 100],
                [-85, 120],
                [-65, -100],
                [-65, -80],
                [-65, -60],
                [-65, -40],
                [-65, -20],
                [-65, 0],
                [-65, 20],
                [-65, 40],
                [-65, 60],
                [-65, 80],
                [-65, 100],
                [-65, 120],
                [-45, -100],
                [-45, -80],
                [-45, -60],
                [-45, -40],
                [-45, -20],
                [-45, 0],
                [-45, 20],
                [-45, 40],
                [-45, 60],
                [-45, 80],
                [-45, 100],
                [-45, 120],
                [-25, -100],
                [-25, -80],
                [-25, -60],
                [-25, -40],
                [-25, -20],
                [-25, 0],
                [-25, 20],
                [-25, 40],
                [-25, 60],
                [-25, 80],
                [-25, 100],
                [-25, 120],
                [-5, -100],
                [-5, -80],
                [-5, -60],
                [-5, -40],
                [-5, -20],
                [-5, 0],
                [-5, 20],
                [-5, 40],
                [-5, 60],
                [-5, 80],
                [-5, 100],
                [-5, 120],
                [15, -100],
                [15, -80],
                [15, -60],
                [15, -40],
                [15, -20],
                [15, 0],
                [15, 20],
                [15, 40],
                [15, 60],
                [15, 80],
                [15, 100],
                [15, 120],
                [35, -40],
                [35, -20],
                [35, 0],
                [35, 20],
                [35, 40],
                [35, 60],
                [35, 80],
                [35, 100]
            ]), this.oCrockeryImgData = e, this.oExpressionsImgData = t, this.oDirtImgData = n, this.crockeryId = i, this.crockeryCallback = r, this.canvasWidth = s, this.canvasHeight = o, this.x = this.canvasWidth / 2, this.y = 325;
            for (var u = 0; u < this.dirtNum; u++) {
                var a = Math.floor(Math.random() * (this.aDirtData[this.crockeryId].length - 1));
                this.aDirtPos.push(this.aDirtData[this.crockeryId][a]), this.aDirtData[this.crockeryId].splice(a, 1), this.aDirtPos[this.aDirtPos.length - 1].push((90 * Math.random() - 45) * (Math.PI / 180)), this.aDirtPos[this.aDirtPos.length - 1].push(Math.floor(1 * Math.random()))
            }
            this.renderFunc = this.renderDirty
        }
        return e.prototype.startTween = function() {
            this.posY = 600, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, e.prototype.removed = function(e) {
            e.crockeryCallback("removed")
        }, e.prototype.wash = function(e, t) {
            for (var n = 0, r = 0; r < this.aDirtPos.length; r++) {
                var i = t[0] - this.aDirtPos[r][0] - this.x,
                    s = t[1] - this.aDirtPos[r][1] - this.y,
                    o = i * i + s * s;
                5e3 > o && 10 != this.aDirtPos[r][3] && (this.aDirtPos[r][3] += e, this.aDirtPos[r][3] >= 4 && (this.aDirtPos[r][3] = 10, this.crockeryCallback("dirtClean"))), 10 == this.aDirtPos[r][3] && n++
            }
            n == this.aDirtPos.length && (this.crockeryCallback("allClean"), this.renderFunc = this.renderClean, this.posX = 0, this.posY = -25, TweenLite.to(this, .5, {
                posX: 700,
                delay: .5,
                ease: "Back.easeIn",
                onComplete: this.removed,
                onCompleteParams: [this]
            }), TweenLite.to(this, 1, {
                posY: 0,
                ease: "Elastic.easeOut"
            }))
        }, e.prototype.render = function(e) {
            this.renderFunc(e)
        }, e.prototype.renderClean = function(e) {
            var t = this.crockeryId * this.oCrockeryImgData.oData.spriteWidth % this.oCrockeryImgData.img.width,
                n = Math.floor(this.crockeryId / (this.oCrockeryImgData.img.width / this.oCrockeryImgData.oData.spriteWidth)) * this.oCrockeryImgData.oData.spriteHeight;
            e.drawImage(this.oCrockeryImgData.img, t, n, this.oCrockeryImgData.oData.spriteWidth, this.oCrockeryImgData.oData.spriteHeight, this.x - this.oCrockeryImgData.oData.spriteWidth / 2 + this.posX, 325 - this.oCrockeryImgData.oData.spriteHeight / 2 + this.posY, this.oCrockeryImgData.oData.spriteWidth, this.oCrockeryImgData.oData.spriteHeight);
            var r = 3 * this.crockeryId + 2,
                t = r * this.oExpressionsImgData.oData.spriteWidth % this.oExpressionsImgData.img.width,
                n = Math.floor(r / (this.oExpressionsImgData.img.width / this.oExpressionsImgData.oData.spriteWidth)) * this.oExpressionsImgData.oData.spriteHeight;
            e.drawImage(this.oExpressionsImgData.img, t, n, this.oExpressionsImgData.oData.spriteWidth, this.oExpressionsImgData.oData.spriteHeight, this.x - this.oExpressionsImgData.oData.spriteWidth / 2 + this.posX, this.y - this.oExpressionsImgData.oData.spriteHeight / 2 + this.posY, this.oExpressionsImgData.oData.spriteWidth, this.oExpressionsImgData.oData.spriteHeight)
        }, e.prototype.renderDirty = function(e) {
            var t = this.crockeryId * this.oCrockeryImgData.oData.spriteWidth % this.oCrockeryImgData.img.width,
                n = Math.floor(this.crockeryId / (this.oCrockeryImgData.img.width / this.oCrockeryImgData.oData.spriteWidth)) * this.oCrockeryImgData.oData.spriteHeight;
            e.drawImage(this.oCrockeryImgData.img, t, n, this.oCrockeryImgData.oData.spriteWidth, this.oCrockeryImgData.oData.spriteHeight, this.x - this.oCrockeryImgData.oData.spriteWidth / 2, 325 - this.oCrockeryImgData.oData.spriteHeight / 2 + this.posY, this.oCrockeryImgData.oData.spriteWidth, this.oCrockeryImgData.oData.spriteHeight);
            for (var r = 0; r < this.aDirtPos.length; r++)
                if (Math.floor(this.aDirtPos[r][3]) < 4) {
                    e.save(), e.translate(this.aDirtPos[r][0] + this.x, this.aDirtPos[r][1] + this.y + this.posY), e.rotate(this.aDirtPos[r][2]);
                    var i = 4 * (r % 7) + Math.floor(this.aDirtPos[r][3]),
                        t = i * this.oDirtImgData.oData.spriteWidth % this.oDirtImgData.img.width,
                        n = Math.floor(i / (this.oDirtImgData.img.width / this.oDirtImgData.oData.spriteWidth)) * this.oDirtImgData.oData.spriteHeight;
                    e.drawImage(this.oDirtImgData.img, t, n, this.oDirtImgData.oData.spriteWidth, this.oDirtImgData.oData.spriteHeight, -this.oDirtImgData.oData.spriteWidth / 2, -this.oDirtImgData.oData.spriteHeight / 2, this.oDirtImgData.oData.spriteWidth, this.oDirtImgData.oData.spriteHeight), e.restore()
                }
            var i = 3 * this.crockeryId;
            this.eyesOpen || i++;
            var t = i * this.oExpressionsImgData.oData.spriteWidth % this.oExpressionsImgData.img.width,
                n = Math.floor(i / (this.oExpressionsImgData.img.width / this.oExpressionsImgData.oData.spriteWidth)) * this.oExpressionsImgData.oData.spriteHeight;
            e.drawImage(this.oExpressionsImgData.img, t, n, this.oExpressionsImgData.oData.spriteWidth, this.oExpressionsImgData.oData.spriteHeight, this.x - this.oExpressionsImgData.oData.spriteWidth / 2, this.y - this.oExpressionsImgData.oData.spriteHeight / 2 + this.posY, this.oExpressionsImgData.oData.spriteWidth, this.oExpressionsImgData.oData.spriteHeight)
        }, e
    }();
    e.Crockery = t
}(Elements || (Elements = {}));
var __extends = this.__extends || function(e, t) {
        function n() {
            this.constructor = e
        }
        n.prototype = t.prototype, e.prototype = new n
    },
    Elements;
! function(e) {
    var t = function(e) {
        function t(t, n, r, i, s) {
            e.call(this, t, 0, n), this.vx = 0, this.vy = 0, this.x = r[0], this.y = r[1], this.vx = 100 * Math.random() - 50, this.vy = -100 * Math.random(), this.canvasWidth = i, this.canvasHeight = s, this.startTween()
        }
        return __extends(t, e), t.prototype.startTween = function() {
            this.scaleX = this.scaleY = 0, TweenLite.to(this, .5, {
                scaleX: 1,
                scaleY: 1,
                ease: "Back.easeOut"
            })
        }, t.prototype.update = function(e) {
            this.vy += 200 * e, this.y += this.vy * e, this.vx *= .9, this.x += this.vx * e, this.y > this.canvasHeight + 100 && (this.removeMe = !0)
        }, t
    }(Utils.BasicSprite);
    e.Bubble = t
}(Elements || (Elements = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 450, canvas.height = 600;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("viewporter"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, document.addEventListener("visibilitychange", function() {
    document.hidden ? Howler.mute() : muted || Howler.unmute()
}, !1), window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        resizeCanvas()
    }, !1);
    var e = {
        id: "576742227280292100"
    };
    GameAPI.loadAPI(function(e) {
        console.log("GameAPI version " + e.version + " loaded!"), spilAPI = e, oSpilLogoData = spilAPI.Branding.getLogo(), oSpilMoreGamesData = spilAPI.Branding.getLink("more_games"), loadPreAssets()
    }, e)
}), isIE10 || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? (audioType = 0, music = new Audio("audio/music.ogg"), music.addEventListener("ended", function() {
    this.currentTime = 0, this.play()
}, !1), music.play()) : (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        click: [0, 300],
        startSplash: [500, 800],
        wash0: [1500, 600],
        wash1: [2500, 800],
        wash2: [3500, 600],
        wash3: [4500, 700],
        gameEnd: [5500, 2500],
        dishClean: [8500, 1e3]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.m4a"],
    volume: .25,
    loop: !0
}));
var panel, hud, background, levelScore = 0,
    highScore = 0,
    levelNum = 0,
    aLevelUps, levelBonusScore, bonusScore, aTutorials = new Array({
        levelNum: 0,
        shown: !1,
        panelType: "tutorial0"
    }),
    panelFrame, gameTimer, water, crockery, crockeryId = Math.floor(5 * Math.random()),
    aPrevWashPos, aCurWashPos, isWashing = !1,
    bubbleLimiter, aBubbles, allowWashing, flipFlop = !0,
    spilAPI, oSpilLogoData = {},
    oSpilMoreGamesData = {},
    oSpilLogoBut