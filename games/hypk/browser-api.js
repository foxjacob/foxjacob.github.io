var browsers = {

    orientation: {

        landscape: 1,
        portrait: 2,
        check: function (checkOrientation, reload) {

            if (!browsers.devices.isMobile) {
                return true;
            }

            var width = document.documentElement.clientWidth;
            var height = document.documentElement.clientHeight;
            var orientation, message;
            if (checkOrientation == browsers.orientation.landscape) {
                message = "当前游戏需要横屏显示，请您旋转屏幕后再试一次";
            }
            else {
                message = "当前游戏需要竖屏显示，请您旋转屏幕后再试一次";
            }
            if (width >= height) {
                orientation = browsers.orientation.landscape;
            }
            else {
                orientation = browsers.orientation.portrait;
            }
            if (orientation == checkOrientation) {
                return true;
            }
            else {
                if (reload) {
                    var result = window.confirm(message);
                    if (result) {
                        window.location.reload()
                    }
                }
                else {

                    alert(message);
                }
                return false;
            }
        }

    }
};


var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function () {
    browsers.orientation.check(browsers.orientation.portrait)
}, false);


(function () {
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    function handleVisibilityChange(e) {
//        console.log(e);
//        if (!ns_egret && !ns_egret.SoundContext && !ns_egret.SoundContext.context)return;
//        var sound = ns_egret.SoundContext.getInstance();
//        if (document[hidden]) {
//            sound.stopMusic();
//        }
//        else {
//            if (sound._playingMusicName) {
//                sound.playMusic(sound._playingMusicName);
//            }
//        }

    }

    document.addEventListener(visibilityChange, handleVisibilityChange, false);
})();

(function () {
    var ua = navigator.userAgent.toLowerCase();
    browsers.devices = {};
    browsers.devices.isMobile = (ua.indexOf('mobile') != -1 || ua.indexOf('android') != -1);
})();


