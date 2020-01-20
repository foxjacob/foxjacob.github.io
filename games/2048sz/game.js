var CRENDER_DEBUG = !1;
"undefined" == typeof window.console && (window.console = {
    log: function() {}
});
window.Utils || (window.Utils = {});
Utils.detectMobileBrowser = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
Utils.getTouchStartEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerdown" : "touchstart"
};
Utils.getTouchMoveEvent = function() {
    return Utils.isWindowsPhone() ? "mspointermove" : "touchmove"
};
Utils.getTouchEndEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerup" : "touchend"
};
Utils.touchScreen = Utils.detectMobileBrowser();
Utils.globalScale = 1;
Utils.globalPixelScale = 1;
Utils.isWindowHidden = !1;
Utils.DOMMainContainerId = "main_container";
Utils.DOMProgressContainerId = "progress_container";
Utils.DOMProgressId = "progress";
Utils.DOMScreenBackgroundContainerId = "screen_background_container";
Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper";
Utils.DOMScreenBackgroundId = "screen_background";
Utils.DOMScreenContainerId = "screen_container";
Utils.DOMScreenWrapperId = "screen_wrapper";
Utils.DOMScreenId = "screen";
Utils.DOMP2lContainerId = "p2l_container";
Utils.DOMP2lId = "p2l";
Utils.DOMMarkId = "mark";
Utils.setCookie = function(a, c) {
    try {
        window.localStorage.setItem(a, c)
    } catch (d) {
        var e = new Date;
        e.setDate(e.getDate() + 3650);
        document.cookie = a + "=" + c + "; expires=" + e.toUTCString()
    }
};
Utils.getCookie = function(a) {
    var c;
    try {
        c = window.localStorage.getItem(a)
    } catch (d) {
        a += "=";
        c = document.cookie.indexOf(a);
        if (-1 == c) return null;
        var e = document.cookie.indexOf(";", c + a.length); - 1 == e && (e = document.cookie.length);
        c = unescape(document.cookie.substring(c + a.length, e))
    }
    return c
};
Utils.bindEvent = function(a, c, d) {
    a.addEventListener ? a.addEventListener(c, d, !1) : a.attachEvent && a.attachEvent("on" + c, d)
};
Utils.getObjectLeft = function(a) {
    var c = a.offsetLeft;
    a.offsetParent && (c += Utils.getObjectLeft(a.offsetParent));
    return c
};
Utils.getObjectTop = function(a) {
    var c = a.offsetTop;
    a.offsetParent && (c += Utils.getObjectTop(a.offsetParent));
    return c
};
Utils.parseGet = function() {
    var a = {},
        c = window.location.toString(),
        d = window.location.toString().indexOf("?");
    if (0 <= d)
        for (var c = c.substr(d + 1, c.length), d = c.split("&"), e = 0; e < d.length; e++) c = d[e].split("="), a[c[0]] = c[1];
    return a
};
Utils.getMouseCoord = function(a, c) {
    var d = a || window.event;
    d.touches && (d = d.touches[0]);
    if (!d) return {
        x: 0,
        y: 0
    };
    var e = 0,
        f = 0,
        g = 0,
        h = 0;
    c && (e = Utils.getObjectLeft(c), f = Utils.getObjectTop(c));
    if (d.pageX || d.pageY) g = d.pageX, h = d.pageY;
    else if (d.clientX || d.clientY) g = d.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, h = d.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
    return {
        x: g - e,
        y: h - f
    }
};
Utils.removeFromArray = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++) a[e] != c && d.push(a[e]);
    return d
};
Utils.showLoadProgress = function(a) {
    var c = Utils.globalScale,
        d;
    d = "Loading: " + a + "%<br><br>";
    d += '<div style="display: block; background: #000; width: ' + a * c * 2 + "px; height: " + 10 * c + 'px;">&nbsp;</div>';
    document.getElementById(Utils.DOMProgressId).innerHTML = d
};
Utils.hideAddressBarLock = !1;
Utils.mobileHideAddressBar = function() {
    Utils.hideAddressBarLock || window.scrollTo(0, 1)
};
Utils.mobileCheckIphone4 = function() {
    return Utils.touchScreen && 0 <= navigator.userAgent.indexOf("iPhone") && 2 == window.devicePixelRatio
};
Utils.mobileCheckBrokenAndroid = function() {
    return Utils.touchScreen && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
};
Utils.mobileCheckSlowDevice = function() {
    return Utils.mobileCheckBrokenAndroid() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310") || Utils.touchScreen && Utils.isAndroid() && Utils.isFirefox() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310")
};
Utils.isChrome = function() {
    var a = !1;
    0 <= navigator.userAgent.toLowerCase().indexOf("chrome") && (a = !0, Utils.isAndroid() && 22 > (parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0) && (a = !1));
    return a
};
Utils.isAndroid = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("android")
};
Utils.isIOS = function() {
    return navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? !0 : !1
};
Utils.isPlayFreeBrowser = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("playfreebrowser")
};
Utils.isFirefox = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("firefox")
};
Utils.isWindowsPhone = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("windows phone")
};
Utils.checkSpilgamesEnvironment = function() {
    return "undefined" != typeof window.ExternalAPI && "Spilgames" == ExternalAPI.type && ExternalAPI.check()
};
Utils.disableCorrectPixelRatio = !1;
Utils.mobileCorrectPixelRatio = function() {
    for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), c = !0, d = null, e = "", f = 0; f < a.length; f++)
        if ("viewport" == a[f].name) {
            d = a[f];
            c = !1;
            break
        }
    c && (d = document.createElement("meta"), d.name = "viewport");
    e += "minimal-ui, target-densitydpi=device-dpi, user-scalable=0";
    Utils.isPlayFreeBrowser() && (e += ", width=device-width, height=device-height");
    a = 1 / (window.devicePixelRatio ? window.devicePixelRatio : 1);
    a = a.toFixed(2);
    Utils.disableCorrectPixelRatio && (a =
        1);
    d.content = e + (", initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a);
    c && document.getElementsByTagName("head")[0].appendChild(d)
};
Utils.getMobileScreenResolution = function(a) {
    var c = 1,
        d = window.innerWidth,
        e = window.innerHeight;
    d && e || (d = screen.width, e = screen.height);
    c = 1;
    Utils.disableCorrectPixelRatio && (c = window.devicePixelRatio ? window.devicePixelRatio : 1);
    var d = d * c,
        e = e * c,
        f = [{
            scale: 1,
            width: 320,
            height: 480
        }, {
            scale: 1.5,
            width: 480,
            height: 720
        }, {
            scale: 2,
            width: 640,
            height: 960
        }],
        g = {
            width: 0,
            height: 0
        },
        h = "";
    Utils.touchScreen ? (g.width = Math.min(d, e), g.height = Math.max(d, e)) : (a && (f = [{
        scale: 1,
        width: 480,
        height: 320
    }, {
        scale: 1.5,
        width: 720,
        height: 480
    }, {
        scale: 2,
        width: 960,
        height: 640
    }]), g.width = d, g.height = e);
    h = "height";
    d = Number.MAX_VALUE;
    for (e = 0; e < f.length; e++) {
        var k = Math.abs(g[h] - f[e][h]);
        d > k && (d = k, c = f[e].scale)
    }
    return Utils.getScaleScreenResolution(c, a)
};
Utils.getScaleScreenResolution = function(a, c) {
    var d = Math.round(320 * a),
        e = Math.round(480 * a);
    return {
        width: c ? e : d,
        height: c ? d : e,
        scale: a
    }
};
Utils.imagesRoot = "images";
Utils.initialResolution = {
    width: 320,
    height: 480,
    scale: 1
};
Utils.ignoreMobileHeightCorrection = !1;
Utils.createLayout = function(a, c, d, e) {
    var f = Utils.globalScale;
    Utils.initialResolution = c;
    d = window.innerHeight;
    document.body.style.overflow = "hidden";
    var g;
    g = "" + ('<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + d + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">');
    g += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' + c.width + "px; height: " + c.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " +
        12 * f + 'px; vertical-align: middle; box-sizing: border-box"></td></tr></table>';
    g = g + "</div>" + ('<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">');
    g += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + c.width + '" height="' + c.height +
        '"></canvas>');
    g += "</div>";
    g += "</div>";
    g += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
    g += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + c.width + '" height="' + c.height + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenId + '" style="position: absolute; left: 0px; top: 0px;" width="' + c.width + '" height="' +
        c.height + '">You browser does not support this application :(</canvas>');
    g += "</div>";
    g += "</div>";
    a.innerHTML = g;
    a = document.createElement("div");
    a.setAttribute("id", Utils.DOMP2lContainerId);
    a.setAttribute("align", "center");
    a.setAttribute("style", "width: 100%; height: " + d + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background-color: #fff; background-image: url(" + Utils.imagesRoot + "/p2l.jpg); background-repeat: no-repeat; background-position: center center");
    c = document.createElement("img");
    c.setAttribute("id", Utils.DOMP2lId);
    c.width = 1;
    c.height = 1;
    c.style.display = "none";
    a.appendChild(c);
    document.body.appendChild(a);
    a = document.createElement("div");
    a.setAttribute("id", Utils.DOMMarkId);
    a.style.position = "fixed";
    a.style.right = "0px";
    a.style.bottom = "0px";
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.background = "";
    a.style.zIndex = "100000";
    document.body.appendChild(a);
    Utils.fitLayoutToScreen()
};
Utils.showMainLayoutContent = function() {
    document.getElementById(Utils.DOMProgressContainerId).style.display = "none";
    document.getElementById(Utils.DOMScreenContainerId).style.display = "block";
    document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
};
Utils.preventEvent = function(a) {
    a.preventDefault();
    a.stopPropagation();
    a.cancelBubble = !0;
    return a.returnValue = !1
};
Utils.addMobileListeners = function(a, c) {
    !c && navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i) || Utils.bindEvent(document.body, Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart", Utils.preventEvent);
    Utils.isPlayFreeBrowser() || Utils.bindEvent(window, "scroll", function(a) {
        setTimeout(Utils.mobileHideAddressBar, 300)
    });
    document.addEventListener(Utils.getVisibiltyProps().visibilityChange, Utils.handleVisibilityChange, !1);
    setInterval("Utils.checkOrientation(" + (a ? "true" : "false") + ")", 500);
    setTimeout(Utils.mobileHideAddressBar,
        500)
};
Utils.handleVisibilityChange = function() {
    Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden];
    Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow" : "showwindow")
};
Utils.getVisibiltyProps = function() {
    var a, c;
    "undefined" !== typeof document.hidden ? (a = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (a = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (a = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden", c = "webkitvisibilitychange");
    return {
        hidden: a,
        visibilityChange: c
    }
};
Utils.staticWindowRect = null;
Utils.setWindowRect = function(a, c) {
    Utils.staticWindowRect = {
        width: a,
        height: c
    }
};
Utils.getWindowRect = function() {
    var a = document.getElementById(Utils.DOMMarkId);
    return Utils.isAndroid() && a ? {
        width: window.innerWidth,
        height: a.offsetTop + 1
    } : {
        width: window.innerWidth,
        height: window.innerHeight
    }
};
Utils.storeOrient = null;
Utils.noCheckOrient = !1;
Utils.checkOrientation = function(a) {
    if (Utils.touchScreen && document.getElementById(Utils.DOMScreenContainerId) && !Utils.noCheckOrient && 1 != Utils.parseGet().nocheckorient) {
        var c = Utils.getWindowRect(),
            c = c.width > c.height;
        Utils.storeOrient !== c && (Utils.storeOrient = c, c != a ? (Utils.dispatchEvent("lockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display =
            "none", document.getElementById(Utils.DOMScreenContainerId).style.display = "none") : (Utils.dispatchEvent("unlockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "visible", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block", document.getElementById(Utils.DOMScreenContainerId).style.display = "block"), Utils.checkSpilgamesEnvironment() && (document.getElementById(Utils.DOMP2lContainerId).style.display =
            "none"), setTimeout(Utils.mobileHideAddressBar, 900), setTimeout(Utils.fitLayoutToScreen, 1E3))
    }
};
Utils.fitLayoutTimer = null;
Utils.addFitLayoutListeners = function() {
    Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
};
Utils.removeFitLayoutListeners = function() {
    clearInterval(Utils.fitLayoutTimer)
};
Utils.fitLayoutLock = !1;
Utils.fitLayoutCorrectHeight = 0;
Utils.fitLayoutAlign = "center";
Utils.fitLayoutVerticalAlign = "top";
Utils.layoutMargin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
Utils.fitLayoutToScreen = function(a) {
    if (!Utils.fitLayoutLock) {
        var c, d, e, f, g;
        g = Utils.getWindowRect();
        "object" == typeof a && a.width || (f = Utils.staticWindowRect ? Utils.staticWindowRect : g, d = f.width, e = f.height, Utils.checkSpilgamesEnvironment() && (e -= 25), e += Utils.fitLayoutCorrectHeight, e -= Utils.layoutMargin.top, e -= Utils.layoutMargin.bottom, d -= Utils.layoutMargin.left, d -= Utils.layoutMargin.right, a = {
            width: d,
            height: e
        });
        if (c = document.getElementById(Utils.DOMScreenWrapperId)) {
            c.initWidth || (c.initWidth = Utils.initialResolution.width,
                c.initHeight = Utils.initialResolution.height);
            d = c.initWidth;
            e = c.initHeight;
            var h = 1,
                h = a.width / d,
                k = a.height / e,
                h = h < k ? h : k;
            Utils.globalPixelScale = h;
            d = Math.floor(d * h);
            e = Math.floor(e * h);
            if (c.lastWidth != a.width || c.lastHeight != a.height || c.lastRealWidth != g.width || c.lastRealHeight != g.height) c.lastWidth = a.width, c.lastHeight = a.height, c.lastRealWidth = g.width, c.lastRealHeight = g.height, Utils.resizeElement(Utils.DOMScreenId, d, e), Utils.resizeElement(Utils.DOMScreenBackgroundId, d, e), Utils.resizeElement(Utils.DOMProgressContainerId,
                f.width, f.height), Utils.resizeElement(Utils.DOMProgressId, d, e), c = Utils.resizeElement(Utils.DOMScreenWrapperId, d, e), Utils.alignElement(c, g, d, e), c = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, d, e), Utils.alignElement(c, g, d, e), Utils.resizeElement(Utils.DOMP2lContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, f.width, f.height), Utils.dispatchEvent("fitlayout"), Utils.isPlayFreeBrowser() && window.scrollTo(1,
                2), setTimeout(Utils.mobileHideAddressBar, 10)
        }
    }
};
Utils.alignElement = function(a, c, d, e) {
    a && (a.style.left = "left" == Utils.fitLayoutAlign ? Utils.layoutMargin.left + "px" : "right" == Utils.fitLayoutAlign ? Math.floor(c.width - d - Utils.layoutMargin.right) + "px" : Math.floor((c.width - d - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px", a.style.top = "top" == Utils.fitLayoutVerticalAlign ? Utils.layoutMargin.top + "px" : "bottom" == Utils.fitLayoutVerticalAlign ? Math.floor(c.height - e - Utils.layoutMargin.bottom) + "px" : Math.floor((c.height - e - Utils.layoutMargin.top - Utils.layoutMargin.bottom) /
        2) + "px")
};
Utils.resizeElement = function(a, c, d) {
    a = document.getElementById(a);
    if (!a) return null;
    a.style.width = Math.floor(c) + "px";
    a.style.height = Math.floor(d) + "px";
    return a
};
Utils.drawIphoneLimiter = function(a, c) {
    c ? a.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : a.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
};
Utils.drawGrid = function(a, c, d) {
    "undefined" == typeof c && (c = !1);
    "undefined" == typeof d && (d = "#FFF");
    var e = c ? 480 : 320;
    c = c ? 320 : 480;
    for (var f = 10; f < e; f += 10) {
        var g = .1 + (f - 10) / 10 % 10 * .1;
        a.drawLine(f, 0, f, c, 1, d, g)
    }
    for (f = 10; f < c; f += 10) g = .1 + (f - 10) / 10 % 10 * .1, a.drawLine(0, f, e, f, 1, d, g)
};
Utils.drawScaleFix = function(a, c) {.75 == Utils.globalScale && (c ? a.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0));
    1.5 == Utils.globalScale && (c ? a.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
};
Utils.grad2radian = function(a) {
    return a / (180 / Math.PI)
};
Utils.radian2grad = function(a) {
    return 180 / Math.PI * a
};
Utils.eventsListeners = [];
Utils.onlockscreen = null;
Utils.onunlockscreen = null;
Utils.onhidewindow = null;
Utils.onshowwindow = null;
Utils.onfitlayout = null;
Utils.addEventListener = function(a, c) {
    EventsManager.addEvent(Utils, a, c)
};
Utils.removeEventListener = function(a, c) {
    EventsManager.removeEvent(Utils, a, c)
};
Utils.dispatchEvent = function(a, c) {
    return EventsManager.dispatchEvent(Utils, a, c)
};
Utils.isArray = function(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
};
Utils.isPlainObject = function(a) {
    return a && a.constructor ? a.constructor === Object : !1
};
Utils.getFunctionArguments = function(a, c) {
    "undefined" == typeof c && (c = 0);
    return [].slice.call(a, c)
};
Utils.proxy = function(a, c) {
    var d = Utils.getFunctionArguments(arguments, 2);
    return function() {
        return a.apply(c || this, Utils.getFunctionArguments(arguments, 0).concat(d))
    }
};
Utils.extend = function(a, c) {
    var d = function() {};
    d.prototype = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.superclass = c.prototype
};
Utils.callSuperConstructor = function(a, c) {
    a.superclass.constructor.apply(c, Utils.getFunctionArguments(arguments, 2))
};
Utils.callSuperMethod = function(a, c, d) {
    return a.superclass[d].apply(c, Utils.getFunctionArguments(arguments, 3))
};
Utils.copyObjectProps = function(a, c) {
    for (var d in a)
        if (a.hasOwnProperty(d))
            if (Utils.isArray(a[d])) {
                c[d] = [];
                for (var e = 0; e < a[d].length; e++) "object" == typeof a[d][e] && (c[d][e] = Utils.cloneEmptyObject(a[d][e])), Utils.copyObjectProps(a[d][e], c[d][e])
            } else Utils.isPlainObject(a[d]) ? (c[d] = {}, Utils.copyObjectProps(a[d], c[d])) : c[d] = a[d]
};
Utils.cloneEmptyObject = function(a) {
    return a.constructor ? new a.constructor : {}
};
Utils.clone = function(a) {
    if (!a || "object" != typeof a) return a;
    var c = Utils.cloneEmptyObject(a);
    Utils.copyObjectProps(a, c);
    return c
};
Utils.switchToTimeMode = function(a) {
    Tween.STEP_TYPE = Tween.STEP_BY_TIME;
    StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME;
    Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME;
    Sprite.CHANGE_FRAME_DELAY = a
};
Utils.getGameID = function() {
    if (window.GAME_ID && "my_game" != window.GAME_ID) return window.GAME_ID;
    for (var a = window.location.toString().split("/"), c = ""; !c;) c = a.pop(), 1 < c.split(".").length && (c = ""), 0 == a.length && (c = "my_game");
    return c
};
Utils.ajax = function(a, c, d, e, f, g) {
    var h;
    h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    h.onreadystatechange = function() {
        if (4 == h.readyState)
            if (200 == h.status) {
                var a = h.responseText;
                "json" == e && (a = JSON.parse(a));
                "xml" == e && (a = Utils.parseXMLString(a));
                f && f(a, h)
            } else g && g(h.status, h)
    };
    if (d) {
        var k = [],
            l;
        for (l in d) k.push(encodeURIComponent(l) + "=" + encodeURIComponent(d[l]));
        d = k.join("&")
    } else d = "";
    c || (c = "GET");
    h.open(c, a + ("GET" == c ? "?" + d : ""), !0);
    "POST" == c && h.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    h.send("GET" != c ? d : null)
};
Utils.get = function(a, c, d, e, f) {
    Utils.ajax(a, "GET", c, d, e, f)
};
Utils.post = function(a, c, d, e, f) {
    Utils.ajax(a, "POST", c, d, e, f)
};
Utils.getBezierBasis = function(a, c, d) {
    function e(a) {
        return 1 >= a ? 1 : a * e(a - 1)
    }
    return e(c) / (e(a) * e(c - a)) * Math.pow(d, a) * Math.pow(1 - d, c - a)
};
Utils.getBezierCurve = function(a, c) {
    "undefined" == typeof c && (c = .1);
    var d = [];
    c /= a.length;
    for (var e = 0; e < 1 + c; e += c) {
        1 < e && (e = 1);
        var f = d.length;
        d[f] = {
            x: 0,
            y: 0
        };
        for (var g = 0; g < a.length; g++) {
            var h = Utils.getBezierBasis(g, a.length - 1, e);
            d[f].x += a[g].x * h;
            d[f].y += a[g].y * h
        }
    }
    return d
};
Utils.parseXMLString = function(a) {
    var c = null;
    if ("undefined" != typeof window.DOMParser) c = (new window.DOMParser).parseFromString(a, "text/xml");
    else if ("undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM")) c = new window.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a);
    else throw Error("No XML parser found");
    return c
};

function ImagesPreloader() {
    this.curItem = -1;
    this.loadedImages = {};
    this.processCallback = this.endCallback = this.data = null;
    this.minProgressVal = 0;
    this.maxProgressVal = 100;
    this.wait = Utils.proxy(this.wait, this)
}
ImagesPreloader.prototype.load = function(a, c, d) {
    this.data = a;
    this.endCallback = c;
    this.processCallback = d;
    for (a = 0; a < this.data.length; a++) c = this.data[a], d = new Image, d.src = c.src, this.loadedImages[c.name] = d;
    this.wait()
};
ImagesPreloader.prototype.wait = function() {
    var a = 0,
        c = 0,
        d;
    for (d in this.loadedImages) this.loadedImages[d].complete && a++, c++;
    a >= c ? this.endCallback && this.endCallback(this.loadedImages) : (this.processCallback && this.processCallback(Math.floor(a / c * this.maxProgressVal + this.minProgressVal)), setTimeout(this.wait, 50))
};

function SoundsPreloader(a, c, d) {
    this.sounds = a;
    this.endCallback = c;
    this.progressCallback = d;
    this.minProgressVal = this.loadedCount = 0;
    this.maxProgressVal = 100
}
SoundsPreloader.prototype.isMp3Support = function() {
    return "" != document.createElement("audio").canPlayType("audio/mpeg")
};
SoundsPreloader.prototype.isWebAudio = function() {
    return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
};
SoundsPreloader.prototype.load = function(a, c, d) {
    a && (this.sounds = a);
    c && (this.endCallback = c);
    d && (this.progressCallback = d);
    if (!this.sounds || 1 > this.sounds.length || !this.isWebAudio()) this.endCallback && this.endCallback();
    else {
        a = this.isMp3Support() ? "mp3" : "ogg";
        var e;
        this.loadedCount = 0;
        var f = this;
        for (d = 0; d < this.sounds.length; d++) c = this.sounds[d] + "." + a, this.isWebAudio() ? (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.open("GET", c, !0), e.responseType = "arraybuffer", e.onreadystatechange =
            function() {
                if (4 == this.readyState && 200 == this.status) {
                    var a = this.soundSrc;
                    AudioMixer.waContext || (AudioMixer.waContext = new AudioContext);
                    AudioMixer.waContext.decodeAudioData(this.response, function(c) {
                        AudioMixer.buffer[a] = c;
                        f.soundIsLoaded(null, f)
                    }, function(a) {
                        f.soundIsLoaded(null, f)
                    })
                }
            }, e.soundSrc = c, e.send()) : (e = document.createElement("audio"), e.src = c, e.type = "mp3" == a ? "audio/mpeg" : "audio/ogg", e.preload = "auto", e.load(), e.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, e, this)), e.addEventListener("canplaythrough",
            Utils.proxy(this.soundIsLoaded, e, this)))
    }
};
SoundsPreloader.prototype.soundIsLoaded = function(a, c) {
    if (this.nodeName && "audio" == this.nodeName.toLowerCase()) {
        if (this.alreadyLoaded) return;
        this.alreadyLoaded = !0
    }
    c.loadedCount++;
    c.progressCallback && c.progressCallback(Math.floor(c.loadedCount / c.sounds.length * c.maxProgressVal + c.minProgressVal));
    c.loadedCount >= c.sounds.length && c.endCallback && c.endCallback()
};

function Asset(a, c, d, e, f, g) {
    this.name = a + "";
    this.src = c + "";
    this.width = d;
    this.height = e;
    this.frames = f;
    this.layers = g;
    this.object = this.bitmap = null;
    this.ready = !(!this.width || !this.height);
    this.spriteClass = null
}
Asset.prototype.detectSize = function() {
    if (!this.bitmap) return !1;
    try {
        isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0), isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
    } catch (a) {
        CRENDER_DEBUG && console.log(a)
    }
    return !isNaN(this.width) && !isNaN(this.height)
};
Asset.prototype.normalize = function(a) {
    if (!this.ready && this.detectSize()) {
        if (isNaN(this.frames) || 1 > this.frames) this.frames = 1;
        if (isNaN(this.layers) || 1 > this.layers) this.layers = 1;
        this.width = Math.ceil(this.width / this.layers / a);
        this.height = Math.ceil(this.height / this.frames / a);
        this.ready = !0
    }
};

function AssetsLibrary(a, c, d) {
    this.path = "images";
    this.scale = 1;
    this.items = {};
    this.bitmaps = {};
    this.loaded = !1;
    this.onloadprogress = this.onload = null;
    this.spriteClass = Sprite;
    this.onLoadHandler = Utils.proxy(this.onLoadHandler, this);
    this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this);
    this.init(a, c);
    this.addAssets(d)
}
AssetsLibrary.prototype.init = function(a, c) {
    "undefined" != typeof a && (this.path = a + "");
    "undefined" != typeof c && (this.scale = parseFloat(c), isNaN(this.scale) && (this.scale = 1))
};
AssetsLibrary.prototype.load = function(a, c, d, e) {
    this.onload = a;
    this.onloadprogress = c;
    a = new ImagesPreloader;
    c = [];
    for (var f in this.items) c.push(this.items[f]);
    "undefined" != typeof d && (a.minProgressVal = d);
    "undefined" != typeof e && (a.maxProgressVal = e);
    a.load(c, this.onLoadHandler, this.onLoadProgressHandler)
};
AssetsLibrary.prototype.onLoadProgressHandler = function(a) {
    if ("function" == typeof this.onloadprogress) this.onloadprogress(a)
};
AssetsLibrary.prototype.onLoadHandler = function(a) {
    this.loaded = !0;
    for (var c in a) {
        var d = this.items[c];
        d.bitmap = a[c];
        d.normalize(this.scale)
    }
    if ("function" == typeof this.onload) this.onload(this.items)
};
AssetsLibrary.prototype.addAssets = function(a) {
    if ("undefined" != typeof a && "object" == typeof a)
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.noscale = "undefined" == typeof d.noscale ? !1 : d.noscale;
            d.noscale || (d.src = "%SCALE%/" + d.src);
            this.addAsset(d)
        }
};
AssetsLibrary.prototype.addAsset = function(a, c, d, e, f, g) {
    var h = null;
    "object" == typeof a && 1 == arguments.length && (c = a.name, d = a.width || NaN, e = a.height || NaN, f = a.frames || 1, g = a.layers || 1, h = a.spriteClass || null, properties = a.properties || null, a = a.src);
    a = a.replace("%SCALE%", "%PATH%/" + this.scale);
    a = a.replace("%PATH%", this.path);
    if ("undefined" == typeof c) {
        var k = a.split("/"),
            k = k.pop(),
            k = k.split(".");
        c = k = k.shift() + ""
    }
    k = new Asset(c, a, d, e, f, g);
    k.spriteClass = h;
    if (properties)
        for (var l in properties) "undefined" == typeof k[l] &&
            (k[l] = properties[l]);
    return this.items[c] = k
};
AssetsLibrary.prototype.addObject = function(a) {
    var c = this.addAsset("%SCALE%/" + a.image, a.name, a.width * this.scale, a.height * this.scale, a.frames, a.layers);
    c && (c.object = a);
    return c
};
AssetsLibrary.prototype.getAsset = function(a, c) {
    var d = null;
    "undefined" != typeof this.items[a] && this.items[a].bitmap && (d = "undefined" != typeof c && !c || this.items[a].ready ? this.items[a] : null);
    if (!d) throw Error('Trying to get undefined asset "' + a + '"');
    return d
};
AssetsLibrary.prototype.getSprite = function(a, c, d) {
    var e = null,
        e = null;
    try {
        e = this.getAsset(a, !0)
    } catch (f) {
        e = new Asset
    }
    if ((d = d || e.spriteClass || this.spriteClass || window.Sprite) && "function" == typeof d || "function" == typeof window[d]) d = "function" == typeof d ? d : window[d];
    e = d.create && "function" == typeof d.create ? d.create(e, this) : new d(e.bitmap, e.width, e.height, e.frames, e.layers);
    if (c && "object" == typeof c)
        for (var g in c) e[g] = c[g];
    return e
};
AssetsLibrary.prototype.getBitmap = function(a) {
    try {
        return this.getAsset(a, !0).bitmap
    } catch (c) {
        return null
    }
};

function Vector(a, c) {
    "undefined" == typeof a && (a = 0);
    this.x = a;
    "undefined" == typeof c && (c = 0);
    this.y = c
}
Vector.prototype.isZero = function() {
    return 0 == this.x && 0 == this.y
};
Vector.prototype.clone = function() {
    return new Vector(this.x, this.y)
};
Vector.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
Vector.prototype.subtract = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};
Vector.prototype.mult = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
Vector.prototype.invert = function() {
    this.mult(-1);
    return this
};
Vector.prototype.rotate = function(a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    var d = this.clone();
    d.subtract(c);
    d.x = this.x * Math.cos(a) + this.y * Math.sin(a);
    d.y = this.x * -Math.sin(a) + this.y * Math.cos(a);
    d.add(c);
    this.x = d.x;
    this.y = d.y;
    return this
};
Vector.prototype.normalize = function(a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    this.subtract(c);
    this.rotate(-a);
    return this
};
Vector.prototype.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector.prototype.distanceTo = function(a) {
    p2 = this.clone();
    p2.subtract(a);
    return p2.getLength()
};

function Rectangle(a, c, d, e, f) {
    this.center = new Vector(a, c);
    this.width = d;
    this.height = e;
    this.angle = f;
    this.vertices = [];
    this.AABB = [];
    this.refreshVertices()
}
Rectangle.prototype.clone = function() {
    return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
};
Rectangle.prototype.refreshVertices = function() {
    var a = this.width / 2,
        c = this.height / 2;
    this.vertices = [];
    this.vertices.push(new Vector(-a, c));
    this.vertices.push(new Vector(a, c));
    this.vertices.push(new Vector(a, -c));
    this.vertices.push(new Vector(-a, -c));
    this.AABB = [this.center.clone(), this.center.clone()];
    for (a = 0; 4 > a; a++) this.vertices[a].rotate(-this.angle, this.center), this.vertices[a].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[a].x), this.vertices[a].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[a].x),
        this.vertices[a].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[a].y), this.vertices[a].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[a].y)
};
Rectangle.prototype.move = function(a, c) {
    this.center.add(new Vector(a, c));
    this.refreshVertices()
};
Rectangle.prototype.rotate = function(a) {
    this.angle += a;
    this.refreshVertices()
};
Rectangle.prototype.hitTestPoint = function(a) {
    a = a.clone();
    a.normalize(-this.angle, this.center);
    return Math.abs(a.x) <= this.width / 2 && Math.abs(a.y) <= this.height / 2
};
Rectangle.prototype.hitTestRectangle = function(a) {
    var c = this.clone();
    a = a.clone();
    var d, e, f;
    c.move(-this.center.x, -this.center.y);
    a.move(-this.center.x, -this.center.y);
    a.center.rotate(this.angle);
    c.rotate(-this.angle);
    a.rotate(-this.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return !1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) - Math.min(c.AABB[0].y,
        c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    if (d > e + f) return !1;
    c.move(-a.center.x, -a.center.y);
    a.move(-a.center.x, -a.center.y);
    c.center.rotate(a.angle);
    c.refreshVertices();
    c.rotate(-a.angle);
    a.rotate(-a.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return !1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) -
        Math.min(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    return d > e + f ? !1 : !0
};
var EventsManager = {
    addEvent: function(a, c, d) {
        if (a.eventsListeners) {
            for (var e = 0; e < a.eventsListeners.length; e++)
                if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) return;
            a.eventsListeners.push({
                type: c,
                callback: d
            })
        }
    },
    removeEvent: function(a, c, d) {
        if (a.eventsListeners)
            for (var e = 0; e < a.eventsListeners.length; e++)
                if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) {
                    a.eventsListeners = Utils.removeFromArray(a.eventsListeners, a.eventsListeners[e]);
                    break
                }
    },
    dispatchEvent: function(a,
        c, d) {
        if (a.eventsListeners) {
            var e;
            if ("function" == typeof a["on" + c] && (e = a["on" + c](d), !1 === e)) return !1;
            for (var f = 0; f < a.eventsListeners.length; f++)
                if (a.eventsListeners[f].type === c && (e = a.eventsListeners[f].callback(d), !1 === e)) return !1
        }
    },
    hasEventListener: function(a, c) {
        if (a.eventsListeners) {
            for (var d = 0; d < a.eventsListeners.length; d++)
                if (a.eventsListeners[d].type === c) return !0;
            return !1
        }
    },
    removeAllEventListeners: function(a, c) {
        if (a.eventsListeners) {
            "undefined" == typeof c && (a.eventsListeners = []);
            for (var d = [], e =
                0; e < a.eventsListeners.length; e++) a.eventsListeners[e].type !== c && d.push(a.eventsListeners[e]);
            a.eventsListeners = d
        }
    }
};

function EventsProxy() {
    this.eventsListeners = []
}
EventsProxy.prototype.addEventListener = function(a, c) {
    EventsManager.addEvent(this, a, c)
};
EventsProxy.prototype.removeEventListener = function(a, c) {
    EventsManager.removeEvent(this, a, c)
};
EventsProxy.prototype.dispatchEvent = function(a, c) {
    return EventsManager.dispatchEvent(this, a, c)
};
EventsProxy.prototype.hasEventListener = function(a) {
    return EventsManager.hasEventListener(this, a)
};
EventsProxy.prototype.removeAllEventListeners = function(a) {
    EventsManager.removeAllEventListeners(this, a)
};
var Easing = {
    back: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * (2.70158 * a - 1.70158) + c
        },
        easeOut: function(a, c, d, e) {
            return d * ((a = a / e - 1) * a * (2.70158 * a + 1.70158) + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            var f = 1.70158;
            return 1 > (a /= e / 2) ? d / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : d / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
        }
    },
    bounce: {
        easeIn: function(a, c, d, e) {
            return d - Easing.bounce.easeOut(e - a, 0, d, e) + c
        },
        easeOut: function(a, c, d, e) {
            return (a /= e) < 1 / 2.75 ? 7.5625 * d * a * a + c : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 /
                2.75) * a + .9375) + c : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
        },
        easeInOut: function(a, c, d, e) {
            return a < e / 2 ? .5 * Easing.bounce.easeIn(2 * a, 0, d, e) + c : .5 * Easing.bounce.easeOut(2 * a - e, 0, d, e) + .5 * d + c
        }
    },
    circular: {
        easeIn: function(a, c, d, e) {
            return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + c
        },
        easeOut: function(a, c, d, e) {
            return d * Math.sqrt(1 - (a = a / e - 1) * a) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + c : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
        }
    },
    cubic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a + c
        },
        easeOut: function(a, c,
            d, e) {
            return d * ((a = a / e - 1) * a * a + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a + c : d / 2 * ((a -= 2) * a * a + 2) + c
        }
    },
    exponential: {
        easeIn: function(a, c, d, e) {
            return 0 == a ? c : d * Math.pow(2, 10 * (a / e - 1)) + c
        },
        easeOut: function(a, c, d, e) {
            return a == e ? c + d : d * (-Math.pow(2, -10 * a / e) + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 0 == a ? c : a == e ? c + d : 1 > (a /= e / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c : d / 2 * (-Math.pow(2, -10 * --a) + 2) + c
        }
    },
    linear: {
        easeIn: function(a, c, d, e) {
            return d * a / e + c
        },
        easeOut: function(a, c, d, e) {
            return d * a / e + c
        },
        easeInOut: function(a,
            c, d, e) {
            return d * a / e + c
        }
    },
    quadratic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a + c
        },
        easeOut: function(a, c, d, e) {
            return -d * (a /= e) * (a - 2) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c
        }
    },
    quartic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a * a + c
        },
        easeOut: function(a, c, d, e) {
            return -d * ((a = a / e - 1) * a * a * a - 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a + c : -d / 2 * ((a -= 2) * a * a * a - 2) + c
        }
    },
    quintic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a * a * a + c
        },
        easeOut: function(a, c, d, e) {
            return d *
                ((a = a / e - 1) * a * a * a * a + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a * a + c : d / 2 * ((a -= 2) * a * a * a * a + 2) + c
        }
    },
    sine: {
        easeIn: function(a, c, d, e) {
            return -d * Math.cos(a / e * (Math.PI / 2)) + d + c
        },
        easeOut: function(a, c, d, e) {
            return d * Math.sin(a / e * (Math.PI / 2)) + c
        },
        easeInOut: function(a, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + c
        }
    },
    smoothstep: {
        easeIn: function(a, c, d, e) {
            a = a / e / 2;
            return 2 * a * a * (3 - 2 * a) * d + c
        },
        easeOut: function(a, c, d, e) {
            a = (a / e + 1) / 2;
            return (2 * a * a * (3 - 2 * a) - 1) * d + c
        },
        easeInOut: function(a, c, d, e) {
            a /= e;
            return a * a * (3 -
                2 * a) * d + c
        }
    }
};

function Tween(a, c, d, e, f, g) {
    Utils.callSuperConstructor(Tween, this);
    "object" != typeof a && (a = null);
    if (a) {
        if ("undefined" == typeof a[c]) throw Error('Trying to tween undefined property "' + c + '"');
        if (isNaN(a[c])) throw Error("Tweened value can not be " + typeof a[c]);
    } else if (isNaN(c)) throw Error("Tweened value can not be " + typeof c);
    "function" != typeof g && (g = Easing.linear.easeIn);
    this.obj = a;
    this.prop = c;
    this.onfinish = this.onchange = null;
    this.start = d;
    this.end = e;
    this.duration = ~~f;
    this.callback = g;
    this.playing = !1;
    this._pos = -1;
    this.newly = !0;
    this.eventsListeners = []
}
Utils.extend(Tween, EventsProxy);
Tween.prototype.play = function() {
    this.playing = !0;
    this.tick(0)
};
Tween.prototype.pause = function() {
    this.playing = !1
};
Tween.prototype.rewind = function() {
    this._pos = -1
};
Tween.prototype.forward = function() {
    this._pos = this.duration
};
Tween.prototype.stop = function() {
    this.pause();
    this.rewind()
};
Tween.prototype.updateValue = function(a) {
    this.obj ? this.obj[this.prop] = a : this.prop = a
};
Tween.prototype.tick = function(a) {
    if (!this.playing) return !1;
    a || (a = 0);
    Tween.STEP_TYPE == Tween.STEP_BY_FRAME ? this._pos++ : this._pos += a;
    if (0 > this._pos) return !1;
    if (this._pos > this.duration) return this.finish();
    a = this.callback;
    a = a(this._pos, this.start, this.end - this.start, this.duration);
    this.updateValue(a);
    this.dispatchEvent("change", {
        target: this,
        value: a
    });
    return !1
};
Tween.prototype.finish = function() {
    this.stop();
    this.updateValue(this.end);
    return !1 === this.dispatchEvent("finish", {
        target: this,
        value: this.end
    }) ? !1 : !0
};
Tween.STEP_BY_FRAME = 0;
Tween.STEP_BY_TIME = 1;
Tween.STEP_TYPE = Tween.STEP_BY_FRAME;

function DisplayObjectContainer() {
    Utils.callSuperConstructor(DisplayObjectContainer, this);
    this.parent = null;
    this.objectsCounter = 0;
    this.objects = [];
    this.height = this.width = this.y = this.x = 0;
    this.anchor = {
        x: 0,
        y: 0
    };
    this.hitArea = null;
    this.scaleY = this.scaleX = 1;
    this.rotation = this.skewY = this.skewX = 0;
    this.opacity = 1;
    this.fillPattern = this.fillRadialGradient = this.fillLinearGradient = this.fillColor = null
}
Utils.extend(DisplayObjectContainer, EventsProxy);
DisplayObjectContainer.prototype.getAbsoluteRotation = function() {
    return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteOpacity = function() {
    return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleX = function() {
    return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleY = function() {
    return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteSkewX = function() {
    return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteSkewY = function() {
    return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
};
DisplayObjectContainer.prototype.render = function(a, c, d) {
    for (var e = 0; e < this.objects.length; e++) obj = this.objects[e], obj.destroy ? (this.removeChild(obj), e--) : obj.visible && obj.render(a, c, d)
};
DisplayObjectContainer.prototype.getX = function() {
    return Math.round(this.x * Utils.globalScale)
};
DisplayObjectContainer.prototype.getY = function() {
    return Math.round(this.y * Utils.globalScale)
};
DisplayObjectContainer.prototype.getWidth = function() {
    return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getHeight = function() {
    return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getPosition = function() {
    return {
        x: this.x,
        y: this.y
    }
};
DisplayObjectContainer.prototype.setPosition = function(a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setPosition(a.x, a.y);
    this.x = parseFloat(a);
    this.y = parseFloat(c)
};
DisplayObjectContainer.prototype.setPropScale = function(a) {
    this.scaleX = this.scaleY = 1 * a
};
DisplayObjectContainer.prototype.getAnchor = function() {
    return this.anchor
};
DisplayObjectContainer.prototype.setAnchor = function(a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setAnchor(a.x, a.y);
    this.anchor.x = parseFloat(a);
    this.anchor.y = parseFloat(c)
};
DisplayObjectContainer.prototype.alignAnchor = function(a, c) {
    a = parseInt(a);
    isNaN(a) && (a = DisplayObjectContainer.ANCHOR_ALIGN_CENTER);
    0 > a && (a = DisplayObjectContainer.ANCHOR_ALIGN_LEFT);
    0 < a && (a = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT);
    c = parseInt(c);
    isNaN(c) && (c = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE);
    0 > c && (c = DisplayObjectContainer.ANCHOR_VALIGN_TOP);
    0 < c && (c = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM);
    this.anchor.x = this.width * a / 2;
    this.anchor.y = this.height * c / 2;
    return this.getAnchor()
};
DisplayObjectContainer.prototype.getAbsoluteAnchor = function() {
    return this.getPosition()
};
DisplayObjectContainer.prototype.getRelativeCenter = function() {
    var a = this.getAnchor(),
        c = this.getAbsoluteRotation(),
        a = {
            x: a.x,
            y: a.y
        };
    0 != c ? (a = new Vector(-a.x * this.getAbsoluteScaleX(), -a.y * this.getAbsoluteScaleY()), a.rotate(-c)) : (a.x = -(a.x * this.getAbsoluteScaleX()), a.y = -(a.y * this.getAbsoluteScaleY()));
    return a
};
DisplayObjectContainer.prototype.getAbsolutePosition = function() {
    var a = {
        x: this.x,
        y: this.y
    };
    if (this.parent) {
        var c = this.parent.getAbsolutePosition(),
            d = this.parent.getAbsoluteRotation();
        if (0 != d) {
            var e = new Vector(a.x * this.parent.getAbsoluteScaleX(), a.y * this.parent.getAbsoluteScaleY());
            e.rotate(-d);
            a.x = c.x + e.x;
            a.y = c.y + e.y
        } else a.x = c.x + a.x * this.parent.getAbsoluteScaleX(), a.y = c.y + a.y * this.parent.getAbsoluteScaleY()
    }
    return a
};
DisplayObjectContainer.prototype.getAbsoluteCenter = function() {
    var a = this.getAbsolutePosition(),
        c = this.getRelativeCenter();
    a.x += c.x;
    a.y += c.y;
    return a
};
DisplayObjectContainer.prototype.getCenter = function() {
    return this.getAbsoluteCenter()
};
DisplayObjectContainer.prototype.getHitAreaRectangle = function() {
    if (!this.hitArea) return this.getDrawRectangle();
    var a = this.getAbsoluteRotation(),
        c = this.getAbsoluteScaleX(),
        d = this.getAbsoluteScaleY(),
        e = this.getCenter(),
        f = new Rectangle(0, 0, this.hitArea.width * Math.abs(c), this.hitArea.height * Math.abs(d), a);
    0 != a ? (c = new Vector(this.hitArea.x * c, this.hitArea.y * d), c.rotate(-a), f.move(e.x + c.x, e.y + c.y)) : f.move(e.x + this.hitArea.x * c, e.y + this.hitArea.x * d);
    return f
};
DisplayObjectContainer.prototype.getDrawRectangle = function() {
    var a = this.getCenter(),
        c = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
    c.move(a.x, a.y);
    return c
};
DisplayObjectContainer.prototype.getAABBRectangle = function() {
    var a = this.getDrawRectangle(),
        c = a.AABB[1].x - a.AABB[0].x,
        d = a.AABB[1].y - a.AABB[0].y;
    return new Rectangle(a.AABB[0].x + c / 2, a.AABB[0].y + d / 2, c, d, 0)
};
DisplayObjectContainer.prototype.localToGlobal = function(a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition());
    return d
};
DisplayObjectContainer.prototype.globalToLocal = function(a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation());
    return d
};
DisplayObjectContainer.prototype.findMaxZIndex = function() {
    for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) this.objects[d].zIndex > a && (a = this.objects[d].zIndex, c = d);
    return {
        index: c,
        zIndex: a
    }
};
DisplayObjectContainer.prototype.findMinZIndex = function() {
    for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) 0 == d && (a = this.objects[d].zIndex, c = 0), this.objects[d].zIndex < a && (a = this.objects[d].zIndex, c = d);
    return {
        index: c,
        zIndex: a
    }
};
DisplayObjectContainer.prototype.addChild = function(a) {
    var c = this.findMaxZIndex(),
        d = a.zIndex;
    a.zIndex = !1 !== c.index ? c.zIndex + 1 : 0;
    this.objectsCounter++;
    a.uid = this.objectsCounter;
    a.parent = this;
    a.setStage(this.stage);
    this.objects.push(a);
    0 != d && this.setChildZIndex(a, ~~d);
    a.dispatchEvent("add", {
        target: a
    });
    return a
};
DisplayObjectContainer.prototype.setStage = function(a) {
    this.stage = a;
    for (var c = 0; c < this.objects.length; c++) this.objects[c].setStage(a)
};
DisplayObjectContainer.prototype.removeChild = function(a) {
    a && 0 <= this.objects.indexOf(a) && (a.clear(), a.removeAllEventListeners(), a.dispatchEvent("remove", {
        target: a
    }), a.parent = null, this.objects = Utils.removeFromArray(this.objects, a))
};
DisplayObjectContainer.prototype.setChildZIndex = function(a, c) {
    a.zIndex = c;
    this.objects = this.objects.sort(function(a, c) {
        return a.zIndex == c.zIndex ? a.uid > c.uid ? 1 : -1 : a.zIndex > c.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.getHitArea = function() {
    return this.hitArea ? this.hitArea : {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
    }
};
DisplayObjectContainer.prototype.hitTestPointObject = function(a, c, d, e, f) {
    var g, h, k, l, p, n, m;
    "boolean" == typeof a.pixelCheck && (e = a.pixelCheck);
    m = a.getHitArea();
    k = m.width * Math.abs(a.getAbsoluteScaleX());
    l = m.height * Math.abs(a.getAbsoluteScaleY());
    p = a.getAbsoluteCenter();
    g = p.x + m.x - k / 2;
    h = p.y + m.y - l / 2;
    p = c;
    n = d;
    a.ignoreViewport || (p += this.stage.viewport.x, n += this.stage.viewport.y);
    m = !1;
    0 == a.getAbsoluteRotation() ? g <= p && h <= n && g + k >= p && h + l >= n && (m = !0) : (g = a.getHitAreaRectangle(), g.hitTestPoint(new Vector(p, n)) && (m = !0));
    m && e && (this.stage.buffer.width = this.stage.canvas.width, this.stage.buffer.height = this.stage.canvas.height, this.stage.clearScreen(this.stage.buffer), a.render(this.stage.buffer, a.static, 0), c = this.stage.buffer.ctx.getImageData(Math.floor(c * Utils.globalScale), Math.floor(d * Utils.globalScale), 1, 1), 0 == c.data[3] && (m = !1));
    !m && f && a.dragged && (m = !0);
    return m
};
DisplayObjectContainer.prototype.getObjectsStackByCoord = function(a, c, d, e) {
    for (var f, g = [], h = this.objects.length - 1; 0 <= h; h--) this.objects[h].visible && (f = this.objects[h], f.objects && f.objects.length && (g = g.concat(f.getObjectsStackByCoord(a, c, d, e))), this.hitTestPointObject(f, a, c, d, e) && g.push(f));
    return g
};
DisplayObjectContainer.prototype.doDrag = function(a, c) {
    for (var d = 0; d < this.objects.length; d++) this.objects[d].doDrag(a, c);
    if (this.dragged) {
        var d = a,
            e = c;
        this.ignoreViewport || (d += this.stage.viewport.x, e += this.stage.viewport.y);
        this.x = d - this.dragX;
        this.y = e - this.dragY
    }
};
DisplayObjectContainer.prototype.checkMouseOut = function(a, c) {
    for (var d = this.objects.length - 1; 0 <= d; d--)
        if (!1 === this.objects[d].checkMouseOut(a, c)) return;
    if (this.mouseOn && 0 > a.indexOf(this)) return this.mouseOn = !1, d = this.stage.finalizeMouseCoords(this, c), this.dispatchEvent("mouseout", {
        target: this,
        x: d.x,
        y: d.y
    })
};
DisplayObjectContainer.prototype.getMaxZIndexInStack = function(a) {
    for (var c = -1, d = 0, e = 0; e < a.length; e++) a[e].zIndex > c && (c = a[e].zIndex, d = e);
    return d
};
DisplayObjectContainer.prototype.sortStack = function(a, c) {
    return a.sort(function(a, e) {
        a.zIndex == e.zIndex ? c ? a.uid < e.uid ? 1 : -1 : a.uid > e.uid ? 1 : -1 : c ? a.zIndex < e.zIndex ? 1 : -1 : a.zIndex > e.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.clear = function() {
    for (; this.objects.length;) this.removeChild(this.objects[0])
};
DisplayObjectContainer.prototype.getFillStyle = function(a) {
    var c = null;
    if (this.fillLinearGradient) {
        a = a.ctx.createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
        for (c = 0; c < this.fillLinearGradient.points.length; c++) a.addColorStop(this.fillLinearGradient.points[c].point, this.fillLinearGradient.points[c].color);
        c = a
    } else if (this.fillRadialGradient) {
        a = a.ctx.createRadialGradient(this.fillRadialGradient.x0 *
            Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale);
        for (c = 0; c < this.fillRadialGradient.points.length; c++) a.addColorStop(this.fillRadialGradient.points[c].point, this.fillRadialGradient.points[c].color);
        c = a
    } else c = this.fillPattern ? a.ctx.createPattern(this.fillPattern.img, this.fillPattern.repeat) : this.fillColor;
    return c
};
DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1;
DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0;
DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1;
DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1;
DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0;
DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT,
    ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER,
    ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT,
    ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP,
    ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE,
    ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;

function DisplayObject() {
    Utils.callSuperConstructor(DisplayObject, this);
    this.uid = 0;
    this.shadowColor = this.stage = null;
    this.zIndex = this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.visible = !0;
    this.dragged = this.destroy = this.ignoreViewport = this.static = !1;
    this.dragY = this.dragX = 0;
    this.mouseOn = !1;
    this.allowDebugDrawing = !0;
    this.onbox2dsync = this.onremove = this.onadd = this.onrender = this.onenterframe = this.onprerender = this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onmouseout =
        this.onmouseover = this.pixelCheck = null
}
Utils.extend(DisplayObject, DisplayObjectContainer);
DisplayObject.prototype.setStatic = function(a, c) {
    a = Boolean(a);
    if (!c)
        for (var d = 0; d < this.objects.length; d++) this.objects[d].setStatic(a);
    return this.static != a ? (this.static = a, this.stage && this.stage.refreshBackground(), !0) : !1
};
DisplayObject.prototype.startDrag = function(a, c) {
    this.dragged = !0;
    this.dragX = a;
    this.dragY = c
};
DisplayObject.prototype.stopDrag = function() {
    this.dragged = !1;
    this.dragY = this.dragX = 0
};
DisplayObject.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
};
DisplayObject.prototype.addTween = function(a, c, d, e, f, g) {
    if (this.stage) {
        var h = this[a];
        if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
    }
};
DisplayObject.prototype.moveTo = function(a, c, d, e, f, g) {
    d = ~~d;
    0 >= d ? this.setPosition(a, c) : ((a = this.addTween("x", a, d, e)) && a.play(), (c = this.addTween("y", c, d, e, f, g)) && c.play());
    return this
};
DisplayObject.prototype.moveBy = function(a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
DisplayObject.prototype.fadeTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.opacity = a : (a = this.addTween("opacity", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.fadeBy = function(a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
DisplayObject.prototype.rotateTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.rotation = a : (a = this.addTween("rotation", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.rotateBy = function(a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
DisplayObject.prototype.skewXTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewX = a : (a = this.addTween("skewX", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewXBy = function(a, c, d, e, f) {
    return this.skewXTo(this.skewX + a, c, d, e, f)
};
DisplayObject.prototype.skewYTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewY = a : (a = this.addTween("skewY", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewYBy = function(a, c, d, e, f) {
    return this.skewYTo(this.skewY + a, c, d, e, f)
};
DisplayObject.prototype.scaleTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scaleX = this.scaleY = a;
    else {
        var g = this.addTween("scaleX", a, c, d, e, f);
        g && g.play();
        (a = this.addTween("scaleY", a, c, d, g ? null : e, g ? null : f)) && a.play()
    }
    return this
};
DisplayObject.prototype.setZIndex = function(a) {
    this.zIndex = ~~a;
    this.parent && this.parent.setChildZIndex(this, this.zIndex)
};
DisplayObject.prototype.hitTestPoint = function(a, c, d, e, f) {
    return this.stage ? this.stage.hitTestPointObject(this, a, c, d, e, f) : !1
};
DisplayObject.prototype.setRelativePosition = function(a, c, d, e) {
    switch (d) {
        case "right":
            a = this.stage.screenWidth - a;
            break;
        case "left":
            break;
        default:
            a = this.stage.screenWidth / 2 + a
    }
    switch (e) {
        case "bottom":
            c = this.stage.screenHeight - c;
            break;
        case "top":
            break;
        default:
            c = this.stage.screenHeight / 2 + c
    }
    this.setPosition(a, c)
};
DisplayObject.prototype.debugDraw = function() {
    if (this.visible && this.allowDebugDrawing) {
        var a = this.getAbsolutePosition(),
            c = this.getCenter(),
            d = this.getDrawRectangle(),
            e = this.getAABBRectangle();
        stage.drawCircle(a.x, a.y, 1, 1, "rgba(255,0,0,0.9)");
        stage.drawCircle(c.x, c.y, 1, 1, "rgba(0,255,0,0.9)");
        stage.drawLine(a.x, a.y, c.x, c.y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(d.vertices, .5, "rgba(255,0,255,0.5)", 1);
        stage.drawLine(e.vertices[0].x, e.vertices[0].y, e.vertices[2].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawLine(e.vertices[2].x, e.vertices[0].y, e.vertices[0].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(e.vertices, .5, "rgba(255,255,255,0.5)")
    }
};
DisplayObject.prototype.fixChildrenParent = function(a) {
    for (a = 0; a < this.objects.length; a++) this.objects[a].parent = this, this.objects[a].fixChildrenParent()
};
DisplayObject.prototype.clone = function() {
    var a = Utils.clone(this);
    a.fixChildrenParent();
    return a
};

function Graphics() {
    Utils.callSuperConstructor(Graphics, this);
    this.y = this.x = 0;
    this.color = "#000";
    this.lineWidth = 1
}
Utils.extend(Graphics, DisplayObject);
Graphics.prototype.render = function(a, c, d) {
    !!this.static == !!c && this.dispatchEvent("render", {
        target: this,
        canvas: a,
        delta: d
    });
    Utils.callSuperMethod(Graphics, this, "render", a, c, d)
};
Graphics.prototype.prepareCanvas = function(a, c) {
    c.ctx.save();
    this.ignoreViewport || (a.x -= this.stage.viewport.x, a.y -= this.stage.viewport.y);
    a.x *= Utils.globalScale;
    a.y *= Utils.globalScale;
    c.ctx.translate(a.x, a.y);
    var d = this.getAbsoluteRotation();
    c.ctx.rotate(d);
    c.ctx.scale(this.getAbsoluteScaleX(), this.getAbsoluteScaleY());
    var e = this.getAbsoluteSkewX(),
        f = this.getAbsoluteSkewY();
    0 == e && 0 == f || c.ctx.transform(1, e, f, 1, 0, 0);
    this.shadowColor && (c.ctx.shadowColor = this.shadowColor, 0 != d ? (e = new Vector(this.shadowOffsetX *
        Utils.globalScale, this.shadowOffsetY * Utils.globalScale), e.rotate(-d), c.ctx.shadowOffsetX = e.x, c.ctx.shadowOffsetY = e.y) : (c.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, c.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), c.ctx.shadowBlur = this.shadowBlur * Utils.globalScale)
};
Graphics.prototype.preparePath = function(a) {
    a.ctx.beginPath();
    a.ctx.strokeStyle = 0 < this.lineWidth ? this.color : "transparent";
    a.ctx.lineWidth = this.lineWidth * Utils.globalScale;
    a.ctx.globalAlpha = this.getAbsoluteOpacity();
    a.ctx.fillStyle = this.getFillStyle(a)
};
Graphics.prototype.finalizeCanvas = function(a) {
    (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && a.ctx.fill();
    a.ctx.stroke()
};
Graphics.prototype.restoreCanvas = function(a) {
    a.ctx.restore()
};
Graphics.circle = function(a, c, d) {
    Utils.callSuperConstructor(Graphics.circle, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.circle, Graphics);
Graphics.circle.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, 0, 2 * Math.PI), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.circle, this, "render", a, c, d)
};
Graphics.line = function(a, c, d, e) {
    Utils.callSuperConstructor(Graphics.line, this);
    this.x1 = a;
    this.x2 = d;
    this.y1 = c;
    this.y2 = e
};
Utils.extend(Graphics.line, Graphics);
Graphics.line.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale), a.ctx.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.line, this, "render", a, c, d)
};
Graphics.rectangle = function(a, c, d, e) {
    Utils.callSuperConstructor(Graphics.rectangle, this);
    this.x = a;
    this.y = c;
    this.width = d;
    this.height = e
};
Utils.extend(Graphics.rectangle, Graphics);
Graphics.rectangle.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.rect(-this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.rectangle, this, "render", a, c, d)
};
Graphics.arc = function(a, c, d, e, f, g) {
    Utils.callSuperConstructor(Graphics.arc, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.startAngle = e;
    this.endAngle = f;
    this.antiClockWise = g;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.arc, Graphics);
Graphics.arc.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.arc, this, "render", a, c, d)
};
Graphics.polygon = function(a) {
    if (!a || 2 > a.length) throw Error("Invalid parameters");
    Utils.callSuperConstructor(Graphics.polygon, this);
    this.points = a;
    for (var c = Number.MAX_VALUE, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = Number.MIN_VALUE, g = 0; g < a.length; g++) a[g].x < c && (c = a[g].x), a[g].y < d && (d = a[g].y), a[g].x > e && (e = a[g].x), a[g].y > f && (f = a[g].y);
    this.width = e - c;
    this.height = f - d
};
Utils.extend(Graphics.polygon, Graphics);
Graphics.polygon.prototype.render = function(a, c, d) {
    if (!!this.static == !!c) {
        this.prepareCanvas(this.getAbsoluteCenter(), a);
        this.preparePath(a);
        a.ctx.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        for (var e = 1; e < this.points.length; e++) a.ctx.lineTo(this.points[e].x * Utils.globalScale, this.points[e].y * Utils.globalScale);
        a.ctx.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        this.finalizeCanvas(a);
        this.restoreCanvas(a)
    }
    Utils.callSuperMethod(Graphics.polygon,
        this, "render", a, c, d)
};
Graphics.text = function(a, c, d) {
    Utils.callSuperConstructor(Graphics.text, this);
    this.x = a;
    this.y = c;
    this.text = d;
    this.align = Graphics.text.ALIGN_LEFT;
    this.valign = Graphics.text.VALIGN_MIDDLE;
    this.style = "normal";
    this.size = 10;
    this.font = "sans-serif"
};
Utils.extend(Graphics.text, Graphics);
Graphics.text.ALIGN_LEFT = "left";
Graphics.text.ALIGN_CENTER = "center";
Graphics.text.ALIGN_RIGHT = "right";
Graphics.text.VALIGN_TOP = "top";
Graphics.text.VALIGN_MIDDLE = "middle";
Graphics.text.VALIGN_BOTTOM = "bottom";
Graphics.text.prototype.getRect = function(a) {
    return a.ctx.measureText(this.text)
};
Graphics.text.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font, a.ctx.textAlign = this.align, a.ctx.textBaseline = this.valign, this.fillColor && a.ctx.fillText(this.text, 0, 0), a.ctx.strokeText(this.text, 0, 0), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.text, this, "render", a, c, d)
};
Graphics.free = function() {
    this.commands = [];
    Utils.callSuperConstructor(Graphics.free, this)
};
Utils.extend(Graphics.free, Graphics);
Graphics.free.prototype.clear = function() {
    this.commands = []
};
Graphics.free.prototype.beginPath = function() {
    this.commands.push({
        command: "beginPath"
    });
    return this
};
Graphics.free.prototype.stroke = function() {
    this.commands.push({
        command: "stroke"
    });
    return this
};
Graphics.free.prototype.setStrokeStyle = function(a) {
    this.commands.push({
        command: "setStrokeStyle",
        style: a
    });
    return this
};
Graphics.free.prototype.setFillStyle = function(a) {
    this.commands.push({
        command: "setFillStyle",
        style: a
    });
    return this
};
Graphics.free.prototype.fill = function() {
    this.commands.push({
        command: "fill"
    });
    return this
};
Graphics.free.prototype.moveTo = function(a, c) {
    this.commands.push({
        command: "moveTo",
        x: a,
        y: c
    });
    return this
};
Graphics.free.prototype.lineTo = function(a, c) {
    this.commands.push({
        command: "lineTo",
        x: a,
        y: c
    });
    return this
};
Graphics.free.prototype.arc = function(a, c, d, e, f, g) {
    this.commands.push({
        command: "arc",
        x: a,
        y: c,
        radius: d,
        startAngle: e,
        endAngle: f,
        antiClockWise: g
    });
    return this
};
Graphics.free.prototype.circle = function(a, c, d) {
    this.commands.push({
        command: "circle",
        x: a,
        y: c,
        radius: d
    });
    return this
};
Graphics.free.prototype.rect = function(a, c, d, e) {
    this.commands.push({
        command: "circle",
        x: a,
        y: c,
        width: d,
        height: e
    });
    return this
};
Graphics.free.prototype.polygon = function(a) {
    this.commands.push({
        command: "polygon",
        points: a
    });
    return this
};
Graphics.free.prototype.executeCommand = function(a, c) {
    switch (c.command) {
        case "beginPath":
            a.ctx.beginPath();
            break;
        case "stroke":
            a.ctx.stroke();
            break;
        case "fill":
            a.ctx.fill();
            break;
        case "setStrokeStyle":
            a.ctx.strokeStyle = 0 < this.lineWidth ? c.style : "transparent";
            break;
        case "setFillStyle":
            a.ctx.fillStyle = c.style;
            break;
        case "moveTo":
            a.ctx.moveTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
            break;
        case "lineTo":
            a.ctx.lineTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
            break;
        case "arc":
            a.ctx.arc(c.x * Utils.globalScale,
                c.y * Utils.globalScale, c.radius * Utils.globalScale, c.startAngle, c.endAngle, c.antiClockWise);
            break;
        case "circle":
            a.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, 0, 2 * Math.PI);
            break;
        case "rect":
            a.ctx.rect((c.x - c.width / 2) * Utils.globalScale, (c.y - c.height / 2) * Utils.globalScale, c.width * Utils.globalScale, \u0441.height * Utils.globalScale);
            break;
        case "polygon":
            a.ctx.moveTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
            for (var d = 1; d < c.points.length; d++) a.ctx.lineTo(c.points[d].x *
                Utils.globalScale, c.points[d].y * Utils.globalScale);
            a.ctx.lineTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale)
    }
};
Graphics.free.prototype.executeCommands = function(a) {
    for (var c = 0; c < this.commands.length; c++) this.executeCommand(a, this.commands[c])
};
Graphics.free.prototype.render = function(a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), this.executeCommands(a), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.free, this, "render", a, c, d)
};
var BitmapsCache = {
    bitmaps: {},
    cache: function(a) {
        if (!(a && a instanceof Image)) return a;
        if (BitmapsCache.bitmaps[a.src]) return BitmapsCache.bitmaps[a.src];
        cns = document.createElement("canvas");
        cns.width = a.width;
        cns.height = a.height;
        ctx = cns.getContext("2d");
        ctx.drawImage(a, 0, 0, a.width, a.height, 0, 0, a.width, a.height);
        return BitmapsCache.bitmaps[a.src] = cns
    }
};

function Sprite(a, c, d, e, f) {
    Utils.callSuperConstructor(Sprite, this);
    this.width = c;
    this.height = d;
    this.offset = {
        left: 0,
        top: 0
    };
    this.animated = !0;
    this.animDirection = 1;
    this.currentFrame = 0;
    this.totalFrames = Math.max(1, ~~e);
    1 >= this.totalFrames && (this.animated = !1);
    this.currentLayer = 0;
    this.totalLayers = Math.max(1, ~~f);
    this.bitmap = a;
    this.mask = null;
    this.isMask = !1;
    this.maskParent = null;
    this.maskInvert = !1;
    this.animStep = 0;
    this.animDelay = 1;
    this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY;
    this.changeFrameTime = 0;
    this.onchangeframe =
        null;
    this.cacheBitmap = Sprite.CACHE_BITMAPS
}
Utils.extend(Sprite, DisplayObject);
Sprite.create = function(a, c) {
    if ("string" == typeof a) {
        c = c || window.library;
        if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
        a = c.getAsset(a)
    }
    return new Sprite(a.bitmap, a.width || 1, a.height || 1, a.frames || 1, a.layers || 1)
};
Sprite.prototype.play = function() {
    this.animated = !0
};
Sprite.prototype.stop = function() {
    this.animated = !1
};
Sprite.prototype.gotoAndStop = function(a) {
    this.currentFrame = a;
    this.stop()
};
Sprite.prototype.gotoAndPlay = function(a) {
    this.currentFrame = a;
    this.play()
};
Sprite.prototype.nextFrame = function(a) {
    this.dispatchEvent("enterframe", {
        target: this,
        delta: a
    });
    var c = 1;
    if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME)
        if (this.changeFrameTime += a, this.changeFrameTime >= this.changeFrameDelay * this.animDelay) c = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay)), this.changeFrameTime -= Math.abs(c) * this.changeFrameDelay * this.animDelay;
        else return;
    else this.animStep++; if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
        for (var d =
            0; d < c; d++) this.animated && (this.currentFrame += this.animDirection), 0 < this.animDirection && this.currentFrame >= this.totalFrames && (this.currentFrame = 0), 0 > this.animDirection && 0 > this.currentFrame && (this.currentFrame = this.totalFrames - 1), this.dispatchEvent("changeframe", {
            target: this,
            delta: a
        });
        this.animStep = 0
    }
};
Sprite.prototype.setMask = function(a) {
    this.mask = a;
    this.mask.isMask = !0;
    this.mask.stage = this.stage;
    this.mask.maskParent = this
};
Sprite.prototype.renderBack = function(a, c, d, e, f, g) {
    c && (a.ctx.fillStyle = c, a.ctx.strokeStyle = c, a.ctx.fillRect(d, e, f, g))
};
Sprite.prototype.renderBitmap = function(a, c, d, e, f) {
    var g = {
        x: 0,
        y: 0,
        width: e,
        height: f
    };
    if (this.bitmap) {
        var h = this.bitmap.width,
            k = this.bitmap.height,
            l = this.currentLayer * e + this.offset.left * Utils.globalScale,
            p = this.currentFrame * f + this.offset.top * Utils.globalScale;
        if (l < h && p < k) {
            var n = e,
                m = f;
            l + n > h && (n = h - l);
            p + m > k && (m = k - p);
            Sprite.FLOOR_VALUES_ON_RENDER && (l = ~~l, p = ~~p, n = ~~n, m = ~~m, c = ~~c, d = ~~d, e = ~~e, f = ~~f);
            0 < n && 0 < m && 0 < e && 0 < f && a.ctx.drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, l, p, n, m, c, d,
                e, f);
            g.x = l;
            g.y = p;
            g.width = n;
            g.height = m
        }
    }
    return g
};
Sprite.prototype.render = function(a, c, d, e) {
    if (!this.isMask || e) {
        if (!!this.static == !!c) {
            d || (d = 0);
            this.nextFrame(d);
            if (!1 === this.dispatchEvent("prerender", {
                target: this,
                canvas: a,
                delta: d
            }) || !this.stage) return;
            var f = this.getAbsoluteCenter();
            if (e) {
                var f = {
                        x: this.x - this.getAnchor().x,
                        y: this.y - this.getAnchor().y
                    },
                    g = this.parent ? this.parent : this.maskParent;
                g && (f.x += g.getAnchor().x + g.width / 2, f.y += g.getAnchor().y + g.height / 2)
            }
            e = this.width * Utils.globalScale;
            var h = this.height * Utils.globalScale,
                k = f.x * Utils.globalScale -
                e / 2,
                f = f.y * Utils.globalScale - h / 2,
                l = this.getAbsoluteRotation(),
                g = this.getAbsoluteScaleX(),
                p = this.getAbsoluteScaleY(),
                n = this.getAbsoluteSkewX(),
                m = this.getAbsoluteSkewY(),
                q = this.getFillStyle(a),
                r = Boolean(0 != l || 1 != g || 1 != p || this.shadowColor || q || 0 != n || 0 != m);
            this.ignoreViewport || (k -= this.stage.viewport.x * Utils.globalScale, f -= this.stage.viewport.y * Utils.globalScale);
            r && (a.ctx.save(), a.ctx.translate(k + e / 2, f + h / 2), a.ctx.rotate(l), a.ctx.scale(g, p), 0 == n && 0 == m || a.ctx.transform(1, n, m, 1, 0, 0), k = -(e / 2), f = -(h / 2), this.shadowColor &&
                (0 != l ? (g = new Vector(this.shadowOffsetX * Utils.globalScale, this.shadowOffsetY * Utils.globalScale), g.rotate(-l), a.ctx.shadowOffsetX = g.x, a.ctx.shadowOffsetY = g.y) : (a.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, a.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), a.ctx.shadowColor = this.shadowColor, a.ctx.shadowBlur = this.shadowBlur * Utils.globalScale));
            a.ctx.globalAlpha = this.getAbsoluteOpacity();
            this.ceilSizes && (e = Math.ceil(e), h = Math.ceil(h));
            this.mask ? (this.stage.buffer.ctx.save(), this.stage.buffer.ctx.clearRect(0,
                0, e, h), this.renderBack(this.stage.buffer, q, 0, 0, e, h), l = this.renderBitmap(this.stage.buffer, 0, 0, e, h), this.stage.buffer.ctx.globalCompositeOperation = this.maskInvert ? "destination-out" : "destination-in", this.mask.render ? this.mask.render(this.stage.buffer, c, d, !0) : this.stage.buffer.ctx.drawImage(this.mask, this.mask.x ? this.mask.x : 0, this.mask.y ? this.mask.y : 0), Sprite.FLOOR_VALUES_ON_RENDER ? a.ctx.drawImage(this.stage.buffer, 0, 0, l.width, l.height, ~~k, ~~f, ~~e, ~~h) : a.ctx.drawImage(this.stage.buffer, 0, 0, l.width, l.height,
                k, f, e, h), this.stage.buffer.ctx.restore()) : (this.renderBack(a, q, k, f, e, h), this.renderBitmap(a, k, f, e, h));
            r && a.ctx.restore();
            this.stage.allowDebugDrawing && this.allowDebugDrawing && (!this.stage.allowStaticDebugDrawing && this.static || this.debugDraw());
            this.dispatchEvent("render", {
                target: this,
                canvas: a,
                delta: d
            })
        }
        Utils.callSuperMethod(Sprite, this, "render", a, c, d)
    }
};
Sprite.CHANGE_FRAME_BY_FRAME = 0;
Sprite.CHANGE_FRAME_BY_TIME = 1;
Sprite.CHANGE_FRAME_DELAY = 1E3 / 24;
Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME;
Sprite.FLOOR_VALUES_ON_RENDER = !0;
Sprite.CACHE_BITMAPS = Utils.isIOS();

function StageTimer(a, c, d) {
    Utils.callSuperConstructor(StageTimer, this);
    this.repeat = d;
    this.timeout = this.initialTimeout = c;
    this.onend = a;
    this.ontick = null;
    this.newly = !0;
    this.paused = !1
}
Utils.extend(StageTimer, EventsProxy);
StageTimer.prototype.update = function(a) {
    if (!this.paused) {
        StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME ? this.timeout-- : this.timeout -= a;
        if (0 >= this.timeout)
            if ("string" == typeof this.onend ? eval(this.onend) : this.dispatchEvent("end", {
                target: this
            }), this.repeat) this.timeout = this.initialTimeout;
            else return !0;
        this.dispatchEvent("tick", {
            target: this,
            delta: a
        });
        return !1
    }
};
StageTimer.prototype.resume = function() {
    this.paused = !1
};
StageTimer.prototype.pause = function() {
    this.paused = !0
};
StageTimer.TIMEOUT_BY_FRAME = 0;
StageTimer.TIMEOUT_BY_TIME = 1;
StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME;

function Stage(a, c, d) {
    Utils.callSuperConstructor(Stage, this);
    this.canvas = null;
    a && (this.canvas = document.getElementById(a), this.canvas.ctx = this.canvas.getContext("2d"));
    this.backgroundCanvas = null;
    this.needToRebuildBack = !1;
    this.screenWidth = c;
    this.screenHeight = d;
    this.viewport = {
        x: 0,
        y: 0
    };
    this.buffer = null;
    try {
        this.buffer = document.createElement("canvas"), this.buffer.width = c * Utils.globalScale, this.buffer.height = d * Utils.globalScale, this.buffer.ctx = this.buffer.getContext("2d")
    } catch (e) {
        this.buffer = this.canvas
    }
    this.delay =
        40;
    this.started = !1;
    this.lastFPS = this.fps = 0;
    this.ceilSizes = this.pixelMouseMoveEvent = this.pixelMouseDownEvent = this.pixelMouseUpEvent = this.pixelClickEvent = this.showFPS = !1;
    this.tmFPS = this.tmMain = null;
    this.allowStaticDebugDrawing = this.allowDebugDrawing = this.clearLock = !1;
    this.drawBackAlways = Utils.mobileCheckBrokenAndroid();
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.lastTick = 0;
    this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onposttick = this.prerender =
        this.onpretick = this.inputController = null;
    this.canvas && this.addInputListeners(this.canvas);
    this.tick = Utils.proxy(this.tick, this);
    this.clearFPS = Utils.proxy(this.clearFPS, this);
    this.stage = this;
    this.drawScene = this.render
}
Utils.extend(Stage, DisplayObjectContainer);
Stage.prototype.refreshBackground = function() {
    this.needToRebuildBack = !0
};
Stage.prototype.setBackgroundCanvas = function(a) {
    a && (this.backgroundCanvas = document.getElementById(a), this.backgroundCanvas.ctx = this.backgroundCanvas.getContext("2d"))
};
Stage.prototype.destroy = function() {
    clearTimeout(this.tmMain);
    clearTimeout(this.tmFPS);
    this.stop();
    this.clear();
    this.clearScreen(this.canvas);
    this.backgroundCanvas && this.clearScreen(this.backgroundCanvas);
    this.removeInputListeners(this.stage)
};
Stage.prototype.clearScreen = function(a) {
    this.clearLock || a.ctx.clearRect(0, 0, Math.floor(a.width), Math.floor(a.height))
};
Stage.prototype.addChild = function(a) {
    a.stage = this;
    return Utils.callSuperMethod(Stage, this, "addChild", a)
};
Stage.prototype.setZIndex = function(a, c) {
    this.setChildZIndex(a, c)
};
Stage.prototype.removeChild = function(a) {
    a && 0 <= this.objects.indexOf(a) && (this.clearObjectTweens(a), a.stage = null, Utils.callSuperMethod(Stage, this, "removeChild", a))
};
Stage.prototype.finalizeMouseCoords = function(a, c) {
    if (!a) return c;
    var d = this.prepareMouseCoord(c.x),
        e = this.prepareMouseCoord(c.y);
    a.ignoreViewport || (d += this.viewport.x, e += this.viewport.y);
    d -= a.x;
    e -= a.y;
    return {
        x: d,
        y: e
    }
};
Stage.prototype.prepareMouseCoord = function(a) {
    return a / Utils.globalScale / Utils.globalPixelScale
};
Stage.prototype.processMouseEvent = function(a, c, d) {
    a = Utils.getMouseCoord(a, this.inputController);
    d = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), d, !1);
    for (var e, f = 0; f < d.length; f++)
        if (e = this.finalizeMouseCoords(d[f], a), e = d[f].dispatchEvent(c, {
            target: d[f],
            x: e.x,
            y: e.y
        }), !1 === e) return;
    this.dispatchEvent(c, {
        target: this,
        x: Math.floor(this.prepareMouseCoord(a.x)),
        y: Math.floor(this.prepareMouseCoord(a.y))
    })
};
Stage.prototype.checkClick = function(a) {
    this.processMouseEvent(a, "click", this.pixelClickEvent)
};
Stage.prototype.checkContextMenu = function(a) {
    this.processMouseEvent(a, "contextmenu", this.pixelClickEvent)
};
Stage.prototype.checkMouseMove = function(a) {
    a = Utils.getMouseCoord(a, this.inputController);
    this.doDrag(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y));
    var c = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), this.pixelMouseMoveEvent),
        d, e, f, g = [];
    if (0 < c.length) {
        for (d = 0; d < c.length && (g.push(c[d]), f = this.finalizeMouseCoords(c[d], a), c[d].mouseOn || (e = c[d].dispatchEvent("mouseover", {
            target: c[d],
            x: f.x,
            y: f.y
        })), c[d].mouseOn = !0, !1 !== e); d++);
        e = !0;
        for (d = 0; d < c.length && (f =
            this.finalizeMouseCoords(c[d], a), e = c[d].dispatchEvent("mousemove", {
                target: c[d],
                x: f.x,
                y: f.y
            }), !1 !== e); d++);
        !1 !== e && this.dispatchEvent("mousemove", {
            target: this,
            x: Math.floor(this.prepareMouseCoord(a.x)),
            y: Math.floor(this.prepareMouseCoord(a.y))
        })
    }
    this.checkMouseOut(g, a)
};
Stage.prototype.checkMouseDown = function(a) {
    this.processMouseEvent(a, "mousedown", this.pixelMouseDownEvent)
};
Stage.prototype.checkMouseUp = function(a) {
    this.processMouseEvent(a, "mouseup", this.pixelMouseUpEvent)
};
Stage.prototype.clear = function() {
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.objectsCounter = 0;
    Utils.callSuperMethod(Stage, this, "clear")
};
Stage.prototype.hitTest = function(a, c) {
    if (0 == a.getAbsoluteRotation() && 0 == c.getAbsoluteRotation()) {
        var d = a.getX() - a.getWidth() / 2,
            e = a.getY() - a.getHeight() / 2,
            f = c.getX() - c.getWidth() / 2,
            g = c.getY() - c.getHeight() / 2,
            h = Math.max(e, g),
            k = Math.max(d, f),
            d = Math.min(d + a.getWidth(), f + c.getWidth()),
            e = Math.min(e + a.getHeight(), g + c.getHeight()) - h;
        return 0 < d - k && 0 < e ? !0 : !1
    }
    k = a.getDrawRectangle();
    e = c.getDrawRectangle();
    return k.hitTestRectangle(e)
};
Stage.prototype.getCenter = function() {
    return {
        x: this.screenWidth / 2,
        y: this.screenHeight / 2
    }
};
Stage.prototype.drawRectangle = function(a, c, d, e, f, g, h, k) {
    var l = this.canvas;
    l.ctx.globalAlpha = "undefined" != typeof h ? h : 1;
    l.ctx.fillStyle = f;
    l.ctx.strokeStyle = f;
    k || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    g ? l.ctx.fillRect(a - d / 2, c - e / 2, d, e) : l.ctx.strokeRect(a - d / 2, c - e / 2, d, e)
};
Stage.prototype.drawCircle = function(a, c, d, e, f, g, h) {
    this.drawArc(a, c, d, 0, 2 * Math.PI, !1, e, f, g, h)
};
Stage.prototype.drawArc = function(a, c, d, e, f, g, h, k, l, p) {
    var n = this.canvas,
        m = n.ctx.lineWidth;
    "undefined" == typeof k && (k = "#000");
    n.ctx.strokeStyle = k;
    "undefined" == typeof h && (h = 1);
    n.ctx.lineWidth = h * Utils.globalScale;
    "undefined" == typeof l && (l = 1);
    n.ctx.globalAlpha = l;
    p || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    n.ctx.beginPath();
    n.ctx.arc(a, c, d, e, f, g);
    n.ctx.stroke();
    n.ctx.lineWidth = m
};
Stage.prototype.drawPolygon = function(a, c, d, e, f) {
    if ("object" == typeof a && a instanceof Array && !(2 > a.length)) {
        for (var g = 0; g < a.length - 1; g++) this.drawLine(a[g].x, a[g].y, a[g + 1].x, a[g + 1].y, c, d, e, f);
        this.drawLine(a[g].x, a[g].y, a[0].x, a[0].y, c, d, e, f)
    }
};
Stage.prototype.drawLine = function(a, c, d, e, f, g, h, k) {
    var l = this.canvas,
        p = l.ctx.lineWidth;
    l.ctx.strokeStyle = g ? g : "#000";
    l.ctx.lineWidth = f ? f * Utils.globalScale : 1 * Utils.globalScale;
    l.ctx.globalAlpha = h ? h : 1;
    k || (a -= this.viewport.x, c -= this.viewport.y, d -= this.viewport.x, e -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    l.ctx.beginPath();
    l.ctx.moveTo(a, c);
    l.ctx.lineTo(d, e);
    l.ctx.stroke();
    l.ctx.lineWidth = p
};
Stage.prototype.start = function() {
    this.started || (this.started = !0, this.clearFPS(), this.tick())
};
Stage.prototype.forceRender = function() {
    this.started && this.tick()
};
Stage.prototype.stop = function() {
    this.started = !1
};
Stage.prototype.clearFPS = function() {
    this.lastFPS = this.fps;
    this.fps = 0;
    this.started && (this.tmFPS = setTimeout(this.clearFPS, 1E3))
};
Stage.prototype.setTextStyle = function(a, c, d, e, f, g) {
    g = g ? g : this.canvas;
    g.ctx.fillStyle = e;
    g.ctx.strokeStyle = f;
    e = "";
    d && (e += d + " ");
    c && (e += Math.floor(c * Utils.globalScale) + "px ");
    a && (e += a);
    g.ctx.font = e
};
Stage.prototype.drawText = function(a, c, d, e, f, g, h) {
    h = h ? h : this.canvas;
    h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    h.ctx.fillText(a, c, d)
};
Stage.prototype.strokeText = function(a, c, d, e, f, g, h) {
    h = h ? h : this.canvas;
    h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    h.ctx.strokeText(a, c, d)
};
Stage.prototype.getTextWidth = function(a, c) {
    return (c ? c : this.canvas).ctx.measureText(a).width
};
Stage.prototype.render = function(a, c, d, e) {
    a && (e || (e = 0), a && !a.ctx && (a.ctx = a.getContext("2d")), d || ((d = this.getFillStyle(a)) ? (a.ctx.fillStyle = d, a.ctx.fillRect(0, 0, a.width, a.height)) : this.clearLock || this.clearScreen(a)), Utils.callSuperMethod(Stage, this, "render", a, c, e))
};
Stage.prototype.createTween = function(a, c, d, e, f, g) {
    a = new Tween(a, c, d, e, f, g);
    this.tweens.push(a);
    return a
};
Stage.prototype.removeTween = function(a) {
    var c = null;
    if (isNaN(a))
        for (var d = 0; d < this.tweens.length; d++) {
            if (this.tweens[d] === a) {
                c = d;
                break
            }
        } else c = a;
    isNaN(c) || (this.tweens[c] && this.tweens[c].pause(), this.tweens.splice(c, 1));
    return c
};
Stage.prototype.clearObjectTweens = function(a) {
    for (var c = 0; c < this.tweens.length; c++) this.tweens[c].obj === a && (this.tweens[c].destroy = !0)
};
Stage.prototype.updateTweens = function(a) {
    for (var c, d = 0; d < this.tweens.length; d++) c = this.tweens[d], c.destroy && (d = this.removeTween(d), d--);
    for (d = 0; d < this.tweens.length; d++) c = this.tweens[d], !c.newly && c.tick(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.setTimeout = function(a, c) {
    var d = new StageTimer(a, c);
    this.timers.push(d);
    return d
};
Stage.prototype.clearTimeout = function(a) {
    a && (a.destroy = !0)
};
Stage.prototype.setInterval = function(a, c) {
    var d = new StageTimer(a, c, !0);
    this.timers.push(d);
    return d
};
Stage.prototype.clearInterval = function(a) {
    this.clearTimeout(a)
};
Stage.prototype.removeTimer = function(a) {
    this.timers = Utils.removeFromArray(this.timers, a)
};
Stage.prototype.updateTimers = function(a) {
    for (var c, d = 0; d < this.timers.length; d++) c = this.timers[d], c.destroy && (this.removeTimer(c), d--);
    for (d = 0; d < this.timers.length; d++) c = this.timers[d], !c.newly && c.update(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.tick = function() {
    clearTimeout(this.tmMain);
    var a;
    if (Utils.isWindowHidden) this.lastTick = 0, a = this.delay;
    else {
        a = (new Date).getTime();
        var c = Math.min(Stage.MIN_DELTA, a - this.lastTick);
        this.lastTick = a;
        this.dispatchEvent("pretick", {
            target: this,
            delta: c
        });
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTweens(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTimers(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.dispatchEvent("prerender", {
            target: this,
            delta: c
        });
        var d = !1;
        this.drawBackAlways ?
            (this.render(this.canvas, !0, !1, c), d = !0) : this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
        this.render(this.canvas, !1, d, c);
        this.showFPS && (this.setTextStyle("sans-serif", 10, "bold", "#fff", "#000"), this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0));
        this.dispatchEvent("posttick", {
            target: this,
            delta: c
        });
        a = (new Date).getTime() - a;
        a = this.delay - a;
        1 > a && (a = 1);
        this.fps++
    }
    this.started ? this.tmMain = setTimeout(this.tick, a) : this.lastTick = 0
};
Stage.prototype.box2dSync = function(a) {
    for (b = a.m_bodyList; b; b = b.m_next) b.sprite && (b.sprite.rotation = b.GetRotation(), a = b.GetPosition(), b.sprite.x = a.x, b.sprite.y = a.y, b.sprite.dispatchEvent("box2dsync", {
        target: b.sprite
    }))
};
Stage.prototype.processTouchEvent = function(a, c) {
    for (var d = 0; d < a.length; d++) this[c]({
        clientX: a[d].clientX,
        clientY: a[d].clientY
    })
};
Stage.prototype.prepareEventTouches = function(a, c) {
    a[c] || (a[c] = [{
        clientX: a.clientX,
        clientY: a.clientY
    }]);
    return a[c]
};
Stage.prototype.addInputListeners = function(a) {
    this.inputController = a;
    Utils.touchScreen ? (a["on" + Utils.getTouchStartEvent()] = Utils.proxy(function(a) {
            this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseDown");
            this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkClick");
            a.preventDefault()
        }, this), a["on" + Utils.getTouchMoveEvent()] = Utils.proxy(function(a) {
            this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseMove");
            a.preventDefault()
        }, this), a["on" + Utils.getTouchEndEvent()] =
        Utils.proxy(function(a) {
            this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseUp");
            a.preventDefault()
        }, this)) : (a.onclick = Utils.proxy(function(a) {
        this.checkClick(a)
    }, this), a.onmousemove = Utils.proxy(function(a) {
        this.checkMouseMove(a)
    }, this), a.onmousedown = Utils.proxy(function(a) {
        0 == a.button && this.checkMouseDown(a)
    }, this), a.onmouseup = Utils.proxy(function(a) {
        0 == a.button && this.checkMouseUp(a)
    }, this), a.oncontextmenu = Utils.proxy(function(a) {
        this.checkContextMenu(a)
    }, this))
};
Stage.prototype.removeInputListeners = function(a) {
    a.ontouchstart = null;
    a.ontouchmove = null;
    a.ontouchend = null;
    a.onmspointerdown = null;
    a.onmspointermove = null;
    a.onmspointerup = null;
    a.onclick = null;
    a.onmousemove = null;
    a.onmousedown = null;
    a.onmouseup = null;
    a.oncontextmenu = null
};
Stage.MIN_DELTA = 500;

function AudioPlayer() {
    this.disabled = !1;
    this.basePath = "";
    this.mp3Support = !0;
    this.delayPlay = !1;
    this.audioWrapper = null;
    this.busy = this.locked = !1;
    this.startPlayTime = 0;
    this.onend = null;
    this.controlPlay = Utils.proxy(this.controlPlay, this)
}
AudioPlayer.prototype.createNewAudio = function() {
    if (AudioMixer.isWebAudioSupport()) {
        var a = AudioMixer.waContext.createBufferSource();
        a.connect(AudioMixer.waContext.destination);
        return a
    }
    return document.createElement("audio")
};
AudioPlayer.prototype.init = function(a) {
    this.basePath = a ? a : "";
    this.delayPlay = "ontouchstart" in window;
    this.audioWrapper = this.createNewAudio();
    a = document.createElement("audio");
    a.canPlayType ? this.mp3Support = "" != a.canPlayType("audio/mpeg") : this.disabled = !0;
    return !this.disabled
};
AudioPlayer.prototype.play = function(a, c) {
    if (this.disabled) return !1;
    var d = this.basePath + "/" + a + (this.mp3Support ? ".mp3" : ".ogg");
    this.stop();
    this.audioWrapper = this.createNewAudio();
    this.audioWrapper.doLoop = c ? !0 : !1;
    this.audioWrapper.fileName = a;
    if (AudioMixer.isWebAudioSupport()) {
        var e = this;
        this.loadSound(d, function(a) {
            e.audioWrapper.buffer = a;
            e.audioWrapper.noteOn ? e.audioWrapper.noteOn(0) : e.audioWrapper.start(0);
            e.startPlayTime = (new Date).getTime();
            e.audioWrapper.loop = c;
            "undefined" != typeof e.audioWrapper.playbackState ?
                e.waCheckInterval = setInterval(function() {
                    e.audioWrapper ? e.audioWrapper.playbackState == e.audioWrapper.FINISHED_STATE && e.controlPlay() : clearInterval(e.waCheckInterval)
                }, 100) : e.audioWrapper.onended = e.controlPlay
        })
    } else this.audioWrapper.src = d, this.audioWrapper.type = this.mp3Support ? "audio/mpeg" : "audio/ogg", this.audioWrapper.loop = !1, this.audioWrapper.preload = "auto", this.audioWrapper.load(), this.delayPlay ? (this.audioWrapper.addEventListener("canplay", this.readyToPlay), this.audioWrapper.addEventListener("canplaythrough",
        this.readyToPlay)) : this.audioWrapper.play(), this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
    this.busy = !0;
    this.startPlayTime = (new Date).getTime()
};
AudioPlayer.prototype.loadSound = function(a, c) {
    if (AudioMixer.buffer[a]) c && c(AudioMixer.buffer[a]);
    else {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
            AudioMixer.waContext.decodeAudioData(this.response, function(d) {
                AudioMixer.buffer[a] = d;
                c && c(d)
            })
        };
        d.send()
    }
};
AudioPlayer.prototype.readyToPlay = function(a) {
    a.currentTarget.alreadyLoaded || (a.currentTarget.alreadyLoaded = !0, a.currentTarget.play())
};
AudioPlayer.prototype.stop = function() {
    this.busy = !1;
    try {
        AudioMixer.isWebAudioSupport() ? this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0) : (this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay), this.audioWrapper.pause(), this.audioWrapper.currentTime = 0), this.audioWrapper = null
    } catch (a) {}
};
AudioPlayer.prototype.pause = function() {
    AudioMixer.isWebAudioSupport() ? this.audioWrapper && this.audioWrapper.disconnect() : this.audioWrapper.pause()
};
AudioPlayer.prototype.resume = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) try {
            this.audioWrapper.connect(AudioMixer.waContext.destination)
        } catch (a) {}
    } else this.audioWrapper.play()
};
AudioPlayer.prototype.controlPlay = function() {
    if (this.audioWrapper)
        if (this.audioWrapper.doLoop) AudioMixer.isWebAudioSupport() || (Utils.isFirefox() ? this.play(this.audioWrapper.fileName, !0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.play()));
        else {
            this.busy = !1;
            if ("function" == typeof this.onend) this.onend();
            this.waCheckInterval && clearInterval(this.waCheckInterval)
        }
};
AudioPlayer.prototype.getPosition = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (!this.startPlayTime) return 0;
        var a = this.getDuration();
        if (!a) return 0;
        var c = ((new Date).getTime() - this.startPlayTime) / 1E3;
        return c <= a ? c : this.audioWrapper.doLoop ? c - Math.floor(c / a) * a : a
    }
    return this.audioWrapper.currentTime ? this.audioWrapper.currentTime : 0
};
AudioPlayer.prototype.getDuration = function() {
    return AudioMixer.isWebAudioSupport() ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration : 0 : this.audioWrapper.duration ? this.audioWrapper.duration : 0
};

function AudioMixer(a, c) {
    this.singleChannelMode = !1;
    this.channels = [];
    this.init(a, c)
}
AudioMixer.prototype.init = function(a, c) {
    if (AudioMixer.isWebAudioSupport()) {
        AudioMixer.waContext = new window.AudioContext;
        var d = AudioMixer.waContext.createBuffer(1, 1, 22050),
            e = AudioMixer.waContext.createBufferSource();
        e.buffer = d;
        e.connect(AudioMixer.waContext.destination);
        e.noteOn ? e.noteOn(0) : e.start(0)
    }
    AudioMixer.isWebAudioSupport() || -1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode = !0, c = 1);
    this.path = a;
    this.channels = [];
    for (d = 0; d < c; d++) this.channels[d] = new AudioPlayer, this.channels[d].init(a);
    Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this));
    Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
};
AudioMixer.prototype.pauseOnHide = function() {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].pause()
};
AudioMixer.prototype.resumeOnShow = function() {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].resume()
};
AudioMixer.prototype.play = function(a, c, d, e) {
    var f = -1,
        f = "number" == typeof e ? e : this.getFreeChannel(d);
    0 <= f && f < this.channels.length && (this.channels[f].stop(), this.channels[f].play(a, c));
    return this.channels[f]
};
AudioMixer.prototype.stop = function(a) {
    0 <= a && a < this.channels.length && this.channels[a].stop()
};
AudioMixer.prototype.getFreeChannel = function(a) {
    for (var c = -1, d = [], e = -1, f = -1, g = 0, h = 0; h < this.channels.length; h++) this.channels[h].locked || (this.channels[h].busy ? (g = (new Date).getTime(), g -= this.channels[h].startPlayTime, g > f && (f = g, e = h)) : d.push(h));
    0 == d.length ? !a && 0 <= e && (c = e) : c = d[0];
    return c
};
AudioMixer.isWebAudioSupport = function() {
    return Boolean(window.AudioContext)
};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
AudioMixer.buffer = {};
AudioMixer.waContext = null;

function SimpleText(a, c, d, e) {
    this.font = a;
    this.y = this.x = 0;
    this.width = c;
    this.height = d;
    this.align = SimpleText.ALIGN_LEFT;
    this.charSpacing = this.rotation = 0;
    this.opacity = this.scale = 1;
    this.static = !1;
    this.charMap = "0123456789".split("");
    this.charWidth = [];
    this.sprites = [];
    this.text = "";
    this.parent = this.stage = window.stage;
    this.ALIGN_LEFT = SimpleText.ALIGN_LEFT;
    this.ALIGN_RIGHT = SimpleText.ALIGN_RIGHT;
    this.ALIGN_CENTER = SimpleText.ALIGN_CENTER;
    this.ignoreViewport = e
}
SimpleText.prototype.manageSprites = function(a) {
    var c, d = a.length,
        e = this.sprites.length;
    if (e < d)
        for (a = 0; a < d - e; a++) c = new window[SimpleText.spriteClass](this.font, this.width, this.height, this.charMap.length), this.sprites.push(c), this.parent.addChild(c);
    if (e > d) {
        for (a = 0; a < e - d; a++) this.parent.removeChild(this.sprites[a]);
        this.sprites.splice(0, e - d)
    }
};
SimpleText.prototype.getCharIx = function(a) {
    for (var c = 0; c < this.charMap.length; c++)
        if (this.charMap[c] == a) return c;
    return -1
};
SimpleText.prototype.getCharWidth = function(a) {
    a = this.getCharIx(a);
    return 0 <= a ? this.charWidth[a] ? this.charWidth[a] : this.width : this.width
};
SimpleText.prototype.getWidth = function() {
    for (var a = 0, c = 0; c < this.text.length; c++) a += this.getCharWidth(this.text.substr(c, 1)) + this.charSpacing;
    return a
};
SimpleText.prototype.write = function(a) {
    var c, d, e, f;
    this.text = a += "";
    this.manageSprites(a);
    c = this.x;
    this.align == SimpleText.ALIGN_CENTER && (c = this.x - this.getWidth() / 2 * this.scale + this.getCharWidth(this.text.substr(0, 1)) / 2 * this.scale);
    this.align == SimpleText.ALIGN_RIGHT && (c = this.x - this.getWidth() * this.scale);
    e = new Vector(c - this.x, 0);
    e.rotate(-this.rotation);
    c = e.x + this.x;
    d = e.y + this.y;
    e = new Vector(0, 0);
    for (var g = 0; g < a.length; g++)
        if (this.sprites[g].visible = !0, f = this.charMap.indexOf(a.substr(g, 1)), 0 > f) this.sprites[g].visible = !1;
        else {
            var h = this.getCharWidth(this.text.substr(g, 1));
            this.sprites[g].scaleX = this.sprites[g].scaleY = this.scale;
            this.sprites[g].gotoAndStop(f);
            f = e.clone();
            f.x *= this.scale;
            f.rotate(-this.rotation);
            this.sprites[g].x = f.x + ("," == this.text.substr(g, 1) ? c - h / 2 : c);
            this.sprites[g].y = f.y + d;
            this.sprites[g].rotation = this.rotation;
            this.sprites[g].static = this.static;
            this.sprites[g].opacity = this.opacity;
            this.sprites[g].ignoreViewport = this.ignoreViewport;
            this.sprites[g].gx = this.sprites[g].x;
            this.sprites[g].gy = this.sprites[g].y;
            this.sprites[g].gscaleX = this.sprites[g].scaleX;
            this.sprites[g].gscaleY = this.sprites[g].scaleY;
            this.sprites[g].grotation = this.sprites[g].rotation;
            this.sprites[g].gopacity = this.sprites[g].opacity;
            e.x += h + this.charSpacing
        }
};
SimpleText.prototype.refresh = function() {
    this.write(this.text)
};
SimpleText.prototype.addToGroup = function(a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x / 2, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.putToGroup = function(a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.refreshOnTween = function(a) {
    a.target.obj.refresh()
};
SimpleText.prototype.setPosition = function(a, c) {
    this.x = a;
    this.y = c;
    this.refresh()
};
SimpleText.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
};
SimpleText.prototype.addTween = function(a, c, d, e, f, g) {
    if (this.stage) {
        var h = this[a];
        if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
    }
};
SimpleText.prototype.moveTo = function(a, c, d, e, f, g) {
    d = ~~d;
    if (0 >= d) this.setPosition(a, c);
    else {
        if (a = this.addTween("x", a, d, e, f, g)) a.play(), a.addEventListener("change", this.refreshOnTween);
        (c = this.addTween("y", c, d, e, a ? null : f, a ? null : g)) && c.play();
        c && !a && c.addEventListener("change", this.refreshOnTween)
    }
    return this
};
SimpleText.prototype.moveBy = function(a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
SimpleText.prototype.fadeTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.opacity = a;
    else if (a = this.addTween("opacity", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.fadeBy = function(a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
SimpleText.prototype.rotateTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.rotation = a;
    else if (a = this.addTween("rotation", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.rotateBy = function(a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
SimpleText.prototype.scaleTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scale = a;
    else if (a = this.addTween("scale", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.spriteClass = "Sprite";
SimpleText.ALIGN_LEFT = 0;
SimpleText.ALIGN_RIGHT = 1;
SimpleText.ALIGN_CENTER = 2;

function Animation(a, c, d) {
    this.obj = a;
    this.sequence = c;
    this.currentAnimation = -1;
    this.currentTweens = [];
    this.ended = !1;
    this.endTimer = null;
    this.playNext = Utils.proxy(this.playNext, this);
    this.onfinish = d
}
Animation.prototype.play = function() {
    this.playNext()
};
Animation.prototype.playNext = function() {
    if (0 <= this.currentAnimation) {
        var a = this.sequence[this.currentAnimation];
        if (a.onfinish) a.onfinish({
            target: this
        });
        "undefined" != typeof a.loop && (this.currentAnimation = a.loop - 1)
    }
    this.currentAnimation++;
    if (this.currentAnimation >= this.sequence.length) {
        if (this.ended = !0, "function" == typeof this.onfinish) this.onfinish({
            target: this
        })
    } else {
        var a = this.sequence[this.currentAnimation],
            c, d, e, f, g, h, k;
        e = a.tweens;
        Utils.isArray(e) || (e = [e]);
        c = a.duration || 0;
        this.currentTweens = [];
        for (var l = null, p = 0; p < e.length; p++) f = e[p], d = f.duration, "undefined" == typeof d && (d = c), g = f.from, "undefined" == typeof g && (g = this.obj[f.prop]), h = f.to, "undefined" == typeof h && (h = this.obj[f.prop]), k = f.ease || a.ease || null, g = Animation.stage.createTween(this.obj, f.prop, g, h, d, k), "undefined" != typeof f.onchange && (g.onchange = f.onchange), "undefined" != typeof f.onfinish && (g.onfinish = f.onfinish), g.play(), this.currentTweens.push(g), d == c && (l = g);
        if (l) {
            var n = this,
                m = l.onfinish;
            l.onfinish = function(a) {
                "function" == typeof m && m(a);
                n.playNext()
            }
        } else this.endTimer = Animation.stage.setTimeout(this.playNext, c)
    }
};
Animation.prototype.executeTweensMethod = function(a) {
    for (var c = 0; c < this.currentTweens.length; c++) this.currentTweens[c][a]()
};
Animation.prototype.stop = function() {
    this.ended || (this.executeTweensMethod("stop"), this.endTimer && Animation.stage.clearTimeout(this.endTimer))
};
Animation.prototype.pause = function() {
    this.ended || (this.executeTweensMethod("pause"), this.endTimer && this.endTimer.pause())
};
Animation.prototype.resume = function() {
    this.ended || (this.executeTweensMethod("play"), this.endTimer && this.endTimer.resume())
};
Animation.stage = null;
Animation.play = function(a, c, d) {
    if (a && c) return a.stage && (Animation.stage = a.stage), Animation.stage || (Animation.stage = window.stage), a = new Animation(a, c, d), a.play(), a
};

function TilesSprite(a, c, d, e, f, g) {
    TilesSprite.superclass.constructor.call(this, a, c, d, f, g);
    this.framesCount = e;
    this.animated = 1 < e;
    this.currentFrameX = 0;
    this.addEventListener("changeframe", TilesSprite.changeStep);
    this.addEventListener("prerender", TilesSprite.sync)
}
Utils.extend(TilesSprite, Sprite);
TilesSprite.create = function(a, c) {
    if ("string" == typeof a) {
        c = c || window.library;
        if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
        a = c.getAsset(a)
    }
    return new TilesSprite(a.bitmap, a.width || 1, a.height || 1, a.framesCount || (a.frames || 1) * (a.layers || 1), a.frames || 1, a.layers || 1)
};
TilesSprite.prototype.gotoAndStop = function(a) {
    this.currentFrameX = a;
    this.stop()
};
TilesSprite.prototype.gotoAndPlay = function(a) {
    this.currentFrameX = a;
    this.play()
};
TilesSprite.changeStep = function(a) {
    a = a.target;
    a.animated && (a.currentFrameX += a.animDirection, 0 < a.animDirection && a.currentFrameX >= a.framesCount && (a.currentFrameX = 0), 0 > a.animDirection && 0 > this.currentFrame && (this.currentFrameX = this.totalFrames - 1))
};
TilesSprite.sync = function(a) {
    a = a.target;
    a.currentLayer = Math.floor(a.currentFrameX / a.totalFrames);
    a.currentFrame = a.currentFrameX - a.currentLayer * a.totalFrames
};
var ExternalAPI = {
        type: "default",
        init: function() {},
        exec: function() {
            var a = arguments[0];
            if ("exec" != a && "function" == typeof ExternalAPI[a]) return ExternalAPI[a].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
        },
        check: function() {
            return !1
        },
        openWidget: function() {},
        closeWidget: function() {},
        getMoreGamesURL: function(a, c) {
        	//Play68.goHome();
        },
        getPreloaderURL: function() {
            //return "http://playtomax.com/"
        },
        showCopyright: function() {},
        showAds: function() {
        	/*
            var a = window.location.href;
            if (0 == a.indexOf("http://playtomax.com") ||
                0 == a.indexOf("https://playtomax.com")) window.GoogleIMA ? GoogleIMA.show() : window.Leadbolt && Leadbolt.show()
        */
        }
    },
    TTLoader = {
        endCallback: null,
        loadedData: null,
        landscapeMode: !1,
        skipPlayButton: !1,
        create: function(a, c, d, e) {
            TTLoader.endCallback = a;
            TTLoader.landscapeMode = c;
            TTLoader.skipPlayButton = d;
            document.getElementById("progress_container").style.background = "#fff";
            document.getElementById("progress_container").style.zIndex = "1000";
            a = document.getElementById("progress");
            a.setAttribute("valign", "top");
            a.style.verticalAlign =
                "top";
            a.style.background = "#fff";
            c = document.createElement("div");
            d = document.createElement("a");
            d.setAttribute("id", "tt_load_logo_c");
            /*
            var f = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "http://playtomax.com/",
                g = "_blank";
            if (e || !f) f = "javascript:void(0)", g = "";
            d.setAttribute("href", f);
            d.setAttribute("target", g);
            */
            e = new Image;
            e.setAttribute("id", "tt_load_logo");
            e.setAttribute("border", "");
            e.src = TTLoader.logoSrc;
            e.style.cursor = "pointer";
            d.appendChild(e);
            c.appendChild(d);
            a.appendChild(c);
            c = document.createElement("div");
            c.setAttribute("id", "tt_load_progress_cont");
            c.setAttribute("align", "left");
            c.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
            e = document.createElement("div");
            e.setAttribute("id", "tt_load_progress");
            e.setAttribute("style", "width: 0px; background: #e44d26;");
            e.innerHTML = "&nbsp;";
            c.appendChild(e);
            a.appendChild(c);
            c = document.createElement("div");
            c.setAttribute("id", "tt_load_play");
            e = new Image;
            e.setAttribute("id", "tt_load_button");
            e.src = TTLoader.buttonDisabledSrc;
            e.style.visibility =
                TTLoader.skipPlayButton ? "hidden" : "visible";
            c.appendChild(e);
            a.appendChild(c);
            Utils.addEventListener("fitlayout", TTLoader.setSizes);
            TTLoader.setSizes()
        },
        setSizes: function() {
            var a = Utils.getWindowRect();
            document.getElementById("progress_container").style.width = a.width + "px";
            document.getElementById("progress_container").style.height = a.height + "px";
            a = Utils.globalScale * Utils.globalPixelScale;
            TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * a) + "px");
            document.getElementById("tt_load_progress_cont").style.width =
                Math.floor(200 * a) + "px";
            document.getElementById("tt_load_progress").style.height = Math.floor(12 * a) + "px";
            document.getElementById("tt_load_progress").style.width = a * TTLoader.progressVal * 2 + "px";
            document.getElementById("tt_load_logo").style.marginTop = Math.floor(80 * a) + "px";
            document.getElementById("tt_load_logo").setAttribute("width", Math.floor(300 * a) + "px");
            document.getElementById("tt_load_logo").setAttribute("height", Math.floor(65 * a) + "px");
            document.getElementById("tt_load_button").setAttribute("width", Math.floor(65 *
                a) + "px");
            document.getElementById("tt_load_button").setAttribute("height", Math.floor(29 * a) + "px");
            document.getElementById("tt_load_button").style.marginTop = Math.floor(30 * a) + "px"
        },
        progressVal: 0,
        showLoadProgress: function(a) {
            0 > a && (a = 0);
            100 < a && (a = 100);
            TTLoader.progressVal = a;
            TTLoader.setSizes()
        },
        loadComplete: function(a) {
            TTLoader.showLoadProgress(100);
            TTLoader.loadedData = a;
            a = document.getElementById("tt_load_button");
            Utils.touchScreen ? a.addEventListener(Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart",
                TTLoader.close, !1) : a.onclick = TTLoader.close;
            a.style.cursor = "pointer";
            a.src = TTLoader.buttonSrc;
            a = document.getElementById("tt_load_progress");
            a.style.background = "transparent";
            a = document.getElementById("tt_load_progress_cont");
            a.style.border = "2px solid transparent";
            a.style.background = "transparent";
            document.getElementById("tt_load_button").style.display = "block";
            TTLoader.skipPlayButton && TTLoader.close()
        },
        close: function(a) {
            clearTimeout(TTLoader.animateTimeout);
            TTLoader.endCallback(TTLoader.loadedData)
        },
        logoSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGMEE3ODFBRDlFQTExRTNCQzlFRkU2NDEyNEFGQjIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGMEE3ODFCRDlFQTExRTNCQzlFRkU2NDEyNEFGQjIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkYwQTc4MThEOUVBMTFFM0JDOUVGRTY0MTI0QUZCMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkYwQTc4MTlEOUVBMTFFM0JDOUVGRTY0MTI0QUZCMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
        buttonDisabledSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOTNDRkRBRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGOTNDRkRCRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEY5M0NGRDhEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEY5M0NGRDlEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
        buttonSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MkY2NjRBRDlFQjExRTNBNzU1REY3NjZERUJEODBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MkY2NjRCRDlFQjExRTNBNzU1REY3NjZERUJEODBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQyRjY2NDhEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyRjY2NDlEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
    },
    loadData = {
        images: [
            ["chip2", "chips/chip2.png"],
            ["chip4", "chips/chip4.png"],
            ["chip8", "chips/chip8.png"],
            ["chip16", "chips/chip16.png"],
            ["chip32", "chips/chip32.png"],
            ["chip64", "chips/chip64.png"],
            ["chip128", "chips/chip128.png"],
            ["chip256", "chips/chip256.png"],
            ["chip512", "chips/chip512.png"],
            ["chip1024", "chips/chip1024.png"],
            ["chip2048", "chips/chip2048.png"],
            ["chip4096", "chips/chip4096.png"],
            ["playfield", "ingame/playfield.png"],
            ["btn_menu_ingame", "ingame/btn_menu_ingame.png"],
            ["btn_restart_ingame", "ingame/btn_restart_ingame.png"],
            ["best", "ingame/best.png"],
            ["board", "ingame/board.png"],
            ["score", "ingame/score.png"],
            ["score_font", "ingame/score_font.png"],
            ["game_over", "game_over/game_over.png"],
            ["btn_try_again", "game_over/btn_try_again.png"],
            ["btn_more_games", "menu/btn_more_games.png"],
            ["btn_play", "menu/btn_play.png"],
            ["btn_tutorial", "menu/btn_tutorial.png"],
            ["title", "menu/title.png"],
            ["help1", "tutorial/help1.png"],
            ["help2", "tutorial/help2.png"],
            ["help3", "tutorial/help3.png"],
            ["tutorial_dot", "tutorial/tutorial_dot.png"],
            ["tutorial_play",
                "tutorial/tutorial_play.png"
            ]
        ],
        sounds: []
    };

function addSprite(a, c, d, e, f, g, h) {
    a = new Sprite(bitmaps[a], c, d, h);
    a.x = e;
    a.y = f;
    a.setStatic(g);
    stage.addChild(a);
    return a
}
var backgroundImage = null;

function setCSSBack(a, c) {
    var d = document.getElementById(Utils.DOMScreenBackgroundContainerId);
    a && (backgroundImage = a, d.style.backgroundImage = "url(" + a.src + ")");
    c && (d.style.backgroundColor = c);
    d.style.backgroundPosition = "center center";
    d.style.backgroundRepeat = "no-repeat";
    resizeCSSBack()
}

function resizeCSSBack() {
    if (backgroundImage) {
        var a = Utils.getWindowRect(),
            c = a.width,
            a = a.height;
        document.getElementById(Utils.DOMScreenBackgroundContainerId).style.backgroundSize = c + "px " + a + "px"
    }
}

function getGameDataId() {
    return "playtomax_" + GAME_ID + "_data"
}

function loadGameData() {
    var a = Utils.getCookie(getGameDataId());
    return a ? JSON.parse(a) : {}
}

function saveGameData(a) {
    Utils.setCookie(getGameDataId(), JSON.stringify(a))
}

function showMoreGames() {
	//Play68.goHome();
}
var GAME_ID = "grand_dot_2048",
    LEADERBOARD_ID = "grand_dot_2048_leaderboard",
    stage = null,
    fps = 48,
    bitmaps = {},
    GET = {},
    LANDSCAPE_MODE = !1,
    STATE_LOAD = 0,
    STATE_MENU = 1,
    STATE_GAME = 2,
    STATE_TUTORIAl = 3,
    STATE_LOSE = 4,
    gameState = STATE_LOAD,
    gameData = {},
    currentLevel = 0,
    lastLevel = -1,
    startPos = {
        x: 58.5,
        y: 148
    },
    CELL_SIZE = 67.5,
    CHIP_SIZE = 59,
    EMPTY = 0,
    mixer, isMusicOn, isSoundOn, isWebAudioSupport = AudioMixer.isWebAudioSupport(),
    console = {
        log: function() {}
    };
window.onload = function() {
    GET = Utils.parseGet();
    Utils.addMobileListeners(LANDSCAPE_MODE, !0);
    Utils.mobileCorrectPixelRatio();
    Utils.addFitLayoutListeners();
    Utils.switchToTimeMode(1E3 / fps);
    ExternalAPI.exec("init");
    setTimeout(startLoad, 600)
};

function startLoad() {
    var a = Utils.getMobileScreenResolution(LANDSCAPE_MODE);//

    if (GET.debug || Utils.mobileCheckSlowDevice() || Utils.isFirefox()) a = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE);

    Utils.globalScale = a.scale;//

    Utils.createLayout(document.getElementById(Utils.DOMMainContainerId), a);
    Utils.addEventListener("fitlayout", function() {
        stage && (stage.drawScene(stage.canvas), stage.drawScene(stage.backgroundCanvas, !0));
        resizeCSSBack()
    });
    Utils.addEventListener("lockscreen", function() {
        stage && stage.started &&
            stage.stop()
    });
    Utils.addEventListener("unlockscreen", function() {
        stage && !stage.started && stage.start()
    });
    Utils.mobileHideAddressBar();
    GET.debug || Utils.checkOrientation(LANDSCAPE_MODE);
    for (var a = Utils.imagesRoot + "/" + Utils.globalScale + "/", c = new ImagesPreloader, d = [], e = 0; e < loadData.images.length; e++) {
        var f = loadData.images[e];
        d.push({
            name: f[0],
            src: a + f[1]//
        })
    }
    TTLoader.create(loadSoundsEnd);
    c.maxProgressVal = 50;
    c.load(d, loadImagesEnd, TTLoader.showLoadProgress)
}

function loadImagesEnd(a) {
    bitmaps = a;
    a = new SoundsPreloader;
    a.maxProgressVal = 50;
    a.minProgressVal = 50;
    a.load([], TTLoader.loadComplete, TTLoader.showLoadProgress)
}

function loadSoundsEnd() {
    Utils.showMainLayoutContent();
    gameData = loadGameData();
    gameData.bestScore || (gameData.bestScore = 0, saveGameData(gameData));
    "off" === gameData.sound ? isMusicOn = isSoundOn = !1 : isSoundOn = isMusicOn = !0;
    isWebAudioSupport || (isSoundOn = !1);
    GET.debug || ExternalAPI.exec("showCompanyLogo", showMenu) || showMenu()
}

function showMenu() {
    gameState = STATE_MENU;
    createScene();
    return !1
}

function createStage() {
    stage && (stage.destroy(), stage.stop());
    stage = new Stage("screen", 320, 480, !1);
    stage.setBackgroundCanvas("screen_background");
    stage.delay = 1E3 / fps;
    stage.ceilSizes = !0;
    stage.showFPS = !1
}

function createScene() {
    createStage();
    switch (gameState) {
        case STATE_MENU:
            showMainMenu();
            break;
        case STATE_TUTORIAl:
            showTutorial();
            break;
        case STATE_LOSE:
            showLoseScreen()
    }
    stage.start();
    stage.refreshBackground()
}

function showMainMenu() {
    setCSSBack(!1, "#dcddde");
    addSprite("title", 264, 204, 160, 135, !0);
    addSprite("btn_play", 173, 43, 160, 280, !0).onclick = startUltimateMode;
    addSprite("btn_tutorial", 173, 43, 160, 335, !0).onclick = tutorial;
    ExternalAPI.exec("getMoreGamesButtonDisable") || (addSprite("btn_more_games", 173, 44, 160, 390, !0).onclick = showMoreGames);
    showBrandingLogo(stage, 160, 445);
    ExternalAPI.exec("showCopyright")
}

function tutorial() {
    gameState = STATE_TUTORIAl;
    createScene()
}

function showTutorial() {
    function a(a) {
        a ? c++ : c--;
        if (3 < c || 1 > c) {
            var d = stage.createTween(e, "x", e.x, 320 * (2 - c) + (a ? 250 : 70), 200);
            d.play();
            d.onfinish = function() {
                a ? c-- : c++;
                stage.createTween(e, "x", e.x, 160 + 320 * (2 - c), 200).play()
            }
        } else
            for (d = stage.createTween(e, "x", e.x, 160 + 320 * (2 - c), 400), d.play(), d = 0; d < h.length; d++) d === c - 1 ? h[d].gotoAndStop(0) : h[d].gotoAndStop(1)
    }
    var c = 1,
        d = addSprite(null, 320, 480, 160, 240, !0);
    d.onmousedown = function(a) {
        a.target.down = {
            x: a.x,
            y: a.y
        }
    };
    d.onmouseup = function(c) {
        var d = c.target.down,
            e = d.x -
            c.x;
        !d || 5 > Math.abs(e) || (a(0 < e ? !0 : !1), c.target.down = null)
    };
    addSprite("help1", 250, 382, 160, 204).onenterframe = function(a) {
        a.target.x = e.x - 320
    };
    var e = addSprite("help2", 243, 360, 480, 193),
        d = addSprite("help3", 243, 289, 800, 158);
    d.onenterframe = function(a) {
        a.target.x = e.x + 320
    };
    var f = new Sprite(bitmaps.tutorial_play, 174, 43);
    f.x = 0;
    f.y = 200;
    f.onclick = startUltimateMode;
    d.addChild(f);
    d = addSprite("tutorial_dot", 6, 6, 150, 450, !1, 2);
    d.gotoAndStop(0);
    f = addSprite("tutorial_dot", 6, 6, 160, 450, !1, 2);
    f.gotoAndStop(1);
    var g = addSprite("tutorial_dot",
        6, 6, 170, 450, !1, 2);
    g.gotoAndStop(1);
    var h = [d, f, g]
}

function restart() {
    startLevel(currentLevel);
    return !1
}

function startUltimateMode() {
    startLevel(-1)
}

function startLevel(a) {
    var c;
    isAnimated = !1;
    createStage();
    addSprite("playfield", 283, 284, 160, 250, !0);
    addSprite("btn_menu_ingame", 137, 43, 85, 430, !0).onmousedown = showMenu;
    addSprite("btn_restart_ingame", 137, 43, 235, 430, !0).onmousedown = restart;
    addSprite("board", 69, 40, 50, 70, !0);
    addSprite("board", 69, 40, 130, 70, !0);
    var d = addSprite("score", 37, 9, 50, 60, !0),
        e = addSprite("best", 27, 9, 130, 60, !0);
    addKeyboardControl();
    var f = addSprite(null, 320, 480, 160, 240, !0);
    f.onmousedown = swipeDown;
    f.onmousemove = swipeUp;
    gameState = STATE_GAME;
    currentLevel = a; - 1 === currentLevel && (c = [{
        val: 2,
        amount: 2
    }], gameData = loadGameData(), tBest = new SimpleText(bitmaps.score_font, 12, 16), tBest.align = tBest.ALIGN_CENTER, tBest.x = e.x, tBest.y = e.y + 17, tBest.write(gameData.bestScore));
    a = new SimpleText(bitmaps.score_font, 12, 16);
    a.align = a.ALIGN_CENTER;
    a.y = d.y + 17;
    a.x = d.x;
    a.write(0);
    gameScore = {
        val: 0,
        text: a
    };
    stage.start();
    fillGameField(c);
    stage.refreshBackground()
}

function fillGameField(a) {
    function c(a) {
        var d = Math.floor(Math.random() * gameField.length),
            e = Math.floor(Math.random() * gameField.length);
        gameField[d][e] === EMPTY ? gameField[d][e] = a : c(a)
    }
    gameField = [];
    for (var d = 0; 4 > d; d++) {
        for (var e = [], f = 0; 4 > f; f++) e.push(0);
        gameField.push(e)
    }
    for (f = 0; f < a.length; f++)
        for (d = 0; d < a[f].amount; d++) c(a[f].val);
    for (d = 0; d < gameField.length; d++)
        for (f = 0; f < gameField.length; f++) a = gameField[d][f], 0 !== a && (e = addSprite("chip" + a, CHIP_SIZE, CHIP_SIZE, startPos.x + f * CELL_SIZE, startPos.y + d * CELL_SIZE),
            e.val = a, e.pos = {
                i: f,
                j: d
            })
}

function swipeDown(a) {
    a.target.down = {
        x: a.x,
        y: a.y
    }
}

function swipeUp(a) {
    if (!isAnimated && gameState === STATE_GAME) {
        var c = a.target.down;
        if (c) {
            var d = c.x - a.x,
                c = c.y - a.y;
            if (!(10 > Math.max(Math.abs(d), Math.abs(c)))) {
                var e = new Moving,
                    f = "",
                    f = Math.abs(d) > Math.abs(c) ? 0 < d ? "left" : "right" : 0 < c ? "up" : "down";
                e[f]();
                afterMove(e);
                a.target.down = null
            }
        }
    }
}

function addKeyboardControl() {
    document.addEventListener("keydown", function(a) {
        if (!isAnimated && gameState === STATE_GAME) {
            var c = new Moving;
            switch (a.keyCode) {
                case 37:
                    c.left();
                    break;
                case 39:
                    c.right();
                    break;
                case 38:
                    c.up();
                    break;
                case 40:
                    c.down()
            }
            afterMove(c)
        }
    })
}

function afterMove(a) {
    a.addNew();
    changeScore(gameScore, a.sum);
    //updateShare(gameScore.val);
    // Play68.setRankingScoreDesc(gameScore.val,Play68.rankingShowType.RANKING_SHOW_NO);
    (-1 === currentLevel || !a.isMoving) && gameScore.val > gameData.bestScore && (gameData.bestScore = gameScore.val, saveGameData(gameData), tBest.write(gameData.bestScore))
}

function changeScore(a, c, d) {
    if (0 !== c) {
        c /= 2;
        a.val += c;
        a.text.write(a.val);
        var e = new SimpleText(bitmaps.score_font, 12, 16);
        e.align = e.ALIGN_CENTER;
        e.y = 70;
        e.x = 47;
        e.charMap.push("+");
        var f = "+" + c;
        e.write(f);
        Animation.play(e, [{
            tweens: [{
                prop: "y",
                to: 5,
                onchange: function() {
                    e.write(f)
                }
            }, {
                prop: "opacity",
                to: 0
            }],
            duration: 666,
            onfinish: function() {
                e.write("")
            }
        }])
    }
}

function Moving() {
    var a = this;
    this.duration = Math.ceil(1E3 / 6);
    this.isMoving = !1;
    this.sum = 0;
    this.isCallback = !1;
    this.evolutionSprite = null;
    this.moveTo = function(c, d, e) {
        var f = EMPTY,
            g = 0,
            h = c.pos.j,
            k = c.pos.i;
        for (c.increased = !1; f === EMPTY;) h += d, k += e, void 0 === gameField[h] || void 0 === gameField[h][k] ? f = void 0 : (gameField[h][k] === EMPTY && g++, gameField[h][k] !== c.val || a.findSprite(h, k).increased || (g++, a.increase(c, h, k)), f = gameField[h][k]);
        0 < g && a.changePos(c, k, h, e, d)
    };
    this.changePos = function(c, d, e, f, g) {
        isAnimated = a.isMoving = !0;
        c.needDestroy || (e -= g, d -= f, gameField[e][d] = c.val);
        gameField[c.pos.j][c.pos.i] = EMPTY;
        c.needDestroy || (c.pos = {
            i: d,
            j: e
        });
        c.moveTo(startPos.x + d * CELL_SIZE, startPos.y + e * CELL_SIZE, a.duration, Easing.linear.easeIn, function() {
            c.needDestroy && (c.destroy = !0);
            isAnimated = !1;
            a.isCallback || (a.isCallback = !0, a.callback())
        })
    };
    this.printArray = function() {
        console.log("------------------");
        for (var a = 0; a < gameField.length; a++) console.log(gameField[a]);
        console.log("------------------")
    };
    this.increase = function(c, d, e) {
        var f =
            a.findSprite(d, e);
        f.val *= 2;
        f.setZIndex(c.zIndex + 1);
        f.increased = !0;
        gameField[d][e] = f.val;
        a.evolutionSprite = f;
        a.sum += f.val;
        c.setZIndex(1);
        c.needDestroy = !0;
        var g = a.duration;
        stage.setTimeout(function() {
            f.bitmap = bitmaps["chip" + f.val];
            Animation.play(f, [{
                tweens: [{
                    prop: "scaleX",
                    to: 1.3
                }, {
                    prop: "scaleY",
                    to: 1.3
                }],
                duration: Math.floor(g / 3)
            }, {
                tweens: [{
                    prop: "scaleX",
                    to: 1
                }, {
                    prop: "scaleY",
                    to: 1
                }],
                duration: Math.floor(g / 3)
            }])
        }, Math.floor(g))
    };
    this.checkFail = function() {
        if (gameState === STATE_GAME)
            if (-1 !== currentLevel && 0 >=
                moves.val) lose();
            else {
                for (var a = !0, d = 0; d < gameField.length; d++)
                    for (var e = 0; e < gameField[d].length; e++) {
                        if (gameField[d][e] === EMPTY) return;
                        gameField[d][e] === gameField[d][e + 1] && (a = !1);
                        gameField[d + 1] && gameField[d][e] === gameField[d + 1][e] && (a = !1)
                    }
                a && stage.setTimeout(lose, 1E3)
            }
    };
    this.callback = function() {
        a.checkFail()
    };
    this.left = function() {
        for (var c = 0; c < gameField.length; c++)
            for (var d = 0; d < gameField[c].length; d++)
                if (a.moveAllowed(gameField[c][d])) {
                    var e = a.findSprite(c, d);
                    a.moveTo(e, 0, -1)
                }
    };
    this.right = function() {
        for (var c =
            0; c < gameField.length; c++)
            for (var d = gameField[c].length - 1; 0 <= d; d--)
                if (a.moveAllowed(gameField[c][d])) {
                    var e = a.findSprite(c, d);
                    a.moveTo(e, 0, 1)
                }
    };
    this.up = function() {
        for (var c = 0; c < gameField.length; c++)
            for (var d = 0; d < gameField[c].length; d++)
                if (a.moveAllowed(gameField[c][d])) {
                    var e = a.findSprite(c, d);
                    a.moveTo(e, -1, 0)
                }
    };
    this.down = function() {
        for (var c = gameField.length - 1; 0 <= c; c--)
            for (var d = 0; d < gameField[c].length; d++)
                if (a.moveAllowed(gameField[c][d])) {
                    var e = a.findSprite(c, d);
                    a.moveTo(e, 1, 0)
                }
    };
    this.addNew = function() {
        if (a.isMoving) {
            for (var c = [], d = 0; d < gameField.length; d++)
                for (var e = 0; e < gameField[d].length; e++) gameField[d][e] === EMPTY && c.push([d, e]);
            var d = Math.floor(Math.random() * c.length),
                f = .1 < Math.random() ? 2 : 4,
                g = c[d];
            gameField[g[0]][g[1]] = f;
            stage.setTimeout(function() {
                if (gameState === STATE_GAME) {
                    var c = addSprite("chip" + f, CHIP_SIZE, CHIP_SIZE, startPos.x + g[1] * CELL_SIZE, startPos.y + g[0] * CELL_SIZE);
                    c.setPropScale(0);
                    c.val = f;
                    c.pos = {
                        i: g[1],
                        j: g[0]
                    };
                    c.scaleTo(1, Math.floor(a.duration / 2), Easing.linear.easeIn)
                }
            }, Math.floor(a.duration / 2))
        }
    };
    this.findSprite =
        function(a, d) {
            for (var e = 0; e < stage.objects.length; e++) {
                var f = stage.objects[e];
                if (f.pos && f.pos.i === d && f.pos.j === a && !f.needDestroy) return f
            }
        };
    this.moveAllowed = function(a) {
        return a != EMPTY
    }
}

function lose() {
    gameState = STATE_LOSE;
    stage.setTimeout(createScene, 1E3)
}

function showLoseScreen() {
    gameScore.val > gameData.bestScore && ExternalAPI.exec("submitScore", gameScore.val, LEADERBOARD_ID);
    ExternalAPI.exec("showAds");
    console.log("gameScore = ", gameScore);
    addSprite("game_over", 180, 129, 160, 160, !0);
    addSprite("btn_try_again", 173, 43, 160, 300, !0).onclick = restart
}

function showBrandingLogo(a, c, d, e) {
    ExternalAPI.exec("getBrandingLogo", function(f) {
        f = new Sprite(f, f.width / Utils.globalScale, f.height / Utils.globalScale);
        a.addChild(f);
        f && (f.x = c, f.y = d, f.onclick = function() {
            ExternalAPI.exec("handleBrandingClick")
        }, f.setZIndex(e ? e : 0))
    })
};