var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
_p = window;
_p = Object.prototype;
delete window._p;
cc.newElement = function (a) {
    return document.createElement(a)
};
cc._addEventListener = function (a, b, c, d) {
    a.addEventListener(b, c, d)
};
cc._isNodeJs = "undefined" !== typeof require && require("fs");
cc.each = function (a, b, c) {
    if (a)if (a instanceof Array)for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d); d++); else for (d in a)if (!1 === b.call(c, a[d], d))break
};
cc.isCrossOrigin = function (a) {
    if (!a)return cc.log("invalid URL"), !1;
    var b = a.indexOf("://");
    if (-1 == b)return!1;
    b = a.indexOf("/", b + 3);
    return(-1 == b ? a : a.substring(0, b)) != location.origin
};
cc.async = {_counterFunc: function (a) {
    var b = this.counter;
    if (!b.err) {
        var c = b.length, d = b.results, e = b.option, f = e.cb, g = e.cbTarget, h = e.trigger, e = e.triggerTarget;
        if (a) {
            if (b.err = a, f)return f.call(g, a)
        } else {
            var k = Array.apply(null, arguments).slice(1), l = k.length;
            0 == l ? k = null : 1 == l && (k = k[0]);
            d[this.index] = k;
            b.count--;
            h && h.call(e, k, c - b.count, c);
            0 == b.count && f && f.apply(g, [null, d])
        }
    }
}, _emptyFunc: function () {
}, parallel: function (a, b, c) {
    var d = cc.async;
    if (void 0 !== c)"function" == typeof b && (b = {trigger: b}), b.cb = c || b.cb; else if (void 0 !==
        b)"function" == typeof b && (b = {cb: b}); else if (void 0 !== a)b = {}; else throw"arguments error!";
    var e = (c = a instanceof Array) ? a.length : Object.keys(a).length;
    if (0 == e)b.cb && b.cb.call(b.cbTarget, null); else {
        var f = {length: e, count: e, option: b, results: c ? [] : {}};
        cc.each(a, function (a, c) {
            if (f.err)return!1;
            var e = !b.cb && !b.trigger ? d._emptyFunc : d._counterFunc.bind({counter: f, index: c});
            a(e, c)
        })
    }
}, map: function (a, b, c) {
    var d = this, e = arguments.length;
    "function" == typeof b && (b = {iterator: b});
    if (3 === e)b.cb = c || b.cb; else if (2 > e)throw"arguments error!";
    "function" == typeof b && (b = {iterator: b});
    if (void 0 !== c)b.cb = c || b.cb; else if (void 0 === a)throw"arguments error!";
    var f = (e = a instanceof Array) ? a.length : Object.keys(a).length;
    if (0 === f)b.cb && b.cb.call(b.cbTarget, null); else {
        var g = {length: f, count: f, option: b, results: e ? [] : {}};
        cc.each(a, function (a, c) {
            if (g.err)return!1;
            var e = !b.cb ? d._emptyFunc : d._counterFunc.bind({counter: g, index: c});
            b.iterator.call(b.iteratorTarget, a, c, e)
        })
    }
}};
cc.path = {join: function () {
    for (var a = arguments.length, b = "", c = 0; c < a; c++)b = (b + ("" == b ? "" : "/") + arguments[c]).replace(/(\/|\\\\)$/, "");
    return b
}, extname: function (a) {
    return(a = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(a)) ? a[1] : null
}, mainFileName: function (a) {
    if (a) {
        var b = a.lastIndexOf(".");
        if (-1 !== b)return a.substring(0, b)
    }
    return a
}, basename: function (a, b) {
    var c = a.indexOf("?");
    0 < c && (a = a.substring(0, c));
    c = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(a.replace(/(\/|\\\\)$/, ""));
    if (!c)return null;
    c = c[2];
    return b && a.substring(a.length -
        b.length).toLowerCase() == b.toLowerCase() ? c.substring(0, c.length - b.length) : c
}, dirname: function (a) {
    return a.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
}, changeExtname: function (a, b) {
    b = b || "";
    var c = a.indexOf("?"), d = "";
    0 < c && (d = a.substring(c), a = a.substring(0, c));
    c = a.lastIndexOf(".");
    return 0 > c ? a + b + d : a.substring(0, c) + b + d
}, changeBasename: function (a, b, c) {
    if (0 == b.indexOf("."))return this.changeExtname(a, b);
    var d = a.indexOf("?"), e = "";
    c = c ? this.extname(a) : "";
    0 < d && (e = a.substring(d), a = a.substring(0, d));
    d = a.lastIndexOf("/");
    return a.substring(0, 0 >= d ? 0 : d + 1) + b + c + e
}};
cc.loader = {_jsCache: {}, _register: {}, _langPathCache: {}, _aliases: {}, resPath: "", audioPath: "", cache: {}, getXMLHttpRequest: function () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
}, _getArgs4Js: function (a) {
    var b = a[0], c = a[1], d = a[2], e = ["", null, null];
    if (1 === a.length)e[1] = b instanceof Array ? b : [b]; else if (2 === a.length)"function" == typeof c ? (e[1] = b instanceof Array ? b : [b], e[2] = c) : (e[0] = b || "", e[1] = c instanceof Array ? c : [c]); else if (3 === a.length)e[0] = b || "", e[1] = c instanceof
        Array ? c : [c], e[2] = d; else throw"arguments error to load js!";
    return e
}, loadJs: function (a, b, c) {
    var d = this, e = d._jsCache, f = d._getArgs4Js(arguments);
    -1 < navigator.userAgent.indexOf("Trident/5") ? d._loadJs4Dependency(f[0], f[1], 0, f[2]) : cc.async.map(f[1], function (a, b, c) {
        a = cc.path.join(f[0], a);
        if (e[a])return c(null);
        d._createScript(a, !1, c)
    }, f[2])
}, loadJsWithImg: function (a, b, c) {
    var d = this._loadJsImg(), e = this._getArgs4Js(arguments);
    this.loadJs(e[0], e[1], function (a) {
        if (a)throw a;
        d.parentNode.removeChild(d);
        if (e[2])e[2]()
    })
},
    _createScript: function (a, b, c) {
        var d = document, e = cc.newElement("script");
        e.async = b;
        e.src = a;
        this._jsCache[a] = !0;
        cc._addEventListener(e, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            c()
        }, !1);
        cc._addEventListener(e, "error", function () {
            c("Load " + a + " failed!")
        }, !1);
        d.body.appendChild(e)
    }, _loadJs4Dependency: function (a, b, c, d) {
        if (c >= b.length)d && d(); else {
            var e = this;
            e._createScript(cc.path.join(a, b[c]), !1, function (f) {
                if (f)return d(f);
                e._loadJs4Dependency(a, b, c + 1, d)
            })
        }
    }, _loadJsImg: function () {
        var a =
            document, b = a.getElementById("cocos2d_loadJsImg");
        if (!b) {
            b = cc.newElement("img");
            cc._loadingImage && (b.src = cc._loadingImage);
            a = a.getElementById(cc.game.config.id);
            a.style.backgroundColor = "black";
            a.parentNode.appendChild(b);
            var c = getComputedStyle ? getComputedStyle(a) : a.currentStyle;
            c || (c = {width: a.width, height: a.height});
            b.style.left = a.offsetLeft + (parseFloat(c.width) - b.width) / 2 + "px";
            b.style.top = a.offsetTop + (parseFloat(c.height) - b.height) / 2 + "px";
            b.style.position = "absolute"
        }
        return b
    }, loadTxt: function (a, b) {
        if (cc._isNodeJs)require("fs").readFile(a,
            function (a, c) {
                a ? b(a) : b(null, c.toString())
            }); else {
            var c = this.getXMLHttpRequest(), d = "load " + a + " failed!";
            c.open("GET", a, !0);
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (c.setRequestHeader("Accept-Charset", "utf-8"), c.onreadystatechange = function () {
                4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
            }) : (c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dutf-8"), c.onload = function () {
                4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
            });
            c.send(null)
        }
    }, _loadTxtSync: function (a) {
        if (cc._isNodeJs)return require("fs").readFileSync(a).toString();
        var b = this.getXMLHttpRequest();
        b.open("GET", a, !1);
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? b.setRequestHeader("Accept-Charset", "utf-8") : b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dutf-8");
        b.send(null);
        return 4 == !b.readyState || 200 != b.status ? null : b.responseText
    }, loadJson: function (a, b) {
        this.loadTxt(a, function (c, d) {
            try {
                c ? b(c) : b(null, JSON.parse(d))
            } catch (e) {
                throw"load json [" + a + "] failed : " + e;
            }
        })
    }, _checkIsImageURL: function (a) {
        return null != /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(a)
    },
    loadImg: function (a, b, c) {
        var d = !0;
        void 0 !== c ? d = null == b.isCrossOrigin ? d : b.isCrossOrigin : void 0 !== b && (c = b);
        var e = new Image;
        d && "file://" != location.origin && (e.crossOrigin = "Anonymous");
        cc._addEventListener(e, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            this.removeEventListener("error", arguments.callee, !1);
            c && c(null, e)
        });
        cc._addEventListener(e, "error", function () {
            this.removeEventListener("error", arguments.callee, !1);
            c && c("load image failed")
        });
        e.src = a;
        return e
    }, _loadResIterator: function (a, b, c) {
        var d = this, e = null, f = a.type;
        f ? (f = "." + f.toLowerCase(), e = a.src ? a.src : a.name + f) : (e = a, f = cc.path.extname(e));
        if (b = d.cache[e])return c(null, b);
        b = d._register[f.toLowerCase()];
        if (!b)return cc.error("loader for [" + f + "] not exists!"), c();
        f = b.getBasePath ? b.getBasePath() : d.resPath;
        f = d.getUrl(f, e);
        b.load(f, e, a, function (a, b) {
            a ? (cc.log(a), d.cache[e] = null, delete d.cache[e], c()) : (d.cache[e] = b, c(null, b))
        })
    }, getUrl: function (a, b) {
        var c = this._langPathCache, d = cc.path;
        if (void 0 !== a && void 0 === b) {
            b = a;
            var e = d.extname(b),
                e = e ? e.toLowerCase() : "";
            a = (e = this._register[e]) ? e.getBasePath ? e.getBasePath() : this.resPath : this.resPath
        }
        b = cc.path.join(a || "", b);
        if (b.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
            if (c[b])return c[b];
            d = d.extname(b) || "";
            b = c[b] = b.substring(0, b.length - d.length) + "_" + cc.sys.language + d
        }
        return b
    }, load: function (a, b, c) {
        if (void 0 !== c)"function" == typeof b && (b = {trigger: b}); else if (void 0 !== b)"function" == typeof b && (c = b, b = {}); else if (void 0 !== a)b = {}; else throw"arguments error!";
        b.cb = function (a, b) {
            a && cc.log(a);
            c && c(b)
        };
        a instanceof
        Array || (a = [a]);
        b.iterator = this._loadResIterator;
        b.iteratorTarget = this;
        cc.async.map(a, b)
    }, _handleAliases: function (a, b) {
        var c = this._aliases, d = [], e;
        for (e in a) {
            var f = a[e];
            c[e] = f;
            d.push(f)
        }
        this.load(d, b)
    }, loadAliases: function (a, b) {
        var c = this, d = c.getRes(a);
        d ? c._handleAliases(d.filenames, b) : c.load(a, function (a) {
            c._handleAliases(a[0].filenames, b)
        })
    }, register: function (a, b) {
        if (a && b) {
            if ("string" == typeof a)return this._register[a.trim().toLowerCase()] = b;
            for (var c = 0, d = a.length; c < d; c++)this._register["." + a[c].trim().toLowerCase()] =
                b
        }
    }, getRes: function (a) {
        return this.cache[a] || this.cache[this._aliases[a]]
    }, release: function (a) {
        var b = this.cache, c = this._aliases;
        delete b[a];
        delete b[c[a]];
        delete c[a]
    }, releaseAll: function () {
        var a = this.cache, b = this._aliases, c;
        for (c in a)delete a[c];
        for (c in b)delete b[c]
    }};
(function () {
    var a = window, b, c;
    "undefined" !== typeof document.hidden ? (b = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (b = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (b = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (b = "webkitHidden", c = "webkitvisibilitychange");
    var d = function () {
        cc.eventManager && cc.game._eventHide && cc.eventManager.dispatchEvent(cc.game._eventHide)
    }, e = function () {
        cc.eventManager && cc.game._eventShow &&
        cc.eventManager.dispatchEvent(cc.game._eventShow)
    };
    b ? cc._addEventListener(document, c, function () {
        document[b] ? d() : e()
    }, !1) : (cc._addEventListener(a, "blur", d, !1), cc._addEventListener(a, "focus", e, !1));
    "onpageshow"in window && "onpagehide"in window && (cc._addEventListener(a, "pagehide", d, !1), cc._addEventListener(a, "pageshow", e, !1));
    c = a = null
})();
cc.log = cc.warn = cc.error = cc.assert = function () {
};
cc.create3DContext = function (a, b) {
    for (var c = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], d = null, e = 0; e < c.length; ++e) {
        try {
            d = a.getContext(c[e], b)
        } catch (f) {
        }
        if (d)break
    }
    return d
};
cc._initSys = function (a, b) {
    cc._RENDER_TYPE_CANVAS = 0;
    cc._RENDER_TYPE_WEBGL = 1;
    var c = cc.sys = {};
    c.LANGUAGE_ENGLISH = "en";
    c.LANGUAGE_CHINESE = "zh";
    c.LANGUAGE_FRENCH = "fr";
    c.LANGUAGE_ITALIAN = "it";
    c.LANGUAGE_GERMAN = "de";
    c.LANGUAGE_SPANISH = "es";
    c.LANGUAGE_RUSSIAN = "ru";
    c.LANGUAGE_KOREAN = "ko";
    c.LANGUAGE_JAPANESE = "ja";
    c.LANGUAGE_HUNGARIAN = "hu";
    c.LANGUAGE_PORTUGUESE = "pt";
    c.LANGUAGE_ARABIC = "ar";
    c.LANGUAGE_NORWEGIAN = "no";
    c.LANGUAGE_POLISH = "pl";
    c.OS_WINDOWS = "Windows";
    c.OS_IOS = "iOS";
    c.OS_OSX = "OS X";
    c.OS_UNIX = "UNIX";
    c.OS_LINUX = "Linux";
    c.OS_ANDROID = "Android";
    c.OS_UNKNOWN = "Unknown";
    c.BROWSER_TYPE_WECHAT = "wechat";
    c.BROWSER_TYPE_ANDROID = "androidbrowser";
    c.BROWSER_TYPE_IE = "ie";
    c.BROWSER_TYPE_QQ = "qqbrowser";
    c.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    c.BROWSER_TYPE_UC = "ucbrowser";
    c.BROWSER_TYPE_360 = "360browser";
    c.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    c.BROWSER_TYPE_BAIDU = "baidubrowser";
    c.BROWSER_TYPE_MAXTHON = "maxthon";
    c.BROWSER_TYPE_OPERA = "opera";
    c.BROWSER_TYPE_MIUI = "miuibrowser";
    c.BROWSER_TYPE_FIREFOX = "firefox";
    c.BROWSER_TYPE_SAFARI =
        "safari";
    c.BROWSER_TYPE_CHROME = "chrome";
    c.BROWSER_TYPE_UNKNOWN = "unknown";
    c.isNative = !1;
    var d = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI], e = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI, c.BROWSER_TYPE_UC, c.BROWSER_TYPE_QQ, c.BROWSER_TYPE_MOBILE_QQ, c.BROWSER_TYPE_IE], f = window, g = f.navigator, h = document.documentElement, k = g.userAgent.toLowerCase();
    c.isMobile = -1 != k.indexOf("mobile") ||
        -1 != k.indexOf("android");
    var l = g.language, l = (l = l ? l : g.browserLanguage) ? l.split("-")[0] : c.LANGUAGE_ENGLISH;
    c.language = l;
    var l = c.BROWSER_TYPE_UNKNOWN, m = k.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) || k.match(/chrome|safari/i);
    m && 0 < m.length && (l = m[0].toLowerCase(), "micromessenger" == l ? l = c.BROWSER_TYPE_WECHAT : "safari" === l && k.match(/android.*applewebkit/) ? l = c.BROWSER_TYPE_ANDROID : "trident" == l && (l = c.BROWSER_TYPE_IE));
    c.browserType = l;
    c._supportMultipleAudio = -1 < e.indexOf(c.browserType);
    e = parseInt(a[b.renderMode]);
    l = cc._RENDER_TYPE_WEBGL;
    m = cc.newElement("Canvas");
    cc._supportRender = !0;
    d = -1 == d.indexOf(c.browserType);
    if (1 === e || 0 === e && (c.isMobile || d))l = cc._RENDER_TYPE_CANVAS;
    if (l == cc._RENDER_TYPE_WEBGL && (!f.WebGLRenderingContext || !cc.create3DContext(m, {stencil: !0, preserveDrawingBuffer: !0})))0 == e ? l = cc._RENDER_TYPE_CANVAS : cc._supportRender = !1;
    if (l == cc._RENDER_TYPE_CANVAS)try {
        m.getContext("2d")
        m.webkitImageSmoothingEnabled = false;
        m.mozImageSmoothingEnabled = false;
        m.imageSmoothingEnabled = false;
    } catch (n) {
        cc._supportRender = !1
    }
    cc._renderType = l;
    try {
        c._supportWebAudio = !!new (f.AudioContext || f.webkitAudioContext || f.mozAudioContext)
    } catch (q) {
        c._supportWebAudio = !1
    }
    try {
        var r = c.localStorage = f.localStorage;
        r.setItem("storage", "");
        r.removeItem("storage");
        r = null
    } catch (t) {
        ("SECURITY_ERR" === t.name || "QuotaExceededError" === t.name) && cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), c.localStorage = function () {
        }
    }
    r = c.capabilities = {canvas: !0};
    cc._renderType == cc._RENDER_TYPE_WEBGL && (r.opengl = !0);
    void 0 !== h.ontouchstart || g.msPointerEnabled ? r.touches = !0 : void 0 !== h.onmouseup && (r.mouse = !0);
    void 0 !== h.onkeyup && (r.keyboard = !0);
    if (f.DeviceMotionEvent || f.DeviceOrientationEvent)r.accelerometer = !0;
    f = k.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
    k = k.match(/android/i) || g.platform.match(/android/i) ? !0 : !1;
    h = c.OS_UNKNOWN;
    -1 != g.appVersion.indexOf("Win") ? h = c.OS_WINDOWS : f ? h = c.OS_IOS : -1 != g.appVersion.indexOf("Mac") ? h = c.OS_OSX : -1 != g.appVersion.indexOf("X11") ? h = c.OS_UNIX : -1 != g.appVersion.indexOf("Linux") ? h = c.OS_LINUX :
        k && (h = c.OS_ANDROID);
    c.os = h;
    c.garbageCollect = function () {
    };
    c.dumpRoot = function () {
    };
    c.restartVM = function () {
    };
    c.dump = function () {
        var a;
        a = "" + ("isMobile : " + this.isMobile + "\r\n");
        a += "language : " + this.language + "\r\n";
        a += "browserType : " + this.browserType + "\r\n";
        a += "capabilities : " + JSON.stringify(this.capabilities) + "\r\n";
        a += "os : " + this.os + "\r\n";
        cc.log(a)
    }
};
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._canvas = null;
cc._gameDiv = null;
cc._rendererInitialized = !1;
cc._setupCalled = !1;
cc._setup = function (a, b, c) {
    if (!cc._setupCalled) {
        cc._setupCalled = !0;
        var d = window;
        d.requestAnimFrame = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
        var e = cc.$(a) || cc.$("#" + a), f;
        "CANVAS" == e.tagName ? (b = b || e.width, c = c || e.height, f = cc.container = cc.newElement("DIV"), a = cc._canvas = e, a.parentNode.insertBefore(f, a), a.appendTo(f), f.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != e.tagName && cc.log("Warning: target element is not a DIV or CANVAS"),
            b = b || e.clientWidth, c = c || e.clientHeight, f = cc.container = e, a = cc._canvas = cc.$(cc.newElement("CANVAS")), e.appendChild(a));
        a.addClass("gameCanvas");
        a.setAttribute("width", b || 480);
        a.setAttribute("height", c || 320);
        a.setAttribute("tabindex", 99);
        a.style.outline = "none";
        e = f.style;
        e.width = (b || 480) + "px";
        e.height = (c || 320) + "px";
        e.margin = "0 auto";
        e.position = "relative";
        e.overflow = "hidden";
        f.top = "100%";
        cc._renderType == cc._RENDER_TYPE_WEBGL && (cc._renderContext = cc.webglContext = cc.create3DContext(a, {stencil: !0, preserveDrawingBuffer: !0,
            antialias: !cc.sys.isMobile, alpha: !1}));
        cc._renderContext ? (d.gl = cc._renderContext, cc._drawingUtil = new cc.DrawingPrimitiveWebGL(cc._renderContext), cc._rendererInitialized = !0, cc.textureCache._initializingRenderer(), cc.shaderCache._init()) : (cc._renderContext = a.getContext("2d"), cc._mainRenderContextBackup = cc._renderContext, cc._renderContext.translate(0, a.height), cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc._renderContext) : null);
        cc._gameDiv = f;
        cc.log(cc.ENGINE_VERSION);
        cc._setContextMenuEnable(!1);
        cc.sys.isMobile && (b = cc.newElement("style"), b.type = "text/css", document.body.appendChild(b), b.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}");
        cc.view = cc.EGLView._getInstance();
        cc.inputManager.registerSystemEvent(cc._canvas);
        cc.director = cc.Director._getInstance();
        cc.director.setOpenGLView && cc.director.setOpenGLView(cc.view);
        cc.winSize = cc.director.getWinSize();
        cc.saxParser = new cc.SAXParser;
        cc.plistParser = new cc.PlistParser
    }
};
cc._checkWebGLRenderMode = function () {
    if (cc._renderType !== cc._RENDER_TYPE_WEBGL)throw"This feature supports WebGL render mode only.";
};
cc._isContextMenuEnable = !1;
cc._setContextMenuEnable = function (a) {
    cc._isContextMenuEnable = a;
    cc._canvas.oncontextmenu = function () {
        if (!cc._isContextMenuEnable)return!1
    }
};
cc.game = {DEBUG_MODE_NONE: 0, DEBUG_MODE_INFO: 1, DEBUG_MODE_WARN: 2, DEBUG_MODE_ERROR: 3, DEBUG_MODE_INFO_FOR_WEB_PAGE: 4, DEBUG_MODE_WARN_FOR_WEB_PAGE: 5, DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6, EVENT_HIDE: "game_on_hide", EVENT_SHOW: "game_on_show", _eventHide: null, _eventShow: null, _onBeforeStartArr: [], CONFIG_KEY: {engineDir: "engineDir", dependencies: "dependencies", debugMode: "debugMode", showFPS: "showFPS", frameRate: "frameRate", id: "id", renderMode: "renderMode", jsList: "jsList", classReleaseMode: "classReleaseMode"}, _prepareCalled: !1,
    _prepared: !1, _paused: !0, _intervalId: null, config: null, onStart: null, onStop: null, setFrameRate: function (a) {
        this.config[this.CONFIG_KEY.frameRate] = a;
        this._intervalId && clearInterval(this._intervalId);
        this._paused = !0;
        this._runMainLoop()
    }, _runMainLoop: function () {
        var a = this, b, c = a.config, d = a.CONFIG_KEY, e = window, f = c[d.frameRate], g = cc.director;
        g.setDisplayStats(c[d.showFPS]);
        e.requestAnimFrame && 60 == f ? (b = function () {
            a._paused || (g.mainLoop(), e.requestAnimFrame(b))
        }, e.requestAnimFrame(b)) : (b = function () {
            g.mainLoop()
        },
            a._intervalId = setInterval(b, 1E3 / f));
        a._paused = !1
    }, run: function (a) {
        var b = this, c = function () {
            a && (b.config[b.CONFIG_KEY.id] = a);
            b._prepareCalled ? cc._supportRender && (b._checkPrepare = setInterval(function () {
                b._prepared && (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart(), clearInterval(b._checkPrepare))
            }, 10)) : b.prepare(function () {
                cc._supportRender &&
                (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart())
            })
        };
        document.body ? c() : cc._addEventListener(window, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            c()
        }, !1)
    }, _initConfig: function () {
        var a = this.CONFIG_KEY, b = function (b) {
            b[a.engineDir] = b[a.engineDir] || "frameworks/cocos2d-html5";
            null == b[a.debugMode] &&
            (b[a.debugMode] = 0);
            b[a.frameRate] = b[a.frameRate] || 60;
            null == b[a.renderMode] && (b[a.renderMode] = 1);
            return b
        };
        if (document.ccConfig)this.config = b(document.ccConfig); else try {
            for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var e = c[d].getAttribute("cocos");
                if ("" == e || e)break
            }
            var f, g, h;
            if (d < c.length) {
                if (f = c[d].src)h = /(.*)\//.exec(f)[0], cc.loader.resPath = h, f = cc.path.join(h, "project.json");
                g = cc.loader._loadTxtSync(f)
            }
            g || (g = cc.loader._loadTxtSync("project.json"));
            var k = JSON.parse(g);
            this.config =
                b(k || {})
        } catch (l) {
            cc.log("Failed to read or parse project.json"), this.config = b({})
        }
        cc._initSys(this.config, a)
    }, _jsAddedCache: {}, _getJsListOfModule: function (a, b, c) {
        var d = this._jsAddedCache;
        if (d[b])return null;
        c = c || "";
        var e = [], f = a[b];
        if (!f)throw"can not find module [" + b + "]";
        b = cc.path;
        for (var g = 0, h = f.length; g < h; g++) {
            var k = f[g];
            if (!d[k]) {
                var l = b.extname(k);
                l ? ".js" == l.toLowerCase() && e.push(b.join(c, k)) : (l = this._getJsListOfModule(a, k, c)) && (e = e.concat(l));
                d[k] = 1
            }
        }
        return e
    }, prepare: function (a) {
        var b = this,
            c = b.config, d = b.CONFIG_KEY, e = c[d.engineDir], f = cc.loader;
        if (cc._supportRender) {
            b._prepareCalled = !0;
            var g = c[d.jsList] || [];
            cc.Class ? f.loadJsWithImg("", g, function (c) {
                if (c)throw c;
                b._prepared = !0;
                a && a()
            }) : (d = cc.path.join(e, "moduleConfig.json"), f.loadJson(d, function (d, f) {
                if (d)throw d;
                var l = c.modules || [], m = f.module, n = [];
                cc._renderType == cc._RENDER_TYPE_WEBGL ? l.splice(0, 0, "shaders") : 0 > l.indexOf("core") && l.splice(0, 0, "core");
                for (var q = 0, r = l.length; q < r; q++) {
                    var t = b._getJsListOfModule(m, l[q], e);
                    t && (n = n.concat(t))
                }
                n =
                    n.concat(g);
                cc.loader.loadJsWithImg(n, function (c) {
                    if (c)throw c;
                    b._prepared = !0;
                    a && a()
                })
            }))
        } else cc.error("Can not support render!")
    }};
cc.game._initConfig();
cc.loader.loadBinary = function (a, b) {
    var c = this, d = this.getXMLHttpRequest(), e = "load " + a + " failed!";
    d.open("GET", a, !0);
    /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (d.setRequestHeader("Accept-Charset", "x-user-defined"), d.onreadystatechange = function () {
        if (4 == d.readyState && 200 == d.status) {
            var a = cc._convertResponseBodyToText(d.responseBody);
            b(null, c._str2Uint8Array(a))
        } else b(e)
    }) : (d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dx-user-defined"), d.onload = function () {
        4 ==
        d.readyState && 200 == d.status ? b(null, c._str2Uint8Array(d.responseText)) : b(e)
    });
    d.send(null)
};
cc.loader._str2Uint8Array = function (a) {
    if (!a)return null;
    for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++)b[c] = a.charCodeAt(c) & 255;
    return b
};
cc.loader.loadBinarySync = function (a) {
    var b = this.getXMLHttpRequest(), c = "load " + a + " failed!";
    b.open("GET", a, !1);
    a = null;
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        b.setRequestHeader("Accept-Charset", "x-user-defined");
        b.send(null);
        if (200 != b.status)return cc.log(c), null;
        (b = cc._convertResponseBodyToText(b.responseBody)) && (a = this._str2Uint8Array(b))
    } else {
        b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dx-user-defined");
        b.send(null);
        if (200 != b.status)return cc.log(c),
            null;
        a = this._str2Uint8Array(b.responseText)
    }
    return a
};
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex \x3d LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last \x3d ""\r\n   End If\r\nEnd Function\r\n', myVBScript =
        cc.newElement("script");
    myVBScript.type = "text/vbscript";
    myVBScript.textContent = IEBinaryToArray_ByteStr_Script;
    document.body.appendChild(myVBScript);
    cc._convertResponseBodyToText = function (a) {
        for (var b = {}, c = 0; 256 > c; c++)for (var d = 0; 256 > d; d++)b[String.fromCharCode(c + 256 * d)] = String.fromCharCode(c) + String.fromCharCode(d);
        c = IEBinaryToArray_ByteStr(a);
        a = IEBinaryToArray_ByteStr_Last(a);
        return c.replace(/[\s\S]/g, function (a) {
            return b[a]
        }) + a
    }
}
;
cc = cc || {};
cc._loadingImage = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7";
cc._fpsImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII\x3d";
var cc = cc || {}, ClassManager = {id: 0 | 998 * Math.random(), instanceId: 0 | 998 * Math.random(), compileSuper: function (a, b, c) {
    a = a.toString();
    var d = a.indexOf("("), e = a.indexOf(")"), d = a.substring(d + 1, e), d = d.trim(), e = a.indexOf("{"), f = a.lastIndexOf("}");
    for (a = a.substring(e + 1, f); -1 != a.indexOf("this._super");) {
        var e = a.indexOf("this._super"), f = a.indexOf("(", e), g = a.indexOf(")", f), g = a.substring(f + 1, g), g = (g = g.trim()) ? "," : "";
        a = a.substring(0, e) + "ClassManager[" + c + "]." + b + ".call(this" + g + a.substring(f + 1)
    }
    return Function(d, a)
}, getNewID: function () {
    return this.id++
},
    getNewInstanceId: function () {
        return this.instanceId++
    }};
ClassManager.compileSuper.ClassManager = ClassManager;
(function () {
    var a = /\b_super\b/, b = cc.game.config[cc.game.CONFIG_KEY.classReleaseMode];
    b && console.log("release Mode");
    cc.Class = function () {
    };
    cc.Class.extend = function (c) {
        function d() {
            this.__instanceId = ClassManager.getNewInstanceId();
            this.ctor && this.ctor.apply(this, arguments)
        }

        var e = this.prototype, f = Object.create(e), g = ClassManager.getNewID();
        ClassManager[g] = e;
        var h = {writable: !0, enumerable: !1, configurable: !0};
        f.__instanceId = null;
        d.id = g;
        h.value = g;
        Object.defineProperty(f, "__pid", h);
        d.prototype = f;
        h.value = d;
        Object.defineProperty(d.prototype, "constructor", h);
        this.__getters__ && (d.__getters__ = cc.clone(this.__getters__));
        this.__setters__ && (d.__setters__ = cc.clone(this.__setters__));
        for (var k = 0, l = arguments.length; k < l; ++k) {
            var m = arguments[k], n;
            for (n in m) {
                var q = "function" === typeof m[n], r = "function" === typeof e[n], t = a.test(m[n]);
                b && q && r && t ? (h.value = ClassManager.compileSuper(m[n], n, g), Object.defineProperty(f, n, h)) : q && r && t ? (h.value = function (a, b) {
                    return function () {
                        var c = this._super;
                        this._super = e[a];
                        var d = b.apply(this,
                            arguments);
                        this._super = c;
                        return d
                    }
                }(n, m[n]), Object.defineProperty(f, n, h)) : q ? (h.value = m[n], Object.defineProperty(f, n, h)) : f[n] = m[n];
                if (q) {
                    var s, v;
                    if (this.__getters__ && this.__getters__[n]) {
                        var q = this.__getters__[n], u;
                        for (u in this.__setters__)if (this.__setters__[u] == q) {
                            v = u;
                            break
                        }
                        cc.defineGetterSetter(f, q, m[n], m[v] ? m[v] : f[v], n, v)
                    }
                    if (this.__setters__ && this.__setters__[n]) {
                        q = this.__setters__[n];
                        for (u in this.__getters__)if (this.__getters__[u] == q) {
                            s = u;
                            break
                        }
                        cc.defineGetterSetter(f, q, m[s] ? m[s] : f[s], m[n],
                            s, n)
                    }
                }
            }
        }
        d.extend = cc.Class.extend;
        d.implement = function (a) {
            for (var b in a)f[b] = a[b]
        };
        return d
    };
    Function.prototype.bind = Function.prototype.bind || function (a) {
        var b = this;
        return function () {
            var e = Array.prototype.slice.call(arguments);
            return b.apply(a || null, e)
        }
    }
})();
cc.defineGetterSetter = function (a, b, c, d, e, f) {
    if (a.__defineGetter__)c && a.__defineGetter__(b, c), d && a.__defineSetter__(b, d); else if (Object.defineProperty) {
        var g = {enumerable: !1, configurable: !0};
        c && (g.get = c);
        d && (g.set = d);
        Object.defineProperty(a, b, g)
    } else throw Error("browser does not support getters");
    if (!e && !f)for (var g = null != c, h = void 0 != d, k = Object.getOwnPropertyNames(a), l = 0; l < k.length; l++) {
        var m = k[l];
        if (!((a.__lookupGetter__ ? a.__lookupGetter__(m) : Object.getOwnPropertyDescriptor(a, m)) || "function" !== typeof a[m])) {
            var n =
                a[m];
            if (g && n === c && (e = m, !h || f))break;
            if (h && n === d && (f = m, !g || e))break
        }
    }
    a = a.constructor;
    e && (a.__getters__ || (a.__getters__ = {}), a.__getters__[e] = b);
    f && (a.__setters__ || (a.__setters__ = {}), a.__setters__[f] = b)
};
cc.clone = function (a) {
    var b = a.constructor ? new a.constructor : {}, c;
    for (c in a) {
        var d = a[c];
        b[c] = "object" == typeof d && d && !(d instanceof cc.Node) && !(d instanceof HTMLElement) ? cc.clone(d) : d
    }
    return b
};
cc.Point = function (a, b) {
    this.x = a || 0;
    this.y = b || 0
};
cc.p = function (a, b) {
    return void 0 == a ? {x: 0, y: 0} : void 0 == b ? {x: a.x, y: a.y} : {x: a, y: b}
};
cc.pointEqualToPoint = function (a, b) {
    return a && b && a.x === b.x && a.y === b.y
};
cc.Size = function (a, b) {
    this.width = a || 0;
    this.height = b || 0
};
cc.size = function (a, b) {
    return void 0 === a ? {width: 0, height: 0} : void 0 === b ? {width: a.width, height: a.height} : {width: a, height: b}
};
cc.sizeEqualToSize = function (a, b) {
    return a && b && a.width == b.width && a.height == b.height
};
cc.Rect = function (a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.width = c || 0;
    this.height = d || 0
};
cc.rect = function (a, b, c, d) {
    return void 0 === a ? {x: 0, y: 0, width: 0, height: 0} : void 0 === b ? {x: a.x, y: a.y, width: a.width, height: a.height} : {x: a, y: b, width: c, height: d}
};
cc.rectEqualToRect = function (a, b) {
    return a && b && a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
};
cc._rectEqualToZero = function (a) {
    return a && 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
cc.rectContainsRect = function (a, b) {
    return!a || !b ? !1 : !(a.x >= b.x || a.y >= b.y || a.x + a.width <= b.x + b.width || a.y + a.height <= b.y + b.height)
};
cc.rectGetMaxX = function (a) {
    return a.x + a.width
};
cc.rectGetMidX = function (a) {
    return a.x + a.width / 2
};
cc.rectGetMinX = function (a) {
    return a.x
};
cc.rectGetMaxY = function (a) {
    return a.y + a.height
};
cc.rectGetMidY = function (a) {
    return a.y + a.height / 2
};
cc.rectGetMinY = function (a) {
    return a.y
};
cc.rectContainsPoint = function (a, b) {
    return b.x >= cc.rectGetMinX(a) && b.x <= cc.rectGetMaxX(a) && b.y >= cc.rectGetMinY(a) && b.y <= cc.rectGetMaxY(a)
};
cc.rectIntersectsRect = function (a, b) {
    var c = a.y + a.height, d = b.x + b.width, e = b.y + b.height;
    return!(a.x + a.width < b.x || d < a.x || c < b.y || e < a.y)
};
cc.rectOverlapsRect = function (a, b) {
    return!(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y)
};
cc.rectUnion = function (a, b) {
    var c = cc.rect(0, 0, 0, 0);
    c.x = Math.min(a.x, b.x);
    c.y = Math.min(a.y, b.y);
    c.width = Math.max(a.x + a.width, b.x + b.width) - c.x;
    c.height = Math.max(a.y + a.height, b.y + b.height) - c.y;
    return c
};
cc.rectIntersection = function (a, b) {
    var c = cc.rect(Math.max(cc.rectGetMinX(a), cc.rectGetMinX(b)), Math.max(cc.rectGetMinY(a), cc.rectGetMinY(b)), 0, 0);
    c.width = Math.min(cc.rectGetMaxX(a), cc.rectGetMaxX(b)) - cc.rectGetMinX(c);
    c.height = Math.min(cc.rectGetMaxY(a), cc.rectGetMaxY(b)) - cc.rectGetMinY(c);
    return c
};
cc.visibleRect = {topLeft: cc.p(0, 0), topRight: cc.p(0, 0), top: cc.p(0, 0), bottomLeft: cc.p(0, 0), bottomRight: cc.p(0, 0), bottom: cc.p(0, 0), center: cc.p(0, 0), left: cc.p(0, 0), right: cc.p(0, 0), width: 0, height: 0, init: function (a) {
    var b = this.width = a.width, c = this.height = a.height, d = a.x;
    a = a.y;
    var e = a + c, f = d + b;
    this.topLeft.x = d;
    this.topLeft.y = e;
    this.topRight.x = f;
    this.topRight.y = e;
    this.top.x = d + b / 2;
    this.top.y = e;
    this.bottomLeft.x = d;
    this.bottomLeft.y = a;
    this.bottomRight.x = f;
    this.bottomRight.y = a;
    this.bottom.x = d + b / 2;
    this.bottom.y =
        a;
    this.center.x = d + b / 2;
    this.center.y = a + c / 2;
    this.left.x = d;
    this.left.y = a + c / 2;
    this.right.x = f;
    this.right.y = a + c / 2
}};
cc.SAXParser = cc.Class.extend({_parser: null, _isSupportDOMParser: null, ctor: function () {
    window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
}, parse: function (a) {
    return this._parseXML(a)
}, _parseXML: function (a) {
    var b;
    this._isSupportDOMParser ? b = this._parser.parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
    return b
}});
cc.PlistParser = cc.SAXParser.extend({parse: function (a) {
    a = this._parseXML(a).documentElement;
    if ("plist" != a.tagName)throw"Not a plist file!";
    for (var b = null, c = 0, d = a.childNodes.length; c < d && !(b = a.childNodes[c], 1 == b.nodeType); c++);
    return this._parseNode(b)
}, _parseNode: function (a) {
    var b = null, c = a.tagName;
    if ("dict" == c)b = this._parseDict(a); else if ("array" == c)b = this._parseArray(a); else if ("string" == c)if (1 == a.childNodes.length)b = a.firstChild.nodeValue; else {
        b = "";
        for (c = 0; c < a.childNodes.length; c++)b += a.childNodes[c].nodeValue
    } else"false" ==
    c ? b = !1 : "true" == c ? b = !0 : "real" == c ? b = parseFloat(a.firstChild.nodeValue) : "integer" == c && (b = parseInt(a.firstChild.nodeValue, 10));
    return b
}, _parseArray: function (a) {
    for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) {
        var e = a.childNodes[c];
        1 == e.nodeType && b.push(this._parseNode(e))
    }
    return b
}, _parseDict: function (a) {
    for (var b = {}, c = null, d = 0, e = a.childNodes.length; d < e; d++) {
        var f = a.childNodes[d];
        1 == f.nodeType && ("key" == f.tagName ? c = f.firstChild.nodeValue : b[c] = this._parseNode(f))
    }
    return b
}});
cc._txtLoader = {load: function (a, b, c, d) {
    cc.loader.loadTxt(a, d)
}};
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader);
cc._jsonLoader = {load: function (a, b, c, d) {
    cc.loader.loadJson(a, d)
}};
cc.loader.register(["json", "ExportJson"], cc._jsonLoader);
cc._imgLoader = {load: function (a, b, c, d) {
    cc.loader.cache[b] = cc.loader.loadImg(a, function (a, c) {
        if (a)return d(a);
        cc.textureCache.handleLoadedTexture(b);
        d(null, c)
    })
}};
cc.loader.register("png jpg bmp jpeg gif ico".split(" "), cc._imgLoader);
cc._serverImgLoader = {load: function (a, b, c, d) {
    cc.loader.cache[b] = cc.loader.loadImg(c.src, function (a, c) {
        if (a)return d(a);
        cc.textureCache.handleLoadedTexture(b);
        d(null, c)
    })
}};
cc.loader.register(["serverImg"], cc._serverImgLoader);
cc._plistLoader = {load: function (a, b, c, d) {
    cc.loader.loadTxt(a, function (a, b) {
        if (a)return d(a);
        d(null, cc.plistParser.parse(b))
    })
}};
cc.loader.register(["plist"], cc._plistLoader);
cc._fontLoader = {TYPE: {".eot": "embedded-opentype", ".ttf": "truetype", ".woff": "woff", ".svg": "svg"}, _loadFont: function (a, b, c) {
    var d = document, e = cc.path, f = this.TYPE, g = cc.newElement("style");
    g.type = "text/css";
    d.body.appendChild(g);
    var h = "@font-face { font-family:" + a + "; src:";
    if (b instanceof Array)for (var k = 0, l = b.length; k < l; k++)c = e.extname(b[k]).toLowerCase(), h += "url('" + b[k] + "') format('" + f[c] + "')", h += k == l - 1 ? ";" : ","; else h += "url('" + b + "') format('" + f[c] + "');";
    g.textContent += h + "};";
    b = cc.newElement("div");
    c =
        b.style;
    c.fontFamily = a;
    b.innerHTML = ".";
    c.position = "absolute";
    c.left = "-100px";
    c.top = "-100px";
    d.body.appendChild(b)
}, load: function (a, b, c, d) {
    b = c.type;
    a = c.name;
    b = c.srcs;
    "string" == typeof c ? (b = cc.path.extname(c), a = cc.path.basename(c, b), this._loadFont(a, c, b)) : this._loadFont(a, b);
    d(null, !0)
}};
cc.loader.register(["font", "eot", "ttf", "woff", "svg"], cc._fontLoader);
cc._binaryLoader = {load: function (a, b, c, d) {
    cc.loader.loadBinary(a, d)
}};
window.CocosEngine = cc.ENGINE_VERSION = "Cocos2d-html5 v3.0 RC0";
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0);
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_ATLAS_USE_VAO = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS = 1;
cc.SPRITE_DEBUG_DRAW = 0;
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0;
cc.LABELBMFONT_DEBUG_DRAW = 0;
cc.LABELATLAS_DEBUG_DRAW = 0;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas";
cc.ENABLE_STACKABLE_ACTIONS = 1;
cc.ENABLE_GL_STATE_CACHE = 1;
cc.$ = function (a) {
    var b = this == cc ? document : this;
    if (a = a instanceof HTMLElement ? a : b.querySelector(a))a.find = a.find || cc.$, a.hasClass = a.hasClass || function (a) {
        return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
    }, a.addClass = a.addClass || function (a) {
        this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
        return this
    }, a.removeClass = a.removeClass || function (a) {
        this.hasClass(a) && (this.className = this.className.replace(a, ""));
        return this
    }, a.remove = a.remove || function () {
        this.parentNode &&
        this.parentNode.removeChild(this);
        return this
    }, a.appendTo = a.appendTo || function (a) {
        a.appendChild(this);
        return this
    }, a.prependTo = a.prependTo || function (a) {
        a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
        return this
    }, a.transforms = a.transforms || function () {
        this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew);
        return this
    }, a.position = a.position || {x: 0, y: 0}, a.rotation = a.rotation || 0, a.scale = a.scale || {x: 1, y: 1}, a.skew =
        a.skew || {x: 0, y: 0}, a.translates = function (a, b) {
        this.position.x = a;
        this.position.y = b;
        this.transforms();
        return this
    }, a.rotate = function (a) {
        this.rotation = a;
        this.transforms();
        return this
    }, a.resize = function (a, b) {
        this.scale.x = a;
        this.scale.y = b;
        this.transforms();
        return this
    }, a.setSkew = function (a, b) {
        this.skew.x = a;
        this.skew.y = b;
        this.transforms();
        return this
    };
    return a
};
switch (cc.sys.browserType) {
    case cc.sys.BROWSER_TYPE_FIREFOX:
        cc.$.pfx = "Moz";
        cc.$.hd = !0;
        break;
    case cc.sys.BROWSER_TYPE_CHROME:
    case cc.sys.BROWSER_TYPE_SAFARI:
        cc.$.pfx = "webkit";
        cc.$.hd = !0;
        break;
    case cc.sys.BROWSER_TYPE_OPERA:
        cc.$.pfx = "O";
        cc.$.hd = !1;
        break;
    case cc.sys.BROWSER_TYPE_IE:
        cc.$.pfx = "ms";
        cc.$.hd = !1;
        break;
    default:
        cc.$.pfx = "webkit", cc.$.hd = !0
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = cc.$.hd ? function (a) {
    return"translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function (a) {
    return"translate(" + a.x + "px, " + a.y + "px) "
};
cc.$.rotate = cc.$.hd ? function (a) {
    return"rotateZ(" + a + "deg) "
} : function (a) {
    return"rotate(" + a + "deg) "
};
cc.$.scale = function (a) {
    return"scale(" + a.x + ", " + a.y + ") "
};
cc.$.skew = function (a) {
    return"skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
cc.$new = function (a) {
    return cc.$(document.createElement(a))
};
cc.$.findpos = function (a) {
    var b = 0, c = 0;
    do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
    return{x: b, y: c}
};
cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat("3.402823466e+38F");
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 4294967295;
cc.swap = function (a, b, c) {
    if ("object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y) {
        var d = c[a];
        c[a] = c[b];
        c[b] = d
    } else cc.log(cc._LogInfos.swap)
};
cc.lerp = function (a, b, c) {
    return a + (b - a) * c
};
cc.rand = function () {
    return 16777215 * Math.random()
};
cc.randomMinus1To1 = function () {
    return 2 * (Math.random() - 0.5)
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function (a) {
    return a * cc.RAD
};
cc.radiansToDegrees = function (a) {
    return a * cc.DEG
};
cc.radiansToDegress = function (a) {
    cc.log(cc._LogInfos.radiansToDegress);
    return a * cc.DEG
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.nodeDrawSetup = function (a) {
    a._shaderProgram && (a._shaderProgram.use(), a._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4())
};
cc.enableDefaultGLStates = function () {
};
cc.disableDefaultGLStates = function () {
};
cc.incrementGLDraws = function (a) {
    cc.g_NumberOfDraws += a
};
cc.FLT_EPSILON = 1.192092896E-7;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
    return cc.director.getContentScaleFactor()
} : function () {
    return 1
};
cc.pointPointsToPixels = function (a) {
    var b = cc.contentScaleFactor();
    return cc.p(a.x * b, a.y * b)
};
cc.pointPixelsToPoints = function (a) {
    var b = cc.contentScaleFactor();
    return cc.p(a.x / b, a.y / b)
};
cc._pointPixelsToPointsOut = function (a, b) {
    var c = cc.contentScaleFactor();
    b.x = a.x / c;
    b.y = a.y / c
};
cc.sizePointsToPixels = function (a) {
    var b = cc.contentScaleFactor();
    return cc.size(a.width * b, a.height * b)
};
cc.sizePixelsToPoints = function (a) {
    var b = cc.contentScaleFactor();
    return cc.size(a.width / b, a.height / b)
};
cc._sizePixelsToPointsOut = function (a, b) {
    var c = cc.contentScaleFactor();
    b.width = a.width / c;
    b.height = a.height / c
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (a) {
    var b = cc.contentScaleFactor();
    return cc.rect(a.x / b, a.y / b, a.width / b, a.height / b)
} : function (a) {
    return a
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (a) {
    var b = cc.contentScaleFactor();
    return cc.rect(a.x * b, a.y * b, a.width * b, a.height * b)
} : function (a) {
    return a
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 770;
cc.SRC_ALPHA_SATURATE = 776;
cc.SRC_COLOR = 768;
cc.DST_ALPHA = 772;
cc.DST_COLOR = 774;
cc.ONE_MINUS_SRC_ALPHA = 771;
cc.ONE_MINUS_SRC_COLOR = 769;
cc.ONE_MINUS_DST_ALPHA = 773;
cc.ONE_MINUS_DST_COLOR = 775;
cc.ONE_MINUS_CONSTANT_ALPHA = 32772;
cc.ONE_MINUS_CONSTANT_COLOR = 32770;
cc.checkGLErrorDebug = function () {
    if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
        var a = cc._renderContext.getError();
        a && cc.log(CC._localZOrder.checkGLErrorDebug, a)
    }
};
cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1;
cc.VERTEX_ATTRIB_FLAG_COLOR = 2;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 4;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
cc.GL_ALL = 0;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 3233828865;
cc.ZOOM_ACTION_TAG = 3233828866;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc._tmp.PrototypeColor = function () {
    var a = cc.color;
    a._getWhite = function () {
        return a(255, 255, 255)
    };
    a._getYellow = function () {
        return a(255, 255, 0)
    };
    a._getBlue = function () {
        return a(0, 0, 255)
    };
    a._getGreen = function () {
        return a(0, 255, 0)
    };
    a._getRed = function () {
        return a(255, 0, 0)
    };
    a._getMagenta = function () {
        return a(255, 0, 255)
    };
    a._getBlack = function () {
        return a(0, 0, 0)
    };
    a._getOrange = function () {
        return a(255, 127, 0)
    };
    a._getGray = function () {
        return a(166, 166, 166)
    };
    cc.defineGetterSetter(a, "WHITE", a._getWhite);
    cc.defineGetterSetter(a,
        "YELLOW", a._getYellow);
    cc.defineGetterSetter(a, "BLUE", a._getBlue);
    cc.defineGetterSetter(a, "GREEN", a._getGreen);
    cc.defineGetterSetter(a, "RED", a._getRed);
    cc.defineGetterSetter(a, "MAGENTA", a._getMagenta);
    cc.defineGetterSetter(a, "BLACK", a._getBlack);
    cc.defineGetterSetter(a, "ORANGE", a._getOrange);
    cc.defineGetterSetter(a, "GRAY", a._getGray)
};
cc.Color = function (a, b, c, d) {
    this.r = a || 0;
    this.g = b || 0;
    this.b = c || 0;
    this.a = d || 255
};
cc.color = function (a, b, c, d) {
    return void 0 === a ? {r: 0, g: 0, b: 0, a: 255} : "string" === typeof a ? cc.hexToColor(a) : "object" === typeof a ? {r: a.r, g: a.g, b: a.b, a: a.a || 255} : {r: a, g: b, b: c, a: d || 255}
};
cc.colorEqual = function (a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b
};
cc.Acceleration = function (a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.timestamp = d || 0
};
cc.Vertex2F = function (a, b) {
    this.x = a || 0;
    this.y = b || 0
};
cc.vertex2 = function (a, b) {
    return new cc.Vertex2F(a, b)
};
cc.Vertex3F = function (a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
cc.vertex3 = function (a, b, c) {
    return new cc.Vertex3F(a, b, c)
};
cc.Tex2F = function (a, b) {
    this.u = a || 0;
    this.v = b || 0
};
cc.tex2 = function (a, b) {
    return new cc.Tex2F(a, b)
};
cc.BlendFunc = function (a, b) {
    this.src = a;
    this.dst = b
};
cc.blendFuncDisable = function () {
    return new cc.BlendFunc(cc.ONE, cc.ZERO)
};
cc.hexToColor = function (a) {
    a = a.replace(/^#?/, "0x");
    a = parseInt(a);
    return cc.color(a >> 16, (a >> 8) % 256, a % 256)
};
cc.colorToHex = function (a) {
    var b = a.r.toString(16), c = a.g.toString(16), d = a.b.toString(16);
    return"#" + (16 > a.r ? "0" + b : b) + (16 > a.g ? "0" + c : c) + (16 > a.b ? "0" + d : d)
};
cc.TEXT_ALIGNMENT_LEFT = 0;
cc.TEXT_ALIGNMENT_CENTER = 1;
cc.TEXT_ALIGNMENT_RIGHT = 2;
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0;
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1;
cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2;
cc._Dictionary = cc.Class.extend({_keyMapTb: null, _valueMapTb: null, __currId: 0, ctor: function () {
    this._keyMapTb = {};
    this._valueMapTb = {};
    this.__currId = 2 << (0 | 10 * Math.random())
}, __getKey: function () {
    this.__currId++;
    return"key_" + this.__currId
}, setObject: function (a, b) {
    if (null != b) {
        var c = this.__getKey();
        this._keyMapTb[c] = b;
        this._valueMapTb[c] = a
    }
}, objectForKey: function (a) {
    if (null == a)return null;
    var b = this._keyMapTb, c;
    for (c in b)if (b[c] === a)return this._valueMapTb[c];
    return null
}, valueForKey: function (a) {
    return this.objectForKey(a)
},
    removeObjectForKey: function (a) {
        if (null != a) {
            var b = this._keyMapTb, c;
            for (c in b)if (b[c] === a) {
                delete this._valueMapTb[c];
                delete b[c];
                break
            }
        }
    }, removeObjectsForKeys: function (a) {
        if (null != a)for (var b = 0; b < a.length; b++)this.removeObjectForKey(a[b])
    }, allKeys: function () {
        var a = [], b = this._keyMapTb, c;
        for (c in b)a.push(b[c]);
        return a
    }, removeAllObjects: function () {
        this._keyMapTb = {};
        this._valueMapTb = {}
    }, count: function () {
        return this.allKeys().length
    }});
cc.FontDefinition = function () {
    this.fontName = "Arial";
    this.fontSize = 12;
    this.textAlign = cc.TEXT_ALIGNMENT_CENTER;
    this.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
    this.fillStyle = cc.color(255, 255, 255, 255);
    this.boundingHeight = this.boundingWidth = 0;
    this.strokeEnabled = !1;
    this.strokeStyle = cc.color(255, 255, 255, 255);
    this.lineWidth = 1;
    this.shadowEnabled = !1;
    this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.shadowOpacity = 1
};
cc._renderType === cc._RENDER_TYPE_WEBGL && (cc.assert("function" === typeof cc._tmp.WebGLColor, cc._LogInfos.MissingFile, "CCTypesWebGL.js"), cc._tmp.WebGLColor(), delete cc._tmp.WebGLColor);
cc.assert("function" === typeof cc._tmp.PrototypeColor, cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
cc._tmp.PrototypeColor();
delete cc._tmp.PrototypeColor;
cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.EGLView = cc.Class.extend({_delegate: null, _frameSize: null, _designResolutionSize: null, _originalDesignResolutionSize: null, _viewPortRect: null, _visibleRect: null, _retinaEnabled: !1, _autoFullScreen: !0, _devicePixelRatio: 1, _viewName: "", _resizeCallback: null, _scaleX: 1, _originalScaleX: 1, _scaleY: 1, _originalScaleY: 1, _indexBitsUsed: 0, _maxTouches: 5, _resolutionPolicy: null, _rpExactFit: null, _rpShowAll: null, _rpNoBorder: null, _rpFixedHeight: null, _rpFixedWidth: null, _initialized: !1, _captured: !1, _wnd: null, _hDC: null, _hRC: null,
    _supportTouch: !1, _contentTranslateLeftTop: null, _frame: null, _frameZoomFactor: 1, __resizeWithBrowserSize: !1, _isAdjustViewPort: !0, ctor: function () {
        var a = document, b = cc.ContainerStrategy, c = cc.ContentStrategy;
        this._frame = cc.container.parentNode === a.body ? a.documentElement : cc.container.parentNode;
        this._frameSize = cc.size(0, 0);
        this._initFrameSize();
        var a = cc._canvas.width, d = cc._canvas.height;
        this._designResolutionSize = cc.size(a, d);
        this._originalDesignResolutionSize = cc.size(a, d);
        this._viewPortRect = cc.rect(0, 0,
            a, d);
        this._visibleRect = cc.rect(0, 0, a, d);
        this._contentTranslateLeftTop = {left: 0, top: 0};
        this._viewName = "Cocos2dHTML5";
        a = cc.sys;
        this.enableRetina(a.os == a.OS_IOS || a.os == a.OS_OSX);
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
        this._rpExactFit = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.EXACT_FIT);
        this._rpShowAll = new cc.ResolutionPolicy(b.PROPORTION_TO_FRAME, c.SHOW_ALL);
        this._rpNoBorder = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.NO_BORDER);
        this._rpFixedHeight = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME,
            c.FIXED_HEIGHT);
        this._rpFixedWidth = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.FIXED_WIDTH);
        this._hDC = cc._canvas;
        this._hRC = cc._renderContext
    }, _resizeEvent: function () {
        var a = this._originalDesignResolutionSize.width, b = this._originalDesignResolutionSize.height;
        this._resizeCallback && (this._initFrameSize(), this._resizeCallback.call());
        0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
    }, resizeWithBrowserSize: function (a) {
        a ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this),
            cc._addEventListener(window, "resize", a, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this), window.removeEventListener("resize", a, !1))
    }, setResizeCallback: function (a) {
        if ("function" == typeof a || null == a)this._resizeCallback = a
    }, _initFrameSize: function () {
        var a = this._frameSize;
        a.width = this._frame.clientWidth;
        a.height = this._frame.clientHeight
    }, _adjustSizeKeepCanvasSize: function () {
        var a = this._originalDesignResolutionSize.width, b = this._originalDesignResolutionSize.height;
        0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
    }, _setViewPortMeta: function (a, b) {
        if (this._isAdjustViewPort) {
            var c = {"user-scalable": "no", "maximum-scale": "1.0", "initial-scale": "1.0"}, d = document.getElementsByName("viewport"), e;
            0 == d.length ? (d = cc.newElement("meta"), d.name = "viewport", d.content = "", document.head.appendChild(d)) : d = d[0];
            if (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_FIREFOX)d.content = "initial-scale:1"; else {
                e = d.content;
                for (var f in c)RegExp(f).test(e) || (e += ("" == e ? "" :
                    ",") + f + "\x3d" + c[f]);
                d.content = e
            }
        }
    }, _setScaleXYForRenderTexture: function () {
        var a = cc.contentScaleFactor();
        this._scaleY = this._scaleX = a
    }, _resetScale: function () {
        this._scaleX = this._originalScaleX;
        this._scaleY = this._originalScaleY
    }, _adjustSizeToBrowser: function () {
    }, initialize: function () {
        this._initialized = !0
    }, adjustViewPort: function (a) {
        this._isAdjustViewPort = a
    }, enableRetina: function (a) {
        this._retinaEnabled = a ? !0 : !1
    }, isRetinaEnabled: function () {
        return this._retinaEnabled
    }, enableAutoFullScreen: function (a) {
        this._autoFullScreen =
            a ? !0 : !1
    }, isAutoFullScreenEnabled: function () {
        return this._autoFullScreen
    }, end: function () {
    }, isOpenGLReady: function () {
        return null != this._hDC && null != this._hRC
    }, setFrameZoomFactor: function (a) {
        this._frameZoomFactor = a;
        this.centerWindow();
        cc.director.setProjection(cc.director.getProjection())
    }, swapBuffers: function () {
    }, setIMEKeyboardState: function (a) {
    }, setContentTranslateLeftTop: function (a, b) {
        this._contentTranslateLeftTop = {left: a, top: b}
    }, getContentTranslateLeftTop: function () {
        return this._contentTranslateLeftTop
    },
    getFrameSize: function () {
        return cc.size(this._frameSize.width, this._frameSize.height)
    }, setFrameSize: function (a, b) {
        this._frameSize.width = a;
        this._frameSize.height = b;
        this._frame.style.width = a + "px";
        this._frame.style.height = b + "px";
        this._resizeEvent();
        cc.director.setProjection(cc.director.getProjection())
    }, centerWindow: function () {
    }, getVisibleSize: function () {
        return cc.size(this._visibleRect.width, this._visibleRect.height)
    }, getVisibleOrigin: function () {
        return cc.p(this._visibleRect.x, this._visibleRect.y)
    },
    canSetContentScaleFactor: function () {
        return!0
    }, getResolutionPolicy: function () {
        return this._resolutionPolicy
    }, setResolutionPolicy: function (a) {
        if (a instanceof cc.ResolutionPolicy)this._resolutionPolicy = a; else {
            var b = cc.ResolutionPolicy;
            a === b.EXACT_FIT && (this._resolutionPolicy = this._rpExactFit);
            a === b.SHOW_ALL && (this._resolutionPolicy = this._rpShowAll);
            a === b.NO_BORDER && (this._resolutionPolicy = this._rpNoBorder);
            a === b.FIXED_HEIGHT && (this._resolutionPolicy = this._rpFixedHeight);
            a === b.FIXED_WIDTH && (this._resolutionPolicy =
                this._rpFixedWidth)
        }
    }, setDesignResolutionSize: function (a, b, c) {
        if (isNaN(a) || 0 == a || isNaN(b) || 0 == b)cc.log(cc._LogInfos.EGLView_setDesignResolutionSize); else {
            this.setResolutionPolicy(c);
            var d = this._resolutionPolicy;
            if (d) {
                d.preApply(this);
                var e = this._frameSize.width, f = this._frameSize.height;
                cc.sys.isMobile && this._setViewPortMeta(this._frameSize.width, this._frameSize.height);
                this._initFrameSize();
                c == this._resolutionPolicy && a == this._originalDesignResolutionSize.width && b == this._originalDesignResolutionSize.height &&
                    e == this._frameSize.width && f == this._frameSize.height || (this._designResolutionSize = cc.size(a, b), this._originalDesignResolutionSize = cc.size(a, b), a = d.apply(this, this._designResolutionSize), a.scale && 2 == a.scale.length && (this._scaleX = a.scale[0], this._scaleY = a.scale[1]), a.viewport && (a = this._viewPortRect = a.viewport, b = this._visibleRect, b.width = cc._canvas.width / this._scaleX, b.height = cc._canvas.height / this._scaleY, b.x = -a.x / this._scaleX, b.y = -a.y / this._scaleY), a = cc.director, cc.winSize.width = a._winSizeInPoints.width =
                    this._visibleRect.width, cc.winSize.height = a._winSizeInPoints.height = this._visibleRect.height, d.postApply(this), cc._renderType == cc._RENDER_TYPE_WEBGL && (a._createStatsLabel(), a.setGLDefaultValues()), this._originalScaleX = this._scaleX, this._originalScaleY = this._scaleY, cc.DOM && cc.DOM._resetEGLViewDiv(), cc.visibleRect && cc.visibleRect.init(this._visibleRect))
            } else cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2)
        }
    }, getDesignResolutionSize: function () {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
    },
    setViewPortInPoints: function (a, b, c, d) {
        var e = this._frameZoomFactor, f = this._scaleX, g = this._scaleY;
        cc._renderContext.viewport(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
    }, setScissorInPoints: function (a, b, c, d) {
        var e = this._frameZoomFactor, f = this._scaleX, g = this._scaleY;
        cc._renderContext.scissor(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
    }, isScissorEnabled: function () {
        var a = cc._renderContext;
        return a.isEnabled(a.SCISSOR_TEST)
    }, getScissorRect: function () {
        var a =
            cc._renderContext, b = this._scaleX, c = this._scaleY, a = a.getParameter(a.SCISSOR_BOX);
        return cc.rect((a[0] - this._viewPortRect.x) / b, (a[1] - this._viewPortRect.y) / c, a[2] / b, a[3] / c)
    }, setViewName: function (a) {
        null != a && 0 < a.length && (this._viewName = a)
    }, getViewName: function () {
        return this._viewName
    }, getViewPortRect: function () {
        return this._viewPortRect
    }, getScaleX: function () {
        return this._scaleX
    }, getScaleY: function () {
        return this._scaleY
    }, getDevicePixelRatio: function () {
        return this._devicePixelRatio
    }, convertToLocationInView: function (a, b, c) {
        return{x: this._devicePixelRatio * (a - c.left), y: this._devicePixelRatio * (c.top + c.height - b)}
    }, _convertMouseToLocationInView: function (a, b) {
        var c = this._viewPortRect;
        a.x = (this._devicePixelRatio * (a.x - b.left) - c.x) / this._scaleX;
        a.y = (this._devicePixelRatio * (b.top + b.height - a.y) - c.y) / this._scaleY
    }, _convertTouchesWithScale: function (a) {
        for (var b = this._viewPortRect, c = this._scaleX, d = this._scaleY, e, f, g, h = 0; h < a.length; h++)e = a[h], f = e._point, g = e._prevPoint, e._setPoint((f.x - b.x) / c, (f.y - b.y) / d), e._setPrevPoint((g.x -
            b.x) / c, (g.y - b.y) / d)
    }});
cc.EGLView._getInstance = function () {
    this._instance || (this._instance = this._instance || new cc.EGLView, this._instance.initialize());
    return this._instance
};
cc.ContainerStrategy = cc.Class.extend({preApply: function (a) {
}, apply: function (a, b) {
}, postApply: function (a) {
}, _setupContainer: function (a, b, c) {
    var d = a._frame;
    //cc.view._autoFullScreen && (cc.sys.isMobile && d == document.documentElement) && cc.screen.autoFullScreen(d);
    var d = cc._canvas, e = cc.container;
    e.style.width = d.style.width = b + "px";
    e.style.height = d.style.height = c + "px";
    e = a._devicePixelRatio = 1;
    a.isRetinaEnabled() && (e = a._devicePixelRatio = window.devicePixelRatio || 1);
    d.width = b * e;
    d.height = c * e;
    a = document.body;
    var f;
    if (a && (f = a.style))f.paddingTop = f.paddingTop || "0px", f.paddingRight = f.paddingRight || "0px", f.paddingBottom = f.paddingBottom || "0px", f.paddingLeft = f.paddingLeft || "0px", f.borderTop = f.borderTop || "0px", f.borderRight = f.borderRight || "0px", f.borderBottom = f.borderBottom || "0px", f.borderLeft = f.borderLeft || "0px", f.marginTop = f.marginTop || "0px", f.marginRight = f.marginRight || "0px", f.marginBottom = f.marginBottom || "0px", f.marginLeft = f.marginLeft || "0px"
}, _fixContainer: function () {
    document.body.insertBefore(cc.container, document.body.firstChild);
    var a = document.body.style;
    a.width = window.innerWidth + "px";
    a.height = window.innerHeight + "px";
    a.overflow = "hidden";
    a = cc.container.style;
    a.position = "fixed";
    a.left = a.top = "0px";
    document.body.scrollTop = 0
    cc._renderContext.webkitImageSmoothingEnabled = false;
    cc._renderContext.mozImageSmoothingEnabled = false;
    cc._renderContext.imageSmoothingEnabled = false; //future
}});
cc.ContentStrategy = cc.Class.extend({_result: {scale: [1, 1], viewport: null}, _buildResult: function (a, b, c, d, e, f) {
    2 > Math.abs(a - c) && (c = a);
    2 > Math.abs(b - d) && (d = b);
    a = cc.rect(Math.round((a - c) / 2), Math.round((b - d) / 2), c, d);
    cc._renderType == cc._RENDER_TYPE_CANVAS && cc._renderContext.translate(a.x, a.y + d);
    this._result.scale = [e, f];
    this._result.viewport = a;
    return this._result
}, preApply: function (a) {
}, apply: function (a, b) {
    return{scale: [1, 1]}
}, postApply: function (a) {
}});
(function () {
    var a = cc.ContainerStrategy.extend({apply: function (a) {
        this._setupContainer(a, a._frameSize.width, a._frameSize.height)
    }}), b = cc.ContainerStrategy.extend({apply: function (a, b) {
        var c = a._frameSize.width, d = a._frameSize.height, e = cc.container.style, m = b.width, n = b.height, q = c / m, r = d / n, t, s;
        q < r ? (t = c, s = n * q) : (t = m * r, s = d);
        m = Math.round((c - t) / 2);
        s = Math.round((d - s) / 2);
        this._setupContainer(a, c - 2 * m, d - 2 * s);
        e.marginLeft = m + "px";
        e.marginRight = m + "px";
        e.marginTop = s + "px";
        e.marginBottom = s + "px"
    }});
    a.extend({preApply: function (a) {
        this._super(a);
        a._frame = document.documentElement
    }, apply: function (a) {
        this._super(a);
        this._fixContainer()
    }});
    b.extend({preApply: function (a) {
        this._super(a);
        a._frame = document.documentElement
    }, apply: function (a, b) {
        this._super(a, b);
        this._fixContainer()
    }});
    var c = cc.ContainerStrategy.extend({apply: function (a) {
        this._setupContainer(a, cc._canvas.width, cc._canvas.height)
    }});
    cc.ContainerStrategy.EQUAL_TO_FRAME = new a;
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new b;
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new c;
    var a = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height;
        return this._buildResult(c, d, c, d, c / b.width, d / b.height)
    }}), b = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = b.width, m = b.height, n = c / e, q = d / m, r = 0, t, s;
        n < q ? (r = n, t = c, s = m * r) : (r = q, t = e * r, s = d);
        return this._buildResult(c, d, t, s, r, r)
    }}), c = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = b.width, m = b.height, n = c / e, q = d / m, r, t, s;
        n < q ? (r = q, t = e * r, s = d) : (r = n, t = c, s = m * r);
        return this._buildResult(c,
            d, t, s, r, r)
    }}), d = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = d / b.height;
        return this._buildResult(c, d, c, d, e, e)
    }, postApply: function (a) {
        cc.director._winSizeInPoints = a.getVisibleSize()
    }}), e = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = c / b.width;
        return this._buildResult(c, d, c, d, e, e)
    }, postApply: function (a) {
        cc.director._winSizeInPoints = a.getVisibleSize()
    }});
    cc.ContentStrategy.EXACT_FIT = new a;
    cc.ContentStrategy.SHOW_ALL =
        new b;
    cc.ContentStrategy.NO_BORDER = new c;
    cc.ContentStrategy.FIXED_HEIGHT = new d;
    cc.ContentStrategy.FIXED_WIDTH = new e
})();
cc.ResolutionPolicy = cc.Class.extend({_containerStrategy: null, _contentStrategy: null, ctor: function (a, b) {
    this.setContainerStrategy(a);
    this.setContentStrategy(b)
}, preApply: function (a) {
    this._containerStrategy.preApply(a);
    this._contentStrategy.preApply(a)
}, apply: function (a, b) {
    this._containerStrategy.apply(a, b);
    return this._contentStrategy.apply(a, b)
}, postApply: function (a) {
    this._containerStrategy.postApply(a);
    this._contentStrategy.postApply(a)
}, setContainerStrategy: function (a) {
    a instanceof cc.ContainerStrategy &&
    (this._containerStrategy = a)
}, setContentStrategy: function (a) {
    a instanceof cc.ContentStrategy && (this._contentStrategy = a)
}});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;
cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {_mousePressed: !1, _isRegisterEvent: !1, _preTouchPoint: cc.p(0, 0), _prevMousePoint: cc.p(0, 0), _preTouchPool: [], _preTouchPoolPointer: 0, _touches: [], _touchesIntegerDict: {}, _indexBitsUsed: 0, _maxTouches: 5, _accelEnabled: !1, _accelInterval: 1 / 30, _accelMinus: 1, _accelCurTime: 0, _acceleration: null, _accelDeviceEvent: null, _getUnUsedIndex: function () {
    for (var a = this._indexBitsUsed, b = 0; b < this._maxTouches; b++) {
        if (!(a & 1))return this._indexBitsUsed |= 1 << b, b;
        a >>= 1
    }
    return-1
}, _removeUsedIndexBit: function (a) {
    0 > a ||
        a >= this._maxTouches || (a = ~(1 << a), this._indexBitsUsed &= a)
}, _glView: null, handleTouchesBegin: function (a) {
    for (var b, c, d, e = [], f = this._touchesIntegerDict, g = 0, h = a.length; g < h; g++)b = a[g], d = b.getID(), c = f[d], null == c && (c = this._getUnUsedIndex(), -1 == c ? cc.log(cc._LogInfos.inputManager_handleTouchesBegin, c) : (b = this._touches[c] = b, f[d] = c, e.push(b)));
    0 < e.length && (this._glView._convertTouchesWithScale(e), a = new cc.EventTouch(e), a._eventCode = cc.EventTouch.EventCode.BEGAN, cc.eventManager.dispatchEvent(a))
}, handleTouchesMove: function (a) {
    for (var b,
             c, d = [], e = this._touches, f = 0, g = a.length; f < g; f++)b = a[f], c = b.getID(), c = this._touchesIntegerDict[c], null != c && e[c] && (e[c]._setPoint(b._point), e[c]._setPrevPoint(b._prevPoint), d.push(e[c]));
    0 < d.length && (this._glView._convertTouchesWithScale(d), a = new cc.EventTouch(d), a._eventCode = cc.EventTouch.EventCode.MOVED, cc.eventManager.dispatchEvent(a))
}, handleTouchesEnd: function (a) {
    a = this.getSetOfTouchesEndOrCancel(a);
    0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.ENDED,
        cc.eventManager.dispatchEvent(a))
}, handleTouchesCancel: function (a) {
    a = this.getSetOfTouchesEndOrCancel(a);
    0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.CANCELLED, cc.eventManager.dispatchEvent(a))
}, getSetOfTouchesEndOrCancel: function (a) {
    for (var b, c, d, e = [], f = this._touches, g = this._touchesIntegerDict, h = 0, k = a.length; h < k; h++)b = a[h], d = b.getID(), c = g[d], null != c && f[c] && (f[c]._setPoint(b._point), f[c]._setPrevPoint(b._prevPoint), e.push(f[c]), this._removeUsedIndexBit(c),
        delete g[d]);
    return e
}, getHTMLElementPosition: function (a) {
    var b = document.documentElement, c = window, d = null, d = "function" === typeof a.getBoundingClientRect ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {left: 0, top: 0, width: a.width, height: a.height} : {left: 0, top: 0, width: parseInt(a.style.width), height: parseInt(a.style.height)};
    return{left: d.left + c.pageXOffset - b.clientLeft, top: d.top + c.pageYOffset - b.clientTop, width: d.width, height: d.height}
}, getPreTouch: function (a) {
    for (var b = null, c = this._preTouchPool,
             d = a.getId(), e = c.length - 1; 0 <= e; e--)if (c[e].getId() == d) {
        b = c[e];
        break
    }
    b || (b = a);
    return b
}, setPreTouch: function (a) {
    for (var b = !1, c = this._preTouchPool, d = a.getId(), e = c.length - 1; 0 <= e; e--)if (c[e].getId() == d) {
        c[e] = a;
        b = !0;
        break
    }
    b || (50 >= c.length ? c.push(a) : (c[this._preTouchPoolPointer] = a, this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50))
}, getTouchByXY: function (a, b, c) {
    var d = this._preTouchPoint;
    a = this._glView.convertToLocationInView(a, b, c);
    b = new cc.Touch(a.x, a.y);
    b._setPrevPoint(d.x, d.y);
    d.x = a.x;
    d.y = a.y;
    return b
}, getMouseEvent: function (a, b, c) {
    var d = this._prevMousePoint;
    this._glView._convertMouseToLocationInView(a, b);
    b = new cc.EventMouse(c);
    b.setLocation(a.x, a.y);
    b._setPrevCursor(d.x, d.y);
    d.x = a.x;
    d.y = a.y;
    return b
}, getPointByEvent: function (a, b) {
    if (null != a.pageX)return{x: a.pageX, y: a.pageY};
    b.left -= document.body.scrollLeft;
    b.top -= document.body.scrollTop;
    return{x: a.clientX, y: a.clientY}
}, getTouchesByEvent: function (a, b) {
    for (var c = [], d = this._glView, e, f, g = this._preTouchPoint, h = a.changedTouches.length, k = 0; k <
        h; k++)if (e = a.changedTouches[k]) {
        var l;
        l = cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType ? d.convertToLocationInView(e.pageX, e.pageY, b) : d.convertToLocationInView(e.clientX, e.clientY, b);
        null != e.identifier ? (e = new cc.Touch(l.x, l.y, e.identifier), f = this.getPreTouch(e).getLocation(), e._setPrevPoint(f.x, f.y), this.setPreTouch(e)) : (e = new cc.Touch(l.x, l.y), e._setPrevPoint(g.x, g.y));
        g.x = l.x;
        g.y = l.y;
        c.push(e)
    }
    return c
}, registerSystemEvent: function (a) {
    if (!this._isRegisterEvent) {
        var b = this._glView = cc.view, c = this,
            d = "touches"in cc.sys.capabilities;
        "mouse"in cc.sys.capabilities && (cc._addEventListener(window, "mousedown", function () {
            c._mousePressed = !0
        }, !1), cc._addEventListener(window, "mouseup", function (b) {
                var e = c._mousePressed;
                c._mousePressed = !1;
                if (e) {
                    var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
                    cc.rectContainsPoint(new cc.Rect(e.left, e.top, e.width, e.height), f) || (d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y, e)]), e = c.getMouseEvent(f, e, cc.EventMouse.UP), e.setButton(b.button), cc.eventManager.dispatchEvent(e))
                }
            },
            !1), cc._addEventListener(a, "mousedown", function (b) {
            c._mousePressed = !0;
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesBegin([c.getTouchByXY(f.x, f.y, e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.DOWN);
            e.setButton(b.button);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault();
            a.focus()
        }, !1), cc._addEventListener(a, "mouseup", function (b) {
            c._mousePressed = !1;
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y,
                e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.UP);
            e.setButton(b.button);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault()
        }, !1), cc._addEventListener(a, "mousemove", function (b) {
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesMove([c.getTouchByXY(f.x, f.y, e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.MOVE);
            c._mousePressed ? e.setButton(b.button) : e.setButton(null);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault()
        }, !1), cc._addEventListener(a, "mousewheel",
            function (b) {
                var d = c.getHTMLElementPosition(a), e = c.getPointByEvent(b, d), d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
                d.setButton(b.button);
                d.setScrollData(0, b.wheelDelta);
                cc.eventManager.dispatchEvent(d);
                b.stopPropagation();
                b.preventDefault()
            }, !1), cc._addEventListener(a, "DOMMouseScroll", function (b) {
            var d = c.getHTMLElementPosition(a), e = c.getPointByEvent(b, d), d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
            d.setButton(b.button);
            d.setScrollData(0, -120 * b.detail);
            cc.eventManager.dispatchEvent(d);
            b.stopPropagation();
            b.preventDefault()
        }, !1));
        if (window.navigator.msPointerEnabled) {
            var e = {MSPointerDown: c.handleTouchesBegin, MSPointerMove: c.handleTouchesMove, MSPointerUp: c.handleTouchesEnd, MSPointerCancel: c.handleTouchesCancel}, f;
            for (f in e)(function (b, d) {
                cc._addEventListener(a, b, function (b) {
                    var e = c.getHTMLElementPosition(a);
                    e.left -= document.documentElement.scrollLeft;
                    e.top -= document.documentElement.scrollTop;
                    d.call(c, [c.getTouchByXY(b.clientX, b.clientY, e)]);
                    b.stopPropagation()
                }, !1)
            })(f, e[f])
        }
        d && (cc._addEventListener(a,
            "touchstart", function (b) {
                if (b.changedTouches) {
                    var d = c.getHTMLElementPosition(a);
                    d.left -= document.body.scrollLeft;
                    d.top -= document.body.scrollTop;
                    c.handleTouchesBegin(c.getTouchesByEvent(b, d));
                    b.stopPropagation();
                    b.preventDefault();
                    a.focus()
                }
            }, !1), cc._addEventListener(a, "touchmove", function (b) {
            if (b.changedTouches) {
                var d = c.getHTMLElementPosition(a);
                d.left -= document.body.scrollLeft;
                d.top -= document.body.scrollTop;
                c.handleTouchesMove(c.getTouchesByEvent(b, d));
                b.stopPropagation();
                b.preventDefault()
            }
        }, !1),
            cc._addEventListener(a, "touchend", function (b) {
                if (b.changedTouches) {
                    var d = c.getHTMLElementPosition(a);
                    d.left -= document.body.scrollLeft;
                    d.top -= document.body.scrollTop;
                    c.handleTouchesEnd(c.getTouchesByEvent(b, d));
                    b.stopPropagation();
                    b.preventDefault()
                }
            }, !1), cc._addEventListener(a, "touchcancel", function (d) {
                if (d.changedTouches) {
                    var e = c.getHTMLElementPosition(a);
                    e.left -= document.body.scrollLeft;
                    e.top -= document.body.scrollTop;
                    b.handleTouchesCancel(c.getTouchesByEvent(d, e));
                    d.stopPropagation();
                    d.preventDefault()
                }
            },
            !1));
        this._registerKeyboardEvent();
        this._registerAccelerometerEvent();
        this._isRegisterEvent = !0
    }
}, _registerKeyboardEvent: function () {
}, _registerAccelerometerEvent: function () {
}, update: function (a) {
    this._accelCurTime > this._accelInterval && (this._accelCurTime -= this._accelInterval, cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration)));
    this._accelCurTime += a
}};
cc.AffineTransform = function (a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = e;
    this.ty = f
};
cc.AffineTransformMake = function (a, b, c, d, e, f) {
    return{a: a, b: b, c: c, d: d, tx: e, ty: f}
};
cc.PointApplyAffineTransform = function (a, b) {
    return{x: b.a * a.x + b.c * a.y + b.tx, y: b.b * a.x + b.d * a.y + b.ty}
};
cc._PointApplyAffineTransform = function (a, b, c) {
    return{x: c.a * a + c.c * b + c.tx, y: c.b * a + c.d * b + c.ty}
};
cc.SizeApplyAffineTransform = function (a, b) {
    return{width: b.a * a.width + b.c * a.height, height: b.b * a.width + b.d * a.height}
};
cc.AffineTransformMakeIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.AffineTransformIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.RectApplyAffineTransform = function (a, b) {
    var c = cc.rectGetMinY(a), d = cc.rectGetMinX(a), e = cc.rectGetMaxX(a), f = cc.rectGetMaxY(a), g = cc._PointApplyAffineTransform(d, c, b), c = cc._PointApplyAffineTransform(e, c, b), d = cc._PointApplyAffineTransform(d, f, b), h = cc._PointApplyAffineTransform(e, f, b), e = Math.min(g.x, c.x, d.x, h.x), f = Math.max(g.x, c.x, d.x, h.x), k = Math.min(g.y, c.y, d.y, h.y), g = Math.max(g.y, c.y, d.y, h.y);
    return cc.rect(e, k, f - e, g - k)
};
cc._RectApplyAffineTransformIn = function (a, b) {
    var c = cc.rectGetMinY(a), d = cc.rectGetMinX(a), e = cc.rectGetMaxX(a), f = cc.rectGetMaxY(a), g = cc._PointApplyAffineTransform(d, c, b), c = cc._PointApplyAffineTransform(e, c, b), d = cc._PointApplyAffineTransform(d, f, b), h = cc._PointApplyAffineTransform(e, f, b), e = Math.min(g.x, c.x, d.x, h.x), f = Math.max(g.x, c.x, d.x, h.x), k = Math.min(g.y, c.y, d.y, h.y), g = Math.max(g.y, c.y, d.y, h.y);
    a.x = e;
    a.y = k;
    a.width = f - e;
    a.height = g - k;
    return a
};
cc.AffineTransformTranslate = function (a, b, c) {
    return{a: a.a, b: a.b, c: a.c, d: a.d, tx: a.tx + a.a * b + a.c * c, ty: a.ty + a.b * b + a.d * c}
};
cc.AffineTransformScale = function (a, b, c) {
    return{a: a.a * b, b: a.b * b, c: a.c * c, d: a.d * c, tx: a.tx, ty: a.ty}
};
cc.AffineTransformRotate = function (a, b) {
    var c = Math.sin(b), d = Math.cos(b);
    return{a: a.a * d + a.c * c, b: a.b * d + a.d * c, c: a.c * d - a.a * c, d: a.d * d - a.b * c, tx: a.tx, ty: a.ty}
};
cc.AffineTransformConcat = function (a, b) {
    return{a: a.a * b.a + a.b * b.c, b: a.a * b.b + a.b * b.d, c: a.c * b.a + a.d * b.c, d: a.c * b.b + a.d * b.d, tx: a.tx * b.a + a.ty * b.c + b.tx, ty: a.tx * b.b + a.ty * b.d + b.ty}
};
cc.AffineTransformEqualToTransform = function (a, b) {
    return a.a === b.a && a.b === b.b && a.c === b.c && a.d === b.d && a.tx === b.tx && a.ty === b.ty
};
cc.AffineTransformInvert = function (a) {
    var b = 1 / (a.a * a.d - a.b * a.c);
    return{a: b * a.d, b: -b * a.b, c: -b * a.c, d: b * a.a, tx: b * (a.c * a.ty - a.d * a.tx), ty: b * (a.b * a.tx - a.a * a.ty)}
};
cc.POINT_EPSILON = parseFloat("1.192092896e-07F");
cc.pNeg = function (a) {
    return cc.p(-a.x, -a.y)
};
cc.pAdd = function (a, b) {
    return cc.p(a.x + b.x, a.y + b.y)
};
cc.pSub = function (a, b) {
    return cc.p(a.x - b.x, a.y - b.y)
};
cc.pMult = function (a, b) {
    return cc.p(a.x * b, a.y * b)
};
cc.pMidpoint = function (a, b) {
    return cc.pMult(cc.pAdd(a, b), 0.5)
};
cc.pDot = function (a, b) {
    return a.x * b.x + a.y * b.y
};
cc.pCross = function (a, b) {
    return a.x * b.y - a.y * b.x
};
cc.pPerp = function (a) {
    return cc.p(-a.y, a.x)
};
cc.pRPerp = function (a) {
    return cc.p(a.y, -a.x)
};
cc.pProject = function (a, b) {
    return cc.pMult(b, cc.pDot(a, b) / cc.pDot(b, b))
};
cc.pRotate = function (a, b) {
    return cc.p(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
};
cc.pUnrotate = function (a, b) {
    return cc.p(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
};
cc.pLengthSQ = function (a) {
    return cc.pDot(a, a)
};
cc.pDistanceSQ = function (a, b) {
    return cc.pLengthSQ(cc.pSub(a, b))
};
cc.pLength = function (a) {
    return Math.sqrt(cc.pLengthSQ(a))
};
cc.pDistance = function (a, b) {
    return cc.pLength(cc.pSub(a, b))
};
cc.pNormalize = function (a) {
    return cc.pMult(a, 1 / cc.pLength(a))
};
cc.pForAngle = function (a) {
    return cc.p(Math.cos(a), Math.sin(a))
};
cc.pToAngle = function (a) {
    return Math.atan2(a.y, a.x)
};
cc.clampf = function (a, b, c) {
    if (b > c) {
        var d = b;
        b = c;
        c = d
    }
    return a < b ? b : a < c ? a : c
};
cc.pClamp = function (a, b, c) {
    return cc.p(cc.clampf(a.x, b.x, c.x), cc.clampf(a.y, b.y, c.y))
};
cc.pFromSize = function (a) {
    return cc.p(a.width, a.height)
};
cc.pCompOp = function (a, b) {
    return cc.p(b(a.x), b(a.y))
};
cc.pLerp = function (a, b, c) {
    return cc.pAdd(cc.pMult(a, 1 - c), cc.pMult(b, c))
};
cc.pFuzzyEqual = function (a, b, c) {
    return a.x - c <= b.x && b.x <= a.x + c && a.y - c <= b.y && b.y <= a.y + c ? !0 : !1
};
cc.pCompMult = function (a, b) {
    return cc.p(a.x * b.x, a.y * b.y)
};
cc.pAngleSigned = function (a, b) {
    var c = cc.pNormalize(a), d = cc.pNormalize(b), c = Math.atan2(c.x * d.y - c.y * d.x, cc.pDot(c, d));
    return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pAngle = function (a, b) {
    var c = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pRotateByAngle = function (a, b, c) {
    a = cc.pSub(a, b);
    var d = Math.cos(c);
    c = Math.sin(c);
    var e = a.x;
    a.x = e * d - a.y * c + b.x;
    a.y = e * c + a.y * d + b.y;
    return a
};
cc.pLineIntersect = function (a, b, c, d, e) {
    if (a.x == b.x && a.y == b.y || c.x == d.x && c.y == d.y)return!1;
    var f = b.x - a.x;
    b = b.y - a.y;
    var g = d.x - c.x;
    d = d.y - c.y;
    var h = a.x - c.x;
    a = a.y - c.y;
    c = d * f - g * b;
    e.x = g * a - d * h;
    e.y = f * a - b * h;
    if (0 == c)return 0 == e.x || 0 == e.y ? !0 : !1;
    e.x /= c;
    e.y /= c;
    return!0
};
cc.pSegmentIntersect = function (a, b, c, d) {
    var e = cc.p(0, 0);
    return cc.pLineIntersect(a, b, c, d, e) && 0 <= e.x && 1 >= e.x && 0 <= e.y && 1 >= e.y ? !0 : !1
};
cc.pIntersectPoint = function (a, b, c, d) {
    var e = cc.p(0, 0);
    return cc.pLineIntersect(a, b, c, d, e) ? (c = cc.p(0, 0), c.x = a.x + e.x * (b.x - a.x), c.y = a.y + e.x * (b.y - a.y), c) : cc.p(0, 0)
};
cc.pSameAs = function (a, b) {
    return null != a && null != b ? a.x == b.x && a.y == b.y : !1
};
cc.pZeroIn = function (a) {
    a.x = 0;
    a.y = 0
};
cc.pIn = function (a, b) {
    a.x = b.x;
    a.y = b.y
};
cc.pMultIn = function (a, b) {
    a.x *= b;
    a.y *= b
};
cc.pSubIn = function (a, b) {
    a.x -= b.x;
    a.y -= b.y
};
cc.pAddIn = function (a, b) {
    a.x += b.x;
    a.y += b.y
};
cc.pNormalizeIn = function (a) {
    cc.pMultIn(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
cc.Touch = cc.Class.extend({_point: null, _prevPoint: null, _id: 0, _startPointCaptured: !1, _startPoint: null, ctor: function (a, b, c) {
    this._point = cc.p(a || 0, b || 0);
    this._id = c || 0
}, getLocation: function () {
    return{x: this._point.x, y: this._point.y}
}, getLocationX: function () {
    return this._point.x
}, getLocationY: function () {
    return this._point.y
}, getPreviousLocation: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocation: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getDelta: function () {
    return cc.pSub(this._point,
        this._prevPoint)
}, getLocationInView: function () {
    return{x: this._point.x, y: this._point.y}
}, getPreviousLocationInView: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocationInView: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getID: function () {
    return this._id
}, getId: function () {
    return this._id
}, setTouchInfo: function (a, b, c) {
    this._prevPoint = this._point;
    this._point = cc.p(b || 0, c || 0);
    this._id = a;
    this._startPointCaptured || (this._startPoint = cc.p(this._point), this._startPointCaptured = !0)
}, _setPoint: function (a, b) {
    void 0 === b ? (this._point.x = a.x, this._point.y = a.y) : (this._point.x = a, this._point.y = b)
}, _setPrevPoint: function (a, b) {
    this._prevPoint = void 0 === b ? cc.p(a.x, a.y) : cc.p(a || 0, b || 0)
}});
cc.Event = cc.Class.extend({_type: 0, _isStopped: !1, _currentTarget: null, _setCurrentTarget: function (a) {
    this._currentTarget = a
}, ctor: function (a) {
    this._type = a
}, getType: function () {
    return this._type
}, stopPropagation: function () {
    this._isStopped = !0
}, isStopped: function () {
    return this._isStopped
}, getCurrentTarget: function () {
    return this._currentTarget
}});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.CUSTOM = 4;
cc.EventCustom = cc.Event.extend({_eventName: null, _userData: null, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
    this._eventName = a
}, setUserData: function (a) {
    this._userData = a
}, getUserData: function () {
    return this._userData
}, getEventName: function () {
    return this._eventName
}});
cc.EventMouse = cc.Event.extend({_eventType: 0, _button: 0, _x: 0, _y: 0, _prevX: 0, _prevY: 0, _scrollX: 0, _scrollY: 0, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
    this._eventType = a
}, setScrollData: function (a, b) {
    this._scrollX = a;
    this._scrollY = b
}, getScrollX: function () {
    return this._scrollX
}, getScrollY: function () {
    return this._scrollY
}, setLocation: function (a, b) {
    this._x = a;
    this._y = b
}, getLocation: function () {
    return{x: this._x, y: this._y}
}, getLocationInView: function () {
    return{x: this._x, y: cc.view._designResolutionSize.height -
        this._y}
}, _setPrevCursor: function (a, b) {
    this._prevX = a;
    this._prevY = b
}, getDelta: function () {
    return{x: this._x - this._prevX, y: this._y - this._prevY}
}, getDeltaX: function () {
    return this._x - this._prevX
}, getDeltaY: function () {
    return this._y - this._prevY
}, setButton: function (a) {
    this._button = a
}, getButton: function () {
    return this._button
}, getLocationX: function () {
    return this._x
}, getLocationY: function () {
    return this._y
}});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({_eventCode: 0, _touches: null, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
    this._touches = a || []
}, getEventCode: function () {
    return this._eventCode
}, getTouches: function () {
    return this._touches
}, _setEventCode: function (a) {
    this._eventCode = a
}, _setTouches: function (a) {
    this._touches = a
}});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {BEGAN: 0, MOVED: 1, ENDED: 2, CANCELLED: 3};
cc.EventListener = cc.Class.extend({_onEvent: null, _type: 0, _listenerID: null, _registered: !1, _fixedPriority: 0, _node: null, _paused: !1, _isEnabled: !0, ctor: function (a, b, c) {
    this._onEvent = c;
    this._type = a || 0;
    this._listenerID = b || ""
}, _setPaused: function (a) {
    this._paused = a
}, _isPaused: function () {
    return this._paused
}, _setRegistered: function (a) {
    this._registered = a
}, _isRegistered: function () {
    return this._registered
}, _getType: function () {
    return this._type
}, _getListenerID: function () {
    return this._listenerID
}, _setFixedPriority: function (a) {
    this._fixedPriority =
        a
}, _getFixedPriority: function () {
    return this._fixedPriority
}, _setSceneGraphPriority: function (a) {
    this._node = a
}, _getSceneGraphPriority: function () {
    return this._node
}, checkAvailable: function () {
    return null != this._onEvent
}, clone: function () {
    return null
}, setEnabled: function (a) {
    this._isEnabled = a
}, isEnabled: function () {
    return this._isEnabled
}, retain: function () {
}, release: function () {
}});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.CUSTOM = 6;
cc._EventListenerCustom = cc.EventListener.extend({_onCustomEvent: null, ctor: function (a, b) {
    this._onCustomEvent = b;
    var c = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, a, function (a) {
        null != c._onCustomEvent && c._onCustomEvent(a)
    })
}, checkAvailable: function () {
    return cc.EventListener.prototype.checkAvailable.call(this) && null != this._onCustomEvent
}, clone: function () {
    return new cc._EventListenerCustom(this._listenerID, this._onCustomEvent)
}});
cc._EventListenerCustom.create = function (a, b) {
    return new cc._EventListenerCustom(a, b)
};
cc._EventListenerMouse = cc.EventListener.extend({onMouseDown: null, onMouseUp: null, onMouseMove: null, onMouseScroll: null, ctor: function () {
    var a = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID, function (b) {
        var c = cc.EventMouse;
        switch (b._eventType) {
            case c.DOWN:
                if (a.onMouseDown)a.onMouseDown(b);
                break;
            case c.UP:
                if (a.onMouseUp)a.onMouseUp(b);
                break;
            case c.MOVE:
                if (a.onMouseMove)a.onMouseMove(b);
                break;
            case c.SCROLL:
                if (a.onMouseScroll)a.onMouseScroll(b)
        }
    })
},
    clone: function () {
        var a = new cc._EventListenerMouse;
        a.onMouseDown = this.onMouseDown;
        a.onMouseUp = this.onMouseUp;
        a.onMouseMove = this.onMouseMove;
        a.onMouseScroll = this.onMouseScroll;
        return a
    }, checkAvailable: function () {
        return!0
    }});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function () {
    return new cc._EventListenerMouse
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({_claimedTouches: null, swallowTouches: !1, onTouchBegan: null, onTouchMoved: null, onTouchEnded: null, onTouchCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
    this._claimedTouches = []
}, setSwallowTouches: function (a) {
    this.swallowTouches = a
}, clone: function () {
    var a = new cc._EventListenerTouchOneByOne;
    a.onTouchBegan = this.onTouchBegan;
    a.onTouchMoved = this.onTouchMoved;
    a.onTouchEnded = this.onTouchEnded;
    a.onTouchCancelled = this.onTouchCancelled;
    a.swallowTouches = this.swallowTouches;
    return a
}, checkAvailable: function () {
    return!this.onTouchBegan ? (cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable), !1) : !0
}});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function () {
    return new cc._EventListenerTouchOneByOne
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({onTouchesBegan: null, onTouchesMoved: null, onTouchesEnded: null, onTouchesCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null)
}, clone: function () {
    var a = new cc._EventListenerTouchAllAtOnce;
    a.onTouchesBegan = this.onTouchesBegan;
    a.onTouchesMoved = this.onTouchesMoved;
    a.onTouchesEnded = this.onTouchesEnded;
    a.onTouchesCancelled = this.onTouchesCancelled;
    return a
},
    checkAvailable: function () {
        return null == this.onTouchesBegan && null == this.onTouchesMoved && null == this.onTouchesEnded && null == this.onTouchesCancelled ? (cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable), !1) : !0
    }});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function () {
    return new cc._EventListenerTouchAllAtOnce
};
cc.EventListener.create = function (a) {
    cc.assert(a && a.event, cc._LogInfos.EventListener_create);
    var b = a.event;
    delete a.event;
    var c = null;
    b === cc.EventListener.TOUCH_ONE_BY_ONE ? c = new cc._EventListenerTouchOneByOne : b === cc.EventListener.TOUCH_ALL_AT_ONCE ? c = new cc._EventListenerTouchAllAtOnce : b === cc.EventListener.MOUSE ? c = new cc._EventListenerMouse : b === cc.EventListener.CUSTOM ? (c = new cc._EventListenerCustom(a.eventName, a.callback), delete a.eventName, delete a.callback) : b === cc.EventListener.KEYBOARD ? c = new cc._EventListenerKeyboard :
        b === cc.EventListener.ACCELERATION && (c = new cc._EventListenerAcceleration(a.callback), delete a.callback);
    for (var d in a)c[d] = a[d];
    return c
};
cc.copyArray = function (a) {
    var b, c = a.length, d = Array(c);
    for (b = 0; b < c; b += 1)d[b] = a[b];
    return d
};
cc._EventListenerVector = cc.Class.extend({_fixedListeners: null, _sceneGraphListeners: null, gt0Index: 0, ctor: function () {
    this._fixedListeners = [];
    this._sceneGraphListeners = []
}, size: function () {
    return this._fixedListeners.length + this._sceneGraphListeners.length
}, empty: function () {
    return 0 === this._fixedListeners.length && 0 === this._sceneGraphListeners.length
}, push: function (a) {
    0 == a._getFixedPriority() ? this._sceneGraphListeners.push(a) : this._fixedListeners.push(a)
}, clearSceneGraphListeners: function () {
    this._sceneGraphListeners.length =
        0
}, clearFixedListeners: function () {
    this._fixedListeners.length = 0
}, clear: function () {
    this._sceneGraphListeners.length = 0;
    this._fixedListeners.length = 0
}, getFixedPriorityListeners: function () {
    return this._fixedListeners
}, getSceneGraphPriorityListeners: function () {
    return this._sceneGraphListeners
}});
cc.__getListenerID = function (a) {
    var b = cc.Event, c = a.getType();
    if (c === b.ACCELERATION)return cc._EventListenerAcceleration.LISTENER_ID;
    if (c === b.CUSTOM)return a.getEventName();
    if (c === b.KEYBOARD)return cc._EventListenerKeyboard.LISTENER_ID;
    if (c === b.MOUSE)return cc._EventListenerMouse.LISTENER_ID;
    c === b.TOUCH && cc.log(cc._LogInfos.__getListenerID);
    return""
};
cc.eventManager = {DIRTY_NONE: 0, DIRTY_FIXED_PRIORITY: 1, DIRTY_SCENE_GRAPH_PRIORITY: 2, DIRTY_ALL: 3, _listenersMap: {}, _priorityDirtyFlagMap: {}, _nodeListenersMap: {}, _nodePriorityMap: {}, _globalZOrderNodeMap: {}, _toAddedListeners: [], _dirtyNodes: [], _inDispatch: 0, _isEnabled: !1, _nodePriorityIndex: 0, _internalCustomListenerIDs: [cc.game.EVENT_HIDE, cc.game.EVENT_SHOW], _setDirtyForNode: function (a) {
    null != this._nodeListenersMap[a.__instanceId] && this._dirtyNodes.push(a);
    a = a.getChildren();
    for (var b = 0, c = a.length; b < c; b++)this._setDirtyForNode(a[b])
},
    pauseTarget: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId], d, e;
        if (c) {
            d = 0;
            for (e = c.length; d < e; d++)c[d]._setPaused(!0)
        }
        if (!0 === b) {
            c = a.getChildren();
            d = 0;
            for (e = c.length; d < e; d++)this.pauseTarget(c[d], !0)
        }
    }, resumeTarget: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId], d, e;
        if (c) {
            d = 0;
            for (e = c.length; d < e; d++)c[d]._setPaused(!1)
        }
        this._setDirtyForNode(a);
        if (!0 === b) {
            c = a.getChildren();
            d = 0;
            for (e = c.length; d < e; d++)this.resumeTarget(c[d], !0)
        }
    }, _addListener: function (a) {
        0 === this._inDispatch ? this._forceAddEventListener(a) :
            this._toAddedListeners.push(a)
    }, _forceAddEventListener: function (a) {
        var b = a._getListenerID(), c = this._listenersMap[b];
        c || (c = new cc._EventListenerVector, this._listenersMap[b] = c);
        c.push(a);
        0 == a._getFixedPriority() ? (this._setDirty(b, this.DIRTY_SCENE_GRAPH_PRIORITY), b = a._getSceneGraphPriority(), null == b && cc.log(cc._LogInfos.eventManager__forceAddEventListener), this._associateNodeAndEventListener(b, a), b.isRunning() && this.resumeTarget(b)) : this._setDirty(b, this.DIRTY_FIXED_PRIORITY)
    }, _getListeners: function (a) {
        return this._listenersMap[a]
    },
    _updateDirtyFlagForSceneGraph: function () {
        if (0 != this._dirtyNodes.length) {
            for (var a = this._dirtyNodes, b, c, d = this._nodeListenersMap, e = 0, f = a.length; e < f; e++)if (b = d[a[e].__instanceId])for (var g = 0, h = b.length; g < h; g++)(c = b[g]) && this._setDirty(c._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
            this._dirtyNodes.length = 0
        }
    }, _removeAllListenersInVector: function (a) {
        if (a)for (var b, c = 0; c < a.length;)b = a[c], b._setRegistered(!1), null != b._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(b._getSceneGraphPriority(),
            b), b._setSceneGraphPriority(null)), 0 === this._inDispatch ? cc.arrayRemoveObject(a, b) : ++c
    }, _removeListenersForListenerID: function (a) {
        var b = this._listenersMap[a];
        if (b) {
            var c = b.getFixedPriorityListeners(), d = b.getSceneGraphPriorityListeners();
            this._removeAllListenersInVector(d);
            this._removeAllListenersInVector(c);
            delete this._priorityDirtyFlagMap[a];
            this._inDispatch || (b.clear(), delete this._listenersMap[a])
        }
        c = this._toAddedListeners;
        for (b = 0; b < c.length;)(d = c[b]) && d._getListenerID() == a ? cc.arrayRemoveObject(c,
            d) : ++b
    }, _sortEventListeners: function (a) {
        var b = this.DIRTY_NONE, c = this._priorityDirtyFlagMap;
        c[a] && (b = c[a]);
        b != this.DIRTY_NONE && (c[a] = this.DIRTY_NONE, b & this.DIRTY_FIXED_PRIORITY && this._sortListenersOfFixedPriority(a), b & this.DIRTY_SCENE_GRAPH_PRIORITY && ((b = cc.director.getRunningScene()) ? this._sortListenersOfSceneGraphPriority(a, b) : c[a] = this.DIRTY_SCENE_GRAPH_PRIORITY))
    }, _sortListenersOfSceneGraphPriority: function (a, b) {
        var c = this._getListeners(a);
        if (c) {
            var d = c.getSceneGraphPriorityListeners();
            d && 0 !==
                d.length && (this._nodePriorityIndex = 0, this._nodePriorityMap = {}, this._visitTarget(b, !0), c.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes))
        }
    }, _sortEventListenersOfSceneGraphPriorityDes: function (a, b) {
        var c = cc.eventManager._nodePriorityMap;
        return c[b._getSceneGraphPriority().__instanceId] - c[a._getSceneGraphPriority().__instanceId]
    }, _sortListenersOfFixedPriority: function (a) {
        if (a = this._listenersMap[a]) {
            var b = a.getFixedPriorityListeners();
            if (b && 0 !== b.length) {
                b.sort(this._sortListenersOfFixedPriorityAsc);
                for (var c = 0, d = b.length; c < d && !(0 <= b[c]._getFixedPriority());)++c;
                a.gt0Index = c
            }
        }
    }, _sortListenersOfFixedPriorityAsc: function (a, b) {
        return a._getFixedPriority() - b._getFixedPriority()
    }, _onUpdateListeners: function (a) {
        if (a = this._listenersMap[a]) {
            var b = a.getFixedPriorityListeners(), c = a.getSceneGraphPriorityListeners(), d, e;
            if (c)for (d = 0; d < c.length;)e = c[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(c, e);
            if (b)for (d = 0; d < b.length;)e = b[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(b, e);
            c && 0 === c.length && a.clearSceneGraphListeners();
            b && 0 === b.length && a.clearFixedListeners()
        }
    }, _updateListeners: function (a) {
        var b = this._inDispatch;
        cc.assert(0 < b, cc._LogInfos.EventManager__updateListeners);
        a.getType() == cc.Event.TOUCH ? (this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID)) : this._onUpdateListeners(cc.__getListenerID(a));
        if (!(1 < b)) {
            cc.assert(1 == b, cc._LogInfos.EventManager__updateListeners_2);
            a = this._listenersMap;
            var b = this._priorityDirtyFlagMap, c;
            for (c in a)a[c].empty() &&
            (delete b[c], delete a[c]);
            c = this._toAddedListeners;
            if (0 !== c.length) {
                a = 0;
                for (b = c.length; a < b; a++)this._forceAddEventListener(c[a]);
                this._toAddedListeners.length = 0
            }
        }
    }, _onTouchEventCallback: function (a, b) {
        if (!a._isRegistered)return!1;
        var c = b.event, d = b.selTouch;
        c._setCurrentTarget(a._node);
        var e = !1, f, g = c.getEventCode(), h = cc.EventTouch.EventCode;
        if (g == h.BEGAN)a.onTouchBegan && (e = a.onTouchBegan(d, c)) && a._registered && a._claimedTouches.push(d); else if (0 < a._claimedTouches.length && -1 != (f = a._claimedTouches.indexOf(d)))if (e = !0, g === h.MOVED && a.onTouchMoved)a.onTouchMoved(d, c); else if (g === h.ENDED) {
            if (a.onTouchEnded)a.onTouchEnded(d, c);
            a._registered && a._claimedTouches.splice(f, 1)
        } else if (g === h.CANCELLED) {
            if (a.onTouchCancelled)a.onTouchCancelled(d, c);
            a._registered && a._claimedTouches.splice(f, 1)
        }
        return c.isStopped() ? (cc.eventManager._updateListeners(c), !0) : e && a._registered && a.swallowTouches ? (b.needsMutableSet && b.touches.splice(d, 1), !0) : !1
    }, _dispatchTouchEvent: function (a) {
        this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        var b = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), c = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        if (!(null == b && null == c)) {
            var d = a.getTouches(), e = cc.copyArray(d), f = {event: a, needsMutableSet: b && c, touches: e, selTouch: null};
            if (b)for (var g = 0; g < d.length; g++)if (f.selTouch = d[g], this._dispatchEventToListeners(b, this._onTouchEventCallback, f), a.isStopped())return;
            if (c && 0 < e.length && (this._dispatchEventToListeners(c,
                this._onTouchesEventCallback, {event: a, touches: e}), a.isStopped()))return;
            this._updateListeners(a)
        }
    }, _onTouchesEventCallback: function (a, b) {
        if (!a._registered)return!1;
        var c = cc.EventTouch.EventCode, d = b.event, e = b.touches, f = d.getEventCode();
        d._setCurrentTarget(a._node);
        if (f == c.BEGAN && a.onTouchesBegan)a.onTouchesBegan(e, d); else if (f == c.MOVED && a.onTouchesMoved)a.onTouchesMoved(e, d); else if (f == c.ENDED && a.onTouchesEnded)a.onTouchesEnded(e, d); else if (f == c.CANCELLED && a.onTouchesCancelled)a.onTouchesCancelled(e,
            d);
        return d.isStopped() ? (cc.eventManager._updateListeners(d), !0) : !1
    }, _associateNodeAndEventListener: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId];
        c || (c = [], this._nodeListenersMap[a.__instanceId] = c);
        c.push(b)
    }, _dissociateNodeAndEventListener: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId];
        c && (cc.arrayRemoveObject(c, b), 0 === c.length && delete this._nodeListenersMap[a.__instanceId])
    }, _dispatchEventToListeners: function (a, b, c) {
        var d = !1, e = a.getFixedPriorityListeners(), f = a.getSceneGraphPriorityListeners(),
            g = 0, h;
        if (e && 0 !== e.length)for (; g < a.gt0Index; ++g)if (h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
            d = !0;
            break
        }
        if (f && !d)for (a = 0; a < f.length; a++)if (h = f[a], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
            d = !0;
            break
        }
        if (e && !d)for (; g < e.length && !(h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)); ++g);
    }, _setDirty: function (a, b) {
        var c = this._priorityDirtyFlagMap;
        c[a] = null == c[a] ? b : b | c[a]
    }, _visitTarget: function (a, b) {
        var c = a.getChildren(), d = 0, e = c.length, f = this._globalZOrderNodeMap,
            g = this._nodeListenersMap;
        if (0 < e) {
            for (var h; d < e; d++)if ((h = c[d]) && 0 > h.getLocalZOrder())this._visitTarget(h, !1); else break;
            null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
            for (; d < e; d++)(h = c[d]) && this._visitTarget(h, !1)
        } else null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
        if (b) {
            var c = [], k;
            for (k in f)c.push(k);
            c.sort(this._sortNumberAsc);
            k = c.length;
            h = this._nodePriorityMap;
            for (d = 0; d < k; d++) {
                e = f[c[d]];
                for (g = 0; g < e.length; g++)h[e[g]] = ++this._nodePriorityIndex
            }
            this._globalZOrderNodeMap = {}
        }
    }, _sortNumberAsc: function (a, b) {
        return a - b
    }, addListener: function (a, b) {
        cc.assert(a && b, cc._LogInfos.eventManager_addListener_2);
        if (a instanceof cc.EventListener) {
            if (a._isRegistered()) {
                cc.log(cc._LogInfos.eventManager_addListener_4);
                return
            }
        } else cc.assert("number" !== typeof b, cc._LogInfos.eventManager_addListener_3), a = cc.EventListener.create(a);
        a.checkAvailable() && ("number" == typeof b ? 0 == b ? cc.log(cc._LogInfos.eventManager_addListener) :
            (a._setSceneGraphPriority(null), a._setFixedPriority(b), a._setRegistered(!0), a._setPaused(!1), this._addListener(a)) : (a._setSceneGraphPriority(b), a._setFixedPriority(0), a._setRegistered(!0), this._addListener(a)))
    }, addCustomListener: function (a, b) {
        var c = cc._EventListenerCustom.create(a, b);
        this.addListener(c, 1);
        return c
    }, removeListener: function (a) {
        if (null != a) {
            var b, c = this._listenersMap, d;
            for (d in c) {
                var e = c[d], f = e.getFixedPriorityListeners();
                b = e.getSceneGraphPriorityListeners();
                (b = this._removeListenerInVector(b,
                    a)) ? this._setDirty(a._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY) : (b = this._removeListenerInVector(f, a)) && this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY);
                e.empty() && (delete this._priorityDirtyFlagMap[a._getListenerID()], delete c[d]);
                if (b)break
            }
            if (!b) {
                c = this._toAddedListeners;
                d = 0;
                for (e = c.length; d < e; d++)if (f = c[d], f == a) {
                    cc.arrayRemoveObject(c, f);
                    break
                }
            }
        }
    }, _removeListenerInVector: function (a, b) {
        if (null == a)return!1;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (e == b)return e._setRegistered(!1),
                null != e._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(e._getSceneGraphPriority(), e), e._setSceneGraphPriority(null)), 0 == this._inDispatch && cc.arrayRemoveObject(a, e), !0
        }
        return!1
    }, removeListeners: function (a, b) {
        if (a instanceof cc.Node) {
            delete this._nodePriorityMap[a.__instanceId];
            cc.arrayRemoveObject(this._dirtyNodes, a);
            var c = this._nodeListenersMap[a.__instanceId];
            if (c) {
                for (var d = cc.copyArray(c), c = 0; c < d.length; c++)this.removeListener(d[c]);
                d.length = 0;
                d = this._toAddedListeners;
                for (c = 0; c <
                    d.length;) {
                    var e = d[c];
                    e._getSceneGraphPriority() == a ? (e._setSceneGraphPriority(null), e._setRegistered(!1), d.splice(c, 1)) : ++c
                }
                if (!0 === b) {
                    d = a.getChildren();
                    c = 0;
                    for (e = d.length; c < e; c++)this.removeListeners(d[c], !0)
                }
            }
        } else a == cc.EventListener.TOUCH_ONE_BY_ONE ? this._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID) : a == cc.EventListener.TOUCH_ALL_AT_ONCE ? this._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID) : a == cc.EventListener.MOUSE ? this._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID) :
                a == cc.EventListener.ACCELERATION ? this._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID) : a == cc.EventListener.KEYBOARD ? this._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID) : cc.log(cc._LogInfos.eventManager_removeListeners)
    }, removeCustomListeners: function (a) {
        this._removeListenersForListenerID(a)
    }, removeAllListeners: function () {
        var a = this._listenersMap, b = this._internalCustomListenerIDs, c;
        for (c in a)-1 === b.indexOf(c) && this._removeListenersForListenerID(c)
    }, setPriority: function (a, b) {
        if (null != a) {
            var c = this._listenersMap, d;
            for (d in c) {
                var e = c[d].getFixedPriorityListeners();
                if (e && -1 != e.indexOf(a)) {
                    null != a._getSceneGraphPriority() && cc.log(cc._LogInfos.eventManager_setPriority);
                    a._getFixedPriority() !== b && (a._setFixedPriority(b), this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY));
                    break
                }
            }
        }
    }, setEnabled: function (a) {
        this._isEnabled = a
    }, isEnabled: function () {
        return this._isEnabled
    }, dispatchEvent: function (a) {
        if (this._isEnabled) {
            this._updateDirtyFlagForSceneGraph();
            this._inDispatch++;
            if (!a || !a.getType)throw"event is undefined";
            if (a.getType() == cc.Event.TOUCH)this._dispatchTouchEvent(a); else {
                var b = cc.__getListenerID(a);
                this._sortEventListeners(b);
                b = this._listenersMap[b];
                null != b && this._dispatchEventToListeners(b, this._onListenerCallback, a);
                this._updateListeners(a)
            }
            this._inDispatch--
        }
    }, _onListenerCallback: function (a, b) {
        b._setCurrentTarget(a._getSceneGraphPriority());
        a._onEvent(b);
        return b.isStopped()
    }, dispatchCustomEvent: function (a, b) {
        var c = new cc.EventCustom(a);
        c.setUserData(b);
        this.dispatchEvent(c)
    }};
cc._tmp.PrototypeCCNode = function () {
    var a = cc.Node.prototype;
    cc.defineGetterSetter(a, "x", a.getPositionX, a.setPositionX);
    cc.defineGetterSetter(a, "y", a.getPositionY, a.setPositionY);
    cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
    cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight);
    cc.defineGetterSetter(a, "anchorX", a._getAnchorX, a._setAnchorX);
    cc.defineGetterSetter(a, "anchorY", a._getAnchorY, a._setAnchorY);
    cc.defineGetterSetter(a, "skewX", a.getSkewX, a.setSkewX);
    cc.defineGetterSetter(a, "skewY",
        a.getSkewY, a.setSkewY);
    cc.defineGetterSetter(a, "zIndex", a.getLocalZOrder, a.setLocalZOrder);
    cc.defineGetterSetter(a, "vertexZ", a.getVertexZ, a.setVertexZ);
    cc.defineGetterSetter(a, "rotation", a.getRotation, a.setRotation);
    cc.defineGetterSetter(a, "rotationX", a.getRotationX, a.setRotationX);
    cc.defineGetterSetter(a, "rotationY", a.getRotationY, a.setRotationY);
    cc.defineGetterSetter(a, "scale", a.getScale, a.setScale);
    cc.defineGetterSetter(a, "scaleX", a.getScaleX, a.setScaleX);
    cc.defineGetterSetter(a, "scaleY", a.getScaleY,
        a.setScaleY);
    cc.defineGetterSetter(a, "children", a.getChildren);
    cc.defineGetterSetter(a, "childrenCount", a.getChildrenCount);
    cc.defineGetterSetter(a, "parent", a.getParent, a.setParent);
    cc.defineGetterSetter(a, "visible", a.isVisible, a.setVisible);
    cc.defineGetterSetter(a, "running", a.isRunning);
    cc.defineGetterSetter(a, "ignoreAnchor", a.isIgnoreAnchorPointForPosition, a.ignoreAnchorPointForPosition);
    cc.defineGetterSetter(a, "actionManager", a.getActionManager, a.setActionManager);
    cc.defineGetterSetter(a, "scheduler",
        a.getScheduler, a.setScheduler);
    cc.defineGetterSetter(a, "shaderProgram", a.getShaderProgram, a.setShaderProgram);
    cc.defineGetterSetter(a, "glServerState", a.getGLServerState, a.setGLServerState)
};
cc._tmp.PrototypeCCNodeRGBA = function () {
    var a = cc.NodeRGBA.prototype;
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({_localZOrder: 0, _globalZOrder: 0, _vertexZ: 0, _rotationX: 0, _rotationY: 0, _scaleX: 1, _scaleY: 1, _position: null, _skewX: 0, _skewY: 0, _children: null, _visible: !0, _anchorPoint: null, _anchorPointInPoints: null, _contentSize: null, _running: !1, _parent: null, _ignoreAnchorPointForPosition: !1, tag: cc.NODE_TAG_INVALID, userData: null, userObject: null, _transformDirty: !0, _inverseDirty: !0, _cacheDirty: !0, _cachedParent: null, _transformGLDirty: null, _transform: null, _inverse: null, _reorderChildDirty: !1, _shaderProgram: null,
    arrivalOrder: 0, _actionManager: null, _scheduler: null, _eventDispatcher: null, _initializedNode: !1, _additionalTransformDirty: !1, _additionalTransform: null, _componentContainer: null, _isTransitionFinished: !1, _rotationRadiansX: 0, _rotationRadiansY: 0, _className: "Node", _showNode: !1, _name: "", _initNode: function () {
        this._anchorPoint = cc.p(0, 0);
        this._anchorPointInPoints = cc.p(0, 0);
        this._contentSize = cc.size(0, 0);
        this._position = cc.p(0, 0);
        this._children = [];
        this._transform = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
        var a = cc.director;
        this._actionManager =
            a.getActionManager();
        this._scheduler = a.getScheduler();
        this._initializedNode = !0;
        this._additionalTransform = cc.AffineTransformMakeIdentity();
        cc.ComponentContainer && (this._componentContainer = new cc.ComponentContainer(this))
    }, init: function () {
        !1 === this._initializedNode && this._initNode();
        return!0
    }, _arrayMakeObjectsPerformSelector: function (a, b) {
        if (a && 0 !== a.length) {
            var c, d = a.length, e;
            c = cc.Node.StateCallbackType;
            switch (b) {
                case c.onEnter:
                    for (c = 0; c < d; c++)if (e = a[c])e.onEnter();
                    break;
                case c.onExit:
                    for (c = 0; c < d; c++)if (e =
                        a[c])e.onExit();
                    break;
                case c.onEnterTransitionDidFinish:
                    for (c = 0; c < d; c++)if (e = a[c])e.onEnterTransitionDidFinish();
                    break;
                case c.cleanup:
                    for (c = 0; c < d; c++)(e = a[c]) && e.cleanup();
                    break;
                case c.updateTransform:
                    for (c = 0; c < d; c++)(e = a[c]) && e.updateTransform();
                    break;
                case c.onExitTransitionDidStart:
                    for (c = 0; c < d; c++)if (e = a[c])e.onExitTransitionDidStart();
                    break;
                case c.sortAllChildren:
                    for (c = 0; c < d; c++)(e = a[c]) && e.sortAllChildren();
                    break;
                default:
                    cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector)
            }
        }
    }, setNodeDirty: null,
    attr: function (a) {
        for (var b in a)this[b] = a[b]
    }, getSkewX: function () {
        return this._skewX
    }, setSkewX: function (a) {
        this._skewX = a;
        this.setNodeDirty()
    }, getSkewY: function () {
        return this._skewY
    }, setSkewY: function (a) {
        this._skewY = a;
        this.setNodeDirty()
    }, setLocalZOrder: function (a) {
        this._localZOrder = a;
        this._parent && this._parent.reorderChild(this, a);
        cc.eventManager._setDirtyForNode(this)
    }, _setLocalZOrder: function (a) {
        this._localZOrder = a
    }, getLocalZOrder: function () {
        return this._localZOrder
    }, getZOrder: function () {
        cc.log(cc._LogInfos.Node_getZOrder);
        return this.getLocalZOrder()
    }, setZOrder: function (a) {
        cc.log(cc._LogInfos.Node_setZOrder);
        this.setLocalZOrder(a)
    }, setGlobalZOrder: function (a) {
        this._globalZOrder != a && (this._globalZOrder = a, cc.eventManager._setDirtyForNode(this))
    }, getGlobalZOrder: function () {
        return this._globalZOrder
    }, getVertexZ: function () {
        return this._vertexZ
    }, setVertexZ: function (a) {
        this._vertexZ = a
    }, getRotation: function () {
        this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node_getRotation);
        return this._rotationX
    }, setRotation: function (a) {
        this._rotationX =
            this._rotationY = a;
        this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
        this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
        this.setNodeDirty()
    }, getRotationX: function () {
        return this._rotationX
    }, setRotationX: function (a) {
        this._rotationX = a;
        this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
        this.setNodeDirty()
    }, getRotationY: function () {
        return this._rotationY
    }, setRotationY: function (a) {
        this._rotationY = a;
        this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
        this.setNodeDirty()
    },
    getScale: function () {
        this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node_getScale);
        return this._scaleX
    }, setScale: function (a, b) {
        this._scaleX = a;
        this._scaleY = b || 0 === b ? b : a;
        this.setNodeDirty()
    }, getScaleX: function () {
        return this._scaleX
    }, setScaleX: function (a) {
        this._scaleX = a;
        this.setNodeDirty()
    }, getScaleY: function () {
        return this._scaleY
    }, setScaleY: function (a) {
        this._scaleY = a;
        this.setNodeDirty()
    }, setPosition: function (a, b) {
        var c = this._position;
        void 0 === b ? (c.x = a.x, c.y = a.y) : (c.x = a, c.y = b);
        this.setNodeDirty()
    },
    getPosition: function () {
        return cc.p(this._position)
    }, getPositionX: function () {
        return this._position.x
    }, setPositionX: function (a) {
        this._position.x = a;
        this.setNodeDirty()
    }, getPositionY: function () {
        return this._position.y
    }, setPositionY: function (a) {
        this._position.y = a;
        this.setNodeDirty()
    }, getChildrenCount: function () {
        return this._children.length
    }, getChildren: function () {
        return this._children
    }, isVisible: function () {
        return this._visible
    }, setVisible: function (a) {
        this._visible = a;
        this.setNodeDirty()
    }, getAnchorPoint: function () {
        return this._anchorPoint
    },
    setAnchorPoint: function (a, b) {
        var c = this._anchorPoint;
        if (void 0 === b) {
            if (a.x === c.x && a.y === c.y)return;
            c.x = a.x;
            c.y = a.y
        } else {
            if (a === c.x && b === c.y)return;
            c.x = a;
            c.y = b
        }
        var d = this._anchorPointInPoints, e = this._contentSize;
        d.x = e.width * c.x;
        d.y = e.height * c.y;
        this.setNodeDirty()
    }, _getAnchor: function () {
        return this._anchorPoint
    }, _setAnchor: function (a) {
        var b = a.x;
        a = a.y;
        this._anchorPoint.x !== b && (this._anchorPoint.x = b, this._anchorPointInPoints.x = this._contentSize.width * b);
        this._anchorPoint.y !== a && (this._anchorPoint.y =
            a, this._anchorPointInPoints.y = this._contentSize.height * a);
        this.setNodeDirty()
    }, _getAnchorX: function () {
        return this._anchorPoint.x
    }, _setAnchorX: function (a) {
        this._anchorPoint.x !== a && (this._anchorPoint.x = a, this._anchorPointInPoints.x = this._contentSize.width * a, this.setNodeDirty())
    }, _getAnchorY: function () {
        return this._anchorPoint.y
    }, _setAnchorY: function (a) {
        this._anchorPoint.y !== a && (this._anchorPoint.y = a, this._anchorPointInPoints.y = this._contentSize.height * a, this.setNodeDirty())
    }, getAnchorPointInPoints: function () {
        return this._anchorPointInPoints
    },
    _getWidth: function () {
        return this._contentSize.width
    }, _setWidth: function (a) {
        this._contentSize.width = a;
        this._anchorPointInPoints.x = a * this._anchorPoint.x;
        this.setNodeDirty()
    }, _getHeight: function () {
        return this._contentSize.height
    }, _setHeight: function (a) {
        this._contentSize.height = a;
        this._anchorPointInPoints.y = a * this._anchorPoint.y;
        this.setNodeDirty()
    }, getContentSize: function () {
        return this._contentSize
    }, setContentSize: function (a, b) {
        var c = this._contentSize;
        if (void 0 === b) {
            if (a.width === c.width && a.height ===
                c.height)return;
            c.width = a.width;
            c.height = a.height
        } else {
            if (a === c.width && b === c.height)return;
            c.width = a;
            c.height = b
        }
        var d = this._anchorPointInPoints, e = this._anchorPoint;
        d.x = c.width * e.x;
        d.y = c.height * e.y;
        this.setNodeDirty()
    }, isRunning: function () {
        return this._running
    }, getParent: function () {
        return this._parent
    }, setParent: function (a) {
        this._parent = a
    }, isIgnoreAnchorPointForPosition: function () {
        return this._ignoreAnchorPointForPosition
    }, ignoreAnchorPointForPosition: function (a) {
        a != this._ignoreAnchorPointForPosition &&
        (this._ignoreAnchorPointForPosition = a, this.setNodeDirty())
    }, getTag: function () {
        return this.tag
    }, setTag: function (a) {
        this.tag = a
    }, setName: function (a) {
        this._name
    }, getName: function () {
        return this._name
    }, getUserData: function () {
        return this.userData
    }, setUserData: function (a) {
        this.userData = a
    }, getUserObject: function () {
        return this.userObject
    }, setUserObject: function (a) {
        this.userObject != a && (this.userObject = a)
    }, getOrderOfArrival: function () {
        return this.arrivalOrder
    }, setOrderOfArrival: function (a) {
        this.arrivalOrder =
            a
    }, getActionManager: function () {
        this._actionManager || (this._actionManager = cc.director.getActionManager());
        return this._actionManager
    }, setActionManager: function (a) {
        this._actionManager != a && (this.stopAllActions(), this._actionManager = a)
    }, getScheduler: function () {
        this._scheduler || (this._scheduler = cc.director.getScheduler());
        return this._scheduler
    }, setScheduler: function (a) {
        this._scheduler != a && (this.unscheduleAllCallbacks(), this._scheduler = a)
    }, getBoundingBox: function () {
        var a = cc.rect(0, 0, this._contentSize.width,
            this._contentSize.height);
        return cc._RectApplyAffineTransformIn(a, this.nodeToParentTransform())
    }, cleanup: function () {
        this.stopAllActions();
        this.unscheduleAllCallbacks();
        cc.eventManager.removeListeners(this);
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
    }, getChildByTag: function (a) {
        var b = this._children;
        if (null != b)for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if (d && d.tag == a)return d
        }
        return null
    }, getChildByName: function (a) {
        if (!a)return cc.log("Invalid name"), null;
        for (var b =
            this._children, c = 0, d = b.length; c < d; c++)if (b[c]._name == a)return b[c];
        return null
    }, addChild: function (a, b, c) {
        cc.assert(a, cc._LogInfos.Node_addChild_3);
        if (a === this)cc.log(cc._LogInfos.Node_addChild); else if (null !== a._parent)cc.log(cc._LogInfos.Node_addChild_2); else if (b = null != b ? b : a._localZOrder, a.tag = null != c ? c : a.tag, this._insertChild(a, b), a._parent = this, this._cachedParent && (a._cachedParent = this._cachedParent), this._running && (a.onEnter(), this._isTransitionFinished))a.onEnterTransitionDidFinish()
    }, removeFromParent: function (a) {
        this._parent &&
        (null == a && (a = !0), this._parent.removeChild(this, a))
    }, removeFromParentAndCleanup: function (a) {
        cc.log(cc._LogInfos.Node_removeFromParentAndCleanup);
        this.removeFromParent(a)
    }, removeChild: function (a, b) {
        0 !== this._children.length && (null == b && (b = !0), -1 < this._children.indexOf(a) && this._detachChild(a, b), this.setNodeDirty())
    }, removeChildByTag: function (a, b) {
        a === cc.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node_removeChildByTag);
        var c = this.getChildByTag(a);
        null == c ? cc.log(cc._LogInfos.Node_removeChildByTag_2, a) : this.removeChild(c,
            b)
    }, removeAllChildrenWithCleanup: function (a) {
        cc.log(cc._LogInfos.Node_removeAllChildrenWithCleanup);
        this.removeAllChildren(a)
    }, removeAllChildren: function (a) {
        var b = this._children;
        if (null != b) {
            null == a && (a = !0);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d && (this._running && (d.onExitTransitionDidStart(), d.onExit()), a && d.cleanup(), d.parent = null)
            }
            this._children.length = 0
        }
    }, _detachChild: function (a, b) {
        this._running && (a.onExitTransitionDidStart(), a.onExit());
        b && a.cleanup();
        a.parent = null;
        cc.arrayRemoveObject(this._children,
            a)
    }, _insertChild: function (a, b) {
        this._reorderChildDirty = !0;
        this._children.push(a);
        a._setLocalZOrder(b)
    }, reorderChild: function (a, b) {
        cc.assert(a, cc._LogInfos.Node_reorderChild);
        this._reorderChildDirty = !0;
        a.arrivalOrder = cc.s_globalOrderOfArrival;
        cc.s_globalOrderOfArrival++;
        a._setLocalZOrder(b);
        this.setNodeDirty()
    }, sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var a = this._children, b = a.length, c, d, e;
            for (c = 1; c < b; c++) {
                e = a[c];
                for (d = c - 1; 0 <= d;) {
                    if (e._localZOrder < a[d]._localZOrder)a[d + 1] = a[d]; else if (e._localZOrder ===
                        a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder)a[d + 1] = a[d]; else break;
                    d--
                }
                a[d + 1] = e
            }
            this._reorderChildDirty = !1
        }
    }, draw: function (a) {
    }, transformAncestors: function () {
        null != this._parent && (this._parent.transformAncestors(), this._parent.transform())
    }, onEnter: function () {
        this._isTransitionFinished = !1;
        this._running = !0;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter);
        this.resume()
    }, onEnterTransitionDidFinish: function () {
        this._isTransitionFinished = !0;
        this._arrayMakeObjectsPerformSelector(this._children,
            cc.Node.StateCallbackType.onEnterTransitionDidFinish)
    }, onExitTransitionDidStart: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
    }, onExit: function () {
        this._running = !1;
        this.pause();
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit);
        this._componentContainer && this._componentContainer.removeAll()
    }, runAction: function (a) {
        cc.assert(a, cc._LogInfos.Node_runAction);
        this.actionManager.addAction(a, this, !this._running);
        return a
    }, stopAllActions: function () {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this)
    }, stopAction: function (a) {
        this.actionManager.removeAction(a)
    }, stopActionByTag: function (a) {
        a === cc.ACTION_TAG_INVALID ? cc.log(cc._LogInfos.Node_stopActionByTag) : this.actionManager.removeActionByTag(a, this)
    }, getActionByTag: function (a) {
        return a === cc.ACTION_TAG_INVALID ? (cc.log(cc._LogInfos.Node_getActionByTag), null) : this.actionManager.getActionByTag(a, this)
    }, getNumberOfRunningActions: function () {
        return this.actionManager.numberOfRunningActionsInTarget(this)
    },
    scheduleUpdate: function () {
        this.scheduleUpdateWithPriority(0)
    }, scheduleUpdateWithPriority: function (a) {
        this.scheduler.scheduleUpdateForTarget(this, a, !this._running)
    }, unscheduleUpdate: function () {
        this.scheduler.unscheduleUpdateForTarget(this)
    }, schedule: function (a, b, c, d) {
        b = b || 0;
        cc.assert(a, cc._LogInfos.Node_schedule);
        cc.assert(0 <= b, cc._LogInfos.Node_schedule_2);
        c = null == c ? cc.REPEAT_FOREVER : c;
        this.scheduler.scheduleCallbackForTarget(this, a, b, c, d || 0, !this._running)
    }, scheduleOnce: function (a, b) {
        this.schedule(a,
            0, 0, b)
    }, unschedule: function (a) {
        a && this.scheduler.unscheduleCallbackForTarget(this, a)
    }, unscheduleAllCallbacks: function () {
        this.scheduler.unscheduleAllCallbacksForTarget(this)
    }, resumeSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_resumeSchedulerAndActions);
        this.resume()
    }, resume: function () {
        this.scheduler.resumeTarget(this);
        this.actionManager && this.actionManager.resumeTarget(this);
        cc.eventManager.resumeTarget(this)
    }, pauseSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_pauseSchedulerAndActions);
        this.pause()
    }, pause: function () {
        this.scheduler.pauseTarget(this);
        this.actionManager && this.actionManager.pauseTarget(this);
        cc.eventManager.pauseTarget(this)
    }, setAdditionalTransform: function (a) {
        this._additionalTransform = a;
        this._additionalTransformDirty = this._transformDirty = !0
    }, parentToNodeTransform: function () {
        this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._inverseDirty = !1);
        return this._inverse
    }, nodeToWorldTransform: function () {
        for (var a = this.nodeToParentTransform(),
                 b = this._parent; null != b; b = b.parent)a = cc.AffineTransformConcat(a, b.nodeToParentTransform());
        return a
    }, worldToNodeTransform: function () {
        return cc.AffineTransformInvert(this.nodeToWorldTransform())
    }, convertToNodeSpace: function (a) {
        return cc.PointApplyAffineTransform(a, this.worldToNodeTransform())
    }, convertToWorldSpace: function (a) {
        a = a || cc.p(0, 0);
        return cc.PointApplyAffineTransform(a, this.nodeToWorldTransform())
    }, convertToNodeSpaceAR: function (a) {
        return cc.pSub(this.convertToNodeSpace(a), this._anchorPointInPoints)
    },
    convertToWorldSpaceAR: function (a) {
        a = a || cc.p(0, 0);
        a = cc.pAdd(a, this._anchorPointInPoints);
        return this.convertToWorldSpace(a)
    }, _convertToWindowSpace: function (a) {
        a = this.convertToWorldSpace(a);
        return cc.director.convertToUI(a)
    }, convertTouchToNodeSpace: function (a) {
        a = a.getLocation();
        return this.convertToNodeSpace(a)
    }, convertTouchToNodeSpaceAR: function (a) {
        a = a.getLocation();
        a = cc.director.convertToGL(a);
        return this.convertToNodeSpaceAR(a)
    }, update: function (a) {
        this._componentContainer && !this._componentContainer.isEmpty() &&
        this._componentContainer.visit(a)
    }, updateTransform: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    }, retain: function () {
    }, release: function () {
    }, getComponent: function (a) {
        return this._componentContainer.getComponent(a)
    }, addComponent: function (a) {
        this._componentContainer.add(a)
    }, removeComponent: function (a) {
        return this._componentContainer.remove(a)
    }, removeAllComponents: function () {
        this._componentContainer.removeAll()
    }, grid: null, ctor: null, visit: null,
    transform: null, nodeToParentTransform: null, _setNodeDirtyForCache: function () {
        if (!1 === this._cacheDirty) {
            this._cacheDirty = !0;
            var a = this._cachedParent;
            a && a != this && a._setNodeDirtyForCache()
        }
    }, _setCachedParent: function (a) {
        if (this._cachedParent != a) {
            this._cachedParent = a;
            for (var b = this._children, c = 0, d = b.length; c < d; c++)b[c]._setCachedParent(a)
        }
    }, getCamera: function () {
        this._camera || (this._camera = new cc.Camera);
        return this._camera
    }, getGrid: function () {
        return this.grid
    }, setGrid: function (a) {
        this.grid = a
    }, getShaderProgram: function () {
        return this._shaderProgram
    },
    setShaderProgram: function (a) {
        this._shaderProgram = a
    }, getGLServerState: function () {
        return this._glServerState
    }, setGLServerState: function (a) {
        this._glServerState = a
    }, getBoundingBoxToWorld: function () {
        var a = cc.rect(0, 0, this._contentSize.width, this._contentSize.height), b = this.nodeToWorldTransform(), a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
        if (!this._children)return a;
        for (var c = this._children, d = 0; d < c.length; d++) {
            var e = c[d];
            e && e._visible && (e = e._getBoundingBoxToCurrentNode(b)) && (a = cc.rectUnion(a,
                e))
        }
        return a
    }, _getBoundingBoxToCurrentNode: function (a) {
        var b = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        a = null == a ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a);
        b = cc.RectApplyAffineTransform(b, a);
        if (!this._children)return b;
        for (var c = this._children, d = 0; d < c.length; d++) {
            var e = c[d];
            e && e._visible && (e = e._getBoundingBoxToCurrentNode(a)) && (b = cc.rectUnion(b, e))
        }
        return b
    }, _nodeToParentTransformForWebGL: function () {
        if (this._transformDirty) {
            var a = this._position.x,
                b = this._position.y, c = this._anchorPointInPoints.x, d = -c, e = this._anchorPointInPoints.y, f = -e, g = this._scaleX, h = this._scaleY;
            this._ignoreAnchorPointForPosition && (a += c, b += e);
            var k = 1, l = 0, m = 1, n = 0;
            if (0 !== this._rotationX || 0 !== this._rotationY)k = Math.cos(-this._rotationRadiansX), l = Math.sin(-this._rotationRadiansX), m = Math.cos(-this._rotationRadiansY), n = Math.sin(-this._rotationRadiansY);
            var q = this._skewX || this._skewY;
            if (!q && (0 !== c || 0 !== e))a += m * d * g + -l * f * h, b += n * d * g + k * f * h;
            var r = this._transform;
            r.a = m * g;
            r.b = n * g;
            r.c =
                -l * h;
            r.d = k * h;
            r.tx = a;
            r.ty = b;
            if (q && (r = cc.AffineTransformConcat({a: 1, b: Math.tan(cc.degreesToRadians(this._skewY)), c: Math.tan(cc.degreesToRadians(this._skewX)), d: 1, tx: 0, ty: 0}, r), 0 !== c || 0 !== e))r = cc.AffineTransformTranslate(r, d, f);
            this._additionalTransformDirty && (r = cc.AffineTransformConcat(r, this._additionalTransform), this._additionalTransformDirty = !1);
            this._transform = r;
            this._transformDirty = !1
        }
        return this._transform
    }});
cc.Node.create = function () {
    return new cc.Node
};
cc.Node.StateCallbackType = {onEnter: 1, onExit: 2, cleanup: 3, onEnterTransitionDidFinish: 4, updateTransform: 5, onExitTransitionDidStart: 6, sortAllChildren: 7};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var _p = cc.Node.prototype;
    _p.ctor = function () {
        this._initNode()
    };
    _p.setNodeDirty = function () {
        this._setNodeDirtyForCache();
        !1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    };
    _p.visit = function (a) {
        if (this._visible) {
            a = a || cc._renderContext;
            var b, c = this._children, d;
            a.save();
            this.transform(a);
            var e = c.length;
            if (0 < e) {
                this.sortAllChildren();
                for (b = 0; b < e; b++)if (d = c[b], 0 > d._localZOrder)d.visit(a); else break;
                for (this.draw(a); b < e; b++)c[b].visit(a)
            } else this.draw(a);
            this._cacheDirty = !1;
            this.arrivalOrder = 0;
            a.restore()
        }
    };
    _p.transform = function (a) {
        a = a || cc._renderContext;
        var b = cc.view, c = this.nodeToParentTransform();
        a.transform(c.a, c.c, c.b, c.d, c.tx * b.getScaleX(), -c.ty * b.getScaleY())
    };
    _p.nodeToParentTransform = function () {
        if (this._transformDirty) {
            var a = this._transform;
            a.tx = this._position.x;
            a.ty = this._position.y;
            var b = 1, c = 0;
            this._rotationX && (b = Math.cos(this._rotationRadiansX), c = Math.sin(this._rotationRadiansX));
            a.a = a.d = b;
            a.b = -c;
            a.c = c;
            var d = this._scaleX, e = this._scaleY,
                f = this._anchorPointInPoints.x, g = this._anchorPointInPoints.y, h = 1E-6 > d && -1E-6 < d ? 1E-6 : d, k = 1E-6 > e && -1E-6 < e ? 1E-6 : e;
            if (this._skewX || this._skewY) {
                var l = Math.tan(-this._skewX * Math.PI / 180), m = Math.tan(-this._skewY * Math.PI / 180);
                Infinity === l && (l = 99999999);
                Infinity === m && (m = 99999999);
                var n = g * l * h, q = f * m * k;
                a.a = b + -c * m;
                a.b = b * l + -c;
                a.c = c + b * m;
                a.d = c * l + b;
                a.tx += b * n + -c * q;
                a.ty += c * n + b * q
            }
            if (1 !== d || 1 !== e)a.a *= h, a.c *= h, a.b *= k, a.d *= k;
            a.tx += b * -f * h + -c * g * k;
            a.ty -= c * -f * h + b * g * k;
            this._ignoreAnchorPointForPosition && (a.tx += f, a.ty += g);
            this._additionalTransformDirty &&
            (this._transform = cc.AffineTransformConcat(a, this._additionalTransform), this._additionalTransformDirty = !1);
            this._transformDirty = !1
        }
        return this._transform
    };
    _p = null
} else cc.assert("function" === typeof cc._tmp.WebGLCCNode, cc._LogInfos.MissingFile, "BaseNodesWebGL.js"), cc._tmp.WebGLCCNode(), delete cc._tmp.WebGLCCNode;
cc.assert("function" === typeof cc._tmp.PrototypeCCNode, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;
cc.NodeRGBA = cc.Node.extend({RGBAProtocol: !0, _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeColorEnabled: !1, _cascadeOpacityEnabled: !1, ctor: function () {
    cc.Node.prototype.ctor.call(this);
    this._realOpacity = this._displayedOpacity = 255;
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._realColor = cc.color(255, 255, 255, 255);
    this._cascadeOpacityEnabled = this._cascadeColorEnabled = !1
}, _updateColor: function () {
}, getOpacity: function () {
    return this._realOpacity
}, getDisplayedOpacity: function () {
    return this._displayedOpacity
},
    setOpacity: function (a) {
        this._displayedOpacity = this._realOpacity = a;
        var b = 255, c = this._parent;
        c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
        this.updateDisplayedOpacity(b);
        this._displayedColor.a = this._realColor.a = a
    }, updateDisplayedOpacity: function (a) {
        this._displayedOpacity = this._realOpacity * a / 255;
        if (this._cascadeOpacityEnabled) {
            a = this._children;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c && c.RGBAProtocol && c.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    }, isCascadeOpacityEnabled: function () {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function (a) {
        this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    }, _enableCascadeOpacity: function () {
        var a = 255, b = this._parent;
        b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
        this.updateDisplayedOpacity(a)
    }, _disableCascadeOpacity: function () {
        this._displayedOpacity = this._realOpacity;
        for (var a = this._children, b = 0; b < a.length; b++) {
            var c = a[b];
            c && c.RGBAProtocol && c.updateDisplayedOpacity(255)
        }
    },
    getColor: function () {
        var a = this._realColor;
        return cc.color(a.r, a.g, a.b, a.a)
    }, getDisplayedColor: function () {
        var a = this._displayedColor;
        return cc.color(a.r, a.g, a.b, a.a)
    }, setColor: function (a) {
        var b = this._displayedColor, c = this._realColor;
        b.r = c.r = a.r;
        b.g = c.g = a.g;
        b.b = c.b = a.b;
        b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
        this.updateDisplayedColor(b);
        void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
    }, updateDisplayedColor: function (a) {
        var b = this._displayedColor, c = this._realColor;
        b.r = 0 | c.r * a.r / 255;
        b.g = 0 | c.g * a.g / 255;
        b.b = 0 | c.b * a.b / 255;
        if (this._cascadeColorEnabled) {
            a = this._children;
            for (c = 0; c < a.length; c++) {
                var d = a[c];
                d && d.RGBAProtocol && d.updateDisplayedColor(b)
            }
        }
    }, isCascadeColorEnabled: function () {
        return this._cascadeColorEnabled
    }, setCascadeColorEnabled: function (a) {
        this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() : this._disableCascadeColor())
    }, _enableCascadeColor: function () {
        var a;
        a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() :
            cc.color.WHITE;
        this.updateDisplayedColor(a)
    }, _disableCascadeColor: function () {
        var a = this._displayedColor, b = this._realColor;
        a.r = b.r;
        a.g = b.g;
        a.b = b.b;
        for (var a = this._children, b = cc.color.WHITE, c = 0; c < a.length; c++) {
            var d = a[c];
            d && d.RGBAProtocol && d.updateDisplayedColor(b)
        }
    }, addChild: function (a, b, c) {
        cc.Node.prototype.addChild.call(this, a, b, c);
        this._cascadeColorEnabled && this._enableCascadeColor();
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    }, setOpacityModifyRGB: function (a) {
    }, isOpacityModifyRGB: function () {
        return!1
    }});
cc.NodeRGBA.create = function () {
    var a = new cc.NodeRGBA;
    a.init();
    return a
};
cc.assert("function" === typeof cc._tmp.PrototypeCCNodeRGBA, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNodeRGBA();
delete cc._tmp.PrototypeCCNodeRGBA;
cc.Node.ON_ENTER = 0;
cc.Node.ON_EXIT = 1;
cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2;
cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3;
cc.Node.ON_CLEAN_UP = 4;
cc._tmp.PrototypeTexture2D = function () {
    var a = cc.Texture2D;
    a.PVRImagesHavePremultipliedAlpha = function (a) {
        cc.PVRHaveAlphaPremultiplied_ = a
    };
    a.PIXEL_FORMAT_RGBA8888 = 2;
    a.PIXEL_FORMAT_RGB888 = 3;
    a.PIXEL_FORMAT_RGB565 = 4;
    a.PIXEL_FORMAT_A8 = 5;
    a.PIXEL_FORMAT_I8 = 6;
    a.PIXEL_FORMAT_AI88 = 7;
    a.PIXEL_FORMAT_RGBA4444 = 8;
    a.PIXEL_FORMAT_RGB5A1 = 7;
    a.PIXEL_FORMAT_PVRTC4 = 9;
    a.PIXEL_FORMAT_PVRTC2 = 10;
    a.PIXEL_FORMAT_DEFAULT = a.PIXEL_FORMAT_RGBA8888;
    var b = cc.Texture2D._M = {};
    b[a.PIXEL_FORMAT_RGBA8888] = "RGBA8888";
    b[a.PIXEL_FORMAT_RGB888] =
        "RGB888";
    b[a.PIXEL_FORMAT_RGB565] = "RGB565";
    b[a.PIXEL_FORMAT_A8] = "A8";
    b[a.PIXEL_FORMAT_I8] = "I8";
    b[a.PIXEL_FORMAT_AI88] = "AI88";
    b[a.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
    b[a.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
    b[a.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
    b[a.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
    b = cc.Texture2D._B = {};
    b[a.PIXEL_FORMAT_RGBA8888] = 32;
    b[a.PIXEL_FORMAT_RGB888] = 24;
    b[a.PIXEL_FORMAT_RGB565] = 16;
    b[a.PIXEL_FORMAT_A8] = 8;
    b[a.PIXEL_FORMAT_I8] = 8;
    b[a.PIXEL_FORMAT_AI88] = 16;
    b[a.PIXEL_FORMAT_RGBA4444] = 16;
    b[a.PIXEL_FORMAT_RGB5A1] = 16;
    b[a.PIXEL_FORMAT_PVRTC4] = 4;
    b[a.PIXEL_FORMAT_PVRTC2] = 3;
    b = cc.Texture2D.prototype;
    cc.defineGetterSetter(b, "name", b.getName);
    cc.defineGetterSetter(b, "pixelFormat", b.getPixelFormat);
    cc.defineGetterSetter(b, "pixelsWidth", b.getPixelsWide);
    cc.defineGetterSetter(b, "pixelsHeight", b.getPixelsHigh);
    cc.defineGetterSetter(b, "width", b._getWidth);
    cc.defineGetterSetter(b, "height", b._getHeight);
    a.defaultPixelFormat = a.PIXEL_FORMAT_DEFAULT
};
cc._tmp.PrototypeTextureAtlas = function () {
    var a = cc.TextureAtlas.prototype;
    cc.defineGetterSetter(a, "totalQuads", a.getTotalQuads);
    cc.defineGetterSetter(a, "capacity", a.getCapacity);
    cc.defineGetterSetter(a, "quads", a.getQuads, a.setQuads)
};
cc.ALIGN_CENTER = 51;
cc.ALIGN_TOP = 19;
cc.ALIGN_TOP_RIGHT = 18;
cc.ALIGN_RIGHT = 50;
cc.ALIGN_BOTTOM_RIGHT = 34;
cc.ALIGN_BOTTOM = 35;
cc.ALIGN_BOTTOM_LEFT = 33;
cc.ALIGN_LEFT = 49;
cc.ALIGN_TOP_LEFT = 17;
cc.PVRHaveAlphaPremultiplied_ = !1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? cc.Texture2D = cc.Class.extend({_contentSize: null, _isLoaded: !1, _htmlElementObj: null, _loadedEventListeners: null, url: null, ctor: function () {
    this._contentSize = cc.size(0, 0);
    this._isLoaded = !1;
    this._htmlElementObj = null
}, getPixelsWide: function () {
    return this._contentSize.width
}, getPixelsHigh: function () {
    return this._contentSize.height
}, getContentSize: function () {
    var a = cc.contentScaleFactor();
    return cc.size(this._contentSize.width / a, this._contentSize.height / a)
}, _getWidth: function () {
    return this._contentSize.width /
        cc.contentScaleFactor()
}, _getHeight: function () {
    return this._contentSize.height / cc.contentScaleFactor()
}, getContentSizeInPixels: function () {
    return this._contentSize
}, initWithElement: function (a) {
    a && (this._htmlElementObj = a)
}, getHtmlElementObj: function () {
    return this._htmlElementObj
}, isLoaded: function () {
    return this._isLoaded
}, handleLoadedTexture: function () {
    if (!this._isLoaded) {
        if (!this._htmlElementObj) {
            var a = cc.loader.getRes(this.url);
            if (!a)return;
            this.initWithElement(a)
        }
        this._isLoaded = !0;
        a = this._htmlElementObj;
        this._contentSize.width = a.width;
        this._contentSize.height = a.height;
        this._callLoadedEventCallbacks()
    }
}, description: function () {
    return"\x3ccc.Texture2D | width \x3d " + this._contentSize.width + " height " + this._contentSize.height + "\x3e"
}, initWithData: function (a, b, c, d, e) {
    return!1
}, initWithImage: function (a) {
    return!1
}, initWithString: function (a, b, c, d, e, f) {
    return!1
}, releaseTexture: function () {
}, getName: function () {
    return null
}, getMaxS: function () {
    return 1
}, setMaxS: function (a) {
}, getMaxT: function () {
    return 1
}, setMaxT: function (a) {
},
    getPixelFormat: function () {
        return null
    }, getShaderProgram: function () {
        return null
    }, setShaderProgram: function (a) {
    }, hasPremultipliedAlpha: function () {
        return!1
    }, hasMipmaps: function () {
        return!1
    }, releaseData: function (a) {
    }, keepData: function (a, b) {
        return a
    }, drawAtPoint: function (a) {
    }, drawInRect: function (a) {
    }, initWithETCFile: function (a) {
        cc.log(cc._LogInfos.Texture2D_initWithETCFile);
        return!1
    }, initWithPVRFile: function (a) {
        cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
        return!1
    }, initWithPVRTCData: function (a, b, c, d, e, f) {
        cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
        return!1
    }, setTexParameters: function (a) {
    }, setAntiAliasTexParameters: function () {
    }, setAliasTexParameters: function () {
    }, generateMipmap: function () {
    }, stringForFormat: function () {
        return""
    }, bitsPerPixelForFormat: function (a) {
        return-1
    }, addLoadedEventListener: function (a, b) {
        this._loadedEventListeners || (this._loadedEventListeners = []);
        this._loadedEventListeners.push({eventCallback: a, eventTarget: b})
    }, removeLoadedEventListener: function (a) {
        if (this._loadedEventListeners)for (var b =
            this._loadedEventListeners, c = 0; c < b.length; c++)b[c].eventTarget == a && b.splice(c, 1)
    }, _callLoadedEventCallbacks: function () {
        if (this._loadedEventListeners) {
            for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                d.eventCallback.call(d.eventTarget, this)
            }
            a.length = 0
        }
    }}) : (cc.assert("function" === typeof cc._tmp.WebGLTexture2D, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTexture2D(), delete cc._tmp.WebGLTexture2D);
cc.assert("function" === typeof cc._tmp.PrototypeTexture2D, cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTexture2D();
delete cc._tmp.PrototypeTexture2D;
cc.textureCache = {_textures: {}, _textureColorsCache: {}, _textureKeySeq: 0 | 1E3 * Math.random(), _loadedTexturesBefore: {}, _initializingRenderer: function () {
    var a, b = this._loadedTexturesBefore, c = this._textures;
    for (a in b) {
        var d = b[a];
        d.handleLoadedTexture();
        c[a] = d
    }
    this._loadedTexturesBefore = {}
}, addPVRTCImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addPVRTCImage)
}, addETCImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addETCImage)
}, description: function () {
    return"\x3cTextureCache | Number of textures \x3d " +
        this._textures.length + "\x3e"
}, textureForKey: function (a) {
    return this._textures[a] || this._textures[cc.loader._aliases[a]]
}, getKeyByTexture: function (a) {
    for (var b in this._textures)if (this._textures[b] == a)return b;
    return null
}, _generalTextureKey: function () {
    this._textureKeySeq++;
    return"_textureKey_" + this._textureKeySeq
}, getTextureColors: function (a) {
    var b = this.getKeyByTexture(a);
    b || (b = a instanceof HTMLImageElement ? a.src : this._generalTextureKey());
    this._textureColorsCache[b] || (this._textureColorsCache[b] =
        cc.generateTextureCacheForColor(a));
    return this._textureColorsCache[b]
}, addPVRImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addPVRImage)
}, removeAllTextures: function () {
    var a = this._textures, b;
    for (b in a)a[b] && a[b].releaseTexture();
    this._textures = {}
}, removeTexture: function (a) {
    if (a) {
        var b = this._textures, c;
        for (c in b)b[c] == a && (b[c].releaseTexture(), delete b[c])
    }
}, removeTextureForKey: function (a) {
    null != a && this._textures[a] && delete this._textures[a]
}, cacheImage: function (a, b) {
    if (b instanceof cc.Texture2D)this._textures[a] =
        b; else {
        var c = new cc.Texture2D;
        c.initWithElement(b);
        c.handleLoadedTexture();
        this._textures[a] = c
    }
}, addUIImage: function (a, b) {
    cc.assert(a, cc._LogInfos.textureCache_addUIImage_2);
    if (b && this._textures[b])return this._textures[b];
    var c = new cc.Texture2D;
    c.initWithImage(a);
    null != b && null != c ? this._textures[b] = c : cc.log(cc._LogInfos.textureCache_addUIImage);
    return c
}, dumpCachedTextureInfo: function () {
    var a = 0, b = 0, c = this._textures, d;
    for (d in c) {
        var e = c[d];
        a++;
        e.getHtmlElementObj()instanceof HTMLImageElement ? cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo,
            d, e.getHtmlElementObj().src, e.pixelsWidth, e.pixelsHeight) : cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, e.pixelsWidth, e.pixelsHeight);
        b += 4 * e.pixelsWidth * e.pixelsHeight
    }
    c = this._textureColorsCache;
    for (d in c) {
        var e = c[d], f;
        for (f in e) {
            var g = e[f];
            a++;
            cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, g.width, g.height);
            b += 4 * g.width * g.height
        }
    }
    cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_3, a, b / 1024, (b / 1048576).toFixed(2))
}, _clear: function () {
    this._textures = {};
    this._textureColorsCache =
    {};
    this._textureKeySeq = 0 | 1E3 * Math.random();
    this._loadedTexturesBefore = {}
}};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.textureCache, _p.handleLoadedTexture = function (a) {
    var b = this._textures, c = b[a];
    c || (c = b[a] = new cc.Texture2D, c.url = a);
    c.handleLoadedTexture()
}, _p.addImage = function (a, b, c) {
    cc.assert(a, cc._LogInfos.Texture2D_addImage);
    var d = this._textures, e = d[a] || d[cc.loader._aliases[a]];
    if (e)return b && b.call(c), e;
    e = d[a] = new cc.Texture2D;
    e.url = a;
    cc.loader.getRes(a) ? e.handleLoadedTexture() : cc.loader._checkIsImageURL(a) ? cc.loader.load(a, function (a) {
        b && b.call(c)
    }) : cc.loader.cache[a] =
        cc.loader.loadImg(a, function (c, d) {
            if (c)return b ? b(c) : c;
            cc.textureCache.handleLoadedTexture(a);
            b && b(null, d)
        });
    return e
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLTextureCache, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTextureCache(), delete cc._tmp.WebGLTextureCache);
cc.Scene = cc.Node.extend({_className: "Scene", ctor: function () {
    cc.Node.prototype.ctor.call(this);
    this._ignoreAnchorPointForPosition = !0;
    this.setAnchorPoint(0.5, 0.5);
    this.setContentSize(cc.director.getWinSize())
}});
cc.Scene.create = function () {
    return new cc.Scene
};
cc.LoaderScene = cc.Scene.extend({_interval: null, _length: 0, _count: 0, _label: null, _className: "LoaderScene", init: function () {
    var a = this, b = 200, c = a._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
    c.setPosition(cc.visibleRect.bottomLeft);
    a.addChild(c, 0);
    var d = 24, e = -b / 2 + 100;
    cc._loaderImage && (cc.loader.loadImg(cc._loaderImage, {isCrossOrigin: !1}, function (c, d) {
        b = d.height;
        a._initStage(d, cc.visibleRect.center)
    }), d = 14, e = -b / 2 - 10);
    d = a._label = cc.LabelTTF.create("加载中... 0%", "黑体", d);
    d.setPosition(cc.pAdd(cc.visibleRect.center,
        cc.p(0, e)));
    d.setColor(cc.color(180, 180, 180));
    c.addChild(this._label, 10);
    return!0
}, _initStage: function (a, b) {
    var c = this._texture2d = new cc.Texture2D;
    c.initWithElement(a);
    c.handleLoadedTexture();
    c = this._logo = cc.Sprite.create(c);
    c.setScale(cc.contentScaleFactor());
    c.x = b.x;
    c.y = b.y;
    this._bgLayer.addChild(c, 10)
}, onEnter: function () {
    cc.Node.prototype.onEnter.call(this);
    this.schedule(this._startLoading, 0.3)
}, onExit: function () {
    cc.Node.prototype.onExit.call(this);
    this._label.setString("加载中... 0%")
}, initWithResources: function (a, b) {
    "string" == typeof a && (a = [a]);
    this.resources = a || [];
    this.cb = b
}, _startLoading: function () {
    var a = this;
    a.unschedule(a._startLoading);
    var b = a.resources;
    a._length = b.length;
    a._count = 0;
    cc.loader.load(b, function (b, d) {
        a._count = d
    }, function () {
        a.cb && a.cb()
    });
    a.schedule(a._updatePercent)
}, _updatePercent: function () {
    var a = this._count, b = this._length, c;
    c = Math.min(100 * (a / b) | 0, 100);
    this._label.setString("加载中... " + c + "%");
    a >= b && this.unschedule(this._updatePercent)
}});
cc.LoaderScene.preload = function (a, b) {
    var c = cc;
    c.loaderScene || (c.loaderScene = new cc.LoaderScene, c.loaderScene.init());
    c.loaderScene.initWithResources(a, b);
    cc.director.runScene(c.loaderScene);
    return c.loaderScene
};
cc._tmp.PrototypeLayerRGBA = function () {
    var a = cc.LayerRGBA.prototype;
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc._tmp.PrototypeLayerColor = function () {
    var a = cc.LayerColor.prototype;
    cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
    cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight)
};
cc._tmp.PrototypeLayerGradient = function () {
    var a = cc.LayerGradient.prototype;
    cc.defineGetterSetter(a, "startColor", a.getStartColor, a.setStartColor);
    cc.defineGetterSetter(a, "endColor", a.getEndColor, a.setEndColor);
    cc.defineGetterSetter(a, "startOpacity", a.getStartOpacity, a.setStartOpacity);
    cc.defineGetterSetter(a, "endOpacity", a.getEndOpacity, a.setEndOpacity);
    cc.defineGetterSetter(a, "vector", a.getVector, a.setVector)
};
cc.Layer = cc.Node.extend({_isBaked: !1, _bakeSprite: null, _className: "Layer", ctor: function () {
    var a = cc.Node.prototype;
    a.ctor.call(this);
    this._ignoreAnchorPointForPosition = !0;
    a.setAnchorPoint.call(this, 0.5, 0.5);
    a.setContentSize.call(this, cc.winSize)
}, bake: null, unbake: null, isBaked: function () {
    return this._isBaked
}, visit: null});
cc.Layer.create = function () {
    return new cc.Layer
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var p = cc.Layer.prototype;
    p.bake = function () {
        if (!this._isBaked) {
            this._isBaked = this._cacheDirty = !0;
            this._cachedParent = this;
            for (var a = this._children, b = 0, c = a.length; b < c; b++)a[b]._setCachedParent(this);
            this._bakeSprite || (this._bakeSprite = new cc.BakeSprite)
        }
    };
    p.unbake = function () {
        if (this._isBaked) {
            this._isBaked = !1;
            this._cacheDirty = !0;
            this._cachedParent = null;
            for (var a = this._children, b = 0, c = a.length; b < c; b++)a[b]._setCachedParent(null)
        }
    };
    p.visit = function (a) {
        if (this._isBaked) {
            a =
                a || cc._renderContext;
            var b, c = this._children, d = c.length;
            if (this._visible && 0 !== d) {
                var e = this._bakeSprite;
                a.save();
                this.transform(a);
                if (this._cacheDirty) {
                    b = this._getBoundingBoxForBake();
                    b.width |= 0;
                    b.height |= 0;
                    var f = e.getCacheContext();
                    e.resetCanvasSize(b.width, b.height);
                    f.translate(0 - b.x, b.height + b.y);
                    var g = e.getAnchorPointInPoints();
                    e.setPosition(g.x + b.x, g.y + b.y);
                    this.sortAllChildren();
                    for (b = 0; b < d; b++)c[b].visit(f);
                    this._cacheDirty = !1
                }
                e.visit(a);
                this.arrivalOrder = 0;
                a.restore()
            }
        } else cc.Node.prototype.visit.call(this,
            a)
    };
    p._getBoundingBoxForBake = function () {
        var a = null;
        if (!this._children || 0 === this._children.length)return cc.rect(0, 0, 10, 10);
        for (var b = this._children, c = 0; c < b.length; c++) {
            var d = b[c];
            d && d._visible && (a ? (d = d._getBoundingBoxToCurrentNode()) && (a = cc.rectUnion(a, d)) : a = d._getBoundingBoxToCurrentNode())
        }
        return a
    };
    p = null
} else cc.assert("function" === typeof cc._tmp.LayerDefineForWebGL, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.LayerDefineForWebGL(), delete cc._tmp.LayerDefineForWebGL;
cc.LayerRGBA = cc.Layer.extend({RGBAProtocol: !0, _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeOpacityEnabled: !1, _cascadeColorEnabled: !1, _className: "LayerRGBA", ctor: function () {
    cc.Layer.prototype.ctor.call(this);
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._realColor = cc.color(255, 255, 255, 255)
}, init: function () {
    var a = cc.Layer.prototype;
    this._ignoreAnchorPointForPosition = !0;
    a.setAnchorPoint.call(this, 0.5, 0.5);
    a.setContentSize.call(this, cc.winSize);
    this.cascadeColor =
        this.cascadeOpacity = !1;
    return!0
}, getOpacity: function () {
    return this._realOpacity
}, getDisplayedOpacity: function () {
    return this._displayedOpacity
}, setOpacity: function (a) {
    this._displayedOpacity = this._realOpacity = a;
    var b = 255, c = this._parent;
    c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
    this.updateDisplayedOpacity(b);
    this._displayedColor.a = this._realColor.a = a
}, updateDisplayedOpacity: function (a) {
    this._displayedOpacity = 0 | this._realOpacity * a / 255;
    if (this._cascadeOpacityEnabled) {
        a = this._children;
        for (var b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(this._displayedOpacity)
    }
}, isCascadeOpacityEnabled: function () {
    return this._cascadeOpacityEnabled
}, setCascadeOpacityEnabled: function (a) {
    this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
}, _enableCascadeOpacity: function () {
    var a = 255, b = this._parent;
    b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
    this.updateDisplayedOpacity(a)
}, _disableCascadeOpacity: function () {
    this._displayedOpacity =
        this._realOpacity;
    for (var a = this._children, b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(255)
}, getColor: function () {
    var a = this._realColor;
    return cc.color(a.r, a.g, a.b, a.a)
}, getDisplayedColor: function () {
    var a = this._displayedColor;
    return cc.color(a.r, a.g, a.b)
}, setColor: function (a) {
    var b = this._displayedColor, c = this._realColor;
    b.r = c.r = a.r;
    b.g = c.g = a.g;
    b.b = c.b = a.b;
    b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
    this.updateDisplayedColor(b);
    void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
}, updateDisplayedColor: function (a) {
    var b = this._displayedColor, c = this._realColor;
    b.r = 0 | c.r * a.r / 255;
    b.g = 0 | c.g * a.g / 255;
    b.b = 0 | c.b * a.b / 255;
    if (this._cascadeColorEnabled) {
        a = this._children;
        for (var d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
    }
}, isCascadeColorEnabled: function () {
    return this._cascadeColorEnabled
}, setCascadeColorEnabled: function (a) {
    this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() :
        this._disableCascadeColor())
}, _enableCascadeColor: function () {
    var a;
    a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() : cc.color.WHITE;
    this.updateDisplayedColor(a)
}, _disableCascadeColor: function () {
    var a = this._displayedColor, b = this._realColor;
    a.r = b.r;
    a.g = b.g;
    a.b = b.b;
    var a = this._children, b = cc.color.WHITE, c, d;
    for (d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
}, addChild: function (a, b, c) {
    cc.Node.prototype.addChild.call(this, a, b, c);
    this._cascadeColorEnabled && this._enableCascadeColor();
    this._cascadeOpacityEnabled && this._enableCascadeOpacity()
}, setOpacityModifyRGB: function (a) {
}, isOpacityModifyRGB: function () {
    return!1
}});
cc.assert("function" === typeof cc._tmp.PrototypeLayerRGBA, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerRGBA();
delete cc._tmp.PrototypeLayerRGBA;
cc.LayerColor = cc.LayerRGBA.extend({_blendFunc: null, _className: "LayerColor", getBlendFunc: function () {
    return this._blendFunc
}, changeWidthAndHeight: function (a, b) {
    this.width = a;
    this.height = b
}, changeWidth: function (a) {
    this.width = a
}, changeHeight: function (a) {
    this.height = a
}, setOpacityModifyRGB: function (a) {
}, isOpacityModifyRGB: function () {
    return!1
}, setColor: function (a) {
    cc.LayerRGBA.prototype.setColor.call(this, a);
    this._updateColor()
}, setOpacity: function (a) {
    cc.LayerRGBA.prototype.setOpacity.call(this, a);
    this._updateColor()
},
    _isLighterMode: !1, ctor: null, init: function (a, b, c) {
        cc._renderType !== cc._RENDER_TYPE_CANVAS && (this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR));
        var d = cc.director.getWinSize();
        a = a || cc.color(0, 0, 0, 255);
        b = void 0 === b ? d.width : b;
        c = void 0 === c ? d.height : c;
        d = this._displayedColor;
        d.r = a.r;
        d.g = a.g;
        d.b = a.b;
        d = this._realColor;
        d.r = a.r;
        d.g = a.g;
        d.b = a.b;
        this._realOpacity = this._displayedOpacity = a.a;
        a = cc.LayerColor.prototype;
        a.setContentSize.call(this, b, c);
        a._updateColor.call(this);
        return!0
    }, setBlendFunc: function (a, b) {
        this._blendFunc = void 0 === b ? a : {src: a, dst: b};
        cc._renderType === cc._RENDER_TYPE_CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst)
    }, _setWidth: null, _setHeight: null, _updateColor: null, updateDisplayedColor: function (a) {
        cc.LayerRGBA.prototype.updateDisplayedColor.call(this, a);
        this._updateColor()
    }, updateDisplayedOpacity: function (a) {
        cc.LayerRGBA.prototype.updateDisplayedOpacity.call(this, a);
        this._updateColor()
    }, draw: null});
cc.LayerColor.create = function (a, b, c) {
    return new cc.LayerColor(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerColor.prototype, _p.ctor = function (a, b, c) {
    cc.LayerRGBA.prototype.ctor.call(this);
    this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
    cc.LayerColor.prototype.init.call(this, a, b, c)
}, _p._setWidth = cc.LayerRGBA.prototype._setWidth, _p._setHeight = cc.LayerRGBA.prototype._setHeight, _p._updateColor = function () {
}, _p.draw = function (a) {
    a = a || cc._renderContext;
    var b = cc.view, c = this._displayedColor;
    a.fillStyle = "rgba(" + (0 | c.r) + "," + (0 | c.g) + "," + (0 | c.b) + "," + this._displayedOpacity /
        255 + ")";
    a.fillRect(0, 0, this.width * b.getScaleX(), -this.height * b.getScaleY());
    cc.g_NumberOfDraws++
}, _p.visit = function (a) {
    if (this._isBaked) {
        a = a || cc._renderContext;
        var b, c = this._children, d = c.length;
        if (this._visible) {
            var e = this._bakeSprite;
            a.save();
            this.transform(a);
            if (this._cacheDirty) {
                b = this._getBoundingBoxForBake();
                b.width |= 0;
                b.height |= 0;
                var f = e.getCacheContext();
                e.resetCanvasSize(b.width, b.height);
                var g = e.getAnchorPointInPoints(), h = this._position;
                if (this._ignoreAnchorPointForPosition)f.translate(0 -
                    b.x + h.x, b.height + b.y - h.y), e.setPosition(g.x + b.x - h.x, g.y + b.y - h.y); else {
                    var k = this.getAnchorPointInPoints(), l = h.x - k.x, h = h.y - k.y;
                    f.translate(0 - b.x + l, b.height + b.y - h);
                    e.setPosition(g.x + b.x - l, g.y + b.y - h)
                }
                if (0 < d) {
                    this.sortAllChildren();
                    for (b = 0; b < d; b++)if (g = c[b], 0 > g._localZOrder)g.visit(f); else break;
                    for (this.draw(f); b < d; b++)c[b].visit(f)
                } else this.draw(f);
                this._cacheDirty = !1
            }
            e.visit(a);
            this.arrivalOrder = 0;
            a.restore()
        }
    } else cc.Node.prototype.visit.call(this, a)
}, _p._getBoundingBoxForBake = function () {
    var a = cc.rect(0,
        0, this._contentSize.width, this._contentSize.height), b = this.nodeToWorldTransform(), a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
    if (!this._children || 0 === this._children.length)return a;
    for (var c = this._children, d = 0; d < c.length; d++) {
        var e = c[d];
        e && e._visible && (e = e._getBoundingBoxToCurrentNode(b), a = cc.rectUnion(a, e))
    }
    return a
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerColor, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerColor(), delete cc._tmp.WebGLLayerColor);
cc.assert("function" === typeof cc._tmp.PrototypeLayerColor, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerColor();
delete cc._tmp.PrototypeLayerColor;
cc.LayerGradient = cc.LayerColor.extend({_startColor: null, _endColor: null, _startOpacity: 255, _endOpacity: 255, _alongVector: null, _compressedInterpolation: !1, _gradientStartPoint: null, _gradientEndPoint: null, _className: "LayerGradient", ctor: function (a, b, c) {
    cc.LayerColor.prototype.ctor.call(this);
    this._startColor = cc.color(0, 0, 0, 255);
    this._endColor = cc.color(0, 0, 0, 255);
    this._alongVector = cc.p(0, -1);
    this._endOpacity = this._startOpacity = 255;
    this._gradientStartPoint = cc.p(0, 0);
    this._gradientEndPoint = cc.p(0, 0);
    cc.LayerGradient.prototype.init.call(this,
        a, b, c)
}, init: function (a, b, c) {
    a = a || cc.color(0, 0, 0, 255);
    b = b || cc.color(0, 0, 0, 255);
    c = c || cc.p(0, -1);
    var d = this._startColor, e = this._endColor;
    d.r = a.r;
    d.g = a.g;
    d.b = a.b;
    this._startOpacity = a.a;
    e.r = b.r;
    e.g = b.g;
    e.b = b.b;
    this._endOpacity = b.a;
    this._alongVector = c;
    this._compressedInterpolation = !0;
    this._gradientStartPoint = cc.p(0, 0);
    this._gradientEndPoint = cc.p(0, 0);
    cc.LayerColor.prototype.init.call(this, cc.color(a.r, a.g, a.b, 255));
    cc.LayerGradient.prototype._updateColor.call(this);
    return!0
}, setContentSize: function (a, b) {
    cc.LayerColor.prototype.setContentSize.call(this, a, b);
    this._updateColor()
}, _setWidth: function (a) {
    cc.LayerColor.prototype._setWidth.call(this, a);
    this._updateColor()
}, _setHeight: function (a) {
    cc.LayerColor.prototype._setHeight.call(this, a);
    this._updateColor()
}, getStartColor: function () {
    return this._realColor
}, setStartColor: function (a) {
    this.color = a
}, setEndColor: function (a) {
    this._endColor = a;
    this._updateColor()
}, getEndColor: function () {
    return this._endColor
}, setStartOpacity: function (a) {
    this._startOpacity =
        a;
    this._updateColor()
}, getStartOpacity: function () {
    return this._startOpacity
}, setEndOpacity: function (a) {
    this._endOpacity = a;
    this._updateColor()
}, getEndOpacity: function () {
    return this._endOpacity
}, setVector: function (a) {
    this._alongVector.x = a.x;
    this._alongVector.y = a.y;
    this._updateColor()
}, getVector: function () {
    return cc.p(this._alongVector.x, this._alongVector.y)
}, isCompressedInterpolation: function () {
    return this._compressedInterpolation
}, setCompressedInterpolation: function (a) {
    this._compressedInterpolation =
        a;
    this._updateColor()
}, _draw: null, _updateColor: null});
cc.LayerGradient.create = function (a, b, c) {
    return new cc.LayerGradient(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerGradient.prototype, _p.draw = function (a) {
    a = a || cc._renderContext;
    this._isLighterMode && (a.globalCompositeOperation = "lighter");
    a.save();
    var b = cc.view, c = this._displayedOpacity / 255, d = this.width * b.getScaleX(), b = this.height * b.getScaleY(), e = a.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y), f = this._displayedColor, g = this._endColor;
    e.addColorStop(0, "rgba(" + Math.round(f.r) + "," + Math.round(f.g) +
        "," + Math.round(f.b) + "," + (c * (this._startOpacity / 255)).toFixed(4) + ")");
    e.addColorStop(1, "rgba(" + Math.round(g.r) + "," + Math.round(g.g) + "," + Math.round(g.b) + "," + (c * (this._endOpacity / 255)).toFixed(4) + ")");
    a.fillStyle = e;
    a.fillRect(0, 0, d, -b);
    0 != this._rotation && a.rotate(this._rotationRadians);
    a.restore()
}, _p._updateColor = function () {
    var a = this._alongVector, b = 0.5 * this.width, c = 0.5 * this.height;
    this._gradientStartPoint.x = b * -a.x + b;
    this._gradientStartPoint.y = c * a.y - c;
    this._gradientEndPoint.x = b * a.x + b;
    this._gradientEndPoint.y =
        c * -a.y - c
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerGradient, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerGradient(), delete cc._tmp.WebGLLayerGradient);
cc.assert("function" === typeof cc._tmp.PrototypeLayerGradient, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerGradient();
delete cc._tmp.PrototypeLayerGradient;
cc.LayerMultiplex = cc.Layer.extend({_enabledLayer: 0, _layers: null, _className: "LayerMultiplex", ctor: function (a) {
    cc.Layer.prototype.ctor.call(this);
    a && cc.LayerMultiplex.prototype.initWithLayers.call(this, a)
}, initWithLayers: function (a) {
    0 < a.length && null == a[a.length - 1] && cc.log(cc._LogInfos.LayerMultiplex_initWithLayers);
    this._layers = a;
    this._enabledLayer = 0;
    this.addChild(this._layers[this._enabledLayer]);
    return!0
}, switchTo: function (a) {
    a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchTo) : (this.removeChild(this._layers[this._enabledLayer],
        !0), this._enabledLayer = a, this.addChild(this._layers[a]))
}, switchToAndReleaseMe: function (a) {
    a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe) : (this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, this._enabledLayer = a, this.addChild(this._layers[a]))
}, addLayer: function (a) {
    a ? this._layers.push(a) : cc.log(cc._LogInfos.LayerMultiplex_addLayer)
}});
cc.LayerMultiplex.create = function () {
    return new cc.LayerMultiplex(arguments)
};
cc._tmp.PrototypeSprite = function () {
    var a = cc.Sprite.prototype;
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "flippedX", a.isFlippedX, a.setFlippedX);
    cc.defineGetterSetter(a, "flippedY", a.isFlippedY, a.setFlippedY);
    cc.defineGetterSetter(a, "offsetX", a._getOffsetX);
    cc.defineGetterSetter(a, "offsetY", a._getOffsetY);
    cc.defineGetterSetter(a,
        "texture", a.getTexture, a.setTexture);
    cc.defineGetterSetter(a, "textureRectRotated", a.isTextureRectRotated);
    cc.defineGetterSetter(a, "batchNode", a.getBatchNode, a.setBatchNode);
    cc.defineGetterSetter(a, "quad", a.getQuad)
};
cc.generateTextureCacheForColor = function (a) {
    function b() {
        var b = cc.generateTextureCacheForColor, d = a.width, g = a.height;
        c[0].width = d;
        c[0].height = g;
        c[1].width = d;
        c[1].height = g;
        c[2].width = d;
        c[2].height = g;
        c[3].width = d;
        c[3].height = g;
        b.canvas.width = d;
        b.canvas.height = g;
        var h = b.canvas.getContext("2d");
        h.drawImage(a, 0, 0);
        b.tempCanvas.width = d;
        b.tempCanvas.height = g;
        for (var h = h.getImageData(0, 0, d, g).data, k = 0; 4 > k; k++) {
            var l = c[k].getContext("2d");
            l.getImageData(0, 0, d, g).data;
            b.tempCtx.drawImage(a, 0, 0);
            for (var m = b.tempCtx.getImageData(0,
                0, d, g), n = m.data, q = 0; q < h.length; q += 4)n[q] = 0 === k ? h[q] : 0, n[q + 1] = 1 === k ? h[q + 1] : 0, n[q + 2] = 2 === k ? h[q + 2] : 0, n[q + 3] = h[q + 3];
            l.putImageData(m, 0, 0)
        }
        a.onload = null
    }

    if (a.channelCache)return a.channelCache;
    var c = [cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas")];
    try {
        b()
    } catch (d) {
        a.onload = b
    }
    return a.channelCache = c
};
cc.generateTextureCacheForColor.canvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCanvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d");
cc.generateTintImage2 = function (a, b, c) {
    c || (c = cc.rect(0, 0, a.width, a.height), c = cc.rectPixelsToPoints(c));
    var d = cc.newElement("canvas"), e = d.getContext("2d");
    d.width != c.width && (d.width = c.width);
    d.height != c.height && (d.height = c.height);
    e.save();
    e.drawImage(a, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height);
    e.globalCompositeOperation = "source-in";
    e.globalAlpha = b.a / 255;
    e.fillStyle = "rgb(" + b.r + "," + b.g + "," + b.b + ")";
    e.fillRect(0, 0, c.width, c.height);
    e.restore();
    return d
};
cc.generateTintImage = function (a, b, c, d, e) {
    d || (d = cc.rect(0, 0, a.width, a.height));
    a = c.r / 255;
    var f = c.g / 255;
    c = c.b / 255;
    var g = Math.min(d.width, b[0].width), h = Math.min(d.height, b[0].height), k;
    e ? (k = e.getContext("2d"), k.clearRect(0, 0, g, h)) : (e = cc.newElement("canvas"), e.width = g, e.height = h, k = e.getContext("2d"));
    k.save();
    k.globalCompositeOperation = "lighter";
    var l = k.globalAlpha;
    0 < a && (k.globalAlpha = a * l, k.drawImage(b[0], d.x, d.y, g, h, 0, 0, g, h));
    0 < f && (k.globalAlpha = f * l, k.drawImage(b[1], d.x, d.y, g, h, 0, 0, g, h));
    0 < c && (k.globalAlpha =
        c * l, k.drawImage(b[2], d.x, d.y, g, h, 0, 0, g, h));
    1 > a + f + c && (k.globalAlpha = l, k.drawImage(b[3], d.x, d.y, g, h, 0, 0, g, h));
    k.restore();
    return e
};
cc.cutRotateImageToCanvas = function (a, b) {
    if (!a)return null;
    if (!b)return a;
    var c = cc.newElement("canvas");
    c.width = b.width;
    c.height = b.height;
    var d = c.getContext("2d");
    d.translate(c.width / 2, c.height / 2);
    d.rotate(-1.5707963267948966);
    d.drawImage(a, b.x, b.y, b.height, b.width, -b.height / 2, -b.width / 2, b.height, b.width);
    return c
};
cc.Sprite = cc.NodeRGBA.extend({RGBAProtocol: !0, dirty: !1, atlasIndex: 0, textureAtlas: null, _batchNode: null, _recursiveDirty: null, _hasChildren: null, _shouldBeHidden: !1, _transformToBatch: null, _blendFunc: null, _texture: null, _rect: null, _rectRotated: !1, _offsetPosition: null, _unflippedOffsetPositionFromCenter: null, _opacityModifyRGB: !1, _flippedX: !1, _flippedY: !1, _textureLoaded: !1, _loadedEventListeners: null, _newTextureWhenChangeColor: null, _className: "Sprite", textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (a, b) {
    this._loadedEventListeners || (this._loadedEventListeners = []);
    this._loadedEventListeners.push({eventCallback: a, eventTarget: b})
}, _callLoadedEventCallbacks: function () {
    if (this._loadedEventListeners) {
        for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            d.eventCallback.call(d.eventTarget, this)
        }
        a.length = 0
    }
}, isDirty: function () {
    return this.dirty
}, setDirty: function (a) {
    this.dirty = a
}, isTextureRectRotated: function () {
    return this._rectRotated
}, getAtlasIndex: function () {
    return this.atlasIndex
},
    setAtlasIndex: function (a) {
        this.atlasIndex = a
    }, getTextureRect: function () {
        return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
    }, getTextureAtlas: function () {
        return this.textureAtlas
    }, setTextureAtlas: function (a) {
        this.textureAtlas = a
    }, getOffsetPosition: function () {
        return this._offsetPosition
    }, _getOffsetX: function () {
        return this._offsetPosition.x
    }, _getOffsetY: function () {
        return this._offsetPosition.y
    }, getBlendFunc: function () {
        return this._blendFunc
    }, initWithSpriteFrame: function (a) {
        cc.assert(a,
            cc._LogInfos.Sprite_initWithSpriteFrame);
        a.textureLoaded() || (this._textureLoaded = !1, a.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
        var b = cc._renderType === cc._RENDER_TYPE_CANVAS ? !1 : a._rotated, b = this.initWithTexture(a.getTexture(), a.getRect(), b);
        this.setSpriteFrame(a);
        return b
    }, _spriteFrameLoadedCallback: null, initWithSpriteFrameName: function (a) {
        cc.assert(a, cc._LogInfos.Sprite_initWithSpriteFrameName);
        var b = cc.spriteFrameCache.getSpriteFrame(a);
        cc.assert(b, a + cc._LogInfos.Sprite_initWithSpriteFrameName1);
        return this.initWithSpriteFrame(b)
    }, useBatchNode: function (a) {
        this.textureAtlas = a.textureAtlas;
        this._batchNode = a
    }, setVertexRect: function (a) {
        this._rect.x = a.x;
        this._rect.y = a.y;
        this._rect.width = a.width;
        this._rect.height = a.height
    }, sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var a = this._children, b = a.length, c, d, e;
            for (c = 1; c < b; c++) {
                e = a[c];
                for (d = c - 1; 0 <= d;) {
                    if (e._localZOrder < a[d]._localZOrder)a[d + 1] = a[d]; else if (e._localZOrder === a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder)a[d + 1] = a[d]; else break;
                    d--
                }
                a[d + 1] = e
            }
            this._batchNode && this._arrayMakeObjectsPerformSelector(a, cc.Node.StateCallbackType.sortAllChildren);
            this._reorderChildDirty = !1
        }
    }, reorderChild: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_reorderChild_2);
        -1 === this._children.indexOf(a) ? cc.log(cc._LogInfos.Sprite_reorderChild) : b !== a.zIndex && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, a, b))
    }, removeChild: function (a, b) {
        this._batchNode &&
        this._batchNode.removeSpriteFromAtlas(a);
        cc.Node.prototype.removeChild.call(this, a, b)
    }, removeAllChildren: function (a) {
        var b = this._children, c = this._batchNode;
        if (c && null != b)for (var d = 0, e = b.length; d < e; d++)c.removeSpriteFromAtlas(b[d]);
        cc.Node.prototype.removeAllChildren.call(this, a);
        this._hasChildren = !1
    }, setDirtyRecursively: function (a) {
        this.dirty = this._recursiveDirty = a;
        a = this._children;
        for (var b, c = a ? a.length : 0, d = 0; d < c; d++)b = a[d], b instanceof cc.Sprite && b.setDirtyRecursively(!0)
    }, setNodeDirty: function (a) {
        cc.Node.prototype.setNodeDirty.call(this);
        !a && (this._batchNode && !this._recursiveDirty) && (this._hasChildren ? this.setDirtyRecursively(!0) : this.dirty = this._recursiveDirty = !0)
    }, ignoreAnchorPointForPosition: function (a) {
        this._batchNode ? cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition) : cc.Node.prototype.ignoreAnchorPointForPosition.call(this, a)
    }, setFlippedX: function (a) {
        this._flippedX != a && (this._flippedX = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    }, setFlippedY: function (a) {
        this._flippedY != a &&
        (this._flippedY = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    }, isFlippedX: function () {
        return this._flippedX
    }, isFlippedY: function () {
        return this._flippedY
    }, setOpacityModifyRGB: null, isOpacityModifyRGB: function () {
        return this._opacityModifyRGB
    }, updateDisplayedOpacity: null, setDisplayFrameWithAnimationName: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
        var c = cc.animationCache.getAnimation(a);
        c ? (c = c.getFrames()[b]) ? this.setSpriteFrame(c.getSpriteFrame()) :
            cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName)
    }, getBatchNode: function () {
        return this._batchNode
    }, _setReorderChildDirtyRecursively: function () {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = !0;
            for (var a = this._parent; a && a != this._batchNode;)a._setReorderChildDirtyRecursively(), a = a.parent
        }
    }, getTexture: function () {
        return this._texture
    }, _quad: null, _quadWebBuffer: null, _quadDirty: !1, _colorized: !1, _isLighterMode: !1, _originalTexture: null,
    _textureRect_Canvas: null, _drawSize_Canvas: null, ctor: null, _softInit: function (a, b, c) {
        if (void 0 === a)cc.Sprite.prototype.init.call(this); else if ("string" === typeof a)"#" === a[0] ? (a = a.substr(1, a.length - 1), a = cc.spriteFrameCache.getSpriteFrame(a), this.initWithSpriteFrame(a)) : cc.Sprite.prototype.init.call(this, a, b); else if ("object" === typeof a)if (a instanceof cc.Texture2D)this.initWithTexture(a, b, c); else if (a instanceof cc.SpriteFrame)this.initWithSpriteFrame(a); else if (a instanceof HTMLImageElement || a instanceof
            HTMLCanvasElement)b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.initWithTexture(b)
    }, getQuad: function () {
        return this._quad
    }, setBlendFunc: null, init: null, initWithFile: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_initWithFile);
        var c = cc.textureCache.textureForKey(a);
        if (c) {
            if (!b) {
                var d = c.getContentSize();
                b = cc.rect(0, 0, d.width, d.height)
            }
            return this.initWithTexture(c, b)
        }
        c = cc.textureCache.addImage(a);
        return this.initWithTexture(c, b || cc.rect(0, 0, c._contentSize.width, c._contentSize.height))
    },
    initWithTexture: null, _textureLoadedCallback: null, setTextureRect: null, updateTransform: null, addChild: null, updateColor: function () {
        var a = this._displayedColor, b = this._displayedOpacity, a = {r: a.r, g: a.g, b: a.b, a: b};
        this._opacityModifyRGB && (a.r *= b / 255, a.g *= b / 255, a.b *= b / 255);
        b = this._quad;
        b.bl.colors = a;
        b.br.colors = a;
        b.tl.colors = a;
        b.tr.colors = a;
        this._batchNode && (this.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED ? this.textureAtlas.updateQuad(b, this.atlasIndex) : this.dirty = !0);
        this._quadDirty = !0
    }, setOpacity: null, setColor: null,
    updateDisplayedColor: null, setSpriteFrame: null, setDisplayFrame: function (a) {
        cc.log(cc._LogInfos.Sprite_setDisplayFrame);
        this.setSpriteFrame(a)
    }, isFrameDisplayed: null, displayFrame: function () {
        return cc.SpriteFrame.create(this._texture, cc.rectPointsToPixels(this._rect), this._rectRotated, cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter), cc.sizePointsToPixels(this._contentSize))
    }, setBatchNode: null, setTexture: null, _updateBlendFunc: function () {
        this._batchNode ? cc.log(cc._LogInfos.Sprite__updateBlendFunc) :
                !this._texture || !this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = !1) : (this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.opacityModifyRGB = !0)
    }, _changeTextureColor: function () {
        var a, b = this._texture, c = this._textureRect_Canvas;
        if (b && (c.validRect && this._originalTexture) && (a = b.getHtmlElementObj()))if (b = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj()))this._colorized = !0,
                a instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(a, b, this._displayedColor, c, a) : (a = cc.generateTintImage(a, b, this._displayedColor, c), b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.texture = b)
    }, _setTextureCoords: function (a) {
        a = cc.rectPointsToPixels(a);
        var b = this._batchNode ? this.textureAtlas.texture : this._texture;
        if (b) {
            var c = b.pixelsWidth, d = b.pixelsHeight, e, f = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ?
                (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) / d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) /
                c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u = c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
            this._quadDirty = !0
        }
    }, draw: null});
cc.Sprite.create = function (a, b, c) {
    return new cc.Sprite(a, b, c)
};
cc.Sprite.INDEX_NOT_INITIALIZED = -1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Sprite.prototype, _p._spriteFrameLoadedCallback = function (a) {
    this.setNodeDirty(!0);
    this.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
    a = this.color;
    (255 !== a.r || 255 !== a.g || 255 !== a.b) && this._changeTextureColor();
    this._callLoadedEventCallbacks()
}, _p.setOpacityModifyRGB = function (a) {
    this._opacityModifyRGB !== a && (this._opacityModifyRGB = a, this.setNodeDirty(!0))
}, _p.updateDisplayedOpacity = function (a) {
    cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this,
        a);
    this._setNodeDirtyForCache()
}, _p.ctor = function (a, b, c) {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._shouldBeHidden = !1;
    this._offsetPosition = cc.p(0, 0);
    this._unflippedOffsetPositionFromCenter = cc.p(0, 0);
    this._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
    this._rect = cc.rect(0, 0, 0, 0);
    this._newTextureWhenChangeColor = !1;
    this._textureLoaded = !0;
    this._textureRect_Canvas = {x: 0, y: 0, width: 0, height: 0, validRect: !1};
    this._drawSize_Canvas = cc.size(0, 0);
    this._softInit(a, b, c)
}, _p.setBlendFunc = function (a, b) {
    var c = this._blendFunc;
    void 0 === b ? (c.src = a.src, c.dst = a.dst) : (c.src = a, c.dst = b);
    this._isLighterMode = c && (c.src == cc.SRC_ALPHA && c.dst == cc.ONE || c.src == cc.ONE && c.dst == cc.ONE)
}, _p.init = function () {
    if (0 < arguments.length)return this.initWithFile(arguments[0], arguments[1]);
    cc.NodeRGBA.prototype.init.call(this);
    this.dirty = this._recursiveDirty = !1;
    this._opacityModifyRGB = !0;
    this._blendFunc.src = cc.BLEND_SRC;
    this._blendFunc.dst = cc.BLEND_DST;
    this.texture = null;
    this._textureLoaded = !0;
    this._flippedX = this._flippedY = !1;
    this.anchorY = this.anchorX =
        0.5;
    this._offsetPosition.x = 0;
    this._offsetPosition.y = 0;
    this._hasChildren = !1;
    this.setTextureRect(cc.rect(0, 0, 0, 0), !1, cc.size(0, 0));
    return!0
}, _p.initWithTexture = function (a, b, c) {
    cc.assert(0 != arguments.length, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
    if ((c = c || !1) && a.isLoaded()) {
        var d = a.getHtmlElementObj(), d = cc.cutRotateImageToCanvas(d, b), e = new cc.Texture2D;
        e.initWithElement(d);
        e.handleLoadedTexture();
        a = e;
        this._rect = cc.rect(0, 0, b.width, b.height)
    }
    if (!cc.NodeRGBA.prototype.init.call(this))return!1;
    this._batchNode = null;
    this.dirty = this._recursiveDirty = !1;
    this._opacityModifyRGB = !0;
    this._blendFunc.src = cc.BLEND_SRC;
    this._blendFunc.dst = cc.BLEND_DST;
    this._flippedX = this._flippedY = !1;
    this.anchorY = this.anchorX = 0.5;
    this._offsetPosition.x = 0;
    this._offsetPosition.y = 0;
    this._hasChildren = !1;
    this._textureLoaded = d = a.isLoaded();
    if (!d)return this._rectRotated = c, b && (this._rect.x = b.x, this._rect.y = b.y, this._rect.width = b.width, this._rect.height = b.height), a.addLoadedEventListener(this._textureLoadedCallback, this), !0;
    b || (b = cc.rect(0, 0, a.width, a.height));
    a && (d = b.y + b.height, b.x + b.width > a.width && cc.error(cc._LogInfos.RectWidth, a.url), d > a.height && cc.error(cc._LogInfos.RectHeight, a.url));
    this.texture = this._originalTexture = a;
    this.setTextureRect(b, c);
    this.batchNode = null;
    return!0
}, _p._textureLoadedCallback = function (a) {
    if (!this._textureLoaded) {
        this._textureLoaded = !0;
        var b = this._rect;
        b ? cc._rectEqualToZero(b) && (b.width = a.width, b.height = a.height) : b = cc.rect(0, 0, a.width, a.height);
        this.texture = this._originalTexture = a;
        this.setTextureRect(b,
            this._rectRotated);
        this.batchNode = this._batchNode;
        this._callLoadedEventCallbacks()
    }
}, _p.setTextureRect = function (a, b, c) {
    this._rectRotated = b || !1;
    this.setContentSize(c || a);
    this.setVertexRect(a);
    b = this._textureRect_Canvas;
    c = cc.contentScaleFactor();
    b.x = 0 | a.x * c;
    b.y = 0 | a.y * c;
    b.width = 0 | a.width * c;
    b.height = 0 | a.height * c;
    b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this._unflippedOffsetPositionFromCenter;
    this._flippedX && (a.x = -a.x);
    this._flippedY && (a.y = -a.y);
    this._offsetPosition.x = a.x + (this._contentSize.width -
        this._rect.width) / 2;
    this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
    this._batchNode && (this.dirty = !0)
}, _p.updateTransform = function () {
    if (this.dirty) {
        var a = this._parent;
        !this._visible || a && a != this._batchNode && a._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, this._transformToBatch = !a || a == this._batchNode ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a._transformToBatch));
        this.dirty = this._recursiveDirty = !1
    }
    this._hasChildren &&
    this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
}, _p.addChild = function (a, b, c) {
    cc.assert(a, cc._LogInfos.CCSpriteBatchNode_addChild_2);
    null == b && (b = a._localZOrder);
    null == c && (c = a.tag);
    cc.NodeRGBA.prototype.addChild.call(this, a, b, c);
    this._hasChildren = !0
}, _p.setOpacity = function (a) {
    cc.NodeRGBA.prototype.setOpacity.call(this, a);
    this._setNodeDirtyForCache()
}, _p.setColor = function (a) {
    var b = this.color;
    b.r === a.r && b.g === a.g && b.b === a.b || (cc.NodeRGBA.prototype.setColor.call(this,
        a), this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.updateDisplayedColor = function (a) {
    var b = this.color;
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
    a = this._displayedColor;
    b.r === a.r && b.g === a.g && b.b === a.b || (this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.setSpriteFrame = function (a) {
    var b = this;
    "string" == typeof a && (a = cc.spriteFrameCache.getSpriteFrame(a), cc.assert(a, cc._LogInfos.CCSpriteBatchNode_setSpriteFrame));
    b.setNodeDirty(!0);
    var c = a.getOffset();
    b._unflippedOffsetPositionFromCenter.x =
        c.x;
    b._unflippedOffsetPositionFromCenter.y = c.y;
    b._rectRotated = a.isRotated();
    var c = a.getTexture(), d = a.textureLoaded();
    d || (b._textureLoaded = !1, a.addLoadedEventListener(function (a) {
        b._textureLoaded = !0;
        var c = a.getTexture();
        c != b._texture && (b.texture = c);
        b.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
        b._callLoadedEventCallbacks()
    }, b));
    c != b._texture && (b.texture = c);
    b._rectRotated && (b._originalTexture = c);
    b.setTextureRect(a.getRect(), b._rectRotated, a.getOriginalSize());
    b._colorized = !1;
    d && (a =
        b.color, (255 !== a.r || 255 !== a.g || 255 !== a.b) && b._changeTextureColor())
}, _p.isFrameDisplayed = function (a) {
    return a.getTexture() != this._texture ? !1 : cc.rectEqualToRect(a.getRect(), this._rect)
}, _p.setBatchNode = function (a) {
    (this._batchNode = a) ? (this._transformToBatch = cc.AffineTransformIdentity(), this.textureAtlas = this._batchNode.textureAtlas) : (this.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED, this.textureAtlas = null, this.dirty = this._recursiveDirty = !1)
}, _p.setTexture = function (a) {
    a && "string" === typeof a ? (a = cc.textureCache.addImage(a),
        this.setTexture(a), a = a.getContentSize(), this.setTextureRect(cc.rect(0, 0, a.width, a.height))) : (cc.assert(!a || a instanceof cc.Texture2D, cc._LogInfos.CCSpriteBatchNode_setTexture), this._texture != a && (a && a.getHtmlElementObj()instanceof HTMLImageElement && (this._originalTexture = a), this._texture = a))
}, _p.draw = function (a) {
    if (this._textureLoaded) {
        a = a || cc._renderContext;
        this._isLighterMode && (a.globalCompositeOperation = "lighter");
        var b = cc.view.getScaleX(), c = cc.view.getScaleY();
        a.globalAlpha = this._displayedOpacity /
            255;
        var d = this._rect, e = this._contentSize, f = this._offsetPosition, g = this._drawSize_Canvas, h = 0 | f.x, k = -f.y - d.height, l = this._textureRect_Canvas;
        g.width = d.width * b;
        g.height = d.height * c;
        if (this._flippedX || this._flippedY)a.save(), this._flippedX && (h = -f.x - d.width, a.scale(-1, 1)), this._flippedY && (k = f.y, a.scale(1, -1));
        h *= b;
        k *= c;
        this._texture && l.validRect ? (e = this._texture.getHtmlElementObj(), this._colorized ? a.drawImage(e, 0, 0, l.width, l.height, h, k, g.width, g.height) : a.drawImage(e, l.x, l.y, l.width, l.height, h, k, g.width,
            g.height)) : !this._texture && l.validRect && (g = this.color, a.fillStyle = "rgba(" + g.r + "," + g.g + "," + g.b + ",1)", a.fillRect(h, k, e.width * b, e.height * c));
        1 === cc.SPRITE_DEBUG_DRAW || this._showNode ? (a.strokeStyle = "rgba(0,255,0,1)", h /= b, k = -(k / c), h = [cc.p(h, k), cc.p(h + d.width, k), cc.p(h + d.width, k - d.height), cc.p(h, k - d.height)], cc._drawingUtil.drawPoly(h, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (a.strokeStyle = "rgba(0,255,0,1)", b = this._rect, k = -k, h = [cc.p(h, k), cc.p(h + b.width, k), cc.p(h + b.width, k - b.height), cc.p(h, k - b.height)], cc._drawingUtil.drawPoly(h,
            4, !0));
        (this._flippedX || this._flippedY) && a.restore();
        cc.g_NumberOfDraws++
    }
}, delete _p) : (cc.assert("function" === typeof cc._tmp.WebGLSprite, cc._LogInfos.MissingFile, "SpritesWebGL.js"), cc._tmp.WebGLSprite(), delete cc._tmp.WebGLSprite);
cc.assert("function" === typeof cc._tmp.PrototypeSprite, cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;
cc.AnimationFrame = cc.Class.extend({_spriteFrame: null, _delayPerUnit: 0, _userInfo: null, ctor: function (a, b, c) {
    this._spriteFrame = a || null;
    this._delayPerUnit = b || 0;
    this._userInfo = c || null
}, clone: function () {
    var a = new cc.AnimationFrame;
    a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
    return a
}, copyWithZone: function (a) {
    return cc.clone(this)
}, copy: function (a) {
    a = new cc.AnimationFrame;
    a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
    return a
}, initWithSpriteFrame: function (a, b, c) {
    this._spriteFrame = a;
    this._delayPerUnit = b;
    this._userInfo = c;
    return!0
}, getSpriteFrame: function () {
    return this._spriteFrame
}, setSpriteFrame: function (a) {
    this._spriteFrame = a
}, getDelayUnits: function () {
    return this._delayPerUnit
}, setDelayUnits: function (a) {
    this._delayPerUnit = a
}, getUserInfo: function () {
    return this._userInfo
}, setUserInfo: function (a) {
    this._userInfo = a
}});
cc.AnimationFrame.create = function (a, b, c) {
    return new cc.AnimationFrame(a, b, c)
};
cc.Animation = cc.Class.extend({_frames: null, _loops: 0, _restoreOriginalFrame: !1, _duration: 0, _delayPerUnit: 0, _totalDelayUnits: 0, ctor: function (a, b, c) {
    this._frames = [];
    if (void 0 === a)this.initWithSpriteFrames(null, 0); else {
        var d = a[0];
        d && (d instanceof cc.SpriteFrame ? this.initWithSpriteFrames(a, b, c) : d instanceof cc.AnimationFrame && this.initWithAnimationFrames(a, b, c))
    }
}, getFrames: function () {
    return this._frames
}, setFrames: function (a) {
    this._frames = a
}, addSpriteFrame: function (a) {
    var b = new cc.AnimationFrame;
    b.initWithSpriteFrame(a,
        1, null);
    this._frames.push(b);
    this._totalDelayUnits++
}, addSpriteFrameWithFile: function (a) {
    a = cc.textureCache.addImage(a);
    var b = cc.rect(0, 0, 0, 0);
    b.width = a.width;
    b.height = a.height;
    a = cc.SpriteFrame.create(a, b);
    this.addSpriteFrame(a)
}, addSpriteFrameWithTexture: function (a, b) {
    var c = cc.SpriteFrame.create(a, b);
    this.addSpriteFrame(c)
}, initWithAnimationFrames: function (a, b, c) {
    cc.arrayVerifyType(a, cc.AnimationFrame);
    this._delayPerUnit = b;
    this._loops = void 0 === c ? 1 : c;
    this._totalDelayUnits = 0;
    b = this._frames;
    for (c = b.length =
        0; c < a.length; c++) {
        var d = a[c];
        b.push(d);
        this._totalDelayUnits += d.getDelayUnits()
    }
    return!0
}, clone: function () {
    var a = new cc.Animation;
    a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    a.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return a
}, copyWithZone: function (a) {
    a = new cc.Animation;
    a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    a.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return a
}, _copyFrames: function () {
    for (var a = [], b = 0; b < this._frames.length; b++)a.push(this._frames[b].clone());
    return a
}, copy: function (a) {
    return this.copyWithZone(null)
}, getLoops: function () {
    return this._loops
}, setLoops: function (a) {
    this._loops = a
}, setRestoreOriginalFrame: function (a) {
    this._restoreOriginalFrame = a
}, getRestoreOriginalFrame: function () {
    return this._restoreOriginalFrame
}, getDuration: function () {
    return this._totalDelayUnits * this._delayPerUnit
}, getDelayPerUnit: function () {
    return this._delayPerUnit
}, setDelayPerUnit: function (a) {
    this._delayPerUnit = a
}, getTotalDelayUnits: function () {
    return this._totalDelayUnits
},
    initWithSpriteFrames: function (a, b, c) {
        cc.arrayVerifyType(a, cc.SpriteFrame);
        this._loops = void 0 === c ? 1 : c;
        this._delayPerUnit = b || 0;
        this._totalDelayUnits = 0;
        b = this._frames;
        b.length = 0;
        if (a) {
            for (c = 0; c < a.length; c++) {
                var d = a[c], e = new cc.AnimationFrame;
                e.initWithSpriteFrame(d, 1, null);
                b.push(e)
            }
            this._totalDelayUnits += a.length
        }
        return!0
    }, retain: function () {
    }, release: function () {
    }});
cc.Animation.create = function (a, b, c) {
    return new cc.Animation(a, b, c)
};
cc.animationCache = {_animations: {}, addAnimation: function (a, b) {
    this._animations[b] = a
}, removeAnimation: function (a) {
    a && this._animations[a] && delete this._animations[a]
}, getAnimation: function (a) {
    return this._animations[a] ? this._animations[a] : null
}, _addAnimationsWithDictionary: function (a, b) {
    var c = a.animations;
    if (c) {
        var d = 1, e = a.properties;
        if (e)for (var d = null != e.format ? parseInt(e.format) : d, e = e.spritesheets, f = cc.spriteFrameCache, g = cc.path, h = 0; h < e.length; h++)f.addSpriteFrames(g.changeBasename(b, e[h]));
        switch (d) {
            case 1:
                this._parseVersion1(c);
                break;
            case 2:
                this._parseVersion2(c);
                break;
            default:
                cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2)
        }
    } else cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary)
}, addAnimations: function (a) {
    cc.assert(a, cc._LogInfos.animationCache_addAnimations_2);
    var b = cc.loader.getRes(a);
    b ? this._addAnimationsWithDictionary(b, a) : cc.log(cc._LogInfos.animationCache_addAnimations)
}, _parseVersion1: function (a) {
    var b = cc.spriteFrameCache, c;
    for (c in a) {
        var d = a[c], e = d.frames, d = parseFloat(d.delay) ||
            0, f = null;
        if (e) {
            for (var f = [], g = 0; g < e.length; g++) {
                var h = b.getSpriteFrame(e[g]);
                if (h) {
                    var k = new cc.AnimationFrame;
                    k.initWithSpriteFrame(h, 1, null);
                    f.push(k)
                } else cc.log(cc._LogInfos.animationCache__parseVersion1_2, c, e[g])
            }
            0 === f.length ? cc.log(cc._LogInfos.animationCache__parseVersion1_3, c) : (f.length != e.length && cc.log(cc._LogInfos.animationCache__parseVersion1_4, c), f = cc.Animation.create(f, d, 1), cc.animationCache.addAnimation(f, c))
        } else cc.log(cc._LogInfos.animationCache__parseVersion1, c)
    }
}, _parseVersion2: function (a) {
    var b =
        cc.spriteFrameCache, c;
    for (c in a) {
        var d = a[c], e = d.loop, f = parseInt(d.loops), e = e ? cc.REPEAT_FOREVER : isNaN(f) ? 1 : f, f = d.restoreOriginalFrame && !0 == d.restoreOriginalFrame ? !0 : !1, g = d.frames;
        if (g) {
            for (var h = [], k = 0; k < g.length; k++) {
                var l = g[k], m = l.spriteframe, n = b.getSpriteFrame(m);
                if (n) {
                    var m = parseFloat(l.delayUnits) || 0, l = l.notification, q = new cc.AnimationFrame;
                    q.initWithSpriteFrame(n, m, l);
                    h.push(q)
                } else cc.log(cc._LogInfos.animationCache__parseVersion2_2, c, m)
            }
            d = parseFloat(d.delayPerUnit) || 0;
            g = new cc.Animation;
            g.initWithAnimationFrames(h,
                d, e);
            g.setRestoreOriginalFrame(f);
            cc.animationCache.addAnimation(g, c)
        } else cc.log(cc._LogInfos.animationCache__parseVersion2, c)
    }
}, _clear: function () {
    this._animations = {}
}};
cc.SpriteFrame = cc.Class.extend({_offset: null, _originalSize: null, _rectInPixels: null, _rotated: !1, _rect: null, _offsetInPixels: null, _originalSizeInPixels: null, _texture: null, _textureFilename: "", _textureLoaded: !1, _eventListeners: null, ctor: function (a, b, c, d, e) {
    this._offset = cc.p(0, 0);
    this._offsetInPixels = cc.p(0, 0);
    this._originalSize = cc.size(0, 0);
    this._rotated = !1;
    this._originalSizeInPixels = cc.size(0, 0);
    this._textureFilename = "";
    this._texture = null;
    this._textureLoaded = !1;
    void 0 !== a && void 0 !== b && (void 0 === c || void 0 ===
        d || void 0 === e ? this.initWithTexture(a, b) : this.initWithTexture(a, b, c, d, e))
}, textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (a, b) {
    null == this._eventListeners && (this._eventListeners = []);
    this._eventListeners.push({eventCallback: a, eventTarget: b})
}, _callLoadedEventCallbacks: function () {
    var a = this._eventListeners;
    if (a) {
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            d.eventCallback.call(d.eventTarget, this)
        }
        a.length = 0
    }
}, getRectInPixels: function () {
    var a = this._rectInPixels;
    return cc.rect(a.x,
        a.y, a.width, a.height)
}, setRectInPixels: function (a) {
    this._rectInPixels || (this._rectInPixels = cc.rect(0, 0, 0, 0));
    this._rectInPixels.x = a.x;
    this._rectInPixels.y = a.y;
    this._rectInPixels.width = a.width;
    this._rectInPixels.height = a.height;
    this._rect = cc.rectPixelsToPoints(a)
}, isRotated: function () {
    return this._rotated
}, setRotated: function (a) {
    this._rotated = a
}, getRect: function () {
    var a = this._rect;
    return cc.rect(a.x, a.y, a.width, a.height)
}, setRect: function (a) {
    this._rect || (this._rect = cc.rect(0, 0, 0, 0));
    this._rect.x = a.x;
    this._rect.y = a.y;
    this._rect.width = a.width;
    this._rect.height = a.height;
    this._rectInPixels = cc.rectPointsToPixels(this._rect)
}, getOffsetInPixels: function () {
    return this._offsetInPixels
}, setOffsetInPixels: function (a) {
    this._offsetInPixels.x = a.x;
    this._offsetInPixels.y = a.y;
    cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset)
}, getOriginalSizeInPixels: function () {
    return this._originalSizeInPixels
}, setOriginalSizeInPixels: function (a) {
    this._originalSizeInPixels.width = a.width;
    this._originalSizeInPixels.height =
        a.height
}, getOriginalSize: function () {
    return this._originalSize
}, setOriginalSize: function (a) {
    this._originalSize.width = a.width;
    this._originalSize.height = a.height
}, getTexture: function () {
    if (this._texture)return this._texture;
    if ("" !== this._textureFilename) {
        var a = cc.textureCache.addImage(this._textureFilename);
        a && (this._textureLoaded = a.isLoaded());
        return a
    }
    return null
}, setTexture: function (a) {
    if (this._texture != a) {
        var b = a.isLoaded();
        this._textureLoaded = b;
        this._texture = a;
        b || a.addLoadedEventListener(function (a) {
            this._textureLoaded = !0;
            if (this._rotated && cc._renderType === cc._RENDER_TYPE_CANVAS) {
                var b = a.getHtmlElementObj(), b = cc.cutRotateImageToCanvas(b, this.getRect()), e = new cc.Texture2D;
                e.initWithElement(b);
                e.handleLoadedTexture();
                this.setTexture(e);
                b = this.getRect();
                this.setRect(cc.rect(0, 0, b.width, b.height))
            }
            b = this._rect;
            0 === b.width && 0 === b.height && (b = a.width, a = a.height, this._rect.width = b, this._rect.height = a, this._rectInPixels = cc.rectPointsToPixels(this._rect), this._originalSizeInPixels.width = this._rectInPixels.width, this._originalSizeInPixels.height =
                this._rectInPixels.height, this._originalSize.width = b, this._originalSize.height = a);
            this._callLoadedEventCallbacks()
        }, this)
    }
}, getOffset: function () {
    return this._offset
}, setOffset: function (a) {
    this._offset.x = a.x;
    this._offset.y = a.y
}, clone: function () {
    var a = new cc.SpriteFrame;
    a.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    a.setTexture(this._texture);
    return a
}, copyWithZone: function () {
    var a = new cc.SpriteFrame;
    a.initWithTexture(this._textureFilename,
        this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    a.setTexture(this._texture);
    return a
}, copy: function () {
    return this.copyWithZone()
}, initWithTexture: function (a, b, c, d, e) {
    2 === arguments.length && (b = cc.rectPointsToPixels(b));
    d = d || cc.p(0, 0);
    e = e || b;
    c = c || !1;
    "string" == typeof a ? (this._texture = null, this._textureFilename = a) : a instanceof cc.Texture2D && this.setTexture(a);
    if (a = this.getTexture()) {
        var f, g;
        c ? (f = b.x + b.height, g = b.y + b.width) : (f = b.x + b.width, g = b.y + b.height);
        f > a.width && cc.error(cc._LogInfos.RectWidth,
            a.url);
        g > a.height && cc.error(cc._LogInfos.RectHeight, a.url)
    }
    this._rectInPixels = b;
    this._rect = cc.rectPixelsToPoints(b);
    this._offsetInPixels.x = d.x;
    this._offsetInPixels.y = d.y;
    cc._pointPixelsToPointsOut(d, this._offset);
    this._originalSizeInPixels.width = e.width;
    this._originalSizeInPixels.height = e.height;
    cc._sizePixelsToPointsOut(e, this._originalSize);
    this._rotated = c;
    return!0
}});
cc.SpriteFrame.create = function (a, b, c, d, e) {
    return new cc.SpriteFrame(a, b, c, d, e)
};
cc.SpriteFrame._frameWithTextureForCanvas = function (a, b, c, d, e) {
    var f = new cc.SpriteFrame;
    f._texture = a;
    f._rectInPixels = b;
    f._rect = cc.rectPixelsToPoints(b);
    f._offsetInPixels.x = d.x;
    f._offsetInPixels.y = d.y;
    cc._pointPixelsToPointsOut(f._offsetInPixels, f._offset);
    f._originalSizeInPixels.width = e.width;
    f._originalSizeInPixels.height = e.height;
    cc._sizePixelsToPointsOut(f._originalSizeInPixels, f._originalSize);
    f._rotated = c;
    return f
};
cc.spriteFrameCache = {_CCNS_REG1: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/, _CCNS_REG2: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/, _spriteFrames: {}, _spriteFramesAliases: {}, _frameConfigCache: {}, _rectFromString: function (a) {
    a = this._CCNS_REG2.exec(a);
    return!a ? cc.rect(0, 0, 0, 0) : cc.rect(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), parseFloat(a[4]))
}, _pointFromString: function (a) {
    a = this._CCNS_REG1.exec(a);
    return!a ? cc.p(0, 0) : cc.p(parseFloat(a[1]), parseFloat(a[2]))
}, _sizeFromString: function (a) {
    a = this._CCNS_REG1.exec(a);
    return!a ? cc.size(0, 0) : cc.size(parseFloat(a[1]), parseFloat(a[2]))
}, _getFrameConfig: function (a) {
    var b = cc.loader.getRes(a);
    cc.assert(b, cc._LogInfos.spriteFrameCache__getFrameConfig_2, a);
    cc.loader.release(a);
    if (b._inited)return this._frameConfigCache[a] = b;
    var c = b.frames, d = b.metadata || b.meta, b = {}, e = {}, f = 0;
    d && (f = d.format, f = 1 >= f.length ? parseInt(f) : f, e.image = d.textureFileName || d.textureFileName ||
        d.image);
    for (var g in c) {
        var h = c[g];
        if (h) {
            d = {};
            if (0 == f) {
                d.rect = cc.rect(h.x, h.y, h.width, h.height);
                d.rotated = !1;
                d.offset = cc.p(h.offsetX, h.offsetY);
                var k = h.originalWidth, h = h.originalHeight;
                (!k || !h) && cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig);
                k = Math.abs(k);
                h = Math.abs(h);
                d.size = cc.size(k, h)
            } else if (1 == f || 2 == f)d.rect = this._rectFromString(h.frame), d.rotated = h.rotated || !1, d.offset = this._pointFromString(h.offset), d.size = this._sizeFromString(h.sourceSize); else if (3 == f) {
                var k = this._sizeFromString(h.spriteSize),
                    l = this._rectFromString(h.textureRect);
                k && (l = cc.rect(l.x, l.y, k.width, k.height));
                d.rect = l;
                d.rotated = h.textureRotated || !1;
                d.offset = this._pointFromString(h.spriteOffset);
                d.size = this._sizeFromString(h.spriteSourceSize);
                d.aliases = h.aliases
            } else k = h.frame, l = h.sourceSize, g = h.filename || g, d.rect = cc.rect(k.x, k.y, k.w, k.h), d.rotated = h.rotated || !1, d.offset = cc.p(0, 0), d.size = cc.size(l.w, l.h);
            b[g] = d
        }
    }
    return this._frameConfigCache[a] = {_inited: !0, frames: b, meta: e}
}, addSpriteFrames: function (a, b) {
    cc.assert(a, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
    var c = this._frameConfigCache[a] || cc.loader.getRes(a);
    if (c && c.frames) {
        var d = this._frameConfigCache[a] || this._getFrameConfig(a), c = d.frames, d = d.meta;
        b ? b instanceof cc.Texture2D || ("string" == typeof b ? b = cc.textureCache.addImage(b) : cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3)) : (d = cc.path.changeBasename(a, d.image || ".png"), b = cc.textureCache.addImage(d));
        var d = this._spriteFramesAliases, e = this._spriteFrames, f;
        for (f in c) {
            var g = c[f], h = e[f];
            if (!h) {
                h = cc.SpriteFrame.create(b, g.rect, g.rotated, g.offset,
                    g.size);
                if (g = g.aliases)for (var k = 0, l = g.length; k < l; k++) {
                    var m = g[k];
                    d[m] && cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, m);
                    d[m] = f
                }
                cc._renderType === cc._RENDER_TYPE_CANVAS && h.isRotated() && h.getTexture().isLoaded() && (g = h.getTexture().getHtmlElementObj(), g = cc.cutRotateImageToCanvas(g, h.getRectInPixels()), k = new cc.Texture2D, k.initWithElement(g), k.handleLoadedTexture(), h.setTexture(k), g = h._rect, h.setRect(cc.rect(0, 0, g.width, g.height)));
                e[f] = h
            }
        }
    }
}, _checkConflict: function (a) {
    a = a.frames;
    for (var b in a)this._spriteFrames[b] &&
    cc.log(cc._LogInfos.spriteFrameCache__checkConflict, b)
}, addSpriteFrame: function (a, b) {
    this._spriteFrames[b] = a
}, removeSpriteFrames: function () {
    this._spriteFrames = {};
    this._spriteFramesAliases = {}
}, removeSpriteFrameByName: function (a) {
    a && (this._spriteFramesAliases[a] && delete this._spriteFramesAliases[a], this._spriteFrames[a] && delete this._spriteFrames[a])
}, removeSpriteFramesFromFile: function (a) {
    var b = this._spriteFrames, c = this._spriteFramesAliases;
    if (a = this._frameConfigCache[a]) {
        a = a.frames;
        for (var d in a)if (b[d]) {
            delete b[d];
            for (var e in c)c[e] == d && delete c[e]
        }
    }
}, removeSpriteFramesFromTexture: function (a) {
    var b = this._spriteFrames, c = this._spriteFramesAliases, d;
    for (d in b) {
        var e = b[d];
        if (e && e.getTexture() == a) {
            delete b[d];
            for (var f in c)c[f] == d && delete c[f]
        }
    }
}, getSpriteFrame: function (a) {
    var b = this._spriteFrames[a];
    if (!b) {
        var c = this._spriteFramesAliases[a];
        c && ((b = this._spriteFrames[c.toString()]) || delete this._spriteFramesAliases[a])
    }
    b || cc.log(cc._LogInfos.spriteFrameCache_getSpriteFrame, a);
    return b
}, _clear: function () {
    this._spriteFrames =
    {};
    this._spriteFramesAliases = {};
    this._frameConfigCache = {}
}};
cc.g_NumberOfDraws = 0;
cc.GLToClipTransform = function (a) {
    var b = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, b);
    var c = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, c);
    cc.kmMat4Multiply(a, b, c)
};
cc.Director = cc.Class.extend({_landscape: !1, _nextDeltaTimeZero: !1, _paused: !1, _purgeDirectorInNextLoop: !1, _sendCleanupToScene: !1, _animationInterval: 0, _oldAnimationInterval: 0, _projection: 0, _accumDt: 0, _contentScaleFactor: 1, _displayStats: !1, _deltaTime: 0, _frameRate: 0, _FPSLabel: null, _SPFLabel: null, _drawsLabel: null, _winSizeInPoints: null, _lastUpdate: null, _nextScene: null, _notificationNode: null, _openGLView: null, _scenesStack: null, _projectionDelegate: null, _runningScene: null, _frames: 0, _totalFrames: 0, _secondsPerFrame: 0,
    _dirtyRegion: null, _scheduler: null, _actionManager: null, _eventProjectionChanged: null, _eventAfterDraw: null, _eventAfterVisit: null, _eventAfterUpdate: null, ctor: function () {
        var a = this;
        a._lastUpdate = Date.now();
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            a._lastUpdate = Date.now()
        })
    }, init: function () {
        this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
        this._scenesStack = [];
        this._projection = cc.Director.PROJECTION_DEFAULT;
        this._projectionDelegate = null;
        this._frameRate = this._accumDt =
            0;
        this._displayStats = !1;
        this._totalFrames = this._frames = 0;
        this._lastUpdate = Date.now();
        this._purgeDirectorInNextLoop = this._paused = !1;
        this._winSizeInPoints = cc.size(0, 0);
        this._openGLView = null;
        this._contentScaleFactor = 1;
        this._scheduler = new cc.Scheduler;
        this._actionManager = cc.ActionManager ? new cc.ActionManager : null;
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, !1);
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
        this._eventAfterDraw.setUserData(this);
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
        this._eventAfterVisit.setUserData(this);
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
        this._eventAfterUpdate.setUserData(this);
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
        this._eventProjectionChanged.setUserData(this);
        return!0
    }, calculateDeltaTime: function () {
        var a = Date.now();
        this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime =
            (a - this._lastUpdate) / 1E3;
        0 < cc.game.config[cc.game.CONFIG_KEY.debugMode] && 0.2 < this._deltaTime && (this._deltaTime = 1 / 60);
        this._lastUpdate = a
    }, drawScene: function () {
        this.calculateDeltaTime();
        this._paused || (this._scheduler.update(this._deltaTime), cc.eventManager.dispatchEvent(this._eventAfterUpdate));
        this._clear();
        this._nextScene && this.setNextScene();
        this._beforeVisitScene && this._beforeVisitScene();
        this._runningScene && (this._runningScene.visit(), cc.eventManager.dispatchEvent(this._eventAfterVisit));
        this._notificationNode &&
        this._notificationNode.visit();
        this._displayStats && this._showStats();
        this._afterVisitScene && this._afterVisitScene();
        cc.eventManager.dispatchEvent(this._eventAfterDraw);
        this._totalFrames++;
        this._displayStats && this._calculateMPF()
    }, _beforeVisitScene: null, _afterVisitScene: null, end: function () {
        this._purgeDirectorInNextLoop = !0
    }, getContentScaleFactor: function () {
        return this._contentScaleFactor
    }, getNotificationNode: function () {
        return this._notificationNode
    }, getWinSize: function () {
        return this._winSizeInPoints
    },
    getWinSizeInPixels: function () {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
    }, pause: function () {
        this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(0.25), this._paused = !0)
    }, popScene: function () {
        cc.assert(this._runningScene, cc._LogInfos.Director_popScene);
        this._scenesStack.pop();
        var a = this._scenesStack.length;
        0 == a ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[a -
            1])
    }, purgeCachedData: function () {
        cc.animationCache._clear();
        cc.spriteFrameCache._clear();
        cc.textureCache._clear()
    }, purgeDirector: function () {
        this.getScheduler().unscheduleAllCallbacks();
        cc.eventManager && cc.eventManager.setEnabled(!1);
        this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), this._runningScene.cleanup());
        this._nextScene = this._runningScene = null;
        this._scenesStack.length = 0;
        this.stopAnimation();
        this.purgeCachedData();
        cc.checkGLErrorDebug()
    }, pushScene: function (a) {
        cc.assert(a,
            cc._LogInfos.Director_pushScene);
        this._sendCleanupToScene = !1;
        this._scenesStack.push(a);
        this._nextScene = a
    }, runScene: function (a) {
        cc.assert(a, cc._LogInfos.Director_pushScene);
        if (this._runningScene) {
            var b = this._scenesStack.length;
            0 === b ? (this._sendCleanupToScene = !0, this._scenesStack[b] = a) : (this._sendCleanupToScene = !0, this._scenesStack[b - 1] = a);
            this._nextScene = a
        } else this.pushScene(a), this.startAnimation()
    }, resume: function () {
        this._paused && (this.setAnimationInterval(this._oldAnimationInterval), (this._lastUpdate =
            Date.now()) || cc.log(cc._LogInfos.Director_resume), this._paused = !1, this._deltaTime = 0)
    }, setContentScaleFactor: function (a) {
        a != this._contentScaleFactor && (this._contentScaleFactor = a, this._createStatsLabel())
    }, setDefaultValues: function () {
    }, setNextDeltaTimeZero: function (a) {
        this._nextDeltaTimeZero = a
    }, setNextScene: function () {
        var a = !1, b = !1;
        cc.TransitionScene && (a = this._runningScene ? this._runningScene instanceof cc.TransitionScene : !1, b = this._nextScene ? this._nextScene instanceof cc.TransitionScene : !1);
        if (!b) {
            if (b =
                this._runningScene)b.onExitTransitionDidStart(), b.onExit();
            this._sendCleanupToScene && b && b.cleanup()
        }
        this._runningScene = this._nextScene;
        this._nextScene = null;
        !a && null != this._runningScene && (this._runningScene.onEnter(), this._runningScene.onEnterTransitionDidFinish())
    }, setNotificationNode: function (a) {
        this._notificationNode = a
    }, getDelegate: function () {
        return this._projectionDelegate
    }, setDelegate: function (a) {
        this._projectionDelegate = a
    }, _showStats: function () {
        this._frames++;
        this._accumDt += this._deltaTime;
        this._FPSLabel &&
        this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.string = this._secondsPerFrame.toFixed(3), this._frameRate = this._frames / this._accumDt, this._accumDt = this._frames = 0, this._FPSLabel.string = this._frameRate.toFixed(1), this._drawsLabel.string = (0 | cc.g_NumberOfDraws).toString()), this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel();
        cc.g_NumberOfDraws = 0
    }, isSendCleanupToScene: function () {
        return this._sendCleanupToScene
    }, getRunningScene: function () {
        return this._runningScene
    },
    getAnimationInterval: function () {
        return this._animationInterval
    }, isDisplayStats: function () {
        return this._displayStats
    }, setDisplayStats: function (a) {
        this._displayStats = a
    }, getSecondsPerFrame: function () {
        return this._secondsPerFrame
    }, isNextDeltaTimeZero: function () {
        return this._nextDeltaTimeZero
    }, isPaused: function () {
        return this._paused
    }, getTotalFrames: function () {
        return this._totalFrames
    }, popToRootScene: function () {
        this.popToSceneStackLevel(1)
    }, popToSceneStackLevel: function (a) {
        cc.assert(this._runningScene,
            cc._LogInfos.Director_popToSceneStackLevel_2);
        var b = this._scenesStack, c = b.length;
        if (0 == c)this.end(); else if (!(a > c)) {
            for (; c > a;) {
                var d = b.pop();
                d.running && (d.onExitTransitionDidStart(), d.onExit());
                d.cleanup();
                c--
            }
            this._nextScene = b[b.length - 1];
            this._sendCleanupToScene = !1
        }
    }, getScheduler: function () {
        return this._scheduler
    }, setScheduler: function (a) {
        this._scheduler != a && (this._scheduler = a)
    }, getActionManager: function () {
        return this._actionManager
    }, setActionManager: function (a) {
        this._actionManager != a && (this._actionManager =
            a)
    }, getDeltaTime: function () {
        return this._deltaTime
    }, _createStatsLabel: null, _calculateMPF: function () {
        this._secondsPerFrame = (Date.now() - this._lastUpdate) / 1E3
    }});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.DisplayLinkDirector = cc.Director.extend({invalid: !1, startAnimation: function () {
    this._nextDeltaTimeZero = !0;
    this.invalid = !1
}, mainLoop: function () {
    this._purgeDirectorInNextLoop ? (this._purgeDirectorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene()
}, stopAnimation: function () {
    this.invalid = !0
}, setAnimationInterval: function (a) {
    this._animationInterval = a;
    this.invalid || (this.stopAnimation(), this.startAnimation())
}});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = !0;
cc.Director._getInstance = function () {
    cc.Director.firstUseDirector && (cc.Director.firstUseDirector = !1, cc.Director.sharedDirector = new cc.DisplayLinkDirector, cc.Director.sharedDirector.init());
    return cc.Director.sharedDirector
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Director.prototype, _p.setProjection = function (a) {
    this._projection = a;
    cc.eventManager.dispatchEvent(this._eventProjectionChanged)
}, _p.setDepthTest = function () {
}, _p.setOpenGLView = function (a) {
    this._winSizeInPoints.width = cc._canvas.width;
    this._winSizeInPoints.height = cc._canvas.height;
    this._openGLView = a || cc.view;
    cc.eventManager && cc.eventManager.setEnabled(!0)
}, _p._clear = function () {
    var a = this._openGLView.getViewPortRect();
    cc._renderContext.fillRect(-a.x, a.y,
        a.width, -a.height)
}, _p._createStatsLabel = function () {
    var a = 0, a = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | 24 * (this._winSizeInPoints.height / 320) : 0 | 24 * (this._winSizeInPoints.width / 320);
    this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", a);
    this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", a);
    this._drawsLabel = cc.LabelTTF.create("0000", "Arial", a);
    a = cc.DIRECTOR_STATS_POSITION;
    this._drawsLabel.setPosition(this._drawsLabel.width / 2 + a.x, 5 * this._drawsLabel.height / 2 + a.y);
    this._SPFLabel.setPosition(this._SPFLabel.width /
        2 + a.x, 3 * this._SPFLabel.height / 2 + a.y);
    this._FPSLabel.setPosition(this._FPSLabel.width / 2 + a.x, this._FPSLabel.height / 2 + a.y)
}, _p.getVisibleSize = function () {
    return this.getWinSize()
}, _p.getVisibleOrigin = function () {
    return cc.p(0, 0)
}) : (cc.Director._fpsImage = new Image, cc._addEventListener(cc.Director._fpsImage, "load", function () {
    cc.Director._fpsImageLoaded = !0
}), cc._fpsImage && (cc.Director._fpsImage.src = cc._fpsImage), cc.assert("function" === typeof cc._tmp.DirectorWebGL, cc._LogInfos.MissingFile, "CCDirectorWebGL.js"),
    cc._tmp.DirectorWebGL(), delete cc._tmp.DirectorWebGL);
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.arrayVerifyType = function (a, b) {
    if (a && 0 < a.length)for (var c = 0; c < a.length; c++)if (!(a[c]instanceof b))return cc.log(cc._LogInfos.arrayVerifyType), !1;
    return!0
};
cc.arrayRemoveObject = function (a, b) {
    for (var c = 0, d = a.length; c < d; c++)if (a[c] == b) {
        a.splice(c, 1);
        break
    }
};
cc.arrayRemoveArray = function (a, b) {
    for (var c = 0, d = b.length; c < d; c++)cc.arrayRemoveObject(a, b[c])
};
cc.arrayAppendObjectsToIndex = function (a, b, c) {
    a.splice.apply(a, [c, 0].concat(b));
    return a
};
cc.ListEntry = function (a, b, c, d, e, f) {
    this.prev = a;
    this.next = b;
    this.target = c;
    this.priority = d;
    this.paused = e;
    this.markedForDeletion = f
};
cc.HashUpdateEntry = function (a, b, c, d) {
    this.list = a;
    this.entry = b;
    this.target = c;
    this.hh = d
};
cc.HashTimerEntry = function (a, b, c, d, e, f, g) {
    this.timers = a;
    this.target = b;
    this.timerIndex = c;
    this.currentTimer = d;
    this.currentTimerSalvaged = e;
    this.paused = f;
    this.hh = g
};
cc.Timer = cc.Class.extend({_interval: 0, _callback: null, _target: null, _elapsed: 0, _runForever: !1, _useDelay: !1, _timesExecuted: 0, _repeat: 0, _delay: 0, getInterval: function () {
    return this._interval
}, setInterval: function (a) {
    this._interval = a
}, getCallback: function () {
    return this._callback
}, ctor: function (a, b, c, d, e) {
    this._target = a;
    this._callback = b;
    this._elapsed = -1;
    this._interval = c || 0;
    this._delay = e || 0;
    this._useDelay = 0 < this._delay;
    this._repeat = null == d ? cc.REPEAT_FOREVER : d;
    this._runForever = this._repeat == cc.REPEAT_FOREVER
},
    _doCallback: function () {
        if ("string" == typeof this._callback)this._target[this._callback](this._elapsed); else this._callback.call(this._target, this._elapsed)
    }, update: function (a) {
        if (-1 == this._elapsed)this._timesExecuted = this._elapsed = 0; else {
            var b = this._target, c = this._callback;
            this._elapsed += a;
            this._runForever && !this._useDelay ? this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0) : (this._useDelay ? this._elapsed >= this._delay && (b && c && this._doCallback(), this._elapsed -= this._delay, this._timesExecuted +=
                1, this._useDelay = !1) : this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.director.getScheduler().unscheduleCallbackForTarget(b, c))
        }
    }});
cc.Scheduler = cc.Class.extend({_timeScale: 1, _updates: null, _hashForUpdates: null, _arrayForUpdates: null, _hashForTimers: null, _arrayForTimes: null, _currentTarget: null, _currentTargetSalvaged: !1, _updateHashLocked: !1, ctor: function () {
    this._timeScale = 1;
    this._updates = [
        [],
        [],
        []
    ];
    this._hashForUpdates = {};
    this._arrayForUpdates = [];
    this._hashForTimers = {};
    this._arrayForTimers = [];
    this._currentTarget = null;
    this._updateHashLocked = this._currentTargetSalvaged = !1
}, _removeHashElement: function (a) {
    delete this._hashForTimers[a.target.__instanceId];
    cc.arrayRemoveObject(this._arrayForTimers, a);
    a.Timer = null;
    a.target = null
}, _removeUpdateFromHash: function (a) {
    if (a = this._hashForUpdates[a.target.__instanceId])cc.arrayRemoveObject(a.list, a.entry), delete this._hashForUpdates[a.target.__instanceId], cc.arrayRemoveObject(this._arrayForUpdates, a), a.entry = null, a.target = null
}, _priorityIn: function (a, b, c, d) {
    d = new cc.ListEntry(null, null, b, c, d, !1);
    if (a) {
        for (var e = a.length - 1, f = 0; f <= e && !(c < a[f].priority); f++);
        a.splice(f, 0, d)
    } else a = [], a.push(d);
    c = new cc.HashUpdateEntry(a,
        d, b, null);
    this._arrayForUpdates.push(c);
    this._hashForUpdates[b.__instanceId] = c;
    return a
}, _appendIn: function (a, b, c) {
    c = new cc.ListEntry(null, null, b, 0, c, !1);
    a.push(c);
    a = new cc.HashUpdateEntry(a, c, b, null);
    this._arrayForUpdates.push(a);
    this._hashForUpdates[b.__instanceId] = a
}, setTimeScale: function (a) {
    this._timeScale = a
}, getTimeScale: function () {
    return this._timeScale
}, update: function (a) {
    var b = this._updates, c = this._arrayForTimers, d, e, f;
    this._updateHashLocked = !0;
    1 != this._timeScale && (a *= this._timeScale);
    e = 0;
    for (f = b.length; e < f && 0 <= e; e++)for (var g = this._updates[e], h = 0, k = g.length; h < k; h++)d = g[h], !d.paused && !d.markedForDeletion && d.target.update(a);
    e = 0;
    for (f = c.length; e < f; e++) {
        d = c[e];
        if (!d)break;
        this._currentTarget = d;
        this._currentTargetSalvaged = !1;
        if (!d.paused)for (d.timerIndex = 0; d.timerIndex < d.timers.length; d.timerIndex++)d.currentTimer = d.timers[d.timerIndex], d.currentTimerSalvaged = !1, d.currentTimer.update(a), d.currentTimer = null;
        this._currentTargetSalvaged && 0 == d.timers.length && (this._removeHashElement(d), e--)
    }
    e =
        0;
    for (f = b.length; e < f; e++) {
        g = this._updates[e];
        h = 0;
        for (k = g.length; h < k;) {
            d = g[h];
            if (!d)break;
            d.markedForDeletion ? this._removeUpdateFromHash(d) : h++
        }
    }
    this._updateHashLocked = !1;
    this._currentTarget = null
}, scheduleCallbackForTarget: function (a, b, c, d, e, f) {
    cc.assert(b, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2);
    cc.assert(a, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
    c = c || 0;
    d = null == d ? cc.REPEAT_FOREVER : d;
    e = e || 0;
    f = f || !1;
    var g = this._hashForTimers[a.__instanceId];
    g || (g = new cc.HashTimerEntry(null, a,
        0, null, null, f, null), this._arrayForTimers.push(g), this._hashForTimers[a.__instanceId] = g);
    if (null == g.timers)g.timers = []; else for (var h = 0; h < g.timers.length; h++)if (f = g.timers[h], b == f._callback) {
        cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, f.getInterval().toFixed(4), c.toFixed(4));
        f._interval = c;
        return
    }
    f = new cc.Timer(a, b, c, d, e);
    g.timers.push(f)
}, scheduleUpdateForTarget: function (a, b, c) {
    if (null !== a) {
        var d = this._updates, e = this._hashForUpdates[a.__instanceId];
        e ? e.entry.markedForDeletion = !1 : 0 == b ? this._appendIn(d[1],
            a, c) : 0 > b ? d[0] = this._priorityIn(d[0], a, b, c) : d[2] = this._priorityIn(d[2], a, b, c)
    }
}, unscheduleCallbackForTarget: function (a, b) {
    if (!(null == a || null == b)) {
        var c = this._hashForTimers[a.__instanceId];
        if (c)for (var d = c.timers, e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            if (b == g._callback) {
                g == c.currentTimer && !c.currentTimerSalvaged && (c.currentTimerSalvaged = !0);
                d.splice(e, 1);
                c.timerIndex >= e && c.timerIndex--;
                0 == d.length && (this._currentTarget == c ? this._currentTargetSalvaged = !0 : this._removeHashElement(c));
                break
            }
        }
    }
}, unscheduleUpdateForTarget: function (a) {
    null !=
    a && (a = this._hashForUpdates[a.__instanceId], null != a && (this._updateHashLocked ? a.entry.markedForDeletion = !0 : this._removeUpdateFromHash(a.entry)))
}, unscheduleAllCallbacksForTarget: function (a) {
    if (null != a) {
        var b = this._hashForTimers[a.__instanceId];
        if (b) {
            var c = b.timers;
            !b.currentTimerSalvaged && 0 <= c.indexOf(b.currentTimer) && (b.currentTimerSalvaged = !0);
            c.length = 0;
            this._currentTarget == b ? this._currentTargetSalvaged = !0 : this._removeHashElement(b)
        }
        this.unscheduleUpdateForTarget(a)
    }
}, unscheduleAllCallbacks: function () {
    this.unscheduleAllCallbacksWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
},
    unscheduleAllCallbacksWithMinPriority: function (a) {
        for (var b = this._arrayForTimers, c = this._updates, d = 0, e = b.length; d < e; d++)this.unscheduleAllCallbacksForTarget(b[d].target);
        for (d = 2; 0 <= d; d--)if (!(1 == d && 0 < a || 0 == d && 0 <= a))for (var b = c[d], e = 0, f = b.length; e < f; e++)this.unscheduleUpdateForTarget(b[e].target)
    }, pauseAllTargets: function () {
        return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
    }, pauseAllTargetsWithMinPriority: function (a) {
        a = [];
        for (var b, c = this._arrayForTimers, d = this._updates, e = 0, f =
            c.length; e < f; e++)if (b = c[e])b.paused = !0, a.push(b.target);
        e = 0;
        for (f = d.length; e < f; e++)for (var c = d[e], g = 0, h = c.length; g < h; g++)if (b = c[g])b.paused = !0, a.push(b.target);
        return a
    }, resumeTargets: function (a) {
        if (a)for (var b = 0; b < a.length; b++)this.resumeTarget(a[b])
    }, pauseTarget: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_pauseTarget);
        var b = this._hashForTimers[a.__instanceId];
        b && (b.paused = !0);
        if (a = this._hashForUpdates[a.__instanceId])a.entry.paused = !0
    }, resumeTarget: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_resumeTarget);
        var b = this._hashForTimers[a.__instanceId];
        b && (b.paused = !1);
        if (a = this._hashForUpdates[a.__instanceId])a.entry.paused = !1
    }, isTargetPaused: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_isTargetPaused);
        return(a = this._hashForTimers[a.__instanceId]) ? a.paused : !1
    }});
cc.Scheduler.PRIORITY_SYSTEM = -2147483648;
cc._tmp.PrototypeLabelTTF = function () {
    var a = cc.LabelTTF.prototype;
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "string", a.getString, a.setString);
    cc.defineGetterSetter(a, "textAlign", a.getHorizontalAlignment, a.setHorizontalAlignment);
    cc.defineGetterSetter(a, "verticalAlign", a.getVerticalAlignment, a.setVerticalAlignment);
    cc.defineGetterSetter(a, "fontSize", a.getFontSize, a.setFontSize);
    cc.defineGetterSetter(a,
        "fontName", a.getFontName, a.setFontName);
    cc.defineGetterSetter(a, "font", a._getFont, a._setFont);
    cc.defineGetterSetter(a, "boundingWidth", a._getBoundingWidth, a._setBoundingWidth);
    cc.defineGetterSetter(a, "boundingHeight", a._getBoundingHeight, a._setBoundingHeight);
    cc.defineGetterSetter(a, "fillStyle", a._getFillStyle, a.setFontFillColor);
    cc.defineGetterSetter(a, "strokeStyle", a._getStrokeStyle, a._setStrokeStyle);
    cc.defineGetterSetter(a, "lineWidth", a._getLineWidth, a._setLineWidth);
    cc.defineGetterSetter(a, "shadowOffsetX",
        a._getShadowOffsetX, a._setShadowOffsetX);
    cc.defineGetterSetter(a, "shadowOffsetY", a._getShadowOffsetY, a._setShadowOffsetY);
    cc.defineGetterSetter(a, "shadowOpacity", a._getShadowOpacity, a._setShadowOpacity);
    cc.defineGetterSetter(a, "shadowBlur", a._getShadowBlur, a._setShadowBlur)
};
cc.LabelTTF = cc.Sprite.extend({_dimensions: null, _hAlignment: cc.TEXT_ALIGNMENT_CENTER, _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP, _fontName: null, _fontSize: 0, _string: "", _originalText: null, _isMultiLine: !1, _fontStyleStr: null, _shadowEnabled: !1, _shadowOffset: null, _shadowOpacity: 0, _shadowBlur: 0, _shadowColorStr: null, _strokeEnabled: !1, _strokeColor: null, _strokeSize: 0, _strokeColorStr: null, _textFillColor: null, _fillColorStr: null, _strokeShadowOffsetX: 0, _strokeShadowOffsetY: 0, _needUpdateTexture: !1, _labelCanvas: null,
    _labelContext: null, _lineWidths: null, _className: "LabelTTF", ctor: function (a, b, c, d, e, f) {
        cc.Sprite.prototype.ctor.call(this);
        this._dimensions = cc.size(0, 0);
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = !1;
        this._fontStyleStr = "";
        this._fontName = "Arial";
        this._shadowEnabled = this._isMultiLine = !1;
        this._shadowOffset = cc.p(0, 0);
        this._shadowBlur = this._shadowOpacity = 0;
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
        this._strokeEnabled = !1;
        this._strokeColor =
            cc.color(255, 255, 255, 255);
        this._strokeSize = 0;
        this._strokeColorStr = "";
        this._textFillColor = cc.color(255, 255, 255, 255);
        this._fillColorStr = "rgba(255,255,255,1)";
        this._strokeShadowOffsetY = this._strokeShadowOffsetX = 0;
        this._needUpdateTexture = !1;
        this._lineWidths = [];
        this._setColorsString();
        b && b instanceof cc.FontDefinition ? this.initWithStringAndTextDefinition(a, b) : cc.LabelTTF.prototype.initWithString.call(this, a, b, c, d, e, f)
    }, init: function () {
        return this.initWithString(" ", this._fontName, this._fontSize)
    }, _measureConfig: function () {
        this._getLabelContext().font =
            this._fontStyleStr
    }, _measure: function (a) {
        return this._getLabelContext().measureText(a).width
    }, _checkNextline: function (a, b) {
        var c = this._measure(a), d = Math.floor(a.length * b / c), e = a.indexOf("\n");
        if (0.8 * d >= e && 0 < e)return e + 1;
        if (c < b)return a.length;
        for (var c = !1, f = b + 1, e = -1, g = d, h, k = cc.LabelTTF._checkRegEx, l = cc.LabelTTF._reverseCheckRegEx, m = cc.LabelTTF._checkEnRegEx, n = a.substr(d); h = k.exec(n);) {
            g += h[0].length;
            f = a.substr(0, g);
            f = this._measure(f);
            if ("\n" == h[2] && f < b) {
                c = !0;
                e = g;
                break
            }
            if (f > b) {
                -1 != e && (c = !0);
                break
            }
            e =
                g;
            n = a.substr(g)
        }
        if (c)return e;
        n = a.substr(0, d);
        for (e = d; h = l.exec(n);)if (e = h[1].length, n = h[1], f = this._measure(n), f < b) {
            m.test(h[2]) && e++;
            break
        }
        return e || 1
    }, description: function () {
        return"\x3ccc.LabelTTF | FontName \x3d" + this._fontName + " FontSize \x3d " + this._fontSize.toFixed(1) + "\x3e"
    }, setColor: null, _setColorsString: null, updateDisplayedColor: null, setOpacity: null, updateDisplayedOpacity: null, updateDisplayedOpacityForCanvas: function (a) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, a);
        this._setColorsString()
    },
    getString: function () {
        return this._string
    }, getHorizontalAlignment: function () {
        return this._hAlignment
    }, getVerticalAlignment: function () {
        return this._vAlignment
    }, getDimensions: function () {
        return cc.size(this._dimensions.width, this._dimensions.height)
    }, getFontSize: function () {
        return this._fontSize
    }, getFontName: function () {
        return this._fontName
    }, initWithString: function (a, b, c, d, e, f) {
        a = a ? a + "" : "";
        c = c || 16;
        d = d || cc.size(0, c);
        e = e || cc.TEXT_ALIGNMENT_LEFT;
        f = f || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = !1;
        this._dimensions = cc.size(d.width, d.height);
        this._fontName = b || "Arial";
        this._hAlignment = e;
        this._vAlignment = f;
        this._fontSize = c;
        this._fontStyleStr = this._fontSize + "px '" + b + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(b, this._fontSize);
        this.string = a;
        this._setColorsString();
        this._updateTexture();
        this._needUpdateTexture = !1;
        return!0
    }, initWithStringAndTextDefinition: null, setTextDefinition: function (a) {
        a && this._updateWithTextDefinition(a, !0)
    }, getTextDefinition: function () {
        return this._prepareTextDefinition(!1)
    },
    enableShadow: function (a, b, c, d) {
        c = c || 0.5;
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        var e = this._shadowOffset;
        if (e && e.x != a || e._y != b)e.x = a, e.y = b;
        this._shadowOpacity != c && (this._shadowOpacity = c);
        this._setColorsString();
        this._shadowBlur != d && (this._shadowBlur = d);
        this._needUpdateTexture = !0
    }, _getShadowOffsetX: function () {
        return this._shadowOffset.x
    }, _setShadowOffsetX: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOffset.x != a && (this._shadowOffset.x = a, this._needUpdateTexture = !0)
    }, _getShadowOffsetY: function () {
        return this._shadowOffset._y
    }, _setShadowOffsetY: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOffset._y != a && (this._shadowOffset._y = a, this._needUpdateTexture = !0)
    }, _getShadowOffset: function () {
        return cc.p(this._shadowOffset.x, this._shadowOffset.y)
    }, _setShadowOffset: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        if (this._shadowOffset.x != a.x || this._shadowOffset.y != a.y)this._shadowOffset.x = a.x, this._shadowOffset.y = a.y, this._needUpdateTexture = !0
    }, _getShadowOpacity: function () {
        return this._shadowOpacity
    }, _setShadowOpacity: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOpacity != a && (this._shadowOpacity = a, this._setColorsString(), this._needUpdateTexture = !0)
    }, _getShadowBlur: function () {
        return this._shadowBlur
    }, _setShadowBlur: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowBlur != a && (this._shadowBlur = a, this._needUpdateTexture = !0)
    }, disableShadow: function () {
        this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0)
    }, enableStroke: function (a, b) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var c = this._strokeColor;
        if (c.r !== a.r || c.g !== a.g || c.b !== a.b)c.r = a.r, c.g = a.g, c.b = a.b, this._setColorsString();
        this._strokeSize !== b && (this._strokeSize = b || 0);
        this._needUpdateTexture = !0
    }, _getStrokeStyle: function () {
        return this._strokeColor
    }, _setStrokeStyle: function (a) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var b = this._strokeColor;
        if (b.r !== a.r || b.g !== a.g || b.b !== a.b)b.r = a.r, b.g = a.g, b.b =
            a.b, this._setColorsString(), this._needUpdateTexture = !0
    }, _getLineWidth: function () {
        return this._strokeSize
    }, _setLineWidth: function (a) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        this._strokeSize !== a && (this._strokeSize = a || 0, this._needUpdateTexture = !0)
    }, disableStroke: function () {
        this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0)
    }, setFontFillColor: null, _getFillStyle: function () {
        return this._textFillColor
    }, _updateWithTextDefinition: function (a, b) {
        a.fontDimensions ? (this._dimensions.width =
            a.boundingWidth, this._dimensions.height = a.boundingHeight) : (this._dimensions.width = 0, this._dimensions.height = 0);
        this._hAlignment = a.textAlign;
        this._vAlignment = a.verticalAlign;
        this._fontName = a.fontName;
        this._fontSize = a.fontSize || 12;
        this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize);
        a.shadowEnabled && this.enableShadow(a.shadowOffsetX, a.shadowOffsetY, a.shadowOpacity, a.shadowBlur);
        a.strokeEnabled && this.enableStroke(a.strokeStyle,
            a.lineWidth);
        this.setFontFillColor(a.fillStyle);
        b && this._updateTexture()
    }, _prepareTextDefinition: function (a) {
        var b = new cc.FontDefinition;
        a ? (b.fontSize = this._fontSize, b.boundingWidth = cc.contentScaleFactor() * this._dimensions.width, b.boundingHeight = cc.contentScaleFactor() * this._dimensions.height) : (b.fontSize = this._fontSize, b.boundingWidth = this._dimensions.width, b.boundingHeight = this._dimensions.height);
        b.fontName = this._fontName;
        b.textAlign = this._hAlignment;
        b.verticalAlign = this._vAlignment;
        if (this._strokeEnabled) {
            b.strokeEnabled = !0;
            var c = this._strokeColor;
            b.strokeStyle = cc.color(c.r, c.g, c.b);
            b.lineWidth = this._strokeSize
        } else b.strokeEnabled = !1;
        this._shadowEnabled ? (b.shadowEnabled = !0, b.shadowBlur = this._shadowBlur, b.shadowOpacity = this._shadowOpacity, b.shadowOffsetX = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.x, b.shadowOffsetY = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.y) : b._shadowEnabled = !1;
        a = this._textFillColor;
        b.fillStyle = cc.color(a.r, a.g, a.b);
        return b
    }, _fontClientHeight: 18, setString: function (a) {
        a = String(a);
        this._originalText !=
        a && (this._originalText = a + "", this._updateString(), this._needUpdateTexture = !0)
    }, _updateString: function () {
        this._string = this._originalText
    }, setHorizontalAlignment: function (a) {
        a !== this._hAlignment && (this._hAlignment = a, this._needUpdateTexture = !0)
    }, setVerticalAlignment: function (a) {
        a != this._vAlignment && (this._vAlignment = a, this._needUpdateTexture = !0)
    }, setDimensions: function (a) {
        if (a.width != this._dimensions.width || a.height != this._dimensions.height)this._dimensions = a, this._updateString(), this._needUpdateTexture = !0
    }, _getBoundingWidth: function () {
        return this._dimensions.width
    }, _setBoundingWidth: function (a) {
        a != this._dimensions.width && (this._dimensions.width = a, this._updateString(), this._needUpdateTexture = !0)
    }, _getBoundingHeight: function () {
        return this._dimensions.height
    }, _setBoundingHeight: function (a) {
        a != this._dimensions.height && (this._dimensions.height = a, this._updateString(), this._needUpdateTexture = !0)
    }, setFontSize: function (a) {
        this._fontSize !== a && (this._fontSize = a, this._fontStyleStr = a + "px '" + this._fontName + "'",
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, a), this._needUpdateTexture = !0)
    }, setFontName: function (a) {
        this._fontName && this._fontName != a && (this._fontName = a, this._fontStyleStr = this._fontSize + "px '" + a + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(a, this._fontSize), this._needUpdateTexture = !0)
    }, _getFont: function () {
        return this._fontStyleStr
    }, _setFont: function (a) {
        var b = cc.LabelTTF._fontStyleRE.exec(a);
        b && (this._fontSize = parseInt(b[1]), this._fontName = b[2], this._fontStyleStr =
            a, this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize), this._needUpdateTexture = !0)
    }, _drawTTFInCanvas: function (a) {
        if (a) {
            var b = this._strokeShadowOffsetX, c = this._strokeShadowOffsetY, d = this._contentSize.height - c, e = this._vAlignment, f = this._hAlignment, g = this._fontClientHeight, h = this._strokeSize;
            a.setTransform(1, 0, 0, 1, 0 + 0.5 * b, d + 0.5 * c);
            a.font != this._fontStyleStr && (a.font = this._fontStyleStr);
            a.fillStyle = this._fillColorStr;
            var k = c = 0, l = this._strokeEnabled;
            l && (a.lineWidth = 2 *
                h, a.strokeStyle = this._strokeColorStr);
            this._shadowEnabled && (h = this._shadowOffset, a.shadowColor = this._shadowColorStr, a.shadowOffsetX = h.x, a.shadowOffsetY = -h.y, a.shadowBlur = this._shadowBlur);
            a.textBaseline = cc.LabelTTF._textBaseline[e];
            a.textAlign = cc.LabelTTF._textAlign[f];
            b = this._contentSize.width - b;
            c = f === cc.TEXT_ALIGNMENT_RIGHT ? c + b : f === cc.TEXT_ALIGNMENT_CENTER ? c + b / 2 : c + 0;
            if (this._isMultiLine) {
                f = this._strings.length;
                e === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? k = g + d - g * f : e === cc.VERTICAL_TEXT_ALIGNMENT_CENTER &&
                    (k = g / 2 + (d - g * f) / 2);
                for (e = 0; e < f; e++)b = this._strings[e], h = -d + g * e + k, l && a.strokeText(b, c, h), a.fillText(b, c, h)
            } else e !== cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM && (k = e === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? k - d : k - 0.5 * d), l && a.strokeText(this._string, c, k), a.fillText(this._string, c, k)
        }
    }, _getLabelContext: function () {
        if (this._labelContext)return this._labelContext;
        if (!this._labelCanvas) {
            var a = cc.newElement("canvas"), b = new cc.Texture2D;
            b.initWithElement(a);
            this.texture = b;
            this._labelCanvas = a
        }
        return this._labelContext = this._labelCanvas.getContext("2d")
    },
    _updateTTF: function () {
        var a = this._dimensions.width, b, c, d = this._lineWidths;
        d.length = 0;
        this._isMultiLine = !1;
        this._measureConfig();
        if (0 !== a) {
            var e = this._string;
            this._strings = [];
            b = 0;
            for (c = this._string.length; b < c;) {
                var f = this._checkNextline(e.substr(b), a), g = e.substr(b, f);
                this._strings.push(g);
                b += f
            }
        } else {
            this._strings = this._string.split("\n");
            b = 0;
            for (c = this._strings.length; b < c; b++)d.push(this._measure(this._strings[b]))
        }
        0 < this._strings.length && (this._isMultiLine = !0);
        c = b = 0;
        this._strokeEnabled && (b = c = 2 * this._strokeSize);
        this._shadowEnabled && (e = this._shadowOffset, b += 2 * Math.abs(e.x), c += 2 * Math.abs(e.y));
        a = 0 === a ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, d) + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | this._measure(this._string) + b, 0 | this._fontClientHeight + c) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | a + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | a + b, 0 | this._fontClientHeight + c) : cc.size(0 | a + b, 0 | this._dimensions.height + c);
        this.setContentSize(a);
        this._strokeShadowOffsetX =
            b;
        this._strokeShadowOffsetY = c;
        d = this._anchorPoint;
        this._anchorPointInPoints.x = 0.5 * b + (a.width - b) * d.x;
        this._anchorPointInPoints.y = 0.5 * c + (a.height - c) * d.y
    }, getContentSize: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype.getContentSize.call(this)
    }, _getWidth: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype._getWidth.call(this)
    }, _getHeight: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype._getHeight.call(this)
    },
    _updateTexture: function () {
        var a = this._getLabelContext(), b = this._labelCanvas, c = this._contentSize;
        if (0 === this._string.length)return b.width = 1, b.height = c.height, this.setTextureRect(cc.rect(0, 0, 1, c.height)), !0;
        a.font = this._fontStyleStr;
        this._updateTTF();
        var d = c.width, c = c.height, e = b.width == d && b.height == c;
        b.width = d;
        b.height = c;
        e && a.clearRect(0, 0, d, c);
        this._drawTTFInCanvas(a);
        this._texture && this._texture.handleLoadedTexture();
        this.setTextureRect(cc.rect(0, 0, d, c));
        return!0
    }, visit: function (a) {
        this._string &&
            "" != this._string && (this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture()), cc.Sprite.prototype.visit.call(this, a || cc._renderContext))
    }, draw: null, _setTextureCoords: function (a) {
        var b = this._batchNode ? this.textureAtlas.texture : this._texture;
        if (b) {
            var c = b.pixelsWidth, d = b.pixelsHeight, e, f = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) /
                d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) / c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u =
                c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
            this._quadDirty = !0
        }
    }});
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LabelTTF.prototype, _p.setColor = function (a) {
    cc.NodeRGBA.prototype.setColor.call(this, a);
    this._setColorsString()
}, _p._setColorsString = function () {
    this._needUpdateTexture = !0;
    var a = this._displayedColor, b = this._displayedOpacity, c = this._strokeColor, d = this._textFillColor;
    this._shadowColorStr = "rgba(" + (0 | 0.5 * a.r) + "," + (0 | 0.5 * a.g) + "," + (0 | 0.5 * a.b) + "," + this._shadowOpacity + ")";
    this._fillColorStr = "rgba(" + (0 | a.r / 255 * d.r) + "," + (0 | a.g / 255 * d.g) + "," + (0 | a.b / 255 * d.b) + ", " + b /
        255 + ")";
    this._strokeColorStr = "rgba(" + (0 | a.r / 255 * c.r) + "," + (0 | a.g / 255 * c.g) + "," + (0 | a.b / 255 * c.b) + ", " + b / 255 + ")"
}, _p.updateDisplayedColor = function (a) {
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
    this._setColorsString()
}, _p.setOpacity = function (a) {
    this._opacity !== a && (cc.Sprite.prototype.setOpacity.call(this, a), this._setColorsString(), this._needUpdateTexture = !0)
}, _p.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity, _p.initWithStringAndTextDefinition = function (a, b) {
    this._updateWithTextDefinition(b,
        !1);
    this.string = a;
    return!0
}, _p.setFontFillColor = function (a) {
    var b = this._textFillColor;
    if (b.r != a.r || b.g != a.g || b.b != a.b)b.r = a.r, b.g = a.g, b.b = a.b, this._setColorsString(), this._needUpdateTexture = !0
}, _p.draw = cc.Sprite.prototype.draw, _p.setTextureRect = function (a, b, c) {
    this._rectRotated = b || !1;
    this.setContentSize(c || a);
    this.setVertexRect(a);
    b = this._textureRect_Canvas;
    b.x = a.x;
    b.y = a.y;
    b.width = a.width;
    b.height = a.height;
    b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this._unflippedOffsetPositionFromCenter;
    this._flippedX && (a.x = -a.x);
    this._flippedY && (a.y = -a.y);
    this._offsetPosition.x = a.x + (this._contentSize.width - this._rect.width) / 2;
    this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
    this._batchNode && (this.dirty = !0)
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLabelTTF, cc._LogInfos.MissingFile, "LabelTTFWebGL.js"), cc._tmp.WebGLLabelTTF(), delete cc._tmp.WebGLLabelTTF);
cc.assert("function" === typeof cc._tmp.PrototypeLabelTTF, cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._textAlign = ["left", "center", "right"];
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"];
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function (a, b, c, d, e, f) {
    return new cc.LabelTTF(a, b, c, d, e, f)
};
cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR : cc.SHADER_POSITION_TEXTUREA8COLOR;
cc.LabelTTF.__labelHeightDiv = cc.newElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load", function () {
    this.removeEventListener("load", arguments.callee, !1);
    document.body.appendChild(cc.LabelTTF.__labelHeightDiv)
}, !1);
cc.LabelTTF.__getFontHeightByDiv = function (a, b) {
    var c = cc.LabelTTF.__fontHeightCache[a + "." + b];
    if (0 < c)return c;
    var d = cc.LabelTTF.__labelHeightDiv;
    d.innerHTML = "ajghl~!";
    d.style.fontFamily = a;
    d.style.fontSize = b + "px";
    c = d.clientHeight;
    cc.LabelTTF.__fontHeightCache[a + "." + b] = c;
    d.innerHTML = "";
    return c
};
cc.LabelTTF.__fontHeightCache = {};cc.ACTION_TAG_INVALID = -1;
cc.Action = cc.Class.extend({originalTarget: null, target: null, tag: cc.ACTION_TAG_INVALID, ctor: function () {
    this.originalTarget = null;
    this.target = null;
    this.tag = cc.ACTION_TAG_INVALID
}, copy: function () {
    cc.log("copy is deprecated. Please use clone instead.");
    return this.clone()
}, clone: function () {
    var action = new cc.Action;
    action.originalTarget = null;
    action.target = null;
    action.tag = this.tag;
    return action
}, isDone: function () {
    return true
}, startWithTarget: function (target) {
    this.originalTarget = target;
    this.target = target
},
    stop: function () {
        this.target = null
    }, step: function (dt) {
        cc.log("[Action step]. override me")
    }, update: function (time) {
        cc.log("[Action update]. override me")
    }, getTarget: function () {
        return this.target
    }, setTarget: function (target) {
        this.target = target
    }, getOriginalTarget: function () {
        return this.originalTarget
    }, setOriginalTarget: function (originalTarget) {
        this.originalTarget = originalTarget
    }, getTag: function () {
        return this.tag
    }, setTag: function (tag) {
        this.tag = tag
    }, retain: function () {
    }, release: function () {
    }});
cc.Action.create = function () {
    return new cc.Action
};
cc.FiniteTimeAction = cc.Action.extend({_duration: 0, ctor: function () {
    cc.Action.prototype.ctor.call(this);
    this._duration = 0
}, getDuration: function () {
    return this._duration * (this._times || 1)
}, setDuration: function (duration) {
    this._duration = duration
}, reverse: function () {
    cc.log("cocos2d: FiniteTimeAction#reverse: Implement me");
    return null
}, clone: function () {
    return new cc.FiniteTimeAction
}});
cc.Speed = cc.Action.extend({_speed: 0, _innerAction: null, ctor: function (action, speed) {
    cc.Action.prototype.ctor.call(this);
    this._speed = 0;
    this._innerAction = null;
    action && this.initWithAction(action, speed)
}, getSpeed: function () {
    return this._speed
}, setSpeed: function (speed) {
    this._speed = speed
}, initWithAction: function (action, speed) {
    if (!action)throw"cc.Speed.initWithAction(): action must be non nil";
    this._innerAction = action;
    this._speed = speed;
    return true
}, clone: function () {
    var action = new cc.Speed;
    action.initWithAction(this._innerAction.clone(),
        this._speed);
    return action
}, startWithTarget: function (target) {
    cc.Action.prototype.startWithTarget.call(this, target);
    this._innerAction.startWithTarget(target)
}, stop: function () {
    this._innerAction.stop();
    cc.Action.prototype.stop.call(this)
}, step: function (dt) {
    this._innerAction.step(dt * this._speed)
}, isDone: function () {
    return this._innerAction.isDone()
}, reverse: function () {
    return cc.Speed.create(this._innerAction.reverse(), this._speed)
}, setInnerAction: function (action) {
    if (this._innerAction != action)this._innerAction =
        action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.Speed.create = function (action, speed) {
    return new cc.Speed(action, speed)
};
cc.Follow = cc.Action.extend({_followedNode: null, _boundarySet: false, _boundaryFullyCovered: false, _halfScreenSize: null, _fullScreenSize: null, leftBoundary: 0, rightBoundary: 0, topBoundary: 0, bottomBoundary: 0, _worldRect: null, ctor: function (followedNode, rect) {
    cc.Action.prototype.ctor.call(this);
    this._followedNode = null;
    this._boundarySet = false;
    this._boundaryFullyCovered = false;
    this._halfScreenSize = null;
    this._fullScreenSize = null;
    this.leftBoundary = 0;
    this.rightBoundary = 0;
    this.topBoundary = 0;
    this.bottomBoundary = 0;
    this._worldRect =
        cc.rect(0, 0, 0, 0);
    if (followedNode)rect ? this.initWithTarget(followedNode, rect) : this.initWithTarget(followedNode)
}, clone: function () {
    var action = new cc.Follow;
    var locRect = this._worldRect;
    var rect = new cc.Rect(locRect.x, locRect.y, locRect.width, locRect.height);
    action.initWithTarget(this._followedNode, rect);
    return action
}, isBoundarySet: function () {
    return this._boundarySet
}, setBoudarySet: function (value) {
    this._boundarySet = value
}, initWithTarget: function (followedNode, rect) {
    if (!followedNode)throw"cc.Follow.initWithAction(): followedNode must be non nil";
    var _this = this;
    rect = rect || cc.rect(0, 0, 0, 0);
    _this._followedNode = followedNode;
    _this._worldRect = rect;
    _this._boundarySet = !cc._rectEqualToZero(rect);
    _this._boundaryFullyCovered = false;
    var winSize = cc.director.getWinSize();
    _this._fullScreenSize = cc.p(winSize.width, winSize.height);
    _this._halfScreenSize = cc.pMult(_this._fullScreenSize, 0.5);
    if (_this._boundarySet) {
        _this.leftBoundary = -(rect.x + rect.width - _this._fullScreenSize.x);
        _this.rightBoundary = -rect.x;
        _this.topBoundary = -rect.y;
        _this.bottomBoundary = -(rect.y +
            rect.height - _this._fullScreenSize.y);
        if (_this.rightBoundary < _this.leftBoundary)_this.rightBoundary = _this.leftBoundary = (_this.leftBoundary + _this.rightBoundary) / 2;
        if (_this.topBoundary < _this.bottomBoundary)_this.topBoundary = _this.bottomBoundary = (_this.topBoundary + _this.bottomBoundary) / 2;
        if (_this.topBoundary == _this.bottomBoundary && _this.leftBoundary == _this.rightBoundary)_this._boundaryFullyCovered = true
    }
    return true
}, step: function (dt) {
    var tempPosX = this._followedNode.x;
    var tempPosY = this._followedNode.y;
    tempPosX = this._halfScreenSize.x - tempPosX;
    tempPosY = this._halfScreenSize.y - tempPosY;
    if (this._boundarySet) {
        if (this._boundaryFullyCovered)return;
        this.target.setPosition(cc.clampf(tempPosX, this.leftBoundary, this.rightBoundary), cc.clampf(tempPosY, this.bottomBoundary, this.topBoundary))
    } else this.target.setPosition(tempPosX, tempPosY)
}, isDone: function () {
    return!this._followedNode.running
}, stop: function () {
    this.target = null;
    cc.Action.prototype.stop.call(this)
}});
cc.Follow.create = function (followedNode, rect) {
    return new cc.Follow(followedNode, rect)
};
cc.ActionInterval = cc.FiniteTimeAction.extend({_elapsed: 0, _firstTick: false, _easeList: null, _times: 1, _repeatForever: false, _repeatMethod: false, _speed: 1, _speedMethod: false, ctor: function (d) {
    this._speed = 1;
    this._times = 1;
    this._repeatForever = false;
    this.MAX_VALUE = 2;
    this._repeatMethod = false;
    this._speedMethod = false;
    cc.FiniteTimeAction.prototype.ctor.call(this);
    d !== undefined && this.initWithDuration(d)
}, getElapsed: function () {
    return this._elapsed
}, initWithDuration: function (d) {
    this._duration = d === 0 ? cc.FLT_EPSILON : d;
    this._elapsed = 0;
    this._firstTick = true;
    return true
}, isDone: function () {
    return this._elapsed >= this._duration
}, _cloneDecoration: function (action) {
    action._repeatForever = this._repeatForever;
    action._speed = this._speed;
    action._times = this._times;
    action._easeList = this._easeList;
    action._speedMethod = this._speedMethod;
    action._repeatMethod = this._repeatMethod
}, _reverseEaseList: function (action) {
    if (this._easeList) {
        action._easeList = [];
        for (var i = 0; i < this._easeList.length; i++)action._easeList.push(this._easeList[i].reverse())
    }
},
    clone: function () {
        var action = new cc.ActionInterval(this._duration);
        this._cloneDecoration(action);
        return action
    }, easing: function (easeObj) {
        if (this._easeList)this._easeList.length = 0; else this._easeList = [];
        for (var i = 0; i < arguments.length; i++)this._easeList.push(arguments[i]);
        return this
    }, _computeEaseTime: function (dt) {
        var locList = this._easeList;
        if (!locList || locList.length === 0)return dt;
        for (var i = 0, n = locList.length; i < n; i++)dt = locList[i].easing(dt);
        return dt
    }, step: function (dt) {
        if (this._firstTick) {
            this._firstTick =
                false;
            this._elapsed = 0
        } else this._elapsed += dt;
        var t = this._elapsed / (this._duration > 1.192092896E-7 ? this._duration : 1.192092896E-7);
        t = 1 > t ? t : 1;
        this.update(t > 0 ? t : 0);
        if (this._repeatMethod && this._times > 1 && this.isDone()) {
            if (!this._repeatForever)this._times--;
            this.startWithTarget(this.target);
            this.step(this._elapsed - this._duration)
        }
    }, startWithTarget: function (target) {
        cc.Action.prototype.startWithTarget.call(this, target);
        this._elapsed = 0;
        this._firstTick = true
    }, reverse: function () {
        cc.log("cc.IntervalAction: reverse not implemented.");
        return null
    }, setAmplitudeRate: function (amp) {
        cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    }, getAmplitudeRate: function () {
        cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
        return 0
    }, speed: function (speed) {
        if (speed <= 0) {
            cc.log("The speed parameter error");
            return this
        }
        this._speedMethod = true;
        this._speed *= speed;
        return this
    }, getSpeed: function () {
        return this._speed
    }, setSpeed: function (speed) {
        this._speed = speed;
        return this
    }, repeat: function (times) {
        times =
            Math.round(times);
        if (isNaN(times) || times < 1) {
            cc.log("The repeat parameter error");
            return this
        }
        this._repeatMethod = true;
        this._times *= times;
        return this
    }, repeatForever: function () {
        this._repeatMethod = true;
        this._times = this.MAX_VALUE;
        this._repeatForever = true;
        return this
    }});
cc.ActionInterval.create = function (d) {
    return new cc.ActionInterval(d)
};
cc.Sequence = cc.ActionInterval.extend({_actions: null, _split: null, _last: 0, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._actions = [];
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Sequence._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (actionOne, actionTwo) {
    if (!actionOne || !actionTwo)throw"cc.Sequence.initWithTwoActions(): arguments must all be non nil";
    var d = actionOne._duration + actionTwo._duration;
    this.initWithDuration(d);
    this._actions[0] = actionOne;
    this._actions[1] = actionTwo;
    return true
}, clone: function () {
    var action = new cc.Sequence;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._split = this._actions[0]._duration / this._duration;
    this._last = -1
}, stop: function () {
    if (this._last !== -1)this._actions[this._last].stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    var new_t, found = 0;
    var locSplit = this._split, locActions = this._actions, locLast = this._last;
    if (time < locSplit) {
        new_t = locSplit !== 0 ? time / locSplit : 1;
        if (found === 0 && locLast === 1) {
            locActions[1].update(0);
            locActions[1].stop()
        }
    } else {
        found = 1;
        new_t = locSplit === 1 ? 1 : (time - locSplit) / (1 -
            locSplit);
        if (locLast === -1) {
            locActions[0].startWithTarget(this.target);
            locActions[0].update(1);
            locActions[0].stop()
        }
        if (!locLast) {
            locActions[0].update(1);
            locActions[0].stop()
        }
    }
    if (locLast === found && locActions[found].isDone())return;
    if (locLast !== found)locActions[found].startWithTarget(this.target);
    locActions[found].update(new_t);
    this._last = found
}, reverse: function () {
    var action = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Sequence.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i])prev = cc.Sequence._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Sequence._actionOneTwo = function (actionOne, actionTwo) {
    var sequence = new cc.Sequence;
    sequence.initWithTwoActions(actionOne, actionTwo);
    return sequence
};
cc.Repeat = cc.ActionInterval.extend({_times: 0, _total: 0, _nextDt: 0, _actionInstant: false, _innerAction: null, ctor: function (action, times) {
    cc.ActionInterval.prototype.ctor.call(this);
    times !== undefined && this.initWithAction(action, times)
}, initWithAction: function (action, times) {
    var duration = action._duration * times;
    if (this.initWithDuration(duration)) {
        this._times = times;
        this._innerAction = action;
        if (action instanceof cc.ActionInstant) {
            this._actionInstant = true;
            this._times -= 1
        }
        this._total = 0;
        return true
    }
    return false
},
    clone: function () {
        var action = new cc.Repeat;
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone(), this._times);
        return action
    }, startWithTarget: function (target) {
        this._total = 0;
        this._nextDt = this._innerAction._duration / this._duration;
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target)
    }, stop: function () {
        this._innerAction.stop();
        cc.Action.prototype.stop.call(this)
    }, update: function (time) {
        time = this._computeEaseTime(time);
        var locInnerAction =
            this._innerAction;
        var locDuration = this._duration;
        var locTimes = this._times;
        var locNextDt = this._nextDt;
        if (time >= locNextDt) {
            while (time > locNextDt && this._total < locTimes) {
                locInnerAction.update(1);
                this._total++;
                locInnerAction.stop();
                locInnerAction.startWithTarget(this.target);
                locNextDt += locInnerAction._duration / locDuration;
                this._nextDt = locNextDt
            }
            if (time >= 1 && this._total < locTimes)this._total++;
            if (!this._actionInstant)if (this._total === locTimes) {
                locInnerAction.update(1);
                locInnerAction.stop()
            } else locInnerAction.update(time -
                (locNextDt - locInnerAction._duration / locDuration))
        } else locInnerAction.update(time * locTimes % 1)
    }, isDone: function () {
        return this._total == this._times
    }, reverse: function () {
        var action = cc.Repeat.create(this._innerAction.reverse(), this._times);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action
    }, setInnerAction: function (action) {
        if (this._innerAction != action)this._innerAction = action
    }, getInnerAction: function () {
        return this._innerAction
    }});
cc.Repeat.create = function (action, times) {
    return new cc.Repeat(action, times)
};
cc.RepeatForever = cc.ActionInterval.extend({_innerAction: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._innerAction = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.RepeatForever.initWithAction(): action must be non null";
    this._innerAction = action;
    return true
}, clone: function () {
    var action = new cc.RepeatForever;
    this._cloneDecoration(action);
    action.initWithAction(this._innerAction.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._innerAction.startWithTarget(target)
}, step: function (dt) {
    var locInnerAction = this._innerAction;
    locInnerAction.step(dt);
    if (locInnerAction.isDone()) {
        locInnerAction.startWithTarget(this.target);
        locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration)
    }
}, isDone: function () {
    return false
}, reverse: function () {
    var action = cc.RepeatForever.create(this._innerAction.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, setInnerAction: function (action) {
    if (this._innerAction !=
        action)this._innerAction = action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.RepeatForever.create = function (action) {
    return new cc.RepeatForever(action)
};
cc.Spawn = cc.ActionInterval.extend({_one: null, _two: null, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._one = null;
    this._two = null;
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Spawn._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (action1, action2) {
    if (!action1 || !action2)throw"cc.Spawn.initWithTwoActions(): arguments must all be non null";
    var ret = false;
    var d1 = action1._duration;
    var d2 = action2._duration;
    if (this.initWithDuration(Math.max(d1, d2))) {
        this._one = action1;
        this._two = action2;
        if (d1 > d2)this._two = cc.Sequence._actionOneTwo(action2, cc.DelayTime.create(d1 - d2)); else if (d1 < d2)this._one = cc.Sequence._actionOneTwo(action1, cc.DelayTime.create(d2 - d1));
        ret = true
    }
    return ret
}, clone: function () {
    var action =
        new cc.Spawn;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._one.clone(), this._two.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._one.startWithTarget(target);
    this._two.startWithTarget(target)
}, stop: function () {
    this._one.stop();
    this._two.stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._one)this._one.update(time);
    if (this._two)this._two.update(time)
}, reverse: function () {
    var action =
        cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Spawn.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i] != null)prev = cc.Spawn._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Spawn._actionOneTwo = function (action1, action2) {
    var pSpawn = new cc.Spawn;
    pSpawn.initWithTwoActions(action1, action2);
    return pSpawn
};
cc.RotateTo = cc.ActionInterval.extend({_dstAngleX: 0, _startAngleX: 0, _diffAngleX: 0, _dstAngleY: 0, _startAngleY: 0, _diffAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._dstAngleX = deltaAngleX || 0;
        this._dstAngleY = deltaAngleY || this._dstAngleX;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.RotateTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locStartAngleX = target.rotationX % 360;
    var locDiffAngleX = this._dstAngleX - locStartAngleX;
    if (locDiffAngleX > 180)locDiffAngleX -= 360;
    if (locDiffAngleX < -180)locDiffAngleX += 360;
    this._startAngleX = locStartAngleX;
    this._diffAngleX =
        locDiffAngleX;
    this._startAngleY = target.rotationY % 360;
    var locDiffAngleY = this._dstAngleY - this._startAngleY;
    if (locDiffAngleY > 180)locDiffAngleY -= 360;
    if (locDiffAngleY < -180)locDiffAngleY += 360;
    this._diffAngleY = locDiffAngleY
}, reverse: function () {
    cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._diffAngleX * time;
        this.target.rotationY = this._startAngleY + this._diffAngleY * time
    }
}});
cc.RotateTo.create = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateTo(duration, deltaAngleX, deltaAngleY)
};
cc.RotateBy = cc.ActionInterval.extend({_angleX: 0, _startAngleX: 0, _angleY: 0, _startAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._angleX = deltaAngleX || 0;
        this._angleY = deltaAngleY || this._angleX;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.RotateBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._angleX, this._angleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startAngleX = target.rotationX;
    this._startAngleY = target.rotationY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._angleX * time;
        this.target.rotationY = this._startAngleY + this._angleY * time
    }
}, reverse: function () {
    var action =
        cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.RotateBy.create = function (duration, deltaAngleX, deltaAngleY) {
    var rotateBy = new cc.RotateBy;
    rotateBy.initWithDuration(duration, deltaAngleX, deltaAngleY);
    return rotateBy
};
cc.MoveBy = cc.ActionInterval.extend({_positionDelta: null, _startPosition: null, _previousPosition: null, ctor: function (duration, deltaPos, deltaY) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._positionDelta = cc.p(0, 0);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    deltaPos !== undefined && this.initWithDuration(duration, deltaPos, deltaY)
}, initWithDuration: function (duration, position, y) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._positionDelta.x = position;
        this._positionDelta.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._positionDelta);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var x = this._positionDelta.x * time;
        var y = this._positionDelta.y * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.MoveBy.create(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.MoveBy.create = function (duration, deltaPos, deltaY) {
    return new cc.MoveBy(duration, deltaPos, deltaY)
};
cc.MoveTo = cc.MoveBy.extend({_endPosition: null, ctor: function (duration, position, y) {
    cc.MoveBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    position !== undefined && this.initWithDuration(duration, position, y)
}, initWithDuration: function (duration, position, y) {
    if (cc.MoveBy.prototype.initWithDuration.call(this, duration, position, y)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endPosition);
    return action
}, startWithTarget: function (target) {
    cc.MoveBy.prototype.startWithTarget.call(this, target);
    this._positionDelta.x = this._endPosition.x - target.getPositionX();
    this._positionDelta.y = this._endPosition.y - target.getPositionY()
}});
cc.MoveTo.create = function (duration, position, y) {
    return new cc.MoveTo(duration, position, y)
};
cc.SkewTo = cc.ActionInterval.extend({_skewX: 0, _skewY: 0, _startSkewX: 0, _startSkewY: 0, _endSkewX: 0, _endSkewY: 0, _deltaX: 0, _deltaY: 0, ctor: function (t, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, sx, sy) {
    var ret = false;
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._endSkewX = sx;
        this._endSkewY = sy;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endSkewX, this._endSkewY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startSkewX = target.skewX % 180;
    this._deltaX = this._endSkewX - this._startSkewX;
    if (this._deltaX > 180)this._deltaX -= 360;
    if (this._deltaX < -180)this._deltaX += 360;
    this._startSkewY = target.skewY % 360;
    this._deltaY = this._endSkewY - this._startSkewY;
    if (this._deltaY > 180)this._deltaY -= 360;
    if (this._deltaY < -180)this._deltaY += 360
}, update: function (t) {
    t = this._computeEaseTime(t);
    this.target.skewX =
        this._startSkewX + this._deltaX * t;
    this.target.skewY = this._startSkewY + this._deltaY * t
}});
cc.SkewTo.create = function (t, sx, sy) {
    return new cc.SkewTo(t, sx, sy)
};
cc.SkewBy = cc.SkewTo.extend({ctor: function (t, sx, sy) {
    cc.SkewTo.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, deltaSkewX, deltaSkewY) {
    var ret = false;
    if (cc.SkewTo.prototype.initWithDuration.call(this, t, deltaSkewX, deltaSkewY)) {
        this._skewX = deltaSkewX;
        this._skewY = deltaSkewY;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._skewX, this._skewY);
    return action
}, startWithTarget: function (target) {
    cc.SkewTo.prototype.startWithTarget.call(this,
        target);
    this._deltaX = this._skewX;
    this._deltaY = this._skewY;
    this._endSkewX = this._startSkewX + this._deltaX;
    this._endSkewY = this._startSkewY + this._deltaY
}, reverse: function () {
    var action = cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.SkewBy.create = function (t, sx, sy) {
    var skewBy = new cc.SkewBy;
    if (skewBy)skewBy.initWithDuration(t, sx, sy);
    return skewBy
};
cc.JumpBy = cc.ActionInterval.extend({_startPosition: null, _delta: null, _height: 0, _jumps: 0, _previousPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    this._delta = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (jumps ===
            undefined) {
            jumps = height;
            height = y;
            y = position.y;
            position = position.x
        }
        this._delta.x = position;
        this._delta.y = y;
        this._height = height;
        this._jumps = jumps;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.JumpBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._delta, this._height, this._jumps);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x =
        locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var frac = time * this._jumps % 1;
        var y = this._height * 4 * frac * (1 - frac);
        y += this._delta.y * time;
        var x = this._delta.x * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.JumpBy.create(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.JumpBy.create = function (duration, position, y, height, jumps) {
    return new cc.JumpBy(duration, position, y, height, jumps)
};
cc.JumpTo = cc.JumpBy.extend({_endPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.JumpBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.JumpBy.prototype.initWithDuration.call(this, duration, position, y, height, jumps)) {
        if (jumps === undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
},
    startWithTarget: function (target) {
        cc.JumpBy.prototype.startWithTarget.call(this, target);
        this._delta.x = this._endPosition.x - this._startPosition.x;
        this._delta.y = this._endPosition.y - this._startPosition.y
    }, clone: function () {
        var action = new cc.JumpTo;
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endPosition, this._height, this._jumps);
        return action
    }});
cc.JumpTo.create = function (duration, position, y, height, jumps) {
    return new cc.JumpTo(duration, position, y, height, jumps)
};
cc.bezierAt = function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
};
cc.BezierBy = cc.ActionInterval.extend({_config: null, _startPosition: null, _previousPosition: null, ctor: function (t, c) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._config = [];
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._config = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierBy;
    this._cloneDecoration(action);
    var newConfigs = [];
    for (var i =
        0; i < this._config.length; i++) {
        var selConf = this._config[i];
        newConfigs.push(cc.p(selConf.x, selConf.y))
    }
    action.initWithDuration(this._duration, newConfigs);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var locConfig = this._config;
        var xa = 0;
        var xb = locConfig[0].x;
        var xc = locConfig[1].x;
        var xd = locConfig[2].x;
        var ya = 0;
        var yb = locConfig[0].y;
        var yc = locConfig[1].y;
        var yd = locConfig[2].y;
        var x = cc.bezierAt(xa, xb, xc, xd, time);
        var y = cc.bezierAt(ya, yb, yc, yd, time);
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var locConfig = this._config;
    var r = [cc.pAdd(locConfig[1], cc.pNeg(locConfig[2])), cc.pAdd(locConfig[0], cc.pNeg(locConfig[2])), cc.pNeg(locConfig[2])];
    var action = cc.BezierBy.create(this._duration,
        r);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.BezierBy.create = function (t, c) {
    return new cc.BezierBy(t, c)
};
cc.BezierTo = cc.BezierBy.extend({_toConfig: null, ctor: function (t, c) {
    cc.BezierBy.prototype.ctor.call(this);
    this._toConfig = [];
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._toConfig = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toConfig);
    return action
}, startWithTarget: function (target) {
    cc.BezierBy.prototype.startWithTarget.call(this,
        target);
    var locStartPos = this._startPosition;
    var locToConfig = this._toConfig;
    var locConfig = this._config;
    locConfig[0] = cc.pSub(locToConfig[0], locStartPos);
    locConfig[1] = cc.pSub(locToConfig[1], locStartPos);
    locConfig[2] = cc.pSub(locToConfig[2], locStartPos)
}});
cc.BezierTo.create = function (t, c) {
    return new cc.BezierTo(t, c)
};
cc.ScaleTo = cc.ActionInterval.extend({_scaleX: 1, _scaleY: 1, _startScaleX: 1, _startScaleY: 1, _endScaleX: 0, _endScaleY: 0, _deltaX: 0, _deltaY: 0, ctor: function (duration, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sx !== undefined && this.initWithDuration(duration, sx, sy)
}, initWithDuration: function (duration, sx, sy) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._endScaleX = sx;
        this._endScaleY = sy != null ? sy : sx;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ScaleTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endScaleX, this._endScaleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startScaleX = target.scaleX;
    this._startScaleY = target.scaleY;
    this._deltaX = this._endScaleX - this._startScaleX;
    this._deltaY = this._endScaleY - this._startScaleY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.scaleX = this._startScaleX + this._deltaX * time;
        this.target.scaleY = this._startScaleY +
            this._deltaY * time
    }
}});
cc.ScaleTo.create = function (duration, sx, sy) {
    var scaleTo = new cc.ScaleTo;
    scaleTo.initWithDuration(duration, sx, sy);
    return scaleTo
};
cc.ScaleBy = cc.ScaleTo.extend({startWithTarget: function (target) {
    cc.ScaleTo.prototype.startWithTarget.call(this, target);
    this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX;
    this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
}, reverse: function () {
    var action = cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.ScaleBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endScaleX, this._endScaleY);
    return action
}});
cc.ScaleBy.create = function (duration, sx, sy) {
    return new cc.ScaleBy(duration, sx, sy)
};
cc.Blink = cc.ActionInterval.extend({_times: 0, _originalState: false, ctor: function (duration, blinks) {
    cc.ActionInterval.prototype.ctor.call(this);
    blinks !== undefined && this.initWithDuration(duration, blinks)
}, initWithDuration: function (duration, blinks) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._times = blinks;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Blink;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._times);
    return action
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    if (this.target && !this.isDone()) {
        var slice = 1 / this._times;
        var m = time % slice;
        this.target.visible = m > slice / 2
    }
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._originalState = target.visible
}, stop: function () {
    this.target.visible = this._originalState;
    cc.ActionInterval.prototype.stop.call(this)
}, reverse: function () {
    var action = cc.Blink.create(this._duration, this._times);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Blink.create = function (duration, blinks) {
    var blink = new cc.Blink;
    blink.initWithDuration(duration, blinks);
    return blink
};
cc.FadeTo = cc.ActionInterval.extend({_toOpacity: 0, _fromOpacity: 0, ctor: function (duration, opacity) {
    cc.ActionInterval.prototype.ctor.call(this);
    opacity !== undefined && this.initWithDuration(duration, opacity)
}, initWithDuration: function (duration, opacity) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._toOpacity = opacity;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.FadeTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
},
    update: function (time) {
        time = this._computeEaseTime(time);
        if (this.target.RGBAProtocol) {
            var fromOpacity = this._fromOpacity !== undefined ? this._fromOpacity : 255;
            this.target.opacity = fromOpacity + (this._toOpacity - fromOpacity) * time
        }
    }, startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        if (this.target.RGBAProtocol)this._fromOpacity = target.opacity
    }});
cc.FadeTo.create = function (duration, opacity) {
    return new cc.FadeTo(duration, opacity)
};
cc.FadeIn = cc.FadeTo.extend({_reverseAction: null, reverse: function () {
    var action = new cc.FadeOut;
    action.initWithDuration(this._duration, 0);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeIn;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}, startWithTarget: function (target) {
    if (this._reverseAction)this._toOpacity = this._reverseAction._fromOpacity;
    cc.FadeTo.prototype.startWithTarget.call(this,
        target)
}});
cc.FadeIn.create = function (duration) {
    return new cc.FadeIn(duration, 255)
};
cc.FadeOut = cc.FadeTo.extend({reverse: function () {
    var action = new cc.FadeIn;
    action._reverseAction = this;
    action.initWithDuration(this._duration, 255);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeOut;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}});
cc.FadeOut.create = function (d) {
    var action = new cc.FadeOut;
    action.initWithDuration(d, 0);
    return action
};
cc.TintTo = cc.ActionInterval.extend({_to: null, _from: null, ctor: function (duration, red, green, blue) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._to = cc.color(0, 0, 0);
    this._from = cc.color(0, 0, 0);
    blue !== undefined && this.initWithDuration(duration, red, green, blue)
}, initWithDuration: function (duration, red, green, blue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._to = cc.color(red, green, blue);
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TintTo;
    this._cloneDecoration(action);
    var locTo = this._to;
    action.initWithDuration(this._duration, locTo.r, locTo.g, locTo.b);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    if (this.target.RGBAProtocol)this._from = this.target.color
}, update: function (time) {
    time = this._computeEaseTime(time);
    var locFrom = this._from, locTo = this._to;
    if (locFrom && this.target.RGBAProtocol)this.target.color = cc.color(locFrom.r + (locTo.r - locFrom.r) * time, locFrom.g + (locTo.g - locFrom.g) * time, locFrom.b + (locTo.b - locFrom.b) *
        time)
}});
cc.TintTo.create = function (duration, red, green, blue) {
    return new cc.TintTo(duration, red, green, blue)
};
cc.TintBy = cc.ActionInterval.extend({_deltaR: 0, _deltaG: 0, _deltaB: 0, _fromR: 0, _fromG: 0, _fromB: 0, ctor: function (duration, deltaRed, deltaGreen, deltaBlue) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaBlue !== undefined && this.initWithDuration(duration, deltaRed, deltaGreen, deltaBlue)
}, initWithDuration: function (duration, deltaRed, deltaGreen, deltaBlue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._deltaR = deltaRed;
        this._deltaG = deltaGreen;
        this._deltaB = deltaBlue;
        return true
    }
    return false
},
    clone: function () {
        var action = new cc.TintBy;
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB);
        return action
    }, startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        if (target.RGBAProtocol) {
            var color = target.color;
            this._fromR = color.r;
            this._fromG = color.g;
            this._fromB = color.b
        }
    }, update: function (time) {
        time = this._computeEaseTime(time);
        if (this.target.RGBAProtocol)this.target.color = cc.color(this._fromR + this._deltaR *
            time, this._fromG + this._deltaG * time, this._fromB + this._deltaB * time)
    }, reverse: function () {
        var action = cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action
    }});
cc.TintBy.create = function (duration, deltaRed, deltaGreen, deltaBlue) {
    return new cc.TintBy(duration, deltaRed, deltaGreen, deltaBlue)
};
cc.DelayTime = cc.ActionInterval.extend({update: function (time) {
}, reverse: function () {
    var action = cc.DelayTime.create(this._duration);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.DelayTime;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration);
    return action
}});
cc.DelayTime.create = function (d) {
    return new cc.DelayTime(d)
};
cc.ReverseTime = cc.ActionInterval.extend({_other: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._other = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ReverseTime.initWithAction(): action must be non null";
    if (action == this._other)throw"cc.ReverseTime.initWithAction(): the action was already passed in.";
    if (cc.ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
        this._other = action;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.ReverseTime;
    this._cloneDecoration(action);
    action.initWithAction(this._other.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._other.startWithTarget(target)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._other)this._other.update(1 - time)
}, reverse: function () {
    return this._other.clone()
}, stop: function () {
    this._other.stop();
    cc.Action.prototype.stop.call(this)
}});
cc.ReverseTime.create = function (action) {
    return new cc.ReverseTime(action)
};
cc.Animate = cc.ActionInterval.extend({_animation: null, _nextFrame: 0, _origFrame: null, _executedLoops: 0, _splitTimes: null, ctor: function (animation) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._splitTimes = [];
    animation && this.initWithAnimation(animation)
}, getAnimation: function () {
    return this._animation
}, setAnimation: function (animation) {
    this._animation = animation
}, initWithAnimation: function (animation) {
    if (!animation)throw"cc.Animate.initWithAnimation(): animation must be non-NULL";
    var singleDuration = animation.getDuration();
    if (this.initWithDuration(singleDuration * animation.getLoops())) {
        this._nextFrame = 0;
        this.setAnimation(animation);
        this._origFrame = null;
        this._executedLoops = 0;
        var locTimes = this._splitTimes;
        locTimes.length = 0;
        var accumUnitsOfTime = 0;
        var newUnitOfTimeValue = singleDuration / animation.getTotalDelayUnits();
        var frames = animation.getFrames();
        cc.arrayVerifyType(frames, cc.AnimationFrame);
        for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            var value = accumUnitsOfTime * newUnitOfTimeValue / singleDuration;
            accumUnitsOfTime +=
                frame.getDelayUnits();
            locTimes.push(value)
        }
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Animate;
    this._cloneDecoration(action);
    action.initWithAnimation(this._animation.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    if (this._animation.getRestoreOriginalFrame())this._origFrame = target.displayFrame();
    this._nextFrame = 0;
    this._executedLoops = 0
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (time < 1) {
        time *= this._animation.getLoops();
        var loopNumber = 0 | time;
        if (loopNumber > this._executedLoops) {
            this._nextFrame = 0;
            this._executedLoops++
        }
        time = time % 1
    }
    var frames = this._animation.getFrames();
    var numberOfFrames = frames.length, locSplitTimes = this._splitTimes;
    for (var i = this._nextFrame; i < numberOfFrames; i++)if (locSplitTimes[i] <= time) {
        this.target.setSpriteFrame(frames[i].getSpriteFrame());
        this._nextFrame = i + 1
    } else break
}, reverse: function () {
    var locAnimation = this._animation;
    var oldArray = locAnimation.getFrames();
    var newArray = [];
    cc.arrayVerifyType(oldArray,
        cc.AnimationFrame);
    if (oldArray.length > 0)for (var i = oldArray.length - 1; i >= 0; i--) {
        var element = oldArray[i];
        if (!element)break;
        newArray.push(element.clone())
    }
    var newAnim = cc.Animation.create(newArray, locAnimation.getDelayPerUnit(), locAnimation.getLoops());
    newAnim.setRestoreOriginalFrame(locAnimation.getRestoreOriginalFrame());
    var action = cc.Animate.create(newAnim);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, stop: function () {
    if (this._animation.getRestoreOriginalFrame() && this.target)this.target.setSpriteFrame(this._origFrame);
    cc.Action.prototype.stop.call(this)
}});
cc.Animate.create = function (animation) {
    return new cc.Animate(animation)
};
cc.TargetedAction = cc.ActionInterval.extend({_action: null, _forcedTarget: null, ctor: function (target, action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithTarget(target, action)
}, initWithTarget: function (target, action) {
    if (this.initWithDuration(action._duration)) {
        this._forcedTarget = target;
        this._action = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TargetedAction;
    this._cloneDecoration(action);
    action.initWithTarget(this._forcedTarget, this._action.clone());
    return action
},
    startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._action.startWithTarget(this._forcedTarget)
    }, stop: function () {
        this._action.stop()
    }, update: function (time) {
        time = this._computeEaseTime(time);
        this._action.update(time)
    }, getForcedTarget: function () {
        return this._forcedTarget
    }, setForcedTarget: function (forcedTarget) {
        if (this._forcedTarget != forcedTarget)this._forcedTarget = forcedTarget
    }});
cc.TargetedAction.create = function (target, action) {
    return new cc.TargetedAction(target, action)
};
cc.ActionInstant = cc.FiniteTimeAction.extend({isDone: function () {
    return true
}, step: function (dt) {
    this.update(1)
}, update: function (time) {
}, reverse: function () {
    return this.clone()
}, clone: function () {
    return new cc.ActionInstant
}});
cc.Show = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = true
}, reverse: function () {
    return cc.Hide.create()
}, clone: function () {
    return new cc.Show
}});
cc.Show.create = function () {
    return new cc.Show
};
cc.Hide = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = false
}, reverse: function () {
    return cc.Show.create()
}, clone: function () {
    return new cc.Hide
}});
cc.Hide.create = function () {
    return new cc.Hide
};
cc.ToggleVisibility = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = !this.target.visible
}, reverse: function () {
    return new cc.ToggleVisibility
}, clone: function () {
    return new cc.ToggleVisibility
}});
cc.ToggleVisibility.create = function () {
    return new cc.ToggleVisibility
};
cc.RemoveSelf = cc.ActionInstant.extend({_isNeedCleanUp: true, ctor: function (isNeedCleanUp) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    isNeedCleanUp !== undefined && this.init(isNeedCleanUp)
}, update: function (time) {
    this.target.removeFromParent(this._isNeedCleanUp)
}, init: function (isNeedCleanUp) {
    this._isNeedCleanUp = isNeedCleanUp;
    return true
}, reverse: function () {
    return new cc.RemoveSelf(this._isNeedCleanUp)
}, clone: function () {
    return new cc.RemoveSelf(this._isNeedCleanUp)
}});
cc.RemoveSelf.create = function (isNeedCleanUp) {
    return new cc.RemoveSelf(isNeedCleanUp)
};
cc.FlipX = cc.ActionInstant.extend({_flippedX: false, ctor: function (flip) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._flippedX = false;
    flip !== undefined && this.initWithFlipX(flip)
}, initWithFlipX: function (flip) {
    this._flippedX = flip;
    return true
}, update: function (time) {
    this.target.flippedX = this._flippedX
}, reverse: function () {
    return cc.FlipX.create(!this._flippedX)
}, clone: function () {
    var action = new cc.FlipX;
    action.initWithFlipX(this._flippedX);
    return action
}});
cc.FlipX.create = function (flip) {
    return new cc.FlipX(flip)
};
cc.FlipY = cc.ActionInstant.extend({_flippedY: false, ctor: function (flip) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._flippedY = false;
    flip !== undefined && this.initWithFlipY(flip)
}, initWithFlipY: function (flip) {
    this._flippedY = flip;
    return true
}, update: function (time) {
    this.target.flippedY = this._flippedY
}, reverse: function () {
    return cc.FlipY.create(!this._flippedY)
}, clone: function () {
    var action = new cc.FlipY;
    action.initWithFlipY(this._flippedY);
    return action
}});
cc.FlipY.create = function (flip) {
    return new cc.FlipY(flip)
};
cc.Place = cc.ActionInstant.extend({_x: 0, _y: 0, ctor: function (pos, y) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._x = 0;
    this._y = 0;
    if (pos !== undefined) {
        if (pos.x !== undefined) {
            y = pos.y;
            pos = pos.x
        }
        this.initWithPosition(pos, y)
    }
}, initWithPosition: function (x, y) {
    this._x = x;
    this._y = y;
    return true
}, update: function (time) {
    this.target.setPosition(this._x, this._y)
}, clone: function () {
    var action = new cc.Place;
    action.initWithPosition(this._x, this._y);
    return action
}});
cc.Place.create = function (pos, y) {
    return new cc.Place(pos, y)
};
cc.CallFunc = cc.ActionInstant.extend({_selectorTarget: null, _callFunc: null, _function: null, _data: null, ctor: function (selector, selectorTarget, data) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    if (selector !== undefined)if (selectorTarget === undefined)this.initWithFunction(selector); else this.initWithFunction(selector, selectorTarget, data)
}, initWithFunction: function (selector, selectorTarget, data) {
    if (selectorTarget) {
        this._data = data;
        this._callFunc = selector;
        this._selectorTarget = selectorTarget
    } else if (selector)this._function =
        selector;
    return true
}, execute: function () {
    if (this._callFunc != null)this._callFunc.call(this._selectorTarget, this.target, this._data); else if (this._function)this._function.call(null, this.target)
}, update: function (time) {
    this.execute()
}, getTargetCallback: function () {
    return this._selectorTarget
}, setTargetCallback: function (sel) {
    if (sel != this._selectorTarget) {
        if (this._selectorTarget)this._selectorTarget = null;
        this._selectorTarget = sel
    }
}, clone: function () {
    var action = new cc.CallFunc;
    if (this._selectorTarget)action.initWithFunction(this._callFunc,
        this._selectorTarget, this._data); else if (this._function)action.initWithFunction(this._function);
    return action
}});
cc.CallFunc.create = function (selector, selectorTarget, data) {
    return new cc.CallFunc(selector, selectorTarget, data)
};
cc.ActionCamera = cc.ActionInterval.extend({_centerXOrig: 0, _centerYOrig: 0, _centerZOrig: 0, _eyeXOrig: 0, _eyeYOrig: 0, _eyeZOrig: 0, _upXOrig: 0, _upYOrig: 0, _upZOrig: 0, ctor: function () {
    var _t = this;
    cc.ActionInterval.prototype.ctor.call(_t);
    _t._centerXOrig = 0;
    _t._centerYOrig = 0;
    _t._centerZOrig = 0;
    _t._eyeXOrig = 0;
    _t._eyeYOrig = 0;
    _t._eyeZOrig = 0;
    _t._upXOrig = 0;
    _t._upYOrig = 0;
    _t._upZOrig = 0
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var camera = target.getCamera();
    var centerXYZ = camera.getCenter();
    _t._centerXOrig = centerXYZ.x;
    _t._centerYOrig = centerXYZ.y;
    _t._centerZOrig = centerXYZ.z;
    var eyeXYZ = camera.getEye();
    _t._eyeXOrig = eyeXYZ.x;
    _t._eyeYOrig = eyeXYZ.y;
    _t._eyeZOrig = eyeXYZ.z;
    var upXYZ = camera.getUp();
    _t._upXOrig = upXYZ.x;
    _t._upYOrig = upXYZ.y;
    _t._upZOrig = upXYZ.z
}, clone: function () {
    return new cc.ActionCamera
}, reverse: function () {
    return cc.ReverseTime.create(this)
}});
cc.OrbitCamera = cc.ActionCamera.extend({_radius: 0, _deltaRadius: 0, _angleZ: 0, _deltaAngleZ: 0, _angleX: 0, _deltaAngleX: 0, _radZ: 0, _radDeltaZ: 0, _radX: 0, _radDeltaX: 0, ctor: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    cc.ActionCamera.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
}, initWithDuration: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        t)) {
        var _t = this;
        _t._radius = radius;
        _t._deltaRadius = deltaRadius;
        _t._angleZ = angleZ;
        _t._deltaAngleZ = deltaAngleZ;
        _t._angleX = angleX;
        _t._deltaAngleX = deltaAngleX;
        _t._radDeltaZ = cc.degreesToRadians(deltaAngleZ);
        _t._radDeltaX = cc.degreesToRadians(deltaAngleX);
        return true
    }
    return false
}, sphericalRadius: function () {
    var newRadius, zenith, azimuth;
    var camera = this.target.getCamera();
    var eyeXYZ = camera.getEye();
    var centerXYZ = camera.getCenter();
    var x = eyeXYZ.x - centerXYZ.x, y = eyeXYZ.y - centerXYZ.y, z = eyeXYZ.z - centerXYZ.z;
    var r =
        Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    var s = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (s === 0)s = cc.FLT_EPSILON;
    if (r === 0)r = cc.FLT_EPSILON;
    zenith = Math.acos(z / r);
    if (x < 0)azimuth = Math.PI - Math.asin(y / s); else azimuth = Math.asin(y / s);
    newRadius = r / cc.Camera.getZEye();
    return{newRadius: newRadius, zenith: zenith, azimuth: azimuth}
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var retValue = _t.sphericalRadius();
    if (isNaN(_t._radius))_t._radius = retValue.newRadius;
    if (isNaN(_t._angleZ))_t._angleZ = cc.radiansToDegrees(retValue.zenith);
    if (isNaN(_t._angleX))_t._angleX = cc.radiansToDegrees(retValue.azimuth);
    _t._radZ = cc.degreesToRadians(_t._angleZ);
    _t._radX = cc.degreesToRadians(_t._angleX)
}, clone: function () {
    var a = new cc.OrbitCamera, _t = this;
    a.initWithDuration(_t._duration, _t._radius, _t._deltaRadius, _t._angleZ, _t._deltaAngleZ, _t._angleX, _t._deltaAngleX);
    return a
}, update: function (dt) {
    dt = this._computeEaseTime(dt);
    var r = (this._radius + this._deltaRadius * dt) * cc.Camera.getZEye();
    var za = this._radZ + this._radDeltaZ * dt;
    var xa = this._radX + this._radDeltaX * dt;
    var i = Math.sin(za) * Math.cos(xa) * r + this._centerXOrig;
    var j = Math.sin(za) * Math.sin(xa) * r + this._centerYOrig;
    var k = Math.cos(za) * r + this._centerZOrig;
    this.target.getCamera().setEye(i, j, k)
}});
cc.OrbitCamera.create = function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    return new cc.OrbitCamera(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
};
cc.ActionEase = cc.ActionInterval.extend({_inner: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ActionEase.initWithAction(): action must be non nil";
    if (this.initWithDuration(action.getDuration())) {
        this._inner = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ActionEase;
    action.initWithAction(this._inner.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._inner.startWithTarget(this.target)
}, stop: function () {
    this._inner.stop();
    cc.ActionInterval.prototype.stop.call(this)
}, update: function (time1) {
    this._inner.update(time1)
}, reverse: function () {
    return cc.ActionEase.create(this._inner.reverse())
}, getInnerAction: function () {
    return this._inner
}});
cc.ActionEase.create = function (action) {
    return new cc.ActionEase(action)
};
cc.EaseRateAction = cc.ActionEase.extend({_rate: 0, ctor: function (action, rate) {
    cc.ActionEase.prototype.ctor.call(this);
    rate !== undefined && this.initWithAction(action, rate)
}, setRate: function (rate) {
    this._rate = rate
}, getRate: function () {
    return this._rate
}, initWithAction: function (action, rate) {
    if (cc.ActionEase.prototype.initWithAction.call(this, action)) {
        this._rate = rate;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.EaseRateAction;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
},
    reverse: function () {
        return cc.EaseRateAction.create(this._inner.reverse(), 1 / this._rate)
    }});
cc.EaseRateAction.create = function (action, rate) {
    return new cc.EaseRateAction(action, rate)
};
cc.EaseIn = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, this._rate))
}, reverse: function () {
    return cc.EaseIn.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseIn;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseIn.create = function (action, rate) {
    return new cc.EaseIn(action, rate)
};
cc.easeIn = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, this._rate)
    }, reverse: function () {
        return cc.easeIn(1 / this._rate)
    }}
};
cc.EaseOut = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, 1 / this._rate))
}, reverse: function () {
    return cc.EaseOut.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseOut.create = function (action, rate) {
    return new cc.EaseOut(action, rate)
};
cc.easeOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, 1 / this._rate)
    }, reverse: function () {
        return cc.easeOut(1 / this._rate)
    }}
};
cc.EaseInOut = cc.EaseRateAction.extend({update: function (time1) {
    time1 *= 2;
    if (time1 < 1)this._inner.update(0.5 * Math.pow(time1, this._rate)); else this._inner.update(1 - 0.5 * Math.pow(2 - time1, this._rate))
}, clone: function () {
    var action = new cc.EaseInOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}, reverse: function () {
    return cc.EaseInOut.create(this._inner.reverse(), this._rate)
}});
cc.EaseInOut.create = function (action, rate) {
    return new cc.EaseInOut(action, rate)
};
cc.easeInOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(dt, this._rate); else return 1 - 0.5 * Math.pow(2 - dt, this._rate)
    }, reverse: function () {
        return cc.easeInOut(this._rate)
    }}
};
cc.EaseExponentialIn = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 === 0 ? 0 : Math.pow(2, 10 * (time1 - 1)))
}, reverse: function () {
    return cc.EaseExponentialOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialIn.create = function (action) {
    return new cc.EaseExponentialIn(action)
};
cc._easeExponentialInObj = {easing: function (dt) {
    return dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1))
}, reverse: function () {
    return cc._easeExponentialOutObj
}};
cc.easeExponentialIn = function () {
    return cc._easeExponentialInObj
};
cc.EaseExponentialOut = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 == 1 ? 1 : -Math.pow(2, -10 * time1) + 1)
}, reverse: function () {
    return cc.EaseExponentialIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialOut.create = function (action) {
    return new cc.EaseExponentialOut(action)
};
cc._easeExponentialOutObj = {easing: function (dt) {
    return dt == 1 ? 1 : -Math.pow(2, -10 * dt) + 1
}, reverse: function () {
    return cc._easeExponentialInObj
}};
cc.easeExponentialOut = function () {
    return cc._easeExponentialOutObj
};
cc.EaseExponentialInOut = cc.ActionEase.extend({update: function (time) {
    if (time != 1 && time !== 0) {
        time *= 2;
        if (time < 1)time = 0.5 * Math.pow(2, 10 * (time - 1)); else time = 0.5 * (-Math.pow(2, -10 * (time - 1)) + 2)
    }
    this._inner.update(time)
}, reverse: function () {
    return cc.EaseExponentialInOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialInOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialInOut.create = function (action) {
    return new cc.EaseExponentialInOut(action)
};
cc._easeExponentialInOutObj = {easing: function (dt) {
    if (dt !== 1 && dt !== 0) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(2, 10 * (dt - 1)); else return 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2)
    }
    return dt
}, reverse: function () {
    return cc._easeExponentialInOutObj
}};
cc.easeExponentialInOut = function () {
    return cc._easeExponentialInOutObj
};
cc.EaseSineIn = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -1 * Math.cos(time1 * Math.PI / 2) + 1;
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineIn.create = function (action) {
    return new cc.EaseSineIn(action)
};
cc._easeSineInObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1
}, reverse: function () {
    return cc._easeSineOutObj
}};
cc.easeSineIn = function () {
    return cc._easeSineInObj
};
cc.EaseSineOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : Math.sin(time1 * Math.PI / 2);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineOut.create = function (action) {
    return new cc.EaseSineOut(action)
};
cc._easeSineOutObj = {easing: function (dt) {
    return dt === 0 || dt == 1 ? dt : Math.sin(dt * Math.PI / 2)
}, reverse: function () {
    return cc._easeSineInObj
}};
cc.easeSineOut = function () {
    return cc._easeSineOutObj
};
cc.EaseSineInOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -0.5 * (Math.cos(Math.PI * time1) - 1);
    this._inner.update(time1)
}, clone: function () {
    var action = new cc.EaseSineInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseSineInOut.create(this._inner.reverse())
}});
cc.EaseSineInOut.create = function (action) {
    return new cc.EaseSineInOut(action)
};
cc._easeSineInOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1)
}, reverse: function () {
    return cc._easeSineInOutObj
}};
cc.easeSineInOut = function () {
    return cc._easeSineInOutObj
};
cc.EaseElastic = cc.ActionEase.extend({_period: 0.3, ctor: function (action, period) {
    cc.ActionEase.prototype.ctor.call(this);
    action && this.initWithAction(action, period)
}, getPeriod: function () {
    return this._period
}, setPeriod: function (period) {
    this._period = period
}, initWithAction: function (action, period) {
    cc.ActionEase.prototype.initWithAction.call(this, action);
    this._period = period == null ? 0.3 : period;
    return true
}, reverse: function () {
    cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
    return null
},
    clone: function () {
        var action = new cc.EaseElastic;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElastic.create = function (action, period) {
    return new cc.EaseElastic(action, period)
};
cc.EaseElasticIn = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 === 1)newT = time1; else {
        var s = this._period / 4;
        time1 = time1 - 1;
        newT = -Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period)
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticOut.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticIn;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticIn.create = function (action, period) {
    return new cc.EaseElasticIn(action, period)
};
cc._easeElasticInObj = {easing: function (dt) {
    if (dt === 0 || dt === 1)return dt;
    dt = dt - 1;
    return-Math.pow(2, 10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3)
}, reverse: function () {
    return cc._easeElasticOutObj
}};
cc.easeElasticIn = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        if (dt === 0 || dt === 1)return dt;
        dt = dt - 1;
        return-Math.pow(2, 10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period)
    }, reverse: function () {
        return cc.easeElasticOut(this._period)
    }};
    return cc._easeElasticInObj
};
cc.EaseElasticOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        var s = this._period / 4;
        newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period) + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticIn.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticOut;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticOut.create = function (action, period) {
    return new cc.EaseElasticOut(action, period)
};
cc._easeElasticOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3) + 1
}, reverse: function () {
    return cc._easeElasticInObj
}};
cc.easeElasticOut = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period) + 1
    }, reverse: function () {
        return cc.easeElasticIn(this._period)
    }};
    return cc._easeElasticOutObj
};
cc.EaseElasticInOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    var locPeriod = this._period;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        time1 = time1 * 2;
        if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
        var s = locPeriod / 4;
        time1 = time1 - 1;
        if (time1 < 0)newT = -0.5 * Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticInOut.create(this._inner.reverse(), this._period)
},
    clone: function () {
        var action = new cc.EaseElasticInOut;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElasticInOut.create = function (action, period) {
    return new cc.EaseElasticInOut(action, period)
};
cc.easeElasticInOut = function (period) {
    period = period || 0.3;
    return{_period: period, easing: function (dt) {
        var newT = 0;
        var locPeriod = this._period;
        if (dt === 0 || dt === 1)newT = dt; else {
            dt = dt * 2;
            if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
            var s = locPeriod / 4;
            dt = dt - 1;
            if (dt < 0)newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
        }
        return newT
    }, reverse: function () {
        return cc.easeElasticInOut(this._period)
    }}
};
cc.EaseBounce = cc.ActionEase.extend({bounceTime: function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
}, clone: function () {
    var action = new cc.EaseBounce;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounce.create(this._inner.reverse())
}});
cc.EaseBounce.create = function (action) {
    return new cc.EaseBounce(action)
};
cc.EaseBounceIn = cc.EaseBounce.extend({update: function (time1) {
    var newT = 1 - this.bounceTime(1 - time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceIn.create = function (action) {
    return new cc.EaseBounceIn(action)
};
cc._bounceTime = function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
};
cc._easeBounceInObj = {easing: function (dt) {
    return 1 - cc._bounceTime(1 - dt)
}, reverse: function () {
    return cc._easeBounceOutObj
}};
cc.easeBounceIn = function () {
    return cc._easeBounceInObj
};
cc.EaseBounceOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = this.bounceTime(time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceOut.create = function (action) {
    return new cc.EaseBounceOut(action)
};
cc._easeBounceOutObj = {easing: function (dt) {
    return cc._bounceTime(dt)
}, reverse: function () {
    return cc._easeBounceInObj
}};
cc.easeBounceOut = function () {
    return cc._easeBounceOutObj
};
cc.EaseBounceInOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = 0;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - this.bounceTime(1 - time1)) * 0.5
    } else newT = this.bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    this._inner.update(newT)
}, clone: function () {
    var action = new cc.EaseBounceInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounceInOut.create(this._inner.reverse())
}});
cc.EaseBounceInOut.create = function (action) {
    return new cc.EaseBounceInOut(action)
};
cc._easeBounceInOutObj = {easing: function (time1) {
    var newT;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - cc._bounceTime(1 - time1)) * 0.5
    } else newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    return newT
}, reverse: function () {
    return cc._easeBounceInOutObj
}};
cc.easeBounceInOut = function () {
    return cc._easeBounceInOutObj
};
cc.EaseBackIn = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 === 0 || time1 == 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseBackOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackIn.create = function (action) {
    return new cc.EaseBackIn(action)
};
cc._easeBackInObj = {easing: function (time1) {
    var overshoot = 1.70158;
    return time1 === 0 || time1 === 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot)
}, reverse: function () {
    return cc._easeBackOutObj
}};
cc.easeBackIn = function () {
    return cc._easeBackInObj
};
cc.EaseBackOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1)
}, reverse: function () {
    return cc.EaseBackIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackOut.create = function (action) {
    return new cc.EaseBackOut(action)
};
cc._easeBackOutObj = {easing: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1
}, reverse: function () {
    return cc._easeBackInObj
}};
cc.easeBackOut = function () {
    return cc._easeBackOutObj
};
cc.EaseBackInOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)this._inner.update(time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2); else {
        time1 = time1 - 2;
        this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1)
    }
}, clone: function () {
    var action = new cc.EaseBackInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBackInOut.create(this._inner.reverse())
}});
cc.EaseBackInOut.create = function (action) {
    return new cc.EaseBackInOut(action)
};
cc._easeBackInOutObj = {easing: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)return time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2; else {
        time1 = time1 - 2;
        return time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1
    }
}, reverse: function () {
    return cc._easeBackInOutObj
}};
cc.easeBackInOut = function () {
    return cc._easeBackInOutObj
};
cc.EaseBezierAction = cc.ActionEase.extend({_p0: null, _p1: null, _p2: null, _p3: null, ctor: function (action) {
    cc.ActionEase.prototype.ctor.call(this, action)
}, _updateTime: function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
}, update: function (time) {
    var t = this._updateTime(this._p0, this._p1, this._p2, this._p3, time);
    this._inner.update(t)
}, clone: function () {
    var action = new cc.EaseBezierAction;
    action.initWithAction(this._inner.clone());
    action.setBezierParamer(this._p0,
        this._p1, this._p2, this._p3);
    return action
}, reverse: function () {
    var action = cc.EaseBezierAction.create(this._inner.reverse());
    action.setBezierParamer(this._p3, this._p2, this._p1, this._p0);
    return action
}, setBezierParamer: function (p0, p1, p2, p3) {
    this._p0 = p0 || 0;
    this._p1 = p1 || 0;
    this._p2 = p2 || 0;
    this._p3 = p3 || 0
}});
cc.EaseBezierAction.create = function (action) {
    return new cc.EaseBezierAction(action)
};
cc.easeBezierAction = function (p0, p1, p2, p3) {
    return{easing: function (time) {
        return cc.EaseBezierAction.prototype._updateTime(p0, p1, p2, p3, time)
    }, reverse: function () {
        return cc.easeBezierAction(p3, p2, p1, p0)
    }}
};
cc.EaseQuadraticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return Math.pow(time, 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionIn.create(this._inner.reverse())
}});
cc.EaseQuadraticActionIn.create = function (action) {
    return new cc.EaseQuadraticActionIn(action)
};
cc._easeQuadraticActionIn = {easing: cc.EaseQuadraticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionIn
}};
cc.easeQuadraticActionIn = function () {
    return cc._easeQuadraticActionIn
};
cc.EaseQuadraticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    return-time * (time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionOut;
    action.initWithAction();
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionOut.create = function (action) {
    return new cc.EaseQuadraticActionOut(action)
};
cc._easeQuadraticActionOut = {easing: cc.EaseQuadraticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionOut
}};
cc.easeQuadraticActionOut = function () {
    return cc._easeQuadraticActionOut
};
cc.EaseQuadraticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    var resultTime = time;
    time *= 2;
    if (time < 1)resultTime = time * time * 0.5; else {
        --time;
        resultTime = -0.5 * (time * (time - 2) - 1)
    }
    return resultTime
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionInOut.create = function (action) {
    return new cc.EaseQuadraticActionInOut(action)
};
cc._easeQuadraticActionInOut = {easing: cc.EaseQuadraticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionInOut
}};
cc.easeQuadraticActionInOut = function () {
    return cc._easeQuadraticActionInOut
};
cc.EaseQuarticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionIn.create(this._inner.reverse())
}});
cc.EaseQuarticActionIn.create = function (action) {
    return new cc.EaseQuarticActionIn(action)
};
cc._easeQuarticActionIn = {easing: cc.EaseQuarticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionIn
}};
cc.easeQuarticActionIn = function () {
    return cc._easeQuarticActionIn
};
cc.EaseQuarticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return-(time * time * time * time - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionOut.create = function (action) {
    return new cc.EaseQuarticActionOut(action)
};
cc._easeQuarticActionOut = {easing: cc.EaseQuarticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionOut
}};
cc.easeQuarticActionOut = function () {
    return cc._easeQuarticActionOut
};
cc.EaseQuarticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time;
    time -= 2;
    return-0.5 * (time * time * time * time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionInOut.create = function (action) {
    return new cc.EaseQuarticActionInOut(action)
};
cc._easeQuarticActionInOut = {easing: cc.EaseQuarticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionInOut
}};
cc.easeQuarticActionInOut = function () {
    return cc._easeQuarticActionInOut
};
cc.EaseQuinticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionIn.create(this._inner.reverse())
}});
cc.EaseQuinticActionIn.create = function (action) {
    return new cc.EaseQuinticActionIn(action)
};
cc._easeQuinticActionIn = {easing: cc.EaseQuinticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionIn
}};
cc.easeQuinticActionIn = function () {
    return cc._easeQuinticActionIn
};
cc.EaseQuinticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionOut.create = function (action) {
    return new cc.EaseQuinticActionOut(action)
};
cc._easeQuinticActionOut = {easing: cc.EaseQuinticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionOut
}};
cc.easeQuinticActionOut = function () {
    return cc._easeQuinticActionOut
};
cc.EaseQuinticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionInOut.create = function (action) {
    return new cc.EaseQuinticActionInOut(action)
};
cc._easeQuinticActionInOut = {easing: cc.EaseQuinticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionInOut
}};
cc.easeQuinticActionInOut = function () {
    return cc._easeQuinticActionInOut
};
cc.EaseCircleActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return-1 * (Math.sqrt(1 - time * time) - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionIn.create(this._inner.reverse())
}});
cc.EaseCircleActionIn.create = function (action) {
    return new cc.EaseCircleActionIn(action)
};
cc._easeCircleActionIn = {easing: cc.EaseCircleActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionIn
}};
cc.easeCircleActionIn = function () {
    return cc._easeCircleActionIn
};
cc.EaseCircleActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time - 1;
    return Math.sqrt(1 - time * time)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionOut.create(this._inner.reverse())
}});
cc.EaseCircleActionOut.create = function (action) {
    return new cc.EaseCircleActionOut(action)
};
cc._easeCircleActionOut = {easing: cc.EaseCircleActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionOut
}};
cc.easeCircleActionOut = function () {
    return cc._easeCircleActionOut
};
cc.EaseCircleActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return-0.5 * (Math.sqrt(1 - time * time) - 1);
    time -= 2;
    return 0.5 * (Math.sqrt(1 - time * time) + 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionInOut.create(this._inner.reverse())
}});
cc.EaseCircleActionInOut.create = function (action) {
    return new cc.EaseCircleActionInOut(action)
};
cc._easeCircleActionInOut = {easing: cc.EaseCircleActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionInOut
}};
cc.easeCircleActionInOut = function () {
    return cc._easeCircleActionInOut
};
cc.EaseCubicActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionIn.create(this._inner.reverse())
}});
cc.EaseCubicActionIn.create = function (action) {
    return new cc.EaseCubicActionIn(action)
};
cc._easeCubicActionIn = {easing: cc.EaseCubicActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionIn
}};
cc.easeCubicActionIn = function () {
    return cc._easeCubicActionIn
};
cc.EaseCubicActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionOut.create(this._inner.reverse())
}});
cc.EaseCubicActionOut.create = function (action) {
    return new cc.EaseCubicActionOut(action)
};
cc._easeCubicActionOut = {easing: cc.EaseCubicActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionOut
}};
cc.easeCubicActionOut = function () {
    return cc._easeCubicActionOut
};
cc.EaseCubicActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionInOut.create(this._inner.reverse())
}});
cc.EaseCubicActionInOut.create = function (action) {
    return new cc.EaseCubicActionInOut(action)
};
cc._easeCubicActionInOut = {easing: cc.EaseCubicActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionInOut
}};
cc.easeCubicActionInOut = function () {
    return cc._easeCubicActionInOut
};
cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    var s = (1 - tension) / 2;
    var b1 = s * (-t3 + 2 * t2 - t);
    var b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);
    var b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);
    var b4 = s * (t3 - t2);
    var x = p0.x * b1 + p1.x * b2 + p2.x * b3 + p3.x * b4;
    var y = p0.y * b1 + p1.y * b2 + p2.y * b3 + p3.y * b4;
    return cc.p(x, y)
};
cc.reverseControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = controlPoints.length - 1; i >= 0; i--)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.copyControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = 0; i < controlPoints.length; i++)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.getControlPointAt = function (controlPoints, pos) {
    var p = Math.min(controlPoints.length - 1, Math.max(pos, 0));
    return controlPoints[p]
};
cc.reverseControlPointsInline = function (controlPoints) {
    var len = controlPoints.length;
    var mid = 0 | len / 2;
    for (var i = 0; i < mid; ++i) {
        var temp = controlPoints[i];
        controlPoints[i] = controlPoints[len - i - 1];
        controlPoints[len - i - 1] = temp
    }
};
cc.CardinalSplineTo = cc.ActionInterval.extend({_points: null, _deltaT: 0, _tension: 0, _previousPosition: null, _accumulatedDiff: null, ctor: function (duration, points, tension) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._points = [];
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, initWithDuration: function (duration, points, tension) {
    if (!points || points.length == 0)throw"Invalid configuration. It must at least have one control point";
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        duration)) {
        this.setPoints(points);
        this._tension = tension;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.CardinalSplineTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._deltaT = 1 / (this._points.length - 1);
    this._previousPosition = cc.p(this.target.getPositionX(), this.target.getPositionY());
    this._accumulatedDiff = cc.p(0, 0)
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    var p, lt;
    var ps = this._points;
    if (time == 1) {
        p = ps.length - 1;
        lt = 1
    } else {
        var locDT = this._deltaT;
        p = 0 | time / locDT;
        lt = (time - locDT * p) / locDT
    }
    var newPos = cc.cardinalSplineAt(cc.getControlPointAt(ps, p - 1), cc.getControlPointAt(ps, p - 0), cc.getControlPointAt(ps, p + 1), cc.getControlPointAt(ps, p + 2), this._tension, lt);
    if (cc.ENABLE_STACKABLE_ACTIONS) {
        var tempX, tempY;
        tempX = this.target.getPositionX() - this._previousPosition.x;
        tempY = this.target.getPositionY() - this._previousPosition.y;
        if (tempX != 0 || tempY !=
            0) {
            var locAccDiff = this._accumulatedDiff;
            tempX = locAccDiff.x + tempX;
            tempY = locAccDiff.y + tempY;
            locAccDiff.x = tempX;
            locAccDiff.y = tempY;
            newPos.x += tempX;
            newPos.y += tempY
        }
    }
    this.updatePosition(newPos)
}, reverse: function () {
    var reversePoints = cc.reverseControlPoints(this._points);
    return cc.CardinalSplineTo.create(this._duration, reversePoints, this._tension)
}, updatePosition: function (newPos) {
    this.target.setPosition(newPos);
    this._previousPosition = newPos
}, getPoints: function () {
    return this._points
}, setPoints: function (points) {
    this._points =
        points
}});
cc.CardinalSplineTo.create = function (duration, points, tension) {
    return new cc.CardinalSplineTo(duration, points, tension)
};
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({_startPosition: null, ctor: function (duration, points, tension) {
    cc.CardinalSplineTo.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, startWithTarget: function (target) {
    cc.CardinalSplineTo.prototype.startWithTarget.call(this, target);
    this._startPosition.x = target.getPositionX();
    this._startPosition.y = target.getPositionY()
}, reverse: function () {
    var copyConfig = this._points.slice();
    var current;
    var p = copyConfig[0];
    for (var i = 1; i < copyConfig.length; ++i) {
        current = copyConfig[i];
        copyConfig[i] = cc.pSub(current, p);
        p = current
    }
    var reverseArray = cc.reverseControlPoints(copyConfig);
    p = reverseArray[reverseArray.length - 1];
    reverseArray.pop();
    p.x = -p.x;
    p.y = -p.y;
    reverseArray.unshift(p);
    for (var i = 1; i < reverseArray.length; ++i) {
        current = reverseArray[i];
        current.x = -current.x;
        current.y = -current.y;
        current.x += p.x;
        current.y += p.y;
        reverseArray[i] = current;
        p = current
    }
    return cc.CardinalSplineBy.create(this._duration, reverseArray,
        this._tension)
}, updatePosition: function (newPos) {
    var pos = this._startPosition;
    var posX = newPos.x + pos.x;
    var posY = newPos.y + pos.y;
    this._previousPosition.x = posX;
    this._previousPosition.y = posY;
    this.target.setPosition(posX, posY)
}, clone: function () {
    var a = new cc.CardinalSplineBy;
    a.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return a
}});
cc.CardinalSplineBy.create = function (duration, points, tension) {
    return new cc.CardinalSplineBy(duration, points, tension)
};
cc.CatmullRomTo = cc.CardinalSplineTo.extend({ctor: function (dt, points) {
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomTo.create = function (dt, points) {
    return new cc.CatmullRomTo(dt, points)
};
cc.CatmullRomBy = cc.CardinalSplineBy.extend({ctor: function (dt, points) {
    cc.CardinalSplineBy.prototype.ctor.call(this);
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomBy;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomBy.create = function (dt, points) {
    return new cc.CatmullRomBy(dt, points)
};
cc.ActionTweenDelegate = cc.Class.extend({updateTweenAction: function (value, key) {
}});
cc.ActionTween = cc.ActionInterval.extend({key: "", from: 0, to: 0, delta: 0, ctor: function (duration, key, from, to) {
    cc.ActionInterval.prototype.ctor.call(this);
    this.key = "";
    to !== undefined && this.initWithDuration(duration, key, from, to)
}, initWithDuration: function (duration, key, from, to) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this.key = key;
        this.to = to;
        this.from = from;
        return true
    }
    return false
}, startWithTarget: function (target) {
    if (!target || !target.updateTweenAction)throw"cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this.delta = this.to - this.from
}, update: function (dt) {
    this.target.updateTweenAction(this.to - this.delta * (1 - dt), this.key)
}, reverse: function () {
    return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
}, clone: function () {
    var action = new cc.ActionTween;
    action.initWithDuration(this._duration, this.key, this.from, this.to);
    return action
}});
cc.ActionTween.create = function (duration, key, from, to) {
    var ret = new cc.ActionTween;
    if (ret.initWithDuration(duration, key, from, to))return ret;
    return null
};
cc.action = cc.Action.create;
cc.speed = cc.Speed.create;
cc.follow = cc.Follow.create;
cc.orbitCamera = cc.OrbitCamera.create;
cc.cardinalSplineTo = cc.CardinalSplineTo.create;
cc.cardinalSplineBy = cc.CardinalSplineBy.create;
cc.catmullRomTo = cc.CatmullRomTo.create;
cc.catmullRomBy = cc.CatmullRomBy.create;
cc.show = cc.Show.create;
cc.hide = cc.Hide.create;
cc.toggleVisibility = cc.ToggleVisibility.create;
cc.removeSelf = cc.RemoveSelf.create;
cc.flipX = cc.FlipX.create;
cc.flipY = cc.FlipY.create;
cc.place = cc.Place.create;
cc.callFunc = cc.CallFunc.create;
cc.actionInterval = cc.ActionInterval.create;
cc.sequence = cc.Sequence.create;
cc.repeat = cc.Repeat.create;
cc.repeatForever = cc.RepeatForever.create;
cc.spawn = cc.Spawn.create;
cc.rotateTo = cc.RotateTo.create;
cc.rotateBy = cc.RotateBy.create;
cc.moveBy = cc.MoveBy.create;
cc.moveTo = cc.MoveTo.create;
cc.skewTo = cc.SkewTo.create;
cc.skewBy = cc.SkewBy.create;
cc.jumpBy = cc.JumpBy.create;
cc.jumpTo = cc.JumpTo.create;
cc.bezierBy = cc.BezierBy.create;
cc.bezierTo = cc.BezierTo.create;
cc.scaleTo = cc.ScaleTo.create;
cc.scaleBy = cc.ScaleBy.create;
cc.blink = cc.Blink.create;
cc.fadeTo = cc.FadeTo.create;
cc.fadeIn = cc.FadeIn.create;
cc.fadeOut = cc.FadeOut.create;
cc.tintTo = cc.TintTo.create;
cc.tintBy = cc.TintBy.create;
cc.delayTime = cc.DelayTime.create;
cc.reverseTime = cc.ReverseTime.create;
cc.animate = cc.Animate.create;
cc.targetedAction = cc.TargetedAction.create;
cc.actionTween = cc.ActionTween.create;


/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * @class
 * @extends cc.Class
 */
cc.HashElement = cc.Class.extend(/** @lends cc.HashElement# */{
    actions:null,
    target:null, //ccobject
    actionIndex:0,
    currentAction:null, //CCAction
    currentActionSalvaged:false,
    paused:false,
    hh:null, //ut hash handle
    /**
     * Constructor
     */
    ctor:function () {
        this.actions = [];
        this.target = null;
        this.actionIndex = 0;
        this.currentAction = null; //CCAction
        this.currentActionSalvaged = false;
        this.paused = false;
        this.hh = null; //ut hash handle
    }
});
cc.ActionManager = cc.Class.extend({
    _hashTargets:null,
    _arrayTargets:null,
    _currentTarget:null,
    _currentTargetSalvaged:false,
    _searchElementByTarget:function (arr, target) {
        for (var k = 0; k < arr.length; k++) {
            if (target == arr[k].target)
                return arr[k];
        }
        return null;
    },
    ctor:function () {
        this._hashTargets = {};
        this._arrayTargets = [];
        this._currentTarget = null;
        this._currentTargetSalvaged = false;
    },
    addAction:function (action, target, paused) {
        if(!action)
            throw "cc.ActionManager.addAction(): action must be non-null";
        if(!target)
            throw "cc.ActionManager.addAction(): action must be non-null";

        //check if the action target already exists
        var element = this._hashTargets[target.__instanceId];
        //if doesnt exists, create a hashelement and push in mpTargets
        if (!element) {
            element = new cc.HashElement();
            element.paused = paused;
            element.target = target;
            this._hashTargets[target.__instanceId] = element;
            this._arrayTargets.push(element);
        }
        //creates a array for that eleemnt to hold the actions
        this._actionAllocWithHashElement(element);

        element.actions.push(action);
        action.startWithTarget(target);
    },
    removeAllActions:function () {
        var locTargets = this._arrayTargets;
        for (var i = 0; i < locTargets.length; i++) {
            var element = locTargets[i];
            if (element)
                this.removeAllActionsFromTarget(element.target, true);
        }
    },
    removeAllActionsFromTarget:function (target, forceDelete) {
        // explicit null handling
        if (target == null)
            return;
        var element = this._hashTargets[target.__instanceId];
        if (element) {
            if (element.actions.indexOf(element.currentAction) !== -1 && !(element.currentActionSalvaged))
                element.currentActionSalvaged = true;

            element.actions.length = 0;
            if (this._currentTarget == element && !forceDelete) {
                this._currentTargetSalvaged = true;
            } else {
                this._deleteHashElement(element);
            }
        }
    },
    removeAction:function (action) {
        // explicit null handling
        if (action == null)
            return;
        var target = action.getOriginalTarget();
        var element = this._hashTargets[target.__instanceId];

        if (element) {
            for (var i = 0; i < element.actions.length; i++) {
                if (element.actions[i] == action) {
                    element.actions.splice(i, 1);
                    break;
                }
            }
        } else {
            cc.log(cc._LogInfos.ActionManager_removeAction);
        }
    },
    removeActionByTag:function (tag, target) {
        if(tag == cc.ACTION_TAG_INVALID)
            cc.log(cc._LogInfos.ActionManager_addAction);

        cc.assert(target, cc._LogInfos.ActionManager_addAction);

        var element = this._hashTargets[target.__instanceId];

        if (element) {
            var limit = element.actions.length;
            for (var i = 0; i < limit; ++i) {
                var action = element.actions[i];
                if (action && action.getTag() === tag && action.getOriginalTarget() == target) {
                    this._removeActionAtIndex(i, element);
                    break;
                }
            }
        }
    },
    getActionByTag:function (tag, target) {
        if(tag == cc.ACTION_TAG_INVALID)
            cc.log(cc._LogInfos.ActionManager_getActionByTag);

        var element = this._hashTargets[target.__instanceId];
        if (element) {
            if (element.actions != null) {
                for (var i = 0; i < element.actions.length; ++i) {
                    var action = element.actions[i];
                    if (action && action.getTag() === tag)
                        return action;
                }
            }
            cc.log(cc._LogInfos.ActionManager_getActionByTag_2, tag);
        }
        return null;
    },
    numberOfRunningActionsInTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            return (element.actions) ? element.actions.length : 0;

        return 0;
    },
    pauseTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            element.paused = true;
    },
    resumeTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            element.paused = false;
    },
    pauseAllRunningActions:function(){
        var idsWithActions = [];
        var locTargets = this._arrayTargets;
        for(var i = 0; i< locTargets.length; i++){
            var element = locTargets[i];
            if(element && !element.paused){
                element.paused = true;
                idsWithActions.push(element.target);
            }
        }
        return idsWithActions;
    },
    resumeTargets:function(targetsToResume){
        if(!targetsToResume)
            return;

        for(var i = 0 ; i< targetsToResume.length; i++){
            if(targetsToResume[i])
                this.resumeTarget(targetsToResume[i]);
        }
    },
    purgeSharedManager:function () {
        cc.director.getScheduler().unscheduleUpdateForTarget(this);
    },
    _removeActionAtIndex:function (index, element) {
        var action = element.actions[index];

        if ((action == element.currentAction) && (!element.currentActionSalvaged))
            element.currentActionSalvaged = true;

        element.actions.splice(index, 1);
        if (element.actionIndex >= index)
            element.actionIndex--;

        if (element.actions.length == 0) {
            if (this._currentTarget == element) {
                this._currentTargetSalvaged = true;
            } else {
                this._deleteHashElement(element);
            }
        }
    },

    _deleteHashElement:function (element) {
        if (element) {
            delete this._hashTargets[element.target.__instanceId];
            cc.arrayRemoveObject(this._arrayTargets, element);
            element.actions = null;
            element.target = null;
        }
    },

    _actionAllocWithHashElement:function (element) {
        // 4 actions per Node by default
        if (element.actions == null) {
            element.actions = [];
        }
    },
    update:function (dt) {
        var locTargets = this._arrayTargets , locCurrTarget;
        for (var elt = 0; elt < locTargets.length; elt++) {
            this._currentTarget = locTargets[elt];
            locCurrTarget = this._currentTarget;
            //this._currentTargetSalvaged = false;
            if (!locCurrTarget.paused) {
                // The 'actions' CCMutableArray may change while inside this loop.
                for (locCurrTarget.actionIndex = 0; locCurrTarget.actionIndex < locCurrTarget.actions.length;
                     locCurrTarget.actionIndex++) {
                    locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                    if (!locCurrTarget.currentAction)
                        continue;

                    locCurrTarget.currentActionSalvaged = false;
                    //use for speed
                    locCurrTarget.currentAction.step(dt * ( locCurrTarget.currentAction._speedMethod ? locCurrTarget.currentAction._speed : 1 ) );
                    if (locCurrTarget.currentActionSalvaged) {
                        // The currentAction told the node to remove it. To prevent the action from
                        // accidentally deallocating itself before finishing its step, we retained
                        // it. Now that step is done, it's safe to release it.
                        locCurrTarget.currentAction = null;//release
                    } else if (locCurrTarget.currentAction.isDone()) {
                        locCurrTarget.currentAction.stop();
                        var action = locCurrTarget.currentAction;
                        // Make currentAction nil to prevent removeAction from salvaging it.
                        locCurrTarget.currentAction = null;
                        this.removeAction(action);
                    }

                    locCurrTarget.currentAction = null;
                }
            }

            // elt, at this moment, is still valid
            // so it is safe to ask this here (issue #490)

            // only delete currentTarget if no actions were scheduled during the cycle (issue #481)
            if (this._currentTargetSalvaged && locCurrTarget.actions.length === 0) {
                this._deleteHashElement(locCurrTarget);
            }
        }
    }
});
