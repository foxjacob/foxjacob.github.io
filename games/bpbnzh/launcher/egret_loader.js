function setStageSize() {
    if (/iphone/i.test(navigator.userAgent)) {
        window["client"] = "iphone";
    } else {
        window["client"] = "android";
    }
/*全屏适配*/
    var winHeight;
    var winWidth;
    if (document.documentElement && document.documentElement.clientHeight &&
        document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    } else {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
    }
    var GameWin;
    if (window["client"] == "iphone") {
        GameWin = {w: 640, h: 1136}; //i6苹果分辨率
    } else {
        GameWin = {w: 320, h: 568};//安卓客户端考虑到性能，将分辨率降为i6分辨率的一半
    }
    var Gper = GameWin.h / GameWin.w;
    var per = winHeight / winWidth;
    if (per < Gper) {
        window["stage_width"] = GameWin.h / per;
        window["stage_height"] = GameWin.h;
    } else if (per >= Gper) {
        window["stage_width"] = GameWin.w;
        window["stage_height"] = GameWin.w * per;
    }
    egret.StageDelegate.getInstance().setDesignSize(window["stage_width"], window["stage_height"]);
    if (window["client"] == "android") {
        window["stage_width"] *= 2;
        window["stage_height"] *= 2;
    }
}

egret_h5.startGame = function () {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();
    setStageSize();//调用上面写好的方法
    context.stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ?
        egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.NO_SCALE;
    context.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;

    //WebGL is a Egret's beta property. It's off by default.
    //WebGL是egret的Beta特性，默认关闭
    var rendererType = 0;
    if (rendererType == 1) {// egret.WebGLUtils.checkCanUseWebGL()) {
        console.log("Use WebGL mode");
        context.rendererContext = new egret.WebGLRenderer();
    }
    else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }

    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();

    var rootClass;
    if(document_class){
        rootClass = egret.getDefinitionByName(document_class);
    }
    if(rootClass) {
        var rootContainer = new rootClass();
        if(rootContainer instanceof egret.DisplayObjectContainer){
            context.stage.addChild(rootContainer);
        }
        else{
            throw new Error("Document Class must be the subclass to egret.DisplayObjectContainer!");
        }
    }
    else{
        throw new Error("Document Class is not found！");
    }

    //处理屏幕大小改变
    //implement for screen size change
    var resizeTimer = null;
    var doResize = function () {
        context.stage.changeSize();
        resizeTimer = null;
    };
    window.onresize = function () {
        if (resizeTimer == null) {
            resizeTimer = setTimeout(doResize, 300);
        }
    };
};